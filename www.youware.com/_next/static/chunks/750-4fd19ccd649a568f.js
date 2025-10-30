try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b6b02910-af7d-4b21-aeed-b9b2365b1dda", e._sentryDebugIdIdentifier = "sentry-dbid-b6b02910-af7d-4b21-aeed-b9b2365b1dda")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [750], {
        17928: (e, t, a) => {
            a.d(t, {
                f: () => i
            });
            var i = function(e) {
                return e.Add = "add", e.Cancel = "cancel", e
            }({})
        },
        60750: (e, t, a) => {
            a.d(t, {
                EmojiProvider: () => L,
                k: () => C
            });
            var i = a(95155),
                r = a(12115),
                o = a(34477);
            let n = (0, o.createServerReference)("007e6d1648344afe6d00842459c71590c7d366b534", o.callServer, void 0, o.findSourceMapURL, "fetchEmojiList");
            var c = a(16618),
                s = a(89003),
                l = a(66710),
                d = a(62128);
            let u = (0, o.createServerReference)("70f9fae1c9db37a9b38b4c799dfdeb3567c500ef7f", o.callServer, void 0, o.findSourceMapURL, "postInteract");
            var h = a(17928);
            class p {
                addOperation(e, t, a, i) {
                    let r = "".concat(e.project_id, "-").concat(t, "-").concat(Date.now());
                    this.queue = this.queue.filter(a => !(a.project_id === e.project_id && a.interaction_type === t && !this.isOperationInProgress(a.id)));
                    let o = e.interaction || {
                        count: [],
                        status: []
                    };
                    o = this.calculateUpdatedInteraction(e, t, a), i && (this.callbacks.get(e.project_id) || new Set).forEach(t => {
                        t(e.project_id, o)
                    });
                    let n = {
                        id: r,
                        project_id: e.project_id,
                        interaction_type: t,
                        action: a,
                        timestamp: Date.now()
                    };
                    return this.queue.push(n), this.scheduleBatch(), r
                }
                registerCallback(e, t) {
                    var a;
                    return this.callbacks.has(e) || this.callbacks.set(e, new Set), null == (a = this.callbacks.get(e)) || a.add(t), () => {
                        let a = this.callbacks.get(e);
                        a && (a.delete(t), 0 === a.size && this.callbacks.delete(e))
                    }
                }
                isOperationInProgress(e) {
                    return this.processingOperations.has(e)
                }
                getOperationKey(e) {
                    return "".concat(e.project_id, "-").concat(e.interaction_type)
                }
                scheduleBatch() {
                    this.batchTimer && clearTimeout(this.batchTimer), this.batchTimer = setTimeout(() => {
                        this.processQueue()
                    }, this.batchDelay)
                }
                async processQueue() {
                    if (0 === this.queue.length) return;
                    this.batchTimer = null;
                    let e = new Map;
                    for (let a of this.queue) {
                        var t;
                        let i = this.getOperationKey(a);
                        e.has(i) || e.set(i, []), null == (t = e.get(i)) || t.push(a)
                    }
                    let a = [];
                    for (let [t, i] of e.entries()) {
                        if (this.processingOperations.has(t)) continue;
                        let e = i[0];
                        a.push(this.processOperation(e, t))
                    }
                    a.length > 0 && (await Promise.all(a), this.queue.length > 0 && this.scheduleBatch())
                }
                async processOperation(e, t) {
                    this.processingOperations.add(t), this.processingOperations.add(e.id);
                    try {
                        await u(e.project_id, e.action, e.interaction_type), this.queue = this.queue.filter(t => t.id !== e.id)
                    } catch (t) {
                        console.error("Failed to process interaction operation:", t), this.queue = this.queue.filter(t => t.id !== e.id)
                    } finally {
                        this.processingOperations.delete(t), this.processingOperations.delete(e.id)
                    }
                }
                calculateUpdatedInteraction(e, t, a) {
                    var i, r;
                    let o = [...(null == (i = e.interaction) ? void 0 : i.count) || []],
                        n = [...(null == (r = e.interaction) ? void 0 : r.status) || []],
                        c = n.findIndex(e => e.interaction_type === t);
                    c >= 0 ? n[c] = { ...n[c],
                        status: a === h.f.Add
                    } : a === h.f.Add && n.push({
                        interaction_type: t,
                        status: !0
                    });
                    let s = o.findIndex(e => e.interaction_type === t);
                    if (s >= 0) {
                        let e = a === h.f.Add ? 1 : -1;
                        o[s] = { ...o[s],
                            count: Math.max(0, o[s].count + e)
                        }
                    } else a === h.f.Add && o.push({
                        interaction_type: t,
                        count: 1
                    });
                    return {
                        count: o,
                        status: n
                    }
                }
                constructor() {
                    this.queue = [], this.processingOperations = new Set, this.batchTimer = null, this.batchDelay = 500, this.callbacks = new Map
                }
            }
            let f = "yourware-emoji-list",
                y = "yourware-emoji-lottie-cache",
                m = [],
                g = !1,
                b = [],
                v = {},
                w = new Map,
                T = !1,
                S = e => {
                    b.forEach(t => t(e)), b = []
                },
                j = () => {
                    try {
                        let e = localStorage.getItem(y);
                        e && (v = JSON.parse(atob(e)))
                    } catch (e) {
                        d.vF.error("Failed to load Lottie cache", e), v = {}, localStorage.removeItem(y)
                    }
                },
                _ = async e => {
                    if (!e || v[e] && v[e].expireTime > Date.now() && v[e].data) return;
                    if (w.has(e)) return w.get(e);
                    let t = (async () => {
                        try {
                            d.vF.trace("Start loading Lottie: ".concat(e));
                            let t = await fetch(e),
                                a = await t.json();
                            v[e] = {
                                data: a,
                                expireTime: Date.now() + 864e5
                            };
                            try {
                                localStorage.setItem(y, btoa(JSON.stringify(v)))
                            } catch (e) {
                                d.vF.error("Failed to save Lottie cache", e)
                            }
                            d.vF.trace("Lottie loaded successfully: ".concat(e))
                        } catch (t) {
                            d.vF.error("Failed to preload Lottie: ".concat(e), t)
                        } finally {
                            w.delete(e)
                        }
                    })();
                    return w.set(e, t), t
                },
                I = e => {
                    T || (T = !0, j(), setTimeout(async () => {
                        try {
                            d.vF.trace("Start preloading all Lottie animations");
                            let t = e.filter(e => e.lottie).map(e => e.lottie);
                            await Promise.all([...new Set(t)].map(e => _(e))), d.vF.trace("All Lottie animations preloaded successfully")
                        } catch (e) {
                            d.vF.error("Failed to preload Lottie animations", e)
                        } finally {
                            T = !1
                        }
                    }, 2e3))
                },
                x = e => e ? v[e] && v[e].expireTime > Date.now() && v[e].data ? v[e].data : (w.has(e) || setTimeout(() => {
                    _(e).catch(console.error)
                }, 0), null) : null,
                F = () => {
                    try {
                        let e = localStorage.getItem(f);
                        if (!e) return {
                            data: [],
                            isExpired: !0
                        };
                        let t = JSON.parse(atob(e)),
                            a = t.expireTime < Date.now();
                        return {
                            data: t.data,
                            isExpired: a
                        }
                    } catch (e) {
                        return d.vF.error("Failed to read emoji cache", e), localStorage.removeItem(f), {
                            data: [],
                            isExpired: !0
                        }
                    }
                },
                O = async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (g) return new Promise(e => {
                        b.push(e)
                    });
                    if (m.length > 0 && !e) return m;
                    if (!e) {
                        let {
                            data: e,
                            isExpired: t
                        } = F();
                        if (e.length > 0) return m = e, t ? setTimeout(() => {
                            O(!0).catch(console.error)
                        }, 0) : T || I(e), m
                    }
                    try {
                        g = !0;
                        let e = (await n()).data || [];
                        m = e;
                        try {
                            let t = {
                                data: e,
                                expireTime: Date.now() + 3e5
                            };
                            localStorage.setItem(f, btoa(JSON.stringify(t)))
                        } catch (e) {
                            d.vF.error("Failed to save emoji cache", e)
                        }
                        return T || I(e), S(e), e
                    } catch (e) {
                        return d.vF.error("Failed to fetch emojis", e), S(m), m
                    } finally {
                        g = !1
                    }
                },
                k = (0, r.createContext)({
                    emojis: [],
                    isLoading: !1,
                    getEmojiByType: () => void 0,
                    refreshEmojis: async () => {},
                    asyncGetEmojis: async () => [],
                    getLottieData: () => null,
                    interact: () => Promise.resolve(""),
                    registerInteractionCallback: () => {}
                }),
                L = e => {
                    let {
                        children: t
                    } = e, [a, o] = (0, r.useState)([]), [n, d] = (0, r.useState)(!1), {
                        userId: u
                    } = (0, c.J)(), {
                        checkAuth: h
                    } = (0, s.M)(), f = (0, r.useRef)(new p), y = (0, l.A)(() => u);
                    (0, r.useEffect)(() => {
                        setTimeout(() => {
                            j()
                        }, 3e3)
                    }, []), (0, r.useEffect)(() => {
                        let e = !0;
                        return (async () => {
                            d(!0);
                            let t = await g();
                            e && (o(t), d(!1))
                        })(), () => {
                            e = !1
                        }
                    }, []);
                    let g = async () => {
                            if (m.length > 0) {
                                let {
                                    isExpired: e
                                } = F();
                                return e && !n && setTimeout(() => {
                                    O(!0).catch(console.error)
                                }, 0), m
                            }
                            return O()
                        },
                        b = async (e, t, a) => h(async () => f.current.addOperation(e, t, a, y() || ""), {
                            title: "Love this project?",
                            description: "Log in to leave reactions and show some love.",
                            cancelText: "Cancel",
                            confirmText: "Log in"
                        })() || "",
                        v = async () => {
                            await O(!0)
                        };
                    return (0, i.jsx)(k.Provider, {
                        value: {
                            emojis: a,
                            isLoading: n,
                            getEmojiByType: e => a.find(t => t.interaction_type === e),
                            refreshEmojis: v,
                            asyncGetEmojis: g,
                            getLottieData: x,
                            interact: b,
                            registerInteractionCallback: (e, t) => {
                                f.current.registerCallback(e, t)
                            }
                        },
                        children: t
                    })
                },
                C = () => (0, r.useContext)(k)
        },
        89003: (e, t, a) => {
            a.d(t, {
                M: () => s
            });
            var i = a(35695),
                r = a(16618),
                o = a(66710),
                n = a(4821),
                c = a(66139);
            let s = () => {
                let {
                    isLoggedIn: e
                } = (0, r.J)(), t = (0, i.useRouter)(), a = (0, o.A)(() => e);
                return {
                    checkAuth: (e, i) => async function() {
                        for (var r = arguments.length, o = Array(r), s = 0; s < r; s++) o[s] = arguments[s];
                        return a() ? e(...o) : new Promise(e => {
                            (0, n.S)({
                                title: i.title,
                                description: i.description,
                                cancelText: i.cancelText || "Cancel",
                                confirmText: i.confirmText || "Log in",
                                onCancel: () => {
                                    i.onCancel && i.onCancel(), e(void 0)
                                },
                                onConfirm: () => {
                                    let a = (0, c.$)(!0, !0) + window.location.pathname + window.location.search;
                                    t.push("".concat((0, c.$)(!0), "/login?returnTo=").concat(encodeURIComponent(a))), e(void 0)
                                }
                            })
                        })
                    }
                }
            }
        }
    }
]);