try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2b86b1f2-8e66-49b1-8f0a-c0c46caa8f6d", e._sentryDebugIdIdentifier = "sentry-dbid-2b86b1f2-8e66-49b1-8f0a-c0c46caa8f6d")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4574], {
        30294: (e, t) => {
            var r = "function" == typeof Symbol && Symbol.for,
                n = r ? Symbol.for("react.element") : 60103,
                a = r ? Symbol.for("react.portal") : 60106,
                o = r ? Symbol.for("react.fragment") : 60107,
                i = r ? Symbol.for("react.strict_mode") : 60108,
                s = r ? Symbol.for("react.profiler") : 60114,
                l = r ? Symbol.for("react.provider") : 60109,
                u = r ? Symbol.for("react.context") : 60110,
                c = r ? Symbol.for("react.async_mode") : 60111,
                d = r ? Symbol.for("react.concurrent_mode") : 60111,
                p = r ? Symbol.for("react.forward_ref") : 60112,
                f = r ? Symbol.for("react.suspense") : 60113,
                h = r ? Symbol.for("react.suspense_list") : 60120,
                _ = r ? Symbol.for("react.memo") : 60115,
                m = r ? Symbol.for("react.lazy") : 60116,
                g = r ? Symbol.for("react.block") : 60121,
                y = r ? Symbol.for("react.fundamental") : 60117,
                v = r ? Symbol.for("react.responder") : 60118,
                b = r ? Symbol.for("react.scope") : 60119;

            function w(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case c:
                                case d:
                                case o:
                                case s:
                                case i:
                                case f:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case u:
                                        case p:
                                        case m:
                                        case _:
                                        case l:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case a:
                            return t
                    }
                }
            }

            function S(e) {
                return w(e) === d
            }
            t.AsyncMode = c, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = l, t.Element = n, t.ForwardRef = p, t.Fragment = o, t.Lazy = m, t.Memo = _, t.Portal = a, t.Profiler = s, t.StrictMode = i, t.Suspense = f, t.isAsyncMode = function(e) {
                return S(e) || w(e) === c
            }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
                return w(e) === u
            }, t.isContextProvider = function(e) {
                return w(e) === l
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }, t.isForwardRef = function(e) {
                return w(e) === p
            }, t.isFragment = function(e) {
                return w(e) === o
            }, t.isLazy = function(e) {
                return w(e) === m
            }, t.isMemo = function(e) {
                return w(e) === _
            }, t.isPortal = function(e) {
                return w(e) === a
            }, t.isProfiler = function(e) {
                return w(e) === s
            }, t.isStrictMode = function(e) {
                return w(e) === i
            }, t.isSuspense = function(e) {
                return w(e) === f
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === o || e === d || e === s || e === i || e === f || e === h || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === _ || e.$$typeof === l || e.$$typeof === u || e.$$typeof === p || e.$$typeof === y || e.$$typeof === v || e.$$typeof === b || e.$$typeof === g)
            }, t.typeOf = w
        },
        41439: (e, t, r) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var r in t) Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
            }(t, {
                APP_BUILD_MANIFEST: function() {
                    return v
                },
                APP_CLIENT_INTERNALS: function() {
                    return Z
                },
                APP_PATHS_MANIFEST: function() {
                    return m
                },
                APP_PATH_ROUTES_MANIFEST: function() {
                    return g
                },
                BARREL_OPTIMIZATION_PREFIX: function() {
                    return H
                },
                BLOCKED_PAGES: function() {
                    return D
                },
                BUILD_ID_FILE: function() {
                    return O
                },
                BUILD_MANIFEST: function() {
                    return y
                },
                CLIENT_PUBLIC_FILES_PATH: function() {
                    return U
                },
                CLIENT_REFERENCE_MANIFEST: function() {
                    return W
                },
                CLIENT_STATIC_FILES_PATH: function() {
                    return $
                },
                CLIENT_STATIC_FILES_RUNTIME_AMP: function() {
                    return Q
                },
                CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
                    return K
                },
                CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
                    return Y
                },
                CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
                    return et
                },
                CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
                    return er
                },
                CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
                    return X
                },
                CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
                    return ee
                },
                COMPILER_INDEXES: function() {
                    return o
                },
                COMPILER_NAMES: function() {
                    return a
                },
                CONFIG_FILES: function() {
                    return L
                },
                DEFAULT_RUNTIME_WEBPACK: function() {
                    return en
                },
                DEFAULT_SANS_SERIF_FONT: function() {
                    return el
                },
                DEFAULT_SERIF_FONT: function() {
                    return es
                },
                DEV_CLIENT_MIDDLEWARE_MANIFEST: function() {
                    return A
                },
                DEV_CLIENT_PAGES_MANIFEST: function() {
                    return P
                },
                DYNAMIC_CSS_MANIFEST: function() {
                    return J
                },
                EDGE_RUNTIME_WEBPACK: function() {
                    return ea
                },
                EDGE_UNSUPPORTED_NODE_APIS: function() {
                    return ef
                },
                EXPORT_DETAIL: function() {
                    return C
                },
                EXPORT_MARKER: function() {
                    return E
                },
                FUNCTIONS_CONFIG_MANIFEST: function() {
                    return b
                },
                IMAGES_MANIFEST: function() {
                    return k
                },
                INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
                    return G
                },
                MIDDLEWARE_BUILD_MANIFEST: function() {
                    return z
                },
                MIDDLEWARE_MANIFEST: function() {
                    return R
                },
                MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
                    return V
                },
                MODERN_BROWSERSLIST_TARGET: function() {
                    return n.default
                },
                NEXT_BUILTIN_DOCUMENT: function() {
                    return B
                },
                NEXT_FONT_MANIFEST: function() {
                    return S
                },
                PAGES_MANIFEST: function() {
                    return h
                },
                PHASE_DEVELOPMENT_SERVER: function() {
                    return d
                },
                PHASE_EXPORT: function() {
                    return l
                },
                PHASE_INFO: function() {
                    return f
                },
                PHASE_PRODUCTION_BUILD: function() {
                    return u
                },
                PHASE_PRODUCTION_SERVER: function() {
                    return c
                },
                PHASE_TEST: function() {
                    return p
                },
                PRERENDER_MANIFEST: function() {
                    return x
                },
                REACT_LOADABLE_MANIFEST: function() {
                    return M
                },
                ROUTES_MANIFEST: function() {
                    return T
                },
                RSC_MODULE_TYPES: function() {
                    return ep
                },
                SERVER_DIRECTORY: function() {
                    return F
                },
                SERVER_FILES_MANIFEST: function() {
                    return I
                },
                SERVER_PROPS_ID: function() {
                    return ei
                },
                SERVER_REFERENCE_MANIFEST: function() {
                    return q
                },
                STATIC_PROPS_ID: function() {
                    return eo
                },
                STATIC_STATUS_PAGES: function() {
                    return eu
                },
                STRING_LITERAL_DROP_BUNDLE: function() {
                    return j
                },
                SUBRESOURCE_INTEGRITY_MANIFEST: function() {
                    return w
                },
                SYSTEM_ENTRYPOINTS: function() {
                    return eh
                },
                TRACE_OUTPUT_VERSION: function() {
                    return ec
                },
                TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST: function() {
                    return N
                },
                TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
                    return ed
                },
                UNDERSCORE_NOT_FOUND_ROUTE: function() {
                    return i
                },
                UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
                    return s
                },
                WEBPACK_STATS: function() {
                    return _
                }
            });
            let n = r(88229)._(r(84497)),
                a = {
                    client: "client",
                    server: "server",
                    edgeServer: "edge-server"
                },
                o = {
                    [a.client]: 0,
                    [a.server]: 1,
                    [a.edgeServer]: 2
                },
                i = "/_not-found",
                s = "" + i + "/page",
                l = "phase-export",
                u = "phase-production-build",
                c = "phase-production-server",
                d = "phase-development-server",
                p = "phase-test",
                f = "phase-info",
                h = "pages-manifest.json",
                _ = "webpack-stats.json",
                m = "app-paths-manifest.json",
                g = "app-path-routes-manifest.json",
                y = "build-manifest.json",
                v = "app-build-manifest.json",
                b = "functions-config-manifest.json",
                w = "subresource-integrity-manifest",
                S = "next-font-manifest",
                E = "export-marker.json",
                C = "export-detail.json",
                x = "prerender-manifest.json",
                T = "routes-manifest.json",
                k = "images-manifest.json",
                I = "required-server-files.json",
                P = "_devPagesManifest.json",
                R = "middleware-manifest.json",
                N = "_clientMiddlewareManifest.json",
                A = "_devMiddlewareManifest.json",
                M = "react-loadable-manifest.json",
                F = "server",
                L = ["next.config.js", "next.config.mjs", "next.config.ts"],
                O = "BUILD_ID",
                D = ["/_document", "/_app", "/_error"],
                U = "public",
                $ = "static",
                j = "__NEXT_DROP_CLIENT_FILE__",
                B = "__NEXT_BUILTIN_DOCUMENT__",
                H = "__barrel_optimize__",
                W = "client-reference-manifest",
                q = "server-reference-manifest",
                z = "middleware-build-manifest",
                V = "middleware-react-loadable-manifest",
                G = "interception-route-rewrite-manifest",
                J = "dynamic-css-manifest",
                K = "main",
                Y = "" + K + "-app",
                Z = "app-pages-internals",
                X = "react-refresh",
                Q = "amp",
                ee = "webpack",
                et = "polyfills",
                er = Symbol(et),
                en = "webpack-runtime",
                ea = "edge-runtime-webpack",
                eo = "__N_SSG",
                ei = "__N_SSP",
                es = {
                    name: "Times New Roman",
                    xAvgCharWidth: 821,
                    azAvgWidth: 854.3953488372093,
                    unitsPerEm: 2048
                },
                el = {
                    name: "Arial",
                    xAvgCharWidth: 904,
                    azAvgWidth: 934.5116279069767,
                    unitsPerEm: 2048
                },
                eu = ["/500"],
                ec = 1,
                ed = 6e3,
                ep = {
                    client: "client",
                    server: "server"
                },
                ef = ["clearImmediate", "setImmediate", "BroadcastChannel", "ByteLengthQueuingStrategy", "CompressionStream", "CountQueuingStrategy", "DecompressionStream", "DomException", "MessageChannel", "MessageEvent", "MessagePort", "ReadableByteStreamController", "ReadableStreamBYOBRequest", "ReadableStreamDefaultController", "TransformStreamDefaultController", "WritableStreamDefaultController"],
                eh = new Set([K, X, Q, Y]);
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        50330: (e, t, r) => {
            e.exports = r(30294)
        },
        62243: (e, t, r) => {
            var n = r(50330),
                a = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                o = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                i = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                s = {};

            function l(e) {
                return n.isMemo(e) ? i : s[e.$$typeof] || a
            }
            s[n.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, s[n.Memo] = i;
            var u = Object.defineProperty,
                c = Object.getOwnPropertyNames,
                d = Object.getOwnPropertySymbols,
                p = Object.getOwnPropertyDescriptor,
                f = Object.getPrototypeOf,
                h = Object.prototype;
            e.exports = function e(t, r, n) {
                if ("string" != typeof r) {
                    if (h) {
                        var a = f(r);
                        a && a !== h && e(t, a, n)
                    }
                    var i = c(r);
                    d && (i = i.concat(d(r)));
                    for (var s = l(t), _ = l(r), m = 0; m < i.length; ++m) {
                        var g = i[m];
                        if (!o[g] && !(n && n[g]) && !(_ && _[g]) && !(s && s[g])) {
                            var y = p(r, g);
                            try {
                                u(t, g, y)
                            } catch (e) {}
                        }
                    }
                }
                return t
            }
        },
        84497: e => {
            e.exports = ["chrome 64", "edge 79", "firefox 67", "opera 51", "safari 12"]
        },
        84574: (e, t, r) => {
            let n, a, o, i, s, l;
            r.r(t), r.d(t, {
                BrowserClient: () => rU.y,
                ErrorBoundary: () => ax,
                OpenFeatureIntegrationHook: () => al,
                Profiler: () => aw,
                SDK_VERSION: () => tz.M,
                SEMANTIC_ATTRIBUTE_SENTRY_OP: () => W.uT,
                SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: () => W.JD,
                SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: () => W.sy,
                SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: () => W.i_,
                Scope: () => B.H,
                WINDOW: () => tV.jf,
                addBreadcrumb: () => tQ.Z,
                addEventProcessor: () => m.SA,
                addIntegration: () => el.Q8,
                breadcrumbsIntegration: () => rV.F,
                browserApiErrorsIntegration: () => rY.G,
                browserProfilingIntegration: () => n8,
                browserSessionIntegration: () => at.p,
                browserTracingIntegration: () => E.d,
                buildLaunchDarklyFlagUsedHandler: () => ai,
                captureConsoleIntegration: () => t4,
                captureEvent: () => m.r,
                captureException: () => m.Cp,
                captureFeedback: () => ei,
                captureMessage: () => m.wd,
                captureReactException: () => ah,
                captureRequestError: () => eo,
                captureRouterTransitionStart: () => C.Nc,
                captureSession: () => m.J5,
                captureUnderscoreErrorException: () => S,
                chromeStackLineParser: () => rj.Yj,
                close: () => m.VN,
                consoleLoggingIntegration: () => t8,
                contextLinesIntegration: () => nr,
                continueTrace: () => H.V4,
                createReduxEnhancer: () => aI,
                createTransport: () => re.o,
                createUserFeedbackEnvelope: () => rH,
                dedupeIntegration: () => rt.s,
                defaultRequestInstrumentationOptions: () => nU.h$,
                defaultStackLineParsers: () => rj.c9,
                defaultStackParser: () => rj.lG,
                diagnoseSdkConnectivity: () => ap,
                endSession: () => m.ky,
                eventFiltersIntegration: () => rr.A,
                eventFromException: () => rB.u,
                eventFromMessage: () => rB.qv,
                exceptionFromError: () => rB.K8,
                extraErrorDataIntegration: () => ri,
                featureFlagsIntegration: () => aa,
                feedbackAsyncIntegration: () => tY,
                feedbackIntegration: () => tZ,
                feedbackSyncIntegration: () => tZ,
                flush: () => m.bX,
                forceLoad: () => rW.w7,
                functionToStringIntegration: () => rs.Z,
                geckoStackLineParser: () => rj.dY,
                getActiveSpan: () => I.Bk,
                getClient: () => d.KU,
                getCurrentScope: () => d.o5,
                getDefaultIntegrations: () => rW.nI,
                getFeedback: () => eO,
                getGlobalScope: () => d.m6,
                getIsolationScope: () => d.rm,
                getReplay: () => nl.M,
                getRootSpan: () => I.zU,
                getSpanDescendants: () => I.xO,
                getSpanStatusFromHttpCode: () => z.AJ,
                getTraceData: () => P.i,
                globalHandlersIntegration: () => rG.L,
                graphqlClientIntegration: () => ns,
                httpClientIntegration: () => r4,
                httpContextIntegration: () => rJ.M,
                inboundFiltersIntegration: () => rr.D,
                init: () => c.Ts,
                instrumentOutgoingRequests: () => nU.Qb,
                instrumentSupabaseClient: () => r_,
                isEnabled: () => m.Ol,
                isInitialized: () => m.Dp,
                lastEventId: () => m.Q,
                launchDarklyIntegration: () => ao,
                lazyLoadIntegration: () => tK,
                linkedErrorsIntegration: () => rK.p,
                logger: () => tX,
                makeBrowserOfflineTransport: () => nq,
                makeFetchTransport: () => r$._,
                makeMultiplexedTransport: () => rw,
                moduleMetadataIntegration: () => rT,
                onLoad: () => rW.kF,
                openFeatureIntegration: () => as,
                opera10StackLineParser: () => rj.Q_,
                opera11StackLineParser: () => rj.Vv,
                parameterize: () => rk.y,
                reactErrorHandler: () => a_,
                reactRouterV3BrowserTracingIntegration: () => aP,
                reactRouterV4BrowserTracingIntegration: () => aM,
                reactRouterV5BrowserTracingIntegration: () => aF,
                reactRouterV6BrowserTracingIntegration: () => a4,
                reactRouterV7BrowserTracingIntegration: () => a9,
                registerSpanErrorInstrumentation: () => rI.s,
                replayCanvasIntegration: () => nD,
                replayIntegration: () => nl.w,
                reportingObserverIntegration: () => r0,
                rewriteFramesIntegration: () => rP.D,
                sendFeedback: () => eI,
                setContext: () => m.o,
                setCurrentClient: () => rR.B,
                setExtra: () => m.l7,
                setExtras: () => m.cx,
                setHttpStatus: () => z.N8,
                setMeasurement: () => rN.X,
                setTag: () => m.NA,
                setTags: () => m.Wt,
                setUser: () => m.gV,
                showReportDialog: () => rz,
                spanToBaggageHeader: () => rA.HW,
                spanToJSON: () => I.et,
                spanToTraceHeader: () => I.Qh,
                spotlightBrowserIntegration: () => ae,
                startBrowserTracingNavigationSpan: () => n$.Nt,
                startBrowserTracingPageLoadSpan: () => n$.Sx,
                startInactiveSpan: () => H.Uk,
                startNewTrace: () => H.Y7,
                startSession: () => m.J0,
                startSpan: () => H.Lk,
                startSpanManual: () => H.nV,
                statsigIntegration: () => ad,
                supabaseIntegration: () => rm,
                suppressTracing: () => H.M1,
                tanstackRouterBrowserTracingIntegration: () => aN,
                thirdPartyErrorFilterIntegration: () => rF,
                unleashIntegration: () => au,
                updateSpanName: () => I.zQ,
                useProfiler: () => aE,
                winjsStackLineParser: () => rj.$2,
                withActiveSpan: () => H.hb,
                withErrorBoundary: () => aT,
                withIsolationScope: () => d.rB,
                withProfiler: () => aS,
                withScope: () => d.v4,
                withSentryConfig: () => c.wF,
                withSentryReactRouterV6Routing: () => a8,
                withSentryReactRouterV7Routing: () => oe,
                withSentryRouting: () => aO,
                withServerActionInstrumentation: () => en,
                wrapApiHandlerWithSentryVercelCrons: () => X,
                wrapAppGetInitialPropsWithSentry: () => O,
                wrapCreateBrowserRouterV6: () => a3,
                wrapCreateBrowserRouterV7: () => ot,
                wrapCreateMemoryRouterV6: () => a7,
                wrapCreateMemoryRouterV7: () => or,
                wrapDocumentGetInitialPropsWithSentry: () => D,
                wrapErrorGetInitialPropsWithSentry: () => U,
                wrapGenerationFunctionWithSentry: () => er,
                wrapGetInitialPropsWithSentry: () => L,
                wrapGetServerSidePropsWithSentry: () => $,
                wrapGetStaticPropsWithSentry: () => F,
                wrapMiddlewareWithSentry: () => Q,
                wrapPageComponentWithSentry: () => et,
                wrapRouteHandlerWithSentry: () => Z,
                wrapServerComponentWithSentry: () => Y,
                wrapUseRoutesV6: () => a5,
                wrapUseRoutesV7: () => on,
                zodErrorsIntegration: () => rD
            });
            var u, c = r(54906),
                d = r(96314);

            function p(e) {
                let t = {};
                try {
                    e.forEach((e, r) => {
                        "string" == typeof e && (t[r] = e)
                    })
                } catch {}
                return t
            }

            function f(e) {
                let t = Object.create(null);
                try {
                    Object.entries(e).forEach(([e, r]) => {
                        "string" == typeof r && (t[e] = r)
                    })
                } catch {}
                return t
            }

            function h(e) {
                let t = e.headers || {},
                    r = "string" == typeof t.host ? t.host : void 0,
                    n = e.protocol || (e.socket ? .encrypted ? "https" : "http"),
                    a = e.url || "",
                    o = function({
                        url: e,
                        protocol: t,
                        host: r
                    }) {
                        return e ? .startsWith("http") ? e : e && r ? `${t}://${r}${e}` : void 0
                    }({
                        url: a,
                        host: r,
                        protocol: n
                    }),
                    i = e.body || void 0,
                    s = e.cookies;
                return {
                    url: o,
                    method: e.method,
                    query_string: _(a),
                    headers: f(t),
                    cookies: s,
                    data: i
                }
            }

            function _(e) {
                if (e) try {
                    let t = new URL(e, "http://s.io").search.slice(1);
                    return t.length ? t : void 0
                } catch {
                    return
                }
            }
            var m = r(62105),
                g = r(99889);

            function y(e) {
                let t = g.O[Symbol.for("@vercel/request-context")],
                    r = t ? .get && t.get() ? t.get() : {};
                r ? .waitUntil && r.waitUntil(e)
            }
            var v = r(22522),
                b = r(20793);
            async function w() {
                try {
                    b.T && v.vF.log("Flushing events..."), await (0, m.bX)(2e3), b.T && v.vF.log("Done flushing events")
                } catch (e) {
                    b.T && v.vF.log("Error while flushing events:\n", e)
                }
            }
            async function S(e) {
                let {
                    req: t,
                    res: r,
                    err: n
                } = e, a = r ? .statusCode || e.statusCode;
                if (a && a < 500 || !e.pathname) return Promise.resolve();
                (0, d.v4)(e => {
                    if (t) {
                        let r = h(t);
                        e.setSDKProcessingMetadata({
                            normalizedRequest: r
                        })
                    }(0, m.Cp)(n || `_error.js called with falsy error (${n})`, {
                        mechanism: {
                            type: "instrument",
                            handled: !1,
                            data: {
                                function: "_error.getInitialProps"
                            }
                        }
                    })
                }), y(w())
            }
            var E = r(86087),
                C = r(64162),
                x = r(41439),
                T = r(49509);

            function k() {
                return T.env.NEXT_PHASE === x.PHASE_PRODUCTION_BUILD
            }
            var I = r(44229),
                P = r(44877);
            let R = "sentry.sentry_trace_backfill";

            function N(e) {
                return async function(...t) {
                    try {
                        return await e.apply(this, t)
                    } catch (e) {
                        throw (0, m.Cp)(e, {
                            mechanism: {
                                handled: !1
                            }
                        }), e
                    }
                }
            }

            function A(e, t, r, n) {
                return async function(...r) {
                    let a = h(t);
                    (0, d.o5)().setTransactionName(`${n.dataFetchingMethodName} (${n.dataFetcherRouteName})`), (0, d.rm)().setSDKProcessingMetadata({
                        normalizedRequest: a
                    });
                    let o = (0, I.Bk)();
                    o && "/_error" !== n.requestedRouteName && (0, I.zU)(o).setAttribute("sentry.route_backfill", n.requestedRouteName);
                    let {
                        "sentry-trace": i,
                        baggage: s
                    } = (0, P.i)();
                    return {
                        sentryTrace: i,
                        baggage: s,
                        data: await e.apply(this, r)
                    }
                }
            }
            async function M(e, t) {
                try {
                    return await e(...t)
                } catch (e) {
                    throw (0, m.Cp)(e, {
                        mechanism: {
                            handled: !1
                        }
                    }), e
                }
            }

            function F(e, t) {
                return new Proxy(e, {
                    apply: async (e, t, r) => k() ? e.apply(t, r) : M(N(e), r)
                })
            }

            function L(e) {
                return new Proxy(e, {
                    apply: async (e, t, r) => {
                        if (k()) return e.apply(t, r);
                        let [n] = r, {
                            req: a,
                            res: o
                        } = n, i = N(e);
                        if (!a || !o) return i.apply(t, r); {
                            let e = A(i, a, o, {
                                    dataFetcherRouteName: n.pathname,
                                    requestedRouteName: n.pathname,
                                    dataFetchingMethodName: "getInitialProps"
                                }),
                                {
                                    data: s,
                                    baggage: l,
                                    sentryTrace: u
                                } = await e.apply(t, r) ? ? {};
                            return "object" == typeof s && null !== s && (u && (s._sentryTraceData = u), l && (s._sentryBaggage = l)), s
                        }
                    }
                })
            }

            function O(e) {
                return new Proxy(e, {
                    apply: async (e, t, r) => {
                        if (k()) return e.apply(t, r);
                        let [n] = r, {
                            req: a,
                            res: o
                        } = n.ctx, i = N(e);
                        if (!a || !o) return i.apply(t, r); {
                            let e = A(i, a, o, {
                                    dataFetcherRouteName: "/_app",
                                    requestedRouteName: n.ctx.pathname,
                                    dataFetchingMethodName: "getInitialProps"
                                }),
                                {
                                    data: s,
                                    sentryTrace: l,
                                    baggage: u
                                } = await e.apply(t, r);
                            return "object" == typeof s && null !== s && (s.pageProps || (s.pageProps = {}), l && (s.pageProps._sentryTraceData = l), u && (s.pageProps._sentryBaggage = u)), s
                        }
                    }
                })
            }

            function D(e) {
                return new Proxy(e, {
                    apply: async (e, t, r) => {
                        if (k()) return e.apply(t, r);
                        let [n] = r, {
                            req: a,
                            res: o
                        } = n, i = N(e);
                        if (!a || !o) return i.apply(t, r); {
                            let e = A(i, a, o, {
                                    dataFetcherRouteName: "/_document",
                                    requestedRouteName: n.pathname,
                                    dataFetchingMethodName: "getInitialProps"
                                }),
                                {
                                    data: s
                                } = await e.apply(t, r);
                            return s
                        }
                    }
                })
            }

            function U(e) {
                return new Proxy(e, {
                    apply: async (e, t, r) => {
                        if (k()) return e.apply(t, r);
                        let [n] = r, {
                            req: a,
                            res: o
                        } = n, i = N(e);
                        if (!a || !o) return i.apply(t, r); {
                            let e = A(i, a, o, {
                                    dataFetcherRouteName: "/_error",
                                    requestedRouteName: n.pathname,
                                    dataFetchingMethodName: "getInitialProps"
                                }),
                                {
                                    data: s,
                                    baggage: l,
                                    sentryTrace: u
                                } = await e.apply(t, r);
                            return "object" == typeof s && null !== s && (u && (s._sentryTraceData = u), l && (s._sentryBaggage = l)), s
                        }
                    }
                })
            }

            function $(e, t) {
                return new Proxy(e, {
                    apply: async (e, r, n) => {
                        if (k()) return e.apply(r, n);
                        let [a] = n, {
                            req: o,
                            res: i
                        } = a, s = A(N(e), o, i, {
                            dataFetcherRouteName: t,
                            requestedRouteName: t,
                            dataFetchingMethodName: "getServerSideProps"
                        }), {
                            data: l,
                            baggage: u,
                            sentryTrace: c
                        } = await s.apply(r, n);
                        return "object" == typeof l && null !== l && "props" in l && (c && (l.props._sentryTraceData = c), u && (l.props._sentryBaggage = u)), l
                    }
                })
            }
            var j = r(69490),
                B = r(85982),
                H = r(12859),
                W = r(90587),
                q = r(85402),
                z = r(38763),
                V = r(87929);
            let G = new WeakMap,
                J = new WeakMap;

            function K(e) {
                if ("object" != typeof e || !e) return new B.H; {
                    let t = J.get(e);
                    if (t) return t; {
                        let t = new B.H;
                        return J.set(e, t), t
                    }
                }
            }

            function Y(e, t) {
                let {
                    componentRoute: r,
                    componentType: n
                } = t;
                return new Proxy(e, {
                    apply: (e, a, o) => {
                        (0, I.Bk)() ? .spanContext().traceId;
                        let i = K(t.headers),
                            s = (0, I.Bk)();
                        if (s) {
                            let e = (0, I.zU)(s),
                                {
                                    scope: t
                                } = (0, j.L)(e);
                            (0, j.d)(e, t ? ? new B.H, i)
                        }
                        let l = t.headers ? p(t.headers) : void 0;
                        return i.setSDKProcessingMetadata({
                            normalizedRequest: {
                                headers: l
                            }
                        }), (0, d.rB)(i, () => (0, d.v4)(t => {
                            t.setTransactionName(`${n} Server Component (${r})`);
                            let i = (0, I.Bk)();
                            if (i) {
                                let e = (0, I.zU)(i),
                                    t = l ? .["sentry-trace"];
                                t && e.setAttribute(R, t)
                            }
                            return (0, H.nV)({
                                op: "function.nextjs",
                                name: `${n} Server Component (${r})`,
                                attributes: {
                                    [W.i_]: "component",
                                    [W.JD]: "auto.function.nextjs",
                                    "sentry.nextjs.ssr.function.type": n,
                                    "sentry.nextjs.ssr.function.route": r
                                }
                            }, t => (0, q.x)(() => e.apply(a, o), e => {
                                (0, V.Y)(e) ? t.setStatus({
                                    code: z.TJ,
                                    message: "not_found"
                                }): (0, V.V)(e) ? t.setStatus({
                                    code: z.F3
                                }) : (t.setStatus({
                                    code: z.TJ,
                                    message: "internal_error"
                                }), (0, m.Cp)(e, {
                                    mechanism: {
                                        handled: !1
                                    }
                                }))
                            }, () => {
                                t.end(), y(w())
                            }))
                        }))
                    }
                })
            }

            function Z(e, t) {
                let {
                    method: r,
                    parameterizedRoute: n,
                    headers: a
                } = t;
                return new Proxy(e, {
                    apply: async (e, t, a) => {
                        let o = (0, I.Bk)(),
                            i = o ? (0, I.zU)(o) : void 0;
                        return (0, d.rB)((0, d.rm)(), () => (0, d.v4)(async s => {
                            s.setTransactionName(`${r} ${n}`);
                            let l = await (0, q.x)(() => e.apply(t, a), e => {
                                (0, V.V)(e) || ((0, V.Y)(e) ? (o && (0, z.N8)(o, 404), i && (0, z.N8)(i, 404)) : (0, m.Cp)(e, {
                                    mechanism: {
                                        handled: !1
                                    }
                                }))
                            });
                            try {
                                l.status && (o && (0, z.N8)(o, l.status), i && (0, z.N8)(i, l.status))
                            } catch {}
                            return l
                        }))
                    }
                })
            }

            function X(e, t) {
                return new Proxy(e, {
                    apply: (e, r, n) => {
                        let a;
                        if (!n ? .[0]) return e.apply(r, n);
                        let [o] = n, i = "nextUrl" in o ? o.nextUrl.pathname : o.url, s = "nextUrl" in o ? o.headers.get("user-agent") : o.headers["user-agent"];
                        if (!t || !s ? .includes("vercel-cron")) return e.apply(r, n);
                        let l = t.find(e => e.path === i);
                        if (!l ? .path || !l.schedule) return e.apply(r, n);
                        let u = l.path,
                            c = (0, m.SE)({
                                monitorSlug: u,
                                status: "in_progress"
                            }, {
                                maxRuntime: 720,
                                schedule: {
                                    type: "crontab",
                                    value: l.schedule
                                }
                            }),
                            d = Date.now() / 1e3,
                            p = () => {
                                (0, m.SE)({
                                    checkInId: c,
                                    monitorSlug: u,
                                    status: "error",
                                    duration: Date.now() / 1e3 - d
                                })
                            };
                        try {
                            a = e.apply(r, n)
                        } catch (e) {
                            throw p(), e
                        }
                        return "object" == typeof a && null !== a && "then" in a ? Promise.resolve(a).then(() => {
                            (0, m.SE)({
                                checkInId: c,
                                monitorSlug: u,
                                status: "ok",
                                duration: Date.now() / 1e3 - d
                            })
                        }, () => {
                            p()
                        }) : (0, m.SE)({
                            checkInId: c,
                            monitorSlug: u,
                            status: "ok",
                            duration: Date.now() / 1e3 - d
                        }), a
                    }
                })
            }

            function Q(e) {
                return new Proxy(e, {
                    apply: async (e, t, r) => (0, d.rB)(n => {
                        let a, o, i = r[0],
                            s = (0, d.o5)();
                        i instanceof Request ? (n.setSDKProcessingMetadata({
                            normalizedRequest: function(e) {
                                let t = p(e.headers);
                                return {
                                    method: e.method,
                                    url: e.url,
                                    query_string: _(e.url),
                                    headers: t
                                }
                            }(i)
                        }), a = `middleware ${i.method} ${new URL(i.url).pathname}`, o = "url") : (a = "middleware", o = "component"), s.setTransactionName(a);
                        let l = (0, I.Bk)();
                        if (l) {
                            a = "middleware", o = "component";
                            let e = (0, I.zU)(l);
                            e && (0, j.d)(e, s, n)
                        }
                        return (0, H.Lk)({
                            name: a,
                            op: "http.server.middleware",
                            attributes: {
                                [W.i_]: o,
                                [W.JD]: "auto.function.nextjs.wrapMiddlewareWithSentry"
                            }
                        }, () => (0, q.x)(() => e.apply(t, r), e => {
                            (0, m.Cp)(e, {
                                mechanism: {
                                    type: "instrument",
                                    handled: !1
                                }
                            })
                        }, () => {
                            y(w())
                        }))
                    })
                })
            }
            var ee = r(71852);

            function et(e) {
                return "function" == typeof e && e ? .prototype ? .isReactComponent ? class extends e {
                    render(...e) {
                        return (0, d.rB)(() => {
                            let t = (0, d.o5)(),
                                r = "object" == typeof this.props && null !== this.props && "_sentryTraceData" in this.props && "string" == typeof this.props._sentryTraceData ? this.props._sentryTraceData : void 0;
                            if (r) {
                                let e = (0, ee.nc)(r);
                                t.setContext("trace", {
                                    span_id: e ? .parentSpanId,
                                    trace_id: e ? .traceId
                                })
                            }
                            try {
                                return super.render(...e)
                            } catch (e) {
                                throw (0, m.Cp)(e, {
                                    mechanism: {
                                        handled: !1
                                    }
                                }), e
                            }
                        })
                    }
                } : "function" == typeof e ? new Proxy(e, {
                    apply: (e, t, r) => (0, d.rB)(() => {
                        let n = (0, d.o5)(),
                            a = r ? .[0] ? ._sentryTraceData;
                        if (a) {
                            let e = (0, ee.nc)(a);
                            n.setContext("trace", {
                                span_id: e ? .parentSpanId,
                                trace_id: e ? .traceId
                            })
                        }
                        try {
                            return e.apply(t, r)
                        } catch (e) {
                            throw (0, m.Cp)(e, {
                                mechanism: {
                                    handled: !1
                                }
                            }), e
                        }
                    })
                }) : e
            }

            function er(e, t) {
                let {
                    requestAsyncStorage: r,
                    componentRoute: n,
                    componentType: a,
                    generationFunctionIdentifier: o
                } = t;
                return new Proxy(e, {
                    apply: (e, t, i) => {
                        let s, l, u = (0, I.Bk)() ? .spanContext().traceId;
                        try {
                            s = r ? .getStore() ? .headers
                        } catch (e) {}
                        let c = K(s),
                            f = (0, I.Bk)();
                        if (f) {
                            let e = (0, I.zU)(f),
                                {
                                    scope: t
                                } = (0, j.L)(e);
                            (0, j.d)(e, t ? ? new B.H, c)
                        }
                        if ((0, d.KU)() ? .getOptions().sendDefaultPii) {
                            let e = i[0];
                            l = {
                                params: e && "object" == typeof e && "params" in e ? e.params : void 0,
                                searchParams: e && "object" == typeof e && "searchParams" in e ? e.searchParams : void 0
                            }
                        }
                        let h = s ? p(s) : void 0;
                        return (0, d.rB)(c, () => (0, d.v4)(r => {
                            r.setTransactionName(`${a}.${o} (${n})`), c.setSDKProcessingMetadata({
                                normalizedRequest: {
                                    headers: h
                                }
                            });
                            let d = (0, I.Bk)();
                            if (d) {
                                let e = (0, I.zU)(d),
                                    t = h ? .["sentry-trace"];
                                t && e.setAttribute(R, t)
                            }
                            let p = function(e, t) {
                                if ("object" != typeof e || !e) return t; {
                                    let r = G.get(e);
                                    return r || (G.set(e, t), t)
                                }
                            }(s, (0, ee.kM)(h ? .["sentry-trace"], h ? .baggage));
                            return u && (p.traceId = u), r.setPropagationContext(p), r.setExtra("route_data", l), (0, H.nV)({
                                op: "function.nextjs",
                                name: `${a}.${o} (${n})`,
                                attributes: {
                                    [W.i_]: "route",
                                    [W.JD]: "auto.function.nextjs",
                                    "sentry.nextjs.ssr.function.type": o,
                                    "sentry.nextjs.ssr.function.route": n
                                }
                            }, r => (0, q.x)(() => e.apply(t, i), e => {
                                (0, V.Y)(e) ? (r.setStatus({
                                    code: z.TJ,
                                    message: "not_found"
                                }), (0, I.zU)(r).setStatus({
                                    code: z.TJ,
                                    message: "not_found"
                                })) : (0, V.V)(e) ? r.setStatus({
                                    code: z.F3
                                }): (r.setStatus({
                                    code: z.TJ,
                                    message: "internal_error"
                                }), (0, I.zU)(r).setStatus({
                                    code: z.TJ,
                                    message: "internal_error"
                                }), (0, m.Cp)(e, {
                                    mechanism: {
                                        handled: !1
                                    }
                                }))
                            }, () => {
                                r.end()
                            }))
                        }))
                    }
                })
            }

            function en(...e) {
                if ("function" == typeof e[1]) {
                    let [t, r] = e;
                    return ea(t, {}, r)
                } {
                    let [t, r, n] = e;
                    return ea(t, r, n)
                }
            }
            async function ea(e, t, r) {
                return (0, d.rB)(async n => {
                    let a, o, i = (0, d.KU)() ? .getOptions().sendDefaultPii,
                        s = {};
                    try {
                        let e = await t.headers;
                        a = e ? .get("sentry-trace") ? ? void 0, o = e ? .get("baggage"), e ? .forEach((e, t) => {
                            s[t] = e
                        })
                    } catch (e) {
                        b.T && v.vF.warn("Sentry wasn't able to extract the tracing headers for a server action. Will not trace this request.")
                    }
                    return n.setTransactionName(`serverAction/${e}`), n.setSDKProcessingMetadata({
                        normalizedRequest: {
                            headers: s
                        }
                    }), ((0, I.Bk)() ? (e, t) => t() : H.V4)({
                        sentryTrace: a,
                        baggage: o
                    }, async () => {
                        try {
                            return await (0, H.Lk)({
                                op: "function.server_action",
                                name: `serverAction/${e}`,
                                forceTransaction: !0,
                                attributes: {
                                    [W.i_]: "route"
                                }
                            }, async e => {
                                let n = await (0, q.x)(r, t => {
                                    (0, V.Y)(t) ? e.setStatus({
                                        code: z.TJ,
                                        message: "not_found"
                                    }): (0, V.V)(t) || (e.setStatus({
                                        code: z.TJ,
                                        message: "internal_error"
                                    }), (0, m.Cp)(t, {
                                        mechanism: {
                                            handled: !1
                                        }
                                    }))
                                });
                                return (void 0 !== t.recordResponse ? t.recordResponse : i) && (0, d.rm)().setExtra("server_action_result", n), t.formData && t.formData.forEach((e, t) => {
                                    (0, d.rm)().setExtra(`server_action_form_data.${t}`, "string" == typeof e ? e : "[non-string value]")
                                }), n
                            })
                        } finally {
                            y(w())
                        }
                    })
                })
            }

            function eo(e, t, r) {
                (0, d.v4)(n => {
                    n.setSDKProcessingMetadata({
                        normalizedRequest: {
                            headers: f(t.headers),
                            method: t.method
                        }
                    }), n.setContext("nextjs", {
                        request_path: t.path,
                        router_kind: r.routerKind,
                        router_path: r.routePath,
                        route_type: r.routeType
                    }), n.setTransactionName(r.routePath), (0, m.Cp)(e, {
                        mechanism: {
                            handled: !1
                        }
                    }), y(w())
                })
            }

            function ei(e, t = {}, r = (0, d.o5)()) {
                let {
                    message: n,
                    name: a,
                    email: o,
                    url: i,
                    source: s,
                    associatedEventId: l,
                    tags: u
                } = e, c = {
                    contexts: {
                        feedback: {
                            contact_email: o,
                            name: a,
                            message: n,
                            url: i,
                            source: s,
                            associated_event_id: l
                        }
                    },
                    type: "feedback",
                    level: "info",
                    tags: u
                }, p = r ? .getClient() || (0, d.KU)();
                return p && p.emit("beforeSendFeedback", c, t), r.captureEvent(c, t)
            }
            var es = r(78982),
                el = r(32288),
                eu = r(76899);
            let ec = g.O,
                ed = ec.document,
                ep = ec.navigator,
                ef = "Report a Bug",
                eh = "Cancel",
                e_ = "Send Bug Report",
                em = "Confirm",
                eg = "Report a Bug",
                ey = "your.email@example.org",
                ev = "Email",
                eb = "What's the bug? What did you expect?",
                ew = "Description",
                eS = "Your Name",
                eE = "Name",
                eC = "Thank you for your report!",
                ex = "(required)",
                eT = "Add a screenshot",
                ek = "Remove screenshot",
                eI = (e, t = {
                    includeReplay: !0
                }) => {
                    if (!e.message) throw Error("Unable to submit feedback with empty message");
                    let r = (0, d.KU)();
                    if (!r) throw Error("No client setup, cannot send feedback.");
                    e.tags && Object.keys(e.tags).length && (0, d.o5)().setTags(e.tags);
                    let n = ei({
                        source: "api",
                        url: (0, es.$N)(),
                        ...e
                    }, t);
                    return new Promise((e, t) => {
                        let a = setTimeout(() => t("Unable to determine if Feedback was correctly sent."), 5e3),
                            o = r.on("afterSendEvent", (r, i) => {
                                if (r.event_id === n) return (clearTimeout(a), o(), i && "number" == typeof i.statusCode && i.statusCode >= 200 && i.statusCode < 300) ? e(n) : i && "number" == typeof i.statusCode && 0 === i.statusCode ? t("Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker.") : i && "number" == typeof i.statusCode && 403 === i.statusCode ? t("Unable to send Feedback. This could be because this domain is not in your list of allowed domains.") : t("Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker")
                            })
                    })
                };

            function eP(e, t) {
                return { ...e,
                    ...t,
                    tags: { ...e.tags,
                        ...t.tags
                    },
                    onFormOpen: () => {
                        t.onFormOpen ? .(), e.onFormOpen ? .()
                    },
                    onFormClose: () => {
                        t.onFormClose ? .(), e.onFormClose ? .()
                    },
                    onSubmitSuccess: r => {
                        t.onSubmitSuccess ? .(r), e.onSubmitSuccess ? .(r)
                    },
                    onSubmitError: r => {
                        t.onSubmitError ? .(r), e.onSubmitError ? .(r)
                    },
                    onFormSubmitted: () => {
                        t.onFormSubmitted ? .(), e.onFormSubmitted ? .()
                    },
                    themeDark: { ...e.themeDark,
                        ...t.themeDark
                    },
                    themeLight: { ...e.themeLight,
                        ...t.themeLight
                    }
                }
            }

            function eR(e, t) {
                return Object.entries(t).forEach(([t, r]) => {
                    e.setAttributeNS(null, t, r)
                }), e
            }
            let eN = "rgba(88, 74, 192, 1)",
                eA = {
                    foreground: "#2b2233",
                    background: "#ffffff",
                    accentForeground: "white",
                    accentBackground: eN,
                    successColor: "#268d75",
                    errorColor: "#df3338",
                    border: "1.5px solid rgba(41, 35, 47, 0.13)",
                    boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
                    outline: "1px auto var(--accent-background)",
                    interactiveFilter: "brightness(95%)"
                },
                eM = {
                    foreground: "#ebe6ef",
                    background: "#29232f",
                    accentForeground: "white",
                    accentBackground: eN,
                    successColor: "#2da98c",
                    errorColor: "#f55459",
                    border: "1.5px solid rgba(235, 230, 239, 0.15)",
                    boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
                    outline: "1px auto var(--accent-background)",
                    interactiveFilter: "brightness(150%)"
                };

            function eF(e) {
                return `
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `
            }
            let eL = ({
                lazyLoadIntegration: e,
                getModalIntegration: t,
                getScreenshotIntegration: r
            }) => ({
                id: n = "sentry-feedback",
                autoInject: a = !0,
                showBranding: o = !0,
                isEmailRequired: i = !1,
                isNameRequired: s = !1,
                showEmail: l = !0,
                showName: u = !0,
                enableScreenshot: c = !0,
                useSentryUser: d = {
                    email: "email",
                    name: "username"
                },
                tags: p,
                styleNonce: f,
                scriptNonce: h,
                colorScheme: _ = "system",
                themeLight: m = {},
                themeDark: g = {},
                addScreenshotButtonLabel: y = eT,
                cancelButtonLabel: v = eh,
                confirmButtonLabel: b = em,
                emailLabel: w = ev,
                emailPlaceholder: S = ey,
                formTitle: E = eg,
                isRequiredLabel: C = ex,
                messageLabel: x = ew,
                messagePlaceholder: T = eb,
                nameLabel: k = eE,
                namePlaceholder: I = eS,
                removeScreenshotButtonLabel: P = ek,
                submitButtonLabel: R = e_,
                successMessageText: N = eC,
                triggerLabel: A = ef,
                triggerAriaLabel: M = "",
                onFormOpen: F,
                onFormClose: L,
                onSubmitSuccess: O,
                onSubmitError: D,
                onFormSubmitted: U
            } = {}) => {
                let $ = {
                        id: n,
                        autoInject: a,
                        showBranding: o,
                        isEmailRequired: i,
                        isNameRequired: s,
                        showEmail: l,
                        showName: u,
                        enableScreenshot: c,
                        useSentryUser: d,
                        tags: p,
                        styleNonce: f,
                        scriptNonce: h,
                        colorScheme: _,
                        themeDark: g,
                        themeLight: m,
                        triggerLabel: A,
                        triggerAriaLabel: M,
                        cancelButtonLabel: v,
                        submitButtonLabel: R,
                        confirmButtonLabel: b,
                        formTitle: E,
                        emailLabel: w,
                        emailPlaceholder: S,
                        messageLabel: x,
                        messagePlaceholder: T,
                        nameLabel: k,
                        namePlaceholder: I,
                        successMessageText: N,
                        isRequiredLabel: C,
                        addScreenshotButtonLabel: y,
                        removeScreenshotButtonLabel: P,
                        onFormClose: L,
                        onFormOpen: F,
                        onSubmitError: D,
                        onSubmitSuccess: O,
                        onFormSubmitted: U
                    },
                    j = null,
                    B = [],
                    H = e => {
                        if (!j) {
                            let t = ed.createElement("div");
                            t.id = String(e.id), ed.body.appendChild(t), (j = t.attachShadow({
                                mode: "open"
                            })).appendChild(function({
                                colorScheme: e,
                                themeDark: t,
                                themeLight: r,
                                styleNonce: n
                            }) {
                                let a = ed.createElement("style");
                                return a.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${"system"!==e?"color-scheme: only light;":""}

  ${eF("dark"===e?{...eM,...t}:{...eA,...r})}
}

${"system"===e?`
@media (prefers-color-scheme: dark) {
  :host {
    ${eF({...eM,...t})}
  }
}`:""}
}
`, n && a.setAttribute("nonce", n), a
                            }(e))
                        }
                        return j
                    },
                    W = async n => {
                        let a, o, i = n.enableScreenshot && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ep.userAgent) || /Macintosh/i.test(ep.userAgent) && ep.maxTouchPoints && ep.maxTouchPoints > 1) && !!isSecureContext;
                        try {
                            a = (t ? t() : await e("feedbackModalIntegration", h))(), (0, el.Q8)(a)
                        } catch {
                            throw Error("[Feedback] Missing feedback modal integration!")
                        }
                        try {
                            let t = i ? r ? r() : await e("feedbackScreenshotIntegration", h) : void 0;
                            t && (o = t(), (0, el.Q8)(o))
                        } catch {}
                        let s = a.createDialog({
                            options: { ...n,
                                onFormClose: () => {
                                    s ? .close(), n.onFormClose ? .()
                                },
                                onFormSubmitted: () => {
                                    s ? .close(), n.onFormSubmitted ? .()
                                }
                            },
                            screenshotIntegration: o,
                            sendFeedback: eI,
                            shadow: H(n)
                        });
                        return s
                    },
                    q = (e, t = {}) => {
                        let r = eP($, t),
                            n = "string" == typeof e ? ed.querySelector(e) : "function" == typeof e.addEventListener ? e : null;
                        if (!n) throw Error("Unable to attach to target element");
                        let a = null,
                            o = async () => {
                                a || (a = await W({ ...r,
                                    onFormSubmitted: () => {
                                        a ? .removeFromDom(), r.onFormSubmitted ? .()
                                    }
                                })), a.appendToDom(), a.open()
                            };
                        n.addEventListener("click", o);
                        let i = () => {
                            B = B.filter(e => e !== i), a ? .removeFromDom(), a = null, n.removeEventListener("click", o)
                        };
                        return B.push(i), i
                    },
                    z = (e = {}) => {
                        let t = eP($, e),
                            r = H(t),
                            n = function({
                                triggerLabel: e,
                                triggerAriaLabel: t,
                                shadow: r,
                                styleNonce: n
                            }) {
                                let a = ed.createElement("button");
                                if (a.type = "button", a.className = "widget__actor", a.ariaHidden = "false", a.ariaLabel = t || e || ef, a.appendChild(function() {
                                        let e = e => ec.document.createElementNS("http://www.w3.org/2000/svg", e),
                                            t = eR(e("svg"), {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "var(--actor-color, var(--foreground))"
                                            }),
                                            r = eR(e("g"), {
                                                clipPath: "url(#clip0_57_80)"
                                            }),
                                            n = eR(e("path"), {
                                                "fill-rule": "evenodd",
                                                "clip-rule": "evenodd",
                                                d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
                                            });
                                        t.appendChild(r).appendChild(n);
                                        let a = e("defs"),
                                            o = eR(e("clipPath"), {
                                                id: "clip0_57_80"
                                            }),
                                            i = eR(e("rect"), {
                                                width: "20",
                                                height: "20",
                                                fill: "white"
                                            });
                                        return o.appendChild(i), a.appendChild(o), t.appendChild(a).appendChild(o).appendChild(i), t
                                    }()), e) {
                                    let t = ed.createElement("span");
                                    t.appendChild(ed.createTextNode(e)), a.appendChild(t)
                                }
                                let o = function(e) {
                                    let t = ed.createElement("style");
                                    return t.textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`, e && t.setAttribute("nonce", e), t
                                }(n);
                                return {
                                    el: a,
                                    appendToDom() {
                                        r.appendChild(o), r.appendChild(a)
                                    },
                                    removeFromDom() {
                                        a.remove(), o.remove()
                                    },
                                    show() {
                                        a.ariaHidden = "false"
                                    },
                                    hide() {
                                        a.ariaHidden = "true"
                                    }
                                }
                            }({
                                triggerLabel: t.triggerLabel,
                                triggerAriaLabel: t.triggerAriaLabel,
                                shadow: r,
                                styleNonce: f
                            });
                        return q(n.el, { ...t,
                            onFormOpen() {
                                n.hide()
                            },
                            onFormClose() {
                                n.show()
                            },
                            onFormSubmitted() {
                                n.show()
                            }
                        }), n
                    };
                return {
                    name: "Feedback",
                    setupOnce() {
                        (0, eu.B)() && $.autoInject && ("loading" === ed.readyState ? ed.addEventListener("DOMContentLoaded", () => z().appendToDom()) : z().appendToDom())
                    },
                    attachTo: q,
                    createWidget(e = {}) {
                        let t = z(eP($, e));
                        return t.appendToDom(), t
                    },
                    createForm: async (e = {}) => W(eP($, e)),
                    remove() {
                        j && (j.parentElement ? .remove(), j = null), B.forEach(e => e()), B = []
                    }
                }
            };

            function eO() {
                let e = (0, d.KU)();
                return e ? .getIntegrationByName("Feedback")
            }
            var eD, eU, e$, ej, eB, eH, eW, eq = {},
                ez = [],
                eV = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                eG = Array.isArray;

            function eJ(e, t) {
                for (var r in t) e[r] = t[r];
                return e
            }

            function eK(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function eY(e, t, r) {
                var n, a, o, i = {};
                for (o in t) "key" == o ? n = t[o] : "ref" == o ? a = t[o] : i[o] = t[o];
                if (arguments.length > 2 && (i.children = arguments.length > 3 ? eD.call(arguments, 2) : r), "function" == typeof e && null != e.defaultProps)
                    for (o in e.defaultProps) void 0 === i[o] && (i[o] = e.defaultProps[o]);
                return eZ(e, i, n, a, null)
            }

            function eZ(e, t, r, n, a) {
                var o = {
                    type: e,
                    props: t,
                    key: r,
                    ref: n,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    constructor: void 0,
                    __v: null == a ? ++e$ : a,
                    __i: -1,
                    __u: 0
                };
                return null == a && null != eU.vnode && eU.vnode(o), o
            }

            function eX(e) {
                return e.children
            }

            function eQ(e, t) {
                this.props = e, this.context = t
            }

            function e0(e, t) {
                if (null == t) return e.__ ? e0(e.__, e.__i + 1) : null;
                for (var r; t < e.__k.length; t++)
                    if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
                return "function" == typeof e.type ? e0(e) : null
            }

            function e1(e) {
                (!e.__d && (e.__d = !0) && ej.push(e) && !e2.__r++ || eB !== eU.debounceRendering) && ((eB = eU.debounceRendering) || eH)(e2)
            }

            function e2() {
                var e, t, r, n = [],
                    a = [];
                for (ej.sort(eW); e = ej.shift();) e.__d && (r = ej.length, t = function(e, t, r) {
                    var n, a = e.__v,
                        o = a.__e,
                        i = e.__P;
                    if (i) return (n = eJ({}, a)).__v = a.__v + 1, eU.vnode && eU.vnode(n), e8(i, n, a, e.__n, void 0 !== i.ownerSVGElement, 32 & a.__u ? [o] : null, t, null == o ? e0(a) : o, !!(32 & a.__u), r), n.__.__k[n.__i] = n, n.__d = void 0, n.__e != o && function e(t) {
                        var r, n;
                        if (null != (t = t.__) && null != t.__c) {
                            for (t.__e = t.__c.base = null, r = 0; r < t.__k.length; r++)
                                if (null != (n = t.__k[r]) && null != n.__e) {
                                    t.__e = t.__c.base = n.__e;
                                    break
                                }
                            return e(t)
                        }
                    }(n), n
                }(e, n, a) || t, 0 === r || ej.length > r ? (e9(n, t, a), a.length = n.length = 0, t = void 0, ej.sort(eW)) : t && eU.__c && eU.__c(t, ez));
                t && e9(n, t, a), e2.__r = 0
            }

            function e6(e, t, r, n, a, o, i, s, l, u, c) {
                var d, p, f, h, _, m = n && n.__k || ez,
                    g = t.length;
                for (r.__d = l, function(e, t, r) {
                        var n, a, o, i, s, l = t.length,
                            u = r.length,
                            c = u,
                            d = 0;
                        for (e.__k = [], n = 0; n < l; n++) null != (a = e.__k[n] = null == (a = t[n]) || "boolean" == typeof a || "function" == typeof a ? null : "string" == typeof a || "number" == typeof a || "bigint" == typeof a || a.constructor == String ? eZ(null, a, null, null, a) : eG(a) ? eZ(eX, {
                            children: a
                        }, null, null, null) : void 0 === a.constructor && a.__b > 0 ? eZ(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a) ? (a.__ = e, a.__b = e.__b + 1, s = function(e, t, r, n) {
                            var a = e.key,
                                o = e.type,
                                i = r - 1,
                                s = r + 1,
                                l = t[r];
                            if (null === l || l && a == l.key && o === l.type) return r;
                            if (n > +(null != l && 0 == (131072 & l.__u)))
                                for (; i >= 0 || s < t.length;) {
                                    if (i >= 0) {
                                        if ((l = t[i]) && 0 == (131072 & l.__u) && a == l.key && o === l.type) return i;
                                        i--
                                    }
                                    if (s < t.length) {
                                        if ((l = t[s]) && 0 == (131072 & l.__u) && a == l.key && o === l.type) return s;
                                        s++
                                    }
                                }
                            return -1
                        }(a, r, i = n + d, c), a.__i = s, o = null, -1 !== s && (c--, (o = r[s]) && (o.__u |= 131072)), null == o || null === o.__v ? (-1 == s && d--, "function" != typeof a.type && (a.__u |= 65536)) : s !== i && (s === i + 1 ? d++ : s > i ? c > l - i ? d += s - i : d-- : d = s < i && s == i - 1 ? s - i : 0, s !== n + d && (a.__u |= 65536))) : (o = r[n]) && null == o.key && o.__e && (o.__e == e.__d && (e.__d = e0(o)), tt(o, o, !1), r[n] = null, c--);
                        if (c)
                            for (n = 0; n < u; n++) null != (o = r[n]) && 0 == (131072 & o.__u) && (o.__e == e.__d && (e.__d = e0(o)), tt(o, o))
                    }(r, t, m), l = r.__d, d = 0; d < g; d++) null != (f = r.__k[d]) && "boolean" != typeof f && "function" != typeof f && (p = -1 === f.__i ? eq : m[f.__i] || eq, f.__i = d, e8(e, f, p, a, o, i, s, l, u, c), h = f.__e, f.ref && p.ref != f.ref && (p.ref && te(p.ref, null, f), c.push(f.ref, f.__c || h, f)), null == _ && null != h && (_ = h), 65536 & f.__u || p.__k === f.__k ? l = function e(t, r, n) {
                    var a, o;
                    if ("function" == typeof t.type) {
                        for (a = t.__k, o = 0; a && o < a.length; o++) a[o] && (a[o].__ = t, r = e(a[o], r, n));
                        return r
                    }
                    t.__e != r && (n.insertBefore(t.__e, r || null), r = t.__e);
                    do r = r && r.nextSibling; while (null != r && 8 === r.nodeType);
                    return r
                }(f, l, e) : "function" == typeof f.type && void 0 !== f.__d ? l = f.__d : h && (l = h.nextSibling), f.__d = void 0, f.__u &= -196609);
                r.__d = l, r.__e = _
            }

            function e4(e, t, r) {
                "-" === t[0] ? e.setProperty(t, null == r ? "" : r) : e[t] = null == r ? "" : "number" != typeof r || eV.test(t) ? r : r + "px"
            }

            function e5(e, t, r, n, a) {
                var o;
                e: if ("style" === t)
                    if ("string" == typeof r) e.style.cssText = r;
                    else {
                        if ("string" == typeof n && (e.style.cssText = n = ""), n)
                            for (t in n) r && t in r || e4(e.style, t, "");
                        if (r)
                            for (t in r) n && r[t] === n[t] || e4(e.style, t, r[t])
                    }
                else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = r, r ? n ? r.u = n.u : (r.u = Date.now(), e.addEventListener(t, o ? e7 : e3, o)) : e.removeEventListener(t, o ? e7 : e3, o);
                else {
                    if (a) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
                        e[t] = null == r ? "" : r;
                        break e
                    } catch (e) {}
                    "function" == typeof r || (null == r || !1 === r && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, r))
                }
            }

            function e3(e) {
                if (this.l) {
                    var t = this.l[e.type + !1];
                    if (e.t) {
                        if (e.t <= t.u) return
                    } else e.t = Date.now();
                    return t(eU.event ? eU.event(e) : e)
                }
            }

            function e7(e) {
                if (this.l) return this.l[e.type + !0](eU.event ? eU.event(e) : e)
            }

            function e8(e, t, r, n, a, o, i, s, l, u) {
                var c, d, p, f, h, _, m, g, y, v, b, w, S, E, C, x = t.type;
                if (void 0 !== t.constructor) return null;
                128 & r.__u && (l = !!(32 & r.__u), o = [s = t.__e = r.__e]), (c = eU.__b) && c(t);
                e: if ("function" == typeof x) try {
                    if (g = t.props, y = (c = x.contextType) && n[c.__c], v = c ? y ? y.props.value : c.__ : n, r.__c ? m = (d = t.__c = r.__c).__ = d.__E : ("prototype" in x && x.prototype.render ? t.__c = d = new x(g, v) : (t.__c = d = new eQ(g, v), d.constructor = x, d.render = tr), y && y.sub(d), d.props = g, d.state || (d.state = {}), d.context = v, d.__n = n, p = d.__d = !0, d.__h = [], d._sb = []), null == d.__s && (d.__s = d.state), null != x.getDerivedStateFromProps && (d.__s == d.state && (d.__s = eJ({}, d.__s)), eJ(d.__s, x.getDerivedStateFromProps(g, d.__s))), f = d.props, h = d.state, d.__v = t, p) null == x.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
                    else {
                        if (null == x.getDerivedStateFromProps && g !== f && null != d.componentWillReceiveProps && d.componentWillReceiveProps(g, v), !d.__e && (null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(g, d.__s, v) || t.__v === r.__v)) {
                            for (t.__v !== r.__v && (d.props = g, d.state = d.__s, d.__d = !1), t.__e = r.__e, t.__k = r.__k, t.__k.forEach(function(e) {
                                    e && (e.__ = t)
                                }), b = 0; b < d._sb.length; b++) d.__h.push(d._sb[b]);
                            d._sb = [], d.__h.length && i.push(d);
                            break e
                        }
                        null != d.componentWillUpdate && d.componentWillUpdate(g, d.__s, v), null != d.componentDidUpdate && d.__h.push(function() {
                            d.componentDidUpdate(f, h, _)
                        })
                    }
                    if (d.context = v, d.props = g, d.__P = e, d.__e = !1, w = eU.__r, S = 0, "prototype" in x && x.prototype.render) {
                        for (d.state = d.__s, d.__d = !1, w && w(t), c = d.render(d.props, d.state, d.context), E = 0; E < d._sb.length; E++) d.__h.push(d._sb[E]);
                        d._sb = []
                    } else
                        do d.__d = !1, w && w(t), c = d.render(d.props, d.state, d.context), d.state = d.__s; while (d.__d && ++S < 25);
                    d.state = d.__s, null != d.getChildContext && (n = eJ(eJ({}, n), d.getChildContext())), p || null == d.getSnapshotBeforeUpdate || (_ = d.getSnapshotBeforeUpdate(f, h)), e6(e, eG(C = null != c && c.type === eX && null == c.key ? c.props.children : c) ? C : [C], t, r, n, a, o, i, s, l, u), d.base = t.__e, t.__u &= -161, d.__h.length && i.push(d), m && (d.__E = d.__ = null)
                } catch (e) {
                    t.__v = null, l || null != o ? (t.__e = s, t.__u |= l ? 160 : 32, o[o.indexOf(s)] = null) : (t.__e = r.__e, t.__k = r.__k), eU.__e(e, t, r)
                } else null == o && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = function(e, t, r, n, a, o, i, s, l) {
                    var u, c, d, p, f, h, _, m = r.props,
                        g = t.props,
                        y = t.type;
                    if ("svg" === y && (a = !0), null != o) {
                        for (u = 0; u < o.length; u++)
                            if ((f = o[u]) && "setAttribute" in f == !!y && (y ? f.localName === y : 3 === f.nodeType)) {
                                e = f, o[u] = null;
                                break
                            }
                    }
                    if (null == e) {
                        if (null === y) return document.createTextNode(g);
                        e = a ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, g.is && g), o = null, s = !1
                    }
                    if (null === y) m === g || s && e.data === g || (e.data = g);
                    else {
                        if (o = o && eD.call(e.childNodes), m = r.props || eq, !s && null != o)
                            for (m = {}, u = 0; u < e.attributes.length; u++) m[(f = e.attributes[u]).name] = f.value;
                        for (u in m) f = m[u], "children" == u || ("dangerouslySetInnerHTML" == u ? d = f : "key" === u || u in g || e5(e, u, null, f, a));
                        for (u in g) f = g[u], "children" == u ? p = f : "dangerouslySetInnerHTML" == u ? c = f : "value" == u ? h = f : "checked" == u ? _ = f : "key" === u || s && "function" != typeof f || m[u] === f || e5(e, u, f, m[u], a);
                        if (c) s || d && (c.__html === d.__html || c.__html === e.innerHTML) || (e.innerHTML = c.__html), t.__k = [];
                        else if (d && (e.innerHTML = ""), e6(e, eG(p) ? p : [p], t, r, n, a && "foreignObject" !== y, o, i, o ? o[0] : r.__k && e0(r, 0), s, l), null != o)
                            for (u = o.length; u--;) null != o[u] && eK(o[u]);
                        s || (u = "value", void 0 === h || h === e[u] && ("progress" !== y || h) && ("option" !== y || h === m[u]) || e5(e, u, h, m[u], !1), u = "checked", void 0 !== _ && _ !== e[u] && e5(e, u, _, m[u], !1))
                    }
                    return e
                }(r.__e, t, r, n, a, o, i, l, u);
                (c = eU.diffed) && c(t)
            }

            function e9(e, t, r) {
                for (var n = 0; n < r.length; n++) te(r[n], r[++n], r[++n]);
                eU.__c && eU.__c(t, e), e.some(function(t) {
                    try {
                        e = t.__h, t.__h = [], e.some(function(e) {
                            e.call(t)
                        })
                    } catch (e) {
                        eU.__e(e, t.__v)
                    }
                })
            }

            function te(e, t, r) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    eU.__e(e, r)
                }
            }

            function tt(e, t, r) {
                var n, a;
                if (eU.unmount && eU.unmount(e), (n = e.ref) && (n.current && n.current !== e.__e || te(n, null, t)), null != (n = e.__c)) {
                    if (n.componentWillUnmount) try {
                        n.componentWillUnmount()
                    } catch (e) {
                        eU.__e(e, t)
                    }
                    n.base = n.__P = null, e.__c = void 0
                }
                if (n = e.__k)
                    for (a = 0; a < n.length; a++) n[a] && tt(n[a], t, r || "function" != typeof e.type);
                r || null == e.__e || eK(e.__e), e.__ = e.__e = e.__d = void 0
            }

            function tr(e, t, r) {
                return this.constructor(e, r)
            }
            eD = ez.slice, eU = {
                __e: function(e, t, r, n) {
                    for (var a, o, i; t = t.__;)
                        if ((a = t.__c) && !a.__) try {
                            if ((o = a.constructor) && null != o.getDerivedStateFromError && (a.setState(o.getDerivedStateFromError(e)), i = a.__d), null != a.componentDidCatch && (a.componentDidCatch(e, n || {}), i = a.__d), i) return a.__E = a
                        } catch (t) {
                            e = t
                        }
                    throw e
                }
            }, e$ = 0, eQ.prototype.setState = function(e, t) {
                var r;
                r = null != this.__s && this.__s !== this.state ? this.__s : this.__s = eJ({}, this.state), "function" == typeof e && (e = e(eJ({}, r), this.props)), e && eJ(r, e), null != e && this.__v && (t && this._sb.push(t), e1(this))
            }, eQ.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), e1(this))
            }, eQ.prototype.render = eX, ej = [], eH = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, eW = function(e, t) {
                return e.__v.__b - t.__v.__b
            }, e2.__r = 0;
            var tn, ta, to, ti, ts = 0,
                tl = [],
                tu = [],
                tc = eU,
                td = tc.__b,
                tp = tc.__r,
                tf = tc.diffed,
                th = tc.__c,
                t_ = tc.unmount,
                tm = tc.__;

            function tg(e, t) {
                tc.__h && tc.__h(ta, e, ts || t), ts = 0;
                var r = ta.__H || (ta.__H = {
                    __: [],
                    __h: []
                });
                return e >= r.__.length && r.__.push({
                    __V: tu
                }), r.__[e]
            }

            function ty(e) {
                return ts = 1, tv(tI, e)
            }

            function tv(e, t, r) {
                var n = tg(tn++, 2);
                if (n.t = e, !n.__c && (n.__ = [r ? r(t) : tI(void 0, t), function(e) {
                        var t = n.__N ? n.__N[0] : n.__[0],
                            r = n.t(t, e);
                        t !== r && (n.__N = [r, n.__[1]], n.__c.setState({}))
                    }], n.__c = ta, !ta.u)) {
                    var a = function(e, t, r) {
                        if (!n.__c.__H) return !0;
                        var a = n.__c.__H.__.filter(function(e) {
                            return !!e.__c
                        });
                        if (a.every(function(e) {
                                return !e.__N
                            })) return !o || o.call(this, e, t, r);
                        var i = !1;
                        return a.forEach(function(e) {
                            if (e.__N) {
                                var t = e.__[0];
                                e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (i = !0)
                            }
                        }), !(!i && n.__c.props === e) && (!o || o.call(this, e, t, r))
                    };
                    ta.u = !0;
                    var o = ta.shouldComponentUpdate,
                        i = ta.componentWillUpdate;
                    ta.componentWillUpdate = function(e, t, r) {
                        if (this.__e) {
                            var n = o;
                            o = void 0, a(e, t, r), o = n
                        }
                        i && i.call(this, e, t, r)
                    }, ta.shouldComponentUpdate = a
                }
                return n.__N || n.__
            }

            function tb(e, t) {
                var r = tg(tn++, 4);
                !tc.__s && tk(r.__H, t) && (r.__ = e, r.i = t, ta.__h.push(r))
            }

            function tw(e, t) {
                var r = tg(tn++, 7);
                return tk(r.__H, t) ? (r.__V = e(), r.i = t, r.__h = e, r.__V) : r.__
            }

            function tS(e, t) {
                return ts = 8, tw(function() {
                    return e
                }, t)
            }

            function tE() {
                for (var e; e = tl.shift();)
                    if (e.__P && e.__H) try {
                        e.__H.__h.forEach(tx), e.__H.__h.forEach(tT), e.__H.__h = []
                    } catch (t) {
                        e.__H.__h = [], tc.__e(t, e.__v)
                    }
            }
            tc.__b = function(e) {
                ta = null, td && td(e)
            }, tc.__ = function(e, t) {
                t.__k && t.__k.__m && (e.__m = t.__k.__m), tm && tm(e, t)
            }, tc.__r = function(e) {
                tp && tp(e), tn = 0;
                var t = (ta = e.__c).__H;
                t && (to === ta ? (t.__h = [], ta.__h = [], t.__.forEach(function(e) {
                    e.__N && (e.__ = e.__N), e.__V = tu, e.__N = e.i = void 0
                })) : (t.__h.forEach(tx), t.__h.forEach(tT), t.__h = [], tn = 0)), to = ta
            }, tc.diffed = function(e) {
                tf && tf(e);
                var t = e.__c;
                t && t.__H && (t.__H.__h.length && (1 !== tl.push(t) && ti === tc.requestAnimationFrame || ((ti = tc.requestAnimationFrame) || function(e) {
                    var t, r = function() {
                            clearTimeout(n), tC && cancelAnimationFrame(t), setTimeout(e)
                        },
                        n = setTimeout(r, 100);
                    tC && (t = requestAnimationFrame(r))
                })(tE)), t.__H.__.forEach(function(e) {
                    e.i && (e.__H = e.i), e.__V !== tu && (e.__ = e.__V), e.i = void 0, e.__V = tu
                })), to = ta = null
            }, tc.__c = function(e, t) {
                t.some(function(e) {
                    try {
                        e.__h.forEach(tx), e.__h = e.__h.filter(function(e) {
                            return !e.__ || tT(e)
                        })
                    } catch (r) {
                        t.some(function(e) {
                            e.__h && (e.__h = [])
                        }), t = [], tc.__e(r, e.__v)
                    }
                }), th && th(e, t)
            }, tc.unmount = function(e) {
                t_ && t_(e);
                var t, r = e.__c;
                r && r.__H && (r.__H.__.forEach(function(e) {
                    try {
                        tx(e)
                    } catch (e) {
                        t = e
                    }
                }), r.__H = void 0, t && tc.__e(t, r.__v))
            };
            var tC = "function" == typeof requestAnimationFrame;

            function tx(e) {
                var t = ta,
                    r = e.__c;
                "function" == typeof r && (e.__c = void 0, r()), ta = t
            }

            function tT(e) {
                var t = ta;
                e.__c = e.__(), ta = t
            }

            function tk(e, t) {
                return !e || e.length !== t.length || t.some(function(t, r) {
                    return t !== e[r]
                })
            }

            function tI(e, t) {
                return "function" == typeof t ? t(e) : t
            }
            let tP = Object.defineProperty({
                __proto__: null,
                useCallback: tS,
                useContext: function(e) {
                    var t = ta.context[e.__c],
                        r = tg(tn++, 9);
                    return r.c = e, t ? (null == r.__ && (r.__ = !0, t.sub(ta)), t.props.value) : e.__
                },
                useDebugValue: function(e, t) {
                    tc.useDebugValue && tc.useDebugValue(t ? t(e) : e)
                },
                useEffect: function(e, t) {
                    var r = tg(tn++, 3);
                    !tc.__s && tk(r.__H, t) && (r.__ = e, r.i = t, ta.__H.__h.push(r))
                },
                useErrorBoundary: function(e) {
                    var t = tg(tn++, 10),
                        r = ty();
                    return t.__ = e, ta.componentDidCatch || (ta.componentDidCatch = function(e, n) {
                        t.__ && t.__(e, n), r[1](e)
                    }), [r[0], function() {
                        r[1](void 0)
                    }]
                },
                useId: function() {
                    var e = tg(tn++, 11);
                    if (!e.__) {
                        for (var t = ta.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
                        var r = t.__m || (t.__m = [0, 0]);
                        e.__ = "P" + r[0] + "-" + r[1]++
                    }
                    return e.__
                },
                useImperativeHandle: function(e, t, r) {
                    ts = 6, tb(function() {
                        return "function" == typeof e ? (e(t()), function() {
                            return e(null)
                        }) : e ? (e.current = t(), function() {
                            return e.current = null
                        }) : void 0
                    }, null == r ? r : r.concat(e))
                },
                useLayoutEffect: tb,
                useMemo: tw,
                useReducer: tv,
                useRef: function(e) {
                    return ts = 5, tw(function() {
                        return {
                            current: e
                        }
                    }, [])
                },
                useState: ty
            }, Symbol.toStringTag, {
                value: "Module"
            });

            function tR({
                options: e
            }) {
                let t = tw(() => ({
                    __html: function() {
                        let e = e => ed.createElementNS("http://www.w3.org/2000/svg", e),
                            t = eR(e("svg"), {
                                width: "32",
                                height: "30",
                                viewBox: "0 0 72 66",
                                fill: "inherit"
                            }),
                            r = eR(e("path"), {
                                transform: "translate(11, 11)",
                                d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
                            });
                        return t.appendChild(r), t
                    }().outerHTML
                }), []);
                return eY("h2", {
                    class: "dialog__header"
                }, eY("span", {
                    class: "dialog__title"
                }, e.formTitle), e.showBranding ? eY("a", {
                    class: "brand-link",
                    target: "_blank",
                    href: "https://sentry.io/welcome/",
                    title: "Powered by Sentry",
                    rel: "noopener noreferrer",
                    dangerouslySetInnerHTML: t
                }) : null)
            }

            function tN(e, t) {
                let r = e.get(t);
                return "string" == typeof r ? r.trim() : ""
            }

            function tA({
                options: e,
                defaultEmail: t,
                defaultName: r,
                onFormClose: n,
                onSubmit: a,
                onSubmitSuccess: o,
                onSubmitError: i,
                showEmail: s,
                showName: l,
                screenshotInput: u
            }) {
                let {
                    tags: c,
                    addScreenshotButtonLabel: d,
                    removeScreenshotButtonLabel: p,
                    cancelButtonLabel: f,
                    emailLabel: h,
                    emailPlaceholder: _,
                    isEmailRequired: m,
                    isNameRequired: g,
                    messageLabel: y,
                    messagePlaceholder: v,
                    nameLabel: b,
                    namePlaceholder: w,
                    submitButtonLabel: S,
                    isRequiredLabel: E
                } = e, [C, x] = ty(!1), [T, k] = ty(null), [I, P] = ty(!1), R = u ? .input, [N, A] = ty(null), M = tS(e => {
                    A(e), P(!1)
                }, []), F = tS(e => {
                    let t = function(e, t) {
                        let r = [];
                        return t.isNameRequired && !e.name && r.push(t.nameLabel), t.isEmailRequired && !e.email && r.push(t.emailLabel), e.message || r.push(t.messageLabel), r
                    }(e, {
                        emailLabel: h,
                        isEmailRequired: m,
                        isNameRequired: g,
                        messageLabel: y,
                        nameLabel: b
                    });
                    return t.length > 0 ? k(`Please enter in the following required fields: ${t.join(", ")}`) : k(null), 0 === t.length
                }, [h, m, g, y, b]);
                return eY("form", {
                    class: "form",
                    onSubmit: tS(async e => {
                        x(!0);
                        try {
                            if (e.preventDefault(), !(e.target instanceof HTMLFormElement)) return;
                            let t = new FormData(e.target),
                                r = await (u && I ? u.value() : void 0),
                                n = {
                                    name: tN(t, "name"),
                                    email: tN(t, "email"),
                                    message: tN(t, "message"),
                                    attachments: r ? [r] : void 0
                                };
                            if (!F(n)) return;
                            try {
                                await a({
                                    name: n.name,
                                    email: n.email,
                                    message: n.message,
                                    source: "widget",
                                    tags: c
                                }, {
                                    attachments: n.attachments
                                }), o(n)
                            } catch (e) {
                                k(e), i(e)
                            }
                        } finally {
                            x(!1)
                        }
                    }, [u && I, o, i])
                }, R && I ? eY(R, {
                    onError: M
                }) : null, eY("fieldset", {
                    class: "form__right",
                    "data-sentry-feedback": !0,
                    disabled: C
                }, eY("div", {
                    class: "form__top"
                }, T ? eY("div", {
                    class: "form__error-container"
                }, T) : null, l ? eY("label", {
                    for: "name",
                    class: "form__label"
                }, eY(tM, {
                    label: b,
                    isRequiredLabel: E,
                    isRequired: g
                }), eY("input", {
                    class: "form__input",
                    defaultValue: r,
                    id: "name",
                    name: "name",
                    placeholder: w,
                    required: g,
                    type: "text"
                })) : eY("input", {
                    "aria-hidden": !0,
                    value: r,
                    name: "name",
                    type: "hidden"
                }), s ? eY("label", {
                    for: "email",
                    class: "form__label"
                }, eY(tM, {
                    label: h,
                    isRequiredLabel: E,
                    isRequired: m
                }), eY("input", {
                    class: "form__input",
                    defaultValue: t,
                    id: "email",
                    name: "email",
                    placeholder: _,
                    required: m,
                    type: "email"
                })) : eY("input", {
                    "aria-hidden": !0,
                    value: t,
                    name: "email",
                    type: "hidden"
                }), eY("label", {
                    for: "message",
                    class: "form__label"
                }, eY(tM, {
                    label: y,
                    isRequiredLabel: E,
                    isRequired: !0
                }), eY("textarea", {
                    autoFocus: !0,
                    class: "form__input form__input--textarea",
                    id: "message",
                    name: "message",
                    placeholder: v,
                    required: !0,
                    rows: 5
                })), R ? eY("label", {
                    for: "screenshot",
                    class: "form__label"
                }, eY("button", {
                    class: "btn btn--default",
                    disabled: C,
                    type: "button",
                    onClick: () => {
                        A(null), P(e => !e)
                    }
                }, I ? p : d), N ? eY("div", {
                    class: "form__error-container"
                }, N.message) : null) : null), eY("div", {
                    class: "btn-group"
                }, eY("button", {
                    class: "btn btn--primary",
                    disabled: C,
                    type: "submit"
                }, S), eY("button", {
                    class: "btn btn--default",
                    disabled: C,
                    type: "button",
                    onClick: n
                }, f))))
            }

            function tM({
                label: e,
                isRequired: t,
                isRequiredLabel: r
            }) {
                return eY("span", {
                    class: "form__label__text"
                }, e, t && eY("span", {
                    class: "form__label__text--required"
                }, r))
            }

            function tF({
                open: e,
                onFormSubmitted: t,
                ...r
            }) {
                let n = r.options,
                    a = tw(() => ({
                        __html: function() {
                            let e = e => ec.document.createElementNS("http://www.w3.org/2000/svg", e),
                                t = eR(e("svg"), {
                                    width: "16",
                                    height: "17",
                                    viewBox: "0 0 16 17",
                                    fill: "inherit"
                                }),
                                r = eR(e("g"), {
                                    clipPath: "url(#clip0_57_156)"
                                }),
                                n = eR(e("path"), {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
                                }),
                                a = eR(e("path"), {
                                    d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"
                                });
                            t.appendChild(r).append(a, n);
                            let o = e("defs"),
                                i = eR(e("clipPath"), {
                                    id: "clip0_57_156"
                                }),
                                s = eR(e("rect"), {
                                    width: "16",
                                    height: "16",
                                    fill: "white",
                                    transform: "translate(0 0.5)"
                                });
                            return i.appendChild(s), o.appendChild(i), t.appendChild(o).appendChild(i).appendChild(s), t
                        }().outerHTML
                    }), []),
                    [o, i] = ty(null),
                    s = tS(() => {
                        o && (clearTimeout(o), i(null)), t()
                    }, [o]),
                    l = tS(e => {
                        r.onSubmitSuccess(e), i(setTimeout(() => {
                            t(), i(null)
                        }, 5e3))
                    }, [t]);
                return eY(eX, null, o ? eY("div", {
                    class: "success__position",
                    onClick: s
                }, eY("div", {
                    class: "success__content"
                }, n.successMessageText, eY("span", {
                    class: "success__icon",
                    dangerouslySetInnerHTML: a
                }))) : eY("dialog", {
                    class: "dialog",
                    onClick: n.onFormClose,
                    open: e
                }, eY("div", {
                    class: "dialog__position"
                }, eY("div", {
                    class: "dialog__content",
                    onClick: e => {
                        e.stopPropagation()
                    }
                }, eY(tR, {
                    options: n
                }), eY(tA, { ...r,
                    onSubmitSuccess: l
                })))))
            }
            let tL = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}

