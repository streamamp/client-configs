!function(t) {
    var e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n),
        i.l = !0,
        i.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var r = Object.create(null);
        if (n.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                n.d(r, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return r
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 26)
}([function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
}
, function(t, e, n) {
    t.exports = n(27)
}
, function(t, e) {
    t.exports = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
}
, function(t, e) {
    function n(t, e, n, r, i, s, o) {
        try {
            var a = t[s](o)
              , u = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(u) : Promise.resolve(u).then(r, i)
    }
    t.exports = function(t) {
        return function() {
            var e = this
              , r = arguments;
            return new Promise((function(i, s) {
                var o = t.apply(e, r);
                function a(t) {
                    n(o, i, s, a, u, "next", t)
                }
                function u(t) {
                    n(o, i, s, a, u, "throw", t)
                }
                a(void 0)
            }
            ))
        }
    }
}
, function(t, e) {
    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    t.exports = function(t, e, r) {
        return e && n(t.prototype, e),
        r && n(t, r),
        t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(17)
      , i = Object.prototype.toString;
    function s(t) {
        return "[object Array]" === i.call(t)
    }
    function o(t) {
        return void 0 === t
    }
    function a(t) {
        return null !== t && "object" == typeof t
    }
    function u(t) {
        return "[object Function]" === i.call(t)
    }
    function c(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]),
            s(t))
                for (var n = 0, r = t.length; n < r; n++)
                    e.call(null, t[n], n, t);
            else
                for (var i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
    }
    t.exports = {
        isArray: s,
        isArrayBuffer: function(t) {
            return "[object ArrayBuffer]" === i.call(t)
        },
        isBuffer: function(t) {
            return null !== t && !o(t) && null !== t.constructor && !o(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function(t) {
            return "undefined" != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function(t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function(t) {
            return "string" == typeof t
        },
        isNumber: function(t) {
            return "number" == typeof t
        },
        isObject: a,
        isUndefined: o,
        isDate: function(t) {
            return "[object Date]" === i.call(t)
        },
        isFile: function(t) {
            return "[object File]" === i.call(t)
        },
        isBlob: function(t) {
            return "[object Blob]" === i.call(t)
        },
        isFunction: u,
        isStream: function(t) {
            return a(t) && u(t.pipe)
        },
        isURLSearchParams: function(t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: c,
        merge: function t() {
            var e = {};
            function n(n, r) {
                "object" == typeof e[r] && "object" == typeof n ? e[r] = t(e[r], n) : e[r] = n
            }
            for (var r = 0, i = arguments.length; r < i; r++)
                c(arguments[r], n);
            return e
        },
        deepMerge: function t() {
            var e = {};
            function n(n, r) {
                "object" == typeof e[r] && "object" == typeof n ? e[r] = t(e[r], n) : e[r] = "object" == typeof n ? t({}, n) : n
            }
            for (var r = 0, i = arguments.length; r < i; r++)
                c(arguments[r], n);
            return e
        },
        extend: function(t, e, n) {
            return c(e, (function(e, i) {
                t[i] = n && "function" == typeof e ? r(e, n) : e
            }
            )),
            t
        },
        trim: function(t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}
, function(t, e) {
    function n(e) {
        return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        n(e)
    }
    t.exports = n
}
, function(t, e, n) {
    var r = n(42)
      , i = n(43);
    t.exports = function(t, e) {
        return !e || "object" !== r(e) && "function" != typeof e ? i(t) : e
    }
}
, function(t, e, n) {
    var r = n(13);
    t.exports = function(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && r(t, e)
    }
}
, function(t, e, n) {
    var r = n(6)
      , i = n(13)
      , s = n(44)
      , o = n(45);
    function a(e) {
        var n = "function" == typeof Map ? new Map : void 0;
        return t.exports = a = function(t) {
            if (null === t || !s(t))
                return t;
            if ("function" != typeof t)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(t))
                    return n.get(t);
                n.set(t, e)
            }
            function e() {
                return o(t, arguments, r(this).constructor)
            }
            return e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            i(e, t)
        }
        ,
        a(e)
    }
    t.exports = a
}
, function(t, e, n) {
    var r = n(40)
      , i = n(41);
    t.exports = function(t, e, n) {
        var s = e && n || 0;
        "string" == typeof t && (e = "binary" === t ? new Array(16) : null,
        t = null);
        var o = (t = t || {}).random || (t.rng || r)();
        if (o[6] = 15 & o[6] | 64,
        o[8] = 63 & o[8] | 128,
        e)
            for (var a = 0; a < 16; ++a)
                e[s + a] = o[a];
        return e || i(o)
    }
}
, function(t, e) {
    var n, r, i = t.exports = {};
    function s() {
        throw new Error("setTimeout has not been defined")
    }
    function o() {
        throw new Error("clearTimeout has not been defined")
    }
    function a(t) {
        if (n === setTimeout)
            return setTimeout(t, 0);
        if ((n === s || !n) && setTimeout)
            return n = setTimeout,
            setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }
    !function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : s
        } catch (t) {
            n = s
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (t) {
            r = o
        }
    }();
    var u, c = [], l = !1, h = -1;
    function f() {
        l && u && (l = !1,
        u.length ? c = u.concat(c) : h = -1,
        c.length && p())
    }
    function p() {
        if (!l) {
            var t = a(f);
            l = !0;
            for (var e = c.length; e; ) {
                for (u = c,
                c = []; ++h < e; )
                    u && u[h].run();
                h = -1,
                e = c.length
            }
            u = null,
            l = !1,
            function(t) {
                if (r === clearTimeout)
                    return clearTimeout(t);
                if ((r === o || !r) && clearTimeout)
                    return r = clearTimeout,
                    clearTimeout(t);
                try {
                    r(t)
                } catch (e) {
                    try {
                        return r.call(null, t)
                    } catch (e) {
                        return r.call(this, t)
                    }
                }
            }(t)
        }
    }
    function d(t, e) {
        this.fun = t,
        this.array = e
    }
    function g() {}
    i.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
        c.push(new d(t,e)),
        1 !== c.length || l || a(p)
    }
    ,
    d.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    i.title = "browser",
    i.browser = !0,
    i.env = {},
    i.argv = [],
    i.version = "",
    i.versions = {},
    i.on = g,
    i.addListener = g,
    i.once = g,
    i.off = g,
    i.removeListener = g,
    i.removeAllListeners = g,
    i.emit = g,
    i.prependListener = g,
    i.prependOnceListener = g,
    i.listeners = function(t) {
        return []
    }
    ,
    i.binding = function(t) {
        throw new Error("process.binding is not supported")
    }
    ,
    i.cwd = function() {
        return "/"
    }
    ,
    i.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }
    ,
    i.umask = function() {
        return 0
    }
}
, function(t, e) {
    const n = ()=>{}
      , r = Symbol("log-levels")
      , i = Symbol("log-instance");
    t.exports = class {
        constructor(t) {
            this[i] = t,
            this[r] = {
                TRACE: 0,
                DEBUG: 1,
                INFO: 2,
                WARN: 3,
                ERROR: 4,
                SILENT: 5
            }
        }
        get levels() {
            return this[r]
        }
        get logger() {
            return this[i]
        }
        set logger(t) {
            this[i] = t
        }
        get methods() {
            return Object.keys(this.levels).map(t=>t.toLowerCase()).filter(t=>"silent" !== t)
        }
        bindMethod(t, e) {
            const n = t[e];
            if ("function" == typeof n.bind)
                return n.bind(t);
            try {
                return Function.prototype.bind.call(n, t)
            } catch (e) {
                return function() {
                    return Function.prototype.apply.apply(n, [t, arguments])
                }
            }
        }
        distillLevel(t) {
            let e = t;
            return "string" == typeof e && void 0 !== this.levels[e.toUpperCase()] && (e = this.levels[e.toUpperCase()]),
            !!this.levelValid(e) && e
        }
        levelValid(t) {
            return "number" == typeof t && t >= 0 && t <= this.levels.SILENT
        }
        make(t) {
            return "debug" === t && (t = "log"),
            void 0 !== console[t] ? this.bindMethod(console, t) : void 0 !== console.log ? this.bindMethod(console, "log") : n
        }
        replaceMethods(t) {
            const e = this.distillLevel(t);
            if (null == e)
                throw new Error(`loglevelnext: replaceMethods() called with invalid level: ${t}`);
            if (!this.logger || "LogLevel" !== this.logger.type)
                throw new TypeError("loglevelnext: Logger is undefined or invalid. Please specify a valid Logger instance.");
            this.methods.forEach(t=>{
                const {[t.toUpperCase()]: r} = this.levels;
                this.logger[t] = r < e ? n : this.make(t)
            }
            ),
            this.logger.log = this.logger.debug
        }
    }
}
, function(t, e) {
    function n(e, r) {
        return t.exports = n = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        ,
        n(e, r)
    }
    t.exports = n
}
, function(t, e, n) {
    t.exports = n(46)
}
, function(t, e, n) {
    var r = n(33)
      , i = {};
    for (var s in r)
        r.hasOwnProperty(s) && (i[r[s]] = s);
    var o = t.exports = {
        rgb: {
            channels: 3,
            labels: "rgb"
        },
        hsl: {
            channels: 3,
            labels: "hsl"
        },
        hsv: {
            channels: 3,
            labels: "hsv"
        },
        hwb: {
            channels: 3,
            labels: "hwb"
        },
        cmyk: {
            channels: 4,
            labels: "cmyk"
        },
        xyz: {
            channels: 3,
            labels: "xyz"
        },
        lab: {
            channels: 3,
            labels: "lab"
        },
        lch: {
            channels: 3,
            labels: "lch"
        },
        hex: {
            channels: 1,
            labels: ["hex"]
        },
        keyword: {
            channels: 1,
            labels: ["keyword"]
        },
        ansi16: {
            channels: 1,
            labels: ["ansi16"]
        },
        ansi256: {
            channels: 1,
            labels: ["ansi256"]
        },
        hcg: {
            channels: 3,
            labels: ["h", "c", "g"]
        },
        apple: {
            channels: 3,
            labels: ["r16", "g16", "b16"]
        },
        gray: {
            channels: 1,
            labels: ["gray"]
        }
    };
    for (var a in o)
        if (o.hasOwnProperty(a)) {
            if (!("channels"in o[a]))
                throw new Error("missing channels property: " + a);
            if (!("labels"in o[a]))
                throw new Error("missing channel labels property: " + a);
            if (o[a].labels.length !== o[a].channels)
                throw new Error("channel and label counts mismatch: " + a);
            var u = o[a].channels
              , c = o[a].labels;
            delete o[a].channels,
            delete o[a].labels,
            Object.defineProperty(o[a], "channels", {
                value: u
            }),
            Object.defineProperty(o[a], "labels", {
                value: c
            })
        }
    o.rgb.hsl = function(t) {
        var e, n, r = t[0] / 255, i = t[1] / 255, s = t[2] / 255, o = Math.min(r, i, s), a = Math.max(r, i, s), u = a - o;
        return a === o ? e = 0 : r === a ? e = (i - s) / u : i === a ? e = 2 + (s - r) / u : s === a && (e = 4 + (r - i) / u),
        (e = Math.min(60 * e, 360)) < 0 && (e += 360),
        n = (o + a) / 2,
        [e, 100 * (a === o ? 0 : n <= .5 ? u / (a + o) : u / (2 - a - o)), 100 * n]
    }
    ,
    o.rgb.hsv = function(t) {
        var e, n, r, i, s, o = t[0] / 255, a = t[1] / 255, u = t[2] / 255, c = Math.max(o, a, u), l = c - Math.min(o, a, u), h = function(t) {
            return (c - t) / 6 / l + .5
        };
        return 0 === l ? i = s = 0 : (s = l / c,
        e = h(o),
        n = h(a),
        r = h(u),
        o === c ? i = r - n : a === c ? i = 1 / 3 + e - r : u === c && (i = 2 / 3 + n - e),
        i < 0 ? i += 1 : i > 1 && (i -= 1)),
        [360 * i, 100 * s, 100 * c]
    }
    ,
    o.rgb.hwb = function(t) {
        var e = t[0]
          , n = t[1]
          , r = t[2];
        return [o.rgb.hsl(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)))]
    }
    ,
    o.rgb.cmyk = function(t) {
        var e, n = t[0] / 255, r = t[1] / 255, i = t[2] / 255;
        return [100 * ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - i))) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * ((1 - i - e) / (1 - e) || 0), 100 * e]
    }
    ,
    o.rgb.keyword = function(t) {
        var e = i[t];
        if (e)
            return e;
        var n, s, o, a = 1 / 0;
        for (var u in r)
            if (r.hasOwnProperty(u)) {
                var c = r[u]
                  , l = (s = t,
                o = c,
                Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2) + Math.pow(s[2] - o[2], 2));
                l < a && (a = l,
                n = u)
            }
        return n
    }
    ,
    o.keyword.rgb = function(t) {
        return r[t]
    }
    ,
    o.rgb.xyz = function(t) {
        var e = t[0] / 255
          , n = t[1] / 255
          , r = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * r), 100 * (.0193 * e + .1192 * n + .9505 * r)]
    }
    ,
    o.rgb.lab = function(t) {
        var e = o.rgb.xyz(t)
          , n = e[0]
          , r = e[1]
          , i = e[2];
        return r /= 100,
        i /= 108.883,
        n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116,
        [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116))]
    }
    ,
    o.hsl.rgb = function(t) {
        var e, n, r, i, s, o = t[0] / 360, a = t[1] / 100, u = t[2] / 100;
        if (0 === a)
            return [s = 255 * u, s, s];
        e = 2 * u - (n = u < .5 ? u * (1 + a) : u + a - u * a),
        i = [0, 0, 0];
        for (var c = 0; c < 3; c++)
            (r = o + 1 / 3 * -(c - 1)) < 0 && r++,
            r > 1 && r--,
            s = 6 * r < 1 ? e + 6 * (n - e) * r : 2 * r < 1 ? n : 3 * r < 2 ? e + (n - e) * (2 / 3 - r) * 6 : e,
            i[c] = 255 * s;
        return i
    }
    ,
    o.hsl.hsv = function(t) {
        var e = t[0]
          , n = t[1] / 100
          , r = t[2] / 100
          , i = n
          , s = Math.max(r, .01);
        return n *= (r *= 2) <= 1 ? r : 2 - r,
        i *= s <= 1 ? s : 2 - s,
        [e, 100 * (0 === r ? 2 * i / (s + i) : 2 * n / (r + n)), 100 * ((r + n) / 2)]
    }
    ,
    o.hsv.rgb = function(t) {
        var e = t[0] / 60
          , n = t[1] / 100
          , r = t[2] / 100
          , i = Math.floor(e) % 6
          , s = e - Math.floor(e)
          , o = 255 * r * (1 - n)
          , a = 255 * r * (1 - n * s)
          , u = 255 * r * (1 - n * (1 - s));
        switch (r *= 255,
        i) {
        case 0:
            return [r, u, o];
        case 1:
            return [a, r, o];
        case 2:
            return [o, r, u];
        case 3:
            return [o, a, r];
        case 4:
            return [u, o, r];
        case 5:
            return [r, o, a]
        }
    }
    ,
    o.hsv.hsl = function(t) {
        var e, n, r, i = t[0], s = t[1] / 100, o = t[2] / 100, a = Math.max(o, .01);
        return r = (2 - s) * o,
        n = s * a,
        [i, 100 * (n = (n /= (e = (2 - s) * a) <= 1 ? e : 2 - e) || 0), 100 * (r /= 2)]
    }
    ,
    o.hwb.rgb = function(t) {
        var e, n, r, i, s, o, a, u = t[0] / 360, c = t[1] / 100, l = t[2] / 100, h = c + l;
        switch (h > 1 && (c /= h,
        l /= h),
        r = 6 * u - (e = Math.floor(6 * u)),
        0 != (1 & e) && (r = 1 - r),
        i = c + r * ((n = 1 - l) - c),
        e) {
        default:
        case 6:
        case 0:
            s = n,
            o = i,
            a = c;
            break;
        case 1:
            s = i,
            o = n,
            a = c;
            break;
        case 2:
            s = c,
            o = n,
            a = i;
            break;
        case 3:
            s = c,
            o = i,
            a = n;
            break;
        case 4:
            s = i,
            o = c,
            a = n;
            break;
        case 5:
            s = n,
            o = c,
            a = i
        }
        return [255 * s, 255 * o, 255 * a]
    }
    ,
    o.cmyk.rgb = function(t) {
        var e = t[0] / 100
          , n = t[1] / 100
          , r = t[2] / 100
          , i = t[3] / 100;
        return [255 * (1 - Math.min(1, e * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i))]
    }
    ,
    o.xyz.rgb = function(t) {
        var e, n, r, i = t[0] / 100, s = t[1] / 100, o = t[2] / 100;
        return n = -.9689 * i + 1.8758 * s + .0415 * o,
        r = .0557 * i + -.204 * s + 1.057 * o,
        e = (e = 3.2406 * i + -1.5372 * s + -.4986 * o) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e,
        n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n,
        r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r,
        [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
    }
    ,
    o.xyz.lab = function(t) {
        var e = t[0]
          , n = t[1]
          , r = t[2];
        return n /= 100,
        r /= 108.883,
        e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116,
        [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
    }
    ,
    o.lab.xyz = function(t) {
        var e, n, r, i = t[0];
        e = t[1] / 500 + (n = (i + 16) / 116),
        r = n - t[2] / 200;
        var s = Math.pow(n, 3)
          , o = Math.pow(e, 3)
          , a = Math.pow(r, 3);
        return n = s > .008856 ? s : (n - 16 / 116) / 7.787,
        e = o > .008856 ? o : (e - 16 / 116) / 7.787,
        r = a > .008856 ? a : (r - 16 / 116) / 7.787,
        [e *= 95.047, n *= 100, r *= 108.883]
    }
    ,
    o.lab.lch = function(t) {
        var e, n = t[0], r = t[1], i = t[2];
        return (e = 360 * Math.atan2(i, r) / 2 / Math.PI) < 0 && (e += 360),
        [n, Math.sqrt(r * r + i * i), e]
    }
    ,
    o.lch.lab = function(t) {
        var e, n = t[0], r = t[1];
        return e = t[2] / 360 * 2 * Math.PI,
        [n, r * Math.cos(e), r * Math.sin(e)]
    }
    ,
    o.rgb.ansi16 = function(t) {
        var e = t[0]
          , n = t[1]
          , r = t[2]
          , i = 1 in arguments ? arguments[1] : o.rgb.hsv(t)[2];
        if (0 === (i = Math.round(i / 50)))
            return 30;
        var s = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
        return 2 === i && (s += 60),
        s
    }
    ,
    o.hsv.ansi16 = function(t) {
        return o.rgb.ansi16(o.hsv.rgb(t), t[2])
    }
    ,
    o.rgb.ansi256 = function(t) {
        var e = t[0]
          , n = t[1]
          , r = t[2];
        return e === n && n === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
    }
    ,
    o.ansi16.rgb = function(t) {
        var e = t % 10;
        if (0 === e || 7 === e)
            return t > 50 && (e += 3.5),
            [e = e / 10.5 * 255, e, e];
        var n = .5 * (1 + ~~(t > 50));
        return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
    }
    ,
    o.ansi256.rgb = function(t) {
        if (t >= 232) {
            var e = 10 * (t - 232) + 8;
            return [e, e, e]
        }
        var n;
        return t -= 16,
        [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
    }
    ,
    o.rgb.hex = function(t) {
        var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
        return "000000".substring(e.length) + e
    }
    ,
    o.hex.rgb = function(t) {
        var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!e)
            return [0, 0, 0];
        var n = e[0];
        3 === e[0].length && (n = n.split("").map((function(t) {
            return t + t
        }
        )).join(""));
        var r = parseInt(n, 16);
        return [r >> 16 & 255, r >> 8 & 255, 255 & r]
    }
    ,
    o.rgb.hcg = function(t) {
        var e, n = t[0] / 255, r = t[1] / 255, i = t[2] / 255, s = Math.max(Math.max(n, r), i), o = Math.min(Math.min(n, r), i), a = s - o;
        return e = a <= 0 ? 0 : s === n ? (r - i) / a % 6 : s === r ? 2 + (i - n) / a : 4 + (n - r) / a + 4,
        e /= 6,
        [360 * (e %= 1), 100 * a, 100 * (a < 1 ? o / (1 - a) : 0)]
    }
    ,
    o.hsl.hcg = function(t) {
        var e = t[1] / 100
          , n = t[2] / 100
          , r = 1
          , i = 0;
        return (r = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (i = (n - .5 * r) / (1 - r)),
        [t[0], 100 * r, 100 * i]
    }
    ,
    o.hsv.hcg = function(t) {
        var e = t[1] / 100
          , n = t[2] / 100
          , r = e * n
          , i = 0;
        return r < 1 && (i = (n - r) / (1 - r)),
        [t[0], 100 * r, 100 * i]
    }
    ,
    o.hcg.rgb = function(t) {
        var e = t[0] / 360
          , n = t[1] / 100
          , r = t[2] / 100;
        if (0 === n)
            return [255 * r, 255 * r, 255 * r];
        var i, s = [0, 0, 0], o = e % 1 * 6, a = o % 1, u = 1 - a;
        switch (Math.floor(o)) {
        case 0:
            s[0] = 1,
            s[1] = a,
            s[2] = 0;
            break;
        case 1:
            s[0] = u,
            s[1] = 1,
            s[2] = 0;
            break;
        case 2:
            s[0] = 0,
            s[1] = 1,
            s[2] = a;
            break;
        case 3:
            s[0] = 0,
            s[1] = u,
            s[2] = 1;
            break;
        case 4:
            s[0] = a,
            s[1] = 0,
            s[2] = 1;
            break;
        default:
            s[0] = 1,
            s[1] = 0,
            s[2] = u
        }
        return i = (1 - n) * r,
        [255 * (n * s[0] + i), 255 * (n * s[1] + i), 255 * (n * s[2] + i)]
    }
    ,
    o.hcg.hsv = function(t) {
        var e = t[1] / 100
          , n = e + t[2] / 100 * (1 - e)
          , r = 0;
        return n > 0 && (r = e / n),
        [t[0], 100 * r, 100 * n]
    }
    ,
    o.hcg.hsl = function(t) {
        var e = t[1] / 100
          , n = t[2] / 100 * (1 - e) + .5 * e
          , r = 0;
        return n > 0 && n < .5 ? r = e / (2 * n) : n >= .5 && n < 1 && (r = e / (2 * (1 - n))),
        [t[0], 100 * r, 100 * n]
    }
    ,
    o.hcg.hwb = function(t) {
        var e = t[1] / 100
          , n = e + t[2] / 100 * (1 - e);
        return [t[0], 100 * (n - e), 100 * (1 - n)]
    }
    ,
    o.hwb.hcg = function(t) {
        var e = t[1] / 100
          , n = 1 - t[2] / 100
          , r = n - e
          , i = 0;
        return r < 1 && (i = (n - r) / (1 - r)),
        [t[0], 100 * r, 100 * i]
    }
    ,
    o.apple.rgb = function(t) {
        return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
    }
    ,
    o.rgb.apple = function(t) {
        return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
    }
    ,
    o.gray.rgb = function(t) {
        return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
    }
    ,
    o.gray.hsl = o.gray.hsv = function(t) {
        return [0, 0, t[0]]
    }
    ,
    o.gray.hwb = function(t) {
        return [0, 100, t[0]]
    }
    ,
    o.gray.cmyk = function(t) {
        return [0, 0, 0, t[0]]
    }
    ,
    o.gray.lab = function(t) {
        return [t[0], 0, 0]
    }
    ,
    o.gray.hex = function(t) {
        var e = 255 & Math.round(t[0] / 100 * 255)
          , n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
        return "000000".substring(n.length) + n
    }
    ,
    o.rgb.gray = function(t) {
        return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
    }
}
, function(t, e, n) {
    const r = n(12)
      , i = {
        level: t=>`[${t.level}]`,
        name: t=>t.logger.name,
        template: "{{time}} {{level}} ",
        time: ()=>(new Date).toTimeString().split(" ")[0]
    };
    t.exports = class extends r {
        constructor(t, e) {
            super(t),
            this.options = Object.assign({}, i, e)
        }
        interpolate(t) {
            return this.options.template.replace(/{{([^{}]*)}}/g, (e,n)=>{
                const r = this.options[n];
                return r ? r({
                    level: t,
                    logger: this.logger
                }) : e
            }
            )
        }
        make(t) {
            const e = super.make(t);
            return (...n)=>{
                const r = this.interpolate(t)
                  , [i] = n;
                "string" == typeof i ? n[0] = r + i : n.unshift(r),
                e(...n)
            }
        }
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return function() {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
                n[r] = arguments[r];
            return t.apply(e, n)
        }
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(5);
    function i(t) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    t.exports = function(t, e, n) {
        if (!e)
            return t;
        var s;
        if (n)
            s = n(e);
        else if (r.isURLSearchParams(e))
            s = e.toString();
        else {
            var o = [];
            r.forEach(e, (function(t, e) {
                null != t && (r.isArray(t) ? e += "[]" : t = [t],
                r.forEach(t, (function(t) {
                    r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)),
                    o.push(i(e) + "=" + i(t))
                }
                )))
            }
            )),
            s = o.join("&")
        }
        if (s) {
            var a = t.indexOf("#");
            -1 !== a && (t = t.slice(0, a)),
            t += (-1 === t.indexOf("?") ? "?" : "&") + s
        }
        return t
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return !(!t || !t.__CANCEL__)
    }
}
, function(t, e, n) {
    "use strict";
    (function(e) {
        var r = n(5)
          , i = n(51)
          , s = {
            "Content-Type": "application/x-www-form-urlencoded"
        };
        function o(t, e) {
            !r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
        }
        var a, u = {
            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e)) && (a = n(21)),
            a),
            transformRequest: [function(t, e) {
                return i(e, "Accept"),
                i(e, "Content-Type"),
                r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (o(e, "application/x-www-form-urlencoded;charset=utf-8"),
                t.toString()) : r.isObject(t) ? (o(e, "application/json;charset=utf-8"),
                JSON.stringify(t)) : t
            }
            ],
            transformResponse: [function(t) {
                if ("string" == typeof t)
                    try {
                        t = JSON.parse(t)
                    } catch (t) {}
                return t
            }
            ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(t) {
                return t >= 200 && t < 300
            }
        };
        u.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        },
        r.forEach(["delete", "get", "head"], (function(t) {
            u.headers[t] = {}
        }
        )),
        r.forEach(["post", "put", "patch"], (function(t) {
            u.headers[t] = r.merge(s)
        }
        )),
        t.exports = u
    }
    ).call(this, n(11))
}
, function(t, e, n) {
    "use strict";
    var r = n(5)
      , i = n(52)
      , s = n(18)
      , o = n(54)
      , a = n(57)
      , u = n(58)
      , c = n(22);
    t.exports = function(t) {
        return new Promise((function(e, l) {
            var h = t.data
              , f = t.headers;
            r.isFormData(h) && delete f["Content-Type"];
            var p = new XMLHttpRequest;
            if (t.auth) {
                var d = t.auth.username || ""
                  , g = t.auth.password || "";
                f.Authorization = "Basic " + btoa(d + ":" + g)
            }
            var m = o(t.baseURL, t.url);
            if (p.open(t.method.toUpperCase(), s(m, t.params, t.paramsSerializer), !0),
            p.timeout = t.timeout,
            p.onreadystatechange = function() {
                if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders"in p ? a(p.getAllResponseHeaders()) : null
                      , r = {
                        data: t.responseType && "text" !== t.responseType ? p.response : p.responseText,
                        status: p.status,
                        statusText: p.statusText,
                        headers: n,
                        config: t,
                        request: p
                    };
                    i(e, l, r),
                    p = null
                }
            }
            ,
            p.onabort = function() {
                p && (l(c("Request aborted", t, "ECONNABORTED", p)),
                p = null)
            }
            ,
            p.onerror = function() {
                l(c("Network Error", t, null, p)),
                p = null
            }
            ,
            p.ontimeout = function() {
                var e = "timeout of " + t.timeout + "ms exceeded";
                t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
                l(c(e, t, "ECONNABORTED", p)),
                p = null
            }
            ,
            r.isStandardBrowserEnv()) {
                var y = n(59)
                  , v = (t.withCredentials || u(m)) && t.xsrfCookieName ? y.read(t.xsrfCookieName) : void 0;
                v && (f[t.xsrfHeaderName] = v)
            }
            if ("setRequestHeader"in p && r.forEach(f, (function(t, e) {
                void 0 === h && "content-type" === e.toLowerCase() ? delete f[e] : p.setRequestHeader(e, t)
            }
            )),
            r.isUndefined(t.withCredentials) || (p.withCredentials = !!t.withCredentials),
            t.responseType)
                try {
                    p.responseType = t.responseType
                } catch (e) {
                    if ("json" !== t.responseType)
                        throw e
                }
            "function" == typeof t.onDownloadProgress && p.addEventListener("progress", t.onDownloadProgress),
            "function" == typeof t.onUploadProgress && p.upload && p.upload.addEventListener("progress", t.onUploadProgress),
            t.cancelToken && t.cancelToken.promise.then((function(t) {
                p && (p.abort(),
                l(t),
                p = null)
            }
            )),
            void 0 === h && (h = null),
            p.send(h)
        }
        ))
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(53);
    t.exports = function(t, e, n, i, s) {
        var o = new Error(t);
        return r(o, e, n, i, s)
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(5);
    t.exports = function(t, e) {
        e = e || {};
        var n = {}
          , i = ["url", "method", "params", "data"]
          , s = ["headers", "auth", "proxy"]
          , o = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
        r.forEach(i, (function(t) {
            void 0 !== e[t] && (n[t] = e[t])
        }
        )),
        r.forEach(s, (function(i) {
            r.isObject(e[i]) ? n[i] = r.deepMerge(t[i], e[i]) : void 0 !== e[i] ? n[i] = e[i] : r.isObject(t[i]) ? n[i] = r.deepMerge(t[i]) : void 0 !== t[i] && (n[i] = t[i])
        }
        )),
        r.forEach(o, (function(r) {
            void 0 !== e[r] ? n[r] = e[r] : void 0 !== t[r] && (n[r] = t[r])
        }
        ));
        var a = i.concat(s).concat(o)
          , u = Object.keys(e).filter((function(t) {
            return -1 === a.indexOf(t)
        }
        ));
        return r.forEach(u, (function(r) {
            void 0 !== e[r] ? n[r] = e[r] : void 0 !== t[r] && (n[r] = t[r])
        }
        )),
        n
    }
}
, function(t, e, n) {
    "use strict";
    function r(t) {
        this.message = t
    }
    r.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }
    ,
    r.prototype.__CANCEL__ = !0,
    t.exports = r
}
, function(t, e, n) {
    (function(e) {
        const r = n(28)
          , i = n(37)
          , s = n(39)
          , o = {
            level: "info",
            name: "<webpack-log>",
            timestamp: !1,
            unique: !0
        }
          , a = "⬡"
          , u = "⬢"
          , c = {
            trace: "cyan",
            debug: "magenta",
            info: "blue",
            warn: "yellow",
            error: "red"
        }
          , l = t=>{
            const e = Object.assign({}, o, t)
              , n = {
                level: ({level: t})=>{
                    const n = c[t]
                      , i = ["error", "warn"].includes(t) ? u : a;
                    return r[n](`${i} ${e.name}: `)
                }
                ,
                template: "{{level}}"
            };
            return e.timestamp && (n.template = `[{{time}}] ${n.template}`),
            e.id = e.name + (e.unique ? s() : ""),
            e.prefix = n,
            i.create(e)
        }
        ;
        Object.defineProperty(l, "colors", {
            get: ()=>(e.emitWarning("The colors property in webpack-log exports is deprecated. Please install and use `chalk` or a similar ANSI color module.", {
                type: "DeprecationWarning"
            }),
            r)
        }),
        l.delete = t=>{
            delete i.loggers[t]
        }
        ,
        t.exports = l
    }
    ).call(this, n(11))
}
, function(t, e, n) {
    t.exports = n(62)
}
, function(t, e, n) {
    var r = function(t) {
        "use strict";
        var e = Object.prototype
          , n = e.hasOwnProperty
          , r = "function" == typeof Symbol ? Symbol : {}
          , i = r.iterator || "@@iterator"
          , s = r.asyncIterator || "@@asyncIterator"
          , o = r.toStringTag || "@@toStringTag";
        function a(t, e, n, r) {
            var i = e && e.prototype instanceof l ? e : l
              , s = Object.create(i.prototype)
              , o = new k(r || []);
            return s._invoke = function(t, e, n) {
                var r = "suspendedStart";
                return function(i, s) {
                    if ("executing" === r)
                        throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i)
                            throw s;
                        return L()
                    }
                    for (n.method = i,
                    n.arg = s; ; ) {
                        var o = n.delegate;
                        if (o) {
                            var a = b(o, n);
                            if (a) {
                                if (a === c)
                                    continue;
                                return a
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r)
                                throw r = "completed",
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var l = u(t, e, n);
                        if ("normal" === l.type) {
                            if (r = n.done ? "completed" : "suspendedYield",
                            l.arg === c)
                                continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (r = "completed",
                        n.method = "throw",
                        n.arg = l.arg)
                    }
                }
            }(t, n, o),
            s
        }
        function u(t, e, n) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, n)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = a;
        var c = {};
        function l() {}
        function h() {}
        function f() {}
        var p = {};
        p[i] = function() {
            return this
        }
        ;
        var d = Object.getPrototypeOf
          , g = d && d(d(x([])));
        g && g !== e && n.call(g, i) && (p = g);
        var m = f.prototype = l.prototype = Object.create(p);
        function y(t) {
            ["next", "throw", "return"].forEach((function(e) {
                t[e] = function(t) {
                    return this._invoke(e, t)
                }
            }
            ))
        }
        function v(t) {
            var e;
            this._invoke = function(r, i) {
                function s() {
                    return new Promise((function(e, s) {
                        !function e(r, i, s, o) {
                            var a = u(t[r], t, i);
                            if ("throw" !== a.type) {
                                var c = a.arg
                                  , l = c.value;
                                return l && "object" == typeof l && n.call(l, "__await") ? Promise.resolve(l.__await).then((function(t) {
                                    e("next", t, s, o)
                                }
                                ), (function(t) {
                                    e("throw", t, s, o)
                                }
                                )) : Promise.resolve(l).then((function(t) {
                                    c.value = t,
                                    s(c)
                                }
                                ), (function(t) {
                                    return e("throw", t, s, o)
                                }
                                ))
                            }
                            o(a.arg)
                        }(r, i, e, s)
                    }
                    ))
                }
                return e = e ? e.then(s, s) : s()
            }
        }
        function b(t, e) {
            var n = t.iterator[e.method];
            if (void 0 === n) {
                if (e.delegate = null,
                "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return",
                    e.arg = void 0,
                    b(t, e),
                    "throw" === e.method))
                        return c;
                    e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return c
            }
            var r = u(n, t.iterator, e.arg);
            if ("throw" === r.type)
                return e.method = "throw",
                e.arg = r.arg,
                e.delegate = null,
                c;
            var i = r.arg;
            return i ? i.done ? (e[t.resultName] = i.value,
            e.next = t.nextLoc,
            "return" !== e.method && (e.method = "next",
            e.arg = void 0),
            e.delegate = null,
            c) : i : (e.method = "throw",
            e.arg = new TypeError("iterator result is not an object"),
            e.delegate = null,
            c)
        }
        function w(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]),
            2 in t && (e.finallyLoc = t[2],
            e.afterLoc = t[3]),
            this.tryEntries.push(e)
        }
        function _(t) {
            var e = t.completion || {};
            e.type = "normal",
            delete e.arg,
            t.completion = e
        }
        function k(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            t.forEach(w, this),
            this.reset(!0)
        }
        function x(t) {
            if (t) {
                var e = t[i];
                if (e)
                    return e.call(t);
                if ("function" == typeof t.next)
                    return t;
                if (!isNaN(t.length)) {
                    var r = -1
                      , s = function e() {
                        for (; ++r < t.length; )
                            if (n.call(t, r))
                                return e.value = t[r],
                                e.done = !1,
                                e;
                        return e.value = void 0,
                        e.done = !0,
                        e
                    };
                    return s.next = s
                }
            }
            return {
                next: L
            }
        }
        function L() {
            return {
                value: void 0,
                done: !0
            }
        }
        return h.prototype = m.constructor = f,
        f.constructor = h,
        f[o] = h.displayName = "GeneratorFunction",
        t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
        }
        ,
        t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, f) : (t.__proto__ = f,
            o in t || (t[o] = "GeneratorFunction")),
            t.prototype = Object.create(m),
            t
        }
        ,
        t.awrap = function(t) {
            return {
                __await: t
            }
        }
        ,
        y(v.prototype),
        v.prototype[s] = function() {
            return this
        }
        ,
        t.AsyncIterator = v,
        t.async = function(e, n, r, i) {
            var s = new v(a(e, n, r, i));
            return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                return t.done ? t.value : s.next()
            }
            ))
        }
        ,
        y(m),
        m[o] = "Generator",
        m[i] = function() {
            return this
        }
        ,
        m.toString = function() {
            return "[object Generator]"
        }
        ,
        t.keys = function(t) {
            var e = [];
            for (var n in t)
                e.push(n);
            return e.reverse(),
            function n() {
                for (; e.length; ) {
                    var r = e.pop();
                    if (r in t)
                        return n.value = r,
                        n.done = !1,
                        n
                }
                return n.done = !0,
                n
            }
        }
        ,
        t.values = x,
        k.prototype = {
            constructor: k,
            reset: function(t) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(_),
                !t)
                    for (var e in this)
                        "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type)
                    throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done)
                    throw t;
                var e = this;
                function r(n, r) {
                    return o.type = "throw",
                    o.arg = t,
                    e.next = n,
                    r && (e.method = "next",
                    e.arg = void 0),
                    !!r
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var s = this.tryEntries[i]
                      , o = s.completion;
                    if ("root" === s.tryLoc)
                        return r("end");
                    if (s.tryLoc <= this.prev) {
                        var a = n.call(s, "catchLoc")
                          , u = n.call(s, "finallyLoc");
                        if (a && u) {
                            if (this.prev < s.catchLoc)
                                return r(s.catchLoc, !0);
                            if (this.prev < s.finallyLoc)
                                return r(s.finallyLoc)
                        } else if (a) {
                            if (this.prev < s.catchLoc)
                                return r(s.catchLoc, !0)
                        } else {
                            if (!u)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < s.finallyLoc)
                                return r(s.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var i = this.tryEntries[r];
                    if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var s = i;
                        break
                    }
                }
                s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                var o = s ? s.completion : {};
                return o.type = t,
                o.arg = e,
                s ? (this.method = "next",
                this.next = s.finallyLoc,
                c) : this.complete(o)
            },
            complete: function(t, e) {
                if ("throw" === t.type)
                    throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                this.method = "return",
                this.next = "end") : "normal" === t.type && e && (this.next = e),
                c
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t)
                        return this.complete(n.completion, n.afterLoc),
                        _(n),
                        c
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            _(n)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, n) {
                return this.delegate = {
                    iterator: x(t),
                    resultName: e,
                    nextLoc: n
                },
                "next" === this.method && (this.arg = void 0),
                c
            }
        },
        t
    }(t.exports);
    try {
        regeneratorRuntime = r
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}
, function(t, e, n) {
    "use strict";
    (function(e) {
        const r = n(29)
          , i = n(30)
          , s = n(35).stdout
          , o = n(36)
          , a = "win32" === e.platform && !(e.env.TERM || "").toLowerCase().startsWith("xterm")
          , u = ["ansi", "ansi", "ansi256", "ansi16m"]
          , c = new Set(["gray"])
          , l = Object.create(null);
        function h(t, e) {
            e = e || {};
            const n = s ? s.level : 0;
            t.level = void 0 === e.level ? n : e.level,
            t.enabled = "enabled"in e ? e.enabled : t.level > 0
        }
        function f(t) {
            if (!this || !(this instanceof f) || this.template) {
                const e = {};
                return h(e, t),
                e.template = function() {
                    const t = [].slice.call(arguments);
                    return m.apply(null, [e.template].concat(t))
                }
                ,
                Object.setPrototypeOf(e, f.prototype),
                Object.setPrototypeOf(e.template, e),
                e.template.constructor = f,
                e.template
            }
            h(this, t)
        }
        a && (i.blue.open = "[94m");
        for (const t of Object.keys(i))
            i[t].closeRe = new RegExp(r(i[t].close),"g"),
            l[t] = {
                get() {
                    const e = i[t];
                    return d.call(this, this._styles ? this._styles.concat(e) : [e], this._empty, t)
                }
            };
        l.visible = {
            get() {
                return d.call(this, this._styles || [], !0, "visible")
            }
        },
        i.color.closeRe = new RegExp(r(i.color.close),"g");
        for (const t of Object.keys(i.color.ansi))
            c.has(t) || (l[t] = {
                get() {
                    const e = this.level;
                    return function() {
                        const n = i.color[u[e]][t].apply(null, arguments)
                          , r = {
                            open: n,
                            close: i.color.close,
                            closeRe: i.color.closeRe
                        };
                        return d.call(this, this._styles ? this._styles.concat(r) : [r], this._empty, t)
                    }
                }
            });
        i.bgColor.closeRe = new RegExp(r(i.bgColor.close),"g");
        for (const t of Object.keys(i.bgColor.ansi)) {
            if (c.has(t))
                continue;
            l["bg" + t[0].toUpperCase() + t.slice(1)] = {
                get() {
                    const e = this.level;
                    return function() {
                        const n = i.bgColor[u[e]][t].apply(null, arguments)
                          , r = {
                            open: n,
                            close: i.bgColor.close,
                            closeRe: i.bgColor.closeRe
                        };
                        return d.call(this, this._styles ? this._styles.concat(r) : [r], this._empty, t)
                    }
                }
            }
        }
        const p = Object.defineProperties(()=>{}
        , l);
        function d(t, e, n) {
            const r = function() {
                return g.apply(r, arguments)
            };
            r._styles = t,
            r._empty = e;
            const i = this;
            return Object.defineProperty(r, "level", {
                enumerable: !0,
                get: ()=>i.level,
                set(t) {
                    i.level = t
                }
            }),
            Object.defineProperty(r, "enabled", {
                enumerable: !0,
                get: ()=>i.enabled,
                set(t) {
                    i.enabled = t
                }
            }),
            r.hasGrey = this.hasGrey || "gray" === n || "grey" === n,
            r.__proto__ = p,
            r
        }
        function g() {
            const t = arguments
              , e = t.length;
            let n = String(arguments[0]);
            if (0 === e)
                return "";
            if (e > 1)
                for (let r = 1; r < e; r++)
                    n += " " + t[r];
            if (!this.enabled || this.level <= 0 || !n)
                return this._empty ? "" : n;
            const r = i.dim.open;
            a && this.hasGrey && (i.dim.open = "");
            for (const t of this._styles.slice().reverse())
                n = t.open + n.replace(t.closeRe, t.open) + t.close,
                n = n.replace(/\r?\n/g, `${t.close}$&${t.open}`);
            return i.dim.open = r,
            n
        }
        function m(t, e) {
            if (!Array.isArray(e))
                return [].slice.call(arguments, 1).join(" ");
            const n = [].slice.call(arguments, 2)
              , r = [e.raw[0]];
            for (let t = 1; t < e.length; t++)
                r.push(String(n[t - 1]).replace(/[{}\\]/g, "\\$&")),
                r.push(String(e.raw[t]));
            return o(t, r.join(""))
        }
        Object.defineProperties(f.prototype, l),
        t.exports = f(),
        t.exports.supportsColor = s,
        t.exports.default = t.exports
    }
    ).call(this, n(11))
}
, function(t, e, n) {
    "use strict";
    var r = /[|\\{}()[\]^$+*?.]/g;
    t.exports = function(t) {
        if ("string" != typeof t)
            throw new TypeError("Expected a string");
        return t.replace(r, "\\$&")
    }
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        const e = n(32)
          , r = (t,n)=>function() {
            const r = t.apply(e, arguments);
            return `[${r + n}m`
        }
          , i = (t,n)=>function() {
            const r = t.apply(e, arguments);
            return `[${38 + n};5;${r}m`
        }
          , s = (t,n)=>function() {
            const r = t.apply(e, arguments);
            return `[${38 + n};2;${r[0]};${r[1]};${r[2]}m`
        }
        ;
        Object.defineProperty(t, "exports", {
            enumerable: !0,
            get: function() {
                const t = new Map
                  , n = {
                    modifier: {
                        reset: [0, 0],
                        bold: [1, 22],
                        dim: [2, 22],
                        italic: [3, 23],
                        underline: [4, 24],
                        inverse: [7, 27],
                        hidden: [8, 28],
                        strikethrough: [9, 29]
                    },
                    color: {
                        black: [30, 39],
                        red: [31, 39],
                        green: [32, 39],
                        yellow: [33, 39],
                        blue: [34, 39],
                        magenta: [35, 39],
                        cyan: [36, 39],
                        white: [37, 39],
                        gray: [90, 39],
                        redBright: [91, 39],
                        greenBright: [92, 39],
                        yellowBright: [93, 39],
                        blueBright: [94, 39],
                        magentaBright: [95, 39],
                        cyanBright: [96, 39],
                        whiteBright: [97, 39]
                    },
                    bgColor: {
                        bgBlack: [40, 49],
                        bgRed: [41, 49],
                        bgGreen: [42, 49],
                        bgYellow: [43, 49],
                        bgBlue: [44, 49],
                        bgMagenta: [45, 49],
                        bgCyan: [46, 49],
                        bgWhite: [47, 49],
                        bgBlackBright: [100, 49],
                        bgRedBright: [101, 49],
                        bgGreenBright: [102, 49],
                        bgYellowBright: [103, 49],
                        bgBlueBright: [104, 49],
                        bgMagentaBright: [105, 49],
                        bgCyanBright: [106, 49],
                        bgWhiteBright: [107, 49]
                    }
                };
                n.color.grey = n.color.gray;
                for (const e of Object.keys(n)) {
                    const r = n[e];
                    for (const e of Object.keys(r)) {
                        const i = r[e];
                        n[e] = {
                            open: `[${i[0]}m`,
                            close: `[${i[1]}m`
                        },
                        r[e] = n[e],
                        t.set(i[0], i[1])
                    }
                    Object.defineProperty(n, e, {
                        value: r,
                        enumerable: !1
                    }),
                    Object.defineProperty(n, "codes", {
                        value: t,
                        enumerable: !1
                    })
                }
                const o = t=>t
                  , a = (t,e,n)=>[t, e, n];
                n.color.close = "[39m",
                n.bgColor.close = "[49m",
                n.color.ansi = {
                    ansi: r(o, 0)
                },
                n.color.ansi256 = {
                    ansi256: i(o, 0)
                },
                n.color.ansi16m = {
                    rgb: s(a, 0)
                },
                n.bgColor.ansi = {
                    ansi: r(o, 10)
                },
                n.bgColor.ansi256 = {
                    ansi256: i(o, 10)
                },
                n.bgColor.ansi16m = {
                    rgb: s(a, 10)
                };
                for (let t of Object.keys(e)) {
                    if ("object" != typeof e[t])
                        continue;
                    const o = e[t];
                    "ansi16" === t && (t = "ansi"),
                    "ansi16"in o && (n.color.ansi[t] = r(o.ansi16, 0),
                    n.bgColor.ansi[t] = r(o.ansi16, 10)),
                    "ansi256"in o && (n.color.ansi256[t] = i(o.ansi256, 0),
                    n.bgColor.ansi256[t] = i(o.ansi256, 10)),
                    "rgb"in o && (n.color.ansi16m[t] = s(o.rgb, 0),
                    n.bgColor.ansi16m[t] = s(o.rgb, 10))
                }
                return n
            }
        })
    }
    ).call(this, n(31)(t))
}
, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}
        ,
        t.paths = [],
        t.children || (t.children = []),
        Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }),
        Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }),
        t.webpackPolyfill = 1),
        t
    }
}
, function(t, e, n) {
    var r = n(15)
      , i = n(34)
      , s = {};
    Object.keys(r).forEach((function(t) {
        s[t] = {},
        Object.defineProperty(s[t], "channels", {
            value: r[t].channels
        }),
        Object.defineProperty(s[t], "labels", {
            value: r[t].labels
        });
        var e = i(t);
        Object.keys(e).forEach((function(n) {
            var r = e[n];
            s[t][n] = function(t) {
                var e = function(e) {
                    if (null == e)
                        return e;
                    arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
                    var n = t(e);
                    if ("object" == typeof n)
                        for (var r = n.length, i = 0; i < r; i++)
                            n[i] = Math.round(n[i]);
                    return n
                };
                return "conversion"in t && (e.conversion = t.conversion),
                e
            }(r),
            s[t][n].raw = function(t) {
                var e = function(e) {
                    return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)),
                    t(e))
                };
                return "conversion"in t && (e.conversion = t.conversion),
                e
            }(r)
        }
        ))
    }
    )),
    t.exports = s
}
, function(t, e, n) {
    "use strict";
    t.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
    }
}
, function(t, e, n) {
    var r = n(15);
    function i(t) {
        var e = function() {
            for (var t = {}, e = Object.keys(r), n = e.length, i = 0; i < n; i++)
                t[e[i]] = {
                    distance: -1,
                    parent: null
                };
            return t
        }()
          , n = [t];
        for (e[t].distance = 0; n.length; )
            for (var i = n.pop(), s = Object.keys(r[i]), o = s.length, a = 0; a < o; a++) {
                var u = s[a]
                  , c = e[u];
                -1 === c.distance && (c.distance = e[i].distance + 1,
                c.parent = i,
                n.unshift(u))
            }
        return e
    }
    function s(t, e) {
        return function(n) {
            return e(t(n))
        }
    }
    function o(t, e) {
        for (var n = [e[t].parent, t], i = r[e[t].parent][t], o = e[t].parent; e[o].parent; )
            n.unshift(e[o].parent),
            i = s(r[e[o].parent][o], i),
            o = e[o].parent;
        return i.conversion = n,
        i
    }
    t.exports = function(t) {
        for (var e = i(t), n = {}, r = Object.keys(e), s = r.length, a = 0; a < s; a++) {
            var u = r[a];
            null !== e[u].parent && (n[u] = o(u, e))
        }
        return n
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = {
        stdout: !1,
        stderr: !1
    }
}
, function(t, e, n) {
    "use strict";
    const r = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi
      , i = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g
      , s = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/
      , o = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi
      , a = new Map([["n", "\n"], ["r", "\r"], ["t", "\t"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", ""]]);
    function u(t) {
        return "u" === t[0] && 5 === t.length || "x" === t[0] && 3 === t.length ? String.fromCharCode(parseInt(t.slice(1), 16)) : a.get(t) || t
    }
    function c(t, e) {
        const n = []
          , r = e.trim().split(/\s*,\s*/g);
        let i;
        for (const e of r)
            if (isNaN(e)) {
                if (!(i = e.match(s)))
                    throw new Error(`Invalid Chalk template style argument: ${e} (in style '${t}')`);
                n.push(i[2].replace(o, (t,e,n)=>e ? u(e) : n))
            } else
                n.push(Number(e));
        return n
    }
    function l(t) {
        i.lastIndex = 0;
        const e = [];
        let n;
        for (; null !== (n = i.exec(t)); ) {
            const t = n[1];
            if (n[2]) {
                const r = c(t, n[2]);
                e.push([t].concat(r))
            } else
                e.push([t])
        }
        return e
    }
    function h(t, e) {
        const n = {};
        for (const t of e)
            for (const e of t.styles)
                n[e[0]] = t.inverse ? null : e.slice(1);
        let r = t;
        for (const t of Object.keys(n))
            if (Array.isArray(n[t])) {
                if (!(t in r))
                    throw new Error(`Unknown Chalk style: ${t}`);
                r = n[t].length > 0 ? r[t].apply(r, n[t]) : r[t]
            }
        return r
    }
    t.exports = (t,e)=>{
        const n = []
          , i = [];
        let s = [];
        if (e.replace(r, (e,r,o,a,c,f)=>{
            if (r)
                s.push(u(r));
            else if (a) {
                const e = s.join("");
                s = [],
                i.push(0 === n.length ? e : h(t, n)(e)),
                n.push({
                    inverse: o,
                    styles: l(a)
                })
            } else if (c) {
                if (0 === n.length)
                    throw new Error("Found extraneous } in Chalk template literal");
                i.push(h(t, n)(s.join(""))),
                s = [],
                n.pop()
            } else
                s.push(f)
        }
        ),
        i.push(s.join("")),
        n.length > 0) {
            const t = `Chalk template literal is missing ${n.length} closing bracket${1 === n.length ? "" : "s"} (\`}\`)`;
            throw new Error(t)
        }
        return i.join("")
    }
}
, function(t, e, n) {
    const r = n(38)
      , i = n(12)
      , s = n(16)
      , o = Symbol("log-factories");
    t.exports = new class extends r {
        constructor() {
            super({
                name: "default"
            }),
            this.cache = {
                default: this
            },
            this[o] = {
                MethodFactory: i,
                PrefixFactory: s
            }
        }
        get factories() {
            return this[o]
        }
        get loggers() {
            return this.cache
        }
        create(t) {
            let e;
            e = "string" == typeof t ? {
                name: t
            } : Object.assign({}, t),
            e.id || (e.id = e.name);
            const {name: n, id: i} = e
              , s = {
                level: this.level
            };
            if ("string" != typeof n || !n || !n.length)
                throw new TypeError("You must supply a name when creating a logger.");
            let o = this.cache[i];
            return o || (o = new r(Object.assign({}, s, e)),
            this.cache[i] = o),
            o
        }
    }
    ,
    t.exports.default = t.exports
}
, function(t, e, n) {
    const r = n(16)
      , i = n(12)
      , s = {
        factory: null,
        level: "warn",
        name: +new Date,
        prefix: null
    };
    t.exports = class {
        constructor(t) {
            if (this.type = "LogLevel",
            this.options = Object.assign({}, s, t),
            this.methodFactory = t.factory,
            !this.methodFactory) {
                const e = t.prefix ? new r(this,t.prefix) : new i(this);
                this.methodFactory = e
            }
            this.methodFactory.logger || (this.methodFactory.logger = this),
            this.name = t.name || "<unknown>",
            this.level = this.options.level
        }
        get factory() {
            return this.methodFactory
        }
        set factory(t) {
            t.logger = this,
            this.methodFactory = t,
            this.methodFactory.replaceMethods(this.level)
        }
        disable() {
            this.level = this.levels.SILENT
        }
        enable() {
            this.level = this.levels.TRACE
        }
        get level() {
            return this.currentLevel
        }
        set level(t) {
            const e = this.methodFactory.distillLevel(t);
            if (!1 === e || null == e)
                throw new RangeError(`loglevelnext: setLevel() called with invalid level: ${t}`);
            this.currentLevel = e,
            this.methodFactory.replaceMethods(e),
            "undefined" == typeof console && e < this.levels.SILENT && console.warn("loglevelnext: console is undefined. The log will produce no output.")
        }
        get levels() {
            return this.methodFactory.levels
        }
    }
}
, function(t, e, n) {
    for (var r = self.crypto || self.msCrypto, i = "-_", s = 36; s--; )
        i += s.toString(36);
    for (s = 36; s-- - 10; )
        i += s.toString(36).toUpperCase();
    t.exports = function(t) {
        var e = ""
          , n = r.getRandomValues(new Uint8Array(t || 21));
        for (s = t || 21; s--; )
            e += i[63 & n[s]];
        return e
    }
}
, function(t, e) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
        var r = new Uint8Array(16);
        t.exports = function() {
            return n(r),
            r
        }
    } else {
        var i = new Array(16);
        t.exports = function() {
            for (var t, e = 0; e < 16; e++)
                0 == (3 & e) && (t = 4294967296 * Math.random()),
                i[e] = t >>> ((3 & e) << 3) & 255;
            return i
        }
    }
}
, function(t, e) {
    for (var n = [], r = 0; r < 256; ++r)
        n[r] = (r + 256).toString(16).substr(1);
    t.exports = function(t, e) {
        var r = e || 0
          , i = n;
        return [i[t[r++]], i[t[r++]], i[t[r++]], i[t[r++]], "-", i[t[r++]], i[t[r++]], "-", i[t[r++]], i[t[r++]], "-", i[t[r++]], i[t[r++]], "-", i[t[r++]], i[t[r++]], i[t[r++]], i[t[r++]], i[t[r++]], i[t[r++]]].join("")
    }
}
, function(t, e) {
    function n(e) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = n = function(t) {
            return typeof t
        }
        : t.exports = n = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        ,
        n(e)
    }
    t.exports = n
}
, function(t, e) {
    t.exports = function(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
}
, function(t, e) {
    t.exports = function(t) {
        return -1 !== Function.toString.call(t).indexOf("[native code]")
    }
}
, function(t, e, n) {
    var r = n(13);
    function i() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
            ))),
            !0
        } catch (t) {
            return !1
        }
    }
    function s(e, n, o) {
        return i() ? t.exports = s = Reflect.construct : t.exports = s = function(t, e, n) {
            var i = [null];
            i.push.apply(i, e);
            var s = new (Function.bind.apply(t, i));
            return n && r(s, n.prototype),
            s
        }
        ,
        s.apply(null, arguments)
    }
    t.exports = s
}
, function(t, e, n) {
    "use strict";
    var r = n(5)
      , i = n(17)
      , s = n(47)
      , o = n(23);
    function a(t) {
        var e = new s(t)
          , n = i(s.prototype.request, e);
        return r.extend(n, s.prototype, e),
        r.extend(n, e),
        n
    }
    var u = a(n(20));
    u.Axios = s,
    u.create = function(t) {
        return a(o(u.defaults, t))
    }
    ,
    u.Cancel = n(24),
    u.CancelToken = n(60),
    u.isCancel = n(19),
    u.all = function(t) {
        return Promise.all(t)
    }
    ,
    u.spread = n(61),
    t.exports = u,
    t.exports.default = u
}
, function(t, e, n) {
    "use strict";
    var r = n(5)
      , i = n(18)
      , s = n(48)
      , o = n(49)
      , a = n(23);
    function u(t) {
        this.defaults = t,
        this.interceptors = {
            request: new s,
            response: new s
        }
    }
    u.prototype.request = function(t) {
        "string" == typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {},
        (t = a(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
        var e = [o, void 0]
          , n = Promise.resolve(t);
        for (this.interceptors.request.forEach((function(t) {
            e.unshift(t.fulfilled, t.rejected)
        }
        )),
        this.interceptors.response.forEach((function(t) {
            e.push(t.fulfilled, t.rejected)
        }
        )); e.length; )
            n = n.then(e.shift(), e.shift());
        return n
    }
    ,
    u.prototype.getUri = function(t) {
        return t = a(this.defaults, t),
        i(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
    }
    ,
    r.forEach(["delete", "get", "head", "options"], (function(t) {
        u.prototype[t] = function(e, n) {
            return this.request(r.merge(n || {}, {
                method: t,
                url: e
            }))
        }
    }
    )),
    r.forEach(["post", "put", "patch"], (function(t) {
        u.prototype[t] = function(e, n, i) {
            return this.request(r.merge(i || {}, {
                method: t,
                url: e,
                data: n
            }))
        }
    }
    )),
    t.exports = u
}
, function(t, e, n) {
    "use strict";
    var r = n(5);
    function i() {
        this.handlers = []
    }
    i.prototype.use = function(t, e) {
        return this.handlers.push({
            fulfilled: t,
            rejected: e
        }),
        this.handlers.length - 1
    }
    ,
    i.prototype.eject = function(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    ,
    i.prototype.forEach = function(t) {
        r.forEach(this.handlers, (function(e) {
            null !== e && t(e)
        }
        ))
    }
    ,
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    var r = n(5)
      , i = n(50)
      , s = n(19)
      , o = n(20);
    function a(t) {
        t.cancelToken && t.cancelToken.throwIfRequested()
    }
    t.exports = function(t) {
        return a(t),
        t.headers = t.headers || {},
        t.data = i(t.data, t.headers, t.transformRequest),
        t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers),
        r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
            delete t.headers[e]
        }
        )),
        (t.adapter || o.adapter)(t).then((function(e) {
            return a(t),
            e.data = i(e.data, e.headers, t.transformResponse),
            e
        }
        ), (function(e) {
            return s(e) || (a(t),
            e && e.response && (e.response.data = i(e.response.data, e.response.headers, t.transformResponse))),
            Promise.reject(e)
        }
        ))
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(5);
    t.exports = function(t, e, n) {
        return r.forEach(n, (function(n) {
            t = n(t, e)
        }
        )),
        t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(5);
    t.exports = function(t, e) {
        r.forEach(t, (function(n, r) {
            r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n,
            delete t[r])
        }
        ))
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(22);
    t.exports = function(t, e, n) {
        var i = n.config.validateStatus;
        !i || i(n.status) ? t(n) : e(r("Request failed with status code " + n.status, n.config, null, n.request, n))
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e, n, r, i) {
        return t.config = e,
        n && (t.code = n),
        t.request = r,
        t.response = i,
        t.isAxiosError = !0,
        t.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }
        ,
        t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(55)
      , i = n(56);
    t.exports = function(t, e) {
        return t && !r(e) ? i(t, e) : e
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(5)
      , i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    t.exports = function(t) {
        var e, n, s, o = {};
        return t ? (r.forEach(t.split("\n"), (function(t) {
            if (s = t.indexOf(":"),
            e = r.trim(t.substr(0, s)).toLowerCase(),
            n = r.trim(t.substr(s + 1)),
            e) {
                if (o[e] && i.indexOf(e) >= 0)
                    return;
                o[e] = "set-cookie" === e ? (o[e] ? o[e] : []).concat([n]) : o[e] ? o[e] + ", " + n : n
            }
        }
        )),
        o) : o
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(5);
    t.exports = r.isStandardBrowserEnv() ? function() {
        var t, e = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
        function i(t) {
            var r = t;
            return e && (n.setAttribute("href", r),
            r = n.href),
            n.setAttribute("href", r),
            {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }
        return t = i(window.location.href),
        function(e) {
            var n = r.isString(e) ? i(e) : e;
            return n.protocol === t.protocol && n.host === t.host
        }
    }() : function() {
        return !0
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(5);
    t.exports = r.isStandardBrowserEnv() ? {
        write: function(t, e, n, i, s, o) {
            var a = [];
            a.push(t + "=" + encodeURIComponent(e)),
            r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
            r.isString(i) && a.push("path=" + i),
            r.isString(s) && a.push("domain=" + s),
            !0 === o && a.push("secure"),
            document.cookie = a.join("; ")
        },
        read: function(t) {
            var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
            return e ? decodeURIComponent(e[3]) : null
        },
        remove: function(t) {
            this.write(t, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}
, function(t, e, n) {
    "use strict";
    var r = n(24);
    function i(t) {
        if ("function" != typeof t)
            throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise((function(t) {
            e = t
        }
        ));
        var n = this;
        t((function(t) {
            n.reason || (n.reason = new r(t),
            e(n.reason))
        }
        ))
    }
    i.prototype.throwIfRequested = function() {
        if (this.reason)
            throw this.reason
    }
    ,
    i.source = function() {
        var t;
        return {
            token: new i((function(e) {
                t = e
            }
            )),
            cancel: t
        }
    }
    ,
    t.exports = i
}
, function(t, e, n) {
    "use strict";
    t.exports = function(t) {
        return function(e) {
            return t.apply(null, e)
        }
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(1)
      , i = n.n(r)
      , s = n(3)
      , o = n.n(s)
      , a = n(2)
      , u = n.n(a)
      , c = n(4)
      , l = n.n(c)
      , h = n(0)
      , f = n.n(h)
      , p = function() {
        function t() {
            u()(this, t),
            f()(this, "_consented", 3),
            f()(this, "_vendorListVersion", void 0)
        }
        return l()(t, [{
            key: "gdprDetails",
            value: function() {
                var t, e, n, r, i, s, o = 0, a = 1, u = 3;
                if (window.__cmp) {
                    window.__cmp("getVendorConsents", null, (function(e) {
                        t = e
                    }
                    )),
                    window.__cmp("getVendorList", null, (function(t) {
                        e = t
                    }
                    )),
                    window.__cmp("getConsentData", null, (function(t) {
                        n = t
                    }
                    ));
                    var c = t && t.purposeConsents || []
                      , l = t && t.vendorConsents || []
                      , h = Object.keys(c).map((function(t) {
                        return c[t]
                    }
                    ))
                      , f = Object.keys(l).map((function(t) {
                        return l[t]
                    }
                    ));
                    return {
                        getConsentValue: (0 === h.length && 0 === f.length ? r = u : (i = h.every((function(t) {
                            return !1 === t
                        }
                        )),
                        s = f.every((function(t) {
                            return !1 === t
                        }
                        )),
                        r = i || s ? o : a),
                        r),
                        vendorList: e,
                        consentData: n,
                        vendorData: t
                    }
                }
                return {
                    getConsentValue: u
                }
            }
        }, {
            key: "consented",
            get: function() {
                return this._consented
            },
            set: function(t) {
                this._consented = t
            }
        }, {
            key: "vendorListVersion",
            get: function() {
                return this._vendorListVersion
            },
            set: function(t) {
                this._vendorListVersion = t
            }
        }]),
        t
    }()
      , d = function t(e) {
        u()(this, t),
        f()(this, "id", null),
        f()(this, "host", null),
        f()(this, "path", null),
        f()(this, "referrer", null),
        f()(this, "start", null),
        f()(this, "finish", null),
        this.host = window.location.hostname,
        this.path = window.location.pathname,
        this.referrer = document.referrer,
        this.start = (new Date).getTime(),
        this.finish = null,
        this.id = e
    }
      , g = function t(e, n) {
        u()(this, t),
        f()(this, "device", null),
        f()(this, "browserLanguage", null),
        f()(this, "gdpr", null),
        this.device = e,
        this.browserLanguage = n,
        this.gdpr = new p
    }
      , m = n(25)
      , y = n.n(m)
      , v = function() {
        function t() {
            u()(this, t)
        }
        return l()(t, null, [{
            key: "getDeviceType",
            value: function() {
                return /bot|googlebot|crawler|spider|robot|crawling|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent.toLowerCase()) ? "bot" : /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(navigator.userAgent) ? "tablet" : /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) ? "mobile" : "desktop"
            }
        }, {
            key: "getBrowserLanguage",
            value: function() {
                try {
                    return [].concat(navigator.languages, navigator.language, navigator.userLanguage, navigator.browserLanguage, navigator.systemLanguage).filter(Boolean)[0].split("-")[0]
                } catch (t) {
                    return "unknown"
                }
            }
        }]),
        t
    }()
      , b = y()({
        name: "Leya"
    })
      , w = n(10)
      , _ = n.n(w)
      , k = n(7)
      , x = n.n(k)
      , L = n(6)
      , E = n.n(L)
      , S = n(8)
      , O = n.n(S)
      , j = n(9)
      , T = n.n(j)
      , z = function(t) {
        function e() {
            return u()(this, e),
            x()(this, E()(e).apply(this, arguments))
        }
        return O()(e, t),
        e
    }(T()(Error))
      , M = function(t) {
        function e() {
            return u()(this, e),
            x()(this, E()(e).apply(this, arguments))
        }
        return O()(e, t),
        e
    }(T()(Error))
      , C = function() {
        function t() {
            u()(this, t),
            f()(this, "session", null),
            f()(this, "user", null),
            f()(this, "tags", null),
            f()(this, "key", null),
            this.user = new g(v.getDeviceType(),v.getBrowserLanguage()),
            this.tags = []
        }
        var e, n, r, s, a, c, h, p, m, y, w;
        return l()(t, [{
            key: "setKey",
            value: (w = o()(i.a.mark((function t(e) {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            this.key = e;
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function(t) {
                return w.apply(this, arguments)
            }
            )
        }, {
            key: "getKey",
            value: (y = o()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", this.key);
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return y.apply(this, arguments)
            }
            )
        }, {
            key: "startSession",
            value: (m = o()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (null !== this.session) {
                                t.next = 5;
                                break
                            }
                            this.session = new d(_()()),
                            b.debug("Started new session " + this.session.id),
                            t.next = 10;
                            break;
                        case 5:
                            if (null !== this.session.finish) {
                                t.next = 8;
                                break
                            }
                            throw b.error("A session is already open, close it before starting a new one"),
                            new z;
                        case 8:
                            this.session = new d(_()()),
                            b.debug("Started new session " + this.session.id);
                        case 10:
                            return t.abrupt("return", this.getSession());
                        case 11:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return m.apply(this, arguments)
            }
            )
        }, {
            key: "finishSession",
            value: (p = o()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (null === this.session) {
                                t.next = 10;
                                break
                            }
                            if (null !== this.session.finish) {
                                t.next = 7;
                                break
                            }
                            return b.debug("Ending session " + this.session.id),
                            this.session.finish = (new Date).getTime(),
                            t.abrupt("return", Leya.Events.recordSession());
                        case 7:
                            b.warn("Session already closed at " + this.session.finish);
                        case 8:
                            t.next = 12;
                            break;
                        case 10:
                            throw b.error("No session, start one first"),
                            new M;
                        case 12:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return p.apply(this, arguments)
            }
            )
        }, {
            key: "setTags",
            value: (h = o()(i.a.mark((function t(e) {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (!Array.isArray(e)) {
                                t.next = 9;
                                break
                            }
                            if (e.length % 2 != 0) {
                                t.next = 6;
                                break
                            }
                            e = e.map((function(t) {
                                return t.toLowerCase()
                            }
                            )),
                            this.tags = e,
                            t.next = 7;
                            break;
                        case 6:
                            throw new Error("array argument requires pair size, two elements for each key, value pair: ['key1', 'value1', 'key2', 'value2']");
                        case 7:
                            t.next = 10;
                            break;
                        case 9:
                            throw new Error("array argument is required");
                        case 10:
                            return t.abrupt("return", this.getTags());
                        case 11:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function(t) {
                return h.apply(this, arguments)
            }
            )
        }, {
            key: "getTags",
            value: (c = o()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", this.tags);
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return c.apply(this, arguments)
            }
            )
        }, {
            key: "getSession",
            value: (a = o()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object.assign({}, this.session));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return a.apply(this, arguments)
            }
            )
        }, {
            key: "getUser",
            value: (s = o()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", Object.assign({}, this.user));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return s.apply(this, arguments)
            }
            )
        }, {
            key: "setUserGdprConsent",
            value: (r = o()(i.a.mark((function t(e) {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return this.user.gdpr.consented = e,
                            t.abrupt("return", this.getSession());
                        case 2:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function(t) {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "setGdprVendorListVersion",
            value: (n = o()(i.a.mark((function t(e) {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return this.user.gdpr.vendorListVersion = e,
                            t.abrupt("return", this.getSession());
                        case 2:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function(t) {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "isSessionOpen",
            value: (e = o()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", null !== this.session && null === this.session.finish);
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return e.apply(this, arguments)
            }
            )
        }]),
        t
    }()
      , A = function() {
        function t() {
            u()(this, t),
            f()(this, "_id", null),
            f()(this, "_bat", null),
            f()(this, "_status", null),
            f()(this, "_cpm", null),
            f()(this, "_start", null),
            f()(this, "_finish", null)
        }
        return l()(t, [{
            key: "id",
            get: function() {
                return this._id
            },
            set: function(t) {
                this._id = t
            }
        }, {
            key: "bat",
            get: function() {
                return this._bat
            },
            set: function(t) {
                this._bat = t
            }
        }, {
            key: "status",
            get: function() {
                return this._status
            },
            set: function(t) {
                this._status = t
            }
        }, {
            key: "cpm",
            get: function() {
                return this._cpm
            },
            set: function(t) {
                this._cpm = t
            }
        }, {
            key: "start",
            get: function() {
                return this._start
            },
            set: function(t) {
                this._start = t
            }
        }, {
            key: "finish",
            get: function() {
                return this._finish
            },
            set: function(t) {
                this._finish = t
            }
        }], [{
            key: "from",
            value: function(e) {
                var n = new t;
                return n.id = e.bidder,
                n.bat = e.isAfterTimeout,
                n.status = e.status,
                n.cpm = e.cpm,
                n.start = e.start,
                n.finish = e.finish,
                n
            }
        }]),
        t
    }()
      , N = function() {
        function t() {
            u()(this, t),
            f()(this, "_id", null),
            f()(this, "_status", null),
            f()(this, "_timeout", null),
            f()(this, "_start", null),
            f()(this, "_finish", null),
            f()(this, "_sizes", []),
            f()(this, "_bidders", [])
        }
        return l()(t, [{
            key: "id",
            get: function() {
                return this._id
            },
            set: function(t) {
                this._id = t
            }
        }, {
            key: "status",
            get: function() {
                return this._status
            },
            set: function(t) {
                this._status = t
            }
        }, {
            key: "timeout",
            get: function() {
                return this._timeout
            },
            set: function(t) {
                this._timeout = t
            }
        }, {
            key: "start",
            get: function() {
                return this._start
            },
            set: function(t) {
                this._start = t
            }
        }, {
            key: "finish",
            get: function() {
                return this._finish
            },
            set: function(t) {
                this._finish = t
            }
        }, {
            key: "bidders",
            get: function() {
                return this._bidders
            },
            set: function(t) {
                this._bidders = t
            }
        }, {
            key: "sizes",
            get: function() {
                return this._sizes
            },
            set: function(t) {
                this._sizes = t
            }
        }], [{
            key: "from",
            value: function(e) {
                var n = new t;
                n.id = e.adUnitPath || e.adUnit,
                n.status = e.status,
                n.timeout = e.timeout,
                n.start = e.start,
                n.finish = e.finish,
                n.sizes = e.adUnitSizes || [];
                var r = [];
                return Object.keys(e.bidders).forEach((function(t) {
                    return r.push(A.from(e.bidders[t]))
                }
                )),
                n.bidders = r,
                n
            }
        }]),
        t
    }()
      , P = function() {
        function t() {
            u()(this, t),
            f()(this, "_session", null),
            f()(this, "_host", null),
            f()(this, "_path", null),
            f()(this, "_referrer", null),
            f()(this, "_device", null),
            f()(this, "_gdprc", null),
            f()(this, "_tags", []),
            f()(this, "_id", null),
            f()(this, "_timeout", null),
            f()(this, "_start", null),
            f()(this, "_finish", null),
            f()(this, "_adunits", [])
        }
        return l()(t, [{
            key: "session",
            get: function() {
                return this._session
            },
            set: function(t) {
                this._session = t
            }
        }, {
            key: "host",
            get: function() {
                return this._host
            },
            set: function(t) {
                this._host = t
            }
        }, {
            key: "path",
            get: function() {
                return this._path
            },
            set: function(t) {
                this._path = t
            }
        }, {
            key: "referrer",
            get: function() {
                return this._referrer
            },
            set: function(t) {
                this._referrer = t
            }
        }, {
            key: "device",
            get: function() {
                return this._device
            },
            set: function(t) {
                this._device = t
            }
        }, {
            key: "gdprc",
            get: function() {
                return this._gdprc
            },
            set: function(t) {
                this._gdprc = t
            }
        }, {
            key: "tags",
            get: function() {
                return this._tags
            },
            set: function(t) {
                this._tags = t
            }
        }, {
            key: "id",
            get: function() {
                return this._id
            },
            set: function(t) {
                this._id = t
            }
        }, {
            key: "timeout",
            get: function() {
                return this._timeout
            },
            set: function(t) {
                this._timeout = t
            }
        }, {
            key: "start",
            get: function() {
                return this._start
            },
            set: function(t) {
                this._start = t
            }
        }, {
            key: "finish",
            get: function() {
                return this._finish
            },
            set: function(t) {
                this._finish = t
            }
        }, {
            key: "adunits",
            get: function() {
                return this._adunits
            },
            set: function(t) {
                this._adunits = t
            }
        }], [{
            key: "from",
            value: function(e) {
                var n = new t;
                n.id = e.id,
                n.timeout = e.timeout,
                n.start = e.start,
                n.finish = e.finish,
                e.gdpr_consent && (n.gdprc = e.gdpr_consent);
                var r = [];
                return Object.keys(e.adUnits).forEach((function(t) {
                    return r.push(N.from(e.adUnits[t]))
                }
                )),
                n.adunits = r,
                n
            }
        }]),
        t
    }()
      , R = function() {
        function t() {
            u()(this, t),
            f()(this, "_session", null),
            f()(this, "_host", null),
            f()(this, "_path", null),
            f()(this, "_referrer", null),
            f()(this, "_device", null),
            f()(this, "_gdprc", null),
            f()(this, "_tags", []),
            f()(this, "_ad_unit", null),
            f()(this, "_winner", null),
            f()(this, "_cpm", null),
            f()(this, "_media_type", null),
            f()(this, "_size", null),
            f()(this, "_auction_start", null),
            f()(this, "_auction_finish", null),
            f()(this, "_timeout", null),
            f()(this, "_auction_id", null),
            f()(this, "_status", null),
            f()(this, "_bidders", [])
        }
        return l()(t, [{
            key: "session",
            get: function() {
                return this._session
            },
            set: function(t) {
                this._session = t
            }
        }, {
            key: "host",
            get: function() {
                return this._host
            },
            set: function(t) {
                this._host = t
            }
        }, {
            key: "path",
            get: function() {
                return this._path
            },
            set: function(t) {
                this._path = t
            }
        }, {
            key: "referrer",
            get: function() {
                return this._referrer
            },
            set: function(t) {
                this._referrer = t
            }
        }, {
            key: "device",
            get: function() {
                return this._device
            },
            set: function(t) {
                this._device = t
            }
        }, {
            key: "gdprc",
            get: function() {
                return this._gdprc
            },
            set: function(t) {
                this._gdprc = t
            }
        }, {
            key: "tags",
            get: function() {
                return this._tags
            },
            set: function(t) {
                this._tags = t
            }
        }, {
            key: "ad_unit",
            get: function() {
                return this._ad_unit
            },
            set: function(t) {
                this._ad_unit = t
            }
        }, {
            key: "winner",
            get: function() {
                return this._winner
            },
            set: function(t) {
                this._winner = t
            }
        }, {
            key: "cpm",
            get: function() {
                return this._cpm
            },
            set: function(t) {
                this._cpm = t
            }
        }, {
            key: "media_type",
            get: function() {
                return this._media_type
            },
            set: function(t) {
                this._media_type = t
            }
        }, {
            key: "size",
            get: function() {
                return this._size
            },
            set: function(t) {
                this._size = t
            }
        }, {
            key: "auction_start",
            get: function() {
                return this._auction_start
            },
            set: function(t) {
                this._auction_start = t
            }
        }, {
            key: "auction_finish",
            get: function() {
                return this._auction_finish
            },
            set: function(t) {
                this._auction_finish = t
            }
        }, {
            key: "timeout",
            get: function() {
                return this._timeout
            },
            set: function(t) {
                this._timeout = t
            }
        }, {
            key: "auction_id",
            get: function() {
                return this._auction_id
            },
            set: function(t) {
                this._auction_id = t
            }
        }, {
            key: "status",
            get: function() {
                return this._status
            },
            set: function(t) {
                this._status = t
            }
        }, {
            key: "bidders",
            get: function() {
                return this._bidders
            },
            set: function(t) {
                this._bidders = t
            }
        }], [{
            key: "from",
            value: function(e) {
                var n = new t;
                n.ad_unit = e.adUnitPath || e.adUnit,
                n.winner = e.bidder,
                n.cpm = e.cpm,
                n.media_type = e.mediaType,
                e.size.width && e.size.height && (n.size = e.size.width + "x" + e.size.height),
                n.auction_id = e.auction.id,
                n.gdprc = e.auction.gdpr_consent,
                n.auction_start = e.auction.start,
                n.auction_finish = e.auction.finish,
                n.status = e.auction.status,
                n.timeout = e.auction.timeout;
                var r = [];
                return Object.keys(e.auction.bidders).forEach((function(t) {
                    return r.push(A.from(e.auction.bidders[t]))
                }
                )),
                n.bidders = r,
                n
            }
        }]),
        t
    }()
      , I = function() {
        function t() {
            u()(this, t),
            f()(this, "_session", null),
            f()(this, "_host", null),
            f()(this, "_path", null),
            f()(this, "_referrer", null),
            f()(this, "_device", null),
            f()(this, "_gdprc", null),
            f()(this, "_tags", []),
            f()(this, "_ad_unit", null),
            f()(this, "_cpm", null),
            f()(this, "_bidder", null),
            f()(this, "_bidder_start", null),
            f()(this, "_bidder_finish", null),
            f()(this, "_media_type", null),
            f()(this, "_size", null),
            f()(this, "_auction_id", null),
            f()(this, "_auction_start", null),
            f()(this, "_auction_finish", null),
            f()(this, "_status", null),
            f()(this, "_timeout", null),
            f()(this, "_bidders", [])
        }
        return l()(t, [{
            key: "session",
            get: function() {
                return this._session
            },
            set: function(t) {
                this._session = t
            }
        }, {
            key: "host",
            get: function() {
                return this._host
            },
            set: function(t) {
                this._host = t
            }
        }, {
            key: "path",
            get: function() {
                return this._path
            },
            set: function(t) {
                this._path = t
            }
        }, {
            key: "referrer",
            get: function() {
                return this._referrer
            },
            set: function(t) {
                this._referrer = t
            }
        }, {
            key: "device",
            get: function() {
                return this._device
            },
            set: function(t) {
                this._device = t
            }
        }, {
            key: "gdprc",
            get: function() {
                return this._gdprc
            },
            set: function(t) {
                this._gdprc = t
            }
        }, {
            key: "tags",
            get: function() {
                return this._tags
            },
            set: function(t) {
                this._tags = t
            }
        }, {
            key: "ad_unit",
            get: function() {
                return this._ad_unit
            },
            set: function(t) {
                this._ad_unit = t
            }
        }, {
            key: "cpm",
            get: function() {
                return this._cpm
            },
            set: function(t) {
                this._cpm = t
            }
        }, {
            key: "bidder",
            get: function() {
                return this._bidder
            },
            set: function(t) {
                this._bidder = t
            }
        }, {
            key: "bidder_start",
            get: function() {
                return this._bidder_start
            },
            set: function(t) {
                this._bidder_start = t
            }
        }, {
            key: "bidder_finish",
            get: function() {
                return this._bidder_finish
            },
            set: function(t) {
                this._bidder_finish = t
            }
        }, {
            key: "media_type",
            get: function() {
                return this._media_type
            },
            set: function(t) {
                this._media_type = t
            }
        }, {
            key: "size",
            get: function() {
                return this._size
            },
            set: function(t) {
                this._size = t
            }
        }, {
            key: "auction_id",
            get: function() {
                return this._auction_id
            },
            set: function(t) {
                this._auction_id = t
            }
        }, {
            key: "auction_start",
            get: function() {
                return this._auction_start
            },
            set: function(t) {
                this._auction_start = t
            }
        }, {
            key: "auction_finish",
            get: function() {
                return this._auction_finish
            },
            set: function(t) {
                this._auction_finish = t
            }
        }, {
            key: "status",
            get: function() {
                return this._status
            },
            set: function(t) {
                this._status = t
            }
        }, {
            key: "timeout",
            get: function() {
                return this._timeout
            },
            set: function(t) {
                this._timeout = t
            }
        }, {
            key: "bidders",
            get: function() {
                return this._bidders
            },
            set: function(t) {
                this._bidders = t
            }
        }], [{
            key: "from",
            value: function(e) {
                var n = new t;
                n.ad_unit = e.adUnitPath || e.adUnit,
                n.cpm = e.cpm,
                n.bidder = e.bidder,
                n.bidder_start = e.start,
                n.bidder_finish = e.finish,
                n.media_type = e.mediaType,
                e.size.width && e.size.height && (n.size = e.size.width + "x" + e.size.height),
                n.auction_id = e.auction.id,
                n.gdprc = e.auction.gdpr_consent,
                n.status = e.auction.status,
                n.auction_start = e.auction.start,
                n.auction_finish = e.auction.finish,
                n.timeout = e.auction.timeout;
                var r = [];
                return Object.keys(e.auction.bidders).forEach((function(t) {
                    return r.push(A.from(e.auction.bidders[t]))
                }
                )),
                n.bidders = r,
                n
            }
        }]),
        t
    }()
      , U = function() {
        function t() {
            u()(this, t)
        }
        return l()(t, null, [{
            key: "sanitizeTags",
            value: function(t) {
                if (Array.isArray(t) && t.length > 0 && t.length % 2 == 0) {
                    for (var e = {}, n = 0; n < t.length; n += 2)
                        e[t[n].toLowerCase()] = t[n + 1].toLowerCase();
                    var r = {};
                    return Object.keys(e).sort().forEach((function(t) {
                        r[t] = e[t]
                    }
                    )),
                    Object.entries(r).flat()
                }
                return []
            }
        }, {
            key: "emptyArray",
            value: function(t) {
                return !(Array.isArray(t) && t.length)
            }
        }]),
        t
    }()
      , B = "pv"
      , F = "s"
      , q = "pb_a"
      , D = "pb_i"
      , V = "pb_bat"
      , $ = "a9_a"
      , G = "a9_i"
      , J = function() {
        function t(e) {
            u()(this, t),
            f()(this, "apiClient", null),
            this.apiClient = e
        }
        var e, n, r;
        return l()(t, [{
            key: "handleAuctionEvent",
            value: (r = o()(i.a.mark((function t(e) {
                var n, r, s, o, a, u;
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Leya.isSessionOpen();
                        case 2:
                            if (!t.sent) {
                                t.next = 29;
                                break
                            }
                            return t.next = 5,
                            Leya.getSession();
                        case 5:
                            return n = t.sent,
                            t.next = 8,
                            Leya.getUser();
                        case 8:
                            return r = t.sent,
                            t.next = 11,
                            Leya.getTags();
                        case 11:
                            return s = t.sent,
                            b.debug("Handling Prebid Auction event on session " + n.id),
                            (o = P.from(e)).session = n.id,
                            o.host = n.host,
                            o.path = n.path,
                            o.referrer = n.referrer,
                            o.device = r.device,
                            o.gdprc = 3 === o.gdprc && 3 === r.gdpr.consented || 3 === o.gdprc ? r.gdpr.consented : o.gdprc,
                            o.gdprvl = r.gdpr.vendorListVersion,
                            o.tags = U.sanitizeTags(s),
                            b.debug("Flattening auction event: " + JSON.stringify(o)),
                            a = this.flattenAuction(o),
                            b.debug("Flattened auction rows: " + JSON.stringify(a)),
                            u = {
                                type: q,
                                data: a
                            },
                            t.abrupt("return", this.apiClient.sendEvent(u));
                        case 29:
                            throw b.error("No session"),
                            new M;
                        case 31:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function(t) {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "handleImpressionEvent",
            value: (n = o()(i.a.mark((function t(e) {
                var n, r, s, o, a, u;
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Leya.isSessionOpen();
                        case 2:
                            if (!t.sent) {
                                t.next = 29;
                                break
                            }
                            return t.next = 5,
                            Leya.getSession();
                        case 5:
                            return n = t.sent,
                            t.next = 8,
                            Leya.getUser();
                        case 8:
                            return r = t.sent,
                            t.next = 11,
                            Leya.getTags();
                        case 11:
                            return s = t.sent,
                            b.debug("Handling Prebid Impression event on session " + n.id),
                            (o = R.from(e)).session = n.id,
                            o.host = n.host,
                            o.path = n.path,
                            o.referrer = n.referrer,
                            o.device = r.device,
                            o.gdprc = 3 === o.gdprc && 3 === r.gdpr.consented || 3 === o.gdprc ? r.gdpr.consented : o.gdprc,
                            o.gdprvl = r.gdpr.vendorListVersion,
                            o.tags = U.sanitizeTags(s),
                            b.debug("Flattening impression event: " + JSON.stringify(o)),
                            a = this.flattenImpression(o),
                            b.debug("Flattened impression rows: " + JSON.stringify(a)),
                            u = {
                                type: D,
                                data: a
                            },
                            t.abrupt("return", this.apiClient.sendEvent(u));
                        case 29:
                            throw b.error("No session"),
                            new M;
                        case 31:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function(t) {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "handleBidAfterTimeoutEvent",
            value: (e = o()(i.a.mark((function t(e) {
                var n, r, s, o, a, u;
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Leya.isSessionOpen();
                        case 2:
                            if (!t.sent) {
                                t.next = 29;
                                break
                            }
                            return t.next = 5,
                            Leya.getSession();
                        case 5:
                            return n = t.sent,
                            t.next = 8,
                            Leya.getUser();
                        case 8:
                            return r = t.sent,
                            t.next = 11,
                            Leya.getTags();
                        case 11:
                            return s = t.sent,
                            b.debug("Handling Prebid BidAfterTimeout event on session " + n.id),
                            (o = I.from(e)).session = n.id,
                            o.host = n.host,
                            o.path = n.path,
                            o.referrer = n.referrer,
                            o.device = r.device,
                            o.gdprc = 3 === o.gdprc && 3 === r.gdpr.consented || 3 === o.gdprc ? r.gdpr.consented : o.gdprc,
                            o.gdprvl = r.gdpr.vendorListVersion,
                            o.tags = U.sanitizeTags(s),
                            b.debug("Flattening BidAfterTimeout event: " + JSON.stringify(o)),
                            a = this.flattenBidAfterTimeout(o),
                            b.debug("Flattened impression rows: " + JSON.stringify(a)),
                            u = {
                                type: V,
                                data: a
                            },
                            t.abrupt("return", this.apiClient.sendEvent(u));
                        case 29:
                            throw b.error("No session"),
                            new M;
                        case 31:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function(t) {
                return e.apply(this, arguments)
            }
            )
        }, {
            key: "flattenBidAfterTimeout",
            value: function(t) {
                var e = [];
                return t.bidders.forEach((function(n) {
                    e.push({
                        session: t.session,
                        host: t.host,
                        referrer: t.referrer,
                        path: t.path,
                        device: t.device,
                        gdprc: t.gdprc,
                        gdprvl: t.gdprvl,
                        tags: t.tags,
                        ad_unit_id: t.ad_unit,
                        bat_cpm: t.cpm,
                        bat_bidder: t.bidder,
                        bat_start: t.bidder_start,
                        bat_finish: t.bidder_finish,
                        media_type: t.media_type,
                        size: t.size,
                        auction_id: t.auction_id,
                        auction_start: t.auction_start,
                        auction_finish: t.auction_finish,
                        auction_timeout: t.timeout,
                        bidder_id: n.id,
                        bidder_bid_after_timeout: n.bat,
                        bidder_status: n.status,
                        bidder_cpm: n.cpm,
                        bidder_start: n.start,
                        bidder_finish: n.finish
                    })
                }
                )),
                e
            }
        }, {
            key: "flattenImpression",
            value: function(t) {
                var e = [];
                return t.bidders.forEach((function(n) {
                    e.push({
                        session: t.session,
                        host: t.host,
                        referrer: t.referrer,
                        path: t.path,
                        device: t.device,
                        gdprc: t.gdprc,
                        gdprvl: t.gdprvl,
                        tags: t.tags,
                        ad_unit_id: t.ad_unit,
                        winner_cpm: t.cpm,
                        winner_bidder: t.winner,
                        media_type: t.media_type,
                        size: t.size,
                        auction_id: t.auction_id,
                        auction_start: t.auction_start,
                        auction_finish: t.auction_finish,
                        auction_timeout: t.timeout,
                        bidder_id: n.id,
                        bidder_bid_after_timeout: n.bat,
                        bidder_status: n.status,
                        bidder_cpm: n.cpm,
                        bidder_start: n.start,
                        bidder_finish: n.finish
                    })
                }
                )),
                e
            }
        }, {
            key: "flattenAuction",
            value: function(t) {
                var e = [];
                return t.adunits.forEach((function(n) {
                    U.emptyArray(n.sizes) ? n.bidders.forEach((function(r) {
                        e.push({
                            session: t.session,
                            host: t.host,
                            referrer: t.referrer,
                            path: t.path,
                            device: t.device,
                            gdprc: t.gdprc,
                            gdprvl: t.gdprvl,
                            tags: t.tags,
                            auction_id: t.id,
                            auction_timeout: t.timeout,
                            auction_start: t.start,
                            auction_finish: t.finish,
                            ad_unit_id: n.id,
                            ad_unit_status: n.status,
                            ad_unit_timeout: n.timeout,
                            size: "unknown",
                            ad_unit_bid_start: n.start,
                            ad_unit_bid_finish: n.finish,
                            bidder_id: r.id,
                            bidder_bid_after_timeout: r.bat,
                            bidder_status: r.status,
                            bidder_cpm: r.cpm,
                            bidder_start: r.start,
                            bidder_finish: r.finish
                        })
                    }
                    )) : n.sizes.forEach((function(r) {
                        n.bidders.forEach((function(i) {
                            e.push({
                                session: t.session,
                                host: t.host,
                                referrer: t.referrer,
                                path: t.path,
                                device: t.device,
                                gdprc: t.gdprc,
                                gdprvl: t.gdprvl,
                                tags: t.tags,
                                auction_id: t.id,
                                auction_timeout: t.timeout,
                                auction_start: t.start,
                                auction_finish: t.finish,
                                ad_unit_id: n.id,
                                ad_unit_status: n.status,
                                ad_unit_timeout: n.timeout,
                                size: r,
                                ad_unit_bid_start: n.start,
                                ad_unit_bid_finish: n.finish,
                                bidder_id: i.id,
                                bidder_bid_after_timeout: i.bat,
                                bidder_status: i.status,
                                bidder_cpm: i.cpm,
                                bidder_start: i.start,
                                bidder_finish: i.finish
                            })
                        }
                        ))
                    }
                    ))
                }
                )),
                e
            }
        }]),
        t
    }()
      , H = function() {
        function t(e) {
            u()(this, t),
            f()(this, "apiClient", null),
            this.apiClient = e
        }
        var e, n;
        return l()(t, [{
            key: "recordPageView",
            value: (n = o()(i.a.mark((function t() {
                var e, n, r, s;
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Leya.isSessionOpen();
                        case 2:
                            if (!t.sent) {
                                t.next = 27;
                                break
                            }
                            return t.next = 5,
                            Leya.getSession();
                        case 5:
                            return e = t.sent,
                            t.next = 8,
                            Leya.getUser();
                        case 8:
                            return n = t.sent,
                            t.t0 = e.id,
                            t.t1 = e.host,
                            t.t2 = e.path,
                            t.t3 = e.referrer,
                            t.t4 = (new Date).getTime(),
                            t.t5 = n.device,
                            t.t6 = n.browserLanguage,
                            t.t7 = n.gdpr.consented,
                            t.t8 = n.gdpr.vendorListVersion,
                            t.next = 20,
                            Leya.getTags();
                        case 20:
                            return t.t9 = t.sent,
                            r = {
                                session: t.t0,
                                host: t.t1,
                                path: t.t2,
                                referrer: t.t3,
                                recorded_at: t.t4,
                                device: t.t5,
                                blan: t.t6,
                                gdprc: t.t7,
                                gdprvl: t.t8,
                                tags: t.t9
                            },
                            s = {
                                type: B,
                                data: [r]
                            },
                            b.debug("Recording page view event " + JSON.stringify(s)),
                            t.abrupt("return", this.apiClient.sendEvent(s));
                        case 27:
                            throw b.error("No session"),
                            new M;
                        case 29:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "recordSession",
            value: (e = o()(i.a.mark((function t() {
                var e, n, r, s;
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Leya.getSession();
                        case 2:
                            return e = t.sent,
                            t.next = 5,
                            Leya.getUser();
                        case 5:
                            if (n = t.sent,
                            null !== e) {
                                t.next = 9;
                                break
                            }
                            throw b.error("No session"),
                            new M;
                        case 9:
                            if (null !== e.finish) {
                                t.next = 12;
                                break
                            }
                            throw b.error("Session is still open"),
                            new z;
                        case 12:
                            return t.t0 = e.id,
                            t.t1 = e.host,
                            t.t2 = e.path,
                            t.t3 = e.referrer,
                            t.t4 = e.start,
                            t.t5 = e.finish,
                            t.t6 = n.device,
                            t.t7 = n.browserLanguage,
                            t.t8 = n.gdpr.consented,
                            t.t9 = n.gdpr.vendorListVersion,
                            t.next = 24,
                            Leya.getTags();
                        case 24:
                            return t.t10 = t.sent,
                            r = {
                                session: t.t0,
                                host: t.t1,
                                path: t.t2,
                                referrer: t.t3,
                                session_start: t.t4,
                                session_finish: t.t5,
                                device: t.t6,
                                blan: t.t7,
                                gdprc: t.t8,
                                gdprvl: t.t9,
                                tags: t.t10
                            },
                            s = {
                                type: F,
                                data: [r]
                            },
                            b.debug("Recording session closed event " + JSON.stringify(s)),
                            t.abrupt("return", this.apiClient.sendEvent(s));
                        case 29:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return e.apply(this, arguments)
            }
            )
        }]),
        t
    }()
      , K = function(t) {
        function e() {
            return u()(this, e),
            x()(this, E()(e).apply(this, arguments))
        }
        return O()(e, t),
        e
    }(T()(Error))
      , W = function(t) {
        function e() {
            return u()(this, e),
            x()(this, E()(e).apply(this, arguments))
        }
        return O()(e, t),
        e
    }(T()(Error))
      , X = function(t) {
        function e() {
            return u()(this, e),
            x()(this, E()(e).apply(this, arguments))
        }
        return O()(e, t),
        e
    }(T()(Error))
      , Y = function() {
        function t(e) {
            u()(this, t),
            f()(this, "apiClient", null),
            f()(this, "auctions", []),
            f()(this, "lineItemsMap", {}),
            this.apiClient = e,
            setInterval(function() {
                var t = (new Date).getTime();
                this.auctions = this.auctions.filter((function(e) {
                    return t < e.time + 18e5
                }
                )) || []
            }
            .bind(this), 1e3)
        }
        var e, n, r, s;
        return l()(t, [{
            key: "init",
            value: (s = o()(i.a.mark((function t() {
                var e = this;
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", this.apiClient.getA9LineItemsMap().then((function(t) {
                                t && t.data ? (e.lineItemsMap = t.data,
                                b.debug("A9 Line Items map: " + JSON.stringify(e.lineItemsMap))) : b.warn("Retrieved empty line items map, review configuration.")
                            }
                            )).catch((function(t) {
                                throw b.error("API error fetching A9 Line Items Map", t),
                                new X
                            }
                            )));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return s.apply(this, arguments)
            }
            )
        }, {
            key: "getLineItemsMap",
            value: (r = o()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", this.lineItemsMap);
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "handleAuctionEvent",
            value: (n = o()(i.a.mark((function t(e) {
                var n, r, s, o;
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Leya.isSessionOpen();
                        case 2:
                            if (!t.sent) {
                                t.next = 21;
                                break
                            }
                            return t.next = 5,
                            Leya.getSession();
                        case 5:
                            return n = t.sent,
                            t.next = 8,
                            Leya.getUser();
                        case 8:
                            return r = t.sent,
                            t.next = 11,
                            Leya.getTags();
                        case 11:
                            return s = t.sent,
                            b.debug("Handling A9 Auction event on session " + n.id),
                            b.debug(e),
                            this.validateAndEnhanceRawAuction(e),
                            e.response.forEach((function(t) {
                                t.auction_start = e.start,
                                t.auction_finish = e.finish,
                                t.session = n.id,
                                t.host = n.host,
                                t.path = n.path,
                                t.referrer = n.referrer,
                                t.device = r.device,
                                t.gdprc = r.gdpr.consented || 3,
                                t.gdprvl = r.gdpr.vendorListVersion,
                                t.tags = U.sanitizeTags(s)
                            }
                            )),
                            this.auctions.push({
                                data: e.response,
                                time: (new Date).getTime()
                            }),
                            o = {
                                type: $,
                                data: e.response
                            },
                            t.abrupt("return", this.apiClient.sendEvent(o));
                        case 21:
                            throw b.error("No session"),
                            new M;
                        case 23:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function(t) {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "handleImpressionEvent",
            value: (e = o()(i.a.mark((function t(e) {
                var n, r, s, o, a, u;
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Leya.isSessionOpen();
                        case 2:
                            if (!t.sent) {
                                t.next = 30;
                                break
                            }
                            return t.next = 5,
                            Leya.getSession();
                        case 5:
                            return n = t.sent,
                            t.next = 8,
                            Leya.getUser();
                        case 8:
                            return r = t.sent,
                            t.next = 11,
                            Leya.getTags();
                        case 11:
                            return s = t.sent,
                            b.debug("Handling A9 Impression event on session " + n.id),
                            b.debug(e),
                            this.validateAndEnhanceRawImpression(e),
                            o = this.auctions.flatMap((function(t) {
                                return t.data
                            }
                            )).find((function(t) {
                                return t.amzniid === e.amzniid && t.slotName === e.slotName && t.amznp === e.amznp && t.amznbid === e.amznbid
                            }
                            )),
                            (a = {}).session = n.id,
                            a.host = n.host,
                            a.path = n.path,
                            a.referrer = n.referrer,
                            a.device = r.device,
                            a.gdprc = r.gdpr.consented || 3,
                            a.gdprvl = r.gdpr.vendorListVersion,
                            a.tags = U.sanitizeTags(s),
                            o ? (a.amzniid = o.amzniid,
                            a.amznp = o.amznp,
                            a.amznbid = o.amznbid,
                            a.cpm = o.cpm,
                            a.auction_start = o.auction_start,
                            a.auction_finish = o.auction_finish,
                            a.slotID = o.slotID,
                            a.slotName = o.slotName,
                            a.size = o.size,
                            a.amznsz = o.amznsz) : (b.warn("auction entry not found for impression: " + JSON.stringify(e)),
                            a.amzniid = e.amzniid,
                            a.amznp = e.amznp,
                            a.amznbid = e.amznbid,
                            a.cpm = e.cpm,
                            a.auction_start = (new Date).getTime(),
                            a.auction_finish = (new Date).getTime(),
                            a.slotID = "unknown",
                            a.slotName = e.slotName,
                            a.size = "unknown",
                            a.amznsz = "unknown"),
                            u = {
                                type: G,
                                data: a
                            },
                            t.abrupt("return", this.apiClient.sendEvent(u));
                        case 30:
                            throw b.error("No session"),
                            new M;
                        case 32:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function(t) {
                return e.apply(this, arguments)
            }
            )
        }, {
            key: "validateAndEnhanceRawImpression",
            value: function(t) {
                if (!t.amzniid)
                    throw b.error("missing 'amzniid'"),
                    new W;
                if (!t.amznbid)
                    throw b.error("missing 'amznbid'"),
                    new W;
                if (!t.amznp)
                    throw b.error("missing 'amznp'"),
                    new W;
                if (!t.slotName)
                    throw b.error("missing 'slotName'"),
                    new W;
                t.cpm = this.amznbid2cpm(t.amznbid)
            }
        }, {
            key: "validateAndEnhanceRawAuction",
            value: function(t) {
                var e = this;
                if (t.start || (t.start = (new Date).getTime()),
                t.finish || (t.finish = (new Date).getTime()),
                U.emptyArray(t.request))
                    throw b.error("A9 auction data missing request object"),
                    new W;
                if (U.emptyArray(t.response))
                    throw b.error("A9 auction data missing response object"),
                    new W;
                var n = t.response.find((function(t) {
                    return t.amzniid
                }
                ))
                  , r = n ? n.amzniid : _()();
                t.response = t.response.map((function(n) {
                    var i = t.request.find((function(t) {
                        return t.slotID === n.slotID
                    }
                    ));
                    return n.amzniid = n.amzniid || r,
                    n.slotName = i.slotName,
                    n.cpm = e.amznbid2cpm(n.amznbid),
                    n
                }
                )),
                delete t.request
            }
        }, {
            key: "amznbid2cpm",
            value: function(t) {
                if (0 === Object.entries(this.lineItemsMap).length && this.lineItemsMap.constructor === Object)
                    throw b.error("A9 Line Items Map is empty, call init() to retrieve it"),
                    new K;
                return this.lineItemsMap[t] || 0
            }
        }]),
        t
    }()
      , Q = n(14)
      , Z = n.n(Q)
      , tt = function() {
        function t(e, n) {
            u()(this, t),
            f()(this, "events", []),
            f()(this, "flushTimeoutId", null),
            f()(this, "flushTimeout", null),
            f()(this, "batchSize", null),
            this.flushTimeout = e,
            this.batchSize = n
        }
        var e, n, r, s, a;
        return l()(t, [{
            key: "scheduleFlush",
            value: (a = o()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            this.flushTimeoutId = setTimeout(this.flush.bind(this), this.flushTimeout);
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return a.apply(this, arguments)
            }
            )
        }, {
            key: "sendEvent",
            value: (s = o()(i.a.mark((function t(e) {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (this.events.push(e),
                            !(this.events.length > this.batchSize)) {
                                t.next = 4;
                                break
                            }
                            return t.next = 4,
                            this.flush();
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function(t) {
                return s.apply(this, arguments)
            }
            )
        }, {
            key: "getA9LineItemsMap",
            value: (r = o()(i.a.mark((function t() {
                var e;
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Leya.getKey();
                        case 2:
                            if (!(e = t.sent)) {
                                t.next = 7;
                                break
                            }
                            return t.abrupt("return", Z.a.get("https://analytics.leya.tech/a9/line-items", {
                                headers: {
                                    "x-api-token": e
                                }
                            }));
                        case 7:
                            b.warn("Can't retrieve line item map without an ingestion key, use Leya.setKey() to set yours.");
                        case 8:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))),
            function() {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "getEventQueueSize",
            value: (n = o()(i.a.mark((function t() {
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", this.events.length);
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this)
            }
            ))),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "flush",
            value: (e = o()(i.a.mark((function t() {
                var e, n;
                return i.a.wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            Leya.getKey();
                        case 2:
                            for (e = t.sent,
                            this.flushTimeoutId && (clearTimeout(this.flushTimeoutId),
                            this.flushTimeoutId = null),
                            t.prev = 4; this.events.length; )
                                n = this.events.splice(0, this.batchSize),
                                b.debug("Flushing " + n.length + " events"),
                                n.length && function() {
                                    var t = {};
                                    if (n.forEach((function(e) {
                                        t[e.type] = t[e.type] || [],
                                        t[e.type] = t[e.type].concat(e.data)
                                    }
                                    )),
                                    b.debug(JSON.stringify(t)),
                                    e)
                                        if (navigator.sendBeacon) {
                                            var r = new Blob([JSON.stringify(t)],{
                                                type: "text/plain; charset=UTF-8"
                                            });
                                            navigator.sendBeacon("https://analytics.leya.tech/events?xat=" + e, r)
                                        } else
                                            Z.a.post("https://analytics.leya.tech/events", JSON.stringify(t), {
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    "x-api-token": e
                                                }
                                            });
                                    else
                                        b.warn("missing ingestion key")
                                }();
                        case 6:
                            return t.prev = 6,
                            t.next = 9,
                            this.scheduleFlush();
                        case 9:
                            return t.finish(6);
                        case 10:
                        case "end":
                            return t.stop()
                        }
                }
                ), t, this, [[4, , 6, 10]])
            }
            ))),
            function() {
                return e.apply(this, arguments)
            }
            )
        }]),
        t
    }();
    !function(t) {
        var e = this;
        if (t.Leya)
            b.warn("Attempted to load leyajs but it's already loaded.");
        else {
            var n = new C
              , r = new tt(1e3,3)
              , s = new J(r)
              , a = new H(r)
              , u = new Y(r);
            n.startSession().then((function() {
                return b.info("Session Open")
            }
            )),
            r.scheduleFlush().then((function() {
                return b.info("Scheduled flush")
            }
            )),
            t.Leya = {
                getKey: function(t) {
                    return n.getKey(t)
                },
                setKey: function(t) {
                    return n.setKey(t)
                },
                startSession: function() {
                    return n.startSession()
                },
                finishSession: function() {
                    return n.finishSession()
                },
                getSession: function() {
                    return n.getSession()
                },
                getTags: function() {
                    return n.getTags()
                },
                setTags: function(t) {
                    return n.setTags(t)
                },
                getUser: function() {
                    return n.getUser()
                },
                setUserGdprConsent: function(t) {
                    return n.setUserGdprConsent(t)
                },
                setGdprVendorListVersion: function(t) {
                    return n.setGdprVendorListVersion(t)
                },
                isSessionOpen: function() {
                    return n.isSessionOpen()
                },
                Events: {
                    Prebid: {
                        handleAuctionEvent: function(t) {
                            return s.handleAuctionEvent(t)
                        },
                        handleImpressionEvent: function(t) {
                            return s.handleImpressionEvent(t)
                        },
                        handleBidAfterTimeoutEvent: function(t) {
                            return s.handleBidAfterTimeoutEvent(t)
                        }
                    },
                    A9: {
                        handleAuctionEvent: function(t) {
                            return u.handleAuctionEvent(t)
                        },
                        handleImpressionEvent: function(t) {
                            return u.handleImpressionEvent(t)
                        },
                        init: function() {
                            return u.init()
                        },
                        getLineItemsMap: function() {
                            return u.getLineItemsMap()
                        }
                    },
                    recordPageView: function() {
                        return a.recordPageView()
                    },
                    recordSession: function() {
                        return a.recordSession()
                    }
                }
            },
            t.addEventListener("load", function() {
                var n = o()(i.a.mark((function n(r) {
                    var s, a;
                    return i.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return s = function() {
                                    var t = o()(i.a.mark((function t(e) {
                                        var n;
                                        return i.a.wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    if (!e) {
                                                        t.next = 8;
                                                        break
                                                    }
                                                    if (!(n = e.gdpr.gdprDetails())) {
                                                        t.next = 8;
                                                        break
                                                    }
                                                    return t.next = 5,
                                                    Leya.setUserGdprConsent(n.getConsentValue);
                                                case 5:
                                                    if (!n.vendorList) {
                                                        t.next = 8;
                                                        break
                                                    }
                                                    return t.next = 8,
                                                    Leya.setGdprVendorListVersion(n.vendorList.vendorListVersion);
                                                case 8:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    )));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                n.next = 3,
                                Leya.getUser();
                            case 3:
                                return a = n.sent,
                                n.next = 6,
                                s(a);
                            case 6:
                                return t.setInterval(o()(i.a.mark((function t() {
                                    var e;
                                    return i.a.wrap((function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                Leya.getUser();
                                            case 2:
                                                return e = t.sent,
                                                t.next = 5,
                                                s(e);
                                            case 5:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                ))).bind(e), 250),
                                n.next = 9,
                                Leya.Events.recordPageView();
                            case 9:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }()),
            t.addEventListener("beforeunload", function() {
                var t = o()(i.a.mark((function t(e) {
                    return i.a.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                Leya.finishSession();
                            case 2:
                                delete e.returnValue;
                            case 3:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }())
        }
    }(window)
}
]);
var streamampConfig = {
    levelTargeting: true,
    gptSingleRequestEnabled: true,
    a9Enabled: true,
    apsPubID: 'aac344f8-dc17-4ab8-b0a7-91cd349ec3b1',
    bidTimeout: 1.2,
    pbjsPriceGranularity: 'high',
    hasRefreshBids: true,
    minRefreshTime: 90,
    maxRefreshTime: 120,
    hasCollapsedEmptyDivs: true,
    publisher_id: 'FinancialExpress/trustnet',
    token: 'WC7NUoj63OPzlcDxBxgzOyelPd9drZORlK2b0VDUdz56lW6RQVfLUuPu0IbDwxSK',
    currency: {
        enabled: true,
        value: 'AUD'
    },
    namespace: 'streamamp',
    globalKeyValues: [],
    keyValues: {},
    preventInit: true,
    beforeInit: function() {// if (window.streamampClientConfig && window.streamampClientConfig.targets) {
    //     var investorType = window.streamampClientConfig.targets.InvestorType || '';
    //     if (investorType.toLowerCase() != 'investor') {
    //         window.streamampConfig.adUnits.forEach(function(adUnit) {
    //             adUnit.bids = [];
    //         });
    //     }
    // }
    },
    adUnits: [{
        code: 'Bottom1',
        path: '/21769104128/Trustnet/Bottom1',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [600, 200], [728, 90], [320, 50], [300, 250], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                dmxid: 443670,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                dmxid: 443670,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443670,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                tagid: '67093'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                tagid: '67082'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '40493'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '67083'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979',
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201883
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                siteId: '306992',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                siteId: '306991',
                size: [728, 90]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '306990',
                size: [320, 50]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '306989',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                unit: '539863752',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                publisherId: '1249592',
                adSlot: 'tn_bottom1_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249593',
                adSlot: 'tn_bottom1_728x90'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1517788',
                adSlot: 'tn_bottom1_320x50'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1249594',
                adSlot: 'tn_bottom1_300x250'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 12759820
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                placementId: 12759825
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13721929
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 12759827
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 17078279
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                placementId: 17078287
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078290
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078292
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [600, 200]],
            '980 - 1279': [[970, 250], [728, 90], [600, 200]],
            '768 - 979': [[728, 90], [600, 200]],
            '0 - 767': [[320, 50], [300, 250], [320, 100]]
        }
    }, {
        code: 'Position1',
        path: '/21769104128/Trustnet/Position1',
        mediaTypes: {
            banner: {
                sizes: [[300, 250], [320, 50], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                dmxid: 443672,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443672,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                tagid: '40484'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '67086'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979',
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201884
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                siteId: '306993',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '306994',
                size: [320, 50]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                unit: '539863753',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                publisherId: '1249595',
                adSlot: 'tn_position1_300x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '2473251',
                adSlot: 'tn_position1_320x50'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 11321134
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 16237729
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 17078296
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078302
            }
        }],
        breakpoints: {
            '1280 - 9999': [[300, 250]],
            '980 - 1279': [[300, 250]],
            '768 - 979': [[300, 250]],
            '0 - 767': [[300, 250], [320, 50], [320, 100]]
        }
    }, {
        code: 'Position2',
        path: '/21769104128/Trustnet/Position2',
        mediaTypes: {
            banner: {
                sizes: [[300, 250], [300, 600]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                dmxid: 443673,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                dmxid: 443673,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                tagid: '67087'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '67088'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979',
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201885
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                siteId: '306995',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '306996',
                size: [300, 600]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                unit: '539863754',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                publisherId: '1249596',
                adSlot: 'tn_position2_300x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249597',
                adSlot: 'tn_position2_300x600'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 12759837
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 12759853
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 17078303
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078308
            }
        }],
        breakpoints: {
            '1280 - 9999': [[300, 250], [300, 600]],
            '980 - 1279': [[300, 250], [300, 600]],
            '768 - 979': [[300, 250], [300, 600]],
            '0 - 767': [[300, 250]]
        }
    }, {
        code: 'Top',
        path: '/21769104128/Trustnet/Top',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [970, 90]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        lazyLoad: true,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                dmxid: 443679,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                dmxid: 443679,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                tagid: '40486'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '40488'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979'
        //     ],
        //     params: {
        //         placementId: 1201888
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                siteId: '306998',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307000',
                size: [728, 90]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                unit: '539863756',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                publisherId: '1249599',
                adSlot: 'tn_top_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249601',
                adSlot: 'tn_top_728x90'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 11321130
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 11321133
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 17078312
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078317
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [728, 90], [970, 90]],
            '980 - 1279': [[970, 250], [728, 90], [970, 90]],
            '768 - 979': [[728, 90]]
        }
    }, {
        code: 'Right',
        path: '/21769104128/Trustnet/Right',
        mediaTypes: {
            banner: {
                sizes: [[120, 600]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[120, 600]]
        }
    }, {
        code: 'TopLeft',
        path: '/21769104128/Trustnet/TopLeft',
        mediaTypes: {
            banner: {
                sizes: [[300, 600], [300, 250], [300, 1050]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        lazyLoad: true,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999'],
            params: {
                dmxid: 443682,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999'],
            params: {
                tagid: '40490'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999'],
            params: {
                tagid: '40489'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999'
        //     ],
        //     params: {
        //         placementId: 1201889
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999'],
            params: {
                siteId: '307003',
                size: [300, 600]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999'],
            params: {
                siteId: '307002',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999'],
            params: {
                unit: '539863757',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999'],
            params: {
                publisherId: '1249602',
                adSlot: 'tn_topleft_300x600'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999'],
            params: {
                publisherId: '1249604',
                adSlot: 'tn_topleft_300x250'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 11321139
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 11321140
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 17078321
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 17078330
            }
        }],
        breakpoints: {
            '1280 - 9999': [[300, 600], [300, 250], [300, 1050]]
        }
    }, {
        code: 'TopRight',
        path: '/21769104128/Trustnet/TopRight',
        mediaTypes: {
            banner: {
                sizes: [[300, 600], [300, 250], [300, 1050]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        lazyLoad: true,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                dmxid: 443680,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '40491'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '40492'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979'
        //     ],
        //     params: {
        //         placementId: 1201890
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307003',
                size: [300, 600]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307004',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                unit: '539863758',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249605',
                adSlot: 'tn_topright_300x600'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249603',
                adSlot: 'tn_topright_300x250'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 11321137
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 11321138
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078334
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078341
            }
        }],
        breakpoints: {
            '1280 - 9999': [[300, 600], [300, 250], [300, 1050]],
            '980 - 1279': [[300, 600], [300, 250]],
            '768 - 979': [[300, 600], [300, 250]]
        }
    }, {
        code: 'Top1',
        path: '/21769104128/Trustnet/Top1',
        mediaTypes: {
            banner: {
                sizes: [[185, 80]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[185, 80]],
            '980 - 1279': [[185, 80]],
            '768 - 979': [[185, 80]]
        }
    }, {
        code: 'Top2',
        path: '/21769104128/Trustnet/Top2',
        mediaTypes: {
            banner: {
                sizes: [[150, 30]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[150, 30]],
            '980 - 1279': [[150, 30]],
            '768 - 979': [[150, 30]]
        }
    }, {
        code: 'Top3',
        path: '/21769104128/Trustnet/Top3',
        mediaTypes: {
            banner: {
                sizes: [[300, 40]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        lazyLoad: true,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[300, 40]],
            '980 - 1279': [[300, 40]],
            '768 - 979': [[300, 40]]
        }
    }, {
        code: 'Top_footer',
        path: '/21769104128/Trustnet/Top_footer',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [970, 90]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                dmxid: 443681,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                tagid: '67089'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                tagid: '67090'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279'
        //     ],
        //     params: {
        //         placementId: 1201892
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                siteId: '307005',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                siteId: '307007',
                size: [728, 90]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                unit: '539863762',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                publisherId: '1249606',
                adSlot: 'tn_topfooter_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                publisherId: '1249608',
                adSlot: 'tn_topfooter_728x90'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 12759865
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 12759874
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 17078345
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 17078351
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [728, 90], [970, 90]],
            '980 - 1279': [[970, 250], [728, 90], [970, 90]]
        }
    }, {
        code: 'Top2_footer',
        path: '/21769104128/Trustnet/Top2_footer',
        mediaTypes: {
            banner: {
                sizes: [[150, 30]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[150, 30]],
            '980 - 1279': [[150, 30]],
            '768 - 979': [[150, 30]]
        }
    }, {
        code: 'Top_Middle',
        path: '/21769104128/Trustnet/Top_Middle',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [970, 90]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                dmxid: 443683,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                dmxid: 443683,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                tagid: '67091'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '67092'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979'
        //     ],
        //     params: {
        //         placementId: 1201915
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                siteId: '307008',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307010',
                size: [728, 90]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                unit: '539863763',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                publisherId: '1249609',
                adSlot: 'tn_topmiddle_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1249611',
                adSlot: 'tn_topmiddle_728x90'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 12759878
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 12759886
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279'],
            params: {
                placementId: 17078356
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078367
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [728, 90], [970, 90]],
            '980 - 1279': [[970, 250], [728, 90], [970, 90]],
            '768 - 979': [[728, 90]]
        }
    }, {
        code: 'NewsNative',
        path: '/21769104128/Trustnet/NewsNative',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [300, 250], [728, 90], [320, 50], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999'],
            params: {
                dmxid: 443677,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                dmxid: 443677,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                dmxid: 443677,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999'],
            params: {
                tagid: '67101'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                tagid: '67103'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                tagid: '67102'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979',
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201920
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999'],
            params: {
                siteId: '307018',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                siteId: '307020',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                siteId: '307019',
                size: [728, 90]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '432070',
                size: [320, 50]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                unit: '540784128',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999'],
            params: {
                publisherId: '1361195',
                adSlot: 'tn_newsnative_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                publisherId: '1361198',
                adSlot: 'tn_newsnative_300x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                publisherId: '1361197',
                adSlot: 'tn_newsnative_728x90'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 13206163
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 13206209
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                placementId: 13206194
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17859793
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 17078446
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 17078452
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['980 - 1279', '768 - 979'],
            params: {
                placementId: 17078446
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [300, 250]],
            '980 - 1279': [[300, 250], [728, 90]],
            '768 - 979': [[300, 250], [728, 90]],
            '0 - 767': [[300, 250], [320, 50], [320, 100]]
        }
    }, {
        code: 'pdfAd',
        path: '/21769104128/Trustnet/pdfAd',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [300, 600], [500, 500], [400, 400], [760, 500], [300, 250], [320, 50], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999'],
            params: {
                dmxid: 443678,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                dmxid: 443678,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                dmxid: 443678,
                memberid: 100615
            }
        }, {
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443678,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999'],
            params: {
                tagid: '67104'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '67105'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                tagid: '67106'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                tagid: '40495'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '67107'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '1280 - 9999',
        //         '980 - 1279',
        //         '768 - 979',
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201921
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['1280 - 9999'],
            params: {
                siteId: '307021',
                size: [970, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307022',
                size: [728, 90]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                siteId: '307023',
                size: [300, 600]
            }
        }, {
            bidder: 'ix',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                siteId: '307025',
                size: [300, 250]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307024',
                size: [320, 50]
            }
        }, {
            bidder: 'openx',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                unit: '540210007',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999'],
            params: {
                publisherId: '1361199',
                adSlot: 'tn_pdfAd_970x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1361200',
                adSlot: 'tn_pdfAd_728x90'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                publisherId: '1361201',
                adSlot: 'tn_pdfAd_300x600'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                publisherId: '1361202',
                adSlot: 'tn_pdfAd_300x250'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1517797',
                adSlot: 'tn_pdfAd_320x50'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 13206220
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 13206221
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 13206222
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 13206224
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13722161
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999'],
            params: {
                placementId: 17078454
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078475
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979'],
            params: {
                placementId: 17078504
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['1280 - 9999', '980 - 1279', '768 - 979', '0 - 767'],
            params: {
                placementId: 17078510
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078507
            }
        }],
        breakpoints: {
            '1280 - 9999': [[970, 250], [728, 90], [300, 600], [300, 250], [500, 500], [400, 400], [760, 500], ],
            '980 - 1279': [[500, 500], [400, 400], [760, 500], [728, 90], [300, 600], [300, 250]],
            '768 - 979': [[500, 500], [400, 400], [760, 500], [300, 250], [728, 90], [300, 600]],
            '0 - 767': [[300, 250], [320, 50], [320, 100]]
        }
    }, {
        code: 'Sponsorshipbanner',
        path: '/21769104128/Trustnet/Sponsorshipbanner',
        mediaTypes: {
            banner: {
                sizes: [[970, 150], [728, 90], [320, 50], [300, 250], [300, 50]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[970, 150], [728, 90]],
            '980 - 1279': [[728, 90]],
            '768 - 979': [[728, 90]],
            '0 - 767': [[320, 50], [300, 250], [300, 50]]
        }
    }, {
        code: 'IndexSpon',
        path: '/21769104128/Trustnet/IndexSpon',
        mediaTypes: {
            banner: {
                sizes: [[215, 40]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[215, 40]],
            '980 - 1279': [[215, 40]],
            '768 - 979': [[215, 40]]
        }
    }, {
        code: 'SponsoredContent',
        path: '/21769104128/Trustnet/SponsoredContent',
        mediaTypes: {
            banner: {
                sizes: [[970, 250], [728, 90], [320, 50], [300, 250], [300, 50]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[970, 250]],
            '980 - 1279': [[728, 90]],
            '768 - 979': [[728, 90]],
            '0 - 767': [[320, 50], [300, 250], [300, 50]]
        }
    }, {
        code: 'SectorSponsor',
        path: '/21769104128/Trustnet/SectorSponsor',
        mediaTypes: {
            banner: {
                sizes: [[200, 80]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [],
        breakpoints: {
            '1280 - 9999': [[200, 80]],
            '980 - 1279': [[200, 80]],
            '768 - 979': [[200, 80]],
            '0 - 767': [[200, 80]]
        }
    }, {
        code: 'Position1_Footer',
        path: '/21769104128/Trustnet/Position1_Footer',
        mediaTypes: {
            banner: {
                sizes: [[320, 50], [300, 250], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443675,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '40496'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201918
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307014',
                size: [320, 50]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '427151',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['0 - 767'],
            params: {
                unit: '539863765',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1517791',
                adSlot: 'tn_position1_footer_320x50'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13722129
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13722135
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078399
            }
        }],
        breakpoints: {
            '0 - 767': [[320, 50], [300, 250], [320, 100]]
        }
    }, {
        code: 'Position2_Footer',
        path: '/21769104128/Trustnet/Position2_Footer',
        mediaTypes: {
            banner: {
                sizes: [[320, 50], [300, 250], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443674,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '40497'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '67370'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201916
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307012',
                size: [320, 50]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307013',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['0 - 767'],
            params: {
                unit: '539863764',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1517790',
                adSlot: 'tn_position2_footer_320x50'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1249617',
                adSlot: 'tn_position2_footer_300x250'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13722126
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 12759897
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078372
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078378
            }
        }],
        breakpoints: {
            '0 - 767': [[320, 50], [300, 250], [320, 100]]
        }
    }, {
        code: 'Mobile_Position',
        path: '/21769104128/Trustnet/Mobile_Position',
        mediaTypes: {
            banner: {
                sizes: [[320, 50], [300, 250], [320, 100]]
            }
        },
        isSticky: false,
        safeFrame: false,
        outOfPage: false,
        bids: [{
            bidder: 'districtmDMX',
            labelAny: ['0 - 767'],
            params: {
                dmxid: 443676,
                memberid: 100615
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '40498'
            }
        }, {
            bidder: 'emx_digital',
            labelAny: ['0 - 767'],
            params: {
                tagid: '67100'
            }
        }, // {
        //     bidder: 'improvedigital',
        //     labelAny: [
        //         '0 - 767'
        //     ],
        //     params: {
        //         placementId: 1201919
        //     }
        // },
        {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307016',
                size: [320, 50]
            }
        }, {
            bidder: 'ix',
            labelAny: ['0 - 767'],
            params: {
                siteId: '307017',
                size: [300, 250]
            }
        }, {
            bidder: 'openx',
            labelAny: ['0 - 767'],
            params: {
                unit: '539863766',
                delDomain: 'streamamp-d.openx.net'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1517793',
                adSlot: 'tn_mobile_position_320x50'
            }
        }, {
            bidder: 'pubmatic',
            labelAny: ['0 - 767'],
            params: {
                publisherId: '1249615',
                adSlot: 'tn_mobile_position_300x250'
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 13722135
            }
        }, {
            bidder: 'streamamp',
            labelAny: ['0 - 767'],
            params: {
                placementId: 12759934
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078420
            }
        }, {
            bidder: 'totaljobs',
            labelAny: ['0 - 767'],
            params: {
                placementId: 17078429
            }
        }],
        breakpoints: {
            '0 - 767': [[320, 50], [300, 250], [320, 100]]
        }
    }],
    cmp: {
        isEnabled: true,
        config: {
            'UI Layout': 'popup',
            Language: 'en',
            'Display Persistent Consent Link': true,
            'No Option': false,
            'Non-Consent Display Frequency': 7,
            'Publisher Purpose IDs': [1, 2, 3, 4, 5],
            'Initial Screen Body Text Option': 1,
            'Initial Screen Accept Button Text': 'I agree',
            'Initial Screen Reject Button Text': 'I do not accept',
            'Purpose Screen Body Text': 'You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.',
            'Vendor Screen Body Text': 'You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.',
            'Vendor Screen Accept All Button Text': 'Accept all',
            'Vendor Screen Reject All Button Text': 'Reject all',
            'Publisher Logo': 'https://static.amp.services/logos/trustnet-logo.jpg',
            'Publisher Name': 'Trustnet',
            'Consent Scope': 'service',
            'Initial Screen Title Text': 'Cookies and Advertising',
        },
        hasCustomStyles: true,
        styles: {
            ui: {
                backgroundColor: '#FFFFFF',
                textColor: '#000000'
            },
            link: {
                textColor: '#000000'
            },
            primaryButton: {
                backgroundColor: '#00A499',
                borderColor: '#00A499',
                textColor: '#FFFFFF'
            },
            primaryButtonHover: {
                backgroundColor: '#007169',
                borderColor: '#007169',
                textColor: '#FFFFFF'
            },
            isSecondaryButtonHidden: false,
            secondaryButton: {
                backgroundColor: 'transparent',
                borderColor: '#00A499',
                textColor: '#00A499'
            },
            secondaryButtonHover: {},
            tableHeader: {},
            tableRow: {},
            toggleOn: {
                backgroundColor: '#00A499',
                borderColor: '#00A499'
            },
            toggleOff: {
                backgroundColor: '#FFFFFF',
                borderColor: '#00A499'
            },
            additionalStyles: '',
            toggleSwitchBorderColor: '#00A499',
            toggleStatusTextColor: '#FFFFFF'
        }
    },
    breakpoints: [{
        label: '1280 - 9999',
        minWidth: 1280,
        maxWidth: 9999,
        sizesSupported: [[970, 250], [300, 250], [300, 600], [728, 90]]
    }, {
        label: '980 - 1279',
        minWidth: 980,
        maxWidth: 1279,
        sizesSupported: [[970, 250], [728, 90], [300, 250], [300, 600]]
    }, {
        label: '768 - 979',
        minWidth: 768,
        maxWidth: 979,
        sizesSupported: [[728, 90], [300, 250], [300, 600]]
    }, {
        label: '0 - 767',
        minWidth: 0,
        maxWidth: 767,
        sizesSupported: [[320, 50], [300, 250]]
    }]
}

var streamampUtils = {
    isStreamampDebugMode: function() {
        var url = window.location.href;
        var name = 'streamamp_debug';
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        var results = regex.exec(url);
        if (!results) {
            return false;
        }
        if (!results[2]) {
            return false;
        }
        return (decodeURIComponent(results[2].replace(/\+/g, ' ')).toUpperCase() === 'TRUE');
    },
    getBrowserWidth: function() {
        var width;
        var topWindow = window.top || window;
        var outerWidth = topWindow.outerWidth || 10000;
        if (topWindow.innerWidth !== undefined) {
            width = topWindow.innerWidth;
        } else if (topWindow.document.documentElement !== undefined && topWindow.document.documentElement.clientWidth !== undefined && topWindow.document.documentElement.clientWidth != 0) {
            width = topWindow.document.documentElement.clientWidth;
        } else {
            width = topWindow.document.body.clientWidth;
        }
        var minWidth = Math.min(width, outerWidth)
        streamampUtils.log('Getting browser width', minWidth);
        return minWidth;
    },
    loadScript: function(url) {
        var scriptEl = document.createElement('script');
        scriptEl.type = 'text/javascript';
        scriptEl.async = true;
        scriptEl.src = url;
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(scriptEl, node);
    },
    normalizeKeyValue: function(keyValue) {
        if (keyValue && keyValue.keyValueType === 'variable') {
            keyValue.value = window[keyValue.value];
            if (keyValue.value === '') {
                keyValue.value = undefined;
            }
        }
        return keyValue;
    },
    styleDebugLog: function(type, arguments) {
        arguments = Array.from(arguments)
        var typeTextColor
        switch (type) {
        case 'pbjs':
            typeTextColor = '#3B88C3;';
            break;
        case 'gpt':
            typeTextColor = '#1E8E3E;';
            break;
        case 'aps':
            typeTextColor = '#FF9900;';
            break;
        default:
            typeTextColor = '';
        }
        arguments.unshift('font-family: sans-serif; font-weight: bold; color: ' + typeTextColor + '; padding: 1px 0;')
        arguments.unshift('font-family: sans-serif; font-weight: bold; color: #FFF; background: #2F0D00; padding: 1px 3px; margin: 2px 0; border-radius: 3px;')
        arguments.unshift('font-family: sans-serif; font-weight: bold; color: #2F0D00; padding: 1px 0; margin: 2px')
        arguments.unshift('%cSTREAM%cAMP' + '%c  ' + type.toUpperCase() + ': ')
        return arguments
    },
    log: function() {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('debug', arguments));
        }
    },
    logPbjs: function() {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('pbjs', arguments));
        }
    },
    logGpt: function() {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('gpt', arguments));
        }
    },
    logAps: function() {
        if (streamampDebugMode) {
            console.log.apply(this, streamampUtils.styleDebugLog('aps', arguments));
        }
    },
    logError: function() {
        if (streamampDebugMode) {
            console.error.apply(this, streamampUtils.styleDebugLog('error', arguments));
        } else {
            console.error.apply(this, arguments);
        }
    },
    stickyAd: function(adUnits) {
        var stickyAdUnits = adUnits.filter(function(adUnit) {
            return adUnit.isSticky === true;
        });
        if (stickyAdUnits.length === 0) {
            return;
        }
        googletag.cmd.push(function() {
            googletag.pubads().addEventListener('slotRenderEnded', function(e) {
                if (!e.isEmpty) {
                    stickyAdUnits.filter(function(adUnit) {
                        return adUnit.code === e.slot.getSlotElementId();
                    }).map(function(adUnit) {
                        streamampUtils.applyStyle(adUnit);
                    });
                }
            });
        });
    },
    applyStyle: function(adUnit) {
        var adUnitCode = adUnit.code;
        var stickyAdPosition = adUnit.stickyAdPosition;
        var adContainer = document.getElementById(adUnitCode);
        if (adContainer) {
            adContainer.style.backgroundColor = 'rgba(237, 237, 237, 0.82)';
            adContainer.style.position = 'fixed';
            adContainer.style.bottom = '0px';
            adContainer.style.padding = '4px 0 0 0';
            adContainer.style.zIndex = '9999';
            adContainer.style.width = '100%';
            adContainer.style.textAlign = 'center';
            if (stickyAdPosition === 'bl') {
                streamampUtils.log('Applying styles for sticky ad unit', {
                    code: adUnitCode,
                    position: 'bottom left'
                });
                adContainer.style.left = '0px';
            } else if (stickyAdPosition === 'br') {
                streamampUtils.log('Applying styles for sticky ad unit', {
                    code: adUnitCode,
                    position: 'bottom right'
                });
                adContainer.style.right = '0px';
            } else {
                streamampUtils.log('Applying styles for sticky ad unit', {
                    code: adUnitCode,
                    position: 'bottom center'
                });
                adContainer.style.transform = 'translate(-50%, 0%)';
                adContainer.style.left = '50%';
            }
            adContainer.style.display = '';
            var closeAdButton = document.createElement('img');
            closeAdButton.id = "close-button";
            closeAdButton.src = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjQyNC4wMzIsNDQzLjcgNDQzLjcsNDI0LjAzMiAzMjUuNjY3LDMwNiA0NDMuNywxODcuOTY3IDQyNC4wMzIsMTY4LjMgMzA2LDI4Ni4zMzMgMTg3Ljk2NywxNjguMyAxNjguMywxODcuOTY3ICAgICAyODYuMzMzLDMwNiAxNjguMyw0MjQuMDMyIDE4Ny45NjcsNDQzLjcgMzA2LDMyNS42NjcgICAiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNjEyLDMwNkM2MTIsMTM3LjAwNCw0NzQuOTk1LDAsMzA2LDBDMTM3LjAwNCwwLDAsMTM3LjAwNCwwLDMwNmMwLDE2OC45OTUsMTM3LjAwNCwzMDYsMzA2LDMwNiAgICBDNDc0Ljk5NSw2MTIsNjEyLDQ3NC45OTUsNjEyLDMwNnogTTI3LjgxOCwzMDZDMjcuODE4LDE1Mi4zNiwxNTIuMzYsMjcuODE4LDMwNiwyNy44MThTNTg0LjE4MiwxNTIuMzYsNTg0LjE4MiwzMDYgICAgUzQ1OS42NCw1ODQuMTgyLDMwNiw1ODQuMTgyUzI3LjgxOCw0NTkuNjQsMjcuODE4LDMwNnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
            closeAdButton.style.position = "absolute";
            closeAdButton.style.top = "-12px";
            closeAdButton.style.right = "3px";
            closeAdButton.style.maxWidth = "24px";
            closeAdButton.style.maxHeight = "24px";
            closeAdButton.onclick = function() {
                adContainer.style.display = 'none';
            }
            ;
            adContainer.appendChild(closeAdButton);
            var frame = document.getElementById("google_ads_iframe_/5548363/StreamAMP_1x1_0");
            if (frame && frame.contentWindow.length) {
                document.getElementById("StreamAMP_1x1").style.backgroundColor = "";
                document.getElementById("close-button").style.display = "none";
            }
        }
    },
    polyfills: function() {
        if (!String.prototype.endsWith) {
            String.prototype.endsWith = function(search, this_len) {
                if (this_len === undefined || this_len > this.length) {
                    this_len = this.length;
                }
                return this.substring(this_len - search.length, this_len) === search;
            }
            ;
        }
        if (!Array.prototype.find) {
            Object.defineProperty(Array.prototype, 'find', {
                value: function(predicate) {
                    if (this == null) {
                        throw new TypeError('"this" is null or not defined');
                    }
                    var o = Object(this);
                    var len = o.length >>> 0;
                    if (typeof predicate !== 'function') {
                        throw new TypeError('predicate must be a function');
                    }
                    var thisArg = arguments[1];
                    var k = 0;
                    while (k < len) {
                        var kValue = o[k];
                        if (predicate.call(thisArg, kValue, k, o)) {
                            return kValue;
                        }
                        k++;
                    }
                    return undefined;
                },
                configurable: true,
                writable: true
            });
        }
        if (!Array.prototype.includes) {
            Object.defineProperty(Array.prototype, 'includes', {
                value: function(searchElement, fromIndex) {
                    if (this == null) {
                        throw new TypeError('"this" is null or not defined');
                    }
                    var o = Object(this);
                    var len = o.length >>> 0;
                    if (len === 0) {
                        return false;
                    }
                    var n = fromIndex | 0;
                    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                    function sameValueZero(x, y) {
                        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
                    }

                    while (k < len) {
                        if (sameValueZero(o[k], searchElement)) {
                            return true;
                        }
                        k++;
                    }
                    return false;
                }
            });
        }
        Object.values = Object.values ? Object.values : function(obj) {
            var allowedTypes = ["[object String]", "[object Object]", "[object Array]", "[object Function]"];
            var objType = Object.prototype.toString.call(obj);
            if (obj === null || typeof obj === "undefined") {
                throw new TypeError("Cannot convert undefined or null to object");
            } else if (!~allowedTypes.indexOf(objType)) {
                return [];
            } else {
                if (Object.keys) {
                    return Object.keys(obj).map(function(key) {
                        return obj[key];
                    });
                }
                var result = [];
                for (var prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        result.push(obj[prop]);
                    }
                }
                return result;
            }
        }
        ;
    }
};
streamampUtils.polyfills()
overrideGoogletagDisplay(streamampConfig)

var streamampDebugMode = streamampUtils.isStreamampDebugMode();
var dnsUrls = {
    a9: 'https://c.amazon-adsystem.com/aax2/apstag.js',
    prebid: 'https://static.amp.services/prebidLeya1.0.3.js',
    gpt: 'https://securepubads.g.doubleclick.net/tag/js/gpt.js',
    cmp: 'https://quantcast.mgr.consensu.org/'
};

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

window.gptAdSlots = {}
var onSlotCreatedEvents = [];

window.AD_UNITS_TOGGLE_OFF = window.AD_UNITS_TOGGLE_OFF || [];
streamampUtils.log('AD_UNITS_TOGGLE_OFF is', window.AD_UNITS_TOGGLE_OFF)
window.AD_UNITS_TOGGLE_ON = window.AD_UNITS_TOGGLE_ON || [];
streamampUtils.log('AD_UNITS_TOGGLE_ON is ', window.AD_UNITS_TOGGLE_ON)
window.adRefreshTimer = null;
var _streamampVariables = {
    levels: window.location.pathname.split('/').filter(function(level) {
        return level !== '';
    }),
    bidTimeout: streamampConfig.bidTimeout * 1e3 || 2000,
    currentBreakpoint: streamampGetBreakpoint()
}
streamampUtils.log('URL Levels', _streamampVariables.levels)
streamampUtils.log('Setting the bid timeout', _streamampVariables.bidTimeout)
streamampAddDNSPrefetch(Object.values(dnsUrls));
streamampSetup()

function streamampSetup() {
    streamampUtils.log('Running setup()')
    pbjs.que.push(function() {
        if (streamampConfig.afterLoad && typeof streamampConfig.afterLoad === 'function') {
            streamampUtils.log('Running afterLoad event', streamampConfig.afterLoad);
            streamampConfig.afterLoad();
        }
    });
    streamampUtils.loadScript(dnsUrls.gpt);
    streamampUtils.logGpt('Initializing Ad Server, loading GoogleTag library gpt.js');
    streamampUtils.loadScript(dnsUrls.prebid);
    var prebidVersion = dnsUrls.prebid.split('/').filter(function(item) {
        return item.indexOf('prebid') != -1
    }).join('')
    streamampUtils.logPbjs('Loading', prebidVersion);
    if (streamampConfig.a9Enabled) {
        streamampUtils.logAps('APS/A9 enabled, loading apstag library apstag.js')
        !function(a9, a, p, s, t, A, g) {
            if (a[a9])
                return;

            function q(c, r) {
                a[a9]._Q.push([c, r])
            }

            a[a9] = {
                init: function() {
                    q("i", arguments)
                },
                fetchBids: function() {
                    q("f", arguments)
                },
                setDisplayBids: function() {},
                targetingKeys: function() {
                    return []
                },
                _Q: []
            };
            A = p.createElement(s);
            A.async = !0;
            A.src = t;
            g = p.getElementsByTagName(s)[0];
            g.parentNode.insertBefore(A, g)
        }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");
        apstag.init({
            pubID: streamampConfig.apsPubID,
            adServer: 'googletag'
        });
    }
    if (streamampConfig.levelTargeting) {
        for (var levelIndex = 1; levelIndex < 6; levelIndex++) {
            window.streamampConfig.globalKeyValues.push({
                name: 'Level' + levelIndex,
                value: _streamampVariables.levels[levelIndex - 1] || 'none',
                keyValueType: 'static'
            });
        }
    }
    ;if (streamampConfig.toggleOffUrls) {
        streamampConfig.toggleOffUrls.forEach(function(url) {
            var level = url.level;
            var path = url.url;
            var levelsKeys = [];
            levelsKeys.push(level);
            var toggleOff = false;
            levelsKeys.forEach(function(levelKey) {
                if (_streamampVariables.levels && _streamampVariables.levels[levelKey - 1] && _streamampVariables.levels[levelKey - 1].toLowerCase() === path.toLowerCase()) {
                    toggleOff = true;
                }
            })
            if (toggleOff) {
                window.streamampConfig.adUnits.forEach(function(adUnit) {
                    adUnit.bids = []
                })
            }
        })
    }
    ;pbjs.que.push(function() {
        streamampUtils.logPbjs('Queuing enableAnalytics()')
        pbjs.enableAnalytics({
            provider: 'leya',
        });
    });
    pbjs.que.push(function() {
        pbjs.aliasBidder('appnexus', 'streamamp')
        pbjs.aliasBidder('appnexus', 'totaljobs')
    });
    pbjs.que.push(function() {
        var currencyValue = streamampConfig.currency.value;
        var currencyFlag = streamampConfig.currency.enabled;
        var currencyFileURL = 'https://static.amp.services/currency/conversion-rates.json';
        streamampUtils.logPbjs('Queuing setConfig() for consent management')
        pbjs.setConfig({
            consentManagement: {
                cmpApi: 'iab',
                timeout: 10000,
                allowAuctionWithoutConsent: true
            }
        });
        streamampUtils.logPbjs('Queuing setConfig() for filter settings')
        pbjs.setConfig({
            userSync: {
                filterSettings: {
                    iframe: {
                        bidders: '*',
                        filter: 'include'
                    }
                }
            }
        });
        streamampUtils.logPbjs('Queuing setConfig() for user ids')
        pbjs.setConfig({
            userSync: {
                userIds: [{
                    name: "pubCommonId",
                    storage: {
                        type: "cookie",
                        name: "_pubCommonId",
                        expires: 365
                    }
                }]
            }
        });
        streamampUtils.logPbjs('Queuing setConfig() for price granularity')
        pbjs.setConfig({
            priceGranularity: generatePriceGranularity(streamampConfig.pbjsPriceGranularity)
        });
        streamampUtils.logPbjs('Queuing setConfig() for bidder timeout', _streamampVariables.bidTimeout)
        pbjs.setConfig({
            bidderTimeout: _streamampVariables.bidTimeout
        });
        streamampUtils.logPbjs('Queuing setConfig() for size config (breakpoints)', streamampConfig.breakpoints.map(function(breakpoint) {
            return breakpoint.label
        }))
        pbjs.setConfig({
            sizeConfig: streamampConfig.breakpoints.map(function(breakpoint) {
                return {
                    'mediaQuery': '(min-width: ' + breakpoint.minWidth + 'px) and (max-width: ' + breakpoint.maxWidth + 'px)',
                    'sizesSupported': breakpoint.sizesSupported,
                    'labels': [breakpoint.label],
                }
            })
        });
        if (currencyFlag && currencyValue.length !== 0) {
            streamampUtils.logPbjs('Queuing setConfig() for currency. Ad server currency is', currencyValue)
            if (currencyValue === 'JPY') {
                pbjs.setConfig({
                    currency: {
                        adServerCurrency: currencyValue,
                        conversionRateFile: currencyFileURL,
                        granularityMultiplier: 100
                    }
                });
            } else {
                pbjs.setConfig({
                    currency: {
                        adServerCurrency: currencyValue,
                        conversionRateFile: currencyFileURL,
                        granularityMultiplier: 1
                    }
                });
            }
        } else {
            streamampUtils.logPbjs('Queuing setConfig() for currency. Ad server currency is USD')
            pbjs.setConfig({
                currency: {
                    adServerCurrency: 'USD',
                    conversionRateFile: currencyFileURL,
                    granularityMultiplier: 1
                }
            });
        }
    });
    if (!streamampConfig.preventInit) {
        streamampInit()
    }
}

function streamampInit() {
    // console.trace('tracing streamamp init')
    pbjs.isAuctionEnded = false;

    streamampUtils.log('Running init()')
    if (streamampConfig.cmp.isEnabled) {
        if (streamampConfig.cmp.pathnamesToExclude && streamampConfig.cmp.pathnamesToExclude.length > 0 && streamampConfig.cmp.pathnamesToExclude.indexOf(window.location.pathname) != -1) {
            streamampUtils.log('CMP pathnames to exclude are', streamampConfig.cmp.pathnamesToExclude)
            streamampUtils.log('Preventing CMP initialization as', window.location.pathname, 'is in streamampConfig.cmp.pathnamesToExclude')
        } else {
            streamampInitializeCmp()
        }
    }
    ;if (streamampConfig.beforeInit && typeof streamampConfig.beforeInit === 'function') {
        streamampUtils.log('Running beforeInit event', streamampConfig.beforeInit);
        streamampConfig.beforeInit();
    }
    var adUnitsGPT = streamampGetAdUnitsPerBreakpoint();
    var adUnitsAPS
    if (streamampConfig.a9Enabled) {
        adUnitsAPS = streamampCreateAPSAdUnits(adUnitsGPT);
    }
    if (pbjs.adUnits && pbjs.adUnits.length) {
        var oldAdUnitCodes = pbjs.adUnits.map(function(adUnit) {
            return adUnit.code;
        });
        streamampDestroySlots(oldAdUnitCodes);
    }

    pbjs.que.push(function() {
        streamampUtils.logPbjs('Queuing addAdUnits() for', adUnitsGPT)
        pbjs.addAdUnits(adUnitsGPT);
    });

    googletag.cmd.push(function() {
        var predefinedSlotIds = googletag.pubads().getSlots().map(function(slot) {
            return slot.getSlotElementId();
        });
        adUnitsGPT.forEach(function(adUnit) {
            streamampDefineAdUnitSlot(adUnit, predefinedSlotIds)
        });
        if (streamampConfig.gptSingleRequestEnabled) {
            streamampUtils.logGpt('Enabling single request (SRA)');
            googletag.pubads().enableSingleRequest();
        }
        if (streamampConfig.hasCollapedEmptyDivs) {
            streamampUtils.logGpt('Enabling collapse of empty ad divs');
            googletag.pubads().collapseEmptyDivs(true, true);
        }
        streamampUtils.logGpt('Enabling googletag service');
        googletag.enableServices();
    })
    if (streamampConfig.afterInit && typeof streamampConfig.afterInit === 'function') {
        streamampUtils.log('Running afterInit event', streamampConfig.afterInit);
        streamampConfig.afterInit();
    }
    if (streamampConfig.hasRefreshBids) {
        streamampRefresh(streamampConfig.adUnitsToRefresh)
    }
    streamampUtils.stickyAd(adUnitsGPT);
    auction(adUnitsGPT, adUnitsAPS)
}

function streamampFetchHeaderBids(adUnitsGPT, adUnitsAPS) {
    var bidders = ['prebid'];
    if (streamampConfig.a9Enabled) {
        bidders = ['a9', 'prebid'];
    }
    streamampUtils.log('Fetching header bids for bidders', bidders)
    var requestManager = {
        adserverRequestSent: false,
    };
    bidders.forEach(function(bidder) {
        requestManager[bidder] = false;
    });

    function allBiddersBack() {
        var allBiddersBack = bidders.map(function(bidder) {
            return requestManager[bidder];
        }).filter(Boolean).length === bidders.length;
        streamampUtils.log('Checking if all bidders are back', allBiddersBack)
        return allBiddersBack;
    }

    function headerBidderBack(bidder) {
        if (requestManager.adserverRequestSent === true) {
            return;
        }
        if (bidder === 'a9') {
            streamampUtils.logAps('Handling header bidder back for A9/APS')
            requestManager.a9 = true;
        } else if (bidder === 'prebid') {
            streamampUtils.logPbjs('Handling header bidder back for Prebid')
            requestManager.prebid = true;
        }
        if (allBiddersBack()) {
            sendAdServerRequest();
        }
    }

    function sendAdServerRequest() {
        if (requestManager.adserverRequestSent === true) {
            return;
        }
        requestManager.adserverRequestSent = true;
        pbjs.adserverRequestSent = true;
        requestManager.sendAdServerRequest = true;
        googletag.cmd.push(function() {
            if (streamampConfig.a9Enabled) {
                apstag.setDisplayBids();
                streamampUtils.logAps('Setting display bids')
            }
            streamampAddClientTargeting();
            pbjs.que.push(function() {
                streamampUtils.logPbjs('Queuing setTargetingForGPTAsync()')
                pbjs.setTargetingForGPTAsync();
                if (streamampConfig.gptSingleRequestEnabled) {
                    var sraArray = ["Top", "Top2", "Top3", "TopLeft", "TopRight"];
                    var t = googletag.pubads().getSlots().filter(function(slot) {
                        return !sraArray.includes(slot.getSlotElementId()) && !slot.getSlotElementId().startsWith('nav-ads')
                    })

                    googletag.pubads().refresh(t);
                }

                pbjs.isAuctionEnded = true;
                processAuctionEndQueue();
            });
            streamampUtils.logGpt('Sending ad server request')
        });
    }

    function requestBids(adUnitsGPT, adUnitsAPS, bidTimeout) {

        if (streamampConfig.a9Enabled) {
            streamampUtils.logAps('Fetching bids for', adUnitsAPS)
            var start = new Date().getTime()
            apstag.fetchBids({
                slots: adUnitsAPS,
                timeout: bidTimeout
            }, function(bids) {

                if (Leya) {
                    var a = {
                        start: start,
                        finish: new Date().getTime(),
                        request: adUnitsAPS,
                        response: bids
                    };

                    Leya.Events.A9.getLineItemsMap().then(function(lineItemsMap) {
                        if (Object.keys(lineItemsMap).length === 0 && lineItemsMap.constructor === Object) {
                            Leya.Events.A9.init().then(function() {
                                Leya.Events.A9.handleAuctionEvent(a)
                            })
                        } else {
                            Leya.Events.A9.handleAuctionEvent(a)
                        }
                    })

                }

                streamampUtils.logAps('Bids received (all)', bids, '(filtered out)', bids.filter(function(bid) {
                    return bid.amzniid
                }))

                headerBidderBack('a9');
            });
        }
        pbjs.que.push(function() {

            streamampUtils.logPbjs('Queuing requestBids()')
            pbjs.requestBids({
                timeout: bidTimeout,
                bidsBackHandler: function(bidResponses) {
                    headerBidderBack('prebid');
                }
            });
        });
    }

    requestBids(adUnitsGPT, adUnitsAPS, _streamampVariables.bidTimeout);
    window.setTimeout(function() {
        sendAdServerRequest();
    }, _streamampVariables.bidTimeout);
}

function auction(adUnitsGPT, adUnitsAPS) {
    if (window.__cmp && !window.__cmp.streamampOverridden) {
        window.__cmp('getConsentData', null, function(data, success) {
            streamampUtils.log('Getting CMP Consent Data', {
                data: data,
                success: success
            })
            streamampFetchHeaderBids(adUnitsGPT, adUnitsAPS);
        });
    } else {
        streamampFetchHeaderBids(adUnitsGPT, adUnitsAPS);
    }
}

function streamampInitializeCmp() {
    streamampUtils.log('Initializing CMP')
    var elem = document.createElement('script');
    elem.src = 'https://quantcast.mgr.consensu.org/cmp.js';
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
    (function() {
        var gdprAppliesGlobally = false;

        function addFrame() {
            if (!window.frames['__cmpLocator']) {
                if (document.body) {
                    var body = document.body
                      , iframe = document.createElement('iframe');
                    iframe.style = 'display:none';
                    iframe.name = '__cmpLocator';
                    body.appendChild(iframe);
                } else {
                    setTimeout(addFrame, 5);
                }
            }
        }

        addFrame();

        function cmpMsgHandler(event) {
            var msgIsString = typeof event.data === "string";
            var json;
            if (msgIsString) {
                json = event.data.indexOf("__cmpCall") != -1 ? JSON.parse(event.data) : {};
            } else {
                json = event.data;
            }
            if (json.__cmpCall) {
                var i = json.__cmpCall;
                window.__cmp(i.command, i.parameter, function(retValue, success) {
                    var returnMsg = {
                        "__cmpReturn": {
                            "returnValue": retValue,
                            "success": success,
                            "callId": i.callId
                        }
                    };
                    event.source.postMessage(msgIsString ? JSON.stringify(returnMsg) : returnMsg, '*');
                });
            }
        }

        window.__cmp = function(c) {
            var b = arguments;
            if (!b.length) {
                return __cmp.a;
            } else if (b[0] === 'ping') {
                b[2]({
                    "gdprAppliesGlobally": gdprAppliesGlobally,
                    "cmpLoaded": false
                }, true);
            } else if (c == '__cmp')
                return false;
            else {
                if (typeof __cmp.a === 'undefined') {
                    __cmp.a = [];
                }
                __cmp.a.push([].slice.apply(b));
            }
        }
        ;
        window.__cmp.gdprAppliesGlobally = gdprAppliesGlobally;
        window.__cmp.msgHandler = cmpMsgHandler;
        if (window.addEventListener) {
            window.addEventListener('message', cmpMsgHandler, false);
        } else {
            window.attachEvent('onmessage', cmpMsgHandler);
        }
    }
    )();
    window.__cmp('init', streamampConfig.cmp.config);
    if (streamampConfig.cmp.hasCustomStyles && isNotEmptyCmp(streamampConfig.cmp.styles)) {
        var style = document.createElement('style');
        var ref = document.querySelector('script');
        var quantcastTheme = streamampConfig.cmp.styles;
        streamampUtils.log('Applying custom CMP styles', quantcastTheme)
        style.innerHTML = (isNotEmptyCmp(quantcastTheme.ui) && quantcastTheme.ui.backgroundColor ? '.qc-cmp-ui' + '{' + 'background-color:' + quantcastTheme.ui.backgroundColor + '!important;' + '}' : '') + (isNotEmptyCmp(quantcastTheme.ui) && quantcastTheme.ui.textColor ? '.qc-cmp-ui,' + '.qc-cmp-ui .qc-cmp-main-messaging,' + '.qc-cmp-ui .qc-cmp-messaging,' + '.qc-cmp-ui .qc-cmp-beta-messaging,' + '.qc-cmp-ui .qc-cmp-title,' + '.qc-cmp-ui .qc-cmp-sub-title,' + '.qc-cmp-ui .qc-cmp-purpose-info,' + '.qc-cmp-ui .qc-cmp-table,' + '.qc-cmp-ui .qc-cmp-vendor-list,' + '.qc-cmp-ui .qc-cmp-vendor-list-title' + '{' + 'color:' + quantcastTheme.ui.textColor + '!important;' + '}' : '') + (isNotEmptyCmp(quantcastTheme.link) ? '.qc-cmp-ui a,' + '.qc-cmp-ui .qc-cmp-alt-action,' + '.qc-cmp-ui .qc-cmp-link' + '{' + (quantcastTheme.link.textColor ? 'color:' + quantcastTheme.link.textColor + '!important;' : '') + (quantcastTheme.link.isUnderlined ? 'text-decoration: underline' : 'text-decoration: none' + '!important;') + '}' : '') + (isNotEmptyCmp(quantcastTheme.primaryButton) ? '.qc-cmp-ui .qc-cmp-button' + '{' + (quantcastTheme.primaryButton.backgroundColor ? 'background-color:' + quantcastTheme.primaryButton.backgroundColor + '!important;' : '') + (quantcastTheme.primaryButton.borderColor ? 'border-color:' + quantcastTheme.primaryButton.borderColor + '!important;' : '') + (quantcastTheme.primaryButton.textColor ? 'color:' + quantcastTheme.primaryButton.textColor + '!important;' : '') + 'background-image: none!important;' + '}' : '') + (isNotEmptyCmp(quantcastTheme.primaryButtonHover) ? '.qc-cmp-ui .qc-cmp-button:hover' + '{' + (quantcastTheme.primaryButtonHover.backgroundColor ? 'background-color:' + quantcastTheme.primaryButtonHover.backgroundColor + '!important;' : '') + (quantcastTheme.primaryButtonHover.borderColor ? 'border-color:' + quantcastTheme.primaryButtonHover.borderColor + '!important;' : '') + (quantcastTheme.primaryButtonHover.textColor ? 'color:' + quantcastTheme.primaryButtonHover.textColor + '!important;' : '') + 'background-image: none!important;' + '}' : '') + (isNotEmptyCmp(quantcastTheme.secondaryButton) ? '.qc-cmp-ui .qc-cmp-button.qc-cmp-secondary-button' + '{' + (quantcastTheme.secondaryButton.backgroundColor ? 'background-color:' + quantcastTheme.secondaryButton.backgroundColor + '!important;' : '') + (quantcastTheme.secondaryButton.borderColor ? 'border-color:' + quantcastTheme.secondaryButton.borderColor + '!important;' : '') + (quantcastTheme.secondaryButton.textColor ? 'color:' + quantcastTheme.secondaryButton.textColor + '!important;' : '') + 'background-image: none!important;' + '}' : '') + (isNotEmptyCmp(quantcastTheme.secondaryButtonHover) ? '.qc-cmp-ui .qc-cmp-button.qc-cmp-secondary-button:hover' + '{' + (quantcastTheme.secondaryButtonHover.backgroundColor ? 'background-color:' + quantcastTheme.secondaryButtonHover.backgroundColor + '!important;' : '') + (quantcastTheme.secondaryButtonHover.borderColor ? 'border-color:' + quantcastTheme.secondaryButtonHover.borderColor + '!important;' : '') + (quantcastTheme.secondaryButtonHover.textColor ? 'color:' + quantcastTheme.secondaryButtonHover.textColor + '!important;' : '') + 'background-image: none!important;' + '}' : '') + (quantcastTheme.isSecondaryButtonHidden ? '.qc-cmp-ui .qc-cmp-button.qc-cmp-secondary-button' + '{' + 'display: none!important;' + '}' + '.qc-cmp-ui .qc-cmp-horizontal-buttons .qc-cmp-button.qc-cmp-secondary-button,' + '.qc-cmp-ui .qc-cmp-nav-bar-buttons-container .qc-cmp-button.qc-cmp-secondary-button' + '{' + 'display: block!important;' + '}' + '@media screen and (max-width: 550px)' + '{' + '.qc-cmp-buttons.qc-cmp-primary-buttons' + '{' + 'height: 3.8rem!important;' + '}' + '}' : '') + (isNotEmptyCmp(quantcastTheme.tableHeader) ? '.qc-cmp-ui .qc-cmp-table-header,' + '.qc-cmp-ui .qc-cmp-vendor-list .qc-cmp-vendor-row-header' + '{' + (quantcastTheme.tableHeader.backgroundColor ? 'background-color:' + quantcastTheme.tableHeader.backgroundColor + '!important;' : '') + (quantcastTheme.tableHeader.textColor ? 'color:' + quantcastTheme.tableHeader.textColor + '!important;' : '') + '}' : '') + (isNotEmptyCmp(quantcastTheme.tableRow) ? '.qc-cmp-ui .qc-cmp-publisher-purposes-table .qc-cmp-table-row,' + '.qc-cmp-ui .qc-cmp-table-row.qc-cmp-vendor-row' + '{' + (quantcastTheme.tableRow.backgroundColor ? 'background-color:' + quantcastTheme.tableRow.backgroundColor + '!important;' : '') + (quantcastTheme.tableRow.textColor ? 'color:' + quantcastTheme.tableRow.textColor + '!important;' : '') + '}' : '') + '.qc-cmp-ui .qc-cmp-purpose-description,' + '.qc-cmp-ui .qc-cmp-company-cell,' + '.qc-cmp-ui .qc-cmp-vendor-info-content,' + '.qc-cmp-ui .qc-cmp-vendor-policy,' + '.qc-cmp-ui .qc-cmp-vendor-info-list' + '{' + 'color: inherit!important;' + '}' + (isNotEmptyCmp(quantcastTheme.toggleOn) ? '.qc-cmp-ui .qc-cmp-toggle.qc-cmp-toggle-on,' + '.qc-cmp-ui .qc-cmp-small-toggle.qc-cmp-toggle-on' + '{' + (quantcastTheme.toggleOn.backgroundColor ? 'background-color:' + quantcastTheme.toggleOn.backgroundColor + '!important;' : '') + (quantcastTheme.toggleOn.borderColor ? 'border-color:' + quantcastTheme.toggleOn.borderColor + '!important;' : '') + '}' : '') + (isNotEmptyCmp(quantcastTheme.toggleOff) ? '.qc-cmp-ui .qc-cmp-toggle.qc-cmp-toggle-off,' + '.qc-cmp-ui .qc-cmp-small-toggle.qc-cmp-toggle-off' + '{' + (quantcastTheme.toggleOff.backgroundColor ? 'background-color:' + quantcastTheme.toggleOff.backgroundColor + '!important;' : '') + (quantcastTheme.toggleOff.borderColor ? 'border-color:' + quantcastTheme.toggleOff.borderColor + '!important;' : '') + '}' : '') + (quantcastTheme.toggleSwitchBorderColor ? '.qc-cmp-ui .qc-cmp-toggle-switch' + '{' + 'border: 1px solid ' + quantcastTheme.toggleSwitchBorderColor + '!important;' + '}' : '') + (quantcastTheme.toggleStatusTextColor ? '.qc-cmp-ui .qc-cmp-toggle-status' + '{' + 'color:' + quantcastTheme.toggleStatusTextColor + '!important;' + '}' : '') + (quantcastTheme.dropdownArrowColor ? '.qc-cmp-ui .qc-cmp-arrow-down' + '{' + 'background:' + 'url("data:image/svg+xml;charset=utf-8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' fill=\'none\' stroke=\'%23' + quantcastTheme.dropdownArrowColor.replace('#', '') + '\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M2 5l6 6 6-6\'/></svg>") 50% no-repeat' + '!important;' + '}' : '') + (quantcastTheme.additionalStyles ? quantcastTheme.additionalStyles : '') + '}';
        ref.parentNode.insertBefore(style, ref);
    }
}

function isNotEmptyCmp(obj) {
    return obj ? Object.getOwnPropertyNames(obj).length > 0 : false;
}
;function generatePriceGranularity(priceGranularity) {
    streamampUtils.log('Setting price granularity to', priceGranularity)
    if (priceGranularity != 'custom') {
        return priceGranularity;
    }
    return {
        'buckets': [{
            'precision': 2,
            'min': 0,
            'max': 20,
            'increment': 0.01
        }, {
            'precision': 2,
            'min': 20,
            'max': 30,
            'increment': 0.1
        }, {
            'precision': 2,
            'min': 30,
            'max': 40,
            'increment': 0.25
        }, {
            'precision': 2,
            'min': 40,
            'max': 50,
            'increment': 0.5
        }]
    };
}

function streamampConfigAdUnitSlotKeyValue(adUnitCode, googleSlot) {
    if (streamampConfig.keyValues && streamampConfig.keyValues[adUnitCode]) {
        streamampConfig.keyValues[adUnitCode].forEach(function(keyValue) {
            keyValue = streamampUtils.normalizeKeyValue(keyValue);
            if (keyValue.value !== undefined) {
                googleSlot = googleSlot.setTargeting(keyValue.name, [keyValue.value]);
            } else {
                googleSlot = googleSlot.setTargeting(keyValue.name, []);
            }
            streamampUtils.logGpt('Setting custom targeting', keyValue, 'for ad unit', adUnitCode);
        });
    }
    return googleSlot;
}

function streamampConfigSlotSafeFrame(googleSlot, adUnit) {
    streamampUtils.logGpt('Setting force safe frame for ad unit', adUnit)
    return googleSlot.setForceSafeFrame(true)
}

function streamampDefineAdUnitSlot(adUnit, predefinedSlotIds) {
    var googleSlot
    var predefinedSlotId
    if (streamampConfig.predefinedSlotOverride === true) {
        if (streamampConfig.predefinedSlotOverrideMethod === 'metoffice') {
            if (typeof unitFn !== "undefined") {
                var adUnitsToFilter = [];
                for (var key in window['metoffice']['advertising']['requiredSlots']) {
                    if (window['metoffice']['advertising']['requiredSlots'].hasOwnProperty(key)) {
                        adUnitsToFilter.push(key);
                    }
                }
                predefinedSlotId = predefinedSlotIds.find(function(slotId) {
                    return adUnitsToFilter.indexOf(adUnit.code) !== -1 && adUnit.code === slotId;
                });
            }
        }
        if (predefinedSlotId) {
            googleSlot = googletag.pubads().getSlots().find(function(slot) {
                return slot.getSlotElementId() === predefinedSlotId;
            });
            adUnit.code = googleSlot.getSlotElementId();
            adUnit.path = googleSlot.getAdUnitPath();
        } else {
            pbjs.que.push(function() {
                pbjs.removeAdUnit(adUnit.code);
            });
            return;
        }
    } else {
        if (!adUnit.outOfPage) {
            googleSlot = googletag.defineSlot(adUnit.path, adUnit.breakpoints[_streamampVariables.currentBreakpoint.label], adUnit.code)
        } else {
            googleSlot = googletag.defineOutOfPageSlot(adUnit.path, adUnit.code);
        }
    }
    googleSlot = streamampConfigAdUnitSlotKeyValue(adUnit.code, googleSlot);
    if (googleSlot && adUnit.safeFrame) {
        googleSlot = streamampConfigSlotSafeFrame(googleSlot, adUnit);
    }
    if (!predefinedSlotId && googleSlot) {
        googleSlot = googleSlot.addService(googletag.pubads());
    }

    window.gptAdSlots[adUnit.code] = googleSlot;

    onSlotCreated(adUnit.code, googleSlot);

    streamampUtils.logGpt('Defining ad unit slot', {
        code: adUnit.code,
        path: adUnit.path,
        sizes: JSON.stringify(adUnit.mediaTypes.banner.sizes)
    });
    return googleSlot;
}

function streamampAddDNSPrefetch(urls) {
    if (urls && urls.length) {
        streamampUtils.log('Pre-fetching links', urls)
        var dnsPrefetchElement;
        var i;
        var node;
        for (i = 0; i < urls.length; i++) {
            dnsPrefetchElement = window.document.createElement('link');
            dnsPrefetchElement.rel = 'preconnect';
            dnsPrefetchElement.href = urls[i];
            node = window.document.getElementsByTagName('script')[0];
            node.parentNode.appendChild(dnsPrefetchElement);
        }
    }
}

function streamampShouldShowAddUnit(adUnitCode) {
    if (window.AD_UNITS_TOGGLE_ON.length) {
        var toggleOn = window.AD_UNITS_TOGGLE_ON.indexOf(adUnitCode) !== -1;
        toggleOn ? streamampUtils.log('Ad unit', adUnitCode, 'is in AD_UNITS_TOGGLE_ON and should be shown') : null;
        return toggleOn;
    } else {
        var toggleOff = window.AD_UNITS_TOGGLE_OFF.indexOf(adUnitCode) === -1;
        toggleOff ? streamampUtils.log('Ad unit', adUnitCode, 'is not in AD_UNITS_TOGGLE_OFF and should be shown') : null;
        return toggleOff;
    }
}

function streamampAddClientTargeting() {
    var key;
    var keyValue;
    var i;
    var clientConfig = window[streamampConfig.namespace + 'ClientConfig'] || {};
    if (clientConfig && clientConfig.targets) {
        for (key in clientConfig.targets) {
            if (clientConfig.targets.hasOwnProperty(key)) {
                keyValue = {
                    name: key,
                    value: clientConfig.targets[key],
                    keyValueType: 'static'
                };
                keyValue = streamampUtils.normalizeKeyValue(keyValue);
                streamampUtils.logGpt('Setting custom targeting.', keyValue);
                googletag.pubads().setTargeting(keyValue.name, [keyValue.value]);
            }
        }
    }
    if (streamampConfig.globalKeyValues && streamampConfig.globalKeyValues.length) {
        for (i = 0; i < streamampConfig.globalKeyValues.length; i++) {
            keyValue = streamampConfig.globalKeyValues[i];
            keyValue = streamampUtils.normalizeKeyValue(keyValue);
            if (keyValue.value !== undefined) {
                googletag.pubads().setTargeting(keyValue.name, [keyValue.value]);
            } else {
                googletag.pubads().setTargeting(keyValue.name, []);
            }
        }
    }
}

function streamampGetBreakpoint() {
    var browserWidth = streamampUtils.getBrowserWidth();
    var i;
    var selectedBreakpoint;
    var breakpoint;
    for (i = 0; i < streamampConfig.breakpoints.length; i++) {
        breakpoint = streamampConfig.breakpoints[i];
        if (browserWidth >= breakpoint.minWidth && browserWidth <= breakpoint.maxWidth) {
            selectedBreakpoint = breakpoint;
            break;
        }
    }
    streamampUtils.log('Getting current breakpoint', selectedBreakpoint);
    return selectedBreakpoint;
}

function streamampGetAdUnitsPerBreakpoint() {
    var selectedBreakpoint = _streamampVariables.currentBreakpoint;
    var i;
    var adUnit;
    var filteredAdUnits = [];
    if (selectedBreakpoint) {
        for (i = 0; i < streamampConfig.adUnits.length; i++) {
            adUnit = streamampConfig.adUnits[i];
            var key
            if (streamampConfig.adUnits[i].breakpoints) {
                key = Object.keys(streamampConfig.adUnits[i].breakpoints)
            } else {
                key = []
            }
            if (adUnit && streamampShouldShowAddUnit(adUnit.code) && key.indexOf(selectedBreakpoint.label) !== -1) {
                adUnit.bids = adUnit.bids.filter(function(bid) {
                    return bid.labelAny.includes(selectedBreakpoint.label)
                })
                filteredAdUnits.push(adUnit);
            }
        }
    }
    streamampUtils.log('Filtering ad units for current breakpoint', filteredAdUnits)
    return filteredAdUnits;
}

function streamampRefreshBids(selectedAdUnits) {
    streamampUtils.log(selectedAdUnits ? ('Refreshing',
    selectedAdUnits) : 'Refreshing all ad units')
    var bidTimeout = _streamampVariables.bidTimeout
    var gptSlots = streamampGetAdUnitsPerBreakpoint();
    var apstagSlots;
    if (streamampConfig.a9Enabled) {
        apstagSlots = streamampCreateAPSAdUnits(gptSlots);
        if (selectedAdUnits) {
            if (Array.isArray(selectedAdUnits)) {
                apstagSlots = apstagSlots.filter(function(apstagSlot) {
                    return selectedAdUnits.indexOf(apstagSlot.slotID) > -1;
                });
            } else if (typeof selectedAdUnits === 'string') {
                apstagSlots = apstagSlots.filter(function(apstagSlot) {
                    return apstagSlot.slotID === selectedAdUnits
                })
            }
        }
        streamampUtils.logAps('Fetching bids for', apstagSlots)
        apstag.fetchBids({
            slots: apstagSlots,
            timeout: bidTimeout
        }, function(bids) {
            streamampUtils.logAps('Bids received (all)', bids, '(filtered out)', bids.filter(function(bid) {
                return bid.amzniid
            }))
        });
    }
    googletag.cmd.push(function() {
        var gptSlots = googletag.pubads().getSlots();
        var adUnitsToRefresh = [];
        var slotIds = [];
        if (selectedAdUnits) {
            var slots = {};
            for (i = 0; i < gptSlots.length; i++) {
                slot = gptSlots[i];
                slots[slot.getSlotElementId()] = slot;
            }
            if (Array.isArray(selectedAdUnits)) {
                for (var i = 0; i < selectedAdUnits.length; i++) {
                    adUnitsToRefresh.push(slots[selectedAdUnits[i]]);
                }
                slotIds = selectedAdUnits
            } else if (typeof selectedAdUnits === 'string') {
                adUnitsToRefresh = [slots[selectedAdUnits]];
                slotIds = [selectedAdUnits];
            }
        } else {
            adUnitsToRefresh = gptSlots
            slotIds = gptSlots.map(function(gptSlot) {
                return gptSlot.getSlotElementId()
            })
        }
        pbjs.que.push(function() {
            streamampUtils.logPbjs('Queuing requestBids()')
            pbjs.requestBids({
                timeout: bidTimeout,
                adUnitCodes: slotIds,
                bidsBackHandler: function() {
                    streamampAddClientTargeting();
                    streamampUtils.logPbjs('Queuing setTargetingForGPTAsync() for', slotIds)
                    pbjs.setTargetingForGPTAsync(slotIds);
                    streamampUtils.logGpt('Sending ad server request for', adUnitsToRefresh)
                    googletag.pubads().refresh(adUnitsToRefresh);

                    pbjs.isAuctionEnded = true;
                    processAuctionEndQueue();
                },
            })
            if (streamampConfig.a9Enabled) {
                streamampUtils.logAps('Setting display bids')
                apstag.setDisplayBids();
            }
        });
    })
}

function streamampRefresh(selectedAdUnits) {
    function generateRefreshTimeout() {
        var min = +streamampConfig.minRefreshTime || 60;
        var max = +streamampConfig.maxRefreshTime || 90;
        return (Math.floor(Math.random() * (max - min)) + min) * 1e3;
    }

    var refreshAds = function() {
        var refreshTimeout = generateRefreshTimeout()
        streamampUtils.log('Setting refresh', {
            selectedAdUnits: (selectedAdUnits ? selectedAdUnits : 'all'),
            refreshTimeout: refreshTimeout / 1e3 + ' seconds'
        });
        if (window.adRefreshTimer) {
            window.clearInterval(window.adRefreshTimer);
        }
        window.adRefreshTimer = setInterval(function() {
            if (streamampConfig.hasRefreshBids) {
                streamampRefreshBids(selectedAdUnits);
            }
        }, refreshTimeout);
    };
    refreshAds();
    window.onfocus = function() {
        refreshAds();
    }
    ;
    window.onblur = function() {
        streamampUtils.log('Refresh paused (interval cleared) due to window.onblur');
        window.clearInterval(window.adRefreshTimer);
        window.adRefreshTimer = null;
    }
    ;
}
;function streamampDestroySlots(adUnitCodes) {
    streamampUtils.log('Destroying ad unit slots', adUnitCodes);
    var adUnitSlots = adUnitCodes.reduce(function(slots, adUnitCode) {
        slots.push(window.gptAdSlots[adUnitCode]);
        return slots;
    }, []);
    pbjs.que.push(function() {
        streamampUtils.logPbjs('Queuing removal of', adUnitCodes, 'from pbjs.adUnits')
        pbjs.adUnits = pbjs.adUnits.filter(function(adUnit) {
            return adUnitCodes.indexOf(adUnit.code) === -1;
        });
    });
    googletag.cmd.push(function() {
        streamampUtils.logGpt('Queuing destroySlots() for', adUnitSlots)
        googletag.destroySlots(adUnitSlots);
        adUnitSlots.forEach(function(adUnitCode) {
            delete window.gptAdSlots[adUnitCode];
        });
    });
}

function streamampCreateAPSAdUnits(adUnitsGPT) {
    var label = _streamampVariables.currentBreakpoint.label
    var googleSizes = [[320, 100], [970, 90], [468, 60], [120, 600], [300, 1050], [150, 30]]

    function filterGoogleSize(adUnits) {
        var googleSizejson = googleSizes.map(function(googleSize) {
            return JSON.stringify(googleSize)
        })
        var filterGoogleSizes = adUnits.filter(function(adUnit) {
            return !googleSizejson.includes(JSON.stringify(adUnit))
        })
        streamampUtils.logAps('Filtering out Google sizes')
        return filterGoogleSizes
    }

    var apstagSlots = adUnitsGPT.map(function(adUnit) {
        return {
            slotID: adUnit.code,
            slotName: adUnit.path,
            sizes: filterGoogleSize(adUnit.breakpoints[label])
        }
    });
    streamampUtils.logAps('Generating apstag slots', apstagSlots)
    return apstagSlots
}

var isElementInViewport = function(el) {
    var bounding = el.getBoundingClientRect();
    return (bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
}

var auctionEndCallbacks = [];
var auctionEndQueue = {
    push: function(cb) {
        if (typeof cb === 'function') {
            pbjs.que.push(function() {
                if (pbjs.isAuctionEnded) {
                    cb.call();
                } else {
                    auctionEndCallbacks.push(cb);
                }
            });
        } else {
            streamampUtils.logError('Commands written into auctionEndQueue must be wrapped in a function');
        }
    }
};

function processAuctionEndQueue() {
    auctionEndCallbacks.forEach(function(cb) {
        if (typeof cb === 'function') {
            cb.call();
        } else {
            streamampUtils.logError('Commands written into auctionEndQueue must be wrapped in a function');
        }
    });
    auctionEndCallbacks = [];
}

window[streamampConfig.namespace] = window[streamampConfig.namespace] || {};
window[streamampConfig.namespace].que = window[streamampConfig.namespace].que || [];

processQueue()

function processQueue() {
    window[streamampConfig.namespace].que.forEach(function(cmd) {
        if (typeof cmd.called === 'undefined' && typeof cmd === 'function') {
            try {
                cmd.call();
                cmd.called = true;
            } catch (e) {
                streamampUtils.logError('Error processing command :' + e.message);
            }
        }
    });

    window[streamampConfig.namespace].que.push = function(cmd) {
        if (typeof cmd === 'function') {
            try {
                cmd.call();
            } catch (e) {
                streamampUtils.logError('Error processing command :' + e.message);
            }
        } else {
            streamampUtils.logError('Commands written into ', streamampConfig.namespace + '.cmd.push must be wrapped in a function');
        }
    }
    ;
}

function overrideGoogletagDisplay(config) {
    googletag.cmd.push(function() {
        var _googletagDisplay = googletag.display;
        googletag.display = function(adUnitCode) {
            streamampUtils.log('DEBUG:', 'googletag.display called for', adUnitCode);
            _googletagDisplay(adUnitCode);
            var slot = googletag.pubads().getSlots().find(function(slot) {
                return slot.getSlotElementId() === adUnitCode;
            });

            window[config.namespace].que.push(function() {
                // Code updated for the SRA with lazyloading.
                var pos1 = document.querySelector('#Position1');
                var sraArray = ["Top", "Top2", "Top3", "TopLeft", "TopRight"];
                if (pos1) {
                    (isElementInViewport(pos1)) ? sraArray.push("Position1") : sraArray;
                }
                auctionEndQueue.push(function() {
                    if (sraArray.includes(slot.getSlotElementId())) {
                        googletag.pubads().refresh([slot]);
                    }
                })
            })
        }
    })
}

function registerOnSlotCreated(cb) {
    streamampUtils.log('DEBUG:', 'Register onSlotCreated Events');
    onSlotCreatedEvents.push(cb);
}

function onSlotCreated(code, slot) {
    if (!onSlotCreatedEvents.length) {
        return;
    }

    streamampUtils.log('DEBUG:', 'Fire onSlotCreated Events');
    onSlotCreatedEvents.forEach(function(func) {
        func.call(this, {
            code: code,
            slot: slot
        });
    });
}

function copyToNewAdUnit(newAdUnitCode, originalAdUnitCode, callback) {
    if (!document.getElementById(newAdUnitCode)) {
        return;
    }

    streamampUtils.log('DEBUG:', 'Copy Ad Unit from', originalAdUnitCode, 'to', newAdUnitCode);

    pbjs.que.push(function() {
        pbjs.isAuctionEnded = false;

        var originalAdUnit = pbjs.adUnits.find(function(adUnit) {
            return adUnit.code === originalAdUnitCode;
        });
        if (!originalAdUnit) {
            return;
        }

        var newAdUnit = JSON.parse(JSON.stringify(originalAdUnit));
        newAdUnit.code = newAdUnitCode;
        delete newAdUnit.transactionId;

        pbjs.addAdUnits(newAdUnit);
        streamampDefineAdUnitSlot(newAdUnit, []);

        pbjs.requestBids({
            timeout: streamampConfig.bidTimeout,
            adUnitCodes: [newAdUnitCode],
            bidsBackHandler: function() {
                googletag.cmd.push(function() {
                    pbjs.setTargetingForGPTAsync();
                    streamampAddClientTargeting()

                    if (typeof callback === 'function') {
                        callback.call();
                    }

                    pbjs.isAuctionEnded = true;
                    processAuctionEndQueue();
                });
            }
        });

        if (streamampConfig.adUnitsToRefresh && streamampConfig.adUnitsToRefresh.length !== 0 && streamampConfig.adUnitsToRefresh.indexOf(originalAdUnitCode) !== -1) {
            streamampUtils.log('DEBUG:', 'Register copied ad unit', newAdUnitCode, 'to ad refreshing list');
            streamampConfig.adUnitsToRefresh.push(newAdUnitCode);
        }
    });
}

window.streamamp = {
    refreshAllBids: function() {
        streamampUtils.log('window.streamamp.refreshAllBids() was called')
        streamampRefreshBids()
    },
    refreshBids: function(selectedAdUnits) {
        if (selectedAdUnits.length > 0) {
            streamampUtils.log('window.streamamp.refreshBids() was called with', selectedAdUnits, 'ad unit(s)')
            streamampRefreshBids(selectedAdUnits)
        } else {
            streamampUtils.logError('refreshBids() must be passed an array of strings or a string of a single ad unit code')
        }
    },
    destroySlots: function(selectedAdUnits) {
        streamampDestroySlots(selectedAdUnits)
    },
    initialize: function() {
        if (streamampConfig.preventInit) {
            streamampUtils.log('window.streamamp.initialize() was called')
            streamampInit()
        }
    },
    que: window[streamampConfig.namespace].que,
    onSlotCreated: registerOnSlotCreated,
    auctionEndQueue: auctionEndQueue,
    copyToNewAdUnit: copyToNewAdUnit
};

Leya.setKey(streamampConfig.token);