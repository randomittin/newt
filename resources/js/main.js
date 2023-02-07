/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */ !(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ''),
    n((n.s = 130));
})([
  function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n('object' == typeof globalThis && globalThis) ||
        n('object' == typeof window && window) ||
        n('object' == typeof self && self) ||
        n('object' == typeof e && e) ||
        (function () {
          return this;
        })() ||
        Function('return this')();
    }.call(this, n(25)));
  },
  function (t, e) {
    t.exports = function (t) {
      return t && t.__esModule ? t : { default: t };
    };
  },
  function (t, e) {
    var n = Array.isArray;
    t.exports = n;
  },
  function (t, e, n) {
    'use strict';
    var r = {},
      i = {},
      o = [],
      a = window.Webflow || [],
      u = window.jQuery,
      c = u(window),
      s = u(document),
      f = u.isFunction,
      l = (r._ = n(132)),
      d = (r.tram = n(69) && u.tram),
      p = !1,
      v = !1;
    function h(t) {
      r.env() &&
        (f(t.design) && c.on('__wf_design', t.design),
        f(t.preview) && c.on('__wf_preview', t.preview)),
        f(t.destroy) && c.on('__wf_destroy', t.destroy),
        t.ready &&
          f(t.ready) &&
          (function (t) {
            if (p) return void t.ready();
            if (l.contains(o, t.ready)) return;
            o.push(t.ready);
          })(t);
    }
    function E(t) {
      f(t.design) && c.off('__wf_design', t.design),
        f(t.preview) && c.off('__wf_preview', t.preview),
        f(t.destroy) && c.off('__wf_destroy', t.destroy),
        t.ready &&
          f(t.ready) &&
          (function (t) {
            o = l.filter(o, function (e) {
              return e !== t.ready;
            });
          })(t);
    }
    (d.config.hideBackface = !1),
      (d.config.keepInherited = !0),
      (r.define = function (t, e, n) {
        i[t] && E(i[t]);
        var r = (i[t] = e(u, l, n) || {});
        return h(r), r;
      }),
      (r.require = function (t) {
        return i[t];
      }),
      (r.push = function (t) {
        p ? f(t) && t() : a.push(t);
      }),
      (r.env = function (t) {
        var e = window.__wf_design,
          n = void 0 !== e;
        return t
          ? 'design' === t
            ? n && e
            : 'preview' === t
            ? n && !e
            : 'slug' === t
            ? n && window.__wf_slug
            : 'editor' === t
            ? window.WebflowEditor
            : 'test' === t
            ? window.__wf_test
            : 'frame' === t
            ? window !== window.top
            : void 0
          : n;
      });
    var g,
      y = navigator.userAgent.toLowerCase(),
      _ = (r.env.touch =
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      m = (r.env.chrome =
        /chrome/.test(y) &&
        /Google/.test(navigator.vendor) &&
        parseInt(y.match(/chrome\/(\d+)\./)[1], 10)),
      I = (r.env.ios = /(ipod|iphone|ipad)/.test(y));
    (r.env.safari = /safari/.test(y) && !m && !I),
      _ &&
        s.on('touchstart mousedown', function (t) {
          g = t.target;
        }),
      (r.validClick = _
        ? function (t) {
            return t === g || u.contains(t, g);
          }
        : function () {
            return !0;
          });
    var b,
      T = 'resize.webflow orientationchange.webflow load.webflow';
    function w(t, e) {
      var n = [],
        r = {};
      return (
        (r.up = l.throttle(function (t) {
          l.each(n, function (e) {
            e(t);
          });
        })),
        t && e && t.on(e, r.up),
        (r.on = function (t) {
          'function' == typeof t && (l.contains(n, t) || n.push(t));
        }),
        (r.off = function (t) {
          n = arguments.length
            ? l.filter(n, function (e) {
                return e !== t;
              })
            : [];
        }),
        r
      );
    }
    function O(t) {
      f(t) && t();
    }
    function A() {
      b && (b.reject(), c.off('load', b.resolve)),
        (b = new u.Deferred()),
        c.on('load', b.resolve);
    }
    (r.resize = w(c, T)),
      (r.scroll = w(
        c,
        'scroll.webflow resize.webflow orientationchange.webflow load.webflow'
      )),
      (r.redraw = w()),
      (r.location = function (t) {
        window.location = t;
      }),
      r.env() && (r.location = function () {}),
      (r.ready = function () {
        (p = !0),
          v ? ((v = !1), l.each(i, h)) : l.each(o, O),
          l.each(a, O),
          r.resize.up();
      }),
      (r.load = function (t) {
        b.then(t);
      }),
      (r.destroy = function (t) {
        (t = t || {}),
          (v = !0),
          c.triggerHandler('__wf_destroy'),
          null != t.domready && (p = t.domready),
          l.each(i, E),
          r.resize.off(),
          r.scroll.off(),
          r.redraw.off(),
          (o = []),
          (a = []),
          'pending' === b.state() && A();
      }),
      u(r.ready),
      A(),
      (t.exports = window.Webflow = r);
  },
  function (t, e, n) {
    'use strict';
    var r = n(18);
    Object.defineProperty(e, '__esModule', { value: !0 });
    var i = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var o = n(189);
    Object.keys(o).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return o[t];
            }
          }));
    });
    var a = n(95);
    Object.keys(a).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return a[t];
            }
          }));
    });
    var u = n(190);
    Object.keys(u).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return u[t];
            }
          }));
    });
    var c = n(191);
    Object.keys(c).forEach(function (t) {
      'default' !== t &&
        '__esModule' !== t &&
        (Object.prototype.hasOwnProperty.call(i, t) ||
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            }
          }));
    });
    var s = r(n(192));
    e.IX2EngineActionTypes = s;
    var f = r(n(193));
    e.IX2EngineConstants = f;
  },
  function (t, e) {
    var n = Function.prototype,
      r = n.bind,
      i = n.call,
      o = r && r.bind(i);
    t.exports = r
      ? function (t) {
          return t && o(i, t);
        }
      : function (t) {
          return (
            t &&
            function () {
              return i.apply(t, arguments);
            }
          );
        };
  },
  function (t, e, n) {
    var r = n(100),
      i = 'object' == typeof self && self && self.Object === Object && self,
      o = r || i || Function('return this')();
    t.exports = o;
  },
  function (t, e) {
    t.exports = function (t) {
      return 'function' == typeof t;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    };
  },
  function (t, e, n) {
    var r = n(5),
      i = n(157),
      o = r({}.hasOwnProperty);
    t.exports =
      Object.hasOwn ||
      function (t, e) {
        return o(i(t), e);
      };
  },
  function (t, e, n) {
    var r = n(196),
      i = n(250),
      o = n(63),
      a = n(2),
      u = n(259);
    t.exports = function (t) {
      return 'function' == typeof t
        ? t
        : null == t
        ? o
        : 'object' == typeof t
        ? a(t)
          ? i(t[0], t[1])
          : r(t)
        : u(t);
    };
  },
  function (t, e, n) {
    var r = n(208),
      i = n(213);
    t.exports = function (t, e) {
      var n = i(t, e);
      return r(n) ? n : void 0;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return null != t && 'object' == typeof t;
    };
  },
  function (t, e, n) {
    var r = n(19);
    t.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          }
        })[1]
      );
    });
  },
  function (t, e, n) {
    'use strict';
    var r = n(18);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.IX2VanillaUtils =
        e.IX2VanillaPlugins =
        e.IX2ElementsReducer =
        e.IX2EasingUtils =
        e.IX2Easings =
        e.IX2BrowserSupport =
          void 0);
    var i = r(n(48));
    e.IX2BrowserSupport = i;
    var o = r(n(117));
    e.IX2Easings = o;
    var a = r(n(119));
    e.IX2EasingUtils = a;
    var u = r(n(268));
    e.IX2ElementsReducer = u;
    var c = r(n(121));
    e.IX2VanillaPlugins = c;
    var s = r(n(270));
    e.IX2VanillaUtils = s;
  },
  function (t, e, n) {
    var r = n(23),
      i = n(209),
      o = n(210),
      a = '[object Null]',
      u = '[object Undefined]',
      c = r ? r.toStringTag : void 0;
    t.exports = function (t) {
      return null == t
        ? void 0 === t
          ? u
          : a
        : c && c in Object(t)
        ? i(t)
        : o(t);
    };
  },
  function (t, e, n) {
    var r = n(99),
      i = n(56);
    t.exports = function (t) {
      return null != t && i(t.length) && !r(t);
    };
  },
  function (t, e) {
    function n(t) {
      return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            })(t);
    }
    function r(e) {
      return (
        'function' == typeof Symbol && 'symbol' === n(Symbol.iterator)
          ? (t.exports = r =
              function (t) {
                return n(t);
              })
          : (t.exports = r =
              function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : n(t);
              }),
        r(e)
      );
    }
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t)
        for (var n in t)
          if (Object.prototype.hasOwnProperty.call(t, n)) {
            var r =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(t, n)
                : {};
            r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
          }
      return (e.default = t), e;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    var r = n(7);
    t.exports = function (t) {
      return 'object' == typeof t ? null !== t : r(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = n),
        t
      );
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 });
    var r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              'function' == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          };
    (e.clone = c),
      (e.addLast = l),
      (e.addFirst = d),
      (e.removeLast = p),
      (e.removeFirst = v),
      (e.insert = h),
      (e.removeAt = E),
      (e.replaceAt = g),
      (e.getIn = y),
      (e.set = _),
      (e.setIn = m),
      (e.update = I),
      (e.updateIn = b),
      (e.merge = T),
      (e.mergeDeep = w),
      (e.mergeIn = O),
      (e.omit = A),
      (e.addDefaults = S);
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = 'INVALID_ARGS';
    function o(t) {
      throw new Error(t);
    }
    function a(t) {
      var e = Object.keys(t);
      return Object.getOwnPropertySymbols
        ? e.concat(Object.getOwnPropertySymbols(t))
        : e;
    }
    var u = {}.hasOwnProperty;
    function c(t) {
      if (Array.isArray(t)) return t.slice();
      for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
        var i = e[r];
        n[i] = t[i];
      }
      return n;
    }
    function s(t, e, n) {
      var r = n;
      null == r && o(i);
      for (
        var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3;
        p < l;
        p++
      )
        d[p - 3] = arguments[p];
      for (var v = 0; v < d.length; v++) {
        var h = d[v];
        if (null != h) {
          var E = a(h);
          if (E.length)
            for (var g = 0; g <= E.length; g++) {
              var y = E[g];
              if (!t || void 0 === r[y]) {
                var _ = h[y];
                e && f(r[y]) && f(_) && (_ = s(t, e, r[y], _)),
                  void 0 !== _ &&
                    _ !== r[y] &&
                    (u || ((u = !0), (r = c(r))), (r[y] = _));
              }
            }
        }
      }
      return r;
    }
    function f(t) {
      var e = void 0 === t ? 'undefined' : r(t);
      return null != t && ('object' === e || 'function' === e);
    }
    function l(t, e) {
      return Array.isArray(e) ? t.concat(e) : t.concat([e]);
    }
    function d(t, e) {
      return Array.isArray(e) ? e.concat(t) : [e].concat(t);
    }
    function p(t) {
      return t.length ? t.slice(0, t.length - 1) : t;
    }
    function v(t) {
      return t.length ? t.slice(1) : t;
    }
    function h(t, e, n) {
      return t
        .slice(0, e)
        .concat(Array.isArray(n) ? n : [n])
        .concat(t.slice(e));
    }
    function E(t, e) {
      return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
    }
    function g(t, e, n) {
      if (t[e] === n) return t;
      for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
      return (i[e] = n), i;
    }
    function y(t, e) {
      if ((!Array.isArray(e) && o(i), null != t)) {
        for (var n = t, r = 0; r < e.length; r++) {
          var a = e[r];
          if (void 0 === (n = null != n ? n[a] : void 0)) return n;
        }
        return n;
      }
    }
    function _(t, e, n) {
      var r = null == t ? ('number' == typeof e ? [] : {}) : t;
      if (r[e] === n) return r;
      var i = c(r);
      return (i[e] = n), i;
    }
    function m(t, e, n) {
      return e.length
        ? (function t(e, n, r, i) {
            var o = void 0,
              a = n[i];
            o =
              i === n.length - 1
                ? r
                : t(
                    f(e) && f(e[a])
                      ? e[a]
                      : 'number' == typeof n[i + 1]
                      ? []
                      : {},
                    n,
                    r,
                    i + 1
                  );
            return _(e, a, o);
          })(t, e, n, 0)
        : n;
    }
    function I(t, e, n) {
      return _(t, e, n(null == t ? void 0 : t[e]));
    }
    function b(t, e, n) {
      return m(t, e, n(y(t, e)));
    }
    function T(t, e, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u))
        : s(!1, !1, t, e, n, r, i, o);
    }
    function w(t, e, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u))
        : s(!1, !0, t, e, n, r, i, o);
    }
    function O(t, e, n, r, i, o, a) {
      var u = y(t, e);
      null == u && (u = {});
      for (
        var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7;
        l < c;
        l++
      )
        f[l - 7] = arguments[l];
      return m(
        t,
        e,
        f.length
          ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f))
          : s(!1, !1, u, n, r, i, o, a)
      );
    }
    function A(t, e) {
      for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
        if (u.call(t, n[i])) {
          r = !0;
          break;
        }
      if (!r) return t;
      for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
        var f = c[s];
        n.indexOf(f) >= 0 || (o[f] = t[f]);
      }
      return o;
    }
    function S(t, e, n, r, i, o) {
      for (
        var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
        c < a;
        c++
      )
        u[c - 6] = arguments[c];
      return u.length
        ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u))
        : s(!0, !1, t, e, n, r, i, o);
    }
    var x = {
      clone: c,
      addLast: l,
      addFirst: d,
      removeLast: p,
      removeFirst: v,
      insert: h,
      removeAt: E,
      replaceAt: g,
      getIn: y,
      set: _,
      setIn: m,
      update: I,
      updateIn: b,
      merge: T,
      mergeDeep: w,
      mergeIn: O,
      omit: A,
      addDefaults: S
    };
    e.default = x;
  },
  function (t, e, n) {
    var r = n(6).Symbol;
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(38),
      i = 1 / 0;
    t.exports = function (t) {
      if ('string' == typeof t || r(t)) return t;
      var e = t + '';
      return '0' == e && 1 / t == -i ? '-0' : e;
    };
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (t) {
      'object' == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(146),
      i = n(73);
    t.exports = function (t) {
      return r(i(t));
    };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(7);
    t.exports = function (t, e) {
      return arguments.length < 2
        ? ((n = r[t]), i(n) ? n : void 0)
        : r[t] && r[t][e];
      var n;
    };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(13),
      o = n(81),
      a = n(29),
      u = n(74),
      c = r.TypeError,
      s = Object.defineProperty;
    e.f = i
      ? s
      : function (t, e, n) {
          if ((a(t), (e = u(e)), a(n), o))
            try {
              return s(t, e, n);
            } catch (t) {}
          if ('get' in n || 'set' in n) throw c('Accessors not supported');
          return 'value' in n && (t[e] = n.value), t;
        };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(20),
      o = r.String,
      a = r.TypeError;
    t.exports = function (t) {
      if (i(t)) return t;
      throw a(o(t) + ' is not an object');
    };
  },
  function (t, e) {
    function n() {
      return (
        (t.exports = n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }),
        n.apply(this, arguments)
      );
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(198),
      i = n(199),
      o = n(200),
      a = n(201),
      u = n(202);
    function c(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (t.exports = c);
  },
  function (t, e, n) {
    var r = n(49);
    t.exports = function (t, e) {
      for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
      return -1;
    };
  },
  function (t, e, n) {
    var r = n(11)(Object, 'create');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(222);
    t.exports = function (t, e) {
      var n = t.__data__;
      return r(e) ? n['string' == typeof e ? 'string' : 'hash'] : n.map;
    };
  },
  function (t, e, n) {
    var r = n(107),
      i = n(57),
      o = n(16);
    t.exports = function (t) {
      return o(t) ? r(t) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(240),
      i = n(12),
      o = Object.prototype,
      a = o.hasOwnProperty,
      u = o.propertyIsEnumerable,
      c = r(
        (function () {
          return arguments;
        })()
      )
        ? r
        : function (t) {
            return i(t) && a.call(t, 'callee') && !u.call(t, 'callee');
          };
    t.exports = c;
  },
  function (t, e, n) {
    var r = n(2),
      i = n(62),
      o = n(251),
      a = n(254);
    t.exports = function (t, e) {
      return r(t) ? t : i(t, e) ? [t] : o(a(t));
    };
  },
  function (t, e, n) {
    var r = n(15),
      i = n(12),
      o = '[object Symbol]';
    t.exports = function (t) {
      return 'symbol' == typeof t || (i(t) && r(t) == o);
    };
  },
  function (t, e, n) {
    'use strict';
    var r = window.jQuery,
      i = {},
      o = [],
      a = {
        reset: function (t, e) {
          e.__wf_intro = null;
        },
        intro: function (t, e) {
          e.__wf_intro ||
            ((e.__wf_intro = !0), r(e).triggerHandler(i.types.INTRO));
        },
        outro: function (t, e) {
          e.__wf_intro &&
            ((e.__wf_intro = null), r(e).triggerHandler(i.types.OUTRO));
        }
      };
    (i.triggers = {}),
      (i.types = { INTRO: 'w-ix-intro.w-ix', OUTRO: 'w-ix-outro.w-ix' }),
      (i.init = function () {
        for (var t = o.length, e = 0; e < t; e++) {
          var n = o[e];
          n[0](0, n[1]);
        }
        (o = []), r.extend(i.triggers, a);
      }),
      (i.async = function () {
        for (var t in a) {
          var e = a[t];
          a.hasOwnProperty(t) &&
            (i.triggers[t] = function (t, n) {
              o.push([e, n]);
            });
        }
      }),
      i.async(),
      (t.exports = i);
  },
  function (t, e) {
    var n = Function.prototype.call;
    t.exports = n.bind
      ? n.bind(n)
      : function () {
          return n.apply(n, arguments);
        };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(42),
      o = r['__core-js_shared__'] || i('__core-js_shared__', {});
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(0),
      i = Object.defineProperty;
    t.exports = function (t, e) {
      try {
        i(r, t, { value: e, configurable: !0, writable: !0 });
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(13),
      i = n(28),
      o = n(72);
    t.exports = r
      ? function (t, e, n) {
          return i.f(t, e, o(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e) {
    t.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ];
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      n.d(e, 'ActionTypes', function () {
        return o;
      }),
      n.d(e, 'default', function () {
        return a;
      });
    var r = n(89),
      i = n(184),
      o = { INIT: '@@redux/INIT' };
    function a(t, e, n) {
      var u;
      if (
        ('function' == typeof e && void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n)
      ) {
        if ('function' != typeof n)
          throw new Error('Expected the enhancer to be a function.');
        return n(a)(t, e);
      }
      if ('function' != typeof t)
        throw new Error('Expected the reducer to be a function.');
      var c = t,
        s = e,
        f = [],
        l = f,
        d = !1;
      function p() {
        l === f && (l = f.slice());
      }
      function v() {
        return s;
      }
      function h(t) {
        if ('function' != typeof t)
          throw new Error('Expected listener to be a function.');
        var e = !0;
        return (
          p(),
          l.push(t),
          function () {
            if (e) {
              (e = !1), p();
              var n = l.indexOf(t);
              l.splice(n, 1);
            }
          }
        );
      }
      function E(t) {
        if (!Object(r.default)(t))
          throw new Error(
            'Actions must be plain objects. Use custom middleware for async actions.'
          );
        if (void 0 === t.type)
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (d) throw new Error('Reducers may not dispatch actions.');
        try {
          (d = !0), (s = c(s, t));
        } finally {
          d = !1;
        }
        for (var e = (f = l), n = 0; n < e.length; n++) e[n]();
        return t;
      }
      return (
        E({ type: o.INIT }),
        ((u = {
          dispatch: E,
          subscribe: h,
          getState: v,
          replaceReducer: function (t) {
            if ('function' != typeof t)
              throw new Error('Expected the nextReducer to be a function.');
            (c = t), E({ type: o.INIT });
          }
        })[i.default] = function () {
          var t,
            e = h;
          return (
            ((t = {
              subscribe: function (t) {
                if ('object' != typeof t)
                  throw new TypeError('Expected the observer to be an object.');
                function n() {
                  t.next && t.next(v());
                }
                return n(), { unsubscribe: e(n) };
              }
            })[i.default] = function () {
              return this;
            }),
            t
          );
        }),
        u
      );
    }
  },
  function (t, e, n) {
    'use strict';
    function r() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      if (0 === e.length)
        return function (t) {
          return t;
        };
      if (1 === e.length) return e[0];
      var r = e[e.length - 1],
        i = e.slice(0, -1);
      return function () {
        return i.reduceRight(function (t, e) {
          return e(t);
        }, r.apply(void 0, arguments));
      };
    }
    n.r(e),
      n.d(e, 'default', function () {
        return r;
      });
  },
  function (t, e, n) {
    'use strict';
    var r = n(1);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.TRANSFORM_STYLE_PREFIXED =
        e.TRANSFORM_PREFIXED =
        e.FLEX_PREFIXED =
        e.ELEMENT_MATCHES =
        e.withBrowser =
        e.IS_BROWSER_ENV =
          void 0);
    var i = r(n(96)),
      o = 'undefined' != typeof window;
    e.IS_BROWSER_ENV = o;
    var a = function (t, e) {
      return o ? t() : e;
    };
    e.withBrowser = a;
    var u = a(function () {
      return (0,
      i.default)(['matches', 'matchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector', 'webkitMatchesSelector'], function (t) {
        return t in Element.prototype;
      });
    });
    e.ELEMENT_MATCHES = u;
    var c = a(function () {
      var t = document.createElement('i'),
        e = ['flex', '-webkit-flex', '-ms-flexbox', '-moz-box', '-webkit-box'];
      try {
        for (var n = e.length, r = 0; r < n; r++) {
          var i = e[r];
          if (((t.style.display = i), t.style.display === i)) return i;
        }
        return '';
      } catch (t) {
        return '';
      }
    }, 'flex');
    e.FLEX_PREFIXED = c;
    var s = a(function () {
      var t = document.createElement('i');
      if (null == t.style.transform)
        for (var e = ['Webkit', 'Moz', 'ms'], n = e.length, r = 0; r < n; r++) {
          var i = e[r] + 'Transform';
          if (void 0 !== t.style[i]) return i;
        }
      return 'transform';
    }, 'transform');
    e.TRANSFORM_PREFIXED = s;
    var f = s.split('transform')[0],
      l = f ? f + 'TransformStyle' : 'transformStyle';
    e.TRANSFORM_STYLE_PREFIXED = l;
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t === e || (t != t && e != e);
    };
  },
  function (t, e, n) {
    var r = n(11)(n(6), 'Map');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(214),
      i = n(221),
      o = n(223),
      a = n(224),
      u = n(225);
    function c(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (t.exports = c);
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
      return t;
    };
  },
  function (t, e, n) {
    (function (t) {
      var r = n(6),
        i = n(241),
        o = e && !e.nodeType && e,
        a = o && 'object' == typeof t && t && !t.nodeType && t,
        u = a && a.exports === o ? r.Buffer : void 0,
        c = (u ? u.isBuffer : void 0) || i;
      t.exports = c;
    }.call(this, n(108)(t)));
  },
  function (t, e) {
    var n = 9007199254740991,
      r = /^(?:0|[1-9]\d*)$/;
    t.exports = function (t, e) {
      var i = typeof t;
      return (
        !!(e = null == e ? n : e) &&
        ('number' == i || ('symbol' != i && r.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
      );
    };
  },
  function (t, e, n) {
    var r = n(242),
      i = n(243),
      o = n(244),
      a = o && o.isTypedArray,
      u = a ? i(a) : r;
    t.exports = u;
  },
  function (t, e) {
    var n = 9007199254740991;
    t.exports = function (t) {
      return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= n;
    };
  },
  function (t, e, n) {
    var r = n(58),
      i = n(245),
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (!r(t)) return i(t);
      var e = [];
      for (var n in Object(t)) o.call(t, n) && 'constructor' != n && e.push(n);
      return e;
    };
  },
  function (t, e) {
    var n = Object.prototype;
    t.exports = function (t) {
      var e = t && t.constructor;
      return t === (('function' == typeof e && e.prototype) || n);
    };
  },
  function (t, e, n) {
    var r = n(246),
      i = n(50),
      o = n(247),
      a = n(248),
      u = n(110),
      c = n(15),
      s = n(101),
      f = s(r),
      l = s(i),
      d = s(o),
      p = s(a),
      v = s(u),
      h = c;
    ((r && '[object DataView]' != h(new r(new ArrayBuffer(1)))) ||
      (i && '[object Map]' != h(new i())) ||
      (o && '[object Promise]' != h(o.resolve())) ||
      (a && '[object Set]' != h(new a())) ||
      (u && '[object WeakMap]' != h(new u()))) &&
      (h = function (t) {
        var e = c(t),
          n = '[object Object]' == e ? t.constructor : void 0,
          r = n ? s(n) : '';
        if (r)
          switch (r) {
            case f:
              return '[object DataView]';
            case l:
              return '[object Map]';
            case d:
              return '[object Promise]';
            case p:
              return '[object Set]';
            case v:
              return '[object WeakMap]';
          }
        return e;
      }),
      (t.exports = h);
  },
  function (t, e, n) {
    var r = n(61);
    t.exports = function (t, e, n) {
      var i = null == t ? void 0 : r(t, e);
      return void 0 === i ? n : i;
    };
  },
  function (t, e, n) {
    var r = n(37),
      i = n(24);
    t.exports = function (t, e) {
      for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; )
        t = t[i(e[n++])];
      return n && n == o ? t : void 0;
    };
  },
  function (t, e, n) {
    var r = n(2),
      i = n(38),
      o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      a = /^\w*$/;
    t.exports = function (t, e) {
      if (r(t)) return !1;
      var n = typeof t;
      return (
        !(
          'number' != n &&
          'symbol' != n &&
          'boolean' != n &&
          null != t &&
          !i(t)
        ) ||
        a.test(t) ||
        !o.test(t) ||
        (null != e && t in Object(e))
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return t;
    };
  },
  function (t, e, n) {
    var r = n(263),
      i = n(8),
      o = n(38),
      a = NaN,
      u = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      s = /^0o[0-7]+$/i,
      f = parseInt;
    t.exports = function (t) {
      if ('number' == typeof t) return t;
      if (o(t)) return a;
      if (i(t)) {
        var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
        t = i(e) ? e + '' : e;
      }
      if ('string' != typeof t) return 0 === t ? t : +t;
      t = r(t);
      var n = c.test(t);
      return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? a : +t;
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(1);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.mediaQueriesDefined =
        e.viewportWidthChanged =
        e.actionListPlaybackChanged =
        e.elementStateChanged =
        e.instanceRemoved =
        e.instanceStarted =
        e.instanceAdded =
        e.parameterChanged =
        e.animationFrameChanged =
        e.eventStateChanged =
        e.testFrameRendered =
        e.eventListenerAdded =
        e.clearRequested =
        e.stopRequested =
        e.playbackRequested =
        e.previewRequested =
        e.sessionStopped =
        e.sessionStarted =
        e.sessionInitialized =
        e.rawDataImported =
          void 0);
    var i = r(n(30)),
      o = n(4),
      a = n(14),
      u = o.IX2EngineActionTypes,
      c = u.IX2_RAW_DATA_IMPORTED,
      s = u.IX2_SESSION_INITIALIZED,
      f = u.IX2_SESSION_STARTED,
      l = u.IX2_SESSION_STOPPED,
      d = u.IX2_PREVIEW_REQUESTED,
      p = u.IX2_PLAYBACK_REQUESTED,
      v = u.IX2_STOP_REQUESTED,
      h = u.IX2_CLEAR_REQUESTED,
      E = u.IX2_EVENT_LISTENER_ADDED,
      g = u.IX2_TEST_FRAME_RENDERED,
      y = u.IX2_EVENT_STATE_CHANGED,
      _ = u.IX2_ANIMATION_FRAME_CHANGED,
      m = u.IX2_PARAMETER_CHANGED,
      I = u.IX2_INSTANCE_ADDED,
      b = u.IX2_INSTANCE_STARTED,
      T = u.IX2_INSTANCE_REMOVED,
      w = u.IX2_ELEMENT_STATE_CHANGED,
      O = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      A = u.IX2_VIEWPORT_WIDTH_CHANGED,
      S = u.IX2_MEDIA_QUERIES_DEFINED,
      x = a.IX2VanillaUtils.reifyState;
    e.rawDataImported = function (t) {
      return { type: c, payload: (0, i.default)({}, x(t)) };
    };
    e.sessionInitialized = function (t) {
      var e = t.hasBoundaryNodes,
        n = t.reducedMotion;
      return { type: s, payload: { hasBoundaryNodes: e, reducedMotion: n } };
    };
    e.sessionStarted = function () {
      return { type: f };
    };
    e.sessionStopped = function () {
      return { type: l };
    };
    e.previewRequested = function (t) {
      var e = t.rawData,
        n = t.defer;
      return { type: d, payload: { defer: n, rawData: e } };
    };
    e.playbackRequested = function (t) {
      var e = t.actionTypeId,
        n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
        r = t.actionListId,
        i = t.actionItemId,
        a = t.eventId,
        u = t.allowEvents,
        c = t.immediate,
        s = t.testManual,
        f = t.verbose,
        l = t.rawData;
      return {
        type: p,
        payload: {
          actionTypeId: n,
          actionListId: r,
          actionItemId: i,
          testManual: s,
          eventId: a,
          allowEvents: u,
          immediate: c,
          verbose: f,
          rawData: l
        }
      };
    };
    e.stopRequested = function (t) {
      return { type: v, payload: { actionListId: t } };
    };
    e.clearRequested = function () {
      return { type: h };
    };
    e.eventListenerAdded = function (t, e) {
      return { type: E, payload: { target: t, listenerParams: e } };
    };
    e.testFrameRendered = function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      return { type: g, payload: { step: t } };
    };
    e.eventStateChanged = function (t, e) {
      return { type: y, payload: { stateKey: t, newState: e } };
    };
    e.animationFrameChanged = function (t, e) {
      return { type: _, payload: { now: t, parameters: e } };
    };
    e.parameterChanged = function (t, e) {
      return { type: m, payload: { key: t, value: e } };
    };
    e.instanceAdded = function (t) {
      return { type: I, payload: (0, i.default)({}, t) };
    };
    e.instanceStarted = function (t, e) {
      return { type: b, payload: { instanceId: t, time: e } };
    };
    e.instanceRemoved = function (t) {
      return { type: T, payload: { instanceId: t } };
    };
    e.elementStateChanged = function (t, e, n, r) {
      return {
        type: w,
        payload: { elementId: t, actionTypeId: e, current: n, actionItem: r }
      };
    };
    e.actionListPlaybackChanged = function (t) {
      var e = t.actionListId,
        n = t.isPlaying;
      return { type: O, payload: { actionListId: e, isPlaying: n } };
    };
    e.viewportWidthChanged = function (t) {
      var e = t.width,
        n = t.mediaQueries;
      return { type: A, payload: { width: e, mediaQueries: n } };
    };
    e.mediaQueriesDefined = function () {
      return { type: S };
    };
  },
  function (t, e, n) {
    var r = n(127),
      i = n(67);
    function o(t, e) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__chain__ = !!e),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    (o.prototype = r(i.prototype)),
      (o.prototype.constructor = o),
      (t.exports = o);
  },
  function (t, e) {
    t.exports = function () {};
  },
  function (t, e, n) {
    var r = n(127),
      i = n(67),
      o = 4294967295;
    function a(t) {
      (this.__wrapped__ = t),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = o),
        (this.__views__ = []);
    }
    (a.prototype = r(i.prototype)),
      (a.prototype.constructor = a),
      (t.exports = a);
  },
  function (t, e, n) {
    'use strict';
    var r = n(1)(n(17));
    window.tram = (function (t) {
      function e(t, e) {
        return new F.Bare().init(t, e);
      }
      function n(t) {
        return t.replace(/[A-Z]/g, function (t) {
          return '-' + t.toLowerCase();
        });
      }
      function i(t) {
        var e = parseInt(t.slice(1), 16);
        return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
      }
      function o(t, e, n) {
        return (
          '#' + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1)
        );
      }
      function a() {}
      function u(t, e, n) {
        s('Units do not match [' + t + ']: ' + e + ', ' + n);
      }
      function c(t, e, n) {
        if ((void 0 !== e && (n = e), void 0 === t)) return n;
        var r = n;
        return (
          $.test(t) || !Z.test(t)
            ? (r = parseInt(t, 10))
            : Z.test(t) && (r = 1e3 * parseFloat(t)),
          0 > r && (r = 0),
          r == r ? r : n
        );
      }
      function s(t) {
        H.debug && window && window.console.warn(t);
      }
      var f = (function (t, e, n) {
          function i(t) {
            return 'object' == (0, r.default)(t);
          }
          function o(t) {
            return 'function' == typeof t;
          }
          function a() {}
          return function r(u, c) {
            function s() {
              var t = new f();
              return o(t.init) && t.init.apply(t, arguments), t;
            }
            function f() {}
            c === n && ((c = u), (u = Object)), (s.Bare = f);
            var l,
              d = (a[t] = u[t]),
              p = (f[t] = s[t] = new a());
            return (
              (p.constructor = s),
              (s.mixin = function (e) {
                return (f[t] = s[t] = r(s, e)[t]), s;
              }),
              (s.open = function (t) {
                if (
                  ((l = {}),
                  o(t) ? (l = t.call(s, p, d, s, u)) : i(t) && (l = t),
                  i(l))
                )
                  for (var n in l) e.call(l, n) && (p[n] = l[n]);
                return o(p.init) || (p.init = u), s;
              }),
              s.open(c)
            );
          };
        })('prototype', {}.hasOwnProperty),
        l = {
          ease: [
            'ease',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return (
                e +
                n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * t)
              );
            }
          ],
          'ease-in': [
            'ease-in',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
            }
          ],
          'ease-out': [
            'ease-out',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return (
                e +
                n * (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
              );
            }
          ],
          'ease-in-out': [
            'ease-in-out',
            function (t, e, n, r) {
              var i = (t /= r) * t,
                o = i * t;
              return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
            }
          ],
          linear: [
            'linear',
            function (t, e, n, r) {
              return (n * t) / r + e;
            }
          ],
          'ease-in-quad': [
            'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
            function (t, e, n, r) {
              return n * (t /= r) * t + e;
            }
          ],
          'ease-out-quad': [
            'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            function (t, e, n, r) {
              return -n * (t /= r) * (t - 2) + e;
            }
          ],
          'ease-in-out-quad': [
            'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t + e
                : (-n / 2) * (--t * (t - 2) - 1) + e;
            }
          ],
          'ease-in-cubic': [
            'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
            function (t, e, n, r) {
              return n * (t /= r) * t * t + e;
            }
          ],
          'ease-out-cubic': [
            'cubic-bezier(0.215, 0.610, 0.355, 1)',
            function (t, e, n, r) {
              return n * ((t = t / r - 1) * t * t + 1) + e;
            }
          ],
          'ease-in-out-cubic': [
            'cubic-bezier(0.645, 0.045, 0.355, 1)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t + e
                : (n / 2) * ((t -= 2) * t * t + 2) + e;
            }
          ],
          'ease-in-quart': [
            'cubic-bezier(0.895, 0.030, 0.685, 0.220)',
            function (t, e, n, r) {
              return n * (t /= r) * t * t * t + e;
            }
          ],
          'ease-out-quart': [
            'cubic-bezier(0.165, 0.840, 0.440, 1)',
            function (t, e, n, r) {
              return -n * ((t = t / r - 1) * t * t * t - 1) + e;
            }
          ],
          'ease-in-out-quart': [
            'cubic-bezier(0.770, 0, 0.175, 1)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t * t + e
                : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
            }
          ],
          'ease-in-quint': [
            'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
            function (t, e, n, r) {
              return n * (t /= r) * t * t * t * t + e;
            }
          ],
          'ease-out-quint': [
            'cubic-bezier(0.230, 1, 0.320, 1)',
            function (t, e, n, r) {
              return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
            }
          ],
          'ease-in-out-quint': [
            'cubic-bezier(0.860, 0, 0.070, 1)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (n / 2) * t * t * t * t * t + e
                : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
            }
          ],
          'ease-in-sine': [
            'cubic-bezier(0.470, 0, 0.745, 0.715)',
            function (t, e, n, r) {
              return -n * Math.cos((t / r) * (Math.PI / 2)) + n + e;
            }
          ],
          'ease-out-sine': [
            'cubic-bezier(0.390, 0.575, 0.565, 1)',
            function (t, e, n, r) {
              return n * Math.sin((t / r) * (Math.PI / 2)) + e;
            }
          ],
          'ease-in-out-sine': [
            'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
            function (t, e, n, r) {
              return (-n / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
            }
          ],
          'ease-in-expo': [
            'cubic-bezier(0.950, 0.050, 0.795, 0.035)',
            function (t, e, n, r) {
              return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
            }
          ],
          'ease-out-expo': [
            'cubic-bezier(0.190, 1, 0.220, 1)',
            function (t, e, n, r) {
              return t === r ? e + n : n * (1 - Math.pow(2, (-10 * t) / r)) + e;
            }
          ],
          'ease-in-out-expo': [
            'cubic-bezier(1, 0, 0, 1)',
            function (t, e, n, r) {
              return 0 === t
                ? e
                : t === r
                ? e + n
                : (t /= r / 2) < 1
                ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e
                : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
            }
          ],
          'ease-in-circ': [
            'cubic-bezier(0.600, 0.040, 0.980, 0.335)',
            function (t, e, n, r) {
              return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
            }
          ],
          'ease-out-circ': [
            'cubic-bezier(0.075, 0.820, 0.165, 1)',
            function (t, e, n, r) {
              return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
            }
          ],
          'ease-in-out-circ': [
            'cubic-bezier(0.785, 0.135, 0.150, 0.860)',
            function (t, e, n, r) {
              return (t /= r / 2) < 1
                ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e
                : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
            }
          ],
          'ease-in-back': [
            'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                n * (t /= r) * t * ((i + 1) * t - i) + e
              );
            }
          ],
          'ease-out-back': [
            'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
              );
            }
          ],
          'ease-in-out-back': [
            'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
            function (t, e, n, r, i) {
              return (
                void 0 === i && (i = 1.70158),
                (t /= r / 2) < 1
                  ? (n / 2) * t * t * ((1 + (i *= 1.525)) * t - i) + e
                  : (n / 2) *
                      ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) +
                    e
              );
            }
          ]
        },
        d = {
          'ease-in-back': 'cubic-bezier(0.600, 0, 0.735, 0.045)',
          'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.320, 1)',
          'ease-in-out-back': 'cubic-bezier(0.680, 0, 0.265, 1)'
        },
        p = document,
        v = window,
        h = 'bkwld-tram',
        E = /[\-\.0-9]/g,
        g = /[A-Z]/,
        y = 'number',
        _ = /^(rgb|#)/,
        m = /(em|cm|mm|in|pt|pc|px)$/,
        I = /(em|cm|mm|in|pt|pc|px|%)$/,
        b = /(deg|rad|turn)$/,
        T = 'unitless',
        w = /(all|none) 0s ease 0s/,
        O = /^(width|height)$/,
        A = ' ',
        S = p.createElement('a'),
        x = ['Webkit', 'Moz', 'O', 'ms'],
        R = ['-webkit-', '-moz-', '-o-', '-ms-'],
        N = function (t) {
          if (t in S.style) return { dom: t, css: t };
          var e,
            n,
            r = '',
            i = t.split('-');
          for (e = 0; e < i.length; e++)
            r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
          for (e = 0; e < x.length; e++)
            if ((n = x[e] + r) in S.style) return { dom: n, css: R[e] + t };
        },
        C = (e.support = {
          bind: Function.prototype.bind,
          transform: N('transform'),
          transition: N('transition'),
          backface: N('backface-visibility'),
          timing: N('transition-timing-function')
        });
      if (C.transition) {
        var L = C.timing.dom;
        if (((S.style[L] = l['ease-in-back'][0]), !S.style[L]))
          for (var P in d) l[P][0] = d[P];
      }
      var D = (e.frame = (function () {
          var t =
            v.requestAnimationFrame ||
            v.webkitRequestAnimationFrame ||
            v.mozRequestAnimationFrame ||
            v.oRequestAnimationFrame ||
            v.msRequestAnimationFrame;
          return t && C.bind
            ? t.bind(v)
            : function (t) {
                v.setTimeout(t, 16);
              };
        })()),
        M = (e.now = (function () {
          var t = v.performance,
            e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
          return e && C.bind
            ? e.bind(t)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        j = f(function (e) {
          function i(t, e) {
            var n = (function (t) {
                for (var e = -1, n = t ? t.length : 0, r = []; ++e < n; ) {
                  var i = t[e];
                  i && r.push(i);
                }
                return r;
              })(('' + t).split(A)),
              r = n[0];
            e = e || {};
            var i = Q[r];
            if (!i) return s('Unsupported property: ' + r);
            if (!e.weak || !this.props[r]) {
              var o = i[0],
                a = this.props[r];
              return (
                a || (a = this.props[r] = new o.Bare()),
                a.init(this.$el, n, i, e),
                a
              );
            }
          }
          function o(t, e, n) {
            if (t) {
              var o = (0, r.default)(t);
              if (
                (e ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                'number' == o && e)
              )
                return (
                  (this.timer = new B({
                    duration: t,
                    context: this,
                    complete: a
                  })),
                  void (this.active = !0)
                );
              if ('string' == o && e) {
                switch (t) {
                  case 'hide':
                    f.call(this);
                    break;
                  case 'stop':
                    u.call(this);
                    break;
                  case 'redraw':
                    l.call(this);
                    break;
                  default:
                    i.call(this, t, n && n[1]);
                }
                return a.call(this);
              }
              if ('function' == o) return void t.call(this, this);
              if ('object' == o) {
                var s = 0;
                p.call(
                  this,
                  t,
                  function (t, e) {
                    t.span > s && (s = t.span), t.stop(), t.animate(e);
                  },
                  function (t) {
                    'wait' in t && (s = c(t.wait, 0));
                  }
                ),
                  d.call(this),
                  s > 0 &&
                    ((this.timer = new B({ duration: s, context: this })),
                    (this.active = !0),
                    e && (this.timer.complete = a));
                var v = this,
                  h = !1,
                  E = {};
                D(function () {
                  p.call(v, t, function (t) {
                    t.active && ((h = !0), (E[t.name] = t.nextStyle));
                  }),
                    h && v.$el.css(E);
                });
              }
            }
          }
          function a() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var t = this.queue.shift();
              o.call(this, t.options, !0, t.args);
            }
          }
          function u(t) {
            var e;
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1),
              'string' == typeof t
                ? ((e = {})[t] = 1)
                : (e =
                    'object' == (0, r.default)(t) && null != t
                      ? t
                      : this.props),
              p.call(this, e, v),
              d.call(this);
          }
          function f() {
            u.call(this), (this.el.style.display = 'none');
          }
          function l() {
            this.el.offsetHeight;
          }
          function d() {
            var t,
              e,
              n = [];
            for (t in (this.upstream && n.push(this.upstream), this.props))
              (e = this.props[t]).active && n.push(e.string);
            (n = n.join(',')),
              this.style !== n &&
                ((this.style = n), (this.el.style[C.transition.dom] = n));
          }
          function p(t, e, r) {
            var o,
              a,
              u,
              c,
              s = e !== v,
              f = {};
            for (o in t)
              (u = t[o]),
                o in q
                  ? (f.transform || (f.transform = {}), (f.transform[o] = u))
                  : (g.test(o) && (o = n(o)),
                    o in Q ? (f[o] = u) : (c || (c = {}), (c[o] = u)));
            for (o in f) {
              if (((u = f[o]), !(a = this.props[o]))) {
                if (!s) continue;
                a = i.call(this, o);
              }
              e.call(this, a, u);
            }
            r && c && r.call(this, c);
          }
          function v(t) {
            t.stop();
          }
          function E(t, e) {
            t.set(e);
          }
          function y(t) {
            this.$el.css(t);
          }
          function _(t, n) {
            e[t] = function () {
              return this.children
                ? function (t, e) {
                    var n,
                      r = this.children.length;
                    for (n = 0; r > n; n++) t.apply(this.children[n], e);
                    return this;
                  }.call(this, n, arguments)
                : (this.el && n.apply(this, arguments), this);
            };
          }
          (e.init = function (e) {
            if (
              ((this.$el = t(e)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ''),
              (this.active = !1),
              H.keepInherited && !H.fallback)
            ) {
              var n = Y(this.el, 'transition');
              n && !w.test(n) && (this.upstream = n);
            }
            C.backface &&
              H.hideBackface &&
              z(this.el, C.backface.css, 'hidden');
          }),
            _('add', i),
            _('start', o),
            _('wait', function (t) {
              (t = c(t, 0)),
                this.active
                  ? this.queue.push({ options: t })
                  : ((this.timer = new B({
                      duration: t,
                      context: this,
                      complete: a
                    })),
                    (this.active = !0));
            }),
            _('then', function (t) {
              return this.active
                ? (this.queue.push({ options: t, args: arguments }),
                  void (this.timer.complete = a))
                : s(
                    'No active transition timer. Use start() or wait() before then().'
                  );
            }),
            _('next', a),
            _('stop', u),
            _('set', function (t) {
              u.call(this, t), p.call(this, t, E, y);
            }),
            _('show', function (t) {
              'string' != typeof t && (t = 'block'),
                (this.el.style.display = t);
            }),
            _('hide', f),
            _('redraw', l),
            _('destroy', function () {
              u.call(this),
                t.removeData(this.el, h),
                (this.$el = this.el = null);
            });
        }),
        F = f(j, function (e) {
          function n(e, n) {
            var r = t.data(e, h) || t.data(e, h, new j.Bare());
            return r.el || r.init(e), n ? r.start(n) : r;
          }
          e.init = function (e, r) {
            var i = t(e);
            if (!i.length) return this;
            if (1 === i.length) return n(i[0], r);
            var o = [];
            return (
              i.each(function (t, e) {
                o.push(n(e, r));
              }),
              (this.children = o),
              this
            );
          };
        }),
        k = f(function (t) {
          function e() {
            var t = this.get();
            this.update('auto');
            var e = this.get();
            return this.update(t), e;
          }
          function n(t) {
            var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
            return (e ? o(e[1], e[2], e[3]) : t).replace(
              /#(\w)(\w)(\w)$/,
              '#$1$1$2$2$3$3'
            );
          }
          var i = 500,
            a = 'ease',
            u = 0;
          (t.init = function (t, e, n, r) {
            (this.$el = t), (this.el = t[0]);
            var o = e[0];
            n[2] && (o = n[2]),
              K[o] && (o = K[o]),
              (this.name = o),
              (this.type = n[1]),
              (this.duration = c(e[1], this.duration, i)),
              (this.ease = (function (t, e, n) {
                return void 0 !== e && (n = e), t in l ? t : n;
              })(e[2], this.ease, a)),
              (this.delay = c(e[3], this.delay, u)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = O.test(this.name)),
              (this.unit = r.unit || this.unit || H.defaultUnit),
              (this.angle = r.angle || this.angle || H.defaultAngle),
              H.fallback || r.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    A +
                    this.duration +
                    'ms' +
                    ('ease' != this.ease ? A + l[this.ease][0] : '') +
                    (this.delay ? A + this.delay + 'ms' : '')));
          }),
            (t.set = function (t) {
              (t = this.convert(t, this.type)), this.update(t), this.redraw();
            }),
            (t.transition = function (t) {
              (this.active = !0),
                (t = this.convert(t, this.type)),
                this.auto &&
                  ('auto' == this.el.style[this.name] &&
                    (this.update(this.get()), this.redraw()),
                  'auto' == t && (t = e.call(this))),
                (this.nextStyle = t);
            }),
            (t.fallback = function (t) {
              var n =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (t = this.convert(t, this.type)),
                this.auto &&
                  ('auto' == n && (n = this.convert(this.get(), this.type)),
                  'auto' == t && (t = e.call(this))),
                (this.tween = new U({
                  from: n,
                  to: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this
                }));
            }),
            (t.get = function () {
              return Y(this.el, this.name);
            }),
            (t.update = function (t) {
              z(this.el, this.name, t);
            }),
            (t.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                z(this.el, this.name, this.get()));
              var t = this.tween;
              t && t.context && t.destroy();
            }),
            (t.convert = function (t, e) {
              if ('auto' == t && this.auto) return t;
              var i,
                o = 'number' == typeof t,
                a = 'string' == typeof t;
              switch (e) {
                case y:
                  if (o) return t;
                  if (a && '' === t.replace(E, '')) return +t;
                  i = 'number(unitless)';
                  break;
                case _:
                  if (a) {
                    if ('' === t && this.original) return this.original;
                    if (e.test(t))
                      return '#' == t.charAt(0) && 7 == t.length ? t : n(t);
                  }
                  i = 'hex or rgb string';
                  break;
                case m:
                  if (o) return t + this.unit;
                  if (a && e.test(t)) return t;
                  i = 'number(px) or string(unit)';
                  break;
                case I:
                  if (o) return t + this.unit;
                  if (a && e.test(t)) return t;
                  i = 'number(px) or string(unit or %)';
                  break;
                case b:
                  if (o) return t + this.angle;
                  if (a && e.test(t)) return t;
                  i = 'number(deg) or string(angle)';
                  break;
                case T:
                  if (o) return t;
                  if (a && I.test(t)) return t;
                  i = 'number(unitless) or string(unit or %)';
              }
              return (
                (function (t, e) {
                  s(
                    'Type warning: Expected: [' +
                      t +
                      '] Got: [' +
                      (0, r.default)(e) +
                      '] ' +
                      e
                  );
                })(i, t),
                t
              );
            }),
            (t.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        X = f(k, function (t, e) {
          t.init = function () {
            e.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), _));
          };
        }),
        G = f(k, function (t, e) {
          (t.init = function () {
            e.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (t.get = function () {
              return this.$el[this.name]();
            }),
            (t.update = function (t) {
              this.$el[this.name](t);
            });
        }),
        V = f(k, function (t, e) {
          function n(t, e) {
            var n, r, i, o, a;
            for (n in t)
              (i = (o = q[n])[0]),
                (r = o[1] || n),
                (a = this.convert(t[n], i)),
                e.call(this, r, a, i);
          }
          (t.init = function () {
            e.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                q.perspective &&
                  H.perspective &&
                  ((this.current.perspective = H.perspective),
                  z(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (t.set = function (t) {
              n.call(this, t, function (t, e) {
                this.current[t] = e;
              }),
                z(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (t.transition = function (t) {
              var e = this.values(t);
              this.tween = new W({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease
              });
              var n,
                r = {};
              for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
              (this.active = !0), (this.nextStyle = this.style(r));
            }),
            (t.fallback = function (t) {
              var e = this.values(t);
              this.tween = new W({
                current: this.current,
                values: e,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this
              });
            }),
            (t.update = function () {
              z(this.el, this.name, this.style(this.current));
            }),
            (t.style = function (t) {
              var e,
                n = '';
              for (e in t) n += e + '(' + t[e] + ') ';
              return n;
            }),
            (t.values = function (t) {
              var e,
                r = {};
              return (
                n.call(this, t, function (t, n, i) {
                  (r[t] = n),
                    void 0 === this.current[t] &&
                      ((e = 0),
                      ~t.indexOf('scale') && (e = 1),
                      (this.current[t] = this.convert(e, i)));
                }),
                r
              );
            });
        }),
        U = f(function (e) {
          function n() {
            var t,
              e,
              r,
              i = c.length;
            if (i) for (D(n), e = M(), t = i; t--; ) (r = c[t]) && r.render(e);
          }
          var r = { ease: l.ease[1], from: 0, to: 1 };
          (e.init = function (t) {
            (this.duration = t.duration || 0), (this.delay = t.delay || 0);
            var e = t.ease || r.ease;
            l[e] && (e = l[e][1]),
              'function' != typeof e && (e = r.ease),
              (this.ease = e),
              (this.update = t.update || a),
              (this.complete = t.complete || a),
              (this.context = t.context || this),
              (this.name = t.name);
            var n = t.from,
              i = t.to;
            void 0 === n && (n = r.from),
              void 0 === i && (i = r.to),
              (this.unit = t.unit || ''),
              'number' == typeof n && 'number' == typeof i
                ? ((this.begin = n), (this.change = i - n))
                : this.format(i, n),
              (this.value = this.begin + this.unit),
              (this.start = M()),
              !1 !== t.autoplay && this.play();
          }),
            (e.play = function () {
              var t;
              this.active ||
                (this.start || (this.start = M()),
                (this.active = !0),
                (t = this),
                1 === c.push(t) && D(n));
            }),
            (e.stop = function () {
              var e, n, r;
              this.active &&
                ((this.active = !1),
                (e = this),
                (r = t.inArray(e, c)) >= 0 &&
                  ((n = c.slice(r + 1)),
                  (c.length = r),
                  n.length && (c = c.concat(n))));
            }),
            (e.render = function (t) {
              var e,
                n = t - this.start;
              if (this.delay) {
                if (n <= this.delay) return;
                n -= this.delay;
              }
              if (n < this.duration) {
                var r = this.ease(n, 0, 1, this.duration);
                return (
                  (e = this.startRGB
                    ? (function (t, e, n) {
                        return o(
                          t[0] + n * (e[0] - t[0]),
                          t[1] + n * (e[1] - t[1]),
                          t[2] + n * (e[2] - t[2])
                        );
                      })(this.startRGB, this.endRGB, r)
                    : (function (t) {
                        return Math.round(t * s) / s;
                      })(this.begin + r * this.change)),
                  (this.value = e + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (e = this.endHex || this.begin + this.change),
                (this.value = e + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (e.format = function (t, e) {
              if (((e += ''), '#' == (t += '').charAt(0)))
                return (
                  (this.startRGB = i(e)),
                  (this.endRGB = i(t)),
                  (this.endHex = t),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var n = e.replace(E, '');
                n !== t.replace(E, '') && u('tween', e, t), (this.unit = n);
              }
              (e = parseFloat(e)),
                (t = parseFloat(t)),
                (this.begin = this.value = e),
                (this.change = t - e);
            }),
            (e.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = a);
            });
          var c = [],
            s = 1e3;
        }),
        B = f(U, function (t) {
          (t.init = function (t) {
            (this.duration = t.duration || 0),
              (this.complete = t.complete || a),
              (this.context = t.context),
              this.play();
          }),
            (t.render = function (t) {
              t - this.start < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        W = f(U, function (t, e) {
          (t.init = function (t) {
            var e, n;
            for (e in ((this.context = t.context),
            (this.update = t.update),
            (this.tweens = []),
            (this.current = t.current),
            t.values))
              (n = t.values[e]),
                this.current[e] !== n &&
                  this.tweens.push(
                    new U({
                      name: e,
                      from: this.current[e],
                      to: n,
                      duration: t.duration,
                      delay: t.delay,
                      ease: t.ease,
                      autoplay: !1
                    })
                  );
            this.play();
          }),
            (t.render = function (t) {
              var e,
                n,
                r = !1;
              for (e = this.tweens.length; e--; )
                (n = this.tweens[e]).context &&
                  (n.render(t), (this.current[n.name] = n.value), (r = !0));
              return r
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (t.destroy = function () {
              if ((e.destroy.call(this), this.tweens)) {
                var t;
                for (t = this.tweens.length; t--; ) this.tweens[t].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        H = (e.config = {
          debug: !1,
          defaultUnit: 'px',
          defaultAngle: 'deg',
          keepInherited: !1,
          hideBackface: !1,
          perspective: '',
          fallback: !C.transition,
          agentTests: []
        });
      (e.fallback = function (t) {
        if (!C.transition) return (H.fallback = !0);
        H.agentTests.push('(' + t + ')');
        var e = new RegExp(H.agentTests.join('|'), 'i');
        H.fallback = e.test(navigator.userAgent);
      }),
        e.fallback('6.0.[2-5] Safari'),
        (e.tween = function (t) {
          return new U(t);
        }),
        (e.delay = function (t, e, n) {
          return new B({ complete: e, duration: t, context: n });
        }),
        (t.fn.tram = function (t) {
          return e.call(null, this, t);
        });
      var z = t.style,
        Y = t.css,
        K = { transform: C.transform && C.transform.css },
        Q = {
          color: [X, _],
          background: [X, _, 'background-color'],
          'outline-color': [X, _],
          'border-color': [X, _],
          'border-top-color': [X, _],
          'border-right-color': [X, _],
          'border-bottom-color': [X, _],
          'border-left-color': [X, _],
          'border-width': [k, m],
          'border-top-width': [k, m],
          'border-right-width': [k, m],
          'border-bottom-width': [k, m],
          'border-left-width': [k, m],
          'border-spacing': [k, m],
          'letter-spacing': [k, m],
          margin: [k, m],
          'margin-top': [k, m],
          'margin-right': [k, m],
          'margin-bottom': [k, m],
          'margin-left': [k, m],
          padding: [k, m],
          'padding-top': [k, m],
          'padding-right': [k, m],
          'padding-bottom': [k, m],
          'padding-left': [k, m],
          'outline-width': [k, m],
          opacity: [k, y],
          top: [k, I],
          right: [k, I],
          bottom: [k, I],
          left: [k, I],
          'font-size': [k, I],
          'text-indent': [k, I],
          'word-spacing': [k, I],
          width: [k, I],
          'min-width': [k, I],
          'max-width': [k, I],
          height: [k, I],
          'min-height': [k, I],
          'max-height': [k, I],
          'line-height': [k, T],
          'scroll-top': [G, y, 'scrollTop'],
          'scroll-left': [G, y, 'scrollLeft']
        },
        q = {};
      C.transform &&
        ((Q.transform = [V]),
        (q = {
          x: [I, 'translateX'],
          y: [I, 'translateY'],
          rotate: [b],
          rotateX: [b],
          rotateY: [b],
          scale: [y],
          scaleX: [y],
          scaleY: [y],
          skew: [b],
          skewX: [b],
          skewY: [b]
        })),
        C.transform &&
          C.backface &&
          ((q.z = [I, 'translateZ']),
          (q.rotateZ = [b]),
          (q.scaleZ = [y]),
          (q.perspective = [m]));
      var $ = /ms/,
        Z = /s|\./;
      return (t.tram = e);
    })(window.jQuery);
  },
  function (t, e, n) {
    'use strict';
    var r = n(39);
    function i(t, e) {
      var n = document.createEvent('CustomEvent');
      n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
    }
    var o = window.jQuery,
      a = {},
      u = {
        reset: function (t, e) {
          r.triggers.reset(t, e);
        },
        intro: function (t, e) {
          r.triggers.intro(t, e), i(e, 'COMPONENT_ACTIVE');
        },
        outro: function (t, e) {
          r.triggers.outro(t, e), i(e, 'COMPONENT_INACTIVE');
        }
      };
    (a.triggers = {}),
      (a.types = { INTRO: 'w-ix-intro.w-ix', OUTRO: 'w-ix-outro.w-ix' }),
      o.extend(a.triggers, u),
      (t.exports = a);
  },
  function (t, e, n) {
    var r = n(13),
      i = n(40),
      o = n(145),
      a = n(72),
      u = n(26),
      c = n(74),
      s = n(9),
      f = n(81),
      l = Object.getOwnPropertyDescriptor;
    e.f = r
      ? l
      : function (t, e) {
          if (((t = u(t)), (e = c(e)), f))
            try {
              return l(t, e);
            } catch (t) {}
          if (s(t, e)) return a(!i(o.f, t, e), t[e]);
        };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    };
  },
  function (t, e, n) {
    var r = n(0).TypeError;
    t.exports = function (t) {
      if (null == t) throw r("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(148),
      i = n(75);
    t.exports = function (t) {
      var e = r(t, 'string');
      return i(e) ? e : e + '';
    };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(27),
      o = n(7),
      a = n(149),
      u = n(76),
      c = r.Object;
    t.exports = u
      ? function (t) {
          return 'symbol' == typeof t;
        }
      : function (t) {
          var e = i('Symbol');
          return o(e) && a(e.prototype, c(t));
        };
  },
  function (t, e, n) {
    var r = n(77);
    t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
  },
  function (t, e, n) {
    var r = n(150),
      i = n(19);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !i(function () {
        var t = Symbol();
        return (
          !String(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && r && r < 41)
        );
      });
  },
  function (t, e, n) {
    var r = n(0),
      i = n(79),
      o = n(9),
      a = n(80),
      u = n(77),
      c = n(76),
      s = i('wks'),
      f = r.Symbol,
      l = f && f.for,
      d = c ? f : (f && f.withoutSetter) || a;
    t.exports = function (t) {
      if (!o(s, t) || (!u && 'string' != typeof s[t])) {
        var e = 'Symbol.' + t;
        u && o(f, t) ? (s[t] = f[t]) : (s[t] = c && l ? l(e) : d(e));
      }
      return s[t];
    };
  },
  function (t, e, n) {
    var r = n(156),
      i = n(41);
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: '3.19.0',
      mode: r ? 'pure' : 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
    });
  },
  function (t, e, n) {
    var r = n(5),
      i = 0,
      o = Math.random(),
      a = r((1).toString);
    t.exports = function (t) {
      return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + a(++i + o, 36);
    };
  },
  function (t, e, n) {
    var r = n(13),
      i = n(19),
      o = n(82);
    t.exports =
      !r &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(o('div'), 'a', {
            get: function () {
              return 7;
            }
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(0),
      i = n(20),
      o = r.document,
      a = i(o) && i(o.createElement);
    t.exports = function (t) {
      return a ? o.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var r = n(5),
      i = n(7),
      o = n(41),
      a = r(Function.toString);
    i(o.inspectSource) ||
      (o.inspectSource = function (t) {
        return a(t);
      }),
      (t.exports = o.inspectSource);
  },
  function (t, e, n) {
    var r = n(79),
      i = n(80),
      o = r('keys');
    t.exports = function (t) {
      return o[t] || (o[t] = i(t));
    };
  },
  function (t, e, n) {
    var r = n(5),
      i = n(9),
      o = n(26),
      a = n(86).indexOf,
      u = n(44),
      c = r([].push);
    t.exports = function (t, e) {
      var n,
        r = o(t),
        s = 0,
        f = [];
      for (n in r) !i(u, n) && i(r, n) && c(f, n);
      for (; e.length > s; ) i(r, (n = e[s++])) && (~a(f, n) || c(f, n));
      return f;
    };
  },
  function (t, e, n) {
    var r = n(26),
      i = n(165),
      o = n(166),
      a = function (t) {
        return function (e, n, a) {
          var u,
            c = r(e),
            s = o(c),
            f = i(a, s);
          if (t && n != n) {
            for (; s > f; ) if ((u = c[f++]) != u) return !0;
          } else
            for (; s > f; f++)
              if ((t || f in c) && c[f] === n) return t || f || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : (e > 0 ? r : n)(e);
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(46);
    n.d(e, 'createStore', function () {
      return r.default;
    });
    var i = n(91);
    n.d(e, 'combineReducers', function () {
      return i.default;
    });
    var o = n(93);
    n.d(e, 'bindActionCreators', function () {
      return o.default;
    });
    var a = n(94);
    n.d(e, 'applyMiddleware', function () {
      return a.default;
    });
    var u = n(47);
    n.d(e, 'compose', function () {
      return u.default;
    });
    n(92);
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(176),
      i = n(181),
      o = n(183),
      a = '[object Object]',
      u = Function.prototype,
      c = Object.prototype,
      s = u.toString,
      f = c.hasOwnProperty,
      l = s.call(Object);
    e.default = function (t) {
      if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
      var e = Object(i.default)(t);
      if (null === e) return !0;
      var n = f.call(e, 'constructor') && e.constructor;
      return 'function' == typeof n && n instanceof n && s.call(n) == l;
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(177).default.Symbol;
    e.default = r;
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      n.d(e, 'default', function () {
        return o;
      });
    var r = n(46);
    n(89), n(92);
    function i(t, e) {
      var n = e && e.type;
      return (
        'Given action ' +
        ((n && '"' + n.toString() + '"') || 'an action') +
        ', reducer "' +
        t +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function o(t) {
      for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
        var a = e[o];
        0, 'function' == typeof t[a] && (n[a] = t[a]);
      }
      var u,
        c = Object.keys(n);
      try {
        !(function (t) {
          Object.keys(t).forEach(function (e) {
            var n = t[e];
            if (void 0 === n(void 0, { type: r.ActionTypes.INIT }))
              throw new Error(
                'Reducer "' +
                  e +
                  '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
              );
            if (
              void 0 ===
              n(void 0, {
                type:
                  '@@redux/PROBE_UNKNOWN_ACTION_' +
                  Math.random().toString(36).substring(7).split('').join('.')
              })
            )
              throw new Error(
                'Reducer "' +
                  e +
                  '" returned undefined when probed with a random type. Don\'t try to handle ' +
                  r.ActionTypes.INIT +
                  ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
              );
          });
        })(n);
      } catch (t) {
        u = t;
      }
      return function () {
        var t =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0],
          e = arguments[1];
        if (u) throw u;
        for (var r = !1, o = {}, a = 0; a < c.length; a++) {
          var s = c[a],
            f = n[s],
            l = t[s],
            d = f(l, e);
          if (void 0 === d) {
            var p = i(s, e);
            throw new Error(p);
          }
          (o[s] = d), (r = r || d !== l);
        }
        return r ? o : t;
      };
    }
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      'undefined' != typeof console &&
        'function' == typeof console.error &&
        console.error(t);
      try {
        throw new Error(t);
      } catch (t) {}
    }
    n.r(e),
      n.d(e, 'default', function () {
        return r;
      });
  },
  function (t, e, n) {
    'use strict';
    function r(t, e) {
      return function () {
        return e(t.apply(void 0, arguments));
      };
    }
    function i(t, e) {
      if ('function' == typeof t) return r(t, e);
      if ('object' != typeof t || null === t)
        throw new Error(
          'bindActionCreators expected an object or a function, instead received ' +
            (null === t ? 'null' : typeof t) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
        var a = n[o],
          u = t[a];
        'function' == typeof u && (i[a] = r(u, e));
      }
      return i;
    }
    n.r(e),
      n.d(e, 'default', function () {
        return i;
      });
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      n.d(e, 'default', function () {
        return o;
      });
    var r = n(47),
      i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        };
    function o() {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      return function (t) {
        return function (n, o, a) {
          var u,
            c = t(n, o, a),
            s = c.dispatch,
            f = {
              getState: c.getState,
              dispatch: function (t) {
                return s(t);
              }
            };
          return (
            (u = e.map(function (t) {
              return t(f);
            })),
            (s = r.default.apply(void 0, u)(c.dispatch)),
            i({}, c, { dispatch: s })
          );
        };
      };
    }
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ActionAppliesTo = e.ActionTypeConsts = void 0);
    e.ActionTypeConsts = {
      TRANSFORM_MOVE: 'TRANSFORM_MOVE',
      TRANSFORM_SCALE: 'TRANSFORM_SCALE',
      TRANSFORM_ROTATE: 'TRANSFORM_ROTATE',
      TRANSFORM_SKEW: 'TRANSFORM_SKEW',
      STYLE_OPACITY: 'STYLE_OPACITY',
      STYLE_SIZE: 'STYLE_SIZE',
      STYLE_FILTER: 'STYLE_FILTER',
      STYLE_BACKGROUND_COLOR: 'STYLE_BACKGROUND_COLOR',
      STYLE_BORDER: 'STYLE_BORDER',
      STYLE_TEXT_COLOR: 'STYLE_TEXT_COLOR',
      PLUGIN_LOTTIE: 'PLUGIN_LOTTIE',
      GENERAL_DISPLAY: 'GENERAL_DISPLAY',
      GENERAL_START_ACTION: 'GENERAL_START_ACTION',
      GENERAL_CONTINUOUS_ACTION: 'GENERAL_CONTINUOUS_ACTION',
      GENERAL_COMBO_CLASS: 'GENERAL_COMBO_CLASS',
      GENERAL_STOP_ACTION: 'GENERAL_STOP_ACTION',
      GENERAL_LOOP: 'GENERAL_LOOP',
      STYLE_BOX_SHADOW: 'STYLE_BOX_SHADOW'
    };
    e.ActionAppliesTo = {
      ELEMENT: 'ELEMENT',
      ELEMENT_CLASS: 'ELEMENT_CLASS',
      TRIGGER_ELEMENT: 'TRIGGER_ELEMENT'
    };
  },
  function (t, e, n) {
    var r = n(97)(n(261));
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(10),
      i = n(16),
      o = n(35);
    t.exports = function (t) {
      return function (e, n, a) {
        var u = Object(e);
        if (!i(e)) {
          var c = r(n, 3);
          (e = o(e)),
            (n = function (t) {
              return c(u[t], t, u);
            });
        }
        var s = t(e, n, a);
        return s > -1 ? u[c ? e[s] : s] : void 0;
      };
    };
  },
  function (t, e, n) {
    var r = n(31),
      i = n(203),
      o = n(204),
      a = n(205),
      u = n(206),
      c = n(207);
    function s(t) {
      var e = (this.__data__ = new r(t));
      this.size = e.size;
    }
    (s.prototype.clear = i),
      (s.prototype.delete = o),
      (s.prototype.get = a),
      (s.prototype.has = u),
      (s.prototype.set = c),
      (t.exports = s);
  },
  function (t, e, n) {
    var r = n(15),
      i = n(8),
      o = '[object AsyncFunction]',
      a = '[object Function]',
      u = '[object GeneratorFunction]',
      c = '[object Proxy]';
    t.exports = function (t) {
      if (!i(t)) return !1;
      var e = r(t);
      return e == a || e == u || e == o || e == c;
    };
  },
  function (t, e, n) {
    (function (e) {
      var n = 'object' == typeof e && e && e.Object === Object && e;
      t.exports = n;
    }.call(this, n(25)));
  },
  function (t, e) {
    var n = Function.prototype.toString;
    t.exports = function (t) {
      if (null != t) {
        try {
          return n.call(t);
        } catch (t) {}
        try {
          return t + '';
        } catch (t) {}
      }
      return '';
    };
  },
  function (t, e, n) {
    var r = n(226),
      i = n(12);
    t.exports = function t(e, n, o, a, u) {
      return (
        e === n ||
        (null == e || null == n || (!i(e) && !i(n))
          ? e != e && n != n
          : r(e, n, o, a, t, u))
      );
    };
  },
  function (t, e, n) {
    var r = n(227),
      i = n(230),
      o = n(231),
      a = 1,
      u = 2;
    t.exports = function (t, e, n, c, s, f) {
      var l = n & a,
        d = t.length,
        p = e.length;
      if (d != p && !(l && p > d)) return !1;
      var v = f.get(t),
        h = f.get(e);
      if (v && h) return v == e && h == t;
      var E = -1,
        g = !0,
        y = n & u ? new r() : void 0;
      for (f.set(t, e), f.set(e, t); ++E < d; ) {
        var _ = t[E],
          m = e[E];
        if (c) var I = l ? c(m, _, E, e, t, f) : c(_, m, E, t, e, f);
        if (void 0 !== I) {
          if (I) continue;
          g = !1;
          break;
        }
        if (y) {
          if (
            !i(e, function (t, e) {
              if (!o(y, e) && (_ === t || s(_, t, n, c, f))) return y.push(e);
            })
          ) {
            g = !1;
            break;
          }
        } else if (_ !== m && !s(_, m, n, c, f)) {
          g = !1;
          break;
        }
      }
      return f.delete(t), f.delete(e), g;
    };
  },
  function (t, e, n) {
    var r = n(52),
      i = n(2);
    t.exports = function (t, e, n) {
      var o = e(t);
      return i(t) ? o : r(o, n(t));
    };
  },
  function (t, e, n) {
    var r = n(238),
      i = n(106),
      o = Object.prototype.propertyIsEnumerable,
      a = Object.getOwnPropertySymbols,
      u = a
        ? function (t) {
            return null == t
              ? []
              : ((t = Object(t)),
                r(a(t), function (e) {
                  return o.call(t, e);
                }));
          }
        : i;
    t.exports = u;
  },
  function (t, e) {
    t.exports = function () {
      return [];
    };
  },
  function (t, e, n) {
    var r = n(239),
      i = n(36),
      o = n(2),
      a = n(53),
      u = n(54),
      c = n(55),
      s = Object.prototype.hasOwnProperty;
    t.exports = function (t, e) {
      var n = o(t),
        f = !n && i(t),
        l = !n && !f && a(t),
        d = !n && !f && !l && c(t),
        p = n || f || l || d,
        v = p ? r(t.length, String) : [],
        h = v.length;
      for (var E in t)
        (!e && !s.call(t, E)) ||
          (p &&
            ('length' == E ||
              (l && ('offset' == E || 'parent' == E)) ||
              (d &&
                ('buffer' == E || 'byteLength' == E || 'byteOffset' == E)) ||
              u(E, h))) ||
          v.push(E);
      return v;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, 'loaded', {
            enumerable: !0,
            get: function () {
              return t.l;
            }
          }),
          Object.defineProperty(t, 'id', {
            enumerable: !0,
            get: function () {
              return t.i;
            }
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (n) {
        return t(e(n));
      };
    };
  },
  function (t, e, n) {
    var r = n(11)(n(6), 'WeakMap');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(8);
    t.exports = function (t) {
      return t == t && !r(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return function (n) {
        return null != n && n[t] === e && (void 0 !== e || t in Object(n));
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
        i[n] = e(t[n], n, t);
      return i;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return null == e ? void 0 : e[t];
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r) {
      for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
        if (e(t[o], o, t)) return o;
      return -1;
    };
  },
  function (t, e, n) {
    var r = n(262);
    t.exports = function (t) {
      var e = r(t),
        n = e % 1;
      return e == e ? (n ? e - n : e) : 0;
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(1);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.inQuad = function (t) {
        return Math.pow(t, 2);
      }),
      (e.outQuad = function (t) {
        return -(Math.pow(t - 1, 2) - 1);
      }),
      (e.inOutQuad = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 2);
        return -0.5 * ((t -= 2) * t - 2);
      }),
      (e.inCubic = function (t) {
        return Math.pow(t, 3);
      }),
      (e.outCubic = function (t) {
        return Math.pow(t - 1, 3) + 1;
      }),
      (e.inOutCubic = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 3);
        return 0.5 * (Math.pow(t - 2, 3) + 2);
      }),
      (e.inQuart = function (t) {
        return Math.pow(t, 4);
      }),
      (e.outQuart = function (t) {
        return -(Math.pow(t - 1, 4) - 1);
      }),
      (e.inOutQuart = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 4);
        return -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
      }),
      (e.inQuint = function (t) {
        return Math.pow(t, 5);
      }),
      (e.outQuint = function (t) {
        return Math.pow(t - 1, 5) + 1;
      }),
      (e.inOutQuint = function (t) {
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 5);
        return 0.5 * (Math.pow(t - 2, 5) + 2);
      }),
      (e.inSine = function (t) {
        return 1 - Math.cos(t * (Math.PI / 2));
      }),
      (e.outSine = function (t) {
        return Math.sin(t * (Math.PI / 2));
      }),
      (e.inOutSine = function (t) {
        return -0.5 * (Math.cos(Math.PI * t) - 1);
      }),
      (e.inExpo = function (t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
      }),
      (e.outExpo = function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      }),
      (e.inOutExpo = function (t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
        return 0.5 * (2 - Math.pow(2, -10 * --t));
      }),
      (e.inCirc = function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
      }),
      (e.outCirc = function (t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2));
      }),
      (e.inOutCirc = function (t) {
        if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
        return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      }),
      (e.outBounce = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      }),
      (e.inBack = function (t) {
        return t * t * ((o + 1) * t - o);
      }),
      (e.outBack = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1;
      }),
      (e.inOutBack = function (t) {
        var e = o;
        if ((t /= 0.5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * 0.5;
        return 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      }),
      (e.inElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = 0.3);
        r < 1
          ? ((r = 1), (e = n / 4))
          : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
        return (
          -r *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t - e) * (2 * Math.PI)) / n)
        );
      }),
      (e.outElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = 0.3);
        r < 1
          ? ((r = 1), (e = n / 4))
          : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
        return (
          r * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) + 1
        );
      }),
      (e.inOutElastic = function (t) {
        var e = o,
          n = 0,
          r = 1;
        if (0 === t) return 0;
        if (2 == (t /= 0.5)) return 1;
        n || (n = 0.3 * 1.5);
        r < 1
          ? ((r = 1), (e = n / 4))
          : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
        if (t < 1)
          return (
            r *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t - e) * (2 * Math.PI)) / n) *
            -0.5
          );
        return (
          r *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t - e) * (2 * Math.PI)) / n) *
            0.5 +
          1
        );
      }),
      (e.swingFromTo = function (t) {
        var e = o;
        return (t /= 0.5) < 1
          ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
      }),
      (e.swingFrom = function (t) {
        return t * t * ((o + 1) * t - o);
      }),
      (e.swingTo = function (t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1;
      }),
      (e.bounce = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      }),
      (e.bouncePast = function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
          : t < 2.5 / 2.75
          ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
          : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
      }),
      (e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0);
    var i = r(n(118)),
      o = 1.70158,
      a = (0, i.default)(0.25, 0.1, 0.25, 1);
    e.ease = a;
    var u = (0, i.default)(0.42, 0, 1, 1);
    e.easeIn = u;
    var c = (0, i.default)(0, 0, 0.58, 1);
    e.easeOut = c;
    var s = (0, i.default)(0.42, 0, 0.58, 1);
    e.easeInOut = s;
  },
  function (t, e) {
    var n = 4,
      r = 0.001,
      i = 1e-7,
      o = 10,
      a = 11,
      u = 1 / (a - 1),
      c = 'function' == typeof Float32Array;
    function s(t, e) {
      return 1 - 3 * e + 3 * t;
    }
    function f(t, e) {
      return 3 * e - 6 * t;
    }
    function l(t) {
      return 3 * t;
    }
    function d(t, e, n) {
      return ((s(e, n) * t + f(e, n)) * t + l(e)) * t;
    }
    function p(t, e, n) {
      return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e);
    }
    t.exports = function (t, e, s, f) {
      if (!(0 <= t && t <= 1 && 0 <= s && s <= 1))
        throw new Error('bezier x values must be in [0, 1] range');
      var l = c ? new Float32Array(a) : new Array(a);
      if (t !== e || s !== f) for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);
      function h(e) {
        for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
        var h = c + ((e - l[--f]) / (l[f + 1] - l[f])) * u,
          E = p(h, t, s);
        return E >= r
          ? (function (t, e, r, i) {
              for (var o = 0; o < n; ++o) {
                var a = p(e, r, i);
                if (0 === a) return e;
                e -= (d(e, r, i) - t) / a;
              }
              return e;
            })(e, h, t, s)
          : 0 === E
          ? h
          : (function (t, e, n, r, a) {
              var u,
                c,
                s = 0;
              do {
                (u = d((c = e + (n - e) / 2), r, a) - t) > 0
                  ? (n = c)
                  : (e = c);
              } while (Math.abs(u) > i && ++s < o);
              return c;
            })(e, c, c + u, t, s);
      }
      return function (n) {
        return t === e && s === f
          ? n
          : 0 === n
          ? 0
          : 1 === n
          ? 1
          : d(h(n), e, f);
      };
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(1)(n(120)),
      i = n(1),
      o = n(18);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.optimizeFloat = c),
      (e.createBezierEasing = function (t) {
        return u.default.apply(void 0, (0, r.default)(t));
      }),
      (e.applyEasing = function (t, e, n) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (n) return c(e > 0 ? n(e) : e);
        return c(e > 0 && t && a[t] ? a[t](e) : e);
      });
    var a = o(n(117)),
      u = i(n(118));
    function c(t) {
      var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        r = Math.pow(n, e),
        i = Number(Math.round(t * r) / r);
      return Math.abs(i) > 1e-4 ? i : 0;
    }
  },
  function (t, e, n) {
    var r = n(265),
      i = n(266),
      o = n(267);
    t.exports = function (t) {
      return r(t) || i(t) || o();
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(1)(n(21));
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.isPluginType = function (t) {
        return t === o.ActionTypeConsts.PLUGIN_LOTTIE;
      }),
      (e.clearPlugin =
        e.renderPlugin =
        e.createPluginInstance =
        e.getPluginDestination =
        e.getPluginDuration =
        e.getPluginOrigin =
        e.getPluginConfig =
          void 0);
    var i = n(269),
      o = n(4),
      a = n(48),
      u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
        getConfig: i.getPluginConfig,
        getOrigin: i.getPluginOrigin,
        getDuration: i.getPluginDuration,
        getDestination: i.getPluginDestination,
        createInstance: i.createPluginInstance,
        render: i.renderPlugin,
        clear: i.clearPlugin
      });
    var c = function (t) {
        return function (e) {
          if (!a.IS_BROWSER_ENV)
            return function () {
              return null;
            };
          var n = u[e];
          if (!n) throw new Error('IX2 no plugin configured for: '.concat(e));
          var r = n[t];
          if (!r) throw new Error('IX2 invalid plugin method: '.concat(t));
          return r;
        };
      },
      s = c('getConfig');
    e.getPluginConfig = s;
    var f = c('getOrigin');
    e.getPluginOrigin = f;
    var l = c('getDuration');
    e.getPluginDuration = l;
    var d = c('getDestination');
    e.getPluginDestination = d;
    var p = c('createInstance');
    e.createPluginInstance = p;
    var v = c('render');
    e.renderPlugin = v;
    var h = c('clear');
    e.clearPlugin = h;
  },
  function (t, e, n) {
    var r = n(123),
      i = n(276)(r);
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(274),
      i = n(35);
    t.exports = function (t, e) {
      return t && r(t, e, i);
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(1)(n(120)),
      i = n(18),
      o = n(1);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.observeRequests = function (t) {
        P({
          store: t,
          select: function (t) {
            var e = t.ixRequest;
            return e.preview;
          },
          onChange: et
        }),
          P({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.playback;
            },
            onChange: rt
          }),
          P({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.stop;
            },
            onChange: it
          }),
          P({
            store: t,
            select: function (t) {
              var e = t.ixRequest;
              return e.clear;
            },
            onChange: ot
          });
      }),
      (e.startEngine = at),
      (e.stopEngine = ut),
      (e.stopAllActionGroups = ht),
      (e.stopActionGroup = Et),
      (e.startActionGroup = gt);
    var a = o(n(30)),
      u = o(n(283)),
      c = o(n(96)),
      s = o(n(60)),
      f = o(n(284)),
      l = o(n(290)),
      d = o(n(302)),
      p = o(n(303)),
      v = o(n(304)),
      h = o(n(307)),
      E = n(4),
      g = n(14),
      y = n(65),
      _ = i(n(310)),
      m = o(n(311)),
      I = Object.keys(E.QuickEffectIds),
      b = function (t) {
        return I.includes(t);
      },
      T = E.IX2EngineConstants,
      w = T.COLON_DELIMITER,
      O = T.BOUNDARY_SELECTOR,
      A = T.HTML_ELEMENT,
      S = T.RENDER_GENERAL,
      x = T.W_MOD_IX,
      R = g.IX2VanillaUtils,
      N = R.getAffectedElements,
      C = R.getElementId,
      L = R.getDestinationValues,
      P = R.observeStore,
      D = R.getInstanceId,
      M = R.renderHTMLElement,
      j = R.clearAllStyles,
      F = R.getMaxDurationItemIndex,
      k = R.getComputedStyle,
      X = R.getInstanceOrigin,
      G = R.reduceListToGroup,
      V = R.shouldNamespaceEventParameter,
      U = R.getNamespacedParameterId,
      B = R.shouldAllowMediaQuery,
      W = R.cleanupHTMLElement,
      H = R.stringifyTarget,
      z = R.mediaQueriesEqual,
      Y = R.shallowEqual,
      K = g.IX2VanillaPlugins,
      Q = K.isPluginType,
      q = K.createPluginInstance,
      $ = K.getPluginDuration,
      Z = navigator.userAgent,
      J = Z.match(/iPad/i) || Z.match(/iPhone/),
      tt = 12;
    function et(t, e) {
      var n = t.rawData,
        r = function () {
          at({ store: e, rawData: n, allowEvents: !0 }), nt();
        };
      t.defer ? setTimeout(r, 0) : r();
    }
    function nt() {
      document.dispatchEvent(new CustomEvent('IX2_PAGE_UPDATE'));
    }
    function rt(t, e) {
      var n = t.actionTypeId,
        r = t.actionListId,
        i = t.actionItemId,
        o = t.eventId,
        a = t.allowEvents,
        u = t.immediate,
        c = t.testManual,
        s = t.verbose,
        f = void 0 === s || s,
        l = t.rawData;
      if (r && i && l && u) {
        var d = l.actionLists[r];
        d && (l = G({ actionList: d, actionItemId: i, rawData: l }));
      }
      if (
        (at({ store: e, rawData: l, allowEvents: a, testManual: c }),
        (r && n === E.ActionTypeConsts.GENERAL_START_ACTION) || b(n))
      ) {
        Et({ store: e, actionListId: r }),
          vt({ store: e, actionListId: r, eventId: o });
        var p = gt({
          store: e,
          eventId: o,
          actionListId: r,
          immediate: u,
          verbose: f
        });
        f &&
          p &&
          e.dispatch(
            (0, y.actionListPlaybackChanged)({ actionListId: r, isPlaying: !u })
          );
      }
    }
    function it(t, e) {
      var n = t.actionListId;
      n ? Et({ store: e, actionListId: n }) : ht({ store: e }), ut(e);
    }
    function ot(t, e) {
      ut(e), j({ store: e, elementApi: _ });
    }
    function at(t) {
      var e,
        n = t.store,
        i = t.rawData,
        o = t.allowEvents,
        a = t.testManual,
        u = n.getState().ixSession;
      i && n.dispatch((0, y.rawDataImported)(i)),
        u.active ||
          (n.dispatch(
            (0, y.sessionInitialized)({
              hasBoundaryNodes: Boolean(document.querySelector(O)),
              reducedMotion:
                document.body.hasAttribute('data-wf-ix-vacation') &&
                window.matchMedia('(prefers-reduced-motion)').matches
            })
          ),
          o &&
            ((function (t) {
              var e = t.getState().ixData.eventTypeMap;
              ft(t),
                (0, v.default)(e, function (e, n) {
                  var i = m.default[n];
                  i
                    ? (function (t) {
                        var e = t.logic,
                          n = t.store,
                          i = t.events;
                        !(function (t) {
                          if (J) {
                            var e = {},
                              n = '';
                            for (var r in t) {
                              var i = t[r],
                                o = i.eventTypeId,
                                a = i.target,
                                u = _.getQuerySelector(a);
                              e[u] ||
                                (o !== E.EventTypeConsts.MOUSE_CLICK &&
                                  o !== E.EventTypeConsts.MOUSE_SECOND_CLICK) ||
                                ((e[u] = !0),
                                (n +=
                                  u +
                                  '{cursor: pointer;touch-action: manipulation;}'));
                            }
                            if (n) {
                              var c = document.createElement('style');
                              (c.textContent = n), document.body.appendChild(c);
                            }
                          }
                        })(i);
                        var o = e.types,
                          a = e.handler,
                          u = n.getState().ixData,
                          l = u.actionLists,
                          d = lt(i, pt);
                        if ((0, f.default)(d)) {
                          (0, v.default)(d, function (t, e) {
                            var o = i[e],
                              a = o.action,
                              f = o.id,
                              d = o.mediaQueries,
                              p = void 0 === d ? u.mediaQueryKeys : d,
                              v = a.config.actionListId;
                            if (
                              (z(p, u.mediaQueryKeys) ||
                                n.dispatch((0, y.mediaQueriesDefined)()),
                              a.actionTypeId ===
                                E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION)
                            ) {
                              var h = Array.isArray(o.config)
                                ? o.config
                                : [o.config];
                              h.forEach(function (e) {
                                var i = e.continuousParameterGroupId,
                                  o = (0, s.default)(
                                    l,
                                    ''.concat(v, '.continuousParameterGroups'),
                                    []
                                  ),
                                  a = (0, c.default)(o, function (t) {
                                    var e = t.id;
                                    return e === i;
                                  }),
                                  u = (e.smoothing || 0) / 100,
                                  d = (e.restingState || 0) / 100;
                                a &&
                                  t.forEach(function (t, i) {
                                    var o = f + w + i;
                                    !(function (t) {
                                      var e = t.store,
                                        n = t.eventStateKey,
                                        i = t.eventTarget,
                                        o = t.eventId,
                                        a = t.eventConfig,
                                        u = t.actionListId,
                                        c = t.parameterGroup,
                                        f = t.smoothing,
                                        l = t.restingValue,
                                        d = e.getState(),
                                        p = d.ixData,
                                        v = d.ixSession,
                                        h = p.events[o],
                                        E = h.eventTypeId,
                                        g = {},
                                        y = {},
                                        m = [],
                                        I = c.continuousActionGroups,
                                        b = c.id;
                                      V(E, a) && (b = U(n, b));
                                      var T =
                                        v.hasBoundaryNodes && i
                                          ? _.getClosestElement(i, O)
                                          : null;
                                      I.forEach(function (t) {
                                        var e = t.keyframe,
                                          n = t.actionItems;
                                        n.forEach(function (t) {
                                          var n = t.actionTypeId,
                                            o = t.config.target;
                                          if (o) {
                                            var a = o.boundaryMode ? T : null,
                                              u = H(o) + w + n;
                                            if (
                                              ((y[u] = (function () {
                                                var t,
                                                  e =
                                                    arguments.length > 0 &&
                                                    void 0 !== arguments[0]
                                                      ? arguments[0]
                                                      : [],
                                                  n =
                                                    arguments.length > 1
                                                      ? arguments[1]
                                                      : void 0,
                                                  i =
                                                    arguments.length > 2
                                                      ? arguments[2]
                                                      : void 0,
                                                  o = (0, r.default)(e);
                                                return (
                                                  o.some(function (e, r) {
                                                    return (
                                                      e.keyframe === n &&
                                                      ((t = r), !0)
                                                    );
                                                  }),
                                                  null == t &&
                                                    ((t = o.length),
                                                    o.push({
                                                      keyframe: n,
                                                      actionItems: []
                                                    })),
                                                  o[t].actionItems.push(i),
                                                  o
                                                );
                                              })(y[u], e, t)),
                                              !g[u])
                                            ) {
                                              g[u] = !0;
                                              var c = t.config;
                                              N({
                                                config: c,
                                                event: h,
                                                eventTarget: i,
                                                elementRoot: a,
                                                elementApi: _
                                              }).forEach(function (t) {
                                                m.push({ element: t, key: u });
                                              });
                                            }
                                          }
                                        });
                                      }),
                                        m.forEach(function (t) {
                                          var n = t.element,
                                            r = t.key,
                                            i = y[r],
                                            a = (0, s.default)(
                                              i,
                                              '[0].actionItems[0]',
                                              {}
                                            ),
                                            c = a.actionTypeId,
                                            d = Q(c) ? q(c)(n, a) : null,
                                            p = L(
                                              {
                                                element: n,
                                                actionItem: a,
                                                elementApi: _
                                              },
                                              d
                                            );
                                          yt({
                                            store: e,
                                            element: n,
                                            eventId: o,
                                            actionListId: u,
                                            actionItem: a,
                                            destination: p,
                                            continuous: !0,
                                            parameterId: b,
                                            actionGroups: i,
                                            smoothing: f,
                                            restingValue: l,
                                            pluginInstance: d
                                          });
                                        });
                                    })({
                                      store: n,
                                      eventStateKey: o,
                                      eventTarget: t,
                                      eventId: f,
                                      eventConfig: e,
                                      actionListId: v,
                                      parameterGroup: a,
                                      smoothing: u,
                                      restingValue: d
                                    });
                                  });
                              });
                            }
                            (a.actionTypeId ===
                              E.ActionTypeConsts.GENERAL_START_ACTION ||
                              b(a.actionTypeId)) &&
                              vt({ store: n, actionListId: v, eventId: f });
                          });
                          var p = function (t) {
                              var e = n.getState(),
                                r = e.ixSession;
                              dt(d, function (e, o, c) {
                                var s = i[o],
                                  f = r.eventState[c],
                                  l = s.action,
                                  d = s.mediaQueries,
                                  p = void 0 === d ? u.mediaQueryKeys : d;
                                if (B(p, r.mediaQueryKey)) {
                                  var v = function () {
                                    var r =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                          ? arguments[0]
                                          : {},
                                      i = a(
                                        {
                                          store: n,
                                          element: e,
                                          event: s,
                                          eventConfig: r,
                                          nativeEvent: t,
                                          eventStateKey: c
                                        },
                                        f
                                      );
                                    Y(i, f) ||
                                      n.dispatch(
                                        (0, y.eventStateChanged)(c, i)
                                      );
                                  };
                                  if (
                                    l.actionTypeId ===
                                    E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                  ) {
                                    var h = Array.isArray(s.config)
                                      ? s.config
                                      : [s.config];
                                    h.forEach(v);
                                  } else v();
                                }
                              });
                            },
                            g = (0, h.default)(p, tt),
                            m = function (t) {
                              var e = t.target,
                                r = void 0 === e ? document : e,
                                i = t.types,
                                o = t.throttle;
                              i.split(' ')
                                .filter(Boolean)
                                .forEach(function (t) {
                                  var e = o ? g : p;
                                  r.addEventListener(t, e),
                                    n.dispatch(
                                      (0, y.eventListenerAdded)(r, [t, e])
                                    );
                                });
                            };
                          Array.isArray(o)
                            ? o.forEach(m)
                            : 'string' == typeof o && m(e);
                        }
                      })({ logic: i, store: t, events: e })
                    : console.warn('IX2 event type not configured: '.concat(n));
                }),
                t.getState().ixSession.eventListeners.length &&
                  (function (t) {
                    var e = function () {
                      ft(t);
                    };
                    st.forEach(function (n) {
                      window.addEventListener(n, e),
                        t.dispatch((0, y.eventListenerAdded)(window, [n, e]));
                    }),
                      e();
                  })(t);
            })(n),
            -1 === (e = document.documentElement).className.indexOf(x) &&
              (e.className += ' '.concat(x)),
            n.getState().ixSession.hasDefinedMediaQueries &&
              (function (t) {
                P({
                  store: t,
                  select: function (t) {
                    return t.ixSession.mediaQueryKey;
                  },
                  onChange: function () {
                    ut(t),
                      j({ store: t, elementApi: _ }),
                      at({ store: t, allowEvents: !0 }),
                      nt();
                  }
                });
              })(n)),
          n.dispatch((0, y.sessionStarted)()),
          (function (t, e) {
            !(function n(r) {
              var i = t.getState(),
                o = i.ixSession,
                a = i.ixParameters;
              o.active &&
                (t.dispatch((0, y.animationFrameChanged)(r, a)),
                e
                  ? (function (t, e) {
                      var n = P({
                        store: t,
                        select: function (t) {
                          return t.ixSession.tick;
                        },
                        onChange: function (t) {
                          e(t), n();
                        }
                      });
                    })(t, n)
                  : requestAnimationFrame(n));
            })(window.performance.now());
          })(n, a));
    }
    function ut(t) {
      var e = t.getState().ixSession;
      e.active &&
        (e.eventListeners.forEach(ct), t.dispatch((0, y.sessionStopped)()));
    }
    function ct(t) {
      var e = t.target,
        n = t.listenerParams;
      e.removeEventListener.apply(e, n);
    }
    var st = ['resize', 'orientationchange'];
    function ft(t) {
      var e = t.getState(),
        n = e.ixSession,
        r = e.ixData,
        i = window.innerWidth;
      if (i !== n.viewportWidth) {
        var o = r.mediaQueries;
        t.dispatch((0, y.viewportWidthChanged)({ width: i, mediaQueries: o }));
      }
    }
    var lt = function (t, e) {
        return (0, l.default)((0, p.default)(t, e), d.default);
      },
      dt = function (t, e) {
        (0, v.default)(t, function (t, n) {
          t.forEach(function (t, r) {
            e(t, n, n + w + r);
          });
        });
      },
      pt = function (t) {
        var e = { target: t.target, targets: t.targets };
        return N({ config: e, elementApi: _ });
      };
    function vt(t) {
      var e = t.store,
        n = t.actionListId,
        r = t.eventId,
        i = e.getState(),
        o = i.ixData,
        a = i.ixSession,
        u = o.actionLists,
        c = o.events[r],
        f = u[n];
      if (f && f.useFirstGroupAsInitialState) {
        var l = (0, s.default)(f, 'actionItemGroups[0].actionItems', []),
          d = (0, s.default)(c, 'mediaQueries', o.mediaQueryKeys);
        if (!B(d, a.mediaQueryKey)) return;
        l.forEach(function (t) {
          var i,
            o = t.config,
            a = t.actionTypeId,
            u =
              !0 ===
              (null == o
                ? void 0
                : null === (i = o.target) || void 0 === i
                ? void 0
                : i.useEventTarget)
                ? { target: c.target, targets: c.targets }
                : o,
            s = N({ config: u, event: c, elementApi: _ }),
            f = Q(a);
          s.forEach(function (i) {
            var o = f ? q(a)(i, t) : null;
            yt({
              destination: L({ element: i, actionItem: t, elementApi: _ }, o),
              immediate: !0,
              store: e,
              element: i,
              eventId: r,
              actionItem: t,
              actionListId: n,
              pluginInstance: o
            });
          });
        });
      }
    }
    function ht(t) {
      var e = t.store,
        n = e.getState().ixInstances;
      (0, v.default)(n, function (t) {
        if (!t.continuous) {
          var n = t.actionListId,
            r = t.verbose;
          _t(t, e),
            r &&
              e.dispatch(
                (0, y.actionListPlaybackChanged)({
                  actionListId: n,
                  isPlaying: !1
                })
              );
        }
      });
    }
    function Et(t) {
      var e = t.store,
        n = t.eventId,
        r = t.eventTarget,
        i = t.eventStateKey,
        o = t.actionListId,
        a = e.getState(),
        u = a.ixInstances,
        c =
          a.ixSession.hasBoundaryNodes && r ? _.getClosestElement(r, O) : null;
      (0, v.default)(u, function (t) {
        var r = (0, s.default)(t, 'actionItem.config.target.boundaryMode'),
          a = !i || t.eventStateKey === i;
        if (t.actionListId === o && t.eventId === n && a) {
          if (c && r && !_.elementContains(c, t.element)) return;
          _t(t, e),
            t.verbose &&
              e.dispatch(
                (0, y.actionListPlaybackChanged)({
                  actionListId: o,
                  isPlaying: !1
                })
              );
        }
      });
    }
    function gt(t) {
      var e,
        n = t.store,
        r = t.eventId,
        i = t.eventTarget,
        o = t.eventStateKey,
        a = t.actionListId,
        u = t.groupIndex,
        c = void 0 === u ? 0 : u,
        f = t.immediate,
        l = t.verbose,
        d = n.getState(),
        p = d.ixData,
        v = d.ixSession,
        h = p.events[r] || {},
        E = h.mediaQueries,
        g = void 0 === E ? p.mediaQueryKeys : E,
        y = (0, s.default)(p, 'actionLists.'.concat(a), {}),
        m = y.actionItemGroups,
        I = y.useFirstGroupAsInitialState;
      if (!m || !m.length) return !1;
      c >= m.length && (0, s.default)(h, 'config.loop') && (c = 0),
        0 === c && I && c++;
      var T =
          (0 === c || (1 === c && I)) &&
          b(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId)
            ? h.config.delay
            : void 0,
        w = (0, s.default)(m, [c, 'actionItems'], []);
      if (!w.length) return !1;
      if (!B(g, v.mediaQueryKey)) return !1;
      var A = v.hasBoundaryNodes && i ? _.getClosestElement(i, O) : null,
        S = F(w),
        x = !1;
      return (
        w.forEach(function (t, e) {
          var u = t.config,
            s = t.actionTypeId,
            d = Q(s),
            p = u.target;
          if (p) {
            var v = p.boundaryMode ? A : null;
            N({
              config: u,
              event: h,
              eventTarget: i,
              elementRoot: v,
              elementApi: _
            }).forEach(function (u, p) {
              var v = d ? q(s)(u, t) : null,
                h = d ? $(s)(u, t) : null;
              x = !0;
              var E = S === e && 0 === p,
                g = k({ element: u, actionItem: t }),
                y = L({ element: u, actionItem: t, elementApi: _ }, v);
              yt({
                store: n,
                element: u,
                actionItem: t,
                eventId: r,
                eventTarget: i,
                eventStateKey: o,
                actionListId: a,
                groupIndex: c,
                isCarrier: E,
                computedStyle: g,
                destination: y,
                immediate: f,
                verbose: l,
                pluginInstance: v,
                pluginDuration: h,
                instanceDelay: T
              });
            });
          }
        }),
        x
      );
    }
    function yt(t) {
      var e,
        n,
        r = t.store,
        i = t.computedStyle,
        o = (0, u.default)(t, ['store', 'computedStyle']),
        c = o.element,
        s = o.actionItem,
        f = o.immediate,
        l = o.pluginInstance,
        d = o.continuous,
        p = o.restingValue,
        v = o.eventId,
        h = !d,
        g = D(),
        m = r.getState(),
        I = m.ixElements,
        b = m.ixSession,
        T = m.ixData,
        w = C(I, c),
        O = (I[w] || {}).refState,
        A = _.getRefType(c),
        S = b.reducedMotion && E.ReducedMotionTypes[s.actionTypeId];
      if (S && d)
        switch (
          null === (e = T.events[v]) || void 0 === e ? void 0 : e.eventTypeId
        ) {
          case E.EventTypeConsts.MOUSE_MOVE:
          case E.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
            n = p;
            break;
          default:
            n = 0.5;
        }
      var x = X(c, O, i, s, _, l);
      r.dispatch(
        (0, y.instanceAdded)(
          (0, a.default)(
            {
              instanceId: g,
              elementId: w,
              origin: x,
              refType: A,
              skipMotion: S,
              skipToValue: n
            },
            o
          )
        )
      ),
        mt(document.body, 'ix2-animation-started', g),
        f
          ? (function (t, e) {
              var n = t.getState().ixParameters;
              t.dispatch((0, y.instanceStarted)(e, 0)),
                t.dispatch((0, y.animationFrameChanged)(performance.now(), n)),
                It(t.getState().ixInstances[e], t);
            })(r, g)
          : (P({
              store: r,
              select: function (t) {
                return t.ixInstances[g];
              },
              onChange: It
            }),
            h && r.dispatch((0, y.instanceStarted)(g, b.tick)));
    }
    function _t(t, e) {
      mt(document.body, 'ix2-animation-stopping', {
        instanceId: t.id,
        state: e.getState()
      });
      var n = t.elementId,
        r = t.actionItem,
        i = e.getState().ixElements[n] || {},
        o = i.ref;
      i.refType === A && W(o, r, _), e.dispatch((0, y.instanceRemoved)(t.id));
    }
    function mt(t, e, n) {
      var r = document.createEvent('CustomEvent');
      r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r);
    }
    function It(t, e) {
      var n = t.active,
        r = t.continuous,
        i = t.complete,
        o = t.elementId,
        a = t.actionItem,
        u = t.actionTypeId,
        c = t.renderType,
        s = t.current,
        f = t.groupIndex,
        l = t.eventId,
        d = t.eventTarget,
        p = t.eventStateKey,
        v = t.actionListId,
        h = t.isCarrier,
        E = t.styleProp,
        g = t.verbose,
        m = t.pluginInstance,
        I = e.getState(),
        b = I.ixData,
        T = I.ixSession,
        w = (b.events[l] || {}).mediaQueries,
        O = void 0 === w ? b.mediaQueryKeys : w;
      if (B(O, T.mediaQueryKey) && (r || n || i)) {
        if (s || (c === S && i)) {
          e.dispatch((0, y.elementStateChanged)(o, u, s, a));
          var x = e.getState().ixElements[o] || {},
            R = x.ref,
            N = x.refType,
            C = x.refState,
            L = C && C[u];
          switch (N) {
            case A:
              M(R, C, L, l, a, E, _, c, m);
          }
        }
        if (i) {
          if (h) {
            var P = gt({
              store: e,
              eventId: l,
              eventTarget: d,
              eventStateKey: p,
              actionListId: v,
              groupIndex: f + 1,
              verbose: g
            });
            g &&
              !P &&
              e.dispatch(
                (0, y.actionListPlaybackChanged)({
                  actionListId: v,
                  isPlaying: !1
                })
              );
          }
          _t(t, e);
        }
      }
    }
  },
  function (t, e, n) {
    var r = n(126);
    t.exports = function (t, e, n) {
      '__proto__' == e && r
        ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
        : (t[e] = n);
    };
  },
  function (t, e, n) {
    var r = n(11),
      i = (function () {
        try {
          var t = r(Object, 'defineProperty');
          return t({}, '', {}), t;
        } catch (t) {}
      })();
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(8),
      i = Object.create,
      o = (function () {
        function t() {}
        return function (e) {
          if (!r(e)) return {};
          if (i) return i(e);
          t.prototype = e;
          var n = new t();
          return (t.prototype = void 0), n;
        };
      })();
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(324),
      i = n(325),
      o = r
        ? function (t) {
            return r.get(t);
          }
        : i;
    t.exports = o;
  },
  function (t, e, n) {
    var r = n(326),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      for (
        var e = t.name + '', n = r[e], o = i.call(r, e) ? n.length : 0;
        o--;

      ) {
        var a = n[o],
          u = a.func;
        if (null == u || u == t) return a.name;
      }
      return e;
    };
  },
  function (t, e, n) {
    n(131),
      n(133),
      n(134),
      n(135),
      n(136),
      n(39),
      n(137),
      n(70),
      n(138),
      n(333),
      n(334),
      n(335),
      n(336),
      (t.exports = n(341));
  },
  function (t, e, n) {
    'use strict';
    var r = n(3);
    r.define(
      'brand',
      (t.exports = function (t) {
        var e,
          n = {},
          i = document,
          o = t('html'),
          a = t('body'),
          u = '.w-webflow-badge',
          c = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          f =
            'fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange';
        function l() {
          var n =
            i.fullScreen ||
            i.mozFullScreen ||
            i.webkitIsFullScreen ||
            i.msFullscreenElement ||
            Boolean(i.webkitFullscreenElement);
          t(e).attr('style', n ? 'display: none !important;' : '');
        }
        function d() {
          var t = a.children(u),
            n = t.length && t.get(0) === e,
            i = r.env('editor');
          n ? i && t.remove() : (t.length && t.remove(), i || a.append(e));
        }
        return (
          (n.ready = function () {
            var n,
              r,
              a,
              u = o.attr('data-wf-status'),
              p = o.attr('data-wf-domain') || '';
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0),
              u &&
                !s &&
                ((e =
                  e ||
                  ((n = t('<a class="w-webflow-badge"></a>').attr(
                    'href',
                    'https://webflow.com?utm_campaign=brandjs'
                  )),
                  (r = t('<img>')
                    .attr(
                      'src',
                      'https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg'
                    )
                    .attr('alt', '')
                    .css({ marginRight: '8px', width: '16px' })),
                  (a = t('<img>')
                    .attr(
                      'src',
                      'https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg'
                    )
                    .attr('alt', 'Made in Webflow')),
                  n.append(r, a),
                  n[0])),
                d(),
                setTimeout(d, 500),
                t(i).off(f, l).on(f, l));
          }),
          n
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = window.$,
      i = n(69) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = (function () {
      var t = { VERSION: '1.6.0-Webflow' },
        e = {},
        n = Array.prototype,
        r = Object.prototype,
        o = Function.prototype,
        a = (n.push, n.slice),
        u = (n.concat, r.toString, r.hasOwnProperty),
        c = n.forEach,
        s = n.map,
        f = (n.reduce, n.reduceRight, n.filter),
        l = (n.every, n.some),
        d = n.indexOf,
        p = (n.lastIndexOf, Array.isArray, Object.keys),
        v =
          (o.bind,
          (t.each = t.forEach =
            function (n, r, i) {
              if (null == n) return n;
              if (c && n.forEach === c) n.forEach(r, i);
              else if (n.length === +n.length) {
                for (var o = 0, a = n.length; o < a; o++)
                  if (r.call(i, n[o], o, n) === e) return;
              } else {
                var u = t.keys(n);
                for (o = 0, a = u.length; o < a; o++)
                  if (r.call(i, n[u[o]], u[o], n) === e) return;
              }
              return n;
            }));
      (t.map = t.collect =
        function (t, e, n) {
          var r = [];
          return null == t
            ? r
            : s && t.map === s
            ? t.map(e, n)
            : (v(t, function (t, i, o) {
                r.push(e.call(n, t, i, o));
              }),
              r);
        }),
        (t.find = t.detect =
          function (t, e, n) {
            var r;
            return (
              h(t, function (t, i, o) {
                if (e.call(n, t, i, o)) return (r = t), !0;
              }),
              r
            );
          }),
        (t.filter = t.select =
          function (t, e, n) {
            var r = [];
            return null == t
              ? r
              : f && t.filter === f
              ? t.filter(e, n)
              : (v(t, function (t, i, o) {
                  e.call(n, t, i, o) && r.push(t);
                }),
                r);
          });
      var h =
        (t.some =
        t.any =
          function (n, r, i) {
            r || (r = t.identity);
            var o = !1;
            return null == n
              ? o
              : l && n.some === l
              ? n.some(r, i)
              : (v(n, function (t, n, a) {
                  if (o || (o = r.call(i, t, n, a))) return e;
                }),
                !!o);
          });
      (t.contains = t.include =
        function (t, e) {
          return (
            null != t &&
            (d && t.indexOf === d
              ? -1 != t.indexOf(e)
              : h(t, function (t) {
                  return t === e;
                }))
          );
        }),
        (t.delay = function (t, e) {
          var n = a.call(arguments, 2);
          return setTimeout(function () {
            return t.apply(null, n);
          }, e);
        }),
        (t.defer = function (e) {
          return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
        }),
        (t.throttle = function (t) {
          var e, n, r;
          return function () {
            e ||
              ((e = !0),
              (n = arguments),
              (r = this),
              i.frame(function () {
                (e = !1), t.apply(r, n);
              }));
          };
        }),
        (t.debounce = function (e, n, r) {
          var i,
            o,
            a,
            u,
            c,
            s = function s() {
              var f = t.now() - u;
              f < n
                ? (i = setTimeout(s, n - f))
                : ((i = null), r || ((c = e.apply(a, o)), (a = o = null)));
            };
          return function () {
            (a = this), (o = arguments), (u = t.now());
            var f = r && !i;
            return (
              i || (i = setTimeout(s, n)),
              f && ((c = e.apply(a, o)), (a = o = null)),
              c
            );
          };
        }),
        (t.defaults = function (e) {
          if (!t.isObject(e)) return e;
          for (var n = 1, r = arguments.length; n < r; n++) {
            var i = arguments[n];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (t.keys = function (e) {
          if (!t.isObject(e)) return [];
          if (p) return p(e);
          var n = [];
          for (var r in e) t.has(e, r) && n.push(r);
          return n;
        }),
        (t.has = function (t, e) {
          return u.call(t, e);
        }),
        (t.isObject = function (t) {
          return t === Object(t);
        }),
        (t.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (t.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g
        });
      var E = /(.)^/,
        g = {
          "'": "'",
          '\\': '\\',
          '\r': 'r',
          '\n': 'n',
          '\u2028': 'u2028',
          '\u2029': 'u2029'
        },
        y = /\\|'|\r|\n|\u2028|\u2029/g,
        _ = function (t) {
          return '\\' + g[t];
        };
      return (
        (t.template = function (e, n, r) {
          !n && r && (n = r), (n = t.defaults({}, n, t.templateSettings));
          var i = RegExp(
              [
                (n.escape || E).source,
                (n.interpolate || E).source,
                (n.evaluate || E).source
              ].join('|') + '|$',
              'g'
            ),
            o = 0,
            a = "__p+='";
          e.replace(i, function (t, n, r, i, u) {
            return (
              (a += e.slice(o, u).replace(y, _)),
              (o = u + t.length),
              n
                ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : r
                ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                : i && (a += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (a += "';\n"),
            n.variable || (a = 'with(obj||{}){\n' + a + '}\n'),
            (a =
              "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
              a +
              'return __p;\n');
          try {
            var u = new Function(n.variable || 'obj', '_', a);
          } catch (t) {
            throw ((t.source = a), t);
          }
          var c = function (e) {
              return u.call(this, e, t);
            },
            s = n.variable || 'obj';
          return (c.source = 'function(' + s + '){\n' + a + '}'), c;
        }),
        t
      );
    })();
  },
  function (t, e, n) {
    'use strict';
    var r = n(3);
    r.define(
      'edit',
      (t.exports = function (t, e, n) {
        if (
          ((n = n || {}),
          (r.env('test') || r.env('frame')) &&
            !n.fixture &&
            !(function () {
              try {
                return window.top.__Cypress__;
              } catch (t) {
                return !1;
              }
            })())
        )
          return { exit: 1 };
        var i,
          o = t(window),
          a = t(document.documentElement),
          u = document.location,
          c = 'hashchange',
          s =
            n.load ||
            function () {
              (i = !0),
                (window.WebflowEditor = !0),
                o.off(c, l),
                (function (t) {
                  var e = window.document.createElement('iframe');
                  (e.src =
                    'https://webflow.com/site/third-party-cookie-check.html'),
                    (e.style.display = 'none'),
                    (e.sandbox = 'allow-scripts allow-same-origin');
                  var n = function n(r) {
                    'WF_third_party_cookies_unsupported' === r.data
                      ? (g(e, n), t(!1))
                      : 'WF_third_party_cookies_supported' === r.data &&
                        (g(e, n), t(!0));
                  };
                  (e.onerror = function () {
                    g(e, n), t(!1);
                  }),
                    window.addEventListener('message', n, !1),
                    window.document.body.appendChild(e);
                })(function (e) {
                  t.ajax({
                    url: E('https://editor-api.webflow.com/api/editor/view'),
                    data: { siteId: a.attr('data-wf-site') },
                    xhrFields: { withCredentials: !0 },
                    dataType: 'json',
                    crossDomain: !0,
                    success: d(e)
                  });
                });
            },
          f = !1;
        try {
          f =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem('WebflowEditor');
        } catch (t) {}
        function l() {
          i || (/\?edit/.test(u.hash) && s());
        }
        function d(t) {
          return function (e) {
            e
              ? ((e.thirdPartyCookiesSupported = t),
                p(h(e.bugReporterScriptPath), function () {
                  p(h(e.scriptPath), function () {
                    window.WebflowEditor(e);
                  });
                }))
              : console.error('Could not load editor data');
          };
        }
        function p(e, n) {
          t.ajax({ type: 'GET', url: e, dataType: 'script', cache: !0 }).then(
            n,
            v
          );
        }
        function v(t, e, n) {
          throw (console.error('Could not load editor script: ' + e), n);
        }
        function h(t) {
          return t.indexOf('//') >= 0
            ? t
            : E('https://editor-api.webflow.com' + t);
        }
        function E(t) {
          return t.replace(/([^:])\/\//g, '$1/');
        }
        function g(t, e) {
          window.removeEventListener('message', e, !1), t.remove();
        }
        return (
          f
            ? s()
            : u.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) ||
                /\?edit$/.test(u.href)) &&
              s()
            : o.on(c, l).triggerHandler(c),
          {}
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    n(3).define(
      'focus-visible',
      (t.exports = function () {
        function t(t) {
          var e = !0,
            n = !1,
            r = null,
            i = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              'datetime-local': !0
            };
          function o(t) {
            return !!(
              t &&
              t !== document &&
              'HTML' !== t.nodeName &&
              'BODY' !== t.nodeName &&
              'classList' in t &&
              'contains' in t.classList
            );
          }
          function a(t) {
            t.getAttribute('data-wf-focus-visible') ||
              t.setAttribute('data-wf-focus-visible', 'true');
          }
          function u() {
            e = !1;
          }
          function c() {
            document.addEventListener('mousemove', s),
              document.addEventListener('mousedown', s),
              document.addEventListener('mouseup', s),
              document.addEventListener('pointermove', s),
              document.addEventListener('pointerdown', s),
              document.addEventListener('pointerup', s),
              document.addEventListener('touchmove', s),
              document.addEventListener('touchstart', s),
              document.addEventListener('touchend', s);
          }
          function s(t) {
            (t.target.nodeName && 'html' === t.target.nodeName.toLowerCase()) ||
              ((e = !1),
              document.removeEventListener('mousemove', s),
              document.removeEventListener('mousedown', s),
              document.removeEventListener('mouseup', s),
              document.removeEventListener('pointermove', s),
              document.removeEventListener('pointerdown', s),
              document.removeEventListener('pointerup', s),
              document.removeEventListener('touchmove', s),
              document.removeEventListener('touchstart', s),
              document.removeEventListener('touchend', s));
          }
          document.addEventListener(
            'keydown',
            function (n) {
              n.metaKey ||
                n.altKey ||
                n.ctrlKey ||
                (o(t.activeElement) && a(t.activeElement), (e = !0));
            },
            !0
          ),
            document.addEventListener('mousedown', u, !0),
            document.addEventListener('pointerdown', u, !0),
            document.addEventListener('touchstart', u, !0),
            document.addEventListener(
              'visibilitychange',
              function () {
                'hidden' === document.visibilityState && (n && (e = !0), c());
              },
              !0
            ),
            c(),
            t.addEventListener(
              'focus',
              function (t) {
                var n, r, u;
                o(t.target) &&
                  (e ||
                    ((n = t.target),
                    (r = n.type),
                    ('INPUT' === (u = n.tagName) && i[r] && !n.readOnly) ||
                      ('TEXTAREA' === u && !n.readOnly) ||
                      n.isContentEditable)) &&
                  a(t.target);
              },
              !0
            ),
            t.addEventListener(
              'blur',
              function (t) {
                var e;
                o(t.target) &&
                  t.target.hasAttribute('data-wf-focus-visible') &&
                  ((n = !0),
                  window.clearTimeout(r),
                  (r = window.setTimeout(function () {
                    n = !1;
                  }, 100)),
                  (e = t.target).getAttribute('data-wf-focus-visible') &&
                    e.removeAttribute('data-wf-focus-visible'));
              },
              !0
            );
        }
        return {
          ready: function () {
            if ('undefined' != typeof document)
              try {
                document.querySelector(':focus-visible');
              } catch (e) {
                t(document);
              }
          }
        };
      })
    );
  },
  function (t, e, n) {
    'use strict';
    n(3).define(
      'focus-within',
      (t.exports = function () {
        function t(t) {
          for (
            var e = [t], n = null;
            (n = t.parentNode || t.host || t.defaultView);

          )
            e.push(n), (t = n);
          return e;
        }
        function e(t) {
          'function' != typeof t.getAttribute ||
            t.getAttribute('data-wf-focus-within') ||
            t.setAttribute('data-wf-focus-within', 'true');
        }
        function n(t) {
          'function' == typeof t.getAttribute &&
            t.getAttribute('data-wf-focus-within') &&
            t.removeAttribute('data-wf-focus-within');
        }
        return {
          ready: function () {
            if (
              'undefined' != typeof document &&
              document.body.hasAttribute('data-wf-focus-within')
            )
              try {
                document.querySelector(':focus-within');
              } catch (i) {
                (r = function (r) {
                  var i;
                  i ||
                    (window.requestAnimationFrame(function () {
                      (i = !1),
                        'blur' === r.type &&
                          Array.prototype.slice.call(t(r.target)).forEach(n),
                        'focus' === r.type &&
                          Array.prototype.slice.call(t(r.target)).forEach(e);
                    }),
                    (i = !0));
                }),
                  document.addEventListener('focus', r, !0),
                  document.addEventListener('blur', r, !0),
                  e(document.body);
              }
            var r;
          }
        };
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(3);
    r.define(
      'focus',
      (t.exports = function () {
        var t = [],
          e = !1;
        function n(n) {
          e &&
            (n.preventDefault(),
            n.stopPropagation(),
            n.stopImmediatePropagation(),
            t.unshift(n));
        }
        function i(n) {
          (function (t) {
            var e = t.target,
              n = e.tagName;
            return (
              (/^a$/i.test(n) && null != e.href) ||
              (/^(button|textarea)$/i.test(n) && !0 !== e.disabled) ||
              (/^input$/i.test(n) &&
                /^(button|reset|submit|radio|checkbox)$/i.test(e.type) &&
                !e.disabled) ||
              (!/^(button|input|textarea|select|a)$/i.test(n) &&
                !Number.isNaN(Number.parseFloat(e.tabIndex))) ||
              /^audio$/i.test(n) ||
              (/^video$/i.test(n) && !0 === e.controls)
            );
          })(n) &&
            ((e = !0),
            setTimeout(function () {
              for (e = !1, n.target.focus(); t.length > 0; ) {
                var r = t.pop();
                r.target.dispatchEvent(new MouseEvent(r.type, r));
              }
            }, 0));
        }
        return {
          ready: function () {
            'undefined' != typeof document &&
              document.body.hasAttribute('data-wf-focus-within') &&
              r.env.safari &&
              (document.addEventListener('mousedown', i, !0),
              document.addEventListener('mouseup', n, !0),
              document.addEventListener('click', n, !0));
          }
        };
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(3),
      i = n(39);
    r.define(
      'ix',
      (t.exports = function (t, e) {
        var n,
          o,
          a = {},
          u = t(window),
          c = '.w-ix',
          s = t.tram,
          f = r.env,
          l = f(),
          d = f.chrome && f.chrome < 35,
          p = 'none 0s ease 0s',
          v = t(),
          h = {},
          E = [],
          g = [],
          y = [],
          _ = 1,
          m = {
            tabs: '.w-tab-link, .w-tab-pane',
            dropdown: '.w-dropdown',
            slider: '.w-slide',
            navbar: '.w-nav'
          };
        function I(t) {
          t &&
            ((h = {}),
            e.each(t, function (t) {
              h[t.slug] = t.value;
            }),
            b());
        }
        function b() {
          !(function () {
            var e = t('[data-ix]');
            if (!e.length) return;
            e.each(O),
              e.each(T),
              E.length && (r.scroll.on(A), setTimeout(A, 1));
            g.length && r.load(S);
            y.length && setTimeout(x, _);
          })(),
            i.init(),
            r.redraw.up();
        }
        function T(n, o) {
          var u = t(o),
            s = u.attr('data-ix'),
            f = h[s];
          if (f) {
            var d = f.triggers;
            d &&
              (a.style(u, f.style),
              e.each(d, function (t) {
                var e = {},
                  n = t.type,
                  o = t.stepsB && t.stepsB.length;
                function a() {
                  R(t, u, { group: 'A' });
                }
                function s() {
                  R(t, u, { group: 'B' });
                }
                if ('load' !== n) {
                  if ('click' === n)
                    return (
                      u.on('click' + c, function (n) {
                        r.validClick(n.currentTarget) &&
                          ('#' === u.attr('href') && n.preventDefault(),
                          R(t, u, { group: e.clicked ? 'B' : 'A' }),
                          o && (e.clicked = !e.clicked));
                      }),
                      void (v = v.add(u))
                    );
                  if ('hover' === n)
                    return (
                      u.on('mouseenter' + c, a),
                      u.on('mouseleave' + c, s),
                      void (v = v.add(u))
                    );
                  if ('scroll' !== n) {
                    var f = m[n];
                    if (f) {
                      var d = u.closest(f);
                      return (
                        d.on(i.types.INTRO, a).on(i.types.OUTRO, s),
                        void (v = v.add(d))
                      );
                    }
                  } else
                    E.push({
                      el: u,
                      trigger: t,
                      state: { active: !1 },
                      offsetTop: w(t.offsetTop),
                      offsetBot: w(t.offsetBot)
                    });
                } else t.preload && !l ? g.push(a) : y.push(a);
              }));
          }
        }
        function w(t) {
          if (!t) return 0;
          t = String(t);
          var e = parseInt(t, 10);
          return e != e
            ? 0
            : (t.indexOf('%') > 0 && (e /= 100) >= 1 && (e = 0.999), e);
        }
        function O(e, n) {
          t(n).off(c);
        }
        function A() {
          for (
            var t = u.scrollTop(), e = u.height(), n = E.length, r = 0;
            r < n;
            r++
          ) {
            var i = E[r],
              o = i.el,
              a = i.trigger,
              c = a.stepsB && a.stepsB.length,
              s = i.state,
              f = o.offset().top,
              l = o.outerHeight(),
              d = i.offsetTop,
              p = i.offsetBot;
            d < 1 && d > 0 && (d *= e), p < 1 && p > 0 && (p *= e);
            var v = f + l - d >= t && f + p <= t + e;
            v !== s.active &&
              (!1 !== v || c) &&
              ((s.active = v), R(a, o, { group: v ? 'A' : 'B' }));
          }
        }
        function S() {
          for (var t = g.length, e = 0; e < t; e++) g[e]();
        }
        function x() {
          for (var t = y.length, e = 0; e < t; e++) y[e]();
        }
        function R(e, r, i, o) {
          var a = (i = i || {}).done,
            u = e.preserve3d;
          if (!n || i.force) {
            var c = i.group || 'A',
              f = e['loop' + c],
              p = e['steps' + c];
            if (p && p.length) {
              if ((p.length < 2 && (f = !1), !o)) {
                var v = e.selector;
                v &&
                  ((r = e.descend
                    ? r.find(v)
                    : e.siblings
                    ? r.siblings(v)
                    : t(v)),
                  l && r.attr('data-ix-affect', 1)),
                  d && r.addClass('w-ix-emptyfix'),
                  u && r.css('transform-style', 'preserve-3d');
              }
              for (var h = s(r), E = { omit3d: !u }, g = 0; g < p.length; g++)
                N(h, p[g], E);
              E.start ? h.then(y) : y();
            }
          }
          function y() {
            if (f) return R(e, r, i, !0);
            'auto' === E.width && h.set({ width: 'auto' }),
              'auto' === E.height && h.set({ height: 'auto' }),
              a && a();
          }
        }
        function N(t, e, n) {
          var i = 'add',
            o = 'start';
          n.start && (i = o = 'then');
          var a = e.transition;
          if (a) {
            a = a.split(',');
            for (var u = 0; u < a.length; u++) {
              var c = a[u];
              t[i](c);
            }
          }
          var s = C(e, n) || {};
          if (
            (null != s.width && (n.width = s.width),
            null != s.height && (n.height = s.height),
            null == a)
          ) {
            n.start
              ? t.then(function () {
                  var e = this.queue;
                  this.set(s),
                    s.display && (t.redraw(), r.redraw.up()),
                    (this.queue = e),
                    this.next();
                })
              : (t.set(s), s.display && (t.redraw(), r.redraw.up()));
            var f = s.wait;
            null != f && (t.wait(f), (n.start = !0));
          } else {
            if (s.display) {
              var l = s.display;
              delete s.display,
                n.start
                  ? t.then(function () {
                      var t = this.queue;
                      this.set({ display: l }).redraw(),
                        r.redraw.up(),
                        (this.queue = t),
                        this.next();
                    })
                  : (t.set({ display: l }).redraw(), r.redraw.up());
            }
            t[o](s), (n.start = !0);
          }
        }
        function C(t, e) {
          var n = e && e.omit3d,
            r = {},
            i = !1;
          for (var o in t)
            'transition' !== o &&
              'keysort' !== o &&
              (!n ||
                ('z' !== o &&
                  'rotateX' !== o &&
                  'rotateY' !== o &&
                  'scaleZ' !== o)) &&
              ((r[o] = t[o]), (i = !0));
          return i ? r : null;
        }
        return (
          (a.init = function (t) {
            setTimeout(function () {
              I(t);
            }, 1);
          }),
          (a.preview = function () {
            (n = !1),
              (_ = 100),
              setTimeout(function () {
                I(window.__wf_ix);
              }, 1);
          }),
          (a.design = function () {
            (n = !0), a.destroy();
          }),
          (a.destroy = function () {
            (o = !0),
              v.each(O),
              r.scroll.off(A),
              i.async(),
              (E = []),
              (g = []),
              (y = []);
          }),
          (a.ready = function () {
            if (l) return f('design') ? a.design() : a.preview();
            h && o && ((o = !1), b());
          }),
          (a.run = R),
          (a.style = l
            ? function (e, n) {
                var r = s(e);
                if (t.isEmptyObject(n)) return;
                e.css('transition', '');
                var i = e.css('transition');
                i === p && (i = r.upstream = null);
                (r.upstream = p), r.set(C(n)), (r.upstream = i);
              }
            : function (t, e) {
                s(t).set(C(e));
              }),
          a
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(3),
      i = n(139);
    i.setEnv(r.env),
      r.define(
        'ix2',
        (t.exports = function () {
          return i;
        })
      );
  },
  function (t, e, n) {
    'use strict';
    var r = n(18),
      i = n(1);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.setEnv = function (t) {
        t() && (0, u.observeRequests)(s);
      }),
      (e.init = function (t) {
        f(), (0, u.startEngine)({ store: s, rawData: t, allowEvents: !0 });
      }),
      (e.destroy = f),
      (e.actions = e.store = void 0),
      n(140);
    var o = n(88),
      a = i(n(187)),
      u = n(124),
      c = r(n(65));
    e.actions = c;
    var s = (0, o.createStore)(a.default);
    function f() {
      (0, u.stopEngine)(s);
    }
    e.store = s;
  },
  function (t, e, n) {
    var r = n(141);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(142);
    t.exports = r;
  },
  function (t, e, n) {
    n(143);
    var r = n(175);
    t.exports = r('Array', 'includes');
  },
  function (t, e, n) {
    'use strict';
    var r = n(144),
      i = n(86).includes,
      o = n(170);
    r(
      { target: 'Array', proto: !0 },
      {
        includes: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        }
      }
    ),
      o('includes');
  },
  function (t, e, n) {
    var r = n(0),
      i = n(71).f,
      o = n(43),
      a = n(158),
      u = n(42),
      c = n(162),
      s = n(169);
    t.exports = function (t, e) {
      var n,
        f,
        l,
        d,
        p,
        v = t.target,
        h = t.global,
        E = t.stat;
      if ((n = h ? r : E ? r[v] || u(v, {}) : (r[v] || {}).prototype))
        for (f in e) {
          if (
            ((d = e[f]),
            (l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f]),
            !s(h ? f : v + (E ? '.' : '#') + f, t.forced) && void 0 !== l)
          ) {
            if (typeof d == typeof l) continue;
            c(d, l);
          }
          (t.sham || (l && l.sham)) && o(d, 'sham', !0), a(n, f, d, t);
        }
    };
  },
  function (t, e, n) {
    'use strict';
    var r = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !r.call({ 1: 2 }, 1);
    e.f = o
      ? function (t) {
          var e = i(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function (t, e, n) {
    var r = n(0),
      i = n(5),
      o = n(19),
      a = n(147),
      u = r.Object,
      c = i(''.split);
    t.exports = o(function () {
      return !u('z').propertyIsEnumerable(0);
    })
      ? function (t) {
          return 'String' == a(t) ? c(t, '') : u(t);
        }
      : u;
  },
  function (t, e, n) {
    var r = n(5),
      i = r({}.toString),
      o = r(''.slice);
    t.exports = function (t) {
      return o(i(t), 8, -1);
    };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(40),
      o = n(20),
      a = n(75),
      u = n(152),
      c = n(155),
      s = n(78),
      f = r.TypeError,
      l = s('toPrimitive');
    t.exports = function (t, e) {
      if (!o(t) || a(t)) return t;
      var n,
        r = u(t, l);
      if (r) {
        if ((void 0 === e && (e = 'default'), (n = i(r, t, e)), !o(n) || a(n)))
          return n;
        throw f("Can't convert object to primitive value");
      }
      return void 0 === e && (e = 'number'), c(t, e);
    };
  },
  function (t, e, n) {
    var r = n(5);
    t.exports = r({}.isPrototypeOf);
  },
  function (t, e, n) {
    var r,
      i,
      o = n(0),
      a = n(151),
      u = o.process,
      c = o.Deno,
      s = (u && u.versions) || (c && c.version),
      f = s && s.v8;
    f && (i = (r = f.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
      !i &&
        a &&
        (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = a.match(/Chrome\/(\d+)/)) &&
        (i = +r[1]),
      (t.exports = i);
  },
  function (t, e, n) {
    var r = n(27);
    t.exports = r('navigator', 'userAgent') || '';
  },
  function (t, e, n) {
    var r = n(153);
    t.exports = function (t, e) {
      var n = t[e];
      return null == n ? void 0 : r(n);
    };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(7),
      o = n(154),
      a = r.TypeError;
    t.exports = function (t) {
      if (i(t)) return t;
      throw a(o(t) + ' is not a function');
    };
  },
  function (t, e, n) {
    var r = n(0).String;
    t.exports = function (t) {
      try {
        return r(t);
      } catch (t) {
        return 'Object';
      }
    };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(40),
      o = n(7),
      a = n(20),
      u = r.TypeError;
    t.exports = function (t, e) {
      var n, r;
      if ('string' === e && o((n = t.toString)) && !a((r = i(n, t)))) return r;
      if (o((n = t.valueOf)) && !a((r = i(n, t)))) return r;
      if ('string' !== e && o((n = t.toString)) && !a((r = i(n, t)))) return r;
      throw u("Can't convert object to primitive value");
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var r = n(0),
      i = n(73),
      o = r.Object;
    t.exports = function (t) {
      return o(i(t));
    };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(7),
      o = n(9),
      a = n(43),
      u = n(42),
      c = n(83),
      s = n(159),
      f = n(161).CONFIGURABLE,
      l = s.get,
      d = s.enforce,
      p = String(String).split('String');
    (t.exports = function (t, e, n, c) {
      var s,
        l = !!c && !!c.unsafe,
        v = !!c && !!c.enumerable,
        h = !!c && !!c.noTargetGet,
        E = c && void 0 !== c.name ? c.name : e;
      i(n) &&
        ('Symbol(' === String(E).slice(0, 7) &&
          (E = '[' + String(E).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
        (!o(n, 'name') || (f && n.name !== E)) && a(n, 'name', E),
        (s = d(n)).source ||
          (s.source = p.join('string' == typeof E ? E : ''))),
        t !== r
          ? (l ? !h && t[e] && (v = !0) : delete t[e],
            v ? (t[e] = n) : a(t, e, n))
          : v
          ? (t[e] = n)
          : u(e, n);
    })(Function.prototype, 'toString', function () {
      return (i(this) && l(this).source) || c(this);
    });
  },
  function (t, e, n) {
    var r,
      i,
      o,
      a = n(160),
      u = n(0),
      c = n(5),
      s = n(20),
      f = n(43),
      l = n(9),
      d = n(41),
      p = n(84),
      v = n(44),
      h = u.TypeError,
      E = u.WeakMap;
    if (a || d.state) {
      var g = d.state || (d.state = new E()),
        y = c(g.get),
        _ = c(g.has),
        m = c(g.set);
      (r = function (t, e) {
        if (_(g, t)) throw new h('Object already initialized');
        return (e.facade = t), m(g, t, e), e;
      }),
        (i = function (t) {
          return y(g, t) || {};
        }),
        (o = function (t) {
          return _(g, t);
        });
    } else {
      var I = p('state');
      (v[I] = !0),
        (r = function (t, e) {
          if (l(t, I)) throw new h('Object already initialized');
          return (e.facade = t), f(t, I, e), e;
        }),
        (i = function (t) {
          return l(t, I) ? t[I] : {};
        }),
        (o = function (t) {
          return l(t, I);
        });
    }
    t.exports = {
      set: r,
      get: i,
      has: o,
      enforce: function (t) {
        return o(t) ? i(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!s(e) || (n = i(e)).type !== t)
            throw h('Incompatible receiver, ' + t + ' required');
          return n;
        };
      }
    };
  },
  function (t, e, n) {
    var r = n(0),
      i = n(7),
      o = n(83),
      a = r.WeakMap;
    t.exports = i(a) && /native code/.test(o(a));
  },
  function (t, e, n) {
    var r = n(13),
      i = n(9),
      o = Function.prototype,
      a = r && Object.getOwnPropertyDescriptor,
      u = i(o, 'name'),
      c = u && 'something' === function () {}.name,
      s = u && (!r || (r && a(o, 'name').configurable));
    t.exports = { EXISTS: u, PROPER: c, CONFIGURABLE: s };
  },
  function (t, e, n) {
    var r = n(9),
      i = n(163),
      o = n(71),
      a = n(28);
    t.exports = function (t, e) {
      for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
        var f = n[s];
        r(t, f) || u(t, f, c(e, f));
      }
    };
  },
  function (t, e, n) {
    var r = n(27),
      i = n(5),
      o = n(164),
      a = n(168),
      u = n(29),
      c = i([].concat);
    t.exports =
      r('Reflect', 'ownKeys') ||
      function (t) {
        var e = o.f(u(t)),
          n = a.f;
        return n ? c(e, n(t)) : e;
      };
  },
  function (t, e, n) {
    var r = n(85),
      i = n(45).concat('length', 'prototype');
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, i);
      };
  },
  function (t, e, n) {
    var r = n(87),
      i = Math.max,
      o = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? i(n + e, 0) : o(n, e);
    };
  },
  function (t, e, n) {
    var r = n(167);
    t.exports = function (t) {
      return r(t.length);
    };
  },
  function (t, e, n) {
    var r = n(87),
      i = Math.min;
    t.exports = function (t) {
      return t > 0 ? i(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(19),
      i = n(7),
      o = /#|\.prototype\./,
      a = function (t, e) {
        var n = c[u(t)];
        return n == f || (n != s && (i(e) ? r(e) : !!e));
      },
      u = (a.normalize = function (t) {
        return String(t).replace(o, '.').toLowerCase();
      }),
      c = (a.data = {}),
      s = (a.NATIVE = 'N'),
      f = (a.POLYFILL = 'P');
    t.exports = a;
  },
  function (t, e, n) {
    var r = n(78),
      i = n(171),
      o = n(28),
      a = r('unscopables'),
      u = Array.prototype;
    null == u[a] && o.f(u, a, { configurable: !0, value: i(null) }),
      (t.exports = function (t) {
        u[a][t] = !0;
      });
  },
  function (t, e, n) {
    var r,
      i = n(29),
      o = n(172),
      a = n(45),
      u = n(44),
      c = n(174),
      s = n(82),
      f = n(84),
      l = f('IE_PROTO'),
      d = function () {},
      p = function (t) {
        return '<script>' + t + '</script>';
      },
      v = function (t) {
        t.write(p('')), t.close();
        var e = t.parentWindow.Object;
        return (t = null), e;
      },
      h = function () {
        try {
          r = new ActiveXObject('htmlfile');
        } catch (t) {}
        var t, e;
        h =
          'undefined' != typeof document
            ? document.domain && r
              ? v(r)
              : (((e = s('iframe')).style.display = 'none'),
                c.appendChild(e),
                (e.src = String('javascript:')),
                (t = e.contentWindow.document).open(),
                t.write(p('document.F=Object')),
                t.close(),
                t.F)
            : v(r);
        for (var n = a.length; n--; ) delete h.prototype[a[n]];
        return h();
      };
    (u[l] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var n;
          return (
            null !== t
              ? ((d.prototype = i(t)),
                (n = new d()),
                (d.prototype = null),
                (n[l] = t))
              : (n = h()),
            void 0 === e ? n : o(n, e)
          );
        });
  },
  function (t, e, n) {
    var r = n(13),
      i = n(28),
      o = n(29),
      a = n(26),
      u = n(173);
    t.exports = r
      ? Object.defineProperties
      : function (t, e) {
          o(t);
          for (var n, r = a(e), c = u(e), s = c.length, f = 0; s > f; )
            i.f(t, (n = c[f++]), r[n]);
          return t;
        };
  },
  function (t, e, n) {
    var r = n(85),
      i = n(45);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, i);
      };
  },
  function (t, e, n) {
    var r = n(27);
    t.exports = r('document', 'documentElement');
  },
  function (t, e, n) {
    var r = n(0),
      i = n(5);
    t.exports = function (t, e) {
      return i(r[t].prototype[e]);
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(90),
      i = n(179),
      o = n(180),
      a = '[object Null]',
      u = '[object Undefined]',
      c = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
      return null == t
        ? void 0 === t
          ? u
          : a
        : c && c in Object(t)
        ? Object(i.default)(t)
        : Object(o.default)(t);
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(178),
      i = 'object' == typeof self && self && self.Object === Object && self,
      o = r.default || i || Function('return this')();
    e.default = o;
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      function (t) {
        var n = 'object' == typeof t && t && t.Object === Object && t;
        e.default = n;
      }.call(this, n(25));
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(90),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r.default ? r.default.toStringTag : void 0;
    e.default = function (t) {
      var e = o.call(t, u),
        n = t[u];
      try {
        t[u] = void 0;
        var r = !0;
      } catch (t) {}
      var i = a.call(t);
      return r && (e ? (t[u] = n) : delete t[u]), i;
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = Object.prototype.toString;
    e.default = function (t) {
      return r.call(t);
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(182),
      i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i;
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      (e.default = function (t, e) {
        return function (n) {
          return t(e(n));
        };
      });
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      (e.default = function (t) {
        return null != t && 'object' == typeof t;
      });
  },
  function (t, e, n) {
    'use strict';
    n.r(e),
      function (t, r) {
        var i,
          o = n(186);
        i =
          'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : void 0 !== t
            ? t
            : r;
        var a = Object(o.default)(i);
        e.default = a;
      }.call(this, n(25), n(185)(t));
  },
  function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function () {
              return e.l;
            }
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function () {
              return e.i;
            }
          }),
          Object.defineProperty(e, 'exports', { enumerable: !0 }),
          (e.webpackPolyfill = 1);
      }
      return e;
    };
  },
  function (t, e, n) {
    'use strict';
    function r(t) {
      var e,
        n = t.Symbol;
      return (
        'function' == typeof n
          ? n.observable
            ? (e = n.observable)
            : ((e = n('observable')), (n.observable = e))
          : (e = '@@observable'),
        e
      );
    }
    n.r(e),
      n.d(e, 'default', function () {
        return r;
      });
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
    var r = n(88),
      i = n(188),
      o = n(194),
      a = n(195),
      u = n(14),
      c = n(281),
      s = n(282),
      f = u.IX2ElementsReducer.ixElements,
      l = (0, r.combineReducers)({
        ixData: i.ixData,
        ixRequest: o.ixRequest,
        ixSession: a.ixSession,
        ixElements: f,
        ixInstances: c.ixInstances,
        ixParameters: s.ixParameters
      });
    e.default = l;
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.ixData = void 0);
    var r = n(4).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case r:
          return e.payload.ixData || Object.freeze({});
        default:
          return t;
      }
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.QuickEffectDirectionConsts =
        e.QuickEffectIds =
        e.EventLimitAffectedElements =
        e.EventContinuousMouseAxes =
        e.EventBasedOn =
        e.EventAppliesTo =
        e.EventTypeConsts =
          void 0);
    e.EventTypeConsts = {
      NAVBAR_OPEN: 'NAVBAR_OPEN',
      NAVBAR_CLOSE: 'NAVBAR_CLOSE',
      TAB_ACTIVE: 'TAB_ACTIVE',
      TAB_INACTIVE: 'TAB_INACTIVE',
      SLIDER_ACTIVE: 'SLIDER_ACTIVE',
      SLIDER_INACTIVE: 'SLIDER_INACTIVE',
      DROPDOWN_OPEN: 'DROPDOWN_OPEN',
      DROPDOWN_CLOSE: 'DROPDOWN_CLOSE',
      MOUSE_CLICK: 'MOUSE_CLICK',
      MOUSE_SECOND_CLICK: 'MOUSE_SECOND_CLICK',
      MOUSE_DOWN: 'MOUSE_DOWN',
      MOUSE_UP: 'MOUSE_UP',
      MOUSE_OVER: 'MOUSE_OVER',
      MOUSE_OUT: 'MOUSE_OUT',
      MOUSE_MOVE: 'MOUSE_MOVE',
      MOUSE_MOVE_IN_VIEWPORT: 'MOUSE_MOVE_IN_VIEWPORT',
      SCROLL_INTO_VIEW: 'SCROLL_INTO_VIEW',
      SCROLL_OUT_OF_VIEW: 'SCROLL_OUT_OF_VIEW',
      SCROLLING_IN_VIEW: 'SCROLLING_IN_VIEW',
      ECOMMERCE_CART_OPEN: 'ECOMMERCE_CART_OPEN',
      ECOMMERCE_CART_CLOSE: 'ECOMMERCE_CART_CLOSE',
      PAGE_START: 'PAGE_START',
      PAGE_FINISH: 'PAGE_FINISH',
      PAGE_SCROLL_UP: 'PAGE_SCROLL_UP',
      PAGE_SCROLL_DOWN: 'PAGE_SCROLL_DOWN',
      PAGE_SCROLL: 'PAGE_SCROLL'
    };
    e.EventAppliesTo = { ELEMENT: 'ELEMENT', CLASS: 'CLASS', PAGE: 'PAGE' };
    e.EventBasedOn = { ELEMENT: 'ELEMENT', VIEWPORT: 'VIEWPORT' };
    e.EventContinuousMouseAxes = { X_AXIS: 'X_AXIS', Y_AXIS: 'Y_AXIS' };
    e.EventLimitAffectedElements = {
      CHILDREN: 'CHILDREN',
      SIBLINGS: 'SIBLINGS',
      IMMEDIATE_CHILDREN: 'IMMEDIATE_CHILDREN'
    };
    e.QuickEffectIds = {
      FADE_EFFECT: 'FADE_EFFECT',
      SLIDE_EFFECT: 'SLIDE_EFFECT',
      GROW_EFFECT: 'GROW_EFFECT',
      SHRINK_EFFECT: 'SHRINK_EFFECT',
      SPIN_EFFECT: 'SPIN_EFFECT',
      FLY_EFFECT: 'FLY_EFFECT',
      POP_EFFECT: 'POP_EFFECT',
      FLIP_EFFECT: 'FLIP_EFFECT',
      JIGGLE_EFFECT: 'JIGGLE_EFFECT',
      PULSE_EFFECT: 'PULSE_EFFECT',
      DROP_EFFECT: 'DROP_EFFECT',
      BLINK_EFFECT: 'BLINK_EFFECT',
      BOUNCE_EFFECT: 'BOUNCE_EFFECT',
      FLIP_LEFT_TO_RIGHT_EFFECT: 'FLIP_LEFT_TO_RIGHT_EFFECT',
      FLIP_RIGHT_TO_LEFT_EFFECT: 'FLIP_RIGHT_TO_LEFT_EFFECT',
      RUBBER_BAND_EFFECT: 'RUBBER_BAND_EFFECT',
      JELLO_EFFECT: 'JELLO_EFFECT',
      GROW_BIG_EFFECT: 'GROW_BIG_EFFECT',
      SHRINK_BIG_EFFECT: 'SHRINK_BIG_EFFECT',
      PLUGIN_LOTTIE_EFFECT: 'PLUGIN_LOTTIE_EFFECT'
    };
    e.QuickEffectDirectionConsts = {
      LEFT: 'LEFT',
      RIGHT: 'RIGHT',
      BOTTOM: 'BOTTOM',
      TOP: 'TOP',
      BOTTOM_LEFT: 'BOTTOM_LEFT',
      BOTTOM_RIGHT: 'BOTTOM_RIGHT',
      TOP_RIGHT: 'TOP_RIGHT',
      TOP_LEFT: 'TOP_LEFT',
      CLOCKWISE: 'CLOCKWISE',
      COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE'
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.InteractionTypeConsts = void 0);
    e.InteractionTypeConsts = {
      MOUSE_CLICK_INTERACTION: 'MOUSE_CLICK_INTERACTION',
      MOUSE_HOVER_INTERACTION: 'MOUSE_HOVER_INTERACTION',
      MOUSE_MOVE_INTERACTION: 'MOUSE_MOVE_INTERACTION',
      SCROLL_INTO_VIEW_INTERACTION: 'SCROLL_INTO_VIEW_INTERACTION',
      SCROLLING_IN_VIEW_INTERACTION: 'SCROLLING_IN_VIEW_INTERACTION',
      MOUSE_MOVE_IN_VIEWPORT_INTERACTION: 'MOUSE_MOVE_IN_VIEWPORT_INTERACTION',
      PAGE_IS_SCROLLING_INTERACTION: 'PAGE_IS_SCROLLING_INTERACTION',
      PAGE_LOAD_INTERACTION: 'PAGE_LOAD_INTERACTION',
      PAGE_SCROLLED_INTERACTION: 'PAGE_SCROLLED_INTERACTION',
      NAVBAR_INTERACTION: 'NAVBAR_INTERACTION',
      DROPDOWN_INTERACTION: 'DROPDOWN_INTERACTION',
      ECOMMERCE_CART_INTERACTION: 'ECOMMERCE_CART_INTERACTION',
      TAB_INTERACTION: 'TAB_INTERACTION',
      SLIDER_INTERACTION: 'SLIDER_INTERACTION'
    };
  },
  function (t, e, n) {
    'use strict';
    var r,
      i = n(1)(n(21));
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ReducedMotionTypes = void 0);
    var o = n(95).ActionTypeConsts,
      a = o.TRANSFORM_MOVE,
      u = o.TRANSFORM_SCALE,
      c = o.TRANSFORM_ROTATE,
      s = o.TRANSFORM_SKEW,
      f = o.STYLE_SIZE,
      l = o.STYLE_FILTER,
      d =
        ((r = {}),
        (0, i.default)(r, a, !0),
        (0, i.default)(r, u, !0),
        (0, i.default)(r, c, !0),
        (0, i.default)(r, s, !0),
        (0, i.default)(r, f, !0),
        (0, i.default)(r, l, !0),
        r);
    e.ReducedMotionTypes = d;
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.IX2_TEST_FRAME_RENDERED =
        e.IX2_MEDIA_QUERIES_DEFINED =
        e.IX2_VIEWPORT_WIDTH_CHANGED =
        e.IX2_ACTION_LIST_PLAYBACK_CHANGED =
        e.IX2_ELEMENT_STATE_CHANGED =
        e.IX2_INSTANCE_REMOVED =
        e.IX2_INSTANCE_STARTED =
        e.IX2_INSTANCE_ADDED =
        e.IX2_PARAMETER_CHANGED =
        e.IX2_ANIMATION_FRAME_CHANGED =
        e.IX2_EVENT_STATE_CHANGED =
        e.IX2_EVENT_LISTENER_ADDED =
        e.IX2_CLEAR_REQUESTED =
        e.IX2_STOP_REQUESTED =
        e.IX2_PLAYBACK_REQUESTED =
        e.IX2_PREVIEW_REQUESTED =
        e.IX2_SESSION_STOPPED =
        e.IX2_SESSION_STARTED =
        e.IX2_SESSION_INITIALIZED =
        e.IX2_RAW_DATA_IMPORTED =
          void 0);
    e.IX2_RAW_DATA_IMPORTED = 'IX2_RAW_DATA_IMPORTED';
    e.IX2_SESSION_INITIALIZED = 'IX2_SESSION_INITIALIZED';
    e.IX2_SESSION_STARTED = 'IX2_SESSION_STARTED';
    e.IX2_SESSION_STOPPED = 'IX2_SESSION_STOPPED';
    e.IX2_PREVIEW_REQUESTED = 'IX2_PREVIEW_REQUESTED';
    e.IX2_PLAYBACK_REQUESTED = 'IX2_PLAYBACK_REQUESTED';
    e.IX2_STOP_REQUESTED = 'IX2_STOP_REQUESTED';
    e.IX2_CLEAR_REQUESTED = 'IX2_CLEAR_REQUESTED';
    e.IX2_EVENT_LISTENER_ADDED = 'IX2_EVENT_LISTENER_ADDED';
    e.IX2_EVENT_STATE_CHANGED = 'IX2_EVENT_STATE_CHANGED';
    e.IX2_ANIMATION_FRAME_CHANGED = 'IX2_ANIMATION_FRAME_CHANGED';
    e.IX2_PARAMETER_CHANGED = 'IX2_PARAMETER_CHANGED';
    e.IX2_INSTANCE_ADDED = 'IX2_INSTANCE_ADDED';
    e.IX2_INSTANCE_STARTED = 'IX2_INSTANCE_STARTED';
    e.IX2_INSTANCE_REMOVED = 'IX2_INSTANCE_REMOVED';
    e.IX2_ELEMENT_STATE_CHANGED = 'IX2_ELEMENT_STATE_CHANGED';
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = 'IX2_ACTION_LIST_PLAYBACK_CHANGED';
    e.IX2_VIEWPORT_WIDTH_CHANGED = 'IX2_VIEWPORT_WIDTH_CHANGED';
    e.IX2_MEDIA_QUERIES_DEFINED = 'IX2_MEDIA_QUERIES_DEFINED';
    e.IX2_TEST_FRAME_RENDERED = 'IX2_TEST_FRAME_RENDERED';
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.RENDER_PLUGIN =
        e.RENDER_STYLE =
        e.RENDER_GENERAL =
        e.RENDER_TRANSFORM =
        e.ABSTRACT_NODE =
        e.PLAIN_OBJECT =
        e.HTML_ELEMENT =
        e.PRESERVE_3D =
        e.PARENT =
        e.SIBLINGS =
        e.IMMEDIATE_CHILDREN =
        e.CHILDREN =
        e.BAR_DELIMITER =
        e.COLON_DELIMITER =
        e.COMMA_DELIMITER =
        e.AUTO =
        e.WILL_CHANGE =
        e.FLEX =
        e.DISPLAY =
        e.COLOR =
        e.BORDER_COLOR =
        e.BACKGROUND =
        e.BACKGROUND_COLOR =
        e.HEIGHT =
        e.WIDTH =
        e.FILTER =
        e.OPACITY =
        e.SKEW_Y =
        e.SKEW_X =
        e.SKEW =
        e.ROTATE_Z =
        e.ROTATE_Y =
        e.ROTATE_X =
        e.SCALE_3D =
        e.SCALE_Z =
        e.SCALE_Y =
        e.SCALE_X =
        e.TRANSLATE_3D =
        e.TRANSLATE_Z =
        e.TRANSLATE_Y =
        e.TRANSLATE_X =
        e.TRANSFORM =
        e.CONFIG_UNIT =
        e.CONFIG_Z_UNIT =
        e.CONFIG_Y_UNIT =
        e.CONFIG_X_UNIT =
        e.CONFIG_VALUE =
        e.CONFIG_Z_VALUE =
        e.CONFIG_Y_VALUE =
        e.CONFIG_X_VALUE =
        e.BOUNDARY_SELECTOR =
        e.W_MOD_IX =
        e.W_MOD_JS =
        e.WF_PAGE =
        e.IX2_ID_DELIMITER =
          void 0);
    e.IX2_ID_DELIMITER = '|';
    e.WF_PAGE = 'data-wf-page';
    e.W_MOD_JS = 'w-mod-js';
    e.W_MOD_IX = 'w-mod-ix';
    e.BOUNDARY_SELECTOR = '.w-dyn-item';
    e.CONFIG_X_VALUE = 'xValue';
    e.CONFIG_Y_VALUE = 'yValue';
    e.CONFIG_Z_VALUE = 'zValue';
    e.CONFIG_VALUE = 'value';
    e.CONFIG_X_UNIT = 'xUnit';
    e.CONFIG_Y_UNIT = 'yUnit';
    e.CONFIG_Z_UNIT = 'zUnit';
    e.CONFIG_UNIT = 'unit';
    e.TRANSFORM = 'transform';
    e.TRANSLATE_X = 'translateX';
    e.TRANSLATE_Y = 'translateY';
    e.TRANSLATE_Z = 'translateZ';
    e.TRANSLATE_3D = 'translate3d';
    e.SCALE_X = 'scaleX';
    e.SCALE_Y = 'scaleY';
    e.SCALE_Z = 'scaleZ';
    e.SCALE_3D = 'scale3d';
    e.ROTATE_X = 'rotateX';
    e.ROTATE_Y = 'rotateY';
    e.ROTATE_Z = 'rotateZ';
    e.SKEW = 'skew';
    e.SKEW_X = 'skewX';
    e.SKEW_Y = 'skewY';
    e.OPACITY = 'opacity';
    e.FILTER = 'filter';
    e.WIDTH = 'width';
    e.HEIGHT = 'height';
    e.BACKGROUND_COLOR = 'backgroundColor';
    e.BACKGROUND = 'background';
    e.BORDER_COLOR = 'borderColor';
    e.COLOR = 'color';
    e.DISPLAY = 'display';
    e.FLEX = 'flex';
    e.WILL_CHANGE = 'willChange';
    e.AUTO = 'AUTO';
    e.COMMA_DELIMITER = ',';
    e.COLON_DELIMITER = ':';
    e.BAR_DELIMITER = '|';
    e.CHILDREN = 'CHILDREN';
    e.IMMEDIATE_CHILDREN = 'IMMEDIATE_CHILDREN';
    e.SIBLINGS = 'SIBLINGS';
    e.PARENT = 'PARENT';
    e.PRESERVE_3D = 'preserve-3d';
    e.HTML_ELEMENT = 'HTML_ELEMENT';
    e.PLAIN_OBJECT = 'PLAIN_OBJECT';
    e.ABSTRACT_NODE = 'ABSTRACT_NODE';
    e.RENDER_TRANSFORM = 'RENDER_TRANSFORM';
    e.RENDER_GENERAL = 'RENDER_GENERAL';
    e.RENDER_STYLE = 'RENDER_STYLE';
    e.RENDER_PLUGIN = 'RENDER_PLUGIN';
  },
  function (t, e, n) {
    'use strict';
    var r,
      i = n(1)(n(21)),
      o = n(1);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ixRequest = void 0);
    var a = o(n(30)),
      u = n(4),
      c = n(22),
      s = u.IX2EngineActionTypes,
      f = s.IX2_PREVIEW_REQUESTED,
      l = s.IX2_PLAYBACK_REQUESTED,
      d = s.IX2_STOP_REQUESTED,
      p = s.IX2_CLEAR_REQUESTED,
      v = { preview: {}, playback: {}, stop: {}, clear: {} },
      h = Object.create(
        null,
        ((r = {}),
        (0, i.default)(r, f, { value: 'preview' }),
        (0, i.default)(r, l, { value: 'playback' }),
        (0, i.default)(r, d, { value: 'stop' }),
        (0, i.default)(r, p, { value: 'clear' }),
        r)
      );
    e.ixRequest = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
        e = arguments.length > 1 ? arguments[1] : void 0;
      if (e.type in h) {
        var n = [h[e.type]];
        return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload));
      }
      return t;
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ixSession = void 0);
    var r = n(4),
      i = n(22),
      o = r.IX2EngineActionTypes,
      a = o.IX2_SESSION_INITIALIZED,
      u = o.IX2_SESSION_STARTED,
      c = o.IX2_TEST_FRAME_RENDERED,
      s = o.IX2_SESSION_STOPPED,
      f = o.IX2_EVENT_LISTENER_ADDED,
      l = o.IX2_EVENT_STATE_CHANGED,
      d = o.IX2_ANIMATION_FRAME_CHANGED,
      p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
      v = o.IX2_VIEWPORT_WIDTH_CHANGED,
      h = o.IX2_MEDIA_QUERIES_DEFINED,
      E = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1
      };
    e.ixSession = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case a:
          var n = e.payload,
            r = n.hasBoundaryNodes,
            o = n.reducedMotion;
          return (0, i.merge)(t, { hasBoundaryNodes: r, reducedMotion: o });
        case u:
          return (0, i.set)(t, 'active', !0);
        case c:
          var g = e.payload.step,
            y = void 0 === g ? 20 : g;
          return (0, i.set)(t, 'tick', t.tick + y);
        case s:
          return E;
        case d:
          var _ = e.payload.now;
          return (0, i.set)(t, 'tick', _);
        case f:
          var m = (0, i.addLast)(t.eventListeners, e.payload);
          return (0, i.set)(t, 'eventListeners', m);
        case l:
          var I = e.payload,
            b = I.stateKey,
            T = I.newState;
          return (0, i.setIn)(t, ['eventState', b], T);
        case p:
          var w = e.payload,
            O = w.actionListId,
            A = w.isPlaying;
          return (0, i.setIn)(t, ['playbackState', O], A);
        case v:
          for (
            var S = e.payload,
              x = S.width,
              R = S.mediaQueries,
              N = R.length,
              C = null,
              L = 0;
            L < N;
            L++
          ) {
            var P = R[L],
              D = P.key,
              M = P.min,
              j = P.max;
            if (x >= M && x <= j) {
              C = D;
              break;
            }
          }
          return (0, i.merge)(t, { viewportWidth: x, mediaQueryKey: C });
        case h:
          return (0, i.set)(t, 'hasDefinedMediaQueries', !0);
        default:
          return t;
      }
    };
  },
  function (t, e, n) {
    var r = n(197),
      i = n(249),
      o = n(112);
    t.exports = function (t) {
      var e = i(t);
      return 1 == e.length && e[0][2]
        ? o(e[0][0], e[0][1])
        : function (n) {
            return n === t || r(n, t, e);
          };
    };
  },
  function (t, e, n) {
    var r = n(98),
      i = n(102),
      o = 1,
      a = 2;
    t.exports = function (t, e, n, u) {
      var c = n.length,
        s = c,
        f = !u;
      if (null == t) return !s;
      for (t = Object(t); c--; ) {
        var l = n[c];
        if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
      }
      for (; ++c < s; ) {
        var d = (l = n[c])[0],
          p = t[d],
          v = l[1];
        if (f && l[2]) {
          if (void 0 === p && !(d in t)) return !1;
        } else {
          var h = new r();
          if (u) var E = u(p, v, d, t, e, h);
          if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1;
        }
      }
      return !0;
    };
  },
  function (t, e) {
    t.exports = function () {
      (this.__data__ = []), (this.size = 0);
    };
  },
  function (t, e, n) {
    var r = n(32),
      i = Array.prototype.splice;
    t.exports = function (t) {
      var e = this.__data__,
        n = r(e, t);
      return !(
        n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0)
      );
    };
  },
  function (t, e, n) {
    var r = n(32);
    t.exports = function (t) {
      var e = this.__data__,
        n = r(e, t);
      return n < 0 ? void 0 : e[n][1];
    };
  },
  function (t, e, n) {
    var r = n(32);
    t.exports = function (t) {
      return r(this.__data__, t) > -1;
    };
  },
  function (t, e, n) {
    var r = n(32);
    t.exports = function (t, e) {
      var n = this.__data__,
        i = r(n, t);
      return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
    };
  },
  function (t, e, n) {
    var r = n(31);
    t.exports = function () {
      (this.__data__ = new r()), (this.size = 0);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.__data__,
        n = e.delete(t);
      return (this.size = e.size), n;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.get(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e, n) {
    var r = n(31),
      i = n(50),
      o = n(51),
      a = 200;
    t.exports = function (t, e) {
      var n = this.__data__;
      if (n instanceof r) {
        var u = n.__data__;
        if (!i || u.length < a - 1)
          return u.push([t, e]), (this.size = ++n.size), this;
        n = this.__data__ = new o(u);
      }
      return n.set(t, e), (this.size = n.size), this;
    };
  },
  function (t, e, n) {
    var r = n(99),
      i = n(211),
      o = n(8),
      a = n(101),
      u = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      s = Object.prototype,
      f = c.toString,
      l = s.hasOwnProperty,
      d = RegExp(
        '^' +
          f
            .call(l)
            .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      );
    t.exports = function (t) {
      return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
    };
  },
  function (t, e, n) {
    var r = n(23),
      i = Object.prototype,
      o = i.hasOwnProperty,
      a = i.toString,
      u = r ? r.toStringTag : void 0;
    t.exports = function (t) {
      var e = o.call(t, u),
        n = t[u];
      try {
        t[u] = void 0;
        var r = !0;
      } catch (t) {}
      var i = a.call(t);
      return r && (e ? (t[u] = n) : delete t[u]), i;
    };
  },
  function (t, e) {
    var n = Object.prototype.toString;
    t.exports = function (t) {
      return n.call(t);
    };
  },
  function (t, e, n) {
    var r,
      i = n(212),
      o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ''))
        ? 'Symbol(src)_1.' + r
        : '';
    t.exports = function (t) {
      return !!o && o in t;
    };
  },
  function (t, e, n) {
    var r = n(6)['__core-js_shared__'];
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t ? void 0 : t[e];
    };
  },
  function (t, e, n) {
    var r = n(215),
      i = n(31),
      o = n(50);
    t.exports = function () {
      (this.size = 0),
        (this.__data__ = {
          hash: new r(),
          map: new (o || i)(),
          string: new r()
        });
    };
  },
  function (t, e, n) {
    var r = n(216),
      i = n(217),
      o = n(218),
      a = n(219),
      u = n(220);
    function c(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.clear(); ++e < n; ) {
        var r = t[e];
        this.set(r[0], r[1]);
      }
    }
    (c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = o),
      (c.prototype.has = a),
      (c.prototype.set = u),
      (t.exports = c);
  },
  function (t, e, n) {
    var r = n(33);
    t.exports = function () {
      (this.__data__ = r ? r(null) : {}), (this.size = 0);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = this.has(t) && delete this.__data__[t];
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e, n) {
    var r = n(33),
      i = '__lodash_hash_undefined__',
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      if (r) {
        var n = e[t];
        return n === i ? void 0 : n;
      }
      return o.call(e, t) ? e[t] : void 0;
    };
  },
  function (t, e, n) {
    var r = n(33),
      i = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      var e = this.__data__;
      return r ? void 0 !== e[t] : i.call(e, t);
    };
  },
  function (t, e, n) {
    var r = n(33),
      i = '__lodash_hash_undefined__';
    t.exports = function (t, e) {
      var n = this.__data__;
      return (
        (this.size += this.has(t) ? 0 : 1),
        (n[t] = r && void 0 === e ? i : e),
        this
      );
    };
  },
  function (t, e, n) {
    var r = n(34);
    t.exports = function (t) {
      var e = r(this, t).delete(t);
      return (this.size -= e ? 1 : 0), e;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = typeof t;
      return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
        ? '__proto__' !== t
        : null === t;
    };
  },
  function (t, e, n) {
    var r = n(34);
    t.exports = function (t) {
      return r(this, t).get(t);
    };
  },
  function (t, e, n) {
    var r = n(34);
    t.exports = function (t) {
      return r(this, t).has(t);
    };
  },
  function (t, e, n) {
    var r = n(34);
    t.exports = function (t, e) {
      var n = r(this, t),
        i = n.size;
      return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
    };
  },
  function (t, e, n) {
    var r = n(98),
      i = n(103),
      o = n(232),
      a = n(236),
      u = n(59),
      c = n(2),
      s = n(53),
      f = n(55),
      l = 1,
      d = '[object Arguments]',
      p = '[object Array]',
      v = '[object Object]',
      h = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, E, g, y) {
      var _ = c(t),
        m = c(e),
        I = _ ? p : u(t),
        b = m ? p : u(e),
        T = (I = I == d ? v : I) == v,
        w = (b = b == d ? v : b) == v,
        O = I == b;
      if (O && s(t)) {
        if (!s(e)) return !1;
        (_ = !0), (T = !1);
      }
      if (O && !T)
        return (
          y || (y = new r()),
          _ || f(t) ? i(t, e, n, E, g, y) : o(t, e, I, n, E, g, y)
        );
      if (!(n & l)) {
        var A = T && h.call(t, '__wrapped__'),
          S = w && h.call(e, '__wrapped__');
        if (A || S) {
          var x = A ? t.value() : t,
            R = S ? e.value() : e;
          return y || (y = new r()), g(x, R, n, E, y);
        }
      }
      return !!O && (y || (y = new r()), a(t, e, n, E, g, y));
    };
  },
  function (t, e, n) {
    var r = n(51),
      i = n(228),
      o = n(229);
    function a(t) {
      var e = -1,
        n = null == t ? 0 : t.length;
      for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
    }
    (a.prototype.add = a.prototype.push = i),
      (a.prototype.has = o),
      (t.exports = a);
  },
  function (t, e) {
    var n = '__lodash_hash_undefined__';
    t.exports = function (t) {
      return this.__data__.set(t, n), this;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return this.__data__.has(t);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
        if (e(t[n], n, t)) return !0;
      return !1;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return t.has(e);
    };
  },
  function (t, e, n) {
    var r = n(23),
      i = n(233),
      o = n(49),
      a = n(103),
      u = n(234),
      c = n(235),
      s = 1,
      f = 2,
      l = '[object Boolean]',
      d = '[object Date]',
      p = '[object Error]',
      v = '[object Map]',
      h = '[object Number]',
      E = '[object RegExp]',
      g = '[object Set]',
      y = '[object String]',
      _ = '[object Symbol]',
      m = '[object ArrayBuffer]',
      I = '[object DataView]',
      b = r ? r.prototype : void 0,
      T = b ? b.valueOf : void 0;
    t.exports = function (t, e, n, r, b, w, O) {
      switch (n) {
        case I:
          if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            return !1;
          (t = t.buffer), (e = e.buffer);
        case m:
          return !(t.byteLength != e.byteLength || !w(new i(t), new i(e)));
        case l:
        case d:
        case h:
          return o(+t, +e);
        case p:
          return t.name == e.name && t.message == e.message;
        case E:
        case y:
          return t == e + '';
        case v:
          var A = u;
        case g:
          var S = r & s;
          if ((A || (A = c), t.size != e.size && !S)) return !1;
          var x = O.get(t);
          if (x) return x == e;
          (r |= f), O.set(t, e);
          var R = a(A(t), A(e), r, b, w, O);
          return O.delete(t), R;
        case _:
          if (T) return T.call(t) == T.call(e);
      }
      return !1;
    };
  },
  function (t, e, n) {
    var r = n(6).Uint8Array;
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t, r) {
          n[++e] = [r, t];
        }),
        n
      );
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = -1,
        n = Array(t.size);
      return (
        t.forEach(function (t) {
          n[++e] = t;
        }),
        n
      );
    };
  },
  function (t, e, n) {
    var r = n(237),
      i = 1,
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n, a, u, c) {
      var s = n & i,
        f = r(t),
        l = f.length;
      if (l != r(e).length && !s) return !1;
      for (var d = l; d--; ) {
        var p = f[d];
        if (!(s ? p in e : o.call(e, p))) return !1;
      }
      var v = c.get(t),
        h = c.get(e);
      if (v && h) return v == e && h == t;
      var E = !0;
      c.set(t, e), c.set(e, t);
      for (var g = s; ++d < l; ) {
        var y = t[(p = f[d])],
          _ = e[p];
        if (a) var m = s ? a(_, y, p, e, t, c) : a(y, _, p, t, e, c);
        if (!(void 0 === m ? y === _ || u(y, _, n, a, c) : m)) {
          E = !1;
          break;
        }
        g || (g = 'constructor' == p);
      }
      if (E && !g) {
        var I = t.constructor,
          b = e.constructor;
        I != b &&
          'constructor' in t &&
          'constructor' in e &&
          !(
            'function' == typeof I &&
            I instanceof I &&
            'function' == typeof b &&
            b instanceof b
          ) &&
          (E = !1);
      }
      return c.delete(t), c.delete(e), E;
    };
  },
  function (t, e, n) {
    var r = n(104),
      i = n(105),
      o = n(35);
    t.exports = function (t) {
      return r(t, o, i);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
        var a = t[n];
        e(a, n, t) && (o[i++] = a);
      }
      return o;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
      return r;
    };
  },
  function (t, e, n) {
    var r = n(15),
      i = n(12),
      o = '[object Arguments]';
    t.exports = function (t) {
      return i(t) && r(t) == o;
    };
  },
  function (t, e) {
    t.exports = function () {
      return !1;
    };
  },
  function (t, e, n) {
    var r = n(15),
      i = n(56),
      o = n(12),
      a = {};
    (a['[object Float32Array]'] =
      a['[object Float64Array]'] =
      a['[object Int8Array]'] =
      a['[object Int16Array]'] =
      a['[object Int32Array]'] =
      a['[object Uint8Array]'] =
      a['[object Uint8ClampedArray]'] =
      a['[object Uint16Array]'] =
      a['[object Uint32Array]'] =
        !0),
      (a['[object Arguments]'] =
        a['[object Array]'] =
        a['[object ArrayBuffer]'] =
        a['[object Boolean]'] =
        a['[object DataView]'] =
        a['[object Date]'] =
        a['[object Error]'] =
        a['[object Function]'] =
        a['[object Map]'] =
        a['[object Number]'] =
        a['[object Object]'] =
        a['[object RegExp]'] =
        a['[object Set]'] =
        a['[object String]'] =
        a['[object WeakMap]'] =
          !1),
      (t.exports = function (t) {
        return o(t) && i(t.length) && !!a[r(t)];
      });
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e) {
        return t(e);
      };
    };
  },
  function (t, e, n) {
    (function (t) {
      var r = n(100),
        i = e && !e.nodeType && e,
        o = i && 'object' == typeof t && t && !t.nodeType && t,
        a = o && o.exports === i && r.process,
        u = (function () {
          try {
            var t = o && o.require && o.require('util').types;
            return t || (a && a.binding && a.binding('util'));
          } catch (t) {}
        })();
      t.exports = u;
    }.call(this, n(108)(t)));
  },
  function (t, e, n) {
    var r = n(109)(Object.keys, Object);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(11)(n(6), 'DataView');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(11)(n(6), 'Promise');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(11)(n(6), 'Set');
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(111),
      i = n(35);
    t.exports = function (t) {
      for (var e = i(t), n = e.length; n--; ) {
        var o = e[n],
          a = t[o];
        e[n] = [o, a, r(a)];
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(102),
      i = n(60),
      o = n(256),
      a = n(62),
      u = n(111),
      c = n(112),
      s = n(24),
      f = 1,
      l = 2;
    t.exports = function (t, e) {
      return a(t) && u(e)
        ? c(s(t), e)
        : function (n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, f | l);
          };
    };
  },
  function (t, e, n) {
    var r = n(252),
      i =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      o = /\\(\\)?/g,
      a = r(function (t) {
        var e = [];
        return (
          46 === t.charCodeAt(0) && e.push(''),
          t.replace(i, function (t, n, r, i) {
            e.push(r ? i.replace(o, '$1') : n || t);
          }),
          e
        );
      });
    t.exports = a;
  },
  function (t, e, n) {
    var r = n(253),
      i = 500;
    t.exports = function (t) {
      var e = r(t, function (t) {
          return n.size === i && n.clear(), t;
        }),
        n = e.cache;
      return e;
    };
  },
  function (t, e, n) {
    var r = n(51),
      i = 'Expected a function';
    function o(t, e) {
      if ('function' != typeof t || (null != e && 'function' != typeof e))
        throw new TypeError(i);
      var n = function () {
        var r = arguments,
          i = e ? e.apply(this, r) : r[0],
          o = n.cache;
        if (o.has(i)) return o.get(i);
        var a = t.apply(this, r);
        return (n.cache = o.set(i, a) || o), a;
      };
      return (n.cache = new (o.Cache || r)()), n;
    }
    (o.Cache = r), (t.exports = o);
  },
  function (t, e, n) {
    var r = n(255);
    t.exports = function (t) {
      return null == t ? '' : r(t);
    };
  },
  function (t, e, n) {
    var r = n(23),
      i = n(113),
      o = n(2),
      a = n(38),
      u = 1 / 0,
      c = r ? r.prototype : void 0,
      s = c ? c.toString : void 0;
    t.exports = function t(e) {
      if ('string' == typeof e) return e;
      if (o(e)) return i(e, t) + '';
      if (a(e)) return s ? s.call(e) : '';
      var n = e + '';
      return '0' == n && 1 / e == -u ? '-0' : n;
    };
  },
  function (t, e, n) {
    var r = n(257),
      i = n(258);
    t.exports = function (t, e) {
      return null != t && i(t, e, r);
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null != t && e in Object(t);
    };
  },
  function (t, e, n) {
    var r = n(37),
      i = n(36),
      o = n(2),
      a = n(54),
      u = n(56),
      c = n(24);
    t.exports = function (t, e, n) {
      for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f; ) {
        var d = c(e[s]);
        if (!(l = null != t && n(t, d))) break;
        t = t[d];
      }
      return l || ++s != f
        ? l
        : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t));
    };
  },
  function (t, e, n) {
    var r = n(114),
      i = n(260),
      o = n(62),
      a = n(24);
    t.exports = function (t) {
      return o(t) ? r(a(t)) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(61);
    t.exports = function (t) {
      return function (e) {
        return r(e, t);
      };
    };
  },
  function (t, e, n) {
    var r = n(115),
      i = n(10),
      o = n(116),
      a = Math.max;
    t.exports = function (t, e, n) {
      var u = null == t ? 0 : t.length;
      if (!u) return -1;
      var c = null == n ? 0 : o(n);
      return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
    };
  },
  function (t, e, n) {
    var r = n(64),
      i = 1 / 0,
      o = 1.7976931348623157e308;
    t.exports = function (t) {
      return t
        ? (t = r(t)) === i || t === -i
          ? (t < 0 ? -1 : 1) * o
          : t == t
          ? t
          : 0
        : 0 === t
        ? t
        : 0;
    };
  },
  function (t, e, n) {
    var r = n(264),
      i = /^\s+/;
    t.exports = function (t) {
      return t ? t.slice(0, r(t) + 1).replace(i, '') : t;
    };
  },
  function (t, e) {
    var n = /\s/;
    t.exports = function (t) {
      for (var e = t.length; e-- && n.test(t.charAt(e)); );
      return e;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
        return n;
      }
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (
        Symbol.iterator in Object(t) ||
        '[object Arguments]' === Object.prototype.toString.call(t)
      )
        return Array.from(t);
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance');
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.createElementState = I),
      (e.mergeActionState = b),
      (e.ixElements = void 0);
    var r = n(22),
      i = n(4),
      o = i.IX2EngineConstants,
      a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
      u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
      c = o.CONFIG_Y_VALUE,
      s = o.CONFIG_Z_VALUE,
      f = o.CONFIG_VALUE,
      l = o.CONFIG_X_UNIT,
      d = o.CONFIG_Y_UNIT,
      p = o.CONFIG_Z_UNIT,
      v = o.CONFIG_UNIT,
      h = i.IX2EngineActionTypes,
      E = h.IX2_SESSION_STOPPED,
      g = h.IX2_INSTANCE_ADDED,
      y = h.IX2_ELEMENT_STATE_CHANGED,
      _ = {},
      m = 'refState';
    function I(t, e, n, i, o) {
      var u =
        n === a ? (0, r.getIn)(o, ['config', 'target', 'objectId']) : null;
      return (0, r.mergeIn)(t, [i], { id: i, ref: e, refId: u, refType: n });
    }
    function b(t, e, n, i, o) {
      var a = (function (t) {
          var e = t.config;
          return T.reduce(function (t, n) {
            var r = n[0],
              i = n[1],
              o = e[r],
              a = e[i];
            return null != o && null != a && (t[i] = a), t;
          }, {});
        })(o),
        u = [e, m, n];
      return (0, r.mergeIn)(t, u, i, a);
    }
    e.ixElements = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      switch (e.type) {
        case E:
          return _;
        case g:
          var n = e.payload,
            i = n.elementId,
            o = n.element,
            a = n.origin,
            u = n.actionItem,
            c = n.refType,
            s = u.actionTypeId,
            f = t;
          return (
            (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)),
            b(f, i, s, a, u)
          );
        case y:
          var l = e.payload;
          return b(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
        default:
          return t;
      }
    };
    var T = [
      [u, l],
      [c, d],
      [s, p],
      [f, v]
    ];
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.clearPlugin =
        e.renderPlugin =
        e.createPluginInstance =
        e.getPluginDestination =
        e.getPluginOrigin =
        e.getPluginDuration =
        e.getPluginConfig =
          void 0);
    e.getPluginConfig = function (t) {
      return t.value;
    };
    e.getPluginDuration = function (t, e) {
      if ('auto' !== e.config.duration) return null;
      var n = parseFloat(t.getAttribute('data-duration'));
      return n > 0
        ? 1e3 * n
        : 1e3 * parseFloat(t.getAttribute('data-default-duration'));
    };
    e.getPluginOrigin = function (t) {
      return t || { value: 0 };
    };
    e.getPluginDestination = function (t) {
      return { value: t.value };
    };
    e.createPluginInstance = function (t) {
      var e = window.Webflow.require('lottie').createInstance(t);
      return e.stop(), e.setSubframe(!0), e;
    };
    e.renderPlugin = function (t, e, n) {
      if (t) {
        var r = e[n.actionTypeId].value / 100;
        t.goToFrame(t.frames * r);
      }
    };
    e.clearPlugin = function (t) {
      window.Webflow.require('lottie').createInstance(t).stop();
    };
  },
  function (t, e, n) {
    'use strict';
    var r,
      i,
      o,
      a = n(1),
      u = a(n(17)),
      c = a(n(21)),
      s = n(1);
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.getInstanceId = function () {
        return 'i' + vt++;
      }),
      (e.getElementId = function (t, e) {
        for (var n in t) {
          var r = t[n];
          if (r && r.ref === e) return r.id;
        }
        return 'e' + ht++;
      }),
      (e.reifyState = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.events,
          n = t.actionLists,
          r = t.site,
          i = (0, l.default)(
            e,
            function (t, e) {
              var n = e.eventTypeId;
              return t[n] || (t[n] = {}), (t[n][e.id] = e), t;
            },
            {}
          ),
          o = r && r.mediaQueries,
          a = [];
        o
          ? (a = o.map(function (t) {
              return t.key;
            }))
          : ((o = []), console.warn('IX2 missing mediaQueries in site data'));
        return {
          ixData: {
            events: e,
            actionLists: n,
            eventTypeMap: i,
            mediaQueries: o,
            mediaQueryKeys: a
          }
        };
      }),
      (e.observeStore = function (t) {
        var e = t.store,
          n = t.select,
          r = t.onChange,
          i = t.comparator,
          o = void 0 === i ? Et : i,
          a = e.getState,
          u = (0, e.subscribe)(function () {
            var t = n(a());
            if (null == t) return void u();
            o(t, c) || r((c = t), e);
          }),
          c = n(a());
        return u;
      }),
      (e.getAffectedElements = yt),
      (e.getComputedStyle = function (t) {
        var e = t.element,
          n = t.actionItem;
        if (!y.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
          case it:
          case ot:
          case at:
          case ut:
          case ct:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }),
      (e.getInstanceOrigin = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = arguments.length > 3 ? arguments[3] : void 0,
          i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
          o = r.actionTypeId,
          a = r.config;
        if ((0, g.isPluginType)(o)) return (0, g.getPluginOrigin)(o)(e[o]);
        switch (o) {
          case Z:
          case J:
          case tt:
          case et:
            return e[o] || Tt[o];
          case rt:
            return mt(e[o], r.config.filters);
          case nt:
            return { value: (0, f.default)(parseFloat(i(t, N)), 1) };
          case it:
            var u,
              c,
              s = i(t, L),
              l = i(t, P);
            return (
              (u =
                a.widthUnit === B
                  ? _t.test(s)
                    ? parseFloat(s)
                    : parseFloat(n.width)
                  : (0, f.default)(parseFloat(s), parseFloat(n.width))),
              (c =
                a.heightUnit === B
                  ? _t.test(l)
                    ? parseFloat(l)
                    : parseFloat(n.height)
                  : (0, f.default)(parseFloat(l), parseFloat(n.height))),
              { widthValue: u, heightValue: c }
            );
          case ot:
          case at:
          case ut:
            return (function (t) {
              var e = t.element,
                n = t.actionTypeId,
                r = t.computedStyle,
                i = t.getStyle,
                o = lt[n],
                a = i(e, o),
                u = St.test(a) ? a : r[o],
                c = (function (t, e) {
                  var n = t.exec(e);
                  return n ? n[1] : '';
                })(xt, u).split(W);
              return {
                rValue: (0, f.default)(parseInt(c[0], 10), 255),
                gValue: (0, f.default)(parseInt(c[1], 10), 255),
                bValue: (0, f.default)(parseInt(c[2], 10), 255),
                aValue: (0, f.default)(parseFloat(c[3]), 1)
              };
            })({ element: t, actionTypeId: o, computedStyle: n, getStyle: i });
          case ct:
            return { value: (0, f.default)(i(t, V), n.display) };
          case st:
            return e[o] || { value: 0 };
          default:
            return;
        }
      }),
      (e.getDestinationValues = function (t) {
        var e = t.element,
          n = t.actionItem,
          r = t.elementApi,
          i = n.actionTypeId;
        if ((0, g.isPluginType)(i))
          return (0, g.getPluginDestination)(i)(n.config);
        switch (i) {
          case Z:
          case J:
          case tt:
          case et:
            var o = n.config,
              a = o.xValue,
              u = o.yValue,
              c = o.zValue;
            return { xValue: a, yValue: u, zValue: c };
          case it:
            var s = r.getStyle,
              f = r.setStyle,
              l = r.getProperty,
              d = n.config,
              p = d.widthUnit,
              v = d.heightUnit,
              h = n.config,
              E = h.widthValue,
              _ = h.heightValue;
            if (!y.IS_BROWSER_ENV) return { widthValue: E, heightValue: _ };
            if (p === B) {
              var m = s(e, L);
              f(e, L, ''), (E = l(e, 'offsetWidth')), f(e, L, m);
            }
            if (v === B) {
              var I = s(e, P);
              f(e, P, ''), (_ = l(e, 'offsetHeight')), f(e, P, I);
            }
            return { widthValue: E, heightValue: _ };
          case ot:
          case at:
          case ut:
            var b = n.config,
              T = b.rValue,
              w = b.gValue,
              O = b.bValue,
              A = b.aValue;
            return { rValue: T, gValue: w, bValue: O, aValue: A };
          case rt:
            return n.config.filters.reduce(It, {});
          default:
            var S = n.config.value;
            return { value: S };
        }
      }),
      (e.getRenderType = bt),
      (e.getStyleProp = function (t, e) {
        return t === Q ? e.replace('STYLE_', '').toLowerCase() : null;
      }),
      (e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
        switch (u) {
          case Y:
            return (function (t, e, n, r, i) {
              var o = At.map(function (t) {
                  var n = Tt[t],
                    r = e[t] || {},
                    i = r.xValue,
                    o = void 0 === i ? n.xValue : i,
                    a = r.yValue,
                    u = void 0 === a ? n.yValue : a,
                    c = r.zValue,
                    s = void 0 === c ? n.zValue : c,
                    f = r.xUnit,
                    l = void 0 === f ? '' : f,
                    d = r.yUnit,
                    p = void 0 === d ? '' : d,
                    v = r.zUnit,
                    h = void 0 === v ? '' : v;
                  switch (t) {
                    case Z:
                      return ''
                        .concat(b, '(')
                        .concat(o)
                        .concat(l, ', ')
                        .concat(u)
                        .concat(p, ', ')
                        .concat(s)
                        .concat(h, ')');
                    case J:
                      return ''
                        .concat(T, '(')
                        .concat(o)
                        .concat(l, ', ')
                        .concat(u)
                        .concat(p, ', ')
                        .concat(s)
                        .concat(h, ')');
                    case tt:
                      return ''
                        .concat(w, '(')
                        .concat(o)
                        .concat(l, ') ')
                        .concat(O, '(')
                        .concat(u)
                        .concat(p, ') ')
                        .concat(A, '(')
                        .concat(s)
                        .concat(h, ')');
                    case et:
                      return ''
                        .concat(S, '(')
                        .concat(o)
                        .concat(l, ', ')
                        .concat(u)
                        .concat(p, ')');
                    default:
                      return '';
                  }
                }).join(' '),
                a = i.setStyle;
              Rt(t, y.TRANSFORM_PREFIXED, i),
                a(t, y.TRANSFORM_PREFIXED, o),
                (u = r),
                (c = n),
                (s = u.actionTypeId),
                (f = c.xValue),
                (l = c.yValue),
                (d = c.zValue),
                ((s === Z && void 0 !== d) ||
                  (s === J && void 0 !== d) ||
                  (s === tt && (void 0 !== f || void 0 !== l))) &&
                  a(t, y.TRANSFORM_STYLE_PREFIXED, x);
              var u, c, s, f, l, d;
            })(t, e, n, i, a);
          case Q:
            return (function (t, e, n, r, i, o) {
              var a = o.setStyle,
                u = r.actionTypeId,
                c = r.config;
              switch (u) {
                case it:
                  var s = r.config,
                    f = s.widthUnit,
                    d = void 0 === f ? '' : f,
                    p = s.heightUnit,
                    v = void 0 === p ? '' : p,
                    h = n.widthValue,
                    E = n.heightValue;
                  void 0 !== h &&
                    (d === B && (d = 'px'), Rt(t, L, o), a(t, L, h + d)),
                    void 0 !== E &&
                      (v === B && (v = 'px'), Rt(t, P, o), a(t, P, E + v));
                  break;
                case rt:
                  !(function (t, e, n, r) {
                    var i = (0, l.default)(
                        e,
                        function (t, e, r) {
                          return ''
                            .concat(t, ' ')
                            .concat(r, '(')
                            .concat(e)
                            .concat(Ot(r, n), ')');
                        },
                        ''
                      ),
                      o = r.setStyle;
                    Rt(t, C, r), o(t, C, i);
                  })(t, n, c, o);
                  break;
                case ot:
                case at:
                case ut:
                  var g = lt[u],
                    y = Math.round(n.rValue),
                    _ = Math.round(n.gValue),
                    m = Math.round(n.bValue),
                    I = n.aValue;
                  Rt(t, g, o),
                    a(
                      t,
                      g,
                      I >= 1
                        ? 'rgb('.concat(y, ',').concat(_, ',').concat(m, ')')
                        : 'rgba('
                            .concat(y, ',')
                            .concat(_, ',')
                            .concat(m, ',')
                            .concat(I, ')')
                    );
                  break;
                default:
                  var b = c.unit,
                    T = void 0 === b ? '' : b;
                  Rt(t, i, o), a(t, i, n.value + T);
              }
            })(t, 0, n, i, o, a);
          case K:
            return (function (t, e, n) {
              var r = n.setStyle;
              switch (e.actionTypeId) {
                case ct:
                  var i = e.config.value;
                  return void (i === R && y.IS_BROWSER_ENV
                    ? r(t, V, y.FLEX_PREFIXED)
                    : r(t, V, i));
              }
            })(t, i, a);
          case q:
            var s = i.actionTypeId;
            if ((0, g.isPluginType)(s)) return (0, g.renderPlugin)(s)(c, e, i);
        }
      }),
      (e.clearAllStyles = function (t) {
        var e = t.store,
          n = t.elementApi,
          r = e.getState().ixData,
          i = r.events,
          o = void 0 === i ? {} : i,
          a = r.actionLists,
          u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function (t) {
          var e = o[t],
            r = e.action.config,
            i = r.actionListId,
            a = u[i];
          a && Ct({ actionList: a, event: e, elementApi: n });
        }),
          Object.keys(u).forEach(function (t) {
            Ct({ actionList: u[t], elementApi: n });
          });
      }),
      (e.cleanupHTMLElement = function (t, e, n) {
        var r = n.setStyle,
          i = n.getStyle,
          o = e.actionTypeId;
        if (o === it) {
          var a = e.config;
          a.widthUnit === B && r(t, L, ''), a.heightUnit === B && r(t, P, '');
        }
        i(t, U) && Pt({ effect: Nt, actionTypeId: o, elementApi: n })(t);
      }),
      (e.getMaxDurationItemIndex = Mt),
      (e.getActionListProgress = function (t, e) {
        var n = t.actionItemGroups,
          r = t.useFirstGroupAsInitialState,
          i = e.actionItem,
          o = e.verboseTimeElapsed,
          a = void 0 === o ? 0 : o,
          u = 0,
          c = 0;
        return (
          n.forEach(function (t, e) {
            if (!r || 0 !== e) {
              var n = t.actionItems,
                o = n[Mt(n)],
                s = o.config,
                f = o.actionTypeId;
              i.id === o.id && (c = u + a);
              var l = bt(f) === K ? 0 : s.duration;
              u += s.delay + l;
            }
          }),
          u > 0 ? (0, E.optimizeFloat)(c / u) : 0
        );
      }),
      (e.reduceListToGroup = function (t) {
        var e = t.actionList,
          n = t.actionItemId,
          r = t.rawData,
          i = e.actionItemGroups,
          o = e.continuousParameterGroups,
          a = [],
          u = function (t) {
            return (
              a.push((0, p.mergeIn)(t, ['config'], { delay: 0, duration: 0 })),
              t.id === n
            );
          };
        return (
          i &&
            i.some(function (t) {
              return t.actionItems.some(u);
            }),
          o &&
            o.some(function (t) {
              return t.continuousActionGroups.some(function (t) {
                return t.actionItems.some(u);
              });
            }),
          (0, p.setIn)(
            r,
            ['actionLists'],
            (0, c.default)({}, e.id, {
              id: e.id,
              actionItemGroups: [{ actionItems: a }]
            })
          )
        );
      }),
      (e.shouldNamespaceEventParameter = function (t, e) {
        var n = e.basedOn;
        return (
          (t === v.EventTypeConsts.SCROLLING_IN_VIEW &&
            (n === v.EventBasedOn.ELEMENT || null == n)) ||
          (t === v.EventTypeConsts.MOUSE_MOVE && n === v.EventBasedOn.ELEMENT)
        );
      }),
      (e.getNamespacedParameterId = function (t, e) {
        return t + H + e;
      }),
      (e.shouldAllowMediaQuery = function (t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e);
      }),
      (e.mediaQueriesEqual = function (t, e) {
        return (0, h.default)(t && t.sort(), e && e.sort());
      }),
      (e.stringifyTarget = function (t) {
        if ('string' == typeof t) return t;
        var e = t.id,
          n = void 0 === e ? '' : e,
          r = t.selector,
          i = void 0 === r ? '' : r,
          o = t.useEventTarget;
        return n + z + i + z + (void 0 === o ? '' : o);
      }),
      Object.defineProperty(e, 'shallowEqual', {
        enumerable: !0,
        get: function () {
          return h.default;
        }
      }),
      (e.getItemConfigByKey = void 0);
    var f = s(n(271)),
      l = s(n(272)),
      d = s(n(278)),
      p = n(22),
      v = n(4),
      h = s(n(280)),
      E = n(119),
      g = n(121),
      y = n(48),
      _ = v.IX2EngineConstants,
      m = _.BACKGROUND,
      I = _.TRANSFORM,
      b = _.TRANSLATE_3D,
      T = _.SCALE_3D,
      w = _.ROTATE_X,
      O = _.ROTATE_Y,
      A = _.ROTATE_Z,
      S = _.SKEW,
      x = _.PRESERVE_3D,
      R = _.FLEX,
      N = _.OPACITY,
      C = _.FILTER,
      L = _.WIDTH,
      P = _.HEIGHT,
      D = _.BACKGROUND_COLOR,
      M = _.BORDER_COLOR,
      j = _.COLOR,
      F = _.CHILDREN,
      k = _.IMMEDIATE_CHILDREN,
      X = _.SIBLINGS,
      G = _.PARENT,
      V = _.DISPLAY,
      U = _.WILL_CHANGE,
      B = _.AUTO,
      W = _.COMMA_DELIMITER,
      H = _.COLON_DELIMITER,
      z = _.BAR_DELIMITER,
      Y = _.RENDER_TRANSFORM,
      K = _.RENDER_GENERAL,
      Q = _.RENDER_STYLE,
      q = _.RENDER_PLUGIN,
      $ = v.ActionTypeConsts,
      Z = $.TRANSFORM_MOVE,
      J = $.TRANSFORM_SCALE,
      tt = $.TRANSFORM_ROTATE,
      et = $.TRANSFORM_SKEW,
      nt = $.STYLE_OPACITY,
      rt = $.STYLE_FILTER,
      it = $.STYLE_SIZE,
      ot = $.STYLE_BACKGROUND_COLOR,
      at = $.STYLE_BORDER,
      ut = $.STYLE_TEXT_COLOR,
      ct = $.GENERAL_DISPLAY,
      st = 'OBJECT_VALUE',
      ft = function (t) {
        return t.trim();
      },
      lt = Object.freeze(
        ((r = {}),
        (0, c.default)(r, ot, D),
        (0, c.default)(r, at, M),
        (0, c.default)(r, ut, j),
        r)
      ),
      dt = Object.freeze(
        ((i = {}),
        (0, c.default)(i, y.TRANSFORM_PREFIXED, I),
        (0, c.default)(i, D, m),
        (0, c.default)(i, N, N),
        (0, c.default)(i, C, C),
        (0, c.default)(i, L, L),
        (0, c.default)(i, P, P),
        i)
      ),
      pt = {},
      vt = 1;
    var ht = 1;
    var Et = function (t, e) {
      return t === e;
    };
    function gt(t) {
      var e = (0, u.default)(t);
      return 'string' === e
        ? { id: t }
        : null != t && 'object' === e
        ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget
          }
        : {};
    }
    function yt(t) {
      var e,
        n,
        r,
        i = t.config,
        o = t.event,
        a = t.eventTarget,
        u = t.elementRoot,
        c = t.elementApi;
      if (!c) throw new Error('IX2 missing elementApi');
      var s = i.targets;
      if (Array.isArray(s) && s.length > 0)
        return s.reduce(function (t, e) {
          return t.concat(
            yt({
              config: { target: e },
              event: o,
              eventTarget: a,
              elementRoot: u,
              elementApi: c
            })
          );
        }, []);
      var f = c.getValidDocument,
        l = c.getQuerySelector,
        d = c.queryDocument,
        p = c.getChildElements,
        h = c.getSiblingElements,
        E = c.matchSelector,
        g = c.elementContains,
        _ = c.isSiblingNode,
        m = i.target;
      if (!m) return [];
      var I = gt(m),
        b = I.id,
        T = I.objectId,
        w = I.selector,
        O = I.selectorGuids,
        A = I.appliesTo,
        S = I.useEventTarget;
      if (T) return [pt[T] || (pt[T] = {})];
      if (A === v.EventAppliesTo.PAGE) {
        var x = f(b);
        return x ? [x] : [];
      }
      var R,
        N,
        C,
        L =
          (null !==
            (e =
              null == o
                ? void 0
                : null === (n = o.action) || void 0 === n
                ? void 0
                : null === (r = n.config) || void 0 === r
                ? void 0
                : r.affectedElements) && void 0 !== e
            ? e
            : {})[b || w] || {},
        P = Boolean(L.id || L.selector),
        D = o && l(gt(o.target));
      if (
        (P
          ? ((R = L.limitAffectedElements), (N = D), (C = l(L)))
          : (N = C = l({ id: b, selector: w, selectorGuids: O })),
        o && S)
      ) {
        var M = a && (C || !0 === S) ? [a] : d(D);
        if (C) {
          if (S === G)
            return d(C).filter(function (t) {
              return M.some(function (e) {
                return g(t, e);
              });
            });
          if (S === F)
            return d(C).filter(function (t) {
              return M.some(function (e) {
                return g(e, t);
              });
            });
          if (S === X)
            return d(C).filter(function (t) {
              return M.some(function (e) {
                return _(e, t);
              });
            });
        }
        return M;
      }
      return null == N || null == C
        ? []
        : y.IS_BROWSER_ENV && u
        ? d(C).filter(function (t) {
            return u.contains(t);
          })
        : R === F
        ? d(N, C)
        : R === k
        ? p(d(N)).filter(E(C))
        : R === X
        ? h(d(N)).filter(E(C))
        : d(C);
    }
    var _t = /px/,
      mt = function (t, e) {
        return e.reduce(function (t, e) {
          return null == t[e.type] && (t[e.type] = wt[e.type]), t;
        }, t || {});
      };
    var It = function (t, e) {
      return e && (t[e.type] = e.value || 0), t;
    };
    function bt(t) {
      return /^TRANSFORM_/.test(t)
        ? Y
        : /^STYLE_/.test(t)
        ? Q
        : /^GENERAL_/.test(t)
        ? K
        : /^PLUGIN_/.test(t)
        ? q
        : void 0;
    }
    e.getItemConfigByKey = function (t, e, n) {
      if ((0, g.isPluginType)(t)) return (0, g.getPluginConfig)(t)(n, e);
      switch (t) {
        case rt:
          var r = (0, d.default)(n.filters, function (t) {
            return t.type === e;
          });
          return r ? r.value : 0;
        default:
          return n[e];
      }
    };
    var Tt =
        ((o = {}),
        (0, c.default)(
          o,
          Z,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, c.default)(
          o,
          J,
          Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })
        ),
        (0, c.default)(
          o,
          tt,
          Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
        ),
        (0, c.default)(o, et, Object.freeze({ xValue: 0, yValue: 0 })),
        o),
      wt = Object.freeze({
        blur: 0,
        'hue-rotate': 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
      }),
      Ot = function (t, e) {
        var n = (0, d.default)(e.filters, function (e) {
          return e.type === t;
        });
        if (n && n.unit) return n.unit;
        switch (t) {
          case 'blur':
            return 'px';
          case 'hue-rotate':
            return 'deg';
          default:
            return '%';
        }
      },
      At = Object.keys(Tt);
    var St = /^rgb/,
      xt = RegExp('rgba?'.concat('\\(([^)]+)\\)'));
    function Rt(t, e, n) {
      if (y.IS_BROWSER_ENV) {
        var r = dt[e];
        if (r) {
          var i = n.getStyle,
            o = n.setStyle,
            a = i(t, U);
          if (a) {
            var u = a.split(W).map(ft);
            -1 === u.indexOf(r) && o(t, U, u.concat(r).join(W));
          } else o(t, U, r);
        }
      }
    }
    function Nt(t, e, n) {
      if (y.IS_BROWSER_ENV) {
        var r = dt[e];
        if (r) {
          var i = n.getStyle,
            o = n.setStyle,
            a = i(t, U);
          a &&
            -1 !== a.indexOf(r) &&
            o(
              t,
              U,
              a
                .split(W)
                .map(ft)
                .filter(function (t) {
                  return t !== r;
                })
                .join(W)
            );
        }
      }
    }
    function Ct(t) {
      var e = t.actionList,
        n = void 0 === e ? {} : e,
        r = t.event,
        i = t.elementApi,
        o = n.actionItemGroups,
        a = n.continuousParameterGroups;
      o &&
        o.forEach(function (t) {
          Lt({ actionGroup: t, event: r, elementApi: i });
        }),
        a &&
          a.forEach(function (t) {
            t.continuousActionGroups.forEach(function (t) {
              Lt({ actionGroup: t, event: r, elementApi: i });
            });
          });
    }
    function Lt(t) {
      var e = t.actionGroup,
        n = t.event,
        r = t.elementApi;
      e.actionItems.forEach(function (t) {
        var e,
          i = t.actionTypeId,
          o = t.config;
        (e = (0, g.isPluginType)(i)
          ? (0, g.clearPlugin)(i)
          : Pt({ effect: Dt, actionTypeId: i, elementApi: r })),
          yt({ config: o, event: n, elementApi: r }).forEach(e);
      });
    }
    var Pt = function (t) {
      var e = t.effect,
        n = t.actionTypeId,
        r = t.elementApi;
      return function (t) {
        switch (n) {
          case Z:
          case J:
          case tt:
          case et:
            e(t, y.TRANSFORM_PREFIXED, r);
            break;
          case rt:
            e(t, C, r);
            break;
          case nt:
            e(t, N, r);
            break;
          case it:
            e(t, L, r), e(t, P, r);
            break;
          case ot:
          case at:
          case ut:
            e(t, lt[n], r);
            break;
          case ct:
            e(t, V, r);
        }
      };
    };
    function Dt(t, e, n) {
      var r = n.setStyle;
      Nt(t, e, n),
        r(t, e, ''),
        e === y.TRANSFORM_PREFIXED && r(t, y.TRANSFORM_STYLE_PREFIXED, '');
    }
    function Mt(t) {
      var e = 0,
        n = 0;
      return (
        t.forEach(function (t, r) {
          var i = t.config,
            o = i.delay + i.duration;
          o >= e && ((e = o), (n = r));
        }),
        n
      );
    }
  },
  function (t, e) {
    t.exports = function (t, e) {
      return null == t || t != t ? e : t;
    };
  },
  function (t, e, n) {
    var r = n(273),
      i = n(122),
      o = n(10),
      a = n(277),
      u = n(2);
    t.exports = function (t, e, n) {
      var c = u(t) ? r : a,
        s = arguments.length < 3;
      return c(t, o(e, 4), n, s, i);
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r) {
      var i = -1,
        o = null == t ? 0 : t.length;
      for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
      return n;
    };
  },
  function (t, e, n) {
    var r = n(275)();
    t.exports = r;
  },
  function (t, e) {
    t.exports = function (t) {
      return function (e, n, r) {
        for (var i = -1, o = Object(e), a = r(e), u = a.length; u--; ) {
          var c = a[t ? u : ++i];
          if (!1 === n(o[c], c, o)) break;
        }
        return e;
      };
    };
  },
  function (t, e, n) {
    var r = n(16);
    t.exports = function (t, e) {
      return function (n, i) {
        if (null == n) return n;
        if (!r(n)) return t(n, i);
        for (
          var o = n.length, a = e ? o : -1, u = Object(n);
          (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);

        );
        return n;
      };
    };
  },
  function (t, e) {
    t.exports = function (t, e, n, r, i) {
      return (
        i(t, function (t, i, o) {
          n = r ? ((r = !1), t) : e(n, t, i, o);
        }),
        n
      );
    };
  },
  function (t, e, n) {
    var r = n(97)(n(279));
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(115),
      i = n(10),
      o = n(116),
      a = Math.max,
      u = Math.min;
    t.exports = function (t, e, n) {
      var c = null == t ? 0 : t.length;
      if (!c) return -1;
      var s = c - 1;
      return (
        void 0 !== n && ((s = o(n)), (s = n < 0 ? a(c + s, 0) : u(s, c - 1))),
        r(t, i(e, 3), s, !0)
      );
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(1)(n(17));
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
    var i = Object.prototype.hasOwnProperty;
    function o(t, e) {
      return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
    }
    var a = function (t, e) {
      if (o(t, e)) return !0;
      if (
        'object' !== (0, r.default)(t) ||
        null === t ||
        'object' !== (0, r.default)(e) ||
        null === e
      )
        return !1;
      var n = Object.keys(t),
        a = Object.keys(e);
      if (n.length !== a.length) return !1;
      for (var u = 0; u < n.length; u++)
        if (!i.call(e, n[u]) || !o(t[n[u]], e[n[u]])) return !1;
      return !0;
    };
    e.default = a;
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ixInstances = void 0);
    var r = n(4),
      i = n(14),
      o = n(22),
      a = r.IX2EngineActionTypes,
      u = a.IX2_RAW_DATA_IMPORTED,
      c = a.IX2_SESSION_STOPPED,
      s = a.IX2_INSTANCE_ADDED,
      f = a.IX2_INSTANCE_STARTED,
      l = a.IX2_INSTANCE_REMOVED,
      d = a.IX2_ANIMATION_FRAME_CHANGED,
      p = i.IX2EasingUtils,
      v = p.optimizeFloat,
      h = p.applyEasing,
      E = p.createBezierEasing,
      g = r.IX2EngineConstants.RENDER_GENERAL,
      y = i.IX2VanillaUtils,
      _ = y.getItemConfigByKey,
      m = y.getRenderType,
      I = y.getStyleProp,
      b = function (t, e) {
        var n = t.position,
          r = t.parameterId,
          i = t.actionGroups,
          a = t.destinationKeys,
          u = t.smoothing,
          c = t.restingValue,
          s = t.actionTypeId,
          f = t.customEasingFn,
          l = t.skipMotion,
          d = t.skipToValue,
          p = e.payload.parameters,
          E = Math.max(1 - u, 0.01),
          g = p[r];
        null == g && ((E = 1), (g = c));
        var y,
          m,
          I,
          b,
          T = Math.max(g, 0) || 0,
          w = v(T - n),
          O = l ? d : v(n + w * E),
          A = 100 * O;
        if (O === n && t.current) return t;
        for (var S = 0, x = i.length; S < x; S++) {
          var R = i[S],
            N = R.keyframe,
            C = R.actionItems;
          if ((0 === S && (y = C[0]), A >= N)) {
            y = C[0];
            var L = i[S + 1],
              P = L && A !== N;
            (m = P ? L.actionItems[0] : null),
              P && ((I = N / 100), (b = (L.keyframe - N) / 100));
          }
        }
        var D = {};
        if (y && !m)
          for (var M = 0, j = a.length; M < j; M++) {
            var F = a[M];
            D[F] = _(s, F, y.config);
          }
        else if (y && m && void 0 !== I && void 0 !== b)
          for (
            var k = (O - I) / b,
              X = y.config.easing,
              G = h(X, k, f),
              V = 0,
              U = a.length;
            V < U;
            V++
          ) {
            var B = a[V],
              W = _(s, B, y.config),
              H = (_(s, B, m.config) - W) * G + W;
            D[B] = H;
          }
        return (0, o.merge)(t, { position: O, current: D });
      },
      T = function (t, e) {
        var n = t,
          r = n.active,
          i = n.origin,
          a = n.start,
          u = n.immediate,
          c = n.renderType,
          s = n.verbose,
          f = n.actionItem,
          l = n.destination,
          d = n.destinationKeys,
          p = n.pluginDuration,
          E = n.instanceDelay,
          y = n.customEasingFn,
          _ = n.skipMotion,
          m = f.config.easing,
          I = f.config,
          b = I.duration,
          T = I.delay;
        null != p && (b = p),
          (T = null != E ? E : T),
          c === g ? (b = 0) : (u || _) && (b = T = 0);
        var w = e.payload.now;
        if (r && i) {
          var O = w - (a + T);
          if (s) {
            var A = w - a,
              S = b + T,
              x = v(Math.min(Math.max(0, A / S), 1));
            t = (0, o.set)(t, 'verboseTimeElapsed', S * x);
          }
          if (O < 0) return t;
          var R = v(Math.min(Math.max(0, O / b), 1)),
            N = h(m, R, y),
            C = {},
            L = null;
          return (
            d.length &&
              (L = d.reduce(function (t, e) {
                var n = l[e],
                  r = parseFloat(i[e]) || 0,
                  o = (parseFloat(n) - r) * N + r;
                return (t[e] = o), t;
              }, {})),
            (C.current = L),
            (C.position = R),
            1 === R && ((C.active = !1), (C.complete = !0)),
            (0, o.merge)(t, C)
          );
        }
        return t;
      };
    e.ixInstances = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : Object.freeze({}),
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case u:
          return e.payload.ixInstances || Object.freeze({});
        case c:
          return Object.freeze({});
        case s:
          var n = e.payload,
            r = n.instanceId,
            i = n.elementId,
            a = n.actionItem,
            p = n.eventId,
            v = n.eventTarget,
            h = n.eventStateKey,
            g = n.actionListId,
            y = n.groupIndex,
            _ = n.isCarrier,
            w = n.origin,
            O = n.destination,
            A = n.immediate,
            S = n.verbose,
            x = n.continuous,
            R = n.parameterId,
            N = n.actionGroups,
            C = n.smoothing,
            L = n.restingValue,
            P = n.pluginInstance,
            D = n.pluginDuration,
            M = n.instanceDelay,
            j = n.skipMotion,
            F = n.skipToValue,
            k = a.actionTypeId,
            X = m(k),
            G = I(X, k),
            V = Object.keys(O).filter(function (t) {
              return null != O[t];
            }),
            U = a.config.easing;
          return (0, o.set)(t, r, {
            id: r,
            elementId: i,
            active: !1,
            position: 0,
            start: 0,
            origin: w,
            destination: O,
            destinationKeys: V,
            immediate: A,
            verbose: S,
            current: null,
            actionItem: a,
            actionTypeId: k,
            eventId: p,
            eventTarget: v,
            eventStateKey: h,
            actionListId: g,
            groupIndex: y,
            renderType: X,
            isCarrier: _,
            styleProp: G,
            continuous: x,
            parameterId: R,
            actionGroups: N,
            smoothing: C,
            restingValue: L,
            pluginInstance: P,
            pluginDuration: D,
            instanceDelay: M,
            skipMotion: j,
            skipToValue: F,
            customEasingFn: Array.isArray(U) && 4 === U.length ? E(U) : void 0
          });
        case f:
          var B = e.payload,
            W = B.instanceId,
            H = B.time;
          return (0, o.mergeIn)(t, [W], { active: !0, complete: !1, start: H });
        case l:
          var z = e.payload.instanceId;
          if (!t[z]) return t;
          for (
            var Y = {}, K = Object.keys(t), Q = K.length, q = 0;
            q < Q;
            q++
          ) {
            var $ = K[q];
            $ !== z && (Y[$] = t[$]);
          }
          return Y;
        case d:
          for (
            var Z = t, J = Object.keys(t), tt = J.length, et = 0;
            et < tt;
            et++
          ) {
            var nt = J[et],
              rt = t[nt],
              it = rt.continuous ? b : T;
            Z = (0, o.set)(Z, nt, it(rt, e));
          }
          return Z;
        default:
          return t;
      }
    };
  },
  function (t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.ixParameters = void 0);
    var r = n(4).IX2EngineActionTypes,
      i = r.IX2_RAW_DATA_IMPORTED,
      o = r.IX2_SESSION_STOPPED,
      a = r.IX2_PARAMETER_CHANGED;
    e.ixParameters = function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = arguments.length > 1 ? arguments[1] : void 0;
      switch (e.type) {
        case i:
          return e.payload.ixParameters || {};
        case o:
          return {};
        case a:
          var n = e.payload,
            r = n.key,
            u = n.value;
          return (t[r] = u), t;
        default:
          return t;
      }
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      if (null == t) return {};
      var n,
        r,
        i = {},
        o = Object.keys(t);
      for (r = 0; r < o.length; r++)
        (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i;
    };
  },
  function (t, e, n) {
    var r = n(57),
      i = n(59),
      o = n(16),
      a = n(285),
      u = n(286),
      c = '[object Map]',
      s = '[object Set]';
    t.exports = function (t) {
      if (null == t) return 0;
      if (o(t)) return a(t) ? u(t) : t.length;
      var e = i(t);
      return e == c || e == s ? t.size : r(t).length;
    };
  },
  function (t, e, n) {
    var r = n(15),
      i = n(2),
      o = n(12),
      a = '[object String]';
    t.exports = function (t) {
      return 'string' == typeof t || (!i(t) && o(t) && r(t) == a);
    };
  },
  function (t, e, n) {
    var r = n(287),
      i = n(288),
      o = n(289);
    t.exports = function (t) {
      return i(t) ? o(t) : r(t);
    };
  },
  function (t, e, n) {
    var r = n(114)('length');
    t.exports = r;
  },
  function (t, e) {
    var n = RegExp(
      '[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]'
    );
    t.exports = function (t) {
      return n.test(t);
    };
  },
  function (t, e) {
    var n = '[\\ud800-\\udfff]',
      r = '[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]',
      i = '\\ud83c[\\udffb-\\udfff]',
      o = '[^\\ud800-\\udfff]',
      a = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      u = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      c = '(?:' + r + '|' + i + ')' + '?',
      s =
        '[\\ufe0e\\ufe0f]?' +
        c +
        ('(?:\\u200d(?:' +
          [o, a, u].join('|') +
          ')[\\ufe0e\\ufe0f]?' +
          c +
          ')*'),
      f = '(?:' + [o + r + '?', r, a, u, n].join('|') + ')',
      l = RegExp(i + '(?=' + i + ')|' + f + s, 'g');
    t.exports = function (t) {
      for (var e = (l.lastIndex = 0); l.test(t); ) ++e;
      return e;
    };
  },
  function (t, e, n) {
    var r = n(10),
      i = n(291),
      o = n(292);
    t.exports = function (t, e) {
      return o(t, i(r(e)));
    };
  },
  function (t, e) {
    var n = 'Expected a function';
    t.exports = function (t) {
      if ('function' != typeof t) throw new TypeError(n);
      return function () {
        var e = arguments;
        switch (e.length) {
          case 0:
            return !t.call(this);
          case 1:
            return !t.call(this, e[0]);
          case 2:
            return !t.call(this, e[0], e[1]);
          case 3:
            return !t.call(this, e[0], e[1], e[2]);
        }
        return !t.apply(this, e);
      };
    };
  },
  function (t, e, n) {
    var r = n(113),
      i = n(10),
      o = n(293),
      a = n(296);
    t.exports = function (t, e) {
      if (null == t) return {};
      var n = r(a(t), function (t) {
        return [t];
      });
      return (
        (e = i(e)),
        o(t, n, function (t, n) {
          return e(t, n[0]);
        })
      );
    };
  },
  function (t, e, n) {
    var r = n(61),
      i = n(294),
      o = n(37);
    t.exports = function (t, e, n) {
      for (var a = -1, u = e.length, c = {}; ++a < u; ) {
        var s = e[a],
          f = r(t, s);
        n(f, s) && i(c, o(s, t), f);
      }
      return c;
    };
  },
  function (t, e, n) {
    var r = n(295),
      i = n(37),
      o = n(54),
      a = n(8),
      u = n(24);
    t.exports = function (t, e, n, c) {
      if (!a(t)) return t;
      for (
        var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t;
        null != d && ++s < f;

      ) {
        var p = u(e[s]),
          v = n;
        if ('__proto__' === p || 'constructor' === p || 'prototype' === p)
          return t;
        if (s != l) {
          var h = d[p];
          void 0 === (v = c ? c(h, p, d) : void 0) &&
            (v = a(h) ? h : o(e[s + 1]) ? [] : {});
        }
        r(d, p, v), (d = d[p]);
      }
      return t;
    };
  },
  function (t, e, n) {
    var r = n(125),
      i = n(49),
      o = Object.prototype.hasOwnProperty;
    t.exports = function (t, e, n) {
      var a = t[e];
      (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
    };
  },
  function (t, e, n) {
    var r = n(104),
      i = n(297),
      o = n(299);
    t.exports = function (t) {
      return r(t, o, i);
    };
  },
  function (t, e, n) {
    var r = n(52),
      i = n(298),
      o = n(105),
      a = n(106),
      u = Object.getOwnPropertySymbols
        ? function (t) {
            for (var e = []; t; ) r(e, o(t)), (t = i(t));
            return e;
          }
        : a;
    t.exports = u;
  },
  function (t, e, n) {
    var r = n(109)(Object.getPrototypeOf, Object);
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(107),
      i = n(300),
      o = n(16);
    t.exports = function (t) {
      return o(t) ? r(t, !0) : i(t);
    };
  },
  function (t, e, n) {
    var r = n(8),
      i = n(58),
      o = n(301),
      a = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (!r(t)) return o(t);
      var e = i(t),
        n = [];
      for (var u in t)
        ('constructor' != u || (!e && a.call(t, u))) && n.push(u);
      return n;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      var e = [];
      if (null != t) for (var n in Object(t)) e.push(n);
      return e;
    };
  },
  function (t, e, n) {
    var r = n(57),
      i = n(59),
      o = n(36),
      a = n(2),
      u = n(16),
      c = n(53),
      s = n(58),
      f = n(55),
      l = '[object Map]',
      d = '[object Set]',
      p = Object.prototype.hasOwnProperty;
    t.exports = function (t) {
      if (null == t) return !0;
      if (
        u(t) &&
        (a(t) ||
          'string' == typeof t ||
          'function' == typeof t.splice ||
          c(t) ||
          f(t) ||
          o(t))
      )
        return !t.length;
      var e = i(t);
      if (e == l || e == d) return !t.size;
      if (s(t)) return !r(t).length;
      for (var n in t) if (p.call(t, n)) return !1;
      return !0;
    };
  },
  function (t, e, n) {
    var r = n(125),
      i = n(123),
      o = n(10);
    t.exports = function (t, e) {
      var n = {};
      return (
        (e = o(e, 3)),
        i(t, function (t, i, o) {
          r(n, i, e(t, i, o));
        }),
        n
      );
    };
  },
  function (t, e, n) {
    var r = n(305),
      i = n(122),
      o = n(306),
      a = n(2);
    t.exports = function (t, e) {
      return (a(t) ? r : i)(t, o(e));
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      for (
        var n = -1, r = null == t ? 0 : t.length;
        ++n < r && !1 !== e(t[n], n, t);

      );
      return t;
    };
  },
  function (t, e, n) {
    var r = n(63);
    t.exports = function (t) {
      return 'function' == typeof t ? t : r;
    };
  },
  function (t, e, n) {
    var r = n(308),
      i = n(8),
      o = 'Expected a function';
    t.exports = function (t, e, n) {
      var a = !0,
        u = !0;
      if ('function' != typeof t) throw new TypeError(o);
      return (
        i(n) &&
          ((a = 'leading' in n ? !!n.leading : a),
          (u = 'trailing' in n ? !!n.trailing : u)),
        r(t, e, { leading: a, maxWait: e, trailing: u })
      );
    };
  },
  function (t, e, n) {
    var r = n(8),
      i = n(309),
      o = n(64),
      a = 'Expected a function',
      u = Math.max,
      c = Math.min;
    t.exports = function (t, e, n) {
      var s,
        f,
        l,
        d,
        p,
        v,
        h = 0,
        E = !1,
        g = !1,
        y = !0;
      if ('function' != typeof t) throw new TypeError(a);
      function _(e) {
        var n = s,
          r = f;
        return (s = f = void 0), (h = e), (d = t.apply(r, n));
      }
      function m(t) {
        var n = t - v;
        return void 0 === v || n >= e || n < 0 || (g && t - h >= l);
      }
      function I() {
        var t = i();
        if (m(t)) return b(t);
        p = setTimeout(
          I,
          (function (t) {
            var n = e - (t - v);
            return g ? c(n, l - (t - h)) : n;
          })(t)
        );
      }
      function b(t) {
        return (p = void 0), y && s ? _(t) : ((s = f = void 0), d);
      }
      function T() {
        var t = i(),
          n = m(t);
        if (((s = arguments), (f = this), (v = t), n)) {
          if (void 0 === p)
            return (function (t) {
              return (h = t), (p = setTimeout(I, e)), E ? _(t) : d;
            })(v);
          if (g) return clearTimeout(p), (p = setTimeout(I, e)), _(v);
        }
        return void 0 === p && (p = setTimeout(I, e)), d;
      }
      return (
        (e = o(e) || 0),
        r(n) &&
          ((E = !!n.leading),
          (l = (g = 'maxWait' in n) ? u(o(n.maxWait) || 0, e) : l),
          (y = 'trailing' in n ? !!n.trailing : y)),
        (T.cancel = function () {
          void 0 !== p && clearTimeout(p), (h = 0), (s = v = f = p = void 0);
        }),
        (T.flush = function () {
          return void 0 === p ? d : b(i());
        }),
        T
      );
    };
  },
  function (t, e, n) {
    var r = n(6);
    t.exports = function () {
      return r.Date.now();
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(1)(n(17));
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.setStyle = function (t, e, n) {
        t.style[e] = n;
      }),
      (e.getStyle = function (t, e) {
        return t.style[e];
      }),
      (e.getProperty = function (t, e) {
        return t[e];
      }),
      (e.matchSelector = function (t) {
        return function (e) {
          return e[a](t);
        };
      }),
      (e.getQuerySelector = function (t) {
        var e = t.id,
          n = t.selector;
        if (e) {
          var r = e;
          if (-1 !== e.indexOf(c)) {
            var i = e.split(c),
              o = i[0];
            if (((r = i[1]), o !== document.documentElement.getAttribute(l)))
              return null;
          }
          return '[data-w-id="'
            .concat(r, '"], [data-w-id^="')
            .concat(r, '_instance"]');
        }
        return n;
      }),
      (e.getValidDocument = function (t) {
        if (null == t || t === document.documentElement.getAttribute(l))
          return document;
        return null;
      }),
      (e.queryDocument = function (t, e) {
        return Array.prototype.slice.call(
          document.querySelectorAll(e ? t + ' ' + e : t)
        );
      }),
      (e.elementContains = function (t, e) {
        return t.contains(e);
      }),
      (e.isSiblingNode = function (t, e) {
        return t !== e && t.parentNode === e.parentNode;
      }),
      (e.getChildElements = function (t) {
        for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
          var i = t[n].children,
            o = i.length;
          if (o) for (var a = 0; a < o; a++) e.push(i[a]);
        }
        return e;
      }),
      (e.getSiblingElements = function () {
        for (
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            e = [],
            n = [],
            r = 0,
            i = t.length;
          r < i;
          r++
        ) {
          var o = t[r].parentNode;
          if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
            n.push(o);
            for (var a = o.firstElementChild; null != a; )
              -1 === t.indexOf(a) && e.push(a), (a = a.nextElementSibling);
          }
        }
        return e;
      }),
      (e.getRefType = function (t) {
        if (null != t && 'object' == (0, r.default)(t))
          return t instanceof Element ? s : f;
        return null;
      }),
      (e.getClosestElement = void 0);
    var i = n(14),
      o = n(4),
      a = i.IX2BrowserSupport.ELEMENT_MATCHES,
      u = o.IX2EngineConstants,
      c = u.IX2_ID_DELIMITER,
      s = u.HTML_ELEMENT,
      f = u.PLAIN_OBJECT,
      l = u.WF_PAGE;
    var d = Element.prototype.closest
      ? function (t, e) {
          return document.documentElement.contains(t) ? t.closest(e) : null;
        }
      : function (t, e) {
          if (!document.documentElement.contains(t)) return null;
          var n = t;
          do {
            if (n[a] && n[a](e)) return n;
            n = n.parentNode;
          } while (null != n);
          return null;
        };
    e.getClosestElement = d;
  },
  function (t, e, n) {
    'use strict';
    var r,
      i = n(1),
      o = i(n(21)),
      a = i(n(17)),
      u = n(1);
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
    var c,
      s,
      f,
      l = u(n(30)),
      d = u(n(312)),
      p = u(n(60)),
      v = u(n(331)),
      h = n(4),
      E = n(124),
      g = n(65),
      y = n(14),
      _ = h.EventTypeConsts,
      m = _.MOUSE_CLICK,
      I = _.MOUSE_SECOND_CLICK,
      b = _.MOUSE_DOWN,
      T = _.MOUSE_UP,
      w = _.MOUSE_OVER,
      O = _.MOUSE_OUT,
      A = _.DROPDOWN_CLOSE,
      S = _.DROPDOWN_OPEN,
      x = _.SLIDER_ACTIVE,
      R = _.SLIDER_INACTIVE,
      N = _.TAB_ACTIVE,
      C = _.TAB_INACTIVE,
      L = _.NAVBAR_CLOSE,
      P = _.NAVBAR_OPEN,
      D = _.MOUSE_MOVE,
      M = _.PAGE_SCROLL_DOWN,
      j = _.SCROLL_INTO_VIEW,
      F = _.SCROLL_OUT_OF_VIEW,
      k = _.PAGE_SCROLL_UP,
      X = _.SCROLLING_IN_VIEW,
      G = _.PAGE_FINISH,
      V = _.ECOMMERCE_CART_CLOSE,
      U = _.ECOMMERCE_CART_OPEN,
      B = _.PAGE_START,
      W = _.PAGE_SCROLL,
      H = 'COMPONENT_ACTIVE',
      z = 'COMPONENT_INACTIVE',
      Y = h.IX2EngineConstants.COLON_DELIMITER,
      K = y.IX2VanillaUtils.getNamespacedParameterId,
      Q = function (t) {
        return function (e) {
          return !('object' !== (0, a.default)(e) || !t(e)) || e;
        };
      },
      q = Q(function (t) {
        return t.element === t.nativeEvent.target;
      }),
      $ = Q(function (t) {
        var e = t.element,
          n = t.nativeEvent;
        return e.contains(n.target);
      }),
      Z = (0, d.default)([q, $]),
      J = function (t, e) {
        if (e) {
          var n = t.getState().ixData.events[e];
          if (n && !at[n.eventTypeId]) return n;
        }
        return null;
      },
      tt = function (t, e) {
        var n = t.store,
          r = t.event,
          i = t.element,
          o = t.eventStateKey,
          a = r.action,
          u = r.id,
          c = a.config,
          s = c.actionListId,
          f = c.autoStopEventId,
          l = J(n, f);
        return (
          l &&
            (0, E.stopActionGroup)({
              store: n,
              eventId: f,
              eventTarget: i,
              eventStateKey: f + Y + o.split(Y)[1],
              actionListId: (0, p.default)(l, 'action.config.actionListId')
            }),
          (0, E.stopActionGroup)({
            store: n,
            eventId: u,
            eventTarget: i,
            eventStateKey: o,
            actionListId: s
          }),
          (0, E.startActionGroup)({
            store: n,
            eventId: u,
            eventTarget: i,
            eventStateKey: o,
            actionListId: s
          }),
          e
        );
      },
      et = function (t, e) {
        return function (n, r) {
          return !0 === t(n, r) ? e(n, r) : r;
        };
      },
      nt = { handler: et(Z, tt) },
      rt = (0, l.default)({}, nt, { types: [H, z].join(' ') }),
      it = [
        { target: window, types: 'resize orientationchange', throttle: !0 },
        {
          target: document,
          types: 'scroll wheel readystatechange IX2_PAGE_UPDATE',
          throttle: !0
        }
      ],
      ot = { types: it },
      at = { PAGE_START: B, PAGE_FINISH: G },
      ut =
        ((c = void 0 !== window.pageXOffset),
        (s =
          'CSS1Compat' === document.compatMode
            ? document.documentElement
            : document.body),
        function () {
          return {
            scrollLeft: c ? window.pageXOffset : s.scrollLeft,
            scrollTop: c ? window.pageYOffset : s.scrollTop,
            stiffScrollTop: (0, v.default)(
              c ? window.pageYOffset : s.scrollTop,
              0,
              s.scrollHeight - window.innerHeight
            ),
            scrollWidth: s.scrollWidth,
            scrollHeight: s.scrollHeight,
            clientWidth: s.clientWidth,
            clientHeight: s.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
          };
        }),
      ct = function (t) {
        var e = t.element,
          n = t.nativeEvent,
          r = n.type,
          i = n.target,
          o = n.relatedTarget,
          a = e.contains(i);
        if ('mouseover' === r && a) return !0;
        var u = e.contains(o);
        return !('mouseout' !== r || !a || !u);
      },
      st = function (t) {
        var e,
          n,
          r = t.element,
          i = t.event.config,
          o = ut(),
          a = o.clientWidth,
          u = o.clientHeight,
          c = i.scrollOffsetValue,
          s = 'PX' === i.scrollOffsetUnit ? c : (u * (c || 0)) / 100;
        return (
          (e = r.getBoundingClientRect()),
          (n = { left: 0, top: s, right: a, bottom: u - s }),
          !(
            e.left > n.right ||
            e.right < n.left ||
            e.top > n.bottom ||
            e.bottom < n.top
          )
        );
      },
      ft = function (t) {
        return function (e, n) {
          var r = e.nativeEvent.type,
            i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
            o = (0, l.default)({}, n, { isActive: i });
          return n && o.isActive === n.isActive ? o : t(e, o) || o;
        };
      },
      lt = function (t) {
        return function (e, n) {
          var r = { elementHovered: ct(e) };
          return (
            ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
              t(e, r)) ||
            r
          );
        };
      },
      dt = function (t) {
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            r = ut(),
            i = r.stiffScrollTop,
            o = r.scrollHeight,
            a = r.innerHeight,
            u = e.event,
            c = u.config,
            s = u.eventTypeId,
            f = c.scrollOffsetValue,
            d = 'PX' === c.scrollOffsetUnit,
            p = o - a,
            v = Number((i / p).toFixed(2));
          if (n && n.percentTop === v) return n;
          var h,
            E,
            g = (d ? f : (a * (f || 0)) / 100) / p,
            y = 0;
          n &&
            ((h = v > n.percentTop),
            (y = (E = n.scrollingDown !== h) ? v : n.anchorTop));
          var _ = s === M ? v >= y + g : v <= y - g,
            m = (0, l.default)({}, n, {
              percentTop: v,
              inBounds: _,
              anchorTop: y,
              scrollingDown: h
            });
          return (n && _ && (E || m.inBounds !== n.inBounds) && t(e, m)) || m;
        };
      },
      pt = function (t) {
        return function (e) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { clickCount: 0 },
            r = { clickCount: (n.clickCount % 2) + 1 };
          return (r.clickCount !== n.clickCount && t(e, r)) || r;
        };
      },
      vt = function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, l.default)({}, rt, {
          handler: et(
            t ? Z : q,
            ft(function (t, e) {
              return e.isActive ? nt.handler(t, e) : e;
            })
          )
        });
      },
      ht = function () {
        var t =
          !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        return (0, l.default)({}, rt, {
          handler: et(
            t ? Z : q,
            ft(function (t, e) {
              return e.isActive ? e : nt.handler(t, e);
            })
          )
        });
      },
      Et = (0, l.default)({}, ot, {
        handler:
          ((f = function (t, e) {
            var n = e.elementVisible,
              r = t.event;
            return !t.store.getState().ixData.events[
              r.action.config.autoStopEventId
            ] && e.triggered
              ? e
              : (r.eventTypeId === j) === n
              ? (tt(t), (0, l.default)({}, e, { triggered: !0 }))
              : e;
          }),
          function (t, e) {
            var n = (0, l.default)({}, e, { elementVisible: st(t) });
            return (
              ((e ? n.elementVisible !== e.elementVisible : n.elementVisible) &&
                f(t, n)) ||
              n
            );
          })
      }),
      gt =
        ((r = {}),
        (0, o.default)(r, x, vt()),
        (0, o.default)(r, R, ht()),
        (0, o.default)(r, S, vt()),
        (0, o.default)(r, A, ht()),
        (0, o.default)(r, P, vt(!1)),
        (0, o.default)(r, L, ht(!1)),
        (0, o.default)(r, N, vt()),
        (0, o.default)(r, C, ht()),
        (0, o.default)(r, U, {
          types: 'ecommerce-cart-open',
          handler: et(Z, tt)
        }),
        (0, o.default)(r, V, {
          types: 'ecommerce-cart-close',
          handler: et(Z, tt)
        }),
        (0, o.default)(r, m, {
          types: 'click',
          handler: et(
            Z,
            pt(function (t, e) {
              var n,
                r,
                i,
                o = e.clickCount;
              (r = (n = t).store),
                (i = n.event.action.config.autoStopEventId),
                Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t);
            })
          )
        }),
        (0, o.default)(r, I, {
          types: 'click',
          handler: et(
            Z,
            pt(function (t, e) {
              2 === e.clickCount && tt(t);
            })
          )
        }),
        (0, o.default)(r, b, (0, l.default)({}, nt, { types: 'mousedown' })),
        (0, o.default)(r, T, (0, l.default)({}, nt, { types: 'mouseup' })),
        (0, o.default)(r, w, {
          types: 'mouseover mouseout',
          handler: et(
            Z,
            lt(function (t, e) {
              e.elementHovered && tt(t);
            })
          )
        }),
        (0, o.default)(r, O, {
          types: 'mouseover mouseout',
          handler: et(
            Z,
            lt(function (t, e) {
              e.elementHovered || tt(t);
            })
          )
        }),
        (0, o.default)(r, D, {
          types: 'mousemove mouseout scroll',
          handler: function (t) {
            var e = t.store,
              n = t.element,
              r = t.eventConfig,
              i = t.nativeEvent,
              o = t.eventStateKey,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
              u = r.basedOn,
              c = r.selectedAxis,
              s = r.continuousParameterGroupId,
              f = r.reverse,
              l = r.restingState,
              d = void 0 === l ? 0 : l,
              p = i.clientX,
              v = void 0 === p ? a.clientX : p,
              E = i.clientY,
              y = void 0 === E ? a.clientY : E,
              _ = i.pageX,
              m = void 0 === _ ? a.pageX : _,
              I = i.pageY,
              b = void 0 === I ? a.pageY : I,
              T = 'X_AXIS' === c,
              w = 'mouseout' === i.type,
              O = d / 100,
              A = s,
              S = !1;
            switch (u) {
              case h.EventBasedOn.VIEWPORT:
                O = T
                  ? Math.min(v, window.innerWidth) / window.innerWidth
                  : Math.min(y, window.innerHeight) / window.innerHeight;
                break;
              case h.EventBasedOn.PAGE:
                var x = ut(),
                  R = x.scrollLeft,
                  N = x.scrollTop,
                  C = x.scrollWidth,
                  L = x.scrollHeight;
                O = T ? Math.min(R + m, C) / C : Math.min(N + b, L) / L;
                break;
              case h.EventBasedOn.ELEMENT:
              default:
                A = K(o, s);
                var P = 0 === i.type.indexOf('mouse');
                if (P && !0 !== Z({ element: n, nativeEvent: i })) break;
                var D = n.getBoundingClientRect(),
                  M = D.left,
                  j = D.top,
                  F = D.width,
                  k = D.height;
                if (
                  !P &&
                  !(function (t, e) {
                    return (
                      t.left > e.left &&
                      t.left < e.right &&
                      t.top > e.top &&
                      t.top < e.bottom
                    );
                  })({ left: v, top: y }, D)
                )
                  break;
                (S = !0), (O = T ? (v - M) / F : (y - j) / k);
            }
            return (
              w && (O > 0.95 || O < 0.05) && (O = Math.round(O)),
              (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) &&
                ((O = f ? 1 - O : O),
                e.dispatch((0, g.parameterChanged)(A, O))),
              { elementHovered: S, clientX: v, clientY: y, pageX: m, pageY: b }
            );
          }
        }),
        (0, o.default)(r, W, {
          types: it,
          handler: function (t) {
            var e = t.store,
              n = t.eventConfig,
              r = n.continuousParameterGroupId,
              i = n.reverse,
              o = ut(),
              a = o.scrollTop / (o.scrollHeight - o.clientHeight);
            (a = i ? 1 - a : a), e.dispatch((0, g.parameterChanged)(r, a));
          }
        }),
        (0, o.default)(r, X, {
          types: it,
          handler: function (t) {
            var e = t.element,
              n = t.store,
              r = t.eventConfig,
              i = t.eventStateKey,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { scrollPercent: 0 },
              a = ut(),
              u = a.scrollLeft,
              c = a.scrollTop,
              s = a.scrollWidth,
              f = a.scrollHeight,
              l = a.clientHeight,
              d = r.basedOn,
              p = r.selectedAxis,
              v = r.continuousParameterGroupId,
              E = r.startsEntering,
              y = r.startsExiting,
              _ = r.addEndOffset,
              m = r.addStartOffset,
              I = r.addOffsetValue,
              b = void 0 === I ? 0 : I,
              T = r.endOffsetValue,
              w = void 0 === T ? 0 : T,
              O = 'X_AXIS' === p;
            if (d === h.EventBasedOn.VIEWPORT) {
              var A = O ? u / s : c / f;
              return (
                A !== o.scrollPercent &&
                  n.dispatch((0, g.parameterChanged)(v, A)),
                { scrollPercent: A }
              );
            }
            var S = K(i, v),
              x = e.getBoundingClientRect(),
              R = (m ? b : 0) / 100,
              N = (_ ? w : 0) / 100;
            (R = E ? R : 1 - R), (N = y ? N : 1 - N);
            var C = x.top + Math.min(x.height * R, l),
              L = x.top + x.height * N - C,
              P = Math.min(l + L, f),
              D = Math.min(Math.max(0, l - C), P) / P;
            return (
              D !== o.scrollPercent &&
                n.dispatch((0, g.parameterChanged)(S, D)),
              { scrollPercent: D }
            );
          }
        }),
        (0, o.default)(r, j, Et),
        (0, o.default)(r, F, Et),
        (0, o.default)(
          r,
          M,
          (0, l.default)({}, ot, {
            handler: dt(function (t, e) {
              e.scrollingDown && tt(t);
            })
          })
        ),
        (0, o.default)(
          r,
          k,
          (0, l.default)({}, ot, {
            handler: dt(function (t, e) {
              e.scrollingDown || tt(t);
            })
          })
        ),
        (0, o.default)(r, G, {
          types: 'readystatechange IX2_PAGE_UPDATE',
          handler: et(
            q,
            (function (t) {
              return function (e, n) {
                var r = { finished: 'complete' === document.readyState };
                return !r.finished || (n && n.finshed) || t(e), r;
              };
            })(tt)
          )
        }),
        (0, o.default)(r, B, {
          types: 'readystatechange IX2_PAGE_UPDATE',
          handler: et(
            q,
            (function (t) {
              return function (e, n) {
                return n || t(e), { started: !0 };
              };
            })(tt)
          )
        }),
        r);
    e.default = gt;
  },
  function (t, e, n) {
    var r = n(313)();
    t.exports = r;
  },
  function (t, e, n) {
    var r = n(66),
      i = n(314),
      o = n(128),
      a = n(129),
      u = n(2),
      c = n(327),
      s = 'Expected a function',
      f = 8,
      l = 32,
      d = 128,
      p = 256;
    t.exports = function (t) {
      return i(function (e) {
        var n = e.length,
          i = n,
          v = r.prototype.thru;
        for (t && e.reverse(); i--; ) {
          var h = e[i];
          if ('function' != typeof h) throw new TypeError(s);
          if (v && !E && 'wrapper' == a(h)) var E = new r([], !0);
        }
        for (i = E ? i : n; ++i < n; ) {
          h = e[i];
          var g = a(h),
            y = 'wrapper' == g ? o(h) : void 0;
          E =
            y && c(y[0]) && y[1] == (d | f | l | p) && !y[4].length && 1 == y[9]
              ? E[a(y[0])].apply(E, y[3])
              : 1 == h.length && c(h)
              ? E[g]()
              : E.thru(h);
        }
        return function () {
          var t = arguments,
            r = t[0];
          if (E && 1 == t.length && u(r)) return E.plant(r).value();
          for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; )
            o = e[i].call(this, o);
          return o;
        };
      });
    };
  },
  function (t, e, n) {
    var r = n(315),
      i = n(318),
      o = n(320);
    t.exports = function (t) {
      return o(i(t, void 0, r), t + '');
    };
  },
  function (t, e, n) {
    var r = n(316);
    t.exports = function (t) {
      return null != t && t.length ? r(t, 1) : [];
    };
  },
  function (t, e, n) {
    var r = n(52),
      i = n(317);
    t.exports = function t(e, n, o, a, u) {
      var c = -1,
        s = e.length;
      for (o || (o = i), u || (u = []); ++c < s; ) {
        var f = e[c];
        n > 0 && o(f)
          ? n > 1
            ? t(f, n - 1, o, a, u)
            : r(u, f)
          : a || (u[u.length] = f);
      }
      return u;
    };
  },
  function (t, e, n) {
    var r = n(23),
      i = n(36),
      o = n(2),
      a = r ? r.isConcatSpreadable : void 0;
    t.exports = function (t) {
      return o(t) || i(t) || !!(a && t && t[a]);
    };
  },
  function (t, e, n) {
    var r = n(319),
      i = Math.max;
    t.exports = function (t, e, n) {
      return (
        (e = i(void 0 === e ? t.length - 1 : e, 0)),
        function () {
          for (
            var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u);
            ++a < u;

          )
            c[a] = o[e + a];
          a = -1;
          for (var s = Array(e + 1); ++a < e; ) s[a] = o[a];
          return (s[e] = n(c)), r(t, this, s);
        }
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      switch (n.length) {
        case 0:
          return t.call(e);
        case 1:
          return t.call(e, n[0]);
        case 2:
          return t.call(e, n[0], n[1]);
        case 3:
          return t.call(e, n[0], n[1], n[2]);
      }
      return t.apply(e, n);
    };
  },
  function (t, e, n) {
    var r = n(321),
      i = n(323)(r);
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(322),
      i = n(126),
      o = n(63),
      a = i
        ? function (t, e) {
            return i(t, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: r(e),
              writable: !0
            });
          }
        : o;
    t.exports = a;
  },
  function (t, e) {
    t.exports = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, e) {
    var n = 800,
      r = 16,
      i = Date.now;
    t.exports = function (t) {
      var e = 0,
        o = 0;
      return function () {
        var a = i(),
          u = r - (a - o);
        if (((o = a), u > 0)) {
          if (++e >= n) return arguments[0];
        } else e = 0;
        return t.apply(void 0, arguments);
      };
    };
  },
  function (t, e, n) {
    var r = n(110),
      i = r && new r();
    t.exports = i;
  },
  function (t, e) {
    t.exports = function () {};
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(68),
      i = n(128),
      o = n(129),
      a = n(328);
    t.exports = function (t) {
      var e = o(t),
        n = a[e];
      if ('function' != typeof n || !(e in r.prototype)) return !1;
      if (t === n) return !0;
      var u = i(n);
      return !!u && t === u[0];
    };
  },
  function (t, e, n) {
    var r = n(68),
      i = n(66),
      o = n(67),
      a = n(2),
      u = n(12),
      c = n(329),
      s = Object.prototype.hasOwnProperty;
    function f(t) {
      if (u(t) && !a(t) && !(t instanceof r)) {
        if (t instanceof i) return t;
        if (s.call(t, '__wrapped__')) return c(t);
      }
      return new i(t);
    }
    (f.prototype = o.prototype), (f.prototype.constructor = f), (t.exports = f);
  },
  function (t, e, n) {
    var r = n(68),
      i = n(66),
      o = n(330);
    t.exports = function (t) {
      if (t instanceof r) return t.clone();
      var e = new i(t.__wrapped__, t.__chain__);
      return (
        (e.__actions__ = o(t.__actions__)),
        (e.__index__ = t.__index__),
        (e.__values__ = t.__values__),
        e
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = -1,
        r = t.length;
      for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
      return e;
    };
  },
  function (t, e, n) {
    var r = n(332),
      i = n(64);
    t.exports = function (t, e, n) {
      return (
        void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n && (n = (n = i(n)) == n ? n : 0),
        void 0 !== e && (e = (e = i(e)) == e ? e : 0),
        r(i(t), e, n)
      );
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      return (
        t == t &&
          (void 0 !== n && (t = t <= n ? t : n),
          void 0 !== e && (t = t >= e ? t : e)),
        t
      );
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(3);
    r.define(
      'links',
      (t.exports = function (t, e) {
        var n,
          i,
          o,
          a = {},
          u = t(window),
          c = r.env(),
          s = window.location,
          f = document.createElement('a'),
          l = 'w--current',
          d = /index\.(html|php)$/,
          p = /\/$/;
        function v(e) {
          var r =
            (n && e.getAttribute('href-disabled')) || e.getAttribute('href');
          if (((f.href = r), !(r.indexOf(':') >= 0))) {
            var a = t(e);
            if (
              f.hash.length > 1 &&
              f.host + f.pathname === s.host + s.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
              var u = t(f.hash);
              u.length && i.push({ link: a, sec: u, active: !1 });
            } else if ('#' !== r && '' !== r) {
              var c = f.href === s.href || r === o || (d.test(r) && p.test(o));
              E(a, l, c);
            }
          }
        }
        function h() {
          var t = u.scrollTop(),
            n = u.height();
          e.each(i, function (e) {
            var r = e.link,
              i = e.sec,
              o = i.offset().top,
              a = i.outerHeight(),
              u = 0.5 * n,
              c = i.is(':visible') && o + a - u >= t && o + u <= t + n;
            e.active !== c && ((e.active = c), E(r, l, c));
          });
        }
        function E(t, e, n) {
          var r = t.hasClass(e);
          (n && r) || ((n || r) && (n ? t.addClass(e) : t.removeClass(e)));
        }
        return (
          (a.ready =
            a.design =
            a.preview =
              function () {
                (n = c && r.env('design')),
                  (o = r.env('slug') || s.pathname || ''),
                  r.scroll.off(h),
                  (i = []);
                for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
                i.length && (r.scroll.on(h), h());
              }),
          a
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(3);
    r.define(
      'scroll',
      (t.exports = function (t) {
        var e = {
            WF_CLICK_EMPTY: 'click.wf-empty-link',
            WF_CLICK_SCROLL: 'click.wf-scroll'
          },
          n = window.location,
          i = (function () {
            try {
              return Boolean(window.frameElement);
            } catch (t) {
              return !0;
            }
          })()
            ? null
            : window.history,
          o = t(window),
          a = t(document),
          u = t(document.body),
          c =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (t) {
              window.setTimeout(t, 15);
            },
          s = r.env('editor') ? '.w-editor-body' : 'body',
          f =
            'header, ' +
            s +
            ' > .header, ' +
            s +
            ' > .w-nav:not([data-no-scroll])',
          l = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + l + ')',
          p = document.createElement('style');
        p.appendChild(
          document.createTextNode(
            '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
          )
        );
        var v = /^#[a-zA-Z0-9][\w:.-]*$/;
        var h =
          'function' == typeof window.matchMedia &&
          window.matchMedia('(prefers-reduced-motion: reduce)');
        function E(t, e) {
          var n;
          switch (e) {
            case 'add':
              (n = t.attr('tabindex'))
                ? t.attr('data-wf-tabindex-swap', n)
                : t.attr('tabindex', '-1');
              break;
            case 'remove':
              (n = t.attr('data-wf-tabindex-swap'))
                ? (t.attr('tabindex', n), t.removeAttr('data-wf-tabindex-swap'))
                : t.removeAttr('tabindex');
          }
          t.toggleClass('wf-force-outline-none', 'add' === e);
        }
        function g(e) {
          var a = e.currentTarget;
          if (
            !(
              r.env('design') ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))
            )
          ) {
            var s,
              l =
                ((s = a),
                v.test(s.hash) && s.host + s.pathname === n.host + n.pathname
                  ? a.hash
                  : '');
            if ('' !== l) {
              var d = t(l);
              d.length &&
                (e && (e.preventDefault(), e.stopPropagation()),
                (function (t) {
                  if (
                    n.hash !== t &&
                    i &&
                    i.pushState &&
                    (!r.env.chrome || 'file:' !== n.protocol)
                  ) {
                    var e = i.state && i.state.hash;
                    e !== t && i.pushState({ hash: t }, '', t);
                  }
                })(l),
                window.setTimeout(
                  function () {
                    !(function (e, n) {
                      var r = o.scrollTop(),
                        i = (function (e) {
                          var n = t(f),
                            r =
                              'fixed' === n.css('position')
                                ? n.outerHeight()
                                : 0,
                            i = e.offset().top - r;
                          if ('mid' === e.data('scroll')) {
                            var a = o.height() - r,
                              u = e.outerHeight();
                            u < a && (i -= Math.round((a - u) / 2));
                          }
                          return i;
                        })(e);
                      if (r === i) return;
                      var a = (function (t, e, n) {
                          if (
                            'none' ===
                              document.body.getAttribute(
                                'data-wf-scroll-motion'
                              ) ||
                            h.matches
                          )
                            return 0;
                          var r = 1;
                          return (
                            u.add(t).each(function (t, e) {
                              var n = parseFloat(
                                e.getAttribute('data-scroll-time')
                              );
                              !isNaN(n) && n >= 0 && (r = n);
                            }),
                            (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) *
                              r
                          );
                        })(e, r, i),
                        s = Date.now();
                      c(function t() {
                        var e = Date.now() - s;
                        window.scroll(
                          0,
                          (function (t, e, n, r) {
                            return n > r
                              ? e
                              : t +
                                  (e - t) *
                                    ((i = n / r) < 0.5
                                      ? 4 * i * i * i
                                      : (i - 1) * (2 * i - 2) * (2 * i - 2) +
                                        1);
                            var i;
                          })(r, i, e, a)
                        ),
                          e <= a ? c(t) : 'function' == typeof n && n();
                      });
                    })(d, function () {
                      E(d, 'add'),
                        d.get(0).focus({ preventScroll: !0 }),
                        E(d, 'remove');
                    });
                  },
                  e ? 0 : 300
                ));
            }
          }
        }
        return {
          ready: function () {
            var t = e.WF_CLICK_EMPTY,
              n = e.WF_CLICK_SCROLL;
            a.on(n, d, g),
              a.on(t, l, function (t) {
                t.preventDefault();
              }),
              document.head.insertBefore(p, document.head.firstChild);
          }
        };
      })
    );
  },
  function (t, e, n) {
    'use strict';
    n(3).define(
      'touch',
      (t.exports = function (t) {
        var e = {},
          n = window.getSelection;
        function r(e) {
          var r,
            i,
            o = !1,
            a = !1,
            u = Math.min(Math.round(0.04 * window.innerWidth), 40);
          function c(t) {
            var e = t.touches;
            (e && e.length > 1) ||
              ((o = !0),
              e ? ((a = !0), (r = e[0].clientX)) : (r = t.clientX),
              (i = r));
          }
          function s(e) {
            if (o) {
              if (a && 'mousemove' === e.type)
                return e.preventDefault(), void e.stopPropagation();
              var r = e.touches,
                c = r ? r[0].clientX : e.clientX,
                s = c - i;
              (i = c),
                Math.abs(s) > u &&
                  n &&
                  '' === String(n()) &&
                  (!(function (e, n, r) {
                    var i = t.Event(e, { originalEvent: n });
                    t(n.target).trigger(i, r);
                  })('swipe', e, { direction: s > 0 ? 'right' : 'left' }),
                  l());
            }
          }
          function f(t) {
            if (o)
              return (
                (o = !1),
                a && 'mouseup' === t.type
                  ? (t.preventDefault(), t.stopPropagation(), void (a = !1))
                  : void 0
              );
          }
          function l() {
            o = !1;
          }
          e.addEventListener('touchstart', c, !1),
            e.addEventListener('touchmove', s, !1),
            e.addEventListener('touchend', f, !1),
            e.addEventListener('touchcancel', l, !1),
            e.addEventListener('mousedown', c, !1),
            e.addEventListener('mousemove', s, !1),
            e.addEventListener('mouseup', f, !1),
            e.addEventListener('mouseout', l, !1),
            (this.destroy = function () {
              e.removeEventListener('touchstart', c, !1),
                e.removeEventListener('touchmove', s, !1),
                e.removeEventListener('touchend', f, !1),
                e.removeEventListener('touchcancel', l, !1),
                e.removeEventListener('mousedown', c, !1),
                e.removeEventListener('mousemove', s, !1),
                e.removeEventListener('mouseup', f, !1),
                e.removeEventListener('mouseout', l, !1),
                (e = null);
            });
        }
        return (
          (t.event.special.tap = { bindType: 'click', delegateType: 'click' }),
          (e.init = function (e) {
            return (e = 'string' == typeof e ? t(e).get(0) : e)
              ? new r(e)
              : null;
          }),
          (e.instance = e.init(document)),
          e
        );
      })
    );
  },
  function (t, e, n) {
    'use strict';
    var r = n(1)(n(337)),
      i = n(3);
    i.define(
      'forms',
      (t.exports = function (t, e) {
        var n,
          o,
          a,
          u,
          c,
          s = {},
          f = t(document),
          l = window.location,
          d = window.XDomainRequest && !window.atob,
          p = '.w-form',
          v = /e(-)?mail/i,
          h = /^\S+@\S+$/,
          E = window.alert,
          g = i.env(),
          y = /list-manage[1-9]?.com/i,
          _ = e.debounce(function () {
            E(
              'Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.'
            );
          }, 100);
        function m(e, n) {
          var r = t(n),
            i = t.data(n, p);
          i || (i = t.data(n, p, { form: r })), I(i);
          var a = r.closest('div.w-form');
          (i.done = a.find('> .w-form-done')),
            (i.fail = a.find('> .w-form-fail')),
            (i.fileUploads = a.find('.w-file-upload')),
            i.fileUploads.each(function (e) {
              !(function (e, n) {
                if (!n.fileUploads || !n.fileUploads[e]) return;
                var r,
                  i = t(n.fileUploads[e]),
                  o = i.find('> .w-file-upload-default'),
                  a = i.find('> .w-file-upload-uploading'),
                  u = i.find('> .w-file-upload-success'),
                  s = i.find('> .w-file-upload-error'),
                  f = o.find('.w-file-upload-input'),
                  l = o.find('.w-file-upload-label'),
                  d = l.children(),
                  p = s.find('.w-file-upload-error-msg'),
                  v = u.find('.w-file-upload-file'),
                  h = u.find('.w-file-remove-link'),
                  E = v.find('.w-file-upload-file-name'),
                  y = p.attr('data-w-size-error'),
                  _ = p.attr('data-w-type-error'),
                  m = p.attr('data-w-generic-error');
                g ||
                  l.on('click keydown', function (t) {
                    ('keydown' === t.type &&
                      13 !== t.which &&
                      32 !== t.which) ||
                      (t.preventDefault(), f.click());
                  });
                if (
                  (l
                    .find('.w-icon-file-upload-icon')
                    .attr('aria-hidden', 'true'),
                  h
                    .find('.w-icon-file-upload-remove')
                    .attr('aria-hidden', 'true'),
                  g)
                )
                  f.on('click', function (t) {
                    t.preventDefault();
                  }),
                    l.on('click', function (t) {
                      t.preventDefault();
                    }),
                    d.on('click', function (t) {
                      t.preventDefault();
                    });
                else {
                  h.on('click keydown', function (t) {
                    if ('keydown' === t.type) {
                      if (13 !== t.which && 32 !== t.which) return;
                      t.preventDefault();
                    }
                    f.removeAttr('data-value'),
                      f.val(''),
                      E.html(''),
                      o.toggle(!0),
                      u.toggle(!1),
                      l.focus();
                  }),
                    f.on('change', function (i) {
                      (r = i.target && i.target.files && i.target.files[0]) &&
                        (o.toggle(!1),
                        s.toggle(!1),
                        a.toggle(!0),
                        a.focus(),
                        E.text(r.name),
                        S() || b(n),
                        (n.fileUploads[e].uploading = !0),
                        (function (e, n) {
                          var r = new URLSearchParams({
                            name: e.name,
                            size: e.size
                          });
                          t.ajax({
                            type: 'GET',
                            url: ''.concat(c, '?').concat(r),
                            crossDomain: !0
                          })
                            .done(function (t) {
                              n(null, t);
                            })
                            .fail(function (t) {
                              n(t);
                            });
                        })(r, O));
                    });
                  var T = l.outerHeight();
                  f.height(T), f.width(1);
                }
                function w(t) {
                  var r = t.responseJSON && t.responseJSON.msg,
                    i = m;
                  'string' == typeof r &&
                  0 === r.indexOf('InvalidFileTypeError')
                    ? (i = _)
                    : 'string' == typeof r &&
                      0 === r.indexOf('MaxFileSizeError') &&
                      (i = y),
                    p.text(i),
                    f.removeAttr('data-value'),
                    f.val(''),
                    a.toggle(!1),
                    o.toggle(!0),
                    s.toggle(!0),
                    s.focus(),
                    (n.fileUploads[e].uploading = !1),
                    S() || I(n);
                }
                function O(e, n) {
                  if (e) return w(e);
                  var i = n.fileName,
                    o = n.postData,
                    a = n.fileId,
                    u = n.s3Url;
                  f.attr('data-value', a),
                    (function (e, n, r, i, o) {
                      var a = new FormData();
                      for (var u in n) a.append(u, n[u]);
                      a.append('file', r, i),
                        t
                          .ajax({
                            type: 'POST',
                            url: e,
                            data: a,
                            processData: !1,
                            contentType: !1
                          })
                          .done(function () {
                            o(null);
                          })
                          .fail(function (t) {
                            o(t);
                          });
                    })(u, o, r, i, A);
                }
                function A(t) {
                  if (t) return w(t);
                  a.toggle(!1),
                    u.css('display', 'inline-block'),
                    u.focus(),
                    (n.fileUploads[e].uploading = !1),
                    S() || I(n);
                }
                function S() {
                  var t = (n.fileUploads && n.fileUploads.toArray()) || [];
                  return t.some(function (t) {
                    return t.uploading;
                  });
                }
              })(e, i);
            });
          var u =
            i.form.attr('aria-label') || i.form.attr('data-name') || 'Form';
          i.done.attr('aria-label') || i.form.attr('aria-label', u),
            i.done.attr('tabindex', '-1'),
            i.done.attr('role', 'region'),
            i.done.attr('aria-label') ||
              i.done.attr('aria-label', u + ' success'),
            i.fail.attr('tabindex', '-1'),
            i.fail.attr('role', 'region'),
            i.fail.attr('aria-label') ||
              i.fail.attr('aria-label', u + ' failure');
          var s = (i.action = r.attr('action'));
          (i.handler = null),
            (i.redirect = r.attr('data-redirect')),
            y.test(s) ? (i.handler = A) : s || (o ? (i.handler = O) : _());
        }
        function I(t) {
          var e = (t.btn = t.form.find(':input[type="submit"]'));
          (t.wait = t.btn.attr('data-wait') || null),
            (t.success = !1),
            e.prop('disabled', !1),
            t.label && e.val(t.label);
        }
        function b(t) {
          var e = t.btn,
            n = t.wait;
          e.prop('disabled', !0), n && ((t.label = e.val()), e.val(n));
        }
        function T(e, n) {
          var r = null;
          return (
            (n = n || {}),
            e
              .find(':input:not([type="submit"]):not([type="file"])')
              .each(function (i, o) {
                var a = t(o),
                  u = a.attr('type'),
                  c =
                    a.attr('data-name') || a.attr('name') || 'Field ' + (i + 1),
                  s = a.val();
                if ('checkbox' === u) s = a.is(':checked');
                else if ('radio' === u) {
                  if (null === n[c] || 'string' == typeof n[c]) return;
                  s =
                    e
                      .find('input[name="' + a.attr('name') + '"]:checked')
                      .val() || null;
                }
                'string' == typeof s && (s = t.trim(s)),
                  (n[c] = s),
                  (r =
                    r ||
                    (function (t, e, n, r) {
                      var i = null;
                      'password' === e
                        ? (i = 'Passwords cannot be submitted.')
                        : t.attr('required')
                        ? r
                          ? v.test(t.attr('type')) &&
                            (h.test(r) ||
                              (i =
                                'Please enter a valid email address for: ' + n))
                          : (i = 'Please fill out the required field: ' + n)
                        : 'g-recaptcha-response' !== n ||
                          r ||
                          (i = 'Please confirm you’re not a robot.');
                      return i;
                    })(a, u, c, s));
              }),
            r
          );
        }
        s.ready =
          s.design =
          s.preview =
            function () {
              !(function () {
                (o = t('html').attr('data-wf-site')),
                  (u = 'https://webflow.com/api/v1/form/' + o),
                  d &&
                    u.indexOf('https://webflow.com') >= 0 &&
                    (u = u.replace(
                      'https://webflow.com',
                      'http://formdata.webflow.com'
                    ));
                if (
                  ((c = ''.concat(u, '/signFile')),
                  !(n = t(p + ' form')).length)
                )
                  return;
                n.each(m);
              })(),
                g ||
                  a ||
                  (function () {
                    (a = !0),
                      f.on('submit', p + ' form', function (e) {
                        var n = t.data(this, p);
                        n.handler && ((n.evt = e), n.handler(n));
                      });
                    var e = [
                      ['checkbox', '.w-checkbox-input'],
                      ['radio', '.w-radio-input']
                    ];
                    f.on(
                      'change',
                      p + ' form input[type="checkbox"]:not(.w-checkbox-input)',
                      function (e) {
                        t(e.target)
                          .siblings('.w-checkbox-input')
                          .toggleClass('w--redirected-checked');
                      }
                    ),
                      f.on(
                        'change',
                        p + ' form input[type="radio"]',
                        function (e) {
                          t(
                            'input[name="'
                              .concat(e.target.name, '"]:not(')
                              .concat('.w-checkbox-input', ')')
                          ).map(function (e, n) {
                            return t(n)
                              .siblings('.w-radio-input')
                              .removeClass('w--redirected-checked');
                          });
                          var n = t(e.target);
                          n.hasClass('w-radio-input') ||
                            n
                              .siblings('.w-radio-input')
                              .addClass('w--redirected-checked');
                        }
                      ),
                      e.forEach(function (e) {
                        var n = (0, r.default)(e, 2),
                          i = n[0],
                          o = n[1];
                        f.on(
                          'focus',
                          p +
                            ' form input[type="'.concat(i, '"]:not(') +
                            o +
                            ')',
                          function (e) {
                            t(e.target)
                              .siblings(o)
                              .addClass('w--redirected-focus'),
                              t(e.target)
                                .filter(
                                  ':focus-visible, [data-wf-focus-visible]'
                                )
                                .siblings(o)
                                .addClass('w--redirected-focus-visible');
                          }
                        ),
                          f.on(
                            'blur',
                            p +
                              ' form input[type="'.concat(i, '"]:not(') +
                              o +
                              ')',
                            function (e) {
                              t(e.target)
                                .siblings(o)
                                .removeClass(
                                  ''
                                    .concat('w--redirected-focus', ' ')
                                    .concat('w--redirected-focus-visible')
                                );
                            }
                          );
                      });
                  })();
            };
        var w = { _mkto_trk: 'marketo' };
        function O(e) {
          I(e);
          var n = e.form,
            r = {
              name: n.attr('data-name') || n.attr('name') || 'Untitled Form',
              source: l.href,
              test: i.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                n.html()
              ),
              trackingCookies: document.cookie
                .split('; ')
                .reduce(function (t, e) {
                  var n = e.split('='),
                    r = n[0];
                  if (r in w) {
                    var i = w[r],
                      o = n.slice(1).join('=');
                    t[i] = o;
                  }
                  return t;
                }, {})
            },
            a = n.attr('data-wf-flow');
          a && (r.wfFlow = a), x(e);
          var c = T(n, r.fields);
          if (c) return E(c);
          (r.fileUploads = (function (e) {
            var n = {};
            return (
              e.find(':input[type="file"]').each(function (e, r) {
                var i = t(r),
                  o =
                    i.attr('data-name') || i.attr('name') || 'File ' + (e + 1),
                  a = i.attr('data-value');
                'string' == typeof a && (a = t.trim(a)), (n[o] = a);
              }),
              n
            );
          })(n)),
            b(e),
            o
              ? t
                  .ajax({
                    url: u,
                    type: 'POST',
                    data: r,
                    dataType: 'json',
                    crossDomain: !0
                  })
                  .done(function (t) {
                    t && 200 === t.code && (e.success = !0), S(e);
                  })
                  .fail(function () {
                    S(e);
                  })
              : S(e);
        }
        function A(n) {
          I(n);
          var r = n.form,
            i = {};
          if (!/^https/.test(l.href) || /^https/.test(n.action)) {
            x(n);
            var o,
              a = T(r, i);
            if (a) return E(a);
            b(n),
              e.each(i, function (t, e) {
                v.test(e) && (i.EMAIL = t),
                  /^((full[ _-]?)?name)$/i.test(e) && (o = t),
                  /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t),
                  /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t);
              }),
              o &&
                !i.FNAME &&
                ((o = o.split(' ')),
                (i.FNAME = o[0]),
                (i.LNAME = i.LNAME || o[1]));
            var u = n.action.replace('/post?', '/post-json?') + '&c=?',
              c = u.indexOf('u=') + 2;
            c = u.substring(c, u.indexOf('&', c));
            var s = u.indexOf('id=') + 3;
            (s = u.substring(s, u.indexOf('&', s))),
              (i['b_' + c + '_' + s] = ''),
              t
                .ajax({ url: u, data: i, dataType: 'jsonp' })
                .done(function (t) {
                  (n.success = 'success' === t.result || /already/.test(t.msg)),
                    n.success || console.info('MailChimp error: ' + t.msg),
                    S(n);
                })
                .fail(function () {
                  S(n);
                });
          } else r.attr('method', 'post');
        }
        function S(t) {
          var e = t.form,
            n = t.redirect,
            r = t.success;
          r && n
            ? i.location(n)
            : (t.done.toggle(r),
              t.fail.toggle(!r),
              r ? t.done.focus() : t.fail.focus(),
              e.toggle(!r),
              I(t));
        }
        function x(t) {
          t.evt && t.evt.preventDefault(), (t.evt = null);
        }
        return s;
      })
    );
  },
  function (t, e, n) {
    var r = n(338),
      i = n(339),
      o = n(340);
    t.exports = function (t, e) {
      return r(t) || i(t, e) || o();
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      var n = [],
        r = !0,
        i = !1,
        o = void 0;
      try {
        for (
          var a, u = t[Symbol.iterator]();
          !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e);
          r = !0
        );
      } catch (t) {
        (i = !0), (o = t);
      } finally {
        try {
          r || null == u.return || u.return();
        } finally {
          if (i) throw o;
        }
      }
      return n;
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance'
      );
    };
  },
  function (t, e, n) {
    'use strict';
    var r = n(3),
      i = n(70),
      o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      },
      a =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    r.define(
      'slider',
      (t.exports = function (t, e) {
        var n,
          u,
          c,
          s = {},
          f = t.tram,
          l = t(document),
          d = r.env(),
          p = '.w-slider',
          v = '<div class="w-slider-dot" data-wf-ignore />',
          h =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          E = 'w-slider-force-show',
          g = i.triggers,
          y = !1;
        function _() {
          (n = l.find(p)).length &&
            (n.each(b), c || (m(), r.resize.on(I), r.redraw.on(s.redraw)));
        }
        function m() {
          r.resize.off(I), r.redraw.off(s.redraw);
        }
        function I() {
          n.filter(':visible').each(D);
        }
        function b(e, n) {
          var r = t(n),
            i = t.data(n, p);
          i ||
            (i = t.data(n, p, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: r,
              config: {}
            })),
            (i.mask = r.children('.w-slider-mask')),
            (i.left = r.children('.w-slider-arrow-left')),
            (i.right = r.children('.w-slider-arrow-right')),
            (i.nav = r.children('.w-slider-nav')),
            (i.slides = i.mask.children('.w-slide')),
            i.slides.each(g.reset),
            y && (i.maskWidth = 0),
            void 0 === r.attr('role') && r.attr('role', 'region'),
            void 0 === r.attr('aria-label') && r.attr('aria-label', 'carousel');
          var o = i.mask.attr('id');
          if (
            (o || ((o = 'w-slider-mask-' + e), i.mask.attr('id', o)),
            u || i.ariaLiveLabel || (i.ariaLiveLabel = t(h).appendTo(i.mask)),
            i.left.attr('role', 'button'),
            i.left.attr('tabindex', '0'),
            i.left.attr('aria-controls', o),
            void 0 === i.left.attr('aria-label') &&
              i.left.attr('aria-label', 'previous slide'),
            i.right.attr('role', 'button'),
            i.right.attr('tabindex', '0'),
            i.right.attr('aria-controls', o),
            void 0 === i.right.attr('aria-label') &&
              i.right.attr('aria-label', 'next slide'),
            !f.support.transform)
          )
            return i.left.hide(), i.right.hide(), i.nav.hide(), void (c = !0);
          i.el.off(p),
            i.left.off(p),
            i.right.off(p),
            i.nav.off(p),
            T(i),
            u
              ? (i.el.on('setting' + p, C(i)), N(i), (i.hasTimer = !1))
              : (i.el.on('swipe' + p, C(i)),
                i.left.on('click' + p, S(i)),
                i.right.on('click' + p, x(i)),
                i.left.on('keydown' + p, A(i, S)),
                i.right.on('keydown' + p, A(i, x)),
                i.nav.on('keydown' + p, '> div', C(i)),
                i.config.autoplay &&
                  !i.hasTimer &&
                  ((i.hasTimer = !0), (i.timerCount = 1), R(i)),
                i.el.on('mouseenter' + p, O(i, !0, 'mouse')),
                i.el.on('focusin' + p, O(i, !0, 'keyboard')),
                i.el.on('mouseleave' + p, O(i, !1, 'mouse')),
                i.el.on('focusout' + p, O(i, !1, 'keyboard'))),
            i.nav.on('click' + p, '> div', C(i)),
            d ||
              i.mask
                .contents()
                .filter(function () {
                  return 3 === this.nodeType;
                })
                .remove();
          var a = r.filter(':hidden');
          a.addClass(E);
          var s = r.parents(':hidden');
          s.addClass(E), y || D(e, n), a.removeClass(E), s.removeClass(E);
        }
        function T(t) {
          var e = { crossOver: 0 };
          (e.animation = t.el.attr('data-animation') || 'slide'),
            'outin' === e.animation &&
              ((e.animation = 'cross'), (e.crossOver = 0.5)),
            (e.easing = t.el.attr('data-easing') || 'ease');
          var n = t.el.attr('data-duration');
          if (
            ((e.duration = null != n ? parseInt(n, 10) : 500),
            w(t.el.attr('data-infinite')) && (e.infinite = !0),
            w(t.el.attr('data-disable-swipe')) && (e.disableSwipe = !0),
            w(t.el.attr('data-hide-arrows'))
              ? (e.hideArrows = !0)
              : t.config.hideArrows && (t.left.show(), t.right.show()),
            w(t.el.attr('data-autoplay')))
          ) {
            (e.autoplay = !0),
              (e.delay = parseInt(t.el.attr('data-delay'), 10) || 2e3),
              (e.timerMax = parseInt(t.el.attr('data-autoplay-limit'), 10));
            var r = 'mousedown' + p + ' touchstart' + p;
            u ||
              t.el.off(r).one(r, function () {
                N(t);
              });
          }
          var i = t.right.width();
          (e.edge = i ? i + 40 : 100), (t.config = e);
        }
        function w(t) {
          return '1' === t || 'true' === t;
        }
        function O(e, n, r) {
          return function (i) {
            if (n) e.hasFocus[r] = n;
            else {
              if (t.contains(e.el.get(0), i.relatedTarget)) return;
              if (
                ((e.hasFocus[r] = n),
                (e.hasFocus.mouse && 'keyboard' === r) ||
                  (e.hasFocus.keyboard && 'mouse' === r))
              )
                return;
            }
            n
              ? (e.ariaLiveLabel.attr('aria-live', 'polite'),
                e.hasTimer && N(e))
              : (e.ariaLiveLabel.attr('aria-live', 'off'), e.hasTimer && R(e));
          };
        }
        function A(t, e) {
          return function (n) {
            switch (n.keyCode) {
              case o.SPACE:
              case o.ENTER:
                return e(t)(), n.preventDefault(), n.stopPropagation();
            }
          };
        }
        function S(t) {
          return function () {
            P(t, { index: t.index - 1, vector: -1 });
          };
        }
        function x(t) {
          return function () {
            P(t, { index: t.index + 1, vector: 1 });
          };
        }
        function R(t) {
          N(t);
          var e = t.config,
            n = e.timerMax;
          (n && t.timerCount++ > n) ||
            (t.timerId = window.setTimeout(function () {
              null == t.timerId || u || (x(t)(), R(t));
            }, e.delay));
        }
        function N(t) {
          window.clearTimeout(t.timerId), (t.timerId = null);
        }
        function C(n) {
          return function (i, a) {
            a = a || {};
            var c = n.config;
            if (u && 'setting' === i.type) {
              if ('prev' === a.select) return S(n)();
              if ('next' === a.select) return x(n)();
              if ((T(n), M(n), null == a.select)) return;
              !(function (n, r) {
                var i = null;
                r === n.slides.length && (_(), M(n)),
                  e.each(n.anchors, function (e, n) {
                    t(e.els).each(function (e, o) {
                      t(o).index() === r && (i = n);
                    });
                  }),
                  null != i && P(n, { index: i, immediate: !0 });
              })(n, a.select);
            } else {
              if ('swipe' === i.type) {
                if (c.disableSwipe) return;
                if (r.env('editor')) return;
                return 'left' === a.direction
                  ? x(n)()
                  : 'right' === a.direction
                  ? S(n)()
                  : void 0;
              }
              if (n.nav.has(i.target).length) {
                var s = t(i.target).index();
                if (
                  ('click' === i.type && P(n, { index: s }),
                  'keydown' === i.type)
                )
                  switch (i.keyCode) {
                    case o.ENTER:
                    case o.SPACE:
                      P(n, { index: s }), i.preventDefault();
                      break;
                    case o.ARROW_LEFT:
                    case o.ARROW_UP:
                      L(n.nav, Math.max(s - 1, 0)), i.preventDefault();
                      break;
                    case o.ARROW_RIGHT:
                    case o.ARROW_DOWN:
                      L(n.nav, Math.min(s + 1, n.pages)), i.preventDefault();
                      break;
                    case o.HOME:
                      L(n.nav, 0), i.preventDefault();
                      break;
                    case o.END:
                      L(n.nav, n.pages), i.preventDefault();
                      break;
                    default:
                      return;
                  }
              }
            }
          };
        }
        function L(t, e) {
          var n = t.children().eq(e).focus();
          t.children().not(n);
        }
        function P(e, n) {
          n = n || {};
          var r = e.config,
            i = e.anchors;
          e.previous = e.index;
          var o = n.index,
            c = {};
          o < 0
            ? ((o = i.length - 1),
              r.infinite &&
                ((c.x = -e.endX), (c.from = 0), (c.to = i[0].width)))
            : o >= i.length &&
              ((o = 0),
              r.infinite &&
                ((c.x = i[i.length - 1].width),
                (c.from = -i[i.length - 1].x),
                (c.to = c.from - c.x))),
            (e.index = o);
          var s = e.nav
            .children()
            .eq(o)
            .addClass('w-active')
            .attr('aria-pressed', 'true')
            .attr('tabindex', '0');
          e.nav
            .children()
            .not(s)
            .removeClass('w-active')
            .attr('aria-pressed', 'false')
            .attr('tabindex', '-1'),
            r.hideArrows &&
              (e.index === i.length - 1 ? e.right.hide() : e.right.show(),
              0 === e.index ? e.left.hide() : e.left.show());
          var l = e.offsetX || 0,
            d = (e.offsetX = -i[e.index].x),
            p = { x: d, opacity: 1, visibility: '' },
            v = t(i[e.index].els),
            h = t(i[e.previous] && i[e.previous].els),
            E = e.slides.not(v),
            _ = r.animation,
            m = r.easing,
            I = Math.round(r.duration),
            b = n.vector || (e.index > e.previous ? 1 : -1),
            T = 'opacity ' + I + 'ms ' + m,
            w = 'transform ' + I + 'ms ' + m;
          if (
            (v.find(a).removeAttr('tabindex'),
            v.removeAttr('aria-hidden'),
            v.find('*').removeAttr('aria-hidden'),
            E.find(a).attr('tabindex', '-1'),
            E.attr('aria-hidden', 'true'),
            E.find('*').attr('aria-hidden', 'true'),
            u || (v.each(g.intro), E.each(g.outro)),
            n.immediate && !y)
          )
            return f(v).set(p), void S();
          if (e.index !== e.previous) {
            if (
              (u ||
                e.ariaLiveLabel.text(
                  'Slide '.concat(o + 1, ' of ').concat(i.length, '.')
                ),
              'cross' === _)
            ) {
              var O = Math.round(I - I * r.crossOver),
                A = Math.round(I - O);
              return (
                (T = 'opacity ' + O + 'ms ' + m),
                f(h).set({ visibility: '' }).add(T).start({ opacity: 0 }),
                void f(v)
                  .set({ visibility: '', x: d, opacity: 0, zIndex: e.depth++ })
                  .add(T)
                  .wait(A)
                  .then({ opacity: 1 })
                  .then(S)
              );
            }
            if ('fade' === _)
              return (
                f(h).set({ visibility: '' }).stop(),
                void f(v)
                  .set({ visibility: '', x: d, opacity: 0, zIndex: e.depth++ })
                  .add(T)
                  .start({ opacity: 1 })
                  .then(S)
              );
            if ('over' === _)
              return (
                (p = { x: e.endX }),
                f(h).set({ visibility: '' }).stop(),
                void f(v)
                  .set({
                    visibility: '',
                    zIndex: e.depth++,
                    x: d + i[e.index].width * b
                  })
                  .add(w)
                  .start({ x: d })
                  .then(S)
              );
            r.infinite && c.x
              ? (f(e.slides.not(h))
                  .set({ visibility: '', x: c.x })
                  .add(w)
                  .start({ x: d }),
                f(h)
                  .set({ visibility: '', x: c.from })
                  .add(w)
                  .start({ x: c.to }),
                (e.shifted = h))
              : (r.infinite &&
                  e.shifted &&
                  (f(e.shifted).set({ visibility: '', x: l }),
                  (e.shifted = null)),
                f(e.slides).set({ visibility: '' }).add(w).start({ x: d }));
          }
          function S() {
            (v = t(i[e.index].els)),
              (E = e.slides.not(v)),
              'slide' !== _ && (p.visibility = 'hidden'),
              f(E).set(p);
          }
        }
        function D(e, n) {
          var r = t.data(n, p);
          if (r)
            return (function (t) {
              var e = t.mask.width();
              if (t.maskWidth !== e) return (t.maskWidth = e), !0;
              return !1;
            })(r)
              ? M(r)
              : void (
                  u &&
                  (function (e) {
                    var n = 0;
                    if (
                      (e.slides.each(function (e, r) {
                        n += t(r).outerWidth(!0);
                      }),
                      e.slidesWidth !== n)
                    )
                      return (e.slidesWidth = n), !0;
                    return !1;
                  })(r) &&
                  M(r)
                );
        }
        function M(e) {
          var n = 1,
            r = 0,
            i = 0,
            o = 0,
            a = e.maskWidth,
            c = a - e.config.edge;
          c < 0 && (c = 0),
            (e.anchors = [{ els: [], x: 0, width: 0 }]),
            e.slides.each(function (u, s) {
              i - r > c &&
                (n++,
                (r += a),
                (e.anchors[n - 1] = { els: [], x: i, width: 0 })),
                (o = t(s).outerWidth(!0)),
                (i += o),
                (e.anchors[n - 1].width += o),
                e.anchors[n - 1].els.push(s);
              var f = u + 1 + ' of ' + e.slides.length;
              t(s).attr('aria-label', f), t(s).attr('role', 'group');
            }),
            (e.endX = i),
            u && (e.pages = null),
            e.nav.length &&
              e.pages !== n &&
              ((e.pages = n),
              (function (e) {
                var n,
                  r = [],
                  i = e.el.attr('data-nav-spacing');
                i && (i = parseFloat(i) + 'px');
                for (var o = 0, a = e.pages; o < a; o++)
                  (n = t(v))
                    .attr('aria-label', 'Show slide ' + (o + 1) + ' of ' + a)
                    .attr('aria-pressed', 'false')
                    .attr('role', 'button')
                    .attr('tabindex', '-1'),
                    e.nav.hasClass('w-num') && n.text(o + 1),
                    null != i && n.css({ 'margin-left': i, 'margin-right': i }),
                    r.push(n);
                e.nav.empty().append(r);
              })(e));
          var s = e.index;
          s >= n && (s = n - 1), P(e, { immediate: !0, index: s });
        }
        return (
          (s.ready = function () {
            (u = r.env('design')), _();
          }),
          (s.design = function () {
            (u = !0), setTimeout(_, 1e3);
          }),
          (s.preview = function () {
            (u = !1), _();
          }),
          (s.redraw = function () {
            (y = !0), _(), (y = !1);
          }),
          (s.destroy = m),
          s
        );
      })
    );
  }
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([
  {
    slug: 'new-interaction',
    name: 'New Interaction',
    value: { style: {}, triggers: [] }
  }
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
  events: {
    'e-9': {
      id: 'e-9',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-8',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-10'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6ba24-5075-6468-70b2-03bf55499717',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6ba24-5075-6468-70b2-03bf55499717',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1576683362340
    },
    'e-47': {
      id: 'e-47',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-8',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-48'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|64df2638-d143-68ea-f373-d939654fc9ab',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|64df2638-d143-68ea-f373-d939654fc9ab',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1577589571985
    },
    'e-64': {
      id: 'e-64',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-65'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.accordionitemtrigger',
        originalId:
          '617c5c8ec6079d8cddecacee|155d154d-1511-7a7a-6401-c2ec4ac62b54',
        appliesTo: 'CLASS'
      },
      targets: [
        {
          selector: '.accordionitemtrigger',
          originalId:
            '617c5c8ec6079d8cddecacee|155d154d-1511-7a7a-6401-c2ec4ac62b54',
          appliesTo: 'CLASS'
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1584666194780
    },
    'e-65': {
      id: 'e-65',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-64'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        selector: '.accordionitemtrigger',
        originalId:
          '617c5c8ec6079d8cddecacee|155d154d-1511-7a7a-6401-c2ec4ac62b54',
        appliesTo: 'CLASS'
      },
      targets: [
        {
          selector: '.accordionitemtrigger',
          originalId:
            '617c5c8ec6079d8cddecacee|155d154d-1511-7a7a-6401-c2ec4ac62b54',
          appliesTo: 'CLASS'
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1584666194781
    },
    'e-66': {
      id: 'e-66',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-67'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|155d154d-1511-7a7a-6401-c2ec4ac62b54',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|155d154d-1511-7a7a-6401-c2ec4ac62b54',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1584667897072
    },
    'e-67': {
      id: 'e-67',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-66'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|155d154d-1511-7a7a-6401-c2ec4ac62b54',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|155d154d-1511-7a7a-6401-c2ec4ac62b54',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1584667897074
    },
    'e-155': {
      id: 'e-155',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-7',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-156'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dee07ecac58|5e4e44bd-6cef-0e02-7374-07392a6b047c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dee07ecac58|5e4e44bd-6cef-0e02-7374-07392a6b047c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1593183979368
    },
    'e-177': {
      id: 'e-177',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-178'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|bf004ebc-ad2a-ce60-c092-5bd54353b1ef',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|bf004ebc-ad2a-ce60-c092-5bd54353b1ef',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1594985865445
    },
    'e-178': {
      id: 'e-178',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-177'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|bf004ebc-ad2a-ce60-c092-5bd54353b1ef',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|bf004ebc-ad2a-ce60-c092-5bd54353b1ef',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1594985865445
    },
    'e-195': {
      id: 'e-195',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-196'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|953f0645-414f-83b3-b2a0-fd6dd0fc7568',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|953f0645-414f-83b3-b2a0-fd6dd0fc7568',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1596133740027
    },
    'e-196': {
      id: 'e-196',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-195'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|953f0645-414f-83b3-b2a0-fd6dd0fc7568',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|953f0645-414f-83b3-b2a0-fd6dd0fc7568',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1596133740027
    },
    'e-197': {
      id: 'e-197',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-198'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|ccf1d113-a222-2546-2b53-fd1d4249d809',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|ccf1d113-a222-2546-2b53-fd1d4249d809',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1596834311739
    },
    'e-198': {
      id: 'e-198',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-197'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|ccf1d113-a222-2546-2b53-fd1d4249d809',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|ccf1d113-a222-2546-2b53-fd1d4249d809',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1596834311739
    },
    'e-201': {
      id: 'e-201',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-7',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-202'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6e66ecace0|5e4e44bd-6cef-0e02-7374-07392a6b047c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6e66ecace0|5e4e44bd-6cef-0e02-7374-07392a6b047c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1597073556312
    },
    'e-203': {
      id: 'e-203',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-204'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|b5ee2650-d52c-abd0-8968-efbff38d8f95',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|b5ee2650-d52c-abd0-8968-efbff38d8f95',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1597674690743
    },
    'e-204': {
      id: 'e-204',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-203'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|b5ee2650-d52c-abd0-8968-efbff38d8f95',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|b5ee2650-d52c-abd0-8968-efbff38d8f95',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1597674690743
    },
    'e-205': {
      id: 'e-205',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-206'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|dd082b6b-6fe7-1902-099c-d6619b76f7c6',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|dd082b6b-6fe7-1902-099c-d6619b76f7c6',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1600178352268
    },
    'e-206': {
      id: 'e-206',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-205'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|dd082b6b-6fe7-1902-099c-d6619b76f7c6',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|dd082b6b-6fe7-1902-099c-d6619b76f7c6',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1600178352271
    },
    'e-213': {
      id: 'e-213',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-214'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|dbe5d96d-8d27-997a-3fcf-0fd418a6fe41',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|dbe5d96d-8d27-997a-3fcf-0fd418a6fe41',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1604069838209
    },
    'e-214': {
      id: 'e-214',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-213'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|dbe5d96d-8d27-997a-3fcf-0fd418a6fe41',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|dbe5d96d-8d27-997a-3fcf-0fd418a6fe41',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1604069838212
    },
    'e-231': {
      id: 'e-231',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-232'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|c089d82d-d40c-89ea-75b3-9dc995f2709b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|c089d82d-d40c-89ea-75b3-9dc995f2709b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1605910320995
    },
    'e-232': {
      id: 'e-232',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-231'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|c089d82d-d40c-89ea-75b3-9dc995f2709b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|c089d82d-d40c-89ea-75b3-9dc995f2709b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1605910320995
    },
    'e-259': {
      id: 'e-259',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-260'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|ca1aed99-50fe-838d-e351-2431e51934e4',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|ca1aed99-50fe-838d-e351-2431e51934e4',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606315620185
    },
    'e-260': {
      id: 'e-260',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-259'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|ca1aed99-50fe-838d-e351-2431e51934e4',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|ca1aed99-50fe-838d-e351-2431e51934e4',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606315620185
    },
    'e-261': {
      id: 'e-261',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-333'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|7c7c4c09-7776-70cf-199a-7d49493162ea',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|7c7c4c09-7776-70cf-199a-7d49493162ea',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606316091374
    },
    'e-262': {
      id: 'e-262',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-342'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|7c7c4c09-7776-70cf-199a-7d49493162ea',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|7c7c4c09-7776-70cf-199a-7d49493162ea',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606316091374
    },
    'e-265': {
      id: 'e-265',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-38',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-266'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a4f',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a4f',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607005743718
    },
    'e-267': {
      id: 'e-267',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-5', affectedElements: {}, duration: 0 }
      },
      mediaQueries: ['main', 'medium', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a55',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a55',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: [
        {
          continuousParameterGroupId: 'a-5-p',
          smoothing: 60,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50
        }
      ],
      createdOn: 1607005743718
    },
    'e-270': {
      id: 'e-270',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-15',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-271'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a5b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a5b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607005743718
    },
    'e-272': {
      id: 'e-272',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-16',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-366'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8b34',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8b34',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607005743718
    },
    'e-286': {
      id: 'e-286',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-35',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-287'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8af0',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8af0',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607005743718
    },
    'e-288': {
      id: 'e-288',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-35',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-289'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8af2',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8af2',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607005743718
    },
    'e-338': {
      id: 'e-338',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-43',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-454'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a9f',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a9f',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606248249924
    },
    'e-340': {
      id: 'e-340',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-15',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-460'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a5b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a5b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1580264998227
    },
    'e-344': {
      id: 'e-344',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-39',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-366'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8aba',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8aba',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606248446826
    },
    'e-346': {
      id: 'e-346',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-354'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a72',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a72',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606247864664
    },
    'e-347': {
      id: 'e-347',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-40', affectedElements: {}, duration: 0 }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: [
        {
          continuousParameterGroupId: 'a-40-p',
          smoothing: 75,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50
        }
      ],
      createdOn: 1606327712168
    },
    'e-352': {
      id: 'e-352',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-16',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-334'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8b34',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8b34',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1580265874317
    },
    'e-359': {
      id: 'e-359',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-39',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-363'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a5b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a5b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1605902146041
    },
    'e-363': {
      id: 'e-363',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-43',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-359'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a5b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a5b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1605902146037
    },
    'e-366': {
      id: 'e-366',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-43',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-461'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8aba',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8aba',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606248446826
    },
    'e-372': {
      id: 'e-372',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-39',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-338'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a9f',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a9f',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606248249924
    },
    'e-378': {
      id: 'e-378',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-367'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac0',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac0',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606328192170
    },
    'e-379': {
      id: 'e-379',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-37', affectedElements: {}, duration: 0 }
      },
      mediaQueries: ['main', 'medium', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a55',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a55',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: [
        {
          continuousParameterGroupId: 'a-37-p',
          smoothing: 60,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50
        }
      ],
      createdOn: 1576730637431
    },
    'e-384': {
      id: 'e-384',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-41',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-385'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a50',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a50',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607007826304
    },
    'e-395': {
      id: 'e-395',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-19',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-459'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|96605670-7140-362f-be7f-dc1450edc773',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|96605670-7140-362f-be7f-dc1450edc773',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1605902220545
    },
    'e-399': {
      id: 'e-399',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-33',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-456'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|96605670-7140-362f-be7f-dc1450edc773',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|96605670-7140-362f-be7f-dc1450edc773',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1605902220543
    },
    'e-400': {
      id: 'e-400',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-15',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-403'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|96605670-7140-362f-be7f-dc1450edc773',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|96605670-7140-362f-be7f-dc1450edc773',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1605825907996
    },
    'e-406': {
      id: 'e-406',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-15',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-407'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|dc9679a4-5018-67d3-b029-3bc02e93ab7b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|dc9679a4-5018-67d3-b029-3bc02e93ab7b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1605825916475
    },
    'e-408': {
      id: 'e-408',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-33',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-477'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|dc9679a4-5018-67d3-b029-3bc02e93ab7b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|dc9679a4-5018-67d3-b029-3bc02e93ab7b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1605902279365
    },
    'e-409': {
      id: 'e-409',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-19',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-408'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|dc9679a4-5018-67d3-b029-3bc02e93ab7b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|dc9679a4-5018-67d3-b029-3bc02e93ab7b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1605902279368
    },
    'e-412': {
      id: 'e-412',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-16',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-413'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|270ae2a3-0306-5c42-6074-6febb56b761d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|270ae2a3-0306-5c42-6074-6febb56b761d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606845401944
    },
    'e-414': {
      id: 'e-414',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-46',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-415'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d1007ecac53|96c658b2-c68b-daad-82d2-41e26e035692',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d1007ecac53|96c658b2-c68b-daad-82d2-41e26e035692',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1605890584055
    },
    'e-450': {
      id: 'e-450',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-46',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-451'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3abdecac4a|ebdbf3eb-10c2-f0a0-2697-3a7d55f4b22f',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3abdecac4a|ebdbf3eb-10c2-f0a0-2697-3a7d55f4b22f',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606341023854
    },
    'e-452': {
      id: 'e-452',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-455'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ee3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ee3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767704697
    },
    'e-453': {
      id: 'e-453',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-473'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785eb3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785eb3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767593186
    },
    'e-454': {
      id: 'e-454',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-458'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f8d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f8d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767857672
    },
    'e-455': {
      id: 'e-455',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-452'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ee3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ee3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767704697
    },
    'e-456': {
      id: 'e-456',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-457'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ea1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ea1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606849184304
    },
    'e-457': {
      id: 'e-457',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-456'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ea1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ea1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606849184308
    },
    'e-458': {
      id: 'e-458',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-454'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f8d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f8d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767857672
    },
    'e-459': {
      id: 'e-459',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-46',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-472'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e45',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e45',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606849600102
    },
    'e-461': {
      id: 'e-461',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-483'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ef8',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ef8',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767703801
    },
    'e-463': {
      id: 'e-463',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-475'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f5a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f5a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767858546
    },
    'e-464': {
      id: 'e-464',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-467'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e4c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e4c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606849337567
    },
    'e-465': {
      id: 'e-465',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-469'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f7b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f7b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767857995
    },
    'e-466': {
      id: 'e-466',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-482'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f69',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f69',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767858277
    },
    'e-467': {
      id: 'e-467',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-464'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e4c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e4c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606849337571
    },
    'e-468': {
      id: 'e-468',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-474'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f33',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f33',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767701555
    },
    'e-469': {
      id: 'e-469',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-465'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f7b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f7b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767857995
    },
    'e-470': {
      id: 'e-470',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-485'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f48',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f48',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767700022
    },
    'e-471': {
      id: 'e-471',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-476'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e66',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e66',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606849111743
    },
    'e-473': {
      id: 'e-473',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-453'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785eb3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785eb3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767593186
    },
    'e-474': {
      id: 'e-474',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-468'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f33',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f33',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767701555
    },
    'e-475': {
      id: 'e-475',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-463'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f5a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f5a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767858546
    },
    'e-476': {
      id: 'e-476',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-471'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e66',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e66',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606849111747
    },
    'e-477': {
      id: 'e-477',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-479'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e7d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e7d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606999715280
    },
    'e-478': {
      id: 'e-478',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-480'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ed1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ed1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767675826
    },
    'e-479': {
      id: 'e-479',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-477'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e7d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785e7d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606999715280
    },
    'e-480': {
      id: 'e-480',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-478'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ed1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ed1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767675826
    },
    'e-481': {
      id: 'e-481',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-484'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f0a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f0a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767703192
    },
    'e-482': {
      id: 'e-482',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-466'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f69',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f69',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767858277
    },
    'e-483': {
      id: 'e-483',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-461'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ef8',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785ef8',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767703801
    },
    'e-484': {
      id: 'e-484',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-481'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f0a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f0a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767703192
    },
    'e-485': {
      id: 'e-485',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-470'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f48',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|f0c6a5e1-14b3-98ac-f01a-149013785f48',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1606767700022
    },
    'e-486': {
      id: 'e-486',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-44',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-487'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '3f2dd13e-fb41-0eaa-3369-89e772920336',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '3f2dd13e-fb41-0eaa-3369-89e772920336',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607008831360
    },
    'e-487': {
      id: 'e-487',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-45',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-486'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '3f2dd13e-fb41-0eaa-3369-89e772920336',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '3f2dd13e-fb41-0eaa-3369-89e772920336',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607008831364
    },
    'e-488': {
      id: 'e-488',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-47',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-489'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|c5f8ab4a-8ced-82cf-1471-3d04ce333720',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|c5f8ab4a-8ced-82cf-1471-3d04ce333720',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607019551514
    },
    'e-489': {
      id: 'e-489',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-48',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-488'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dfe1eecac51|c5f8ab4a-8ced-82cf-1471-3d04ce333720',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dfe1eecac51|c5f8ab4a-8ced-82cf-1471-3d04ce333720',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607019551514
    },
    'e-490': {
      id: 'e-490',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-491'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|d43ab37b-56b8-b065-4a2c-43fde49df8b3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|d43ab37b-56b8-b065-4a2c-43fde49df8b3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607033639629
    },
    'e-491': {
      id: 'e-491',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-490'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|d43ab37b-56b8-b065-4a2c-43fde49df8b3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|d43ab37b-56b8-b065-4a2c-43fde49df8b3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607033639629
    },
    'e-492': {
      id: 'e-492',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-493'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a60',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a60',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607033990276
    },
    'e-494': {
      id: 'e-494',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-495'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a73',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a73',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607034774733
    },
    'e-496': {
      id: 'e-496',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-497'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a85',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a85',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607034799414
    },
    'e-498': {
      id: 'e-498',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-499'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8aa4',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8aa4',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607034812163
    },
    'e-500': {
      id: 'e-500',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-501'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8aa6',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8aa6',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607034826617
    },
    'e-506': {
      id: 'e-506',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-507'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8aef',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8aef',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035598144
    },
    'e-508': {
      id: 'e-508',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-509'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8af5',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8af5',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035607954
    },
    'e-510': {
      id: 'e-510',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-511'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|aafe27e5-67b9-1db3-3e5d-6f519f35438a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|aafe27e5-67b9-1db3-3e5d-6f519f35438a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035657632
    },
    'e-512': {
      id: 'e-512',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-513'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|9694c7cc-6d8c-2cd4-3ffd-2b87cc8a4098',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|9694c7cc-6d8c-2cd4-3ffd-2b87cc8a4098',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035669332
    },
    'e-514': {
      id: 'e-514',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-515'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|9694c7cc-6d8c-2cd4-3ffd-2b87cc8a40b7',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|9694c7cc-6d8c-2cd4-3ffd-2b87cc8a40b7',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035676818
    },
    'e-516': {
      id: 'e-516',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-517'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|b7a2ef75-2a41-0182-55d0-04efba83da41',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|b7a2ef75-2a41-0182-55d0-04efba83da41',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035687317
    },
    'e-518': {
      id: 'e-518',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-519'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|96605670-7140-362f-be7f-dc1450edc758',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|96605670-7140-362f-be7f-dc1450edc758',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035699662
    },
    'e-520': {
      id: 'e-520',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-521'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|96605670-7140-362f-be7f-dc1450edc779',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|96605670-7140-362f-be7f-dc1450edc779',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035706947
    },
    'e-522': {
      id: 'e-522',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-523'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|cd7c57ce-b537-e316-4f32-c1eafdf9e3b7',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|cd7c57ce-b537-e316-4f32-c1eafdf9e3b7',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035716566
    },
    'e-524': {
      id: 'e-524',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-525'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|dc9679a4-5018-67d3-b029-3bc02e93ab6a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|dc9679a4-5018-67d3-b029-3bc02e93ab6a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035726786
    },
    'e-526': {
      id: 'e-526',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-527'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d370eecace9|dc9679a4-5018-67d3-b029-3bc02e93ab81',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d370eecace9|dc9679a4-5018-67d3-b029-3bc02e93ab81',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035735398
    },
    'e-530': {
      id: 'e-530',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-531'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3abdecac4a|d9ce4ed1-4ecb-f849-bae9-081b786e6793',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3abdecac4a|d9ce4ed1-4ecb-f849-bae9-081b786e6793',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035817636
    },
    'e-532': {
      id: 'e-532',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-533'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3abdecac4a|dd66bba6-3445-2cde-91d2-53e1aa3ee49f',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3abdecac4a|dd66bba6-3445-2cde-91d2-53e1aa3ee49f',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035826477
    },
    'e-534': {
      id: 'e-534',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-535'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3abdecac4a|e70bd77d-0aa8-dbea-501b-eb83db39806a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3abdecac4a|e70bd77d-0aa8-dbea-501b-eb83db39806a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607035862853
    },
    'e-540': {
      id: 'e-540',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-541'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d031eecacd7|e0bd5305-8d9f-b797-cbae-d74d9d969ede',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d031eecacd7|e0bd5305-8d9f-b797-cbae-d74d9d969ede',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607101902408
    },
    'e-542': {
      id: 'e-542',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-543'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|1a479640-77a0-e06f-5987-33efc1f1c0c0',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|1a479640-77a0-e06f-5987-33efc1f1c0c0',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607629261777
    },
    'e-543': {
      id: 'e-543',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-542'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|1a479640-77a0-e06f-5987-33efc1f1c0c0',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|1a479640-77a0-e06f-5987-33efc1f1c0c0',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1607629261777
    },
    'e-544': {
      id: 'e-544',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-545'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|3a00f132-2c0b-967a-00b0-95d6101b2cfa',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|3a00f132-2c0b-967a-00b0-95d6101b2cfa',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1608569592475
    },
    'e-545': {
      id: 'e-545',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-544'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|3a00f132-2c0b-967a-00b0-95d6101b2cfa',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|3a00f132-2c0b-967a-00b0-95d6101b2cfa',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1608569592475
    },
    'e-546': {
      id: 'e-546',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-547'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d02adecac49|4cb20e9d-6d0d-c348-e639-26db27527a2d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d02adecac49|4cb20e9d-6d0d-c348-e639-26db27527a2d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1609258537637
    },
    'e-550': {
      id: 'e-550',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-35',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-551'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d02adecac49|4cb20e9d-6d0d-c348-e639-26db27527a30',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d02adecac49|4cb20e9d-6d0d-c348-e639-26db27527a30',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1609258537637
    },
    'e-552': {
      id: 'e-552',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-553'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d02adecac49|4cb20e9d-6d0d-c348-e639-26db27527a39',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d02adecac49|4cb20e9d-6d0d-c348-e639-26db27527a39',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1609258537637
    },
    'e-554': {
      id: 'e-554',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-555'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3abdecac4a|job-opening-w-id',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3abdecac4a|job-opening-w-id',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1610141499662
    },
    'e-556': {
      id: 'e-556',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-557'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|b88da534-5d0a-c438-d5aa-a4d58fee82d4',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|b88da534-5d0a-c438-d5aa-a4d58fee82d4',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1611778905180
    },
    'e-557': {
      id: 'e-557',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-556'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|b88da534-5d0a-c438-d5aa-a4d58fee82d4',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|b88da534-5d0a-c438-d5aa-a4d58fee82d4',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1611778905180
    },
    'e-558': {
      id: 'e-558',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-49',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-559'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d298fecac54|5e4e44bd-6cef-0e02-7374-07392a6b047c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d298fecac54|5e4e44bd-6cef-0e02-7374-07392a6b047c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1613475073837
    },
    'e-586': {
      id: 'e-586',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-46',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-587'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d819becaced|f0c6a5e1-14b3-98ac-f01a-149013785e45',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d819becaced|f0c6a5e1-14b3-98ac-f01a-149013785e45',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1613488603095
    },
    'e-590': {
      id: 'e-590',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-50',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-591'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3cf6ecac48|5e4e44bd-6cef-0e02-7374-07392a6b047c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3cf6ecac48|5e4e44bd-6cef-0e02-7374-07392a6b047c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1614602484363
    },
    'e-592': {
      id: 'e-592',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-593'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3abdecac4a|b0ee0340-61de-681f-b105-938ac1a1e9a9',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3abdecac4a|b0ee0340-61de-681f-b105-938ac1a1e9a9',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1614865591651
    },
    'e-594': {
      id: 'e-594',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-595'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|cdb9777e-e4f0-eb2d-b9f7-ee528b842587',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|cdb9777e-e4f0-eb2d-b9f7-ee528b842587',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1617197694568
    },
    'e-595': {
      id: 'e-595',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-594'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|cdb9777e-e4f0-eb2d-b9f7-ee528b842587',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|cdb9777e-e4f0-eb2d-b9f7-ee528b842587',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1617197694568
    },
    'e-596': {
      id: 'e-596',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-597'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|3995b8cb-d6b6-9afe-8efc-66c32d79a893',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|3995b8cb-d6b6-9afe-8efc-66c32d79a893',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620067799320
    },
    'e-597': {
      id: 'e-597',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-596'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|3995b8cb-d6b6-9afe-8efc-66c32d79a893',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|3995b8cb-d6b6-9afe-8efc-66c32d79a893',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620067799320
    },
    'e-598': {
      id: 'e-598',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-599'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|155d154d-1511-7a7a-6401-c2ec4ac62b54',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|155d154d-1511-7a7a-6401-c2ec4ac62b54',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-599': {
      id: 'e-599',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-598'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|155d154d-1511-7a7a-6401-c2ec4ac62b54',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|155d154d-1511-7a7a-6401-c2ec4ac62b54',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-600': {
      id: 'e-600',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-601'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|bf004ebc-ad2a-ce60-c092-5bd54353b1ef',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|bf004ebc-ad2a-ce60-c092-5bd54353b1ef',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-601': {
      id: 'e-601',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-600'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|bf004ebc-ad2a-ce60-c092-5bd54353b1ef',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|bf004ebc-ad2a-ce60-c092-5bd54353b1ef',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-602': {
      id: 'e-602',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-603'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|953f0645-414f-83b3-b2a0-fd6dd0fc7568',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|953f0645-414f-83b3-b2a0-fd6dd0fc7568',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-603': {
      id: 'e-603',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-602'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|953f0645-414f-83b3-b2a0-fd6dd0fc7568',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|953f0645-414f-83b3-b2a0-fd6dd0fc7568',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-604': {
      id: 'e-604',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-605'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|ccf1d113-a222-2546-2b53-fd1d4249d809',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|ccf1d113-a222-2546-2b53-fd1d4249d809',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-605': {
      id: 'e-605',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-604'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|ccf1d113-a222-2546-2b53-fd1d4249d809',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|ccf1d113-a222-2546-2b53-fd1d4249d809',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-606': {
      id: 'e-606',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-607'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|b5ee2650-d52c-abd0-8968-efbff38d8f95',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|b5ee2650-d52c-abd0-8968-efbff38d8f95',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-607': {
      id: 'e-607',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-606'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|b5ee2650-d52c-abd0-8968-efbff38d8f95',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|b5ee2650-d52c-abd0-8968-efbff38d8f95',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-608': {
      id: 'e-608',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-609'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|dd082b6b-6fe7-1902-099c-d6619b76f7c6',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|dd082b6b-6fe7-1902-099c-d6619b76f7c6',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-609': {
      id: 'e-609',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-608'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|dd082b6b-6fe7-1902-099c-d6619b76f7c6',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|dd082b6b-6fe7-1902-099c-d6619b76f7c6',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-610': {
      id: 'e-610',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-611'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|dbe5d96d-8d27-997a-3fcf-0fd418a6fe41',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|dbe5d96d-8d27-997a-3fcf-0fd418a6fe41',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-611': {
      id: 'e-611',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-610'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|dbe5d96d-8d27-997a-3fcf-0fd418a6fe41',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|dbe5d96d-8d27-997a-3fcf-0fd418a6fe41',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-612': {
      id: 'e-612',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-613'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|c089d82d-d40c-89ea-75b3-9dc995f2709b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|c089d82d-d40c-89ea-75b3-9dc995f2709b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-613': {
      id: 'e-613',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-612'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|c089d82d-d40c-89ea-75b3-9dc995f2709b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|c089d82d-d40c-89ea-75b3-9dc995f2709b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-614': {
      id: 'e-614',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-615'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|ca1aed99-50fe-838d-e351-2431e51934e4',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|ca1aed99-50fe-838d-e351-2431e51934e4',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-615': {
      id: 'e-615',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-614'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|ca1aed99-50fe-838d-e351-2431e51934e4',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|ca1aed99-50fe-838d-e351-2431e51934e4',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-616': {
      id: 'e-616',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-617'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|7c7c4c09-7776-70cf-199a-7d49493162ea',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|7c7c4c09-7776-70cf-199a-7d49493162ea',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-617': {
      id: 'e-617',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-616'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|7c7c4c09-7776-70cf-199a-7d49493162ea',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|7c7c4c09-7776-70cf-199a-7d49493162ea',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-618': {
      id: 'e-618',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-619'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|d43ab37b-56b8-b065-4a2c-43fde49df8b3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|d43ab37b-56b8-b065-4a2c-43fde49df8b3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-619': {
      id: 'e-619',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-618'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|d43ab37b-56b8-b065-4a2c-43fde49df8b3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|d43ab37b-56b8-b065-4a2c-43fde49df8b3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-620': {
      id: 'e-620',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-621'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|1a479640-77a0-e06f-5987-33efc1f1c0c0',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|1a479640-77a0-e06f-5987-33efc1f1c0c0',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-621': {
      id: 'e-621',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-620'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|1a479640-77a0-e06f-5987-33efc1f1c0c0',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|1a479640-77a0-e06f-5987-33efc1f1c0c0',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-622': {
      id: 'e-622',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-623'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|3a00f132-2c0b-967a-00b0-95d6101b2cfa',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|3a00f132-2c0b-967a-00b0-95d6101b2cfa',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-623': {
      id: 'e-623',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-622'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|3a00f132-2c0b-967a-00b0-95d6101b2cfa',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|3a00f132-2c0b-967a-00b0-95d6101b2cfa',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-624': {
      id: 'e-624',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-625'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|b88da534-5d0a-c438-d5aa-a4d58fee82d4',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|b88da534-5d0a-c438-d5aa-a4d58fee82d4',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-625': {
      id: 'e-625',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-624'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|b88da534-5d0a-c438-d5aa-a4d58fee82d4',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|b88da534-5d0a-c438-d5aa-a4d58fee82d4',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-626': {
      id: 'e-626',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-25',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-627'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|7805b890-a51b-639f-6368-3f87298d9bee',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|7805b890-a51b-639f-6368-3f87298d9bee',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-627': {
      id: 'e-627',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-24',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-626'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|7805b890-a51b-639f-6368-3f87298d9bee',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|7805b890-a51b-639f-6368-3f87298d9bee',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-628': {
      id: 'e-628',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-629'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|cdb9777e-e4f0-eb2d-b9f7-ee528b842587',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|cdb9777e-e4f0-eb2d-b9f7-ee528b842587',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-629': {
      id: 'e-629',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-628'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|cdb9777e-e4f0-eb2d-b9f7-ee528b842587',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|cdb9777e-e4f0-eb2d-b9f7-ee528b842587',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-630': {
      id: 'e-630',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-631'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|3995b8cb-d6b6-9afe-8efc-66c32d79a893',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|3995b8cb-d6b6-9afe-8efc-66c32d79a893',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-631': {
      id: 'e-631',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-630'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|3995b8cb-d6b6-9afe-8efc-66c32d79a893',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|3995b8cb-d6b6-9afe-8efc-66c32d79a893',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620327585640
    },
    'e-632': {
      id: 'e-632',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-633'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|638b2667-53a9-2993-9eae-74bdfedfc6d8',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|638b2667-53a9-2993-9eae-74bdfedfc6d8',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620515715090
    },
    'e-633': {
      id: 'e-633',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-632'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|638b2667-53a9-2993-9eae-74bdfedfc6d8',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|638b2667-53a9-2993-9eae-74bdfedfc6d8',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1620515715090
    },
    'e-634': {
      id: 'e-634',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-635'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|7230f644-1cde-d592-4a28-ded12e169ce1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|7230f644-1cde-d592-4a28-ded12e169ce1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1622037852000
    },
    'e-635': {
      id: 'e-635',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-634'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|7230f644-1cde-d592-4a28-ded12e169ce1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|7230f644-1cde-d592-4a28-ded12e169ce1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1622037852000
    },
    'e-636': {
      id: 'e-636',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-637'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|edbda372-3c18-0459-1cc4-636141f3663c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|edbda372-3c18-0459-1cc4-636141f3663c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1622735598147
    },
    'e-637': {
      id: 'e-637',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-636'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|edbda372-3c18-0459-1cc4-636141f3663c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|edbda372-3c18-0459-1cc4-636141f3663c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1622735598147
    },
    'e-638': {
      id: 'e-638',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-639'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|a86b8224-3212-702e-76d4-b55cd24b4bff',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|a86b8224-3212-702e-76d4-b55cd24b4bff',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1623405381315
    },
    'e-639': {
      id: 'e-639',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-638'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|a86b8224-3212-702e-76d4-b55cd24b4bff',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|a86b8224-3212-702e-76d4-b55cd24b4bff',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1623405381315
    },
    'e-642': {
      id: 'e-642',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-25',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-643'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|40a52a22-5540-6b18-d9f7-1b3843dd6e8b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|40a52a22-5540-6b18-d9f7-1b3843dd6e8b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1624914498954
    },
    'e-643': {
      id: 'e-643',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-24',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-642'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079dbbe7ecacef|40a52a22-5540-6b18-d9f7-1b3843dd6e8b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079dbbe7ecacef|40a52a22-5540-6b18-d9f7-1b3843dd6e8b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1624914498954
    },
    'e-646': {
      id: 'e-646',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-8',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-647'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|acd6ba24-5075-6468-70b2-03bf55499717',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|acd6ba24-5075-6468-70b2-03bf55499717',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625691624375
    },
    'e-648': {
      id: 'e-648',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-8',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-649'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|64df2638-d143-68ea-f373-d939654fc9ab',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|64df2638-d143-68ea-f373-d939654fc9ab',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625691624375
    },
    'e-655': {
      id: 'e-655',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-16',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-656'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|acd6dc5e-649e-16c8-fa12-fb89af3d8b34',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|acd6dc5e-649e-16c8-fa12-fb89af3d8b34',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625691624375
    },
    'e-667': {
      id: 'e-667',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-16',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-668'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|acd6dc5e-649e-16c8-fa12-fb89af3d8b34',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|acd6dc5e-649e-16c8-fa12-fb89af3d8b34',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625691624375
    },
    'e-675': {
      id: 'e-675',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-43',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-676'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'f9c3f4aa-fe18-76dc-f5ac-82373ce3aed3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: 'f9c3f4aa-fe18-76dc-f5ac-82373ce3aed3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625691624375
    },
    'e-676': {
      id: 'e-676',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-39',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-675'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'f9c3f4aa-fe18-76dc-f5ac-82373ce3aed3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: 'f9c3f4aa-fe18-76dc-f5ac-82373ce3aed3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625691624375
    },
    'e-717': {
      id: 'e-717',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-718'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '3aa6366b-62bb-88db-c95c-b5cae9c7dd4e',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '3aa6366b-62bb-88db-c95c-b5cae9c7dd4e',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625775729473
    },
    'e-719': {
      id: 'e-719',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-18',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-720'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '59072013-fcf9-1b7a-898e-025595d6bbc4',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '59072013-fcf9-1b7a-898e-025595d6bbc4',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 46,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625775752777
    },
    'e-723': {
      id: 'e-723',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-18',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-724'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '5736f8c7-809e-4191-9652-4e917149b0ac',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '5736f8c7-809e-4191-9652-4e917149b0ac',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625779873918
    },
    'e-725': {
      id: 'e-725',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-726'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '5736f8c7-809e-4191-9652-4e917149b0a7',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '5736f8c7-809e-4191-9652-4e917149b0a7',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625779917683
    },
    'e-727': {
      id: 'e-727',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-728'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '49160518-f038-5da4-7a54-bccb6fb8b856',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '49160518-f038-5da4-7a54-bccb6fb8b856',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625783368947
    },
    'e-729': {
      id: 'e-729',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-730'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '49160518-f038-5da4-7a54-bccb6fb8b861',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '49160518-f038-5da4-7a54-bccb6fb8b861',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625783393991
    },
    'e-731': {
      id: 'e-731',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-732'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '49160518-f038-5da4-7a54-bccb6fb8b86c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '49160518-f038-5da4-7a54-bccb6fb8b86c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625783414305
    },
    'e-733': {
      id: 'e-733',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-55',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-734'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|30cf68c0-8709-4aa5-4751-61ddfeeb3e49',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|30cf68c0-8709-4aa5-4751-61ddfeeb3e49',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625783812484
    },
    'e-741': {
      id: 'e-741',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-59',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-742'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|7a957a72-b0c8-41cb-57ea-519d322db418',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|7a957a72-b0c8-41cb-57ea-519d322db418',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625783821547
    },
    'e-745': {
      id: 'e-745',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-18',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-746'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|30cf68c0-8709-4aa5-4751-61ddfeeb3e4e',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|30cf68c0-8709-4aa5-4751-61ddfeeb3e4e',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625837808128
    },
    'e-749': {
      id: 'e-749',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-18',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-750'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|7a957a72-b0c8-41cb-57ea-519d322db41d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|7a957a72-b0c8-41cb-57ea-519d322db41d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625837876028
    },
    'e-759': {
      id: 'e-759',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-16',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-760'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|270ae2a3-0306-5c42-6074-6febb56b761d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|270ae2a3-0306-5c42-6074-6febb56b761d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625842322077
    },
    'e-761': {
      id: 'e-761',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-762'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3abdecac4a|7df3ffd9-560b-85fa-6d7f-bcb69932d6fb',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3abdecac4a|7df3ffd9-560b-85fa-6d7f-bcb69932d6fb',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1625850835557
    },
    'e-763': {
      id: 'e-763',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-764'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '8ec64593-65b6-0aa6-04a2-9f16c8377aaf',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '8ec64593-65b6-0aa6-04a2-9f16c8377aaf',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626096009772
    },
    'e-765': {
      id: 'e-765',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-43',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-766'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '8ec64593-65b6-0aa6-04a2-9f16c8377aaf',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '8ec64593-65b6-0aa6-04a2-9f16c8377aaf',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626096597080
    },
    'e-766': {
      id: 'e-766',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-39',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-765'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '8ec64593-65b6-0aa6-04a2-9f16c8377aaf',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '8ec64593-65b6-0aa6-04a2-9f16c8377aaf',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626096597090
    },
    'e-767': {
      id: 'e-767',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-46',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-768'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d1007ecac53|0770c84f-31f4-392c-2af8-4df25010f896',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d1007ecac53|0770c84f-31f4-392c-2af8-4df25010f896',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626099941267
    },
    'e-769': {
      id: 'e-769',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-46',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-770'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d1007ecac53|d6af5b1f-f358-0b54-c3bd-dbe190115f1e',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d1007ecac53|d6af5b1f-f358-0b54-c3bd-dbe190115f1e',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626105656279
    },
    'e-771': {
      id: 'e-771',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-46',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-772'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d1007ecac53|375a3e63-f965-9c1c-9145-773e5c499d61',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d1007ecac53|375a3e63-f965-9c1c-9145-773e5c499d61',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626105897371
    },
    'e-773': {
      id: 'e-773',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-46',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-774'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d1007ecac53|f6cc758c-cc22-5815-430b-21a36a03f22d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d1007ecac53|f6cc758c-cc22-5815-430b-21a36a03f22d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626106074515
    },
    'e-775': {
      id: 'e-775',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-63',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-776'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|04f4519a-5321-3733-be87-1957f8c9f977',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|04f4519a-5321-3733-be87-1957f8c9f977',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626122887224
    },
    'e-777': {
      id: 'e-777',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-63',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-778'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|04f4519a-5321-3733-be87-1957f8c9f979',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|04f4519a-5321-3733-be87-1957f8c9f979',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626122887224
    },
    'e-779': {
      id: 'e-779',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-63',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-780'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|04f4519a-5321-3733-be87-1957f8c9f97b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|04f4519a-5321-3733-be87-1957f8c9f97b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626122887224
    },
    'e-781': {
      id: 'e-781',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-782'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|fadc2db0-192b-62b4-6de7-49861103ce13',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|fadc2db0-192b-62b4-6de7-49861103ce13',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626122904863
    },
    'e-783': {
      id: 'e-783',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-58',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-784'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|fadc2db0-192b-62b4-6de7-49861103ce18',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|fadc2db0-192b-62b4-6de7-49861103ce18',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626126943750
    },
    'e-803': {
      id: 'e-803',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-804'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|ccdd5ef0-7748-84ae-a78e-f919bffec186',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|ccdd5ef0-7748-84ae-a78e-f919bffec186',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626268231217
    },
    'e-805': {
      id: 'e-805',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-806'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3abdecac4a|1fe6246b-d997-2efd-5b0d-804dd4528b6f',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3abdecac4a|1fe6246b-d997-2efd-5b0d-804dd4528b6f',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626268715735
    },
    'e-811': {
      id: 'e-811',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-812'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|4f7fa2fc-d8fe-7eac-a7cb-55acec102b49',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|4f7fa2fc-d8fe-7eac-a7cb-55acec102b49',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626268926434
    },
    'e-831': {
      id: 'e-831',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-832' }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|ba47b839-8b8c-48fc-5b03-c8f14af43bef',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|ba47b839-8b8c-48fc-5b03-c8f14af43bef',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true
      },
      createdOn: 1626289669329
    },
    'e-832': {
      id: 'e-832',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_OUT_OF_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeOut', autoStopEventId: 'e-831' }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|ba47b839-8b8c-48fc-5b03-c8f14af43bef',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|ba47b839-8b8c-48fc-5b03-c8f14af43bef',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: false
      },
      createdOn: 1626289669329
    },
    'e-833': {
      id: 'e-833',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-834'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|aa184230-5201-a30d-da70-b4273af9ffac',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|aa184230-5201-a30d-da70-b4273af9ffac',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626289940188
    },
    'e-839': {
      id: 'e-839',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-840'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|de0a596d-5063-58a1-8051-c560cce660e1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|de0a596d-5063-58a1-8051-c560cce660e1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626289962245
    },
    'e-845': {
      id: 'e-845',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-846'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|0a1c675a-2115-b340-7df9-0de32d6bc961',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|0a1c675a-2115-b340-7df9-0de32d6bc961',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1626289968255
    },
    'e-851': {
      id: 'e-851',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-68',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-852'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|753fc779-b7d2-132d-2368-25de7f90c069',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|753fc779-b7d2-132d-2368-25de7f90c069',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627661997331
    },
    'e-852': {
      id: 'e-852',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-69',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-851'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|753fc779-b7d2-132d-2368-25de7f90c069',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|753fc779-b7d2-132d-2368-25de7f90c069',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627661997342
    },
    'e-853': {
      id: 'e-853',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-16',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-854'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|270ae2a3-0306-5c42-6074-6febb56b761d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|270ae2a3-0306-5c42-6074-6febb56b761d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627674198323
    },
    'e-855': {
      id: 'e-855',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-62',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-856'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|0d804a70-81d2-7140-ecdc-13ce55560766',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|0d804a70-81d2-7140-ecdc-13ce55560766',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627674198323
    },
    'e-857': {
      id: 'e-857',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-858'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|4f7fa2fc-d8fe-7eac-a7cb-55acec102b49',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|4f7fa2fc-d8fe-7eac-a7cb-55acec102b49',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627674198323
    },
    'e-863': {
      id: 'e-863',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-864'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|aa184230-5201-a30d-da70-b4273af9ffac',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|aa184230-5201-a30d-da70-b4273af9ffac',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627674198323
    },
    'e-869': {
      id: 'e-869',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-870'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|de0a596d-5063-58a1-8051-c560cce660e1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|de0a596d-5063-58a1-8051-c560cce660e1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627674198323
    },
    'e-875': {
      id: 'e-875',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-876'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|0a1c675a-2115-b340-7df9-0de32d6bc961',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|0a1c675a-2115-b340-7df9-0de32d6bc961',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627674198323
    },
    'e-877': {
      id: 'e-877',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-70',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-878'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|4f7fa2fc-d8fe-7eac-a7cb-55acec102b49',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|4f7fa2fc-d8fe-7eac-a7cb-55acec102b49',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627675217846
    },
    'e-878': {
      id: 'e-878',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_OUT_OF_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-71',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-877'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|4f7fa2fc-d8fe-7eac-a7cb-55acec102b49',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|4f7fa2fc-d8fe-7eac-a7cb-55acec102b49',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627675217851
    },
    'e-879': {
      id: 'e-879',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-72',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-880'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|aa184230-5201-a30d-da70-b4273af9ffac',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|aa184230-5201-a30d-da70-b4273af9ffac',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627675516123
    },
    'e-880': {
      id: 'e-880',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_OUT_OF_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-73',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-879'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|aa184230-5201-a30d-da70-b4273af9ffac',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|aa184230-5201-a30d-da70-b4273af9ffac',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627675516134
    },
    'e-881': {
      id: 'e-881',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-74',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-882'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|de0a596d-5063-58a1-8051-c560cce660e1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|de0a596d-5063-58a1-8051-c560cce660e1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627675712006
    },
    'e-882': {
      id: 'e-882',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_OUT_OF_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-75',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-881'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|de0a596d-5063-58a1-8051-c560cce660e1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|de0a596d-5063-58a1-8051-c560cce660e1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627675712011
    },
    'e-883': {
      id: 'e-883',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-76',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-884'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|0a1c675a-2115-b340-7df9-0de32d6bc961',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|0a1c675a-2115-b340-7df9-0de32d6bc961',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 50,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627675764090
    },
    'e-884': {
      id: 'e-884',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_OUT_OF_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-77',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-883'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6669ecaceb|0a1c675a-2115-b340-7df9-0de32d6bc961',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6669ecaceb|0a1c675a-2115-b340-7df9-0de32d6bc961',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627675764101
    },
    'e-885': {
      id: 'e-885',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-886' }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|1d871086-b0f5-5fdf-f3ae-20473bf221c1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|1d871086-b0f5-5fdf-f3ae-20473bf221c1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true
      },
      createdOn: 1627915842305
    },
    'e-886': {
      id: 'e-886',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_OUT_OF_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeOut', autoStopEventId: 'e-885' }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|1d871086-b0f5-5fdf-f3ae-20473bf221c1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|1d871086-b0f5-5fdf-f3ae-20473bf221c1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: false
      },
      createdOn: 1627915842305
    },
    'e-887': {
      id: 'e-887',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-888' }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|b5ab3209-01e2-4d21-a735-2cde9e02fe78',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|b5ab3209-01e2-4d21-a735-2cde9e02fe78',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true
      },
      createdOn: 1627915864124
    },
    'e-888': {
      id: 'e-888',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_OUT_OF_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeOut', autoStopEventId: 'e-887' }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|b5ab3209-01e2-4d21-a735-2cde9e02fe78',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|b5ab3209-01e2-4d21-a735-2cde9e02fe78',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: false
      },
      createdOn: 1627915864124
    },
    'e-889': {
      id: 'e-889',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-890' }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|fceea896-79b8-e5e4-e5b9-02c806962aa6',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|fceea896-79b8-e5e4-e5b9-02c806962aa6',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true
      },
      createdOn: 1627915870086
    },
    'e-890': {
      id: 'e-890',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_OUT_OF_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeOut', autoStopEventId: 'e-889' }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|fceea896-79b8-e5e4-e5b9-02c806962aa6',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|fceea896-79b8-e5e4-e5b9-02c806962aa6',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: false
      },
      createdOn: 1627915870086
    },
    'e-891': {
      id: 'e-891',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-892'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '98e16ea8-c566-3b75-3e96-49073a4a2164',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '98e16ea8-c566-3b75-3e96-49073a4a2164',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627934132564
    },
    'e-893': {
      id: 'e-893',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-35',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-894'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '98e16ea8-c566-3b75-3e96-49073a4a2165',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '98e16ea8-c566-3b75-3e96-49073a4a2165',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627934132564
    },
    'e-895': {
      id: 'e-895',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-35',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-896'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '98e16ea8-c566-3b75-3e96-49073a4a2167',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '98e16ea8-c566-3b75-3e96-49073a4a2167',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627934132564
    },
    'e-897': {
      id: 'e-897',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-898'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '98e16ea8-c566-3b75-3e96-49073a4a2170',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '98e16ea8-c566-3b75-3e96-49073a4a2170',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1627934132564
    },
    'e-899': {
      id: 'e-899',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-78',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-900'
        }
      },
      mediaQueries: ['main'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|4ee94def-b482-a10a-da9d-1141dfc1f9af',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|4ee94def-b482-a10a-da9d-1141dfc1f9af',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1628026022750
    },
    'e-900': {
      id: 'e-900',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-79',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-899'
        }
      },
      mediaQueries: ['main'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|4ee94def-b482-a10a-da9d-1141dfc1f9af',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|4ee94def-b482-a10a-da9d-1141dfc1f9af',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1628026022755
    },
    'e-901': {
      id: 'e-901',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-80',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-902'
        }
      },
      mediaQueries: ['main'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|4ee94def-b482-a10a-da9d-1141dfc1f9ad',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|4ee94def-b482-a10a-da9d-1141dfc1f9ad',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1628026495115
    },
    'e-902': {
      id: 'e-902',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-81',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-901'
        }
      },
      mediaQueries: ['main'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|4ee94def-b482-a10a-da9d-1141dfc1f9ad',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|4ee94def-b482-a10a-da9d-1141dfc1f9ad',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1628026495120
    },
    'e-903': {
      id: 'e-903',
      name: '',
      animationType: 'custom',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-45',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-904'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '3f2dd13e-fb41-0eaa-3369-89e772920346',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '3f2dd13e-fb41-0eaa-3369-89e772920346',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1628090460047
    },
    'e-905': {
      id: 'e-905',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-82',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-906'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d6dbcecac4e|5e4e44bd-6cef-0e02-7374-07392a6b047c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d6dbcecac4e|5e4e44bd-6cef-0e02-7374-07392a6b047c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1628191817462
    },
    'e-907': {
      id: 'e-907',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-908'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3abdecac4a|46431774-b33f-db7b-a831-a54cce250e4a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3abdecac4a|46431774-b33f-db7b-a831-a54cce250e4a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1628277829971
    },
    'e-909': {
      id: 'e-909',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-910'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|25b7f892-60bc-b445-74e5-5dc1c9fb78a2',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|25b7f892-60bc-b445-74e5-5dc1c9fb78a2',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1632327783085
    },
    'e-910': {
      id: 'e-910',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-909'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|25b7f892-60bc-b445-74e5-5dc1c9fb78a2',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|25b7f892-60bc-b445-74e5-5dc1c9fb78a2',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1632327783085
    },
    'e-911': {
      id: 'e-911',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-912'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3abdecac4a|27f19da5-9930-67e9-75f5-dfa979a2c0fc',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3abdecac4a|27f19da5-9930-67e9-75f5-dfa979a2c0fc',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1633442067986
    },
    'e-913': {
      id: 'e-913',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-914'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|788695ee-a6e1-1326-6971-6ffee73061e8',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|788695ee-a6e1-1326-6971-6ffee73061e8',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1634304197143
    },
    'e-914': {
      id: 'e-914',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-913'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|788695ee-a6e1-1326-6971-6ffee73061e8',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|788695ee-a6e1-1326-6971-6ffee73061e8',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1634304197143
    },
    'e-917': {
      id: 'e-917',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-918'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|0c42bbbf-00e8-96ff-fa55-a962965b6c26',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|0c42bbbf-00e8-96ff-fa55-a962965b6c26',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1635794254247
    },
    'e-918': {
      id: 'e-918',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-917'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|0c42bbbf-00e8-96ff-fa55-a962965b6c26',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|0c42bbbf-00e8-96ff-fa55-a962965b6c26',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1635794254247
    },
    'e-919': {
      id: 'e-919',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-920'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|d74cc8ab-bd75-1183-5814-4f12da46a883',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|d74cc8ab-bd75-1183-5814-4f12da46a883',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1635884938540
    },
    'e-920': {
      id: 'e-920',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-919'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|d74cc8ab-bd75-1183-5814-4f12da46a883',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|d74cc8ab-bd75-1183-5814-4f12da46a883',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1635884938540
    },
    'e-921': {
      id: 'e-921',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-83',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-922'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|c19d771e-2c11-c6d9-3cba-4dc856e5805a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|c19d771e-2c11-c6d9-3cba-4dc856e5805a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1636553139614
    },
    'e-923': {
      id: 'e-923',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-43',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-924'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|c19d771e-2c11-c6d9-3cba-4dc856e5805a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|c19d771e-2c11-c6d9-3cba-4dc856e5805a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1636553139614
    },
    'e-924': {
      id: 'e-924',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-39',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-923'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|c19d771e-2c11-c6d9-3cba-4dc856e5805a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|c19d771e-2c11-c6d9-3cba-4dc856e5805a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1636553139614
    },
    'e-925': {
      id: 'e-925',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-84',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-926'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|eb2d59c6-9583-1cef-3083-d87a5e0644ac',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|eb2d59c6-9583-1cef-3083-d87a5e0644ac',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1636553979402
    },
    'e-927': {
      id: 'e-927',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-16',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-928'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|eb2d59c6-9583-1cef-3083-d87a5e0644ac',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|eb2d59c6-9583-1cef-3083-d87a5e0644ac',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1636553979402
    },
    'e-929': {
      id: 'e-929',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-930'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|b477483e-05d2-5ab7-5068-26ab06c71c0c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|b477483e-05d2-5ab7-5068-26ab06c71c0c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1638987414296
    },
    'e-930': {
      id: 'e-930',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-929'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|b477483e-05d2-5ab7-5068-26ab06c71c0c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|b477483e-05d2-5ab7-5068-26ab06c71c0c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1638987414296
    },
    'e-931': {
      id: 'e-931',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-25',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-932'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|ae48586d-7693-4f1f-8db2-bbfd834b4c8c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|ae48586d-7693-4f1f-8db2-bbfd834b4c8c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1642532680105
    },
    'e-932': {
      id: 'e-932',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-24',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-931'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|ae48586d-7693-4f1f-8db2-bbfd834b4c8c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|ae48586d-7693-4f1f-8db2-bbfd834b4c8c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1642532680105
    },
    'e-933': {
      id: 'e-933',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-42',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-934'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d3abdecac4a|242e8fac-7e1a-7a8d-5ff0-2b18afaf0d5a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d3abdecac4a|242e8fac-7e1a-7a8d-5ff0-2b18afaf0d5a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1645187204164
    },
    'e-935': {
      id: 'e-935',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-936'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|93f47564-6e64-df10-150a-3851875f66c3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|93f47564-6e64-df10-150a-3851875f66c3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1645719462334
    },
    'e-936': {
      id: 'e-936',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-935'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|93f47564-6e64-df10-150a-3851875f66c3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|93f47564-6e64-df10-150a-3851875f66c3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1645719462334
    },
    'e-937': {
      id: 'e-937',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-22',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-938'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|ac515e23-2b58-114f-9f3f-1c009a30e281',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|ac515e23-2b58-114f-9f3f-1c009a30e281',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1646327713523
    },
    'e-938': {
      id: 'e-938',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_SECOND_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-23',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-937'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8cddecacee|ac515e23-2b58-114f-9f3f-1c009a30e281',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8cddecacee|ac515e23-2b58-114f-9f3f-1c009a30e281',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1646327713523
    },
    'e-939': {
      id: 'e-939',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-15',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-940'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|d1f98d99-4800-51c8-435e-813646002134',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|d1f98d99-4800-51c8-435e-813646002134',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1646836732201
    },
    'e-941': {
      id: 'e-941',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-43',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-942'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|d1f98d99-4800-51c8-435e-813646002134',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|d1f98d99-4800-51c8-435e-813646002134',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1646836732201
    },
    'e-942': {
      id: 'e-942',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-39',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-941'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|d1f98d99-4800-51c8-435e-813646002134',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|d1f98d99-4800-51c8-435e-813646002134',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1646836732201
    },
    'e-951': {
      id: 'e-951',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-58',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-952'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|8f1c7dde-5d8a-d3b2-ac88-92264f99c55b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|8f1c7dde-5d8a-d3b2-ac88-92264f99c55b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1646839366316
    },
    'e-953': {
      id: 'e-953',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-954'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|8f1c7dde-5d8a-d3b2-ac88-92264f99c55d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|8f1c7dde-5d8a-d3b2-ac88-92264f99c55d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1646839366316
    },
    'e-963': {
      id: 'e-963',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_CLICK',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-83',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-964'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|9e069d70-b187-0515-d89e-e92fa1c4e9ad',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|9e069d70-b187-0515-d89e-e92fa1c4e9ad',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1646840423858
    },
    'e-965': {
      id: 'e-965',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-43',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-966'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|9e069d70-b187-0515-d89e-e92fa1c4e9ad',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|9e069d70-b187-0515-d89e-e92fa1c4e9ad',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1646840423858
    },
    'e-966': {
      id: 'e-966',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-39',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-965'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|9e069d70-b187-0515-d89e-e92fa1c4e9ad',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|9e069d70-b187-0515-d89e-e92fa1c4e9ad',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1646840423858
    },
    'e-982': {
      id: 'e-982',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-983'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '622f5833c267059a170b5c63|a39ac2b8-0dbc-0798-6be7-b9fefe1dbe29',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|a39ac2b8-0dbc-0798-6be7-b9fefe1dbe29',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647272705424
    },
    'e-984': {
      id: 'e-984',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-985'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '622f5833c267059a170b5c63|a39ac2b8-0dbc-0798-6be7-b9fefe1dbe2b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|a39ac2b8-0dbc-0798-6be7-b9fefe1dbe2b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647272705424
    },
    'e-986': {
      id: 'e-986',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-987'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '622f5833c267059a170b5c63|a39ac2b8-0dbc-0798-6be7-b9fefe1dbe2d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|a39ac2b8-0dbc-0798-6be7-b9fefe1dbe2d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647272705424
    },
    'e-988': {
      id: 'e-988',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-989'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '622f5833c267059a170b5c63|6c867609-3af1-a300-ea5a-0d62e8679ef4',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|6c867609-3af1-a300-ea5a-0d62e8679ef4',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647274168962
    },
    'e-990': {
      id: 'e-990',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-991'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '622f5833c267059a170b5c63|6c867609-3af1-a300-ea5a-0d62e8679ef6',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|6c867609-3af1-a300-ea5a-0d62e8679ef6',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647274168962
    },
    'e-992': {
      id: 'e-992',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-993'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '622f5833c267059a170b5c63|6c867609-3af1-a300-ea5a-0d62e8679ef8',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|6c867609-3af1-a300-ea5a-0d62e8679ef8',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647274168962
    },
    'e-994': {
      id: 'e-994',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-92',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-995'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '37b6e70b-7f9d-b140-133f-6f5c65da92d3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '37b6e70b-7f9d-b140-133f-6f5c65da92d3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647274446995
    },
    'e-995': {
      id: 'e-995',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-93',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-994'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '37b6e70b-7f9d-b140-133f-6f5c65da92d3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '37b6e70b-7f9d-b140-133f-6f5c65da92d3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647274446995
    },
    'e-996': {
      id: 'e-996',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-997'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '622f5833c267059a170b5c63|6483b442-bf96-e591-98fb-583f48ad9c7a',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|6483b442-bf96-e591-98fb-583f48ad9c7a',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647274967506
    },
    'e-998': {
      id: 'e-998',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-999'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '622f5833c267059a170b5c63|6483b442-bf96-e591-98fb-583f48ad9c7c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|6483b442-bf96-e591-98fb-583f48ad9c7c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647274967506
    },
    'e-1000': {
      id: 'e-1000',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1001'
        }
      },
      mediaQueries: ['main', 'medium'],
      target: {
        id: '622f5833c267059a170b5c63|6483b442-bf96-e591-98fb-583f48ad9c7e',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|6483b442-bf96-e591-98fb-583f48ad9c7e',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647274967506
    },
    'e-1002': {
      id: 'e-1002',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-94',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1003'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '622f5833c267059a170b5c63|6483b442-bf96-e591-98fb-583f48ad9c7b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|6483b442-bf96-e591-98fb-583f48ad9c7b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647274998248
    },
    'e-1003': {
      id: 'e-1003',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-95',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1002'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '622f5833c267059a170b5c63|6483b442-bf96-e591-98fb-583f48ad9c7b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|6483b442-bf96-e591-98fb-583f48ad9c7b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647274998248
    },
    'e-1004': {
      id: 'e-1004',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-94',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1005'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '622f5833c267059a170b5c63|81a457b1-6684-bad2-fbb7-a5493eaad052',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|81a457b1-6684-bad2-fbb7-a5493eaad052',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647275732415
    },
    'e-1005': {
      id: 'e-1005',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-95',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1004'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '622f5833c267059a170b5c63|81a457b1-6684-bad2-fbb7-a5493eaad052',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|81a457b1-6684-bad2-fbb7-a5493eaad052',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647275732415
    },
    'e-1006': {
      id: 'e-1006',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OVER',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-94',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1007'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '622f5833c267059a170b5c63|b08ad558-912c-7239-1d74-3aebbdb32743',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|b08ad558-912c-7239-1d74-3aebbdb32743',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647275734577
    },
    'e-1007': {
      id: 'e-1007',
      name: '',
      animationType: 'preset',
      eventTypeId: 'MOUSE_OUT',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-95',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1006'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '622f5833c267059a170b5c63|b08ad558-912c-7239-1d74-3aebbdb32743',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|b08ad558-912c-7239-1d74-3aebbdb32743',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647275734577
    },
    'e-1008': {
      id: 'e-1008',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1009'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '622f5833c267059a170b5c63|bd72fce3-d845-9c71-e74a-cbc7a794a9e1',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|bd72fce3-d845-9c71-e74a-cbc7a794a9e1',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647280312656
    },
    'e-1010': {
      id: 'e-1010',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1011'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '622f5833c267059a170b5c63|0b73569f-b393-9bc8-dab7-8bd1a05f7ca2',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|0b73569f-b393-9bc8-dab7-8bd1a05f7ca2',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647280328698
    },
    'e-1012': {
      id: 'e-1012',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-91',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1013'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '622f5833c267059a170b5c63|fc7a6938-4f68-78b3-3d35-35f9c7032594',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '622f5833c267059a170b5c63|fc7a6938-4f68-78b3-3d35-35f9c7032594',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647280345008
    },
    'e-1015': {
      id: 'e-1015',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-46',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1016'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d1007ecac53|678a1d36-7136-b756-b8a4-d3adb098272f',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d1007ecac53|678a1d36-7136-b756-b8a4-d3adb098272f',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647293107469
    },
    'e-1017': {
      id: 'e-1017',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1018'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|cc2608a7-29c2-e668-7f2f-cefe9648cbd3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|cc2608a7-29c2-e668-7f2f-cefe9648cbd3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647296126743
    },
    'e-1019': {
      id: 'e-1019',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeIn', autoStopEventId: 'e-1020' }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|cc2608a7-29c2-e668-7f2f-cefe9648cbf3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|cc2608a7-29c2-e668-7f2f-cefe9648cbf3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: true
      },
      createdOn: 1647296126743
    },
    'e-1020': {
      id: 'e-1020',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_OUT_OF_VIEW',
      action: {
        id: '',
        actionTypeId: 'FADE_EFFECT',
        instant: false,
        config: { actionListId: 'fadeOut', autoStopEventId: 'e-1019' }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079de0f9ecacea|cc2608a7-29c2-e668-7f2f-cefe9648cbf3',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079de0f9ecacea|cc2608a7-29c2-e668-7f2f-cefe9648cbf3',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 0,
        direction: null,
        effectIn: false
      },
      createdOn: 1647296126743
    },
    'e-1021': {
      id: 'e-1021',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-58',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1022'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|ec833a90-7593-e545-62ab-a9a83030021b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|ec833a90-7593-e545-62ab-a9a83030021b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647350723518
    },
    'e-1023': {
      id: 'e-1023',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-64',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1024'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|ec833a90-7593-e545-62ab-a9a83030021d',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|ec833a90-7593-e545-62ab-a9a83030021d',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1647350723518
    },
    'e-1026': {
      id: 'e-1026',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-98',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1027'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '6c348ba7-d30c-faf3-e512-f1572a59901c',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '6c348ba7-d30c-faf3-e512-f1572a59901c',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: 300,
        direction: null,
        effectIn: true
      },
      createdOn: 1662131951023
    },
    'e-1028': {
      id: 'e-1028',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLL_INTO_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_START_ACTION',
        config: {
          delay: 0,
          easing: '',
          duration: 0,
          actionListId: 'a-62',
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: 'e-1029'
        }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|b2518a47-a502-7ce9-f90e-b07533ffaa59',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|b2518a47-a502-7ce9-f90e-b07533ffaa59',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: '%',
        delay: null,
        direction: null,
        effectIn: null
      },
      createdOn: 1662132410071
    },
    'e-1030': {
      id: 'e-1030',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-102', affectedElements: {}, duration: 0 }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'f84a4ae1-0237-073f-1fa7-e62c4eb6c6a7',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: 'f84a4ae1-0237-073f-1fa7-e62c4eb6c6a7',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: [
        {
          continuousParameterGroupId: 'a-102-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50
        }
      ],
      createdOn: 1662755697586
    },
    'e-1032': {
      id: 'e-1032',
      name: '',
      animationType: 'custom',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-103', affectedElements: {}, duration: 0 }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: '617c5c8ec6079d8443ecac3b|21bb5a97-9aed-bfd5-c51b-7cd6a61f7e33',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: '617c5c8ec6079d8443ecac3b|21bb5a97-9aed-bfd5-c51b-7cd6a61f7e33',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: [
        {
          continuousParameterGroupId: 'a-103-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50
        }
      ],
      createdOn: 1662756400323
    },
    'e-1033': {
      id: 'e-1033',
      name: '',
      animationType: 'preset',
      eventTypeId: 'SCROLLING_IN_VIEW',
      action: {
        id: '',
        actionTypeId: 'GENERAL_CONTINUOUS_ACTION',
        config: { actionListId: 'a-104', affectedElements: {}, duration: 0 }
      },
      mediaQueries: ['main', 'medium', 'small', 'tiny'],
      target: {
        id: 'c229a7fd-0748-2bf1-9669-1d3ca842880b',
        appliesTo: 'ELEMENT',
        styleBlockIds: []
      },
      targets: [
        {
          id: 'c229a7fd-0748-2bf1-9669-1d3ca842880b',
          appliesTo: 'ELEMENT',
          styleBlockIds: []
        }
      ],
      config: [
        {
          continuousParameterGroupId: 'a-104-p',
          smoothing: 50,
          startsEntering: true,
          addStartOffset: false,
          addOffsetValue: 50,
          startsExiting: false,
          addEndOffset: false,
          endOffsetValue: 50
        }
      ],
      createdOn: 1663012072185
    }
  },
  actionLists: {
    'a-8': {
      id: 'a-8',
      title: 'Beta Invite Open',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-8-n',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {},
                value: 'none'
              }
            },
            {
              id: 'a-8-n-5',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                xValue: 0.96,
                yValue: 0.96,
                locked: true
              }
            },
            {
              id: 'a-8-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {},
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-8-n-7',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'PARENT',
                  selector: '.nav-bar',
                  selectorGuids: ['4cb82631-39c6-5f59-1ac2-721fd9017021']
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-8-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {},
                value: 1,
                unit: ''
              }
            },
            {
              id: 'a-8-n-6',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 350,
                target: {},
                xValue: 1,
                yValue: 1,
                locked: true
              }
            },
            {
              id: 'a-8-n-4',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {},
                value: 'flex'
              }
            },
            {
              id: 'a-8-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 300,
                target: {
                  useEventTarget: 'PARENT',
                  selector: '.nav-bar',
                  selectorGuids: ['4cb82631-39c6-5f59-1ac2-721fd9017021']
                },
                yValue: -44,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576683368354
    },
    'a-22': {
      id: 'a-22',
      title: 'Accordion Open',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-22-n',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                heightValue: 0,
                widthUnit: 'PX',
                heightUnit: 'PX',
                locked: false
              }
            },
            {
              id: 'a-22-n-7',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-22-n-2',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 300,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                widthUnit: 'PX',
                heightUnit: 'AUTO',
                locked: false
              }
            },
            {
              id: 'a-22-n-8',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                value: 1,
                unit: ''
              }
            },
            {
              id: 'a-22-n-4',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.folderclose',
                  selectorGuids: ['94d79151-03f7-e89d-3ea0-e41aa35c7f78']
                },
                value: 'none'
              }
            },
            {
              id: 'a-22-n-6',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.folderopen',
                  selectorGuids: ['3e8866a1-3ad4-2a24-8cc4-6e15c32a4f4a']
                },
                value: 'block'
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1584666210149
    },
    'a-23': {
      id: 'a-23',
      title: 'Accordion Close',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-23-n',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 200,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                heightValue: 0,
                widthUnit: 'PX',
                heightUnit: 'PX',
                locked: false
              }
            },
            {
              id: 'a-23-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-23-n-2',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.folderopen',
                  selectorGuids: ['3e8866a1-3ad4-2a24-8cc4-6e15c32a4f4a']
                },
                value: 'none'
              }
            },
            {
              id: 'a-23-n-3',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.folderclose',
                  selectorGuids: ['94d79151-03f7-e89d-3ea0-e41aa35c7f78']
                },
                value: 'block'
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1584666474938
    },
    'a-7': {
      id: 'a-7',
      title: 'Scroll In',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-7-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-7-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                yValue: 60,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-7-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-7-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-38': {
      id: 'a-38',
      title: 'main video scroll in 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-38-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.div-block-80',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e88111e']
                },
                xValue: 0.8,
                yValue: 0.8,
                locked: true
              }
            },
            {
              id: 'a-38-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a4f'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-38-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.div-block-80',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e88111e']
                },
                value: 0.6,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-38-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.div-block-80',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e88111e']
                },
                value: 1,
                unit: ''
              }
            },
            {
              id: 'a-38-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a4f'
                },
                yValue: -80,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-38-n-6',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 2000,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.div-block-80',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e88111e']
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-5': {
      id: 'a-5',
      title: 'Grid Text',
      continuousParameterGroups: [
        {
          id: 'a-5-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 25,
              actionItems: [
                {
                  id: 'a-5-n-5',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.grid-copy',
                      selectorGuids: ['5afe1df3-13ca-b659-a527-abd648ff9e73']
                    },
                    yValue: 60,
                    xUnit: 'PX',
                    yUnit: 'px',
                    zUnit: 'PX'
                  }
                }
              ]
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: 'a-5-n',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a55'
                    },
                    value: 1,
                    unit: ''
                  }
                },
                {
                  id: 'a-5-n-3',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.grid-copy',
                      selectorGuids: ['5afe1df3-13ca-b659-a527-abd648ff9e73']
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX'
                  }
                }
              ]
            },
            {
              keyframe: 70,
              actionItems: [
                {
                  id: 'a-5-n-2',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a55'
                    },
                    value: 0,
                    unit: ''
                  }
                },
                {
                  id: 'a-5-n-4',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.grid-copy',
                      selectorGuids: ['5afe1df3-13ca-b659-a527-abd648ff9e73']
                    },
                    yValue: -60,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX'
                  }
                }
              ]
            }
          ]
        }
      ],
      createdOn: 1576600998584
    },
    'a-15': {
      id: 'a-15',
      title: 'LightBox',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-15-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {
                  selector: '.lightbox',
                  selectorGuids: ['a29a7925-b0c1-cd7f-f3be-e8545a2376c2']
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-15-n-7',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  selector: '.lightbox',
                  selectorGuids: ['a29a7925-b0c1-cd7f-f3be-e8545a2376c2']
                },
                value: 'flex'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-15-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 350,
                target: {
                  selector: '.lightbox',
                  selectorGuids: ['a29a7925-b0c1-cd7f-f3be-e8545a2376c2']
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1580265013196
    },
    'a-16': {
      id: 'a-16',
      title: 'LightBoxClose',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-16-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'PARENT',
                  selector: '.lightbox',
                  selectorGuids: ['a29a7925-b0c1-cd7f-f3be-e8545a2376c2']
                },
                value: 1,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-16-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 250,
                target: {
                  useEventTarget: 'PARENT',
                  selector: '.lightbox',
                  selectorGuids: ['a29a7925-b0c1-cd7f-f3be-e8545a2376c2']
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-16-n-3',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'PARENT',
                  selector: '.lightbox',
                  selectorGuids: ['a29a7925-b0c1-cd7f-f3be-e8545a2376c2']
                },
                value: 'none'
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1580265881674
    },
    'a-35': {
      id: 'a-35',
      title: 'Scroll In 3',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-35-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-35-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                yValue: 60,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-35-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-35-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-43': {
      id: 'a-43',
      title: 'Scale Video 3',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-43-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ace'
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-43-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 350,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ace'
                },
                xValue: 1.02,
                yValue: 1.02,
                locked: true
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1583438718623
    },
    'a-39': {
      id: 'a-39',
      title: 'Scale Out Video 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-39-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 300,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ace'
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1583438849503
    },
    'a-42': {
      id: 'a-42',
      title: 'Scroll In 5',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-42-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-42-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 30,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-42-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-42-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 750,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-40': {
      id: 'a-40',
      title: 'move row left',
      continuousParameterGroups: [
        {
          id: 'a-40-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-40-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac1'
                    },
                    xValue: 0,
                    yValue: 0,
                    zValue: 0,
                    xUnit: '%',
                    yUnit: 'px',
                    zUnit: 'px'
                  }
                }
              ]
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-40-n-2',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ac1'
                    },
                    xValue: -30,
                    yValue: 0,
                    zValue: 0,
                    xUnit: '%',
                    yUnit: 'px',
                    zUnit: 'px'
                  }
                }
              ]
            }
          ]
        }
      ],
      createdOn: 1606327717106
    },
    'a-37': {
      id: 'a-37',
      title: 'Grid Text 2',
      continuousParameterGroups: [
        {
          id: 'a-37-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 43,
              actionItems: [
                {
                  id: 'a-37-n',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: 'easeInOut',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.heading-3',
                      selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881124']
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'px',
                    zUnit: 'PX'
                  }
                },
                {
                  id: 'a-37-n-2',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a55'
                    },
                    value: 1,
                    unit: ''
                  }
                },
                {
                  id: 'a-37-n-3',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.div-block-75',
                      selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e8810ec']
                    },
                    yValue: 0,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX'
                  }
                }
              ]
            },
            {
              keyframe: 55,
              actionItems: [
                {
                  id: 'a-37-n-4',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a55'
                    },
                    value: 0,
                    unit: ''
                  }
                },
                {
                  id: 'a-37-n-5',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.heading-3',
                      selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881124']
                    },
                    yValue: -60,
                    xUnit: 'PX',
                    yUnit: 'px',
                    zUnit: 'PX'
                  }
                },
                {
                  id: 'a-37-n-6',
                  actionTypeId: 'TRANSFORM_MOVE',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: 'CHILDREN',
                      selector: '.div-block-75',
                      selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e8810ec']
                    },
                    yValue: -60,
                    xUnit: 'PX',
                    yUnit: 'PX',
                    zUnit: 'PX'
                  }
                }
              ]
            }
          ]
        }
      ],
      createdOn: 1576600998584
    },
    'a-41': {
      id: 'a-41',
      title: 'Video-fadeIn-10%',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-41-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 800,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a50'
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-41-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 600,
                easing: '',
                duration: 1300,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8a50'
                },
                value: 0.6,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1606331225556
    },
    'a-19': {
      id: 'a-19',
      title: 'Scale Out Video',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-19-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 300,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d766fecac52|b6c42619-fe0a-a8c6-ceef-db1569ab9267'
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1583438849503
    },
    'a-33': {
      id: 'a-33',
      title: 'Scale Video 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-33-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ace'
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-33-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 350,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d031eecacd7|acd6dc5e-649e-16c8-fa12-fb89af3d8ace'
                },
                xValue: 1.02,
                yValue: 1.02,
                locked: true
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1583438718623
    },
    'a-46': {
      id: 'a-46',
      title: 'Scroll In 6',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-46-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '5f086619b46fbd5d2704e991|ad14330b-18ac-d1cf-7bbc-4de8236fad6a'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-46-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '5f086619b46fbd5d2704e991|ad14330b-18ac-d1cf-7bbc-4de8236fad6a'
                },
                yValue: 60,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-46-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '5f086619b46fbd5d2704e991|ad14330b-18ac-d1cf-7bbc-4de8236fad6a'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-46-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '5f086619b46fbd5d2704e991|ad14330b-18ac-d1cf-7bbc-4de8236fad6a'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-47': {
      id: 'a-47',
      title: 'FAQ Open 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-47-n',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                heightValue: 0,
                widthUnit: 'PX',
                heightUnit: 'PX',
                locked: false
              }
            },
            {
              id: 'a-47-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-47-n-3',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.faqarrow',
                  selectorGuids: ['d6f50692-ebe2-8ac5-b72c-3761205c7c03']
                },
                zValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-47-n-4',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'inOutCubic',
                duration: 500,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                widthUnit: 'PX',
                heightUnit: 'AUTO',
                locked: false
              }
            },
            {
              id: 'a-47-n-5',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'inOutCubic',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.faqarrow',
                  selectorGuids: ['d6f50692-ebe2-8ac5-b72c-3761205c7c03']
                },
                zValue: 180,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'DEG'
              }
            },
            {
              id: 'a-47-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'inOutCubic',
                duration: 500,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1594998900943
    },
    'a-48': {
      id: 'a-48',
      title: 'FAQ Close 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-48-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'inOutCubic',
                duration: 0,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                value: 1,
                unit: ''
              }
            },
            {
              id: 'a-48-n-2',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: 'inOutCubic',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.faqarrow',
                  selectorGuids: ['d6f50692-ebe2-8ac5-b72c-3761205c7c03']
                },
                zValue: 180,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'deg'
              }
            },
            {
              id: 'a-48-n-3',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'inOutCubic',
                duration: 0,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                widthUnit: 'PX',
                heightUnit: 'AUTO',
                locked: false
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-48-n-4',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 200,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.faqarrow',
                  selectorGuids: ['d6f50692-ebe2-8ac5-b72c-3761205c7c03']
                },
                xValue: 0,
                zValue: 0,
                xUnit: 'deg',
                yUnit: 'DEG',
                zUnit: 'deg'
              }
            },
            {
              id: 'a-48-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-48-n-6',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 500,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                heightValue: 0,
                widthUnit: 'PX',
                heightUnit: 'px',
                locked: false
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1594999109268
    },
    'a-44': {
      id: 'a-44',
      title: 'Show Nav',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-44-n',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-bottom',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881125']
                },
                yValue: 0,
                xUnit: 'DEG',
                yUnit: 'deg',
                zUnit: 'DEG'
              }
            },
            {
              id: 'a-44-n-2',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-top',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e8810f0']
                },
                yValue: 0,
                xUnit: 'DEG',
                yUnit: 'deg',
                zUnit: 'DEG'
              }
            },
            {
              id: 'a-44-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-top',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e8810f0']
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-44-n-4',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-bottom',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881125']
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-44-n-5',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                xValue: 0.98,
                yValue: 0.98,
                locked: true
              }
            },
            {
              id: 'a-44-n-6',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-44-n-7',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                value: 'none'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-44-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-bottom',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881125']
                },
                yValue: -5,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-44-n-9',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-top',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e8810f0']
                },
                yValue: 5,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-44-n-10',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-bottom',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881125']
                },
                zValue: -45,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'deg'
              }
            },
            {
              id: 'a-44-n-11',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-top',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e8810f0']
                },
                zValue: 45,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'deg'
              }
            },
            {
              id: 'a-44-n-12',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                value: 'flex'
              }
            },
            {
              id: 'a-44-n-13',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 350,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            },
            {
              id: 'a-44-n-14',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 500,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1605807161035
    },
    'a-45': {
      id: 'a-45',
      title: 'Hide Nav',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-45-n-2',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-bottom',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881125']
                },
                zValue: -45,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'deg'
              }
            },
            {
              id: 'a-45-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-bottom',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881125']
                },
                yValue: -5,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-45-n-4',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-top',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e8810f0']
                },
                zValue: 45,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'deg'
              }
            },
            {
              id: 'a-45-n-5',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-top',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e8810f0']
                },
                yValue: 5,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-45-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                value: 1,
                unit: ''
              }
            },
            {
              id: 'a-45-n-6',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                value: 'flex'
              }
            },
            {
              id: 'a-45-n-7',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-45-n-8',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-top',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e8810f0']
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-45-n-9',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-bottom',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881125']
                },
                zValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'deg'
              }
            },
            {
              id: 'a-45-n-10',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-bottom',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881125']
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-45-n-11',
              actionTypeId: 'TRANSFORM_ROTATE',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.nav-line-top',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e8810f0']
                },
                zValue: 0,
                xUnit: 'DEG',
                yUnit: 'DEG',
                zUnit: 'deg'
              }
            },
            {
              id: 'a-45-n-12',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 350,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-45-n-13',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 350,
                target: {
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                xValue: 0.98,
                yValue: 0.98,
                locked: true
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-45-n-14',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.nav-links-2',
                  selectorGuids: ['6b35f9c9-8c61-c0d0-80b1-d5687e881122']
                },
                value: 'none'
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1605807418294
    },
    'a-49': {
      id: 'a-49',
      title: 'Scroll In 7',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-49-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d298fecac54|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-49-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d298fecac54|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                yValue: 60,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-49-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d298fecac54|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-49-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d298fecac54|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-50': {
      id: 'a-50',
      title: 'Scroll In 8',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-50-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d3cf6ecac48|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-50-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d3cf6ecac48|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                yValue: 60,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-50-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d3cf6ecac48|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-50-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d3cf6ecac48|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-25': {
      id: 'a-25',
      title: 'Accordion Close 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-25-n',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 200,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                widthUnit: 'PX',
                heightUnit: 'AUTO',
                locked: false
              }
            },
            {
              id: 'a-25-n-5',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.folderclose',
                  selectorGuids: ['94d79151-03f7-e89d-3ea0-e41aa35c7f78']
                },
                value: 'none'
              }
            },
            {
              id: 'a-25-n-6',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.folderopen',
                  selectorGuids: ['3e8866a1-3ad4-2a24-8cc4-6e15c32a4f4a']
                },
                value: 'block'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-25-n-4',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 200,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                heightValue: 0,
                widthUnit: 'PX',
                heightUnit: 'PX',
                locked: false
              }
            },
            {
              id: 'a-25-n-2',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.folderopen',
                  selectorGuids: ['3e8866a1-3ad4-2a24-8cc4-6e15c32a4f4a']
                },
                value: 'none'
              }
            },
            {
              id: 'a-25-n-3',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.folderclose',
                  selectorGuids: ['94d79151-03f7-e89d-3ea0-e41aa35c7f78']
                },
                value: 'block'
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1584666474938
    },
    'a-24': {
      id: 'a-24',
      title: 'Accordion Open 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-24-n-2',
              actionTypeId: 'STYLE_SIZE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 300,
                target: {
                  useEventTarget: 'SIBLINGS',
                  selector: '.accordionitemcontent',
                  selectorGuids: ['4a1711d0-3647-d8a8-311a-9ad85e5811da']
                },
                widthUnit: 'PX',
                heightUnit: 'AUTO',
                locked: false
              }
            },
            {
              id: 'a-24-n-3',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.folderclose',
                  selectorGuids: ['94d79151-03f7-e89d-3ea0-e41aa35c7f78']
                },
                value: 'none'
              }
            },
            {
              id: 'a-24-n-4',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.folderopen',
                  selectorGuids: ['3e8866a1-3ad4-2a24-8cc4-6e15c32a4f4a']
                },
                value: 'block'
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1584666210149
    },
    'a-18': {
      id: 'a-18',
      title: 'Scale Video',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-18-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d766fecac52|b6c42619-fe0a-a8c6-ceef-db1569ab9267'
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            },
            {
              id: 'a-18-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d766fecac52|b6c42619-fe0a-a8c6-ceef-db1569ab9267'
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-18-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d766fecac52|b6c42619-fe0a-a8c6-ceef-db1569ab9267'
                },
                xValue: 1.04,
                yValue: 1.04,
                locked: true
              }
            },
            {
              id: 'a-18-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 600,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d766fecac52|b6c42619-fe0a-a8c6-ceef-db1569ab9267'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1583438718623
    },
    'a-55': {
      id: 'a-55',
      title: 'Scroll In 10',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-55-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-55-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 30,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-55-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-55-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 750,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-59': {
      id: 'a-59',
      title: 'Scroll In 12',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-59-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-59-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 30,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-59-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-59-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 750,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-64': {
      id: 'a-64',
      title: 'Scroll In 15',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-64-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-64-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 30,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-64-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-64-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 750,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-63': {
      id: 'a-63',
      title: 'Scroll In 14',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-63-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-63-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 30,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-63-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-63-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 750,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-58': {
      id: 'a-58',
      title: 'Scale Video 5',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-58-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|b6c42619-fe0a-a8c6-ceef-db1569ab9267'
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            },
            {
              id: 'a-58-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|b6c42619-fe0a-a8c6-ceef-db1569ab9267'
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-58-n-3',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|b6c42619-fe0a-a8c6-ceef-db1569ab9267'
                },
                xValue: 1.04,
                yValue: 1.04,
                locked: true
              }
            },
            {
              id: 'a-58-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 600,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|b6c42619-fe0a-a8c6-ceef-db1569ab9267'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1583438718623
    },
    'a-68': {
      id: 'a-68',
      title: 'button-opactiy',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-68-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|753fc779-b7d2-132d-2368-25de7f90c06a'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-68-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|753fc779-b7d2-132d-2368-25de7f90c06a'
                },
                value: 0.6,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1627661930426
    },
    'a-69': {
      id: 'a-69',
      title: 'button-hover-out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-69-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 250,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|753fc779-b7d2-132d-2368-25de7f90c069'
                },
                value: 0.6,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-69-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d8443ecac3b|753fc779-b7d2-132d-2368-25de7f90c069'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1627662010045
    },
    'a-62': {
      id: 'a-62',
      title: 'Header Scale in 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-62-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d3abdecac4a|7df3ffd9-560b-85fa-6d7f-bcb69932d6fb'
                },
                xValue: 0.9,
                yValue: 0.9,
                zValue: 0.75,
                locked: true
              }
            },
            {
              id: 'a-62-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d3abdecac4a|7df3ffd9-560b-85fa-6d7f-bcb69932d6fb'
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-62-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d3abdecac4a|7df3ffd9-560b-85fa-6d7f-bcb69932d6fb'
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-62-n-4',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1300,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d3abdecac4a|7df3ffd9-560b-85fa-6d7f-bcb69932d6fb'
                },
                xValue: 1,
                yValue: 1,
                zValue: 1,
                locked: true
              }
            },
            {
              id: 'a-62-n-5',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 750,
                target: {
                  useEventTarget: true,
                  id: '617c5c8ec6079d3abdecac4a|7df3ffd9-560b-85fa-6d7f-bcb69932d6fb'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1625778459446
    },
    'a-70': {
      id: 'a-70',
      title: 'Play Video 1',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-70-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.using-play-video._3',
                  selectorGuids: [
                    '9028ab44-0042-e699-7222-a2bc5d9e7fcf',
                    'ed8191a8-3910-f29c-02a8-9bcc77a9ece1'
                  ]
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-70-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.using-play-video._1',
                  selectorGuids: [
                    '9028ab44-0042-e699-7222-a2bc5d9e7fcf',
                    '340ed3e2-e826-76cd-a28f-6659422480d2'
                  ]
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-70-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  selector: '.using-play-video._2',
                  selectorGuids: [
                    '9028ab44-0042-e699-7222-a2bc5d9e7fcf',
                    'ec40c7c6-89db-1f79-015c-14923b053d81'
                  ]
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-70-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 1000,
                target: {
                  selector: '.using-play-video._4',
                  selectorGuids: [
                    '9028ab44-0042-e699-7222-a2bc5d9e7fcf',
                    'c024d7de-ba05-e1c4-131a-6f32ce926252'
                  ]
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1627675222886
    },
    'a-71': {
      id: 'a-71',
      title: 'Play Video 1 Out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-71-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d6669ecaceb|ba47b839-8b8c-48fc-5b03-c8f14af43bf0'
                },
                value: 0,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1627675452624
    },
    'a-72': {
      id: 'a-72',
      title: 'Play Video 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-72-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d6669ecaceb|56831d89-2b3d-3e7c-74c5-db4fc17473f0'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1627675575382
    },
    'a-73': {
      id: 'a-73',
      title: 'Play Video 2 Out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-73-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d6669ecaceb|56831d89-2b3d-3e7c-74c5-db4fc17473f0'
                },
                value: 0,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1627675575382
    },
    'a-74': {
      id: 'a-74',
      title: 'Play Video 3',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-74-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d6669ecaceb|095ed030-0271-5750-f0cb-ec53016d68e6'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1627675716923
    },
    'a-75': {
      id: 'a-75',
      title: 'Play Video 3 Out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-75-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d6669ecaceb|095ed030-0271-5750-f0cb-ec53016d68e6'
                },
                value: 0,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1627675716923
    },
    'a-76': {
      id: 'a-76',
      title: 'Play Video 4',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-76-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d6669ecaceb|4dd8cd13-6306-b5be-747f-52a84cfa8099'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1627675777861
    },
    'a-77': {
      id: 'a-77',
      title: 'Play Video 4 Out',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-77-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'ease',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d6669ecaceb|4dd8cd13-6306-b5be-747f-52a84cfa8099'
                },
                value: 0,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1627675777861
    },
    'a-78': {
      id: 'a-78',
      title: 'show arrow right',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-78-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 300,
                target: {
                  useEventTarget: 'CHILDREN',
                  id: '617c5c8ec6079d8443ecac3b|4ee94def-b482-a10a-da9d-1141dfc1f9b0'
                },
                value: 1,
                unit: ''
              }
            },
            {
              id: 'a-78-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 300,
                target: {
                  useEventTarget: 'CHILDREN',
                  id: '617c5c8ec6079d8443ecac3b|4ee94def-b482-a10a-da9d-1141dfc1f9b0'
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: 'px',
                yUnit: 'px',
                zUnit: 'px'
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1628026027202
    },
    'a-79': {
      id: 'a-79',
      title: 'hide arrow right',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-79-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 300,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.icon-3',
                  selectorGuids: ['bbb129ba-74e9-0bec-e7dd-806a27da9795']
                },
                xValue: 20,
                xUnit: 'px',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-79-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 300,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.icon-3',
                  selectorGuids: ['bbb129ba-74e9-0bec-e7dd-806a27da9795']
                },
                value: 0,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1628026130097
    },
    'a-80': {
      id: 'a-80',
      title: 'show arrow left',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-80-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 300,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.icon-4',
                  selectorGuids: ['e91c5f82-b188-6099-b8e4-7317eed07a00']
                },
                value: 1,
                unit: ''
              }
            },
            {
              id: 'a-80-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 300,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.icon-4',
                  selectorGuids: ['e91c5f82-b188-6099-b8e4-7317eed07a00']
                },
                xValue: 0,
                yValue: 0,
                zValue: 0,
                xUnit: 'px',
                yUnit: 'px',
                zUnit: 'px'
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1628026027202
    },
    'a-81': {
      id: 'a-81',
      title: 'hide arrow left',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-81-n',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 300,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.icon-4',
                  selectorGuids: ['e91c5f82-b188-6099-b8e4-7317eed07a00']
                },
                xValue: -20,
                xUnit: 'px',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-81-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 300,
                target: {
                  useEventTarget: 'CHILDREN',
                  selector: '.icon-4',
                  selectorGuids: ['e91c5f82-b188-6099-b8e4-7317eed07a00']
                },
                value: 0,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1628026130097
    },
    'a-82': {
      id: 'a-82',
      title: 'Scroll In 16',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-82-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d6dbcecac4e|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-82-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  id: '617c5c8ec6079d6dbcecac4e|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                yValue: 60,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-82-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d6dbcecac4e|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-82-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 1000,
                target: {
                  id: '617c5c8ec6079d6dbcecac4e|acd6dc5e-649e-16c8-fa12-fb89af3d8ac5'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-83': {
      id: 'a-83',
      title: 'LightBox 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-83-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 500,
                target: {
                  selector: '.lightbox2',
                  selectorGuids: ['ac119933-7697-fe94-2fdc-74820d30d8ad']
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-83-n-2',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  selector: '.lightbox2',
                  selectorGuids: ['ac119933-7697-fe94-2fdc-74820d30d8ad']
                },
                value: 'flex'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-83-n-3',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 350,
                target: {
                  selector: '.lightbox2',
                  selectorGuids: ['ac119933-7697-fe94-2fdc-74820d30d8ad']
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1580265013196
    },
    'a-84': {
      id: 'a-84',
      title: 'LightBoxClose 2',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-84-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: 'PARENT',
                  selector: '.lightbox2',
                  selectorGuids: ['ac119933-7697-fe94-2fdc-74820d30d8ad']
                },
                value: 1,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-84-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeOut',
                duration: 250,
                target: {
                  useEventTarget: 'PARENT',
                  selector: '.lightbox2',
                  selectorGuids: ['ac119933-7697-fe94-2fdc-74820d30d8ad']
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-84-n-3',
              actionTypeId: 'GENERAL_DISPLAY',
              config: {
                delay: 0,
                easing: '',
                duration: 0,
                target: {
                  useEventTarget: 'PARENT',
                  selector: '.lightbox2',
                  selectorGuids: ['ac119933-7697-fe94-2fdc-74820d30d8ad']
                },
                value: 'none'
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1580265881674
    },
    'a-91': {
      id: 'a-91',
      title: 'Scroll In 17',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-91-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '622f5833c267059a170b5c63|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 0,
                unit: ''
              }
            },
            {
              id: 'a-91-n-2',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '622f5833c267059a170b5c63|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 30,
                xUnit: 'PX',
                yUnit: 'px',
                zUnit: 'PX'
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-91-n-3',
              actionTypeId: 'TRANSFORM_MOVE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '622f5833c267059a170b5c63|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                yValue: 0,
                xUnit: 'PX',
                yUnit: 'PX',
                zUnit: 'PX'
              }
            },
            {
              id: 'a-91-n-4',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 750,
                target: {
                  useEventTarget: true,
                  id: '622f5833c267059a170b5c63|3aa6366b-62bb-88db-c95c-b5cae9c7dd4e'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1576624193427
    },
    'a-92': {
      id: 'a-92',
      title: 'Scale Video 8',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-92-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '622f5833c267059a170b5c63|acd6dc5e-649e-16c8-fa12-fb89af3d8ace'
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-92-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 350,
                target: {
                  useEventTarget: true,
                  id: '622f5833c267059a170b5c63|acd6dc5e-649e-16c8-fa12-fb89af3d8ace'
                },
                xValue: 1.02,
                yValue: 1.02,
                locked: true
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1583438718623
    },
    'a-93': {
      id: 'a-93',
      title: 'Scale Out Video 3',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-93-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 300,
                target: {
                  useEventTarget: true,
                  id: '622f5833c267059a170b5c63|acd6dc5e-649e-16c8-fa12-fb89af3d8ace'
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1583438849503
    },
    'a-94': {
      id: 'a-94',
      title: 'Scale Video 9',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-94-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: '',
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: '622f5833c267059a170b5c63|acd6dc5e-649e-16c8-fa12-fb89af3d8ace'
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-94-n-2',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 350,
                target: {
                  useEventTarget: true,
                  id: '622f5833c267059a170b5c63|acd6dc5e-649e-16c8-fa12-fb89af3d8ace'
                },
                xValue: 1.02,
                yValue: 1.02,
                locked: true
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1583438718623
    },
    'a-95': {
      id: 'a-95',
      title: 'Scale Out Video 4',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-95-n',
              actionTypeId: 'TRANSFORM_SCALE',
              config: {
                delay: 0,
                easing: 'easeInOut',
                duration: 300,
                target: {
                  useEventTarget: true,
                  id: '622f5833c267059a170b5c63|acd6dc5e-649e-16c8-fa12-fb89af3d8ace'
                },
                xValue: 1,
                yValue: 1,
                locked: true
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1583438849503
    },
    'a-98': {
      id: 'a-98',
      title: 'Faded In',
      actionItemGroups: [
        {
          actionItems: [
            {
              id: 'a-98-n',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '6c348ba7-d30c-faf3-e512-f1572a59901c'
                },
                value: 0,
                unit: ''
              }
            }
          ]
        },
        {
          actionItems: [
            {
              id: 'a-98-n-2',
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'easeIn',
                duration: 1000,
                target: {
                  useEventTarget: true,
                  id: '6c348ba7-d30c-faf3-e512-f1572a59901c'
                },
                value: 1,
                unit: ''
              }
            }
          ]
        }
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1662132263349
    },
    'a-102': {
      id: 'a-102',
      title: 'Fade',
      continuousParameterGroups: [
        {
          id: 'a-102-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 5,
              actionItems: [
                {
                  id: 'a-102-n',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: 'f84a4ae1-0237-073f-1fa7-e62c4eb6c6a7'
                    },
                    value: 0,
                    unit: ''
                  }
                }
              ]
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: 'a-102-n-3',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: 'f84a4ae1-0237-073f-1fa7-e62c4eb6c6a7'
                    },
                    value: 1,
                    unit: ''
                  }
                }
              ]
            },
            {
              keyframe: 95,
              actionItems: [
                {
                  id: 'a-102-n-2',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: 'f84a4ae1-0237-073f-1fa7-e62c4eb6c6a7'
                    },
                    value: 0,
                    unit: ''
                  }
                }
              ]
            }
          ]
        }
      ],
      createdOn: 1662755728102
    },
    'a-103': {
      id: 'a-103',
      title: 'Fade Out video',
      continuousParameterGroups: [
        {
          id: 'a-103-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: 'a-103-n-4',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id: '617c5c8ec6079d8443ecac3b|fa95ecbc-d2ad-2c8f-2058-de01f7b0c228'
                    },
                    value: 1,
                    unit: ''
                  }
                },
                {
                  id: 'a-103-n-9',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id: '617c5c8ec6079d8443ecac3b|d1f98d99-4800-51c8-435e-813646002134'
                    },
                    value: 1,
                    unit: ''
                  }
                }
              ]
            },
            {
              keyframe: 30,
              actionItems: [
                {
                  id: 'a-103-n-5',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id: '617c5c8ec6079d8443ecac3b|fa95ecbc-d2ad-2c8f-2058-de01f7b0c228'
                    },
                    value: 0.4,
                    unit: ''
                  }
                }
              ]
            },
            {
              keyframe: 40,
              actionItems: [
                {
                  id: 'a-103-n-10',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id: '617c5c8ec6079d8443ecac3b|d1f98d99-4800-51c8-435e-813646002134'
                    },
                    value: 0,
                    unit: ''
                  }
                }
              ]
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: 'a-103-n-8',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      id: '617c5c8ec6079d8443ecac3b|fa95ecbc-d2ad-2c8f-2058-de01f7b0c228'
                    },
                    value: 0,
                    unit: ''
                  }
                }
              ]
            }
          ]
        }
      ],
      createdOn: 1647291635453
    },
    'a-104': {
      id: 'a-104',
      title: 'Fade 2',
      continuousParameterGroups: [
        {
          id: 'a-104-p',
          type: 'SCROLL_PROGRESS',
          parameterLabel: 'Scroll',
          continuousActionGroups: [
            {
              keyframe: 5,
              actionItems: [
                {
                  id: 'a-104-n',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: 'c229a7fd-0748-2bf1-9669-1d3ca842880b'
                    },
                    value: 0,
                    unit: ''
                  }
                }
              ]
            },
            {
              keyframe: 50,
              actionItems: [
                {
                  id: 'a-104-n-2',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: 'c229a7fd-0748-2bf1-9669-1d3ca842880b'
                    },
                    value: 1,
                    unit: ''
                  }
                }
              ]
            },
            {
              keyframe: 95,
              actionItems: [
                {
                  id: 'a-104-n-3',
                  actionTypeId: 'STYLE_OPACITY',
                  config: {
                    delay: 0,
                    easing: '',
                    duration: 500,
                    target: {
                      useEventTarget: true,
                      id: 'c229a7fd-0748-2bf1-9669-1d3ca842880b'
                    },
                    value: 0,
                    unit: ''
                  }
                }
              ]
            }
          ]
        }
      ],
      createdOn: 1662755728102
    },
    fadeIn: {
      id: 'fadeIn',
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true
                },
                value: 0
              }
            }
          ]
        },
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'outQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true
                },
                value: 1
              }
            }
          ]
        }
      ]
    },
    fadeOut: {
      id: 'fadeOut',
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: 'STYLE_OPACITY',
              config: {
                delay: 0,
                easing: 'inQuart',
                duration: 1000,
                target: {
                  id: 'N/A',
                  appliesTo: 'TRIGGER_ELEMENT',
                  useEventTarget: true
                },
                value: 0
              }
            }
          ]
        }
      ]
    }
  },
  site: {
    mediaQueries: [
      { key: 'main', min: 992, max: 10000 },
      { key: 'medium', min: 768, max: 991 },
      { key: 'small', min: 480, max: 767 },
      { key: 'tiny', min: 0, max: 479 }
    ]
  }
});
