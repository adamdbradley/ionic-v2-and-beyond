System.register("ionic/native/geolocation/geolocation", ["rx", "../plugin"], function (_export) {
    "use strict";

    var Rx, NativePlugin, __decorate, __metadata, Geolocation;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_rx) {
            Rx = _rx;
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

            Geolocation = (function () {
                function Geolocation() {
                    _classCallCheck(this, Geolocation);
                }

                _createClass(Geolocation, null, [{
                    key: "getCurrentPosition",
                    value: function getCurrentPosition(options) {
                        return new Promise(function (resolve, reject) {
                            navigator.geolocation.getCurrentPosition(function (result) {
                                resolve(result);
                            }, function (err) {
                                reject(err);
                            }, options);
                        });
                    }
                }, {
                    key: "watchPosition",
                    value: function watchPosition(options) {
                        var watchID = undefined;
                        var source = Rx.Observable.create(function (observer) {
                            watchID = navigator.geolocation.watchPosition(function (result) {
                                observer.onNext(result);
                            }, function (err) {
                                observer.onError(err, observer);
                            }, options);
                        });
                        return {
                            source: source,
                            watchID: watchID,
                            clear: function clear() {
                                navigator.geolocation.clearWatch(watchID);
                            }
                        };
                    }
                }, {
                    key: "clearWatch",
                    value: function clearWatch(watchID) {
                        return navigator.geolocation.clearWatch(watchID);
                    }
                }]);

                return Geolocation;
            })();

            _export("Geolocation", Geolocation);

            _export("Geolocation", Geolocation = __decorate([NativePlugin({
                name: 'Geolocation',
                platforms: {
                    cordova: 'cordova-plugin-geolocation'
                }
            }), __metadata('design:paramtypes', [])], Geolocation));
        }
    };
});