`,
                tO = `
.dialog__header {
  display: flex;
  gap: 4px;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}
.dialog__title {
  align-self: center;
  width: var(--form-width, 272px);
}

@media (max-width: 600px) {
  .dialog__title {
    width: auto;
  }
}

.dialog__position:has(.editor) .dialog__title {
  width: auto;
}


.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`,
                tD = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form fieldset {
  border: none;
  margin: 0;
  padding: 0;
}

.form__right {
  flex: 0 0 auto;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: var(--form-width, 100%);
}

.dialog__position:has(.editor) .form__right {
  width: var(--form-width, 272px);
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`,
                tU = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`,
                t$ = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`,
                tj = () => ({
                    name: "FeedbackModal",
                    setupOnce() {},
                    createDialog: ({
                        options: e,
                        screenshotIntegration: t,
                        sendFeedback: r,
                        shadow: n
                    }) => {
                        let a = e.useSentryUser,
                            o = function() {
                                let e = (0, d.o5)().getUser(),
                                    t = (0, d.rm)().getUser(),
                                    r = (0, d.m6)().getUser();
                                return e && Object.keys(e).length ? e : t && Object.keys(t).length ? t : r
                            }(),
                            i = ed.createElement("div"),
                            s = function(e) {
                                let t = ed.createElement("style");
                                return t.textContent = `
:host {
  --dialog-inset: var(--inset);
}

${tL}
${tO}
${tD}
${tU}
${t$}
`, e && t.setAttribute("nonce", e), t
                            }(e.styleNonce),
                            l = "",
                            u = {
                                get el() {
                                    return i
                                },
                                appendToDom() {
                                    n.contains(s) || n.contains(i) || (n.appendChild(s), n.appendChild(i))
                                },
                                removeFromDom() {
                                    i.remove(), s.remove(), ed.body.style.overflow = l
                                },
                                open() {
                                    p(!0), e.onFormOpen ? .(), (0, d.KU)() ? .emit("openFeedbackWidget"), l = ed.body.style.overflow, ed.body.style.overflow = "hidden"
                                },
                                close() {
                                    p(!1), ed.body.style.overflow = l
                                }
                            },
                            c = t ? .createInput({
                                h: eY,
                                hooks: tP,
                                dialog: u,
                                options: e
                            }),
                            p = t => {
                                ! function(e, t, r) {
                                    var n, a, o;
                                    eU.__ && eU.__(e, t), n = t.__k, a = [], o = [], e8(t, e = t.__k = eY(eX, null, [e]), n || eq, eq, void 0 !== t.ownerSVGElement, n ? null : t.firstChild ? eD.call(t.childNodes) : null, a, n ? n.__e : t.firstChild, !1, o), e.__d = void 0, e9(a, e, o)
                                }(eY(tF, {
                                    options: e,
                                    screenshotInput: c,
                                    showName: e.showName || e.isNameRequired,
                                    showEmail: e.showEmail || e.isEmailRequired,
                                    defaultName: a && o && o[a.name] || "",
                                    defaultEmail: a && o && o[a.email] || "",
                                    onFormClose: () => {
                                        p(!1), e.onFormClose ? .()
                                    },
                                    onSubmit: r,
                                    onSubmitSuccess: t => {
                                        p(!1), e.onSubmitSuccess ? .(t)
                                    },
                                    onSubmitError: t => {
                                        e.onSubmitError ? .(t)
                                    },
                                    onFormSubmitted: () => {
                                        e.onFormSubmitted ? .()
                                    },
                                    open: t
                                }), i)
                            };
                        return u
                    }
                });

            function tB(e, t, r) {
                if (!e) return;
                let n = e.getContext("2d", t);
                n && r(e, n)
            }

            function tH(e, t) {
                tB(e, {
                    alpha: !0
                }, (e, r) => {
                    r.drawImage(t, 0, 0, t.width, t.height, 0, 0, e.width, e.height)
                })
            }

            function tW(e, t, r) {
                tB(e, {
                    alpha: !0
                }, (e, n) => {
                    r.length && (n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, e.width, e.height)), r.forEach(e => {
                        switch (e.type) {
                            case "highlight":
                                n.shadowColor = "rgba(0, 0, 0, 0.7)", n.shadowBlur = 50, n.fillStyle = t, n.fillRect(e.x - 1, e.y - 1, e.w + 2, e.h + 2), n.clearRect(e.x, e.y, e.w, e.h);
                                break;
                            case "hide":
                                n.fillStyle = "rgb(0, 0, 0)", n.fillRect(e.x, e.y, e.w, e.h)
                        }
                    })
                })
            }
            let tq = () => ({
                name: "FeedbackScreenshot",
                setupOnce() {},
                createInput: ({
                    h: e,
                    hooks: t,
                    dialog: r,
                    options: n
                }) => {
                    let a = ed.createElement("canvas");
                    return {
                        input: function({
                            h: e,
                            hooks: t,
                            outputBuffer: r,
                            dialog: n,
                            options: a
                        }) {
                            let o = function({
                                    hooks: e
                                }) {
                                    return function({
                                        onBeforeScreenshot: t,
                                        onScreenshot: r,
                                        onAfterScreenshot: n,
                                        onError: a
                                    }) {
                                        let o = function() {
                                            let [t, r] = e.useState(ec.devicePixelRatio ? ? 1);
                                            return e.useEffect(() => {
                                                let e = () => {
                                                        r(ec.devicePixelRatio)
                                                    },
                                                    t = matchMedia(`(resolution: ${ec.devicePixelRatio}dppx)`);
                                                return t.addEventListener("change", e), () => {
                                                    t.removeEventListener("change", e)
                                                }
                                            }, []), t
                                        }();
                                        e.useEffect(() => {
                                            (async () => {
                                                t();
                                                let e = await ep.mediaDevices.getDisplayMedia({
                                                        video: {
                                                            width: ec.innerWidth * o,
                                                            height: ec.innerHeight * o
                                                        },
                                                        audio: !1,
                                                        monitorTypeSurfaces: "exclude",
                                                        preferCurrentTab: !0,
                                                        selfBrowserSurface: "include",
                                                        surfaceSwitching: "exclude"
                                                    }),
                                                    a = ed.createElement("video");
                                                await new Promise((t, n) => {
                                                    a.srcObject = e, a.onloadedmetadata = () => {
                                                        r(a, o), e.getTracks().forEach(e => e.stop()), t()
                                                    }, a.play().catch(n)
                                                }), n()
                                            })().catch(a)
                                        }, [])
                                    }
                                }({
                                    hooks: t
                                }),
                                i = function({
                                    h: e
                                }) {
                                    return function({
                                        action: t,
                                        setAction: r
                                    }) {
                                        return e("div", {
                                            class: "editor__tool-container"
                                        }, e("div", {
                                            class: "editor__tool-bar"
                                        }, e("button", {
                                            type: "button",
                                            class: `editor__tool ${"highlight"===t?"editor__tool--active":""}`,
                                            onClick: () => {
                                                r("highlight" === t ? "" : "highlight")
                                            }
                                        }, "Highlight"), e("button", {
                                            type: "button",
                                            class: `editor__tool ${"hide"===t?"editor__tool--active":""}`,
                                            onClick: () => {
                                                r("hide" === t ? "" : "hide")
                                            }
                                        }, "Hide")))
                                    }
                                }({
                                    h: e
                                }),
                                s = function({
                                    h: e
                                }) {
                                    return function() {
                                        return e("svg", {
                                            "data-test-id": "icon-close",
                                            viewBox: "0 0 16 16",
                                            fill: "#2B2233",
                                            height: "25px",
                                            width: "25px"
                                        }, e("circle", {
                                            r: "7",
                                            cx: "8",
                                            cy: "8",
                                            fill: "white"
                                        }), e("path", {
                                            strokeWidth: "1.5",
                                            d: "M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16ZM8,1.53A6.47,6.47,0,1,0,14.47,8,6.47,6.47,0,0,0,8,1.53Z"
                                        }), e("path", {
                                            strokeWidth: "1.5",
                                            d: "M5.34,11.41a.71.71,0,0,1-.53-.22.74.74,0,0,1,0-1.06l5.32-5.32a.75.75,0,0,1,1.06,1.06L5.87,11.19A.74.74,0,0,1,5.34,11.41Z"
                                        }), e("path", {
                                            strokeWidth: "1.5",
                                            d: "M10.66,11.41a.74.74,0,0,1-.53-.22L4.81,5.87A.75.75,0,0,1,5.87,4.81l5.32,5.32a.74.74,0,0,1,0,1.06A.71.71,0,0,1,10.66,11.41Z"
                                        }))
                                    }
                                }({
                                    h: e
                                }),
                                l = {
                                    __html: function(e) {
                                        let t = ed.createElement("style"),
                                            r = "#1A141F",
                                            n = "#302735";
                                        return t.textContent = `
.editor {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.editor__image-container {
  justify-items: center;
  padding: 15px;
  position: relative;
  height: 100%;
  border-radius: var(--menu-border-radius, 6px);

  background-color: ${r};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${r} 8px,
      ${r} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${n} 15px,
      ${n} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container > * {
  object-fit: contain;
  position: absolute;
}

.editor__tool-container {
  padding-top: 8px;
  display: flex;
  justify-content: center;
}

.editor__tool-bar {
  display: flex;
  gap: 8px;
}

.editor__tool {
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  background: var(--button-background, var(--background));
  color: var(--button-color, var(--foreground));
}

.editor__tool--active {
  background: var(--button-primary-background, var(--accent-background));
  color: var(--button-primary-color, var(--accent-foreground));
}

.editor__rect {
  position: absolute;
  z-index: 2;
}

.editor__rect button {
  opacity: 0;
  position: absolute;
  top: -12px;
  right: -12px;
  cursor: pointer;
  padding: 0;
  z-index: 3;
  border: none;
  background: none;
}

.editor__rect:hover button {
  opacity: 1;
}
`, e && t.setAttribute("nonce", e), t
                                    }(a.styleNonce).innerText
                                },
                                u = n.el.style,
                                c = ({
                                    screenshot: n
                                }) => {
                                    let [o, u] = t.useState("highlight"), [c, d] = t.useState([]), p = t.useRef(null), f = t.useRef(null), h = t.useRef(null), _ = t.useRef(null), [m, g] = t.useState(1), y = t.useMemo(() => {
                                        let e = ed.getElementById(a.id);
                                        if (!e) return "white";
                                        let t = getComputedStyle(e);
                                        return t.getPropertyValue("--button-primary-background") || t.getPropertyValue("--accent-background")
                                    }, [a.id]);
                                    t.useLayoutEffect(() => {
                                        let e = () => {
                                            let e = p.current;
                                            e && tB(n.canvas, {
                                                alpha: !1
                                            }, t => {
                                                g(Math.min(e.clientWidth / t.width, e.clientHeight / t.height))
                                            })
                                        };
                                        return e(), ec.addEventListener("resize", e), () => {
                                            ec.removeEventListener("resize", e)
                                        }
                                    }, [n]);
                                    let v = t.useCallback((e, t) => {
                                        tB(e, {
                                            alpha: !0
                                        }, (e, r) => {
                                            r.scale(t, t), e.width = n.canvas.width, e.height = n.canvas.height
                                        })
                                    }, [n]);
                                    t.useEffect(() => {
                                        v(f.current, n.dpi), tH(f.current, n.canvas)
                                    }, [n]), t.useEffect(() => {
                                        v(h.current, n.dpi), tB(h.current, {
                                            alpha: !0
                                        }, (e, t) => {
                                            t.clearRect(0, 0, e.width, e.height)
                                        }), tW(h.current, y, c)
                                    }, [c, y]), t.useEffect(() => {
                                        v(r, n.dpi), tH(r, n.canvas), tB(ed.createElement("canvas"), {
                                            alpha: !0
                                        }, (e, t) => {
                                            t.scale(n.dpi, n.dpi), e.width = n.canvas.width, e.height = n.canvas.height, tW(e, y, c), tH(r, e)
                                        })
                                    }, [c, n, y]);
                                    let b = t.useCallback(e => t => {
                                            t.preventDefault(), t.stopPropagation(), d(t => {
                                                let r = [...t];
                                                return r.splice(e, 1), r
                                            })
                                        }, []),
                                        w = {
                                            width: `${n.canvas.width*m}px`,
                                            height: `${n.canvas.height*m}px`
                                        },
                                        S = e => {
                                            e.stopPropagation()
                                        };
                                    return e("div", {
                                        class: "editor"
                                    }, e("style", {
                                        nonce: a.styleNonce,
                                        dangerouslySetInnerHTML: l
                                    }), e("div", {
                                        class: "editor__image-container"
                                    }, e("div", {
                                        class: "editor__canvas-container",
                                        ref: p
                                    }, e("canvas", {
                                        ref: f,
                                        id: "background",
                                        style: w
                                    }), e("canvas", {
                                        ref: h,
                                        id: "foreground",
                                        style: w
                                    }), e("div", {
                                        ref: _,
                                        onMouseDown: e => {
                                            if (!o || !_.current) return;
                                            let t = _.current.getBoundingClientRect(),
                                                r = {
                                                    type: o,
                                                    x: e.offsetX / m,
                                                    y: e.offsetY / m
                                                },
                                                n = (e, r) => {
                                                    let n = (r.clientX - t.x) / m,
                                                        a = (r.clientY - t.y) / m;
                                                    return {
                                                        type: e.type,
                                                        x: Math.min(e.x, n),
                                                        y: Math.min(e.y, a),
                                                        w: Math.abs(n - e.x),
                                                        h: Math.abs(a - e.y)
                                                    }
                                                },
                                                a = e => {
                                                    tB(h.current, {
                                                        alpha: !0
                                                    }, (e, t) => {
                                                        t.clearRect(0, 0, e.width, e.height)
                                                    }), tW(h.current, y, [...c, n(r, e)])
                                                },
                                                i = e => {
                                                    let t = n(r, e);
                                                    t.w * m >= 1 && t.h * m >= 1 && d(e => [...e, t]), ed.removeEventListener("mousemove", a), ed.removeEventListener("mouseup", i)
                                                };
                                            ed.addEventListener("mousemove", a), ed.addEventListener("mouseup", i)
                                        },
                                        style: w
                                    }, c.map((t, r) => e("div", {
                                        key: r,
                                        class: "editor__rect",
                                        style: {
                                            top: `${t.y*m}px`,
                                            left: `${t.x*m}px`,
                                            width: `${t.w*m}px`,
                                            height: `${t.h*m}px`
                                        }
                                    }, e("button", {
                                        "aria-label": "Remove",
                                        onClick: b(r),
                                        onMouseDown: S,
                                        onMouseUp: S,
                                        type: "button"
                                    }, e(s, null))))))), e(i, {
                                        action: o,
                                        setAction: u
                                    }))
                                };
                            return function({
                                onError: n
                            }) {
                                let [a, i] = t.useState();
                                return (o({
                                    onBeforeScreenshot: t.useCallback(() => {
                                        u.display = "none"
                                    }, []),
                                    onScreenshot: t.useCallback((e, t) => {
                                        tB(ed.createElement("canvas"), {
                                            alpha: !1
                                        }, (r, n) => {
                                            n.scale(t, t), r.width = e.videoWidth, r.height = e.videoHeight, n.drawImage(e, 0, 0, r.width, r.height), i({
                                                canvas: r,
                                                dpi: t
                                            })
                                        }), r.width = e.videoWidth, r.height = e.videoHeight
                                    }, []),
                                    onAfterScreenshot: t.useCallback(() => {
                                        u.display = "block"
                                    }, []),
                                    onError: t.useCallback(e => {
                                        u.display = "block", n(e)
                                    }, [])
                                }), a) ? e(c, {
                                    screenshot: a
                                }) : e("div", null)
                            }
                        }({
                            h: e,
                            hooks: t,
                            outputBuffer: a,
                            dialog: r,
                            options: n
                        }),
                        value: async () => {
                            let e = await new Promise(e => {
                                a.toBlob(e, "image/png")
                            });
                            if (e) return {
                                data: new Uint8Array(await e.arrayBuffer()),
                                filename: "screenshot.png",
                                contentType: "application/png"
                            }
                        }
                    }
                }
            });
            var tz = r(95218),
                tV = r(29800);
            let tG = {
                    replayIntegration: "replay",
                    replayCanvasIntegration: "replay-canvas",
                    feedbackIntegration: "feedback",
                    feedbackModalIntegration: "feedback-modal",
                    feedbackScreenshotIntegration: "feedback-screenshot",
                    captureConsoleIntegration: "captureconsole",
                    contextLinesIntegration: "contextlines",
                    linkedErrorsIntegration: "linkederrors",
                    dedupeIntegration: "dedupe",
                    extraErrorDataIntegration: "extraerrordata",
                    graphqlClientIntegration: "graphqlclient",
                    httpClientIntegration: "httpclient",
                    reportingObserverIntegration: "reportingobserver",
                    rewriteFramesIntegration: "rewriteframes",
                    browserProfilingIntegration: "browserprofiling",
                    moduleMetadataIntegration: "modulemetadata"
                },
                tJ = tV.jf;
            async function tK(e, t) {
                let r = tG[e],
                    n = tJ.Sentry = tJ.Sentry || {};
                if (!r) throw Error(`Cannot lazy load integration: ${e}`);
                let a = n[e];
                if ("function" == typeof a && !("_isShim" in a)) return a;
                let o = function(e) {
                        let t = (0, d.KU)(),
                            r = t ? .getOptions() ? .cdnBaseUrl || "https://browser.sentry-cdn.com";
                        return new URL(`/${tz.M}/${e}.min.js`, r).toString()
                    }(r),
                    i = tV.jf.document.createElement("script");
                i.src = o, i.crossOrigin = "anonymous", i.referrerPolicy = "strict-origin", t && i.setAttribute("nonce", t);
                let s = new Promise((e, t) => {
                        i.addEventListener("load", () => e()), i.addEventListener("error", t)
                    }),
                    l = tV.jf.document.currentScript,
                    u = tV.jf.document.body || tV.jf.document.head || l ? .parentElement;
                if (u) u.appendChild(i);
                else throw Error(`Could not find parent element to insert lazy-loaded ${e} script`);
                try {
                    await s
                } catch {
                    throw Error(`Error when loading integration: ${e}`)
                }
                let c = n[e];
                if ("function" != typeof c) throw Error(`Could not load integration: ${e}`);
                return c
            }
            let tY = eL({
                    lazyLoadIntegration: tK
                }),
                tZ = eL({
                    getModalIntegration: () => tj,
                    getScreenshotIntegration: () => tq
                });
            var tX = r(98199),
                tQ = r(7524),
                t0 = r(31369),
                t1 = r(73494),
                t2 = r(87381),
                t6 = r(15155);
            let t4 = (0, el._C)((e = {}) => {
                let t = e.levels || v.Ow,
                    r = e.handled ? ? !0;
                return {
                    name: "CaptureConsole",
                    setup(e) {
                        "console" in g.O && (0, t0.P)(({
                            args: n,
                            level: a
                        }) => {
                            (0, d.KU)() === e && t.includes(a) && function(e, t, r) {
                                let n = {
                                    level: (0, t2.t)(t),
                                    extra: {
                                        arguments: e
                                    }
                                };
                                (0, d.v4)(a => {
                                    if (a.addEventProcessor(e => (e.logger = "console", (0, t1.M6)(e, {
                                            handled: r,
                                            type: "console"
                                        }), e)), "assert" === t) {
                                        if (!e[0]) {
                                            let t = `Assertion failed: ${(0,t6.gt)(e.slice(1)," ")||"console.assert"}`;
                                            a.setExtra("arguments", e.slice(1)), (0, m.wd)(t, n)
                                        }
                                        return
                                    }
                                    let o = e.find(e => e instanceof Error);
                                    if (o) return void(0, m.Cp)(o, n);
                                    let i = (0, t6.gt)(e, " ");
                                    (0, m.wd)(i, n)
                                })
                            }(n, a, r)
                        })
                    }
                }
            });
            var t5 = r(33060),
                t3 = r(33827);
            let t7 = {
                    [W.JD]: "auto.console.logging"
                },
                t8 = (0, el._C)((e = {}) => {
                    let t = e.levels || v.Ow;
                    return {
                        name: "ConsoleLogs",
                        setup(e) {
                            if (!e.getOptions()._experiments ? .enableLogs) {
                                t5.T && v.vF.warn("`_experiments.enableLogs` is not enabled, ConsoleLogs integration disabled");
                                return
                            }(0, t0.P)(({
                                args: r,
                                level: n
                            }) => {
                                if ((0, d.KU)() !== e || !t.includes(n)) return;
                                if ("assert" === n) {
                                    if (!r[0]) {
                                        let e = r.slice(1),
                                            t = e.length > 0 ? `Assertion failed: ${t9(e)}` : "Assertion failed";
                                        (0, t3.KG)({
                                            level: "error",
                                            message: t,
                                            attributes: t7
                                        })
                                    }
                                    return
                                }
                                let a = "log" === n;
                                (0, t3.KG)({
                                    level: a ? "info" : n,
                                    message: t9(r),
                                    severityNumber: a ? 10 : void 0,
                                    attributes: t7
                                })
                            })
                        }
                    }
                });

            function t9(e) {
                return "util" in g.O && "function" == typeof g.O.util.format ? g.O.util.format(...e) : (0, t6.gt)(e, " ")
            }
            var re = r(67932),
                rt = r(59797),
                rr = r(31633),
                rn = r(24166),
                ra = r(99089),
                ro = r(53413);
            let ri = (0, el._C)((e = {}) => {
                let {
                    depth: t = 3,
                    captureErrorCause: r = !0
                } = e;
                return {
                    name: "ExtraErrorData",
                    processEvent(e, n, a) {
                        let {
                            maxValueLength: o = 250
                        } = a.getOptions();
                        return function(e, t = {}, r, n, a) {
                            if (!t.originalException || !(0, rn.bJ)(t.originalException)) return e;
                            let o = t.originalException.name || t.originalException.constructor.name,
                                i = function(e, t, r) {
                                    try {
                                        let n = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                                            a = {};
                                        for (let t of Object.keys(e)) {
                                            if (-1 !== n.indexOf(t)) continue;
                                            let o = e[t];
                                            a[t] = (0, rn.bJ)(o) || "string" == typeof o ? (0, t6.xv)(`${o}`, r) : o
                                        }
                                        if (t && void 0 !== e.cause && (a.cause = (0, rn.bJ)(e.cause) ? e.cause.toString() : e.cause), "function" == typeof e.toJSON) {
                                            let t = e.toJSON();
                                            for (let e of Object.keys(t)) {
                                                let r = t[e];
                                                a[e] = (0, rn.bJ)(r) ? r.toString() : r
                                            }
                                        }
                                        return a
                                    } catch (e) {
                                        t5.T && v.vF.error("Unable to extract extra data from the Error object:", e)
                                    }
                                    return null
                                }(t.originalException, n, a);
                            if (i) {
                                let t = { ...e.contexts
                                    },
                                    n = (0, ra.S8)(i, r);
                                return (0, rn.Qd)(n) && ((0, ro.my)(n, "__sentry_skip_normalization__", !0), t[o] = n), { ...e,
                                    contexts: t
                                }
                            }
                            return e
                        }(e, n, t, r, o)
                    }
                }
            });
            var rs = r(67970);
            let rl = ["reauthenticate", "signInAnonymously", "signInWithOAuth", "signInWithIdToken", "signInWithOtp", "signInWithPassword", "signInWithSSO", "signOut", "signUp", "verifyOtp"],
                ru = ["createUser", "deleteUser", "listUsers", "getUserById", "updateUserById", "inviteUserByEmail"],
                rc = {
                    eq: "eq",
                    neq: "neq",
                    gt: "gt",
                    gte: "gte",
                    lt: "lt",
                    lte: "lte",
                    like: "like",
                    "like(all)": "likeAllOf",
                    "like(any)": "likeAnyOf",
                    ilike: "ilike",
                    "ilike(all)": "ilikeAllOf",
                    "ilike(any)": "ilikeAnyOf",
                    is: "is",
                    in: "in",
                    cs: "contains",
                    cd: "containedBy",
                    sr: "rangeGt",
                    nxl: "rangeGte",
                    sl: "rangeLt",
                    nxr: "rangeLte",
                    adj: "rangeAdjacent",
                    ov: "overlaps",
                    fts: "",
                    plfts: "plain",
                    phfts: "phrase",
                    wfts: "websearch",
                    not: "not"
                },
                rd = ["select", "insert", "upsert", "update", "delete"];

            function rp(e) {
                try {
                    e.__SENTRY_INSTRUMENTED__ = !0
                } catch {}
            }

            function rf(e) {
                try {
                    return e.__SENTRY_INSTRUMENTED__
                } catch {
                    return !1
                }
            }

            function rh(e, t = !1) {
                return new Proxy(e, {
                    apply: (r, n, a) => (0, H.Lk)({
                        name: `auth ${t?"(admin) ":""}${e.name}`,
                        attributes: {
                            [W.JD]: "auto.db.supabase",
                            [W.uT]: "db",
                            "db.system": "postgresql",
                            "db.operation": `auth.${t?"admin.":""}${e.name}`
                        }
                    }, e => Reflect.apply(r, n, a).then(t => (t && "object" == typeof t && "error" in t && t.error ? (e.setStatus({
                        code: z.TJ
                    }), (0, m.Cp)(t.error, {
                        mechanism: {
                            handled: !1
                        }
                    })) : e.setStatus({
                        code: z.F3
                    }), e.end(), t)).catch(t => {
                        throw e.setStatus({
                            code: z.TJ
                        }), e.end(), (0, m.Cp)(t, {
                            mechanism: {
                                handled: !1
                            }
                        }), t
                    }).then(...a))
                })
            }
            let r_ = e => {
                    if (!e) {
                        t5.T && v.vF.warn("Supabase integration was not installed because no Supabase client was provided.");
                        return
                    }! function(e) {
                        rf(e.prototype.from) || (e.prototype.from = new Proxy(e.prototype.from, {
                            apply(e, t, r) {
                                let n = Reflect.apply(e, t, r);
                                return function(e) {
                                    for (let t of rd) rf(e.prototype[t]) || (e.prototype[t] = new Proxy(e.prototype[t], {
                                        apply(e, r, n) {
                                            let a = Reflect.apply(e, r, n),
                                                o = a.constructor;
                                            return t5.T && v.vF.log(`Instrumenting ${t} operation's PostgRESTFilterBuilder`), rf(o.prototype.then) || (o.prototype.then = new Proxy(o.prototype.then, {
                                                apply(e, t, r) {
                                                    let n = function(e, t = {}) {
                                                        switch (e) {
                                                            case "GET":
                                                                return "select";
                                                            case "POST":
                                                                if (t.Prefer ? .includes("resolution=")) return "upsert";
                                                                return "insert";
                                                            case "PATCH":
                                                                return "update";
                                                            case "DELETE":
                                                                return "delete";
                                                            default:
                                                                return "<unknown-op>"
                                                        }
                                                    }(t.method, t.headers);
                                                    if (!rd.includes(n) || !t ? .url ? .pathname || "string" != typeof t.url.pathname) return Reflect.apply(e, t, r);
                                                    let a = t.url.pathname.split("/"),
                                                        o = a.length > 0 ? a[a.length - 1] : "",
                                                        i = [];
                                                    for (let [e, r] of t.url.searchParams.entries()) i.push(function(e, t) {
                                                        let r;
                                                        if ("" === t || "*" === t) return "select(*)";
                                                        if ("select" === e) return `select(${t})`;
                                                        if ("or" === e || e.endsWith(".or")) return `${e}${t}`;
                                                        let [n, ...a] = t.split(".");
                                                        return r = n ? .startsWith("fts") ? "textSearch" : n ? .startsWith("plfts") ? "textSearch[plain]" : n ? .startsWith("phfts") ? "textSearch[phrase]" : n ? .startsWith("wfts") ? "textSearch[websearch]" : n && rc[n] || "filter", `${r}(${e}, ${a.join(".")})`
                                                    }(e, r));
                                                    let s = Object.create(null);
                                                    if ((0, rn.Qd)(t.body))
                                                        for (let [e, r] of Object.entries(t.body)) s[e] = r;
                                                    let l = `${"select"===n?"":`${n}${s?"(...) ":""}`}${i.join(" ")} from(${o})`,
                                                        u = {
                                                            "db.table": o,
                                                            "db.schema": t.schema,
                                                            "db.url": t.url.origin,
                                                            "db.sdk": t.headers["X-Client-Info"],
                                                            "db.system": "postgresql",
                                                            "db.operation": n,
                                                            [W.JD]: "auto.db.supabase",
                                                            [W.uT]: "db"
                                                        };
                                                    return i.length && (u["db.query"] = i), Object.keys(s).length && (u["db.body"] = s), (0, H.Lk)({
                                                        name: l,
                                                        attributes: u
                                                    }, a => Reflect.apply(e, t, []).then(e => {
                                                        if (a && (e && "object" == typeof e && "status" in e && (0, z.N8)(a, e.status || 500), a.end()), e.error) {
                                                            let t = Error(e.error.message);
                                                            e.error.code && (t.code = e.error.code), e.error.details && (t.details = e.error.details);
                                                            let r = {};
                                                            i.length && (r.query = i), Object.keys(s).length && (r.body = s), (0, m.Cp)(t, {
                                                                contexts: {
                                                                    supabase: r
                                                                }
                                                            })
                                                        }
                                                        let t = {
                                                                type: "supabase",
                                                                category: `db.${n}`,
                                                                message: l
                                                            },
                                                            r = {};
                                                        return i.length && (r.query = i), Object.keys(s).length && (r.body = s), Object.keys(r).length && (t.data = r), (0, tQ.Z)(t), e
                                                    }, e => {
                                                        throw a && ((0, z.N8)(a, 500), a.end()), e
                                                    }).then(...r))
                                                }
                                            }), rp(o.prototype.then)), a
                                        }
                                    }), rp(e.prototype[t]))
                                }(n.constructor), n
                            }
                        }), rp(e.prototype.from))
                    }(e.constructor === Function ? e : e.constructor),
                    function(e) {
                        let t = e.auth;
                        if (!(!t || rf(e.auth))) {
                            for (let r of rl) {
                                let n = t[r];
                                n && "function" == typeof e.auth[r] && (e.auth[r] = rh(n))
                            }
                            for (let r of ru) {
                                let n = t.admin[r];
                                n && "function" == typeof e.auth.admin[r] && (e.auth.admin[r] = rh(n, !0))
                            }
                            rp(e.auth)
                        }
                    }(e)
                },
                rm = (0, el._C)(e => {
                    let t;
                    return t = e.supabaseClient, {
                        setupOnce() {
                            r_(t)
                        },
                        name: "Supabase"
                    }
                });
            var rg = r(35330),
                ry = r(11043),
                rv = r(28962);

            function rb(e, t) {
                let r;
                return (0, rv.yH)(e, (e, n) => (t.includes(n) && (r = Array.isArray(e) ? e[1] : void 0), !!r)), r
            }

            function rw(e, t) {
                return r => {
                    let n = e(r),
                        a = new Map;

                    function o(t, n) {
                        let o = n ? `${t}:${n}` : t,
                            i = a.get(o);
                        if (!i) {
                            let s = (0, ry.hH)(t);
                            if (!s) return;
                            let l = (0, rg.Z)(s, r.tunnel);
                            i = n ? (t => {
                                let r = e(t);
                                return { ...r,
                                    send: async e => {
                                        let t = rb(e, ["event", "transaction", "profile", "replay_event"]);
                                        return t && (t.release = n), r.send(e)
                                    }
                                }
                            })({ ...r,
                                url: l
                            }) : e({ ...r,
                                url: l
                            }), a.set(o, i)
                        }
                        return [t, i]
                    }
                    return {
                        send: async function(e) {
                            let r = t({
                                    envelope: e,
                                    getEvent: function(t) {
                                        return rb(e, t ? .length ? t : ["event"])
                                    }
                                }).map(e => "string" == typeof e ? o(e, void 0) : o(e.dsn, e.release)).filter(e => !!e),
                                a = r.length ? r : [
                                    ["", n]
                                ];
                            return (await Promise.all(a.map(([t, r]) => r.send((0, rv.h4)(t ? { ...e[0],
                                dsn: t
                            } : e[0], e[1])))))[0]
                        },
                        flush: async function(e) {
                            let t = [...a.values(), n];
                            return (await Promise.all(t.map(t => t.flush(e)))).every(e => e)
                        }
                    }
                }
            }
            let rS = new Map,
                rE = new Set;

            function rC(e, t) {
                try {
                    t.exception.values.forEach(t => {
                        if (t.stacktrace)
                            for (let r of t.stacktrace.frames || []) {
                                if (!r.filename || r.module_metadata) continue;
                                let t = function(e, t) {
                                    if (g.O._sentryModuleMetadata)
                                        for (let t of Object.keys(g.O._sentryModuleMetadata)) {
                                            let r = g.O._sentryModuleMetadata[t];
                                            if (!rE.has(t)) {
                                                for (let n of (rE.add(t), e(t).reverse()))
                                                    if (n.filename) {
                                                        rS.set(n.filename, r);
                                                        break
                                                    }
                                            }
                                        }
                                    return rS.get(t)
                                }(e, r.filename);
                                t && (r.module_metadata = t)
                            }
                    })
                } catch (e) {}
            }

            function rx(e) {
                try {
                    e.exception.values.forEach(e => {
                        if (e.stacktrace)
                            for (let t of e.stacktrace.frames || []) delete t.module_metadata
                    })
                } catch (e) {}
            }
            let rT = (0, el._C)(() => ({
                name: "ModuleMetadata",
                setup(e) {
                    e.on("beforeEnvelope", e => {
                        (0, rv.yH)(e, (e, t) => {
                            if ("event" === t) {
                                let t = Array.isArray(e) ? e[1] : void 0;
                                t && (rx(t), e[1] = t)
                            }
                        })
                    }), e.on("applyFrameMetadata", t => {
                        t.type || rC(e.getOptions().stackParser, t)
                    })
                }
            }));
            var rk = r(61127),
                rI = r(72598),
                rP = r(73768),
                rR = r(91446),
                rN = r(29883),
                rA = r(42778),
                rM = r(44987);
            let rF = (0, el._C)(e => ({
                    name: "ThirdPartyErrorsFilter",
                    setup(e) {
                        e.on("beforeEnvelope", e => {
                            (0, rv.yH)(e, (e, t) => {
                                if ("event" === t) {
                                    let t = Array.isArray(e) ? e[1] : void 0;
                                    t && (rx(t), e[1] = t)
                                }
                            })
                        }), e.on("applyFrameMetadata", t => {
                            t.type || rC(e.getOptions().stackParser, t)
                        })
                    },
                    processEvent(t) {
                        let r = function(e) {
                            let t = (0, rM.RV)(e);
                            if (t) return t.filter(e => !!e.filename).map(e => e.module_metadata ? Object.keys(e.module_metadata).filter(e => e.startsWith(rL)).map(e => e.slice(rL.length)) : [])
                        }(t);
                        if (r && r["drop-error-if-contains-third-party-frames" === e.behaviour || "apply-tag-if-contains-third-party-frames" === e.behaviour ? "some" : "every"](t => !t.some(t => e.filterKeys.includes(t)))) {
                            if ("drop-error-if-contains-third-party-frames" === e.behaviour || "drop-error-if-exclusively-contains-third-party-frames" === e.behaviour) return null;
                            t.tags = { ...t.tags,
                                third_party_code: !0
                            }
                        }
                        return t
                    }
                })),
                rL = "_sentryBundlerPluginAppKey:";

            function rO(e) {
                return { ...e,
                    path: "path" in e && Array.isArray(e.path) ? e.path.join(".") : void 0,
                    keys: "keys" in e ? JSON.stringify(e.keys) : void 0,
                    unionErrors: "unionErrors" in e ? JSON.stringify(e.unionErrors) : void 0
                }
            }
            let rD = (0, el._C)((e = {}) => {
                let t = e.limit ? ? 10;
                return {
                    name: "ZodErrors",
                    processEvent: (r, n) => (function(e, t = !1, r, n) {
                        var a;
                        if (!r.exception ? .values || !n.originalException || (a = n.originalException, !((0, rn.bJ)(a) && "ZodError" === a.name && Array.isArray(a.issues))) || 0 === n.originalException.issues.length) return r;
                        try {
                            let a = (t ? n.originalException.issues : n.originalException.issues.slice(0, e)).map(rO);
                            return t && (Array.isArray(n.attachments) || (n.attachments = []), n.attachments.push({
                                filename: "zod_issues.json",
                                data: JSON.stringify({
                                    issues: a
                                })
                            })), { ...r,
                                exception: { ...r.exception,
                                    values: [{ ...r.exception.values[0],
                                        value: function(e) {
                                            let t = new Set;
                                            for (let r of e.issues) {
                                                let e = r.path.map(e => "number" == typeof e ? "<array>" : e).join(".");
                                                e.length > 0 && t.add(e)
                                            }
                                            let r = Array.from(t);
                                            if (0 === r.length) {
                                                let t = "variable";
                                                if (e.issues.length > 0) {
                                                    let r = e.issues[0];
                                                    void 0 !== r && "expected" in r && "string" == typeof r.expected && (t = r.expected)
                                                }
                                                return `Failed to validate ${t}`
                                            }
                                            return `Failed to validate keys: ${(0,t6.xv)(r.join(", "),100)}`
                                        }(n.originalException)
                                    }, ...r.exception.values.slice(1)]
                                },
                                extra: { ...r.extra,
                                    "zoderror.issues": a.slice(0, e)
                                }
                            }
                        } catch (e) {
                            return { ...r,
                                extra: { ...r.extra,
                                    "zoderrors sentry integration parse error": {
                                        message: "an exception was thrown while processing ZodError within applyZodErrorsToEvent()",
                                        error: e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : "unknown"
                                    }
                                }
                            }
                        }
                    })(t, e.saveZodIssuesAsAttachment, r, n)
                }
            });
            var rU = r(45575),
                r$ = r(96414),
                rj = r(59660),
                rB = r(64356);

            function rH(e, {
                metadata: t,
                tunnel: r,
                dsn: n
            }) {
                let a = {
                        event_id: e.event_id,
                        sent_at: new Date().toISOString(),
                        ...t ? .sdk && {
                            sdk: {
                                name: t.sdk.name,
                                version: t.sdk.version
                            }
                        },
                        ...!!r && !!n && {
                            dsn: (0, ry.SB)(n)
                        }
                    },
                    o = [{
                        type: "user_report"
                    }, e];
                return (0, rv.h4)(a, [o])
            }
            var rW = r(55811),
                rq = r(24283);

            function rz(e = {}) {
                let t = tV.jf.document,
                    r = t ? .head || t ? .body;
                if (!r) {
                    rq.T && v.vF.error("[showReportDialog] Global document not defined");
                    return
                }
                let n = (0, d.o5)(),
                    a = (0, d.KU)(),
                    o = a ? .getDsn();
                if (!o) {
                    rq.T && v.vF.error("[showReportDialog] DSN not configured");
                    return
                }
                let i = { ...e,
                        user: { ...n.getUser(),
                            ...e.user
                        },
                        eventId: e.eventId || (0, m.Q)()
                    },
                    s = tV.jf.document.createElement("script");
                s.async = !0, s.crossOrigin = "anonymous", s.src = (0, rg.k)(o, i);
                let {
                    onLoad: l,
                    onClose: u
                } = i;
                if (l && (s.onload = l), u) {
                    let e = t => {
                        if ("__sentry_reportdialog_closed__" === t.data) try {
                            u()
                        } finally {
                            tV.jf.removeEventListener("message", e)
                        }
                    };
                    tV.jf.addEventListener("message", e)
                }
                r.appendChild(s)
            }
            var rV = r(99259),
                rG = r(52687),
                rJ = r(52532),
                rK = r(96438),
                rY = r(67886),
                rZ = r(10274);
            let rX = g.O,
                rQ = new WeakMap,
                r0 = (0, el._C)((e = {}) => {
                    let t = e.types || ["crash", "deprecation", "intervention"];

                    function r(e) {
                        if (rQ.has((0, d.KU)()))
                            for (let t of e)(0, d.v4)(e => {
                                e.setExtra("url", t.url);
                                let r = `ReportingObserver [${t.type}]`,
                                    n = "No details available";
                                if (t.body) {
                                    let r = {};
                                    for (let e in t.body) r[e] = t.body[e];
                                    if (e.setExtra("body", r), "crash" === t.type) {
                                        let e = t.body;
                                        n = [e.crashId || "", e.reason || ""].join(" ").trim() || n
                                    } else n = t.body.message || n
                                }(0, m.wd)(`${r}: ${n}`)
                            })
                    }
                    return {
                        name: "ReportingObserver",
                        setupOnce() {
                            (0, rZ.vQ)() && new rX.ReportingObserver(r, {
                                buffered: !0,
                                types: t
                            }).observe()
                        },
                        setup(e) {
                            rQ.set(e, !0)
                        }
                    }
                });
            var r1 = r(59288),
                r2 = r(42053),
                r6 = r(85551);
            let r4 = (0, el._C)((e = {}) => {
                let t = {
                    failedRequestStatusCodes: [
                        [500, 599]
                    ],
                    failedRequestTargets: [/.*/],
                    ...e
                };
                return {
                    name: "HttpClient",
                    setup(e) {
                        var r, n, a, o;
                        r = e, n = t, (0, rZ.m7)() && (0, r1.ur)(e => {
                            if ((0, d.KU)() !== r) return;
                            let {
                                response: t,
                                args: a,
                                error: o,
                                virtualError: i
                            } = e, [s, l] = a;
                            t && function(e, t, r, n, a) {
                                if (r7(e, r.status, r.url)) {
                                    var o, i;
                                    let e, s, l, u, c = (o = t, !(i = n) && o instanceof Request || o instanceof Request && o.bodyUsed ? o : new Request(o, i));
                                    r9() && ([e, l] = r5("Cookie", c), [s, u] = r5("Set-Cookie", r));
                                    let d = r8({
                                        url: c.url,
                                        method: c.method,
                                        status: r.status,
                                        requestHeaders: e,
                                        responseHeaders: s,
                                        requestCookies: l,
                                        responseCookies: u,
                                        error: a
                                    });
                                    (0, m.r)(d)
                                }
                            }(n, s, t, l, o || i)
                        }, !1), a = e, o = t, "XMLHttpRequest" in g.O && (0, r6.Mn)(e => {
                            if ((0, d.KU)() !== a) return;
                            let {
                                error: t,
                                virtualError: r
                            } = e, n = e.xhr, i = n[r6.Er];
                            if (!i) return;
                            let {
                                method: s,
                                request_headers: l
                            } = i;
                            try {
                                ! function(e, t, r, n, a) {
                                    if (r7(e, t.status, t.responseURL)) {
                                        let e, o, i;
                                        if (r9()) {
                                            try {
                                                let e = t.getResponseHeader("Set-Cookie") || t.getResponseHeader("set-cookie") || void 0;
                                                e && (o = r3(e))
                                            } catch {}
                                            try {
                                                i = function(e) {
                                                    let t = e.getAllResponseHeaders();
                                                    return t ? t.split("\r\n").reduce((e, t) => {
                                                        let [r, n] = t.split(": ");
                                                        return r && n && (e[r] = n), e
                                                    }, {}) : {}
                                                }(t)
                                            } catch {}
                                            e = n
                                        }
                                        let s = r8({
                                            url: t.responseURL,
                                            method: r,
                                            status: t.status,
                                            requestHeaders: e,
                                            responseHeaders: i,
                                            responseCookies: o,
                                            error: a
                                        });
                                        (0, m.r)(s)
                                    }
                                }(o, n, s, l, t || r)
                            } catch (e) {
                                rq.T && v.vF.warn("Error while extracting response event form XHR response", e)
                            }
                        })
                    }
                }
            });

            function r5(e, t) {
                let r, n = function(e) {
                    let t = {};
                    return e.forEach((e, r) => {
                        t[r] = e
                    }), t
                }(t.headers);
                try {
                    let t = n[e] || n[e.toLowerCase()] || void 0;
                    t && (r = r3(t))
                } catch {}
                return [n, r]
            }

            function r3(e) {
                return e.split("; ").reduce((e, t) => {
                    let [r, n] = t.split("=");
                    return r && n && (e[r] = n), e
                }, {})
            }

            function r7(e, t, r) {
                var n, a;
                return n = e.failedRequestStatusCodes, n.some(e => "number" == typeof e ? e === t : t >= e[0] && t <= e[1]) && (a = e.failedRequestTargets, a.some(e => "string" == typeof e ? r.includes(e) : e.test(r))) && !(0, r2.A)(r, (0, d.KU)())
            }

            function r8(e) {
                let t = (0, d.KU)(),
                    r = t && e.error && e.error instanceof Error ? e.error.stack : void 0,
                    n = r && t ? t.getOptions().stackParser(r, 0, 1) : void 0,
                    a = `HTTP Client Error with status code: ${e.status}`,
                    o = {
                        message: a,
                        exception: {
                            values: [{
                                type: "Error",
                                value: a,
                                stacktrace: n ? {
                                    frames: n
                                } : void 0
                            }]
                        },
                        request: {
                            url: e.url,
                            method: e.method,
                            headers: e.requestHeaders,
                            cookies: e.requestCookies
                        },
                        contexts: {
                            response: {
                                status_code: e.status,
                                headers: e.responseHeaders,
                                cookies: e.responseCookies,
                                body_size: function(e) {
                                    if (e) {
                                        let t = e["Content-Length"] || e["content-length"];
                                        if (t) return parseInt(t, 10)
                                    }
                                }(e.responseHeaders)
                            }
                        }
                    };
                return (0, t1.M6)(o, {
                    type: "http.client",
                    handled: !1
                }), o
            }

            function r9() {
                let e = (0, d.KU)();
                return !!e && !!e.getOptions().sendDefaultPii
            }
            var ne = r(97275);
            let nt = g.O,
                nr = (0, el._C)((e = {}) => {
                    let t = null != e.frameContextLines ? e.frameContextLines : 7;
                    return {
                        name: "ContextLines",
                        processEvent: e => (function(e, t) {
                            let r = nt.document,
                                n = nt.location && (0, ne.f)(nt.location.href);
                            if (!r || !n) return e;
                            let a = e.exception ? .values;
                            if (!a ? .length) return e;
                            let o = r.documentElement.innerHTML;
                            if (!o) return e;
                            let i = ["<!DOCTYPE html>", "<html>", ...o.split("\n"), "</html>"];
                            return a.forEach(e => {
                                let r = e.stacktrace;
                                r ? .frames && (r.frames = r.frames.map(e => {
                                    var r, a, o, s;
                                    return r = e, a = i, o = n, s = t, r.filename === o && r.lineno && a.length && (0, t1.db)(a, r, s), r
                                }))
                            }), e
                        })(e, t)
                    }
                });
            var nn = r(34e3);

            function na(e) {
                let {
                    query: t,
                    operationName: r
                } = e, {
                    operationName: n = r,
                    operationType: a
                } = function(e) {
                    let t = e.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/);
                    if (t) return {
                        operationType: t[1],
                        operationName: t[2]
                    };
                    let r = e.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/);
                    return r ? {
                        operationType: r[1],
                        operationName: void 0
                    } : {
                        operationType: void 0,
                        operationName: void 0
                    }
                }(t);
                return n ? `${a} ${n}` : `${a}`
            }

            function no(e) {
                let t;
                if ("xhr" in e) {
                    let r = e.xhr[r6.Er];
                    t = r && (0, nn.sY)(r.body)[0]
                } else {
                    let r = (0, nn.Gv)(e.input);
                    t = (0, nn.sY)(r)[0]
                }
                return t
            }

            function ni(e) {
                let t;
                try {
                    let r = JSON.parse(e);
                    r.query && (t = r)
                } finally {
                    return t
                }
            }
            let ns = (0, el._C)(e => ({
                name: "GraphQLClient",
                setup(t) {
                    var r, n, a, o;
                    r = t, n = e, r.on("beforeOutgoingRequestSpan", (e, t) => {
                        let r = (0, I.et)(e).data || {};
                        if ("http.client" !== r[W.uT]) return;
                        let a = r[W.c9] || r["http.url"],
                            o = r[W.Ts] || r["http.method"];
                        if (!(0, rn.Kg)(a) || !(0, rn.Kg)(o)) return;
                        let {
                            endpoints: i
                        } = n, s = (0, t6.Xr)(a, i), l = no(t);
                        if (s && l) {
                            let t = ni(l);
                            if (t) {
                                let r = na(t);
                                e.updateName(`${o} ${a} (${r})`), e.setAttribute("graphql.document", l)
                            }
                        }
                    }), a = t, o = e, a.on("beforeOutgoingRequestBreadcrumb", (e, t) => {
                        let {
                            category: r,
                            type: n,
                            data: a
                        } = e;
                        if ("http" === n && ("fetch" === r || "xhr" === r)) {
                            let e = a ? .url,
                                {
                                    endpoints: r
                                } = o,
                                n = (0, t6.Xr)(e, r),
                                i = no(t);
                            if (n && a && i) {
                                let e = ni(i);
                                if (!a.graphql && e) {
                                    let t = na(e);
                                    a["graphql.document"] = e.query, a["graphql.operation"] = t
                                }
                            }
                        }
                    })
                }
            }));
            var nl = r(9334),
                nu = Object.defineProperty,
                nc = (e, t, r) => ((e, t, r) => t in e ? nu(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r)(e, "symbol" != typeof t ? t + "" : t, r);
            class nd {
                constructor() {
                    nc(this, "idNodeMap", new Map), nc(this, "nodeMetaMap", new WeakMap)
                }
                getId(e) {
                    return e ? this.getMeta(e) ? .id ? ? -1 : -1
                }
                getNode(e) {
                    return this.idNodeMap.get(e) || null
                }
                getIds() {
                    return Array.from(this.idNodeMap.keys())
                }
                getMeta(e) {
                    return this.nodeMetaMap.get(e) || null
                }
                removeNodeFromMap(e) {
                    let t = this.getId(e);
                    this.idNodeMap.delete(t), e.childNodes && e.childNodes.forEach(e => this.removeNodeFromMap(e))
                }
                has(e) {
                    return this.idNodeMap.has(e)
                }
                hasNode(e) {
                    return this.nodeMetaMap.has(e)
                }
                add(e, t) {
                    let r = t.id;
                    this.idNodeMap.set(r, e), this.nodeMetaMap.set(e, t)
                }
                replace(e, t) {
                    let r = this.getNode(e);
                    if (r) {
                        let e = this.nodeMetaMap.get(r);
                        e && this.nodeMetaMap.set(t, e)
                    }
                    this.idNodeMap.set(e, t)
                }
                reset() {
                    this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
                }
            }

            function np(e, t, r = 1 / 0, n = 0) {
                return !e || e.nodeType !== e.ELEMENT_NODE || n > r ? -1 : t(e) ? n : np(e.parentNode, t, r, n + 1)
            }

            function nf(e, t) {
                return r => {
                    if (null === r) return !1;
                    try {
                        if (e) {
                            if ("string" == typeof e) {
                                if (r.matches(`.${e}`)) return !0
                            } else if (function(e, t) {
                                    for (let r = e.classList.length; r--;) {
                                        let n = e.classList[r];
                                        if (t.test(n)) return !0
                                    }
                                    return !1
                                }(r, e)) return !0
                        }
                        if (t && r.matches(t)) return !0;
                        return !1
                    } catch {
                        return !1
                    }
                }
            }
            let nh = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
                n_ = {
                    map: {},
                    getId: () => (console.error(nh), -1),
                    getNode: () => (console.error(nh), null),
                    removeNodeFromMap() {
                        console.error(nh)
                    },
                    has: () => (console.error(nh), !1),
                    reset() {
                        console.error(nh)
                    }
                };

            function nm(e, t, r, n, a = window) {
                let o = a.Object.getOwnPropertyDescriptor(e, t);
                return a.Object.defineProperty(e, t, n ? r : {
                    set(e) {
                        nS(() => {
                            r.set.call(this, e)
                        }, 0), o && o.set && o.set.call(this, e)
                    }
                }), () => nm(e, t, o || {}, !0)
            }

            function ng(e, t, r) {
                try {
                    if (!(t in e)) return () => {};
                    let n = e[t],
                        a = r(n);
                    return "function" == typeof a && (a.prototype = a.prototype || {}, Object.defineProperties(a, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: n
                        }
                    })), e[t] = a, () => {
                        e[t] = n
                    }
                } catch {
                    return () => {}
                }
            }

            function ny(e, t, r, n, a) {
                if (!e) return !1;
                let o = function(e) {
                    if (!e) return null;
                    try {
                        return e.nodeType === e.ELEMENT_NODE ? e : e.parentElement
                    } catch (e) {
                        return null
                    }
                }(e);
                if (!o) return !1;
                let i = nf(t, r);
                if (!a) {
                    let e = n && o.matches(n);
                    return i(o) && !e
                }
                let s = np(o, i),
                    l = -1;
                return !(s < 0) && (n && (l = np(o, nf(null, n))), s > -1 && l < 0 || s < l)
            }
            "undefined" != typeof window && window.Proxy && window.Reflect && (n_ = new Proxy(n_, {
                get: (e, t, r) => ("map" === t && console.error(nh), Reflect.get(e, t, r))
            })), Date.now().toString();
            let nv = {};

            function nb(e) {
                let t = nv[e];
                if (t) return t;
                let r = window.document,
                    n = window[e];
                if (r && "function" == typeof r.createElement) try {
                    let t = r.createElement("iframe");
                    t.hidden = !0, r.head.appendChild(t);
                    let a = t.contentWindow;
                    a && a[e] && (n = a[e]), r.head.removeChild(t)
                } catch (e) {}
                return nv[e] = n.bind(window)
            }

            function nw(...e) {
                return nb("requestAnimationFrame")(...e)
            }

            function nS(...e) {
                return nb("setTimeout")(...e)
            }
            var nE = (e => (e[e["2D"] = 0] = "2D", e[e.WebGL = 1] = "WebGL", e[e.WebGL2 = 2] = "WebGL2", e))(nE || {});
            let nC = e => n ? (...t) => {
                try {
                    return e(...t)
                } catch (e) {
                    if (n && !0 === n(e)) return () => {};
                    throw e
                }
            } : e;
            for (var nx = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", nT = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), nk = 0; nk < nx.length; nk++) nT[nx.charCodeAt(nk)] = nk;
            var nI = function(e) {
                var t, r = new Uint8Array(e),
                    n = r.length,
                    a = "";
                for (t = 0; t < n; t += 3) a += nx[r[t] >> 2], a += nx[(3 & r[t]) << 4 | r[t + 1] >> 4], a += nx[(15 & r[t + 1]) << 2 | r[t + 2] >> 6], a += nx[63 & r[t + 2]];
                return n % 3 == 2 ? a = a.substring(0, a.length - 1) + "=" : n % 3 == 1 && (a = a.substring(0, a.length - 2) + "=="), a
            };
            let nP = new Map,
                nR = (e, t, r) => {
                    if (!e || !(nA(e, t) || "object" == typeof e)) return;
                    let n = function(e, t) {
                            let r = nP.get(e);
                            return r || (r = new Map, nP.set(e, r)), r.has(t) || r.set(t, []), r.get(t)
                        }(r, e.constructor.name),
                        a = n.indexOf(e);
                    return -1 === a && (a = n.length, n.push(e)), a
                },
                nN = (e, t, r) => e.map(e => (function e(t, r, n) {
                    if (t instanceof Array) return t.map(t => e(t, r, n));
                    if (null === t);
                    else if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray) return {
                        rr_type: t.constructor.name,
                        args: [Object.values(t)]
                    };
                    else if (t instanceof ArrayBuffer) return {
                        rr_type: t.constructor.name,
                        base64: nI(t)
                    };
                    else if (t instanceof DataView) return {
                        rr_type: t.constructor.name,
                        args: [e(t.buffer, r, n), t.byteOffset, t.byteLength]
                    };
                    else if (t instanceof HTMLImageElement) {
                        let e = t.constructor.name,
                            {
                                src: r
                            } = t;
                        return {
                            rr_type: e,
                            src: r
                        }
                    } else if (t instanceof HTMLCanvasElement) return {
                        rr_type: "HTMLImageElement",
                        src: t.toDataURL()
                    };
                    else if (t instanceof ImageData) return {
                        rr_type: t.constructor.name,
                        args: [e(t.data, r, n), t.width, t.height]
                    };
                    else if (nA(t, r) || "object" == typeof t) return {
                        rr_type: t.constructor.name,
                        index: nR(t, r, n)
                    };
                    return t
                })(e, t, r)),
                nA = (e, t) => !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(e => "function" == typeof t[e]).find(r => e instanceof t[r]);

            function nM(e, t, r, n, a) {
                let o = [];
                try {
                    let i = ng(e.HTMLCanvasElement.prototype, "getContext", function(e) {
                        return function(o, ...i) {
                            if (!ny(this, t, r, n, !0)) {
                                let e = "experimental-webgl" === o ? "webgl" : o;
                                if ("__context" in this || (this.__context = e), a && ["webgl", "webgl2"].includes(e))
                                    if (i[0] && "object" == typeof i[0]) {
                                        let e = i[0];
                                        e.preserveDrawingBuffer || (e.preserveDrawingBuffer = !0)
                                    } else i.splice(0, 1, {
                                        preserveDrawingBuffer: !0
                                    })
                            }
                            return e.apply(this, [o, ...i])
                        }
                    });
                    o.push(i)
                } catch {
                    console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                }
                return () => {
                    o.forEach(e => e())
                }
            }

            function nF(e, t, r, n, a, o, i, s) {
                let l = [];
                for (let i of Object.getOwnPropertyNames(e))
                    if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(i)) try {
                        if ("function" != typeof e[i]) continue;
                        let u = ng(e, i, function(e) {
                            return function(...l) {
                                let u = e.apply(this, l);
                                if (nR(u, s, this), "tagName" in this.canvas && !ny(this.canvas, n, a, o, !0)) {
                                    let e = nN(l, s, this),
                                        n = {
                                            type: t,
                                            property: i,
                                            args: e
                                        };
                                    r(this.canvas, n)
                                }
                                return u
                            }
                        });
                        l.push(u)
                    } catch {
                        let n = nm(e, i, {
                            set(e) {
                                r(this.canvas, {
                                    type: t,
                                    property: i,
                                    args: [e],
                                    setter: !0
                                })
                            }
                        });
                        l.push(n)
                    }
                return l
            }
            class nL {
                constructor(e) {
                    this.pendingCanvasMutations = new Map, this.rafStamps = {
                        latestId: 0,
                        invokeId: null
                    }, this.shadowDoms = new Set, this.windowsSet = new WeakSet, this.windows = [], this.restoreHandlers = [], this.frozen = !1, this.locked = !1, this.snapshotInProgressMap = new Map, this.worker = null, this.lastSnapshotTime = 0, this.processMutation = (e, t) => {
                        (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(e) || this.pendingCanvasMutations.set(e, []), this.pendingCanvasMutations.get(e).push(t)
                    };
                    let {
                        sampling: t = "all",
                        win: r,
                        blockClass: a,
                        blockSelector: o,
                        unblockSelector: i,
                        maxCanvasSize: s,
                        recordCanvas: l,
                        dataURLOptions: u,
                        errorHandler: c
                    } = e;
                    if (this.mutationCb = e.mutationCb, this.mirror = e.mirror, this.options = e, c && (n = c), (l && "number" == typeof t || e.enableManualSnapshot) && (this.worker = this.initFPSWorker()), this.addWindow(r), e.enableManualSnapshot) return;
                    nC(() => {
                        l && "all" === t && (this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher()), l && "number" == typeof t && this.initCanvasFPSObserver(t, a, o, i, s, {
                            dataURLOptions: u
                        })
                    })()
                }
                reset() {
                    this.pendingCanvasMutations.clear(), this.restoreHandlers.forEach(e => {
                        try {
                            e()
                        } catch (e) {}
                    }), this.restoreHandlers = [], this.windowsSet = new WeakSet, this.windows = [], this.shadowDoms = new Set, this.worker ? .terminate(), this.worker = null, this.snapshotInProgressMap = new Map
                }
                freeze() {
                    this.frozen = !0
                }
                unfreeze() {
                    this.frozen = !1
                }
                lock() {
                    this.locked = !0
                }
                unlock() {
                    this.locked = !1
                }
                addWindow(e) {
                    let {
                        sampling: t = "all",
                        blockClass: r,
                        blockSelector: n,
                        unblockSelector: a,
                        recordCanvas: o,
                        enableManualSnapshot: i
                    } = this.options;
                    if (!this.windowsSet.has(e)) {
                        if (i) {
                            this.windowsSet.add(e), this.windows.push(new WeakRef(e));
                            return
                        }
                        nC(() => {
                            if (o && "all" === t && this.initCanvasMutationObserver(e, r, n, a), o && "number" == typeof t) {
                                let t = nM(e, r, n, a, !0);
                                this.restoreHandlers.push(() => {
                                    t()
                                })
                            }
                        })(), this.windowsSet.add(e), this.windows.push(new WeakRef(e))
                    }
                }
                addShadowRoot(e) {
                    this.shadowDoms.add(new WeakRef(e))
                }
                resetShadowRoots() {
                    this.shadowDoms = new Set
                }
                initFPSWorker() {
                    let e = new Worker(function() {
                        let e = new Blob(['for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="undefined"==typeof Uint8Array?[]:new Uint8Array(256),a=0;a<64;a++)t[e.charCodeAt(a)]=a;var n=function(t){var a,n=new Uint8Array(t),r=n.length,s="";for(a=0;a<r;a+=3)s+=e[n[a]>>2],s+=e[(3&n[a])<<4|n[a+1]>>4],s+=e[(15&n[a+1])<<2|n[a+2]>>6],s+=e[63&n[a+2]];return r%3==2?s=s.substring(0,s.length-1)+"=":r%3==1&&(s=s.substring(0,s.length-2)+"=="),s};const r=new Map,s=new Map;const i=self;i.onmessage=async function(e){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:e.data.id});{const{id:t,bitmap:a,width:o,height:f,maxCanvasSize:c,dataURLOptions:g}=e.data,u=async function(e,t,a){const r=e+"-"+t;if("OffscreenCanvas"in globalThis){if(s.has(r))return s.get(r);const i=new OffscreenCanvas(e,t);i.getContext("2d");const o=await i.convertToBlob(a),f=await o.arrayBuffer(),c=n(f);return s.set(r,c),c}return""}(o,f,g),[h,d]=function(e,t,a){if(!a)return[e,t];const[n,r]=a;if(e<=n&&t<=r)return[e,t];let s=e,i=t;return s>n&&(i=Math.floor(n*t/e),s=n),i>r&&(s=Math.floor(r*e/t),i=r),[s,i]}(o,f,c),l=new OffscreenCanvas(h,d),w=l.getContext("bitmaprenderer"),p=h===o&&d===f?a:await createImageBitmap(a,{resizeWidth:h,resizeHeight:d,resizeQuality:"low"});w.transferFromImageBitmap(p),a.close();const y=await l.convertToBlob(g),v=y.type,b=await y.arrayBuffer(),m=n(b);if(p.close(),!r.has(t)&&await u===m)return r.set(t,m),i.postMessage({id:t});if(r.get(t)===m)return i.postMessage({id:t});i.postMessage({id:t,type:v,base64:m,width:o,height:f}),r.set(t,m)}};']);
                        return URL.createObjectURL(e)
                    }());
                    return e.onmessage = e => {
                        let t = e.data,
                            {
                                id: r
                            } = t;
                        if (this.snapshotInProgressMap.set(r, !1), !("base64" in t)) return;
                        let {
                            base64: n,
                            type: a,
                            width: o,
                            height: i
                        } = t;
                        this.mutationCb({
                            id: r,
                            type: nE["2D"],
                            commands: [{
                                property: "clearRect",
                                args: [0, 0, o, i]
                            }, {
                                property: "drawImage",
                                args: [{
                                    rr_type: "ImageBitmap",
                                    args: [{
                                        rr_type: "Blob",
                                        data: [{
                                            rr_type: "ArrayBuffer",
                                            base64: n
                                        }],
                                        type: a
                                    }]
                                }, 0, 0, o, i]
                            }]
                        })
                    }, e
                }
                initCanvasFPSObserver(e, t, r, n, a, o) {
                    let i = this.takeSnapshot(!1, e, t, r, n, a, o.dataURLOptions);
                    this.restoreHandlers.push(() => {
                        cancelAnimationFrame(i)
                    })
                }
                initCanvasMutationObserver(e, t, r, n) {
                    let a = nM(e, t, r, n, !1),
                        o = function(e, t, r, n, a) {
                            let o = [];
                            for (let i of Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype)) try {
                                if ("function" != typeof t.CanvasRenderingContext2D.prototype[i]) continue;
                                let s = ng(t.CanvasRenderingContext2D.prototype, i, function(o) {
                                    return function(...s) {
                                        return ny(this.canvas, r, n, a, !0) || nS(() => {
                                            let r = nN(s, t, this);
                                            e(this.canvas, {
                                                type: nE["2D"],
                                                property: i,
                                                args: r
                                            })
                                        }, 0), o.apply(this, s)
                                    }
                                });
                                o.push(s)
                            } catch {
                                let r = nm(t.CanvasRenderingContext2D.prototype, i, {
                                    set(t) {
                                        e(this.canvas, {
                                            type: nE["2D"],
                                            property: i,
                                            args: [t],
                                            setter: !0
                                        })
                                    }
                                });
                                o.push(r)
                            }
                            return () => {
                                o.forEach(e => e())
                            }
                        }(this.processMutation.bind(this), e, t, r, n),
                        i = function(e, t, r, n, a, o) {
                            let i = [];
                            return i.push(...nF(t.WebGLRenderingContext.prototype, nE.WebGL, e, r, n, a, o, t)), void 0 !== t.WebGL2RenderingContext && i.push(...nF(t.WebGL2RenderingContext.prototype, nE.WebGL2, e, r, n, a, o, t)), () => {
                                i.forEach(e => e())
                            }
                        }(this.processMutation.bind(this), e, t, r, n, this.mirror);
                    this.restoreHandlers.push(() => {
                        a(), o(), i()
                    })
                }
                snapshot(e) {
                    let {
                        options: t
                    } = this, r = this.takeSnapshot(!0, "all" === t.sampling ? 2 : t.sampling || 2, t.blockClass, t.blockSelector, t.unblockSelector, t.maxCanvasSize, t.dataURLOptions, e);
                    this.restoreHandlers.push(() => {
                        cancelAnimationFrame(r)
                    })
                }
                takeSnapshot(e, t, r, n, a, o, i, s) {
                    let l = 1e3 / t,
                        u = e => {
                            if (e) return [e];
                            let t = [],
                                o = e => {
                                    e.querySelectorAll("canvas").forEach(e => {
                                        ny(e, r, n, a, !0) || t.push(e)
                                    })
                                };
                            for (let e of this.windows) {
                                let t, r = e.deref();
                                try {
                                    t = r && r.document
                                } catch {}
                                t && o(t)
                            }
                            for (let e of this.shadowDoms) {
                                let t = e.deref();
                                t && o(t)
                            }
                            return t
                        },
                        c = t => {
                            if (this.windows.length) {
                                if (this.lastSnapshotTime && t - this.lastSnapshotTime < l) return void nw(c);
                                this.lastSnapshotTime = t, u(s).forEach(t => {
                                    if (!this.mirror.hasNode(t)) return;
                                    let r = this.mirror.getId(t);
                                    if (!this.snapshotInProgressMap.get(r) && t.width && t.height) {
                                        if (this.snapshotInProgressMap.set(r, !0), !e && ["webgl", "webgl2"].includes(t.__context)) {
                                            let e = t.getContext(t.__context);
                                            e ? .getContextAttributes() ? .preserveDrawingBuffer === !1 && e.clear(e.COLOR_BUFFER_BIT)
                                        }
                                        createImageBitmap(t).then(e => {
                                            this.worker ? .postMessage({
                                                id: r,
                                                bitmap: e,
                                                width: t.width,
                                                height: t.height,
                                                dataURLOptions: i,
                                                maxCanvasSize: o
                                            }, [e])
                                        }).catch(e => {
                                            nC(() => {
                                                throw e
                                            })()
                                        })
                                    }
                                }), e || nw(c)
                            }
                        };
                    return nw(c)
                }
                startPendingCanvasMutationFlusher() {
                    nw(() => this.flushPendingCanvasMutations())
                }
                startRAFTimestamping() {
                    let e = t => {
                        this.rafStamps.latestId = t, nw(e)
                    };
                    nw(e)
                }
                flushPendingCanvasMutations() {
                    this.pendingCanvasMutations.forEach((e, t) => {
                        let r = this.mirror.getId(t);
                        this.flushPendingCanvasMutationFor(t, r)
                    }), nw(() => this.flushPendingCanvasMutations())
                }
                flushPendingCanvasMutationFor(e, t) {
                    if (this.frozen || this.locked) return;
                    let r = this.pendingCanvasMutations.get(e);
                    if (!r || -1 === t) return;
                    let n = r.map(e => {
                            let {
                                type: t,
                                ...r
                            } = e;
                            return r
                        }),
                        {
                            type: a
                        } = r[0];
                    this.mutationCb({
                        id: t,
                        type: a,
                        commands: n
                    }), this.pendingCanvasMutations.delete(e)
                }
            }
            try {
                if (2 !== Array.from([1], e => 2 * e)[0]) {
                    let e = document.createElement("iframe");
                    document.body.appendChild(e), Array.from = e.contentWindow ? .Array.from || Array.from, document.body.removeChild(e)
                }
            } catch (e) {
                console.debug("Unable to override Array.from", e)
            }
            new nd,
            function(e) {
                e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped"
            }(u || (u = {}));
            let nO = {
                    low: {
                        sampling: {
                            canvas: 1
                        },
                        dataURLOptions: {
                            type: "image/webp",
                            quality: .25
                        }
                    },
                    medium: {
                        sampling: {
                            canvas: 2
                        },
                        dataURLOptions: {
                            type: "image/webp",
                            quality: .4
                        }
                    },
                    high: {
                        sampling: {
                            canvas: 4
                        },
                        dataURLOptions: {
                            type: "image/webp",
                            quality: .5
                        }
                    }
                },
                nD = (0, el._C)((e = {}) => {
                    let t, [r, n] = e.maxCanvasSize || [],
                        a = {
                            quality: e.quality || "medium",
                            enableManualSnapshot: e.enableManualSnapshot,
                            maxCanvasSize: [r ? Math.min(r, 1280) : 1280, n ? Math.min(n, 1280) : 1280]
                        },
                        o = new Promise(e => t = e);
                    return {
                        name: "ReplayCanvas",
                        getOptions() {
                            let {
                                quality: e,
                                enableManualSnapshot: r,
                                maxCanvasSize: n
                            } = a;
                            return {
                                enableManualSnapshot: r,
                                recordCanvas: !0,
                                getCanvasManager: e => {
                                    let a = new nL({ ...e,
                                        enableManualSnapshot: r,
                                        maxCanvasSize: n,
                                        errorHandler: e => {
                                            try {
                                                "object" == typeof e && (e.__rrweb__ = !0)
                                            } catch (e) {}
                                        }
                                    });
                                    return t(a), a
                                },
                                ...nO[e] || nO.medium
                            }
                        },
                        async snapshot(e) {
                            (await o).snapshot(e)
                        }
                    }
                });
            var nU = r(13205),
                n$ = r(14854),
                nj = r(62443);

            function nB(e) {
                return new Promise((t, r) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
                })
            }

            function nH(e) {
                return nB(e.getAllKeys())
            }

            function nW(e) {
                let t;

                function r() {
                    return void 0 == t && (t = function(e, t) {
                        let r = indexedDB.open(e);
                        r.onupgradeneeded = () => r.result.createObjectStore(t);
                        let n = nB(r);
                        return e => n.then(r => e(r.transaction(t, "readwrite").objectStore(t)))
                    }(e.dbName || "sentry-offline", e.storeName || "queue")), t
                }
                return {
                    push: async t => {
                        try {
                            var n, a;
                            let o = await (0, rv.bN)(t);
                            await (n = r(), a = e.maxQueueSize || 30, n(e => nH(e).then(t => {
                                if (!(t.length >= a)) return e.put(o, Math.max(...t, 0) + 1), nB(e.transaction)
                            })))
                        } catch (e) {}
                    },
                    unshift: async t => {
                        try {
                            var n, a;
                            let o = await (0, rv.bN)(t);
                            await (n = r(), a = e.maxQueueSize || 30, n(e => nH(e).then(t => {
                                if (!(t.length >= a)) return e.put(o, Math.min(...t, 0) - 1), nB(e.transaction)
                            })))
                        } catch (e) {}
                    },
                    shift: async () => {
                        try {
                            let e = await r()(e => nH(e).then(t => {
                                let r = t[0];
                                if (null != r) return nB(e.get(r)).then(t => (e.delete(r), nB(e.transaction).then(() => t)))
                            }));
                            if (e) return (0, rv.mE)(e)
                        } catch (e) {}
                    }
                }
            }

            function nq(e = r$._) {
                var t;
                return t = function(e) {
                    function t(...e) {
                        t5.T && v.vF.info("[Offline]:", ...e)
                    }
                    return r => {
                        let n, a = e(r);
                        if (!r.createStore) throw Error("No `createStore` function was provided");
                        let o = r.createStore(r),
                            i = 5e3;

                        function s(e) {
                            n && clearTimeout(n), "number" != typeof(n = setTimeout(async () => {
                                n = void 0;
                                let e = await o.shift();
                                e && (t("Attempting to send previously queued event"), e[0].sent_at = new Date().toISOString(), u(e, !0).catch(e => {
                                    t("Failed to retry sending", e)
                                }))
                            }, e)) && n.unref && n.unref()
                        }

                        function l() {
                            n || (s(i), i = Math.min(2 * i, 36e5))
                        }
                        async function u(e, n = !1) {
                            if (!n && (0, rv.hP)(e, ["replay_event", "replay_recording"])) return await o.push(e), s(100), {};
                            try {
                                if (r.shouldSend && await r.shouldSend(e) === !1) throw Error("Envelope not sent because `shouldSend` callback returned false");
                                let t = await a.send(e),
                                    n = 100;
                                if (t) {
                                    if (t.headers ? .["retry-after"]) n = (0, nj.FA)(t.headers["retry-after"]);
                                    else if (t.headers ? .["x-sentry-rate-limits"]) n = 6e4;
                                    else if ((t.statusCode || 0) >= 400) return t
                                }
                                return s(n), i = 5e3, t
                            } catch (a) {
                                var c;
                                if (await (c = i, !(0, rv.hP)(e, ["client_report"]) && (!r.shouldStore || r.shouldStore(e, a, c)))) return n ? await o.unshift(e) : await o.push(e), l(), t("Error sending. Event queued.", a), {};
                                throw a
                            }
                        }
                        return r.flushAtStartup && l(), {
                            send: u,
                            flush: e => (void 0 === e && (i = 5e3, s(100)), a.flush(e))
                        }
                    }
                }(e), e => {
                    let r = t({ ...e,
                        createStore: nW
                    });
                    return tV.jf.addEventListener("online", async e => {
                        await r.flush()
                    }), r
                }
            }
            var nz = r(63843),
                nV = r(63651),
                nG = r(61998);
            let nJ = String(0),
                nK = tV.jf.navigator,
                nY = "",
                nZ = "",
                nX = "",
                nQ = nK ? .userAgent || "",
                n0 = "",
                n1 = nK ? .language || nK ? .languages ? .[0] || "",
                n2 = nK ? .userAgentData;

            function n6(e) {
                return "pageload" === (0, I.et)(e).op
            }(function(e) {
                return "object" == typeof e && null !== e && "getHighEntropyValues" in e
            })(n2) && n2.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(e => {
                if (nY = e.platform || "", nX = e.architecture || "", n0 = e.model || "", nZ = e.platformVersion || "", e.fullVersionList ? .length) {
                    let t = e.fullVersionList[e.fullVersionList.length - 1];
                    nQ = `${t.brand} ${t.version}`
                }
            }).catch(e => void 0);
            let n4 = !1;

            function n5(e) {
                if (n4) return rq.T && v.vF.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1;
                if (!e.isRecording()) return rq.T && v.vF.log("[Profiling] Discarding profile because transaction was not sampled."), !1;
                let t = (0, d.KU)(),
                    r = t ? .getOptions();
                if (!r) return rq.T && v.vF.log("[Profiling] Profiling disabled, no options found."), !1;
                let n = r.profilesSampleRate;
                return ("number" != typeof n && "boolean" != typeof n || "number" == typeof n && isNaN(n) ? (rq.T && v.vF.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(n)} of type ${JSON.stringify(typeof n)}.`), 1) : !0 !== n && !1 !== n && (n < 0 || n > 1) && (rq.T && v.vF.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${n}.`), 1)) ? (rq.T && v.vF.warn("[Profiling] Discarding profile because of invalid sample rate."), !1) : n ? !!(!0 === n || Math.random() < n) || (rq.T && v.vF.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(n)})`), !1) : (rq.T && v.vF.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), !1)
            }
            let n3 = new Map;

            function n7(e) {
                let t;
                n6(e) && (t = 1e3 * (0, nz.zf)());
                let r = function() {
                    let e = tV.jf.Profiler;
                    if ("function" != typeof e) {
                        rq.T && v.vF.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.");
                        return
                    }
                    let t = Math.floor(3e3);
                    try {
                        return new e({
                            sampleInterval: 10,
                            maxBufferSize: t
                        })
                    } catch (e) {
                        rq.T && (v.vF.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), v.vF.log("[Profiling] Disabling profiling for current user session.")), n4 = !0
                    }
                }();
                if (!r) return;
                rq.T && v.vF.log(`[Profiling] started profiling span: ${(0,I.et)(e).description}`);
                let n = (0, t1.eJ)();
                async function a() {
                    if (e && r) return r.stop().then(t => {
                        if (o && (tV.jf.clearTimeout(o), o = void 0), rq.T && v.vF.log(`[Profiling] stopped profiling of span: ${(0,I.et)(e).description}`), !t) {
                            rq.T && v.vF.log(`[Profiling] profiler returned null profile for: ${(0,I.et)(e).description}`, "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started");
                            return
                        }
                        if (n3.set(n, t), n3.size > 30) {
                            let e = n3.keys().next().value;
                            n3.delete(e)
                        }
                    }).catch(e => {
                        rq.T && v.vF.log("[Profiling] error while stopping profiler:", e)
                    })
                }(0, d.o5)().setContext("profile", {
                    profile_id: n,
                    start_timestamp: t
                });
                let o = tV.jf.setTimeout(() => {
                        rq.T && v.vF.log("[Profiling] max profile duration elapsed, stopping profiling for:", (0, I.et)(e).description), a()
                    }, 3e4),
                    i = e.end.bind(e);
                e.end = function() {
                    return e ? (a().then(() => {
                        i()
                    }, () => {
                        i()
                    }), e) : i()
                }
            }
            let n8 = (0, el._C)(() => ({
                name: "BrowserProfiling",
                setup(e) {
                    let t = (0, I.Bk)(),
                        r = t && (0, I.zU)(t);
                    r && n6(r) && n5(r) && n7(r), e.on("spanStart", e => {
                        e === (0, I.zU)(e) && n5(e) && n7(e)
                    }), e.on("beforeEnvelope", e => {
                        if (!n3.size) return;
                        let t = function(e) {
                            let t = [];
                            return (0, rv.yH)(e, (e, r) => {
                                if ("transaction" === r)
                                    for (let r = 1; r < e.length; r++) {
                                        let n = e[r];
                                        n ? .contexts && n.contexts.profile && n.contexts.profile.profile_id && t.push(e[r])
                                    }
                            }), t
                        }(e);
                        if (!t.length) return;
                        let r = [];
                        for (let e of t) {
                            let t = e ? .contexts,
                                n = t ? .profile ? .profile_id,
                                a = t ? .profile ? .start_timestamp;
                            if ("string" != typeof n || !n) {
                                rq.T && v.vF.log("[Profiling] cannot find profile for a span without a profile context");
                                continue
                            }
                            t ? .profile && delete t.profile;
                            let o = function(e) {
                                let t = n3.get(e);
                                return t && n3.delete(e), t
                            }(n);
                            if (!o) {
                                rq.T && v.vF.log(`[Profiling] Could not retrieve profile for span: ${n}`);
                                continue
                            }
                            let i = function(e, t, r, n) {
                                var a;
                                if (!(r.samples.length < 2 ? (rq.T && v.vF.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!r.frames.length || (rq.T && v.vF.log("[Profiling] Discarding profile because it contains no frames"), !1))) return null;
                                if ("transaction" !== n.type) throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
                                if (null == r) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${r} instead.`);
                                let o = function(e) {
                                        let t = e.contexts ? .trace ? .trace_id;
                                        return ("string" == typeof t && 32 !== t.length && rq.T && v.vF.log(`[Profiling] Invalid traceId: ${t} on profiled event`), "string" != typeof t) ? "" : t
                                    }(n),
                                    i = "thread_metadata" in (a = r) ? a : function(e) {
                                        let t, r = 0,
                                            n = {
                                                samples: [],
                                                stacks: [],
                                                frames: [],
                                                thread_metadata: {
                                                    [nJ]: {
                                                        name: "main"
                                                    }
                                                }
                                            },
                                            a = e.samples[0];
                                        if (!a) return n;
                                        let o = a.timestamp,
                                            i = (0, nz.k3)(),
                                            s = "number" == typeof performance.timeOrigin ? performance.timeOrigin : i || 0,
                                            l = s - (i || s);
                                        return e.samples.forEach((a, i) => {
                                            if (void 0 === a.stackId) {
                                                void 0 === t && (t = r, n.stacks[t] = [], r++), n.samples[i] = {
                                                    elapsed_since_start_ns: ((a.timestamp + l - o) * 1e6).toFixed(0),
                                                    stack_id: t,
                                                    thread_id: nJ
                                                };
                                                return
                                            }
                                            let s = e.stacks[a.stackId],
                                                u = [];
                                            for (; s;) {
                                                u.push(s.frameId);
                                                let t = e.frames[s.frameId];
                                                t && void 0 === n.frames[s.frameId] && (n.frames[s.frameId] = {
                                                    function: t.name,
                                                    abs_path: "number" == typeof t.resourceId ? e.resources[t.resourceId] : void 0,
                                                    lineno: t.line,
                                                    colno: t.column
                                                }), s = void 0 === s.parentId ? void 0 : e.stacks[s.parentId]
                                            }
                                            let c = {
                                                elapsed_since_start_ns: ((a.timestamp + l - o) * 1e6).toFixed(0),
                                                stack_id: r,
                                                thread_id: nJ
                                            };
                                            n.stacks[r] = u, n.samples[i] = c, r++
                                        }), n
                                    }(a),
                                    s = t || ("number" == typeof n.start_timestamp ? 1e3 * n.start_timestamp : 1e3 * (0, nz.zf)()),
                                    l = "number" == typeof n.timestamp ? 1e3 * n.timestamp : 1e3 * (0, nz.zf)();
                                return {
                                    event_id: e,
                                    timestamp: new Date(s).toISOString(),
                                    platform: "javascript",
                                    version: "1",
                                    release: n.release || "",
                                    environment: n.environment || nV.U,
                                    runtime: {
                                        name: "javascript",
                                        version: tV.jf.navigator.userAgent
                                    },
                                    os: {
                                        name: nY,
                                        version: nZ,
                                        build_number: nQ
                                    },
                                    device: {
                                        locale: n1,
                                        model: n0,
                                        manufacturer: nQ,
                                        architecture: nX,
                                        is_emulator: !1
                                    },
                                    debug_meta: {
                                        images: function(e) {
                                            let t = (0, d.KU)(),
                                                r = t ? .getOptions(),
                                                n = r ? .stackParser;
                                            return n ? (0, nG.i)(n, e) : []
                                        }(r.resources)
                                    },
                                    profile: i,
                                    transactions: [{
                                        name: n.transaction || "",
                                        id: n.event_id || (0, t1.eJ)(),
                                        trace_id: o,
                                        active_thread_id: nJ,
                                        relative_start_ns: "0",
                                        relative_end_ns: ((l - s) * 1e6).toFixed(0)
                                    }]
                                }
                            }(n, a, o, e);
                            i && r.push(i)
                        }! function(e, t) {
                            if (t.length)
                                for (let r of t) e[1].push([{
                                    type: "profile"
                                }, r])
                        }(e, r)
                    })
                }
            }));
            var n9 = r(68312);
            let ae = (0, el._C)((e = {}) => {
                let t = e.sidecarUrl || "http://localhost:8969/stream";
                return {
                    name: "SpotlightBrowser",
                    setup: () => {
                        rq.T && v.vF.log("Using Sidecar URL", t)
                    },
                    processEvent: e => ! function(e) {
                        return !!("transaction" === e.type && e.spans && e.contexts && e.contexts.trace && "ui.action.click" === e.contexts.trace.op && e.spans.some(({
                            description: e
                        }) => e ? .includes("#sentry-spotlight")))
                    }(e) ? e : null,
                    afterAllSetup: e => {
                        ! function(e, t) {
                            let r = (0, n9.qd)("fetch"),
                                n = 0;
                            e.on("beforeEnvelope", e => {
                                if (n > 3) return void v.vF.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", n);
                                r(t, {
                                    method: "POST",
                                    body: (0, rv.bN)(e),
                                    headers: {
                                        "Content-Type": "application/x-sentry-envelope"
                                    },
                                    mode: "cors"
                                }).then(e => {
                                    e.status >= 200 && e.status < 400 && (n = 0)
                                }, e => {
                                    n++, v.vF.error("Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/", e)
                                })
                            })
                        }(e, t)
                    }
                }
            });
            var at = r(8361);

            function ar(e) {
                let t = (0, d.o5)().getScopeData().contexts.flags,
                    r = t ? t.values : [];
                return r.length && (void 0 === e.contexts && (e.contexts = {}), e.contexts.flags = {
                    values: [...r]
                }), e
            }

            function an(e, t, r = 100) {
                let n = (0, d.o5)().getScopeData().contexts;
                n.flags || (n.flags = {
                        values: []
                    }),
                    function(e, t, r, n) {
                        if ("boolean" != typeof r) return;
                        if (e.length > n) {
                            rq.T && v.vF.error(`[Feature Flags] insertToFlagBuffer called on a buffer larger than maxSize=${n}`);
                            return
                        }
                        let a = e.findIndex(e => e.flag === t); - 1 !== a && e.splice(a, 1), e.length === n && e.shift(), e.push({
                            flag: t,
                            result: r
                        })
                    }(n.flags.values, e, t, r)
            }
            let aa = (0, el._C)(() => ({
                    name: "FeatureFlags",
                    processEvent: (e, t, r) => ar(e),
                    addFeatureFlag(e, t) {
                        an(e, t)
                    }
                })),
                ao = (0, el._C)(() => ({
                    name: "LaunchDarkly",
                    processEvent: (e, t, r) => ar(e)
                }));

            function ai() {
                return {
                    name: "sentry-flag-auditor",
                    type: "flag-used",
                    synchronous: !0,
                    method: (e, t, r) => {
                        an(e, t.value)
                    }
                }
            }
            let as = (0, el._C)(() => ({
                name: "OpenFeature",
                processEvent: (e, t, r) => ar(e)
            }));
            class al {
                after(e, t) {
                    an(t.flagKey, t.value)
                }
                error(e, t, r) {
                    an(e.flagKey, e.defaultValue)
                }
            }
            let au = (0, el._C)(({
                featureFlagClientClass: e
            }) => ({
                name: "Unleash",
                processEvent: (e, t, r) => ar(e),
                setupOnce() {
                    let t = e.prototype;
                    (0, ro.GS)(t, "isEnabled", ac)
                }
            }));

            function ac(e) {
                return function(...t) {
                    let r = t[0],
                        n = e.apply(this, t);
                    return "string" == typeof r && "boolean" == typeof n ? an(r, n) : rq.T && v.vF.error(`[Feature Flags] UnleashClient.isEnabled does not match expected signature. arg0: ${r} (${typeof r}), result: ${n} (${typeof n})`), n
                }
            }
            let ad = (0, el._C)(({
                featureFlagClient: e
            }) => ({
                name: "Statsig",
                processEvent: (e, t, r) => ar(e),
                setup() {
                    e.on("gate_evaluation", e => {
                        an(e.gate.name, e.gate.value)
                    })
                }
            }));
            async function ap() {
                let e = (0, d.KU)();
                if (!e) return "no-client-active";
                if (!e.getDsn()) return "no-dsn-configured";
                try {
                    await fetch("https://o447951.ingest.sentry.io/api/1337/envelope/?sentry_version=7&sentry_key=1337&sentry_client=sentry.javascript.browser%2F1.33.7", {
                        body: "{}",
                        method: "POST",
                        mode: "cors",
                        credentials: "omit"
                    })
                } catch {
                    return "sentry-unreachable"
                }
            }
            var af = r(12115);

            function ah(e, {
                componentStack: t
            }, r) {
                if (function(e) {
                        let t = e.match(/^([^.]+)/);
                        return null !== t && parseInt(t[0]) >= 17
                    }(af.version) && (0, rn.bJ)(e) && t) {
                    let r = Error(e.message);
                    r.name = `React ErrorBoundary ${e.name}`, r.stack = t;
                    let n = new WeakSet;
                    ! function e(t, r) {
                        if (!n.has(t)) {
                            if (t.cause) return n.add(t), e(t.cause, r);
                            t.cause = r
                        }
                    }(e, r)
                }
                return (0, d.v4)(n => (n.setContext("react", {
                    componentStack: t
                }), (0, m.Cp)(e, r)))
            }

            function a_(e) {
                return (t, r) => {
                    let n = ah(t, r);
                    e && e(t, r, n)
                }
            }
            let am = "ui.react.render",
                ag = "ui.react.mount";
            var ay = r(62243),
                av = r.t(ay, 2);
            let ab = ay || av;
            class aw extends af.Component {
                constructor(e) {
                    super(e);
                    let {
                        name: t,
                        disabled: r = !1
                    } = this.props;
                    if (r) return;
                    this._mountSpan = (0, H.Uk)({
                        name: `<${t}>`,
                        onlyIfParent: !0,
                        op: ag,
                        attributes: {
                            [W.JD]: "auto.ui.react.profiler",
                            "ui.component_name": t
                        }
                    })
                }
                componentDidMount() {
                    this._mountSpan && this._mountSpan.end()
                }
                shouldComponentUpdate({
                    updateProps: e,
                    includeUpdates: t = !0
                }) {
                    if (t && this._mountSpan && e !== this.props.updateProps) {
                        let t = Object.keys(e).filter(t => e[t] !== this.props.updateProps[t]);
                        if (t.length > 0) {
                            let e = (0, nz.zf)();
                            this._updateSpan = (0, H.hb)(this._mountSpan, () => (0, H.Uk)({
                                name: `<${this.props.name}>`,
                                onlyIfParent: !0,
                                op: "ui.react.update",
                                startTime: e,
                                attributes: {
                                    [W.JD]: "auto.ui.react.profiler",
                                    "ui.component_name": this.props.name,
                                    "ui.react.changed_props": t
                                }
                            }))
                        }
                    }
                    return !0
                }
                componentDidUpdate() {
                    this._updateSpan && (this._updateSpan.end(), this._updateSpan = void 0)
                }
                componentWillUnmount() {
                    let e = (0, nz.zf)(),
                        {
                            name: t,
                            includeRender: r = !0
                        } = this.props;
                    if (this._mountSpan && r) {
                        let r = (0, I.et)(this._mountSpan).timestamp;
                        (0, H.hb)(this._mountSpan, () => {
                            let n = (0, H.Uk)({
                                onlyIfParent: !0,
                                name: `<${t}>`,
                                op: am,
                                startTime: r,
                                attributes: {
                                    [W.JD]: "auto.ui.react.profiler",
                                    "ui.component_name": t
                                }
                            });
                            n && n.end(e)
                        })
                    }
                }
                render() {
                    return this.props.children
                }
            }

            function aS(e, t) {
                let r = t ? .name || e.displayName || e.name || "unknown",
                    n = n => af.createElement(aw, { ...t,
                        name: r,
                        updateProps: n
                    }, af.createElement(e, { ...n
                    }));
                return n.displayName = `profiler(${r})`, ab(n, e), n
            }

            function aE(e, t = {
                disabled: !1,
                hasRenderSpan: !0
            }) {
                let [r] = af.useState(() => {
                    if (!t ? .disabled) return (0, H.Uk)({
                        name: `<${e}>`,
                        onlyIfParent: !0,
                        op: ag,
                        attributes: {
                            [W.JD]: "auto.ui.react.profiler",
                            "ui.component_name": e
                        }
                    })
                });
                af.useEffect(() => (r && r.end(), () => {
                    if (r && t.hasRenderSpan) {
                        let t = (0, I.et)(r).timestamp,
                            n = (0, nz.zf)(),
                            a = (0, H.Uk)({
                                name: `<${e}>`,
                                onlyIfParent: !0,
                                op: am,
                                startTime: t,
                                attributes: {
                                    [W.JD]: "auto.ui.react.profiler",
                                    "ui.component_name": e
                                }
                            });
                        a && a.end(n)
                    }
                }), [])
            }
            Object.assign(aw, {
                defaultProps: {
                    disabled: !1,
                    includeRender: !0,
                    includeUpdates: !0
                }
            });
            let aC = {
                componentStack: null,
                error: null,
                eventId: null
            };
            class ax extends af.Component {
                constructor(e) {
                    super(e), this.state = aC, this._openFallbackReportDialog = !0;
                    let t = (0, d.KU)();
                    t && e.showDialog && (this._openFallbackReportDialog = !1, this._cleanupHook = t.on("afterSendEvent", t => {
                        !t.type && this._lastEventId && t.event_id === this._lastEventId && rz({ ...e.dialogOptions,
                            eventId: this._lastEventId
                        })
                    }))
                }
                componentDidCatch(e, t) {
                    let {
                        componentStack: r
                    } = t, {
                        beforeCapture: n,
                        onError: a,
                        showDialog: o,
                        dialogOptions: i
                    } = this.props;
                    (0, d.v4)(s => {
                        n && n(s, e, r);
                        let l = ah(e, t, {
                            mechanism: {
                                handled: null != this.props.handled ? this.props.handled : !!this.props.fallback
                            }
                        });
                        a && a(e, r, l), o && (this._lastEventId = l, this._openFallbackReportDialog && rz({ ...i,
                            eventId: l
                        })), this.setState({
                            error: e,
                            componentStack: r,
                            eventId: l
                        })
                    })
                }
                componentDidMount() {
                    let {
                        onMount: e
                    } = this.props;
                    e && e()
                }
                componentWillUnmount() {
                    let {
                        error: e,
                        componentStack: t,
                        eventId: r
                    } = this.state, {
                        onUnmount: n
                    } = this.props;
                    n && (this.state === aC ? n(null, null, null) : n(e, t, r)), this._cleanupHook && (this._cleanupHook(), this._cleanupHook = void 0)
                }
                resetErrorBoundary() {
                    let {
                        onReset: e
                    } = this.props, {
                        error: t,
                        componentStack: r,
                        eventId: n
                    } = this.state;
                    e && e(t, r, n), this.setState(aC)
                }
                render() {
                    let {
                        fallback: e,
                        children: t
                    } = this.props, r = this.state;
                    if (null === r.componentStack) return "function" == typeof t ? t() : t;
                    let n = "function" == typeof e ? af.createElement(e, {
                        error: r.error,
                        componentStack: r.componentStack,
                        resetError: () => this.resetErrorBoundary(),
                        eventId: r.eventId
                    }) : e;
                    return af.isValidElement(n) ? n : null
                }
            }

            function aT(e, t) {
                let r = e.displayName || e.name || "unknown",
                    n = r => af.createElement(ax, { ...t
                    }, af.createElement(e, { ...r
                    }));
                return n.displayName = `errorBoundary(${r})`, ab(n, e), n
            }
            let ak = {
                attachReduxState: !0,
                actionTransformer: e => e,
                stateTransformer: e => e || null
            };

            function aI(e) {
                let t = { ...ak,
                    ...e
                };
                return e => (r, n) => {
                    function a(e) {
                        return (r, n) => {
                            let a = e(r, n),
                                o = (0, d.o5)(),
                                i = t.actionTransformer(n);
                            null != i && (0, tQ.Z)({
                                category: "redux.action",
                                data: i,
                                type: "info"
                            });
                            let s = t.stateTransformer(a);
                            if (null != s) {
                                let e = (0, d.KU)(),
                                    t = e ? .getOptions(),
                                    r = t ? .normalizeDepth || 3,
                                    n = {
                                        state: {
                                            type: "redux",
                                            value: s
                                        }
                                    };
                                (0, ro.my)(n, "__sentry_override_normalization_depth__", 3 + r), o.setContext("state", n)
                            } else o.setContext("state", null);
                            let {
                                configureScopeWithState: l
                            } = t;
                            return "function" == typeof l && l(o, a), a
                        }
                    }
                    t.attachReduxState && (0, d.m6)().addEventProcessor((e, t) => {
                        try {
                            void 0 === e.type && "redux" === e.contexts.state.state.type && (t.attachments = [...t.attachments || [], {
                                filename: "redux_state.json",
                                data: JSON.stringify(e.contexts.state.state.value)
                            }])
                        } catch (e) {}
                        return e
                    });
                    let o = e(a(r), n);
                    return o.replaceReducer = new Proxy(o.replaceReducer, {
                        apply: function(e, t, r) {
                            e.apply(t, [a(r[0])])
                        }
                    }), o
                }
            }

            function aP(e) {
                let t = (0, n$.dp)({ ...e,
                        instrumentPageLoad: !1,
                        instrumentNavigation: !1
                    }),
                    {
                        history: r,
                        routes: n,
                        match: a,
                        instrumentPageLoad: o = !0,
                        instrumentNavigation: i = !0
                    } = e;
                return { ...t,
                    afterAllSetup(e) {
                        t.afterAllSetup(e), o && tV.jf.location && aR(n, tV.jf.location, a, (t, r = "url") => {
                            (0, n$.Sx)(e, {
                                name: t,
                                attributes: {
                                    [W.uT]: "pageload",
                                    [W.JD]: "auto.pageload.react.reactrouter_v3",
                                    [W.i_]: r
                                }
                            })
                        }), i && r.listen && r.listen(t => {
                            ("PUSH" === t.action || "POP" === t.action) && aR(n, t, a, (t, r = "url") => {
                                (0, n$.Nt)(e, {
                                    name: t,
                                    attributes: {
                                        [W.uT]: "navigation",
                                        [W.JD]: "auto.navigation.react.reactrouter_v3",
                                        [W.i_]: r
                                    }
                                })
                            })
                        })
                    }
                }
            }

            function aR(e, t, r, n) {
                let a = t.pathname;
                r({
                    location: t,
                    routes: e
                }, (e, t, r) => {
                    if (e || !r) return n(a);
                    let o = function(e) {
                        if (!Array.isArray(e) || 0 === e.length) return "";
                        let t = e.filter(e => !!e.path),
                            r = -1;
                        for (let e = t.length - 1; e >= 0; e--) {
                            let n = t[e];
                            if (n.path ? .startsWith("/")) {
                                r = e;
                                break
                            }
                        }
                        return t.slice(r).reduce((e, {
                            path: t
                        }) => {
                            let r = "/" === e || "" === e ? t : `/${t}`;
                            return `${e}${r}`
                        }, "")
                    }(r.routes || []);
                    return 0 === o.length || "/*" === o ? n(a) : n(a = o, "route")
                })
            }

            function aN(e, t = {}) {
                let r = (0, n$.dp)({ ...t,
                        instrumentNavigation: !1,
                        instrumentPageLoad: !1
                    }),
                    {
                        instrumentPageLoad: n = !0,
                        instrumentNavigation: a = !0
                    } = t;
                return { ...r,
                    afterAllSetup(t) {
                        r.afterAllSetup(t);
                        let o = tV.jf.location;
                        if (n && o) {
                            let r = e.matchRoutes(o.pathname, e.options.parseSearch(o.search), {
                                    preload: !1,
                                    throwOnError: !1
                                }),
                                n = r[r.length - 1];
                            (0, n$.Sx)(t, {
                                name: n ? n.routeId : o.pathname,
                                attributes: {
                                    [W.uT]: "pageload",
                                    [W.JD]: "auto.pageload.react.tanstack_router",
                                    [W.i_]: n ? "route" : "url",
                                    ...aA(n)
                                }
                            })
                        }
                        a && e.subscribe("onBeforeNavigate", r => {
                            if (r.toLocation.state === r.fromLocation ? .state) return;
                            let n = e.matchRoutes(r.toLocation.pathname, r.toLocation.search, {
                                    preload: !1,
                                    throwOnError: !1
                                }),
                                a = n[n.length - 1],
                                o = tV.jf.location,
                                i = (0, n$.Nt)(t, {
                                    name: a ? a.routeId : o.pathname,
                                    attributes: {
                                        [W.uT]: "navigation",
                                        [W.JD]: "auto.navigation.react.tanstack_router",
                                        [W.i_]: a ? "route" : "url"
                                    }
                                }),
                                s = e.subscribe("onResolved", t => {
                                    if (s(), i) {
                                        let r = e.matchRoutes(t.toLocation.pathname, t.toLocation.search, {
                                                preload: !1,
                                                throwOnError: !1
                                            }),
                                            n = r[r.length - 1];
                                        n && (i.updateName(n.routeId), i.setAttribute(W.i_, "route"), i.setAttributes(aA(n)))
                                    }
                                })
                        })
                    }
                }
            }

            function aA(e) {
                if (!e) return {};
                let t = {};
                return Object.entries(e.params).forEach(([e, r]) => {
                    t[`url.path.params.${e}`] = r
                }), t
            }

            function aM(e) {
                let t = (0, n$.dp)({ ...e,
                        instrumentPageLoad: !1,
                        instrumentNavigation: !1
                    }),
                    {
                        history: r,
                        routes: n,
                        matchPath: a,
                        instrumentPageLoad: o = !0,
                        instrumentNavigation: i = !0
                    } = e;
                return { ...t,
                    afterAllSetup(e) {
                        t.afterAllSetup(e), aL(e, o, i, r, "reactrouter_v4", n, a)
                    }
                }
            }

            function aF(e) {
                let t = (0, n$.dp)({ ...e,
                        instrumentPageLoad: !1,
                        instrumentNavigation: !1
                    }),
                    {
                        history: r,
                        routes: n,
                        matchPath: a,
                        instrumentPageLoad: o = !0,
                        instrumentNavigation: i = !0
                    } = e;
                return { ...t,
                    afterAllSetup(e) {
                        t.afterAllSetup(e), aL(e, o, i, r, "reactrouter_v5", n, a)
                    }
                }
            }

            function aL(e, t, r, n, a, o = [], i) {
                function s(e) {
                    if (0 === o.length || !i) return [e, "url"];
                    for (let t of function e(t, r, n, a = []) {
                            return t.some(t => {
                                let o = t.path ? n(r, t) : a.length ? a[a.length - 1].match : {
                                    path: "/",
                                    url: "/",
                                    params: {},
                                    isExact: "/" === r
                                };
                                return o && (a.push({
                                    route: t,
                                    match: o
                                }), t.routes && e(t.routes, r, n, a)), !!o
                            }), a
                        }(o, e, i))
                        if (t.match.isExact) return [t.match.path, "route"];
                    return [e, "url"]
                }
                if (t) {
                    let t = n.location ? n.location.pathname : tV.jf.location ? tV.jf.location.pathname : void 0;
                    if (t) {
                        let [r, n] = s(t);
                        (0, n$.Sx)(e, {
                            name: r,
                            attributes: {
                                [W.uT]: "pageload",
                                [W.JD]: `auto.pageload.react.${a}`,
                                [W.i_]: n
                            }
                        })
                    }
                }
                r && n.listen && n.listen((t, r) => {
                    if (r && ("PUSH" === r || "POP" === r)) {
                        let [r, n] = s(t.pathname);
                        (0, n$.Nt)(e, {
                            name: r,
                            attributes: {
                                [W.uT]: "navigation",
                                [W.JD]: `auto.navigation.react.${a}`,
                                [W.i_]: n
                            }
                        })
                    }
                })
            }

            function aO(e) {
                let t = e.displayName || e.name,
                    r = t => {
                        if (t ? .computedMatch ? .isExact) {
                            let e = t.computedMatch.path,
                                r = function() {
                                    let e = (0, I.Bk)(),
                                        t = e && (0, I.zU)(e);
                                    if (!t) return;
                                    let r = (0, I.et)(t).op;
                                    return "navigation" === r || "pageload" === r ? t : void 0
                                }();
                            (0, d.o5)().setTransactionName(e), r && (r.updateName(e), r.setAttribute(W.i_, "route"))
                        }
                        return af.createElement(e, { ...t
                        })
                    };
                return r.displayName = `sentryRoute(${t})`, ab(r, e), r
            }
            let aD = !1,
                aU = new WeakSet,
                a$ = new Set;

            function aj(e, t) {
                return a && o && i && l ? function(r, n) {
                    aK(r);
                    let a = e(r, n),
                        o = n ? .basename,
                        i = a2();
                    return "POP" === a.state.historyAction && i && a0(i, a.state.location, r, void 0, o, Array.from(a$)), a.subscribe(e => {
                        ("PUSH" === e.historyAction || "POP" === e.historyAction) && ("idle" !== e.navigation.state ? requestAnimationFrame(() => {
                            aq({
                                location: e.location,
                                routes: r,
                                navigationType: e.historyAction,
                                version: t,
                                basename: o,
                                allRoutes: Array.from(a$)
                            })
                        }) : aq({
                            location: e.location,
                            routes: r,
                            navigationType: e.historyAction,
                            version: t,
                            basename: o,
                            allRoutes: Array.from(a$)
                        }))
                    }), a
                } : e
            }

            function aB(e, t) {
                return a && o && i && l ? function(r, n) {
                    let a;
                    aK(r);
                    let o = e(r, n),
                        i = n ? .basename,
                        s = a2(),
                        l = n ? .initialEntries,
                        u = n ? .initialIndex,
                        c = l && 1 === l.length,
                        d = void 0 !== u && l && l[u],
                        p = (a = c ? l[0] : d ? l[u] : void 0) ? "string" == typeof a ? {
                            pathname: a
                        } : a : o.state.location;
                    return "POP" === o.state.historyAction && s && a0(s, p, r, void 0, i, Array.from(a$)), o.subscribe(e => {
                        let n = e.location;
                        ("PUSH" === e.historyAction || "POP" === e.historyAction) && aq({
                            location: n,
                            routes: r,
                            navigationType: e.historyAction,
                            version: t,
                            basename: i,
                            allRoutes: Array.from(a$)
                        })
                    }), o
                } : e
            }

            function aH(e, t) {
                let r = (0, n$.dp)({ ...e,
                        instrumentPageLoad: !1,
                        instrumentNavigation: !1
                    }),
                    {
                        useEffect: n,
                        useLocation: u,
                        useNavigationType: c,
                        createRoutesFromChildren: d,
                        matchRoutes: p,
                        stripBasename: f,
                        instrumentPageLoad: h = !0,
                        instrumentNavigation: _ = !0
                    } = e;
                return { ...r,
                    setup(e) {
                        r.setup(e), a = n, o = u, i = c, l = p, s = d, aD = f || !1
                    },
                    afterAllSetup(e) {
                        r.afterAllSetup(e);
                        let n = tV.jf.location ? .pathname;
                        h && n && (0, n$.Sx)(e, {
                            name: n,
                            attributes: {
                                [W.i_]: "url",
                                [W.uT]: "pageload",
                                [W.JD]: `auto.pageload.react.reactrouter_v${t}`
                            }
                        }), _ && aU.add(e)
                    }
                }
            }

            function aW(e, t) {
                if (!a || !o || !i || !l) return e;
                let r = r => {
                    let n = af.useRef(!0),
                        {
                            routes: s,
                            locationArg: l
                        } = r,
                        u = e(s, l),
                        c = o(),
                        d = i(),
                        p = "string" == typeof l || l ? .pathname ? l : c;
                    return a(() => {
                        let e = "string" == typeof p ? {
                            pathname: p
                        } : p;
                        n.current ? (aK(s), a0(a2(), e, s, void 0, void 0, Array.from(a$)), n.current = !1) : aq({
                            location: e,
                            routes: s,
                            navigationType: d,
                            version: t,
                            allRoutes: Array.from(a$)
                        })
                    }, [d, p]), u
                };
                return (e, t) => af.createElement(r, {
                    routes: e,
                    locationArg: t
                })
            }

            function aq(e) {
                let {
                    location: t,
                    routes: r,
                    navigationType: n,
                    version: a,
                    matches: o,
                    basename: i,
                    allRoutes: s
                } = e, u = Array.isArray(o) ? o : l(r, t, i), c = (0, d.KU)();
                if (c && aU.has(c) && ("PUSH" === n || "POP" === n) && u) {
                    let e, n = "url",
                        o = aJ(t, s || r);
                    o && (e = aZ(aX(s || r, t)), n = "route"), o && e || ([e, n] = aQ(r, t, u, i));
                    let l = (0, I.Bk)();
                    l && "navigation" === (0, I.et)(l).op ? (l ? .updateName(e), l ? .setAttribute(W.i_, n)) : (0, n$.Nt)(c, {
                        name: e,
                        attributes: {
                            [W.i_]: n,
                            [W.uT]: "navigation",
                            [W.JD]: `auto.navigation.react.reactrouter_v${a}`
                        }
                    })
                }
            }

            function az(e, t) {
                if (!t || "/" === t || !e.toLowerCase().startsWith(t.toLowerCase())) return e;
                let r = t.endsWith("/") ? t.length - 1 : t.length,
                    n = e.charAt(r);
                return n && "/" !== n ? e : e.slice(r) || "/"
            }

            function aV(e) {
                return e.endsWith("*")
            }

            function aG(e, t) {
                return aV(e) && !!t.route.children ? .length || !1
            }

            function aJ(e, t) {
                let r = l(t, e);
                if (r)
                    for (let e of r) {
                        var n;
                        if (!(n = e.route).children && n.element && n.path ? .endsWith("/*") && e.params["*"]) return !0
                    }
                return !1
            }

            function aK(e) {
                e.forEach(e => {
                    (function e(t, r = new Set) {
                        return r.has(t) || (r.add(t), t.children && !t.index && t.children.forEach(t => {
                            e(t, r).forEach(e => {
                                r.add(e)
                            })
                        })), r
                    })(e).forEach(e => {
                        a$.add(e)
                    })
                })
            }

            function aY(e) {
                return "/" === e[e.length - 1] ? e.slice(0, -1) : e
            }

            function aZ(e) {
                return "/" === e[0] ? e : `/${e}`
            }

            function aX(e, t) {
                let r = l(e, t);
                if (!r || 0 === r.length) return "";
                for (let a of r)
                    if (a.route.path && "*" !== a.route.path) {
                        var n;
                        let r = "*" === (n = a.route.path || "")[n.length - 1] ? n.slice(0, -1) : n,
                            o = az(t.pathname, aZ(a.pathnameBase));
                        if (t.pathname === o) return aY(o);
                        return aY(aY(r || "") + aZ(aX(e.filter(e => e !== a.route), {
                            pathname: o
                        })))
                    }
                return ""
            }

            function aQ(e, t, r, n = "") {
                if (!e || 0 === e.length) return [aD ? az(t.pathname, n) : t.pathname, "url"];
                let a = "";
                if (r)
                    for (let e of r) {
                        let r = e.route;
                        if (r) {
                            if (r.index) {
                                var o = a,
                                    i = e.pathname;
                                let t = o || aD ? az(i, n) : i;
                                return ["/" === t[t.length - 1] || "/*" === t.slice(-2) ? t.slice(0, -1) : t, "route"]
                            }
                            let s = r.path;
                            if (s && !aG(s, e)) {
                                let r = "/" === s[0] || "/" === a[a.length - 1] ? s : `/${s}`;
                                if (a = aY(a) + aZ(r), aY(t.pathname) === aY(n + e.pathname)) {
                                    if (a6(a) !== a6(e.pathname) && !aV(a)) return [(aD ? "" : n) + r, "route"];
                                    return aG(a, e) && (a = a.slice(0, -1)), [(aD ? "" : n) + a, "route"]
                                }
                            }
                        }
                    }
                return [aD ? az(t.pathname, n) : t.pathname || "/", "url"]
            }

            function a0(e, t, r, n, a, o) {
                let i = Array.isArray(n) ? n : l(o || r, t, a);
                if (i) {
                    let n, s = "url",
                        l = aJ(t, o || r);
                    l && (n = aZ(aX(o || r, t)), s = "route"), l && n || ([n, s] = aQ(r, t, i, a)), (0, d.o5)().setTransactionName(n || "/"), e && (e.updateName(n), e.setAttribute(W.i_, s))
                }
            }

            function a1(e, t) {
                if (!a || !o || !i || !s || !l) return e;
                let r = r => {
                    let n = af.useRef(!0),
                        l = o(),
                        u = i();
                    return a(() => {
                        let e = s(r.children);
                        n.current ? (aK(e), a0(a2(), l, e, void 0, void 0, Array.from(a$)), n.current = !1) : aq({
                            location: l,
                            routes: e,
                            navigationType: u,
                            version: t,
                            allRoutes: Array.from(a$)
                        })
                    }, [l, u]), af.createElement(e, { ...r
                    })
                };
                return ab(r, e), r
            }

            function a2() {
                let e = (0, I.Bk)(),
                    t = e ? (0, I.zU)(e) : void 0;
                if (!t) return;
                let r = (0, I.et)(t).op;
                return "navigation" === r || "pageload" === r ? t : void 0
            }

            function a6(e) {
                return e.split(/\\?\//).filter(e => e.length > 0 && "," !== e).length
            }

            function a4(e) {
                return aH(e, "6")
            }

            function a5(e) {
                return aW(e, "6")
            }

            function a3(e) {
                return aj(e, "6")
            }

            function a7(e) {
                return aB(e, "6")
            }

            function a8(e) {
                return a1(e, "6")
            }

            function a9(e) {
                return aH(e, "7")
            }

            function oe(e) {
                return a1(e, "7")
            }

            function ot(e) {
                return aj(e, "7")
            }

            function or(e) {
                return aB(e, "7")
            }

            function on(e) {
                return aW(e, "7")
            }
        }
    }
]);