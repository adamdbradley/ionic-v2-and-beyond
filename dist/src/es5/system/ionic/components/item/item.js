System.register("ionic/components/item/item", ["angular2/angular2", "ionic/util"], function (_export) {
    /**
     * @name ionItem
     * @description
     * Creates a list-item that can easily be swiped,
     * deleted, reordered, edited, and more.
     *
     * @usage
     * ```html
     * <ion-list>
     *   <ion-item *ng-for="#item of items" (click)="itemTapped($event, item)">
     *     {{item.title}}
     *     <div class="item-note" item-right>
     *       {{item.note}}
     *     </div>
     *   </ion-item>
     * </ion-list>
     *  ```
     */
    "use strict";

    var Component, View, ElementRef, NgIf, dom, __decorate, __metadata, Item, Slideable, ItemSlideGesture, _a;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            View = _angular2Angular2.View;
            ElementRef = _angular2Angular2.ElementRef;
            NgIf = _angular2Angular2.NgIf;
        }, function (_ionicUtil) {
            dom = _ionicUtil.dom;
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

            Item =
            /**
             * TODO
             * @param {ElementRef} elementRef  A reference to the component's DOM element.
             */
            function Item(elementRef) {
                _classCallCheck(this, Item);

                this._isOpen = false;
                this._isSlideActive = false;
                this._isTransitioning = false;
                this._transform = '';
                this.ele = elementRef.nativeElement;
                this.swipeButtons = {};
                this.optionButtons = {};
            };

            _export("Item", Item);

            _export("Item", Item = __decorate([Component({
                selector: 'ion-item,[ion-item]',
                host: {
                    'class': 'item'
                }
            }), View({
                template: '<ng-content select="[item-left]"></ng-content>' + '<ion-item-content>' + '<ng-content></ng-content>' + '</ion-item-content>' + '<ng-content select="[item-right]"></ng-content>',
                directives: [NgIf]
            }), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object])], Item));

            Slideable = (function () {
                function Slideable(slideElement) {
                    _classCallCheck(this, Slideable);
                }

                // override

                _createClass(Slideable, [{
                    key: "onTransform",
                    value: function onTransform(str) {}

                    // override
                }, {
                    key: "onTransitionActive",
                    value: function onTransitionActive(active) {}

                    //override
                }, {
                    key: "onSlideActive",
                    value: function onSlideActive(active) {}
                }, {
                    key: "transform",
                    value: function transform(str) {
                        if (arguments.length && str !== this._transform) {
                            this.onTransform();
                        }
                    }
                }, {
                    key: "isTransitionActive",
                    value: function isTransitionActive(active) {
                        if (arguments.length && active !== this._isTransitionActive) {
                            this._isTransitionActive = active;
                            this.onSetTransitionActive(active);
                        }
                        return this._isTransitioning;
                    }
                }, {
                    key: "isSlideActive",
                    value: function isSlideActive(active) {
                        if (arguments.length && active !== this._isSlideActive) {
                            this._isSlideActive = active;
                            this.onSetDragActive(active);
                        }
                        return this._isSlideActive;
                    }
                }, {
                    key: "isOpen",
                    value: (function (_isOpen) {
                        function isOpen(_x) {
                            return _isOpen.apply(this, arguments);
                        }

                        isOpen.toString = function () {
                            return _isOpen.toString();
                        };

                        return isOpen;
                    })(function (open) {
                        var _this = this;

                        if (arguments.length && open !== this._isOpen) {
                            this.isTransitionActive(true);
                            dom.raf(function () {
                                _this.isOpen = isOpen;
                                _this.onSetIsOpen(open);
                            });
                        }
                    })
                }]);

                return Slideable;
            })();

            ItemSlideGesture = function ItemSlideGesture() {
                _classCallCheck(this, ItemSlideGesture);
            };
        }
    };
});