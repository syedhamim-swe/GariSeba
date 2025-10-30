try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "063f144f-da9d-4bbd-a075-c068e8f72b47", e._sentryDebugIdIdentifier = "sentry-dbid-063f144f-da9d-4bbd-a075-c068e8f72b47")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5425], {
        707: (e, t, r) => {
            r.d(t, {
                S: () => a
            });
            var l = r(34477);
            let a = (0, l.createServerReference)("40765cd84cf16f0018a5e81b1c99cc16ea5026c8eb", l.callServer, void 0, l.findSourceMapURL, "checkSlugPrefix")
        },
        34326: (e, t, r) => {
            r.d(t, {
                Q: () => c
            });
            var l = r(96834);
            async function a(e) {
                return await (0, l.qM)("/v1/files/upload", {
                    method: "POST",
                    data: e
                })
            }
            async function n(e) {
                return await (0, l.qM)("/v1/files/list_urls", {
                    method: "POST",
                    data: e
                })
            }
            async function s(e, t) {
                if (!e.length) return [];
                let r = e.map(e => ({
                    file_name: e.name,
                    file_size: e.size,
                    mime_type: e.type
                }));
                try {
                    let l = await a({
                        files: r,
                        event_type: t.eventType,
                        is_public: t.isPublic || !1
                    });
                    if (!l.data || !Array.isArray(l.data.upload_infos) || l.data.upload_infos.length !== e.length) throw Error("Invalid response from server: Missing or incorrect upload information");
                    let s = e.map((e, t) => {
                            let r = l.data.upload_infos[t],
                                a = new FormData;
                            return Object.entries(r.fields || {}).forEach(e => {
                                let [t, r] = e;
                                a.append(t, r)
                            }), a.append("file", e), fetch(r.upload_url, {
                                method: r.method,
                                body: a
                            }).then(e => {
                                if (!e.ok) throw Error("Upload failed with status ".concat(e.status, ": ").concat(e.statusText));
                                return {
                                    file_id: r.file_id
                                }
                            })
                        }),
                        c = await Promise.all(s);
                    if (t.needUrl) {
                        let e = c.map(e => e.file_id),
                            t = await n({
                                file_ids: e
                            });
                        t.data && Array.isArray(t.data.file_urls) && (c = c.map((e, r) => {
                            var l, a;
                            return { ...e,
                                file_url: null == (a = t.data) || null == (l = a.file_urls) ? void 0 : l[r]
                            }
                        }))
                    }
                    return c
                } catch (e) {
                    throw console.error("File upload process failed:", e), e instanceof Error ? e : Error("Unknown error during file upload process")
                }
            }
            async function c(e, t) {
                return (await s([e], t))[0]
            }
        },
        41894: (e, t, r) => {
            r.d(t, {
                A: () => C
            });
            var l = r(95155),
                a = r(25427),
                n = r(12115),
                s = r(49711),
                c = r(16618),
                i = r(56389),
                o = r(35695),
                d = r(46102),
                u = r(34477);
            let p = (0, u.createServerReference)("40438f18b3c6a0a72da0b83fcabef00242ca839e0a", u.callServer, void 0, u.findSourceMapURL, "createShortlink");
            var m = r(49972),
                x = r(48436),
                f = r(26846);
            let h = e => {
                    let {
                        project: t,
                        isCreator: r,
                        location: s,
                        inviteCode: u
                    } = e, {
                        track: h
                    } = (0, i.s)(), {
                        user: g
                    } = (0, c.J)(), [v, j] = (0, n.useState)(!1), [b, w] = (0, n.useState)(null), _ = t.visibility === m.wg.PUBLIC, y = (() => {
                        let e = "".concat(window.location.origin).concat(t.project_url, "?enter_from=share");
                        return u ? "".concat(e, "&invite_code=").concat(u) : e
                    })(), k = (0, n.useRef)(!0), [N, C] = (0, n.useState)(!1), S = (null == g ? void 0 : g.plan) === "Free" || !g || !g.plan, U = (0, o.useRouter)();
                    (0, n.useEffect)(() => {
                        k.current && (k.current = !1, h("share_pop_up_show", {
                            project_id: t.project_id,
                            project_url: t.project_url,
                            location: s,
                            is_public: +!!_,
                            is_owner: !!r
                        }))
                    }, [s, r]);
                    let R = () => N && b ? b : y,
                        I = async () => {
                            if (S) return void U.push("/subscription");
                            if (b) return void C(!N);
                            if (v) return;
                            j(!0);
                            let e = y + "&screen_status=1",
                                t = await p(e);
                            t.success && t.shortUrl ? (console.log("create short link success", t), w(t.shortUrl)) : (console.log("create short link error", t), (0, x.P)({
                                message: "Failed to create short link, using full url",
                                type: "error"
                            }), w(e)), C(!0), j(!1)
                        };
                    return (0, l.jsxs)("div", {
                        className: "space-y-2",
                        children: [(0, l.jsxs)("div", {
                            className: "flex h-9 gap-3",
                            children: [(0, l.jsxs)("div", {
                                className: "flex h-9 min-w-0 flex-1 items-center justify-between gap-1 rounded-[10px] border border-black/6 px-3",
                                children: [_ ? (0, l.jsx)(a.bl6, {
                                    size: 16
                                }) : (0, l.jsx)(a.XJr, {
                                    size: 16
                                }), (0, l.jsx)("a", {
                                    className: "mt-1 flex-1 truncate text-[14px] text-black/95 hover:underline",
                                    href: R(),
                                    target: "_blank",
                                    title: R(),
                                    children: R()
                                }), (0, l.jsx)(a.SJ3, {
                                    size: 16
                                })]
                            }), (0, l.jsx)("div", {
                                className: "bg-brand flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-[10px] text-white",
                                onClick: () => {
                                    let e = R(),
                                        n = _ ? e : "Link: ".concat(e, "\nPasscode: ").concat(t.passcode);
                                    navigator.clipboard.writeText(n), (0, x.P)({
                                        message: _ ? "Link copied to clipboard" : "Link and passcode copied to clipboard",
                                        type: "success",
                                        icon: !_ && (0, l.jsx)(a.XJr, {
                                            className: "h-4 w-4 text-[#14AE5C]"
                                        })
                                    }), h("share_copy_link_click", {
                                        project_id: t.project_id,
                                        project_url: t.project_url,
                                        location: s,
                                        is_public: +!!_,
                                        is_owner: +!!r
                                    })
                                },
                                children: (0, l.jsx)(a.NGz, {
                                    size: 16
                                })
                            })]
                        }), !_ && (0, l.jsxs)("div", {
                            className: "pl-1 text-[12px] text-black/45",
                            children: [(0, l.jsx)("span", {
                                children: "Access requires passcode:"
                            }), (0, l.jsx)("b", {
                                children: t.passcode
                            })]
                        }), r && (0, l.jsxs)("div", {
                            className: "flex h-[26px] w-full flex-row items-center justify-start px-2 py-1",
                            children: [(0, l.jsxs)("button", {
                                className: "flex cursor-pointer flex-row items-center gap-1",
                                onClick: I,
                                disabled: v,
                                children: [v ? (0, l.jsx)(a.GJV, {
                                    className: "h-4 w-4 flex-shrink-0 animate-spin rounded-full text-black/45"
                                }) : N ? (0, l.jsx)(a.Ked, {
                                    className: "text-brand h-4 w-4 flex-shrink-0 rounded-full"
                                }) : (0, l.jsx)(a.$OD, {
                                    className: "h-4 w-4 flex-shrink-0 rounded-full text-black/45"
                                }), (0, l.jsx)("div", {
                                    className: "text-[14px] text-black/95",
                                    children: "Share in fullscreen"
                                }), (0, l.jsxs)("div", {
                                    className: (0, f.cn)("bg-brand ml-0.5 flex h-[18px] w-[41px] cursor-pointer items-center justify-center gap-[3px] rounded-[6px] text-[10px] text-white"),
                                    children: [(0, l.jsx)(a.xsv, {
                                        className: "h-[10px] w-[10px]"
                                    }), (0, l.jsx)("span", {
                                        children: "Pro"
                                    })]
                                })]
                            }), (0, l.jsxs)(d.m_, {
                                children: [(0, l.jsx)(d.k$, {
                                    asChild: !0,
                                    children: (0, l.jsx)(a.Kt4, {
                                        className: "ml-1 h-4 w-4 flex-shrink-0 rounded-full text-black/45"
                                    })
                                }), (0, l.jsx)(d.ZI, {
                                    side: "top",
                                    className: "flex w-[233px] items-center justify-center rounded-[12px]",
                                    children: (0, l.jsx)("video", {
                                        src: "https://public.youware.com/images/share-hover-tip-video.mp4",
                                        className: "aspect-[1736/1080] h-full w-full rounded-[6px]",
                                        autoPlay: !0,
                                        muted: !0,
                                        loop: !0,
                                        playsInline: !0
                                    })
                                })]
                            })]
                        })]
                    })
                },
                g = e => {
                    let {
                        project: t,
                        location: r,
                        isCreator: s,
                        title: c,
                        shareImageUrl: i,
                        targetUrl: o,
                        shareActions: d,
                        onTrack: u,
                        inviteCode: p
                    } = e, m = (() => {
                        let e = "".concat(window.location.origin).concat(t.project_url);
                        return p ? "".concat(e, "?invite_code=").concat(p) : e
                    })(), x = null != o ? o : m, f = t.custom_title || t.title || "", [h, g] = (0, n.useState)(!1), [v, j] = (0, n.useState)(!1), b = (0, n.useRef)(null);
                    return (0, n.useEffect)(() => {
                        let e = () => {
                                let e = b.current;
                                e && (g(e.scrollLeft > 0), j(e.scrollLeft < e.scrollWidth - e.clientWidth - 1))
                            },
                            t = b.current;
                        return t && (t.addEventListener("scroll", e), e(), setTimeout(e, 100)), () => {
                            t && t.removeEventListener("scroll", e)
                        }
                    }, [d.length]), (0, l.jsxs)("div", {
                        children: [(0, l.jsx)("div", {
                            className: "my-4 pl-1 text-[12px] font-bold",
                            children: null != c ? c : "Share For More Views"
                        }), (0, l.jsxs)("div", {
                            className: "relative overflow-visible",
                            children: [(0, l.jsx)("div", {
                                ref: b,
                                className: "no-scrollbar flex flex-nowrap gap-1 overflow-x-auto",
                                children: d.map(e => (0, l.jsxs)("div", {
                                    className: "flex w-[70px] flex-shrink-0 cursor-pointer flex-col items-center gap-2",
                                    onClick: () => {
                                        let l = {
                                            url: x,
                                            title: f,
                                            imageUrl: i,
                                            isCreator: s
                                        };
                                        if (u({
                                                project_url: t.project_url,
                                                social_platform: e.name,
                                                location: r
                                            }), "action" === e.type) e.onClick(l);
                                        else if ("platform" === e.type) {
                                            let t = e.getShareUrl(l);
                                            window.open(t, "_blank")
                                        }
                                    },
                                    children: [(0, l.jsx)("img", {
                                        src: e.icon,
                                        alt: e.name,
                                        className: "h-[52px] w-[52px] rounded-full bg-black/3"
                                    }), (0, l.jsx)("span", {
                                        className: "truncate text-center text-[12px] text-black/65",
                                        children: e.name
                                    })]
                                }, e.name))
                            }), h && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    className: "absolute top-[14px] left-0 z-10 h-6 w-6 cursor-pointer rounded-full bg-white p-1.5 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]",
                                    onClick: () => {
                                        b.current && (b.current.scrollLeft -= 200)
                                    },
                                    children: (0, l.jsx)(a.M0J, {
                                        className: "h-3 w-3"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-white to-transparent"
                                })]
                            }), v && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    className: "absolute top-[14px] right-0 z-10 h-6 w-6 cursor-pointer rounded-full bg-white p-1.5 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]",
                                    onClick: () => {
                                        b.current && (b.current.scrollLeft += 200)
                                    },
                                    children: (0, l.jsx)(a.D8V, {
                                        className: "h-3 w-3"
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white to-transparent"
                                })]
                            })]
                        })]
                    })
                },
                v = e => {
                    let {
                        titleText: t,
                        onTemplateChange: r,
                        templates: a
                    } = e, n = e => {
                        let {
                            template: t
                        } = e;
                        return (0, l.jsx)("div", {
                            className: (0, f.cn)("flex h-[120px] w-[120px] flex-shrink-0 items-center justify-center rounded-[12px] border border-black/6"),
                            children: t ? (0, l.jsx)("img", {
                                src: t.template_icon,
                                alt: " ",
                                className: "h-full w-full cursor-pointer",
                                onClick: () => null == r ? void 0 : r(t)
                            }) : (0, l.jsx)(s, {})
                        }, (null == t ? void 0 : t.template_id) || "skeleton")
                    }, s = () => (0, l.jsx)("div", {
                        className: "h-full w-full animate-pulse rounded-[12px] bg-black/5"
                    });
                    return (0, l.jsxs)("div", {
                        children: [t && (0, l.jsx)("div", {
                            className: "my-4 pl-1 text-[12px] font-bold",
                            children: t
                        }), (0, l.jsx)("div", {
                            className: "no-scrollbar flex flex-row gap-3 overflow-x-auto",
                            children: a.length > 0 ? a.map(e => (0, l.jsx)(n, {
                                template: e
                            }, e.template_id)) : Array.from({
                                length: 3
                            }).map((e, t) => (0, l.jsx)(n, {}, t))
                        })]
                    })
                };
            var j = r(62128);
            let b = [{
                    name: "X",
                    icon: "/sns/x.png",
                    getShareUrl: e => {
                        let t;
                        return t = e.isCreator ? "I didn't write a single line of code — just built ".concat(e.title, " with @YouWareAI.\nTry it here \uD83D\uDC49 ").concat(e.url, "\n#YouWare") : "I found an amazing project on @YouWareAI: ".concat(e.title, ". Check it out here \uD83D\uDC49 ").concat(e.url, "\n#YouWare"), "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(t))
                    },
                    type: "platform"
                }, {
                    name: "Reddit",
                    icon: "/sns/reddit.png",
                    getShareUrl: e => "https://www.reddit.com/submit?url=".concat(encodeURIComponent(e.url), "&title=").concat(encodeURIComponent(e.title)),
                    type: "platform"
                }, {
                    name: "WhatsApp",
                    icon: "/sns/whatsapp.png",
                    getShareUrl: e => {
                        let t = "".concat(e.title, "\n").concat(e.url);
                        return "https://wa.me/?text=".concat(encodeURIComponent(t))
                    },
                    type: "platform"
                }, {
                    name: "Telegram",
                    icon: "/sns/telegram.png",
                    getShareUrl: e => {
                        let t = "".concat(e.title, "\n").concat(e.url);
                        return "https://t.me/share/url?url=".concat(encodeURIComponent(e.url), "&text=").concat(encodeURIComponent(t))
                    },
                    type: "platform"
                }, {
                    name: "Threads",
                    icon: "/sns/threads.png",
                    getShareUrl: e => {
                        let t;
                        return t = e.isCreator ? "I didn't write a single line of code — just built ".concat(e.title, ".\nTry it here: ").concat(e.url, "\n#YouWare") : "I found an amazing project on @YouWareAI: ".concat(e.title, ". Check it out here \uD83D\uDC49 ").concat(e.url, "\n#YouWare"), "https://www.threads.net/intent/post?text=".concat(encodeURIComponent(t))
                    },
                    type: "platform"
                }, {
                    name: "LINE",
                    icon: "/sns/line.png",
                    getShareUrl: e => "https://social-plugins.line.me/lineit/share?url=".concat(encodeURIComponent(e.url)),
                    type: "platform"
                }, {
                    name: "LinkedIn",
                    icon: "/sns/linkedin.png",
                    getShareUrl: e => "https://www.linkedin.com/shareArticle?mini=true&url=".concat(encodeURIComponent(e.url)),
                    type: "platform"
                }, {
                    name: "Bluesky",
                    icon: "/sns/bluesky.png",
                    getShareUrl: e => {
                        let t;
                        return t = e.isCreator ? "I didn't write a single line of code — just built ".concat(e.title, ".\nTry it here \uD83D\uDC49 ").concat(e.url, "\n#YouWare") : "I found an amazing project on @YouWareAI: ".concat(e.title, ". Check it out here \uD83D\uDC49 ").concat(e.url, "\n#YouWare"), "https://bsky.app/intent/compose?text=".concat(encodeURIComponent(t))
                    },
                    type: "platform"
                }],
                w = (0, u.createServerReference)("60182fa22724035bd2ea0477b4c7e412b2b4ddd9be", u.callServer, void 0, u.findSourceMapURL, "genShareUrl"),
                _ = (0, u.createServerReference)("4034f60142bdc5bc3b29e96bf1bc96627cac6cc467", u.callServer, void 0, u.findSourceMapURL, "getShareTemplateList"),
                y = (e, t, r) => {
                    let [l, a] = (0, n.useState)(r || []), [s, c] = (0, n.useState)(t || null), [i, o] = (0, n.useState)(null), [d, u] = (0, n.useState)(!1);
                    (0, n.useEffect)(() => {
                        (async () => {
                            if (!(l.length > 0)) try {
                                let t = await _(e);
                                0 === t.code && t.data ? a(t.data.templates) : j.vF.info("get share template list failed", t)
                            } catch (e) {
                                j.vF.error("fetch templates error", e)
                            }
                        })()
                    }, []);
                    let p = (0, n.useCallback)(async t => {
                        c(t), o(null), u(!0);
                        try {
                            let r = await w(e, t.template_id);
                            r.data && t.template_id === r.data.template_id ? o(r.data) : console.log("gen share url res not match", r, t)
                        } catch (e) {
                            j.vF.error("generate share url error", e)
                        } finally {
                            u(!1)
                        }
                    }, [e, s]);
                    return (0, n.useEffect)(() => {
                        t && p(t)
                    }, [t]), {
                        templates: l,
                        selectedTemplate: s,
                        templateCover: i,
                        isLoading: d,
                        handleTemplateChange: p
                    }
                },
                k = e => {
                    let {
                        project: t,
                        location: r,
                        initialSelectedTemplate: n,
                        initialTemplates: s,
                        onBack: c,
                        inviteCode: o
                    } = e, {
                        templates: d,
                        selectedTemplate: u,
                        templateCover: p,
                        handleTemplateChange: m
                    } = y(t.project_id, n, s), {
                        track: x
                    } = (0, i.s)(), h = new URL("".concat(window.location.origin).concat(t.project_url));
                    h.searchParams.set("type", "card"), o && h.searchParams.set("invite_code", o);
                    let v = async () => {
                        if (p) try {
                            var e;
                            let r = await fetch(p.origin_url),
                                l = await r.blob(),
                                a = window.URL.createObjectURL(l),
                                n = document.createElement("a");
                            n.href = a;
                            let s = (t.title || "".concat(null == (e = t.user) ? void 0 : e.display_name, "'s YouWare Project")).replace(/\s+/g, "-").toLowerCase();
                            n.download = "".concat(s, "-").concat(null == u ? void 0 : u.template_id, ".png"), document.body.appendChild(n), n.click(), document.body.removeChild(n), window.URL.revokeObjectURL(a)
                        } catch (e) {
                            j.vF.error("Save image failed:", e)
                        }
                    };
                    return (0, l.jsxs)("div", {
                        className: "flex w-[512px] max-w-[calc(100vw-32px)] flex-col gap-4 rounded-[20px] bg-white p-4",
                        style: {
                            boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.10), 0px 16px 32px -1px rgba(0, 0, 0, 0.05)"
                        },
                        children: [(0, l.jsx)("div", {
                            className: "w-full items-center justify-start px-1",
                            children: (0, l.jsx)("div", {
                                className: "flex h-6 w-6 cursor-pointer items-center justify-center rounded-full hover:bg-black/5",
                                onClick: c,
                                children: (0, l.jsx)(a.M0J, {
                                    className: "h-4 w-4 text-black"
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, l.jsx)("div", {
                                className: "flex aspect-square w-full items-center justify-center rounded-[16px] bg-black/5 md:h-[360px] md:w-[360px]",
                                children: p ? (0, l.jsx)("img", {
                                    src: p.share_url,
                                    alt: " ",
                                    className: "flex h-full w-full rounded-[16px] bg-black/5 object-contain",
                                    draggable: !1
                                }) : (0, l.jsx)("div", {
                                    className: "flex h-full w-full items-center justify-center",
                                    children: (0, l.jsx)(a.xNY, {
                                        className: "h-5 w-5 animate-spin text-black/50"
                                    })
                                })
                            })
                        }), (0, l.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, l.jsx)("div", {
                                className: "no-scrollbar flex flex-row gap-3 overflow-x-auto",
                                children: d.map(e => (0, l.jsx)("div", {
                                    className: (0, f.cn)("flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-[12px] border border-black/6", (null == u ? void 0 : u.template_id) === (null == e ? void 0 : e.template_id) ? "border-brand border-2" : ""),
                                    onClick: () => e && m(e),
                                    children: (0, l.jsx)("img", {
                                        src: e.template_icon,
                                        alt: " ",
                                        className: "pointer-events-none h-full w-full",
                                        draggable: !1
                                    }, e.template_id)
                                }, null == e ? void 0 : e.template_id))
                            })
                        }), (0, l.jsx)(g, {
                            project: t,
                            location: r,
                            title: "Share to",
                            targetUrl: h.toString(),
                            inviteCode: o,
                            shareActions: [{
                                name: "Save Image",
                                icon: "/sns/download.png",
                                type: "action",
                                onClick: v
                            }, ...b],
                            onTrack: e => {
                                x("share_card_to_social_platform_click", { ...e,
                                    project_id: t.project_id,
                                    template_name: (null == u ? void 0 : u.template_id) || "",
                                    template_index: d.indexOf(u || {}) + 1
                                })
                            }
                        })]
                    })
                },
                N = e => {
                    let {
                        project: t,
                        onClose: r,
                        location: n,
                        isCreator: s,
                        templates: i,
                        trackShare: o,
                        onClickTemplate: d,
                        inviteCode: u
                    } = e, {
                        isLoggedIn: p
                    } = (0, c.J)();
                    return (0, l.jsxs)("div", {
                        className: "flex w-[512px] max-w-[calc(100vw-32px)] flex-col gap-4 rounded-[20px] bg-white p-5",
                        style: {
                            boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.10), 0px 16px 32px -1px rgba(0, 0, 0, 0.05)"
                        },
                        children: [(0, l.jsxs)("div", {
                            className: "flex justify-center gap-2 self-stretch pl-1",
                            children: [(0, l.jsxs)("div", {
                                className: "flex flex-1 flex-col gap-0.5",
                                children: [(0, l.jsx)("div", {
                                    className: "text-[20px] font-bold",
                                    children: "Share Project"
                                }), p && (0, l.jsxs)("div", {
                                    className: "text-xs font-bold",
                                    style: {
                                        color: "#B68C37"
                                    },
                                    children: ["Share project, earn credits if friends sign up.", (0, l.jsx)("img", {
                                        src: "/icons/copper-diamond-fill.svg",
                                        alt: "diamond icon",
                                        className: "ml-1 inline h-4 w-4"
                                    })]
                                })]
                            }), (0, l.jsx)("div", {
                                className: "flex items-start gap-2.5 rounded-lg p-1",
                                children: (0, l.jsx)(a.Qks, {
                                    onClick: () => r(),
                                    className: "cursor-pointer",
                                    size: 16
                                })
                            })]
                        }), (0, l.jsx)(h, {
                            project: t,
                            location: n,
                            isCreator: s,
                            inviteCode: u
                        }), (0, l.jsx)(g, {
                            project: t,
                            location: n,
                            isCreator: s,
                            shareActions: b,
                            onTrack: o,
                            inviteCode: u
                        }), s && (0, l.jsx)(v, {
                            onTemplateChange: d,
                            titleText: "Share It in Style",
                            templates: i
                        })]
                    })
                },
                C = e => {
                    var t;
                    let {
                        project: r,
                        onClose: a,
                        location: o
                    } = e, [d, u] = (0, n.useState)("main"), [p, m] = (0, n.useState)(null), {
                        templates: x
                    } = y(r.project_id), {
                        track: f
                    } = (0, i.s)(), {
                        fetchInviteInfo: h,
                        inviteInfo: g
                    } = (0, s.f)(), {
                        userId: v
                    } = (0, c.J)(), j = (null == (t = r.user) ? void 0 : t.uid) === v;
                    return (0, n.useEffect)(() => {
                        v && h()
                    }, [v]), (0, l.jsxs)("div", {
                        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/20",
                        onClick: e => {
                            e.target === e.currentTarget && a()
                        },
                        children: ["main" === d && (0, l.jsx)(N, {
                            project: r,
                            onClose: a,
                            location: o,
                            isCreator: j,
                            templates: x,
                            trackShare: e => {
                                f("share_to_social_platform_click", {
                                    project_id: r.project_id,
                                    project_url: e.project_url,
                                    social_platform: e.social_platform,
                                    location: o,
                                    is_owner: +!!j
                                })
                            },
                            onClickTemplate: e => {
                                "main" === d && (m(e), u("share-template"), f("share_card_template_click", {
                                    template_name: e.template_id,
                                    template_index: x.indexOf(e) + 1,
                                    project_id: r.project_id,
                                    project_url: r.project_url,
                                    location: o
                                }))
                            },
                            inviteCode: null == g ? void 0 : g.invite_code
                        }), "share-template" === d && (0, l.jsx)(k, {
                            project: r,
                            location: o,
                            initialSelectedTemplate: null != p ? p : void 0,
                            initialTemplates: x,
                            onBack: () => u("main"),
                            inviteCode: null == g ? void 0 : g.invite_code
                        })]
                    })
                }
        },
        46116: (e, t, r) => {
            r.d(t, {
                p: () => m,
                r: () => s
            });
            var l = r(12115),
                a = r(13960),
                n = r(66710);

            function s() {
                let [e, t] = (0, l.useState)(!1), {
                    subscriptionInfo: r
                } = (0, a.R)(), s = (0, n.A)(() => r);
                return {
                    showCreditsModal: e,
                    setShowCreditsModal: t,
                    checkCreditsAndShow: e => {
                        var r;
                        return ((null == e ? void 0 : e.total_credits) || (null == (r = s()) ? void 0 : r.total_credits) || 0) > 0 || (t(!0), !1)
                    }
                }
            }
            var c = r(95155),
                i = r(25427),
                o = r(35695),
                d = r(47650),
                u = r(16618),
                p = r(56389);
            let m = e => {
                let {
                    isOpen: t,
                    onClose: r,
                    from: l
                } = e, {
                    isLoggedIn: a
                } = (0, u.J)(), {
                    track: n
                } = (0, p.s)(), s = (0, o.useRouter)();
                return t ? (0, d.createPortal)((0, c.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/20",
                    children: (0, c.jsxs)("div", {
                        className: "relative w-[270px] rounded-2xl bg-white p-5 shadow-[0px_16px_48px_1px_rgba(0,0,0,0.2)]",
                        children: [(0, c.jsx)("button", {
                            onClick: r,
                            className: "absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-lg text-black/95 hover:bg-black/3",
                            "aria-label": "Close modal",
                            children: (0, c.jsx)(i.Qks, {
                                className: "h-4 w-4"
                            })
                        }), (0, c.jsxs)("div", {
                            className: "flex flex-col items-center text-center",
                            children: [(0, c.jsx)("div", {
                                className: "mt-6 mb-3 flex h-12 w-12 items-center justify-center",
                                children: (0, c.jsx)(i.Djw, {
                                    className: "text-brand h-11 w-11 font-bold"
                                })
                            }), (0, c.jsx)("h2", {
                                className: "mb-3 text-lg font-bold text-black/95",
                                children: "You’re out of credits"
                            }), (0, c.jsx)("p", {
                                className: "mb-17.5 text-sm text-black/65",
                                children: "Upgrade your plan to get more and keep going."
                            }), (0, c.jsx)("button", {
                                onClick: () => {
                                    a && (n("sub_upgrade_click", {
                                        click_from: l
                                    }), s.push("/subscription?location=pop_up&openSelector=true")), r()
                                },
                                className: "bg-brand h-9 w-full cursor-pointer rounded-[10px] text-sm font-medium text-white",
                                children: "Get more credits"
                            })]
                        })]
                    })
                }), document.body) : null
            }
        },
        49972: (e, t, r) => {
            r.d(t, {
                Ks: () => a,
                wg: () => l
            });
            var l = function(e) {
                    return e[e.PUBLIC = 0] = "PUBLIC", e[e.PRIVATE = 1] = "PRIVATE", e
                }({}),
                a = function(e) {
                    return e.DRAFT = "draft", e.PUBLISHED = "published", e
                }({})
        },
        53030: (e, t, r) => {
            r.d(t, {
                SQ: () => u,
                _2: () => p,
                mB: () => m,
                rI: () => o,
                ty: () => d
            });
            var l = r(95155),
                a = r(25427),
                n = r(12115),
                s = r(26846);
            let c = (0, n.createContext)(void 0),
                i = () => {
                    let e = (0, n.useContext)(c);
                    if (!e) throw Error("DropdownMenu components must be used within a DropdownMenu provider");
                    return e
                },
                o = e => {
                    let {
                        children: t,
                        className: r,
                        triggerType: a = "click",
                        hoverDelay: i = 300,
                        onOpenChange: o,
                        disabled: d = !1
                    } = e, [u, p] = (0, n.useState)(!1), m = (0, n.useRef)(null), x = (0, n.useRef)(null), f = (0, n.useRef)(null), h = (0, n.useRef)(null), g = (0, n.useRef)(null);
                    return (0, n.useEffect)(() => {
                        if (u) {
                            let e = e => {
                                var t;
                                !x.current || x.current.contains(e.target) || (null == (t = m.current) ? void 0 : t.contains(e.target)) || (e.stopPropagation(), e.preventDefault(), p(!1))
                            };
                            return document.addEventListener("mousedown", e), () => {
                                document.removeEventListener("mousedown", e)
                            }
                        }
                    }, [u]), (0, n.useEffect)(() => () => {
                        h.current && clearTimeout(h.current), g.current && clearTimeout(g.current)
                    }, []), (0, n.useEffect)(() => {
                        null == o || o(u)
                    }, [u, o]), (0, l.jsx)(c.Provider, {
                        value: {
                            isOpen: u,
                            setIsOpen: p,
                            triggerRef: m,
                            menuRef: x,
                            triggerType: a,
                            openTimeoutRef: g,
                            closeTimeoutRef: h,
                            hoverDelay: i,
                            disabled: d
                        },
                        children: (0, l.jsx)("div", {
                            ref: f,
                            className: (0, s.cn)("relative", r),
                            onMouseLeave: "hover" === a ? () => {
                                g.current && (clearTimeout(g.current), g.current = null), h.current = setTimeout(() => {
                                    p(!1)
                                }, 200)
                            } : void 0,
                            onMouseEnter: "hover" === a ? () => {
                                h.current && (clearTimeout(h.current), h.current = null)
                            } : void 0,
                            children: t
                        })
                    })
                },
                d = e => {
                    let {
                        children: t,
                        className: r
                    } = e, {
                        setIsOpen: a,
                        triggerRef: n,
                        triggerType: c,
                        openTimeoutRef: o,
                        closeTimeoutRef: d,
                        hoverDelay: u,
                        disabled: p
                    } = i();
                    return (0, l.jsx)("div", {
                        ref: n,
                        className: (0, s.cn)(p ? "cursor-not-allowed opacity-50" : "cursor-pointer", r),
                        onClick: e => {
                            e.stopPropagation(), e.preventDefault(), p || ("click" === c ? a(e => !e) : a(!0))
                        },
                        onMouseEnter: () => {
                            "hover" === c && (d.current && (clearTimeout(d.current), d.current = null), o.current = setTimeout(() => {
                                a(!0)
                            }, u))
                        },
                        onMouseLeave: () => {
                            "hover" === c && o.current && (clearTimeout(o.current), o.current = null)
                        },
                        children: t
                    })
                },
                u = e => {
                    let {
                        children: t,
                        className: r,
                        autoPosition: a = !1,
                        estimatedHeight: n
                    } = e, {
                        isOpen: c,
                        menuRef: o,
                        triggerRef: d,
                        disabled: u
                    } = i();
                    return !c || u ? null : (0, l.jsx)("div", {
                        ref: o,
                        className: (0, s.cn)("absolute z-50 space-y-1 rounded-[10px] bg-white p-1 shadow-[0px_16px_48px_1px_rgba(12,12,13,0.1)]", a ? a && d.current && d.current.getBoundingClientRect().top >= (n || 200) ? "bottom-full mb-2" : "top-full mt-2" : "", r),
                        children: t
                    })
                },
                p = e => {
                    let {
                        className: t,
                        icon: r,
                        label: c,
                        rightBlock: o,
                        disabled: d,
                        children: u,
                        onClick: p
                    } = e, {
                        setIsOpen: m
                    } = i(), [x, f] = (0, n.useState)(!1);
                    return (0, l.jsx)("div", {
                        className: (0, s.cn)("flex h-[30px] cursor-pointer items-center justify-between gap-2 rounded-[8px] px-2 hover:bg-black/3", d && "cursor-not-allowed text-black/30 opacity-50", t),
                        onClick: async e => {
                            if (e.stopPropagation(), e.preventDefault(), !d) try {
                                f(!0), await p(e), f(!1), m(!1)
                            } catch (e) {
                                f(!1)
                            }
                        },
                        children: u || (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [r && (x ? (0, l.jsx)(a.xNY, {
                                    className: "h-4 w-4 animate-spin"
                                }) : (0, l.jsx)(r, {
                                    className: "h-4 w-4"
                                })), (0, l.jsx)("span", {
                                    className: "text-[14px] whitespace-nowrap",
                                    style: {
                                        letterSpacing: "-0.4px"
                                    },
                                    children: c
                                })]
                            }), o]
                        })
                    })
                },
                m = e => {
                    let {
                        className: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: (0, s.cn)("my-1 h-[1px] w-full bg-black/6 px-2", t)
                    })
                }
        },
        78161: (e, t, r) => {
            r.d(t, {
                A: () => h
            });
            var l = r(95155),
                a = r(12115),
                n = r(1021),
                s = r(54810),
                c = function(e) {
                    return e.Image = "image", e.Video = "video", e.AnimatedImage = "animated_image", e.Unsupported = "unsupported", e
                }(c || {});
            let i = ["jpg", "jpeg", "png"],
                o = ["gif", "webp"],
                d = ["mp4"],
                u = e => {
                    let {
                        isLoading: t
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "flex h-full w-full flex-col items-center justify-center bg-black/3",
                        children: [(0, l.jsx)("img", {
                            src: "/images/failed-image.svg",
                            alt: "failed",
                            className: "h-[50px] w-[50px]"
                        }), (0, l.jsx)("div", {
                            className: "mt-3 text-[16px] text-black/30",
                            children: t ? "No Cover Detected" : "The cover format is wrong."
                        })]
                    })
                },
                p = () => (0, l.jsxs)("div", {
                    className: "flex h-full w-full flex-col items-center justify-center bg-black/3 pb-10",
                    children: [(0, l.jsx)(n.A, {
                        animationPath: "/animations/lottie-task-loading.json",
                        className: "h-[110px] w-[110px]"
                    }), (0, l.jsx)("div", {
                        className: "mt-[-18px] text-[16px] font-normal text-black/30",
                        children: "Uploading..."
                    })]
                }),
                m = (0, a.memo)(e => {
                    let {
                        url: t,
                        alt: r,
                        className: n
                    } = e, [s, c] = (0, a.useState)(!1);
                    return !t || t.includes("placehold.co") ? (0, l.jsx)(u, {
                        isLoading: !0
                    }) : s ? (0, l.jsx)(u, {
                        isLoading: !1
                    }) : (0, l.jsx)("div", {
                        className: "relative h-full w-full",
                        children: (0, l.jsx)("img", {
                            src: t,
                            alt: null != r ? r : "",
                            loading: "lazy",
                            sizes: "100%",
                            width: "100%",
                            height: "100%",
                            className: "h-full w-full bg-black/3 object-cover ".concat(n),
                            onError: () => {
                                c(!0)
                            }
                        })
                    })
                });
            m.displayName = "ImageCover";
            let x = (0, a.forwardRef)((e, t) => {
                    var r;
                    let {
                        url: n,
                        className: c
                    } = e, i = (0, a.useRef)(null), [o, d] = (0, a.useState)(!1), [p, m] = (0, a.useState)(!1);
                    return (0, a.useEffect)(() => {
                        m((0, s.Fr)())
                    }, []), (0, a.useEffect)(() => {
                        if (t && "object" == typeof t && i.current) {
                            let r = i.current,
                                l = r.play.bind(r),
                                a = r.pause.bind(r);
                            r.play = () => e.alwaysAnimated ? Promise.resolve() : l(), r.pause = () => {
                                e.alwaysAnimated || a()
                            }, t.current = r
                        }
                    }, [e.alwaysAnimated]), (0, l.jsx)("div", {
                        className: "relative h-full w-full overflow-hidden bg-black/3 ".concat(c),
                        children: o ? (0, l.jsx)(u, {
                            isLoading: !1
                        }) : (0, l.jsx)("video", {
                            ref: i,
                            src: n,
                            className: "h-full w-full object-cover",
                            muted: !0,
                            playsInline: !0,
                            loop: null == (r = e.loop) || r,
                            controls: !1,
                            autoPlay: e.alwaysAnimated,
                            onEnded: e.onEnded,
                            onError: () => {
                                d(!0)
                            }
                        })
                    })
                }),
                f = (0, a.memo)((0, a.forwardRef)((e, t) => {
                    if (e.isUploading) return (0, l.jsx)(p, {});
                    switch ((e => {
                        var t, r;
                        if (!e || e.includes("placehold.co")) return "image";
                        if (!URL.canParse(e)) return "unsupported";
                        let l = new URL(e).pathname.split("."),
                            a = l.length > 1 && null != (r = null == (t = l.pop()) ? void 0 : t.toLowerCase()) ? r : "";
                        return d.includes(a) ? "video" : i.includes(a) ? "image" : o.includes(a) ? "animated_image" : "unsupported"
                    })(e.url)) {
                        case "image":
                        case "animated_image":
                            return (0, l.jsx)(m, { ...e
                            });
                        case "video":
                            return (0, l.jsx)(x, { ...e,
                                ref: t
                            });
                        case "unsupported":
                            return (0, l.jsx)(u, {
                                isLoading: !1
                            })
                    }
                    return null
                }));
            f.displayName = "MediaCover";
            let h = f
        },
        83457: (e, t, r) => {
            r.d(t, {
                v: () => a
            });
            var l = r(34477);
            let a = (0, l.createServerReference)("4015009395c11ce591a23c1ccd5d93ff169d9ce30d", l.callServer, void 0, l.findSourceMapURL, "getProjectDetail")
        }
    }
]);