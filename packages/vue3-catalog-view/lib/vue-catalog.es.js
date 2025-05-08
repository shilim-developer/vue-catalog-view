import { unref as C, onMounted as se, nextTick as te, getCurrentScope as ce, onScopeDispose as ae, isRef as ie, getCurrentInstance as ue, ref as E, computed as Q, reactive as U, watch as x, defineComponent as B, openBlock as b, createElementBlock as w, createElementVNode as S, Fragment as H, renderList as F, renderSlot as N, mergeProps as V, normalizeClass as q, normalizeStyle as z, toDisplayString as O } from "vue";
function fe(e) {
  return ce() ? (ae(e), !0) : !1;
}
function A(e) {
  return typeof e == "function" ? e() : C(e);
}
const de = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ve = Object.prototype.toString, pe = (e) => ve.call(e) === "[object Object]", P = () => {
};
function oe(e, n) {
  function t(...o) {
    return new Promise((c, u) => {
      Promise.resolve(e(() => n.apply(this, o), { fn: n, thisArg: this, args: o })).then(c).catch(u);
    });
  }
  return t;
}
function me(e, n = {}) {
  let t, o, c = P;
  const u = (v) => {
    clearTimeout(v), c(), c = P;
  };
  return (v) => {
    const l = A(e), r = A(n.maxWait);
    return t && u(t), l <= 0 || r !== void 0 && r <= 0 ? (o && (u(o), o = null), Promise.resolve(v())) : new Promise((p, a) => {
      c = n.rejectOnCancel ? a : p, r && !o && (o = setTimeout(() => {
        t && u(t), o = null, p(v());
      }, r)), t = setTimeout(() => {
        o && u(o), o = null, p(v());
      }, l);
    });
  };
}
function he(...e) {
  let n = 0, t, o = !0, c = P, u, f, v, l, r;
  !ie(e[0]) && typeof e[0] == "object" ? { delay: f, trailing: v = !0, leading: l = !0, rejectOnCancel: r = !1 } = e[0] : [f, v = !0, l = !0, r = !1] = e;
  const p = () => {
    t && (clearTimeout(t), t = void 0, c(), c = P);
  };
  return (s) => {
    const m = A(f), y = Date.now() - n, d = () => u = s();
    return p(), m <= 0 ? (n = Date.now(), d()) : (y > m && (l || !o) ? (n = Date.now(), d()) : v && (u = new Promise((h, g) => {
      c = r ? g : h, t = setTimeout(() => {
        n = Date.now(), o = !0, h(d()), p();
      }, Math.max(0, m - y));
    })), !l && !t && (t = setTimeout(() => o = !0, m)), o = !1, u);
  };
}
function ge(e) {
  return ue();
}
function _e(e, n = 200, t = {}) {
  return oe(
    me(n, t),
    e
  );
}
function ye(e, n = 200, t = !1, o = !0, c = !1) {
  return oe(
    he(n, t, o, c),
    e
  );
}
function Ce(e, n = !0, t) {
  ge() ? se(e, t) : n ? e() : te(e);
}
function ne(e) {
  var n;
  const t = A(e);
  return (n = t == null ? void 0 : t.$el) != null ? n : t;
}
const le = de ? window : void 0;
function Z(...e) {
  let n, t, o, c;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, o, c] = e, n = le) : [n, t, o, c] = e, !n)
    return P;
  Array.isArray(t) || (t = [t]), Array.isArray(o) || (o = [o]);
  const u = [], f = () => {
    u.forEach((p) => p()), u.length = 0;
  }, v = (p, a, s, m) => (p.addEventListener(a, s, m), () => p.removeEventListener(a, s, m)), l = x(
    () => [ne(n), A(c)],
    ([p, a]) => {
      if (f(), !p)
        return;
      const s = pe(a) ? { ...a } : a;
      u.push(
        ...t.flatMap((m) => o.map((y) => v(p, m, y, s)))
      );
    },
    { immediate: !0, flush: "post" }
  ), r = () => {
    l(), f();
  };
  return fe(r), r;
}
const ee = 1;
function Te(e, n = {}) {
  const {
    throttle: t = 0,
    idle: o = 200,
    onStop: c = P,
    onScroll: u = P,
    offset: f = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: v = {
      capture: !1,
      passive: !0
    },
    behavior: l = "auto",
    window: r = le,
    onError: p = (i) => {
      console.error(i);
    }
  } = n, a = E(0), s = E(0), m = Q({
    get() {
      return a.value;
    },
    set(i) {
      d(i, void 0);
    }
  }), y = Q({
    get() {
      return s.value;
    },
    set(i) {
      d(void 0, i);
    }
  });
  function d(i, L) {
    var T, W, j, k;
    if (!r)
      return;
    const $ = A(e);
    if (!$)
      return;
    (j = $ instanceof Document ? r.document.body : $) == null || j.scrollTo({
      top: (T = A(L)) != null ? T : y.value,
      left: (W = A(i)) != null ? W : m.value,
      behavior: A(l)
    });
    const I = ((k = $ == null ? void 0 : $.document) == null ? void 0 : k.documentElement) || ($ == null ? void 0 : $.documentElement) || $;
    m != null && (a.value = I.scrollLeft), y != null && (s.value = I.scrollTop);
  }
  const h = E(!1), g = U({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), _ = U({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), R = (i) => {
    h.value && (h.value = !1, _.left = !1, _.right = !1, _.top = !1, _.bottom = !1, c(i));
  }, re = _e(R, t + o), M = (i) => {
    var L;
    if (!r)
      return;
    const T = ((L = i == null ? void 0 : i.document) == null ? void 0 : L.documentElement) || (i == null ? void 0 : i.documentElement) || ne(i), { display: W, flexDirection: j } = getComputedStyle(T), k = T.scrollLeft;
    _.left = k < a.value, _.right = k > a.value;
    const $ = Math.abs(k) <= (f.left || 0), I = Math.abs(k) + T.clientWidth >= T.scrollWidth - (f.right || 0) - ee;
    W === "flex" && j === "row-reverse" ? (g.left = I, g.right = $) : (g.left = $, g.right = I), a.value = k;
    let D = T.scrollTop;
    i === r.document && !D && (D = r.document.body.scrollTop), _.top = D < s.value, _.bottom = D > s.value;
    const J = Math.abs(D) <= (f.top || 0), K = Math.abs(D) + T.clientHeight >= T.scrollHeight - (f.bottom || 0) - ee;
    W === "flex" && j === "column-reverse" ? (g.top = K, g.bottom = J) : (g.top = J, g.bottom = K), s.value = D;
  }, Y = (i) => {
    var L;
    if (!r)
      return;
    const T = (L = i.target.documentElement) != null ? L : i.target;
    M(T), h.value = !0, re(i), u(i);
  };
  return Z(
    e,
    "scroll",
    t ? ye(Y, t, !0, !1) : Y,
    v
  ), Ce(() => {
    try {
      const i = A(e);
      if (!i)
        return;
      M(i);
    } catch (i) {
      p(i);
    }
  }), Z(
    e,
    "scrollend",
    R,
    v
  ), {
    x: m,
    y,
    isScrolling: h,
    arrivedState: g,
    directions: _,
    measure() {
      const i = A(e);
      r && i && M(i);
    }
  };
}
const be = (e, n) => new Promise((t) => {
  const o = () => {
    e.removeEventListener("scrollend", o), t(!0);
  };
  e.addEventListener("scrollend", o), e.scrollTo(n);
}), we = (e) => new Promise((n) => setTimeout(n, e)), G = (e) => {
  const n = E([]), t = E(0), o = E(!1), c = E(), { y: u } = Te(e.scrollContainer, {
    throttle: 100
  }), f = E(document.createElement("div")), v = async () => {
    await te();
    const a = e.selector.reduce(
      (d, h, g) => (d[h] = g, d),
      {}
    ), s = f.value.querySelectorAll(
      e.selector.join(",")
    ), m = Array.from(s).filter(
      (d) => d instanceof HTMLElement && d.innerText.trim()
    );
    if (!m.length)
      return [];
    const y = (d) => {
      const h = d.tagName.toLowerCase(), g = d.classList;
      let _ = 0;
      for (const R of g)
        if (Object.prototype.hasOwnProperty.call(a, `.${R}`)) {
          _ = a[`.${R}`] || 0;
          break;
        }
      return Object.prototype.hasOwnProperty.call(a, h) && (_ = a[h] || 0), _;
    };
    return m.map((d, h) => (d.id || (d.id = `vcvTitle${h}`), {
      title: d.innerText,
      id: d.id,
      catalogId: `vcvAnchor${h}`,
      level: y(d),
      offsetTop: d.offsetTop
    }));
  }, l = (a) => {
    if (!o.value)
      for (let s = 0; s < n.value.length; s++) {
        const y = n.value[s].offsetTop - a - e.topDistance;
        if (console.log("top:", y, s), y > 0 && s - 1 >= 0) {
          t.value = s - 1, r();
          break;
        }
        t.value = s;
      }
  }, r = () => {
    var h, g, _;
    const a = document.querySelector(
      `#vcvAnchor${t.value}`
    ), s = ((h = c.value) == null ? void 0 : h.clientHeight) || 0, m = a.offsetTop, y = ((g = c.value) == null ? void 0 : g.scrollTop) || 0, d = m - y;
    (d > s / 2 || d < s / 2) && ((_ = c.value) == null || _.scrollTo({
      top: m - s / 2,
      behavior: o.value ? "instant" : "smooth"
    }));
  }, p = async (a, s) => {
    if (o.value = !0, t.value = s, r(), e.useAnchor) {
      o.value = !1;
      return;
    }
    await be(e.scrollContainer, {
      top: a.offsetTop - e.topDistance,
      behavior: "smooth"
    }), await we(100), o.value = !1;
  };
  return x(
    () => u.value,
    () => {
      console.log(u.value), l(u.value);
    }
  ), x(
    () => [e.contentContainer, e.isWatch],
    async (a) => {
      console.log("val:", a);
      const [s, m] = a;
      s && (s.$el ? f.value = s.$el : f.value = s, n.value = await v());
    },
    {
      immediate: !0
    }
  ), {
    titles: n,
    currentIndex: t,
    catalogRef: c,
    handleAnchorClick: p
  };
}, $e = { class: "vcv-wrapper" }, Ae = ["id", "onClick"], ke = ["href"], Ee = { key: 1 }, Se = /* @__PURE__ */ B({
  __name: "LineCatalog",
  props: {
    contentContainer: { default: () => document.body },
    scrollContainer: { default: () => window },
    selector: {},
    isWatch: { type: Boolean, default: !1 },
    topDistance: { default: 0 },
    useAnchor: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, { titles: t, currentIndex: o, catalogRef: c, handleAnchorClick: u } = G(n);
    return (f, v) => (b(), w("div", $e, [
      v[0] || (v[0] = S("div", { class: "vcv-line" }, null, -1)),
      S("div", {
        class: "vcv-catalog-content",
        ref_key: "catalogRef",
        ref: c
      }, [
        (b(!0), w(H, null, F(C(t), (l, r) => N(f.$slots, "default", V({
          key: l.title,
          ref_for: !0
        }, { active: C(o) === r, anchor: l }), () => [
          S("div", {
            id: `vcvAnchor${r}`,
            class: q(["vcv-line-catalog-item", C(o) === r ? "active" : ""]),
            style: z({ paddingLeft: `${10 + l.level * 15}px` }),
            onClick: (p) => C(u)(l, r)
          }, [
            f.useAnchor ? (b(), w("a", {
              key: 0,
              href: `#${l.id}`
            }, O(l.title), 9, ke)) : (b(), w("span", Ee, O(l.title), 1))
          ], 14, Ae)
        ], !0)), 128))
      ], 512)
    ]));
  }
}), X = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, c] of n)
    t[o] = c;
  return t;
}, He = /* @__PURE__ */ X(Se, [["__scopeId", "data-v-d79c3289"]]), Le = { class: "vcv-wrapper" }, De = ["id", "onClick"], Pe = ["href"], Oe = { key: 1 }, Re = /* @__PURE__ */ B({
  __name: "PointCatalog",
  props: {
    contentContainer: {},
    scrollContainer: { default: () => window },
    selector: {},
    isWatch: { type: Boolean, default: !1 },
    topDistance: { default: 0 },
    useAnchor: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, { titles: t, currentIndex: o, catalogRef: c, handleAnchorClick: u } = G(n);
    return (f, v) => (b(), w("div", Le, [
      v[0] || (v[0] = S("div", { class: "vcv-line" }, null, -1)),
      S("div", {
        class: "vcv-catalog-content",
        ref_key: "catalogRef",
        ref: c
      }, [
        (b(!0), w(H, null, F(C(t), (l, r) => N(f.$slots, "default", V({
          key: l.title,
          ref_for: !0
        }, { active: C(o) === r, anchor: l }), () => [
          S("div", {
            id: `vcvAnchor${r}`,
            class: q(["vcv-point-catalog-item", C(o) === r ? "active" : ""]),
            style: z({ paddingLeft: `${10 + l.level * 15}px` }),
            onClick: (p) => C(u)(l, r)
          }, [
            f.useAnchor ? (b(), w("a", {
              key: 0,
              href: `#${l.id}`
            }, O(l.title), 9, Pe)) : (b(), w("span", Oe, O(l.title), 1))
          ], 14, De)
        ], !0)), 128))
      ], 512)
    ]));
  }
}), Fe = /* @__PURE__ */ X(Re, [["__scopeId", "data-v-f000910c"]]), We = { class: "vcv-wrapper" }, je = ["id", "onClick"], Ie = ["href"], Me = { key: 1 }, xe = /* @__PURE__ */ B({
  __name: "NormalCatalog",
  props: {
    contentContainer: { default: () => document.body },
    scrollContainer: { default: () => window },
    selector: {},
    isWatch: { type: Boolean, default: !1 },
    topDistance: { default: 0 },
    useAnchor: { type: Boolean, default: !0 }
  },
  setup(e) {
    const n = e, { titles: t, currentIndex: o, catalogRef: c, handleAnchorClick: u } = G(n);
    return (f, v) => (b(), w("div", We, [
      S("div", {
        class: "vcv-catalog-content",
        ref_key: "catalogRef",
        ref: c
      }, [
        (b(!0), w(H, null, F(C(t), (l, r) => N(f.$slots, "default", V({
          key: l.title,
          ref_for: !0
        }, { active: C(o) === r, anchor: l }), () => [
          S("div", {
            id: `vcvAnchor${r}`,
            class: q(["vcv-line-catalog-item", C(o) === r ? "active" : ""]),
            style: z({ paddingLeft: `${10 + l.level * 15}px` }),
            onClick: (p) => C(u)(l, r)
          }, [
            f.useAnchor ? (b(), w("a", {
              key: 0,
              href: `#${l.id}`
            }, O(l.title), 9, Ie)) : (b(), w("span", Me, O(l.title), 1))
          ], 14, je)
        ], !0)), 128))
      ], 512)
    ]));
  }
}), Ne = /* @__PURE__ */ X(xe, [["__scopeId", "data-v-9efa29d3"]]);
export {
  He as LineCatalog,
  Ne as NormalCatalog,
  Fe as PointCatalog
};
