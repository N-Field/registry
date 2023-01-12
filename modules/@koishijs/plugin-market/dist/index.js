import { ref as oe, watch as pe, computed as N, defineComponent as re, resolveComponent as M, openBlock as m, createBlock as O, unref as E, isRef as le, createSlots as Zn, withCtx as x, createElementBlock as k, toDisplayString as z, createCommentVNode as U, createElementVNode as $, Fragment as G, renderList as ne, normalizeClass as Ce, createVNode as H, createTextVNode as T, withModifiers as de, onActivated as Qn, nextTick as Nn, provide as Ie, withDirectives as On, vModelText as Tn, reactive as Jn, withKeys as Le, h as Se } from "../vue.js";
import { store as R, valueMap as Ot, loading as er, socket as tr, message as ge, send as ie, createStorage as nr, router as fe, clone as rr, config as sr, global as xe, root as ur, activities as ir, icons as Y, receive as or } from "../client.js";
import { useRoute as Rt, useRouter as ar } from "../vue-router.js";
var we = { exports: {} }, Ve, Tt;
function Fe() {
  if (Tt)
    return Ve;
  Tt = 1;
  const s = "2.0.0", c = 256, l = Number.MAX_SAFE_INTEGER || 9007199254740991;
  return Ve = {
    SEMVER_SPEC_VERSION: s,
    MAX_LENGTH: c,
    MAX_SAFE_INTEGER: l,
    MAX_SAFE_COMPONENT_LENGTH: 16
  }, Ve;
}
var Be, Mt;
function ke() {
  return Mt || (Mt = 1, Be = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...c) => console.error("SEMVER", ...c) : () => {
  }), Be;
}
var qt;
function Ee() {
  return qt || (qt = 1, function(s, c) {
    const { MAX_SAFE_COMPONENT_LENGTH: l } = Fe(), i = ke();
    c = s.exports = {};
    const f = c.re = [], e = c.src = [], r = c.t = {};
    let a = 0;
    const d = (h, p, v) => {
      const y = a++;
      i(h, y, p), r[h] = y, e[y] = p, f[y] = new RegExp(p, v ? "g" : void 0);
    };
    d("NUMERICIDENTIFIER", "0|[1-9]\\d*"), d("NUMERICIDENTIFIERLOOSE", "[0-9]+"), d("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), d("MAINVERSION", `(${e[r.NUMERICIDENTIFIER]})\\.(${e[r.NUMERICIDENTIFIER]})\\.(${e[r.NUMERICIDENTIFIER]})`), d("MAINVERSIONLOOSE", `(${e[r.NUMERICIDENTIFIERLOOSE]})\\.(${e[r.NUMERICIDENTIFIERLOOSE]})\\.(${e[r.NUMERICIDENTIFIERLOOSE]})`), d("PRERELEASEIDENTIFIER", `(?:${e[r.NUMERICIDENTIFIER]}|${e[r.NONNUMERICIDENTIFIER]})`), d("PRERELEASEIDENTIFIERLOOSE", `(?:${e[r.NUMERICIDENTIFIERLOOSE]}|${e[r.NONNUMERICIDENTIFIER]})`), d("PRERELEASE", `(?:-(${e[r.PRERELEASEIDENTIFIER]}(?:\\.${e[r.PRERELEASEIDENTIFIER]})*))`), d("PRERELEASELOOSE", `(?:-?(${e[r.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${e[r.PRERELEASEIDENTIFIERLOOSE]})*))`), d("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), d("BUILD", `(?:\\+(${e[r.BUILDIDENTIFIER]}(?:\\.${e[r.BUILDIDENTIFIER]})*))`), d("FULLPLAIN", `v?${e[r.MAINVERSION]}${e[r.PRERELEASE]}?${e[r.BUILD]}?`), d("FULL", `^${e[r.FULLPLAIN]}$`), d("LOOSEPLAIN", `[v=\\s]*${e[r.MAINVERSIONLOOSE]}${e[r.PRERELEASELOOSE]}?${e[r.BUILD]}?`), d("LOOSE", `^${e[r.LOOSEPLAIN]}$`), d("GTLT", "((?:<|>)?=?)"), d("XRANGEIDENTIFIERLOOSE", `${e[r.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), d("XRANGEIDENTIFIER", `${e[r.NUMERICIDENTIFIER]}|x|X|\\*`), d("XRANGEPLAIN", `[v=\\s]*(${e[r.XRANGEIDENTIFIER]})(?:\\.(${e[r.XRANGEIDENTIFIER]})(?:\\.(${e[r.XRANGEIDENTIFIER]})(?:${e[r.PRERELEASE]})?${e[r.BUILD]}?)?)?`), d("XRANGEPLAINLOOSE", `[v=\\s]*(${e[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[r.XRANGEIDENTIFIERLOOSE]})(?:${e[r.PRERELEASELOOSE]})?${e[r.BUILD]}?)?)?`), d("XRANGE", `^${e[r.GTLT]}\\s*${e[r.XRANGEPLAIN]}$`), d("XRANGELOOSE", `^${e[r.GTLT]}\\s*${e[r.XRANGEPLAINLOOSE]}$`), d("COERCE", `(^|[^\\d])(\\d{1,${l}})(?:\\.(\\d{1,${l}}))?(?:\\.(\\d{1,${l}}))?(?:$|[^\\d])`), d("COERCERTL", e[r.COERCE], !0), d("LONETILDE", "(?:~>?)"), d("TILDETRIM", `(\\s*)${e[r.LONETILDE]}\\s+`, !0), c.tildeTrimReplace = "$1~", d("TILDE", `^${e[r.LONETILDE]}${e[r.XRANGEPLAIN]}$`), d("TILDELOOSE", `^${e[r.LONETILDE]}${e[r.XRANGEPLAINLOOSE]}$`), d("LONECARET", "(?:\\^)"), d("CARETTRIM", `(\\s*)${e[r.LONECARET]}\\s+`, !0), c.caretTrimReplace = "$1^", d("CARET", `^${e[r.LONECARET]}${e[r.XRANGEPLAIN]}$`), d("CARETLOOSE", `^${e[r.LONECARET]}${e[r.XRANGEPLAINLOOSE]}$`), d("COMPARATORLOOSE", `^${e[r.GTLT]}\\s*(${e[r.LOOSEPLAIN]})$|^$`), d("COMPARATOR", `^${e[r.GTLT]}\\s*(${e[r.FULLPLAIN]})$|^$`), d("COMPARATORTRIM", `(\\s*)${e[r.GTLT]}\\s*(${e[r.LOOSEPLAIN]}|${e[r.XRANGEPLAIN]})`, !0), c.comparatorTrimReplace = "$1$2$3", d("HYPHENRANGE", `^\\s*(${e[r.XRANGEPLAIN]})\\s+-\\s+(${e[r.XRANGEPLAIN]})\\s*$`), d("HYPHENRANGELOOSE", `^\\s*(${e[r.XRANGEPLAINLOOSE]})\\s+-\\s+(${e[r.XRANGEPLAINLOOSE]})\\s*$`), d("STAR", "(<|>)?=?\\s*\\*"), d("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), d("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }(we, we.exports)), we.exports;
}
var Ne, zt;
function De() {
  if (zt)
    return Ne;
  zt = 1;
  const s = ["includePrerelease", "loose", "rtl"];
  return Ne = (l) => l ? typeof l != "object" ? { loose: !0 } : s.filter((i) => l[i]).reduce((i, f) => (i[f] = !0, i), {}) : {}, Ne;
}
var Oe, Ht;
function Mn() {
  if (Ht)
    return Oe;
  Ht = 1;
  const s = /^[0-9]+$/, c = (i, f) => {
    const e = s.test(i), r = s.test(f);
    return e && r && (i = +i, f = +f), i === f ? 0 : e && !r ? -1 : r && !e ? 1 : i < f ? -1 : 1;
  };
  return Oe = {
    compareIdentifiers: c,
    rcompareIdentifiers: (i, f) => c(f, i)
  }, Oe;
}
var Te, Pt;
function ue() {
  if (Pt)
    return Te;
  Pt = 1;
  const s = ke(), { MAX_LENGTH: c, MAX_SAFE_INTEGER: l } = Fe(), { re: i, t: f } = Ee(), e = De(), { compareIdentifiers: r } = Mn();
  class a {
    constructor(h, p) {
      if (p = e(p), h instanceof a) {
        if (h.loose === !!p.loose && h.includePrerelease === !!p.includePrerelease)
          return h;
        h = h.version;
      } else if (typeof h != "string")
        throw new TypeError(`Invalid Version: ${h}`);
      if (h.length > c)
        throw new TypeError(
          `version is longer than ${c} characters`
        );
      s("SemVer", h, p), this.options = p, this.loose = !!p.loose, this.includePrerelease = !!p.includePrerelease;
      const v = h.trim().match(p.loose ? i[f.LOOSE] : i[f.FULL]);
      if (!v)
        throw new TypeError(`Invalid Version: ${h}`);
      if (this.raw = h, this.major = +v[1], this.minor = +v[2], this.patch = +v[3], this.major > l || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > l || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > l || this.patch < 0)
        throw new TypeError("Invalid patch version");
      v[4] ? this.prerelease = v[4].split(".").map((y) => {
        if (/^[0-9]+$/.test(y)) {
          const F = +y;
          if (F >= 0 && F < l)
            return F;
        }
        return y;
      }) : this.prerelease = [], this.build = v[5] ? v[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(h) {
      if (s("SemVer.compare", this.version, this.options, h), !(h instanceof a)) {
        if (typeof h == "string" && h === this.version)
          return 0;
        h = new a(h, this.options);
      }
      return h.version === this.version ? 0 : this.compareMain(h) || this.comparePre(h);
    }
    compareMain(h) {
      return h instanceof a || (h = new a(h, this.options)), r(this.major, h.major) || r(this.minor, h.minor) || r(this.patch, h.patch);
    }
    comparePre(h) {
      if (h instanceof a || (h = new a(h, this.options)), this.prerelease.length && !h.prerelease.length)
        return -1;
      if (!this.prerelease.length && h.prerelease.length)
        return 1;
      if (!this.prerelease.length && !h.prerelease.length)
        return 0;
      let p = 0;
      do {
        const v = this.prerelease[p], y = h.prerelease[p];
        if (s("prerelease compare", p, v, y), v === void 0 && y === void 0)
          return 0;
        if (y === void 0)
          return 1;
        if (v === void 0)
          return -1;
        if (v === y)
          continue;
        return r(v, y);
      } while (++p);
    }
    compareBuild(h) {
      h instanceof a || (h = new a(h, this.options));
      let p = 0;
      do {
        const v = this.build[p], y = h.build[p];
        if (s("prerelease compare", p, v, y), v === void 0 && y === void 0)
          return 0;
        if (y === void 0)
          return 1;
        if (v === void 0)
          return -1;
        if (v === y)
          continue;
        return r(v, y);
      } while (++p);
    }
    inc(h, p) {
      switch (h) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", p);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", p);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", p), this.inc("pre", p);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", p), this.inc("pre", p);
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre":
          if (this.prerelease.length === 0)
            this.prerelease = [0];
          else {
            let v = this.prerelease.length;
            for (; --v >= 0; )
              typeof this.prerelease[v] == "number" && (this.prerelease[v]++, v = -2);
            v === -1 && this.prerelease.push(0);
          }
          p && (r(this.prerelease[0], p) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [p, 0]) : this.prerelease = [p, 0]);
          break;
        default:
          throw new Error(`invalid increment argument: ${h}`);
      }
      return this.format(), this.raw = this.version, this;
    }
  }
  return Te = a, Te;
}
var Me, jt;
function $e() {
  if (jt)
    return Me;
  jt = 1;
  const { MAX_LENGTH: s } = Fe(), { re: c, t: l } = Ee(), i = ue(), f = De();
  return Me = (r, a) => {
    if (a = f(a), r instanceof i)
      return r;
    if (typeof r != "string" || r.length > s || !(a.loose ? c[l.LOOSE] : c[l.FULL]).test(r))
      return null;
    try {
      return new i(r, a);
    } catch {
      return null;
    }
  }, Me;
}
var qe, Gt;
function lr() {
  if (Gt)
    return qe;
  Gt = 1;
  const s = $e();
  return qe = (l, i) => {
    const f = s(l, i);
    return f ? f.version : null;
  }, qe;
}
var ze, Ut;
function cr() {
  if (Ut)
    return ze;
  Ut = 1;
  const s = $e();
  return ze = (l, i) => {
    const f = s(l.trim().replace(/^[=v]+/, ""), i);
    return f ? f.version : null;
  }, ze;
}
var He, Xt;
function hr() {
  if (Xt)
    return He;
  Xt = 1;
  const s = ue();
  return He = (l, i, f, e) => {
    typeof f == "string" && (e = f, f = void 0);
    try {
      return new s(
        l instanceof s ? l.version : l,
        f
      ).inc(i, e).version;
    } catch {
      return null;
    }
  }, He;
}
var Pe, Wt;
function ce() {
  if (Wt)
    return Pe;
  Wt = 1;
  const s = ue();
  return Pe = (l, i, f) => new s(l, f).compare(new s(i, f)), Pe;
}
var je, Yt;
function bt() {
  if (Yt)
    return je;
  Yt = 1;
  const s = ce();
  return je = (l, i, f) => s(l, i, f) === 0, je;
}
var Ge, Kt;
function fr() {
  if (Kt)
    return Ge;
  Kt = 1;
  const s = $e(), c = bt();
  return Ge = (i, f) => {
    if (c(i, f))
      return null;
    {
      const e = s(i), r = s(f), a = e.prerelease.length || r.prerelease.length, d = a ? "pre" : "", h = a ? "prerelease" : "";
      for (const p in e)
        if ((p === "major" || p === "minor" || p === "patch") && e[p] !== r[p])
          return d + p;
      return h;
    }
  }, Ge;
}
var Ue, Zt;
function dr() {
  if (Zt)
    return Ue;
  Zt = 1;
  const s = ue();
  return Ue = (l, i) => new s(l, i).major, Ue;
}
var Xe, Qt;
function pr() {
  if (Qt)
    return Xe;
  Qt = 1;
  const s = ue();
  return Xe = (l, i) => new s(l, i).minor, Xe;
}
var We, Jt;
function _r() {
  if (Jt)
    return We;
  Jt = 1;
  const s = ue();
  return We = (l, i) => new s(l, i).patch, We;
}
var Ye, en;
function vr() {
  if (en)
    return Ye;
  en = 1;
  const s = $e();
  return Ye = (l, i) => {
    const f = s(l, i);
    return f && f.prerelease.length ? f.prerelease : null;
  }, Ye;
}
var Ke, tn;
function mr() {
  if (tn)
    return Ke;
  tn = 1;
  const s = ce();
  return Ke = (l, i, f) => s(i, l, f), Ke;
}
var Ze, nn;
function gr() {
  if (nn)
    return Ze;
  nn = 1;
  const s = ce();
  return Ze = (l, i) => s(l, i, !0), Ze;
}
var Qe, rn;
function It() {
  if (rn)
    return Qe;
  rn = 1;
  const s = ue();
  return Qe = (l, i, f) => {
    const e = new s(l, f), r = new s(i, f);
    return e.compare(r) || e.compareBuild(r);
  }, Qe;
}
var Je, sn;
function Cr() {
  if (sn)
    return Je;
  sn = 1;
  const s = It();
  return Je = (l, i) => l.sort((f, e) => s(f, e, i)), Je;
}
var et, un;
function Er() {
  if (un)
    return et;
  un = 1;
  const s = It();
  return et = (l, i) => l.sort((f, e) => s(e, f, i)), et;
}
var tt, on;
function Ae() {
  if (on)
    return tt;
  on = 1;
  const s = ce();
  return tt = (l, i, f) => s(l, i, f) > 0, tt;
}
var nt, an;
function St() {
  if (an)
    return nt;
  an = 1;
  const s = ce();
  return nt = (l, i, f) => s(l, i, f) < 0, nt;
}
var rt, ln;
function qn() {
  if (ln)
    return rt;
  ln = 1;
  const s = ce();
  return rt = (l, i, f) => s(l, i, f) !== 0, rt;
}
var st, cn;
function xt() {
  if (cn)
    return st;
  cn = 1;
  const s = ce();
  return st = (l, i, f) => s(l, i, f) >= 0, st;
}
var ut, hn;
function Vt() {
  if (hn)
    return ut;
  hn = 1;
  const s = ce();
  return ut = (l, i, f) => s(l, i, f) <= 0, ut;
}
var it, fn;
function zn() {
  if (fn)
    return it;
  fn = 1;
  const s = bt(), c = qn(), l = Ae(), i = xt(), f = St(), e = Vt();
  return it = (a, d, h, p) => {
    switch (d) {
      case "===":
        return typeof a == "object" && (a = a.version), typeof h == "object" && (h = h.version), a === h;
      case "!==":
        return typeof a == "object" && (a = a.version), typeof h == "object" && (h = h.version), a !== h;
      case "":
      case "=":
      case "==":
        return s(a, h, p);
      case "!=":
        return c(a, h, p);
      case ">":
        return l(a, h, p);
      case ">=":
        return i(a, h, p);
      case "<":
        return f(a, h, p);
      case "<=":
        return e(a, h, p);
      default:
        throw new TypeError(`Invalid operator: ${d}`);
    }
  }, it;
}
var ot, dn;
function $r() {
  if (dn)
    return ot;
  dn = 1;
  const s = ue(), c = $e(), { re: l, t: i } = Ee();
  return ot = (e, r) => {
    if (e instanceof s)
      return e;
    if (typeof e == "number" && (e = String(e)), typeof e != "string")
      return null;
    r = r || {};
    let a = null;
    if (!r.rtl)
      a = e.match(l[i.COERCE]);
    else {
      let d;
      for (; (d = l[i.COERCERTL].exec(e)) && (!a || a.index + a[0].length !== e.length); )
        (!a || d.index + d[0].length !== a.index + a[0].length) && (a = d), l[i.COERCERTL].lastIndex = d.index + d[1].length + d[2].length;
      l[i.COERCERTL].lastIndex = -1;
    }
    return a === null ? null : c(`${a[2]}.${a[3] || "0"}.${a[4] || "0"}`, r);
  }, ot;
}
var at, pn;
function yr() {
  return pn || (pn = 1, at = function(s) {
    s.prototype[Symbol.iterator] = function* () {
      for (let c = this.head; c; c = c.next)
        yield c.value;
    };
  }), at;
}
var lt, _n;
function Lr() {
  if (_n)
    return lt;
  _n = 1, lt = s, s.Node = f, s.create = s;
  function s(e) {
    var r = this;
    if (r instanceof s || (r = new s()), r.tail = null, r.head = null, r.length = 0, e && typeof e.forEach == "function")
      e.forEach(function(h) {
        r.push(h);
      });
    else if (arguments.length > 0)
      for (var a = 0, d = arguments.length; a < d; a++)
        r.push(arguments[a]);
    return r;
  }
  s.prototype.removeNode = function(e) {
    if (e.list !== this)
      throw new Error("removing node which does not belong to this list");
    var r = e.next, a = e.prev;
    return r && (r.prev = a), a && (a.next = r), e === this.head && (this.head = r), e === this.tail && (this.tail = a), e.list.length--, e.next = null, e.prev = null, e.list = null, r;
  }, s.prototype.unshiftNode = function(e) {
    if (e !== this.head) {
      e.list && e.list.removeNode(e);
      var r = this.head;
      e.list = this, e.next = r, r && (r.prev = e), this.head = e, this.tail || (this.tail = e), this.length++;
    }
  }, s.prototype.pushNode = function(e) {
    if (e !== this.tail) {
      e.list && e.list.removeNode(e);
      var r = this.tail;
      e.list = this, e.prev = r, r && (r.next = e), this.tail = e, this.head || (this.head = e), this.length++;
    }
  }, s.prototype.push = function() {
    for (var e = 0, r = arguments.length; e < r; e++)
      l(this, arguments[e]);
    return this.length;
  }, s.prototype.unshift = function() {
    for (var e = 0, r = arguments.length; e < r; e++)
      i(this, arguments[e]);
    return this.length;
  }, s.prototype.pop = function() {
    if (!!this.tail) {
      var e = this.tail.value;
      return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e;
    }
  }, s.prototype.shift = function() {
    if (!!this.head) {
      var e = this.head.value;
      return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e;
    }
  }, s.prototype.forEach = function(e, r) {
    r = r || this;
    for (var a = this.head, d = 0; a !== null; d++)
      e.call(r, a.value, d, this), a = a.next;
  }, s.prototype.forEachReverse = function(e, r) {
    r = r || this;
    for (var a = this.tail, d = this.length - 1; a !== null; d--)
      e.call(r, a.value, d, this), a = a.prev;
  }, s.prototype.get = function(e) {
    for (var r = 0, a = this.head; a !== null && r < e; r++)
      a = a.next;
    if (r === e && a !== null)
      return a.value;
  }, s.prototype.getReverse = function(e) {
    for (var r = 0, a = this.tail; a !== null && r < e; r++)
      a = a.prev;
    if (r === e && a !== null)
      return a.value;
  }, s.prototype.map = function(e, r) {
    r = r || this;
    for (var a = new s(), d = this.head; d !== null; )
      a.push(e.call(r, d.value, this)), d = d.next;
    return a;
  }, s.prototype.mapReverse = function(e, r) {
    r = r || this;
    for (var a = new s(), d = this.tail; d !== null; )
      a.push(e.call(r, d.value, this)), d = d.prev;
    return a;
  }, s.prototype.reduce = function(e, r) {
    var a, d = this.head;
    if (arguments.length > 1)
      a = r;
    else if (this.head)
      d = this.head.next, a = this.head.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var h = 0; d !== null; h++)
      a = e(a, d.value, h), d = d.next;
    return a;
  }, s.prototype.reduceReverse = function(e, r) {
    var a, d = this.tail;
    if (arguments.length > 1)
      a = r;
    else if (this.tail)
      d = this.tail.prev, a = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var h = this.length - 1; d !== null; h--)
      a = e(a, d.value, h), d = d.prev;
    return a;
  }, s.prototype.toArray = function() {
    for (var e = new Array(this.length), r = 0, a = this.head; a !== null; r++)
      e[r] = a.value, a = a.next;
    return e;
  }, s.prototype.toArrayReverse = function() {
    for (var e = new Array(this.length), r = 0, a = this.tail; a !== null; r++)
      e[r] = a.value, a = a.prev;
    return e;
  }, s.prototype.slice = function(e, r) {
    r = r || this.length, r < 0 && (r += this.length), e = e || 0, e < 0 && (e += this.length);
    var a = new s();
    if (r < e || r < 0)
      return a;
    e < 0 && (e = 0), r > this.length && (r = this.length);
    for (var d = 0, h = this.head; h !== null && d < e; d++)
      h = h.next;
    for (; h !== null && d < r; d++, h = h.next)
      a.push(h.value);
    return a;
  }, s.prototype.sliceReverse = function(e, r) {
    r = r || this.length, r < 0 && (r += this.length), e = e || 0, e < 0 && (e += this.length);
    var a = new s();
    if (r < e || r < 0)
      return a;
    e < 0 && (e = 0), r > this.length && (r = this.length);
    for (var d = this.length, h = this.tail; h !== null && d > r; d--)
      h = h.prev;
    for (; h !== null && d > e; d--, h = h.prev)
      a.push(h.value);
    return a;
  }, s.prototype.splice = function(e, r, ...a) {
    e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
    for (var d = 0, h = this.head; h !== null && d < e; d++)
      h = h.next;
    for (var p = [], d = 0; h && d < r; d++)
      p.push(h.value), h = this.removeNode(h);
    h === null && (h = this.tail), h !== this.head && h !== this.tail && (h = h.prev);
    for (var d = 0; d < a.length; d++)
      h = c(this, h, a[d]);
    return p;
  }, s.prototype.reverse = function() {
    for (var e = this.head, r = this.tail, a = e; a !== null; a = a.prev) {
      var d = a.prev;
      a.prev = a.next, a.next = d;
    }
    return this.head = r, this.tail = e, this;
  };
  function c(e, r, a) {
    var d = r === e.head ? new f(a, null, r, e) : new f(a, r, r.next, e);
    return d.next === null && (e.tail = d), d.prev === null && (e.head = d), e.length++, d;
  }
  function l(e, r) {
    e.tail = new f(r, e.tail, null, e), e.head || (e.head = e.tail), e.length++;
  }
  function i(e, r) {
    e.head = new f(r, null, e.head, e), e.tail || (e.tail = e.head), e.length++;
  }
  function f(e, r, a, d) {
    if (!(this instanceof f))
      return new f(e, r, a, d);
    this.list = d, this.value = e, r ? (r.next = this, this.prev = r) : this.prev = null, a ? (a.prev = this, this.next = a) : this.next = null;
  }
  try {
    yr()(s);
  } catch {
  }
  return lt;
}
var ct, vn;
function wr() {
  if (vn)
    return ct;
  vn = 1;
  const s = Lr(), c = Symbol("max"), l = Symbol("length"), i = Symbol("lengthCalculator"), f = Symbol("allowStale"), e = Symbol("maxAge"), r = Symbol("dispose"), a = Symbol("noDisposeOnSet"), d = Symbol("lruList"), h = Symbol("cache"), p = Symbol("updateAgeOnGet"), v = () => 1;
  class y {
    constructor(t) {
      if (typeof t == "number" && (t = { max: t }), t || (t = {}), t.max && (typeof t.max != "number" || t.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[c] = t.max || 1 / 0;
      const o = t.length || v;
      if (this[i] = typeof o != "function" ? v : o, this[f] = t.stale || !1, t.maxAge && typeof t.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[e] = t.maxAge || 0, this[r] = t.dispose, this[a] = t.noDisposeOnSet || !1, this[p] = t.updateAgeOnGet || !1, this.reset();
    }
    set max(t) {
      if (typeof t != "number" || t < 0)
        throw new TypeError("max must be a non-negative number");
      this[c] = t || 1 / 0, w(this);
    }
    get max() {
      return this[c];
    }
    set allowStale(t) {
      this[f] = !!t;
    }
    get allowStale() {
      return this[f];
    }
    set maxAge(t) {
      if (typeof t != "number")
        throw new TypeError("maxAge must be a non-negative number");
      this[e] = t, w(this);
    }
    get maxAge() {
      return this[e];
    }
    set lengthCalculator(t) {
      typeof t != "function" && (t = v), t !== this[i] && (this[i] = t, this[l] = 0, this[d].forEach((o) => {
        o.length = this[i](o.value, o.key), this[l] += o.length;
      })), w(this);
    }
    get lengthCalculator() {
      return this[i];
    }
    get length() {
      return this[l];
    }
    get itemCount() {
      return this[d].length;
    }
    rforEach(t, o) {
      o = o || this;
      for (let u = this[d].tail; u !== null; ) {
        const b = u.prev;
        _(this, t, u, o), u = b;
      }
    }
    forEach(t, o) {
      o = o || this;
      for (let u = this[d].head; u !== null; ) {
        const b = u.next;
        _(this, t, u, o), u = b;
      }
    }
    keys() {
      return this[d].toArray().map((t) => t.key);
    }
    values() {
      return this[d].toArray().map((t) => t.value);
    }
    reset() {
      this[r] && this[d] && this[d].length && this[d].forEach((t) => this[r](t.key, t.value)), this[h] = /* @__PURE__ */ new Map(), this[d] = new s(), this[l] = 0;
    }
    dump() {
      return this[d].map((t) => L(this, t) ? !1 : {
        k: t.key,
        v: t.value,
        e: t.now + (t.maxAge || 0)
      }).toArray().filter((t) => t);
    }
    dumpLru() {
      return this[d];
    }
    set(t, o, u) {
      if (u = u || this[e], u && typeof u != "number")
        throw new TypeError("maxAge must be a number");
      const b = u ? Date.now() : 0, j = this[i](o, t);
      if (this[h].has(t)) {
        if (j > this[c])
          return C(this, this[h].get(t)), !1;
        const A = this[h].get(t).value;
        return this[r] && (this[a] || this[r](t, A.value)), A.now = b, A.maxAge = u, A.value = o, this[l] += j - A.length, A.length = j, this.get(t), w(this), !0;
      }
      const Z = new g(t, o, j, b, u);
      return Z.length > this[c] ? (this[r] && this[r](t, o), !1) : (this[l] += Z.length, this[d].unshift(Z), this[h].set(t, this[d].head), w(this), !0);
    }
    has(t) {
      if (!this[h].has(t))
        return !1;
      const o = this[h].get(t).value;
      return !L(this, o);
    }
    get(t) {
      return F(this, t, !0);
    }
    peek(t) {
      return F(this, t, !1);
    }
    pop() {
      const t = this[d].tail;
      return t ? (C(this, t), t.value) : null;
    }
    del(t) {
      C(this, this[h].get(t));
    }
    load(t) {
      this.reset();
      const o = Date.now();
      for (let u = t.length - 1; u >= 0; u--) {
        const b = t[u], j = b.e || 0;
        if (j === 0)
          this.set(b.k, b.v);
        else {
          const Z = j - o;
          Z > 0 && this.set(b.k, b.v, Z);
        }
      }
    }
    prune() {
      this[h].forEach((t, o) => F(this, o, !1));
    }
  }
  const F = (n, t, o) => {
    const u = n[h].get(t);
    if (u) {
      const b = u.value;
      if (L(n, b)) {
        if (C(n, u), !n[f])
          return;
      } else
        o && (n[p] && (u.value.now = Date.now()), n[d].unshiftNode(u));
      return b.value;
    }
  }, L = (n, t) => {
    if (!t || !t.maxAge && !n[e])
      return !1;
    const o = Date.now() - t.now;
    return t.maxAge ? o > t.maxAge : n[e] && o > n[e];
  }, w = (n) => {
    if (n[l] > n[c])
      for (let t = n[d].tail; n[l] > n[c] && t !== null; ) {
        const o = t.prev;
        C(n, t), t = o;
      }
  }, C = (n, t) => {
    if (t) {
      const o = t.value;
      n[r] && n[r](o.key, o.value), n[l] -= o.length, n[h].delete(o.key), n[d].removeNode(t);
    }
  };
  class g {
    constructor(t, o, u, b, j) {
      this.key = t, this.value = o, this.length = u, this.now = b, this.maxAge = j || 0;
    }
  }
  const _ = (n, t, o, u) => {
    let b = o.value;
    L(n, b) && (C(n, o), n[f] || (b = void 0)), b && t.call(u, b.value, b.key, n);
  };
  return ct = y, ct;
}
var ht, mn;
function he() {
  if (mn)
    return ht;
  mn = 1;
  class s {
    constructor(D, I) {
      if (I = i(I), D instanceof s)
        return D.loose === !!I.loose && D.includePrerelease === !!I.includePrerelease ? D : new s(D.raw, I);
      if (D instanceof f)
        return this.raw = D.value, this.set = [[D]], this.format(), this;
      if (this.options = I, this.loose = !!I.loose, this.includePrerelease = !!I.includePrerelease, this.raw = D, this.set = D.split("||").map((S) => this.parseRange(S.trim())).filter((S) => S.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${D}`);
      if (this.set.length > 1) {
        const S = this.set[0];
        if (this.set = this.set.filter((B) => !y(B[0])), this.set.length === 0)
          this.set = [S];
        else if (this.set.length > 1) {
          for (const B of this.set)
            if (B.length === 1 && F(B[0])) {
              this.set = [B];
              break;
            }
        }
      }
      this.format();
    }
    format() {
      return this.range = this.set.map((D) => D.join(" ").trim()).join("||").trim(), this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(D) {
      D = D.trim();
      const S = `parseRange:${Object.keys(this.options).join(",")}:${D}`, B = l.get(S);
      if (B)
        return B;
      const V = this.options.loose, q = V ? a[d.HYPHENRANGELOOSE] : a[d.HYPHENRANGE];
      D = D.replace(q, Z(this.options.includePrerelease)), e("hyphen replace", D), D = D.replace(a[d.COMPARATORTRIM], h), e("comparator trim", D), D = D.replace(a[d.TILDETRIM], p), D = D.replace(a[d.CARETTRIM], v), D = D.split(/\s+/).join(" ");
      let X = D.split(" ").map((J) => w(J, this.options)).join(" ").split(/\s+/).map((J) => j(J, this.options));
      V && (X = X.filter((J) => (e("loose invalid filter", J, this.options), !!J.match(a[d.COMPARATORLOOSE])))), e("range list", X);
      const P = /* @__PURE__ */ new Map(), K = X.map((J) => new f(J, this.options));
      for (const J of K) {
        if (y(J))
          return [J];
        P.set(J.value, J);
      }
      P.size > 1 && P.has("") && P.delete("");
      const se = [...P.values()];
      return l.set(S, se), se;
    }
    intersects(D, I) {
      if (!(D instanceof s))
        throw new TypeError("a Range is required");
      return this.set.some((S) => L(S, I) && D.set.some((B) => L(B, I) && S.every((V) => B.every((q) => V.intersects(q, I)))));
    }
    test(D) {
      if (!D)
        return !1;
      if (typeof D == "string")
        try {
          D = new r(D, this.options);
        } catch {
          return !1;
        }
      for (let I = 0; I < this.set.length; I++)
        if (ee(this.set[I], D, this.options))
          return !0;
      return !1;
    }
  }
  ht = s;
  const c = wr(), l = new c({ max: 1e3 }), i = De(), f = Re(), e = ke(), r = ue(), {
    re: a,
    t: d,
    comparatorTrimReplace: h,
    tildeTrimReplace: p,
    caretTrimReplace: v
  } = Ee(), y = (A) => A.value === "<0.0.0-0", F = (A) => A.value === "", L = (A, D) => {
    let I = !0;
    const S = A.slice();
    let B = S.pop();
    for (; I && S.length; )
      I = S.every((V) => B.intersects(V, D)), B = S.pop();
    return I;
  }, w = (A, D) => (e("comp", A, D), A = n(A, D), e("caret", A), A = g(A, D), e("tildes", A), A = o(A, D), e("xrange", A), A = b(A, D), e("stars", A), A), C = (A) => !A || A.toLowerCase() === "x" || A === "*", g = (A, D) => A.trim().split(/\s+/).map((I) => _(I, D)).join(" "), _ = (A, D) => {
    const I = D.loose ? a[d.TILDELOOSE] : a[d.TILDE];
    return A.replace(I, (S, B, V, q, X) => {
      e("tilde", A, S, B, V, q, X);
      let P;
      return C(B) ? P = "" : C(V) ? P = `>=${B}.0.0 <${+B + 1}.0.0-0` : C(q) ? P = `>=${B}.${V}.0 <${B}.${+V + 1}.0-0` : X ? (e("replaceTilde pr", X), P = `>=${B}.${V}.${q}-${X} <${B}.${+V + 1}.0-0`) : P = `>=${B}.${V}.${q} <${B}.${+V + 1}.0-0`, e("tilde return", P), P;
    });
  }, n = (A, D) => A.trim().split(/\s+/).map((I) => t(I, D)).join(" "), t = (A, D) => {
    e("caret", A, D);
    const I = D.loose ? a[d.CARETLOOSE] : a[d.CARET], S = D.includePrerelease ? "-0" : "";
    return A.replace(I, (B, V, q, X, P) => {
      e("caret", A, B, V, q, X, P);
      let K;
      return C(V) ? K = "" : C(q) ? K = `>=${V}.0.0${S} <${+V + 1}.0.0-0` : C(X) ? V === "0" ? K = `>=${V}.${q}.0${S} <${V}.${+q + 1}.0-0` : K = `>=${V}.${q}.0${S} <${+V + 1}.0.0-0` : P ? (e("replaceCaret pr", P), V === "0" ? q === "0" ? K = `>=${V}.${q}.${X}-${P} <${V}.${q}.${+X + 1}-0` : K = `>=${V}.${q}.${X}-${P} <${V}.${+q + 1}.0-0` : K = `>=${V}.${q}.${X}-${P} <${+V + 1}.0.0-0`) : (e("no pr"), V === "0" ? q === "0" ? K = `>=${V}.${q}.${X}${S} <${V}.${q}.${+X + 1}-0` : K = `>=${V}.${q}.${X}${S} <${V}.${+q + 1}.0-0` : K = `>=${V}.${q}.${X} <${+V + 1}.0.0-0`), e("caret return", K), K;
    });
  }, o = (A, D) => (e("replaceXRanges", A, D), A.split(/\s+/).map((I) => u(I, D)).join(" ")), u = (A, D) => {
    A = A.trim();
    const I = D.loose ? a[d.XRANGELOOSE] : a[d.XRANGE];
    return A.replace(I, (S, B, V, q, X, P) => {
      e("xRange", A, S, B, V, q, X, P);
      const K = C(V), se = K || C(q), J = se || C(X), _e = J;
      return B === "=" && _e && (B = ""), P = D.includePrerelease ? "-0" : "", K ? B === ">" || B === "<" ? S = "<0.0.0-0" : S = "*" : B && _e ? (se && (q = 0), X = 0, B === ">" ? (B = ">=", se ? (V = +V + 1, q = 0, X = 0) : (q = +q + 1, X = 0)) : B === "<=" && (B = "<", se ? V = +V + 1 : q = +q + 1), B === "<" && (P = "-0"), S = `${B + V}.${q}.${X}${P}`) : se ? S = `>=${V}.0.0${P} <${+V + 1}.0.0-0` : J && (S = `>=${V}.${q}.0${P} <${V}.${+q + 1}.0-0`), e("xRange return", S), S;
    });
  }, b = (A, D) => (e("replaceStars", A, D), A.trim().replace(a[d.STAR], "")), j = (A, D) => (e("replaceGTE0", A, D), A.trim().replace(a[D.includePrerelease ? d.GTE0PRE : d.GTE0], "")), Z = (A) => (D, I, S, B, V, q, X, P, K, se, J, _e, Nt) => (C(S) ? I = "" : C(B) ? I = `>=${S}.0.0${A ? "-0" : ""}` : C(V) ? I = `>=${S}.${B}.0${A ? "-0" : ""}` : q ? I = `>=${I}` : I = `>=${I}${A ? "-0" : ""}`, C(K) ? P = "" : C(se) ? P = `<${+K + 1}.0.0-0` : C(J) ? P = `<${K}.${+se + 1}.0-0` : _e ? P = `<=${K}.${se}.${J}-${_e}` : A ? P = `<${K}.${se}.${+J + 1}-0` : P = `<=${P}`, `${I} ${P}`.trim()), ee = (A, D, I) => {
    for (let S = 0; S < A.length; S++)
      if (!A[S].test(D))
        return !1;
    if (D.prerelease.length && !I.includePrerelease) {
      for (let S = 0; S < A.length; S++)
        if (e(A[S].semver), A[S].semver !== f.ANY && A[S].semver.prerelease.length > 0) {
          const B = A[S].semver;
          if (B.major === D.major && B.minor === D.minor && B.patch === D.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return ht;
}
var ft, gn;
function Re() {
  if (gn)
    return ft;
  gn = 1;
  const s = Symbol("SemVer ANY");
  class c {
    static get ANY() {
      return s;
    }
    constructor(p, v) {
      if (v = l(v), p instanceof c) {
        if (p.loose === !!v.loose)
          return p;
        p = p.value;
      }
      r("comparator", p, v), this.options = v, this.loose = !!v.loose, this.parse(p), this.semver === s ? this.value = "" : this.value = this.operator + this.semver.version, r("comp", this);
    }
    parse(p) {
      const v = this.options.loose ? i[f.COMPARATORLOOSE] : i[f.COMPARATOR], y = p.match(v);
      if (!y)
        throw new TypeError(`Invalid comparator: ${p}`);
      this.operator = y[1] !== void 0 ? y[1] : "", this.operator === "=" && (this.operator = ""), y[2] ? this.semver = new a(y[2], this.options.loose) : this.semver = s;
    }
    toString() {
      return this.value;
    }
    test(p) {
      if (r("Comparator.test", p, this.options.loose), this.semver === s || p === s)
        return !0;
      if (typeof p == "string")
        try {
          p = new a(p, this.options);
        } catch {
          return !1;
        }
      return e(p, this.operator, this.semver, this.options);
    }
    intersects(p, v) {
      if (!(p instanceof c))
        throw new TypeError("a Comparator is required");
      if ((!v || typeof v != "object") && (v = {
        loose: !!v,
        includePrerelease: !1
      }), this.operator === "")
        return this.value === "" ? !0 : new d(p.value, v).test(this.value);
      if (p.operator === "")
        return p.value === "" ? !0 : new d(this.value, v).test(p.semver);
      const y = (this.operator === ">=" || this.operator === ">") && (p.operator === ">=" || p.operator === ">"), F = (this.operator === "<=" || this.operator === "<") && (p.operator === "<=" || p.operator === "<"), L = this.semver.version === p.semver.version, w = (this.operator === ">=" || this.operator === "<=") && (p.operator === ">=" || p.operator === "<="), C = e(this.semver, "<", p.semver, v) && (this.operator === ">=" || this.operator === ">") && (p.operator === "<=" || p.operator === "<"), g = e(this.semver, ">", p.semver, v) && (this.operator === "<=" || this.operator === "<") && (p.operator === ">=" || p.operator === ">");
      return y || F || L && w || C || g;
    }
  }
  ft = c;
  const l = De(), { re: i, t: f } = Ee(), e = zn(), r = ke(), a = ue(), d = he();
  return ft;
}
var dt, Cn;
function be() {
  if (Cn)
    return dt;
  Cn = 1;
  const s = he();
  return dt = (l, i, f) => {
    try {
      i = new s(i, f);
    } catch {
      return !1;
    }
    return i.test(l);
  }, dt;
}
var pt, En;
function Fr() {
  if (En)
    return pt;
  En = 1;
  const s = he();
  return pt = (l, i) => new s(l, i).set.map((f) => f.map((e) => e.value).join(" ").trim().split(" ")), pt;
}
var _t, $n;
function kr() {
  if ($n)
    return _t;
  $n = 1;
  const s = ue(), c = he();
  return _t = (i, f, e) => {
    let r = null, a = null, d = null;
    try {
      d = new c(f, e);
    } catch {
      return null;
    }
    return i.forEach((h) => {
      d.test(h) && (!r || a.compare(h) === -1) && (r = h, a = new s(r, e));
    }), r;
  }, _t;
}
var vt, yn;
function Dr() {
  if (yn)
    return vt;
  yn = 1;
  const s = ue(), c = he();
  return vt = (i, f, e) => {
    let r = null, a = null, d = null;
    try {
      d = new c(f, e);
    } catch {
      return null;
    }
    return i.forEach((h) => {
      d.test(h) && (!r || a.compare(h) === 1) && (r = h, a = new s(r, e));
    }), r;
  }, vt;
}
var mt, Ln;
function Ar() {
  if (Ln)
    return mt;
  Ln = 1;
  const s = ue(), c = he(), l = Ae();
  return mt = (f, e) => {
    f = new c(f, e);
    let r = new s("0.0.0");
    if (f.test(r) || (r = new s("0.0.0-0"), f.test(r)))
      return r;
    r = null;
    for (let a = 0; a < f.set.length; ++a) {
      const d = f.set[a];
      let h = null;
      d.forEach((p) => {
        const v = new s(p.semver.version);
        switch (p.operator) {
          case ">":
            v.prerelease.length === 0 ? v.patch++ : v.prerelease.push(0), v.raw = v.format();
          case "":
          case ">=":
            (!h || l(v, h)) && (h = v);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw new Error(`Unexpected operation: ${p.operator}`);
        }
      }), h && (!r || l(r, h)) && (r = h);
    }
    return r && f.test(r) ? r : null;
  }, mt;
}
var gt, wn;
function Rr() {
  if (wn)
    return gt;
  wn = 1;
  const s = he();
  return gt = (l, i) => {
    try {
      return new s(l, i).range || "*";
    } catch {
      return null;
    }
  }, gt;
}
var Ct, Fn;
function Bt() {
  if (Fn)
    return Ct;
  Fn = 1;
  const s = ue(), c = Re(), { ANY: l } = c, i = he(), f = be(), e = Ae(), r = St(), a = Vt(), d = xt();
  return Ct = (p, v, y, F) => {
    p = new s(p, F), v = new i(v, F);
    let L, w, C, g, _;
    switch (y) {
      case ">":
        L = e, w = a, C = r, g = ">", _ = ">=";
        break;
      case "<":
        L = r, w = d, C = e, g = "<", _ = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (f(p, v, F))
      return !1;
    for (let n = 0; n < v.set.length; ++n) {
      const t = v.set[n];
      let o = null, u = null;
      if (t.forEach((b) => {
        b.semver === l && (b = new c(">=0.0.0")), o = o || b, u = u || b, L(b.semver, o.semver, F) ? o = b : C(b.semver, u.semver, F) && (u = b);
      }), o.operator === g || o.operator === _ || (!u.operator || u.operator === g) && w(p, u.semver))
        return !1;
      if (u.operator === _ && C(p, u.semver))
        return !1;
    }
    return !0;
  }, Ct;
}
var Et, kn;
function br() {
  if (kn)
    return Et;
  kn = 1;
  const s = Bt();
  return Et = (l, i, f) => s(l, i, ">", f), Et;
}
var $t, Dn;
function Ir() {
  if (Dn)
    return $t;
  Dn = 1;
  const s = Bt();
  return $t = (l, i, f) => s(l, i, "<", f), $t;
}
var yt, An;
function Sr() {
  if (An)
    return yt;
  An = 1;
  const s = he();
  return yt = (l, i, f) => (l = new s(l, f), i = new s(i, f), l.intersects(i)), yt;
}
var Lt, Rn;
function xr() {
  if (Rn)
    return Lt;
  Rn = 1;
  const s = be(), c = ce();
  return Lt = (l, i, f) => {
    const e = [];
    let r = null, a = null;
    const d = l.sort((y, F) => c(y, F, f));
    for (const y of d)
      s(y, i, f) ? (a = y, r || (r = y)) : (a && e.push([r, a]), a = null, r = null);
    r && e.push([r, null]);
    const h = [];
    for (const [y, F] of e)
      y === F ? h.push(y) : !F && y === d[0] ? h.push("*") : F ? y === d[0] ? h.push(`<=${F}`) : h.push(`${y} - ${F}`) : h.push(`>=${y}`);
    const p = h.join(" || "), v = typeof i.raw == "string" ? i.raw : String(i);
    return p.length < v.length ? p : i;
  }, Lt;
}
var wt, bn;
function Vr() {
  if (bn)
    return wt;
  bn = 1;
  const s = he(), c = Re(), { ANY: l } = c, i = be(), f = ce(), e = (h, p, v = {}) => {
    if (h === p)
      return !0;
    h = new s(h, v), p = new s(p, v);
    let y = !1;
    e:
      for (const F of h.set) {
        for (const L of p.set) {
          const w = r(F, L, v);
          if (y = y || w !== null, w)
            continue e;
        }
        if (y)
          return !1;
      }
    return !0;
  }, r = (h, p, v) => {
    if (h === p)
      return !0;
    if (h.length === 1 && h[0].semver === l) {
      if (p.length === 1 && p[0].semver === l)
        return !0;
      v.includePrerelease ? h = [new c(">=0.0.0-0")] : h = [new c(">=0.0.0")];
    }
    if (p.length === 1 && p[0].semver === l) {
      if (v.includePrerelease)
        return !0;
      p = [new c(">=0.0.0")];
    }
    const y = /* @__PURE__ */ new Set();
    let F, L;
    for (const u of h)
      u.operator === ">" || u.operator === ">=" ? F = a(F, u, v) : u.operator === "<" || u.operator === "<=" ? L = d(L, u, v) : y.add(u.semver);
    if (y.size > 1)
      return null;
    let w;
    if (F && L) {
      if (w = f(F.semver, L.semver, v), w > 0)
        return null;
      if (w === 0 && (F.operator !== ">=" || L.operator !== "<="))
        return null;
    }
    for (const u of y) {
      if (F && !i(u, String(F), v) || L && !i(u, String(L), v))
        return null;
      for (const b of p)
        if (!i(u, String(b), v))
          return !1;
      return !0;
    }
    let C, g, _, n, t = L && !v.includePrerelease && L.semver.prerelease.length ? L.semver : !1, o = F && !v.includePrerelease && F.semver.prerelease.length ? F.semver : !1;
    t && t.prerelease.length === 1 && L.operator === "<" && t.prerelease[0] === 0 && (t = !1);
    for (const u of p) {
      if (n = n || u.operator === ">" || u.operator === ">=", _ = _ || u.operator === "<" || u.operator === "<=", F) {
        if (o && u.semver.prerelease && u.semver.prerelease.length && u.semver.major === o.major && u.semver.minor === o.minor && u.semver.patch === o.patch && (o = !1), u.operator === ">" || u.operator === ">=") {
          if (C = a(F, u, v), C === u && C !== F)
            return !1;
        } else if (F.operator === ">=" && !i(F.semver, String(u), v))
          return !1;
      }
      if (L) {
        if (t && u.semver.prerelease && u.semver.prerelease.length && u.semver.major === t.major && u.semver.minor === t.minor && u.semver.patch === t.patch && (t = !1), u.operator === "<" || u.operator === "<=") {
          if (g = d(L, u, v), g === u && g !== L)
            return !1;
        } else if (L.operator === "<=" && !i(L.semver, String(u), v))
          return !1;
      }
      if (!u.operator && (L || F) && w !== 0)
        return !1;
    }
    return !(F && _ && !L && w !== 0 || L && n && !F && w !== 0 || o || t);
  }, a = (h, p, v) => {
    if (!h)
      return p;
    const y = f(h.semver, p.semver, v);
    return y > 0 ? h : y < 0 || p.operator === ">" && h.operator === ">=" ? p : h;
  }, d = (h, p, v) => {
    if (!h)
      return p;
    const y = f(h.semver, p.semver, v);
    return y < 0 ? h : y > 0 || p.operator === "<" && h.operator === "<=" ? p : h;
  };
  return wt = e, wt;
}
var Ft, In;
function Br() {
  if (In)
    return Ft;
  In = 1;
  const s = Ee(), c = Fe(), l = ue(), i = Mn(), f = $e(), e = lr(), r = cr(), a = hr(), d = fr(), h = dr(), p = pr(), v = _r(), y = vr(), F = ce(), L = mr(), w = gr(), C = It(), g = Cr(), _ = Er(), n = Ae(), t = St(), o = bt(), u = qn(), b = xt(), j = Vt(), Z = zn(), ee = $r(), A = Re(), D = he(), I = be(), S = Fr(), B = kr(), V = Dr(), q = Ar(), X = Rr(), P = Bt(), K = br(), se = Ir(), J = Sr(), _e = xr(), Nt = Vr();
  return Ft = {
    parse: f,
    valid: e,
    clean: r,
    inc: a,
    diff: d,
    major: h,
    minor: p,
    patch: v,
    prerelease: y,
    compare: F,
    rcompare: L,
    compareLoose: w,
    compareBuild: C,
    sort: g,
    rsort: _,
    gt: n,
    lt: t,
    eq: o,
    neq: u,
    gte: b,
    lte: j,
    cmp: Z,
    coerce: ee,
    Comparator: A,
    Range: D,
    satisfies: I,
    toComparators: S,
    maxSatisfying: B,
    minSatisfying: V,
    minVersion: q,
    validRange: X,
    outside: P,
    gtr: K,
    ltr: se,
    intersects: J,
    simplifyRange: _e,
    subset: Nt,
    SemVer: l,
    re: s.re,
    src: s.src,
    tokens: s.t,
    SEMVER_SPEC_VERSION: c.SEMVER_SPEC_VERSION,
    compareIdentifiers: i.compareIdentifiers,
    rcompareIdentifiers: i.rcompareIdentifiers
  }, Ft;
}
var Dt = Br();
function Hn(s) {
  var l;
  const { versions: c = {} } = ((l = R.market) == null ? void 0 : l.data[s]) || R.dependencies[s];
  return Ot(c, (i) => {
    const f = Ot({ ...i.peerDependencies }, (r, a) => {
      var p, v, y, F;
      const d = ((p = R.dependencies[a]) == null ? void 0 : p.resolved) || ((v = R.packages[a]) == null ? void 0 : v.version), h = d ? Dt.satisfies(d, r, { includePrerelease: !0 }) ? "success" : "danger" : (F = (y = i.peerDependenciesMeta) == null ? void 0 : y[a]) != null && F.optional ? "primary" : "warning";
      return { request: r, resolved: d, result: h };
    });
    let e = "success";
    for (const r of Object.values(f)) {
      if (r.result === "danger") {
        e = "danger";
        break;
      }
      r.result === "warning" && (e = "warning");
    }
    return { peers: f, result: e };
  });
}
const ve = oe(!1);
async function Pn(s, c) {
  const l = er({
    text: "\u6B63\u5728\u66F4\u65B0\u4F9D\u8D56\u2026\u2026"
  }), i = pe(tr, () => {
    ge.success("\u5B89\u88C5\u6210\u529F\uFF01"), i(), l.close();
  });
  try {
    ve.value = !1, await ie("market/install", s) ? ge.error("\u5B89\u88C5\u5931\u8D25\uFF01") : (await (c == null ? void 0 : c()), ge.success("\u5B89\u88C5\u6210\u529F\uFF01"));
  } catch {
    ge.error("\u5B89\u88C5\u8D85\u65F6\uFF01");
  } finally {
    i(), l.close();
  }
}
const te = nr("manager", 2, () => ({
  prefix: "^",
  override: {},
  showInstalled: !0,
  hideWorkspace: !0
}));
N(() => Object.values(te.override).filter((s) => s !== void 0).length);
pe(() => R.dependencies, (s) => {
  var c;
  if (!!s)
    for (const l in te.override)
      te.override[l] ? ((c = s[l]) == null ? void 0 : c.request) === te.override[l] && delete te.override[l] : s[l] || delete te.override[l];
}, { immediate: !0 });
const Q = oe(""), me = oe(!1), jn = (s) => {
  var c;
  return {
    keywords: [],
    peerDependencies: {},
    ...R.market.data[s],
    ...(c = R.packages) == null ? void 0 : c[s]
  };
}, Gn = N(() => ({
  icon: "refresh",
  label: "\u5237\u65B0",
  type: !R.market || R.market.progress < R.market.total ? "spin disabled" : "",
  action: () => ie("market/refresh")
})), Nr = ["id"], Or = {
  key: 0,
  class: "danger"
}, Tr = {
  key: 1,
  class: "warning"
}, Mr = /* @__PURE__ */ $("tr", null, [
  /* @__PURE__ */ $("td", null, "\u4F9D\u8D56\u540D\u79F0"),
  /* @__PURE__ */ $("td", null, "\u7248\u672C\u533A\u95F4"),
  /* @__PURE__ */ $("td", null, "\u5F53\u524D\u7248\u672C"),
  /* @__PURE__ */ $("td", null, "\u53EF\u7528\u6027")
], -1), qr = { class: "name" }, zr = { key: 0 }, Hr = { key: 1 }, Pr = { key: 2 }, jr = { key: 3 }, Gr = { key: 3 }, Ur = ["onClick"], Xr = { key: 0 }, Wr = { key: 4 }, Yr = /* @__PURE__ */ $("div", { class: "left" }, null, -1), Kr = { class: "right" }, Zr = /* @__PURE__ */ re({
  __name: "install",
  setup(s) {
    function c(_) {
      const n = L.value;
      Pn({ [Q.value]: _ }, async () => {
        if (!_ || !n || C(n).length)
          return;
        const t = n + ":" + Math.random().toString(36).slice(2, 8);
        await ie("manager/unload", t, {}), await fe.push("/plugins/" + t);
      });
    }
    const l = oe(), i = N({
      get() {
        var _;
        return ((_ = R.dependencies[Q.value]) == null ? void 0 : _.request) === l.value ? l.value + " (\u5F53\u524D)" : l.value;
      },
      set(_) {
        l.value = _;
      }
    }), f = N(() => {
      var _;
      return l.value === ((_ = R.dependencies[Q.value]) == null ? void 0 : _.request);
    }), e = N(() => {
      var _;
      return (_ = R.dependencies[Q.value]) == null ? void 0 : _.resolved;
    }), r = N(() => {
      var _;
      return (_ = R.packages) == null ? void 0 : _[Q.value];
    }), a = N(() => {
      var _, n;
      return ((_ = R.dependencies[Q.value]) == null ? void 0 : _.workspace) || ((n = r.value) == null ? void 0 : n.workspace);
    }), d = N(() => {
      if (!(!Q.value || a.value))
        return Hn(Q.value);
    }), h = N(() => {
      var _, n;
      if (!(a.value || !((n = (_ = R.market) == null ? void 0 : _.data[Q.value]) != null && n.insecure)))
        return "\u8B66\u544A\uFF1A\u4ECE\u6B64\u63D2\u4EF6\u7684\u6700\u65B0\u7248\u672C\u4E2D\u68C0\u6D4B\u51FA\u5B89\u5168\u6027\u95EE\u9898\u3002\u5B89\u88C5\u6216\u5347\u7EA7\u6B64\u63D2\u4EF6\u53EF\u80FD\u5BFC\u81F4\u4E25\u91CD\u95EE\u9898\u3002";
    }), p = N(() => {
      if (!(!l.value || !e.value || a.value))
        try {
          const _ = Dt.parse(e.value), n = Dt.parse(l.value);
          if (_.major !== n.major || !_.major && _.minor !== n.minor)
            return "\u63D0\u793A\uFF1A\u4F60\u6B63\u5728\u66F4\u6539\u4F9D\u8D56\u7684\u4E3B\u7248\u672C\u53F7\u3002\u8FD9\u53EF\u80FD\u5BFC\u81F4\u4E0D\u517C\u5BB9\u7684\u884C\u4E3A\u3002";
        } catch {
        }
    }), v = N(() => {
      if (!l.value)
        return;
      const { result: _ } = d.value[l.value];
      return _ === "danger" || h.value ? "danger" : _ === "warning" || p.value ? "warning" : _;
    });
    pe(() => Q.value, (_) => {
      var n;
      ve.value = !!_, _ && (l.value = te.override[Q.value] || ((n = R.dependencies[Q.value]) == null ? void 0 : n.request) || R.market.data[_].version);
    }, { immediate: !0 });
    function* y(_, n, t) {
      for (let o in n) {
        const u = n[o], b = !o.startsWith("~");
        b || (o = o.slice(1));
        const j = o.split(":")[0];
        j === _ && (yield [t + o, b]), j === "group" && (yield* y(_, u, t + o + "/"));
      }
    }
    const F = /(koishi-|^@koishijs\/)plugin-/, L = N(() => F.test(Q.value) ? Q.value.replace(F, "") : ""), w = N(() => C(L.value));
    function C(_) {
      return _ ? [...y(_, R.config.plugins, "")] : [];
    }
    function g(_) {
      ve.value = !1, _ === !0 && (_ = L.value + ":" + Math.random().toString(36).slice(2, 8), ie("manager/unload", _, {})), fe.push("/plugins/" + _);
    }
    return (_, n) => {
      const t = M("el-option"), o = M("el-select"), u = M("k-icon"), b = M("el-scrollbar"), j = M("el-button"), Z = M("el-dialog");
      return m(), O(Z, {
        modelValue: E(ve),
        "onUpdate:modelValue": n[8] || (n[8] = (ee) => le(ve) ? ve.value = ee : null),
        class: "install-panel",
        onClosed: n[9] || (n[9] = (ee) => Q.value = "")
      }, Zn({
        default: x(() => {
          var ee, A;
          return [
            E(h) ? (m(), k("p", Or, z(E(h)), 1)) : U("", !0),
            E(p) ? (m(), k("p", Tr, z(E(p)), 1)) : U("", !0),
            E(Q) && !E(a) && Object.keys(E(d)[l.value].peers).length ? (m(), O(b, { key: 2 }, {
              default: x(() => [
                $("table", null, [
                  Mr,
                  (m(!0), k(G, null, ne(E(d)[l.value].peers, ({ request: D, resolved: I, result: S }, B) => (m(), k("tr", { key: B }, [
                    $("td", qr, z(B), 1),
                    $("td", null, z(D), 1),
                    $("td", null, z(I), 1),
                    $("td", {
                      class: Ce(["theme-color", S])
                    }, [
                      S === "primary" ? (m(), k("span", zr, [
                        H(u, { name: "info-full" }),
                        T("\u53EF\u9009")
                      ])) : S === "warning" ? (m(), k("span", Hr, [
                        H(u, { name: "exclamation-full" }),
                        T("\u672A\u4E0B\u8F7D")
                      ])) : S === "success" ? (m(), k("span", Pr, [
                        H(u, { name: "check-full" }),
                        T("\u5DF2\u4E0B\u8F7D")
                      ])) : (m(), k("span", jr, [
                        H(u, { name: "times-full" }),
                        T("\u4E0D\u517C\u5BB9")
                      ]))
                    ], 2)
                  ]))), 128))
                ])
              ]),
              _: 1
            })) : U("", !0),
            E(r) && E(w).length ? (m(), k("div", Gr, [
              T(" \u70B9\u51FB\u4EE5\u524D\u5F80\u914D\u7F6E\u9875\u9762\uFF1A "),
              $("ul", null, [
                (m(!0), k(G, null, ne(E(w), ([D, I]) => (m(), k("li", { key: D }, [
                  $("span", {
                    class: "link",
                    onClick: de((S) => g(D), ["stop"])
                  }, z(D), 9, Ur),
                  T(" (" + z(I ? "\u8FD0\u884C\u4E2D" : "\u95F2\u7F6E") + ") ", 1)
                ]))), 128)),
                (A = (ee = E(R).packages) == null ? void 0 : ee[E(Q)]) != null && A.id ? U("", !0) : (m(), k("li", Xr, [
                  $("span", {
                    class: "link",
                    onClick: n[1] || (n[1] = de((D) => g(!0), ["stop"]))
                  }, "\u6DFB\u52A0\u65B0\u914D\u7F6E")
                ]))
              ])
            ])) : E(r) ? (m(), k("div", Wr, [
              $("span", {
                class: "link",
                onClick: n[2] || (n[2] = de((D) => g(!0), ["stop"]))
              }, "\u4F60\u5C1A\u672A\u914D\u7F6E\u6B64\u63D2\u4EF6\uFF0C\u70B9\u51FB\u7ACB\u5373\u914D\u7F6E\u3002")
            ])) : U("", !0)
          ];
        }),
        _: 2
      }, [
        E(Q) ? {
          name: "header",
          fn: x(({ titleId: ee, titleClass: A }) => [
            $("span", {
              id: ee,
              class: Ce([A, ""])
            }, z(E(Q).replace(/(koishi-|^@koishijs\/)plugin-/, "") + (E(a) ? " (\u5DE5\u4F5C\u533A)" : "")), 11, Nr),
            E(a) ? U("", !0) : (m(), O(o, {
              key: 0,
              disabled: E(a),
              modelValue: E(i),
              "onUpdate:modelValue": n[0] || (n[0] = (D) => le(i) ? i.value = D : null)
            }, {
              default: x(() => [
                (m(!0), k(G, null, ne(E(d), ({ result: D }, I) => (m(), O(t, {
                  key: I,
                  value: I
                }, {
                  default: x(() => [
                    T(z(I) + " ", 1),
                    I === E(e) ? (m(), k(G, { key: 0 }, [
                      T("(\u5F53\u524D)")
                    ], 64)) : U("", !0),
                    $("span", {
                      class: Ce([D, "theme-color", "dot-hint"])
                    }, null, 2)
                  ]),
                  _: 2
                }, 1032, ["value"]))), 128))
              ]),
              _: 1
            }, 8, ["disabled", "modelValue"]))
          ]),
          key: "0"
        } : void 0,
        E(Q) ? {
          name: "footer",
          fn: x(() => [
            Yr,
            $("div", Kr, [
              H(j, {
                onClick: n[3] || (n[3] = (ee) => ve.value = !1)
              }, {
                default: x(() => [
                  T("\u53D6\u6D88")
                ]),
                _: 1
              }),
              E(a) ? (m(), k(G, { key: 0 }, [
                E(e) ? (m(), O(j, {
                  key: 0,
                  onClick: n[4] || (n[4] = (ee) => c(""))
                }, {
                  default: x(() => [
                    T("\u79FB\u9664")
                  ]),
                  _: 1
                })) : (m(), O(j, {
                  key: 1,
                  onClick: n[5] || (n[5] = (ee) => c(l.value)),
                  disabled: E(f)
                }, {
                  default: x(() => [
                    T("\u6DFB\u52A0")
                  ]),
                  _: 1
                }, 8, ["disabled"]))
              ], 64)) : (m(), k(G, { key: 1 }, [
                E(e) ? (m(), O(j, {
                  key: 0,
                  onClick: n[6] || (n[6] = (ee) => c(""))
                }, {
                  default: x(() => [
                    T("\u79FB\u9664")
                  ]),
                  _: 1
                })) : U("", !0),
                H(j, {
                  type: E(v),
                  onClick: n[7] || (n[7] = (ee) => c(l.value)),
                  disabled: E(f)
                }, {
                  default: x(() => [
                    T(z(E(e) ? "\u66F4\u65B0" : "\u5B89\u88C5"), 1)
                  ]),
                  _: 1
                }, 8, ["type", "disabled"])
              ], 64))
            ])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["modelValue"]);
    };
  }
});
const Qr = { class: "dep-package-view" }, Jr = { class: "name" }, es = { class: "current" }, ts = /* @__PURE__ */ re({
  __name: "package",
  props: {
    name: String
  },
  setup(s) {
    const c = s, l = N(() => R.dependencies[c.name]), i = N({
      get() {
        const e = te.override[c.name];
        if (l.value.resolved !== e)
          return e === "" ? "\u79FB\u9664\u4F9D\u8D56" : e;
      },
      set(e) {
        l.value.resolved === e ? delete te.override[c.name] : te.override[c.name] = e, console.log(te.override);
      }
    }), f = N(() => Hn(c.name));
    return (e, r) => {
      const a = M("el-option"), d = M("el-select"), h = M("el-button");
      return m(), k("tr", Qr, [
        $("td", Jr, z(s.name), 1),
        $("td", es, [
          E(l).workspace ? (m(), k(G, { key: 0 }, [
            T("\u5DE5\u4F5C\u533A")
          ], 64)) : (m(), k(G, { key: 1 }, [
            T(z(E(l).resolved) + " ", 1),
            E(l).invalid ? U("", !0) : (m(), k(G, { key: 0 }, [
              T(" (" + z(E(l).resolved === E(l).latest ? "\u6700\u65B0" : "\u53EF\u66F4\u65B0") + ") ", 1)
            ], 64))
          ], 64))
        ]),
        $("td", null, [
          !E(l).workspace && !E(l).invalid ? (m(), O(d, {
            key: 0,
            modelValue: E(i),
            "onUpdate:modelValue": r[0] || (r[0] = (p) => le(i) ? i.value = p : null)
          }, {
            default: x(() => [
              H(a, { value: "" }, {
                default: x(() => [
                  T("\u79FB\u9664\u4F9D\u8D56")
                ]),
                _: 1
              }),
              (m(!0), k(G, null, ne(E(f), ({ result: p }, v) => (m(), O(a, {
                key: v,
                value: v
              }, {
                default: x(() => [
                  T(z(v) + " ", 1),
                  v === E(l).resolved ? (m(), k(G, { key: 0 }, [
                    T("(\u5F53\u524D)")
                  ], 64)) : U("", !0),
                  $("span", {
                    class: Ce([p, "theme-color", "dot-hint"])
                  }, null, 2)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          }, 8, ["modelValue"])) : U("", !0)
        ]),
        $("td", null, [
          E(l).workspace || E(l).versions ? (m(), O(h, {
            key: 0,
            onClick: r[1] || (r[1] = (p) => Q.value = s.name)
          }, {
            default: x(() => [
              T("\u4FEE\u6539")
            ]),
            _: 1
          })) : E(l).invalid ? (m(), k(G, { key: 1 }, [
            T("\u6682\u4E0D\u652F\u6301")
          ], 64)) : (m(), k(G, { key: 2 }, [
            T("\u7248\u672C\u83B7\u53D6\u5931\u8D25")
          ], 64))
        ])
      ]);
    };
  }
});
const W = (s, c) => {
  const l = s.__vccOpts || s;
  for (const [i, f] of c)
    l[i] = f;
  return l;
}, ns = /* @__PURE__ */ W(ts, [["__scopeId", "data-v-24bd718c"]]), rs = /* @__PURE__ */ $("table", { class: "table-head" }, [
  /* @__PURE__ */ $("colgroup", null, [
    /* @__PURE__ */ $("col", { width: "auto" }),
    /* @__PURE__ */ $("col", { width: "15%" }),
    /* @__PURE__ */ $("col", { width: "30%" }),
    /* @__PURE__ */ $("col", { width: "15%" })
  ]),
  /* @__PURE__ */ $("thead", null, [
    /* @__PURE__ */ $("tr", null, [
      /* @__PURE__ */ $("th", null, "\u4F9D\u8D56\u540D\u79F0"),
      /* @__PURE__ */ $("th", null, "\u672C\u5730\u7248\u672C"),
      /* @__PURE__ */ $("th", null, "\u76EE\u6807\u7248\u672C"),
      /* @__PURE__ */ $("th", null, "\u64CD\u4F5C")
    ])
  ])
], -1), ss = { class: "table-body" }, us = /* @__PURE__ */ $("colgroup", null, [
  /* @__PURE__ */ $("col", { width: "auto" }),
  /* @__PURE__ */ $("col", { width: "15%" }),
  /* @__PURE__ */ $("col", { width: "30%" }),
  /* @__PURE__ */ $("col", { width: "15%" })
], -1), is = /* @__PURE__ */ re({
  __name: "index",
  setup(s) {
    const c = N(() => Object.keys(R.dependencies).filter((i) => !R.dependencies[i].workspace).sort((i, f) => i > f ? 1 : -1)), l = N(() => [{
      icon: "check",
      label: "\u5E94\u7528\u66F4\u6539",
      disabled: !Object.keys(te.override).length,
      async action() {
        return Pn(te.override);
      }
    }, Gn.value]);
    return (i, f) => {
      const e = M("el-scrollbar"), r = M("k-layout");
      return m(), O(r, {
        main: "page-deps",
        menu: E(l)
      }, {
        default: x(() => [
          rs,
          H(e, { class: "body-container" }, {
            default: x(() => [
              $("table", ss, [
                us,
                $("tbody", null, [
                  (m(!0), k(G, null, ne(E(c), (a) => (m(), O(ns, {
                    key: a,
                    name: a
                  }, null, 8, ["name"]))), 128))
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["menu"]);
    };
  }
});
const Sn = (s) => {
  var c, l, i;
  return (i = (l = {
    ...(c = R.market) == null ? void 0 : c.data[s],
    ...R.packages[s]
  }.manifest) == null ? void 0 : l.service.implements) != null ? i : [];
}, os = [
  "@koishijs/plugin-console",
  "@koishijs/plugin-market"
];
function as(s) {
  var e, r, a, d;
  function c(h, p) {
    var y, F;
    if (f.has(h) || h === "console")
      return;
    const v = Object.values((F = (y = R.market) == null ? void 0 : y.data) != null ? F : {}).filter((L) => Sn(L.name).includes(h)).map((L) => L.name);
    i.using[h] = { required: p, available: v };
  }
  const l = R.packages[s], i = { impl: [], using: {}, peer: {} }, f = /* @__PURE__ */ new Set();
  for (const h in (e = l.peerDependencies) != null ? e : {}) {
    if (!h.includes("@koishijs/plugin-") && !h.includes("koishi-plugin-") || os.includes(h))
      continue;
    const p = !((a = (r = l.peerDependenciesMeta) == null ? void 0 : r[h]) != null && a.optional), v = !!((d = R.packages[h]) != null && d.id);
    i.peer[h] = { required: p, active: v };
    for (const y of Sn(h))
      f.add(y);
  }
  for (const h of l.manifest.service.implements)
    h !== "adapter" && i.impl.push(h);
  for (const h of l.manifest.service.required)
    c(h, !0);
  for (const h of l.manifest.service.optional)
    c(h, !1);
  return l.id && !l.forkable && (i.warning = !0), l.schema || (i.warning = !0), i;
}
const Un = N(() => Object.fromEntries(Object.keys(R.packages).filter((s) => s).map((s) => [s, as(s)])));
function Xn(s, c) {
  const l = [];
  for (let i in c) {
    if (i.startsWith("$"))
      continue;
    const f = c[i], e = { config: f, parent: s };
    i.startsWith("~") && (e.disabled = !0, i = i.slice(1)), e.label = i.split(":", 1)[0], e.alias = i.slice(e.label.length + 1), e.id = e.path = s.path + (s.path ? "/" : "") + i, i.startsWith("group:") && (e.children = Xn(e, f)), l.push(e);
  }
  return l;
}
const ae = N(() => {
  const s = {
    label: "\u6240\u6709\u63D2\u4EF6",
    id: "",
    path: "",
    alias: "",
    config: R.config.plugins
  };
  s.children = Xn(s, R.config.plugins);
  const c = {
    "@global": {
      label: "\u5168\u5C40\u8BBE\u7F6E",
      path: "@global",
      id: "@global",
      alias: "",
      config: R.config
    }
  }, l = [];
  function i(f) {
    var e, r;
    !((e = f.config) != null && e.$collapsed) && f.children && l.push(f.id), c[f.path] = f, (r = f.children) == null || r.forEach(i);
  }
  return i(s), { data: [s], paths: c, expanded: l };
});
function Wn(s, c) {
  if (s !== c) {
    for (const l of Object.keys(ae.value.paths)) {
      if (l !== s && !l.startsWith(s + "/"))
        continue;
      const i = ae.value.paths[l];
      i.path = c + l.slice(s.length), ae.value.paths[i.path] = i, delete ae.value.paths[l];
    }
    fe.replace("/plugins/" + c);
  }
}
function ye(s) {
  return s.split(/\/?(@[\w-]+\/[\w:-]+|[\w:-]+)\/?/).filter(Boolean);
}
function ls(s, c, l) {
  const i = Math.random().toString(36).slice(2, 8);
  s === "@global" && (s = ""), s && (s += "/"), s += l + ":" + i, ie(`manager/${c}`, s), fe.replace("/plugins/" + s);
}
function cs(s) {
  ie("manager/remove", s);
  const c = ye(s);
  c.pop(), fe.replace("/plugins/" + c.join("/"));
}
const hs = /* @__PURE__ */ re({
  __name: "global",
  props: {
    current: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(s, { emit: c }) {
    const l = s, i = N({
      get: () => l.modelValue,
      set: (f) => c("update:modelValue", f)
    });
    return (f, e) => {
      const r = M("k-form");
      return m(), O(r, {
        schema: E(R).packages[""].schema,
        initial: s.current.config,
        modelValue: E(i),
        "onUpdate:modelValue": e[0] || (e[0] = (a) => le(i) ? i.value = a : null)
      }, null, 8, ["schema", "initial", "modelValue"]);
    };
  }
}), fs = { class: "modifier" }, ds = /* @__PURE__ */ $("h2", { class: "k-schema-header" }, "\u8FC7\u6EE4\u5668\u8BBE\u7F6E", -1), Yn = /* @__PURE__ */ re({
  __name: "modifier",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(s, { emit: c }) {
    const l = s, i = N({
      get: () => {
        var f;
        return (f = l.modelValue) == null ? void 0 : f.$filter;
      },
      set: (f) => c("update:modelValue", {
        ...l.modelValue,
        $filter: f
      })
    });
    return (f, e) => {
      const r = M("k-filter");
      return m(), k("div", fs, [
        ds,
        H(r, {
          modelValue: E(i),
          "onUpdate:modelValue": e[0] || (e[0] = (a) => le(i) ? i.value = a : null)
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
const ps = /* @__PURE__ */ re({
  __name: "group",
  props: {
    current: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(s, { emit: c }) {
    const l = s, i = N({
      get: () => l.modelValue,
      set: (f) => c("update:modelValue", f)
    });
    return (f, e) => (m(), O(Yn, {
      modelValue: E(i),
      "onUpdate:modelValue": e[0] || (e[0] = (r) => le(i) ? i.value = r : null)
    }, null, 8, ["modelValue"]));
  }
});
const _s = /* @__PURE__ */ W(ps, [["__scopeId", "data-v-bf2b50ca"]]), vs = { class: "search" }, ms = { class: "item" }, gs = { class: "label" }, Cs = /* @__PURE__ */ $("div", { class: "right" }, null, -1), Es = /* @__PURE__ */ re({
  __name: "tree",
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(s, { emit: c }) {
    const l = s, i = N({
      get: () => l.modelValue,
      set: (w) => c("update:modelValue", w)
    });
    function f(w, C) {
      return C.label.includes(L.value);
    }
    function e(w) {
      return w.data.path !== "";
    }
    function r(w, C, g) {
      if (g !== "inner")
        return C.data.path !== "";
      const _ = ye(C.data.path);
      return _[_.length - 1].startsWith("group:");
    }
    function a(w) {
      i.value = w.path;
    }
    function d(w, C, g) {
      ie("manager/meta", w.path, { $collapsed: null });
    }
    function h(w, C, g) {
      ie("manager/meta", w.path, { $collapsed: !0 });
    }
    function p(w, C, g, _) {
      const n = g === "inner" ? C : C.parent, t = w.data.path, o = n.data.path, u = n.childNodes.findIndex((Z) => Z.data.path === t);
      ie("manager/teleport", t, o, u);
      const b = ye(t), j = o ? ye(o) : [];
      j.push(b.pop()), Wn(t, j.join("/"));
    }
    function v(w) {
      const C = [];
      return w.children && C.push("is-group"), w.disabled && C.push("is-disabled"), w.path === i.value && C.push("is-active"), C.join(" ");
    }
    const y = oe(null), F = oe(null), L = oe("");
    return pe(L, (w) => {
      F.value.filter(w);
    }), Qn(async () => {
      const w = y.value.$el;
      await Nn();
      const C = w.querySelector(".k-tab-item.active");
      !C || y.value.setScrollTop(C.offsetTop - (w.offsetHeight - C.offsetHeight) / 2);
    }), (w, C) => {
      const g = M("k-icon"), _ = M("el-input"), n = M("k-tab-item"), t = M("el-tree"), o = M("el-scrollbar");
      return m(), O(o, {
        class: "plugin-tree",
        ref_key: "root",
        ref: y
      }, {
        default: x(() => [
          $("div", vs, [
            H(_, {
              modelValue: L.value,
              "onUpdate:modelValue": C[0] || (C[0] = (u) => L.value = u)
            }, {
              suffix: x(() => [
                H(g, { name: "search" })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          H(n, {
            class: "k-tab-group-title",
            label: "@global",
            modelValue: E(i),
            "onUpdate:modelValue": C[1] || (C[1] = (u) => le(i) ? i.value = u : null)
          }, {
            default: x(() => [
              T("\u5168\u5C40\u8BBE\u7F6E")
            ]),
            _: 1
          }, 8, ["modelValue"]),
          H(t, {
            ref_key: "tree",
            ref: F,
            "node-key": "id",
            data: E(ae).data,
            draggable: !0,
            "auto-expand-parent": !1,
            "default-expanded-keys": E(ae).expanded,
            "expand-on-click-node": !1,
            "filter-node-method": f,
            props: { class: v },
            "allow-drag": e,
            "allow-drop": r,
            onNodeClick: a,
            onNodeDrop: p,
            onNodeExpand: d,
            onNodeCollapse: h
          }, {
            default: x(({ node: u }) => [
              $("div", ms, [
                $("div", gs, z(u.label === "group" ? "\u5206\u7EC4\uFF1A" + u.data.alias : u.label || "\u5F85\u6DFB\u52A0"), 1),
                Cs
              ])
            ]),
            _: 1
          }, 8, ["data", "default-expanded-keys", "props"])
        ]),
        _: 1
      }, 512);
    };
  }
});
const xn = /* @__PURE__ */ re({
  __name: "dep-link",
  props: {
    name: null
  },
  setup(s) {
    return (c, l) => (m(), k("span", {
      class: "link",
      onClick: l[0] || (l[0] = de((i) => Q.value = s.name, ["stop"]))
    }, z(s.name), 1));
  }
}), $s = {
  key: 0,
  class: "navigation"
}, ys = ["href"], Ls = ["href"], ws = ["href"], Fs = ["href"], ks = /* @__PURE__ */ $("p", null, "\u6B64\u63D2\u4EF6\u5DF2\u5728\u8FD0\u884C\u4E14\u4E0D\u53EF\u91CD\u7528\uFF0C\u542F\u7528\u53EF\u80FD\u4F1A\u5BFC\u81F4\u975E\u9884\u671F\u7684\u95EE\u9898\u3002", -1), Ds = { key: 0 }, As = { key: 1 }, Rs = { key: 2 }, bs = { key: 0 }, Is = { key: 1 }, Ss = { key: 2 }, xs = { key: 0 }, Vs = ["onClick"], Bs = /* @__PURE__ */ re({
  __name: "plugin",
  props: {
    current: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(s, { emit: c }) {
    const l = s, i = N({
      get: () => l.modelValue,
      set: (y) => c("update:modelValue", y)
    }), f = N(() => {
      var C;
      if (!r.value)
        return {};
      const { required: y, optional: F, implements: L } = r.value.manifest.service, w = {};
      for (const g of [...y, ...F, ...L])
        w[g] = (C = R.services) == null ? void 0 : C[g];
      return w;
    }), e = N(() => {
      const { label: y, target: F } = l.current, L = F || y;
      if (L.includes("/")) {
        const [w, C] = L.split("/");
        return [`${w}/koishi-plugin-${C}`].find((g) => g in R.packages);
      }
      return [
        `@koishijs/plugin-${L}`,
        `koishi-plugin-${L}`
      ].find((w) => w in R.packages);
    }), r = N(() => R.packages[e.value]), a = N(() => {
      var y;
      return (y = R.market) == null ? void 0 : y.data[e.value];
    }), d = N(() => Un.value[e.value]), h = N(() => r.value.workspace ? "\uFF0C\u8BF7\u68C0\u67E5\u6E90\u4EE3\u7801" : "\uFF0C\u8BF7\u8054\u7CFB\u63D2\u4EF6\u4F5C\u8005"), p = N(() => {
      var y;
      if (!(!((y = a.value) != null && y.versions) || r.value.workspace))
        return a.value.version !== r.value.version;
    });
    function v() {
      fe.push("/market?keyword=" + l.current.label);
    }
    return Ie("manager.settings.local", r), Ie("manager.settings.config", i), Ie("manager.settings.current", N(() => l.current)), (y, F) => {
      const L = M("k-comment"), w = M("router-link"), C = M("k-markdown"), g = M("k-slot"), _ = M("k-form");
      return E(e) ? (m(), k(G, { key: 0 }, [
        E(a) ? (m(), k("div", $s, [
          E(a).links.homepage ? (m(), k("a", {
            key: 0,
            class: "k-button",
            target: "_blank",
            href: E(a).links.homepage
          }, "\u63D2\u4EF6\u4E3B\u9875", 8, ys)) : U("", !0),
          E(a).links.npm ? (m(), k("a", {
            key: 1,
            class: "k-button",
            target: "_blank",
            href: E(a).links.npm
          }, "\u6700\u65B0\u7248\uFF1A" + z(E(a).version), 9, Ls)) : U("", !0),
          E(a).links.repository ? (m(), k("a", {
            key: 2,
            class: "k-button",
            target: "_blank",
            href: E(a).links.repository
          }, "\u5B58\u50A8\u5E93", 8, ws)) : U("", !0),
          E(a).links.bugs ? (m(), k("a", {
            key: 3,
            class: "k-button",
            target: "_blank",
            href: E(a).links.bugs
          }, "\u95EE\u9898\u53CD\u9988", 8, Fs)) : U("", !0)
        ])) : U("", !0),
        E(r).id && !E(r).forkable && s.current.disabled ? (m(), O(L, {
          key: 1,
          type: "warning"
        }, {
          default: x(() => [
            ks
          ]),
          _: 1
        })) : U("", !0),
        E(p) ? (m(), O(L, { key: 2 }, {
          default: x(() => [
            $("p", null, [
              T("\u5F53\u524D\u7684\u63D2\u4EF6\u7248\u672C (" + z(E(r).version) + ") \u4E0D\u662F\u6700\u65B0\uFF0C", 1),
              H(w, { to: "/dependencies" }, {
                default: x(() => [
                  T("\u70B9\u51FB\u524D\u5F80\u4F9D\u8D56\u7BA1\u7406")
                ]),
                _: 1
              }),
              T("\u3002")
            ])
          ]),
          _: 1
        })) : U("", !0),
        !E(r).workspace && E(R).dependencies && !E(R).dependencies[E(e)] ? (m(), O(L, {
          key: 3,
          type: "warning"
        }, {
          default: x(() => [
            $("p", null, [
              T("\u5C1A\u672A\u5C06\u5F53\u524D\u63D2\u4EF6\u5217\u5165\u4F9D\u8D56\uFF0C"),
              $("a", {
                onClick: F[0] || (F[0] = (n) => E(ie)("market/install", { [E(e)]: E(r).version }))
              }, "\u70B9\u51FB\u6DFB\u52A0"),
              T("\u3002")
            ])
          ]),
          _: 1
        })) : U("", !0),
        (m(!0), k(G, null, ne(E(d).impl, (n) => (m(), k(G, { key: n }, [
          E(f)[n] && s.current.disabled ? (m(), O(L, {
            key: 0,
            type: "warning"
          }, {
            default: x(() => [
              $("p", null, "\u6B64\u63D2\u4EF6\u5C06\u4F1A\u63D0\u4F9B " + z(n) + " \u670D\u52A1\uFF0C\u4F46\u6B64\u670D\u52A1\u5DF2\u88AB\u5176\u4ED6\u63D2\u4EF6\u5B9E\u73B0\u3002", 1)
            ]),
            _: 2
          }, 1024)) : (m(), O(L, {
            key: 1,
            type: s.current.disabled ? "primary" : "success"
          }, {
            default: x(() => [
              $("p", null, "\u6B64\u63D2\u4EF6" + z(s.current.disabled ? "\u542F\u7528\u540E\u5C06\u4F1A\u63D0\u4F9B" : "\u63D0\u4F9B\u4E86") + " " + z(n) + " \u670D\u52A1\u3002", 1)
            ]),
            _: 2
          }, 1032, ["type"]))
        ], 64))), 128)),
        (m(!0), k(G, null, ne(E(d).peer, ({ required: n, active: t }, o) => (m(), O(L, {
          key: o,
          type: t ? "success" : n ? "warning" : "primary"
        }, {
          default: x(() => [
            $("p", null, [
              T(z(n ? "\u5FC5\u9700" : "\u53EF\u9009") + "\u4F9D\u8D56\uFF1A", 1),
              H(xn, { name: o }, null, 8, ["name"]),
              t ? (m(), k("span", Ds, " (\u5DF2\u52A0\u8F7D)")) : o in E(R).packages ? (m(), k("span", As, " (\u70B9\u51FB\u914D\u7F6E)")) : (m(), k("span", Rs, " (\u70B9\u51FB\u6DFB\u52A0)"))
            ])
          ]),
          _: 2
        }, 1032, ["type"]))), 128)),
        (m(!0), k(G, null, ne(E(d).using, ({ required: n, available: t }, o) => (m(), O(L, {
          key: o,
          type: E(f)[o] ? "success" : n ? "warning" : "primary"
        }, {
          default: x(() => [
            $("p", null, [
              T(z(n ? "\u5FC5\u9700" : "\u53EF\u9009") + "\u670D\u52A1\uFF1A" + z(o) + " ", 1),
              E(f)[o] ? (m(), k("span", bs, "(\u5DF2\u52A0\u8F7D)")) : t.length ? (m(), k("span", Is, "(\u672A\u52A0\u8F7D\uFF0C\u542F\u7528\u4E0B\u5217\u4EFB\u4E00\u63D2\u4EF6\u53EF\u5B9E\u73B0\u6B64\u670D\u52A1)")) : (m(), k("span", Ss, "(\u672A\u52A0\u8F7D)"))
            ]),
            !E(f)[o] && t.length ? (m(), k("ul", xs, [
              (m(!0), k(G, null, ne(t, (u) => (m(), k("li", null, [
                H(xn, { name: u }, null, 8, ["name"]),
                T(" (\u70B9\u51FB" + z(u in E(R).packages ? "\u914D\u7F6E" : "\u6DFB\u52A0") + ") ", 1)
              ]))), 256))
            ])) : U("", !0)
          ]),
          _: 2
        }, 1032, ["type"]))), 128)),
        E(r).usage ? (m(), O(C, {
          key: 4,
          class: "usage",
          source: E(r).usage
        }, null, 8, ["source"])) : U("", !0),
        E(r).filter !== !1 ? (m(), O(Yn, {
          key: 5,
          modelValue: E(i),
          "onUpdate:modelValue": F[1] || (F[1] = (n) => le(i) ? i.value = n : null)
        }, null, 8, ["modelValue"])) : U("", !0),
        H(g, { name: "market-settings" }),
        E(r).schema ? U("", !0) : (m(), O(L, {
          key: 6,
          type: "warning"
        }, {
          default: x(() => [
            $("p", null, "\u6B64\u63D2\u4EF6\u672A\u58F0\u660E\u914D\u7F6E\u9879\uFF0C\u8FD9\u53EF\u80FD\u5E76\u975E\u9884\u671F\u884C\u4E3A" + z(E(h)) + "\u3002", 1)
          ]),
          _: 1
        })),
        H(_, {
          schema: E(r).schema,
          initial: s.current.config,
          modelValue: E(i),
          "onUpdate:modelValue": F[2] || (F[2] = (n) => le(i) ? i.value = n : null)
        }, {
          hint: x(() => [
            T(z(E(h)), 1)
          ]),
          _: 1
        }, 8, ["schema", "initial", "modelValue"])
      ], 64)) : s.current.label ? (m(), O(L, {
        key: 1,
        type: "error"
      }, {
        default: x(() => [
          $("p", null, [
            T("\u6B64\u63D2\u4EF6\u5C1A\u672A\u5B89\u88C5\uFF0C"),
            $("span", {
              class: "link",
              onClick: de(v, ["stop"])
            }, "\u70B9\u51FB\u524D\u5F80\u63D2\u4EF6\u5E02\u573A", 8, Vs),
            T("\u3002")
          ])
        ]),
        _: 1
      })) : U("", !0);
    };
  }
});
const Ns = /* @__PURE__ */ re({
  __name: "alias",
  props: {
    current: null
  },
  setup(s) {
    const c = s, l = oe();
    pe(() => c.current.alias, (e) => {
      l.value = e;
    }, { immediate: !0 });
    const i = N(() => {
      if (!l.value && c.current.label !== "group")
        return !1;
      if (l.value.match(/[:~+#?@&*]/))
        return !0;
      for (const e in ae.value.paths) {
        if (e === c.current.path)
          continue;
        if (ae.value.paths[e].alias === l.value)
          return !0;
      }
    });
    function f() {
      if (l.value === c.current.alias || i.value)
        return;
      c.current.alias = l.value, ie("manager/alias", c.current.path, l.value);
      const e = c.current.path, r = e.split("/"), a = r.pop();
      r.push(a.split(":", 1)[0] + (l.value ? ":" : "") + l.value), Wn(e, r.join("/"));
    }
    return (e, r) => (m(), k("span", {
      class: Ce(["k-alias", { invalid: E(i) }])
    }, [
      T(" @ "),
      On($("input", {
        "onUpdate:modelValue": r[0] || (r[0] = (a) => l.value = a),
        onBlur: f
      }, null, 544), [
        [Tn, l.value]
      ])
    ], 2));
  }
});
const Vn = /* @__PURE__ */ W(Ns, [["__scopeId", "data-v-74100284"]]), Os = { class: "label" }, Ts = /* @__PURE__ */ re({
  __name: "index",
  setup(s) {
    const c = Rt(), l = ar(), i = N({
      get() {
        const p = c.path.slice(9);
        return p in ae.value.paths ? p : "@global";
      },
      set(p) {
        p in ae.value.paths || (p = "@global"), l.replace("/plugins/" + p);
      }
    }), f = oe(), e = oe();
    pe(() => ae.value.paths[i.value], (p) => {
      f.value = p, e.value = rr(p.config);
    }, { immediate: !0 });
    const r = N(() => {
      const { label: p, target: v } = f.value, y = v || p;
      if (y.includes("/")) {
        const [F, L] = y.split("/");
        return [`${F}/koishi-plugin-${L}`].find((w) => w in R.packages);
      }
      return [
        `@koishijs/plugin-${y}`,
        `koishi-plugin-${y}`
      ].find((F) => F in R.packages);
    }), a = N(() => {
      var v;
      const p = Un.value[r.value];
      if (!!p) {
        if (p.warning && f.value.disabled)
          return "warning";
        for (const y in p.using)
          if ((v = R.services) != null && v[y]) {
            if (p.impl.includes(y))
              return "warning";
          } else if (p.using[y].required)
            return "warning";
      }
    }), d = N(() => {
      const p = f.value.path === "@global", v = f.value.children, y = !p && !v, F = f.value.disabled;
      return [{
        icon: F ? "play" : "stop",
        label: F ? "\u542F\u7528\u63D2\u4EF6" : "\u505C\u7528\u63D2\u4EF6",
        disabled: !y || !r.value,
        action: async () => {
          await h(F ? "reload" : "unload"), ge.success(F ? "\u63D2\u4EF6\u5DF2\u542F\u7528\u3002" : "\u63D2\u4EF6\u5DF2\u505C\u7528\u3002");
        }
      }, {
        type: F ? a.value : "",
        icon: F ? "save" : "check",
        label: F ? "\u4FDD\u5B58\u914D\u7F6E" : "\u91CD\u8F7D\u914D\u7F6E",
        disabled: !p && !v && !r.value,
        async action() {
          p ? ie("manager/app-reload", e.value) : (await h(F ? "unload" : "reload"), ge.success(F ? "\u914D\u7F6E\u5DF2\u4FDD\u5B58\u3002" : "\u914D\u7F6E\u5DF2\u91CD\u8F7D\u3002"));
        }
      }, {
        type: "error",
        icon: "trash-can",
        label: v ? "\u79FB\u9664\u5206\u7EC4" : "\u79FB\u9664\u63D2\u4EF6",
        disabled: !f.value.path || p,
        action: () => cs(f.value.path)
      }, {
        icon: "add-plugin",
        label: "\u6DFB\u52A0\u63D2\u4EF6",
        disabled: y,
        action: () => me.value = !0
      }, {
        icon: "add-group",
        label: "\u6DFB\u52A0\u5206\u7EC4",
        disabled: y,
        action: () => ls(f.value.path, "group", "group")
      }];
    });
    async function h(p) {
      if (await ie(`manager/${p}`, f.value.path, e.value, f.value.target), f.value.target) {
        const v = ye(f.value.path);
        v[v.length - 1] = f.value.target, l.replace("/plugins/" + v.join("/"));
      }
    }
    return (p, v) => {
      const y = M("el-option"), F = M("el-select"), L = M("k-content"), w = M("k-layout");
      return m(), O(w, { menu: E(d) }, {
        header: x(() => [
          f.value.path === "@global" || !f.value.path ? (m(), k(G, { key: 0 }, [
            T(z(f.value.label), 1)
          ], 64)) : f.value.children ? (m(), k(G, { key: 1 }, [
            T(" \u5206\u7EC4 "),
            H(Vn, { current: f.value }, null, 8, ["current"])
          ], 64)) : (m(), k(G, { key: 2 }, [
            f.value.label ? (m(), k(G, { key: 1 }, [
              $("span", Os, z(f.value.label), 1),
              H(Vn, { current: f.value }, null, 8, ["current"])
            ], 64)) : (m(), O(F, {
              key: 0,
              modelValue: f.value.target,
              "onUpdate:modelValue": v[0] || (v[0] = (C) => f.value.target = C),
              filterable: "",
              placeholder: "\u63D2\u4EF6\u9009\u62E9"
            }, {
              default: x(() => [
                (m(!0), k(G, null, ne(Object.values(E(R).packages).slice(1).map((C) => C.shortname).sort(), (C) => (m(), O(y, {
                  key: C,
                  label: C,
                  value: C
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"]))
          ], 64))
        ]),
        left: x(() => [
          H(Es, {
            modelValue: E(i),
            "onUpdate:modelValue": v[1] || (v[1] = (C) => le(i) ? i.value = C : null)
          }, null, 8, ["modelValue"])
        ]),
        default: x(() => [
          (m(), O(L, {
            class: "plugin-view",
            key: E(i)
          }, {
            default: x(() => [
              f.value.path === "@global" ? (m(), O(hs, {
                key: 0,
                current: f.value,
                modelValue: e.value,
                "onUpdate:modelValue": v[2] || (v[2] = (C) => e.value = C)
              }, null, 8, ["current", "modelValue"])) : f.value.children ? (m(), O(_s, {
                key: 1,
                modelValue: e.value,
                "onUpdate:modelValue": v[3] || (v[3] = (C) => e.value = C),
                current: f.value
              }, null, 8, ["modelValue", "current"])) : (m(), O(Bs, {
                key: 2,
                current: f.value,
                modelValue: e.value,
                "onUpdate:modelValue": v[4] || (v[4] = (C) => e.value = C)
              }, null, 8, ["current", "modelValue"]))
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 8, ["menu"]);
    };
  }
});
const At = {
  all: "\u6240\u6709\u63D2\u4EF6",
  other: "\u672A\u5206\u7C7B",
  console: "\u63A7\u5236\u53F0",
  business: "\u4E1A\u52A1\u529F\u80FD",
  storage: "\u5B58\u50A8\u670D\u52A1",
  tool: "\u57FA\u7840\u5DE5\u5177",
  game: "\u5A31\u4E50\u529F\u80FD"
};
function Kn(s) {
  return At[s] ? s : "other";
}
function Ms(s) {
  var l;
  const c = {};
  for (const i of s.contributors)
    c[l = i.email] || (c[l] = i);
  return s.maintainers.some((i) => c[i.email]) ? Object.values(c) : [s.publisher];
}
function qs(s, c, l) {
  const { locales: i, service: f } = jn(s.name).manifest;
  if (c.startsWith("impl:"))
    return f.implements.includes(c.slice(5));
  if (c.startsWith("locale:"))
    return i.includes(c.slice(7));
  if (c.startsWith("using:")) {
    const e = c.slice(6);
    return f.required.includes(e) || f.optional.includes(e);
  } else {
    if (c.startsWith("email:"))
      return l.some(({ email: e }) => e === c.slice(6));
    if (c.startsWith("before:"))
      return s.createdAt < c.slice(7);
    if (c.startsWith("after:"))
      return s.createdAt >= c.slice(6);
    if (c.startsWith("is:"))
      return c === "is:verified" ? s.verified : c === "is:insecure" ? s.insecure : c === "is:preview" ? s.manifest.preview : !1;
    if (c.startsWith("not:"))
      return c === "not:verified" ? !s.verified : c === "not:insecure" ? !s.insecure : c === "not:preview" ? !s.manifest.preview : !0;
    if (c.startsWith("show:"))
      return !0;
  }
  return s.shortname.includes(c) ? !0 : s.keywords.some((e) => !e.includes(":") && e.includes(c));
}
var kt = { exports: {} }, Bn;
function zs() {
  return Bn || (Bn = 1, function(s, c) {
    (function(l) {
      s.exports = l();
    })(function(l) {
      var i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      function f(g, _) {
        var n = g[0], t = g[1], o = g[2], u = g[3];
        n += (t & o | ~t & u) + _[0] - 680876936 | 0, n = (n << 7 | n >>> 25) + t | 0, u += (n & t | ~n & o) + _[1] - 389564586 | 0, u = (u << 12 | u >>> 20) + n | 0, o += (u & n | ~u & t) + _[2] + 606105819 | 0, o = (o << 17 | o >>> 15) + u | 0, t += (o & u | ~o & n) + _[3] - 1044525330 | 0, t = (t << 22 | t >>> 10) + o | 0, n += (t & o | ~t & u) + _[4] - 176418897 | 0, n = (n << 7 | n >>> 25) + t | 0, u += (n & t | ~n & o) + _[5] + 1200080426 | 0, u = (u << 12 | u >>> 20) + n | 0, o += (u & n | ~u & t) + _[6] - 1473231341 | 0, o = (o << 17 | o >>> 15) + u | 0, t += (o & u | ~o & n) + _[7] - 45705983 | 0, t = (t << 22 | t >>> 10) + o | 0, n += (t & o | ~t & u) + _[8] + 1770035416 | 0, n = (n << 7 | n >>> 25) + t | 0, u += (n & t | ~n & o) + _[9] - 1958414417 | 0, u = (u << 12 | u >>> 20) + n | 0, o += (u & n | ~u & t) + _[10] - 42063 | 0, o = (o << 17 | o >>> 15) + u | 0, t += (o & u | ~o & n) + _[11] - 1990404162 | 0, t = (t << 22 | t >>> 10) + o | 0, n += (t & o | ~t & u) + _[12] + 1804603682 | 0, n = (n << 7 | n >>> 25) + t | 0, u += (n & t | ~n & o) + _[13] - 40341101 | 0, u = (u << 12 | u >>> 20) + n | 0, o += (u & n | ~u & t) + _[14] - 1502002290 | 0, o = (o << 17 | o >>> 15) + u | 0, t += (o & u | ~o & n) + _[15] + 1236535329 | 0, t = (t << 22 | t >>> 10) + o | 0, n += (t & u | o & ~u) + _[1] - 165796510 | 0, n = (n << 5 | n >>> 27) + t | 0, u += (n & o | t & ~o) + _[6] - 1069501632 | 0, u = (u << 9 | u >>> 23) + n | 0, o += (u & t | n & ~t) + _[11] + 643717713 | 0, o = (o << 14 | o >>> 18) + u | 0, t += (o & n | u & ~n) + _[0] - 373897302 | 0, t = (t << 20 | t >>> 12) + o | 0, n += (t & u | o & ~u) + _[5] - 701558691 | 0, n = (n << 5 | n >>> 27) + t | 0, u += (n & o | t & ~o) + _[10] + 38016083 | 0, u = (u << 9 | u >>> 23) + n | 0, o += (u & t | n & ~t) + _[15] - 660478335 | 0, o = (o << 14 | o >>> 18) + u | 0, t += (o & n | u & ~n) + _[4] - 405537848 | 0, t = (t << 20 | t >>> 12) + o | 0, n += (t & u | o & ~u) + _[9] + 568446438 | 0, n = (n << 5 | n >>> 27) + t | 0, u += (n & o | t & ~o) + _[14] - 1019803690 | 0, u = (u << 9 | u >>> 23) + n | 0, o += (u & t | n & ~t) + _[3] - 187363961 | 0, o = (o << 14 | o >>> 18) + u | 0, t += (o & n | u & ~n) + _[8] + 1163531501 | 0, t = (t << 20 | t >>> 12) + o | 0, n += (t & u | o & ~u) + _[13] - 1444681467 | 0, n = (n << 5 | n >>> 27) + t | 0, u += (n & o | t & ~o) + _[2] - 51403784 | 0, u = (u << 9 | u >>> 23) + n | 0, o += (u & t | n & ~t) + _[7] + 1735328473 | 0, o = (o << 14 | o >>> 18) + u | 0, t += (o & n | u & ~n) + _[12] - 1926607734 | 0, t = (t << 20 | t >>> 12) + o | 0, n += (t ^ o ^ u) + _[5] - 378558 | 0, n = (n << 4 | n >>> 28) + t | 0, u += (n ^ t ^ o) + _[8] - 2022574463 | 0, u = (u << 11 | u >>> 21) + n | 0, o += (u ^ n ^ t) + _[11] + 1839030562 | 0, o = (o << 16 | o >>> 16) + u | 0, t += (o ^ u ^ n) + _[14] - 35309556 | 0, t = (t << 23 | t >>> 9) + o | 0, n += (t ^ o ^ u) + _[1] - 1530992060 | 0, n = (n << 4 | n >>> 28) + t | 0, u += (n ^ t ^ o) + _[4] + 1272893353 | 0, u = (u << 11 | u >>> 21) + n | 0, o += (u ^ n ^ t) + _[7] - 155497632 | 0, o = (o << 16 | o >>> 16) + u | 0, t += (o ^ u ^ n) + _[10] - 1094730640 | 0, t = (t << 23 | t >>> 9) + o | 0, n += (t ^ o ^ u) + _[13] + 681279174 | 0, n = (n << 4 | n >>> 28) + t | 0, u += (n ^ t ^ o) + _[0] - 358537222 | 0, u = (u << 11 | u >>> 21) + n | 0, o += (u ^ n ^ t) + _[3] - 722521979 | 0, o = (o << 16 | o >>> 16) + u | 0, t += (o ^ u ^ n) + _[6] + 76029189 | 0, t = (t << 23 | t >>> 9) + o | 0, n += (t ^ o ^ u) + _[9] - 640364487 | 0, n = (n << 4 | n >>> 28) + t | 0, u += (n ^ t ^ o) + _[12] - 421815835 | 0, u = (u << 11 | u >>> 21) + n | 0, o += (u ^ n ^ t) + _[15] + 530742520 | 0, o = (o << 16 | o >>> 16) + u | 0, t += (o ^ u ^ n) + _[2] - 995338651 | 0, t = (t << 23 | t >>> 9) + o | 0, n += (o ^ (t | ~u)) + _[0] - 198630844 | 0, n = (n << 6 | n >>> 26) + t | 0, u += (t ^ (n | ~o)) + _[7] + 1126891415 | 0, u = (u << 10 | u >>> 22) + n | 0, o += (n ^ (u | ~t)) + _[14] - 1416354905 | 0, o = (o << 15 | o >>> 17) + u | 0, t += (u ^ (o | ~n)) + _[5] - 57434055 | 0, t = (t << 21 | t >>> 11) + o | 0, n += (o ^ (t | ~u)) + _[12] + 1700485571 | 0, n = (n << 6 | n >>> 26) + t | 0, u += (t ^ (n | ~o)) + _[3] - 1894986606 | 0, u = (u << 10 | u >>> 22) + n | 0, o += (n ^ (u | ~t)) + _[10] - 1051523 | 0, o = (o << 15 | o >>> 17) + u | 0, t += (u ^ (o | ~n)) + _[1] - 2054922799 | 0, t = (t << 21 | t >>> 11) + o | 0, n += (o ^ (t | ~u)) + _[8] + 1873313359 | 0, n = (n << 6 | n >>> 26) + t | 0, u += (t ^ (n | ~o)) + _[15] - 30611744 | 0, u = (u << 10 | u >>> 22) + n | 0, o += (n ^ (u | ~t)) + _[6] - 1560198380 | 0, o = (o << 15 | o >>> 17) + u | 0, t += (u ^ (o | ~n)) + _[13] + 1309151649 | 0, t = (t << 21 | t >>> 11) + o | 0, n += (o ^ (t | ~u)) + _[4] - 145523070 | 0, n = (n << 6 | n >>> 26) + t | 0, u += (t ^ (n | ~o)) + _[11] - 1120210379 | 0, u = (u << 10 | u >>> 22) + n | 0, o += (n ^ (u | ~t)) + _[2] + 718787259 | 0, o = (o << 15 | o >>> 17) + u | 0, t += (u ^ (o | ~n)) + _[9] - 343485551 | 0, t = (t << 21 | t >>> 11) + o | 0, g[0] = n + g[0] | 0, g[1] = t + g[1] | 0, g[2] = o + g[2] | 0, g[3] = u + g[3] | 0;
      }
      function e(g) {
        var _ = [], n;
        for (n = 0; n < 64; n += 4)
          _[n >> 2] = g.charCodeAt(n) + (g.charCodeAt(n + 1) << 8) + (g.charCodeAt(n + 2) << 16) + (g.charCodeAt(n + 3) << 24);
        return _;
      }
      function r(g) {
        var _ = [], n;
        for (n = 0; n < 64; n += 4)
          _[n >> 2] = g[n] + (g[n + 1] << 8) + (g[n + 2] << 16) + (g[n + 3] << 24);
        return _;
      }
      function a(g) {
        var _ = g.length, n = [1732584193, -271733879, -1732584194, 271733878], t, o, u, b, j, Z;
        for (t = 64; t <= _; t += 64)
          f(n, e(g.substring(t - 64, t)));
        for (g = g.substring(t - 64), o = g.length, u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < o; t += 1)
          u[t >> 2] |= g.charCodeAt(t) << (t % 4 << 3);
        if (u[t >> 2] |= 128 << (t % 4 << 3), t > 55)
          for (f(n, u), t = 0; t < 16; t += 1)
            u[t] = 0;
        return b = _ * 8, b = b.toString(16).match(/(.*?)(.{0,8})$/), j = parseInt(b[2], 16), Z = parseInt(b[1], 16) || 0, u[14] = j, u[15] = Z, f(n, u), n;
      }
      function d(g) {
        var _ = g.length, n = [1732584193, -271733879, -1732584194, 271733878], t, o, u, b, j, Z;
        for (t = 64; t <= _; t += 64)
          f(n, r(g.subarray(t - 64, t)));
        for (g = t - 64 < _ ? g.subarray(t - 64) : new Uint8Array(0), o = g.length, u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < o; t += 1)
          u[t >> 2] |= g[t] << (t % 4 << 3);
        if (u[t >> 2] |= 128 << (t % 4 << 3), t > 55)
          for (f(n, u), t = 0; t < 16; t += 1)
            u[t] = 0;
        return b = _ * 8, b = b.toString(16).match(/(.*?)(.{0,8})$/), j = parseInt(b[2], 16), Z = parseInt(b[1], 16) || 0, u[14] = j, u[15] = Z, f(n, u), n;
      }
      function h(g) {
        var _ = "", n;
        for (n = 0; n < 4; n += 1)
          _ += i[g >> n * 8 + 4 & 15] + i[g >> n * 8 & 15];
        return _;
      }
      function p(g) {
        var _;
        for (_ = 0; _ < g.length; _ += 1)
          g[_] = h(g[_]);
        return g.join("");
      }
      p(a("hello")), typeof ArrayBuffer < "u" && !ArrayBuffer.prototype.slice && function() {
        function g(_, n) {
          return _ = _ | 0 || 0, _ < 0 ? Math.max(_ + n, 0) : Math.min(_, n);
        }
        ArrayBuffer.prototype.slice = function(_, n) {
          var t = this.byteLength, o = g(_, t), u = t, b, j, Z, ee;
          return n !== l && (u = g(n, t)), o > u ? new ArrayBuffer(0) : (b = u - o, j = new ArrayBuffer(b), Z = new Uint8Array(j), ee = new Uint8Array(this, o, b), Z.set(ee), j);
        };
      }();
      function v(g) {
        return /[\u0080-\uFFFF]/.test(g) && (g = unescape(encodeURIComponent(g))), g;
      }
      function y(g, _) {
        var n = g.length, t = new ArrayBuffer(n), o = new Uint8Array(t), u;
        for (u = 0; u < n; u += 1)
          o[u] = g.charCodeAt(u);
        return _ ? o : t;
      }
      function F(g) {
        return String.fromCharCode.apply(null, new Uint8Array(g));
      }
      function L(g, _, n) {
        var t = new Uint8Array(g.byteLength + _.byteLength);
        return t.set(new Uint8Array(g)), t.set(new Uint8Array(_), g.byteLength), n ? t : t.buffer;
      }
      function w(g) {
        var _ = [], n = g.length, t;
        for (t = 0; t < n - 1; t += 2)
          _.push(parseInt(g.substr(t, 2), 16));
        return String.fromCharCode.apply(String, _);
      }
      function C() {
        this.reset();
      }
      return C.prototype.append = function(g) {
        return this.appendBinary(v(g)), this;
      }, C.prototype.appendBinary = function(g) {
        this._buff += g, this._length += g.length;
        var _ = this._buff.length, n;
        for (n = 64; n <= _; n += 64)
          f(this._hash, e(this._buff.substring(n - 64, n)));
        return this._buff = this._buff.substring(n - 64), this;
      }, C.prototype.end = function(g) {
        var _ = this._buff, n = _.length, t, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], u;
        for (t = 0; t < n; t += 1)
          o[t >> 2] |= _.charCodeAt(t) << (t % 4 << 3);
        return this._finish(o, n), u = p(this._hash), g && (u = w(u)), this.reset(), u;
      }, C.prototype.reset = function() {
        return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
      }, C.prototype.getState = function() {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash.slice()
        };
      }, C.prototype.setState = function(g) {
        return this._buff = g.buff, this._length = g.length, this._hash = g.hash, this;
      }, C.prototype.destroy = function() {
        delete this._hash, delete this._buff, delete this._length;
      }, C.prototype._finish = function(g, _) {
        var n = _, t, o, u;
        if (g[n >> 2] |= 128 << (n % 4 << 3), n > 55)
          for (f(this._hash, g), n = 0; n < 16; n += 1)
            g[n] = 0;
        t = this._length * 8, t = t.toString(16).match(/(.*?)(.{0,8})$/), o = parseInt(t[2], 16), u = parseInt(t[1], 16) || 0, g[14] = o, g[15] = u, f(this._hash, g);
      }, C.hash = function(g, _) {
        return C.hashBinary(v(g), _);
      }, C.hashBinary = function(g, _) {
        var n = a(g), t = p(n);
        return _ ? w(t) : t;
      }, C.ArrayBuffer = function() {
        this.reset();
      }, C.ArrayBuffer.prototype.append = function(g) {
        var _ = L(this._buff.buffer, g, !0), n = _.length, t;
        for (this._length += g.byteLength, t = 64; t <= n; t += 64)
          f(this._hash, r(_.subarray(t - 64, t)));
        return this._buff = t - 64 < n ? new Uint8Array(_.buffer.slice(t - 64)) : new Uint8Array(0), this;
      }, C.ArrayBuffer.prototype.end = function(g) {
        var _ = this._buff, n = _.length, t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], o, u;
        for (o = 0; o < n; o += 1)
          t[o >> 2] |= _[o] << (o % 4 << 3);
        return this._finish(t, n), u = p(this._hash), g && (u = w(u)), this.reset(), u;
      }, C.ArrayBuffer.prototype.reset = function() {
        return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
      }, C.ArrayBuffer.prototype.getState = function() {
        var g = C.prototype.getState.call(this);
        return g.buff = F(g.buff), g;
      }, C.ArrayBuffer.prototype.setState = function(g) {
        return g.buff = y(g.buff, !0), C.prototype.setState.call(this, g);
      }, C.ArrayBuffer.prototype.destroy = C.prototype.destroy, C.ArrayBuffer.prototype._finish = C.prototype._finish, C.ArrayBuffer.hash = function(g, _) {
        var n = d(new Uint8Array(g)), t = p(n);
        return _ ? w(t) : t;
      }, C;
    });
  }(kt)), kt.exports;
}
var Hs = zs();
const Ps = { class: "k-card market-view" }, js = { class: "header" }, Gs = { class: "left" }, Us = { class: "right" }, Xs = ["href"], Ws = { class: "rating" }, Ys = { class: "footer" }, Ks = ["href"], Zs = /* @__PURE__ */ $("span", { class: "spacer" }, null, -1), Qs = ["href"], Js = /* @__PURE__ */ $("span", { class: "spacer" }, null, -1), e1 = /* @__PURE__ */ $("span", { class: "spacer" }, null, -1), t1 = /* @__PURE__ */ $("span", { class: "spacer grow" }, null, -1), n1 = { class: "avatars" }, r1 = ["onClick"], s1 = ["src"], u1 = /* @__PURE__ */ re({
  __name: "package",
  props: {
    data: {}
  },
  emits: ["query", "click"],
  setup(s) {
    const c = s, l = new Date(Date.now() - 7 * 24 * 3600 * 1e3).toISOString(), i = N(() => jn(c.data.name));
    function f() {
      Q.value = c.data.name;
    }
    const e = N(() => Math.min(Math.max((c.data.score.final - 0.25) * 10, 0), 5));
    function r(h) {
      return (R.market.gravatar || "https://s.gravatar.com") + "/avatar/" + (h ? Hs.hash(h.toLowerCase()) : "") + "?d=mp";
    }
    function a(h) {
      return h >= 100 ? +h.toFixed() : +h.toFixed(1);
    }
    function d(h) {
      return h >= (1 << 20) * 1e3 ? a(h / (1 << 30)) + " GB" : h >= (1 << 10) * 1e3 ? a(h / (1 << 20)) + " MB" : a(h / (1 << 10)) + " KB";
    }
    return (h, p) => {
      const v = M("k-icon"), y = M("el-tooltip"), F = M("k-button"), L = M("k-markdown");
      return m(), k("section", Ps, [
        $("div", js, [
          $("div", Gs, [
            H(v, {
              name: "category:" + E(Kn)(s.data.manifest.category)
            }, null, 8, ["name"])
          ]),
          $("div", Us, [
            $("h2", null, [
              $("a", {
                href: s.data.links.homepage,
                target: "_blank",
                rel: "noopener noreferrer"
              }, z(s.data.shortname), 9, Xs),
              s.data.verified ? (m(), O(y, {
                key: 0,
                content: "\u5B98\u65B9\u8BA4\u8BC1",
                placement: "right"
              }, {
                default: x(() => [
                  $("span", {
                    class: "icon verified",
                    onClick: p[0] || (p[0] = (w) => h.$emit("query", "is:verified"))
                  }, [
                    H(v, { name: "verified" })
                  ])
                ]),
                _: 1
              })) : s.data.insecure ? (m(), O(y, {
                key: 1,
                content: "\u4E0D\u5B89\u5168",
                placement: "right"
              }, {
                default: x(() => [
                  $("span", {
                    class: "icon insecure",
                    onClick: p[1] || (p[1] = (w) => h.$emit("query", "is:insecure"))
                  }, [
                    H(v, { name: "insecure" })
                  ])
                ]),
                _: 1
              })) : s.data.manifest.preview ? (m(), O(y, {
                key: 2,
                content: "\u5F00\u53D1\u4E2D",
                placement: "right"
              }, {
                default: x(() => [
                  $("span", {
                    class: "icon preview",
                    onClick: p[2] || (p[2] = (w) => h.$emit("query", "is:preview"))
                  }, [
                    H(v, { name: "preview" })
                  ])
                ]),
                _: 1
              })) : s.data.createdAt >= E(l) ? (m(), O(y, {
                key: 3,
                content: "\u8FD1\u671F\u65B0\u589E",
                placement: "right"
              }, {
                default: x(() => [
                  $("span", {
                    class: "icon newborn",
                    onClick: p[3] || (p[3] = (w) => h.$emit("query", "after:" + E(l)))
                  }, [
                    H(v, { name: "newborn" })
                  ])
                ]),
                _: 1
              })) : U("", !0)
            ]),
            H(y, {
              content: E(e).toFixed(1),
              placement: "right"
            }, {
              default: x(() => [
                $("div", Ws, [
                  (m(!0), k(G, null, ne(Array(5).fill(null), (w, C) => (m(), O(v, {
                    key: C,
                    name: C + 0.5 < E(e) ? "star-full" : "star-empty"
                  }, null, 8, ["name"]))), 128))
                ])
              ]),
              _: 1
            }, 8, ["content"]),
            E(R).packages ? (m(), k(G, { key: 0 }, [
              E(R).packages[s.data.name] ? (m(), O(F, {
                key: 0,
                type: "success",
                solid: "",
                class: "right",
                onClick: f
              }, {
                default: x(() => [
                  T("\u4FEE\u6539")
                ]),
                _: 1
              })) : (m(), O(F, {
                key: 1,
                disabled: E(sr).static,
                solid: "",
                class: "right",
                onClick: f
              }, {
                default: x(() => [
                  T("\u6DFB\u52A0")
                ]),
                _: 1
              }, 8, ["disabled"]))
            ], 64)) : U("", !0)
          ])
        ]),
        H(L, {
          inline: "",
          class: "desc",
          source: E(i).manifest.description.zh || E(i).manifest.description.en
        }, null, 8, ["source"]),
        $("div", Ys, [
          $("a", {
            class: "shrink",
            href: s.data.links.npm,
            target: "_blank",
            rel: "noopener noreferrer"
          }, [
            H(v, { name: "tag" }),
            T(z(s.data.version), 1)
          ], 8, Ks),
          s.data.installSize ? (m(), k(G, { key: 0 }, [
            Zs,
            $("a", {
              href: s.data.links.size,
              target: "_blank",
              rel: "noopener noreferrer"
            }, [
              H(v, { name: "file-archive" }),
              T(z(d(s.data.installSize)), 1)
            ], 8, Qs)
          ], 64)) : U("", !0),
          s.data.downloads ? (m(), k(G, { key: 1 }, [
            Js,
            $("span", null, [
              H(v, { name: "download" }),
              T(z(s.data.downloads.lastMonth), 1)
            ])
          ], 64)) : U("", !0),
          !s.data.installSize && !s.data.downloads ? (m(), k(G, { key: 2 }, [
            e1,
            $("span", null, [
              H(v, { name: "balance" }),
              T(z(s.data.license), 1)
            ])
          ], 64)) : U("", !0),
          t1,
          $("div", n1, [
            (m(!0), k(G, null, ne(s.data.contributors, ({ email: w, name: C }) => (m(), O(y, {
              key: C,
              content: C
            }, {
              default: x(() => [
                $("a", {
                  onClick: (g) => h.$emit("query", "user:" + C)
                }, [
                  $("img", {
                    src: r(w)
                  }, null, 8, s1)
                ], 8, r1)
              ]),
              _: 2
            }, 1032, ["content"]))), 128))
          ])
        ])
      ]);
    };
  }
});
const i1 = { key: 0 }, o1 = /* @__PURE__ */ $("div", { class: "el-loading-spinner" }, [
  /* @__PURE__ */ $("svg", {
    class: "circular",
    viewBox: "25 25 50 50"
  }, [
    /* @__PURE__ */ $("circle", {
      class: "path",
      cx: "50",
      cy: "50",
      r: "20",
      fill: "none"
    })
  ]),
  /* @__PURE__ */ $("p", { class: "el-loading-text" }, "\u6B63\u5728\u52A0\u8F7D\u63D2\u4EF6\u5E02\u573A\u2026\u2026")
], -1), a1 = [
  o1
], l1 = { class: "search-box" }, c1 = ["onKeydown", "onKeypress"], h1 = { class: "market-filter" }, f1 = { class: "market-container" }, d1 = /* @__PURE__ */ $("p", null, "\u65E0\u6CD5\u8FDE\u63A5\u5230\u63D2\u4EF6\u5E02\u573A\u3002\u8FD9\u53EF\u80FD\u662F\u4EE5\u4E0B\u539F\u56E0\u5BFC\u81F4\u7684\uFF1A", -1), p1 = /* @__PURE__ */ $("ul", null, [
  /* @__PURE__ */ $("li", null, "\u65E0\u6CD5\u8FDE\u63A5\u5230\u7F51\u7EDC\uFF0C\u8BF7\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5\u548C\u4EE3\u7406\u8BBE\u7F6E"),
  /* @__PURE__ */ $("li", null, "\u60A8\u6240\u7528\u7684 registry \u4E0D\u652F\u6301\u641C\u7D22\u529F\u80FD (\u5982 npmmirror)\uFF0C\u8BF7\u8003\u8651\u8FDB\u884C\u66F4\u6362")
], -1), _1 = /* @__PURE__ */ re({
  __name: "index",
  setup(s) {
    const c = Rt(), { keyword: l } = c.query, i = Jn(Array.isArray(l) ? l : (l || "").split(" "));
    i[i.length - 1] && i.push("");
    const f = N(() => i.filter((L) => L));
    pe(i, () => {
      const { keyword: L, ...w } = c.query, C = f.value.join(" ");
      C ? fe.replace({ query: { keyword: C, ...w } }) : fe.replace({ query: w });
    }, { deep: !0 });
    function e(L) {
      const w = i[i.length - 1];
      !w || (i.slice(0, -1).includes(w) && i.pop(), i.push(""));
    }
    function r(L) {
      i[i.length - 1] = "";
    }
    function a(L) {
      i[i.length - 1] === "" && i.length > 1 && (L.preventDefault(), i.splice(i.length - 2, 1));
    }
    function d(L) {
      i[i.length - 1] || i.pop(), i.includes(L) || i.push(L), i.push("");
    }
    const h = N(() => Object.values(R.market.data).filter((L) => !L.manifest.hidden || i.includes("show:hidden"))), p = N(() => h.value.filter((L) => {
      const w = Ms(L);
      return i.every((C) => qs(L, C, w));
    })), v = N(() => p.value.filter((L) => R.packages[L.name]).length), y = N(() => p.value.filter((L) => xe.static ? !te.showInstalled || R.packages[L.name] : te.showInstalled || !R.packages[L.name]).sort((L, w) => (xe.static ? +w.portable - +L.portable : 0) || w.score.final - L.score.final)), F = N(() => [Gn.value]);
    return (L, w) => {
      const C = M("k-badge"), g = M("k-icon"), _ = M("el-checkbox"), n = M("el-scrollbar"), t = M("k-comment"), o = M("k-layout");
      return m(), O(o, {
        main: "darker",
        class: "page-market",
        menu: E(F)
      }, {
        default: x(() => [
          E(R).market ? E(R).market.total ? (m(), O(n, { key: 1 }, {
            default: x(() => [
              $("div", l1, [
                (m(!0), k(G, null, ne(i.slice(0, -1), (u, b) => (m(), O(C, {
                  type: "success",
                  key: b,
                  onClick: (j) => i.splice(b, 1)
                }, {
                  default: x(() => [
                    T(z(u), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]))), 128)),
                On($("input", {
                  placeholder: "\u8F93\u5165\u60F3\u8981\u67E5\u8BE2\u7684\u63D2\u4EF6\u540D",
                  "onUpdate:modelValue": w[0] || (w[0] = (u) => i[i.length - 1] = u),
                  onBlur: e,
                  onKeydown: [
                    Le(r, ["escape"]),
                    Le(a, ["backspace"])
                  ],
                  onKeypress: [
                    Le(de(e, ["prevent"]), ["enter"]),
                    Le(de(e, ["prevent"]), ["space"])
                  ]
                }, null, 40, c1), [
                  [Tn, i[i.length - 1]]
                ]),
                H(g, { name: "search" })
              ]),
              $("div", h1, [
                T(" \u5171\u641C\u7D22\u5230 " + z(E(f).length ? E(p).length + " / " : "") + z(E(h).length) + " \u4E2A\u63D2\u4EF6\u3002 ", 1),
                E(R).packages ? (m(), O(_, {
                  key: 0,
                  modelValue: E(te).showInstalled,
                  "onUpdate:modelValue": w[1] || (w[1] = (u) => E(te).showInstalled = u)
                }, {
                  default: x(() => [
                    T(z(E(xe).static ? "\u53EA\u663E\u793A\u53EF\u7528\u63D2\u4EF6" : `\u663E\u793A\u5DF2\u4E0B\u8F7D\u7684\u63D2\u4EF6 (\u5171 ${E(v)} \u4E2A)`), 1)
                  ]),
                  _: 1
                }, 8, ["modelValue"])) : U("", !0)
              ]),
              $("div", f1, [
                (m(!0), k(G, null, ne(E(y), (u) => (m(), O(u1, {
                  key: u.name,
                  data: u,
                  onQuery: d
                }, null, 8, ["data"]))), 128))
              ])
            ]),
            _: 1
          })) : (m(), O(t, {
            key: 2,
            type: "error",
            class: "market-error"
          }, {
            default: x(() => [
              d1,
              p1
            ]),
            _: 1
          })) : (m(), k("div", i1, a1))
        ]),
        _: 1
      }, 8, ["menu"]);
    };
  }
});
const v1 = { class: "title" }, m1 = { class: "tabs" }, g1 = ["onClick"], C1 = { class: "title" }, E1 = { class: "content" }, $1 = ["onClick"], y1 = /* @__PURE__ */ re({
  __name: "select",
  setup(s) {
    const c = oe("all"), l = oe(""), i = oe(), f = Rt(), e = N(() => Object.values(R.packages).filter(({ name: a, shortname: d, manifest: h }) => a && d.includes(l.value) && (c.value === "all" || Kn(h.category) === c.value)));
    function r(a) {
      me.value = !1;
      let d = f.path.slice(9).replace(/@global/, "");
      d && (d += "/"), d += a + ":" + Math.random().toString(36).slice(2, 8), ie("manager/unload", d, {}), fe.push("/plugins/" + d);
    }
    return pe(me, async (a, d) => {
      !a || (await Nn(), await i.value.focus());
    }, { flush: "post" }), (a, d) => {
      const h = M("k-icon"), p = M("el-input"), v = M("k-markdown"), y = M("el-scrollbar"), F = M("el-dialog");
      return m(), O(F, {
        modelValue: E(me),
        "onUpdate:modelValue": d[1] || (d[1] = (L) => le(me) ? me.value = L : null),
        class: "plugin-select"
      }, {
        header: x(() => [
          $("span", v1, z(E(At)[c.value]) + " (" + z(E(e).length) + ")", 1),
          H(p, {
            ref_key: "input",
            ref: i,
            modelValue: l.value,
            "onUpdate:modelValue": d[0] || (d[0] = (L) => l.value = L)
          }, {
            suffix: x(() => [
              H(h, { name: "search" })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        default: x(() => [
          $("div", m1, [
            (m(!0), k(G, null, ne(E(At), (L, w) => (m(), k("span", {
              class: Ce(["tab-item", { active: c.value === w }]),
              key: w,
              onClick: de((C) => c.value = w, ["stop"])
            }, [
              H(h, {
                name: "category:" + w
              }, null, 8, ["name"]),
              $("span", C1, z(L), 1)
            ], 10, g1))), 128))
          ]),
          $("div", E1, [
            H(y, null, {
              default: x(() => [
                (m(!0), k(G, null, ne(E(e), ({ name: L, shortname: w, manifest: C }) => (m(), k("div", {
                  class: "package",
                  key: L,
                  onClick: de((g) => r(w), ["stop"])
                }, [
                  $("h3", null, z(w), 1),
                  H(v, {
                    inline: "",
                    class: "desc",
                    source: C.description.zh || C.description.en
                  }, null, 8, ["source"])
                ], 8, $1))), 128))
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const L1 = /* @__PURE__ */ re({
  __name: "progress",
  setup(s) {
    const c = N(() => ur.bail("activity", ir.market) ? !1 : !R.market || R.market.total > R.market.progress), l = N(() => R.market ? 100 * R.market.progress / R.market.total : 50);
    return (i, f) => {
      const e = M("el-progress"), r = M("k-status");
      return E(c) ? (m(), O(r, { key: 0 }, {
        default: x(() => [
          H(e, {
            indeterminate: !E(R).market,
            percentage: E(l)
          }, {
            default: x(() => [
              T(" \u6B63\u5728\u52A0\u8F7D\u63D2\u4EF6\u5E02\u573A ")
            ]),
            _: 1
          }, 8, ["indeterminate", "percentage"])
        ]),
        _: 1
      })) : U("", !0);
    };
  }
});
const w1 = {}, F1 = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, k1 = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M320 77.23L559.6 49.48C573.7 47.85 587.2 55.65 592.7 68.66L624.7 143.3C634.6 166.2 621.3 192.4 596.1 198L437.8 234.8C418.8 239.1 399.2 231.7 387.9 215.9L320 120.9L252.1 215.9C240.8 231.7 221.2 239.1 202.3 234.8L43.04 198C18.75 192.4 5.449 166.2 15.27 143.3L47.26 68.66C52.84 55.65 66.3 47.85 80.36 49.48L320 77.23zM44.68 155.9C42.72 160.5 45.38 165.7 50.24 166.9L209.4 203.6C215.7 205.1 222.3 202.6 226.1 197.3L291.2 106.1L76.68 81.27L44.68 155.9zM413.9 197.3C417.7 202.6 424.3 205.1 430.6 203.6L589.8 166.9C594.6 165.7 597.3 160.5 595.3 155.9L563.3 81.27L348.8 106.1L413.9 197.3zM544 236.7L576 227.6V378.5C576 400.5 561 419.7 539.6 425.1L331.6 477.1C324 479 316 479 308.4 477.1L100.4 425.1C78.99 419.7 64 400.5 64 378.5V227.6L96 236.7V378.5C96 385.9 100.1 392.3 108.1 394L304 443V207.1C304 199.2 311.2 191.1 320 191.1C328.8 191.1 336 199.2 336 207.1V443L531.9 394C539 392.3 544 385.9 544 378.5L544 236.7z"
}, null, -1), D1 = [
  k1
];
function A1(s, c) {
  return m(), k("svg", F1, D1);
}
const R1 = /* @__PURE__ */ W(w1, [["render", A1]]), b1 = {}, I1 = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, S1 = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M448 208c-18.53 0-36.09 10-48.16 27.42C398.9 236.8 396.3 240 392.4 240C387.8 240 384 236.3 384 231.6V176C384 149.5 362.5 128 336 128l-55.64 0C275.8 127.1 272 124.3 272 119.6c0-3.906 3.188-6.531 4.547-7.484C293.1 100.1 304 82.55 304 64c0-35.3-35.89-64-80-64S144 28.7 144 64c0 18.55 9.1 36.09 27.42 48.14C172.8 113.1 176 115.7 176 119.6c0 4.609-3.75 8.359-8.359 8.359L48 128C21.53 128 0 149.5 0 176v55.64C0 253.9 18.11 272 40.36 272c13.2 0 25.84-6.859 33.8-18.36C77.69 248.5 85.2 240 96 240c17.34 0 32 21.98 32 48s-14.66 48-32 48c-10.8 0-18.31-8.547-21.86-13.67C66.19 310.9 53.55 304 40.36 304C18.11 304 0 322.1 0 344.4V464C0 490.5 21.53 512 48 512h119.6C189.9 512 208 493.9 208 471.6c0-13.19-6.859-25.83-18.36-33.8C184.5 434.3 176 426.8 176 416c0-17.34 21.98-32 48-32s48 14.66 48 32c0 10.8-8.547 18.31-13.66 21.84C246.9 445.8 240 458.4 240 471.6C240 493.9 258.1 512 280.4 512H336c26.47 0 48-21.53 48-48v-119.6c0-4.609 3.75-8.358 8.359-8.358c3.906 0 6.547 3.203 7.484 4.547C411.9 358 429.5 368 448 368c35.3 0 64-35.89 64-80S483.3 208 448 208zM448 336c-10.8 0-18.31-8.547-21.86-13.67C418.2 310.9 405.5 304 392.4 304C370.1 304 352 322.1 352 344.4V464c0 8.828-7.172 16-16 16h-55.64C275.8 480 272 476.3 272 471.6c0-3.906 3.188-6.531 4.547-7.484C293.1 452.1 304 434.5 304 416c0-35.3-35.89-64-80-64s-80 28.7-80 64c0 18.55 9.1 36.09 27.42 48.14C172.8 465.1 176 467.7 176 471.6C176 476.3 172.3 480 167.6 480H48C39.17 480 32 472.8 32 464v-119.6C32 339.8 35.75 336 40.36 336c3.906 0 6.547 3.203 7.484 4.547C59.91 358 77.45 368 96 368c35.3 0 64-35.89 64-80S131.3 208 96 208c-18.53 0-36.09 10-48.16 27.42C46.89 236.8 44.25 240 40.36 240C35.75 240 32 236.3 32 231.6V176C32 167.2 39.17 160 48 160h119.6C189.9 160 208 141.9 208 119.6c0-13.19-6.859-25.83-18.36-33.8C184.5 82.31 176 74.8 176 64c0-17.34 21.98-32 48-32s48 14.66 48 32c0 10.8-8.547 18.31-13.66 21.84C246.9 93.8 240 106.4 240 119.6C240 141.9 258.1 160 280.4 160H336C344.8 160 352 167.2 352 176v55.64C352 253.9 370.1 272 392.4 272c13.2 0 25.84-6.859 33.8-18.36C429.7 248.5 437.2 240 448 240c17.34 0 32 21.98 32 48S465.3 336 448 336z"
}, null, -1), x1 = [
  S1
];
function V1(s, c) {
  return m(), k("svg", I1, x1);
}
const B1 = /* @__PURE__ */ W(b1, [["render", V1]]), N1 = {}, O1 = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, T1 = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M168 255.1C168 207.4 207.4 167.1 256 167.1C304.6 167.1 344 207.4 344 255.1C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 255.1zM256 199.1C225.1 199.1 200 225.1 200 255.1C200 286.9 225.1 311.1 256 311.1C286.9 311.1 312 286.9 312 255.1C312 225.1 286.9 199.1 256 199.1zM65.67 230.6L25.34 193.8C14.22 183.7 11.66 167.2 19.18 154.2L49.42 101.8C56.94 88.78 72.51 82.75 86.84 87.32L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L194.5 25.16C197.7 10.47 210.7 0 225.8 0H286.2C301.3 0 314.3 10.47 317.5 25.16L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L425.2 87.32C439.5 82.75 455.1 88.78 462.6 101.8L492.8 154.2C500.3 167.2 497.8 183.7 486.7 193.8L446.3 230.6C447.4 238.9 448 247.4 448 255.1C448 264.6 447.4 273.1 446.3 281.4L486.7 318.2C497.8 328.3 500.3 344.8 492.8 357.8L462.6 410.2C455.1 423.2 439.5 429.2 425.2 424.7L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L317.5 486.8C314.3 501.5 301.3 512 286.2 512H225.8C210.7 512 197.7 501.5 194.5 486.8L182.8 433.6C167 427 152.2 418.4 138.8 408.1L86.84 424.7C72.51 429.2 56.94 423.2 49.42 410.2L19.18 357.8C11.66 344.8 14.22 328.3 25.34 318.2L65.67 281.4C64.57 273.1 64 264.6 64 255.1C64 247.4 64.57 238.9 65.67 230.6V230.6zM158.4 129.2L145.1 139.5L77.13 117.8L46.89 170.2L99.58 218.2L97.39 234.8C96.47 241.7 96 248.8 96 255.1C96 263.2 96.47 270.3 97.39 277.2L99.58 293.8L46.89 341.8L77.13 394.2L145.1 372.5L158.4 382.8C169.5 391.4 181.9 398.6 195 403.1L210.5 410.4L225.8 480H286.2L301.5 410.4L316.1 403.1C330.1 398.6 342.5 391.4 353.6 382.8L366.9 372.5L434.9 394.2L465.1 341.8L412.4 293.8L414.6 277.2C415.5 270.3 416 263.2 416 256C416 248.8 415.5 241.7 414.6 234.8L412.4 218.2L465.1 170.2L434.9 117.8L366.9 139.5L353.6 129.2C342.5 120.6 330.1 113.4 316.1 108L301.5 101.6L286.2 32H225.8L210.5 101.6L195 108C181.9 113.4 169.5 120.6 158.4 129.2H158.4z"
}, null, -1), M1 = [
  T1
];
function q1(s, c) {
  return m(), k("svg", O1, M1);
}
const z1 = /* @__PURE__ */ W(N1, [["render", q1]]), H1 = {}, P1 = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, j1 = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M64 64C81.67 64 96 78.33 96 96C96 113.7 81.67 128 64 128C46.33 128 32 113.7 32 96C32 78.33 46.33 64 64 64zM496 80C504.8 80 512 87.16 512 96C512 104.8 504.8 112 496 112H176C167.2 112 160 104.8 160 96C160 87.16 167.2 80 176 80H496zM496 240C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H176C167.2 272 160 264.8 160 256C160 247.2 167.2 240 176 240H496zM496 400C504.8 400 512 407.2 512 416C512 424.8 504.8 432 496 432H176C167.2 432 160 424.8 160 416C160 407.2 167.2 400 176 400H496zM64 288C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224C81.67 224 96 238.3 96 256C96 273.7 81.67 288 64 288zM64 384C81.67 384 96 398.3 96 416C96 433.7 81.67 448 64 448C46.33 448 32 433.7 32 416C32 398.3 46.33 384 64 384z"
}, null, -1), G1 = [
  j1
];
function U1(s, c) {
  return m(), k("svg", P1, G1);
}
const X1 = /* @__PURE__ */ W(H1, [["render", U1]]), W1 = {}, Y1 = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, K1 = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M448 96h-64V48C384 21.53 362.5 0 336 0h-160C149.5 0 128 21.53 128 48V96H64C28.65 96 0 124.7 0 160v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160C512 124.7 483.3 96 448 96zM160 48C160 39.17 167.2 32 176 32h160C344.8 32 352 39.17 352 48V96H160V48zM480 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V288h144v64c0 8.844 7.156 16 16 16h128c8.844 0 16-7.156 16-16V288H480V416zM208 336V288h96v48H208zM480 256H32V160c0-17.64 14.36-32 32-32h384c17.64 0 32 14.36 32 32V256z"
}, null, -1), Z1 = [
  K1
];
function Q1(s, c) {
  return m(), k("svg", Y1, Z1);
}
const J1 = /* @__PURE__ */ W(W1, [["render", Q1]]), eu = {}, tu = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, nu = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M144 96C152.8 96 160 103.2 160 112C160 120.8 152.8 128 144 128H80C71.16 128 64 120.8 64 112C64 103.2 71.16 96 80 96H144zM64 176C64 167.2 71.16 160 80 160H144C152.8 160 160 167.2 160 176C160 184.8 152.8 192 144 192H80C71.16 192 64 184.8 64 176zM144 224C152.8 224 160 231.2 160 240C160 248.8 152.8 256 144 256H80C71.16 256 64 248.8 64 240C64 231.2 71.16 224 80 224H144zM448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM448 64H224V448H448C465.7 448 480 433.7 480 416V96C480 78.33 465.7 64 448 64zM32 96V416C32 433.7 46.33 448 64 448H192V64H64C46.33 64 32 78.33 32 96z"
}, null, -1), ru = [
  nu
];
function su(s, c) {
  return m(), k("svg", tu, ru);
}
const uu = /* @__PURE__ */ W(eu, [["render", su]]), iu = {}, ou = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, au = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M638.6 368.2l-33.38-211.6c-4.422-25.12-16.52-47.82-34.05-65.77s-40.5-31.18-66.62-37.36c-25.12-5.93-58.4-11.3-91.79-15.19S345.8 32 319.1 32C294.2 32 260.6 34.41 227.2 38.29S160.6 47.56 135.5 53.48C109.3 59.66 86.36 72.88 68.83 90.83S39.2 131.5 34.78 156.6l-33.38 211.6c-5.156 29.26 4.195 57.21 22.67 77.84c18.48 20.63 46.08 33.95 77.42 33.95c24.84 0 48.29-7.512 67.49-20.6c19.2-13.09 34.15-31.75 42.01-54.04l7.5-21.36h203l7.5 21.36c7.859 22.29 22.81 40.95 42.01 54.04c19.2 13.09 42.64 20.6 67.49 20.6c31.34 0 58.95-13.31 77.42-33.95C634.4 425.4 643.8 397.5 638.6 368.2zM592.1 424.7C578.8 439.5 559.3 448 538.5 448c-17.92 0-35.03-5.203-49.46-15.04c-14.1-9.615-24.43-22.84-29.84-38.2l-7.5-21.36c-4.502-12.82-16.61-21.4-30.19-21.4h-203c-13.59 0-25.69 8.58-30.19 21.4l-7.486 21.32c-5.43 15.4-15.76 28.62-29.86 38.24C136.5 442.8 119.4 448 101.5 448c-20.79 0-40.32-8.49-53.58-23.3c-12.92-14.42-18.24-32.51-14.9-51.5l33.28-211C69.52 143.9 78.31 126.9 91.72 113.2c13.69-14.02 31.37-23.9 51.13-28.56C165.1 79.17 197.3 74 230.9 70.08C264.6 66.16 296.2 64 320 64c23.75 0 55.38 2.16 89.05 6.08c33.67 3.922 64.96 9.088 88.1 14.55c.2656 .0625 .5352 .123 .8047 .1777c19.42 4.738 36.8 14.54 50.31 28.39c13.42 13.75 22.21 30.68 25.34 48.41l33.47 212.2C610.3 392.2 605 410.3 592.1 424.7zM432 248c-6.627 0-12.63 2.684-16.97 7.029c-4.344 4.344-7.029 10.35-7.029 16.97s2.685 12.62 7.029 16.96c4.344 4.346 10.34 7.038 16.97 7.038c6.629 0 12.63-2.692 16.97-7.038c4.344-4.344 7.029-10.34 7.029-16.96s-2.686-12.63-7.029-16.97C444.6 250.7 438.6 248 432 248zM496 152c-6.627 0-12.63 2.685-16.97 7.031c-4.344 4.344-7.029 10.35-7.029 16.97s2.685 12.62 7.029 16.96c4.344 4.346 10.34 7.036 16.97 7.036c6.629 0 12.63-2.69 16.97-7.036c4.344-4.344 7.029-10.34 7.029-16.96s-2.686-12.63-7.029-16.97C508.6 154.7 502.6 152 496 152zM256 208H208V160c0-8.844-7.18-16-16.02-16S176 151.2 176 160v48H128C119.2 208 111.1 215.2 111.1 224S119.2 240 128 240h48V288c0 8.844 7.132 16 15.98 16S208 296.8 208 288V240H256c8.844 0 15.98-7.156 15.98-16S264.8 208 256 208z"
}, null, -1), lu = [
  au
];
function cu(s, c) {
  return m(), k("svg", ou, lu);
}
const hu = /* @__PURE__ */ W(iu, [["render", cu]]), fu = {}, du = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, pu = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M440 84.99V212.8L440.1 212.9L544.1 249.1C563.2 256.8 576 274.9 576 295.2V421.4C576 440.8 564.3 458.3 546.4 465.7L442.4 508.8C430.6 513.6 417.4 513.6 405.6 508.8L288 460.1L170.4 508.8C158.6 513.6 145.4 513.6 133.6 508.8L29.65 465.7C11.7 458.3 0 440.8 0 421.4V295.2C0 274.9 12.76 256.8 31.87 249.1L135.9 212.9L136 212.8V84.99C136 64.7 148.8 46.6 167.9 39.78L271.9 2.669C282.3-1.054 293.7-1.054 304.1 2.669L408.1 39.78C427.2 46.6 440 64.7 440 84.99H440zM293.4 32.81C289.9 31.57 286.1 31.57 282.6 32.81L178.6 69.92C176.3 70.75 174.2 72.1 172.6 73.79L287.1 118L403.4 73.79C401.8 72.1 399.7 70.75 397.4 69.92L293.4 32.81zM168.1 212.9L271.1 249.9V146.2L167.1 106.3V212.8L168.1 212.9zM304 249.9L407.9 212.9L408 212.8V106.3L304 146.2V249.9zM159.1 348.6V478.4L271.1 432.1V308.2L159.1 348.6zM41.88 436.2L127.1 471.8V348.1L31.1 308.9V421.4C31.1 427.8 35.9 433.7 41.88 436.2V436.2zM416 348.6L304 308.2V432.1L416 478.4V348.6zM448 471.8L534.1 436.2C540.1 433.7 544 427.8 544 421.4V308.9L448 348.1V471.8zM157.4 243C153.9 241.8 150.1 241.8 146.6 243L44.55 279.4L144.4 320.2L258.5 279.1L157.4 243zM317.5 279.1L431.6 320.2L531.4 279.4L429.4 243C425.9 241.8 422.1 241.8 418.6 243L317.5 279.1z"
}, null, -1), _u = [
  pu
];
function vu(s, c) {
  return m(), k("svg", du, _u);
}
const mu = /* @__PURE__ */ W(fu, [["render", vu]]), gu = {}, Cu = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, Eu = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M224 512C100.3 512 0 476.2 0 432V80C0 35.82 100.3 0 224 0C347.7 0 448 35.82 448 80V432C448 476.2 347.7 512 224 512zM416 80.45C415.7 79.69 414.4 77.27 409.8 73.31C402.4 67.11 389.9 60.09 371.6 53.57C335.4 40.62 283.2 32 224 32C164.8 32 112.6 40.62 76.37 53.57C58.1 60.09 45.59 67.11 38.25 73.31C33.55 77.27 32.29 79.69 32 80.45V182.1C46.47 192.7 69.9 202.8 100.9 210.4C135.5 218.9 177.1 224 224 224C270 224 312.5 218.9 347.1 210.4C378.1 202.8 401.5 192.7 416 182.1V80.45zM416 219.5C398.8 228.4 377.9 235.8 354.8 241.5C317.3 250.7 272.2 256 224 256C175.8 256 130.7 250.7 93.22 241.5C70.11 235.8 49.18 228.4 32 219.5V310.1C46.47 320.7 69.9 330.8 100.9 338.4C135.5 346.9 177.1 352 224 352C270 352 312.5 346.9 347.1 338.4C378.1 330.8 401.5 320.7 416 310.1V219.5zM38.25 438.7C45.59 444.9 58.1 451.9 76.37 458.4C112.6 471.4 164.8 480 224 480C283.2 480 335.4 471.4 371.6 458.4C389.9 451.9 402.4 444.9 409.8 438.7C414.4 434.7 415.7 432.3 416 431.6V347.5C398.8 356.4 377.9 363.8 354.8 369.5C317.3 378.7 272.2 384 224 384C175.8 384 130.7 378.7 93.22 369.5C70.11 363.8 49.18 356.4 32 347.5V431.6C32.29 432.3 33.55 434.7 38.25 438.7zM416 431.4C416.1 431.3 416.1 431.3 416.1 431.3L416 431.4zM31.96 431.4C31.94 431.3 31.93 431.3 31.92 431.3L31.96 431.4zM31.96 80.56C31.93 80.65 31.92 80.7 31.92 80.7L31.96 80.56zM416.1 80.7C416.1 80.7 416.1 80.65 416 80.56z"
}, null, -1), $u = [
  Eu
];
function yu(s, c) {
  return m(), k("svg", Cu, $u);
}
const Lu = /* @__PURE__ */ W(gu, [["render", yu]]), wu = {}, Fu = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, ku = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M225.1 378.1c-5.346-9.277-17.67-11.48-25.24-3.91l-91.57 91.55c-15.01 15-38.9 18.79-56.54 6.984c-23.71-15.88-26.04-48.76-6.967-67.97l134.8-134.8c6.242-6.238 6.229-16.36-.0313-22.59C173.3 241.2 163.2 241.2 156.1 247.4l-134.7 134.7c-29.62 29.62-29.62 77.86 0 107.5c16.64 16.78 39.93 24.7 63.89 21.57c17.43-2.273 33.27-11.36 45.7-23.79l90.54-90.52c4.883-4.883 6.32-12.52 2.857-18.49C225.2 378.3 225.1 378.2 225.1 378.1zM259.8 88.66c4.697-7.82 10.35-15.14 16.98-21.8c22.75-22.62 52.62-34.87 83.87-34.87c6.875 0 13.75 .625 20.62 1.75l-69.25 69.48l13.75 82.98l83.12 13.75l69.37-69.23c6.625 38.12-5.373 76.73-33.12 104.5c-4.432 4.434-9.207 8.426-14.23 12c-7.775 5.527-8.24 16.98-1.475 23.7c5.625 5.594 14.65 6.258 21.07 1.602c6.045-4.383 11.82-9.293 17.26-14.81c37.75-37.74 52.62-91.35 39.62-143.2c-2.25-9.492-9.625-16.99-19.12-19.62s-19.62 0-26.62 7l-63.87 63.86L353.5 158.3l-7.373-44.12l63.87-63.98c6.873-6.871 9.623-16.99 6.998-26.49c-2.623-9.496-10.25-16.74-19.75-19.12c-51.62-12.88-105.2 1.875-143.1 39.61c-8.27 8.348-15.16 17.61-20.98 27.39c-3.791 6.367-3.049 14.45 2.191 19.68C242.5 98.44 254.6 97.3 259.8 88.66zM63.1 431.9c0 8.746 7.25 15.1 16 15.1s15.1-7.25 15.1-15.1s-7.248-15.1-15.1-15.1S63.1 423.1 63.1 431.9zM502.6 389.4l-124.4-124.5c-15.62-15.62-36.12-23.37-56.62-23.37c-15.38 0-30.88 4.371-44.12 13.25L191.1 169.3l.002-73.35l-127.1-95.99L0 63.1l96 127.1l73.37-.0289l85.5 85.48c-20.62 31.12-17.12 73.23 10.25 100.7l124.5 124.5C395.7 508.8 403.1 512 412.2 512c8.123 0 16.37-3.125 22.5-9.375l67.1-67.98C515.1 422.1 515.1 401.9 502.6 389.4zM159.1 159.1h-47.1L42.25 66.98L66.1 42.24l92.1 69.73V159.1zM412.1 479.9l-124.4-124.5c-9.123-9.125-14.12-21.12-14.12-33.87c0-12.88 5-24.87 14.12-33.87c9-9.125 21-14.12 33.88-14.12c12.75 0 24.88 4.996 33.87 14.12l124.5 124.3L412.1 479.9z"
}, null, -1), Du = [
  ku
];
function Au(s, c) {
  return m(), k("svg", Fu, Du);
}
const Ru = /* @__PURE__ */ W(wu, [["render", Au]]), bu = {}, Iu = {
  class: "k-icon balance",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, Su = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
}, null, -1), xu = [
  Su
];
function Vu(s, c) {
  return m(), k("svg", Iu, xu);
}
const Bu = /* @__PURE__ */ W(bu, [["render", Vu]]), Nu = {}, Ou = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, Tu = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z"
}, null, -1), Mu = [
  Tu
];
function qu(s, c) {
  return m(), k("svg", Ou, Mu);
}
const zu = /* @__PURE__ */ W(Nu, [["render", qu]]), Hu = {}, Pu = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, ju = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M466.5 83.69l-192-80.01C269.6 1.656 261.3 0 256.1 0C250.8 0 242.5 1.656 237.6 3.688l-192 80.01C27.69 91.08 16 108.6 16 127.1C16 385.2 205.2 512 255.1 512C307.1 512 496 383.8 496 127.1C496 108.6 484.3 91.08 466.5 83.69zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v112C280 277.3 269.3 288 256 288S232 277.3 232 264V152zM256 384c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32S273.7 384 256 384z"
}, null, -1), Gu = [
  ju
];
function Uu(s, c) {
  return m(), k("svg", Pu, Gu);
}
const Xu = /* @__PURE__ */ W(Hu, [["render", Uu]]), Wu = {}, Yu = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, Ku = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3c27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32H448z"
}, null, -1), Zu = [
  Ku
];
function Qu(s, c) {
  return m(), k("svg", Yu, Zu);
}
const Ju = /* @__PURE__ */ W(Wu, [["render", Qu]]), ei = {}, ti = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, ni = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M507.6 122.8c-2.904-12.09-18.25-16.13-27.04-7.338l-76.55 76.56l-83.1-.0002l0-83.1l76.55-76.56c8.791-8.789 4.75-24.14-7.336-27.04c-23.69-5.693-49.34-6.111-75.92 .2484c-61.45 14.7-109.4 66.9-119.2 129.3C189.8 160.8 192.3 186.7 200.1 210.1l-178.1 178.1c-28.12 28.12-28.12 73.69 0 101.8C35.16 504.1 53.56 512 71.1 512s36.84-7.031 50.91-21.09l178.1-178.1c23.46 7.736 49.31 10.24 76.17 6.004c62.41-9.84 114.6-57.8 129.3-119.2C513.7 172.1 513.3 146.5 507.6 122.8zM80 456c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C104 445.3 93.25 456 80 456z"
}, null, -1), ri = [
  ni
];
function si(s, c) {
  return m(), k("svg", ti, ri);
}
const ui = /* @__PURE__ */ W(ei, [["render", si]]), ii = {}, oi = {
  class: "k-icon refresh",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, ai = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M496 40v160C496 213.3 485.3 224 472 224h-160C298.8 224 288 213.3 288 200s10.75-24 24-24h100.5C382.8 118.3 322.5 80 256 80C158.1 80 80 158.1 80 256s78.97 176 176 176c41.09 0 81.09-14.47 112.6-40.75c10.16-8.5 25.31-7.156 33.81 3.062c8.5 10.19 7.125 25.31-3.062 33.81c-40.16 33.44-91.17 51.77-143.5 51.77C132.4 479.9 32 379.5 32 256s100.4-223.9 223.9-223.9c79.85 0 152.4 43.46 192.1 109.1V40c0-13.25 10.75-24 24-24S496 26.75 496 40z"
}, null, -1), li = [
  ai
];
function ci(s, c) {
  return m(), k("svg", oi, li);
}
const hi = /* @__PURE__ */ W(ii, [["render", ci]]), fi = {}, di = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, pi = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
}, null, -1), _i = [
  pi
];
function vi(s, c) {
  return m(), k("svg", di, _i);
}
const mi = /* @__PURE__ */ W(fi, [["render", vi]]), gi = {}, Ci = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, Ei = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
}, null, -1), $i = [
  Ei
];
function yi(s, c) {
  return m(), k("svg", Ci, $i);
}
const Li = /* @__PURE__ */ W(gi, [["render", yi]]), wi = {}, Fi = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, ki = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8zM287.1 384.7C291.9 384.7 295.7 385.6 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.1 79.09L287.1 384.7z"
}, null, -1), Di = [
  ki
];
function Ai(s, c) {
  return m(), k("svg", Fi, Di);
}
const Ri = /* @__PURE__ */ W(wi, [["render", Ai]]), bi = {}, Ii = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, Si = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M256 0C292.8 0 324.8 20.7 340.9 51.1C373.8 40.1 410.1 48.96 437 74.98C463 101 470.1 138.2 460.9 171.1C491.3 187.2 512 219.2 512 256C512 292.8 491.3 324.8 460.9 340.9C471 373.8 463 410.1 437 437C410.1 463 373.8 470.1 340.9 460.9C324.8 491.3 292.8 512 256 512C219.2 512 187.2 491.3 171.1 460.9C138.2 471 101 463 74.98 437C48.96 410.1 41 373.8 51.1 340.9C20.7 324.8 0 292.8 0 256C0 219.2 20.7 187.2 51.1 171.1C40.1 138.2 48.96 101 74.98 74.98C101 48.96 138.2 41 171.1 51.1C187.2 20.7 219.2 0 256 0V0zM352.1 224.1C362.3 215.6 362.3 200.4 352.1 191C343.6 181.7 328.4 181.7 319 191L224 286.1L184.1 247C175.6 237.7 160.4 237.7 151 247C141.7 256.4 141.7 271.6 151 280.1L207 336.1C216.4 346.3 231.6 346.3 240.1 336.1L352.1 224.1z"
}, null, -1), xi = [
  Si
];
function Vi(s, c) {
  return m(), k("svg", Ii, xi);
}
const Bi = /* @__PURE__ */ W(bi, [["render", Vi]]), Ni = {}, Oi = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, Ti = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M452 60H488C499 60 508 68.95 508 80C508 91.05 499 100 488 100H452V136C452 147 443 156 432 156C420.1 156 412 147 412 136V100H376C364.1 100 356 91.05 356 80C356 68.95 364.1 60 376 60H412V24C412 12.95 420.1 4 432 4C443 4 452 12.95 452 24V60zM280.8 133.1L490.1 222.8C503.4 228.5 512 241.5 512 256C512 270.5 503.4 283.5 490.1 289.2L280.8 378.9C272.1 382.3 264.5 384 256 384C247.5 384 239 382.3 231.2 378.9L21.9 289.2C8.614 283.5 0 270.5 0 256C0 241.5 8.614 228.5 21.9 222.8L231.2 133.1C239 129.7 247.5 128 256 128C264.5 128 272.1 129.7 280.8 133.1V133.1zM66.26 256L250.1 334.8C251.1 335.6 253.1 336 256 336C258 336 260 335.6 261.9 334.8L445.7 256L261.9 177.2C260 176.4 258 176 256 176C253.1 176 251.1 176.4 250.1 177.2L66.26 256zM59.53 350.6C66.15 359.9 65.24 372.3 57.1 380.5L250.1 462.8C251.1 463.6 253.1 464 256 464C258 464 260 463.6 261.9 462.8L452 381.3C447.4 374.4 446.5 365.2 450.5 357.3C456.5 345.4 470.9 340.6 482.7 346.5L491.8 351.1C504.2 357.3 512 369.9 512 383.7C512 398.4 503.3 411.6 489.9 417.3L280.8 506.9C272.1 510.3 264.5 512 256 512C247.5 512 239 510.3 231.2 506.9L22.81 417.6C8.971 411.7 .001 398.1 .001 383C.001 370.9 5.87 359.5 15.76 352.4L26.05 345C36.84 337.3 51.83 339.8 59.53 350.6L59.53 350.6z"
}, null, -1), Mi = [
  Ti
];
function qi(s, c) {
  return m(), k("svg", Oi, Mi);
}
const zi = /* @__PURE__ */ W(Ni, [["render", qi]]), Hi = {}, Pi = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, ji = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: `M144,0c13.3,0,24,10.8,24,24v88h-48V24C120,10.8,130.8,0,144,0z M336,0c13.3,0,24,10.8,24,24v88h-48V24
      C312,10.8,322.7,0,336,0z M408,144c13.3,0,24,10.7,24,24s-10.7,24-24,24h-8v64c0,80.2-59.9,146.6-136,158.2V512h-48v-97.8
      c-77-11.6-136-78-136-158.2v-64h-8c-13.2,0-24-10.7-24-24s10.8-24,24-24H408z M240,368c61.9,0,112-50.1,112-112v-64H128v64
      C128,317.9,178.1,368,240,368z`
}, null, -1), Gi = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: `M444,416h36c11,0,20,9,20,20s-9,20-20,20h-36v36c0,11-9,20-20,20c-11.9,0-20-9-20-20v-36h-36c-11.9,0-20-9-20-20
      s8.1-20,20-20h36v-36c0-11,8.1-20,20-20c11,0,20,9,20,20V416z`
}, null, -1), Ui = [
  ji,
  Gi
];
function Xi(s, c) {
  return m(), k("svg", Pi, Ui);
}
const Wi = /* @__PURE__ */ W(Hi, [["render", Xi]]), Yi = {}, Ki = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, Zi = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M160 400C160 408.8 152.8 416 144 416C135.2 416 128 408.8 128 400V192C128 183.2 135.2 176 144 176C152.8 176 160 183.2 160 192V400zM240 400C240 408.8 232.8 416 224 416C215.2 416 208 408.8 208 400V192C208 183.2 215.2 176 224 176C232.8 176 240 183.2 240 192V400zM320 400C320 408.8 312.8 416 304 416C295.2 416 288 408.8 288 400V192C288 183.2 295.2 176 304 176C312.8 176 320 183.2 320 192V400zM317.5 24.94L354.2 80H424C437.3 80 448 90.75 448 104C448 117.3 437.3 128 424 128H416V432C416 476.2 380.2 512 336 512H112C67.82 512 32 476.2 32 432V128H24C10.75 128 0 117.3 0 104C0 90.75 10.75 80 24 80H93.82L130.5 24.94C140.9 9.357 158.4 0 177.1 0H270.9C289.6 0 307.1 9.358 317.5 24.94H317.5zM151.5 80H296.5L277.5 51.56C276 49.34 273.5 48 270.9 48H177.1C174.5 48 171.1 49.34 170.5 51.56L151.5 80zM80 432C80 449.7 94.33 464 112 464H336C353.7 464 368 449.7 368 432V128H80V432z"
}, null, -1), Qi = [
  Zi
];
function Ji(s, c) {
  return m(), k("svg", Ki, Qi);
}
const e2 = /* @__PURE__ */ W(Yi, [["render", Ji]]), t2 = {}, n2 = {
  class: "k-icon check",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, r2 = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"
}, null, -1), s2 = [
  r2
];
function u2(s, c) {
  return m(), k("svg", n2, s2);
}
const i2 = /* @__PURE__ */ W(t2, [["render", u2]]), o2 = {}, a2 = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
}, l2 = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13V38.13zM48 432L336 256L48 80V432z"
}, null, -1), c2 = [
  l2
];
function h2(s, c) {
  return m(), k("svg", a2, c2);
}
const f2 = /* @__PURE__ */ W(o2, [["render", h2]]), d2 = {}, p2 = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 384 512"
}, _2 = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M320 64H64c-35.35 0-64 28.65-64 64v255.1c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V128C384 92.65 355.3 64 320 64zM336 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V128c0-8.822 7.178-16 16-16h256c8.822 0 16 7.178 16 16V384z"
}, null, -1), v2 = [
  _2
];
function m2(s, c) {
  return m(), k("svg", p2, v2);
}
const g2 = /* @__PURE__ */ W(d2, [["render", m2]]), C2 = {}, E2 = {
  class: "k-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, $2 = /* @__PURE__ */ $("path", {
  fill: "currentColor",
  d: "M224 256c-35.2 0-64 28.8-64 64c0 35.2 28.8 64 64 64c35.2 0 64-28.8 64-64C288 284.8 259.2 256 224 256zM433.1 129.1l-83.9-83.9C341.1 37.06 328.8 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 151.2 442.9 138.9 433.1 129.1zM128 80h144V160H128V80zM400 416c0 8.836-7.164 16-16 16H64c-8.836 0-16-7.164-16-16V96c0-8.838 7.164-16 16-16h16v104c0 13.25 10.75 24 24 24h192C309.3 208 320 197.3 320 184V83.88l78.25 78.25C399.4 163.2 400 164.8 400 166.3V416z"
}, null, -1), y2 = [
  $2
];
function L2(s, c) {
  return m(), k("svg", E2, y2);
}
const w2 = /* @__PURE__ */ W(C2, [["render", L2]]);
Y.register("activity:deps", R1);
Y.register("activity:market", B1);
Y.register("activity:plugin", z1);
Y.register("category:all", X1);
Y.register("category:business", J1);
Y.register("category:console", uu);
Y.register("category:game", hu);
Y.register("category:other", mu);
Y.register("category:storage", Lu);
Y.register("category:tool", Ru);
Y.register("balance", Bu);
Y.register("download", zu);
Y.register("insecure", Xu);
Y.register("newborn", Ju);
Y.register("preview", ui);
Y.register("refresh", hi);
Y.register("star-empty", mi);
Y.register("star-full", Li);
Y.register("star-half", Ri);
Y.register("verified", Bi);
Y.register("add-plugin", Wi);
Y.register("add-group", zi);
Y.register("trash-can", e2);
Y.register("check", i2);
Y.register("play", f2);
Y.register("stop", g2);
Y.register("save", w2);
or("market/patch", (s) => {
  var c;
  R.market = {
    ...s,
    data: {
      ...(c = R.market) == null ? void 0 : c.data,
      ...s.data
    }
  };
});
const A2 = (s) => {
  s.slot({
    type: "welcome-choice",
    component: re(() => () => Se("div", {
      class: "choice",
      onClick: () => fe.push("/market")
    }, [
      Se("h2", "\u6D4F\u89C8\u63D2\u4EF6"),
      Se("p", "\u6D4F\u89C8\u63D2\u4EF6\u5E02\u573A\u4E2D\u7684\u63D2\u4EF6\uFF0C\u5E76\u6839\u636E\u81EA\u5DF1\u7684\u9700\u8981\u5B89\u88C5\u548C\u914D\u7F6E\u3002")
    ]))
  }), s.slot({
    type: "global",
    component: Zr
  }), s.slot({
    type: "global",
    component: y1
  }), s.slot({
    type: "status-right",
    component: L1,
    order: 10
  }), s.page({
    path: "/plugins/:name*",
    name: "\u63D2\u4EF6\u914D\u7F6E",
    icon: "activity:plugin",
    order: 800,
    authority: 4,
    fields: ["config", "packages"],
    component: Ts
  }), s.page({
    id: "market",
    path: "/market",
    name: "\u63D2\u4EF6\u5E02\u573A",
    icon: "activity:market",
    order: 750,
    authority: 4,
    component: _1
  }), s.page({
    path: "/dependencies",
    name: "\u4F9D\u8D56\u7BA1\u7406",
    icon: "activity:deps",
    order: 700,
    authority: 4,
    fields: ["dependencies"],
    component: is
  });
};
export {
  A2 as default
};
