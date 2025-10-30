try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "73f92708-ef82-43d3-9611-0d5dddcaa653", e._sentryDebugIdIdentifier = "sentry-dbid-73f92708-ef82-43d3-9611-0d5dddcaa653")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5447, 8199], {
        5845: (e, t, n) => {
            n.d(t, {
                i: () => a
            });
            var r, o = n(12115),
                i = n(52712),
                l = (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] || i.N;

            function a({
                prop: e,
                defaultProp: t,
                onChange: n = () => {},
                caller: r
            }) {
                let [i, a, u] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let [n, r] = o.useState(e), i = o.useRef(n), a = o.useRef(t);
                    return l(() => {
                        a.current = t
                    }, [t]), o.useEffect(() => {
                        i.current !== n && (a.current ? .(n), i.current = n)
                    }, [n, i]), [n, r, a]
                }({
                    defaultProp: t,
                    onChange: n
                }), s = void 0 !== e, c = s ? e : i; {
                    let t = o.useRef(void 0 !== e);
                    o.useEffect(() => {
                        let e = t.current;
                        if (e !== s) {
                            let t = s ? "controlled" : "uncontrolled";
                            console.warn(`${r} is changing from ${e?"controlled":"uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
                        }
                        t.current = s
                    }, [s, r])
                }
                return [c, o.useCallback(t => {
                    if (s) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && u.current ? .(n)
                    } else a(t)
                }, [s, e, a, u])]
            }
            Symbol("RADIX:SYNC_STATE")
        },
        6101: (e, t, n) => {
            n.d(t, {
                s: () => l,
                t: () => i
            });
            var r = n(12115);

            function o(e, t) {
                if ("function" == typeof e) return e(t);
                null != e && (e.current = t)
            }

            function i(...e) {
                return t => {
                    let n = !1,
                        r = e.map(e => {
                            let r = o(e, t);
                            return n || "function" != typeof r || (n = !0), r
                        });
                    if (n) return () => {
                        for (let t = 0; t < r.length; t++) {
                            let n = r[t];
                            "function" == typeof n ? n() : o(e[t], null)
                        }
                    }
                }
            }

            function l(...e) {
                return r.useCallback(i(...e), e)
            }
        },
        19178: (e, t, n) => {
            n.d(t, {
                qW: () => d
            });
            var r, o = n(12115),
                i = n(85185),
                l = n(63655),
                a = n(6101),
                u = n(39033),
                s = n(95155),
                c = "dismissableLayer.update",
                f = o.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                d = o.forwardRef((e, t) => {
                    var n, d;
                    let {
                        disableOutsidePointerEvents: h = !1,
                        onEscapeKeyDown: g,
                        onPointerDownOutside: y,
                        onFocusOutside: v,
                        onInteractOutside: w,
                        onDismiss: x,
                        ...b
                    } = e, E = o.useContext(f), [C, R] = o.useState(null), T = null != (d = null == C ? void 0 : C.ownerDocument) ? d : null == (n = globalThis) ? void 0 : n.document, [, L] = o.useState({}), O = (0, a.s)(t, e => R(e)), A = Array.from(E.layers), [P] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), N = A.indexOf(P), S = C ? A.indexOf(C) : -1, D = E.layersWithOutsidePointerEventsDisabled.size > 0, k = S >= N, _ = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            r = (0, u.c)(e),
                            i = o.useRef(!1),
                            l = o.useRef(() => {});
                        return o.useEffect(() => {
                            let e = e => {
                                    if (e.target && !i.current) {
                                        let t = function() {
                                                m("dismissableLayer.pointerDownOutside", r, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", l.current), l.current = t, n.addEventListener("click", l.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", l.current);
                                    i.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", l.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => i.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...E.branches].some(e => e.contains(t));
                        k && !n && (null == y || y(e), null == w || w(e), e.defaultPrevented || null == x || x())
                    }, T), j = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null == (t = globalThis) ? void 0 : t.document,
                            r = (0, u.c)(e),
                            i = o.useRef(!1);
                        return o.useEffect(() => {
                            let e = e => {
                                e.target && !i.current && m("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, r]), {
                            onFocusCapture: () => i.current = !0,
                            onBlurCapture: () => i.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        ![...E.branches].some(e => e.contains(t)) && (null == v || v(e), null == w || w(e), e.defaultPrevented || null == x || x())
                    }, T);
                    return ! function(e, t = globalThis ? .document) {
                        let n = (0, u.c)(e);
                        o.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        S === E.layers.size - 1 && (null == g || g(e), !e.defaultPrevented && x && (e.preventDefault(), x()))
                    }, T), o.useEffect(() => {
                        if (C) return h && (0 === E.layersWithOutsidePointerEventsDisabled.size && (r = T.body.style.pointerEvents, T.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(C)), E.layers.add(C), p(), () => {
                            h && 1 === E.layersWithOutsidePointerEventsDisabled.size && (T.body.style.pointerEvents = r)
                        }
                    }, [C, T, h, E]), o.useEffect(() => () => {
                        C && (E.layers.delete(C), E.layersWithOutsidePointerEventsDisabled.delete(C), p())
                    }, [C, E]), o.useEffect(() => {
                        let e = () => L({});
                        return document.addEventListener(c, e), () => document.removeEventListener(c, e)
                    }, []), (0, s.jsx)(l.sG.div, { ...b,
                        ref: O,
                        style: {
                            pointerEvents: D ? k ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, i.m)(e.onFocusCapture, j.onFocusCapture),
                        onBlurCapture: (0, i.m)(e.onBlurCapture, j.onBlurCapture),
                        onPointerDownCapture: (0, i.m)(e.onPointerDownCapture, _.onPointerDownCapture)
                    })
                });

            function p() {
                let e = new CustomEvent(c);
                document.dispatchEvent(e)
            }

            function m(e, t, n, r) {
                let {
                    discrete: o
                } = r, i = n.originalEvent.target, a = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                t && i.addEventListener(e, t, {
                    once: !0
                }), o ? (0, l.hO)(i, a) : i.dispatchEvent(a)
            }
            d.displayName = "DismissableLayer", o.forwardRef((e, t) => {
                let n = o.useContext(f),
                    r = o.useRef(null),
                    i = (0, a.s)(t, r);
                return o.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, s.jsx)(l.sG.div, { ...e,
                    ref: i
                })
            }).displayName = "DismissableLayerBranch"
        },
        28905: (e, t, n) => {
            n.d(t, {
                C: () => l
            });
            var r = n(12115),
                o = n(6101),
                i = n(52712),
                l = e => {
                    let {
                        present: t,
                        children: n
                    } = e, l = function(e) {
                        var t, n;
                        let [o, l] = r.useState(), u = r.useRef(null), s = r.useRef(e), c = r.useRef("none"), [f, d] = (t = e ? "mounted" : "unmounted", n = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, r.useReducer((e, t) => {
                            let r = n[e][t];
                            return null != r ? r : e
                        }, t));
                        return r.useEffect(() => {
                            let e = a(u.current);
                            c.current = "mounted" === f ? e : "none"
                        }, [f]), (0, i.N)(() => {
                            let t = u.current,
                                n = s.current;
                            if (n !== e) {
                                let r = c.current,
                                    o = a(t);
                                e ? d("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? d("UNMOUNT") : n && r !== o ? d("ANIMATION_OUT") : d("UNMOUNT"), s.current = e
                            }
                        }, [e, d]), (0, i.N)(() => {
                            if (o) {
                                var e;
                                let t, n = null != (e = o.ownerDocument.defaultView) ? e : window,
                                    r = e => {
                                        let r = a(u.current).includes(e.animationName);
                                        if (e.target === o && r && (d("ANIMATION_END"), !s.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", t = n.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    i = e => {
                                        e.target === o && (c.current = a(u.current))
                                    };
                                return o.addEventListener("animationstart", i), o.addEventListener("animationcancel", r), o.addEventListener("animationend", r), () => {
                                    n.clearTimeout(t), o.removeEventListener("animationstart", i), o.removeEventListener("animationcancel", r), o.removeEventListener("animationend", r)
                                }
                            }
                            d("ANIMATION_END")
                        }, [o, d]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(f),
                            ref: r.useCallback(e => {
                                u.current = e ? getComputedStyle(e) : null, l(e)
                            }, [])
                        }
                    }(t), u = "function" == typeof n ? n({
                        present: l.isPresent
                    }) : r.Children.only(n), s = (0, o.s)(l.ref, function(e) {
                        var t, n;
                        let r = null == (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : t.get,
                            o = r && "isReactWarning" in r && r.isReactWarning;
                        return o ? e.ref : (o = (r = null == (n = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : n.get) && "isReactWarning" in r && r.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(u));
                    return "function" == typeof n || l.isPresent ? r.cloneElement(u, {
                        ref: s
                    }) : null
                };

            function a(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            l.displayName = "Presence"
        },
        34378: (e, t, n) => {
            n.d(t, {
                Z: () => u
            });
            var r = n(12115),
                o = n(47650),
                i = n(63655),
                l = n(52712),
                a = n(95155),
                u = r.forwardRef((e, t) => {
                    var n, u;
                    let {
                        container: s,
                        ...c
                    } = e, [f, d] = r.useState(!1);
                    (0, l.N)(() => d(!0), []);
                    let p = s || f && (null == (u = globalThis) || null == (n = u.document) ? void 0 : n.body);
                    return p ? o.createPortal((0, a.jsx)(i.sG.div, { ...c,
                        ref: t
                    }), p) : null
                });
            u.displayName = "Portal"
        },
        38795: (e, t, n) => {
            n.d(t, {
                Mz: () => eB,
                i3: () => ez,
                UC: () => eH,
                bL: () => eF,
                Bk: () => eC
            });
            var r = n(12115);
            let o = ["top", "right", "bottom", "left"],
                i = Math.min,
                l = Math.max,
                a = Math.round,
                u = Math.floor,
                s = e => ({
                    x: e,
                    y: e
                }),
                c = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                f = {
                    start: "end",
                    end: "start"
                };

            function d(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function p(e) {
                return e.split("-")[0]
            }

            function m(e) {
                return e.split("-")[1]
            }

            function h(e) {
                return "x" === e ? "y" : "x"
            }

            function g(e) {
                return "y" === e ? "height" : "width"
            }

            function y(e) {
                return ["top", "bottom"].includes(p(e)) ? "y" : "x"
            }

            function v(e) {
                return e.replace(/start|end/g, e => f[e])
            }

            function w(e) {
                return e.replace(/left|right|bottom|top/g, e => c[e])
            }

            function x(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function b(e) {
                let {
                    x: t,
                    y: n,
                    width: r,
                    height: o
                } = e;
                return {
                    width: r,
                    height: o,
                    top: n,
                    left: t,
                    right: t + r,
                    bottom: n + o,
                    x: t,
                    y: n
                }
            }

            function E(e, t, n) {
                let r, {
                        reference: o,
                        floating: i
                    } = e,
                    l = y(t),
                    a = h(y(t)),
                    u = g(a),
                    s = p(t),
                    c = "y" === l,
                    f = o.x + o.width / 2 - i.width / 2,
                    d = o.y + o.height / 2 - i.height / 2,
                    v = o[u] / 2 - i[u] / 2;
                switch (s) {
                    case "top":
                        r = {
                            x: f,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: f,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        r = {
                            x: o.x + o.width,
                            y: d
                        };
                        break;
                    case "left":
                        r = {
                            x: o.x - i.width,
                            y: d
                        };
                        break;
                    default:
                        r = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (m(t)) {
                    case "start":
                        r[a] -= v * (n && c ? -1 : 1);
                        break;
                    case "end":
                        r[a] += v * (n && c ? -1 : 1)
                }
                return r
            }
            let C = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = n, a = i.filter(Boolean), u = await (null == l.isRTL ? void 0 : l.isRTL(t)), s = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: c,
                    y: f
                } = E(s, r, u), d = r, p = {}, m = 0;
                for (let n = 0; n < a.length; n++) {
                    let {
                        name: i,
                        fn: h
                    } = a[n], {
                        x: g,
                        y: y,
                        data: v,
                        reset: w
                    } = await h({
                        x: c,
                        y: f,
                        initialPlacement: r,
                        placement: d,
                        strategy: o,
                        middlewareData: p,
                        rects: s,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    c = null != g ? g : c, f = null != y ? y : f, p = { ...p,
                        [i]: { ...p[i],
                            ...v
                        }
                    }, w && m <= 50 && (m++, "object" == typeof w && (w.placement && (d = w.placement), w.rects && (s = !0 === w.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : w.rects), {
                        x: c,
                        y: f
                    } = E(s, d, u)), n = -1)
                }
                return {
                    x: c,
                    y: f,
                    placement: d,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function R(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: i,
                    rects: l,
                    elements: a,
                    strategy: u
                } = e, {
                    boundary: s = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: f = "floating",
                    altBoundary: p = !1,
                    padding: m = 0
                } = d(t, e), h = x(m), g = a[p ? "floating" === f ? "reference" : "floating" : f], y = b(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: s,
                    rootBoundary: c,
                    strategy: u
                })), v = "floating" === f ? {
                    x: r,
                    y: o,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, w = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), E = await (null == i.isElement ? void 0 : i.isElement(w)) && await (null == i.getScale ? void 0 : i.getScale(w)) || {
                    x: 1,
                    y: 1
                }, C = b(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: v,
                    offsetParent: w,
                    strategy: u
                }) : v);
                return {
                    top: (y.top - C.top + h.top) / E.y,
                    bottom: (C.bottom - y.bottom + h.bottom) / E.y,
                    left: (y.left - C.left + h.left) / E.x,
                    right: (C.right - y.right + h.right) / E.x
                }
            }

            function T(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function L(e) {
                return o.some(t => e[t] >= 0)
            }
            async function O(e, t) {
                let {
                    placement: n,
                    platform: r,
                    elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), l = p(n), a = m(n), u = "y" === y(n), s = ["left", "top"].includes(l) ? -1 : 1, c = i && u ? -1 : 1, f = d(t, e), {
                    mainAxis: h,
                    crossAxis: g,
                    alignmentAxis: v
                } = "number" == typeof f ? {
                    mainAxis: f,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: f.mainAxis || 0,
                    crossAxis: f.crossAxis || 0,
                    alignmentAxis: f.alignmentAxis
                };
                return a && "number" == typeof v && (g = "end" === a ? -1 * v : v), u ? {
                    x: g * c,
                    y: h * s
                } : {
                    x: h * s,
                    y: g * c
                }
            }

            function A() {
                return "undefined" != typeof window
            }

            function P(e) {
                return D(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function N(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function S(e) {
                var t;
                return null == (t = (D(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function D(e) {
                return !!A() && (e instanceof Node || e instanceof N(e).Node)
            }

            function k(e) {
                return !!A() && (e instanceof Element || e instanceof N(e).Element)
            }

            function _(e) {
                return !!A() && (e instanceof HTMLElement || e instanceof N(e).HTMLElement)
            }

            function j(e) {
                return !!A() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof N(e).ShadowRoot)
            }

            function M(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = H(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function I(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function W(e) {
                let t = F(),
                    n = k(e) ? H(e) : e;
                return ["transform", "translate", "scale", "rotate", "perspective"].some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function F() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function B(e) {
                return ["html", "body", "#document"].includes(P(e))
            }

            function H(e) {
                return N(e).getComputedStyle(e)
            }

            function z(e) {
                return k(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function $(e) {
                if ("html" === P(e)) return e;
                let t = e.assignedSlot || e.parentNode || j(e) && e.host || S(e);
                return j(t) ? t.host : t
            }

            function V(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let o = function e(t) {
                        let n = $(t);
                        return B(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : _(n) && M(n) ? n : e(n)
                    }(e),
                    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    l = N(o);
                if (i) {
                    let e = U(l);
                    return t.concat(l, l.visualViewport || [], M(o) ? o : [], e && n ? V(e) : [])
                }
                return t.concat(o, V(o, [], n))
            }

            function U(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function G(e) {
                let t = H(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = _(e),
                    i = o ? e.offsetWidth : n,
                    l = o ? e.offsetHeight : r,
                    u = a(n) !== i || a(r) !== l;
                return u && (n = i, r = l), {
                    width: n,
                    height: r,
                    $: u
                }
            }

            function Y(e) {
                return k(e) ? e : e.contextElement
            }

            function X(e) {
                let t = Y(e);
                if (!_(t)) return s(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        $: i
                    } = G(t),
                    l = (i ? a(n.width) : n.width) / r,
                    u = (i ? a(n.height) : n.height) / o;
                return l && Number.isFinite(l) || (l = 1), u && Number.isFinite(u) || (u = 1), {
                    x: l,
                    y: u
                }
            }
            let q = s(0);

            function Z(e) {
                let t = N(e);
                return F() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : q
            }

            function K(e, t, n, r) {
                var o;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let i = e.getBoundingClientRect(),
                    l = Y(e),
                    a = s(1);
                t && (r ? k(r) && (a = X(r)) : a = X(e));
                let u = (void 0 === (o = n) && (o = !1), r && (!o || r === N(l)) && o) ? Z(l) : s(0),
                    c = (i.left + u.x) / a.x,
                    f = (i.top + u.y) / a.y,
                    d = i.width / a.x,
                    p = i.height / a.y;
                if (l) {
                    let e = N(l),
                        t = r && k(r) ? N(r) : r,
                        n = e,
                        o = U(n);
                    for (; o && r && t !== n;) {
                        let e = X(o),
                            t = o.getBoundingClientRect(),
                            r = H(o),
                            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                        c *= e.x, f *= e.y, d *= e.x, p *= e.y, c += i, f += l, o = U(n = N(o))
                    }
                }
                return b({
                    width: d,
                    height: p,
                    x: c,
                    y: f
                })
            }

            function J(e, t) {
                let n = z(e).scrollLeft;
                return t ? t.left + n : K(S(e)).left + n
            }

            function Q(e, t, n) {
                void 0 === n && (n = !1);
                let r = e.getBoundingClientRect();
                return {
                    x: r.left + t.scrollLeft - (n ? 0 : J(e, r)),
                    y: r.top + t.scrollTop
                }
            }

            function ee(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = N(e),
                        r = S(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        u = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = F();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft, u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: u
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = S(e),
                        n = z(e),
                        r = e.ownerDocument.body,
                        o = l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = l(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        a = -n.scrollLeft + J(e),
                        u = -n.scrollTop;
                    return "rtl" === H(r).direction && (a += l(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: a,
                        y: u
                    }
                }(S(e));
                else if (k(t)) r = function(e, t) {
                    let n = K(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = _(e) ? X(e) : s(1),
                        l = e.clientWidth * i.x,
                        a = e.clientHeight * i.y;
                    return {
                        width: l,
                        height: a,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let n = Z(e);
                    r = {
                        x: t.x - n.x,
                        y: t.y - n.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return b(r)
            }

            function et(e) {
                return "static" === H(e).position
            }

            function en(e, t) {
                if (!_(e) || "fixed" === H(e).position) return null;
                if (t) return t(e);
                let n = e.offsetParent;
                return S(e) === n && (n = n.ownerDocument.body), n
            }

            function er(e, t) {
                let n = N(e);
                if (I(e)) return n;
                if (!_(e)) {
                    let t = $(e);
                    for (; t && !B(t);) {
                        if (k(t) && !et(t)) return t;
                        t = $(t)
                    }
                    return n
                }
                let r = en(e, t);
                for (; r && ["table", "td", "th"].includes(P(r)) && et(r);) r = en(r, t);
                return r && B(r) && et(r) && !W(r) ? n : r || function(e) {
                    let t = $(e);
                    for (; _(t) && !B(t);) {
                        if (W(t)) return t;
                        if (I(t)) break;
                        t = $(t)
                    }
                    return null
                }(e) || n
            }
            let eo = async function(e) {
                    let t = this.getOffsetParent || er,
                        n = this.getDimensions,
                        r = await n(e.floating);
                    return {
                        reference: function(e, t, n) {
                            let r = _(t),
                                o = S(t),
                                i = "fixed" === n,
                                l = K(e, !0, i, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                u = s(0);
                            if (r || !r && !i)
                                if (("body" !== P(t) || M(o)) && (a = z(t)), r) {
                                    let e = K(t, !0, i, t);
                                    u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
                                } else o && (u.x = J(o));
                            i && !r && o && (u.x = J(o));
                            let c = !o || r || i ? s(0) : Q(o, a);
                            return {
                                x: l.left + a.scrollLeft - u.x - c.x,
                                y: l.top + a.scrollTop - u.y - c.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                },
                ei = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: r,
                            strategy: o
                        } = e, i = "fixed" === o, l = S(r), a = !!t && I(t.floating);
                        if (r === l || a && i) return n;
                        let u = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            c = s(1),
                            f = s(0),
                            d = _(r);
                        if ((d || !d && !i) && (("body" !== P(r) || M(l)) && (u = z(r)), _(r))) {
                            let e = K(r);
                            c = X(r), f.x = e.x + r.clientLeft, f.y = e.y + r.clientTop
                        }
                        let p = !l || d || i ? s(0) : Q(l, u, !0);
                        return {
                            width: n.width * c.x,
                            height: n.height * c.y,
                            x: n.x * c.x - u.scrollLeft * c.x + f.x + p.x,
                            y: n.y * c.y - u.scrollTop * c.y + f.y + p.y
                        }
                    },
                    getDocumentElement: S,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: r,
                            strategy: o
                        } = e, a = [..."clippingAncestors" === n ? I(t) ? [] : function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = V(e, [], !1).filter(e => k(e) && "body" !== P(e)),
                                o = null,
                                i = "fixed" === H(e).position,
                                l = i ? $(e) : e;
                            for (; k(l) && !B(l);) {
                                let t = H(l),
                                    n = W(l);
                                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || M(l) && !n && function e(t, n) {
                                    let r = $(t);
                                    return !(r === n || !k(r) || B(r)) && ("fixed" === H(r).position || e(r, n))
                                }(e, l)) ? r = r.filter(e => e !== l) : o = t, l = $(l)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), r], u = a[0], s = a.reduce((e, n) => {
                            let r = ee(t, n, o);
                            return e.top = l(r.top, e.top), e.right = i(r.right, e.right), e.bottom = i(r.bottom, e.bottom), e.left = l(r.left, e.left), e
                        }, ee(t, u, o));
                        return {
                            width: s.right - s.left,
                            height: s.bottom - s.top,
                            x: s.left,
                            y: s.top
                        }
                    },
                    getOffsetParent: er,
                    getElementRects: eo,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = G(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale: X,
                    isElement: k,
                    isRTL: function(e) {
                        return "rtl" === H(e).direction
                    }
                };

            function el(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }
            let ea = e => ({
                name: "arrow",
                options: e,
                async fn(t) {
                    let {
                        x: n,
                        y: r,
                        placement: o,
                        rects: a,
                        platform: u,
                        elements: s,
                        middlewareData: c
                    } = t, {
                        element: f,
                        padding: p = 0
                    } = d(e, t) || {};
                    if (null == f) return {};
                    let v = x(p),
                        w = {
                            x: n,
                            y: r
                        },
                        b = h(y(o)),
                        E = g(b),
                        C = await u.getDimensions(f),
                        R = "y" === b,
                        T = R ? "clientHeight" : "clientWidth",
                        L = a.reference[E] + a.reference[b] - w[b] - a.floating[E],
                        O = w[b] - a.reference[b],
                        A = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(f)),
                        P = A ? A[T] : 0;
                    P && await (null == u.isElement ? void 0 : u.isElement(A)) || (P = s.floating[T] || a.floating[E]);
                    let N = P / 2 - C[E] / 2 - 1,
                        S = i(v[R ? "top" : "left"], N),
                        D = i(v[R ? "bottom" : "right"], N),
                        k = P - C[E] - D,
                        _ = P / 2 - C[E] / 2 + (L / 2 - O / 2),
                        j = l(S, i(_, k)),
                        M = !c.arrow && null != m(o) && _ !== j && a.reference[E] / 2 - (_ < S ? S : D) - C[E] / 2 < 0,
                        I = M ? _ < S ? _ - S : _ - k : 0;
                    return {
                        [b]: w[b] + I,
                        data: {
                            [b]: j,
                            centerOffset: _ - j - I,
                            ...M && {
                                alignmentOffset: I
                            }
                        },
                        reset: M
                    }
                }
            });
            var eu = n(47650),
                es = "undefined" != typeof document ? r.useLayoutEffect : function() {};

            function ec(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!ec(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !ec(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function ef(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function ed(e, t) {
                let n = ef(e);
                return Math.round(t * n) / n
            }

            function ep(e) {
                let t = r.useRef(e);
                return es(() => {
                    t.current = e
                }), t
            }
            var em = n(63655),
                eh = n(95155),
                eg = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: o = 5,
                        ...i
                    } = e;
                    return (0, eh.jsx)(em.sG.svg, { ...i,
                        ref: t,
                        width: r,
                        height: o,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? n : (0, eh.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            eg.displayName = "Arrow";
            var ey = n(6101),
                ev = n(46081),
                ew = n(39033),
                ex = n(52712),
                eb = "Popper",
                [eE, eC] = (0, ev.A)(eb),
                [eR, eT] = eE(eb),
                eL = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [o, i] = r.useState(null);
                    return (0, eh.jsx)(eR, {
                        scope: t,
                        anchor: o,
                        onAnchorChange: i,
                        children: n
                    })
                };
            eL.displayName = eb;
            var eO = "PopperAnchor",
                eA = r.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: o,
                        ...i
                    } = e, l = eT(eO, n), a = r.useRef(null), u = (0, ey.s)(t, a);
                    return r.useEffect(() => {
                        l.onAnchorChange((null == o ? void 0 : o.current) || a.current)
                    }), o ? null : (0, eh.jsx)(em.sG.div, { ...i,
                        ref: u
                    })
                });
            eA.displayName = eO;
            var eP = "PopperContent",
                [eN, eS] = eE(eP),
                eD = r.forwardRef((e, t) => {
                    var n, o, a, s, c, f, x, b;
                    let {
                        __scopePopper: E,
                        side: A = "bottom",
                        sideOffset: P = 0,
                        align: N = "center",
                        alignOffset: D = 0,
                        arrowPadding: k = 0,
                        avoidCollisions: _ = !0,
                        collisionBoundary: j = [],
                        collisionPadding: M = 0,
                        sticky: I = "partial",
                        hideWhenDetached: W = !1,
                        updatePositionStrategy: F = "optimized",
                        onPlaced: B,
                        ...H
                    } = e, z = eT(eP, E), [$, U] = r.useState(null), G = (0, ey.s)(t, e => U(e)), [X, q] = r.useState(null), Z = function(e) {
                        let [t, n] = r.useState(void 0);
                        return (0, ex.N)(() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let r, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let i = t[0];
                                    if ("borderBoxSize" in i) {
                                        let e = i.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        r = t.inlineSize, o = t.blockSize
                                    } else r = e.offsetWidth, o = e.offsetHeight;
                                    n({
                                        width: r,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }, [e]), t
                    }(X), J = null != (x = null == Z ? void 0 : Z.width) ? x : 0, Q = null != (b = null == Z ? void 0 : Z.height) ? b : 0, ee = "number" == typeof M ? M : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...M
                    }, et = Array.isArray(j) ? j : [j], en = et.length > 0, er = {
                        padding: ee,
                        boundary: et.filter(eM),
                        altBoundary: en
                    }, {
                        refs: eo,
                        floatingStyles: eg,
                        placement: ev,
                        isPositioned: eb,
                        middlewareData: eE
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: o = [],
                            platform: i,
                            elements: {
                                reference: l,
                                floating: a
                            } = {},
                            transform: u = !0,
                            whileElementsMounted: s,
                            open: c
                        } = e, [f, d] = r.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [p, m] = r.useState(o);
                        ec(p, o) || m(o);
                        let [h, g] = r.useState(null), [y, v] = r.useState(null), w = r.useCallback(e => {
                            e !== R.current && (R.current = e, g(e))
                        }, []), x = r.useCallback(e => {
                            e !== T.current && (T.current = e, v(e))
                        }, []), b = l || h, E = a || y, R = r.useRef(null), T = r.useRef(null), L = r.useRef(f), O = null != s, A = ep(s), P = ep(i), N = ep(c), S = r.useCallback(() => {
                            if (!R.current || !T.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: p
                            };
                            P.current && (e.platform = P.current), ((e, t, n) => {
                                let r = new Map,
                                    o = {
                                        platform: ei,
                                        ...n
                                    },
                                    i = { ...o.platform,
                                        _c: r
                                    };
                                return C(e, t, { ...o,
                                    platform: i
                                })
                            })(R.current, T.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !1 !== N.current
                                };
                                D.current && !ec(L.current, t) && (L.current = t, eu.flushSync(() => {
                                    d(t)
                                }))
                            })
                        }, [p, t, n, P, N]);
                        es(() => {
                            !1 === c && L.current.isPositioned && (L.current.isPositioned = !1, d(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [c]);
                        let D = r.useRef(!1);
                        es(() => (D.current = !0, () => {
                            D.current = !1
                        }), []), es(() => {
                            if (b && (R.current = b), E && (T.current = E), b && E) {
                                if (A.current) return A.current(b, E, S);
                                S()
                            }
                        }, [b, E, S, A, O]);
                        let k = r.useMemo(() => ({
                                reference: R,
                                floating: T,
                                setReference: w,
                                setFloating: x
                            }), [w, x]),
                            _ = r.useMemo(() => ({
                                reference: b,
                                floating: E
                            }), [b, E]),
                            j = r.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!_.floating) return e;
                                let t = ed(_.floating, f.x),
                                    r = ed(_.floating, f.y);
                                return u ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...ef(_.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, u, _.floating, f.x, f.y]);
                        return r.useMemo(() => ({ ...f,
                            update: S,
                            refs: k,
                            elements: _,
                            floatingStyles: j
                        }), [f, S, k, _, j])
                    }({
                        strategy: "fixed",
                        placement: A + ("center" !== N ? "-" + N : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return function(e, t, n, r) {
                                let o;
                                void 0 === r && (r = {});
                                let {
                                    ancestorScroll: a = !0,
                                    ancestorResize: s = !0,
                                    elementResize: c = "function" == typeof ResizeObserver,
                                    layoutShift: f = "function" == typeof IntersectionObserver,
                                    animationFrame: d = !1
                                } = r, p = Y(e), m = a || s ? [...p ? V(p) : [], ...V(t)] : [];
                                m.forEach(e => {
                                    a && e.addEventListener("scroll", n, {
                                        passive: !0
                                    }), s && e.addEventListener("resize", n)
                                });
                                let h = p && f ? function(e, t) {
                                        let n, r = null,
                                            o = S(e);

                                        function a() {
                                            var e;
                                            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                                        }
                                        return ! function s(c, f) {
                                            void 0 === c && (c = !1), void 0 === f && (f = 1), a();
                                            let d = e.getBoundingClientRect(),
                                                {
                                                    left: p,
                                                    top: m,
                                                    width: h,
                                                    height: g
                                                } = d;
                                            if (c || t(), !h || !g) return;
                                            let y = u(m),
                                                v = u(o.clientWidth - (p + h)),
                                                w = {
                                                    rootMargin: -y + "px " + -v + "px " + -u(o.clientHeight - (m + g)) + "px " + -u(p) + "px",
                                                    threshold: l(0, i(1, f)) || 1
                                                },
                                                x = !0;

                                            function b(t) {
                                                let r = t[0].intersectionRatio;
                                                if (r !== f) {
                                                    if (!x) return s();
                                                    r ? s(!1, r) : n = setTimeout(() => {
                                                        s(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                1 !== r || el(d, e.getBoundingClientRect()) || s(), x = !1
                                            }
                                            try {
                                                r = new IntersectionObserver(b, { ...w,
                                                    root: o.ownerDocument
                                                })
                                            } catch (e) {
                                                r = new IntersectionObserver(b, w)
                                            }
                                            r.observe(e)
                                        }(!0), a
                                    }(p, n) : null,
                                    g = -1,
                                    y = null;
                                c && (y = new ResizeObserver(e => {
                                    let [r] = e;
                                    r && r.target === p && y && (y.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                                        var e;
                                        null == (e = y) || e.observe(t)
                                    })), n()
                                }), p && !d && y.observe(p), y.observe(t));
                                let v = d ? K(e) : null;
                                return d && function t() {
                                    let r = K(e);
                                    v && !el(v, r) && n(), v = r, o = requestAnimationFrame(t)
                                }(), n(), () => {
                                    var e;
                                    m.forEach(e => {
                                        a && e.removeEventListener("scroll", n), s && e.removeEventListener("resize", n)
                                    }), null == h || h(), null == (e = y) || e.disconnect(), y = null, d && cancelAnimationFrame(o)
                                }
                            }(...t, {
                                animationFrame: "always" === F
                            })
                        },
                        elements: {
                            reference: z.anchor
                        },
                        middleware: [((e, t) => ({ ... function(e) {
                                return void 0 === e && (e = 0), {
                                    name: "offset",
                                    options: e,
                                    async fn(t) {
                                        var n, r;
                                        let {
                                            x: o,
                                            y: i,
                                            placement: l,
                                            middlewareData: a
                                        } = t, u = await O(t, e);
                                        return l === (null == (n = a.offset) ? void 0 : n.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                                            x: o + u.x,
                                            y: i + u.y,
                                            data: { ...u,
                                                placement: l
                                            }
                                        }
                                    }
                                }
                            }(e),
                            options: [e, t]
                        }))({
                            mainAxis: P + Q,
                            alignmentAxis: D
                        }), _ && ((e, t) => ({ ... function(e) {
                                return void 0 === e && (e = {}), {
                                    name: "shift",
                                    options: e,
                                    async fn(t) {
                                        let {
                                            x: n,
                                            y: r,
                                            placement: o
                                        } = t, {
                                            mainAxis: a = !0,
                                            crossAxis: u = !1,
                                            limiter: s = {
                                                fn: e => {
                                                    let {
                                                        x: t,
                                                        y: n
                                                    } = e;
                                                    return {
                                                        x: t,
                                                        y: n
                                                    }
                                                }
                                            },
                                            ...c
                                        } = d(e, t), f = {
                                            x: n,
                                            y: r
                                        }, m = await R(t, c), g = y(p(o)), v = h(g), w = f[v], x = f[g];
                                        if (a) {
                                            let e = "y" === v ? "top" : "left",
                                                t = "y" === v ? "bottom" : "right",
                                                n = w + m[e],
                                                r = w - m[t];
                                            w = l(n, i(w, r))
                                        }
                                        if (u) {
                                            let e = "y" === g ? "top" : "left",
                                                t = "y" === g ? "bottom" : "right",
                                                n = x + m[e],
                                                r = x - m[t];
                                            x = l(n, i(x, r))
                                        }
                                        let b = s.fn({ ...t,
                                            [v]: w,
                                            [g]: x
                                        });
                                        return { ...b,
                                            data: {
                                                x: b.x - n,
                                                y: b.y - r,
                                                enabled: {
                                                    [v]: a,
                                                    [g]: u
                                                }
                                            }
                                        }
                                    }
                                }
                            }(e),
                            options: [e, t]
                        }))({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === I ? ((e, t) => ({ ... function(e) {
                                    return void 0 === e && (e = {}), {
                                        options: e,
                                        fn(t) {
                                            let {
                                                x: n,
                                                y: r,
                                                placement: o,
                                                rects: i,
                                                middlewareData: l
                                            } = t, {
                                                offset: a = 0,
                                                mainAxis: u = !0,
                                                crossAxis: s = !0
                                            } = d(e, t), c = {
                                                x: n,
                                                y: r
                                            }, f = y(o), m = h(f), g = c[m], v = c[f], w = d(a, t), x = "number" == typeof w ? {
                                                mainAxis: w,
                                                crossAxis: 0
                                            } : {
                                                mainAxis: 0,
                                                crossAxis: 0,
                                                ...w
                                            };
                                            if (u) {
                                                let e = "y" === m ? "height" : "width",
                                                    t = i.reference[m] - i.floating[e] + x.mainAxis,
                                                    n = i.reference[m] + i.reference[e] - x.mainAxis;
                                                g < t ? g = t : g > n && (g = n)
                                            }
                                            if (s) {
                                                var b, E;
                                                let e = "y" === m ? "width" : "height",
                                                    t = ["top", "left"].includes(p(o)),
                                                    n = i.reference[f] - i.floating[e] + (t && (null == (b = l.offset) ? void 0 : b[f]) || 0) + (t ? 0 : x.crossAxis),
                                                    r = i.reference[f] + i.reference[e] + (t ? 0 : (null == (E = l.offset) ? void 0 : E[f]) || 0) - (t ? x.crossAxis : 0);
                                                v < n ? v = n : v > r && (v = r)
                                            }
                                            return {
                                                [m]: g,
                                                [f]: v
                                            }
                                        }
                                    }
                                }(e),
                                options: [e, t]
                            }))() : void 0,
                            ...er
                        }), _ && ((e, t) => ({ ... function(e) {
                                return void 0 === e && (e = {}), {
                                    name: "flip",
                                    options: e,
                                    async fn(t) {
                                        var n, r, o, i, l;
                                        let {
                                            placement: a,
                                            middlewareData: u,
                                            rects: s,
                                            initialPlacement: c,
                                            platform: f,
                                            elements: x
                                        } = t, {
                                            mainAxis: b = !0,
                                            crossAxis: E = !0,
                                            fallbackPlacements: C,
                                            fallbackStrategy: T = "bestFit",
                                            fallbackAxisSideDirection: L = "none",
                                            flipAlignment: O = !0,
                                            ...A
                                        } = d(e, t);
                                        if (null != (n = u.arrow) && n.alignmentOffset) return {};
                                        let P = p(a),
                                            N = y(c),
                                            S = p(c) === c,
                                            D = await (null == f.isRTL ? void 0 : f.isRTL(x.floating)),
                                            k = C || (S || !O ? [w(c)] : function(e) {
                                                let t = w(e);
                                                return [v(e), t, v(t)]
                                            }(c)),
                                            _ = "none" !== L;
                                        !C && _ && k.push(... function(e, t, n, r) {
                                            let o = m(e),
                                                i = function(e, t, n) {
                                                    let r = ["left", "right"],
                                                        o = ["right", "left"];
                                                    switch (e) {
                                                        case "top":
                                                        case "bottom":
                                                            if (n) return t ? o : r;
                                                            return t ? r : o;
                                                        case "left":
                                                        case "right":
                                                            return t ? ["top", "bottom"] : ["bottom", "top"];
                                                        default:
                                                            return []
                                                    }
                                                }(p(e), "start" === n, r);
                                            return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(v)))), i
                                        }(c, O, L, D));
                                        let j = [c, ...k],
                                            M = await R(t, A),
                                            I = [],
                                            W = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                                        if (b && I.push(M[P]), E) {
                                            let e = function(e, t, n) {
                                                void 0 === n && (n = !1);
                                                let r = m(e),
                                                    o = h(y(e)),
                                                    i = g(o),
                                                    l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                                return t.reference[i] > t.floating[i] && (l = w(l)), [l, w(l)]
                                            }(a, s, D);
                                            I.push(M[e[0]], M[e[1]])
                                        }
                                        if (W = [...W, {
                                                placement: a,
                                                overflows: I
                                            }], !I.every(e => e <= 0)) {
                                            let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                                                t = j[e];
                                            if (t && ("alignment" !== E || N === y(t) || W.every(e => e.overflows[0] > 0 && y(e.placement) === N))) return {
                                                data: {
                                                    index: e,
                                                    overflows: W
                                                },
                                                reset: {
                                                    placement: t
                                                }
                                            };
                                            let n = null == (i = W.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                            if (!n) switch (T) {
                                                case "bestFit":
                                                    {
                                                        let e = null == (l = W.filter(e => {
                                                            if (_) {
                                                                let t = y(e.placement);
                                                                return t === N || "y" === t
                                                            }
                                                            return !0
                                                        }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (n = e);
                                                        break
                                                    }
                                                case "initialPlacement":
                                                    n = c
                                            }
                                            if (a !== n) return {
                                                reset: {
                                                    placement: n
                                                }
                                            }
                                        }
                                        return {}
                                    }
                                }
                            }(e),
                            options: [e, t]
                        }))({ ...er
                        }), ((e, t) => ({ ... function(e) {
                                return void 0 === e && (e = {}), {
                                    name: "size",
                                    options: e,
                                    async fn(t) {
                                        var n, r;
                                        let o, a, {
                                                placement: u,
                                                rects: s,
                                                platform: c,
                                                elements: f
                                            } = t,
                                            {
                                                apply: h = () => {},
                                                ...g
                                            } = d(e, t),
                                            v = await R(t, g),
                                            w = p(u),
                                            x = m(u),
                                            b = "y" === y(u),
                                            {
                                                width: E,
                                                height: C
                                            } = s.floating;
                                        "top" === w || "bottom" === w ? (o = w, a = x === (await (null == c.isRTL ? void 0 : c.isRTL(f.floating)) ? "start" : "end") ? "left" : "right") : (a = w, o = "end" === x ? "top" : "bottom");
                                        let T = C - v.top - v.bottom,
                                            L = E - v.left - v.right,
                                            O = i(C - v[o], T),
                                            A = i(E - v[a], L),
                                            P = !t.middlewareData.shift,
                                            N = O,
                                            S = A;
                                        if (null != (n = t.middlewareData.shift) && n.enabled.x && (S = L), null != (r = t.middlewareData.shift) && r.enabled.y && (N = T), P && !x) {
                                            let e = l(v.left, 0),
                                                t = l(v.right, 0),
                                                n = l(v.top, 0),
                                                r = l(v.bottom, 0);
                                            b ? S = E - 2 * (0 !== e || 0 !== t ? e + t : l(v.left, v.right)) : N = C - 2 * (0 !== n || 0 !== r ? n + r : l(v.top, v.bottom))
                                        }
                                        await h({ ...t,
                                            availableWidth: S,
                                            availableHeight: N
                                        });
                                        let D = await c.getDimensions(f.floating);
                                        return E !== D.width || C !== D.height ? {
                                            reset: {
                                                rects: !0
                                            }
                                        } : {}
                                    }
                                }
                            }(e),
                            options: [e, t]
                        }))({ ...er,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: n,
                                    availableWidth: r,
                                    availableHeight: o
                                } = e, {
                                    width: i,
                                    height: l
                                } = n.reference, a = t.floating.style;
                                a.setProperty("--radix-popper-available-width", "".concat(r, "px")), a.setProperty("--radix-popper-available-height", "".concat(o, "px")), a.setProperty("--radix-popper-anchor-width", "".concat(i, "px")), a.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                            }
                        }), X && ((e, t) => ({ ...(e => ({
                                name: "arrow",
                                options: e,
                                fn(t) {
                                    let {
                                        element: n,
                                        padding: r
                                    } = "function" == typeof e ? e(t) : e;
                                    return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? ea({
                                        element: n.current,
                                        padding: r
                                    }).fn(t) : {} : n ? ea({
                                        element: n,
                                        padding: r
                                    }).fn(t) : {}
                                }
                            }))(e),
                            options: [e, t]
                        }))({
                            element: X,
                            padding: k
                        }), eI({
                            arrowWidth: J,
                            arrowHeight: Q
                        }), W && ((e, t) => ({ ... function(e) {
                                return void 0 === e && (e = {}), {
                                    name: "hide",
                                    options: e,
                                    async fn(t) {
                                        let {
                                            rects: n
                                        } = t, {
                                            strategy: r = "referenceHidden",
                                            ...o
                                        } = d(e, t);
                                        switch (r) {
                                            case "referenceHidden":
                                                {
                                                    let e = T(await R(t, { ...o,
                                                        elementContext: "reference"
                                                    }), n.reference);
                                                    return {
                                                        data: {
                                                            referenceHiddenOffsets: e,
                                                            referenceHidden: L(e)
                                                        }
                                                    }
                                                }
                                            case "escaped":
                                                {
                                                    let e = T(await R(t, { ...o,
                                                        altBoundary: !0
                                                    }), n.floating);
                                                    return {
                                                        data: {
                                                            escapedOffsets: e,
                                                            escaped: L(e)
                                                        }
                                                    }
                                                }
                                            default:
                                                return {}
                                        }
                                    }
                                }
                            }(e),
                            options: [e, t]
                        }))({
                            strategy: "referenceHidden",
                            ...er
                        })]
                    }), [eC, eR] = eW(ev), eL = (0, ew.c)(B);
                    (0, ex.N)(() => {
                        eb && (null == eL || eL())
                    }, [eb, eL]);
                    let eO = null == (n = eE.arrow) ? void 0 : n.x,
                        eA = null == (o = eE.arrow) ? void 0 : o.y,
                        eS = (null == (a = eE.arrow) ? void 0 : a.centerOffset) !== 0,
                        [eD, ek] = r.useState();
                    return (0, ex.N)(() => {
                        $ && ek(window.getComputedStyle($).zIndex)
                    }, [$]), (0, eh.jsx)("div", {
                        ref: eo.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...eg,
                            transform: eb ? eg.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: eD,
                            "--radix-popper-transform-origin": [null == (s = eE.transformOrigin) ? void 0 : s.x, null == (c = eE.transformOrigin) ? void 0 : c.y].join(" "),
                            ...(null == (f = eE.hide) ? void 0 : f.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, eh.jsx)(eN, {
                            scope: E,
                            placedSide: eC,
                            onArrowChange: q,
                            arrowX: eO,
                            arrowY: eA,
                            shouldHideArrow: eS,
                            children: (0, eh.jsx)(em.sG.div, {
                                "data-side": eC,
                                "data-align": eR,
                                ...H,
                                ref: G,
                                style: { ...H.style,
                                    animation: eb ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            eD.displayName = eP;
            var ek = "PopperArrow",
                e_ = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                ej = r.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, o = eS(ek, n), i = e_[o.placedSide];
                    return (0, eh.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, eh.jsx)(eg, { ...r,
                            ref: t,
                            style: { ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function eM(e) {
                return null !== e
            }
            ej.displayName = ek;
            var eI = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, i, l;
                    let {
                        placement: a,
                        rects: u,
                        middlewareData: s
                    } = t, c = (null == (n = s.arrow) ? void 0 : n.centerOffset) !== 0, f = c ? 0 : e.arrowWidth, d = c ? 0 : e.arrowHeight, [p, m] = eW(a), h = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[m], g = (null != (i = null == (r = s.arrow) ? void 0 : r.x) ? i : 0) + f / 2, y = (null != (l = null == (o = s.arrow) ? void 0 : o.y) ? l : 0) + d / 2, v = "", w = "";
                    return "bottom" === p ? (v = c ? h : "".concat(g, "px"), w = "".concat(-d, "px")) : "top" === p ? (v = c ? h : "".concat(g, "px"), w = "".concat(u.floating.height + d, "px")) : "right" === p ? (v = "".concat(-d, "px"), w = c ? h : "".concat(y, "px")) : "left" === p && (v = "".concat(u.floating.width + d, "px"), w = c ? h : "".concat(y, "px")), {
                        data: {
                            x: v,
                            y: w
                        }
                    }
                }
            });

            function eW(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var eF = eL,
                eB = eA,
                eH = eD,
                ez = ej
        },
        39033: (e, t, n) => {
            n.d(t, {
                c: () => o
            });
            var r = n(12115);

            function o(e) {
                let t = r.useRef(e);
                return r.useEffect(() => {
                    t.current = e
                }), r.useMemo(() => (...e) => t.current ? .(...e), [])
            }
        },
        46081: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n(12115),
                o = n(95155);

            function i(e, t = []) {
                let n = [],
                    l = () => {
                        let t = n.map(e => r.createContext(e));
                        return function(n) {
                            let o = n ? .[e] || t;
                            return r.useMemo(() => ({
                                [`__scope${e}`]: { ...n,
                                    [e]: o
                                }
                            }), [n, o])
                        }
                    };
                return l.scopeName = e, [function(t, i) {
                    let l = r.createContext(i),
                        a = n.length;
                    n = [...n, i];
                    let u = t => {
                        let {
                            scope: n,
                            children: i,
                            ...u
                        } = t, s = n ? .[e] ? .[a] || l, c = r.useMemo(() => u, Object.values(u));
                        return (0, o.jsx)(s.Provider, {
                            value: c,
                            children: i
                        })
                    };
                    return u.displayName = t + "Provider", [u, function(n, o) {
                        let u = o ? .[e] ? .[a] || l,
                            s = r.useContext(u);
                        if (s) return s;
                        if (void 0 !== i) return i;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let o = n(e)[`__scope${r}`];
                                return { ...t,
                                    ...o
                                }
                            }, {});
                            return r.useMemo(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(l, ...t)]
            }
        },
        52712: (e, t, n) => {
            n.d(t, {
                N: () => o
            });
            var r = n(12115),
                o = globalThis ? .document ? r.useLayoutEffect : () => {}
        },
        61127: (e, t, n) => {
            function r(e, ...t) {
                let n = new String(String.raw(e, ...t));
                return n.__sentry_template_string__ = e.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"), n.__sentry_template_values__ = t, n
            }
            n.d(t, {
                S: () => o,
                y: () => r
            });
            let o = r
        },
        61285: (e, t, n) => {
            n.d(t, {
                B: () => u
            });
            var r, o = n(12115),
                i = n(52712),
                l = (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
                a = 0;

            function u(e) {
                let [t, n] = o.useState(l());
                return (0, i.N)(() => {
                    e || n(e => e ? ? String(a++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        63655: (e, t, n) => {
            n.d(t, {
                hO: () => u,
                sG: () => a
            });
            var r = n(12115),
                o = n(47650),
                i = n(99708),
                l = n(95155),
                a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
                    let n = (0, i.TL)(`Primitive.${t}`),
                        o = r.forwardRef((e, r) => {
                            let {
                                asChild: o,
                                ...i
                            } = e;
                            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(o ? n : t, { ...i,
                                ref: r
                            })
                        });
                    return o.displayName = `Primitive.${t}`, { ...e,
                        [t]: o
                    }
                }, {});

            function u(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        83921: (e, t, n) => {
            n.d(t, {
                i3: () => Z,
                UC: () => q,
                ZL: () => X,
                Kq: () => U,
                bL: () => G,
                l9: () => Y
            });
            var r = n(12115),
                o = n(85185),
                i = n(6101),
                l = n(46081),
                a = n(19178),
                u = n(61285),
                s = n(38795),
                c = n(34378),
                f = n(28905),
                d = n(63655),
                p = n(99708),
                m = n(5845),
                h = n(95155),
                g = Object.freeze({
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal"
                }),
                y = r.forwardRef((e, t) => (0, h.jsx)(d.sG.span, { ...e,
                    ref: t,
                    style: { ...g,
                        ...e.style
                    }
                }));
            y.displayName = "VisuallyHidden";
            var [v, w] = (0, l.A)("Tooltip", [s.Bk]), x = (0, s.Bk)(), b = "TooltipProvider", E = "tooltip.open", [C, R] = v(b), T = e => {
                let {
                    __scopeTooltip: t,
                    delayDuration: n = 700,
                    skipDelayDuration: o = 300,
                    disableHoverableContent: i = !1,
                    children: l
                } = e, a = r.useRef(!0), u = r.useRef(!1), s = r.useRef(0);
                return r.useEffect(() => {
                    let e = s.current;
                    return () => window.clearTimeout(e)
                }, []), (0, h.jsx)(C, {
                    scope: t,
                    isOpenDelayedRef: a,
                    delayDuration: n,
                    onOpen: r.useCallback(() => {
                        window.clearTimeout(s.current), a.current = !1
                    }, []),
                    onClose: r.useCallback(() => {
                        window.clearTimeout(s.current), s.current = window.setTimeout(() => a.current = !0, o)
                    }, [o]),
                    isPointerInTransitRef: u,
                    onPointerInTransitChange: r.useCallback(e => {
                        u.current = e
                    }, []),
                    disableHoverableContent: i,
                    children: l
                })
            };
            T.displayName = b;
            var L = "Tooltip",
                [O, A] = v(L),
                P = e => {
                    let {
                        __scopeTooltip: t,
                        children: n,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: l,
                        disableHoverableContent: a,
                        delayDuration: c
                    } = e, f = R(L, e.__scopeTooltip), d = x(t), [p, g] = r.useState(null), y = (0, u.B)(), v = r.useRef(0), w = null != a ? a : f.disableHoverableContent, b = null != c ? c : f.delayDuration, C = r.useRef(!1), [T, A] = (0, m.i)({
                        prop: o,
                        defaultProp: null != i && i,
                        onChange: e => {
                            e ? (f.onOpen(), document.dispatchEvent(new CustomEvent(E))) : f.onClose(), null == l || l(e)
                        },
                        caller: L
                    }), P = r.useMemo(() => T ? C.current ? "delayed-open" : "instant-open" : "closed", [T]), N = r.useCallback(() => {
                        window.clearTimeout(v.current), v.current = 0, C.current = !1, A(!0)
                    }, [A]), S = r.useCallback(() => {
                        window.clearTimeout(v.current), v.current = 0, A(!1)
                    }, [A]), D = r.useCallback(() => {
                        window.clearTimeout(v.current), v.current = window.setTimeout(() => {
                            C.current = !0, A(!0), v.current = 0
                        }, b)
                    }, [b, A]);
                    return r.useEffect(() => () => {
                        v.current && (window.clearTimeout(v.current), v.current = 0)
                    }, []), (0, h.jsx)(s.bL, { ...d,
                        children: (0, h.jsx)(O, {
                            scope: t,
                            contentId: y,
                            open: T,
                            stateAttribute: P,
                            trigger: p,
                            onTriggerChange: g,
                            onTriggerEnter: r.useCallback(() => {
                                f.isOpenDelayedRef.current ? D() : N()
                            }, [f.isOpenDelayedRef, D, N]),
                            onTriggerLeave: r.useCallback(() => {
                                w ? S() : (window.clearTimeout(v.current), v.current = 0)
                            }, [S, w]),
                            onOpen: N,
                            onClose: S,
                            disableHoverableContent: w,
                            children: n
                        })
                    })
                };
            P.displayName = L;
            var N = "TooltipTrigger",
                S = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...l
                    } = e, a = A(N, n), u = R(N, n), c = x(n), f = r.useRef(null), p = (0, i.s)(t, f, a.onTriggerChange), m = r.useRef(!1), g = r.useRef(!1), y = r.useCallback(() => m.current = !1, []);
                    return r.useEffect(() => () => document.removeEventListener("pointerup", y), [y]), (0, h.jsx)(s.Mz, {
                        asChild: !0,
                        ...c,
                        children: (0, h.jsx)(d.sG.button, {
                            "aria-describedby": a.open ? a.contentId : void 0,
                            "data-state": a.stateAttribute,
                            ...l,
                            ref: p,
                            onPointerMove: (0, o.m)(e.onPointerMove, e => {
                                "touch" !== e.pointerType && (g.current || u.isPointerInTransitRef.current || (a.onTriggerEnter(), g.current = !0))
                            }),
                            onPointerLeave: (0, o.m)(e.onPointerLeave, () => {
                                a.onTriggerLeave(), g.current = !1
                            }),
                            onPointerDown: (0, o.m)(e.onPointerDown, () => {
                                a.open && a.onClose(), m.current = !0, document.addEventListener("pointerup", y, {
                                    once: !0
                                })
                            }),
                            onFocus: (0, o.m)(e.onFocus, () => {
                                m.current || a.onOpen()
                            }),
                            onBlur: (0, o.m)(e.onBlur, a.onClose),
                            onClick: (0, o.m)(e.onClick, a.onClose)
                        })
                    })
                });
            S.displayName = N;
            var D = "TooltipPortal",
                [k, _] = v(D, {
                    forceMount: void 0
                }),
                j = e => {
                    let {
                        __scopeTooltip: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, i = A(D, t);
                    return (0, h.jsx)(k, {
                        scope: t,
                        forceMount: n,
                        children: (0, h.jsx)(f.C, {
                            present: n || i.open,
                            children: (0, h.jsx)(c.Z, {
                                asChild: !0,
                                container: o,
                                children: r
                            })
                        })
                    })
                };
            j.displayName = D;
            var M = "TooltipContent",
                I = r.forwardRef((e, t) => {
                    let n = _(M, e.__scopeTooltip),
                        {
                            forceMount: r = n.forceMount,
                            side: o = "top",
                            ...i
                        } = e,
                        l = A(M, e.__scopeTooltip);
                    return (0, h.jsx)(f.C, {
                        present: r || l.open,
                        children: l.disableHoverableContent ? (0, h.jsx)(z, {
                            side: o,
                            ...i,
                            ref: t
                        }) : (0, h.jsx)(W, {
                            side: o,
                            ...i,
                            ref: t
                        })
                    })
                }),
                W = r.forwardRef((e, t) => {
                    let n = A(M, e.__scopeTooltip),
                        o = R(M, e.__scopeTooltip),
                        l = r.useRef(null),
                        a = (0, i.s)(t, l),
                        [u, s] = r.useState(null),
                        {
                            trigger: c,
                            onClose: f
                        } = n,
                        d = l.current,
                        {
                            onPointerInTransitChange: p
                        } = o,
                        m = r.useCallback(() => {
                            s(null), p(!1)
                        }, [p]),
                        g = r.useCallback((e, t) => {
                            let n = e.currentTarget,
                                r = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                o = function(e, t) {
                                    let n = Math.abs(t.top - e.y),
                                        r = Math.abs(t.bottom - e.y),
                                        o = Math.abs(t.right - e.x),
                                        i = Math.abs(t.left - e.x);
                                    switch (Math.min(n, r, o, i)) {
                                        case i:
                                            return "left";
                                        case o:
                                            return "right";
                                        case n:
                                            return "top";
                                        case r:
                                            return "bottom";
                                        default:
                                            throw Error("unreachable")
                                    }
                                }(r, n.getBoundingClientRect());
                            s(function(e) {
                                let t = e.slice();
                                return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : 1 * !!(e.y > t.y)),
                                    function(e) {
                                        if (e.length <= 1) return e.slice();
                                        let t = [];
                                        for (let n = 0; n < e.length; n++) {
                                            let r = e[n];
                                            for (; t.length >= 2;) {
                                                let e = t[t.length - 1],
                                                    n = t[t.length - 2];
                                                if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                                else break
                                            }
                                            t.push(r)
                                        }
                                        t.pop();
                                        let n = [];
                                        for (let t = e.length - 1; t >= 0; t--) {
                                            let r = e[t];
                                            for (; n.length >= 2;) {
                                                let e = n[n.length - 1],
                                                    t = n[n.length - 2];
                                                if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                                                else break
                                            }
                                            n.push(r)
                                        }
                                        return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                                    }(t)
                            }([... function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
                                    r = [];
                                switch (t) {
                                    case "top":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y + n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "bottom":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y - n
                                        });
                                        break;
                                    case "left":
                                        r.push({
                                            x: e.x + n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "right":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x - n,
                                            y: e.y + n
                                        })
                                }
                                return r
                            }(r, o), ... function(e) {
                                let {
                                    top: t,
                                    right: n,
                                    bottom: r,
                                    left: o
                                } = e;
                                return [{
                                    x: o,
                                    y: t
                                }, {
                                    x: n,
                                    y: t
                                }, {
                                    x: n,
                                    y: r
                                }, {
                                    x: o,
                                    y: r
                                }]
                            }(t.getBoundingClientRect())])), p(!0)
                        }, [p]);
                    return r.useEffect(() => () => m(), [m]), r.useEffect(() => {
                        if (c && d) {
                            let e = e => g(e, d),
                                t = e => g(e, c);
                            return c.addEventListener("pointerleave", e), d.addEventListener("pointerleave", t), () => {
                                c.removeEventListener("pointerleave", e), d.removeEventListener("pointerleave", t)
                            }
                        }
                    }, [c, d, g, m]), r.useEffect(() => {
                        if (u) {
                            let e = e => {
                                let t = e.target,
                                    n = {
                                        x: e.clientX,
                                        y: e.clientY
                                    },
                                    r = (null == c ? void 0 : c.contains(t)) || (null == d ? void 0 : d.contains(t)),
                                    o = ! function(e, t) {
                                        let {
                                            x: n,
                                            y: r
                                        } = e, o = !1;
                                        for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                            let l = t[e],
                                                a = t[i],
                                                u = l.x,
                                                s = l.y,
                                                c = a.x,
                                                f = a.y;
                                            s > r != f > r && n < (c - u) * (r - s) / (f - s) + u && (o = !o)
                                        }
                                        return o
                                    }(n, u);
                                r ? m() : o && (m(), f())
                            };
                            return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
                        }
                    }, [c, d, u, f, m]), (0, h.jsx)(z, { ...e,
                        ref: a
                    })
                }),
                [F, B] = v(L, {
                    isInside: !1
                }),
                H = (0, p.Dc)("TooltipContent"),
                z = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        children: o,
                        "aria-label": i,
                        onEscapeKeyDown: l,
                        onPointerDownOutside: u,
                        ...c
                    } = e, f = A(M, n), d = x(n), {
                        onClose: p
                    } = f;
                    return r.useEffect(() => (document.addEventListener(E, p), () => document.removeEventListener(E, p)), [p]), r.useEffect(() => {
                        if (f.trigger) {
                            let e = e => {
                                let t = e.target;
                                (null == t ? void 0 : t.contains(f.trigger)) && p()
                            };
                            return window.addEventListener("scroll", e, {
                                capture: !0
                            }), () => window.removeEventListener("scroll", e, {
                                capture: !0
                            })
                        }
                    }, [f.trigger, p]), (0, h.jsx)(a.qW, {
                        asChild: !0,
                        disableOutsidePointerEvents: !1,
                        onEscapeKeyDown: l,
                        onPointerDownOutside: u,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: p,
                        children: (0, h.jsxs)(s.UC, {
                            "data-state": f.stateAttribute,
                            ...d,
                            ...c,
                            ref: t,
                            style: { ...c.style,
                                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                            },
                            children: [(0, h.jsx)(H, {
                                children: o
                            }), (0, h.jsx)(F, {
                                scope: n,
                                isInside: !0,
                                children: (0, h.jsx)(y, {
                                    id: f.contentId,
                                    role: "tooltip",
                                    children: i || o
                                })
                            })]
                        })
                    })
                });
            I.displayName = M;
            var $ = "TooltipArrow",
                V = r.forwardRef((e, t) => {
                    let {
                        __scopeTooltip: n,
                        ...r
                    } = e, o = x(n);
                    return B($, n).isInside ? null : (0, h.jsx)(s.i3, { ...o,
                        ...r,
                        ref: t
                    })
                });
            V.displayName = $;
            var U = T,
                G = P,
                Y = S,
                X = j,
                q = I,
                Z = V
        },
        85185: (e, t, n) => {
            n.d(t, {
                m: () => r
            });

            function r(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e ? .(r), !1 === n || !r.defaultPrevented) return t ? .(r)
                }
            }
        },
        98199: (e, t, n) => {
            n.r(t), n.d(t, {
                debug: () => a,
                error: () => c,
                fatal: () => f,
                fmt: () => o.S,
                info: () => u,
                trace: () => l,
                warn: () => s
            });
            var r = n(33827),
                o = n(61127);

            function i(e, t, n, o) {
                (0, r.KG)({
                    level: e,
                    message: t,
                    attributes: n,
                    severityNumber: o
                })
            }

            function l(e, t) {
                i("trace", e, t)
            }

            function a(e, t) {
                i("debug", e, t)
            }

            function u(e, t) {
                i("info", e, t)
            }

            function s(e, t) {
                i("warn", e, t)
            }

            function c(e, t) {
                i("error", e, t)
            }

            function f(e, t) {
                i("fatal", e, t)
            }
        },
        99708: (e, t, n) => {
            n.d(t, {
                Dc: () => u,
                TL: () => l
            });
            var r = n(12115),
                o = n(6101),
                i = n(95155);

            function l(e) {
                let t = function(e) {
                        let t = r.forwardRef((e, t) => {
                            let {
                                children: n,
                                ...i
                            } = e;
                            if (r.isValidElement(n)) {
                                var l;
                                let e, a, u = (l = n, (a = (e = Object.getOwnPropertyDescriptor(l.props, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? l.ref : (a = (e = Object.getOwnPropertyDescriptor(l, "ref") ? .get) && "isReactWarning" in e && e.isReactWarning) ? l.props.ref : l.props.ref || l.ref),
                                    s = function(e, t) {
                                        let n = { ...t
                                        };
                                        for (let r in t) {
                                            let o = e[r],
                                                i = t[r];
                                            /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                                                let t = i(...e);
                                                return o(...e), t
                                            } : o && (n[r] = o) : "style" === r ? n[r] = { ...o,
                                                ...i
                                            } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                                        }
                                        return { ...e,
                                            ...n
                                        }
                                    }(i, n.props);
                                return n.type !== r.Fragment && (s.ref = t ? (0, o.t)(t, u) : u), r.cloneElement(n, s)
                            }
                            return r.Children.count(n) > 1 ? r.Children.only(null) : null
                        });
                        return t.displayName = `${e}.SlotClone`, t
                    }(e),
                    n = r.forwardRef((e, n) => {
                        let {
                            children: o,
                            ...l
                        } = e, a = r.Children.toArray(o), u = a.find(s);
                        if (u) {
                            let e = u.props.children,
                                o = a.map(t => t !== u ? t : r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null);
                            return (0, i.jsx)(t, { ...l,
                                ref: n,
                                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
                            })
                        }
                        return (0, i.jsx)(t, { ...l,
                            ref: n,
                            children: o
                        })
                    });
                return n.displayName = `${e}.Slot`, n
            }
            var a = Symbol("radix.slottable");

            function u(e) {
                let t = ({
                    children: e
                }) => (0, i.jsx)(i.Fragment, {
                    children: e
                });
                return t.displayName = `${e}.Slottable`, t.__radixId = a, t
            }

            function s(e) {
                return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === a
            }
        }
    }
]);