System.register("e2e/app/tap/index", ["ionic/ionic"], function (_export) {
    "use strict";

    var App, __decorate, __metadata, E2EApp, msgs, index, timeId, winConsoleError;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function onEvent(ev) {
        var c = pointerCoord(ev);
        var l = '(' + c.x + ',' + c.y + ')';
        if (ev.isIonicTap) {
            l += ' isIonicTap';
        }
        console.debug(ev.type, l);
    }
    function pointerCoord(ev) {
        // get coordinates for either a mouse click
        // or a touch depending on the given event
        var c = { x: 0, y: 0 };
        if (ev) {
            var touches = ev.touches && ev.touches.length ? ev.touches : [ev];
            var e = ev.changedTouches && ev.changedTouches[0] || touches[0];
            if (e) {
                c.x = e.clientX || e.pageX || 0;
                c.y = e.clientY || e.pageY || 0;
            }
        }
        return c;
    }

    function getTime() {
        var d = new Date();
        return d.getSeconds() + '.' + d.getMilliseconds();
    }
    return {
        setters: [function (_ionicIonic) {
            App = _ionicIonic.App;
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

            E2EApp = function E2EApp() {
                _classCallCheck(this, E2EApp);
            };

            E2EApp = __decorate([App({
                templateUrl: 'main.html'
            }), __metadata('design:paramtypes', [])], E2EApp);document.addEventListener('touchstart', onEvent);
            document.addEventListener('touchcancel', onEvent);
            document.addEventListener('touchend', onEvent);
            document.addEventListener('mousedown', onEvent);
            document.addEventListener('mouseup', onEvent);
            document.addEventListener('click', onEvent);
            msgs = [];
            index = 0;
            winConsoleError = console.error;

            console.error = function () {
                winConsoleError.apply(this, arguments);
                var args = ['ERROR!'];
                for (var i = 0, j = arguments.length; i < j; i++) {
                    args.push(arguments[i]);
                }
                console.debug.apply(this, args);
            };
            console.debug = function () {
                index++;
                var msg = [];
                msg.push(index);
                for (var i = 0, j = arguments.length; i < j; i++) {
                    msg.push(arguments[i]);
                }
                msg.push(getTime());
                msg = msg.join(', ');
                if (arguments[0] === 'ERROR!') msg = '<span style="color:red;font-weight:bold">' + msg + '</span>';
                if (arguments[0] === 'touchstart') msg = '<span style="color:blue">' + msg + '</span>';
                if (arguments[0] === 'touchend') msg = '<span style="color:darkblue">' + msg + '</span>';
                if (arguments[0] === 'mousedown') msg = '<span style="color:red">' + msg + '</span>';
                if (arguments[0] === 'mouseup') msg = '<span style="color:maroon">' + msg + '</span>';
                if (arguments[0] === 'click') msg = '<span style="color:purple">' + msg + '</span>';
                msgs.unshift(msg);
                if (msgs.length > 25) {
                    msgs.splice(25);
                }
                // do this so we try not to interfere with the device performance
                clearTimeout(timeId);
                timeId = setTimeout(function () {
                    document.getElementById('logs').innerHTML = msgs.join('<br>');
                }, 100);
            };
        }
    };
});