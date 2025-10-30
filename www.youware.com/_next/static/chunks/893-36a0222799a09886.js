try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "480764c1-6069-4f52-838c-00a4aa1fcf82", e._sentryDebugIdIdentifier = "sentry-dbid-480764c1-6069-4f52-838c-00a4aa1fcf82")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [893], {
        4821: (e, t, r) => {
            r.d(t, {
                B: () => s,
                S: () => o
            });
            let n = () => {},
                o = e => {
                    n(e)
                },
                s = e => n = e
        },
        9962: (e, t, r) => {
            r.d(t, {
                jL: () => i,
                gN: () => a,
                uO: () => s
            });
            let n = {
                    value: "",
                    name: "yw_id",
                    path: "/",
                    sameSite: "lax",
                    secure: !0,
                    httpOnly: !1,
                    maxAge: 31536e3
                },
                o = {
                    value: "",
                    name: "sidebar_expanded",
                    path: "/",
                    sameSite: "lax",
                    secure: !0,
                    httpOnly: !1,
                    maxAge: 86400
                };

            function s(e) {
                let {
                    name: t,
                    path: r,
                    sameSite: o,
                    secure: s,
                    httpOnly: i,
                    maxAge: a
                } = n;
                document.cookie = "".concat(t, "=").concat(e, "; Path=").concat(r, "; SameSite=").concat(o, "; ").concat(s ? "Secure;" : "", " ").concat(i ? "HttpOnly;" : "", " Max-Age=").concat(a)
            }

            function i() {
                var e, t;
                return {
                    client_id: (null == (e = document.cookie.split("; ").find(e => e.startsWith("client_id="))) ? void 0 : e.split("=")[1]) || "",
                    yw_id: (null == (t = document.cookie.split("; ").find(e => e.startsWith("yw_id="))) ? void 0 : t.split("=")[1]) || ""
                }
            }

            function a(e) {
                let {
                    name: t,
                    path: r,
                    sameSite: n,
                    secure: s,
                    httpOnly: i,
                    maxAge: a
                } = o;
                document.cookie = "".concat(t, "=").concat(e, "; Path=").concat(r, "; SameSite=").concat(n, "; ").concat(s ? "Secure;" : "", " ").concat(i ? "HttpOnly;" : "", " Max-Age=").concat(a)
            }
        },
        16618: (e, t, r) => {
            r.d(t, {
                CheckLoginCom: () => f,
                J: () => h,
                UserInfoCom: () => p,
                UserProvider: () => d
            });
            var n = r(95155),
                o = r(35695),
                s = r(12115),
                i = r(65453),
                a = r(66710),
                c = r(62128),
                l = r(96834);
            let u = (0, s.createContext)({
                    isLoggedIn: void 0,
                    userId: void 0,
                    user: void 0,
                    setAuth: () => {},
                    setUser: () => {},
                    updateProfile: async () => ({
                        code: 0,
                        data: null,
                        message: "",
                        request_id: ""
                    }),
                    checkGoLogin: () => !1
                }),
                d = e => {
                    let {
                        children: t
                    } = e, {
                        isLoggedIn: r,
                        userId: s,
                        user: i,
                        setAuth: d,
                        setUser: h
                    } = g(), f = (0, o.useRouter)(), p = (0, a.A)(() => r), m = async (e, t) => {
                        try {
                            let r = new FormData;
                            return e && r.append("name", e), t && r.append("photo", t), await (0, l.qM)("/user/refresh", {
                                method: "POST",
                                body: r
                            })
                        } catch (e) {
                            throw c.Ay.error("update profile error:", e), e
                        }
                    };
                    return (0, n.jsx)(u.Provider, {
                        value: {
                            user: i,
                            isLoggedIn: r,
                            userId: s,
                            setAuth: d,
                            setUser: h,
                            updateProfile: m,
                            checkGoLogin: () => !p() && (f.push("./login"), !0)
                        },
                        children: t
                    })
                },
                h = () => (0, s.useContext)(u),
                g = (0, i.v)(e => ({
                    user: void 0,
                    isLoggedIn: void 0,
                    userId: void 0,
                    setUser: t => {
                        e({
                            user: t,
                            isLoggedIn: !!t,
                            userId: (null == t ? void 0 : t.uid) || null
                        })
                    },
                    setAuth: (t, r) => e({
                        isLoggedIn: t,
                        userId: r
                    })
                })),
                f = e => {
                    let {
                        checkLoginPromise: t
                    } = e, {
                        setAuth: r
                    } = g(), {
                        auth: n,
                        uid: o
                    } = (0, s.use)(t);
                    return (0, s.useEffect)(() => {
                        r(n, o)
                    }, [n, o, r]), null
                },
                p = e => {
                    let {
                        userPromise: t
                    } = e, {
                        setUser: r
                    } = g(), n = (0, s.use)(t);
                    return (0, s.useEffect)(() => {
                        r(n)
                    }, [n, r]), null
                }
        },
        40249: (e, t, r) => {
            r.d(t, {
                G: () => c
            });
            var n = r(20996),
                o = r(34477);
            let s = (0, o.createServerReference)("7f3f27b947a5255dd02a6fd114a34ecec99e822825", o.callServer, void 0, o.findSourceMapURL, "subscribe"),
                i = (0, o.createServerReference)("7f3c45bdfb1ab203007246abef0807fb935e65d90f", o.callServer, void 0, o.findSourceMapURL, "unsubscribe");
            class a {
                async setup() {
                    try {
                        if (!await (0, n.TT)()) return void console.warn("Firebase messaging is not supported in this browser.");
                        this.messaging = (0, n.dG)(), await this.setupMessageListener()
                    } catch (e) {
                        console.error("Failed to setup Firebase messaging:", e)
                    }
                }
                async permission() {
                    try {
                        if (!await (0, n.TT)()) return "denied";
                        return Notification.permission
                    } catch (e) {
                        return console.error("Failed to get notification permission:", e), "denied"
                    }
                }
                async requestPermission() {
                    try {
                        if (!await (0, n.TT)()) return "denied";
                        return await Notification.requestPermission()
                    } catch (e) {
                        return console.error("Failed to request notification permission:", e), "denied"
                    }
                }
                async getToken() {
                    try {
                        if (!await (0, n.TT)() || !this.messaging) return null;
                        return await (0, n.gf)(this.messaging, {
                            vapidKey: "BFzCzbuMre8R3RC_h9JeqPcMY8ZXoZxnIy5grDoBalpmvZjYVoqe9ojkkLtDx45beFhy3g6C83Kbb7pvX-A8GU8"
                        })
                    } catch (e) {
                        return console.error("Failed to get FCM token:", e), null
                    }
                }
                async subscribe() {
                    try {
                        if (!await (0, n.TT)() || !this.messaging || await this.permission() !== "granted") return !1;
                        let e = await this.getToken();
                        if (!e) return !1;
                        return await s(e), !0
                    } catch (e) {
                        return console.error("Failed to subscribe to push notifications:", e), !1
                    }
                }
                async unsubscribe() {
                    try {
                        if (!await (0, n.TT)() || !this.messaging) return !1;
                        let e = await this.getToken();
                        if (!e) return !1;
                        return await i(e), !0
                    } catch (e) {
                        return console.error("Failed to unsubscribe from push notifications:", e), !1
                    }
                }
                registerMessageHandler(e) {
                    this.messageHandlers.push(e)
                }
                unregisterMessageHandler(e) {
                    let t = this.messageHandlers.indexOf(e);
                    t > -1 && this.messageHandlers.splice(t, 1)
                }
                async setupMessageListener() {
                    try {
                        if (!await (0, n.TT)() || !this.messaging) return;
                        (0, n.xD)(this.messaging, e => {
                            console.log("=== FOREGROUND MESSAGE RECEIVED ==="), console.log("Foreground message received:", e), this.messageHandlers.forEach(t => {
                                try {
                                    t(e)
                                } catch (e) {
                                    console.error("Error in message handler:", e)
                                }
                            })
                        })
                    } catch (e) {
                        console.error("Failed to setup message listener:", e)
                    }
                }
                constructor() {
                    this.messageHandlers = []
                }
            }
            let c = new a
        },
        48436: (e, t, r) => {
            let n;
            r.d(t, {
                B: () => i,
                P: () => s
            });
            let o = () => {},
                s = e => {
                    clearTimeout(n), o(e), n = setTimeout(() => {
                        (null == e ? void 0 : e.message) === e.message && o(null)
                    }, e.duration || 3e3)
                },
                i = e => o = e
        },
        56389: (e, t, r) => {
            r.d(t, {
                s: () => s
            });
            var n = r(12115),
                o = r(99891);

            function s() {
                let e = (0, n.useContext)(o.I);
                if (!e) throw Error("useAnalytics must be used within AnalyticsProvider");
                return {
                    track: (0, n.useCallback)(function(t) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e.track(t, r)
                    }, [e]),
                    trackGoogleAds: (0, n.useCallback)(function(t) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e.trackGoogleAds(t, r)
                    }, [e]),
                    registerPublicProperties: (0, n.useCallback)(function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.registerPublicProperties(t)
                    }, [e]),
                    identify: (0, n.useCallback)(t => {
                        e.identify(t)
                    }, [e]),
                    inject: (0, n.useCallback)(function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e.inject(t)
                    }, [e])
                }
            }
        },
        62128: (e, t, r) => {
            r.d(t, {
                Ay: () => i,
                tZ: () => s,
                vF: () => o
            });
            class n {
                static getInstance(e) {
                    let t = (null == e ? void 0 : e.moduleName) || "youware";
                    if (n.instances.has(t)) {
                        if (e) {
                            let r = n.instances.get(t);
                            r.options = { ...r.options,
                                ...e
                            }
                        }
                    } else n.instances.set(t, new n(e));
                    return n.instances.get(t)
                }
                setLevel(e) {
                    this.currentLevel = e
                }
                getLevel() {
                    return this.currentLevel
                }
                setOptions(e) {
                    this.options = { ...this.options,
                        ...e
                    }
                }
                formatLogEntryAsJson(e, t) {
                    let r = this.formatArgs(t),
                        n = {
                            timestamp: new Date().toISOString(),
                            level: e,
                            message: r,
                            ..."youware" !== this.moduleName && {
                                module: this.moduleName
                            },
                            metadata: {
                                environment: "production"
                            }
                        },
                        o = t.find(e => e instanceof Error);
                    return o && (n.error = {
                        name: o.name,
                        message: o.message,
                        stack: o.stack
                    }), JSON.stringify(n, null, void 0)
                }
                formatLogEntryAsPretty(e, t) {
                    let r = new Date(new Date().getTime() + 288e5).toISOString().replace("T", " ").replace("Z", ""),
                        n = "";
                    this.options.useSymbols && (n += "".concat(this.symbols[e], " "));
                    let o = this.formatArgs(t);
                    n += "[".concat(r, "] [").concat(e.toUpperCase(), "]").concat("youware" !== this.moduleName ? " [".concat(this.moduleName, "]") : "", " ").concat(o);
                    let s = t.find(e => e instanceof Error);
                    return s && (n += "\n  └─ 错误: ".concat(s.name, " - ").concat(s.message), s.stack && (n += "\n      ".concat(s.stack.split("\n").slice(1).join("\n      ")))), n
                }
                formatValue(e) {
                    if (e instanceof Error) return "".concat(e.name, ": ").concat(e.message);
                    if ("object" == typeof e && null !== e)
                        if (Array.isArray(e))
                            if (0 === e.length) return "[]";
                            else if (1 === e.length) return "[".concat(this.formatValue(e[0]), "]");
                    else return JSON.stringify(e);
                    else try {
                        return JSON.stringify(e)
                    } catch (e) {
                        return "[Object]"
                    }
                    return String(e)
                }
                formatArgs(e) {
                    return 0 === e.length ? "" : e.map(e => "string" == typeof e ? e : this.formatValue(e)).join(" ")
                }
                formatLogEntry(e, t) {
                    return "raw" === this.options.format ? t : "json" === this.options.format ? this.formatLogEntryAsJson(e, t) : this.formatLogEntryAsPretty(e, t)
                }
                sendToSentry(e, t) {
                    if (this.options.enableSentryReporting && ("info" === e || "warn" === e || "error" === e)) try {
                        Promise.all([r.e(4574), r.e(8199)]).then(r.bind(r, 84574)).then(r => {
                            let {
                                logger: n
                            } = r, o = this.formatArgs(t), s = {
                                module: "youware" !== this.moduleName ? this.moduleName : void 0,
                                timestamp: new Date().toISOString(),
                                environment: "browser"
                            }, i = t.find(e => e instanceof Error);
                            i && (s.error = {
                                name: i.name,
                                message: i.message,
                                stack: i.stack
                            }), "info" === e ? n.info(o, s) : "warn" === e ? n.warn(o, s) : "error" === e && n.error(o, s)
                        }).catch(() => {})
                    } catch (e) {}
                }
                outputLog(e, t) {
                    if ("raw" === this.options.format && Array.isArray(t)) {
                        let r = "youware" !== this.moduleName ? "[".concat(this.moduleName, "]") : "";
                        switch (e) {
                            case "trace":
                            case "debug":
                                r ? console.debug(r, ...t) : console.debug(...t);
                                break;
                            case "info":
                                r ? console.info(r, ...t) : console.info(...t);
                                break;
                            case "warn":
                                r ? console.warn(r, ...t) : console.warn(...t);
                                break;
                            case "error":
                                r ? console.error(r, ...t) : console.error(...t)
                        }
                    } else switch (e) {
                        case "trace":
                        case "debug":
                            console.debug(t);
                            break;
                        case "info":
                            console.info(t);
                            break;
                        case "warn":
                            console.warn(t);
                            break;
                        case "error":
                            console.error(t)
                    }
                }
                trace() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    if (this.currentLevel <= 0) {
                        let e = this.formatLogEntry("trace", t);
                        this.outputLog("trace", e)
                    }
                }
                debug() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    if (this.currentLevel <= 1) {
                        let e = this.formatLogEntry("debug", t);
                        this.outputLog("debug", e)
                    }
                }
                info() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    if (this.currentLevel <= 2) {
                        let e = this.formatLogEntry("info", t);
                        this.outputLog("info", e), this.sendToSentry("info", t)
                    }
                }
                warn() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    if (this.currentLevel <= 3) {
                        let e = this.formatLogEntry("warn", t);
                        this.outputLog("warn", e), this.sendToSentry("warn", t)
                    }
                }
                error() {
                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    if (this.currentLevel <= 4) {
                        let e = this.formatLogEntry("error", t);
                        this.outputLog("error", e), this.sendToSentry("error", t)
                    }
                }
                constructor(e) {
                    this.options = {
                        useSymbols: !0,
                        format: "pretty"
                    }, this.symbols = {
                        trace: "\uD83D\uDD0D",
                        debug: "\uD83D\uDD27",
                        info: "ℹ️",
                        warn: "⚠️",
                        error: "❌"
                    }, this.moduleName = (null == e ? void 0 : e.moduleName) || "youware", e && (this.options = { ...this.options,
                        ...e
                    }), this.options.format = "raw", "https://www.yourware.so".includes("staging") || "https://www.youware.com".includes("staging") ? this.currentLevel = 0 : this.currentLevel = 2, void 0 === this.options.enableSentryReporting && (this.options.enableSentryReporting = !0)
                }
            }
            n.instances = new Map;
            let o = n.getInstance(),
                s = (e, t) => n.getInstance({ ...t,
                    moduleName: e
                }),
                i = o
        },
        66139: (e, t, r) => {
            function n() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; {
                    let r = window.location.host;
                    if (r.includes("localhost")) return "http://" + r;
                    if (o(r) && e && t) return "https://" + r.replace(".yourware.so", ".youware.com");
                    if (r.includes("yourware.so") && !e) return "https://www.yourware.so"
                }
                return "https://www.youware.com"
            }
            r.d(t, {
                $: () => n
            });
            let o = e => null !== ((null == e ? void 0 : e.match(/^([^.]+)\.app(-staging\d*)?\.yourware\.so$/)) || (null == e ? void 0 : e.match(/^([^.]+)\.app(-staging\d*)?\.youware\.com$/)))
        },
        66710: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var n = r(12115);

            function o(e) {
                let t = (0, n.useRef)(e);
                return t.current = e, (0, n.useCallback)(function() {
                    for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                    let o = t.current;
                    return null == o ? void 0 : o(...r)
                }, [])
            }
        },
        90063: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var n = r(62128),
                o = r(9962);
            class s {
                init() {
                    return n.vF.trace("Volcano initialized"), Promise.resolve()
                }
                track(e, t) {
                    window.collectEvent && window.collectEvent(e, t)
                }
                registerPublicProperties(e) {
                    window.collectEvent && (window.collectEvent("config", e), window.collectEvent("send"))
                }
                identify(e) {
                    let {
                        yw_id: t = ""
                    } = (0, o.jL)() || {};
                    window.collectEvent && (e ? (window.collectEvent("config", {
                        user_unique_id: t || e.ywid,
                        user_is_login_yw: 1
                    }), window.collectEvent("profileSet", {
                        user_anonymous: +!!e.is_anonymous,
                        user_name: e.display_name,
                        user_is_subscribed: +("Pro" === e.plan)
                    })) : (window.collectEvent("config", {
                        user_unique_id: t || null,
                        user_is_login_yw: 0
                    }), window.collectEvent("profileSet", {
                        user_unique_id: "",
                        user_anonymous: 0,
                        user_name: "",
                        user_is_subscribed: 0
                    })), window.collectEvent("start"))
                }
            }
            class i {
                static getInstance() {
                    return i.instance || (i.instance = new i), i.instance
                }
                async init() {
                    this.initialized || (this.providers = [new s], await Promise.allSettled(this.providers.map(e => e.init())), this.initialized = !0, n.vF.trace("Initialized"), this.processQueue())
                }
                track(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = { ...this.commonProperties,
                            ...t
                        };
                    if (!this.initialized) return void this.queueOperation({
                        type: "track",
                        event: e,
                        properties: r
                    });
                    this.providers.forEach(t => {
                        /(staging|localhost)/.test("https://www.yourware.so") && /(staging|localhost)/.test("https://www.youware.com") ? t instanceof s && (t.track(e, r), console.log("Tracking event", e, r)) : t.track(e, r)
                    })
                }
                trackGoogleAds(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    window.gtag && window.gtag("event", e, t)
                }
                registerPublicProperties(e) {
                    if (!this.initialized) return void this.queueOperation({
                        type: "registerPublicProperties",
                        properties: e
                    });
                    this.providers.forEach(t => {
                        t.registerPublicProperties(e)
                    })
                }
                identify(e) {
                    if (!this.initialized) return void this.queueOperation({
                        type: "identify",
                        userInfo: e
                    });
                    this.providers.forEach(t => {
                        t.identify(e)
                    })
                }
                inject(e) {
                    this.commonProperties = { ...this.commonProperties,
                        ...e
                    }
                }
                queueOperation(e) {
                    this.operationQueue.push(e)
                }
                processQueue() {
                    this.operationQueue.forEach(e => {
                        try {
                            switch (e.type) {
                                case "track":
                                    this.providers.forEach(t => {
                                        t.track(e.event, e.properties)
                                    });
                                    break;
                                case "identify":
                                    this.providers.forEach(t => {
                                        t.identify(e.userInfo)
                                    });
                                    break;
                                case "registerPublicProperties":
                                    this.providers.forEach(t => {
                                        t.registerPublicProperties(e.properties)
                                    })
                            }
                        } catch (t) {
                            n.vF.error("Error processing queued operation: ".concat(e.type), t)
                        }
                    }), this.operationQueue = []
                }
                constructor() {
                    this.initialized = !1, this.operationQueue = [], this.providers = [], this.commonProperties = {}
                }
            }
        },
        96834: (e, t, r) => {
            r.d(t, {
                qM: () => i
            });
            var n = r(23464),
                o = r(66139);
            let s = n.A.create({
                baseURL: "http://yourware-backend-prod.yourware-service-discovery-prod:8000",
                timeout: 6e4
            });
            s.interceptors.request.use(async e => (e.headers["Content-Type"] || (e.headers["Content-Type"] = "application/json"), e), e => Promise.reject(e)), s.interceptors.response.use(e => e.data, e => {
                var t, r, n, o, s, i, a, c, l, u;
                return e.mock && e.data ? e.data : (null == (r = e.response) || null == (t = r.data) ? void 0 : t.status_code) ? Promise.reject(e.response.data) : Promise.reject({
                    status_code: (null == (n = e.response) ? void 0 : n.status) || 500,
                    code: (null == (s = e.response) || null == (o = s.data) ? void 0 : o.code) || (null == (i = e.response) ? void 0 : i.status) || 500,
                    message: (null == (c = e.response) || null == (a = c.data) ? void 0 : a.message) || e.message || "Unknown error",
                    request_id: (null == (u = e.response) || null == (l = u.data) ? void 0 : l.request_id) || "",
                    data: null
                })
            });
            let i = async function(e, t, r) {
                let n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    s = "".concat(null != r ? r : "/api", "/").concat(e.startsWith("/") ? e.replace("/", "") : e),
                    i = new URLSearchParams;
                (null == t ? void 0 : t.params) && Object.entries(t.params).forEach(e => {
                    let [t, r] = e;
                    i.append(t, r)
                });
                let a = i.toString(),
                    c = a ? "".concat(s, "?").concat(a) : s;
                try {
                    var l, u, d, h, g;
                    let e = { ...null == t ? void 0 : t.headers
                    };
                    e["Content-Type"] || (null == t ? void 0 : t.body) instanceof FormData || (e["Content-Type"] = "application/json");
                    let r = await fetch(c, {
                            headers: e,
                            method: null != (l = null == t ? void 0 : t.method) ? l : "GET",
                            body: (null == t ? void 0 : t.data) ? JSON.stringify(t.data) : null == t ? void 0 : t.body,
                            signal: null == t ? void 0 : t.signal
                        }),
                        n = await r.json();
                    if (!r.ok) {
                        if (401 === r.status) {
                            let e = (0, o.$)(!0),
                                t = window.location.pathname + window.location.search;
                            window.location.href = "".concat(e, "/login?returnTo=").concat(encodeURIComponent(t))
                        }
                        if ((null == n ? void 0 : n.status_code) && (null == n ? void 0 : n.code)) return Promise.reject(n);
                        let e = (u = r.status, d = (null == n ? void 0 : n.code) || r.status, h = (null == n ? void 0 : n.message) || r.statusText, g = (null == n ? void 0 : n.request_id) || "", {
                            status_code: u,
                            code: d,
                            message: h,
                            request_id: g,
                            data: null
                        });
                        return Promise.reject(e)
                    }
                    return n
                } catch (t) {
                    return (n && "function" == typeof n ? n(t) : n) && console.log("commonFetch API ".concat(e, " error"), t), Promise.reject(t)
                }
            }
        },
        99891: (e, t, r) => {
            r.d(t, {
                AnalyticsProvider: () => a,
                I: () => i
            });
            var n = r(95155),
                o = r(12115),
                s = r(90063);
            let i = (0, o.createContext)(null);

            function a(e) {
                let {
                    children: t
                } = e;
                return (0, o.useEffect)(() => {
                    s.A.getInstance().init()
                }, []), (0, n.jsx)(i.Provider, {
                    value: s.A.getInstance(),
                    children: t
                })
            }
        }
    }
]);