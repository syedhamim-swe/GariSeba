try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f14a73fa-24f0-49f1-979c-ffd3264830cc", e._sentryDebugIdIdentifier = "sentry-dbid-f14a73fa-24f0-49f1-979c-ffd3264830cc")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [373], {
        6485: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => c
            }), n(12115);
            var r, l, o = n(36645),
                a = n.n(o),
                u = {
                    exports: {}
                },
                s = {},
                i = (l || (l = 1, u.exports = function() {
                    if (r) return s;
                    r = 1;
                    var e = Symbol.for("react.transitional.element");

                    function t(t, n, r) {
                        var l = null;
                        if (void 0 !== r && (l = "" + r), void 0 !== n.key && (l = "" + n.key), "key" in n)
                            for (var o in r = {}, n) "key" !== o && (r[o] = n[o]);
                        else r = n;
                        return {
                            $$typeof: e,
                            type: t,
                            key: l,
                            ref: void 0 !== (n = r.ref) ? n : null,
                            props: r
                        }
                    }
                    return s.Fragment = Symbol.for("react.fragment"), s.jsx = t, s.jsxs = t, s
                }()), u.exports);
            let f = a()(() => Promise.all([n.e(202), n.e(2098), n.e(309)]).then(n.bind(n, 24897)).then(e => ({
                    default: e.StagewiseToolbar
                })), {
                    loadableGenerated: {
                        webpack: () => [require.resolveWeak("@stagewise/toolbar-react")]
                    },
                    ssr: !1
                }),
                c = e => {
                    let {
                        config: t,
                        enabled: n = !1
                    } = e;
                    return n ? i.jsx(f, {
                        config: t,
                        enabled: n
                    }) : null
                }
        },
        10255: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    moduleIds: t
                } = e;
                return null
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadChunks", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(95155), n(47650), n(85744), n(20589)
        },
        17828: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorageInstance", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (0, n(64054).createAsyncLocalStorage)()
        },
        36645: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let r = n(88229)._(n(67357));

            function l(e, t) {
                var n;
                let l = {};
                "function" == typeof e && (l.loader = e);
                let o = { ...l,
                    ...t
                };
                return (0, r.default)({ ...o,
                    modules: null == (n = o.loadableGenerated) ? void 0 : n.modules
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        62146: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    reason: t,
                    children: n
                } = e;
                return n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(45262)
        },
        63554: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => l.a
            });
            var r = n(69243),
                l = n.n(r)
        },
        64054: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                bindSnapshot: function() {
                    return a
                },
                createAsyncLocalStorage: function() {
                    return o
                },
                createSnapshot: function() {
                    return u
                }
            });
            let n = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
                value: "E504",
                enumerable: !1,
                configurable: !0
            });
            class r {
                disable() {
                    throw n
                }
                getStore() {}
                run() {
                    throw n
                }
                exit() {
                    throw n
                }
                enterWith() {
                    throw n
                }
                static bind(e) {
                    return e
                }
            }
            let l = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;

            function o() {
                return l ? new l : new r
            }

            function a(e) {
                return l ? l.bind(e) : r.bind(e)
            }

            function u() {
                return l ? l.snapshot() : function(e, ...t) {
                    return e(...t)
                }
            }
        },
        67357: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let r = n(95155),
                l = n(12115),
                o = n(62146);

            function a(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            n(10255);
            let u = {
                    loader: () => Promise.resolve(a(() => null)),
                    loading: null,
                    ssr: !0
                },
                s = function(e) {
                    let t = { ...u,
                            ...e
                        },
                        n = (0, l.lazy)(() => t.loader().then(a)),
                        s = t.loading;

                    function i(e) {
                        let a = s ? (0, r.jsx)(s, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            u = !t.ssr || !!t.loading,
                            i = u ? l.Suspense : l.Fragment,
                            f = t.ssr ? (0, r.jsxs)(r.Fragment, {
                                children: [null, (0, r.jsx)(n, { ...e
                                })]
                            }) : (0, r.jsx)(o.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, r.jsx)(n, { ...e
                                })
                            });
                        return (0, r.jsx)(i, { ...u ? {
                                fallback: a
                            } : {},
                            children: f
                        })
                    }
                    return i.displayName = "LoadableComponent", i
                }
        },
        74098: e => {
            e.exports = {
                style: {
                    fontFamily: "'yourwareSans', 'yourwareSans Fallback'"
                },
                className: "__className_40d7c6",
                variable: "__variable_40d7c6"
            }
        },
        85744: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return r.workAsyncStorageInstance
                }
            });
            let r = n(17828)
        }
    }
]);