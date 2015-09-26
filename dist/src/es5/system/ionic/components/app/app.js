System.register("ionic/components/app/app", ["angular2/angular2", "angular2/router", "../../config/config", "../../platform/platform", "../../util/click-block", "../../util/dom", "../tap-click/tap-click", "../action-sheet/action-sheet", "../modal/modal", "../popup/popup", "../form/focus-holder", "../../util/events", "../nav/nav-registry"], function (_export) {
    /**
     * @name IonicApp
     * @description
     * Service exposing the Ionic app level API.
     *
     * @usage
     * ```js
     *  @App({
     *    templateUrl: '/app/app.html',
     *  })
     *  class MyApp {
     *
     *    constructor(app: IonicApp) {
     *      this.app = app;
     *    }
     *  }
     *  ```
     * Note: Ionic sets `ion-app` as the selector for the app. Setting a custom selector will override this and cause CSS problems.
     *
     */
    "use strict";

    var Component, View, bootstrap, ElementRef, NgZone, bind, DynamicComponentLoader, Injector, ROUTER_BINDINGS, HashLocationStrategy, LocationStrategy, IonicConfig, IonicPlatform, ClickBlock, dom, TapClick, ActionSheet, Modal, Popup, FocusHolder, Events, NavRegistry, __decorate, __metadata, IonicApp, RootAnchor, _a, _b;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    _export("ionicBootstrap", ionicBootstrap);

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function initApp(window, document, config, platform) {
        // create the base IonicApp
        var app = new IonicApp();
        app.isRTL(document.dir == 'rtl');
        // load all platform data
        platform.url(window.location.href);
        platform.userAgent(window.navigator.userAgent);
        platform.navigatorPlatform(window.navigator.platform);
        platform.load(config);
        // copy default platform settings into the user config platform settings
        // user config platform settings should override default platform settings
        config.setPlatform(platform);
        // config and platform settings have been figured out
        // apply the correct CSS to the app
        applyBodyCss(document, config, platform);
        // prepare the ready promise to fire....when ready
        platform.prepareReady(config);
        setTimeout(function () {
            // start listening for resizes XXms after the app starts
            window.addEventListener('resize', function () {
                platform.windowResize();
            });
        }, 2500);
        return app;
    }
    /**
     * TODO
     *
     * @param {TODO} rootComponentType  TODO
     * @param {TODO} config  TODO
     * @return {Promise} TODO
     */

    function ionicBootstrap(rootComponentType, views, config) {
        return new Promise(function (resolve) {
            try {
                (function () {
                    // get the user config, or create one if wasn't passed in
                    if (typeof config !== IonicConfig) {
                        config = new IonicConfig(config);
                    }
                    var platform = new IonicPlatform();
                    // create the base IonicApp
                    var app = initApp(window, document, config, platform);
                    // TODO: probs need a better way to inject global injectables
                    var tapClick = new TapClick(app, config, window, document);
                    var actionSheet = new ActionSheet(app, config);
                    var modal = new Modal(app, config);
                    var popup = new Popup(app, config);
                    var events = new Events();
                    var navRegistry = new NavRegistry(views);
                    // add injectables that will be available to all child components
                    var appBindings = Injector.resolve([bind(IonicApp).toValue(app), bind(IonicConfig).toValue(config), bind(IonicPlatform).toValue(platform), bind(TapClick).toValue(tapClick), bind(ActionSheet).toValue(actionSheet), bind(Modal).toValue(modal), bind(Popup).toValue(popup), bind(Events).toValue(events), ROUTER_BINDINGS, bind(LocationStrategy).toClass(HashLocationStrategy), bind(NavRegistry).toValue(navRegistry)]);
                    bootstrap(rootComponentType, appBindings).then(function (appRef) {
                        app.load(appRef);
                        // Adding a anchor to add overlays off of...huh??
                        var elementRefs = appRef._hostComponent.hostView._view.elementRefs;
                        var lastElementRef = elementRefs[1];
                        var injector = lastElementRef.parentView._view.rootElementInjectors[0]._injector;
                        var loader = injector.get(DynamicComponentLoader);
                        loader.loadNextToLocation(RootAnchor, lastElementRef).then(function () {
                            // append the focus holder if its needed
                            if (config.setting('keyboardScrollAssist')) {
                                app.appendComponent(FocusHolder).then(function (ref) {
                                    app.focusHolder(ref.instance);
                                });
                            }
                        })["catch"](function (err) {
                            console.error(err);
                        });
                        resolve(app);
                    })["catch"](function (err) {
                        console.error('ionicBootstrap', err);
                    });
                })();
            } catch (err) {
                console.error(err);
            }
        });
    }

    function applyBodyCss(document, config, platform) {
        var bodyEle = document.body;
        if (!bodyEle) {
            return dom.ready(function () {
                applyBodyCss(document, config, platform);
            });
        }
        var versions = platform.versions();
        platform.platforms().forEach(function (platformName) {
            // platform-ios
            var platformClass = 'platform-' + platformName;
            bodyEle.classList.add(platformClass);
            var platformVersion = versions[platformName];
            if (platformVersion) {
                // platform-ios9
                platformClass += platformVersion.major;
                bodyEle.classList.add(platformClass);
                // platform-ios9_3
                bodyEle.classList.add(platformClass + '_' + platformVersion.minor);
            }
        });
        // set the mode class name
        // ios
        bodyEle.classList.add(config.setting('mode'));
        // touch devices should not use :hover CSS pseudo
        // enable :hover CSS when the "hoverCSS" setting is not false
        if (config.setting('hoverCSS') !== false) {
            bodyEle.classList.add('enable-hover');
        }
        /**
        * Hairline Shim
        * Add the "hairline" CSS class name to the body tag
        * if the browser supports subpixels.
        */
        if (window.devicePixelRatio >= 2) {
            var hairlineEle = document.createElement('div');
            hairlineEle.style.border = '.5px solid transparent';
            bodyEle.appendChild(hairlineEle);
            if (hairlineEle.offsetHeight === 1) {
                bodyEle.classList.add('hairlines');
            }
            bodyEle.removeChild(hairlineEle);
        }
    }
    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            View = _angular2Angular2.View;
            bootstrap = _angular2Angular2.bootstrap;
            ElementRef = _angular2Angular2.ElementRef;
            NgZone = _angular2Angular2.NgZone;
            bind = _angular2Angular2.bind;
            DynamicComponentLoader = _angular2Angular2.DynamicComponentLoader;
            Injector = _angular2Angular2.Injector;
        }, function (_angular2Router) {
            ROUTER_BINDINGS = _angular2Router.ROUTER_BINDINGS;
            HashLocationStrategy = _angular2Router.HashLocationStrategy;
            LocationStrategy = _angular2Router.LocationStrategy;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_platformPlatform) {
            IonicPlatform = _platformPlatform.IonicPlatform;
        }, function (_utilClickBlock) {
            ClickBlock = _utilClickBlock.ClickBlock;
        }, function (_utilDom) {
            dom = _utilDom;
        }, function (_tapClickTapClick) {
            TapClick = _tapClickTapClick.TapClick;
        }, function (_actionSheetActionSheet) {
            ActionSheet = _actionSheetActionSheet.ActionSheet;
        }, function (_modalModal) {
            Modal = _modalModal.Modal;
        }, function (_popupPopup) {
            Popup = _popupPopup.Popup;
        }, function (_formFocusHolder) {
            FocusHolder = _formFocusHolder.FocusHolder;
        }, function (_utilEvents) {
            Events = _utilEvents.Events;
        }, function (_navNavRegistry) {
            NavRegistry = _navNavRegistry.NavRegistry;
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

            IonicApp = (function () {
                /**
                 * TODO
                 */

                function IonicApp() {
                    _classCallCheck(this, IonicApp);

                    this.overlays = [];
                    this._disTime = 0;
                    this._trnsTime = 0;
                    // Our component registry map
                    this.components = {};
                }

                /**
                 * TODO
                 * @param {Object} appRef  TODO
                 */

                _createClass(IonicApp, [{
                    key: "load",
                    value: function load(appRef) {
                        this.ref(appRef);
                        this._zone = appRef.injector.get(NgZone);
                    }

                    /**
                     * TODO
                     * @param {TODO=} val  TODO
                     * @return {TODO} TODO
                     */
                }, {
                    key: "focusHolder",
                    value: function focusHolder(val) {
                        if (arguments.length) {
                            this._fcsHldr = val;
                        }
                        return this._fcsHldr;
                    }

                    /**
                     * Sets the document title.
                     * @param {string} val  Value to set the document title to.
                     */
                }, {
                    key: "title",
                    value: function title(val) {
                        // TODO: User angular service
                        document.title = val;
                    }

                    /**
                     * Sets if the app is currently enabled or not, meaning if it's
                     * available to accept new user commands. For example, this is set to `false`
                     * while views transition, a modal slides up, an action-sheet
                     * slides up, etc. After the transition completes it is set back to `true`.
                     * @param {bool} isEnabled
                     * @param {bool} fallback  When `isEnabled` is set to `false`, this argument
                     * is used to set the maximum number of milliseconds that app will wait until
                     * it will automatically enable the app again. It's basically a fallback incase
                     * something goes wrong during a transition and the app wasn't re-enabled correctly.
                     */
                }, {
                    key: "setEnabled",
                    value: function setEnabled(isEnabled) {
                        var fallback = arguments.length <= 1 || arguments[1] === undefined ? 700 : arguments[1];

                        this._disTime = isEnabled ? 0 : Date.now() + fallback;
                        ClickBlock(!isEnabled, fallback + 100);
                    }

                    /**
                     * Boolean if the app is actively enabled or not.
                     * @return {bool}
                     */
                }, {
                    key: "isEnabled",
                    value: function isEnabled() {
                        return this._disTime < Date.now();
                    }
                }, {
                    key: "setTransitioning",
                    value: function setTransitioning(isTransitioning) {
                        var fallback = arguments.length <= 1 || arguments[1] === undefined ? 700 : arguments[1];

                        this._trnsTime = isTransitioning ? Date.now() + fallback : 0;
                    }

                    /**
                     * Boolean if the app is actively transitioning or not.
                     * @return {bool}
                     */
                }, {
                    key: "isTransitioning",
                    value: function isTransitioning() {
                        return this._trnsTime > Date.now();
                    }

                    /**
                     * TODO
                     * @param {TODO=} val  TODO
                     * @return TODO
                     */
                }, {
                    key: "ref",
                    value: function ref(val) {
                        if (arguments.length) {
                            this._ref = val;
                        }
                        return this._ref;
                    }

                    /**
                     * TODO
                     * @return TODO
                     */
                }, {
                    key: "zoneRun",

                    /**
                     * TODO
                     * @param {Function} fn  TODO
                     */
                    value: function zoneRun(fn) {
                        this._zone.run(fn);
                    }

                    /**
                     * TODO
                     * @param {Function} fn  TODO
                     */
                }, {
                    key: "zoneRunOutside",
                    value: function zoneRunOutside(fn) {
                        this._zone.runOutsideAngular(fn);
                    }

                    /**
                     * Register a known component with a key, for easy lookups later.
                     * @param {TODO} id  The id to use to register the component
                     * @param {TODO} component  The component to register
                     */
                }, {
                    key: "register",
                    value: function register(id, component) {
                        if (this.components[id] && this.components[id] !== component) {
                            console.error('Component id "' + id + '" already registered.');
                        }
                        this.components[id] = component;
                    }

                    /**
                     * Unregister a known component with a key.
                     * @param {TODO} id  The id to use to unregister
                     */
                }, {
                    key: "unregister",
                    value: function unregister(id) {
                        delete this.components[id];
                    }

                    /**
                     * Get a registered component with the given type (returns the first)
                     * @param {Object} cls the type to search for
                     * @return the matching component, or undefined if none was found
                     */
                }, {
                    key: "getRegisteredComponent",
                    value: function getRegisteredComponent(cls) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = this.components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var component = _step.value;

                                if (component instanceof cls) {
                                    return component;
                                }
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion && _iterator["return"]) {
                                    _iterator["return"]();
                                }
                            } finally {
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }

                    /**
                     * Get the component for the given key.
                     * @param {TODO} key  TODO
                     * @return {TODO} TODO
                     */
                }, {
                    key: "getComponent",
                    value: function getComponent(id) {
                        return this.components[id];
                    }

                    /**
                     * Create and append the given component into the root
                     * element of the app.
                     *
                     * @param {TODO} componentType the component to create and insert
                     * @return {Promise} Promise that resolves with the ContainerRef created
                     */
                }, {
                    key: "appendComponent",
                    value: function appendComponent(componentType) {
                        return this.rootAnchor.append(componentType);
                    }

                    /**
                     * If val is defined, specifies whether app text is RTL.  If val is undefined
                     * returns whether app text is RTL.
                     *
                     * @param {boolean=} val  Boolean specifying whether text is RTL or not.
                     * @returns {boolean} true if app text is RTL, false if otherwise.
                     */
                }, {
                    key: "isRTL",
                    value: function isRTL(val) {
                        if (arguments.length) {
                            this._rtl = val;
                        }
                        return this._rtl;
                    }
                }, {
                    key: "injector",
                    get: function get() {
                        return this._ref.injector;
                    }
                }]);

                return IonicApp;
            })();

            _export("IonicApp", IonicApp);

            RootAnchor = (function () {
                function RootAnchor(app, elementRef, loader) {
                    _classCallCheck(this, RootAnchor);

                    this.elementRef = elementRef;
                    this.loader = loader;
                    app.rootAnchor = this;
                }

                _createClass(RootAnchor, [{
                    key: "append",
                    value: function append(componentType) {
                        return this.loader.loadNextToLocation(componentType, this.elementRef)["catch"](function (err) {
                            console.error(err);
                        });
                    }
                }]);

                return RootAnchor;
            })();

            RootAnchor = __decorate([Component({
                selector: 'root-anchor'
            }), View({
                template: ''
            }), __metadata('design:paramtypes', [IonicApp, typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof DynamicComponentLoader !== 'undefined' && DynamicComponentLoader) === 'function' && _b || Object])], RootAnchor);
        }
    };
});