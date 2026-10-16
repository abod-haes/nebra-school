var dr = (e) => {
  throw TypeError(e);
};
var fr = (e, t, n) => t.has(e) || dr("Cannot " + n);
var ce = (e, t, n) => (fr(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gr = (e, t, n) => t.has(e) ? dr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), An = (e, t, n, o) => (fr(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
import { jsx as m, jsxs as H, Fragment as Ot } from "react/jsx-runtime";
import * as u from "react";
import { useEffect as _a, forwardRef as Y, useState as qr, createElement as eo, useLayoutEffect as ba } from "react";
import * as At from "react-dom";
function Yr(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = Yr(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function Xr() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = Yr(e)) && (o && (o += " "), o += t);
  return o;
}
function D(...e) {
  return Xr(e);
}
function $m({
  size: e = 40,
  tone: t = "auto",
  className: n,
  style: o,
  ...r
}) {
  const i = {
    "--nb-brand-size": typeof e == "number" ? `${e}px` : e,
    ...o
  };
  return /* @__PURE__ */ m(
    "span",
    {
      className: D("nb-brand-mark", t !== "auto" && `nb-brand-mark--${t}`, n),
      style: i,
      "aria-hidden": "true",
      children: /* @__PURE__ */ H("svg", { viewBox: "0 0 3200 3200", role: "img", focusable: "false", ...r, children: [
        /* @__PURE__ */ m(
          "path",
          {
            className: "nb-brand-mark__ink",
            d: "M 59 249 L 41 266 L 23 291 L 9 324 L 4 351 L 4 3199 L 102 3193 L 193 3175 L 282 3145 L 359 3108 L 437 3058 L 514 2993 L 571 2931 L 625 2856 L 668 2777 L 694 2714 L 718 2632 L 730 2566 L 736 2498 L 738 2012 L 750 1981 L 769 1958 L 796 1940 L 828 1931 L 865 1934 L 902 1953 L 2148 3199 L 2227 3193 L 2302 3173 L 2361 3146 L 2423 3104 L 2483 3044 L 2513 3003 L 2535 2965 L 2568 2881 L 2582 2808 L 2583 2727 L 2567 2641 L 2534 2561 L 2486 2490 L 260 256 L 237 238 L 214 226 L 168 215 L 116 220 L 85 232 Z"
          }
        ),
        /* @__PURE__ */ m(
          "path",
          {
            className: "nb-brand-mark__ink",
            d: "M 570 0 L 572 58 L 580 118 L 609 226 L 633 284 L 663 341 L 728 434 L 813 522 L 858 559 L 914 598 L 1024 657 L 1084 681 L 1151 702 L 1252 723 L 1346 732 L 3195 732 L 3194 683 L 3186 618 L 3171 552 L 3154 500 L 3105 396 L 3037 298 L 2995 251 L 2945 204 L 2846 131 L 2794 101 L 2729 70 L 2620 32 L 2511 9 L 2411 0 Z"
          }
        ),
        /* @__PURE__ */ m(
          "path",
          {
            className: "nb-brand-mark__cyan",
            d: "M 1661 1013 L 1666 1128 L 1684 1242 L 1716 1357 L 1753 1447 L 1795 1523 L 1862 1611 L 1903 1651 L 1936 1677 L 2001 1715 L 2057 1735 L 2120 1745 L 3195 1745 L 3191 1640 L 3174 1525 L 3149 1428 L 3106 1317 L 3060 1233 L 2999 1152 L 2934 1091 L 2858 1044 L 2797 1022 L 2743 1013 Z"
          }
        )
      ] })
    }
  );
}
function Ra(e) {
  return e !== "system" ? e : typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function km({
  children: e,
  theme: t = "system",
  direction: n = "ltr"
}) {
  return _a(() => {
    const o = document.documentElement, r = o.dataset.nebraTheme, i = o.getAttribute("dir"), s = window.matchMedia("(prefers-color-scheme: dark)"), a = () => {
      o.dataset.nebraTheme = Ra(t), o.setAttribute("dir", n);
    };
    return a(), t === "system" && s.addEventListener("change", a), () => {
      t === "system" && s.removeEventListener("change", a), r ? o.dataset.nebraTheme = r : delete o.dataset.nebraTheme, i ? o.setAttribute("dir", i) : o.removeAttribute("dir");
    };
  }, [t, n]), e;
}
function Vm({
  className: e,
  variant: t = "neutral",
  icon: n,
  title: o,
  description: r,
  ...i
}) {
  return /* @__PURE__ */ H(
    "div",
    {
      className: D("nb-alert", t !== "neutral" && `nb-alert--${t}`, e),
      role: t === "danger" ? "alert" : "status",
      ...i,
      children: [
        n ? /* @__PURE__ */ m("div", { "aria-hidden": "true", children: n }) : /* @__PURE__ */ m("span", { "aria-hidden": "true" }),
        /* @__PURE__ */ H("div", { children: [
          /* @__PURE__ */ m("p", { className: "nb-alert__title", children: o }),
          r ? /* @__PURE__ */ m("p", { className: "nb-alert__description", children: r }) : null
        ] })
      ]
    }
  );
}
const pr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, mr = Xr, Zr = (e, t) => (n) => {
  var o;
  if (t?.variants == null) return mr(e, n?.class, n?.className);
  const { variants: r, defaultVariants: i } = t, s = Object.keys(r).map((c) => {
    const g = n?.[c], d = i?.[c];
    if (g === null) return null;
    const f = pr(g) || pr(d);
    return r[c][f];
  }), a = n && Object.entries(n).reduce((c, g) => {
    let [d, f] = g;
    return f === void 0 || (c[d] = f), c;
  }, {}), l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, g) => {
    let { class: d, className: f, ...p } = g;
    return Object.entries(p).every((h) => {
      let [v, w] = h;
      return Array.isArray(w) ? w.includes({
        ...i,
        ...a
      }[v]) : {
        ...i,
        ...a
      }[v] === w;
    }) ? [
      ...c,
      d,
      f
    ] : c;
  }, []);
  return mr(e, s, l, n?.class, n?.className);
}, xa = Zr("nb-badge", {
  variants: {
    variant: {
      neutral: "nb-badge--neutral",
      accent: "nb-badge--accent",
      success: "nb-badge--success",
      warning: "nb-badge--warning",
      danger: "nb-badge--danger",
      info: "nb-badge--info"
    }
  },
  defaultVariants: { variant: "neutral" }
});
function Hm({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ m("span", { className: D(xa({ variant: t }), e), ...n });
}
var Pa = Object.defineProperty, Mo = (e, t) => Pa(e, "name", { value: t, configurable: !0 });
function to(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
Mo(to, "setRef");
function Qr(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const i = to(r, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const i = o[r];
          typeof i == "function" ? i() : to(e[r], null);
        }
      };
  };
}
Mo(Qr, "composeRefs");
function K(...e) {
  return u.useCallback(Qr(...e), e);
}
Mo(K, "useComposedRefs");
var Ea = Object.defineProperty, Me = (e, t) => Ea(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Le(e) {
  const t = u.forwardRef((n, o) => {
    let { children: r, ...i } = n, s = null, a = !1;
    const l = [];
    no(r) && typeof Ht == "function" && (r = Ht(r._payload)), u.Children.forEach(r, (f) => {
      if (oi(f)) {
        a = !0;
        const p = f;
        let h = "child" in p.props ? p.props.child : p.props.children;
        no(h) && typeof Ht == "function" && (h = Ht(h._payload)), s = Ia(p, h), l.push(s?.props?.children);
      } else
        l.push(f);
    }), s ? s = u.cloneElement(s, void 0, l) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !a && u.Children.count(r) === 1 && u.isValidElement(r) && (s = r)
    );
    const c = s ? ni(s) : void 0, g = K(o, c);
    if (!s) {
      if (r || r === 0)
        throw new Error(
          a ? Oa(e) : Ta(e)
        );
      return r;
    }
    const d = ti(i, s.props ?? {});
    return s.type !== u.Fragment && (d.ref = o ? g : c), u.cloneElement(s, d);
  });
  return t.displayName = `${e}.Slot`, t;
}
Me(Le, "createSlot");
var Ma = /* @__PURE__ */ Le("Slot"), Jr = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ei(e) {
  const t = /* @__PURE__ */ Me((n) => "child" in n ? n.children(n.child) : n.children, "Slottable");
  return t.displayName = `${e}.Slottable`, t.__radixId = Jr, t;
}
Me(ei, "createSlottable");
var Ia = /* @__PURE__ */ Me((e, t) => {
  if ("child" in e.props) {
    const n = e.props.child;
    return u.isValidElement(n) ? u.cloneElement(n, void 0, e.props.children(n.props.children)) : null;
  }
  return u.isValidElement(t) ? t : null;
}, "getSlottableElementFromSlottable");
function ti(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...a) => {
      const l = i(...a);
      return r(...a), l;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...i } : o === "className" && (n[o] = [r, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
Me(ti, "mergeProps");
function ni(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Me(ni, "getElementRef");
function oi(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Jr;
}
Me(oi, "isSlottable");
var Da = /* @__PURE__ */ Symbol.for("react.lazy");
function no(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Da && "_payload" in e && ri(e._payload);
}
Me(no, "isLazyComponent");
function ri(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
Me(ri, "isPromiseLike");
var Ta = /* @__PURE__ */ Me((e) => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), Oa = /* @__PURE__ */ Me((e) => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Ht = u[" use ".trim().toString()];
const Aa = Zr("nb-button", {
  variants: {
    variant: {
      primary: "nb-button--primary",
      secondary: "nb-button--secondary",
      outline: "nb-button--outline",
      ghost: "nb-button--ghost",
      danger: "nb-button--danger"
    },
    size: {
      sm: "nb-button--sm",
      md: "nb-button--md",
      lg: "nb-button--lg",
      icon: "nb-button--icon"
    }
  },
  defaultVariants: { variant: "primary", size: "md" }
}), La = Y(
  ({ className: e, variant: t, size: n, asChild: o = !1, type: r, ...i }, s) => /* @__PURE__ */ m(
    o ? Ma : "button",
    {
      ref: s,
      className: D(Aa({ variant: t, size: n }), e),
      ...o ? {} : { type: r ?? "button" },
      ...i
    }
  )
);
La.displayName = "Button";
function Gm({ className: e, interactive: t = !1, ...n }) {
  return /* @__PURE__ */ m("div", { className: D("nb-card", t && "nb-card--interactive", e), ...n });
}
function Bm({ className: e, ...t }) {
  return /* @__PURE__ */ m("div", { className: D("nb-card__header", e), ...t });
}
function zm({ className: e, ...t }) {
  return /* @__PURE__ */ m("h3", { className: D("nb-card__title", e), ...t });
}
function Um({ className: e, ...t }) {
  return /* @__PURE__ */ m("p", { className: D("nb-card__description", e), ...t });
}
function jm({ className: e, ...t }) {
  return /* @__PURE__ */ m("div", { className: D("nb-card__content", e), ...t });
}
function Wm({ className: e, ...t }) {
  return /* @__PURE__ */ m("div", { className: D("nb-card__footer", e), ...t });
}
var Fa = Object.defineProperty, Ct = (e, t) => Fa(e, "name", { value: t, configurable: !0 }), ii = !!(typeof window < "u" && window.document && window.document.createElement);
function P(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return /* @__PURE__ */ Ct(function(r) {
    if (e?.(r), n === !1 || !r || !r.defaultPrevented)
      return t?.(r);
  }, "handleEvent");
}
Ct(P, "composeEventHandlers");
function Na(e) {
  if (!ii)
    throw new Error("Cannot access window outside of the DOM");
  return e?.ownerDocument?.defaultView ?? window;
}
Ct(Na, "getOwnerWindow");
function oo(e) {
  if (!ii)
    throw new Error("Cannot access document outside of the DOM");
  return e?.ownerDocument ?? document;
}
Ct(oo, "getOwnerDocument");
function si(e, t = !1) {
  const { activeElement: n } = oo(e);
  if (!n?.nodeName)
    return null;
  if (ai(n) && n.contentDocument)
    return si(n.contentDocument.body, t);
  if (t) {
    const o = n.getAttribute("aria-activedescendant");
    if (o) {
      const r = oo(n).getElementById(o);
      if (r)
        return r;
    }
  }
  return n;
}
Ct(si, "getActiveElement");
function ai(e) {
  return e.tagName === "IFRAME";
}
Ct(ai, "isFrame");
var $a = Object.defineProperty, Re = (e, t) => $a(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function ka(e, t) {
  const n = u.createContext(t);
  n.displayName = e + "Context";
  const o = /* @__PURE__ */ Re((i) => {
    const { children: s, ...a } = i, l = u.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ m(n.Provider, { value: l, children: s });
  }, "Provider");
  o.displayName = e + "Provider";
  function r(i, s = {}) {
    const { optional: a = !1 } = s, l = u.useContext(n);
    if (l) return l;
    if (t !== void 0) return t;
    if (!a)
      throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return Re(r, "useContext"), [o, r];
}
Re(ka, "createContext");
// @__NO_SIDE_EFFECTS__
function Ie(e, t = []) {
  let n = [];
  function o(i, s) {
    const a = u.createContext(s);
    a.displayName = i + "Context";
    const l = n.length;
    n = [...n, s];
    const c = /* @__PURE__ */ Re((d) => {
      const { scope: f, children: p, ...h } = d, v = f?.[e]?.[l] || a, w = u.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ m(v.Provider, { value: w, children: p });
    }, "Provider");
    c.displayName = i + "Provider";
    function g(d, f, p = {}) {
      const { optional: h = !1 } = p, v = f?.[e]?.[l] || a, w = u.useContext(v);
      if (w) return w;
      if (s !== void 0) return s;
      if (!h)
        throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return Re(g, "useContext"), [c, g];
  }
  Re(o, "createContext");
  const r = /* @__PURE__ */ Re(() => {
    const i = n.map((s) => u.createContext(s));
    return /* @__PURE__ */ Re(function(a) {
      const l = a?.[e] || i;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    }, "useScope");
  }, "createScope");
  return r.scopeName = e, [o, li(r, ...t)];
}
Re(Ie, "createContextScope");
function li(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = /* @__PURE__ */ Re(() => {
    const o = e.map((r) => ({
      useScope: r(),
      scopeName: r.scopeName
    }));
    return /* @__PURE__ */ Re(function(i) {
      const s = o.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    }, "useComposedScopes");
  }, "createScope");
  return n.scopeName = t.scopeName, n;
}
Re(li, "composeContextScopes");
var ee = globalThis?.document ? u.useLayoutEffect : () => {
}, Va = Object.defineProperty, Ha = (e, t) => Va(e, "name", { value: t, configurable: !0 }), Ga = u[" useId ".trim().toString()] || (() => {
}), Ba = 0;
function pe(e) {
  const [t, n] = u.useState(Ga());
  return ee(() => {
    e || n((o) => o ?? String(Ba++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
Ha(pe, "useId");
var za = Object.defineProperty, Ua = (e, t) => za(e, "name", { value: t, configurable: !0 }), hr = u[" useEffectEvent ".trim().toString()], vr = u[" useInsertionEffect ".trim().toString()];
function ci(e) {
  if (typeof hr == "function")
    return hr(e);
  const t = u.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof vr == "function" ? vr(() => {
    t.current = e;
  }) : ee(() => {
    t.current = e;
  }), u.useMemo(() => ((...n) => t.current?.(...n)), []);
}
Ua(ci, "useEffectEvent");
var ja = Object.defineProperty, Lt = (e, t) => ja(e, "name", { value: t, configurable: !0 }), Wa = u[" useInsertionEffect ".trim().toString()] || ee;
function je({
  prop: e,
  defaultProp: t,
  onChange: n = /* @__PURE__ */ Lt(() => {
  }, "onChange"),
  caller: o
}) {
  const [r, i, s] = ui({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : r, c = u.useCallback(
    (g) => {
      if (a) {
        const d = di(g) ? g(e) : g;
        d !== e && s.current?.(d);
      } else
        i(g);
    },
    [a, e, i, s]
  );
  return [l, c];
}
Lt(je, "useControllableState");
function ui({
  defaultProp: e,
  onChange: t
}) {
  const [n, o] = u.useState(e), r = u.useRef(n), i = u.useRef(t);
  return Wa(() => {
    i.current = t;
  }, [t]), u.useEffect(() => {
    r.current !== n && (i.current?.(n), r.current = n);
  }, [n, r]), [n, o, i];
}
Lt(ui, "useUncontrolledState");
function di(e) {
  return typeof e == "function";
}
Lt(di, "isFunction");
var wr = /* @__PURE__ */ Symbol("RADIX:SYNC_STATE");
function Ka(e, t, n, o) {
  const { prop: r, defaultProp: i, onChange: s, caller: a } = t, l = r !== void 0, c = ci(s), g = [{ ...n, state: i }];
  o && g.push(o);
  const [d, f] = u.useReducer(
    (w, C) => {
      if (C.type === wr)
        return { ...w, state: C.state };
      const y = e(w, C);
      return l && !Object.is(y.state, w.state) && c(y.state), y;
    },
    ...g
  ), p = d.state, h = u.useRef(p);
  u.useEffect(() => {
    h.current !== p && (h.current = p, l || c(p));
  }, [p, h, l]);
  const v = u.useMemo(() => r !== void 0 ? { ...d, state: r } : d, [d, r]);
  return u.useEffect(() => {
    l && !Object.is(r, d.state) && f({ type: wr, state: r });
  }, [r, d.state, l]), [v, f];
}
Lt(Ka, "useControllableStateReducer");
var qa = Object.defineProperty, Ya = (e, t) => qa(e, "name", { value: t, configurable: !0 }), Xa = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], z = Xa.reduce((e, t) => {
  const n = /* @__PURE__ */ Le(`Primitive.${t}`), o = u.forwardRef((r, i) => {
    const { asChild: s, ...a } = r, l = s ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(l, { ...a, ref: i });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function Io(e, t) {
  e && At.flushSync(() => e.dispatchEvent(t));
}
Ya(Io, "dispatchDiscreteCustomEvent");
var Za = Object.defineProperty, Qa = (e, t) => Za(e, "name", { value: t, configurable: !0 });
function he(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => ((...n) => t.current?.(...n)), []);
}
Qa(he, "useCallbackRef");
var Ja = Object.defineProperty, ie = (e, t) => Ja(e, "name", { value: t, configurable: !0 }), ro = "dismissableLayer.update", el = "dismissableLayer.pointerDownOutside", tl = "dismissableLayer.focusOutside", Cr, fi = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set(),
  // Outside elements that belong to a layer's own dismiss affordance (eg, a
  // dialog overlay). Pressing them should dismiss the layer regardless of
  // whether or not they stop propagation.
  //
  // See https://github.com/radix-ui/primitives/issues/3346
  dismissableSurfaces: /* @__PURE__ */ new Set()
}), an = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ ie(function(t, n) {
    const {
      disableOutsidePointerEvents: o = !1,
      deferPointerDownOutside: r = !1,
      onEscapeKeyDown: i,
      onPointerDownOutside: s,
      onFocusOutside: a,
      onInteractOutside: l,
      onDismiss: c,
      ...g
    } = t, d = u.useContext(fi), [f, p] = u.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, v] = u.useState({}), w = K(n, p), C = Array.from(d.layers), [y] = [
      ...d.layersWithOutsidePointerEventsDisabled
    ].slice(-1), S = y ? C.indexOf(y) : -1, _ = f ? C.indexOf(f) : -1, b = d.layersWithOutsidePointerEventsDisabled.size > 0, R = _ >= S, x = u.useRef(!1), I = pi(
      (O) => {
        s?.(O), l?.(O), O.defaultPrevented || c?.();
      },
      {
        ownerDocument: h,
        deferPointerDownOutside: r,
        isDeferredPointerDownOutsideRef: x,
        dismissableSurfaces: d.dismissableSurfaces,
        shouldHandlePointerDownOutside: u.useCallback(
          (O) => {
            if (!(O instanceof Node))
              return !1;
            const N = [...d.branches].some(
              (G) => G.contains(O)
            );
            return R && !N;
          },
          [d.branches, R]
        )
      }
    ), E = mi((O) => {
      if (r && x.current)
        return;
      const N = O.target;
      [...d.branches].some((q) => q.contains(N)) || (a?.(O), l?.(O), O.defaultPrevented || c?.());
    }, h), A = f ? _ === C.length - 1 : !1, $ = he((O) => {
      O.key === "Escape" && (i?.(O), !O.defaultPrevented && c && (O.preventDefault(), c()));
    });
    return u.useEffect(() => {
      if (A)
        return h.addEventListener("keydown", $, { capture: !0 }), () => h.removeEventListener("keydown", $, { capture: !0 });
    }, [h, A, $]), u.useEffect(() => {
      if (f)
        return o && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Cr = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), io(), () => {
          o && (d.layersWithOutsidePointerEventsDisabled.delete(f), d.layersWithOutsidePointerEventsDisabled.size === 0 && (h.body.style.pointerEvents = Cr));
        };
    }, [f, h, o, d]), u.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), io());
    }, [f, d]), u.useEffect(() => {
      const O = /* @__PURE__ */ ie(() => v({}), "handleUpdate");
      return document.addEventListener(ro, O), () => document.removeEventListener(ro, O);
    }, []), /* @__PURE__ */ m(
      z.div,
      {
        ...g,
        ref: w,
        style: {
          pointerEvents: b ? R ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: P(t.onFocusCapture, E.onFocusCapture),
        onBlurCapture: P(t.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: P(
          t.onPointerDownCapture,
          I.onPointerDownCapture
        )
      }
    );
  }, "DismissableLayer")
);
function gi() {
  const e = u.useContext(fi), [t, n] = u.useState(null);
  return u.useEffect(() => {
    if (t)
      return e.dismissableSurfaces.add(t), () => {
        e.dismissableSurfaces.delete(t);
      };
  }, [t, e.dismissableSurfaces]), n;
}
ie(gi, "useDismissableLayerSurface");
var nl = /* @__PURE__ */ ie(() => !0, "IS_TRUE");
function pi(e, t) {
  const {
    ownerDocument: n = globalThis?.document,
    deferPointerDownOutside: o = !1,
    isDeferredPointerDownOutsideRef: r,
    dismissableSurfaces: i,
    shouldHandlePointerDownOutside: s = nl
  } = t, a = he(e), l = u.useRef(!1), c = u.useRef(!1), g = u.useRef(/* @__PURE__ */ new Map()), d = u.useRef(() => {
  });
  return u.useEffect(() => {
    function f() {
      c.current = !1, r.current = !1, g.current.clear();
    }
    ie(f, "resetOutsideInteraction");
    function p() {
      return Array.from(g.current.values()).some(Boolean);
    }
    ie(p, "isOutsideInteractionIntercepted");
    function h(S) {
      if (!c.current)
        return;
      const _ = S.target;
      _ instanceof Node && [...i].some((R) => R.contains(_)) || g.current.set(S.type, !0), S.type === "click" && window.setTimeout(() => {
        c.current && d.current();
      }, 0);
    }
    ie(h, "handleInteractionCapture");
    function v(S) {
      c.current && g.current.set(S.type, !1);
    }
    ie(v, "handleInteractionBubble");
    const w = /* @__PURE__ */ ie((S) => {
      if (S.target && !l.current) {
        let _ = function() {
          n.removeEventListener("click", d.current);
          const R = p();
          f(), R || Do(
            el,
            a,
            b,
            { discrete: !0 }
          );
        };
        if (ie(_, "handleAndDispatchPointerDownOutsideEvent"), !s(S.target)) {
          n.removeEventListener("click", d.current), f(), l.current = !1;
          return;
        }
        const b = { originalEvent: S };
        c.current = !0, r.current = o && S.button === 0, g.current.clear(), !o || S.button !== 0 ? _() : (n.removeEventListener("click", d.current), d.current = _, n.addEventListener("click", d.current, { once: !0 }));
      } else
        n.removeEventListener("click", d.current), f();
      l.current = !1;
    }, "handlePointerDown"), C = [
      "pointerup",
      "mousedown",
      "mouseup",
      "touchstart",
      "touchend",
      "click"
    ];
    for (const S of C)
      n.addEventListener(S, h, !0), n.addEventListener(S, v);
    const y = window.setTimeout(() => {
      n.addEventListener("pointerdown", w);
    }, 0);
    return () => {
      window.clearTimeout(y), n.removeEventListener("pointerdown", w), n.removeEventListener("click", d.current);
      for (const S of C)
        n.removeEventListener(S, h, !0), n.removeEventListener(S, v);
    };
  }, [
    n,
    a,
    o,
    r,
    i,
    s
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ ie(() => l.current = !0, "onPointerDownCapture")
  };
}
ie(pi, "usePointerDownOutside");
function mi(e, t = globalThis?.document) {
  const n = he(e), o = u.useRef(!1);
  return u.useEffect(() => {
    const r = /* @__PURE__ */ ie((i) => {
      i.target && !o.current && Do(tl, n, { originalEvent: i }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [t, n]), {
    onFocusCapture: /* @__PURE__ */ ie(() => o.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ ie(() => o.current = !1, "onBlurCapture")
  };
}
ie(mi, "useFocusOutside");
function io() {
  const e = new CustomEvent(ro);
  document.dispatchEvent(e);
}
ie(io, "dispatchUpdate");
function Do(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && r.addEventListener(e, t, { once: !0 }), o ? Io(r, i) : r.dispatchEvent(i);
}
ie(Do, "handleAndDispatchCustomEvent");
var ol = Object.defineProperty, de = (e, t) => ol(e, "name", { value: t, configurable: !0 }), Ln = "focusScope.autoFocusOnMount", Fn = "focusScope.autoFocusOnUnmount", Sr = { bubbles: !1, cancelable: !0 }, To = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ de(function(t, n) {
    const {
      loop: o = !1,
      trapped: r = !1,
      onMountAutoFocus: i,
      onUnmountAutoFocus: s,
      ...a
    } = t, [l, c] = u.useState(null), g = he(i), d = he(s), f = u.useRef(null), p = K(n, c), h = u.useRef({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }).current;
    u.useEffect(() => {
      if (r) {
        let w = function(_) {
          if (h.paused || !l) return;
          const b = _.target;
          l.contains(b) ? f.current = b : He(f.current, { select: !0 });
        }, C = function(_) {
          if (h.paused || !l) return;
          const b = _.relatedTarget;
          b !== null && (l.contains(b) || He(f.current, { select: !0 }));
        }, y = function(_) {
          if (document.activeElement === document.body)
            for (const R of _)
              R.removedNodes.length > 0 && He(l);
        };
        de(w, "handleFocusIn"), de(C, "handleFocusOut"), de(y, "handleMutations"), document.addEventListener("focusin", w), document.addEventListener("focusout", C);
        const S = new MutationObserver(y);
        return l && S.observe(l, { childList: !0, subtree: !0 }), () => {
          document.removeEventListener("focusin", w), document.removeEventListener("focusout", C), S.disconnect();
        };
      }
    }, [r, l, h.paused]), u.useEffect(() => {
      if (l) {
        yr.add(h);
        const w = document.activeElement;
        if (!l.contains(w)) {
          const y = new CustomEvent(Ln, Sr);
          l.addEventListener(Ln, g), l.dispatchEvent(y), y.defaultPrevented || (hi(yi(Oo(l)), { select: !0 }), document.activeElement === w && He(l));
        }
        return () => {
          l.removeEventListener(Ln, g), setTimeout(() => {
            const y = new CustomEvent(Fn, Sr);
            l.addEventListener(Fn, d), l.dispatchEvent(y), y.defaultPrevented || He(w ?? document.body, { select: !0 }), l.removeEventListener(Fn, d), yr.remove(h);
          }, 0);
        };
      }
    }, [l, g, d, h]);
    const v = u.useCallback(
      (w) => {
        if (!o && !r || h.paused) return;
        const C = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey, y = document.activeElement;
        if (C && y) {
          const S = w.currentTarget, [_, b] = vi(S);
          _ && b ? !w.shiftKey && y === b ? (w.preventDefault(), o && He(_, { select: !0 })) : w.shiftKey && y === _ && (w.preventDefault(), o && He(b, { select: !0 })) : y === S && w.preventDefault();
        }
      },
      [o, r, h.paused]
    );
    return /* @__PURE__ */ m(z.div, { tabIndex: -1, ...a, ref: p, onKeyDown: v });
  }, "FocusScope")
);
function hi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (He(o, { select: t }), document.activeElement !== n) return;
}
de(hi, "focusFirst");
function vi(e) {
  const t = Oo(e), n = so(t, e), o = so(t.reverse(), e);
  return [n, o];
}
de(vi, "getTabbableEdges");
function Oo(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ de((o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
de(Oo, "getTabbableCandidates");
function so(e, t) {
  const n = typeof t.checkVisibility == "function" && t.checkVisibility({ checkVisibilityCSS: !0 });
  for (const o of e)
    if (!(n ? !o.checkVisibility({ checkVisibilityCSS: !0 }) : wi(o, { upTo: t })))
      return o;
}
de(so, "findVisible");
function wi(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
de(wi, "isHidden");
function Ci(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
de(Ci, "isSelectableInput");
function He(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ci(e) && t && e.select();
  }
}
de(He, "focus");
var yr = Si();
function Si() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = ao(e, t), e.unshift(t);
    },
    remove(t) {
      e = ao(e, t), e[0]?.resume();
    }
  };
}
de(Si, "createFocusScopesStack");
function ao(e, t) {
  const n = [...e], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
de(ao, "arrayRemove");
function yi(e) {
  return e.filter((t) => t.tagName !== "A");
}
de(yi, "removeLinks");
var rl = Object.defineProperty, il = (e, t) => rl(e, "name", { value: t, configurable: !0 }), ln = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ il(function(t, n) {
    const { container: o, ...r } = t, [i, s] = u.useState(!1);
    ee(() => s(!0), []);
    const a = o || i && globalThis?.document?.body;
    return a ? At.createPortal(/* @__PURE__ */ m(z.div, { ...r, ref: n }), a) : null;
  }, "Portal")
), sl = Object.defineProperty, We = (e, t) => sl(e, "name", { value: t, configurable: !0 });
function _i(e, t) {
  return u.useReducer((n, o) => t[n][o] ?? n, e);
}
We(_i, "useStateMachine");
var De = /* @__PURE__ */ We((e) => {
  const { present: t, children: n } = e, o = bi(t), r = typeof n == "function" ? n({ present: o.isPresent }) : u.Children.only(n), i = Ri(o.ref, xi(r));
  return typeof n == "function" || o.isPresent ? u.cloneElement(r, { ref: i }) : null;
}, "Presence");
function bi(e) {
  const [t, n] = u.useState(), o = u.useRef(null), r = u.useRef(e), i = u.useRef("none"), s = u.useRef(void 0), a = e ? "mounted" : "unmounted", [l, c] = _i(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return u.useEffect(() => {
    l === "mounted" ? (i.current = s.current ?? pt(o.current), s.current = void 0) : i.current = "none";
  }, [l]), ee(() => {
    const g = o.current, d = r.current;
    if (d !== e) {
      const p = i.current, h = pt(g);
      e ? (s.current = h, c("MOUNT")) : h === "none" || g?.display === "none" ? c("UNMOUNT") : c(d && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [e, c]), ee(() => {
    if (t) {
      let g;
      const d = t.ownerDocument.defaultView ?? window, f = /* @__PURE__ */ We((h) => {
        const w = pt(o.current).includes(CSS.escape(h.animationName));
        if (h.target === t && w && (c("ANIMATION_END"), !r.current)) {
          const C = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", g = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = C);
          });
        }
      }, "handleAnimationEnd"), p = /* @__PURE__ */ We((h) => {
        h.target === t && (i.current = pt(o.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(g), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: u.useCallback((g) => {
      if (g) {
        const d = getComputedStyle(g);
        o.current = d, s.current = pt(d);
      } else
        o.current = null;
      n(g);
    }, [])
  };
}
We(bi, "usePresence");
function lo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
We(lo, "setRef");
function Ri(...e) {
  const t = u.useRef(e);
  return t.current = e, u.useCallback((n) => {
    const o = t.current;
    let r = !1;
    const i = o.map((s) => {
      const a = lo(s, n);
      return !r && typeof a == "function" && (r = !0), a;
    });
    if (r)
      return () => {
        for (let s = 0; s < i.length; s++) {
          const a = i[s];
          typeof a == "function" ? a() : lo(o[s], null);
        }
      };
  }, []);
}
We(Ri, "useStableComposedRefs");
function pt(e) {
  return e?.animationName || "none";
}
We(pt, "getAnimationName");
function xi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
We(xi, "getElementRef");
var al = Object.defineProperty, Ao = (e, t) => al(e, "name", { value: t, configurable: !0 }), Gt = 0, ut = null;
function ll(e) {
  return Ft(), e.children;
}
Ao(ll, "FocusGuards");
function Ft() {
  u.useEffect(() => {
    ut || (ut = { start: co(), end: co() });
    const { start: e, end: t } = ut;
    return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), Gt++, () => {
      Gt === 1 && (ut?.start.remove(), ut?.end.remove(), ut = null), Gt = Math.max(0, Gt - 1);
    };
  }, []);
}
Ao(Ft, "useFocusGuards");
function co() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
Ao(co, "createFocusGuard");
var Oe = function() {
  return Oe = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Oe.apply(this, arguments);
};
function Pi(e, t) {
  var n = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function cl(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, i; o < r; o++)
    (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Qt = "right-scroll-bar-position", Jt = "width-before-scroll-bar", ul = "with-scroll-bars-hidden", dl = "--removed-body-scroll-bar-size";
function Nn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function fl(e, t) {
  var n = qr(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var gl = typeof window < "u" ? u.useLayoutEffect : u.useEffect, _r = /* @__PURE__ */ new WeakMap();
function pl(e, t) {
  var n = fl(null, function(o) {
    return e.forEach(function(r) {
      return Nn(r, o);
    });
  });
  return gl(function() {
    var o = _r.get(n);
    if (o) {
      var r = new Set(o), i = new Set(e), s = n.current;
      r.forEach(function(a) {
        i.has(a) || Nn(a, null);
      }), i.forEach(function(a) {
        r.has(a) || Nn(a, s);
      });
    }
    _r.set(n, e);
  }, [e]), n;
}
function ml(e) {
  return e;
}
function hl(e, t) {
  t === void 0 && (t = ml);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var s = t(i, o);
      return n.push(s), function() {
        n = n.filter(function(a) {
          return a !== s;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (o = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      o = !0;
      var s = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), s = n;
      }
      var l = function() {
        var g = s;
        s = [], g.forEach(i);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(g) {
          s.push(g), c();
        },
        filter: function(g) {
          return s = s.filter(g), n;
        }
      };
    }
  };
  return r;
}
function vl(e) {
  e === void 0 && (e = {});
  var t = hl(null);
  return t.options = Oe({ async: !0, ssr: !1 }, e), t;
}
var Ei = function(e) {
  var t = e.sideCar, n = Pi(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return u.createElement(o, Oe({}, n));
};
Ei.isSideCarExport = !0;
function wl(e, t) {
  return e.useMedium(t), Ei;
}
var Mi = vl(), $n = function() {
}, cn = u.forwardRef(function(e, t) {
  var n = u.useRef(null), o = u.useState({
    onScrollCapture: $n,
    onWheelCapture: $n,
    onTouchMoveCapture: $n
  }), r = o[0], i = o[1], s = e.forwardProps, a = e.children, l = e.className, c = e.removeScrollBar, g = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, h = e.noIsolation, v = e.inert, w = e.allowPinchZoom, C = e.as, y = C === void 0 ? "div" : C, S = e.gapMode, _ = Pi(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), b = f, R = pl([n, t]), x = Oe(Oe({}, _), r);
  return u.createElement(
    u.Fragment,
    null,
    g && u.createElement(b, { sideCar: Mi, removeScrollBar: c, shards: d, noRelative: p, noIsolation: h, inert: v, setCallbacks: i, allowPinchZoom: !!w, lockRef: n, gapMode: S }),
    s ? u.cloneElement(u.Children.only(a), Oe(Oe({}, x), { ref: R })) : u.createElement(y, Oe({}, x, { className: l, ref: R }), a)
  );
});
cn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
cn.classNames = {
  fullWidth: Jt,
  zeroRight: Qt
};
var Cl = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Sl() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Cl();
  return t && e.setAttribute("nonce", t), e;
}
function yl(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function _l(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var bl = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Sl()) && (yl(t, n), _l(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Rl = function() {
  var e = bl();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ii = function() {
  var e = Rl(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, xl = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, kn = function(e) {
  return parseInt(e || "", 10) || 0;
}, Pl = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [kn(n), kn(o), kn(r)];
}, El = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return xl;
  var t = Pl(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Ml = Ii(), mt = "data-scroll-locked", Il = function(e, t, n, o) {
  var r = e.left, i = e.top, s = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ul, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(a, "px ").concat(o, `;
  }
  body[`).concat(mt, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Qt, ` {
    right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(Jt, ` {
    margin-right: `).concat(a, "px ").concat(o, `;
  }
  
  .`).concat(Qt, " .").concat(Qt, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(Jt, " .").concat(Jt, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(mt, `] {
    `).concat(dl, ": ").concat(a, `px;
  }
`);
}, br = function() {
  var e = parseInt(document.body.getAttribute(mt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Dl = function() {
  u.useEffect(function() {
    return document.body.setAttribute(mt, (br() + 1).toString()), function() {
      var e = br() - 1;
      e <= 0 ? document.body.removeAttribute(mt) : document.body.setAttribute(mt, e.toString());
    };
  }, []);
}, Tl = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  Dl();
  var i = u.useMemo(function() {
    return El(r);
  }, [r]);
  return u.createElement(Ml, { styles: Il(i, !t, r, n ? "" : "!important") });
}, uo = !1;
if (typeof window < "u")
  try {
    var Bt = Object.defineProperty({}, "passive", {
      get: function() {
        return uo = !0, !0;
      }
    });
    window.addEventListener("test", Bt, Bt), window.removeEventListener("test", Bt, Bt);
  } catch {
    uo = !1;
  }
var dt = uo ? { passive: !1 } : !1, Ol = function(e) {
  return e.tagName === "TEXTAREA";
}, Di = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Ol(e) && n[t] === "visible")
  );
}, Al = function(e) {
  return Di(e, "overflowY");
}, Ll = function(e) {
  return Di(e, "overflowX");
}, Rr = function(e, t) {
  var n = t.ownerDocument, o = t;
  do {
    typeof ShadowRoot < "u" && o instanceof ShadowRoot && (o = o.host);
    var r = Ti(e, o);
    if (r) {
      var i = Oi(e, o), s = i[1], a = i[2];
      if (s > a)
        return !0;
    }
    o = o.parentNode;
  } while (o && o !== n.body);
  return !1;
}, Fl = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, Nl = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, Ti = function(e, t) {
  return e === "v" ? Al(t) : Ll(t);
}, Oi = function(e, t) {
  return e === "v" ? Fl(t) : Nl(t);
}, $l = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, kl = function(e, t, n, o, r) {
  var i = $l(e, window.getComputedStyle(t).direction), s = i * o, a = n.target, l = t.contains(a), c = !1, g = s > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var p = Oi(e, a), h = p[0], v = p[1], w = p[2], C = v - w - i * h;
    (h || C) && Ti(e, a) && (d += C, f += h);
    var y = a.parentNode;
    a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (g && Math.abs(d) < 1 || !g && Math.abs(f) < 1) && (c = !0), c;
}, zt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, xr = function(e) {
  return [e.deltaX, e.deltaY];
}, Pr = function(e) {
  return e && "current" in e ? e.current : e;
}, Vl = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Hl = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Gl = 0, ft = [];
function Bl(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), o = u.useRef(), r = u.useState(Gl++)[0], i = u.useState(Ii)[0], s = u.useRef(e);
  u.useEffect(function() {
    s.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var v = cl([e.lockRef.current], (e.shards || []).map(Pr), !0).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = u.useCallback(function(v, w) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !s.current.allowPinchZoom;
    var C = zt(v), y = n.current, S = "deltaX" in v ? v.deltaX : y[0] - C[0], _ = "deltaY" in v ? v.deltaY : y[1] - C[1], b, R = v.target, x = Math.abs(S) > Math.abs(_) ? "h" : "v";
    if ("touches" in v && x === "h" && R.type === "range")
      return !1;
    var I = window.getSelection(), E = I && I.anchorNode, A = E ? E === R || E.contains(R) : !1;
    if (A)
      return !1;
    var $ = Rr(x, R);
    if (!$)
      return !0;
    if ($ ? b = x : (b = x === "v" ? "h" : "v", $ = Rr(x, R)), !$)
      return !1;
    if (!o.current && "changedTouches" in v && (S || _) && (o.current = b), !b)
      return !0;
    var O = o.current || b;
    return kl(O, w, v, O === "h" ? S : _);
  }, []), l = u.useCallback(function(v) {
    var w = v;
    if (!(!ft.length || ft[ft.length - 1] !== i)) {
      var C = "deltaY" in w ? xr(w) : zt(w), y = t.current.filter(function(b) {
        return b.name === w.type && (b.target === w.target || w.target === b.shadowParent) && Vl(b.delta, C);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var S = (s.current.shards || []).map(Pr).filter(Boolean).filter(function(b) {
          return b.contains(w.target);
        }), _ = S.length > 0 ? a(w, S[0]) : !s.current.noIsolation;
        _ && w.cancelable && w.preventDefault();
      }
    }
  }, []), c = u.useCallback(function(v, w, C, y) {
    var S = { name: v, delta: w, target: C, should: y, shadowParent: zl(C) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== S;
      });
    }, 1);
  }, []), g = u.useCallback(function(v) {
    n.current = zt(v), o.current = void 0;
  }, []), d = u.useCallback(function(v) {
    c(v.type, xr(v), v.target, a(v, e.lockRef.current));
  }, []), f = u.useCallback(function(v) {
    c(v.type, zt(v), v.target, a(v, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return ft.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, dt), document.addEventListener("touchmove", l, dt), document.addEventListener("touchstart", g, dt), function() {
      ft = ft.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", l, dt), document.removeEventListener("touchmove", l, dt), document.removeEventListener("touchstart", g, dt);
    };
  }, []);
  var p = e.removeScrollBar, h = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    h ? u.createElement(i, { styles: Hl(r) }) : null,
    p ? u.createElement(Tl, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function zl(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Ul = wl(Mi, Bl);
var un = u.forwardRef(function(e, t) {
  return u.createElement(cn, Oe({}, e, { ref: t, sideCar: Ul }));
});
un.classNames = cn.classNames;
var jl = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, gt = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), jt = {}, Vn = 0, Ai = function(e) {
  return e && (e.host || Ai(e.parentNode));
}, Wl = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Ai(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Kl = function(e, t, n, o) {
  var r = Wl(t, Array.isArray(e) ? e : [e]);
  jt[n] || (jt[n] = /* @__PURE__ */ new WeakMap());
  var i = jt[n], s = [], a = /* @__PURE__ */ new Set(), l = new Set(r), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  r.forEach(c);
  var g = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        g(f);
      else
        try {
          var p = f.getAttribute(o), h = p !== null && p !== "false", v = (gt.get(f) || 0) + 1, w = (i.get(f) || 0) + 1;
          gt.set(f, v), i.set(f, w), s.push(f), v === 1 && h && Ut.set(f, !0), w === 1 && f.setAttribute(n, "true"), h || f.setAttribute(o, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", f, C);
        }
    });
  };
  return g(t), a.clear(), Vn++, function() {
    s.forEach(function(d) {
      var f = gt.get(d) - 1, p = i.get(d) - 1;
      gt.set(d, f), i.set(d, p), f || (Ut.has(d) || d.removeAttribute(o), Ut.delete(d)), p || d.removeAttribute(n);
    }), Vn--, Vn || (gt = /* @__PURE__ */ new WeakMap(), gt = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), jt = {});
  };
}, Lo = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = jl(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live], script"))), Kl(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, ql = Object.defineProperty, Se = (e, t) => ql(e, "name", { value: t, configurable: !0 }), Fo = "Dialog", [Li, Km] = /* @__PURE__ */ Ie(Fo), [Yl, Te] = Li(Fo), Fi = /* @__PURE__ */ Se((e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    modal: s = !0
  } = e, a = u.useRef(null), l = u.useRef(null), [c, g] = je({
    prop: o,
    defaultProp: r ?? !1,
    onChange: i,
    caller: Fo
  }), [d, f] = u.useState(0), [p, h] = u.useState(0);
  return /* @__PURE__ */ m(
    Yl,
    {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: pe(),
      titleId: pe(),
      descriptionId: pe(),
      titlePresent: d > 0,
      descriptionPresent: p > 0,
      setTitleCount: f,
      setDescriptionCount: h,
      open: c,
      onOpenChange: g,
      onOpenToggle: u.useCallback(() => g((v) => !v), [g]),
      modal: s,
      children: n
    }
  );
}, "Dialog"), Xl = "DialogTrigger", Ni = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ Se(function(t, n) {
    const { __scopeDialog: o, ...r } = t, i = Te(Xl, o), s = K(n, i.triggerRef);
    return /* @__PURE__ */ m(
      z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": fn(i.open),
        ...r,
        ref: s,
        onClick: P(t.onClick, i.onOpenToggle)
      }
    );
  }, "DialogTrigger")
), $i = "DialogPortal", [Zl, ki] = Li($i, {
  forceMount: void 0
}), Vi = /* @__PURE__ */ Se((e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, i = Te($i, t);
  return /* @__PURE__ */ m(Zl, { scope: t, forceMount: n, children: u.Children.map(o, (s) => /* @__PURE__ */ m(De, { present: n || i.open, children: /* @__PURE__ */ m(ln, { asChild: !0, container: r, children: s }) })) });
}, "DialogPortal"), fo = "DialogOverlay", Hi = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ Se(function(t, n) {
    const o = ki(fo, t.__scopeDialog), { forceMount: r = o.forceMount, ...i } = t, s = Te(fo, t.__scopeDialog);
    return s.modal ? /* @__PURE__ */ m(De, { present: r || s.open, children: /* @__PURE__ */ m(Jl, { ...i, ref: n }) }) : null;
  }, "DialogOverlay")
), Ql = /* @__PURE__ */ Le("DialogOverlay.RemoveScroll"), Jl = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Se(function(t, n) {
    const { __scopeDialog: o, ...r } = t, i = Te(fo, o), s = gi(), a = K(n, s);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m(un, { as: Ql, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ m(
        z.div,
        {
          "data-state": fn(i.open),
          ...r,
          ref: a,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }, "DialogOverlayImpl")
), Pt = "DialogContent", Gi = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ Se(function(t, n) {
    const o = ki(Pt, t.__scopeDialog), { forceMount: r = o.forceMount, ...i } = t, s = Te(Pt, t.__scopeDialog);
    return /* @__PURE__ */ m(De, { present: r || s.open, children: s.modal ? /* @__PURE__ */ m(ec, { ...i, ref: n }) : /* @__PURE__ */ m(tc, { ...i, ref: n }) });
  }, "DialogContent")
), ec = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Se(function(t, n) {
    const o = Te(Pt, t.__scopeDialog), r = u.useRef(null), i = K(n, o.contentRef, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return Lo(s);
    }, []), /* @__PURE__ */ m(
      Bi,
      {
        ...t,
        ref: i,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        onCloseAutoFocus: P(t.onCloseAutoFocus, (s) => {
          s.preventDefault(), o.triggerRef.current?.focus();
        }),
        onPointerDownOutside: P(t.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || l) && s.preventDefault();
        }),
        onFocusOutside: P(
          t.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }, "DialogContentModal")
), tc = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Se(function(t, n) {
    const o = Te(Pt, t.__scopeDialog), r = u.useRef(!1), i = u.useRef(!1);
    return /* @__PURE__ */ m(
      Bi,
      {
        ...t,
        ref: n,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          t.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || o.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, i.current = !1;
        },
        onInteractOutside: (s) => {
          t.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const a = s.target;
          o.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && i.current && s.preventDefault();
        }
      }
    );
  }, "DialogContentNonModal")
), Bi = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Se(function(t, n) {
    const { __scopeDialog: o, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: s, ...a } = t, l = Te(Pt, o);
    return Ft(), /* @__PURE__ */ m(Ot, { children: /* @__PURE__ */ m(
      To,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: i,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ m(
          an,
          {
            role: "dialog",
            id: l.contentId,
            "aria-describedby": l.descriptionPresent ? l.descriptionId : void 0,
            "aria-labelledby": l.titlePresent ? l.titleId : void 0,
            "data-state": fn(l.open),
            ...a,
            ref: n,
            deferPointerDownOutside: !0,
            onDismiss: () => l.onOpenChange(!1)
          }
        )
      }
    ) });
  }, "DialogContentImpl")
), nc = "DialogTitle", zi = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ Se(function(t, n) {
    const { __scopeDialog: o, ...r } = t, i = Te(nc, o), { setTitleCount: s } = i;
    return ee(() => (s((a) => a + 1), () => s((a) => a - 1)), [s]), /* @__PURE__ */ m(z.h2, { id: i.titleId, ...r, ref: n });
  }, "DialogTitle")
), oc = "DialogDescription", Ui = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ Se(function(t, n) {
    const { __scopeDialog: o, ...r } = t, i = Te(oc, o), { setDescriptionCount: s } = i;
    return ee(() => (s((a) => a + 1), () => s((a) => a - 1)), [s]), /* @__PURE__ */ m(z.p, { id: i.descriptionId, ...r, ref: n });
  }, "DialogDescription")
), rc = "DialogClose", dn = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ Se(function(t, n) {
    const { __scopeDialog: o, ...r } = t, i = Te(rc, o);
    return /* @__PURE__ */ m(
      z.button,
      {
        type: "button",
        ...r,
        ref: n,
        onClick: P(t.onClick, () => i.onOpenChange(!1))
      }
    );
  }, "DialogClose")
);
function fn(e) {
  return e ? "open" : "closed";
}
Se(fn, "getState");
const ic = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), sc = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), Er = (e) => {
  const t = sc(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ji = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), ac = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var lc = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const cc = Y(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: i,
    iconNode: s,
    ...a
  }, l) => eo(
    "svg",
    {
      ref: l,
      ...lc,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: ji("lucide", r),
      ...!i && !ac(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...s.map(([c, g]) => eo(c, g)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const $e = (e, t) => {
  const n = Y(
    ({ className: o, ...r }, i) => eo(cc, {
      ref: i,
      iconNode: t,
      className: ji(
        `lucide-${ic(Er(e))}`,
        `lucide-${e}`,
        o
      ),
      ...r
    })
  );
  return n.displayName = Er(e), n;
};
const uc = [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
], dc = $e("arrow-down", uc);
const fc = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
], gc = $e("arrow-up-down", fc);
const pc = [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
], mc = $e("arrow-up", pc);
const hc = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Wi = $e("check", hc);
const vc = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ki = $e("chevron-down", vc);
const wc = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], Cc = $e("chevron-left", wc);
const Sc = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], qi = $e("chevron-right", Sc);
const yc = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]], _c = $e("chevron-up", yc);
const bc = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Rc = $e("circle", bc);
const xc = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Yi = $e("x", xc), qm = Fi, Ym = Ni, Xm = dn, Xi = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(Hi, { ref: n, className: D("nb-dialog__overlay", e), ...t }));
Xi.displayName = "DialogOverlay";
const Pc = Y(({ className: e, children: t, hideClose: n = !1, ...o }, r) => /* @__PURE__ */ H(Vi, { children: [
  /* @__PURE__ */ m(Xi, {}),
  /* @__PURE__ */ H(Gi, { ref: r, className: D("nb-dialog__content", e), ...o, children: [
    t,
    n ? null : /* @__PURE__ */ m(dn, { className: "nb-dialog__close", "aria-label": "Close dialog", children: /* @__PURE__ */ m(Yi, { size: 18, "aria-hidden": "true" }) })
  ] })
] }));
Pc.displayName = "DialogContent";
function Zm({ className: e, ...t }) {
  return /* @__PURE__ */ m("div", { className: D("nb-dialog__header", e), ...t });
}
function Qm({ className: e, ...t }) {
  return /* @__PURE__ */ m("div", { className: D("nb-dialog__footer", e), ...t });
}
const Ec = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(zi, { ref: n, className: D("nb-dialog__title", e), ...t }));
Ec.displayName = "DialogTitle";
const Mc = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(Ui, { ref: n, className: D("nb-dialog__description", e), ...t }));
Mc.displayName = "DialogDescription";
const Jm = Fi, eh = Ni, th = dn, Zi = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(Hi, { ref: n, className: D("nb-drawer__overlay", e), ...t }));
Zi.displayName = "DrawerOverlay";
const Ic = Y(({ className: e, children: t, side: n = "right", hideClose: o = !1, ...r }, i) => /* @__PURE__ */ H(Vi, { children: [
  /* @__PURE__ */ m(Zi, {}),
  /* @__PURE__ */ H(
    Gi,
    {
      ref: i,
      className: D("nb-drawer__content", `nb-drawer__content--${n}`, e),
      ...r,
      children: [
        t,
        o ? null : /* @__PURE__ */ m(dn, { className: "nb-drawer__close", "aria-label": "Close drawer", children: /* @__PURE__ */ m(Yi, { size: 18, "aria-hidden": "true" }) })
      ]
    }
  )
] }));
Ic.displayName = "DrawerContent";
function nh({ className: e, ...t }) {
  return /* @__PURE__ */ m("div", { className: D("nb-drawer__header", e), ...t });
}
function oh({ className: e, ...t }) {
  return /* @__PURE__ */ m("div", { className: D("nb-drawer__footer", e), ...t });
}
const Dc = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(zi, { ref: n, className: D("nb-drawer__title", e), ...t }));
Dc.displayName = "DrawerTitle";
const Tc = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(Ui, { ref: n, className: D("nb-drawer__description", e), ...t }));
Tc.displayName = "DrawerDescription";
var Oc = Object.defineProperty, se = (e, t) => Oc(e, "name", { value: t, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function gn(e) {
  const t = e + "CollectionProvider", [n, o] = /* @__PURE__ */ Ie(t), [r, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = /* @__PURE__ */ se((v) => {
    const { scope: w, children: C } = v, y = u.useRef(null), S = u.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m(r, { scope: w, itemMap: S, collectionRef: y, children: C });
  }, "CollectionProvider");
  s.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Le(a), c = u.forwardRef(
    (v, w) => {
      const { scope: C, children: y } = v, S = i(a, C), _ = K(w, S.collectionRef);
      return /* @__PURE__ */ m(l, { ref: _, children: y });
    }
  );
  c.displayName = a;
  const g = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ Le(g), p = u.forwardRef(
    (v, w) => {
      const { scope: C, children: y, ...S } = v, _ = u.useRef(null), b = K(w, _), R = i(g, C);
      return u.useEffect(() => (R.itemMap.set(_, { ref: _, ...S }), () => {
        R.itemMap.delete(_);
      })), /* @__PURE__ */ m(f, { [d]: "", ref: b, children: y });
    }
  );
  p.displayName = g;
  function h(v) {
    const w = i(e + "CollectionConsumer", v);
    return u.useCallback(() => {
      const y = w.collectionRef.current;
      if (!y) return [];
      const S = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (R, x) => S.indexOf(R.ref.current) - S.indexOf(x.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return se(h, "useCollection"), [
    { Provider: s, Slot: c, ItemSlot: p },
    h,
    o
  ];
}
se(gn, "createCollection");
var Mr = /* @__PURE__ */ new WeakMap(), ne, we, Hn = (we = class extends Map {
  constructor(n) {
    super(n);
    gr(this, ne);
    An(this, ne, [...super.keys()]), Mr.set(this, !0);
  }
  set(n, o) {
    return Mr.get(this) && (this.has(n) ? ce(this, ne)[ce(this, ne).indexOf(n)] = n : ce(this, ne).push(n)), super.set(n, o), this;
  }
  insert(n, o, r) {
    const i = this.has(o), s = ce(this, ne).length, a = No(n);
    let l = a >= 0 ? a : s + a;
    const c = l < 0 || l >= s ? -1 : l;
    if (c === this.size || i && c === this.size - 1 || c === -1)
      return this.set(o, r), this;
    const g = this.size + (i ? 0 : 1);
    a < 0 && l++;
    const d = [...ce(this, ne)];
    let f, p = !1;
    for (let h = l; h < g; h++)
      if (l === h) {
        let v = d[h];
        d[h] === o && (v = d[h + 1]), i && this.delete(o), f = this.get(v), this.set(o, r);
      } else {
        !p && d[h - 1] === o && (p = !0);
        const v = d[p ? h : h - 1], w = f;
        f = this.get(v), this.delete(v), this.set(v, w);
      }
    return this;
  }
  with(n, o, r) {
    const i = new we(this);
    return i.insert(n, o, r), i;
  }
  before(n) {
    const o = ce(this, ne).indexOf(n) - 1;
    if (!(o < 0))
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position before the given key.
   */
  setBefore(n, o, r) {
    const i = ce(this, ne).indexOf(n);
    return i === -1 ? this : this.insert(i, o, r);
  }
  after(n) {
    let o = ce(this, ne).indexOf(n);
    if (o = o === -1 || o === this.size - 1 ? -1 : o + 1, o !== -1)
      return this.entryAt(o);
  }
  /**
   * Sets a new key-value pair at the position after the given key.
   */
  setAfter(n, o, r) {
    const i = ce(this, ne).indexOf(n);
    return i === -1 ? this : this.insert(i + 1, o, r);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return An(this, ne, []), super.clear();
  }
  delete(n) {
    const o = super.delete(n);
    return o && ce(this, ne).splice(ce(this, ne).indexOf(n), 1), o;
  }
  deleteAt(n) {
    const o = this.keyAt(n);
    return o !== void 0 ? this.delete(o) : !1;
  }
  at(n) {
    const o = en(ce(this, ne), n);
    if (o !== void 0)
      return this.get(o);
  }
  entryAt(n) {
    const o = en(ce(this, ne), n);
    if (o !== void 0)
      return [o, this.get(o)];
  }
  indexOf(n) {
    return ce(this, ne).indexOf(n);
  }
  keyAt(n) {
    return en(ce(this, ne), n);
  }
  from(n, o) {
    const r = this.indexOf(n);
    if (r === -1)
      return;
    let i = r + o;
    return i < 0 && (i = 0), i >= this.size && (i = this.size - 1), this.at(i);
  }
  keyFrom(n, o) {
    const r = this.indexOf(n);
    if (r === -1)
      return;
    let i = r + o;
    return i < 0 && (i = 0), i >= this.size && (i = this.size - 1), this.keyAt(i);
  }
  find(n, o) {
    let r = 0;
    for (const i of this) {
      if (Reflect.apply(n, o, [i, r, this]))
        return i;
      r++;
    }
  }
  findIndex(n, o) {
    let r = 0;
    for (const i of this) {
      if (Reflect.apply(n, o, [i, r, this]))
        return r;
      r++;
    }
    return -1;
  }
  filter(n, o) {
    const r = [];
    let i = 0;
    for (const s of this)
      Reflect.apply(n, o, [s, i, this]) && r.push(s), i++;
    return new we(r);
  }
  map(n, o) {
    const r = [];
    let i = 0;
    for (const s of this)
      r.push([s[0], Reflect.apply(n, o, [s, i, this])]), i++;
    return new we(r);
  }
  reduce(...n) {
    const [o, r] = n;
    let i = 0, s = r ?? this.at(0);
    for (const a of this)
      i === 0 && n.length === 1 ? s = a : s = Reflect.apply(o, this, [s, a, i, this]), i++;
    return s;
  }
  reduceRight(...n) {
    const [o, r] = n;
    let i = r ?? this.at(-1);
    for (let s = this.size - 1; s >= 0; s--) {
      const a = this.at(s);
      s === this.size - 1 && n.length === 1 ? i = a : i = Reflect.apply(o, this, [i, a, s, this]);
    }
    return i;
  }
  toSorted(n) {
    const o = [...this.entries()].sort(n);
    return new we(o);
  }
  toReversed() {
    const n = new we();
    for (let o = this.size - 1; o >= 0; o--) {
      const r = this.keyAt(o), i = this.get(r);
      n.set(r, i);
    }
    return n;
  }
  toSpliced(...n) {
    const o = [...this.entries()];
    return o.splice(...n), new we(o);
  }
  slice(n, o) {
    const r = new we();
    let i = this.size - 1;
    if (n === void 0)
      return r;
    n < 0 && (n = n + this.size), o !== void 0 && o > 0 && (i = o - 1);
    for (let s = n; s <= i; s++) {
      const a = this.keyAt(s), l = this.get(a);
      r.set(a, l);
    }
    return r;
  }
  every(n, o) {
    let r = 0;
    for (const i of this) {
      if (!Reflect.apply(n, o, [i, r, this]))
        return !1;
      r++;
    }
    return !0;
  }
  some(n, o) {
    let r = 0;
    for (const i of this) {
      if (Reflect.apply(n, o, [i, r, this]))
        return !0;
      r++;
    }
    return !1;
  }
}, ne = new WeakMap(), se(we, "OrderedDict"), we);
function en(e, t) {
  if ("at" in Array.prototype)
    return Array.prototype.at.call(e, t);
  const n = Qi(e, t);
  return n === -1 ? void 0 : e[n];
}
se(en, "at");
function Qi(e, t) {
  const n = e.length, o = No(t), r = o >= 0 ? o : n + o;
  return r < 0 || r >= n ? -1 : r;
}
se(Qi, "toSafeIndex");
function No(e) {
  return e !== e || e === 0 ? 0 : Math.trunc(e);
}
se(No, "toSafeInteger");
// @__NO_SIDE_EFFECTS__
function Ac(e) {
  const t = e + "CollectionProvider", [n, o] = /* @__PURE__ */ Ie(t), [r, i] = n(
    t,
    {
      collectionElement: null,
      collectionRef: { current: null },
      collectionRefObject: { current: null },
      itemMap: new Hn(),
      setItemMap: /* @__PURE__ */ se(() => {
      }, "setItemMap")
    }
  ), s = /* @__PURE__ */ se(({ state: S, ..._ }) => S ? /* @__PURE__ */ m(l, { ..._, state: S }) : /* @__PURE__ */ m(a, { ..._ }), "CollectionProvider");
  s.displayName = t;
  const a = /* @__PURE__ */ se((S) => {
    const _ = w();
    return /* @__PURE__ */ m(l, { ...S, state: _ });
  }, "CollectionInit");
  a.displayName = t + "Init";
  const l = /* @__PURE__ */ se((S) => {
    const { scope: _, children: b, state: R } = S, x = u.useRef(null), [I, E] = u.useState(
      null
    ), A = K(x, E), [$, O] = R;
    return u.useEffect(() => {
      if (!I) return;
      const N = ts(() => {
      });
      return N.observe(I, {
        childList: !0,
        subtree: !0
      }), () => {
        N.disconnect();
      };
    }, [I]), /* @__PURE__ */ m(
      r,
      {
        scope: _,
        itemMap: $,
        setItemMap: O,
        collectionRef: A,
        collectionRefObject: x,
        collectionElement: I,
        children: b
      }
    );
  }, "CollectionProviderImpl");
  l.displayName = t + "Impl";
  const c = e + "CollectionSlot", g = /* @__PURE__ */ Le(c), d = u.forwardRef(
    (S, _) => {
      const { scope: b, children: R } = S, x = i(c, b), I = K(_, x.collectionRef);
      return /* @__PURE__ */ m(g, { ref: I, children: R });
    }
  );
  d.displayName = c;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", h = /* @__PURE__ */ Le(f), v = u.forwardRef(
    (S, _) => {
      const { scope: b, children: R, ...x } = S, I = u.useRef(null), [E, A] = u.useState(null), $ = K(_, I, A), O = i(f, b), { setItemMap: N } = O, G = u.useRef(x);
      Ji(G.current, x) || (G.current = x);
      const q = G.current;
      return u.useEffect(() => {
        const B = q;
        return N((k) => E ? k.has(E) ? k.set(E, { ...B, element: E }).toSorted(go) : (k.set(E, { ...B, element: E }), k.toSorted(go)) : k), () => {
          N((k) => !E || !k.has(E) ? k : (k.delete(E), new Hn(k)));
        };
      }, [E, q, N]), /* @__PURE__ */ m(h, { [p]: "", ref: $, children: R });
    }
  );
  v.displayName = f;
  function w() {
    return u.useState(new Hn());
  }
  se(w, "useInitCollection");
  function C(S) {
    const { itemMap: _ } = i(e + "CollectionConsumer", S);
    return _;
  }
  return se(C, "useCollection"), [
    { Provider: s, Slot: d, ItemSlot: v },
    {
      createCollectionScope: o,
      useCollection: C,
      useInitCollection: w
    }
  ];
}
se(Ac, "createCollection");
function Ji(e, t) {
  if (e === t) return !0;
  if (typeof e != "object" || typeof t != "object" || e == null || t == null) return !1;
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  for (const r of n)
    if (!Object.prototype.hasOwnProperty.call(t, r) || e[r] !== t[r]) return !1;
  return !0;
}
se(Ji, "shallowEqual");
function es(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
se(es, "isElementPreceding");
function go(e, t) {
  return !e[1].element || !t[1].element ? 0 : es(e[1].element, t[1].element) ? -1 : 1;
}
se(go, "sortByDocumentPosition");
function ts(e) {
  return new MutationObserver((n) => {
    for (const o of n)
      if (o.type === "childList") {
        e();
        return;
      }
  });
}
se(ts, "getChildListObserver");
var Lc = Object.defineProperty, Fc = (e, t) => Lc(e, "name", { value: t, configurable: !0 }), Nc = u.createContext(void 0);
function Nt(e) {
  const t = u.useContext(Nc);
  return e || t || "ltr";
}
Fc(Nt, "useDirection");
const $c = ["top", "right", "bottom", "left"], Xe = Math.min, Be = Math.max, nn = Math.round, Wt = Math.floor, ze = (e) => ({
  x: e,
  y: e
}), kc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ns(e, t, n) {
  return Be(e, Xe(t, n));
}
function Ke(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ze(e) {
  return e.split("-")[0];
}
function St(e) {
  return e.split("-")[1];
}
function $o(e) {
  return e === "x" ? "y" : "x";
}
function ko(e) {
  return e === "y" ? "height" : "width";
}
function Ae(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Vo(e) {
  return $o(Ae(e));
}
function Vc(e, t, n) {
  n === void 0 && (n = !1);
  const o = St(e), r = Vo(e), i = ko(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = on(s)), [s, on(s)];
}
function Hc(e) {
  const t = on(e);
  return [po(e), t, po(t)];
}
function po(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Ir = ["left", "right"], Dr = ["right", "left"], Gc = ["top", "bottom"], Bc = ["bottom", "top"];
function zc(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Dr : Ir : t ? Ir : Dr;
    case "left":
    case "right":
      return t ? Gc : Bc;
    default:
      return [];
  }
}
function Uc(e, t, n, o) {
  const r = St(e);
  let i = zc(Ze(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(po)))), i;
}
function on(e) {
  const t = Ze(e);
  return kc[t] + e.slice(t.length);
}
function jc(e) {
  var t, n, o, r;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (o = e.bottom) != null ? o : 0,
    left: (r = e.left) != null ? r : 0
  };
}
function os(e) {
  return typeof e != "number" ? jc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function rn(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Tr(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = Ae(t), s = Vo(t), a = ko(s), l = Ze(t), c = i === "y", g = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, f = o[a] / 2 - r[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: g,
        y: o.y - r.height
      };
      break;
    case "bottom":
      p = {
        x: g,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: o.x - r.width,
        y: d
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  const h = St(t);
  return h && (p[s] += f * (h === "end" ? 1 : -1) * (n && c ? -1 : 1)), p;
}
async function Wc(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: g = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = Ke(t, e), h = os(p), w = a[f ? d === "floating" ? "reference" : "floating" : d], C = rn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: g,
    strategy: l
  })), y = d === "floating" ? {
    x: o,
    y: r,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), _ = await (i.isElement == null ? void 0 : i.isElement(S)) && await (i.getScale == null ? void 0 : i.getScale(S)) || {
    x: 1,
    y: 1
  }, b = rn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: S,
    strategy: l
  }) : y);
  return {
    top: (C.top - b.top + h.top) / _.y,
    bottom: (b.bottom - C.bottom + h.bottom) / _.y,
    left: (C.left - b.left + h.left) / _.x,
    right: (b.right - C.right + h.right) / _.x
  };
}
const Kc = 50, qc = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Wc
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: g,
    y: d
  } = Tr(c, o, l), f = o, p = 0;
  const h = {};
  for (let v = 0; v < i.length; v++) {
    const w = i[v];
    if (!w)
      continue;
    const {
      name: C,
      fn: y
    } = w, {
      x: S,
      y: _,
      data: b,
      reset: R
    } = await y({
      x: g,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: r,
      middlewareData: h,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    g = S ?? g, d = _ ?? d, h[C] = {
      ...h[C],
      ...b
    }, R && p < Kc && (p++, typeof R == "object" && (R.placement && (f = R.placement), R.rects && (c = R.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : R.rects), {
      x: g,
      y: d
    } = Tr(c, f, l)), v = -1);
  }
  return {
    x: g,
    y: d,
    placement: f,
    strategy: r,
    middlewareData: h
  };
}, Yc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: g = 0
    } = Ke(e, t) || {};
    if (c == null)
      return {};
    const d = os(g), f = {
      x: n,
      y: o
    }, p = Vo(r), h = ko(p), v = await s.getDimensions(c), w = p === "y", C = w ? "top" : "left", y = w ? "bottom" : "right", S = w ? "clientHeight" : "clientWidth", _ = i.reference[h] + i.reference[p] - f[p] - i.floating[h], b = f[p] - i.reference[p], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let x = R ? R[S] : 0;
    (!x || !await (s.isElement == null ? void 0 : s.isElement(R))) && (x = a.floating[S] || i.floating[h]);
    const I = _ / 2 - b / 2, E = x / 2 - v[h] / 2 - 1, A = Xe(d[C], E), $ = Xe(d[y], E), O = x - v[h] - $, N = x / 2 - v[h] / 2 + I, G = ns(A, N, O), q = !l.arrow && St(r) != null && N !== G && i.reference[h] / 2 - (N < A ? A : $) - v[h] / 2 < 0, B = q ? N < A ? N - A : N - O : 0;
    return {
      [p]: f[p] + B,
      data: {
        [p]: G,
        centerOffset: N - G - B,
        ...q && {
          alignmentOffset: B
        }
      },
      reset: q
    };
  }
}), Xc = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: g = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: v = !0,
        ...w
      } = Ke(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const C = Ze(r), y = Ae(a), S = Ze(a) === a, _ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), b = f || (S || !v ? [on(a)] : Hc(a)), R = h !== "none";
      !f && R && b.push(...Uc(a, v, h, _));
      const x = [a, ...b], I = await l.detectOverflow(t, w), E = [];
      let A = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (g && E.push(I[C]), d) {
        const G = Vc(r, s, _);
        E.push(I[G[0]], I[G[1]]);
      }
      if (A = [...A, {
        placement: r,
        overflows: E
      }], !E.every((G) => G <= 0)) {
        var $, O;
        const G = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, q = x[G];
        if (q && (!(d === "alignment" ? y !== Ae(q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        A.every((V) => Ae(V.placement) === y ? V.overflows[0] > 0 : !0)))
          return {
            data: {
              index: G,
              overflows: A
            },
            reset: {
              placement: q
            }
          };
        let B = (O = A.filter((k) => k.overflows[0] <= 0).sort((k, V) => k.overflows[1] - V.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!B)
          switch (p) {
            case "bestFit": {
              var N;
              const k = (N = A.filter((V) => {
                if (R) {
                  const U = Ae(V.placement);
                  return U === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((V) => [V.placement, V.overflows.filter((U) => U > 0).reduce((U, M) => U + M, 0)]).sort((V, U) => V[1] - U[1])[0]) == null ? void 0 : N[0];
              k && (B = k);
              break;
            }
            case "initialPlacement":
              B = a;
              break;
          }
        if (r !== B)
          return {
            reset: {
              placement: B
            }
          };
      }
      return {};
    }
  };
};
function Or(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ar(e) {
  return $c.some((t) => e[t] >= 0);
}
const Zc = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: o
      } = t, {
        strategy: r = "referenceHidden",
        ...i
      } = Ke(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await o.detectOverflow(t, {
            ...i,
            elementContext: "reference"
          }), a = Or(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Ar(a)
            }
          };
        }
        case "escaped": {
          const s = await o.detectOverflow(t, {
            ...i,
            altBoundary: !0
          }), a = Or(s, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Ar(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, rs = /* @__PURE__ */ new Set(["left", "top"]);
async function Qc(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = Ze(n), a = St(n), l = Ae(n) === "y", c = rs.has(s) ? -1 : 1, g = i && l ? -1 : 1, d = Ke(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof h == "number" && (p = a === "end" ? h * -1 : h), l ? {
    x: p * g,
    y: f * c
  } : {
    x: f * c,
    y: p * g
  };
}
const Jc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await Qc(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (o = a.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, eu = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        platform: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: a = !1,
        limiter: l = {
          fn: (y) => {
            let {
              x: S,
              y: _
            } = y;
            return {
              x: S,
              y: _
            };
          }
        },
        ...c
      } = Ke(e, t), g = {
        x: n,
        y: o
      }, d = await i.detectOverflow(t, c), f = Ae(r), p = $o(f);
      let h = g[p], v = g[f];
      const w = (y, S) => ns(S + d[y === "y" ? "top" : "left"], S, S - d[y === "y" ? "bottom" : "right"]);
      s && (h = w(p, h)), a && (v = w(f, v));
      const C = l.fn({
        ...t,
        [p]: h,
        [f]: v
      });
      return {
        ...C,
        data: {
          x: C.x - n,
          y: C.y - o,
          enabled: {
            [p]: s,
            [f]: a
          }
        }
      };
    }
  };
}, tu = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: s,
        rects: a,
        middlewareData: l
      } = t, {
        offset: c = 0,
        mainAxis: g = !0,
        crossAxis: d = !0
      } = Ke(e, t), f = {
        x: r,
        y: i
      }, p = Ae(s), h = $o(p);
      let v = f[h], w = f[p];
      const C = Ke(c, t), y = typeof C == "number" ? {
        mainAxis: C,
        crossAxis: 0
      } : {
        mainAxis: (n = C.mainAxis) != null ? n : 0,
        crossAxis: (o = C.crossAxis) != null ? o : 0
      };
      if (g) {
        const b = h === "y" ? "height" : "width", R = a.reference[h] - a.floating[b] + y.mainAxis, x = a.reference[h] + a.reference[b] - y.mainAxis;
        v < R ? v = R : v > x && (v = x);
      }
      if (d) {
        var S, _;
        const b = h === "y" ? "width" : "height", R = rs.has(Ze(s)), x = a.reference[p] - a.floating[b] + (R && ((S = l.offset) == null ? void 0 : S[p]) || 0) + (R ? 0 : y.crossAxis), I = a.reference[p] + a.reference[b] + (R ? 0 : ((_ = l.offset) == null ? void 0 : _[p]) || 0) - (R ? y.crossAxis : 0);
        w < x ? w = x : w > I && (w = I);
      }
      return {
        [h]: v,
        [p]: w
      };
    }
  };
}, nu = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: i
      } = t, {
        apply: s = () => {
        },
        ...a
      } = Ke(e, t), l = await r.detectOverflow(t, a), c = Ze(n), g = St(n), d = Ae(n) === "y", {
        width: f,
        height: p
      } = o.floating;
      let h, v;
      c === "top" || c === "bottom" ? (h = c, v = g === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (v = c, h = g === "end" ? "top" : "bottom");
      const w = p - l.top - l.bottom, C = f - l.left - l.right, y = Xe(p - l[h], w), S = Xe(f - l[v], C), _ = t.middlewareData.shift, b = !_;
      let R = y, x = S;
      _ != null && _.enabled.x && (x = C), _ != null && _.enabled.y && (R = w), b && !g && (d ? x = f - 2 * Be(l.left, l.right) : R = p - 2 * Be(l.top, l.bottom)), await s({
        ...t,
        availableWidth: x,
        availableHeight: R
      });
      const I = await r.getDimensions(i.floating);
      return f !== I.width || p !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function pn() {
  return typeof window < "u";
}
function yt(e) {
  return is(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function me(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qe(e) {
  var t;
  return (t = (is(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function is(e) {
  return pn() ? e instanceof Node || e instanceof me(e).Node : !1;
}
function Fe(e) {
  return pn() ? e instanceof Element || e instanceof me(e).Element : !1;
}
function Je(e) {
  return pn() ? e instanceof HTMLElement || e instanceof me(e).HTMLElement : !1;
}
function Lr(e) {
  return !pn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof me(e).ShadowRoot;
}
function mn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = Ne(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && r !== "inline" && r !== "contents";
}
function ou(e) {
  return /^(table|td|th)$/.test(yt(e));
}
function hn(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const ru = /transform|translate|scale|rotate|perspective|filter/, iu = /paint|layout|strict|content/, nt = (e) => !!e && e !== "none";
let Gn;
function Ho(e) {
  const t = Fe(e) ? Ne(e) : e;
  return nt(t.transform) || nt(t.translate) || nt(t.scale) || nt(t.rotate) || nt(t.perspective) || !Go() && (nt(t.backdropFilter) || nt(t.filter)) || ru.test(t.willChange || "") || iu.test(t.contain || "");
}
function su(e) {
  let t = ot(e);
  for (; Je(t) && !Et(t); ) {
    if (Ho(t))
      return t;
    if (hn(t))
      return null;
    t = ot(t);
  }
  return null;
}
function Go() {
  return Gn == null && (Gn = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Gn;
}
function Et(e) {
  return /^(html|body|#document)$/.test(yt(e));
}
function Ne(e) {
  return me(e).getComputedStyle(e);
}
function vn(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ot(e) {
  if (yt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Lr(e) && e.host || // Fallback.
    qe(e)
  );
  return Lr(t) ? t.host : t;
}
function ss(e) {
  const t = ot(e);
  return Et(t) ? (e.ownerDocument || e).body : Je(t) && mn(t) ? t : ss(t);
}
function Mt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = ss(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = me(r);
  if (i) {
    const a = mo(s);
    return t.concat(s, s.visualViewport || [], mn(r) ? r : [], a && n ? Mt(a) : []);
  } else
    return t.concat(r, Mt(r, [], n));
}
function mo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function as(e) {
  const t = Ne(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = Je(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, a = nn(n) !== i || nn(o) !== s;
  return a && (n = i, o = s), {
    width: n,
    height: o,
    $: a
  };
}
function Bo(e) {
  return Fe(e) ? e : e.contextElement;
}
function ht(e) {
  const t = Bo(e);
  if (!Je(t))
    return ze(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = as(t);
  let s = (i ? nn(n.width) : n.width) / o, a = (i ? nn(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const au = /* @__PURE__ */ ze(0);
function ls(e) {
  const t = me(e);
  return !Go() || !t.visualViewport ? au : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function lu(e, t, n) {
  return t === void 0 && (t = !1), !!n && t && n === me(e);
}
function rt(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = Bo(e);
  let s = ze(1);
  t && (o ? Fe(o) && (s = ht(o)) : s = ht(e));
  const a = lu(i, n, o) ? ls(i) : ze(0);
  let l = (r.left + a.x) / s.x, c = (r.top + a.y) / s.y, g = r.width / s.x, d = r.height / s.y;
  if (i && o) {
    const f = me(i), p = Fe(o) ? me(o) : o;
    let h = f, v = mo(h);
    for (; v && p !== h; ) {
      const w = ht(v), C = v.getBoundingClientRect(), y = Ne(v), S = C.left + (v.clientLeft + parseFloat(y.paddingLeft)) * w.x, _ = C.top + (v.clientTop + parseFloat(y.paddingTop)) * w.y;
      l *= w.x, c *= w.y, g *= w.x, d *= w.y, l += S, c += _, h = me(v), v = mo(h);
    }
  }
  return rn({
    width: g,
    height: d,
    x: l,
    y: c
  });
}
function wn(e, t) {
  const n = vn(e).scrollLeft;
  return t ? t.left + n : rt(qe(e)).left + n;
}
function cs(e, t) {
  const n = e.getBoundingClientRect(), o = n.left + t.scrollLeft - wn(e, n), r = n.top + t.scrollTop;
  return {
    x: o,
    y: r
  };
}
function cu(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", s = qe(o), a = t ? hn(t.floating) : !1;
  if (o === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = ze(1);
  const g = ze(0), d = Je(o);
  if ((d || !i) && ((yt(o) !== "body" || mn(s)) && (l = vn(o)), d)) {
    const p = rt(o);
    c = ht(o), g.x = p.x + o.clientLeft, g.y = p.y + o.clientTop;
  }
  const f = s && !d && !i ? cs(s, l) : ze(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + g.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + g.y + f.y
  };
}
function uu(e) {
  return e.getClientRects ? Array.from(e.getClientRects()) : [];
}
function du(e) {
  const t = vn(e), n = e.ownerDocument.body, o = Be(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), r = Be(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let i = -t.scrollLeft + wn(e);
  const s = -t.scrollTop;
  return Ne(n).direction === "rtl" && (i += Be(e.clientWidth, n.clientWidth) - o), {
    width: o,
    height: r,
    x: i,
    y: s
  };
}
const fu = 25;
function gu(e, t, n) {
  n === void 0 && (n = "viewport");
  const o = n === "layoutViewport", r = me(e), i = qe(e), s = r.visualViewport;
  let a = i.clientWidth, l = i.clientHeight, c = 0, g = 0;
  if (s) {
    const f = !Go() || t === "fixed";
    o ? f || (c = -s.offsetLeft, g = -s.offsetTop) : (a = s.width, l = s.height, f && (c = s.offsetLeft, g = s.offsetTop));
  }
  if (wn(i) <= 0) {
    const f = i.ownerDocument, p = f.body, h = getComputedStyle(p), v = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, w = Math.abs(i.clientWidth - p.clientWidth - v), C = getComputedStyle(i).scrollbarGutter === "stable both-edges" ? w / 2 : w;
    C <= fu && (a -= C);
  }
  return {
    width: a,
    height: l,
    x: c,
    y: g
  };
}
function pu(e, t) {
  const n = rt(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = ht(e), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = r * i.x, c = o * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Fr(e, t, n) {
  let o;
  if (t === "viewport" || t === "layoutViewport")
    o = gu(e, n, t);
  else if (t === "document")
    o = du(qe(e));
  else if (Fe(t))
    o = pu(t, n);
  else {
    const r = ls(e);
    o = {
      x: t.x - r.x,
      y: t.y - r.y,
      width: t.width,
      height: t.height
    };
  }
  return rn(o);
}
function mu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Mt(e, [], !1).filter((a) => Fe(a) && yt(a) !== "body"), r = null;
  const i = Ne(e).position === "fixed";
  let s = i ? ot(e) : e;
  for (; Fe(s) && !Et(s); ) {
    const a = Ne(s), l = Ho(s), c = r ? r.position : i ? "fixed" : "";
    !l && (c === "fixed" || c === "absolute" && a.position === "static") ? o = o.filter((d) => d !== s) : r = a, s = ot(s);
  }
  return t.set(e, o), o;
}
function hu(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const s = [...n === "clippingAncestors" ? hn(t) ? [] : mu(t, this._c) : [].concat(n), o], a = Fr(t, s[0], r);
  let l = a.top, c = a.right, g = a.bottom, d = a.left;
  for (let f = 1; f < s.length; f++) {
    const p = Fr(t, s[f], r);
    l = Be(p.top, l), c = Xe(p.right, c), g = Xe(p.bottom, g), d = Be(p.left, d);
  }
  return {
    width: c - d,
    height: g - l,
    x: d,
    y: l
  };
}
function vu(e) {
  const {
    width: t,
    height: n
  } = as(e);
  return {
    width: t,
    height: n
  };
}
function wu(e, t, n) {
  const o = Je(t), r = qe(t), i = n === "fixed", s = rt(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = ze(0);
  if ((o || !i) && ((yt(t) !== "body" || mn(r)) && (a = vn(t)), o)) {
    const f = rt(t, !0, i, t);
    l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
  }
  !o && r && (l.x = wn(r));
  const c = r && !o && !i ? cs(r, a) : ze(0), g = s.left + a.scrollLeft - l.x - c.x, d = s.top + a.scrollTop - l.y - c.y;
  return {
    x: g,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Bn(e) {
  return Ne(e).position === "static";
}
function Nr(e, t) {
  if (!Je(e) || Ne(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return qe(e) === n && (n = n.ownerDocument.body), n;
}
function us(e, t) {
  const n = me(e);
  if (hn(e))
    return n;
  if (!Je(e)) {
    let r = ot(e);
    for (; r && !Et(r); ) {
      if (Fe(r) && !Bn(r))
        return r;
      r = ot(r);
    }
    return n;
  }
  let o = Nr(e, t);
  for (; o && ou(o) && Bn(o); )
    o = Nr(o, t);
  return o && Et(o) && Bn(o) && !Ho(o) ? n : o || su(e) || n;
}
const Cu = async function(e) {
  const t = this.getOffsetParent || us, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: wu(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function Su(e) {
  return Ne(e).direction === "rtl";
}
const yu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cu,
  getDocumentElement: qe,
  getClippingRect: hu,
  getOffsetParent: us,
  getElementRects: Cu,
  getClientRects: uu,
  getDimensions: vu,
  getScale: ht,
  isElement: Fe,
  isRTL: Su
};
function ds(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function _u(e, t, n) {
  let o = null, r;
  const i = qe(e);
  function s() {
    var g;
    clearTimeout(r), (g = o) == null || g.disconnect(), o = null;
  }
  function a(g, d) {
    g === void 0 && (g = !1), d === void 0 && (d = 1), s();
    const f = e.getBoundingClientRect(), {
      left: p,
      top: h,
      width: v,
      height: w
    } = f;
    if (g || t(), !v || !w)
      return;
    const C = Wt(h), y = Wt(i.clientWidth - (p + v)), S = Wt(i.clientHeight - (h + w)), _ = Wt(p), R = {
      rootMargin: -C + "px " + -y + "px " + -S + "px " + -_ + "px",
      threshold: Be(0, Xe(1, d)) || 1
    };
    let x = !0;
    function I(E) {
      const A = E[0].intersectionRatio;
      if (!ds(f, e.getBoundingClientRect()))
        return a();
      if (A !== d) {
        if (!x)
          return a();
        A ? a(!1, A) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      x = !1;
    }
    try {
      o = new IntersectionObserver(I, {
        ...R,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      o = new IntersectionObserver(I, R);
    }
    o.observe(e);
  }
  const l = me(e), c = () => a(n);
  return l.addEventListener("resize", c), a(!0), () => {
    l.removeEventListener("resize", c), s();
  };
}
function bu(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, c = Bo(e), g = r || i ? [...c ? Mt(c) : [], ...t ? Mt(t) : []] : [];
  g.forEach((C) => {
    r && C.addEventListener("scroll", n), i && C.addEventListener("resize", n);
  });
  const d = c && a ? _u(c, n, i) : null;
  let f = -1, p = null;
  s && (p = new ResizeObserver((C) => {
    let [y] = C;
    y && y.target === c && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var S;
      (S = p) == null || S.observe(t);
    })), n();
  }), c && !l && p.observe(c), t && p.observe(t));
  let h, v = l ? rt(e) : null;
  l && w();
  function w() {
    const C = rt(e);
    v && !ds(v, C) && n(), v = C, h = requestAnimationFrame(w);
  }
  return n(), () => {
    var C;
    g.forEach((y) => {
      r && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), d?.(), (C = p) == null || C.disconnect(), p = null, l && cancelAnimationFrame(h);
  };
}
const Ru = Jc, xu = eu, Pu = Xc, Eu = nu, Mu = Zc, $r = Yc, Iu = tu, Du = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = n ?? {}, i = {
    ...yu,
    ...r.platform,
    _c: o
  };
  return qc(e, t, {
    ...r,
    platform: i
  });
};
var Tu = typeof document < "u", Ou = function() {
}, tn = Tu ? ba : Ou;
function sn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (o = n; o-- !== 0; )
        if (!sn(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !sn(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function fs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function kr(e, t) {
  const n = fs(e);
  return Math.round(t * n) / n;
}
function zn(e) {
  const t = u.useRef(e);
  return tn(() => {
    t.current = e;
  }), t;
}
function Au(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: s
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: c
  } = e, [g, d] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = u.useState(o);
  sn(f, o) || p(o);
  const [h, v] = u.useState(null), [w, C] = u.useState(null), y = u.useCallback((V) => {
    V !== R.current && (R.current = V, v(V));
  }, []), S = u.useCallback((V) => {
    V !== x.current && (x.current = V, C(V));
  }, []), _ = i || h, b = s || w, R = u.useRef(null), x = u.useRef(null), I = u.useRef(g), E = l != null, A = zn(l), $ = zn(r), O = zn(c), N = u.useCallback(() => {
    if (!R.current || !x.current)
      return;
    const V = {
      placement: t,
      strategy: n,
      middleware: f
    };
    $.current && (V.platform = $.current), Du(R.current, x.current, V).then((U) => {
      const M = {
        ...U,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: O.current !== !1
      };
      G.current && !sn(I.current, M) && (I.current = M, At.flushSync(() => {
        d(M);
      }));
    });
  }, [f, t, n, $, O]);
  tn(() => {
    c === !1 && I.current.isPositioned && (I.current.isPositioned = !1, d((V) => ({
      ...V,
      isPositioned: !1
    })));
  }, [c]);
  const G = u.useRef(!1);
  tn(() => (G.current = !0, () => {
    G.current = !1;
  }), []), tn(() => {
    if (_ && (R.current = _), b && (x.current = b), _ && b) {
      if (A.current)
        return A.current(_, b, N);
      N();
    }
  }, [_, b, N, A, E]);
  const q = u.useMemo(() => ({
    reference: R,
    floating: x,
    setReference: y,
    setFloating: S
  }), [y, S]), B = u.useMemo(() => ({
    reference: _,
    floating: b
  }), [_, b]), k = u.useMemo(() => {
    const V = {
      position: n,
      left: 0,
      top: 0
    };
    if (!B.floating)
      return V;
    const U = kr(B.floating, g.x), M = kr(B.floating, g.y);
    return a ? {
      ...V,
      transform: "translate(" + U + "px, " + M + "px)",
      ...fs(B.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: M
    };
  }, [n, a, B.floating, g.x, g.y]);
  return u.useMemo(() => ({
    ...g,
    update: N,
    refs: q,
    elements: B,
    floatingStyles: k
  }), [g, N, q, B, k]);
}
const Lu = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? $r({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? $r({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
}, Fu = (e, t) => {
  const n = Ru(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Nu = (e, t) => {
  const n = xu(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, $u = (e, t) => ({
  fn: Iu(e).fn,
  options: [e, t]
}), ku = (e, t) => {
  const n = Pu(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Vu = (e, t) => {
  const n = Eu(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Hu = (e, t) => {
  const n = Mu(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Gu = (e, t) => {
  const n = Lu(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Bu = Object.defineProperty, zu = (e, t) => Bu(e, "name", { value: t, configurable: !0 }), Uu = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ zu(function(t, n) {
    const { children: o, width: r = 10, height: i = 5, ...s } = t;
    return /* @__PURE__ */ m(
      z.svg,
      {
        ...s,
        ref: n,
        width: r,
        height: i,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: t.asChild ? o : /* @__PURE__ */ m("polygon", { points: "0,0 30,0 15,10" })
      }
    );
  }, "Arrow")
), ju = Uu, Wu = Object.defineProperty, Ku = (e, t) => Wu(e, "name", { value: t, configurable: !0 });
function gs(e) {
  const [t, n] = u.useState(void 0);
  return ee(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let s, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          s = c.inlineSize, a = c.blockSize;
        } else
          s = e.offsetWidth, a = e.offsetHeight;
        n({ width: s, height: a });
      });
      return o.observe(e, { box: "border-box" }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
Ku(gs, "useSize");
var qu = Object.defineProperty, Ue = (e, t) => qu(e, "name", { value: t, configurable: !0 }), ps = "Popper", [ms, _t] = /* @__PURE__ */ Ie(ps), [Yu, hs] = ms(ps), Xu = /* @__PURE__ */ Ue((e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = u.useState(null), [i, s] = u.useState(void 0);
  return /* @__PURE__ */ m(
    Yu,
    {
      scope: t,
      anchor: o,
      onAnchorChange: r,
      placementState: i,
      setPlacementState: s,
      children: n
    }
  );
}, "Popper"), Zu = "PopperAnchor", Qu = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ Ue(function(t, n) {
    const { __scopePopper: o, virtualRef: r, ...i } = t, s = hs(Zu, o), a = u.useRef(null), l = s.onAnchorChange, c = u.useCallback(
      (v) => {
        a.current = v, v && l(v);
      },
      [l]
    ), g = K(n, c), d = u.useRef(null);
    u.useEffect(() => {
      if (!r)
        return;
      const v = d.current;
      d.current = r.current, v !== d.current && l(d.current);
    });
    const f = s.placementState && Cn(s.placementState), p = f?.[0], h = f?.[1];
    return r ? null : /* @__PURE__ */ m(
      z.div,
      {
        "data-radix-popper-side": p,
        "data-radix-popper-align": h,
        ...i,
        ref: g
      }
    );
  }, "PopperAnchor")
), vs = "PopperContent", [Ju, ed] = ms(vs), td = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ Ue(function(t, n) {
    const {
      __scopePopper: o,
      side: r = "bottom",
      sideOffset: i = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: l = 0,
      avoidCollisions: c = !0,
      collisionBoundary: g = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: v,
      ...w
    } = t, C = hs(vs, o), [y, S] = u.useState(null), _ = K(n, S), [b, R] = u.useState(null), x = gs(b), I = x?.width ?? 0, E = x?.height ?? 0, A = r + (s !== "center" ? "-" + s : ""), $ = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, O = Array.isArray(g) ? g : [g], N = O.length > 0, G = {
      padding: $,
      boundary: O.filter(ws),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: q, floatingStyles: B, placement: k, isPositioned: V, middlewareData: U } = Au({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: A,
      whileElementsMounted: /* @__PURE__ */ Ue((...X) => bu(...X, {
        animationFrame: h === "always"
      }), "whileElementsMounted"),
      elements: {
        reference: C.anchor
      },
      middleware: [
        Fu({ mainAxis: i + E, alignmentAxis: a }),
        c && Nu({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? $u() : void 0,
          ...G
        }),
        c && ku({ ...G }),
        Vu({
          ...G,
          apply: /* @__PURE__ */ Ue(({ elements: X, rects: le, availableWidth: Q, availableHeight: J }) => {
            const { width: te, height: Ve } = le.reference, be = X.floating.style;
            be.setProperty("--radix-popper-available-width", `${Q}px`), be.setProperty("--radix-popper-available-height", `${J}px`), be.setProperty("--radix-popper-anchor-width", `${te}px`), be.setProperty("--radix-popper-anchor-height", `${Ve}px`);
          }, "apply")
        }),
        b && Gu({ element: b, padding: l }),
        id({ arrowWidth: I, arrowHeight: E }),
        p && Hu({
          strategy: "referenceHidden",
          ...G,
          // `hide` detects whether the anchor (reference) is clipped, so when
          // no explicit `collisionBoundary` is set we fall back to Floating
          // UI's default clipping ancestors (e.g. a scrollable menu). This
          // lets an occluded submenu hide once its anchor scrolls out of view
          // (#3237). The collision/size middlewares deliberately keep the
          // viewport-based default to avoid clamping content rendered inside
          // transformed or overflow-clipping portal containers.
          boundary: N ? G.boundary : void 0
        })
      ]
    }), M = C.setPlacementState;
    ee(() => (M(k), () => {
      M(void 0);
    }), [k, M]);
    const [ae, Z] = Cn(k), oe = he(v);
    ee(() => {
      V && oe?.();
    }, [V, oe]);
    const ye = U.arrow?.x, _e = U.arrow?.y, ke = U.arrow?.centerOffset !== 0, [ve, T] = u.useState();
    return ee(() => {
      y && T(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ m(
      "div",
      {
        ref: q.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...B,
          transform: V ? B.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ve,
          "--radix-popper-transform-origin": [
            U.transformOrigin?.x,
            U.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...U.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: t.dir,
        children: /* @__PURE__ */ m(
          Ju,
          {
            scope: o,
            placedSide: ae,
            placedAlign: Z,
            onArrowChange: R,
            arrowX: ye,
            arrowY: _e,
            shouldHideArrow: ke,
            children: /* @__PURE__ */ m(
              z.div,
              {
                "data-side": ae,
                "data-align": Z,
                ...w,
                ref: _,
                style: {
                  ...w.style,
                  // if the PopperContent hasn't been placed yet (not all
                  // measurements done) we prevent animations so that users'
                  // animations don't kick in too early from the wrong sides.
                  animation: V ? w.style?.animation : "none"
                }
              }
            )
          }
        )
      }
    );
  }, "PopperContent")
), nd = "PopperArrow", od = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, rd = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ Ue(function(t, n) {
    const { __scopePopper: o, ...r } = t, i = ed(nd, o), s = od[i.placedSide];
    return (
      // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
      // doesn't report size as we'd expect on SVG elements.
      // it reports their bounding box which is effectively the largest path inside the SVG.
      /* @__PURE__ */ m(
        "span",
        {
          ref: i.onArrowChange,
          style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [s]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0"
            }[i.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: "rotate(180deg)",
              left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
          },
          children: /* @__PURE__ */ m(
            ju,
            {
              ...r,
              ref: n,
              style: {
                ...r.style,
                // ensures the element can be measured correctly (mostly for if SVG)
                display: "block"
              }
            }
          )
        }
      )
    );
  }, "PopperArrow")
);
function ws(e) {
  return e !== null;
}
Ue(ws, "isNotNull");
var id = /* @__PURE__ */ Ue((e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: o, middlewareData: r } = t, s = r.arrow?.centerOffset !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [c, g] = Cn(n), d = { start: "0%", center: "50%", end: "100%" }[g], f = (r.arrow?.x ?? 0) + a / 2, p = (r.arrow?.y ?? 0) + l / 2;
    let h = "", v = "";
    return c === "bottom" ? (h = s ? d : `${f}px`, v = `${-l}px`) : c === "top" ? (h = s ? d : `${f}px`, v = `${o.floating.height + l}px`) : c === "right" ? (h = `${-l}px`, v = s ? d : `${p}px`) : c === "left" && (h = `${o.floating.width + l}px`, v = s ? d : `${p}px`), { data: { x: h, y: v } };
  }
}), "transformOrigin");
function Cn(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
Ue(Cn, "getSideAndAlignFromPlacement");
var Sn = Xu, zo = Qu, Uo = td, sd = rd, ad = Object.defineProperty, jo = (e, t) => ad(e, "name", { value: t, configurable: !0 }), Un = !1;
function Cs() {
  const [e, t] = u.useState(Un);
  return u.useEffect(() => {
    Un || (Un = !0, t(!0));
  }, []), e;
}
jo(Cs, "useIsHydrated");
var Ss = u[" useSyncExternalStore ".trim().toString()];
function ys() {
  return () => {
  };
}
jo(ys, "subscribe");
function _s() {
  return Ss(
    ys,
    () => !0,
    () => !1
  );
}
jo(_s, "useIsHydratedModern");
var ld = typeof Ss == "function" ? _s : Cs, cd = Object.defineProperty, st = (e, t) => cd(e, "name", { value: t, configurable: !0 }), jn = "rovingFocusGroup.onEntryFocus", ud = { bubbles: !1, cancelable: !0 }, yn = "RovingFocusGroup", [ho, bs, dd] = /* @__PURE__ */ gn(yn), [fd, _n] = /* @__PURE__ */ Ie(
  yn,
  [dd]
), [gd, pd] = fd(yn), md = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ st(function(t, n) {
    return /* @__PURE__ */ m(ho.Provider, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(ho.Slot, { scope: t.__scopeRovingFocusGroup, children: /* @__PURE__ */ m(hd, { ...t, ref: n }) }) });
  }, "RovingFocusGroup")
), hd = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ st(function(t, n) {
  const {
    __scopeRovingFocusGroup: o,
    orientation: r,
    loop: i = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: c,
    onEntryFocus: g,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = t, p = u.useRef(null), h = K(n, p), v = Nt(s), [w, C] = je({
    prop: a,
    defaultProp: l ?? null,
    onChange: c,
    caller: yn
  }), [y, S] = u.useState(!1), _ = he(g), b = bs(o), R = u.useRef(!1), [x, I] = u.useState(0);
  return u.useEffect(() => {
    const E = p.current;
    if (E)
      return E.addEventListener(jn, _), () => E.removeEventListener(jn, _);
  }, [_]), /* @__PURE__ */ m(
    gd,
    {
      scope: o,
      orientation: r,
      dir: v,
      loop: i,
      currentTabStopId: w,
      onItemFocus: u.useCallback(
        (E) => C(E),
        [C]
      ),
      onItemShiftTab: u.useCallback(() => S(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => I((E) => E + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => I((E) => E - 1),
        []
      ),
      children: /* @__PURE__ */ m(
        z.div,
        {
          tabIndex: y || x === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: h,
          style: { outline: "none", ...t.style },
          onMouseDown: P(t.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: P(t.onFocus, (E) => {
            const A = !R.current;
            if (E.target === E.currentTarget && A && !y) {
              const $ = new CustomEvent(jn, ud);
              if (E.currentTarget.dispatchEvent($), !$.defaultPrevented) {
                const O = b().filter((k) => k.focusable), N = O.find((k) => k.active), G = O.find((k) => k.id === w), B = [N, G, ...O].filter(
                  Boolean
                ).map((k) => k.ref.current);
                Wo(B, d);
              }
            }
            R.current = !1;
          }),
          onBlur: P(t.onBlur, () => S(!1))
        }
      )
    }
  );
}, "RovingFocusGroupImpl")), vd = "RovingFocusGroupItem", wd = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ st(function(t, n) {
    const {
      __scopeRovingFocusGroup: o,
      focusable: r = !0,
      active: i = !1,
      tabStopId: s,
      children: a,
      ...l
    } = t, c = pe(), g = s || c, d = pd(vd, o), f = d.currentTabStopId === g, p = bs(o), { onFocusableItemAdd: h, onFocusableItemRemove: v, currentTabStopId: w } = d, C = ld();
    return ee(() => {
      if (!(!C || !r))
        return h(), () => v();
    }, [C, r, h, v]), u.useEffect(() => {
      if (!(C || !r))
        return h(), () => v();
    }, [C, r, h, v]), /* @__PURE__ */ m(
      ho.ItemSlot,
      {
        scope: o,
        id: g,
        focusable: r,
        active: i,
        children: /* @__PURE__ */ m(
          z.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": d.orientation,
            ...l,
            ref: n,
            onMouseDown: P(t.onMouseDown, (y) => {
              r ? d.onItemFocus(g) : y.preventDefault();
            }),
            onFocus: P(t.onFocus, () => d.onItemFocus(g)),
            onKeyDown: P(t.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const S = xs(y, d.orientation, d.dir);
              if (S !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let b = p().filter((R) => R.focusable).map((R) => R.ref.current);
                if (S === "last") b.reverse();
                else if (S === "prev" || S === "next") {
                  S === "prev" && b.reverse();
                  const R = b.indexOf(y.currentTarget);
                  b = d.loop ? Ps(b, R + 1) : b.slice(R + 1);
                }
                setTimeout(() => Wo(b));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: f, hasTabStop: w != null }) : a
          }
        )
      }
    );
  }, "RovingFocusGroupItem")
), Cd = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Rs(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
st(Rs, "getDirectionAwareKey");
function xs(e, t, n) {
  const o = Rs(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Cd[o];
}
st(xs, "getFocusIntent");
function Wo(e, t = !1) {
  const n = document.activeElement;
  for (const o of e)
    if (o === n || (o.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
st(Wo, "focusFirst");
function Ps(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
st(Ps, "wrapArray");
var Es = md, Ms = wd, Sd = Object.defineProperty, W = (e, t) => Sd(e, "name", { value: t, configurable: !0 }), vo = ["Enter", " "], yd = ["ArrowDown", "PageUp", "Home"], Is = ["ArrowUp", "PageDown", "End"], _d = [...yd, ...Is], bd = {
  ltr: [...vo, "ArrowRight"],
  rtl: [...vo, "ArrowLeft"]
}, Rd = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, bn = "Menu", [It, xd, Pd] = /* @__PURE__ */ gn(bn), [at, Ds] = /* @__PURE__ */ Ie(bn, [
  Pd,
  _t,
  _n
]), Rn = _t(), Ts = _n(), [Os, et] = at(bn), [Ed, $t] = at(bn), Md = /* @__PURE__ */ W((e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: i, modal: s = !0 } = e, a = Rn(t), [l, c] = u.useState(null), g = u.useRef(!1), d = he(i), f = Nt(r);
  return u.useEffect(() => {
    const p = /* @__PURE__ */ W(() => {
      g.current = !0, document.addEventListener("pointerdown", h, { capture: !0, once: !0 }), document.addEventListener("pointermove", h, { capture: !0, once: !0 });
    }, "handleKeyDown"), h = /* @__PURE__ */ W(() => g.current = !1, "handlePointer");
    return document.addEventListener("keydown", p, { capture: !0 }), () => {
      document.removeEventListener("keydown", p, { capture: !0 }), document.removeEventListener("pointerdown", h, { capture: !0 }), document.removeEventListener("pointermove", h, { capture: !0 });
    };
  }, []), u.useEffect(() => {
    if (!n)
      return;
    const p = /* @__PURE__ */ W(() => d(!1), "handleBlur");
    return window.addEventListener("blur", p), () => window.removeEventListener("blur", p);
  }, [n, d]), /* @__PURE__ */ m(Sn, { ...a, children: /* @__PURE__ */ m(
    Os,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ m(
        Ed,
        {
          scope: t,
          onClose: u.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: g,
          dir: f,
          modal: s,
          children: o
        }
      )
    }
  ) });
}, "Menu"), As = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ W(function(t, n) {
    const { __scopeMenu: o, ...r } = t, i = Rn(o);
    return /* @__PURE__ */ m(zo, { ...i, ...r, ref: n });
  }, "MenuAnchor")
), Ls = "MenuPortal", [Id, Fs] = at(Ls, {
  forceMount: void 0
}), Dd = /* @__PURE__ */ W((e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, i = et(Ls, t);
  return /* @__PURE__ */ m(Id, { scope: t, forceMount: n, children: /* @__PURE__ */ m(De, { present: n || i.open, children: /* @__PURE__ */ m(ln, { asChild: !0, container: r, children: o }) }) });
}, "MenuPortal"), Pe = "MenuContent", [Td, Ko] = at(Pe), Od = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ W(function(t, n) {
    const o = Fs(Pe, t.__scopeMenu), { forceMount: r = o.forceMount, ...i } = t, s = et(Pe, t.__scopeMenu), a = $t(Pe, t.__scopeMenu);
    return /* @__PURE__ */ m(It.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ m(De, { present: r || s.open, children: /* @__PURE__ */ m(It.Slot, { scope: t.__scopeMenu, children: a.modal ? /* @__PURE__ */ m(Ad, { ...i, ref: n }) : /* @__PURE__ */ m(Ld, { ...i, ref: n }) }) }) });
  }, "MenuContent")
), Ad = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ W(function(t, n) {
    const o = et(Pe, t.__scopeMenu), r = u.useRef(null), i = K(n, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return Lo(s);
    }, []), /* @__PURE__ */ m(
      qo,
      {
        ...t,
        ref: i,
        trapFocus: o.open,
        disableOutsidePointerEvents: o.open,
        disableOutsideScroll: !0,
        onFocusOutside: P(
          t.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => o.onOpenChange(!1)
      }
    );
  }, "MenuRootContentModal")
), Ld = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ W(function(t, n) {
  const o = et(Pe, t.__scopeMenu);
  return /* @__PURE__ */ m(
    qo,
    {
      ...t,
      ref: n,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => o.onOpenChange(!1)
    }
  );
}, "MenuRootContentNonModal")), Fd = /* @__PURE__ */ Le("MenuContent.ScrollLock"), qo = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ W(function(t, n) {
    const {
      __scopeMenu: o,
      loop: r = !1,
      trapFocus: i,
      onOpenAutoFocus: s,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: l,
      onEntryFocus: c,
      onEscapeKeyDown: g,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: v,
      ...w
    } = t, C = et(Pe, o), y = $t(Pe, o), S = Rn(o), _ = Ts(o), b = xd(o), [R, x] = u.useState(null), I = u.useRef(null), E = K(n, I, C.onContentChange), A = u.useRef(0), $ = u.useRef(""), O = u.useRef(0), N = u.useRef(null), G = u.useRef("right"), q = u.useRef(0), B = v ? un : u.Fragment, k = v ? { as: Fd, allowPinchZoom: !0 } : void 0, V = /* @__PURE__ */ W((M) => {
      const ae = $.current + M, Z = b().filter((T) => !T.disabled), oe = document.activeElement, ye = Z.find((T) => T.ref.current === oe)?.textValue, _e = Z.map((T) => T.textValue), ke = Us(_e, ae, ye), ve = Z.find((T) => T.textValue === ke)?.ref.current;
      (/* @__PURE__ */ W((function T(X) {
        $.current = X, window.clearTimeout(A.current), X !== "" && (A.current = window.setTimeout(() => T(""), 1e3));
      }), "updateSearch"))(ae), ve && setTimeout(() => ve.focus());
    }, "handleTypeaheadSearch");
    u.useEffect(() => () => window.clearTimeout(A.current), []), Ft();
    const U = u.useCallback((M) => G.current === N.current?.side && Ws(M, N.current?.area), []);
    return /* @__PURE__ */ m(
      Td,
      {
        scope: o,
        searchRef: $,
        onItemEnter: u.useCallback(
          (M) => {
            U(M) && M.preventDefault();
          },
          [U]
        ),
        onItemLeave: u.useCallback(
          (M) => {
            U(M) || (I.current?.focus(), x(null));
          },
          [U]
        ),
        onTriggerLeave: u.useCallback(
          (M) => {
            U(M) && M.preventDefault();
          },
          [U]
        ),
        pointerGraceTimerRef: O,
        onPointerGraceIntentChange: u.useCallback((M) => {
          N.current = M;
        }, []),
        children: /* @__PURE__ */ m(B, { ...k, children: /* @__PURE__ */ m(
          To,
          {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: P(s, (M) => {
              M.preventDefault(), I.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ m(
              an,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: g,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ m(
                  Es,
                  {
                    asChild: !0,
                    ..._,
                    dir: y.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: x,
                    onEntryFocus: P(c, (M) => {
                      y.isUsingKeyboardRef.current || M.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ m(
                      Uo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Xo(C.open),
                        "data-radix-menu-content": "",
                        dir: y.dir,
                        ...S,
                        ...w,
                        ref: E,
                        style: { outline: "none", ...w.style },
                        onKeyDown: P(w.onKeyDown, (M) => {
                          const Z = M.target.closest("[data-radix-menu-content]") === M.currentTarget, oe = M.ctrlKey || M.altKey || M.metaKey, ye = M.key.length === 1;
                          Z && (M.key === "Tab" && M.preventDefault(), !oe && ye && V(M.key));
                          const _e = I.current;
                          if (M.target !== _e || !_d.includes(M.key)) return;
                          M.preventDefault();
                          const ve = b().filter((T) => !T.disabled).map((T) => T.ref.current);
                          Is.includes(M.key) && ve.reverse(), Bs(ve);
                        }),
                        onBlur: P(t.onBlur, (M) => {
                          M.currentTarget.contains(M.target) || (window.clearTimeout(A.current), $.current = "");
                        }),
                        onPointerMove: P(
                          t.onPointerMove,
                          vt((M) => {
                            const ae = M.target, Z = q.current !== M.clientX;
                            if (M.currentTarget.contains(ae) && Z) {
                              const oe = M.clientX > q.current ? "right" : "left";
                              G.current = oe, q.current = M.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "MenuContentImpl")
), Ns = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ W(function(t, n) {
    const { __scopeMenu: o, ...r } = t;
    return /* @__PURE__ */ m(z.div, { role: "group", ...r, ref: n });
  }, "MenuGroup")
), Nd = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ W(function(t, n) {
    const { __scopeMenu: o, ...r } = t;
    return /* @__PURE__ */ m(z.div, { ...r, ref: n });
  }, "MenuLabel")
), wo = "MenuItem", Vr = "menu.itemSelect", Yo = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ W(function(t, n) {
    const { disabled: o = !1, onSelect: r, ...i } = t, s = u.useRef(null), a = $t(wo, t.__scopeMenu), l = Ko(wo, t.__scopeMenu), c = K(n, s), g = u.useRef(!1), d = /* @__PURE__ */ W(() => {
      const f = s.current;
      if (!o && f) {
        const p = new CustomEvent(Vr, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Vr, (h) => r?.(h), { once: !0 }), Io(f, p), p.defaultPrevented ? g.current = !1 : a.onClose();
      }
    }, "handleSelect");
    return /* @__PURE__ */ m(
      $s,
      {
        ...i,
        ref: c,
        disabled: o,
        onClick: P(t.onClick, d),
        onPointerDown: (f) => {
          t.onPointerDown?.(f), g.current = !0;
        },
        onPointerUp: P(t.onPointerUp, (f) => {
          g.current || f.currentTarget?.click();
        }),
        onKeyDown: P(t.onKeyDown, (f) => {
          o || f.target !== f.currentTarget || l.searchRef.current !== "" && f.key === " " || vo.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }, "MenuItem")
), $s = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ W(function(t, n) {
    const { __scopeMenu: o, disabled: r = !1, textValue: i, ...s } = t, a = Ko(wo, o), l = Ts(o), c = u.useRef(null), g = K(n, c), [d, f] = u.useState(!1), [p, h] = u.useState("");
    return u.useEffect(() => {
      const v = c.current;
      v && h((v.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ m(
      It.ItemSlot,
      {
        scope: o,
        disabled: r,
        textValue: i ?? p,
        children: /* @__PURE__ */ m(Ms, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ m(
          z.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: g,
            onPointerMove: P(
              t.onPointerMove,
              vt((v) => {
                r ? a.onItemLeave(v) : (a.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: P(
              t.onPointerLeave,
              vt((v) => a.onItemLeave(v))
            ),
            onFocus: P(t.onFocus, () => f(!0)),
            onBlur: P(t.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }, "MenuItemImpl")
), $d = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ W(function(t, n) {
    const { checked: o = !1, onCheckedChange: r, ...i } = t;
    return /* @__PURE__ */ m(Vs, { scope: t.__scopeMenu, checked: o, children: /* @__PURE__ */ m(
      Yo,
      {
        role: "menuitemcheckbox",
        "aria-checked": Dt(o) ? "mixed" : o,
        ...i,
        ref: n,
        "data-state": xn(o),
        onSelect: P(
          i.onSelect,
          () => r?.(Dt(o) ? !0 : !o),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuCheckboxItem")
), kd = "MenuRadioGroup", [Vd, Hd] = at(
  kd,
  { value: void 0, onValueChange: /* @__PURE__ */ W(() => {
  }, "onValueChange") }
), Gd = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ W(function(t, n) {
    const { value: o, onValueChange: r, ...i } = t, s = he(r);
    return /* @__PURE__ */ m(Vd, { scope: t.__scopeMenu, value: o, onValueChange: s, children: /* @__PURE__ */ m(Ns, { ...i, ref: n }) });
  }, "MenuRadioGroup")
), Bd = "MenuRadioItem", zd = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ W(function(t, n) {
    const { value: o, ...r } = t, i = Hd(Bd, t.__scopeMenu), s = o === i.value;
    return /* @__PURE__ */ m(Vs, { scope: t.__scopeMenu, checked: s, children: /* @__PURE__ */ m(
      Yo,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: n,
        "data-state": xn(s),
        onSelect: P(
          r.onSelect,
          () => i.onValueChange?.(o),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }, "MenuRadioItem")
), ks = "MenuItemIndicator", [Vs, Ud] = at(
  ks,
  { checked: !1 }
), jd = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ W(function(t, n) {
    const { __scopeMenu: o, forceMount: r, ...i } = t, s = Ud(ks, o);
    return /* @__PURE__ */ m(
      De,
      {
        present: r || Dt(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ m(
          z.span,
          {
            ...i,
            ref: n,
            "data-state": xn(s.checked)
          }
        )
      }
    );
  }, "MenuItemIndicator")
), Wd = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ W(function(t, n) {
    const { __scopeMenu: o, ...r } = t;
    return /* @__PURE__ */ m(
      z.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: n
      }
    );
  }, "MenuSeparator")
), Hs = "MenuSub", [Kd, Gs] = at(Hs), qd = /* @__PURE__ */ W((e) => {
  const { __scopeMenu: t, children: n, open: o = !1, onOpenChange: r } = e, i = et(Hs, t), s = Rn(t), [a, l] = u.useState(null), [c, g] = u.useState(null), d = he(r);
  return u.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ m(Sn, { ...s, children: /* @__PURE__ */ m(
    Os,
    {
      scope: t,
      open: o,
      onOpenChange: d,
      content: c,
      onContentChange: g,
      children: /* @__PURE__ */ m(
        Kd,
        {
          scope: t,
          contentId: pe(),
          triggerId: pe(),
          trigger: a,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
}, "MenuSub"), Kt = "MenuSubTrigger", Yd = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ W(function(t, n) {
    const o = et(Kt, t.__scopeMenu), r = $t(Kt, t.__scopeMenu), i = Gs(Kt, t.__scopeMenu), s = Ko(Kt, t.__scopeMenu), a = u.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: c } = s, g = { __scopeMenu: t.__scopeMenu }, d = u.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    u.useEffect(() => d, [d]), u.useEffect(() => {
      const p = l.current;
      return () => {
        window.clearTimeout(p), c(null);
      };
    }, [l, c]);
    const f = K(n, i.onTriggerChange);
    return /* @__PURE__ */ m(As, { asChild: !0, ...g, children: /* @__PURE__ */ m(
      $s,
      {
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": o.open,
        "aria-controls": o.open ? i.contentId : void 0,
        "data-state": Xo(o.open),
        ...t,
        ref: f,
        onClick: (p) => {
          t.onClick?.(p), !(t.disabled || p.defaultPrevented) && (p.currentTarget.focus(), o.open || o.onOpenChange(!0));
        },
        onPointerMove: P(
          t.onPointerMove,
          vt((p) => {
            s.onItemEnter(p), !p.defaultPrevented && !t.disabled && !o.open && !a.current && (s.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              o.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: P(
          t.onPointerLeave,
          vt((p) => {
            d();
            const h = o.content?.getBoundingClientRect();
            if (h) {
              const v = o.content?.dataset.side, w = v === "right", C = w ? -5 : 5, y = h[w ? "left" : "right"], S = h[w ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + C, y: p.clientY },
                  { x: y, y: h.top },
                  { x: S, y: h.top },
                  { x: S, y: h.bottom },
                  { x: y, y: h.bottom }
                ],
                side: v
              }), window.clearTimeout(l.current), l.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(p), p.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: P(t.onKeyDown, (p) => {
          t.disabled || p.target !== p.currentTarget || s.searchRef.current !== "" && p.key === " " || bd[r.dir].includes(p.key) && (o.onOpenChange(!0), o.content?.focus(), p.preventDefault());
        })
      }
    ) });
  }, "MenuSubTrigger")
), Xd = "MenuSubContent", Zd = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ W(function(t, n) {
    const o = Fs(Pe, t.__scopeMenu), { forceMount: r = o.forceMount, align: i = "start", ...s } = t, a = et(Pe, t.__scopeMenu), l = $t(Pe, t.__scopeMenu), c = Gs(Xd, t.__scopeMenu), g = u.useRef(null), d = K(n, g);
    return /* @__PURE__ */ m(It.Provider, { scope: t.__scopeMenu, children: /* @__PURE__ */ m(De, { present: r || a.open, children: /* @__PURE__ */ m(It.Slot, { scope: t.__scopeMenu, children: /* @__PURE__ */ m(
      qo,
      {
        id: c.contentId,
        "aria-labelledby": c.triggerId,
        ...s,
        ref: d,
        align: i,
        side: l.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          l.isUsingKeyboardRef.current && g.current?.focus(), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: P(t.onFocusOutside, (f) => {
          f.target !== c.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: P(t.onEscapeKeyDown, (f) => {
          l.onClose(), f.preventDefault();
        }),
        onKeyDown: P(t.onKeyDown, (f) => {
          const p = f.currentTarget.contains(f.target), h = Rd[l.dir].includes(f.key);
          p && h && (a.onOpenChange(!1), c.trigger?.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }, "MenuSubContent")
);
function Xo(e) {
  return e ? "open" : "closed";
}
W(Xo, "getOpenState");
function Dt(e) {
  return e === "indeterminate";
}
W(Dt, "isIndeterminate");
function xn(e) {
  return Dt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
W(xn, "getCheckedState");
function Bs(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
W(Bs, "focusFirst");
function zs(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
W(zs, "wrapArray");
function Us(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = zs(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
W(Us, "getNextMatch");
function js(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], l = t[s], c = a.x, g = a.y, d = l.x, f = l.y;
    g > o != f > o && n < (d - c) * (o - g) / (f - g) + c && (r = !r);
  }
  return r;
}
W(js, "isPointInPolygon");
function Ws(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return js(n, t);
}
W(Ws, "isPointerInGraceArea");
function vt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
W(vt, "whenMouse");
var Qd = Md, Jd = As, ef = Dd, tf = Od, nf = Ns, of = Nd, rf = Yo, sf = $d, af = Gd, lf = zd, cf = jd, uf = Wd, df = qd, ff = Yd, gf = Zd, pf = Object.defineProperty, fe = (e, t) => pf(e, "name", { value: t, configurable: !0 }), Zo = "DropdownMenu", [mf, rh] = /* @__PURE__ */ Ie(
  Zo,
  [Ds]
), ge = Ds(), [hf, Ks] = mf(Zo), vf = /* @__PURE__ */ fe((e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: o,
    open: r,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, l = ge(t), c = u.useRef(null), [g, d] = je({
    prop: r,
    defaultProp: i ?? !1,
    onChange: s,
    caller: Zo
  });
  return /* @__PURE__ */ m(
    hf,
    {
      scope: t,
      triggerId: pe(),
      triggerRef: c,
      contentId: pe(),
      open: g,
      onOpenChange: d,
      onOpenToggle: u.useCallback(() => d((f) => !f), [d]),
      modal: a,
      children: /* @__PURE__ */ m(Qd, { ...l, open: g, onOpenChange: d, dir: o, modal: a, children: n })
    }
  );
}, "DropdownMenu"), wf = "DropdownMenuTrigger", Cf = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ fe(function(t, n) {
    const { __scopeDropdownMenu: o, disabled: r = !1, ...i } = t, s = Ks(wf, o), a = ge(o), l = K(n, s.triggerRef);
    return /* @__PURE__ */ m(Jd, { asChild: !0, ...a, children: /* @__PURE__ */ m(
      z.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...i,
        ref: l,
        onPointerDown: P(t.onPointerDown, (c) => {
          !r && c.button === 0 && c.ctrlKey === !1 && (s.onOpenToggle(), s.open || c.preventDefault());
        }),
        onKeyDown: P(t.onKeyDown, (c) => {
          r || (["Enter", " "].includes(c.key) && s.onOpenToggle(), c.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault());
        })
      }
    ) });
  }, "DropdownMenuTrigger")
), Sf = /* @__PURE__ */ fe((e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = ge(t);
  return /* @__PURE__ */ m(ef, { ...o, ...n });
}, "DropdownMenuPortal"), yf = "DropdownMenuContent", _f = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ fe(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, i = Ks(yf, o), s = ge(o), a = u.useRef(!1);
    return /* @__PURE__ */ m(
      tf,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...s,
        ...r,
        ref: n,
        onCloseAutoFocus: P(t.onCloseAutoFocus, (l) => {
          a.current || i.triggerRef.current?.focus(), a.current = !1, l.preventDefault();
        }),
        onInteractOutside: P(t.onInteractOutside, (l) => {
          const c = l.detail.originalEvent, g = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || g;
          (!i.modal || d) && (a.current = !0);
        }),
        style: {
          ...t.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }, "DropdownMenuContent")
), bf = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ fe(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, i = ge(o);
    return /* @__PURE__ */ m(nf, { ...i, ...r, ref: n });
  }, "DropdownMenuGroup")
), Rf = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ fe(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, i = ge(o);
    return /* @__PURE__ */ m(of, { ...i, ...r, ref: n });
  }, "DropdownMenuLabel")
), xf = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ fe(function(t, n) {
    const { __scopeDropdownMenu: o, ...r } = t, i = ge(o);
    return /* @__PURE__ */ m(rf, { ...i, ...r, ref: n });
  }, "DropdownMenuItem")
), Pf = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ fe(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, i = ge(o);
  return /* @__PURE__ */ m(sf, { ...i, ...r, ref: n });
}, "DropdownMenuCheckboxItem")), Ef = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ fe(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, i = ge(o);
  return /* @__PURE__ */ m(af, { ...i, ...r, ref: n });
}, "DropdownMenuRadioGroup")), Mf = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ fe(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, i = ge(o);
  return /* @__PURE__ */ m(lf, { ...i, ...r, ref: n });
}, "DropdownMenuRadioItem")), If = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ fe(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, i = ge(o);
  return /* @__PURE__ */ m(cf, { ...i, ...r, ref: n });
}, "DropdownMenuItemIndicator")), Df = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ fe(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, i = ge(o);
  return /* @__PURE__ */ m(uf, { ...i, ...r, ref: n });
}, "DropdownMenuSeparator")), Tf = /* @__PURE__ */ fe((e) => {
  const { __scopeDropdownMenu: t, children: n, open: o, onOpenChange: r, defaultOpen: i } = e, s = ge(t), [a, l] = je({
    prop: o,
    defaultProp: i ?? !1,
    onChange: r,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ m(df, { ...s, open: a, onOpenChange: l, children: n });
}, "DropdownMenuSub"), Of = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ fe(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, i = ge(o);
  return /* @__PURE__ */ m(ff, { ...i, ...r, ref: n });
}, "DropdownMenuSubTrigger")), Af = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ fe(function(t, n) {
  const { __scopeDropdownMenu: o, ...r } = t, i = ge(o);
  return /* @__PURE__ */ m(
    gf,
    {
      ...i,
      ...r,
      ref: n,
      style: {
        ...t.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
}, "DropdownMenuSubContent")), Lf = vf, Ff = Cf, qs = Sf, Nf = _f, $f = bf, kf = Rf, Vf = xf, Hf = Pf, Gf = Ef, Bf = Mf, Ys = If, zf = Df, Uf = Tf, jf = Of, Wf = Af;
const ih = Lf, sh = Ff, ah = $f, lh = qs, ch = Uf, uh = Gf, Kf = Y(({ className: e, sideOffset: t = 8, ...n }, o) => /* @__PURE__ */ m(qs, { children: /* @__PURE__ */ m(
  Nf,
  {
    ref: o,
    className: D("nb-dropdown__content", e),
    sideOffset: t,
    ...n
  }
) }));
Kf.displayName = "DropdownMenuContent";
const qf = Y(({ className: e, inset: t, tone: n = "default", ...o }, r) => /* @__PURE__ */ m(
  Vf,
  {
    ref: r,
    className: D("nb-dropdown__item", t && "nb-dropdown__item--inset", n === "danger" && "nb-dropdown__item--danger", e),
    ...o
  }
));
qf.displayName = "DropdownMenuItem";
const Yf = Y(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ H(
  Hf,
  {
    ref: r,
    className: D("nb-dropdown__item nb-dropdown__item--checkable", e),
    ...n !== void 0 ? { checked: n } : {},
    ...o,
    children: [
      /* @__PURE__ */ m("span", { className: "nb-dropdown__indicator", children: /* @__PURE__ */ m(Ys, { children: /* @__PURE__ */ m(Wi, { size: 15, "aria-hidden": "true" }) }) }),
      t
    ]
  }
));
Yf.displayName = "DropdownMenuCheckboxItem";
const Xf = Y(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ H(Bf, { ref: o, className: D("nb-dropdown__item nb-dropdown__item--checkable", e), ...n, children: [
  /* @__PURE__ */ m("span", { className: "nb-dropdown__indicator", children: /* @__PURE__ */ m(Ys, { children: /* @__PURE__ */ m(Rc, { size: 8, fill: "currentColor", "aria-hidden": "true" }) }) }),
  t
] }));
Xf.displayName = "DropdownMenuRadioItem";
const Zf = Y(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ m(kf, { ref: o, className: D("nb-dropdown__label", t && "nb-dropdown__item--inset", e), ...n }));
Zf.displayName = "DropdownMenuLabel";
const Qf = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(zf, { ref: n, className: D("nb-dropdown__separator", e), ...t }));
Qf.displayName = "DropdownMenuSeparator";
const Jf = Y(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ H(jf, { ref: r, className: D("nb-dropdown__item", t && "nb-dropdown__item--inset", e), ...o, children: [
  n,
  /* @__PURE__ */ m(qi, { className: "nb-dropdown__sub-chevron", size: 16, "aria-hidden": "true" })
] }));
Jf.displayName = "DropdownMenuSubTrigger";
const eg = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(Wf, { ref: n, className: D("nb-dropdown__content", e), ...t }));
eg.displayName = "DropdownMenuSubContent";
function dh({ className: e, ...t }) {
  return /* @__PURE__ */ m("span", { className: D("nb-dropdown__shortcut", e), ...t });
}
function fh({
  className: e,
  label: t,
  hint: n,
  error: o,
  required: r = !1,
  htmlFor: i,
  children: s,
  ...a
}) {
  return /* @__PURE__ */ H("div", { className: D("nb-form-field", e), ...a, children: [
    t ? /* @__PURE__ */ H("label", { className: "nb-form-field__label", htmlFor: i, children: [
      t,
      r ? /* @__PURE__ */ m("span", { className: "nb-form-field__required", "aria-hidden": "true", children: "*" }) : null
    ] }) : null,
    s,
    o ? /* @__PURE__ */ m("div", { className: "nb-form-field__error", role: "alert", children: o }) : null,
    !o && n ? /* @__PURE__ */ m("div", { className: "nb-form-field__hint", children: n }) : null
  ] });
}
const tg = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m("input", { ref: n, className: D("nb-input", e), ...t }));
tg.displayName = "Input";
function ng(e, t, n) {
  if (t <= 1) return [1];
  const o = /* @__PURE__ */ new Set([1, t]);
  for (let r = e - n; r <= e + n; r += 1)
    r > 1 && r < t && o.add(r);
  return [...o].sort((r, i) => r - i);
}
function gh({
  className: e,
  page: t,
  pageCount: n,
  onPageChange: o,
  siblingCount: r = 1,
  previousLabel: i = "Previous page",
  nextLabel: s = "Next page",
  ...a
}) {
  const l = Math.max(1, n), c = Math.min(Math.max(1, t), l), g = ng(c, l, Math.max(0, r));
  return /* @__PURE__ */ H("nav", { className: D("nb-pagination", e), "aria-label": "Pagination", ...a, children: [
    /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        className: "nb-pagination__button nb-pagination__button--icon",
        onClick: () => o(c - 1),
        disabled: c <= 1,
        "aria-label": i,
        children: /* @__PURE__ */ m(Cc, { size: 16, "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ m("div", { className: "nb-pagination__pages", children: g.map((d, f) => {
      const p = g[f - 1], h = p !== void 0 && d - p > 1;
      return /* @__PURE__ */ H("span", { className: "nb-pagination__group", children: [
        h ? /* @__PURE__ */ m("span", { className: "nb-pagination__ellipsis", "aria-hidden": "true", children: "…" }) : null,
        /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: D("nb-pagination__button", d === c && "nb-pagination__button--active"),
            onClick: () => o(d),
            "aria-current": d === c ? "page" : void 0,
            "aria-label": `Page ${d}`,
            children: d
          }
        )
      ] }, d);
    }) }),
    /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        className: "nb-pagination__button nb-pagination__button--icon",
        onClick: () => o(c + 1),
        disabled: c >= l,
        "aria-label": s,
        children: /* @__PURE__ */ m(qi, { size: 16, "aria-hidden": "true" })
      }
    )
  ] });
}
var og = Object.defineProperty, rg = (e, t) => og(e, "name", { value: t, configurable: !0 });
function Co(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
rg(Co, "clamp");
var ig = Object.defineProperty, sg = (e, t) => ig(e, "name", { value: t, configurable: !0 });
function Xs(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
sg(Xs, "usePrevious");
var ag = Object.defineProperty, lg = (e, t) => ag(e, "name", { value: t, configurable: !0 }), Zs = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), cg = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ lg(function(t, n) {
    return /* @__PURE__ */ m(
      z.span,
      {
        ...t,
        ref: n,
        style: { ...Zs, ...t.style }
      }
    );
  }, "VisuallyHidden")
), ug = cg, dg = Object.defineProperty, j = (e, t) => dg(e, "name", { value: t, configurable: !0 }), fg = [" ", "Enter", "ArrowUp", "ArrowDown"], gg = [" ", "Enter"], wt = "Select", [Pn, En, pg] = /* @__PURE__ */ gn(wt), [lt, ph] = /* @__PURE__ */ Ie(wt, [
  pg,
  _t
]), Qo = _t(), [mg, tt] = lt(wt), [hg, vg] = lt(wt);
function Qs(e) {
  const {
    __scopeSelect: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    value: s,
    defaultValue: a,
    onValueChange: l,
    dir: c,
    name: g,
    autoComplete: d,
    disabled: f,
    required: p,
    form: h,
    // @ts-expect-error internal render prop used by `Select` to compose its default parts
    internal_do_not_use_render: v
  } = e, w = Qo(t), [C, y] = u.useState(null), [S, _] = u.useState(null), [b, R] = u.useState(!1), x = Nt(c), [I, E] = je({
    prop: o,
    defaultProp: r ?? !1,
    onChange: i,
    caller: wt
  }), [A, $] = je({
    prop: s,
    defaultProp: a,
    onChange: l,
    caller: wt
  }), O = u.useRef(null), N = u.useRef(A);
  u.useEffect(() => {
    const Z = h ? C?.ownerDocument.getElementById(h) : C?.form;
    if (Z instanceof HTMLFormElement) {
      const oe = /* @__PURE__ */ j(() => $(N.current), "reset");
      return Z.addEventListener("reset", oe), () => Z.removeEventListener("reset", oe);
    }
  }, [h, C, $]);
  const G = C ? !!h || !!C.closest("form") : !0, [q, B] = u.useState(/* @__PURE__ */ new Set()), k = pe(), V = Array.from(q).map((Z) => Z.props.value).join(";"), U = u.useCallback((Z) => {
    B((oe) => new Set(oe).add(Z));
  }, []), M = u.useCallback((Z) => {
    B((oe) => {
      const ye = new Set(oe);
      return ye.delete(Z), ye;
    });
  }, []), ae = {
    required: p,
    trigger: C,
    onTriggerChange: y,
    valueNode: S,
    onValueNodeChange: _,
    valueNodeHasChildren: b,
    onValueNodeHasChildrenChange: R,
    contentId: k,
    value: A,
    onValueChange: $,
    open: I,
    onOpenChange: E,
    dir: x,
    triggerPointerDownPosRef: O,
    disabled: f,
    name: g,
    autoComplete: d,
    form: h,
    nativeOptions: q,
    nativeSelectKey: V,
    isFormControl: G
  };
  return /* @__PURE__ */ m(Sn, { ...w, children: /* @__PURE__ */ m(mg, { scope: t, ...ae, children: /* @__PURE__ */ m(Pn.Provider, { scope: t, children: /* @__PURE__ */ m(
    hg,
    {
      scope: t,
      onNativeOptionAdd: U,
      onNativeOptionRemove: M,
      children: na(v) ? v(ae) : n
    }
  ) }) }) });
}
j(Qs, "SelectProvider");
var wg = /* @__PURE__ */ j((e) => {
  const { __scopeSelect: t, children: n, ...o } = e;
  return /* @__PURE__ */ m(
    Qs,
    {
      __scopeSelect: t,
      ...o,
      internal_do_not_use_render: ({ isFormControl: r }) => /* @__PURE__ */ H(Ot, { children: [
        n,
        r ? /* @__PURE__ */ m(
          Xg,
          {
            __scopeSelect: t
          }
        ) : null
      ] })
    }
  );
}, "Select"), Cg = "SelectTrigger", Sg = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ j(function(t, n) {
    const { __scopeSelect: o, disabled: r = !1, ...i } = t, s = Qo(o), a = tt(Cg, o), l = a.disabled || r, c = K(n, a.onTriggerChange), g = En(o), d = u.useRef("touch"), [f, p, h] = er((w) => {
      const C = g().filter((_) => !_.disabled), y = C.find((_) => _.value === a.value), S = tr(C, w, y);
      S !== void 0 && a.onValueChange(S.value);
    }), v = /* @__PURE__ */ j((w) => {
      l || (a.onOpenChange(!0), h()), w && (a.triggerPointerDownPosRef.current = {
        x: Math.round(w.pageX),
        y: Math.round(w.pageY)
      });
    }, "handleOpen");
    return /* @__PURE__ */ m(zo, { asChild: !0, ...s, children: /* @__PURE__ */ m(
      z.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.open ? a.contentId : void 0,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": kt(a.value) ? "" : void 0,
        ...i,
        ref: c,
        onClick: P(i.onClick, (w) => {
          w.currentTarget.focus(), d.current !== "mouse" && v(w);
        }),
        onPointerDown: P(i.onPointerDown, (w) => {
          d.current = w.pointerType;
          const C = w.target;
          C.hasPointerCapture(w.pointerId) && C.releasePointerCapture(w.pointerId), w.button === 0 && w.ctrlKey === !1 && w.pointerType === "mouse" && (v(w), w.preventDefault());
        }),
        onKeyDown: P(i.onKeyDown, (w) => {
          const C = f.current !== "";
          !(w.ctrlKey || w.altKey || w.metaKey) && w.key.length === 1 && p(w.key), !(C && w.key === " ") && fg.includes(w.key) && (v(), w.preventDefault());
        })
      }
    ) });
  }, "SelectTrigger")
), yg = "SelectValue", _g = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ j(function(t, n) {
    const { __scopeSelect: o, className: r, style: i, children: s, placeholder: a = "", ...l } = t, c = tt(yg, o), { onValueNodeHasChildrenChange: g } = c, d = s !== void 0, f = K(n, c.onValueNodeChange);
    ee(() => {
      g(d);
    }, [g, d]);
    const p = kt(c.value);
    return /* @__PURE__ */ m(
      z.span,
      {
        ...l,
        asChild: p ? !1 : l.asChild,
        ref: f,
        style: { pointerEvents: "none" },
        children: /* @__PURE__ */ m(u.Fragment, { children: p ? a : s }, p ? "placeholder" : "value")
      }
    );
  }, "SelectValue")
), bg = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ j(function(t, n) {
    const { __scopeSelect: o, children: r, ...i } = t;
    return /* @__PURE__ */ m(z.span, { "aria-hidden": !0, ...i, ref: n, children: r || "▼" });
  }, "SelectIcon")
), Rg = "SelectPortal", [xg, Pg] = lt(Rg, {
  forceMount: void 0
}), Eg = /* @__PURE__ */ j((e) => {
  const { __scopeSelect: t, forceMount: n, ...o } = e;
  return /* @__PURE__ */ m(xg, { scope: e.__scopeSelect, forceMount: n, children: /* @__PURE__ */ m(ln, { asChild: !0, ...o }) });
}, "SelectPortal"), it = "SelectContent", Mg = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ j(function(t, n) {
    const o = Pg(it, t.__scopeSelect), { forceMount: r = o.forceMount, ...i } = t, s = tt(it, t.__scopeSelect), [a, l] = u.useState();
    return ee(() => {
      l(new DocumentFragment());
    }, []), /* @__PURE__ */ m(De, { present: r || s.open, children: ({ present: c }) => c ? /* @__PURE__ */ m(Tg, { ...i, ref: n }) : /* @__PURE__ */ m(Ig, { ...i, fragment: a }) });
  }, "SelectContent")
), Ig = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ j(function(t, n) {
  const { __scopeSelect: o, children: r, fragment: i } = t;
  return i ? At.createPortal(
    /* @__PURE__ */ m(Js, { scope: o, children: /* @__PURE__ */ m(Pn.Slot, { scope: o, children: /* @__PURE__ */ m("div", { ref: n, children: r }) }) }),
    i
  ) : null;
}, "SelectContentFragment")), xe = 10, [Js, ct] = lt(it), Dg = /* @__PURE__ */ Le("SelectContent.RemoveScroll"), Tg = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ j(function(t, n) {
    const { __scopeSelect: o } = t, {
      position: r = "item-aligned",
      onCloseAutoFocus: i,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: l,
      sideOffset: c,
      align: g,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: w,
      avoidCollisions: C,
      //
      ...y
    } = t, S = tt(it, o), [_, b] = u.useState(null), [R, x] = u.useState(null), I = K(n, b), [E, A] = u.useState(null), [$, O] = u.useState(
      null
    ), N = En(o), [G, q] = u.useState(!1), B = u.useRef(!1);
    u.useEffect(() => {
      if (_) return Lo(_);
    }, [_]), Ft();
    const k = u.useCallback(
      (T) => {
        const [X, ...le] = N().map((te) => te.ref.current), [Q] = le.slice(-1), J = document.activeElement;
        for (const te of T)
          if (te === J || (te?.scrollIntoView({ block: "nearest" }), te === X && R && (R.scrollTop = 0), te === Q && R && (R.scrollTop = R.scrollHeight), te?.focus(), document.activeElement !== J)) return;
      },
      [N, R]
    ), V = u.useCallback(
      () => k([E, _]),
      [k, E, _]
    );
    u.useEffect(() => {
      G && V();
    }, [G, V]);
    const { onOpenChange: U, triggerPointerDownPosRef: M } = S;
    u.useEffect(() => {
      if (_) {
        let T = { x: 0, y: 0 };
        const X = /* @__PURE__ */ j((Q) => {
          T = {
            x: Math.abs(Math.round(Q.pageX) - (M.current?.x ?? 0)),
            y: Math.abs(Math.round(Q.pageY) - (M.current?.y ?? 0))
          };
        }, "handlePointerMove"), le = /* @__PURE__ */ j((Q) => {
          T.x <= 10 && T.y <= 10 ? Q.preventDefault() : Q.composedPath().includes(_) || U(!1), document.removeEventListener("pointermove", X), M.current = null;
        }, "handlePointerUp");
        return M.current !== null && (document.addEventListener("pointermove", X), document.addEventListener("pointerup", le, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", X), document.removeEventListener("pointerup", le, { capture: !0 });
        };
      }
    }, [_, U, M]), u.useEffect(() => {
      const T = /* @__PURE__ */ j(() => U(!1), "close");
      return window.addEventListener("blur", T), window.addEventListener("resize", T), () => {
        window.removeEventListener("blur", T), window.removeEventListener("resize", T);
      };
    }, [U]);
    const [ae, Z] = er((T) => {
      const X = N().filter((J) => !J.disabled), le = X.find((J) => J.ref.current === document.activeElement), Q = tr(X, T, le);
      Q && setTimeout(() => Q.ref.current?.focus());
    }), oe = u.useCallback(
      (T, X, le) => {
        const Q = !B.current && !le;
        (S.value !== void 0 && S.value === X || Q) && (A(T), Q && (B.current = !0));
      },
      [S.value]
    ), ye = u.useCallback(() => _?.focus(), [_]), _e = u.useCallback(
      (T, X, le) => {
        const Q = !B.current && !le;
        (S.value !== void 0 && S.value === X || Q) && O(T);
      },
      [S.value]
    ), ke = r === "popper" ? Hr : Og, ve = ke === Hr ? {
      side: l,
      sideOffset: c,
      align: g,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: h,
      sticky: v,
      hideWhenDetached: w,
      avoidCollisions: C
    } : {};
    return /* @__PURE__ */ m(
      Js,
      {
        scope: o,
        content: _,
        viewport: R,
        onViewportChange: x,
        itemRefCallback: oe,
        selectedItem: E,
        onItemLeave: ye,
        itemTextRefCallback: _e,
        focusSelectedItem: V,
        selectedItemText: $,
        position: r,
        isPositioned: G,
        searchRef: ae,
        children: /* @__PURE__ */ m(un, { as: Dg, allowPinchZoom: !0, children: /* @__PURE__ */ m(
          To,
          {
            asChild: !0,
            trapped: S.open,
            onMountAutoFocus: (T) => {
              T.preventDefault();
            },
            onUnmountAutoFocus: P(i, (T) => {
              S.trigger?.focus({ preventScroll: !0 }), T.preventDefault();
            }),
            children: /* @__PURE__ */ m(
              an,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (T) => T.preventDefault(),
                onDismiss: () => S.onOpenChange(!1),
                children: /* @__PURE__ */ m(
                  ke,
                  {
                    role: "listbox",
                    id: S.contentId,
                    "data-state": S.open ? "open" : "closed",
                    dir: S.dir,
                    onContextMenu: (T) => T.preventDefault(),
                    ...y,
                    ...ve,
                    onPlaced: () => q(!0),
                    ref: I,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: P(y.onKeyDown, (T) => {
                      const X = T.ctrlKey || T.altKey || T.metaKey;
                      if (T.key === "Tab" && T.preventDefault(), !X && T.key.length === 1 && Z(T.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(T.key)) {
                        let Q = N().filter((J) => !J.disabled).map((J) => J.ref.current);
                        if (["ArrowUp", "End"].includes(T.key) && (Q = Q.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(T.key)) {
                          const J = T.target, te = Q.indexOf(J);
                          Q = Q.slice(te + 1);
                        }
                        setTimeout(() => k(Q)), T.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }, "SelectContentImpl")
), Og = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ j(function(t, n) {
  const { __scopeSelect: o, onPlaced: r, ...i } = t, s = tt(it, o), a = ct(it, o), [l, c] = u.useState(null), [g, d] = u.useState(null), f = K(n, d), p = En(o), h = u.useRef(!1), v = u.useRef(!0), { viewport: w, selectedItem: C, selectedItemText: y, focusSelectedItem: S } = a, _ = u.useCallback(() => {
    if (s.trigger && s.valueNode && l && g && w && C && y) {
      const I = s.trigger.getBoundingClientRect(), E = g.getBoundingClientRect(), A = s.valueNode.getBoundingClientRect(), $ = y.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const J = $.left - E.left, te = A.left - J, Ve = I.left - te, be = I.width + Ve, Dn = Math.max(be, E.width), Tn = window.innerWidth - xe, On = Co(te, [
          xe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(xe, Tn - Dn)
        ]);
        l.style.minWidth = be + "px", l.style.left = On + "px";
      } else {
        const J = E.right - $.right, te = window.innerWidth - A.right - J, Ve = window.innerWidth - I.right - te, be = I.width + Ve, Dn = Math.max(be, E.width), Tn = window.innerWidth - xe, On = Co(te, [
          xe,
          Math.max(xe, Tn - Dn)
        ]);
        l.style.minWidth = be + "px", l.style.right = On + "px";
      }
      const O = p(), N = window.innerHeight - xe * 2, G = w.scrollHeight, q = window.getComputedStyle(g), B = parseInt(q.borderTopWidth, 10), k = parseInt(q.paddingTop, 10), V = parseInt(q.borderBottomWidth, 10), U = parseInt(q.paddingBottom, 10), M = B + k + G + U + V, ae = Math.min(C.offsetHeight * 5, M), Z = window.getComputedStyle(w), oe = parseInt(Z.paddingTop, 10), ye = parseInt(Z.paddingBottom, 10), _e = I.top + I.height / 2 - xe, ke = N - _e, ve = C.offsetHeight / 2, T = C.offsetTop + ve, X = B + k + T, le = M - X;
      if (X <= _e) {
        const J = O.length > 0 && C === O[O.length - 1].ref.current;
        l.style.bottom = "0px";
        const te = g.clientHeight - w.offsetTop - w.offsetHeight, Ve = Math.max(
          ke,
          ve + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (J ? ye : 0) + te + V
        ), be = X + Ve;
        l.style.height = be + "px";
      } else {
        const J = O.length > 0 && C === O[0].ref.current;
        l.style.top = "0px";
        const Ve = Math.max(
          _e,
          B + w.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (J ? oe : 0) + ve
        ) + le;
        l.style.height = Ve + "px", w.scrollTop = X - _e + w.offsetTop;
      }
      l.style.margin = `${xe}px 0`, l.style.minHeight = ae + "px", l.style.maxHeight = N + "px", r?.(), requestAnimationFrame(() => h.current = !0);
    }
  }, [
    p,
    s.trigger,
    s.valueNode,
    l,
    g,
    w,
    C,
    y,
    s.dir,
    r
  ]);
  ee(() => _(), [_]);
  const [b, R] = u.useState();
  ee(() => {
    g && R(window.getComputedStyle(g).zIndex);
  }, [g]);
  const x = u.useCallback(
    (I) => {
      I && v.current === !0 && (_(), S?.(), v.current = !1);
    },
    [_, S]
  );
  return /* @__PURE__ */ m(
    Ag,
    {
      scope: o,
      contentWrapper: l,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: x,
      children: /* @__PURE__ */ m(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: b
          },
          children: /* @__PURE__ */ m(
            z.div,
            {
              ...i,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...i.style
              }
            }
          )
        }
      )
    }
  );
}, "SelectItemAlignedPosition")), Hr = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ j(function(t, n) {
  const {
    __scopeSelect: o,
    align: r = "start",
    collisionPadding: i = xe,
    ...s
  } = t, a = Qo(o);
  return /* @__PURE__ */ m(
    Uo,
    {
      ...a,
      ...s,
      ref: n,
      align: r,
      collisionPadding: i,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
}, "SelectPopperPosition")), [Ag, Jo] = lt(it, {}), Gr = "SelectViewport", Lg = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ j(function(t, n) {
    const { __scopeSelect: o, nonce: r, ...i } = t, s = ct(Gr, o), a = Jo(Gr, o), l = K(n, s.onViewportChange), c = u.useRef(0);
    return /* @__PURE__ */ H(Ot, { children: [
      /* @__PURE__ */ m(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ m(Pn.Slot, { scope: o, children: /* @__PURE__ */ m(
        z.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...i,
          ref: l,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...i.style
          },
          onScroll: P(i.onScroll, (g) => {
            const d = g.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: p } = a;
            if (p?.current && f) {
              const h = Math.abs(c.current - d.scrollTop);
              if (h > 0) {
                const v = window.innerHeight - xe * 2, w = parseFloat(f.style.minHeight), C = parseFloat(f.style.height), y = Math.max(w, C);
                if (y < v) {
                  const S = y + h, _ = Math.min(v, S), b = S - _;
                  f.style.height = _ + "px", f.style.bottom === "0px" && (d.scrollTop = b > 0 ? b : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }, "SelectViewport")
), Fg = "SelectGroup", [Ng, $g] = lt(Fg), kg = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ j(function(t, n) {
    const { __scopeSelect: o, ...r } = t, i = pe();
    return /* @__PURE__ */ m(Ng, { scope: o, id: i, children: /* @__PURE__ */ m(z.div, { role: "group", "aria-labelledby": i, ...r, ref: n }) });
  }, "SelectGroup")
), Vg = "SelectLabel", Hg = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ j(function(t, n) {
    const { __scopeSelect: o, ...r } = t, i = $g(Vg, o);
    return /* @__PURE__ */ m(z.div, { id: i.id, ...r, ref: n });
  }, "SelectLabel")
), So = "SelectItem", [Gg, ea] = lt(So), Bg = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ j(function(t, n) {
    const {
      __scopeSelect: o,
      value: r,
      disabled: i = !1,
      textValue: s,
      ...a
    } = t, l = tt(So, o), c = ct(So, o), g = l.value === r, [d, f] = u.useState(s ?? ""), [p, h] = u.useState(!1), v = he(
      (_) => c.itemRefCallback?.(_, r, i)
    ), w = K(n, v), C = pe(), y = u.useRef("touch"), S = /* @__PURE__ */ j(() => {
      i || (l.onValueChange(r), l.onOpenChange(!1));
    }, "handleSelect");
    return /* @__PURE__ */ m(
      Gg,
      {
        scope: o,
        value: r,
        disabled: i,
        textId: C,
        isSelected: g,
        onItemTextChange: u.useCallback((_) => {
          f((b) => b || (_?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ m(
          Pn.ItemSlot,
          {
            scope: o,
            value: r,
            disabled: i,
            textValue: d,
            children: /* @__PURE__ */ m(
              z.div,
              {
                role: "option",
                "aria-labelledby": C,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": g && p,
                "data-state": g ? "checked" : "unchecked",
                "aria-disabled": i || void 0,
                "data-disabled": i ? "" : void 0,
                tabIndex: i ? void 0 : -1,
                ...a,
                ref: w,
                onFocus: P(a.onFocus, () => h(!0)),
                onBlur: P(a.onBlur, () => h(!1)),
                onClick: P(a.onClick, () => {
                  y.current !== "mouse" && S();
                }),
                onPointerUp: P(a.onPointerUp, () => {
                  y.current === "mouse" && S();
                }),
                onPointerDown: P(a.onPointerDown, (_) => {
                  y.current = _.pointerType;
                }),
                onPointerMove: P(a.onPointerMove, (_) => {
                  y.current = _.pointerType, i ? c.onItemLeave?.() : y.current === "mouse" && _.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: P(a.onPointerLeave, (_) => {
                  _.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: P(a.onKeyDown, (_) => {
                  i || _.target !== _.currentTarget || c.searchRef?.current !== "" && _.key === " " || (gg.includes(_.key) && S(), _.key === " " && _.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }, "SelectItem")
), qt = "SelectItemText", zg = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ j(function(t, n) {
    const { __scopeSelect: o, className: r, style: i, ...s } = t, a = tt(qt, o), l = ct(qt, o), c = ea(qt, o), g = vg(qt, o), [d, f] = u.useState(null), p = he(
      (S) => l.itemTextRefCallback?.(S, c.value, c.disabled)
    ), h = K(
      n,
      f,
      c.onItemTextChange,
      p
    ), v = d?.textContent, w = u.useMemo(
      () => /* @__PURE__ */ m("option", { value: c.value, disabled: c.disabled, children: v }, c.value),
      [c.disabled, c.value, v]
    ), { onNativeOptionAdd: C, onNativeOptionRemove: y } = g;
    return ee(() => (C(w), () => y(w)), [C, y, w]), /* @__PURE__ */ H(Ot, { children: [
      /* @__PURE__ */ m(z.span, { id: c.textId, ...s, ref: h }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren && !kt(a.value) ? At.createPortal(s.children, a.valueNode) : null
    ] });
  }, "SelectItemText")
), Ug = "SelectItemIndicator", jg = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ j(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return ea(Ug, o).isSelected ? /* @__PURE__ */ m(z.span, { "aria-hidden": !0, ...r, ref: n }) : null;
  }, "SelectItemIndicator")
), Br = "SelectScrollUpButton", Wg = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ j(function(t, n) {
  const o = ct(Br, t.__scopeSelect), r = Jo(Br, t.__scopeSelect), [i, s] = u.useState(!1), a = K(n, r.onScrollButtonChange);
  return ee(() => {
    if (o.viewport && o.isPositioned) {
      let l = function() {
        const g = c.scrollTop > 0;
        s(g);
      };
      j(l, "handleScroll");
      const c = o.viewport;
      return l(), c.addEventListener("scroll", l), () => c.removeEventListener("scroll", l);
    }
  }, [o.viewport, o.isPositioned]), i ? /* @__PURE__ */ m(
    ta,
    {
      ...t,
      ref: a,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: c } = o;
        l && c && (l.scrollTop = l.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollUpButton")), zr = "SelectScrollDownButton", Kg = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ j(function(t, n) {
  const o = ct(zr, t.__scopeSelect), r = Jo(zr, t.__scopeSelect), [i, s] = u.useState(!1), a = K(n, r.onScrollButtonChange);
  return ee(() => {
    if (o.viewport && o.isPositioned) {
      let l = function() {
        const g = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < g;
        s(d);
      };
      j(l, "handleScroll");
      const c = o.viewport;
      return l(), c.addEventListener("scroll", l), () => c.removeEventListener("scroll", l);
    }
  }, [o.viewport, o.isPositioned]), i ? /* @__PURE__ */ m(
    ta,
    {
      ...t,
      ref: a,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: c } = o;
        l && c && (l.scrollTop = l.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
}, "SelectScrollDownButton")), ta = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ j(function(t, n) {
  const { __scopeSelect: o, onAutoScroll: r, ...i } = t, s = ct("SelectScrollButton", o), a = u.useRef(null), l = En(o), c = u.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), ee(() => {
    l().find((d) => d.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [l]), /* @__PURE__ */ m(
    z.div,
    {
      "aria-hidden": !0,
      ...i,
      ref: n,
      style: { flexShrink: 0, ...i.style },
      onPointerDown: P(i.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: P(i.onPointerMove, () => {
        s.onItemLeave?.(), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: P(i.onPointerLeave, () => {
        c();
      })
    }
  );
}, "SelectScrollButtonImpl")), qg = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ j(function(t, n) {
    const { __scopeSelect: o, ...r } = t;
    return /* @__PURE__ */ m(z.div, { "aria-hidden": !0, ...r, ref: n });
  }, "SelectSeparator")
), Yg = "SelectBubbleInput", Xg = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ j(function({ __scopeSelect: t, ...n }, o) {
    const r = tt(Yg, t), { value: i, onValueChange: s, required: a, disabled: l, name: c, autoComplete: g, form: d } = r, { nativeOptions: f, nativeSelectKey: p } = r, h = u.useRef(null), v = K(o, h), w = i ?? "", C = Xs(w), y = Array.from(f).some(
      (S) => (S.props.value ?? "") === ""
    );
    return u.useEffect(() => {
      const S = h.current;
      if (!S) return;
      const _ = window.HTMLSelectElement.prototype, R = Object.getOwnPropertyDescriptor(
        _,
        "value"
      ).set;
      if (C !== w && R) {
        const x = new Event("change", { bubbles: !0 });
        R.call(S, w), S.dispatchEvent(x);
      }
    }, [C, w]), /* @__PURE__ */ H(
      z.select,
      {
        "aria-hidden": !0,
        required: a,
        tabIndex: -1,
        name: c,
        autoComplete: g,
        disabled: l,
        form: d,
        onChange: (S) => s(S.target.value),
        ...n,
        style: { ...Zs, ...n.style },
        ref: v,
        defaultValue: w,
        children: [
          kt(i) && !y ? /* @__PURE__ */ m("option", { value: "" }) : null,
          Array.from(f)
        ]
      },
      p
    );
  }, "SelectBubbleInput")
);
function na(e) {
  return typeof e == "function";
}
j(na, "isFunction");
function kt(e) {
  return e === "" || e === void 0;
}
j(kt, "shouldShowPlaceholder");
function er(e) {
  const t = he(e), n = u.useRef(""), o = u.useRef(0), r = u.useCallback(
    (s) => {
      const a = n.current + s;
      t(a), (/* @__PURE__ */ j((function l(c) {
        n.current = c, window.clearTimeout(o.current), c !== "" && (o.current = window.setTimeout(() => l(""), 1e3));
      }), "updateSearch"))(a);
    },
    [t]
  ), i = u.useCallback(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(o.current), []), [n, r, i];
}
j(er, "useTypeaheadSearch");
function tr(e, t, n) {
  const r = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let s = oa(e, Math.max(i, 0));
  r.length === 1 && (s = s.filter((c) => c !== n));
  const l = s.find(
    (c) => c.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
j(tr, "findNextItem");
function oa(e, t) {
  return e.map((n, o) => e[(t + o) % e.length]);
}
j(oa, "wrapArray");
const mh = wg, hh = kg, vh = _g, Zg = Y(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ H(Sg, { ref: o, className: D("nb-select__trigger", e), ...n, children: [
  t,
  /* @__PURE__ */ m(bg, { asChild: !0, children: /* @__PURE__ */ m(Ki, { size: 16, "aria-hidden": "true" }) })
] }));
Zg.displayName = "SelectTrigger";
const Qg = Y(({ className: e, children: t, position: n = "popper", ...o }, r) => /* @__PURE__ */ m(Eg, { children: /* @__PURE__ */ H(
  Mg,
  {
    ref: r,
    className: D("nb-select__content", e),
    position: n,
    ...o,
    children: [
      /* @__PURE__ */ m(Wg, { className: "nb-select__scroll-button", children: /* @__PURE__ */ m(_c, { size: 16, "aria-hidden": "true" }) }),
      /* @__PURE__ */ m(Lg, { className: "nb-select__viewport", children: t }),
      /* @__PURE__ */ m(Kg, { className: "nb-select__scroll-button", children: /* @__PURE__ */ m(Ki, { size: 16, "aria-hidden": "true" }) })
    ]
  }
) }));
Qg.displayName = "SelectContent";
const Jg = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(Hg, { ref: n, className: D("nb-select__label", e), ...t }));
Jg.displayName = "SelectLabel";
const ep = Y(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ H(Bg, { ref: o, className: D("nb-select__item", e), ...n, children: [
  /* @__PURE__ */ m("span", { className: "nb-select__item-indicator", children: /* @__PURE__ */ m(jg, { children: /* @__PURE__ */ m(Wi, { size: 15, "aria-hidden": "true" }) }) }),
  /* @__PURE__ */ m(zg, { children: t })
] }));
ep.displayName = "SelectItem";
const tp = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(qg, { ref: n, className: D("nb-select__separator", e), ...t }));
tp.displayName = "SelectSeparator";
function wh({ className: e, ...t }) {
  return /* @__PURE__ */ m("div", { className: D("nb-skeleton", e), "aria-hidden": "true", ...t });
}
function Ch({ className: e, ...t }) {
  return /* @__PURE__ */ m("span", { className: D("nb-spinner", e), role: "status", "aria-label": "Loading", ...t });
}
var np = Object.defineProperty, bt = (e, t) => np(e, "name", { value: t, configurable: !0 }), nr = "Tabs", [op, Sh] = /* @__PURE__ */ Ie(nr, [
  _n
]), ra = _n(), [rp, or] = op(nr), ip = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ bt(function(t, n) {
    const {
      __scopeTabs: o,
      value: r,
      onValueChange: i,
      defaultValue: s,
      orientation: a = "horizontal",
      dir: l,
      activationMode: c = "automatic",
      ...g
    } = t, d = Nt(l), [f, p] = je({
      prop: r,
      onChange: i,
      defaultProp: s ?? "",
      caller: nr
    });
    return /* @__PURE__ */ m(
      rp,
      {
        scope: o,
        baseId: pe(),
        value: f,
        onValueChange: p,
        orientation: a,
        dir: d,
        activationMode: c,
        children: /* @__PURE__ */ m(
          z.div,
          {
            dir: d,
            "data-orientation": a,
            ...g,
            ref: n
          }
        )
      }
    );
  }, "Tabs")
), sp = "TabsList", ap = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ bt(function(t, n) {
    const { __scopeTabs: o, loop: r = !0, ...i } = t, s = or(sp, o), a = ra(o);
    return /* @__PURE__ */ m(
      Es,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ m(
          z.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...i,
            ref: n
          }
        )
      }
    );
  }, "TabsList")
), lp = "TabsTrigger", cp = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ bt(function(t, n) {
    const { __scopeTabs: o, value: r, disabled: i = !1, ...s } = t, a = or(lp, o), l = ra(o), c = rr(a.baseId, r), g = ir(a.baseId, r), d = r === a.value;
    return /* @__PURE__ */ m(
      Ms,
      {
        asChild: !0,
        ...l,
        focusable: !i,
        active: d,
        children: /* @__PURE__ */ m(
          z.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": d,
            "aria-controls": g,
            "data-state": d ? "active" : "inactive",
            "data-disabled": i ? "" : void 0,
            disabled: i,
            id: c,
            ...s,
            ref: n,
            onMouseDown: P(t.onMouseDown, (f) => {
              !i && f.button === 0 && f.ctrlKey === !1 ? a.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: P(t.onKeyDown, (f) => {
              i || f.target !== f.currentTarget || [" ", "Enter"].includes(f.key) && a.onValueChange(r);
            }),
            onFocus: P(t.onFocus, () => {
              const f = a.activationMode !== "manual";
              !d && !i && f && a.onValueChange(r);
            })
          }
        )
      }
    );
  }, "TabsTrigger")
), up = "TabsContent", dp = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ bt(function(t, n) {
    const { __scopeTabs: o, value: r, forceMount: i, children: s, ...a } = t, l = or(up, o), c = rr(l.baseId, r), g = ir(l.baseId, r), d = r === l.value, f = u.useRef(d);
    return u.useEffect(() => {
      const p = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(p);
    }, []), /* @__PURE__ */ m(De, { present: i || d, children: ({ present: p }) => /* @__PURE__ */ m(
      z.div,
      {
        "data-state": d ? "active" : "inactive",
        "data-orientation": l.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !p,
        id: g,
        tabIndex: 0,
        ...a,
        ref: n,
        style: {
          ...t.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: p && s
      }
    ) });
  }, "TabsContent")
);
function rr(e, t) {
  return `${e}-trigger-${t}`;
}
bt(rr, "makeTriggerId");
function ir(e, t) {
  return `${e}-content-${t}`;
}
bt(ir, "makeContentId");
var fp = ip, gp = ap, pp = cp, mp = dp;
const yh = fp, hp = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(gp, { ref: n, className: D("nb-tabs__list", e), ...t }));
hp.displayName = "TabsList";
const vp = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(pp, { ref: n, className: D("nb-tabs__trigger", e), ...t }));
vp.displayName = "TabsTrigger";
const wp = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m(mp, { ref: n, className: D("nb-tabs__content", e), ...t }));
wp.displayName = "TabsContent";
const Cp = Y(({ className: e, ...t }, n) => /* @__PURE__ */ m("textarea", { ref: n, className: D("nb-textarea", e), ...t }));
Cp.displayName = "Textarea";
var Sp = Object.defineProperty, re = (e, t) => Sp(e, "name", { value: t, configurable: !0 }), [sr, _h] = /* @__PURE__ */ Ie("Tooltip", [
  _t
]), Mn = _t(), yp = "TooltipProvider", _p = 700, yo = "tooltip.open", [bp, ar] = sr(yp), Rp = /* @__PURE__ */ re((e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = _p,
    skipDelayDuration: o = 300,
    disableHoverableContent: r = !1,
    children: i
  } = e, s = u.useRef(!0), a = u.useRef(!1), l = u.useRef(0);
  return u.useEffect(() => {
    const c = l.current;
    return () => window.clearTimeout(c);
  }, []), /* @__PURE__ */ m(
    bp,
    {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: u.useCallback(() => {
        o <= 0 || (window.clearTimeout(l.current), s.current = !1);
      }, [o]),
      onClose: u.useCallback(() => {
        o <= 0 || (window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s.current = !0,
          o
        ));
      }, [o]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: u.useCallback((c) => {
        a.current = c;
      }, []),
      disableHoverableContent: r,
      children: i
    }
  );
}, "TooltipProvider"), _o = "Tooltip", [xp, Vt] = sr(_o), Pp = /* @__PURE__ */ re((e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: o,
    defaultOpen: r,
    onOpenChange: i,
    disableHoverableContent: s,
    delayDuration: a
  } = e, l = ar(_o, e.__scopeTooltip), c = Mn(t), [g, d] = u.useState(null), [f, p] = u.useState(void 0), h = pe(), v = u.useRef(0), w = s ?? l.disableHoverableContent, C = a ?? l.delayDuration, y = u.useRef(!1), [S, _] = je({
    prop: o,
    defaultProp: r ?? !1,
    onChange: /* @__PURE__ */ re((A) => {
      A ? (l.onOpen(), document.dispatchEvent(new CustomEvent(yo))) : l.onClose(), i?.(A);
    }, "onChange"),
    caller: _o
  }), b = u.useMemo(() => S ? y.current ? "delayed-open" : "instant-open" : "closed", [S]), R = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, y.current = !1, _(!0);
  }, [_]), x = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = 0, _(!1);
  }, [_]), I = u.useCallback(() => {
    window.clearTimeout(v.current), v.current = window.setTimeout(() => {
      y.current = !0, _(!0), v.current = 0;
    }, C);
  }, [C, _]);
  return u.useEffect(() => () => {
    v.current && (window.clearTimeout(v.current), v.current = 0);
  }, []), /* @__PURE__ */ m(Sn, { ...c, children: /* @__PURE__ */ m(
    xp,
    {
      scope: t,
      contentId: f ?? h,
      setContentId: p,
      open: S,
      stateAttribute: b,
      trigger: g,
      onTriggerChange: d,
      onTriggerEnter: u.useCallback(() => {
        l.isOpenDelayedRef.current ? I() : R();
      }, [l.isOpenDelayedRef, I, R]),
      onTriggerLeave: u.useCallback(() => {
        w ? x() : (window.clearTimeout(v.current), v.current = 0);
      }, [x, w]),
      onOpen: R,
      onClose: x,
      disableHoverableContent: w,
      children: n
    }
  ) });
}, "Tooltip"), Ur = "TooltipTrigger", Ep = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ re(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, i = Vt(Ur, o), s = ar(Ur, o), a = Mn(o), l = u.useRef(null), c = K(n, l, i.onTriggerChange), g = u.useRef(!1), d = u.useRef(!1), f = u.useCallback(() => g.current = !1, []);
    return u.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ m(zo, { asChild: !0, ...a, children: /* @__PURE__ */ m(
      z.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: P(t.onPointerMove, (p) => {
          p.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (i.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: P(t.onPointerLeave, () => {
          i.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: P(t.onPointerDown, () => {
          i.open && i.onClose(), g.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: P(t.onFocus, () => {
          g.current || i.onOpen();
        }),
        onBlur: P(t.onBlur, i.onClose),
        onClick: P(t.onClick, i.onClose)
      }
    ) });
  }, "TooltipTrigger")
), ia = "TooltipPortal", [Mp, Ip] = sr(ia, {
  forceMount: void 0
}), Dp = /* @__PURE__ */ re((e) => {
  const { __scopeTooltip: t, forceMount: n, children: o, container: r } = e, i = Vt(ia, t);
  return /* @__PURE__ */ m(Mp, { scope: t, forceMount: n, children: /* @__PURE__ */ m(De, { present: n || i.open, children: /* @__PURE__ */ m(ln, { asChild: !0, container: r, children: o }) }) });
}, "TooltipPortal"), Tt = "TooltipContent", Tp = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ re(function(t, n) {
    const o = Ip(Tt, t.__scopeTooltip), { forceMount: r = o.forceMount, side: i = "top", ...s } = t, a = Vt(Tt, t.__scopeTooltip);
    return /* @__PURE__ */ m(De, { present: r || a.open, children: a.disableHoverableContent ? /* @__PURE__ */ m(sa, { side: i, ...s, ref: n }) : /* @__PURE__ */ m(Op, { side: i, ...s, ref: n }) });
  }, "TooltipContent")
), Op = /* @__PURE__ */ u.forwardRef(/* @__PURE__ */ re(function(t, n) {
  const o = Vt(Tt, t.__scopeTooltip), r = ar(Tt, t.__scopeTooltip), i = u.useRef(null), s = K(n, i), [a, l] = u.useState(null), { trigger: c, onClose: g } = o, d = i.current, { onPointerInTransitChange: f } = r, p = u.useCallback(() => {
    l(null), f(!1);
  }, [f]), h = u.useCallback(
    (v, w) => {
      const C = v.currentTarget, y = { x: v.clientX, y: v.clientY }, S = aa(y, C.getBoundingClientRect()), _ = la(y, S), b = ca(w.getBoundingClientRect()), R = da([..._, ...b]);
      l(R), f(!0);
    },
    [f]
  );
  return u.useEffect(() => () => p(), [p]), u.useEffect(() => {
    if (c && d) {
      const v = /* @__PURE__ */ re((C) => h(C, d), "handleTriggerLeave"), w = /* @__PURE__ */ re((C) => h(C, c), "handleContentLeave");
      return c.addEventListener("pointerleave", v), d.addEventListener("pointerleave", w), () => {
        c.removeEventListener("pointerleave", v), d.removeEventListener("pointerleave", w);
      };
    }
  }, [c, d, h, p]), u.useEffect(() => {
    if (a) {
      const v = /* @__PURE__ */ re((w) => {
        const C = w.target, y = { x: w.clientX, y: w.clientY }, S = c?.contains(C) || d?.contains(C), _ = !ua(y, a);
        S ? p() : _ && (p(), g());
      }, "handleTrackPointerGrace");
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [c, d, a, g, p]), /* @__PURE__ */ m(sa, { ...t, ref: s });
}, "TooltipContentHoverable")), Ap = /* @__PURE__ */ ei("TooltipContent"), sa = /* @__PURE__ */ u.forwardRef(
  // blank line to reduce diff noise
  /* @__PURE__ */ re(function(t, n) {
    const {
      __scopeTooltip: o,
      children: r,
      "aria-label": i,
      id: s,
      onEscapeKeyDown: a,
      onPointerDownOutside: l,
      ...c
    } = t, g = Vt(Tt, o), d = Mn(o), { onClose: f } = g;
    u.useEffect(() => (document.addEventListener(yo, f), () => document.removeEventListener(yo, f)), [f]), u.useEffect(() => {
      if (g.trigger) {
        const h = /* @__PURE__ */ re((v) => {
          v.target instanceof Node && v.target.contains(g.trigger) && f();
        }, "handleScroll");
        return window.addEventListener("scroll", h, { capture: !0 }), () => window.removeEventListener("scroll", h, { capture: !0 });
      }
    }, [g.trigger, f]);
    const { setContentId: p } = g;
    return ee(() => (p(s), () => {
      p(void 0);
    }), [s, p]), /* @__PURE__ */ m(
      an,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ H(
          Uo,
          {
            "data-state": g.stateAttribute,
            role: i ? void 0 : "tooltip",
            id: i ? void 0 : g.contentId,
            ...d,
            ...c,
            ref: n,
            style: {
              ...c.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ m(Ap, { children: r }),
              i ? /* @__PURE__ */ m(ug, { id: g.contentId, role: "tooltip", children: i }) : null
            ]
          }
        )
      }
    );
  }, "TooltipContentImpl")
), Lp = /* @__PURE__ */ u.forwardRef(
  /* @__PURE__ */ re(function(t, n) {
    const { __scopeTooltip: o, ...r } = t, i = Mn(o);
    return /* @__PURE__ */ m(sd, { ...i, ...r, ref: n });
  }, "TooltipArrow")
);
function aa(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, i)) {
    case i:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
re(aa, "getExitSideFromRect");
function la(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      o.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      o.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return o;
}
re(la, "getPaddedExitPoints");
function ca(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    { x: r, y: t },
    { x: n, y: t },
    { x: n, y: o },
    { x: r, y: o }
  ];
}
re(ca, "getPointsFromRect");
function ua(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const a = t[i], l = t[s], c = a.x, g = a.y, d = l.x, f = l.y;
    g > o != f > o && n < (d - c) * (o - g) / (f - g) + c && (r = !r);
  }
  return r;
}
re(ua, "isPointInPolygon");
function da(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), fa(t);
}
re(da, "getHull");
function fa(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (r.y - s.y) >= (i.y - s.y) * (r.x - s.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
re(fa, "getHullPresorted");
var Fp = Rp, Np = Pp, $p = Ep, kp = Dp, Vp = Tp, Hp = Lp;
const bh = Fp, Rh = Np, xh = $p, Gp = Y(({ className: e, sideOffset: t = 6, children: n, ...o }, r) => /* @__PURE__ */ m(kp, { children: /* @__PURE__ */ H(Vp, { ref: r, sideOffset: t, className: D("nb-tooltip__content", e), ...o, children: [
  n,
  /* @__PURE__ */ m(Hp, { className: "nb-tooltip__arrow" })
] }) }));
Gp.displayName = "TooltipContent";
function Ph({
  className: e,
  leading: t,
  title: n,
  subtitle: o,
  center: r,
  actions: i,
  user: s,
  sticky: a = !0,
  ...l
}) {
  return /* @__PURE__ */ H("header", { className: D("nb-app-header", a && "nb-app-header--sticky", e), ...l, children: [
    /* @__PURE__ */ H("div", { className: "nb-app-header__leading", children: [
      t,
      n || o ? /* @__PURE__ */ H("div", { className: "nb-app-header__copy", children: [
        n ? /* @__PURE__ */ m("div", { className: "nb-app-header__title", children: n }) : null,
        o ? /* @__PURE__ */ m("div", { className: "nb-app-header__subtitle", children: o }) : null
      ] }) : null
    ] }),
    r ? /* @__PURE__ */ m("div", { className: "nb-app-header__center", children: r }) : null,
    /* @__PURE__ */ H("div", { className: "nb-app-header__trailing", children: [
      i ? /* @__PURE__ */ m("div", { className: "nb-app-header__actions", children: i }) : null,
      s ? /* @__PURE__ */ m("div", { className: "nb-app-header__user", children: s }) : null
    ] })
  ] });
}
function Eh({
  className: e,
  brand: t,
  sections: n,
  footer: o,
  collapsed: r = !1,
  ariaLabel: i = "Primary navigation",
  ...s
}) {
  return /* @__PURE__ */ H("aside", { className: D("nb-app-sidebar", r && "nb-app-sidebar--collapsed", e), ...s, children: [
    t ? /* @__PURE__ */ m("div", { className: "nb-app-sidebar__brand", children: t }) : null,
    /* @__PURE__ */ m("nav", { className: "nb-app-sidebar__nav", "aria-label": i, children: n.map((a) => /* @__PURE__ */ H("div", { className: "nb-app-sidebar__section", children: [
      a.label && !r ? /* @__PURE__ */ m("div", { className: "nb-app-sidebar__section-label", children: a.label }) : null,
      /* @__PURE__ */ m("div", { className: "nb-app-sidebar__items", children: a.items.map((l) => {
        const c = /* @__PURE__ */ H(Ot, { children: [
          l.icon ? /* @__PURE__ */ m("span", { className: "nb-app-sidebar__icon", "aria-hidden": "true", children: l.icon }) : null,
          /* @__PURE__ */ m("span", { className: "nb-app-sidebar__label", children: l.label }),
          l.badge ? /* @__PURE__ */ m("span", { className: "nb-app-sidebar__badge", children: l.badge }) : null
        ] }), g = D(
          "nb-app-sidebar__item",
          l.active && "nb-app-sidebar__item--active",
          l.disabled && "nb-app-sidebar__item--disabled"
        );
        return l.href ? /* @__PURE__ */ m(
          "a",
          {
            className: g,
            href: l.href,
            "aria-current": l.active ? "page" : void 0,
            "aria-disabled": l.disabled || void 0,
            tabIndex: l.disabled ? -1 : void 0,
            title: r && typeof l.label == "string" ? l.label : void 0,
            onClick: (d) => {
              l.disabled ? d.preventDefault() : l.onSelect?.();
            },
            children: c
          },
          l.id
        ) : /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            className: g,
            disabled: l.disabled,
            "aria-current": l.active ? "page" : void 0,
            title: r && typeof l.label == "string" ? l.label : void 0,
            onClick: l.onSelect,
            children: c
          },
          l.id
        );
      }) })
    ] }, a.id)) }),
    o ? /* @__PURE__ */ m("div", { className: "nb-app-sidebar__footer", children: o }) : null
  ] });
}
function Ye(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ce(e, t) {
  return (n) => {
    t.setState((o) => ({
      ...o,
      [e]: Ye(n, o[e])
    }));
  };
}
function In(e) {
  return e instanceof Function;
}
function Bp(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function zp(e, t) {
  const n = [], o = (r) => {
    r.forEach((i) => {
      n.push(i);
      const s = t(i);
      s != null && s.length && o(s);
    });
  };
  return o(e), n;
}
function L(e, t, n) {
  let o = [], r;
  return (i) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const a = e(i);
    if (!(a.length !== o.length || a.some((g, d) => o[d] !== g)))
      return r;
    o = a;
    let c;
    if (n.key && n.debug && (c = Date.now()), r = t(...a), n == null || n.onChange == null || n.onChange(r), n.key && n.debug && n != null && n.debug()) {
      const g = Math.round((Date.now() - s) * 100) / 100, d = Math.round((Date.now() - c) * 100) / 100, f = d / 16, p = (h, v) => {
        for (h = String(h); h.length < v; )
          h = " " + h;
        return h;
      };
      console.info(`%c⏱ ${p(d, 5)} /${p(g, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, n?.key);
    }
    return r;
  };
}
function F(e, t, n, o) {
  return {
    debug: () => {
      var r;
      return (r = e?.debugAll) != null ? r : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: o
  };
}
function Up(e, t, n, o) {
  const r = () => {
    var s;
    return (s = i.getValue()) != null ? s : e.options.renderFallbackValue;
  }, i = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(o),
    renderValue: r,
    getContext: L(() => [e, n, t, i], (s, a, l, c) => ({
      table: s,
      column: a,
      row: l,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), F(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(i, n, t, e);
  }, {}), i;
}
function jp(e, t, n, o) {
  var r, i;
  const a = {
    ...e._getDefaultColumnDef(),
    ...t
  }, l = a.accessorKey;
  let c = (r = (i = a.id) != null ? i : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? r : typeof a.header == "string" ? a.header : void 0, g;
  if (a.accessorFn ? g = a.accessorFn : l && (l.includes(".") ? g = (f) => {
    let p = f;
    for (const v of l.split(".")) {
      var h;
      p = (h = p) == null ? void 0 : h[v], process.env.NODE_ENV !== "production" && p === void 0 && console.warn(`"${v}" in deeply nested key "${l}" returned undefined.`);
    }
    return p;
  } : g = (f) => f[a.accessorKey]), !c)
    throw process.env.NODE_ENV !== "production" ? new Error(a.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let d = {
    id: `${String(c)}`,
    accessorFn: g,
    parent: o,
    depth: n,
    columnDef: a,
    columns: [],
    getFlatColumns: L(() => [!0], () => {
      var f;
      return [d, ...(f = d.columns) == null ? void 0 : f.flatMap((p) => p.getFlatColumns())];
    }, F(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: L(() => [e._getOrderColumnsFn()], (f) => {
      var p;
      if ((p = d.columns) != null && p.length) {
        let h = d.columns.flatMap((v) => v.getLeafColumns());
        return f(h);
      }
      return [d];
    }, F(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const f of e._features)
    f.createColumn == null || f.createColumn(d, e);
  return d;
}
const ue = "debugHeaders";
function jr(e, t, n) {
  var o;
  let i = {
    id: (o = n.id) != null ? o : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const s = [], a = (l) => {
        l.subHeaders && l.subHeaders.length && l.subHeaders.map(a), s.push(l);
      };
      return a(i), s;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: t
    })
  };
  return e._features.forEach((s) => {
    s.createHeader == null || s.createHeader(i, e);
  }), i;
}
const Wp = {
  createTable: (e) => {
    e.getHeaderGroups = L(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o, r) => {
      var i, s;
      const a = (i = o?.map((d) => n.find((f) => f.id === d)).filter(Boolean)) != null ? i : [], l = (s = r?.map((d) => n.find((f) => f.id === d)).filter(Boolean)) != null ? s : [], c = n.filter((d) => !(o != null && o.includes(d.id)) && !(r != null && r.includes(d.id)));
      return Yt(t, [...a, ...c, ...l], e);
    }, F(e.options, ue, "getHeaderGroups")), e.getCenterHeaderGroups = L(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o, r) => (n = n.filter((i) => !(o != null && o.includes(i.id)) && !(r != null && r.includes(i.id))), Yt(t, n, e, "center")), F(e.options, ue, "getCenterHeaderGroups")), e.getLeftHeaderGroups = L(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, o) => {
      var r;
      const i = (r = o?.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? r : [];
      return Yt(t, i, e, "left");
    }, F(e.options, ue, "getLeftHeaderGroups")), e.getRightHeaderGroups = L(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, o) => {
      var r;
      const i = (r = o?.map((s) => n.find((a) => a.id === s)).filter(Boolean)) != null ? r : [];
      return Yt(t, i, e, "right");
    }, F(e.options, ue, "getRightHeaderGroups")), e.getFooterGroups = L(() => [e.getHeaderGroups()], (t) => [...t].reverse(), F(e.options, ue, "getFooterGroups")), e.getLeftFooterGroups = L(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), F(e.options, ue, "getLeftFooterGroups")), e.getCenterFooterGroups = L(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), F(e.options, ue, "getCenterFooterGroups")), e.getRightFooterGroups = L(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), F(e.options, ue, "getRightFooterGroups")), e.getFlatHeaders = L(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), F(e.options, ue, "getFlatHeaders")), e.getLeftFlatHeaders = L(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), F(e.options, ue, "getLeftFlatHeaders")), e.getCenterFlatHeaders = L(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), F(e.options, ue, "getCenterFlatHeaders")), e.getRightFlatHeaders = L(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), F(e.options, ue, "getRightFlatHeaders")), e.getCenterLeafHeaders = L(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), F(e.options, ue, "getCenterLeafHeaders")), e.getLeftLeafHeaders = L(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), F(e.options, ue, "getLeftLeafHeaders")), e.getRightLeafHeaders = L(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), F(e.options, ue, "getRightLeafHeaders")), e.getLeafHeaders = L(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, o) => {
      var r, i, s, a, l, c;
      return [...(r = (i = t[0]) == null ? void 0 : i.headers) != null ? r : [], ...(s = (a = n[0]) == null ? void 0 : a.headers) != null ? s : [], ...(l = (c = o[0]) == null ? void 0 : c.headers) != null ? l : []].map((g) => g.getLeafHeaders()).flat();
    }, F(e.options, ue, "getLeafHeaders"));
  }
};
function Yt(e, t, n, o) {
  var r, i;
  let s = 0;
  const a = function(f, p) {
    p === void 0 && (p = 1), s = Math.max(s, p), f.filter((h) => h.getIsVisible()).forEach((h) => {
      var v;
      (v = h.columns) != null && v.length && a(h.columns, p + 1);
    }, 0);
  };
  a(e);
  let l = [];
  const c = (f, p) => {
    const h = {
      depth: p,
      id: [o, `${p}`].filter(Boolean).join("_"),
      headers: []
    }, v = [];
    f.forEach((w) => {
      const C = [...v].reverse()[0], y = w.column.depth === h.depth;
      let S, _ = !1;
      if (y && w.column.parent ? S = w.column.parent : (S = w.column, _ = !0), C && C?.column === S)
        C.subHeaders.push(w);
      else {
        const b = jr(n, S, {
          id: [o, p, S.id, w?.id].filter(Boolean).join("_"),
          isPlaceholder: _,
          placeholderId: _ ? `${v.filter((R) => R.column === S).length}` : void 0,
          depth: p,
          index: v.length
        });
        b.subHeaders.push(w), v.push(b);
      }
      h.headers.push(w), w.headerGroup = h;
    }), l.push(h), p > 0 && c(v, p - 1);
  }, g = t.map((f, p) => jr(n, f, {
    depth: s,
    index: p
  }));
  c(g, s - 1), l.reverse();
  const d = (f) => f.filter((h) => h.column.getIsVisible()).map((h) => {
    let v = 0, w = 0, C = [0];
    h.subHeaders && h.subHeaders.length ? (C = [], d(h.subHeaders).forEach((S) => {
      let {
        colSpan: _,
        rowSpan: b
      } = S;
      v += _, C.push(b);
    })) : v = 1;
    const y = Math.min(...C);
    return w = w + y, h.colSpan = v, h.rowSpan = w, {
      colSpan: v,
      rowSpan: w
    };
  });
  return d((r = (i = l[0]) == null ? void 0 : i.headers) != null ? r : []), l;
}
const Kp = (e, t, n, o, r, i, s) => {
  let a = {
    id: t,
    index: o,
    original: n,
    depth: r,
    parentId: s,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (l) => {
      if (a._valuesCache.hasOwnProperty(l))
        return a._valuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return a._valuesCache[l] = c.accessorFn(a.original, o), a._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (a._uniqueValuesCache.hasOwnProperty(l))
        return a._uniqueValuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return c.columnDef.getUniqueValues ? (a._uniqueValuesCache[l] = c.columnDef.getUniqueValues(a.original, o), a._uniqueValuesCache[l]) : (a._uniqueValuesCache[l] = [a.getValue(l)], a._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var c;
      return (c = a.getValue(l)) != null ? c : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => zp(a.subRows, (l) => l.subRows),
    getParentRow: () => a.parentId ? e.getRow(a.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], c = a;
      for (; ; ) {
        const g = c.getParentRow();
        if (!g) break;
        l.push(g), c = g;
      }
      return l.reverse();
    },
    getAllCells: L(() => [e.getAllLeafColumns()], (l) => l.map((c) => Up(e, a, c, c.id)), F(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: L(() => [a.getAllCells()], (l) => l.reduce((c, g) => (c[g.column.id] = g, c), {}), F(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(a, e);
  }
  return a;
}, qp = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, ga = (e, t, n) => {
  var o, r;
  const i = n == null || (o = n.toString()) == null ? void 0 : o.toLowerCase();
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
};
ga.autoRemove = (e) => Ee(e);
const pa = (e, t, n) => {
  var o;
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
};
pa.autoRemove = (e) => Ee(e);
const ma = (e, t, n) => {
  var o;
  return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === n?.toLowerCase();
};
ma.autoRemove = (e) => Ee(e);
const ha = (e, t, n) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
};
ha.autoRemove = (e) => Ee(e);
const va = (e, t, n) => !n.some((o) => {
  var r;
  return !((r = e.getValue(t)) != null && r.includes(o));
});
va.autoRemove = (e) => Ee(e) || !(e != null && e.length);
const wa = (e, t, n) => n.some((o) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
});
wa.autoRemove = (e) => Ee(e) || !(e != null && e.length);
const Ca = (e, t, n) => e.getValue(t) === n;
Ca.autoRemove = (e) => Ee(e);
const Sa = (e, t, n) => e.getValue(t) == n;
Sa.autoRemove = (e) => Ee(e);
const lr = (e, t, n) => {
  let [o, r] = n;
  const i = e.getValue(t);
  return i >= o && i <= r;
};
lr.resolveFilterValue = (e) => {
  let [t, n] = e, o = typeof t != "number" ? parseFloat(t) : t, r = typeof n != "number" ? parseFloat(n) : n, i = t === null || Number.isNaN(o) ? -1 / 0 : o, s = n === null || Number.isNaN(r) ? 1 / 0 : r;
  if (i > s) {
    const a = i;
    i = s, s = a;
  }
  return [i, s];
};
lr.autoRemove = (e) => Ee(e) || Ee(e[0]) && Ee(e[1]);
const Ge = {
  includesString: ga,
  includesStringSensitive: pa,
  equalsString: ma,
  arrIncludes: ha,
  arrIncludesAll: va,
  arrIncludesSome: wa,
  equals: Ca,
  weakEquals: Sa,
  inNumberRange: lr
};
function Ee(e) {
  return e == null || e === "";
}
const Yp = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Ce("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], o = n?.getValue(e.id);
      return typeof o == "string" ? Ge.includesString : typeof o == "number" ? Ge.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? Ge.equals : Array.isArray(o) ? Ge.arrIncludes : Ge.weakEquals;
    }, e.getFilterFn = () => {
      var n, o;
      return In(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : Ge[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, o, r;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((o = t.options.enableColumnFilters) != null ? o : !0) && ((r = t.options.enableFilters) != null ? r : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = t.getState().columnFilters) == null || (n = n.find((o) => o.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, o;
      return (n = (o = t.getState().columnFilters) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      t.setColumnFilters((o) => {
        const r = e.getFilterFn(), i = o?.find((g) => g.id === e.id), s = Ye(n, i ? i.value : void 0);
        if (Wr(r, s, e)) {
          var a;
          return (a = o?.filter((g) => g.id !== e.id)) != null ? a : [];
        }
        const l = {
          id: e.id,
          value: s
        };
        if (i) {
          var c;
          return (c = o?.map((g) => g.id === e.id ? l : g)) != null ? c : [];
        }
        return o != null && o.length ? [...o, l] : [l];
      });
    };
  },
  createRow: (e, t) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(), o = (r) => {
        var i;
        return (i = Ye(t, r)) == null ? void 0 : i.filter((s) => {
          const a = n.find((l) => l.id === s.id);
          if (a) {
            const l = a.getFilterFn();
            if (Wr(l, s.value, a))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(o);
    }, e.resetColumnFilters = (t) => {
      var n, o;
      e.setColumnFilters(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function Wr(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Xp = (e, t, n) => n.reduce((o, r) => {
  const i = r.getValue(e);
  return o + (typeof i == "number" ? i : 0);
}, 0), Zp = (e, t, n) => {
  let o;
  return n.forEach((r) => {
    const i = r.getValue(e);
    i != null && (o > i || o === void 0 && i >= i) && (o = i);
  }), o;
}, Qp = (e, t, n) => {
  let o;
  return n.forEach((r) => {
    const i = r.getValue(e);
    i != null && (o < i || o === void 0 && i >= i) && (o = i);
  }), o;
}, Jp = (e, t, n) => {
  let o, r;
  return n.forEach((i) => {
    const s = i.getValue(e);
    s != null && (o === void 0 ? s >= s && (o = r = s) : (o > s && (o = s), r < s && (r = s)));
  }), [o, r];
}, em = (e, t) => {
  let n = 0, o = 0;
  if (t.forEach((r) => {
    let i = r.getValue(e);
    i != null && (i = +i) >= i && (++n, o += i);
  }), n) return o / n;
}, tm = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((i) => i.getValue(e));
  if (!Bp(n))
    return;
  if (n.length === 1)
    return n[0];
  const o = Math.floor(n.length / 2), r = n.sort((i, s) => i - s);
  return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
}, nm = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), om = (e, t) => new Set(t.map((n) => n.getValue(e))).size, rm = (e, t) => t.length, Wn = {
  sum: Xp,
  min: Zp,
  max: Qp,
  extent: Jp,
  mean: em,
  median: tm,
  unique: nm,
  uniqueCount: om,
  count: rm
}, im = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var t, n;
      return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: Ce("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, t) => {
    e.toggleGrouping = () => {
      t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((o) => o !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, o;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((o = t.options.enableGrouping) != null ? o : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
    }, e.getGroupedIndex = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const n = e.getCanGroup();
      return () => {
        n && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const n = t.getCoreRowModel().flatRows[0], o = n?.getValue(e.id);
      if (typeof o == "number")
        return Wn.sum;
      if (Object.prototype.toString.call(o) === "[object Date]")
        return Wn.extent;
    }, e.getAggregationFn = () => {
      var n, o;
      if (!e)
        throw new Error();
      return In(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : Wn[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
      var n, o;
      e.setGrouping(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, t) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const o = t.getColumn(n);
      return o != null && o.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = o.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, t, n, o) => {
    e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
      var r;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((r = n.subRows) != null && r.length);
    };
  }
};
function sm(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const o = e.filter((i) => !t.includes(i.id));
  return n === "remove" ? o : [...t.map((i) => e.find((s) => s.id === i)).filter(Boolean), ...o];
}
const am = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Ce("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = L((n) => [xt(t, n)], (n) => n.findIndex((o) => o.id === e.id), F(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var o;
      return ((o = xt(t, n)[0]) == null ? void 0 : o.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var o;
      const r = xt(t, n);
      return ((o = r[r.length - 1]) == null ? void 0 : o.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = L(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, o) => (r) => {
      let i = [];
      if (!(t != null && t.length))
        i = r;
      else {
        const s = [...t], a = [...r];
        for (; a.length && s.length; ) {
          const l = s.shift(), c = a.findIndex((g) => g.id === l);
          c > -1 && i.push(a.splice(c, 1)[0]);
        }
        i = [...i, ...a];
      }
      return sm(i, n, o);
    }, F(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, Kn = () => ({
  left: [],
  right: []
}), lm = {
  getInitialState: (e) => ({
    columnPinning: Kn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Ce("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const o = e.getLeafColumns().map((r) => r.id).filter(Boolean);
      t.setColumnPinning((r) => {
        var i, s;
        if (n === "right") {
          var a, l;
          return {
            left: ((a = r?.left) != null ? a : []).filter((d) => !(o != null && o.includes(d))),
            right: [...((l = r?.right) != null ? l : []).filter((d) => !(o != null && o.includes(d))), ...o]
          };
        }
        if (n === "left") {
          var c, g;
          return {
            left: [...((c = r?.left) != null ? c : []).filter((d) => !(o != null && o.includes(d))), ...o],
            right: ((g = r?.right) != null ? g : []).filter((d) => !(o != null && o.includes(d)))
          };
        }
        return {
          left: ((i = r?.left) != null ? i : []).filter((d) => !(o != null && o.includes(d))),
          right: ((s = r?.right) != null ? s : []).filter((d) => !(o != null && o.includes(d)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((o) => {
      var r, i, s;
      return ((r = o.columnDef.enablePinning) != null ? r : !0) && ((i = (s = t.options.enableColumnPinning) != null ? s : t.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((a) => a.id), {
        left: o,
        right: r
      } = t.getState().columnPinning, i = n.some((a) => o?.includes(a)), s = n.some((a) => r?.includes(a));
      return i ? "left" : s ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, o;
      const r = e.getIsPinned();
      return r ? (n = (o = t.getState().columnPinning) == null || (o = o[r]) == null ? void 0 : o.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = L(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, o, r) => {
      const i = [...o ?? [], ...r ?? []];
      return n.filter((s) => !i.includes(s.column.id));
    }, F(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = L(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, o) => (o ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), F(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = L(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, o) => (o ?? []).map((i) => n.find((s) => s.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), F(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, o;
      return e.setColumnPinning(t ? Kn() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : Kn());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const o = e.getState().columnPinning;
      if (!t) {
        var r, i;
        return !!((r = o.left) != null && r.length || (i = o.right) != null && i.length);
      }
      return !!((n = o[t]) != null && n.length);
    }, e.getLeftLeafColumns = L(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), F(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = L(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), F(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = L(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o) => {
      const r = [...n ?? [], ...o ?? []];
      return t.filter((i) => !r.includes(i.id));
    }, F(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function cm(e) {
  return e || (typeof document < "u" ? document : null);
}
const Xt = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, qn = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), um = {
  getDefaultColumnDef: () => Xt,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: qn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Ce("columnSizing", e),
    onColumnSizingInfoChange: Ce("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, o, r;
      const i = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : Xt.minSize, (o = i ?? e.columnDef.size) != null ? o : Xt.size), (r = e.columnDef.maxSize) != null ? r : Xt.maxSize);
    }, e.getStart = L((n) => [n, xt(t, n), t.getState().columnSizing], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, i) => r + i.getSize(), 0), F(t.options, "debugColumns", "getStart")), e.getAfter = L((n) => [n, xt(t, n), t.getState().columnSizing], (n, o) => o.slice(e.getIndex(n) + 1).reduce((r, i) => r + i.getSize(), 0), F(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
      t.setColumnSizing((n) => {
        let {
          [e.id]: o,
          ...r
        } = n;
        return r;
      });
    }, e.getCanResize = () => {
      var n, o;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((o = t.options.enableColumnResizing) != null ? o : !0);
    }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, t) => {
    e.getSize = () => {
      let n = 0;
      const o = (r) => {
        if (r.subHeaders.length)
          r.subHeaders.forEach(o);
        else {
          var i;
          n += (i = r.column.getSize()) != null ? i : 0;
        }
      };
      return o(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const o = t.getColumn(e.column.id), r = o?.getCanResize();
      return (i) => {
        if (!o || !r || (i.persist == null || i.persist(), Yn(i) && i.touches && i.touches.length > 1))
          return;
        const s = e.getSize(), a = e ? e.getLeafHeaders().map((C) => [C.column.id, C.column.getSize()]) : [[o.id, o.getSize()]], l = Yn(i) ? Math.round(i.touches[0].clientX) : i.clientX, c = {}, g = (C, y) => {
          typeof y == "number" && (t.setColumnSizingInfo((S) => {
            var _, b;
            const R = t.options.columnResizeDirection === "rtl" ? -1 : 1, x = (y - ((_ = S?.startOffset) != null ? _ : 0)) * R, I = Math.max(x / ((b = S?.startSize) != null ? b : 0), -0.999999);
            return S.columnSizingStart.forEach((E) => {
              let [A, $] = E;
              c[A] = Math.round(Math.max($ + $ * I, 0) * 100) / 100;
            }), {
              ...S,
              deltaOffset: x,
              deltaPercentage: I
            };
          }), (t.options.columnResizeMode === "onChange" || C === "end") && t.setColumnSizing((S) => ({
            ...S,
            ...c
          })));
        }, d = (C) => g("move", C), f = (C) => {
          g("end", C), t.setColumnSizingInfo((y) => ({
            ...y,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, p = cm(n), h = {
          moveHandler: (C) => d(C.clientX),
          upHandler: (C) => {
            p?.removeEventListener("mousemove", h.moveHandler), p?.removeEventListener("mouseup", h.upHandler), f(C.clientX);
          }
        }, v = {
          moveHandler: (C) => (C.cancelable && (C.preventDefault(), C.stopPropagation()), d(C.touches[0].clientX), !1),
          upHandler: (C) => {
            var y;
            p?.removeEventListener("touchmove", v.moveHandler), p?.removeEventListener("touchend", v.upHandler), C.cancelable && (C.preventDefault(), C.stopPropagation()), f((y = C.touches[0]) == null ? void 0 : y.clientX);
          }
        }, w = dm() ? {
          passive: !1
        } : !1;
        Yn(i) ? (p?.addEventListener("touchmove", v.moveHandler, w), p?.addEventListener("touchend", v.upHandler, w)) : (p?.addEventListener("mousemove", h.moveHandler, w), p?.addEventListener("mouseup", h.upHandler, w)), t.setColumnSizingInfo((C) => ({
          ...C,
          startOffset: l,
          startSize: s,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: a,
          isResizingColumn: o.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
      var n;
      e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
    }, e.resetHeaderSizeInfo = (t) => {
      var n;
      e.setColumnSizingInfo(t ? qn() : (n = e.initialState.columnSizingInfo) != null ? n : qn());
    }, e.getTotalSize = () => {
      var t, n;
      return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    }, e.getLeftTotalSize = () => {
      var t, n;
      return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    }, e.getCenterTotalSize = () => {
      var t, n;
      return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    }, e.getRightTotalSize = () => {
      var t, n;
      return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    };
  }
};
let Zt = null;
function dm() {
  if (typeof Zt == "boolean") return Zt;
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    }, n = () => {
    };
    window.addEventListener("test", n, t), window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return Zt = e, Zt;
}
function Yn(e) {
  return e.type === "touchstart";
}
const fm = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Ce("columnVisibility", e)
  }),
  createColumn: (e, t) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && t.setColumnVisibility((o) => ({
        ...o,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, o;
      const r = e.columns;
      return (n = r.length ? r.some((i) => i.getIsVisible()) : (o = t.getState().columnVisibility) == null ? void 0 : o[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, o;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((o = t.options.enableHiding) != null ? o : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = L(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((o) => o.column.getIsVisible()), F(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = L(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, o, r) => [...n, ...o, ...r], F(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, o) => L(() => [o(), o().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")], (r) => r.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), F(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var o;
      e.setColumnVisibility(n ? {} : (o = e.initialState.columnVisibility) != null ? o : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var o;
      n = (o = n) != null ? o : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((r, i) => ({
        ...r,
        [i.id]: n || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var o;
      e.toggleAllColumnsVisible((o = n.target) == null ? void 0 : o.checked);
    };
  }
};
function xt(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const gm = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, pm = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Ce("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const o = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof o == "string" || typeof o == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, o, r, i;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((o = t.options.enableGlobalFilter) != null ? o : !0) && ((r = t.options.enableFilters) != null ? r : !0) && ((i = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => Ge.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: o
      } = e.options;
      return In(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : Ge[o];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, mm = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Ce("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetExpanded = () => {
      var o, r;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetExpanded) != null ? o : !e.options.manualExpanding) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (o) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(o), e.toggleAllRowsExpanded = (o) => {
      o ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (o) => {
      var r, i;
      e.setExpanded(o ? {} : (r = (i = e.initialState) == null ? void 0 : i.expanded) != null ? r : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((o) => o.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (o) => {
      o.persist == null || o.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const o = e.getState().expanded;
      return o === !0 || Object.values(o).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const o = e.getState().expanded;
      return typeof o == "boolean" ? o === !0 : !(!Object.keys(o).length || e.getRowModel().flatRows.some((r) => !r.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let o = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const s = i.split(".");
        o = Math.max(o, s.length);
      }), o;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((o) => {
        var r;
        const i = o === !0 ? !0 : !!(o != null && o[e.id]);
        let s = {};
        if (o === !0 ? Object.keys(t.getRowModel().rowsById).forEach((a) => {
          s[a] = !0;
        }) : s = o, n = (r = n) != null ? r : !i, !i && n)
          return {
            ...s,
            [e.id]: !0
          };
        if (i && !n) {
          const {
            [e.id]: a,
            ...l
          } = s;
          return l;
        }
        return o;
      });
    }, e.getIsExpanded = () => {
      var n;
      const o = t.getState().expanded;
      return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : o === !0 || o?.[e.id]);
    }, e.getCanExpand = () => {
      var n, o, r;
      return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((o = t.options.enableExpanding) != null ? o : !0) && !!((r = e.subRows) != null && r.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, o = e;
      for (; n && o.parentId; )
        o = t.getRow(o.parentId, !0), n = o.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, bo = 0, Ro = 10, Xn = () => ({
  pageIndex: bo,
  pageSize: Ro
}), hm = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Xn(),
      ...e?.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Ce("pagination", e)
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetPageIndex = () => {
      var o, r;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetPageIndex) != null ? o : !e.options.manualPagination) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (o) => {
      const r = (i) => Ye(o, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
    }, e.resetPagination = (o) => {
      var r;
      e.setPagination(o ? Xn() : (r = e.initialState.pagination) != null ? r : Xn());
    }, e.setPageIndex = (o) => {
      e.setPagination((r) => {
        let i = Ye(o, r.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, s)), {
          ...r,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (o) => {
      var r, i;
      e.setPageIndex(o ? bo : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : bo);
    }, e.resetPageSize = (o) => {
      var r, i;
      e.setPageSize(o ? Ro : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : Ro);
    }, e.setPageSize = (o) => {
      e.setPagination((r) => {
        const i = Math.max(1, Ye(o, r.pageSize)), s = r.pageSize * r.pageIndex, a = Math.floor(s / i);
        return {
          ...r,
          pageIndex: a,
          pageSize: i
        };
      });
    }, e.setPageCount = (o) => e.setPagination((r) => {
      var i;
      let s = Ye(o, (i = e.options.pageCount) != null ? i : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...r,
        pageCount: s
      };
    }), e.getPageOptions = L(() => [e.getPageCount()], (o) => {
      let r = [];
      return o && o > 0 && (r = [...new Array(o)].fill(null).map((i, s) => s)), r;
    }, F(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: o
      } = e.getState().pagination, r = e.getPageCount();
      return r === -1 ? !0 : r === 0 ? !1 : o < r - 1;
    }, e.previousPage = () => e.setPageIndex((o) => o - 1), e.nextPage = () => e.setPageIndex((o) => o + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var o;
      return (o = e.options.pageCount) != null ? o : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var o;
      return (o = e.options.rowCount) != null ? o : e.getPrePaginationRowModel().rows.length;
    };
  }
}, Zn = () => ({
  top: [],
  bottom: []
}), vm = {
  getInitialState: (e) => ({
    rowPinning: Zn(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Ce("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, o, r) => {
      const i = o ? e.getLeafRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], s = r ? e.getParentRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], a = /* @__PURE__ */ new Set([...s, e.id, ...i]);
      t.setRowPinning((l) => {
        var c, g;
        if (n === "bottom") {
          var d, f;
          return {
            top: ((d = l?.top) != null ? d : []).filter((v) => !(a != null && a.has(v))),
            bottom: [...((f = l?.bottom) != null ? f : []).filter((v) => !(a != null && a.has(v))), ...Array.from(a)]
          };
        }
        if (n === "top") {
          var p, h;
          return {
            top: [...((p = l?.top) != null ? p : []).filter((v) => !(a != null && a.has(v))), ...Array.from(a)],
            bottom: ((h = l?.bottom) != null ? h : []).filter((v) => !(a != null && a.has(v)))
          };
        }
        return {
          top: ((c = l?.top) != null ? c : []).filter((v) => !(a != null && a.has(v))),
          bottom: ((g = l?.bottom) != null ? g : []).filter((v) => !(a != null && a.has(v)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: o,
        enablePinning: r
      } = t.options;
      return typeof o == "function" ? o(e) : (n = o ?? r) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: o,
        bottom: r
      } = t.getState().rowPinning, i = n.some((a) => o?.includes(a)), s = n.some((a) => r?.includes(a));
      return i ? "top" : s ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, o;
      const r = e.getIsPinned();
      if (!r) return -1;
      const i = (n = r === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((s) => {
        let {
          id: a
        } = s;
        return a;
      });
      return (o = i?.indexOf(e.id)) != null ? o : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, o;
      return e.setRowPinning(t ? Zn() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : Zn());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const o = e.getState().rowPinning;
      if (!t) {
        var r, i;
        return !!((r = o.top) != null && r.length || (i = o.bottom) != null && i.length);
      }
      return !!((n = o[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, o) => {
      var r;
      return ((r = e.options.keepPinnedRows) == null || r ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((s) => {
          const a = e.getRow(s, !0);
          return a.getIsAllParentsExpanded() ? a : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((s) => t.find((a) => a.id === s))
      )).filter(Boolean).map((s) => ({
        ...s,
        position: o
      }));
    }, e.getTopRows = L(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), F(e.options, "debugRows", "getTopRows")), e.getBottomRows = L(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), F(e.options, "debugRows", "getBottomRows")), e.getCenterRows = L(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, o) => {
      const r = /* @__PURE__ */ new Set([...n ?? [], ...o ?? []]);
      return t.filter((i) => !r.has(i.id));
    }, F(e.options, "debugRows", "getCenterRows"));
  }
}, wm = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Ce("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
      var n;
      return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
    }, e.toggleAllRowsSelected = (t) => {
      e.setRowSelection((n) => {
        t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
        const o = {
          ...n
        }, r = e.getPreGroupedRowModel().flatRows;
        return t ? r.forEach((i) => {
          i.getCanSelect() && (o[i.id] = !0);
        }) : r.forEach((i) => {
          delete o[i.id];
        }), o;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const o = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), r = {
        ...n
      };
      return e.getRowModel().rows.forEach((i) => {
        xo(r, i.id, o, !0, e);
      }), r;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = L(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Qn(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, F(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = L(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Qn(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, F(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = L(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Qn(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, F(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const t = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let o = !!(t.length && Object.keys(n).length);
      return o && t.some((r) => r.getCanSelect() && !n[r.id]) && (o = !1), o;
    }, e.getIsAllPageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows.filter((r) => r.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let o = !!t.length;
      return o && t.some((r) => !n[r.id]) && (o = !1), o;
    }, e.getIsSomeRowsSelected = () => {
      var t;
      const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
      return n > 0 && n < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : t.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (t) => {
      e.toggleAllRowsSelected(t.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
      e.toggleAllPageRowsSelected(t.target.checked);
    };
  },
  createRow: (e, t) => {
    e.toggleSelected = (n, o) => {
      const r = e.getIsSelected();
      t.setRowSelection((i) => {
        var s;
        if (n = typeof n < "u" ? n : !r, e.getCanSelect() && r === n)
          return i;
        const a = {
          ...i
        };
        return xo(a, e.id, n, (s = o?.selectChildren) != null ? s : !0, t), a;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return cr(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Po(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Po(e, n) === "all";
    }, e.getCanSelect = () => {
      var n;
      return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (n = t.options.enableRowSelection) != null ? n : !0;
    }, e.getCanSelectSubRows = () => {
      var n;
      return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (n = t.options.enableSubRowSelection) != null ? n : !0;
    }, e.getCanMultiSelect = () => {
      var n;
      return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (n = t.options.enableMultiRowSelection) != null ? n : !0;
    }, e.getToggleSelectedHandler = () => {
      const n = e.getCanSelect();
      return (o) => {
        var r;
        n && e.toggleSelected((r = o.target) == null ? void 0 : r.checked);
      };
    };
  }
}, xo = (e, t, n, o, r) => {
  var i;
  const s = r.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((a) => delete e[a]), s.getCanSelect() && (e[t] = !0)) : delete e[t], o && (i = s.subRows) != null && i.length && s.getCanSelectSubRows() && s.subRows.forEach((a) => xo(e, a.id, n, o, r));
};
function Qn(e, t) {
  const n = e.getState().rowSelection, o = [], r = {}, i = function(s, a) {
    return s.map((l) => {
      var c;
      const g = cr(l, n);
      if (g && (o.push(l), r[l.id] = l), (c = l.subRows) != null && c.length && (l = {
        ...l,
        subRows: i(l.subRows)
      }), g)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: i(t.rows),
    flatRows: o,
    rowsById: r
  };
}
function cr(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Po(e, t, n) {
  var o;
  if (!((o = e.subRows) != null && o.length)) return !1;
  let r = !0, i = !1;
  return e.subRows.forEach((s) => {
    if (!(i && !r) && (s.getCanSelect() && (cr(s, t) ? i = !0 : r = !1), s.subRows && s.subRows.length)) {
      const a = Po(s, t);
      a === "all" ? i = !0 : (a === "some" && (i = !0), r = !1);
    }
  }), r ? "all" : i ? "some" : !1;
}
const Eo = /([0-9]+)/gm, Cm = (e, t, n) => ya(Qe(e.getValue(n)).toLowerCase(), Qe(t.getValue(n)).toLowerCase()), Sm = (e, t, n) => ya(Qe(e.getValue(n)), Qe(t.getValue(n))), ym = (e, t, n) => ur(Qe(e.getValue(n)).toLowerCase(), Qe(t.getValue(n)).toLowerCase()), _m = (e, t, n) => ur(Qe(e.getValue(n)), Qe(t.getValue(n))), bm = (e, t, n) => {
  const o = e.getValue(n), r = t.getValue(n);
  return o > r ? 1 : o < r ? -1 : 0;
}, Rm = (e, t, n) => ur(e.getValue(n), t.getValue(n));
function ur(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function Qe(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function ya(e, t) {
  const n = e.split(Eo).filter(Boolean), o = t.split(Eo).filter(Boolean);
  for (; n.length && o.length; ) {
    const r = n.shift(), i = o.shift(), s = parseInt(r, 10), a = parseInt(i, 10), l = [s, a].sort();
    if (isNaN(l[0])) {
      if (r > i)
        return 1;
      if (i > r)
        return -1;
      continue;
    }
    if (isNaN(l[1]))
      return isNaN(s) ? -1 : 1;
    if (s > a)
      return 1;
    if (a > s)
      return -1;
  }
  return n.length - o.length;
}
const Rt = {
  alphanumeric: Cm,
  alphanumericCaseSensitive: Sm,
  text: ym,
  textCaseSensitive: _m,
  datetime: bm,
  basic: Rm
}, xm = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Ce("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let o = !1;
      for (const r of n) {
        const i = r?.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return Rt.datetime;
        if (typeof i == "string" && (o = !0, i.split(Eo).length > 1))
          return Rt.alphanumeric;
      }
      return o ? Rt.text : Rt.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof n?.getValue(e.id) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, o;
      if (!e)
        throw new Error();
      return In(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : Rt[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, o) => {
      const r = e.getNextSortingOrder(), i = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const a = s?.find((p) => p.id === e.id), l = s?.findIndex((p) => p.id === e.id);
        let c = [], g, d = i ? n : r === "desc";
        if (s != null && s.length && e.getCanMultiSort() && o ? a ? g = "toggle" : g = "add" : s != null && s.length && l !== s.length - 1 ? g = "replace" : a ? g = "toggle" : g = "replace", g === "toggle" && (i || r || (g = "remove")), g === "add") {
          var f;
          c = [...s, {
            id: e.id,
            desc: d
          }], c.splice(0, c.length - ((f = t.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
        } else g === "toggle" ? c = s.map((p) => p.id === e.id ? {
          ...p,
          desc: d
        } : p) : g === "remove" ? c = s.filter((p) => p.id !== e.id) : c = [{
          id: e.id,
          desc: d
        }];
        return c;
      });
    }, e.getFirstSortDir = () => {
      var n, o;
      return ((n = (o = e.columnDef.sortDescFirst) != null ? o : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var o, r;
      const i = e.getFirstSortDir(), s = e.getIsSorted();
      return s ? s !== i && ((o = t.options.enableSortingRemoval) == null || o) && // If enableSortRemove, enable in general
      (!(n && (r = t.options.enableMultiRemove) != null) || r) ? !1 : s === "desc" ? "asc" : "desc" : i;
    }, e.getCanSort = () => {
      var n, o;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((o = t.options.enableSorting) != null ? o : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, o;
      return (n = (o = e.columnDef.enableMultiSort) != null ? o : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const o = (n = t.getState().sorting) == null ? void 0 : n.find((r) => r.id === e.id);
      return o ? o.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, o;
      return (n = (o = t.getState().sorting) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      t.setSorting((n) => n != null && n.length ? n.filter((o) => o.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (o) => {
        n && (o.persist == null || o.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(o) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
      var n, o;
      e.setSorting(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, Pm = [
  Wp,
  fm,
  am,
  lm,
  qp,
  Yp,
  gm,
  //depends on ColumnFaceting
  pm,
  //depends on ColumnFiltering
  xm,
  im,
  //depends on RowSorting
  mm,
  hm,
  vm,
  wm,
  um
];
function Em(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const o = [...Pm, ...(t = e._features) != null ? t : []];
  let r = {
    _features: o
  };
  const i = r._features.reduce((f, p) => Object.assign(f, p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(r)), {}), s = (f) => r.options.mergeOptions ? r.options.mergeOptions(i, f) : {
    ...i,
    ...f
  };
  let l = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  r._features.forEach((f) => {
    var p;
    l = (p = f.getInitialState == null ? void 0 : f.getInitialState(l)) != null ? p : l;
  });
  const c = [];
  let g = !1;
  const d = {
    _features: o,
    options: {
      ...i,
      ...e
    },
    initialState: l,
    _queue: (f) => {
      c.push(f), g || (g = !0, Promise.resolve().then(() => {
        for (; c.length; )
          c.shift()();
        g = !1;
      }).catch((p) => setTimeout(() => {
        throw p;
      })));
    },
    reset: () => {
      r.setState(r.initialState);
    },
    setOptions: (f) => {
      const p = Ye(f, r.options);
      r.options = s(p);
    },
    getState: () => r.options.state,
    setState: (f) => {
      r.options.onStateChange == null || r.options.onStateChange(f);
    },
    _getRowId: (f, p, h) => {
      var v;
      return (v = r.options.getRowId == null ? void 0 : r.options.getRowId(f, p, h)) != null ? v : `${h ? [h.id, p].join(".") : p}`;
    },
    getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => r.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (f, p) => {
      let h = (p ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[f];
      if (!h && (h = r.getCoreRowModel().rowsById[f], !h))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${f}`) : new Error();
      return h;
    },
    _getDefaultColumnDef: L(() => [r.options.defaultColumn], (f) => {
      var p;
      return f = (p = f) != null ? p : {}, {
        header: (h) => {
          const v = h.header.column.columnDef;
          return v.accessorKey ? v.accessorKey : v.accessorFn ? v.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (h) => {
          var v, w;
          return (v = (w = h.renderValue()) == null || w.toString == null ? void 0 : w.toString()) != null ? v : null;
        },
        ...r._features.reduce((h, v) => Object.assign(h, v.getDefaultColumnDef == null ? void 0 : v.getDefaultColumnDef()), {}),
        ...f
      };
    }, F(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => r.options.columns,
    getAllColumns: L(() => [r._getColumnDefs()], (f) => {
      const p = function(h, v, w) {
        return w === void 0 && (w = 0), h.map((C) => {
          const y = jp(r, C, w, v), S = C;
          return y.columns = S.columns ? p(S.columns, y, w + 1) : [], y;
        });
      };
      return p(f);
    }, F(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: L(() => [r.getAllColumns()], (f) => f.flatMap((p) => p.getFlatColumns()), F(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: L(() => [r.getAllFlatColumns()], (f) => f.reduce((p, h) => (p[h.id] = h, p), {}), F(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: L(() => [r.getAllColumns(), r._getOrderColumnsFn()], (f, p) => {
      let h = f.flatMap((v) => v.getLeafColumns());
      return p(h);
    }, F(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (f) => {
      const p = r._getAllFlatColumnsById()[f];
      return process.env.NODE_ENV !== "production" && !p && console.error(`[Table] Column with id '${f}' does not exist.`), p;
    }
  };
  Object.assign(r, d);
  for (let f = 0; f < r._features.length; f++) {
    const p = r._features[f];
    p == null || p.createTable == null || p.createTable(r);
  }
  return r;
}
function Mm() {
  return (e) => L(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, o = function(r, i, s) {
      i === void 0 && (i = 0);
      const a = [];
      for (let c = 0; c < r.length; c++) {
        const g = Kp(e, e._getRowId(r[c], c, s), r[c], c, i, void 0, s?.id);
        if (n.flatRows.push(g), n.rowsById[g.id] = g, a.push(g), e.options.getSubRows) {
          var l;
          g.originalSubRows = e.options.getSubRows(r[c], c), (l = g.originalSubRows) != null && l.length && (g.subRows = o(g.originalSubRows, i + 1, g));
        }
      }
      return a;
    };
    return n.rows = o(t), n;
  }, F(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function Im() {
  return (e) => L(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const o = e.getState().sorting, r = [], i = o.filter((l) => {
      var c;
      return (c = e.getColumn(l.id)) == null ? void 0 : c.getCanSort();
    }), s = {};
    i.forEach((l) => {
      const c = e.getColumn(l.id);
      c && (s[l.id] = {
        sortUndefined: c.columnDef.sortUndefined,
        invertSorting: c.columnDef.invertSorting,
        sortingFn: c.getSortingFn()
      });
    });
    const a = (l) => {
      const c = l.map((g) => ({
        ...g
      }));
      return c.sort((g, d) => {
        for (let p = 0; p < i.length; p += 1) {
          var f;
          const h = i[p], v = s[h.id], w = v.sortUndefined, C = (f = h?.desc) != null ? f : !1;
          let y = 0;
          if (w) {
            const S = g.getValue(h.id), _ = d.getValue(h.id), b = S === void 0, R = _ === void 0;
            if (b || R) {
              if (w === "first") return b ? -1 : 1;
              if (w === "last") return b ? 1 : -1;
              y = b && R ? 0 : b ? w : -w;
            }
          }
          if (y === 0 && (y = v.sortingFn(g, d, h.id)), y !== 0)
            return C && (y *= -1), v.invertSorting && (y *= -1), y;
        }
        return g.index - d.index;
      }), c.forEach((g) => {
        var d;
        r.push(g), (d = g.subRows) != null && d.length && (g.subRows = a(g.subRows));
      }), c;
    };
    return {
      rows: a(n.rows),
      flatRows: r,
      rowsById: n.rowsById
    };
  }, F(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
function Jn(e, t) {
  return e ? Dm(e) ? /* @__PURE__ */ u.createElement(e, t) : e : null;
}
function Dm(e) {
  return Tm(e) || typeof e == "function" || Om(e);
}
function Tm(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function Om(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function Am(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = u.useState(() => ({
    current: Em(t)
  })), [o, r] = u.useState(() => n.current.initialState);
  return n.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...o,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (s) => {
      r(s), e.onStateChange == null || e.onStateChange(s);
    }
  })), n.current;
}
function Kr(e, t, n) {
  !n || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), n(t));
}
function Mh({
  data: e,
  columns: t,
  getRowId: n,
  emptyState: o = "No data available",
  className: r,
  rowClassName: i,
  onRowClick: s,
  renderMobileRow: a,
  initialSorting: l = [],
  ariaLabel: c = "Data table"
}) {
  const [g, d] = qr(l), f = Am({
    data: e,
    columns: t,
    state: { sorting: g },
    onSortingChange: d,
    getCoreRowModel: Mm(),
    getSortedRowModel: Im(),
    ...n ? { getRowId: n } : {}
  }), p = f.getRowModel().rows;
  return /* @__PURE__ */ H("div", { className: D("nb-data-table", r), children: [
    /* @__PURE__ */ m("div", { className: "nb-data-table__scroll", children: /* @__PURE__ */ H("table", { className: "nb-data-table__table", "aria-label": c, children: [
      /* @__PURE__ */ m("thead", { children: f.getHeaderGroups().map((h) => /* @__PURE__ */ m("tr", { children: h.headers.map((v) => {
        const w = v.column.getCanSort(), C = v.column.getIsSorted();
        return /* @__PURE__ */ m("th", { colSpan: v.colSpan, children: v.isPlaceholder ? null : w ? /* @__PURE__ */ H(
          "button",
          {
            type: "button",
            className: "nb-data-table__sort",
            onClick: v.column.getToggleSortingHandler(),
            children: [
              Jn(v.column.columnDef.header, v.getContext()),
              C === "asc" ? /* @__PURE__ */ m(mc, { size: 14, "aria-hidden": "true" }) : C === "desc" ? /* @__PURE__ */ m(dc, { size: 14, "aria-hidden": "true" }) : /* @__PURE__ */ m(gc, { size: 14, "aria-hidden": "true" })
            ]
          }
        ) : Jn(v.column.columnDef.header, v.getContext()) }, v.id);
      }) }, h.id)) }),
      /* @__PURE__ */ m("tbody", { children: p.length ? p.map((h) => /* @__PURE__ */ m(
        "tr",
        {
          className: D(s && "nb-data-table__row--interactive", i?.(h)),
          onClick: s ? () => s(h) : void 0,
          onKeyDown: s ? (v) => Kr(v, h, s) : void 0,
          tabIndex: s ? 0 : void 0,
          children: h.getVisibleCells().map((v) => /* @__PURE__ */ m("td", { children: Jn(v.column.columnDef.cell, v.getContext()) }, v.id))
        },
        h.id
      )) : /* @__PURE__ */ m("tr", { children: /* @__PURE__ */ m("td", { className: "nb-data-table__empty", colSpan: f.getAllLeafColumns().length || 1, children: o }) }) })
    ] }) }),
    a ? /* @__PURE__ */ m("div", { className: "nb-data-table__mobile", "aria-label": `${c} mobile view`, children: p.length ? p.map((h) => /* @__PURE__ */ m(
      "div",
      {
        className: D("nb-data-table__mobile-row", s && "nb-data-table__mobile-row--interactive"),
        onClick: s ? () => s(h) : void 0,
        onKeyDown: s ? (v) => Kr(v, h, s) : void 0,
        tabIndex: s ? 0 : void 0,
        role: s ? "button" : void 0,
        children: a(h)
      },
      h.id
    )) : /* @__PURE__ */ m("div", { className: "nb-data-table__empty", children: o }) }) : null
  ] });
}
function Ih({
  className: e,
  icon: t,
  title: n,
  description: o,
  actions: r,
  ...i
}) {
  return /* @__PURE__ */ H("div", { className: D("nb-empty-state", e), ...i, children: [
    t ? /* @__PURE__ */ m("div", { className: "nb-empty-state__icon", children: t }) : null,
    /* @__PURE__ */ m("h3", { className: "nb-empty-state__title", children: n }),
    o ? /* @__PURE__ */ m("p", { className: "nb-empty-state__description", children: o }) : null,
    r ? /* @__PURE__ */ m("div", { className: "nb-empty-state__actions", children: r }) : null
  ] });
}
function Dh({ className: e, search: t, filters: n, actions: o, meta: r, children: i, ...s }) {
  return /* @__PURE__ */ H("div", { className: D("nb-filter-bar", e), ...s, children: [
    /* @__PURE__ */ H("div", { className: "nb-filter-bar__main", children: [
      t ? /* @__PURE__ */ m("div", { className: "nb-filter-bar__search", children: t }) : null,
      n ? /* @__PURE__ */ m("div", { className: "nb-filter-bar__filters", children: n }) : null,
      i
    ] }),
    r || o ? /* @__PURE__ */ H("div", { className: "nb-filter-bar__aside", children: [
      r ? /* @__PURE__ */ m("div", { className: "nb-filter-bar__meta", children: r }) : null,
      o ? /* @__PURE__ */ m("div", { className: "nb-filter-bar__actions", children: o }) : null
    ] }) : null
  ] });
}
function Th({
  className: e,
  eyebrow: t,
  title: n,
  description: o,
  actions: r,
  ...i
}) {
  return /* @__PURE__ */ H("header", { className: D("nb-page-header", e), ...i, children: [
    /* @__PURE__ */ H("div", { className: "nb-page-header__copy", children: [
      t ? /* @__PURE__ */ m("p", { className: "nb-page-header__eyebrow", children: t }) : null,
      /* @__PURE__ */ m("h1", { className: "nb-page-header__title", children: n }),
      o ? /* @__PURE__ */ m("p", { className: "nb-page-header__description", children: o }) : null
    ] }),
    r ? /* @__PURE__ */ m("div", { className: "nb-page-header__actions", children: r }) : null
  ] });
}
function Oh({
  className: e,
  label: t,
  value: n,
  icon: o,
  footer: r,
  trend: i = "neutral",
  ...s
}) {
  return /* @__PURE__ */ H("div", { className: D("nb-card", "nb-stat-card", e), ...s, children: [
    /* @__PURE__ */ H("div", { className: "nb-stat-card__top", children: [
      /* @__PURE__ */ H("div", { children: [
        /* @__PURE__ */ m("div", { className: "nb-stat-card__label", children: t }),
        /* @__PURE__ */ m("div", { className: "nb-stat-card__value", children: n })
      ] }),
      o ? /* @__PURE__ */ m("div", { className: "nb-stat-card__icon", children: o }) : null
    ] }),
    r ? /* @__PURE__ */ m("div", { className: D("nb-stat-card__footer", i !== "neutral" && `nb-stat-card__trend--${i}`), children: r }) : null
  ] });
}
export {
  Vm as Alert,
  Ph as AppHeader,
  Eh as AppSidebar,
  Hm as Badge,
  La as Button,
  Gm as Card,
  jm as CardContent,
  Um as CardDescription,
  Wm as CardFooter,
  Bm as CardHeader,
  zm as CardTitle,
  Mh as DataTable,
  qm as Dialog,
  Xm as DialogClose,
  Pc as DialogContent,
  Mc as DialogDescription,
  Qm as DialogFooter,
  Zm as DialogHeader,
  Xi as DialogOverlay,
  Ec as DialogTitle,
  Ym as DialogTrigger,
  Jm as Drawer,
  th as DrawerClose,
  Ic as DrawerContent,
  Tc as DrawerDescription,
  oh as DrawerFooter,
  nh as DrawerHeader,
  Zi as DrawerOverlay,
  Dc as DrawerTitle,
  eh as DrawerTrigger,
  ih as DropdownMenu,
  Yf as DropdownMenuCheckboxItem,
  Kf as DropdownMenuContent,
  ah as DropdownMenuGroup,
  qf as DropdownMenuItem,
  Zf as DropdownMenuLabel,
  lh as DropdownMenuPortal,
  uh as DropdownMenuRadioGroup,
  Xf as DropdownMenuRadioItem,
  Qf as DropdownMenuSeparator,
  dh as DropdownMenuShortcut,
  ch as DropdownMenuSub,
  eg as DropdownMenuSubContent,
  Jf as DropdownMenuSubTrigger,
  sh as DropdownMenuTrigger,
  Ih as EmptyState,
  Dh as FilterBar,
  fh as FormField,
  tg as Input,
  $m as NebraBrandMark,
  km as NebraProvider,
  Th as PageHeader,
  gh as Pagination,
  mh as Select,
  Qg as SelectContent,
  hh as SelectGroup,
  ep as SelectItem,
  Jg as SelectLabel,
  tp as SelectSeparator,
  Zg as SelectTrigger,
  vh as SelectValue,
  wh as Skeleton,
  Ch as Spinner,
  Oh as StatCard,
  yh as Tabs,
  wp as TabsContent,
  hp as TabsList,
  vp as TabsTrigger,
  Cp as Textarea,
  Rh as Tooltip,
  Gp as TooltipContent,
  bh as TooltipProvider,
  xh as TooltipTrigger,
  xa as badgeVariants,
  Aa as buttonVariants,
  D as cn
};
//# sourceMappingURL=index.js.map