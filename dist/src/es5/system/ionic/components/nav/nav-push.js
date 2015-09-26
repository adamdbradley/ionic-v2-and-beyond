System.register("ionic/components/nav/nav-push", ["angular2/angular2", "./nav-controller", "./nav-registry"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var Directive, NavController, NavRegistry, __decorate, __metadata, NavPush, NavPop, _a, _b, _c;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
        }, function (_navController) {
            NavController = _navController.NavController;
        }, function (_navRegistry) {
            NavRegistry = _navRegistry.NavRegistry;
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

            NavPush = (function () {
                /**
                 * TODO
                 * @param {NavController} nav  TODO
                 */

                function NavPush(nav, registry) {
                    _classCallCheck(this, NavPush);

                    this.nav = nav;
                    this.registry = registry;
                }

                _createClass(NavPush, [{
                    key: "onClick",
                    value: function onClick(event) {
                        var destination = undefined,
                            params = undefined;
                        if (this.instruction instanceof Array) {
                            if (this.instruction.length > 2) {
                                throw 'Too many [nav-push] arguments, expects [View, { params }]';
                            }
                            destination = this.instruction[0];
                            params = this.instruction[1] || this.params;
                        } else {
                            destination = this.instruction;
                            params = this.params;
                        }
                        if (typeof destination === "string") {
                            destination = this.registry.get(destination);
                        }
                        this.nav.push(destination, params);
                    }
                }]);

                return NavPush;
            })();

            _export("NavPush", NavPush);

            _export("NavPush", NavPush = __decorate([Directive({
                selector: '[nav-push]',
                properties: ['instruction: navPush', 'params: navParams'],
                host: {
                    '(click)': 'onClick($event)',
                    'role': 'link'
                }
            }), __metadata('design:paramtypes', [typeof (_a = typeof NavController !== 'undefined' && NavController) === 'function' && _a || Object, typeof (_b = typeof NavRegistry !== 'undefined' && NavRegistry) === 'function' && _b || Object])], NavPush));
            /**
             * TODO
             */

            NavPop = (function () {
                /**
                 * TODO
                 * @param {NavController} nav  TODO
                 */

                function NavPop(nav) {
                    _classCallCheck(this, NavPop);

                    this.nav = nav;
                }

                _createClass(NavPop, [{
                    key: "onClick",
                    value: function onClick(event) {
                        this.nav.pop();
                    }
                }]);

                return NavPop;
            })();

            _export("NavPop", NavPop);

            _export("NavPop", NavPop = __decorate([Directive({
                selector: '[nav-pop]',
                host: {
                    '(click)': 'onClick($event)',
                    'role': 'link'
                }
            }), __metadata('design:paramtypes', [typeof (_c = typeof NavController !== 'undefined' && NavController) === 'function' && _c || Object])], NavPop));
        }
    };
});