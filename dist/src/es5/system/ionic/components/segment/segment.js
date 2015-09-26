System.register("ionic/components/segment/segment", ["angular2/angular2", "angular2/forms", "../ion", "../../config/config", "../../config/decorators"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var View, Renderer, ElementRef, EventEmitter, Host, forwardRef, NgControl, Ion, IonicConfig, IonicDirective, IonicComponent, __decorate, __metadata, __param, Segment, SegmentControlValueAccessor, SegmentButton, _a, _b, _c, _d, _e, _f, _g, _h;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            View = _angular2Angular2.View;
            Renderer = _angular2Angular2.Renderer;
            ElementRef = _angular2Angular2.ElementRef;
            EventEmitter = _angular2Angular2.EventEmitter;
            Host = _angular2Angular2.Host;
            forwardRef = _angular2Angular2.forwardRef;
        }, function (_angular2Forms) {
            NgControl = _angular2Forms.NgControl;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_configDecorators) {
            IonicDirective = _configDecorators.IonicDirective;
            IonicComponent = _configDecorators.IonicComponent;
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

            Segment = (function (_Ion) {
                _inherits(Segment, _Ion);

                /**
                 * TODO
                 * @param {NgControl} ngControl  TODO
                 * @param {ElementRef} elementRef  TODO
                 * @param {IonicConfig} config  TODO
                 * @param {Renderer} renderer  TODO
                 */

                function Segment(ngControl, elementRef, ionicConfig, renderer) {
                    _classCallCheck(this, Segment);

                    _get(Object.getPrototypeOf(Segment.prototype), "constructor", this).call(this, elementRef, ionicConfig);
                    this.ele = elementRef.nativeElement;
                    this.elementRef = elementRef;
                    this.renderer = renderer;
                    this.change = new EventEmitter('change');
                    this.input = new EventEmitter('input');
                    this.ngControl = ngControl;
                    this.buttons = [];
                }

                /**
                 * Called by child SegmentButtons to bind themselves to
                 * the Segment.
                 * @param {SegmentButton} segmentButton  The child SegmentButton to register.
                 */

                _createClass(Segment, [{
                    key: "register",
                    value: function register(segmentButton) {
                        this.buttons.push(segmentButton);
                        // If this button is registered and matches our value,
                        // make sure to select it
                        if (this.value == segmentButton.value) {
                            this.selected(segmentButton);
                        }
                    }

                    /**
                     * Select the button with the given value.
                     * @param {string} value  Value of the button to select.
                     */
                }, {
                    key: "selectFromValue",
                    value: function selectFromValue(value) {
                        var _iteratorNormalCompletion = true;
                        var _didIteratorError = false;
                        var _iteratorError = undefined;

                        try {
                            for (var _iterator = this.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                var button = _step.value;

                                if (button.value === value) {
                                    button.isActive = true;
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
                     * Indicate a button should be selected.
                     * @param {SegmentButton} segmentButton  The button to select.
                     */
                }, {
                    key: "selected",
                    value: function selected(segmentButton) {
                        var _this = this;

                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = this.buttons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var button = _step2.value;

                                button.isActive = false;
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                                    _iterator2["return"]();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        segmentButton.isActive = true;
                        //this.onChange();
                        setTimeout(function () {
                            _this.value = segmentButton.value;
                            _this.ngControl.valueAccessor.writeValue(segmentButton.value);
                            _this.selectFromValue(segmentButton.value);
                            _this.ngControl.control.updateValue(segmentButton.value);
                            // Trigger on change
                            _this.change.next();
                        });
                        //this.ngControl.control().updateValue(this.value);
                        // TODO: Better way to do this?
                        //this.controlDirective._control().updateValue(this.value);
                    }
                }]);

                return Segment;
            })(Ion);

            _export("Segment", Segment);

            _export("Segment", Segment = __decorate([IonicComponent({
                selector: 'ion-segment',
                appInjector: [NgControl],
                properties: ['value'],
                host: {
                    '(click)': 'buttonClicked($event)',
                    '(change)': 'onChange($event)'
                }
            }), View({
                template: '<div class="ion-segment"><ng-content></ng-content></div>',
                directives: [forwardRef(function () {
                    return SegmentButton;
                })]
            }), __metadata('design:paramtypes', [typeof (_a = typeof NgControl !== 'undefined' && NgControl) === 'function' && _a || Object, typeof (_b = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _b || Object, typeof (_c = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _c || Object, typeof (_d = typeof Renderer !== 'undefined' && Renderer) === 'function' && _d || Object])], Segment));
            /**
             * TODO
             */

            SegmentControlValueAccessor = (function () {
                /**
                 * TODO
                 * @param {NgControl} ngControl  TODO
                 * @param {Renderer} renderer  TODO
                 * @param {ElementRef} elementRef  TODO
                 * @param {Segment} segment  TODO
                 */

                function SegmentControlValueAccessor(ngControl, renderer, elementRef, segment) {
                    _classCallCheck(this, SegmentControlValueAccessor);

                    this.onChange = function (_) {};
                    this.onTouched = function (_) {};
                    this.ngControl = ngControl;
                    this.renderer = renderer;
                    this.elementRef = elementRef;
                    this.segment = segment;
                    ngControl.valueAccessor = this;
                }

                _createClass(SegmentControlValueAccessor, [{
                    key: "writeValue",
                    value: function writeValue(value) {
                        // both this.value and setProperty are required at the moment
                        // remove when a proper imperative API is provided
                        this.value = !value ? '' : value;
                        this.renderer.setElementProperty(this.elementRef, 'value', this.value);
                        this.segment.value = this.value;
                        this.segment.selectFromValue(value);
                    }
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
                }]);

                return SegmentControlValueAccessor;
            })();

            _export("SegmentControlValueAccessor", SegmentControlValueAccessor);

            _export("SegmentControlValueAccessor", SegmentControlValueAccessor = __decorate([IonicDirective({
                selector: 'ion-segment',
                //properties: ['value'],
                host: {
                    '(change)': 'onChange($event.target.value)',
                    '(input)': 'onChange($event.target.value)',
                    '(blur)': 'onTouched()'
                }
            }), __metadata('design:paramtypes', [typeof (_e = typeof NgControl !== 'undefined' && NgControl) === 'function' && _e || Object, typeof (_f = typeof Renderer !== 'undefined' && Renderer) === 'function' && _f || Object, typeof (_g = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _g || Object, Segment])], SegmentControlValueAccessor));
            /**
             * TODO
             */

            SegmentButton = (function () {
                /**
                 * TODO
                 * @param {Segment} segment  TODO
                 * @param {ElementRef} elementRef  TODO
                 */

                function SegmentButton(segment, elementRef) {
                    _classCallCheck(this, SegmentButton);

                    this.ele = elementRef.ele;
                    this.segment = segment;
                }

                _createClass(SegmentButton, [{
                    key: "onInit",
                    value: function onInit() {
                        this.segment.register(this);
                    }
                }, {
                    key: "buttonClicked",
                    value: function buttonClicked(event) {
                        this.segment.selected(this, event);
                        event.preventDefault();
                    }
                }]);

                return SegmentButton;
            })();

            _export("SegmentButton", SegmentButton);

            _export("SegmentButton", SegmentButton = __decorate([IonicDirective({
                selector: 'ion-segment-button',
                properties: ['value'],
                host: {
                    '(click)': 'buttonClicked($event)',
                    '[class.active]': 'isActive'
                }
            }), __param(0, Host()), __metadata('design:paramtypes', [Segment, typeof (_h = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _h || Object])], SegmentButton));
        }
    };
});