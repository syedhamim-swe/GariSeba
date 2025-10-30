try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8c02e5db-0127-4411-a1d6-02705bee7f32", e._sentryDebugIdIdentifier = "sentry-dbid-8c02e5db-0127-4411-a1d6-02705bee7f32")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7177], {
        30347: () => {},
        45434: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => i
            });
            var s = n(12115),
                a = n(40923);

            function i() {
                return (0, s.useEffect)(() => {
                    (0, a.cQ)()
                }, []), null
            }
        },
        47139: (e, t, n) => {
            "use strict";

            function s() {
                return null
            }
            n.d(t, {
                default: () => s
            }), n(95155), n(6485)
        },
        68192: (e, t, n) => {
            "use strict";
            n.d(t, {
                PushProvider: () => h,
                xy: () => f,
                e6: () => m
            });
            var s = n(95155),
                a = n(12115),
                i = n(16618),
                o = n(56389),
                r = n(90239),
                l = n(40249),
                c = n(66710);
            let d = "yw_notification_tips_key",
                u = "yw_create_tips_key",
                f = 15e3,
                g = (0, a.createContext)({
                    requestPermission: () => {},
                    shouldShowNotificationTips: () => !1,
                    shouldShowCreateTips: () => !1,
                    handleCreateTipsAction: () => {},
                    handleNotificationTipsAction: () => {},
                    saveCreateTipsShowTime: () => {},
                    unsubscribe: () => {}
                }),
                h = e => {
                    let {
                        children: t
                    } = e, {
                        requestPermission: n,
                        permissionState: f,
                        unsubscribe: h
                    } = (() => {
                        let [e, t] = (0, a.useState)(null), {
                            isLoggedIn: n
                        } = (0, i.J)(), s = (0, c.A)(() => n), o = async () => {
                            let e = await l.G.requestPermission();
                            t(e), "granted" === e && d()
                        }, r = async () => {
                            let e = await l.G.permission();
                            t(e), "granted" === e && d()
                        }, d = async () => {
                            s() && l.G.subscribe()
                        }, u = async () => {
                            s() && l.G.unsubscribe()
                        };
                        return (0, a.useEffect)(() => {
                            let e;
                            return r(), (async () => {
                                if ("permissions" in navigator) try {
                                    let e = await navigator.permissions.query({
                                            name: "notifications"
                                        }),
                                        n = () => {
                                            console.log("Notification permission changed:", e.state), t(e.state)
                                        };
                                    return e.addEventListener("change", n), () => {
                                        e.removeEventListener("change", n)
                                    }
                                } catch (e) {
                                    console.log("Permissions API not supported or failed:", e)
                                }
                            })().then(t => {
                                e = t
                            }), () => {
                                null == e || e()
                            }
                        }, [n]), {
                            permissionState: e,
                            requestPermission: o,
                            unsubscribe: u
                        }
                    })(), {
                        isLoggedIn: m
                    } = (0, i.J)(), {
                        inject: w,
                        track: b
                    } = (0, o.s)(), p = (0, r.I)(!1, 840);
                    (0, a.useEffect)(() => {
                        p || w({
                            enable_push: null != f ? f : "default"
                        })
                    }, [f]);
                    let x = (0, a.useCallback)(async e => {
                            var t, n, s, a;
                            if (console.log("Processing foreground message in PushContext:", e), !await v(e) || await l.G.permission() !== "granted") return;
                            let i = (null == (t = e.data) ? void 0 : t.title) || "YouWare New Message",
                                o = {
                                    body: (null == (n = e.data) ? void 0 : n.body) || "You have a new message",
                                    icon: "/images/chrome-push-icon.png",
                                    tag: "yourware-foreground",
                                    requireInteraction: !1,
                                    data: {
                                        url: (null == (s = e.data) ? void 0 : s.target_url) || "https://www.youware.com"
                                    }
                                };
                            (e => {
                                var t;
                                b("browser_notification_sent", {
                                    notification_type: null != (t = ({
                                        remix: "remix",
                                        reaction: "emoji_reaction",
                                        save: "favorite",
                                        comment: "comment",
                                        task_update: "task_update",
                                        system: "official"
                                    })[e]) ? t : void 0
                                })
                            })(null == (a = e.data) ? void 0 : a.type);
                            let r = new Notification(i, o);
                            r.onclick = () => {
                                var t;
                                console.log("Foreground notification clicked"), window.focus();
                                let n = null == (t = e.data) ? void 0 : t.target_url;
                                n && (window.location.href = n), r.close()
                            }
                        }, []),
                        v = (0, a.useCallback)(async e => {
                            var t;
                            return !((null == (t = e.data) ? void 0 : t.type) !== "create" || window.location.href.includes("/editor") && window.document.hasFocus() && "visible" === document.visibilityState)
                        }, []);
                    return (0, a.useEffect)(() => (l.G.registerMessageHandler(x), () => {
                        l.G.unregisterMessageHandler(x)
                    }), [x]), (0, s.jsx)(g.Provider, {
                        value: {
                            shouldShowNotificationTips: () => !p && !(!m || null !== f && "default" !== f || localStorage.getItem(d)),
                            requestPermission: n,
                            shouldShowCreateTips: () => !p && !!m && (null === f || "default" === f) && !localStorage.getItem(u),
                            handleCreateTipsAction: e => {
                                let t, n = localStorage.getItem(u);
                                t = n ? JSON.parse(n) : {
                                    enable: !1,
                                    last_show_time: 0,
                                    already_show_count: 0
                                }, "not_now" === e || "time_out" === e ? (t.enable = !1, t.last_show_time = Date.now(), t.already_show_count++) : "allow" === e && (t.enable = !0, t.last_show_time = Date.now(), t.already_show_count++), localStorage.setItem(u, JSON.stringify(t))
                            },
                            handleNotificationTipsAction: () => {
                                localStorage.setItem(d, "1")
                            },
                            saveCreateTipsShowTime: () => {
                                let e, t = localStorage.getItem(u);
                                (e = t ? JSON.parse(t) : {
                                    enable: !1,
                                    last_show_time: 0,
                                    already_show_count: 0
                                }).last_show_timestamp = Date.now(), localStorage.setItem(u, JSON.stringify(e))
                            },
                            unsubscribe: h
                        },
                        children: t
                    })
                },
                m = () => (0, a.useContext)(g)
        },
        85504: (e, t, n) => {
            Promise.resolve().then(n.t.bind(n, 69243, 23)), Promise.resolve().then(n.t.bind(n, 74098, 23)), Promise.resolve().then(n.t.bind(n, 30347, 23)), Promise.resolve().then(n.bind(n, 88554)), Promise.resolve().then(n.bind(n, 90395)), Promise.resolve().then(n.bind(n, 47139)), Promise.resolve().then(n.bind(n, 97389)), Promise.resolve().then(n.bind(n, 45434)), Promise.resolve().then(n.bind(n, 53568)), Promise.resolve().then(n.bind(n, 45362)), Promise.resolve().then(n.bind(n, 60750)), Promise.resolve().then(n.bind(n, 4712)), Promise.resolve().then(n.bind(n, 33943)), Promise.resolve().then(n.bind(n, 68192)), Promise.resolve().then(n.bind(n, 28884)), Promise.resolve().then(n.bind(n, 13960)), Promise.resolve().then(n.bind(n, 16618)), Promise.resolve().then(n.bind(n, 99891))
        },
        88554: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o
            });
            var s = n(95155),
                a = n(12115),
                i = n(4821);

            function o() {
                let [e, t] = (0, a.useState)(null);
                if ((0, a.useEffect)(() => ((0, i.B)(t), () => {
                        (0, i.B)(() => {})
                    }), []), !e) return null;
                let {
                    title: n,
                    description: o,
                    cancelText: r = "Cancel",
                    confirmText: l = "Confirm",
                    onCancel: c,
                    onConfirm: d,
                    cancelClassName: u = "",
                    confirmClassName: f = ""
                } = e, g = () => {
                    c && c(), t(null)
                };
                return (0, s.jsx)("div", {
                    className: "fixed inset-0 z-100 flex items-center justify-center bg-black/20 p-4",
                    onClick: e => {
                        e.target === e.currentTarget && g()
                    },
                    children: (0, s.jsxs)("div", {
                        className: "flex w-[512px] max-w-[calc(100vw-32px)] flex-col rounded-[16px] bg-white p-5 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.10),0px_16px_32px_-1px_rgba(12,12,13,0.1)]",
                        children: [(0, s.jsx)("h3", {
                            className: "text-[20px] font-bold",
                            children: n
                        }), o && (0, s.jsx)("div", {
                            className: "mt-2 text-[14px] font-normal text-black/65",
                            children: o
                        }), (0, s.jsxs)("div", {
                            className: "mt-6 flex justify-end gap-3",
                            children: [c && (0, s.jsx)("button", {
                                className: "flex h-9 cursor-pointer items-center justify-center rounded-[10px] border border-gray-300 px-3 transition-colors hover:bg-gray-100 ".concat(u),
                                onClick: g,
                                children: r
                            }), d && (0, s.jsx)("button", {
                                className: "bg-brand hover:bg-brand/85 flex h-9 cursor-pointer items-center justify-center rounded-[10px] px-3 text-white transition-colors ".concat(f),
                                onClick: () => {
                                    d && d(), t(null)
                                },
                                children: l
                            })]
                        })]
                    })
                })
            }
        },
        90395: (e, t, n) => {
            "use strict";
            n.d(t, {
                GoogleAnalytics: () => r
            });
            var s = n(95155),
                a = n(35695),
                i = n(63554),
                o = n(12115);

            function r() {
                let [e, t] = (0, o.useState)(!1), n = (0, a.usePathname)();
                return ((0, o.useEffect)(() => {
                    /(staging|localhost)/.test(window.location.hostname) ? t(!1) : t(!0)
                }, []), (0, o.useEffect)(() => {
                    var t;
                    e && (null == (t = window) ? void 0 : t.gtag) && window.gtag("config", "G-6Z2G4L6M8E", {
                        page_path: n
                    })
                }, [e, n]), e) ? (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(i.default, {
                        async: !0,
                        src: "https://www.googletagmanager.com/gtag/js?id=G-6Z2G4L6M8E"
                    }), (0, s.jsx)(i.default, {
                        id: "gtag-init",
                        strategy: "afterInteractive",
                        children: "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', 'G-6Z2G4L6M8E');\n          gtag('config', 'AW-16989287560');\n        "
                    })]
                }) : null
            }
        },
        97389: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => r
            });
            var s = n(95155),
                a = n(25427),
                i = n(12115),
                o = n(48436);

            function r() {
                let [e, t] = (0, i.useState)(null), [n, r] = (0, i.useState)(!1);
                if ((0, i.useEffect)(() => ((0, o.B)(e => {
                        t(e), e ? setTimeout(() => r(!0), 10) : r(!1)
                    }), () => {
                        (0, o.B)(() => {})
                    }), []), !e) return null;
                let {
                    message: l,
                    type: c = "info",
                    icon: d
                } = e;
                return (0, s.jsx)("div", {
                    className: "fixed inset-x-0 top-0 z-100 flex justify-center",
                    children: (0, s.jsxs)("div", {
                        className: "flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-[14px] font-normal text-black",
                        style: {
                            transition: "all 300ms cubic-bezier(0, 1.18, 1, 1)",
                            transform: "translateY(".concat(n ? "4rem" : "-100%", ")"),
                            opacity: +!!n,
                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)"
                        },
                        children: [d || (e => {
                            switch (e) {
                                case "success":
                                    return (0, s.jsx)(a.Jnp, {
                                        className: "h-4 w-4 text-[#14AE5C]"
                                    });
                                case "error":
                                    return (0, s.jsx)(a.sFm, {
                                        className: "h-4 w-4 text-[#ef4444]"
                                    });
                                case "info":
                                    return (0, s.jsx)(a.CwO, {
                                        className: "h-4 w-4 text-black/95"
                                    });
                                case "warning":
                                    return (0, s.jsx)(a._8L, {
                                        className: "h-4 w-4 text-[#f59e0b]"
                                    });
                                default:
                                    return null
                            }
                        })(c), (0, s.jsx)("span", {
                            className: "leading-5 text-black",
                            children: l
                        })]
                    })
                })
            }
        }
    },
    e => {
        e.O(0, [4746, 7690, 7544, 8823, 8888, 8621, 4277, 4853, 373, 893, 3568, 4922, 3883, 750, 4850, 8441, 5760, 7358], () => e(e.s = 85504)), _N_E = e.O()
    }
]);