System.register("ionic/components/content/content", ["angular2/angular2", "../ion", "../../config/config", "../../platform/platform", "../../animations/scroll-to"], function (_export) {
    /**
     * @name ionContent
     * @description
     * The ionContent component provides an easy to use content area that can be configured to use Ionic's custom Scroll View, or the built in overflow scrolling of the browser.
     *
     * While we recommend using the custom Scroll features in Ionic in most cases, sometimes (for performance reasons) only the browser's native overflow scrolling will suffice, and so we've made it easy to toggle between the Ionic scroll implementation and overflow scrolling.
     *
     * You can implement pull-to-refresh with the ionRefresher component.
     *
     * @usage
     * ```html
     * <ion-content>
     *   Add your content here!
     * </ion-content>
     * ```
     *
     */
    "use strict";

    var Component, View, ElementRef, Ion, IonicConfig, IonicPlatform, ScrollTo, __decorate, __metadata, Content, _a, _b, _c;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_angular2Angular2) {
            Component = _angular2Angular2.Component;
            View = _angular2Angular2.View;
            ElementRef = _angular2Angular2.ElementRef;
        }, function (_ion) {
            Ion = _ion.Ion;
        }, function (_configConfig) {
            IonicConfig = _configConfig.IonicConfig;
        }, function (_platformPlatform) {
            IonicPlatform = _platformPlatform.IonicPlatform;
        }, function (_animationsScrollTo) {
            ScrollTo = _animationsScrollTo.ScrollTo;
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

            Content = (function (_Ion) {
                _inherits(Content, _Ion);

                /**
                 * @param {ElementRef} elementRef  A reference to the component's DOM element.
                 * @param {IonicConfig} config  The config object to change content's default settings.
                 */

                function Content(elementRef, config, platform) {
                    _classCallCheck(this, Content);

                    _get(Object.getPrototypeOf(Content.prototype), "constructor", this).call(this, elementRef, config);
                    this.scrollPadding = 0;
                    this.platform = platform;
                }

                /**
                 * TODO
                 * @private
                 */

                _createClass(Content, [{
                    key: "onInit",
                    value: function onInit() {
                        _get(Object.getPrototypeOf(Content.prototype), "onInit", this).call(this);
                        this.scrollElement = this.getNativeElement().children[0];
                    }

                    /**
                     * Adds the specified scroll handler to the content' scroll element.
                     * @param {Function} handler  The scroll event handler.
                     * @returns {Function} A function that removes the scroll handler.
                     */
                }, {
                    key: "addScrollEventListener",
                    value: function addScrollEventListener(handler) {
                        var _this = this;

                        if (!this.scrollElement) {
                            return;
                        }
                        // ensure we're not creating duplicates
                        this.scrollElement.removeEventListener('scroll', handler);
                        this.scrollElement.addEventListener('scroll', handler);
                        return function () {
                            _this.scrollElement.removeEventListener('scroll', handler);
                        };
                    }

                    /**
                     * Adds the specified touchmove handler to the content's scroll element.
                     * @param {Function} handler  The touchmove handler.
                     * @returns {Function} A function that removes the touchmove handler.
                     */
                }, {
                    key: "addTouchMoveListener",
                    value: function addTouchMoveListener(handler) {
                        var _this2 = this;

                        if (!this.scrollElement) {
                            return;
                        }
                        // ensure we're not creating duplicates
                        this.scrollElement.removeEventListener('touchmove', handler);
                        this.scrollElement.addEventListener('touchmove', handler);
                        return function () {
                            _this2.scrollElement.removeEventListener('touchmove', handler);
                        };
                    }

                    /**
                     * Scroll to the specified position.
                     * @param {TODO} x  The x-value to scroll to.
                     * @param {TODO} y  The y-value to scroll to.
                     * @param {Number} duration  Duration of the scroll animation.
                     * @param {TODO} tolerance  TODO
                     * @returns {TODO} TODO
                     */
                }, {
                    key: "scrollTo",
                    value: function scrollTo(x, y, duration, tolerance) {
                        if (this._scrollTo) {
                            this._scrollTo.dispose();
                        }
                        this._scrollTo = new ScrollTo(this.scrollElement);
                        return this._scrollTo.start(x, y, duration, tolerance);
                    }

                    /**
                     * Returns the content and scroll elements' dimensions.
                     * @returns {Object} dimensions  The content and scroll elements' dimensions
                     * {Number} dimensions.contentHeight  content offsetHeight
                     * {Number} dimensions.contentTop  content offsetTop
                     * {Number} dimensions.contentBottom  content offsetTop+offsetHeight
                     * {Number} dimensions.contentWidth  content offsetWidth
                     * {Number} dimensions.contentLeft  content offsetLeft
                     * {Number} dimensions.contentRight  content offsetLeft + offsetWidth
                     * {Number} dimensions.scrollHeight  scroll scrollHeight
                     * {Number} dimensions.scrollTop  scroll scrollTop
                     * {Number} dimensions.scrollBottom  scroll scrollTop + scrollHeight
                     * {Number} dimensions.scrollWidth  scroll scrollWidth
                     * {Number} dimensions.scrollLeft  scroll scrollLeft
                     * {Number} dimensions.scrollRight  scroll scrollLeft + scrollWidth
                     * TODO: figure out how to get this to work
                     */
                }, {
                    key: "getDimensions",
                    value: function getDimensions() {
                        var scrollElement = this.scrollElement;
                        var parentElement = scrollElement.parentElement;
                        return {
                            contentHeight: parentElement.offsetHeight,
                            contentTop: parentElement.offsetTop,
                            contentBottom: parentElement.offsetTop + parentElement.offsetHeight,
                            contentWidth: parentElement.offsetWidth,
                            contentLeft: parentElement.offsetLeft,
                            contentRight: parentElement.offsetLeft + parentElement.offsetWidth,
                            scrollHeight: scrollElement.scrollHeight,
                            scrollTop: scrollElement.scrollTop,
                            scrollBottom: scrollElement.scrollTop + scrollElement.scrollHeight,
                            scrollWidth: scrollElement.scrollWidth,
                            scrollLeft: scrollElement.scrollLeft,
                            scrollRight: scrollElement.scrollLeft + scrollElement.scrollWidth
                        };
                    }

                    /**
                     * @private
                     * Adds padding to the bottom of the scroll element when the keyboard is open
                     * so content below the keyboard can be scrolled into view.
                     */
                }, {
                    key: "addKeyboardPadding",
                    value: function addKeyboardPadding(addPadding) {
                        var _this3 = this;

                        if (addPadding > this.scrollPadding) {
                            this.scrollPadding = addPadding;
                            this.scrollElement.style.paddingBottom = addPadding + 'px';
                            if (!this.keyboardPromise) {
                                this.keyboardPromise = this.platform.onKeyboardClose(function () {
                                    if (_this3) {
                                        _this3.scrollPadding = 0;
                                        if (_this3.scrollElement) _this3.scrollElement.style.paddingBottom = '';
                                        _this3.keyboardPromise = null;
                                    }
                                });
                            }
                        }
                    }
                }]);

                return Content;
            })(Ion);

            _export("Content", Content);

            _export("Content", Content = __decorate([Component({
                selector: 'ion-content',
                properties: ['parallax']
            }), View({
                template: '<scroll-content><ng-content></ng-content></scroll-content>'
            }), __metadata('design:paramtypes', [typeof (_a = typeof ElementRef !== 'undefined' && ElementRef) === 'function' && _a || Object, typeof (_b = typeof IonicConfig !== 'undefined' && IonicConfig) === 'function' && _b || Object, typeof (_c = typeof IonicPlatform !== 'undefined' && IonicPlatform) === 'function' && _c || Object])], Content));
        }
    };
});