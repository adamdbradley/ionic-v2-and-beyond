System.register('ionic/transitions/ios-transition', ['./transition', '../animations/animation'], function (_export) {
    'use strict';

    var Transition, Animation, DURATION, EASING, OPACITY, TRANSLATEX, OFF_LEFT, CENTER, OFF_OPACITY, IOSTransition;

    var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

    return {
        setters: [function (_transition) {
            Transition = _transition.Transition;
        }, function (_animationsAnimation) {
            Animation = _animationsAnimation.Animation;
        }],
        execute: function () {
            DURATION = 550;
            EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
            OPACITY = 'opacity';
            TRANSLATEX = 'translateX';
            OFF_LEFT = '-33%';
            CENTER = '0%';
            OFF_OPACITY = 0.8;

            IOSTransition = (function (_Transition) {
                _inherits(IOSTransition, _Transition);

                function IOSTransition(nav, opts) {
                    _classCallCheck(this, IOSTransition);

                    _get(Object.getPrototypeOf(IOSTransition.prototype), 'constructor', this).call(this, nav, opts);
                    // global duration and easing for all child animations
                    this.duration(DURATION);
                    this.easing(EASING);
                    // entering item moves to center
                    this.enteringView.to(TRANSLATEX, CENTER).to(OPACITY, 1).before.setStyles({ zIndex: this.entering.index });
                    this.enteringTitle.fadeIn().to(TRANSLATEX, CENTER);
                    this.enteringNavbarBackground.to(TRANSLATEX, CENTER);
                    // leaving view moves off screen
                    this.leavingView.from(TRANSLATEX, CENTER).from(OPACITY, 1).before.setStyles({ zIndex: this.leaving.index });
                    this.leavingTitle.from(TRANSLATEX, CENTER).from(OPACITY, 1);
                    this.leavingNavbarBackground.from(TRANSLATEX, CENTER);
                    // set properties depending on direction
                    if (opts.direction === 'back') {
                        // back direction
                        this.enteringView.from(TRANSLATEX, OFF_LEFT).from(OPACITY, OFF_OPACITY).to(OPACITY, 1);
                        this.enteringTitle.from(TRANSLATEX, OFF_LEFT);
                        this.enteringNavbarBackground.from(TRANSLATEX, OFF_LEFT);
                        this.leavingView.to(TRANSLATEX, '100%').to(OPACITY, 1);
                        this.leavingTitle.to(TRANSLATEX, '100%').to(OPACITY, 0);
                        this.leavingNavbarBackground.to(TRANSLATEX, '100%');
                        if (this.leaving.enableBack() && this.viewWidth() > 200) {
                            var leavingBackButtonText = new Animation(this.leaving.backBtnTextRef());
                            leavingBackButtonText.fromTo(TRANSLATEX, CENTER, this.viewWidth() / 2 + 'px');
                            this.leavingNavbar.add(leavingBackButtonText);
                        }
                    } else {
                        // forward direction
                        this.enteringView.from(TRANSLATEX, '99.5%').from(OPACITY, 1);
                        this.enteringTitle.from(TRANSLATEX, '99.5%');
                        this.enteringNavbarBackground.from(TRANSLATEX, '99.5%');
                        this.leavingView.to(TRANSLATEX, OFF_LEFT).to(OPACITY, OFF_OPACITY);
                        this.leavingTitle.to(TRANSLATEX, OFF_LEFT).to(OPACITY, 0);
                        this.leavingNavbarBackground.to(TRANSLATEX, OFF_LEFT);
                        if (this.entering.enableBack() && this.viewWidth() > 200) {
                            var enteringBackButtonText = new Animation(this.entering.backBtnTextRef());
                            enteringBackButtonText.fromTo(TRANSLATEX, this.viewWidth() / 2 + 'px', CENTER);
                            this.enteringNavbar.add(enteringBackButtonText);
                        }
                    }
                }

                return IOSTransition;
            })(Transition);

            Transition.register('ios', IOSTransition);
        }
    };
});