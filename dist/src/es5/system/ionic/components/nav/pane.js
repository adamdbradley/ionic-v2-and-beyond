System.register("ionic/components/nav/pane", ["angular2/angular2", "../ion", "../../config/config", "./nav-controller", "../../config/decorators", "./anchors"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var View, ElementRef, Inject, forwardRef, Injector, bind, Ion, IonicConfig, NavController, IonicComponent, PaneAnchor, PaneContentAnchor, NavBarContainer, __decorate, __metadata, __param, PaneController, Pane, _a, _b, _c;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            View = _angular2Angular2.View;
            ElementRef = _angular2Angular2.ElementRef;
            Inject = _angular2Angular2.Inject;
            forwardRef = _angular2Angular2.forwardRef;
            Injector = _angular2Angular2.Injector;
            bind = _angular2Angular2.bind;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_navController) {
            NavController = _navController.NavController;
        }, function (_configDecorators) {
            IonicComponent = _configDecorators.IonicComponent;
        }, function (_anchors) {
            PaneAnchor = _anchors.PaneAnchor;
            PaneContentAnchor = _anchors.PaneContentAnchor;
            NavBarContainer = _anchors.NavBarContainer;
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

            PaneController = (function () {
                /**
                 * TODO
                 * @param {NavController} navCtrl  TODO
                 */

                function PaneController(navCtrl) {
                    _classCallCheck(this, PaneController);

                    this.panes = [];
                    this.navCtrl = navCtrl;
                    this.bindings = Injector.resolve([bind(NavController).toValue(navCtrl)]);
                }

                /**
                 * TODO
                 * @param {TODO} nav  TODO
                 * @param {Function} nav  TODO
                 */

                _createClass(PaneController, [{
                    key: "get",
                    value: function get(itemStructure, callback) {
                        var _this = this;

                        // this gets or creates the Pane which similar nav items live in
                        // Nav items with just a navbar/content would all use the same Pane
                        // Tabs and view's without a navbar would get a different Panes
                        var key = itemStructure.key;
                        var navCtrl = this.navCtrl;
                        var pane = this.panes[this.panes.length - 1];
                        if (pane && pane.key === key) {
                            // the last pane's structure is the same as the one the item needs to go in
                            callback(pane);
                        } else {
                            // create a new nav pane
                            navCtrl.loader.loadNextToLocation(Pane, navCtrl.anchorElementRef(), this.bindings).then(function (componentRef) {
                                // get the pane reference
                                pane = _this.newPane;
                                _this.newPane = null;
                                var sectionAnchorElementRef = pane && pane.sectionAnchorElementRef;
                                if (!sectionAnchorElementRef) {
                                    return callback();
                                }
                                pane.key = key;
                                pane.dispose = function () {
                                    componentRef.dispose();
                                    _this.panes.splice(_this.panes.indexOf(pane), 1);
                                };
                                _this.panes.push(pane);
                                var promises = [];
                                var sectionsToAdd = [];
                                // decide which sections should be added to this Pane, ie: nav bars, footers, etc.
                                // add only the sections it needs
                                if (itemStructure.navbar) {
                                    sectionsToAdd.push(NavBarContainer);
                                }
                                // add the sections which this type of Pane requires
                                sectionsToAdd.forEach(function (SectionClass) {
                                    // as each section is compiled and added to the Pane
                                    // the section will add a reference to itself in the Pane's sections object
                                    promises.push(navCtrl.loader.loadNextToLocation(SectionClass, sectionAnchorElementRef));
                                });
                                // wait for all of the sections to resolve
                                Promise.all(promises).then(function () {
                                    callback(pane);
                                }, function (err) {
                                    console.error(err);
                                });
                            }, function (loaderErr) {
                                console.error(loaderErr);
                            })["catch"](function (err) {
                                console.error(err);
                            });
                        }
                    }
                }, {
                    key: "add",
                    value: function add(pane) {
                        this.newPane = pane;
                    }
                }]);

                return PaneController;
            })();

            _export("PaneController", PaneController);

            Pane = (function (_Ion) {
                _inherits(Pane, _Ion);

                function Pane(navCtrl, elementRef, ionicConfig) {
                    _classCallCheck(this, Pane);

                    _get(Object.getPrototypeOf(Pane.prototype), "constructor", this).call(this, elementRef, ionicConfig);
                    navCtrl.panes.add(this);
                    this.totalItems = 0;
                    this.zIndex = ++navCtrl.zIndexes;
                }

                return Pane;
            })(Ion);

            _export("Pane", Pane);

            _export("Pane", Pane = __decorate([IonicComponent({
                selector: 'ion-pane',
                classId: 'nav',
                host: {
                    '[style.z-index]': 'zIndex'
                }
            }), View({
                template: "\n    <template pane-anchor></template>\n    <section class=\"content-container\">\n      <template content-anchor></template>\n    </section>\n  ",
                directives: [PaneAnchor, PaneContentAnchor]
            }), __param(0, Inject(forwardRef(function () {
                return NavController;
            }))), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object, typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b || Object, typeof (_c = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _c || Object])], Pane));
        }
    };
});