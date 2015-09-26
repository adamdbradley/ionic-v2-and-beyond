System.register("ionic/native/device-orientation/device-orientation", ["rx", "ionic/util", "../plugin"], function (_export) {
    "use strict";

    var Rx, util, NativePlugin, __decorate, __metadata, _DeviceOrientation;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_rx) {
            Rx = _rx;
        }, function (_ionicUtil) {
            util = _ionicUtil;
        }, function (_plugin) {
            NativePlugin = _plugin.NativePlugin;
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

            _DeviceOrientation = (function () {
                function DeviceOrientation() {
                    _classCallCheck(this, DeviceOrientation);
                }

                _createClass(DeviceOrientation, null, [{
                    key: "_wrap",
                    value: function _wrap(result) {
                        return util.extend({
                            alpha: result.magneticHeading,
                            magneticHeading: result.webkitCompassHeading || result.alpha
                        }, result);
                    }
                }, {
                    key: "getCurrentHeading",
                    value: function getCurrentHeading() {
                        var _this = this;

                        return new Promise(function (resolve, reject) {
                            if (window.DeviceOrientationEvent) {
                                var fnCb = function fnCb(eventData) {
                                    resolve(_DeviceOrientation._wrap(eventData));
                                    window.removeEventListener('deviceorientation', fnCb);
                                };
                                window.addEventListener('deviceorientation', fnCb);
                            } else if (navigator.compass) {
                                navigator.compass.getCurrentHeading(function (result) {
                                    resolve(_DeviceOrientation._wrap(result));
                                }, function (err) {
                                    reject(err);
                                });
                            } else {
                                _this.pluginWarn();
                                reject('The Device does not support device orientation events.');
                                return;
                            }
                        });
                    }
                }, {
                    key: "watchHeading",
                    value: function watchHeading(options) {
                        if (window.DeviceOrientationEvent) {
                            var watchID = undefined;
                            var source = Rx.Observable.create(function (observer) {
                                var fnCb = function fnCb(eventData) {
                                    observer.onNext(_DeviceOrientation._wrap(eventData));
                                };
                                window.addEventListener('deviceorientation', fnCb);
                            });
                            return {
                                source: source,
                                watchID: watchID,
                                clear: function clear() {
                                    window.removeEventListener('deviceorientation', fnCb);
                                }
                            };
                        } else if (navigator.accelerometer) {
                            var _ret = (function () {
                                var watchID = undefined;
                                var source = Rx.Observable.create(function (observer) {
                                    watchID = navigator.compass.watchHeading(function (result) {
                                        observer.onNext(_DeviceOrientation._wrap(result));
                                    }, function (err) {
                                        observer.onError(err, observer);
                                    }, options);
                                });
                                return {
                                    v: {
                                        source: source,
                                        watchID: watchID,
                                        clear: function clear() {
                                            navigator.compass.clearWatch(watchID);
                                        }
                                    }
                                };
                            })();

                            if (typeof _ret === "object") return _ret.v;
                        }
                    }
                }]);

                return DeviceOrientation;
            })();

            _export("DeviceOrientation", _DeviceOrientation);

            _DeviceOrientation = __decorate([NativePlugin({
                name: 'Device Orientation',
                platforms: {
                    cordova: 'cordova-plugin-device-orientation'
                }
            }), __metadata('design:paramtypes', [])], _DeviceOrientation);
        }
    };
});