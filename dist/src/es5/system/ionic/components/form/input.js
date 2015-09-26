System.register('ionic/components/form/input', ['../ion'], function (_export) {
    'use strict';

    var Ion, inputRegistry, inputItemIds, activeInput, lastInput, IonInput;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_ion) {
            Ion = _ion.Ion;
        }],
        execute: function () {
            inputRegistry = [];
            inputItemIds = -1;
            activeInput = null;
            lastInput = null;

            /**
             * @name ionInput
             * @description
             * The ionInput component is used to focus text input elements.
             *
             * The `focusNext()` and  `focusPrevious()` methods make it easy to focus input elements across all devices.
             *
             * @usage
             * ```html
             * <ion-input>
             *   <ion-label>Name</ion-label>
             *   <input value="Name" type="text">
             * </ion-input>
             * ```
             */

            IonInput = (function (_Ion) {
                _inherits(IonInput, _Ion);

                function IonInput() {
                    _classCallCheck(this, IonInput);

                    _get(Object.getPrototypeOf(IonInput.prototype), 'constructor', this).apply(this, arguments);
                }

                _createClass(IonInput, null, [{
                    key: 'registerInput',

                    /**
                     * @param {TODO} input  TODO
                     */
                    value: function registerInput(input) {
                        inputRegistry.push(input);
                    }

                    /**
                     * TODO
                     * @param {TODO} input  TODO
                     */
                }, {
                    key: 'setAsLastInput',
                    value: function setAsLastInput(input) {
                        lastInput = input;
                    }

                    /**
                     * Focuses the previous input element, if it exists.
                     */
                }, {
                    key: 'focusPrevious',
                    value: function focusPrevious() {
                        this.focusMove(-1);
                    }

                    /**
                     * Focuses the next input element, if it exists.
                     */
                }, {
                    key: 'focusNext',
                    value: function focusNext() {
                        this.focusMove(1);
                    }

                    /**
                     * @param {Number} inc TODO
                     */
                }, {
                    key: 'focusMove',
                    value: function focusMove(inc) {
                        var input = activeInput || lastInput;
                        if (input) {
                            var index = inputRegistry.indexOf(input);
                            if (index > -1 && index + inc < inputRegistry.length) {
                                var siblingInput = inputRegistry[index + inc];
                                siblingInput && siblingInput.initFocus();
                            }
                        }
                    }

                    /**
                     * @returns {Number} The ID of the next input element.
                     */
                }, {
                    key: 'nextId',
                    value: function nextId() {
                        return ++inputItemIds;
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: 'clearTabIndexes',
                    value: function clearTabIndexes() {
                        for (var i = 0; i < inputRegistry.length; i++) {
                            inputRegistry[i].tabIndex = -1;
                        }
                    }
                }]);

                return IonInput;
            })(Ion);

            _export('IonInput', IonInput);
        }
    };
});