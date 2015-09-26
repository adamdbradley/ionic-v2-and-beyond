System.register("ionic/components/text-input/text-input", ["angular2/angular2", "../../config/decorators", "../../config/config", "../form/input", "./label", "../ion", "../app/app", "../content/content", "../../util/dom", "../../platform/platform"], function (_export) {
    /**
     * TODO
     */
    "use strict";

    var Directive, Host, Optional, ElementRef, Attribute, Query, QueryList, NgZone, IonicDirective, IonicConfig, IonInput, Label, Ion, IonicApp, Content, dom, IonicPlatform, __decorate, __metadata, __param, TextInputElement, _TextInput, SCROLL_INTO_VIEW_DURATION, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_angular2Angular2) {
            Directive = _angular2Angular2.Directive;
            Host = _angular2Angular2.Host;
            Optional = _angular2Angular2.Optional;
            ElementRef = _angular2Angular2.ElementRef;
            Attribute = _angular2Angular2.Attribute;
            Query = _angular2Angular2.Query;
            QueryList = _angular2Angular2.QueryList;
            NgZone = _angular2Angular2.NgZone;
        }, function (_configDecorators) {
            IonicDirective = _configDecorators.IonicDirective;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_formInput) {
            IonInput = _formInput.IonInput;
        }, function (_label) {
            Label = _label.Label;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_appApp) {
            IonicApp = _appApp.IonicApp;
        }, function (_contentContent) {
            Content = _contentContent.Content;
        }, function (_utilDom) {
            dom = _utilDom;
        }, function (_platformPlatform) {
            IonicPlatform = _platformPlatform.IonicPlatform;
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

            TextInputElement = (function () {
                /**
                 * TODO
                 * @param {string} type  The value of the underlying element's type attribute.
                 * @param {ElementRef} elementRef  TODO
                 * @param {IonicConfig} config  TODO
                 */

                function TextInputElement(type, elementRef, config) {
                    _classCallCheck(this, TextInputElement);

                    this.type = type;
                    this.elementRef = elementRef;
                    this.tabIndex = this.tabIndex || '';
                }

                /**
                 * Focus the input.
                 */

                _createClass(TextInputElement, [{
                    key: "setFocus",
                    value: function setFocus() {
                        this.elementRef.nativeElement.focus();
                    }

                    /**
                     * Whether the input has focus or not.
                     * @returns {boolean}  true if the input has focus, otherwise false.
                     */
                }, {
                    key: "hasFocus",
                    get: function get() {
                        return dom.hasFocus(this.elementRef);
                    }

                    /**
                     * Whether the input has a value.
                     * @returns {boolean}  true if the input has a value, otherwise false.
                     */
                }, {
                    key: "hasValue",
                    get: function get() {
                        return this.elementRef.nativeElement.value !== '';
                    }
                }]);

                return TextInputElement;
            })();

            _export("TextInputElement", TextInputElement);

            _export("TextInputElement", TextInputElement = __decorate([Directive({
                selector: 'textarea,input[type=text],input[type=password],input[type=number],input[type=search],input[type=email],input[type=url],input[type=tel]',
                property: ['tabIndex'],
                host: {
                    '[tabIndex]': 'tabIndex',
                    '[attr.aria-labelledby]': 'labelledBy',
                    'class': 'text-input input'
                }
            }), __param(0, Attribute('type')), __metadata('design:paramtypes', [String, typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _b || Object])], TextInputElement));
            /**
             * TODO
             */

            _TextInput = (function (_Ion) {
                _inherits(TextInput, _Ion);

                /**
                 * TODO
                 * @param {ElementRef} elementRef  TODO
                 * @param {IonicConfig} config  TODO
                 * @param {IonicApp} app  TODO
                 * @param {NgZone} ngZone  TODO
                 * @param {Content=} scrollView  The parent scroll view.
                 * @param {QueryList<TextInputElement>} inputQry  TODO
                 * @param {QueryList<Label>} labelQry  TODO
                 */

                function TextInput(elementRef, config, app, ngZone, platform, scrollView, inputQry, labelQry) {
                    _classCallCheck(this, TextInput);

                    _get(Object.getPrototypeOf(TextInput.prototype), "constructor", this).call(this, elementRef, config);
                    this.scrollView = scrollView;
                    this.scrollAssist = config.setting('keyboardScrollAssist');
                    this.id = IonInput.nextId();
                    IonInput.registerInput(this);
                    this.app = app;
                    this.zone = ngZone;
                    this.platform = platform;
                    this.inputQry = inputQry;
                    this.labelQry = labelQry;
                    this.keyboardHeight = this.config.setting('keyboardHeight');
                }

                /**
                 * TODO
                 */

                _createClass(TextInput, [{
                    key: "onInit",
                    value: function onInit() {
                        _get(Object.getPrototypeOf(TextInput.prototype), "onInit", this).call(this);
                        var label = this.labelQry.first;
                        this.input = this.inputQry.first;
                        if (this.input) {
                            this.type = this.input.type;
                            this.input.tabIndex = -1;
                            if (label) {
                                label.id = label.id || 'label-' + this.id;
                                this.input.labelledBy = label.id;
                            }
                        }
                        var self = this;
                        self.scrollMove = function (ev) {
                            self.deregListeners();
                            if (self.inputHasFocus) {
                                self.tempFocusMove();
                            }
                        };
                    }

                    /**
                     * TODO
                     * @param {Event} ev  TODO
                     */
                }, {
                    key: "pointerStart",
                    value: function pointerStart(ev) {
                        if (this.scrollAssist && this.app.isEnabled()) {
                            // remember where the touchstart/mousedown started
                            this.startCoord = dom.pointerCoord(ev);
                        }
                    }

                    /**
                     * TODO
                     * @param {Event} ev TODO
                     */
                }, {
                    key: "pointerEnd",
                    value: function pointerEnd(ev) {
                        var _this = this;

                        if (!this.app.isEnabled()) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        } else if (this.scrollAssist && ev.type === 'touchend') {
                            // get where the touchend/mouseup ended
                            var endCoord = dom.pointerCoord(ev);
                            // focus this input if the pointer hasn't moved XX pixels
                            // and the input doesn't already have focus
                            if (!dom.hasPointerMoved(8, this.startCoord, endCoord) && !this.inputHasFocus) {
                                ev.preventDefault();
                                ev.stopPropagation();
                                this.zone.runOutsideAngular(function () {
                                    _this.initFocus();
                                    // temporarily prevent mouseup's from focusing
                                    _this.preventMouse = true;
                                    clearTimeout(_this.mouseTimer);
                                    _this.mouseTimer = setTimeout(function () {
                                        _this.preventMouse = false;
                                    }, 500);
                                });
                            }
                        } else if (!this.preventMouse) {
                            ev.preventDefault();
                            ev.stopPropagation();
                            this.zone.runOutsideAngular(function () {
                                _this.setFocus();
                            });
                        }
                    }

                    /**
                     * TODO
                     * @returns {TODO} TODO
                     */
                    //TODO inconsistent return value, sometimes undefined
                }, {
                    key: "initFocus",
                    value: function initFocus() {
                        var _this2 = this;

                        var scrollView = this.scrollView;
                        if (scrollView && this.scrollAssist) {
                            // this input is inside of a scroll view
                            // find out if text input should be manually scrolled into view
                            var ele = this.elementRef.nativeElement;
                            var scrollData = _TextInput.getScollData(ele.offsetTop, ele.offsetHeight, scrollView.getDimensions(), this.keyboardHeight, this.platform.height());
                            if (scrollData.noScroll) {
                                // the text input is in a safe position that doesn't require
                                // it to be scrolled into view, just set focus now
                                return this.setFocus();
                            }
                            // add padding to the bottom of the scroll view (if needed)
                            scrollView.addKeyboardPadding(scrollData.scrollPadding);
                            // manually scroll the text input to the top
                            // do not allow any clicks while it's scrolling
                            this.app.setEnabled(false, SCROLL_INTO_VIEW_DURATION);
                            this.app.setTransitioning(true, SCROLL_INTO_VIEW_DURATION);
                            // temporarily move the focus to the focus holder so the browser
                            // doesn't freak out while it's trying to get the input in place
                            // at this point the native text input still does not have focus
                            this.tempFocusMove();
                            // scroll the input into place
                            scrollView.scrollTo(0, scrollData.scrollTo, SCROLL_INTO_VIEW_DURATION, 6).then(function () {
                                // the scroll view is in the correct position now
                                // give the native text input focus
                                _this2.setFocus();
                                // all good, allow clicks again
                                _this2.app.setEnabled(true);
                                _this2.app.setTransitioning(false);
                            });
                        } else {
                            // not inside of a scroll view, just focus it
                            this.setFocus();
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} inputOffsetTop  TODO
                     * @param {TODO} inputOffsetHeight  TODO
                     * @param {TODO} scrollViewDimensions  TODO
                     * @param {TODO} keyboardHeight  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "deregListeners",

                    /**
                     * TODO
                     */
                    value: function deregListeners() {
                        this.deregScroll && this.deregScroll();
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: "setFocus",
                    value: function setFocus() {
                        var _this3 = this;

                        this.zone.run(function () {
                            // set focus on the input element
                            _this3.input && _this3.input.setFocus();
                            // ensure the body hasn't scrolled down
                            document.body.scrollTop = 0;
                            IonInput.setAsLastInput(_this3);
                        });
                        if (this.scrollAssist && this.scrollView) {
                            setTimeout(function () {
                                _this3.deregListeners();
                                _this3.deregScroll = _this3.scrollView.addScrollEventListener(_this3.scrollMove);
                            }, 100);
                        }
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: "tempFocusMove",
                    value: function tempFocusMove() {
                        var focusHolder = this.app.focusHolder();
                        focusHolder.setFocusHolder(this.type);
                    }
                }, {
                    key: "receivedFocus",

                    /**
                     * TODO
                     * @param {boolean} receivedFocus  TODO
                     */
                    value: function receivedFocus(_receivedFocus) {
                        if (_receivedFocus && !this.inputHasFocus) {
                            this.initFocus();
                        } else {
                            this.deregListeners();
                        }
                    }
                }, {
                    key: "inputHasFocus",
                    get: function get() {
                        return !!this.input && this.input.hasFocus;
                    }
                }, {
                    key: "inputHasValue",
                    get: function get() {
                        return !!this.input && this.input.hasValue;
                    }
                }, {
                    key: "activeTabIndex",
                    get: function get() {
                        this.input.tabIndex = this.inputHasFocus ? 1000 : -1;
                        return -1;
                    }
                }], [{
                    key: "getScollData",
                    value: function getScollData(inputOffsetTop, inputOffsetHeight, scrollViewDimensions, keyboardHeight, plaformHeight) {
                        // compute input's Y values relative to the body
                        var inputTop = inputOffsetTop + scrollViewDimensions.contentTop - scrollViewDimensions.scrollTop;
                        var inputBottom = inputTop + inputOffsetHeight;
                        // compute the safe area which is the viewable content area when the soft keyboard is up
                        var safeAreaTop = scrollViewDimensions.contentTop;
                        var safeAreaHeight = plaformHeight - keyboardHeight - safeAreaTop;
                        safeAreaHeight /= 2;
                        var safeAreaBottom = safeAreaTop + safeAreaHeight;
                        var inputTopWithinSafeArea = inputTop >= safeAreaTop && inputTop <= safeAreaBottom;
                        var inputTopAboveSafeArea = inputTop < safeAreaTop;
                        var inputTopBelowSafeArea = inputTop > safeAreaBottom;
                        var inputBottomWithinSafeArea = inputBottom >= safeAreaTop && inputBottom <= safeAreaBottom;
                        var inputBottomBelowSafeArea = inputBottom > safeAreaBottom;
                        /*
                        Text Input Scroll To Scenarios
                        ---------------------------------------
                        1) Input top within safe area, bottom within safe area
                        2) Input top within safe area, bottom below safe area, room to scroll
                        3) Input top above safe area, bottom within safe area, room to scroll
                        4) Input top below safe area, no room to scroll, input smaller than safe area
                        5) Input top within safe area, bottom below safe area, no room to scroll, input smaller than safe area
                        6) Input top within safe area, bottom below safe area, no room to scroll, input larger than safe area
                        7) Input top below safe area, no room to scroll, input larger than safe area
                        */
                        if (inputTopWithinSafeArea && inputBottomWithinSafeArea) {
                            // Input top within safe area, bottom within safe area
                            // no need to scroll to a position, it's good as-is
                            return { noScroll: true };
                        }
                        // looks like we'll have to do some auto-scrolling
                        var scrollData = {
                            scrollAmount: 0,
                            scrollTo: 0,
                            scrollPadding: 0
                        };
                        if (inputTopBelowSafeArea || inputBottomBelowSafeArea) {
                            // Input top and bottom below safe area
                            // auto scroll the input up so at least the top of it shows
                            if (safeAreaHeight > inputOffsetHeight) {
                                // safe area height is taller than the input height, so we
                                // can bring it up the input just enough to show the input bottom
                                scrollData.scrollAmount = safeAreaBottom - inputBottom;
                            } else {
                                // safe area height is smaller than the input height, so we can
                                // only scroll it up so the input top is at the top of the safe area
                                // however the input bottom will be below the safe area
                                scrollData.scrollAmount = safeAreaTop - inputTop;
                            }
                        } else if (inputTopAboveSafeArea) {
                            // Input top above safe area
                            // auto scroll the input down so at least the top of it shows
                            scrollData.scrollAmount = safeAreaTop - inputTop;
                        }
                        // figure out where it should scroll to for the best position to the input
                        scrollData.scrollTo = scrollViewDimensions.scrollTop - scrollData.scrollAmount;
                        if (scrollData.scrollAmount < 0) {
                            // when auto-scrolling up, there also needs to be enough
                            // content padding at the bottom of the scroll view
                            // manually add it if there isn't enough scrollable area
                            // figure out how many scrollable area is left to scroll up
                            var availablePadding = scrollViewDimensions.scrollHeight - scrollViewDimensions.scrollTop - scrollViewDimensions.contentHeight;
                            var paddingSpace = availablePadding + scrollData.scrollAmount;
                            if (paddingSpace < 0) {
                                // there's not enough scrollable area at the bottom, so manually add more
                                scrollData.scrollPadding = scrollViewDimensions.contentHeight - safeAreaHeight;
                            }
                        }
                        // if (!window.safeAreaEle) {
                        //   window.safeAreaEle = document.createElement('div');
                        //   window.safeAreaEle.style.position = 'absolute';
                        //   window.safeAreaEle.style.background = 'rgba(0, 128, 0, 0.3)';
                        //   window.safeAreaEle.style.padding = '10px';
                        //   window.safeAreaEle.style.textShadow = '2px 2px white';
                        //   window.safeAreaEle.style.left = '0px';
                        //   window.safeAreaEle.style.right = '0px';
                        //   window.safeAreaEle.style.pointerEvents = 'none';
                        //   document.body.appendChild(window.safeAreaEle);
                        // }
                        // window.safeAreaEle.style.top = safeAreaTop + 'px';
                        // window.safeAreaEle.style.height = safeAreaHeight + 'px';
                        // window.safeAreaEle.innerHTML = `
                        //   <div>scrollTo: ${scrollData.scrollTo}</div>
                        //   <div>scrollAmount: ${scrollData.scrollAmount}</div>
                        //   <div>scrollPadding: ${scrollData.scrollPadding}</div>
                        //   <div>scrollHeight: ${scrollViewDimensions.scrollHeight}</div>
                        //   <div>scrollTop: ${scrollViewDimensions.scrollTop}</div>
                        //   <div>contentHeight: ${scrollViewDimensions.contentHeight}</div>
                        // `;
                        return scrollData;
                    }
                }]);

                return TextInput;
            })(Ion);

            _export("TextInput", _TextInput);

            _TextInput = __decorate([IonicDirective({
                selector: 'ion-input',
                classId: 'item-input',
                properties: ['tabIndex'],
                host: {
                    '(focus)': 'receivedFocus(true)',
                    '(blur)': 'receivedFocus(false)',
                    '(touchstart)': 'pointerStart($event)',
                    '(touchend)': 'pointerEnd($event)',
                    '(mouseup)': 'pointerEnd($event)',
                    '[class.has-focus]': 'inputHasFocus',
                    '[class.has-value]': 'inputHasValue',
                    '[tabIndex]': 'activeTabIndex',
                    'class': 'item'
                }
            }), __param(5, Optional()), __param(5, Host()), __param(6, Query(TextInputElement)), __param(7, Query(Label)), __metadata('design:paramtypes', [typeof (_c = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _c || Object, typeof (_d = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _d || Object, typeof (_e = typeof IonicApp !== 'undefined' && IonicApp) === 'function' && _e || Object, typeof (_f = typeof NgZone !== 'undefined' && NgZone) === 'function' && _f || Object, typeof (_g = typeof IonicPlatform !== 'undefined' && IonicPlatform) === 'function' && _g || Object, typeof (_h = typeof Content !== 'undefined' && Content) === 'function' && _h || Object, typeof (_j = typeof QueryList !== 'undefined' && QueryList) === 'function' && _j || Object, typeof (_k = typeof QueryList !== 'undefined' && QueryList) === 'function' && _k || Object])], _TextInput);
            SCROLL_INTO_VIEW_DURATION = 400;
        }
    };
});