System.register("ionic/components/nav/anchors", ["angular2/angular2", "angular2/src/core/compiler/view_container_ref", "./pane", "./nav-controller"], function (_export) {
    "use strict";

    var Component, View, Directive, Host, ElementRef, forwardRef, Inject, ViewContainerRef, Pane, NavController, __decorate, __metadata, __param, PaneAnchor, PaneContentAnchor, NavBarAnchor, NavBarContainer, _a, _b, _c, _d, _e, _f;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            View = _angular2Angular2.View;
            Directive = _angular2Angular2.Directive;
            Host = _angular2Angular2.Host;
            ElementRef = _angular2Angular2.ElementRef;
            forwardRef = _angular2Angular2.forwardRef;
            Inject = _angular2Angular2.Inject;
        }, function (_angular2SrcCoreCompilerView_container_ref) {
            ViewContainerRef = _angular2SrcCoreCompilerView_container_ref.ViewContainerRef;
        }, function (_pane) {
            Pane = _pane.Pane;
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

            PaneAnchor = function PaneAnchor(pane, elementRef) {
                _classCallCheck(this, PaneAnchor);

                pane.sectionAnchorElementRef = elementRef;
            };

            _export("PaneAnchor", PaneAnchor);

            _export("PaneAnchor", PaneAnchor = __decorate([Directive({ selector: 'template[pane-anchor]' }), __param(0, Host()), __param(0, Inject(forwardRef(function () {
                return Pane;
            }))), __metadata('design:paramtypes', [typeof (_a = typeof Pane !== 'undefined' && Pane) === 'function' && _a || Object, typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b || Object])], PaneAnchor));

            PaneContentAnchor = function PaneContentAnchor(pane, viewContainerRef) {
                _classCallCheck(this, PaneContentAnchor);

                pane.contentContainerRef = viewContainerRef;
            };

            _export("PaneContentAnchor", PaneContentAnchor);

            _export("PaneContentAnchor", PaneContentAnchor = __decorate([Directive({ selector: 'template[content-anchor]' }), __param(0, Host()), __param(0, Inject(forwardRef(function () {
                return Pane;
            }))), __metadata('design:paramtypes', [typeof (_c = typeof Pane !== 'undefined' && Pane) === 'function' && _c || Object, typeof (_d = typeof ViewContainerRef !== 'undefined' && ViewContainerRef) === 'function' && _d || Object])], PaneContentAnchor));

            NavBarAnchor = function NavBarAnchor(navCtrl, viewContainerRef) {
                _classCallCheck(this, NavBarAnchor);

                navCtrl.navbarViewContainer(viewContainerRef);
            };

            NavBarAnchor = __decorate([Directive({
                selector: 'template[navbar-anchor]'
            }), __param(0, Inject(forwardRef(function () {
                return NavController;
            }))), __metadata('design:paramtypes', [typeof (_e = typeof NavController !== 'undefined' && NavController) === 'function' && _e || Object, typeof (_f = typeof ViewContainerRef !== 'undefined' && ViewContainerRef) === 'function' && _f || Object])], NavBarAnchor);

            NavBarContainer = function NavBarContainer() {
                _classCallCheck(this, NavBarContainer);
            };

            _export("NavBarContainer", NavBarContainer);

            _export("NavBarContainer", NavBarContainer = __decorate([Component({
                selector: 'section',
                host: {
                    'class': 'navbar-container'
                }
            }), View({
                template: '<template navbar-anchor></template>',
                directives: [NavBarAnchor]
            }), __metadata('design:paramtypes', [])], NavBarContainer));
        }
    };
});