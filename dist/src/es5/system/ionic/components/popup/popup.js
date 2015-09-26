System.register("ionic/components/popup/popup", ["angular2/angular2", "../overlay/overlay", "../../animations/animation", "ionic/util"], function (_export) {
    /**
     * @name ionPopup
     * @description
     * The Ionic Popup service allows programmatically creating and showing popup windows that require the user to respond in order to continue.
     *
     * The popup system has support for more flexible versions of the built in `alert()`, `prompt()`, and `confirm()` functions that users are used to, in addition to allowing popups with completely custom content and look.
     *
     * @usage
     * ```ts
     * class myApp {
     *
     *   constructor(popup: Popup) {
     *     this.popup = popup;
     *   }
     *
     *   doAlert() {
     *     this.popup.alert('Alert').then(() => {
     *       console.log('Alert closed');
     *     });
     *   }
     *
     *   doPrompt() {
     *     this.popup.prompt('What is your name?').then((name) => {
     *       console.log('Name entered:', name);
     *     }, () => {
     *       console.error('Prompt closed');
     *     });
     *   }
     *
     *   doConfirm() {
     *     this.popup.confirm('Are you sure?').then((result, ev) => {
     *       console.log('Confirmed!', result);
     *     }, () => {
     *       console.error('Not confirmed!');
     *     });
     *   }
     * }
     * ```
     */
    "use strict";

    var FORM_DIRECTIVES, Component, View, Injectable, NgClass, NgIf, NgFor, Overlay, Animation, util, __decorate, __metadata, Popup, OVERLAY_TYPE, StandardPopup, PopupAnimation, PopupPopIn, PopupPopOut;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x8, _x9, _x10) { var _again = true; _function: while (_again) { var object = _x8, property = _x9, receiver = _x10; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x8 = parent; _x9 = property; _x10 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            FORM_DIRECTIVES = _angular2Angular2.FORM_DIRECTIVES;
            Component = _angular2Angular2.Component;
            View = _angular2Angular2.View;
            Injectable = _angular2Angular2.Injectable;
            NgClass = _angular2Angular2.NgClass;
            NgIf = _angular2Angular2.NgIf;
            NgFor = _angular2Angular2.NgFor;
        }, function (_overlayOverlay) {
            Overlay = _overlayOverlay.Overlay;
        }, function (_animationsAnimation) {
            Animation = _animationsAnimation.Animation;
        }, function (_ionicUtil) {
            util = _ionicUtil;
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

            Popup = (function (_Overlay) {
                _inherits(Popup, _Overlay);

                function Popup() {
                    _classCallCheck(this, Popup);

                    _get(Object.getPrototypeOf(Popup.prototype), "constructor", this).apply(this, arguments);
                }

                _createClass(Popup, [{
                    key: "popup",

                    /**
                     * TODO
                     * @param {TODO} context  TODO
                     * @param {TODO} [opts={}]  TODO
                     * @returns {TODO} TODO
                     */
                    value: function popup(context) {
                        var _this = this;

                        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        return new Promise(function (resolve, reject) {
                            var defaults = {
                                enterAnimation: 'popup-pop-in',
                                leaveAnimation: 'popup-pop-out'
                            };
                            context.promiseResolve = resolve;
                            context.promiseReject = reject;
                            return _this.create(OVERLAY_TYPE, StandardPopup, util.extend(defaults, opts), context);
                        });
                    }

                    /**
                     * TODO
                     * @param {TODO} context  TODO
                     * @param {TODO} [opts={}]  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "alert",
                    value: function alert() {
                        var context = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        if (typeof context === 'string') {
                            context = {
                                title: context
                            };
                        }
                        var button = {
                            text: 'OK',
                            onTap: function onTap(event, popupRef) {
                                // Allow it to close
                                //resolve();
                            }
                        };
                        context = util.extend({
                            cancel: function cancel() {
                                //reject();
                            },
                            buttons: [button]
                        }, context);
                        return this.popup(context, opts);
                    }

                    /**
                     * TODO
                     * @param {TODO} context  TODO
                     * @param {TODO} [opts={}]  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "confirm",
                    value: function confirm() {
                        var context = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        if (typeof context === 'string') {
                            context = {
                                title: context
                            };
                        }
                        var okButton = {
                            text: 'OK',
                            onTap: function onTap(event, popupRef) {
                                // Allow it to close
                            }
                        };
                        var cancelButton = {
                            text: 'Cancel',
                            isCancel: true,
                            onTap: function onTap(event, popupRef) {
                                // Allow it to close
                            }
                        };
                        context = util.extend({
                            cancel: function cancel() {},
                            buttons: [cancelButton, okButton]
                        }, context);
                        return this.popup(context, opts);
                    }

                    /**
                     * TODO
                     * @param {TODO} [context={}]  TODO
                     * @param {TODO} [opts={}]  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "prompt",
                    value: function prompt() {
                        var context = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
                        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        if (typeof context === 'string') {
                            context = {
                                title: context
                            };
                        }
                        var okButton = {
                            text: 'Ok',
                            onTap: function onTap(event, popupRef) {
                                // Allow it to close
                            }
                        };
                        var cancelButton = {
                            text: 'Cancel',
                            isCancel: true,
                            onTap: function onTap(event, popupRef) {
                                // Allow it to close
                            }
                        };
                        context = util.extend({
                            showPrompt: true,
                            promptPlaceholder: '',
                            cancel: function cancel() {},
                            buttons: [cancelButton, okButton]
                        }, context);
                        return this.popup(context, opts);
                    }

                    /**
                     * TODO
                     * @param {TODO} context  TODO
                     * @param {TODO} [opts={}]  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "get",
                    value: function get(handle) {
                        if (handle) {
                            return this.getByHandle(handle, OVERLAY_TYPE);
                        }
                        return this.getByType(OVERLAY_TYPE);
                    }
                }]);

                return Popup;
            })(Overlay);

            _export("Popup", Popup);

            _export("Popup", Popup = __decorate([Injectable(), __metadata('design:paramtypes', [])], Popup));
            OVERLAY_TYPE = 'popup';

            StandardPopup = (function () {
                function StandardPopup(popup) {
                    _classCallCheck(this, StandardPopup);

                    this.popup = popup;
                }

                _createClass(StandardPopup, [{
                    key: "onInit",
                    value: function onInit() {
                        var _this2 = this;

                        setTimeout(function () {
                            _this2.element = _this2.overlayRef.getElementRef().nativeElement;
                            _this2.promptInput = _this2.element.querySelector('input');
                            if (_this2.promptInput) {
                                _this2.promptInput.value = '';
                            }
                        });
                    }
                }, {
                    key: "buttonTapped",
                    value: function buttonTapped(button, event) {
                        var promptValue = this.promptInput && this.promptInput.value;
                        var retVal = button.onTap && button.onTap(event, this, {
                            promptValue: promptValue
                        });
                        // If the event.preventDefault() wasn't called, close
                        if (!event.defaultPrevented) {
                            // If this is a cancel button, reject the promise
                            if (button.isCancel) {
                                this.promiseReject();
                            } else {
                                // Resolve with the prompt value
                                this.promiseResolve(promptValue);
                            }
                            return this.overlayRef.close();
                        }
                    }
                }, {
                    key: "_cancel",
                    value: function _cancel(event) {
                        this.cancel && this.cancel(event);
                        if (!event.defaultPrevented) {
                            this.promiseReject();
                            return this.overlayRef.close();
                        }
                    }
                }]);

                return StandardPopup;
            })();

            StandardPopup = __decorate([Component({
                selector: 'ion-popup-default'
            }), View({
                template: '<backdrop (click)="_cancel($event)" tappable></backdrop>' + '<popup-wrapper>' + '<div class="popup-head">' + '<h3 class="popup-title" [inner-html]="title"></h3>' + '<h5 class="popup-sub-title" [inner-html]="subTitle" *ng-if="subTitle"></h5>' + '</div>' + '<div class="popup-body">' + '<input type="text" *ng-if="showPrompt" placeholder="{{promptPlaceholder}}">' + '</div>' + '<div class="popup-buttons" *ng-if="buttons.length">' + '<button *ng-for="#button of buttons" (click)="buttonTapped(button, $event)" [ng-class]="button.type || \'button-default\'" [inner-html]="button.text"></button>' + '</div>' + '</popup-wrapper>',
                directives: [FORM_DIRECTIVES, NgClass, NgIf, NgFor]
            }), __metadata('design:paramtypes', [Popup])], StandardPopup);

            PopupAnimation = (function (_Animation) {
                _inherits(PopupAnimation, _Animation);

                function PopupAnimation(element) {
                    _classCallCheck(this, PopupAnimation);

                    _get(Object.getPrototypeOf(PopupAnimation.prototype), "constructor", this).call(this, element);
                    this.easing('ease-in-out').duration(200);
                    this.backdrop = new Animation(element.querySelector('backdrop'));
                    this.wrapper = new Animation(element.querySelector('popup-wrapper'));
                    this.add(this.backdrop, this.wrapper);
                }

                /**
                 * Animations for modals
                 */
                return PopupAnimation;
            })(Animation);

            PopupPopIn = (function (_PopupAnimation) {
                _inherits(PopupPopIn, _PopupAnimation);

                function PopupPopIn(element) {
                    _classCallCheck(this, PopupPopIn);

                    _get(Object.getPrototypeOf(PopupPopIn.prototype), "constructor", this).call(this, element);
                    this.wrapper.fromTo('opacity', '0', '1');
                    this.wrapper.fromTo('scale', '1.1', '1');
                    this.backdrop.fromTo('opacity', '0', '0.3');
                }

                return PopupPopIn;
            })(PopupAnimation);

            Animation.register('popup-pop-in', PopupPopIn);

            PopupPopOut = (function (_PopupAnimation2) {
                _inherits(PopupPopOut, _PopupAnimation2);

                function PopupPopOut(element) {
                    _classCallCheck(this, PopupPopOut);

                    _get(Object.getPrototypeOf(PopupPopOut.prototype), "constructor", this).call(this, element);
                    this.wrapper.fromTo('opacity', '1', '0');
                    this.wrapper.fromTo('scale', '1', '0.9');
                    this.backdrop.fromTo('opacity', '0.3', '0');
                }

                return PopupPopOut;
            })(PopupAnimation);

            Animation.register('popup-pop-out', PopupPopOut);
        }
    };
});