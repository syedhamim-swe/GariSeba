try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f545bd8e-ec3e-4f1d-8eb6-68d41d1376d0", e._sentryDebugIdIdentifier = "sentry-dbid-f545bd8e-ec3e-4f1d-8eb6-68d41d1376d0")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6278], {
        1021: (e, t, s) => {
            s.d(t, {
                A: () => o
            });
            var r, l, a = s(95155),
                n = s(12115);
            null == (l = globalThis || window) || null == (r = l.requestIdleCallback) || r.call(l, () => s.e(9066).then(s.t.bind(s, 48834, 23)));
            let o = e => {
                let {
                    animationPath: t,
                    animationData: r,
                    className: l = "",
                    style: o,
                    renderer: c = "svg",
                    loop: i = !0,
                    autoplay: d = !0,
                    errorComponent: u,
                    loadingComponent: x,
                    onError: p,
                    onLoad: m
                } = e, h = (0, n.useRef)(null), [f, g] = (0, n.useState)(null), [b, j] = (0, n.useState)(!0);
                return ((0, n.useEffect)(() => {
                    let e = null,
                        l = !0;
                    return (async () => {
                        try {
                            g(null), j(!0);
                            let a = (await s.e(9066).then(s.t.bind(s, 48834, 23))).default;
                            if (!l || !h.current) return;
                            (e = a.loadAnimation({
                                container: h.current,
                                renderer: c,
                                loop: i,
                                autoplay: d,
                                path: t,
                                ...r && {
                                    animationData: r
                                }
                            })).addEventListener("DOMLoaded", () => {
                                l && (j(!1), null == m || m())
                            }), e.addEventListener("error", () => {
                                l && (g("Lottie loading error"), j(!1), null == p || p("Lottie loading error"))
                            })
                        } catch (e) {
                            l && (g("Lottie loading error"), j(!1), null == p || p("Lottie loading error"))
                        }
                    })(), () => {
                        l = !1, e && e.destroy()
                    }
                }, [t, i, d, c]), f && u) ? u : b && x ? x : (0, a.jsx)("div", {
                    ref: h,
                    className: l,
                    style: o
                })
            }
        },
        19496: (e, t, s) => {
            s.d(t, {
                W: () => i,
                Y: () => d
            });
            var r = s(30832),
                l = s.n(r),
                a = s(96004),
                n = s.n(a),
                o = s(617),
                c = s.n(o);

            function i(e) {
                let t = l()(e);
                return t.isToday() ? t.format("HH:mm") : t.format("M/D")
            }

            function d(e, t) {
                return e ? new Date(1e3 * e).toLocaleDateString("en-US", t || {
                    month: "short",
                    day: "numeric"
                }) : ""
            }
            l().extend(n()), l().extend(c())
        },
        32770: (e, t, s) => {
            s.d(t, {
                A: () => c
            });
            var r = s(95155),
                l = s(25427);
            s(12115);
            var a = s(46102),
                n = s(26846);

            function o(e) {
                let {
                    className: t,
                    size: s,
                    background: l,
                    icon: o,
                    tooltip: c = "",
                    tooltipSide: i = "left"
                } = e;
                return (0, r.jsxs)(a.m_, {
                    children: [(0, r.jsx)(a.k$, {
                        asChild: !0,
                        children: (0, r.jsx)("div", {
                            className: (0, n.cn)("box-content flex cursor-pointer items-center justify-center rounded-full border-white", "32" === s ? "h-8 w-8 border-2" : "20" === s ? "h-5 w-5 border-2" : "h-3 w-3 border-1", t),
                            style: {
                                background: l
                            },
                            children: (0, r.jsx)(o, {
                                size: "32" === s ? 20 : "20" === s ? 14 : 8
                            })
                        })
                    }), (0, r.jsx)(a.ZI, {
                        side: i,
                        children: c
                    })]
                })
            }

            function c(e) {
                let {
                    className: t,
                    userBadge: s,
                    size: a = "12",
                    tooltipSide: c = "left"
                } = e;
                return s ? "FoundingCreator" === s ? (0, r.jsx)(o, {
                    className: (0, n.cn)("text-white", t),
                    size: a,
                    background: "linear-gradient(94deg, #B9BEC8 0%, #959AA4 100%)",
                    icon: l.uz8,
                    tooltip: "Founding Creator",
                    tooltipSide: c
                }) : "Team" === s ? (0, r.jsx)(o, {
                    className: (0, n.cn)("text-brand", t),
                    size: a,
                    background: "linear-gradient(94deg, #E3E3DD 0%, #C6C8B8 100%)",
                    icon: l.A_B,
                    tooltip: "Team",
                    tooltipSide: c
                }) : "Founder" === s ? (0, r.jsx)(o, {
                    className: (0, n.cn)("text-white", t),
                    size: a,
                    background: "linear-gradient(94deg, #C7AB73 0%, #B9A375 100%)",
                    icon: l.A_B,
                    tooltip: "Founder",
                    tooltipSide: c
                }) : null : null
            }
        },
        44671: (e, t, s) => {
            s.d(t, {
                A: () => c,
                D: () => o
            });
            var r = s(95155),
                l = s(6874),
                a = s.n(l),
                n = s(26846);
            let o = e => {
                    let {
                        className: t,
                        hideName: s = !1,
                        onClickLogo: l
                    } = e;
                    return (0, r.jsx)(a(), {
                        href: "/",
                        onClick: l,
                        children: (0, r.jsxs)("div", {
                            className: (0, n.cn)("flex items-center gap-2", t),
                            children: [(0, r.jsx)("img", {
                                src: "/icons/logo.svg",
                                alt: "YouWare Logo",
                                className: "text-brand h-6 w-6"
                            }), !s && (0, r.jsx)("div", {
                                className: "mt-[3px] text-base text-black/95 max-[400px]:hidden lg:text-xl xl:text-[20px]",
                                children: "YouWare"
                            })]
                        })
                    })
                },
                c = o
        },
        46102: (e, t, s) => {
            s.d(t, {
                ZI: () => i,
                k$: () => c,
                m_: () => o
            });
            var r = s(95155),
                l = s(83921);
            s(12115);
            var a = s(26846);

            function n(e) {
                let {
                    delayDuration: t = 0,
                    ...s
                } = e;
                return (0, r.jsx)(l.Kq, {
                    "data-slot": "tooltip-provider",
                    delayDuration: t,
                    ...s
                })
            }

            function o(e) {
                let { ...t
                } = e;
                return (0, r.jsx)(n, {
                    delayDuration: 700,
                    children: (0, r.jsx)(l.bL, {
                        "data-slot": "tooltip",
                        ...t
                    })
                })
            }

            function c(e) {
                let { ...t
                } = e;
                return (0, r.jsx)(l.l9, {
                    "data-slot": "tooltip-trigger",
                    ...t
                })
            }

            function i(e) {
                let {
                    className: t,
                    sideOffset: s = 0,
                    children: n,
                    arrowColor: o = "#2C2C2C",
                    ...c
                } = e;
                return (0, r.jsx)(l.ZL, {
                    children: (0, r.jsxs)(l.UC, {
                        "data-slot": "tooltip-content",
                        sideOffset: s,
                        className: (0, a.cn)("animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-bg-tooltip z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-[6px] px-[6px] py-[5px] text-xs text-balance text-white", t),
                        ...c,
                        children: [n, (0, r.jsx)(l.i3, {
                            className: "z-50 h-1 w-3",
                            asChild: !0,
                            children: (0, r.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "12",
                                height: "4",
                                viewBox: "0 0 12 4",
                                fill: "currentColor",
                                children: (0, r.jsx)("path", {
                                    d: "M3.91421 1.41421L5.83005 3.33005C6.20005 3.70005 6.79995 3.70005 7.16995 3.33005L9.08579 1.41421C9.99129 0.508708 11.2194 0 12.5 0L6.5 0L0.5 0C1.78058 0 3.00871 0.508707 3.91421 1.41421Z",
                                    fill: o
                                })
                            })
                        })]
                    })
                })
            }
        },
        57798: (e, t, s) => {
            s.d(t, {
                I: () => m
            });
            var r = s(95155),
                l = s(25427),
                a = s(35695),
                n = s(12115),
                o = s(46102),
                c = s(34477);
            let i = (0, c.createServerReference)("40bd5072ed66261eb7cc364b4d7635472760c4a287", c.callServer, void 0, c.findSourceMapURL, "fetchCreditUsage");
            var d = s(1021),
                u = s(56389),
                x = s(19496),
                p = s(26846);

            function m(e) {
                let {
                    subscription: t,
                    position: s,
                    onClose: c
                } = e, m = (0, a.usePathname)(), [h, f] = (0, n.useState)([]), [g, b] = (0, n.useState)(!1), [j, v] = (0, n.useState)(""), [w, y] = (0, n.useState)(!1), k = (0, n.useRef)(null), {
                    track: N
                } = (0, u.s)(), _ = (0, a.useRouter)();
                (0, n.useEffect)(() => {
                    N("credits_usage_pop_up_show", {
                        enter_from: s,
                        credits_num: (null == t ? void 0 : t.total_credits) || 0
                    })
                }, [s, t]), (0, n.useEffect)(() => {
                    C()
                }, []);
                let C = (0, n.useCallback)(async () => {
                        if (!g) {
                            b(!0);
                            try {
                                let s = await i({
                                    limit: 20,
                                    cursor: j
                                });
                                if (0 === s.code && s.data) {
                                    var e, t;
                                    console.log("========= response.data", s.data);
                                    let r = s.data.records || [];
                                    f(e => [...e, ...r]), v((null == (e = s.data.page_info) ? void 0 : e.next_cursor) || ""), y((null == (t = s.data.page_info) ? void 0 : t.has_more) || !1)
                                }
                            } catch (e) {
                                console.error("Failed to load credit usage:", e)
                            } finally {
                                b(!1)
                            }
                        }
                    }, [g, j]),
                    S = (0, n.useCallback)(() => {
                        h.length > 0 && w && !g && j && C()
                    }, [h.length, w, g, j]),
                    E = (0, n.useCallback)(() => {
                        let e = k.current;
                        if (!e) return;
                        let {
                            scrollTop: t,
                            scrollHeight: s,
                            clientHeight: r
                        } = e;
                        s - t - r < 100 && S()
                    }, [S]);
                return (0, n.useEffect)(() => {
                    let e = k.current;
                    if (e) return e.addEventListener("scroll", E), () => e.removeEventListener("scroll", E)
                }, [E]), (0, r.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/12",
                    children: (0, r.jsxs)("div", {
                        className: "relative flex h-[600px] w-full max-w-[640px] flex-col rounded-[16px] border border-black/3 bg-white p-5 pb-0 shadow-[0px_16px_32px_-1px_rgba(0,0,0,0.1)]",
                        children: [(0, r.jsxs)("div", {
                            className: "flex flex-shrink-0 items-start justify-center gap-2",
                            children: [(0, r.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, r.jsx)("h2", {
                                    className: "text-[20px] font-bold",
                                    children: "Credits usage"
                                }), (0, r.jsx)("div", {
                                    className: "text-[12px] text-black/45",
                                    children: "Micro-spends (<1 credit) are not shown."
                                })]
                            }), (0, r.jsx)("button", {
                                onClick: c,
                                className: "flex h-6 w-6 cursor-pointer items-center justify-center rounded-[8px] p-1 transition-colors hover:bg-black/3",
                                children: (0, r.jsx)(l.Qks, {
                                    className: "h-4 w-4"
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "my-3 flex h-12 w-full flex-shrink-0 items-center gap-2 rounded-[10px] border border-black/6 bg-black/3 pr-2 pl-3",
                            children: [(0, r.jsx)(l.IId, {
                                className: "text-brand h-5 w-5"
                            }), (0, r.jsxs)("div", {
                                className: "flex-1 text-[16px] font-bold",
                                children: [((null == t ? void 0 : t.total_credits) || 0).toLocaleString(), " Credits"]
                            }), !m.startsWith("/subscription") && (0, r.jsx)("button", {
                                className: "bg-brand hover:bg-brand/90 flex h-8 cursor-pointer items-center justify-center rounded-[10px] px-[10px] text-[14px] text-white transition-colors",
                                onClick: () => {
                                    N("sub_upgrade_click", {
                                        click_from: "credits_usage"
                                    }), _.push("/subscription?location=pop_up")
                                },
                                children: (null == t ? void 0 : t.is_vip) ? "View plans" : "Upgrade"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "mb-[38px] flex w-full flex-1 flex-col overflow-hidden rounded-[10px] border border-black/6",
                            children: [(0, r.jsxs)("div", {
                                className: "thin-scrollbar flex items-center gap-5 overflow-y-auto border-b border-black/6 bg-[#F7F7F7] px-3 py-2.5 text-[12px] text-black/45",
                                children: [(0, r.jsx)("div", {
                                    className: "w-25",
                                    children: "Date"
                                }), (0, r.jsx)("div", {
                                    className: "flex-1",
                                    children: "Details"
                                }), (0, r.jsx)("div", {
                                    className: "w-25",
                                    children: "Credits change"
                                })]
                            }), (0, r.jsx)("div", {
                                ref: k,
                                className: "thin-scrollbar flex-1 overflow-y-auto",
                                children: 0 === h.length ? (0, r.jsx)("div", {
                                    className: "flex h-96 items-center justify-center text-[12px] text-black/65",
                                    children: g ? (0, r.jsx)(d.A, {
                                        animationPath: "/animations/lottie-task-loading.json",
                                        className: "h-20 w-20"
                                    }) : "No credit usage records found"
                                }) : (0, r.jsxs)(r.Fragment, {
                                    children: [h.map((e, t) => {
                                        var s;
                                        return (0, r.jsxs)("div", {
                                            className: "flex items-center gap-5 border-b border-black/3 px-3 py-2.5 text-[12px]",
                                            children: [(0, r.jsx)("div", {
                                                className: "w-25",
                                                children: (0, x.Y)(e.date_timestamp)
                                            }), (0, r.jsx)("div", {
                                                className: (0, p.cn)("flex-1 truncate", e.project_id || e.project_url ? "cursor-pointer hover:underline" : ""),
                                                onClick: () => {
                                                    (e.project_id || e.project_url) && window.open(e.project_url || "/editor/".concat(e.project_id), "_blank")
                                                },
                                                children: e.description
                                            }), (0, r.jsxs)("div", {
                                                className: "flex w-25 items-center gap-1",
                                                children: [(0, r.jsxs)("span", {
                                                    children: ["consumption" === e.transaction_type ? "-" : "+", e.credit_cost]
                                                }), (null == (s = e.extra_data) ? void 0 : s.help_type) === "engagement" && (0, r.jsxs)(o.m_, {
                                                    children: [(0, r.jsx)(o.k$, {
                                                        asChild: !0,
                                                        children: (0, r.jsx)(l.Kt4, {
                                                            className: "h-3 w-3 flex-shrink-0 cursor-pointer text-black/45 hover:text-black/65"
                                                        })
                                                    }), (0, r.jsx)(o.ZI, {
                                                        side: "top",
                                                        sideOffset: 4,
                                                        children: (0, r.jsx)("div", {
                                                            className: "w-72 p-1.5",
                                                            children: "Daily project engagement reward is earned through views, reactions, saves, remixes, and comments on your projects — designed to reward creativity and genuine engagement. Rewards are calculated based on the previous UTC day. Suspicious or inauthentic activity won't count."
                                                        })
                                                    })]
                                                })]
                                            })]
                                        }, t)
                                    }), g && h.length > 0 && (0, r.jsx)("div", {
                                        className: "flex items-center justify-center py-4",
                                        children: (0, r.jsx)("div", {
                                            className: "text-[12px] text-black/45",
                                            children: "Loading more..."
                                        })
                                    })]
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "absolute bottom-3 left-1/2 -translate-x-1/2",
                            children: (0, r.jsx)("button", {
                                className: "cursor-pointer text-[12px] text-black/65 transition-colors hover:text-black/95 hover:underline",
                                onClick: () => {
                                    window.open("/legal/credits", "_blank")
                                },
                                children: "How credits work"
                            })
                        })]
                    })
                })
            }
        },
        59434: (e, t, s) => {
            s.d(t, {
                em: () => l,
                qn: () => a
            });
            var r = s(98199);
            let l = e => {
                    let t = e;
                    return void 0 === t && (t = window.location.pathname), t.split("/")[1] || "home"
                },
                a = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    try {
                        return new URLSearchParams(window.location.search).get(e) || t
                    } catch (e) {
                        return r.error("getQueryParam error: ".concat(e)), t
                    }
                }
        },
        76278: (e, t, s) => {
            s.d(t, {
                Header: () => z,
                default: () => R
            });
            var r = s(95155),
                l = s(35695),
                a = s(12115),
                n = s(53568),
                o = s(62128),
                c = s(48436);
            let i = e => {
                let {
                    onSuccess: t,
                    onError: s
                } = e, {
                    loginWithGoogleOneTap: r,
                    trackTriggerLogin: l,
                    trackLoginResult: i
                } = (0, n.A)(), d = (0, a.useRef)(!1), u = (0, a.useRef)(0);
                (0, a.useEffect)(() => {
                    if (d.current) return;
                    let e = () => {
                        if (!window.google) return void(u.current < 20 ? (u.current += 1, o.Ay.info("Google One Tap initialization attempt ".concat(u.current, "/").concat(20)), setTimeout(e, 500)) : o.Ay.error("Failed to initialize Google One Tap: Google script not loaded after maximum attempts"));
                        if (!d.current) try {
                            window.google.accounts.id.initialize({
                                client_id: "541265544701-ig5gkv7jg7a6od2rip81vpv99fej0oja.apps.googleusercontent.com",
                                callback: x,
                                auto_select: !1,
                                cancel_on_tap_outside: !1,
                                prompt_parent_id: "google-one-tap-container"
                            }), window.google.accounts.id.prompt(e => {
                                o.Ay.info("Google One Tap prompt callback", {
                                    isNotDisplayed: e.isNotDisplayed(),
                                    isSkippedMoment: e.isSkippedMoment(),
                                    isDismissedMoment: e.isDismissedMoment(),
                                    momentType: e.getMomentType()
                                }), e.isNotDisplayed() ? o.Ay.info("Google One Tap not displayed", {
                                    reason: e.getMomentType()
                                }) : e.isSkippedMoment() ? o.Ay.info("Google One Tap skipped", {
                                    reason: e.getMomentType()
                                }) : e.isDismissedMoment() && o.Ay.info("Google One Tap dismissed", {
                                    reason: e.getMomentType()
                                })
                            }), d.current = !0, o.Ay.info("Google One Tap initialized successfully")
                        } catch (e) {
                            o.Ay.error("Error initializing Google One Tap", e), null == s || s(e)
                        }
                    };
                    return e(), () => {
                        var e, t, s;
                        (null == (s = window.google) || null == (t = s.accounts) || null == (e = t.id) ? void 0 : e.cancel) && window.google.accounts.id.cancel()
                    }
                }, [t, s]);
                let x = async e => {
                    try {
                        o.Ay.info("Google One Tap credential response received"), l("google_one_tap", "home"), await r(e.credential), i("google_one_tap", "success", "home", ""), null == t || t()
                    } catch (e) {
                        o.Ay.error("Google One Tap login error", e), i("google_one_tap", "failed", "home", e.message || "unknown error"), (0, c.P)({
                            message: "login failed, please try again later",
                            type: "error"
                        }), null == s || s(e)
                    }
                };
                return null
            };
            var d = s(25427),
                u = s(66710),
                x = s(56389),
                p = s(59434),
                m = s(26846);
            let h = "yourware_search_history",
                f = () => {
                    let e = () => {
                        try {
                            let e = localStorage.getItem(h);
                            return e ? JSON.parse(e) : []
                        } catch (e) {
                            return []
                        }
                    };
                    return {
                        getHistory: e,
                        addToHistory: t => {
                            if (!t.trim()) return;
                            let s = e(),
                                r = s.findIndex(e => e.query === t); - 1 !== r && s.splice(r, 1), s.unshift({
                                query: t.trim(),
                                timestamp: Date.now()
                            });
                            let l = s.slice(0, 10);
                            try {
                                localStorage.setItem(h, JSON.stringify(l))
                            } catch (e) {}
                        },
                        removeFromHistory: t => {
                            let s = e().filter(e => e.query !== t);
                            localStorage.setItem(h, JSON.stringify(s))
                        }
                    }
                };

            function g(e) {
                let {
                    inputRef: t,
                    onClickHistory: s,
                    onPreviewHistory: l,
                    className: n
                } = e, [o, c] = (0, a.useState)([]), [i, p] = (0, a.useState)(-1), {
                    getHistory: h,
                    removeFromHistory: g
                } = f(), {
                    track: b
                } = (0, x.s)();
                (0, a.useEffect)(() => {
                    c(h()), b("search_history", {
                        action: "show"
                    })
                }, []), (0, a.useEffect)(() => {
                    p(-1)
                }, [o]);
                let j = (0, u.A)(e => {
                    if (0 !== o.length) switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault(), p(e => e < o.length - 1 ? e + 1 : -1);
                            break;
                        case "ArrowUp":
                            e.preventDefault(), p(e => e > 0 ? e - 1 : -1)
                    }
                });
                (0, a.useEffect)(() => {
                    let e = t.current;
                    if (e) return e.addEventListener("keydown", j), () => {
                        e.removeEventListener("keydown", j)
                    }
                }, [t, j]), (0, a.useEffect)(() => {
                    i >= 0 && i < o.length ? l(o[i].query) : -1 === i && l("")
                }, [i, o, l]);
                let v = (0, a.useCallback)(e => {
                        s(e)
                    }, []),
                    w = (0, a.useCallback)(e => {
                        var s;
                        g(e), c(h()), null == (s = t.current) || s.focus(), b("search_history", {
                            action: "delete",
                            query: e
                        })
                    }, []);
                return 0 === o.length ? null : (0, r.jsx)("div", {
                    className: (0, m.cn)("absolute top-full z-10 mt-2.5 w-full rounded-[16px] bg-white p-2 shadow-[0px_16px_32px_-1px_rgba(0,0,0,0.15)]", n),
                    children: (0, r.jsx)("div", {
                        className: "space-y-1",
                        children: o.map((e, t) => (0, r.jsxs)("button", {
                            onClick: () => v(e.query),
                            className: (0, m.cn)("group flex h-8 w-full cursor-pointer items-center gap-2 rounded-[8px] px-2 py-1 hover:bg-black/3", i === t && "bg-black/3"),
                            children: [(0, r.jsx)("div", {
                                className: "size-4",
                                children: (0, r.jsx)(d.uBk, {
                                    className: "size-4"
                                })
                            }), (0, r.jsx)("p", {
                                className: "flex-1 truncate text-left text-[14px]",
                                children: e.query
                            }), (0, r.jsx)("div", {
                                className: "size-4 opacity-0 group-hover:opacity-100",
                                onClick: t => {
                                    t.stopPropagation(), t.preventDefault(), w(e.query)
                                },
                                children: (0, r.jsx)(d.Qks, {
                                    className: "size-4"
                                })
                            })]
                        }, "".concat(e.query, "-").concat(e.timestamp)))
                    })
                })
            }

            function b(e) {
                let {
                    className: t
                } = e, [s, n] = (0, a.useState)(""), [o, c] = (0, a.useState)(""), [i, h] = (0, a.useState)(!1), b = (0, a.useRef)(null), j = (0, a.useRef)(null), {
                    addToHistory: v
                } = f(), {
                    track: w
                } = (0, x.s)(), y = o || s, k = y.length > 0, N = (0, l.useRouter)();
                (0, a.useEffect)(() => {
                    let e = new URLSearchParams(window.location.search).get("q");
                    e && n(e)
                }, []), (0, a.useEffect)(() => {
                    !i && o && n(o)
                }, [i, o]), (0, a.useEffect)(() => {
                    setTimeout(() => {
                        w("search_entrance", {
                            action: "show",
                            location: (0, p.em)()
                        })
                    }, 100)
                }, []), (0, a.useEffect)(() => {
                    i && w("search_entrance", {
                        action: "click",
                        location: (0, p.em)()
                    })
                }, [i]);
                let _ = (0, a.useCallback)(e => {
                        n(e.target.value), c("")
                    }, []),
                    C = (0, a.useCallback)(() => {
                        n(""), c(""), setTimeout(() => {
                            var e;
                            null == (e = b.current) || e.focus()
                        }, 10), w("search_entrance", {
                            action: "delete",
                            location: (0, p.em)()
                        })
                    }, []),
                    S = (0, u.A)(() => {
                        if (y.trim()) {
                            var e;
                            v(y), null == (e = b.current) || e.blur(), h(!1), w("search_confirm", {
                                query: y,
                                location: (0, p.em)(),
                                type: o ? "history" : "direct"
                            });
                            let t = "/results?q=".concat(encodeURIComponent(y));
                            if ("/results" === location.pathname) {
                                let e = (0, p.qn)("enter_from") || "";
                                N.replace(e ? "".concat(t, "&enter_from=").concat(e) : t, {
                                    scroll: !1
                                })
                            } else N.push("".concat(t, "&enter_from=").concat((0, p.em)()))
                        }
                    }),
                    E = (0, u.A)(e => {
                        if ("Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing) {
                            if ("Escape" === e.key) {
                                var t;
                                null == (t = b.current) || t.blur(), h(!1)
                            }
                        } else e.preventDefault(), S()
                    }),
                    A = (0, u.A)(e => {
                        c(e), setTimeout(() => {
                            S()
                        }, 10)
                    }),
                    T = (0, a.useCallback)(e => {
                        c(e)
                    }, []),
                    L = (0, a.useCallback)(() => {
                        h(!0)
                    }, []),
                    D = (0, a.useCallback)(e => {
                        var t;
                        (null == (t = j.current) ? void 0 : t.contains(e.relatedTarget)) || h(!1)
                    }, []);
                return (0, r.jsxs)("div", {
                    ref: j,
                    onFocus: L,
                    onBlur: D,
                    className: (0, m.cn)("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2", "box-content flex h-9 max-w-[640px] items-center gap-2 rounded-full border", i ? "border-brand" : "border-black/12", t),
                    children: [(0, r.jsxs)("div", {
                        className: "flex h-full flex-1 items-center gap-2",
                        children: [(0, r.jsx)("input", {
                            ref: b,
                            type: "text",
                            value: y,
                            onChange: _,
                            onKeyDown: E,
                            placeholder: "Search for any content or user",
                            maxLength: 100,
                            className: "caret-brand h-full flex-1 pl-4 text-[14px] outline-none placeholder:text-black/30"
                        }), k && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("button", {
                                onClick: C,
                                className: "flex h-7 w-7 cursor-pointer items-center justify-center rounded-full hover:bg-black/3",
                                "aria-label": "Clear search",
                                children: (0, r.jsx)(d.Qks, {
                                    className: "size-4"
                                })
                            }), (0, r.jsx)("div", {
                                className: "mx-0.5 h-4 w-px bg-black/12"
                            })]
                        })]
                    }), (0, r.jsx)("button", {
                        onClick: () => S(),
                        className: (0, m.cn)("mr-1 box-border flex h-7 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full hover:opacity-90 disabled:cursor-not-allowed", k ? "bg-brand text-white" : "text-brand bg-black/3"),
                        disabled: !k,
                        "aria-label": "Search",
                        children: (0, r.jsx)(d.uBk, {
                            className: "size-4"
                        })
                    }), i ? (0, r.jsx)(g, {
                        inputRef: b,
                        onClickHistory: A,
                        onPreviewHistory: T,
                        className: "absolute top-full z-50 mt-2 w-full max-w-[640px]"
                    }) : null]
                })
            }
            var j = s(16618),
                v = s(6874),
                w = s.n(v),
                y = s(13960),
                k = s(90239),
                N = s(11518),
                _ = s.n(N),
                C = s(57798),
                S = s(32770),
                E = s(36845),
                A = s(45362);
            let T = e => {
                    var t;
                    let {
                        onGotoSubscription: s,
                        onCloseMenu: o
                    } = e, [i, u] = (0, a.useState)(!1), {
                        showModal: m
                    } = (0, A.O)(), {
                        track: h
                    } = (0, x.s)(), {
                        logout: f
                    } = (0, n.A)(), g = (0, l.useRouter)(), {
                        user: b
                    } = (0, j.J)(), {
                        subscriptionInfo: v
                    } = (0, y.R)(), {
                        usage: k
                    } = (0, A.O)(), N = (0, a.useMemo)(() => (null == v ? void 0 : v.plan) === "Pro", [null == v ? void 0 : v.plan]);
                    (0, a.useEffect)(() => {
                        h("header_profile_show", {
                            location: (0, p.em)()
                        })
                    }, [v]);
                    let T = async () => {
                        try {
                            await f(), g.push("/home")
                        } catch (e) {
                            (0, c.P)({
                                message: "Failed to logout, please try again later",
                                type: "error"
                            })
                        }
                        o()
                    };
                    return b ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("div", {
                            style: {
                                animation: "fadeIn 0.2s ease-out"
                            },
                            className: "jsx-e68520c3668174cd absolute top-11 right-0 z-10 w-[260px] rounded-[16px] border border-black/3 bg-white p-2 shadow-[0px_16px_32px_-1px_rgba(0,0,0,0.15)]",
                            children: [(0, r.jsxs)("div", {
                                className: "jsx-e68520c3668174cd flex items-center gap-3 p-2",
                                children: [(0, r.jsxs)(w(), {
                                    className: "relative h-11 w-11 flex-shrink-0 cursor-pointer rounded-full bg-black/6",
                                    href: "/profile/".concat(b.uid),
                                    children: [(0, r.jsx)("img", {
                                        src: b.photo_url || "/images/avatar.svg",
                                        alt: "User avatar",
                                        className: "jsx-e68520c3668174cd h-full w-full rounded-full object-cover"
                                    }), (0, r.jsx)(S.A, {
                                        className: "absolute -right-0.75 -bottom-px border-white",
                                        userBadge: null == (t = b.badge) ? void 0 : t.type,
                                        size: "12",
                                        tooltipSide: "right"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "jsx-e68520c3668174cd flex-1 space-y-0.5 overflow-hidden",
                                    children: [(0, r.jsx)("div", {
                                        className: "jsx-e68520c3668174cd truncate text-[20px] font-bold text-black/95",
                                        children: b.display_name || "User"
                                    }), (0, r.jsx)("div", {
                                        className: "jsx-e68520c3668174cd truncate text-[12px] text-black/65",
                                        children: b.email
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "jsx-e68520c3668174cd w-[244px] rounded-xl bg-black/3",
                                children: [(0, r.jsxs)("div", {
                                    className: "jsx-e68520c3668174cd flex h-[42px] items-center gap-2 overflow-hidden rounded-xl py-2 pr-2 pl-3",
                                    children: [(0, r.jsx)("div", {
                                        className: "jsx-e68520c3668174cd flex-1 text-[16px] font-bold text-black/95",
                                        children: N ? "Pro" : "Free"
                                    }), (0, r.jsx)("button", {
                                        onClick: () => s("avatar_hover_profile"),
                                        className: "jsx-e68520c3668174cd flex h-[26px] min-w-12 items-center justify-center rounded-lg bg-[#55644a] px-2 py-[5px] text-[12px] text-white transition-colors hover:bg-[#55644a]/90",
                                        children: N ? "View plans" : "Upgrade"
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "jsx-e68520c3668174cd px-2.5",
                                    children: (0, r.jsx)("div", {
                                        className: "jsx-e68520c3668174cd h-px bg-black/6"
                                    })
                                }), (0, r.jsxs)("button", {
                                    onClick: e => {
                                        e.stopPropagation(), u(!0)
                                    },
                                    className: "jsx-e68520c3668174cd flex h-10 w-full items-center gap-2 overflow-hidden rounded-xl px-2.5 py-3 hover:bg-black/6",
                                    children: [(0, r.jsx)(d.Djw, {
                                        className: "h-4 w-4"
                                    }), (0, r.jsx)("span", {
                                        className: "jsx-e68520c3668174cd flex-1 text-left text-[14px] text-black/95",
                                        children: "Credits"
                                    }), (0, r.jsxs)("div", {
                                        className: "jsx-e68520c3668174cd flex items-center gap-0.5",
                                        children: [(0, r.jsx)("span", {
                                            className: "jsx-e68520c3668174cd text-[12px] font-bold text-black/65",
                                            children: "number" == typeof(null == v ? void 0 : v.total_credits) ? v.total_credits.toLocaleString() : ""
                                        }), (0, r.jsx)(d.ye6, {
                                            className: "h-4 w-4 text-black/65"
                                        })]
                                    })]
                                }), (0, r.jsxs)("button", {
                                    onClick: e => {
                                        e.stopPropagation(), m(E.Y.HEADER_USER_MENU)
                                    },
                                    className: "jsx-e68520c3668174cd flex h-10 w-full items-center gap-2 overflow-hidden rounded-xl px-2.5 py-3 hover:bg-black/6",
                                    children: [(0, r.jsx)("img", {
                                        src: "/icons/backend_line_icon.svg",
                                        alt: "Backend",
                                        className: "jsx-e68520c3668174cd h-4 w-4"
                                    }), (0, r.jsx)("span", {
                                        className: "jsx-e68520c3668174cd flex-1 text-left text-[14px] text-black/95",
                                        children: "Backend"
                                    }), (0, r.jsxs)("div", {
                                        className: "jsx-e68520c3668174cd flex items-center gap-0.5",
                                        children: [(0, r.jsx)("span", {
                                            className: "jsx-e68520c3668174cd text-[12px] font-bold text-black/65",
                                            children: "".concat((null == k ? void 0 : k.active) || "0", "/").concat((null == k ? void 0 : k.total) || "0")
                                        }), (0, r.jsx)(d.ye6, {
                                            className: "h-4 w-4 text-black/65"
                                        })]
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "jsx-e68520c3668174cd flex flex-col gap-1",
                                children: [(0, r.jsxs)(w(), {
                                    className: "flex h-10 items-center gap-2 overflow-hidden rounded-xl px-2.5 py-3 hover:bg-black/3",
                                    href: "/profile/".concat(b.uid),
                                    children: [(0, r.jsx)(d.lAT, {
                                        className: "h-4 w-4"
                                    }), (0, r.jsx)("span", {
                                        className: "jsx-e68520c3668174cd flex-1 text-left text-[14px] text-black/95",
                                        children: "Project"
                                    }), (0, r.jsx)(d.ye6, {
                                        className: "h-4 w-4 text-black/65"
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "jsx-e68520c3668174cd flex items-center justify-center rounded-lg px-2",
                                    children: (0, r.jsx)("div", {
                                        className: "jsx-e68520c3668174cd h-px w-full bg-black/6"
                                    })
                                }), (0, r.jsxs)("button", {
                                    onClick: T,
                                    className: "jsx-e68520c3668174cd flex h-10 items-center gap-2 overflow-hidden rounded-xl px-2.5 py-3 hover:bg-black/3",
                                    children: [(0, r.jsx)(d.jfQ, {
                                        className: "h-4 w-4"
                                    }), (0, r.jsx)("span", {
                                        className: "jsx-e68520c3668174cd flex-1 text-left text-[14px] text-black/95",
                                        children: "Logout"
                                    })]
                                })]
                            })]
                        }), i && (0, r.jsx)(C.I, {
                            subscription: v,
                            position: "header_profile",
                            onClose: () => u(!1)
                        }), (0, r.jsx)(_(), {
                            id: "e68520c3668174cd",
                            children: "@keyframes fadeIn{from{opacity:0;transform:translatey(-10px)}to{opacity:1;transform:translatey(0)}}"
                        })]
                    }) : null
                },
                L = () => {
                    let [e, t] = (0, a.useState)(!1), s = (0, a.useRef)(null), n = (0, l.useRouter)(), o = (0, l.usePathname)(), {
                        track: c
                    } = (0, x.s)(), i = (0, a.useRef)(null), {
                        user: u
                    } = (0, j.J)(), {
                        subscriptionInfo: h
                    } = (0, y.R)(), f = (0, k.I)(!1, 1200), g = (0, a.useMemo)(() => (null == h ? void 0 : h.plan) === "Pro", [null == h ? void 0 : h.plan]), b = (0, a.useMemo)(() => (0, p.em)(o), [o]);
                    (0, a.useEffect)(() => {
                        let e = e => {
                            s.current && !s.current.contains(e.target) && t(!1)
                        };
                        return document.addEventListener("mousedown", e), () => {
                            document.removeEventListener("mousedown", e)
                        }
                    }, []);
                    let v = e => {
                        (null == u ? void 0 : u.uid) && (c("sub_upgrade_click", {
                            click_from: e
                        }), n.push("/subscription".concat(b ? "?location=".concat(b) : "")))
                    };
                    return void 0 === u ? null : (0, r.jsxs)("div", {
                        className: "flex items-center",
                        children: ["/create" === o ? null : (0, r.jsxs)(w(), {
                            href: "/create",
                            className: "bg-brand hover:bg-brand/90 mr-3 flex h-9 items-center gap-1.5 rounded-[10px] px-2.5 text-[14px] leading-8 font-medium text-white",
                            onClick: () => c("header_create_click", {
                                location: b
                            }),
                            children: [(0, r.jsx)(d.Ld_, {
                                className: "h-[14px] w-[14px]"
                            }), "Create"]
                        }), u ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                className: (0, m.cn)("border-brand/30 text-brand mr-2.5 flex h-9 cursor-pointer items-center gap-[6px] rounded-[10px] border px-2.5 text-[14px] leading-8 font-medium hover:bg-black/3", h ? "" : "min-w-[65px] animate-pulse"),
                                onClick: () => v("header"),
                                children: [g && (0, r.jsx)(d.xsv, {
                                    className: "h-[14px] w-[14px]"
                                }), (0, r.jsx)("span", {
                                    children: h ? g ? "Pro" : "Upgrade" : ""
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "relative cursor-pointer rounded-full p-1 ".concat(e && "bg-black/6"),
                                ref: s,
                                onMouseEnter: () => {
                                    i.current && (clearTimeout(i.current), i.current = null), t(!0)
                                },
                                onMouseLeave: () => {
                                    i.current = setTimeout(() => {
                                        t(!1)
                                    }, 300)
                                },
                                onClick: e => {
                                    f ? t(!0) : e.target === e.currentTarget && (null == u ? void 0 : u.uid) && n.push("/profile/".concat(u.uid))
                                },
                                children: [(0, r.jsx)("div", {
                                    className: "flex cursor-pointer items-center",
                                    children: (0, r.jsx)("div", {
                                        className: "rounded-full bg-black/6 transition-transform focus:outline-none ".concat(o === "/profile/".concat(u.uid) && "ring ring-black ring-offset-2"),
                                        "aria-label": "Go to profile",
                                        children: (0, r.jsx)("img", {
                                            src: u.photo_url || "/images/avatar.svg",
                                            alt: "User avatar",
                                            className: "h-8 w-8 overflow-hidden rounded-full object-cover"
                                        })
                                    })
                                }), e && (0, r.jsx)(T, {
                                    onGotoSubscription: v,
                                    onCloseMenu: () => t(!1)
                                })]
                            })]
                        }) : (0, r.jsx)(w(), {
                            href: "/login",
                            className: "border-brand/30 text-brand h-9 rounded-[10px] border px-2.5 text-[14px] leading-8 font-medium hover:bg-black/3",
                            onClick: () => c("header_login_click", {
                                location: b
                            }),
                            children: "Sign in"
                        })]
                    })
                };
            var D = s(44671);
            let z = e => {
                    let {
                        className: t,
                        showLogo: s = !1,
                        onClickLogo: a
                    } = e, {
                        isLoggedIn: n
                    } = (0, j.J)(), c = (0, l.usePathname)(), d = (0, l.useRouter)(), u = !1 === n && ["/", "/home"].includes(c), x = ["/", "/home", "/results"].includes(c) || c.startsWith("/project/");
                    return (0, r.jsxs)(r.Fragment, {
                        children: [u && (0, r.jsx)(i, {
                            onSuccess: () => {
                                d.refresh()
                            },
                            onError: e => {
                                o.Ay.error("Google One Tap error:", e)
                            }
                        }), (0, r.jsxs)("header", {
                            className: (0, m.cn)("bg-body sticky top-0 z-20 flex h-14 w-full flex-shrink-0 items-center justify-between gap-3 px-5 transition-all duration-300", s ? "justify-between" : "justify-end", t),
                            children: [s ? (0, r.jsx)(D.A, {
                                onClickLogo: a
                            }) : null, x ? (0, r.jsx)(b, {
                                className: "w-full max-w-[min(640px,calc(100%-500px))] max-lg:hidden"
                            }) : null, (0, r.jsx)(L, {})]
                        })]
                    })
                },
                R = z
        }
    }
]);