System.register("ionic/components/tabs/tab", ["angular2/angular2", "../nav/nav-controller", "../nav/view-controller", "./tabs"], function (_export) {
    /**
     * @name ionTab
     * @requires ionTabs
     * @description
     * Contains a tab's content. The content only exists while the given tab is selected.
     *
     * @usage
     * ```html
     * <ion-tab tab-title="Heart" tab-icon="ion-ios-heart-outline" [root]="root1"></ion-tab>
     * ```
     */
    "use strict";

    var Directive, Component, View, Host, ElementRef, forwardRef, Injector, NgZone, NavController, ViewController, Tabs, __decorate, __metadata, __param, Tab, TabPaneAnchor, _a, _b, _c, _d, _e;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            Component = _angular2Angular2.Component;
            View = _angular2Angular2.View;
            Host = _angular2Angular2.Host;
            ElementRef = _angular2Angular2.ElementRef;
            forwardRef = _angular2Angular2.forwardRef;
            Injector = _angular2Angular2.Injector;
            NgZone = _angular2Angular2.NgZone;
        }, function (_navNavController) {
            NavController = _navNavController.NavController;
        }, function (_navViewController) {
            ViewController = _navViewController.ViewController;
        }, function (_tabs) {
            Tabs = _tabs.Tabs;
        }],
        execute: function () {
            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
                switch (arguments.length) {
                    case 2:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(o) || o;
                        }, target);
                    case 3:
                        return decorators.reduceRight(function (o, d) {
                            return (d && d(target, key), void 0);
                        }, void 0);
                    case 4:
                        return decorators.reduceRight(function (o, d) {
                            return d && d(target, key, o) || o;
                        }, desc);
                }
            };

            __metadata = undefined && undefined.__metadata || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            __param = undefined && undefined.__param || function (paramIndex, decorator) {
                return function (target, key) {
                    decorator(target, key, paramIndex);
                };
            };

            Tab = (function (_NavController) {
                _inherits(Tab, _NavController);

                /**
                 * TODO
                 * @param {Tabs} tabs  TODO
                 * @param {ElementRef} elementRef  TODO
                 * @param {Injector} injector  TODO
                 * @param {NgZone} zone  TODO
                 */

                function Tab(tabs, elementRef, injector, zone) {
                    var _this = this;

                    _classCallCheck(this, Tab);

                    // A Tab is both a container of many views, and is a view itself.
                    // A Tab is one ViewController within it's Host Tabs (which extends NavController)
                    // A Tab is a NavController for its child ViewControllers
                    _get(Object.getPrototypeOf(Tab.prototype), "constructor", this).call(this, tabs, injector, elementRef, zone);
                    this.tabs = tabs;
                    this.childNavbar(true);
                    var viewCtrl = this.viewCtrl = new ViewController(tabs.Host);
                    viewCtrl.setInstance(this);
                    viewCtrl.viewElementRef(elementRef);
                    tabs.addTab(this);
                    this.navbarView = viewCtrl.navbarView = function () {
                        var activeView = _this.getActive();
                        return activeView && activeView.navbarView();
                    };
                    viewCtrl.enableBack = function () {
                        // override ViewController's enableBack(), should use the
                        // active child nav item's enableBack() instead
                        var activeView = _this.getActive();
                        return activeView && activeView.enableBack();
                    };
                    this.panelId = 'tab-panel-' + viewCtrl.id;
                    this.labeledBy = 'tab-button-' + viewCtrl.id;
                }

                _createClass(Tab, [{
                    key: "onInit",
                    value: function onInit() {
                        var _this2 = this;

                        if (this._initialResolve) {
                            this.tabs.select(this).then(function () {
                                _this2._initialResolve();
                                _this2._initialResolve = null;
                            });
                        }
                    }

                    /**
                     * TODO
                     * @param {Function} callback  TODO
                     */
                }, {
                    key: "load",
                    value: function load(callback) {
                        if (!this._loaded && this.root) {
                            var opts = {
                                animate: false,
                                navbar: false
                            };
                            this.push(this.root, null, opts).then(function () {
                                callback && callback();
                            });
                            this._loaded = true;
                        } else {
                            callback && callback();
                        }
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "queueInitial",
                    value: function queueInitial() {
                        var _this3 = this;

                        // this Tab will be used as the initial one for the first load of Tabs
                        return new Promise(function (res) {
                            _this3._initialResolve = res;
                        });
                    }
                }, {
                    key: "isSelected",
                    get: function get() {
                        return this.tabs.isActive(this.viewCtrl);
                    }
                }, {
                    key: "isNotSelected",
                    get: function get() {
                        return !this.tabs.isActive(this.viewCtrl);
                    }
                }]);

                return Tab;
            })(NavController);

            _export("Tab", Tab);

            _export("Tab", Tab = __decorate([Component({
                selector: 'ion-tab',
                properties: ['root', 'tabTitle', 'tabIcon'],
                host: {
                    '[attr.id]': 'panelId',
                    '[attr.aria-labelledby]': 'labeledBy',
                    '[attr.aria-hidden]': 'isNotSelected',
                    '[class.tab-selected]': 'isSelected',
                    'role': 'tabpanel'
                }
            }), View({
                template: '<template pane-anchor></template><ng-content></ng-content>',
                directives: [forwardRef(function () {
                    return TabPaneAnchor;
                })]
            }), __param(0, Host()), __metadata('design:paramtypes', [typeof (_a = typeof Tabs !== 'undefined' && Tabs) === 'function' && _a || Object, typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b || Object, typeof (_c = typeof Injector !== 'undefined' && Injector) === 'function' && _c || Object, typeof (_d = typeof NgZone !== 'undefined' && NgZone) === 'function' && _d || Object])], Tab));
            /**
             * TODO
             */

            TabPaneAnchor =
            /**
            * TODO
            * @param {Tab} tab  TODO
            * @param {ElementRef} elementRef  TODO
            */
            function TabPaneAnchor(tab, elementRef) {
                _classCallCheck(this, TabPaneAnchor);

                tab.anchorElementRef(elementRef);
            };

            TabPaneAnchor = __decorate([Directive({
                selector: 'template[pane-anchor]'
            }), __param(0, Host()), __metadata('design:paramtypes', [Tab, typeof (_e = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _e || Object])], TabPaneAnchor);
        }
    };
});