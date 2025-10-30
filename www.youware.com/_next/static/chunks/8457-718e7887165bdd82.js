try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2e15dfb9-08bc-49b5-8e44-b8c3fc71b35f", e._sentryDebugIdIdentifier = "sentry-dbid-2e15dfb9-08bc-49b5-8e44-b8c3fc71b35f")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8457], {
        18457: (e, t, r) => {
            r.d(t, {
                A: () => F
            });
            var n = r(95155);

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    r = atob(e),
                    n = Array(r.length);
                for (let e = 0; e < r.length; e++) n[e] = r.charCodeAt(e);
                return new Blob([new Uint8Array(n)], {
                    type: t
                })
            }
            let i = new Map,
                s = null,
                a = null;
            var l = r(19291),
                d = r(35695),
                c = r(12115),
                u = r(34477);
            let h = (0, u.createServerReference)("70864e8b5357bb5548f6b0396c48092e508dead20b", u.callServer, void 0, u.findSourceMapURL, "innerRequest");
            var g = r(46116);
            let f = "backend.youware.com",
                p = "backend.youware.me",
                m = "backend-staging.youware.me",
                y = [f, p, m],
                v = "api.youware.com",
                w = "".concat(v, "/public/v1/ai/videos/generations"),
                k = "backend.youware.com/__user_info__";
            var I = r(16618),
                b = r(93284),
                E = r(66710);
            let T = (0, u.createServerReference)("402b3ad55522280363d2a135a2614da90e2e441bba", u.callServer, void 0, u.findSourceMapURL, "getProjectUserInfo");
            var R = r(62128),
                _ = r(4821),
                x = r(56389),
                A = r(84842),
                C = r(66139),
                S = r(90198);
            r(96834);
            let M = (0, R.tZ)("Fetch Monitor"),
                j = (0, u.createServerReference)("40e9d3331271713c169ab48e54571f7d1a99cc3a6d", u.callServer, void 0, u.findSourceMapURL, "getUserTokenForAIProject");
            class D extends Error {
                constructor(e, t, r = !1) {
                    super(e), this.code = t, this.retryable = r, this.name = "TokenManagerError"
                }
            }
            class P {
                static async fetchToken(e) {
                    var t, r;
                    let n = await j({
                        project_id: e
                    });
                    if (0 !== n.code) throw O.error("Failed to fetch token", {
                        projectId: e,
                        error: n.message || "Unknown error"
                    }), Error("Failed to fetch token: ".concat(n.message || "Unknown error"));
                    if (!(null == (t = n.data) ? void 0 : t.token) || !(null == (r = n.data) ? void 0 : r.expires_in)) throw O.error("Invalid token response", {
                        projectId: e,
                        error: "Missing token or expires_in"
                    }), Error("Invalid token response: missing token or expires_in");
                    return {
                        token: n.data.token,
                        expires_in: n.data.expires_in
                    }
                }
            }
            let O = (0, R.tZ)("LLMToken");
            class L {
                async getToken() {
                    if (this.isDestroyed) throw new D("TokenManager has been destroyed", "DESTROYED");
                    if (this.tokenInfo && this.tokenInfo.expiresTime > Date.now()) return this.tokenInfo.token;
                    if (this.refreshPromise || (this.refreshPromise = this.refreshToken()), await this.refreshPromise, !this.tokenInfo) throw new D("Failed to obtain token", "FETCH_FAILED");
                    return this.tokenInfo.token
                }
                async forceRefresh() {
                    if (this.isDestroyed) throw new D("TokenManager has been destroyed", "DESTROYED");
                    this.clearRefreshTimer(), this.refreshPromise = this.refreshToken(), await this.refreshPromise
                }
                destroy() {
                    this.isDestroyed = !0, this.clearRefreshTimer(), this.tokenInfo = null, this.refreshPromise = null
                }
                async refreshToken() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (!this.isDestroyed) {
                        this.clearRefreshTimer();
                        try {
                            O.trace("Refreshing llm-token", {
                                projectId: this.config.projectId
                            });
                            let e = await this.tokenFetcher(this.config.projectId);
                            if (!e.token || !e.expires_in) throw new D("Invalid token response", "INVALID_RESPONSE", !0);
                            this.tokenInfo = {
                                token: e.token,
                                expiresTime: Date.now() + 1e3 * e.expires_in - 5e3
                            }, this.scheduleNextRefresh(e.expires_in), this.refreshPromise = null, O.trace("llm-token refreshed successfully", {
                                projectId: this.config.projectId,
                                expiresIn: e.expires_in
                            })
                        } catch (t) {
                            if (this.isRetryableError(t) && e < this.config.retryConfig.maxAttempts) {
                                let r = this.calculateRetryDelay(e);
                                if (O.error("Retrying llm-token fetch (attempt ".concat(e + 1, "/").concat(this.config.retryConfig.maxAttempts, ") in ").concat(r, "ms"), {
                                        projectId: this.config.projectId,
                                        error: t
                                    }), await new Promise(e => {
                                        this.refreshTimer = setTimeout(e, r)
                                    }), !this.isDestroyed) return this.refreshToken(e + 1)
                            } else {
                                this.refreshPromise = null;
                                let r = t instanceof Error ? t.message : String(t),
                                    n = new D("Failed to fetch token after ".concat(e + 1, " attempts: ").concat(r), "MAX_RETRIES_EXCEEDED");
                                throw O.error("Failed to fetch token after ".concat(this.config.retryConfig.maxAttempts, " attempts"), n, {
                                    projectId: this.config.projectId,
                                    originalError: t
                                }), n
                            }
                        }
                    }
                }
                scheduleNextRefresh(e) {
                    if (this.isDestroyed) return;
                    let t = Math.max((e - this.config.refreshAdvanceTime) * 1e3, 1e3);
                    this.refreshTimer = setTimeout(() => {
                        this.isDestroyed || (this.refreshPromise = this.refreshToken())
                    }, t)
                }
                clearRefreshTimer() {
                    this.refreshTimer && (clearTimeout(this.refreshTimer), this.refreshTimer = null)
                }
                isRetryableError(e) {
                    return e instanceof D ? e.retryable : !(e instanceof Error) || e.message.includes("network") || e.message.includes("timeout") || e.message.includes("fetch")
                }
                calculateRetryDelay(e) {
                    return Math.min(this.config.retryConfig.baseDelay * Math.pow(2, e), this.config.retryConfig.maxDelay) + 1e3 * Math.random()
                }
                constructor(e, t) {
                    this.config = e, this.tokenFetcher = t, this.tokenInfo = null, this.refreshPromise = null, this.refreshTimer = null, this.isDestroyed = !1
                }
            }
            let q = {
                    refreshAdvanceTime: 5,
                    maxRetryAttempts: 3,
                    baseRetryDelay: 1e3,
                    maxRetryDelay: 3e4
                },
                W = {
                    AI_APP_VIDEO: "ai_app_video"
                },
                N = (0, R.tZ)("Runtime"),
                U = (0, c.forwardRef)((e, t) => {
                    let {
                        project: r,
                        src: u,
                        mode: b,
                        className: j = "",
                        onLoad: O,
                        onError: U,
                        title: F = "Preview",
                        seamless: H = !1,
                        allow: X = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone; geolocation; fullscreen; payment",
                        sandbox: Y = "allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-popups-to-escape-sandbox",
                        loading: B = "eager",
                        style: z,
                        ...$
                    } = e, J = (0, c.useRef)(null), [K, Z] = (0, c.useState)(() => Date.now()), [V, G] = (0, c.useState)(!0), {
                        track: Q
                    } = (0, x.s)(), [ee, et] = (0, c.useState)(!1), {
                        user: er,
                        isLoggedIn: en
                    } = (0, I.J)(), eo = (0, d.useRouter)(), {
                        getProjectUserInfo: ei
                    } = (e => {
                        let {
                            project: t,
                            user: r
                        } = e, n = (0, c.useRef)((null == t ? void 0 : t.encrypted_yw_id) ? {
                            encrypted_yw_id: t.encrypted_yw_id
                        } : null), o = (0, c.useRef)(r), i = (0, c.useRef)(!1), s = (0, E.A)(() => null == t ? void 0 : t.project_id);
                        (0, c.useEffect)(() => {
                            var e;
                            (null == r ? void 0 : r.ywid) !== (null == (e = o.current) ? void 0 : e.ywid) && (o.current = r, n.current = null, a()), i.current || (i.current = !0, a())
                        }, [r]), (0, c.useEffect)(() => {
                            n.current = null
                        }, [r]);
                        let a = (0, c.useCallback)(async () => {
                            let e = s();
                            if (!e) return null;
                            try {
                                let t = await T({
                                    project_id: e
                                });
                                if (0 === t.code && t.data) return n.current = t.data, t.data;
                                throw Error(t.message || "Failed to fetch project user info")
                            } catch (e) {
                                return e instanceof Error && e.message, R.Ay.error("Error fetching project user info:", e), null
                            }
                        }, []);
                        return {
                            getProjectUserInfo: (0, c.useCallback)(async () => n.current ? n.current : a(), [a])
                        }
                    })({
                        project: r,
                        user: er
                    }), es = (0, E.A)(() => r.project_id), ea = (0, E.A)(() => "editor" === b ? "draft" : ""), el = (0, E.A)(() => en), ed = (0, E.A)(() => null == er ? void 0 : er.uid);
                    ! function(e) {
                        let t = (0, E.A)(e.getLoginStatus),
                            r = (0, E.A)(e.requestLogin);
                        (0, c.useEffect)(() => (l.d.onInvoke("getLoginStatus", async () => t()), l.d.onInvoke("requestLogin", async e => r(e)), () => {
                            l.d.offInvoke("getLoginStatus"), l.d.offInvoke("requestLogin")
                        }), [t, r])
                    }({
                        getLoginStatus: () => Promise.resolve({
                            isLoggedIn: null != en && en
                        }),
                        requestLogin: async e => new Promise((t, r) => {
                            el() ? t({
                                isLoggedIn: !0
                            }) : (0, _.S)({
                                title: "Please log in to continue.",
                                description: (null == e ? void 0 : e.description) || "You'll need to log in to continue your activity.",
                                cancelText: "Cancel",
                                confirmText: "Log in",
                                onCancel: () => {
                                    r(Error("User cancelled login"))
                                },
                                onConfirm: () => {
                                    let e = (0, C.$)(!0, !0) + window.location.pathname + window.location.search;
                                    eo.push("".concat((0, C.$)(!0), "/login?returnTo=").concat(encodeURIComponent(e))), ef.current = e => {
                                        e ? t({
                                            isLoggedIn: !0
                                        }) : r(Error("Login failed"))
                                    }
                                }
                            })
                        })
                    }),
                    function(e) {
                        let t = (0, E.A)(e.innerRequest);
                        (0, c.useEffect)(() => {
                            l.d.onInvoke("innerRequest", async e => t(e.apiName, e.params))
                        }, [t])
                    }({
                        innerRequest: async (e, t) => {
                            N.info("innerRequest", {
                                apiName: e,
                                params: t
                            }), await new Promise((e, t) => {
                                el() ? e(!0) : (0, _.S)({
                                    title: "Please log in to continue.",
                                    description: "You'll need to log in to take part in this activity.",
                                    cancelText: "Cancel",
                                    confirmText: "Log in",
                                    onCancel: () => {
                                        t(Error("Login required"))
                                    },
                                    onConfirm: () => {
                                        let r = (0, C.$)(!0, !0) + window.location.pathname + window.location.search;
                                        eo.push("".concat((0, C.$)(!0), "/login?returnTo=").concat(encodeURIComponent(r))), ef.current = r => {
                                            r ? e(!0) : t(Error("Login failed"))
                                        }
                                    }
                                })
                            });
                            try {
                                let n = await h(e, t, {
                                    projectId: r.project_id
                                });
                                return N.info("innerRequest result", n), n
                            } catch (e) {
                                throw N.error("innerRequest error", e), e
                            }
                        }
                    }), (0, c.useImperativeHandle)(t, () => {
                        let e = {
                            getIframe: () => J.current,
                            refresh: () => {
                                G(!0), Z(Date.now())
                            }
                        };
                        return "editor" === b ? { ...e,
                            toggleConsole: e => {
                                l.d.sendEvent("toggle_console", {
                                    visible: e
                                })
                            },
                            clearConsole: () => {
                                l.d.sendEvent("clear_console", void 0)
                            },
                            addConsoleLog: function(e, t) {
                                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                                l.d.sendEvent("add_console_log", {
                                    level: e,
                                    message: t,
                                    args: r
                                })
                            }
                        } : { ...e
                        }
                    }, [b, u]);
                    let {
                        getToken: ec,
                        forceRefresh: eu,
                        isLoading: eh,
                        error: eg
                    } = function(e) {
                        let {
                            projectId: t,
                            refreshAdvanceTime: r = q.refreshAdvanceTime,
                            maxRetryAttempts: n = q.maxRetryAttempts,
                            baseRetryDelay: o = q.baseRetryDelay,
                            maxRetryDelay: i = q.maxRetryDelay
                        } = e, [s, a] = (0, c.useState)(!1), [l, d] = (0, c.useState)(null), u = (0, c.useRef)(null);
                        return (0, c.useEffect)(() => (u.current = new L({
                            projectId: t,
                            refreshAdvanceTime: r,
                            retryConfig: {
                                maxAttempts: n,
                                baseDelay: o,
                                maxDelay: i
                            }
                        }, P.fetchToken), () => {
                            var e;
                            null == (e = u.current) || e.destroy(), u.current = null
                        }), [t, r, n, o, i]), {
                            getToken: (0, c.useCallback)(async () => {
                                if (!u.current) throw new D("TokenManager not initialized", "NOT_INITIALIZED");
                                a(!0), d(null);
                                try {
                                    return await u.current.getToken()
                                } catch (t) {
                                    let e = t instanceof D ? t : new D(t instanceof Error ? t.message : String(t), "UNKNOWN_ERROR");
                                    throw d(e), e
                                } finally {
                                    a(!1)
                                }
                            }, []),
                            forceRefresh: (0, c.useCallback)(async () => {
                                if (!u.current) throw new D("TokenManager not initialized", "NOT_INITIALIZED");
                                a(!0), d(null);
                                try {
                                    await u.current.forceRefresh()
                                } catch (t) {
                                    let e = t instanceof D ? t : new D(t instanceof Error ? t.message : String(t), "UNKNOWN_ERROR");
                                    throw d(e), e
                                } finally {
                                    a(!1)
                                }
                            }, []),
                            isLoading: s,
                            error: l
                        }
                    }({
                        projectId: r.project_id
                    }), ef = (0, c.useRef)(null);
                    return (0, c.useEffect)(() => {
                        let e = e => {
                            e.data && "login_finished" === e.data.type && ef.current && (ef.current(e.data.success), ef.current = null)
                        };
                        return window.addEventListener("message", e), () => {
                            window.removeEventListener("message", e)
                        }
                    }, []), (0, c.useEffect)(() => {
                        let e = function(e) {
                                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                return async r => {
                                    if (!("function" == typeof t ? t(r) : t)) return;
                                    let n = await e();
                                    r.headers.set("Authorization", "Bearer ".concat(n))
                                }
                            }(async () => {
                                N.info("getToken", {
                                    projectId: r.project_id
                                }), await new Promise((e, t) => {
                                    el() ? e(!0) : (0, _.S)({
                                        title: "Want to use this AI app?",
                                        description: "AI apps consume Credits. Log in to unlock an amazing experience!",
                                        cancelText: "Cancel",
                                        confirmText: "Log in",
                                        onCancel: () => {
                                            t(Error("Login required"))
                                        },
                                        onConfirm: () => {
                                            let t = (0, C.$)(!0, !0) + window.location.pathname + window.location.search;
                                            eo.push("/login?returnTo=".concat(encodeURIComponent(t))), ef.current = e
                                        }
                                    })
                                });
                                let e = await ec();
                                return N.info("getToken success", {
                                    projectId: r.project_id
                                }), e
                            }, e => e.url.includes(v)),
                            t = async e => {
                                e.url.includes(k) && (await new Promise((e, t) => {
                                    el() ? e(!0) : (0, _.S)({
                                        title: "Ready to try this app?",
                                        description: "You need to log in to use this interactive app. Join in for the full experience!",
                                        cancelText: "Cancel",
                                        confirmText: "Log in",
                                        onCancel: () => {
                                            t(Error("Login required"))
                                        },
                                        onConfirm: () => {
                                            let t = (0, C.$)(!0, !0) + window.location.pathname + window.location.search;
                                            eo.push("/login?returnTo=".concat(encodeURIComponent(t))), ef.current = e
                                        }
                                    })
                                }), await ei())
                            },
                            n = async e => {
                                if (e.url.includes(w)) {
                                    let e = function(e) {
                                            let {
                                                projectId: t = "unknown",
                                                uid: r = "unknown",
                                                scene: n = "default"
                                            } = e;
                                            return "".concat(t, "__").concat(r, "__").concat(n)
                                        }({
                                            projectId: es(),
                                            uid: ed(),
                                            scene: W.AI_APP_VIDEO
                                        }),
                                        t = function(e) {
                                            try {
                                                let t = localStorage.getItem(e);
                                                if (!t) return null;
                                                return JSON.parse(t)
                                            } catch (e) {
                                                return console.warn("Failed to get storage:", e), null
                                            }
                                        }(e);
                                    await new Promise((r, n) => {
                                        t ? r(!0) : (0, _.S)({
                                            title: "High Credit Cost",
                                            description: "This action will use 200+ credits. Are you sure you want to continue?",
                                            cancelText: "Cancel",
                                            confirmText: "Confirm",
                                            onCancel: () => {
                                                n(Error("USER_CANCELLED_HIGH_COST_REQUEST: The user declined to proceed with this high-cost request; operation canceled by user."))
                                            },
                                            onConfirm: () => {
                                                try {
                                                    localStorage.setItem(e, JSON.stringify({
                                                        confirmed: !0
                                                    }))
                                                } catch (e) {
                                                    console.warn("Failed to set storage:", e)
                                                }
                                                r(!0)
                                            }
                                        })
                                    })
                                }
                            },
                            d = async e => {
                                let t = "http://yourware-backend-prod.yourware-service-discovery-prod:8000";
                                if (e.url.includes(k) && (e.url = ((e, t) => {
                                        let r = "".concat("/api", "/").concat(e.startsWith("/") ? e.replace("/", "") : e),
                                            n = new URLSearchParams;
                                        t && Object.entries(t).forEach(e => {
                                            let [t, r] = e;
                                            n.append(t, r)
                                        });
                                        let o = n.toString();
                                        return o ? "".concat(r, "?").concat(o) : r
                                    })("/external_user_info", {
                                        project_id: es()
                                    })), t && e.url.includes(v)) {
                                    let r = "aiapp.youware.com",
                                        n = t.match(/staging(\d*)/i);
                                    if (n) {
                                        let e = n[1] || "";
                                        r = "aiapp-staging".concat(e, ".youware.com")
                                    }
                                    e.url = e.url.replace(v, r)
                                }
                                if (t && e.url.includes(f)) {
                                    let r = p;
                                    t.match(/staging(\d*)/i) && (r = m), e.url = e.url.replace(f, r)
                                }
                            },
                            c = async e => {
                                if (y.some(t => e.url.includes(t))) {
                                    let t = await ei();
                                    e.url.includes(k) ? (e.headers.set("X-Yw-Authorized", "1"), e.headers.set("X-Is-Login", el() ? "1" : "0")) : (e.headers.set("X-Is-Login", el() ? "1" : "0"), e.headers.set("X-Project-ID", es())), e.headers.set("X-Encrypted-Yw-ID", (null == t ? void 0 : t.encrypted_yw_id) || ""), e.headers.set("X-Yw-Env", ea())
                                }
                            },
                            u = async e => {
                                Q("call_ai_adk", {
                                    method: e.method,
                                    url: e.url,
                                    project_id: es(),
                                    runtime_mode: b,
                                    fetch_duration: e.duration
                                });
                                let t = e.response.headers.get("X-YW-Status"),
                                    r = e.response.headers.get("X-YW-Message"),
                                    n = e.response.headers.get("X-YW-Request-Id");
                                if (t && "0" !== t) {
                                    if (Q("call_ai_adk_error", {
                                            method: e.method,
                                            url: e.url,
                                            project_id: es(),
                                            runtime_mode: b,
                                            status: t,
                                            message: r,
                                            requestId: n
                                        }), "40200" === t) {
                                        et(!0), A.X.sendMessage("CreditsUpdated");
                                        return
                                    }
                                    if (function(e) {
                                            return "string" == typeof e && /^429\d{2}$/.test(e)
                                        }(t)) return void(0, S.Tp)({
                                        message: "Video generation servers are busy. Try again later.",
                                        type: "error",
                                        duration: 3e3,
                                        targetElement: J.current
                                    });
                                    (0, S.Tp)({
                                        message: "API Request failed".concat(r ? ": " + r.slice(0, 100) : ""),
                                        type: "error",
                                        duration: 3e3,
                                        targetElement: J.current
                                    })
                                }
                            };
                        return ! function(e) {
                            let {
                                messageManager: t,
                                monitor: r,
                                hooks: n
                            } = e;
                            a = t, t.onInvoke("fetch-proxy:fetch", async e => {
                                let t = Date.now();
                                try {
                                    var s;
                                    let a = (s = e.headers, new Headers(s.entries)),
                                        l = e.body ? function(e) {
                                            switch (e.type) {
                                                case "null":
                                                    return null;
                                                case "string":
                                                case "json":
                                                    return e.data;
                                                case "urlsearchparams":
                                                    return new URLSearchParams(e.data);
                                                case "formdata":
                                                    {
                                                        let t = new FormData;
                                                        for (let [r, n] of e.data)
                                                            if ("string" == typeof n) t.append(r, n);
                                                            else {
                                                                let e = new File([o(n.content, n.type)], n.name, {
                                                                    type: n.type,
                                                                    lastModified: n.lastModified
                                                                });
                                                                t.append(r, e)
                                                            }
                                                        return t
                                                    }
                                                case "blob":
                                                    return o(e.data.content, e.data.type);
                                                case "arraybuffer":
                                                    return function(e) {
                                                        let t = atob(e),
                                                            r = t.length,
                                                            n = new Uint8Array(r);
                                                        for (let e = 0; e < r; e++) n[e] = t.charCodeAt(e);
                                                        return n.buffer
                                                    }(e.data);
                                                case "stream":
                                                    return o(e.data, "application/octet-stream");
                                                default:
                                                    throw Error("Unknown serialized body type: ".concat(e.type))
                                            }
                                        }(e.body) : null;
                                    l instanceof FormData && a.has("content-type") && a.delete("content-type"), (null == r ? void 0 : r.onRequest) && await r.onRequest({
                                        requestId: e.requestId,
                                        url: e.url,
                                        method: e.method,
                                        headers: a,
                                        body: l,
                                        timestamp: t
                                    });
                                    let d = {
                                            method: e.method,
                                            headers: a,
                                            body: l,
                                            credentials: e.credentials,
                                            mode: e.mode,
                                            cache: e.cache,
                                            redirect: e.redirect,
                                            referrer: e.referrer,
                                            referrerPolicy: e.referrerPolicy,
                                            integrity: e.integrity,
                                            keepalive: e.keepalive
                                        },
                                        c = {
                                            requestId: e.requestId,
                                            url: e.url,
                                            method: e.method,
                                            headers: a,
                                            body: l,
                                            requestInit: d
                                        };
                                    (null == n ? void 0 : n.beforeSend) && await n.beforeSend(c);
                                    let u = c.url,
                                        h = new AbortController;
                                    d.signal = h.signal;
                                    let g = await fetch(u, d),
                                        f = {
                                            requestId: e.requestId,
                                            url: u,
                                            method: e.method,
                                            request: c,
                                            response: g,
                                            duration: Date.now() - t
                                        };
                                    if ((null == n ? void 0 : n.afterResponse) && await n.afterResponse(f), g.body) {
                                        let r = g.body.getReader();
                                        i.set(e.requestId, {
                                            reader: r,
                                            abortController: h,
                                            chunks: [],
                                            startTime: t,
                                            response: g,
                                            requestId: e.requestId
                                        })
                                    } else(null == r ? void 0 : r.onResponse) && await r.onResponse({
                                        requestId: e.requestId,
                                        status: g.status,
                                        statusText: g.statusText,
                                        headers: g.headers,
                                        duration: Date.now() - t,
                                        body: null
                                    });
                                    return {
                                        requestId: e.requestId,
                                        status: g.status,
                                        statusText: g.statusText,
                                        headers: function(e) {
                                            let t = [];
                                            return e.forEach((e, r) => {
                                                t.push([r, e])
                                            }), {
                                                entries: t
                                            }
                                        }(g.headers),
                                        type: g.type,
                                        url: g.url,
                                        redirected: g.redirected,
                                        ok: g.ok,
                                        bodyUsed: !1
                                    }
                                } catch (t) {
                                    throw (null == r ? void 0 : r.onError) && await r.onError({
                                        requestId: e.requestId,
                                        type: t instanceof Error && "AbortError" === t.name ? "abort" : "network",
                                        message: t instanceof Error ? t.message : String(t)
                                    }), i.delete(e.requestId), t
                                }
                            }), t.onInvoke("fetch-proxy:stream-read", async e => {
                                let {
                                    requestId: n,
                                    chunkIndex: o
                                } = e, s = i.get(n);
                                if (!s) throw Error("No active stream for request ".concat(n));
                                try {
                                    let {
                                        done: e,
                                        value: a
                                    } = await s.reader.read();
                                    if (e) {
                                        if (null == r ? void 0 : r.onResponse) {
                                            let e = s.chunks.reduce((e, t) => e + t.length, 0),
                                                t = new Uint8Array(e),
                                                n = 0;
                                            for (let e of s.chunks) t.set(e, n), n += e.length;
                                            let o = function(e, t) {
                                                var r;
                                                let n = (null == (r = t.get("content-type")) ? void 0 : r.toLowerCase()) || "";
                                                if (0 === e.byteLength) return null;
                                                try {
                                                    if (n.includes("application/json")) {
                                                        let t = new TextDecoder().decode(e);
                                                        return JSON.parse(t)
                                                    }
                                                    if (n.includes("text/") || n.includes("application/xml") || n.includes("application/javascript") || n.includes("application/x-www-form-urlencoded")) return new TextDecoder().decode(e);
                                                    return e
                                                } catch (t) {
                                                    if (console.warn("[Fetch Proxy] Failed to parse response body:", t), n.includes("application/json") || n.includes("text/")) try {
                                                        return new TextDecoder().decode(e)
                                                    } catch (e) {}
                                                    return e
                                                }
                                            }(t.buffer, s.response.headers);
                                            r.onResponse({
                                                requestId: s.requestId,
                                                status: s.response.status,
                                                statusText: s.response.statusText,
                                                headers: s.response.headers,
                                                duration: Date.now() - s.startTime,
                                                body: o
                                            })
                                        }
                                        return i.delete(n), t.sendEvent("fetch-proxy:stream-control", {
                                            requestId: n,
                                            action: "end"
                                        }), {
                                            requestId: n,
                                            chunk: new ArrayBuffer(0),
                                            done: !0,
                                            index: o
                                        }
                                    }(null == r ? void 0 : r.onResponse) && s.chunks.push(a);
                                    let l = new ArrayBuffer(a.byteLength);
                                    return new Uint8Array(l).set(a), {
                                        requestId: n,
                                        chunk: l,
                                        done: !1,
                                        index: o
                                    }
                                } catch (e) {
                                    throw console.error("[Fetch Proxy Handler] Error in stream read:", e), i.delete(n), t.sendEvent("fetch-proxy:stream-control", {
                                        requestId: n,
                                        action: "error",
                                        error: e instanceof Error ? e.message : String(e)
                                    }), (null == r ? void 0 : r.onError) && r.onError({
                                        requestId: n,
                                        type: e instanceof Error && "AbortError" === e.name ? "abort" : "network",
                                        message: e instanceof Error ? e.message : String(e)
                                    }), e
                                }
                            }), s = t.onEvent("fetch-proxy:stream-control", e => {
                                if ("abort" === e.action) {
                                    let t = i.get(e.requestId);
                                    t && (t.reader.cancel(), t.abortController.abort(), i.delete(e.requestId))
                                }
                            }), console.log("[Fetch Proxy Handler] Initialized on parent side")
                        }({
                            messageManager: l.d,
                            monitor: {
                                onRequest: async e => {},
                                onResponse: e => {
                                    let t = function(e) {
                                        var t, r;
                                        let n = e.body;
                                        if (((null == (r = e.headers) || null == (t = r.get) ? void 0 : t.call(r, "content-type")) || "").includes("text/event-stream") && "string" == typeof e.body) try {
                                            n = function(e) {
                                                if (!e || "string" != typeof e) return e;
                                                let t = e.split("\n"),
                                                    r = [],
                                                    n = {},
                                                    o = "";
                                                for (let e of t) {
                                                    if ("" === e.trim()) {
                                                        Object.keys(n).length > 0 && (r.push({ ...n
                                                        }), n = {});
                                                        continue
                                                    }
                                                    if (e.startsWith("data: ")) {
                                                        let t = e.substring(6).trim();
                                                        if ("[DONE]" === t) {
                                                            n.type = "done";
                                                            continue
                                                        }
                                                        try {
                                                            let e = JSON.parse(t);
                                                            n = { ...n,
                                                                ...e
                                                            }, e.choices && e.choices[0] && e.choices[0].delta && e.choices[0].delta.content ? o += e.choices[0].delta.content : e.delta && e.delta.content ? o += e.delta.content : e.content && (o += e.content)
                                                        } catch (e) {
                                                            o += t
                                                        }
                                                    } else e.startsWith("event: ") ? n.event = e.substring(7).trim() : e.startsWith("id: ") ? n.id = e.substring(4).trim() : e.startsWith("retry: ") && (n.retry = parseInt(e.substring(7).trim(), 10))
                                                }
                                                return Object.keys(n).length > 0 && r.push(n), {
                                                    streamContent: o.trim() || null
                                                }
                                            }(e.body)
                                        } catch (t) {
                                            M.error("Failed to parse SSE content:", t instanceof Error ? t : Error(String(t))), n = e.body
                                        }
                                        return n
                                    }(e);
                                    if (e.status >= 300) {
                                        var r, n;
                                        M.error("request failed", {
                                            message: e.statusText,
                                            status: e.status,
                                            duration: e.duration,
                                            xw_status: null == (r = e.headers) ? void 0 : r.get("X-YW-Status"),
                                            xw_message: null == (n = e.headers) ? void 0 : n.get("X-YW-Message"),
                                            body: t
                                        })
                                    }
                                },
                                onError: e => {
                                    M.error("request failed", {
                                        message: e.message
                                    })
                                }
                            },
                            hooks: {
                                beforeSend: function() {
                                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                    return async e => {
                                        for (let r of t) await r(e)
                                    }
                                }(e, t, n, c, d),
                                afterResponse: function() {
                                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                    return async e => {
                                        for (let r of t) await r(e)
                                    }
                                }(u)
                            }
                        }), () => {
                            for (let [e, t] of i) t.reader.cancel(), t.abortController.abort();
                            i.clear(), a && (a.offInvoke("fetch-proxy:fetch"), a.offInvoke("fetch-proxy:stream-read"), a = null), s && (s(), s = null)
                        }
                    }, []), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(g.p, {
                            isOpen: ee,
                            onClose: () => et(!1),
                            from: "editor" === b ? "editor_AI_API_pop_up" : "app_page_AI_API_pop_up"
                        }), (0, n.jsx)("div", {
                            className: "flex h-full w-full justify-center",
                            children: u ? (0, n.jsx)("iframe", {
                                ref: J,
                                id: "youware-runtime",
                                src: u,
                                title: F,
                                className: j,
                                loading: B,
                                seamless: H,
                                allow: X,
                                sandbox: Y,
                                onLoad: e => {
                                    G(!1), null == O || O()
                                },
                                onError: e => {
                                    G(!1), null == U || U(e.toString())
                                },
                                style: z,
                                ...$
                            }, K) : (0, n.jsx)("div", {
                                className: j
                            })
                        })]
                    })
                });
            U.displayName = "Runtime";
            let F = (0, b.A)(U)
        },
        19291: (e, t, r) => {
            r.d(t, {
                d: () => o
            });
            class n {
                defaultGenerateMessageId() {
                    return Date.now() + Math.random().toString(36).substring(2)
                }
                get targetWindow() {
                    if (this.customTargetWindow) return this.customTargetWindow;
                    if (this.isParent) {
                        var e;
                        return null == (e = document.querySelector(this.iframeSelector)) ? void 0 : e.contentWindow
                    }
                    return window.parent
                }
                get targetOrigin() {
                    return this.customTargetOrigin ? this.customTargetOrigin : "*"
                }
                allowOrigin(e) {
                    let t = this.allowedOrigins.some(t => new RegExp(t).test(e));
                    if (!t) {
                        var r;
                        null == (r = this.logger) || r.warn("Origin rejected", {
                            origin: e,
                            allowedPatterns: this.allowedOrigins
                        })
                    }
                    return t
                }
                setTarget(e) {
                    var t;
                    this.customTargetWindow = e.window, this.customTargetOrigin = e.origin, null == (t = this.logger) || t.info("Target updated", {
                        hasWindow: !!e.window,
                        origin: e.origin
                    })
                }
                addAllowedOrigin(e) {
                    if (!this.allowedOrigins.includes(e)) {
                        var t;
                        this.allowedOrigins.push(e), null == (t = this.logger) || t.info("Added allowed origin pattern", {
                            pattern: e,
                            totalPatterns: this.allowedOrigins.length
                        })
                    }
                }
                removeAllowedOrigin(e) {
                    let t = this.allowedOrigins.indexOf(e);
                    if (t > -1) {
                        var r;
                        this.allowedOrigins.splice(t, 1), null == (r = this.logger) || r.info("Removed allowed origin pattern", {
                            pattern: e,
                            totalPatterns: this.allowedOrigins.length
                        })
                    }
                }
                sendEvent(e, t) {
                    var r;
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e3,
                        i = this.generateMessageId();
                    null == (r = this.logger) || r.info("Sending event", {
                        event: e,
                        messageId: i,
                        dataType: typeof t,
                        maxRetries: n,
                        timeout: o
                    }), this.sendMessageWithRetry({
                        id: i,
                        type: "event",
                        event: e,
                        data: t
                    }, n, o)
                }
                sendEventWithTransferable(e, t, r) {
                    var n;
                    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1e3,
                        s = this.generateMessageId();
                    null == (n = this.logger) || n.info("Sending event with transferable", {
                        event: e,
                        messageId: s,
                        dataType: typeof t,
                        transferableCount: r.length,
                        maxRetries: o,
                        timeout: i
                    }), this.sendMessageWithRetry({
                        id: s,
                        type: "event",
                        event: e,
                        data: t
                    }, o, i, r)
                }
                invoke(e, t) {
                    return new Promise((r, n) => {
                        var o, i;
                        let s = this.generateMessageId();
                        null == (o = this.logger) || o.info("Invoking remote method", {
                            event: e,
                            messageId: s,
                            dataType: typeof t
                        }), this.invokeCallbacks.set(s, {
                            resolve: r,
                            reject: n
                        });
                        let a = setTimeout(() => {
                            if (this.invokeCallbacks.get(s)) {
                                var t;
                                this.invokeCallbacks.delete(s);
                                let r = "Invoke ACK timeout: ".concat(e);
                                null == (t = this.logger) || t.error(r, {
                                    event: e,
                                    messageId: s
                                }), n(Error(r))
                            }
                        }, 5e3);
                        this.pending.set(s, {
                            timer: a,
                            attempt: 0
                        }), null == (i = this.targetWindow) || i.postMessage({
                            id: s,
                            type: "invoke",
                            event: e,
                            data: t
                        }, this.targetOrigin)
                    })
                }
                invokeWithTransferable(e, t, r) {
                    return new Promise((n, o) => {
                        var i, s;
                        let a = this.generateMessageId();
                        null == (i = this.logger) || i.info("Invoking remote method with transferable", {
                            event: e,
                            messageId: a,
                            dataType: typeof t,
                            transferableCount: r.length
                        }), this.invokeCallbacks.set(a, {
                            resolve: n,
                            reject: o
                        });
                        let l = setTimeout(() => {
                            if (this.invokeCallbacks.get(a)) {
                                var t;
                                this.invokeCallbacks.delete(a);
                                let r = "Invoke ACK timeout: ".concat(e);
                                null == (t = this.logger) || t.error(r, {
                                    event: e,
                                    messageId: a
                                }), o(Error(r))
                            }
                        }, 5e3);
                        this.pending.set(a, {
                            timer: l,
                            attempt: 0
                        }), null == (s = this.targetWindow) || s.postMessage({
                            id: a,
                            type: "invoke",
                            event: e,
                            data: t
                        }, this.targetOrigin, r)
                    })
                }
                sendMessageWithRetry(e, t, r, n) {
                    var o = this;
                    let i = function() {
                        var s, a;
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (l > 0 && (null == (a = o.logger) || a.warn("Message retry attempt", {
                                event: e.event,
                                messageId: e.id,
                                attempt: l + 1,
                                maxAttempts: t + 1
                            })), null == (s = o.targetWindow) || s.postMessage(e, o.targetOrigin, n), "event" === e.type) {
                            let n = setTimeout(() => {
                                if (l >= t) {
                                    var r;
                                    o.pending.delete(e.id), null == (r = o.logger) || r.error("Message failed after all retries", {
                                        event: e.event,
                                        messageId: e.id,
                                        totalAttempts: l + 1
                                    });
                                    return
                                }
                                i(l + 1)
                            }, r * 2 ** l);
                            o.pending.set(e.id, {
                                timer: n,
                                attempt: l
                            })
                        }
                    };
                    i()
                }
                listen() {
                    var e;
                    null == (e = this.logger) || e.info("Started listening for messages"), window.addEventListener("message", e => {
                        var t, r, n;
                        if (!this.allowOrigin(e.origin) || !(null == (t = e.data) ? void 0 : t.type) || !(null == (r = e.data) ? void 0 : r.id)) return;
                        let o = e.data;
                        switch (null == (n = this.logger) || n.info("Received message", {
                            type: o.type,
                            event: o.event,
                            messageId: o.id,
                            origin: e.origin
                        }), o.type) {
                            case "event":
                                this.sendAck(o.id, e.origin);
                                let i = this.eventHandlers[o.event];
                                i && i.length > 0 && i.forEach(e => {
                                    try {
                                        e(o.data)
                                    } catch (e) {
                                        var t;
                                        null == (t = this.logger) || t.error("Event handler error", {
                                            event: o.event,
                                            error: e instanceof Error ? e.message : String(e)
                                        })
                                    }
                                });
                                break;
                            case "invoke":
                                this.sendAck(o.id, e.origin), this.handleInvoke(o, e.origin);
                                break;
                            case "response":
                                this.handleResponse(o);
                                break;
                            case "ack":
                                this.handleAck(o)
                        }
                    })
                }
                sendAck(e, t) {
                    var r;
                    let n = {
                        id: this.generateMessageId(),
                        type: "ack",
                        event: "ack",
                        originalId: e
                    };
                    null == (r = this.targetWindow) || r.postMessage(n, t)
                }
                async handleInvoke(e, t) {
                    var r, n, o, i, s, a, l;
                    try {
                        let a = this.invokeHandlers[e.event];
                        if (!a) {
                            let t = "No handler for invoke: ".concat(e.event);
                            throw null == (n = this.logger) || n.error(t, {
                                event: e.event,
                                messageId: e.id
                            }), Error(t)
                        }
                        null == (r = this.logger) || r.debug("Executing invoke handler", {
                            event: e.event,
                            messageId: e.id
                        });
                        let l = await a(e.data),
                            d = {
                                id: this.generateMessageId(),
                                type: "response",
                                event: "response",
                                originalId: e.id,
                                data: l
                            },
                            c = this.extractTransferableFromResult(l);
                        c.length > 0 ? (null == (o = this.logger) || o.debug("Sending response with transferable objects", {
                            event: e.event,
                            originalId: e.id,
                            transferableCount: c.length
                        }), null == (i = this.targetWindow) || i.postMessage(d, t, c)) : null == (s = this.targetWindow) || s.postMessage(d, t)
                    } catch (o) {
                        let r = o instanceof Error ? o.message : String(o);
                        null == (a = this.logger) || a.error("Invoke handler failed", {
                            event: e.event,
                            messageId: e.id,
                            error: r
                        });
                        let n = {
                            id: this.generateMessageId(),
                            type: "response",
                            event: "response",
                            originalId: e.id,
                            error: r
                        };
                        null == (l = this.targetWindow) || l.postMessage(n, t)
                    }
                }
                extractTransferableFromResult(e) {
                    let t = [];
                    if (!e) return t;
                    if (e.buffer instanceof ArrayBuffer) t.push(e.buffer);
                    else if (e instanceof ArrayBuffer) t.push(e);
                    else if ("object" == typeof e)
                        for (let r of Object.values(e)) r instanceof ArrayBuffer ? t.push(r) : r && "object" == typeof r && "buffer" in r && r.buffer instanceof ArrayBuffer && t.push(r.buffer);
                    return t
                }
                handleResponse(e) {
                    var t, r, n;
                    let o = this.invokeCallbacks.get(e.originalId);
                    o ? (e.error ? (null == (t = this.logger) || t.error("Invoke failed with error", {
                        originalId: e.originalId,
                        error: e.error
                    }), o.reject(Error(e.error))) : (null == (r = this.logger) || r.info("Invoke completed successfully", {
                        originalId: e.originalId,
                        resultType: typeof e.data
                    }), o.resolve(e.data)), this.invokeCallbacks.delete(e.originalId)) : null == (n = this.logger) || n.warn("No callback found for response", {
                        originalId: e.originalId
                    })
                }
                handleAck(e) {
                    var t, r;
                    let {
                        originalId: n
                    } = e, o = this.pending.get(n);
                    o ? (clearTimeout(o.timer), this.pending.delete(n), null == (t = this.logger) || t.debug("ACK received, cleared timeout", {
                        originalId: n
                    })) : null == (r = this.logger) || r.warn("Received ACK for unknown message", {
                        originalId: n
                    })
                }
                onEvent(e, t) {
                    var r;
                    return this.eventHandlers[e] || (this.eventHandlers[e] = []), this.eventHandlers[e].push(t), null == (r = this.logger) || r.info("Registered event handler", {
                        event: e,
                        handlerCount: this.eventHandlers[e].length
                    }), () => {
                        let r = this.eventHandlers[e];
                        if (r) {
                            let o = r.indexOf(t);
                            if (o > -1) {
                                var n;
                                r.splice(o, 1), null == (n = this.logger) || n.info("Removed specific event handler", {
                                    event: e,
                                    remainingHandlers: r.length
                                }), 0 === r.length && delete this.eventHandlers[e]
                            }
                        }
                    }
                }
                onInvoke(e, t) {
                    var r;
                    this.invokeHandlers[e] = t, null == (r = this.logger) || r.info("Registered invoke handler", {
                        event: e
                    })
                }
                offInvoke(e) {
                    var t;
                    delete this.invokeHandlers[e], null == (t = this.logger) || t.info("Removed invoke handler", {
                        event: e
                    })
                }
                updateLogConfig(e) {
                    var t;
                    void 0 !== e.logger && (this.logger = e.logger), null == (t = this.logger) || t.info("Log configuration updated", e)
                }
                destroy() {
                    var e, t;
                    null == (e = this.logger) || e.info("Starting MessageManager cleanup"), this.pending.forEach((e, t) => {
                        clearTimeout(e.timer)
                    }), this.pending.clear(), this.invokeCallbacks.forEach((e, t) => {
                        e.reject(Error("MessageManager destroyed"))
                    }), this.invokeCallbacks.clear(), this.eventHandlers = {}, this.invokeHandlers = {}, null == (t = this.logger) || t.info("MessageManager destroyed")
                }
                constructor(e) {
                    var t;
                    this.eventHandlers = {}, this.invokeHandlers = {}, this.invokeCallbacks = new Map, this.isParent = e.isParent, this.pending = new Map, this.allowedOrigins = e.allowedOrigins || ["yourware\\.app", "yourware\\.so", "youware\\.com", "localhost|127\\.0\\.0\\.1", "csb\\.app"], this.iframeSelector = e.iframeSelector || "#youware-runtime", this.generateMessageId = e.generateMessageId || this.defaultGenerateMessageId, this.logger = e.logger, null == (t = this.logger) || t.info("MessageManager initialized", {
                        envType: this.isParent ? "parent" : "child",
                        allowedOrigins: this.allowedOrigins,
                        iframeSelector: this.iframeSelector
                    }), this.listen()
                }
            }
            let o = new n({
                isParent: !0
            })
        },
        90198: (e, t, r) => {
            r.d(t, {
                B1: () => l,
                Tp: () => s
            });
            let n = () => {},
                o = 0,
                i = new Map,
                s = e => {
                    let t = "toast-".concat(++o);
                    return i.set(t, {
                        id: t,
                        options: e
                    }), n(Array.from(i.values())), setTimeout(() => {
                        a(t)
                    }, e.duration || 3e3), t
                },
                a = e => {
                    i.delete(e), n(Array.from(i.values()))
                },
                l = e => n = e
        }
    }
]);