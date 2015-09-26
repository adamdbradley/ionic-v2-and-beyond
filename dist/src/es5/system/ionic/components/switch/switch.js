System.register("ionic/components/switch/switch", ["angular2/angular2", "../ion", "../form/input", "../../config/config", "../../config/decorators", "../../util/dom"], function (_export) {
    /**
     * @name mediaSwitch
     * @private
     */
    "use strict";

    var Directive, ElementRef, Host, Optional, NgControl, Inject, forwardRef, Ion, IonInput, IonicConfig, IonicComponent, IonicView, pointerCoord, __decorate, __metadata, __param, MediaSwitch, Switch, _a, _b, _c, _d;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            ElementRef = _angular2Angular2.ElementRef;
            Host = _angular2Angular2.Host;
            Optional = _angular2Angular2.Optional;
            NgControl = _angular2Angular2.NgControl;
            Inject = _angular2Angular2.Inject;
            forwardRef = _angular2Angular2.forwardRef;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_formInput) {
            IonInput = _formInput.IonInput;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_configDecorators) {
            IonicComponent = _configDecorators.IonicComponent;
            IonicView = _configDecorators.IonicView;
        }, function (_utilDom) {
            pointerCoord = _utilDom.pointerCoord;
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

            MediaSwitch =
            /**
             * TODO
             * @param {Switch} swtch  TODO
             * @param {} elementRef  TODO
             * @param {IonicConfig} config  TODO
             */
            function MediaSwitch(swtch, elementRef) {
                _classCallCheck(this, MediaSwitch);

                swtch.switchEle = elementRef.nativeElement;
                this.swtch = swtch;
            };

            MediaSwitch = __decorate([Directive({
                selector: '.media-switch',
                host: {
                    'tappable': 'true',
                    '(touchstart)': 'swtch.pointerDown($event)',
                    '(mousedown)': 'swtch.pointerDown($event)',
                    '[class.switch-activated]': 'swtch.isActivated'
                }
            }), __param(0, Host()), __param(0, Inject(forwardRef(function () {
                return Switch;
            }))), __metadata('design:paramtypes', [Switch, typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object])], MediaSwitch);
            /**
             * @name ionSwitch
             * @description
             * A switch technically is the same thing as an HTML checkbox input, except it looks different and is easier to use on a touch device. Ionic prefers to wrap the checkbox input with the <label> in order to make the entire toggle easy to tap or drag.
             *
             * Toggles can also have colors assigned to them, by adding the `toggle-assertive` attribute to assign the assertive color.
             *
             * See the [Angular 2 Docs](https://angular.io/docs/js/latest/api/forms/) for more info on forms and input.
             *
             * @usage
             * ```html
             * // Create a single switch
             *  <ion-switch checked="true">
             *    Pineapple
             *  </ion-switch>
             *
             * // Create a list of switches:
             *  <ion-list>
             *
             *    <ion-switch checked="true">
             *      Apple
             *    </ion-switch>
             *
             *     <ion-switch checked="false">
             *       Banana
             *     </ion-switch>
             *
             *     <ion-switch disabled="true">
             *       Cherry
             *     </ion-switch>
             *
             *  </ion-list>
             * ```
             *
             */

            Switch = (function (_Ion) {
                _inherits(Switch, _Ion);

                /**
                 * TODO
                 * @param {ElementRef} elementRef  TODO
                 * @param {IonicConfig} config  TODO
                 * @param {NgControl=} ngControl  TODO
                 */

                function Switch(elementRef, config, ngControl) {
                    _classCallCheck(this, Switch);

                    _get(Object.getPrototypeOf(Switch.prototype), "constructor", this).call(this, elementRef, config);
                    this.ngControl = ngControl;
                    var self = this;
                    self.id = IonInput.nextId();
                    self.tabIndex = 0;
                    self.lastTouch = 0;
                    self.onChange = function (_) {};
                    self.onTouched = function (_) {};
                    if (ngControl) ngControl.valueAccessor = this;
                    function pointerMove(ev) {
                        var currentX = pointerCoord(ev).x;
                        if (self.checked) {
                            if (currentX + 15 < self.startX) {
                                self.toggle();
                                self.startX = currentX;
                            }
                        } else if (currentX - 15 > self.startX) {
                            self.toggle();
                            self.startX = currentX;
                        }
                    }
                    function pointerOut(ev) {
                        if (ev.currentTarget === ev.target) {
                            self.pointerUp(ev);
                        }
                    }
                    this.addMoveListener = function () {
                        this.switchEle.addEventListener('touchmove', pointerMove);
                        this.switchEle.addEventListener('mousemove', pointerMove);
                        elementRef.nativeElement.addEventListener('mouseout', pointerOut);
                    };
                    this.removeMoveListener = function () {
                        this.switchEle.removeEventListener('touchmove', pointerMove);
                        this.switchEle.removeEventListener('mousemove', pointerMove);
                        elementRef.nativeElement.removeEventListener('mouseout', pointerOut);
                    };
                }

                _createClass(Switch, [{
                    key: "onInit",
                    value: function onInit() {
                        _get(Object.getPrototypeOf(Switch.prototype), "onInit", this).call(this);
                        this.labelId = 'label-' + this.id;
                    }

                    /**
                     * Set checked state of this switch.
                     * @param {boolean} value  Boolean to set this switch's checked state to.
                     */
                }, {
                    key: "check",
                    value: function check(value) {
                        this.checked = !!value;
                        this.onChange(this.checked);
                    }

                    /**
                     * Toggle the checked state of this switch.
                     */
                }, {
                    key: "toggle",
                    value: function toggle() {
                        this.check(!this.checked);
                    }
                }, {
                    key: "click",
                    value: function click(ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        this.toggle();
                    }
                }, {
                    key: "writeValue",
                    value: function writeValue(value) {
                        this.checked = value;
                    }
                }, {
                    key: "pointerDown",
                    value: function pointerDown(ev) {
                        if (/touch/.test(ev.type)) {
                            this.lastTouch = Date.now();
                        }
                        if (this.lastTouch + 999 > Date.now() && /mouse/.test(ev.type)) {
                            return;
                        }
                        this.startX = pointerCoord(ev).x;
                        this.removeMoveListener();
                        this.addMoveListener();
                        this.isActivated = true;
                    }
                }, {
                    key: "pointerUp",
                    value: function pointerUp(ev) {
                        if (this.lastTouch + 999 > Date.now() && /mouse/.test(ev.type)) {
                            return;
                        }
                        var endX = pointerCoord(ev).x;
                        if (this.checked) {
                            if (this.startX + 4 > endX) {
                                this.toggle();
                            }
                        } else if (this.startX - 4 < endX) {
                            this.toggle();
                        }
                        this.removeMoveListener();
                        this.isActivated = false;
                    }

                    // Used by the view to update the model (Control)
                    // Up to us to call it in update()
                }, {
                    key: "registerOnChange",
                    value: function registerOnChange(fn) {
                        this.onChange = fn;
                    }
                }, {
                    key: "registerOnTouched",
                    value: function registerOnTouched(fn) {
                        this.onTouched = fn;
                    }
                }, {
                    key: "onDestroy",
                    value: function onDestroy() {
                        this.removeMoveListener();
                        this.switchEle = this.addMoveListener = this.removeMoveListener = null;
                    }
                }]);

                return Switch;
            })(Ion);

            _export("Switch", Switch);

            _export("Switch", Switch = __decorate([IonicComponent({
                selector: 'ion-switch',
                properties: ['value', 'checked', 'disabled', 'id'],
                host: {
                    'class': 'item',
                    'role': 'checkbox',
                    '[attr.tab-index]': 'tabIndex',
                    '[attr.aria-checked]': 'checked',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.aria-labelledby]': 'labelId',
                    '(touchend)': 'pointerUp($event)',
                    '(mouseup)': 'pointerUp($event)'
                }
            }), IonicView({
                template: '<ng-content select="[item-left]"></ng-content>' + '<ion-item-content id="{{labelId}}">' + '<ng-content></ng-content>' + '</ion-item-content>' + '<div item-right class="media-switch">' + '<div class="switch-icon"></div>' + '</div>',
                directives: [MediaSwitch]
            }), __param(2, Optional()), __metadata('design:paramtypes', [typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b || Object, typeof (_c = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _c || Object, typeof (_d = typeof NgControl !== 'undefined' && NgControl) === 'function' && _d || Object])], Switch));
        }
    };
});