try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        r = (new e.Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "d542aa9a-0535-41f4-9cc8-38121dec3571", e._sentryDebugIdIdentifier = "sentry-dbid-d542aa9a-0535-41f4-9cc8-38121dec3571")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4277], {
        39688: (e, r, o) => {
            o.d(r, {
                QP: () => Q
            });
            let t = (e, r) => {
                    if (0 === e.length) return r.classGroupId;
                    let o = e[0],
                        n = r.nextPart.get(o),
                        l = n ? t(e.slice(1), n) : void 0;
                    if (l) return l;
                    if (0 === r.validators.length) return;
                    let s = e.join("-");
                    return r.validators.find(({
                        validator: e
                    }) => e(s)) ? .classGroupId
                },
                n = /^\[(.+)\]$/,
                l = (e, r, o, t) => {
                    e.forEach(e => {
                        if ("string" == typeof e) {
                            ("" === e ? r : s(r, e)).classGroupId = o;
                            return
                        }
                        if ("function" == typeof e) return a(e) ? void l(e(t), r, o, t) : void r.validators.push({
                            validator: e,
                            classGroupId: o
                        });
                        Object.entries(e).forEach(([e, n]) => {
                            l(n, s(r, e), o, t)
                        })
                    })
                },
                s = (e, r) => {
                    let o = e;
                    return r.split("-").forEach(e => {
                        o.nextPart.has(e) || o.nextPart.set(e, {
                            nextPart: new Map,
                            validators: []
                        }), o = o.nextPart.get(e)
                    }), o
                },
                a = e => e.isThemeGetter,
                i = (e, r) => r ? e.map(([e, o]) => [e, o.map(e => "string" == typeof e ? r + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, o]) => [r + e, o])) : e)]) : e,
                d = e => {
                    if (e.length <= 1) return e;
                    let r = [],
                        o = [];
                    return e.forEach(e => {
                        "[" === e[0] ? (r.push(...o.sort(), e), o = []) : o.push(e)
                    }), r.push(...o.sort()), r
                },
                c = /\s+/;

            function p() {
                let e, r, o = 0,
                    t = "";
                for (; o < arguments.length;)(e = arguments[o++]) && (r = u(e)) && (t && (t += " "), t += r);
                return t
            }
            let u = e => {
                    let r;
                    if ("string" == typeof e) return e;
                    let o = "";
                    for (let t = 0; t < e.length; t++) e[t] && (r = u(e[t])) && (o && (o += " "), o += r);
                    return o
                },
                b = e => {
                    let r = r => r[e] || [];
                    return r.isThemeGetter = !0, r
                },
                f = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                g = /^\d+\/\d+$/,
                m = new Set(["px", "full", "screen"]),
                h = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                y = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                x = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                w = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                v = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
                k = e => j(e) || m.has(e) || g.test(e),
                z = e => D(e, "length", R),
                j = e => !!e && !Number.isNaN(Number(e)),
                C = e => D(e, "number", j),
                S = e => !!e && Number.isInteger(Number(e)),
                G = e => e.endsWith("%") && j(e.slice(0, -1)),
                I = e => f.test(e),
                P = e => h.test(e),
                _ = new Set(["length", "size", "percentage"]),
                E = e => D(e, _, W),
                N = e => D(e, "position", W),
                $ = new Set(["image", "url"]),
                M = e => D(e, $, q),
                O = e => D(e, "", A),
                T = () => !0,
                D = (e, r, o) => {
                    let t = f.exec(e);
                    return !!t && (t[1] ? "string" == typeof r ? t[1] === r : r.has(t[1]) : o(t[2]))
                },
                R = e => y.test(e) && !x.test(e),
                W = () => !1,
                A = e => w.test(e),
                q = e => v.test(e);
            Symbol.toStringTag;
            let Q = function(e, ...r) {
                let o, s, a, u = function(d) {
                    let c;
                    return s = (o = {
                        cache: (e => {
                            if (e < 1) return {
                                get: () => void 0,
                                set: () => {}
                            };
                            let r = 0,
                                o = new Map,
                                t = new Map,
                                n = (n, l) => {
                                    o.set(n, l), ++r > e && (r = 0, t = o, o = new Map)
                                };
                            return {
                                get(e) {
                                    let r = o.get(e);
                                    return void 0 !== r ? r : void 0 !== (r = t.get(e)) ? (n(e, r), r) : void 0
                                },
                                set(e, r) {
                                    o.has(e) ? o.set(e, r) : n(e, r)
                                }
                            }
                        })((c = r.reduce((e, r) => r(e), e())).cacheSize),
                        parseClassName: (e => {
                            let {
                                separator: r,
                                experimentalParseClassName: o
                            } = e, t = 1 === r.length, n = r[0], l = r.length, s = e => {
                                let o, s = [],
                                    a = 0,
                                    i = 0;
                                for (let d = 0; d < e.length; d++) {
                                    let c = e[d];
                                    if (0 === a) {
                                        if (c === n && (t || e.slice(d, d + l) === r)) {
                                            s.push(e.slice(i, d)), i = d + l;
                                            continue
                                        }
                                        if ("/" === c) {
                                            o = d;
                                            continue
                                        }
                                    }
                                    "[" === c ? a++ : "]" === c && a--
                                }
                                let d = 0 === s.length ? e : e.substring(i),
                                    c = d.startsWith("!"),
                                    p = c ? d.substring(1) : d;
                                return {
                                    modifiers: s,
                                    hasImportantModifier: c,
                                    baseClassName: p,
                                    maybePostfixModifierPosition: o && o > i ? o - i : void 0
                                }
                            };
                            return o ? e => o({
                                className: e,
                                parseClassName: s
                            }) : s
                        })(c),
                        ...(e => {
                            let r = (e => {
                                    let {
                                        theme: r,
                                        prefix: o
                                    } = e, t = {
                                        nextPart: new Map,
                                        validators: []
                                    };
                                    return i(Object.entries(e.classGroups), o).forEach(([e, o]) => {
                                        l(o, t, e, r)
                                    }), t
                                })(e),
                                {
                                    conflictingClassGroups: o,
                                    conflictingClassGroupModifiers: s
                                } = e;
                            return {
                                getClassGroupId: e => {
                                    let o = e.split("-");
                                    return "" === o[0] && 1 !== o.length && o.shift(), t(o, r) || (e => {
                                        if (n.test(e)) {
                                            let r = n.exec(e)[1],
                                                o = r ? .substring(0, r.indexOf(":"));
                                            if (o) return "arbitrary.." + o
                                        }
                                    })(e)
                                },
                                getConflictingClassGroupIds: (e, r) => {
                                    let t = o[e] || [];
                                    return r && s[e] ? [...t, ...s[e]] : t
                                }
                            }
                        })(c)
                    }).cache.get, a = o.cache.set, u = b, b(d)
                };

                function b(e) {
                    let r = s(e);
                    if (r) return r;
                    let t = ((e, r) => {
                        let {
                            parseClassName: o,
                            getClassGroupId: t,
                            getConflictingClassGroupIds: n
                        } = r, l = [], s = e.trim().split(c), a = "";
                        for (let e = s.length - 1; e >= 0; e -= 1) {
                            let r = s[e],
                                {
                                    modifiers: i,
                                    hasImportantModifier: c,
                                    baseClassName: p,
                                    maybePostfixModifierPosition: u
                                } = o(r),
                                b = !!u,
                                f = t(b ? p.substring(0, u) : p);
                            if (!f) {
                                if (!b || !(f = t(p))) {
                                    a = r + (a.length > 0 ? " " + a : a);
                                    continue
                                }
                                b = !1
                            }
                            let g = d(i).join(":"),
                                m = c ? g + "!" : g,
                                h = m + f;
                            if (l.includes(h)) continue;
                            l.push(h);
                            let y = n(f, b);
                            for (let e = 0; e < y.length; ++e) {
                                let r = y[e];
                                l.push(m + r)
                            }
                            a = r + (a.length > 0 ? " " + a : a)
                        }
                        return a
                    })(e, o);
                    return a(e, t), t
                }
                return function() {
                    return u(p.apply(null, arguments))
                }
            }(() => {
                let e = b("colors"),
                    r = b("spacing"),
                    o = b("blur"),
                    t = b("brightness"),
                    n = b("borderColor"),
                    l = b("borderRadius"),
                    s = b("borderSpacing"),
                    a = b("borderWidth"),
                    i = b("contrast"),
                    d = b("grayscale"),
                    c = b("hueRotate"),
                    p = b("invert"),
                    u = b("gap"),
                    f = b("gradientColorStops"),
                    g = b("gradientColorStopPositions"),
                    m = b("inset"),
                    h = b("margin"),
                    y = b("opacity"),
                    x = b("padding"),
                    w = b("saturate"),
                    v = b("scale"),
                    _ = b("sepia"),
                    $ = b("skew"),
                    D = b("space"),
                    R = b("translate"),
                    W = () => ["auto", "contain", "none"],
                    A = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    q = () => ["auto", I, r],
                    Q = () => [I, r],
                    B = () => ["", k, z],
                    F = () => ["auto", j, I],
                    H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    J = () => ["solid", "dashed", "dotted", "double", "none"],
                    K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    L = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    U = () => ["", "0", I],
                    V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    X = () => [j, I];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [T],
                        spacing: [k, z],
                        blur: ["none", "", P, I],
                        brightness: X(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", P, I],
                        borderSpacing: Q(),
                        borderWidth: B(),
                        contrast: X(),
                        grayscale: U(),
                        hueRotate: X(),
                        invert: U(),
                        gap: Q(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [G, z],
                        inset: q(),
                        margin: q(),
                        opacity: X(),
                        padding: Q(),
                        saturate: X(),
                        scale: X(),
                        sepia: U(),
                        skew: X(),
                        space: Q(),
                        translate: Q()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", I]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [P]
                        }],
                        "break-after": [{
                            "break-after": V()
                        }],
                        "break-before": [{
                            "break-before": V()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none", "start", "end"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none", "start", "end"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...H(), I]
                        }],
                        overflow: [{
                            overflow: A()
                        }],
                        "overflow-x": [{
                            "overflow-x": A()
                        }],
                        "overflow-y": [{
                            "overflow-y": A()
                        }],
                        overscroll: [{
                            overscroll: W()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": W()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": W()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [m]
                        }],
                        "inset-x": [{
                            "inset-x": [m]
                        }],
                        "inset-y": [{
                            "inset-y": [m]
                        }],
                        start: [{
                            start: [m]
                        }],
                        end: [{
                            end: [m]
                        }],
                        top: [{
                            top: [m]
                        }],
                        right: [{
                            right: [m]
                        }],
                        bottom: [{
                            bottom: [m]
                        }],
                        left: [{
                            left: [m]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", S, I]
                        }],
                        basis: [{
                            basis: q()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", I]
                        }],
                        grow: [{
                            grow: U()
                        }],
                        shrink: [{
                            shrink: U()
                        }],
                        order: [{
                            order: ["first", "last", "none", S, I]
                        }],
                        "grid-cols": [{
                            "grid-cols": [T]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", S, I]
                            }, I]
                        }],
                        "col-start": [{
                            "col-start": F()
                        }],
                        "col-end": [{
                            "col-end": F()
                        }],
                        "grid-rows": [{
                            "grid-rows": [T]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [S, I]
                            }, I]
                        }],
                        "row-start": [{
                            "row-start": F()
                        }],
                        "row-end": [{
                            "row-end": F()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", I]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", I]
                        }],
                        gap: [{
                            gap: [u]
                        }],
                        "gap-x": [{
                            "gap-x": [u]
                        }],
                        "gap-y": [{
                            "gap-y": [u]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...L()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...L(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...L(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [x]
                        }],
                        px: [{
                            px: [x]
                        }],
                        py: [{
                            py: [x]
                        }],
                        ps: [{
                            ps: [x]
                        }],
                        pe: [{
                            pe: [x]
                        }],
                        pt: [{
                            pt: [x]
                        }],
                        pr: [{
                            pr: [x]
                        }],
                        pb: [{
                            pb: [x]
                        }],
                        pl: [{
                            pl: [x]
                        }],
                        m: [{
                            m: [h]
                        }],
                        mx: [{
                            mx: [h]
                        }],
                        my: [{
                            my: [h]
                        }],
                        ms: [{
                            ms: [h]
                        }],
                        me: [{
                            me: [h]
                        }],
                        mt: [{
                            mt: [h]
                        }],
                        mr: [{
                            mr: [h]
                        }],
                        mb: [{
                            mb: [h]
                        }],
                        ml: [{
                            ml: [h]
                        }],
                        "space-x": [{
                            "space-x": [D]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [D]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", I, r]
                        }],
                        "min-w": [{
                            "min-w": [I, r, "min", "max", "fit"]
                        }],
                        "max-w": [{
                            "max-w": [I, r, "none", "full", "min", "max", "fit", "prose", {
                                screen: [P]
                            }, P]
                        }],
                        h: [{
                            h: [I, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "min-h": [{
                            "min-h": [I, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        "max-h": [{
                            "max-h": [I, r, "min", "max", "fit", "svh", "lvh", "dvh"]
                        }],
                        size: [{
                            size: [I, r, "auto", "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", P, z]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", C]
                        }],
                        "font-family": [{
                            font: [T]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", I]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", j, C]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", k, I]
                        }],
                        "list-image": [{
                            "list-image": ["none", I]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", I]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [y]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [y]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...J(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", k, z]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", k, I]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{
                            text: ["wrap", "nowrap", "balance", "pretty"]
                        }],
                        indent: [{
                            indent: Q()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", I]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [y]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...H(), N]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", E]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, M]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [g]
                        }],
                        "gradient-via-pos": [{
                            via: [g]
                        }],
                        "gradient-to-pos": [{
                            to: [g]
                        }],
                        "gradient-from": [{
                            from: [f]
                        }],
                        "gradient-via": [{
                            via: [f]
                        }],
                        "gradient-to": [{
                            to: [f]
                        }],
                        rounded: [{
                            rounded: [l]
                        }],
                        "rounded-s": [{
                            "rounded-s": [l]
                        }],
                        "rounded-e": [{
                            "rounded-e": [l]
                        }],
                        "rounded-t": [{
                            "rounded-t": [l]
                        }],
                        "rounded-r": [{
                            "rounded-r": [l]
                        }],
                        "rounded-b": [{
                            "rounded-b": [l]
                        }],
                        "rounded-l": [{
                            "rounded-l": [l]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [l]
                        }],
                        "rounded-se": [{
                            "rounded-se": [l]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [l]
                        }],
                        "rounded-es": [{
                            "rounded-es": [l]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [l]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [l]
                        }],
                        "rounded-br": [{
                            "rounded-br": [l]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [l]
                        }],
                        "border-w": [{
                            border: [a]
                        }],
                        "border-w-x": [{
                            "border-x": [a]
                        }],
                        "border-w-y": [{
                            "border-y": [a]
                        }],
                        "border-w-s": [{
                            "border-s": [a]
                        }],
                        "border-w-e": [{
                            "border-e": [a]
                        }],
                        "border-w-t": [{
                            "border-t": [a]
                        }],
                        "border-w-r": [{
                            "border-r": [a]
                        }],
                        "border-w-b": [{
                            "border-b": [a]
                        }],
                        "border-w-l": [{
                            "border-l": [a]
                        }],
                        "border-opacity": [{
                            "border-opacity": [y]
                        }],
                        "border-style": [{
                            border: [...J(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [a]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [a]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [y]
                        }],
                        "divide-style": [{
                            divide: J()
                        }],
                        "border-color": [{
                            border: [n]
                        }],
                        "border-color-x": [{
                            "border-x": [n]
                        }],
                        "border-color-y": [{
                            "border-y": [n]
                        }],
                        "border-color-s": [{
                            "border-s": [n]
                        }],
                        "border-color-e": [{
                            "border-e": [n]
                        }],
                        "border-color-t": [{
                            "border-t": [n]
                        }],
                        "border-color-r": [{
                            "border-r": [n]
                        }],
                        "border-color-b": [{
                            "border-b": [n]
                        }],
                        "border-color-l": [{
                            "border-l": [n]
                        }],
                        "divide-color": [{
                            divide: [n]
                        }],
                        "outline-style": [{
                            outline: ["", ...J()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [k, I]
                        }],
                        "outline-w": [{
                            outline: [k, z]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: B()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [y]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [k, z]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", P, O]
                        }],
                        "shadow-color": [{
                            shadow: [T]
                        }],
                        opacity: [{
                            opacity: [y]
                        }],
                        "mix-blend": [{
                            "mix-blend": [...K(), "plus-lighter", "plus-darker"]
                        }],
                        "bg-blend": [{
                            "bg-blend": K()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [o]
                        }],
                        brightness: [{
                            brightness: [t]
                        }],
                        contrast: [{
                            contrast: [i]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", P, I]
                        }],
                        grayscale: [{
                            grayscale: [d]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [c]
                        }],
                        invert: [{
                            invert: [p]
                        }],
                        saturate: [{
                            saturate: [w]
                        }],
                        sepia: [{
                            sepia: [_]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [o]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [t]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [i]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [d]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [c]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [p]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [y]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [w]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [_]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [s]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [s]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [s]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", I]
                        }],
                        duration: [{
                            duration: X()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", I]
                        }],
                        delay: [{
                            delay: X()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", I]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [v]
                        }],
                        "scale-x": [{
                            "scale-x": [v]
                        }],
                        "scale-y": [{
                            "scale-y": [v]
                        }],
                        rotate: [{
                            rotate: [S, I]
                        }],
                        "translate-x": [{
                            "translate-x": [R]
                        }],
                        "translate-y": [{
                            "translate-y": [R]
                        }],
                        "skew-x": [{
                            "skew-x": [$]
                        }],
                        "skew-y": [{
                            "skew-y": [$]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", I]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: [{
                            appearance: ["none", "auto"]
                        }],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": Q()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": Q()
                        }],
                        "scroll-my": [{
                            "scroll-my": Q()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": Q()
                        }],
                        "scroll-me": [{
                            "scroll-me": Q()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": Q()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": Q()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": Q()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": Q()
                        }],
                        "scroll-p": [{
                            "scroll-p": Q()
                        }],
                        "scroll-px": [{
                            "scroll-px": Q()
                        }],
                        "scroll-py": [{
                            "scroll-py": Q()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": Q()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": Q()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": Q()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": Q()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": Q()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": Q()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", I]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [k, z, C]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{
                            "forced-color-adjust": ["auto", "none"]
                        }]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            })
        },
        52596: (e, r, o) => {
            function t() {
                for (var e, r, o = 0, t = "", n = arguments.length; o < n; o++)(e = arguments[o]) && (r = function e(r) {
                    var o, t, n = "";
                    if ("string" == typeof r || "number" == typeof r) n += r;
                    else if ("object" == typeof r)
                        if (Array.isArray(r)) {
                            var l = r.length;
                            for (o = 0; o < l; o++) r[o] && (t = e(r[o])) && (n && (n += " "), n += t)
                        } else
                            for (t in r) r[t] && (n && (n += " "), n += t);
                    return n
                }(e)) && (t && (t += " "), t += r);
                return t
            }
            o.d(r, {
                $: () => t,
                A: () => n
            });
            let n = t
        }
    }
]);