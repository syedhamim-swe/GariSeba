try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7bbbe0d7-729c-421f-83a3-34083e89ff79", e._sentryDebugIdIdentifier = "sentry-dbid-7bbbe0d7-729c-421f-83a3-34083e89ff79")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6874], {
        6654: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "useMergedRef", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(12115);

            function u(e, t) {
                let n = (0, r.useRef)(null),
                    u = (0, r.useRef)(null);
                return (0, r.useCallback)(r => {
                    if (null === r) {
                        let e = n.current;
                        e && (n.current = null, e());
                        let t = u.current;
                        t && (u.current = null, t())
                    } else e && (n.current = o(e, r)), t && (u.current = o(t, r))
                }, [e, t])
            }

            function o(e, t) {
                if ("function" != typeof e) return e.current = t, () => {
                    e.current = null
                }; {
                    let n = e(t);
                    return "function" == typeof n ? n : () => e(null)
                }
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6874: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                default: function() {
                    return h
                },
                useLinkStatus: function() {
                    return _
                }
            });
            let r = n(6966),
                u = n(95155),
                o = r._(n(12115)),
                l = n(82757),
                f = n(95227),
                a = n(69818),
                i = n(6654),
                c = n(69991),
                s = n(85929);
            n(43230);
            let d = n(24930),
                p = n(92664),
                b = n(6634);

            function y(e) {
                return "string" == typeof e ? e : (0, l.formatUrl)(e)
            }

            function h(e) {
                let t, n, r, [l, h] = (0, o.useOptimistic)(d.IDLE_LINK_STATUS),
                    _ = (0, o.useRef)(null),
                    {
                        href: v,
                        as: T,
                        children: j,
                        prefetch: C = null,
                        passHref: M,
                        replace: P,
                        shallow: k,
                        scroll: I,
                        onClick: O,
                        onMouseEnter: m,
                        onTouchStart: E,
                        legacyBehavior: L = !1,
                        onNavigate: w,
                        ref: x,
                        unstable_dynamicOnHover: A,
                        ...D
                    } = e;
                t = j, L && ("string" == typeof t || "number" == typeof t) && (t = (0, u.jsx)("a", {
                    children: t
                }));
                let S = o.default.useContext(f.AppRouterContext),
                    K = !1 !== C,
                    N = null === C || "auto" === C ? a.PrefetchKind.AUTO : a.PrefetchKind.FULL,
                    {
                        href: U,
                        as: R
                    } = o.default.useMemo(() => {
                        let e = y(v);
                        return {
                            href: e,
                            as: T ? y(T) : e
                        }
                    }, [v, T]);
                L && (n = o.default.Children.only(t));
                let F = L ? n && "object" == typeof n && n.ref : x,
                    B = o.default.useCallback(e => (null !== S && (_.current = (0, d.mountLinkInstance)(e, U, S, N, K, h)), () => {
                        _.current && ((0, d.unmountLinkForCurrentNavigation)(_.current), _.current = null), (0, d.unmountPrefetchableInstance)(e)
                    }), [K, U, S, N, h]),
                    q = {
                        ref: (0, i.useMergedRef)(B, F),
                        onClick(e) {
                            L || "function" != typeof O || O(e), L && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), S && (e.defaultPrevented || function(e, t, n, r, u, l, f) {
                                let {
                                    nodeName: a
                                } = e.currentTarget;
                                if (!("A" === a.toUpperCase() && function(e) {
                                        let t = e.currentTarget.getAttribute("target");
                                        return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                    }(e) || e.currentTarget.hasAttribute("download"))) {
                                    if (!(0, p.isLocalURL)(t)) {
                                        u && (e.preventDefault(), location.replace(t));
                                        return
                                    }
                                    if (e.preventDefault(), f) {
                                        let e = !1;
                                        if (f({
                                                preventDefault: () => {
                                                    e = !0
                                                }
                                            }), e) return
                                    }
                                    o.default.startTransition(() => {
                                        (0, b.dispatchNavigateAction)(n || t, u ? "replace" : "push", null == l || l, r.current)
                                    })
                                }
                            }(e, U, R, _, P, I, w))
                        },
                        onMouseEnter(e) {
                            L || "function" != typeof m || m(e), L && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), S && K && (0, d.onNavigationIntent)(e.currentTarget, !0 === A)
                        },
                        onTouchStart: function(e) {
                            L || "function" != typeof E || E(e), L && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), S && K && (0, d.onNavigationIntent)(e.currentTarget, !0 === A)
                        }
                    };
                return (0, c.isAbsoluteUrl)(R) ? q.href = R : L && !M && ("a" !== n.type || "href" in n.props) || (q.href = (0, s.addBasePath)(R)), r = L ? o.default.cloneElement(n, q) : (0, u.jsx)("a", { ...D,
                    ...q,
                    children: t
                }), (0, u.jsx)(g.Provider, {
                    value: l,
                    children: r
                })
            }
            n(73180);
            let g = (0, o.createContext)(d.IDLE_LINK_STATUS),
                _ = () => (0, o.useContext)(g);
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        73180: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "errorOnce", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = e => {}
        }
    }
]);