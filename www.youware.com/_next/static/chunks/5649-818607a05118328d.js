try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "191de47b-9c3f-42c7-8985-f88db89b3595", e._sentryDebugIdIdentifier = "sentry-dbid-191de47b-9c3f-42c7-8985-f88db89b3595")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5649], {
        21620: (e, t, n) => {
            n.d(t, {
                Mz: () => eq,
                i3: () => eQ,
                UC: () => eJ,
                ZL: () => eH,
                bL: () => ez,
                l9: () => eG
            });
            var r, o, a = n(12115),
                i = n(85185),
                u = n(6101),
                c = n(46081),
                l = n(19178),
                d = 0;

            function s() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
            var f = n(63655),
                p = n(39033),
                v = n(95155),
                h = "focusScope.autoFocusOnMount",
                m = "focusScope.autoFocusOnUnmount",
                g = {
                    bubbles: !1,
                    cancelable: !0
                },
                y = a.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: i,
                        ...c
                    } = e, [l, d] = a.useState(null), s = (0, p.c)(o), y = (0, p.c)(i), x = a.useRef(null), R = (0, u.s)(t, e => d(e)), k = a.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    a.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (k.paused || !l) return;
                                    let t = e.target;
                                    l.contains(t) ? x.current = t : w(x.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (k.paused || !l) return;
                                    let t = e.relatedTarget;
                                    null !== t && (l.contains(t) || w(x.current, {
                                        select: !0
                                    }))
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && w(l)
                            });
                            return l && n.observe(l, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, l, k.paused]), a.useEffect(() => {
                        if (l) {
                            C.add(k);
                            let e = document.activeElement;
                            if (!l.contains(e)) {
                                let t = new CustomEvent(h, g);
                                l.addEventListener(h, s), l.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.activeElement;
                                    for (let r of e)
                                        if (w(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(b(l).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && w(l))
                            }
                            return () => {
                                l.removeEventListener(h, s), setTimeout(() => {
                                    let t = new CustomEvent(m, g);
                                    l.addEventListener(m, y), l.dispatchEvent(t), t.defaultPrevented || w(null != e ? e : document.body, {
                                        select: !0
                                    }), l.removeEventListener(m, y), C.remove(k)
                                }, 0)
                            }
                        }
                    }, [l, s, y, k]);
                    let A = a.useCallback(e => {
                        if (!n && !r || k.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, a] = function(e) {
                                    let t = b(e);
                                    return [E(t, e), E(t.reverse(), e)]
                                }(t);
                            r && a ? e.shiftKey || o !== a ? e.shiftKey && o === r && (e.preventDefault(), n && w(a, {
                                select: !0
                            })) : (e.preventDefault(), n && w(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, k.paused]);
                    return (0, v.jsx)(f.sG.div, {
                        tabIndex: -1,
                        ...c,
                        ref: R,
                        onKeyDown: A
                    })
                });

            function b(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function E(e, t) {
                for (let n of e)
                    if (! function(e, t) {
                            let {
                                upTo: n
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === n || e !== n);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function w(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            y.displayName = "FocusScope";
            var C = function() {
                let e = [];
                return {
                    add(t) {
                        let n = e[0];
                        t !== n && (null == n || n.pause()), (e = x(e, t)).unshift(t)
                    },
                    remove(t) {
                        var n;
                        null == (n = (e = x(e, t))[0]) || n.resume()
                    }
                }
            }();

            function x(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var R = n(61285),
                k = n(38795),
                A = n(34378),
                S = n(28905),
                N = n(99708),
                T = n(5845),
                P = new WeakMap,
                M = new WeakMap,
                L = {},
                F = 0,
                I = function(e) {
                    return e && (e.host || I(e.parentNode))
                },
                D = function(e, t, n, r) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = I(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    L[n] || (L[n] = new WeakMap);
                    var a = L[n],
                        i = [],
                        u = new Set,
                        c = new Set(o),
                        l = function(e) {
                            !e || u.has(e) || (u.add(e), l(e.parentNode))
                        };
                    o.forEach(l);
                    var d = function(e) {
                        !e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (u.has(e)) d(e);
                            else try {
                                var t = e.getAttribute(r),
                                    o = null !== t && "false" !== t,
                                    c = (P.get(e) || 0) + 1,
                                    l = (a.get(e) || 0) + 1;
                                P.set(e, c), a.set(e, l), i.push(e), 1 === c && o && M.set(e, !0), 1 === l && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return d(t), u.clear(), F++,
                        function() {
                            i.forEach(function(e) {
                                var t = P.get(e) - 1,
                                    o = a.get(e) - 1;
                                P.set(e, t), a.set(e, o), t || (M.has(e) || e.removeAttribute(r), M.delete(e)), o || e.removeAttribute(n)
                            }), --F || (P = new WeakMap, P = new WeakMap, M = new WeakMap, L = {})
                        }
                },
                j = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), D(r, o, n, "aria-hidden")) : function() {
                        return null
                    }
                },
                _ = n(39249),
                O = "right-scroll-bar-position",
                W = "width-before-scroll-bar";

            function B(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var K = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
                X = new WeakMap;

            function U(e) {
                return e
            }
            var Y = function(e) {
                    void 0 === e && (e = {});
                    var t, n, r, o = (void 0 === t && (t = U), n = [], r = !1, {
                        read: function() {
                            if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                            return n.length ? n[n.length - 1] : null
                        },
                        useMedium: function(e) {
                            var o = t(e, r);
                            return n.push(o),
                                function() {
                                    n = n.filter(function(e) {
                                        return e !== o
                                    })
                                }
                        },
                        assignSyncMedium: function(e) {
                            for (r = !0; n.length;) {
                                var t = n;
                                n = [], t.forEach(e)
                            }
                            n = {
                                push: function(t) {
                                    return e(t)
                                },
                                filter: function() {
                                    return n
                                }
                            }
                        },
                        assignMedium: function(e) {
                            r = !0;
                            var t = [];
                            if (n.length) {
                                var o = n;
                                n = [], o.forEach(e), t = n
                            }
                            var a = function() {
                                    var n = t;
                                    t = [], n.forEach(e)
                                },
                                i = function() {
                                    return Promise.resolve().then(a)
                                };
                            i(), n = {
                                push: function(e) {
                                    t.push(e), i()
                                },
                                filter: function(e) {
                                    return t = t.filter(e), n
                                }
                            }
                        }
                    });
                    return o.options = (0, _.Cl)({
                        async: !0,
                        ssr: !1
                    }, e), o
                }(),
                Z = function() {},
                z = a.forwardRef(function(e, t) {
                    var n, r, o, i, u = a.useRef(null),
                        c = a.useState({
                            onScrollCapture: Z,
                            onWheelCapture: Z,
                            onTouchMoveCapture: Z
                        }),
                        l = c[0],
                        d = c[1],
                        s = e.forwardProps,
                        f = e.children,
                        p = e.className,
                        v = e.removeScrollBar,
                        h = e.enabled,
                        m = e.shards,
                        g = e.sideCar,
                        y = e.noRelative,
                        b = e.noIsolation,
                        E = e.inert,
                        w = e.allowPinchZoom,
                        C = e.as,
                        x = e.gapMode,
                        R = (0, _.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        k = (n = [u, t], r = function(e) {
                            return n.forEach(function(t) {
                                return B(t, e)
                            })
                        }, (o = (0, a.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, i = o.facade, K(function() {
                            var e = X.get(i);
                            if (e) {
                                var t = new Set(e),
                                    r = new Set(n),
                                    o = i.current;
                                t.forEach(function(e) {
                                    r.has(e) || B(e, null)
                                }), r.forEach(function(e) {
                                    t.has(e) || B(e, o)
                                })
                            }
                            X.set(i, n)
                        }, [n]), i),
                        A = (0, _.Cl)((0, _.Cl)({}, R), l);
                    return a.createElement(a.Fragment, null, h && a.createElement(g, {
                        sideCar: Y,
                        removeScrollBar: v,
                        shards: m,
                        noRelative: y,
                        noIsolation: b,
                        inert: E,
                        setCallbacks: d,
                        allowPinchZoom: !!w,
                        lockRef: u,
                        gapMode: x
                    }), s ? a.cloneElement(a.Children.only(f), (0, _.Cl)((0, _.Cl)({}, A), {
                        ref: k
                    })) : a.createElement(void 0 === C ? "div" : C, (0, _.Cl)({}, A, {
                        className: p,
                        ref: k
                    }), f))
                });
            z.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, z.classNames = {
                fullWidth: W,
                zeroRight: O
            };
            var q = function(e) {
                var t = e.sideCar,
                    n = (0, _.Tt)(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return a.createElement(r, (0, _.Cl)({}, n))
            };
            q.isSideCarExport = !0;
            var G = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(r) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = o || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var a, i;
                                (a = t).styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r)), i = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                H = function() {
                    var e = G();
                    return function(t, n) {
                        a.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                J = function() {
                    var e = H();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                Q = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                V = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                $ = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [V(n), V(r), V(o)]
                },
                ee = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return Q;
                    var t = $(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                et = J(),
                en = "data-scroll-locked",
                er = function(e, t, n, r) {
                    var o = e.left,
                        a = e.top,
                        i = e.right,
                        u = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(u, "px ").concat(r, ";\n  }\n  body[").concat(en, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(O, " {\n    right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(W, " {\n    margin-right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(O, " .").concat(O, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(W, " .").concat(W, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(en, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
                },
                eo = function() {
                    var e = parseInt(document.body.getAttribute(en) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                ea = function() {
                    a.useEffect(function() {
                        return document.body.setAttribute(en, (eo() + 1).toString()),
                            function() {
                                var e = eo() - 1;
                                e <= 0 ? document.body.removeAttribute(en) : document.body.setAttribute(en, e.toString())
                            }
                    }, [])
                },
                ei = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r;
                    ea();
                    var i = a.useMemo(function() {
                        return ee(o)
                    }, [o]);
                    return a.createElement(et, {
                        styles: er(i, !t, o, n ? "" : "!important")
                    })
                },
                eu = !1;
            if ("undefined" != typeof window) try {
                var ec = Object.defineProperty({}, "passive", {
                    get: function() {
                        return eu = !0, !0
                    }
                });
                window.addEventListener("test", ec, ec), window.removeEventListener("test", ec, ec)
            } catch (e) {
                eu = !1
            }
            var el = !!eu && {
                    passive: !1
                },
                ed = function(e, t) {
                    if (!(e instanceof Element)) return !1;
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t])
                },
                es = function(e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), ef(e, r)) {
                            var o = ep(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body);
                    return !1
                },
                ef = function(e, t) {
                    return "v" === e ? ed(t, "overflowY") : ed(t, "overflowX")
                },
                ep = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                ev = function(e, t, n, r, o) {
                    var a, i = (a = window.getComputedStyle(t).direction, "h" === e && "rtl" === a ? -1 : 1),
                        u = i * r,
                        c = n.target,
                        l = t.contains(c),
                        d = !1,
                        s = u > 0,
                        f = 0,
                        p = 0;
                    do {
                        if (!c) break;
                        var v = ep(e, c),
                            h = v[0],
                            m = v[1] - v[2] - i * h;
                        (h || m) && ef(e, c) && (f += m, p += h);
                        var g = c.parentNode;
                        c = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g
                    } while (!l && c !== document.body || l && (t.contains(c) || t === c));
                    return s && (o && 1 > Math.abs(f) || !o && u > f) ? d = !0 : !s && (o && 1 > Math.abs(p) || !o && -u > p) && (d = !0), d
                },
                eh = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                em = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                eg = function(e) {
                    return e && "current" in e ? e.current : e
                },
                ey = 0,
                eb = [];
            let eE = (r = function(e) {
                var t = a.useRef([]),
                    n = a.useRef([0, 0]),
                    r = a.useRef(),
                    o = a.useState(ey++)[0],
                    i = a.useState(J)[0],
                    u = a.useRef(e);
                a.useEffect(function() {
                    u.current = e
                }, [e]), a.useEffect(function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(o));
                        var t = (0, _.fX)([e.lockRef.current], (e.shards || []).map(eg), !0).filter(Boolean);
                        return t.forEach(function(e) {
                                return e.classList.add("allow-interactivity-".concat(o))
                            }),
                            function() {
                                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                    return e.classList.remove("allow-interactivity-".concat(o))
                                })
                            }
                    }
                }, [e.inert, e.lockRef.current, e.shards]);
                var c = a.useCallback(function(e, t) {
                        if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
                        var o, a = eh(e),
                            i = n.current,
                            c = "deltaX" in e ? e.deltaX : i[0] - a[0],
                            l = "deltaY" in e ? e.deltaY : i[1] - a[1],
                            d = e.target,
                            s = Math.abs(c) > Math.abs(l) ? "h" : "v";
                        if ("touches" in e && "h" === s && "range" === d.type) return !1;
                        var f = es(s, d);
                        if (!f) return !0;
                        if (f ? o = s : (o = "v" === s ? "h" : "v", f = es(s, d)), !f) return !1;
                        if (!r.current && "changedTouches" in e && (c || l) && (r.current = o), !o) return !0;
                        var p = r.current || o;
                        return ev(p, t, e, "h" === p ? c : l, !0)
                    }, []),
                    l = a.useCallback(function(e) {
                        if (eb.length && eb[eb.length - 1] === i) {
                            var n = "deltaY" in e ? em(e) : eh(e),
                                r = t.current.filter(function(t) {
                                    var r;
                                    return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta, r[0] === n[0] && r[1] === n[1])
                                })[0];
                            if (r && r.should) {
                                e.cancelable && e.preventDefault();
                                return
                            }
                            if (!r) {
                                var o = (u.current.shards || []).map(eg).filter(Boolean).filter(function(t) {
                                    return t.contains(e.target)
                                });
                                (o.length > 0 ? c(e, o[0]) : !u.current.noIsolation) && e.cancelable && e.preventDefault()
                            }
                        }
                    }, []),
                    d = a.useCallback(function(e, n, r, o) {
                        var a = {
                            name: e,
                            delta: n,
                            target: r,
                            should: o,
                            shadowParent: function(e) {
                                for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                return t
                            }(r)
                        };
                        t.current.push(a), setTimeout(function() {
                            t.current = t.current.filter(function(e) {
                                return e !== a
                            })
                        }, 1)
                    }, []),
                    s = a.useCallback(function(e) {
                        n.current = eh(e), r.current = void 0
                    }, []),
                    f = a.useCallback(function(t) {
                        d(t.type, em(t), t.target, c(t, e.lockRef.current))
                    }, []),
                    p = a.useCallback(function(t) {
                        d(t.type, eh(t), t.target, c(t, e.lockRef.current))
                    }, []);
                a.useEffect(function() {
                    return eb.push(i), e.setCallbacks({
                            onScrollCapture: f,
                            onWheelCapture: f,
                            onTouchMoveCapture: p
                        }), document.addEventListener("wheel", l, el), document.addEventListener("touchmove", l, el), document.addEventListener("touchstart", s, el),
                        function() {
                            eb = eb.filter(function(e) {
                                return e !== i
                            }), document.removeEventListener("wheel", l, el), document.removeEventListener("touchmove", l, el), document.removeEventListener("touchstart", s, el)
                        }
                }, []);
                var v = e.removeScrollBar,
                    h = e.inert;
                return a.createElement(a.Fragment, null, h ? a.createElement(i, {
                    styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                }) : null, v ? a.createElement(ei, {
                    noRelative: e.noRelative,
                    gapMode: e.gapMode
                }) : null)
            }, Y.useMedium(r), q);
            var ew = a.forwardRef(function(e, t) {
                return a.createElement(z, (0, _.Cl)({}, e, {
                    ref: t,
                    sideCar: eE
                }))
            });
            ew.classNames = z.classNames;
            var eC = "Popover",
                [ex, eR] = (0, c.A)(eC, [k.Bk]),
                ek = (0, k.Bk)(),
                [eA, eS] = ex(eC),
                eN = e => {
                    let {
                        __scopePopover: t,
                        children: n,
                        open: r,
                        defaultOpen: o,
                        onOpenChange: i,
                        modal: u = !1
                    } = e, c = ek(t), l = a.useRef(null), [d, s] = a.useState(!1), [f, p] = (0, T.i)({
                        prop: r,
                        defaultProp: null != o && o,
                        onChange: i,
                        caller: eC
                    });
                    return (0, v.jsx)(k.bL, { ...c,
                        children: (0, v.jsx)(eA, {
                            scope: t,
                            contentId: (0, R.B)(),
                            triggerRef: l,
                            open: f,
                            onOpenChange: p,
                            onOpenToggle: a.useCallback(() => p(e => !e), [p]),
                            hasCustomAnchor: d,
                            onCustomAnchorAdd: a.useCallback(() => s(!0), []),
                            onCustomAnchorRemove: a.useCallback(() => s(!1), []),
                            modal: u,
                            children: n
                        })
                    })
                };
            eN.displayName = eC;
            var eT = "PopoverAnchor",
                eP = a.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        ...r
                    } = e, o = eS(eT, n), i = ek(n), {
                        onCustomAnchorAdd: u,
                        onCustomAnchorRemove: c
                    } = o;
                    return a.useEffect(() => (u(), () => c()), [u, c]), (0, v.jsx)(k.Mz, { ...i,
                        ...r,
                        ref: t
                    })
                });
            eP.displayName = eT;
            var eM = "PopoverTrigger",
                eL = a.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        ...r
                    } = e, o = eS(eM, n), a = ek(n), c = (0, u.s)(t, o.triggerRef), l = (0, v.jsx)(f.sG.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": o.open,
                        "aria-controls": o.contentId,
                        "data-state": eZ(o.open),
                        ...r,
                        ref: c,
                        onClick: (0, i.m)(e.onClick, o.onOpenToggle)
                    });
                    return o.hasCustomAnchor ? l : (0, v.jsx)(k.Mz, {
                        asChild: !0,
                        ...a,
                        children: l
                    })
                });
            eL.displayName = eM;
            var eF = "PopoverPortal",
                [eI, eD] = ex(eF, {
                    forceMount: void 0
                }),
                ej = e => {
                    let {
                        __scopePopover: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, a = eS(eF, t);
                    return (0, v.jsx)(eI, {
                        scope: t,
                        forceMount: n,
                        children: (0, v.jsx)(S.C, {
                            present: n || a.open,
                            children: (0, v.jsx)(A.Z, {
                                asChild: !0,
                                container: o,
                                children: r
                            })
                        })
                    })
                };
            ej.displayName = eF;
            var e_ = "PopoverContent",
                eO = a.forwardRef((e, t) => {
                    let n = eD(e_, e.__scopePopover),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        a = eS(e_, e.__scopePopover);
                    return (0, v.jsx)(S.C, {
                        present: r || a.open,
                        children: a.modal ? (0, v.jsx)(eB, { ...o,
                            ref: t
                        }) : (0, v.jsx)(eK, { ...o,
                            ref: t
                        })
                    })
                });
            eO.displayName = e_;
            var eW = (0, N.TL)("PopoverContent.RemoveScroll"),
                eB = a.forwardRef((e, t) => {
                    let n = eS(e_, e.__scopePopover),
                        r = a.useRef(null),
                        o = (0, u.s)(t, r),
                        c = a.useRef(!1);
                    return a.useEffect(() => {
                        let e = r.current;
                        if (e) return j(e)
                    }, []), (0, v.jsx)(ew, {
                        as: eW,
                        allowPinchZoom: !0,
                        children: (0, v.jsx)(eX, { ...e,
                            ref: o,
                            trapFocus: n.open,
                            disableOutsidePointerEvents: !0,
                            onCloseAutoFocus: (0, i.m)(e.onCloseAutoFocus, e => {
                                var t;
                                e.preventDefault(), c.current || null == (t = n.triggerRef.current) || t.focus()
                            }),
                            onPointerDownOutside: (0, i.m)(e.onPointerDownOutside, e => {
                                let t = e.detail.originalEvent,
                                    n = 0 === t.button && !0 === t.ctrlKey;
                                c.current = 2 === t.button || n
                            }, {
                                checkForDefaultPrevented: !1
                            }),
                            onFocusOutside: (0, i.m)(e.onFocusOutside, e => e.preventDefault(), {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                }),
                eK = a.forwardRef((e, t) => {
                    let n = eS(e_, e.__scopePopover),
                        r = a.useRef(!1),
                        o = a.useRef(!1);
                    return (0, v.jsx)(eX, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var a, i;
                            null == (a = e.onCloseAutoFocus) || a.call(e, t), t.defaultPrevented || (r.current || null == (i = n.triggerRef.current) || i.focus(), t.preventDefault()), r.current = !1, o.current = !1
                        },
                        onInteractOutside: t => {
                            var a, i;
                            null == (a = e.onInteractOutside) || a.call(e, t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (o.current = !0));
                            let u = t.target;
                            (null == (i = n.triggerRef.current) ? void 0 : i.contains(u)) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
                        }
                    })
                }),
                eX = a.forwardRef((e, t) => {
                    let {
                        __scopePopover: n,
                        trapFocus: r,
                        onOpenAutoFocus: o,
                        onCloseAutoFocus: i,
                        disableOutsidePointerEvents: u,
                        onEscapeKeyDown: c,
                        onPointerDownOutside: f,
                        onFocusOutside: p,
                        onInteractOutside: h,
                        ...m
                    } = e, g = eS(e_, n), b = ek(n);
                    return a.useEffect(() => {
                        var e, t;
                        let n = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null != (e = n[0]) ? e : s()), document.body.insertAdjacentElement("beforeend", null != (t = n[1]) ? t : s()), d++, () => {
                            1 === d && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), d--
                        }
                    }, []), (0, v.jsx)(y, {
                        asChild: !0,
                        loop: !0,
                        trapped: r,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: i,
                        children: (0, v.jsx)(l.qW, {
                            asChild: !0,
                            disableOutsidePointerEvents: u,
                            onInteractOutside: h,
                            onEscapeKeyDown: c,
                            onPointerDownOutside: f,
                            onFocusOutside: p,
                            onDismiss: () => g.onOpenChange(!1),
                            children: (0, v.jsx)(k.UC, {
                                "data-state": eZ(g.open),
                                role: "dialog",
                                id: g.contentId,
                                ...b,
                                ...m,
                                ref: t,
                                style: { ...m.style,
                                    "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                                    "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                                    "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                                    "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                                    "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                                }
                            })
                        })
                    })
                }),
                eU = "PopoverClose";
            a.forwardRef((e, t) => {
                let {
                    __scopePopover: n,
                    ...r
                } = e, o = eS(eU, n);
                return (0, v.jsx)(f.sG.button, {
                    type: "button",
                    ...r,
                    ref: t,
                    onClick: (0, i.m)(e.onClick, () => o.onOpenChange(!1))
                })
            }).displayName = eU;
            var eY = a.forwardRef((e, t) => {
                let {
                    __scopePopover: n,
                    ...r
                } = e, o = ek(n);
                return (0, v.jsx)(k.i3, { ...o,
                    ...r,
                    ref: t
                })
            });

            function eZ(e) {
                return e ? "open" : "closed"
            }
            eY.displayName = "PopoverArrow";
            var ez = eN,
                eq = eP,
                eG = eL,
                eH = ej,
                eJ = eO,
                eQ = eY
        },
        42334: (e, t, n) => {
            n.d(t, {
                nF: () => r
            });
            let r = ({
                interval: e
            }, t) => {
                let n, r = !0,
                    o = (...o) => {
                        r && (t(...o), r = !1, n = setTimeout(() => {
                            r = !0, n = void 0
                        }, e))
                    };
                return o.isThrottled = () => void 0 !== n, o
            }
        }
    }
]);