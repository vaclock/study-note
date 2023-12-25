/*! For license information please see main.81bcb216.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      153: (e, t, n) => {
        var r = n(43),
          o = Symbol.for("react.element"),
          s = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          l = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
          };

        function a(e, t, n) {
          var r, s = {},
            a = null,
            c = null;
          for (r in void 0 !== n && (a = "" + n), void 0 !== t.key && (a = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, r) && !l.hasOwnProperty(r) && (s[r] = t[r]);
          if (e && e.defaultProps)
            for (r in t = e.defaultProps) void 0 === s[r] && (s[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: a,
            ref: c,
            props: s,
            _owner: u.current
          }
        }
        t.jsx = a, t.jsxs = a
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          s = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          u = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          a = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          d = Symbol.iterator;
        var y = {
            isMounted: function () {
              return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {}
          },
          h = Object.assign,
          v = {};

        function m(e, t, n) {
          this.props = e, this.context = t, this.refs = v, this.updater = n || y
        }

        function b() {}

        function _(e, t, n) {
          this.props = e, this.context = t, this.refs = v, this.updater = n || y
        }
        m.prototype.isReactComponent = {}, m.prototype.setState = function (e, t) {
          if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          this.updater.enqueueSetState(this, e, t, "setState")
        }, m.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }, b.prototype = m.prototype;
        var x = _.prototype = new b;
        x.constructor = _, h(x, m.prototype), x.isPureReactComponent = !0;
        var g = Array.isArray,
          j = Object.prototype.hasOwnProperty,
          E = {
            current: null
          },
          S = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
          };

        function k(e, t, r) {
          var o, s = {},
            i = null,
            u = null;
          if (null != t)
            for (o in void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (i = "" + t.key), t) j.call(t, o) && !S.hasOwnProperty(o) && (s[o] = t[o]);
          var l = arguments.length - 2;
          if (1 === l) s.children = r;
          else if (1 < l) {
            for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
            s.children = a
          }
          if (e && e.defaultProps)
            for (o in l = e.defaultProps) void 0 === s[o] && (s[o] = l[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: u,
            props: s,
            _owner: E.current
          }
        }

        function C(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n
        }
        var w = /\/+/g;

        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key ? function (e) {
            var t = {
              "=": "=0",
              ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, (function (e) {
              return t[e]
            }))
          }("" + e.key) : t.toString(36)
        }

        function R(e, t, o, s, i) {
          var u = typeof e;
          "undefined" !== u && "boolean" !== u || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else switch (u) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case n:
                case r:
                  l = !0
              }
          }
          if (l) return i = i(l = e), e = "" === s ? "." + N(l, 0) : s, g(i) ? (o = "", null != e && (o = e.replace(w, "$&/") + "/"), R(i, t, o, "", (function (e) {
            return e
          }))) : null != i && (C(i) && (i = function (e, t) {
            return {
              $$typeof: n,
              type: e.type,
              key: t,
              ref: e.ref,
              props: e.props,
              _owner: e._owner
            }
          }(i, o + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(w, "$&/") + "/") + e)), t.push(i)), 1;
          if (l = 0, s = "" === s ? "." : s + ":", g(e))
            for (var a = 0; a < e.length; a++) {
              var c = s + N(u = e[a], a);
              l += R(u, t, o, c, i)
            } else if (c = function (e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = d && e[d] || e["@@iterator"]) ? e : null
              }(e), "function" === typeof c)
              for (e = c.call(e), a = 0; !(u = e.next()).done;) l += R(u = u.value, t, o, c = s + N(u, a++), i);
            else if ("object" === u) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
          return l
        }

        function $(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return R(e, r, "", "", (function (e) {
            return t.call(n, e, o++)
          })), r
        }

        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) {
              0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
            }), (function (t) {
              0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
            })), -1 === e._status && (e._status = 0, e._result = t)
          }
          if (1 === e._status) return e._result.default;
          throw e._result
        }
        var I = {
            current: null
          },
          P = {
            transition: null
          },
          A = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: P,
            ReactCurrentOwner: E
          };

        function L() {
          throw Error("act(...) is not supported in production builds of React.")
        }
        t.Children = {
          map: $,
          forEach: function (e, t, n) {
            $(e, (function () {
              t.apply(this, arguments)
            }), n)
          },
          count: function (e) {
            var t = 0;
            return $(e, (function () {
              t++
            })), t
          },
          toArray: function (e) {
            return $(e, (function (e) {
              return e
            })) || []
          },
          only: function (e) {
            if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
          }
        }, t.Component = m, t.Fragment = o, t.Profiler = i, t.PureComponent = _, t.StrictMode = s, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A, t.act = L, t.cloneElement = function (e, t, r) {
          if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
          var o = h({}, e.props),
            s = e.key,
            i = e.ref,
            u = e._owner;
          if (null != t) {
            if (void 0 !== t.ref && (i = t.ref, u = E.current), void 0 !== t.key && (s = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
            for (a in t) j.call(t, a) && !S.hasOwnProperty(a) && (o[a] = void 0 === t[a] && void 0 !== l ? l[a] : t[a])
          }
          var a = arguments.length - 2;
          if (1 === a) o.children = r;
          else if (1 < a) {
            l = Array(a);
            for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
            o.children = l
          }
          return {
            $$typeof: n,
            type: e.type,
            key: s,
            ref: i,
            props: o,
            _owner: u
          }
        }, t.createContext = function (e) {
          return (e = {
            $$typeof: l,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
          }).Provider = {
            $$typeof: u,
            _context: e
          }, e.Consumer = e
        }, t.createElement = k, t.createFactory = function (e) {
          var t = k.bind(null, e);
          return t.type = e, t
        }, t.createRef = function () {
          return {
            current: null
          }
        }, t.forwardRef = function (e) {
          return {
            $$typeof: a,
            render: e
          }
        }, t.isValidElement = C, t.lazy = function (e) {
          return {
            $$typeof: p,
            _payload: {
              _status: -1,
              _result: e
            },
            _init: O
          }
        }, t.memo = function (e, t) {
          return {
            $$typeof: f,
            type: e,
            compare: void 0 === t ? null : t
          }
        }, t.startTransition = function (e) {
          var t = P.transition;
          P.transition = {};
          try {
            e()
          } finally {
            P.transition = t
          }
        }, t.unstable_act = L, t.useCallback = function (e, t) {
          return I.current.useCallback(e, t)
        }, t.useContext = function (e) {
          return I.current.useContext(e)
        }, t.useDebugValue = function () {}, t.useDeferredValue = function (e) {
          return I.current.useDeferredValue(e)
        }, t.useEffect = function (e, t) {
          return I.current.useEffect(e, t)
        }, t.useId = function () {
          return I.current.useId()
        }, t.useImperativeHandle = function (e, t, n) {
          return I.current.useImperativeHandle(e, t, n)
        }, t.useInsertionEffect = function (e, t) {
          return I.current.useInsertionEffect(e, t)
        }, t.useLayoutEffect = function (e, t) {
          return I.current.useLayoutEffect(e, t)
        }, t.useMemo = function (e, t) {
          return I.current.useMemo(e, t)
        }, t.useReducer = function (e, t, n) {
          return I.current.useReducer(e, t, n)
        }, t.useRef = function (e) {
          return I.current.useRef(e)
        }, t.useState = function (e) {
          return I.current.useState(e)
        }, t.useSyncExternalStore = function (e, t, n) {
          return I.current.useSyncExternalStore(e, t, n)
        }, t.useTransition = function () {
          return I.current.useTransition()
        }, t.version = "18.3.1"
      },
      43: (e, t, n) => {
        e.exports = n(202)
      },
      579: (e, t, n) => {
        e.exports = n(153)
      }
    },
    t = {};

  function n(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    Object.keys(n).forEach((r => {
      if ("className" === r) t[r].split(" ").forEach((t => {
        e.classList.remove(t)
      }));
      else if (r.startsWith("on")) {
        const t = r.substring(2).toLowerCase();
        e.removeEventListener(t, n[r])
      } else if ("style" === r)
        if ("object" === typeof t[r])
          for (let n in t[r]) e.setAttribute("".concat(n), "initial");
        else t[r].split(";").forEach((t => {
          const [n, r] = t.split(":"), o = n.replace(/(?<!^)[A-Z]/g, "-$&").toLowerCase();
          e.setAttribute("".concat(o), "initial")
        }))
    })), console.log(Object.keys(t), t), Object.keys(t).forEach((n => {
      if ("className" === n) t[n].split(" ").forEach((t => {
        e.classList.add(t)
      }));
      else if ("style" === n)
        if ("object" === typeof t[n])
          for (let r in t[n]) e.setAttribute("".concat(r), t[n][r]);
        else t[n].split(";").forEach((t => {
          const [n, r] = t.split(":"), o = n.replace(/(?<!^)[A-Z]/g, "-$&").toLowerCase();
          console.log(o, r), e.setAttribute("".concat(o), r)
        }));
      else if (n.startsWith("on")) e.addEventListener(n.substring(2).toLowerCase(), t[n]);
      else if ("object" === typeof t[n])
        for (let r in t[n]) e.setAttribute(r, t[n][r]);
      else e[n] = t[n]
    }))
  }
  const r = {
    render: function (e, t) {
      ! function (e, t) {
        l = {
          stateNode: t,
          element: {
            props: {
              children: [e]
            }
          },
          alternate: a
        }, u = l
      }(e, t)
    }
  };

  function o(e) {
    if (!e) return;
    let t = e.return.stateNode;
    if ("Delete" !== e.flag) {
      if (o(e.child), "Insert" === e.flag) {
        const n = t.childNodes[e.index];
        n ? t.insertBefore(e.stateNode, n) : t.appendChild(e.stateNode)
      } else if ("Update" === e.flag) {
        const {
          children: t,
          ...r
        } = e.element.props, o = Object.assign({}, e.alternate.element.props);
        delete o.children, n(e.stateNode, r, o)
      }
      o(e.sibling)
    } else {
      var r;
      "function" !== typeof (null === (r = e.element) || void 0 === r ? void 0 : r.type) && t.removeChild(e.stateNode)
    }
  }

  function s(e, t) {
    var n;
    let r = null,
      o = 0,
      s = null === e || void 0 === e || null === (n = e.alternate) || void 0 === n ? void 0 : n.child;
    for (; o < t.length || s;) {
      var u;
      const n = t[o];
      let a = null;
      (null === (u = s) || void 0 === u ? void 0 : u.element.type) && (null === n || void 0 === n ? void 0 : n.type) && s.element.type === n.type ? a = {
        stateNode: s.stateNode,
        element: {
          ...n,
          props: n.props
        },
        alternate: s,
        return: e,
        flag: "Update"
      } : ((n || 0 === n) && (a = {
        stateNode: null,
        element: n,
        alternate: null,
        return: e,
        flag: "Insert",
        index: o
      }), s && (s.flag = "Delete", l = s, i.push(l))), s && (s = s.sibling), 0 === o ? (e.child = a, r = a) : a && (r.sibling = a, r = a), o++
    }
    var l
  }
  let i = [],
    u = null,
    l = null,
    a = null;

  function c() {
    l = {
      stateNode: a.stateNode,
      element: a.element,
      alternate: a
    }, u = l
  }
  let f = null,
    p = 0;

  function d() {
    return f
  }

  function y() {
    return p++
  }

  function h(e) {
    var t, r, o;
    e.stateNode || (e.stateNode = function (e) {
      let t = null;
      if (!e && 0 !== e) return null;
      if ("string" === typeof e) return t = document.createTextNode(e), t;
      if ("number" === typeof e) return t = document.createTextNode(String(e)), t;
      const {
        type: r,
        props: {
          children: o,
          ...s
        }
      } = e;
      return "string" === typeof r ? t = document.createElement(r) : "function" === typeof r && (t = document.createDocumentFragment()), n(t, s), t
    }(e.element));
    let i = null === e || void 0 === e || null === (t = e.element) || void 0 === t || null === (r = t.props) || void 0 === r ? void 0 : r.children;
    const l = null === e || void 0 === e || null === (o = e.element) || void 0 === o ? void 0 : o.type,
      {
        type: a,
        props: c
      } = e.element;
    if ("function" === typeof l && (l.prototype.isReactComponent ? function (e) {
        let t;
        const n = e.alternate;
        if (n) {
          const r = n.component;
          e.component = r, r._updateProps(e.element.props), t = r.render()
        } else {
          const {
            type: n,
            props: r
          } = e.element, o = new n(r);
          e.component = o, t = o.render()
        }
        s(e, [t])
      }(e) : function (e) {
        f = e, f.hooks = [], p = 0;
        const {
          type: t,
          props: n
        } = e.element;
        s(e, [t(n)])
      }(e)), i || 0 === i) {
      s(e, (Array.isArray(i) ? i : [i]).flat())
    }
    if (console.log(e, "workInProgress"), e.child) u = e.child;
    else {
      let t = e;
      for (; t;) {
        if (t.sibling) return void(u = t.sibling);
        t = t.return
      }
      t || (u = null)
    }
  }
  requestIdleCallback((function e(t) {
    let n = !1;
    for (; u && !n;) console.log(u, "nextUnitOfWork"), h(u), n = t.timeRemaining() < 1;
    var r;
    !u && l && (r = l, i.forEach(o), o(r.child), a = l, l = null, i = []), requestIdleCallback(e)
  }));
  class v {
    constructor(e) {
      this.props = e
    }
  }
  v.prototype.isReactComponent = !0, v.prototype._updateProps = function (e) {
    this.props = e
  }, v.prototype.setState = function (e) {
    if ("function" === typeof e) {
      const t = e(this.props, this.state);
      this.state = {
        ...this.state,
        ...t
      }
    } else this.state = {
      ...this.state,
      ...e
    };
    c()
  };
  var m = function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var s = t[r] = {
      exports: {}
    };
    return e[r](s, s.exports, n), s.exports
  }(579);
  class b extends v {
    constructor(e) {
      super(e), this.addCount = () => {
        this.setState({
          count: this.state.count + 1
        })
      }, this.state = {
        count: 0
      }
    }
    render() {
      return (0, m.jsxs)("div", {
        className: "class-component",
        children: [(0, m.jsx)("div", {
          children: "this is a class Component"
        }), (0, m.jsxs)("div", {
          children: ["prop value is: ", this.props.value]
        }), (0, m.jsxs)("div", {
          children: ["count is: ", this.state.count]
        }), (0, m.jsx)("input", {
          type: "button",
          value: "add count",
          onClick: this.addCount
        })]
      })
    }
  }

  function _(e) {
    const [t, n] = function (e) {
      var t, n;
      const r = d(),
        o = y(),
        s = null === r || void 0 === r || null === (t = r.alternate) || void 0 === t || null === (n = t.hooks) || void 0 === n ? void 0 : n[o],
        i = {
          state: s ? s.state : e,
          queue: []
        };
      return (s ? s.queue : []).forEach((e => {
        i.state = "function" === typeof e ? e(i.state) : e
      })), r.hooks.push(i), [i.state, e => {
        i.queue.push(e), c()
      }]
    }(0);
    return (0, m.jsxs)("div", {
      className: "function-component",
      children: [(0, m.jsxs)("div", {
        children: ["count is: ", t]
      }), (0, m.jsx)("input", {
        type: "button",
        value: "add count",
        onClick: () => {
          n(t + 1)
        }
      }), (0, m.jsx)("div", {
        children: "this is a function Component"
      }), (0, m.jsxs)("div", {
        children: ["prop value is: ", e.value]
      })]
    })
  }
  const x = (0, m.jsxs)("div", {
    className: "deep1-box",
    children: [(0, m.jsx)(b, {
      value: 666
    }), (0, m.jsx)(_, {
      value: 100
    }), (0, m.jsxs)("div", {
      className: "deep2-box-1",
      children: [(0, m.jsx)("a", {
        href: "https://github.com/zh-lx/mini-react",
        children: "mini react link"
      }), (0, m.jsx)("p", {
        style: {
          color: "red"
        },
        children: " this is a red p"
      }), (0, m.jsxs)("div", {
        className: "deep3-box",
        children: [(0, m.jsx)("div", {
          children: "condition true"
        }), !1, (0, m.jsx)("input", {
          type: "button",
          value: "say hello",
          onClick: () => {
            alert("hello")
          }
        })]
      })]
    }), (0, m.jsx)("div", {
      className: "deep2-box-2",
      children: ["item1", "item2", "item3"].map((e => (0, m.jsx)("li", {
        children: e
      }, e)))
    })]
  });
  console.log(x, 'xxxxx')
  r.render(x, document.getElementById("root"))
})();
//# sourceMappingURL=main.81bcb216.js.map