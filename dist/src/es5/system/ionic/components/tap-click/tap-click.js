System.register('ionic/components/tap-click/tap-click', ['../../util/dom', './activator', './ripple'], function (_export) {
    'use strict';

    var pointerCoord, hasPointerMoved, Activator, RippleActivator, TapClick;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_utilDom) {
            pointerCoord = _utilDom.pointerCoord;
            hasPointerMoved = _utilDom.hasPointerMoved;
        }, function (_activator) {
            Activator = _activator.Activator;
        }, function (_ripple) {
            RippleActivator = _ripple.RippleActivator;
        }],
        execute: function () {
            TapClick = (function () {
                function TapClick(app, config, window, document) {
                    _classCallCheck(this, TapClick);

                    var self = this;
                    self.app = app;
                    self.config = config;
                    self.win = window;
                    self.doc = document;
                    self.pointerTolerance = 4;
                    self.lastTouch = 0;
                    self.disableClick = 0;
                    self.disableClickLimit = 2500;
                    self.tapPolyfill = config.setting('tapPolyfill') !== false;
                    if (config.setting('mdRipple')) {
                        self.activator = new RippleActivator(app, config);
                    } else {
                        self.activator = new Activator(app, config);
                    }
                    function bindDom(type, listener, useCapture) {
                        document.addEventListener(type, listener, useCapture);
                    }
                    bindDom('click', function (ev) {
                        self.click(ev);
                    }, true);
                    bindDom('touchstart', function (ev) {
                        self.lastTouch = Date.now();
                        self.pointerStart(ev);
                    });
                    bindDom('touchend', function (ev) {
                        self.lastTouch = Date.now();
                        self.touchEnd(ev);
                    });
                    bindDom('touchcancel', function (ev) {
                        self.lastTouch = Date.now();
                        self.pointerCancel(ev);
                    });
                    bindDom('mousedown', function (ev) {
                        self.mouseDown(ev);
                    }, true);
                    bindDom('mouseup', function (ev) {
                        self.mouseUp(ev);
                    }, true);
                    self.pointerMove = function (ev) {
                        var moveCoord = pointerCoord(ev);
                        if (hasPointerMoved(10, self.start, moveCoord)) {
                            self.pointerCancel(ev);
                        }
                    };
                    self.moveListeners = function (shouldAdd) {
                        document.removeEventListener('touchmove', self.pointerMove);
                        document.removeEventListener('mousemove', self.pointerMove);
                        if (shouldAdd) {
                            bindDom('touchmove', self.pointerMove);
                            bindDom('mousemove', self.pointerMove);
                        }
                    };
                }

                /**
                 * TODO
                 * @param {TODO} ev  TODO
                 */

                _createClass(TapClick, [{
                    key: 'touchEnd',
                    value: function touchEnd(ev) {
                        var self = this;
                        if (self.tapPolyfill && self.start && self.app.isEnabled()) {
                            var endCoord = pointerCoord(ev);
                            if (!hasPointerMoved(self.pointerTolerance, self.start, endCoord)) {
                                console.debug('create click');
                                self.disableClick = Date.now();
                                var clickEvent = self.doc.createEvent('MouseEvents');
                                clickEvent.initMouseEvent('click', true, true, self.win, 1, 0, 0, endCoord.x, endCoord.y, false, false, false, false, 0, null);
                                clickEvent.isIonicTap = true;
                                ev.target.dispatchEvent(clickEvent);
                            }
                        }
                        self.pointerEnd(ev);
                    }

                    /**
                     * TODO
                     * @param {TODO} ev  TODO
                     */
                }, {
                    key: 'mouseDown',
                    value: function mouseDown(ev) {
                        if (this.isDisabledClick()) {
                            console.debug('mouseDown prevent');
                            ev.preventDefault();
                            ev.stopPropagation();
                        } else if (this.lastTouch + 999 < Date.now()) {
                            this.pointerStart(ev);
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} ev  TODO
                     */
                }, {
                    key: 'mouseUp',
                    value: function mouseUp(ev) {
                        if (this.isDisabledClick()) {
                            console.debug('mouseUp prevent');
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                        if (this.lastTouch + 999 < Date.now()) {
                            this.pointerEnd(ev);
                        }
                    }

                    /**
                     * TODO
                     * @param {TODO} ev  TODO
                     */
                }, {
                    key: 'pointerStart',
                    value: function pointerStart(ev) {
                        var targetEle = this.getActivatableTarget(ev.target);
                        if (targetEle) {
                            this.start = pointerCoord(ev);
                            this.activator.downAction(targetEle, this.start.x, this.start.y);
                            this.moveListeners(true);
                        } else {
                            this.start = null;
                        }
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: 'pointerEnd',
                    value: function pointerEnd(ev) {
                        this.activator.upAction();
                        this.moveListeners(false);
                    }

                    /**
                     * TODO
                     */
                }, {
                    key: 'pointerCancel',
                    value: function pointerCancel(ev) {
                        console.debug('pointerCancel');
                        this.activator.clearState();
                        this.moveListeners(false);
                        this.disableClick = Date.now();
                    }
                }, {
                    key: 'isDisabledClick',
                    value: function isDisabledClick() {
                        return this.disableClick + this.disableClickLimit > Date.now();
                    }

                    /**
                     * Whether the supplied click event should be allowed or not.
                     * @param {MouseEvent} ev  The click event.
                     * @return {boolean} True if click event should be allowed, otherwise false.
                     */
                }, {
                    key: 'allowClick',
                    value: function allowClick(ev) {
                        if (!this.app.isEnabled()) {
                            return false;
                        }
                        if (!ev.isIonicTap) {
                            if (this.isDisabledClick()) {
                                return false;
                            }
                        }
                        return true;
                    }

                    /**
                     * TODO
                     * @param {MouseEvent} ev  TODO
                     */
                }, {
                    key: 'click',
                    value: function click(ev) {
                        if (!this.allowClick(ev)) {
                            console.debug('click prevent');
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                    }
                }, {
                    key: 'getActivatableTarget',
                    value: function getActivatableTarget(ele) {
                        var targetEle = ele;
                        for (var x = 0; x < 4; x++) {
                            if (!targetEle) break;
                            if (this.isActivatable(targetEle)) return targetEle;
                            targetEle = targetEle.parentElement;
                        }
                        return null;
                    }
                }, {
                    key: 'isActivatable',
                    value: function isActivatable(ele) {
                        if (/^(A|BUTTON)$/.test(ele.tagName)) {
                            return true;
                        }
                        var attributes = ele.attributes;
                        for (var i = 0, l = attributes.length; i < l; i++) {
                            if (/click|tappable/.test(attributes[i].name)) {
                                return true;
                            }
                        }
                        return false;
                    }
                }]);

                return TapClick;
            })();

            _export('TapClick', TapClick);
        }
    };
});