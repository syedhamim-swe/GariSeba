try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        n = (new e.Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "16b7a761-28c8-4bd8-ab6d-1222f0a662e7", e._sentryDebugIdIdentifier = "sentry-dbid-16b7a761-28c8-4bd8-ab6d-1222f0a662e7")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7358], {
        9849: (e, n, t) => {
            Promise.resolve().then(t.t.bind(t, 90894, 23)), Promise.resolve().then(t.t.bind(t, 94970, 23)), Promise.resolve().then(t.t.bind(t, 46975, 23)), Promise.resolve().then(t.t.bind(t, 87555, 23)), Promise.resolve().then(t.t.bind(t, 74911, 23)), Promise.resolve().then(t.t.bind(t, 59665, 23)), Promise.resolve().then(t.t.bind(t, 31295, 23)), Promise.resolve().then(t.bind(t, 38175))
        },
        23555: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                onRouterTransitionStart: () => a
            });
            var s = t(54906),
                r = t(9334),
                o = t(64162);
            let d = () => "https://www.youware.com".includes("staging") && !0,
                i = () => !d();
            s.Ts({
                dsn: "https://c9dd75b7518e5c60e99d77b107e89ddc@o4509474635644928.ingest.us.sentry.io/4509474637021191",
                integrations: [r.w()],
                enabled: !0,
                tracesSampleRate: d() ? 1 : .01 * !!i(),
                replaysSessionSampleRate: 0,
                replaysOnErrorSampleRate: 0,
                debug: !1,
                _experiments: {
                    enableLogs: !0
                },
                environment: (i() ? "production" : d() ? "staging" : "development") || "unknown"
            });
            let a = o.Nc
        }
    },
    e => {
        var n = n => e(e.s = n);
        e.O(0, [4850, 8441, 5760], () => (n(23555), n(35415), n(9849))), _N_E = e.O()
    }
]);