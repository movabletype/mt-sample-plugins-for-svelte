function T() {
}
function N(t, e) {
  for (const n in e) t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function we(t) {
  return t();
}
function de() {
  return /* @__PURE__ */ Object.create(null);
}
function Z(t) {
  t.forEach(we);
}
function ve(t) {
  return typeof t == "function";
}
function fe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Ee(t) {
  return Object.keys(t).length === 0;
}
function He(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return T;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ye(t, e, n, i) {
  if (t) {
    const s = $e(t, e, n, i);
    return t[0](s);
  }
}
function $e(t, e, n, i) {
  return t[1] && i ? N(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function qe(t, e, n, i) {
  if (t[2] && i) {
    const s = t[2](i(n));
    if (e.dirty === void 0)
      return s;
    if (typeof s == "object") {
      const u = [], l = Math.max(e.dirty.length, s.length);
      for (let o = 0; o < l; o += 1)
        u[o] = e.dirty[o] | s[o];
      return u;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function ke(t, e, n, i, s, u) {
  if (s) {
    const l = $e(e, n, i, u);
    t.p(l, s);
  }
}
function Se(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function E(t, e) {
  t.appendChild(e);
}
function v(t, e, n) {
  t.insertBefore(e, n || null);
}
function w(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function y(t) {
  return document.createElement(t);
}
function x(t) {
  return document.createTextNode(t);
}
function S() {
  return x(" ");
}
function P(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function C(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Ne = ["width", "height"];
function $(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && Ne.indexOf(i) === -1 ? t[i] = e[i] : C(t, i, e[i]);
}
function W(t) {
  return t === "" ? null : +t;
}
function Le(t) {
  return Array.from(t.childNodes);
}
function Ce(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function q(t, e) {
  t.value = e ?? "";
}
function J(t, e, n) {
  for (let i = 0; i < t.options.length; i += 1) {
    const s = t.options[i];
    if (s.__value === e) {
      s.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function ce(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    i.selected = ~e.indexOf(i.__value);
  }
}
function je(t) {
  const e = t.querySelector(":checked");
  return e && e.__value;
}
function _e(t, e, n) {
  t.classList.toggle(e, !!n);
}
let ue;
function U(t) {
  ue = t;
}
const Q = [], X = [];
let R = [];
const oe = [], Ie = /* @__PURE__ */ Promise.resolve();
let se = !1;
function Pe() {
  se || (se = !0, Ie.then(Oe));
}
function Y(t) {
  R.push(t);
}
function pe(t) {
  oe.push(t);
}
const le = /* @__PURE__ */ new Set();
let M = 0;
function Oe() {
  if (M !== 0)
    return;
  const t = ue;
  do {
    try {
      for (; M < Q.length; ) {
        const e = Q[M];
        M++, U(e), Fe(e.$$);
      }
    } catch (e) {
      throw Q.length = 0, M = 0, e;
    }
    for (U(null), Q.length = 0, M = 0; X.length; ) X.pop()();
    for (let e = 0; e < R.length; e += 1) {
      const n = R[e];
      le.has(n) || (le.add(n), n());
    }
    R.length = 0;
  } while (Q.length);
  for (; oe.length; )
    oe.pop()();
  se = !1, le.clear(), U(t);
}
function Fe(t) {
  if (t.fragment !== null) {
    t.update(), Z(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Y);
  }
}
function Be(t) {
  const e = [], n = [];
  R.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), R = e;
}
const K = /* @__PURE__ */ new Set();
let De;
function O(t, e) {
  t && t.i && (K.delete(t), t.i(e));
}
function H(t, e, n, i) {
  if (t && t.o) {
    if (K.has(t)) return;
    K.add(t), De.c.push(() => {
      K.delete(t);
    }), t.o(e);
  }
}
function G(t, e) {
  const n = {}, i = {}, s = { $$scope: 1 };
  let u = t.length;
  for (; u--; ) {
    const l = t[u], o = e[u];
    if (o) {
      for (const f in l)
        f in o || (i[f] = 1);
      for (const f in o)
        s[f] || (n[f] = o[f], s[f] = 1);
      t[u] = o;
    } else
      for (const f in l)
        s[f] = 1;
  }
  for (const l in i)
    l in n || (n[l] = void 0);
  return n;
}
function me(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function I(t) {
  t && t.c();
}
function L(t, e, n) {
  const { fragment: i, after_update: s } = t.$$;
  i && i.m(e, n), Y(() => {
    const u = t.$$.on_mount.map(we).filter(ve);
    t.$$.on_destroy ? t.$$.on_destroy.push(...u) : Z(u), t.$$.on_mount = [];
  }), s.forEach(Y);
}
function j(t, e) {
  const n = t.$$;
  n.fragment !== null && (Be(n.after_update), Z(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Me(t, e) {
  t.$$.dirty[0] === -1 && (Q.push(t), Pe(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function re(t, e, n, i, s, u, l = null, o = [-1]) {
  const f = ue;
  U(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: u,
    update: T,
    not_equal: s,
    bound: de(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: de(),
    dirty: o,
    skip_bound: !1,
    root: e.target || f.$$.root
  };
  l && l(r.root);
  let m = !1;
  if (r.ctx = n ? n(t, e.props || {}, (c, a, ..._) => {
    const b = _.length ? _[0] : a;
    return r.ctx && s(r.ctx[c], r.ctx[c] = b) && (!r.skip_bound && r.bound[c] && r.bound[c](b), m && Me(t, c)), a;
  }) : [], r.update(), m = !0, Z(r.before_update), r.fragment = i ? i(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Le(e.target);
      r.fragment && r.fragment.l(c), c.forEach(w);
    } else
      r.fragment && r.fragment.c();
    e.intro && O(t.$$.fragment), L(t, e.target, e.anchor), Oe();
  }
  U(f);
}
class ae {
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$ = void 0;
  /**
   * ### PRIVATE API
   *
   * Do not use, may change at any time
   *
   * @type {any}
   */
  $$set = void 0;
  /** @returns {void} */
  $destroy() {
    j(this, 1), this.$destroy = T;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!ve(n))
      return T;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const s = i.indexOf(n);
      s !== -1 && i.splice(s, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ee(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Qe = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Qe);
function he(t) {
  let e, n, i, s = (
    /*required*/
    t[3] && ge()
  );
  return {
    c() {
      e = y("label"), n = x(
        /*label*/
        t[2]
      ), i = S(), s && s.c(), C(
        e,
        "for",
        /*id*/
        t[0]
      );
    },
    m(u, l) {
      v(u, e, l), E(e, n), E(e, i), s && s.m(e, null);
    },
    p(u, l) {
      l & /*label*/
      4 && Ce(
        n,
        /*label*/
        u[2]
      ), /*required*/
      u[3] ? s ? s.p(u, l) : (s = ge(), s.c(), s.m(e, null)) : s && (s.d(1), s = null), l & /*id*/
      1 && C(
        e,
        "for",
        /*id*/
        u[0]
      );
    },
    d(u) {
      u && w(e), s && s.d();
    }
  };
}
function ge(t) {
  let e;
  return {
    c() {
      e = y("span"), e.textContent = `${window.trans("Required")}`, C(e, "class", "badge badge-danger");
    },
    m(n, i) {
      v(n, e, i);
    },
    p: T,
    d(n) {
      n && w(e);
    }
  };
}
function be(t) {
  let e, n, i;
  return {
    c() {
      e = y("small"), n = x(
        /*hint*/
        t[1]
      ), C(e, "id", i = /*id*/
      t[0] + "-field-help"), C(e, "class", "form-text text-muted");
    },
    m(s, u) {
      v(s, e, u), E(e, n);
    },
    p(s, u) {
      u & /*hint*/
      2 && Ce(
        n,
        /*hint*/
        s[1]
      ), u & /*id*/
      1 && i !== (i = /*id*/
      s[0] + "-field-help") && C(e, "id", i);
    },
    d(s) {
      s && w(e);
    }
  };
}
function Re(t) {
  let e, n, i, s, u, l = (
    /*label*/
    t[2] && /*showLabel*/
    t[5] && he(t)
  );
  const o = (
    /*#slots*/
    t[11].default
  ), f = ye(
    o,
    t,
    /*$$scope*/
    t[10],
    null
  );
  let r = (
    /*hint*/
    t[1] && /*showHint*/
    t[4] && be(t)
  ), m = [
    {
      id: s = /*id*/
      t[0] + "-field"
    },
    { class: "form-group" },
    /*attrProp*/
    t[7],
    /*attrShowProps*/
    t[6]
  ], c = {};
  for (let a = 0; a < m.length; a += 1)
    c = N(c, m[a]);
  return {
    c() {
      e = y("div"), l && l.c(), n = S(), f && f.c(), i = S(), r && r.c(), $(e, c), _e(
        e,
        "required",
        /*required*/
        t[3]
      );
    },
    m(a, _) {
      v(a, e, _), l && l.m(e, null), E(e, n), f && f.m(e, null), E(e, i), r && r.m(e, null), u = !0;
    },
    p(a, [_]) {
      /*label*/
      a[2] && /*showLabel*/
      a[5] ? l ? l.p(a, _) : (l = he(a), l.c(), l.m(e, n)) : l && (l.d(1), l = null), f && f.p && (!u || _ & /*$$scope*/
      1024) && ke(
        f,
        o,
        a,
        /*$$scope*/
        a[10],
        u ? qe(
          o,
          /*$$scope*/
          a[10],
          _,
          null
        ) : Se(
          /*$$scope*/
          a[10]
        ),
        null
      ), /*hint*/
      a[1] && /*showHint*/
      a[4] ? r ? r.p(a, _) : (r = be(a), r.c(), r.m(e, null)) : r && (r.d(1), r = null), $(e, c = G(m, [
        (!u || _ & /*id*/
        1 && s !== (s = /*id*/
        a[0] + "-field")) && { id: s },
        { class: "form-group" },
        _ & /*attrProp*/
        128 && /*attrProp*/
        a[7],
        _ & /*attrShowProps*/
        64 && /*attrShowProps*/
        a[6]
      ])), _e(
        e,
        "required",
        /*required*/
        a[3]
      );
    },
    i(a) {
      u || (O(f, a), u = !0);
    },
    o(a) {
      H(f, a), u = !1;
    },
    d(a) {
      a && w(e), l && l.d(), f && f.d(a), r && r.d();
    }
  };
}
function Te(t, e, n) {
  let i, { $$slots: s = {}, $$scope: u } = e, { id: l } = e, { attr: o = "" } = e, { attrShow: f = null } = e, { hint: r = "" } = e, { label: m = "" } = e, { required: c = 0 } = e, { showHint: a = 0 } = e, { showLabel: _ = 1 } = e;
  l || console.error("ConetntFieldOption: 'id' attribute missing");
  let b = {};
  return t.$$set = (p) => {
    "id" in p && n(0, l = p.id), "attr" in p && n(8, o = p.attr), "attrShow" in p && n(9, f = p.attrShow), "hint" in p && n(1, r = p.hint), "label" in p && n(2, m = p.label), "required" in p && n(3, c = p.required), "showHint" in p && n(4, a = p.showHint), "showLabel" in p && n(5, _ = p.showLabel), "$$scope" in p && n(10, u = p.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*attr*/
    256 && n(7, i = o ? { attr: o } : {}), t.$$.dirty & /*attrShow*/
    512 && f !== null && (f ? n(6, b = { style: "" }) : n(6, b = { hidden: "", style: "display: none;" }));
  }, [
    l,
    r,
    m,
    c,
    a,
    _,
    b,
    i,
    o,
    f,
    u,
    s
  ];
}
class B extends ae {
  constructor(e) {
    super(), re(this, e, Te, Re, fe, {
      id: 0,
      attr: 8,
      attrShow: 9,
      hint: 1,
      label: 2,
      required: 3,
      showHint: 4,
      showLabel: 5
    });
  }
}
function Ge(t) {
  const e = t.getElementsByClassName("mt-contentfield");
  let n = 0;
  for (let i = 0; i < e.length; i++)
    n += e[i].offsetHeight;
  n >= t.clientHeight || n >= 400 ? jQuery(t).height(n + 100) : jQuery(t).height(392);
}
function Ve(t) {
  let e, n, i, s, u = [
    { type: "text" },
    { ref: "label" },
    { name: "label" },
    {
      id: n = /*type*/
      t[2] + "-label"
    },
    { class: "form-control html5-form" },
    { required: !0 },
    { "data-mt-content-field-unique": "" }
  ], l = {};
  for (let o = 0; o < u.length; o += 1)
    l = N(l, u[o]);
  return {
    c() {
      e = y("input"), $(e, l);
    },
    m(o, f) {
      v(o, e, f), e.autofocus && e.focus(), q(
        e,
        /*field*/
        t[1].label
      ), i || (s = P(
        e,
        "input",
        /*input_input_handler*/
        t[6]
      ), i = !0);
    },
    p(o, f) {
      $(e, l = G(u, [
        { type: "text" },
        { ref: "label" },
        { name: "label" },
        f & /*type*/
        4 && n !== (n = /*type*/
        o[2] + "-label") && { id: n },
        { class: "form-control html5-form" },
        { required: !0 },
        { "data-mt-content-field-unique": "" }
      ])), f & /*field*/
      2 && e.value !== /*field*/
      o[1].label && q(
        e,
        /*field*/
        o[1].label
      );
    },
    d(o) {
      o && w(e), i = !1, s();
    }
  };
}
function Ae(t) {
  let e, n, i, s, u, l = [
    { type: "text" },
    { ref: "description" },
    { name: "description" },
    {
      id: n = /*type*/
      t[2] + "-description"
    },
    { class: "form-control" },
    {
      "aria-describedby": i = /*type*/
      t[2] + "-description-field-help"
    }
  ], o = {};
  for (let f = 0; f < l.length; f += 1)
    o = N(o, l[f]);
  return {
    c() {
      e = y("input"), $(e, o);
    },
    m(f, r) {
      v(f, e, r), e.autofocus && e.focus(), q(
        e,
        /*options*/
        t[0].description
      ), s || (u = P(
        e,
        "input",
        /*input_input_handler_1*/
        t[7]
      ), s = !0);
    },
    p(f, r) {
      $(e, o = G(l, [
        { type: "text" },
        { ref: "description" },
        { name: "description" },
        r & /*type*/
        4 && n !== (n = /*type*/
        f[2] + "-description") && { id: n },
        { class: "form-control" },
        r & /*type*/
        4 && i !== (i = /*type*/
        f[2] + "-description-field-help") && {
          "aria-describedby": i
        }
      ])), r & /*options*/
      1 && e.value !== /*options*/
      f[0].description && q(
        e,
        /*options*/
        f[0].description
      );
    },
    d(f) {
      f && w(e), s = !1, u();
    }
  };
}
function Ue(t) {
  let e, n, i, s, u = window.trans("Is this field required?") + "", l, o, f, r, m = [
    { ref: "required" },
    { type: "checkbox" },
    { class: "mt-switch form-control" },
    {
      id: n = /*type*/
      t[2] + "-required"
    },
    { name: "required" }
  ], c = {};
  for (let a = 0; a < m.length; a += 1)
    c = N(c, m[a]);
  return {
    c() {
      e = y("input"), i = S(), s = y("label"), l = x(u), $(e, c), C(s, "for", o = /*type*/
      t[2] + "-required");
    },
    m(a, _) {
      v(a, e, _), e.autofocus && e.focus(), e.checked = /*options*/
      t[0].required, v(a, i, _), v(a, s, _), E(s, l), f || (r = P(
        e,
        "change",
        /*input_change_handler*/
        t[8]
      ), f = !0);
    },
    p(a, _) {
      $(e, c = G(m, [
        { ref: "required" },
        { type: "checkbox" },
        { class: "mt-switch form-control" },
        _ & /*type*/
        4 && n !== (n = /*type*/
        a[2] + "-required") && { id: n },
        { name: "required" }
      ])), _ & /*options*/
      1 && (e.checked = /*options*/
      a[0].required), _ & /*type*/
      4 && o !== (o = /*type*/
      a[2] + "-required") && C(s, "for", o);
    },
    d(a) {
      a && (w(e), w(i), w(s)), f = !1, r();
    }
  };
}
function ze(t) {
  let e, n, i, s, u, l, o, f, r = [
    { ref: "display" },
    { name: "display" },
    {
      id: l = /*type*/
      t[2] + "-display"
    },
    {
      class: "custom-select form-control form-select"
    }
  ], m = {};
  for (let c = 0; c < r.length; c += 1)
    m = N(m, r[c]);
  return {
    c() {
      e = y("select"), n = y("option"), n.textContent = `${window.trans("Force")}`, i = y("option"), i.textContent = `${window.trans("Default")}`, s = y("option"), s.textContent = `${window.trans("Optional")}`, u = y("option"), u.textContent = `${window.trans("None")}`, n.__value = "force", q(n, n.__value), i.__value = "default", q(i, i.__value), s.__value = "optional", q(s, s.__value), u.__value = "none", q(u, u.__value), $(e, m), /*options*/
      t[0].display === void 0 && Y(() => (
        /*select_change_handler*/
        t[9].call(e)
      ));
    },
    m(c, a) {
      v(c, e, a), E(e, n), E(e, i), E(e, s), E(e, u), "value" in m && (m.multiple ? ce : J)(e, m.value), e.autofocus && e.focus(), J(
        e,
        /*options*/
        t[0].display,
        !0
      ), o || (f = P(
        e,
        "change",
        /*select_change_handler*/
        t[9]
      ), o = !0);
    },
    p(c, a) {
      $(e, m = G(r, [
        { ref: "display" },
        { name: "display" },
        a & /*type*/
        4 && l !== (l = /*type*/
        c[2] + "-display") && { id: l },
        {
          class: "custom-select form-control form-select"
        }
      ])), a & /*type*/
      4 && "value" in m && (m.multiple ? ce : J)(e, m.value), a & /*options*/
      1 && J(
        e,
        /*options*/
        c[0].display
      );
    },
    d(c) {
      c && w(e), o = !1, f();
    }
  };
}
function Je(t) {
  let e, n, i, s, u, l, o, f, r, m, c, a, _, b, p, k, F, z, V = [
    { type: "hidden" },
    { ref: "id" },
    { name: "id" },
    {
      id: n = /*type*/
      t[2] + "-id"
    },
    { class: "form-control" },
    {
      value: i = /*field*/
      t[1].isNew ? `id:${/*field*/
      t[1].id}` : (
        /*field*/
        t[1].id
      )
    }
  ], D = {};
  for (let d = 0; d < V.length; d += 1)
    D = N(D, V[d]);
  u = new B({
    props: {
      id: (
        /*type*/
        t[2] + "-label"
      ),
      label: window.trans("Label"),
      required: 1,
      $$slots: { default: [Ve] },
      $$scope: { ctx: t }
    }
  }), o = new B({
    props: {
      id: (
        /*type*/
        t[2] + "-description"
      ),
      label: window.trans("Description"),
      showHint: 1,
      hint: window.trans("The entered message is displayed as a input field hint."),
      $$slots: { default: [Ae] },
      $$scope: { ctx: t }
    }
  }), r = new B({
    props: {
      id: (
        /*type*/
        t[2] + "-required"
      ),
      label: window.trans("Is this field required?"),
      $$slots: { default: [Ue] },
      $$scope: { ctx: t }
    }
  }), c = new B({
    props: {
      id: (
        /*type*/
        t[2] + "-display"
      ),
      label: window.trans("Display Options"),
      required: 1,
      showHint: 1,
      hint: window.trans("Choose the display options for this content field in the listing screen."),
      $$slots: { default: [ze] },
      $$scope: { ctx: t }
    }
  });
  const A = (
    /*#slots*/
    t[5].default
  ), g = ye(
    A,
    t,
    /*$$scope*/
    t[10],
    null
  );
  return {
    c() {
      e = y("input"), s = S(), I(u.$$.fragment), l = S(), I(o.$$.fragment), f = S(), I(r.$$.fragment), m = S(), I(c.$$.fragment), a = S(), g && g.c(), _ = S(), b = y("div"), p = y("button"), p.textContent = `${window.trans("Close")}`, $(e, D), C(p, "type", "button"), C(p, "class", "btn btn-default"), C(b, "class", "form-group-button");
    },
    m(d, h) {
      v(d, e, h), e.autofocus && e.focus(), v(d, s, h), L(u, d, h), v(d, l, h), L(o, d, h), v(d, f, h), L(r, d, h), v(d, m, h), L(c, d, h), v(d, a, h), g && g.m(d, h), v(d, _, h), v(d, b, h), E(b, p), k = !0, F || (z = P(
        p,
        "click",
        /*closePanel*/
        t[3]
      ), F = !0);
    },
    p(d, [h]) {
      $(e, D = G(V, [
        { type: "hidden" },
        { ref: "id" },
        { name: "id" },
        (!k || h & /*type*/
        4 && n !== (n = /*type*/
        d[2] + "-id")) && { id: n },
        { class: "form-control" },
        (!k || h & /*field*/
        2 && i !== (i = /*field*/
        d[1].isNew ? `id:${/*field*/
        d[1].id}` : (
          /*field*/
          d[1].id
        ))) && { value: i }
      ]));
      const ee = {};
      h & /*type*/
      4 && (ee.id = /*type*/
      d[2] + "-label"), h & /*$$scope, type, field*/
      1030 && (ee.$$scope = { dirty: h, ctx: d }), u.$set(ee);
      const te = {};
      h & /*type*/
      4 && (te.id = /*type*/
      d[2] + "-description"), h & /*$$scope, type, options*/
      1029 && (te.$$scope = { dirty: h, ctx: d }), o.$set(te);
      const ne = {};
      h & /*type*/
      4 && (ne.id = /*type*/
      d[2] + "-required"), h & /*$$scope, type, options*/
      1029 && (ne.$$scope = { dirty: h, ctx: d }), r.$set(ne);
      const ie = {};
      h & /*type*/
      4 && (ie.id = /*type*/
      d[2] + "-display"), h & /*$$scope, type, options*/
      1029 && (ie.$$scope = { dirty: h, ctx: d }), c.$set(ie), g && g.p && (!k || h & /*$$scope*/
      1024) && ke(
        g,
        A,
        d,
        /*$$scope*/
        d[10],
        k ? qe(
          A,
          /*$$scope*/
          d[10],
          h,
          null
        ) : Se(
          /*$$scope*/
          d[10]
        ),
        null
      );
    },
    i(d) {
      k || (O(u.$$.fragment, d), O(o.$$.fragment, d), O(r.$$.fragment, d), O(c.$$.fragment, d), O(g, d), k = !0);
    },
    o(d) {
      H(u.$$.fragment, d), H(o.$$.fragment, d), H(r.$$.fragment, d), H(c.$$.fragment, d), H(g, d), k = !1;
    },
    d(d) {
      d && (w(e), w(s), w(l), w(f), w(m), w(a), w(_), w(b)), j(u, d), j(o, d), j(r, d), j(c, d), g && g.d(d), F = !1, z();
    }
  };
}
function Ke(t, e, n) {
  let { $$slots: i = {}, $$scope: s } = e, { field: u } = e, { id: l } = e, { options: o } = e, { type: f } = e;
  f || console.error('ContentFieldOptionGroup: "type" attribute is required.');
  const r = () => {
    const p = m();
    if (!p)
      return;
    let k = p.className;
    p.className = k.replace(/\s*show\s*/, "");
    const F = document.getElementsByClassName("mt-draggable__area")[0];
    Ge(F), jQuery("a[aria-controls='field-options-" + u.id + "']").attr("aria-expanded", "false");
  }, m = () => document.querySelector("#field-options-" + u.id);
  function c() {
    u.label = this.value, n(1, u);
  }
  function a() {
    o.description = this.value, n(0, o);
  }
  function _() {
    o.required = this.checked, n(0, o);
  }
  function b() {
    o.display = je(this), n(0, o);
  }
  return t.$$set = (p) => {
    "field" in p && n(1, u = p.field), "id" in p && n(4, l = p.id), "options" in p && n(0, o = p.options), "type" in p && n(2, f = p.type), "$$scope" in p && n(10, s = p.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*options*/
    1 && (o.display || n(0, o.display = "default", o));
  }, [
    o,
    u,
    f,
    r,
    l,
    i,
    c,
    a,
    _,
    b,
    s
  ];
}
class We extends ae {
  constructor(e) {
    super(), re(this, e, Ke, Je, fe, { field: 1, id: 4, options: 0, type: 2 });
  }
}
function Xe(t) {
  let e, n, i, s = [
    { ref: "min_length" },
    { type: "number" },
    { name: "min_length" },
    { id: "emails-min_length" },
    { class: "form-control w-25" },
    { min: "0" }
  ], u = {};
  for (let l = 0; l < s.length; l += 1)
    u = N(u, s[l]);
  return {
    c() {
      e = y("input"), $(e, u);
    },
    m(l, o) {
      v(l, e, o), e.autofocus && e.focus(), q(
        e,
        /*$fieldsStore*/
        t[2][
          /*fieldIndex*/
          t[0]
        ].options.min_length
      ), n || (i = P(
        e,
        "input",
        /*input_input_handler*/
        t[6]
      ), n = !0);
    },
    p(l, o) {
      o & /*$fieldsStore, fieldIndex*/
      5 && W(e.value) !== /*$fieldsStore*/
      l[2][
        /*fieldIndex*/
        l[0]
      ].options.min_length && q(
        e,
        /*$fieldsStore*/
        l[2][
          /*fieldIndex*/
          l[0]
        ].options.min_length
      );
    },
    d(l) {
      l && w(e), n = !1, i();
    }
  };
}
function Ye(t) {
  let e, n, i, s = [
    { ref: "max_length" },
    { type: "number" },
    { name: "max_length" },
    { id: "emails-max_length" },
    { class: "form-control w-25" },
    { min: "1" }
  ], u = {};
  for (let l = 0; l < s.length; l += 1)
    u = N(u, s[l]);
  return {
    c() {
      e = y("input"), $(e, u);
    },
    m(l, o) {
      v(l, e, o), e.autofocus && e.focus(), q(
        e,
        /*$fieldsStore*/
        t[2][
          /*fieldIndex*/
          t[0]
        ].options.max_length
      ), n || (i = P(
        e,
        "input",
        /*input_input_handler_1*/
        t[7]
      ), n = !0);
    },
    p(l, o) {
      o & /*$fieldsStore, fieldIndex*/
      5 && W(e.value) !== /*$fieldsStore*/
      l[2][
        /*fieldIndex*/
        l[0]
      ].options.max_length && q(
        e,
        /*$fieldsStore*/
        l[2][
          /*fieldIndex*/
          l[0]
        ].options.max_length
      );
    },
    d(l) {
      l && w(e), n = !1, i();
    }
  };
}
function Ze(t) {
  let e, n, i, s = [
    { ref: "initial_value" },
    { type: "text" },
    { name: "initial_value" },
    { id: "emails-initial_value" },
    { class: "form-control" }
  ], u = {};
  for (let l = 0; l < s.length; l += 1)
    u = N(u, s[l]);
  return {
    c() {
      e = y("input"), $(e, u);
    },
    m(l, o) {
      v(l, e, o), e.autofocus && e.focus(), q(
        e,
        /*$fieldsStore*/
        t[2][
          /*fieldIndex*/
          t[0]
        ].options.initial_value
      ), n || (i = P(
        e,
        "input",
        /*input_input_handler_2*/
        t[8]
      ), n = !0);
    },
    p(l, o) {
      o & /*$fieldsStore, fieldIndex*/
      5 && e.value !== /*$fieldsStore*/
      l[2][
        /*fieldIndex*/
        l[0]
      ].options.initial_value && q(
        e,
        /*$fieldsStore*/
        l[2][
          /*fieldIndex*/
          l[0]
        ].options.initial_value
      );
    },
    d(l) {
      l && w(e), n = !1, i();
    }
  };
}
function xe(t) {
  let e, n, i, s, u, l;
  return e = new B({
    props: {
      id: "emails-min_length",
      label: window.trans("Min Length"),
      $$slots: { default: [Xe] },
      $$scope: { ctx: t }
    }
  }), i = new B({
    props: {
      id: "emails-max_length",
      label: window.trans("Max Length"),
      $$slots: { default: [Ye] },
      $$scope: { ctx: t }
    }
  }), u = new B({
    props: {
      id: "emails-initial_value",
      label: window.trans("Initial Value"),
      $$slots: { default: [Ze] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      I(e.$$.fragment), n = S(), I(i.$$.fragment), s = S(), I(u.$$.fragment);
    },
    m(o, f) {
      L(e, o, f), v(o, n, f), L(i, o, f), v(o, s, f), L(u, o, f), l = !0;
    },
    p(o, f) {
      const r = {};
      f & /*$$scope, $fieldsStore, fieldIndex*/
      131077 && (r.$$scope = { dirty: f, ctx: o }), e.$set(r);
      const m = {};
      f & /*$$scope, $fieldsStore, fieldIndex*/
      131077 && (m.$$scope = { dirty: f, ctx: o }), i.$set(m);
      const c = {};
      f & /*$$scope, $fieldsStore, fieldIndex*/
      131077 && (c.$$scope = { dirty: f, ctx: o }), u.$set(c);
    },
    i(o) {
      l || (O(e.$$.fragment, o), O(i.$$.fragment, o), O(u.$$.fragment, o), l = !0);
    },
    o(o) {
      H(e.$$.fragment, o), H(i.$$.fragment, o), H(u.$$.fragment, o), l = !1;
    },
    d(o) {
      o && (w(n), w(s)), j(e, o), j(i, o), j(u, o);
    }
  };
}
function et(t) {
  let e, n, i, s;
  function u(f) {
    t[9](f);
  }
  function l(f) {
    t[10](f);
  }
  let o = {
    type: "emails",
    id: (
      /*id*/
      t[3]
    ),
    $$slots: { default: [xe] },
    $$scope: { ctx: t }
  };
  return (
    /*$fieldsStore*/
    t[2][
      /*fieldIndex*/
      t[0]
    ] !== void 0 && (o.field = /*$fieldsStore*/
    t[2][
      /*fieldIndex*/
      t[0]
    ]), /*$fieldsStore*/
    t[2][
      /*fieldIndex*/
      t[0]
    ].options !== void 0 && (o.options = /*$fieldsStore*/
    t[2][
      /*fieldIndex*/
      t[0]
    ].options), e = new We({ props: o }), X.push(() => me(e, "field", u)), X.push(() => me(e, "options", l)), {
      c() {
        I(e.$$.fragment);
      },
      m(f, r) {
        L(e, f, r), s = !0;
      },
      p(f, [r]) {
        const m = {};
        r & /*$$scope, $fieldsStore, fieldIndex*/
        131077 && (m.$$scope = { dirty: r, ctx: f }), !n && r & /*$fieldsStore, fieldIndex*/
        5 && (n = !0, m.field = /*$fieldsStore*/
        f[2][
          /*fieldIndex*/
          f[0]
        ], pe(() => n = !1)), !i && r & /*$fieldsStore, fieldIndex*/
        5 && (i = !0, m.options = /*$fieldsStore*/
        f[2][
          /*fieldIndex*/
          f[0]
        ].options, pe(() => i = !1)), e.$set(m);
      },
      i(f) {
        s || (O(e.$$.fragment, f), s = !0);
      },
      o(f) {
        H(e.$$.fragment, f), s = !1;
      },
      d(f) {
        j(e, f);
      }
    }
  );
}
function tt(t, e, n) {
  let i, s = T, u = () => (s(), s = He(b, (g) => n(2, i = g)), b);
  t.$$.on_destroy.push(() => s());
  var l, o, f, r, m, c;
  let { config: a } = e, { fieldIndex: _ } = e, { fieldsStore: b } = e;
  u();
  let { optionsHtmlParams: p } = e;
  const k = `field-options-${i[_].id}`;
  (l = (r = i[_].options).min_length) !== null && l !== void 0 || (r.min_length = 0), (o = (m = i[_].options).max_length) !== null && o !== void 0 || (m.max_length = 255), (f = (c = i[_].options).initial_value) !== null && f !== void 0 || (c.initial_value = "");
  function F() {
    i[_].options.min_length = W(this.value), b.set(i);
  }
  function z() {
    i[_].options.max_length = W(this.value), b.set(i);
  }
  function V() {
    i[_].options.initial_value = this.value, b.set(i);
  }
  function D(g) {
    t.$$.not_equal(i[_], g) && (i[_] = g, b.set(i));
  }
  function A(g) {
    t.$$.not_equal(i[_].options, g) && (i[_].options = g, b.set(i));
  }
  return t.$$set = (g) => {
    "config" in g && n(4, a = g.config), "fieldIndex" in g && n(0, _ = g.fieldIndex), "fieldsStore" in g && u(n(1, b = g.fieldsStore)), "optionsHtmlParams" in g && n(5, p = g.optionsHtmlParams);
  }, [
    _,
    b,
    i,
    k,
    a,
    p,
    F,
    z,
    V,
    D,
    A
  ];
}
class nt extends ae {
  constructor(e) {
    super(), re(this, e, tt, et, fe, {
      config: 4,
      fieldIndex: 0,
      fieldsStore: 1,
      optionsHtmlParams: 5
    });
  }
}
const it = function(t, e) {
  const n = new nt({
    props: t,
    target: e
  });
  return {
    component: n,
    destroy: () => {
      n.$destroy();
    }
  };
};
export {
  nt as Email,
  it as mountEmailSvelte
};
