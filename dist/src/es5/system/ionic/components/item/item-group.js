System.register("ionic/components/item/item-group", ["angular2/angular2"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var Directive, ElementRef, __decorate, __metadata, ItemGroup, ItemGroupTitle, _a, _b;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            ElementRef = _angular2Angular2.ElementRef;
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

            ItemGroup =
            /**
             * TODO
             * @param {ElementRef} elementRef  TODO
             */
            function ItemGroup(elementRef) {
                _classCallCheck(this, ItemGroup);

                this.ele = elementRef.nativeElement;
            };

            _export("ItemGroup", ItemGroup);

            _export("ItemGroup", ItemGroup = __decorate([Directive({
                selector: 'ion-item-group',
                host: {
                    'class': 'item-group'
                }
            }), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object])], ItemGroup));
            /**
             * TODO
             */

            ItemGroupTitle =
            /**
             * TODO
             * @param {ElementRef} elementRef  TODO
             */
            function ItemGroupTitle(elementRef) {
                _classCallCheck(this, ItemGroupTitle);

                this.isSticky = true;
                this.ele = elementRef.nativeElement;
            };

            _export("ItemGroupTitle", ItemGroupTitle);

            _export("ItemGroupTitle", ItemGroupTitle = __decorate([Directive({
                selector: 'ion-item-group-title',
                host: {
                    'class': 'item-group-title',
                    '[class.sticky]': 'isSticky'
                }
            }), __metadata('design:paramtypes', [typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b || Object])], ItemGroupTitle));
        }
    };
});