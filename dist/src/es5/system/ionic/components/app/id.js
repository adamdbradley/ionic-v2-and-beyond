System.register("ionic/components/app/id", ["angular2/angular2", "./app"], function (_export) {
    /**
     * IdRef is an easy way to identify unique components in an app and access them
     * no matter where in the UI heirarchy you are. For example, this makes toggling
     * a global side menu feasible from any place in the application.
     */
    "use strict";

    var AppViewManager, ElementRef, Directive, IonicApp, __decorate, __metadata, IdRef, _a, _b, _c;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            AppViewManager = _angular2Angular2.AppViewManager;
            ElementRef = _angular2Angular2.ElementRef;
            Directive = _angular2Angular2.Directive;
        }, function (_app) {
            IonicApp = _app.IonicApp;
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

            IdRef = (function () {
                function IdRef(app, elementRef, appViewManager) {
                    _classCallCheck(this, IdRef);

                    this.app = app;
                    this.elementRef = elementRef;
                    this.appViewManager = appViewManager;
                    // Grab the component this directive is attached to
                    this.component = appViewManager.getComponent(elementRef);
                }

                _createClass(IdRef, [{
                    key: "onInit",
                    value: function onInit() {
                        this.app.register(this.id, this.component);
                    }
                }, {
                    key: "onDestroy",
                    value: function onDestroy() {
                        this.app.unregister(this.id);
                    }
                }]);

                return IdRef;
            })();

            _export("IdRef", IdRef);

            _export("IdRef", IdRef = __decorate([Directive({
                selector: '[id]',
                properties: ['id']
            }), __metadata('design:paramtypes', [typeof (_a = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _a || Object, typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b || Object, typeof (_c = typeof AppViewManager !== 'undefined' && AppViewManager) === 'function' && _c || Object])], IdRef));
        }
    };
});