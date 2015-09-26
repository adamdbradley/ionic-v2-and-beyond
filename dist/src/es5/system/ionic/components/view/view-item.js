System.register('ionic/components/view/view-item', ['angular2/angular2', 'angular2/src/core/compiler/element_injector', '../nav/nav-controller'], function (_export) {
    /**
     * TODO
     */
    'use strict';

    var Component, bind, Injector, ComponentRef, DirectiveBinding, NavParams, ViewItem;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function isComponent(elementBinder, id) {
        return elementBinder && elementBinder.componentDirective && elementBinder.componentDirective.metadata.id == id;
    }
    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            bind = _angular2Angular2.bind;
            Injector = _angular2Angular2.Injector;
            ComponentRef = _angular2Angular2.ComponentRef;
        }, function (_angular2SrcCoreCompilerElement_injector) {
            DirectiveBinding = _angular2SrcCoreCompilerElement_injector.DirectiveBinding;
        }, function (_navNavController) {
            NavParams = _navNavController.NavParams;
        }],
        execute: function () {
            ViewItem = (function () {
                function ViewItem(viewCtrl, componentType) {
                    var params = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

                    _classCallCheck(this, ViewItem);

                    this.viewCtrl = viewCtrl;
                    this.componentType = componentType;
                    this.params = new NavParams(params);
                    this.instance = null;
                    this.state = 0;
                    this.disposals = [];
                    this.protos = {};
                    this._nbItms = [];
                    this._promises = [];
                    this.templateRefs = {};
                }

                /**
                 * TODO
                 * @param {TODO} name  TODO
                 * @param {TODO} protoViewRef  TODO
                 */

                _createClass(ViewItem, [{
                    key: 'addProtoViewRef',
                    value: function addProtoViewRef(name, protoViewRef) {
                        this.protos[name] = protoViewRef;
                    }

                    /**
                     * TODO
                     * @param {TODO} name  TODO
                     * @param {TODO} templateRef  TODO
                     */
                }, {
                    key: 'addTemplateRef',
                    value: function addTemplateRef(name, templateRef) {
                        this.templateRefs[name] = templateRef;
                    }

                    /**
                     * TODO
                     * @param {Function} callback  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'stage',
                    value: function stage(callback) {
                        var _this = this;

                        var viewCtrl = this.viewCtrl;
                        if (this.instance || !viewCtrl) {
                            // already compiled this view
                            return callback();
                        }
                        var annotation = new Component({
                            selector: 'ion-view',
                            host: {
                                'class': 'nav-item'
                            }
                        });
                        var ionViewComponentType = DirectiveBinding.createFromType(this.componentType, annotation);
                        // create a unique token that works as a cache key
                        ionViewComponentType.token = 'ionView' + this.componentType.name;
                        // compile the Component
                        viewCtrl.compiler.compileInHost(ionViewComponentType).then(function (hostProtoViewRef) {
                            // figure out the sturcture of this Component
                            // does it have a navbar? Is it tabs? Should it not have a navbar or any toolbars?
                            var itemStructure = _this.sturcture = _this.inspectStructure(hostProtoViewRef);
                            // get the appropriate Pane which this ViewItem will fit into
                            viewCtrl.panes.get(itemStructure, function (pane) {
                                _this.pane = pane;
                                var bindings = viewCtrl.bindings.concat(Injector.resolve([bind(NavParams).toValue(_this.params), bind(ViewItem).toValue(_this)]));
                                // add the content of the view to the content area
                                // it will already have the correct context
                                var contentContainer = pane.contentContainerRef;
                                // the same guts as DynamicComponentLoader.loadNextToLocation
                                var hostViewRef = contentContainer.createHostView(hostProtoViewRef, -1, bindings);
                                var newLocation = viewCtrl.viewMngr.getHostElement(hostViewRef);
                                var newComponent = viewCtrl.viewMngr.getComponent(newLocation);
                                pane.totalItems++;
                                var dispose = function dispose() {
                                    var index = contentContainer.indexOf(hostViewRef);
                                    if (index !== -1) {
                                        contentContainer.remove(index);
                                        // remove the pane if there are no view items left
                                        pane.totalItems--;
                                        if (pane.totalItems === 0) {
                                            pane.dispose();
                                        }
                                    }
                                };
                                _this.disposals.push(dispose);
                                var viewComponetRef = new ComponentRef(newLocation, newComponent, dispose);
                                // get the component's instance, and set it to the this ViewItem
                                _this.setInstance(viewComponetRef.instance);
                                _this.viewElementRef(viewComponetRef.location);
                                // // get the item container's nav bar
                                var navbarViewContainer = viewCtrl.navbarViewContainer();
                                // // get the item's navbar protoview
                                var navbarTemplateRef = _this.templateRefs.navbar;
                                // add a navbar view if the pane has a navbar container, and the
                                // item's instance has a navbar protoview to go to inside of it
                                if (navbarViewContainer && navbarTemplateRef) {
                                    (function () {
                                        var navbarView = navbarViewContainer.createEmbeddedView(navbarTemplateRef, -1);
                                        _this.disposals.push(function () {
                                            var index = navbarViewContainer.indexOf(navbarView);
                                            if (index > -1) {
                                                navbarViewContainer.remove(index);
                                            }
                                        });
                                    })();
                                }
                                // this item has finished loading
                                try {
                                    _this.loaded();
                                } catch (e) {
                                    console.error(e);
                                }
                                // fire callback when all child promises have been resolved
                                Promise.all(_this._promises).then(function () {
                                    callback();
                                    _this._promises = [];
                                });
                            }, function (panesErr) {
                                console.error(panesErr);
                            });
                        }, function (compileInHostErr) {
                            console.error(compileInHostErr);
                        });
                    }

                    /**
                     * TODO
                     * @param {TODO} childPromise  TODO
                     */
                }, {
                    key: 'addPromise',
                    value: function addPromise(childPromise) {
                        this._promises.push(childPromise);
                    }

                    /**
                     * TODO
                     * @param {TODO} componentProtoViewRef  TODO
                     */
                }, {
                    key: 'inspectStructure',
                    value: function inspectStructure(componentProtoViewRef) {
                        var navbar = false;
                        var key = '_';
                        componentProtoViewRef._protoView.elementBinders.forEach(function (rootElementBinder) {
                            if (!rootElementBinder.componentDirective || !rootElementBinder.nestedProtoView) return;
                            rootElementBinder.nestedProtoView.elementBinders.forEach(function (nestedElementBinder) {
                                if (isComponent(nestedElementBinder, 'Tabs')) {
                                    navbar = true;
                                }
                                if (!nestedElementBinder.componentDirective && nestedElementBinder.nestedProtoView) {
                                    nestedElementBinder.nestedProtoView.elementBinders.forEach(function (templatedElementBinder) {
                                        if (isComponent(templatedElementBinder, 'Navbar')) {
                                            navbar = true;
                                        }
                                    });
                                }
                            });
                        });
                        if (this.viewCtrl.childNavbar()) {
                            navbar = false;
                        }
                        if (navbar) key += 'n';
                        return {
                            navbar: navbar,
                            key: key
                        };
                    }

                    /**
                     * TODO
                     * @returns {boolean} TODO
                     */
                }, {
                    key: 'enableBack',
                    value: function enableBack() {
                        // update if it's possible to go back from this nav item
                        if (this.viewCtrl) {
                            var previousItem = this.viewCtrl.getPrevious(this);
                            // the previous view may exist, but if it's about to be destroyed
                            // it shouldn't be able to go back to
                            return !!(previousItem && !previousItem.shouldDestroy);
                        }
                        return false;
                    }

                    /**
                     * TODO
                     * @param {TODO} instance  TODO
                     */
                }, {
                    key: 'setInstance',
                    value: function setInstance(instance) {
                        this.instance = instance;
                        this.instance._viewItem = this;
                    }
                }, {
                    key: 'isRoot',
                    value: function isRoot() {
                        return this.index === 0;
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        for (var i = 0; i < this.disposals.length; i++) {
                            this.disposals[i]();
                        }
                        this.didUnload();
                        // just to help prevent any possible memory leaks
                        for (var _name in this) {
                            if (this.hasOwnProperty(_name)) {
                                this[_name] = null;
                            }
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} val  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'viewElementRef',
                    value: function viewElementRef(val) {
                        if (arguments.length) {
                            this._vwEle = val;
                        }
                        return this._vwEle;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'navbarView',
                    value: function navbarView() {
                        if (arguments.length) {
                            this._nbView = arguments[0];
                        }
                        return this._nbView;
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'navbarRef',
                    value: function navbarRef() {
                        var navbarView = this.navbarView();
                        if (navbarView) {
                            return navbarView.getElementRef();
                        }
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'titleRef',
                    value: function titleRef() {
                        var navbarView = this.navbarView();
                        if (navbarView) {
                            return navbarView.getTitleRef();
                        }
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'navbarItemRefs',
                    value: function navbarItemRefs() {
                        var navbarView = this.navbarView();
                        if (navbarView) {
                            return navbarView.getItemRefs();
                        }
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'backBtnRef',
                    value: function backBtnRef() {
                        var navbarView = this.navbarView();
                        if (navbarView) {
                            return navbarView.getBackButtonRef();
                        }
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'backBtnTextRef',
                    value: function backBtnTextRef() {
                        var navbarView = this.navbarView();
                        if (navbarView) {
                            return navbarView.getBackButtonTextRef();
                        }
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: 'postRender',
                    value: function postRender() {}
                    // the elements are in the DOM and the browser
                    // has rendered them in their correct locations

                    /**
                     * The view has loaded. This event only happens once per view being
                     * created. If a view leaves but is cached, then this will not
                     * fire again on a subsequent viewing. This method is a good place
                     * to put your setup code for the view; however, it is not the
                     * recommended method to use when a view becomes active.
                     */

                }, {
                    key: 'loaded',
                    value: function loaded() {
                        this.instance && this.instance.onViewLoaded && this.instance.onViewLoaded();
                    }

                    /**
                     * The view is about to enter and become the active view.
                     */
                }, {
                    key: 'willEnter',
                    value: function willEnter() {
                        this.instance && this.instance.onViewWillEnter && this.instance.onViewWillEnter();
                    }

                    /**
                     * The view has fully entered and is now the active view. This
                     * will fire, whether it was the first load or loaded from the cache.
                     */
                }, {
                    key: 'didEnter',
                    value: function didEnter() {
                        var navbarView = this.navbarView();
                        if (navbarView) {
                            navbarView.didEnter();
                        }
                        this.instance && this.instance.onViewDidEnter && this.instance.onViewDidEnter();
                    }

                    /**
                     * The view has is about to leave and no longer be the active view.
                     */
                }, {
                    key: 'willLeave',
                    value: function willLeave() {
                        this.instance && this.instance.onViewWillLeave && this.instance.onViewWillLeave();
                    }

                    /**
                     * The view has finished leaving and is no longer the active view. This
                     * will fire, whether it is cached or unloaded.
                     */
                }, {
                    key: 'didLeave',
                    value: function didLeave() {
                        this.instance && this.instance.onViewDidLeave && this.instance.onViewDidLeave();
                    }

                    /**
                     * The view is about to be destroyed and have its elements removed.
                     */
                }, {
                    key: 'willUnload',
                    value: function willUnload() {
                        this.instance && this.instance.onViewWillUnload && this.instance.onViewWillUnload();
                    }

                    /**
                     * The view has been destroyed and its elements have been removed.
                     */
                }, {
                    key: 'didUnload',
                    value: function didUnload() {
                        this.instance && this.instance.onViewDidUnload && this.instance.onViewDidUnload();
                    }
                }, {
                    key: 'index',
                    get: function get() {
                        return this.viewCtrl ? this.viewCtrl.indexOf(this) : -1;
                    }
                }]);

                return ViewItem;
            })();

            _export('ViewItem', ViewItem);
        }
    };
});