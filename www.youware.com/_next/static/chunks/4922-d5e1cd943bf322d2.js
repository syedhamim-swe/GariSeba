try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eeb4945c-e7a8-46de-86f1-340d7aafa40c", e._sentryDebugIdIdentifier = "sentry-dbid-eeb4945c-e7a8-46de-86f1-340d7aafa40c")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4922], {
        7307: (e, t, a) => {
            "use strict";
            a.d(t, {
                Q: () => r
            });
            var s = a(34477);
            let r = (0, s.createServerReference)("406f8697d880446f65feeacc85ab94a969a49f9ded", s.callServer, void 0, s.findSourceMapURL, "fetchSubscriptionInfo")
        },
        13960: (e, t, a) => {
            "use strict";
            a.d(t, {
                R: () => u,
                SubscriptionCom: () => x,
                SubscriptionProvider: () => d
            });
            var s = a(95155),
                r = a(12115),
                l = a(65453),
                n = a(7307),
                c = a(84842),
                i = a(62128);
            let o = (0, r.createContext)({
                    subscriptionInfo: null,
                    loading: !0,
                    error: null,
                    getSubscriptionInfo: async () => null
                }),
                d = e => {
                    let {
                        children: t
                    } = e, {
                        subscriptionInfo: a,
                        setSubscriptionInfo: l
                    } = p(), [d, u] = (0, r.useState)(!1), [x, h] = (0, r.useState)(null), b = (0, r.useRef)(null);
                    (0, r.useEffect)(() => {
                        let e = c.X.onMessage("SubscriptionUpdated", () => {
                                f()
                            }),
                            t = c.X.onMessage("CreditsUpdated", () => {
                                f()
                            });
                        return () => {
                            e(), t()
                        }
                    }, []);
                    let f = async e => {
                        if (b.current) return b.current;
                        let t = (async () => {
                            let t = a;
                            try {
                                var s;
                                u(!0), h(null);
                                let a = await (0, n.Q)(e);
                                if (a && 0 === a.code && (null == (s = a.data) ? void 0 : s.subscription)) l(a.data.subscription), i.Ay.info("Subscription info refreshed successfully", {
                                    subscriptionInfo: a.data
                                }), t = a.data.subscription;
                                else throw Error((null == a ? void 0 : a.message) || "Failed to fetch subscription info")
                            } catch (e) {
                                h(e instanceof Error ? e.message : "Unknown error occurred"), i.Ay.error("Error refreshing subscription info:", e)
                            } finally {
                                return u(!1), b.current = null, t
                            }
                        })();
                        return b.current = t, t
                    };
                    return (0, s.jsx)(o.Provider, {
                        value: {
                            subscriptionInfo: a,
                            loading: d,
                            error: x,
                            getSubscriptionInfo: f
                        },
                        children: t
                    })
                },
                u = () => (0, r.useContext)(o),
                p = (0, l.v)(e => ({
                    subscriptionInfo: void 0,
                    setSubscriptionInfo: t => e({
                        subscriptionInfo: t
                    })
                })),
                x = e => {
                    let {
                        subscriptionInfoPromise: t
                    } = e, {
                        setSubscriptionInfo: a
                    } = p(), s = (0, r.use)(t);
                    return (0, r.useEffect)(() => {
                        var e;
                        a((null == s || null == (e = s.data) ? void 0 : e.subscription) || null)
                    }, [s, a]), null
                }
        },
        26846: (e, t, a) => {
            "use strict";
            a.d(t, {
                cn: () => l
            });
            var s = a(52596),
                r = a(39688);

            function l() {
                for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                return (0, r.QP)((0, s.$)(t))
            }
        },
        32213: (e, t, a) => {
            "use strict";
            a.d(t, {
                y: () => r
            });
            var s = a(34477);
            let r = (0, s.createServerReference)("60b0d4d7e46ced3cba92532779fbc6deca7a64e34e", s.callServer, void 0, s.findSourceMapURL, "exportDatabase")
        },
        34321: () => {},
        36845: (e, t, a) => {
            "use strict";
            a.d(t, {
                Y: () => s
            });
            let s = {
                CHAT_CALL_TO_ACTION: "chat_call_to_action",
                SUBSCRIPTION_PAGE: "subscription_page",
                HEADER_USER_MENU: "header_user_menu"
            }
        },
        45362: (e, t, a) => {
            "use strict";
            a.d(t, {
                e: () => k,
                BackendProvider: () => _,
                O: () => C
            });
            var s = a(95155),
                r = a(35695),
                l = a(12115),
                n = a(65453),
                c = a(34477);
            let i = (0, c.createServerReference)("0029ed8a7ee6c01a04106099cfc036362c4b81181d", c.callServer, void 0, c.findSourceMapURL, "getBackendQuota"),
                o = (0, c.createServerReference)("40743fd19139ee13327e6d15f8cd3119b22ee1abb1", c.callServer, void 0, c.findSourceMapURL, "fetchBackendProjects"),
                d = (0, c.createServerReference)("4015b9e337f1d9a9ec670ed547cb01e9883d51776b", c.callServer, void 0, c.findSourceMapURL, "executeProjectAction");
            var u = a(32213),
                p = a(25427),
                x = a(90239),
                h = a(26846),
                b = a(96057);
            let f = e => {
                let {
                    onClose: t,
                    enterFrom: a = ""
                } = e, r = (0, x.I)(!1, 720);
                return (0, s.jsx)("div", {
                    className: "fixed inset-0 z-61 flex cursor-auto items-center justify-center bg-black/12 p-4",
                    onClick: t,
                    children: (0, s.jsxs)("div", {
                        className: (0, h.cn)("relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0px_16px_32px_-1px_rgba(0,0,0,0.1)]", r ? "h-[600px] w-full max-w-[400px]" : "h-[600px] w-full max-w-[640px]"),
                        onClick: e => e.stopPropagation(),
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-shrink-0 items-start justify-between gap-2 px-5 pt-5 pb-3",
                            children: [(0, s.jsx)("div", {
                                className: "flex-1",
                                children: (0, s.jsx)("h2", {
                                    className: "text-[20px] font-bold text-black/95",
                                    children: "Backend usage"
                                })
                            }), (0, s.jsx)("button", {
                                onClick: t,
                                className: "flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg p-1 transition-colors hover:bg-black/3",
                                children: (0, s.jsx)(p.Qks, {
                                    className: "h-4 w-4 text-black/95"
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "scrollbar-hide flex-1 overflow-y-auto px-5 pb-5",
                            children: (0, s.jsx)(b.A, {
                                onClose: t,
                                enterFrom: a
                            })
                        })]
                    })
                })
            };
            var m = a(56389),
                v = a(62128),
                j = a(48436),
                g = a(51024),
                y = a(13960),
                k = function(e) {
                    return e.ACTIVATED = "activated", e.DEACTIVATED = "deactivated", e.DELETED = "deleted", e
                }({});
            let w = {
                    active: 0,
                    total: 0
                },
                N = (0, l.createContext)({
                    usage: { ...w
                    },
                    isModalVisible: !1,
                    fetchUsage: async () => {},
                    fetchActiveProjects: async () => null,
                    fetchPausedProjects: async () => null,
                    executeAction: async () => null,
                    downloadDatabase: async () => {},
                    showModal: e => {},
                    hideModal: () => {}
                }),
                _ = e => {
                    let {
                        children: t
                    } = e, {
                        usage: a,
                        setUsage: n
                    } = E(), {
                        subscriptionInfo: c
                    } = (0, y.R)(), {
                        track: p
                    } = (0, m.s)(), x = (0, r.useRouter)(), h = (0, l.useRef)(""), [b, k] = (0, l.useState)(!1), w = (0, l.useRef)(null), _ = (0, l.useRef)({}), C = (0, l.useCallback)(async () => {
                        try {
                            let e = await i();
                            if ((null == e ? void 0 : e.code) === 0 && (null == e ? void 0 : e.data)) {
                                let t = {
                                    active: e.data.used_count || 0,
                                    total: e.data.total_quota || 0
                                };
                                n(t), v.Ay.info("Backend usage refreshed successfully", {
                                    usage: t
                                })
                            } else throw Error((null == e ? void 0 : e.message) || "Failed to fetch backend usage")
                        } catch (e) {
                            e instanceof Error && e.message, v.Ay.error("Error refreshing backend usage:", e)
                        } finally {
                            w.current = null
                        }
                    }, [n]), S = (0, l.useCallback)(async e => {
                        try {
                            var t, a, s;
                            let r = await o({
                                cursor: e,
                                limit: 15,
                                status: ["activated"]
                            });
                            if ((null == r ? void 0 : r.code) === 0 && (null == r || null == (t = r.data) ? void 0 : t.data)) return {
                                records: r.data.data,
                                page_info: {
                                    next_cursor: null == (a = r.data.page_info) ? void 0 : a.next_cursor,
                                    has_more: (null == (s = r.data.page_info) ? void 0 : s.has_more) || !1
                                }
                            };
                            throw Error("Failed to fetch active projects: ".concat(null == r ? void 0 : r.message, "; code: ").concat(null == r ? void 0 : r.code))
                        } catch (e) {
                            throw v.Ay.error("Error fetching active projects:", e), e
                        }
                    }, []), A = (0, l.useCallback)(async e => {
                        try {
                            var t, a, s;
                            let r = await o({
                                cursor: e,
                                limit: 15,
                                status: ["deactivated"]
                            });
                            if ((null == r ? void 0 : r.code) === 0 && (null == r || null == (t = r.data) ? void 0 : t.data)) return {
                                records: r.data.data,
                                page_info: {
                                    next_cursor: null == (a = r.data.page_info) ? void 0 : a.next_cursor,
                                    has_more: (null == (s = r.data.page_info) ? void 0 : s.has_more) || !1
                                }
                            };
                            throw Error("Failed to fetch paused projects: ".concat(null == r ? void 0 : r.message, "; code: ").concat(null == r ? void 0 : r.code))
                        } catch (e) {
                            throw v.Ay.error("Error fetching paused projects:", e), e
                        }
                    }, []), R = (0, l.useCallback)(async (e, t) => {
                        try {
                            let a = await d({
                                project_uuid: e,
                                action: t
                            });
                            return a && 0 === a.code && C(), a
                        } catch (e) {
                            throw v.Ay.error("Failed to execute project action:", e), e
                        }
                    }, [C]), D = (0, l.useCallback)(async (e, t, a, s) => {
                        if (!_.current[e] && (!s || (0, g.i)(s) && s.allow_download))
                            if (null == c ? void 0 : c.plan) {
                                p("sub_download_click", {
                                    file_type: "data",
                                    type: t,
                                    project_id: e
                                }), _.current[e] = !0;
                                try {
                                    var r;
                                    let t = await (0, u.y)(e, a);
                                    if (null == (r = t.data) ? void 0 : r.signed_url) {
                                        let e = document.createElement("a");
                                        e.href = t.data.signed_url, e.style.display = "none", document.body.appendChild(e), e.click(), document.body.removeChild(e)
                                    } else(0, j.P)({
                                        message: "Failed to download database",
                                        type: "error"
                                    })
                                } catch (e) {
                                    (0, j.P)({
                                        message: "Failed to download database",
                                        type: "error"
                                    }), v.Ay.error("Failed to download database:", e)
                                } finally {
                                    _.current[e] = !1
                                }
                            } else p("sub_upgrade_click", {
                                click_from: "export_database"
                            }), x.push("/subscription?location=app_page")
                    }, [c, p, x]), T = (0, l.useCallback)(e => {
                        p("sub_backend_usage", {
                            enter_from: e
                        }), h.current = "string" == typeof e && e ? e : "", k(!0)
                    }, [p]), I = (0, l.useCallback)(() => {
                        k(!1)
                    }, []);
                    return (0, l.useEffect)(() => {
                        C()
                    }, [c, C]), (0, s.jsxs)(N.Provider, {
                        value: {
                            usage: a,
                            isModalVisible: b,
                            fetchUsage: C,
                            fetchActiveProjects: S,
                            fetchPausedProjects: A,
                            executeAction: R,
                            downloadDatabase: D,
                            showModal: T,
                            hideModal: I
                        },
                        children: [t, b && (0, s.jsx)(f, {
                            onClose: I,
                            enterFrom: h.current
                        })]
                    })
                },
                C = () => (0, l.useContext)(N),
                E = (0, n.v)(e => ({
                    usage: { ...w
                    },
                    setUsage: t => e({
                        usage: t
                    })
                }))
        },
        51024: (e, t, a) => {
            "use strict";
            a.d(t, {
                i: () => s
            });
            let s = e => {
                var t;
                return !!((null == (t = e.backend_info) ? void 0 : t.status) || e.backend_data_exists)
            }
        },
        84842: (e, t, a) => {
            "use strict";
            a.d(t, {
                X: () => l
            });
            var s = a(62128);
            class r {
                onMessage(e, t) {
                    this.listeners.has(e) || this.listeners.set(e, new Set);
                    let a = this.listeners.get(e);
                    return a.add(t), s.vF.trace('Subscribed to event "'.concat(e, '"'), {
                        listenersCount: a.size
                    }), () => {
                        let a = this.listeners.get(e);
                        a && (a.delete(t), s.vF.trace('Unsubscribed from event "'.concat(e, '"'), {
                            remainingListeners: a.size
                        }), 0 === a.size && (this.listeners.delete(e), s.vF.trace('Removed event "'.concat(e, '" as it has no more listeners'))))
                    }
                }
                sendMessage(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    try {
                        var r;
                        let l = {
                            event: e,
                            data: t,
                            timestamp: Date.now()
                        };
                        if (s.vF.trace('send message to channel "'.concat(e, '"'), {
                                data: t,
                                triggerLocal: a
                            }), null == (r = this.channel) || r.postMessage(l), a) {
                            let a = this.listeners.get(e);
                            a && a.size > 0 && (s.vF.trace("Triggering ".concat(a.size, ' local listeners for event "').concat(e, '"'), {
                                data: t
                            }), a.forEach(e => {
                                e(t)
                            }))
                        }
                    } catch (t) {
                        s.vF.error("Error send message to channel (".concat(e, "):"), t)
                    }
                }
                handleMessage(e) {
                    try {
                        let {
                            event: t,
                            data: a
                        } = e.data;
                        s.vF.trace('Received message from another tab for event "'.concat(t, '"'), {
                            data: a
                        });
                        let r = this.listeners.get(t);
                        r && r.size > 0 && (s.vF.trace("Notifying ".concat(r.size, ' listeners for event "').concat(t, '"'), {
                            data: a
                        }), r.forEach(e => {
                            e(a)
                        }))
                    } catch (e) {
                        s.vF.error("Error handling broadcast message:", e)
                    }
                }
                cleanup() {
                    try {
                        this.channel && (s.vF.trace("Closing broadcast channel"), this.channel.close(), this.channel = null), this.listeners.clear(), s.vF.trace("Cleared all listeners")
                    } catch (e) {
                        s.vF.error("Error during cleanup:", e)
                    }
                }
                constructor(e) {
                    this.channel = null, this.listeners = new Map;
                    try {
                        this.channel = new BroadcastChannel(e || "global_broadcast"), this.channel.onmessage = this.handleMessage.bind(this)
                    } catch (e) {
                        s.vF.error("Failed to initialize BroadcastChannel:", e)
                    }
                }
            }
            let l = new r
        },
        90239: (e, t, a) => {
            "use strict";
            a.d(t, {
                I: () => r
            });
            var s = a(12115);
            let r = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 480,
                    [a, r] = (0, s.useState)(e);
                return (0, s.useEffect)(() => {
                    let e = () => {
                        r(window.innerWidth <= t)
                    };
                    if (e(), "undefined" == typeof ResizeObserver) return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }; {
                        let t = new ResizeObserver(() => {
                            e()
                        });
                        return t.observe(document.body), () => {
                            t.disconnect()
                        }
                    }
                }, [t]), a
            }
        },
        96057: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => _
            });
            var s = a(95155),
                r = a(25427),
                l = a(35695),
                n = a(12115),
                c = a(36845),
                i = a(45362),
                o = a(13960),
                d = a(4821),
                u = a(62128),
                p = a(48436),
                x = a(26846);
            let h = (0, n.forwardRef)((e, t) => {
                let {
                    isExpanded: a,
                    onToggle: l
                } = e, c = (0, n.useRef)(null);
                return (0, n.useImperativeHandle)(t, () => ({
                    scrollToDataSection: () => {
                        if (c.current) {
                            c.current.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });
                            try {
                                let e = window.getSelection(),
                                    t = document.createRange();
                                t.selectNodeContents(c.current), null == e || e.removeAllRanges(), null == e || e.addRange(t), setTimeout(() => {
                                    null == e || e.removeAllRanges()
                                }, 2e3)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                    }
                })), (0, s.jsx)("div", {
                    className: "rounded-xl border border-black/[0.06]",
                    children: (0, s.jsxs)("div", {
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-start justify-between p-4 hover:cursor-pointer",
                            onClick: l,
                            children: [(0, s.jsx)("h3", {
                                className: "text-[14px] font-bold",
                                children: "What's YouWare Backend?"
                            }), (0, s.jsx)("button", {
                                className: "flex h-4 items-center justify-center",
                                "aria-label": a ? "收起" : "展开",
                                children: (0, s.jsx)(r.O9s, {
                                    className: (0, x.cn)("h-4 w-4 transition-transform duration-200", a ? "rotate-180" : "")
                                })
                            })]
                        }), a && (0, s.jsxs)("div", {
                            className: "space-y-4 px-4 pb-4",
                            children: [(0, s.jsx)("p", {
                                className: "text-[12px] leading-[1.4]",
                                children: "Make your websites come alive! Instead of just showing static pages, your visitors can now interact, vote, comment, and see real-time updates. It's like turning a poster into a living, breathing app."
                            }), (0, s.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, s.jsx)("h4", {
                                    className: "text-[12px] font-bold",
                                    children: "What it gives you:"
                                }), (0, s.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, s.jsx)("div", {
                                        className: "text-[12px] leading-[1.4]",
                                        children: (0, s.jsxs)("ul", {
                                            className: "list-none space-y-0",
                                            children: [(0, s.jsxs)("li", {
                                                className: "relative pl-4",
                                                children: [(0, s.jsx)("span", {
                                                    className: "absolute top-0 left-0",
                                                    children: "•"
                                                }), (0, s.jsx)("span", {
                                                    className: "font-bold",
                                                    children: "Database - "
                                                }), (0, s.jsx)("span", {
                                                    children: "Remember votes, comments, scores - nothing gets lost when people refresh the page"
                                                })]
                                            }), (0, s.jsxs)("li", {
                                                className: "relative pl-8",
                                                children: [(0, s.jsx)("span", {
                                                    className: "absolute top-0 left-4",
                                                    children: "•"
                                                }), (0, s.jsx)("span", {
                                                    children: "Examples: Store poll votes, save game scores, keep user comments"
                                                })]
                                            })]
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "text-[12px] leading-[1.4]",
                                        children: (0, s.jsxs)("ul", {
                                            className: "list-none space-y-0",
                                            children: [(0, s.jsxs)("li", {
                                                className: "relative pl-4",
                                                children: [(0, s.jsx)("span", {
                                                    className: "absolute top-0 left-0",
                                                    children: "•"
                                                }), (0, s.jsx)("span", {
                                                    className: "font-bold",
                                                    children: "Edge Functions - "
                                                }), (0, s.jsx)("span", {
                                                    children: "Your site can automatically count votes, update rankings, send notifications"
                                                })]
                                            }), (0, s.jsxs)("li", {
                                                className: "relative pl-8",
                                                children: [(0, s.jsx)("span", {
                                                    className: "absolute top-0 left-4",
                                                    children: "•"
                                                }), (0, s.jsx)("span", {
                                                    children: "Examples: Auto-calculate poll results, update leaderboards, trigger alerts"
                                                })]
                                            })]
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "text-[12px] leading-[1.4]",
                                        children: (0, s.jsxs)("ul", {
                                            className: "list-none space-y-0",
                                            children: [(0, s.jsxs)("li", {
                                                className: "relative pl-4",
                                                children: [(0, s.jsx)("span", {
                                                    className: "absolute top-0 left-0",
                                                    children: "•"
                                                }), (0, s.jsx)("span", {
                                                    className: "font-bold",
                                                    children: "Built-in Auth - "
                                                }), (0, s.jsx)("span", {
                                                    children: 'Show actual YouWare user names and photos instead of "Anonymous User"'
                                                })]
                                            }), (0, s.jsxs)("li", {
                                                className: "relative pl-8",
                                                children: [(0, s.jsx)("span", {
                                                    className: "absolute top-0 left-4",
                                                    children: "•"
                                                }), (0, s.jsx)("span", {
                                                    children: "Examples: Display real profiles in comments, show player names on scoreboards, personalize experiences"
                                                })]
                                            })]
                                        })
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                ref: c,
                                className: "space-y-2",
                                children: [(0, s.jsx)("h4", {
                                    className: "text-[12px] font-bold",
                                    children: "Important: Don't lose your data"
                                }), (0, s.jsx)("p", {
                                    className: "text-[12px] leading-[1.4]",
                                    children: "If you cancel your subscription or pause your backend projects, your website stays online and all code remains safe. However, backend functions stop working immediately and all data will be permanently deleted after 7 days. Make sure to download your data within this period if you need it!"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "space-y-2",
                                children: [(0, s.jsx)("h4", {
                                    className: "text-[12px] font-bold",
                                    children: "Important: Privacy Protection"
                                }), (0, s.jsx)("p", {
                                    className: "text-[12px] leading-[1.4]",
                                    children: "Feel free to build with confidence using YouWare Backend! To protect your data privacy and security, we ensure that projects using YouWare Backend cannot be remixed by other users. Only the frontend code can be remixed - your backend functions and database remain completely private and secure. We've got your data security covered!"
                                })]
                            })]
                        })]
                    })
                })
            });
            h.displayName = "BackendInfo";
            let b = {
                    pause: "Project paused. Data will be deleted in 7 days.",
                    run: "Project is now running."
                },
                f = {
                    pause: "Failed to pause project. Please try again.",
                    run: "Failed to run project. Please try again.",
                    run_out_of_quota: "Cannot run project - backend usage exceeded. Upgrade or pause other projects.",
                    run_project_deleted: "Cannot run project - the project has been deleted"
                };
            a(34321);
            let m = {
                    pause: "deactivate",
                    run: "activate"
                },
                v = e => {
                    let {
                        color: t
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, x.cn)("h-1 w-1 shrink-0 rounded-full", t)
                    })
                },
                j = e => {
                    let {
                        action: t,
                        loading: a = !1,
                        onClick: l
                    } = e;
                    return (0, s.jsx)("button", {
                        onClick: l,
                        disabled: a,
                        className: "flex h-[22px] w-[60px] items-center justify-center rounded-md bg-black/6 px-3 py-1 text-[12px] text-black/65 transition-colors hover:cursor-pointer hover:bg-black/10 disabled:opacity-50",
                        children: a ? (0, s.jsx)(r.xNY, {
                            className: "h-3 w-3 animate-spin"
                        }) : (0, s.jsx)("span", {
                            children: (() => {
                                switch (t) {
                                    case "pause":
                                        return "Pause";
                                    case "run":
                                        return "Run";
                                    case "export":
                                        return "Export";
                                    default:
                                        return t
                                }
                            })()
                        })
                    })
                },
                g = e => {
                    let {
                        project: t,
                        showDeadline: a = !1,
                        actionStates: r,
                        onActionClick: l,
                        onProjectClick: n,
                        onExportClick: c
                    } = e, o = t.status === i.e.ACTIVATED ? "bg-[#6E9D4C]" : "bg-[#D42727]", d = t.status === i.e.ACTIVATED ? ["pause"] : ["run"], u = (t.status, ["export"]), p = (e => {
                        if (e.status === i.e.DEACTIVATED && e.deactivate_time) {
                            let t = new Date(new Date(e.deactivate_time).getTime() + 6048e5);
                            return "".concat(t.getMonth() + 1, "/").concat(t.getDate())
                        }
                        return "-"
                    })(t), x = r[t.project.uuid] || {};
                    return (0, s.jsxs)("div", {
                        className: "backend-table-gap flex h-9 items-center border-b border-black/3 py-2.5 pr-2 pl-3 last:border-b-0",
                        children: [(0, s.jsxs)("div", {
                            className: "flex min-w-0 flex-1 items-center gap-1.5",
                            children: [(0, s.jsx)(v, {
                                color: o
                            }), (0, s.jsx)("div", {
                                className: "cursor-pointer truncate text-[12px]",
                                onClick: () => n(t.project.uuid),
                                children: t.project.name
                            })]
                        }), a && (0, s.jsx)("div", {
                            className: "backend-table-cell shrink-0 text-[12px]",
                            children: p
                        }), (0, s.jsx)("div", {
                            className: "backend-table-cell shrink-0 text-[12px]",
                            children: t.status === i.e.ACTIVATED ? "Running" : "Paused"
                        }), (0, s.jsx)("div", {
                            className: "backend-table-cell flex shrink-0 gap-1",
                            children: d.map((e, a) => (0, s.jsx)(j, {
                                action: e,
                                loading: x[e],
                                onClick: () => l(t.project.uuid, e)
                            }, a))
                        }), (0, s.jsx)("div", {
                            className: "flex w-[60px] shrink-0",
                            children: u.map((e, a) => (0, s.jsx)(j, {
                                action: e,
                                loading: x[e],
                                onClick: () => c(t.project.uuid)
                            }, a))
                        })]
                    })
                },
                y = e => {
                    let {
                        showDeadline: t = !1
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: "backend-table-gap thin-scrollbar flex h-9 items-center overflow-y-scroll border-b border-black/6 bg-black/3 py-2.5 pr-2 pl-3",
                        children: [(0, s.jsx)("div", {
                            className: "min-w-0 flex-1 truncate text-[12px] text-black/45",
                            children: "Project name"
                        }), t && (0, s.jsx)("div", {
                            className: "backend-table-cell shrink-0 text-[12px] text-black/45",
                            children: "Deadline"
                        }), (0, s.jsx)("div", {
                            className: "backend-table-cell shrink-0 text-[12px] text-black/45",
                            children: "Status"
                        }), (0, s.jsx)("div", {
                            className: "backend-table-cell shrink-0 text-[12px] text-black/45",
                            children: "Service"
                        }), (0, s.jsx)("div", {
                            className: "w-[60px] shrink-0 text-[12px] text-black/45",
                            children: "Data"
                        })]
                    })
                },
                k = e => {
                    let {
                        status: t
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: "backend-table-gap flex h-9 items-center border-b border-black/3 py-2.5 pr-2 pl-3 last:border-b-0",
                        children: [(0, s.jsxs)("div", {
                            className: "flex min-w-0 flex-1 items-center gap-1.5",
                            children: [(0, s.jsx)("div", {
                                className: "h-1 w-1 shrink-0 rounded-full border border-black/30"
                            }), (0, s.jsx)("div", {
                                className: "truncate text-[12px] text-black/30",
                                children: "No project available"
                            })]
                        }), t === i.e.DEACTIVATED && (0, s.jsx)("div", {
                            className: "backend-table-cell shrink-0 text-[14px] text-black/30",
                            children: "-"
                        }), (0, s.jsx)("div", {
                            className: "backend-table-cell shrink-0 text-[14px] text-black/30",
                            children: "-"
                        }), (0, s.jsx)("div", {
                            className: "backend-table-cell shrink-0 text-[14px] text-black/30",
                            children: "-"
                        }), (0, s.jsx)("div", {
                            className: "w-[60px] shrink-0 text-[14px] text-black/30",
                            children: "-"
                        })]
                    })
                },
                w = () => (0, s.jsxs)("div", {
                    className: "flex h-9 items-center justify-center gap-1 border-b border-black/3 px-3 py-2.5 text-black/45 last:border-b-0",
                    children: [(0, s.jsx)(r.xNY, {
                        className: "h-3 w-3 animate-spin"
                    }), (0, s.jsx)("div", {
                        className: "text-[12px]",
                        children: "Loading..."
                    })]
                }),
                N = e => {
                    let {
                        onRetry: t
                    } = e;
                    return (0, s.jsx)("div", {
                        className: "flex h-9 items-center justify-center gap-6 border-b border-black/3 px-3 py-2.5 last:border-b-0",
                        children: (0, s.jsxs)("button", {
                            onClick: t,
                            className: "flex items-center gap-1 text-[12px] text-black/45 hover:cursor-pointer",
                            children: [(0, s.jsx)("span", {
                                children: "Network error, please retry"
                            }), (0, s.jsx)(r.Ll9, {
                                className: "ml-1 h-3 w-3"
                            })]
                        })
                    })
                };

            function _(e) {
                let {
                    onClose: t,
                    enterFrom: a
                } = e, {
                    usage: x,
                    fetchUsage: v,
                    fetchActiveProjects: j,
                    fetchPausedProjects: _,
                    executeAction: C,
                    downloadDatabase: E
                } = (0, i.O)(), [S, A] = (0, n.useState)([]), [R, D] = (0, n.useState)([]), [T, I] = (0, n.useState)(""), [P, F] = (0, n.useState)(""), [M, L] = (0, n.useState)(!1), [B, U] = (0, n.useState)(!1), [z, V] = (0, n.useState)(!1), [O, Y] = (0, n.useState)(!1), [W, Q] = (0, n.useState)(!0), [H, q] = (0, n.useState)(!0), [X, G] = (0, n.useState)(!1), [K, $] = (0, n.useState)(!1), [J, Z] = (0, n.useState)({}), [ee, et] = (0, n.useState)(!1), ea = (0, n.useRef)(null), {
                    subscriptionInfo: es
                } = (0, o.R)(), er = null == es ? void 0 : es.is_vip, el = (0, n.useRef)(null), en = (0, n.useRef)(null), ec = (0, l.useRouter)();
                (0, n.useEffect)(() => {
                    ei()
                }, [es]), (0, n.useEffect)(() => {
                    0 === x.active && et(!0)
                }, []);
                let ei = () => {
                        v(), eo(), ed()
                    },
                    eo = async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        try {
                            e || Q(!0);
                            let t = await j();
                            t ? (A(t.records), I(t.page_info.next_cursor || ""), L(t.page_info.has_more), G(!1)) : G(!0)
                        } catch (e) {
                            G(!0)
                        } finally {
                            e || Q(!1)
                        }
                    },
                    ed = async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        try {
                            e || q(!0);
                            let t = await _();
                            t ? (D(t.records), F(t.page_info.next_cursor || ""), U(t.page_info.has_more), $(!1)) : $(!0)
                        } catch (e) {
                            $(!0)
                        } finally {
                            e || q(!1)
                        }
                    },
                    eu = (0, n.useCallback)(async () => {
                        if (!M || z || !T) return;
                        V(!0);
                        let e = await j(T);
                        e && (A(t => [...t, ...e.records]), I(e.page_info.next_cursor || ""), L(e.page_info.has_more)), V(!1)
                    }, [M, z, T, j]),
                    ep = (0, n.useCallback)(async () => {
                        if (!B || O || !P) return;
                        Y(!0);
                        let e = await _(P);
                        e && (D(t => [...t, ...e.records]), F(e.page_info.next_cursor || ""), U(e.page_info.has_more)), Y(!1)
                    }, [B, O, P, _]),
                    ex = (0, n.useCallback)((e, t) => {
                        let a = e.current;
                        if (!a) return;
                        let {
                            scrollTop: s,
                            scrollHeight: r,
                            clientHeight: l
                        } = a;
                        r - s - l < 100 && t()
                    }, []),
                    eh = (0, n.useCallback)(async e => {
                        Z(t => ({ ...t,
                            [e]: { ...t[e],
                                export: !0
                            }
                        }));
                        try {
                            await E(e, "pop_up_backend")
                        } finally {
                            Z(t => ({ ...t,
                                [e]: { ...t[e],
                                    export: !1
                                }
                            }))
                        }
                    }, [E]),
                    eb = (0, n.useCallback)(async (e, t) => {
                        Z(a => ({ ...a,
                            [e]: { ...a[e],
                                [t]: !0
                            }
                        }));
                        try {
                            let a = await C(e, m[t]);
                            if ((null == a ? void 0 : a.code) === 0)(0, p.P)({
                                message: b[t],
                                type: "success"
                            }), "pause" === t ? (A(t => t.filter(t => t.project.uuid !== e)), ed(!0)) : "run" === t && (D(t => t.filter(t => t.project.uuid !== e)), eo(!0));
                            else {
                                let e = f[t];
                                (null == a ? void 0 : a.code) === 40305 && "run" === t && (e = f.run_out_of_quota), (null == a ? void 0 : a.code) === 40306 && "run" === t && (e = f.run_project_deleted), (0, p.P)({
                                    message: e,
                                    type: "error"
                                })
                            }
                        } catch (e) {
                            u.Ay.error("Failed to execute ".concat(t, ":"), e), (0, p.P)({
                                message: f[t],
                                type: "error"
                            })
                        } finally {
                            Z(a => ({ ...a,
                                [e]: { ...a[e],
                                    [t]: !1
                                }
                            }))
                        }
                    }, [C, eo, ed]),
                    ef = (0, n.useCallback)(async (e, t) => {
                        "pause" === t ? (0, d.S)({
                            title: "Pause Backend Service",
                            description: "Backend will stop immediately. You have 7 days to restart or data will be permanently deleted.",
                            cancelText: "Cancel",
                            confirmText: "Pause",
                            onCancel: () => {},
                            onConfirm: () => {
                                eb(e, t)
                            }
                        }) : eb(e, t)
                    }, [eb]),
                    em = (0, n.useCallback)(e => {
                        window.open("/editor/".concat(e, "?enter_from=backend_modal"), "_blank")
                    }, []),
                    ev = (0, n.useCallback)(async () => {
                        Q(!0), G(!1);
                        try {
                            let e = await j();
                            e ? (A(e.records), I(e.page_info.next_cursor || ""), L(e.page_info.has_more)) : G(!0)
                        } catch (e) {
                            G(!0)
                        } finally {
                            Q(!1)
                        }
                    }, [j]),
                    ej = (0, n.useCallback)(async () => {
                        q(!0), $(!1);
                        try {
                            let e = await _();
                            e ? (D(e.records), F(e.page_info.next_cursor || ""), U(e.page_info.has_more)) : $(!0)
                        } catch (e) {
                            $(!0)
                        } finally {
                            q(!1)
                        }
                    }, [_]);
                (0, n.useEffect)(() => {
                    let e = el.current,
                        t = en.current,
                        a = () => ex(el, eu),
                        s = () => ex(en, ep);
                    return e && e.addEventListener("scroll", a), t && t.addEventListener("scroll", s), () => {
                        e && e.removeEventListener("scroll", a), t && t.removeEventListener("scroll", s)
                    }
                }, [ex, eu, ep]);
                let eg = (0, n.useCallback)(() => {
                        a === c.Y.SUBSCRIPTION_PAGE || ec.push("/subscription?location=pop_up_backend"), null == t || t()
                    }, [t]),
                    ey = (0, n.useCallback)(() => {
                        ee || et(!0), setTimeout(() => {
                            var e;
                            null == (e = ea.current) || e.scrollToDataSection()
                        }, 200)
                    }, [ee]);
                return (0, s.jsxs)("div", {
                    className: "mt-2 mb-5 flex flex-col gap-3",
                    children: [(0, s.jsxs)("div", {
                        className: "flex h-12 items-center gap-2 rounded-xl border border-black/6 bg-black/3 py-2 pr-2 pl-3",
                        children: [(0, s.jsx)("img", {
                            src: "/icons/backend_fill_icon.svg",
                            alt: "pro",
                            className: "h-5 w-5"
                        }), (0, s.jsx)("div", {
                            className: "flex-1 text-[16px] font-bold text-black/95",
                            children: "".concat((null == x ? void 0 : x.active) || "0", "/").concat((null == x ? void 0 : x.total) || "0", " Backend Project")
                        }), (0, s.jsx)("button", {
                            onClick: eg,
                            className: "bg-brand hover:bg-brand/90 flex h-8 items-center justify-center rounded-[10px] px-2.5 py-2 text-[14px] text-white transition-colors hover:cursor-pointer",
                            children: er ? "View plans" : "Upgrade"
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col gap-5",
                        children: [(0, s.jsxs)("div", {
                            className: "overflow-hidden rounded-xl border border-black/6",
                            children: [(0, s.jsx)(y, {}), (0, s.jsx)("div", {
                                ref: el,
                                className: "thin-scrollbar max-h-[200px] overflow-y-auto",
                                children: W ? (0, s.jsx)(w, {}) : X ? (0, s.jsx)(N, {
                                    onRetry: ev
                                }) : 0 === S.length ? (0, s.jsx)(k, {
                                    status: i.e.ACTIVATED
                                }) : (0, s.jsxs)(s.Fragment, {
                                    children: [S.map(e => (0, s.jsx)(g, {
                                        project: e,
                                        actionStates: J,
                                        onActionClick: ef,
                                        onProjectClick: em,
                                        onExportClick: eh
                                    }, e.project.uuid)), z && M && (0, s.jsx)("div", {
                                        className: "flex items-center justify-center py-4",
                                        children: (0, s.jsx)("div", {
                                            className: "text-[12px] text-black/45",
                                            children: "Loading more..."
                                        })
                                    })]
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col gap-2",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [(0, s.jsx)("div", {
                                        className: "text-[14px] font-bold text-black/95",
                                        children: "Paused projects"
                                    }), (0, s.jsx)("button", {
                                        onClick: ey,
                                        className: "flex h-3.5 w-3.5 items-center justify-center transition-colors hover:opacity-70",
                                        "aria-label": "查看暂停项目相关信息",
                                        children: (0, s.jsx)(r.Kt4, {
                                            className: "h-3.5 w-3.5 text-black/65"
                                        })
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "text-[12px] text-black/45",
                                    children: "Backend services will be permanently deleted after deadline (including data)."
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "overflow-hidden rounded-xl border border-black/6",
                                children: [(0, s.jsx)(y, {
                                    showDeadline: !0
                                }), (0, s.jsx)("div", {
                                    ref: en,
                                    className: "thin-scrollbar max-h-[200px] overflow-y-auto",
                                    children: H ? (0, s.jsx)(w, {}) : K ? (0, s.jsx)(N, {
                                        onRetry: ej
                                    }) : 0 === R.length ? (0, s.jsx)(k, {
                                        status: i.e.DEACTIVATED
                                    }) : (0, s.jsxs)(s.Fragment, {
                                        children: [R.map(e => (0, s.jsx)(g, {
                                            project: e,
                                            showDeadline: !0,
                                            actionStates: J,
                                            onActionClick: ef,
                                            onProjectClick: em,
                                            onExportClick: eh
                                        }, e.project.uuid)), O && B && (0, s.jsx)("div", {
                                            className: "flex items-center justify-center py-4",
                                            children: (0, s.jsx)("div", {
                                                className: "text-[12px] text-black/45",
                                                children: "Loading more..."
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })]
                    }), (0, s.jsx)(h, {
                        ref: ea,
                        isExpanded: ee,
                        onToggle: () => et(!ee)
                    })]
                })
            }
        }
    }
]);