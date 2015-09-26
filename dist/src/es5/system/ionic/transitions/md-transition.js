System.register('ionic/transitions/md-transition', ['./transition', '../animations/animation'], function (_export) {
    'use strict';

    var Transition, Animation, DURATION, EASING, TRANSLATEY, OFF_BOTTOM, CENTER, MaterialTransition;

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
            DURATION = 300;
            EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
            TRANSLATEY = 'translateY';
            OFF_BOTTOM = '40px';
            CENTER = '0px';

            MaterialTransition = (function (_Transition) {
                _inherits(MaterialTransition, _Transition);

                function MaterialTransition(nav, opts) {
                    _classCallCheck(this, MaterialTransition);

                    _get(Object.getPrototypeOf(MaterialTransition.prototype), 'constructor', this).call(this, nav, opts);
                    // global duration and easing for all child animations
                    this.duration(DURATION);
                    this.easing(EASING);
                    // entering item moves in bottom to center
                    this.enteringView.to(TRANSLATEY, CENTER).before.setStyles({ zIndex: this.entering.index });
                    // entering item moves in bottom to center
                    this.enteringNavbar.to(TRANSLATEY, CENTER).before.setStyles({ zIndex: this.entering.index + 10 });
                    // leaving view stays put
                    this.leavingView.before.setStyles({ zIndex: this.leaving.index });
                    this.leavingNavbar.before.setStyles({ zIndex: this.leaving.index + 10 });
                    // set properties depending on direction
                    if (opts.direction === 'back') {
                        // back direction
                        this.enteringView.from(TRANSLATEY, CENTER);
                        this.enteringNavbar.from(TRANSLATEY, CENTER);
                        // leaving view goes center to bottom
                        this.leavingView.fromTo(TRANSLATEY, CENTER, OFF_BOTTOM).fadeOut();
                        this.leavingNavbar.fromTo(TRANSLATEY, CENTER, OFF_BOTTOM).fadeOut();
                    } else {
                        // forward direction
                        this.enteringView.from(TRANSLATEY, OFF_BOTTOM).fadeIn();
                        this.enteringNavbar.from(TRANSLATEY, OFF_BOTTOM).fadeIn();
                    }
                    var itemLength = nav.length();
                    if (nav.tabs && (itemLength === 1 || itemLength === 2)) {
                        var tabBarEle = nav.tabs.elementRef.nativeElement.querySelector('.tab-bar-container');
                        var tabBar = new Animation(tabBarEle);
                        if (itemLength === 1 && opts.direction == 'back') {
                            tabBar.fromTo('height', '0px', '69px');
                            tabBar.fadeIn();
                        } else if (itemLength === 2 && opts.direction == 'forward') {
                            tabBar.fromTo('height', '69px', '0px');
                            tabBar.fadeOut();
                        }
                        this.add(tabBar);
                    }
                }

                return MaterialTransition;
            })(Transition);

            Transition.register('md', MaterialTransition);
        }
    };
});