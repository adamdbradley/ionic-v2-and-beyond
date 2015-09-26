System.register("ionic/components/nav/nav", ["angular2/angular2", "../../config/decorators", "./nav-controller"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var Directive, View, ElementRef, Host, Optional, forwardRef, Injector, NgZone, IonicComponent, NavController, __decorate, __metadata, __param, Nav, NavPaneAnchor, _a, _b, _c, _d, _e;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            View = _angular2Angular2.View;
            ElementRef = _angular2Angular2.ElementRef;
            Host = _angular2Angular2.Host;
            Optional = _angular2Angular2.Optional;
            forwardRef = _angular2Angular2.forwardRef;
            Injector = _angular2Angular2.Injector;
            NgZone = _angular2Angular2.NgZone;
        }, function (_configDecorators) {
            IonicComponent = _configDecorators.IonicComponent;
        }, function (_navController) {
            NavController = _navController.NavController;
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

            Nav = (function (_NavController) {
                _inherits(Nav, _NavController);

                /**
                 * TODO
                 * @param {NavController} hostnavCtrl  TODO
                 * @param {Injector} injector  TODO
                 * @param {ElementRef} elementRef  TODO
                 * @param {NgZone} zone  TODO
                 */

                function Nav(hostnavCtrl, injector, elementRef, zone) {
                    _classCallCheck(this, Nav);

                    _get(Object.getPrototypeOf(Nav.prototype), "constructor", this).call(this, hostnavCtrl, injector, elementRef, zone);
                }

                /**
                 * TODO
                 */

                _createClass(Nav, [{
                    key: "onInit",
                    value: function onInit() {
                        _get(Object.getPrototypeOf(Nav.prototype), "onInit", this).call(this);
                        if (this.root) {
                            if (typeof this.root !== 'function') {
                                throw 'The [root] property in <ion-nav> must be given a reference to a component class from within the constructor.';
                            }
                            this.push(this.root);
                        }
                        // default the swipe back to be enabled
                        var isSwipeBackEnabled = (this.swipeBackEnabled || '').toString() !== 'false';
                        this.isSwipeBackEnabled(isSwipeBackEnabled);
                    }
                }]);

                return Nav;
            })(NavController);

            _export("Nav", Nav);

            _export("Nav", Nav = __decorate([IonicComponent({
                selector: 'ion-nav',
                properties: ['root'],
                defaultProperties: {
                    'swipeBackEnabled': true
                }
            }), View({
                template: '<template pane-anchor></template>',
                directives: [forwardRef(function () {
                    return NavPaneAnchor;
                })]
            }), __param(0, Optional()), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object, typeof (_b = typeof Injector !== 'undefined' && Injector) === 'function' && _b || Object, typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c || Object, typeof (_d = typeof NgZone !== 'undefined' && NgZone) === 'function' && _d || Object])], Nav));

            NavPaneAnchor = function NavPaneAnchor(nav, elementRef) {
                _classCallCheck(this, NavPaneAnchor);

                nav.anchorElementRef(elementRef);
            };

            NavPaneAnchor = __decorate([Directive({ selector: 'template[pane-anchor]' }), __param(0, Host()), __metadata('design:paramtypes', [Nav, typeof (_e = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _e || Object])], NavPaneAnchor);
        }
    };
});