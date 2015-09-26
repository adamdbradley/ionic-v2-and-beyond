System.register("ionic/components/modal/modal", ["angular2/angular2", "../overlay/overlay", "../../animations/animation", "ionic/util"], function (_export) {
    /**
     * @name ionModal
     * @description
     * The Modal is a content pane that can go over the user's main view temporarily. Usually used for making a choice or editing an item.
     *
     * @usage
     * ```ts
     * class MyApp {
     *
     *  constructor(modal: Modal, app: IonicApp, ionicConfig: IonicConfig) {
     *    this.modal = modal;
     *  }
     *
     *  openModal() {
     *    this.modal.open(ContactModal, {
     *      enterAnimation: 'my-fade-in',
     *      leaveAnimation: 'my-fade-out',
     *      handle: 'my-modal'
     *    });
     *  }
     * }
     * ```
     */
    "use strict";

    var Injectable, Overlay, Animation, util, __decorate, __metadata, Modal, OVERLAY_TYPE, ModalSlideIn, ModalSlideOut;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            Injectable = _angular2Angular2.Injectable;
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

            Modal = (function (_Overlay) {
                _inherits(Modal, _Overlay);

                function Modal() {
                    _classCallCheck(this, Modal);

                    _get(Object.getPrototypeOf(Modal.prototype), "constructor", this).apply(this, arguments);
                }

                _createClass(Modal, [{
                    key: "open",

                    /**
                     * TODO
                     * @param {Type} ComponentType  TODO
                     * @param {Object} [opts={}]  TODO
                     * @returns {TODO} TODO
                     */
                    value: function open(ComponentType) {
                        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

                        var defaults = {
                            enterAnimation: 'modal-slide-in',
                            leaveAnimation: 'modal-slide-out'
                        };
                        return this.create(OVERLAY_TYPE, ComponentType, util.extend(defaults, opts));
                    }

                    /**
                     * TODO
                     * @param {TODO} handle  TODO
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

                return Modal;
            })(Overlay);

            _export("Modal", Modal);

            _export("Modal", Modal = __decorate([Injectable(), __metadata('design:paramtypes', [])], Modal));
            OVERLAY_TYPE = 'modal';

            /**
             * Animations for modals
             */

            ModalSlideIn = (function (_Animation) {
                _inherits(ModalSlideIn, _Animation);

                function ModalSlideIn(element) {
                    _classCallCheck(this, ModalSlideIn);

                    _get(Object.getPrototypeOf(ModalSlideIn.prototype), "constructor", this).call(this, element);
                    this.easing('cubic-bezier(.36,.66,.04,1)').duration(400).fromTo('translateY', '100%', '0%');
                }

                return ModalSlideIn;
            })(Animation);

            Animation.register('modal-slide-in', ModalSlideIn);

            ModalSlideOut = (function (_Animation2) {
                _inherits(ModalSlideOut, _Animation2);

                function ModalSlideOut(element) {
                    _classCallCheck(this, ModalSlideOut);

                    _get(Object.getPrototypeOf(ModalSlideOut.prototype), "constructor", this).call(this, element);
                    this.easing('ease-out').duration(250).fromTo('translateY', '0%', '100%');
                }

                return ModalSlideOut;
            })(Animation);

            Animation.register('modal-slide-out', ModalSlideOut);
        }
    };
});