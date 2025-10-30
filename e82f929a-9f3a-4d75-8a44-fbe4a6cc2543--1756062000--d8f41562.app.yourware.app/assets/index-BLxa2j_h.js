function U0(n, r) {
    for (var s = 0; s < r.length; s++) {
        const a = r[s];
        if (typeof a != "string" && !Array.isArray(a)) {
            for (const l in a)
                if (l !== "default" && !(l in n)) {
                    const f = Object.getOwnPropertyDescriptor(a, l);
                    f && Object.defineProperty(n, l, f.get ? f : {
                        enumerable: !0,
                        get: () => a[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) a(l);
    new MutationObserver(l => {
        for (const f of l)
            if (f.type === "childList")
                for (const d of f.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && a(d)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(l) {
        const f = {};
        return l.integrity && (f.integrity = l.integrity), l.referrerPolicy && (f.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? f.credentials = "include" : l.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function a(l) {
        if (l.ep) return;
        l.ep = !0;
        const f = s(l);
        fetch(l.href, f)
    }
})();

function W0(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var ul = {
        exports: {}
    },
    mi = {},
    cl = {
        exports: {}
    },
    se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vf;

function G0() {
    if (Vf) return se;
    Vf = 1;
    var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        l = Symbol.for("react.profiler"),
        f = Symbol.for("react.provider"),
        d = Symbol.for("react.context"),
        h = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        g = Symbol.for("react.memo"),
        v = Symbol.for("react.lazy"),
        x = Symbol.iterator;

    function w(N) {
        return N === null || typeof N != "object" ? null : (N = x && N[x] || N["@@iterator"], typeof N == "function" ? N : null)
    }
    var T = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        V = Object.assign,
        A = {};

    function k(N, R, re) {
        this.props = N, this.context = R, this.refs = A, this.updater = re || T
    }
    k.prototype.isReactComponent = {}, k.prototype.setState = function(N, R) {
        if (typeof N != "object" && typeof N != "function" && N != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, N, R, "setState")
    }, k.prototype.forceUpdate = function(N) {
        this.updater.enqueueForceUpdate(this, N, "forceUpdate")
    };

    function z() {}
    z.prototype = k.prototype;

    function O(N, R, re) {
        this.props = N, this.context = R, this.refs = A, this.updater = re || T
    }
    var Z = O.prototype = new z;
    Z.constructor = O, V(Z, k.prototype), Z.isPureReactComponent = !0;
    var Y = Array.isArray,
        U = Object.prototype.hasOwnProperty,
        ne = {
            current: null
        },
        ae = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function X(N, R, re) {
        var oe, ue = {},
            ce = null,
            pe = null;
        if (R != null)
            for (oe in R.ref !== void 0 && (pe = R.ref), R.key !== void 0 && (ce = "" + R.key), R) U.call(R, oe) && !ae.hasOwnProperty(oe) && (ue[oe] = R[oe]);
        var fe = arguments.length - 2;
        if (fe === 1) ue.children = re;
        else if (1 < fe) {
            for (var Le = Array(fe), lt = 0; lt < fe; lt++) Le[lt] = arguments[lt + 2];
            ue.children = Le
        }
        if (N && N.defaultProps)
            for (oe in fe = N.defaultProps, fe) ue[oe] === void 0 && (ue[oe] = fe[oe]);
        return {
            $$typeof: n,
            type: N,
            key: ce,
            ref: pe,
            props: ue,
            _owner: ne.current
        }
    }

    function ye(N, R) {
        return {
            $$typeof: n,
            type: N.type,
            key: R,
            ref: N.ref,
            props: N.props,
            _owner: N._owner
        }
    }

    function we(N) {
        return typeof N == "object" && N !== null && N.$$typeof === n
    }

    function Ke(N) {
        var R = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + N.replace(/[=:]/g, function(re) {
            return R[re]
        })
    }
    var at = /\/+/g;

    function He(N, R) {
        return typeof N == "object" && N !== null && N.key != null ? Ke("" + N.key) : R.toString(36)
    }

    function qe(N, R, re, oe, ue) {
        var ce = typeof N;
        (ce === "undefined" || ce === "boolean") && (N = null);
        var pe = !1;
        if (N === null) pe = !0;
        else switch (ce) {
            case "string":
            case "number":
                pe = !0;
                break;
            case "object":
                switch (N.$$typeof) {
                    case n:
                    case r:
                        pe = !0
                }
        }
        if (pe) return pe = N, ue = ue(pe), N = oe === "" ? "." + He(pe, 0) : oe, Y(ue) ? (re = "", N != null && (re = N.replace(at, "$&/") + "/"), qe(ue, R, re, "", function(lt) {
            return lt
        })) : ue != null && (we(ue) && (ue = ye(ue, re + (!ue.key || pe && pe.key === ue.key ? "" : ("" + ue.key).replace(at, "$&/") + "/") + N)), R.push(ue)), 1;
        if (pe = 0, oe = oe === "" ? "." : oe + ":", Y(N))
            for (var fe = 0; fe < N.length; fe++) {
                ce = N[fe];
                var Le = oe + He(ce, fe);
                pe += qe(ce, R, re, Le, ue)
            } else if (Le = w(N), typeof Le == "function")
                for (N = Le.call(N), fe = 0; !(ce = N.next()).done;) ce = ce.value, Le = oe + He(ce, fe++), pe += qe(ce, R, re, Le, ue);
            else if (ce === "object") throw R = String(N), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(N).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
        return pe
    }

    function Tt(N, R, re) {
        if (N == null) return N;
        var oe = [],
            ue = 0;
        return qe(N, oe, "", "", function(ce) {
            return R.call(re, ce, ue++)
        }), oe
    }

    function Ye(N) {
        if (N._status === -1) {
            var R = N._result;
            R = R(), R.then(function(re) {
                (N._status === 0 || N._status === -1) && (N._status = 1, N._result = re)
            }, function(re) {
                (N._status === 0 || N._status === -1) && (N._status = 2, N._result = re)
            }), N._status === -1 && (N._status = 0, N._result = R)
        }
        if (N._status === 1) return N._result.default;
        throw N._result
    }
    var ie = {
            current: null
        },
        J = {
            transition: null
        },
        $ = {
            ReactCurrentDispatcher: ie,
            ReactCurrentBatchConfig: J,
            ReactCurrentOwner: ne
        };

    function I() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return se.Children = {
        map: Tt,
        forEach: function(N, R, re) {
            Tt(N, function() {
                R.apply(this, arguments)
            }, re)
        },
        count: function(N) {
            var R = 0;
            return Tt(N, function() {
                R++
            }), R
        },
        toArray: function(N) {
            return Tt(N, function(R) {
                return R
            }) || []
        },
        only: function(N) {
            if (!we(N)) throw Error("React.Children.only expected to receive a single React element child.");
            return N
        }
    }, se.Component = k, se.Fragment = s, se.Profiler = l, se.PureComponent = O, se.StrictMode = a, se.Suspense = p, se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $, se.act = I, se.cloneElement = function(N, R, re) {
        if (N == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + N + ".");
        var oe = V({}, N.props),
            ue = N.key,
            ce = N.ref,
            pe = N._owner;
        if (R != null) {
            if (R.ref !== void 0 && (ce = R.ref, pe = ne.current), R.key !== void 0 && (ue = "" + R.key), N.type && N.type.defaultProps) var fe = N.type.defaultProps;
            for (Le in R) U.call(R, Le) && !ae.hasOwnProperty(Le) && (oe[Le] = R[Le] === void 0 && fe !== void 0 ? fe[Le] : R[Le])
        }
        var Le = arguments.length - 2;
        if (Le === 1) oe.children = re;
        else if (1 < Le) {
            fe = Array(Le);
            for (var lt = 0; lt < Le; lt++) fe[lt] = arguments[lt + 2];
            oe.children = fe
        }
        return {
            $$typeof: n,
            type: N.type,
            key: ue,
            ref: ce,
            props: oe,
            _owner: pe
        }
    }, se.createContext = function(N) {
        return N = {
            $$typeof: d,
            _currentValue: N,
            _currentValue2: N,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, N.Provider = {
            $$typeof: f,
            _context: N
        }, N.Consumer = N
    }, se.createElement = X, se.createFactory = function(N) {
        var R = X.bind(null, N);
        return R.type = N, R
    }, se.createRef = function() {
        return {
            current: null
        }
    }, se.forwardRef = function(N) {
        return {
            $$typeof: h,
            render: N
        }
    }, se.isValidElement = we, se.lazy = function(N) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: N
            },
            _init: Ye
        }
    }, se.memo = function(N, R) {
        return {
            $$typeof: g,
            type: N,
            compare: R === void 0 ? null : R
        }
    }, se.startTransition = function(N) {
        var R = J.transition;
        J.transition = {};
        try {
            N()
        } finally {
            J.transition = R
        }
    }, se.unstable_act = I, se.useCallback = function(N, R) {
        return ie.current.useCallback(N, R)
    }, se.useContext = function(N) {
        return ie.current.useContext(N)
    }, se.useDebugValue = function() {}, se.useDeferredValue = function(N) {
        return ie.current.useDeferredValue(N)
    }, se.useEffect = function(N, R) {
        return ie.current.useEffect(N, R)
    }, se.useId = function() {
        return ie.current.useId()
    }, se.useImperativeHandle = function(N, R, re) {
        return ie.current.useImperativeHandle(N, R, re)
    }, se.useInsertionEffect = function(N, R) {
        return ie.current.useInsertionEffect(N, R)
    }, se.useLayoutEffect = function(N, R) {
        return ie.current.useLayoutEffect(N, R)
    }, se.useMemo = function(N, R) {
        return ie.current.useMemo(N, R)
    }, se.useReducer = function(N, R, re) {
        return ie.current.useReducer(N, R, re)
    }, se.useRef = function(N) {
        return ie.current.useRef(N)
    }, se.useState = function(N) {
        return ie.current.useState(N)
    }, se.useSyncExternalStore = function(N, R, re) {
        return ie.current.useSyncExternalStore(N, R, re)
    }, se.useTransition = function() {
        return ie.current.useTransition()
    }, se.version = "18.3.1", se
}
var Af;

function $l() {
    return Af || (Af = 1, cl.exports = G0()), cl.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kf;

function Q0() {
    if (kf) return mi;
    kf = 1;
    var n = $l(),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function d(h, p, g) {
        var v, x = {},
            w = null,
            T = null;
        g !== void 0 && (w = "" + g), p.key !== void 0 && (w = "" + p.key), p.ref !== void 0 && (T = p.ref);
        for (v in p) a.call(p, v) && !f.hasOwnProperty(v) && (x[v] = p[v]);
        if (h && h.defaultProps)
            for (v in p = h.defaultProps, p) x[v] === void 0 && (x[v] = p[v]);
        return {
            $$typeof: r,
            type: h,
            key: w,
            ref: T,
            props: x,
            _owner: l.current
        }
    }
    return mi.Fragment = s, mi.jsx = d, mi.jsxs = d, mi
}
var bf;

function H0() {
    return bf || (bf = 1, ul.exports = Q0()), ul.exports
}
var y = H0(),
    C = $l();
const Y0 = W0(C),
    $0 = U0({
        __proto__: null,
        default: Y0
    }, [C]);
var Hs = {},
    dl = {
        exports: {}
    },
    st = {},
    fl = {
        exports: {}
    },
    hl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cf;

function X0() {
    return Cf || (Cf = 1, function(n) {
        function r(J, $) {
            var I = J.length;
            J.push($);
            e: for (; 0 < I;) {
                var N = I - 1 >>> 1,
                    R = J[N];
                if (0 < l(R, $)) J[N] = $, J[I] = R, I = N;
                else break e
            }
        }

        function s(J) {
            return J.length === 0 ? null : J[0]
        }

        function a(J) {
            if (J.length === 0) return null;
            var $ = J[0],
                I = J.pop();
            if (I !== $) {
                J[0] = I;
                e: for (var N = 0, R = J.length, re = R >>> 1; N < re;) {
                    var oe = 2 * (N + 1) - 1,
                        ue = J[oe],
                        ce = oe + 1,
                        pe = J[ce];
                    if (0 > l(ue, I)) ce < R && 0 > l(pe, ue) ? (J[N] = pe, J[ce] = I, N = ce) : (J[N] = ue, J[oe] = I, N = oe);
                    else if (ce < R && 0 > l(pe, I)) J[N] = pe, J[ce] = I, N = ce;
                    else break e
                }
            }
            return $
        }

        function l(J, $) {
            var I = J.sortIndex - $.sortIndex;
            return I !== 0 ? I : J.id - $.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date,
                h = d.now();
            n.unstable_now = function() {
                return d.now() - h
            }
        }
        var p = [],
            g = [],
            v = 1,
            x = null,
            w = 3,
            T = !1,
            V = !1,
            A = !1,
            k = typeof setTimeout == "function" ? setTimeout : null,
            z = typeof clearTimeout == "function" ? clearTimeout : null,
            O = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

        function Z(J) {
            for (var $ = s(g); $ !== null;) {
                if ($.callback === null) a(g);
                else if ($.startTime <= J) a(g), $.sortIndex = $.expirationTime, r(p, $);
                else break;
                $ = s(g)
            }
        }

        function Y(J) {
            if (A = !1, Z(J), !V)
                if (s(p) !== null) V = !0, Ye(U);
                else {
                    var $ = s(g);
                    $ !== null && ie(Y, $.startTime - J)
                }
        }

        function U(J, $) {
            V = !1, A && (A = !1, z(X), X = -1), T = !0;
            var I = w;
            try {
                for (Z($), x = s(p); x !== null && (!(x.expirationTime > $) || J && !Ke());) {
                    var N = x.callback;
                    if (typeof N == "function") {
                        x.callback = null, w = x.priorityLevel;
                        var R = N(x.expirationTime <= $);
                        $ = n.unstable_now(), typeof R == "function" ? x.callback = R : x === s(p) && a(p), Z($)
                    } else a(p);
                    x = s(p)
                }
                if (x !== null) var re = !0;
                else {
                    var oe = s(g);
                    oe !== null && ie(Y, oe.startTime - $), re = !1
                }
                return re
            } finally {
                x = null, w = I, T = !1
            }
        }
        var ne = !1,
            ae = null,
            X = -1,
            ye = 5,
            we = -1;

        function Ke() {
            return !(n.unstable_now() - we < ye)
        }

        function at() {
            if (ae !== null) {
                var J = n.unstable_now();
                we = J;
                var $ = !0;
                try {
                    $ = ae(!0, J)
                } finally {
                    $ ? He() : (ne = !1, ae = null)
                }
            } else ne = !1
        }
        var He;
        if (typeof O == "function") He = function() {
            O(at)
        };
        else if (typeof MessageChannel < "u") {
            var qe = new MessageChannel,
                Tt = qe.port2;
            qe.port1.onmessage = at, He = function() {
                Tt.postMessage(null)
            }
        } else He = function() {
            k(at, 0)
        };

        function Ye(J) {
            ae = J, ne || (ne = !0, He())
        }

        function ie(J, $) {
            X = k(function() {
                J(n.unstable_now())
            }, $)
        }
        n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(J) {
            J.callback = null
        }, n.unstable_continueExecution = function() {
            V || T || (V = !0, Ye(U))
        }, n.unstable_forceFrameRate = function(J) {
            0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ye = 0 < J ? Math.floor(1e3 / J) : 5
        }, n.unstable_getCurrentPriorityLevel = function() {
            return w
        }, n.unstable_getFirstCallbackNode = function() {
            return s(p)
        }, n.unstable_next = function(J) {
            switch (w) {
                case 1:
                case 2:
                case 3:
                    var $ = 3;
                    break;
                default:
                    $ = w
            }
            var I = w;
            w = $;
            try {
                return J()
            } finally {
                w = I
            }
        }, n.unstable_pauseExecution = function() {}, n.unstable_requestPaint = function() {}, n.unstable_runWithPriority = function(J, $) {
            switch (J) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    J = 3
            }
            var I = w;
            w = J;
            try {
                return $()
            } finally {
                w = I
            }
        }, n.unstable_scheduleCallback = function(J, $, I) {
            var N = n.unstable_now();
            switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? N + I : N) : I = N, J) {
                case 1:
                    var R = -1;
                    break;
                case 2:
                    R = 250;
                    break;
                case 5:
                    R = 1073741823;
                    break;
                case 4:
                    R = 1e4;
                    break;
                default:
                    R = 5e3
            }
            return R = I + R, J = {
                id: v++,
                callback: $,
                priorityLevel: J,
                startTime: I,
                expirationTime: R,
                sortIndex: -1
            }, I > N ? (J.sortIndex = I, r(g, J), s(p) === null && J === s(g) && (A ? (z(X), X = -1) : A = !0, ie(Y, I - N))) : (J.sortIndex = R, r(p, J), V || T || (V = !0, Ye(U))), J
        }, n.unstable_shouldYield = Ke, n.unstable_wrapCallback = function(J) {
            var $ = w;
            return function() {
                var I = w;
                w = $;
                try {
                    return J.apply(this, arguments)
                } finally {
                    w = I
                }
            }
        }
    }(hl)), hl
}
var zf;

function K0() {
    return zf || (zf = 1, fl.exports = X0()), fl.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pf;

function q0() {
    if (Pf) return st;
    Pf = 1;
    var n = $l(),
        r = K0();

    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var a = new Set,
        l = {};

    function f(e, t) {
        d(e, t), d(e + "Capture", t)
    }

    function d(e, t) {
        for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e])
    }
    var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        p = Object.prototype.hasOwnProperty,
        g = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        v = {},
        x = {};

    function w(e) {
        return p.call(x, e) ? !0 : p.call(v, e) ? !1 : g.test(e) ? x[e] = !0 : (v[e] = !0, !1)
    }

    function T(e, t, i, o) {
        if (i !== null && i.type === 0) return !1;
        switch (typeof t) {
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return o ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1
        }
    }

    function V(e, t, i, o) {
        if (t === null || typeof t > "u" || T(e, t, i, o)) return !0;
        if (o) return !1;
        if (i !== null) switch (i.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
        }
        return !1
    }

    function A(e, t, i, o, u, c, m) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = o, this.attributeNamespace = u, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = m
    }
    var k = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        k[e] = new A(e, 0, !1, e, null, !1, !1)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        k[t] = new A(t, 1, !1, e[1], null, !1, !1)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        k[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        k[e] = new A(e, 2, !1, e, null, !1, !1)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        k[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        k[e] = new A(e, 3, !0, e, null, !1, !1)
    }), ["capture", "download"].forEach(function(e) {
        k[e] = new A(e, 4, !1, e, null, !1, !1)
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
        k[e] = new A(e, 6, !1, e, null, !1, !1)
    }), ["rowSpan", "start"].forEach(function(e) {
        k[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1)
    });
    var z = /[\-:]([a-z])/g;

    function O(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(z, O);
        k[t] = new A(t, 1, !1, e, null, !1, !1)
    }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(z, O);
        k[t] = new A(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(z, O);
        k[t] = new A(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
        k[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1)
    }), k.xlinkHref = new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
        k[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0)
    });

    function Z(e, t, i, o) {
        var u = k.hasOwnProperty(t) ? k[t] : null;
        (u !== null ? u.type !== 0 : o || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (V(t, i, u, o) && (i = null), o || u === null ? w(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : u.mustUseProperty ? e[u.propertyName] = i === null ? u.type === 3 ? !1 : "" : i : (t = u.attributeName, o = u.attributeNamespace, i === null ? e.removeAttribute(t) : (u = u.type, i = u === 3 || u === 4 && i === !0 ? "" : "" + i, o ? e.setAttributeNS(o, t, i) : e.setAttribute(t, i))))
    }
    var Y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        U = Symbol.for("react.element"),
        ne = Symbol.for("react.portal"),
        ae = Symbol.for("react.fragment"),
        X = Symbol.for("react.strict_mode"),
        ye = Symbol.for("react.profiler"),
        we = Symbol.for("react.provider"),
        Ke = Symbol.for("react.context"),
        at = Symbol.for("react.forward_ref"),
        He = Symbol.for("react.suspense"),
        qe = Symbol.for("react.suspense_list"),
        Tt = Symbol.for("react.memo"),
        Ye = Symbol.for("react.lazy"),
        ie = Symbol.for("react.offscreen"),
        J = Symbol.iterator;

    function $(e) {
        return e === null || typeof e != "object" ? null : (e = J && e[J] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var I = Object.assign,
        N;

    function R(e) {
        if (N === void 0) try {
            throw Error()
        } catch (i) {
            var t = i.stack.trim().match(/\n( *(at )?)/);
            N = t && t[1] || ""
        }
        return `
` + N + e
    }
    var re = !1;

    function oe(e, t) {
        if (!e || re) return "";
        re = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                        throw Error()
                    }, Object.defineProperty(t.prototype, "props", {
                        set: function() {
                            throw Error()
                        }
                    }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (b) {
                        var o = b
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (b) {
                        o = b
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (b) {
                    o = b
                }
                e()
            }
        } catch (b) {
            if (b && o && typeof b.stack == "string") {
                for (var u = b.stack.split(`
`), c = o.stack.split(`
`), m = u.length - 1, L = c.length - 1; 1 <= m && 0 <= L && u[m] !== c[L];) L--;
                for (; 1 <= m && 0 <= L; m--, L--)
                    if (u[m] !== c[L]) {
                        if (m !== 1 || L !== 1)
                            do
                                if (m--, L--, 0 > L || u[m] !== c[L]) {
                                    var j = `
` + u[m].replace(" at new ", " at ");
                                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j
                                }
                        while (1 <= m && 0 <= L);
                        break
                    }
            }
        } finally {
            re = !1, Error.prepareStackTrace = i
        }
        return (e = e ? e.displayName || e.name : "") ? R(e) : ""
    }

    function ue(e) {
        switch (e.tag) {
            case 5:
                return R(e.type);
            case 16:
                return R("Lazy");
            case 13:
                return R("Suspense");
            case 19:
                return R("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = oe(e.type, !1), e;
            case 11:
                return e = oe(e.type.render, !1), e;
            case 1:
                return e = oe(e.type, !0), e;
            default:
                return ""
        }
    }

    function ce(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case ae:
                return "Fragment";
            case ne:
                return "Portal";
            case ye:
                return "Profiler";
            case X:
                return "StrictMode";
            case He:
                return "Suspense";
            case qe:
                return "SuspenseList"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case Ke:
                return (e.displayName || "Context") + ".Consumer";
            case we:
                return (e._context.displayName || "Context") + ".Provider";
            case at:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Tt:
                return t = e.displayName || null, t !== null ? t : ce(e.type) || "Memo";
            case Ye:
                t = e._payload, e = e._init;
                try {
                    return ce(e(t))
                } catch {}
        }
        return null
    }

    function pe(e) {
        var t = e.type;
        switch (e.tag) {
            case 24:
                return "Cache";
            case 9:
                return (t.displayName || "Context") + ".Consumer";
            case 10:
                return (t._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return t;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return ce(t);
            case 8:
                return t === X ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof t == "function") return t.displayName || t.name || null;
                if (typeof t == "string") return t
        }
        return null
    }

    function fe(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function Le(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function lt(e) {
        var t = Le(e) ? "checked" : "value",
            i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            o = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var u = i.get,
                c = i.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(m) {
                    o = "" + m, c.call(this, m)
                }
            }), Object.defineProperty(e, t, {
                enumerable: i.enumerable
            }), {
                getValue: function() {
                    return o
                },
                setValue: function(m) {
                    o = "" + m
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Fi(e) {
        e._valueTracker || (e._valueTracker = lt(e))
    }

    function zu(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var i = t.getValue(),
            o = "";
        return e && (o = Le(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (t.setValue(e), !0) : !1
    }

    function Oi(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }

    function yo(e, t) {
        var i = t.checked;
        return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: i ? ? e._wrapperState.initialChecked
        })
    }

    function Pu(e, t) {
        var i = t.defaultValue == null ? "" : t.defaultValue,
            o = t.checked != null ? t.checked : t.defaultChecked;
        i = fe(t.value != null ? t.value : i), e._wrapperState = {
            initialChecked: o,
            initialValue: i,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }

    function Ru(e, t) {
        t = t.checked, t != null && Z(e, "checked", t, !1)
    }

    function go(e, t) {
        Ru(e, t);
        var i = fe(t.value),
            o = t.type;
        if (i != null) o === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
        else if (o === "submit" || o === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? vo(e, t.type, i) : t.hasOwnProperty("defaultValue") && vo(e, t.type, fe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }

    function Bu(e, t, i) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var o = t.type;
            if (!(o !== "submit" && o !== "reset" || t.value !== void 0 && t.value !== null)) return;
            t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t
        }
        i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i)
    }

    function vo(e, t, i) {
        (t !== "number" || Oi(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i))
    }
    var kr = Array.isArray;

    function Gn(e, t, i, o) {
        if (e = e.options, t) {
            t = {};
            for (var u = 0; u < i.length; u++) t["$" + i[u]] = !0;
            for (i = 0; i < e.length; i++) u = t.hasOwnProperty("$" + e[i].value), e[i].selected !== u && (e[i].selected = u), u && o && (e[i].defaultSelected = !0)
        } else {
            for (i = "" + fe(i), t = null, u = 0; u < e.length; u++) {
                if (e[u].value === i) {
                    e[u].selected = !0, o && (e[u].defaultSelected = !0);
                    return
                }
                t !== null || e[u].disabled || (t = e[u])
            }
            t !== null && (t.selected = !0)
        }
    }

    function xo(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
        return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function Du(e, t) {
        var i = t.value;
        if (i == null) {
            if (i = t.children, t = t.defaultValue, i != null) {
                if (t != null) throw Error(s(92));
                if (kr(i)) {
                    if (1 < i.length) throw Error(s(93));
                    i = i[0]
                }
                t = i
            }
            t == null && (t = ""), i = t
        }
        e._wrapperState = {
            initialValue: fe(i)
        }
    }

    function Fu(e, t) {
        var i = fe(t.value),
            o = fe(t.defaultValue);
        i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), o != null && (e.defaultValue = "" + o)
    }

    function Ou(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }

    function Zu(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function wo(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Zu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Zi, Ju = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, o, u) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, i, o, u)
            })
        } : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (Zi = Zi || document.createElement("div"), Zi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Zi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    });

    function br(e, t) {
        if (t) {
            var i = e.firstChild;
            if (i && i === e.lastChild && i.nodeType === 3) {
                i.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Cr = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        Hm = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Cr).forEach(function(e) {
        Hm.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Cr[t] = Cr[e]
        })
    });

    function _u(e, t, i) {
        return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || Cr.hasOwnProperty(e) && Cr[e] ? ("" + t).trim() : t + "px"
    }

    function Iu(e, t) {
        e = e.style;
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var o = i.indexOf("--") === 0,
                    u = _u(i, t[i], o);
                i === "float" && (i = "cssFloat"), o ? e.setProperty(i, u) : e[i] = u
            }
    }
    var Ym = I({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function Lo(e, t) {
        if (t) {
            if (Ym[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null) throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
            }
            if (t.style != null && typeof t.style != "object") throw Error(s(62))
        }
    }

    function jo(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is == "string";
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var So = null;

    function To(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var No = null,
        Qn = null,
        Hn = null;

    function Uu(e) {
        if (e = ei(e)) {
            if (typeof No != "function") throw Error(s(280));
            var t = e.stateNode;
            t && (t = us(t), No(e.stateNode, e.type, t))
        }
    }

    function Wu(e) {
        Qn ? Hn ? Hn.push(e) : Hn = [e] : Qn = e
    }

    function Gu() {
        if (Qn) {
            var e = Qn,
                t = Hn;
            if (Hn = Qn = null, Uu(e), t)
                for (e = 0; e < t.length; e++) Uu(t[e])
        }
    }

    function Qu(e, t) {
        return e(t)
    }

    function Hu() {}
    var Eo = !1;

    function Yu(e, t, i) {
        if (Eo) return e(t, i);
        Eo = !0;
        try {
            return Qu(e, t, i)
        } finally {
            Eo = !1, (Qn !== null || Hn !== null) && (Hu(), Gu())
        }
    }

    function zr(e, t) {
        var i = e.stateNode;
        if (i === null) return null;
        var o = us(i);
        if (o === null) return null;
        i = o[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (i && typeof i != "function") throw Error(s(231, t, typeof i));
        return i
    }
    var Mo = !1;
    if (h) try {
        var Pr = {};
        Object.defineProperty(Pr, "passive", {
            get: function() {
                Mo = !0
            }
        }), window.addEventListener("test", Pr, Pr), window.removeEventListener("test", Pr, Pr)
    } catch {
        Mo = !1
    }

    function $m(e, t, i, o, u, c, m, L, j) {
        var b = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(i, b)
        } catch (B) {
            this.onError(B)
        }
    }
    var Rr = !1,
        Ji = null,
        _i = !1,
        Vo = null,
        Xm = {
            onError: function(e) {
                Rr = !0, Ji = e
            }
        };

    function Km(e, t, i, o, u, c, m, L, j) {
        Rr = !1, Ji = null, $m.apply(Xm, arguments)
    }

    function qm(e, t, i, o, u, c, m, L, j) {
        if (Km.apply(this, arguments), Rr) {
            if (Rr) {
                var b = Ji;
                Rr = !1, Ji = null
            } else throw Error(s(198));
            _i || (_i = !0, Vo = b)
        }
    }

    function Mn(e) {
        var t = e,
            i = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? i : null
    }

    function $u(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function Xu(e) {
        if (Mn(e) !== e) throw Error(s(188))
    }

    function ey(e) {
        var t = e.alternate;
        if (!t) {
            if (t = Mn(e), t === null) throw Error(s(188));
            return t !== e ? null : e
        }
        for (var i = e, o = t;;) {
            var u = i.return;
            if (u === null) break;
            var c = u.alternate;
            if (c === null) {
                if (o = u.return, o !== null) {
                    i = o;
                    continue
                }
                break
            }
            if (u.child === c.child) {
                for (c = u.child; c;) {
                    if (c === i) return Xu(u), e;
                    if (c === o) return Xu(u), t;
                    c = c.sibling
                }
                throw Error(s(188))
            }
            if (i.return !== o.return) i = u, o = c;
            else {
                for (var m = !1, L = u.child; L;) {
                    if (L === i) {
                        m = !0, i = u, o = c;
                        break
                    }
                    if (L === o) {
                        m = !0, o = u, i = c;
                        break
                    }
                    L = L.sibling
                }
                if (!m) {
                    for (L = c.child; L;) {
                        if (L === i) {
                            m = !0, i = c, o = u;
                            break
                        }
                        if (L === o) {
                            m = !0, o = c, i = u;
                            break
                        }
                        L = L.sibling
                    }
                    if (!m) throw Error(s(189))
                }
            }
            if (i.alternate !== o) throw Error(s(190))
        }
        if (i.tag !== 3) throw Error(s(188));
        return i.stateNode.current === i ? e : t
    }

    function Ku(e) {
        return e = ey(e), e !== null ? qu(e) : null
    }

    function qu(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null;) {
            var t = qu(e);
            if (t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var ec = r.unstable_scheduleCallback,
        tc = r.unstable_cancelCallback,
        ty = r.unstable_shouldYield,
        ny = r.unstable_requestPaint,
        Ve = r.unstable_now,
        ry = r.unstable_getCurrentPriorityLevel,
        Ao = r.unstable_ImmediatePriority,
        nc = r.unstable_UserBlockingPriority,
        Ii = r.unstable_NormalPriority,
        iy = r.unstable_LowPriority,
        rc = r.unstable_IdlePriority,
        Ui = null,
        zt = null;

    function sy(e) {
        if (zt && typeof zt.onCommitFiberRoot == "function") try {
            zt.onCommitFiberRoot(Ui, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
    }
    var Nt = Math.clz32 ? Math.clz32 : ly,
        oy = Math.log,
        ay = Math.LN2;

    function ly(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (oy(e) / ay | 0) | 0
    }
    var Wi = 64,
        Gi = 4194304;

    function Br(e) {
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e
        }
    }

    function Qi(e, t) {
        var i = e.pendingLanes;
        if (i === 0) return 0;
        var o = 0,
            u = e.suspendedLanes,
            c = e.pingedLanes,
            m = i & 268435455;
        if (m !== 0) {
            var L = m & ~u;
            L !== 0 ? o = Br(L) : (c &= m, c !== 0 && (o = Br(c)))
        } else m = i & ~u, m !== 0 ? o = Br(m) : c !== 0 && (o = Br(c));
        if (o === 0) return 0;
        if (t !== 0 && t !== o && (t & u) === 0 && (u = o & -o, c = t & -t, u >= c || u === 16 && (c & 4194240) !== 0)) return t;
        if ((o & 4) !== 0 && (o |= i & 16), t = e.entangledLanes, t !== 0)
            for (e = e.entanglements, t &= o; 0 < t;) i = 31 - Nt(t), u = 1 << i, o |= e[i], t &= ~u;
        return o
    }

    function uy(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
                return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function cy(e, t) {
        for (var i = e.suspendedLanes, o = e.pingedLanes, u = e.expirationTimes, c = e.pendingLanes; 0 < c;) {
            var m = 31 - Nt(c),
                L = 1 << m,
                j = u[m];
            j === -1 ? ((L & i) === 0 || (L & o) !== 0) && (u[m] = uy(L, t)) : j <= t && (e.expiredLanes |= L), c &= ~L
        }
    }

    function ko(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }

    function ic() {
        var e = Wi;
        return Wi <<= 1, (Wi & 4194240) === 0 && (Wi = 64), e
    }

    function bo(e) {
        for (var t = [], i = 0; 31 > i; i++) t.push(e);
        return t
    }

    function Dr(e, t, i) {
        e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Nt(t), e[t] = i
    }

    function dy(e, t) {
        var i = e.pendingLanes & ~t;
        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
        var o = e.eventTimes;
        for (e = e.expirationTimes; 0 < i;) {
            var u = 31 - Nt(i),
                c = 1 << u;
            t[u] = 0, o[u] = -1, e[u] = -1, i &= ~c
        }
    }

    function Co(e, t) {
        var i = e.entangledLanes |= t;
        for (e = e.entanglements; i;) {
            var o = 31 - Nt(i),
                u = 1 << o;
            u & t | e[o] & t && (e[o] |= t), i &= ~u
        }
    }
    var he = 0;

    function sc(e) {
        return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var oc, zo, ac, lc, uc, Po = !1,
        Hi = [],
        en = null,
        tn = null,
        nn = null,
        Fr = new Map,
        Or = new Map,
        rn = [],
        fy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

    function cc(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                en = null;
                break;
            case "dragenter":
            case "dragleave":
                tn = null;
                break;
            case "mouseover":
            case "mouseout":
                nn = null;
                break;
            case "pointerover":
            case "pointerout":
                Fr.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Or.delete(t.pointerId)
        }
    }

    function Zr(e, t, i, o, u, c) {
        return e === null || e.nativeEvent !== c ? (e = {
            blockedOn: t,
            domEventName: i,
            eventSystemFlags: o,
            nativeEvent: c,
            targetContainers: [u]
        }, t !== null && (t = ei(t), t !== null && zo(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e)
    }

    function hy(e, t, i, o, u) {
        switch (t) {
            case "focusin":
                return en = Zr(en, e, t, i, o, u), !0;
            case "dragenter":
                return tn = Zr(tn, e, t, i, o, u), !0;
            case "mouseover":
                return nn = Zr(nn, e, t, i, o, u), !0;
            case "pointerover":
                var c = u.pointerId;
                return Fr.set(c, Zr(Fr.get(c) || null, e, t, i, o, u)), !0;
            case "gotpointercapture":
                return c = u.pointerId, Or.set(c, Zr(Or.get(c) || null, e, t, i, o, u)), !0
        }
        return !1
    }

    function dc(e) {
        var t = Vn(e.target);
        if (t !== null) {
            var i = Mn(t);
            if (i !== null) {
                if (t = i.tag, t === 13) {
                    if (t = $u(i), t !== null) {
                        e.blockedOn = t, uc(e.priority, function() {
                            ac(i)
                        });
                        return
                    }
                } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function Yi(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var i = Bo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (i === null) {
                i = e.nativeEvent;
                var o = new i.constructor(i.type, i);
                So = o, i.target.dispatchEvent(o), So = null
            } else return t = ei(i), t !== null && zo(t), e.blockedOn = i, !1;
            t.shift()
        }
        return !0
    }

    function fc(e, t, i) {
        Yi(e) && i.delete(t)
    }

    function py() {
        Po = !1, en !== null && Yi(en) && (en = null), tn !== null && Yi(tn) && (tn = null), nn !== null && Yi(nn) && (nn = null), Fr.forEach(fc), Or.forEach(fc)
    }

    function Jr(e, t) {
        e.blockedOn === t && (e.blockedOn = null, Po || (Po = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, py)))
    }

    function _r(e) {
        function t(u) {
            return Jr(u, e)
        }
        if (0 < Hi.length) {
            Jr(Hi[0], e);
            for (var i = 1; i < Hi.length; i++) {
                var o = Hi[i];
                o.blockedOn === e && (o.blockedOn = null)
            }
        }
        for (en !== null && Jr(en, e), tn !== null && Jr(tn, e), nn !== null && Jr(nn, e), Fr.forEach(t), Or.forEach(t), i = 0; i < rn.length; i++) o = rn[i], o.blockedOn === e && (o.blockedOn = null);
        for (; 0 < rn.length && (i = rn[0], i.blockedOn === null);) dc(i), i.blockedOn === null && rn.shift()
    }
    var Yn = Y.ReactCurrentBatchConfig,
        $i = !0;

    function my(e, t, i, o) {
        var u = he,
            c = Yn.transition;
        Yn.transition = null;
        try {
            he = 1, Ro(e, t, i, o)
        } finally {
            he = u, Yn.transition = c
        }
    }

    function yy(e, t, i, o) {
        var u = he,
            c = Yn.transition;
        Yn.transition = null;
        try {
            he = 4, Ro(e, t, i, o)
        } finally {
            he = u, Yn.transition = c
        }
    }

    function Ro(e, t, i, o) {
        if ($i) {
            var u = Bo(e, t, i, o);
            if (u === null) qo(e, t, o, Xi, i), cc(e, o);
            else if (hy(u, e, t, i, o)) o.stopPropagation();
            else if (cc(e, o), t & 4 && -1 < fy.indexOf(e)) {
                for (; u !== null;) {
                    var c = ei(u);
                    if (c !== null && oc(c), c = Bo(e, t, i, o), c === null && qo(e, t, o, Xi, i), c === u) break;
                    u = c
                }
                u !== null && o.stopPropagation()
            } else qo(e, t, o, null, i)
        }
    }
    var Xi = null;

    function Bo(e, t, i, o) {
        if (Xi = null, e = To(o), e = Vn(e), e !== null)
            if (t = Mn(e), t === null) e = null;
            else if (i = t.tag, i === 13) {
            if (e = $u(t), e !== null) return e;
            e = null
        } else if (i === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
        return Xi = e, null
    }

    function hc(e) {
        switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch (ry()) {
                    case Ao:
                        return 1;
                    case nc:
                        return 4;
                    case Ii:
                    case iy:
                        return 16;
                    case rc:
                        return 536870912;
                    default:
                        return 16
                }
            default:
                return 16
        }
    }
    var sn = null,
        Do = null,
        Ki = null;

    function pc() {
        if (Ki) return Ki;
        var e, t = Do,
            i = t.length,
            o, u = "value" in sn ? sn.value : sn.textContent,
            c = u.length;
        for (e = 0; e < i && t[e] === u[e]; e++);
        var m = i - e;
        for (o = 1; o <= m && t[i - o] === u[c - o]; o++);
        return Ki = u.slice(e, 1 < o ? 1 - o : void 0)
    }

    function qi(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function es() {
        return !0
    }

    function mc() {
        return !1
    }

    function ut(e) {
        function t(i, o, u, c, m) {
            this._reactName = i, this._targetInst = u, this.type = o, this.nativeEvent = c, this.target = m, this.currentTarget = null;
            for (var L in e) e.hasOwnProperty(L) && (i = e[L], this[L] = i ? i(c) : c[L]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? es : mc, this.isPropagationStopped = mc, this
        }
        return I(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var i = this.nativeEvent;
                i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = es)
            },
            stopPropagation: function() {
                var i = this.nativeEvent;
                i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = es)
            },
            persist: function() {},
            isPersistent: es
        }), t
    }
    var $n = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Fo = ut($n),
        Ir = I({}, $n, {
            view: 0,
            detail: 0
        }),
        gy = ut(Ir),
        Oo, Zo, Ur, ts = I({}, Ir, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: _o,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Ur && (Ur && e.type === "mousemove" ? (Oo = e.screenX - Ur.screenX, Zo = e.screenY - Ur.screenY) : Zo = Oo = 0, Ur = e), Oo)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Zo
            }
        }),
        yc = ut(ts),
        vy = I({}, ts, {
            dataTransfer: 0
        }),
        xy = ut(vy),
        wy = I({}, Ir, {
            relatedTarget: 0
        }),
        Jo = ut(wy),
        Ly = I({}, $n, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        jy = ut(Ly),
        Sy = I({}, $n, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Ty = ut(Sy),
        Ny = I({}, $n, {
            data: 0
        }),
        gc = ut(Ny),
        Ey = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        My = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        Vy = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Ay(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Vy[e]) ? !!t[e] : !1
    }

    function _o() {
        return Ay
    }
    var ky = I({}, Ir, {
            key: function(e) {
                if (e.key) {
                    var t = Ey[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = qi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? My[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: _o,
            charCode: function(e) {
                return e.type === "keypress" ? qi(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? qi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        by = ut(ky),
        Cy = I({}, ts, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        vc = ut(Cy),
        zy = I({}, Ir, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: _o
        }),
        Py = ut(zy),
        Ry = I({}, $n, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        By = ut(Ry),
        Dy = I({}, ts, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        Fy = ut(Dy),
        Oy = [9, 13, 27, 32],
        Io = h && "CompositionEvent" in window,
        Wr = null;
    h && "documentMode" in document && (Wr = document.documentMode);
    var Zy = h && "TextEvent" in window && !Wr,
        xc = h && (!Io || Wr && 8 < Wr && 11 >= Wr),
        wc = " ",
        Lc = !1;

    function jc(e, t) {
        switch (e) {
            case "keyup":
                return Oy.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Sc(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var Xn = !1;

    function Jy(e, t) {
        switch (e) {
            case "compositionend":
                return Sc(t);
            case "keypress":
                return t.which !== 32 ? null : (Lc = !0, wc);
            case "textInput":
                return e = t.data, e === wc && Lc ? null : e;
            default:
                return null
        }
    }

    function _y(e, t) {
        if (Xn) return e === "compositionend" || !Io && jc(e, t) ? (e = pc(), Ki = Do = sn = null, Xn = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return xc && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Iy = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Tc(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Iy[e.type] : t === "textarea"
    }

    function Nc(e, t, i, o) {
        Wu(o), t = os(t, "onChange"), 0 < t.length && (i = new Fo("onChange", "change", null, i, o), e.push({
            event: i,
            listeners: t
        }))
    }
    var Gr = null,
        Qr = null;

    function Uy(e) {
        Ic(e, 0)
    }

    function ns(e) {
        var t = nr(e);
        if (zu(t)) return e
    }

    function Wy(e, t) {
        if (e === "change") return t
    }
    var Ec = !1;
    if (h) {
        var Uo;
        if (h) {
            var Wo = "oninput" in document;
            if (!Wo) {
                var Mc = document.createElement("div");
                Mc.setAttribute("oninput", "return;"), Wo = typeof Mc.oninput == "function"
            }
            Uo = Wo
        } else Uo = !1;
        Ec = Uo && (!document.documentMode || 9 < document.documentMode)
    }

    function Vc() {
        Gr && (Gr.detachEvent("onpropertychange", Ac), Qr = Gr = null)
    }

    function Ac(e) {
        if (e.propertyName === "value" && ns(Qr)) {
            var t = [];
            Nc(t, Qr, e, To(e)), Yu(Uy, t)
        }
    }

    function Gy(e, t, i) {
        e === "focusin" ? (Vc(), Gr = t, Qr = i, Gr.attachEvent("onpropertychange", Ac)) : e === "focusout" && Vc()
    }

    function Qy(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return ns(Qr)
    }

    function Hy(e, t) {
        if (e === "click") return ns(t)
    }

    function Yy(e, t) {
        if (e === "input" || e === "change") return ns(t)
    }

    function $y(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Et = typeof Object.is == "function" ? Object.is : $y;

    function Hr(e, t) {
        if (Et(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var i = Object.keys(e),
            o = Object.keys(t);
        if (i.length !== o.length) return !1;
        for (o = 0; o < i.length; o++) {
            var u = i[o];
            if (!p.call(t, u) || !Et(e[u], t[u])) return !1
        }
        return !0
    }

    function kc(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function bc(e, t) {
        var i = kc(e);
        e = 0;
        for (var o; i;) {
            if (i.nodeType === 3) {
                if (o = e + i.textContent.length, e <= t && o >= t) return {
                    node: i,
                    offset: t - e
                };
                e = o
            }
            e: {
                for (; i;) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = kc(i)
        }
    }

    function Cc(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function zc() {
        for (var e = window, t = Oi(); t instanceof e.HTMLIFrameElement;) {
            try {
                var i = typeof t.contentWindow.location.href == "string"
            } catch {
                i = !1
            }
            if (i) e = t.contentWindow;
            else break;
            t = Oi(e.document)
        }
        return t
    }

    function Go(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }

    function Xy(e) {
        var t = zc(),
            i = e.focusedElem,
            o = e.selectionRange;
        if (t !== i && i && i.ownerDocument && Cc(i.ownerDocument.documentElement, i)) {
            if (o !== null && Go(i)) {
                if (t = o.start, e = o.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
                else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var u = i.textContent.length,
                        c = Math.min(o.start, u);
                    o = o.end === void 0 ? c : Math.min(o.end, u), !e.extend && c > o && (u = o, o = c, c = u), u = bc(i, c);
                    var m = bc(i, o);
                    u && m && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== m.node || e.focusOffset !== m.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), c > o ? (e.addRange(t), e.extend(m.node, m.offset)) : (t.setEnd(m.node, m.offset), e.addRange(t)))
                }
            }
            for (t = [], e = i; e = e.parentNode;) e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var Ky = h && "documentMode" in document && 11 >= document.documentMode,
        Kn = null,
        Qo = null,
        Yr = null,
        Ho = !1;

    function Pc(e, t, i) {
        var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
        Ho || Kn == null || Kn !== Oi(o) || (o = Kn, "selectionStart" in o && Go(o) ? o = {
            start: o.selectionStart,
            end: o.selectionEnd
        } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset
        }), Yr && Hr(Yr, o) || (Yr = o, o = os(Qo, "onSelect"), 0 < o.length && (t = new Fo("onSelect", "select", null, t, i), e.push({
            event: t,
            listeners: o
        }), t.target = Kn)))
    }

    function rs(e, t) {
        var i = {};
        return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i
    }
    var qn = {
            animationend: rs("Animation", "AnimationEnd"),
            animationiteration: rs("Animation", "AnimationIteration"),
            animationstart: rs("Animation", "AnimationStart"),
            transitionend: rs("Transition", "TransitionEnd")
        },
        Yo = {},
        Rc = {};
    h && (Rc = document.createElement("div").style, "AnimationEvent" in window || (delete qn.animationend.animation, delete qn.animationiteration.animation, delete qn.animationstart.animation), "TransitionEvent" in window || delete qn.transitionend.transition);

    function is(e) {
        if (Yo[e]) return Yo[e];
        if (!qn[e]) return e;
        var t = qn[e],
            i;
        for (i in t)
            if (t.hasOwnProperty(i) && i in Rc) return Yo[e] = t[i];
        return e
    }
    var Bc = is("animationend"),
        Dc = is("animationiteration"),
        Fc = is("animationstart"),
        Oc = is("transitionend"),
        Zc = new Map,
        Jc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

    function on(e, t) {
        Zc.set(e, t), f(t, [e])
    }
    for (var $o = 0; $o < Jc.length; $o++) {
        var Xo = Jc[$o],
            qy = Xo.toLowerCase(),
            e0 = Xo[0].toUpperCase() + Xo.slice(1);
        on(qy, "on" + e0)
    }
    on(Bc, "onAnimationEnd"), on(Dc, "onAnimationIteration"), on(Fc, "onAnimationStart"), on("dblclick", "onDoubleClick"), on("focusin", "onFocus"), on("focusout", "onBlur"), on(Oc, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), f("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), f("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), f("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), f("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var $r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        t0 = new Set("cancel close invalid load scroll toggle".split(" ").concat($r));

    function _c(e, t, i) {
        var o = e.type || "unknown-event";
        e.currentTarget = i, qm(o, t, void 0, e), e.currentTarget = null
    }

    function Ic(e, t) {
        t = (t & 4) !== 0;
        for (var i = 0; i < e.length; i++) {
            var o = e[i],
                u = o.event;
            o = o.listeners;
            e: {
                var c = void 0;
                if (t)
                    for (var m = o.length - 1; 0 <= m; m--) {
                        var L = o[m],
                            j = L.instance,
                            b = L.currentTarget;
                        if (L = L.listener, j !== c && u.isPropagationStopped()) break e;
                        _c(u, L, b), c = j
                    } else
                        for (m = 0; m < o.length; m++) {
                            if (L = o[m], j = L.instance, b = L.currentTarget, L = L.listener, j !== c && u.isPropagationStopped()) break e;
                            _c(u, L, b), c = j
                        }
            }
        }
        if (_i) throw e = Vo, _i = !1, Vo = null, e
    }

    function ge(e, t) {
        var i = t[sa];
        i === void 0 && (i = t[sa] = new Set);
        var o = e + "__bubble";
        i.has(o) || (Uc(t, e, 2, !1), i.add(o))
    }

    function Ko(e, t, i) {
        var o = 0;
        t && (o |= 4), Uc(i, e, o, t)
    }
    var ss = "_reactListening" + Math.random().toString(36).slice(2);

    function Xr(e) {
        if (!e[ss]) {
            e[ss] = !0, a.forEach(function(i) {
                i !== "selectionchange" && (t0.has(i) || Ko(i, !1, e), Ko(i, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[ss] || (t[ss] = !0, Ko("selectionchange", !1, t))
        }
    }

    function Uc(e, t, i, o) {
        switch (hc(t)) {
            case 1:
                var u = my;
                break;
            case 4:
                u = yy;
                break;
            default:
                u = Ro
        }
        i = u.bind(null, t, i, e), u = void 0, !Mo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), o ? u !== void 0 ? e.addEventListener(t, i, {
            capture: !0,
            passive: u
        }) : e.addEventListener(t, i, !0) : u !== void 0 ? e.addEventListener(t, i, {
            passive: u
        }) : e.addEventListener(t, i, !1)
    }

    function qo(e, t, i, o, u) {
        var c = o;
        if ((t & 1) === 0 && (t & 2) === 0 && o !== null) e: for (;;) {
            if (o === null) return;
            var m = o.tag;
            if (m === 3 || m === 4) {
                var L = o.stateNode.containerInfo;
                if (L === u || L.nodeType === 8 && L.parentNode === u) break;
                if (m === 4)
                    for (m = o.return; m !== null;) {
                        var j = m.tag;
                        if ((j === 3 || j === 4) && (j = m.stateNode.containerInfo, j === u || j.nodeType === 8 && j.parentNode === u)) return;
                        m = m.return
                    }
                for (; L !== null;) {
                    if (m = Vn(L), m === null) return;
                    if (j = m.tag, j === 5 || j === 6) {
                        o = c = m;
                        continue e
                    }
                    L = L.parentNode
                }
            }
            o = o.return
        }
        Yu(function() {
            var b = c,
                B = To(i),
                D = [];
            e: {
                var P = Zc.get(e);
                if (P !== void 0) {
                    var _ = Fo,
                        G = e;
                    switch (e) {
                        case "keypress":
                            if (qi(i) === 0) break e;
                        case "keydown":
                        case "keyup":
                            _ = by;
                            break;
                        case "focusin":
                            G = "focus", _ = Jo;
                            break;
                        case "focusout":
                            G = "blur", _ = Jo;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            _ = Jo;
                            break;
                        case "click":
                            if (i.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            _ = yc;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            _ = xy;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            _ = Py;
                            break;
                        case Bc:
                        case Dc:
                        case Fc:
                            _ = jy;
                            break;
                        case Oc:
                            _ = By;
                            break;
                        case "scroll":
                            _ = gy;
                            break;
                        case "wheel":
                            _ = Fy;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            _ = Ty;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            _ = vc
                    }
                    var Q = (t & 4) !== 0,
                        Ae = !Q && e === "scroll",
                        E = Q ? P !== null ? P + "Capture" : null : P;
                    Q = [];
                    for (var S = b, M; S !== null;) {
                        M = S;
                        var F = M.stateNode;
                        if (M.tag === 5 && F !== null && (M = F, E !== null && (F = zr(S, E), F != null && Q.push(Kr(S, F, M)))), Ae) break;
                        S = S.return
                    }
                    0 < Q.length && (P = new _(P, G, null, i, B), D.push({
                        event: P,
                        listeners: Q
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (P = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", P && i !== So && (G = i.relatedTarget || i.fromElement) && (Vn(G) || G[_t])) break e;
                    if ((_ || P) && (P = B.window === B ? B : (P = B.ownerDocument) ? P.defaultView || P.parentWindow : window, _ ? (G = i.relatedTarget || i.toElement, _ = b, G = G ? Vn(G) : null, G !== null && (Ae = Mn(G), G !== Ae || G.tag !== 5 && G.tag !== 6) && (G = null)) : (_ = null, G = b), _ !== G)) {
                        if (Q = yc, F = "onMouseLeave", E = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (Q = vc, F = "onPointerLeave", E = "onPointerEnter", S = "pointer"), Ae = _ == null ? P : nr(_), M = G == null ? P : nr(G), P = new Q(F, S + "leave", _, i, B), P.target = Ae, P.relatedTarget = M, F = null, Vn(B) === b && (Q = new Q(E, S + "enter", G, i, B), Q.target = M, Q.relatedTarget = Ae, F = Q), Ae = F, _ && G) t: {
                            for (Q = _, E = G, S = 0, M = Q; M; M = er(M)) S++;
                            for (M = 0, F = E; F; F = er(F)) M++;
                            for (; 0 < S - M;) Q = er(Q),
                            S--;
                            for (; 0 < M - S;) E = er(E),
                            M--;
                            for (; S--;) {
                                if (Q === E || E !== null && Q === E.alternate) break t;
                                Q = er(Q), E = er(E)
                            }
                            Q = null
                        }
                        else Q = null;
                        _ !== null && Wc(D, P, _, Q, !1), G !== null && Ae !== null && Wc(D, Ae, G, Q, !0)
                    }
                }
                e: {
                    if (P = b ? nr(b) : window, _ = P.nodeName && P.nodeName.toLowerCase(), _ === "select" || _ === "input" && P.type === "file") var H = Wy;
                    else if (Tc(P))
                        if (Ec) H = Yy;
                        else {
                            H = Qy;
                            var K = Gy
                        }
                    else(_ = P.nodeName) && _.toLowerCase() === "input" && (P.type === "checkbox" || P.type === "radio") && (H = Hy);
                    if (H && (H = H(e, b))) {
                        Nc(D, H, i, B);
                        break e
                    }
                    K && K(e, P, b),
                    e === "focusout" && (K = P._wrapperState) && K.controlled && P.type === "number" && vo(P, "number", P.value)
                }
                switch (K = b ? nr(b) : window, e) {
                    case "focusin":
                        (Tc(K) || K.contentEditable === "true") && (Kn = K, Qo = b, Yr = null);
                        break;
                    case "focusout":
                        Yr = Qo = Kn = null;
                        break;
                    case "mousedown":
                        Ho = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Ho = !1, Pc(D, i, B);
                        break;
                    case "selectionchange":
                        if (Ky) break;
                    case "keydown":
                    case "keyup":
                        Pc(D, i, B)
                }
                var q;
                if (Io) e: {
                    switch (e) {
                        case "compositionstart":
                            var te = "onCompositionStart";
                            break e;
                        case "compositionend":
                            te = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            te = "onCompositionUpdate";
                            break e
                    }
                    te = void 0
                }
                else Xn ? jc(e, i) && (te = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (te = "onCompositionStart");te && (xc && i.locale !== "ko" && (Xn || te !== "onCompositionStart" ? te === "onCompositionEnd" && Xn && (q = pc()) : (sn = B, Do = "value" in sn ? sn.value : sn.textContent, Xn = !0)), K = os(b, te), 0 < K.length && (te = new gc(te, e, null, i, B), D.push({
                    event: te,
                    listeners: K
                }), q ? te.data = q : (q = Sc(i), q !== null && (te.data = q)))),
                (q = Zy ? Jy(e, i) : _y(e, i)) && (b = os(b, "onBeforeInput"), 0 < b.length && (B = new gc("onBeforeInput", "beforeinput", null, i, B), D.push({
                    event: B,
                    listeners: b
                }), B.data = q))
            }
            Ic(D, t)
        })
    }

    function Kr(e, t, i) {
        return {
            instance: e,
            listener: t,
            currentTarget: i
        }
    }

    function os(e, t) {
        for (var i = t + "Capture", o = []; e !== null;) {
            var u = e,
                c = u.stateNode;
            u.tag === 5 && c !== null && (u = c, c = zr(e, i), c != null && o.unshift(Kr(e, c, u)), c = zr(e, t), c != null && o.push(Kr(e, c, u))), e = e.return
        }
        return o
    }

    function er(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5);
        return e || null
    }

    function Wc(e, t, i, o, u) {
        for (var c = t._reactName, m = []; i !== null && i !== o;) {
            var L = i,
                j = L.alternate,
                b = L.stateNode;
            if (j !== null && j === o) break;
            L.tag === 5 && b !== null && (L = b, u ? (j = zr(i, c), j != null && m.unshift(Kr(i, j, L))) : u || (j = zr(i, c), j != null && m.push(Kr(i, j, L)))), i = i.return
        }
        m.length !== 0 && e.push({
            event: t,
            listeners: m
        })
    }
    var n0 = /\r\n?/g,
        r0 = /\u0000|\uFFFD/g;

    function Gc(e) {
        return (typeof e == "string" ? e : "" + e).replace(n0, `
`).replace(r0, "")
    }

    function as(e, t, i) {
        if (t = Gc(t), Gc(e) !== t && i) throw Error(s(425))
    }

    function ls() {}
    var ea = null,
        ta = null;

    function na(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var ra = typeof setTimeout == "function" ? setTimeout : void 0,
        i0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Qc = typeof Promise == "function" ? Promise : void 0,
        s0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qc < "u" ? function(e) {
            return Qc.resolve(null).then(e).catch(o0)
        } : ra;

    function o0(e) {
        setTimeout(function() {
            throw e
        })
    }

    function ia(e, t) {
        var i = t,
            o = 0;
        do {
            var u = i.nextSibling;
            if (e.removeChild(i), u && u.nodeType === 8)
                if (i = u.data, i === "/$") {
                    if (o === 0) {
                        e.removeChild(u), _r(t);
                        return
                    }
                    o--
                } else i !== "$" && i !== "$?" && i !== "$!" || o++;
            i = u
        } while (i);
        _r(t)
    }

    function an(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
                if (t === "/$") return null
            }
        }
        return e
    }

    function Hc(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "$" || i === "$!" || i === "$?") {
                    if (t === 0) return e;
                    t--
                } else i === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var tr = Math.random().toString(36).slice(2),
        Pt = "__reactFiber$" + tr,
        qr = "__reactProps$" + tr,
        _t = "__reactContainer$" + tr,
        sa = "__reactEvents$" + tr,
        a0 = "__reactListeners$" + tr,
        l0 = "__reactHandles$" + tr;

    function Vn(e) {
        var t = e[Pt];
        if (t) return t;
        for (var i = e.parentNode; i;) {
            if (t = i[_t] || i[Pt]) {
                if (i = t.alternate, t.child !== null || i !== null && i.child !== null)
                    for (e = Hc(e); e !== null;) {
                        if (i = e[Pt]) return i;
                        e = Hc(e)
                    }
                return t
            }
            e = i, i = e.parentNode
        }
        return null
    }

    function ei(e) {
        return e = e[Pt] || e[_t], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }

    function nr(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(s(33))
    }

    function us(e) {
        return e[qr] || null
    }
    var oa = [],
        rr = -1;

    function ln(e) {
        return {
            current: e
        }
    }

    function ve(e) {
        0 > rr || (e.current = oa[rr], oa[rr] = null, rr--)
    }

    function me(e, t) {
        rr++, oa[rr] = e.current, e.current = t
    }
    var un = {},
        Je = ln(un),
        et = ln(!1),
        An = un;

    function ir(e, t) {
        var i = e.type.contextTypes;
        if (!i) return un;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t) return o.__reactInternalMemoizedMaskedChildContext;
        var u = {},
            c;
        for (c in i) u[c] = t[c];
        return o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u
    }

    function tt(e) {
        return e = e.childContextTypes, e != null
    }

    function cs() {
        ve(et), ve(Je)
    }

    function Yc(e, t, i) {
        if (Je.current !== un) throw Error(s(168));
        me(Je, t), me(et, i)
    }

    function $c(e, t, i) {
        var o = e.stateNode;
        if (t = t.childContextTypes, typeof o.getChildContext != "function") return i;
        o = o.getChildContext();
        for (var u in o)
            if (!(u in t)) throw Error(s(108, pe(e) || "Unknown", u));
        return I({}, i, o)
    }

    function ds(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || un, An = Je.current, me(Je, e), me(et, et.current), !0
    }

    function Xc(e, t, i) {
        var o = e.stateNode;
        if (!o) throw Error(s(169));
        i ? (e = $c(e, t, An), o.__reactInternalMemoizedMergedChildContext = e, ve(et), ve(Je), me(Je, e)) : ve(et), me(et, i)
    }
    var It = null,
        fs = !1,
        aa = !1;

    function Kc(e) {
        It === null ? It = [e] : It.push(e)
    }

    function u0(e) {
        fs = !0, Kc(e)
    }

    function cn() {
        if (!aa && It !== null) {
            aa = !0;
            var e = 0,
                t = he;
            try {
                var i = It;
                for (he = 1; e < i.length; e++) {
                    var o = i[e];
                    do o = o(!0); while (o !== null)
                }
                It = null, fs = !1
            } catch (u) {
                throw It !== null && (It = It.slice(e + 1)), ec(Ao, cn), u
            } finally {
                he = t, aa = !1
            }
        }
        return null
    }
    var sr = [],
        or = 0,
        hs = null,
        ps = 0,
        yt = [],
        gt = 0,
        kn = null,
        Ut = 1,
        Wt = "";

    function bn(e, t) {
        sr[or++] = ps, sr[or++] = hs, hs = e, ps = t
    }

    function qc(e, t, i) {
        yt[gt++] = Ut, yt[gt++] = Wt, yt[gt++] = kn, kn = e;
        var o = Ut;
        e = Wt;
        var u = 32 - Nt(o) - 1;
        o &= ~(1 << u), i += 1;
        var c = 32 - Nt(t) + u;
        if (30 < c) {
            var m = u - u % 5;
            c = (o & (1 << m) - 1).toString(32), o >>= m, u -= m, Ut = 1 << 32 - Nt(t) + u | i << u | o, Wt = c + e
        } else Ut = 1 << c | i << u | o, Wt = e
    }

    function la(e) {
        e.return !== null && (bn(e, 1), qc(e, 1, 0))
    }

    function ua(e) {
        for (; e === hs;) hs = sr[--or], sr[or] = null, ps = sr[--or], sr[or] = null;
        for (; e === kn;) kn = yt[--gt], yt[gt] = null, Wt = yt[--gt], yt[gt] = null, Ut = yt[--gt], yt[gt] = null
    }
    var ct = null,
        dt = null,
        je = !1,
        Mt = null;

    function ed(e, t) {
        var i = Lt(5, null, null, 0);
        i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i)
    }

    function td(e, t) {
        switch (e.tag) {
            case 5:
                var i = e.type;
                return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ct = e, dt = an(t.firstChild), !0) : !1;
            case 6:
                return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ct = e, dt = null, !0) : !1;
            case 13:
                return t = t.nodeType !== 8 ? null : t, t !== null ? (i = kn !== null ? {
                    id: Ut,
                    overflow: Wt
                } : null, e.memoizedState = {
                    dehydrated: t,
                    treeContext: i,
                    retryLane: 1073741824
                }, i = Lt(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, ct = e, dt = null, !0) : !1;
            default:
                return !1
        }
    }

    function ca(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }

    function da(e) {
        if (je) {
            var t = dt;
            if (t) {
                var i = t;
                if (!td(e, t)) {
                    if (ca(e)) throw Error(s(418));
                    t = an(i.nextSibling);
                    var o = ct;
                    t && td(e, t) ? ed(o, i) : (e.flags = e.flags & -4097 | 2, je = !1, ct = e)
                }
            } else {
                if (ca(e)) throw Error(s(418));
                e.flags = e.flags & -4097 | 2, je = !1, ct = e
            }
        }
    }

    function nd(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
        ct = e
    }

    function ms(e) {
        if (e !== ct) return !1;
        if (!je) return nd(e), je = !0, !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !na(e.type, e.memoizedProps)), t && (t = dt)) {
            if (ca(e)) throw rd(), Error(s(418));
            for (; t;) ed(e, t), t = an(t.nextSibling)
        }
        if (nd(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8) {
                        var i = e.data;
                        if (i === "/$") {
                            if (t === 0) {
                                dt = an(e.nextSibling);
                                break e
                            }
                            t--
                        } else i !== "$" && i !== "$!" && i !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                dt = null
            }
        } else dt = ct ? an(e.stateNode.nextSibling) : null;
        return !0
    }

    function rd() {
        for (var e = dt; e;) e = an(e.nextSibling)
    }

    function ar() {
        dt = ct = null, je = !1
    }

    function fa(e) {
        Mt === null ? Mt = [e] : Mt.push(e)
    }
    var c0 = Y.ReactCurrentBatchConfig;

    function ti(e, t, i) {
        if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (i._owner) {
                if (i = i._owner, i) {
                    if (i.tag !== 1) throw Error(s(309));
                    var o = i.stateNode
                }
                if (!o) throw Error(s(147, e));
                var u = o,
                    c = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === c ? t.ref : (t = function(m) {
                    var L = u.refs;
                    m === null ? delete L[c] : L[c] = m
                }, t._stringRef = c, t)
            }
            if (typeof e != "string") throw Error(s(284));
            if (!i._owner) throw Error(s(290, e))
        }
        return e
    }

    function ys(e, t) {
        throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }

    function id(e) {
        var t = e._init;
        return t(e._payload)
    }

    function sd(e) {
        function t(E, S) {
            if (e) {
                var M = E.deletions;
                M === null ? (E.deletions = [S], E.flags |= 16) : M.push(S)
            }
        }

        function i(E, S) {
            if (!e) return null;
            for (; S !== null;) t(E, S), S = S.sibling;
            return null
        }

        function o(E, S) {
            for (E = new Map; S !== null;) S.key !== null ? E.set(S.key, S) : E.set(S.index, S), S = S.sibling;
            return E
        }

        function u(E, S) {
            return E = vn(E, S), E.index = 0, E.sibling = null, E
        }

        function c(E, S, M) {
            return E.index = M, e ? (M = E.alternate, M !== null ? (M = M.index, M < S ? (E.flags |= 2, S) : M) : (E.flags |= 2, S)) : (E.flags |= 1048576, S)
        }

        function m(E) {
            return e && E.alternate === null && (E.flags |= 2), E
        }

        function L(E, S, M, F) {
            return S === null || S.tag !== 6 ? (S = rl(M, E.mode, F), S.return = E, S) : (S = u(S, M), S.return = E, S)
        }

        function j(E, S, M, F) {
            var H = M.type;
            return H === ae ? B(E, S, M.props.children, F, M.key) : S !== null && (S.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Ye && id(H) === S.type) ? (F = u(S, M.props), F.ref = ti(E, S, M), F.return = E, F) : (F = Zs(M.type, M.key, M.props, null, E.mode, F), F.ref = ti(E, S, M), F.return = E, F)
        }

        function b(E, S, M, F) {
            return S === null || S.tag !== 4 || S.stateNode.containerInfo !== M.containerInfo || S.stateNode.implementation !== M.implementation ? (S = il(M, E.mode, F), S.return = E, S) : (S = u(S, M.children || []), S.return = E, S)
        }

        function B(E, S, M, F, H) {
            return S === null || S.tag !== 7 ? (S = On(M, E.mode, F, H), S.return = E, S) : (S = u(S, M), S.return = E, S)
        }

        function D(E, S, M) {
            if (typeof S == "string" && S !== "" || typeof S == "number") return S = rl("" + S, E.mode, M), S.return = E, S;
            if (typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                    case U:
                        return M = Zs(S.type, S.key, S.props, null, E.mode, M), M.ref = ti(E, null, S), M.return = E, M;
                    case ne:
                        return S = il(S, E.mode, M), S.return = E, S;
                    case Ye:
                        var F = S._init;
                        return D(E, F(S._payload), M)
                }
                if (kr(S) || $(S)) return S = On(S, E.mode, M, null), S.return = E, S;
                ys(E, S)
            }
            return null
        }

        function P(E, S, M, F) {
            var H = S !== null ? S.key : null;
            if (typeof M == "string" && M !== "" || typeof M == "number") return H !== null ? null : L(E, S, "" + M, F);
            if (typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                    case U:
                        return M.key === H ? j(E, S, M, F) : null;
                    case ne:
                        return M.key === H ? b(E, S, M, F) : null;
                    case Ye:
                        return H = M._init, P(E, S, H(M._payload), F)
                }
                if (kr(M) || $(M)) return H !== null ? null : B(E, S, M, F, null);
                ys(E, M)
            }
            return null
        }

        function _(E, S, M, F, H) {
            if (typeof F == "string" && F !== "" || typeof F == "number") return E = E.get(M) || null, L(S, E, "" + F, H);
            if (typeof F == "object" && F !== null) {
                switch (F.$$typeof) {
                    case U:
                        return E = E.get(F.key === null ? M : F.key) || null, j(S, E, F, H);
                    case ne:
                        return E = E.get(F.key === null ? M : F.key) || null, b(S, E, F, H);
                    case Ye:
                        var K = F._init;
                        return _(E, S, M, K(F._payload), H)
                }
                if (kr(F) || $(F)) return E = E.get(M) || null, B(S, E, F, H, null);
                ys(S, F)
            }
            return null
        }

        function G(E, S, M, F) {
            for (var H = null, K = null, q = S, te = S = 0, De = null; q !== null && te < M.length; te++) {
                q.index > te ? (De = q, q = null) : De = q.sibling;
                var de = P(E, q, M[te], F);
                if (de === null) {
                    q === null && (q = De);
                    break
                }
                e && q && de.alternate === null && t(E, q), S = c(de, S, te), K === null ? H = de : K.sibling = de, K = de, q = De
            }
            if (te === M.length) return i(E, q), je && bn(E, te), H;
            if (q === null) {
                for (; te < M.length; te++) q = D(E, M[te], F), q !== null && (S = c(q, S, te), K === null ? H = q : K.sibling = q, K = q);
                return je && bn(E, te), H
            }
            for (q = o(E, q); te < M.length; te++) De = _(q, E, te, M[te], F), De !== null && (e && De.alternate !== null && q.delete(De.key === null ? te : De.key), S = c(De, S, te), K === null ? H = De : K.sibling = De, K = De);
            return e && q.forEach(function(xn) {
                return t(E, xn)
            }), je && bn(E, te), H
        }

        function Q(E, S, M, F) {
            var H = $(M);
            if (typeof H != "function") throw Error(s(150));
            if (M = H.call(M), M == null) throw Error(s(151));
            for (var K = H = null, q = S, te = S = 0, De = null, de = M.next(); q !== null && !de.done; te++, de = M.next()) {
                q.index > te ? (De = q, q = null) : De = q.sibling;
                var xn = P(E, q, de.value, F);
                if (xn === null) {
                    q === null && (q = De);
                    break
                }
                e && q && xn.alternate === null && t(E, q), S = c(xn, S, te), K === null ? H = xn : K.sibling = xn, K = xn, q = De
            }
            if (de.done) return i(E, q), je && bn(E, te), H;
            if (q === null) {
                for (; !de.done; te++, de = M.next()) de = D(E, de.value, F), de !== null && (S = c(de, S, te), K === null ? H = de : K.sibling = de, K = de);
                return je && bn(E, te), H
            }
            for (q = o(E, q); !de.done; te++, de = M.next()) de = _(q, E, te, de.value, F), de !== null && (e && de.alternate !== null && q.delete(de.key === null ? te : de.key), S = c(de, S, te), K === null ? H = de : K.sibling = de, K = de);
            return e && q.forEach(function(I0) {
                return t(E, I0)
            }), je && bn(E, te), H
        }

        function Ae(E, S, M, F) {
            if (typeof M == "object" && M !== null && M.type === ae && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
                switch (M.$$typeof) {
                    case U:
                        e: {
                            for (var H = M.key, K = S; K !== null;) {
                                if (K.key === H) {
                                    if (H = M.type, H === ae) {
                                        if (K.tag === 7) {
                                            i(E, K.sibling), S = u(K, M.props.children), S.return = E, E = S;
                                            break e
                                        }
                                    } else if (K.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Ye && id(H) === K.type) {
                                        i(E, K.sibling), S = u(K, M.props), S.ref = ti(E, K, M), S.return = E, E = S;
                                        break e
                                    }
                                    i(E, K);
                                    break
                                } else t(E, K);
                                K = K.sibling
                            }
                            M.type === ae ? (S = On(M.props.children, E.mode, F, M.key), S.return = E, E = S) : (F = Zs(M.type, M.key, M.props, null, E.mode, F), F.ref = ti(E, S, M), F.return = E, E = F)
                        }
                        return m(E);
                    case ne:
                        e: {
                            for (K = M.key; S !== null;) {
                                if (S.key === K)
                                    if (S.tag === 4 && S.stateNode.containerInfo === M.containerInfo && S.stateNode.implementation === M.implementation) {
                                        i(E, S.sibling), S = u(S, M.children || []), S.return = E, E = S;
                                        break e
                                    } else {
                                        i(E, S);
                                        break
                                    }
                                else t(E, S);
                                S = S.sibling
                            }
                            S = il(M, E.mode, F),
                            S.return = E,
                            E = S
                        }
                        return m(E);
                    case Ye:
                        return K = M._init, Ae(E, S, K(M._payload), F)
                }
                if (kr(M)) return G(E, S, M, F);
                if ($(M)) return Q(E, S, M, F);
                ys(E, M)
            }
            return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, S !== null && S.tag === 6 ? (i(E, S.sibling), S = u(S, M), S.return = E, E = S) : (i(E, S), S = rl(M, E.mode, F), S.return = E, E = S), m(E)) : i(E, S)
        }
        return Ae
    }
    var lr = sd(!0),
        od = sd(!1),
        gs = ln(null),
        vs = null,
        ur = null,
        ha = null;

    function pa() {
        ha = ur = vs = null
    }

    function ma(e) {
        var t = gs.current;
        ve(gs), e._currentValue = t
    }

    function ya(e, t, i) {
        for (; e !== null;) {
            var o = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === i) break;
            e = e.return
        }
    }

    function cr(e, t) {
        vs = e, ha = ur = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (nt = !0), e.firstContext = null)
    }

    function vt(e) {
        var t = e._currentValue;
        if (ha !== e)
            if (e = {
                    context: e,
                    memoizedValue: t,
                    next: null
                }, ur === null) {
                if (vs === null) throw Error(s(308));
                ur = e, vs.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else ur = ur.next = e;
        return t
    }
    var Cn = null;

    function ga(e) {
        Cn === null ? Cn = [e] : Cn.push(e)
    }

    function ad(e, t, i, o) {
        var u = t.interleaved;
        return u === null ? (i.next = i, ga(t)) : (i.next = u.next, u.next = i), t.interleaved = i, Gt(e, o)
    }

    function Gt(e, t) {
        e.lanes |= t;
        var i = e.alternate;
        for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null;) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
        return i.tag === 3 ? i.stateNode : null
    }
    var dn = !1;

    function va(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }

    function ld(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }

    function Qt(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function fn(e, t, i) {
        var o = e.updateQueue;
        if (o === null) return null;
        if (o = o.shared, (le & 2) !== 0) {
            var u = o.pending;
            return u === null ? t.next = t : (t.next = u.next, u.next = t), o.pending = t, Gt(e, i)
        }
        return u = o.interleaved, u === null ? (t.next = t, ga(o)) : (t.next = u.next, u.next = t), o.interleaved = t, Gt(e, i)
    }

    function xs(e, t, i) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
            var o = t.lanes;
            o &= e.pendingLanes, i |= o, t.lanes = i, Co(e, i)
        }
    }

    function ud(e, t) {
        var i = e.updateQueue,
            o = e.alternate;
        if (o !== null && (o = o.updateQueue, i === o)) {
            var u = null,
                c = null;
            if (i = i.firstBaseUpdate, i !== null) {
                do {
                    var m = {
                        eventTime: i.eventTime,
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    };
                    c === null ? u = c = m : c = c.next = m, i = i.next
                } while (i !== null);
                c === null ? u = c = t : c = c.next = t
            } else u = c = t;
            i = {
                baseState: o.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: c,
                shared: o.shared,
                effects: o.effects
            }, e.updateQueue = i;
            return
        }
        e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t
    }

    function ws(e, t, i, o) {
        var u = e.updateQueue;
        dn = !1;
        var c = u.firstBaseUpdate,
            m = u.lastBaseUpdate,
            L = u.shared.pending;
        if (L !== null) {
            u.shared.pending = null;
            var j = L,
                b = j.next;
            j.next = null, m === null ? c = b : m.next = b, m = j;
            var B = e.alternate;
            B !== null && (B = B.updateQueue, L = B.lastBaseUpdate, L !== m && (L === null ? B.firstBaseUpdate = b : L.next = b, B.lastBaseUpdate = j))
        }
        if (c !== null) {
            var D = u.baseState;
            m = 0, B = b = j = null, L = c;
            do {
                var P = L.lane,
                    _ = L.eventTime;
                if ((o & P) === P) {
                    B !== null && (B = B.next = {
                        eventTime: _,
                        lane: 0,
                        tag: L.tag,
                        payload: L.payload,
                        callback: L.callback,
                        next: null
                    });
                    e: {
                        var G = e,
                            Q = L;
                        switch (P = t, _ = i, Q.tag) {
                            case 1:
                                if (G = Q.payload, typeof G == "function") {
                                    D = G.call(_, D, P);
                                    break e
                                }
                                D = G;
                                break e;
                            case 3:
                                G.flags = G.flags & -65537 | 128;
                            case 0:
                                if (G = Q.payload, P = typeof G == "function" ? G.call(_, D, P) : G, P == null) break e;
                                D = I({}, D, P);
                                break e;
                            case 2:
                                dn = !0
                        }
                    }
                    L.callback !== null && L.lane !== 0 && (e.flags |= 64, P = u.effects, P === null ? u.effects = [L] : P.push(L))
                } else _ = {
                    eventTime: _,
                    lane: P,
                    tag: L.tag,
                    payload: L.payload,
                    callback: L.callback,
                    next: null
                }, B === null ? (b = B = _, j = D) : B = B.next = _, m |= P;
                if (L = L.next, L === null) {
                    if (L = u.shared.pending, L === null) break;
                    P = L, L = P.next, P.next = null, u.lastBaseUpdate = P, u.shared.pending = null
                }
            } while (!0);
            if (B === null && (j = D), u.baseState = j, u.firstBaseUpdate = b, u.lastBaseUpdate = B, t = u.shared.interleaved, t !== null) {
                u = t;
                do m |= u.lane, u = u.next; while (u !== t)
            } else c === null && (u.shared.lanes = 0);
            Rn |= m, e.lanes = m, e.memoizedState = D
        }
    }

    function cd(e, t, i) {
        if (e = t.effects, t.effects = null, e !== null)
            for (t = 0; t < e.length; t++) {
                var o = e[t],
                    u = o.callback;
                if (u !== null) {
                    if (o.callback = null, o = i, typeof u != "function") throw Error(s(191, u));
                    u.call(o)
                }
            }
    }
    var ni = {},
        Rt = ln(ni),
        ri = ln(ni),
        ii = ln(ni);

    function zn(e) {
        if (e === ni) throw Error(s(174));
        return e
    }

    function xa(e, t) {
        switch (me(ii, t), me(ri, e), me(Rt, ni), e = t.nodeType, e) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : wo(null, "");
                break;
            default:
                e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = wo(t, e)
        }
        ve(Rt), me(Rt, t)
    }

    function dr() {
        ve(Rt), ve(ri), ve(ii)
    }

    function dd(e) {
        zn(ii.current);
        var t = zn(Rt.current),
            i = wo(t, e.type);
        t !== i && (me(ri, e), me(Rt, i))
    }

    function wa(e) {
        ri.current === e && (ve(Rt), ve(ri))
    }
    var Se = ln(0);

    function Ls(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var i = t.memoizedState;
                if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }
    var La = [];

    function ja() {
        for (var e = 0; e < La.length; e++) La[e]._workInProgressVersionPrimary = null;
        La.length = 0
    }
    var js = Y.ReactCurrentDispatcher,
        Sa = Y.ReactCurrentBatchConfig,
        Pn = 0,
        Te = null,
        ze = null,
        Re = null,
        Ss = !1,
        si = !1,
        oi = 0,
        d0 = 0;

    function _e() {
        throw Error(s(321))
    }

    function Ta(e, t) {
        if (t === null) return !1;
        for (var i = 0; i < t.length && i < e.length; i++)
            if (!Et(e[i], t[i])) return !1;
        return !0
    }

    function Na(e, t, i, o, u, c) {
        if (Pn = c, Te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, js.current = e === null || e.memoizedState === null ? m0 : y0, e = i(o, u), si) {
            c = 0;
            do {
                if (si = !1, oi = 0, 25 <= c) throw Error(s(301));
                c += 1, Re = ze = null, t.updateQueue = null, js.current = g0, e = i(o, u)
            } while (si)
        }
        if (js.current = Es, t = ze !== null && ze.next !== null, Pn = 0, Re = ze = Te = null, Ss = !1, t) throw Error(s(300));
        return e
    }

    function Ea() {
        var e = oi !== 0;
        return oi = 0, e
    }

    function Bt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Re === null ? Te.memoizedState = Re = e : Re = Re.next = e, Re
    }

    function xt() {
        if (ze === null) {
            var e = Te.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = ze.next;
        var t = Re === null ? Te.memoizedState : Re.next;
        if (t !== null) Re = t, ze = e;
        else {
            if (e === null) throw Error(s(310));
            ze = e, e = {
                memoizedState: ze.memoizedState,
                baseState: ze.baseState,
                baseQueue: ze.baseQueue,
                queue: ze.queue,
                next: null
            }, Re === null ? Te.memoizedState = Re = e : Re = Re.next = e
        }
        return Re
    }

    function ai(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function Ma(e) {
        var t = xt(),
            i = t.queue;
        if (i === null) throw Error(s(311));
        i.lastRenderedReducer = e;
        var o = ze,
            u = o.baseQueue,
            c = i.pending;
        if (c !== null) {
            if (u !== null) {
                var m = u.next;
                u.next = c.next, c.next = m
            }
            o.baseQueue = u = c, i.pending = null
        }
        if (u !== null) {
            c = u.next, o = o.baseState;
            var L = m = null,
                j = null,
                b = c;
            do {
                var B = b.lane;
                if ((Pn & B) === B) j !== null && (j = j.next = {
                    lane: 0,
                    action: b.action,
                    hasEagerState: b.hasEagerState,
                    eagerState: b.eagerState,
                    next: null
                }), o = b.hasEagerState ? b.eagerState : e(o, b.action);
                else {
                    var D = {
                        lane: B,
                        action: b.action,
                        hasEagerState: b.hasEagerState,
                        eagerState: b.eagerState,
                        next: null
                    };
                    j === null ? (L = j = D, m = o) : j = j.next = D, Te.lanes |= B, Rn |= B
                }
                b = b.next
            } while (b !== null && b !== c);
            j === null ? m = o : j.next = L, Et(o, t.memoizedState) || (nt = !0), t.memoizedState = o, t.baseState = m, t.baseQueue = j, i.lastRenderedState = o
        }
        if (e = i.interleaved, e !== null) {
            u = e;
            do c = u.lane, Te.lanes |= c, Rn |= c, u = u.next; while (u !== e)
        } else u === null && (i.lanes = 0);
        return [t.memoizedState, i.dispatch]
    }

    function Va(e) {
        var t = xt(),
            i = t.queue;
        if (i === null) throw Error(s(311));
        i.lastRenderedReducer = e;
        var o = i.dispatch,
            u = i.pending,
            c = t.memoizedState;
        if (u !== null) {
            i.pending = null;
            var m = u = u.next;
            do c = e(c, m.action), m = m.next; while (m !== u);
            Et(c, t.memoizedState) || (nt = !0), t.memoizedState = c, t.baseQueue === null && (t.baseState = c), i.lastRenderedState = c
        }
        return [c, o]
    }

    function fd() {}

    function hd(e, t) {
        var i = Te,
            o = xt(),
            u = t(),
            c = !Et(o.memoizedState, u);
        if (c && (o.memoizedState = u, nt = !0), o = o.queue, Aa(yd.bind(null, i, o, e), [e]), o.getSnapshot !== t || c || Re !== null && Re.memoizedState.tag & 1) {
            if (i.flags |= 2048, li(9, md.bind(null, i, o, u, t), void 0, null), Be === null) throw Error(s(349));
            (Pn & 30) !== 0 || pd(i, t, u)
        }
        return u
    }

    function pd(e, t, i) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: i
        }, t = Te.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Te.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e))
    }

    function md(e, t, i, o) {
        t.value = i, t.getSnapshot = o, gd(t) && vd(e)
    }

    function yd(e, t, i) {
        return i(function() {
            gd(t) && vd(e)
        })
    }

    function gd(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var i = t();
            return !Et(e, i)
        } catch {
            return !0
        }
    }

    function vd(e) {
        var t = Gt(e, 1);
        t !== null && bt(t, e, 1, -1)
    }

    function xd(e) {
        var t = Bt();
        return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ai,
            lastRenderedState: e
        }, t.queue = e, e = e.dispatch = p0.bind(null, Te, e), [t.memoizedState, e]
    }

    function li(e, t, i, o) {
        return e = {
            tag: e,
            create: t,
            destroy: i,
            deps: o,
            next: null
        }, t = Te.updateQueue, t === null ? (t = {
            lastEffect: null,
            stores: null
        }, Te.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, t.lastEffect = e)), e
    }

    function wd() {
        return xt().memoizedState
    }

    function Ts(e, t, i, o) {
        var u = Bt();
        Te.flags |= e, u.memoizedState = li(1 | t, i, void 0, o === void 0 ? null : o)
    }

    function Ns(e, t, i, o) {
        var u = xt();
        o = o === void 0 ? null : o;
        var c = void 0;
        if (ze !== null) {
            var m = ze.memoizedState;
            if (c = m.destroy, o !== null && Ta(o, m.deps)) {
                u.memoizedState = li(t, i, c, o);
                return
            }
        }
        Te.flags |= e, u.memoizedState = li(1 | t, i, c, o)
    }

    function Ld(e, t) {
        return Ts(8390656, 8, e, t)
    }

    function Aa(e, t) {
        return Ns(2048, 8, e, t)
    }

    function jd(e, t) {
        return Ns(4, 2, e, t)
    }

    function Sd(e, t) {
        return Ns(4, 4, e, t)
    }

    function Td(e, t) {
        if (typeof t == "function") return e = e(), t(e),
            function() {
                t(null)
            };
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function Nd(e, t, i) {
        return i = i != null ? i.concat([e]) : null, Ns(4, 4, Td.bind(null, t, e), i)
    }

    function ka() {}

    function Ed(e, t) {
        var i = xt();
        t = t === void 0 ? null : t;
        var o = i.memoizedState;
        return o !== null && t !== null && Ta(t, o[1]) ? o[0] : (i.memoizedState = [e, t], e)
    }

    function Md(e, t) {
        var i = xt();
        t = t === void 0 ? null : t;
        var o = i.memoizedState;
        return o !== null && t !== null && Ta(t, o[1]) ? o[0] : (e = e(), i.memoizedState = [e, t], e)
    }

    function Vd(e, t, i) {
        return (Pn & 21) === 0 ? (e.baseState && (e.baseState = !1, nt = !0), e.memoizedState = i) : (Et(i, t) || (i = ic(), Te.lanes |= i, Rn |= i, e.baseState = !0), t)
    }

    function f0(e, t) {
        var i = he;
        he = i !== 0 && 4 > i ? i : 4, e(!0);
        var o = Sa.transition;
        Sa.transition = {};
        try {
            e(!1), t()
        } finally {
            he = i, Sa.transition = o
        }
    }

    function Ad() {
        return xt().memoizedState
    }

    function h0(e, t, i) {
        var o = yn(e);
        if (i = {
                lane: o,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, kd(e)) bd(t, i);
        else if (i = ad(e, t, i, o), i !== null) {
            var u = Xe();
            bt(i, e, o, u), Cd(i, t, o)
        }
    }

    function p0(e, t, i) {
        var o = yn(e),
            u = {
                lane: o,
                action: i,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
        if (kd(e)) bd(t, u);
        else {
            var c = e.alternate;
            if (e.lanes === 0 && (c === null || c.lanes === 0) && (c = t.lastRenderedReducer, c !== null)) try {
                var m = t.lastRenderedState,
                    L = c(m, i);
                if (u.hasEagerState = !0, u.eagerState = L, Et(L, m)) {
                    var j = t.interleaved;
                    j === null ? (u.next = u, ga(t)) : (u.next = j.next, j.next = u), t.interleaved = u;
                    return
                }
            } catch {} finally {}
            i = ad(e, t, u, o), i !== null && (u = Xe(), bt(i, e, o, u), Cd(i, t, o))
        }
    }

    function kd(e) {
        var t = e.alternate;
        return e === Te || t !== null && t === Te
    }

    function bd(e, t) {
        si = Ss = !0;
        var i = e.pending;
        i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t
    }

    function Cd(e, t, i) {
        if ((i & 4194240) !== 0) {
            var o = t.lanes;
            o &= e.pendingLanes, i |= o, t.lanes = i, Co(e, i)
        }
    }
    var Es = {
            readContext: vt,
            useCallback: _e,
            useContext: _e,
            useEffect: _e,
            useImperativeHandle: _e,
            useInsertionEffect: _e,
            useLayoutEffect: _e,
            useMemo: _e,
            useReducer: _e,
            useRef: _e,
            useState: _e,
            useDebugValue: _e,
            useDeferredValue: _e,
            useTransition: _e,
            useMutableSource: _e,
            useSyncExternalStore: _e,
            useId: _e,
            unstable_isNewReconciler: !1
        },
        m0 = {
            readContext: vt,
            useCallback: function(e, t) {
                return Bt().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: vt,
            useEffect: Ld,
            useImperativeHandle: function(e, t, i) {
                return i = i != null ? i.concat([e]) : null, Ts(4194308, 4, Td.bind(null, t, e), i)
            },
            useLayoutEffect: function(e, t) {
                return Ts(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                return Ts(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var i = Bt();
                return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e
            },
            useReducer: function(e, t, i) {
                var o = Bt();
                return t = i !== void 0 ? i(t) : t, o.memoizedState = o.baseState = t, e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }, o.queue = e, e = e.dispatch = h0.bind(null, Te, e), [o.memoizedState, e]
            },
            useRef: function(e) {
                var t = Bt();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: xd,
            useDebugValue: ka,
            useDeferredValue: function(e) {
                return Bt().memoizedState = e
            },
            useTransition: function() {
                var e = xd(!1),
                    t = e[0];
                return e = f0.bind(null, e[1]), Bt().memoizedState = e, [t, e]
            },
            useMutableSource: function() {},
            useSyncExternalStore: function(e, t, i) {
                var o = Te,
                    u = Bt();
                if (je) {
                    if (i === void 0) throw Error(s(407));
                    i = i()
                } else {
                    if (i = t(), Be === null) throw Error(s(349));
                    (Pn & 30) !== 0 || pd(o, t, i)
                }
                u.memoizedState = i;
                var c = {
                    value: i,
                    getSnapshot: t
                };
                return u.queue = c, Ld(yd.bind(null, o, c, e), [e]), o.flags |= 2048, li(9, md.bind(null, o, c, i, t), void 0, null), i
            },
            useId: function() {
                var e = Bt(),
                    t = Be.identifierPrefix;
                if (je) {
                    var i = Wt,
                        o = Ut;
                    i = (o & ~(1 << 32 - Nt(o) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = oi++, 0 < i && (t += "H" + i.toString(32)), t += ":"
                } else i = d0++, t = ":" + t + "r" + i.toString(32) + ":";
                return e.memoizedState = t
            },
            unstable_isNewReconciler: !1
        },
        y0 = {
            readContext: vt,
            useCallback: Ed,
            useContext: vt,
            useEffect: Aa,
            useImperativeHandle: Nd,
            useInsertionEffect: jd,
            useLayoutEffect: Sd,
            useMemo: Md,
            useReducer: Ma,
            useRef: wd,
            useState: function() {
                return Ma(ai)
            },
            useDebugValue: ka,
            useDeferredValue: function(e) {
                var t = xt();
                return Vd(t, ze.memoizedState, e)
            },
            useTransition: function() {
                var e = Ma(ai)[0],
                    t = xt().memoizedState;
                return [e, t]
            },
            useMutableSource: fd,
            useSyncExternalStore: hd,
            useId: Ad,
            unstable_isNewReconciler: !1
        },
        g0 = {
            readContext: vt,
            useCallback: Ed,
            useContext: vt,
            useEffect: Aa,
            useImperativeHandle: Nd,
            useInsertionEffect: jd,
            useLayoutEffect: Sd,
            useMemo: Md,
            useReducer: Va,
            useRef: wd,
            useState: function() {
                return Va(ai)
            },
            useDebugValue: ka,
            useDeferredValue: function(e) {
                var t = xt();
                return ze === null ? t.memoizedState = e : Vd(t, ze.memoizedState, e)
            },
            useTransition: function() {
                var e = Va(ai)[0],
                    t = xt().memoizedState;
                return [e, t]
            },
            useMutableSource: fd,
            useSyncExternalStore: hd,
            useId: Ad,
            unstable_isNewReconciler: !1
        };

    function Vt(e, t) {
        if (e && e.defaultProps) {
            t = I({}, t), e = e.defaultProps;
            for (var i in e) t[i] === void 0 && (t[i] = e[i]);
            return t
        }
        return t
    }

    function ba(e, t, i, o) {
        t = e.memoizedState, i = i(o, t), i = i == null ? t : I({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i)
    }
    var Ms = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? Mn(e) === e : !1
        },
        enqueueSetState: function(e, t, i) {
            e = e._reactInternals;
            var o = Xe(),
                u = yn(e),
                c = Qt(o, u);
            c.payload = t, i != null && (c.callback = i), t = fn(e, c, u), t !== null && (bt(t, e, u, o), xs(t, e, u))
        },
        enqueueReplaceState: function(e, t, i) {
            e = e._reactInternals;
            var o = Xe(),
                u = yn(e),
                c = Qt(o, u);
            c.tag = 1, c.payload = t, i != null && (c.callback = i), t = fn(e, c, u), t !== null && (bt(t, e, u, o), xs(t, e, u))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var i = Xe(),
                o = yn(e),
                u = Qt(i, o);
            u.tag = 2, t != null && (u.callback = t), t = fn(e, u, o), t !== null && (bt(t, e, o, i), xs(t, e, o))
        }
    };

    function zd(e, t, i, o, u, c, m) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, c, m) : t.prototype && t.prototype.isPureReactComponent ? !Hr(i, o) || !Hr(u, c) : !0
    }

    function Pd(e, t, i) {
        var o = !1,
            u = un,
            c = t.contextType;
        return typeof c == "object" && c !== null ? c = vt(c) : (u = tt(t) ? An : Je.current, o = t.contextTypes, c = (o = o != null) ? ir(e, u) : un), t = new t(i, c), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ms, e.stateNode = t, t._reactInternals = e, o && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = c), t
    }

    function Rd(e, t, i, o) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, o), t.state !== e && Ms.enqueueReplaceState(t, t.state, null)
    }

    function Ca(e, t, i, o) {
        var u = e.stateNode;
        u.props = i, u.state = e.memoizedState, u.refs = {}, va(e);
        var c = t.contextType;
        typeof c == "object" && c !== null ? u.context = vt(c) : (c = tt(t) ? An : Je.current, u.context = ir(e, c)), u.state = e.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (ba(e, t, c, i), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && Ms.enqueueReplaceState(u, u.state, null), ws(e, i, u, o), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308)
    }

    function fr(e, t) {
        try {
            var i = "",
                o = t;
            do i += ue(o), o = o.return; while (o);
            var u = i
        } catch (c) {
            u = `
Error generating stack: ` + c.message + `
` + c.stack
        }
        return {
            value: e,
            source: t,
            stack: u,
            digest: null
        }
    }

    function za(e, t, i) {
        return {
            value: e,
            source: null,
            stack: i ? ? null,
            digest: t ? ? null
        }
    }

    function Pa(e, t) {
        try {
            console.error(t.value)
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    var v0 = typeof WeakMap == "function" ? WeakMap : Map;

    function Bd(e, t, i) {
        i = Qt(-1, i), i.tag = 3, i.payload = {
            element: null
        };
        var o = t.value;
        return i.callback = function() {
            Ps || (Ps = !0, Ya = o), Pa(e, t)
        }, i
    }

    function Dd(e, t, i) {
        i = Qt(-1, i), i.tag = 3;
        var o = e.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var u = t.value;
            i.payload = function() {
                return o(u)
            }, i.callback = function() {
                Pa(e, t)
            }
        }
        var c = e.stateNode;
        return c !== null && typeof c.componentDidCatch == "function" && (i.callback = function() {
            Pa(e, t), typeof o != "function" && (pn === null ? pn = new Set([this]) : pn.add(this));
            var m = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: m !== null ? m : ""
            })
        }), i
    }

    function Fd(e, t, i) {
        var o = e.pingCache;
        if (o === null) {
            o = e.pingCache = new v0;
            var u = new Set;
            o.set(t, u)
        } else u = o.get(t), u === void 0 && (u = new Set, o.set(t, u));
        u.has(i) || (u.add(i), e = C0.bind(null, e, t, i), t.then(e, e))
    }

    function Od(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
            e = e.return
        } while (e !== null);
        return null
    }

    function Zd(e, t, i, o, u) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = Qt(-1, 1), t.tag = 2, fn(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = u, e)
    }
    var x0 = Y.ReactCurrentOwner,
        nt = !1;

    function $e(e, t, i, o) {
        t.child = e === null ? od(t, null, i, o) : lr(t, e.child, i, o)
    }

    function Jd(e, t, i, o, u) {
        i = i.render;
        var c = t.ref;
        return cr(t, u), o = Na(e, t, i, o, c, u), i = Ea(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Ht(e, t, u)) : (je && i && la(t), t.flags |= 1, $e(e, t, o, u), t.child)
    }

    function _d(e, t, i, o, u) {
        if (e === null) {
            var c = i.type;
            return typeof c == "function" && !nl(c) && c.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = c, Id(e, t, c, o, u)) : (e = Zs(i.type, null, o, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (c = e.child, (e.lanes & u) === 0) {
            var m = c.memoizedProps;
            if (i = i.compare, i = i !== null ? i : Hr, i(m, o) && e.ref === t.ref) return Ht(e, t, u)
        }
        return t.flags |= 1, e = vn(c, o), e.ref = t.ref, e.return = t, t.child = e
    }

    function Id(e, t, i, o, u) {
        if (e !== null) {
            var c = e.memoizedProps;
            if (Hr(c, o) && e.ref === t.ref)
                if (nt = !1, t.pendingProps = o = c, (e.lanes & u) !== 0)(e.flags & 131072) !== 0 && (nt = !0);
                else return t.lanes = e.lanes, Ht(e, t, u)
        }
        return Ra(e, t, i, o, u)
    }

    function Ud(e, t, i) {
        var o = t.pendingProps,
            u = o.children,
            c = e !== null ? e.memoizedState : null;
        if (o.mode === "hidden")
            if ((t.mode & 1) === 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, me(pr, ft), ft |= i;
            else {
                if ((i & 1073741824) === 0) return e = c !== null ? c.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, me(pr, ft), ft |= e, null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, o = c !== null ? c.baseLanes : i, me(pr, ft), ft |= o
            }
        else c !== null ? (o = c.baseLanes | i, t.memoizedState = null) : o = i, me(pr, ft), ft |= o;
        return $e(e, t, u, i), t.child
    }

    function Wd(e, t) {
        var i = t.ref;
        (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152)
    }

    function Ra(e, t, i, o, u) {
        var c = tt(i) ? An : Je.current;
        return c = ir(t, c), cr(t, u), i = Na(e, t, i, o, c, u), o = Ea(), e !== null && !nt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, Ht(e, t, u)) : (je && o && la(t), t.flags |= 1, $e(e, t, i, u), t.child)
    }

    function Gd(e, t, i, o, u) {
        if (tt(i)) {
            var c = !0;
            ds(t)
        } else c = !1;
        if (cr(t, u), t.stateNode === null) As(e, t), Pd(t, i, o), Ca(t, i, o, u), o = !0;
        else if (e === null) {
            var m = t.stateNode,
                L = t.memoizedProps;
            m.props = L;
            var j = m.context,
                b = i.contextType;
            typeof b == "object" && b !== null ? b = vt(b) : (b = tt(i) ? An : Je.current, b = ir(t, b));
            var B = i.getDerivedStateFromProps,
                D = typeof B == "function" || typeof m.getSnapshotBeforeUpdate == "function";
            D || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (L !== o || j !== b) && Rd(t, m, o, b), dn = !1;
            var P = t.memoizedState;
            m.state = P, ws(t, o, m, u), j = t.memoizedState, L !== o || P !== j || et.current || dn ? (typeof B == "function" && (ba(t, i, B, o), j = t.memoizedState), (L = dn || zd(t, i, L, o, P, j, b)) ? (D || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = j), m.props = o, m.state = j, m.context = b, o = L) : (typeof m.componentDidMount == "function" && (t.flags |= 4194308), o = !1)
        } else {
            m = t.stateNode, ld(e, t), L = t.memoizedProps, b = t.type === t.elementType ? L : Vt(t.type, L), m.props = b, D = t.pendingProps, P = m.context, j = i.contextType, typeof j == "object" && j !== null ? j = vt(j) : (j = tt(i) ? An : Je.current, j = ir(t, j));
            var _ = i.getDerivedStateFromProps;
            (B = typeof _ == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (L !== D || P !== j) && Rd(t, m, o, j), dn = !1, P = t.memoizedState, m.state = P, ws(t, o, m, u);
            var G = t.memoizedState;
            L !== D || P !== G || et.current || dn ? (typeof _ == "function" && (ba(t, i, _, o), G = t.memoizedState), (b = dn || zd(t, i, b, o, P, G, j) || !1) ? (B || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, G, j), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, G, j)), typeof m.componentDidUpdate == "function" && (t.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || L === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || L === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = G), m.props = o, m.state = G, m.context = j, o = b) : (typeof m.componentDidUpdate != "function" || L === e.memoizedProps && P === e.memoizedState || (t.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || L === e.memoizedProps && P === e.memoizedState || (t.flags |= 1024), o = !1)
        }
        return Ba(e, t, i, o, c, u)
    }

    function Ba(e, t, i, o, u, c) {
        Wd(e, t);
        var m = (t.flags & 128) !== 0;
        if (!o && !m) return u && Xc(t, i, !1), Ht(e, t, c);
        o = t.stateNode, x0.current = t;
        var L = m && typeof i.getDerivedStateFromError != "function" ? null : o.render();
        return t.flags |= 1, e !== null && m ? (t.child = lr(t, e.child, null, c), t.child = lr(t, null, L, c)) : $e(e, t, L, c), t.memoizedState = o.state, u && Xc(t, i, !0), t.child
    }

    function Qd(e) {
        var t = e.stateNode;
        t.pendingContext ? Yc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Yc(e, t.context, !1), xa(e, t.containerInfo)
    }

    function Hd(e, t, i, o, u) {
        return ar(), fa(u), t.flags |= 256, $e(e, t, i, o), t.child
    }
    var Da = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };

    function Fa(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }

    function Yd(e, t, i) {
        var o = t.pendingProps,
            u = Se.current,
            c = !1,
            m = (t.flags & 128) !== 0,
            L;
        if ((L = m) || (L = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), L ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), me(Se, u & 1), e === null) return da(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (m = o.children, e = o.fallback, c ? (o = t.mode, c = t.child, m = {
            mode: "hidden",
            children: m
        }, (o & 1) === 0 && c !== null ? (c.childLanes = 0, c.pendingProps = m) : c = Js(m, o, 0, null), e = On(e, o, i, null), c.return = t, e.return = t, c.sibling = e, t.child = c, t.child.memoizedState = Fa(i), t.memoizedState = Da, e) : Oa(t, m));
        if (u = e.memoizedState, u !== null && (L = u.dehydrated, L !== null)) return w0(e, t, m, o, L, u, i);
        if (c) {
            c = o.fallback, m = t.mode, u = e.child, L = u.sibling;
            var j = {
                mode: "hidden",
                children: o.children
            };
            return (m & 1) === 0 && t.child !== u ? (o = t.child, o.childLanes = 0, o.pendingProps = j, t.deletions = null) : (o = vn(u, j), o.subtreeFlags = u.subtreeFlags & 14680064), L !== null ? c = vn(L, c) : (c = On(c, m, i, null), c.flags |= 2), c.return = t, o.return = t, o.sibling = c, t.child = o, o = c, c = t.child, m = e.child.memoizedState, m = m === null ? Fa(i) : {
                baseLanes: m.baseLanes | i,
                cachePool: null,
                transitions: m.transitions
            }, c.memoizedState = m, c.childLanes = e.childLanes & ~i, t.memoizedState = Da, o
        }
        return c = e.child, e = c.sibling, o = vn(c, {
            mode: "visible",
            children: o.children
        }), (t.mode & 1) === 0 && (o.lanes = i), o.return = t, o.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = o, t.memoizedState = null, o
    }

    function Oa(e, t) {
        return t = Js({
            mode: "visible",
            children: t
        }, e.mode, 0, null), t.return = e, e.child = t
    }

    function Vs(e, t, i, o) {
        return o !== null && fa(o), lr(t, e.child, null, i), e = Oa(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function w0(e, t, i, o, u, c, m) {
        if (i) return t.flags & 256 ? (t.flags &= -257, o = za(Error(s(422))), Vs(e, t, m, o)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (c = o.fallback, u = t.mode, o = Js({
            mode: "visible",
            children: o.children
        }, u, 0, null), c = On(c, u, m, null), c.flags |= 2, o.return = t, c.return = t, o.sibling = c, t.child = o, (t.mode & 1) !== 0 && lr(t, e.child, null, m), t.child.memoizedState = Fa(m), t.memoizedState = Da, c);
        if ((t.mode & 1) === 0) return Vs(e, t, m, null);
        if (u.data === "$!") {
            if (o = u.nextSibling && u.nextSibling.dataset, o) var L = o.dgst;
            return o = L, c = Error(s(419)), o = za(c, o, void 0), Vs(e, t, m, o)
        }
        if (L = (m & e.childLanes) !== 0, nt || L) {
            if (o = Be, o !== null) {
                switch (m & -m) {
                    case 4:
                        u = 2;
                        break;
                    case 16:
                        u = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        u = 32;
                        break;
                    case 536870912:
                        u = 268435456;
                        break;
                    default:
                        u = 0
                }
                u = (u & (o.suspendedLanes | m)) !== 0 ? 0 : u, u !== 0 && u !== c.retryLane && (c.retryLane = u, Gt(e, u), bt(o, e, u, -1))
            }
            return tl(), o = za(Error(s(421))), Vs(e, t, m, o)
        }
        return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = z0.bind(null, e), u._reactRetry = t, null) : (e = c.treeContext, dt = an(u.nextSibling), ct = t, je = !0, Mt = null, e !== null && (yt[gt++] = Ut, yt[gt++] = Wt, yt[gt++] = kn, Ut = e.id, Wt = e.overflow, kn = t), t = Oa(t, o.children), t.flags |= 4096, t)
    }

    function $d(e, t, i) {
        e.lanes |= t;
        var o = e.alternate;
        o !== null && (o.lanes |= t), ya(e.return, t, i)
    }

    function Za(e, t, i, o, u) {
        var c = e.memoizedState;
        c === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: o,
            tail: i,
            tailMode: u
        } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = o, c.tail = i, c.tailMode = u)
    }

    function Xd(e, t, i) {
        var o = t.pendingProps,
            u = o.revealOrder,
            c = o.tail;
        if ($e(e, t, o.children, i), o = Se.current, (o & 2) !== 0) o = o & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && $d(e, i, t);
                else if (e.tag === 19) $d(e, i, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            o &= 1
        }
        if (me(Se, o), (t.mode & 1) === 0) t.memoizedState = null;
        else switch (u) {
            case "forwards":
                for (i = t.child, u = null; i !== null;) e = i.alternate, e !== null && Ls(e) === null && (u = i), i = i.sibling;
                i = u, i === null ? (u = t.child, t.child = null) : (u = i.sibling, i.sibling = null), Za(t, !1, u, i, c);
                break;
            case "backwards":
                for (i = null, u = t.child, t.child = null; u !== null;) {
                    if (e = u.alternate, e !== null && Ls(e) === null) {
                        t.child = u;
                        break
                    }
                    e = u.sibling, u.sibling = i, i = u, u = e
                }
                Za(t, !0, i, null, c);
                break;
            case "together":
                Za(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function As(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
    }

    function Ht(e, t, i) {
        if (e !== null && (t.dependencies = e.dependencies), Rn |= t.lanes, (i & t.childLanes) === 0) return null;
        if (e !== null && t.child !== e.child) throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child, i = vn(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null;) e = e.sibling, i = i.sibling = vn(e, e.pendingProps), i.return = t;
            i.sibling = null
        }
        return t.child
    }

    function L0(e, t, i) {
        switch (t.tag) {
            case 3:
                Qd(t), ar();
                break;
            case 5:
                dd(t);
                break;
            case 1:
                tt(t.type) && ds(t);
                break;
            case 4:
                xa(t, t.stateNode.containerInfo);
                break;
            case 10:
                var o = t.type._context,
                    u = t.memoizedProps.value;
                me(gs, o._currentValue), o._currentValue = u;
                break;
            case 13:
                if (o = t.memoizedState, o !== null) return o.dehydrated !== null ? (me(Se, Se.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? Yd(e, t, i) : (me(Se, Se.current & 1), e = Ht(e, t, i), e !== null ? e.sibling : null);
                me(Se, Se.current & 1);
                break;
            case 19:
                if (o = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
                    if (o) return Xd(e, t, i);
                    t.flags |= 128
                }
                if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), me(Se, Se.current), o) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Ud(e, t, i)
        }
        return Ht(e, t, i)
    }
    var Kd, Ja, qd, ef;
    Kd = function(e, t) {
        for (var i = t.child; i !== null;) {
            if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
            else if (i.tag !== 4 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue
            }
            if (i === t) break;
            for (; i.sibling === null;) {
                if (i.return === null || i.return === t) return;
                i = i.return
            }
            i.sibling.return = i.return, i = i.sibling
        }
    }, Ja = function() {}, qd = function(e, t, i, o) {
        var u = e.memoizedProps;
        if (u !== o) {
            e = t.stateNode, zn(Rt.current);
            var c = null;
            switch (i) {
                case "input":
                    u = yo(e, u), o = yo(e, o), c = [];
                    break;
                case "select":
                    u = I({}, u, {
                        value: void 0
                    }), o = I({}, o, {
                        value: void 0
                    }), c = [];
                    break;
                case "textarea":
                    u = xo(e, u), o = xo(e, o), c = [];
                    break;
                default:
                    typeof u.onClick != "function" && typeof o.onClick == "function" && (e.onclick = ls)
            }
            Lo(i, o);
            var m;
            i = null;
            for (b in u)
                if (!o.hasOwnProperty(b) && u.hasOwnProperty(b) && u[b] != null)
                    if (b === "style") {
                        var L = u[b];
                        for (m in L) L.hasOwnProperty(m) && (i || (i = {}), i[m] = "")
                    } else b !== "dangerouslySetInnerHTML" && b !== "children" && b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && b !== "autoFocus" && (l.hasOwnProperty(b) ? c || (c = []) : (c = c || []).push(b, null));
            for (b in o) {
                var j = o[b];
                if (L = u ? .[b], o.hasOwnProperty(b) && j !== L && (j != null || L != null))
                    if (b === "style")
                        if (L) {
                            for (m in L) !L.hasOwnProperty(m) || j && j.hasOwnProperty(m) || (i || (i = {}), i[m] = "");
                            for (m in j) j.hasOwnProperty(m) && L[m] !== j[m] && (i || (i = {}), i[m] = j[m])
                        } else i || (c || (c = []), c.push(b, i)), i = j;
                else b === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, L = L ? L.__html : void 0, j != null && L !== j && (c = c || []).push(b, j)) : b === "children" ? typeof j != "string" && typeof j != "number" || (c = c || []).push(b, "" + j) : b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && (l.hasOwnProperty(b) ? (j != null && b === "onScroll" && ge("scroll", e), c || L === j || (c = [])) : (c = c || []).push(b, j))
            }
            i && (c = c || []).push("style", i);
            var b = c;
            (t.updateQueue = b) && (t.flags |= 4)
        }
    }, ef = function(e, t, i, o) {
        i !== o && (t.flags |= 4)
    };

    function ui(e, t) {
        if (!je) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var i = null; t !== null;) t.alternate !== null && (i = t), t = t.sibling;
                i === null ? e.tail = null : i.sibling = null;
                break;
            case "collapsed":
                i = e.tail;
                for (var o = null; i !== null;) i.alternate !== null && (o = i), i = i.sibling;
                o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
        }
    }

    function Ie(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            i = 0,
            o = 0;
        if (t)
            for (var u = e.child; u !== null;) i |= u.lanes | u.childLanes, o |= u.subtreeFlags & 14680064, o |= u.flags & 14680064, u.return = e, u = u.sibling;
        else
            for (u = e.child; u !== null;) i |= u.lanes | u.childLanes, o |= u.subtreeFlags, o |= u.flags, u.return = e, u = u.sibling;
        return e.subtreeFlags |= o, e.childLanes = i, t
    }

    function j0(e, t, i) {
        var o = t.pendingProps;
        switch (ua(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Ie(t), null;
            case 1:
                return tt(t.type) && cs(), Ie(t), null;
            case 3:
                return o = t.stateNode, dr(), ve(et), ve(Je), ja(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (e === null || e.child === null) && (ms(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Mt !== null && (Ka(Mt), Mt = null))), Ja(e, t), Ie(t), null;
            case 5:
                wa(t);
                var u = zn(ii.current);
                if (i = t.type, e !== null && t.stateNode != null) qd(e, t, i, o, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!o) {
                        if (t.stateNode === null) throw Error(s(166));
                        return Ie(t), null
                    }
                    if (e = zn(Rt.current), ms(t)) {
                        o = t.stateNode, i = t.type;
                        var c = t.memoizedProps;
                        switch (o[Pt] = t, o[qr] = c, e = (t.mode & 1) !== 0, i) {
                            case "dialog":
                                ge("cancel", o), ge("close", o);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ge("load", o);
                                break;
                            case "video":
                            case "audio":
                                for (u = 0; u < $r.length; u++) ge($r[u], o);
                                break;
                            case "source":
                                ge("error", o);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ge("error", o), ge("load", o);
                                break;
                            case "details":
                                ge("toggle", o);
                                break;
                            case "input":
                                Pu(o, c), ge("invalid", o);
                                break;
                            case "select":
                                o._wrapperState = {
                                    wasMultiple: !!c.multiple
                                }, ge("invalid", o);
                                break;
                            case "textarea":
                                Du(o, c), ge("invalid", o)
                        }
                        Lo(i, c), u = null;
                        for (var m in c)
                            if (c.hasOwnProperty(m)) {
                                var L = c[m];
                                m === "children" ? typeof L == "string" ? o.textContent !== L && (c.suppressHydrationWarning !== !0 && as(o.textContent, L, e), u = ["children", L]) : typeof L == "number" && o.textContent !== "" + L && (c.suppressHydrationWarning !== !0 && as(o.textContent, L, e), u = ["children", "" + L]) : l.hasOwnProperty(m) && L != null && m === "onScroll" && ge("scroll", o)
                            }
                        switch (i) {
                            case "input":
                                Fi(o), Bu(o, c, !0);
                                break;
                            case "textarea":
                                Fi(o), Ou(o);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof c.onClick == "function" && (o.onclick = ls)
                        }
                        o = u, t.updateQueue = o, o !== null && (t.flags |= 4)
                    } else {
                        m = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Zu(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = m.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof o.is == "string" ? e = m.createElement(i, {
                            is: o.is
                        }) : (e = m.createElement(i), i === "select" && (m = e, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : e = m.createElementNS(e, i), e[Pt] = t, e[qr] = o, Kd(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (m = jo(i, o), i) {
                                case "dialog":
                                    ge("cancel", e), ge("close", e), u = o;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    ge("load", e), u = o;
                                    break;
                                case "video":
                                case "audio":
                                    for (u = 0; u < $r.length; u++) ge($r[u], e);
                                    u = o;
                                    break;
                                case "source":
                                    ge("error", e), u = o;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    ge("error", e), ge("load", e), u = o;
                                    break;
                                case "details":
                                    ge("toggle", e), u = o;
                                    break;
                                case "input":
                                    Pu(e, o), u = yo(e, o), ge("invalid", e);
                                    break;
                                case "option":
                                    u = o;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!o.multiple
                                    }, u = I({}, o, {
                                        value: void 0
                                    }), ge("invalid", e);
                                    break;
                                case "textarea":
                                    Du(e, o), u = xo(e, o), ge("invalid", e);
                                    break;
                                default:
                                    u = o
                            }
                            Lo(i, u),
                            L = u;
                            for (c in L)
                                if (L.hasOwnProperty(c)) {
                                    var j = L[c];
                                    c === "style" ? Iu(e, j) : c === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && Ju(e, j)) : c === "children" ? typeof j == "string" ? (i !== "textarea" || j !== "") && br(e, j) : typeof j == "number" && br(e, "" + j) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (l.hasOwnProperty(c) ? j != null && c === "onScroll" && ge("scroll", e) : j != null && Z(e, c, j, m))
                                }
                            switch (i) {
                                case "input":
                                    Fi(e), Bu(e, o, !1);
                                    break;
                                case "textarea":
                                    Fi(e), Ou(e);
                                    break;
                                case "option":
                                    o.value != null && e.setAttribute("value", "" + fe(o.value));
                                    break;
                                case "select":
                                    e.multiple = !!o.multiple, c = o.value, c != null ? Gn(e, !!o.multiple, c, !1) : o.defaultValue != null && Gn(e, !!o.multiple, o.defaultValue, !0);
                                    break;
                                default:
                                    typeof u.onClick == "function" && (e.onclick = ls)
                            }
                            switch (i) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    o = !!o.autoFocus;
                                    break e;
                                case "img":
                                    o = !0;
                                    break e;
                                default:
                                    o = !1
                            }
                        }
                        o && (t.flags |= 4)
                    }
                    t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
                }
                return Ie(t), null;
            case 6:
                if (e && t.stateNode != null) ef(e, t, e.memoizedProps, o);
                else {
                    if (typeof o != "string" && t.stateNode === null) throw Error(s(166));
                    if (i = zn(ii.current), zn(Rt.current), ms(t)) {
                        if (o = t.stateNode, i = t.memoizedProps, o[Pt] = t, (c = o.nodeValue !== i) && (e = ct, e !== null)) switch (e.tag) {
                            case 3:
                                as(o.nodeValue, i, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && as(o.nodeValue, i, (e.mode & 1) !== 0)
                        }
                        c && (t.flags |= 4)
                    } else o = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(o), o[Pt] = t, t.stateNode = o
                }
                return Ie(t), null;
            case 13:
                if (ve(Se), o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (je && dt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) rd(), ar(), t.flags |= 98560, c = !1;
                    else if (c = ms(t), o !== null && o.dehydrated !== null) {
                        if (e === null) {
                            if (!c) throw Error(s(318));
                            if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
                            c[Pt] = t
                        } else ar(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Ie(t), c = !1
                    } else Mt !== null && (Ka(Mt), Mt = null), c = !0;
                    if (!c) return t.flags & 65536 ? t : null
                }
                return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (o = o !== null, o !== (e !== null && e.memoizedState !== null) && o && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Se.current & 1) !== 0 ? Pe === 0 && (Pe = 3) : tl())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
            case 4:
                return dr(), Ja(e, t), e === null && Xr(t.stateNode.containerInfo), Ie(t), null;
            case 10:
                return ma(t.type._context), Ie(t), null;
            case 17:
                return tt(t.type) && cs(), Ie(t), null;
            case 19:
                if (ve(Se), c = t.memoizedState, c === null) return Ie(t), null;
                if (o = (t.flags & 128) !== 0, m = c.rendering, m === null)
                    if (o) ui(c, !1);
                    else {
                        if (Pe !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (m = Ls(e), m !== null) {
                                    for (t.flags |= 128, ui(c, !1), o = m.updateQueue, o !== null && (t.updateQueue = o, t.flags |= 4), t.subtreeFlags = 0, o = i, i = t.child; i !== null;) c = i, e = o, c.flags &= 14680066, m = c.alternate, m === null ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = m.childLanes, c.lanes = m.lanes, c.child = m.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = m.memoizedProps, c.memoizedState = m.memoizedState, c.updateQueue = m.updateQueue, c.type = m.type, e = m.dependencies, c.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }), i = i.sibling;
                                    return me(Se, Se.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        c.tail !== null && Ve() > mr && (t.flags |= 128, o = !0, ui(c, !1), t.lanes = 4194304)
                    }
                else {
                    if (!o)
                        if (e = Ls(m), e !== null) {
                            if (t.flags |= 128, o = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), ui(c, !0), c.tail === null && c.tailMode === "hidden" && !m.alternate && !je) return Ie(t), null
                        } else 2 * Ve() - c.renderingStartTime > mr && i !== 1073741824 && (t.flags |= 128, o = !0, ui(c, !1), t.lanes = 4194304);
                    c.isBackwards ? (m.sibling = t.child, t.child = m) : (i = c.last, i !== null ? i.sibling = m : t.child = m, c.last = m)
                }
                return c.tail !== null ? (t = c.tail, c.rendering = t, c.tail = t.sibling, c.renderingStartTime = Ve(), t.sibling = null, i = Se.current, me(Se, o ? i & 1 | 2 : i & 1), t) : (Ie(t), null);
            case 22:
            case 23:
                return el(), o = t.memoizedState !== null, e !== null && e.memoizedState !== null !== o && (t.flags |= 8192), o && (t.mode & 1) !== 0 ? (ft & 1073741824) !== 0 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
            case 24:
                return null;
            case 25:
                return null
        }
        throw Error(s(156, t.tag))
    }

    function S0(e, t) {
        switch (ua(t), t.tag) {
            case 1:
                return tt(t.type) && cs(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return dr(), ve(et), ve(Je), ja(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 5:
                return wa(t), null;
            case 13:
                if (ve(Se), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(s(340));
                    ar()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return ve(Se), null;
            case 4:
                return dr(), null;
            case 10:
                return ma(t.type._context), null;
            case 22:
            case 23:
                return el(), null;
            case 24:
                return null;
            default:
                return null
        }
    }
    var ks = !1,
        Ue = !1,
        T0 = typeof WeakSet == "function" ? WeakSet : Set,
        W = null;

    function hr(e, t) {
        var i = e.ref;
        if (i !== null)
            if (typeof i == "function") try {
                i(null)
            } catch (o) {
                Ee(e, t, o)
            } else i.current = null
    }

    function _a(e, t, i) {
        try {
            i()
        } catch (o) {
            Ee(e, t, o)
        }
    }
    var tf = !1;

    function N0(e, t) {
        if (ea = $i, e = zc(), Go(e)) {
            if ("selectionStart" in e) var i = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                i = (i = e.ownerDocument) && i.defaultView || window;
                var o = i.getSelection && i.getSelection();
                if (o && o.rangeCount !== 0) {
                    i = o.anchorNode;
                    var u = o.anchorOffset,
                        c = o.focusNode;
                    o = o.focusOffset;
                    try {
                        i.nodeType, c.nodeType
                    } catch {
                        i = null;
                        break e
                    }
                    var m = 0,
                        L = -1,
                        j = -1,
                        b = 0,
                        B = 0,
                        D = e,
                        P = null;
                    t: for (;;) {
                        for (var _; D !== i || u !== 0 && D.nodeType !== 3 || (L = m + u), D !== c || o !== 0 && D.nodeType !== 3 || (j = m + o), D.nodeType === 3 && (m += D.nodeValue.length), (_ = D.firstChild) !== null;) P = D, D = _;
                        for (;;) {
                            if (D === e) break t;
                            if (P === i && ++b === u && (L = m), P === c && ++B === o && (j = m), (_ = D.nextSibling) !== null) break;
                            D = P, P = D.parentNode
                        }
                        D = _
                    }
                    i = L === -1 || j === -1 ? null : {
                        start: L,
                        end: j
                    }
                } else i = null
            }
            i = i || {
                start: 0,
                end: 0
            }
        } else i = null;
        for (ta = {
                focusedElem: e,
                selectionRange: i
            }, $i = !1, W = t; W !== null;)
            if (t = W, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, W = e;
            else
                for (; W !== null;) {
                    t = W;
                    try {
                        var G = t.alternate;
                        if ((t.flags & 1024) !== 0) switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (G !== null) {
                                    var Q = G.memoizedProps,
                                        Ae = G.memoizedState,
                                        E = t.stateNode,
                                        S = E.getSnapshotBeforeUpdate(t.elementType === t.type ? Q : Vt(t.type, Q), Ae);
                                    E.__reactInternalSnapshotBeforeUpdate = S
                                }
                                break;
                            case 3:
                                var M = t.stateNode.containerInfo;
                                M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(s(163))
                        }
                    } catch (F) {
                        Ee(t, t.return, F)
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, W = e;
                        break
                    }
                    W = t.return
                }
        return G = tf, tf = !1, G
    }

    function ci(e, t, i) {
        var o = t.updateQueue;
        if (o = o !== null ? o.lastEffect : null, o !== null) {
            var u = o = o.next;
            do {
                if ((u.tag & e) === e) {
                    var c = u.destroy;
                    u.destroy = void 0, c !== void 0 && _a(t, i, c)
                }
                u = u.next
            } while (u !== o)
        }
    }

    function bs(e, t) {
        if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
            var i = t = t.next;
            do {
                if ((i.tag & e) === e) {
                    var o = i.create;
                    i.destroy = o()
                }
                i = i.next
            } while (i !== t)
        }
    }

    function Ia(e) {
        var t = e.ref;
        if (t !== null) {
            var i = e.stateNode;
            switch (e.tag) {
                case 5:
                    e = i;
                    break;
                default:
                    e = i
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }

    function nf(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, nf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Pt], delete t[qr], delete t[sa], delete t[a0], delete t[l0])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }

    function rf(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }

    function sf(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || rf(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function Ua(e, t, i) {
        var o = e.tag;
        if (o === 5 || o === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = ls));
        else if (o !== 4 && (e = e.child, e !== null))
            for (Ua(e, t, i), e = e.sibling; e !== null;) Ua(e, t, i), e = e.sibling
    }

    function Wa(e, t, i) {
        var o = e.tag;
        if (o === 5 || o === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
        else if (o !== 4 && (e = e.child, e !== null))
            for (Wa(e, t, i), e = e.sibling; e !== null;) Wa(e, t, i), e = e.sibling
    }
    var Fe = null,
        At = !1;

    function hn(e, t, i) {
        for (i = i.child; i !== null;) of (e, t, i), i = i.sibling
    }

    function of (e, t, i) {
        if (zt && typeof zt.onCommitFiberUnmount == "function") try {
            zt.onCommitFiberUnmount(Ui, i)
        } catch {}
        switch (i.tag) {
            case 5:
                Ue || hr(i, t);
            case 6:
                var o = Fe,
                    u = At;
                Fe = null, hn(e, t, i), Fe = o, At = u, Fe !== null && (At ? (e = Fe, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : Fe.removeChild(i.stateNode));
                break;
            case 18:
                Fe !== null && (At ? (e = Fe, i = i.stateNode, e.nodeType === 8 ? ia(e.parentNode, i) : e.nodeType === 1 && ia(e, i), _r(e)) : ia(Fe, i.stateNode));
                break;
            case 4:
                o = Fe, u = At, Fe = i.stateNode.containerInfo, At = !0, hn(e, t, i), Fe = o, At = u;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Ue && (o = i.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
                    u = o = o.next;
                    do {
                        var c = u,
                            m = c.destroy;
                        c = c.tag, m !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && _a(i, t, m), u = u.next
                    } while (u !== o)
                }
                hn(e, t, i);
                break;
            case 1:
                if (!Ue && (hr(i, t), o = i.stateNode, typeof o.componentWillUnmount == "function")) try {
                    o.props = i.memoizedProps, o.state = i.memoizedState, o.componentWillUnmount()
                } catch (L) {
                    Ee(i, t, L)
                }
                hn(e, t, i);
                break;
            case 21:
                hn(e, t, i);
                break;
            case 22:
                i.mode & 1 ? (Ue = (o = Ue) || i.memoizedState !== null, hn(e, t, i), Ue = o) : hn(e, t, i);
                break;
            default:
                hn(e, t, i)
        }
    }

    function af(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var i = e.stateNode;
            i === null && (i = e.stateNode = new T0), t.forEach(function(o) {
                var u = P0.bind(null, e, o);
                i.has(o) || (i.add(o), o.then(u, u))
            })
        }
    }

    function kt(e, t) {
        var i = t.deletions;
        if (i !== null)
            for (var o = 0; o < i.length; o++) {
                var u = i[o];
                try {
                    var c = e,
                        m = t,
                        L = m;
                    e: for (; L !== null;) {
                        switch (L.tag) {
                            case 5:
                                Fe = L.stateNode, At = !1;
                                break e;
                            case 3:
                                Fe = L.stateNode.containerInfo, At = !0;
                                break e;
                            case 4:
                                Fe = L.stateNode.containerInfo, At = !0;
                                break e
                        }
                        L = L.return
                    }
                    if (Fe === null) throw Error(s(160)); of (c, m, u), Fe = null, At = !1;
                    var j = u.alternate;
                    j !== null && (j.return = null), u.return = null
                } catch (b) {
                    Ee(u, t, b)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null;) lf(t, e), t = t.sibling
    }

    function lf(e, t) {
        var i = e.alternate,
            o = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (kt(t, e), Dt(e), o & 4) {
                    try {
                        ci(3, e, e.return), bs(3, e)
                    } catch (Q) {
                        Ee(e, e.return, Q)
                    }
                    try {
                        ci(5, e, e.return)
                    } catch (Q) {
                        Ee(e, e.return, Q)
                    }
                }
                break;
            case 1:
                kt(t, e), Dt(e), o & 512 && i !== null && hr(i, i.return);
                break;
            case 5:
                if (kt(t, e), Dt(e), o & 512 && i !== null && hr(i, i.return), e.flags & 32) {
                    var u = e.stateNode;
                    try {
                        br(u, "")
                    } catch (Q) {
                        Ee(e, e.return, Q)
                    }
                }
                if (o & 4 && (u = e.stateNode, u != null)) {
                    var c = e.memoizedProps,
                        m = i !== null ? i.memoizedProps : c,
                        L = e.type,
                        j = e.updateQueue;
                    if (e.updateQueue = null, j !== null) try {
                        L === "input" && c.type === "radio" && c.name != null && Ru(u, c), jo(L, m);
                        var b = jo(L, c);
                        for (m = 0; m < j.length; m += 2) {
                            var B = j[m],
                                D = j[m + 1];
                            B === "style" ? Iu(u, D) : B === "dangerouslySetInnerHTML" ? Ju(u, D) : B === "children" ? br(u, D) : Z(u, B, D, b)
                        }
                        switch (L) {
                            case "input":
                                go(u, c);
                                break;
                            case "textarea":
                                Fu(u, c);
                                break;
                            case "select":
                                var P = u._wrapperState.wasMultiple;
                                u._wrapperState.wasMultiple = !!c.multiple;
                                var _ = c.value;
                                _ != null ? Gn(u, !!c.multiple, _, !1) : P !== !!c.multiple && (c.defaultValue != null ? Gn(u, !!c.multiple, c.defaultValue, !0) : Gn(u, !!c.multiple, c.multiple ? [] : "", !1))
                        }
                        u[qr] = c
                    } catch (Q) {
                        Ee(e, e.return, Q)
                    }
                }
                break;
            case 6:
                if (kt(t, e), Dt(e), o & 4) {
                    if (e.stateNode === null) throw Error(s(162));
                    u = e.stateNode, c = e.memoizedProps;
                    try {
                        u.nodeValue = c
                    } catch (Q) {
                        Ee(e, e.return, Q)
                    }
                }
                break;
            case 3:
                if (kt(t, e), Dt(e), o & 4 && i !== null && i.memoizedState.isDehydrated) try {
                    _r(t.containerInfo)
                } catch (Q) {
                    Ee(e, e.return, Q)
                }
                break;
            case 4:
                kt(t, e), Dt(e);
                break;
            case 13:
                kt(t, e), Dt(e), u = e.child, u.flags & 8192 && (c = u.memoizedState !== null, u.stateNode.isHidden = c, !c || u.alternate !== null && u.alternate.memoizedState !== null || (Ha = Ve())), o & 4 && af(e);
                break;
            case 22:
                if (B = i !== null && i.memoizedState !== null, e.mode & 1 ? (Ue = (b = Ue) || B, kt(t, e), Ue = b) : kt(t, e), Dt(e), o & 8192) {
                    if (b = e.memoizedState !== null, (e.stateNode.isHidden = b) && !B && (e.mode & 1) !== 0)
                        for (W = e, B = e.child; B !== null;) {
                            for (D = W = B; W !== null;) {
                                switch (P = W, _ = P.child, P.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ci(4, P, P.return);
                                        break;
                                    case 1:
                                        hr(P, P.return);
                                        var G = P.stateNode;
                                        if (typeof G.componentWillUnmount == "function") {
                                            o = P, i = P.return;
                                            try {
                                                t = o, G.props = t.memoizedProps, G.state = t.memoizedState, G.componentWillUnmount()
                                            } catch (Q) {
                                                Ee(o, i, Q)
                                            }
                                        }
                                        break;
                                    case 5:
                                        hr(P, P.return);
                                        break;
                                    case 22:
                                        if (P.memoizedState !== null) {
                                            df(D);
                                            continue
                                        }
                                }
                                _ !== null ? (_.return = P, W = _) : df(D)
                            }
                            B = B.sibling
                        }
                    e: for (B = null, D = e;;) {
                        if (D.tag === 5) {
                            if (B === null) {
                                B = D;
                                try {
                                    u = D.stateNode, b ? (c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none") : (L = D.stateNode, j = D.memoizedProps.style, m = j != null && j.hasOwnProperty("display") ? j.display : null, L.style.display = _u("display", m))
                                } catch (Q) {
                                    Ee(e, e.return, Q)
                                }
                            }
                        } else if (D.tag === 6) {
                            if (B === null) try {
                                D.stateNode.nodeValue = b ? "" : D.memoizedProps
                            } catch (Q) {
                                Ee(e, e.return, Q)
                            }
                        } else if ((D.tag !== 22 && D.tag !== 23 || D.memoizedState === null || D === e) && D.child !== null) {
                            D.child.return = D, D = D.child;
                            continue
                        }
                        if (D === e) break e;
                        for (; D.sibling === null;) {
                            if (D.return === null || D.return === e) break e;
                            B === D && (B = null), D = D.return
                        }
                        B === D && (B = null), D.sibling.return = D.return, D = D.sibling
                    }
                }
                break;
            case 19:
                kt(t, e), Dt(e), o & 4 && af(e);
                break;
            case 21:
                break;
            default:
                kt(t, e), Dt(e)
        }
    }

    function Dt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var i = e.return; i !== null;) {
                        if (rf(i)) {
                            var o = i;
                            break e
                        }
                        i = i.return
                    }
                    throw Error(s(160))
                }
                switch (o.tag) {
                    case 5:
                        var u = o.stateNode;
                        o.flags & 32 && (br(u, ""), o.flags &= -33);
                        var c = sf(e);
                        Wa(e, c, u);
                        break;
                    case 3:
                    case 4:
                        var m = o.stateNode.containerInfo,
                            L = sf(e);
                        Ua(e, L, m);
                        break;
                    default:
                        throw Error(s(161))
                }
            }
            catch (j) {
                Ee(e, e.return, j)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function E0(e, t, i) {
        W = e, uf(e)
    }

    function uf(e, t, i) {
        for (var o = (e.mode & 1) !== 0; W !== null;) {
            var u = W,
                c = u.child;
            if (u.tag === 22 && o) {
                var m = u.memoizedState !== null || ks;
                if (!m) {
                    var L = u.alternate,
                        j = L !== null && L.memoizedState !== null || Ue;
                    L = ks;
                    var b = Ue;
                    if (ks = m, (Ue = j) && !b)
                        for (W = u; W !== null;) m = W, j = m.child, m.tag === 22 && m.memoizedState !== null ? ff(u) : j !== null ? (j.return = m, W = j) : ff(u);
                    for (; c !== null;) W = c, uf(c), c = c.sibling;
                    W = u, ks = L, Ue = b
                }
                cf(e)
            } else(u.subtreeFlags & 8772) !== 0 && c !== null ? (c.return = u, W = c) : cf(e)
        }
    }

    function cf(e) {
        for (; W !== null;) {
            var t = W;
            if ((t.flags & 8772) !== 0) {
                var i = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ue || bs(5, t);
                            break;
                        case 1:
                            var o = t.stateNode;
                            if (t.flags & 4 && !Ue)
                                if (i === null) o.componentDidMount();
                                else {
                                    var u = t.elementType === t.type ? i.memoizedProps : Vt(t.type, i.memoizedProps);
                                    o.componentDidUpdate(u, i.memoizedState, o.__reactInternalSnapshotBeforeUpdate)
                                }
                            var c = t.updateQueue;
                            c !== null && cd(t, c, o);
                            break;
                        case 3:
                            var m = t.updateQueue;
                            if (m !== null) {
                                if (i = null, t.child !== null) switch (t.child.tag) {
                                    case 5:
                                        i = t.child.stateNode;
                                        break;
                                    case 1:
                                        i = t.child.stateNode
                                }
                                cd(t, m, i)
                            }
                            break;
                        case 5:
                            var L = t.stateNode;
                            if (i === null && t.flags & 4) {
                                i = L;
                                var j = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        j.autoFocus && i.focus();
                                        break;
                                    case "img":
                                        j.src && (i.src = j.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var b = t.alternate;
                                if (b !== null) {
                                    var B = b.memoizedState;
                                    if (B !== null) {
                                        var D = B.dehydrated;
                                        D !== null && _r(D)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(s(163))
                    }
                    Ue || t.flags & 512 && Ia(t)
                } catch (P) {
                    Ee(t, t.return, P)
                }
            }
            if (t === e) {
                W = null;
                break
            }
            if (i = t.sibling, i !== null) {
                i.return = t.return, W = i;
                break
            }
            W = t.return
        }
    }

    function df(e) {
        for (; W !== null;) {
            var t = W;
            if (t === e) {
                W = null;
                break
            }
            var i = t.sibling;
            if (i !== null) {
                i.return = t.return, W = i;
                break
            }
            W = t.return
        }
    }

    function ff(e) {
        for (; W !== null;) {
            var t = W;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var i = t.return;
                        try {
                            bs(4, t)
                        } catch (j) {
                            Ee(t, i, j)
                        }
                        break;
                    case 1:
                        var o = t.stateNode;
                        if (typeof o.componentDidMount == "function") {
                            var u = t.return;
                            try {
                                o.componentDidMount()
                            } catch (j) {
                                Ee(t, u, j)
                            }
                        }
                        var c = t.return;
                        try {
                            Ia(t)
                        } catch (j) {
                            Ee(t, c, j)
                        }
                        break;
                    case 5:
                        var m = t.return;
                        try {
                            Ia(t)
                        } catch (j) {
                            Ee(t, m, j)
                        }
                }
            } catch (j) {
                Ee(t, t.return, j)
            }
            if (t === e) {
                W = null;
                break
            }
            var L = t.sibling;
            if (L !== null) {
                L.return = t.return, W = L;
                break
            }
            W = t.return
        }
    }
    var M0 = Math.ceil,
        Cs = Y.ReactCurrentDispatcher,
        Ga = Y.ReactCurrentOwner,
        wt = Y.ReactCurrentBatchConfig,
        le = 0,
        Be = null,
        Ce = null,
        Oe = 0,
        ft = 0,
        pr = ln(0),
        Pe = 0,
        di = null,
        Rn = 0,
        zs = 0,
        Qa = 0,
        fi = null,
        rt = null,
        Ha = 0,
        mr = 1 / 0,
        Yt = null,
        Ps = !1,
        Ya = null,
        pn = null,
        Rs = !1,
        mn = null,
        Bs = 0,
        hi = 0,
        $a = null,
        Ds = -1,
        Fs = 0;

    function Xe() {
        return (le & 6) !== 0 ? Ve() : Ds !== -1 ? Ds : Ds = Ve()
    }

    function yn(e) {
        return (e.mode & 1) === 0 ? 1 : (le & 2) !== 0 && Oe !== 0 ? Oe & -Oe : c0.transition !== null ? (Fs === 0 && (Fs = ic()), Fs) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : hc(e.type)), e)
    }

    function bt(e, t, i, o) {
        if (50 < hi) throw hi = 0, $a = null, Error(s(185));
        Dr(e, i, o), ((le & 2) === 0 || e !== Be) && (e === Be && ((le & 2) === 0 && (zs |= i), Pe === 4 && gn(e, Oe)), it(e, o), i === 1 && le === 0 && (t.mode & 1) === 0 && (mr = Ve() + 500, fs && cn()))
    }

    function it(e, t) {
        var i = e.callbackNode;
        cy(e, t);
        var o = Qi(e, e === Be ? Oe : 0);
        if (o === 0) i !== null && tc(i), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = o & -o, e.callbackPriority !== t) {
            if (i != null && tc(i), t === 1) e.tag === 0 ? u0(pf.bind(null, e)) : Kc(pf.bind(null, e)), s0(function() {
                (le & 6) === 0 && cn()
            }), i = null;
            else {
                switch (sc(o)) {
                    case 1:
                        i = Ao;
                        break;
                    case 4:
                        i = nc;
                        break;
                    case 16:
                        i = Ii;
                        break;
                    case 536870912:
                        i = rc;
                        break;
                    default:
                        i = Ii
                }
                i = jf(i, hf.bind(null, e))
            }
            e.callbackPriority = t, e.callbackNode = i
        }
    }

    function hf(e, t) {
        if (Ds = -1, Fs = 0, (le & 6) !== 0) throw Error(s(327));
        var i = e.callbackNode;
        if (yr() && e.callbackNode !== i) return null;
        var o = Qi(e, e === Be ? Oe : 0);
        if (o === 0) return null;
        if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = Os(e, o);
        else {
            t = o;
            var u = le;
            le |= 2;
            var c = yf();
            (Be !== e || Oe !== t) && (Yt = null, mr = Ve() + 500, Dn(e, t));
            do try {
                k0();
                break
            } catch (L) {
                mf(e, L)
            }
            while (!0);
            pa(), Cs.current = c, le = u, Ce !== null ? t = 0 : (Be = null, Oe = 0, t = Pe)
        }
        if (t !== 0) {
            if (t === 2 && (u = ko(e), u !== 0 && (o = u, t = Xa(e, u))), t === 1) throw i = di, Dn(e, 0), gn(e, o), it(e, Ve()), i;
            if (t === 6) gn(e, o);
            else {
                if (u = e.current.alternate, (o & 30) === 0 && !V0(u) && (t = Os(e, o), t === 2 && (c = ko(e), c !== 0 && (o = c, t = Xa(e, c))), t === 1)) throw i = di, Dn(e, 0), gn(e, o), it(e, Ve()), i;
                switch (e.finishedWork = u, e.finishedLanes = o, t) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 2:
                        Fn(e, rt, Yt);
                        break;
                    case 3:
                        if (gn(e, o), (o & 130023424) === o && (t = Ha + 500 - Ve(), 10 < t)) {
                            if (Qi(e, 0) !== 0) break;
                            if (u = e.suspendedLanes, (u & o) !== o) {
                                Xe(), e.pingedLanes |= e.suspendedLanes & u;
                                break
                            }
                            e.timeoutHandle = ra(Fn.bind(null, e, rt, Yt), t);
                            break
                        }
                        Fn(e, rt, Yt);
                        break;
                    case 4:
                        if (gn(e, o), (o & 4194240) === o) break;
                        for (t = e.eventTimes, u = -1; 0 < o;) {
                            var m = 31 - Nt(o);
                            c = 1 << m, m = t[m], m > u && (u = m), o &= ~c
                        }
                        if (o = u, o = Ve() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * M0(o / 1960)) - o, 10 < o) {
                            e.timeoutHandle = ra(Fn.bind(null, e, rt, Yt), o);
                            break
                        }
                        Fn(e, rt, Yt);
                        break;
                    case 5:
                        Fn(e, rt, Yt);
                        break;
                    default:
                        throw Error(s(329))
                }
            }
        }
        return it(e, Ve()), e.callbackNode === i ? hf.bind(null, e) : null
    }

    function Xa(e, t) {
        var i = fi;
        return e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256), e = Os(e, t), e !== 2 && (t = rt, rt = i, t !== null && Ka(t)), e
    }

    function Ka(e) {
        rt === null ? rt = e : rt.push.apply(rt, e)
    }

    function V0(e) {
        for (var t = e;;) {
            if (t.flags & 16384) {
                var i = t.updateQueue;
                if (i !== null && (i = i.stores, i !== null))
                    for (var o = 0; o < i.length; o++) {
                        var u = i[o],
                            c = u.getSnapshot;
                        u = u.value;
                        try {
                            if (!Et(c(), u)) return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function gn(e, t) {
        for (t &= ~Qa, t &= ~zs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var i = 31 - Nt(t),
                o = 1 << i;
            e[i] = -1, t &= ~o
        }
    }

    function pf(e) {
        if ((le & 6) !== 0) throw Error(s(327));
        yr();
        var t = Qi(e, 0);
        if ((t & 1) === 0) return it(e, Ve()), null;
        var i = Os(e, t);
        if (e.tag !== 0 && i === 2) {
            var o = ko(e);
            o !== 0 && (t = o, i = Xa(e, o))
        }
        if (i === 1) throw i = di, Dn(e, 0), gn(e, t), it(e, Ve()), i;
        if (i === 6) throw Error(s(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = t, Fn(e, rt, Yt), it(e, Ve()), null
    }

    function qa(e, t) {
        var i = le;
        le |= 1;
        try {
            return e(t)
        } finally {
            le = i, le === 0 && (mr = Ve() + 500, fs && cn())
        }
    }

    function Bn(e) {
        mn !== null && mn.tag === 0 && (le & 6) === 0 && yr();
        var t = le;
        le |= 1;
        var i = wt.transition,
            o = he;
        try {
            if (wt.transition = null, he = 1, e) return e()
        } finally {
            he = o, wt.transition = i, le = t, (le & 6) === 0 && cn()
        }
    }

    function el() {
        ft = pr.current, ve(pr)
    }

    function Dn(e, t) {
        e.finishedWork = null, e.finishedLanes = 0;
        var i = e.timeoutHandle;
        if (i !== -1 && (e.timeoutHandle = -1, i0(i)), Ce !== null)
            for (i = Ce.return; i !== null;) {
                var o = i;
                switch (ua(o), o.tag) {
                    case 1:
                        o = o.type.childContextTypes, o != null && cs();
                        break;
                    case 3:
                        dr(), ve(et), ve(Je), ja();
                        break;
                    case 5:
                        wa(o);
                        break;
                    case 4:
                        dr();
                        break;
                    case 13:
                        ve(Se);
                        break;
                    case 19:
                        ve(Se);
                        break;
                    case 10:
                        ma(o.type._context);
                        break;
                    case 22:
                    case 23:
                        el()
                }
                i = i.return
            }
        if (Be = e, Ce = e = vn(e.current, null), Oe = ft = t, Pe = 0, di = null, Qa = zs = Rn = 0, rt = fi = null, Cn !== null) {
            for (t = 0; t < Cn.length; t++)
                if (i = Cn[t], o = i.interleaved, o !== null) {
                    i.interleaved = null;
                    var u = o.next,
                        c = i.pending;
                    if (c !== null) {
                        var m = c.next;
                        c.next = u, o.next = m
                    }
                    i.pending = o
                }
            Cn = null
        }
        return e
    }

    function mf(e, t) {
        do {
            var i = Ce;
            try {
                if (pa(), js.current = Es, Ss) {
                    for (var o = Te.memoizedState; o !== null;) {
                        var u = o.queue;
                        u !== null && (u.pending = null), o = o.next
                    }
                    Ss = !1
                }
                if (Pn = 0, Re = ze = Te = null, si = !1, oi = 0, Ga.current = null, i === null || i.return === null) {
                    Pe = 1, di = t, Ce = null;
                    break
                }
                e: {
                    var c = e,
                        m = i.return,
                        L = i,
                        j = t;
                    if (t = Oe, L.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
                        var b = j,
                            B = L,
                            D = B.tag;
                        if ((B.mode & 1) === 0 && (D === 0 || D === 11 || D === 15)) {
                            var P = B.alternate;
                            P ? (B.updateQueue = P.updateQueue, B.memoizedState = P.memoizedState, B.lanes = P.lanes) : (B.updateQueue = null, B.memoizedState = null)
                        }
                        var _ = Od(m);
                        if (_ !== null) {
                            _.flags &= -257, Zd(_, m, L, c, t), _.mode & 1 && Fd(c, b, t), t = _, j = b;
                            var G = t.updateQueue;
                            if (G === null) {
                                var Q = new Set;
                                Q.add(j), t.updateQueue = Q
                            } else G.add(j);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                Fd(c, b, t), tl();
                                break e
                            }
                            j = Error(s(426))
                        }
                    } else if (je && L.mode & 1) {
                        var Ae = Od(m);
                        if (Ae !== null) {
                            (Ae.flags & 65536) === 0 && (Ae.flags |= 256), Zd(Ae, m, L, c, t), fa(fr(j, L));
                            break e
                        }
                    }
                    c = j = fr(j, L),
                    Pe !== 4 && (Pe = 2),
                    fi === null ? fi = [c] : fi.push(c),
                    c = m;do {
                        switch (c.tag) {
                            case 3:
                                c.flags |= 65536, t &= -t, c.lanes |= t;
                                var E = Bd(c, j, t);
                                ud(c, E);
                                break e;
                            case 1:
                                L = j;
                                var S = c.type,
                                    M = c.stateNode;
                                if ((c.flags & 128) === 0 && (typeof S.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (pn === null || !pn.has(M)))) {
                                    c.flags |= 65536, t &= -t, c.lanes |= t;
                                    var F = Dd(c, L, t);
                                    ud(c, F);
                                    break e
                                }
                        }
                        c = c.return
                    } while (c !== null)
                }
                vf(i)
            } catch (H) {
                t = H, Ce === i && i !== null && (Ce = i = i.return);
                continue
            }
            break
        } while (!0)
    }

    function yf() {
        var e = Cs.current;
        return Cs.current = Es, e === null ? Es : e
    }

    function tl() {
        (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), Be === null || (Rn & 268435455) === 0 && (zs & 268435455) === 0 || gn(Be, Oe)
    }

    function Os(e, t) {
        var i = le;
        le |= 2;
        var o = yf();
        (Be !== e || Oe !== t) && (Yt = null, Dn(e, t));
        do try {
            A0();
            break
        } catch (u) {
            mf(e, u)
        }
        while (!0);
        if (pa(), le = i, Cs.current = o, Ce !== null) throw Error(s(261));
        return Be = null, Oe = 0, Pe
    }

    function A0() {
        for (; Ce !== null;) gf(Ce)
    }

    function k0() {
        for (; Ce !== null && !ty();) gf(Ce)
    }

    function gf(e) {
        var t = Lf(e.alternate, e, ft);
        e.memoizedProps = e.pendingProps, t === null ? vf(e) : Ce = t, Ga.current = null
    }

    function vf(e) {
        var t = e;
        do {
            var i = t.alternate;
            if (e = t.return, (t.flags & 32768) === 0) {
                if (i = j0(i, t, ft), i !== null) {
                    Ce = i;
                    return
                }
            } else {
                if (i = S0(i, t), i !== null) {
                    i.flags &= 32767, Ce = i;
                    return
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    Pe = 6, Ce = null;
                    return
                }
            }
            if (t = t.sibling, t !== null) {
                Ce = t;
                return
            }
            Ce = t = e
        } while (t !== null);
        Pe === 0 && (Pe = 5)
    }

    function Fn(e, t, i) {
        var o = he,
            u = wt.transition;
        try {
            wt.transition = null, he = 1, b0(e, t, i, o)
        } finally {
            wt.transition = u, he = o
        }
        return null
    }

    function b0(e, t, i, o) {
        do yr(); while (mn !== null);
        if ((le & 6) !== 0) throw Error(s(327));
        i = e.finishedWork;
        var u = e.finishedLanes;
        if (i === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(s(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var c = i.lanes | i.childLanes;
        if (dy(e, c), e === Be && (Ce = Be = null, Oe = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Rs || (Rs = !0, jf(Ii, function() {
                return yr(), null
            })), c = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || c) {
            c = wt.transition, wt.transition = null;
            var m = he;
            he = 1;
            var L = le;
            le |= 4, Ga.current = null, N0(e, i), lf(i, e), Xy(ta), $i = !!ea, ta = ea = null, e.current = i, E0(i), ny(), le = L, he = m, wt.transition = c
        } else e.current = i;
        if (Rs && (Rs = !1, mn = e, Bs = u), c = e.pendingLanes, c === 0 && (pn = null), sy(i.stateNode), it(e, Ve()), t !== null)
            for (o = e.onRecoverableError, i = 0; i < t.length; i++) u = t[i], o(u.value, {
                componentStack: u.stack,
                digest: u.digest
            });
        if (Ps) throw Ps = !1, e = Ya, Ya = null, e;
        return (Bs & 1) !== 0 && e.tag !== 0 && yr(), c = e.pendingLanes, (c & 1) !== 0 ? e === $a ? hi++ : (hi = 0, $a = e) : hi = 0, cn(), null
    }

    function yr() {
        if (mn !== null) {
            var e = sc(Bs),
                t = wt.transition,
                i = he;
            try {
                if (wt.transition = null, he = 16 > e ? 16 : e, mn === null) var o = !1;
                else {
                    if (e = mn, mn = null, Bs = 0, (le & 6) !== 0) throw Error(s(331));
                    var u = le;
                    for (le |= 4, W = e.current; W !== null;) {
                        var c = W,
                            m = c.child;
                        if ((W.flags & 16) !== 0) {
                            var L = c.deletions;
                            if (L !== null) {
                                for (var j = 0; j < L.length; j++) {
                                    var b = L[j];
                                    for (W = b; W !== null;) {
                                        var B = W;
                                        switch (B.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                ci(8, B, c)
                                        }
                                        var D = B.child;
                                        if (D !== null) D.return = B, W = D;
                                        else
                                            for (; W !== null;) {
                                                B = W;
                                                var P = B.sibling,
                                                    _ = B.return;
                                                if (nf(B), B === b) {
                                                    W = null;
                                                    break
                                                }
                                                if (P !== null) {
                                                    P.return = _, W = P;
                                                    break
                                                }
                                                W = _
                                            }
                                    }
                                }
                                var G = c.alternate;
                                if (G !== null) {
                                    var Q = G.child;
                                    if (Q !== null) {
                                        G.child = null;
                                        do {
                                            var Ae = Q.sibling;
                                            Q.sibling = null, Q = Ae
                                        } while (Q !== null)
                                    }
                                }
                                W = c
                            }
                        }
                        if ((c.subtreeFlags & 2064) !== 0 && m !== null) m.return = c, W = m;
                        else e: for (; W !== null;) {
                            if (c = W, (c.flags & 2048) !== 0) switch (c.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ci(9, c, c.return)
                            }
                            var E = c.sibling;
                            if (E !== null) {
                                E.return = c.return, W = E;
                                break e
                            }
                            W = c.return
                        }
                    }
                    var S = e.current;
                    for (W = S; W !== null;) {
                        m = W;
                        var M = m.child;
                        if ((m.subtreeFlags & 2064) !== 0 && M !== null) M.return = m, W = M;
                        else e: for (m = S; W !== null;) {
                            if (L = W, (L.flags & 2048) !== 0) try {
                                switch (L.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        bs(9, L)
                                }
                            } catch (H) {
                                Ee(L, L.return, H)
                            }
                            if (L === m) {
                                W = null;
                                break e
                            }
                            var F = L.sibling;
                            if (F !== null) {
                                F.return = L.return, W = F;
                                break e
                            }
                            W = L.return
                        }
                    }
                    if (le = u, cn(), zt && typeof zt.onPostCommitFiberRoot == "function") try {
                        zt.onPostCommitFiberRoot(Ui, e)
                    } catch {}
                    o = !0
                }
                return o
            } finally {
                he = i, wt.transition = t
            }
        }
        return !1
    }

    function xf(e, t, i) {
        t = fr(i, t), t = Bd(e, t, 1), e = fn(e, t, 1), t = Xe(), e !== null && (Dr(e, 1, t), it(e, t))
    }

    function Ee(e, t, i) {
        if (e.tag === 3) xf(e, e, i);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    xf(t, e, i);
                    break
                } else if (t.tag === 1) {
                    var o = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (pn === null || !pn.has(o))) {
                        e = fr(i, e), e = Dd(t, e, 1), t = fn(t, e, 1), e = Xe(), t !== null && (Dr(t, 1, e), it(t, e));
                        break
                    }
                }
                t = t.return
            }
    }

    function C0(e, t, i) {
        var o = e.pingCache;
        o !== null && o.delete(t), t = Xe(), e.pingedLanes |= e.suspendedLanes & i, Be === e && (Oe & i) === i && (Pe === 4 || Pe === 3 && (Oe & 130023424) === Oe && 500 > Ve() - Ha ? Dn(e, 0) : Qa |= i), it(e, t)
    }

    function wf(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Gi, Gi <<= 1, (Gi & 130023424) === 0 && (Gi = 4194304)));
        var i = Xe();
        e = Gt(e, t), e !== null && (Dr(e, t, i), it(e, i))
    }

    function z0(e) {
        var t = e.memoizedState,
            i = 0;
        t !== null && (i = t.retryLane), wf(e, i)
    }

    function P0(e, t) {
        var i = 0;
        switch (e.tag) {
            case 13:
                var o = e.stateNode,
                    u = e.memoizedState;
                u !== null && (i = u.retryLane);
                break;
            case 19:
                o = e.stateNode;
                break;
            default:
                throw Error(s(314))
        }
        o !== null && o.delete(t), wf(e, i)
    }
    var Lf;
    Lf = function(e, t, i) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || et.current) nt = !0;
            else {
                if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return nt = !1, L0(e, t, i);
                nt = (e.flags & 131072) !== 0
            }
        else nt = !1, je && (t.flags & 1048576) !== 0 && qc(t, ps, t.index);
        switch (t.lanes = 0, t.tag) {
            case 2:
                var o = t.type;
                As(e, t), e = t.pendingProps;
                var u = ir(t, Je.current);
                cr(t, i), u = Na(null, t, o, e, u, i);
                var c = Ea();
                return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tt(o) ? (c = !0, ds(t)) : c = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, va(t), u.updater = Ms, t.stateNode = u, u._reactInternals = t, Ca(t, o, e, i), t = Ba(null, t, o, !0, c, i)) : (t.tag = 0, je && c && la(t), $e(null, t, u, i), t = t.child), t;
            case 16:
                o = t.elementType;
                e: {
                    switch (As(e, t), e = t.pendingProps, u = o._init, o = u(o._payload), t.type = o, u = t.tag = B0(o), e = Vt(o, e), u) {
                        case 0:
                            t = Ra(null, t, o, e, i);
                            break e;
                        case 1:
                            t = Gd(null, t, o, e, i);
                            break e;
                        case 11:
                            t = Jd(null, t, o, e, i);
                            break e;
                        case 14:
                            t = _d(null, t, o, Vt(o.type, e), i);
                            break e
                    }
                    throw Error(s(306, o, ""))
                }
                return t;
            case 0:
                return o = t.type, u = t.pendingProps, u = t.elementType === o ? u : Vt(o, u), Ra(e, t, o, u, i);
            case 1:
                return o = t.type, u = t.pendingProps, u = t.elementType === o ? u : Vt(o, u), Gd(e, t, o, u, i);
            case 3:
                e: {
                    if (Qd(t), e === null) throw Error(s(387));o = t.pendingProps,
                    c = t.memoizedState,
                    u = c.element,
                    ld(e, t),
                    ws(t, o, null, i);
                    var m = t.memoizedState;
                    if (o = m.element, c.isDehydrated)
                        if (c = {
                                element: o,
                                isDehydrated: !1,
                                cache: m.cache,
                                pendingSuspenseBoundaries: m.pendingSuspenseBoundaries,
                                transitions: m.transitions
                            }, t.updateQueue.baseState = c, t.memoizedState = c, t.flags & 256) {
                            u = fr(Error(s(423)), t), t = Hd(e, t, o, i, u);
                            break e
                        } else if (o !== u) {
                        u = fr(Error(s(424)), t), t = Hd(e, t, o, i, u);
                        break e
                    } else
                        for (dt = an(t.stateNode.containerInfo.firstChild), ct = t, je = !0, Mt = null, i = od(t, null, o, i), t.child = i; i;) i.flags = i.flags & -3 | 4096, i = i.sibling;
                    else {
                        if (ar(), o === u) {
                            t = Ht(e, t, i);
                            break e
                        }
                        $e(e, t, o, i)
                    }
                    t = t.child
                }
                return t;
            case 5:
                return dd(t), e === null && da(t), o = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, m = u.children, na(o, u) ? m = null : c !== null && na(o, c) && (t.flags |= 32), Wd(e, t), $e(e, t, m, i), t.child;
            case 6:
                return e === null && da(t), null;
            case 13:
                return Yd(e, t, i);
            case 4:
                return xa(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = lr(t, null, o, i) : $e(e, t, o, i), t.child;
            case 11:
                return o = t.type, u = t.pendingProps, u = t.elementType === o ? u : Vt(o, u), Jd(e, t, o, u, i);
            case 7:
                return $e(e, t, t.pendingProps, i), t.child;
            case 8:
                return $e(e, t, t.pendingProps.children, i), t.child;
            case 12:
                return $e(e, t, t.pendingProps.children, i), t.child;
            case 10:
                e: {
                    if (o = t.type._context, u = t.pendingProps, c = t.memoizedProps, m = u.value, me(gs, o._currentValue), o._currentValue = m, c !== null)
                        if (Et(c.value, m)) {
                            if (c.children === u.children && !et.current) {
                                t = Ht(e, t, i);
                                break e
                            }
                        } else
                            for (c = t.child, c !== null && (c.return = t); c !== null;) {
                                var L = c.dependencies;
                                if (L !== null) {
                                    m = c.child;
                                    for (var j = L.firstContext; j !== null;) {
                                        if (j.context === o) {
                                            if (c.tag === 1) {
                                                j = Qt(-1, i & -i), j.tag = 2;
                                                var b = c.updateQueue;
                                                if (b !== null) {
                                                    b = b.shared;
                                                    var B = b.pending;
                                                    B === null ? j.next = j : (j.next = B.next, B.next = j), b.pending = j
                                                }
                                            }
                                            c.lanes |= i, j = c.alternate, j !== null && (j.lanes |= i), ya(c.return, i, t), L.lanes |= i;
                                            break
                                        }
                                        j = j.next
                                    }
                                } else if (c.tag === 10) m = c.type === t.type ? null : c.child;
                                else if (c.tag === 18) {
                                    if (m = c.return, m === null) throw Error(s(341));
                                    m.lanes |= i, L = m.alternate, L !== null && (L.lanes |= i), ya(m, i, t), m = c.sibling
                                } else m = c.child;
                                if (m !== null) m.return = c;
                                else
                                    for (m = c; m !== null;) {
                                        if (m === t) {
                                            m = null;
                                            break
                                        }
                                        if (c = m.sibling, c !== null) {
                                            c.return = m.return, m = c;
                                            break
                                        }
                                        m = m.return
                                    }
                                c = m
                            }
                    $e(e, t, u.children, i),
                    t = t.child
                }
                return t;
            case 9:
                return u = t.type, o = t.pendingProps.children, cr(t, i), u = vt(u), o = o(u), t.flags |= 1, $e(e, t, o, i), t.child;
            case 14:
                return o = t.type, u = Vt(o, t.pendingProps), u = Vt(o.type, u), _d(e, t, o, u, i);
            case 15:
                return Id(e, t, t.type, t.pendingProps, i);
            case 17:
                return o = t.type, u = t.pendingProps, u = t.elementType === o ? u : Vt(o, u), As(e, t), t.tag = 1, tt(o) ? (e = !0, ds(t)) : e = !1, cr(t, i), Pd(t, o, u), Ca(t, o, u, i), Ba(null, t, o, !0, e, i);
            case 19:
                return Xd(e, t, i);
            case 22:
                return Ud(e, t, i)
        }
        throw Error(s(156, t.tag))
    };

    function jf(e, t) {
        return ec(e, t)
    }

    function R0(e, t, i, o) {
        this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Lt(e, t, i, o) {
        return new R0(e, t, i, o)
    }

    function nl(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function B0(e) {
        if (typeof e == "function") return nl(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === at) return 11;
            if (e === Tt) return 14
        }
        return 2
    }

    function vn(e, t) {
        var i = e.alternate;
        return i === null ? (i = Lt(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i
    }

    function Zs(e, t, i, o, u, c) {
        var m = 2;
        if (o = e, typeof e == "function") nl(e) && (m = 1);
        else if (typeof e == "string") m = 5;
        else e: switch (e) {
            case ae:
                return On(i.children, u, c, t);
            case X:
                m = 8, u |= 8;
                break;
            case ye:
                return e = Lt(12, i, t, u | 2), e.elementType = ye, e.lanes = c, e;
            case He:
                return e = Lt(13, i, t, u), e.elementType = He, e.lanes = c, e;
            case qe:
                return e = Lt(19, i, t, u), e.elementType = qe, e.lanes = c, e;
            case ie:
                return Js(i, u, c, t);
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case we:
                        m = 10;
                        break e;
                    case Ke:
                        m = 9;
                        break e;
                    case at:
                        m = 11;
                        break e;
                    case Tt:
                        m = 14;
                        break e;
                    case Ye:
                        m = 16, o = null;
                        break e
                }
                throw Error(s(130, e == null ? e : typeof e, ""))
        }
        return t = Lt(m, i, t, u), t.elementType = e, t.type = o, t.lanes = c, t
    }

    function On(e, t, i, o) {
        return e = Lt(7, e, o, t), e.lanes = i, e
    }

    function Js(e, t, i, o) {
        return e = Lt(22, e, o, t), e.elementType = ie, e.lanes = i, e.stateNode = {
            isHidden: !1
        }, e
    }

    function rl(e, t, i) {
        return e = Lt(6, e, null, t), e.lanes = i, e
    }

    function il(e, t, i) {
        return t = Lt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function D0(e, t, i, o, u) {
        this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = bo(0), this.expirationTimes = bo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bo(0), this.identifierPrefix = o, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null
    }

    function sl(e, t, i, o, u, c, m, L, j) {
        return e = new D0(e, t, i, L, j), t === 1 ? (t = 1, c === !0 && (t |= 8)) : t = 0, c = Lt(3, null, null, t), e.current = c, c.stateNode = e, c.memoizedState = {
            element: o,
            isDehydrated: i,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, va(c), e
    }

    function F0(e, t, i) {
        var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: ne,
            key: o == null ? null : "" + o,
            children: e,
            containerInfo: t,
            implementation: i
        }
    }

    function Sf(e) {
        if (!e) return un;
        e = e._reactInternals;
        e: {
            if (Mn(e) !== e || e.tag !== 1) throw Error(s(170));
            var t = e;do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1:
                        if (tt(t.type)) {
                            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e
                        }
                }
                t = t.return
            } while (t !== null);
            throw Error(s(171))
        }
        if (e.tag === 1) {
            var i = e.type;
            if (tt(i)) return $c(e, i, t)
        }
        return t
    }

    function Tf(e, t, i, o, u, c, m, L, j) {
        return e = sl(i, o, !0, e, u, c, m, L, j), e.context = Sf(null), i = e.current, o = Xe(), u = yn(i), c = Qt(o, u), c.callback = t ? ? null, fn(i, c, u), e.current.lanes = u, Dr(e, u, o), it(e, o), e
    }

    function _s(e, t, i, o) {
        var u = t.current,
            c = Xe(),
            m = yn(u);
        return i = Sf(i), t.context === null ? t.context = i : t.pendingContext = i, t = Qt(c, m), t.payload = {
            element: e
        }, o = o === void 0 ? null : o, o !== null && (t.callback = o), e = fn(u, t, m), e !== null && (bt(e, u, m, c), xs(e, u, m)), m
    }

    function Is(e) {
        if (e = e.current, !e.child) return null;
        switch (e.child.tag) {
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode
        }
    }

    function Nf(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var i = e.retryLane;
            e.retryLane = i !== 0 && i < t ? i : t
        }
    }

    function ol(e, t) {
        Nf(e, t), (e = e.alternate) && Nf(e, t)
    }

    function O0() {
        return null
    }
    var Ef = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    };

    function al(e) {
        this._internalRoot = e
    }
    Us.prototype.render = al.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        _s(e, t, null, null)
    }, Us.prototype.unmount = al.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Bn(function() {
                _s(null, e, null, null)
            }), t[_t] = null
        }
    };

    function Us(e) {
        this._internalRoot = e
    }
    Us.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = lc();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var i = 0; i < rn.length && t !== 0 && t < rn[i].priority; i++);
            rn.splice(i, 0, e), i === 0 && dc(e)
        }
    };

    function ll(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function Ws(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }

    function Mf() {}

    function Z0(e, t, i, o, u) {
        if (u) {
            if (typeof o == "function") {
                var c = o;
                o = function() {
                    var b = Is(m);
                    c.call(b)
                }
            }
            var m = Tf(t, o, e, 0, null, !1, !1, "", Mf);
            return e._reactRootContainer = m, e[_t] = m.current, Xr(e.nodeType === 8 ? e.parentNode : e), Bn(), m
        }
        for (; u = e.lastChild;) e.removeChild(u);
        if (typeof o == "function") {
            var L = o;
            o = function() {
                var b = Is(j);
                L.call(b)
            }
        }
        var j = sl(e, 0, !1, null, null, !1, !1, "", Mf);
        return e._reactRootContainer = j, e[_t] = j.current, Xr(e.nodeType === 8 ? e.parentNode : e), Bn(function() {
            _s(t, j, i, o)
        }), j
    }

    function Gs(e, t, i, o, u) {
        var c = i._reactRootContainer;
        if (c) {
            var m = c;
            if (typeof u == "function") {
                var L = u;
                u = function() {
                    var j = Is(m);
                    L.call(j)
                }
            }
            _s(t, m, e, u)
        } else m = Z0(i, t, e, u, o);
        return Is(m)
    }
    oc = function(e) {
        switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var i = Br(t.pendingLanes);
                    i !== 0 && (Co(t, i | 1), it(t, Ve()), (le & 6) === 0 && (mr = Ve() + 500, cn()))
                }
                break;
            case 13:
                Bn(function() {
                    var o = Gt(e, 1);
                    if (o !== null) {
                        var u = Xe();
                        bt(o, e, 1, u)
                    }
                }), ol(e, 1)
        }
    }, zo = function(e) {
        if (e.tag === 13) {
            var t = Gt(e, 134217728);
            if (t !== null) {
                var i = Xe();
                bt(t, e, 134217728, i)
            }
            ol(e, 134217728)
        }
    }, ac = function(e) {
        if (e.tag === 13) {
            var t = yn(e),
                i = Gt(e, t);
            if (i !== null) {
                var o = Xe();
                bt(i, e, t, o)
            }
            ol(e, t)
        }
    }, lc = function() {
        return he
    }, uc = function(e, t) {
        var i = he;
        try {
            return he = e, t()
        } finally {
            he = i
        }
    }, No = function(e, t, i) {
        switch (t) {
            case "input":
                if (go(e, i), t = i.name, i.type === "radio" && t != null) {
                    for (i = e; i.parentNode;) i = i.parentNode;
                    for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
                        var o = i[t];
                        if (o !== e && o.form === e.form) {
                            var u = us(o);
                            if (!u) throw Error(s(90));
                            zu(o), go(o, u)
                        }
                    }
                }
                break;
            case "textarea":
                Fu(e, i);
                break;
            case "select":
                t = i.value, t != null && Gn(e, !!i.multiple, t, !1)
        }
    }, Qu = qa, Hu = Bn;
    var J0 = {
            usingClientEntryPoint: !1,
            Events: [ei, nr, us, Wu, Gu, qa]
        },
        pi = {
            findFiberByHostInstance: Vn,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom"
        },
        _0 = {
            bundleType: pi.bundleType,
            version: pi.version,
            rendererPackageName: pi.rendererPackageName,
            rendererConfig: pi.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: Y.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return e = Ku(e), e === null ? null : e.stateNode
            },
            findFiberByHostInstance: pi.findFiberByHostInstance || O0,
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
        };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Qs.isDisabled && Qs.supportsFiber) try {
            Ui = Qs.inject(_0), zt = Qs
        } catch {}
    }
    return st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J0, st.createPortal = function(e, t) {
        var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!ll(t)) throw Error(s(200));
        return F0(e, t, null, i)
    }, st.createRoot = function(e, t) {
        if (!ll(e)) throw Error(s(299));
        var i = !1,
            o = "",
            u = Ef;
        return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = sl(e, 1, !1, null, null, i, !1, o, u), e[_t] = t.current, Xr(e.nodeType === 8 ? e.parentNode : e), new al(t)
    }, st.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
        return e = Ku(t), e = e === null ? null : e.stateNode, e
    }, st.flushSync = function(e) {
        return Bn(e)
    }, st.hydrate = function(e, t, i) {
        if (!Ws(t)) throw Error(s(200));
        return Gs(null, e, t, !0, i)
    }, st.hydrateRoot = function(e, t, i) {
        if (!ll(e)) throw Error(s(405));
        var o = i != null && i.hydratedSources || null,
            u = !1,
            c = "",
            m = Ef;
        if (i != null && (i.unstable_strictMode === !0 && (u = !0), i.identifierPrefix !== void 0 && (c = i.identifierPrefix), i.onRecoverableError !== void 0 && (m = i.onRecoverableError)), t = Tf(t, null, e, 1, i ? ? null, u, !1, c, m), e[_t] = t.current, Xr(e), o)
            for (e = 0; e < o.length; e++) i = o[e], u = i._getVersion, u = u(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, u] : t.mutableSourceEagerHydrationData.push(i, u);
        return new Us(t)
    }, st.render = function(e, t, i) {
        if (!Ws(t)) throw Error(s(200));
        return Gs(null, e, t, !1, i)
    }, st.unmountComponentAtNode = function(e) {
        if (!Ws(e)) throw Error(s(40));
        return e._reactRootContainer ? (Bn(function() {
            Gs(null, null, e, !1, function() {
                e._reactRootContainer = null, e[_t] = null
            })
        }), !0) : !1
    }, st.unstable_batchedUpdates = qa, st.unstable_renderSubtreeIntoContainer = function(e, t, i, o) {
        if (!Ws(i)) throw Error(s(200));
        if (e == null || e._reactInternals === void 0) throw Error(s(38));
        return Gs(e, t, i, !1, o)
    }, st.version = "18.3.1-next-f1338f8080-20240426", st
}
var Rf;

function op() {
    if (Rf) return dl.exports;
    Rf = 1;

    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
        } catch (r) {
            console.error(r)
        }
    }
    return n(), dl.exports = q0(), dl.exports
}
var Bf;

function eg() {
    if (Bf) return Hs;
    Bf = 1;
    var n = op();
    return Hs.createRoot = n.createRoot, Hs.hydrateRoot = n.hydrateRoot, Hs
}
var tg = eg();
op();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ti() {
    return Ti = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var s = arguments[r];
            for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (n[a] = s[a])
        }
        return n
    }, Ti.apply(this, arguments)
}
var Ln;
(function(n) {
    n.Pop = "POP", n.Push = "PUSH", n.Replace = "REPLACE"
})(Ln || (Ln = {}));
const Df = "popstate";

function ng(n) {
    n === void 0 && (n = {});

    function r(a, l) {
        let {
            pathname: f,
            search: d,
            hash: h
        } = a.location;
        return bl("", {
            pathname: f,
            search: d,
            hash: h
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }

    function s(a, l) {
        return typeof l == "string" ? l : to(l)
    }
    return ig(r, s, null, n)
}

function be(n, r) {
    if (n === !1 || n === null || typeof n > "u") throw new Error(r)
}

function ap(n, r) {
    if (!n) {
        typeof console < "u" && console.warn(r);
        try {
            throw new Error(r)
        } catch {}
    }
}

function rg() {
    return Math.random().toString(36).substr(2, 8)
}

function Ff(n, r) {
    return {
        usr: n.state,
        key: n.key,
        idx: r
    }
}

function bl(n, r, s, a) {
    return s === void 0 && (s = null), Ti({
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: ""
    }, typeof r == "string" ? Er(r) : r, {
        state: s,
        key: r && r.key || a || rg()
    })
}

function to(n) {
    let {
        pathname: r = "/",
        search: s = "",
        hash: a = ""
    } = n;
    return s && s !== "?" && (r += s.charAt(0) === "?" ? s : "?" + s), a && a !== "#" && (r += a.charAt(0) === "#" ? a : "#" + a), r
}

function Er(n) {
    let r = {};
    if (n) {
        let s = n.indexOf("#");
        s >= 0 && (r.hash = n.substr(s), n = n.substr(0, s));
        let a = n.indexOf("?");
        a >= 0 && (r.search = n.substr(a), n = n.substr(0, a)), n && (r.pathname = n)
    }
    return r
}

function ig(n, r, s, a) {
    a === void 0 && (a = {});
    let {
        window: l = document.defaultView,
        v5Compat: f = !1
    } = a, d = l.history, h = Ln.Pop, p = null, g = v();
    g == null && (g = 0, d.replaceState(Ti({}, d.state, {
        idx: g
    }), ""));

    function v() {
        return (d.state || {
            idx: null
        }).idx
    }

    function x() {
        h = Ln.Pop;
        let k = v(),
            z = k == null ? null : k - g;
        g = k, p && p({
            action: h,
            location: A.location,
            delta: z
        })
    }

    function w(k, z) {
        h = Ln.Push;
        let O = bl(A.location, k, z);
        g = v() + 1;
        let Z = Ff(O, g),
            Y = A.createHref(O);
        try {
            d.pushState(Z, "", Y)
        } catch (U) {
            if (U instanceof DOMException && U.name === "DataCloneError") throw U;
            l.location.assign(Y)
        }
        f && p && p({
            action: h,
            location: A.location,
            delta: 1
        })
    }

    function T(k, z) {
        h = Ln.Replace;
        let O = bl(A.location, k, z);
        g = v();
        let Z = Ff(O, g),
            Y = A.createHref(O);
        d.replaceState(Z, "", Y), f && p && p({
            action: h,
            location: A.location,
            delta: 0
        })
    }

    function V(k) {
        let z = l.location.origin !== "null" ? l.location.origin : l.location.href,
            O = typeof k == "string" ? k : to(k);
        return O = O.replace(/ $/, "%20"), be(z, "No window.location.(origin|href) available to create URL for href: " + O), new URL(O, z)
    }
    let A = {
        get action() {
            return h
        },
        get location() {
            return n(l, d)
        },
        listen(k) {
            if (p) throw new Error("A history only accepts one active listener");
            return l.addEventListener(Df, x), p = k, () => {
                l.removeEventListener(Df, x), p = null
            }
        },
        createHref(k) {
            return r(l, k)
        },
        createURL: V,
        encodeLocation(k) {
            let z = V(k);
            return {
                pathname: z.pathname,
                search: z.search,
                hash: z.hash
            }
        },
        push: w,
        replace: T,
        go(k) {
            return d.go(k)
        }
    };
    return A
}
var Of;
(function(n) {
    n.data = "data", n.deferred = "deferred", n.redirect = "redirect", n.error = "error"
})(Of || (Of = {}));

function sg(n, r, s) {
    return s === void 0 && (s = "/"), og(n, r, s)
}

function og(n, r, s, a) {
    let l = typeof r == "string" ? Er(r) : r,
        f = Xl(l.pathname || "/", s);
    if (f == null) return null;
    let d = lp(n);
    ag(d);
    let h = null;
    for (let p = 0; h == null && p < d.length; ++p) {
        let g = xg(f);
        h = yg(d[p], g)
    }
    return h
}

function lp(n, r, s, a) {
    r === void 0 && (r = []), s === void 0 && (s = []), a === void 0 && (a = "");
    let l = (f, d, h) => {
        let p = {
            relativePath: h === void 0 ? f.path || "" : h,
            caseSensitive: f.caseSensitive === !0,
            childrenIndex: d,
            route: f
        };
        p.relativePath.startsWith("/") && (be(p.relativePath.startsWith(a), 'Absolute route path "' + p.relativePath + '" nested under path ' + ('"' + a + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), p.relativePath = p.relativePath.slice(a.length));
        let g = jn([a, p.relativePath]),
            v = s.concat(p);
        f.children && f.children.length > 0 && (be(f.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + g + '".')), lp(f.children, r, v, g)), !(f.path == null && !f.index) && r.push({
            path: g,
            score: pg(g, f.index),
            routesMeta: v
        })
    };
    return n.forEach((f, d) => {
        var h;
        if (f.path === "" || !((h = f.path) != null && h.includes("?"))) l(f, d);
        else
            for (let p of up(f.path)) l(f, d, p)
    }), r
}

function up(n) {
    let r = n.split("/");
    if (r.length === 0) return [];
    let [s, ...a] = r, l = s.endsWith("?"), f = s.replace(/\?$/, "");
    if (a.length === 0) return l ? [f, ""] : [f];
    let d = up(a.join("/")),
        h = [];
    return h.push(...d.map(p => p === "" ? f : [f, p].join("/"))), l && h.push(...d), h.map(p => n.startsWith("/") && p === "" ? "/" : p)
}

function ag(n) {
    n.sort((r, s) => r.score !== s.score ? s.score - r.score : mg(r.routesMeta.map(a => a.childrenIndex), s.routesMeta.map(a => a.childrenIndex)))
}
const lg = /^:[\w-]+$/,
    ug = 3,
    cg = 2,
    dg = 1,
    fg = 10,
    hg = -2,
    Zf = n => n === "*";

function pg(n, r) {
    let s = n.split("/"),
        a = s.length;
    return s.some(Zf) && (a += hg), r && (a += cg), s.filter(l => !Zf(l)).reduce((l, f) => l + (lg.test(f) ? ug : f === "" ? dg : fg), a)
}

function mg(n, r) {
    return n.length === r.length && n.slice(0, -1).every((a, l) => a === r[l]) ? n[n.length - 1] - r[r.length - 1] : 0
}

function yg(n, r, s) {
    let {
        routesMeta: a
    } = n, l = {}, f = "/", d = [];
    for (let h = 0; h < a.length; ++h) {
        let p = a[h],
            g = h === a.length - 1,
            v = f === "/" ? r : r.slice(f.length) || "/",
            x = gg({
                path: p.relativePath,
                caseSensitive: p.caseSensitive,
                end: g
            }, v),
            w = p.route;
        if (!x) return null;
        Object.assign(l, x.params), d.push({
            params: l,
            pathname: jn([f, x.pathname]),
            pathnameBase: Sg(jn([f, x.pathnameBase])),
            route: w
        }), x.pathnameBase !== "/" && (f = jn([f, x.pathnameBase]))
    }
    return d
}

function gg(n, r) {
    typeof n == "string" && (n = {
        path: n,
        caseSensitive: !1,
        end: !0
    });
    let [s, a] = vg(n.path, n.caseSensitive, n.end), l = r.match(s);
    if (!l) return null;
    let f = l[0],
        d = f.replace(/(.)\/+$/, "$1"),
        h = l.slice(1);
    return {
        params: a.reduce((g, v, x) => {
            let {
                paramName: w,
                isOptional: T
            } = v;
            if (w === "*") {
                let A = h[x] || "";
                d = f.slice(0, f.length - A.length).replace(/(.)\/+$/, "$1")
            }
            const V = h[x];
            return T && !V ? g[w] = void 0 : g[w] = (V || "").replace(/%2F/g, "/"), g
        }, {}),
        pathname: f,
        pathnameBase: d,
        pattern: n
    }
}

function vg(n, r, s) {
    r === void 0 && (r = !1), s === void 0 && (s = !0), ap(n === "*" || !n.endsWith("*") || n.endsWith("/*"), 'Route path "' + n + '" will be treated as if it were ' + ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'));
    let a = [],
        l = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, h, p) => (a.push({
            paramName: h,
            isOptional: p != null
        }), p ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return n.endsWith("*") ? (a.push({
        paramName: "*"
    }), l += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? l += "\\/*$" : n !== "" && n !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, r ? void 0 : "i"), a]
}

function xg(n) {
    try {
        return n.split("/").map(r => decodeURIComponent(r).replace(/\//g, "%2F")).join("/")
    } catch (r) {
        return ap(!1, 'The URL path "' + n + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + r + ").")), n
    }
}

function Xl(n, r) {
    if (r === "/") return n;
    if (!n.toLowerCase().startsWith(r.toLowerCase())) return null;
    let s = r.endsWith("/") ? r.length - 1 : r.length,
        a = n.charAt(s);
    return a && a !== "/" ? null : n.slice(s) || "/"
}

function wg(n, r) {
    r === void 0 && (r = "/");
    let {
        pathname: s,
        search: a = "",
        hash: l = ""
    } = typeof n == "string" ? Er(n) : n;
    return {
        pathname: s ? s.startsWith("/") ? s : Lg(s, r) : r,
        search: Tg(a),
        hash: Ng(l)
    }
}

function Lg(n, r) {
    let s = r.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(l => {
        l === ".." ? s.length > 1 && s.pop() : l !== "." && s.push(l)
    }), s.length > 1 ? s.join("/") : "/"
}

function pl(n, r, s, a) {
    return "Cannot include a '" + n + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(a) + "].  Please separate it out to the ") + ("`to." + s + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function jg(n) {
    return n.filter((r, s) => s === 0 || r.route.path && r.route.path.length > 0)
}

function Kl(n, r) {
    let s = jg(n);
    return r ? s.map((a, l) => l === s.length - 1 ? a.pathname : a.pathnameBase) : s.map(a => a.pathnameBase)
}

function ql(n, r, s, a) {
    a === void 0 && (a = !1);
    let l;
    typeof n == "string" ? l = Er(n) : (l = Ti({}, n), be(!l.pathname || !l.pathname.includes("?"), pl("?", "pathname", "search", l)), be(!l.pathname || !l.pathname.includes("#"), pl("#", "pathname", "hash", l)), be(!l.search || !l.search.includes("#"), pl("#", "search", "hash", l)));
    let f = n === "" || l.pathname === "",
        d = f ? "/" : l.pathname,
        h;
    if (d == null) h = s;
    else {
        let x = r.length - 1;
        if (!a && d.startsWith("..")) {
            let w = d.split("/");
            for (; w[0] === "..";) w.shift(), x -= 1;
            l.pathname = w.join("/")
        }
        h = x >= 0 ? r[x] : "/"
    }
    let p = wg(l, h),
        g = d && d !== "/" && d.endsWith("/"),
        v = (f || d === ".") && s.endsWith("/");
    return !p.pathname.endsWith("/") && (g || v) && (p.pathname += "/"), p
}
const jn = n => n.join("/").replace(/\/\/+/g, "/"),
    Sg = n => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Tg = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n,
    Ng = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;

function Eg(n) {
    return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n
}
const cp = ["post", "put", "patch", "delete"];
new Set(cp);
const Mg = ["get", ...cp];
new Set(Mg);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ni() {
    return Ni = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var s = arguments[r];
            for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (n[a] = s[a])
        }
        return n
    }, Ni.apply(this, arguments)
}
const eu = C.createContext(null),
    Vg = C.createContext(null),
    Nn = C.createContext(null),
    uo = C.createContext(null),
    qt = C.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    dp = C.createContext(null);

function Ag(n, r) {
    let {
        relative: s
    } = r === void 0 ? {} : r;
    Mr() || be(!1);
    let {
        basename: a,
        navigator: l
    } = C.useContext(Nn), {
        hash: f,
        pathname: d,
        search: h
    } = hp(n, {
        relative: s
    }), p = d;
    return a !== "/" && (p = d === "/" ? a : jn([a, d])), l.createHref({
        pathname: p,
        search: h,
        hash: f
    })
}

function Mr() {
    return C.useContext(uo) != null
}

function bi() {
    return Mr() || be(!1), C.useContext(uo).location
}

function fp(n) {
    C.useContext(Nn).static || C.useLayoutEffect(n)
}

function Ci() {
    let {
        isDataRoute: n
    } = C.useContext(qt);
    return n ? Ig() : kg()
}

function kg() {
    Mr() || be(!1);
    let n = C.useContext(eu),
        {
            basename: r,
            future: s,
            navigator: a
        } = C.useContext(Nn),
        {
            matches: l
        } = C.useContext(qt),
        {
            pathname: f
        } = bi(),
        d = JSON.stringify(Kl(l, s.v7_relativeSplatPath)),
        h = C.useRef(!1);
    return fp(() => {
        h.current = !0
    }), C.useCallback(function(g, v) {
        if (v === void 0 && (v = {}), !h.current) return;
        if (typeof g == "number") {
            a.go(g);
            return
        }
        let x = ql(g, JSON.parse(d), f, v.relative === "path");
        n == null && r !== "/" && (x.pathname = x.pathname === "/" ? r : jn([r, x.pathname])), (v.replace ? a.replace : a.push)(x, v.state, v)
    }, [r, a, d, f, n])
}

function bg() {
    let {
        matches: n
    } = C.useContext(qt), r = n[n.length - 1];
    return r ? r.params : {}
}

function hp(n, r) {
    let {
        relative: s
    } = r === void 0 ? {} : r, {
        future: a
    } = C.useContext(Nn), {
        matches: l
    } = C.useContext(qt), {
        pathname: f
    } = bi(), d = JSON.stringify(Kl(l, a.v7_relativeSplatPath));
    return C.useMemo(() => ql(n, JSON.parse(d), f, s === "path"), [n, d, f, s])
}

function Cg(n, r) {
    return zg(n, r)
}

function zg(n, r, s, a) {
    Mr() || be(!1);
    let {
        navigator: l
    } = C.useContext(Nn), {
        matches: f
    } = C.useContext(qt), d = f[f.length - 1], h = d ? d.params : {};
    d && d.pathname;
    let p = d ? d.pathnameBase : "/";
    d && d.route;
    let g = bi(),
        v;
    if (r) {
        var x;
        let k = typeof r == "string" ? Er(r) : r;
        p === "/" || (x = k.pathname) != null && x.startsWith(p) || be(!1), v = k
    } else v = g;
    let w = v.pathname || "/",
        T = w;
    if (p !== "/") {
        let k = p.replace(/^\//, "").split("/");
        T = "/" + w.replace(/^\//, "").split("/").slice(k.length).join("/")
    }
    let V = sg(n, {
            pathname: T
        }),
        A = Fg(V && V.map(k => Object.assign({}, k, {
            params: Object.assign({}, h, k.params),
            pathname: jn([p, l.encodeLocation ? l.encodeLocation(k.pathname).pathname : k.pathname]),
            pathnameBase: k.pathnameBase === "/" ? p : jn([p, l.encodeLocation ? l.encodeLocation(k.pathnameBase).pathname : k.pathnameBase])
        })), f, s, a);
    return r && A ? C.createElement(uo.Provider, {
        value: {
            location: Ni({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, v),
            navigationType: Ln.Pop
        }
    }, A) : A
}

function Pg() {
    let n = _g(),
        r = Eg(n) ? n.status + " " + n.statusText : n instanceof Error ? n.message : JSON.stringify(n),
        s = n instanceof Error ? n.stack : null,
        l = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, r), s ? C.createElement("pre", {
        style: l
    }, s) : null, null)
}
const Rg = C.createElement(Pg, null);
class Bg extends C.Component {
    constructor(r) {
        super(r), this.state = {
            location: r.location,
            revalidation: r.revalidation,
            error: r.error
        }
    }
    static getDerivedStateFromError(r) {
        return {
            error: r
        }
    }
    static getDerivedStateFromProps(r, s) {
        return s.location !== r.location || s.revalidation !== "idle" && r.revalidation === "idle" ? {
            error: r.error,
            location: r.location,
            revalidation: r.revalidation
        } : {
            error: r.error !== void 0 ? r.error : s.error,
            location: s.location,
            revalidation: r.revalidation || s.revalidation
        }
    }
    componentDidCatch(r, s) {
        console.error("React Router caught the following error during render", r, s)
    }
    render() {
        return this.state.error !== void 0 ? C.createElement(qt.Provider, {
            value: this.props.routeContext
        }, C.createElement(dp.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function Dg(n) {
    let {
        routeContext: r,
        match: s,
        children: a
    } = n, l = C.useContext(eu);
    return l && l.static && l.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = s.route.id), C.createElement(qt.Provider, {
        value: r
    }, a)
}

function Fg(n, r, s, a) {
    var l;
    if (r === void 0 && (r = []), s === void 0 && (s = null), a === void 0 && (a = null), n == null) {
        var f;
        if (!s) return null;
        if (s.errors) n = s.matches;
        else if ((f = a) != null && f.v7_partialHydration && r.length === 0 && !s.initialized && s.matches.length > 0) n = s.matches;
        else return null
    }
    let d = n,
        h = (l = s) == null ? void 0 : l.errors;
    if (h != null) {
        let v = d.findIndex(x => x.route.id && h ? .[x.route.id] !== void 0);
        v >= 0 || be(!1), d = d.slice(0, Math.min(d.length, v + 1))
    }
    let p = !1,
        g = -1;
    if (s && a && a.v7_partialHydration)
        for (let v = 0; v < d.length; v++) {
            let x = d[v];
            if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (g = v), x.route.id) {
                let {
                    loaderData: w,
                    errors: T
                } = s, V = x.route.loader && w[x.route.id] === void 0 && (!T || T[x.route.id] === void 0);
                if (x.route.lazy || V) {
                    p = !0, g >= 0 ? d = d.slice(0, g + 1) : d = [d[0]];
                    break
                }
            }
        }
    return d.reduceRight((v, x, w) => {
        let T, V = !1,
            A = null,
            k = null;
        s && (T = h && x.route.id ? h[x.route.id] : void 0, A = x.route.errorElement || Rg, p && (g < 0 && w === 0 ? (Ug("route-fallback"), V = !0, k = null) : g === w && (V = !0, k = x.route.hydrateFallbackElement || null)));
        let z = r.concat(d.slice(0, w + 1)),
            O = () => {
                let Z;
                return T ? Z = A : V ? Z = k : x.route.Component ? Z = C.createElement(x.route.Component, null) : x.route.element ? Z = x.route.element : Z = v, C.createElement(Dg, {
                    match: x,
                    routeContext: {
                        outlet: v,
                        matches: z,
                        isDataRoute: s != null
                    },
                    children: Z
                })
            };
        return s && (x.route.ErrorBoundary || x.route.errorElement || w === 0) ? C.createElement(Bg, {
            location: s.location,
            revalidation: s.revalidation,
            component: A,
            error: T,
            children: O(),
            routeContext: {
                outlet: null,
                matches: z,
                isDataRoute: !0
            }
        }) : O()
    }, null)
}
var pp = function(n) {
        return n.UseBlocker = "useBlocker", n.UseRevalidator = "useRevalidator", n.UseNavigateStable = "useNavigate", n
    }(pp || {}),
    mp = function(n) {
        return n.UseBlocker = "useBlocker", n.UseLoaderData = "useLoaderData", n.UseActionData = "useActionData", n.UseRouteError = "useRouteError", n.UseNavigation = "useNavigation", n.UseRouteLoaderData = "useRouteLoaderData", n.UseMatches = "useMatches", n.UseRevalidator = "useRevalidator", n.UseNavigateStable = "useNavigate", n.UseRouteId = "useRouteId", n
    }(mp || {});

function Og(n) {
    let r = C.useContext(eu);
    return r || be(!1), r
}

function Zg(n) {
    let r = C.useContext(Vg);
    return r || be(!1), r
}

function Jg(n) {
    let r = C.useContext(qt);
    return r || be(!1), r
}

function yp(n) {
    let r = Jg(),
        s = r.matches[r.matches.length - 1];
    return s.route.id || be(!1), s.route.id
}

function _g() {
    var n;
    let r = C.useContext(dp),
        s = Zg(),
        a = yp();
    return r !== void 0 ? r : (n = s.errors) == null ? void 0 : n[a]
}

function Ig() {
    let {
        router: n
    } = Og(pp.UseNavigateStable), r = yp(mp.UseNavigateStable), s = C.useRef(!1);
    return fp(() => {
        s.current = !0
    }), C.useCallback(function(l, f) {
        f === void 0 && (f = {}), s.current && (typeof l == "number" ? n.navigate(l) : n.navigate(l, Ni({
            fromRouteId: r
        }, f)))
    }, [n, r])
}
const Jf = {};

function Ug(n, r, s) {
    Jf[n] || (Jf[n] = !0)
}

function Wg(n, r) {
    n ? .v7_startTransition, n ? .v7_relativeSplatPath
}

function Gg(n) {
    let {
        to: r,
        replace: s,
        state: a,
        relative: l
    } = n;
    Mr() || be(!1);
    let {
        future: f,
        static: d
    } = C.useContext(Nn), {
        matches: h
    } = C.useContext(qt), {
        pathname: p
    } = bi(), g = Ci(), v = ql(r, Kl(h, f.v7_relativeSplatPath), p, l === "path"), x = JSON.stringify(v);
    return C.useEffect(() => g(JSON.parse(x), {
        replace: s,
        state: a,
        relative: l
    }), [g, x, l, s, a]), null
}

function Ft(n) {
    be(!1)
}

function Qg(n) {
    let {
        basename: r = "/",
        children: s = null,
        location: a,
        navigationType: l = Ln.Pop,
        navigator: f,
        static: d = !1,
        future: h
    } = n;
    Mr() && be(!1);
    let p = r.replace(/^\/*/, "/"),
        g = C.useMemo(() => ({
            basename: p,
            navigator: f,
            static: d,
            future: Ni({
                v7_relativeSplatPath: !1
            }, h)
        }), [p, h, f, d]);
    typeof a == "string" && (a = Er(a));
    let {
        pathname: v = "/",
        search: x = "",
        hash: w = "",
        state: T = null,
        key: V = "default"
    } = a, A = C.useMemo(() => {
        let k = Xl(v, p);
        return k == null ? null : {
            location: {
                pathname: k,
                search: x,
                hash: w,
                state: T,
                key: V
            },
            navigationType: l
        }
    }, [p, v, x, w, T, V, l]);
    return A == null ? null : C.createElement(Nn.Provider, {
        value: g
    }, C.createElement(uo.Provider, {
        children: s,
        value: A
    }))
}

function Hg(n) {
    let {
        children: r,
        location: s
    } = n;
    return Cg(Cl(r), s)
}
new Promise(() => {});

function Cl(n, r) {
    r === void 0 && (r = []);
    let s = [];
    return C.Children.forEach(n, (a, l) => {
        if (!C.isValidElement(a)) return;
        let f = [...r, l];
        if (a.type === C.Fragment) {
            s.push.apply(s, Cl(a.props.children, f));
            return
        }
        a.type !== Ft && be(!1), !a.props.index || !a.props.children || be(!1);
        let d = {
            id: a.props.id || f.join("-"),
            caseSensitive: a.props.caseSensitive,
            element: a.props.element,
            Component: a.props.Component,
            index: a.props.index,
            path: a.props.path,
            loader: a.props.loader,
            action: a.props.action,
            errorElement: a.props.errorElement,
            ErrorBoundary: a.props.ErrorBoundary,
            hasErrorBoundary: a.props.ErrorBoundary != null || a.props.errorElement != null,
            shouldRevalidate: a.props.shouldRevalidate,
            handle: a.props.handle,
            lazy: a.props.lazy
        };
        a.props.children && (d.children = Cl(a.props.children, f)), s.push(d)
    }), s
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function zl() {
    return zl = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
            var s = arguments[r];
            for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (n[a] = s[a])
        }
        return n
    }, zl.apply(this, arguments)
}

function Yg(n, r) {
    if (n == null) return {};
    var s = {},
        a = Object.keys(n),
        l, f;
    for (f = 0; f < a.length; f++) l = a[f], !(r.indexOf(l) >= 0) && (s[l] = n[l]);
    return s
}

function $g(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}

function Xg(n, r) {
    return n.button === 0 && (!r || r === "_self") && !$g(n)
}
const Kg = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
    qg = "6";
try {
    window.__reactRouterVersion = qg
} catch {}
const ev = "startTransition",
    _f = $0[ev];

function tv(n) {
    let {
        basename: r,
        children: s,
        future: a,
        window: l
    } = n, f = C.useRef();
    f.current == null && (f.current = ng({
        window: l,
        v5Compat: !0
    }));
    let d = f.current,
        [h, p] = C.useState({
            action: d.action,
            location: d.location
        }),
        {
            v7_startTransition: g
        } = a || {},
        v = C.useCallback(x => {
            g && _f ? _f(() => p(x)) : p(x)
        }, [p, g]);
    return C.useLayoutEffect(() => d.listen(v), [d, v]), C.useEffect(() => Wg(a), [a]), C.createElement(Qg, {
        basename: r,
        children: s,
        location: h.location,
        navigationType: h.action,
        navigator: d,
        future: a
    })
}
const nv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    rv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Ge = C.forwardRef(function(r, s) {
        let {
            onClick: a,
            relative: l,
            reloadDocument: f,
            replace: d,
            state: h,
            target: p,
            to: g,
            preventScrollReset: v,
            viewTransition: x
        } = r, w = Yg(r, Kg), {
            basename: T
        } = C.useContext(Nn), V, A = !1;
        if (typeof g == "string" && rv.test(g) && (V = g, nv)) try {
            let Z = new URL(window.location.href),
                Y = g.startsWith("//") ? new URL(Z.protocol + g) : new URL(g),
                U = Xl(Y.pathname, T);
            Y.origin === Z.origin && U != null ? g = U + Y.search + Y.hash : A = !0
        } catch {}
        let k = Ag(g, {
                relative: l
            }),
            z = iv(g, {
                replace: d,
                state: h,
                target: p,
                preventScrollReset: v,
                relative: l,
                viewTransition: x
            });

        function O(Z) {
            a && a(Z), Z.defaultPrevented || z(Z)
        }
        return C.createElement("a", zl({}, w, {
            href: V || k,
            onClick: A || f ? a : O,
            ref: s,
            target: p
        }))
    });
var If;
(function(n) {
    n.UseScrollRestoration = "useScrollRestoration", n.UseSubmit = "useSubmit", n.UseSubmitFetcher = "useSubmitFetcher", n.UseFetcher = "useFetcher", n.useViewTransitionState = "useViewTransitionState"
})(If || (If = {}));
var Uf;
(function(n) {
    n.UseFetcher = "useFetcher", n.UseFetchers = "useFetchers", n.UseScrollRestoration = "useScrollRestoration"
})(Uf || (Uf = {}));

function iv(n, r) {
    let {
        target: s,
        replace: a,
        state: l,
        preventScrollReset: f,
        relative: d,
        viewTransition: h
    } = r === void 0 ? {} : r, p = Ci(), g = bi(), v = hp(n, {
        relative: d
    });
    return C.useCallback(x => {
        if (Xg(x, s)) {
            x.preventDefault();
            let w = a !== void 0 ? a : to(g) === to(v);
            p(n, {
                replace: w,
                state: l,
                preventScrollReset: f,
                relative: d,
                viewTransition: h
            })
        }
    }, [g, p, v, a, l, s, n, f, d, h])
}
const sv = {
        bn: {
            home: "হোম",
            services: "সেবা",
            insurance: "বীমা",
            locations: "অবস্থান",
            search: "অনুসন্ধান",
            profile: "প্রোফাইল",
            buySell: "কিনুন ও বিক্রি করুন",
            welcome: "GariSeba-তে স্বাগতম",
            subtitle: "বাংলাদেশের সবচেয়ে বিশ্বস্ত যানবাহন সেবা প্ল্যাটফর্ম",
            searchPlaceholder: "গাড়ির নম্বর লিখুন...",
            searchButton: "অনুসন্ধান করুন",
            vehicleRegistration: "গাড়ির নিবন্ধন চেক",
            trafficFines: "ট্রাফিক জরিমানা",
            serviceHistory: "সার্ভিস ইতিহাস",
            insuranceCheck: "বীমা চেক",
            insuranceRenewal: "নবায়ন",
            insuranceClaims: "দাবি",
            serviceCenters: "সার্ভিস সেন্টার",
            trafficOffices: "ট্রাফিক অফিস",
            insurancePoints: "বীমা পয়েন্ট",
            buyCar: "গাড়ি কিনুন",
            sellCar: "গাড়ি বিক্রি করুন",
            featuredCars: "বিশেষ গাড়ি",
            allCars: "সব গাড়ি",
            price: "মূল্য",
            condition: "অবস্থা",
            mileage: "মাইলেজ",
            fuelType: "জ্বালানি ধরন",
            transmission: "ট্রান্সমিশন",
            year: "মডেল বছর",
            contactSeller: "বিক্রেতার সাথে যোগাযোগ করুন",
            viewDetails: "বিস্তারিত দেখুন",
            loading: "লোড হচ্ছে...",
            error: "ত্রুটি ঘটেছে",
            noResults: "কোন ফলাফল পাওয়া যায়নি",
            about: "আমাদের সম্পর্কে",
            contact: "যোগাযোগ",
            privacy: "গোপনীয়তা নীতি",
            terms: "শর্তাবলী"
        },
        en: {
            home: "Home",
            services: "Services",
            insurance: "Insurance",
            locations: "Locations",
            search: "Search",
            profile: "Profile",
            buySell: "Buy & Sell",
            welcome: "Welcome to GariSeba",
            subtitle: "Bangladesh's most trusted vehicle services platform",
            searchPlaceholder: "Enter vehicle number...",
            searchButton: "Search",
            vehicleRegistration: "Vehicle Registration Check",
            trafficFines: "Traffic Fines",
            serviceHistory: "Service History",
            insuranceCheck: "Insurance Check",
            insuranceRenewal: "Renewal",
            insuranceClaims: "Claims",
            serviceCenters: "Service Centers",
            trafficOffices: "Traffic Offices",
            insurancePoints: "Insurance Points",
            buyCar: "Buy Car",
            sellCar: "Sell Car",
            featuredCars: "Featured Cars",
            allCars: "All Cars",
            price: "Price",
            condition: "Condition",
            mileage: "Mileage",
            fuelType: "Fuel Type",
            transmission: "Transmission",
            year: "Model Year",
            contactSeller: "Contact Seller",
            viewDetails: "View Details",
            loading: "Loading...",
            error: "An error occurred",
            noResults: "No results found",
            about: "About Us",
            contact: "Contact",
            privacy: "Privacy Policy",
            terms: "Terms"
        }
    },
    gp = C.createContext(void 0);

function ov({
    children: n
}) {
    const [r, s] = C.useState("bn"), a = l => sv[r][l] || l;
    return y.jsx(gp.Provider, {
        value: {
            language: r,
            setLanguage: s,
            t: a
        },
        "data-yw": "c3JjL2NvbnRleHRzL0xhbmd1YWdlQ29udGV4dC50c3hAMTM0OjQ",
        children: n
    })
}

function Jt() {
    const n = C.useContext(gp);
    if (n === void 0) throw new Error("useLanguage must be used within a LanguageProvider");
    return n
}
const vp = C.createContext(void 0),
    ml = "http://localhost:5000/api",
    av = ({
        children: n
    }) => {
        const [r, s] = C.useState(null), [a, l] = C.useState(localStorage.getItem("token")), [f, d] = C.useState(!0);
        C.useEffect(() => {
            (async () => {
                const T = localStorage.getItem("token");
                T && (l(T), await h(T)), d(!1)
            })()
        }, []);
        const h = async w => {
                try {
                    const T = await fetch(`${ml}/auth/me`, {
                        headers: {
                            Authorization: `Bearer ${w}`
                        }
                    });
                    if (T.ok) {
                        const V = await T.json();
                        s(V.user)
                    } else v()
                } catch (T) {
                    console.error("Error fetching user:", T), v()
                }
            },
            p = async (w, T) => {
                try {
                    const V = await fetch(`${ml}/auth/login`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: w,
                                password: T
                            })
                        }),
                        A = await V.json();
                    if (!V.ok) throw new Error(A.message || "Login failed");
                    localStorage.setItem("token", A.token), l(A.token), s(A.user)
                } catch (V) {
                    throw V
                }
            },
            g = async w => {
                try {
                    const T = await fetch(`${ml}/auth/register`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(w)
                        }),
                        V = await T.json();
                    if (!T.ok) throw new Error(V.message || "Registration failed");
                    localStorage.setItem("token", V.token), l(V.token), s(V.user)
                } catch (T) {
                    throw T
                }
            },
            v = () => {
                localStorage.removeItem("token"), l(null), s(null)
            },
            x = {
                user: r,
                token: a,
                login: p,
                register: g,
                logout: v,
                loading: f
            };
        return y.jsx(vp.Provider, {
            value: x,
            "data-yw": "c3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeEAxMzU6NA",
            children: n
        })
    },
    zi = () => {
        const n = C.useContext(vp);
        if (n === void 0) throw new Error("useAuth must be used within an AuthProvider");
        return n
    };

function Wf() {
    const {
        language: n,
        setLanguage: r
    } = Jt();
    return y.jsxs("button", {
        onClick: () => r(n === "bn" ? "en" : "bn"),
        className: "flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95",
        "aria-label": `Switch to ${n==="bn"?"English":"Bengali"}`,
        "data-yw": "c3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VUb2dnbGUudHN4QDg6NA",
        children: [y.jsx("span", {
            className: "text-sm font-medium",
            "data-yw": "c3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VUb2dnbGUudHN4QDEzOjY",
            children: n === "bn" ? "🇧🇦" : "🇺🇸"
        }), y.jsx("span", {
            className: "text-xs uppercase tracking-wider",
            "data-yw": "c3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VUb2dnbGUudHN4QDE2OjY",
            children: n === "bn" ? "BN" : "EN"
        }), y.jsx("div", {
            className: `w-8 h-4 rounded-full bg-gray-600 relative transition-colors duration-300 ${n==="en"?"bg-green-500":"bg-blue-500"}`,
            "data-yw": "c3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VUb2dnbGUudHN4QDE5OjY",
            children: y.jsx("div", {
                className: `absolute top-1 w-2 h-2 bg-white rounded-full transition-transform duration-300 ${n==="en"?"translate-x-5":"translate-x-1"}`,
                "data-yw": "c3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VUb2dnbGUudHN4QDIyOjg"
            })
        })]
    })
}
const ot = ({
        children: n,
        padding: r = 100,
        disabled: s = !1,
        magnetStrength: a = 2,
        activeTransition: l = "transform 0.3s ease-out",
        inactiveTransition: f = "transform 0.5s ease-in-out",
        wrapperClassName: d = "",
        innerClassName: h = "",
        ...p
    }) => {
        const [g, v] = C.useState(!1), [x, w] = C.useState({
            x: 0,
            y: 0
        }), T = C.useRef(null);
        C.useEffect(() => {
            if (s) {
                w({
                    x: 0,
                    y: 0
                });
                return
            }
            const A = k => {
                if (!T.current) return;
                const {
                    left: z,
                    top: O,
                    width: Z,
                    height: Y
                } = T.current.getBoundingClientRect(), U = z + Z / 2, ne = O + Y / 2, ae = Math.abs(U - k.clientX), X = Math.abs(ne - k.clientY);
                if (ae < Z / 2 + r && X < Y / 2 + r) {
                    v(!0);
                    const ye = (k.clientX - U) / a,
                        we = (k.clientY - ne) / a;
                    w({
                        x: ye,
                        y: we
                    })
                } else v(!1), w({
                    x: 0,
                    y: 0
                })
            };
            return window.addEventListener("mousemove", A), () => {
                window.removeEventListener("mousemove", A)
            }
        }, [r, s, a]);
        const V = g ? l : f;
        return y.jsx("div", {
            ref: T,
            className: d,
            style: {
                position: "relative",
                display: "inline-block"
            },
            ...p,
            "data-yw": "c3JjL2NvbXBvbmVudHMvTWFnbmV0LnRzeEA2Nzo0",
            children: y.jsx("div", {
                className: h,
                style: {
                    transform: `translate3d(${x.x}px, ${x.y}px, 0)`,
                    transition: V,
                    willChange: "transform"
                },
                "data-yw": "c3JjL2NvbXBvbmVudHMvTWFnbmV0LnRzeEA3Mzo2",
                children: n
            })
        })
    },
    lv = () => {
        const {
            language: n
        } = Jt(), {
            user: r,
            logout: s
        } = zi(), a = Ci(), [l, f] = C.useState(!1), h = {
            bn: {
                home: "হোম",
                services: "সেবাসমূহ",
                buySell: "কিনুন/বিক্রি করুন",
                insurance: "ইন্স্যুরেন্স",
                locations: "অবস্থান",
                login: "লগইন",
                register: "নিবন্ধন",
                profile: "প্রোফাইল",
                logout: "লগআউট"
            },
            en: {
                home: "Home",
                services: "Services",
                buySell: "Buy/Sell",
                insurance: "Insurance",
                locations: "Locations",
                login: "Login",
                register: "Register",
                profile: "Profile",
                logout: "Logout"
            }
        }[n], p = () => {
            s(), a("/")
        }, g = [{
            name: h.home,
            href: "/"
        }, {
            name: h.services,
            href: "/services"
        }, {
            name: h.buySell,
            href: "/buy-sell"
        }, {
            name: h.insurance,
            href: "/insurance"
        }, {
            name: h.locations,
            href: "/locations"
        }];
        return y.jsxs("nav", {
            className: "bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-200",
            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hANTU6NA",
            children: [y.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hANTY6Ng",
                children: y.jsxs("div", {
                    className: "flex justify-between h-16",
                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hANTc6OA",
                    children: [y.jsx("div", {
                        className: "flex items-center",
                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hANTg6MTA",
                        children: y.jsx(ot, {
                            magnetStrength: 2,
                            padding: 30,
                            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hANTk6MTI",
                            children: y.jsx(Ge, {
                                to: "/",
                                className: "flex-shrink-0 flex items-center group transition-all duration-300",
                                "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hANjA6MTQ",
                                children: y.jsx("span", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300",
                                    style: {
                                        backgroundSize: "200% 200%",
                                        animation: "gradientShift 3s ease-in-out infinite"
                                    },
                                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hANjQ6MTY",
                                    "data-yw-t": !0,
                                    children: "GariSeba"
                                })
                            })
                        })
                    }), y.jsxs("div", {
                        className: "hidden md:flex items-center space-x-8",
                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hANzg6MTA",
                        children: [g.map((v, x) => y.jsx(ot, {
                            magnetStrength: 1.5,
                            padding: 20,
                            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAODA6MTQ",
                            children: y.jsxs(Ge, {
                                to: v.href,
                                className: "relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group",
                                style: {
                                    animation: `slideDown 0.5s ease-out ${x*.1}s backwards`
                                },
                                "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAODE6MTY",
                                children: [y.jsx("span", {
                                    className: "relative z-10",
                                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAODg6MTg",
                                    children: v.name
                                }), y.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 origin-center",
                                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAODk6MTg"
                                }), y.jsx("div", {
                                    className: "absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300",
                                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAOTI6MTg"
                                })]
                            })
                        }, v.name)), y.jsx("div", {
                            style: {
                                animation: "slideDown 0.5s ease-out 0.6s backwards"
                            },
                            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAOTk6MTI",
                            children: y.jsx(Wf, {
                                "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTAwOjE0"
                            })
                        }), r ? y.jsxs("div", {
                            className: "flex items-center space-x-4",
                            style: {
                                animation: "slideDown 0.5s ease-out 0.7s backwards"
                            },
                            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTA0OjE0",
                            children: [y.jsx(ot, {
                                magnetStrength: 2,
                                padding: 15,
                                "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTA1OjE2",
                                children: y.jsxs(Ge, {
                                    to: "/profile",
                                    className: "relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group",
                                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTA2OjE4",
                                    children: [y.jsx("span", {
                                        className: "relative z-10",
                                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTEwOjIw",
                                        children: h.profile
                                    }), y.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300",
                                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTExOjIw"
                                    })]
                                })
                            }), y.jsx(ot, {
                                magnetStrength: 2,
                                padding: 15,
                                "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTE0OjE2",
                                children: y.jsxs("button", {
                                    onClick: p,
                                    className: "relative text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group",
                                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTE1OjE4",
                                    children: [y.jsx("span", {
                                        className: "relative z-10",
                                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTE5OjIw",
                                        children: h.logout
                                    }), y.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300",
                                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTIwOjIw"
                                    })]
                                })
                            })]
                        }) : y.jsxs("div", {
                            className: "flex items-center space-x-4",
                            style: {
                                animation: "slideDown 0.5s ease-out 0.7s backwards"
                            },
                            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTI1OjE0",
                            children: [y.jsx(ot, {
                                magnetStrength: 2,
                                padding: 15,
                                "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTI2OjE2",
                                children: y.jsxs(Ge, {
                                    to: "/login",
                                    className: "relative text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 group",
                                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTI3OjE4",
                                    children: [y.jsx("span", {
                                        className: "relative z-10",
                                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTMxOjIw",
                                        children: h.login
                                    }), y.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300",
                                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTMyOjIw"
                                    })]
                                })
                            }), y.jsx(ot, {
                                magnetStrength: 2,
                                padding: 20,
                                "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTM1OjE2",
                                children: y.jsxs(Ge, {
                                    to: "/register",
                                    className: "relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg transition-all duration-300 group overflow-hidden",
                                    style: {
                                        backgroundSize: "200% 200%",
                                        animation: "gradientShift 3s ease-in-out infinite"
                                    },
                                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTM2OjE4",
                                    children: [y.jsx("span", {
                                        className: "relative z-10",
                                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTQ0OjIw",
                                        children: h.register
                                    }), y.jsx("div", {
                                        className: "absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md",
                                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTQ1OjIw"
                                    })]
                                })
                            })]
                        })]
                    }), y.jsxs("div", {
                        className: "md:hidden flex items-center",
                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTUzOjEw",
                        children: [y.jsx(Wf, {
                            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTU0OjEy"
                        }), y.jsx(ot, {
                            magnetStrength: 2,
                            padding: 15,
                            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTU1OjEy",
                            children: y.jsxs("button", {
                                onClick: () => f(!l),
                                className: "ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 group",
                                "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTU2OjE0",
                                children: [y.jsx("span", {
                                    className: "sr-only",
                                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTYwOjE2",
                                    "data-yw-t": !0,
                                    children: "Open main menu"
                                }), y.jsx("svg", {
                                    className: `h-6 w-6 transition-transform duration-300 ${l?"rotate-90":""}`,
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTYxOjE2",
                                    children: l ? y.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12",
                                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTY4OjIw"
                                    }) : y.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16",
                                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTcwOjIw"
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }), y.jsx("div", {
                className: `md:hidden transition-all duration-500 ease-in-out ${l?"max-h-96 opacity-100":"max-h-0 opacity-0"} overflow-hidden`,
                "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTgwOjY",
                children: y.jsxs("div", {
                    className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-gray-200",
                    "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTg1Ojg",
                    children: [g.map((v, x) => y.jsx(Ge, {
                        to: v.href,
                        className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300",
                        onClick: () => f(!1),
                        style: {
                            animation: `slideRight 0.3s ease-out ${x*.1}s backwards`
                        },
                        "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMTg3OjEy",
                        children: v.name
                    }, v.name)), r ? y.jsxs(y.Fragment, {
                        children: [y.jsx(Ge, {
                            to: "/profile",
                            className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300",
                            onClick: () => f(!1),
                            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMjAyOjE0",
                            children: h.profile
                        }), y.jsx("button", {
                            onClick: () => {
                                p(), f(!1)
                            },
                            className: "block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300",
                            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMjA5OjE0",
                            children: h.logout
                        })]
                    }) : y.jsxs(y.Fragment, {
                        children: [y.jsx(Ge, {
                            to: "/login",
                            className: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300",
                            onClick: () => f(!1),
                            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMjIxOjE0",
                            children: h.login
                        }), y.jsx(Ge, {
                            to: "/register",
                            className: "block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300",
                            onClick: () => f(!1),
                            "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMjI4OjE0",
                            children: h.register
                        })]
                    })]
                })
            }), y.jsx("style", {
                jsx: !0,
                "data-yw": "c3JjL2NvbXBvbmVudHMvTmF2aWdhdGlvbi50c3hAMjQxOjY",
                children: `
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `
            })]
        })
    },
    gr = ({
        width: n = "500px",
        height: r = "500px",
        background: s = "#000",
        borderRadius: a = "10px",
        borderColor: l = "#333",
        children: f,
        glareColor: d = "#ffffff",
        glareOpacity: h = .5,
        glareAngle: p = -45,
        glareSize: g = 250,
        transitionDuration: v = 650,
        playOnce: x = !1,
        className: w = "",
        style: T = {}
    }) => {
        const V = d.replace("#", "");
        let A = d;
        if (/^[0-9A-Fa-f]{6}$/.test(V)) {
            const z = parseInt(V.slice(0, 2), 16),
                O = parseInt(V.slice(2, 4), 16),
                Z = parseInt(V.slice(4, 6), 16);
            A = `rgba(${z}, ${O}, ${Z}, ${h})`
        } else if (/^[0-9A-Fa-f]{3}$/.test(V)) {
            const z = parseInt(V[0] + V[0], 16),
                O = parseInt(V[1] + V[1], 16),
                Z = parseInt(V[2] + V[2], 16);
            A = `rgba(${z}, ${O}, ${Z}, ${h})`
        }
        const k = {
            "--gh-width": n,
            "--gh-height": r,
            "--gh-bg": s,
            "--gh-br": a,
            "--gh-angle": `${p}deg`,
            "--gh-duration": `${v}ms`,
            "--gh-size": `${g}%`,
            "--gh-rgba": A,
            "--gh-border": l
        };
        return y.jsx("div", {
            className: `glare-hover ${x?"glare-hover--play-once":""} ${w}`,
            style: { ...k,
                ...T
            },
            "data-yw": "c3JjL2NvbXBvbmVudHMvR2xhcmVIb3Zlci50c3hANjQ6NA",
            children: f
        })
    },
    yl = ({
        start: n = 0,
        end: r,
        duration: s = 2e3,
        prefix: a = "",
        suffix: l = "",
        className: f = "",
        triggerOnScroll: d = !0
    }) => {
        const [h, p] = C.useState(n), [g, v] = C.useState(!1), x = C.useRef(null);
        return C.useEffect(() => {
            const w = () => {
                if (g) return;
                v(!0);
                const A = (r - n) / (s / 16);
                let k = n;
                const z = setInterval(() => {
                    k += A, k >= r && (k = r, clearInterval(z)), p(Math.floor(k))
                }, 16)
            };
            if (!d) {
                w();
                return
            }
            const T = new IntersectionObserver(([V]) => {
                V.isIntersecting && (w(), T.disconnect())
            }, {
                threshold: .5
            });
            return x.current && T.observe(x.current), () => T.disconnect()
        }, [n, r, s, g, d]), y.jsxs("span", {
            ref: x,
            className: f,
            "data-yw": "c3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRDb3VudGVyLnRzeEA2ODo0",
            children: [a, h.toLocaleString(), l]
        })
    },
    uv = () => (console.log("=== LandingPage with animations is rendering ==="), y.jsxs("div", {
        style: {
            minHeight: "100vh",
            background: "linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #581c87 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            color: "white",
            overflow: "hidden"
        },
        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMTo0",
        children: [y.jsx("div", {
            style: {
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
                borderRadius: "50%",
                animation: "float 6s ease-in-out infinite",
                zIndex: 0
            },
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMzo2"
        }), y.jsx("div", {
            style: {
                position: "absolute",
                bottom: "15%",
                right: "10%",
                width: "400px",
                height: "400px",
                background: "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
                borderRadius: "50%",
                animation: "float 8s ease-in-out infinite reverse",
                zIndex: 0
            },
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNTo2"
        }), y.jsxs("div", {
            style: {
                textAlign: "center",
                maxWidth: "1200px",
                margin: "0 auto",
                position: "relative",
                zIndex: 1
            },
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA0ODo2",
            children: [y.jsx(ot, {
                magnetStrength: 3,
                padding: 150,
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MDo4",
                children: y.jsx(gr, {
                    width: "auto",
                    height: "auto",
                    background: "transparent",
                    borderColor: "transparent",
                    glareColor: "#ffffff",
                    glareOpacity: .4,
                    glareSize: 200,
                    transitionDuration: 800,
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1MToxMA",
                    children: y.jsx("h1", {
                        style: {
                            fontSize: "5rem",
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            textShadow: "3px 3px 6px rgba(0,0,0,0.4)",
                            background: "linear-gradient(45deg, #ffffff, #e0e7ff, #ffffff)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundSize: "200% 200%",
                            animation: "gradientShift 4s ease-in-out infinite"
                        },
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2MToxMg",
                        "data-yw-t": !0,
                        children: "GariSeba"
                    })
                })
            }), y.jsx("p", {
                style: {
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    color: "#bfdbfe",
                    fontWeight: "500",
                    animation: "slideUp 1s ease-out 0.3s backwards"
                },
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA3ODo4",
                "data-yw-t": !0,
                children: "বাংলাদেশের সবচেয়ে বিশ্বস্ত যানবাহন সেবা প্ল্যাটফর্ম"
            }), y.jsx("p", {
                style: {
                    fontSize: "1.5rem",
                    marginBottom: "3rem",
                    color: "#dbeafe",
                    lineHeight: "1.6",
                    maxWidth: "800px",
                    margin: "0 auto 3rem auto",
                    animation: "slideUp 1s ease-out 0.6s backwards"
                },
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA4ODo4",
                "data-yw-t": !0,
                children: "গাড়ি রেজিস্ট্রেশন, ট্রাফিক ফাইন, ইন্স্যুরেন্স যাচাই এবং কেনা-বেচা - সবকিছু এক জায়গায়"
            }), y.jsxs("div", {
                style: {
                    display: "flex",
                    gap: "2rem",
                    justifyContent: "center",
                    marginBottom: "4rem",
                    flexWrap: "wrap",
                    animation: "slideUp 1s ease-out 0.9s backwards"
                },
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMDE6OA",
                children: [y.jsx(ot, {
                    magnetStrength: 4,
                    padding: 80,
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMDk6MTA",
                    children: y.jsx(gr, {
                        width: "auto",
                        height: "auto",
                        background: "white",
                        borderRadius: "0.75rem",
                        borderColor: "transparent",
                        glareColor: "#3b82f6",
                        glareOpacity: .3,
                        transitionDuration: 600,
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMTA6MTI",
                        children: y.jsx(Ge, {
                            to: "/register",
                            style: {
                                backgroundColor: "white",
                                color: "#1e3a8a",
                                padding: "1.2rem 2.5rem",
                                borderRadius: "0.75rem",
                                fontSize: "1.25rem",
                                fontWeight: "bold",
                                textDecoration: "none",
                                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                                transition: "all 0.3s ease",
                                display: "inline-block",
                                transform: "translateY(0)"
                            },
                            onMouseEnter: n => {
                                n.currentTarget.style.transform = "translateY(-5px)", n.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)"
                            },
                            onMouseLeave: n => {
                                n.currentTarget.style.transform = "translateY(0)", n.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)"
                            },
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxMjA6MTQ",
                            "data-yw-t": !0,
                            children: "শুরু করুন"
                        })
                    })
                }), y.jsx(ot, {
                    magnetStrength: 4,
                    padding: 80,
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNDk6MTA",
                    children: y.jsx(Ge, {
                        to: "/services",
                        style: {
                            border: "3px solid white",
                            color: "white",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            backdropFilter: "blur(10px)",
                            padding: "1.2rem 2.5rem",
                            borderRadius: "0.75rem",
                            fontSize: "1.25rem",
                            fontWeight: "bold",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            display: "inline-block",
                            transform: "translateY(0)",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                        },
                        onMouseEnter: n => {
                            n.currentTarget.style.backgroundColor = "white", n.currentTarget.style.color = "#1e3a8a", n.currentTarget.style.transform = "translateY(-5px)", n.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)"
                        },
                        onMouseLeave: n => {
                            n.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)", n.currentTarget.style.color = "white", n.currentTarget.style.transform = "translateY(0)", n.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)"
                        },
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxNTA6MTI",
                        "data-yw-t": !0,
                        children: "আরও জানুন"
                    })
                })]
            }), y.jsxs("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "2rem",
                    marginBottom: "4rem"
                },
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxODY6OA",
                children: [y.jsx(ot, {
                    magnetStrength: 2,
                    padding: 50,
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxOTI6MTA",
                    children: y.jsx(gr, {
                        width: "100%",
                        height: "auto",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "1rem",
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        glareColor: "#ffffff",
                        glareOpacity: .2,
                        transitionDuration: 700,
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAxOTM6MTI",
                        children: y.jsxs("div", {
                            style: {
                                padding: "2rem",
                                backdropFilter: "blur(10px)",
                                borderRadius: "1rem",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                transition: "all 0.3s ease"
                            },
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMDM6MTQ",
                            children: [y.jsx(yl, {
                                end: 5e4,
                                suffix: "+",
                                duration: 2500,
                                className: "",
                                style: {
                                    fontSize: "3rem",
                                    fontWeight: "bold",
                                    marginBottom: "0.5rem",
                                    display: "block"
                                },
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMTA6MTY"
                            }), y.jsx("div", {
                                style: {
                                    fontSize: "1.125rem",
                                    color: "#bfdbfe"
                                },
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMTc6MTY",
                                "data-yw-t": !0,
                                children: "সন্তুষ্ট গ্রাহক"
                            })]
                        })
                    })
                }), y.jsx(ot, {
                    magnetStrength: 2,
                    padding: 50,
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMjI6MTA",
                    children: y.jsx(gr, {
                        width: "100%",
                        height: "auto",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "1rem",
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        glareColor: "#ffffff",
                        glareOpacity: .2,
                        transitionDuration: 700,
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMjM6MTI",
                        children: y.jsxs("div", {
                            style: {
                                padding: "2rem",
                                backdropFilter: "blur(10px)",
                                borderRadius: "1rem",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                transition: "all 0.3s ease"
                            },
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyMzM6MTQ",
                            children: [y.jsx(yl, {
                                end: 25e3,
                                suffix: "+",
                                duration: 2500,
                                className: "",
                                style: {
                                    fontSize: "3rem",
                                    fontWeight: "bold",
                                    marginBottom: "0.5rem",
                                    display: "block"
                                },
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNDA6MTY"
                            }), y.jsx("div", {
                                style: {
                                    fontSize: "1.125rem",
                                    color: "#bfdbfe"
                                },
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNDc6MTY",
                                "data-yw-t": !0,
                                children: "সম্পন্ন সেবা"
                            })]
                        })
                    })
                }), y.jsx(ot, {
                    magnetStrength: 2,
                    padding: 50,
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNTI6MTA",
                    children: y.jsx(gr, {
                        width: "100%",
                        height: "auto",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "1rem",
                        borderColor: "rgba(255, 255, 255, 0.2)",
                        glareColor: "#ffffff",
                        glareOpacity: .2,
                        transitionDuration: 700,
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNTM6MTI",
                        children: y.jsxs("div", {
                            style: {
                                padding: "2rem",
                                backdropFilter: "blur(10px)",
                                borderRadius: "1rem",
                                border: "1px solid rgba(255, 255, 255, 0.2)",
                                transition: "all 0.3s ease"
                            },
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNjM6MTQ",
                            children: [y.jsx(yl, {
                                end: 1e3,
                                suffix: "+",
                                duration: 2500,
                                className: "",
                                style: {
                                    fontSize: "3rem",
                                    fontWeight: "bold",
                                    marginBottom: "0.5rem",
                                    display: "block"
                                },
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNzA6MTY"
                            }), y.jsx("div", {
                                style: {
                                    fontSize: "1.125rem",
                                    color: "#bfdbfe"
                                },
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyNzc6MTY",
                                "data-yw-t": !0,
                                children: "বিক্রিত গাড়ি"
                            })]
                        })
                    })
                })]
            })]
        }), y.jsxs("div", {
            style: {
                width: "100%",
                maxWidth: "1200px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "2rem",
                padding: "3rem 2rem",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                position: "relative",
                zIndex: 1,
                animation: "slideUp 1s ease-out 1.2s backwards"
            },
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyODU6Ng",
            children: [y.jsx("h2", {
                style: {
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: "3rem",
                    color: "white"
                },
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAyOTc6OA",
                "data-yw-t": !0,
                children: "আমাদের সেবাসমূহ"
            }), y.jsx("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "2rem"
                },
                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMDc6OA",
                children: [{
                    icon: "🚗",
                    title: "গাড়ি রেজিস্ট্রেশন",
                    desc: "দ্রুত এবং সহজ গাড়ি রেজিস্ট্রেশন যাচাই পরিষেবা"
                }, {
                    icon: "📋",
                    title: "ট্রাফিক ফাইন চেক",
                    desc: "আপনার গাড়ির ট্রাফিক ফাইন স্ট্যাটাস তাৎক্ষণিক যাচাই"
                }, {
                    icon: "🛡️",
                    title: "ইন্স্যুরেন্স যাচাই",
                    desc: "গাড়ির ইন্স্যুরেন্স যাচাই এবং নবায়ন সেবা"
                }, {
                    icon: "🤝",
                    title: "কেনা-বেচা মার্কেটপ্লেস",
                    desc: "বিশ্বস্ত গাড়ি কেনা-বেচার ডিজিটাল প্ল্যাটফর্ম"
                }].map((n, r) => y.jsx(ot, {
                    magnetStrength: 3,
                    padding: 40,
                    "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMTg6MTI",
                    children: y.jsx(gr, {
                        width: "100%",
                        height: "auto",
                        background: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "1rem",
                        borderColor: "transparent",
                        glareColor: "#6366f1",
                        glareOpacity: .3,
                        transitionDuration: 600,
                        "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMTk6MTQ",
                        children: y.jsxs("div", {
                            style: {
                                color: "#1f2937",
                                padding: "2rem",
                                borderRadius: "1rem",
                                textAlign: "center",
                                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                                transition: "all 0.3s ease",
                                transform: "translateY(0)"
                            },
                            onMouseEnter: s => {
                                s.currentTarget.style.transform = "translateY(-10px)", s.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)"
                            },
                            onMouseLeave: s => {
                                s.currentTarget.style.transform = "translateY(0)", s.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)"
                            },
                            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzMjk6MTY",
                            children: [y.jsx("div", {
                                style: {
                                    fontSize: "3.5rem",
                                    marginBottom: "1rem",
                                    animation: `bounce 2s ease-in-out infinite ${r*.2}s`
                                },
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNDc6MTg",
                                children: n.icon
                            }), y.jsx("h3", {
                                style: {
                                    fontSize: "1.5rem",
                                    fontWeight: "bold",
                                    marginBottom: "1rem"
                                },
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNTQ6MTg",
                                children: n.title
                            }), y.jsx("p", {
                                style: {
                                    color: "#6b7280",
                                    lineHeight: "1.6"
                                },
                                "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNTc6MTg",
                                children: n.desc
                            })]
                        })
                    })
                }, r))
            })]
        }), y.jsx("style", {
            "data-yw": "c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEAzNjg6Ng",
            children: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `
        })]
    })),
    xp = C.createContext({});

function cv(n) {
    const r = C.useRef(null);
    return r.current === null && (r.current = n()), r.current
}
const tu = C.createContext(null),
    wp = C.createContext({
        transformPagePoint: n => n,
        isStatic: !1,
        reducedMotion: "never"
    });

function dv(n = !0) {
    const r = C.useContext(tu);
    if (r === null) return [!0, null];
    const {
        isPresent: s,
        onExitComplete: a,
        register: l
    } = r, f = C.useId();
    C.useEffect(() => {
        n && l(f)
    }, [n]);
    const d = C.useCallback(() => n && a && a(f), [f, a, n]);
    return !s && a ? [!1, d] : [!0]
}
const nu = typeof window < "u",
    fv = nu ? C.useLayoutEffect : C.useEffect,
    ht = n => n;
let Lp = ht;

function ru(n) {
    let r;
    return () => (r === void 0 && (r = n()), r)
}
const Sr = (n, r, s) => {
        const a = r - n;
        return a === 0 ? 1 : (s - n) / a
    },
    $t = n => n * 1e3,
    Xt = n => n / 1e3,
    hv = {
        useManualTiming: !1
    };

function pv(n) {
    let r = new Set,
        s = new Set,
        a = !1,
        l = !1;
    const f = new WeakSet;
    let d = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };

    function h(g) {
        f.has(g) && (p.schedule(g), n()), g(d)
    }
    const p = {
        schedule: (g, v = !1, x = !1) => {
            const T = x && a ? r : s;
            return v && f.add(g), T.has(g) || T.add(g), g
        },
        cancel: g => {
            s.delete(g), f.delete(g)
        },
        process: g => {
            if (d = g, a) {
                l = !0;
                return
            }
            a = !0, [r, s] = [s, r], r.forEach(h), r.clear(), a = !1, l && (l = !1, p.process(g))
        }
    };
    return p
}
const Ys = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
    mv = 40;

function jp(n, r) {
    let s = !1,
        a = !0;
    const l = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        f = () => s = !0,
        d = Ys.reduce((z, O) => (z[O] = pv(f), z), {}),
        {
            read: h,
            resolveKeyframes: p,
            update: g,
            preRender: v,
            render: x,
            postRender: w
        } = d,
        T = () => {
            const z = performance.now();
            s = !1, l.delta = a ? 1e3 / 60 : Math.max(Math.min(z - l.timestamp, mv), 1), l.timestamp = z, l.isProcessing = !0, h.process(l), p.process(l), g.process(l), v.process(l), x.process(l), w.process(l), l.isProcessing = !1, s && r && (a = !1, n(T))
        },
        V = () => {
            s = !0, a = !0, l.isProcessing || n(T)
        };
    return {
        schedule: Ys.reduce((z, O) => {
            const Z = d[O];
            return z[O] = (Y, U = !1, ne = !1) => (s || V(), Z.schedule(Y, U, ne)), z
        }, {}),
        cancel: z => {
            for (let O = 0; O < Ys.length; O++) d[Ys[O]].cancel(z)
        },
        state: l,
        steps: d
    }
}
const {
    schedule: xe,
    cancel: Sn,
    state: Ze,
    steps: gl
} = jp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ht, !0), Sp = C.createContext({
    strict: !1
}), Gf = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}, Tr = {};
for (const n in Gf) Tr[n] = {
    isEnabled: r => Gf[n].some(s => !!r[s])
};

function yv(n) {
    for (const r in n) Tr[r] = { ...Tr[r],
        ...n[r]
    }
}
const gv = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function no(n) {
    return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || gv.has(n)
}
let Tp = n => !no(n);

function vv(n) {
    n && (Tp = r => r.startsWith("on") ? !no(r) : n(r))
}
try {
    vv(require("@emotion/is-prop-valid").default)
} catch {}

function xv(n, r, s) {
    const a = {};
    for (const l in n) l === "values" && typeof n.values == "object" || (Tp(l) || s === !0 && no(l) || !r && !no(l) || n.draggable && l.startsWith("onDrag")) && (a[l] = n[l]);
    return a
}

function wv(n) {
    if (typeof Proxy > "u") return n;
    const r = new Map,
        s = (...a) => n(...a);
    return new Proxy(s, {
        get: (a, l) => l === "create" ? n : (r.has(l) || r.set(l, n(l)), r.get(l))
    })
}
const co = C.createContext({});

function Ei(n) {
    return typeof n == "string" || Array.isArray(n)
}

function fo(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function"
}
const iu = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    su = ["initial", ...iu];

function ho(n) {
    return fo(n.animate) || su.some(r => Ei(n[r]))
}

function Np(n) {
    return !!(ho(n) || n.variants)
}

function Lv(n, r) {
    if (ho(n)) {
        const {
            initial: s,
            animate: a
        } = n;
        return {
            initial: s === !1 || Ei(s) ? s : void 0,
            animate: Ei(a) ? a : void 0
        }
    }
    return n.inherit !== !1 ? r : {}
}

function jv(n) {
    const {
        initial: r,
        animate: s
    } = Lv(n, C.useContext(co));
    return C.useMemo(() => ({
        initial: r,
        animate: s
    }), [Qf(r), Qf(s)])
}

function Qf(n) {
    return Array.isArray(n) ? n.join(" ") : n
}
const Sv = Symbol.for("motionComponentSymbol");

function vr(n) {
    return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
}

function Tv(n, r, s) {
    return C.useCallback(a => {
        a && n.onMount && n.onMount(a), r && (a ? r.mount(a) : r.unmount()), s && (typeof s == "function" ? s(a) : vr(s) && (s.current = a))
    }, [r])
}
const ou = n => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    Nv = "framerAppearId",
    Ep = "data-" + ou(Nv),
    {
        schedule: au
    } = jp(queueMicrotask, !1),
    Mp = C.createContext({});

function Ev(n, r, s, a, l) {
    var f, d;
    const {
        visualElement: h
    } = C.useContext(co), p = C.useContext(Sp), g = C.useContext(tu), v = C.useContext(wp).reducedMotion, x = C.useRef(null);
    a = a || p.renderer, !x.current && a && (x.current = a(n, {
        visualState: r,
        parent: h,
        props: s,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: v
    }));
    const w = x.current,
        T = C.useContext(Mp);
    w && !w.projection && l && (w.type === "html" || w.type === "svg") && Mv(x.current, s, l, T);
    const V = C.useRef(!1);
    C.useInsertionEffect(() => {
        w && V.current && w.update(s, g)
    });
    const A = s[Ep],
        k = C.useRef(!!A && !(!((f = window.MotionHandoffIsComplete) === null || f === void 0) && f.call(window, A)) && ((d = window.MotionHasOptimisedAnimation) === null || d === void 0 ? void 0 : d.call(window, A)));
    return fv(() => {
        w && (V.current = !0, window.MotionIsMounted = !0, w.updateFeatures(), au.render(w.render), k.current && w.animationState && w.animationState.animateChanges())
    }), C.useEffect(() => {
        w && (!k.current && w.animationState && w.animationState.animateChanges(), k.current && (queueMicrotask(() => {
            var z;
            (z = window.MotionHandoffMarkAsComplete) === null || z === void 0 || z.call(window, A)
        }), k.current = !1))
    }), w
}

function Mv(n, r, s, a) {
    const {
        layoutId: l,
        layout: f,
        drag: d,
        dragConstraints: h,
        layoutScroll: p,
        layoutRoot: g
    } = r;
    n.projection = new s(n.latestValues, r["data-framer-portal-id"] ? void 0 : Vp(n.parent)), n.projection.setOptions({
        layoutId: l,
        layout: f,
        alwaysMeasureLayout: !!d || h && vr(h),
        visualElement: n,
        animationType: typeof f == "string" ? f : "both",
        initialPromotionConfig: a,
        layoutScroll: p,
        layoutRoot: g
    })
}

function Vp(n) {
    if (n) return n.options.allowProjection !== !1 ? n.projection : Vp(n.parent)
}

function Vv({
    preloadedFeatures: n,
    createVisualElement: r,
    useRender: s,
    useVisualState: a,
    Component: l
}) {
    var f, d;
    n && yv(n);

    function h(g, v) {
        let x;
        const w = { ...C.useContext(wp),
                ...g,
                layoutId: Av(g)
            },
            {
                isStatic: T
            } = w,
            V = jv(g),
            A = a(g, T);
        if (!T && nu) {
            kv();
            const k = bv(w);
            x = k.MeasureLayout, V.visualElement = Ev(l, A, w, r, k.ProjectionNode)
        }
        return y.jsxs(co.Provider, {
            value: V,
            children: [x && V.visualElement ? y.jsx(x, {
                visualElement: V.visualElement,
                ...w
            }) : null, s(l, g, Tv(A, V.visualElement, v), A, T, V.visualElement)]
        })
    }
    h.displayName = `motion.${typeof l=="string"?l:`create(${(d=(f=l.displayName)!==null&&f!==void 0?f:l.name)!==null&&d!==void 0?d:""})`}`;
    const p = C.forwardRef(h);
    return p[Sv] = l, p
}

function Av({
    layoutId: n
}) {
    const r = C.useContext(xp).id;
    return r && n !== void 0 ? r + "-" + n : n
}

function kv(n, r) {
    C.useContext(Sp).strict
}

function bv(n) {
    const {
        drag: r,
        layout: s
    } = Tr;
    if (!r && !s) return {};
    const a = { ...r,
        ...s
    };
    return {
        MeasureLayout: r ? .isEnabled(n) || s ? .isEnabled(n) ? a.MeasureLayout : void 0,
        ProjectionNode: a.ProjectionNode
    }
}
const Cv = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function lu(n) {
    return typeof n != "string" || n.includes("-") ? !1 : !!(Cv.indexOf(n) > -1 || /[A-Z]/u.test(n))
}

function Hf(n) {
    const r = [{}, {}];
    return n ? .values.forEach((s, a) => {
        r[0][a] = s.get(), r[1][a] = s.getVelocity()
    }), r
}

function uu(n, r, s, a) {
    if (typeof r == "function") {
        const [l, f] = Hf(a);
        r = r(s !== void 0 ? s : n.custom, l, f)
    }
    if (typeof r == "string" && (r = n.variants && n.variants[r]), typeof r == "function") {
        const [l, f] = Hf(a);
        r = r(s !== void 0 ? s : n.custom, l, f)
    }
    return r
}
const Pl = n => Array.isArray(n),
    zv = n => !!(n && typeof n == "object" && n.mix && n.toValue),
    Pv = n => Pl(n) ? n[n.length - 1] || 0 : n,
    Qe = n => !!(n && n.getVelocity);

function Ks(n) {
    const r = Qe(n) ? n.get() : n;
    return zv(r) ? r.toValue() : r
}

function Rv({
    scrapeMotionValuesFromProps: n,
    createRenderState: r,
    onUpdate: s
}, a, l, f) {
    const d = {
        latestValues: Bv(a, l, f, n),
        renderState: r()
    };
    return s && (d.onMount = h => s({
        props: a,
        current: h,
        ...d
    }), d.onUpdate = h => s(h)), d
}
const Ap = n => (r, s) => {
    const a = C.useContext(co),
        l = C.useContext(tu),
        f = () => Rv(n, r, a, l);
    return s ? f() : cv(f)
};

function Bv(n, r, s, a) {
    const l = {},
        f = a(n, {});
    for (const w in f) l[w] = Ks(f[w]);
    let {
        initial: d,
        animate: h
    } = n;
    const p = ho(n),
        g = Np(n);
    r && g && !p && n.inherit !== !1 && (d === void 0 && (d = r.initial), h === void 0 && (h = r.animate));
    let v = s ? s.initial === !1 : !1;
    v = v || d === !1;
    const x = v ? h : d;
    if (x && typeof x != "boolean" && !fo(x)) {
        const w = Array.isArray(x) ? x : [x];
        for (let T = 0; T < w.length; T++) {
            const V = uu(n, w[T]);
            if (V) {
                const {
                    transitionEnd: A,
                    transition: k,
                    ...z
                } = V;
                for (const O in z) {
                    let Z = z[O];
                    if (Array.isArray(Z)) {
                        const Y = v ? Z.length - 1 : 0;
                        Z = Z[Y]
                    }
                    Z !== null && (l[O] = Z)
                }
                for (const O in A) l[O] = A[O]
            }
        }
    }
    return l
}
const Vr = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Wn = new Set(Vr),
    kp = n => r => typeof r == "string" && r.startsWith(n),
    bp = kp("--"),
    Dv = kp("var(--"),
    cu = n => Dv(n) ? Fv.test(n.split("/*")[0].trim()) : !1,
    Fv = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Cp = (n, r) => r && typeof n == "number" ? r.transform(n) : n,
    Kt = (n, r, s) => s > r ? r : s < n ? n : s,
    Ar = {
        test: n => typeof n == "number",
        parse: parseFloat,
        transform: n => n
    },
    Mi = { ...Ar,
        transform: n => Kt(0, 1, n)
    },
    $s = { ...Ar,
        default: 1
    },
    Pi = n => ({
        test: r => typeof r == "string" && r.endsWith(n) && r.split(" ").length === 1,
        parse: parseFloat,
        transform: r => `${r}${n}`
    }),
    wn = Pi("deg"),
    Ot = Pi("%"),
    ee = Pi("px"),
    Ov = Pi("vh"),
    Zv = Pi("vw"),
    Yf = { ...Ot,
        parse: n => Ot.parse(n) / 100,
        transform: n => Ot.transform(n * 100)
    },
    Jv = {
        borderWidth: ee,
        borderTopWidth: ee,
        borderRightWidth: ee,
        borderBottomWidth: ee,
        borderLeftWidth: ee,
        borderRadius: ee,
        radius: ee,
        borderTopLeftRadius: ee,
        borderTopRightRadius: ee,
        borderBottomRightRadius: ee,
        borderBottomLeftRadius: ee,
        width: ee,
        maxWidth: ee,
        height: ee,
        maxHeight: ee,
        top: ee,
        right: ee,
        bottom: ee,
        left: ee,
        padding: ee,
        paddingTop: ee,
        paddingRight: ee,
        paddingBottom: ee,
        paddingLeft: ee,
        margin: ee,
        marginTop: ee,
        marginRight: ee,
        marginBottom: ee,
        marginLeft: ee,
        backgroundPositionX: ee,
        backgroundPositionY: ee
    },
    _v = {
        rotate: wn,
        rotateX: wn,
        rotateY: wn,
        rotateZ: wn,
        scale: $s,
        scaleX: $s,
        scaleY: $s,
        scaleZ: $s,
        skew: wn,
        skewX: wn,
        skewY: wn,
        distance: ee,
        translateX: ee,
        translateY: ee,
        translateZ: ee,
        x: ee,
        y: ee,
        z: ee,
        perspective: ee,
        transformPerspective: ee,
        opacity: Mi,
        originX: Yf,
        originY: Yf,
        originZ: ee
    },
    $f = { ...Ar,
        transform: Math.round
    },
    du = { ...Jv,
        ..._v,
        zIndex: $f,
        size: ee,
        fillOpacity: Mi,
        strokeOpacity: Mi,
        numOctaves: $f
    },
    Iv = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    Uv = Vr.length;

function Wv(n, r, s) {
    let a = "",
        l = !0;
    for (let f = 0; f < Uv; f++) {
        const d = Vr[f],
            h = n[d];
        if (h === void 0) continue;
        let p = !0;
        if (typeof h == "number" ? p = h === (d.startsWith("scale") ? 1 : 0) : p = parseFloat(h) === 0, !p || s) {
            const g = Cp(h, du[d]);
            if (!p) {
                l = !1;
                const v = Iv[d] || d;
                a += `${v}(${g}) `
            }
            s && (r[d] = g)
        }
    }
    return a = a.trim(), s ? a = s(r, l ? "" : a) : l && (a = "none"), a
}

function fu(n, r, s) {
    const {
        style: a,
        vars: l,
        transformOrigin: f
    } = n;
    let d = !1,
        h = !1;
    for (const p in r) {
        const g = r[p];
        if (Wn.has(p)) {
            d = !0;
            continue
        } else if (bp(p)) {
            l[p] = g;
            continue
        } else {
            const v = Cp(g, du[p]);
            p.startsWith("origin") ? (h = !0, f[p] = v) : a[p] = v
        }
    }
    if (r.transform || (d || s ? a.transform = Wv(r, n.transform, s) : a.transform && (a.transform = "none")), h) {
        const {
            originX: p = "50%",
            originY: g = "50%",
            originZ: v = 0
        } = f;
        a.transformOrigin = `${p} ${g} ${v}`
    }
}
const Gv = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Qv = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Hv(n, r, s = 1, a = 0, l = !0) {
    n.pathLength = 1;
    const f = l ? Gv : Qv;
    n[f.offset] = ee.transform(-a);
    const d = ee.transform(r),
        h = ee.transform(s);
    n[f.array] = `${d} ${h}`
}

function Xf(n, r, s) {
    return typeof n == "string" ? n : ee.transform(r + s * n)
}

function Yv(n, r, s) {
    const a = Xf(r, n.x, n.width),
        l = Xf(s, n.y, n.height);
    return `${a} ${l}`
}

function hu(n, {
    attrX: r,
    attrY: s,
    attrScale: a,
    originX: l,
    originY: f,
    pathLength: d,
    pathSpacing: h = 1,
    pathOffset: p = 0,
    ...g
}, v, x) {
    if (fu(n, g, x), v) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return
    }
    n.attrs = n.style, n.style = {};
    const {
        attrs: w,
        style: T,
        dimensions: V
    } = n;
    w.transform && (V && (T.transform = w.transform), delete w.transform), V && (l !== void 0 || f !== void 0 || T.transform) && (T.transformOrigin = Yv(V, l !== void 0 ? l : .5, f !== void 0 ? f : .5)), r !== void 0 && (w.x = r), s !== void 0 && (w.y = s), a !== void 0 && (w.scale = a), d !== void 0 && Hv(w, d, h, p, !1)
}
const pu = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    }),
    zp = () => ({ ...pu(),
        attrs: {}
    }),
    mu = n => typeof n == "string" && n.toLowerCase() === "svg";

function Pp(n, {
    style: r,
    vars: s
}, a, l) {
    Object.assign(n.style, r, l && l.getProjectionStyles(a));
    for (const f in s) n.style.setProperty(f, s[f])
}
const Rp = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function Bp(n, r, s, a) {
    Pp(n, r, void 0, a);
    for (const l in r.attrs) n.setAttribute(Rp.has(l) ? l : ou(l), r.attrs[l])
}
const ro = {};

function $v(n) {
    Object.assign(ro, n)
}

function Dp(n, {
    layout: r,
    layoutId: s
}) {
    return Wn.has(n) || n.startsWith("origin") || (r || s !== void 0) && (!!ro[n] || n === "opacity")
}

function yu(n, r, s) {
    var a;
    const {
        style: l
    } = n, f = {};
    for (const d in l)(Qe(l[d]) || r.style && Qe(r.style[d]) || Dp(d, n) || ((a = s ? .getValue(d)) === null || a === void 0 ? void 0 : a.liveStyle) !== void 0) && (f[d] = l[d]);
    return f
}

function Fp(n, r, s) {
    const a = yu(n, r, s);
    for (const l in n)
        if (Qe(n[l]) || Qe(r[l])) {
            const f = Vr.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
            a[f] = n[l]
        }
    return a
}

function Xv(n, r) {
    try {
        r.dimensions = typeof n.getBBox == "function" ? n.getBBox() : n.getBoundingClientRect()
    } catch {
        r.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Kf = ["x", "y", "width", "height", "cx", "cy", "r"],
    Kv = {
        useVisualState: Ap({
            scrapeMotionValuesFromProps: Fp,
            createRenderState: zp,
            onUpdate: ({
                props: n,
                prevProps: r,
                current: s,
                renderState: a,
                latestValues: l
            }) => {
                if (!s) return;
                let f = !!n.drag;
                if (!f) {
                    for (const h in l)
                        if (Wn.has(h)) {
                            f = !0;
                            break
                        }
                }
                if (!f) return;
                let d = !r;
                if (r)
                    for (let h = 0; h < Kf.length; h++) {
                        const p = Kf[h];
                        n[p] !== r[p] && (d = !0)
                    }
                d && xe.read(() => {
                    Xv(s, a), xe.render(() => {
                        hu(a, l, mu(s.tagName), n.transformTemplate), Bp(s, a)
                    })
                })
            }
        })
    },
    qv = {
        useVisualState: Ap({
            scrapeMotionValuesFromProps: yu,
            createRenderState: pu
        })
    };

function Op(n, r, s) {
    for (const a in r) !Qe(r[a]) && !Dp(a, s) && (n[a] = r[a])
}

function ex({
    transformTemplate: n
}, r) {
    return C.useMemo(() => {
        const s = pu();
        return fu(s, r, n), Object.assign({}, s.vars, s.style)
    }, [r])
}

function tx(n, r) {
    const s = n.style || {},
        a = {};
    return Op(a, s, n), Object.assign(a, ex(n, r)), a
}

function nx(n, r) {
    const s = {},
        a = tx(n, r);
    return n.drag && n.dragListener !== !1 && (s.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = n.drag === !0 ? "none" : `pan-${n.drag==="x"?"y":"x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (s.tabIndex = 0), s.style = a, s
}

function rx(n, r, s, a) {
    const l = C.useMemo(() => {
        const f = zp();
        return hu(f, r, mu(a), n.transformTemplate), { ...f.attrs,
            style: { ...f.style
            }
        }
    }, [r]);
    if (n.style) {
        const f = {};
        Op(f, n.style, n), l.style = { ...f,
            ...l.style
        }
    }
    return l
}

function ix(n = !1) {
    return (s, a, l, {
        latestValues: f
    }, d) => {
        const p = (lu(s) ? rx : nx)(a, f, d, s),
            g = xv(a, typeof s == "string", n),
            v = s !== C.Fragment ? { ...g,
                ...p,
                ref: l
            } : {},
            {
                children: x
            } = a,
            w = C.useMemo(() => Qe(x) ? x.get() : x, [x]);
        return C.createElement(s, { ...v,
            children: w
        })
    }
}

function sx(n, r) {
    return function(a, {
        forwardMotionProps: l
    } = {
        forwardMotionProps: !1
    }) {
        const d = { ...lu(a) ? Kv : qv,
            preloadedFeatures: n,
            useRender: ix(l),
            createVisualElement: r,
            Component: a
        };
        return Vv(d)
    }
}

function Zp(n, r) {
    if (!Array.isArray(r)) return !1;
    const s = r.length;
    if (s !== n.length) return !1;
    for (let a = 0; a < s; a++)
        if (r[a] !== n[a]) return !1;
    return !0
}

function po(n, r, s) {
    const a = n.getProps();
    return uu(a, r, s !== void 0 ? s : a.custom, n)
}
const ox = ru(() => window.ScrollTimeline !== void 0);
class ax {
    constructor(r) {
        this.stop = () => this.runAll("stop"), this.animations = r.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(r => "finished" in r ? r.finished : r))
    }
    getAll(r) {
        return this.animations[0][r]
    }
    setAll(r, s) {
        for (let a = 0; a < this.animations.length; a++) this.animations[a][r] = s
    }
    attachTimeline(r, s) {
        const a = this.animations.map(l => {
            if (ox() && l.attachTimeline) return l.attachTimeline(r);
            if (typeof s == "function") return s(l)
        });
        return () => {
            a.forEach((l, f) => {
                l && l(), this.animations[f].stop()
            })
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(r) {
        this.setAll("time", r)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(r) {
        this.setAll("speed", r)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let r = 0;
        for (let s = 0; s < this.animations.length; s++) r = Math.max(r, this.animations[s].duration);
        return r
    }
    runAll(r) {
        this.animations.forEach(s => s[r]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class lx extends ax {
    then(r, s) {
        return Promise.all(this.animations).then(r).catch(s)
    }
}

function gu(n, r) {
    return n ? n[r] || n.default || n : void 0
}
const Rl = 2e4;

function Jp(n) {
    let r = 0;
    const s = 50;
    let a = n.next(r);
    for (; !a.done && r < Rl;) r += s, a = n.next(r);
    return r >= Rl ? 1 / 0 : r
}

function vu(n) {
    return typeof n == "function"
}

function qf(n, r) {
    n.timeline = r, n.onfinish = null
}
const xu = n => Array.isArray(n) && typeof n[0] == "number",
    ux = {
        linearEasing: void 0
    };

function cx(n, r) {
    const s = ru(n);
    return () => {
        var a;
        return (a = ux[r]) !== null && a !== void 0 ? a : s()
    }
}
const io = cx(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    _p = (n, r, s = 10) => {
        let a = "";
        const l = Math.max(Math.round(r / s), 2);
        for (let f = 0; f < l; f++) a += n(Sr(0, l - 1, f)) + ", ";
        return `linear(${a.substring(0,a.length-2)})`
    };

function Ip(n) {
    return !!(typeof n == "function" && io() || !n || typeof n == "string" && (n in Bl || io()) || xu(n) || Array.isArray(n) && n.every(Ip))
}
const gi = ([n, r, s, a]) => `cubic-bezier(${n}, ${r}, ${s}, ${a})`,
    Bl = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: gi([0, .65, .55, 1]),
        circOut: gi([.55, 0, 1, .45]),
        backIn: gi([.31, .01, .66, -.59]),
        backOut: gi([.33, 1.53, .69, .99])
    };

function Up(n, r) {
    if (n) return typeof n == "function" && io() ? _p(n, r) : xu(n) ? gi(n) : Array.isArray(n) ? n.map(s => Up(s, r) || Bl.easeOut) : Bl[n]
}
const Ct = {
    x: !1,
    y: !1
};

function Wp() {
    return Ct.x || Ct.y
}

function dx(n, r, s) {
    var a;
    if (n instanceof Element) return [n];
    if (typeof n == "string") {
        let l = document;
        const f = (a = void 0) !== null && a !== void 0 ? a : l.querySelectorAll(n);
        return f ? Array.from(f) : []
    }
    return Array.from(n)
}

function Gp(n, r) {
    const s = dx(n),
        a = new AbortController,
        l = {
            passive: !0,
            ...r,
            signal: a.signal
        };
    return [s, l, () => a.abort()]
}

function eh(n) {
    return r => {
        r.pointerType === "touch" || Wp() || n(r)
    }
}

function fx(n, r, s = {}) {
    const [a, l, f] = Gp(n, s), d = eh(h => {
        const {
            target: p
        } = h, g = r(h);
        if (typeof g != "function" || !p) return;
        const v = eh(x => {
            g(x), p.removeEventListener("pointerleave", v)
        });
        p.addEventListener("pointerleave", v, l)
    });
    return a.forEach(h => {
        h.addEventListener("pointerenter", d, l)
    }), f
}
const Qp = (n, r) => r ? n === r ? !0 : Qp(n, r.parentElement) : !1,
    wu = n => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1,
    hx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function px(n) {
    return hx.has(n.tagName) || n.tabIndex !== -1
}
const vi = new WeakSet;

function th(n) {
    return r => {
        r.key === "Enter" && n(r)
    }
}

function vl(n, r) {
    n.dispatchEvent(new PointerEvent("pointer" + r, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const mx = (n, r) => {
    const s = n.currentTarget;
    if (!s) return;
    const a = th(() => {
        if (vi.has(s)) return;
        vl(s, "down");
        const l = th(() => {
                vl(s, "up")
            }),
            f = () => vl(s, "cancel");
        s.addEventListener("keyup", l, r), s.addEventListener("blur", f, r)
    });
    s.addEventListener("keydown", a, r), s.addEventListener("blur", () => s.removeEventListener("keydown", a), r)
};

function nh(n) {
    return wu(n) && !Wp()
}

function yx(n, r, s = {}) {
    const [a, l, f] = Gp(n, s), d = h => {
        const p = h.currentTarget;
        if (!nh(h) || vi.has(p)) return;
        vi.add(p);
        const g = r(h),
            v = (T, V) => {
                window.removeEventListener("pointerup", x), window.removeEventListener("pointercancel", w), !(!nh(T) || !vi.has(p)) && (vi.delete(p), typeof g == "function" && g(T, {
                    success: V
                }))
            },
            x = T => {
                v(T, s.useGlobalTarget || Qp(p, T.target))
            },
            w = T => {
                v(T, !1)
            };
        window.addEventListener("pointerup", x, l), window.addEventListener("pointercancel", w, l)
    };
    return a.forEach(h => {
        !px(h) && h.getAttribute("tabindex") === null && (h.tabIndex = 0), (s.useGlobalTarget ? window : h).addEventListener("pointerdown", d, l), h.addEventListener("focus", g => mx(g, l), l)
    }), f
}

function gx(n) {
    return n === "x" || n === "y" ? Ct[n] ? null : (Ct[n] = !0, () => {
        Ct[n] = !1
    }) : Ct.x || Ct.y ? null : (Ct.x = Ct.y = !0, () => {
        Ct.x = Ct.y = !1
    })
}
const Hp = new Set(["width", "height", "top", "left", "right", "bottom", ...Vr]);
let qs;

function vx() {
    qs = void 0
}
const Zt = {
    now: () => (qs === void 0 && Zt.set(Ze.isProcessing || hv.useManualTiming ? Ze.timestamp : performance.now()), qs),
    set: n => {
        qs = n, queueMicrotask(vx)
    }
};

function Lu(n, r) {
    n.indexOf(r) === -1 && n.push(r)
}

function ju(n, r) {
    const s = n.indexOf(r);
    s > -1 && n.splice(s, 1)
}
class Su {
    constructor() {
        this.subscriptions = []
    }
    add(r) {
        return Lu(this.subscriptions, r), () => ju(this.subscriptions, r)
    }
    notify(r, s, a) {
        const l = this.subscriptions.length;
        if (l)
            if (l === 1) this.subscriptions[0](r, s, a);
            else
                for (let f = 0; f < l; f++) {
                    const d = this.subscriptions[f];
                    d && d(r, s, a)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}

function Yp(n, r) {
    return r ? n * (1e3 / r) : 0
}
const rh = 30,
    xx = n => !isNaN(parseFloat(n));
class wx {
    constructor(r, s = {}) {
        this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (a, l = !0) => {
            const f = Zt.now();
            this.updatedAt !== f && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(a), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), l && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }, this.hasAnimated = !1, this.setCurrent(r), this.owner = s.owner
    }
    setCurrent(r) {
        this.current = r, this.updatedAt = Zt.now(), this.canTrackVelocity === null && r !== void 0 && (this.canTrackVelocity = xx(this.current))
    }
    setPrevFrameValue(r = this.current) {
        this.prevFrameValue = r, this.prevUpdatedAt = this.updatedAt
    }
    onChange(r) {
        return this.on("change", r)
    }
    on(r, s) {
        this.events[r] || (this.events[r] = new Su);
        const a = this.events[r].add(s);
        return r === "change" ? () => {
            a(), xe.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : a
    }
    clearListeners() {
        for (const r in this.events) this.events[r].clear()
    }
    attach(r, s) {
        this.passiveEffect = r, this.stopPassiveEffect = s
    }
    set(r, s = !0) {
        !s || !this.passiveEffect ? this.updateAndNotify(r, s) : this.passiveEffect(r, this.updateAndNotify)
    }
    setWithVelocity(r, s, a) {
        this.set(s), this.prev = void 0, this.prevFrameValue = r, this.prevUpdatedAt = this.updatedAt - a
    }
    jump(r, s = !0) {
        this.updateAndNotify(r), this.prev = r, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const r = Zt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || r - this.updatedAt > rh) return 0;
        const s = Math.min(this.updatedAt - this.prevUpdatedAt, rh);
        return Yp(parseFloat(this.current) - parseFloat(this.prevFrameValue), s)
    }
    start(r) {
        return this.stop(), new Promise(s => {
            this.hasAnimated = !0, this.animation = r(s), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Vi(n, r) {
    return new wx(n, r)
}

function Lx(n, r, s) {
    n.hasValue(r) ? n.getValue(r).set(s) : n.addValue(r, Vi(s))
}

function jx(n, r) {
    const s = po(n, r);
    let {
        transitionEnd: a = {},
        transition: l = {},
        ...f
    } = s || {};
    f = { ...f,
        ...a
    };
    for (const d in f) {
        const h = Pv(f[d]);
        Lx(n, d, h)
    }
}

function Sx(n) {
    return !!(Qe(n) && n.add)
}

function Dl(n, r) {
    const s = n.getValue("willChange");
    if (Sx(s)) return s.add(r)
}

function $p(n) {
    return n.props[Ep]
}
const Xp = (n, r, s) => (((1 - 3 * s + 3 * r) * n + (3 * s - 6 * r)) * n + 3 * r) * n,
    Tx = 1e-7,
    Nx = 12;

function Ex(n, r, s, a, l) {
    let f, d, h = 0;
    do d = r + (s - r) / 2, f = Xp(d, a, l) - n, f > 0 ? s = d : r = d; while (Math.abs(f) > Tx && ++h < Nx);
    return d
}

function Ri(n, r, s, a) {
    if (n === r && s === a) return ht;
    const l = f => Ex(f, 0, 1, n, s);
    return f => f === 0 || f === 1 ? f : Xp(l(f), r, a)
}
const Kp = n => r => r <= .5 ? n(2 * r) / 2 : (2 - n(2 * (1 - r))) / 2,
    qp = n => r => 1 - n(1 - r),
    em = Ri(.33, 1.53, .69, .99),
    Tu = qp(em),
    tm = Kp(Tu),
    nm = n => (n *= 2) < 1 ? .5 * Tu(n) : .5 * (2 - Math.pow(2, -10 * (n - 1))),
    Nu = n => 1 - Math.sin(Math.acos(n)),
    rm = qp(Nu),
    im = Kp(Nu),
    sm = n => /^0[^.\s]+$/u.test(n);

function Mx(n) {
    return typeof n == "number" ? n === 0 : n !== null ? n === "none" || n === "0" || sm(n) : !0
}
const wi = n => Math.round(n * 1e5) / 1e5,
    Eu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Vx(n) {
    return n == null
}
const Ax = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Mu = (n, r) => s => !!(typeof s == "string" && Ax.test(s) && s.startsWith(n) || r && !Vx(s) && Object.prototype.hasOwnProperty.call(s, r)),
    om = (n, r, s) => a => {
        if (typeof a != "string") return a;
        const [l, f, d, h] = a.match(Eu);
        return {
            [n]: parseFloat(l),
            [r]: parseFloat(f),
            [s]: parseFloat(d),
            alpha: h !== void 0 ? parseFloat(h) : 1
        }
    },
    kx = n => Kt(0, 255, n),
    xl = { ...Ar,
        transform: n => Math.round(kx(n))
    },
    In = {
        test: Mu("rgb", "red"),
        parse: om("red", "green", "blue"),
        transform: ({
            red: n,
            green: r,
            blue: s,
            alpha: a = 1
        }) => "rgba(" + xl.transform(n) + ", " + xl.transform(r) + ", " + xl.transform(s) + ", " + wi(Mi.transform(a)) + ")"
    };

function bx(n) {
    let r = "",
        s = "",
        a = "",
        l = "";
    return n.length > 5 ? (r = n.substring(1, 3), s = n.substring(3, 5), a = n.substring(5, 7), l = n.substring(7, 9)) : (r = n.substring(1, 2), s = n.substring(2, 3), a = n.substring(3, 4), l = n.substring(4, 5), r += r, s += s, a += a, l += l), {
        red: parseInt(r, 16),
        green: parseInt(s, 16),
        blue: parseInt(a, 16),
        alpha: l ? parseInt(l, 16) / 255 : 1
    }
}
const Fl = {
        test: Mu("#"),
        parse: bx,
        transform: In.transform
    },
    xr = {
        test: Mu("hsl", "hue"),
        parse: om("hue", "saturation", "lightness"),
        transform: ({
            hue: n,
            saturation: r,
            lightness: s,
            alpha: a = 1
        }) => "hsla(" + Math.round(n) + ", " + Ot.transform(wi(r)) + ", " + Ot.transform(wi(s)) + ", " + wi(Mi.transform(a)) + ")"
    },
    We = {
        test: n => In.test(n) || Fl.test(n) || xr.test(n),
        parse: n => In.test(n) ? In.parse(n) : xr.test(n) ? xr.parse(n) : Fl.parse(n),
        transform: n => typeof n == "string" ? n : n.hasOwnProperty("red") ? In.transform(n) : xr.transform(n)
    },
    Cx = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function zx(n) {
    var r, s;
    return isNaN(n) && typeof n == "string" && (((r = n.match(Eu)) === null || r === void 0 ? void 0 : r.length) || 0) + (((s = n.match(Cx)) === null || s === void 0 ? void 0 : s.length) || 0) > 0
}
const am = "number",
    lm = "color",
    Px = "var",
    Rx = "var(",
    ih = "${}",
    Bx = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Ai(n) {
    const r = n.toString(),
        s = [],
        a = {
            color: [],
            number: [],
            var: []
        },
        l = [];
    let f = 0;
    const h = r.replace(Bx, p => (We.test(p) ? (a.color.push(f), l.push(lm), s.push(We.parse(p))) : p.startsWith(Rx) ? (a.var.push(f), l.push(Px), s.push(p)) : (a.number.push(f), l.push(am), s.push(parseFloat(p))), ++f, ih)).split(ih);
    return {
        values: s,
        split: h,
        indexes: a,
        types: l
    }
}

function um(n) {
    return Ai(n).values
}

function cm(n) {
    const {
        split: r,
        types: s
    } = Ai(n), a = r.length;
    return l => {
        let f = "";
        for (let d = 0; d < a; d++)
            if (f += r[d], l[d] !== void 0) {
                const h = s[d];
                h === am ? f += wi(l[d]) : h === lm ? f += We.transform(l[d]) : f += l[d]
            }
        return f
    }
}
const Dx = n => typeof n == "number" ? 0 : n;

function Fx(n) {
    const r = um(n);
    return cm(n)(r.map(Dx))
}
const Tn = {
        test: zx,
        parse: um,
        createTransformer: cm,
        getAnimatableNone: Fx
    },
    Ox = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Zx(n) {
    const [r, s] = n.slice(0, -1).split("(");
    if (r === "drop-shadow") return n;
    const [a] = s.match(Eu) || [];
    if (!a) return n;
    const l = s.replace(a, "");
    let f = Ox.has(r) ? 1 : 0;
    return a !== s && (f *= 100), r + "(" + f + l + ")"
}
const Jx = /\b([a-z-]*)\(.*?\)/gu,
    Ol = { ...Tn,
        getAnimatableNone: n => {
            const r = n.match(Jx);
            return r ? r.map(Zx).join(" ") : n
        }
    },
    _x = { ...du,
        color: We,
        backgroundColor: We,
        outlineColor: We,
        fill: We,
        stroke: We,
        borderColor: We,
        borderTopColor: We,
        borderRightColor: We,
        borderBottomColor: We,
        borderLeftColor: We,
        filter: Ol,
        WebkitFilter: Ol
    },
    Vu = n => _x[n];

function dm(n, r) {
    let s = Vu(n);
    return s !== Ol && (s = Tn), s.getAnimatableNone ? s.getAnimatableNone(r) : void 0
}
const Ix = new Set(["auto", "none", "0"]);

function Ux(n, r, s) {
    let a = 0,
        l;
    for (; a < n.length && !l;) {
        const f = n[a];
        typeof f == "string" && !Ix.has(f) && Ai(f).values.length && (l = n[a]), a++
    }
    if (l && s)
        for (const f of r) n[f] = dm(s, l)
}
const sh = n => n === Ar || n === ee,
    oh = (n, r) => parseFloat(n.split(", ")[r]),
    ah = (n, r) => (s, {
        transform: a
    }) => {
        if (a === "none" || !a) return 0;
        const l = a.match(/^matrix3d\((.+)\)$/u);
        if (l) return oh(l[1], r); {
            const f = a.match(/^matrix\((.+)\)$/u);
            return f ? oh(f[1], n) : 0
        }
    },
    Wx = new Set(["x", "y", "z"]),
    Gx = Vr.filter(n => !Wx.has(n));

function Qx(n) {
    const r = [];
    return Gx.forEach(s => {
        const a = n.getValue(s);
        a !== void 0 && (r.push([s, a.get()]), a.set(s.startsWith("scale") ? 1 : 0))
    }), r
}
const Nr = {
    width: ({
        x: n
    }, {
        paddingLeft: r = "0",
        paddingRight: s = "0"
    }) => n.max - n.min - parseFloat(r) - parseFloat(s),
    height: ({
        y: n
    }, {
        paddingTop: r = "0",
        paddingBottom: s = "0"
    }) => n.max - n.min - parseFloat(r) - parseFloat(s),
    top: (n, {
        top: r
    }) => parseFloat(r),
    left: (n, {
        left: r
    }) => parseFloat(r),
    bottom: ({
        y: n
    }, {
        top: r
    }) => parseFloat(r) + (n.max - n.min),
    right: ({
        x: n
    }, {
        left: r
    }) => parseFloat(r) + (n.max - n.min),
    x: ah(4, 13),
    y: ah(5, 14)
};
Nr.translateX = Nr.x;
Nr.translateY = Nr.y;
const Un = new Set;
let Zl = !1,
    Jl = !1;

function fm() {
    if (Jl) {
        const n = Array.from(Un).filter(a => a.needsMeasurement),
            r = new Set(n.map(a => a.element)),
            s = new Map;
        r.forEach(a => {
            const l = Qx(a);
            l.length && (s.set(a, l), a.render())
        }), n.forEach(a => a.measureInitialState()), r.forEach(a => {
            a.render();
            const l = s.get(a);
            l && l.forEach(([f, d]) => {
                var h;
                (h = a.getValue(f)) === null || h === void 0 || h.set(d)
            })
        }), n.forEach(a => a.measureEndState()), n.forEach(a => {
            a.suspendedScrollY !== void 0 && window.scrollTo(0, a.suspendedScrollY)
        })
    }
    Jl = !1, Zl = !1, Un.forEach(n => n.complete()), Un.clear()
}

function hm() {
    Un.forEach(n => {
        n.readKeyframes(), n.needsMeasurement && (Jl = !0)
    })
}

function Hx() {
    hm(), fm()
}
class Au {
    constructor(r, s, a, l, f, d = !1) {
        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...r], this.onComplete = s, this.name = a, this.motionValue = l, this.element = f, this.isAsync = d
    }
    scheduleResolve() {
        this.isScheduled = !0, this.isAsync ? (Un.add(this), Zl || (Zl = !0, xe.read(hm), xe.resolveKeyframes(fm))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: r,
            name: s,
            element: a,
            motionValue: l
        } = this;
        for (let f = 0; f < r.length; f++)
            if (r[f] === null)
                if (f === 0) {
                    const d = l ? .get(),
                        h = r[r.length - 1];
                    if (d !== void 0) r[0] = d;
                    else if (a && s) {
                        const p = a.readValue(s, h);
                        p != null && (r[0] = p)
                    }
                    r[0] === void 0 && (r[0] = h), l && d === void 0 && l.set(r[0])
                } else r[f] = r[f - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Un.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1, Un.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const pm = n => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
    Yx = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function $x(n) {
    const r = Yx.exec(n);
    if (!r) return [, ];
    const [, s, a, l] = r;
    return [`--${s??a}`, l]
}

function mm(n, r, s = 1) {
    const [a, l] = $x(n);
    if (!a) return;
    const f = window.getComputedStyle(r).getPropertyValue(a);
    if (f) {
        const d = f.trim();
        return pm(d) ? parseFloat(d) : d
    }
    return cu(l) ? mm(l, r, s + 1) : l
}
const ym = n => r => r.test(n),
    Xx = {
        test: n => n === "auto",
        parse: n => n
    },
    gm = [Ar, ee, Ot, wn, Zv, Ov, Xx],
    lh = n => gm.find(ym(n));
class vm extends Au {
    constructor(r, s, a, l, f) {
        super(r, s, a, l, f, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: r,
            element: s,
            name: a
        } = this;
        if (!s || !s.current) return;
        super.readKeyframes();
        for (let p = 0; p < r.length; p++) {
            let g = r[p];
            if (typeof g == "string" && (g = g.trim(), cu(g))) {
                const v = mm(g, s.current);
                v !== void 0 && (r[p] = v), p === r.length - 1 && (this.finalKeyframe = g)
            }
        }
        if (this.resolveNoneKeyframes(), !Hp.has(a) || r.length !== 2) return;
        const [l, f] = r, d = lh(l), h = lh(f);
        if (d !== h)
            if (sh(d) && sh(h))
                for (let p = 0; p < r.length; p++) {
                    const g = r[p];
                    typeof g == "string" && (r[p] = parseFloat(g))
                } else this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: r,
            name: s
        } = this, a = [];
        for (let l = 0; l < r.length; l++) Mx(r[l]) && a.push(l);
        a.length && Ux(r, a, s)
    }
    measureInitialState() {
        const {
            element: r,
            unresolvedKeyframes: s,
            name: a
        } = this;
        if (!r || !r.current) return;
        a === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Nr[a](r.measureViewportBox(), window.getComputedStyle(r.current)), s[0] = this.measuredOrigin;
        const l = s[s.length - 1];
        l !== void 0 && r.getValue(a, l).jump(l, !1)
    }
    measureEndState() {
        var r;
        const {
            element: s,
            name: a,
            unresolvedKeyframes: l
        } = this;
        if (!s || !s.current) return;
        const f = s.getValue(a);
        f && f.jump(this.measuredOrigin, !1);
        const d = l.length - 1,
            h = l[d];
        l[d] = Nr[a](s.measureViewportBox(), window.getComputedStyle(s.current)), h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h), !((r = this.removedTransforms) === null || r === void 0) && r.length && this.removedTransforms.forEach(([p, g]) => {
            s.getValue(p).set(g)
        }), this.resolveNoneKeyframes()
    }
}
const uh = (n, r) => r === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (Tn.test(n) || n === "0") && !n.startsWith("url("));

function Kx(n) {
    const r = n[0];
    if (n.length === 1) return !0;
    for (let s = 0; s < n.length; s++)
        if (n[s] !== r) return !0
}

function qx(n, r, s, a) {
    const l = n[0];
    if (l === null) return !1;
    if (r === "display" || r === "visibility") return !0;
    const f = n[n.length - 1],
        d = uh(l, r),
        h = uh(f, r);
    return !d || !h ? !1 : Kx(n) || (s === "spring" || vu(s)) && a
}
const ew = n => n !== null;

function mo(n, {
    repeat: r,
    repeatType: s = "loop"
}, a) {
    const l = n.filter(ew),
        f = r && s !== "loop" && r % 2 === 1 ? 0 : l.length - 1;
    return !f || a === void 0 ? l[f] : a
}
const tw = 40;
class xm {
    constructor({
        autoplay: r = !0,
        delay: s = 0,
        type: a = "keyframes",
        repeat: l = 0,
        repeatDelay: f = 0,
        repeatType: d = "loop",
        ...h
    }) {
        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Zt.now(), this.options = {
            autoplay: r,
            delay: s,
            type: a,
            repeat: l,
            repeatDelay: f,
            repeatType: d,
            ...h
        }, this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > tw ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && Hx(), this._resolved
    }
    onKeyframesResolved(r, s) {
        this.resolvedAt = Zt.now(), this.hasAttemptedResolve = !0;
        const {
            name: a,
            type: l,
            velocity: f,
            delay: d,
            onComplete: h,
            onUpdate: p,
            isGenerator: g
        } = this.options;
        if (!g && !qx(r, a, l, f))
            if (d) this.options.duration = 0;
            else {
                p && p(mo(r, this.options, s)), h && h(), this.resolveFinishedPromise();
                return
            }
        const v = this.initPlayback(r, s);
        v !== !1 && (this._resolved = {
            keyframes: r,
            finalKeyframe: s,
            ...v
        }, this.onPostResolved())
    }
    onPostResolved() {}
    then(r, s) {
        return this.currentFinishedPromise.then(r, s)
    }
    flatten() {
        this.options.type = "keyframes", this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(r => {
            this.resolveFinishedPromise = r
        })
    }
}
const Ne = (n, r, s) => n + (r - n) * s;

function wl(n, r, s) {
    return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? n + (r - n) * 6 * s : s < 1 / 2 ? r : s < 2 / 3 ? n + (r - n) * (2 / 3 - s) * 6 : n
}

function nw({
    hue: n,
    saturation: r,
    lightness: s,
    alpha: a
}) {
    n /= 360, r /= 100, s /= 100;
    let l = 0,
        f = 0,
        d = 0;
    if (!r) l = f = d = s;
    else {
        const h = s < .5 ? s * (1 + r) : s + r - s * r,
            p = 2 * s - h;
        l = wl(p, h, n + 1 / 3), f = wl(p, h, n), d = wl(p, h, n - 1 / 3)
    }
    return {
        red: Math.round(l * 255),
        green: Math.round(f * 255),
        blue: Math.round(d * 255),
        alpha: a
    }
}

function so(n, r) {
    return s => s > 0 ? r : n
}
const Ll = (n, r, s) => {
        const a = n * n,
            l = s * (r * r - a) + a;
        return l < 0 ? 0 : Math.sqrt(l)
    },
    rw = [Fl, In, xr],
    iw = n => rw.find(r => r.test(n));

function ch(n) {
    const r = iw(n);
    if (!r) return !1;
    let s = r.parse(n);
    return r === xr && (s = nw(s)), s
}
const dh = (n, r) => {
        const s = ch(n),
            a = ch(r);
        if (!s || !a) return so(n, r);
        const l = { ...s
        };
        return f => (l.red = Ll(s.red, a.red, f), l.green = Ll(s.green, a.green, f), l.blue = Ll(s.blue, a.blue, f), l.alpha = Ne(s.alpha, a.alpha, f), In.transform(l))
    },
    sw = (n, r) => s => r(n(s)),
    Bi = (...n) => n.reduce(sw),
    _l = new Set(["none", "hidden"]);

function ow(n, r) {
    return _l.has(n) ? s => s <= 0 ? n : r : s => s >= 1 ? r : n
}

function aw(n, r) {
    return s => Ne(n, r, s)
}

function ku(n) {
    return typeof n == "number" ? aw : typeof n == "string" ? cu(n) ? so : We.test(n) ? dh : cw : Array.isArray(n) ? wm : typeof n == "object" ? We.test(n) ? dh : lw : so
}

function wm(n, r) {
    const s = [...n],
        a = s.length,
        l = n.map((f, d) => ku(f)(f, r[d]));
    return f => {
        for (let d = 0; d < a; d++) s[d] = l[d](f);
        return s
    }
}

function lw(n, r) {
    const s = { ...n,
            ...r
        },
        a = {};
    for (const l in s) n[l] !== void 0 && r[l] !== void 0 && (a[l] = ku(n[l])(n[l], r[l]));
    return l => {
        for (const f in a) s[f] = a[f](l);
        return s
    }
}

function uw(n, r) {
    var s;
    const a = [],
        l = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let f = 0; f < r.values.length; f++) {
        const d = r.types[f],
            h = n.indexes[d][l[d]],
            p = (s = n.values[h]) !== null && s !== void 0 ? s : 0;
        a[f] = p, l[d]++
    }
    return a
}
const cw = (n, r) => {
    const s = Tn.createTransformer(r),
        a = Ai(n),
        l = Ai(r);
    return a.indexes.var.length === l.indexes.var.length && a.indexes.color.length === l.indexes.color.length && a.indexes.number.length >= l.indexes.number.length ? _l.has(n) && !l.values.length || _l.has(r) && !a.values.length ? ow(n, r) : Bi(wm(uw(a, l), l.values), s) : so(n, r)
};

function Lm(n, r, s) {
    return typeof n == "number" && typeof r == "number" && typeof s == "number" ? Ne(n, r, s) : ku(n)(n, r)
}
const dw = 5;

function jm(n, r, s) {
    const a = Math.max(r - dw, 0);
    return Yp(s - n(a), r - a)
}
const Me = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    jl = .001;

function fw({
    duration: n = Me.duration,
    bounce: r = Me.bounce,
    velocity: s = Me.velocity,
    mass: a = Me.mass
}) {
    let l, f, d = 1 - r;
    d = Kt(Me.minDamping, Me.maxDamping, d), n = Kt(Me.minDuration, Me.maxDuration, Xt(n)), d < 1 ? (l = g => {
        const v = g * d,
            x = v * n,
            w = v - s,
            T = Il(g, d),
            V = Math.exp(-x);
        return jl - w / T * V
    }, f = g => {
        const x = g * d * n,
            w = x * s + s,
            T = Math.pow(d, 2) * Math.pow(g, 2) * n,
            V = Math.exp(-x),
            A = Il(Math.pow(g, 2), d);
        return (-l(g) + jl > 0 ? -1 : 1) * ((w - T) * V) / A
    }) : (l = g => {
        const v = Math.exp(-g * n),
            x = (g - s) * n + 1;
        return -jl + v * x
    }, f = g => {
        const v = Math.exp(-g * n),
            x = (s - g) * (n * n);
        return v * x
    });
    const h = 5 / n,
        p = pw(l, f, h);
    if (n = $t(n), isNaN(p)) return {
        stiffness: Me.stiffness,
        damping: Me.damping,
        duration: n
    }; {
        const g = Math.pow(p, 2) * a;
        return {
            stiffness: g,
            damping: d * 2 * Math.sqrt(a * g),
            duration: n
        }
    }
}
const hw = 12;

function pw(n, r, s) {
    let a = s;
    for (let l = 1; l < hw; l++) a = a - n(a) / r(a);
    return a
}

function Il(n, r) {
    return n * Math.sqrt(1 - r * r)
}
const mw = ["duration", "bounce"],
    yw = ["stiffness", "damping", "mass"];

function fh(n, r) {
    return r.some(s => n[s] !== void 0)
}

function gw(n) {
    let r = {
        velocity: Me.velocity,
        stiffness: Me.stiffness,
        damping: Me.damping,
        mass: Me.mass,
        isResolvedFromDuration: !1,
        ...n
    };
    if (!fh(n, yw) && fh(n, mw))
        if (n.visualDuration) {
            const s = n.visualDuration,
                a = 2 * Math.PI / (s * 1.2),
                l = a * a,
                f = 2 * Kt(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(l);
            r = { ...r,
                mass: Me.mass,
                stiffness: l,
                damping: f
            }
        } else {
            const s = fw(n);
            r = { ...r,
                ...s,
                mass: Me.mass
            }, r.isResolvedFromDuration = !0
        }
    return r
}

function Sm(n = Me.visualDuration, r = Me.bounce) {
    const s = typeof n != "object" ? {
        visualDuration: n,
        keyframes: [0, 1],
        bounce: r
    } : n;
    let {
        restSpeed: a,
        restDelta: l
    } = s;
    const f = s.keyframes[0],
        d = s.keyframes[s.keyframes.length - 1],
        h = {
            done: !1,
            value: f
        },
        {
            stiffness: p,
            damping: g,
            mass: v,
            duration: x,
            velocity: w,
            isResolvedFromDuration: T
        } = gw({ ...s,
            velocity: -Xt(s.velocity || 0)
        }),
        V = w || 0,
        A = g / (2 * Math.sqrt(p * v)),
        k = d - f,
        z = Xt(Math.sqrt(p / v)),
        O = Math.abs(k) < 5;
    a || (a = O ? Me.restSpeed.granular : Me.restSpeed.default), l || (l = O ? Me.restDelta.granular : Me.restDelta.default);
    let Z;
    if (A < 1) {
        const U = Il(z, A);
        Z = ne => {
            const ae = Math.exp(-A * z * ne);
            return d - ae * ((V + A * z * k) / U * Math.sin(U * ne) + k * Math.cos(U * ne))
        }
    } else if (A === 1) Z = U => d - Math.exp(-z * U) * (k + (V + z * k) * U);
    else {
        const U = z * Math.sqrt(A * A - 1);
        Z = ne => {
            const ae = Math.exp(-A * z * ne),
                X = Math.min(U * ne, 300);
            return d - ae * ((V + A * z * k) * Math.sinh(X) + U * k * Math.cosh(X)) / U
        }
    }
    const Y = {
        calculatedDuration: T && x || null,
        next: U => {
            const ne = Z(U);
            if (T) h.done = U >= x;
            else {
                let ae = 0;
                A < 1 && (ae = U === 0 ? $t(V) : jm(Z, U, ne));
                const X = Math.abs(ae) <= a,
                    ye = Math.abs(d - ne) <= l;
                h.done = X && ye
            }
            return h.value = h.done ? d : ne, h
        },
        toString: () => {
            const U = Math.min(Jp(Y), Rl),
                ne = _p(ae => Y.next(U * ae).value, U, 30);
            return U + "ms " + ne
        }
    };
    return Y
}

function hh({
    keyframes: n,
    velocity: r = 0,
    power: s = .8,
    timeConstant: a = 325,
    bounceDamping: l = 10,
    bounceStiffness: f = 500,
    modifyTarget: d,
    min: h,
    max: p,
    restDelta: g = .5,
    restSpeed: v
}) {
    const x = n[0],
        w = {
            done: !1,
            value: x
        },
        T = X => h !== void 0 && X < h || p !== void 0 && X > p,
        V = X => h === void 0 ? p : p === void 0 || Math.abs(h - X) < Math.abs(p - X) ? h : p;
    let A = s * r;
    const k = x + A,
        z = d === void 0 ? k : d(k);
    z !== k && (A = z - x);
    const O = X => -A * Math.exp(-X / a),
        Z = X => z + O(X),
        Y = X => {
            const ye = O(X),
                we = Z(X);
            w.done = Math.abs(ye) <= g, w.value = w.done ? z : we
        };
    let U, ne;
    const ae = X => {
        T(w.value) && (U = X, ne = Sm({
            keyframes: [w.value, V(w.value)],
            velocity: jm(Z, X, w.value),
            damping: l,
            stiffness: f,
            restDelta: g,
            restSpeed: v
        }))
    };
    return ae(0), {
        calculatedDuration: null,
        next: X => {
            let ye = !1;
            return !ne && U === void 0 && (ye = !0, Y(X), ae(X)), U !== void 0 && X >= U ? ne.next(X - U) : (!ye && Y(X), w)
        }
    }
}
const vw = Ri(.42, 0, 1, 1),
    xw = Ri(0, 0, .58, 1),
    Tm = Ri(.42, 0, .58, 1),
    ww = n => Array.isArray(n) && typeof n[0] != "number",
    Lw = {
        linear: ht,
        easeIn: vw,
        easeInOut: Tm,
        easeOut: xw,
        circIn: Nu,
        circInOut: im,
        circOut: rm,
        backIn: Tu,
        backInOut: tm,
        backOut: em,
        anticipate: nm
    },
    ph = n => {
        if (xu(n)) {
            Lp(n.length === 4);
            const [r, s, a, l] = n;
            return Ri(r, s, a, l)
        } else if (typeof n == "string") return Lw[n];
        return n
    };

function jw(n, r, s) {
    const a = [],
        l = s || Lm,
        f = n.length - 1;
    for (let d = 0; d < f; d++) {
        let h = l(n[d], n[d + 1]);
        if (r) {
            const p = Array.isArray(r) ? r[d] || ht : r;
            h = Bi(p, h)
        }
        a.push(h)
    }
    return a
}

function Sw(n, r, {
    clamp: s = !0,
    ease: a,
    mixer: l
} = {}) {
    const f = n.length;
    if (Lp(f === r.length), f === 1) return () => r[0];
    if (f === 2 && r[0] === r[1]) return () => r[1];
    const d = n[0] === n[1];
    n[0] > n[f - 1] && (n = [...n].reverse(), r = [...r].reverse());
    const h = jw(r, a, l),
        p = h.length,
        g = v => {
            if (d && v < n[0]) return r[0];
            let x = 0;
            if (p > 1)
                for (; x < n.length - 2 && !(v < n[x + 1]); x++);
            const w = Sr(n[x], n[x + 1], v);
            return h[x](w)
        };
    return s ? v => g(Kt(n[0], n[f - 1], v)) : g
}

function Tw(n, r) {
    const s = n[n.length - 1];
    for (let a = 1; a <= r; a++) {
        const l = Sr(0, r, a);
        n.push(Ne(s, 1, l))
    }
}

function Nw(n) {
    const r = [0];
    return Tw(r, n.length - 1), r
}

function Ew(n, r) {
    return n.map(s => s * r)
}

function Mw(n, r) {
    return n.map(() => r || Tm).splice(0, n.length - 1)
}

function oo({
    duration: n = 300,
    keyframes: r,
    times: s,
    ease: a = "easeInOut"
}) {
    const l = ww(a) ? a.map(ph) : ph(a),
        f = {
            done: !1,
            value: r[0]
        },
        d = Ew(s && s.length === r.length ? s : Nw(r), n),
        h = Sw(d, r, {
            ease: Array.isArray(l) ? l : Mw(r, l)
        });
    return {
        calculatedDuration: n,
        next: p => (f.value = h(p), f.done = p >= n, f)
    }
}
const Vw = n => {
        const r = ({
            timestamp: s
        }) => n(s);
        return {
            start: () => xe.update(r, !0),
            stop: () => Sn(r),
            now: () => Ze.isProcessing ? Ze.timestamp : Zt.now()
        }
    },
    Aw = {
        decay: hh,
        inertia: hh,
        tween: oo,
        keyframes: oo,
        spring: Sm
    },
    kw = n => n / 100;
class bu extends xm {
    constructor(r) {
        super(r), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
            if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
            this.teardown();
            const {
                onStop: p
            } = this.options;
            p && p()
        };
        const {
            name: s,
            motionValue: a,
            element: l,
            keyframes: f
        } = this.options, d = l ? .KeyframeResolver || Au, h = (p, g) => this.onKeyframesResolved(p, g);
        this.resolver = new d(f, h, s, a, l), this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(r) {
        const {
            type: s = "keyframes",
            repeat: a = 0,
            repeatDelay: l = 0,
            repeatType: f,
            velocity: d = 0
        } = this.options, h = vu(s) ? s : Aw[s] || oo;
        let p, g;
        h !== oo && typeof r[0] != "number" && (p = Bi(kw, Lm(r[0], r[1])), r = [0, 100]);
        const v = h({ ...this.options,
            keyframes: r
        });
        f === "mirror" && (g = h({ ...this.options,
            keyframes: [...r].reverse(),
            velocity: -d
        })), v.calculatedDuration === null && (v.calculatedDuration = Jp(v));
        const {
            calculatedDuration: x
        } = v, w = x + l, T = w * (a + 1) - l;
        return {
            generator: v,
            mirroredGenerator: g,
            mapPercentToKeyframes: p,
            calculatedDuration: x,
            resolvedDuration: w,
            totalDuration: T
        }
    }
    onPostResolved() {
        const {
            autoplay: r = !0
        } = this.options;
        this.play(), this.pendingPlayState === "paused" || !r ? this.pause() : this.state = this.pendingPlayState
    }
    tick(r, s = !1) {
        const {
            resolved: a
        } = this;
        if (!a) {
            const {
                keyframes: X
            } = this.options;
            return {
                done: !0,
                value: X[X.length - 1]
            }
        }
        const {
            finalKeyframe: l,
            generator: f,
            mirroredGenerator: d,
            mapPercentToKeyframes: h,
            keyframes: p,
            calculatedDuration: g,
            totalDuration: v,
            resolvedDuration: x
        } = a;
        if (this.startTime === null) return f.next(0);
        const {
            delay: w,
            repeat: T,
            repeatType: V,
            repeatDelay: A,
            onUpdate: k
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, r) : this.speed < 0 && (this.startTime = Math.min(r - v / this.speed, this.startTime)), s ? this.currentTime = r : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(r - this.startTime) * this.speed;
        const z = this.currentTime - w * (this.speed >= 0 ? 1 : -1),
            O = this.speed >= 0 ? z < 0 : z > v;
        this.currentTime = Math.max(z, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = v);
        let Z = this.currentTime,
            Y = f;
        if (T) {
            const X = Math.min(this.currentTime, v) / x;
            let ye = Math.floor(X),
                we = X % 1;
            !we && X >= 1 && (we = 1), we === 1 && ye--, ye = Math.min(ye, T + 1), !!(ye % 2) && (V === "reverse" ? (we = 1 - we, A && (we -= A / x)) : V === "mirror" && (Y = d)), Z = Kt(0, 1, we) * x
        }
        const U = O ? {
            done: !1,
            value: p[0]
        } : Y.next(Z);
        h && (U.value = h(U.value));
        let {
            done: ne
        } = U;
        !O && g !== null && (ne = this.speed >= 0 ? this.currentTime >= v : this.currentTime <= 0);
        const ae = this.holdTime === null && (this.state === "finished" || this.state === "running" && ne);
        return ae && l !== void 0 && (U.value = mo(p, this.options, l)), k && k(U.value), ae && this.finish(), U
    }
    get duration() {
        const {
            resolved: r
        } = this;
        return r ? Xt(r.calculatedDuration) : 0
    }
    get time() {
        return Xt(this.currentTime)
    }
    set time(r) {
        r = $t(r), this.currentTime = r, this.holdTime !== null || this.speed === 0 ? this.holdTime = r : this.driver && (this.startTime = this.driver.now() - r / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(r) {
        const s = this.playbackSpeed !== r;
        this.playbackSpeed = r, s && (this.time = Xt(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped) return;
        const {
            driver: r = Vw,
            onPlay: s,
            startTime: a
        } = this.options;
        this.driver || (this.driver = r(f => this.tick(f))), s && s();
        const l = this.driver.now();
        this.holdTime !== null ? this.startTime = l - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = l) : this.startTime = a ? ? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        var r;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused", this.holdTime = (r = this.currentTime) !== null && r !== void 0 ? r : 0
    }
    complete() {
        this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
    }
    finish() {
        this.teardown(), this.state = "finished";
        const {
            onComplete: r
        } = this.options;
        r && r()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(r) {
        return this.startTime = 0, this.tick(r, !0)
    }
}
const bw = new Set(["opacity", "clipPath", "filter", "transform"]);

function Cw(n, r, s, {
    delay: a = 0,
    duration: l = 300,
    repeat: f = 0,
    repeatType: d = "loop",
    ease: h = "easeInOut",
    times: p
} = {}) {
    const g = {
        [r]: s
    };
    p && (g.offset = p);
    const v = Up(h, l);
    return Array.isArray(v) && (g.easing = v), n.animate(g, {
        delay: a,
        duration: l,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: f + 1,
        direction: d === "reverse" ? "alternate" : "normal"
    })
}
const zw = ru(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    ao = 10,
    Pw = 2e4;

function Rw(n) {
    return vu(n.type) || n.type === "spring" || !Ip(n.ease)
}

function Bw(n, r) {
    const s = new bu({ ...r,
        keyframes: n,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let a = {
        done: !1,
        value: n[0]
    };
    const l = [];
    let f = 0;
    for (; !a.done && f < Pw;) a = s.sample(f), l.push(a.value), f += ao;
    return {
        times: void 0,
        keyframes: l,
        duration: f - ao,
        ease: "linear"
    }
}
const Nm = {
    anticipate: nm,
    backInOut: tm,
    circInOut: im
};

function Dw(n) {
    return n in Nm
}
class mh extends xm {
    constructor(r) {
        super(r);
        const {
            name: s,
            motionValue: a,
            element: l,
            keyframes: f
        } = this.options;
        this.resolver = new vm(f, (d, h) => this.onKeyframesResolved(d, h), s, a, l), this.resolver.scheduleResolve()
    }
    initPlayback(r, s) {
        let {
            duration: a = 300,
            times: l,
            ease: f,
            type: d,
            motionValue: h,
            name: p,
            startTime: g
        } = this.options;
        if (!h.owner || !h.owner.current) return !1;
        if (typeof f == "string" && io() && Dw(f) && (f = Nm[f]), Rw(this.options)) {
            const {
                onComplete: x,
                onUpdate: w,
                motionValue: T,
                element: V,
                ...A
            } = this.options, k = Bw(r, A);
            r = k.keyframes, r.length === 1 && (r[1] = r[0]), a = k.duration, l = k.times, f = k.ease, d = "keyframes"
        }
        const v = Cw(h.owner.current, p, r, { ...this.options,
            duration: a,
            times: l,
            ease: f
        });
        return v.startTime = g ? ? this.calcStartTime(), this.pendingTimeline ? (qf(v, this.pendingTimeline), this.pendingTimeline = void 0) : v.onfinish = () => {
            const {
                onComplete: x
            } = this.options;
            h.set(mo(r, this.options, s)), x && x(), this.cancel(), this.resolveFinishedPromise()
        }, {
            animation: v,
            duration: a,
            times: l,
            type: d,
            ease: f,
            keyframes: r
        }
    }
    get duration() {
        const {
            resolved: r
        } = this;
        if (!r) return 0;
        const {
            duration: s
        } = r;
        return Xt(s)
    }
    get time() {
        const {
            resolved: r
        } = this;
        if (!r) return 0;
        const {
            animation: s
        } = r;
        return Xt(s.currentTime || 0)
    }
    set time(r) {
        const {
            resolved: s
        } = this;
        if (!s) return;
        const {
            animation: a
        } = s;
        a.currentTime = $t(r)
    }
    get speed() {
        const {
            resolved: r
        } = this;
        if (!r) return 1;
        const {
            animation: s
        } = r;
        return s.playbackRate
    }
    set speed(r) {
        const {
            resolved: s
        } = this;
        if (!s) return;
        const {
            animation: a
        } = s;
        a.playbackRate = r
    }
    get state() {
        const {
            resolved: r
        } = this;
        if (!r) return "idle";
        const {
            animation: s
        } = r;
        return s.playState
    }
    get startTime() {
        const {
            resolved: r
        } = this;
        if (!r) return null;
        const {
            animation: s
        } = r;
        return s.startTime
    }
    attachTimeline(r) {
        if (!this._resolved) this.pendingTimeline = r;
        else {
            const {
                resolved: s
            } = this;
            if (!s) return ht;
            const {
                animation: a
            } = s;
            qf(a, r)
        }
        return ht
    }
    play() {
        if (this.isStopped) return;
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: s
        } = r;
        s.playState === "finished" && this.updateFinishedPromise(), s.play()
    }
    pause() {
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: s
        } = r;
        s.pause()
    }
    stop() {
        if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const {
            resolved: r
        } = this;
        if (!r) return;
        const {
            animation: s,
            keyframes: a,
            duration: l,
            type: f,
            ease: d,
            times: h
        } = r;
        if (s.playState === "idle" || s.playState === "finished") return;
        if (this.time) {
            const {
                motionValue: g,
                onUpdate: v,
                onComplete: x,
                element: w,
                ...T
            } = this.options, V = new bu({ ...T,
                keyframes: a,
                duration: l,
                type: f,
                ease: d,
                times: h,
                isGenerator: !0
            }), A = $t(this.time);
            g.setWithVelocity(V.sample(A - ao).value, V.sample(A).value, ao)
        }
        const {
            onStop: p
        } = this.options;
        p && p(), this.cancel()
    }
    complete() {
        const {
            resolved: r
        } = this;
        r && r.animation.finish()
    }
    cancel() {
        const {
            resolved: r
        } = this;
        r && r.animation.cancel()
    }
    static supports(r) {
        const {
            motionValue: s,
            name: a,
            repeatDelay: l,
            repeatType: f,
            damping: d,
            type: h
        } = r;
        if (!s || !s.owner || !(s.owner.current instanceof HTMLElement)) return !1;
        const {
            onUpdate: p,
            transformTemplate: g
        } = s.owner.getProps();
        return zw() && a && bw.has(a) && !p && !g && !l && f !== "mirror" && d !== 0 && h !== "inertia"
    }
}
const Fw = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    Ow = n => ({
        type: "spring",
        stiffness: 550,
        damping: n === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Zw = {
        type: "keyframes",
        duration: .8
    },
    Jw = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    _w = (n, {
        keyframes: r
    }) => r.length > 2 ? Zw : Wn.has(n) ? n.startsWith("scale") ? Ow(r[1]) : Fw : Jw;

function Iw({
    when: n,
    delay: r,
    delayChildren: s,
    staggerChildren: a,
    staggerDirection: l,
    repeat: f,
    repeatType: d,
    repeatDelay: h,
    from: p,
    elapsed: g,
    ...v
}) {
    return !!Object.keys(v).length
}
const Cu = (n, r, s, a = {}, l, f) => d => {
    const h = gu(a, n) || {},
        p = h.delay || a.delay || 0;
    let {
        elapsed: g = 0
    } = a;
    g = g - $t(p);
    let v = {
        keyframes: Array.isArray(s) ? s : [null, s],
        ease: "easeOut",
        velocity: r.getVelocity(),
        ...h,
        delay: -g,
        onUpdate: w => {
            r.set(w), h.onUpdate && h.onUpdate(w)
        },
        onComplete: () => {
            d(), h.onComplete && h.onComplete()
        },
        name: n,
        motionValue: r,
        element: f ? void 0 : l
    };
    Iw(h) || (v = { ...v,
        ..._w(n, v)
    }), v.duration && (v.duration = $t(v.duration)), v.repeatDelay && (v.repeatDelay = $t(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
    let x = !1;
    if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (v.duration = 0, v.delay === 0 && (x = !0)), x && !f && r.get() !== void 0) {
        const w = mo(v.keyframes, h);
        if (w !== void 0) return xe.update(() => {
            v.onUpdate(w), v.onComplete()
        }), new lx([])
    }
    return !f && mh.supports(v) ? new mh(v) : new bu(v)
};

function Uw({
    protectedKeys: n,
    needsAnimating: r
}, s) {
    const a = n.hasOwnProperty(s) && r[s] !== !0;
    return r[s] = !1, a
}

function Em(n, r, {
    delay: s = 0,
    transitionOverride: a,
    type: l
} = {}) {
    var f;
    let {
        transition: d = n.getDefaultTransition(),
        transitionEnd: h,
        ...p
    } = r;
    a && (d = a);
    const g = [],
        v = l && n.animationState && n.animationState.getState()[l];
    for (const x in p) {
        const w = n.getValue(x, (f = n.latestValues[x]) !== null && f !== void 0 ? f : null),
            T = p[x];
        if (T === void 0 || v && Uw(v, x)) continue;
        const V = {
            delay: s,
            ...gu(d || {}, x)
        };
        let A = !1;
        if (window.MotionHandoffAnimation) {
            const z = $p(n);
            if (z) {
                const O = window.MotionHandoffAnimation(z, x, xe);
                O !== null && (V.startTime = O, A = !0)
            }
        }
        Dl(n, x), w.start(Cu(x, w, T, n.shouldReduceMotion && Hp.has(x) ? {
            type: !1
        } : V, n, A));
        const k = w.animation;
        k && g.push(k)
    }
    return h && Promise.all(g).then(() => {
        xe.update(() => {
            h && jx(n, h)
        })
    }), g
}

function Ul(n, r, s = {}) {
    var a;
    const l = po(n, r, s.type === "exit" ? (a = n.presenceContext) === null || a === void 0 ? void 0 : a.custom : void 0);
    let {
        transition: f = n.getDefaultTransition() || {}
    } = l || {};
    s.transitionOverride && (f = s.transitionOverride);
    const d = l ? () => Promise.all(Em(n, l, s)) : () => Promise.resolve(),
        h = n.variantChildren && n.variantChildren.size ? (g = 0) => {
            const {
                delayChildren: v = 0,
                staggerChildren: x,
                staggerDirection: w
            } = f;
            return Ww(n, r, v + g, x, w, s)
        } : () => Promise.resolve(),
        {
            when: p
        } = f;
    if (p) {
        const [g, v] = p === "beforeChildren" ? [d, h] : [h, d];
        return g().then(() => v())
    } else return Promise.all([d(), h(s.delay)])
}

function Ww(n, r, s = 0, a = 0, l = 1, f) {
    const d = [],
        h = (n.variantChildren.size - 1) * a,
        p = l === 1 ? (g = 0) => g * a : (g = 0) => h - g * a;
    return Array.from(n.variantChildren).sort(Gw).forEach((g, v) => {
        g.notify("AnimationStart", r), d.push(Ul(g, r, { ...f,
            delay: s + p(v)
        }).then(() => g.notify("AnimationComplete", r)))
    }), Promise.all(d)
}

function Gw(n, r) {
    return n.sortNodePosition(r)
}

function Qw(n, r, s = {}) {
    n.notify("AnimationStart", r);
    let a;
    if (Array.isArray(r)) {
        const l = r.map(f => Ul(n, f, s));
        a = Promise.all(l)
    } else if (typeof r == "string") a = Ul(n, r, s);
    else {
        const l = typeof r == "function" ? po(n, r, s.custom) : r;
        a = Promise.all(Em(n, l, s))
    }
    return a.then(() => {
        n.notify("AnimationComplete", r)
    })
}
const Hw = su.length;

function Mm(n) {
    if (!n) return;
    if (!n.isControllingVariants) {
        const s = n.parent ? Mm(n.parent) || {} : {};
        return n.props.initial !== void 0 && (s.initial = n.props.initial), s
    }
    const r = {};
    for (let s = 0; s < Hw; s++) {
        const a = su[s],
            l = n.props[a];
        (Ei(l) || l === !1) && (r[a] = l)
    }
    return r
}
const Yw = [...iu].reverse(),
    $w = iu.length;

function Xw(n) {
    return r => Promise.all(r.map(({
        animation: s,
        options: a
    }) => Qw(n, s, a)))
}

function Kw(n) {
    let r = Xw(n),
        s = yh(),
        a = !0;
    const l = p => (g, v) => {
        var x;
        const w = po(n, v, p === "exit" ? (x = n.presenceContext) === null || x === void 0 ? void 0 : x.custom : void 0);
        if (w) {
            const {
                transition: T,
                transitionEnd: V,
                ...A
            } = w;
            g = { ...g,
                ...A,
                ...V
            }
        }
        return g
    };

    function f(p) {
        r = p(n)
    }

    function d(p) {
        const {
            props: g
        } = n, v = Mm(n.parent) || {}, x = [], w = new Set;
        let T = {},
            V = 1 / 0;
        for (let k = 0; k < $w; k++) {
            const z = Yw[k],
                O = s[z],
                Z = g[z] !== void 0 ? g[z] : v[z],
                Y = Ei(Z),
                U = z === p ? O.isActive : null;
            U === !1 && (V = k);
            let ne = Z === v[z] && Z !== g[z] && Y;
            if (ne && a && n.manuallyAnimateOnMount && (ne = !1), O.protectedKeys = { ...T
                }, !O.isActive && U === null || !Z && !O.prevProp || fo(Z) || typeof Z == "boolean") continue;
            const ae = qw(O.prevProp, Z);
            let X = ae || z === p && O.isActive && !ne && Y || k > V && Y,
                ye = !1;
            const we = Array.isArray(Z) ? Z : [Z];
            let Ke = we.reduce(l(z), {});
            U === !1 && (Ke = {});
            const {
                prevResolvedValues: at = {}
            } = O, He = { ...at,
                ...Ke
            }, qe = ie => {
                X = !0, w.has(ie) && (ye = !0, w.delete(ie)), O.needsAnimating[ie] = !0;
                const J = n.getValue(ie);
                J && (J.liveStyle = !1)
            };
            for (const ie in He) {
                const J = Ke[ie],
                    $ = at[ie];
                if (T.hasOwnProperty(ie)) continue;
                let I = !1;
                Pl(J) && Pl($) ? I = !Zp(J, $) : I = J !== $, I ? J != null ? qe(ie) : w.add(ie) : J !== void 0 && w.has(ie) ? qe(ie) : O.protectedKeys[ie] = !0
            }
            O.prevProp = Z, O.prevResolvedValues = Ke, O.isActive && (T = { ...T,
                ...Ke
            }), a && n.blockInitialAnimation && (X = !1), X && (!(ne && ae) || ye) && x.push(...we.map(ie => ({
                animation: ie,
                options: {
                    type: z
                }
            })))
        }
        if (w.size) {
            const k = {};
            w.forEach(z => {
                const O = n.getBaseTarget(z),
                    Z = n.getValue(z);
                Z && (Z.liveStyle = !0), k[z] = O ? ? null
            }), x.push({
                animation: k
            })
        }
        let A = !!x.length;
        return a && (g.initial === !1 || g.initial === g.animate) && !n.manuallyAnimateOnMount && (A = !1), a = !1, A ? r(x) : Promise.resolve()
    }

    function h(p, g) {
        var v;
        if (s[p].isActive === g) return Promise.resolve();
        (v = n.variantChildren) === null || v === void 0 || v.forEach(w => {
            var T;
            return (T = w.animationState) === null || T === void 0 ? void 0 : T.setActive(p, g)
        }), s[p].isActive = g;
        const x = d(p);
        for (const w in s) s[w].protectedKeys = {};
        return x
    }
    return {
        animateChanges: d,
        setActive: h,
        setAnimateFunction: f,
        getState: () => s,
        reset: () => {
            s = yh(), a = !0
        }
    }
}

function qw(n, r) {
    return typeof r == "string" ? r !== n : Array.isArray(r) ? !Zp(r, n) : !1
}

function Zn(n = !1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function yh() {
    return {
        animate: Zn(!0),
        whileInView: Zn(),
        whileHover: Zn(),
        whileTap: Zn(),
        whileDrag: Zn(),
        whileFocus: Zn(),
        exit: Zn()
    }
}
class En {
    constructor(r) {
        this.isMounted = !1, this.node = r
    }
    update() {}
}
class e1 extends En {
    constructor(r) {
        super(r), r.animationState || (r.animationState = Kw(r))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: r
        } = this.node.getProps();
        fo(r) && (this.unmountControls = r.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: r
        } = this.node.getProps(), {
            animate: s
        } = this.node.prevProps || {};
        r !== s && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var r;
        this.node.animationState.reset(), (r = this.unmountControls) === null || r === void 0 || r.call(this)
    }
}
let t1 = 0;
class n1 extends En {
    constructor() {
        super(...arguments), this.id = t1++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: r,
            onExitComplete: s
        } = this.node.presenceContext, {
            isPresent: a
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || r === a) return;
        const l = this.node.animationState.setActive("exit", !r);
        s && !r && l.then(() => s(this.id))
    }
    mount() {
        const {
            register: r
        } = this.node.presenceContext || {};
        r && (this.unmount = r(this.id))
    }
    unmount() {}
}
const r1 = {
    animation: {
        Feature: e1
    },
    exit: {
        Feature: n1
    }
};

function ki(n, r, s, a = {
    passive: !0
}) {
    return n.addEventListener(r, s, a), () => n.removeEventListener(r, s)
}

function Di(n) {
    return {
        point: {
            x: n.pageX,
            y: n.pageY
        }
    }
}
const i1 = n => r => wu(r) && n(r, Di(r));

function Li(n, r, s, a) {
    return ki(n, r, i1(s), a)
}
const gh = (n, r) => Math.abs(n - r);

function s1(n, r) {
    const s = gh(n.x, r.x),
        a = gh(n.y, r.y);
    return Math.sqrt(s ** 2 + a ** 2)
}
class Vm {
    constructor(r, s, {
        transformPagePoint: a,
        contextWindow: l,
        dragSnapToOrigin: f = !1
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const x = Tl(this.lastMoveEventInfo, this.history),
                    w = this.startEvent !== null,
                    T = s1(x.offset, {
                        x: 0,
                        y: 0
                    }) >= 3;
                if (!w && !T) return;
                const {
                    point: V
                } = x, {
                    timestamp: A
                } = Ze;
                this.history.push({ ...V,
                    timestamp: A
                });
                const {
                    onStart: k,
                    onMove: z
                } = this.handlers;
                w || (k && k(this.lastMoveEvent, x), this.startEvent = this.lastMoveEvent), z && z(this.lastMoveEvent, x)
            }, this.handlePointerMove = (x, w) => {
                this.lastMoveEvent = x, this.lastMoveEventInfo = Sl(w, this.transformPagePoint), xe.update(this.updatePoint, !0)
            }, this.handlePointerUp = (x, w) => {
                this.end();
                const {
                    onEnd: T,
                    onSessionEnd: V,
                    resumeAnimation: A
                } = this.handlers;
                if (this.dragSnapToOrigin && A && A(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const k = Tl(x.type === "pointercancel" ? this.lastMoveEventInfo : Sl(w, this.transformPagePoint), this.history);
                this.startEvent && T && T(x, k), V && V(x, k)
            }, !wu(r)) return;
        this.dragSnapToOrigin = f, this.handlers = s, this.transformPagePoint = a, this.contextWindow = l || window;
        const d = Di(r),
            h = Sl(d, this.transformPagePoint),
            {
                point: p
            } = h,
            {
                timestamp: g
            } = Ze;
        this.history = [{ ...p,
            timestamp: g
        }];
        const {
            onSessionStart: v
        } = s;
        v && v(r, Tl(h, this.history)), this.removeListeners = Bi(Li(this.contextWindow, "pointermove", this.handlePointerMove), Li(this.contextWindow, "pointerup", this.handlePointerUp), Li(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(r) {
        this.handlers = r
    }
    end() {
        this.removeListeners && this.removeListeners(), Sn(this.updatePoint)
    }
}

function Sl(n, r) {
    return r ? {
        point: r(n.point)
    } : n
}

function vh(n, r) {
    return {
        x: n.x - r.x,
        y: n.y - r.y
    }
}

function Tl({
    point: n
}, r) {
    return {
        point: n,
        delta: vh(n, Am(r)),
        offset: vh(n, o1(r)),
        velocity: a1(r, .1)
    }
}

function o1(n) {
    return n[0]
}

function Am(n) {
    return n[n.length - 1]
}

function a1(n, r) {
    if (n.length < 2) return {
        x: 0,
        y: 0
    };
    let s = n.length - 1,
        a = null;
    const l = Am(n);
    for (; s >= 0 && (a = n[s], !(l.timestamp - a.timestamp > $t(r)));) s--;
    if (!a) return {
        x: 0,
        y: 0
    };
    const f = Xt(l.timestamp - a.timestamp);
    if (f === 0) return {
        x: 0,
        y: 0
    };
    const d = {
        x: (l.x - a.x) / f,
        y: (l.y - a.y) / f
    };
    return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d
}
const km = 1e-4,
    l1 = 1 - km,
    u1 = 1 + km,
    bm = .01,
    c1 = 0 - bm,
    d1 = 0 + bm;

function mt(n) {
    return n.max - n.min
}

function f1(n, r, s) {
    return Math.abs(n - r) <= s
}

function xh(n, r, s, a = .5) {
    n.origin = a, n.originPoint = Ne(r.min, r.max, n.origin), n.scale = mt(s) / mt(r), n.translate = Ne(s.min, s.max, n.origin) - n.originPoint, (n.scale >= l1 && n.scale <= u1 || isNaN(n.scale)) && (n.scale = 1), (n.translate >= c1 && n.translate <= d1 || isNaN(n.translate)) && (n.translate = 0)
}

function ji(n, r, s, a) {
    xh(n.x, r.x, s.x, a ? a.originX : void 0), xh(n.y, r.y, s.y, a ? a.originY : void 0)
}

function wh(n, r, s) {
    n.min = s.min + r.min, n.max = n.min + mt(r)
}

function h1(n, r, s) {
    wh(n.x, r.x, s.x), wh(n.y, r.y, s.y)
}

function Lh(n, r, s) {
    n.min = r.min - s.min, n.max = n.min + mt(r)
}

function Si(n, r, s) {
    Lh(n.x, r.x, s.x), Lh(n.y, r.y, s.y)
}

function p1(n, {
    min: r,
    max: s
}, a) {
    return r !== void 0 && n < r ? n = a ? Ne(r, n, a.min) : Math.max(n, r) : s !== void 0 && n > s && (n = a ? Ne(s, n, a.max) : Math.min(n, s)), n
}

function jh(n, r, s) {
    return {
        min: r !== void 0 ? n.min + r : void 0,
        max: s !== void 0 ? n.max + s - (n.max - n.min) : void 0
    }
}

function m1(n, {
    top: r,
    left: s,
    bottom: a,
    right: l
}) {
    return {
        x: jh(n.x, s, l),
        y: jh(n.y, r, a)
    }
}

function Sh(n, r) {
    let s = r.min - n.min,
        a = r.max - n.max;
    return r.max - r.min < n.max - n.min && ([s, a] = [a, s]), {
        min: s,
        max: a
    }
}

function y1(n, r) {
    return {
        x: Sh(n.x, r.x),
        y: Sh(n.y, r.y)
    }
}

function g1(n, r) {
    let s = .5;
    const a = mt(n),
        l = mt(r);
    return l > a ? s = Sr(r.min, r.max - a, n.min) : a > l && (s = Sr(n.min, n.max - l, r.min)), Kt(0, 1, s)
}

function v1(n, r) {
    const s = {};
    return r.min !== void 0 && (s.min = r.min - n.min), r.max !== void 0 && (s.max = r.max - n.min), s
}
const Wl = .35;

function x1(n = Wl) {
    return n === !1 ? n = 0 : n === !0 && (n = Wl), {
        x: Th(n, "left", "right"),
        y: Th(n, "top", "bottom")
    }
}

function Th(n, r, s) {
    return {
        min: Nh(n, r),
        max: Nh(n, s)
    }
}

function Nh(n, r) {
    return typeof n == "number" ? n : n[r] || 0
}
const Eh = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    wr = () => ({
        x: Eh(),
        y: Eh()
    }),
    Mh = () => ({
        min: 0,
        max: 0
    }),
    ke = () => ({
        x: Mh(),
        y: Mh()
    });

function St(n) {
    return [n("x"), n("y")]
}

function Cm({
    top: n,
    left: r,
    right: s,
    bottom: a
}) {
    return {
        x: {
            min: r,
            max: s
        },
        y: {
            min: n,
            max: a
        }
    }
}

function w1({
    x: n,
    y: r
}) {
    return {
        top: r.min,
        right: n.max,
        bottom: r.max,
        left: n.min
    }
}

function L1(n, r) {
    if (!r) return n;
    const s = r({
            x: n.left,
            y: n.top
        }),
        a = r({
            x: n.right,
            y: n.bottom
        });
    return {
        top: s.y,
        left: s.x,
        bottom: a.y,
        right: a.x
    }
}

function Nl(n) {
    return n === void 0 || n === 1
}

function Gl({
    scale: n,
    scaleX: r,
    scaleY: s
}) {
    return !Nl(n) || !Nl(r) || !Nl(s)
}

function Jn(n) {
    return Gl(n) || zm(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY
}

function zm(n) {
    return Vh(n.x) || Vh(n.y)
}

function Vh(n) {
    return n && n !== "0%"
}

function lo(n, r, s) {
    const a = n - s,
        l = r * a;
    return s + l
}

function Ah(n, r, s, a, l) {
    return l !== void 0 && (n = lo(n, l, a)), lo(n, s, a) + r
}

function Ql(n, r = 0, s = 1, a, l) {
    n.min = Ah(n.min, r, s, a, l), n.max = Ah(n.max, r, s, a, l)
}

function Pm(n, {
    x: r,
    y: s
}) {
    Ql(n.x, r.translate, r.scale, r.originPoint), Ql(n.y, s.translate, s.scale, s.originPoint)
}
const kh = .999999999999,
    bh = 1.0000000000001;

function j1(n, r, s, a = !1) {
    const l = s.length;
    if (!l) return;
    r.x = r.y = 1;
    let f, d;
    for (let h = 0; h < l; h++) {
        f = s[h], d = f.projectionDelta;
        const {
            visualElement: p
        } = f.options;
        p && p.props.style && p.props.style.display === "contents" || (a && f.options.layoutScroll && f.scroll && f !== f.root && jr(n, {
            x: -f.scroll.offset.x,
            y: -f.scroll.offset.y
        }), d && (r.x *= d.x.scale, r.y *= d.y.scale, Pm(n, d)), a && Jn(f.latestValues) && jr(n, f.latestValues))
    }
    r.x < bh && r.x > kh && (r.x = 1), r.y < bh && r.y > kh && (r.y = 1)
}

function Lr(n, r) {
    n.min = n.min + r, n.max = n.max + r
}

function Ch(n, r, s, a, l = .5) {
    const f = Ne(n.min, n.max, l);
    Ql(n, r, s, f, a)
}

function jr(n, r) {
    Ch(n.x, r.x, r.scaleX, r.scale, r.originX), Ch(n.y, r.y, r.scaleY, r.scale, r.originY)
}

function Rm(n, r) {
    return Cm(L1(n.getBoundingClientRect(), r))
}

function S1(n, r, s) {
    const a = Rm(n, s),
        {
            scroll: l
        } = r;
    return l && (Lr(a.x, l.offset.x), Lr(a.y, l.offset.y)), a
}
const Bm = ({
        current: n
    }) => n ? n.ownerDocument.defaultView : null,
    T1 = new WeakMap;
class N1 {
    constructor(r) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ke(), this.visualElement = r
    }
    start(r, {
        snapToCursor: s = !1
    } = {}) {
        const {
            presenceContext: a
        } = this.visualElement;
        if (a && a.isPresent === !1) return;
        const l = v => {
                const {
                    dragSnapToOrigin: x
                } = this.getProps();
                x ? this.pauseAnimation() : this.stopAnimation(), s && this.snapToCursor(Di(v).point)
            },
            f = (v, x) => {
                const {
                    drag: w,
                    dragPropagation: T,
                    onDragStart: V
                } = this.getProps();
                if (w && !T && (this.openDragLock && this.openDragLock(), this.openDragLock = gx(w), !this.openDragLock)) return;
                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), St(k => {
                    let z = this.getAxisMotionValue(k).get() || 0;
                    if (Ot.test(z)) {
                        const {
                            projection: O
                        } = this.visualElement;
                        if (O && O.layout) {
                            const Z = O.layout.layoutBox[k];
                            Z && (z = mt(Z) * (parseFloat(z) / 100))
                        }
                    }
                    this.originPoint[k] = z
                }), V && xe.postRender(() => V(v, x)), Dl(this.visualElement, "transform");
                const {
                    animationState: A
                } = this.visualElement;
                A && A.setActive("whileDrag", !0)
            },
            d = (v, x) => {
                const {
                    dragPropagation: w,
                    dragDirectionLock: T,
                    onDirectionLock: V,
                    onDrag: A
                } = this.getProps();
                if (!w && !this.openDragLock) return;
                const {
                    offset: k
                } = x;
                if (T && this.currentDirection === null) {
                    this.currentDirection = E1(k), this.currentDirection !== null && V && V(this.currentDirection);
                    return
                }
                this.updateAxis("x", x.point, k), this.updateAxis("y", x.point, k), this.visualElement.render(), A && A(v, x)
            },
            h = (v, x) => this.stop(v, x),
            p = () => St(v => {
                var x;
                return this.getAnimationState(v) === "paused" && ((x = this.getAxisMotionValue(v).animation) === null || x === void 0 ? void 0 : x.play())
            }),
            {
                dragSnapToOrigin: g
            } = this.getProps();
        this.panSession = new Vm(r, {
            onSessionStart: l,
            onStart: f,
            onMove: d,
            onSessionEnd: h,
            resumeAnimation: p
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: g,
            contextWindow: Bm(this.visualElement)
        })
    }
    stop(r, s) {
        const a = this.isDragging;
        if (this.cancel(), !a) return;
        const {
            velocity: l
        } = s;
        this.startAnimation(l);
        const {
            onDragEnd: f
        } = this.getProps();
        f && xe.postRender(() => f(r, s))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: r,
            animationState: s
        } = this.visualElement;
        r && (r.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: a
        } = this.getProps();
        !a && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1)
    }
    updateAxis(r, s, a) {
        const {
            drag: l
        } = this.getProps();
        if (!a || !Xs(r, l, this.currentDirection)) return;
        const f = this.getAxisMotionValue(r);
        let d = this.originPoint[r] + a[r];
        this.constraints && this.constraints[r] && (d = p1(d, this.constraints[r], this.elastic[r])), f.set(d)
    }
    resolveConstraints() {
        var r;
        const {
            dragConstraints: s,
            dragElastic: a
        } = this.getProps(), l = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (r = this.visualElement.projection) === null || r === void 0 ? void 0 : r.layout, f = this.constraints;
        s && vr(s) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : s && l ? this.constraints = m1(l.layoutBox, s) : this.constraints = !1, this.elastic = x1(a), f !== this.constraints && l && this.constraints && !this.hasMutatedConstraints && St(d => {
            this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = v1(l.layoutBox[d], this.constraints[d]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: r,
            onMeasureDragConstraints: s
        } = this.getProps();
        if (!r || !vr(r)) return !1;
        const a = r.current,
            {
                projection: l
            } = this.visualElement;
        if (!l || !l.layout) return !1;
        const f = S1(a, l.root, this.visualElement.getTransformPagePoint());
        let d = y1(l.layout.layoutBox, f);
        if (s) {
            const h = s(w1(d));
            this.hasMutatedConstraints = !!h, h && (d = Cm(h))
        }
        return d
    }
    startAnimation(r) {
        const {
            drag: s,
            dragMomentum: a,
            dragElastic: l,
            dragTransition: f,
            dragSnapToOrigin: d,
            onDragTransitionEnd: h
        } = this.getProps(), p = this.constraints || {}, g = St(v => {
            if (!Xs(v, s, this.currentDirection)) return;
            let x = p && p[v] || {};
            d && (x = {
                min: 0,
                max: 0
            });
            const w = l ? 200 : 1e6,
                T = l ? 40 : 1e7,
                V = {
                    type: "inertia",
                    velocity: a ? r[v] : 0,
                    bounceStiffness: w,
                    bounceDamping: T,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...f,
                    ...x
                };
            return this.startAxisValueAnimation(v, V)
        });
        return Promise.all(g).then(h)
    }
    startAxisValueAnimation(r, s) {
        const a = this.getAxisMotionValue(r);
        return Dl(this.visualElement, r), a.start(Cu(r, a, 0, s, this.visualElement, !1))
    }
    stopAnimation() {
        St(r => this.getAxisMotionValue(r).stop())
    }
    pauseAnimation() {
        St(r => {
            var s;
            return (s = this.getAxisMotionValue(r).animation) === null || s === void 0 ? void 0 : s.pause()
        })
    }
    getAnimationState(r) {
        var s;
        return (s = this.getAxisMotionValue(r).animation) === null || s === void 0 ? void 0 : s.state
    }
    getAxisMotionValue(r) {
        const s = `_drag${r.toUpperCase()}`,
            a = this.visualElement.getProps(),
            l = a[s];
        return l || this.visualElement.getValue(r, (a.initial ? a.initial[r] : void 0) || 0)
    }
    snapToCursor(r) {
        St(s => {
            const {
                drag: a
            } = this.getProps();
            if (!Xs(s, a, this.currentDirection)) return;
            const {
                projection: l
            } = this.visualElement, f = this.getAxisMotionValue(s);
            if (l && l.layout) {
                const {
                    min: d,
                    max: h
                } = l.layout.layoutBox[s];
                f.set(r[s] - Ne(d, h, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: r,
            dragConstraints: s
        } = this.getProps(), {
            projection: a
        } = this.visualElement;
        if (!vr(s) || !a || !this.constraints) return;
        this.stopAnimation();
        const l = {
            x: 0,
            y: 0
        };
        St(d => {
            const h = this.getAxisMotionValue(d);
            if (h && this.constraints !== !1) {
                const p = h.get();
                l[d] = g1({
                    min: p,
                    max: p
                }, this.constraints[d])
            }
        });
        const {
            transformTemplate: f
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = f ? f({}, "") : "none", a.root && a.root.updateScroll(), a.updateLayout(), this.resolveConstraints(), St(d => {
            if (!Xs(d, r, null)) return;
            const h = this.getAxisMotionValue(d),
                {
                    min: p,
                    max: g
                } = this.constraints[d];
            h.set(Ne(p, g, l[d]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        T1.set(this.visualElement, this);
        const r = this.visualElement.current,
            s = Li(r, "pointerdown", p => {
                const {
                    drag: g,
                    dragListener: v = !0
                } = this.getProps();
                g && v && this.start(p)
            }),
            a = () => {
                const {
                    dragConstraints: p
                } = this.getProps();
                vr(p) && p.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: l
            } = this.visualElement,
            f = l.addEventListener("measure", a);
        l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()), xe.read(a);
        const d = ki(window, "resize", () => this.scalePositionWithinConstraints()),
            h = l.addEventListener("didUpdate", ({
                delta: p,
                hasLayoutChanged: g
            }) => {
                this.isDragging && g && (St(v => {
                    const x = this.getAxisMotionValue(v);
                    x && (this.originPoint[v] += p[v].translate, x.set(x.get() + p[v].translate))
                }), this.visualElement.render())
            });
        return () => {
            d(), s(), f(), h && h()
        }
    }
    getProps() {
        const r = this.visualElement.getProps(),
            {
                drag: s = !1,
                dragDirectionLock: a = !1,
                dragPropagation: l = !1,
                dragConstraints: f = !1,
                dragElastic: d = Wl,
                dragMomentum: h = !0
            } = r;
        return { ...r,
            drag: s,
            dragDirectionLock: a,
            dragPropagation: l,
            dragConstraints: f,
            dragElastic: d,
            dragMomentum: h
        }
    }
}

function Xs(n, r, s) {
    return (r === !0 || r === n) && (s === null || s === n)
}

function E1(n, r = 10) {
    let s = null;
    return Math.abs(n.y) > r ? s = "y" : Math.abs(n.x) > r && (s = "x"), s
}
class M1 extends En {
    constructor(r) {
        super(r), this.removeGroupControls = ht, this.removeListeners = ht, this.controls = new N1(r)
    }
    mount() {
        const {
            dragControls: r
        } = this.node.getProps();
        r && (this.removeGroupControls = r.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ht
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const zh = n => (r, s) => {
    n && xe.postRender(() => n(r, s))
};
class V1 extends En {
    constructor() {
        super(...arguments), this.removePointerDownListener = ht
    }
    onPointerDown(r) {
        this.session = new Vm(r, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Bm(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: r,
            onPanStart: s,
            onPan: a,
            onPanEnd: l
        } = this.node.getProps();
        return {
            onSessionStart: zh(r),
            onStart: zh(s),
            onMove: a,
            onEnd: (f, d) => {
                delete this.session, l && xe.postRender(() => l(f, d))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Li(this.node.current, "pointerdown", r => this.onPointerDown(r))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const eo = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function Ph(n, r) {
    return r.max === r.min ? 0 : n / (r.max - r.min) * 100
}
const yi = {
        correct: (n, r) => {
            if (!r.target) return n;
            if (typeof n == "string")
                if (ee.test(n)) n = parseFloat(n);
                else return n;
            const s = Ph(n, r.target.x),
                a = Ph(n, r.target.y);
            return `${s}% ${a}%`
        }
    },
    A1 = {
        correct: (n, {
            treeScale: r,
            projectionDelta: s
        }) => {
            const a = n,
                l = Tn.parse(n);
            if (l.length > 5) return a;
            const f = Tn.createTransformer(n),
                d = typeof l[0] != "number" ? 1 : 0,
                h = s.x.scale * r.x,
                p = s.y.scale * r.y;
            l[0 + d] /= h, l[1 + d] /= p;
            const g = Ne(h, p, .5);
            return typeof l[2 + d] == "number" && (l[2 + d] /= g), typeof l[3 + d] == "number" && (l[3 + d] /= g), f(l)
        }
    };
class k1 extends C.Component {
    componentDidMount() {
        const {
            visualElement: r,
            layoutGroup: s,
            switchLayoutGroup: a,
            layoutId: l
        } = this.props, {
            projection: f
        } = r;
        $v(b1), f && (s.group && s.group.add(f), a && a.register && l && a.register(f), f.root.didUpdate(), f.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), f.setOptions({ ...f.options,
            onExitComplete: () => this.safeToRemove()
        })), eo.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(r) {
        const {
            layoutDependency: s,
            visualElement: a,
            drag: l,
            isPresent: f
        } = this.props, d = a.projection;
        return d && (d.isPresent = f, l || r.layoutDependency !== s || s === void 0 ? d.willUpdate() : this.safeToRemove(), r.isPresent !== f && (f ? d.promote() : d.relegate() || xe.postRender(() => {
            const h = d.getStack();
            (!h || !h.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: r
        } = this.props.visualElement;
        r && (r.root.didUpdate(), au.postRender(() => {
            !r.currentAnimation && r.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: r,
            layoutGroup: s,
            switchLayoutGroup: a
        } = this.props, {
            projection: l
        } = r;
        l && (l.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(l), a && a.deregister && a.deregister(l))
    }
    safeToRemove() {
        const {
            safeToRemove: r
        } = this.props;
        r && r()
    }
    render() {
        return null
    }
}

function Dm(n) {
    const [r, s] = dv(), a = C.useContext(xp);
    return y.jsx(k1, { ...n,
        layoutGroup: a,
        switchLayoutGroup: C.useContext(Mp),
        isPresent: r,
        safeToRemove: s
    })
}
const b1 = {
    borderRadius: { ...yi,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: yi,
    borderTopRightRadius: yi,
    borderBottomLeftRadius: yi,
    borderBottomRightRadius: yi,
    boxShadow: A1
};

function C1(n, r, s) {
    const a = Qe(n) ? n : Vi(n);
    return a.start(Cu("", a, r, s)), a.animation
}

function z1(n) {
    return n instanceof SVGElement && n.tagName !== "svg"
}
const P1 = (n, r) => n.depth - r.depth;
class R1 {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(r) {
        Lu(this.children, r), this.isDirty = !0
    }
    remove(r) {
        ju(this.children, r), this.isDirty = !0
    }
    forEach(r) {
        this.isDirty && this.children.sort(P1), this.isDirty = !1, this.children.forEach(r)
    }
}

function B1(n, r) {
    const s = Zt.now(),
        a = ({
            timestamp: l
        }) => {
            const f = l - s;
            f >= r && (Sn(a), n(f - r))
        };
    return xe.read(a, !0), () => Sn(a)
}
const Fm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    D1 = Fm.length,
    Rh = n => typeof n == "string" ? parseFloat(n) : n,
    Bh = n => typeof n == "number" || ee.test(n);

function F1(n, r, s, a, l, f) {
    l ? (n.opacity = Ne(0, s.opacity !== void 0 ? s.opacity : 1, O1(a)), n.opacityExit = Ne(r.opacity !== void 0 ? r.opacity : 1, 0, Z1(a))) : f && (n.opacity = Ne(r.opacity !== void 0 ? r.opacity : 1, s.opacity !== void 0 ? s.opacity : 1, a));
    for (let d = 0; d < D1; d++) {
        const h = `border${Fm[d]}Radius`;
        let p = Dh(r, h),
            g = Dh(s, h);
        if (p === void 0 && g === void 0) continue;
        p || (p = 0), g || (g = 0), p === 0 || g === 0 || Bh(p) === Bh(g) ? (n[h] = Math.max(Ne(Rh(p), Rh(g), a), 0), (Ot.test(g) || Ot.test(p)) && (n[h] += "%")) : n[h] = g
    }(r.rotate || s.rotate) && (n.rotate = Ne(r.rotate || 0, s.rotate || 0, a))
}

function Dh(n, r) {
    return n[r] !== void 0 ? n[r] : n.borderRadius
}
const O1 = Om(0, .5, rm),
    Z1 = Om(.5, .95, ht);

function Om(n, r, s) {
    return a => a < n ? 0 : a > r ? 1 : s(Sr(n, r, a))
}

function Fh(n, r) {
    n.min = r.min, n.max = r.max
}

function jt(n, r) {
    Fh(n.x, r.x), Fh(n.y, r.y)
}

function Oh(n, r) {
    n.translate = r.translate, n.scale = r.scale, n.originPoint = r.originPoint, n.origin = r.origin
}

function Zh(n, r, s, a, l) {
    return n -= r, n = lo(n, 1 / s, a), l !== void 0 && (n = lo(n, 1 / l, a)), n
}

function J1(n, r = 0, s = 1, a = .5, l, f = n, d = n) {
    if (Ot.test(r) && (r = parseFloat(r), r = Ne(d.min, d.max, r / 100) - d.min), typeof r != "number") return;
    let h = Ne(f.min, f.max, a);
    n === f && (h -= r), n.min = Zh(n.min, r, s, h, l), n.max = Zh(n.max, r, s, h, l)
}

function Jh(n, r, [s, a, l], f, d) {
    J1(n, r[s], r[a], r[l], r.scale, f, d)
}
const _1 = ["x", "scaleX", "originX"],
    I1 = ["y", "scaleY", "originY"];

function _h(n, r, s, a) {
    Jh(n.x, r, _1, s ? s.x : void 0, a ? a.x : void 0), Jh(n.y, r, I1, s ? s.y : void 0, a ? a.y : void 0)
}

function Ih(n) {
    return n.translate === 0 && n.scale === 1
}

function Zm(n) {
    return Ih(n.x) && Ih(n.y)
}

function Uh(n, r) {
    return n.min === r.min && n.max === r.max
}

function U1(n, r) {
    return Uh(n.x, r.x) && Uh(n.y, r.y)
}

function Wh(n, r) {
    return Math.round(n.min) === Math.round(r.min) && Math.round(n.max) === Math.round(r.max)
}

function Jm(n, r) {
    return Wh(n.x, r.x) && Wh(n.y, r.y)
}

function Gh(n) {
    return mt(n.x) / mt(n.y)
}

function Qh(n, r) {
    return n.translate === r.translate && n.scale === r.scale && n.originPoint === r.originPoint
}
class W1 {
    constructor() {
        this.members = []
    }
    add(r) {
        Lu(this.members, r), r.scheduleRender()
    }
    remove(r) {
        if (ju(this.members, r), r === this.prevLead && (this.prevLead = void 0), r === this.lead) {
            const s = this.members[this.members.length - 1];
            s && this.promote(s)
        }
    }
    relegate(r) {
        const s = this.members.findIndex(l => r === l);
        if (s === 0) return !1;
        let a;
        for (let l = s; l >= 0; l--) {
            const f = this.members[l];
            if (f.isPresent !== !1) {
                a = f;
                break
            }
        }
        return a ? (this.promote(a), !0) : !1
    }
    promote(r, s) {
        const a = this.lead;
        if (r !== a && (this.prevLead = a, this.lead = r, r.show(), a)) {
            a.instance && a.scheduleRender(), r.scheduleRender(), r.resumeFrom = a, s && (r.resumeFrom.preserveOpacity = !0), a.snapshot && (r.snapshot = a.snapshot, r.snapshot.latestValues = a.animationValues || a.latestValues), r.root && r.root.isUpdating && (r.isLayoutDirty = !0);
            const {
                crossfade: l
            } = r.options;
            l === !1 && a.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(r => {
            const {
                options: s,
                resumingFrom: a
            } = r;
            s.onExitComplete && s.onExitComplete(), a && a.options.onExitComplete && a.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(r => {
            r.instance && r.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function G1(n, r, s) {
    let a = "";
    const l = n.x.translate / r.x,
        f = n.y.translate / r.y,
        d = s ? .z || 0;
    if ((l || f || d) && (a = `translate3d(${l}px, ${f}px, ${d}px) `), (r.x !== 1 || r.y !== 1) && (a += `scale(${1/r.x}, ${1/r.y}) `), s) {
        const {
            transformPerspective: g,
            rotate: v,
            rotateX: x,
            rotateY: w,
            skewX: T,
            skewY: V
        } = s;
        g && (a = `perspective(${g}px) ${a}`), v && (a += `rotate(${v}deg) `), x && (a += `rotateX(${x}deg) `), w && (a += `rotateY(${w}deg) `), T && (a += `skewX(${T}deg) `), V && (a += `skewY(${V}deg) `)
    }
    const h = n.x.scale * r.x,
        p = n.y.scale * r.y;
    return (h !== 1 || p !== 1) && (a += `scale(${h}, ${p})`), a || "none"
}
const _n = {
        type: "projectionFrame",
        totalNodes: 0,
        resolvedTargetDeltas: 0,
        recalculatedProjection: 0
    },
    xi = typeof window < "u" && window.MotionDebug !== void 0,
    El = ["", "X", "Y", "Z"],
    Q1 = {
        visibility: "hidden"
    },
    Hh = 1e3;
let H1 = 0;

function Ml(n, r, s, a) {
    const {
        latestValues: l
    } = r;
    l[n] && (s[n] = l[n], r.setStaticValue(n, 0), a && (a[n] = 0))
}

function _m(n) {
    if (n.hasCheckedOptimisedAppear = !0, n.root === n) return;
    const {
        visualElement: r
    } = n.options;
    if (!r) return;
    const s = $p(r);
    if (window.MotionHasOptimisedAnimation(s, "transform")) {
        const {
            layout: l,
            layoutId: f
        } = n.options;
        window.MotionCancelOptimisedAnimation(s, "transform", xe, !(l || f))
    }
    const {
        parent: a
    } = n;
    a && !a.hasCheckedOptimisedAppear && _m(a)
}

function Im({
    attachResizeListener: n,
    defaultParent: r,
    measureScroll: s,
    checkIsScrollRoot: a,
    resetTransform: l
}) {
    return class {
        constructor(d = {}, h = r ? .()) {
            this.id = H1++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, xi && (_n.totalNodes = _n.resolvedTargetDeltas = _n.recalculatedProjection = 0), this.nodes.forEach(X1), this.nodes.forEach(n2), this.nodes.forEach(r2), this.nodes.forEach(K1), xi && window.MotionDebug.record(_n)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = d, this.root = h ? h.root || h : this, this.path = h ? [...h.path, h] : [], this.parent = h, this.depth = h ? h.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++) this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new R1)
        }
        addEventListener(d, h) {
            return this.eventHandlers.has(d) || this.eventHandlers.set(d, new Su), this.eventHandlers.get(d).add(h)
        }
        notifyListeners(d, ...h) {
            const p = this.eventHandlers.get(d);
            p && p.notify(...h)
        }
        hasListeners(d) {
            return this.eventHandlers.has(d)
        }
        mount(d, h = this.root.hasTreeAnimated) {
            if (this.instance) return;
            this.isSVG = z1(d), this.instance = d;
            const {
                layoutId: p,
                layout: g,
                visualElement: v
            } = this.options;
            if (v && !v.current && v.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), h && (g || p) && (this.isLayoutDirty = !0), n) {
                let x;
                const w = () => this.root.updateBlockedByResize = !1;
                n(d, () => {
                    this.root.updateBlockedByResize = !0, x && x(), x = B1(w, 250), eo.hasAnimatedSinceResize && (eo.hasAnimatedSinceResize = !1, this.nodes.forEach($h))
                })
            }
            p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && v && (p || g) && this.addEventListener("didUpdate", ({
                delta: x,
                hasLayoutChanged: w,
                hasRelativeTargetChanged: T,
                layout: V
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const A = this.options.transition || v.getDefaultTransition() || l2,
                    {
                        onLayoutAnimationStart: k,
                        onLayoutAnimationComplete: z
                    } = v.getProps(),
                    O = !this.targetLayout || !Jm(this.targetLayout, V) || T,
                    Z = !w && T;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || Z || w && (O || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(x, Z);
                    const Y = { ...gu(A, "layout"),
                        onPlay: k,
                        onComplete: z
                    };
                    (v.shouldReduceMotion || this.options.layoutRoot) && (Y.delay = 0, Y.type = !1), this.startAnimation(Y)
                } else w || $h(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = V
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const d = this.getStack();
            d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Sn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(i2), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: d
            } = this.options;
            return d && d.getProps().transformTemplate
        }
        willUpdate(d = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && _m(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let v = 0; v < this.path.length; v++) {
                const x = this.path[v];
                x.shouldResetTransform = !0, x.updateScroll("snapshot"), x.options.layoutRoot && x.willUpdate(!1)
            }
            const {
                layoutId: h,
                layout: p
            } = this.options;
            if (h === void 0 && !p) return;
            const g = this.getTransformTemplate();
            this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Yh);
                return
            }
            this.isUpdating || this.nodes.forEach(e2), this.isUpdating = !1, this.nodes.forEach(t2), this.nodes.forEach(Y1), this.nodes.forEach($1), this.clearAllSnapshots();
            const h = Zt.now();
            Ze.delta = Kt(0, 1e3 / 60, h - Ze.timestamp), Ze.timestamp = h, Ze.isProcessing = !0, gl.update.process(Ze), gl.preRender.process(Ze), gl.render.process(Ze), Ze.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, au.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(q1), this.sharedNodes.forEach(s2)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, xe.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            xe.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
            const d = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = ke(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: h
            } = this.options;
            h && h.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
        }
        updateScroll(d = "measure") {
            let h = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (h = !1), h) {
                const p = a(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: p,
                    offset: s(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!l) return;
            const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                h = this.projectionDelta && !Zm(this.projectionDelta),
                p = this.getTransformTemplate(),
                g = p ? p(this.latestValues, "") : void 0,
                v = g !== this.prevTransformTemplateValue;
            d && (h || Jn(this.latestValues) || v) && (l(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(d = !0) {
            const h = this.measurePageBox();
            let p = this.removeElementScroll(h);
            return d && (p = this.removeTransform(p)), u2(p), {
                animationId: this.root.animationId,
                measuredBox: h,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var d;
            const {
                visualElement: h
            } = this.options;
            if (!h) return ke();
            const p = h.measureViewportBox();
            if (!(((d = this.scroll) === null || d === void 0 ? void 0 : d.wasRoot) || this.path.some(c2))) {
                const {
                    scroll: v
                } = this.root;
                v && (Lr(p.x, v.offset.x), Lr(p.y, v.offset.y))
            }
            return p
        }
        removeElementScroll(d) {
            var h;
            const p = ke();
            if (jt(p, d), !((h = this.scroll) === null || h === void 0) && h.wasRoot) return p;
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g],
                    {
                        scroll: x,
                        options: w
                    } = v;
                v !== this.root && x && w.layoutScroll && (x.wasRoot && jt(p, d), Lr(p.x, x.offset.x), Lr(p.y, x.offset.y))
            }
            return p
        }
        applyTransform(d, h = !1) {
            const p = ke();
            jt(p, d);
            for (let g = 0; g < this.path.length; g++) {
                const v = this.path[g];
                !h && v.options.layoutScroll && v.scroll && v !== v.root && jr(p, {
                    x: -v.scroll.offset.x,
                    y: -v.scroll.offset.y
                }), Jn(v.latestValues) && jr(p, v.latestValues)
            }
            return Jn(this.latestValues) && jr(p, this.latestValues), p
        }
        removeTransform(d) {
            const h = ke();
            jt(h, d);
            for (let p = 0; p < this.path.length; p++) {
                const g = this.path[p];
                if (!g.instance || !Jn(g.latestValues)) continue;
                Gl(g.latestValues) && g.updateSnapshot();
                const v = ke(),
                    x = g.measurePageBox();
                jt(v, x), _h(h, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, v)
            }
            return Jn(this.latestValues) && _h(h, this.latestValues), h
        }
        setTargetDelta(d) {
            this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(d) {
            this.options = { ...this.options,
                ...d,
                crossfade: d.crossfade !== void 0 ? d.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ze.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(d = !1) {
            var h;
            const p = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = p.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = p.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const g = !!this.resumingFrom || this !== p;
            if (!(d || g && this.isSharedProjectionDirty || this.isProjectionDirty || !((h = this.parent) === null || h === void 0) && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: x,
                layoutId: w
            } = this.options;
            if (!(!this.layout || !(x || w))) {
                if (this.resolvedRelativeTargetAt = Ze.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const T = this.getClosestProjectingParent();
                    T && T.layout && this.animationProgress !== 1 ? (this.relativeParent = T, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ke(), this.relativeTargetOrigin = ke(), Si(this.relativeTargetOrigin, this.layout.layoutBox, T.layout.layoutBox), jt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ke(), this.targetWithTransforms = ke()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), h1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : jt(this.target, this.layout.layoutBox), Pm(this.target, this.targetDelta)) : jt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const T = this.getClosestProjectingParent();
                        T && !!T.resumingFrom == !!this.resumingFrom && !T.options.layoutScroll && T.target && this.animationProgress !== 1 ? (this.relativeParent = T, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ke(), this.relativeTargetOrigin = ke(), Si(this.relativeTargetOrigin, this.target, T.target), jt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    xi && _n.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Gl(this.parent.latestValues) || zm(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var d;
            const h = this.getLead(),
                p = !!this.resumingFrom || this !== h;
            let g = !0;
            if ((this.isProjectionDirty || !((d = this.parent) === null || d === void 0) && d.isProjectionDirty) && (g = !1), p && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === Ze.timestamp && (g = !1), g) return;
            const {
                layout: v,
                layoutId: x
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(v || x)) return;
            jt(this.layoutCorrected, this.layout.layoutBox);
            const w = this.treeScale.x,
                T = this.treeScale.y;
            j1(this.layoutCorrected, this.treeScale, this.path, p), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = ke());
            const {
                target: V
            } = h;
            if (!V) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Oh(this.prevProjectionDelta.x, this.projectionDelta.x), Oh(this.prevProjectionDelta.y, this.projectionDelta.y)), ji(this.projectionDelta, this.layoutCorrected, V, this.latestValues), (this.treeScale.x !== w || this.treeScale.y !== T || !Qh(this.projectionDelta.x, this.prevProjectionDelta.x) || !Qh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", V)), xi && _n.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(d = !0) {
            var h;
            if ((h = this.options.visualElement) === null || h === void 0 || h.scheduleRender(), d) {
                const p = this.getStack();
                p && p.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = wr(), this.projectionDelta = wr(), this.projectionDeltaWithTransform = wr()
        }
        setAnimationOrigin(d, h = !1) {
            const p = this.snapshot,
                g = p ? p.latestValues : {},
                v = { ...this.latestValues
                },
                x = wr();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !h;
            const w = ke(),
                T = p ? p.source : void 0,
                V = this.layout ? this.layout.source : void 0,
                A = T !== V,
                k = this.getStack(),
                z = !k || k.members.length <= 1,
                O = !!(A && !z && this.options.crossfade === !0 && !this.path.some(a2));
            this.animationProgress = 0;
            let Z;
            this.mixTargetDelta = Y => {
                const U = Y / 1e3;
                Xh(x.x, d.x, U), Xh(x.y, d.y, U), this.setTargetDelta(x), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Si(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox), o2(this.relativeTarget, this.relativeTargetOrigin, w, U), Z && U1(this.relativeTarget, Z) && (this.isProjectionDirty = !1), Z || (Z = ke()), jt(Z, this.relativeTarget)), A && (this.animationValues = v, F1(v, g, this.latestValues, U, O, z)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = U
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(d) {
            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (Sn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = xe.update(() => {
                eo.hasAnimatedSinceResize = !0, this.currentAnimation = C1(0, Hh, { ...d,
                    onUpdate: h => {
                        this.mixTargetDelta(h), d.onUpdate && d.onUpdate(h)
                    },
                    onComplete: () => {
                        d.onComplete && d.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const d = this.getStack();
            d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Hh), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {
                targetWithTransforms: h,
                target: p,
                layout: g,
                latestValues: v
            } = d;
            if (!(!h || !p || !g)) {
                if (this !== d && this.layout && g && Um(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
                    p = this.target || ke();
                    const x = mt(this.layout.layoutBox.x);
                    p.x.min = d.target.x.min, p.x.max = p.x.min + x;
                    const w = mt(this.layout.layoutBox.y);
                    p.y.min = d.target.y.min, p.y.max = p.y.min + w
                }
                jt(h, p), jr(h, v), ji(this.projectionDeltaWithTransform, this.layoutCorrected, h, v)
            }
        }
        registerSharedNode(d, h) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new W1), this.sharedNodes.get(d).add(h);
            const g = h.options.initialPromotionConfig;
            h.promote({
                transition: g ? g.transition : void 0,
                preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(h) : void 0
            })
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0
        }
        getLead() {
            var d;
            const {
                layoutId: h
            } = this.options;
            return h ? ((d = this.getStack()) === null || d === void 0 ? void 0 : d.lead) || this : this
        }
        getPrevLead() {
            var d;
            const {
                layoutId: h
            } = this.options;
            return h ? (d = this.getStack()) === null || d === void 0 ? void 0 : d.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: d
            } = this.options;
            if (d) return this.root.sharedNodes.get(d)
        }
        promote({
            needsReset: d,
            transition: h,
            preserveFollowOpacity: p
        } = {}) {
            const g = this.getStack();
            g && g.promote(this, p), d && (this.projectionDelta = void 0, this.needsReset = !0), h && this.setOptions({
                transition: h
            })
        }
        relegate() {
            const d = this.getStack();
            return d ? d.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: d
            } = this.options;
            if (!d) return;
            let h = !1;
            const {
                latestValues: p
            } = d;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (h = !0), !h) return;
            const g = {};
            p.z && Ml("z", d, g, this.animationValues);
            for (let v = 0; v < El.length; v++) Ml(`rotate${El[v]}`, d, g, this.animationValues), Ml(`skew${El[v]}`, d, g, this.animationValues);
            d.render();
            for (const v in g) d.setStaticValue(v, g[v]), this.animationValues && (this.animationValues[v] = g[v]);
            d.scheduleRender()
        }
        getProjectionStyles(d) {
            var h, p;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return Q1;
            const g = {
                    visibility: ""
                },
                v = this.getTransformTemplate();
            if (this.needsReset) return this.needsReset = !1, g.opacity = "", g.pointerEvents = Ks(d ? .pointerEvents) || "", g.transform = v ? v(this.latestValues, "") : "none", g;
            const x = this.getLead();
            if (!this.projectionDelta || !this.layout || !x.target) {
                const A = {};
                return this.options.layoutId && (A.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, A.pointerEvents = Ks(d ? .pointerEvents) || ""), this.hasProjected && !Jn(this.latestValues) && (A.transform = v ? v({}, "") : "none", this.hasProjected = !1), A
            }
            const w = x.animationValues || x.latestValues;
            this.applyTransformsToTarget(), g.transform = G1(this.projectionDeltaWithTransform, this.treeScale, w), v && (g.transform = v(w, g.transform));
            const {
                x: T,
                y: V
            } = this.projectionDelta;
            g.transformOrigin = `${T.origin*100}% ${V.origin*100}% 0`, x.animationValues ? g.opacity = x === this ? (p = (h = w.opacity) !== null && h !== void 0 ? h : this.latestValues.opacity) !== null && p !== void 0 ? p : 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : g.opacity = x === this ? w.opacity !== void 0 ? w.opacity : "" : w.opacityExit !== void 0 ? w.opacityExit : 0;
            for (const A in ro) {
                if (w[A] === void 0) continue;
                const {
                    correct: k,
                    applyTo: z
                } = ro[A], O = g.transform === "none" ? w[A] : k(w[A], x);
                if (z) {
                    const Z = z.length;
                    for (let Y = 0; Y < Z; Y++) g[z[Y]] = O
                } else g[A] = O
            }
            return this.options.layoutId && (g.pointerEvents = x === this ? Ks(d ? .pointerEvents) || "" : "none"), g
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(d => {
                var h;
                return (h = d.currentAnimation) === null || h === void 0 ? void 0 : h.stop()
            }), this.root.nodes.forEach(Yh), this.root.sharedNodes.clear()
        }
    }
}

function Y1(n) {
    n.updateLayout()
}

function $1(n) {
    var r;
    const s = ((r = n.resumeFrom) === null || r === void 0 ? void 0 : r.snapshot) || n.snapshot;
    if (n.isLead() && n.layout && s && n.hasListeners("didUpdate")) {
        const {
            layoutBox: a,
            measuredBox: l
        } = n.layout, {
            animationType: f
        } = n.options, d = s.source !== n.layout.source;
        f === "size" ? St(x => {
            const w = d ? s.measuredBox[x] : s.layoutBox[x],
                T = mt(w);
            w.min = a[x].min, w.max = w.min + T
        }) : Um(f, s.layoutBox, a) && St(x => {
            const w = d ? s.measuredBox[x] : s.layoutBox[x],
                T = mt(a[x]);
            w.max = w.min + T, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[x].max = n.relativeTarget[x].min + T)
        });
        const h = wr();
        ji(h, a, s.layoutBox);
        const p = wr();
        d ? ji(p, n.applyTransform(l, !0), s.measuredBox) : ji(p, a, s.layoutBox);
        const g = !Zm(h);
        let v = !1;
        if (!n.resumeFrom) {
            const x = n.getClosestProjectingParent();
            if (x && !x.resumeFrom) {
                const {
                    snapshot: w,
                    layout: T
                } = x;
                if (w && T) {
                    const V = ke();
                    Si(V, s.layoutBox, w.layoutBox);
                    const A = ke();
                    Si(A, a, T.layoutBox), Jm(V, A) || (v = !0), x.options.layoutRoot && (n.relativeTarget = A, n.relativeTargetOrigin = V, n.relativeParent = x)
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: a,
            snapshot: s,
            delta: p,
            layoutDelta: h,
            hasLayoutChanged: g,
            hasRelativeTargetChanged: v
        })
    } else if (n.isLead()) {
        const {
            onExitComplete: a
        } = n.options;
        a && a()
    }
    n.options.transition = void 0
}

function X1(n) {
    xi && _n.totalNodes++, n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty || (n.isSharedProjectionDirty = !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty)), n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty))
}

function K1(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1
}

function q1(n) {
    n.clearSnapshot()
}

function Yh(n) {
    n.clearMeasurements()
}

function e2(n) {
    n.isLayoutDirty = !1
}

function t2(n) {
    const {
        visualElement: r
    } = n.options;
    r && r.getProps().onBeforeLayoutMeasure && r.notify("BeforeLayoutMeasure"), n.resetTransform()
}

function $h(n) {
    n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0
}

function n2(n) {
    n.resolveTargetDelta()
}

function r2(n) {
    n.calcProjection()
}

function i2(n) {
    n.resetSkewAndRotation()
}

function s2(n) {
    n.removeLeadSnapshot()
}

function Xh(n, r, s) {
    n.translate = Ne(r.translate, 0, s), n.scale = Ne(r.scale, 1, s), n.origin = r.origin, n.originPoint = r.originPoint
}

function Kh(n, r, s, a) {
    n.min = Ne(r.min, s.min, a), n.max = Ne(r.max, s.max, a)
}

function o2(n, r, s, a) {
    Kh(n.x, r.x, s.x, a), Kh(n.y, r.y, s.y, a)
}

function a2(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0
}
const l2 = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    qh = n => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n),
    ep = qh("applewebkit/") && !qh("chrome/") ? Math.round : ht;

function tp(n) {
    n.min = ep(n.min), n.max = ep(n.max)
}

function u2(n) {
    tp(n.x), tp(n.y)
}

function Um(n, r, s) {
    return n === "position" || n === "preserve-aspect" && !f1(Gh(r), Gh(s), .2)
}

function c2(n) {
    var r;
    return n !== n.root && ((r = n.scroll) === null || r === void 0 ? void 0 : r.wasRoot)
}
const d2 = Im({
        attachResizeListener: (n, r) => ki(n, "resize", r),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Vl = {
        current: void 0
    },
    Wm = Im({
        measureScroll: n => ({
            x: n.scrollLeft,
            y: n.scrollTop
        }),
        defaultParent: () => {
            if (!Vl.current) {
                const n = new d2({});
                n.mount(window), n.setOptions({
                    layoutScroll: !0
                }), Vl.current = n
            }
            return Vl.current
        },
        resetTransform: (n, r) => {
            n.style.transform = r !== void 0 ? r : "none"
        },
        checkIsScrollRoot: n => window.getComputedStyle(n).position === "fixed"
    }),
    f2 = {
        pan: {
            Feature: V1
        },
        drag: {
            Feature: M1,
            ProjectionNode: Wm,
            MeasureLayout: Dm
        }
    };

function np(n, r, s) {
    const {
        props: a
    } = n;
    n.animationState && a.whileHover && n.animationState.setActive("whileHover", s === "Start");
    const l = "onHover" + s,
        f = a[l];
    f && xe.postRender(() => f(r, Di(r)))
}
class h2 extends En {
    mount() {
        const {
            current: r
        } = this.node;
        r && (this.unmount = fx(r, s => (np(this.node, s, "Start"), a => np(this.node, a, "End"))))
    }
    unmount() {}
}
class p2 extends En {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let r = !1;
        try {
            r = this.node.current.matches(":focus-visible")
        } catch {
            r = !0
        }!r || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = Bi(ki(this.node.current, "focus", () => this.onFocus()), ki(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function rp(n, r, s) {
    const {
        props: a
    } = n;
    n.animationState && a.whileTap && n.animationState.setActive("whileTap", s === "Start");
    const l = "onTap" + (s === "End" ? "" : s),
        f = a[l];
    f && xe.postRender(() => f(r, Di(r)))
}
class m2 extends En {
    mount() {
        const {
            current: r
        } = this.node;
        r && (this.unmount = yx(r, s => (rp(this.node, s, "Start"), (a, {
            success: l
        }) => rp(this.node, a, l ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Hl = new WeakMap,
    Al = new WeakMap,
    y2 = n => {
        const r = Hl.get(n.target);
        r && r(n)
    },
    g2 = n => {
        n.forEach(y2)
    };

function v2({
    root: n,
    ...r
}) {
    const s = n || document;
    Al.has(s) || Al.set(s, {});
    const a = Al.get(s),
        l = JSON.stringify(r);
    return a[l] || (a[l] = new IntersectionObserver(g2, {
        root: n,
        ...r
    })), a[l]
}

function x2(n, r, s) {
    const a = v2(r);
    return Hl.set(n, s), a.observe(n), () => {
        Hl.delete(n), a.unobserve(n)
    }
}
const w2 = {
    some: 0,
    all: 1
};
class L2 extends En {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: r = {}
        } = this.node.getProps(), {
            root: s,
            margin: a,
            amount: l = "some",
            once: f
        } = r, d = {
            root: s ? s.current : void 0,
            rootMargin: a,
            threshold: typeof l == "number" ? l : w2[l]
        }, h = p => {
            const {
                isIntersecting: g
            } = p;
            if (this.isInView === g || (this.isInView = g, f && !g && this.hasEnteredView)) return;
            g && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", g);
            const {
                onViewportEnter: v,
                onViewportLeave: x
            } = this.node.getProps(), w = g ? v : x;
            w && w(p)
        };
        return x2(this.node.current, d, h)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: r,
            prevProps: s
        } = this.node;
        ["amount", "margin", "root"].some(j2(r, s)) && this.startObserver()
    }
    unmount() {}
}

function j2({
    viewport: n = {}
}, {
    viewport: r = {}
} = {}) {
    return s => n[s] !== r[s]
}
const S2 = {
        inView: {
            Feature: L2
        },
        tap: {
            Feature: m2
        },
        focus: {
            Feature: p2
        },
        hover: {
            Feature: h2
        }
    },
    T2 = {
        layout: {
            ProjectionNode: Wm,
            MeasureLayout: Dm
        }
    },
    Yl = {
        current: null
    },
    Gm = {
        current: !1
    };

function N2() {
    if (Gm.current = !0, !!nu)
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)"),
                r = () => Yl.current = n.matches;
            n.addListener(r), r()
        } else Yl.current = !1
}
const E2 = [...gm, We, Tn],
    M2 = n => E2.find(ym(n)),
    ip = new WeakMap;

function V2(n, r, s) {
    for (const a in r) {
        const l = r[a],
            f = s[a];
        if (Qe(l)) n.addValue(a, l);
        else if (Qe(f)) n.addValue(a, Vi(l, {
            owner: n
        }));
        else if (f !== l)
            if (n.hasValue(a)) {
                const d = n.getValue(a);
                d.liveStyle === !0 ? d.jump(l) : d.hasAnimated || d.set(l)
            } else {
                const d = n.getStaticValue(a);
                n.addValue(a, Vi(d !== void 0 ? d : l, {
                    owner: n
                }))
            }
    }
    for (const a in s) r[a] === void 0 && n.removeValue(a);
    return r
}
const sp = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class A2 {
    scrapeMotionValuesFromProps(r, s, a) {
        return {}
    }
    constructor({
        parent: r,
        props: s,
        presenceContext: a,
        reducedMotionConfig: l,
        blockInitialAnimation: f,
        visualState: d
    }, h = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Au, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const T = Zt.now();
            this.renderScheduledAt < T && (this.renderScheduledAt = T, xe.render(this.render, !1, !0))
        };
        const {
            latestValues: p,
            renderState: g,
            onUpdate: v
        } = d;
        this.onUpdate = v, this.latestValues = p, this.baseTarget = { ...p
        }, this.initialValues = s.initial ? { ...p
        } : {}, this.renderState = g, this.parent = r, this.props = s, this.presenceContext = a, this.depth = r ? r.depth + 1 : 0, this.reducedMotionConfig = l, this.options = h, this.blockInitialAnimation = !!f, this.isControllingVariants = ho(s), this.isVariantNode = Np(s), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(r && r.current);
        const {
            willChange: x,
            ...w
        } = this.scrapeMotionValuesFromProps(s, {}, this);
        for (const T in w) {
            const V = w[T];
            p[T] !== void 0 && Qe(V) && V.set(p[T], !1)
        }
    }
    mount(r) {
        this.current = r, ip.set(r, this), this.projection && !this.projection.instance && this.projection.mount(r), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((s, a) => this.bindToMotionValue(a, s)), Gm.current || N2(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Yl.current, this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        ip.delete(this.current), this.projection && this.projection.unmount(), Sn(this.notifyUpdate), Sn(this.render), this.valueSubscriptions.forEach(r => r()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
        for (const r in this.events) this.events[r].clear();
        for (const r in this.features) {
            const s = this.features[r];
            s && (s.unmount(), s.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(r, s) {
        this.valueSubscriptions.has(r) && this.valueSubscriptions.get(r)();
        const a = Wn.has(r),
            l = s.on("change", h => {
                this.latestValues[r] = h, this.props.onUpdate && xe.preRender(this.notifyUpdate), a && this.projection && (this.projection.isTransformDirty = !0)
            }),
            f = s.on("renderRequest", this.scheduleRender);
        let d;
        window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, r, s)), this.valueSubscriptions.set(r, () => {
            l(), f(), d && d(), s.owner && s.stop()
        })
    }
    sortNodePosition(r) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== r.type ? 0 : this.sortInstanceNodePosition(this.current, r.current)
    }
    updateFeatures() {
        let r = "animation";
        for (r in Tr) {
            const s = Tr[r];
            if (!s) continue;
            const {
                isEnabled: a,
                Feature: l
            } = s;
            if (!this.features[r] && l && a(this.props) && (this.features[r] = new l(this)), this.features[r]) {
                const f = this.features[r];
                f.isMounted ? f.update() : (f.mount(), f.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ke()
    }
    getStaticValue(r) {
        return this.latestValues[r]
    }
    setStaticValue(r, s) {
        this.latestValues[r] = s
    }
    update(r, s) {
        (r.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = r, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
        for (let a = 0; a < sp.length; a++) {
            const l = sp[a];
            this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](), delete this.propEventSubscriptions[l]);
            const f = "on" + l,
                d = r[f];
            d && (this.propEventSubscriptions[l] = this.on(l, d))
        }
        this.prevMotionValues = V2(this, this.scrapeMotionValuesFromProps(r, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(r) {
        return this.props.variants ? this.props.variants[r] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(r) {
        const s = this.getClosestVariantNode();
        if (s) return s.variantChildren && s.variantChildren.add(r), () => s.variantChildren.delete(r)
    }
    addValue(r, s) {
        const a = this.values.get(r);
        s !== a && (a && this.removeValue(r), this.bindToMotionValue(r, s), this.values.set(r, s), this.latestValues[r] = s.get())
    }
    removeValue(r) {
        this.values.delete(r);
        const s = this.valueSubscriptions.get(r);
        s && (s(), this.valueSubscriptions.delete(r)), delete this.latestValues[r], this.removeValueFromRenderState(r, this.renderState)
    }
    hasValue(r) {
        return this.values.has(r)
    }
    getValue(r, s) {
        if (this.props.values && this.props.values[r]) return this.props.values[r];
        let a = this.values.get(r);
        return a === void 0 && s !== void 0 && (a = Vi(s === null ? void 0 : s, {
            owner: this
        }), this.addValue(r, a)), a
    }
    readValue(r, s) {
        var a;
        let l = this.latestValues[r] !== void 0 || !this.current ? this.latestValues[r] : (a = this.getBaseTargetFromProps(this.props, r)) !== null && a !== void 0 ? a : this.readValueFromInstance(this.current, r, this.options);
        return l != null && (typeof l == "string" && (pm(l) || sm(l)) ? l = parseFloat(l) : !M2(l) && Tn.test(s) && (l = dm(r, s)), this.setBaseTarget(r, Qe(l) ? l.get() : l)), Qe(l) ? l.get() : l
    }
    setBaseTarget(r, s) {
        this.baseTarget[r] = s
    }
    getBaseTarget(r) {
        var s;
        const {
            initial: a
        } = this.props;
        let l;
        if (typeof a == "string" || typeof a == "object") {
            const d = uu(this.props, a, (s = this.presenceContext) === null || s === void 0 ? void 0 : s.custom);
            d && (l = d[r])
        }
        if (a && l !== void 0) return l;
        const f = this.getBaseTargetFromProps(this.props, r);
        return f !== void 0 && !Qe(f) ? f : this.initialValues[r] !== void 0 && l === void 0 ? void 0 : this.baseTarget[r]
    }
    on(r, s) {
        return this.events[r] || (this.events[r] = new Su), this.events[r].add(s)
    }
    notify(r, ...s) {
        this.events[r] && this.events[r].notify(...s)
    }
}
class Qm extends A2 {
    constructor() {
        super(...arguments), this.KeyframeResolver = vm
    }
    sortInstanceNodePosition(r, s) {
        return r.compareDocumentPosition(s) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(r, s) {
        return r.style ? r.style[s] : void 0
    }
    removeValueFromRenderState(r, {
        vars: s,
        style: a
    }) {
        delete s[r], delete a[r]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: r
        } = this.props;
        Qe(r) && (this.childSubscription = r.on("change", s => {
            this.current && (this.current.textContent = `${s}`)
        }))
    }
}

function k2(n) {
    return window.getComputedStyle(n)
}
class b2 extends Qm {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = Pp
    }
    readValueFromInstance(r, s) {
        if (Wn.has(s)) {
            const a = Vu(s);
            return a && a.default || 0
        } else {
            const a = k2(r),
                l = (bp(s) ? a.getPropertyValue(s) : a[s]) || 0;
            return typeof l == "string" ? l.trim() : l
        }
    }
    measureInstanceViewportBox(r, {
        transformPagePoint: s
    }) {
        return Rm(r, s)
    }
    build(r, s, a) {
        fu(r, s, a.transformTemplate)
    }
    scrapeMotionValuesFromProps(r, s, a) {
        return yu(r, s, a)
    }
}
class C2 extends Qm {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ke
    }
    getBaseTargetFromProps(r, s) {
        return r[s]
    }
    readValueFromInstance(r, s) {
        if (Wn.has(s)) {
            const a = Vu(s);
            return a && a.default || 0
        }
        return s = Rp.has(s) ? s : ou(s), r.getAttribute(s)
    }
    scrapeMotionValuesFromProps(r, s, a) {
        return Fp(r, s, a)
    }
    build(r, s, a) {
        hu(r, s, this.isSVGTag, a.transformTemplate)
    }
    renderInstance(r, s, a, l) {
        Bp(r, s, a, l)
    }
    mount(r) {
        this.isSVGTag = mu(r.tagName), super.mount(r)
    }
}
const z2 = (n, r) => lu(n) ? new C2(r) : new b2(r, {
        allowProjection: n !== C.Fragment
    }),
    P2 = sx({ ...r1,
        ...S2,
        ...f2,
        ...T2
    }, z2),
    pt = wv(P2),
    R2 = () => {
        const {
            register: n
        } = zi(), r = Ci(), {
            language: s
        } = Jt(), l = {
            bn: {
                title: "নিবন্ধন করুন",
                subtitle: "GariSeba-তে যোগ দিন এবং আপনার যানবাহন সেবাগুলি এক জায়গায় পান",
                name: "পুরো নাম",
                email: "ইমেইল ঠিকানা",
                password: "পাসওয়ার্ড",
                phone: "ফোন নম্বর",
                location: "অবস্থান",
                register: "নিবন্ধন করুন",
                haveAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
                login: "লগইন করুন",
                error: "নিবন্ধন ব্যর্থ হয়েছে",
                nameRequired: "নাম আবশ্যক",
                emailRequired: "ইমেইল আবশ্যক",
                passwordRequired: "পাসওয়ার্ড আবশ্যক",
                passwordMin: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে"
            },
            en: {
                title: "Register",
                subtitle: "Join GariSeba and get all your vehicle services in one place",
                name: "Full Name",
                email: "Email Address",
                password: "Password",
                phone: "Phone Number",
                location: "Location",
                register: "Register",
                haveAccount: "Already have an account?",
                login: "Login",
                error: "Registration failed",
                nameRequired: "Name is required",
                emailRequired: "Email is required",
                passwordRequired: "Password is required",
                passwordMin: "Password must be at least 6 characters"
            }
        }[s], [f, d] = C.useState({
            name: "",
            email: "",
            password: "",
            phone: "",
            location: ""
        }), [h, p] = C.useState(""), [g, v] = C.useState(!1), x = T => {
            d({ ...f,
                [T.target.name]: T.target.value
            })
        }, w = async T => {
            T.preventDefault(), p(""), v(!0);
            try {
                await n(f), r("/")
            } catch (V) {
                p(V.message || l.error)
            } finally {
                v(!1)
            }
        };
        return y.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-titanium-50 to-graphite-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
            "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAODU6NA",
            children: y.jsxs(pt.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5
                },
                className: "max-w-md w-full space-y-8",
                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAODY6Ng",
                children: [y.jsxs("div", {
                    "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAOTI6OA",
                    children: [y.jsx("h2", {
                        className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
                        "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAOTM6MTA",
                        children: l.title
                    }), y.jsx("p", {
                        className: "mt-2 text-center text-sm text-gray-600",
                        "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAOTY6MTA",
                        children: l.subtitle
                    })]
                }), y.jsxs("form", {
                    className: "mt-8 space-y-6",
                    onSubmit: w,
                    "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTAxOjg",
                    children: [h && y.jsx("div", {
                        className: "rounded-md bg-red-50 p-4",
                        "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTAzOjEy",
                        children: y.jsx("div", {
                            className: "text-sm text-red-800",
                            "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTA0OjE0",
                            children: h
                        })
                    }), y.jsxs("div", {
                        className: "rounded-md shadow-sm -space-y-px",
                        "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTA4OjEw",
                        children: [y.jsxs("div", {
                            "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTA5OjEy",
                            children: [y.jsx("label", {
                                htmlFor: "name",
                                className: "sr-only",
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTEwOjE0",
                                children: l.name
                            }), y.jsx("input", {
                                id: "name",
                                name: "name",
                                type: "text",
                                required: !0,
                                className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-titanium-500 focus:border-titanium-500 focus:z-10 sm:text-sm",
                                placeholder: l.name,
                                value: f.name,
                                onChange: x,
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTExOjE0"
                            })]
                        }), y.jsxs("div", {
                            "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTIzOjEy",
                            children: [y.jsx("label", {
                                htmlFor: "email",
                                className: "sr-only",
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTI0OjE0",
                                children: l.email
                            }), y.jsx("input", {
                                id: "email",
                                name: "email",
                                type: "email",
                                required: !0,
                                className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-titanium-500 focus:border-titanium-500 focus:z-10 sm:text-sm",
                                placeholder: l.email,
                                value: f.email,
                                onChange: x,
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTI1OjE0"
                            })]
                        }), y.jsxs("div", {
                            "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTM3OjEy",
                            children: [y.jsx("label", {
                                htmlFor: "password",
                                className: "sr-only",
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTM4OjE0",
                                children: l.password
                            }), y.jsx("input", {
                                id: "password",
                                name: "password",
                                type: "password",
                                required: !0,
                                className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-titanium-500 focus:border-titanium-500 focus:z-10 sm:text-sm",
                                placeholder: l.password,
                                value: f.password,
                                onChange: x,
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTM5OjE0"
                            })]
                        }), y.jsxs("div", {
                            "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTUxOjEy",
                            children: [y.jsx("label", {
                                htmlFor: "phone",
                                className: "sr-only",
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTUyOjE0",
                                children: l.phone
                            }), y.jsx("input", {
                                id: "phone",
                                name: "phone",
                                type: "tel",
                                className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-titanium-500 focus:border-titanium-500 focus:z-10 sm:text-sm",
                                placeholder: l.phone,
                                value: f.phone,
                                onChange: x,
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTUzOjE0"
                            })]
                        }), y.jsxs("div", {
                            "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTY0OjEy",
                            children: [y.jsx("label", {
                                htmlFor: "location",
                                className: "sr-only",
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTY1OjE0",
                                children: l.location
                            }), y.jsx("input", {
                                id: "location",
                                name: "location",
                                type: "text",
                                className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-titanium-500 focus:border-titanium-500 focus:z-10 sm:text-sm",
                                placeholder: l.location,
                                value: f.location,
                                onChange: x,
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTY2OjE0"
                            })]
                        })]
                    }), y.jsx("div", {
                        "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTc4OjEw",
                        children: y.jsx("button", {
                            type: "submit",
                            disabled: g,
                            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-titanium-600 hover:bg-titanium-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-titanium-500 disabled:opacity-50",
                            "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTc5OjEy",
                            children: g ? y.jsx("div", {
                                className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTg1OjE2"
                            }) : l.register
                        })
                    }), y.jsx("div", {
                        className: "text-center",
                        "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTkyOjEw",
                        children: y.jsxs("span", {
                            className: "text-sm text-gray-600",
                            "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTkzOjEy",
                            children: [l.haveAccount, " ", y.jsx(Ge, {
                                to: "/login",
                                className: "font-medium text-titanium-600 hover:text-titanium-500",
                                "data-yw": "c3JjL3BhZ2VzL1JlZ2lzdGVyUGFnZS50c3hAMTk1OjE0",
                                children: l.login
                            })]
                        })
                    })]
                })]
            })
        })
    },
    B2 = () => {
        const {
            login: n
        } = zi(), r = Ci(), {
            language: s
        } = Jt(), l = {
            bn: {
                title: "লগইন করুন",
                subtitle: "আপনার GariSeba অ্যাকাউন্টে প্রবেশ করুন",
                email: "ইমেইল ঠিকানা",
                password: "পাসওয়ার্ড",
                login: "লগইন করুন",
                noAccount: "অ্যাকাউন্ট নেই?",
                register: "নিবন্ধন করুন",
                error: "লগইন ব্যর্থ হয়েছে",
                emailRequired: "ইমেইল আবশ্যক",
                passwordRequired: "পাসওয়ার্ড আবশ্যক"
            },
            en: {
                title: "Login",
                subtitle: "Sign in to your GariSeba account",
                email: "Email Address",
                password: "Password",
                login: "Login",
                noAccount: "Don't have an account?",
                register: "Register",
                error: "Login failed",
                emailRequired: "Email is required",
                passwordRequired: "Password is required"
            }
        }[s], [f, d] = C.useState({
            email: "",
            password: ""
        }), [h, p] = C.useState(""), [g, v] = C.useState(!1), x = T => {
            d({ ...f,
                [T.target.name]: T.target.value
            })
        }, w = async T => {
            T.preventDefault(), p(""), v(!0);
            try {
                await n(f.email, f.password), r("/")
            } catch (V) {
                p(V.message || l.error)
            } finally {
                v(!1)
            }
        };
        return y.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-titanium-50 to-graphite-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",
            "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hANzI6NA",
            children: y.jsxs(pt.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5
                },
                className: "max-w-md w-full space-y-8",
                "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hANzM6Ng",
                children: [y.jsxs("div", {
                    "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hANzk6OA",
                    children: [y.jsx("h2", {
                        className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
                        "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAODA6MTA",
                        children: l.title
                    }), y.jsx("p", {
                        className: "mt-2 text-center text-sm text-gray-600",
                        "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAODM6MTA",
                        children: l.subtitle
                    })]
                }), y.jsxs("form", {
                    className: "mt-8 space-y-6",
                    onSubmit: w,
                    "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAODg6OA",
                    children: [h && y.jsx("div", {
                        className: "rounded-md bg-red-50 p-4",
                        "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAOTA6MTI",
                        children: y.jsx("div", {
                            className: "text-sm text-red-800",
                            "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAOTE6MTQ",
                            children: h
                        })
                    }), y.jsxs("div", {
                        className: "rounded-md shadow-sm -space-y-px",
                        "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAOTU6MTA",
                        children: [y.jsxs("div", {
                            "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAOTY6MTI",
                            children: [y.jsx("label", {
                                htmlFor: "email",
                                className: "sr-only",
                                "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAOTc6MTQ",
                                children: l.email
                            }), y.jsx("input", {
                                id: "email",
                                name: "email",
                                type: "email",
                                required: !0,
                                className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-titanium-500 focus:border-titanium-500 focus:z-10 sm:text-sm",
                                placeholder: l.email,
                                value: f.email,
                                onChange: x,
                                "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAOTg6MTQ"
                            })]
                        }), y.jsxs("div", {
                            "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAMTEwOjEy",
                            children: [y.jsx("label", {
                                htmlFor: "password",
                                className: "sr-only",
                                "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAMTExOjE0",
                                children: l.password
                            }), y.jsx("input", {
                                id: "password",
                                name: "password",
                                type: "password",
                                required: !0,
                                className: "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-titanium-500 focus:border-titanium-500 focus:z-10 sm:text-sm",
                                placeholder: l.password,
                                value: f.password,
                                onChange: x,
                                "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAMTEyOjE0"
                            })]
                        })]
                    }), y.jsx("div", {
                        "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAMTI1OjEw",
                        children: y.jsx("button", {
                            type: "submit",
                            disabled: g,
                            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-titanium-600 hover:bg-titanium-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-titanium-500 disabled:opacity-50",
                            "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAMTI2OjEy",
                            children: g ? y.jsx("div", {
                                className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin",
                                "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAMTMyOjE2"
                            }) : l.login
                        })
                    }), y.jsx("div", {
                        className: "text-center",
                        "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAMTM5OjEw",
                        children: y.jsxs("span", {
                            className: "text-sm text-gray-600",
                            "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAMTQwOjEy",
                            children: [l.noAccount, " ", y.jsx(Ge, {
                                to: "/register",
                                className: "font-medium text-titanium-600 hover:text-titanium-500",
                                "data-yw": "c3JjL3BhZ2VzL0xvZ2luUGFnZS50c3hAMTQyOjE0",
                                children: l.register
                            })]
                        })
                    })]
                })]
            })
        })
    },
    kl = [{
        id: "1",
        make: "Toyota",
        model: "Corolla",
        year: 2022,
        price: 25e5,
        mileage: 15e3,
        fuelType: "Petrol",
        transmission: "Automatic",
        color: "White",
        condition: "Used",
        images: ["https://di-enrollment-api.s3.amazonaws.com/toyota/models/2022/corolla_hybrid/colors/wind_chill_pearl.jpg", "https://di-enrollment-api.s3.amazonaws.com/toyota/models/2022/corolla/colors/SUPER+WHITE+W_+BLACK+SAND+PEARL+ROOF.jpg"],
        description: "Excellent condition Toyota Corolla with low mileage. Single owner, regularly serviced.",
        features: ["Airbags", "ABS", "Climate Control", "Power Windows", "Navigation System"],
        seller: {
            name: "Mohammad Karim",
            phone: "01711-234567",
            location: "Gulshan 2, Dhaka"
        },
        postedDate: "2024-01-15",
        isFeatured: !0
    }, {
        id: "2",
        make: "Honda",
        model: "Civic",
        year: 2021,
        price: 28e5,
        mileage: 25e3,
        fuelType: "Petrol",
        transmission: "Manual",
        color: "Silver",
        condition: "Used",
        images: ["https://i.ytimg.com/vi/baYHxherDSc/maxresdefault.jpg", "https://service.secureoffersites.com//images/GetLibraryImage?fileNameOrId=52998"],
        description: "Well-maintained Honda Civic with excellent fuel efficiency. Perfect for city driving.",
        features: ["Airbags", "ABS", "Power Steering", "Central Locking", "Music System"],
        seller: {
            name: "Fatima Rahman",
            phone: "01712-345678",
            location: "Dhanmondi, Dhaka"
        },
        postedDate: "2024-01-20",
        isFeatured: !1
    }, {
        id: "3",
        make: "BMW",
        model: "X5",
        year: 2023,
        price: 85e5,
        mileage: 8e3,
        fuelType: "Petrol",
        transmission: "Automatic",
        color: "Black",
        condition: "Used",
        images: ["https://mystrongad.com/MWB_MotorwerksBMW/Digital/X5/2023/CAR%20CUTS/webp/23-BMW-X5-Jet-Black.webp", "https://vehicle-images.dealerinspire.com/fde5-11002002/5UXCR6C01P9R66671/f8ebb5b742a990d1617e2cc0c29d0524.jpg"],
        description: "Luxury BMW X5 with premium features. Like new condition with full service history.",
        features: ["Leather Seats", "Sunroof", "Navigation", "4WD", "Premium Sound System", "Heated Seats"],
        seller: {
            name: "Ahmed Hassan",
            phone: "01713-456789",
            location: "Gulshan 1, Dhaka"
        },
        postedDate: "2024-02-01",
        isFeatured: !0
    }, {
        id: "4",
        make: "Mercedes-Benz",
        model: "C-Class",
        year: 2022,
        price: 62e5,
        mileage: 12e3,
        fuelType: "Petrol",
        transmission: "Automatic",
        color: "Blue",
        condition: "Used",
        images: ["https://vehicle-images.dealerinspire.com/f3f2-11002540/W1KAF4HB9NR067723/dc348f206398f74068361e058345a330.jpeg", "https://di-uploads-pod7.dealerinspire.com/mercedesbenzofrockvillecentre/uploads/2022/05/Starling-Blue-metallic.jpeg"],
        description: "Premium Mercedes-Benz C-Class with luxury appointments and advanced safety features.",
        features: ["AMG Package", "Panoramic Sunroof", "Premium Audio", "Adaptive Cruise Control", "Parking Assist"],
        seller: {
            name: "Rashid Ahmed",
            phone: "01714-567890",
            location: "Banani, Dhaka"
        },
        postedDate: "2024-02-10",
        isFeatured: !0
    }, {
        id: "5",
        make: "Nissan",
        model: "Altima",
        year: 2020,
        price: 22e5,
        mileage: 35e3,
        fuelType: "Petrol",
        transmission: "CVT",
        color: "White",
        condition: "Used",
        images: ["https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800", "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800"],
        description: "Reliable Nissan Altima with CVT transmission. Great fuel economy and comfortable ride.",
        features: ["CVT Transmission", "Backup Camera", "Bluetooth", "Keyless Entry", "Power Windows"],
        seller: {
            name: "Sadia Begum",
            phone: "01715-678901",
            location: "Uttara, Dhaka"
        },
        postedDate: "2024-02-15",
        isFeatured: !1
    }, {
        id: "6",
        make: "Hyundai",
        model: "Elantra",
        year: 2023,
        price: 27e5,
        mileage: 5e3,
        fuelType: "Petrol",
        transmission: "Automatic",
        color: "Red",
        condition: "Used",
        images: ["https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800", "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800"],
        description: "Nearly new Hyundai Elantra with comprehensive warranty coverage remaining.",
        features: ["Smart Key", "Digital Cluster", "Wireless Charging", "Apple CarPlay", "Safety Suite"],
        seller: {
            name: "Kamal Uddin",
            phone: "01716-789012",
            location: "Mirpur, Dhaka"
        },
        postedDate: "2024-02-20",
        isFeatured: !1
    }],
    D2 = () => {
        const {
            language: n
        } = Jt(), [r, s] = C.useState(""), [a, l] = C.useState(""), [f, d] = C.useState({
            min: 0,
            max: 1e7
        }), p = {
            bn: {
                title: "কিনুন এবং বিক্রি করুন",
                subtitle: "আপনার পছন্দের গাড়ি খুঁজুন বা আপনার গাড়ি বিক্রি করুন",
                searchPlaceholder: "গাড়ি খুঁজুন...",
                brand: "ব্র্যান্ড",
                price: "মূল্য",
                allBrands: "সব ব্র্যান্ড",
                viewDetails: "বিস্তারিত দেখুন",
                featuredCars: "বিশেষ গাড়িসমূহ"
            },
            en: {
                title: "Buy & Sell",
                subtitle: "Find your dream car or sell your vehicle",
                searchPlaceholder: "Search cars...",
                brand: "Brand",
                price: "Price",
                allBrands: "All Brands",
                viewDetails: "View Details",
                featuredCars: "Featured Cars"
            }
        }[n], g = kl.filter(w => {
            const T = w.make.toLowerCase().includes(r.toLowerCase()) || w.model.toLowerCase().includes(r.toLowerCase()),
                V = !a || w.make === a,
                A = w.price >= f.min && w.price <= f.max;
            return T && V && A
        }), v = [...new Set(kl.map(w => w.make))], x = kl.filter(w => w.isFeatured);
        return y.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-titanium-50 to-graphite-50 py-8",
            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA1MTo0",
            children: y.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA1Mjo2",
                children: [y.jsxs(pt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "text-center mb-12",
                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA1Mzo4",
                    children: [y.jsx("h1", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA1OToxMA",
                        children: p.title
                    }), y.jsx("p", {
                        className: "text-xl text-gray-600",
                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA2MDoxMA",
                        children: p.subtitle
                    })]
                }), x.length > 0 && y.jsxs("section", {
                    className: "mb-12",
                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA2NToxMA",
                    children: [y.jsx("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-6",
                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA2NjoxMg",
                        children: p.featuredCars
                    }), y.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8",
                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA2NzoxMg",
                        children: x.map((w, T) => y.jsxs(pt.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .5,
                                delay: T * .1
                            },
                            className: "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative",
                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA2OToxNg",
                            children: [y.jsx("div", {
                                className: "absolute top-4 left-4 bg-titanium-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10",
                                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA3NzoxOA",
                                children: n === "bn" ? "বিশেষ" : "Featured"
                            }), y.jsx("div", {
                                className: "w-full h-56 bg-gray-200 overflow-hidden",
                                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA4MToxOA",
                                children: y.jsx("img", {
                                    src: w.images[0],
                                    alt: `${w.year} ${w.make} ${w.model}`,
                                    className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
                                    onError: V => {
                                        const A = V.target;
                                        A.src = `https://via.placeholder.com/400x300/e2e8f0/64748b?text=${w.make}+${w.model}`
                                    },
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA4MjoyMA"
                                })
                            }), y.jsxs("div", {
                                className: "p-6",
                                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA5MzoxOA",
                                children: [y.jsxs("h3", {
                                    className: "text-xl font-semibold text-gray-900 mb-2",
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA5NDoyMA",
                                    children: [w.year, " ", w.make, " ", w.model]
                                }), y.jsxs("p", {
                                    className: "text-2xl font-bold text-titanium-600 mb-3",
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEA5NzoyMA",
                                    children: ["TK ", w.price.toLocaleString(n === "bn" ? "bn-BD" : "en-US")]
                                }), y.jsxs("div", {
                                    className: "text-sm text-gray-600 space-y-2 mb-4",
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMDA6MjA",
                                    children: [y.jsxs("div", {
                                        className: "flex justify-between",
                                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMDE6MjI",
                                        children: [y.jsxs("span", {
                                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMDI6MjQ",
                                            children: [n === "bn" ? "মাইলেজ" : "Mileage", ":"]
                                        }), y.jsxs("span", {
                                            className: "font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMDM6MjQ",
                                            children: [w.mileage.toLocaleString(), " km"]
                                        })]
                                    }), y.jsxs("div", {
                                        className: "flex justify-between",
                                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMDU6MjI",
                                        children: [y.jsxs("span", {
                                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMDY6MjQ",
                                            children: [n === "bn" ? "জ্বালানি" : "Fuel", ":"]
                                        }), y.jsx("span", {
                                            className: "font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMDc6MjQ",
                                            children: w.fuelType
                                        })]
                                    }), y.jsxs("div", {
                                        className: "flex justify-between",
                                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMDk6MjI",
                                        children: [y.jsxs("span", {
                                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMTA6MjQ",
                                            children: [n === "bn" ? "অবস্থা" : "Condition", ":"]
                                        }), y.jsx("span", {
                                            className: "font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMTE6MjQ",
                                            children: w.condition
                                        })]
                                    }), y.jsxs("div", {
                                        className: "flex justify-between",
                                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMTM6MjI",
                                        children: [y.jsxs("span", {
                                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMTQ6MjQ",
                                            children: [n === "bn" ? "অবস্থান" : "Location", ":"]
                                        }), y.jsx("span", {
                                            className: "font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMTU6MjQ",
                                            children: w.seller.location
                                        })]
                                    })]
                                }), y.jsx(Ge, {
                                    to: `/car/${w.id}`,
                                    className: "w-full bg-titanium-600 text-white text-center py-3 px-4 rounded-md hover:bg-titanium-700 transition-colors font-semibold inline-block",
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMTk6MjA",
                                    children: p.viewDetails
                                })]
                            })]
                        }, w.id))
                    })]
                }), y.jsx("div", {
                    className: "bg-white rounded-lg shadow-md p-6 mb-8",
                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMzM6OA",
                    children: y.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMzQ6MTA",
                        children: [y.jsxs("div", {
                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMzU6MTI",
                            children: [y.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMzY6MTQ",
                                children: p.searchPlaceholder
                            }), y.jsx("input", {
                                type: "text",
                                placeholder: p.searchPlaceholder,
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-titanium-500",
                                value: r,
                                onChange: w => s(w.target.value),
                                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxMzk6MTQ"
                            })]
                        }), y.jsxs("div", {
                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxNDg6MTI",
                            children: [y.jsx("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxNDk6MTQ",
                                children: p.brand
                            }), y.jsxs("select", {
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-titanium-500",
                                value: a,
                                onChange: w => l(w.target.value),
                                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxNTI6MTQ",
                                children: [y.jsx("option", {
                                    value: "",
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxNTc6MTY",
                                    children: p.allBrands
                                }), v.map(w => y.jsx("option", {
                                    value: w,
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxNTk6MTg",
                                    children: w
                                }, w))]
                            })]
                        }), y.jsxs("div", {
                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxNjQ6MTI",
                            children: [y.jsxs("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxNjU6MTQ",
                                children: [p.price, " (", n === "bn" ? "টাকা" : "TK", ")"]
                            }), y.jsxs("div", {
                                className: "flex space-x-2",
                                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxNjg6MTQ",
                                children: [y.jsx("input", {
                                    type: "number",
                                    placeholder: "Min",
                                    className: "w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-titanium-500",
                                    value: f.min,
                                    onChange: w => d({ ...f,
                                        min: Number(w.target.value)
                                    }),
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxNjk6MTY"
                                }), y.jsx("input", {
                                    type: "number",
                                    placeholder: "Max",
                                    className: "w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-titanium-500",
                                    value: f.max,
                                    onChange: w => d({ ...f,
                                        max: Number(w.target.value)
                                    }),
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxNzY6MTY"
                                })]
                            })]
                        })]
                    })
                }), y.jsxs("section", {
                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxODk6OA",
                    children: [y.jsx("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-6",
                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxOTA6MTA",
                        children: n === "bn" ? "সমস্ত গাড়ি" : "All Cars"
                    }), y.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxOTM6MTA",
                        children: g.map((w, T) => y.jsxs(pt.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .5,
                                delay: T * .1
                            },
                            className: "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow",
                            "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAxOTU6MTQ",
                            children: [y.jsx("div", {
                                className: "w-full h-48 bg-gray-200 overflow-hidden",
                                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyMDI6MTY",
                                children: y.jsx("img", {
                                    src: w.images[0],
                                    alt: `${w.year} ${w.make} ${w.model}`,
                                    className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300",
                                    onError: V => {
                                        const A = V.target;
                                        A.src = `https://via.placeholder.com/400x300/e2e8f0/64748b?text=${w.make}+${w.model}`
                                    },
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyMDM6MTg"
                                })
                            }), y.jsxs("div", {
                                className: "p-4",
                                "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyMTQ6MTY",
                                children: [y.jsxs("h3", {
                                    className: "text-lg font-semibold text-gray-900 mb-2",
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyMTU6MTg",
                                    children: [w.year, " ", w.make, " ", w.model]
                                }), y.jsxs("p", {
                                    className: "text-2xl font-bold text-titanium-600 mb-2",
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyMTg6MTg",
                                    children: ["TK ", w.price.toLocaleString(n === "bn" ? "bn-BD" : "en-US")]
                                }), y.jsxs("div", {
                                    className: "text-sm text-gray-600 space-y-1 mb-4",
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyMjE6MTg",
                                    children: [y.jsxs("p", {
                                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyMjI6MjA",
                                        children: [n === "bn" ? "মাইলেজ" : "Mileage", ": ", w.mileage.toLocaleString(), " km"]
                                    }), y.jsxs("p", {
                                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyMjM6MjA",
                                        children: [n === "bn" ? "জ্বালানি" : "Fuel", ": ", w.fuelType]
                                    }), y.jsxs("p", {
                                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyMjQ6MjA",
                                        children: [n === "bn" ? "অবস্থা" : "Condition", ": ", w.condition]
                                    })]
                                }), y.jsx(Ge, {
                                    to: `/car/${w.id}`,
                                    className: "w-full bg-titanium-600 text-white text-center py-2 px-4 rounded-md hover:bg-titanium-700 transition-colors font-medium inline-block",
                                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyMjc6MTg",
                                    children: p.viewDetails
                                })]
                            })]
                        }, w.id))
                    })]
                }), g.length === 0 && y.jsx("div", {
                    className: "text-center py-12",
                    "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyNDA6MTA",
                    children: y.jsx("p", {
                        className: "text-gray-600 text-lg",
                        "data-yw": "c3JjL3BhZ2VzL0J1eVNlbGxQYWdlLnRzeEAyNDE6MTI",
                        children: n === "bn" ? "কোন গাড়ি পাওয়া যায়নি" : "No cars found"
                    })
                })]
            })
        })
    },
    F2 = () => {
        const {
            id: n
        } = bg(), {
            language: r
        } = Jt(), a = {
            bn: {
                back: "ফিরে যান",
                price: "মূল্য",
                mileage: "মাইলেজ",
                fuelType: "জ্বালানি টাইপ",
                transmission: "ট্রান্সমিশন",
                color: "রঙ",
                condition: "অবস্থা",
                description: "বিবরণ",
                features: "বৈশিষ্ট্য",
                seller: "বিক্রেতা",
                contact: "যোগাযোগ করুন"
            },
            en: {
                back: "Back",
                price: "Price",
                mileage: "Mileage",
                fuelType: "Fuel Type",
                transmission: "Transmission",
                color: "Color",
                condition: "Condition",
                description: "Description",
                features: "Features",
                seller: "Seller",
                contact: "Contact"
            }
        }[r], l = {
            make: r === "bn" ? "টয়োটা" : "Toyota",
            model: r === "bn" ? "করোলা" : "Corolla",
            year: 2022,
            price: 25e5,
            mileage: 15e3,
            fuelType: r === "bn" ? "পেট্রোল" : "Petrol",
            transmission: r === "bn" ? "অটোমেটিক" : "Automatic",
            color: r === "bn" ? "সাদা" : "White",
            condition: r === "bn" ? "ব্যবহৃত" : "Used",
            description: r === "bn" ? "খুব ভালো অবস্থায় আছে, নিয়মিত সার্ভিস করা, একমাত্র মালিক" : "Very good condition, regularly serviced, single owner",
            features: r === "bn" ? ["এয়ারব্যাগ", "ABS", "ক্লাইমেট কন্ট্রোল", "পাওয়ার উইন্ডো"] : ["Airbags", "ABS", "Climate Control", "Power Windows"],
            seller: {
                name: r === "bn" ? "মোহাম্মদ করিম" : "Mohammad Karim",
                phone: r === "bn" ? "০১৭১১-২৩৪৫৬৭" : "01711-234567",
                location: r === "bn" ? "গুলশান ২, ঢাকা" : "Gulshan 2, Dhaka"
            }
        };
        return y.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-titanium-50 to-graphite-50 py-8",
            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDY2OjQ",
            children: y.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDY3OjY",
                children: [y.jsxs(Ge, {
                    to: "/buy-sell",
                    className: "inline-flex items-center text-titanium-600 hover:text-titanium-800 mb-6",
                    "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDY4Ojg",
                    children: [y.jsx("svg", {
                        className: "w-5 h-5 mr-2",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDcyOjEw",
                        children: y.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15 19l-7-7 7-7",
                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDczOjEy"
                        })
                    }), a.back]
                }), y.jsx(pt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "bg-white rounded-lg shadow-lg overflow-hidden",
                    "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDc4Ojg",
                    children: y.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8 p-6",
                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDg0OjEw",
                        children: [y.jsx("div", {
                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDg1OjEy",
                            children: y.jsx("div", {
                                className: "aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4",
                                "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDg2OjE0",
                                children: y.jsxs("div", {
                                    className: "flex items-center justify-center h-full text-gray-500",
                                    "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDg3OjE2",
                                    children: [l.make, " ", l.model, " ", l.year]
                                })
                            })
                        }), y.jsxs("div", {
                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDkzOjEy",
                            children: [y.jsxs("h1", {
                                className: "text-3xl font-bold text-gray-900 mb-4",
                                "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDk0OjE0",
                                children: [l.make, " ", l.model, " ", l.year]
                            }), y.jsxs("div", {
                                className: "space-y-4",
                                "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDk4OjE0",
                                children: [y.jsxs("div", {
                                    className: "flex justify-between items-center",
                                    "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDk5OjE2",
                                    children: [y.jsxs("span", {
                                        className: "text-gray-600",
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEwMDoxOA",
                                        children: [a.price, ":"]
                                    }), y.jsxs("span", {
                                        className: "text-2xl font-bold text-titanium-600",
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEwMToxOA",
                                        children: ["TK ", l.price.toLocaleString(r === "bn" ? "bn-BD" : "en-US")]
                                    })]
                                }), y.jsxs("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEwNjoxNg",
                                    children: [y.jsxs("div", {
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEwNzoxOA",
                                        children: [y.jsxs("span", {
                                            className: "text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEwODoyMA",
                                            children: [a.mileage, ":"]
                                        }), y.jsxs("p", {
                                            className: "font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEwOToyMA",
                                            children: [l.mileage.toLocaleString(), " km"]
                                        })]
                                    }), y.jsxs("div", {
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDExMToxOA",
                                        children: [y.jsxs("span", {
                                            className: "text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDExMjoyMA",
                                            children: [a.fuelType, ":"]
                                        }), y.jsx("p", {
                                            className: "font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDExMzoyMA",
                                            children: l.fuelType
                                        })]
                                    }), y.jsxs("div", {
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDExNToxOA",
                                        children: [y.jsxs("span", {
                                            className: "text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDExNjoyMA",
                                            children: [a.transmission, ":"]
                                        }), y.jsx("p", {
                                            className: "font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDExNzoyMA",
                                            children: l.transmission
                                        })]
                                    }), y.jsxs("div", {
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDExOToxOA",
                                        children: [y.jsxs("span", {
                                            className: "text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEyMDoyMA",
                                            children: [a.color, ":"]
                                        }), y.jsx("p", {
                                            className: "font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEyMToyMA",
                                            children: l.color
                                        })]
                                    }), y.jsxs("div", {
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEyMzoxOA",
                                        children: [y.jsxs("span", {
                                            className: "text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEyNDoyMA",
                                            children: [a.condition, ":"]
                                        }), y.jsx("p", {
                                            className: "font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEyNToyMA",
                                            children: l.condition
                                        })]
                                    })]
                                }), y.jsxs("div", {
                                    "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEyOToxNg",
                                    children: [y.jsx("h3", {
                                        className: "text-lg font-semibold text-gray-900 mb-2",
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEzMDoxOA",
                                        children: a.description
                                    }), y.jsx("p", {
                                        className: "text-gray-600",
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEzMToxOA",
                                        children: l.description
                                    })]
                                }), y.jsxs("div", {
                                    "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEzNDoxNg",
                                    children: [y.jsx("h3", {
                                        className: "text-lg font-semibold text-gray-900 mb-2",
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEzNToxOA",
                                        children: a.features
                                    }), y.jsx("ul", {
                                        className: "list-disc list-inside text-gray-600 space-y-1",
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEzNjoxOA",
                                        children: l.features.map((f, d) => y.jsx("li", {
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDEzODoyMg",
                                            children: f
                                        }, d))
                                    })]
                                }), y.jsxs("div", {
                                    className: "border-t pt-4",
                                    "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDE0MzoxNg",
                                    children: [y.jsx("h3", {
                                        className: "text-lg font-semibold text-gray-900 mb-2",
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDE0NDoxOA",
                                        children: a.seller
                                    }), y.jsxs("div", {
                                        className: "space-y-2",
                                        "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDE0NToxOA",
                                        children: [y.jsx("p", {
                                            className: "text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDE0NjoyMA",
                                            children: l.seller.name
                                        }), y.jsx("p", {
                                            className: "text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDE0NzoyMA",
                                            children: l.seller.phone
                                        }), y.jsx("p", {
                                            className: "text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDE0ODoyMA",
                                            children: l.seller.location
                                        })]
                                    })]
                                }), y.jsx("button", {
                                    className: "w-full bg-titanium-600 text-white py-3 px-6 rounded-lg hover:bg-titanium-700 transition-colors font-semibold",
                                    "data-yw": "c3JjL3BhZ2VzL0NhckRldGFpbHMudHN4QDE1MjoxNg",
                                    children: a.contact
                                })]
                            })]
                        })]
                    })
                })]
            })
        })
    },
    O2 = () => {
        const {
            language: n
        } = Jt(), s = {
            bn: {
                title: "আমাদের সেবাসমূহ",
                subtitle: "আপনার যানবাহনের জন্য সম্পূর্ণ সমাধান",
                services: [{
                    title: "গাড়ি রেজিস্ট্রেশন",
                    description: "দ্রুত এবং সহজ গাড়ি রেজিস্ট্রেশন পরিষেবা",
                    icon: "🚗"
                }, {
                    title: "ট্রাফিক ফাইন চেক",
                    description: "আপনার গাড়ির ট্রাফিক ফাইন স্ট্যাটাস পরীক্ষা করুন",
                    icon: "📋"
                }, {
                    title: "ইন্স্যুরেন্স যাচাই",
                    description: "গাড়ির ইন্স্যুরেন্স যাচাই এবং রিনিউয়াল",
                    icon: "🛡️"
                }, {
                    title: "সার্ভিস সেন্টার",
                    description: "আপনার কাছের সেরা সার্ভিস সেন্টার খুঁজুন",
                    icon: "🔧"
                }]
            },
            en: {
                title: "Our Services",
                subtitle: "Complete solution for your vehicle",
                services: [{
                    title: "Car Registration",
                    description: "Fast and easy vehicle registration service",
                    icon: "🚗"
                }, {
                    title: "Traffic Fine Check",
                    description: "Check your vehicle's traffic fine status",
                    icon: "📋"
                }, {
                    title: "Insurance Verification",
                    description: "Verify and renew your car insurance",
                    icon: "🛡️"
                }, {
                    title: "Service Centers",
                    description: "Find the best service centers near you",
                    icon: "🔧"
                }]
            }
        }[n];
        return y.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-titanium-50 to-graphite-50 py-8",
            "data-yw": "c3JjL3BhZ2VzL1NlcnZpY2VzUGFnZS50c3hANjY6NA",
            children: y.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL1NlcnZpY2VzUGFnZS50c3hANjc6Ng",
                children: [y.jsxs(pt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "text-center mb-12",
                    "data-yw": "c3JjL3BhZ2VzL1NlcnZpY2VzUGFnZS50c3hANjg6OA",
                    children: [y.jsx("h1", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        "data-yw": "c3JjL3BhZ2VzL1NlcnZpY2VzUGFnZS50c3hANzQ6MTA",
                        children: s.title
                    }), y.jsx("p", {
                        className: "text-xl text-gray-600",
                        "data-yw": "c3JjL3BhZ2VzL1NlcnZpY2VzUGFnZS50c3hANzU6MTA",
                        children: s.subtitle
                    })]
                }), y.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    "data-yw": "c3JjL3BhZ2VzL1NlcnZpY2VzUGFnZS50c3hANzg6OA",
                    children: s.services.map((a, l) => y.jsxs(pt.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: l * .1
                        },
                        whileHover: {
                            y: -5
                        },
                        className: "bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow",
                        "data-yw": "c3JjL3BhZ2VzL1NlcnZpY2VzUGFnZS50c3hAODA6MTI",
                        children: [y.jsx("div", {
                            className: "text-4xl mb-4 text-center",
                            "data-yw": "c3JjL3BhZ2VzL1NlcnZpY2VzUGFnZS50c3hAODg6MTQ",
                            children: a.icon
                        }), y.jsx("h3", {
                            className: "text-xl font-semibold text-gray-900 mb-2 text-center",
                            "data-yw": "c3JjL3BhZ2VzL1NlcnZpY2VzUGFnZS50c3hAODk6MTQ",
                            children: a.title
                        }), y.jsx("p", {
                            className: "text-gray-600 text-center",
                            "data-yw": "c3JjL3BhZ2VzL1NlcnZpY2VzUGFnZS50c3hAOTA6MTQ",
                            children: a.description
                        })]
                    }, l))
                })]
            })
        })
    },
    Z2 = () => {
        const {
            language: n
        } = Jt(), s = {
            bn: {
                title: "গাড়ি ইন্স্যুরেন্স",
                subtitle: "আপনার গাড়ির জন্য সেরা ইন্স্যুরেন্স পরিকল্পনা",
                providers: [{
                    name: "বাংলাদেশ জেনারেল ইন্স্যুরেন্স",
                    description: "সরকারি ইন্স্যুরেন্স সেবা"
                }, {
                    name: "প্রগতি ইন্স্যুরেন্স",
                    description: "বিশ্বস্ত বেসরকারি ইন্স্যুরেন্স"
                }, {
                    name: "গ্রীন ডেল্টা ইন্স্যুরেন্স",
                    description: "সম্পূর্ণ গাড়ি ইন্স্যুরেন্স"
                }, {
                    name: "ইস্টার্ন ইন্স্যুরেন্স",
                    description: "ব্যক্তিগত এবং বাণিজ্যিক গাড়ি"
                }]
            },
            en: {
                title: "Car Insurance",
                subtitle: "Best insurance plans for your vehicle",
                providers: [{
                    name: "Bangladesh General Insurance",
                    description: "Government insurance service"
                }, {
                    name: "Progoti Insurance",
                    description: "Trusted private insurance"
                }, {
                    name: "Green Delta Insurance",
                    description: "Complete car insurance"
                }, {
                    name: "Eastern Insurance",
                    description: "Personal and commercial vehicles"
                }]
            }
        }[n];
        return y.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-titanium-50 to-graphite-50 py-8",
            "data-yw": "c3JjL3BhZ2VzL0luc3VyYW5jZVBhZ2UudHN4QDM0OjQ",
            children: y.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0luc3VyYW5jZVBhZ2UudHN4QDM1OjY",
                children: [y.jsxs(pt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "text-center mb-12",
                    "data-yw": "c3JjL3BhZ2VzL0luc3VyYW5jZVBhZ2UudHN4QDM2Ojg",
                    children: [y.jsx("h1", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        "data-yw": "c3JjL3BhZ2VzL0luc3VyYW5jZVBhZ2UudHN4QDQyOjEw",
                        children: s.title
                    }), y.jsx("p", {
                        className: "text-xl text-gray-600",
                        "data-yw": "c3JjL3BhZ2VzL0luc3VyYW5jZVBhZ2UudHN4QDQzOjEw",
                        children: s.subtitle
                    })]
                }), y.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    "data-yw": "c3JjL3BhZ2VzL0luc3VyYW5jZVBhZ2UudHN4QDQ2Ojg",
                    children: s.providers.map((a, l) => y.jsxs(pt.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: l * .1
                        },
                        className: "bg-white p-6 rounded-xl shadow-lg",
                        "data-yw": "c3JjL3BhZ2VzL0luc3VyYW5jZVBhZ2UudHN4QDQ4OjEy",
                        children: [y.jsx("h3", {
                            className: "text-xl font-semibold text-gray-900 mb-2",
                            "data-yw": "c3JjL3BhZ2VzL0luc3VyYW5jZVBhZ2UudHN4QDU1OjE0",
                            children: a.name
                        }), y.jsx("p", {
                            className: "text-gray-600",
                            "data-yw": "c3JjL3BhZ2VzL0luc3VyYW5jZVBhZ2UudHN4QDU2OjE0",
                            children: a.description
                        })]
                    }, l))
                })]
            })
        })
    },
    J2 = () => {
        const {
            language: n
        } = Jt(), s = {
            bn: {
                title: "অবস্থান এবং সার্ভিস সেন্টার",
                subtitle: "আপনার কাছের গাড়ি সেবা সেন্টার খুঁজুন",
                centers: [{
                    name: "টয়োটা বনশ্রী সার্ভিস সেন্টার",
                    location: "গুলশান ২, ঢাকা",
                    phone: "০১৭১১-২৩৪৫৬৭"
                }, {
                    name: "হোন্ডা তেজগাঁও সার্ভিস সেন্টার",
                    location: "তেজগাঁও, ঢাকা",
                    phone: "০১৭১২-৩৪৫৬৭৮"
                }, {
                    name: "নিশান উত্তরা সার্ভিস সেন্টার",
                    location: "উত্তরা, ঢাকা",
                    phone: "০১৭১৩-৪৫৬৭৮৯"
                }, {
                    name: "সুজুকি মিরপুর সার্ভিস সেন্টার",
                    location: "মিরপুর, ঢাকা",
                    phone: "০১৭১৪-৫৬৭৮৯০"
                }]
            },
            en: {
                title: "Locations & Service Centers",
                subtitle: "Find car service centers near you",
                centers: [{
                    name: "Toyota Banani Service Center",
                    location: "Gulshan 2, Dhaka",
                    phone: "01711-234567"
                }, {
                    name: "Honda Tejgaon Service Center",
                    location: "Tejgaon, Dhaka",
                    phone: "01712-345678"
                }, {
                    name: "Nissan Uttara Service Center",
                    location: "Uttara, Dhaka",
                    phone: "01713-456789"
                }, {
                    name: "Suzuki Mirpur Service Center",
                    location: "Mirpur, Dhaka",
                    phone: "01714-567890"
                }]
            }
        }[n];
        return y.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-titanium-50 to-graphite-50 py-8",
            "data-yw": "c3JjL3BhZ2VzL0xvY2F0aW9uc1BhZ2UudHN4QDM0OjQ",
            children: y.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL0xvY2F0aW9uc1BhZ2UudHN4QDM1OjY",
                children: [y.jsxs(pt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "text-center mb-12",
                    "data-yw": "c3JjL3BhZ2VzL0xvY2F0aW9uc1BhZ2UudHN4QDM2Ojg",
                    children: [y.jsx("h1", {
                        className: "text-4xl font-bold text-gray-900 mb-4",
                        "data-yw": "c3JjL3BhZ2VzL0xvY2F0aW9uc1BhZ2UudHN4QDQyOjEw",
                        children: s.title
                    }), y.jsx("p", {
                        className: "text-xl text-gray-600",
                        "data-yw": "c3JjL3BhZ2VzL0xvY2F0aW9uc1BhZ2UudHN4QDQzOjEw",
                        children: s.subtitle
                    })]
                }), y.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    "data-yw": "c3JjL3BhZ2VzL0xvY2F0aW9uc1BhZ2UudHN4QDQ2Ojg",
                    children: s.centers.map((a, l) => y.jsxs(pt.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: l * .1
                        },
                        className: "bg-white p-6 rounded-xl shadow-lg",
                        "data-yw": "c3JjL3BhZ2VzL0xvY2F0aW9uc1BhZ2UudHN4QDQ4OjEy",
                        children: [y.jsx("h3", {
                            className: "text-xl font-semibold text-gray-900 mb-2",
                            "data-yw": "c3JjL3BhZ2VzL0xvY2F0aW9uc1BhZ2UudHN4QDU1OjE0",
                            children: a.name
                        }), y.jsx("p", {
                            className: "text-gray-600 mb-2",
                            "data-yw": "c3JjL3BhZ2VzL0xvY2F0aW9uc1BhZ2UudHN4QDU2OjE0",
                            children: a.location
                        }), y.jsx("p", {
                            className: "text-titanium-600 font-medium",
                            "data-yw": "c3JjL3BhZ2VzL0xvY2F0aW9uc1BhZ2UudHN4QDU3OjE0",
                            children: a.phone
                        })]
                    }, l))
                })]
            })
        })
    },
    _2 = () => {
        const {
            user: n
        } = zi(), {
            language: r
        } = Jt(), a = {
            bn: {
                title: "আমার প্রোফাইল",
                welcome: "স্বাগতম",
                email: "ইমেইল",
                phone: "ফোন",
                location: "অবস্থান",
                role: "ভূমিকা",
                memberSince: "সদস্য হিসেবে যোগদান",
                dashboard: "ড্যাশবোর্ড",
                recentActivity: "সাম্প্রতিক কার্যকলাপ",
                favoriteCars: "প্রিয় গাড়ি",
                noFavorites: "এখনও কোন প্রিয় গাড়ি যোগ করেননি"
            },
            en: {
                title: "My Profile",
                welcome: "Welcome",
                email: "Email",
                phone: "Phone",
                location: "Location",
                role: "Role",
                memberSince: "Member since",
                dashboard: "Dashboard",
                recentActivity: "Recent Activity",
                favoriteCars: "Favorite Cars",
                noFavorites: "No favorite cars added yet"
            }
        }[r];
        return n ? y.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-titanium-50 to-graphite-50 py-8",
            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA0NDo0",
            children: y.jsx("div", {
                className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA0NTo2",
                children: y.jsxs(pt.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "bg-white rounded-lg shadow-lg overflow-hidden",
                    "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA0Njo4",
                    children: [y.jsxs("div", {
                        className: "bg-gradient-to-r from-titanium-600 to-graphite-600 px-6 py-8",
                        "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA1MjoxMA",
                        children: [y.jsx("h1", {
                            className: "text-3xl font-bold text-white",
                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA1MzoxMg",
                            children: a.title
                        }), y.jsxs("p", {
                            className: "text-titanium-100 mt-2",
                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA1NjoxMg",
                            children: [a.welcome, ", ", n.name, "!"]
                        })]
                    }), y.jsxs("div", {
                        className: "p-6",
                        "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA2MToxMA",
                        children: [y.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA2MjoxMg",
                            children: [y.jsxs("div", {
                                className: "bg-gray-50 rounded-lg p-4",
                                "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA2MzoxNA",
                                children: [y.jsx("h3", {
                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                    "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA2NDoxNg",
                                    children: a.dashboard
                                }), y.jsxs("div", {
                                    className: "space-y-3",
                                    "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA2NToxNg",
                                    children: [y.jsxs("div", {
                                        "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA2NjoxOA",
                                        children: [y.jsxs("span", {
                                            className: "text-sm text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA2NzoyMA",
                                            children: [a.email, ":"]
                                        }), y.jsx("p", {
                                            className: "text-gray-900 font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA2ODoyMA",
                                            children: n.email
                                        })]
                                    }), n.phone && y.jsxs("div", {
                                        "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA3MToyMA",
                                        children: [y.jsxs("span", {
                                            className: "text-sm text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA3MjoyMg",
                                            children: [a.phone, ":"]
                                        }), y.jsx("p", {
                                            className: "text-gray-900 font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA3MzoyMg",
                                            children: n.phone
                                        })]
                                    }), n.location && y.jsxs("div", {
                                        "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA3NzoyMA",
                                        children: [y.jsxs("span", {
                                            className: "text-sm text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA3ODoyMg",
                                            children: [a.location, ":"]
                                        }), y.jsx("p", {
                                            className: "text-gray-900 font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA3OToyMg",
                                            children: n.location
                                        })]
                                    }), y.jsxs("div", {
                                        "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA4MjoxOA",
                                        children: [y.jsxs("span", {
                                            className: "text-sm text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA4MzoyMA",
                                            children: [a.role, ":"]
                                        }), y.jsx("p", {
                                            className: "text-gray-900 font-medium capitalize",
                                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA4NDoyMA",
                                            children: n.role
                                        })]
                                    }), y.jsxs("div", {
                                        "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA4NjoxOA",
                                        children: [y.jsxs("span", {
                                            className: "text-sm text-gray-600",
                                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA4NzoyMA",
                                            children: [a.memberSince, ":"]
                                        }), y.jsx("p", {
                                            className: "text-gray-900 font-medium",
                                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA4ODoyMA",
                                            children: new Date(n.id).toLocaleDateString(r === "bn" ? "bn-BD" : "en-US")
                                        })]
                                    })]
                                })]
                            }), y.jsxs("div", {
                                className: "bg-gray-50 rounded-lg p-4",
                                "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA5NToxNA",
                                children: [y.jsx("h3", {
                                    className: "text-lg font-semibold text-gray-900 mb-4",
                                    "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA5NjoxNg",
                                    children: a.recentActivity
                                }), y.jsx("div", {
                                    className: "text-gray-600",
                                    "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA5NzoxNg",
                                    children: y.jsx("p", {
                                        "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEA5ODoxOA",
                                        children: a.noFavorites
                                    })
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "mt-8",
                            "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEAxMDM6MTI",
                            children: [y.jsx("h3", {
                                className: "text-xl font-semibold text-gray-900 mb-4",
                                "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEAxMDQ6MTQ",
                                children: a.favoriteCars
                            }), y.jsx("div", {
                                className: "bg-gray-50 rounded-lg p-6 text-center",
                                "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEAxMDU6MTQ",
                                children: y.jsx("p", {
                                    className: "text-gray-600",
                                    "data-yw": "c3JjL3BhZ2VzL1Byb2ZpbGVQYWdlLnRzeEAxMDY6MTY",
                                    children: a.noFavorites
                                })
                            })]
                        })]
                    })]
                })
            })
        }) : null
    },
    I2 = ({
        children: n
    }) => {
        const {
            user: r,
            loading: s
        } = zi();
        return s ? y.jsx("div", {
            className: "min-h-screen flex items-center justify-center",
            "data-yw": "c3JjL2NvbXBvbmVudHMvUHJvdGVjdGVkUm91dGUudHN4QDE0OjY",
            children: y.jsx("div", {
                className: "w-8 h-8 border-4 border-titanium-600 border-t-transparent rounded-full animate-spin",
                "data-yw": "c3JjL2NvbXBvbmVudHMvUHJvdGVjdGVkUm91dGUudHN4QDE1Ojg"
            })
        }) : r ? y.jsx(y.Fragment, {
            children: n
        }) : y.jsx(Gg, {
            to: "/login",
            replace: !0,
            "data-yw": "c3JjL2NvbXBvbmVudHMvUHJvdGVjdGVkUm91dGUudHN4QDIxOjEx"
        })
    };

function U2() {
    return console.log("App component rendering - checking routes"), y.jsx(av, {
        "data-yw": "c3JjL0FwcC50c3hAMjA6NA",
        children: y.jsxs("div", {
            className: "App min-h-screen bg-gray-50",
            "data-yw": "c3JjL0FwcC50c3hAMjE6Ng",
            children: [y.jsx(lv, {
                "data-yw": "c3JjL0FwcC50c3hAMjI6OA"
            }), y.jsx("div", {
                className: "app-content",
                "data-yw": "c3JjL0FwcC50c3hAMjM6OA",
                children: y.jsxs(Hg, {
                    "data-yw": "c3JjL0FwcC50c3hAMjQ6MTA",
                    children: [y.jsx(Ft, {
                        path: "/",
                        element: y.jsx(uv, {
                            "data-yw": "c3JjL0FwcC50c3hAMjU6Mzc"
                        }),
                        "data-yw": "c3JjL0FwcC50c3hAMjU6MTI"
                    }), y.jsx(Ft, {
                        path: "/register",
                        element: y.jsx(R2, {
                            "data-yw": "c3JjL0FwcC50c3hAMjY6NDU"
                        }),
                        "data-yw": "c3JjL0FwcC50c3hAMjY6MTI"
                    }), y.jsx(Ft, {
                        path: "/login",
                        element: y.jsx(B2, {
                            "data-yw": "c3JjL0FwcC50c3hAMjc6NDI"
                        }),
                        "data-yw": "c3JjL0FwcC50c3hAMjc6MTI"
                    }), y.jsx(Ft, {
                        path: "/buy-sell",
                        element: y.jsx(D2, {
                            "data-yw": "c3JjL0FwcC50c3hAMjg6NDU"
                        }),
                        "data-yw": "c3JjL0FwcC50c3hAMjg6MTI"
                    }), y.jsx(Ft, {
                        path: "/car/:id",
                        element: y.jsx(F2, {
                            "data-yw": "c3JjL0FwcC50c3hAMjk6NDQ"
                        }),
                        "data-yw": "c3JjL0FwcC50c3hAMjk6MTI"
                    }), y.jsx(Ft, {
                        path: "/services",
                        element: y.jsx(O2, {
                            "data-yw": "c3JjL0FwcC50c3hAMzA6NDU"
                        }),
                        "data-yw": "c3JjL0FwcC50c3hAMzA6MTI"
                    }), y.jsx(Ft, {
                        path: "/insurance",
                        element: y.jsx(Z2, {
                            "data-yw": "c3JjL0FwcC50c3hAMzE6NDY"
                        }),
                        "data-yw": "c3JjL0FwcC50c3hAMzE6MTI"
                    }), y.jsx(Ft, {
                        path: "/locations",
                        element: y.jsx(J2, {
                            "data-yw": "c3JjL0FwcC50c3hAMzI6NDY"
                        }),
                        "data-yw": "c3JjL0FwcC50c3hAMzI6MTI"
                    }), y.jsx(Ft, {
                        path: "/profile",
                        element: y.jsx(I2, {
                            "data-yw": "c3JjL0FwcC50c3hAMzQ6MTQ",
                            children: y.jsx(_2, {
                                "data-yw": "c3JjL0FwcC50c3hAMzU6MTY"
                            })
                        }),
                        "data-yw": "c3JjL0FwcC50c3hAMzM6MTI"
                    })]
                })
            })]
        })
    })
}
tg.createRoot(document.getElementById("root")).render(y.jsx(C.StrictMode, {
    "data-yw": "c3JjL21haW4udHN4QDk6Mg",
    children: y.jsx(tv, {
        "data-yw": "c3JjL21haW4udHN4QDEwOjQ",
        children: y.jsx(ov, {
            "data-yw": "c3JjL21haW4udHN4QDExOjY",
            children: y.jsx(U2, {
                "data-yw": "c3JjL21haW4udHN4QDEyOjg"
            })
        })
    })
}));
//# sourceMappingURL=index-BLxa2j_h.js.map