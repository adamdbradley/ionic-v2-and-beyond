System.register("e2e/app/sink/pages/animation", ["ionic/ionic", "../sink-page"], function (_export) {
    "use strict";

    var IonicView, Animation, IonicApp, SinkPage, __decorate, __metadata, opacity, rotateZ, translateX, scale, AnimationPage;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_ionicIonic) {
            IonicView = _ionicIonic.IonicView;
            Animation = _ionicIonic.Animation;
            IonicApp = _ionicIonic.IonicApp;
        }, function (_sinkPage) {
            SinkPage = _sinkPage.SinkPage;
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

            opacity = 0.2;
            rotateZ = '180deg';
            translateX = '100px';
            scale = 0.6;

            AnimationPage = (function (_SinkPage) {
                _inherits(AnimationPage, _SinkPage);

                function AnimationPage(app) {
                    _classCallCheck(this, AnimationPage);

                    _get(Object.getPrototypeOf(AnimationPage.prototype), "constructor", this).call(this, app);
                    this.animation = new Animation();
                    this.animation.duration(2000).easing('spring', { damping: 6, elasticity: 10 });
                    var ball = new Animation(document.querySelector('.ball'));
                    ball.from('translateX', '0px').to('translateX', '250px');
                    this.animation.add(ball);
                    var row1 = new Animation(document.querySelectorAll('.square'));
                    row1.from('opacity', 0.8).to('opacity', 0.2);
                    this.animation.add(row1);
                    var row2 = new Animation(document.querySelectorAll('.square2'));
                    row2.from('rotate', '0deg').from('scale', '1').to('rotate', '90deg').to('scale', '0.5').before.addClass('added-before-play').after.addClass('added-after-finish');
                    this.animation.add(row1, row2);
                    this.animation.onReady(function (animation) {
                        console.log('onReady', animation);
                    });
                    this.animation.onPlay(function (animation) {
                        console.log('onPlay', animation);
                    });
                    this.animation.onFinish(function (animation) {
                        console.log('onFinish', animation);
                    });
                }

                _createClass(AnimationPage, [{
                    key: "play",
                    value: function play() {
                        this.animation.play();
                    }
                }, {
                    key: "pause",
                    value: function pause() {
                        this.animation.pause();
                    }
                }, {
                    key: "progress",
                    value: function progress(ev) {
                        this.animation.progress(parseFloat(ev.srcElement.value));
                    }
                }]);

                return AnimationPage;
            })(SinkPage);

            _export("AnimationPage", AnimationPage);

            _export("AnimationPage", AnimationPage = __decorate([IonicView({
                template: "\n  <ion-navbar *navbar><ion-nav-items primary><button icon (^click)=\"toggleMenu()\"><i class=\"icon ion-navicon\"></i></button></ion-nav-items><ion-title>Animation</ion-title></ion-navbar>\n\n  <style>\n    .ball-container {\n      position: absolute;\n      top: 300px;\n      left: 20px;\n      border: 1px solid gray;\n      width: 300px;\n      height: 51px;\n    }\n    .ball {\n      position: absolute;\n      width: 50px;\n      height: 50px;\n      background: blue;\n    }\n  </style>\n\n  <ion-content class=\"padding\">\n    <h2>Animation</h2>\n    <p>\n      Ionic comes with a powerful Animation library based on the emerging Web Animation API. Trigger\n      animations based on user actions, step (or \"scrub\") through during a drag gesture, or add\n      realistic physics effects to your app. The Animation API is a major improvement over CSS animations.\n    </p>\n    <p>\n      <button (click)=\"play($event)\">Play</button>\n      <button (click)=\"pause($event)\">Pause</button>\n    </p>\n    <div class=\"ball-container\">\n      <div class=\"ball\"></div>\n    </div>\n\n    <div style=\"position: absolute; top: 400px; left: 20px;\">\n\n      <div class=\"red square\" style=\"position:absolute; width:100px; height:100px; background:red; top: 0; left: 0;\"></div>\n      <div class=\"green square\" style=\"position:absolute; width:100px; height:100px; background:green; top: 0; left: 100px;\"></div>\n      <div class=\"blue square\" style=\"position:absolute; width:100px; height:100px; background:blue; top: 0; left: 200px;\"></div>\n\n    </div>\n\n    <div style=\"position: absolute; top: 500px; left: 20px;\">\n\n      <div class=\"yellow square2\" style=\"position:absolute; width:100px; height:100px; background:yellow; top: 0; left: 0;\"></div>\n      <div class=\"purple square2\" style=\"position:absolute; width:100px; height:100px; background:purple; top: 0; left: 100px;\"></div>\n      <div class=\"maroon square2\" style=\"position:absolute; width:100px; height:100px; background:maroon; top: 0; left: 200px;\"></div>\n\n    </div>\n\n    <p>\n      <input type=\"range\" (input)=\"progress($event)\" value=\"0\" min=\"0\" step=\"0.001\" max=\"1\" style=\"width:200px; margin-left: 100px\">\n    </p>\n\n  </ion-content>\n  "
            }), __metadata('design:paramtypes', [typeof IonicApp !== 'undefined' && IonicApp || Object])], AnimationPage));
        }
    };
});