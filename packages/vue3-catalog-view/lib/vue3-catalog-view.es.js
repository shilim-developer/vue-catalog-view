import "./style.css";
import { unref as N, onMounted as U, nextTick as Z, getCurrentScope as oe, onScopeDispose as re, isRef as le, getCurrentInstance as B, ref as _, computed as x, reactive as Q, watch as H, watchEffect as ie, defineComponent as se, createElementBlock as D, openBlock as I, normalizeClass as V, createCommentVNode as ae, createElementVNode as X, Fragment as ce, renderList as ue, renderSlot as fe, mergeProps as de, normalizeStyle as ve, toDisplayString as J } from "vue";
function z(e) {
  return oe() ? (re(e), !0) : !1;
}
function S(e) {
  return typeof e == "function" ? e() : N(e);
}
const pe = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const me = (e) => e != null, he = Object.prototype.toString, ye = (e) => he.call(e) === "[object Object]", W = () => {
};
function ee(e, t) {
  function n(...o) {
    return new Promise((r, l) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(r).catch(l);
    });
  }
  return n;
}
function ge(e, t = {}) {
  let n, o, r = W;
  const l = (s) => {
    clearTimeout(s), r(), r = W;
  };
  return (s) => {
    const f = S(e), a = S(t.maxWait);
    return n && l(n), f <= 0 || a !== void 0 && a <= 0 ? (o && (l(o), o = null), Promise.resolve(s())) : new Promise((c, v) => {
      r = t.rejectOnCancel ? v : c, a && !o && (o = setTimeout(() => {
        n && l(n), o = null, c(s());
      }, a)), n = setTimeout(() => {
        o && l(o), o = null, c(s());
      }, f);
    });
  };
}
function be(...e) {
  let t = 0, n, o = !0, r = W, l, u, s, f, a;
  !le(e[0]) && typeof e[0] == "object" ? { delay: u, trailing: s = !0, leading: f = !0, rejectOnCancel: a = !1 } = e[0] : [u, s = !0, f = !0, a = !1] = e;
  const c = () => {
    n && (clearTimeout(n), n = void 0, r(), r = W);
  };
  return (m) => {
    const y = S(u), E = Date.now() - t, O = () => l = m();
    return c(), y <= 0 ? (t = Date.now(), O()) : (E > y && (f || !o) ? (t = Date.now(), O()) : s && (l = new Promise((w, p) => {
      r = a ? p : w, n = setTimeout(() => {
        t = Date.now(), o = !0, w(O()), c();
      }, Math.max(0, y - E));
    })), !f && !n && (n = setTimeout(() => o = !0, y)), o = !1, l);
  };
}
function we(e) {
  return B();
}
function Te(e, t = 200, n = {}) {
  return ee(
    ge(t, n),
    e
  );
}
function Se(e, t = 200, n = !1, o = !0, r = !1) {
  return ee(
    be(t, n, o, r),
    e
  );
}
function te(e, t = !0, n) {
  we() ? U(e, n) : t ? e() : Z(e);
}
const R = pe ? window : void 0;
function Y(e) {
  var t;
  const n = S(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function F(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = R) : [t, n, o, r] = e, !t)
    return W;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], u = () => {
    l.forEach((c) => c()), l.length = 0;
  }, s = (c, v, m, y) => (c.addEventListener(v, m, y), () => c.removeEventListener(v, m, y)), f = H(
    () => [Y(t), S(r)],
    ([c, v]) => {
      if (u(), !c)
        return;
      const m = ye(v) ? { ...v } : v;
      l.push(
        ...n.flatMap((y) => o.map((E) => s(c, y, E, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), a = () => {
    f(), u();
  };
  return z(a), a;
}
function Ee() {
  const e = _(!1), t = B();
  return t && U(() => {
    e.value = !0;
  }, t), e;
}
function ne(e) {
  const t = Ee();
  return x(() => (t.value, !!e()));
}
function _e(e, t, n = {}) {
  const { window: o = R, ...r } = n;
  let l;
  const u = ne(() => o && "MutationObserver" in o), s = () => {
    l && (l.disconnect(), l = void 0);
  }, f = x(() => {
    const m = S(e), y = (Array.isArray(m) ? m : [m]).map(Y).filter(me);
    return new Set(y);
  }), a = H(
    () => f.value,
    (m) => {
      s(), u.value && m.size && (l = new MutationObserver(t), m.forEach((y) => l.observe(y, r)));
    },
    { immediate: !0, flush: "post" }
  ), c = () => l == null ? void 0 : l.takeRecords(), v = () => {
    a(), s();
  };
  return z(v), {
    isSupported: u,
    stop: v,
    takeRecords: c
  };
}
function Ce(e, t = {}) {
  const { window: n = R } = t, o = ne(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const l = _(!1), u = (a) => {
    l.value = a.matches;
  }, s = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", u) : r.removeListener(u));
  }, f = ie(() => {
    o.value && (s(), r = n.matchMedia(S(e)), "addEventListener" in r ? r.addEventListener("change", u) : r.addListener(u), l.value = r.matches);
  });
  return z(() => {
    f(), s(), r = void 0;
  }), l;
}
const K = 1;
function Le(e, t = {}) {
  const {
    throttle: n = 0,
    idle: o = 200,
    onStop: r = W,
    onScroll: l = W,
    offset: u = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: s = {
      capture: !1,
      passive: !0
    },
    behavior: f = "auto",
    window: a = R,
    onError: c = (i) => {
      console.error(i);
    }
  } = t, v = _(0), m = _(0), y = x({
    get() {
      return v.value;
    },
    set(i) {
      O(i, void 0);
    }
  }), E = x({
    get() {
      return m.value;
    },
    set(i) {
      O(void 0, i);
    }
  });
  function O(i, b) {
    var g, $, P, M;
    if (!a)
      return;
    const L = S(e);
    if (!L)
      return;
    (P = L instanceof Document ? a.document.body : L) == null || P.scrollTo({
      top: (g = S(b)) != null ? g : E.value,
      left: ($ = S(i)) != null ? $ : y.value,
      behavior: S(f)
    });
    const j = ((M = L == null ? void 0 : L.document) == null ? void 0 : M.documentElement) || (L == null ? void 0 : L.documentElement) || L;
    y != null && (v.value = j.scrollLeft), E != null && (m.value = j.scrollTop);
  }
  const w = _(!1), p = Q({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), d = Q({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), C = (i) => {
    w.value && (w.value = !1, d.left = !1, d.right = !1, d.top = !1, d.bottom = !1, r(i));
  }, A = Te(C, n + o), h = (i) => {
    var b;
    if (!a)
      return;
    const g = ((b = i == null ? void 0 : i.document) == null ? void 0 : b.documentElement) || (i == null ? void 0 : i.documentElement) || Y(i), { display: $, flexDirection: P } = getComputedStyle(g), M = g.scrollLeft;
    d.left = M < v.value, d.right = M > v.value;
    const L = Math.abs(M) <= (u.left || 0), j = Math.abs(M) + g.clientWidth >= g.scrollWidth - (u.right || 0) - K;
    $ === "flex" && P === "row-reverse" ? (p.left = j, p.right = L) : (p.left = L, p.right = j), v.value = M;
    let k = g.scrollTop;
    i === a.document && !k && (k = a.document.body.scrollTop), d.top = k < m.value, d.bottom = k > m.value;
    const q = Math.abs(k) <= (u.top || 0), G = Math.abs(k) + g.clientHeight >= g.scrollHeight - (u.bottom || 0) - K;
    $ === "flex" && P === "column-reverse" ? (p.top = G, p.bottom = q) : (p.top = q, p.bottom = G), m.value = k;
  }, T = (i) => {
    var b;
    if (!a)
      return;
    const g = (b = i.target.documentElement) != null ? b : i.target;
    h(g), w.value = !0, A(i), l(i);
  };
  return F(
    e,
    "scroll",
    n ? Se(T, n, !0, !1) : T,
    s
  ), te(() => {
    try {
      const i = S(e);
      if (!i)
        return;
      h(i);
    } catch (i) {
      c(i);
    }
  }), F(
    e,
    "scrollend",
    C,
    s
  ), {
    x: y,
    y: E,
    isScrolling: w,
    arrivedState: p,
    directions: d,
    measure() {
      const i = S(e);
      a && i && h(i);
    }
  };
}
function Ae(e = {}) {
  const {
    window: t = R,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: l = !0,
    type: u = "inner"
  } = e, s = _(n), f = _(o), a = () => {
    t && (u === "outer" ? (s.value = t.outerWidth, f.value = t.outerHeight) : l ? (s.value = t.innerWidth, f.value = t.innerHeight) : (s.value = t.document.documentElement.clientWidth, f.value = t.document.documentElement.clientHeight));
  };
  if (a(), te(a), F("resize", a, { passive: !0 }), r) {
    const c = Ce("(orientation: portrait)");
    H(c, () => a());
  }
  return { width: s, height: f };
}
const Oe = (e, t) => new Promise((n) => {
  const o = () => {
    e.removeEventListener("scrollend", o), n(!0);
  };
  e.addEventListener("scrollend", o), e.scrollTo(t);
}), Me = (e) => new Promise((t) => setTimeout(t, e)), ke = (e, t = "") => {
  const n = t && `-${t}-`, o = _([]), r = _(0), l = _(!1), u = _(), s = x(
    () => e.scrollContainer.$el ? e.scrollContainer.$el : e.scrollContainer
  ), { y: f, arrivedState: a } = Le(s, {
    throttle: 100
  }), { width: c } = Ae(), v = _(document.createElement("div")), m = async () => {
    await Z(), s.value.style && (s.value.style.position = "relative");
    const p = e.selector.reduce(
      (h, T, i) => (h[T] = i, h),
      {}
    ), d = v.value.querySelectorAll(
      e.selector.join(",")
    ), C = Array.from(d).filter(
      (h) => h instanceof HTMLElement && h.innerText.trim()
    );
    if (!C.length)
      return [];
    const A = (h) => {
      const T = h.tagName.toLowerCase(), i = Array.from(h.classList);
      let b = 0;
      for (const g of i)
        if (Object.prototype.hasOwnProperty.call(p, `.${g}`)) {
          b = p[`.${g}`] || 0;
          break;
        }
      return Object.prototype.hasOwnProperty.call(p, T) && (b = p[T] || 0), b;
    };
    return C.map((h, T) => (h.id || (h.id = `vcvTitle${n}${T}`), {
      title: h.innerText,
      id: h.id,
      catalogId: `vcvAnchor${n}${T}`,
      level: A(h),
      offsetTop: h.offsetTop
    }));
  }, y = (p) => {
    if (!l.value)
      for (let d = 0; d < o.value.length; d++) {
        const A = o.value[d].offsetTop - p - e.topDistance;
        if (a.bottom) {
          r.value = o.value.length - 1, E();
          break;
        } else if (A > 0 && d - 1 >= 0) {
          r.value = d - 1, E();
          break;
        }
        r.value = d;
      }
  }, E = () => {
    var T, i, b;
    const p = document.querySelector(
      `#vcvAnchor${n}${r.value}`
    ), d = ((T = u.value) == null ? void 0 : T.clientHeight) || 0, C = p.offsetTop, A = ((i = u.value) == null ? void 0 : i.scrollTop) || 0, h = C - A;
    (h > d / 2 || h < d / 2) && ((b = u.value) == null || b.scrollTo({
      top: C - d / 2,
      behavior: l.value ? "instant" : "smooth"
    }));
  }, O = async (p, d) => {
    if (l.value = !0, r.value = d, E(), e.useAnchor) {
      l.value = !1;
      return;
    }
    await Oe(s.value, {
      top: p.offsetTop - e.topDistance,
      behavior: "smooth"
    }), await Me(100), l.value = !1;
  };
  H(
    () => f.value,
    () => {
      y(f.value);
    }
  );
  let w;
  return H(
    () => [e.contentContainer, e.isWatch, c.value],
    async (p) => {
      const [d, C] = p;
      if (d) {
        if (d.$el ? v.value = d.$el : v.value = d, C) {
          w && w();
          const { stop: A } = _e(
            v,
            async () => {
              o.value = await m();
            },
            {
              childList: !0,
              subtree: !0,
              characterData: !0
            }
          );
          w = A;
        } else
          w && w();
        o.value = await m();
      }
    },
    {
      immediate: !0
    }
  ), {
    titles: o,
    currentIndex: r,
    catalogRef: u,
    handleAnchorClick: O
  };
};
function We() {
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
      default: !1
    },
    isWatch: {
      type: Boolean,
      default: !0
    },
    ellipsis: {
      type: Boolean,
      default: !0
    }
  };
}
const De = {
  key: 0,
  class: "vcv-line"
}, Ie = ["id", "onClick"], $e = ["href"], Pe = { key: 1 }, je = /* @__PURE__ */ se({
  __name: "CatalogView",
  props: We(),
  setup(e) {
    var u, s;
    const t = e, { titles: n, currentIndex: o, catalogRef: r, handleAnchorClick: l } = ke(
      t,
      ((s = (u = B()) == null ? void 0 : u.vnode) == null ? void 0 : s.key) || ""
    );
    return (f, a) => (I(), D("div", {
      class: V(["vcv-wrapper", f.type])
    }, [
      f.type !== "default" ? (I(), D("div", De)) : ae("", !0),
      X("div", {
        class: "vcv-catalog-content",
        ref_key: "catalogRef",
        ref: r
      }, [
        (I(!0), D(ce, null, ue(N(n), (c, v) => (I(), D("div", {
          key: c.title,
          id: c.catalogId,
          onClick: (m) => N(l)(c, v),
          class: V(["vcv-catalog-item-wrapper", N(o) === v ? "active" : ""])
        }, [
          fe(f.$slots, "default", de({ ref_for: !0 }, { active: N(o) === v, anchor: c }), () => [
            X("div", {
              class: V(["vcv-catalog-item", {
                "text-ellipsis": f.ellipsis
              }]),
              style: ve({
                paddingLeft: `${15 + (c.level - 1) * f.indent}px`,
                paddingRight: "15px"
              })
            }, [
              f.useAnchor ? (I(), D("a", {
                key: 0,
                href: `#${c.id}`
              }, J(c.title), 9, $e)) : (I(), D("span", Pe, J(c.title), 1))
            ], 6)
          ], !0)
        ], 10, Ie))), 128))
      ], 512)
    ], 2));
  }
}), Ne = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Re = /* @__PURE__ */ Ne(je, [["__scopeId", "data-v-74ebfd8f"]]);
export {
  Re as CatalogView,
  We as catalogViewProps
};
