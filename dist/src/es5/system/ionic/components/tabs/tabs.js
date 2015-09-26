System.register("ionic/components/tabs/tabs", ["angular2/angular2", "../app/app", "../nav/nav-controller", "../nav/view-controller", "../../config/decorators", "../../config/config"], function (_export) {
    /**
     * @name ionTabs
     * @description
     * Powers a multi-tabbed interface with a Tab Bar and a set of "pages"
     * that can be tabbed through.
     *
     * Assign any tabs attribute to the element to define its look and feel.
     *
     * For iOS, tabs will appear at the bottom of the screen. For Android, tabs
     * will be at the top of the screen, below the nav-bar. This follows each platform's
     * design specification, but can be configured with IonicConfig.
     *
     * See the ionTab component's documentation for more details on individual tabs.
     *
     * @usage
     * ```html
     * <ion-tabs>
     *   <ion-tab tab-title="Heart" tab-icon="ion-ios-heart-outline" [root]="root1"></ion-tab>
     *   <ion-tab tab-title="Star" tab-icon="ion-ios-star-outline" [root]="root2"></ion-tab>
     *   <ion-tab tab-title="Stopwatch" tab-icon="ion-ios-stopwatch-outline" [root]="root3"></ion-tab>
     * </ion-tabs>
     * ```
     *
     */
    "use strict";

    var Directive, Injector, ElementRef, Optional, Host, forwardRef, NgZone, IonicApp, NavController, ViewController, IonicComponent, IonicView, IonicConfig, __decorate, __metadata, __param, Tabs, TabButton, _a, _b, _c, _d, _e, _f, _g, _h;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            Injector = _angular2Angular2.Injector;
            ElementRef = _angular2Angular2.ElementRef;
            Optional = _angular2Angular2.Optional;
            Host = _angular2Angular2.Host;
            forwardRef = _angular2Angular2.forwardRef;
            NgZone = _angular2Angular2.NgZone;
        }, function (_appApp) {
            IonicApp = _appApp.IonicApp;
        }, function (_navNavController) {
            NavController = _navNavController.NavController;
        }, function (_navViewController) {
            ViewController = _navViewController.ViewController;
        }, function (_configDecorators) {
            IonicComponent = _configDecorators.IonicComponent;
            IonicView = _configDecorators.IonicView;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
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

            Tabs = (function (_NavController) {
                _inherits(Tabs, _NavController);

                /**
                 * TODO
                 */

                function Tabs(hostNavCtrl, viewCtrl, app, injector, elementRef, zone) {
                    var _this = this;

                    _classCallCheck(this, Tabs);

                    _get(Object.getPrototypeOf(Tabs.prototype), "constructor", this).call(this, hostNavCtrl, injector, elementRef, zone);
                    this.app = app;
                    // Tabs may also be an actual ViewController which was navigated to
                    // if Tabs is static and not navigated to within a NavController
                    // then skip this and don't treat it as it's own ViewController
                    if (viewCtrl) {
                        this.viewCtrl = viewCtrl;
                        // special overrides for the Tabs ViewController
                        // the Tabs ViewController does not have it's own navbar
                        // so find the navbar it should use within it's active Tab
                        viewCtrl.navbarView = function () {
                            var activeTab = _this.getActive();
                            if (activeTab && activeTab.instance) {
                                return activeTab.instance.navbarView();
                            }
                        };
                        // a Tabs ViewController should not have a back button
                        // enableBack back button will later be determined
                        // by the active ViewController that has a navbar
                        viewCtrl.enableBack = function () {
                            return false;
                        };
                    }
                }

                /**
                 * TODO
                 * @param {Tab} tab  TODO
                 */

                _createClass(Tabs, [{
                    key: "addTab",
                    value: function addTab(tab) {
                        // tab.viewCtrl refers to the ViewController of the individual Tab being added to Tabs (NavController)
                        // this.viewCtrl refers to the ViewController instsance on Tabs
                        this.add(tab.viewCtrl);
                        if (this.length() === 1) {
                            // this was the first tab added, queue this one to be loaded and selected
                            var promise = tab.queueInitial();
                            this.viewCtrl && this.viewCtrl.addPromise(promise);
                        }
                    }

                    /**
                     * TODO
                     * @param {Tab} tab  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "select",
                    value: function select(tab) {
                        var _this2 = this;

                        var enteringView = null;
                        if (typeof tab === 'number') {
                            enteringView = this.getByIndex(tab);
                        } else {
                            enteringView = this.getByInstance(tab);
                        }
                        if (!enteringView || !enteringView.instance || !this.app.isEnabled()) {
                            return Promise.reject();
                        }
                        return new Promise(function (resolve) {
                            enteringView.instance.load(function () {
                                var opts = {
                                    animate: false
                                };
                                var leavingView = _this2.getActive() || new ViewController();
                                leavingView.shouldDestroy = false;
                                leavingView.shouldCache = true;
                                _this2.transition(enteringView, leavingView, opts, function () {
                                    resolve();
                                });
                            });
                        });
                    }
                }, {
                    key: "tabs",
                    get: function get() {
                        return this.instances();
                    }
                }]);

                return Tabs;
            })(NavController);

            _export("Tabs", Tabs);

            _export("Tabs", Tabs = __decorate([IonicComponent({
                selector: 'ion-tabs',
                defaultProperties: {
                    'tabBarPlacement': 'bottom',
                    'tabBarIcons': 'top'
                }
            }), IonicView({
                template: '' + '<nav class="tab-bar-container">' + '<div class="tab-bar" role="tablist">' + '<a *ng-for="#t of tabs" [tab]="t" class="tab-button" role="tab">' + '<icon [name]="t.tabIcon" [is-active]="t.isSelected" class="tab-button-icon"></icon>' + '<span class="tab-button-text">{{t.tabTitle}}</span>' + '</a>' + '</div>' + '</nav>' + '<section class="content-container">' + '<ng-content></ng-content>' + '</section>',
                directives: [forwardRef(function () {
                    return TabButton;
                })]
            }), __param(0, Optional()), __param(1, Optional()), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object, typeof (_b = typeof ViewController !== 'undefined' && ViewController) === 'function' && _b || Object, typeof (_c = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _c || Object, typeof (_d = typeof Injector !== 'undefined' && Injector) === 'function' && _d || Object, typeof (_e = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _e || Object, typeof (_f = typeof NgZone !== 'undefined' && NgZone) === 'function' && _f || Object])], Tabs));
            /**
             * TODO
             */

            TabButton = (function () {
                function TabButton(tabs, config, elementRef) {
                    _classCallCheck(this, TabButton);

                    this.tabs = tabs;
                    if (config.setting('hoverCSS') === false) {
                        elementRef.nativeElement.classList.add('disable-hover');
                    }
                }

                _createClass(TabButton, [{
                    key: "onInit",
                    value: function onInit() {
                        var id = this.tab.viewCtrl.id;
                        this.btnId = 'tab-button-' + id;
                        this.panelId = 'tab-panel-' + id;
                        this.hasTitle = !!this.tab.tabTitle;
                        this.hasIcon = !!this.tab.tabIcon;
                        this.hasTitleOnly = this.hasTitle && !this.hasIcon;
                        this.hasIconOnly = this.hasIcon && !this.hasTitle;
                    }
                }, {
                    key: "onClick",
                    value: function onClick(ev) {
                        ev.stopPropagation();
                        ev.preventDefault();
                        this.tabs.select(this.tab);
                    }
                }]);

                return TabButton;
            })();

            TabButton = __decorate([Directive({
                selector: '.tab-button',
                properties: ['tab'],
                host: {
                    '[attr.id]': 'btnId',
                    '[attr.aria-controls]': 'panelId',
                    '[attr.aria-selected]': 'tab.isSelected',
                    '[class.has-title]': 'hasTitle',
                    '[class.has-icon]': 'hasIcon',
                    '[class.has-title-only]': 'hasTitleOnly',
                    '[class.icon-only]': 'hasIconOnly',
                    '(click)': 'onClick($event)'
                }
            }), __param(0, Host()), __metadata('design:paramtypes', [Tabs, typeof (_g = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _g || Object, typeof (_h = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _h || Object])], TabButton);
        }
    };
});