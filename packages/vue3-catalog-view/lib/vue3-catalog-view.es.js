import "./style.css";
import { unref as N, onMounted as U, nextTick as Z, getCurrentScope as oe, onScopeDispose as re, isRef as le, getCurrentInstance as B, ref as _, computed as H, reactive as Q, watch as R, watchEffect as se, defineComponent as ie, useAttrs as ce, createElementBlock as D, openBlock as I, normalizeClass as V, createCommentVNode as ae, createElementVNode as X, Fragment as ue, renderList as fe, renderSlot as de, mergeProps as ve, normalizeStyle as pe, toDisplayString as J } from "vue";
function z(e) {
  return oe() ? (re(e), !0) : !1;
}
function T(e) {
  return typeof e == "function" ? e() : N(e);
}
const me = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const he = (e) => e != null, ye = Object.prototype.toString, ge = (e) => ye.call(e) === "[object Object]", W = () => {
};
function ee(e, n) {
  function t(...o) {
    return new Promise((r, s) => {
      Promise.resolve(e(() => n.apply(this, o), { fn: n, thisArg: this, args: o })).then(r).catch(s);
    });
  }
  return t;
}
function be(e, n = {}) {
  let t, o, r = W;
  const s = (c) => {
    clearTimeout(c), r(), r = W;
  };
  return (c) => {
    const v = T(e), l = T(n.maxWait);
    return t && s(t), v <= 0 || l !== void 0 && l <= 0 ? (o && (s(o), o = null), Promise.resolve(c())) : new Promise((p, u) => {
      r = n.rejectOnCancel ? u : p, l && !o && (o = setTimeout(() => {
        t && s(t), o = null, p(c());
      }, l)), t = setTimeout(() => {
        o && s(o), o = null, p(c());
      }, v);
    });
  };
}
function we(...e) {
  let n = 0, t, o = !0, r = W, s, a, c, v, l;
  !le(e[0]) && typeof e[0] == "object" ? { delay: a, trailing: c = !0, leading: v = !0, rejectOnCancel: l = !1 } = e[0] : [a, c = !0, v = !0, l = !1] = e;
  const p = () => {
    t && (clearTimeout(t), t = void 0, r(), r = W);
  };
  return (d) => {
    const h = T(a), w = Date.now() - n, y = () => s = d();
    return p(), h <= 0 ? (n = Date.now(), y()) : (w > h && (v || !o) ? (n = Date.now(), y()) : c && (s = new Promise((f, g) => {
      r = l ? g : f, t = setTimeout(() => {
        n = Date.now(), o = !0, f(y()), p();
      }, Math.max(0, h - w));
    })), !v && !t && (t = setTimeout(() => o = !0, h)), o = !1, s);
  };
}
function Te(e) {
  return B();
}
function Ee(e, n = 200, t = {}) {
  return ee(
    be(n, t),
    e
  );
}
function Se(e, n = 200, t = !1, o = !0, r = !1) {
  return ee(
    we(n, t, o, r),
    e
  );
}
function te(e, n = !0, t) {
  Te() ? U(e, t) : n ? e() : Z(e);
}
const x = me ? window : void 0;
function Y(e) {
  var n;
  const t = T(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
function F(...e) {
  let n, t, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, o, r] = e, n = x) : [n, t, o, r] = e, !n)
    return W;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((p) => p()), s.length = 0;
  }, c = (p, u, d, h) => (p.addEventListener(u, d, h), () => p.removeEventListener(u, d, h)), v = R(
    () => [Y(n), T(r)],
    ([p, u]) => {
      if (a(), !p)
        return;
      const d = ge(u) ? { ...u } : u;
      s.push(
        ...t.flatMap((h) => o.map((w) => c(p, h, w, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), l = () => {
    v(), a();
  };
  return z(l), l;
}
function _e() {
  const e = _(!1), n = B();
  return n && U(() => {
    e.value = !0;
  }, n), e;
}
function ne(e) {
  const n = _e();
  return H(() => (n.value, !!e()));
}
function Ce(e, n, t = {}) {
  const { window: o = x, ...r } = t;
  let s;
  const a = ne(() => o && "MutationObserver" in o), c = () => {
    s && (s.disconnect(), s = void 0);
  }, v = H(() => {
    const d = T(e), h = (Array.isArray(d) ? d : [d]).map(Y).filter(he);
    return new Set(h);
  }), l = R(
    () => v.value,
    (d) => {
      c(), a.value && d.size && (s = new MutationObserver(n), d.forEach((h) => s.observe(h, r)));
    },
    { immediate: !0, flush: "post" }
  ), p = () => s == null ? void 0 : s.takeRecords(), u = () => {
    l(), c();
  };
  return z(u), {
    isSupported: a,
    stop: u,
    takeRecords: p
  };
}
function Ae(e, n = {}) {
  const { window: t = x } = n, o = ne(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let r;
  const s = _(!1), a = (l) => {
    s.value = l.matches;
  }, c = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", a) : r.removeListener(a));
  }, v = se(() => {
    o.value && (c(), r = t.matchMedia(T(e)), "addEventListener" in r ? r.addEventListener("change", a) : r.addListener(a), s.value = r.matches);
  });
  return z(() => {
    v(), c(), r = void 0;
  }), s;
}
const K = 1;
function Le(e, n = {}) {
  const {
    throttle: t = 0,
    idle: o = 200,
    onStop: r = W,
    onScroll: s = W,
    offset: a = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: c = {
      capture: !1,
      passive: !0
    },
    behavior: v = "auto",
    window: l = x,
    onError: p = (i) => {
      console.error(i);
    }
  } = n, u = _(0), d = _(0), h = H({
    get() {
      return u.value;
    },
    set(i) {
      y(i, void 0);
    }
  }), w = H({
    get() {
      return d.value;
    },
    set(i) {
      y(void 0, i);
    }
  });
  function y(i, M) {
    var S, $, P, O;
    if (!l)
      return;
    const C = T(e);
    if (!C)
      return;
    (P = C instanceof Document ? l.document.body : C) == null || P.scrollTo({
      top: (S = T(M)) != null ? S : w.value,
      left: ($ = T(i)) != null ? $ : h.value,
      behavior: T(v)
    });
    const j = ((O = C == null ? void 0 : C.document) == null ? void 0 : O.documentElement) || (C == null ? void 0 : C.documentElement) || C;
    h != null && (u.value = j.scrollLeft), w != null && (d.value = j.scrollTop);
  }
  const f = _(!1), g = Q({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), b = Q({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), m = (i) => {
    f.value && (f.value = !1, b.left = !1, b.right = !1, b.top = !1, b.bottom = !1, r(i));
  }, E = Ee(m, t + o), A = (i) => {
    var M;
    if (!l)
      return;
    const S = ((M = i == null ? void 0 : i.document) == null ? void 0 : M.documentElement) || (i == null ? void 0 : i.documentElement) || Y(i), { display: $, flexDirection: P } = getComputedStyle(S), O = S.scrollLeft;
    b.left = O < u.value, b.right = O > u.value;
    const C = Math.abs(O) <= (a.left || 0), j = Math.abs(O) + S.clientWidth >= S.scrollWidth - (a.right || 0) - K;
    $ === "flex" && P === "row-reverse" ? (g.left = j, g.right = C) : (g.left = C, g.right = j), u.value = O;
    let k = S.scrollTop;
    i === l.document && !k && (k = l.document.body.scrollTop), b.top = k < d.value, b.bottom = k > d.value;
    const q = Math.abs(k) <= (a.top || 0), G = Math.abs(k) + S.clientHeight >= S.scrollHeight - (a.bottom || 0) - K;
    $ === "flex" && P === "column-reverse" ? (g.top = G, g.bottom = q) : (g.top = q, g.bottom = G), d.value = k;
  }, L = (i) => {
    var M;
    if (!l)
      return;
    const S = (M = i.target.documentElement) != null ? M : i.target;
    A(S), f.value = !0, E(i), s(i);
  };
  return F(
    e,
    "scroll",
    t ? Se(L, t, !0, !1) : L,
    c
  ), te(() => {
    try {
      const i = T(e);
      if (!i)
        return;
      A(i);
    } catch (i) {
      p(i);
    }
  }), F(
    e,
    "scrollend",
    m,
    c
  ), {
    x: h,
    y: w,
    isScrolling: f,
    arrivedState: g,
    directions: b,
    measure() {
      const i = T(e);
      l && i && A(i);
    }
  };
}
function Oe(e = {}) {
  const {
    window: n = x,
    initialWidth: t = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: s = !0,
    type: a = "inner"
  } = e, c = _(t), v = _(o), l = () => {
    n && (a === "outer" ? (c.value = n.outerWidth, v.value = n.outerHeight) : s ? (c.value = n.innerWidth, v.value = n.innerHeight) : (c.value = n.document.documentElement.clientWidth, v.value = n.document.documentElement.clientHeight));
  };
  if (l(), te(l), F("resize", l, { passive: !0 }), r) {
    const p = Ae("(orientation: portrait)");
    R(p, () => l());
  }
  return { width: c, height: v };
}
const Me = (e, n) => new Promise((t) => {
  const o = () => {
    e.removeEventListener("scrollend", o), t(!0);
  };
  e.addEventListener("scrollend", o), e.scrollTo(n);
}), ke = (e) => new Promise((n) => setTimeout(n, e)), We = (e, n) => {
  const t = _([]), o = _(0), r = _(!1), s = _(), a = H(
    () => e.scrollContainer.$el ? e.scrollContainer.$el : e.scrollContainer
  ), { y: c } = Le(a, {
    throttle: 100
  }), { width: v } = Oe(), l = _(document.createElement("div")), p = async () => {
    await Z(), a.value.style && (a.value.style.position = "relative");
    const y = e.selector.reduce(
      (m, E, A) => (m[E] = A, m),
      {}
    ), f = l.value.querySelectorAll(
      e.selector.join(",")
    ), g = Array.from(f).filter(
      (m) => m instanceof HTMLElement && m.innerText.trim()
    );
    if (!g.length)
      return [];
    const b = (m) => {
      const E = m.tagName.toLowerCase(), A = Array.from(m.classList);
      let L = 0;
      for (const i of A)
        if (Object.prototype.hasOwnProperty.call(y, `.${i}`)) {
          L = y[`.${i}`] || 0;
          break;
        }
      return Object.prototype.hasOwnProperty.call(y, E) && (L = y[E] || 0), L;
    };
    return g.map((m, E) => (m.id || (m.id = `vcvTitle${n}-${E}`), {
      title: m.innerText,
      id: m.id,
      catalogId: `vcvAnchor${n}-${E}`,
      level: b(m),
      offsetTop: m.offsetTop
    }));
  }, u = (y) => {
    if (!r.value)
      for (let f = 0; f < t.value.length; f++) {
        const b = t.value[f].offsetTop - y - e.topDistance;
        if (console.log("top:", b, f), b > 0 && f - 1 >= 0) {
          o.value = f - 1, d();
          break;
        }
        o.value = f;
      }
  }, d = () => {
    var E, A, L;
    const y = document.querySelector(
      `#vcvAnchor${o.value}`
    ), f = ((E = s.value) == null ? void 0 : E.clientHeight) || 0, g = y.offsetTop, b = ((A = s.value) == null ? void 0 : A.scrollTop) || 0, m = g - b;
    (m > f / 2 || m < f / 2) && ((L = s.value) == null || L.scrollTo({
      top: g - f / 2,
      behavior: r.value ? "instant" : "smooth"
    }));
  }, h = async (y, f) => {
    if (r.value = !0, o.value = f, d(), e.useAnchor) {
      r.value = !1;
      return;
    }
    await Me(a.value, {
      top: y.offsetTop - e.topDistance,
      behavior: "smooth"
    }), await ke(100), r.value = !1;
  };
  R(
    () => c.value,
    () => {
      u(c.value);
    }
  );
  let w;
  return R(
    () => [e.contentContainer, e.isWatch, v.value],
    async (y) => {
      console.log("val:", y);
      const [f, g] = y;
      if (f) {
        if (f.$el ? l.value = f.$el : l.value = f, g) {
          w && w();
          const { stop: b } = Ce(
            l,
            async () => {
              t.value = await p();
            },
            {
              childList: !0,
              subtree: !0,
              characterData: !0
            }
          );
          w = b;
        } else
          w && w();
        t.value = await p(), console.log("titles.value:", t.value);
      }
    },
    {
      immediate: !0
    }
  ), {
    titles: t,
    currentIndex: o,
    catalogRef: s,
    handleAnchorClick: h
  };
};
function De() {
  return {
    type: {
      type: String,
      default: "default"
    },
    contentContainer: {
      type: Object,
      default: () => document.body
    },
    scrollContainer: {
      type: Object,
      default: () => window
    },
    selector: {
      type: Array,
      default: () => ["h1", "h2", "h3", "h4", "h5", "h6"]
    },
    topDistance: {
      type: Number,
      default: 0
    },
    indent: {
      type: Number,
      default: 15
    },
    useAnchor: {
      type: Boolean,
      default: !0
    },
    isWatch: {
      type: Boolean,
      default: !1
    },
    ellipsis: {
      type: Boolean,
      default: !0
    }
  };
}
const Ie = {
  key: 0,
  class: "vcv-line"
}, $e = ["id", "onClick"], Pe = ["href"], je = { key: 1 }, Ne = /* @__PURE__ */ ie({
  __name: "CatalogView",
  props: De(),
  setup(e) {
    var c, v;
    const n = e, t = ce();
    console.log("props:", n, t.key);
    const { titles: o, currentIndex: r, catalogRef: s, handleAnchorClick: a } = We(
      n,
      (v = (c = B()) == null ? void 0 : c.vnode) == null ? void 0 : v.key
    );
    return (l, p) => (I(), D("div", {
      class: V(["vcv-wrapper", l.type])
    }, [
      l.type !== "default" ? (I(), D("div", Ie)) : ae("", !0),
      X("div", {
        class: "vcv-catalog-content",
        ref_key: "catalogRef",
        ref: s
      }, [
        (I(!0), D(ue, null, fe(N(o), (u, d) => (I(), D("div", {
          key: u.title,
          id: `vcvAnchor${d}`,
          onClick: (h) => N(a)(u, d),
          class: V(["vcv-catalog-item-wrapper", N(r) === d ? "active" : ""])
        }, [
          de(l.$slots, "default", ve({ ref_for: !0 }, { active: N(r) === d, anchor: u }), () => [
            X("div", {
              class: V(["vcv-catalog-item", {
                "text-ellipsis": l.ellipsis
              }]),
              style: pe({
                paddingLeft: `${15 + (u.level - 1) * l.indent}px`,
                paddingRight: "15px"
              })
            }, [
              l.useAnchor ? (I(), D("a", {
                key: 0,
                href: `#${u.id}`
              }, J(u.title), 9, Pe)) : (I(), D("span", je, J(u.title), 1))
            ], 6)
          ], !0)
        ], 10, $e))), 128))
      ], 512)
    ], 2));
  }
}), He = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, Ve = /* @__PURE__ */ He(Ne, [["__scopeId", "data-v-cc6f8f2d"]]);
export {
  Ve as CatalogView,
  De as catalogViewProps
};
