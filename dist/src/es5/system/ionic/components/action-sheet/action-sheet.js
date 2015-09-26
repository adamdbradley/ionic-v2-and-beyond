System.register("ionic/components/action-sheet/action-sheet", ["angular2/angular2", "../icon/icon", "../overlay/overlay", "../../animations/animation", "ionic/util"], function (_export) {
    /**
    * @ngdoc service
    * @name ActionSheet
    * @module ionic
    * @description
    * The ActionSheet is a modal menu with options to select based on an action.
    */

    /**
     * @name ActionSheet
     * @description
     * The Action Sheet is a slide-up pane that lets the user choose from a set of options. Dangerous options are made obvious.
     *
     * There are easy ways to cancel out of the action sheet, such as tapping the backdrop or even hitting escape on the keyboard for desktop testing.
     *
     * @usage
     * ```ts
     * openMenu() {
     *
     *   this.actionSheet.open({
     *     buttons: [
     *       { text: 'Share This' },
     *       { text: 'Move' }
     *     ],
     *     destructiveText: 'Delete',
     *     titleText: 'Modify your album',
     *     cancelText: 'Cancel',
     *     cancel: function() {
     *       console.log('Canceled');
     *     },
     *     destructiveButtonClicked: () => {
     *       console.log('Destructive clicked');
     *     },
     *     buttonClicked: function(index) {
     *       console.log('Button clicked', index);
     *       if(index == 1) { return false; }
     *       return true;
     *     }
     *
     *   }).then(actionSheetRef => {
     *     this.actionSheetRef = actionSheetRef;
     *   });
     *
     * }
     * ```
     */
    "use strict";

    var View, Injectable, NgFor, NgIf, Icon, Overlay, Animation, util, __decorate, __metadata, ActionSheetDirective, ActionSheet, OVERLAY_TYPE, ActionSheetAnimation, ActionSheetSlideIn, ActionSheetSlideOut, ActionSheetMdSlideIn, ActionSheetMdSlideOut;

    var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            View = _angular2Angular2.View;
            Injectable = _angular2Angular2.Injectable;
            NgFor = _angular2Angular2.NgFor;
            NgIf = _angular2Angular2.NgIf;
        }, function (_iconIcon) {
            Icon = _iconIcon.Icon;
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

            ActionSheetDirective = (function () {
                function ActionSheetDirective() {
                    _classCallCheck(this, ActionSheetDirective);
                }

                _createClass(ActionSheetDirective, [{
                    key: "_cancel",
                    value: function _cancel() {
                        this.cancel && this.cancel();
                        return this.overlayRef.close();
                    }
                }, {
                    key: "_destructive",
                    value: function _destructive() {
                        var shouldClose = this.destructiveButtonClicked();
                        if (shouldClose === true) {
                            return this.overlayRef.close();
                        }
                    }
                }, {
                    key: "_buttonClicked",
                    value: function _buttonClicked(index) {
                        var shouldClose = this.buttonClicked(index);
                        if (shouldClose === true) {
                            return this.overlayRef.close();
                        }
                    }
                }]);

                return ActionSheetDirective;
            })();

            ActionSheetDirective = __decorate([View({
                template: '<backdrop (click)="_cancel()" tappable></backdrop>' + '<action-sheet-wrapper>' + '<div class="action-sheet-container">' + '<div class="action-sheet-group action-sheet-options">' + '<div class="action-sheet-title" *ng-if="titleText">{{titleText}}</div>' + '<button (click)="_buttonClicked(index)" *ng-for="#b of buttons; #index = index" class="action-sheet-option">' + '<icon [name]="b.icon" *ng-if="b.icon"></icon> ' + '{{b.text}}' + '</button>' + '<button *ng-if="destructiveText" (click)="_destructive()" class="destructive action-sheet-destructive">' + '<icon [name]="destructiveIcon" *ng-if="destructiveIcon"></icon> ' + '{{destructiveText}}</button>' + '</div>' + '<div class="action-sheet-group action-sheet-cancel" *ng-if="cancelText">' + '<button (click)="_cancel()">' + '<icon [name]="cancelIcon"></icon> ' + '{{cancelText}}</button>' + '</div>' + '</div>' + '</action-sheet-wrapper>',
                directives: [NgFor, NgIf, Icon]
            }), __metadata('design:paramtypes', [])], ActionSheetDirective);

            ActionSheet = (function (_Overlay) {
                _inherits(ActionSheet, _Overlay);

                function ActionSheet() {
                    _classCallCheck(this, ActionSheet);

                    _get(Object.getPrototypeOf(ActionSheet.prototype), "constructor", this).apply(this, arguments);
                }

                _createClass(ActionSheet, [{
                    key: "open",

                    /**
                     * Create and open a new Action Sheet. This is the
                     * public API, and most often you will only use ActionSheet.open()
                     *
                     * @param {Object} [opts={}]  TODO
                     * @return {Promise} Promise that resolves when the action sheet is open.
                     */
                    value: function open() {
                        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                        var config = this.config;
                        var defaults = {
                            enterAnimation: config.setting('actionSheetEnter'),
                            leaveAnimation: config.setting('actionSheetLeave'),
                            cancelIcon: config.setting('actionSheetCancelIcon'),
                            destructiveIcon: config.setting('actionSheetDestructiveIcon')
                        };
                        var context = util.extend(defaults, opts);
                        return this.create(OVERLAY_TYPE, ActionSheetDirective, context, context);
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "get",
                    value: function get() {
                        return this.getByType(OVERLAY_TYPE);
                    }
                }]);

                return ActionSheet;
            })(Overlay);

            _export("ActionSheet", ActionSheet);

            _export("ActionSheet", ActionSheet = __decorate([Injectable(), __metadata('design:paramtypes', [])], ActionSheet));
            OVERLAY_TYPE = 'action-sheet';

            /**
             * Animations for action sheet
             */

            ActionSheetAnimation = (function (_Animation) {
                _inherits(ActionSheetAnimation, _Animation);

                function ActionSheetAnimation(element) {
                    _classCallCheck(this, ActionSheetAnimation);

                    _get(Object.getPrototypeOf(ActionSheetAnimation.prototype), "constructor", this).call(this, element);
                    this.easing('cubic-bezier(.36, .66, .04, 1)').duration(450);
                    this.backdrop = new Animation(element.querySelector('backdrop'));
                    this.wrapper = new Animation(element.querySelector('action-sheet-wrapper'));
                    this.add(this.backdrop, this.wrapper);
                }

                return ActionSheetAnimation;
            })(Animation);

            ActionSheetSlideIn = (function (_ActionSheetAnimation) {
                _inherits(ActionSheetSlideIn, _ActionSheetAnimation);

                function ActionSheetSlideIn(element) {
                    _classCallCheck(this, ActionSheetSlideIn);

                    _get(Object.getPrototypeOf(ActionSheetSlideIn.prototype), "constructor", this).call(this, element);
                    this.backdrop.fromTo('opacity', 0.01, 0.4);
                    this.wrapper.fromTo('translateY', '100%', '0%');
                }

                return ActionSheetSlideIn;
            })(ActionSheetAnimation);

            Animation.register('action-sheet-slide-in', ActionSheetSlideIn);

            ActionSheetSlideOut = (function (_ActionSheetAnimation2) {
                _inherits(ActionSheetSlideOut, _ActionSheetAnimation2);

                function ActionSheetSlideOut(element) {
                    _classCallCheck(this, ActionSheetSlideOut);

                    _get(Object.getPrototypeOf(ActionSheetSlideOut.prototype), "constructor", this).call(this, element);
                    this.backdrop.fromTo('opacity', 0.4, 0.01);
                    this.wrapper.fromTo('translateY', '0%', '100%');
                }

                return ActionSheetSlideOut;
            })(ActionSheetAnimation);

            Animation.register('action-sheet-slide-out', ActionSheetSlideOut);

            ActionSheetMdSlideIn = (function (_ActionSheetSlideIn) {
                _inherits(ActionSheetMdSlideIn, _ActionSheetSlideIn);

                function ActionSheetMdSlideIn(element) {
                    _classCallCheck(this, ActionSheetMdSlideIn);

                    _get(Object.getPrototypeOf(ActionSheetMdSlideIn.prototype), "constructor", this).call(this, element);
                    this.backdrop.fromTo('opacity', 0.01, 0.26);
                }

                return ActionSheetMdSlideIn;
            })(ActionSheetSlideIn);

            Animation.register('action-sheet-md-slide-in', ActionSheetMdSlideIn);

            ActionSheetMdSlideOut = (function (_ActionSheetSlideOut) {
                _inherits(ActionSheetMdSlideOut, _ActionSheetSlideOut);

                function ActionSheetMdSlideOut(element) {
                    _classCallCheck(this, ActionSheetMdSlideOut);

                    _get(Object.getPrototypeOf(ActionSheetMdSlideOut.prototype), "constructor", this).call(this, element);
                    this.backdrop.fromTo('opacity', 0.26, 0.01);
                }

                return ActionSheetMdSlideOut;
            })(ActionSheetSlideOut);

            Animation.register('action-sheet-md-slide-out', ActionSheetMdSlideOut);
        }
    };
});