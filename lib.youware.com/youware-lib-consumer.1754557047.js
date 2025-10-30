! function(e) {
    "function" == typeof define && define.amd ? define(e) : e()
}((function() {
    "use strict";
    var e = Object.defineProperty,
        t = (t, r, n) => ((t, r, n) => r in t ? e(t, r, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : t[r] = n)(t, "symbol" != typeof r ? r + "" : r, n);
    Object.defineProperty(document, "domain", {
        value: document.domain,
        writable: !1,
        configurable: !1
    });
    const r = Object.getOwnPropertyDescriptor(Document.prototype, "cookie"),
        n = ["_ga", "_gcl_au", "client_id", "yw_id", "sidebar_expanded", "_ga_6Z2G4L6M8E", "install_flag", "cf_clearance", "passcode-session", "session_v2", "staging_session_v2", "x-yw-access"];
    async function i(e) {
        return new Promise(((t, r) => {
            const n = new FileReader;
            n.onloadend = () => {
                const e = n.result.split(",")[1];
                t(e)
            }, n.onerror = r, n.readAsDataURL(e)
        }))
    }

    function s(e) {
        let t;
        t = e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        const r = String.fromCharCode.apply(null, Array.from(t));
        return btoa(r)
    }
    Object.defineProperty(document, "cookie", {
        get: function() {
            var e;
            const t = null == (e = null == r ? void 0 : r.get) ? void 0 : e.call(this);
            return (i = t) ? i.split(";").map((e => e.trim())).filter((e => {
                const t = e.split("=")[0].trim();
                return !n.includes(t)
            })).join("; ") : i;
            var i
        },
        set: function(e) {
            var t;
            const n = function(e) {
                const t = e.split(";").map((e => e.trim())).filter((e => !e.toLowerCase().startsWith("domain=")));
                return t.push(`domain=${location.hostname}`), t.join("; ")
            }(e);
            return null == (t = null == r ? void 0 : r.set) ? void 0 : t.call(this, n)
        },
        configurable: !1
    });
    const a = {
        chunkSize: 16384,
        highWaterMark: 65536
    };
    let o = null;
    const l = window.fetch;
    let d = {
        urlPatterns: [],
        messageManager: null
    };
    const g = new Map;

    function c(e) {
        const t = [];
        if (!e) return {
            entries: t
        };
        if (e instanceof Headers) e.forEach(((e, r) => {
            t.push([r, e])
        }));
        else if (Array.isArray(e)) t.push(...e);
        else
            for (const [r, n] of Object.entries(e)) t.push([r, String(n)]);
        return {
            entries: t
        }
    }
    async function u(e, t) {
        let r, n, u = null;
        if (e instanceof Request ? (n = e, r = n.url, u = e.body, t && ("body" in t && (u = t.body), n = new Request(n, t))) : (r = e instanceof URL ? e.toString() : e, u = null == t ? void 0 : t.body, n = new Request(r, t)), ! function(e) {
                return d.urlPatterns.some((t => e.includes(t)))
            }(r)) return l(e, t);
        const h = `${Date.now()}-${Math.random().toString(36).substring(2,9)}`;
        try {
            const e = new AbortController;
            g.set(h, e), n.signal && n.signal.addEventListener("abort", (() => {
                e.abort(), o.sendEvent("fetch-proxy:stream-control", {
                    requestId: h,
                    action: "abort"
                })
            }));
            const t = await async function(e) {
                    if (null == e) return {
                        type: "null",
                        data: null
                    };
                    if ("string" == typeof e) try {
                        return JSON.parse(e), {
                            type: "json",
                            data: e
                        }
                    } catch {
                        return {
                            type: "string",
                            data: e
                        }
                    }
                    if (e instanceof URLSearchParams) return {
                        type: "urlsearchparams",
                        data: e.toString()
                    };
                    if (e instanceof FormData) {
                        const t = [],
                            r = [];
                        return e.forEach(((e, n) => {
                            if (e instanceof File) {
                                const s = i(e).then((r => {
                                    t.push([n, {
                                        name: e.name,
                                        type: e.type,
                                        size: e.size,
                                        lastModified: e.lastModified,
                                        content: r
                                    }])
                                }));
                                r.push(s)
                            } else t.push([n, e])
                        })), await Promise.all(r), {
                            type: "formdata",
                            data: t
                        }
                    }
                    if (e instanceof Blob) {
                        const t = await i(e);
                        return {
                            type: "blob",
                            data: {
                                type: e.type,
                                size: e.size,
                                content: t
                            }
                        }
                    }
                    if (e instanceof ArrayBuffer) return {
                        type: "arraybuffer",
                        data: s(e)
                    };
                    if (ArrayBuffer.isView(e)) return {
                        type: "arraybuffer",
                        data: s(e)
                    };
                    if (e instanceof ReadableStream) {
                        const t = new Response(e),
                            r = await t.blob();
                        return {
                            type: "stream",
                            data: await i(r)
                        }
                    }
                    throw new Error(`Unsupported body type: ${Object.prototype.toString.call(e)}`)
                }(u),
                l = {
                    requestId: h,
                    url: r,
                    method: n.method,
                    headers: c(n.headers),
                    body: t,
                    credentials: n.credentials,
                    mode: n.mode,
                    cache: n.cache,
                    redirect: n.redirect,
                    referrer: n.referrer,
                    referrerPolicy: n.referrerPolicy,
                    integrity: n.integrity,
                    keepalive: n.keepalive,
                    signal: n.signal ? {
                        aborted: n.signal.aborted
                    } : void 0
                };
            if (!o) throw new Error("Fetch proxy not initialized. Call initializeFetchInterceptor with messageManager first.");
            const d = await o.invoke("fetch-proxy:fetch", l),
                v = (f = d.headers, new Headers(f.entries)),
                p = function(e, t = {}, r, n) {
                    const i = { ...a,
                        ...t
                    };
                    let s = 0,
                        o = !1,
                        l = null,
                        d = null;
                    return new ReadableStream({
                        async start(t) {
                            l = t;
                            const i = r.onEvent("fetch-proxy:stream-control", (t => {
                                    if (t.requestId === e) switch (t.action) {
                                        case "end":
                                            !o && l && (l.close(), o = !0, null == d || d());
                                            break;
                                        case "error":
                                            !o && l && (l.error(new Error(t.error || "Stream error")), o = !0, null == d || d());
                                            break;
                                        case "abort":
                                            !o && l && (l.error(new DOMException("Stream aborted", "AbortError")), o = !0, null == d || d())
                                    }
                                })),
                                s = () => {
                                    !o && l && (l.error(new DOMException("Stream aborted", "AbortError")), o = !0, null == d || d())
                                };
                            n && n.addEventListener("abort", s), d = () => {
                                i(), n && n.removeEventListener("abort", s)
                            }
                        },
                        async pull(t) {
                            if (!o) try {
                                const n = await r.invoke("fetch-proxy:stream-read", {
                                    requestId: e,
                                    chunkIndex: s
                                });
                                if (n.done) o || (t.close(), o = !0, null == d || d());
                                else {
                                    const e = new Uint8Array(n.chunk);
                                    t.enqueue(e), s++
                                }
                            } catch (n) {
                                console.error("[Stream Proxy] Error in pull:", n), o || (t.error(n), o = !0, null == d || d())
                            }
                        },
                        cancel(t) {
                            o = !0, r.sendEvent("fetch-proxy:stream-control", {
                                requestId: e,
                                action: "abort",
                                error: null == t ? void 0 : t.toString()
                            }), null == d || d()
                        }
                    }, {
                        highWaterMark: i.highWaterMark,
                        size: e => e.byteLength
                    })
                }(h, {}, o, e.signal),
                w = new Response(p, {
                    status: d.status,
                    statusText: d.statusText,
                    headers: v
                });
            return Object.defineProperties(w, {
                url: {
                    value: d.url,
                    writable: !1
                },
                redirected: {
                    value: d.redirected,
                    writable: !1
                },
                type: {
                    value: d.type,
                    writable: !1
                },
                ok: {
                    value: d.ok,
                    writable: !1
                }
            }), w
        } catch (v) {
            throw g.delete(h), v
        }
        var f
    }

    function h(e) {
        if (!e.messageManager) throw new Error("messageManager is required in config");
        if (!e.urlPatterns) throw new Error("urlPatterns is required in config");
        var t;
        t = e, d = { ...d,
            ...t
        }, t.messageManager && (o = t.messageManager), t.urlPatterns && (d.urlPatterns = t.urlPatterns), window.fetch = u, "undefined" != typeof globalThis && (globalThis.fetch = u)
    }
    const f = new class {
        constructor(e) {
            var r;
            t(this, "isParent"), t(this, "customTargetWindow"), t(this, "customTargetOrigin"), t(this, "eventHandlers", {}), t(this, "invokeHandlers", {}), t(this, "pending"), t(this, "invokeCallbacks", new Map), t(this, "allowedOrigins"), t(this, "iframeSelector"), t(this, "generateMessageId"), t(this, "logger"), this.isParent = e.isParent, this.pending = new Map, this.allowedOrigins = e.allowedOrigins || ["yourware\\.app", "yourware\\.so", "youware\\.com", "localhost|127\\.0\\.0\\.1", "csb\\.app"], this.iframeSelector = e.iframeSelector || "#youware-runtime", this.generateMessageId = e.generateMessageId || this.defaultGenerateMessageId, this.logger = e.logger, null == (r = this.logger) || r.info("MessageManager initialized", {
                envType: this.isParent ? "parent" : "child",
                allowedOrigins: this.allowedOrigins,
                iframeSelector: this.iframeSelector
            }), this.listen()
        }
        defaultGenerateMessageId() {
            return Date.now() + Math.random().toString(36).substring(2)
        }
        get targetWindow() {
            var e;
            return this.customTargetWindow ? this.customTargetWindow : "undefined" != typeof window ? this.isParent ? null == (e = document.querySelector(this.iframeSelector)) ? void 0 : e.contentWindow : window.parent : void 0
        }
        get targetOrigin() {
            return this.customTargetOrigin ? this.customTargetOrigin : "*"
        }
        allowOrigin(e) {
            var t;
            const r = this.allowedOrigins.some((t => new RegExp(t).test(e)));
            return r || null == (t = this.logger) || t.warn("Origin rejected", {
                origin: e,
                allowedPatterns: this.allowedOrigins
            }), r
        }
        setTarget(e) {
            var t;
            this.customTargetWindow = e.window, this.customTargetOrigin = e.origin, null == (t = this.logger) || t.info("Target updated", {
                hasWindow: !!e.window,
                origin: e.origin
            })
        }
        addAllowedOrigin(e) {
            var t;
            this.allowedOrigins.includes(e) || (this.allowedOrigins.push(e), null == (t = this.logger) || t.info("Added allowed origin pattern", {
                pattern: e,
                totalPatterns: this.allowedOrigins.length
            }))
        }
        removeAllowedOrigin(e) {
            var t;
            const r = this.allowedOrigins.indexOf(e);
            r > -1 && (this.allowedOrigins.splice(r, 1), null == (t = this.logger) || t.info("Removed allowed origin pattern", {
                pattern: e,
                totalPatterns: this.allowedOrigins.length
            }))
        }
        sendEvent(e, t, r = 3, n = 1e3) {
            var i;
            const s = this.generateMessageId(),
                a = {
                    id: s,
                    type: "event",
                    event: e,
                    data: t
                };
            null == (i = this.logger) || i.info("Sending event", {
                event: e,
                messageId: s,
                dataType: typeof t,
                maxRetries: r,
                timeout: n
            }), this.sendMessageWithRetry(a, r, n)
        }
        sendEventWithTransferable(e, t, r, n = 3, i = 1e3) {
            var s;
            const a = this.generateMessageId(),
                o = {
                    id: a,
                    type: "event",
                    event: e,
                    data: t
                };
            null == (s = this.logger) || s.info("Sending event with transferable", {
                event: e,
                messageId: a,
                dataType: typeof t,
                transferableCount: r.length,
                maxRetries: n,
                timeout: i
            }), this.sendMessageWithRetry(o, n, i, r)
        }
        invoke(e, t) {
            return new Promise(((r, n) => {
                var i, s;
                const a = this.generateMessageId(),
                    o = {
                        id: a,
                        type: "invoke",
                        event: e,
                        data: t
                    };
                null == (i = this.logger) || i.info("Invoking remote method", {
                    event: e,
                    messageId: a,
                    dataType: typeof t
                }), this.invokeCallbacks.set(a, {
                    resolve: r,
                    reject: n
                });
                const l = setTimeout((() => {
                    var t;
                    if (this.invokeCallbacks.get(a)) {
                        this.invokeCallbacks.delete(a);
                        const r = `Invoke ACK timeout: ${e}`;
                        null == (t = this.logger) || t.error(r, {
                            event: e,
                            messageId: a
                        }), n(new Error(r))
                    }
                }), 5e3);
                this.pending.set(a, {
                    timer: l,
                    attempt: 0
                }), null == (s = this.targetWindow) || s.postMessage(o, this.targetOrigin)
            }))
        }
        invokeWithTransferable(e, t, r) {
            return new Promise(((n, i) => {
                var s, a;
                const o = this.generateMessageId(),
                    l = {
                        id: o,
                        type: "invoke",
                        event: e,
                        data: t
                    };
                null == (s = this.logger) || s.info("Invoking remote method with transferable", {
                    event: e,
                    messageId: o,
                    dataType: typeof t,
                    transferableCount: r.length
                }), this.invokeCallbacks.set(o, {
                    resolve: n,
                    reject: i
                });
                const d = setTimeout((() => {
                    var t;
                    if (this.invokeCallbacks.get(o)) {
                        this.invokeCallbacks.delete(o);
                        const r = `Invoke ACK timeout: ${e}`;
                        null == (t = this.logger) || t.error(r, {
                            event: e,
                            messageId: o
                        }), i(new Error(r))
                    }
                }), 5e3);
                this.pending.set(o, {
                    timer: d,
                    attempt: 0
                }), null == (a = this.targetWindow) || a.postMessage(l, this.targetOrigin, r)
            }))
        }
        sendMessageWithRetry(e, t, r, n) {
            const i = (s = 0) => {
                var a, o;
                if (s > 0 && (null == (a = this.logger) || a.warn("Message retry attempt", {
                        event: e.event,
                        messageId: e.id,
                        attempt: s + 1,
                        maxAttempts: t + 1
                    })), null == (o = this.targetWindow) || o.postMessage(e, this.targetOrigin, n), "event" === e.type) {
                    const n = setTimeout((() => {
                        var r;
                        if (s >= t) return this.pending.delete(e.id), void(null == (r = this.logger) || r.error("Message failed after all retries", {
                            event: e.event,
                            messageId: e.id,
                            totalAttempts: s + 1
                        }));
                        i(s + 1)
                    }), r * 2 ** s);
                    this.pending.set(e.id, {
                        timer: n,
                        attempt: s
                    })
                }
            };
            i()
        }
        listen() {
            var e;
            "undefined" != typeof window && (null == (e = this.logger) || e.info("Started listening for messages"), window.addEventListener("message", (e => {
                var t, r, n;
                if (!this.allowOrigin(e.origin) || !(null == (t = e.data) ? void 0 : t.type) || !(null == (r = e.data) ? void 0 : r.id)) return;
                const i = e.data;
                switch (null == (n = this.logger) || n.info("Received message", {
                    type: i.type,
                    event: i.event,
                    messageId: i.id,
                    origin: e.origin
                }), i.type) {
                    case "event":
                        this.sendAck(i.id, e.origin);
                        const t = this.eventHandlers[i.event];
                        t && t.length > 0 && t.forEach((e => {
                            var t;
                            try {
                                e(i.data)
                            } catch (r) {
                                null == (t = this.logger) || t.error("Event handler error", {
                                    event: i.event,
                                    error: r instanceof Error ? r.message : String(r)
                                })
                            }
                        }));
                        break;
                    case "invoke":
                        this.sendAck(i.id, e.origin), this.handleInvoke(i, e.origin);
                        break;
                    case "response":
                        this.handleResponse(i);
                        break;
                    case "ack":
                        this.handleAck(i)
                }
            })))
        }
        sendAck(e, t) {
            var r;
            const n = {
                id: this.generateMessageId(),
                type: "ack",
                event: "ack",
                originalId: e
            };
            null == (r = this.targetWindow) || r.postMessage(n, t)
        }
        async handleInvoke(e, t) {
            var r, n, i, s, a, o, l;
            try {
                const o = this.invokeHandlers[e.event];
                if (!o) {
                    const t = `No handler for invoke: ${e.event}`;
                    throw null == (r = this.logger) || r.error(t, {
                        event: e.event,
                        messageId: e.id
                    }), new Error(t)
                }
                null == (n = this.logger) || n.debug("Executing invoke handler", {
                    event: e.event,
                    messageId: e.id
                });
                const l = await o(e.data),
                    d = {
                        id: this.generateMessageId(),
                        type: "response",
                        event: "response",
                        originalId: e.id,
                        data: l
                    },
                    g = this.extractTransferableFromResult(l);
                g.length > 0 ? (null == (i = this.logger) || i.debug("Sending response with transferable objects", {
                    event: e.event,
                    originalId: e.id,
                    transferableCount: g.length
                }), null == (s = this.targetWindow) || s.postMessage(d, t, g)) : null == (a = this.targetWindow) || a.postMessage(d, t)
            } catch (d) {
                const r = d instanceof Error ? d.message : String(d);
                null == (o = this.logger) || o.error("Invoke handler failed", {
                    event: e.event,
                    messageId: e.id,
                    error: r
                });
                const n = {
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
            const t = [];
            if (!e) return t;
            if (e.buffer instanceof ArrayBuffer) t.push(e.buffer);
            else if (e instanceof ArrayBuffer) t.push(e);
            else if ("object" == typeof e)
                for (const r of Object.values(e)) r instanceof ArrayBuffer ? t.push(r) : r && "object" == typeof r && "buffer" in r && r.buffer instanceof ArrayBuffer && t.push(r.buffer);
            return t
        }
        handleResponse(e) {
            var t, r, n;
            const i = this.invokeCallbacks.get(e.originalId);
            i ? (e.error ? (null == (t = this.logger) || t.error("Invoke failed with error", {
                originalId: e.originalId,
                error: e.error
            }), i.reject(new Error(e.error))) : (null == (r = this.logger) || r.info("Invoke completed successfully", {
                originalId: e.originalId,
                resultType: typeof e.data
            }), i.resolve(e.data)), this.invokeCallbacks.delete(e.originalId)) : null == (n = this.logger) || n.warn("No callback found for response", {
                originalId: e.originalId
            })
        }
        handleAck(e) {
            var t, r;
            const {
                originalId: n
            } = e, i = this.pending.get(n);
            i ? (clearTimeout(i.timer), this.pending.delete(n), null == (t = this.logger) || t.debug("ACK received, cleared timeout", {
                originalId: n
            })) : null == (r = this.logger) || r.warn("Received ACK for unknown message", {
                originalId: n
            })
        }
        onEvent(e, t) {
            var r;
            const n = e;
            return this.eventHandlers[n] || (this.eventHandlers[n] = []), this.eventHandlers[n].push(t), null == (r = this.logger) || r.info("Registered event handler", {
                event: n,
                handlerCount: this.eventHandlers[n].length
            }), () => {
                var e;
                const r = this.eventHandlers[n];
                if (r) {
                    const i = r.indexOf(t);
                    i > -1 && (r.splice(i, 1), null == (e = this.logger) || e.info("Removed specific event handler", {
                        event: n,
                        remainingHandlers: r.length
                    }), 0 === r.length && delete this.eventHandlers[n])
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
            null == (e = this.logger) || e.info("Starting MessageManager cleanup"), this.pending.forEach(((e, t) => {
                clearTimeout(e.timer)
            })), this.pending.clear(), this.invokeCallbacks.forEach(((e, t) => {
                e.reject(new Error("MessageManager destroyed"))
            })), this.invokeCallbacks.clear(), this.eventHandlers = {}, this.invokeHandlers = {}, null == (t = this.logger) || t.info("MessageManager destroyed")
        }
    }({
        isParent: !1
    });
    ! function() {
        try {
            h({
                urlPatterns: ["api.youware.com/public/v1/ai/", "backend.youware.com"],
                messageManager: f
            })
        } catch (e) {
            console.error("Failed to initialize fetch interceptor:", e)
        }
    }();
    const v = {
        innerRequest: function(e, t) {
            if (!e) throw new Error("[ywSdk] innerRequest apiName parameter cannot be null or undefined");
            return f.invoke("innerRequest", {
                apiName: e,
                params: t
            })
        },
        getLoginStatus: async function() {
            return f.invoke("getLoginStatus", void 0)
        },
        requestLogin: async function(e) {
            return f.invoke("requestLogin", e)
        }
    };

    function p(e) {
        if ("string" == typeof e && e.includes("${")) return t = e,
            function(e) {
                return t.replace(/\${(\w+)}/g, (function(t, r) {
                    return void 0 !== e[r] ? e[r] : t
                }))
            };
        if ("object" == typeof e && null !== e) {
            const t = Array.isArray(e) ? [] : {};
            for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = p(e[r]));
            return t
        }
        var t;
        return e
    }

    function w(e) {
        return null === e || "object" != typeof e ? e : (Object.keys(e).forEach((t => {
            null !== e[t] && "object" == typeof e[t] && w(e[t])
        })), Object.freeze(e))
    }
    Object.defineProperty(window, "ywSdk", {
        value: v,
        writable: !1,
        configurable: !1
    }), async function() {
        const e = document.getElementById("yw-manifest-data");
        if (!e) return;
        const t = e.textContent || "";
        let r;
        try {
            r = JSON.parse(t)
        } catch (n) {
            console.error("Error parsing yw_manifest.json (inside yw-manifest-data script block) failed:", n);
            try {
                const e = await fetch("/yw_manifest.json");
                r = await e.json()
            } catch (i) {
                return void console.error("Error parsing yw_manifest.json (fetch from /yw_manifest.json) failed:", i)
            }
        }
        try {
            const e = w(p(r));
            Object.defineProperty(window, "ywConfig", {
                value: e,
                writable: !1,
                configurable: !1
            })
        } catch (n) {
            console.error("Error processing ywConfig:", n)
        }
    }()
}));