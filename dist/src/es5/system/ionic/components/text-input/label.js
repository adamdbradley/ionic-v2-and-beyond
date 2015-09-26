System.register("ionic/components/text-input/label", ["angular2/angular2", "../../config/config", "../../util/dom"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var Directive, IonicConfig, pointerCoord, hasPointerMoved, __decorate, __metadata, Label, _a;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_utilDom) {
            pointerCoord = _utilDom.pointerCoord;
            hasPointerMoved = _utilDom.hasPointerMoved;
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

            Label = (function () {
                /**
                 * TODO
                 * @param {IonicConfig} config
                 */

                function Label(config) {
                    _classCallCheck(this, Label);

                    this.scrollAssist = config.setting('keyboardScrollAssist');
                }

                /**
                 * TODO
                 * @param {TODO} ev  TODO
                 */

                _createClass(Label, [{
                    key: "pointerStart",
                    value: function pointerStart(ev) {
                        if (this.scrollAssist) {
                            // remember where the touchstart/mousedown started
                            this.startCoord = pointerCoord(ev);
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} ev  TODO
                     */
                }, {
                    key: "pointerEnd",
                    value: function pointerEnd(ev) {
                        if (this.container) {
                            // get where the touchend/mouseup ended
                            var endCoord = pointerCoord(ev);
                            // focus this input if the pointer hasn't moved XX pixels
                            if (!hasPointerMoved(20, this.startCoord, endCoord)) {
                                ev.preventDefault();
                                ev.stopPropagation();
                                this.container.focus();
                            }
                            this.startCoord = null;
                        }
                    }
                }]);

                return Label;
            })();

            _export("Label", Label);

            _export("Label", Label = __decorate([Directive({
                selector: 'ion-label',
                properties: ['id'],
                host: {
                    '[attr.id]': 'id',
                    'class': 'input-label',
                    '(touchstart)': 'pointerStart($event)',
                    '(touchend)': 'pointerEnd($event)',
                    '(mousedown)': 'pointerStart($event)',
                    '(mouseup)': 'pointerEnd($event)'
                }
            }), __metadata('design:paramtypes', [typeof (_a = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _a || Object])], Label));
        }
    };
});