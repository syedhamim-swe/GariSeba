try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        r = (new e.Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "a7d5133a-29eb-40b6-96be-200fbe26968c", e._sentryDebugIdIdentifier = "sentry-dbid-a7d5133a-29eb-40b6-96be-200fbe26968c")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3568], {
        40923: (e, r, t) => {
            t.d(r, {
                cQ: () => n,
                cZ: () => a,
                oi: () => l
            });
            let i = "visit_source";

            function o() {
                try {
                    let e = localStorage.getItem(i);
                    return e ? JSON.parse(e) : {}
                } catch (e) {
                    return console.error("Failed to parse visit source data:", e), {}
                }
            }

            function n() {
                let e = function(e) {
                    try {
                        let r = new URL(e).searchParams,
                            t = r.get("invite_code");
                        if (t) return {
                            type: "invite_code",
                            value: t,
                            url: e,
                            timestamp: Date.now()
                        };
                        let i = r.get("utm_source");
                        if (i) return {
                            type: "utm_source",
                            value: i,
                            url: e,
                            timestamp: Date.now()
                        };
                        return null
                    } catch (e) {
                        return console.error("Failed to extract source from URL:", e), null
                    }
                }(window.location.href);
                if (!e) return;
                let r = { ...o()
                };
                r.first_source || (r.first_source = e), r.latest_source = e, "invite_code" === e.type ? r.latest_invite_code = e : "utm_source" === e.type && (r.latest_utm_source = e);
                try {
                    localStorage.setItem(i, JSON.stringify(r))
                } catch (e) {
                    console.error("Failed to save visit source data:", e)
                }
            }

            function a() {
                var e, r;
                let t = o(),
                    i = Date.now();
                return (null == (e = t.latest_source) ? void 0 : e.type) === "utm_source" ? null : (null == (r = t.latest_source) ? void 0 : r.type) === "invite_code" && t.latest_source.timestamp && i - t.latest_source.timestamp <= 2592e6 ? t.latest_source.value : null
            }

            function l() {
                var e, r, t, i, n, a;
                let l = o();
                return {
                    first_impression_source_type: (null == (e = l.first_source) ? void 0 : e.type) || "",
                    first_impression_source_value: (null == (r = l.first_source) ? void 0 : r.value) || "",
                    first_impression_source_url: (null == (t = l.first_source) ? void 0 : t.url) || "",
                    last_impression_source_type: (null == (i = l.latest_source) ? void 0 : i.type) || "",
                    last_impression_source_value: (null == (n = l.latest_source) ? void 0 : n.value) || "",
                    last_impression_source_url: (null == (a = l.latest_source) ? void 0 : a.url) || ""
                }
            }
        },
        53568: (e, r, t) => {
            let i, o;
            t.d(r, {
                AuthProvider: () => E,
                A: () => L
            });
            var n = t(95155),
                a = t(62105),
                l = t(16203),
                s = t(35695),
                u = t(12115),
                c = t(34477);
            let d = (0, c.createServerReference)("60a8a1d7b76b028e9bf52155eb1abb4a747ce2827b", c.callServer, void 0, c.findSourceMapURL, "login"),
                f = (0, c.createServerReference)("40a09a89dce0e1b23be9cbf28910d9ee7afc6370e5", c.callServer, void 0, c.findSourceMapURL, "fetchInviteInfo"),
                g = (0, c.createServerReference)("403d795df721b4ab0b4147576234222d98e414aecc", c.callServer, void 0, c.findSourceMapURL, "linkProjects");
            var y = t(16618),
                h = t(56389),
                v = t(9962),
                _ = t(23915);
            let w = (0, c.createServerReference)("00b825ebf0c0f04721726aadfa9eebd9ce3f069994", c.callServer, void 0, c.findSourceMapURL, "logout");
            var p = t(40249);
            let m = JSON.parse('{"apiKey":"AIzaSyB9Jdqpb4h5RgHmRRJSfqTOfBT-DPV34jA","authDomain":"gglogin.youware.com","projectId":"yourware-arco","storageBucket":"yourware-arco.firebasestorage.app","messagingSenderId":"541265544701","appId":"1:541265544701:web:d52622395895582c9c4594"}');

            function b() {
                if (!o) {
                    let {
                        auth: e
                    } = m ? (i = (0, _.Dk)().length ? (0, _.Dk)()[0] : (0, _.Wp)(m), o = (0, l.xI)(i), (0, l.oM)(o, l.gz), p.G.setup(), {
                        app: i,
                        auth: o
                    }) : (console.error("firebaseConfig is undefined"), {
                        app: void 0,
                        auth: void 0
                    });
                    o = e
                }
                return o
            }
            async function S() {
                let e = b();
                if (!e) throw console.error("auth is undefined"), Error("auth is undefined");
                try {
                    return await e.signOut(), console.log("sign out successfully"), await w()
                } catch (e) {
                    throw console.error("sign out error:", e), e
                }
            }
            var A = t(62128),
                I = t(40923);
            let k = (0, u.createContext)({
                    googleLoginLoading: !1,
                    loginWithGoogle: async () => {},
                    loginWithGoogleOneTap: async e => {},
                    sendLinkToEmail: async (e, r) => {},
                    signInWithEmailLink: async (e, r) => {},
                    isSignInWithEmailLink: e => !1,
                    logout: async () => {},
                    inviteCode: null,
                    inviterInfo: null,
                    inviteLoading: !1,
                    inviteError: null,
                    hasInvited: !1,
                    asyncCheckShouldShowInvite: async () => !1,
                    trackTriggerLogin: () => {},
                    trackLoginResult: () => {}
                }),
                E = e => {
                    let {
                        children: r
                    } = e, {
                        user: t,
                        setUser: i
                    } = (0, y.J)(), [o, c] = (0, u.useState)(!1), [_, w] = (0, u.useState)(null), [p, m] = (0, u.useState)(null), [E, L] = (0, u.useState)(!1), [R, O] = (0, u.useState)(null), [P, j] = (0, u.useState)(!1), D = b(), F = new l.HF, {
                        identify: T,
                        track: C
                    } = (0, h.s)(), N = (0, s.useSearchParams)();
                    (0, u.useEffect)(() => {
                        var e;
                        let r = null == (e = (0, v.jL)()) ? void 0 : e.yw_id;
                        !r && (null == t ? void 0 : t.ywid) && (0, v.uO)(t.ywid), T(t), r && window.gtag && window.gtag("config", "G-6Z2G4L6M8E", {
                            user_id: r
                        }), a.gV({
                            id: r,
                            ...t && {
                                username: t.display_name
                            }
                        })
                    }, [t]), (0, u.useEffect)(() => {
                        t && _ && j(!0)
                    }, [t]), (0, u.useEffect)(() => {
                        let e = N.get("invite_code") || (0, I.cZ)();
                        e && (w(e), L(!0), O(null), f(e).then(e => {
                            0 === e.code && e.data ? (m(e.data), A.Ay.info("Fetched inviter info", {
                                inviter_info: e.data
                            })) : (O("Failed to fetch inviter information"), A.Ay.error("Failed to fetch inviter info", Error("API error: ".concat(e.code))))
                        }).catch(e => {
                            O("Error fetching inviter information"), A.Ay.error("Error fetching inviter info", e)
                        }).finally(() => {
                            L(!1)
                        }))
                    }, [N]);
                    let G = async () => {
                            try {
                                if (c(!0), !D) throw A.Ay.error("auth is undefined"), Error("auth is undefined");
                                F.setCustomParameters({
                                    prompt: "select_account"
                                }), F.addScope("https://www.googleapis.com/auth/userinfo.profile");
                                let e = await (0, l.df)(D, F);
                                if (await D.signOut(), !e) throw Error("Failed to login");
                                await Z(e);
                                let r = _ || N.get("invite_code") || (0, I.cZ)() || "",
                                    t = await x(e, r);
                                i(t), B(t.uid), A.Ay.info("sign in with google success")
                            } catch (e) {
                                throw A.Ay.error("sign in with google error", e), e
                            } finally {
                                c(!1)
                            }
                        },
                        U = async (e, r) => {
                            if (!D) throw A.Ay.error("auth is undefined"), Error("auth is undefined");
                            try {
                                let t = await (0, l.hK)(D, e, r);
                                if (await D.signOut(), !t) throw Error("Failed to sign in with email link");
                                let o = _ || N.get("invite_code") || (0, I.cZ)() || "",
                                    n = await x(t, o);
                                i(n), B(n.uid), A.Ay.info("sign in with email link success", {
                                    loginUser: n
                                })
                            } catch (e) {
                                throw A.Ay.error("sign in with email link error", e), e
                            } finally {
                                window.localStorage.removeItem("emailForSignIn")
                            }
                        },
                        J = async (e, r) => {
                            try {
                                if (A.Ay.info("login with email"), !D) throw A.Ay.error("auth is undefined"), Error("auth is undefined");
                                await (0, l.MN)(D, e, {
                                    url: r,
                                    handleCodeInApp: !0
                                }), A.Ay.info("send sign in link to email success")
                            } catch (e) {
                                throw A.Ay.error("send sign in link to email error:", e), e
                            }
                        },
                        M = async e => {
                            try {
                                if (!D) throw A.Ay.error("auth is undefined"), Error("auth is undefined");
                                let r = l.HF.credential(e),
                                    t = await (0, l.eN)(D, r);
                                if (await D.signOut(), !t) throw Error("Failed to login with Google One Tap");
                                await Z(t);
                                let o = _ || N.get("invite_code") || (0, I.cZ)() || "",
                                    n = await x(t, o);
                                i(n), B(n.uid), A.Ay.info("sign in with Google One Tap success")
                            } catch (e) {
                                throw A.Ay.error("sign in with Google One Tap error", e), e
                            }
                        },
                        W = async () => {
                            try {
                                console.log("sign out"), await S(), i(null)
                            } catch (e) {
                                throw console.error("sign out error:", e), e
                            }
                        },
                        Z = async e => {
                            let r = e.user;
                            A.Ay.info("sync google user profile", {
                                user: r
                            });
                            let t = r.providerData.find(e => "google.com" === e.providerId);
                            if (A.Ay.info("sync google providerInfo", {
                                    providerInfo: t
                                }), t) {
                                let {
                                    displayName: e,
                                    photoURL: i
                                } = t;
                                if (!r.displayName && e && await (0, l.r7)(r, {
                                        displayName: e
                                    }), !r.photoURL && i) {
                                    let e = i.replace(/=s\d+-c$/, "=s400-c");
                                    await (0, l.r7)(r, {
                                        photoURL: e
                                    })
                                }
                            }
                        },
                        x = async (e, r) => {
                            var t;
                            let i = e.user;
                            A.Ay.info("sync user to server", {
                                user: i
                            });
                            let o = await i.getIdToken(),
                                n = await d(o, r);
                            if (200 !== n.code || !(null == (t = n.data) ? void 0 : t.userInfo)) throw Error("sync user to server failed");
                            return n.data.userInfo
                        },
                        B = async e => {
                            if (A.Ay.info("handle anonymous projects"), e) {
                                let r = JSON.parse(localStorage.getItem("Anonymous_Projects") || "[]");
                                if (r.length > 0) try {
                                    g({
                                        uid: e,
                                        project_ids: r
                                    }), localStorage.removeItem("Anonymous_Projects"), A.Ay.info("Projects linked successfully in background")
                                } catch (e) {
                                    A.Ay.error("Background project linking failed:", e)
                                }
                            }
                        },
                        H = async () => new Promise(e => {
                            let r = null !== N.get("invite_code") && !t && !P;
                            e(null != r && r)
                        });
                    return (0, n.jsx)(k.Provider, {
                        value: {
                            googleLoginLoading: o,
                            loginWithGoogle: G,
                            loginWithGoogleOneTap: M,
                            sendLinkToEmail: J,
                            isSignInWithEmailLink: e => D ? (0, l.Pj)(D, e) : (A.Ay.error("auth is undefined"), !1),
                            signInWithEmailLink: U,
                            logout: W,
                            inviteCode: _,
                            inviterInfo: p,
                            inviteLoading: E,
                            inviteError: R,
                            hasInvited: P,
                            asyncCheckShouldShowInvite: H,
                            trackTriggerLogin: (e, r) => {
                                var t;
                                C("login_continue_button_click", {
                                    login_platform: e,
                                    enter_from: r,
                                    inviter_user_id: (null == p || null == (t = p.user) ? void 0 : t.uid) || "",
                                    ...(0, I.oi)()
                                })
                            },
                            trackLoginResult: (e, r, t, i) => {
                                var o;
                                C("login_status", {
                                    login_platform: e,
                                    result: r,
                                    fail_reason: i,
                                    enter_from: t,
                                    inviter_user_id: (null == p || null == (o = p.user) ? void 0 : o.uid) || "",
                                    ...(0, I.oi)()
                                })
                            }
                        },
                        children: r
                    })
                },
                L = () => (0, u.useContext)(k)
        }
    }
]);