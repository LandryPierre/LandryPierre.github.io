!(function e(t, n, s) {
  function c(r, a) {
    if (!n[r]) {
      if (!t[r]) {
        var l = "function" == typeof require && require;
        if (!a && l) return l(r, !0);
        if (i) return i(r, !0);
        var o = new Error("Cannot find module '" + r + "'");
        throw ((o.code = "MODULE_NOT_FOUND"), o);
      }
      var u = (n[r] = { exports: {} });
      t[r][0].call(
        u.exports,
        function (e) {
          var n = t[r][1][e];
          return c(n ? n : e);
        },
        u,
        u.exports,
        e,
        t,
        n,
        s
      );
    }
    return n[r].exports;
  }
  for (
    var i = "function" == typeof require && require, r = 0;
    r < s.length;
    r++
  )
    c(s[r]);
  return c;
})(
  {
    1: [
      function (e, t) {
        t.exports =
          "<header v-bind:class=\"{ 'show': store.isIntroPassed, 'black': theme === 'black' }\" >\n  <logo v-ref:logo></logo>\n  <menu></menu>\n</header>\n";
      },
      {},
    ],
    2: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("stores/store"),
          i = s(c),
          r = e("components/logo/logo"),
          a = s(r),
          l = e("components/menu/menu"),
          o = s(l),
          u = e("./header.html"),
          d = s(u);
        (n.default = {
          template: d.default,
          props: [],
          data: function () {
            return { id: "header", theme: "white", store: i.default };
          },
          watch: {
            "store.currentSectionId": function (e) {
              var t = this;
              (this.theme =
                "home" === e || "icons" === e || "archives" === e
                  ? "white"
                  : "black"),
                "home" !== e
                  ? TweenMax.delayedCall(2, function () {
                      t.$refs.logo.showBackBtn();
                    })
                  : this.$refs.logo.showName();
            },
          },
          components: { Logo: a.default, Menu: o.default },
          ready: function () {},
          methods: {},
        }),
          (t.exports = n.default);
      },
      {
        "./header.html": 1,
        "components/logo/logo": 4,
        "components/menu/menu": 10,
        "stores/store": 56,
      },
    ],
    3: [
      function (e, t) {
        t.exports =
          '<a v-link="{ path: \'/\' }" class="logo">\n  <div v-el:name class="name">Landry Pierre</div>\n  <div v-el:back class="back">Back to home</div>\n</a>\n';
      },
      {},
    ],
    4: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("./logo.html"),
          i = s(c);
        (n.default = {
          template: i.default,
          props: [],
          data: function () {
            return { id: "logo" };
          },
          components: {},
          ready: function () {},
          methods: {
            showBackBtn: function () {
              TweenMax.to(this.$els.name, 0.5, { opacity: 0 }),
                TweenMax.to(this.$els.back, 1, { opacity: 1, delay: 0.7 });
            },
            showName: function () {
              TweenMax.to(this.$els.back, 0.5, { opacity: 0 }),
                TweenMax.to(this.$els.name, 1, { opacity: 1, delay: 0.3 });
            },
          },
        }),
          (t.exports = n.default);
      },
      { "./logo.html": 3 },
    ],
    5: [
      function (e, t) {
        t.exports =
          '<header class="mobile" v-bind:class="{ \'show\': store.isIntroPassed, \'black\': theme === \'black\' }" >\n  <logo v-ref:logo></logo>\n  <div class="title">Portfolio Développeur Web</div>\n  <div class="menu">\n    <a v-link="{ path: \'/about\' }">About & contact</a>\n  </div>\n  \n</header>\n';
      },
      {},
    ],
    6: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("stores/store"),
          i = s(c),
          r = e("components/logo/logo"),
          a = s(r),
          l = e("components/menu/menu"),
          o = s(l),
          u = e("./m-header.html"),
          d = s(u);
        (n.default = {
          template: d.default,
          props: [],
          data: function () {
            return { id: "header", theme: "white", store: i.default };
          },
          watch: {
            "store.currentSectionId": function (e) {
              var t = this;
              (this.theme =
                "home" === e || "icons" === e || "archives" === e
                  ? "white"
                  : "black"),
                "home" !== e
                  ? TweenMax.delayedCall(2, function () {
                      t.$refs.logo.showBackBtn();
                    })
                  : this.$refs.logo.showName();
            },
          },
          components: { Logo: a.default, Menu: o.default },
          ready: function () {},
          methods: {},
        }),
          (t.exports = n.default);
      },
      {
        "./m-header.html": 5,
        "components/logo/logo": 4,
        "components/menu/menu": 10,
        "stores/store": 56,
      },
    ],
    7: [
      function (e, t) {
        t.exports =
          '<div class="m-project-detail-header"  v-bind:style="{ height: height + \'px\' }" >\n\n  <div class="wrapper">\n\n    <div class="line title"> <div class="inner" v-el:title v-bind:style="{ color: info.color }"> {{info.title}} </div> </div>\n    <div class="line date"> <div class="inner" v-el:year> <span class="label">Year</span> {{info.date}} </div> </div>\n    <div class="line client"> <div class="inner" v-el:client> <span class="label">Client</span> {{info.client}}</div> </div>\n    <div class="line role"> <div class="inner" v-el:role1> <span class="label">Role</span> {{info.role}} & {{info.role2}} </div> </div>\n\n  </div>\n\n</div>';
      },
      {},
    ],
    8: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("stores/store"),
          i = s(c),
          r = e("./m-project-header.html"),
          a = s(r),
          l = [];
        (n.default = {
          template: a.default,
          props: ["info"],
          data: function () {
            return { id: "project-header", height: 0, store: i.default };
          },
          components: {},
          ready: function () {
            (this.height = BrowserDetect.isMobile
              ? this.store.metrics.height - 50
              : this.store.metrics.height / 1.5),
              (l = this.$el.querySelectorAll(".inner"));
          },
          methods: {
            transitionIn: function () {
              for (var e = 0; e < l.length; e++) {
                var t = l[e];
                TweenMax.fromTo(
                  t,
                  1.5,
                  { y: 120, opacity: 0 },
                  { y: 0, opacity: 1, delay: 0.2 * e, ease: Power4.easeOut }
                );
              }
            },
            transitionOut: function () {},
          },
        }),
          (t.exports = n.default);
      },
      { "./m-project-header.html": 7, "stores/store": 56 },
    ],
    9: [
      function (e, t) {
        t.exports =
          '<ul class="menu">\n  <a v-link="{ path: \'/projects\' }">All works</a>\n  <a v-link="{ path: \'/icons\' }">Icons</a>\n  <a v-link="{ path: \'/archives\' }">Archives</a>\n  <a v-link="{ path: \'/about\' }">About</a>\n</ul>\n';
      },
      {},
    ],
    10: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("./menu.html"),
          i = s(c);
        (n.default = {
          template: i.default,
          props: [],
          data: function () {
            return { id: "menu" };
          },
          components: {},
          ready: function () {},
          methods: {},
        }),
          (t.exports = n.default);
      },
      { "./menu.html": 9 },
    ],
    11: [
      function (e, t) {
        t.exports =
          '<div class="parallax-cover" v-bind:class="{ \'clickable\': isVisible }">\n  <div class="text-wrapper">\n    <div class="text">\n      {{{ letters }}}\n    </div>\n  </div>\n  <div class="img-wrapper">\n    <slot></slot>\n  </div>\n\n</div>';
      },
      {},
    ],
    12: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function c(e) {
          for (
            var t = e.split(""), n = 100 / t.length, s = "", c = 0;
            c < t.length;
            c++
          ) {
            var i = t[c];
            s +=
              '<span class="letter" style="flex-basis: ' +
              n +
              '% "> <span class="inner">' +
              i +
              "</span> </span>";
          }
          return s;
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = e("stores/store"),
          r = e("utils/number-utils"),
          a = s(r),
          l = e("./parallax-cover.html"),
          o = s(l),
          u = !1,
          d = !0,
          p = !1,
          h = null,
          v = null,
          f = null,
          g = [],
          m = 0,
          w = {};
        (n.default = {
          template: o.default,
          props: ["text", "imgSrc"],
          data: function () {
            return { id: "parallax-cover", letters: "NEXT", isVisible: !1 };
          },
          components: {},
          ready: function () {
            this.onmove = this._onmove.bind(this);
          },
          methods: {
            init: function () {
              var e = this;
              (this.letters = c(this.text)),
                TweenMax.delayedCall(1, function () {
                  (h = e.$el.querySelector(".img-wrapper")),
                    (v = e.$el.querySelector(".text-wrapper")),
                    (g = e.$el.querySelectorAll(".letter .inner")),
                    (f = e.$el.querySelectorAll(" img")),
                    (m = e.$el.parentNode.offsetTop - i.metrics.height);
                }),
                (u = !0),
                this.addListeners();
            },
            release: function () {
              (u = !1), (d = !0), (p = !1), this.removeListeners();
            },
            addListeners: function () {},
            removeListeners: function () {},
            update: function (e) {
              u &&
                (e > m + i.metrics.height / 4 && d
                  ? this._transitionIn()
                  : e < m - i.metrics.height && p && this._transitionOut());
            },
            _transitionIn: function () {
              (this.isVisible = !0),
                window.addEventListener("mousemove", this.onmove),
                (d = !1),
                (p = !0);
              var e = 0.5 / g.length;
              if (f) {
                TweenMax.to(f, 1.5, {
                  opacity: 1,
                  scale: 1,
                  x: "-50%",
                  ease: Power4.easeOut,
                });
                for (var t = 0; t < g.length; t++)
                  TweenMax.fromTo(
                    g[t],
                    1.5,
                    { x: "0%", y: "100%" },
                    { opacity: 1, y: "-5%", ease: Power4.easeOut, delay: t * e }
                  );
              }
            },
            _transitionOut: function () {
              (this.isVisible = !1),
                window.removeEventListener("mousemove", this.onmove),
                (p = !1),
                (d = !0);
              var e = 0.3,
                t = e / g.length;
              TweenMax.to(f, 0.5, {
                opacity: 0,
                scale: 1.2,
                x: "-50%",
                ease: Power2.easeIn,
              });
              for (var n = 0.1 * s, s = 0; s < g.length; s++) {
                var n = t * s;
                TweenMax.to(g[s], 0.7, {
                  opacity: 0,
                  x: "-100%",
                  ease: Power2.easeIn,
                  delay: n,
                });
              }
            },
            _onmove: function (e) {
              if (!d && h) {
                (w.x = e.x), (w.y = e.y);
                var t = a.default.map(w.x, 0, i.metrics.width, -5, 5),
                  n = a.default.map(w.y, 0, i.metrics.height, -5, 5),
                  s =
                    "rotateX(" + n + "deg) rotateY(" + t + "deg) translateZ(0)";
                (h.style.webkitTransform = s), (h.style.transform = s);
              }
            },
          },
        }),
          (t.exports = n.default);
      },
      {
        "./parallax-cover.html": 11,
        "stores/store": 56,
        "utils/number-utils": 58,
      },
    ],
    13: [
      function (e, t) {
        t.exports =
          '<div class="project-detail-header"  v-bind:style="{ height: store.metrics.height + \'px\' }" >\n\n  <div class="wrapper">\n\n    <div class="line title-date-container">\n      <div class="title title-container mask">\n        <div class="inner" v-el:title v-bind:style="{ color: info.color }"> {{info.title}} </div>\n        <div class="label"></div>\n      </div>\n      <div class="date date-container mask">\n        <div class="inner" v-el:year> {{info.date}} </div>\n        <div class="label">Year</div>\n      </div>\n    </div>\n    <div class="line client-container mask">\n      <div class="client">\n        <div class="inner" v-el:client>{{info.client}}</div>\n        <div class="label">Agency</div>\n      </div>\n    </div>\n    <div class="line role1-container mask">\n      <div class="role1">\n        <div class="inner" v-el:role1>{{info.role}}</div>\n        <div class="label">Role</div>\n      </div>\n    </div>\n    <div class="line role2-container mask">\n      <div class="role2">\n        <div class="inner" v-el:role2>{{info.role2}}</div>\n        <div class="label"></div>\n      </div>\n    </div>\n\n  </div>\n\n\n\n  <div class="roll">\n    <div class="label">\n      <span class="letter"> <span class="letter-inner">l</span> </span>\n      <span class="letter"> <span class="letter-inner">e</span> </span>\n      <span class="letter"> <span class="letter-inner">t</span> </span>\n      <span class="letter"> <span class="letter-inner">\'</span> </span>\n      <span class="letter"> <span class="letter-inner">s</span> </span>\n      <span class="letter"> <span class="letter-inner">&nbsp;</span> </span>\n      <span class="letter"> <span class="letter-inner">s</span> </span>\n      <span class="letter"> <span class="letter-inner">c</span> </span>\n      <span class="letter"> <span class="letter-inner">r</span> </span>\n      <span class="letter"> <span class="letter-inner">o</span> </span>\n      <span class="letter"> <span class="letter-inner">l</span> </span>\n      <span class="letter"> <span class="letter-inner">l</span> </span>\n    </div>\n  </div>\n\n</div>';
      },
      {},
    ],
    14: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("stores/store"),
          i = s(c),
          r = e("./project-header.html"),
          a = s(r),
          l = [],
          o = [];
        (n.default = {
          template: a.default,
          props: ["info"],
          data: function () {
            return { id: "project-header", store: i.default };
          },
          components: {},
          ready: function () {
            (l = this.$el.querySelectorAll(".inner")),
              (o = this.$el.querySelectorAll(".label"));
          },
          methods: {
            transitionIn: function () {
              for (var e = 0; e < l.length; e++) {
                var t = l[e],
                  n = o[e];
                TweenMax.fromTo(
                  t,
                  1.5,
                  { y: 120, opacity: 0 },
                  {
                    y: 0,
                    z: 0,
                    opacity: 1,
                    delay: 0.2 * e,
                    ease: Power4.easeOut,
                  }
                ),
                  TweenMax.to(n, 1.5, {
                    y: 0,
                    z: 0,
                    opacity: 1,
                    delay: 0.2 + 0.2 * e,
                    ease: Power4.easeOut,
                  });
              }
              var s = this.$el.querySelector(".roll");
              s.classList.add("show");
            },
            transitionOut: function () {
              var e = this.$el.querySelector(".roll");
              e.classList.remove("show");
            },
          },
        }),
          (t.exports = n.default);
      },
      { "./project-header.html": 13, "stores/store": 56 },
    ],
    15: [
      function (e, t) {
        t.exports =
          "<headerr></headerr>\n<intro></intro>\n<router-view></router-view>";
      },
      {},
    ],
    16: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("stores/store"),
          i = s(c),
          r = e("sections/intro/intro"),
          a = s(r),
          l = e("components/header/header"),
          o = s(l),
          u = e("./desktop.html"),
          d = s(u);
        (n.default = {
          template: d.default,
          props: [],
          data: function () {
            return { store: i.default };
          },
          components: { Headerr: o.default, Intro: a.default },
          ready: function () {},
          methods: {},
        }),
          (t.exports = n.default);
      },
      {
        "./desktop.html": 15,
        "components/header/header": 2,
        "sections/intro/intro": 32,
        "stores/store": 56,
      },
    ],
    17: [
      function (e, t) {
        t.exports = "<intro></intro>\n<router-view></router-view>";
      },
      {},
    ],
    18: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("stores/store"),
          i = s(c),
          r = e("sections/m-intro/m-intro"),
          a = s(r),
          l = e("./mobile.html"),
          o = s(l);
        (n.default = {
          template: o.default,
          props: [],
          data: function () {
            return { store: i.default };
          },
          components: { Intro: a.default },
          ready: function () {},
          methods: {},
        }),
          (t.exports = n.default);
      },
      {
        "./mobile.html": 17,
        "sections/m-intro/m-intro": 38,
        "stores/store": 56,
      },
    ],
    19: [
      function (e) {
        "use strict";
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n() {
          r.default.isSectionTransitionning
            ? (r.default.scrollValueEased = r.default.scrollValue)
            : Math.abs(r.default.scrollValue - r.default.scrollValueEased) >
                0.1 &&
              (r.default.scrollValueEased +=
                0.06 * (r.default.scrollValue - r.default.scrollValueEased));
        }
        function s() {
          c(), l.default.start(w, "#app");
        }
        function c() {
          u.default.subscribe("scrolleasingRAF", n),
            window.addEventListener("resize", function () {
              (r.default.metrics.width = window.innerWidth),
                (r.default.metrics.height = window.innerHeight);
            }),
            window.addEventListener("scroll", function () {
              r.default.scrollValue = document.body.scrollTop;
            }),
            window.addEventListener("keydown", function (e) {
              var t = e.keyCode;
              90 === t && (g = !0),
                18 === t && (m = !0),
                g && m && (r.default.is = !0);
            }),
            window.addEventListener("keyup", function (e) {
              var t = e.keyCode;
              90 === t && (g = !1), 18 === t && (m = !1), (r.default.is = !1);
            }),
            window.addEventListener("mousemove", function (e) {
              e.preventDefault();
            });
        }
        var i = e("stores/store"),
          r = t(i),
          a = e("libs/router"),
          l = t(a),
          o = e("libs/raf"),
          u = t(o),
          d = e("devices/desktop/desktop"),
          p = t(d),
          h = e("devices/mobile/mobile"),
          v = t(h),
          f =
            BrowserDetect.isMobile || BrowserDetect.isTablet
              ? v.default
              : p.default,
          g = !1,
          m = !1,
          w = Vue.extend({ components: { device: f } });
        window.addEventListener("DOMContentLoaded", s);
      },
      {
        "devices/desktop/desktop": 16,
        "devices/mobile/mobile": 18,
        "libs/raf": 20,
        "libs/router": 21,
        "stores/store": 56,
      },
    ],
    20: [
      function (e, t, n) {
        "use strict";
        function s(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var s = t[n];
                (s.enumerable = s.enumerable || !1),
                  (s.configurable = !0),
                  "value" in s && (s.writable = !0),
                  Object.defineProperty(e, s.key, s);
              }
            }
            return function (t, n, s) {
              return n && e(t.prototype, n), s && e(t, s), t;
            };
          })(),
          i = (function () {
            return (
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.oRequestAnimationFrame ||
              window.msRequestAnimationFrame
            );
          })(),
          r = (function () {
            return (
              window.cancelAnimationFrame ||
              window.webkitCancelRequestAnimationFrame ||
              window.mozCancelRequestAnimationFrame ||
              window.oCancelRequestAnimationFrame ||
              window.msCancelRequestAnimationFrame
            );
          })(),
          a = void 0,
          l = Date.now(),
          o = l,
          u = 0,
          d = (function () {
            function e() {
              s(this, e),
                (this.subscribers = []),
                (this.update = this._update.bind(this)),
                (this.dt = 0),
                (this.framerate = 16),
                (a = i(this.update));
            }
            return (
              c(e, [
                {
                  key: "_update",
                  value: function () {
                    (l = Date.now()),
                      (this.dt = l - o),
                      (u += this.dt),
                      u >= this.framerate && ((u = 0), this._processUpdate()),
                      (o = l),
                      (a = i(this.update));
                  },
                },
                {
                  key: "_processUpdate",
                  value: function () {
                    for (var e = 0; e < this.subscribers.length; e++) {
                      var t = this.subscribers[e];
                      t[1]();
                    }
                  },
                },
                {
                  key: "subscribe",
                  value: function (e, t) {
                    this.subscribers.push([e, t]);
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    for (var t = 0; t < this.subscribers.length; t++)
                      this.subscribers[t][0] === e &&
                        this.subscribers.splice(t, 1);
                  },
                },
                {
                  key: "start",
                  value: function () {
                    a = i(this.update);
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    r(a);
                  },
                },
                {
                  key: "resume",
                  value: function () {
                    this.start();
                  },
                },
              ]),
              e
            );
          })(),
          p = new d();
        (n.default = p), (t.exports = n.default);
      },
      {},
    ],
    21: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c,
          i = e("vue-router"),
          r = s(i),
          a = e("stores/store"),
          l = s(a),
          o = e("sections/home/home"),
          u = s(o),
          d = e("sections/projects/projects"),
          p = s(d),
          h = e("sections/project-detail/project-detail"),
          v = s(h),
          f = e("sections/about/about"),
          g = s(f),
          m = e("sections/icons/icons"),
          w = s(m),
          y = e("sections/archives/archives"),
          b = s(y),
          x = e("sections/m-home/m-home"),
          M = s(x),
          j = e("sections/m-project-detail/m-project-detail"),
          C = s(j),
          k = e("sections/m-about/m-about"),
          _ = s(k);
        c =
          window.location.hostname.indexOf("localhost") > -1
            ? ""
            : "/monsieurcaillou";
        var L = new r.default({ history: !1, saveScrollPosition: !0 });
        L.map(
          BrowserDetect.isDesktop
            ? {
                "/": { component: u.default },
                projects: { component: p.default },
                "projects/:id": { component: v.default },
                "/about": { component: g.default },
                "/icons": { component: w.default },
                "/archives": { component: b.default },
              }
            : {
                "/": { component: M.default },
                "/projects/:id": { component: C.default },
                "/about": { component: _.default },
              }
        ),
          L.beforeEach(function (e) {
            return (
              e.to.params.id &&
                !l.default.isIntroPassed &&
                (l.default.currentProject =
                  l.default.projectsData[e.to.params.id]),
              l.default.isIntroPassed
                ? void (l.default.currentSection
                    ? l.default.currentSection
                        .transitionOut()
                        .then(function () {
                          e.next(),
                            e.to.params.id &&
                              ((l.default.currentProject =
                                l.default.projectsData[e.to.params.id]),
                              (l.default.currentProjectId =
                                l.default.currentProject.id)),
                            l.default.currentSection.transitionIn();
                        })
                    : (e.next(), l.default.currentSection.transitionIn()))
                : void e.next()
            );
          }),
          (n.default = L),
          (t.exports = n.default);
      },
      {
        "sections/about/about": 24,
        "sections/archives/archives": 26,
        "sections/home/home": 28,
        "sections/icons/icons": 30,
        "sections/m-about/m-about": 34,
        "sections/m-home/m-home": 36,
        "sections/m-project-detail/m-project-detail": 41,
        "sections/project-detail/project-detail": 52,
        "sections/projects/projects": 55,
        "stores/store": 56,
        "vue-router": 81,
      },
    ],
    22: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("stores/store"),
          i = s(c),
          r = {
            created: function () {
              this.transitionIn ||
                console.error(
                  "[RouterMixin created] no transitionIn on",
                  this.id,
                  "section"
                ),
                this.transitionOut ||
                  console.error(
                    "[RouterMixin created] no transitionOut on",
                    this.id,
                    "section"
                  );
            },
            destroyed: function () {
              this.call("removeListeners");
            },
            route: {
              data: function (e) {
                var t = e.next;
                (i.default.currentSection = this),
                  (i.default.currentSectionId = this.id),
                  t();
              },
            },
            methods: {
              call: function (e) {
                this[e] && this[e]();
              },
              show: function () {
                (this.$el.style.opacity = 1),
                  (this.$el.style.visibility = "visible");
              },
              hide: function () {
                (this.$el.style.opacity = 0),
                  (this.$el.style.visibility = "hidden");
              },
            },
          };
        (n.default = r), (t.exports = n.default);
      },
      { "stores/store": 56 },
    ],
    23: [
      function (e, t) {
        t.exports =
          '<section id="about">\n\n  <div class="shadow" v-bind:style="{ height: pageHeight + \'px\' }"></div>\n\n  <div class="content">\n\n    <div class="content-inner">\n\n      <div class="headline">\n        <div class="letter"> <div class="letter-inner">H</div></div>\n        <div class="info"><div class="info-inner">I\'m Pierre Nguyen based in Paris, France</div></div>\n        <div class="letter"> <div class="letter-inner">E</div></div>\n        <div class="info"><div class="info-inner">Available for freelance work</div></div>\n        <div class="letter"> <div class="letter-inner">Y</div></div>\n      </div>\n\n      <div class="skills-and-publications">\n\n        <div class="inner">\n\n          <span class="few-words-label"> Few words about me </span>\n\n          <div class="skills">\n\n            <ul class="skills">\n              <li class="label">Skills and focus</li>\n              <li>Art Direction</li>\n              <li>Interactive Design</li>\n              <li>User Experience</li>\n              <li>Branding</li>\n            </ul>\n\n            <ul class="agencies">\n              <li class="label">Agencies</li>\n              <li> <a href="http://www.akqa.com" target="_blank">AKQA</a> </li>\n              <li> <a href="http://www.betc.com/" target="_blank">BETC Digital</a> </li>\n              <li> <a href="http://spintank.fr/" target="_blank">Spintank</a> </li>\n              <li> <a href="http://www.octaveoctave.com/" target="_blank">Octave & Octave</a></li>\n              <li> <a href="http://www.pixelis.fr/" target="_blank">Pixelis</a> </li>\n            </ul>\n\n            <ul class="clients">\n              <li class="label">Recognition</li>\n              <li>Awwwards x2</li>\n              <li>FWA x2</li>\n            </ul>\n\n            <ul class="follow">\n              <li class="label">Follow</li>\n              <li> <a href="https://fr.linkedin.com/in/pierrenguyen1" target="_blank">Linkedin</a> </li>\n              <li> <a href="https://twitter.com/hellopierre" target="_blank">Twitter</a> </li>\n              <li> <a href="https://www.behance.net/monsieurCaillou" target="_blank">Behance</a> </li>\n            </ul>\n\n            <div class="clear"></div>\n\n          </div>\n\n          <!--<ul class="publications">\n            <li class="label">Publications</li>\n            <li>Top 10 best illustrators of 2008, Computer Arts UK — 2008</li>\n            <li>Bastardised, Bunch — 2008</li>\n            <li>Volt Magazine, UK — 2008</li>\n            <li>Gestalten.com — 2008</li>\n            <li>Slanted Magazine — 2009</li>\n            <li>Elle Magazine Korea — 2009</li>\n            <li>For Love and Money , Laurence King — 2009</li>\n            <li>Logo Design, Taschen — 2009</li>\n            <li>TypoLyrics : The Sound of Fonts, Birkhäuser Verlag — 2010</li>\n            <li>Exhibition, Pick Me Up Fair, Somerset House, London — 2010</li>\n            <li>Exhibition, AMV BBDO, London — 2010</li>\n            <li>Awwwards SOTD, Julie Lavergne — 2013</li>\n            <li>FWA MOTD, Monsieur Caillou — 2014</li>\n          </ul>-->\n\n        </div>\n\n\n      </div>\n\n      <div class="contact" v-bind:style="{ height: store.metrics.height + \'px\' }">\n\n        <div class="contact-inner">\n          <div class="contact-inner-left-right">\n            <div class="contact-inner-left">Drop me<br/>a line</div>\n            <a href="mailto:contact@monsieurcaillou.com" target="_blank" class="contact-inner-right">\n              <span>contact@monsieurcaillou.com</span>\n            </a>\n            \n          </div>\n\n        </div>\n\n      </div>\n\n      <div class="credits">\n        Code @ <a href="https://twitter.com/williamapan" target="_blank">William Mapan</a> \n      </div>\n\n    </div>\n\n  </div>\n\n  \n\n\n</section>\n';
      },
      {},
    ],
    24: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c,
          i = e("when"),
          r = s(i),
          a = e("mixins/router-mixin"),
          l = s(a),
          o = e("stores/store"),
          u = s(o),
          d = e("libs/raf"),
          p = s(d),
          h = e("./about.html"),
          v = s(h);
        (n.default = {
          template: v.default,
          mixins: [l.default],
          props: [],
          data: function () {
            return { id: "about", pageHeight: 2886, store: u.default };
          },
          components: {},
          ready: function () {
            this.onResize = this._onResize.bind(this);
          },
          methods: {
            transitionIn: function () {
              var e = this;
              (u.default.isSectionTransitionning = !0),
                (this.contentStyle = this.$el.querySelector(
                  ".content-inner"
                ).style),
                TweenLite.to(window, 1e-4, { scrollTo: { y: 0 } }),
                TweenMax.to(this.$el, 0.5, {
                  visibility: "visible",
                  opacity: 1,
                  onComplete: function () {
                    e._onResize(), (u.default.isSectionTransitionning = !1);
                  },
                });
              var t = this.$el.querySelectorAll(".letter-inner");
              TweenMax.staggerTo(t, 1, { y: 0, ease: Power2.easeOut }, 0.15);
              var n = this.$el.querySelectorAll(".info");
              TweenMax.staggerTo(
                n,
                1,
                { y: 0, opacity: 1, ease: Power2.easeOut },
                0.15
              ),
                p.default.subscribe(this.id, this.update.bind(this)),
                window.addEventListener("resize", this._onResize),
                (this.allLines = this.$el.querySelectorAll("li"));
              for (var s = 0; s < this.allLines.length; s++)
                this.allLines[s].posY = this.allLines[
                  s
                ].getBoundingClientRect().top;
            },
            transitionOut: function () {
              var e = this;
              return (
                TweenLite.to(window, 1e-4, {
                  scrollTo: { y: u.default.scrollValue },
                }),
                p.default.unsubscribe(this.id),
                window.removeEventListener("resize", this._onResize),
                r.default.promise(function (t) {
                  TweenMax.to(e.$el, 0.5, {
                    opacity: 0,
                    onComplete: function () {
                      t();
                    },
                  });
                })
              );
            },
            _onResize: function () {
              var e = this;
              c && clearTimeout(c),
                (c = setTimeout(function () {
                  e.pageHeight =
                    document.body.querySelector("#about .content-inner")
                      .offsetHeight + 300;
                }, 300));
            },
            update: function () {
              this._checkElements(this.allLines);
            },
            _checkElements: function (e) {
              if (e)
                for (var t = 0; t < e.length; t++)
                  u.default.scrollValueEased + u.default.metrics.height - 200 >
                    e[t].posY &&
                    !e[t].isVisible &&
                    ((e[t].isVisible = !0), e[t].classList.add("show"));
            },
          },
        }),
          (t.exports = n.default);
      },
      {
        "./about.html": 23,
        "libs/raf": 20,
        "mixins/router-mixin": 22,
        "stores/store": 56,
        when: 99,
      },
    ],
    25: [
      function (e, t) {
        t.exports =
          '<section id="archives">\n\n  <div class="shadow" v-bind:style="{ height: pageHeight + \'px\' }"></div>\n\n  <div class="content" v-el:content>\n\n    <div class="inner">\n      \n      <div class="void"></div>\n\n      <div class="img-container 2016">\n        <img src="./assets/images/archives/2016/ar01.jpg" />\n        <img src="./assets/images/archives/2016/ar02.jpg" />\n        <img src="./assets/images/archives/2016/ar03.jpg" />\n        <img src="./assets/images/archives/2016/ar04.jpg" />\n        <img src="./assets/images/archives/2016/ar05.jpg" />\n        <img src="./assets/images/archives/2016/ar06.jpg" />\n        <img src="./assets/images/archives/2016/ar07.jpg" />\n      </div>\n\n      <div class="img-container 2015">\n        <img src="./assets/images/archives/2015/ar08.jpg" />\n        <img src="./assets/images/archives/2015/ar09.jpg" />\n        <img src="./assets/images/archives/2015/ar10.jpg" />\n        <img src="./assets/images/archives/2015/ar11.jpg" />\n        <img src="./assets/images/archives/2015/ar12.jpg" />\n        <img src="./assets/images/archives/2015/ar13.jpg" />\n      </div>\n\n      <div class="img-container 2014">\n        <img src="./assets/images/archives/2014/ar14.jpg" />\n        <img src="./assets/images/archives/2014/ar15.jpg" />\n        <img src="./assets/images/archives/2014/ar16.jpg" />\n        <img src="./assets/images/archives/2014/ar17.jpg" />\n        <img src="./assets/images/archives/2014/ar18.jpg" />\n        <img src="./assets/images/archives/2014/ar19.jpg" />\n        <img src="./assets/images/archives/2014/ar20.jpg" />\n        <img src="./assets/images/archives/2014/ar21.jpg" />\n      </div>\n\n      <div class="img-container 2013">\n        <img src="./assets/images/archives/2013/ar22.jpg" />\n        <img src="./assets/images/archives/2013/ar23.jpg" />\n        <img src="./assets/images/archives/2013/ar24.jpg" />\n        <img src="./assets/images/archives/2013/ar25.jpg" />\n        <img src="./assets/images/archives/2013/ar26.jpg" />\n        <img src="./assets/images/archives/2013/ar27.jpg" />\n      </div>\n\n    </div>\n\n  </div>\n\n  \n\n  <div class="timeline" v-el:timeline>\n    <div class="progress" v-el:progress-bar></div>\n  </div>\n\n  <div class="dates-container" v-el:dates-container>\n    <ul v-el:dates class="y2016">\n      <li>MMXVI</li>\n      <li>MMXV</li>\n      <li>MMXIV</li>\n      <li>MMXIII</li>\n    </ul>\n  </div>\n\n</section>\n';
      },
      {},
    ],
    26: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("when"),
          i = s(c),
          r = e("mixins/router-mixin"),
          a = s(r),
          l = e("stores/store"),
          o = s(l),
          u = e("libs/raf"),
          d = s(u),
          p = e("./archives.html"),
          h = s(p),
          v = 16550,
          f = 2016;
        (n.default = {
          template: h.default,
          mixins: [a.default],
          props: [],
          data: function () {
            return { id: "archives", pageHeight: v };
          },
          components: {},
          ready: function () {
            this.dates = this.$el.querySelectorAll("li");
          },
          methods: {
            transitionIn: function () {
              var e = this;
              (o.default.isSectionTransitionning = !0),
                (this.contentStyle = this.$el.querySelector(".inner").style),
                (this.progressStyle = this.$el.querySelector(
                  ".progress"
                ).style),
                TweenLite.to(window, 1e-4, { scrollTo: { y: 0 } }),
                TweenMax.to(this.$el, 0.5, {
                  visibility: "visible",
                  opacity: 1,
                  onComplete: function () {
                    (e.pageHeight =
                      document.body.querySelector("#archives .inner")
                        .offsetHeight + 200),
                      (o.default.isSectionTransitionning = !1);
                  },
                }),
                TweenMax.to(this.$els.timeline, 1, {
                  scaleX: 1,
                  ease: Power4.easeInOut,
                }),
                TweenMax.to(this.$els.datesContainer, 1.5, {
                  opacity: 1,
                  y: 0,
                  ease: Power4.easeOut,
                  delay: 0.6,
                }),
                TweenMax.to(this.$els.content, 1.5, {
                  opacity: 1,
                  y: 0,
                  ease: Power4.easeOut,
                  delay: 0.8,
                }),
                d.default.subscribe(this.id, this.update.bind(this));
            },
            transitionOut: function () {
              var e = this;
              return (
                TweenLite.to(window, 1e-4, {
                  scrollTo: { y: o.default.scrollValue },
                }),
                i.default.promise(function (t) {
                  TweenMax.to(e.$el, 0.5, {
                    opacity: 0,
                    onComplete: function () {
                      d.default.unsubscribe(e.id), t();
                    },
                  });
                })
              );
            },
            update: function () {
              var e = o.default.scrollValueEased / v;
              this.$els.dates && this.updateDates(e),
                this.$els.progressBar && this.updateProgressBar(e);
            },
            updateDates: function (e) {
              0.241 > e && 2016 !== f
                ? ((f = 2016), (this.$els.dates.className = "y2016"))
                : e >= 0.241 && 0.42 > e && 2015 !== f
                ? ((f = 2015), (this.$els.dates.className = "y2015"))
                : e >= 0.42 && 0.7404 > e && 2014 !== f
                ? ((f = 2014), (this.$els.dates.className = "y2014"))
                : e >= 0.7404 &&
                  2013 !== f &&
                  ((f = 2013), (this.$els.dates.className = "y2013"));
            },
            updateProgressBar: function (e) {
              var t = "scaleX(" + e + ")";
              (this.progressStyle.webkitTransform = t),
                (this.progressStyle.transform = t);
            },
          },
        }),
          (t.exports = n.default);
      },
      {
        "./archives.html": 25,
        "libs/raf": 20,
        "mixins/router-mixin": 22,
        "stores/store": 56,
        when: 99,
      },
    ],
    27: [
      function (e, t) {
        t.exports =
          '<section id="home" @click="onClick">\n\n  <div class="slides" v-el:slides>\n\n    <div class="slide presentation">\n      <div class="title-wrapper">\n        <div class="title">\n          <span class="letter"> <span class="inner">P</span> </span>\n          <span class="letter"> <span class="inner">R</span> </span>\n          <span class="letter"> <span class="inner">E</span> </span>\n          <span class="letter"> <span class="inner">S</span> </span>\n          <span class="letter"> <span class="inner">E</span> </span>\n          <span class="letter"> <span class="inner">N</span> </span>\n          <span class="letter"> <span class="inner">T</span> </span>\n          <span class="letter"> <span class="inner">A</span> </span>\n          <span class="letter"> <span class="inner">T</span> </span>\n          <span class="letter"> <span class="inner">I</span> </span>\n          <span class="letter"> <span class="inner">O</span> </span>\n          <span class="letter"> <span class="inner">N</span> </span>\n        </div>\n      </div>\n      <div class="img">\n        <div class="img-wrapper">\n          <img src="./" alt="">\n        </div>\n      </div>\n    </div>\n\n    <div class="slide skills">\n      <div class="title-wrapper">\n        <div class="title">\n          <span class="letter"> <span class="inner">S</span> </span>\n          <span class="letter"> <span class="inner">K</span> </span>\n          <span class="letter"> <span class="inner">I</span> </span>\n          <span class="letter"> <span class="inner">L</span> </span>\n          <span class="letter"> <span class="inner">L</span> </span>\n          <span class="letter"> <span class="inner">S</span> </span>\n          </div>\n      </div>\n      <div class="img">\n        <div class="img-wrapper">\n          <img src="./assets/images/home/peugeot.png" alt="">\n        </div>\n      </div>\n    </div>\n\n    <div class="slide diplomes-formations">\n      <div class="title-wrapper">\n        <div class="title">\n          <span class="letter"> <span class="inner">D</span> </span>\n          <span class="letter"> <span class="inner">I</span> </span>\n          <span class="letter"> <span class="inner">P</span> </span>\n          <span class="letter"> <span class="inner">L</span> </span>\n          <span class="letter"> <span class="inner">Ô</span> </span>\n          <span class="letter"> <span class="inner">M</span> </span>\n          <span class="letter"> <span class="inner">E</span> </span>\n          <span class="letter"> <span class="inner">S</span> </span>\n          <span class="letter"> <span class="inner">-</span> </span>\n          <span class="letter"> <span class="inner">F</span> </span>\n          <span class="letter"> <span class="inner">O</span> </span>\n          <span class="letter"> <span class="inner">R</span> </span>\n          <span class="letter"> <span class="inner">M</span> </span>\n          <span class="letter"> <span class="inner">A</span> </span>\n          <span class="letter"> <span class="inner">T</span> </span>\n          <span class="letter"> <span class="inner">I</span> </span>\n          <span class="letter"> <span class="inner">O</span> </span>\n          <span class="letter"> <span class="inner">N</span> </span>\n          <span class="letter"> <span class="inner">S</span> </span>\n        </div>\n      </div>\n      <div class="img">\n        <div class="img-wrapper">\n          <img src="./assets/images/home/canalsat.png" alt="">\n        </div>\n      </div>\n    </div>\n\n    <div class="slide projets">\n      <div class="title-wrapper">\n        <div class="title">\n          <span class="letter"> <span class="inner">P</span> </span>\n          <span class="letter"> <span class="inner">R</span> </span>\n          <span class="letter"> <span class="inner">O</span> </span>\n          <span class="letter"> <span class="inner">J</span> </span>\n          <span class="letter"> <span class="inner">E</span> </span>\n          <span class="letter"> <span class="inner">T</span> </span>\n          <span class="letter"> <span class="inner">S</span> </span>\n        </div>\n      </div>\n      <div class="img">\n        <div class="img-wrapper">\n          <img src="./assets/images/home/poiray.png" alt="">\n        </div>\n      </div>\n    </div>\n\n    <div class="slide contact">\n      <div class="title-wrapper">\n        <div class="title">\n          <span class="letter"> <span class="inner">C</span> </span>\n          <span class="letter"> <span class="inner">O</span> </span>\n          <span class="letter"> <span class="inner">N</span> </span>\n          <span class="letter"> <span class="inner">T</span> </span>\n          <span class="letter"> <span class="inner">A</span> </span>\n          <span class="letter"> <span class="inner">C</span> </span>\n          <span class="letter"> <span class="inner">T</span> </span>\n        </div>\n      </div>\n      <div class="img">\n        <div class="img-wrapper">\n          <img src="./assets/images/home/tignes.png" alt="">\n        </div>\n      </div>\n    </div>\n\n    <div class="slide hermes">\n      <div class="title-wrapper">\n        <div class="title">\n          <span class="letter"> <span class="inner">H</span> </span>\n          <span class="letter"> <span class="inner">E</span> </span>\n          <span class="letter"> <span class="inner">R</span> </span>\n          <span class="letter"> <span class="inner">M</span> </span>\n          <span class="letter"> <span class="inner">E</span> </span>\n          <span class="letter"> <span class="inner">S</span> </span>\n        </div>\n      </div>\n      <div class="img">\n        <div class="img-wrapper">\n          <img src="./assets/images/home/hermes.png" alt="">\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class="instructions" v-el:instructions>\n    <div class="scroll">Scroll to navigate</div>\n    <!--<div class="click">Click to explore a project</div>-->\n  </div>\n\n</section>\n';
      },
      {},
    ],
    28: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("when"),
          i = s(c),
          r = e("stores/store"),
          a = (s(r), e("mixins/router-mixin")),
          l = s(a),
          o = e("utils/number-utils"),
          u = s(o),
          d = e("libs/router"),
          p = s(d),
          h = e("./home.html"),
          v = s(h),
          f = [],
          g = 0,
          m = 0,
          w = null,
          y = null,
          b = null,
          x = [],
          M = 0,
          j = !1,
          C = { x: 0, y: 0 },
          k = "up",
          _ = ["présentation", "skills", "diplômes-formations", "projet", "contact"],
          L = window.innerWidth,
          z = window.innerHeight,
          T = function () {};
        (n.default = {
          template: v.default,
          mixins: [l.default],
          props: [],
          data: function () {
            return { id: "home" };
          },
          components: {},
          ready: function () {
            (f = this.$el.querySelectorAll(".slide")),
              (w = f[g]),
              (this.onMove = this._onMove.bind(this)),
              (this.onWheel = this._onWheel.bind(this)),
              this.addListeners();
          },
          methods: {
            addListeners: function () {
              window.addEventListener("mousemove", this.onMove),
                window.addEventListener("DOMMouseScroll", this.onWheel),
                window.addEventListener("mousewheel", this.onWheel);
            },
            removeListeners: function () {
              window.removeEventListener("mousemove", this.onMove),
                window.removeEventListener("DOMMouseScroll", this.onWheel),
                window.removeEventListener("mousewheel", this.onWheel);
            },
            transitionIn: function () {
              this.show(),
                this._transitionInSlide(g),
                this.$els.instructions.classList.add("show");
            },
            transitionOut: function () {
              var e = this;
              return (
                this.$els.instructions.classList.remove("show"),
                this._transitionOutSlide("left"),
                i.default.promise(function (t) {
                  TweenMax.to(e.$el, 0.5, {
                    opacity: 0,
                    delay: 0.5,
                    onComplete: function () {
                      t();
                    },
                  });
                })
              );
            },
            _transitionInSlide: function () {
              w && w.classList.remove("active"),
                (g = m),
                (w = f[g]),
                (y = w.querySelector(".img-wrapper")),
                (b = w.querySelector(".title-wrapper")),
                (x = w.querySelectorAll(".letter .inner")),
                w.classList.add("active");
              var e = w.querySelector("img"),
                t = (w.querySelector(".title"), 0.5 / x.length),
                n = T;
              TweenMax.fromTo(
                e,
                1.5,
                { scale: 1.2 },
                { opacity: 1, scale: 1, x: "-50%", ease: Power4.easeOut }
              );
              for (
                var s = "down" === k ? "-100%" : "100%", c = 0;
                c < x.length;
                c++
              )
                c === x.length - 2 && (n = this.onTransitionInSlideEnded),
                  TweenMax.fromTo(
                    x[c],
                    1.5,
                    { opacity: 0, y: s },
                    {
                      opacity: 1,
                      y: "-5%",
                      ease: Power4.easeOut,
                      delay: c * t,
                      onComplete: n,
                    }
                  );
            },
            onTransitionInSlideEnded: function () {
              j = !0;
            },
            _transitionOutSlide: function () {
              var e,
                t =
                  arguments.length <= 0 || void 0 === arguments[0]
                    ? "up"
                    : arguments[0],
                n = w.querySelector("img"),
                s = (w.querySelector(".title"), 0.3),
                c = s / x.length,
                r = "left" === t ? "-100%" : 0;
              return (
                "up" === t && (e = "-100%"),
                "down" === t && (e = "100%"),
                i.default.promise(function (i) {
                  TweenMax.to(n, 0.5, {
                    opacity: 0,
                    x: "-50%",
                    ease: Power2.easeIn,
                  });
                  for (var a = 0.1 * o, l = T, o = 0; o < x.length; o++) {
                    var u = Math.abs(o - M) / (x.length - 1),
                      a = s * u;
                    "left" === t && (a = c * o),
                      o === x.length - 2 && (l = i),
                      TweenMax.to(x[o], 0.7, {
                        opacity: 0,
                        x: r,
                        y: e,
                        ease: Power2.easeIn,
                        delay: a,
                        onComplete: l,
                      });
                  }
                })
              );
            },
            onClick: function (e) {
              e.preventDefault(), p.default.go("/projects/" + _[g]);
            },
            _onMove: function (e) {
              if (y) {
                (C.x = e.pageX), (C.y = e.pageY);
                var t = u.default.map(C.x, 0, L, -5, 5),
                  n = u.default.map(C.y, 0, z, -5, 5),
                  s =
                    "rotateX(" + n + "deg) rotateY(" + t + "deg) translateZ(0)";
                (y.style.webkitTransform = s),
                  (y.style.transform = s),
                  (M = Math.floor(u.default.map(C.x, 0, L, 0, x.length)));
              }
            },
            _onWheel: function (e) {
              if ((e.preventDefault(), j)) {
                j = !1;
                var t = e.wheelDelta || -1 * e.detail;
                0 > t
                  ? ((k = "up"), (m = g + 1), m > f.length - 1 && (m = 0))
                  : ((k = "down"), (m = g - 1), 0 > m && (m = f.length - 1)),
                  this._transitionOutSlide(k).then(this._transitionInSlide);
              }
            },
          },
        }),
          (t.exports = n.default);
      },
      {
        "./home.html": 27,
        "libs/router": 21,
        "mixins/router-mixin": 22,
        "stores/store": 56,
        "utils/number-utils": 58,
        when: 99,
      },
    ],
    29: [
      function (e, t) {
        t.exports =
          '<section id="icons">\n\n	<!--<div class="shadow" v-bind:style="{ height: pageHeight + \'px\' }"></div>-->\n\n		<div class="content">\n\n			<div class="inner">\n			\n			<span class="page-desc">Icons 2007-2016</span>\n\n			<h1>\n				<div class="title-line" > <div class="title-line-inner">GOD</div> </div>\n				<div class="title-line" > <div class="title-line-inner">IS IN</div> </div>\n				<div class="title-line" > <div class="title-line-inner">THE</div> </div>\n				<div class="title-line" > <div class="title-line-inner">DETAILS</div> </div>\n			</h1>\n\n			<div class="wrapper">\n\n				<div class="icons-1">\n					<div class="block-1">\n						<div class="coloredBlock"> <div class="background"></div> </div>\n						<div class="centered">\n							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 88.1 37.9" style="enable-background:new 0 0 88.1 37.9;" xml:space="preserve">\n		<path class="st0" d="M87,22.1c0-0.4-0.3-2.3-1.5-3.6V14c0-0.7,0-2-1.9-3.7c-1.1-1-2.7-2.8-3.6-3.8c0.1-0.4,0.1-0.8,0-1.2\n			c-0.2-0.5-0.6-1.3-1.9-1.6C71.2,1.8,63.5,0.8,55,0.8C45.8,0.8,39.2,2,39,2l-0.3,0l-15.2,8.4c-0.9,0.2-3.6,0.8-12,2.8\n			c-6.8,1.6-9.2,6.1-10,9.6c-0.9,3.7-0.1,6.9-0.1,7.1l0.2,1.2l10.6,2h0.6c0.7,1.2,1.5,1.8,2.6,2.5c1.4,0.9,2.9,1.3,4.6,1.3\n			c1.6,0,3.2-0.4,4.6-1.2c1.1-0.7,1.9-1.4,2.6-2.6h37.4c0.7,1.2,1.5,1.8,2.6,2.5c1.4,0.9,2.9,1.3,4.6,1.3c3.1,0,6-1.8,7.4-4.5l4.6-1\n			l0.1-0.1c0.3-0.1,1.1-0.5,1.9-2c0.9-1.6,1.3-4,1.3-7L87,22.1L87,22.1z M20,33.2c-1.9,0-3.6-1.1-4.4-2.8l-0.2,0.1l0,0\n			c-0.3-0.7-0.5-1.4-0.5-2.1c0-2.8,2.3-5.1,5.1-5.1c2.8,0,5.1,2.3,5.1,5.1c0,0.8-0.2,1.5-0.5,2.1l0,0l-0.2-0.1\n			C23.6,32.1,21.9,33.2,20,33.2z M67.4,30.4l-0.2,0.1l0,0c-0.3-0.7-0.5-1.4-0.5-2.1c0-2.8,2.3-5.1,5.1-5.1c2.8,0,5,2.3,5,5.1\n			c0,0.7-0.1,1.4-0.4,2l0,0l-0.2-0.1c-0.8,1.8-2.5,2.9-4.5,2.9C69.9,33.2,68.2,32.1,67.4,30.4z M82.7,28.3L80,28.9c0,0,0,0,0,0\n			c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.3c0-4.5-3.7-8.2-8.2-8.2c-4.5,0-8.2,3.7-8.2,8.2c0,0.1,0,0.2,0,0.3\n			c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0c0,0.1,0,0.3,0,0.4c0,0,0,0.2,0,0.2H28.2\n			c0,0,0-0.2,0-0.2c0-0.1,0-0.2,0-0.3c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.3c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1\n			c0-0.1,0-0.2,0-0.3v0.4h0.1c0-4.7-3.7-8.2-8.2-8.2c-4.5,0-8.2,3.5-8.2,8.2h0h0c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0.1,0,0.1,0,0.1\n			c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0.1,0,0.2,0,0.2c0,0,0,0,0,0l-7.5-1.3c-0.1-1.1-0.2-2.9,0.3-4.7\n			c0.9-3.8,3.5-6.1,7.6-7.1c9.5-2.3,11.5-2.6,11.9-2.6h0.3l15.3-8.5c1.3-0.2,7.3-1.1,15.3-1.1c7.8,0,15,0.8,21.4,2.4l-0.3,0.4l1,1\n			c0.1,0.1,2.7,3.1,4.5,4.7c0.7,0.7,0.5,1.1,0.9,1.2V20l0.8,0.5c0.3,0.2,0.7,1.2,0.8,1.9C84,26.7,83,28,82.7,28.3z"/>\n		</svg> </div>\n						</div>\n\n					<div class="block-2">\n						<div class="coloredBlock"></div>\n						<div class="centered">\n							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 49.8 49.9" style="enable-background:new 0 0 49.8 49.9;" xml:space="preserve">\n		<style type="text/css">\n			.st0{fill:#361114;}\n			.st1{fill:none;}\n		</style>\n		<path class="st0" d="M39.8,32.6L23.6,22.4c-0.3-0.2-0.6-0.2-0.8-0.1l-1.1,0.5c-0.2,0.1-0.4,0.3-0.5,0.6c-0.1,0.2,0,0.5,0.1,0.7\n			l2.9,4.4c0.2,0.3,0.5,0.4,0.8,0.4l3.3-0.1l10.6,5.3c0.1,0.1,0.3,0.1,0.4,0.1c0.3,0,0.6-0.2,0.8-0.4C40.3,33.3,40.2,32.8,39.8,32.6z"\n			/>\n		<path class="st0" d="M25,1C11.8,1,1,11.8,1,25c0,13.2,10.8,24,24,24s24-10.8,24-24C49,11.8,38.2,1,25,1z M25,44.6\n			C14.2,44.6,5.4,35.8,5.4,25C5.4,14.2,14.2,5.4,25,5.4S44.6,14.2,44.6,25C44.6,35.8,35.8,44.6,25,44.6z"/>\n		<path class="st0" d="M41.9,22.4c-0.1-0.7-0.8-1.2-1.6-1.1l-2.7,0.5c-0.7,0.1-1.2,0.8-1.1,1.6c0.1,0.7,0.7,1.1,1.3,1.1\n			c0.1,0,0.2,0,0.2,0l2.7-0.5C41.6,23.8,42.1,23.1,41.9,22.4z"/>\n		<path class="st0" d="M32.8,16.4c0.3,0.2,0.6,0.3,0.9,0.3c0.4,0,0.8-0.2,1-0.5l1.8-2.1c0.5-0.6,0.4-1.4-0.2-1.9\n			c-0.6-0.5-1.4-0.4-1.9,0.2l-1.8,2.1C32.2,15.1,32.3,16,32.8,16.4z"/>\n		<path class="st1" d="M25.6,13.7C25.6,13.7,25.6,13.7,25.6,13.7c0.8,0,1.4-0.7,1.4-1.4l0-2.7c0-0.7-0.6-1.4-1.3-1.4c0,0,0,0,0,0\n			c-0.7,0-1.4,0.6-1.4,1.3l0,2.8C24.2,13.1,24.8,13.7,25.6,13.7z"/>\n		<path class="st0" d="M16.6,12c-0.5-0.6-1.3-0.7-1.9-0.2c-0.6,0.5-0.7,1.3-0.2,1.9l1.7,2.1c0.3,0.3,0.7,0.5,1,0.5\n			c0.3,0,0.6-0.1,0.9-0.3c0.6-0.5,0.7-1.3,0.2-1.9L16.6,12z"/>\n		<path class="st0" d="M12.7,23.8c0.6,0,1.2-0.5,1.3-1.1c0.1-0.7-0.4-1.4-1.1-1.6l-2.7-0.5c-0.7-0.1-1.4,0.4-1.6,1.1\n			c-0.1,0.7,0.4,1.4,1.1,1.6l2.7,0.5C12.5,23.8,12.6,23.8,12.7,23.8z"/>\n		<path class="st0" d="M13.3,30L11,31.3c-0.7,0.4-0.9,1.2-0.5,1.9c0.3,0.4,0.7,0.7,1.2,0.7c0.2,0,0.5-0.1,0.7-0.2l2.4-1.4\n			c0.7-0.4,0.9-1.2,0.5-1.9C14.8,29.8,14,29.6,13.3,30z"/>\n		</svg> </div>\n						</div>\n\n					<div class="block-3">\n						<span class="label">Automotive</span>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 491.5 177.8" style="enable-background:new 0 0 491.5 177.8;" xml:space="preserve">\n		<path class="st0" d="M468,160.3c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c1.1,0,2,0.9,2,2c0,0.4,0.3,0.7,0.7,0.7\n			c0.4,0,0.7-0.3,0.7-0.7C471.5,161.8,469.9,160.3,468,160.3z"/>\n		<path class="st0" d="M468.5,157.9c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c2.3,0,4.2,1.8,4.2,4.1c0,0.4,0.3,0.7,0.7,0.7\n			c0.4,0,0.7-0.3,0.7-0.7C474.2,160.3,471.6,157.9,468.5,157.9z"/>\n		<path class="st0" d="M468.7,155.3c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c1.8,0,3.5,0.7,4.7,1.9c1.3,1.2,2,2.8,2,4.6\n			c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7c0-2.1-0.8-4.1-2.4-5.5C472.9,156.1,470.8,155.3,468.7,155.3z"/>\n		<path class="st0" d="M468.7,170.8L468.7,170.8L468.7,170.8l-0.8-3l0-0.2l-0.2,0l-2.4-0.3c-2.3-1.3-4.8-2-7.4-2\n			c-1.2,0-2.4,0.1-3.5,0.4c-0.9,0.2-1.9,0.5-2.8,0.9c-1.2,0.5-2,1-2.4,1.2c-2.6,0.2-4.4,0.6-5.4,1.4c-1,0.7-1,1.4-1,1.5v1.5\n			c0,0.3,0.2,0.7,0.8,0.8c0.2,0.1,0.4,0.1,0.4,0.1l2.4,0.2l0.1,0l0,0h0.2c0.4,0.8,1.1,1.1,2.1,1.1s1.7-0.4,2.1-1.1h10.4\n			c0.4,0.8,1.1,1.1,2.1,1.1c1,0,1.9-0.6,2.2-1.5c0.5,0,1.3-0.1,1.8-0.1c0.6-0.1,1.1-0.5,1.3-1.1C468.7,171.3,468.7,170.9,468.7,170.8\n			L468.7,170.8z M463.9,169.9L463.9,169.9C463.9,169.9,463.8,169.9,463.9,169.9L463.9,169.9L463.9,169.9c-0.1,0-0.1,0-0.1,0l0,0\n			c0,0,0,0,0,0l0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0-0.1,0\n			c-1.3,0-2.3,0.9-2.4,2.2h-9.8c-0.1-1.3-1.1-2.2-2.4-2.2c-1.3,0-2.3,1-2.4,2.2l-2.4-0.2c0,0,0,0,0,0v-1l0.1,0l0-0.1\n			c0,0,0.1-0.3,0.6-0.6c1.1-0.7,3.2-1,4.8-1.1l0.1,0l0.1,0l0.1,0l0.1-0.1c0,0,0.9-0.6,2.3-1.2c0.8-0.4,1.7-0.6,2.6-0.8\n			c1.1-0.2,2.2-0.4,3.2-0.4c2.4,0,4.7,0.6,6.8,1.9l0.1,0l0.1,0l0.1,0l1.9,0.2l0.6,2.3c0,0.1,0,0.2,0,0.4c-0.1,0.2-0.1,0.2-0.2,0.2\n			c-0.4,0-1,0.1-1.5,0.1c-0.2-0.8-0.8-1.5-1.7-1.7l0,0h0C464,169.9,463.9,169.9,463.9,169.9C463.9,169.9,463.9,169.9,463.9,169.9\n			L463.9,169.9z M463.3,171.1c0.6,0,1.1,0.5,1.1,1c0,0,0,0.1,0,0.1l0,0.1c-0.1,0.5-0.5,0.8-1.1,0.8c-0.5,0-0.9-0.3-1-0.7\n			c0-0.1,0-0.2,0-0.2c0-0.1,0-0.1,0-0.1C462.3,171.6,462.7,171.1,463.3,171.1z M447.7,172.4C447.7,172.3,447.7,172.3,447.7,172.4\n			c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.6,0.5-1,1.1-1c0.6,0,1.1,0.5,1.1,1c0,0.1,0,0.2,0,0.3c-0.1,0.4-0.6,0.7-1,0.7\n			c-0.5,0-0.9-0.3-1-0.7L447.7,172.4L447.7,172.4z"/>\n		<path class="st0" d="M485.2,152.1l-1.6,1.6l-1-0.9l1.9-1.8c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.4-0.9-3.3,0l-1.9,1.8l-1-0.9l1.6-1.6\n			l-3.7-3.6l-4.2,4.1l3.7,3.6l1.7-1.6l1,0.9l-1.9,1.8c-0.9,0.9-0.9,2.3,0,3.2c0.9,0.9,2.4,0.9,3.3,0l1.9-1.8l1,0.9l-1.7,1.6l3.7,3.6\n			l4.2-4.1L485.2,152.1z M475.7,149.3l-1.9-1.8l0.7-0.7l1.9,1.8L475.7,149.3z M477.3,147.7l-1.9-1.8l0.7-0.7l1.9,1.8L477.3,147.7z\n			M478.8,154.6c-0.4,0.4-1.1,0.4-1.5,0c-0.4-0.4-0.4-1,0-1.4l4.8-4.6c0.4-0.4,1.1-0.4,1.5,0c0.4,0.4,0.4,1,0,1.4L478.8,154.6z\n			M484.7,157.9l-1.9-1.8l0.7-0.7l1.9,1.8L484.7,157.9z M484.5,154.6l0.7-0.7l1.9,1.8l-0.7,0.7L484.5,154.6z"/>\n		<path class="st0" d="M249.4,165.8c-0.1-0.2-0.2-0.5-0.4-0.6c-0.1,0-0.3-0.1-0.5,0c-0.5,0.3-1.7,0.6-3.2,0.6c-1.4,0-2.7-0.3-3.2-0.6\n			c-0.2-0.1-0.4-0.1-0.5,0c-0.2,0.1-0.3,0.3-0.4,0.6c-0.1,0.2-0.1,0.5-0.1,0.5c0,0,0,0,0,0c0,0,0,0,0,0.1c0.2,0.6,1,0.9,2.3,1.2\n			c1,0.2,1.8,0.2,1.9,0.2c0,0,0.9,0,1.9-0.2c0.7-0.1,1.2-0.2,1.6-0.4c0.4-0.2,0.6-0.4,0.7-0.7c0,0,0,0,0,0c0,0,0-0.1,0-0.2\n			c0,0,0,0,0,0C249.5,166.3,249.5,166.1,249.4,165.8z"/>\n		<path class="st0" d="M240.9,151.3l0.8,3.4c0,0.2,0.2,0.3,0.4,0.2c1-0.2,2.1-0.3,3.2-0.3c1.1,0,2.2,0.1,3.2,0.3\n			c0.2,0,0.3-0.1,0.4-0.2l0.8-3.4c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-0.2-0.1-0.8-0.7-1.3c-0.7-0.6-2-0.9-3.7-0.9c0,0,0,0,0,0h0h0\n			c0,0,0,0,0,0c-1.7,0-2.9,0.3-3.7,0.9c-0.6,0.5-0.7,1.1-0.7,1.3C240.9,151.3,240.9,151.3,240.9,151.3\n			C240.9,151.3,240.9,151.3,240.9,151.3z"/>\n		<path class="st0" d="M238.6,151C238.6,151,238.6,151,238.6,151l0,12c0,0.2-0.1,1.1,0,2.3c0.2,1.7,0.7,2.9,1.5,3.5c0,0,0,0,0.1,0\n			c0.6,0.4,1.5,0.7,2.7,0.9c1.3,0.2,2.5,0.3,2.5,0.3l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0c0,0,1.1,0,2.4-0.2c0.7-0.1,1.4-0.3,1.9-0.5\n			c0.7-0.3,1.2-0.6,1.5-1c0,0,0,0,0-0.1c0,0,0,0,0,0c0.5-0.7,0.8-1.6,0.9-2.9c0.1-1.1,0-2.1,0-2.3V151c0,0,0,0,0,0l0,0\n			c0-0.2,0-1.1,0-4c0-2.4-1.3-3.6-2.4-4.3c-1.2-0.7-2.3-0.8-2.4-0.9l0,0c0,0,0,0,0,0h-3.8c0,0,0,0,0,0l0,0c0,0-1.2,0.2-2.4,0.9\n			c-1.1,0.7-2.4,1.9-2.4,4.3C238.6,149.9,238.6,150.8,238.6,151L238.6,151z M239.7,147c0-1.4,0.6-2.5,1.8-3.3c0.9-0.5,1.8-0.7,1.9-0.7\n			h3.7c0.2,0,1.1,0.2,1.9,0.7c1.2,0.7,1.8,1.8,1.8,3.3c0,1.7,0,2.9,0,3.6c0,0.3,0,0.5,0,0.6V163c0,0,0,0,0,0l0,0c0,0,0.1,1,0,2.1\n			c-0.1,1.4-0.5,2.3-1,2.7c0,0,0,0,0,0c-0.5,0.3-1.3,0.6-2.3,0.7c-1.1,0.2-2.1,0.2-2.2,0.2c-0.1,0-1.2-0.1-2.4-0.3\n			c-0.7-0.1-1.3-0.3-1.7-0.5c-0.4-0.2-0.7-0.4-0.8-0.6c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.3-0.5-0.6-1.3-0.7-2.3\n			c-0.1-1.1,0-2.1,0-2.1l0,0c0,0,0,0,0,0v-11.8c0-0.1,0-0.3,0-0.6C239.8,149.9,239.7,148.7,239.7,147z"/>\n		<path class="st0" d="M245.3,173.1c1.3,0,2.6-0.2,3.7-0.6c0,0,0.1,0,0.1-0.1c0,0,0-0.1,0-0.1l-0.3-0.9c0-0.1-0.1-0.1-0.2-0.1\n			c0,0,0,0-0.1,0c-1,0.3-2.1,0.5-3.2,0.5c-1.1,0-2.3-0.2-3.2-0.5c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0.1l-0.3,0.9\n			c0,0.1,0,0.2,0.1,0.2C242.7,172.9,244,173.1,245.3,173.1z"/>\n		<path class="st0" d="M240.9,173.7c-0.1,0-0.1,0-0.1,0.1l-0.5,0.9c0,0,0,0.1,0,0.1c0,0,0,0.1,0.1,0.1c1.4,0.7,3.1,1.1,5,1.1\n			c1.9,0,3.6-0.4,5-1.1c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0-0.1l-0.5-0.9c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1,0\n			c-1.2,0.6-2.7,0.9-4.4,0.9C243.7,174.6,242.1,174.3,240.9,173.7C240.9,173.7,240.9,173.7,240.9,173.7z"/>\n		<path class="st0" d="M25.9,148.7H22c-3.1,0-5.6,2.6-5.6,5.7v0l0.7,13.5c0,1.5,0.6,3,1.6,4c1.1,1.1,2.4,1.7,3.9,1.7h2.8\n			c1.5,0,2.9-0.6,3.9-1.7c1.1-1.1,1.6-2.5,1.6-4l0.4-13.5l0,0C31.5,151.3,29,148.7,25.9,148.7z M29.2,167.9L29.2,167.9\n			c0,1-0.4,2-1.1,2.7c-0.7,0.7-1.6,1.1-2.6,1.1h-2.8c-1,0-2-0.4-2.7-1.1c-0.7-0.7-1.1-1.7-1.1-2.7v0l-0.7-13.6c0-2.1,1.7-3.9,3.8-3.9\n			h3.9c2.1,0,3.7,1.8,3.7,3.9L29.2,167.9z"/>\n		<path class="st0" d="M24,153.8c-1.8,0-3.3,1.5-3.3,3.4c0,1.9,1.5,3.4,3.3,3.4c1.8,0,3.3-1.5,3.3-3.4C27.3,155.4,25.8,153.8,24,153.8\n			z M24,158.7c-0.8,0-1.5-0.7-1.5-1.5c0-0.8,0.7-1.5,1.5-1.5c0.8,0,1.5,0.7,1.5,1.5C25.4,158.1,24.8,158.7,24,158.7z"/>\n		<path class="st0" d="M24,164c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4s1.4-0.6,1.4-1.4C25.3,164.6,24.7,164,24,164z"/>\n		<path class="st0" d="M19.3,145.3c0-0.5-0.4-1-0.9-1c-3.3,0-5.9,2.7-5.9,6.1c0,0.5,0.4,1,0.9,1c0.5,0,0.9-0.4,0.9-1\n			c0-2.3,1.8-4.2,4.1-4.2C18.9,146.3,19.3,145.8,19.3,145.3z"/>\n		<path class="st0" d="M18.7,142.3c0.5,0,0.9-0.4,0.9-1c0-0.5-0.4-1-0.9-1c-5.5,0-9.9,4.5-9.9,10.1c0,0.5,0.4,1,0.9,1\n			c0.5,0,0.9-0.4,0.9-1C10.7,146,14.3,142.3,18.7,142.3z"/>\n		<path class="st0" d="M5.3,7.6V3.9C5.3,3.4,4.9,3,4.5,3C4,3,3.6,3.4,3.6,3.9v3.7C2.8,8,2.3,8.7,2.3,9.6c0,0.8,0.5,1.6,1.2,1.9V17\n			c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9v-5.5c0.8-0.3,1.3-1.1,1.3-1.9C6.6,8.7,6.1,8,5.3,7.6z M4.5,10.3\n			c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C5.2,10,4.9,10.3,4.5,10.3z"/>\n		<path class="st0" d="M11.5,13.7c0-0.8-0.5-1.6-1.3-1.9V3.9C10.2,3.4,9.8,3,9.3,3C8.8,3,8.5,3.4,8.5,3.9v7.9\n			c-0.7,0.3-1.3,1.1-1.3,1.9c0,0.9,0.5,1.6,1.3,1.9V17c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9v-1.3C11,15.3,11.5,14.6,11.5,13.7\n			z M9.3,14.5c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C10.1,14.1,9.7,14.5,9.3,14.5z"/>\n		<path class="st0" d="M13.8,20.7C13.8,20.7,13.8,20.7,13.8,20.7C13.8,20.7,13.8,20.7,13.8,20.7C13.8,20.7,13.8,20.7,13.8,20.7z"/>\n		<path class="st0" d="M19.6,20.7C19.6,20.7,19.6,20.7,19.6,20.7C19.6,20.7,19.6,20.7,19.6,20.7C19.6,20.7,19.6,20.7,19.6,20.7z"/>\n		<path class="st0" d="M38.8,18.6c0-0.1-0.1-0.7-0.5-1.2v-1.4c0-0.3-0.1-0.7-0.7-1.3c-0.3-0.3-0.8-0.8-1.1-1.1c0-0.1,0-0.3,0-0.4\n			c-0.1-0.2-0.2-0.5-0.7-0.6c-2.3-0.6-4.8-0.9-7.6-0.9c-3,0-5.2,0.4-5.3,0.4l-0.1,0l-5,2.7c-0.3,0.1-1,0.2-2.7,0.6V8.6\n			c0.7-0.3,1.3-1.1,1.3-1.9s-0.5-1.6-1.3-1.9V3.9c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.4-0.9,0.9v0.9c-0.7,0.3-1.3,1.1-1.3,1.9\n			c0,0.9,0.5,1.6,1.3,1.9v7c0,0.1,0,0.2,0,0.2c-0.8,0.3-1.4,0.6-1.9,1.2c-0.5,0.5-0.8,1.2-1,1.9c-0.3,1.2,0,2.3,0,2.3l0.1,0.5l3.6,0.6\n			h0.2c0.5,0.8,1.4,1.2,2.4,1.2c0.9,0,1.8-0.5,2.4-1.2h12.1c0.5,0.8,1.4,1.2,2.4,1.2c1,0,1.9-0.5,2.5-1.4l-1.7,0.3l0,0l1.7-0.3\n			l1.5-0.3l0,0c0.1,0,0.5-0.2,0.7-0.7c0.3-0.5,0.5-1.3,0.5-2.3L38.8,18.6L38.8,18.6z M14.2,6C14.6,6,15,6.3,15,6.7\n			c0,0.4-0.3,0.7-0.7,0.7s-0.7-0.3-0.7-0.7C13.5,6.3,13.8,6,14.2,6z M15.4,21.3L15.4,21.3L15.4,21.3l-0.6,0.3L15.4,21.3L15.4,21.3\n			c0,0,0-0.1,0-0.1c0-0.1-0.1-0.3-0.1-0.4c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0-0.1c0-0.8,0.7-1.4,1.5-1.4c0.8,0,1.5,0.6,1.5,1.4\n			c0,0.2,0,0.4-0.1,0.6l0,0l0,0c-0.2,0.5-0.8,0.8-1.3,0.8C16.1,22.1,15.6,21.8,15.4,21.3z M35,21.1c0-0.1,0.1-0.2,0.1-0.3\n			C35,20.9,35,21,35,21.1z M32.3,21.3L32.3,21.3C32.3,21.3,32.3,21.3,32.3,21.3L32.3,21.3C32.3,21.3,32.3,21.3,32.3,21.3z M32.3,21.3\n			C32.3,21.3,32.3,21.3,32.3,21.3L32.3,21.3C32.3,21.3,32.3,21.3,32.3,21.3l0.5,1L32.3,21.3z M33.6,22.1c-0.6,0-1.1-0.3-1.3-0.8l0,0v0\n			l0,0c0,0,0,0,0,0l0,0l0,0c-0.1-0.2-0.1-0.4-0.1-0.6c0-0.8,0.7-1.4,1.5-1.4c0.8,0,1.5,0.6,1.5,1.4c0,0,0,0,0,0c0,0,0,0,0,0.1\n			c0,0.1,0,0.3-0.1,0.4c0,0,0,0.1,0,0.1h0l-0.2,0.4C34.5,21.9,34,22.1,33.6,22.1z M37,20.5l-0.6,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1\n			c0,0.4-0.1,0.8-0.2,1.1h0c0.2-0.4,0.2-0.7,0.2-1.1c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n			c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1\n			c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0-0.1c0,0,0,0,0,0\n			c0,0,0,0,0-0.1c0,0,0,0,0,0c-0.4-1.1-1.5-1.9-2.7-1.9c0,0,0,0,0,0c1.2,0,2.3,0.8,2.7,1.9c-0.4-1.1-1.5-1.9-2.7-1.9\n			c-0.6,0-1.1,0.2-1.5,0.4c-0.8,0.5-1.3,1.4-1.3,2.4c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0\n			H19.6c0,0,0,0,0,0c0,0.3-0.1,0.7-0.3,1l0,0c0.2-0.3,0.2-0.7,0.3-1c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0\n			c0-1.4-1-2.5-2.3-2.8c-0.2,0-0.4-0.1-0.6-0.1c-1.6,0-2.9,1.3-2.9,2.8c0,0,0,0,0,0c0-1.5,1.3-2.8,2.9-2.8c0,0,0,0,0,0\n			c-1.6,0-2.9,1.3-2.9,2.8c0,0,0,0.1,0,0.1c0,0,0,0,0,0l0,0c0,0,0,0,0,0.1l-2.1-0.3c0-0.3,0-0.8,0.1-1.3c0.1-0.5,0.3-0.9,0.7-1.2\n			c0.4-0.4,1-0.7,1.7-0.9c3-0.7,3.7-0.8,3.8-0.9h0.1l5-2.7c0.5-0.1,2.4-0.3,4.9-0.3c2.4,0,4.7,0.2,6.7,0.7l0,0l0.4,0.4\n			c0,0,0.9,1,1.5,1.5c0.2,0.1,0.2,0.2,0.3,0.3v2l0.3,0.2c0.1,0.1,0.2,0.3,0.2,0.5C37.4,19.9,37.1,20.4,37,20.5z"/>\n		<path class="st0" d="M260.2,9.4L260.2,9.4c-0.1-0.1-0.1-0.1-0.1-0.1c0.1-0.2,0.2-0.4,0.1-0.5c-0.1-0.2-0.2-0.4-0.4-0.4\n			c-1.6-0.4-3.3-0.6-5-0.7c-0.1-0.1-0.3-0.2-0.5-0.2l0,0c-3.7-0.5-6.9-0.7-9.7-0.7c-2,0-3.7,0.1-5,0.4c-1,0.2-1.4,0.4-1.5,0.4\n			c-0.1,0.1-3.3,1.5-4.3,2.1c-0.7,0.4-1,0.6-1.1,0.6c-0.4,0.1-2.2,0.4-4.5,0.9c-2.8,0.6-3.3,2-3.4,2.2l0,0l-0.4,1.5\n			c-0.1,0.3,0,0.6,0.1,0.7c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0,0.2,0,0.3l0,0l0,0.1c-0.1,0.3-0.1,0.6,0.1,0.9c0.2,0.3,0.7,0.5,1.4,0.6\n			c0.4,0.1,0.9,0.1,1.4,0.1c0.3,0,0.6,0,0.7,0c0.5,1,1.5,1.7,2.6,1.7c0.6,0,1.2-0.2,1.7-0.6c0.4-0.3,0.7-0.6,0.9-1l0.3,0h6.3\n			c0.2,0.1,0.4,0.2,0.7,0.3c0.3,0.1,0.6,0.2,0.7,0.2c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0.1,0.1,0.1h0.7c0.5,0.6,1.3,1,2.1,1\n			c0.8,0,1.6-0.4,2.1-1h2.5v0c0.4-0.1,2.8,0,4.3,0h3.2c0.5,0.6,1.2,0.9,2.1,0.9c0.6,0,1.1-0.2,1.6-0.6c0.3-0.2,0.6-0.6,0.8-1l0.9-0.1\n			c0.1,0,0.1,0,0.2-0.1c0.4-0.2,0.6-0.6,0.7-1.2c0.1-0.4,0.1-0.7,0.1-0.7C262.6,11.3,260.9,10,260.2,9.4z M233.5,16.5\n			C233.5,16.5,233.5,16.5,233.5,16.5C233.5,16.5,233.5,16.5,233.5,16.5c0-0.1,0-0.1,0-0.1c0-0.7-0.3-1.4-0.9-2c-0.6-0.5-1.3-0.8-2-0.8\n			c-0.8,0-1.5,0.3-2,0.8c-0.5,0.5-0.9,1.2-0.9,1.9c-0.1,0-0.2,0-0.4,0c-0.9,0-1.4-0.1-1.6-0.2c0.1-0.3,0.1-0.6,0-0.9\n			c0-0.2-0.1-0.3-0.2-0.5l0.3-1.3c0,0,0.1-0.2,0.4-0.4c0.3-0.3,0.9-0.6,2.1-0.9c2.5-0.6,4.4-0.9,4.5-0.9l0,0l0,0\n			c0.1,0,0.5-0.2,1.4-0.8c1-0.6,4.1-2,4.2-2l0,0c0.1,0,1.6-0.7,6-0.7c1.5,0,3.1,0.1,4.8,0.2c-0.5,0.1-0.8,0.2-0.8,0.2\n			c0,0-0.1,0-0.1,0.1l-4.1,2.4c-1.1,0.2-2,0.4-2.7,0.8c-0.7,0.4-1.3,0.8-1.7,1.2c-0.7,0.8-0.9,1.5-0.9,1.7c0,0-0.1,0-0.1,0.1v2\n			L233.5,16.5L233.5,16.5C233.5,16.5,233.5,16.5,233.5,16.5L233.5,16.5L233.5,16.5z M259.7,16.7c0,0.1,0,0.2,0,0.3c0,0,0,0.1-0.1,0.2\n			c-0.2,0.5-0.7,0.7-1.2,0.7c-0.4,0-0.8-0.2-1.1-0.5c-0.1-0.1-0.1-0.2-0.2-0.2c-0.1-0.2-0.1-0.3-0.1-0.5c0,0,0-0.1,0-0.1\n			c0-0.3,0.1-0.7,0.4-0.9c0.2-0.2,0.5-0.4,0.8-0.4c0,0,0,0,0,0l0,0c0,0,0,0.1,0.1,0.1C259.1,15.4,259.7,16,259.7,16.7\n			C259.7,16.7,259.7,16.7,259.7,16.7C259.7,16.7,259.7,16.7,259.7,16.7L259.7,16.7z M258.8,9.3c0,0.3,0.1,0.6,0.6,1l0,0\n			c0.3,0.2,0.8,0.6,1.2,1.4c0.5,1,0.8,2.3,0.8,3.9c0,0.3-0.1,0.6-0.1,0.8l-0.3,0.1c0-0.6-0.3-1.2-0.8-1.6c-0.2-0.2-0.5-0.4-0.8-0.5\n			c-0.3-0.1-0.6-0.2-1-0.2c0,0,0-0.1-0.1-0.1c-0.4,0-0.7,0.1-1,0.2l0,0l-0.1,0.1c-0.1,0.1-0.2,0.1-0.3,0.2l-0.1,0l0,0\n			c-0.4,0.3-0.8,0.7-1,1.2c-0.1,0.3-0.1,0.5-0.1,0.8c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1c0,0,0,0,0,0h-9c0,0,0,0,0,0c0,0,0,0,0,0\n			c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.1l0,0c0,0,0,0,0,0l0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1\n			c0-0.7-0.3-1.3-0.8-1.7c-0.5-0.5-1.1-0.7-1.8-0.7c-0.7,0-1.3,0.3-1.8,0.7c-0.5,0.5-0.8,1.1-0.8,1.7c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1\n			c0,0,0,0,0,0l0,0c0,0,0,0.1,0,0.1l0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1l0,0c0,0,0,0,0,0.1c0,0,0,0,0,0h-0.1c-0.1,0-0.4-0.1-0.7-0.2\n			c-0.2-0.1-0.5-0.2-0.6-0.2c0,0,0,0,0,0v-1.9c0-0.1,0.2-0.6,0.7-1.1c0.7-0.8,2-1.4,3.7-1.6c0,0,0.2,0,0.2-0.1l4.1-2.4\n			c0.4-0.1,2.2-0.6,4.7-0.6c0.1,0,0.3,0,0.4,0c0.4,0,0.8,0,1.2,0l0-0.1h0l0,0.1C256.5,8.9,257.7,9.1,258.8,9.3z M232.3,16.4\n			c0,0.2,0,0.3-0.1,0.5c-0.2,0.6-0.8,1-1.5,1c-0.7,0-1.4-0.5-1.5-1.1c0-0.1-0.1-0.3-0.1-0.4c0-0.9,0.7-1.5,1.6-1.5c0.1,0,0.1,0,0.2,0\n			c0.1,0,0.1,0,0.2,0c0.4,0.1,0.8,0.3,1,0.6c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0.1,0,0.2\n			C232.3,16.2,232.3,16.3,232.3,16.4z M233.4,16.8L233.4,16.8C233.4,16.8,233.4,16.8,233.4,16.8C233.4,16.8,233.4,16.8,233.4,16.8z\n			M242.8,16.6c0-0.7,0.6-1.3,1.4-1.3c0,0,0,0,0,0c0,0,0,0,0,0c0.5,0,1,0.3,1.2,0.8c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1\n			c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.2-0.1,0.4-0.2,0.6l0,0c0,0.1-0.1,0.2-0.2,0.3c-0.3,0.3-0.6,0.4-1,0.4c-0.4,0-0.8-0.1-1-0.4l0,0\n			h0c-0.1-0.1-0.1-0.2-0.2-0.3c0,0,0,0,0-0.1C242.8,17.1,242.8,16.9,242.8,16.6C242.8,16.6,242.8,16.6,242.8,16.6z M260.7,16.6\n			L260.7,16.6L260.7,16.6L260.7,16.6z"/>\n		<path class="st0" d="M476.2,10.7c-0.7-0.7-1.6-1.1-2.7-1.1h-2.5c-1,0-2,0.4-2.7,1.1c-0.3,0.3-0.6,0.6-0.7,1c0.4,0.5,0.7,1.1,1,1.7\n			v-0.1c0-0.6,0.2-1.2,0.7-1.7c0.5-0.4,1.1-0.7,1.7-0.7h2.5c0.6,0,1.2,0.2,1.7,0.7c0.4,0.4,0.7,1,0.7,1.7V18h-6.5\n			c-0.1,0.5-0.1,1-0.3,1.4h7.5c0.4,0,0.7-0.3,0.7-0.7v-5.3C477.3,12.4,476.9,11.4,476.2,10.7z"/>\n		<path class="st0" d="M472.3,9.2L472.3,9.2c1.8,0,3.3-1.5,3.3-3.3V4.5c0-1.8-1.5-3.3-3.3-3.3h0c-1.8,0-3.3,1.5-3.3,3.3v1.4\n			C469.1,7.7,470.5,9.2,472.3,9.2z M470.5,4.5c0-1,0.8-1.9,1.9-1.9h0c1,0,1.9,0.8,1.9,1.9v1.4c0,1-0.8,1.9-1.9,1.9h0\n			c-1,0-1.9-0.8-1.9-1.9V4.5z"/>\n		<path class="st0" d="M467.3,18.6c0,0-0.1-0.1-0.2-0.1l-0.1-0.1c0.1-0.4,0.1-0.9,0.1-1.4c0-0.5,0-0.9-0.1-1.4l0.1-0.1\n			c0.1,0,0.1-0.1,0.2-0.1c0.5-0.4,0.6-1.1,0.3-1.7l-0.3-0.5l-0.4-0.7c-0.2-0.4-0.7-0.6-1.1-0.6c-0.2,0-0.4,0.1-0.6,0.2l-0.1,0.1\n			c-0.3-0.3-0.7-0.6-1.1-0.8c-0.4-0.2-0.8-0.4-1.3-0.6v-0.1c0-0.3-0.1-0.7-0.4-0.9c-0.2-0.2-0.5-0.4-0.9-0.4H460\n			c-0.3,0-0.6,0.1-0.9,0.3c-0.3,0.2-0.4,0.6-0.4,0.9v0.2c-0.9,0.3-1.6,0.7-2.3,1.4l-0.1-0.1c-0.2-0.1-0.4-0.2-0.6-0.2\n			c-0.5,0-0.9,0.2-1.1,0.6l-0.7,1.2c-0.2,0.3-0.2,0.6-0.1,1c0.1,0.3,0.3,0.6,0.6,0.8l0.1,0.1c-0.1,0.4-0.1,0.9-0.1,1.4\n			c0,0.5,0,0.9,0.1,1.4l-0.1,0.1c-0.3,0.2-0.5,0.5-0.6,0.8c-0.1,0.3,0,0.7,0.1,1l0.7,1.2c0.2,0.4,0.7,0.6,1.1,0.6\n			c0.2,0,0.4-0.1,0.6-0.2l0.1-0.1c0.7,0.6,1.5,1.1,2.3,1.4v0.2c0,0.3,0.1,0.7,0.4,0.9c0.2,0.3,0.6,0.4,0.9,0.4h1.4\n			c0.7,0,1.2-0.6,1.2-1.3v-0.1c0.5-0.1,0.9-0.3,1.3-0.6c0.4-0.2,0.8-0.5,1.1-0.8l0.1,0.1c0.2,0.1,0.4,0.2,0.6,0.2c0,0,0,0,0,0\n			c0.5,0,0.9-0.3,1.1-0.7l0.7-1.2c0.1-0.3,0.2-0.6,0.2-0.8C467.7,19.1,467.6,18.8,467.3,18.6z M465.8,20.6l-0.4-0.2c0,0,0,0,0,0\n			c-0.3-0.2-0.7-0.2-0.9,0.1c-0.7,0.8-1.6,1.3-2.6,1.5c-0.3,0.1-0.5,0.3-0.5,0.6c0,0,0,0.1,0,0.1v0.5h-1.1v-0.4c0,0,0-0.1,0-0.1\n			c0-0.4-0.2-0.7-0.5-0.8c-1-0.2-1.9-0.7-2.6-1.5c-0.2-0.3-0.7-0.3-0.9-0.1l-0.4,0.2l-0.6-1l0.4-0.2c0.3-0.1,0.5-0.5,0.4-0.9\n			c-0.1-0.5-0.2-1-0.2-1.5c0-0.5,0.1-1,0.2-1.5c0.1-0.3-0.1-0.7-0.4-0.9l-0.4-0.2l0.6-1l0.4,0.2l0,0c0.3,0.2,0.7,0.2,0.9-0.1\n			c0.7-0.8,1.6-1.3,2.6-1.5c0.4-0.1,0.6-0.4,0.5-0.8c0,0,0-0.1,0-0.1v-0.3h1.1v0.4c0,0.1,0,0.1,0,0.1c0,0.3,0.2,0.6,0.5,0.6\n			c1,0.2,1.9,0.8,2.6,1.5c0.2,0.3,0.6,0.3,0.9,0.1l0.4-0.2l0.6,1l-0.4,0.2c-0.3,0.1-0.5,0.5-0.4,0.9c0.1,0.5,0.2,1,0.2,1.5\n			c0,0.5-0.1,1-0.2,1.5c-0.1,0.3,0.1,0.7,0.4,0.9l0.4,0.2L465.8,20.6z"/>\n		<path class="st0" d="M460.7,13.6c-0.9,0-1.8,0.4-2.4,1c-0.6,0.6-1,1.5-1,2.4c0,0.9,0.4,1.8,1,2.4c0.6,0.6,1.5,1,2.4,1\n			c0.9,0,1.8-0.4,2.4-1c0.6-0.6,1-1.5,1-2.4c0-0.9-0.4-1.8-1-2.4C462.5,14,461.6,13.6,460.7,13.6z M460.7,19c-1.1,0-2-0.9-2-2\n			c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C462.7,18.1,461.8,19,460.7,19z"/>\n		</svg>\n					</div>\n					<div class="block-4"> <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 61.6 45.6" style="enable-background:new 0 0 61.6 45.6;" xml:space="preserve">\n		<path class="st0" d="M59.8,25.3L55,20.6C53.5,9.8,53.9,1.4,44.7,1.4c-0.6,0-1.2,0-1.9,0.1c0,0-21,3.1-32,9.5c0,0-4.8,2.2-1.5,9\n			c3.3,6.8,7.9,12.2,16.2,12.2c6.6,0,15.6,0,18.9,0l4.1,4.1c1.8,1.8,4.8,1.8,6.6,0l4.6-4.6C61.6,30,61.6,27.1,59.8,25.3z M25.5,29.6\n			c-3.2,0-5.8-1-8.1-2.9c-2-1.7-3.8-4.3-5.4-7.7c-0.9-1.8-1.1-3.3-0.6-4.3c0.3-0.6,0.7-0.9,0.8-1c0,0,0.1-0.1,0.1-0.1\n			c10.1-5.9,29.6-9,30.9-9.2c0.5-0.1,1-0.1,1.5-0.1c1.4,0,2.4,0.2,3.2,0.7c0.7,0.4,1.2,1,1.6,1.9c1.1,2.3,1.5,5.8,2,10\n			c0,0.1,0,0.1,0,0.2c0.2,1.6,0.4,3.2,0.6,5c0.2,1.5,0.2,2.8,0,3.9c-0.2,0.8-0.5,1.4-0.9,1.9c-1.2,1.4-3.5,1.6-4.4,1.6\n			c-0.4,0-0.6,0.1-0.7,0.1c-0.1,0-0.2,0.1-0.4,0.1h-4.4H25.5z"/>\n		<path class="st0" d="M31.8,39.2l-4.9-3c-0.4-0.2-1.2-0.2-1.6,0c-0.4,0.2-1,0.6-1,1V39h-5.5C12.3,39,7.8,35.3,4,27.4\n			c-0.4-0.7-1.2-1.1-2-0.8c-0.7,0.3-1.1,1.2-0.7,1.9c1.9,4.1,4.1,7.2,6.6,9.3c3.1,2.6,6.8,4.1,11,4.1h5.5v1.2c0,0.4,0.6,0.8,1,1\n			c0.2,0.1,0.6,0.1,0.8,0.1c0.2,0,0.5-0.1,0.7-0.2l4.9-3c0.4-0.2,0.6-0.6,0.6-1C32.4,39.8,32.2,39.4,31.8,39.2z"/>\n		</svg>\n					</div>\n					<div class="block-5">\n						<div class="cars">\n							<svg version="1.1" class="car1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n				viewBox="0 0 77.6 27.9" style="enable-background:new 0 0 77.6 27.9;" xml:space="preserve">\n			<style type="text/css">\n				.st0{fill:#FFFFFF;}\n			</style>\n			<path class="st0" d="M76,14.6c0-0.1-0.1-0.2-0.1-0.2l0,0c-0.3-0.4-0.4-0.8-0.4-1c0.6-3.5-1.5-5.4-2-5.7l-3.9-3.5\n				c0.1-0.3,0.1-0.5,0-0.8c-0.2-0.7-0.9-1.1-1.4-1.2l-0.1,0c-6-0.8-11.7-1.3-16.9-1.5c-4.2-0.1-8-0.1-11.4,0.2\n				c-5.9,0.5-8.6,1.4-8.7,1.4l0,0l0,0c-0.3,0.1-7,3.2-9.2,4.5c-1.6,1-2.2,1.3-2.4,1.4c-0.7,0.1-4.7,0.8-9.7,1.9c-5.9,1.4-6.9,4.2-7,4.5\n				l0,0l-0.8,3.2c-0.2,0.7,0.1,1.1,0.2,1.3c0.1,0.1,0.1,0.2,0.2,0.6c0.1,0.4,0,0.7-0.1,0.7l-0.1,0.1l-0.1,0.2c-0.2,0.6-0.2,1.2,0.2,1.7\n				c0.6,0.8,2,1.3,4.4,1.4c1.4,0.1,2.7,0,2.9,0l0.1,0c0.9,2.1,3.1,3.6,5.5,3.6c1.3,0,2.5-0.4,3.6-1.2c0.8-0.6,1.4-1.3,1.8-2.2l0.7,0\n				h34.2c1,2,3.1,3.3,5.4,3.3c2.6,0,4.8-1.6,5.6-4l0.2,0l0,0c0.3,0,6.3-1,7.7-1.3c2.1-0.5,2.3-3.3,2.3-3.6l0-0.1\n				C76.8,16,76.6,15.5,76,14.6z M15.2,24.9c-1.6,0-2.9-1-3.3-2.5l-0.1,0v0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0\n				c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1\n				c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1\n				c0,0,0,0,0,0c0.3-1.5,1.6-2.7,3.1-2.9c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0\n				c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0c1.6,0.3,2.9,1.6,3,3.3c0,0,0,0,0,0\n				c0,0.1,0,0.1,0,0.2c0,0.4-0.1,0.7-0.2,1.1l0,0l-0.1,0C18,23.9,16.7,24.9,15.2,24.9z M60.8,24.9c-1.5,0-2.8-0.9-3.3-2.4l-0.1,0\n				c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0\n				c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0-0.1,0-0.3,0-0.4c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0\n				c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0.2-0.6,0.5-1.1,0.9-1.6\n				c0.6-0.6,1.3-0.9,2.1-1c0,0,0,0,0,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0\n				c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0\n				c1.6,0.3,2.8,1.8,2.8,3.5c0,0.2,0,0.4-0.1,0.7l-0.1,0C63.9,23.7,62.4,24.9,60.8,24.9z M73.9,19.8c-1.1,0.3-6.1,1.1-7.3,1.3\n				c-0.1-1.4-0.7-2.7-1.7-3.7c-1.1-1-2.5-1.6-3.9-1.7c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0\n				c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0\n				C57.2,16,55,18.5,55,21.5c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0H21.3l-0.3,0c0,0,0,0,0-0.1c0,0,0,0,0-0.1\n				c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0-1.5-0.7-2.9-1.7-3.9c-1.1-1-2.5-1.6-3.9-1.7c0,0,0,0,0,0c0,0-0.1,0-0.1,0\n				c0,0,0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0-0.1,0c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0\n				c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0\n				c0,0-0.1,0-0.1,0c0,0,0,0,0,0c-2,0.4-3.6,1.7-4.3,3.5c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0\n				c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1\n				c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1\n				c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1\n				c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0c-0.4,0-1.4,0-2.4,0c-1.5-0.1-2.3-0.3-2.6-0.4\n				c0.2-0.4,0.3-1.1,0.1-2c-0.1-0.5-0.3-0.8-0.4-1l0.7-2.8c0-0.1,0.3-0.5,0.9-1.1c0.7-0.6,2-1.4,4.5-1.9c5.4-1.2,9.6-1.9,9.7-1.9l0.1,0\n				l0.1,0c0.2-0.1,0.9-0.3,3-1.6c2-1.2,8.2-4.1,8.9-4.4c0.3-0.1,2.9-0.9,8.2-1.3c3.3-0.2,7.1-0.3,11.1-0.1c4.7,0.2,9.9,0.6,15.4,1.3\n				l-0.1,0.1L72,9.3l0.1,0l0.1,0c0,0,0.4,0.3,0.7,0.8c0.5,0.8,0.6,1.8,0.4,2.9l0,0.2l0,0.2c0,0.1,0.2,1,0.8,2c0.1,0.1,0.1,0.2,0.2,0.3\n				c0.3,0.5,0.4,0.7,0.4,2.5C74.5,18.9,74.2,19.8,73.9,19.8z"/>\n			</svg>\n							<svg version="1.1" class="car2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n				viewBox="0 0 70.8 30.2" style="enable-background:new 0 0 70.8 30.2;" xml:space="preserve">\n			<style type="text/css">\n				.st0{fill:#FFFFFF;}\n			</style>\n			<path class="st0" d="M69.2,15.4c-0.2-0.5-0.5-1.1-0.7-1.4c0.1-1.4-0.2-2.6-0.7-3.6c-0.4-0.7-0.8-1.2-1-1.3l-3.4-3.5\n				c0.2-0.3,0.3-0.7,0.2-1c-0.1-0.7-0.5-1.1-0.9-1.3c-0.1-0.1-0.2-0.1-0.4-0.1C59.3,2.7,47.8,1.6,39,1.6c-0.7,0-1.4,0-2,0\n				C33.4,1.7,28.8,3,23.2,5.4C19.7,7,17,8.5,16.3,9C10.6,9.8,6.5,11.3,4,13.5c-2,1.8-2.2,3.5-2.2,3.7c0,0-0.1,0-0.1,0v6.1\n				c0,0.6,0.3,1.6,1.6,2.2C4,26,4.9,26.2,5.9,26.4c1.6,0.3,3.2,0.3,3.4,0.3l1.8,0c1.1,1.7,3.1,2.8,5.2,2.8c2,0,3.9-1,5-2.5l0.2,0\n				c0,0,0,0,0,0c0,0,0,0,0,0l29.5-0.5c0.4,0.8,1.1,1.5,1.8,2c1,0.7,2.2,1.1,3.5,1.1c2.6,0,5-1.6,5.8-4l0.2,0c2.5,0,4.4-0.6,5.7-1.7\n				c1-0.9,1.2-1.9,1.3-2c0-0.1,0-0.1,0-0.2c0-0.6,0-1.1,0-1.7C69.5,17.5,69.5,16.2,69.2,15.4z M16.3,27.3c-1.5,0-2.8-0.8-3.5-2.1l0,0\n				c-0.2-0.5-0.4-1-0.4-1.6c0-2,1.7-3.7,3.8-3.7c2.1,0,3.8,1.7,3.8,3.7c0,0.6-0.1,1.2-0.4,1.7c0,0,0,0,0,0C19,26.6,17.7,27.3,16.3,27.3\n				z M56.5,27.4c-1.6,0-2.9-0.9-3.5-2.3h0h0h0c-0.2-0.3-0.2-0.9-0.2-1.4c0-1.9,1.5-3.5,3.4-3.7c0.1,0,0.3,0,0.4,0\n				c2.1,0,3.8,1.7,3.8,3.7c0,0.2-0.1,0.4-0.1,0.6c0,0-0.1,0.1-0.1,0.1v0C59.6,26,58.3,27.4,56.5,27.4z M67.2,19.9c0,0.5,0,1,0,1.6\n				c-0.1,0.1-0.2,0.5-0.7,0.8c-0.6,0.4-1.7,1-3.9,1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1\n				c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1\n				c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1\n				c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1\n				c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1\n				c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1\n				c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0-0.1-0.1c0,0,0,0,0,0c0,0,0,0-0.1-0.1c0,0,0,0,0,0\n				c0,0,0,0-0.1-0.1c0,0,0,0,0,0c0,0,0,0-0.1-0.1c0,0,0,0,0,0c0,0,0,0-0.1-0.1c0,0,0,0,0,0c0,0,0,0-0.1-0.1c0,0,0,0,0,0\n				c0,0,0,0-0.1-0.1c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0-0.1,0-0.1-0.1c0,0,0,0,0,0\n				c0,0,0,0-0.1-0.1c0,0,0,0,0,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0\n				c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0\n				c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0\n				c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0\n				c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0\n				c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0\n				c-0.1,0-0.1,0-0.2,0c-3.3,0.1-6,2.7-6,6c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1\n				c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0,0,0,0,0l-28.1,0.5c0.1-0.4,0.1-0.5,0.1-0.9c0-3.3-2.7-5.7-6.1-5.7h0h0c-3.4,0-6.1,2.4-6.1,5.7\n				c0,0.3,0,0.5,0.1,0.8l-0.9-0.1c0,0,0,0,0,0c-0.1,0-1.4,0-2.8-0.2c-2-0.3-2.5-0.8-2.5-0.9v-6.1c0-0.1,0.3-1.1,1.7-2.3\n				c2.7-2.3,7.5-3.3,11-3.8c0.2,0,0.3-0.1,0.5-0.2c0.1-0.1,11.9-7,19.8-7.2c0.6,0,1.3,0,1.9,0c7.2,0,17.2,0.8,21.7,1.4\n				c0,0.1-0.1,0.2-0.1,0.3c0,0.3,0.1,0.6,0.3,0.9l4.1,4.3c0,0,0.1,0.1,0.1,0.1c0.1,0.1,1.1,1.1,0.9,3.5c0,0.2,0,0.5,0.2,0.7\n				c0,0,0.5,0.7,0.8,1.4C67.2,16.7,67.2,18.5,67.2,19.9z"/>\n			</svg>\n							<svg version="1.1" class="car3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n				viewBox="0 0 76.5 28" style="enable-background:new 0 0 76.5 28;" xml:space="preserve">\n			<style type="text/css">\n				.st0{fill:#FFFFFF;}\n			</style>\n			<path class="st0" d="M75.6,17.4L75.6,17.4l-2.3-9.2l-7.1-1c-6.7-4-13.9-6-21.4-6c-3.4,0-6.8,0.4-10.2,1.2c-2.7,0.6-5.4,1.5-8.1,2.7\n				c-3.8,1.6-6.2,3.2-7,3.7c-7.4,0.4-12.8,1.8-15.8,4C1.3,14.8,1,16.5,1,16.9v4.4c0,0.4,0.3,1.3,1.7,1.7c0.5,0.2,1.1,0.2,1.1,0.2l7,0.6\n				l0.1,0.1h1.4c1,2.2,3.1,3.5,5.5,3.5c2.4,0,4.5-1.2,5.5-3.5h31.7h0c1,2.2,3.1,3.4,5.5,3.4c2.8,0,5.2-1.9,5.9-4.5\n				c1.7-0.1,4.1-0.3,5.7-0.4c1.5-0.1,2.6-1.1,3.1-2.8C75.7,18.5,75.6,17.5,75.6,17.4z M17.9,25.2c-1.8,0-3.4-1.1-3.9-2.8v0\n				c0-0.4-0.2-0.8-0.2-1.3c0-2.2,1.8-4,4.1-4c2.2,0,4.1,1.8,4.1,4c0,0.4-0.1,0.9-0.2,1.3l0,0C21.2,24.1,19.6,25.2,17.9,25.2z\n				M60.7,25.2c-1.8,0-3.3-1.1-3.8-2.8v0c-0.2-0.4-0.3-0.8-0.3-1.3c0-2.2,1.8-4,4-4c2.2,0,4.1,1.8,4.1,4c0,0.2,0,0.3,0,0.5l0,0\n				C64.5,23.7,62.7,25.2,60.7,25.2z M73.4,19.1c-0.3,1.1-0.9,1.2-1.3,1.3c-1.5,0.1-3.7,0.3-5.4,0.4c-0.2-2.6-2-4.7-4.4-5.4c0,0,0,0,0,0\n				c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0\n				c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0,0,0\n				c0,0-0.1,0-0.1,0c0,0,0,0,0,0c0,0-0.1,0-0.1,0c0,0,0,0.2,0,0.2c-0.1,0-0.1,0.2-0.2,0.2h0c0,0,0,0,0,0c-3.4,0-6.1,2.6-6.1,5.9\n				c0,0.2,0,0.2,0,0.5h-0.2H23.9c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1\n				c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0-3.3-2.7-6-6.1-6c-3.4,0-6.1,2.7-6.1,6c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1\n				c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.2c0,0,0,0.1,0,0.1H11l-7.1-0.6c-0.2,0-0.7-0.2-0.9-0.2v-4.2l0.2,0l0.1,0\n				c0-0.2,0.2-1.2,2-2.5c3.5-2.4,9.9-3.2,14.6-3.4l0.3,0l0.2-0.2c0,0,2.6-1.9,6.9-3.7C29.8,6,32.4,5.1,35,4.5c3.3-0.8,6.5-1.2,9.7-1.2\n				c7.2,0,14.1,1.9,20.6,5.8l0.2,0.1l6.2,0.8l1.9,7.6C73.6,17.8,73.6,18.5,73.4,19.1z"/>\n			</svg>\n							<svg version="1.1" class="car4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n				viewBox="-262 406.2 69.1 29.7" style="enable-background:new -262 406.2 69.1 29.7;" xml:space="preserve">\n			<style type="text/css">\n				.st0{fill:none;}\n			</style>\n			<path class="st0" d="M-199,415.3L-199,415.3l-8.5-1.6c-2.9-1.9-5.9-3.2-9-4.1c-2.6-0.7-5.1-1.1-7.7-1.1c-4.7,0-7.7,1.2-7.9,1.2l0,0\n				l-9.5,4.4c-4.3,0.4-8,1.2-10.7,2.3c-2.3,0.9-4,2-5.2,3.4c-1.4,1.7-1.8,3.2-1.5,3.6v5l0.4,0.3c1,0.7,2.4,1.2,4.6,1.5\n				c1.2,0.1,2.3,0.2,2.8,0.2c0.5,1,1.2,1.8,2.2,2.5c1.2,0.8,2.6,1.3,4,1.3s2.8-0.4,4-1.2c0.9-0.6,1.7-1.3,2.2-2.4h27.1\n				c0.5,1.1,1.2,1.8,2.2,2.4c1.2,0.8,2.6,1.2,4,1.2c1.6,0,3.2-0.4,4.4-1.4c1-0.8,1.7-2,2.1-2.8h1.6l0.2-0.2c1.2-0.4,1.9-1.3,2.4-2.4\n				c0.3-0.8,0.2-1.6,0.2-1.7v-1.9C-194.5,416.6-198.8,415.3-199,415.3z M-245,431.8c-1.9,0-3.7-1.2-4.3-3l0,0c-0.1-0.4-0.2-0.8-0.3-1.2\n				c0-0.1,0-0.3,0-0.4c0-2.5,2.1-4.5,4.6-4.5c2.6,0,4.6,2,4.6,4.5c0,0.2,0,0.4,0,0.6c0,0.3-0.1,0.6-0.2,1l0,0\n				C-241.4,430.6-243.1,431.8-245,431.8z M-205.6,431.8c-1.9,0-3.7-1.2-4.4-3l0,0l0,0l0,0c-0.2-0.5-0.3-1-0.3-1.5\n				c0-2.5,2.1-4.5,4.6-4.5c2.6,0,4.7,2,4.7,4.6c0,0.3-0.1,0.6-0.1,0.9l0,0C-201.6,430.3-203.4,431.8-205.6,431.8z M-196.7,423.7v2\n				c0,0,0,1.5-1.2,1.7h-0.8l0,0c0-3.7-3-6.9-6.9-6.9l0,0l0,0c-3.8,0-6.8,3-6.9,6.6c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1\n				v0.1c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0,0,0.1,0,0.2v0.1h-25.7v-0.1c0,0,0-0.1,0-0.2c0,0,0,0,0-0.1s0-0.1,0-0.2l0,0\n				v-0.1c0,0,0,0,0-0.1s0-0.1,0-0.2c0-3.7-3.1-6.8-6.9-6.8c-3.8,0-6.9,3-6.9,6.8c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1v0.1l0,0\n				c0,0.1,0,0.1,0,0.2l0,0c0,0.1,0,0.1,0,0.2h-0.2c-1.8-0.1-3.6-0.3-4.8-0.8v-3.9h0.2l0.1-0.1c0-0.2,0.1-1.4,1.7-2.8\n				c3.1-2.7,9.2-3.7,13.8-4.1h0.2l9.8-4.5c0.3-0.1,3-1.1,7-1.1c2.4,0,4.8,0.3,7.1,1c2.9,0.8,5.8,2.1,8.5,3.9l0.2,0.1l8.9,1.6\n				C-199,417.6-196.6,418.7-196.7,423.7z"/>\n			</svg>\n							<svg version="1.1" class="car5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n				viewBox="0 0 52 27.4" style="enable-background:new 0 0 52 27.4;" xml:space="preserve">\n			<style type="text/css">\n				.st0{fill:#FFFFFF;}\n			</style>\n			<path class="st0" d="M45.7,5.1L45.7,5.1c-0.3-0.2-0.4-0.4-0.4-0.5c0,0,0-0.1,0-0.1c0.2-0.3,0.3-0.7,0.2-1c-0.1-0.4-0.4-0.7-0.8-0.8\n				c-3.7-0.9-7.7-1.4-11.7-1.4c-6.8,0-11.5,1.4-11.7,1.4c-0.1,0-0.2,0.1-0.3,0.1l-8.6,5.2C10.3,8.4,8.4,9,6.8,9.8\n				c-1.4,0.7-2.5,1.6-3.4,2.6c-1.5,1.8-1.8,3.4-1.8,3.6c0,0,0,0.1,0,0.1V21c0,0.3,0.1,0.6,0.3,0.8c0.5,0.5,1.3,0.9,2.6,1.3\n				c0.9,0.3,1.6,0.5,1.6,0.5c0.1,0,0.2,0.1,0.2,0.1h1.5c1,1.4,2.6,2.1,4.2,2.1c1.7,0,3.3-0.8,4.2-2.1h21.3c1,1.4,2.6,2,4.2,2\n				c1.2,0,2.3-0.4,3.2-1.1c0.7-0.5,1.2-1.2,1.6-2l2-0.3c0.1,0,0.2-0.1,0.3-0.1c0.7-0.4,1.2-1.2,1.4-2.4c0.1-0.8,0.1-1.4,0.1-1.5\n				C50.6,9.1,47.2,6.3,45.7,5.1z M12.1,23.4c-1.1,0-2.1-0.6-2.7-1.6c-0.1-0.1-0.1-0.2-0.1-0.3c-0.2-0.4-0.2-0.8-0.2-1.2\n				c0-1.7,1.4-3,3-3c1.7,0,3,1.4,3,3c0,0.5-0.1,1-0.4,1.5C14.2,22.8,13.2,23.4,12.1,23.4z M41.9,23.4c-1.1,0-2.1-0.6-2.7-1.6\n				c0,0,0-0.1,0-0.1c-0.2-0.4-0.3-0.9-0.3-1.4c0-1.7,1.4-3,3-3c1.7,0,3,1.4,3,3c0,0.3,0,0.5-0.1,0.8l0,0C44.5,22.5,43.3,23.4,41.9,23.4\n				z M48,20.1l-0.9,0.3c-0.1-2.8-2.4-4.9-5.3-4.9c0,0,0,0,0,0h0c-2.9,0-5.3,2.3-5.3,5.1c0,0.3,0,0.6,0.1,0.8H17.3c0,0,0-0.1,0-0.1\n				c0-0.1,0-0.2,0-0.2c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2\n				c0-2.9-2.4-5.2-5.3-5.2c-2.9,0-5.3,2.3-5.3,5.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2\n				c0,0,0,0,0,0c0,0.1,0,0.2,0,0.3c0,0,0,0.1,0,0.1H6.5c-0.2,0-0.8-0.3-1.4-0.5c-0.7-0.2-1.1-0.5-1.4-0.6v-4.2c0.3-0.2,0.3-1.3,1.4-2.5\n				c1.6-1.8,4.4-3,7.9-3.5c0.1,0,0.3-0.1,0.4-0.1l8.7-5.2c0.8-0.2,5-1.3,10.9-1.3c3.4,0,6.8,0.4,10,1.1c0,0,0,0.1,0,0.1\n				c0,0.5,0.3,1.3,1.2,2l0,0c0.7,0.5,1.6,1.4,2.5,3c1.1,2.1,1.6,4.9,1.6,8.5C48.4,18.9,48.2,19.8,48,20.1z"/>\n			</svg>\n							<svg version="1.1" class="car6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n				viewBox="0 0 68.6 31.6" style="enable-background:new 0 0 68.6 31.6;" xml:space="preserve">\n			<style type="text/css">\n				.st0{fill:#FFFFFF;}\n			</style>\n			<path class="st0" d="M67.1,18.5c0-0.3-0.2-1.7-1.1-2.7v-3.3c0-0.5,0-1.5-1.4-2.8c-0.8-0.8-2-2.1-2.7-2.8c0.1-0.3,0.1-0.6,0-0.9\n				c-0.1-0.3-0.4-0.9-1.4-1.2c-5.2-1.4-11-2.1-17.3-2.1c-6.9,0-11.8,0.8-12,0.9l-0.2,0L19.5,9.8c-0.7,0.1-2.7,0.6-9,2\n				C5.4,13.1,3.6,16.4,3,19c-0.6,2.7-0.1,5.1-0.1,5.2l0.2,0.9l8,1.5h0.4c0.5,0.9,1.2,1.4,1.9,1.9c1,0.7,2.2,1,3.4,1\n				c1.2,0,2.4-0.3,3.4-0.9c0.8-0.5,1.5-1,1.9-1.9h28c0.5,0.9,1.2,1.4,1.9,1.9c1,0.7,2.2,1,3.4,1c2.3,0,4.5-1.3,5.6-3.3l3.4-0.7l0.1,0\n				c0.2-0.1,0.8-0.4,1.4-1.5c0.7-1.2,0.9-3,0.9-5.2L67.1,18.5L67.1,18.5z M16.9,26.7c-1.4,0-2.7-0.8-3.3-2.1l-0.1,0.1l0,0\n				c-0.2-0.5-0.4-1-0.4-1.6c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8c0,0.6-0.1,1.1-0.4,1.6l0,0l-0.1-0.1\n				C19.6,25.9,18.3,26.7,16.9,26.7z M52.4,24.6l-0.1,0.1l0,0c-0.2-0.5-0.4-1-0.4-1.6c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8\n				c0,0.5-0.1,1-0.3,1.5l0,0L59,24.5c-0.6,1.3-1.9,2.2-3.3,2.2C54.3,26.7,53,25.9,52.4,24.6z M63.9,23.1l-2,0.4c0,0,0,0,0,0\n				c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2c0-3.4-2.8-6.1-6.2-6.1c-3.4,0-6.2,2.7-6.2,6.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1\n				c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0.1,0,0.2,0,0.3c0,0,0,0.1,0,0.1H23c0,0,0-0.1,0-0.1\n				c0-0.1,0-0.2,0-0.2c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.2c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2v0.3h0.1\n				c0-3.5-2.8-6.1-6.2-6.1c-3.4,0-6.2,2.6-6.2,6.1h0h0c0,0,0,0,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1\n				c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0l-5.6-1C5,22.2,5,20.9,5.3,19.5c0.7-2.8,2.6-4.5,5.7-5.2c7.1-1.7,8.6-2,8.9-2h0.2\n				l11.5-6.3c1-0.2,5.5-0.9,11.4-0.9c5.8,0,11.2,0.6,16,1.8l-0.2,0.3l0.7,0.8c0.1,0.1,2,2.3,3.3,3.5c0.5,0.5,0.3,0.8,0.6,0.9v4.6\n				l0.6,0.4c0.3,0.2,0.5,0.9,0.6,1.4C64.8,21.9,64.1,22.9,63.9,23.1z"/>\n			</svg>\n						</div>\n\n					</div>\n				</div>\n\n				<div class="icons-2">\n					<div class="block-1">\n						<div class="coloredBlock"> <div class="background"></div> </div>\n						<div class="centered">\n							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 148.7 149.7" style="enable-background:new 0 0 148.7 149.7;" xml:space="preserve">\n		<path class="st0" d="M136.2,88.8l2-2L136.2,88.8L136.2,88.8z"/>\n		<path class="st0" d="M88.3,64.6l-3.9,4l-0.1,0.4l-3.3,3.6h3.4h3.2h3.8h22h10.4l1.1-1.4l10.7-10.8l-5.2-5.4l-9.7,9.5h-22l15.7-15.6\n			H128v-6.6h-14.1h-0.3h-2.3l-7.4,7L88.3,64.6z"/>\n		<path class="st0" d="M85.6,9.1l-5.2-5.2l-5.8,5.8l-5-5.1l-5.2,5.2l10.3,10.3L85.6,9.1z"/>\n		<path class="st0" d="M77.3,25.5v10.5v21.7v3.8v3.2v3.5l3.2-3.3l0.1-0.2l3.8-3.9L100.5,45l7.8-7.4v-2.3V35V20.9h-8.2v13.6L84.6,50.2\n			V28.5l10.2-10.3L89.5,13L78.8,23.9L77.3,25.5z"/>\n		<path class="st0" d="M35.5,20.9h-7.4v8.2h-6.5v7.4h13.9V20.9z"/>\n		<path class="st0" d="M48.4,43.2l15.7,15.7l5.6,5.7l0.2,0.2l1.6,1.6v-1.7v-1.4v-7.3V35.3V24.8l-1-0.9L60.4,13.7l-4.8,5.2l9.4,8.9\n			v20.6L47.8,32.7V20.9h-6.5V37l0.5-0.6L48.4,43.2z"/>\n		<path class="st0" d="M9.6,63.5l-5.2,5.2l5.5,5.5l-4.9,4.9l5.2,5.2l10.1-10.2L9.6,63.5z"/>\n		<path class="st0" d="M21.6,120.9h6.5v6.6h7.4v-13.9H21.6V120.9z"/>\n		<path class="st0" d="M44.5,100.6l15.7-15.7l3.9-3.9l1.9-1.9l1.6-1.6h-3.2l0.6-0.2v0.2h-7.9H35.3h-9.5V77L14.3,88.3l5.1,5.6l8.5-8.3\n			h21.9l-15.7,14.8H21.6v7.4h16.6l-0.6-0.4L44.5,100.6z"/>\n		<path class="st0" d="M64.2,139.6l5.2,5.2l5.5-5.5l4.9,4.9L85,139l-10.1-10.2L64.2,139.6z"/>\n		<path class="st0" d="M112.4,127.4h8.2v-6.6h7.4v-7.4h-15.5V127.4z"/>\n		<path class="st0" d="M100.1,102.8L84.4,87.1l-2.2-2.2L80.5,83l-3.2-3.3v5.2v1.5v3.8v22.6v10.5v1h1.2l10.4,10.7l5.3-5.1l-9.6-9.7\n			V97.5l15.5,15.7v14.1h8.2v-14.9l0.7-1.2l-1.4-1.2L100.1,102.8z"/>\n		<path class="st0" d="M139.9,74.2l4.9-4.9l-5.2-5.2l-10.1,10.2l10.7,10.7l-2,2l7.2-7.2L139.9,74.2z"/>\n		<path class="st0" d="M128,29.1h-7.4v-8.2h-8.2v15.6H128V29.1z"/>\n		<path class="st0" d="M25.7,72.5h0.2h10.4h22.5h3.8h1.4h5.2L66,68.9l-1.9-2l-2.2-2.3L46.2,49.2l-7.4-7.1h-2.3H21.6v6.6h14.1\n			l15.7,15.6H28.9L18.7,54.2l-5,5.3l12,11.9V72.5z"/>\n		<path class="st0" d="M71.5,124.1v0.3V114V91.9v-6.3h0.2l-0.2-1v-3.1L69.9,83L68,84.9l-4,4l-15.7,15.7l-6.6,6.8l-0.5-0.6v16.7h6.5\n			V115L65,99.3v22.1l-9.5,9.1l5,5l10.8-11.3H71.5z"/>\n		<path class="st0" d="M125.5,77.4h-0.6h-10.4H93.1h-7.2h-1.5h-1.7l1.6,1.6l0.1,0.2l5.6,5.7l15.7,15.7l6.8,6.7l-0.6,0.4h16v-7.4h-11.8\n			l-15.7-14.8h21.4l9.2,8.8l5.5-5.4l-11-11.4V77.4z"/>\n		</svg>\n						</div>\n\n					</div>\n					<div class="block-2">\n						<div class="coloredBlock"></div>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 48.3 60.5" style="enable-background:new 0 0 48.3 60.5;" xml:space="preserve">\n		<path d="M29.6,38.2c-2.2-5.8-6.2-10.6-11.4-13.9c-1.5-0.9-3-1.7-4.8-2.4v-8.4l5,4.3l2.1-2.3l-8.6-7.6l-8.1,7.7l2.1,2.3\n			l4.5-4.3v7.3c-2.5-0.8-5.5-1.3-9.2-1.3v2.8c12.3,0,21.9,6.3,25.8,16.8c3.4,8.9,12.5,15.4,20.8,15.4v-2.8\n			C40.4,51.8,32.5,46.1,29.6,38.2z"/>\n		<path d="M25,39.9c-3.6-9.7-12.2-15.4-23.9-15.4v2.8c10.1,0,18.1,5.1,21.3,13.6c4.1,10.9,14.9,18.6,25.3,18.6v-2.8\n			C38.5,56.7,28.7,49.6,25,39.9z"/>\n		<path d="M12,5l6.5,5.7l2.1-2.3l-8.6-7.6L3.8,8.4l2.1,2.3L12,5z"/>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 56.6 65.4" style="enable-background:new 0 0 56.6 65.4;" xml:space="preserve">\n		<path d="M50,2.4L3.1,32.4l1.5,2.3L51.5,4.7L50,2.4z"/>\n		<path d="M39.6,32.6H39V18.5l15.2-9.7l-1.5-2.3L5.7,36.4l1.4,2.3l28.2-18v11.9h-0.5c-5.3,0-9.5,4.3-9.5,9.6v10.9\n			c0,5.3,4.2,9.5,9.5,9.5h4.8c5.3,0,9.7-4.2,9.7-9.5V42.2C49.3,36.9,44.9,32.6,39.6,32.6z M46.3,53.1c0,3.8-2.9,6.7-6.7,6.7h-4.8\n			c-3.8,0-6.8-3-6.8-6.7v-1.7h18.2V53.1z M28.3,48.7v-2.1h17.9v2.1H28.3z M46.3,43.8H28v-1.3c0-3.8,3-7.2,6.8-7.2h4.8\n			c3.8,0,6.7,3.4,6.7,7.2V43.8z"/>\n		</svg>\n					</div>\n					<div class="block-3">\n						<span class="label">Winter sports</span>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 416.6 183.8" style="enable-background:new 0 0 416.6 183.8;" xml:space="preserve">\n		<path d="M15.7,18.8c1.5-2.6,4.2-4.1,7.1-4.1c1.5,0,2.9,0.4,4.2,1.2c1.9,1.2,3.1,3,3.7,5c0.5-0.1,1-0.3,1.6-0.3\n			c-0.7-2.6-2.2-4.7-4.4-6.1c-1.5-0.9-3.3-1.5-5-1.5c-3.4,0-6.7,1.9-8.4,5c-2.7,4.6-1.4,10.6,2.9,13.6c0.2-0.5,0.4-1,0.7-1.5\n			C14.5,27.4,13.5,22.6,15.7,18.8z"/>\n		<path d="M19.7,27.7c-2.3-1.7-3-4.9-1.5-7.5c1-1.7,2.7-2.7,4.6-2.7c1,0,1.9,0.3,2.8,0.8c1.2,0.8,2.1,2,2.5,3.4\n			c0,0.1,0,0.2,0.1,0.2c0.5-0.3,0.9-0.6,1.5-0.8c-0.5-1.7-1.5-3.3-3.2-4.3c-1.1-0.7-2.3-1-3.6-1c-2.5,0-4.8,1.4-6,3.5\n			c-1.9,3.2-1,7.3,1.8,9.6C18.9,28.5,19.3,28.1,19.7,27.7z"/>\n		<path d="M42.8,30c-0.4-0.4-0.8-0.8-1.3-1c-0.9-3.9-4.3-6.7-8.2-6.7c-0.2,0-0.5,0-0.7,0c-0.5,0-1.1,0.1-1.6,0.3\n			c-0.4,0.1-0.8,0.3-1.2,0.5c-0.6,0.3-1.1,0.6-1.7,1c-0.5,0.4-0.9,0.8-1.3,1.2c-0.4,0.5-0.7,1-1,1.5c-0.5,0-1.1,0.1-1.6,0.3\n			c-1,0.3-2,0.8-2.8,1.6c-0.4,0.4-0.9,0.8-1.2,1.3c-0.2,0.3-0.5,0.7-0.7,1.1c-0.3,0.5-0.5,1-0.6,1.5c-0.2,0.7-0.3,1.5-0.3,2.3\n			c0,3.9,2.9,7.4,6.7,8.1l0.1,0.1H31h7.4c3.6,0,6.7-3.5,6.7-7.4C45,33.5,44.2,31.4,42.8,30z M38.3,41.1L38.3,41.1h-5.5h-7.2\n			c-3.1-0.5-5.4-3.3-5.4-6.4c0-0.6,0.1-1.2,0.2-1.7c0.2-0.5,0.4-1.1,0.7-1.5c0.2-0.4,0.5-0.8,0.8-1.1c0.5-0.6,1.1-1.1,1.8-1.4\n			c0.7-0.3,1.5-0.5,2.2-0.5c0.1,0,0.2,0,0.3,0l0.5,0l0.2-0.5c0.4-0.9,1-1.7,1.7-2.3c0.3-0.2,0.5-0.4,0.8-0.6c0.4-0.3,0.9-0.5,1.4-0.7\n			c0.5-0.2,1.1-0.3,1.7-0.4c0.2,0,0.4,0,0.7,0c3.3,0,6.1,2.4,6.7,5.8l0.1,0.4l0.4,0.2c0.9,0.4,1.6,1.2,2.2,2.2c0.5,0.9,0.8,1.9,0.8,3\n			C43.4,38.5,41,41.1,38.3,41.1z"/>\n		<path d="M211.7,31.3V11.6h-1.9V24h-1.6V11.6h-1.9v19.8c-1.6,1-2.7,2.7-2.7,4.8c0,3,2.4,5.5,5.4,5.5c3,0,5.3-2.5,5.3-5.5\n			C214.5,34.1,213.3,32.3,211.7,31.3z M209.2,39.6c-1.9,0-3.4-1.6-3.4-3.5c0-0.8,0.3-1.6,0.7-2.2c0.6-0.8,1.6-1.3,2.7-1.3\n			c1.1,0,2.1,0.5,2.7,1.3c0.5,0.6,0.7,1.3,0.7,2.2C212.6,38.1,211,39.6,209.2,39.6z"/>\n		<path d="M404.2,18.9c-0.3-0.2-0.6-0.2-0.9,0l-6.1,3.2c-0.2-3.2-2.8-5.7-6-5.7h-13.5c-3.3,0-5.9,2.8-5.9,6.2v10.8\n			c0,3.4,2.6,6.2,5.9,6.2h13.5c3.2,0,5.9-2.6,6-5.9l6.1,3.1c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0,0.5-0.1c0.3-0.2,0.4-0.5,0.4-0.8\n			V19.8C404.6,19.4,404.5,19.1,404.2,18.9z M395.4,33.4c0,2.5-1.8,4.6-4.2,4.6h-13.5c-2.4,0-4.4-2.1-4.4-4.6V22.6c0-2.5,2-4.6,4.4-4.6\n			h13.5c2.4,0,4.2,2.1,4.2,4.6V23v9.8V33.4z M402.8,34.3l-5.5-2.8v-7.2l5.5-2.9V34.3z"/>\n		<path d="M394.4,22.5c0-1.7-1.4-3.1-3.1-3.1h-13.5c-1.7,0-3.1,1.4-3.1,3.1v10.7c0,1.7,1.4,3.1,3.1,3.1h13.5\n			c1.7,0,3.1-1.4,3.1-3.1V22.5z M392.5,33.3c0,0.8-0.6,1.4-1.4,1.4h-13.5c-0.7,0-1.4-0.6-1.4-1.4V22.6c0-0.8,0.6-1.4,1.4-1.4h13.5\n			c0.7,0,1.4,0.6,1.4,1.4V33.3z"/>\n		<path d="M36.1,176.2v-9.8c1.5,0.7,2.9,1.1,4.5,1.1c3,0,5.8-1.3,7.7-3.7l-1.1-0.9c-1.6,2-4,3.1-6.6,3.1\n			c-2.1,0-4.1-0.8-5.7-2.3c0,0,0-0.1,0-0.1h0v0.1v0v0c0-0.1-0.2-0.2-0.3-0.3c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1\n			c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0,0,0,0l0,0L34,163l-17.7-18l-1,1l1.9,2L17,148v9.8l1.8,1.8v-9.8l7,7h-0.2v9.2l1.8,1.8v-9.5l5.6,5.6\n			l0.3,0.2c0.1,0.1,0.2,0.1,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.3,0.3l0,0l0.1,0.1l-0.1,0c0.1,0.1,0.3,0.2,0.3,0.3v9.1\n			L36.1,176.2z"/>\n		<path d="M46.3,162.3c-1.4,1.7-3.5,2.7-5.7,2.7c-0.1,0-0.2,0-0.3,0c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0\n			c-0.1,0-0.2,0-0.2,0c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2-0.1\n			c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1\n			c0,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1,0-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1\n			c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1\n			c0,0-0.1-0.1-0.1-0.1c0,0-0.1,0-0.1-0.1c0,0,0,0,0,0l0,0l0,0l-0.3-0.3l-0.3-0.3l0,0l0,0l-0.2-0.2l-17.7-18l1-1l18.3,18.5l0.2,0.2\n			c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1\n			c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0.1\n			c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0.1c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0\n			c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0\n			c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0\n			c1.7-0.1,3.2-0.9,4.3-2.2L46.3,162.3z"/>\n		<path d="M366.2,169.2h41v-1.9h-41V169.2z"/>\n		<path d="M400.9,164.2c0.9-0.9,1.4-2.3,1.4-3.8v-0.1c0-2.5-1.5-4.7-3.7-5.7l-0.5,2.1c0,0,0,0,0,0l0,0\n			c-0.1,0-0.1,0-0.2-0.1c1.3,0.6,2.3,2,2.3,3.6v0.1c0,2.2-1.8,3.8-3.9,3.8h-18.2c-2.1,0-3.8-1.6-3.8-3.8v-0.1c0-1.6,0.9-3,2.2-3.6\n			c-0.1,0-0.2,0-0.2,0.1c0.1,0,0.1,0,0.2-0.1c0.5-0.2,1-0.3,1.5-0.3c0,0,0.1,0,0.1,0c2.9-0.6,5.9-0.9,9-0.9c0,0,0,0,0,0c0,0,0,0,0,0\n			c3.1,0,6.1,0.3,9,0.9c0,0,0.1,0,0.1,0c0.5,0,1,0.1,1.4,0.3c0.1,0,0.2,0,0.3,0.1l0.5-2.1c-0.7-0.2-1.3-0.3-2-0.5\n			c-3-0.6-6.1-0.9-9.4-0.9c-3.2,0-6.4,0.3-9.4,0.9c-0.7,0.1-1.4,0.3-2,0.5c0.7-0.2,1.4-0.3,2.1-0.5c-3.3,0.2-5.7,2.9-5.7,6.1v0.1\n			c0,1.5,0.5,2.9,1.3,3.8h-7.4v1.9h9.8h22.6h8.7v-1.9H400.9z"/>\n		<path d="M229.3,161.3c-2.8,0-5.4-2.5-5.4-5.4v-2.9h-9.3v2.9c0,2.8-2.3,5.1-5.1,5.1c-2.8,0-5.1-2.3-5.1-5.1v-2.9h-9.3\n			v2.9c0,2.9-2.4,5.4-5.2,5.4h-2.7v2h2.7c4,0,7.2-3.3,7.2-7.3V155h5.3v0.9c0,4,3.1,7.2,7.1,7.2c4,0,7.1-3.2,7.1-7.2V155h5.3v0.9\n			c0,4,3.4,7.3,7.4,7.3h2.6v-2H229.3z"/>\n		<path d="M220.5,156.7h-2.2c-0.4,4.6-4.2,8-8.8,8c-4.6,0-8.4-3.4-8.7-8h-2.2c-0.4,4.6-4.2,8.3-8.8,8.3h-2.7v2h2.7\n			c4.3,0,8.1-2.6,9.9-6.3c1.7,3.7,5.5,6.2,9.8,6.2c4.3,0,8.1-2.5,9.8-6.2c1.7,3.7,5.5,6.3,9.9,6.3h2.6v-2h-2.6\n			C224.7,164.9,220.9,161.3,220.5,156.7z"/>\n		</svg>\n					</div>\n					<div class="block-4">\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="-281 405.6 31.3 31.3" style="enable-background:new -281 405.6 31.3 31.3;" xml:space="preserve">\n\n		<path d="M-250.1,421.6L-250.1,421.6"/>\n		<path d="M-251.3,412.5l-1.6-1.6l-9.1,9.1l-1.6,1.6l1.6,1.6l9.1,9.1l1.6-1.6l-9.2-9.1L-251.3,412.5z"/>\n		<path d="M-264.8,420.4l1.6-1.6l9.1-9.1l-1.6-1.6l-9.1,9.1l-9.2-9.1l-1.5,1.6l9.1,9.2L-264.8,420.4z"/>\n		<path d="M-264.8,422.8l-1.6,1.6l-9,9.1l1.6,1.6l9-9.1l9.1,9.1l1.6-1.6l-9.1-9.1L-264.8,422.8z"/>\n		<path d="M-266,421.6l-1.6-1.6l-9.1-9.1l-1.6,1.6l9.1,9.1l-9,9.1l1.6,1.6l9-9.1L-266,421.6z"/>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="-281 406.5 31.8 29.4" style="enable-background:new -281 406.5 31.8 29.4;" xml:space="preserve">\n\n		<path d="M-252.9,411.2l-15.1,18.3l-10-9.4l-1.4,1.4l11.5,10.8l16.5-19.9L-252.9,411.2z"/>\n		<path d="M-254,410.3l-1.5-1.2l-12.9,15.4l-7.3-6.8l-1.3,1.4l8.8,8.3L-254,410.3z"/>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="-283 406.3 28.5 29.6" style="enable-background:new -283 406.3 28.5 29.6;" xml:space="preserve">\n\n		<path d="M-258.7,417.7L-258.7,417.7c0-0.2,0-0.2,0-0.3c0-3.7-3-6.7-6.8-6.7c-1.2,0-2.3,0.3-3.4,0.9l-0.3,0.2l-0.3-0.2\n			c-1-0.6-2.2-0.9-3.4-0.9c-3.7,0-6.8,3.1-6.8,6.8c0,0.1,0,0.1,0,0.2v0.8l0,0c0.2,1.5,1.5,5.6,10.5,12.8\n			C-258.1,422.3-258.6,417.9-258.7,417.7L-258.7,417.7z M-269.1,429.3c-7.5-6.2-8.8-9.8-9-11v-0.9v-0.1c0-2.9,2.4-5.3,5.3-5.3\n			c0.9,0,1.8,0.2,2.6,0.7l1.1,0.6l1.1-0.6c0.8-0.5,1.7-0.7,2.6-0.7c2.9,0,5.3,2.4,5.3,5.3c0,0.1,0,0.1,0,0.2v0.2v0.2\n			C-260.1,418.1-260.2,421.9-269.1,429.3z"/>\n		<path d="M-255.8,417.3c0-5.3-4.3-9.6-9.6-9.6c-1.3,0-2.5,0.3-3.7,0.7c-1.2-0.5-2.4-0.7-3.7-0.7c-5.3,0-9.6,4.3-9.6,9.6\n			c0,0.1,0,0.1,0,0.1c-0.1,0.8,0,2.3,1.2,4.7c1.8,3.4,5.4,7.3,10.8,11.6l1.3,1.1l1.3-1.1c5.1-4,8.6-7.8,10.5-11.1\n			c1.4-2.5,1.6-4.2,1.5-5.1C-255.8,417.5-255.8,417.4-255.8,417.3z M-268.7,432.7l-0.4,0.3l-0.4-0.3c-5.3-4.2-8.8-7.9-10.5-11.2\n			c-1.2-2.2-1.1-3.5-1-3.9l0,0c0-0.1,0-0.2,0-0.2c0-4.5,3.7-8.2,8.2-8.2c1.3,0,2.6,0.3,3.7,0.9c1.1-0.6,2.4-0.9,3.7-0.9\n			c4.5,0,8.2,3.6,8.2,8.1c0,0.1,0,0.2,0,0.3C-257.1,418.7-257.3,423.6-268.7,432.7z"/>\n		</svg>\n					</div>\n				</div>\n\n				<div class="icons-3">\n					<div class="block-1">\n						<div class="block-1-inner">\n							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 52.4 55.6" style="enable-background:new 0 0 52.4 55.6;" xml:space="preserve">\n		<path d="M46.8,45.3c-2,0-3.7,1.4-4.3,3.2H36l-1.4-1.7h1.9c0.3,0,0.7-0.1,0.9-0.4l3.5-3.5c0.6,0.2,1.2,0.4,1.8,0.4\n			c2.5,0,4.5-2,4.5-4.5c0-2.5-2-4.5-4.5-4.5c-2.5,0-4.5,2-4.5,4.5c0,0.9,0.2,1.6,0.7,2.3l-3,3h-7c-0.6-1.7-2.3-3.1-4.3-3.1\n			c-2.5,0-4.5,2-4.5,4.5c0,2.5,2,4.4,4.5,4.4c2,0,3.7-1.4,4.3-3.2h2.2l3.1,3.9c0.2,0.3,0.6,0.5,1,0.5h7.1c0.6,1.7,2.3,3.1,4.3,3.1\n			c2.5,0,4.5-2,4.5-4.5C51.2,47.3,49.2,45.3,46.8,45.3z M42.8,37c1,0,1.8,0.8,1.8,1.8c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8\n			C41,37.8,41.8,37,42.8,37z M24.8,47.3c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8C26.6,46.5,25.8,47.3,24.8,47.3\n			z M46.8,51.6c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8C48.6,50.8,47.8,51.6,46.8,51.6z"/>\n		<path class="st0" d="M22.3,37.6v-3.7h5.5v3.7c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3v-3.7h1.1c1.8,0,3.3-1.5,3.3-3.4v-1.3h3.8\n			c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3h-3.8v-5.2h3.8c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3h-3.8v-5.2h3.8\n			c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3h-3.8V9.6c0-1.8-1.4-3.3-3.3-3.3h-1.1V2.6c0-0.7-0.6-1.3-1.3-1.3\n			c-0.7,0-1.3,0.6-1.3,1.3v3.7h-5.5V2.6c0-0.7-0.6-1.3-1.3-1.3c-0.7,0-1.3,0.6-1.3,1.3v3.7h-5.2V2.6c0-0.7-0.6-1.3-1.3-1.3\n			c-0.7,0-1.3,0.6-1.3,1.3v3.7h-1.2c-1.8,0-3.4,1.5-3.4,3.3v1.3H3.5c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3h3.6v5.2H3.5\n			c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3h3.6v5.2H3.5c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3h3.6v1.3\n			c0,1.8,1.6,3.4,3.4,3.4h1.2v3.7c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3v-3.7h5.2v3.7c0,0.7,0.6,1.3,1.3,1.3\n			C21.7,38.9,22.3,38.3,22.3,37.6z M32.2,30.6c0,0.4-0.3,0.7-0.7,0.7h-21c-0.4,0-0.7-0.3-0.7-0.7v-21c0-0.4,0.3-0.7,0.7-0.7h21\n			c0.4,0,0.7,0.3,0.7,0.7V30.6z"/>\n		<path class="st0" d="M26,16.3c0-0.7-0.6-1.3-1.3-1.3h-7.6c-0.7,0-1.3,0.6-1.3,1.3v7.6c0,0.7,0.6,1.3,1.3,1.3h7.6\n			c0.7,0,1.3-0.6,1.3-1.3V16.3z"/>\n		</svg>\n							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 59.3 45.9" style="enable-background:new 0 0 59.3 45.9;" xml:space="preserve">\n		<path class="st0" d="M57.1,21.6c-1.5-0.7-3.3-0.7-4.9-0.1c-0.2,0.1-0.4,0.1-0.6,0.2c0.4-0.5,0.7-0.9,0.9-1.2c1.4-0.2,2.9-0.9,4-2\n			c1.2-1.2,1.9-2.9,1.9-4.5c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3c-1.6,0-3.3,0.8-4.5,2c-1.1,1.1-1.8,2.6-1.9,4.1\n			c-0.1,0.1-0.2,0.2-0.3,0.4c0-0.6-0.2-1.2-0.4-1.8c-0.6-1.6-1.8-3-3.2-3.7c-0.3-0.1-0.6-0.1-0.9,0c-0.3,0.1-0.5,0.3-0.6,0.6\n			c-0.4,0.8-0.5,1.6-0.5,2.5c0,0.8,0.1,1.6,0.4,2.3c0.5,1.5,1.6,2.7,2.8,3.4c-0.2,0.3-0.4,0.7-0.7,1c0-0.1-0.1-0.2-0.1-0.3\n			c-0.6-1.6-1.8-3-3.3-3.7c-0.3-0.1-0.6-0.1-0.9,0c-0.3,0.1-0.5,0.3-0.6,0.6c-0.4,0.8-0.5,1.6-0.5,2.5c0,0.8,0.1,1.6,0.4,2.3\n			c0.5,1.3,1.3,2.4,2.4,3.2c-2.1,4.2-3,7.9-2.8,11.1c0,0.6,0.5,1,1.1,1c0,0,0,0,0.1,0c0.6,0,1.1-0.6,1-1.2c-0.2-2.4,0.5-5.1,1.6-7.7\n			c0.1,0.1,0.2,0.2,0.4,0.3c0.8,0.3,1.7,0.5,2.6,0.5c0.8,0,1.6-0.1,2.4-0.4c1.6-0.6,3-1.8,3.7-3.2c0.1-0.1,0.1-0.3,0.1-0.5\n			c0-0.1,0-0.3-0.1-0.4c-0.1-0.3-0.3-0.5-0.6-0.6c-1.5-0.7-3.3-0.7-4.9-0.1c-0.7,0.3-1.4,0.7-2,1.1c0.5-0.9,0.9-1.7,1.4-2.5\n			c0.1,0.1,0.2,0.1,0.2,0.2c0.8,0.3,1.7,0.5,2.6,0.5c0.8,0,1.6-0.1,2.4-0.4c1.6-0.6,3-1.8,3.7-3.2c0.1-0.1,0.1-0.3,0.1-0.5\n			c0-0.1,0-0.3-0.1-0.4C57.6,21.9,57.3,21.7,57.1,21.6z M47,17.1c0-0.1,0-0.2,0-0.2c0.4,0.4,0.7,0.9,1,1.6c0.2,0.6,0.3,1.1,0.3,1.6\n			c0,0.1,0,0.2,0,0.2c-0.4-0.4-0.7-0.9-1-1.6C47.1,18.1,47,17.6,47,17.1z M50.1,29.3c0.6-0.2,1.3-0.3,1.8-0.3c-0.4,0.4-0.9,0.7-1.6,1\n			c-0.6,0.2-1.3,0.3-1.8,0.3C48.9,29.9,49.5,29.6,50.1,29.3z M54.3,16.5c0.5-0.5,1-0.8,1.5-1c-0.2,0.5-0.5,1.1-1,1.5\n			c-0.5,0.5-1,0.8-1.5,1C53.5,17.5,53.8,17,54.3,16.5z M44.3,22.9c0-0.1,0-0.2,0-0.2c0.4,0.4,0.7,0.9,1,1.6c0.2,0.6,0.3,1.1,0.3,1.6\n			c0,0.1,0,0.2,0,0.2c-0.4-0.4-0.7-0.9-1-1.6C44.3,24,44.3,23.4,44.3,22.9z M53.1,24.2c-0.6,0.2-1.3,0.3-1.8,0.3\n			c0.4-0.4,0.9-0.7,1.6-1c0.6-0.2,1.3-0.3,1.8-0.3C54.3,23.6,53.8,24,53.1,24.2z"/>\n		<path class="st0" d="M21.8,19.1c0-4.9-5-10.8-6-12.2V3.2c0.5,0,1-0.5,1-1.1c0-0.6-0.5-1.1-1.2-1.1H7.6C7,1,6.4,1.5,6.4,2.1\n			c0,0.6,0.6,1.1,1.1,1.1v3.6c-1,1.1-6.1,7.2-6.1,12.3v22.4c0,1.6,1.5,3,3.1,3h14.3c1.6,0,2.9-1.2,2.9-2.6v-0.7\n			c0-12,0.1-15.6,0.1-18.4C21.8,21.6,21.8,20.6,21.8,19.1z M19.5,41.2v0.7c0,0.2-0.3,0.5-0.7,0.5H4.5c-0.4,0-0.9-0.4-0.9-0.8V19.1\n			c0-4.6,5.7-10.9,5.7-11C9.4,8,9.5,7.8,9.5,7.7c0.1-0.2,0.2-0.4,0.2-0.6V3.2h3.9v3.9c0,0.1,0,0.2,0,0.3c0,0.3,0.1,0.6,0.3,0.8\n			c0,0,1.4,1.6,2.9,3.8c1.8,2.8,2.8,5.3,2.8,7.2c0,1.5,0,2.5,0,3.7C19.5,25.6,19.5,29.2,19.5,41.2z"/>\n		<path class="st0" d="M9.8,11.6c0,0-4.1,4.6-4.1,8.7V39c0,0.7,0.6,1.2,1.4,1.2h8.8c0.7,0,1.4-0.5,1.4-1.2V20.3c0-4.1-3.9-8.7-3.9-8.7\n			H9.8z"/>\n		<path class="st0" d="M40,9.7c-1.6,0-3.3,0.8-4.6,2C35.2,11.8,35,12,35,12.2v-1.3c1.5-0.7,2.5-2.1,3.1-3.7c0.3-0.7,0.4-1.5,0.4-2.3\n			c0-0.9-0.2-1.8-0.6-2.6c-0.1-0.3-0.4-0.5-0.6-0.6c-0.3-0.1-0.6-0.1-0.9,0.1c-1.5,0.7-2.7,2.1-3.3,3.8c-0.3,0.7-0.4,1.5-0.4,2.3\n			c0,0.2,0,0.3,0,0.5c0,0.1,0,0.1,0,0.2v1.7c-0.2-0.4-0.6-0.8-0.9-1.1c-1.2-1.2-3-2-4.6-2c-0.3,0-0.6,0.1-0.8,0.3\n			c-0.2,0.2-0.3,0.5-0.3,0.8c0,0,0,0,0,0c0,1.6,0.8,3.3,2,4.5c1.2,1.2,2.9,2,4.6,2v2c-0.2-0.4-0.6-0.8-0.9-1.1c-1.2-1.2-3-2-4.6-2\n			c-0.3,0-0.6,0.1-0.8,0.3c-0.2,0.2-0.3,0.5-0.3,0.8c0,0,0,0,0,0c0,1.6,0.8,3.3,2,4.5c1.2,1.2,2.9,2,4.6,2v2c-0.2-0.4-0.6-0.8-0.9-1.1\n			c-1.2-1.2-3-2-4.6-2c-0.3,0-0.6,0.1-0.8,0.3c-0.2,0.2-0.3,0.5-0.3,0.8c0,0,0,0,0,0c0,1.6,0.8,3.3,2,4.5c1.2,1.2,2.9,2,4.6,2v2\n			c-0.2-0.4-0.6-0.8-0.9-1.1c-1.2-1.2-3-2-4.6-2c-0.3,0-0.6,0.1-0.8,0.3c-0.2,0.2-0.3,0.5-0.3,0.8c0,0,0,0,0,0c0,1.6,0.8,3.3,2,4.5\n			c1.2,1.2,2.9,2,4.6,2v9.6c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1v-7c1.5-0.1,3-0.8,4.1-2c1.2-1.2,2-2.9,2-4.5c0,0,0,0,0,0\n			c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3c-1.6,0-3.3,0.8-4.6,2c-0.2,0.2-0.5,0.3-0.5,0.5v-1.5c1.5-0.1,3-0.8,4.1-2\n			c1.2-1.2,2-2.9,2-4.5c0,0,0,0,0,0c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3c-1.6,0-3.3,0.8-4.6,2c-0.2,0.2-0.5,0.3-0.5,0.5\n			v-1.4c1.5-0.1,3-0.8,4.1-2c1.2-1.2,2-2.9,2-4.5c0,0,0,0,0,0c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3c-1.6,0-3.3,0.8-4.6,2\n			c-0.2,0.2-0.5,0.3-0.5,0.5v-1.5c1.5-0.1,3-0.8,4.1-2c1.2-1.2,2-2.9,2-4.5c0,0,0,0,0,0c0-0.3-0.1-0.6-0.3-0.8\n			C40.6,9.8,40.3,9.7,40,9.7z M29.7,11.2c-0.5-0.5-0.9-1.1-1.1-1.6c0.5,0.2,1.1,0.6,1.6,1.1c0.5,0.5,0.9,1.1,1.1,1.6\n			C30.8,12,30.2,11.7,29.7,11.2z M29.7,17.7c-0.5-0.5-0.9-1.1-1.1-1.6c0.5,0.2,1.1,0.6,1.6,1.1c0.5,0.5,0.9,1.1,1.1,1.6\n			C30.8,18.6,30.2,18.2,29.7,17.7z M29.7,24.2c-0.5-0.5-0.9-1.1-1.1-1.6c0.5,0.2,1.1,0.6,1.6,1.1c0.5,0.5,0.9,1.1,1.1,1.6\n			C30.8,25.1,30.2,24.7,29.7,24.2z M29.7,30.8c-0.5-0.5-0.9-1.1-1.1-1.6c0.5,0.2,1.1,0.6,1.6,1.1c0.5,0.5,0.9,1.1,1.1,1.6\n			C30.8,31.6,30.2,31.3,29.7,30.8z M36.9,32.8c0.5-0.5,1.1-0.8,1.6-1.1c-0.2,0.5-0.6,1.1-1.1,1.6c-0.5,0.5-1.1,0.8-1.6,1.1\n			C36.1,33.9,36.4,33.3,36.9,32.8z M36.9,26.3c0.5-0.5,1.1-0.8,1.6-1.1c-0.2,0.5-0.6,1.1-1.1,1.6c-0.5,0.5-1.1,0.8-1.6,1.1\n			C36.1,27.3,36.4,26.8,36.9,26.3z M36.9,19.8c0.5-0.5,1.1-0.8,1.6-1.1c-0.2,0.5-0.6,1.1-1.1,1.6c-0.5,0.5-1.1,0.8-1.6,1.1\n			C36.1,20.8,36.4,20.3,36.9,19.8z M35.2,6.2c0.2-0.7,0.6-1.2,1-1.6c0,0.1,0,0.2,0,0.3c0,0.5-0.1,1-0.3,1.6c-0.2,0.7-0.6,1.2-1,1.7\n			c0-0.1,0-0.2,0-0.3C34.9,7.3,35,6.7,35.2,6.2z M37.5,13.8c-0.5,0.5-1.1,0.8-1.6,1.1c0.2-0.5,0.6-1.1,1.1-1.6\n			c0.5-0.5,1.1-0.8,1.6-1.1C38.4,12.7,38,13.3,37.5,13.8z"/>\n		</svg>\n							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 63 52.6" style="enable-background:new 0 0 63 52.6;" xml:space="preserve">\n		<path class="st0" d="M26.8,15.3c-2.5,0-4.8,0.8-6.8,2.2c-2-1.4-4.3-2.2-6.8-2.2c-6.3,0-11.5,5.1-11.5,11.4c0,1.3,0.2,2.6,0.7,3.8\n			C2.6,31.2,3,32,3.5,32.7c0.4,0.6,0.8,1.1,1.2,1.6L16.2,49l0.1,0.2c0,0,0,0,0,0c0.9,1.1,2.2,1.7,3.6,1.7s2.7-0.6,3.6-1.7c0,0,0,0,0,0\n			l11.6-14.9c0.5-0.5,0.9-1,1.2-1.6c0.5-0.7,0.8-1.5,1.1-2.3c0.4-1.2,0.7-2.5,0.7-3.8C38.3,20.4,33.1,15.3,26.8,15.3z M35.1,29.5\n			c-0.2,0.6-0.5,1.2-0.9,1.8c-0.3,0.4-0.6,0.9-1,1.3c0,0-0.1,0.1-0.1,0.1L21.6,47.6c-0.4,0.5-1,0.7-1.6,0.7c-0.6,0-1.2-0.3-1.6-0.7\n			L6.7,32.6c0,0,0-0.1-0.1-0.1c-0.4-0.4-0.7-0.8-1-1.3c-0.4-0.6-0.6-1.1-0.9-1.8c-0.3-0.9-0.5-1.9-0.5-2.9c0-4.8,4-8.8,8.9-8.8\n			c2.2,0,4.3,0.8,5.9,2.2c0.5,0.4,1.3,0.4,1.7,0c1.6-1.4,3.7-2.2,5.9-2.2c4.9,0,8.9,3.9,8.9,8.8C35.7,27.6,35.5,28.6,35.1,29.5z"/>\n		<path class="st0" d="M59.2,6.7h-3.4V3.3c0-1.4-1.1-2.3-2.5-2.3h-5.3c-1.4,0-2.4,1-2.4,2.3v3.4h-3.5c-1.4,0-2.4,1-2.4,2.4v5.2\n			c0,1.4,1,2.4,2.4,2.4h3.5v3.4c0,1.4,1,2.4,2.4,2.4h5.3c1.4,0,2.5-1,2.5-2.4v-3.4h3.4c1.4,0,2.4-1.1,2.4-2.4V9.1\n			C61.7,7.7,60.6,6.7,59.2,6.7z M59.1,14.1h-4.5c-0.7,0-1.3,0.6-1.3,1.3v4.4h-5v-4.4c0-0.7-0.7-1.3-1.4-1.3h-4.4V9.3h4.4\n			c0.7,0,1.4-0.6,1.4-1.4V3.5h5v4.4c0,0.7,0.6,1.4,1.3,1.4h4.5V14.1z"/>\n		<path class="st0" d="M27.2,20.9c-0.7-0.1-1.4,0.3-1.5,1c-0.1,0.7,0.3,1.4,1,1.5c0.1,0,2.4,0.5,3,2.4c0.2,0.6,0.7,0.9,1.3,0.9\n			c0.1,0,0.3,0,0.4-0.1c0.7-0.2,1.1-0.9,0.9-1.6C31.1,21.6,27.3,20.9,27.2,20.9z"/>\n		</svg>\n						</div>\n					</div>\n					<div class="block-2">\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="-274 235.8 46 370.1" style="enable-background:new -274 235.8 46 370.1;" xml:space="preserve">\n		<g>\n			<path class="st0" d="M-267.8,240.8l1.7,9.5l-2.3,0.2c-0.3,0-0.5,0.2-0.6,0.5l-0.7,2.2c-0.1,0.2,0,0.4,0.1,0.6s0.3,0.3,0.6,0.3h3.3\n				v0.1c0,1.7,1.4,3,3.1,3s3.1-1.4,3.1-3v-0.1h3.3v0.1c0,1.7,1.4,3,3.1,3s3.1-1.4,3.1-3v-0.1h1.8c0.4,0,0.7-0.3,0.7-0.7\n				s-0.3-0.7-0.7-0.7H-268l0.3-0.8l19.5-2.1c0.4,0,0.6-0.3,0.6-0.7v-8.3c0-0.4-0.3-0.7-0.7-0.7h-18.3c0-0.1-0.1-0.2-0.2-0.2l-3.6-2.8\n				c-0.3-0.2-0.8-0.2-1,0.1s-0.2,0.8,0.1,1.1L-267.8,240.8z M-251.6,254.1C-251.6,254.1-251.6,254.2-251.6,254.1c0,1-0.8,1.7-1.7,1.7\n				s-1.7-0.7-1.7-1.6v-0.1L-251.6,254.1L-251.6,254.1z M-261,254.1C-261,254.1-261,254.2-261,254.1c0,1-0.8,1.7-1.7,1.7\n				s-1.7-0.7-1.7-1.6v-0.1L-261,254.1L-261,254.1z M-249,241.5v7l-15.7,1.6l-1.6-8.6H-249z"/>\n			<path class="st0" d="M-244.9,258.6v1.7c0,0.4,0.3,0.7,0.7,0.7h5.5c0,0.2,0,0.4,0,0.6v0.9c0,0.4,0.3,0.7,0.7,0.7h6.2\n				c0.4,0,0.7-0.3,0.7-0.7v-0.9c0-0.2,0-0.5,0-0.8c0-1.9,0.1-4.5-0.8-6.2l0,0l-0.1-0.1c-0.1-0.2-0.4-0.4-0.6-0.4l0,0v-0.4\n				c0-0.9-0.6-1.7-1.5-2c-0.2-0.5-0.4-1-0.7-1.5l0,0l-0.1-0.2c-0.1-0.2-0.4-0.4-0.6-0.4h-0.8v-1.1c0-1.4-1.2-2.6-2.8-2.6\n				c-1.5,0-2.8,1.2-2.8,2.6v1h-0.8c-0.3,0-0.5,0.1-0.6,0.4l-0.1,0.2l0,0c-1.5,3.1-1.5,4.5-1.5,7C-244.9,257.5-244.9,258-244.9,258.6z\n				M-233,255.5c0.6,1.4,0.5,3.6,0.5,5.3c0,0.3,0,0.6,0,0.8v0.2h-4.8v-0.2c0-0.2,0-0.4,0-0.6c0-0.1,0-0.1,0-0.2c0-0.4,0-0.8,0-1.2\n				c0-1.4,0.1-3,0.5-4.1h2.1h1.4C-233.3,255.5-233,255.5-233,255.5z M-235.1,252.9c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0.3,0.9,0.8v0.4v0.4\n				h-0.7h-1V254v-0.4C-235.8,253.3-235.5,253-235.1,252.9z M-240.5,248.5c0-0.7,0.6-1.2,1.4-1.2s1.4,0.5,1.4,1.2v1h-2.7L-240.5,248.5\n				L-240.5,248.5z M-242.3,250.9h6.4c0.1,0.2,0.2,0.5,0.3,0.7c-0.9,0.3-1.6,1.1-1.6,2v0.4l0,0c-0.3,0-0.5,0.1-0.6,0.4l-0.1,0.1l0,0\n				c-0.7,1.4-0.8,3.3-0.8,5h-4.8v-1c0-0.6,0-1.1,0-1.5C-243.6,254.7-243.6,253.5-242.3,250.9z"/>\n			<path class="st0" d="M-243.4,419.5L-243.4,419.5L-243.4,419.5c-0.2-0.2-0.4-0.2-0.6-0.2c-0.5,0-0.9,0.3-1,0.8c0,0.1,0,0.1,0,0.2\n				v10.2v0.1v0.1v0.1c0.1,0.5,0.5,0.8,1,0.8h3c0.5,0,1-0.4,1.1-0.9c0-0.1,0-0.1,0-0.2v-0.1c-0.2-1.9-0.8-8.4-3.3-10.8\n				C-243.3,419.6-243.3,419.6-243.4,419.5z M-243.5,430.1V422c1.1,2,1.7,5.2,1.9,8.1H-243.5z"/>\n			<path class="st0" d="M-236.6,433.2c0-10.5-2.5-14-4.1-16.3c-0.2-0.2-0.3-0.4-0.4-0.6l0,0c-0.8-1.2-1.9-1.8-3.2-1.8h-0.8v-2\n				c0-0.3-0.1-0.6-0.4-0.7c-0.1,0-2.3-1.2-4.8,0c-0.3,0.1-0.4,0.4-0.4,0.7v2.1c-1.2,0.4-2.1,1.6-2.1,2.9v15.6c0,1.7,1.4,3,3.1,3h10.1\n				C-238,436.2-236.7,435-236.6,433.2C-236.6,433.3-236.6,433.3-236.6,433.2z M-249.1,413c1.1-0.4,2.1-0.2,2.5,0v1.3h-2.5V413z\n				M-238.2,433.2c0,0.8-0.7,1.4-1.5,1.4h-10.1c-0.8,0-1.5-0.6-1.5-1.5v-15.6c0-0.8,0.7-1.4,1.5-1.4h5.5c0.8,0,1.4,0.3,1.9,1.1\n				c0.1,0.2,0.3,0.4,0.5,0.6C-240.4,420-238.2,423.2-238.2,433.2C-238.1,433.2-238.1,433.2-238.2,433.2z"/>\n			<path class="st0" d="M-263.4,412.3c-1.3,0.5-2.1,1.7-2.1,3.1v13.2c0,1.5,1.2,2.8,2.7,2.8h4.2c1.5,0,2.7-1.2,2.7-2.8v-13.1\n				c0-1.5-0.8-2.7-2.1-3.2c-0.6-0.2-0.6-0.7-0.6-0.8l0,0v-4.4c0-0.9-0.8-1.7-1.7-1.7h-0.9c-0.9,0-1.7,0.7-1.7,1.7v4.4l0,0\n				C-262.8,411.5-262.8,412.1-263.4,412.3z M-261.2,411.5v-4.4c0-0.1,0-0.1,0.1-0.1h0.9c0.1,0,0.1,0,0.1,0.1v4.4\n				c0,0.6,0.3,1.9,1.6,2.3c1,0.3,1.1,1.2,1.1,1.7v13.2c0,0.6-0.5,1.2-1.2,1.2h-4.2c-0.6,0-1.1-0.5-1.1-1.2v-13.2\n				c0-0.5,0.1-1.3,1.1-1.7C-261.5,413.3-261.2,412.1-261.2,411.5z"/>\n			<path class="st0" d="M-261.6,428.8c1.3,0,1.7,0,1.7,0s1.4,0.1,1.4-1.2c0-1.3,0-12.3,0-12.3h-4.4v12.3\n				C-262.8,427.6-262.9,428.8-261.6,428.8z"/>\n			<path class="st0" d="M-252.1,587.3c0-0.9-0.7-1.6-1.6-1.7c-4.5-0.3-9-0.1-10.4,0h-0.1c-0.1,0-0.2,0-0.3,0c-0.8,0.2-1.3,0.8-1.3,1.6\n				v0.1v0.1c0.5,6.1,2.1,12.9,2.2,13.4v0.2l0,0c0.1,0.5,0.6,1,1,1.1v2.4c0,0.3,0.2,0.5,0.5,0.7c0.1,0,1.6,0.7,3.5,0.7\n				c1,0,2.1-0.2,3.1-0.7c0.2-0.1,0.4-0.4,0.4-0.6v-2.5c0.3-0.2,0.7-0.5,0.8-0.9c0-0.1,0-0.1,0-0.2\n				C-252.4,592.8-252.1,587.4-252.1,587.3C-252.1,587.4-252.1,587.4-252.1,587.3L-252.1,587.3z M-256.6,604.2c-1.8,0.7-3.5,0.2-4.5,0\n				v-1.8c1,0.1,1.7,0.1,2.4,0.1c0.6,0,1.1,0,1.5,0h0.6V604.2z M-253.5,587.3c0,0.3-0.4,5.5-2.2,13.4v0.1h-0.1c0,0-0.5,0.1-1.4,0.1\n				l-4.5-0.1l0,0c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0l0,0v-0.1c0,0,0,0,0-0.1s-1.7-7-2.2-13.2l0,0l0,0c0-0.1,0.1-0.2,0.2-0.2l0,0h0.1l0,0\n				c1.3-0.1,5.8-0.3,10.2,0c0,0,0,0,0.1,0C-253.6,587.1-253.5,587.2-253.5,587.3L-253.5,587.3z"/>\n			<path class="st0" d="M-241.6,587l-0.1-0.2c-0.1-0.2-0.3-0.3-0.5-0.4c0,0,0,0,0-0.1v-2.6c0-1.2-1-2.1-2.2-2.1h-0.2v-1.1\n				c0-0.1,0-0.1,0-0.2h2.8c0.4,0,0.7-0.3,0.7-0.7s-0.3-0.7-0.7-0.7h-4.6c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h0.4\n				c0,0.2,0,0.2,0,0.2v1.1h-0.2c-1.2,0-2,0.9-2,2.1v2.6v0.1c-0.2,0-0.4,0.2-0.5,0.4l-0.1,0.2l0,0c-1.5,3-2.1,5.4-2.1,11.5v1.7\n				c0,0.4,0.4,0.8,0.7,0.8h10.2c0.4,0,0.7-0.4,0.7-0.8v-1.7C-239.4,593.6-239.8,590.7-241.6,587L-241.6,587z M-246.8,586.3v-2.6\n				c0-0.4,0.2-0.7,0.6-0.7h1.9c0.4,0,0.7,0.3,0.7,0.7v2.6c0,0-0.1,0-0.1,0.1h-3.2C-246.9,586.3-246.8,586.4-246.8,586.3z\n				M-240.9,599.6h-8.8v-1.1c0-4.7,0.3-7.2,1.9-10.6h5c1.6,3.4,1.9,5.9,1.9,10.6L-240.9,599.6L-240.9,599.6z"/>\n			<path class="st0" d="M-262.8,583.4c0-0.4-0.3-0.7-0.7-0.7c-2,0-3.7-1.6-3.7-3.7c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7\n				c0,2-1.6,3.7-3.7,3.7c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7c2,0,3.7,1.6,3.7,3.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7\n				c0-2,1.7-3.7,3.7-3.7C-263.1,584.1-262.8,583.8-262.8,583.4z M-267.9,585.2c-0.4-0.7-1-1.3-1.8-1.8c0.7-0.4,1.3-1,1.8-1.8\n				c0.4,0.7,1,1.3,1.8,1.8C-266.9,583.9-267.5,584.5-267.9,585.2z"/>\n			<path class="st0" d="M-229.8,590.5c-1.5,0-2.7-2.1-2.7-4.6c0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7c0,2.5-1.2,4.6-2.7,4.6\n				c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7c1.5,0,2.7,2.1,2.7,4.6c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7c0-2.5,1.2-4.6,2.7-4.6\n				c0.4,0,0.7-0.3,0.7-0.7S-229.4,590.5-229.8,590.5z M-233.2,593.1c-0.4-0.8-0.9-1.4-1.4-1.9c0.6-0.5,1.1-1.1,1.4-1.9\n				c0.4,0.8,0.9,1.4,1.4,1.9C-232.4,591.6-232.9,592.3-233.2,593.1z"/>\n		</g>\n		</svg>\n					</div>\n					<div class="block-3">\n						<span class="label">Industry & logistic</span>\n						<div class="block-3-inner">\n							<div class="coloredBlock"></div>\n							<div class="svgs">\n								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 102.1 33.6" style="enable-background:new 0 0 102.1 33.6;" xml:space="preserve">\n		<path class="st0" d="M99.6,31.1c-0.7,0-1-0.1-1.4-0.3c-0.5-0.2-1-0.5-2.1-0.5c-1,0-1.6,0.3-2.1,0.5c-0.4,0.2-0.7,0.3-1.4,0.3\n			c-0.7,0-1-0.1-1.4-0.3c-0.5-0.2-1-0.5-2.1-0.5c-1,0-1.6,0.2-2,0.4c1.8-2.5,6.6-9,6.7-9.1c0.4-0.5,0.4-1.2,0.1-1.7c0,0,0,0,0,0\n			c-0.3-0.5-0.8-0.8-1.5-0.8h-3.3v-5.5v-0.1c0-0.4-0.1-0.9-0.3-1.2c-0.4-0.7-1.1-1.2-2.1-1.2c0,0,0,0,0,0h0H46.2h-0.5\n			c-1.3,0-2.4,1.1-2.4,2.4v0.1v5.5h-5.8v-2.3l4.2-3.7c0.1,0,0.1-0.1,0.1-0.2c0.2-0.3,0.2-0.6,0.3-0.8h0V12c0-0.1,0-0.2,0-0.3l0-0.7\n			V7.5c0-1.1-0.7-1.8-1.8-1.8h-5.8V2.4c0-1-0.6-1.7-1.5-1.7h-8.2c-0.9,0-1.7,0.8-1.7,1.7v3.3h-1c-1.1,0-2.2,0.7-2.2,1.8V11v0.8v0.3h0\n			c0.1,0.6,0.5,1,0.7,1.2l0,0c0,0,0,0,0,0l4.4,3.5v2.3h-6.4v-5.5v-0.1c0-0.2,0-0.4-0.1-0.6c-0.2-1.1-1.1-1.8-2.2-1.8h-0.1H3.8H3.6\n			c-1.3,0-2.4,1.1-2.4,2.4v0.1v7.3v0c0,0.1,0,0.2,0,0.3c0,0.2,0.1,0.4,0.2,0.6l2.8,6.4l0.9,2.2l0.5,1.1l0.2,0.4c0.1,0,0.2,0,0.3,0\n			c0.7,0,1,0.1,1.4,0.3c0.5,0.2,1,0.5,2.1,0.5c1,0,1.6-0.3,2.1-0.5c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6-0.2,1.1-0.2\n			c0.5,0,0.8,0.1,1.1,0.2c0.1,0,0.2,0.1,0.3,0.1c0.5,0.2,1,0.5,2.1,0.5c1,0,1.6-0.3,2.1-0.5c0.1,0,0.2-0.1,0.3-0.1\n			c0.3-0.1,0.6-0.2,1.1-0.2c0.5,0,0.8,0.1,1.1,0.2c0.1,0,0.2,0.1,0.3,0.1c0.5,0.2,1,0.5,2.1,0.5c1,0,1.6-0.3,2.1-0.5\n			c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6-0.2,1.1-0.2c0.5,0,0.8,0.1,1.1,0.2c0.1,0,0.2,0.1,0.3,0.1c0.5,0.2,1,0.5,2.1,0.5\n			c1,0,1.6-0.3,2.1-0.5c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6-0.2,1.1-0.2c0.5,0,0.8,0.1,1.1,0.2c0.1,0,0.2,0.1,0.3,0.1\n			c0.5,0.2,1,0.5,2.1,0.5c1,0,1.6-0.3,2.1-0.5c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6-0.2,1.1-0.2c0.5,0,0.8,0.1,1.1,0.2\n			c0.1,0,0.2,0.1,0.3,0.1c0.5,0.2,1,0.5,2.1,0.5c1,0,1.6-0.3,2.1-0.5c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6-0.2,1.1-0.2\n			c0.5,0,0.8,0.1,1.1,0.2c0.1,0,0.2,0.1,0.3,0.1c0.5,0.2,1,0.5,2.1,0.5c1,0,1.6-0.3,2.1-0.5c0.1,0,0.2-0.1,0.3-0.1\n			c0.3-0.1,0.6-0.2,1.1-0.2c0.5,0,0.8,0.1,1.1,0.2c0.1,0,0.2,0.1,0.3,0.1c0.5,0.2,1,0.5,2.1,0.5s1.6-0.3,2.1-0.5\n			c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6-0.2,1.1-0.2c0.5,0,0.8,0.1,1.1,0.2c0.1,0,0.2,0.1,0.3,0.1c0.5,0.2,1,0.5,2.1,0.5\n			c1,0,1.6-0.3,2.1-0.5c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6-0.2,1.1-0.2c0.5,0,0.8,0.1,1.1,0.2c0.1,0,0.2,0.1,0.3,0.1\n			c0.5,0.2,1,0.5,2.1,0.5c1,0,1.6-0.3,2.1-0.5c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6-0.2,1.1-0.2s0.8,0.1,1.1,0.2c0.1,0,0.2,0.1,0.3,0.1\n			c0.5,0.2,1,0.5,2.1,0.5c1,0,1.6-0.3,2.1-0.5c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6-0.2,1.1-0.2c0.3,0,0.5,0,0.7,0.1\n			c0.3,0.1,0.5,0.2,0.7,0.3c0.4,0.2,0.9,0.4,1.7,0.5c0.1,0,0.2,0,0.4,0c1,0,1.6-0.3,2.1-0.5c0.4-0.2,0.7-0.3,1.4-0.3\n			c0.7,0,1,0.1,1.4,0.3c0.5,0.2,1,0.5,2.1,0.5s1.6-0.3,2.1-0.5c0.1,0,0.2-0.1,0.3-0.1c0.3-0.1,0.6-0.2,1.1-0.2c0.7,0,1,0.1,1.4,0.3\n			c0.5,0.2,1,0.5,2.1,0.5c0.4,0,0.8-0.4,0.8-0.8C100.4,31.4,100.1,31.1,99.6,31.1z M21.9,10.1V7.5c0.2,0,0.2,0,0.4,0h18.1v2.6v0.2\n			H21.9V10.1z M25.1,2.5h7.8v3.2h-7.8V2.5z M3,21.1C3,21.1,3,21.1,3,21.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1h15h0.9h7.3\n			c0.5,0,0.9-0.4,0.9-0.9v-3.6c0-0.3-0.1-0.5-0.3-0.7l-4.4-3.5h17.9l-4.1,3.6c-0.2,0.2-0.3,0.4-0.3,0.7V20c0,0.5,0.4,0.9,0.9,0.9h6.7\n			h0.9h44.1h0.9h2.9c-1,1.4-5.1,7.1-6.6,9c-0.3,0.4-0.6,0.7-0.9,1c-0.1,0-0.2-0.1-0.3-0.1c-0.5-0.2-1-0.5-2.1-0.5\n			c-1,0-1.6,0.3-2.1,0.5c-0.4,0.2-0.7,0.3-1.4,0.3c-0.7,0-1-0.1-1.4-0.3c-0.5-0.2-1-0.5-2.1-0.5s-1.6,0.3-2.1,0.5\n			c-0.4,0.2-0.7,0.3-1.4,0.3c-0.7,0-1-0.1-1.4-0.3c-0.5-0.2-1-0.5-2.1-0.5c-1,0-1.6,0.3-2.1,0.5c-0.4,0.2-0.7,0.3-1.4,0.3\n			c-0.7,0-1-0.1-1.4-0.3c-0.5-0.2-1-0.5-2.1-0.5c-1,0-1.6,0.3-2.1,0.5c-0.4,0.2-0.7,0.3-1.4,0.3c-0.7,0-1-0.1-1.4-0.3\n			c-0.5-0.2-1-0.5-2.1-0.5c-1,0-1.6,0.3-2.1,0.5c-0.4,0.2-0.7,0.3-1.4,0.3c-0.7,0-1-0.1-1.4-0.3c-0.5-0.2-1-0.5-2.1-0.5\n			c-1,0-1.6,0.3-2.1,0.5c-0.4,0.2-0.7,0.3-1.4,0.3c-0.7,0-1-0.1-1.4-0.3c-0.5-0.2-1-0.5-2.1-0.5c-1,0-1.6,0.3-2.1,0.5\n			c-0.4,0.2-0.7,0.3-1.4,0.3c-0.7,0-1-0.1-1.4-0.3c-0.5-0.2-1-0.5-2.1-0.5c-1,0-1.6,0.3-2.1,0.5c-0.4,0.2-0.7,0.3-1.4,0.3\n			c-0.7,0-1-0.1-1.4-0.3c-0.5-0.2-1-0.5-2.1-0.5c-1,0-1.6,0.3-2.1,0.5c-0.4,0.2-0.7,0.3-1.4,0.3c-0.7,0-1-0.1-1.4-0.3\n			c-0.5-0.2-1-0.5-2.1-0.5c-1,0-1.6,0.3-2.1,0.5c-0.4,0.2-0.7,0.3-1.4,0.3c-0.7,0-1-0.1-1.4-0.3c-0.5-0.2-1-0.5-2.1-0.5\n			c-1,0-1.6,0.3-2.1,0.5c-0.4,0.2-0.7,0.3-1.4,0.3c-0.7,0-1-0.1-1.4-0.3c-0.3-0.1-0.6-0.3-1.1-0.4L3,21.1z"/>\n		</svg>\n								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 37.5 31.8" style="enable-background:new 0 0 37.5 31.8;" xml:space="preserve">\n		<path class="st0" d="M11.5,0.4c-0.5,0-0.9,0.4-0.9,0.9v17V25H1.8c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h8.8V28\n			c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9v-2.1v-7.5v-17C12.4,0.8,12,0.4,11.5,0.4z"/>\n		<path class="st0" d="M25,16.1c0.3-0.4,0.2-1-0.1-1.3L22,12.5c-0.4-0.3-1-0.2-1.3,0.1c-0.3,0.4-0.2,1,0.1,1.3l2.9,2.3\n			c0.2,0.1,0.4,0.2,0.6,0.2C24.6,16.4,24.9,16.3,25,16.1z"/>\n		<path class="st0" d="M36.3,24.7v-8.4c0-0.1,0-0.2-0.1-0.4L33.9,1.7c-0.1-0.5-0.5-0.8-1-0.8L26,1.8c-0.2,0-3.8,0.4-5.2,3.3\n			C19.9,7,16.3,16.2,14.8,20l-0.3,0.7l-0.4,1C14,21.7,14,21.9,14,22v4.2c-0.1,0.3-0.1,0.6-0.1,0.9c0,0.3,0,0.7,0.1,1\n			c0,0.2,0.1,0.3,0.1,0.4C14.7,30,16,31,17.7,31c1.5,0,2.7-0.8,3.4-2h7.5c0.8,1.2,2.2,2,3.7,2c2.5,0,4.4-2,4.4-4.5\n			C36.7,25.9,36.6,25.3,36.3,24.7z M22.5,5.8c0.9-1.9,3.7-2.2,3.7-2.3l6.1-0.7l2,12.5h-4.6c-0.1,0-0.2,0-0.3,0.1l-5.6,2.2l-4.7-3.6\n			C20.5,10.4,22,6.9,22.5,5.8z M17.7,29.2c-0.3,0-0.7-0.1-0.9-0.2c-0.6-0.3-1.1-1-1.1-1.8c0-0.2,0-0.5,0.1-0.7\n			c0.3-0.8,1.1-1.4,1.9-1.4c1.1,0,2.1,0.9,2.1,2c0,0,0,0,0,0h0c0,0.8-0.4,1.5-1.1,1.8C18.3,29.1,18,29.2,17.7,29.2z M21.5,27.2\n			C21.5,27.2,21.5,27.2,21.5,27.2c0-2.1-1.7-3.8-3.8-3.8c-0.7,0-1.4,0.2-1.9,0.5v-1.5l0,0c0,0,0.3-0.7,0.7-1.7l2-4.9l4.7,3.6\n			c0.2,0.2,0.6,0.2,0.9,0.1l5.9-2.3h4.6v5.5c-0.7-0.4-1.4-0.6-2.2-0.6c-2.5,0-4.4,2-4.4,4.5c0,0.2,0,0.4,0,0.6H21.5z M32.3,29.2\n			c-0.4,0-0.8-0.1-1.1-0.2c-0.7-0.3-1.3-1-1.5-1.8c0-0.2-0.1-0.4-0.1-0.6c0-1.5,1.2-2.7,2.7-2.7c0.9,0,1.8,0.5,2.2,1.3\n			c0.3,0.4,0.4,0.9,0.4,1.4c0,1.1-0.6,2-1.6,2.4C33,29.1,32.6,29.2,32.3,29.2z"/>\n		<path class="st0" d="M32.3,25.5c-0.6,0-1,0.5-1,1c0,0.2,0.1,0.5,0.2,0.6c0.2,0.3,0.5,0.4,0.8,0.4c0.3,0,0.6-0.2,0.8-0.4\n			c0.1-0.2,0.2-0.4,0.2-0.6C33.3,26,32.8,25.5,32.3,25.5z"/>\n		<path class="st0" d="M17.6,26.1c-0.6,0-1,0.5-1,1c0,0,0,0,0,0c0,0.6,0.5,1,1,1c0.6,0,1-0.4,1-1c0,0,0,0,0,0\n			C18.7,26.6,18.2,26.1,17.6,26.1z"/>\n		</svg>\n								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 90.3 30.2" style="enable-background:new 0 0 90.3 30.2;" xml:space="preserve">\n		<style type="text/css">\n			.st0{fill:#FFFFFF;}\n			.st1{fill:none;}\n		</style>\n		<path class="st0" d="M88.9,1.2H31.6c-1.2,0-1.9,0.2-1.9,0.2c0,0-0.1,0-0.1,0c-0.2,0.1-5.1,2.4-6.6,3.2c-1.2,0.6-1.6,1.9-1.6,2.6\n			c0,0,0,0,0,0v7.4c0,1.5,1.1,2.5,1.3,2.7l1.9,1.8h-5.3V2.6c0-0.3-0.1-0.5-0.3-0.7c-0.2-0.2-0.5-0.2-0.7-0.2C18.3,1.8,9.3,3,7.6,3.3\n			c-2.1,0.3-2.8,1.7-2.9,2c-0.1,0.3-1.7,4-2.5,5.9c-0.8,2-1.1,4-1.1,4.1c0,0,0,0.1,0,0.1v7.5c0,1.4,1.4,2.1,2.1,2.2l1.6,0.4\n			c0.3,0.1,0.5,0.1,0.7,0.1c0.6,1.5,1.8,2.6,3.3,3.2c0.2,0.1,0.4,0.1,0.5,0.2c0.2,0,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.6,0.1\n			c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.1,2-0.3c1.2-0.5,2.3-1.3,3-2.5h13.7c0.1,0,0.1,0,0.2,0c0.7,1.1,1.7,2,3,2.5c0.2,0.1,0.4,0.1,0.5,0.2\n			c0.2,0,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.6,0.1c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.1,2-0.3c1.2-0.5,2.3-1.3,3-2.5h17c0.7,1.1,1.7,2,3,2.5\n			c0.2,0.1,0.4,0.1,0.5,0.2c0.2,0,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.6,0.1c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.1,2-0.3\n			c1.2-0.4,2.2-1.2,2.8-2.3c0.7,1,1.7,1.9,2.8,2.3c0.2,0.1,0.4,0.1,0.5,0.2c0.2,0,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.6,0.1\n			c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.1,2-0.3c1.2-0.4,2.2-1.2,2.8-2.3c0.7,1,1.7,1.9,2.8,2.3c0.2,0.1,0.4,0.1,0.5,0.2\n			c0.2,0,0.4,0.1,0.6,0.1c0.2,0,0.4,0,0.6,0.1c0.1,0,0.2,0,0.3,0c0.7,0,1.3-0.1,2-0.3c1.4-0.5,2.6-1.6,3.3-3.1c0.1-0.3,0.3-0.7,0.3-1\n			h2.7c0.5,0,0.9-0.4,0.9-0.9V2.1C89.7,1.6,89.3,1.2,88.9,1.2z M12.1,27c-0.4,0.2-0.9,0.2-1.4,0.2c-0.1,0-0.1,0-0.2,0\n			c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.2-0.1-0.4-0.1c-1.1-0.4-1.9-1.2-2.3-2.3c-0.2-0.5-0.3-0.9-0.3-1.4\n			c0-0.2,0-0.4,0-0.6C7,22,7.3,21.4,7.7,20.8c0.1-0.1,0.1-0.1,0.1-0.2c0.3-0.3,0.6-0.6,0.9-0.8c0.2-0.1,0.4-0.2,0.6-0.3\n			c0.1,0,0.2-0.1,0.4-0.1c0.1,0,0.3-0.1,0.4-0.1c0.1,0,0.3,0,0.4,0c0.1,0,0.1,0,0.2,0c0.5,0,0.9,0.1,1.4,0.2c0.2,0.1,0.5,0.2,0.7,0.3\n			c0,0,0,0,0,0c0.4,0.2,0.7,0.5,0.9,0.8c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0.4,0.6,0.7,1.4,0.7,2.3c0,0,0,0,0,0.1\n			c0,0.1-0.1,0.2-0.1,0.4v0.5c-0.1,0.2-0.1,0.4-0.2,0.7C13.9,25.8,13.1,26.6,12.1,27z M35.8,27c-0.4,0.2-0.9,0.2-1.4,0.2\n			c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.2-0.1-0.4-0.1c-1.1-0.4-1.9-1.2-2.3-2.3\n			c-0.2-0.5-0.3-0.9-0.3-1.4c0-0.5,0.1-1,0.3-1.4c0.2-0.4,0.4-0.8,0.7-1.1c0.1,0,0.2-0.1,0.3-0.2c0.7-0.7,1.7-1.1,2.8-1.1\n			c1.4,0,2.6,0.7,3.4,1.9c0.3,0.5,0.5,1.1,0.5,1.6c-0.1,0.1-0.2,0.3-0.2,0.5v0.9c0,0.2-0.1,0.3-0.2,0.5C37.7,25.8,36.8,26.6,35.8,27z\n			M62.7,27c-0.4,0.2-0.9,0.2-1.4,0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.2-0.1-0.4-0.1\n			c-1.1-0.4-1.9-1.2-2.3-2.3c-0.1-0.1-0.1-0.3-0.1-0.4v-1c0-2,1.9-3.9,4.1-3.9c0.1,0,0.3,0,0.4,0c0.2,0,0.4,0.1,0.7,0.2\n			c0.2,0.1,0.5,0.2,0.7,0.3c0,0,0,0,0,0c0.5,0.3,0.9,0.7,1.2,1.2c0.4,0.6,0.6,1.2,0.7,1.9c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3\n			c0,0.4-0.1,0.9-0.3,1.3C64.5,25.8,63.7,26.6,62.7,27z M72.3,27c-0.4,0.2-0.9,0.2-1.4,0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0\n			c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.2-0.1-0.4-0.1c-1.1-0.4-1.9-1.2-2.3-2.3c-0.1-0.4-0.2-0.7-0.3-1.1c0-0.1,0-0.2,0-0.3\n			c0-0.1,0-0.2,0-0.3c0-0.1,0-0.1,0-0.2c0.1-0.1,0.2-0.3,0.3-0.4c0.4-1.7,1.9-2.9,3.7-3c0.5,0,0.9,0.1,1.3,0.2\n			c0.2,0.1,0.5,0.2,0.7,0.3c0,0,0,0,0,0c0.5,0.3,0.9,0.7,1.2,1.2c0.4,0.6,0.6,1.2,0.7,1.9c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3\n			c0,0.4-0.1,0.9-0.3,1.3C74.1,25.8,73.3,26.6,72.3,27z M81.9,27c-0.4,0.2-0.9,0.2-1.4,0.2c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0\n			c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.2-0.1-0.4-0.1c-1.1-0.4-1.9-1.2-2.3-2.3c-0.1-0.4-0.2-0.7-0.3-1.1c0-0.1,0-0.2,0-0.3\n			c0-0.1,0-0.2,0-0.3c0-0.4,0.1-0.8,0.3-1.1c0.2-0.5,0.5-0.9,0.8-1.3c0.7-0.7,1.7-1.2,2.8-1.2c2.1,0,3.9,1.8,3.9,3.9\n			c0,0.6-0.1,1.1-0.3,1.6C83.7,25.8,82.9,26.6,81.9,27z M88,22.8h-1.7c-0.1-1-0.4-1.9-0.9-2.7c-0.5-0.7-1.1-1.3-1.8-1.7\n			c-0.3-0.2-0.7-0.4-1-0.5c-0.6-0.2-1.3-0.3-2-0.3c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4,0-0.6,0.1c-0.2,0-0.4,0.1-0.6,0.1\n			c-0.2,0-0.4,0.1-0.5,0.2c-0.3,0.1-0.7,0.3-1,0.5c-0.4,0.3-0.8,0.6-1.2,0.9c-0.2,0.2-0.4,0.4-0.6,0.7c-1.1-1.5-2.8-2.5-4.7-2.5\n			c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4,0-0.6,0.1c-0.2,0-0.4,0.1-0.6,0.1c-0.2,0-0.4,0.1-0.5,0.2\n			c-0.3,0.1-0.7,0.3-1,0.5c-0.6,0.4-1.2,0.9-1.6,1.5c-1-1.2-2.4-2.1-4-2.3c-0.3-0.1-0.7-0.1-1-0.1c-0.1,0-0.2,0-0.3,0\n			c-0.2,0-0.4,0-0.6,0.1c-0.2,0-0.4,0.1-0.6,0.1c-0.2,0-0.4,0.1-0.5,0.2c-0.3,0.1-0.7,0.3-1,0.5C57.3,19,56.5,20,56,21.2\n			c-0.3,0.7-0.4,1.4-0.4,2.1c0,0.4,0,0.7,0.1,1.1H40.1c0-0.1,0-0.2,0.1-0.4c0.1-0.2,0.2-0.4,0.2-0.6c0-1.2-0.4-2.4-1.1-3.3\n			c0,0,0-0.1,0-0.1c-0.5-0.7-1.1-1.3-1.8-1.7c-0.3-0.2-0.7-0.4-1-0.5c-0.6-0.2-1.3-0.3-2-0.3c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4,0-0.6,0.1\n			c-0.2,0-0.4,0.1-0.6,0.1c-0.2,0-0.4,0.1-0.5,0.2c-0.3,0.1-0.7,0.3-1,0.5c-0.4,0.2-0.7,0.5-1,0.8c-0.1,0-0.2,0.1-0.3,0.2\n			c-1.1,1.2-1.7,2.5-1.7,3.8v1.2H16.4c0.1-0.4,0.1-0.7,0.1-1.1c0-1.1-0.3-2.3-1-3.2c-0.1-0.2-0.3-0.4-0.4-0.5c0,0,0,0,0,0c0,0,0,0,0,0\n			c0-0.1-0.1-0.1-0.1-0.2c-1.1-1.2-2.6-1.8-4.1-1.8c-0.9,0-1.9,0.2-2.7,0.7c-0.1,0.1-0.2,0.1-0.3,0.2C6.8,19,5.9,20,5.5,21.2\n			c-0.2,0.5-0.3,0.9-0.3,1.4c0,0.2-0.1,0.4-0.1,0.6c0,0,0,0,0,0.1l0,0.4l-1.5-0.3c0,0,0,0,0,0c0,0-0.6-0.1-0.6-0.4v-7.4\n			c0-0.2,0.1-0.7,0.3-1.4H10c0.4,0,0.7-0.2,0.8-0.6l1.4-4.2c0.1-0.3,0-0.6-0.1-0.8C12,8.1,11.7,8,11.5,8h-6c0.5-1.1,0.9-2,0.9-2.1\n			c0,0,0,0,0,0c0-0.1,0.4-0.7,1.5-0.8c1.4-0.2,7.3-1,9.8-1.4v16.4c0,0.5,0.4,0.9,0.9,0.9h8.5c0.4,0,0.7-0.2,0.8-0.6\n			c0.1-0.3,0-0.7-0.2-1l-3.7-3.4c0,0,0,0-0.1,0c0,0-0.7-0.5-0.7-1.3V7.3c0-0.1,0.1-0.8,0.7-1.1c1.4-0.7,5.8-2.8,6.5-3.1\n			c0.1,0,0.6-0.1,1.3-0.1H88V22.8z"/>\n		<path class="st0" d="M11.6,21.9c-0.1-0.1-0.2-0.1-0.3-0.1c-0.2-0.1-0.4-0.1-0.6-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0\n			c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0.1-0.3,0.1c-0.3,0.2-0.5,0.5-0.7,0.8c-0.1,0.2-0.1,0.4-0.1,0.6\n			c0,0.2,0,0.4,0.1,0.6c0.2,0.4,0.5,0.8,1,0.9c0,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0\n			c0.2,0,0.4,0,0.6-0.1c0.4-0.2,0.8-0.5,0.9-0.9c0.1-0.2,0.1-0.4,0.1-0.7c0-0.3-0.1-0.7-0.3-0.9C12,22.2,11.8,22,11.6,21.9z"/>\n		<path class="st0" d="M35.3,21.9c-0.1-0.1-0.2-0.1-0.3-0.1c-0.2-0.1-0.4-0.1-0.6-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0\n			c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0.1-0.3,0.1c-0.3,0.2-0.5,0.5-0.7,0.8c-0.1,0.2-0.1,0.4-0.1,0.6\n			c0,0.2,0,0.4,0.1,0.6c0.2,0.4,0.5,0.8,1,0.9c0,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0\n			c0.2,0,0.4,0,0.6-0.1c0.4-0.2,0.8-0.5,0.9-0.9c0.1-0.2,0.1-0.4,0.1-0.7c0-0.3-0.1-0.7-0.3-0.9C35.7,22.2,35.5,22,35.3,21.9z"/>\n		<path class="st0" d="M62.2,21.9c-0.1-0.1-0.2-0.1-0.3-0.1c-0.2-0.1-0.4-0.1-0.6-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0\n			c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0.1-0.3,0.1c-0.3,0.2-0.5,0.5-0.7,0.8c-0.1,0.2-0.1,0.4-0.1,0.6\n			c0,0.2,0,0.4,0.1,0.6c0.2,0.4,0.5,0.8,1,0.9c0,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0\n			c0.2,0,0.4,0,0.6-0.1c0.4-0.2,0.8-0.5,0.9-0.9c0.1-0.2,0.1-0.4,0.1-0.7c0-0.3-0.1-0.7-0.3-0.9C62.6,22.2,62.4,22,62.2,21.9z"/>\n		<path class="st0" d="M71.8,21.9c-0.1-0.1-0.2-0.1-0.3-0.1c-0.2-0.1-0.4-0.1-0.6-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0\n			c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0.1-0.3,0.1c-0.3,0.2-0.5,0.5-0.7,0.8c-0.1,0.2-0.1,0.4-0.1,0.6\n			c0,0.2,0,0.4,0.1,0.6c0.2,0.4,0.5,0.8,1,0.9c0,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0\n			c0.2,0,0.4,0,0.6-0.1c0.4-0.2,0.8-0.5,0.9-0.9c0.1-0.2,0.1-0.4,0.1-0.7c0-0.3-0.1-0.7-0.3-0.9C72.2,22.2,72,22,71.8,21.9z"/>\n		<path class="st1" d="M81.4,21.9c-0.1-0.1-0.2-0.1-0.3-0.1c-0.2-0.1-0.4-0.1-0.6-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0\n			c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0.1-0.3,0.1c-0.3,0.2-0.5,0.5-0.7,0.8c-0.1,0.2-0.1,0.4-0.1,0.6\n			c0,0.2,0,0.4,0.1,0.6c0.2,0.4,0.5,0.8,1,0.9c0,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1,0\n			c0.2,0,0.4,0,0.6-0.1c0.4-0.2,0.8-0.5,0.9-0.9c0.1-0.2,0.1-0.4,0.1-0.7c0-0.3-0.1-0.7-0.3-0.9C81.8,22.2,81.6,22,81.4,21.9z"/>\n		</svg>\n							</div>\n						</div>\n\n					</div>\n				</div>\n\n				<div class="icons-4">\n					<div class="block-1">\n						<div class="coloredBlock"></div>\n						<div class="centered">\n							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 240.4 278" style="enable-background:new 0 0 240.4 278;" xml:space="preserve">\n		<style type="text/css">\n			.st4110{fill:#FFFFFF;}\n		</style>\n		<g>\n			<polygon class="st4110" points="170.7,79.1 182.1,78.5 197.9,77.5 161.3,4.8 35.5,32.6 28.5,86.7 28.3,87.7 48.2,86.5 	"/>\n			<path d="M207.5,142.6c-0.1-9.2-1.6-18-4.4-26.2L40.9,130.1c-0.7,4.2-1,8.6-1,13c0,1.7,0.1,3.4,0.2,5.1l179,27.2L207.5,142.6z"/>\n			<path class="st4110" d="M42.5,268.1c-0.9,1.9-0.2,4.2,1.8,5.2l93,0.2c1.9,0.9,4.2-1.4,5.2-3.4l16.9-31.8l29.6,0.1\n				c7.3,0,13.2-5.9,13.2-13.2l0.3-33.7l15.9-5.6c2-0.7,3.4-2.9,2.7-5l-1.9-5.5l-179-27.2c1.1,18.8,8.4,36,20,49.4L42.5,268.1z"/>\n			<polygon class="st4110" points="19.2,136.2 234.8,112.6 225.8,104.2 7.7,98.8 	"/>\n		</g>\n		</svg>\n						</div>\n\n					</div>\n					<div class="block-2">\n						<span class="label">Fashion e-commerce</span>\n						<div class="svg-container">\n							<div class="coloredBlock" style="height: 352px;"></div>\n							<div class="centered">\n								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 311.3 311.3" style="enable-background:new 0 0 311.3 311.3;" xml:space="preserve">\n		<style type="text/css">\n			.st420{fill:#2D2D2D;}\n			.st421{fill:#ED7025;}\n		</style>\n		<polygon class="st420" points="21.4,224.4 56.8,220.7 56.8,220.9 76.5,218.9 76.2,218.8 173.2,208.8 139,101.8 6.3,176.8 "/>\n		<polygon class="st421" points="61.9,229 92.7,306.3 112.1,304 81.9,226.1 "/>\n		<polygon class="st421" points="185.4,217.6 204.7,215.4 161.2,79 144.2,88.4 "/>\n		<polygon class="st420" points="190.6,64.1 195.8,80.2 242.4,19.6 237.3,3.4 "/>\n		<polygon class="st420" points="234.4,201.5 307.6,223.9 302.4,207.8 229.3,185.3 "/>\n		<rect class="st420" x="211.8" y="118.7" transform="matrix(-0.9528 0.3036 -0.3036 -0.9528 513.0204 171.1804)" class="st0" width="62.9" height="13.5"/>\n		</svg>\n							</div>\n						</div>\n					</div>\n					<div class="block-3">\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 140 280" style="enable-background:new 0 0 140 280;" xml:space="preserve">\n		<style type="text/css">\n			.st4310{fill:#ED7025;}\n			.st4311{fill:#FFFFFF;}\n		</style>\n		<g>\n			<circle class="st4310" cx="69.5" cy="83.3" r="12.3"/>\n			<rect x="55.7" y="113" class="st0" width="28" height="161"/>\n		</g>\n		<g>\n			<path class="st4311" d="M129.3,3H12.4l19.3,15c11.4-2.2,24.8-4.6,39.1-4.6c14.1,0,27.2,2.9,38.5,5.1L129.3,3z"/>\n			<polygon class="st4311" points="133.7,4.3 121.1,18.4 84.4,59.5 86.6,61.5 125.2,96.6 133.9,51.1 138.7,25.8 139.1,23.6 	"/>\n			<path class="st4311" d="M7.6,5.4L1.7,26.3l-0.1,0.4c0.1,0,0.1-0.1,0.2-0.1l4.5,23.9l8.8,46.2l38.7-35.2l2.1-1.9L19.5,18.7L7.6,5.4z"/>\n		</g>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 296 182.1" style="enable-background:new 0 0 296 182.1;" xml:space="preserve">\n		<style type="text/css">\n			.st4320{fill:#ED7025;}\n			.st4321{fill:#FFFFFF;}\n		</style>\n		<g>\n			<g>\n				<path class="st4320" d="M148.6,50.3c-22.2,0-40.3,18.1-40.3,40.3s18.1,40.3,40.3,40.3c22.2,0,40.3-18.1,40.3-40.3\n					S170.8,50.3,148.6,50.3z M148.6,109.7c-10.5,0-19.1-8.6-19.1-19.1s8.6-19.1,19.1-19.1c10.5,0,19.1,8.6,19.1,19.1\n					S159.2,109.7,148.6,109.7z"/>\n				<path class="st4321" d="M148.6,5C92.2,5,41.6,38.1,7,90.6c34.6,52.4,85.2,85.5,141.7,85.5S255.7,143,290.3,90.6\n					C255.7,38.1,205.1,5,148.6,5z M148.6,159.8c-38.2,0-69.2-31.1-69.2-69.2s31.1-69.2,69.2-69.2s69.2,31.1,69.2,69.2\n					S186.8,159.8,148.6,159.8z"/>\n			</g>\n		</g>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 308.6 308" style="enable-background:new 0 0 308.6 308;" xml:space="preserve">\n		<style type="text/css">\n			.st4330{fill:#ED7025;}\n			.st4331{fill:#FFFFFF;}\n		</style>\n		<g>\n			<polygon class="st4330" points="67,61 93.1,35.6 79.1,21.3 29.9,69.3 79,119.6 93.3,105.6 69.3,81 153.3,81 155.6,61 	"/>\n			<polygon class="st4330" points="259.7,81 234.6,105.4 248.6,119.7 297.8,71.7 248.8,21.4 234.4,35.4 259.4,61 188.6,61 188.6,81 	"/>\n			<path class="st4331" d="M268.6,171L268.6,171c-0.4-8.9-7.7-15.9-16.6-15.9c-3.9,0-7.5,1.4-10.4,3.7l-39.8,24h0l-3.2,1.9\n				c-0.7,0.2-1.5,0.3-2.2,0.3c-3.5,0-7.4-2.4-7.4-5.6v-3.8V81V61V39h-30.4l-2.6,22l-2.4,20l-7.5,64L85,178.1c-1.4,0.5-2.8,1.2-4,2.1\n				c-4.1,2.9-6.8,7.7-6.8,13.1c0,0.2,0,0.3,0,0.5c0,1.5,0.3,2.7,0.7,4L92.4,301h102.1L260,185.8l8.6-14.4\n				C268.5,171.3,268.5,171.2,268.6,171L268.6,171z"/>\n		</g>\n		</svg>\n					</div>\n					<div class="block-4">\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 312.4 241.8" style="enable-background:new 0 0 312.4 241.8;" xml:space="preserve">\n		<style type="text/css">\n			.st4410{fill:#FFFFFF;}\n			.st4411{fill:#ED7025;}\n		</style>\n		<g>\n			<polyline class="st4410" points="93.2,216.8 111.6,197.1 28.6,119 10,138.7 93.2,216.8 	"/>\n			<polygon class="st4411" points="288,9.4 111.6,197.1 93.2,216.8 112.2,234.7 112.9,235.3 307.7,27.9 	"/>\n		</g>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 220.7 222" style="enable-background:new 0 0 220.7 222;" xml:space="preserve">\n		<style type="text/css">\n			.st4420{fill:#FFFFFF;}\n			.st4421{fill:#ED7025;}\n		</style>\n		<rect x="43.8" y="-5.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -23.7584 57.3664)" class="st4420" width="27.1" height="124.9"/>\n		<rect x="43.8" y="102.4" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -18.5831 321.8616)" class="st4420" width="27.1" height="124.9"/>\n		<polygon class="st4421" points="218.5,22.8 199.4,3.7 111.1,91.9 91.9,111.1 111.1,130.2 199.4,218.5 218.5,199.4 130.2,111.1 "/>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 283 223" style="enable-background:new 0 0 283 223;" xml:space="preserve">\n		<style type="text/css">\n			.st4430{fill:#FFFFFF;}\n			.st4431{fill:#ED7025;}\n		</style>\n		<polygon class="st4430" points="172,5.5 152.8,26.1 222.9,97.6 7,97.5 7,125 227.1,125 259.8,92.8 "/>\n		<polygon class="st4431" points="279.2,112.2 260,93.1 259.8,93.3 227.1,126 152.8,200.3 172,219.4 242,149.4 265.4,126 272.6,118.7\n			278.9,112.4 278.9,112.4 "/>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 148.9 199.2" style="enable-background:new 0 0 148.9 199.2;" xml:space="preserve">\n		<style type="text/css">\n			.st4440{fill:#FFFFFF;}\n			.st4441{fill:#C6C6C6;}\n			.st4442{fill:#ED7025;}\n		</style>\n		<polygon class="st4440" points="32.8,3.2 32.8,38.2 105.6,100.2 32.8,161.4 32.8,197.1 147.5,100.4 "/>\n		<polygon class="st4441" points="30.1,197.1 30.1,197.1 29.5,197.1 "/>\n		<polygon class="st4441" points="30.1,3.2 29.9,3.2 30.1,3.2 "/>\n		<polygon class="st4442" points="29.9,3.2 8.1,3.2 4.8,3.2 4.8,8.4 4.8,15.2 4.8,184.1 4.8,190.8 4.8,197.2 8.5,197.2 29.5,197.2\n			32.8,197.2 32.8,161.4 32.8,38.2 32.8,3.2 "/>\n		</svg>\n					</div>\n				</div>\n\n				<div class="icons-5">\n					<div class="block-1">\n						<div class="svg-container">\n							<div class="coloredBlock"></div>\n							<div class="centered">\n								<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 92.7 50.8" style="enable-background:new 0 0 92.7 50.8;" xml:space="preserve">\n		<style type="text/css">\n			.st5110{fill:#FFFFFF;}\n		</style>\n		<path class="st5110" d="M75.3,44c3.1-2.5,5.2-6.5,5.2-11c0-7.8-6.3-14.1-14-14.1s-14,6.3-14,14.1c0,4.4,2,8.5,5.2,11H34.9\n			c3-2.5,5-6.2,5.1-10.4c3.7-2.4,8-5.3,9.1-6.8c0.7-1,1-2.1,0.8-3.3c-0.4-2.6-3.1-4.6-3.6-5l-9-7.1c-0.4-0.4-0.8-1-0.9-1.4\n			c3.8-1,7.4-1.8,11-2.5c2.8,1.4,14.1,7.2,17,8c2.2,0.6,3.4,0.9,4.5-0.4c0.1-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.1-0.1,0.2-0.2\n			c4-4.3,3.8-7.2,2.9-8.9c-1.9-3.6-7.8-4.3-12.9-3.5c-8,1.3-15.3,2.5-23.7,4.6c-1.6,0.4-2.1,1.5-2.3,2c-0.6,2,1.2,4.1,1.8,4.7\n			c0.1,0.1,0.1,0.1,0.2,0.2l9.1,7.2c0,0,0,0,0.1,0.1c0.8,0.6,2.2,1.9,2.3,2.9c0.1,0.3,0,0.6-0.2,0.9c-0.6,0.9-3.6,3-6.9,5.1\n			c-1.4-6.4-7-11.1-13.6-11.1c-7.7,0-14,6.3-14,14.1c0,4.4,2,8.5,5.2,11H2.7v3.1h87V44H75.3z M59.8,5.6c4.4-0.7,8.7,0.1,9.6,1.9\n			c0.6,1.1-0.3,3-2.3,5.2c-0.2,0.1-0.3,0.3-0.4,0.4c-0.2,0-0.7-0.1-1.5-0.4c-1.8-0.5-8-3.5-12.7-5.9C54.9,6.3,57.3,5.9,59.8,5.6z\n			M15.2,33.1c0-6,4.9-11,10.8-11c5.6,0,10.2,4.3,10.8,9.8c-1.4,0.9-2.8,1.7-4,2.5l1.6,2.7c0.4-0.3,1.2-0.7,2.2-1.3\n			c-1.2,4.7-5.4,8.2-10.5,8.2C20.1,44,15.2,39.1,15.2,33.1z M55.7,33.1c0-6,4.9-11,10.8-11c6,0,10.8,4.9,10.8,11c0,6-4.9,11-10.8,11\n			C60.5,44,55.7,39.1,55.7,33.1z"/>\n		</svg>\n							</div>\n						</div>\n						<span class="label">Olympics</span>\n					</div>\n					<div class="block-2">\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 89.8 55.7" style="enable-background:new 0 0 89.8 55.7;" xml:space="preserve">\n		<style type="text/css">\n			.st5210{fill:#443e6a;}\n		</style>\n		<path class="st5210" d="M65.4,37.1c0.7-0.1,1.5-0.2,2.5-0.4c0,0,0.1,0,0.1,0l0,0c3.3-0.8,7.6-2.7,9.5-7.2c1-2.5,0.4-4.2-0.2-5.1\n			c-1.5-2.2-4.4-2.7-5.7-2.7c-1,0-1.7,0.4-2,1c-2.4,5.8-4.9,10-5.9,11.6c-5.8,0.5-9.2-0.5-10.9-1.3c3.4-7.5,6.3-17,6.7-27.9\n			c0-0.4-0.2-0.9-0.5-1.2c-0.3-0.3-0.8-0.4-1.2-0.3l-11.5,2c-0.5,0.1-1,0.5-1.2,1c0,0.1-4.8,13.2-17.2,24.7c-0.5,0.4-0.6,1.1-0.4,1.6\n			c0.1,0.3,3.1,7.9,14.3,13.2c-0.7,1-1.3,1.8-1.7,2.2c-7.4-2.7-12.2-6.7-12.3-6.8l-2,2.3c0.5,0.4,11.6,9.8,27,9.8c0.6,0,1.2,0,1.9,0\n			l-0.2-3c-1.1,0.1-2.2,0.1-3.3,0C55.1,48.5,60.4,44.6,65.4,37.1z M74.7,26c0.1,0.2,0.6,0.9,0,2.4c-1.4,3.3-4.4,4.8-7.1,5.4\n			c1.5-2.7,3-5.7,4.5-9.2C72.9,24.7,74.2,25.1,74.7,26z M33.1,36c-1.3-1.4-2-2.7-2.5-3.4C41.4,22.4,46.3,11.4,47.5,8.3l8.8-1.5\n			c-1.1,16.5-8.3,29.8-12.9,36.7C38.2,41.1,34.9,38.1,33.1,36z M44.8,49.6c-0.6-0.1-1.1-0.3-1.7-0.4c1.8-2.3,5.2-7,8.4-13.6\n			c0.6,0.3,1.4,0.6,2.3,0.8c2.1,0.6,4.4,0.9,7.1,0.9c0.2,0,0.5,0,0.7,0C53.8,47.7,46,49.4,44.8,49.6z"/>\n		<path class="st5210" d="M22.2,46.9c-2.1,0-3.2,0.8-4.1,1.4c-0.7,0.5-1.2,0.8-2.4,0.8c-1.2,0-1.7-0.3-2.4-0.8c-0.9-0.6-2-1.4-4.1-1.4\n			c-2.1,0-3.2,0.8-4,1.4c-0.7,0.5-1.2,0.8-2.4,0.8v3c2,0,3.2-0.8,4-1.4c0.7-0.5,1.2-0.8,2.4-0.8c1.2,0,1.6,0.3,2.4,0.8\n			c0.9,0.6,2,1.4,4.1,1.4s3.2-0.8,4.1-1.4c0.7-0.5,1.2-0.8,2.4-0.8c1.2,0,1.7,0.3,2.4,0.8c0.9,0.6,2.1,1.4,4.1,1.4v-3\n			c-1.2,0-1.7-0.3-2.4-0.8C25.4,47.7,24.3,46.9,22.2,46.9z"/>\n		<path class="st5210" d="M85.4,48.3c-0.9-0.6-2-1.4-4.1-1.4c-2.1,0-3.2,0.8-4.1,1.4c-0.7,0.5-1.2,0.8-2.4,0.8c-1.2,0-1.7-0.3-2.4-0.8\n			c-0.9-0.6-2-1.4-4.1-1.4c-2.1,0-3.1,0.8-4,1.4c-0.7,0.5-1.2,0.8-2.3,0.8v3c2,0,3.1-0.8,4-1.4c0.7-0.5,1.2-0.8,2.4-0.8\n			c1.2,0,1.6,0.3,2.4,0.8c0.9,0.6,2,1.4,4.1,1.4c2.1,0,3.2-0.8,4.1-1.4c0.7-0.5,1.2-0.8,2.4-0.8c1.2,0,1.7,0.3,2.4,0.8\n			c0.9,0.6,2.1,1.4,4.1,1.4v-3C86.6,49.2,86.1,48.8,85.4,48.3z"/>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 98.4 35" style="enable-background:new 0 0 98.4 35;" xml:space="preserve">\n		<style type="text/css">\n			.st5220{fill:#5FBDB7;}\n		</style>\n		<g>\n			<path class="st5220" d="M61.7,11.6c-0.6-0.1-1.2-0.1-1.7-0.1c-6.6,0-11.2,5.3-14.3,8.8l-2.1,2.4h21.5l0.4-0.8c0.2-0.4,2.4-4.5,0.8-7.5\n				C65.8,13.4,64.5,12,61.7,11.6z M63.2,19.8h-13c2.6-2.7,5.8-5.4,9.8-5.4c0.4,0,0.9,0,1.3,0.1c1.8,0.2,2.2,1,2.3,1.2\n				C64.2,16.9,63.7,18.7,63.2,19.8z"/>\n			<path class="st5220" d="M58.5,2c-2.2-0.2-5.4,0.2-7.9,3.8c-4.8,6.9-7.4,9.8-7.5,9.9c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-9.6,13-25.8,14.2\n				l0.2,2.9c17.2-1.3,27.1-14.2,28-15.4C46,17,48.6,14,53.2,7.4c3-4.3,7.4-1.9,7.9-1.6c0,0,0.1,0,0.1,0l4.5,2.4l1.4-2.6l-4.5-2.4\n				C62.3,3.1,60.7,2.2,58.5,2z"/>\n			<path class="st5220" d="M93.9,20.2c-0.9-0.6-2.1-1.4-4.3-1.4c-2.2,0-3.3,0.8-4.3,1.4c-0.8,0.5-1.3,0.9-2.6,0.9c-1.2,0-1.8-0.4-2.6-0.9\n				c-0.9-0.6-2.1-1.4-4.3-1.4c-2.2,0-3.3,0.8-4.3,1.4c-0.8,0.5-1.3,0.9-2.6,0.9v3c2.2,0,3.3-0.8,4.3-1.4c0.8-0.5,1.3-0.9,2.6-0.9\n				c1.2,0,1.8,0.4,2.6,0.9c0.9,0.6,2.1,1.4,4.3,1.4c2.2,0,3.3-0.8,4.3-1.4c0.8-0.5,1.3-0.9,2.6-0.9c1.2,0,1.8,0.4,2.6,0.9\n				c0.9,0.6,2.1,1.4,4.3,1.4v-3C95.2,21.1,94.7,20.7,93.9,20.2z"/>\n			<path class="st5220" d="M23,21.8c1.2,0,1.8,0.4,2.6,0.9c0.9,0.6,2.1,1.4,4.3,1.4v-3c-1.2,0-1.8-0.4-2.6-0.9c-0.9-0.6-2.1-1.4-4.3-1.4\n				c-2.2,0-3.3,0.8-4.3,1.4c-0.8,0.5-1.3,0.9-2.6,0.9c-1.2,0-1.8-0.4-2.6-0.9c-0.9-0.6-2.1-1.4-4.3-1.4c-2.2,0-3.3,0.8-4.3,1.4\n				c-0.8,0.5-1.3,0.9-2.6,0.9v3c2.2,0,3.3-0.8,4.3-1.4c0.8-0.5,1.3-0.9,2.6-0.9c1.2,0,1.8,0.4,2.6,0.9c0.9,0.6,2.1,1.4,4.3,1.4\n				c2.2,0,3.3-0.8,4.3-1.4C21.2,22.1,21.8,21.8,23,21.8z"/>\n		</g>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 57.8 66.8" style="enable-background:new 0 0 57.8 66.8;" xml:space="preserve">\n		<style type="text/css">\n			.st5230{fill:#1BB261;}\n		</style>\n		<path class="st5230" d="M51.5,60.8c-0.9,0.6-1.5,1-2.9,1c-0.8,0-1.3-0.1-1.7-0.3c2.1-6.4,6.3-22.6-0.3-36.3C42.8,17,35.7,11.3,25.8,7.9\n			l0.1-5.6l-3.5-0.1l-0.7,46.6c-1.5,0.2-2.8,0.9-3.8,2c-2.6,2.9-2.5,7.8-2.3,10.3c-0.2-0.1-0.4-0.3-0.7-0.4c-1.1-0.7-2.4-1.6-4.8-1.6\n			c-2.5,0-3.8,0.9-4.8,1.6c-0.9,0.6-1.5,1-2.9,1v3.5c2.5,0,3.8-0.9,4.8-1.6c0.9-0.6,1.5-1,2.9-1c1.4,0,2,0.4,2.9,1\n			c1.1,0.7,2.4,1.6,4.8,1.6c2.5,0,3.8-0.9,4.8-1.6c0.9-0.6,1.5-1,2.9-1c1.4,0,2,0.4,2.9,1c1.1,0.7,2.4,1.6,4.8,1.6\n			c2.5,0,3.8-0.9,4.8-1.6c0.9-0.6,1.5-1,2.9-1c1.4,0,2,0.4,2.9,1c1.1,0.7,2.4,1.6,4.8,1.6c2.5,0,3.8-0.9,4.8-1.6c0.9-0.6,1.5-1,2.9-1\n			v-3.5C53.9,59.2,52.6,60.1,51.5,60.8z M43.5,26.6c0.5,1.1,0.9,2.1,1.3,3.2c-1.6-2-3.7-4.6-6.2-7.4l-0.5-0.6c-1.5-1.7-2.1-2.4-3.7-2\n			c-0.1,0-0.2,0.1-0.4,0.1l-0.2,0c-5.2,1.3-6.4,3.9-6.5,5.9c-0.2,3.7,3.7,7.7,7.5,9.2c4.4,1.7,8.2,1.9,11.7,1.9\n			c0.2,1.4,0.3,2.9,0.3,4.3c-0.3,0.1-0.6,0.2-1,0.3c-3.2,1.2-11.8,4.3-20.4-3.6l0.4-26.3C34.2,14.7,40.2,19.7,43.5,26.6z M43.2,33.3\n			c-2.3-0.2-4.6-0.6-7.2-1.6c-2.8-1.1-5.4-3.9-5.3-5.7c0.1-1.5,2.4-2.3,3.8-2.7c0.1,0,0.1,0,0.2,0c0.2,0.2,0.5,0.5,0.7,0.8l0.5,0.6\n			C39.1,28.2,41.6,31.3,43.2,33.3z M20.7,60.8c-0.6,0.4-1,0.7-1.6,0.8c-0.2-2.1-0.4-6.5,1.4-8.4c0.4-0.5,1.2-1.1,2.8-1l0,0\n			c1.3,0.1,2.3,0.5,2.9,1.4c1,1.4,1.1,3.8,1,5.6c-0.5-0.1-1-0.2-1.7-0.2C23.1,59.2,21.7,60.1,20.7,60.8z M36.1,60.8\n			c-0.9,0.6-1.5,1-2.9,1c-1.3,0-1.9-0.4-2.7-0.9c0.3-2.3,0.6-6.4-1.5-9.2c-0.9-1.3-2.2-2.2-3.8-2.6l0.1-6.8c4.5,3.3,8.9,4.3,12.6,4.3\n			c3.9,0,7.1-1.1,8.8-1.7c-0.4,6.1-1.8,11.6-2.8,14.8c-0.8-0.3-1.7-0.5-2.9-0.5C38.5,59.2,37.2,60.1,36.1,60.8z"/>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 83.9 45.8" style="enable-background:new 0 0 83.9 45.8;" xml:space="preserve">\n		<style type="text/css">\n			.st5240{fill:#EC7234;}\n		</style>\n		<g>\n			<path class="st5240" d="M49.9,40.4c2.6-5.5,3.3-9.4,2.2-11.7c-0.6-1.3-1.6-1.8-2-1.9c-4.5-1.5-11.5-2.3-14.2-2.6c1-2.1,2-3.9,3.3-5.5\n				c1.7,0.3,3.3,0.5,4.8,0.8c7.5,1.2,11.8,1.8,17.5,7.6c-0.1,2.1,0,7.1,2.5,8.9c0.5,0.3,1.2,0.6,2.1,0.6c0.6,0,1.3-0.1,2-0.5\n				c0.9-0.4,2.4-1.5,2.5-3.4c0.1-2.3-2-4.8-6.6-7.5c-6.6-6.8-11.8-7.6-19.6-8.8c-0.9-0.1-1.8-0.3-2.7-0.4c1.7-1.6,3.8-3,6.4-4.6\n				c2.5,0.9,5.3,1.7,8.8,1.7c0.1,0,0.2,0,0.3,0c3.3,0,7.4-1.9,8.3-4.7c0.5-1.5,0.3-3.8-3.3-6.3C62.3,2,62.2,2,62.2,2\n				c-0.1-0.1-0.2-0.1-0.3-0.1c-1.2-0.8-1.9-0.4-3.5,0.4l-0.6,0.3c-2.5,1.3-4.7,2.5-6.5,3.5c-5.9,3.2-10,5.9-13.2,9.1\n				c-2.7-0.9-4.8-2.7-6.3-5.6c-1.4-2.6-1.7-5.1-1.7-5.1L27,4.9C27.5,8.4,30,15,36.1,17.7c-1.6,2.2-2.9,4.6-4.1,7.7\n				c-3,8.1-16.6,14.1-18.6,15H3.6v3h78v-3H49.9z M67.6,32.5c0,0.4-0.7,0.7-0.7,0.7c-0.8,0.3-1,0.2-1.1,0.1c-0.7-0.5-1.1-2.2-1.2-4.2\n				C67.5,31.2,67.6,32.4,67.6,32.5z M60.7,4.6c0.9,0.6,2.3,1.8,2,2.9c-0.4,1.3-3.1,2.6-5.4,2.6c-2,0-3.8-0.3-5.4-0.7\n				c0.4-0.2,0.9-0.5,1.4-0.8c1.7-0.9,3.6-2,5.7-3.1l1.2-0.6l0,0C60.3,4.7,60.5,4.7,60.7,4.6C60.6,4.6,60.6,4.6,60.7,4.6z M34.7,27.1\n				c1.1,0.1,9.6,1,14.4,2.6l0.5-1.4l-0.3,1.5c0,0-0.2-0.1-0.2,0c0,0,0.1,0.1,0.2,0.3c0.3,0.6,0.9,3.1-2.9,10.5H20.3\n				C25.4,37.6,32.2,32.9,34.7,27.1z"/>\n			<ellipse class="st5240" cx="73.4" cy="23.4" rx="2.6" ry="2.6"/>\n		</g>\n		</svg>\n					</div>\n					<div class="block-3">\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 524.6 32.8" style="enable-background:new 0 0 524.6 32.8;" xml:space="preserve">\n		<style type="text/css">\n			.st5310{fill:#FFFFFF;}\n		</style>\n		<path class="st5310" d="M30.8,28.6L4,21.7l0.4-1.4l26.8,7L30.8,28.6z"/>\n		<path class="st5310" d="M15.4,24.3l-1-1c2.4-2.3,5.8-6,6-7c0.2-0.9-0.9-1.5-1.1-1.6l-6.6-1.8c0,0,0,0,0,0c-0.3-0.1-0.5-0.3-0.6-0.6\n			c-0.2-0.5,0.1-1.1,0.8-2C13.4,9.6,14,9,14.7,8.5c-3.7-1-7.1-2-7.2-2L7.8,5c0.1,0,4.3,1.2,8.5,2.4c1.8-0.9,4.1-1.6,6.7-1.8\n			c1.3-0.1,4.3-0.3,5.1,1.4c0.5,1-0.1,2.3-1.9,3.9c0,0,0,0,0,0C26.1,11,26,11,26,11.1c-0.5,0.5-0.8,0.4-1.6,0.1\n			c-0.2-0.1-0.4-0.1-0.7-0.2c-0.7-0.2-3.9-1.1-7.2-2c-1,0.6-1.8,1.3-2.5,2.1c-0.2,0.2-0.3,0.4-0.4,0.5l6.2,1.7c0,0,0.1,0,0.1,0\n			c0.9,0.4,2.4,1.5,2,3.3C21.4,18.3,16.4,23.3,15.4,24.3z M18.5,8c2.7,0.8,5,1.4,5.6,1.6c0.3,0.1,0.5,0.2,0.7,0.2\n			c0.1,0,0.2,0.1,0.3,0.1c0,0,0.1-0.1,0.1-0.1c1.4-1.3,1.6-2,1.5-2.2c-0.2-0.4-1.4-0.8-3.6-0.6C21.4,7.2,19.8,7.5,18.5,8z"/>\n		<path class="st5310" d="M187.5,29.2c-0.1,0-3.3-1.2-6.6-4.9c-3.1-3.4-6.9-9.6-7.9-20.1l1.5-0.1c0.5,5.6,2.2,13.4,7.4,19.2\n			c3.1,3.5,6.1,4.6,6.1,4.6L187.5,29.2z"/>\n		<path class="st5310" d="M175.2,12.6c-0.6,0-0.7-0.4-0.9-1.2c-0.1-0.4-0.2-0.9-0.4-1.7c-0.3-1.3-0.6-3.3-0.9-5.5c0-0.2,0-0.4,0.2-0.7\n			c0.4-0.5,1.6-1.1,2.7-1.1c0.8,0,2.2,0.3,2.7,2.3c1,3.7-1.7,6.6-3,7.7C175.6,12.5,175.4,12.6,175.2,12.6z M174.6,4.3\n			c0.3,2.5,0.8,4.7,1,6.1c1.1-1.3,2.2-3.1,1.6-5.3C177,4,176.4,3.8,176,3.8C175.4,3.8,174.9,4.1,174.6,4.3z"/>\n		<path class="st5310" d="M169.1,19.9l-0.9-1.2c9.1-7.4,13.9-6.3,14.1-6.3l-0.3,1.5l0.2-0.7l-0.2,0.7C181.9,13.9,177.5,13.1,169.1,19.9z"\n			/>\n		<path class="st5310" d="M193.9,31.3c-3.6-0.9-8.2-2.8-13.8-5.7c-4.2-2.1-7.3-4.1-7.4-4.1l0.8-1.3c0.1,0.1,12.5,7.6,20.8,9.6L193.9,31.3\n			z"/>\n		<path class="st5310" d="M340,27.6l-1.4-0.7c2.8-5.2,1.9-6.3,1.8-6.4c0,0,0,0,0,0c-2.6-0.9-6.9-1.1-7-1.1l0.1-1.6c0.2,0,4.6,0.3,7.4,1.2\n			c0.2,0.1,0.7,0.3,1,1C342.5,21.3,341.9,23.9,340,27.6z"/>\n		<path class="st5310" d="M343.2,16.3c-5.4,0-9.1-1.1-11.1-3.2c-1.9-2.1-1.3-4.3-1.3-4.4l1.5,0.4l-0.8-0.2l0.8,0.2c0,0.1-0.4,1.6,1,3\n			c3.9,4.1,16.4,2.4,23.5,1.1l0.3,1.6C351.6,15.7,347,16.3,343.2,16.3z"/>\n		<path class="st5310" d="M338.7,13.8"/>\n		<path class="st5310" d="M322.8,27.3l-0.9-1.3c0.1-0.1,14.8-9.6,23-19.7l1.2,1C337.8,17.5,322.9,27.2,322.8,27.3z"/>\n		<path class="st5310" d="M342,13.2c-0.6,0-1.3,0-1.8-0.1l0.1-1.2l-0.3-0.3c0,0,2.3-2.1,5-5.4c0.9-1.1,1.3-1.6,2.2-1.2\n			c0.1,0,0.1,0,0.2,0.1c0,0,0.1,0,0.1,0c2.5,0.8,3.1,2.1,3.1,3.1c0,1.9-2.1,3.7-4,4.3C344.9,13,343.4,13.2,342,13.2z M346.8,6.5\n			c-0.2,0.2-0.5,0.5-0.6,0.7c-1.6,1.9-3,3.4-3.9,4.3c1.2,0,2.5-0.2,3.8-0.6c1.4-0.4,2.9-1.8,2.9-2.8c0-0.8-1.2-1.3-1.9-1.6\n			C346.9,6.6,346.9,6.5,346.8,6.5z"/>\n		<path class="st5310" d="M359.6,28h-39.9v-1.6h39.9V28z"/>\n		<path class="st5310" d="M490,26.8l-1-0.9c0.1-0.1,9.1-10,17.5-15.1l0.7,1.2C499,16.9,490.1,26.7,490,26.8z"/>\n		<path class="st5310" d="M499.3,24l-0.4-1.4c5.9-1.6,7-2.7,7.2-3c-1.9-1.6-5.2-3.2-5.2-3.2l0.6-1.3c0.1,0.1,3.7,1.8,5.6,3.5\n			c0.2,0.2,0.5,0.6,0.4,1.2C507.3,20.8,506.2,22.2,499.3,24z"/>\n		<path class="st5310" d="M515.7,15c-0.3,0-0.6-0.2-1.1-0.4l-0.4-0.2c-2.2-1.1-4.1-2.1-5.9-2.9c-1.1,0.5-1.9,1-2.7,1.5\n			c-1.1,0.8-1.3,0.9-1.4,0.9l-0.8-1.1c0,0,0.2-0.1,1.4-0.9c0.6-0.4,1.2-0.8,1.9-1.2c-5.9-2.8-8.5-3.8-8.6-3.8l0.5-1.3\n			c0.2,0.1,3.1,1.2,9.7,4.4c1.3-0.5,3-0.9,5.3-1.2c2.2-0.3,4.8,0.2,5.5,1.8c0.3,0.9,0.1,2.3-2.6,4.1c0,0,0,0-0.1,0\n			c-0.1,0-0.1,0.1-0.2,0.1C516,15,515.8,15,515.7,15z M510.2,10.8c1.4,0.7,2.9,1.5,4.6,2.3l0.4,0.2c0.2,0.1,0.3,0.2,0.4,0.2\n			c0,0,0.1,0,0.1-0.1c1.8-1.1,2.2-2,2-2.5c-0.2-0.7-1.9-1.2-4-0.9C512.3,10.3,511.2,10.6,510.2,10.8z"/>\n		<path class="st5310" d="M521,27h-34v-1.4h34V27z"/>\n		</svg>\n					</div>\n				</div>\n\n				<div class="icons-6">\n					<div class="block-1">\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 61.5 512.4" style="enable-background:new 0 0 61.5 512.4;" xml:space="preserve">\n		<style type="text/css">\n			.st6110{fill:#FFFFFF;}\n		</style>\n		<path class="st6110" d="M55.8,33.9L31.5,9.4V6.9h-1.8v3.1L6,33.9H3.2v1.8h3.3l23.3,23.5v3.3h1.8v-2.8l23.8-24h3.1v-1.8H55.8z\n			M31.5,57.1v-7.7c-0.3,0-0.6,0-0.9,0c-0.3,0-0.6,0-0.9,0v7.2L9,35.7h6.8c0-0.4-0.1-0.9-0.1-1.3c0-0.1,0-0.3,0-0.4H8.5l21.3-21.5v6.8\n			c0.3,0,0.6,0,0.9,0c0.3,0,0.6,0,0.9,0v-7.3l21.8,22h-7.7c0,0.1,0,0.3,0,0.4c0,0.5,0,0.9-0.1,1.3h7.2L31.5,57.1z"/>\n		<path class="st6110" d="M29.8,26.6h-7.3v7.3v1.8V43h7.3h1.8h7.3v-7.3v-1.8v-7.3h-7.3H29.8z M37.1,28.3v5.6v1.8v5.6h-5.5h-1.8h-5.5v-5.6\n			v-1.8v-5.6h5.5h1.8H37.1z"/>\n		<path class="st6110" d="M59,481.9l-27.9-28.1L3.4,481.8l13.8,13.9v0.3h0.3l13.8,13.9L59,481.9z M32.4,481.8l10.5-10.5v21.1L32.4,481.8z\n			M31.1,480.5l-10.3-10.4h20.7L31.1,480.5z M29.8,481.8L19,492.7v-21.8L29.8,481.8z M31.1,483.1l11,11.1h-22L31.1,483.1z M44.7,493.7\n			v-23.6l11.7,11.8L44.7,493.7z M42.8,468.2H19.4l11.7-11.8L42.8,468.2z M5.9,481.8l11.2-11.3v22.6L5.9,481.8z M42.5,496l-11.2,11.3\n			L20,496H42.5z"/>\n		<path class="st6110" d="M7,233.6v48.5h48.4v-48.5H7z M53.5,257.9c0,4.3-1.2,8.3-3.3,11.7l-5-11.7l0,0l-3.1-7.5l11.2,4.8\n			C53.4,256.1,53.5,257,53.5,257.9z M8.9,257.9c0-4.3,1.2-8.3,3.3-11.7l4.9,11.7l0,0l3.2,7.5l-11.2-4.7C9,259.8,8.9,258.8,8.9,257.9z\n			M41.1,247.9l-0.7-0.3L39,247l0,0l-5.2-2.1l11.5-4.4c3.9,3.1,6.7,7.5,7.8,12.6L41.1,247.9L41.1,247.9z M43.3,257.9l-3.5,8.5l-8,3.3\n			l-0.5,0.2l-8.5-3.5l-2.8-6.5l0,0l-0.9-2l2.6-6.5l0.1,0l0.8-2.1l7-2.9l1.6-0.6l8.4,3.5l0,0l2.8,6.8l0,0L43.3,257.9z M31.3,243.9\n			L31.3,243.9l-7.7,3.1l4.3-11.2c1.1-0.2,2.3-0.3,3.4-0.3c4.5,0,8.7,1.4,12.2,3.7L31.3,243.9z M21.1,248.4l-2.9,7.1l-4.7-11.1\n			c3-3.9,7.3-6.9,12.2-8.1L21.1,248.4z M23.8,268.8L23.8,268.8l5,2l-11.5,4.4c-3.9-3.1-6.7-7.4-7.8-12.4L23.8,268.8z M31.2,271.9\n			L31.2,271.9l1.2-0.5l1.1-0.4l0,0l5.1-2.1l-5.2,11.3c-0.8,0.1-1.5,0.1-2.3,0.1c-4.5,0-8.7-1.3-12.1-3.6L31.2,271.9z M41.1,267.8\n			L41.1,267.8l0.3-0.5l0.7-1.5l-0.1,0l2.2-5.5l4.7,11.1c-3.2,4.3-7.9,7.3-13.3,8.4L41.1,267.8z M53.6,248.9c-2.5-6.1-7.3-11-13.4-13.4\n			h13.4V248.9z M22.3,235.4c-6.1,2.5-11,7.3-13.5,13.5v-13.5H22.3z M8.8,266.8c2.4,6.1,7.3,11,13.3,13.4H8.8V266.8z M40.2,280.3\n			c6-2.5,10.9-7.3,13.3-13.4v13.4H40.2z"/>\n		</svg>\n					</div>\n					<div class="block-2">\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 137.5 134.8" style="enable-background:new 0 0 137.5 134.8;" xml:space="preserve">\n		<style type="text/css">\n			.st6210{fill:#EC7234;}\n		</style>\n		<path class="st6210" d="M69.1,3.7C33.6,3.7,4.6,32.6,4.6,68.2c0,17.7,7.2,33.8,18.8,45.5v0.7h0.7c11.6,11.3,27.5,18.3,45,18.3\n			c35.6,0,64.5-28.9,64.5-64.5C133.6,32.6,104.7,3.7,69.1,3.7z M27.8,28.1h81.9V110H27.8V28.1z M109.5,23.7H28.8\n			C39.5,14,53.6,8.1,69.1,8.1C84.6,8.1,98.8,14,109.5,23.7z M9,68.2c0-14.9,5.4-28.5,14.4-39v78C14.5,96.7,9,83.1,9,68.2z M30.7,114.4\n			h76.8c-10.4,8.7-23.8,13.9-38.4,13.9C54.5,128.3,41.1,123.1,30.7,114.4z M114.1,108V28.4c9.4,10.6,15.1,24.5,15.1,39.8\n			C129.2,83.4,123.5,97.4,114.1,108z"/>\n		<path class="st6210" d="M69.1,38.5c-16.4,0-29.7,13.3-29.7,29.7c0,16.4,13.3,29.7,29.7,29.7c16.4,0,29.7-13.3,29.7-29.7\n			C98.8,51.8,85.5,38.5,69.1,38.5z M69.1,93.5c-13.9,0-25.3-11.3-25.3-25.3c0-13.9,11.3-25.3,25.3-25.3c13.9,0,25.3,11.3,25.3,25.3\n			C94.4,82.1,83.1,93.5,69.1,93.5z"/>\n		</svg>\n						<span class="label">Abstracts for photography</span>\n					</div>\n					<div class="block-3">\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 61.6 61.9" style="enable-background:new 0 0 61.6 61.9;" xml:space="preserve">\n		<style type="text/css">\n			.st6310{fill:#5FBDB7;}\n		</style>\n		<path class="st6310" d="M49.9,48.6L46.3,45l13.6-13.8L46.1,17l3.9-4c1,0.8,2.3,1.2,3.5,1.2c1.5,0,3.1-0.6,4.3-1.8\n			c2.4-2.4,2.4-6.3,0-8.7c-2.4-2.4-6.2-2.4-8.6,0c-2.1,2.1-2.3,5.4-0.8,7.7l-3.9,4L30.9,1.6L17.3,15.5l-3.7-3.7c1.7-2.4,1.5-5.8-0.6-8\n			c-2.4-2.4-6.2-2.4-8.6,0c-2.4,2.4-2.4,6.3,0,8.7c1.2,1.2,2.7,1.8,4.3,1.8c1.1,0,2.3-0.3,3.3-1l3.7,3.8L1.9,31.1L15.5,45l-3.4,3.5\n			c-2.3-1.6-5.5-1.3-7.6,0.8c-2.4,2.4-2.4,6.3,0,8.7c1.2,1.2,2.7,1.8,4.3,1.8s3.1-0.6,4.3-1.8c2.1-2.2,2.3-5.5,0.6-7.9l3.4-3.4\n			l13.9,14.1l13.9-14.1l3.6,3.7c-1.5,2.4-1.2,5.6,0.8,7.7c1.2,1.2,2.7,1.8,4.3,1.8c1.5,0,3.1-0.6,4.3-1.8c2.4-2.4,2.4-6.3,0-8.7\n			C55.6,47,52.3,46.8,49.9,48.6z M50.8,5.3c0.8-0.8,1.7-1.1,2.7-1.1c1,0,2,0.4,2.7,1.1c1.5,1.5,1.5,4,0,5.5c-1.3,1.3-3.2,1.5-4.7,0.6\n			l0.2-0.2l-1.6-1.6L50,9.8C49.3,8.4,49.6,6.5,50.8,5.3z M6,10.9c-1.5-1.5-1.5-4,0-5.5c0.8-0.8,1.7-1.1,2.7-1.1c1,0,2,0.4,2.7,1.1\n			c1.5,1.5,1.5,4,0,5.5S7.5,12.4,6,10.9z M11.5,56.3c-1.5,1.5-3.9,1.5-5.5,0c-1.5-1.5-1.5-4,0-5.5c0.8-0.8,1.7-1.1,2.7-1.1\n			c0.6,0,1.2,0.1,1.7,0.4l-0.1,0.1l1.6,1.6l0.2-0.2C13,53.1,12.8,55.1,11.5,56.3z M56.8,31.1l-12,12.3L32.5,30.9l12-12.3L56.8,31.1z\n			M30.9,4.8L43,17l-12,12.3L18.9,17L30.9,4.8z M5,31.1l12.3-12.5l12,12.3L17.1,43.4L5,31.1z M30.9,57.5L18.6,45l12.3-12.5L43.2,45\n			L30.9,57.5z M56.2,56.3c-1.5,1.5-3.9,1.5-5.5,0c-1.5-1.5-1.5-4,0-5.5c0.8-0.8,1.7-1.1,2.7-1.1c1,0,2,0.4,2.7,1.1\n			C57.7,52.3,57.7,54.8,56.2,56.3z"/>\n		</svg>\n						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n			viewBox="0 0 58.4 67" style="enable-background:new 0 0 58.4 67;" xml:space="preserve">\n		<style type="text/css">\n			.st6320{fill:#F6D563;}\n		</style>\n		<path class="st6320" d="M57.2,6.3H30.9v-5h-2.1v5H2.2v55h26.6v5h2.1v-5h26.3V6.3z M4.2,59.1V8.3h24.5v3.5h-5.6v12.7h5.6v3.5h-5.6v12.7\n			h5.6v3.3h-5.6v12.7h5.6v2.4H4.2z M28.8,22.5h-3.5v-8.6h3.5V22.5z M30.9,13.9h3.4v8.6h-3.4V13.9z M28.8,38.8h-3.5v-8.6h3.5V38.8z\n			M30.9,30.2h3.4v8.6h-3.4V30.2z M28.8,54.7h-3.5v-8.6h3.5V54.7z M30.9,46.1h3.4v8.6h-3.4V46.1z M55.1,59.1H30.9v-2.4h5.5V44.1h-5.5\n			v-3.3h5.5V28.1h-5.5v-3.5h5.5V11.9h-5.5V8.3h24.2V59.1z"/>\n		</svg>\n					</div>\n				</div>\n\n			</div>\n\n			</div>\n\n		</div>\n\n	</div>\n\n  \n</section>\n';
      },
      {},
    ],
    30: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("when"),
          i = s(c),
          r = e("mixins/router-mixin"),
          a = s(r),
          l = e("stores/store"),
          o = s(l),
          u = e("libs/raf"),
          d = s(u),
          p = e("./icons.html"),
          h = s(p);
        (n.default = {
          template: h.default,
          mixins: [a.default],
          props: [],
          data: function () {
            return { id: "icons", pageHeight: 0 };
          },
          components: {},
          ready: function () {
            this.allSvg = [];
          },
          methods: {
            transitionIn: function () {
              (o.default.isSectionTransitionning = !0),
                (this.contentStyle = this.$el.querySelector(".inner").style),
                TweenLite.to(window, 1e-4, { scrollTo: { y: 0 } }),
                TweenMax.to(this.$el, 0.5, {
                  visibility: "visible",
                  opacity: 1,
                  onComplete: this.onTransitionInComplete.bind(this),
                }),
                d.default.subscribe(this.id, this.update.bind(this));
            },
            onTransitionInComplete: function () {
              (o.default.isSectionTransitionning = !1),
                (this.pageHeight =
                  this.$el.querySelector(".inner").offsetHeight + 600),
                (this.titleLines = this.$el.querySelectorAll(".title-line")),
                (this.allSvg = this.$el.querySelectorAll("svg")),
                (this.allColoredBlocks = this.$el.querySelectorAll(
                  ".coloredBlock"
                ));
              for (var e = 0; e < this.titleLines.length; e++)
                this.titleLines[e].posY = this.titleLines[
                  e
                ].getBoundingClientRect().top;
              for (var e = 0; e < this.allSvg.length; e++)
                this.allSvg[e].posY = this.allSvg[
                  e
                ].getBoundingClientRect().top;
              for (var e = 0; e < this.allColoredBlocks.length; e++)
                this.allColoredBlocks[e].posY = this.allColoredBlocks[
                  e
                ].getBoundingClientRect().top;
            },
            transitionOut: function () {
              var e = this;
              return (
                TweenLite.to(window, 1e-4, {
                  scrollTo: { y: o.default.scrollValue },
                }),
                d.default.unsubscribe(this.id),
                i.default.promise(function (t) {
                  TweenMax.to(e.$el, 0.5, {
                    opacity: 0,
                    onComplete: function () {
                      t();
                    },
                  });
                })
              );
            },
            update: function () {
              this._checkElements(this.titleLines),
                this._checkElements(this.allSvg),
                this._checkElements(this.allColoredBlocks);
            },
            _checkElements: function (e) {
              if (e)
                for (var t = 0; t < e.length; t++)
                  o.default.scrollValueEased + o.default.metrics.height - 120 >
                    e[t].posY &&
                    !e[t].isVisible &&
                    ((e[t].isVisible = !0), e[t].classList.add("show"));
            },
          },
        }),
          (t.exports = n.default);
      },
      {
        "./icons.html": 29,
        "libs/raf": 20,
        "mixins/router-mixin": 22,
        "stores/store": 56,
        when: 99,
      },
    ],
    31: [
      function (e, t) {
        t.exports =
          '<section id="intro" v-el="http://www.w3.org/1999/xhtml">\n\n  <div class="intro-inner">\n\n    <h1 v-el:main-title>\n      <div class="inner" v-el:main-title-inner>Landry Pierre</div>\n    </h1>\n\n    <h2 v-el:sub-title>\n      <div class="inner" v-el:sub-title-inner>Portfolio Développeur Web</div>\n    </h2>\n\n  </div>\n\n  <div class="background" v-el:background></div>\n\n</section>\n';
      },
      {},
    ],
    32: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("stores/store"),
          i = s(c),
          r = e("libs/router"),
          a = (s(r), e("./intro.html")),
          l = s(a);
        (n.default = {
          template: l.default,
          props: [],
          data: function () {
            return { id: "intro" };
          },
          components: {},
          ready: function () {
            TweenMax.delayedCall(1, this.playIntro);
          },
          methods: {
            playIntro: function () {
              TweenMax.to(this.$els.mainTitleInner, 1.5, {
                y: 0,
                ease: Power4.easeInOut,
              }),
                TweenMax.to(this.$els.subTitleInner, 1.5, {
                  y: -3,
                  ease: Power4.easeInOut,
                  delay: 0.2,
                }),
                TweenMax.to(this.$els.mainTitle, 1.2, {
                  y: -10,
                  ease: Power4.easeInOut,
                  delay: 3,
                }),
                TweenMax.to(this.$els.subTitle, 1.2, {
                  y: -10,
                  ease: Power4.easeInOut,
                  delay: 2.9,
                }),
                TweenMax.to(this.$els.mainTitleInner, 1.2, {
                  y: "-110%",
                  ease: Power4.easeInOut,
                  delay: 3,
                }),
                TweenMax.to(this.$els.subTitleInner, 1.2, {
                  y: "-115%",
                  ease: Power4.easeInOut,
                  delay: 2.8,
                }),
                TweenMax.to(this.$els.background, 1, {
                  y: 0,
                  ease: Quint.easeInOut,
                  delay: 3.2,
                  onComplete: this.onIntroEnded,
                });
            },
            onIntroEnded: function () {
              (i.default.isIntroPassed = !0), (this.$el.style.display = "none");
              var e = document.querySelector(".logo .name"),
                t = document.querySelectorAll(".menu a");
              TweenMax.to(e, 1.5, { y: 0, ease: Power4.easeOut }),
                TweenMax.staggerTo(
                  t,
                  1.5,
                  { y: 0, ease: Power4.easeOut, delay: 0.3 },
                  0.1
                ),
                TweenMax.delayedCall(1, function () {
                  i.default.currentSection.transitionIn();
                });
            },
          },
        }),
          (t.exports = n.default);
      },
      { "./intro.html": 31, "libs/router": 21, "stores/store": 56 },
    ],
    33: [
      function (e, t) {
        t.exports =
          '<section id="m-about">\n\n  <header> <a v-link="{ path: \'/\' }">Back to home</a> </header>\n\n  <div class="letters">\n    <div class="letter"> <div class="inner">H</div> </div>\n    <div class="letter"> <div class="inner">E</div> </div>\n    <div class="letter"> <div class="inner">Y</div> </div>\n  </div>\n\n  <div class="info">\n    I\'m Pierre Nguyen<br/> based in Paris, France\n    <div class="gap"></div>\n    Available for freelance work\n  </div>\n\n  <div class="intro">\n    A FEW WORDS <br/>ABOUT ME\n  </div>\n\n  <div class="lists">\n\n    <ul class="skills">\n      <li class="label">Skills and focus</li>\n      <li>Art Direction</li>\n      <li>Interactive Design</li>\n      <li>User Experience</li>\n      <li>Branding</li>\n    </ul>\n\n    <ul class="agencies">\n      <li class="label">Agencies</li>\n      <li> <a href="http://www.akqa.com" target="_blank">AKQA</a> </li>\n      <li> <a href="http://www.betc.com/" target="_blank">BETC Digital</a> </li>\n      <li> <a href="http://spintank.fr/" target="_blank">Spintank</a> </li>\n      <li> <a href="http://www.octaveoctave.com/" target="_blank">Octave & Octave</a></li>\n      <li> <a href="http://www.pixelis.fr/" target="_blank">Pixelis</a> </li>\n    </ul>\n\n    <div class="clear"></div>\n\n    <ul class="recognition">\n      <li class="label">Recognition</li>\n      <li>Awwwards x2</li>\n      <li>FWA x2</li>\n    </ul>\n\n    <ul class="follow">\n      <li class="label">Follow</li>\n      <li> <a href="https://fr.linkedin.com/in/pierrenguyen1" target="_blank">Linkedin</a> </li>\n      <li> <a href="https://twitter.com/hellopierre" target="_blank">Twitter</a> </li>\n      <li> <a href="https://www.behance.net/monsieurCaillou" target="_blank">Behance</a> </li>\n    </ul>\n\n    <div class="clear"></div>\n\n  </div>\n\n  <div class="drop">\n    <div class="head">\n      DROP<br/>\n      ME<br/>\n      A<br/>\n      LINE<br/>\n    </div>\n    <a href="mailto:contact@monsieurcaillou.com" target="_blank">contact@monsieurcaillou.com</a>\n    <span class="credits"> Code @ <a href="https://twitter.com/williamapan" target="_blank">William Mapan</a> </span>\n  </div>\n\n</section>\n';
      },
      {},
    ],
    34: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("when"),
          i = s(c),
          r = e("mixins/router-mixin"),
          a = s(r),
          l = e("stores/store"),
          o = s(l),
          u = e("libs/raf"),
          d = (s(u), e("./m-about.html")),
          p = s(d);
        (n.default = {
          template: p.default,
          mixins: [a.default],
          props: [],
          data: function () {
            return { id: "about", pageHeight: 2886, store: o.default };
          },
          components: {},
          ready: function () {
            if (
              ((this.onResize = this._onResize.bind(this)),
              BrowserDetect.isTablet)
            ) {
              var e = this.$el.querySelector(".intro"),
                t = e.innerHTML.replace("<br>", "");
              e.innerHTML = t;
            }
          },
          methods: {
            transitionIn: function () {
              TweenLite.to(window, 1e-4, { scrollTo: { y: 0 } }),
                TweenMax.to(this.$el, 0.5, {
                  visibility: "visible",
                  opacity: 1,
                });
              var e = this.$el.querySelectorAll(".letter .inner");
              TweenMax.staggerTo(e, 1, { y: 0, ease: Power2.easeOut }, 0.1);
              var t = this.$el.querySelectorAll(".info");
              TweenMax.to(t, 1, {
                y: 0,
                opacity: 1,
                ease: Power2.easeOut,
                delay: 0.6,
              });
            },
            transitionOut: function () {
              var e = this;
              return (
                TweenLite.to(window, 1e-4, {
                  scrollTo: { y: o.default.scrollValue },
                }),
                i.default.promise(function (t) {
                  TweenMax.to(e.$el, 0.5, {
                    opacity: 0,
                    onComplete: function () {
                      t();
                    },
                  });
                })
              );
            },
            _onResize: function () {},
            update: function () {},
            _checkElements: function () {},
          },
        }),
          (t.exports = n.default);
      },
      {
        "./m-about.html": 33,
        "libs/raf": 20,
        "mixins/router-mixin": 22,
        "stores/store": 56,
        when: 99,
      },
    ],
    35: [
      function (e, t) {
        t.exports =
          '<section id="m-home">\n\n  <headerr>/</headerr>\n\n  <div class="slide maje" @click="onSlideTouched(\'maje\')">\n    <div class="title-wrapper">\n      <div class="title">\n        <span class="letter"> <span class="inner">M</span> </span>\n        <span class="letter"> <span class="inner">A</span> </span>\n        <span class="letter"> <span class="inner">J</span> </span>\n        <span class="letter"> <span class="inner">E</span> </span>\n      </div>\n    </div>\n    <div class="img-wrapper">\n      <img src="./assets/images/m-home/maje.jpg" alt="">\n    </div>\n  </div>\n\n  <div class="slide peugeot" @click="onSlideTouched(\'peugeot\')">\n    <div class="title-wrapper">\n      <div class="title">\n        <span class="letter"> <span class="inner">P</span> </span>\n        <span class="letter"> <span class="inner">E</span> </span>\n        <span class="letter"> <span class="inner">U</span> </span>\n        <span class="letter"> <span class="inner">G</span> </span>\n        <span class="letter"> <span class="inner">E</span> </span>\n        <span class="letter"> <span class="inner">O</span> </span>\n        <span class="letter"> <span class="inner">T</span> </span>\n      </div>\n    </div>\n    <div class="img-wrapper">\n      <img src="./assets/images/m-home/peugeot.jpg" alt="">\n    </div>\n\n  </div>\n\n  <div class="slide canalsat" @click="onSlideTouched(\'canalsat\')">\n    <div class="title-wrapper">\n      <div class="title">\n        <span class="letter"> <span class="inner">C</span> </span>\n        <span class="letter"> <span class="inner">A</span> </span>\n        <span class="letter"> <span class="inner">N</span> </span>\n        <span class="letter"> <span class="inner">A</span> </span>\n        <span class="letter"> <span class="inner">L</span> </span>\n        <span class="letter"> <span class="inner">S</span> </span>\n        <span class="letter"> <span class="inner">A</span> </span>\n        <span class="letter"> <span class="inner">T</span> </span>\n      </div>\n    </div>\n    <div class="img-wrapper">\n      <img src="./assets/images/m-home/canalsat.jpg" alt="">\n    </div>\n  </div>\n\n  <div class="slide poiray" @click="onSlideTouched(\'poiray\')">\n    <div class="title-wrapper">\n      <div class="title">\n        <span class="letter"> <span class="inner">P</span> </span>\n        <span class="letter"> <span class="inner">O</span> </span>\n        <span class="letter"> <span class="inner">I</span> </span>\n        <span class="letter"> <span class="inner">R</span> </span>\n        <span class="letter"> <span class="inner">A</span> </span>\n        <span class="letter"> <span class="inner">Y</span> </span>\n      </div>\n    </div>\n    <div class="img-wrapper">\n      <img src="./assets/images/m-home/poiray.jpg" alt="">\n    </div>\n  </div>\n\n  <div class="slide tignes" @click="onSlideTouched(\'tignes\')">\n    <div class="title-wrapper">\n      <div class="title">\n        <span class="letter"> <span class="inner">T</span> </span>\n        <span class="letter"> <span class="inner">I</span> </span>\n        <span class="letter"> <span class="inner">G</span> </span>\n        <span class="letter"> <span class="inner">N</span> </span>\n        <span class="letter"> <span class="inner">E</span> </span>\n        <span class="letter"> <span class="inner">S</span> </span>\n      </div>\n    </div>\n    <div class="img-wrapper">\n      <img src="./assets/images/m-home/tignes.jpg" alt="">\n    </div>\n  </div>\n\n  <div class="slide hermes" @click="onSlideTouched(\'hermes\')">\n    <div class="title-wrapper">\n      <div class="title">\n        <span class="letter"> <span class="inner">H</span> </span>\n        <span class="letter"> <span class="inner">E</span> </span>\n        <span class="letter"> <span class="inner">R</span> </span>\n        <span class="letter"> <span class="inner">M</span> </span>\n        <span class="letter"> <span class="inner">E</span> </span>\n        <span class="letter"> <span class="inner">S</span> </span>\n      </div>\n    </div>\n    <div class="img-wrapper">\n      <img src="./assets/images/m-home/hermes.jpg" alt="">\n    </div>\n  </div>\n\n</section>\n';
      },
      {},
    ],
    36: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        {
          var c = e("when"),
            i = s(c),
            r = e("stores/store"),
            a = (s(r), e("mixins/router-mixin")),
            l = s(a),
            o = e("utils/number-utils"),
            u = (s(o), e("libs/router")),
            d = s(u),
            p = e("components/m-header/m-header"),
            h = s(p),
            v = e("./m-home.html"),
            f = s(v);
          window.innerWidth, window.innerHeight;
        }
        (n.default = {
          template: f.default,
          mixins: [l.default],
          props: [],
          data: function () {
            return { id: "home" };
          },
          components: { Headerr: h.default },
          ready: function () {
            this.addListeners();
          },
          methods: {
            addListeners: function () {},
            removeListeners: function () {},
            transitionIn: function () {
              TweenLite.to(window, 1e-4, { scrollTo: { y: 0 } });
              var e = document.querySelector(".logo .name"),
                t = document.querySelectorAll(".menu a");
              TweenMax.to(e, 1.5, { y: 0, ease: Power4.easeOut }),
                TweenMax.to(t, 1.5, { y: 0, ease: Power4.easeOut, delay: 0.3 }),
                TweenMax.to(this.$el, 0.5, {
                  visibility: "visible",
                  opacity: 1,
                });
            },
            transitionOut: function () {
              var e = this;
              return i.default.promise(function (t) {
                TweenMax.to(e.$el, 0.5, {
                  opacity: 0,
                  onComplete: function () {
                    t();
                  },
                });
              });
            },
            onSlideTouched: function (e) {
              d.default.go("/projects/" + e);
            },
          },
        }),
          (t.exports = n.default);
      },
      {
        "./m-home.html": 35,
        "components/m-header/m-header": 6,
        "libs/router": 21,
        "mixins/router-mixin": 22,
        "stores/store": 56,
        "utils/number-utils": 58,
        when: 99,
      },
    ],
    37: [
      function (e, t) {
        t.exports =
          '<section id="m-intro" v-el="http://www.w3.org/1999/xhtml">\n\n  <div class="intro-inner">\n\n    <h1>\n      <div class="row"> <div class="inner">MONSIEUR</div> </div>\n      <div class="row"> <div class="inner">CAILLOU</div> </div>\n    </h1>\n\n    <h2>\n      <div class="inner">Portfolio Développeur Web</div>\n    </h2>\n\n  </div>\n\n  <div class="background"></div>\n\n</section>\n';
      },
      {},
    ],
    38: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("stores/store"),
          i = s(c),
          r = e("libs/router"),
          a = (s(r), e("./m-intro.html")),
          l = s(a);
        (n.default = {
          template: l.default,
          props: [],
          data: function () {
            return { id: "intro" };
          },
          components: {},
          ready: function () {
            TweenMax.delayedCall(1, this.playIntro);
          },
          methods: {
            playIntro: function () {
              {
                var e = this.$el.querySelectorAll(".row .inner")[0],
                  t = this.$el.querySelectorAll(".row .inner")[1],
                  n = this.$el.querySelector("h2 .inner");
                this.$el.querySelector(".background");
              }
              TweenMax.to(e, 1.5, { y: 0, ease: Power4.easeOut }),
                TweenMax.to(t, 1.5, { y: 0, ease: Power4.easeOut, delay: 0.3 }),
                TweenMax.to(n, 1.5, { y: 0, ease: Power4.easeOut, delay: 0.6 }),
                TweenMax.to(e, 1.5, {
                  y: "-100%",
                  ease: Power4.easeInOut,
                  delay: 2.5,
                }),
                TweenMax.to(t, 1.5, {
                  y: "-100%",
                  ease: Power4.easeInOut,
                  delay: 2.6,
                }),
                TweenMax.to(n, 1.5, {
                  y: "-120%",
                  ease: Power4.easeInOut,
                  delay: 2.7,
                  onComplete: this.onIntroEnded.bind(this),
                });
            },
            onIntroEnded: function () {
              (i.default.isIntroPassed = !0),
                (this.$el.style.display = "none"),
                i.default.currentSection.transitionIn();
            },
          },
        }),
          (t.exports = n.default);
      },
      { "./m-intro.html": 37, "libs/router": 21, "stores/store": 56 },
    ],
    39: [
      function (e, t) {
        t.exports =
          '<img src="../assets/images/m-projects/canalsat/1.jpg" alt="">\n<img src="../assets/images/m-projects/canalsat/2.jpg" alt="">\n<img src="../assets/images/m-projects/canalsat/3.jpg" alt="">\n<img src="../assets/images/m-projects/canalsat/4.jpg" alt="">\n<img src="../assets/images/m-projects/canalsat/5.jpg" alt="">\n<img src="../assets/images/m-projects/canalsat/6.jpg" alt="">\n<img src="../assets/images/m-projects/canalsat/7.jpg" alt="">\n<img src="../assets/images/m-projects/canalsat/8.jpg" alt="">\n<img src="../assets/images/m-projects/canalsat/9.jpg" alt="">';
      },
      {},
    ],
    40: [
      function (e, t) {
        t.exports =
          '<section id="m-project-detail">\n  \n  <header>\n    <a v-link="{ path: \'/\' }">Back to home</a>\n    <a v-link="{ path: \'/about\' }">About & contact</a> \n  </header>\n\n  <div class="clear"></div>\n\n  <project-header v-ref:header v-bind:info="info"></project-header>\n\n  <div class="sub-header" v-bind:style="{ background: info.color, height: subImageHeight + \'px\' }">\n    <a v-el:lockedlink href="mailto:contact@monsieurcaillou.com" target="_blank">\n      <img v-el:subheader-img-locked alt="">\n    </a>\n\n    <img v-el:subheader-img v-bind:src=" \'../assets/images/m-projects/\' + currentProject + \'/0.jpg\' " alt="">\n  </div>\n\n  {{{ projectTemplate }}}\n\n  <div class="next" @click="onClickNext" v-bind:style="{ height: ( store.metrics.width  ) + 50 + \'px\' }">\n    <img v-bind:src="nextImgSrc" alt="">\n    <div class="text-wrapper">\n      <div class="text">\n        <span class="letter" style="flex-basis: 25% "> <span class="inner">N</span> </span>\n        <span class="letter" style="flex-basis: 25% "> <span class="inner">E</span> </span>\n        <span class="letter" style="flex-basis: 25% "> <span class="inner">X</span> </span>\n        <span class="letter" style="flex-basis: 25% "> <span class="inner">T</span> </span>\n      </div>\n    </div>\n    \n  </div>\n\n</section>\n';
      },
      {},
    ],
    41: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("when"),
          i = s(c),
          r = e("perfect-scrollbar"),
          a = (s(r), e("stores/store")),
          l = s(a),
          o = e("mixins/router-mixin"),
          u = s(o),
          d = e("libs/raf"),
          p = (s(d), e("utils/number-utils")),
          h = (s(p), e("libs/router")),
          v = s(h),
          f = e("components/m-project-header/m-project-header"),
          g = s(f),
          m = e("components/parallax-cover/parallax-cover"),
          w = s(m),
          y = e("./m-project-detail.html");
        (n.default = {
          template: y,
          mixins: [u.default],
          props: [],
          data: function () {
            return {
              id: "project-detail",
              projectTemplate: "",
              pageHeight: 0,
              subImageHeight: 0,
              store: l.default,
            };
          },
          computed: {
            height: function () {
              return 0.7 * l.default.metrics.height + "px";
            },
            currentProject: function () {
              return l.default.currentProject.id;
            },
            nextImgSrc: function () {
              return (
                "../assets/images/home/" +
                l.default.currentProject.next +
                ".png"
              )
                .replace("home", "m-home")
                .replace("png", "jpg");
            },
            info: function () {
              return l.default.currentProject.info;
            },
          },
          components: { ProjectHeader: g.default, ParallaxCover: w.default },
          ready: function () {
            this.subImageHeight = 0.7 * this.store.metrics.height;
          },
          destroyed: function () {},
          methods: {
            addListeners: function () {},
            removeListeners: function () {},
            transitionIn: function () {
              TweenLite.to(window, 1e-4, { scrollTo: { y: 0 } }),
                "peugeot" === l.default.currentProject.id &&
                  (this.projectTemplate = e("./peugeot.html")),
                "canalsat" === l.default.currentProject.id &&
                  (this.projectTemplate = e("./canalsat.html")),
                "poiray" === l.default.currentProject.id &&
                  (this.projectTemplate = e("./poiray.html")),
                "tignes" === l.default.currentProject.id &&
                  (this.projectTemplate = e("./tignes.html")),
                "maje" === l.default.currentProject.id &&
                  (this.projectTemplate = e("./maje.html")),
                "hermes" === l.default.currentProject.id
                  ? ((this.projectTemplate = ""),
                    (this.$els.subheaderImgLocked.src =
                      "../assets/images/m-projects/" +
                      l.default.currentProject.id +
                      "/0c.jpg"),
                    (this.$els.subheaderImg.style.display = "none"))
                  : (this.$els.lockedlink.style.display = "none"),
                (this.$el.className = l.default.currentProject.id),
                TweenMax.fromTo(this.$el, 0.5, { opacity: 0 }, { opacity: 1 }),
                this.$refs.header.transitionIn();
            },
            transitionOut: function () {
              var e = this;
              return (
                TweenLite.to(window, 1e-4, {
                  scrollTo: { y: l.default.scrollValue },
                }),
                this.$refs.header.transitionOut(),
                i.default.promise(function (t) {
                  TweenMax.to(e.$el, 0.5, {
                    opacity: 0,
                    onComplete: function () {
                      t();
                    },
                  });
                })
              );
            },
            onClickNext: function () {
              v.default.go("/projects/" + l.default.currentProject.next);
            },
            _onScroll: function () {},
            _onResize: function () {},
            _update: function () {},
          },
        }),
          (t.exports = n.default);
      },
      {
        "./canalsat.html": 39,
        "./m-project-detail.html": 40,
        "./maje.html": 42,
        "./peugeot.html": 43,
        "./poiray.html": 44,
        "./tignes.html": 45,
        "components/m-project-header/m-project-header": 8,
        "components/parallax-cover/parallax-cover": 12,
        "libs/raf": 20,
        "libs/router": 21,
        "mixins/router-mixin": 22,
        "perfect-scrollbar": 59,
        "stores/store": 56,
        "utils/number-utils": 58,
        when: 99,
      },
    ],
    42: [
      function (e, t) {
        t.exports =
          '<img src="../assets/images/m-projects/maje/1.jpg" alt="">\n<img src="../assets/images/m-projects/maje/2.jpg" alt="">\n<img src="../assets/images/m-projects/maje/3.jpg" alt="">\n';
      },
      {},
    ],
    43: [
      function (e, t) {
        t.exports =
          '<img src="../assets/images/m-projects/peugeot/1.jpg" alt="">\n<img src="../assets/images/m-projects/peugeot/2.jpg" alt="">\n<img src="../assets/images/m-projects/peugeot/3.jpg" alt="">\n<img src="../assets/images/m-projects/peugeot/4.jpg" alt="">\n<img src="../assets/images/m-projects/peugeot/5.jpg" alt="">';
      },
      {},
    ],
    44: [
      function (e, t) {
        t.exports =
          '<img src="../assets/images/m-projects/poiray/1.jpg" alt="">\n<img src="../assets/images/m-projects/poiray/2.jpg" alt="">\n<img src="../assets/images/m-projects/poiray/3.jpg" alt="">\n<img src="../assets/images/m-projects/poiray/4.jpg" alt="">\n';
      },
      {},
    ],
    45: [
      function (e, t) {
        t.exports =
          '<img src="../assets/images/m-projects/tignes/1.jpg" alt="">\n<img src="../assets/images/m-projects/tignes/2.jpg" alt="">\n<img src="../assets/images/m-projects/tignes/3.jpg" alt="">\n<img src="../assets/images/m-projects/tignes/4.jpg" alt="">\n\n';
      },
      {},
    ],
    46: [
      function (e, t) {
        t.exports =
          '<div class="images-block">\n  <img src="../assets/images/projects/canalsat/JPG/1.jpg" alt="">\n</div>\n\n<div class="grid-block">\n  <div class="wrapper">\n    <div class="grid-left grid-side-1"><video autoplay loop src="../assets/images/projects/canalsat/MP4/1.mp4"> </video> </div>\n    <div class="grid-right grid-side-1"><video autoplay loop src="../assets/images/projects/canalsat/MP4/2.mp4"> </video> </div>\n  </div>\n</div>\n\n<div class="images-block">\n  <img src="../assets/images/projects/canalsat/JPG/2.jpg" alt="">\n  <img src="../assets/images/projects/canalsat/JPG/3.jpg" alt="">\n  <img src="../assets/images/projects/canalsat/JPG/4.jpg" alt="">\n  <img src="../assets/images/projects/canalsat/JPG/5.jpg" alt="">\n  <img src="../assets/images/projects/canalsat/JPG/6.jpg" alt="">\n  <img src="../assets/images/projects/canalsat/JPG/7.jpg" alt="">\n  <img src="../assets/images/projects/canalsat/JPG/8.jpg" alt="">\n  <img src="../assets/images/projects/canalsat/JPG/9.jpg" alt="">\n</div>\n\n<div class="grid-block">\n  <div class="wrapper">\n    <div class="grid-left grid-side-2">\n      <div class="grid-side-2-inner">\n        <video autoplay loop src="../assets/images/projects/canalsat/MP4/3.mp4"> </video>\n        <video autoplay loop src="../assets/images/projects/canalsat/MP4/4.mp4"> </video>\n      </div>\n    </div>\n    <div class="grid-right grid-side-1">\n      <video autoplay loop src="../assets/images/projects/canalsat/MP4/5.mp4"> </video>\n    </div>\n    <div class="clear"></div>\n  </div>\n</div>';
      },
      {},
    ],
    47: [
      function (e, t) {
        t.exports =
          '<div class="images-block">\n  <img src="../assets/images/projects/hermes/JPG/1.jpg" alt="">\n  <img src="../assets/images/projects/hermes/JPG/2.jpg" alt="">\n  <img src="../assets/images/projects/hermes/JPG/3.jpg" alt="">\n  <img src="../assets/images/projects/hermes/JPG/4.jpg" alt="">\n  <img src="../assets/images/projects/hermes/JPG/5.jpg" alt="">\n</div>\n\n\n<div class="grid-block">\n  <div class="grid-side-1">\n    <video autoplay loop src="../assets/images/projects/hermes/MP4/1.mp4"> </video>\n  </div>\n</div>\n\n<div class="images-block">\n  <img src="../assets/images/projects/hermes/JPG/6.jpg" alt="">\n  <img src="../assets/images/projects/hermes/JPG/7.jpg" alt="">\n  <img src="../assets/images/projects/hermes/JPG/8.jpg" alt="">\n  <img src="../assets/images/projects/hermes/JPG/9.jpg" alt="">\n  <img src="../assets/images/projects/hermes/JPG/10.jpg" alt="">\n</div>\n\n<div class="grid-block">\n  <div class="grid-side-1">\n    <video autoplay loop src="../assets/images/projects/hermes/MP4/2.mp4"> </video>\n  </div>\n</div>';
      },
      {},
    ],
    48: [
      function (e, t) {
        t.exports =
          '<div class="images-block">\n  <img src="../assets/images/projects/maje/JPG/1.jpg" alt="">\n  <img src="../assets/images/projects/maje/JPG/2.jpg" alt="">\n</div>\n\n<div class="grid-block" style="margin-top: -170px">\n  <div class="wrapper">\n    <div class="grid-left grid-side-1">\n      <video autoplay loop src="../assets/images/projects/maje/MP4/1.mp4"></video>\n    </div>\n    <div class="grid-right grid-side-1">\n      <video autoplay loop src="../assets/images/projects/maje/MP4/2.mp4"></video>\n    </div>\n  </div>\n</div>\n\n<div class="images-block">\n  <img src="../assets/images/projects/maje/JPG/3.jpg" alt="">\n  <img src="../assets/images/projects/maje/JPG/4.jpg" alt="">\n</div>\n\n<div class="grid-block">\n  <div class="grid-side-1">\n    <video autoplay loop src="../assets/images/projects/maje/MP4/3.mp4"></video>\n  </div>\n</div>';
      },
      {},
    ],
    49: [
      function (e, t) {
        t.exports =
          '<div class="images-block">\n  <img src="../assets/images/projects/peugeot/JPG/1.jpg" alt="">\n</div>\n\n<div class="grid-block">\n  <div class="wrapper">\n    <div class="grid-left grid-side-1"><video autoplay loop src="../assets/images/projects/peugeot/MP4/1.mp4"> </video> </div>\n    <div class="grid-left grid-side-1"><video autoplay loop src="../assets/images/projects/peugeot/MP4/2.mp4"> </video> </div>\n  </div>\n</div>\n\n<div class="images-block">\n  <img src="../assets/images/projects/peugeot/JPG/2.jpg" alt="">\n</div>\n\n<div class="grid-block" style="margin-top: -170px">\n  <div class="wrapper">\n    <div class="grid-left grid-side-1"><video autoplay loop src="../assets/images/projects/peugeot/MP4/3.mp4"> </video> </div>\n    <div class="grid-left grid-side-1"><video autoplay loop src="../assets/images/projects/peugeot/MP4/4.mp4"> </video> </div>\n  </div>\n</div>\n\n<div class="images-block">\n  <img src="../assets/images/projects/peugeot/JPG/3.jpg" alt="">\n  <img src="../assets/images/projects/peugeot/JPG/4.jpg" alt="">\n  <img src="../assets/images/projects/peugeot/JPG/5.jpg" alt="">\n</div>';
      },
      {},
    ],
    50: [
      function (e, t) {
        t.exports =
          '<div class="images-block">\n  <img src="../assets/images/projects/poiray/JPG/1.jpg" alt="">\n</div>\n\n<div class="grid-block">\n  <div class="grid-side-1">\n    <video autoplay loop src="../assets/images/projects/poiray/MP4/1.mp4"> </video>\n  </div>\n</div>\n\n<div class="images-block">\n  <img src="../assets/images/projects/poiray/JPG/2.jpg" alt="">\n  <img src="../assets/images/projects/poiray/JPG/3.jpg" alt="">\n  <img src="../assets/images/projects/poiray/JPG/4.jpg" alt="">\n</div>\n\n<div class="grid-block">\n  <div class="wrapper">\n    <div class="grid-left grid-side-1"> <video autoplay loop src="../assets/images/projects/poiray/MP4/2.mp4"> </video> </div>\n    <div class="grid-right grid-side-1"> <video autoplay loop src="../assets/images/projects/poiray/MP4/3.mp4"> </video> </div>\n  </div>\n</div>';
      },
      {},
    ],
    51: [
      function (e, t) {
        t.exports =
          '<section id="project-detail">\n\n  <div class="shadow" v-bind:style="{ height: pageHeight + \'px\' }"></div>\n\n\n  <div class="content-inner">\n\n    \n    <div class="inner-inner">\n      <project-header v-ref:header v-bind:info="info"></project-header>\n\n      <div class="sub-header" v-bind:style>\n        \n        <a v-el:lockedlink href="mailto:contact@monsieurcaillou.com" target="_blank">\n          <img v-el:subheader-img-locked alt="">\n        </a>\n\n        <img v-el:subheader-img alt="">\n        \n      </div>\n\n      {{{ projectTemplate }}}\n\n      <div class="parallax-cover-container">\n        <parallax-cover @click="onClickNext" v-ref:parallax-cover text="NEXT">\n          <img v-bind:src="nextImgSrc" alt="">\n        </parallax-cover>\n      </div>\n\n    </div>\n    \n\n  </div>\n  \n\n</section>\n';
      },
      {},
    ],
    52: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("when"),
          i = s(c),
          r = e("perfect-scrollbar"),
          a = (s(r), e("stores/store")),
          l = s(a),
          o = e("mixins/router-mixin"),
          u = s(o),
          d = e("libs/raf"),
          p = s(d),
          h = e("utils/number-utils"),
          v = s(h),
          f = e("libs/router"),
          g = s(f),
          m = e("components/project-header/project-header"),
          w = s(m),
          y = e("components/parallax-cover/parallax-cover"),
          b = s(y),
          x = e("./project-detail.html"),
          M = !1;
        (n.default = {
          template: x,
          mixins: [u.default],
          props: [],
          data: function () {
            return {
              id: "project-detail",
              projectTemplate: "",
              pageHeight: 0,
              subHeaderImgSrc: "",
              isLocked: !1,
              store: l.default,
            };
          },
          computed: {
            height: function () {
              return 0.7 * l.default.metrics.height + "px";
            },
            currentProject: function () {
              return l.default.currentProject.id;
            },
            nextImgSrc: function () {
              return (
                "../assets/images/home/" +
                l.default.currentProject.next +
                ".png"
              );
            },
            info: function () {
              return l.default.currentProject.info;
            },
          },
          watch: {
            "store.scrollValue": function () {
              this.onScroll();
            },
          },
          components: { ProjectHeader: w.default, ParallaxCover: b.default },
          ready: function () {
            (this.onScroll = this._onScroll.bind(this)),
              (this.onResize = this._onResize.bind(this)),
              (this.subheaderImgStyle = this.$els.subheaderImg.style),
              this.addListeners();
          },
          destroyed: function () {
            this.$refs.parallaxCover.release(), this.removeListeners();
          },
          methods: {
            addListeners: function () {
              p.default.subscribe("projectDetailRAF", this._update.bind(this)),
                window.addEventListener("resize", this.onResize);
            },
            removeListeners: function () {
              p.default.unsubscribe("projectDetailRAF"),
                window.removeEventListener("resize", this.onResize);
            },
            transitionIn: function () {
              var t = this;
              (l.default.isSectionTransitionning = !0),
                TweenLite.to(window, 1e-4, { scrollTo: { y: 0 } }),
                (this.pageHeight = l.default.metrics.height),
                (this.contentStyle = this.$el.querySelector(
                  ".inner-inner"
                ).style),
                (this.$els.subheaderImg.src =
                  "../assets/images/projects/" +
                  this.currentProject +
                  "/JPG/0.jpg"),
                (this.$els.subheaderImg.style.display = "block"),
                (this.$els.lockedlink.style.display = "none"),
                "peugeot" === l.default.currentProject.id &&
                  (this.projectTemplate = e("./peugeot.html")),
                "canalsat" === l.default.currentProject.id &&
                  (this.projectTemplate = e("./canalsat.html")),
                "poiray" === l.default.currentProject.id &&
                  (this.projectTemplate = e("./poiray.html")),
                "tignes" === l.default.currentProject.id &&
                  (this.projectTemplate = e("./tignes.html")),
                "maje" === l.default.currentProject.id &&
                  (this.projectTemplate = e("./maje.html")),
                "hermes" === l.default.currentProject.id && l.default.is
                  ? ((this.projectTemplate = e("./hermes.html")),
                    (M = !0),
                    (this.$els.lockedlink.style.display = "none"))
                  : "hermes" !== l.default.currentProject.id ||
                    l.default.is ||
                    ((this.projectTemplate = ""),
                    (this.$els.lockedlink.style.display = "block"),
                    (this.$els.subheaderImg.style.display = "none"),
                    (this.$els.subheaderImgLocked.src =
                      "../assets/images/projects/" +
                      this.currentProject +
                      "/JPG/0c.jpg")),
                (this.$el.className = l.default.currentProject.id),
                this.show(),
                TweenMax.fromTo(
                  this.$el,
                  0.5,
                  { opacity: 0 },
                  {
                    opacity: 1,
                    onComplete: function () {
                      (l.default.isSectionTransitionning = !1), t._onResize();
                    },
                  }
                ),
                this.$refs.header.transitionIn(),
                this.$refs.parallaxCover.init();
            },
            transitionOut: function () {
              var e = this;
              return (
                (M = !1),
                this.$refs.header.transitionOut(),
                TweenLite.to(window, 1e-4, {
                  scrollTo: { y: l.default.scrollValue },
                }),
                this.$refs.header.transitionOut(),
                i.default.promise(function (t) {
                  TweenMax.to(e.$el, 0.5, {
                    opacity: 0,
                    onComplete: function () {
                      t();
                    },
                  });
                })
              );
            },
            onClickNext: function () {
              g.default.go("/projects/" + l.default.currentProject.next);
            },
            _onScroll: function () {},
            _onResize: function () {
              (this.pageHeight = this.$el.querySelector(
                ".inner-inner"
              ).offsetHeight),
                (this.$els.subheaderImg.style.width = "auto"),
                (this.$els.subheaderImg.style.height = "calc( 100% + 200px )");
              var e = this.$els.subheaderImg.clientWidth;
              e < this.store.metrics.width &&
                ((this.$els.subheaderImg.style.width = "100%"),
                (this.$els.subheaderImg.style.height = "auto"));
            },
            _update: function () {
              var e = l.default.metrics.width / 2,
                t = -e,
                n = -l.default.metrics.height / 2 - 30,
                s = -(l.default.metrics.height / 2) - 150,
                c = v.default.map(
                  l.default.scrollValue,
                  0,
                  2.2 * l.default.metrics.height,
                  n,
                  s
                ),
                i = "translate(" + t + "px, " + c + "px) translateZ(0)";
              ("hermes" !== l.default.currentProject.id ||
                ("hermes" === l.default.currentProject.id && M)) &&
                ((this.subheaderImgStyle.webkitTransform = i),
                (this.subheaderImgStyle.transform = i)),
                this.$refs.parallaxCover.update(l.default.scrollValue);
            },
          },
        }),
          (t.exports = n.default);
      },
      {
        "./canalsat.html": 46,
        "./hermes.html": 47,
        "./maje.html": 48,
        "./peugeot.html": 49,
        "./poiray.html": 50,
        "./project-detail.html": 51,
        "./tignes.html": 53,
        "components/parallax-cover/parallax-cover": 12,
        "components/project-header/project-header": 14,
        "libs/raf": 20,
        "libs/router": 21,
        "mixins/router-mixin": 22,
        "perfect-scrollbar": 59,
        "stores/store": 56,
        "utils/number-utils": 58,
        when: 99,
      },
    ],
    53: [
      function (e, t) {
        t.exports =
          '<div class="images-block">\n  <img src="../assets/images/projects/tignes/JPG/1.jpg" alt="">\n  <img src="../assets/images/projects/tignes/JPG/2.jpg" alt="">\n  <img src="../assets/images/projects/tignes/JPG/3.jpg" alt="">\n  <img src="../assets/images/projects/tignes/JPG/4.jpg" alt="">\n</div>\n\n<div class="grid-block">\n  <div class="wrapper">\n    <div class="grid-left grid-side-1">\n      <video autoplay loop src="../assets/images/projects/tignes/MP4/1.mp4"> </video>\n    </div>\n    <div class="grid-right grid-side-1">\n      <video autoplay loop src="../assets/images/projects/tignes/MP4/2.mp4"> </video>\n    </div>\n  </div>\n</div>\n';
      },
      {},
    ],
    54: [
      function (e, t) {
        t.exports =
          '<section id="projects">\n\n  <div class="inner">\n\n    <div class="images-container">\n      <img src="./assets/images/overview/maje.jpg" alt="">\n      <img src="./assets/images/overview/peugeot.jpg" alt="">\n      <img src="./assets/images/overview/canalsat.jpg" alt="">\n      <img src="./assets/images/overview/poiray.jpg" alt="">\n      <img src="./assets/images/overview/tignes.jpg" alt="">\n      <img src="./assets/images/overview/hermes.jpg" alt="">\n    </div>\n\n    <div class="list-container">\n\n      <ul>\n        <li> <a id="maje" v-link="{ path: \'/projects/maje\' }">MAJE</a> </li>\n        <li> <a id="peugeot" v-link="{ path: \'/projects/peugeot\' }">PEUGEOT</a> </li>\n        <li> <a id="canalsat" v-link="{ path: \'/projects/canalsat\' }">CANALSAT</a> </li>\n        <li> <a id="poiray" v-link="{ path: \'/projects/poiray\' }">POIRAY</a> </li>\n        <li> <a id="tignes" v-link="{ path: \'/projects/tignes\' }">TIGNES</a> </li>\n        <li> <a id="hermes" v-link="{ path: \'/projects/hermes\' }">HERMÈS</a> </li>\n      </ul>\n\n    </div>\n\n  </div>\n\n\n\n</section>\n';
      },
      {},
    ],
    55: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var c = e("when"),
          i = s(c),
          r = e("mixins/router-mixin"),
          a = s(r),
          l = e("stores/store"),
          o = (s(l), e("utils/dom-utils")),
          u = s(o),
          d = e("./projects.html"),
          p = s(d),
          h = [],
          v = [],
          f = {
            maje: 0,
            peugeot: 1,
            canalsat: 2,
            poiray: 3,
            tignes: 4,
            hermes: 5,
          };
        (n.default = {
          template: p.default,
          mixins: [a.default],
          props: [],
          data: function () {
            return { id: "projects" };
          },
          components: {},
          ready: function () {
            (this.onLinkEnter = this._onLinkEnter.bind(this)),
              (this.onLinkLeave = this._onLinkLeave.bind(this));
          },
          destroyed: function () {
            (h = []), (v = []), this.removeListeners();
          },
          methods: {
            addListeners: function () {
              for (
                var e = this.$el.querySelectorAll("img"), t = 0;
                t < e.length;
                t++
              )
                h.push(e[t]);
              e = this.$el.querySelectorAll("a");
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                (n.innerHTML = u.default.splitIntoSpans(n.innerHTML)),
                  n.addEventListener("mouseenter", this.onLinkEnter),
                  n.addEventListener("mouseleave", this.onLinkLeave),
                  v.push(n);
              }
            },
            removeListeners: function () {
              for (var e = 0; e < v.length; e++)
                v[e].removeEventListener("mouseover", this.onLinkEnter),
                  v[e].removeEventListener("mouseout", this.onLinkLeave);
            },
            transitionIn: function () {
              this.addListeners(),
                TweenMax.to(this.$el, 0.5, {
                  visibility: "visible",
                  opacity: 1,
                });
              for (var e = 0; e < v.length; e++) {
                {
                  var t = v[e],
                    n = 1;
                  n / v.length;
                }
                TweenMax.to(t, 1, {
                  y: 0,
                  delay: 0.15 * e,
                  ease: Power4.easeOut,
                });
              }
            },
            transitionOut: function () {
              for (var e = this, t = 0; t < v.length; t++) {
                {
                  var n = v[t],
                    s = 1;
                  s / v.length;
                }
                TweenMax.to(n, 0.8, {
                  y: 70,
                  delay: 0.07 * (v.length - 1 - t),
                  ease: Power4.easeIn,
                });
              }
              return i.default.promise(function (t) {
                TweenMax.to(e.$el.querySelector(".inner"), 0.5, {
                  opacity: 0,
                  delay: 1.5,
                  onComplete: function () {
                    t();
                  },
                });
              });
            },
            _onLinkEnter: function (e) {
              var t = parseInt(f[e.currentTarget.id]);
              h[t].classList.add("active"),
                e.currentTarget.classList.add("active");
            },
            _onLinkLeave: function (e) {
              var t = parseInt(f[e.currentTarget.id]);
              h[t].classList.remove("active"),
                e.currentTarget.classList.remove("active");
            },
          },
        }),
          (t.exports = n.default);
      },
      {
        "./projects.html": 54,
        "mixins/router-mixin": 22,
        "stores/store": 56,
        "utils/dom-utils": 57,
        when: 99,
      },
    ],
    56: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var s = {
            maje: {
              id: "maje",
              next: "peugeot",
              info: {
                title: "MAJE",
                date: "2014",
                client: "BETC Digital",
                role: "Art Direction",
                role2: "UX Design",
                color: "#b1a995",
              },
            },
            peugeot: {
              id: "peugeot",
              next: "canalsat",
              info: {
                title: "PEUGEOT",
                date: "2014",
                client: "BETC Digital",
                role: "Art Direction",
                role2: "UX Design",
                color: "#75a1a4",
              },
            },
            canalsat: {
              id: "canalsat",
              next: "poiray",
              info: {
                title: "CANALSAT",
                date: "2014",
                client: "BETC Digital",
                role: "Art Direction",
                role2: "UX Design",
                color: "#756882",
              },
            },
            poiray: {
              id: "poiray",
              next: "tignes",
              info: {
                title: "POIRAY",
                date: "2015",
                client: "BETC Digital",
                role: "Art Direction",
                role2: "UX Design",
                color: "#95cfb4",
              },
            },
            tignes: {
              id: "tignes",
              next: "hermes",
              info: {
                title: "TIGNES",
                date: "2015",
                client: "Pixelis",
                role: "Art Direction",
                role2: "UX Design",
                color: "#c92138",
              },
            },
            hermes: {
              id: "hermes",
              next: "maje",
              info: {
                title: "HERMÈS",
                date: "2015",
                client: "AKQA",
                role: "Art Direction",
                role2: "UX Design",
                color: "#f26a38",
              },
            },
          },
          c = { width: window.innerWidth, height: window.innerHeight },
          i = {
            isIntroPassed: !1,
            isSectionTransitionning: !1,
            projectsData: s,
            currentProject: s.tignes,
            currentSectionId: "",
            currentSection: null,
            metrics: c,
            scrollValue: 0,
            scrollValueEased: 0,
            is: !1,
          };
        (n.default = i), (t.exports = n.default);
      },
      {},
    ],
    57: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = {
            splitIntoSpans: function (e) {
              for (
                var t = e.split(""), n = (100 / t.length, ""), s = 0;
                s < t.length;
                s++
              ) {
                var c = t[s];
                n +=
                  '<span class="letter"> <span class="inner">' +
                  c +
                  "</span> </span>";
              }
              return n;
            },
          }),
          (t.exports = n.default);
      },
      {},
    ],
    58: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = {
            map: function (e, t, n, s, c) {
              var i = (e - t) / (n - t),
                r = i * (c - s) + s;
              return r;
            },
            clamp: function (e) {
              var t =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? 0
                    : arguments[1],
                n =
                  arguments.length <= 2 || void 0 === arguments[2]
                    ? 1
                    : arguments[2];
              return Math.max(t, Math.min(n, e));
            },
            hex2rgb: function (e) {
              return (
                (e = "#" == e.substr(0, 1) ? e.substr(1) : e),
                [
                  parseInt(e.substr(0, 2), 16),
                  parseInt(e.substr(2, 2), 16),
                  parseInt(e.substr(4, 2), 16),
                ]
              );
            },
            toRadians: function (e) {
              return e * (Math.PI / 180);
            },
            toDegree: function (e) {
              return e * (180 / Math.PI);
            },
            pad: function (e, t) {
              var n = e.toString();
              return n.length < t ? this.pad2("0" + e, t) : n;
            },
          }),
          (t.exports = n.default);
      },
      {},
    ],
    59: [
      function (e, t) {
        "use strict";
        t.exports = e("./src/js/main");
      },
      { "./src/js/main": 65 },
    ],
    60: [
      function (e, t, n) {
        "use strict";
        function s(e, t) {
          var n = e.className.split(" ");
          n.indexOf(t) < 0 && n.push(t), (e.className = n.join(" "));
        }
        function c(e, t) {
          var n = e.className.split(" "),
            s = n.indexOf(t);
          s >= 0 && n.splice(s, 1), (e.className = n.join(" "));
        }
        (n.add = function (e, t) {
          e.classList ? e.classList.add(t) : s(e, t);
        }),
          (n.remove = function (e, t) {
            e.classList ? e.classList.remove(t) : c(e, t);
          }),
          (n.list = function (e) {
            return e.classList
              ? Array.prototype.slice.apply(e.classList)
              : e.className.split(" ");
          });
      },
      {},
    ],
    61: [
      function (e, t) {
        "use strict";
        function n(e, t) {
          return window.getComputedStyle(e)[t];
        }
        function s(e, t, n) {
          return (
            "number" == typeof n && (n = n.toString() + "px"),
            (e.style[t] = n),
            e
          );
        }
        function c(e, t) {
          for (var n in t) {
            var s = t[n];
            "number" == typeof s && (s = s.toString() + "px"), (e.style[n] = s);
          }
          return e;
        }
        var i = {};
        (i.e = function (e, t) {
          var n = document.createElement(e);
          return (n.className = t), n;
        }),
          (i.appendTo = function (e, t) {
            return t.appendChild(e), e;
          }),
          (i.css = function (e, t, i) {
            return "object" == typeof t
              ? c(e, t)
              : "undefined" == typeof i
              ? n(e, t)
              : s(e, t, i);
          }),
          (i.matches = function (e, t) {
            return "undefined" != typeof e.matches
              ? e.matches(t)
              : "undefined" != typeof e.matchesSelector
              ? e.matchesSelector(t)
              : "undefined" != typeof e.webkitMatchesSelector
              ? e.webkitMatchesSelector(t)
              : "undefined" != typeof e.mozMatchesSelector
              ? e.mozMatchesSelector(t)
              : "undefined" != typeof e.msMatchesSelector
              ? e.msMatchesSelector(t)
              : void 0;
          }),
          (i.remove = function (e) {
            "undefined" != typeof e.remove
              ? e.remove()
              : e.parentNode && e.parentNode.removeChild(e);
          }),
          (i.queryChildren = function (e, t) {
            return Array.prototype.filter.call(e.childNodes, function (e) {
              return i.matches(e, t);
            });
          }),
          (t.exports = i);
      },
      {},
    ],
    62: [
      function (e, t) {
        "use strict";
        var n = function (e) {
          (this.element = e), (this.events = {});
        };
        (n.prototype.bind = function (e, t) {
          "undefined" == typeof this.events[e] && (this.events[e] = []),
            this.events[e].push(t),
            this.element.addEventListener(e, t, !1);
        }),
          (n.prototype.unbind = function (e, t) {
            var n = "undefined" != typeof t;
            this.events[e] = this.events[e].filter(function (s) {
              return n && s !== t
                ? !0
                : (this.element.removeEventListener(e, s, !1), !1);
            }, this);
          }),
          (n.prototype.unbindAll = function () {
            for (var e in this.events) this.unbind(e);
          });
        var s = function () {
          this.eventElements = [];
        };
        (s.prototype.eventElement = function (e) {
          var t = this.eventElements.filter(function (t) {
            return t.element === e;
          })[0];
          return (
            "undefined" == typeof t &&
              ((t = new n(e)), this.eventElements.push(t)),
            t
          );
        }),
          (s.prototype.bind = function (e, t, n) {
            this.eventElement(e).bind(t, n);
          }),
          (s.prototype.unbind = function (e, t, n) {
            this.eventElement(e).unbind(t, n);
          }),
          (s.prototype.unbindAll = function () {
            for (var e = 0; e < this.eventElements.length; e++)
              this.eventElements[e].unbindAll();
          }),
          (s.prototype.once = function (e, t, n) {
            var s = this.eventElement(e),
              c = function (e) {
                s.unbind(t, c), n(e);
              };
            s.bind(t, c);
          }),
          (t.exports = s);
      },
      {},
    ],
    63: [
      function (e, t) {
        "use strict";
        t.exports = (function () {
          function e() {
            return Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .substring(1);
          }
          return function () {
            return (
              e() +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              "-" +
              e() +
              e() +
              e()
            );
          };
        })();
      },
      {},
    ],
    64: [
      function (e, t, n) {
        "use strict";
        var s = e("./class"),
          c = e("./dom"),
          i = (n.toInt = function (e) {
            return parseInt(e, 10) || 0;
          }),
          r = (n.clone = function (e) {
            if (null === e) return null;
            if (e.constructor === Array) return e.map(r);
            if ("object" == typeof e) {
              var t = {};
              for (var n in e) t[n] = r(e[n]);
              return t;
            }
            return e;
          });
        (n.extend = function (e, t) {
          var n = r(e);
          for (var s in t) n[s] = r(t[s]);
          return n;
        }),
          (n.isEditable = function (e) {
            return (
              c.matches(e, "input,[contenteditable]") ||
              c.matches(e, "select,[contenteditable]") ||
              c.matches(e, "textarea,[contenteditable]") ||
              c.matches(e, "button,[contenteditable]")
            );
          }),
          (n.removePsClasses = function (e) {
            for (var t = s.list(e), n = 0; n < t.length; n++) {
              var c = t[n];
              0 === c.indexOf("ps-") && s.remove(e, c);
            }
          }),
          (n.outerWidth = function (e) {
            return (
              i(c.css(e, "width")) +
              i(c.css(e, "paddingLeft")) +
              i(c.css(e, "paddingRight")) +
              i(c.css(e, "borderLeftWidth")) +
              i(c.css(e, "borderRightWidth"))
            );
          }),
          (n.startScrolling = function (e, t) {
            s.add(e, "ps-in-scrolling"),
              "undefined" != typeof t
                ? s.add(e, "ps-" + t)
                : (s.add(e, "ps-x"), s.add(e, "ps-y"));
          }),
          (n.stopScrolling = function (e, t) {
            s.remove(e, "ps-in-scrolling"),
              "undefined" != typeof t
                ? s.remove(e, "ps-" + t)
                : (s.remove(e, "ps-x"), s.remove(e, "ps-y"));
          }),
          (n.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch:
              "ontouchstart" in window ||
              (window.DocumentTouch &&
                document instanceof window.DocumentTouch),
            supportsIePointer: null !== window.navigator.msMaxTouchPoints,
          });
      },
      { "./class": 60, "./dom": 61 },
    ],
    65: [
      function (e, t) {
        "use strict";
        var n = e("./plugin/destroy"),
          s = e("./plugin/initialize"),
          c = e("./plugin/update");
        t.exports = { initialize: s, update: c, destroy: n };
      },
      {
        "./plugin/destroy": 67,
        "./plugin/initialize": 75,
        "./plugin/update": 79,
      },
    ],
    66: [
      function (e, t) {
        "use strict";
        t.exports = {
          handlers: [
            "click-rail",
            "drag-scrollbar",
            "keyboard",
            "wheel",
            "touch",
          ],
          maxScrollbarLength: null,
          minScrollbarLength: null,
          scrollXMarginOffset: 0,
          scrollYMarginOffset: 0,
          stopPropagationOnClick: !0,
          suppressScrollX: !1,
          suppressScrollY: !1,
          swipePropagation: !0,
          useBothWheelAxes: !1,
          wheelPropagation: !1,
          wheelSpeed: 1,
          theme: "default",
        };
      },
      {},
    ],
    67: [
      function (e, t) {
        "use strict";
        var n = e("../lib/helper"),
          s = e("../lib/dom"),
          c = e("./instances");
        t.exports = function (e) {
          var t = c.get(e);
          t &&
            (t.event.unbindAll(),
            s.remove(t.scrollbarX),
            s.remove(t.scrollbarY),
            s.remove(t.scrollbarXRail),
            s.remove(t.scrollbarYRail),
            n.removePsClasses(e),
            c.remove(e));
        };
      },
      { "../lib/dom": 61, "../lib/helper": 64, "./instances": 76 },
    ],
    68: [
      function (e, t) {
        "use strict";
        function n(e, t) {
          function n(e) {
            return e.getBoundingClientRect();
          }
          var c = function (e) {
            e.stopPropagation();
          };
          t.settings.stopPropagationOnClick &&
            t.event.bind(t.scrollbarY, "click", c),
            t.event.bind(t.scrollbarYRail, "click", function (c) {
              var a = s.toInt(t.scrollbarYHeight / 2),
                l =
                  t.railYRatio *
                  (c.pageY - window.pageYOffset - n(t.scrollbarYRail).top - a),
                o = t.railYRatio * (t.railYHeight - t.scrollbarYHeight),
                u = l / o;
              0 > u ? (u = 0) : u > 1 && (u = 1),
                r(e, "top", (t.contentHeight - t.containerHeight) * u),
                i(e),
                c.stopPropagation();
            }),
            t.settings.stopPropagationOnClick &&
              t.event.bind(t.scrollbarX, "click", c),
            t.event.bind(t.scrollbarXRail, "click", function (c) {
              var a = s.toInt(t.scrollbarXWidth / 2),
                l =
                  t.railXRatio *
                  (c.pageX - window.pageXOffset - n(t.scrollbarXRail).left - a),
                o = t.railXRatio * (t.railXWidth - t.scrollbarXWidth),
                u = l / o;
              0 > u ? (u = 0) : u > 1 && (u = 1),
                r(
                  e,
                  "left",
                  (t.contentWidth - t.containerWidth) * u -
                    t.negativeScrollAdjustment
                ),
                i(e),
                c.stopPropagation();
            });
        }
        var s = e("../../lib/helper"),
          c = e("../instances"),
          i = e("../update-geometry"),
          r = e("../update-scroll");
        t.exports = function (e) {
          var t = c.get(e);
          n(e, t);
        };
      },
      {
        "../../lib/helper": 64,
        "../instances": 76,
        "../update-geometry": 77,
        "../update-scroll": 78,
      },
    ],
    69: [
      function (e, t) {
        "use strict";
        function n(e, t) {
          function n(n) {
            var i = s + n * t.railXRatio,
              r =
                Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) +
                t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
            t.scrollbarXLeft = 0 > i ? 0 : i > r ? r : i;
            var a =
              c.toInt(
                (t.scrollbarXLeft * (t.contentWidth - t.containerWidth)) /
                  (t.containerWidth - t.railXRatio * t.scrollbarXWidth)
              ) - t.negativeScrollAdjustment;
            l(e, "left", a);
          }
          var s = null,
            r = null,
            o = function (t) {
              n(t.pageX - r), a(e), t.stopPropagation(), t.preventDefault();
            },
            u = function () {
              c.stopScrolling(e, "x"),
                t.event.unbind(t.ownerDocument, "mousemove", o);
            };
          t.event.bind(t.scrollbarX, "mousedown", function (n) {
            (r = n.pageX),
              (s = c.toInt(i.css(t.scrollbarX, "left")) * t.railXRatio),
              c.startScrolling(e, "x"),
              t.event.bind(t.ownerDocument, "mousemove", o),
              t.event.once(t.ownerDocument, "mouseup", u),
              n.stopPropagation(),
              n.preventDefault();
          });
        }
        function s(e, t) {
          function n(n) {
            var i = s + n * t.railYRatio,
              r =
                Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) +
                t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
            t.scrollbarYTop = 0 > i ? 0 : i > r ? r : i;
            var a = c.toInt(
              (t.scrollbarYTop * (t.contentHeight - t.containerHeight)) /
                (t.containerHeight - t.railYRatio * t.scrollbarYHeight)
            );
            l(e, "top", a);
          }
          var s = null,
            r = null,
            o = function (t) {
              n(t.pageY - r), a(e), t.stopPropagation(), t.preventDefault();
            },
            u = function () {
              c.stopScrolling(e, "y"),
                t.event.unbind(t.ownerDocument, "mousemove", o);
            };
          t.event.bind(t.scrollbarY, "mousedown", function (n) {
            (r = n.pageY),
              (s = c.toInt(i.css(t.scrollbarY, "top")) * t.railYRatio),
              c.startScrolling(e, "y"),
              t.event.bind(t.ownerDocument, "mousemove", o),
              t.event.once(t.ownerDocument, "mouseup", u),
              n.stopPropagation(),
              n.preventDefault();
          });
        }
        var c = e("../../lib/helper"),
          i = e("../../lib/dom"),
          r = e("../instances"),
          a = e("../update-geometry"),
          l = e("../update-scroll");
        t.exports = function (e) {
          var t = r.get(e);
          n(e, t), s(e, t);
        };
      },
      {
        "../../lib/dom": 61,
        "../../lib/helper": 64,
        "../instances": 76,
        "../update-geometry": 77,
        "../update-scroll": 78,
      },
    ],
    70: [
      function (e, t) {
        "use strict";
        function n(e, t) {
          function n(n, s) {
            var c = e.scrollTop;
            if (0 === n) {
              if (!t.scrollbarYActive) return !1;
              if (
                (0 === c && s > 0) ||
                (c >= t.contentHeight - t.containerHeight && 0 > s)
              )
                return !t.settings.wheelPropagation;
            }
            var i = e.scrollLeft;
            if (0 === s) {
              if (!t.scrollbarXActive) return !1;
              if (
                (0 === i && 0 > n) ||
                (i >= t.contentWidth - t.containerWidth && n > 0)
              )
                return !t.settings.wheelPropagation;
            }
            return !0;
          }
          var i = !1;
          t.event.bind(e, "mouseenter", function () {
            i = !0;
          }),
            t.event.bind(e, "mouseleave", function () {
              i = !1;
            });
          var l = !1;
          t.event.bind(t.ownerDocument, "keydown", function (o) {
            if (
              !(
                (o.isDefaultPrevented && o.isDefaultPrevented()) ||
                o.defaultPrevented
              )
            ) {
              var u =
                c.matches(t.scrollbarX, ":focus") ||
                c.matches(t.scrollbarY, ":focus");
              if (i || u) {
                var d = document.activeElement
                  ? document.activeElement
                  : t.ownerDocument.activeElement;
                if (d) {
                  if ("IFRAME" === d.tagName)
                    d = d.contentDocument.activeElement;
                  else for (; d.shadowRoot; ) d = d.shadowRoot.activeElement;
                  if (s.isEditable(d)) return;
                }
                var p = 0,
                  h = 0;
                switch (o.which) {
                  case 37:
                    p = -30;
                    break;
                  case 38:
                    h = 30;
                    break;
                  case 39:
                    p = 30;
                    break;
                  case 40:
                    h = -30;
                    break;
                  case 33:
                    h = 90;
                    break;
                  case 32:
                    h = o.shiftKey ? 90 : -90;
                    break;
                  case 34:
                    h = -90;
                    break;
                  case 35:
                    h = o.ctrlKey ? -t.contentHeight : -t.containerHeight;
                    break;
                  case 36:
                    h = o.ctrlKey ? e.scrollTop : t.containerHeight;
                    break;
                  default:
                    return;
                }
                a(e, "top", e.scrollTop - h),
                  a(e, "left", e.scrollLeft + p),
                  r(e),
                  (l = n(p, h)),
                  l && o.preventDefault();
              }
            }
          });
        }
        var s = e("../../lib/helper"),
          c = e("../../lib/dom"),
          i = e("../instances"),
          r = e("../update-geometry"),
          a = e("../update-scroll");
        t.exports = function (e) {
          var t = i.get(e);
          n(e, t);
        };
      },
      {
        "../../lib/dom": 61,
        "../../lib/helper": 64,
        "../instances": 76,
        "../update-geometry": 77,
        "../update-scroll": 78,
      },
    ],
    71: [
      function (e, t) {
        "use strict";
        function n(e, t) {
          function n(n, s) {
            var c = e.scrollTop;
            if (0 === n) {
              if (!t.scrollbarYActive) return !1;
              if (
                (0 === c && s > 0) ||
                (c >= t.contentHeight - t.containerHeight && 0 > s)
              )
                return !t.settings.wheelPropagation;
            }
            var i = e.scrollLeft;
            if (0 === s) {
              if (!t.scrollbarXActive) return !1;
              if (
                (0 === i && 0 > n) ||
                (i >= t.contentWidth - t.containerWidth && n > 0)
              )
                return !t.settings.wheelPropagation;
            }
            return !0;
          }
          function s(e) {
            var t = e.deltaX,
              n = -1 * e.deltaY;
            return (
              ("undefined" == typeof t || "undefined" == typeof n) &&
                ((t = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
              e.deltaMode && 1 === e.deltaMode && ((t *= 10), (n *= 10)),
              t !== t && n !== n && ((t = 0), (n = e.wheelDelta)),
              [t, n]
            );
          }
          function r(t, n) {
            var s = e.querySelector(
              "textarea:hover, select[multiple]:hover, .ps-child:hover"
            );
            if (s) {
              if (
                "TEXTAREA" !== s.tagName &&
                !window.getComputedStyle(s).overflow.match(/(scroll|auto)/)
              )
                return !1;
              var c = s.scrollHeight - s.clientHeight;
              if (
                c > 0 &&
                !((0 === s.scrollTop && n > 0) || (s.scrollTop === c && 0 > n))
              )
                return !0;
              var i = s.scrollLeft - s.clientWidth;
              if (
                i > 0 &&
                !(
                  (0 === s.scrollLeft && 0 > t) ||
                  (s.scrollLeft === i && t > 0)
                )
              )
                return !0;
            }
            return !1;
          }
          function a(a) {
            var o = s(a),
              u = o[0],
              d = o[1];
            r(u, d) ||
              ((l = !1),
              t.settings.useBothWheelAxes
                ? t.scrollbarYActive && !t.scrollbarXActive
                  ? (d
                      ? i(e, "top", e.scrollTop - d * t.settings.wheelSpeed)
                      : i(e, "top", e.scrollTop + u * t.settings.wheelSpeed),
                    (l = !0))
                  : t.scrollbarXActive &&
                    !t.scrollbarYActive &&
                    (u
                      ? i(e, "left", e.scrollLeft + u * t.settings.wheelSpeed)
                      : i(e, "left", e.scrollLeft - d * t.settings.wheelSpeed),
                    (l = !0))
                : (i(e, "top", e.scrollTop - d * t.settings.wheelSpeed),
                  i(e, "left", e.scrollLeft + u * t.settings.wheelSpeed)),
              c(e),
              (l = l || n(u, d)),
              l && (a.stopPropagation(), a.preventDefault()));
          }
          var l = !1;
          "undefined" != typeof window.onwheel
            ? t.event.bind(e, "wheel", a)
            : "undefined" != typeof window.onmousewheel &&
              t.event.bind(e, "mousewheel", a);
        }
        var s = e("../instances"),
          c = e("../update-geometry"),
          i = e("../update-scroll");
        t.exports = function (e) {
          var t = s.get(e);
          n(e, t);
        };
      },
      { "../instances": 76, "../update-geometry": 77, "../update-scroll": 78 },
    ],
    72: [
      function (e, t) {
        "use strict";
        function n(e, t) {
          t.event.bind(e, "scroll", function () {
            c(e);
          });
        }
        var s = e("../instances"),
          c = e("../update-geometry");
        t.exports = function (e) {
          var t = s.get(e);
          n(e, t);
        };
      },
      { "../instances": 76, "../update-geometry": 77 },
    ],
    73: [
      function (e, t) {
        "use strict";
        function n(e, t) {
          function n() {
            var e = window.getSelection
              ? window.getSelection()
              : document.getSelection
              ? document.getSelection()
              : "";
            return 0 === e.toString().length
              ? null
              : e.getRangeAt(0).commonAncestorContainer;
          }
          function a() {
            o ||
              (o = setInterval(function () {
                return c.get(e)
                  ? (r(e, "top", e.scrollTop + u.top),
                    r(e, "left", e.scrollLeft + u.left),
                    void i(e))
                  : void clearInterval(o);
              }, 50));
          }
          function l() {
            o && (clearInterval(o), (o = null)), s.stopScrolling(e);
          }
          var o = null,
            u = { top: 0, left: 0 },
            d = !1;
          t.event.bind(t.ownerDocument, "selectionchange", function () {
            e.contains(n()) ? (d = !0) : ((d = !1), l());
          }),
            t.event.bind(window, "mouseup", function () {
              d && ((d = !1), l());
            }),
            t.event.bind(window, "mousemove", function (t) {
              if (d) {
                var n = { x: t.pageX, y: t.pageY },
                  c = {
                    left: e.offsetLeft,
                    right: e.offsetLeft + e.offsetWidth,
                    top: e.offsetTop,
                    bottom: e.offsetTop + e.offsetHeight,
                  };
                n.x < c.left + 3
                  ? ((u.left = -5), s.startScrolling(e, "x"))
                  : n.x > c.right - 3
                  ? ((u.left = 5), s.startScrolling(e, "x"))
                  : (u.left = 0),
                  n.y < c.top + 3
                    ? ((u.top = c.top + 3 - n.y < 5 ? -5 : -20),
                      s.startScrolling(e, "y"))
                    : n.y > c.bottom - 3
                    ? ((u.top = n.y - c.bottom + 3 < 5 ? 5 : 20),
                      s.startScrolling(e, "y"))
                    : (u.top = 0),
                  0 === u.top && 0 === u.left ? l() : a();
              }
            });
        }
        var s = e("../../lib/helper"),
          c = e("../instances"),
          i = e("../update-geometry"),
          r = e("../update-scroll");
        t.exports = function (e) {
          var t = c.get(e);
          n(e, t);
        };
      },
      {
        "../../lib/helper": 64,
        "../instances": 76,
        "../update-geometry": 77,
        "../update-scroll": 78,
      },
    ],
    74: [
      function (e, t) {
        "use strict";
        function n(e, t, n, s) {
          function a(n, s) {
            var c = e.scrollTop,
              i = e.scrollLeft,
              r = Math.abs(n),
              a = Math.abs(s);
            if (a > r) {
              if (
                (0 > s && c === t.contentHeight - t.containerHeight) ||
                (s > 0 && 0 === c)
              )
                return !t.settings.swipePropagation;
            } else if (
              r > a &&
              ((0 > n && i === t.contentWidth - t.containerWidth) ||
                (n > 0 && 0 === i))
            )
              return !t.settings.swipePropagation;
            return !0;
          }
          function l(t, n) {
            r(e, "top", e.scrollTop - n), r(e, "left", e.scrollLeft - t), i(e);
          }
          function o() {
            b = !0;
          }
          function u() {
            b = !1;
          }
          function d(e) {
            return e.targetTouches ? e.targetTouches[0] : e;
          }
          function p(e) {
            return e.targetTouches && 1 === e.targetTouches.length
              ? !0
              : e.pointerType &&
                "mouse" !== e.pointerType &&
                e.pointerType !== e.MSPOINTER_TYPE_MOUSE
              ? !0
              : !1;
          }
          function h(e) {
            if (p(e)) {
              x = !0;
              var t = d(e);
              (g.pageX = t.pageX),
                (g.pageY = t.pageY),
                (m = new Date().getTime()),
                null !== y && clearInterval(y),
                e.stopPropagation();
            }
          }
          function v(e) {
            if ((!x && t.settings.swipePropagation && h(e), !b && x && p(e))) {
              var n = d(e),
                s = { pageX: n.pageX, pageY: n.pageY },
                c = s.pageX - g.pageX,
                i = s.pageY - g.pageY;
              l(c, i), (g = s);
              var r = new Date().getTime(),
                o = r - m;
              o > 0 && ((w.x = c / o), (w.y = i / o), (m = r)),
                a(c, i) && (e.stopPropagation(), e.preventDefault());
            }
          }
          function f() {
            !b &&
              x &&
              ((x = !1),
              clearInterval(y),
              (y = setInterval(function () {
                return c.get(e)
                  ? Math.abs(w.x) < 0.01 && Math.abs(w.y) < 0.01
                    ? void clearInterval(y)
                    : (l(30 * w.x, 30 * w.y), (w.x *= 0.8), void (w.y *= 0.8))
                  : void clearInterval(y);
              }, 10)));
          }
          var g = {},
            m = 0,
            w = {},
            y = null,
            b = !1,
            x = !1;
          n &&
            (t.event.bind(window, "touchstart", o),
            t.event.bind(window, "touchend", u),
            t.event.bind(e, "touchstart", h),
            t.event.bind(e, "touchmove", v),
            t.event.bind(e, "touchend", f)),
            s &&
              (window.PointerEvent
                ? (t.event.bind(window, "pointerdown", o),
                  t.event.bind(window, "pointerup", u),
                  t.event.bind(e, "pointerdown", h),
                  t.event.bind(e, "pointermove", v),
                  t.event.bind(e, "pointerup", f))
                : window.MSPointerEvent &&
                  (t.event.bind(window, "MSPointerDown", o),
                  t.event.bind(window, "MSPointerUp", u),
                  t.event.bind(e, "MSPointerDown", h),
                  t.event.bind(e, "MSPointerMove", v),
                  t.event.bind(e, "MSPointerUp", f)));
        }
        var s = e("../../lib/helper"),
          c = e("../instances"),
          i = e("../update-geometry"),
          r = e("../update-scroll");
        t.exports = function (e) {
          if (s.env.supportsTouch || s.env.supportsIePointer) {
            var t = c.get(e);
            n(e, t, s.env.supportsTouch, s.env.supportsIePointer);
          }
        };
      },
      {
        "../../lib/helper": 64,
        "../instances": 76,
        "../update-geometry": 77,
        "../update-scroll": 78,
      },
    ],
    75: [
      function (e, t) {
        "use strict";
        var n = e("../lib/helper"),
          s = e("../lib/class"),
          c = e("./instances"),
          i = e("./update-geometry"),
          r = {
            "click-rail": e("./handler/click-rail"),
            "drag-scrollbar": e("./handler/drag-scrollbar"),
            keyboard: e("./handler/keyboard"),
            wheel: e("./handler/mouse-wheel"),
            touch: e("./handler/touch"),
            selection: e("./handler/selection"),
          },
          a = e("./handler/native-scroll");
        t.exports = function (e, t) {
          (t = "object" == typeof t ? t : {}), s.add(e, "ps-container");
          var l = c.add(e);
          (l.settings = n.extend(l.settings, t)),
            s.add(e, "ps-theme-" + l.settings.theme),
            l.settings.handlers.forEach(function (t) {
              r[t](e);
            }),
            a(e),
            i(e);
        };
      },
      {
        "../lib/class": 60,
        "../lib/helper": 64,
        "./handler/click-rail": 68,
        "./handler/drag-scrollbar": 69,
        "./handler/keyboard": 70,
        "./handler/mouse-wheel": 71,
        "./handler/native-scroll": 72,
        "./handler/selection": 73,
        "./handler/touch": 74,
        "./instances": 76,
        "./update-geometry": 77,
      },
    ],
    76: [
      function (e, t, n) {
        "use strict";
        function s(e) {
          function t() {
            l.add(e, "ps-focus");
          }
          function n() {
            l.remove(e, "ps-focus");
          }
          var s = this;
          (s.settings = a.clone(o)),
            (s.containerWidth = null),
            (s.containerHeight = null),
            (s.contentWidth = null),
            (s.contentHeight = null),
            (s.isRtl = "rtl" === u.css(e, "direction")),
            (s.isNegativeScroll = (function () {
              var t = e.scrollLeft,
                n = null;
              return (
                (e.scrollLeft = -1),
                (n = e.scrollLeft < 0),
                (e.scrollLeft = t),
                n
              );
            })()),
            (s.negativeScrollAdjustment = s.isNegativeScroll
              ? e.scrollWidth - e.clientWidth
              : 0),
            (s.event = new d()),
            (s.ownerDocument = e.ownerDocument || document),
            (s.scrollbarXRail = u.appendTo(
              u.e("div", "ps-scrollbar-x-rail"),
              e
            )),
            (s.scrollbarX = u.appendTo(
              u.e("div", "ps-scrollbar-x"),
              s.scrollbarXRail
            )),
            s.scrollbarX.setAttribute("tabindex", 0),
            s.event.bind(s.scrollbarX, "focus", t),
            s.event.bind(s.scrollbarX, "blur", n),
            (s.scrollbarXActive = null),
            (s.scrollbarXWidth = null),
            (s.scrollbarXLeft = null),
            (s.scrollbarXBottom = a.toInt(u.css(s.scrollbarXRail, "bottom"))),
            (s.isScrollbarXUsingBottom =
              s.scrollbarXBottom === s.scrollbarXBottom),
            (s.scrollbarXTop = s.isScrollbarXUsingBottom
              ? null
              : a.toInt(u.css(s.scrollbarXRail, "top"))),
            (s.railBorderXWidth =
              a.toInt(u.css(s.scrollbarXRail, "borderLeftWidth")) +
              a.toInt(u.css(s.scrollbarXRail, "borderRightWidth"))),
            u.css(s.scrollbarXRail, "display", "block"),
            (s.railXMarginWidth =
              a.toInt(u.css(s.scrollbarXRail, "marginLeft")) +
              a.toInt(u.css(s.scrollbarXRail, "marginRight"))),
            u.css(s.scrollbarXRail, "display", ""),
            (s.railXWidth = null),
            (s.railXRatio = null),
            (s.scrollbarYRail = u.appendTo(
              u.e("div", "ps-scrollbar-y-rail"),
              e
            )),
            (s.scrollbarY = u.appendTo(
              u.e("div", "ps-scrollbar-y"),
              s.scrollbarYRail
            )),
            s.scrollbarY.setAttribute("tabindex", 0),
            s.event.bind(s.scrollbarY, "focus", t),
            s.event.bind(s.scrollbarY, "blur", n),
            (s.scrollbarYActive = null),
            (s.scrollbarYHeight = null),
            (s.scrollbarYTop = null),
            (s.scrollbarYRight = a.toInt(u.css(s.scrollbarYRail, "right"))),
            (s.isScrollbarYUsingRight =
              s.scrollbarYRight === s.scrollbarYRight),
            (s.scrollbarYLeft = s.isScrollbarYUsingRight
              ? null
              : a.toInt(u.css(s.scrollbarYRail, "left"))),
            (s.scrollbarYOuterWidth = s.isRtl
              ? a.outerWidth(s.scrollbarY)
              : null),
            (s.railBorderYWidth =
              a.toInt(u.css(s.scrollbarYRail, "borderTopWidth")) +
              a.toInt(u.css(s.scrollbarYRail, "borderBottomWidth"))),
            u.css(s.scrollbarYRail, "display", "block"),
            (s.railYMarginHeight =
              a.toInt(u.css(s.scrollbarYRail, "marginTop")) +
              a.toInt(u.css(s.scrollbarYRail, "marginBottom"))),
            u.css(s.scrollbarYRail, "display", ""),
            (s.railYHeight = null),
            (s.railYRatio = null);
        }
        function c(e) {
          return e.getAttribute("data-ps-id");
        }
        function i(e, t) {
          e.setAttribute("data-ps-id", t);
        }
        function r(e) {
          e.removeAttribute("data-ps-id");
        }
        var a = e("../lib/helper"),
          l = e("../lib/class"),
          o = e("./default-setting"),
          u = e("../lib/dom"),
          d = e("../lib/event-manager"),
          p = e("../lib/guid"),
          h = {};
        (n.add = function (e) {
          var t = p();
          return i(e, t), (h[t] = new s(e)), h[t];
        }),
          (n.remove = function (e) {
            delete h[c(e)], r(e);
          }),
          (n.get = function (e) {
            return h[c(e)];
          });
      },
      {
        "../lib/class": 60,
        "../lib/dom": 61,
        "../lib/event-manager": 62,
        "../lib/guid": 63,
        "../lib/helper": 64,
        "./default-setting": 66,
      },
    ],
    77: [
      function (e, t) {
        "use strict";
        function n(e, t) {
          return (
            e.settings.minScrollbarLength &&
              (t = Math.max(t, e.settings.minScrollbarLength)),
            e.settings.maxScrollbarLength &&
              (t = Math.min(t, e.settings.maxScrollbarLength)),
            t
          );
        }
        function s(e, t) {
          var n = { width: t.railXWidth };
          (n.left = t.isRtl
            ? t.negativeScrollAdjustment +
              e.scrollLeft +
              t.containerWidth -
              t.contentWidth
            : e.scrollLeft),
            t.isScrollbarXUsingBottom
              ? (n.bottom = t.scrollbarXBottom - e.scrollTop)
              : (n.top = t.scrollbarXTop + e.scrollTop),
            r.css(t.scrollbarXRail, n);
          var s = { top: e.scrollTop, height: t.railYHeight };
          t.isScrollbarYUsingRight
            ? (s.right = t.isRtl
                ? t.contentWidth -
                  (t.negativeScrollAdjustment + e.scrollLeft) -
                  t.scrollbarYRight -
                  t.scrollbarYOuterWidth
                : t.scrollbarYRight - e.scrollLeft)
            : (s.left = t.isRtl
                ? t.negativeScrollAdjustment +
                  e.scrollLeft +
                  2 * t.containerWidth -
                  t.contentWidth -
                  t.scrollbarYLeft -
                  t.scrollbarYOuterWidth
                : t.scrollbarYLeft + e.scrollLeft),
            r.css(t.scrollbarYRail, s),
            r.css(t.scrollbarX, {
              left: t.scrollbarXLeft,
              width: t.scrollbarXWidth - t.railBorderXWidth,
            }),
            r.css(t.scrollbarY, {
              top: t.scrollbarYTop,
              height: t.scrollbarYHeight - t.railBorderYWidth,
            });
        }
        var c = e("../lib/helper"),
          i = e("../lib/class"),
          r = e("../lib/dom"),
          a = e("./instances"),
          l = e("./update-scroll");
        t.exports = function (e) {
          var t = a.get(e);
          (t.containerWidth = e.clientWidth),
            (t.containerHeight = e.clientHeight),
            (t.contentWidth = e.scrollWidth),
            (t.contentHeight = e.scrollHeight);
          var o;
          e.contains(t.scrollbarXRail) ||
            ((o = r.queryChildren(e, ".ps-scrollbar-x-rail")),
            o.length > 0 &&
              o.forEach(function (e) {
                r.remove(e);
              }),
            r.appendTo(t.scrollbarXRail, e)),
            e.contains(t.scrollbarYRail) ||
              ((o = r.queryChildren(e, ".ps-scrollbar-y-rail")),
              o.length > 0 &&
                o.forEach(function (e) {
                  r.remove(e);
                }),
              r.appendTo(t.scrollbarYRail, e)),
            !t.settings.suppressScrollX &&
            t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
              ? ((t.scrollbarXActive = !0),
                (t.railXWidth = t.containerWidth - t.railXMarginWidth),
                (t.railXRatio = t.containerWidth / t.railXWidth),
                (t.scrollbarXWidth = n(
                  t,
                  c.toInt((t.railXWidth * t.containerWidth) / t.contentWidth)
                )),
                (t.scrollbarXLeft = c.toInt(
                  ((t.negativeScrollAdjustment + e.scrollLeft) *
                    (t.railXWidth - t.scrollbarXWidth)) /
                    (t.contentWidth - t.containerWidth)
                )))
              : (t.scrollbarXActive = !1),
            !t.settings.suppressScrollY &&
            t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
              ? ((t.scrollbarYActive = !0),
                (t.railYHeight = t.containerHeight - t.railYMarginHeight),
                (t.railYRatio = t.containerHeight / t.railYHeight),
                (t.scrollbarYHeight = n(
                  t,
                  c.toInt((t.railYHeight * t.containerHeight) / t.contentHeight)
                )),
                (t.scrollbarYTop = c.toInt(
                  (e.scrollTop * (t.railYHeight - t.scrollbarYHeight)) /
                    (t.contentHeight - t.containerHeight)
                )))
              : (t.scrollbarYActive = !1),
            t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth &&
              (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
            t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight &&
              (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
            s(e, t),
            t.scrollbarXActive
              ? i.add(e, "ps-active-x")
              : (i.remove(e, "ps-active-x"),
                (t.scrollbarXWidth = 0),
                (t.scrollbarXLeft = 0),
                l(e, "left", 0)),
            t.scrollbarYActive
              ? i.add(e, "ps-active-y")
              : (i.remove(e, "ps-active-y"),
                (t.scrollbarYHeight = 0),
                (t.scrollbarYTop = 0),
                l(e, "top", 0));
        };
      },
      {
        "../lib/class": 60,
        "../lib/dom": 61,
        "../lib/helper": 64,
        "./instances": 76,
        "./update-scroll": 78,
      },
    ],
    78: [
      function (e, t) {
        "use strict";
        var n,
          s,
          c = e("./instances"),
          i = document.createEvent("Event"),
          r = document.createEvent("Event"),
          a = document.createEvent("Event"),
          l = document.createEvent("Event"),
          o = document.createEvent("Event"),
          u = document.createEvent("Event"),
          d = document.createEvent("Event"),
          p = document.createEvent("Event"),
          h = document.createEvent("Event"),
          v = document.createEvent("Event");
        i.initEvent("ps-scroll-up", !0, !0),
          r.initEvent("ps-scroll-down", !0, !0),
          a.initEvent("ps-scroll-left", !0, !0),
          l.initEvent("ps-scroll-right", !0, !0),
          o.initEvent("ps-scroll-y", !0, !0),
          u.initEvent("ps-scroll-x", !0, !0),
          d.initEvent("ps-x-reach-start", !0, !0),
          p.initEvent("ps-x-reach-end", !0, !0),
          h.initEvent("ps-y-reach-start", !0, !0),
          v.initEvent("ps-y-reach-end", !0, !0),
          (t.exports = function (e, t, f) {
            if ("undefined" == typeof e)
              throw "You must provide an element to the update-scroll function";
            if ("undefined" == typeof t)
              throw "You must provide an axis to the update-scroll function";
            if ("undefined" == typeof f)
              throw "You must provide a value to the update-scroll function";
            "top" === t &&
              0 >= f &&
              ((e.scrollTop = f = 0), e.dispatchEvent(h)),
              "left" === t &&
                0 >= f &&
                ((e.scrollLeft = f = 0), e.dispatchEvent(d));
            var g = c.get(e);
            "top" === t &&
              f >= g.contentHeight - g.containerHeight &&
              ((f = g.contentHeight - g.containerHeight),
              f - e.scrollTop <= 1 ? (f = e.scrollTop) : (e.scrollTop = f),
              e.dispatchEvent(v)),
              "left" === t &&
                f >= g.contentWidth - g.containerWidth &&
                ((f = g.contentWidth - g.containerWidth),
                f - e.scrollLeft <= 1 ? (f = e.scrollLeft) : (e.scrollLeft = f),
                e.dispatchEvent(p)),
              n || (n = e.scrollTop),
              s || (s = e.scrollLeft),
              "top" === t && n > f && e.dispatchEvent(i),
              "top" === t && f > n && e.dispatchEvent(r),
              "left" === t && s > f && e.dispatchEvent(a),
              "left" === t && f > s && e.dispatchEvent(l),
              "top" === t && ((e.scrollTop = n = f), e.dispatchEvent(o)),
              "left" === t && ((e.scrollLeft = s = f), e.dispatchEvent(u));
          });
      },
      { "./instances": 76 },
    ],
    79: [
      function (e, t) {
        "use strict";
        var n = e("../lib/helper"),
          s = e("../lib/dom"),
          c = e("./instances"),
          i = e("./update-geometry"),
          r = e("./update-scroll");
        t.exports = function (e) {
          var t = c.get(e);
          t &&
            ((t.negativeScrollAdjustment = t.isNegativeScroll
              ? e.scrollWidth - e.clientWidth
              : 0),
            s.css(t.scrollbarXRail, "display", "block"),
            s.css(t.scrollbarYRail, "display", "block"),
            (t.railXMarginWidth =
              n.toInt(s.css(t.scrollbarXRail, "marginLeft")) +
              n.toInt(s.css(t.scrollbarXRail, "marginRight"))),
            (t.railYMarginHeight =
              n.toInt(s.css(t.scrollbarYRail, "marginTop")) +
              n.toInt(s.css(t.scrollbarYRail, "marginBottom"))),
            s.css(t.scrollbarXRail, "display", "none"),
            s.css(t.scrollbarYRail, "display", "none"),
            i(e),
            r(e, "top", e.scrollTop),
            r(e, "left", e.scrollLeft),
            s.css(t.scrollbarXRail, "display", ""),
            s.css(t.scrollbarYRail, "display", ""));
        };
      },
      {
        "../lib/dom": 61,
        "../lib/helper": 64,
        "./instances": 76,
        "./update-geometry": 77,
        "./update-scroll": 78,
      },
    ],
    80: [
      function (e, t) {
        function n() {
          (o = !1), r.length ? (l = r.concat(l)) : (u = -1), l.length && s();
        }
        function s() {
          if (!o) {
            var e = setTimeout(n);
            o = !0;
            for (var t = l.length; t; ) {
              for (r = l, l = []; ++u < t; ) r && r[u].run();
              (u = -1), (t = l.length);
            }
            (r = null), (o = !1), clearTimeout(e);
          }
        }
        function c(e, t) {
          (this.fun = e), (this.array = t);
        }
        function i() {}
        var r,
          a = (t.exports = {}),
          l = [],
          o = !1,
          u = -1;
        (a.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          l.push(new c(e, t)), 1 !== l.length || o || setTimeout(s, 0);
        }),
          (c.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (a.title = "browser"),
          (a.browser = !0),
          (a.env = {}),
          (a.argv = []),
          (a.version = ""),
          (a.versions = {}),
          (a.on = i),
          (a.addListener = i),
          (a.once = i),
          (a.off = i),
          (a.removeListener = i),
          (a.removeAllListeners = i),
          (a.emit = i),
          (a.binding = function () {
            throw new Error("process.binding is not supported");
          }),
          (a.cwd = function () {
            return "/";
          }),
          (a.chdir = function () {
            throw new Error("process.chdir is not supported");
          }),
          (a.umask = function () {
            return 0;
          });
      },
      {},
    ],
    81: [
      function (e, t, n) {
        !(function (e, s) {
          "object" == typeof n && "undefined" != typeof t
            ? (t.exports = s())
            : "function" == typeof define && define.amd
            ? define(s)
            : (e.VueRouter = s());
        })(this, function () {
          "use strict";
          function e(e, t, n) {
            (this.path = e), (this.matcher = t), (this.delegate = n);
          }
          function t(e) {
            (this.routes = {}), (this.children = {}), (this.target = e);
          }
          function n(t, s, c) {
            return function (i, r) {
              var a = t + i;
              return r ? void r(n(a, s, c)) : new e(t + i, s, c);
            };
          }
          function s(e, t, n) {
            for (var s = 0, c = 0, i = e.length; i > c; c++)
              s += e[c].path.length;
            t = t.substr(s);
            var r = { path: t, handler: n };
            e.push(r);
          }
          function c(e, t, n, i) {
            var r = t.routes;
            for (var a in r)
              if (r.hasOwnProperty(a)) {
                var l = e.slice();
                s(l, a, r[a]),
                  t.children[a] ? c(l, t.children[a], n, i) : n.call(i, l);
              }
          }
          function i(e, s) {
            var i = new t();
            e(n("", i, this.delegate)),
              c(
                [],
                i,
                function (e) {
                  s ? s(this, e) : this.add(e);
                },
                this
              );
          }
          function r(e) {
            W ||
              "undefined" == typeof console ||
              console.error("[vue-router] " + e);
          }
          function a(e, t) {
            try {
              return t ? decodeURIComponent(e) : decodeURI(e);
            } catch (n) {
              r("malformed URI" + (t ? " component: " : ": ") + e);
            }
          }
          function l(e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          }
          function o(e) {
            this.string = e;
          }
          function u(e) {
            this.name = e;
          }
          function d(e) {
            this.name = e;
          }
          function p() {}
          function h(e, t, n) {
            "/" === e.charAt(0) && (e = e.substr(1));
            var s = e.split("/"),
              c = [];
            n.val = "";
            for (var i = 0, r = s.length; r > i; i++) {
              var a,
                l = s[i];
              (a = l.match(/^:([^\/]+)$/))
                ? (c.push(new u(a[1])), t.push(a[1]), (n.val += "3"))
                : (a = l.match(/^\*([^\/]+)$/))
                ? (c.push(new d(a[1])), (n.val += "2"), t.push(a[1]))
                : "" === l
                ? (c.push(new p()), (n.val += "1"))
                : (c.push(new o(l)), (n.val += "4"));
            }
            return (n.val = +n.val), c;
          }
          function v(e) {
            (this.charSpec = e), (this.nextStates = []);
          }
          function f(e) {
            return e.sort(function (e, t) {
              return t.specificity.val - e.specificity.val;
            });
          }
          function g(e, t) {
            for (var n = [], s = 0, c = e.length; c > s; s++) {
              var i = e[s];
              n = n.concat(i.match(t));
            }
            return n;
          }
          function m(e) {
            this.queryParams = e || {};
          }
          function w(e, t, n) {
            for (
              var s = e.handlers,
                c = e.regex,
                i = t.match(c),
                r = 1,
                a = new m(n),
                l = 0,
                o = s.length;
              o > l;
              l++
            ) {
              for (
                var u = s[l], d = u.names, p = {}, h = 0, v = d.length;
                v > h;
                h++
              )
                p[d[h]] = i[r++];
              a.push({ handler: u.handler, params: p, isDynamic: !!d.length });
            }
            return a;
          }
          function y(e, t) {
            return (
              t.eachChar(function (t) {
                e = e.put(t);
              }),
              e
            );
          }
          function b(e) {
            return (e = e.replace(/\+/gm, "%20")), a(e, !0);
          }
          function x(e) {
            "undefined" != typeof console && console.error("[vue-router] " + e);
          }
          function M(e, t, n) {
            var s = e.match(/(\?.*)$/);
            if (
              (s && ((s = s[1]), (e = e.slice(0, -s.length))),
              "?" === t.charAt(0))
            )
              return e + t;
            var c = e.split("/");
            (n && c[c.length - 1]) || c.pop();
            for (
              var i = t.replace(/^\//, "").split("/"), r = 0;
              r < i.length;
              r++
            ) {
              var a = i[r];
              "." !== a && (".." === a ? c.pop() : c.push(a));
            }
            return "" !== c[0] && c.unshift(""), c.join("/");
          }
          function j(e) {
            return e && "function" == typeof e.then;
          }
          function C(e, t) {
            var n = e && (e.$options || e.options);
            return n && n.route && n.route[t];
          }
          function k(e, t) {
            J
              ? (J.$options.components._ = e.component)
              : (J = {
                  resolve: U.Vue.prototype._resolveComponent,
                  $options: { components: { _: e.component } },
                }),
              J.resolve("_", function (n) {
                (e.component = n), t(n);
              });
          }
          function _(e, t, n) {
            return (
              void 0 === t && (t = {}),
              (e = e.replace(/:([^\/]+)/g, function (n, s) {
                var c = t[s];
                return (
                  c ||
                    x(
                      'param "' +
                        s +
                        '" not found when generating path for "' +
                        e +
                        '" with params ' +
                        JSON.stringify(t)
                    ),
                  c || ""
                );
              })),
              n && (e += G(n)),
              e
            );
          }
          function L(e, t, n) {
            var s = e.childVM;
            if (!s || !t) return !1;
            if (e.Component !== t.component) return !1;
            var c = C(s, "canReuse");
            return "boolean" == typeof c
              ? c
              : c
              ? c.call(s, { to: n.to, from: n.from })
              : !0;
          }
          function z(e, t, n) {
            var s = e.childVM,
              c = C(s, "canDeactivate");
            c ? t.callHook(c, s, n, { expectBoolean: !0 }) : n();
          }
          function T(e, t, n) {
            k(e, function (e) {
              if (!t.aborted) {
                var s = C(e, "canActivate");
                s ? t.callHook(s, null, n, { expectBoolean: !0 }) : n();
              }
            });
          }
          function P(e, t, n) {
            var s = e.childVM,
              c = C(s, "deactivate");
            c ? t.callHooks(c, s, n) : n();
          }
          function S(e, t, n, s, c) {
            var i = t.activateQueue[n];
            if (!i)
              return A(e), e._bound && e.setComponent(null), void (s && s());
            var r = (e.Component = i.component),
              a = C(r, "activate"),
              l = C(r, "data"),
              o = C(r, "waitForData");
            (e.depth = n), (e.activated = !1);
            var u = void 0,
              d = !(!l || o);
            if ((c = c && e.childVM && e.childVM.constructor === r))
              (u = e.childVM), (u.$loadingRouteData = d);
            else if (
              (A(e),
              e.unbuild(!0),
              (u = e.build({
                _meta: { $loadingRouteData: d },
                created: function () {
                  this._routerView = e;
                },
              })),
              e.keepAlive)
            ) {
              u.$loadingRouteData = d;
              var p = u._keepAliveRouterView;
              p && ((e.childView = p), (u._keepAliveRouterView = null));
            }
            var h = function () {
                u.$destroy();
              },
              v = function () {
                if (c) return void (s && s());
                var n = t.router;
                n._rendered || n._transitionOnLoad
                  ? e.transition(u)
                  : (e.setCurrent ? e.setCurrent(u) : (e.childVM = u),
                    u.$before(e.anchor, null, !1)),
                  s && s();
              },
              f = function () {
                e.childView && S(e.childView, t, n + 1, null, c || e.keepAlive),
                  v();
              },
              g = function () {
                (e.activated = !0),
                  l && o ? R(u, t, l, f, h) : (l && R(u, t, l), f());
              };
            a ? t.callHooks(a, u, g, { cleanup: h, postActivate: !0 }) : g();
          }
          function E(e, t) {
            var n = e.childVM,
              s = C(n, "data");
            s && R(n, t, s);
          }
          function R(e, t, n, s, c) {
            (e.$loadingRouteData = !0),
              t.callHooks(
                n,
                e,
                function () {
                  (e.$loadingRouteData = !1),
                    e.$emit("route-data-loaded", e),
                    s && s();
                },
                {
                  cleanup: c,
                  postActivate: !0,
                  processData: function (t) {
                    var n = [];
                    return (
                      H(t) &&
                        Object.keys(t).forEach(function (s) {
                          var c = t[s];
                          j(c)
                            ? n.push(
                                c.then(function (t) {
                                  e.$set(s, t);
                                })
                              )
                            : e.$set(s, c);
                        }),
                      n.length ? n[0].constructor.all(n) : void 0
                    );
                  },
                }
              );
          }
          function A(e) {
            e.keepAlive &&
              e.childVM &&
              e.childView &&
              (e.childVM._keepAliveRouterView = e.childView),
              (e.childView = null);
          }
          function H(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
          }
          function V(e) {
            return "[object Object]" === Object.prototype.toString.call(e);
          }
          function I(e) {
            return e ? Array.prototype.slice.call(e) : [];
          }
          function O(e) {
            var t = e.util,
              n = t.extend,
              s = t.isArray,
              c = t.defineReactive,
              i = e.prototype._init;
            e.prototype._init = function (e) {
              e = e || {};
              var t = e._parent || e.parent || this,
                n = t.$router,
                s = t.$route;
              n &&
                ((this.$router = n),
                n._children.push(this),
                this._defineMeta
                  ? this._defineMeta("$route", s)
                  : c(this, "$route", s)),
                i.call(this, e);
            };
            var r = e.prototype._destroy;
            e.prototype._destroy = function () {
              !this._isBeingDestroyed &&
                this.$router &&
                this.$router._children.$remove(this),
                r.apply(this, arguments);
            };
            var a = e.config.optionMergeStrategies,
              l = /^(data|activate|deactivate)$/;
            a &&
              (a.route = function (e, t) {
                if (!t) return e;
                if (!e) return t;
                var c = {};
                n(c, e);
                for (var i in t) {
                  var r = c[i],
                    a = t[i];
                  c[i] = r && l.test(i) ? (s(r) ? r : [r]).concat(a) : a;
                }
                return c;
              });
          }
          function $(e) {
            var t = e.util,
              n = e.directive("_component") || e.internalDirectives.component,
              s = t.extend({}, n);
            t.extend(s, {
              _isRouterView: !0,
              bind: function () {
                var e = this.vm.$route;
                if (!e)
                  return void x(
                    "<router-view> can only be used inside a router-enabled app."
                  );
                (this._isDynamicLiteral = !0), n.bind.call(this);
                for (var t = void 0, s = this.vm; s; ) {
                  if (s._routerView) {
                    t = s._routerView;
                    break;
                  }
                  s = s.$parent;
                }
                if (t) (this.parentView = t), (t.childView = this);
                else {
                  var c = e.router;
                  c._rootView = this;
                }
                var i = e.router._currentTransition;
                if ((!t && i.done) || (t && t.activated)) {
                  var r = t ? t.depth + 1 : 0;
                  S(this, i, r);
                }
              },
              unbind: function () {
                this.parentView && (this.parentView.childView = null),
                  n.unbind.call(this);
              },
            }),
              e.elementDirective("router-view", s);
          }
          function F(e) {
            function t(e) {
              return (
                e.protocol === location.protocol &&
                e.hostname === location.hostname &&
                e.port === location.port
              );
            }
            function n(e, t, n) {
              if (((t = t.trim()), -1 === t.indexOf(" "))) return void n(e, t);
              for (var s = t.split(/\s+/), c = 0, i = s.length; i > c; c++)
                n(e, s[c]);
            }
            var s = e.util,
              c = s.bind,
              i = s.isObject,
              r = s.addClass,
              a = s.removeClass,
              l = e.directive("on").priority,
              o = "__vue-router-link-update__",
              u = 0;
            e.directive("link-active", {
              priority: 9999,
              bind: function () {
                for (
                  var e = this,
                    t = String(u++),
                    n = this.el.querySelectorAll("[v-link]"),
                    s = 0,
                    c = n.length;
                  c > s;
                  s++
                ) {
                  var i = n[s],
                    r = i.getAttribute(o),
                    a = r ? r + "," + t : t;
                  i.setAttribute(o, a);
                }
                this.vm.$on(
                  o,
                  (this.cb = function (n, s) {
                    n.activeIds.indexOf(t) > -1 && n.updateClasses(s, e.el);
                  })
                );
              },
              unbind: function () {
                this.vm.$off(o, this.cb);
              },
            }),
              e.directive("link", {
                priority: l - 2,
                bind: function () {
                  var e = this.vm;
                  if (!e.$route)
                    return void x(
                      "v-link can only be used inside a router-enabled app."
                    );
                  (this.router = e.$route.router),
                    (this.unwatch = e.$watch(
                      "$route",
                      c(this.onRouteUpdate, this)
                    ));
                  var t = this.el.getAttribute(o);
                  t &&
                    (this.el.removeAttribute(o),
                    (this.activeIds = t.split(","))),
                    ("A" !== this.el.tagName ||
                      "_blank" !== this.el.getAttribute("target")) &&
                      ((this.handler = c(this.onClick, this)),
                      this.el.addEventListener("click", this.handler));
                },
                update: function (e) {
                  (this.target = e),
                    i(e) &&
                      ((this.append = e.append),
                      (this.exact = e.exact),
                      (this.prevActiveClass = this.activeClass),
                      (this.activeClass = e.activeClass)),
                    this.onRouteUpdate(this.vm.$route);
                },
                onClick: function (e) {
                  if (
                    !(
                      e.metaKey ||
                      e.ctrlKey ||
                      e.shiftKey ||
                      e.defaultPrevented ||
                      0 !== e.button
                    )
                  ) {
                    var n = this.target;
                    if (n) e.preventDefault(), this.router.go(n);
                    else {
                      for (
                        var s = e.target;
                        "A" !== s.tagName && s !== this.el;

                      )
                        s = s.parentNode;
                      if ("A" === s.tagName && t(s)) {
                        e.preventDefault();
                        var c = s.pathname;
                        this.router.history.root &&
                          (c = c.replace(this.router.history.rootRE, "")),
                          this.router.go({
                            path: c,
                            replace: n && n.replace,
                            append: n && n.append,
                          });
                      }
                    }
                  }
                },
                onRouteUpdate: function (e) {
                  var t = this.router.stringifyPath(this.target);
                  this.path !== t &&
                    ((this.path = t),
                    this.updateActiveMatch(),
                    this.updateHref()),
                    this.activeIds
                      ? this.vm.$emit(o, this, e.path)
                      : this.updateClasses(e.path, this.el);
                },
                updateActiveMatch: function () {
                  this.activeRE =
                    this.path && !this.exact
                      ? new RegExp(
                          "^" +
                            this.path
                              .replace(/\/$/, "")
                              .replace(re, "")
                              .replace(ie, "\\$&") +
                            "(\\/|$)"
                        )
                      : null;
                },
                updateHref: function () {
                  if ("A" === this.el.tagName) {
                    var e = this.path,
                      t = this.router,
                      n = "/" === e.charAt(0),
                      s =
                        e && ("hash" === t.mode || n)
                          ? t.history.formatPath(e, this.append)
                          : e;
                    s ? (this.el.href = s) : this.el.removeAttribute("href");
                  }
                },
                updateClasses: function (e, t) {
                  var s = this.activeClass || this.router._linkActiveClass;
                  this.prevActiveClass &&
                    this.prevActiveClass !== s &&
                    n(t, this.prevActiveClass, a);
                  var c = this.path.replace(re, "");
                  (e = e.replace(re, "")),
                    this.exact
                      ? c === e ||
                        ("/" !== c.charAt(c.length - 1) &&
                          c === e.replace(ce, ""))
                        ? n(t, s, r)
                        : n(t, s, a)
                      : this.activeRE && this.activeRE.test(e)
                      ? n(t, s, r)
                      : n(t, s, a);
                },
                unbind: function () {
                  this.el.removeEventListener("click", this.handler),
                    this.unwatch && this.unwatch();
                },
              });
          }
          function Y(e, t) {
            var n = t.component;
            le.util.isPlainObject(n) && (n = t.component = le.extend(n)),
              "function" != typeof n &&
                ((t.component = null),
                x('invalid component for route "' + e + '".'));
          }
          var X = {};
          (X.classCallCheck = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }),
            (e.prototype = {
              to: function (e, t) {
                var n = this.delegate;
                if (
                  (n &&
                    n.willAddRoute &&
                    (e = n.willAddRoute(this.matcher.target, e)),
                  this.matcher.add(this.path, e),
                  t)
                ) {
                  if (0 === t.length)
                    throw new Error(
                      "You must have an argument in the function passed to `to`"
                    );
                  this.matcher.addChild(this.path, e, t, this.delegate);
                }
                return this;
              },
            }),
            (t.prototype = {
              add: function (e, t) {
                this.routes[e] = t;
              },
              addChild: function (e, s, c, i) {
                var r = new t(s);
                this.children[e] = r;
                var a = n(e, r, i);
                i && i.contextEntered && i.contextEntered(s, a), c(a);
              },
            });
          var B = [
              "/",
              ".",
              "*",
              "+",
              "?",
              "|",
              "(",
              ")",
              "[",
              "]",
              "{",
              "}",
              "\\",
            ],
            D = new RegExp("(\\" + B.join("|\\") + ")", "g"),
            W = !1;
          (o.prototype = {
            eachChar: function (e) {
              for (var t, n = this.string, s = 0, c = n.length; c > s; s++)
                (t = n.charAt(s)), e({ validChars: t });
            },
            regex: function () {
              return this.string.replace(D, "\\$1");
            },
            generate: function () {
              return this.string;
            },
          }),
            (u.prototype = {
              eachChar: function (e) {
                e({ invalidChars: "/", repeat: !0 });
              },
              regex: function () {
                return "([^/]+)";
              },
              generate: function (e) {
                var t = e[this.name];
                return null == t ? ":" + this.name : t;
              },
            }),
            (d.prototype = {
              eachChar: function (e) {
                e({ invalidChars: "", repeat: !0 });
              },
              regex: function () {
                return "(.+)";
              },
              generate: function (e) {
                var t = e[this.name];
                return null == t ? ":" + this.name : t;
              },
            }),
            (p.prototype = {
              eachChar: function () {},
              regex: function () {
                return "";
              },
              generate: function () {
                return "";
              },
            }),
            (v.prototype = {
              get: function (e) {
                for (var t = this.nextStates, n = 0, s = t.length; s > n; n++) {
                  var c = t[n],
                    i = c.charSpec.validChars === e.validChars;
                  if ((i = i && c.charSpec.invalidChars === e.invalidChars))
                    return c;
                }
              },
              put: function (e) {
                var t;
                return (t = this.get(e))
                  ? t
                  : ((t = new v(e)),
                    this.nextStates.push(t),
                    e.repeat && t.nextStates.push(t),
                    t);
              },
              match: function (e) {
                for (
                  var t, n, s, c = this.nextStates, i = [], r = 0, a = c.length;
                  a > r;
                  r++
                )
                  (t = c[r]),
                    (n = t.charSpec),
                    "undefined" != typeof (s = n.validChars)
                      ? -1 !== s.indexOf(e) && i.push(t)
                      : "undefined" != typeof (s = n.invalidChars) &&
                        -1 === s.indexOf(e) &&
                        i.push(t);
                return i;
              },
            });
          var q =
            Object.create ||
            function (e) {
              function t() {}
              return (t.prototype = e), new t();
            };
          m.prototype = q({
            splice: Array.prototype.splice,
            slice: Array.prototype.slice,
            push: Array.prototype.push,
            length: 0,
            queryParams: null,
          });
          var N = function () {
            (this.rootState = new v()), (this.names = {});
          };
          (N.prototype = {
            add: function (e, t) {
              for (
                var n,
                  s = this.rootState,
                  c = "^",
                  i = {},
                  r = [],
                  a = [],
                  l = !0,
                  o = 0,
                  u = e.length;
                u > o;
                o++
              ) {
                var d = e[o],
                  v = [],
                  f = h(d.path, v, i);
                a = a.concat(f);
                for (var g = 0, m = f.length; m > g; g++) {
                  var w = f[g];
                  w instanceof p ||
                    ((l = !1),
                    (s = s.put({ validChars: "/" })),
                    (c += "/"),
                    (s = y(s, w)),
                    (c += w.regex()));
                }
                var b = { handler: d.handler, names: v };
                r.push(b);
              }
              l && ((s = s.put({ validChars: "/" })), (c += "/")),
                (s.handlers = r),
                (s.regex = new RegExp(c + "$")),
                (s.specificity = i),
                (n = t && t.as) &&
                  (this.names[n] = { segments: a, handlers: r });
            },
            handlersFor: function (e) {
              var t = this.names[e],
                n = [];
              if (!t) throw new Error("There is no route named " + e);
              for (var s = 0, c = t.handlers.length; c > s; s++)
                n.push(t.handlers[s]);
              return n;
            },
            hasRoute: function (e) {
              return !!this.names[e];
            },
            generate: function (e, t) {
              var n = this.names[e],
                s = "";
              if (!n) throw new Error("There is no route named " + e);
              for (var c = n.segments, i = 0, r = c.length; r > i; i++) {
                var a = c[i];
                a instanceof p || ((s += "/"), (s += a.generate(t)));
              }
              return (
                "/" !== s.charAt(0) && (s = "/" + s),
                t &&
                  t.queryParams &&
                  (s += this.generateQueryString(t.queryParams)),
                s
              );
            },
            generateQueryString: function (e) {
              var t = [],
                n = [];
              for (var s in e) e.hasOwnProperty(s) && n.push(s);
              n.sort();
              for (var c = 0, i = n.length; i > c; c++) {
                s = n[c];
                var r = e[s];
                if (null != r) {
                  var a = encodeURIComponent(s);
                  if (l(r))
                    for (var o = 0, u = r.length; u > o; o++) {
                      var d = s + "[]=" + encodeURIComponent(r[o]);
                      t.push(d);
                    }
                  else (a += "=" + encodeURIComponent(r)), t.push(a);
                }
              }
              return 0 === t.length ? "" : "?" + t.join("&");
            },
            parseQueryString: function (e) {
              for (var t = e.split("&"), n = {}, s = 0; s < t.length; s++) {
                var c,
                  i = t[s].split("="),
                  r = b(i[0]),
                  a = r.length,
                  l = !1;
                1 === i.length
                  ? (c = "true")
                  : (a > 2 &&
                      "[]" === r.slice(a - 2) &&
                      ((l = !0), (r = r.slice(0, a - 2)), n[r] || (n[r] = [])),
                    (c = i[1] ? b(i[1]) : "")),
                  l ? n[r].push(c) : (n[r] = c);
              }
              return n;
            },
            recognize: function (e, t) {
              W = t;
              var n,
                s,
                c,
                i,
                r = [this.rootState],
                l = {},
                o = !1;
              if (((i = e.indexOf("?")), -1 !== i)) {
                var u = e.substr(i + 1, e.length);
                (e = e.substr(0, i)), u && (l = this.parseQueryString(u));
              }
              if ((e = a(e))) {
                for (
                  "/" !== e.charAt(0) && (e = "/" + e),
                    n = e.length,
                    n > 1 &&
                      "/" === e.charAt(n - 1) &&
                      ((e = e.substr(0, n - 1)), (o = !0)),
                    s = 0,
                    c = e.length;
                  c > s && ((r = g(r, e.charAt(s))), r.length);
                  s++
                );
                var d = [];
                for (s = 0, c = r.length; c > s; s++)
                  r[s].handlers && d.push(r[s]);
                r = f(d);
                var p = d[0];
                return p && p.handlers
                  ? (o && "(.+)$" === p.regex.source.slice(-5) && (e += "/"),
                    w(p, e, l))
                  : void 0;
              }
            },
          }),
            (N.prototype.map = i);
          var G = N.prototype.generateQueryString,
            U = {},
            J = void 0,
            Q = /#.*$/,
            K = (function () {
              function e(t) {
                var n = t.root,
                  s = t.onChange;
                X.classCallCheck(this, e),
                  n && "/" !== n
                    ? ("/" !== n.charAt(0) && (n = "/" + n),
                      (this.root = n.replace(/\/$/, "")),
                      (this.rootRE = new RegExp("^\\" + this.root)))
                    : (this.root = null),
                  (this.onChange = s);
                var c = document.querySelector("base");
                this.base = c && c.getAttribute("href");
              }
              return (
                (e.prototype.start = function () {
                  var e = this;
                  (this.listener = function (t) {
                    var n = location.pathname + location.search;
                    e.root && (n = n.replace(e.rootRE, "")),
                      e.onChange(n, t && t.state, location.hash);
                  }),
                    window.addEventListener("popstate", this.listener),
                    this.listener();
                }),
                (e.prototype.stop = function () {
                  window.removeEventListener("popstate", this.listener);
                }),
                (e.prototype.go = function (e, t, n) {
                  var s = this.formatPath(e, n);
                  t
                    ? history.replaceState({}, "", s)
                    : (history.replaceState(
                        {
                          pos: { x: window.pageXOffset, y: window.pageYOffset },
                        },
                        "",
                        location.href
                      ),
                      history.pushState({}, "", s));
                  var c = e.match(Q),
                    i = c && c[0];
                  (e = s.replace(Q, "").replace(this.rootRE, "")),
                    this.onChange(e, null, i);
                }),
                (e.prototype.formatPath = function (e, t) {
                  return "/" === e.charAt(0)
                    ? this.root
                      ? this.root + "/" + e.replace(/^\//, "")
                      : e
                    : M(this.base || location.pathname, e, t);
                }),
                e
              );
            })(),
            Z = (function () {
              function e(t) {
                var n = t.hashbang,
                  s = t.onChange;
                X.classCallCheck(this, e),
                  (this.hashbang = n),
                  (this.onChange = s);
              }
              return (
                (e.prototype.start = function () {
                  var e = this;
                  (this.listener = function () {
                    var t = location.hash,
                      n = t.replace(/^#!?/, "");
                    "/" !== n.charAt(0) && (n = "/" + n);
                    var s = e.formatPath(n);
                    if (s !== t) return void location.replace(s);
                    var c =
                      location.search && t.indexOf("?") > -1
                        ? "&" + location.search.slice(1)
                        : location.search;
                    e.onChange(t.replace(/^#!?/, "") + c);
                  }),
                    window.addEventListener("hashchange", this.listener),
                    this.listener();
                }),
                (e.prototype.stop = function () {
                  window.removeEventListener("hashchange", this.listener);
                }),
                (e.prototype.go = function (e, t, n) {
                  (e = this.formatPath(e, n)),
                    t ? location.replace(e) : (location.hash = e);
                }),
                (e.prototype.formatPath = function (e, t) {
                  var n = "/" === e.charAt(0),
                    s = "#" + (this.hashbang ? "!" : "");
                  return n
                    ? s + e
                    : s + M(location.hash.replace(/^#!?/, ""), e, t);
                }),
                e
              );
            })(),
            ee = (function () {
              function e(t) {
                var n = t.onChange;
                X.classCallCheck(this, e),
                  (this.onChange = n),
                  (this.currentPath = "/");
              }
              return (
                (e.prototype.start = function () {
                  this.onChange("/");
                }),
                (e.prototype.stop = function () {}),
                (e.prototype.go = function (e, t, n) {
                  (e = this.currentPath = this.formatPath(e, n)),
                    this.onChange(e);
                }),
                (e.prototype.formatPath = function (e, t) {
                  return "/" === e.charAt(0) ? e : M(this.currentPath, e, t);
                }),
                e
              );
            })(),
            te = (function () {
              function e(t, n, s) {
                X.classCallCheck(this, e),
                  (this.router = t),
                  (this.to = n),
                  (this.from = s),
                  (this.next = null),
                  (this.aborted = !1),
                  (this.done = !1);
              }
              return (
                (e.prototype.abort = function () {
                  if (!this.aborted) {
                    this.aborted = !0;
                    var e = !this.from.path && "/" === this.to.path;
                    e || this.router.replace(this.from.path || "/");
                  }
                }),
                (e.prototype.redirect = function (e) {
                  this.aborted ||
                    ((this.aborted = !0),
                    "string" == typeof e
                      ? (e = _(e, this.to.params, this.to.query))
                      : ((e.params = e.params || this.to.params),
                        (e.query = e.query || this.to.query)),
                    this.router.replace(e));
                }),
                (e.prototype.start = function (e) {
                  for (var t = this, n = [], s = this.router._rootView; s; )
                    n.unshift(s), (s = s.childView);
                  var c = n.slice().reverse(),
                    i = (this.activateQueue = I(this.to.matched).map(function (
                      e
                    ) {
                      return e.handler;
                    })),
                    r = void 0,
                    a = void 0;
                  for (r = 0; r < c.length && L(c[r], i[r], t); r++);
                  r > 0 &&
                    ((a = c.slice(0, r)),
                    (n = c.slice(r).reverse()),
                    (i = i.slice(r))),
                    t.runQueue(n, z, function () {
                      t.runQueue(i, T, function () {
                        t.runQueue(n, P, function () {
                          if (
                            (t.router._onTransitionValidated(t),
                            a &&
                              a.forEach(function (e) {
                                return E(e, t);
                              }),
                            n.length)
                          ) {
                            var s = n[n.length - 1],
                              c = a ? a.length : 0;
                            S(s, t, c, e);
                          } else e();
                        });
                      });
                    });
                }),
                (e.prototype.runQueue = function (e, t, n) {
                  function s(i) {
                    i >= e.length
                      ? n()
                      : t(e[i], c, function () {
                          s(i + 1);
                        });
                  }
                  var c = this;
                  s(0);
                }),
                (e.prototype.callHook = function (e, t, n) {
                  var s =
                      arguments.length <= 3 || void 0 === arguments[3]
                        ? {}
                        : arguments[3],
                    c = s.expectBoolean,
                    i = void 0 === c ? !1 : c,
                    r = s.postActivate,
                    a = void 0 === r ? !1 : r,
                    l = s.processData,
                    o = s.cleanup,
                    u = this,
                    d = !1,
                    p = function () {
                      o && o(), u.abort();
                    },
                    h = function (e) {
                      if ((a ? f() : p(), e && !u.router._suppress))
                        throw (
                          (x("Uncaught error during transition: "),
                          e instanceof Error ? e : new Error(e))
                        );
                    },
                    v = function (e) {
                      try {
                        h(e);
                      } catch (e) {
                        setTimeout(function () {
                          throw e;
                        }, 0);
                      }
                    },
                    f = function () {
                      return d
                        ? void x(
                            "transition.next() should be called only once."
                          )
                        : ((d = !0),
                          u.aborted ? void (o && o()) : void (n && n()));
                    },
                    g = function (t) {
                      "boolean" == typeof t
                        ? t
                          ? f()
                          : p()
                        : j(t)
                        ? t.then(function (e) {
                            e ? f() : p();
                          }, v)
                        : e.length || f();
                    },
                    m = function (e) {
                      var t = void 0;
                      try {
                        t = l(e);
                      } catch (e) {
                        return h(e);
                      }
                      j(t) ? t.then(f, v) : f();
                    },
                    w = {
                      to: u.to,
                      from: u.from,
                      abort: p,
                      next: l ? m : f,
                      redirect: function () {
                        u.redirect.apply(u, arguments);
                      },
                    },
                    y = void 0;
                  try {
                    y = e.call(t, w);
                  } catch (e) {
                    return h(e);
                  }
                  i
                    ? g(y)
                    : j(y)
                    ? l
                      ? y.then(m, v)
                      : y.then(f, v)
                    : l && V(y)
                    ? m(y)
                    : e.length || f();
                }),
                (e.prototype.callHooks = function (e, t, n, s) {
                  var c = this;
                  Array.isArray(e)
                    ? this.runQueue(
                        e,
                        function (e, n, i) {
                          c.aborted || c.callHook(e, t, i, s);
                        },
                        n
                      )
                    : this.callHook(e, t, n, s);
                }),
                e
              );
            })(),
            ne = /^(component|subRoutes|fullPath)$/,
            se = function e(t, n) {
              var s = this;
              X.classCallCheck(this, e);
              var c = n._recognizer.recognize(t);
              c &&
                ([].forEach.call(c, function (e) {
                  for (var t in e.handler) ne.test(t) || (s[t] = e.handler[t]);
                }),
                (this.query = c.queryParams),
                (this.params = [].reduce.call(
                  c,
                  function (e, t) {
                    if (t.params) for (var n in t.params) e[n] = t.params[n];
                    return e;
                  },
                  {}
                ))),
                (this.path = t),
                (this.matched = c || n._notFoundHandler),
                Object.defineProperty(this, "router", {
                  enumerable: !1,
                  value: n,
                }),
                Object.freeze(this);
            },
            ce = /\/$/,
            ie = /[-.*+?^${}()|[\]\/\\]/g,
            re = /\?.*$/,
            ae = { abstract: ee, hash: Z, html5: K },
            le = void 0,
            oe = (function () {
              function e() {
                var t = this,
                  n =
                    arguments.length <= 0 || void 0 === arguments[0]
                      ? {}
                      : arguments[0],
                  s = n.hashbang,
                  c = void 0 === s ? !0 : s,
                  i = n.abstract,
                  r = void 0 === i ? !1 : i,
                  a = n.history,
                  l = void 0 === a ? !1 : a,
                  o = n.saveScrollPosition,
                  u = void 0 === o ? !1 : o,
                  d = n.transitionOnLoad,
                  p = void 0 === d ? !1 : d,
                  h = n.suppressTransitionError,
                  v = void 0 === h ? !1 : h,
                  f = n.root,
                  g = void 0 === f ? null : f,
                  m = n.linkActiveClass,
                  w = void 0 === m ? "v-link-active" : m;
                if ((X.classCallCheck(this, e), !e.installed))
                  throw new Error(
                    "Please install the Router with Vue.use() before creating an instance."
                  );
                (this.app = null),
                  (this._children = []),
                  (this._recognizer = new N()),
                  (this._guardRecognizer = new N()),
                  (this._started = !1),
                  (this._startCb = null),
                  (this._currentRoute = {}),
                  (this._currentTransition = null),
                  (this._previousTransition = null),
                  (this._notFoundHandler = null),
                  (this._notFoundRedirect = null),
                  (this._beforeEachHooks = []),
                  (this._afterEachHooks = []),
                  (this._rendered = !1),
                  (this._transitionOnLoad = p),
                  (this._root = g),
                  (this._abstract = r),
                  (this._hashbang = c);
                var y =
                  "undefined" != typeof window &&
                  window.history &&
                  window.history.pushState;
                (this._history = l && y), (this._historyFallback = l && !y);
                var b = le.util.inBrowser;
                this.mode =
                  !b || this._abstract
                    ? "abstract"
                    : this._history
                    ? "html5"
                    : "hash";
                var x = ae[this.mode];
                (this.history = new x({
                  root: g,
                  hashbang: this._hashbang,
                  onChange: function (e, n, s) {
                    t._match(e, n, s);
                  },
                })),
                  (this._saveScrollPosition = u),
                  (this._linkActiveClass = w),
                  (this._suppress = v);
              }
              return (
                (e.prototype.map = function (e) {
                  for (var t in e) this.on(t, e[t]);
                  return this;
                }),
                (e.prototype.on = function (e, t) {
                  return (
                    "*" === e ? this._notFound(t) : this._addRoute(e, t, []),
                    this
                  );
                }),
                (e.prototype.redirect = function (e) {
                  for (var t in e) this._addRedirect(t, e[t]);
                  return this;
                }),
                (e.prototype.alias = function (e) {
                  for (var t in e) this._addAlias(t, e[t]);
                  return this;
                }),
                (e.prototype.beforeEach = function (e) {
                  return this._beforeEachHooks.push(e), this;
                }),
                (e.prototype.afterEach = function (e) {
                  return this._afterEachHooks.push(e), this;
                }),
                (e.prototype.go = function (e) {
                  var t = !1,
                    n = !1;
                  le.util.isObject(e) && ((t = e.replace), (n = e.append)),
                    (e = this.stringifyPath(e)),
                    e && this.history.go(e, t, n);
                }),
                (e.prototype.replace = function (e) {
                  "string" == typeof e && (e = { path: e }),
                    (e.replace = !0),
                    this.go(e);
                }),
                (e.prototype.start = function (e, t, n) {
                  if (this._started) return void x("already started.");
                  if (((this._started = !0), (this._startCb = n), !this.app)) {
                    if (!e || !t)
                      throw new Error(
                        "Must start vue-router with a component and a root container."
                      );
                    if (e instanceof le)
                      throw new Error(
                        "Must start vue-router with a component, not a Vue instance."
                      );
                    this._appContainer = t;
                    var s = (this._appConstructor =
                      "function" == typeof e ? e : le.extend(e));
                    s.options.name = s.options.name || "RouterApp";
                  }
                  if (this._historyFallback) {
                    var c = window.location,
                      i = new K({ root: this._root }),
                      r = i.root
                        ? c.pathname.replace(i.rootRE, "")
                        : c.pathname;
                    if (r && "/" !== r)
                      return void c.assign(
                        (i.root || "") +
                          "/" +
                          this.history.formatPath(r) +
                          c.search
                      );
                  }
                  this.history.start();
                }),
                (e.prototype.stop = function () {
                  this.history.stop(), (this._started = !1);
                }),
                (e.prototype.stringifyPath = function (e) {
                  var t = "";
                  if (e && "object" == typeof e) {
                    if (e.name) {
                      var n = le.util.extend,
                        s =
                          this._currentTransition &&
                          this._currentTransition.to.params,
                        c = e.params || {},
                        i = s ? n(n({}, s), c) : c;
                      t = encodeURI(this._recognizer.generate(e.name, i));
                    } else e.path && (t = encodeURI(e.path));
                    if (e.query) {
                      var r = this._recognizer.generateQueryString(e.query);
                      t += t.indexOf("?") > -1 ? "&" + r.slice(1) : r;
                    }
                  } else t = encodeURI(e ? e + "" : "");
                  return t;
                }),
                (e.prototype._addRoute = function (e, t, n) {
                  if (
                    (Y(e, t),
                    (t.path = e),
                    (t.fullPath = (
                      n.reduce(function (e, t) {
                        return e + t.path;
                      }, "") + e
                    ).replace("//", "/")),
                    n.push({ path: e, handler: t }),
                    this._recognizer.add(n, { as: t.name }),
                    t.subRoutes)
                  )
                    for (var s in t.subRoutes)
                      this._addRoute(s, t.subRoutes[s], n.slice());
                }),
                (e.prototype._notFound = function (e) {
                  Y("*", e), (this._notFoundHandler = [{ handler: e }]);
                }),
                (e.prototype._addRedirect = function (e, t) {
                  "*" === e
                    ? (this._notFoundRedirect = t)
                    : this._addGuard(e, t, this.replace);
                }),
                (e.prototype._addAlias = function (e, t) {
                  this._addGuard(e, t, this._match);
                }),
                (e.prototype._addGuard = function (e, t, n) {
                  var s = this;
                  this._guardRecognizer.add([
                    {
                      path: e,
                      handler: function (e, c) {
                        var i = _(t, e.params, c);
                        n.call(s, i);
                      },
                    },
                  ]);
                }),
                (e.prototype._checkGuard = function (e) {
                  var t = this._guardRecognizer.recognize(e, !0);
                  return t
                    ? (t[0].handler(t[0], t.queryParams), !0)
                    : this._notFoundRedirect &&
                      ((t = this._recognizer.recognize(e)), !t)
                    ? (this.replace(this._notFoundRedirect), !0)
                    : void 0;
                }),
                (e.prototype._match = function (e, t, n) {
                  var s = this;
                  if (!this._checkGuard(e)) {
                    var c = this._currentRoute,
                      i = this._currentTransition;
                    if (i) {
                      if (i.to.path === e) return;
                      if (c.path === e)
                        return (
                          (i.aborted = !0),
                          void (this._currentTransition = this._prevTransition)
                        );
                      i.aborted = !0;
                    }
                    var r = new se(e, this),
                      a = new te(this, r, c);
                    (this._prevTransition = i),
                      (this._currentTransition = a),
                      this.app ||
                        !(function () {
                          var e = s;
                          s.app = new s._appConstructor({
                            el: s._appContainer,
                            created: function () {
                              this.$router = e;
                            },
                            _meta: { $route: r },
                          });
                        })();
                    var l = this._beforeEachHooks,
                      o = function () {
                        a.start(function () {
                          s._postTransition(r, t, n);
                        });
                      };
                    l.length
                      ? a.runQueue(
                          l,
                          function (e, t, n) {
                            a === s._currentTransition &&
                              a.callHook(e, null, n, { expectBoolean: !0 });
                          },
                          o
                        )
                      : o(),
                      !this._rendered &&
                        this._startCb &&
                        this._startCb.call(null),
                      (this._rendered = !0);
                  }
                }),
                (e.prototype._onTransitionValidated = function (e) {
                  var t = (this._currentRoute = e.to);
                  this.app.$route !== t &&
                    ((this.app.$route = t),
                    this._children.forEach(function (e) {
                      e.$route = t;
                    })),
                    this._afterEachHooks.length &&
                      this._afterEachHooks.forEach(function (t) {
                        return t.call(null, { to: e.to, from: e.from });
                      }),
                    (this._currentTransition.done = !0);
                }),
                (e.prototype._postTransition = function (e, t, n) {
                  var s = t && t.pos;
                  s && this._saveScrollPosition
                    ? le.nextTick(function () {
                        window.scrollTo(s.x, s.y);
                      })
                    : n &&
                      le.nextTick(function () {
                        var e = document.getElementById(n.slice(1));
                        e && window.scrollTo(window.scrollX, e.offsetTop);
                      });
                }),
                e
              );
            })();
          return (
            (oe.installed = !1),
            (oe.install = function (e) {
              return oe.installed
                ? void x("already installed.")
                : ((le = e),
                  O(le),
                  $(le),
                  F(le),
                  (U.Vue = le),
                  void (oe.installed = !0));
            }),
            "undefined" != typeof window && window.Vue && window.Vue.use(oe),
            oe
          );
        });
      },
      {},
    ],
    82: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function (e) {
            var t = e("./makePromise"),
              n = e("./Scheduler"),
              s = e("./env").asap;
            return t({ scheduler: new n(s) });
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (n) {
                t.exports = n(e);
              }
        );
      },
      { "./Scheduler": 83, "./env": 95, "./makePromise": 97 },
    ],
    83: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function () {
            function e(e) {
              (this._async = e),
                (this._running = !1),
                (this._queue = this),
                (this._queueLen = 0),
                (this._afterQueue = {}),
                (this._afterQueueLen = 0);
              var t = this;
              this.drain = function () {
                t._drain();
              };
            }
            return (
              (e.prototype.enqueue = function (e) {
                (this._queue[this._queueLen++] = e), this.run();
              }),
              (e.prototype.afterQueue = function (e) {
                (this._afterQueue[this._afterQueueLen++] = e), this.run();
              }),
              (e.prototype.run = function () {
                this._running ||
                  ((this._running = !0), this._async(this.drain));
              }),
              (e.prototype._drain = function () {
                for (var e = 0; e < this._queueLen; ++e)
                  this._queue[e].run(), (this._queue[e] = void 0);
                for (
                  this._queueLen = 0, this._running = !1, e = 0;
                  e < this._afterQueueLen;
                  ++e
                )
                  this._afterQueue[e].run(), (this._afterQueue[e] = void 0);
                this._afterQueueLen = 0;
              }),
              e
            );
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (e) {
                t.exports = e();
              }
        );
      },
      {},
    ],
    84: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function () {
            function e(t) {
              Error.call(this),
                (this.message = t),
                (this.name = e.name),
                "function" == typeof Error.captureStackTrace &&
                  Error.captureStackTrace(this, e);
            }
            return (
              (e.prototype = Object.create(Error.prototype)),
              (e.prototype.constructor = e),
              e
            );
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (e) {
                t.exports = e();
              }
        );
      },
      {},
    ],
    85: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function () {
            function e(e, n) {
              function s(t, s, i) {
                var r = e._defer(),
                  a = i.length,
                  l = new Array(a);
                return (
                  c(
                    { f: t, thisArg: s, args: i, params: l, i: a - 1, call: n },
                    r._handler
                  ),
                  r
                );
              }
              function c(t, s) {
                if (t.i < 0) return n(t.f, t.thisArg, t.params, s);
                var c = e._handler(t.args[t.i]);
                c.fold(i, t, void 0, s);
              }
              function i(e, t, n) {
                (e.params[e.i] = t), (e.i -= 1), c(e, n);
              }
              return arguments.length < 2 && (n = t), s;
            }
            function t(e, t, n, s) {
              try {
                s.resolve(e.apply(t, n));
              } catch (e) {
                s.reject(e);
              }
            }
            return (e.tryCatchResolve = t), e;
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (e) {
                t.exports = e();
              }
        );
      },
      {},
    ],
    86: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function (e) {
            var t = e("../state"),
              n = e("../apply");
            return function (e) {
              function s(t) {
                function n(e) {
                  (u = null), this.resolve(e);
                }
                function s(e) {
                  this.resolved || (u.push(e), 0 === --o && this.reject(u));
                }
                for (
                  var c,
                    i,
                    r = e._defer(),
                    a = r._handler,
                    l = t.length >>> 0,
                    o = l,
                    u = [],
                    d = 0;
                  l > d;
                  ++d
                )
                  if (((i = t[d]), void 0 !== i || d in t)) {
                    if (((c = e._handler(i)), c.state() > 0)) {
                      a.become(c), e._visitRemaining(t, d, c);
                      break;
                    }
                    c.visit(a, n, s);
                  } else --o;
                return (
                  0 === o &&
                    a.reject(new RangeError("any(): array must not be empty")),
                  r
                );
              }
              function c(t, n) {
                function s(e) {
                  this.resolved ||
                    (u.push(e), 0 === --h && ((d = null), this.resolve(u)));
                }
                function c(e) {
                  this.resolved ||
                    (d.push(e), 0 === --i && ((u = null), this.reject(d)));
                }
                var i,
                  r,
                  a,
                  l = e._defer(),
                  o = l._handler,
                  u = [],
                  d = [],
                  p = t.length >>> 0,
                  h = 0;
                for (a = 0; p > a; ++a)
                  (r = t[a]), (void 0 !== r || a in t) && ++h;
                for (
                  n = Math.max(n, 0),
                    i = h - n + 1,
                    h = Math.min(n, h),
                    n > h
                      ? o.reject(
                          new RangeError(
                            "some(): array must contain at least " +
                              n +
                              " item(s), but had " +
                              h
                          )
                        )
                      : 0 === h && o.resolve(u),
                    a = 0;
                  p > a;
                  ++a
                )
                  (r = t[a]),
                    (void 0 !== r || a in t) &&
                      e._handler(r).visit(o, s, c, o.notify);
                return l;
              }
              function i(t, n) {
                return e._traverse(n, t);
              }
              function r(t, n) {
                var s = w.call(t);
                return e._traverse(n, s).then(function (e) {
                  return a(s, e);
                });
              }
              function a(t, n) {
                for (
                  var s = n.length, c = new Array(s), i = 0, r = 0;
                  s > i;
                  ++i
                )
                  n[i] && (c[r++] = e._handler(t[i]).value);
                return (c.length = r), c;
              }
              function l(e) {
                return f(e.map(o));
              }
              function o(n) {
                var s = e._handler(n);
                return 0 === s.state()
                  ? v(n).then(t.fulfilled, t.rejected)
                  : (s._unreport(), t.inspect(s));
              }
              function u(e, t) {
                return arguments.length > 2
                  ? g.call(e, p(t), arguments[2])
                  : g.call(e, p(t));
              }
              function d(e, t) {
                return arguments.length > 2
                  ? m.call(e, p(t), arguments[2])
                  : m.call(e, p(t));
              }
              function p(e) {
                return function (t, n, s) {
                  return h(e, void 0, [t, n, s]);
                };
              }
              var h = n(e),
                v = e.resolve,
                f = e.all,
                g = Array.prototype.reduce,
                m = Array.prototype.reduceRight,
                w = Array.prototype.slice;
              return (
                (e.any = s),
                (e.some = c),
                (e.settle = l),
                (e.map = i),
                (e.filter = r),
                (e.reduce = u),
                (e.reduceRight = d),
                (e.prototype.spread = function (e) {
                  return this.then(f).then(function (t) {
                    return e.apply(this, t);
                  });
                }),
                e
              );
            };
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (n) {
                t.exports = n(e);
              }
        );
      },
      { "../apply": 85, "../state": 98 },
    ],
    87: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function () {
            function e() {
              throw new TypeError("catch predicate must be a function");
            }
            function t(e, t) {
              return n(t) ? e instanceof t : t(e);
            }
            function n(e) {
              return e === Error || (null != e && e.prototype instanceof Error);
            }
            function s(e) {
              return (
                ("object" == typeof e || "function" == typeof e) && null !== e
              );
            }
            function c(e) {
              return e;
            }
            return function (n) {
              function i(e, n) {
                return function (s) {
                  return t(s, n) ? e.call(this, s) : o(s);
                };
              }
              function r(e, t, n, c) {
                var i = e.call(t);
                return s(i) ? a(i, n, c) : n(c);
              }
              function a(e, t, n) {
                return l(e).then(function () {
                  return t(n);
                });
              }
              var l = n.resolve,
                o = n.reject,
                u = n.prototype.catch;
              return (
                (n.prototype.done = function (e, t) {
                  this._handler.visit(this._handler.receiver, e, t);
                }),
                (n.prototype.catch = n.prototype.otherwise = function (t) {
                  return arguments.length < 2
                    ? u.call(this, t)
                    : "function" != typeof t
                    ? this.ensure(e)
                    : u.call(this, i(arguments[1], t));
                }),
                (n.prototype.finally = n.prototype.ensure = function (e) {
                  return "function" != typeof e
                    ? this
                    : this.then(
                        function (t) {
                          return r(e, this, c, t);
                        },
                        function (t) {
                          return r(e, this, o, t);
                        }
                      );
                }),
                (n.prototype.else = n.prototype.orElse = function (e) {
                  return this.then(void 0, function () {
                    return e;
                  });
                }),
                (n.prototype.yield = function (e) {
                  return this.then(function () {
                    return e;
                  });
                }),
                (n.prototype.tap = function (e) {
                  return this.then(e).yield(this);
                }),
                n
              );
            };
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (e) {
                t.exports = e();
              }
        );
      },
      {},
    ],
    88: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function () {
            return function (e) {
              return (
                (e.prototype.fold = function (t, n) {
                  var s = this._beget();
                  return (
                    this._handler.fold(
                      function (n, s, c) {
                        e._handler(n).fold(
                          function (e, n, s) {
                            s.resolve(t.call(this, n, e));
                          },
                          s,
                          this,
                          c
                        );
                      },
                      n,
                      s._handler.receiver,
                      s._handler
                    ),
                    s
                  );
                }),
                e
              );
            };
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (e) {
                t.exports = e();
              }
        );
      },
      {},
    ],
    89: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function (e) {
            var t = e("../state").inspect;
            return function (e) {
              return (
                (e.prototype.inspect = function () {
                  return t(e._handler(this));
                }),
                e
              );
            };
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (n) {
                t.exports = n(e);
              }
        );
      },
      { "../state": 98 },
    ],
    90: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function () {
            return function (e) {
              function t(e, t, s, c) {
                return n(
                  function (t) {
                    return [t, e(t)];
                  },
                  t,
                  s,
                  c
                );
              }
              function n(e, t, c, i) {
                function r(i, r) {
                  return s(c(i)).then(function () {
                    return n(e, t, c, r);
                  });
                }
                return s(i).then(function (n) {
                  return s(t(n)).then(function (t) {
                    return t ? n : s(e(n)).spread(r);
                  });
                });
              }
              var s = e.resolve;
              return (e.iterate = t), (e.unfold = n), e;
            };
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (e) {
                t.exports = e();
              }
        );
      },
      {},
    ],
    91: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function () {
            return function (e) {
              return (
                (e.prototype.progress = function (e) {
                  return this.then(void 0, void 0, e);
                }),
                e
              );
            };
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (e) {
                t.exports = e();
              }
        );
      },
      {},
    ],
    92: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function (e) {
            function t(e, t, s, c) {
              return n.setTimer(function () {
                e(s, c, t);
              }, t);
            }
            var n = e("../env"),
              s = e("../TimeoutError");
            return function (e) {
              function c(e, n, s) {
                t(i, e, n, s);
              }
              function i(e, t) {
                t.resolve(e);
              }
              function r(e, t, n) {
                var c =
                  "undefined" == typeof e
                    ? new s("timed out after " + n + "ms")
                    : e;
                t.reject(c);
              }
              return (
                (e.prototype.delay = function (e) {
                  var t = this._beget();
                  return this._handler.fold(c, e, void 0, t._handler), t;
                }),
                (e.prototype.timeout = function (e, s) {
                  var c = this._beget(),
                    i = c._handler,
                    a = t(r, e, s, c._handler);
                  return (
                    this._handler.visit(
                      i,
                      function (e) {
                        n.clearTimer(a), this.resolve(e);
                      },
                      function (e) {
                        n.clearTimer(a), this.reject(e);
                      },
                      i.notify
                    ),
                    c
                  );
                }),
                e
              );
            };
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (n) {
                t.exports = n(e);
              }
        );
      },
      { "../TimeoutError": 84, "../env": 95 },
    ],
    93: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function (e) {
            function t(e) {
              throw e;
            }
            function n() {}
            var s = e("../env").setTimer,
              c = e("../format");
            return function (e) {
              function i(e) {
                e.handled ||
                  (h.push(e),
                  u(
                    "Potentially unhandled rejection [" +
                      e.id +
                      "] " +
                      c.formatError(e.value)
                  ));
              }
              function r(e) {
                var t = h.indexOf(e);
                t >= 0 &&
                  (h.splice(t, 1),
                  d(
                    "Handled previous rejection [" +
                      e.id +
                      "] " +
                      c.formatObject(e.value)
                  ));
              }
              function a(e, t) {
                p.push(e, t), null === v && (v = s(l, 0));
              }
              function l() {
                for (v = null; p.length > 0; ) p.shift()(p.shift());
              }
              var o,
                u = n,
                d = n;
              "undefined" != typeof console &&
                ((o = console),
                (u =
                  "undefined" != typeof o.error
                    ? function (e) {
                        o.error(e);
                      }
                    : function (e) {
                        o.log(e);
                      }),
                (d =
                  "undefined" != typeof o.info
                    ? function (e) {
                        o.info(e);
                      }
                    : function (e) {
                        o.log(e);
                      })),
                (e.onPotentiallyUnhandledRejection = function (e) {
                  a(i, e);
                }),
                (e.onPotentiallyUnhandledRejectionHandled = function (e) {
                  a(r, e);
                }),
                (e.onFatalRejection = function (e) {
                  a(t, e.value);
                });
              var p = [],
                h = [],
                v = null;
              return e;
            };
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (n) {
                t.exports = n(e);
              }
        );
      },
      { "../env": 95, "../format": 96 },
    ],
    94: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function () {
            return function (e) {
              return (
                (e.prototype.with = e.prototype.withThis = function (e) {
                  var t = this._beget(),
                    n = t._handler;
                  return (n.receiver = e), this._handler.chain(n, e), t;
                }),
                e
              );
            };
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (e) {
                t.exports = e();
              }
        );
      },
      {},
    ],
    95: [
      function (e, t) {
        (function (n) {
          !(function (e) {
            "use strict";
            e(function (e) {
              function t() {
                return (
                  "undefined" != typeof n &&
                  "[object process]" === Object.prototype.toString.call(n)
                );
              }
              function s() {
                return (
                  ("function" == typeof MutationObserver && MutationObserver) ||
                  ("function" == typeof WebKitMutationObserver &&
                    WebKitMutationObserver)
                );
              }
              function c(e) {
                function t() {
                  var e = n;
                  (n = void 0), e();
                }
                var n,
                  s = document.createTextNode(""),
                  c = new e(t);
                c.observe(s, { characterData: !0 });
                var i = 0;
                return function (e) {
                  (n = e), (s.data = i ^= 1);
                };
              }
              var i,
                r = "undefined" != typeof setTimeout && setTimeout,
                a = function (e, t) {
                  return setTimeout(e, t);
                },
                l = function (e) {
                  return clearTimeout(e);
                },
                o = function (e) {
                  return r(e, 0);
                };
              if (t())
                o = function (e) {
                  return n.nextTick(e);
                };
              else if ((i = s())) o = c(i);
              else if (!r) {
                var u = e,
                  d = u("vertx");
                (a = function (e, t) {
                  return d.setTimer(t, e);
                }),
                  (l = d.cancelTimer),
                  (o = d.runOnLoop || d.runOnContext);
              }
              return { setTimer: a, clearTimer: l, asap: o };
            });
          })(
            "function" == typeof define && define.amd
              ? define
              : function (n) {
                  t.exports = n(e);
                }
          );
        }.call(this, e("_process")));
      },
      { _process: 80 },
    ],
    96: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function () {
            function e(e) {
              var n =
                "object" == typeof e && null !== e && (e.stack || e.message)
                  ? e.stack || e.message
                  : t(e);
              return e instanceof Error ? n : n + " (WARNING: non-Error used)";
            }
            function t(e) {
              var t = String(e);
              return (
                "[object Object]" === t &&
                  "undefined" != typeof JSON &&
                  (t = n(e, t)),
                t
              );
            }
            function n(e, t) {
              try {
                return JSON.stringify(e);
              } catch (e) {
                return t;
              }
            }
            return { formatError: e, formatObject: t, tryStringify: n };
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (e) {
                t.exports = e();
              }
        );
      },
      {},
    ],
    97: [
      function (e, t) {
        (function (e) {
          !(function (t) {
            "use strict";
            t(function () {
              return function (t) {
                function n(e, t) {
                  this._handler = e === b ? t : s(e);
                }
                function s(e) {
                  function t(e) {
                    c.resolve(e);
                  }
                  function n(e) {
                    c.reject(e);
                  }
                  function s(e) {
                    c.notify(e);
                  }
                  var c = new M();
                  try {
                    e(t, n, s);
                  } catch (e) {
                    n(e);
                  }
                  return c;
                }
                function c(e) {
                  return H(e) ? e : new n(b, new j(m(e)));
                }
                function i(e) {
                  return new n(b, new j(new _(e)));
                }
                function r() {
                  return ee;
                }
                function a() {
                  return new n(b, new M());
                }
                function l(e, t) {
                  var n = new M(e.receiver, e.join().context);
                  return new t(b, n);
                }
                function o(e) {
                  return d(W, null, e);
                }
                function u(e, t) {
                  return d(F, e, t);
                }
                function d(e, t, s) {
                  function c(n, c, r) {
                    r.resolved || p(s, i, n, e(t, c, n), r);
                  }
                  function i(e, t, n) {
                    (u[e] = t), 0 === --o && n.become(new k(u));
                  }
                  for (
                    var r,
                      a = "function" == typeof t ? c : i,
                      l = new M(),
                      o = s.length >>> 0,
                      u = new Array(o),
                      d = 0;
                    d < s.length && !l.resolved;
                    ++d
                  )
                    (r = s[d]), void 0 !== r || d in s ? p(s, a, d, r, l) : --o;
                  return 0 === o && l.become(new k(u)), new n(b, l);
                }
                function p(e, t, n, s, c) {
                  if (V(s)) {
                    var i = w(s),
                      r = i.state();
                    0 === r
                      ? i.fold(t, n, void 0, c)
                      : r > 0
                      ? t(n, i.value, c)
                      : (c.become(i), h(e, n + 1, i));
                  } else t(n, s, c);
                }
                function h(e, t, n) {
                  for (var s = t; s < e.length; ++s) v(m(e[s]), n);
                }
                function v(e, t) {
                  if (e !== t) {
                    var n = e.state();
                    0 === n
                      ? e.visit(e, void 0, e._unreport)
                      : 0 > n && e._unreport();
                  }
                }
                function f(e) {
                  return "object" != typeof e || null === e
                    ? i(new TypeError("non-iterable passed to race()"))
                    : 0 === e.length
                    ? r()
                    : 1 === e.length
                    ? c(e[0])
                    : g(e);
                }
                function g(e) {
                  var t,
                    s,
                    c,
                    i = new M();
                  for (t = 0; t < e.length; ++t)
                    if (((s = e[t]), void 0 !== s || t in e)) {
                      if (((c = m(s)), 0 !== c.state())) {
                        i.become(c), h(e, t + 1, c);
                        break;
                      }
                      c.visit(i, i.resolve, i.reject);
                    }
                  return new n(b, i);
                }
                function m(e) {
                  return H(e) ? e._handler.join() : V(e) ? y(e) : new k(e);
                }
                function w(e) {
                  return H(e) ? e._handler.join() : y(e);
                }
                function y(e) {
                  try {
                    var t = e.then;
                    return "function" == typeof t ? new C(t, e) : new k(e);
                  } catch (e) {
                    return new _(e);
                  }
                }
                function b() {}
                function x() {}
                function M(e, t) {
                  n.createContext(this, t),
                    (this.consumers = void 0),
                    (this.receiver = e),
                    (this.handler = void 0),
                    (this.resolved = !1);
                }
                function j(e) {
                  this.handler = e;
                }
                function C(e, t) {
                  M.call(this), G.enqueue(new E(e, t, this));
                }
                function k(e) {
                  n.createContext(this), (this.value = e);
                }
                function _(e) {
                  n.createContext(this),
                    (this.id = ++K),
                    (this.value = e),
                    (this.handled = !1),
                    (this.reported = !1),
                    this._report();
                }
                function L(e, t) {
                  (this.rejection = e), (this.context = t);
                }
                function z(e) {
                  this.rejection = e;
                }
                function T() {
                  return new _(new TypeError("Promise cycle"));
                }
                function P(e, t) {
                  (this.continuation = e), (this.handler = t);
                }
                function S(e, t) {
                  (this.handler = t), (this.value = e);
                }
                function E(e, t, n) {
                  (this._then = e), (this.thenable = t), (this.resolver = n);
                }
                function R(e, t, n, s, c) {
                  try {
                    e.call(t, n, s, c);
                  } catch (e) {
                    s(e);
                  }
                }
                function A(e, t, n, s) {
                  (this.f = e),
                    (this.z = t),
                    (this.c = n),
                    (this.to = s),
                    (this.resolver = Q),
                    (this.receiver = this);
                }
                function H(e) {
                  return e instanceof n;
                }
                function V(e) {
                  return (
                    ("object" == typeof e || "function" == typeof e) &&
                    null !== e
                  );
                }
                function I(e, t, s, c) {
                  return "function" != typeof e
                    ? c.become(t)
                    : (n.enterContext(t),
                      Y(e, t.value, s, c),
                      void n.exitContext());
                }
                function O(e, t, s, c, i) {
                  return "function" != typeof e
                    ? i.become(s)
                    : (n.enterContext(s),
                      X(e, t, s.value, c, i),
                      void n.exitContext());
                }
                function $(e, t, s, c, i) {
                  return "function" != typeof e
                    ? i.notify(t)
                    : (n.enterContext(s), B(e, t, c, i), void n.exitContext());
                }
                function F(e, t, n) {
                  try {
                    return e(t, n);
                  } catch (e) {
                    return i(e);
                  }
                }
                function Y(e, t, n, s) {
                  try {
                    s.become(m(e.call(n, t)));
                  } catch (e) {
                    s.become(new _(e));
                  }
                }
                function X(e, t, n, s, c) {
                  try {
                    e.call(s, t, n, c);
                  } catch (e) {
                    c.become(new _(e));
                  }
                }
                function B(e, t, n, s) {
                  try {
                    s.notify(e.call(n, t));
                  } catch (e) {
                    s.notify(e);
                  }
                }
                function D(e, t) {
                  (t.prototype = J(e.prototype)), (t.prototype.constructor = t);
                }
                function W(e, t) {
                  return t;
                }
                function q() {}
                function N() {
                  return "undefined" != typeof e &&
                    null !== e &&
                    "function" == typeof e.emit
                    ? function (t, n) {
                        return "unhandledRejection" === t
                          ? e.emit(t, n.value, n)
                          : e.emit(t, n);
                      }
                    : "undefined" != typeof self &&
                      "function" == typeof CustomEvent
                    ? (function (e, t, n) {
                        var s = !1;
                        try {
                          var c = new n("unhandledRejection");
                          s = c instanceof n;
                        } catch (e) {}
                        return s
                          ? function (e, s) {
                              var c = new n(e, {
                                detail: { reason: s.value, key: s },
                                bubbles: !1,
                                cancelable: !0,
                              });
                              return !t.dispatchEvent(c);
                            }
                          : e;
                      })(q, self, CustomEvent)
                    : q;
                }
                var G = t.scheduler,
                  U = N(),
                  J =
                    Object.create ||
                    function (e) {
                      function t() {}
                      return (t.prototype = e), new t();
                    };
                (n.resolve = c),
                  (n.reject = i),
                  (n.never = r),
                  (n._defer = a),
                  (n._handler = m),
                  (n.prototype.then = function (e, t, n) {
                    var s = this._handler,
                      c = s.join().state();
                    if (
                      ("function" != typeof e && c > 0) ||
                      ("function" != typeof t && 0 > c)
                    )
                      return new this.constructor(b, s);
                    var i = this._beget(),
                      r = i._handler;
                    return s.chain(r, s.receiver, e, t, n), i;
                  }),
                  (n.prototype.catch = function (e) {
                    return this.then(void 0, e);
                  }),
                  (n.prototype._beget = function () {
                    return l(this._handler, this.constructor);
                  }),
                  (n.all = o),
                  (n.race = f),
                  (n._traverse = u),
                  (n._visitRemaining = h),
                  (b.prototype.when = b.prototype.become = b.prototype.notify = b.prototype.fail = b.prototype._unreport = b.prototype._report = q),
                  (b.prototype._state = 0),
                  (b.prototype.state = function () {
                    return this._state;
                  }),
                  (b.prototype.join = function () {
                    for (var e = this; void 0 !== e.handler; ) e = e.handler;
                    return e;
                  }),
                  (b.prototype.chain = function (e, t, n, s, c) {
                    this.when({
                      resolver: e,
                      receiver: t,
                      fulfilled: n,
                      rejected: s,
                      progress: c,
                    });
                  }),
                  (b.prototype.visit = function (e, t, n, s) {
                    this.chain(Q, e, t, n, s);
                  }),
                  (b.prototype.fold = function (e, t, n, s) {
                    this.when(new A(e, t, n, s));
                  }),
                  D(b, x),
                  (x.prototype.become = function (e) {
                    e.fail();
                  });
                var Q = new x();
                D(b, M),
                  (M.prototype._state = 0),
                  (M.prototype.resolve = function (e) {
                    this.become(m(e));
                  }),
                  (M.prototype.reject = function (e) {
                    this.resolved || this.become(new _(e));
                  }),
                  (M.prototype.join = function () {
                    if (!this.resolved) return this;
                    for (var e = this; void 0 !== e.handler; )
                      if (((e = e.handler), e === this))
                        return (this.handler = T());
                    return e;
                  }),
                  (M.prototype.run = function () {
                    var e = this.consumers,
                      t = this.handler;
                    (this.handler = this.handler.join()),
                      (this.consumers = void 0);
                    for (var n = 0; n < e.length; ++n) t.when(e[n]);
                  }),
                  (M.prototype.become = function (e) {
                    this.resolved ||
                      ((this.resolved = !0),
                      (this.handler = e),
                      void 0 !== this.consumers && G.enqueue(this),
                      void 0 !== this.context && e._report(this.context));
                  }),
                  (M.prototype.when = function (e) {
                    this.resolved
                      ? G.enqueue(new P(e, this.handler))
                      : void 0 === this.consumers
                      ? (this.consumers = [e])
                      : this.consumers.push(e);
                  }),
                  (M.prototype.notify = function (e) {
                    this.resolved || G.enqueue(new S(e, this));
                  }),
                  (M.prototype.fail = function (e) {
                    var t = "undefined" == typeof e ? this.context : e;
                    this.resolved && this.handler.join().fail(t);
                  }),
                  (M.prototype._report = function (e) {
                    this.resolved && this.handler.join()._report(e);
                  }),
                  (M.prototype._unreport = function () {
                    this.resolved && this.handler.join()._unreport();
                  }),
                  D(b, j),
                  (j.prototype.when = function (e) {
                    G.enqueue(new P(e, this));
                  }),
                  (j.prototype._report = function (e) {
                    this.join()._report(e);
                  }),
                  (j.prototype._unreport = function () {
                    this.join()._unreport();
                  }),
                  D(M, C),
                  D(b, k),
                  (k.prototype._state = 1),
                  (k.prototype.fold = function (e, t, n, s) {
                    O(e, t, this, n, s);
                  }),
                  (k.prototype.when = function (e) {
                    I(e.fulfilled, this, e.receiver, e.resolver);
                  });
                var K = 0;
                D(b, _),
                  (_.prototype._state = -1),
                  (_.prototype.fold = function (e, t, n, s) {
                    s.become(this);
                  }),
                  (_.prototype.when = function (e) {
                    "function" == typeof e.rejected && this._unreport(),
                      I(e.rejected, this, e.receiver, e.resolver);
                  }),
                  (_.prototype._report = function (e) {
                    G.afterQueue(new L(this, e));
                  }),
                  (_.prototype._unreport = function () {
                    this.handled ||
                      ((this.handled = !0), G.afterQueue(new z(this)));
                  }),
                  (_.prototype.fail = function (e) {
                    (this.reported = !0),
                      U("unhandledRejection", this),
                      n.onFatalRejection(this, void 0 === e ? this.context : e);
                  }),
                  (L.prototype.run = function () {
                    this.rejection.handled ||
                      this.rejection.reported ||
                      ((this.rejection.reported = !0),
                      U("unhandledRejection", this.rejection) ||
                        n.onPotentiallyUnhandledRejection(
                          this.rejection,
                          this.context
                        ));
                  }),
                  (z.prototype.run = function () {
                    this.rejection.reported &&
                      (U("rejectionHandled", this.rejection) ||
                        n.onPotentiallyUnhandledRejectionHandled(
                          this.rejection
                        ));
                  }),
                  (n.createContext = n.enterContext = n.exitContext = n.onPotentiallyUnhandledRejection = n.onPotentiallyUnhandledRejectionHandled = n.onFatalRejection = q);
                var Z = new b(),
                  ee = new n(b, Z);
                return (
                  (P.prototype.run = function () {
                    this.handler.join().when(this.continuation);
                  }),
                  (S.prototype.run = function () {
                    var e = this.handler.consumers;
                    if (void 0 !== e)
                      for (var t, n = 0; n < e.length; ++n)
                        (t = e[n]),
                          $(
                            t.progress,
                            this.value,
                            this.handler,
                            t.receiver,
                            t.resolver
                          );
                  }),
                  (E.prototype.run = function () {
                    function e(e) {
                      s.resolve(e);
                    }
                    function t(e) {
                      s.reject(e);
                    }
                    function n(e) {
                      s.notify(e);
                    }
                    var s = this.resolver;
                    R(this._then, this.thenable, e, t, n);
                  }),
                  (A.prototype.fulfilled = function (e) {
                    this.f.call(this.c, this.z, e, this.to);
                  }),
                  (A.prototype.rejected = function (e) {
                    this.to.reject(e);
                  }),
                  (A.prototype.progress = function (e) {
                    this.to.notify(e);
                  }),
                  n
                );
              };
            });
          })(
            "function" == typeof define && define.amd
              ? define
              : function (e) {
                  t.exports = e();
                }
          );
        }.call(this, e("_process")));
      },
      { _process: 80 },
    ],
    98: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function () {
            function e() {
              return { state: "pending" };
            }
            function t(e) {
              return { state: "rejected", reason: e };
            }
            function n(e) {
              return { state: "fulfilled", value: e };
            }
            function s(s) {
              var c = s.state();
              return 0 === c ? e() : c > 0 ? n(s.value) : t(s.value);
            }
            return { pending: e, fulfilled: n, rejected: t, inspect: s };
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (e) {
                t.exports = e();
              }
        );
      },
      {},
    ],
    99: [
      function (e, t) {
        !(function (e) {
          "use strict";
          e(function (e) {
            function t(e, t, n, s) {
              var c = j.resolve(e);
              return arguments.length < 2 ? c : c.then(t, n, s);
            }
            function n(e) {
              return new j(e);
            }
            function s(e) {
              return function () {
                for (
                  var t = 0, n = arguments.length, s = new Array(n);
                  n > t;
                  ++t
                )
                  s[t] = arguments[t];
                return C(e, this, s);
              };
            }
            function c(e) {
              for (
                var t = 0, n = arguments.length - 1, s = new Array(n);
                n > t;
                ++t
              )
                s[t] = arguments[t + 1];
              return C(e, this, s);
            }
            function i() {
              return new r();
            }
            function r() {
              function e(e) {
                s._handler.resolve(e);
              }
              function t(e) {
                s._handler.reject(e);
              }
              function n(e) {
                s._handler.notify(e);
              }
              var s = j._defer();
              (this.promise = s),
                (this.resolve = e),
                (this.reject = t),
                (this.notify = n),
                (this.resolver = { resolve: e, reject: t, notify: n });
            }
            function a(e) {
              return e && "function" == typeof e.then;
            }
            function l() {
              return j.all(arguments);
            }
            function o(e) {
              return t(e, j.all);
            }
            function u(e) {
              return t(e, j.settle);
            }
            function d(e, n) {
              return t(e, function (e) {
                return j.map(e, n);
              });
            }
            function p(e, n) {
              return t(e, function (e) {
                return j.filter(e, n);
              });
            }
            var h = e("./lib/decorators/timed"),
              v = e("./lib/decorators/array"),
              f = e("./lib/decorators/flow"),
              g = e("./lib/decorators/fold"),
              m = e("./lib/decorators/inspect"),
              w = e("./lib/decorators/iterate"),
              y = e("./lib/decorators/progress"),
              b = e("./lib/decorators/with"),
              x = e("./lib/decorators/unhandledRejection"),
              M = e("./lib/TimeoutError"),
              j = [v, f, g, w, y, m, b, h, x].reduce(function (e, t) {
                return t(e);
              }, e("./lib/Promise")),
              C = e("./lib/apply")(j);
            return (
              (t.promise = n),
              (t.resolve = j.resolve),
              (t.reject = j.reject),
              (t.lift = s),
              (t.try = c),
              (t.attempt = c),
              (t.iterate = j.iterate),
              (t.unfold = j.unfold),
              (t.join = l),
              (t.all = o),
              (t.settle = u),
              (t.any = s(j.any)),
              (t.some = s(j.some)),
              (t.race = s(j.race)),
              (t.map = d),
              (t.filter = p),
              (t.reduce = s(j.reduce)),
              (t.reduceRight = s(j.reduceRight)),
              (t.isPromiseLike = a),
              (t.Promise = j),
              (t.defer = i),
              (t.TimeoutError = M),
              t
            );
          });
        })(
          "function" == typeof define && define.amd
            ? define
            : function (n) {
                t.exports = n(e);
              }
        );
      },
      {
        "./lib/Promise": 82,
        "./lib/TimeoutError": 84,
        "./lib/apply": 85,
        "./lib/decorators/array": 86,
        "./lib/decorators/flow": 87,
        "./lib/decorators/fold": 88,
        "./lib/decorators/inspect": 89,
        "./lib/decorators/iterate": 90,
        "./lib/decorators/progress": 91,
        "./lib/decorators/timed": 92,
        "./lib/decorators/unhandledRejection": 93,
        "./lib/decorators/with": 94,
      },
    ],
  },
  {},
  [19]
);
