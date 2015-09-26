System.register('ionic/components/nav/nav-controller', ['angular2/angular2', 'angular2/src/core/compiler/dynamic_component_loader', 'angular2/src/core/compiler/view_manager', '../ion', '../../config/config', '../app/app', './view-controller', './pane', '../../transitions/transition', './swipe-back', 'ionic/util'], function (_export) {
    /**
     * TODO
     */
    'use strict';

    var Compiler, Injector, bind, DynamicComponentLoader, AppViewManager, Ion, IonicConfig, IonicApp, ViewController, PaneController, Transition, SwipeBackGesture, util, NavController, ACTIVE_STATE, CACHED_STATE, STAGED_ENTERING_STATE, STAGED_LEAVING_STATE, ctrlIds, NavParams;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x7, _x8, _x9) { var _again = true; _function: while (_again) { var object = _x7, property = _x8, receiver = _x9; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x7 = parent; _x8 = property; _x9 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            Compiler = _angular2Angular2.Compiler;
            Injector = _angular2Angular2.Injector;
            bind = _angular2Angular2.bind;
        }, function (_angular2SrcCoreCompilerDynamic_component_loader) {
            DynamicComponentLoader = _angular2SrcCoreCompilerDynamic_component_loader.DynamicComponentLoader;
        }, function (_angular2SrcCoreCompilerView_manager) {
            AppViewManager = _angular2SrcCoreCompilerView_manager.AppViewManager;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_appApp) {
            IonicApp = _appApp.IonicApp;
        }, function (_viewController) {
            ViewController = _viewController.ViewController;
        }, function (_pane) {
            PaneController = _pane.PaneController;
        }, function (_transitionsTransition) {
            Transition = _transitionsTransition.Transition;
        }, function (_swipeBack) {
            SwipeBackGesture = _swipeBack.SwipeBackGesture;
        }, function (_ionicUtil) {
            util = _ionicUtil;
        }],
        execute: function () {
            NavController = (function (_Ion) {
                _inherits(NavController, _Ion);

                function NavController(parentnavCtrl, injector, elementRef, zone) {
                    _classCallCheck(this, NavController);

                    var config = injector.get(IonicConfig);
                    _get(Object.getPrototypeOf(NavController.prototype), 'constructor', this).call(this, elementRef, config);
                    this.parent = parentnavCtrl;
                    this.compiler = injector.get(Compiler);
                    this.loader = injector.get(DynamicComponentLoader);
                    this.viewMngr = injector.get(AppViewManager);
                    this.app = injector.get(IonicApp);
                    this.config = config;
                    this.zone = zone;
                    this.views = [];
                    this.panes = new PaneController(this);
                    this._sbTrans = null;
                    this._sbEnabled = config.setting('swipeBackEnabled') || false;
                    this._sbThreshold = config.setting('swipeBackThreshold') || 40;
                    this.id = ++ctrlIds;
                    this._ids = -1;
                    this.zIndexes = -1;
                    // build a new injector for child ViewControllers to use
                    this.bindings = Injector.resolve([bind(NavController).toValue(this)]);
                }

                /**
                 * TODO
                 * @param {TODO} componentType  TODO
                 * @param {TODO} [params={}]  TODO
                 * @param {TODO} [opts={}]  TODO
                 * @returns {Promise} TODO
                 */

                _createClass(NavController, [{
                    key: 'push',
                    value: function push(componentType) {
                        var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                        var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                        if (!componentType) {
                            return Promise.reject();
                        }
                        if (typeof componentType !== 'function') {
                            throw 'Loading component must be a component class, not "' + componentType.toString() + '"';
                        }
                        var resolve = undefined;
                        var promise = new Promise(function (res) {
                            resolve = res;
                        });
                        // do not animate if this is the first in the stack
                        if (!this.views.length) {
                            opts.animation = 'none';
                        }
                        // default the direction to "forward"
                        opts.direction = opts.direction || 'forward';
                        // the active view is going to be the leaving one (if one exists)
                        var leavingView = this.getActive() || new ViewController();
                        leavingView.shouldCache = util.isBoolean(opts.cacheleavingView) ? opts.cacheleavingView : true;
                        leavingView.shouldDestroy = !leavingView.shouldCache;
                        if (leavingView.shouldDestroy) {
                            leavingView.willUnload();
                        }
                        // create a new ViewController
                        var enteringView = new ViewController(this, componentType, params);
                        // add the view to the stack
                        this.add(enteringView);
                        if (this.router) {
                            // notify router of the state change
                            this.router.stateChange('push', enteringView, params);
                        }
                        // start the transition
                        this.transition(enteringView, leavingView, opts, function () {
                            resolve();
                        });
                        return promise;
                    }

                    /**
                     * TODO
                     * @param {TODO} [opts={}]  TODO
                     * @returns {Promise} TODO
                     */
                }, {
                    key: 'pop',
                    value: function pop() {
                        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        if (!this.canGoBack()) {
                            return Promise.reject();
                        }
                        var resolve = undefined;
                        var promise = new Promise(function (res) {
                            resolve = res;
                        });
                        // default the direction to "back"
                        opts.direction = opts.direction || 'back';
                        // get the active view and set that it is staged to be leaving
                        // was probably the one popped from the stack
                        var leavingView = this.getActive() || new ViewController();
                        leavingView.shouldCache = util.isBoolean(opts.cacheleavingView) ? opts.cacheleavingView : false;
                        leavingView.shouldDestroy = !leavingView.shouldCache;
                        if (leavingView.shouldDestroy) {
                            leavingView.willUnload();
                        }
                        // the entering view is now the new last view
                        // Note: we might not have an entering view if this is the
                        // only view on the history stack.
                        var enteringView = this.getPrevious(leavingView);
                        if (enteringView) {
                            if (this.router) {
                                // notify router of the state change
                                this.router.stateChange('pop', enteringView);
                            }
                            // start the transition
                            this.transition(enteringView, leavingView, opts, function () {
                                // transition completed, destroy the leaving view
                                resolve();
                            });
                        } else {
                            this._transComplete();
                            resolve();
                        }
                        return promise;
                    }

                    /**
                     * Inserts a view into the nav stack at the specified index.
                     * @param {TODO} componentType  TODO
                     * @param {TODO} index TODO
                     * @returns {Promise} TODO
                     */
                }, {
                    key: 'insert',
                    value: function insert(componentType, index) {
                        if (!componentType || index < 0) {
                            return Promise.reject();
                        }
                        // push it onto the end
                        if (index >= this.views.length) {
                            return this.push(componentType);
                        }
                        // create new ViewController, but don't render yet
                        var viewCtrl = new ViewController(this, componentType);
                        viewCtrl.state = CACHED_STATE;
                        viewCtrl.shouldDestroy = false;
                        viewCtrl.shouldCache = false;
                        this._incrementId(viewCtrl);
                        this.views.splice(index, 0, viewCtrl);
                    }

                    /**
                     * Set the view stack to reflect the given component classes.
                     * @param {TODO} components  TODO
                     * @param {TODO} [opts={}]  TODO
                     * @returns {Promise} TODO
                     */
                }, {
                    key: 'setViews',
                    value: function setViews(components) {
                        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        if (!components || !components.length) {
                            return Promise.resolve();
                        }
                        // if animate has not been set then default to false
                        opts.animate = opts.animate || false;
                        // ensure leaving views are not cached, and should be destroyed
                        opts.cacheleavingView = false;
                        // get the views to auto remove without having to do a transiton for each
                        // the last view (the currently active one) will do a normal transition out
                        if (this.views.length > 1) {
                            var autoRemoveItems = this.views.slice(0, this.views.length - 1);
                            for (var i = 0; i < autoRemoveItems.length; i++) {
                                autoRemoveItems[i].shouldDestroy = true;
                                autoRemoveItems[i].shouldCache = false;
                                autoRemoveItems[i].willUnload();
                            }
                        }
                        var componentObj = null;
                        var componentType = null;
                        var viewCtrl = null;
                        // create the ViewControllers that go before the new active ViewController in the stack
                        // but the previous views won't should render yet
                        if (components.length > 1) {
                            var newBeforeItems = components.slice(0, components.length - 1);
                            for (var j = 0; j < newBeforeItems.length; j++) {
                                componentObj = newBeforeItems[j];
                                if (componentObj) {
                                    // could be an object with a componentType property, or it is a componentType
                                    componentType = componentObj.componentType || componentObj;
                                    viewCtrl = new ViewController(this, componentType, componentObj.params);
                                    viewCtrl.state = CACHED_STATE;
                                    viewCtrl.shouldDestroy = false;
                                    viewCtrl.shouldCache = false;
                                    // add the item to the stack
                                    this.add(viewCtrl);
                                }
                            }
                        }
                        // get the component that will become the active item
                        // it'll be the last one in the given components array
                        componentObj = components[components.length - 1];
                        componentType = componentObj.componentType || componentObj;
                        // transition the leaving and entering
                        return this.push(componentType, componentObj.params, opts);
                    }

                    /**
                     * TODO
                     * @param {TODO} componentType  TODO
                     * @param {TODO} [params={}]  TODO
                     * @param {TODO} [opts={}]  TODO
                     * @returns {Promise} TODO
                     */
                }, {
                    key: 'setRoot',
                    value: function setRoot(componentType) {
                        var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                        var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                        return this.setViews([{
                            componentType: componentType,
                            params: params
                        }], opts);
                    }

                    /**
                     * TODO
                     * @param {TODO} enteringView  TODO
                     * @param {TODO} leavingView  TODO
                     * @param {TODO} opts  TODO
                     * @param {Function} callback  TODO
                     * @returns {any} TODO
                     */
                }, {
                    key: 'transition',
                    value: function transition(enteringView, leavingView, opts, callback) {
                        var _this = this;

                        if (!enteringView || enteringView === leavingView) {
                            return callback();
                        }
                        if (opts.animate === false) {
                            opts.animation = 'none';
                        } else if (!opts.animation) {
                            opts.animation = this.config.setting('viewTransition');
                        }
                        opts.animate = opts.animation !== 'none';
                        // wait for the new view to complete setup
                        enteringView.stage(function () {
                            _this.zone.runOutsideAngular(function () {
                                enteringView.shouldDestroy = false;
                                enteringView.shouldCache = false;
                                enteringView.willEnter();
                                leavingView.willLeave();
                                // set that the new view pushed on the stack is staged to be entering/leaving
                                // staged state is important for the transition to find the correct view
                                enteringView.state = STAGED_ENTERING_STATE;
                                leavingView.state = STAGED_LEAVING_STATE;
                                // init the transition animation
                                var transAnimation = Transition.create(_this, opts);
                                if (!opts.animate) {
                                    // force it to not animate the elements, just apply the "to" styles
                                    transAnimation.duration(0);
                                }
                                var duration = transAnimation.duration();
                                if (duration > 64) {
                                    // block any clicks during the transition and provide a
                                    // fallback to remove the clickblock if something goes wrong
                                    _this.app.setEnabled(false, duration);
                                    _this.app.setTransitioning(true, duration);
                                }
                                // start the transition
                                transAnimation.play().then(function () {
                                    // transition has completed, update each view's state
                                    enteringView.state = ACTIVE_STATE;
                                    leavingView.state = CACHED_STATE;
                                    // dispose any views that shouldn't stay around
                                    transAnimation.dispose();
                                    enteringView.didEnter();
                                    leavingView.didLeave();
                                    // all done!
                                    _this.zone.run(function () {
                                        _this._transComplete();
                                        callback();
                                    });
                                });
                            });
                        });
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: 'swipeBackStart',
                    value: function swipeBackStart() {
                        var _this2 = this;

                        if (!this.app.isEnabled() || !this.canSwipeBack()) {
                            return;
                        }
                        // disables the app during the transition
                        this.app.setEnabled(false);
                        this.app.setTransitioning(true);
                        // default the direction to "back"
                        var opts = {
                            direction: 'back'
                        };
                        // get the active view and set that it is staged to be leaving
                        // was probably the one popped from the stack
                        var leavingView = this.getActive() || new ViewController();
                        leavingView.shouldDestroy = true;
                        leavingView.shouldCache = false;
                        leavingView.willLeave();
                        leavingView.willUnload();
                        // the entering view is now the new last view
                        var enteringView = this.getPrevious(leavingView);
                        enteringView.shouldDestroy = false;
                        enteringView.shouldCache = false;
                        enteringView.willEnter();
                        // wait for the new view to complete setup
                        enteringView.stage(function () {
                            _this2.zone.runOutsideAngular(function () {
                                // set that the new view pushed on the stack is staged to be entering/leaving
                                // staged state is important for the transition to find the correct view
                                enteringView.state = STAGED_ENTERING_STATE;
                                leavingView.state = STAGED_LEAVING_STATE;
                                // init the swipe back transition animation
                                _this2._sbTrans = Transition.create(_this2, opts);
                                _this2._sbTrans.easing('linear').progressStart();
                            });
                        });
                    }

                    /**
                     * TODO
                     * @param {TODO} progress  TODO
                     */
                }, {
                    key: 'swipeBackProgress',
                    value: function swipeBackProgress(value) {
                        if (this._sbTrans) {
                            // continue to disable the app while actively dragging
                            this.app.setEnabled(false, 4000);
                            this.app.setTransitioning(true, 4000);
                            // set the transition animation's progress
                            this._sbTrans.progress(value);
                        }
                    }

                    /**
                     * @private
                     * @param {TODO} completeSwipeBack  Should the swipe back complete or not.
                     * @param {number} rate  How fast it closes
                     */
                }, {
                    key: 'swipeBackEnd',
                    value: function swipeBackEnd(completeSwipeBack, rate) {
                        var _this3 = this;

                        if (!this._sbTrans) return;
                        // disables the app during the transition
                        this.app.setEnabled(false);
                        this.app.setTransitioning(true);
                        this._sbTrans.progressEnd(completeSwipeBack, rate).then(function () {
                            _this3.zone.run(function () {
                                // find the views that were entering and leaving
                                var enteringView = _this3.getStagedEnteringView();
                                var leavingView = _this3.getStagedLeavingView();
                                if (enteringView && leavingView) {
                                    // finish up the animation
                                    if (completeSwipeBack) {
                                        // swipe back has completed navigating back
                                        // update each view's state
                                        enteringView.state = ACTIVE_STATE;
                                        leavingView.state = CACHED_STATE;
                                        enteringView.didEnter();
                                        leavingView.didLeave();
                                        if (_this3.router) {
                                            // notify router of the pop state change
                                            _this3.router.stateChange('pop', enteringView);
                                        }
                                    } else {
                                        // cancelled the swipe back, they didn't end up going back
                                        // return views to their original state
                                        leavingView.state = ACTIVE_STATE;
                                        enteringView.state = CACHED_STATE;
                                        leavingView.willEnter();
                                        leavingView.didEnter();
                                        enteringView.didLeave();
                                        leavingView.shouldDestroy = false;
                                        enteringView.shouldDestroy = false;
                                    }
                                }
                                // empty out and dispose the swipe back transition animation
                                _this3._sbTrans && _this3._sbTrans.dispose();
                                _this3._sbTrans = null;
                                // all done!
                                _this3._transComplete();
                            });
                        });
                    }
                }, {
                    key: '_runSwipeBack',
                    value: function _runSwipeBack() {
                        if (this.canSwipeBack()) {
                            // it is possible to swipe back
                            if (this.sbGesture) {
                                // this is already an active gesture, don't create another one
                                return;
                            }
                            var opts = {
                                edge: 'left',
                                threshold: this._sbThreshold
                            };
                            this.sbGesture = new SwipeBackGesture(this.getNativeElement(), opts, this);
                            console.debug('SwipeBackGesture listen');
                            this.sbGesture.listen();
                        } else if (this.sbGesture) {
                            // it is not possible to swipe back and there is an
                            // active sbGesture, so unlisten it
                            console.debug('SwipeBackGesture unlisten');
                            this.sbGesture.unlisten();
                            this.sbGesture = null;
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} val  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'isSwipeBackEnabled',
                    value: function isSwipeBackEnabled(val) {
                        if (arguments.length) {
                            this._sbEnabled = !!val;
                        }
                        return this._sbEnabled;
                    }

                    /**
                     * If it's possible to use swipe back or not. If it's not possible
                     * to go back, or swipe back is not enable then this will return false.
                     * If it is possible to go back, and swipe back is enabled, then this
                     * will return true.
                     * @returns {boolean}
                     */
                }, {
                    key: 'canSwipeBack',
                    value: function canSwipeBack() {
                        return this._sbEnabled && this.canGoBack();
                    }

                    /**
                     * Returns `true` if there's a valid previous view that we can pop back to.
                     * Otherwise returns false.
                     * @returns {boolean}
                     */
                }, {
                    key: 'canGoBack',
                    value: function canGoBack() {
                        var activeView = this.getActive();
                        if (activeView) {
                            return activeView.enableBack();
                        }
                        return false;
                    }

                    /**
                     * @private
                     */
                }, {
                    key: '_transComplete',
                    value: function _transComplete() {
                        var _this4 = this;

                        var destroys = [];
                        this.views.forEach(function (view) {
                            if (view) {
                                if (view.shouldDestroy) {
                                    destroys.push(view);
                                } else if (view.state === CACHED_STATE && view.shouldCache) {
                                    view.shouldCache = false;
                                }
                            }
                        });
                        destroys.forEach(function (view) {
                            _this4.remove(view);
                            view.destroy();
                        });
                        // allow clicks again, but still set an enable time
                        // meaning nothing with this view controller can happen for XXms
                        this.app.setEnabled(true);
                        this.app.setTransitioning(false);
                        if (this.views.length === 1) {
                            this.elementRef.nativeElement.classList.add('has-views');
                        }
                        this._runSwipeBack();
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getActive',
                    value: function getActive() {
                        for (var i = 0, ii = this.views.length; i < ii; i++) {
                            if (this.views[i].state === ACTIVE_STATE) {
                                return this.views[i];
                            }
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @param {TODO} instance  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getByInstance',
                    value: function getByInstance(instance) {
                        if (instance) {
                            for (var i = 0, ii = this.views.length; i < ii; i++) {
                                if (this.views[i].instance === instance) {
                                    return this.views[i];
                                }
                            }
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @param {TODO} index  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getByIndex',
                    value: function getByIndex(index) {
                        if (index < this.views.length && index > -1) {
                            return this.views[index];
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @param {TODO} view  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getPrevious',
                    value: function getPrevious(view) {
                        if (view) {
                            return this.views[this.views.indexOf(view) - 1];
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getStagedEnteringView',
                    value: function getStagedEnteringView() {
                        for (var i = 0, ii = this.views.length; i < ii; i++) {
                            if (this.views[i].state === STAGED_ENTERING_STATE) {
                                return this.views[i];
                            }
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'getStagedLeavingView',
                    value: function getStagedLeavingView() {
                        for (var i = 0, ii = this.views.length; i < ii; i++) {
                            if (this.views[i].state === STAGED_LEAVING_STATE) {
                                return this.views[i];
                            }
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @param {TODO} nbContainer  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'navbarViewContainer',
                    value: function navbarViewContainer(nbContainer) {
                        if (nbContainer) {
                            this._nbContainer = nbContainer;
                        }
                        if (this._nbContainer) {
                            return this._nbContainer;
                        }
                        if (this.parent) {
                            return this.parent.navbarViewContainer();
                        }
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'anchorElementRef',
                    value: function anchorElementRef() {
                        if (arguments.length) {
                            this._anchorER = arguments[0];
                        }
                        return this._anchorER;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'anchorViewContainerRef',
                    value: function anchorViewContainerRef() {
                        if (arguments.length) {
                            this._anchorVC = arguments[0];
                        }
                        return this._anchorVC;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'childNavbar',
                    value: function childNavbar() {
                        if (arguments.length) {
                            this._childNavbar = arguments[0];
                        }
                        return this._childNavbar;
                    }

                    /**
                     * TODO
                     * @param {TODO} view  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'add',
                    value: function add(view) {
                        this._incrementId(view);
                        this.views.push(view);
                    }
                }, {
                    key: '_incrementId',
                    value: function _incrementId(view) {
                        view.id = this.id + '-' + ++this._ids;
                    }

                    /**
                     * TODO
                     * @param {TODO} viewOrIndex  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'remove',
                    value: function remove(viewOrIndex) {
                        util.array.remove(this.views, viewOrIndex);
                    }

                    /**
                     * First view in this nav controller's stack. This would
                     * not return an view which is about to be destroyed.
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'first',
                    value: function first() {
                        for (var i = 0, l = this.views.length; i < l; i++) {
                            if (!this.views[i].shouldDestroy) {
                                return this.views[i];
                            }
                        }
                        return null;
                    }

                    /**
                     * Last view in this nav controller's stack. This would
                     * not return an view which is about to be destroyed.
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'last',
                    value: function last() {
                        for (var i = this.views.length - 1; i >= 0; i--) {
                            if (!this.views[i].shouldDestroy) {
                                return this.views[i];
                            }
                        }
                        return null;
                    }

                    /**
                     * TODO
                     * @param {TODO} view  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'indexOf',
                    value: function indexOf(view) {
                        return this.views.indexOf(view);
                    }

                    /**
                     * Number of sibling views in the nav controller. This does
                     * not include views which are about to be destroyed.
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'length',
                    value: function length() {
                        var len = 0;
                        for (var i = 0, l = this.views.length; i < l; i++) {
                            if (!this.views[i].shouldDestroy) {
                                len++;
                            }
                        }
                        return len;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'instances',
                    value: function instances() {
                        var instances = [];
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = this.views[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var view = _step.value;

                                if (view.instance) {
                                    instances.push(view.instance);
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator['return']) {
                                    _iterator['return']();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }

                        return instances;
                    }

                    /**
                     * TODO
                     * @param {TODO} view  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'isActive',
                    value: function isActive(view) {
                        return view && view.state === ACTIVE_STATE;
                    }

                    /**
                     * TODO
                     * @param {TODO} view  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'isStagedEntering',
                    value: function isStagedEntering(view) {
                        return view && view.state === STAGED_ENTERING_STATE;
                    }

                    /**
                     * TODO
                     * @param {TODO} router  TODO
                     */
                }, {
                    key: 'registerRouter',
                    value: function registerRouter(router) {
                        this.router = router;
                    }
                }]);

                return NavController;
            })(Ion);

            _export('NavController', NavController);

            ACTIVE_STATE = 1;
            CACHED_STATE = 2;
            STAGED_ENTERING_STATE = 3;
            STAGED_LEAVING_STATE = 4;
            ctrlIds = -1;

            /**
             * TODO
             */

            NavParams = (function () {
                /**
                 * TODO
                 * @param {TODO} data  TODO
                 */

                function NavParams(data) {
                    _classCallCheck(this, NavParams);

                    this.data = data || {};
                }

                /**
                 * TODO
                 * @param {TODO} param  TODO
                 */

                _createClass(NavParams, [{
                    key: 'get',
                    value: function get(param) {
                        return this.data[param];
                    }
                }]);

                return NavParams;
            })();

            _export('NavParams', NavParams);
        }
    };
});