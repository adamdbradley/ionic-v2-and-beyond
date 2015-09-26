System.register("ionic/components/form/focus-holder", ["angular2/angular2", "./input"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var Component, Directive, View, Host, Attribute, ElementRef, forwardRef, IonInput, __decorate, __metadata, __param, FocusHolder, FocusInput, _a;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            Directive = _angular2Angular2.Directive;
            View = _angular2Angular2.View;
            Host = _angular2Angular2.Host;
            Attribute = _angular2Angular2.Attribute;
            ElementRef = _angular2Angular2.ElementRef;
            forwardRef = _angular2Angular2.forwardRef;
        }, function (_input) {
            IonInput = _input.IonInput;
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

            FocusHolder = (function () {
                /**
                 * TODO
                 */

                function FocusHolder() {
                    _classCallCheck(this, FocusHolder);

                    this.i = [];
                }

                /**
                 * TODO
                 * @param {TODO} inputType  TODO
                 */

                _createClass(FocusHolder, [{
                    key: "setFocusHolder",
                    value: function setFocusHolder(inputType) {
                        this.i[2].type = inputType;
                        this.i[2].setFocus();
                    }

                    /**
                     * TODO
                     * @param {TODO} tabIndex  TODO
                     */
                }, {
                    key: "receivedFocus",
                    value: function receivedFocus(tabIndex) {
                        if (tabIndex === '999') {
                            // focus on the previous input
                            IonInput.focusPrevious();
                        } else if (tabIndex === '1001') {
                            // focus on the next input
                            IonInput.focusNext();
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} input  TODO
                     */
                }, {
                    key: "register",
                    value: function register(input) {
                        this.i.push(input);
                    }
                }]);

                return FocusHolder;
            })();

            _export("FocusHolder", FocusHolder);

            _export("FocusHolder", FocusHolder = __decorate([Component({
                selector: 'focus-holder'
            }), View({
                template: '<input tabindex="999"><input tabindex="1001"><input tabindex="1002">',
                directives: [forwardRef(function () {
                    return FocusInput;
                })]
            }), __metadata('design:paramtypes', [])], FocusHolder));

            FocusInput = (function () {
                function FocusInput(elementRef, holder, tabindex) {
                    _classCallCheck(this, FocusInput);

                    this.elementRef = elementRef;
                    this.holder = holder;
                    this.tabindex = tabindex;
                    this.holder.register(this);
                }

                _createClass(FocusInput, [{
                    key: "setFocus",
                    value: function setFocus() {
                        this.elementRef.nativeElement.focus();
                    }
                }, {
                    key: "keydown",
                    value: function keydown(ev) {
                        // prevent any keyboard typing when a holder has focus
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                }, {
                    key: "type",
                    get: function get() {
                        // default to text type if unknown
                        return this._t || 'text';
                    },
                    set: function set(val) {
                        this._t = val;
                    }
                }]);

                return FocusInput;
            })();

            FocusInput = __decorate([Directive({
                selector: 'input',
                host: {
                    '[type]': 'type',
                    '(focus)': 'holder.receivedFocus(tabindex)',
                    '(keydown)': 'keydown($event)'
                }
            }), __param(1, Host()), __param(2, Attribute('tabindex')), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, FocusHolder, String])], FocusInput);
        }
    };
});