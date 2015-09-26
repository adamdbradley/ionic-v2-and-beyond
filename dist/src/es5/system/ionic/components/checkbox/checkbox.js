System.register("ionic/components/checkbox/checkbox", ["angular2/angular2", "../ion", "../form/input", "../../config/config", "../../config/decorators"], function (_export) {
    /**
     * @name ionCheckbox
     * @description
     * The checkbox is no different than the HTML checkbox input, except it's styled differently
     *
     * See the [Angular 2 Docs](https://angular.io/docs/js/latest/api/forms/) for more info on forms and input.
     *
     * @usage
     * ```html
     * <ion-checkbox checked="true" value="isChecked" ng-control="htmlCtrl">
     *   HTML5
     * </ion-checkbox>
     * ```
     */
    "use strict";

    var ElementRef, Optional, NgControl, Ion, IonInput, IonicConfig, IonicComponent, IonicView, __decorate, __metadata, __param, Checkbox, _a, _b, _c;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            ElementRef = _angular2Angular2.ElementRef;
            Optional = _angular2Angular2.Optional;
            NgControl = _angular2Angular2.NgControl;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_formInput) {
            IonInput = _formInput.IonInput;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_configDecorators) {
            IonicComponent = _configDecorators.IonicComponent;
            IonicView = _configDecorators.IonicView;
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

            Checkbox = (function (_Ion) {
                _inherits(Checkbox, _Ion);

                /**
                 * TODO
                 * @param {ElementRef} elementRef  TODO
                 * @param {IonicConfig} ionicConfig  TODO
                 * @param {NgControl=} ngControl  TODO
                 */

                function Checkbox(elementRef, config, ngControl) {
                    _classCallCheck(this, Checkbox);

                    _get(Object.getPrototypeOf(Checkbox.prototype), "constructor", this).call(this, elementRef, config);
                    this.tabIndex = 0;
                    this.id = IonInput.nextId();
                    this.onChange = function (_) {};
                    this.onTouched = function (_) {};
                    this.ngControl = ngControl;
                    if (ngControl) ngControl.valueAccessor = this;
                }

                /**
                 * TODO
                 */

                _createClass(Checkbox, [{
                    key: "onInit",
                    value: function onInit() {
                        _get(Object.getPrototypeOf(Checkbox.prototype), "onInit", this).call(this);
                        this.labelId = 'label-' + this.id;
                    }

                    /**
                     * Toggle the checked state of the checkbox. Calls onChange to pass the
                     * updated checked state to the model (Control).
                     */
                }, {
                    key: "toggle",
                    value: function toggle() {
                        this.checked = !this.checked;
                        this.onChange(this.checked);
                    }

                    /**
                     * Click event handler to toggle the checkbox checked state.
                     * @param {MouseEvent} ev  The click event.
                     */
                }, {
                    key: "click",
                    value: function click(ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        this.toggle();
                    }

                    /**
                     * @private
                     * Angular2 Forms API method called by the model (Control) on change to update
                     * the checked value.
                     * https://github.com/angular/angular/blob/master/modules/angular2/src/forms/directives/shared.ts#L34
                     */
                }, {
                    key: "writeValue",
                    value: function writeValue(value) {
                        this.checked = value;
                    }

                    /**
                     * @private
                     * Angular2 Forms API method called by the view (NgControl) to register the
                     * onChange event handler that updates the model (Control).
                     * https://github.com/angular/angular/blob/master/modules/angular2/src/forms/directives/shared.ts#L27
                     * @param {Function} fn  the onChange event handler.
                     */
                }, {
                    key: "registerOnChange",
                    value: function registerOnChange(fn) {
                        this.onChange = fn;
                    }

                    /**
                     * @private
                     * Angular2 Forms API method called by the the view (NgControl) to register
                     * the onTouched event handler that marks model (Control) as touched.
                     * @param {Function} fn  onTouched event handler.
                     */
                }, {
                    key: "registerOnTouched",
                    value: function registerOnTouched(fn) {
                        this.onTouched = fn;
                    }
                }]);

                return Checkbox;
            })(Ion);

            _export("Checkbox", Checkbox);

            _export("Checkbox", Checkbox = __decorate([IonicComponent({
                selector: 'ion-checkbox',
                properties: ['value', 'checked', 'disabled', 'id'],
                host: {
                    'class': 'item no-activated',
                    'role': 'checkbox',
                    'tappable': 'true',
                    '[attr.tab-index]': 'tabIndex',
                    '[attr.aria-checked]': 'checked',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.aria-labelledby]': 'labelId',
                    '(click)': 'click($event)'
                }
            }), IonicView({
                template: '<div item-left class="media-checkbox">' + '<div class="checkbox-icon"></div>' + '</div>' + '<ion-item-content id="{{labelId}}">' + '<ng-content></ng-content>' + '</ion-item-content>'
            }), __param(2, Optional()), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _b || Object, typeof (_c = typeof NgControl !== 'undefined' && NgControl) === 'function' && _c || Object])], Checkbox));
        }
    };
});