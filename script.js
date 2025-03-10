!(function (t) {
    var e = {};
    function i(s) {
        if (e[s]) return e[s].exports;
        var r = (e[s] = { i: s, l: !1, exports: {} });
        return t[s].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    (i.m = t),
        (i.c = e),
        (i.d = function (t, e, s) {
            i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
        }),
        (i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (i.t = function (t, e) {
            if ((1 & e && (t = i(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var s = Object.create(null);
            if ((i.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var r in t)
                    i.d(
                        s,
                        r,
                        function (e) {
                            return t[e];
                        }.bind(null, r)
                    );
            return s;
        }),
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return i.d(e, "a", e), e;
        }),
        (i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = ""),
        i((i.s = 2));
})([
    function (t, e, i) {
        t.exports = i(3);
    },
    ,
    function (t, e, i) {
        i(8), (t.exports = i(7));
    },
    function (t, e, i) {
        "use strict";
        var s = i(4),
            r = i(5);
        function n(t) {
            var e = 0,
                i = 0,
                s = 0,
                r = 0;
            return (
                "detail" in t && (i = t.detail),
                "wheelDelta" in t && (i = -t.wheelDelta / 120),
                "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120),
                "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
                "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((e = i), (i = 0)),
                (s = 10 * e),
                (r = 10 * i),
                "deltaY" in t && (r = t.deltaY),
                "deltaX" in t && (s = t.deltaX),
                (s || r) && t.deltaMode && (1 == t.deltaMode ? ((s *= 40), (r *= 40)) : ((s *= 800), (r *= 800))),
                s && !e && (e = s < 1 ? -1 : 1),
                r && !i && (i = r < 1 ? -1 : 1),
                { spinX: e, spinY: i, pixelX: s, pixelY: r }
            );
        }
        (n.getEventType = function () {
            return s.firefox() ? "DOMMouseScroll" : r("wheel") ? "wheel" : "mousewheel";
        }),
            (t.exports = n);
    },
    function (t, e) {
        var i,
            s,
            r,
            n,
            h,
            a,
            o,
            l,
            u,
            c,
            d,
            g,
            p,
            m,
            f,
            w = !1;
        function v() {
            if (!w) {
                w = !0;
                var t = navigator.userAgent,
                    e = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),
                    v = /(Mac OS X)|(Windows)|(Linux)/.exec(t);
                if (((g = /\b(iPhone|iP[ao]d)/.exec(t)), (p = /\b(iP[ao]d)/.exec(t)), (c = /Android/i.exec(t)), (m = /FBAN\/\w+;/i.exec(t)), (f = /Mobile/i.exec(t)), (d = !!/Win64/.exec(t)), e)) {
                    (i = e[1] ? parseFloat(e[1]) : e[5] ? parseFloat(e[5]) : NaN) && document && document.documentMode && (i = document.documentMode);
                    var x = /(?:Trident\/(\d+.\d+))/.exec(t);
                    (a = x ? parseFloat(x[1]) + 4 : i),
                        (s = e[2] ? parseFloat(e[2]) : NaN),
                        (r = e[3] ? parseFloat(e[3]) : NaN),
                        (n = e[4] ? parseFloat(e[4]) : NaN) ? ((e = /(?:Chrome\/(\d+\.\d+))/.exec(t)), (h = e && e[1] ? parseFloat(e[1]) : NaN)) : (h = NaN);
                } else i = s = r = h = n = NaN;
                if (v) {
                    if (v[1]) {
                        var b = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);
                        o = !b || parseFloat(b[1].replace("_", "."));
                    } else o = !1;
                    (l = !!v[2]), (u = !!v[3]);
                } else o = l = u = !1;
            }
        }
        var x = {
            ie: function () {
                return v() || i;
            },
            ieCompatibilityMode: function () {
                return v() || a > i;
            },
            ie64: function () {
                return x.ie() && d;
            },
            firefox: function () {
                return v() || s;
            },
            opera: function () {
                return v() || r;
            },
            webkit: function () {
                return v() || n;
            },
            safari: function () {
                return x.webkit();
            },
            chrome: function () {
                return v() || h;
            },
            windows: function () {
                return v() || l;
            },
            osx: function () {
                return v() || o;
            },
            linux: function () {
                return v() || u;
            },
            iphone: function () {
                return v() || g;
            },
            mobile: function () {
                return v() || g || p || c || f;
            },
            nativeApp: function () {
                return v() || m;
            },
            android: function () {
                return v() || c;
            },
            ipad: function () {
                return v() || p;
            },
        };
        t.exports = x;
    },
    function (t, e, i) {
        "use strict";
        var s,
            r = i(6);
        r.canUseDOM && (s = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")),
            /**
             * Checks if an event is supported in the current execution environment.
             *
             * NOTE: This will not work correctly for non-generic events such as `change`,
             * `reset`, `load`, `error`, and `select`.
             *
             * Borrows from Modernizr.
             *
             * @param {string} eventNameSuffix Event name, e.g. "click".
             * @param {?boolean} capture Check if the capture phase is supported.
             * @return {boolean} True if the event is supported.
             * @internal
             * @license Modernizr 3.0.0pre (Custom Build) | MIT
             */ (t.exports = function (t, e) {
                if (!r.canUseDOM || (e && !("addEventListener" in document))) return !1;
                var i = "on" + t,
                    n = i in document;
                if (!n) {
                    var h = document.createElement("div");
                    h.setAttribute(i, "return;"), (n = "function" == typeof h[i]);
                }
                return !n && s && "wheel" === t && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n;
            });
    },
    function (t, e, i) {
        "use strict";
        var s = !("undefined" == typeof window || !window.document || !window.document.createElement),
            r = { canUseDOM: s, canUseWorkers: "undefined" != typeof Worker, canUseEventListeners: s && !(!window.addEventListener && !window.attachEvent), canUseViewport: s && !!window.screen, isInWorker: !s };
        t.exports = r;
    },
    function (t, e, i) {
        "use strict";
        i.r(e);
    },
    function (t, e, i) {
        "use strict";
        i.r(e);
        function s(t) {
            let e = t[0],
                i = t[1],
                s = t[2];
            return Math.sqrt(e * e + i * i + s * s);
        }
        function r(t, e) {
            return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
        }
        function n(t, e, i) {
            return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), (t[2] = e[2] + i[2]), t;
        }
        function h(t, e, i) {
            return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), (t[2] = e[2] - i[2]), t;
        }
        function a(t, e, i) {
            return (t[0] = e[0] * i), (t[1] = e[1] * i), (t[2] = e[2] * i), t;
        }
        function o(t) {
            let e = t[0],
                i = t[1],
                s = t[2];
            return e * e + i * i + s * s;
        }
        function l(t, e) {
            let i = e[0],
                s = e[1],
                r = e[2],
                n = i * i + s * s + r * r;
            return n > 0 && (n = 1 / Math.sqrt(n)), (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t;
        }
        function u(t, e) {
            return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
        }
        function c(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                h = i[0],
                a = i[1],
                o = i[2];
            return (t[0] = r * o - n * a), (t[1] = n * h - s * o), (t[2] = s * a - r * h), t;
        }
        const d = (function () {
            const t = [0, 0, 0],
                e = [0, 0, 0];
            return function (i, s) {
                r(t, i), r(e, s), l(t, t), l(e, e);
                let n = u(t, e);
                return n > 1 ? 0 : n < -1 ? Math.PI : Math.acos(n);
            };
        })();
        class g extends Array {
            constructor(t = 0, e = t, i = t) {
                return super(t, e, i), this;
            }
            get x() {
                return this[0];
            }
            get y() {
                return this[1];
            }
            get z() {
                return this[2];
            }
            set x(t) {
                this[0] = t;
            }
            set y(t) {
                this[1] = t;
            }
            set z(t) {
                this[2] = t;
            }
            set(t, e = t, i = t) {
                return t.length
                    ? this.copy(t)
                    : ((function (t, e, i, s) {
                          (t[0] = e), (t[1] = i), (t[2] = s);
                      })(this, t, e, i),
                      this);
            }
            copy(t) {
                return r(this, t), this;
            }
            add(t, e) {
                return e ? n(this, t, e) : n(this, this, t), this;
            }
            sub(t, e) {
                return e ? h(this, t, e) : h(this, this, t), this;
            }
            multiply(t) {
                var e, i, s;
                return t.length ? ((i = this), (s = t), ((e = this)[0] = i[0] * s[0]), (e[1] = i[1] * s[1]), (e[2] = i[2] * s[2])) : a(this, this, t), this;
            }
            divide(t) {
                var e, i, s;
                return t.length ? ((i = this), (s = t), ((e = this)[0] = i[0] / s[0]), (e[1] = i[1] / s[1]), (e[2] = i[2] / s[2])) : a(this, this, 1 / t), this;
            }
            inverse(t = this) {
                var e, i;
                return (i = t), ((e = this)[0] = 1 / i[0]), (e[1] = 1 / i[1]), (e[2] = 1 / i[2]), this;
            }
            len() {
                return s(this);
            }
            distance(t) {
                return t
                    ? (function (t, e) {
                          let i = e[0] - t[0],
                              s = e[1] - t[1],
                              r = e[2] - t[2];
                          return Math.sqrt(i * i + s * s + r * r);
                      })(this, t)
                    : s(this);
            }
            squaredLen() {
                return o(this);
            }
            squaredDistance(t) {
                return t
                    ? (function (t, e) {
                          let i = e[0] - t[0],
                              s = e[1] - t[1],
                              r = e[2] - t[2];
                          return i * i + s * s + r * r;
                      })(this, t)
                    : o(this);
            }
            negate(t = this) {
                var e, i;
                return (i = t), ((e = this)[0] = -i[0]), (e[1] = -i[1]), (e[2] = -i[2]), this;
            }
            cross(t, e) {
                return e ? c(this, t, e) : c(this, this, t), this;
            }
            scale(t) {
                return a(this, this, t), this;
            }
            normalize() {
                return l(this, this), this;
            }
            dot(t) {
                return u(this, t);
            }
            equals(t) {
                return (i = t), (e = this)[0] === i[0] && e[1] === i[1] && e[2] === i[2];
                var e, i;
            }
            applyMatrix4(t) {
                return (
                    (function (t, e, i) {
                        let s = e[0],
                            r = e[1],
                            n = e[2],
                            h = i[3] * s + i[7] * r + i[11] * n + i[15];
                        (h = h || 1), (t[0] = (i[0] * s + i[4] * r + i[8] * n + i[12]) / h), (t[1] = (i[1] * s + i[5] * r + i[9] * n + i[13]) / h), (t[2] = (i[2] * s + i[6] * r + i[10] * n + i[14]) / h);
                    })(this, this, t),
                    this
                );
            }
            scaleRotateMatrix4(t) {
                return (
                    (function (t, e, i) {
                        let s = e[0],
                            r = e[1],
                            n = e[2],
                            h = i[3] * s + i[7] * r + i[11] * n + i[15];
                        (h = h || 1), (t[0] = (i[0] * s + i[4] * r + i[8] * n) / h), (t[1] = (i[1] * s + i[5] * r + i[9] * n) / h), (t[2] = (i[2] * s + i[6] * r + i[10] * n) / h);
                    })(this, this, t),
                    this
                );
            }
            applyQuaternion(t) {
                return (
                    (function (t, e, i) {
                        let s = e[0],
                            r = e[1],
                            n = e[2],
                            h = i[0],
                            a = i[1],
                            o = i[2],
                            l = a * n - o * r,
                            u = o * s - h * n,
                            c = h * r - a * s,
                            d = a * c - o * u,
                            g = o * l - h * c,
                            p = h * u - a * l,
                            m = 2 * i[3];
                        (l *= m), (u *= m), (c *= m), (d *= 2), (g *= 2), (p *= 2), (t[0] = s + l + d), (t[1] = r + u + g), (t[2] = n + c + p);
                    })(this, this, t),
                    this
                );
            }
            angle(t) {
                return d(this, t);
            }
            lerp(t, e) {
                return (
                    (function (t, e, i, s) {
                        let r = e[0],
                            n = e[1],
                            h = e[2];
                        (t[0] = r + s * (i[0] - r)), (t[1] = n + s * (i[1] - n)), (t[2] = h + s * (i[2] - h));
                    })(this, this, t, e),
                    this
                );
            }
            clone() {
                return new g(this[0], this[1], this[2]);
            }
            fromArray(t, e = 0) {
                return (this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), this;
            }
            toArray(t = [], e = 0) {
                return (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), t;
            }
            transformDirection(t) {
                const e = this[0],
                    i = this[1],
                    s = this[2];
                return (this[0] = t[0] * e + t[4] * i + t[8] * s), (this[1] = t[1] * e + t[5] * i + t[9] * s), (this[2] = t[2] * e + t[6] * i + t[10] * s), this.normalize();
            }
        }
        const p = new g();
        let m = 1;
        class f {
            constructor({
                canvas: t = document.createElement("canvas"),
                width: e = 300,
                height: i = 150,
                dpr: s = 1,
                alpha: r = !1,
                depth: n = !0,
                stencil: h = !1,
                antialias: a = !1,
                premultipliedAlpha: o = !1,
                preserveDrawingBuffer: l = !1,
                powerPreference: u = "default",
                autoClear: c = !0,
                webgl: d = 2,
            } = {}) {
                const g = { alpha: r, depth: n, stencil: h, antialias: a, premultipliedAlpha: o, preserveDrawingBuffer: l, powerPreference: u };
                (this.dpr = s),
                    (this.alpha = r),
                    (this.color = !0),
                    (this.depth = n),
                    (this.stencil = h),
                    (this.premultipliedAlpha = o),
                    (this.autoClear = c),
                    (this.id = m++),
                    2 === d && (this.gl = t.getContext("webgl2", g)),
                    (this.isWebgl2 = !!this.gl),
                    this.gl || (this.gl = t.getContext("webgl", g) || t.getContext("experimental-webgl", g)),
                    (this.gl.renderer = this),
                    this.setSize(e, i),
                    (this.state = {}),
                    (this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO }),
                    (this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD }),
                    (this.state.cullFace = null),
                    (this.state.frontFace = this.gl.CCW),
                    (this.state.depthMask = !0),
                    (this.state.depthFunc = this.gl.LESS),
                    (this.state.premultiplyAlpha = !1),
                    (this.state.flipY = !1),
                    (this.state.unpackAlignment = 4),
                    (this.state.framebuffer = null),
                    (this.state.viewport = { width: null, height: null }),
                    (this.state.textureUnits = []),
                    (this.state.activeTextureUnit = 0),
                    (this.state.boundBuffer = null),
                    (this.state.uniformLocations = new Map()),
                    (this.extensions = {}),
                    this.isWebgl2
                        ? (this.getExtension("EXT_color_buffer_float"), this.getExtension("OES_texture_float_linear"))
                        : (this.getExtension("OES_texture_float"),
                          this.getExtension("OES_texture_float_linear"),
                          this.getExtension("OES_texture_half_float"),
                          this.getExtension("OES_texture_half_float_linear"),
                          this.getExtension("OES_element_index_uint"),
                          this.getExtension("OES_standard_derivatives"),
                          this.getExtension("EXT_sRGB"),
                          this.getExtension("WEBGL_depth_texture"),
                          this.getExtension("WEBGL_draw_buffers")),
                    (this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE")),
                    (this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE")),
                    (this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE")),
                    (this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES")),
                    (this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES")),
                    (this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES")),
                    (this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL")),
                    (this.parameters = {}),
                    (this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
                    (this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0);
            }
            setSize(t, e) {
                (this.width = t), (this.height = e), (this.gl.canvas.width = t * this.dpr), (this.gl.canvas.height = e * this.dpr), Object.assign(this.gl.canvas.style, { width: t + "px", height: e + "px" });
            }
            setViewport(t, e) {
                (this.state.viewport.width === t && this.state.viewport.height === e) || ((this.state.viewport.width = t), (this.state.viewport.height = e), this.gl.viewport(0, 0, t, e));
            }
            enable(t) {
                !0 !== this.state[t] && (this.gl.enable(t), (this.state[t] = !0));
            }
            disable(t) {
                !1 !== this.state[t] && (this.gl.disable(t), (this.state[t] = !1));
            }
            setBlendFunc(t, e, i, s) {
                (this.state.blendFunc.src === t && this.state.blendFunc.dst === e && this.state.blendFunc.srcAlpha === i && this.state.blendFunc.dstAlpha === s) ||
                    ((this.state.blendFunc.src = t), (this.state.blendFunc.dst = e), (this.state.blendFunc.srcAlpha = i), (this.state.blendFunc.dstAlpha = s), void 0 !== i ? this.gl.blendFuncSeparate(t, e, i, s) : this.gl.blendFunc(t, e));
            }
            setBlendEquation(t, e) {
                (t = t || this.gl.FUNC_ADD),
                    (this.state.blendEquation.modeRGB === t && this.state.blendEquation.modeAlpha === e) ||
                        ((this.state.blendEquation.modeRGB = t), (this.state.blendEquation.modeAlpha = e), void 0 !== e ? this.gl.blendEquationSeparate(t, e) : this.gl.blendEquation(t));
            }
            setCullFace(t) {
                this.state.cullFace !== t && ((this.state.cullFace = t), this.gl.cullFace(t));
            }
            setFrontFace(t) {
                this.state.frontFace !== t && ((this.state.frontFace = t), this.gl.frontFace(t));
            }
            setDepthMask(t) {
                this.state.depthMask !== t && ((this.state.depthMask = t), this.gl.depthMask(t));
            }
            setDepthFunc(t) {
                this.state.depthFunc !== t && ((this.state.depthFunc = t), this.gl.depthFunc(t));
            }
            activeTexture(t) {
                this.state.activeTextureUnit !== t && ((this.state.activeTextureUnit = t), this.gl.activeTexture(this.gl.TEXTURE0 + t));
            }
            bindFramebuffer({ target: t = this.gl.FRAMEBUFFER, buffer: e = null } = {}) {
                this.state.framebuffer !== e && ((this.state.framebuffer = e), this.gl.bindFramebuffer(t, e));
            }
            getExtension(t, e, i) {
                return e && this.gl[e]
                    ? this.gl[e].bind(this.gl)
                    : (this.extensions[t] || (this.extensions[t] = this.gl.getExtension(t)), e ? (this.extensions[t] ? this.extensions[t][i].bind(this.extensions[t]) : null) : this.extensions[t]);
            }
            sortOpaque(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : t.zDepth !== e.zDepth ? t.zDepth - e.zDepth : e.id - t.id;
            }
            sortTransparent(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.zDepth !== e.zDepth ? e.zDepth - t.zDepth : e.id - t.id;
            }
            sortUI(t, e) {
                return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program.id !== e.program.id ? t.program.id - e.program.id : e.id - t.id;
            }
            getRenderList({ scene: t, camera: e, frustumCull: i, sort: s }) {
                let r = [];
                if (
                    (e && i && e.updateFrustum(),
                    t.traverse((t) => {
                        if (!t.visible) return !0;
                        t.draw && ((i && t.frustumCulled && e && !e.frustumIntersectsMesh(t)) || r.push(t));
                    }),
                    s)
                ) {
                    const t = [],
                        i = [],
                        s = [];
                    r.forEach((r) => {
                        r.program.transparent ? (r.program.depthTest ? i.push(r) : s.push(r)) : t.push(r),
                            (r.zDepth = 0),
                            0 === r.renderOrder && r.program.depthTest && e && (r.worldMatrix.getTranslation(p), p.applyMatrix4(e.projectionViewMatrix), (r.zDepth = p.z));
                    }),
                        t.sort(this.sortOpaque),
                        i.sort(this.sortTransparent),
                        s.sort(this.sortUI),
                        (r = t.concat(i, s));
                }
                return r;
            }
            render({ scene: t, camera: e, target: i = null, update: s = !0, sort: r = !0, frustumCull: n = !0, clear: h }) {
                null === i ? (this.bindFramebuffer(), this.setViewport(this.width * this.dpr, this.height * this.dpr)) : (this.bindFramebuffer(i), this.setViewport(i.width, i.height)),
                    (h || (this.autoClear && !1 !== h)) &&
                        (!this.depth || (i && !i.depth) || (this.enable(this.gl.DEPTH_TEST), this.setDepthMask(!0)),
                        this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0))),
                    s && t.updateMatrixWorld(),
                    e && e.updateMatrixWorld();
                this.getRenderList({ scene: t, camera: e, frustumCull: n, sort: r }).forEach((t) => {
                    t.draw({ camera: e });
                });
            }
        }
        function w(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                h = e[3],
                a = i[0],
                o = i[1],
                l = i[2],
                u = i[3];
            return (t[0] = s * u + h * a + r * l - n * o), (t[1] = r * u + h * o + n * a - s * l), (t[2] = n * u + h * l + s * o - r * a), (t[3] = h * u - s * a - r * o - n * l), t;
        }
        const v = function (t, e) {
                return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
            },
            x = function (t, e, i, s, r) {
                return (t[0] = e), (t[1] = i), (t[2] = s), (t[3] = r), t;
            },
            b = function (t, e) {
                return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
            },
            E = function (t, e) {
                let i = e[0],
                    s = e[1],
                    r = e[2],
                    n = e[3],
                    h = i * i + s * s + r * r + n * n;
                return h > 0 && (h = 1 / Math.sqrt(h)), (t[0] = i * h), (t[1] = s * h), (t[2] = r * h), (t[3] = n * h), t;
            };
        class M extends Array {
            constructor(t = 0, e = 0, i = 0, s = 1) {
                return super(t, e, i, s), (this.onChange = () => {}), this;
            }
            get x() {
                return this[0];
            }
            get y() {
                return this[1];
            }
            get z() {
                return this[2];
            }
            get w() {
                return this[3];
            }
            set x(t) {
                (this[0] = t), this.onChange();
            }
            set y(t) {
                (this[1] = t), this.onChange();
            }
            set z(t) {
                (this[2] = t), this.onChange();
            }
            set w(t) {
                (this[3] = t), this.onChange();
            }
            identity() {
                var t;
                return ((t = this)[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 1), this.onChange(), this;
            }
            set(t, e, i, s) {
                return t.length ? this.copy(t) : (x(this, t, e, i, s), this.onChange(), this);
            }
            rotateX(t) {
                return (
                    (function (t, e, i) {
                        i *= 0.5;
                        let s = e[0],
                            r = e[1],
                            n = e[2],
                            h = e[3],
                            a = Math.sin(i),
                            o = Math.cos(i);
                        (t[0] = s * o + h * a), (t[1] = r * o + n * a), (t[2] = n * o - r * a), (t[3] = h * o - s * a);
                    })(this, this, t),
                    this.onChange(),
                    this
                );
            }
            rotateY(t) {
                return (
                    (function (t, e, i) {
                        i *= 0.5;
                        let s = e[0],
                            r = e[1],
                            n = e[2],
                            h = e[3],
                            a = Math.sin(i),
                            o = Math.cos(i);
                        (t[0] = s * o - n * a), (t[1] = r * o + h * a), (t[2] = n * o + s * a), (t[3] = h * o - r * a);
                    })(this, this, t),
                    this.onChange(),
                    this
                );
            }
            rotateZ(t) {
                return (
                    (function (t, e, i) {
                        i *= 0.5;
                        let s = e[0],
                            r = e[1],
                            n = e[2],
                            h = e[3],
                            a = Math.sin(i),
                            o = Math.cos(i);
                        (t[0] = s * o + r * a), (t[1] = r * o - s * a), (t[2] = n * o + h * a), (t[3] = h * o - n * a);
                    })(this, this, t),
                    this.onChange(),
                    this
                );
            }
            inverse(t = this) {
                return (
                    (function (t, e) {
                        let i = e[0],
                            s = e[1],
                            r = e[2],
                            n = e[3],
                            h = i * i + s * s + r * r + n * n,
                            a = h ? 1 / h : 0;
                        (t[0] = -i * a), (t[1] = -s * a), (t[2] = -r * a), (t[3] = n * a);
                    })(this, t),
                    this.onChange(),
                    this
                );
            }
            conjugate(t = this) {
                var e, i;
                return (i = t), ((e = this)[0] = -i[0]), (e[1] = -i[1]), (e[2] = -i[2]), (e[3] = i[3]), this.onChange(), this;
            }
            copy(t) {
                return v(this, t), this.onChange(), this;
            }
            normalize(t = this) {
                return E(this, t), this.onChange(), this;
            }
            multiply(t, e) {
                return e ? w(this, t, e) : w(this, this, t), this.onChange(), this;
            }
            dot(t) {
                return b(this, t);
            }
            fromMatrix3(t) {
                return (
                    (function (t, e) {
                        let i,
                            s = e[0] + e[4] + e[8];
                        if (s > 0) (i = Math.sqrt(s + 1)), (t[3] = 0.5 * i), (i = 0.5 / i), (t[0] = (e[5] - e[7]) * i), (t[1] = (e[6] - e[2]) * i), (t[2] = (e[1] - e[3]) * i);
                        else {
                            let s = 0;
                            e[4] > e[0] && (s = 1), e[8] > e[3 * s + s] && (s = 2);
                            let r = (s + 1) % 3,
                                n = (s + 2) % 3;
                            (i = Math.sqrt(e[3 * s + s] - e[3 * r + r] - e[3 * n + n] + 1)),
                                (t[s] = 0.5 * i),
                                (i = 0.5 / i),
                                (t[3] = (e[3 * r + n] - e[3 * n + r]) * i),
                                (t[r] = (e[3 * r + s] + e[3 * s + r]) * i),
                                (t[n] = (e[3 * n + s] + e[3 * s + n]) * i);
                        }
                    })(this, t),
                    this.onChange(),
                    this
                );
            }
            fromEuler(t) {
                return (
                    (function (t, e, i = "YXZ") {
                        let s = Math.sin(0.5 * e[0]),
                            r = Math.cos(0.5 * e[0]),
                            n = Math.sin(0.5 * e[1]),
                            h = Math.cos(0.5 * e[1]),
                            a = Math.sin(0.5 * e[2]),
                            o = Math.cos(0.5 * e[2]);
                        "XYZ" === i
                            ? ((t[0] = s * h * o + r * n * a), (t[1] = r * n * o - s * h * a), (t[2] = r * h * a + s * n * o), (t[3] = r * h * o - s * n * a))
                            : "YXZ" === i
                            ? ((t[0] = s * h * o + r * n * a), (t[1] = r * n * o - s * h * a), (t[2] = r * h * a - s * n * o), (t[3] = r * h * o + s * n * a))
                            : "ZXY" === i
                            ? ((t[0] = s * h * o - r * n * a), (t[1] = r * n * o + s * h * a), (t[2] = r * h * a + s * n * o), (t[3] = r * h * o - s * n * a))
                            : "ZYX" === i
                            ? ((t[0] = s * h * o - r * n * a), (t[1] = r * n * o + s * h * a), (t[2] = r * h * a - s * n * o), (t[3] = r * h * o + s * n * a))
                            : "YZX" === i
                            ? ((t[0] = s * h * o + r * n * a), (t[1] = r * n * o + s * h * a), (t[2] = r * h * a - s * n * o), (t[3] = r * h * o - s * n * a))
                            : "XZY" === i && ((t[0] = s * h * o - r * n * a), (t[1] = r * n * o - s * h * a), (t[2] = r * h * a + s * n * o), (t[3] = r * h * o + s * n * a));
                    })(this, t, t.order),
                    this
                );
            }
            fromAxisAngle(t, e) {
                return (
                    (function (t, e, i) {
                        i *= 0.5;
                        let s = Math.sin(i);
                        (t[0] = s * e[0]), (t[1] = s * e[1]), (t[2] = s * e[2]), (t[3] = Math.cos(i));
                    })(this, t, e),
                    this
                );
            }
            slerp(t, e) {
                return (
                    (function (t, e, i, s) {
                        let r,
                            n,
                            h,
                            a,
                            o,
                            l = e[0],
                            u = e[1],
                            c = e[2],
                            d = e[3],
                            g = i[0],
                            p = i[1],
                            m = i[2],
                            f = i[3];
                        (n = l * g + u * p + c * m + d * f),
                            n < 0 && ((n = -n), (g = -g), (p = -p), (m = -m), (f = -f)),
                            1 - n > 1e-6 ? ((r = Math.acos(n)), (h = Math.sin(r)), (a = Math.sin((1 - s) * r) / h), (o = Math.sin(s * r) / h)) : ((a = 1 - s), (o = s)),
                            (t[0] = a * l + o * g),
                            (t[1] = a * u + o * p),
                            (t[2] = a * c + o * m),
                            (t[3] = a * d + o * f);
                    })(this, this, t, e),
                    this
                );
            }
            fromArray(t, e = 0) {
                return (this[0] = t[e]), (this[1] = t[e + 1]), (this[2] = t[e + 2]), (this[3] = t[e + 3]), this;
            }
            toArray(t = [], e = 0) {
                return (t[e] = this[0]), (t[e + 1] = this[1]), (t[e + 2] = this[2]), (t[e + 3] = this[3]), t;
            }
        }
        function y(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                h = e[3],
                a = e[4],
                o = e[5],
                l = e[6],
                u = e[7],
                c = e[8],
                d = e[9],
                g = e[10],
                p = e[11],
                m = e[12],
                f = e[13],
                w = e[14],
                v = e[15],
                x = i[0],
                b = i[1],
                E = i[2],
                M = i[3];
            return (
                (t[0] = x * s + b * a + E * c + M * m),
                (t[1] = x * r + b * o + E * d + M * f),
                (t[2] = x * n + b * l + E * g + M * w),
                (t[3] = x * h + b * u + E * p + M * v),
                (x = i[4]),
                (b = i[5]),
                (E = i[6]),
                (M = i[7]),
                (t[4] = x * s + b * a + E * c + M * m),
                (t[5] = x * r + b * o + E * d + M * f),
                (t[6] = x * n + b * l + E * g + M * w),
                (t[7] = x * h + b * u + E * p + M * v),
                (x = i[8]),
                (b = i[9]),
                (E = i[10]),
                (M = i[11]),
                (t[8] = x * s + b * a + E * c + M * m),
                (t[9] = x * r + b * o + E * d + M * f),
                (t[10] = x * n + b * l + E * g + M * w),
                (t[11] = x * h + b * u + E * p + M * v),
                (x = i[12]),
                (b = i[13]),
                (E = i[14]),
                (M = i[15]),
                (t[12] = x * s + b * a + E * c + M * m),
                (t[13] = x * r + b * o + E * d + M * f),
                (t[14] = x * n + b * l + E * g + M * w),
                (t[15] = x * h + b * u + E * p + M * v),
                t
            );
        }
        function A(t, e) {
            let i = e[0],
                s = e[1],
                r = e[2],
                n = e[4],
                h = e[5],
                a = e[6],
                o = e[8],
                l = e[9],
                u = e[10];
            return (t[0] = Math.hypot(i, s, r)), (t[1] = Math.hypot(n, h, a)), (t[2] = Math.hypot(o, l, u)), t;
        }
        const S = (function () {
            const t = [0, 0, 0];
            return function (e, i) {
                let s = t;
                A(s, i);
                let r = 1 / s[0],
                    n = 1 / s[1],
                    h = 1 / s[2],
                    a = i[0] * r,
                    o = i[1] * n,
                    l = i[2] * h,
                    u = i[4] * r,
                    c = i[5] * n,
                    d = i[6] * h,
                    g = i[8] * r,
                    p = i[9] * n,
                    m = i[10] * h,
                    f = a + c + m,
                    w = 0;
                return (
                    f > 0
                        ? ((w = 2 * Math.sqrt(f + 1)), (e[3] = 0.25 * w), (e[0] = (d - p) / w), (e[1] = (g - l) / w), (e[2] = (o - u) / w))
                        : a > c && a > m
                        ? ((w = 2 * Math.sqrt(1 + a - c - m)), (e[3] = (d - p) / w), (e[0] = 0.25 * w), (e[1] = (o + u) / w), (e[2] = (g + l) / w))
                        : c > m
                        ? ((w = 2 * Math.sqrt(1 + c - a - m)), (e[3] = (g - l) / w), (e[0] = (o + u) / w), (e[1] = 0.25 * w), (e[2] = (d + p) / w))
                        : ((w = 2 * Math.sqrt(1 + m - a - c)), (e[3] = (o - u) / w), (e[0] = (g + l) / w), (e[1] = (d + p) / w), (e[2] = 0.25 * w)),
                    e
                );
            };
        })();
        class T extends Array {
            constructor(t = 1, e = 0, i = 0, s = 0, r = 0, n = 1, h = 0, a = 0, o = 0, l = 0, u = 1, c = 0, d = 0, g = 0, p = 0, m = 1) {
                return super(t, e, i, s, r, n, h, a, o, l, u, c, d, g, p, m), this;
            }
            get x() {
                return this[12];
            }
            get y() {
                return this[13];
            }
            get z() {
                return this[14];
            }
            get w() {
                return this[15];
            }
            set x(t) {
                this[12] = t;
            }
            set y(t) {
                this[13] = t;
            }
            set z(t) {
                this[14] = t;
            }
            set w(t) {
                this[15] = t;
            }
            set(t, e, i, s, r, n, h, a, o, l, u, c, d, g, p, m) {
                return t.length
                    ? this.copy(t)
                    : ((function (t, e, i, s, r, n, h, a, o, l, u, c, d, g, p, m, f) {
                          (t[0] = e), (t[1] = i), (t[2] = s), (t[3] = r), (t[4] = n), (t[5] = h), (t[6] = a), (t[7] = o), (t[8] = l), (t[9] = u), (t[10] = c), (t[11] = d), (t[12] = g), (t[13] = p), (t[14] = m), (t[15] = f);
                      })(this, t, e, i, s, r, n, h, a, o, l, u, c, d, g, p, m),
                      this);
            }
            translate(t, e = this) {
                return (
                    (function (t, e, i) {
                        let s,
                            r,
                            n,
                            h,
                            a,
                            o,
                            l,
                            u,
                            c,
                            d,
                            g,
                            p,
                            m = i[0],
                            f = i[1],
                            w = i[2];
                        e === t
                            ? ((t[12] = e[0] * m + e[4] * f + e[8] * w + e[12]), (t[13] = e[1] * m + e[5] * f + e[9] * w + e[13]), (t[14] = e[2] * m + e[6] * f + e[10] * w + e[14]), (t[15] = e[3] * m + e[7] * f + e[11] * w + e[15]))
                            : ((s = e[0]),
                              (r = e[1]),
                              (n = e[2]),
                              (h = e[3]),
                              (a = e[4]),
                              (o = e[5]),
                              (l = e[6]),
                              (u = e[7]),
                              (c = e[8]),
                              (d = e[9]),
                              (g = e[10]),
                              (p = e[11]),
                              (t[0] = s),
                              (t[1] = r),
                              (t[2] = n),
                              (t[3] = h),
                              (t[4] = a),
                              (t[5] = o),
                              (t[6] = l),
                              (t[7] = u),
                              (t[8] = c),
                              (t[9] = d),
                              (t[10] = g),
                              (t[11] = p),
                              (t[12] = s * m + a * f + c * w + e[12]),
                              (t[13] = r * m + o * f + d * w + e[13]),
                              (t[14] = n * m + l * f + g * w + e[14]),
                              (t[15] = h * m + u * f + p * w + e[15]));
                    })(this, e, t),
                    this
                );
            }
            rotate(t, e, i = this) {
                return (
                    (function (t, e, i, s) {
                        let r,
                            n,
                            h,
                            a,
                            o,
                            l,
                            u,
                            c,
                            d,
                            g,
                            p,
                            m,
                            f,
                            w,
                            v,
                            x,
                            b,
                            E,
                            M,
                            y,
                            A,
                            S,
                            T,
                            _,
                            F = s[0],
                            R = s[1],
                            P = s[2],
                            C = Math.hypot(F, R, P);
                        Math.abs(C) < 1e-6 ||
                            ((C = 1 / C),
                            (F *= C),
                            (R *= C),
                            (P *= C),
                            (r = Math.sin(i)),
                            (n = Math.cos(i)),
                            (h = 1 - n),
                            (a = e[0]),
                            (o = e[1]),
                            (l = e[2]),
                            (u = e[3]),
                            (c = e[4]),
                            (d = e[5]),
                            (g = e[6]),
                            (p = e[7]),
                            (m = e[8]),
                            (f = e[9]),
                            (w = e[10]),
                            (v = e[11]),
                            (x = F * F * h + n),
                            (b = R * F * h + P * r),
                            (E = P * F * h - R * r),
                            (M = F * R * h - P * r),
                            (y = R * R * h + n),
                            (A = P * R * h + F * r),
                            (S = F * P * h + R * r),
                            (T = R * P * h - F * r),
                            (_ = P * P * h + n),
                            (t[0] = a * x + c * b + m * E),
                            (t[1] = o * x + d * b + f * E),
                            (t[2] = l * x + g * b + w * E),
                            (t[3] = u * x + p * b + v * E),
                            (t[4] = a * M + c * y + m * A),
                            (t[5] = o * M + d * y + f * A),
                            (t[6] = l * M + g * y + w * A),
                            (t[7] = u * M + p * y + v * A),
                            (t[8] = a * S + c * T + m * _),
                            (t[9] = o * S + d * T + f * _),
                            (t[10] = l * S + g * T + w * _),
                            (t[11] = u * S + p * T + v * _),
                            e !== t && ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])));
                    })(this, i, t, e),
                    this
                );
            }
            scale(t, e = this) {
                return (
                    (function (t, e, i) {
                        let s = i[0],
                            r = i[1],
                            n = i[2];
                        (t[0] = e[0] * s),
                            (t[1] = e[1] * s),
                            (t[2] = e[2] * s),
                            (t[3] = e[3] * s),
                            (t[4] = e[4] * r),
                            (t[5] = e[5] * r),
                            (t[6] = e[6] * r),
                            (t[7] = e[7] * r),
                            (t[8] = e[8] * n),
                            (t[9] = e[9] * n),
                            (t[10] = e[10] * n),
                            (t[11] = e[11] * n),
                            (t[12] = e[12]),
                            (t[13] = e[13]),
                            (t[14] = e[14]),
                            (t[15] = e[15]);
                    })(this, e, "number" == typeof t ? [t, t, t] : t),
                    this
                );
            }
            multiply(t, e) {
                return e ? y(this, t, e) : y(this, this, t), this;
            }
            identity() {
                var t;
                return ((t = this)[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 0), (t[5] = 1), (t[6] = 0), (t[7] = 0), (t[8] = 0), (t[9] = 0), (t[10] = 1), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), this;
            }
            copy(t) {
                var e, i;
                return (
                    (i = t),
                    ((e = this)[0] = i[0]),
                    (e[1] = i[1]),
                    (e[2] = i[2]),
                    (e[3] = i[3]),
                    (e[4] = i[4]),
                    (e[5] = i[5]),
                    (e[6] = i[6]),
                    (e[7] = i[7]),
                    (e[8] = i[8]),
                    (e[9] = i[9]),
                    (e[10] = i[10]),
                    (e[11] = i[11]),
                    (e[12] = i[12]),
                    (e[13] = i[13]),
                    (e[14] = i[14]),
                    (e[15] = i[15]),
                    this
                );
            }
            fromPerspective({ fov: t, aspect: e, near: i, far: s } = {}) {
                return (
                    (function (t, e, i, s, r) {
                        let n = 1 / Math.tan(e / 2),
                            h = 1 / (s - r);
                        (t[0] = n / i),
                            (t[1] = 0),
                            (t[2] = 0),
                            (t[3] = 0),
                            (t[4] = 0),
                            (t[5] = n),
                            (t[6] = 0),
                            (t[7] = 0),
                            (t[8] = 0),
                            (t[9] = 0),
                            (t[10] = (r + s) * h),
                            (t[11] = -1),
                            (t[12] = 0),
                            (t[13] = 0),
                            (t[14] = 2 * r * s * h),
                            (t[15] = 0);
                    })(this, t, e, i, s),
                    this
                );
            }
            fromOrthogonal({ left: t, right: e, bottom: i, top: s, near: r, far: n }) {
                return (
                    (function (t, e, i, s, r, n, h) {
                        let a = 1 / (e - i),
                            o = 1 / (s - r),
                            l = 1 / (n - h);
                        (t[0] = -2 * a),
                            (t[1] = 0),
                            (t[2] = 0),
                            (t[3] = 0),
                            (t[4] = 0),
                            (t[5] = -2 * o),
                            (t[6] = 0),
                            (t[7] = 0),
                            (t[8] = 0),
                            (t[9] = 0),
                            (t[10] = 2 * l),
                            (t[11] = 0),
                            (t[12] = (e + i) * a),
                            (t[13] = (r + s) * o),
                            (t[14] = (h + n) * l),
                            (t[15] = 1);
                    })(this, t, e, i, s, r, n),
                    this
                );
            }
            fromQuaternion(t) {
                return (
                    (function (t, e) {
                        let i = e[0],
                            s = e[1],
                            r = e[2],
                            n = e[3],
                            h = i + i,
                            a = s + s,
                            o = r + r,
                            l = i * h,
                            u = s * h,
                            c = s * a,
                            d = r * h,
                            g = r * a,
                            p = r * o,
                            m = n * h,
                            f = n * a,
                            w = n * o;
                        (t[0] = 1 - c - p),
                            (t[1] = u + w),
                            (t[2] = d - f),
                            (t[3] = 0),
                            (t[4] = u - w),
                            (t[5] = 1 - l - p),
                            (t[6] = g + m),
                            (t[7] = 0),
                            (t[8] = d + f),
                            (t[9] = g - m),
                            (t[10] = 1 - l - c),
                            (t[11] = 0),
                            (t[12] = 0),
                            (t[13] = 0),
                            (t[14] = 0),
                            (t[15] = 1);
                    })(this, t),
                    this
                );
            }
            setPosition(t) {
                return (this.x = t[0]), (this.y = t[1]), (this.z = t[2]), this;
            }
            inverse(t = this) {
                return (
                    (function (t, e) {
                        let i = e[0],
                            s = e[1],
                            r = e[2],
                            n = e[3],
                            h = e[4],
                            a = e[5],
                            o = e[6],
                            l = e[7],
                            u = e[8],
                            c = e[9],
                            d = e[10],
                            g = e[11],
                            p = e[12],
                            m = e[13],
                            f = e[14],
                            w = e[15],
                            v = i * a - s * h,
                            x = i * o - r * h,
                            b = i * l - n * h,
                            E = s * o - r * a,
                            M = s * l - n * a,
                            y = r * l - n * o,
                            A = u * m - c * p,
                            S = u * f - d * p,
                            T = u * w - g * p,
                            _ = c * f - d * m,
                            F = c * w - g * m,
                            R = d * w - g * f,
                            P = v * R - x * F + b * _ + E * T - M * S + y * A;
                        P &&
                            ((P = 1 / P),
                            (t[0] = (a * R - o * F + l * _) * P),
                            (t[1] = (r * F - s * R - n * _) * P),
                            (t[2] = (m * y - f * M + w * E) * P),
                            (t[3] = (d * M - c * y - g * E) * P),
                            (t[4] = (o * T - h * R - l * S) * P),
                            (t[5] = (i * R - r * T + n * S) * P),
                            (t[6] = (f * b - p * y - w * x) * P),
                            (t[7] = (u * y - d * b + g * x) * P),
                            (t[8] = (h * F - a * T + l * A) * P),
                            (t[9] = (s * T - i * F - n * A) * P),
                            (t[10] = (p * M - m * b + w * v) * P),
                            (t[11] = (c * b - u * M - g * v) * P),
                            (t[12] = (a * S - h * _ - o * A) * P),
                            (t[13] = (i * _ - s * S + r * A) * P),
                            (t[14] = (m * x - p * E - f * v) * P),
                            (t[15] = (u * E - c * x + d * v) * P));
                    })(this, t),
                    this
                );
            }
            compose(t, e, i) {
                return (
                    (function (t, e, i, s) {
                        let r = e[0],
                            n = e[1],
                            h = e[2],
                            a = e[3],
                            o = r + r,
                            l = n + n,
                            u = h + h,
                            c = r * o,
                            d = r * l,
                            g = r * u,
                            p = n * l,
                            m = n * u,
                            f = h * u,
                            w = a * o,
                            v = a * l,
                            x = a * u,
                            b = s[0],
                            E = s[1],
                            M = s[2];
                        (t[0] = (1 - (p + f)) * b),
                            (t[1] = (d + x) * b),
                            (t[2] = (g - v) * b),
                            (t[3] = 0),
                            (t[4] = (d - x) * E),
                            (t[5] = (1 - (c + f)) * E),
                            (t[6] = (m + w) * E),
                            (t[7] = 0),
                            (t[8] = (g + v) * M),
                            (t[9] = (m - w) * M),
                            (t[10] = (1 - (c + p)) * M),
                            (t[11] = 0),
                            (t[12] = i[0]),
                            (t[13] = i[1]),
                            (t[14] = i[2]),
                            (t[15] = 1);
                    })(this, t, e, i),
                    this
                );
            }
            getRotation(t) {
                return S(t, this), this;
            }
            getTranslation(t) {
                var e, i;
                return (i = this), ((e = t)[0] = i[12]), (e[1] = i[13]), (e[2] = i[14]), this;
            }
            getScaling(t) {
                return A(t, this), this;
            }
            getMaxScaleOnAxis() {
                return (function (t) {
                    let e = t[0],
                        i = t[1],
                        s = t[2],
                        r = t[4],
                        n = t[5],
                        h = t[6],
                        a = t[8],
                        o = t[9],
                        l = t[10];
                    const u = e * e + i * i + s * s,
                        c = r * r + n * n + h * h,
                        d = a * a + o * o + l * l;
                    return Math.sqrt(Math.max(u, c, d));
                })(this);
            }
            lookAt(t, e, i) {
                return (
                    (function (t, e, i, s) {
                        let r = e[0],
                            n = e[1],
                            h = e[2],
                            a = s[0],
                            o = s[1],
                            l = s[2],
                            u = r - i[0],
                            c = n - i[1],
                            d = h - i[2],
                            g = u * u + c * c + d * d;
                        0 === g ? (d = 1) : ((g = 1 / Math.sqrt(g)), (u *= g), (c *= g), (d *= g));
                        let p = o * d - l * c,
                            m = l * u - a * d,
                            f = a * c - o * u;
                        (g = p * p + m * m + f * f),
                            0 === g && (l ? (a += 1e-6) : o ? (l += 1e-6) : (o += 1e-6), (p = o * d - l * c), (m = l * u - a * d), (f = a * c - o * u), (g = p * p + m * m + f * f)),
                            (g = 1 / Math.sqrt(g)),
                            (p *= g),
                            (m *= g),
                            (f *= g),
                            (t[0] = p),
                            (t[1] = m),
                            (t[2] = f),
                            (t[3] = 0),
                            (t[4] = c * f - d * m),
                            (t[5] = d * p - u * f),
                            (t[6] = u * m - c * p),
                            (t[7] = 0),
                            (t[8] = u),
                            (t[9] = c),
                            (t[10] = d),
                            (t[11] = 0),
                            (t[12] = r),
                            (t[13] = n),
                            (t[14] = h),
                            (t[15] = 1);
                    })(this, t, e, i),
                    this
                );
            }
            determinant() {
                return (function (t) {
                    let e = t[0],
                        i = t[1],
                        s = t[2],
                        r = t[3],
                        n = t[4],
                        h = t[5],
                        a = t[6],
                        o = t[7],
                        l = t[8],
                        u = t[9],
                        c = t[10],
                        d = t[11],
                        g = t[12],
                        p = t[13],
                        m = t[14],
                        f = t[15];
                    return (
                        (e * h - i * n) * (c * f - d * m) - (e * a - s * n) * (u * f - d * p) + (e * o - r * n) * (u * m - c * p) + (i * a - s * h) * (l * f - d * g) - (i * o - r * h) * (l * m - c * g) + (s * o - r * a) * (l * p - u * g)
                    );
                })(this);
            }
            fromArray(t, e = 0) {
                return (
                    (this[0] = t[e]),
                    (this[1] = t[e + 1]),
                    (this[2] = t[e + 2]),
                    (this[3] = t[e + 3]),
                    (this[4] = t[e + 4]),
                    (this[5] = t[e + 5]),
                    (this[6] = t[e + 6]),
                    (this[7] = t[e + 7]),
                    (this[8] = t[e + 8]),
                    (this[9] = t[e + 9]),
                    (this[10] = t[e + 10]),
                    (this[11] = t[e + 11]),
                    (this[12] = t[e + 12]),
                    (this[13] = t[e + 13]),
                    (this[14] = t[e + 14]),
                    (this[15] = t[e + 15]),
                    this
                );
            }
            toArray(t = [], e = 0) {
                return (
                    (t[e] = this[0]),
                    (t[e + 1] = this[1]),
                    (t[e + 2] = this[2]),
                    (t[e + 3] = this[3]),
                    (t[e + 4] = this[4]),
                    (t[e + 5] = this[5]),
                    (t[e + 6] = this[6]),
                    (t[e + 7] = this[7]),
                    (t[e + 8] = this[8]),
                    (t[e + 9] = this[9]),
                    (t[e + 10] = this[10]),
                    (t[e + 11] = this[11]),
                    (t[e + 12] = this[12]),
                    (t[e + 13] = this[13]),
                    (t[e + 14] = this[14]),
                    (t[e + 15] = this[15]),
                    t
                );
            }
        }
        const _ = new T();
        class F extends Array {
            constructor(t = 0, e = t, i = t, s = "YXZ") {
                return super(t, e, i), (this.order = s), (this.onChange = () => {}), this;
            }
            get x() {
                return this[0];
            }
            get y() {
                return this[1];
            }
            get z() {
                return this[2];
            }
            set x(t) {
                (this[0] = t), this.onChange();
            }
            set y(t) {
                (this[1] = t), this.onChange();
            }
            set z(t) {
                (this[2] = t), this.onChange();
            }
            set(t, e = t, i = t) {
                return t.length ? this.copy(t) : ((this[0] = t), (this[1] = e), (this[2] = i), this.onChange(), this);
            }
            copy(t) {
                return (this[0] = t[0]), (this[1] = t[1]), (this[2] = t[2]), this.onChange(), this;
            }
            reorder(t) {
                return (this.order = t), this.onChange(), this;
            }
            fromRotationMatrix(t, e = this.order) {
                return (
                    (function (t, e, i = "YXZ") {
                        "XYZ" === i
                            ? ((t[1] = Math.asin(Math.min(Math.max(e[8], -1), 1))), Math.abs(e[8]) < 0.99999 ? ((t[0] = Math.atan2(-e[9], e[10])), (t[2] = Math.atan2(-e[4], e[0]))) : ((t[0] = Math.atan2(e[6], e[5])), (t[2] = 0)))
                            : "YXZ" === i
                            ? ((t[0] = Math.asin(-Math.min(Math.max(e[9], -1), 1))), Math.abs(e[9]) < 0.99999 ? ((t[1] = Math.atan2(e[8], e[10])), (t[2] = Math.atan2(e[1], e[5]))) : ((t[1] = Math.atan2(-e[2], e[0])), (t[2] = 0)))
                            : "ZXY" === i
                            ? ((t[0] = Math.asin(Math.min(Math.max(e[6], -1), 1))), Math.abs(e[6]) < 0.99999 ? ((t[1] = Math.atan2(-e[2], e[10])), (t[2] = Math.atan2(-e[4], e[5]))) : ((t[1] = 0), (t[2] = Math.atan2(e[1], e[0]))))
                            : "ZYX" === i
                            ? ((t[1] = Math.asin(-Math.min(Math.max(e[2], -1), 1))), Math.abs(e[2]) < 0.99999 ? ((t[0] = Math.atan2(e[6], e[10])), (t[2] = Math.atan2(e[1], e[0]))) : ((t[0] = 0), (t[2] = Math.atan2(-e[4], e[5]))))
                            : "YZX" === i
                            ? ((t[2] = Math.asin(Math.min(Math.max(e[1], -1), 1))), Math.abs(e[1]) < 0.99999 ? ((t[0] = Math.atan2(-e[9], e[5])), (t[1] = Math.atan2(-e[2], e[0]))) : ((t[0] = 0), (t[1] = Math.atan2(e[8], e[10]))))
                            : "XZY" === i &&
                              ((t[2] = Math.asin(-Math.min(Math.max(e[4], -1), 1))), Math.abs(e[4]) < 0.99999 ? ((t[0] = Math.atan2(e[6], e[5])), (t[1] = Math.atan2(e[8], e[0]))) : ((t[0] = Math.atan2(-e[9], e[10])), (t[1] = 0)));
                    })(this, t, e),
                    this
                );
            }
            fromQuaternion(t, e = this.order) {
                return _.fromQuaternion(t), this.fromRotationMatrix(_, e);
            }
        }
        class R {
            constructor() {
                (this.parent = null),
                    (this.children = []),
                    (this.visible = !0),
                    (this.matrix = new T()),
                    (this.worldMatrix = new T()),
                    (this.matrixAutoUpdate = !0),
                    (this.position = new g()),
                    (this.quaternion = new M()),
                    (this.scale = new g(1)),
                    (this.rotation = new F()),
                    (this.up = new g(0, 1, 0)),
                    (this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation)),
                    (this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion));
            }
            setParent(t, e = !0) {
                e && this.parent && t !== this.parent && this.parent.removeChild(this, !1), (this.parent = t), e && t && t.addChild(this, !1);
            }
            addChild(t, e = !0) {
                ~this.children.indexOf(t) || this.children.push(t), e && t.setParent(this, !1);
            }
            removeChild(t, e = !0) {
                ~this.children.indexOf(t) && this.children.splice(this.children.indexOf(t), 1), e && t.setParent(null, !1);
            }
            updateMatrixWorld(t) {
                this.matrixAutoUpdate && this.updateMatrix(),
                    (this.worldMatrixNeedsUpdate || t) && (null === this.parent ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix), (this.worldMatrixNeedsUpdate = !1), (t = !0));
                for (let e = 0, i = this.children.length; e < i; e++) this.children[e].updateMatrixWorld(t);
            }
            updateMatrix() {
                this.matrix.compose(this.quaternion, this.position, this.scale), (this.worldMatrixNeedsUpdate = !0);
            }
            traverse(t) {
                if (!t(this)) for (let e = 0, i = this.children.length; e < i; e++) this.children[e].traverse(t);
            }
            decompose() {
                this.matrix.getTranslation(this.position), this.matrix.getRotation(this.quaternion), this.matrix.getScaling(this.scale), this.rotation.fromQuaternion(this.quaternion);
            }
            lookAt(t, e = !1) {
                e ? this.matrix.lookAt(this.position, t, this.up) : this.matrix.lookAt(t, this.position, this.up), this.matrix.getRotation(this.quaternion), this.rotation.fromQuaternion(this.quaternion);
            }
        }
        const P = new T(),
            C = new g(),
            L = new g();
        class I extends R {
            constructor(t, { near: e = 0.1, far: i = 100, fov: s = 45, aspect: r = 1, left: n, right: h, bottom: a, top: o, zoom: l = 1 } = {}) {
                super(),
                    Object.assign(this, { near: e, far: i, fov: s, aspect: r, left: n, right: h, bottom: a, top: o, zoom: l }),
                    (this.projectionMatrix = new T()),
                    (this.viewMatrix = new T()),
                    (this.projectionViewMatrix = new T()),
                    (this.worldPosition = new g()),
                    (this.type = n || h ? "orthographic" : "perspective"),
                    "orthographic" === this.type ? this.orthographic() : this.perspective();
            }
            perspective({ near: t = this.near, far: e = this.far, fov: i = this.fov, aspect: s = this.aspect } = {}) {
                return Object.assign(this, { near: t, far: e, fov: i, aspect: s }), this.projectionMatrix.fromPerspective({ fov: i * (Math.PI / 180), aspect: s, near: t, far: e }), (this.type = "perspective"), this;
            }
            orthographic({ near: t = this.near, far: e = this.far, left: i = this.left, right: s = this.right, bottom: r = this.bottom, top: n = this.top, zoom: h = this.zoom } = {}) {
                return (
                    Object.assign(this, { near: t, far: e, left: i, right: s, bottom: r, top: n, zoom: h }),
                    (i /= h),
                    (s /= h),
                    (r /= h),
                    (n /= h),
                    this.projectionMatrix.fromOrthogonal({ left: i, right: s, bottom: r, top: n, near: t, far: e }),
                    (this.type = "orthographic"),
                    this
                );
            }
            updateMatrixWorld() {
                return super.updateMatrixWorld(), this.viewMatrix.inverse(this.worldMatrix), this.worldMatrix.getTranslation(this.worldPosition), this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix), this;
            }
            lookAt(t) {
                return super.lookAt(t, !0), this;
            }
            project(t) {
                return t.applyMatrix4(this.viewMatrix), t.applyMatrix4(this.projectionMatrix), this;
            }
            unproject(t) {
                return t.applyMatrix4(P.inverse(this.projectionMatrix)), t.applyMatrix4(this.worldMatrix), this;
            }
            updateFrustum() {
                this.frustum || (this.frustum = [new g(), new g(), new g(), new g(), new g(), new g()]);
                const t = this.projectionViewMatrix;
                (this.frustum[0].set(t[3] - t[0], t[7] - t[4], t[11] - t[8]).constant = t[15] - t[12]),
                    (this.frustum[1].set(t[3] + t[0], t[7] + t[4], t[11] + t[8]).constant = t[15] + t[12]),
                    (this.frustum[2].set(t[3] + t[1], t[7] + t[5], t[11] + t[9]).constant = t[15] + t[13]),
                    (this.frustum[3].set(t[3] - t[1], t[7] - t[5], t[11] - t[9]).constant = t[15] - t[13]),
                    (this.frustum[4].set(t[3] - t[2], t[7] - t[6], t[11] - t[10]).constant = t[15] - t[14]),
                    (this.frustum[5].set(t[3] + t[2], t[7] + t[6], t[11] + t[10]).constant = t[15] + t[14]);
                for (let t = 0; t < 6; t++) {
                    const e = 1 / this.frustum[t].distance();
                    this.frustum[t].multiply(e), (this.frustum[t].constant *= e);
                }
            }
            frustumIntersectsMesh(t) {
                if (!t.geometry.attributes.position) return !0;
                if (((t.geometry.bounds && t.geometry.bounds.radius !== 1 / 0) || t.geometry.computeBoundingSphere(), !t.geometry.bounds)) return !0;
                const e = C;
                e.copy(t.geometry.bounds.center), e.applyMatrix4(t.worldMatrix);
                const i = t.geometry.bounds.radius * t.worldMatrix.getMaxScaleOnAxis();
                return this.frustumIntersectsSphere(e, i);
            }
            frustumIntersectsSphere(t, e) {
                const i = L;
                for (let s = 0; s < 6; s++) {
                    const r = this.frustum[s];
                    if (i.copy(r).dot(t) + r.constant < -e) return !1;
                }
                return !0;
            }
        }
        const U = new g();
        let D = 1,
            N = 1,
            B = !1;
        class O {
            constructor(t, e = {}) {
                t.canvas || console.error("gl not passed as first argument to Geometry"),
                    (this.gl = t),
                    (this.attributes = e),
                    (this.id = D++),
                    (this.VAOs = {}),
                    (this.drawRange = { start: 0, count: 0 }),
                    (this.instancedCount = 0),
                    this.gl.renderer.bindVertexArray(null),
                    (this.gl.renderer.currentGeometry = null),
                    (this.glState = this.gl.renderer.state);
                for (let t in e) this.addAttribute(t, e[t]);
            }
            addAttribute(t, e) {
                if (
                    ((this.attributes[t] = e),
                    (e.id = N++),
                    (e.size = e.size || 1),
                    (e.type = e.type || (e.data.constructor === Float32Array ? this.gl.FLOAT : e.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT)),
                    (e.target = "index" === t ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER),
                    (e.normalized = e.normalized || !1),
                    (e.stride = e.stride || 0),
                    (e.offset = e.offset || 0),
                    (e.count = e.count || (e.stride ? e.data.byteLength / e.stride : e.data.length / e.size)),
                    (e.divisor = e.instanced || 0),
                    (e.needsUpdate = !1),
                    e.buffer || ((e.buffer = this.gl.createBuffer()), this.updateAttribute(e)),
                    e.divisor)
                ) {
                    if (((this.isInstanced = !0), this.instancedCount && this.instancedCount !== e.count * e.divisor))
                        return console.warn("geometry has multiple instanced buffers of different length"), (this.instancedCount = Math.min(this.instancedCount, e.count * e.divisor));
                    this.instancedCount = e.count * e.divisor;
                } else "index" === t ? (this.drawRange.count = e.count) : this.attributes.index || (this.drawRange.count = Math.max(this.drawRange.count, e.count));
            }
            updateAttribute(t) {
                this.glState.boundBuffer !== t.buffer && (this.gl.bindBuffer(t.target, t.buffer), (this.glState.boundBuffer = t.buffer)), this.gl.bufferData(t.target, t.data, this.gl.STATIC_DRAW), (t.needsUpdate = !1);
            }
            setIndex(t) {
                this.addAttribute("index", t);
            }
            setDrawRange(t, e) {
                (this.drawRange.start = t), (this.drawRange.count = e);
            }
            setInstancedCount(t) {
                this.instancedCount = t;
            }
            createVAO(t) {
                (this.VAOs[t.attributeOrder] = this.gl.renderer.createVertexArray()), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), this.bindAttributes(t);
            }
            bindAttributes(t) {
                t.attributeLocations.forEach((t, { name: e, type: i }) => {
                    if (!this.attributes[e]) return void console.warn(`active attribute ${e} not being supplied`);
                    const s = this.attributes[e];
                    this.gl.bindBuffer(s.target, s.buffer), (this.glState.boundBuffer = s.buffer);
                    let r = 1;
                    35674 === i && (r = 2), 35675 === i && (r = 3), 35676 === i && (r = 4);
                    const n = s.size / r,
                        h = 1 === r ? 0 : r * r * r,
                        a = 1 === r ? 0 : r * r;
                    for (let e = 0; e < r; e++) this.gl.vertexAttribPointer(t + e, n, s.type, s.normalized, s.stride + h, s.offset + e * a), this.gl.enableVertexAttribArray(t + e), this.gl.renderer.vertexAttribDivisor(t + e, s.divisor);
                }),
                    this.attributes.index && this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
            }
            draw({ program: t, mode: e = this.gl.TRIANGLES }) {
                this.gl.renderer.currentGeometry !== `${this.id}_${t.attributeOrder}` &&
                    (this.VAOs[t.attributeOrder] || this.createVAO(t), this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]), (this.gl.renderer.currentGeometry = `${this.id}_${t.attributeOrder}`)),
                    t.attributeLocations.forEach((t, { name: e }) => {
                        const i = this.attributes[e];
                        i.needsUpdate && this.updateAttribute(i);
                    }),
                    this.isInstanced
                        ? this.attributes.index
                            ? this.gl.renderer.drawElementsInstanced(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + 2 * this.drawRange.start, this.instancedCount)
                            : this.gl.renderer.drawArraysInstanced(e, this.drawRange.start, this.drawRange.count, this.instancedCount)
                        : this.attributes.index
                        ? this.gl.drawElements(e, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + 2 * this.drawRange.start)
                        : this.gl.drawArrays(e, this.drawRange.start, this.drawRange.count);
            }
            getPositionArray() {
                const t = this.attributes.position;
                return t.data ? t.data : B ? void 0 : (console.warn("No position buffer data found to compute bounds"), (B = !0));
            }
            computeBoundingBox(t) {
                t || (t = this.getPositionArray()), this.bounds || (this.bounds = { min: new g(), max: new g(), center: new g(), scale: new g(), radius: 1 / 0 });
                const e = this.bounds.min,
                    i = this.bounds.max,
                    s = this.bounds.center,
                    r = this.bounds.scale;
                e.set(1 / 0), i.set(-1 / 0);
                for (let s = 0, r = t.length; s < r; s += 3) {
                    const r = t[s],
                        n = t[s + 1],
                        h = t[s + 2];
                    (e.x = Math.min(r, e.x)), (e.y = Math.min(n, e.y)), (e.z = Math.min(h, e.z)), (i.x = Math.max(r, i.x)), (i.y = Math.max(n, i.y)), (i.z = Math.max(h, i.z));
                }
                r.sub(i, e), s.add(e, i).divide(2);
            }
            computeBoundingSphere(t) {
                t || (t = this.getPositionArray()), this.bounds || this.computeBoundingBox(t);
                let e = 0;
                for (let i = 0, s = t.length; i < s; i += 3) U.fromArray(t, i), (e = Math.max(e, this.bounds.center.squaredDistance(U)));
                this.bounds.radius = Math.sqrt(e);
            }
            remove() {
                this.vao && this.gl.renderer.deleteVertexArray(this.vao);
                for (let t in this.attributes) this.gl.deleteBuffer(this.attributes[t].buffer), delete this.attributes[t];
            }
        }
        class z extends O {
            constructor(t, { width: e = 1, height: i = 1, widthSegments: s = 1, heightSegments: r = 1, attributes: n = {} } = {}) {
                const h = s,
                    a = r,
                    o = (h + 1) * (a + 1),
                    l = h * a * 6,
                    u = new Float32Array(3 * o),
                    c = new Float32Array(3 * o),
                    d = new Float32Array(2 * o),
                    g = o > 65536 ? new Uint32Array(l) : new Uint16Array(l);
                z.buildPlane(u, c, d, g, e, i, 0, h, a), Object.assign(n, { position: { size: 3, data: u }, normal: { size: 3, data: c }, uv: { size: 2, data: d }, index: { data: g } }), super(t, n);
            }
            static buildPlane(t, e, i, s, r, n, h, a, o, l = 0, u = 1, c = 2, d = 1, g = -1, p = 0, m = 0) {
                const f = p,
                    w = r / a,
                    v = n / o;
                for (let x = 0; x <= o; x++) {
                    let b = x * v - n / 2;
                    for (let n = 0; n <= a; n++, p++) {
                        let v = n * w - r / 2;
                        if (
                            ((t[3 * p + l] = v * d),
                            (t[3 * p + u] = b * g),
                            (t[3 * p + c] = h / 2),
                            (e[3 * p + l] = 0),
                            (e[3 * p + u] = 0),
                            (e[3 * p + c] = h >= 0 ? 1 : -1),
                            (i[2 * p] = n / a),
                            (i[2 * p + 1] = 1 - x / o),
                            x === o || n === a)
                        )
                            continue;
                        let E = f + n + x * (a + 1),
                            M = f + n + (x + 1) * (a + 1),
                            y = f + n + (x + 1) * (a + 1) + 1,
                            A = f + n + x * (a + 1) + 1;
                        (s[6 * m] = E), (s[6 * m + 1] = M), (s[6 * m + 2] = A), (s[6 * m + 3] = M), (s[6 * m + 4] = y), (s[6 * m + 5] = A), m++;
                    }
                }
            }
        }
        var G = i(0),
            X = i.n(G);
        function q(t, e, i) {
            return t + (e - t) * i;
        }
        const Y = new Uint8Array(4);
        function V(t) {
            return 0 == (t & (t - 1));
        }
        let W = 1;
        class j {
            constructor(
                t,
                {
                    image: e,
                    target: i = t.TEXTURE_2D,
                    type: s = t.UNSIGNED_BYTE,
                    format: r = t.RGBA,
                    internalFormat: n = r,
                    wrapS: h = t.CLAMP_TO_EDGE,
                    wrapT: a = t.CLAMP_TO_EDGE,
                    generateMipmaps: o = !0,
                    minFilter: l = o ? t.NEAREST_MIPMAP_LINEAR : t.LINEAR,
                    magFilter: u = t.LINEAR,
                    premultiplyAlpha: c = !1,
                    unpackAlignment: d = 4,
                    flipY: g = i == t.TEXTURE_2D,
                    anisotropy: p = 0,
                    level: m = 0,
                    width: f,
                    height: w = f,
                } = {}
            ) {
                (this.gl = t),
                    (this.id = W++),
                    (this.image = e),
                    (this.target = i),
                    (this.type = s),
                    (this.format = r),
                    (this.internalFormat = n),
                    (this.minFilter = l),
                    (this.magFilter = u),
                    (this.wrapS = h),
                    (this.wrapT = a),
                    (this.generateMipmaps = o),
                    (this.premultiplyAlpha = c),
                    (this.unpackAlignment = d),
                    (this.flipY = g),
                    (this.anisotropy = Math.min(p, this.gl.renderer.parameters.maxAnisotropy)),
                    (this.level = m),
                    (this.width = f),
                    (this.height = w),
                    (this.texture = this.gl.createTexture()),
                    (this.store = { image: null }),
                    (this.glState = this.gl.renderer.state),
                    (this.state = {}),
                    (this.state.minFilter = this.gl.NEAREST_MIPMAP_LINEAR),
                    (this.state.magFilter = this.gl.LINEAR),
                    (this.state.wrapS = this.gl.REPEAT),
                    (this.state.wrapT = this.gl.REPEAT),
                    (this.state.anisotropy = 0);
            }
            bind() {
                this.glState.textureUnits[this.glState.activeTextureUnit] !== this.id && (this.gl.bindTexture(this.target, this.texture), (this.glState.textureUnits[this.glState.activeTextureUnit] = this.id));
            }
            update(t = 0) {
                const e = !(this.image === this.store.image && !this.needsUpdate);
                if (((e || this.glState.textureUnits[t] !== this.id) && (this.gl.renderer.activeTexture(t), this.bind()), e)) {
                    if (
                        ((this.needsUpdate = !1),
                        this.flipY !== this.glState.flipY && (this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, this.flipY), (this.glState.flipY = this.flipY)),
                        this.premultiplyAlpha !== this.glState.premultiplyAlpha && (this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), (this.glState.premultiplyAlpha = this.premultiplyAlpha)),
                        this.unpackAlignment !== this.glState.unpackAlignment && (this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, this.unpackAlignment), (this.glState.unpackAlignment = this.unpackAlignment)),
                        this.minFilter !== this.state.minFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MIN_FILTER, this.minFilter), (this.state.minFilter = this.minFilter)),
                        this.magFilter !== this.state.magFilter && (this.gl.texParameteri(this.target, this.gl.TEXTURE_MAG_FILTER, this.magFilter), (this.state.magFilter = this.magFilter)),
                        this.wrapS !== this.state.wrapS && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_S, this.wrapS), (this.state.wrapS = this.wrapS)),
                        this.wrapT !== this.state.wrapT && (this.gl.texParameteri(this.target, this.gl.TEXTURE_WRAP_T, this.wrapT), (this.state.wrapT = this.wrapT)),
                        this.anisotropy &&
                            this.anisotropy !== this.state.anisotropy &&
                            (this.gl.texParameterf(this.target, this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT, this.anisotropy), (this.state.anisotropy = this.anisotropy)),
                        this.image)
                    ) {
                        if ((this.image.width && ((this.width = this.image.width), (this.height = this.image.height)), this.target === this.gl.TEXTURE_CUBE_MAP))
                            for (let t = 0; t < 6; t++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, this.level, this.internalFormat, this.format, this.type, this.image[t]);
                        else if (ArrayBuffer.isView(this.image)) this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
                        else if (this.image.isCompressedTexture)
                            for (let t = 0; t < this.image.length; t++) this.gl.compressedTexImage2D(this.target, t, this.internalFormat, this.image[t].width, this.image[t].height, 0, this.image[t].data);
                        else this.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
                        this.generateMipmaps &&
                            (this.gl.renderer.isWebgl2 || (V(this.image.width) && V(this.image.height))
                                ? this.gl.generateMipmap(this.target)
                                : ((this.generateMipmaps = !1), (this.wrapS = this.wrapT = this.gl.CLAMP_TO_EDGE), (this.minFilter = this.gl.LINEAR))),
                            this.onUpdate && this.onUpdate();
                    } else if (this.target === this.gl.TEXTURE_CUBE_MAP) for (let t = 0; t < 6; t++) this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, Y);
                    else
                        this.width
                            ? this.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null)
                            : this.gl.texImage2D(this.target, 0, this.gl.RGBA, 1, 1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, Y);
                    this.store.image = this.image;
                }
            }
        }
        let k = 1;
        const H = {};
        class Z {
            constructor(t, { vertex: e, fragment: i, uniforms: s = {}, transparent: r = !1, cullFace: n = t.BACK, frontFace: h = t.CCW, depthTest: a = !0, depthWrite: o = !0, depthFunc: l = t.LESS } = {}) {
                t.canvas || console.error("gl not passed as fist argument to Program"),
                    (this.gl = t),
                    (this.uniforms = s),
                    (this.id = k++),
                    e || console.warn("vertex shader not supplied"),
                    i || console.warn("fragment shader not supplied"),
                    (this.transparent = r),
                    (this.cullFace = n),
                    (this.frontFace = h),
                    (this.depthTest = a),
                    (this.depthWrite = o),
                    (this.depthFunc = l),
                    (this.blendFunc = {}),
                    (this.blendEquation = {}),
                    this.transparent && !this.blendFunc.src && (this.gl.renderer.premultipliedAlpha ? this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA) : this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA));
                const u = t.createShader(t.VERTEX_SHADER);
                t.shaderSource(u, e), t.compileShader(u), "" !== t.getShaderInfoLog(u) && console.warn(`${t.getShaderInfoLog(u)}\nVertex Shader\n${Q(e)}`);
                const c = t.createShader(t.FRAGMENT_SHADER);
                if (
                    (t.shaderSource(c, i),
                    t.compileShader(c),
                    "" !== t.getShaderInfoLog(c) && console.warn(`${t.getShaderInfoLog(c)}\nFragment Shader\n${Q(i)}`),
                    (this.program = t.createProgram()),
                    t.attachShader(this.program, u),
                    t.attachShader(this.program, c),
                    t.linkProgram(this.program),
                    !t.getProgramParameter(this.program, t.LINK_STATUS))
                )
                    return console.warn(t.getProgramInfoLog(this.program));
                t.deleteShader(u), t.deleteShader(c), (this.uniformLocations = new Map());
                let d = t.getProgramParameter(this.program, t.ACTIVE_UNIFORMS);
                for (let e = 0; e < d; e++) {
                    let i = t.getActiveUniform(this.program, e);
                    this.uniformLocations.set(i, t.getUniformLocation(this.program, i.name));
                    const s = i.name.match(/(\w+)/g);
                    (i.uniformName = s[0]), 3 === s.length ? ((i.isStructArray = !0), (i.structIndex = Number(s[1])), (i.structProperty = s[2])) : 2 === s.length && isNaN(Number(s[1])) && ((i.isStruct = !0), (i.structProperty = s[1]));
                }
                this.attributeLocations = new Map();
                const g = [],
                    p = t.getProgramParameter(this.program, t.ACTIVE_ATTRIBUTES);
                for (let e = 0; e < p; e++) {
                    const i = t.getActiveAttrib(this.program, e),
                        s = t.getAttribLocation(this.program, i.name);
                    (g[s] = i.name), this.attributeLocations.set(i, s);
                }
                this.attributeOrder = g.join("");
            }
            setBlendFunc(t, e, i, s) {
                (this.blendFunc.src = t), (this.blendFunc.dst = e), (this.blendFunc.srcAlpha = i), (this.blendFunc.dstAlpha = s), t && (this.transparent = !0);
            }
            setBlendEquation(t, e) {
                (this.blendEquation.modeRGB = t), (this.blendEquation.modeAlpha = e);
            }
            applyState() {
                this.depthTest ? this.gl.renderer.enable(this.gl.DEPTH_TEST) : this.gl.renderer.disable(this.gl.DEPTH_TEST),
                    this.cullFace ? this.gl.renderer.enable(this.gl.CULL_FACE) : this.gl.renderer.disable(this.gl.CULL_FACE),
                    this.blendFunc.src ? this.gl.renderer.enable(this.gl.BLEND) : this.gl.renderer.disable(this.gl.BLEND),
                    this.cullFace && this.gl.renderer.setCullFace(this.cullFace),
                    this.gl.renderer.setFrontFace(this.frontFace),
                    this.gl.renderer.setDepthMask(this.depthWrite),
                    this.gl.renderer.setDepthFunc(this.depthFunc),
                    this.blendFunc.src && this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha),
                    this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
            }
            use({ flipFaces: t = !1 } = {}) {
                let e = -1;
                this.gl.renderer.currentProgram === this.id || (this.gl.useProgram(this.program), (this.gl.renderer.currentProgram = this.id)),
                    this.uniformLocations.forEach((t, i) => {
                        let s = i.uniformName,
                            r = this.uniforms[s];
                        if ((i.isStruct && ((r = r[i.structProperty]), (s += "." + i.structProperty)), i.isStructArray && ((r = r[i.structIndex][i.structProperty]), (s += `[${i.structIndex}].${i.structProperty}`)), !r))
                            return J(`Active uniform ${s} has not been supplied`);
                        if (r && void 0 === r.value) return J(s + " uniform is missing a value parameter");
                        if (r.value.texture) return (e += 1), r.value.update(e), $(this.gl, i.type, t, e);
                        if (r.value.length && r.value[0].texture) {
                            const s = [];
                            return (
                                r.value.forEach((t) => {
                                    (e += 1), t.update(e), s.push(e);
                                }),
                                $(this.gl, i.type, t, s)
                            );
                        }
                        $(this.gl, i.type, t, r.value);
                    }),
                    this.applyState(),
                    t && this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
            }
            remove() {
                this.gl.deleteProgram(this.program);
            }
        }
        function $(t, e, i, s) {
            s = s.length
                ? (function (t) {
                      const e = t.length,
                          i = t[0].length;
                      if (void 0 === i) return t;
                      const s = e * i;
                      let r = H[s];
                      r || (H[s] = r = new Float32Array(s));
                      for (let s = 0; s < e; s++) r.set(t[s], s * i);
                      return r;
                  })(s)
                : s;
            const r = t.renderer.state.uniformLocations.get(i);
            if (s.length)
                if (void 0 === r || r.length !== s.length) t.renderer.state.uniformLocations.set(i, s.slice(0));
                else {
                    if (
                        (function (t, e) {
                            if (t.length !== e.length) return !1;
                            for (let i = 0, s = t.length; i < s; i++) if (t[i] !== e[i]) return !1;
                            return !0;
                        })(r, s)
                    )
                        return;
                    r.set
                        ? r.set(s)
                        : (function (t, e) {
                              for (let i = 0, s = t.length; i < s; i++) t[i] = e[i];
                          })(r, s),
                        t.renderer.state.uniformLocations.set(i, r);
                }
            else {
                if (r === s) return;
                t.renderer.state.uniformLocations.set(i, s);
            }
            switch (e) {
                case 5126:
                    return s.length ? t.uniform1fv(i, s) : t.uniform1f(i, s);
                case 35664:
                    return t.uniform2fv(i, s);
                case 35665:
                    return t.uniform3fv(i, s);
                case 35666:
                    return t.uniform4fv(i, s);
                case 35670:
                case 5124:
                case 35678:
                case 35680:
                    return s.length ? t.uniform1iv(i, s) : t.uniform1i(i, s);
                case 35671:
                case 35667:
                    return t.uniform2iv(i, s);
                case 35672:
                case 35668:
                    return t.uniform3iv(i, s);
                case 35673:
                case 35669:
                    return t.uniform4iv(i, s);
                case 35674:
                    return t.uniformMatrix2fv(i, !1, s);
                case 35675:
                    return t.uniformMatrix3fv(i, !1, s);
                case 35676:
                    return t.uniformMatrix4fv(i, !1, s);
            }
        }
        function Q(t) {
            let e = t.split("\n");
            for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
            return e.join("\n");
        }
        let K = 0;
        function J(t) {
            K > 100 || (console.warn(t), K++, K > 100 && console.warn("More than 100 program warnings - stopping logs."));
        }
        function tt(t, e, i) {
            let s = e[0],
                r = e[1],
                n = e[2],
                h = e[3],
                a = e[4],
                o = e[5],
                l = e[6],
                u = e[7],
                c = e[8],
                d = i[0],
                g = i[1],
                p = i[2],
                m = i[3],
                f = i[4],
                w = i[5],
                v = i[6],
                x = i[7],
                b = i[8];
            return (
                (t[0] = d * s + g * h + p * l),
                (t[1] = d * r + g * a + p * u),
                (t[2] = d * n + g * o + p * c),
                (t[3] = m * s + f * h + w * l),
                (t[4] = m * r + f * a + w * u),
                (t[5] = m * n + f * o + w * c),
                (t[6] = v * s + x * h + b * l),
                (t[7] = v * r + x * a + b * u),
                (t[8] = v * n + x * o + b * c),
                t
            );
        }
        class et extends Array {
            constructor(t = 1, e = 0, i = 0, s = 0, r = 1, n = 0, h = 0, a = 0, o = 1) {
                return super(t, e, i, s, r, n, h, a, o), this;
            }
            set(t, e, i, s, r, n, h, a, o) {
                return t.length
                    ? this.copy(t)
                    : ((function (t, e, i, s, r, n, h, a, o, l) {
                          (t[0] = e), (t[1] = i), (t[2] = s), (t[3] = r), (t[4] = n), (t[5] = h), (t[6] = a), (t[7] = o), (t[8] = l);
                      })(this, t, e, i, s, r, n, h, a, o),
                      this);
            }
            translate(t, e = this) {
                return (
                    (function (t, e, i) {
                        let s = e[0],
                            r = e[1],
                            n = e[2],
                            h = e[3],
                            a = e[4],
                            o = e[5],
                            l = e[6],
                            u = e[7],
                            c = e[8],
                            d = i[0],
                            g = i[1];
                        (t[0] = s), (t[1] = r), (t[2] = n), (t[3] = h), (t[4] = a), (t[5] = o), (t[6] = d * s + g * h + l), (t[7] = d * r + g * a + u), (t[8] = d * n + g * o + c);
                    })(this, e, t),
                    this
                );
            }
            rotate(t, e = this) {
                return (
                    (function (t, e, i) {
                        let s = e[0],
                            r = e[1],
                            n = e[2],
                            h = e[3],
                            a = e[4],
                            o = e[5],
                            l = e[6],
                            u = e[7],
                            c = e[8],
                            d = Math.sin(i),
                            g = Math.cos(i);
                        (t[0] = g * s + d * h), (t[1] = g * r + d * a), (t[2] = g * n + d * o), (t[3] = g * h - d * s), (t[4] = g * a - d * r), (t[5] = g * o - d * n), (t[6] = l), (t[7] = u), (t[8] = c);
                    })(this, e, t),
                    this
                );
            }
            scale(t, e = this) {
                return (
                    (function (t, e, i) {
                        let s = i[0],
                            r = i[1];
                        (t[0] = s * e[0]), (t[1] = s * e[1]), (t[2] = s * e[2]), (t[3] = r * e[3]), (t[4] = r * e[4]), (t[5] = r * e[5]), (t[6] = e[6]), (t[7] = e[7]), (t[8] = e[8]);
                    })(this, e, t),
                    this
                );
            }
            multiply(t, e) {
                return e ? tt(this, t, e) : tt(this, this, t), this;
            }
            identity() {
                var t;
                return ((t = this)[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 0), (t[4] = 1), (t[5] = 0), (t[6] = 0), (t[7] = 0), (t[8] = 1), this;
            }
            copy(t) {
                var e, i;
                return (i = t), ((e = this)[0] = i[0]), (e[1] = i[1]), (e[2] = i[2]), (e[3] = i[3]), (e[4] = i[4]), (e[5] = i[5]), (e[6] = i[6]), (e[7] = i[7]), (e[8] = i[8]), this;
            }
            fromMatrix4(t) {
                var e, i;
                return (i = t), ((e = this)[0] = i[0]), (e[1] = i[1]), (e[2] = i[2]), (e[3] = i[4]), (e[4] = i[5]), (e[5] = i[6]), (e[6] = i[8]), (e[7] = i[9]), (e[8] = i[10]), this;
            }
            fromQuaternion(t) {
                return (
                    (function (t, e) {
                        let i = e[0],
                            s = e[1],
                            r = e[2],
                            n = e[3],
                            h = i + i,
                            a = s + s,
                            o = r + r,
                            l = i * h,
                            u = s * h,
                            c = s * a,
                            d = r * h,
                            g = r * a,
                            p = r * o,
                            m = n * h,
                            f = n * a,
                            w = n * o;
                        (t[0] = 1 - c - p), (t[3] = u - w), (t[6] = d + f), (t[1] = u + w), (t[4] = 1 - l - p), (t[7] = g - m), (t[2] = d - f), (t[5] = g + m), (t[8] = 1 - l - c);
                    })(this, t),
                    this
                );
            }
            fromBasis(t, e, i) {
                return this.set(t[0], t[1], t[2], e[0], e[1], e[2], i[0], i[1], i[2]), this;
            }
            inverse(t = this) {
                return (
                    (function (t, e) {
                        let i = e[0],
                            s = e[1],
                            r = e[2],
                            n = e[3],
                            h = e[4],
                            a = e[5],
                            o = e[6],
                            l = e[7],
                            u = e[8],
                            c = u * h - a * l,
                            d = -u * n + a * o,
                            g = l * n - h * o,
                            p = i * c + s * d + r * g;
                        p &&
                            ((p = 1 / p),
                            (t[0] = c * p),
                            (t[1] = (-u * s + r * l) * p),
                            (t[2] = (a * s - r * h) * p),
                            (t[3] = d * p),
                            (t[4] = (u * i - r * o) * p),
                            (t[5] = (-a * i + r * n) * p),
                            (t[6] = g * p),
                            (t[7] = (-l * i + s * o) * p),
                            (t[8] = (h * i - s * n) * p));
                    })(this, t),
                    this
                );
            }
            getNormalMatrix(t) {
                return (
                    (function (t, e) {
                        let i = e[0],
                            s = e[1],
                            r = e[2],
                            n = e[3],
                            h = e[4],
                            a = e[5],
                            o = e[6],
                            l = e[7],
                            u = e[8],
                            c = e[9],
                            d = e[10],
                            g = e[11],
                            p = e[12],
                            m = e[13],
                            f = e[14],
                            w = e[15],
                            v = i * a - s * h,
                            x = i * o - r * h,
                            b = i * l - n * h,
                            E = s * o - r * a,
                            M = s * l - n * a,
                            y = r * l - n * o,
                            A = u * m - c * p,
                            S = u * f - d * p,
                            T = u * w - g * p,
                            _ = c * f - d * m,
                            F = c * w - g * m,
                            R = d * w - g * f,
                            P = v * R - x * F + b * _ + E * T - M * S + y * A;
                        P &&
                            ((P = 1 / P),
                            (t[0] = (a * R - o * F + l * _) * P),
                            (t[1] = (o * T - h * R - l * S) * P),
                            (t[2] = (h * F - a * T + l * A) * P),
                            (t[3] = (r * F - s * R - n * _) * P),
                            (t[4] = (i * R - r * T + n * S) * P),
                            (t[5] = (s * T - i * F - n * A) * P),
                            (t[6] = (m * y - f * M + w * E) * P),
                            (t[7] = (f * b - p * y - w * x) * P),
                            (t[8] = (p * M - m * b + w * v) * P));
                    })(this, t),
                    this
                );
            }
        }
        let it = 0;
        class st extends R {
            constructor(t, { geometry: e, program: i, mode: s = t.TRIANGLES, frustumCulled: r = !0, renderOrder: n = 0 } = {}) {
                super(),
                    t.canvas || console.error("gl not passed as first argument to Mesh"),
                    (this.gl = t),
                    (this.id = it++),
                    (this.geometry = e),
                    (this.program = i),
                    (this.mode = s),
                    (this.frustumCulled = r),
                    (this.renderOrder = n),
                    (this.modelViewMatrix = new T()),
                    (this.normalMatrix = new et()),
                    (this.beforeRenderCallbacks = []),
                    (this.afterRenderCallbacks = []);
            }
            onBeforeRender(t) {
                return this.beforeRenderCallbacks.push(t), this;
            }
            onAfterRender(t) {
                return this.afterRenderCallbacks.push(t), this;
            }
            draw({ camera: t } = {}) {
                this.beforeRenderCallbacks.forEach((e) => e && e({ mesh: this, camera: t })),
                    t &&
                        (this.program.uniforms.modelMatrix ||
                            Object.assign(this.program.uniforms, {
                                modelMatrix: { value: null },
                                viewMatrix: { value: null },
                                modelViewMatrix: { value: null },
                                normalMatrix: { value: null },
                                projectionMatrix: { value: null },
                                cameraPosition: { value: null },
                            }),
                        (this.program.uniforms.projectionMatrix.value = t.projectionMatrix),
                        (this.program.uniforms.cameraPosition.value = t.worldPosition),
                        (this.program.uniforms.viewMatrix.value = t.viewMatrix),
                        this.modelViewMatrix.multiply(t.viewMatrix, this.worldMatrix),
                        this.normalMatrix.getNormalMatrix(this.modelViewMatrix),
                        (this.program.uniforms.modelMatrix.value = this.worldMatrix),
                        (this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix),
                        (this.program.uniforms.normalMatrix.value = this.normalMatrix));
                let e = this.program.cullFace && this.worldMatrix.determinant() < 0;
                this.program.use({ flipFaces: e }), this.geometry.draw({ mode: this.mode, program: this.program }), this.afterRenderCallbacks.forEach((e) => e && e({ mesh: this, camera: t }));
            }
        }
        class rt {
            constructor(
                t,
                {
                    width: e = t.canvas.width,
                    height: i = t.canvas.height,
                    target: s = t.FRAMEBUFFER,
                    color: r = 1,
                    depth: n = !0,
                    stencil: h = !1,
                    depthTexture: a = !1,
                    wrapS: o = t.CLAMP_TO_EDGE,
                    wrapT: l = t.CLAMP_TO_EDGE,
                    minFilter: u = t.LINEAR,
                    magFilter: c = u,
                    type: d = t.UNSIGNED_BYTE,
                    format: g = t.RGBA,
                    internalFormat: p = g,
                    unpackAlignment: m,
                    premultiplyAlpha: f,
                } = {}
            ) {
                (this.gl = t), (this.width = e), (this.height = i), (this.depth = n), (this.buffer = this.gl.createFramebuffer()), (this.target = s), this.gl.bindFramebuffer(this.target, this.buffer), (this.textures = []);
                const w = [];
                for (let s = 0; s < r; s++)
                    this.textures.push(new j(t, { width: e, height: i, wrapS: o, wrapT: l, minFilter: u, magFilter: c, type: d, format: g, internalFormat: p, unpackAlignment: m, premultiplyAlpha: f, flipY: !1, generateMipmaps: !1 })),
                        this.textures[s].update(),
                        this.gl.framebufferTexture2D(this.target, this.gl.COLOR_ATTACHMENT0 + s, this.gl.TEXTURE_2D, this.textures[s].texture, 0),
                        w.push(this.gl.COLOR_ATTACHMENT0 + s);
                w.length > 1 && this.gl.renderer.drawBuffers(w),
                    (this.texture = this.textures[0]),
                    a && (this.gl.renderer.isWebgl2 || this.gl.renderer.getExtension("WEBGL_depth_texture"))
                        ? ((this.depthTexture = new j(t, {
                              width: e,
                              height: i,
                              minFilter: this.gl.NEAREST,
                              magFilter: this.gl.NEAREST,
                              format: this.gl.DEPTH_COMPONENT,
                              internalFormat: t.renderer.isWebgl2 ? this.gl.DEPTH_COMPONENT16 : this.gl.DEPTH_COMPONENT,
                              type: this.gl.UNSIGNED_INT,
                          })),
                          this.depthTexture.update(),
                          this.gl.framebufferTexture2D(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.TEXTURE_2D, this.depthTexture.texture, 0))
                        : (n &&
                              !h &&
                              ((this.depthBuffer = this.gl.createRenderbuffer()),
                              this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer),
                              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, e, i),
                              this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer)),
                          h &&
                              !n &&
                              ((this.stencilBuffer = this.gl.createRenderbuffer()),
                              this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.stencilBuffer),
                              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.STENCIL_INDEX8, e, i),
                              this.gl.framebufferRenderbuffer(this.target, this.gl.STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.stencilBuffer)),
                          n &&
                              h &&
                              ((this.depthStencilBuffer = this.gl.createRenderbuffer()),
                              this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthStencilBuffer),
                              this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_STENCIL, e, i),
                              this.gl.framebufferRenderbuffer(this.target, this.gl.DEPTH_STENCIL_ATTACHMENT, this.gl.RENDERBUFFER, this.depthStencilBuffer))),
                    this.gl.bindFramebuffer(this.target, null);
            }
        }
        class nt extends O {
            constructor(t, { attributes: e = {} } = {}) {
                Object.assign(e, { position: { size: 2, data: new Float32Array([-1, -1, 3, -1, -1, 3]) }, uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) } }), super(t, e);
            }
        }
        class ht {
            constructor(t, { width: e, height: i, dpr: s, wrapS: r = t.CLAMP_TO_EDGE, wrapT: n = t.CLAMP_TO_EDGE, minFilter: h = t.LINEAR, magFilter: a = t.LINEAR, geometry: o = new nt(t), targetOnly: l = null } = {}) {
                (this.gl = t), (this.options = { wrapS: r, wrapT: n, minFilter: h, magFilter: a }), (this.passes = []), (this.geometry = o), (this.uniform = { value: null }), (this.targetOnly = l);
                const u = (this.fbo = {
                    read: null,
                    write: null,
                    swap: () => {
                        let t = u.read;
                        (u.read = u.write), (u.write = t);
                    },
                });
                this.resize({ width: e, height: i, dpr: s });
            }
            addPass({ vertex: t = at, fragment: e = ot, uniforms: i = {}, textureUniform: s = "tMap", enabled: r = !0 } = {}) {
                i[s] = { value: this.fbo.read.texture };
                const n = new Z(this.gl, { vertex: t, fragment: e, uniforms: i }),
                    h = { mesh: new st(this.gl, { geometry: this.geometry, program: n }), program: n, uniforms: i, enabled: r, textureUniform: s };
                return this.passes.push(h), h;
            }
            resize({ width: t, height: e, dpr: i } = {}) {
                i && (this.dpr = i),
                    t && ((this.width = t), (this.height = e || t)),
                    (i = this.dpr || this.gl.renderer.dpr),
                    (t = (this.width || this.gl.renderer.width) * i),
                    (e = (this.height || this.gl.renderer.height) * i),
                    (this.options.width = t),
                    (this.options.height = e),
                    (this.fbo.read = new rt(this.gl, this.options)),
                    (this.fbo.write = new rt(this.gl, this.options));
            }
            render({ scene: t, camera: e, target: i = null, update: s = !0, sort: r = !0, frustumCull: n = !0 }) {
                const h = this.passes.filter((t) => t.enabled);
                this.gl.renderer.render({ scene: t, camera: e, target: h.length || (!i && this.targetOnly) ? this.fbo.write : i, update: s, sort: r, frustumCull: n }),
                    this.fbo.swap(),
                    h.forEach((t, e) => {
                        (t.mesh.program.uniforms[t.textureUniform].value = this.fbo.read.texture),
                            this.gl.renderer.render({ scene: t.mesh, target: e !== h.length - 1 || (!i && this.targetOnly) ? this.fbo.write : i, clear: !0 }),
                            this.fbo.swap();
                    }),
                    (this.uniform.value = this.fbo.read.texture);
            }
        }
        const at = "\n    attribute vec2 uv;\n    attribute vec2 position;\n\n    varying vec2 vUv;\n\n    void main() {\n        vUv = uv;\n        gl_Position = vec4(position, 0, 1);\n    }\n",
            ot = "\n    precision highp float;\n\n    uniform sampler2D tMap;\n    varying vec2 vUv;\n\n    void main() {\n        gl_FragColor = texture2D(tMap, vUv);\n    }\n";
        function lt(t, e, i) {
            return (t[0] = e[0] + i[0]), (t[1] = e[1] + i[1]), t;
        }
        function ut(t, e, i) {
            return (t[0] = e[0] - i[0]), (t[1] = e[1] - i[1]), t;
        }
        function ct(t, e, i) {
            return (t[0] = e[0] * i), (t[1] = e[1] * i), t;
        }
        function dt(t) {
            var e = t[0],
                i = t[1];
            return Math.sqrt(e * e + i * i);
        }
        function gt(t, e) {
            return t[0] * e[1] - t[1] * e[0];
        }
        class pt extends Array {
            constructor(t = 0, e = t) {
                return super(t, e), this;
            }
            get x() {
                return this[0];
            }
            get y() {
                return this[1];
            }
            set x(t) {
                this[0] = t;
            }
            set y(t) {
                this[1] = t;
            }
            set(t, e = t) {
                return t.length
                    ? this.copy(t)
                    : ((function (t, e, i) {
                          (t[0] = e), (t[1] = i);
                      })(this, t, e),
                      this);
            }
            copy(t) {
                var e, i;
                return (i = t), ((e = this)[0] = i[0]), (e[1] = i[1]), this;
            }
            add(t, e) {
                return e ? lt(this, t, e) : lt(this, this, t), this;
            }
            sub(t, e) {
                return e ? ut(this, t, e) : ut(this, this, t), this;
            }
            multiply(t) {
                var e, i, s;
                return t.length ? ((i = this), (s = t), ((e = this)[0] = i[0] * s[0]), (e[1] = i[1] * s[1])) : ct(this, this, t), this;
            }
            divide(t) {
                var e, i, s;
                return t.length ? ((i = this), (s = t), ((e = this)[0] = i[0] / s[0]), (e[1] = i[1] / s[1])) : ct(this, this, 1 / t), this;
            }
            inverse(t = this) {
                var e, i;
                return (i = t), ((e = this)[0] = 1 / i[0]), (e[1] = 1 / i[1]), this;
            }
            len() {
                return dt(this);
            }
            distance(t) {
                return t ? ((e = this), (s = (i = t)[0] - e[0]), (r = i[1] - e[1]), Math.sqrt(s * s + r * r)) : dt(this);
                var e, i, s, r;
            }
            squaredLen() {
                return this.squaredDistance();
            }
            squaredDistance(t) {
                return t
                    ? ((e = this), (s = (i = t)[0] - e[0]), (r = i[1] - e[1]), s * s + r * r)
                    : (function (t) {
                          var e = t[0],
                              i = t[1];
                          return e * e + i * i;
                      })(this);
                var e, i, s, r;
            }
            negate(t = this) {
                var e, i;
                return (i = t), ((e = this)[0] = -i[0]), (e[1] = -i[1]), this;
            }
            cross(t, e) {
                return e ? gt(t, e) : gt(this, t);
            }
            scale(t) {
                return ct(this, this, t), this;
            }
            normalize() {
                var t, e, i, s, r;
                return (t = this), (i = (e = this)[0]), (s = e[1]), (r = i * i + s * s) > 0 && (r = 1 / Math.sqrt(r)), (t[0] = e[0] * r), (t[1] = e[1] * r), this;
            }
            dot(t) {
                return (i = t), (e = this)[0] * i[0] + e[1] * i[1];
                var e, i;
            }
            equals(t) {
                return (i = t), (e = this)[0] === i[0] && e[1] === i[1];
                var e, i;
            }
            applyMatrix3(t) {
                var e, i, s, r, n;
                return (e = this), (s = t), (r = (i = this)[0]), (n = i[1]), (e[0] = s[0] * r + s[3] * n + s[6]), (e[1] = s[1] * r + s[4] * n + s[7]), this;
            }
            applyMatrix4(t) {
                return (
                    (function (t, e, i) {
                        let s = e[0],
                            r = e[1];
                        (t[0] = i[0] * s + i[4] * r + i[12]), (t[1] = i[1] * s + i[5] * r + i[13]);
                    })(this, this, t),
                    this
                );
            }
            lerp(t, e) {
                !(function (t, e, i, s) {
                    var r = e[0],
                        n = e[1];
                    (t[0] = r + s * (i[0] - r)), (t[1] = n + s * (i[1] - n));
                })(this, this, t, e);
            }
            clone() {
                return new pt(this[0], this[1]);
            }
            fromArray(t, e = 0) {
                return (this[0] = t[e]), (this[1] = t[e + 1]), this;
            }
            toArray(t = [], e = 0) {
                return (t[e] = this[0]), (t[e + 1] = this[1]), t;
            }
        }
        new [
            class {
                constructor() {
                    (this.scroll = { ease: 0.05, current: 0, target: 0, last: 0 }),
                        (this.speed = 2),
                        this.createRenderer(),
                        this.createCamera(),
                        this.createScene(),
                        this.createGallery(),
                        this.onResize(),
                        this.createGeometry(),
                        this.createMedias(),
                        this.update(),
                        this.addEventListeners();
                }
                createGallery() {
                    this.gallery = document.querySelector(".demo-1__gallery");
                }
                createRenderer() {
                    (this.renderer = new f({ alpha: !0 })), (this.gl = this.renderer.gl), document.body.appendChild(this.gl.canvas);
                }
                createCamera() {
                    (this.camera = new I(this.gl)), (this.camera.fov = 45), (this.camera.position.z = 5);
                }
                createScene() {
                    this.scene = new R();
                }
                createGeometry() {
                    this.planeGeometry = new z(this.gl, { heightSegments: 10 });
                }
                createMedias() {
                    (this.mediasElements = document.querySelectorAll(".demo-1__gallery__figure")),
                        (this.medias = Array.from(this.mediasElements).map(
                            (t) =>
                                new (class {
                                    constructor({ element: t, geometry: e, gl: i, height: s, scene: r, screen: n, viewport: h }) {
                                        (this.element = t),
                                            (this.image = this.element.querySelector("img")),
                                            (this.extra = 0),
                                            (this.height = s),
                                            (this.geometry = e),
                                            (this.gl = i),
                                            (this.scene = r),
                                            (this.screen = n),
                                            (this.viewport = h),
                                            this.createMesh(),
                                            this.createBounds(),
                                            this.onResize();
                                    }
                                    createMesh() {
                                        const t = new Image(),
                                            e = new j(this.gl);
                                        (t.src = this.image.src),
                                            (t.onload = (s) => {
                                                (i.uniforms.uImageSizes.value = [t.naturalWidth, t.naturalHeight]), (e.image = t);
                                            });
                                        const i = new Z(this.gl, {
                                            fragment:
                                                "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 uImageSizes;\nuniform vec2 uPlaneSizes;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 ratio = vec2(\n    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),\n    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)\n  );\n\n  vec2 uv = vec2(\n    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );\n\n  gl_FragColor.rgb = texture2D(tMap, uv).rgb;\n  gl_FragColor.a = 1.0;\n}\n",
                                            vertex:
                                                "#define PI 3.1415926535897932384626433832795\n\nprecision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float uStrength;\nuniform vec2 uViewportSizes;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n  newPosition.z += sin(newPosition.y / uViewportSizes.y * PI + PI / 2.0) * -uStrength;\n\n  vUv = uv;\n\n  gl_Position = projectionMatrix * newPosition;\n}\n",
                                            uniforms: { tMap: { value: e }, uPlaneSizes: { value: [0, 0] }, uImageSizes: { value: [0, 0] }, uViewportSizes: { value: [this.viewport.width, this.viewport.height] }, uStrength: { value: 0 } },
                                            transparent: !0,
                                        });
                                        (this.plane = new st(this.gl, { geometry: this.geometry, program: i })), this.plane.setParent(this.scene);
                                    }
                                    createBounds() {
                                        (this.bounds = this.element.getBoundingClientRect()), this.updateScale(), this.updateX(), this.updateY(), (this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y]);
                                    }
                                    updateScale() {
                                        (this.plane.scale.x = (this.viewport.width * this.bounds.width) / this.screen.width), (this.plane.scale.y = (this.viewport.height * this.bounds.height) / this.screen.height);
                                    }
                                    updateX(t = 0) {
                                        this.plane.position.x = -this.viewport.width / 2 + this.plane.scale.x / 2 + ((this.bounds.left - t) / this.screen.width) * this.viewport.width;
                                    }
                                    updateY(t = 0) {
                                        this.plane.position.y = this.viewport.height / 2 - this.plane.scale.y / 2 - ((this.bounds.top - t) / this.screen.height) * this.viewport.height - this.extra;
                                    }
                                    update(t, e) {
                                        this.updateScale(), this.updateX(), this.updateY(t.current);
                                        const i = this.plane.scale.y / 2,
                                            s = this.viewport.height / 2;
                                        (this.isBefore = this.plane.position.y + i < -s),
                                            (this.isAfter = this.plane.position.y - i > s),
                                            "up" === e && this.isBefore && ((this.extra -= this.height), (this.isBefore = !1), (this.isAfter = !1)),
                                            "down" === e && this.isAfter && ((this.extra += this.height), (this.isBefore = !1), (this.isAfter = !1)),
                                            (this.plane.program.uniforms.uStrength.value = ((t.current - t.last) / this.screen.width) * 10);
                                    }
                                    onResize(t) {
                                        if (((this.extra = 0), t)) {
                                            const { height: e, screen: i, viewport: s } = t;
                                            e && (this.height = e), i && (this.screen = i), s && ((this.viewport = s), (this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height]));
                                        }
                                        this.createBounds();
                                    }
                                })({ element: t, geometry: this.planeGeometry, gl: this.gl, height: this.galleryHeight, scene: this.scene, screen: this.screen, viewport: this.viewport })
                        ));
                }
                onTouchDown(t) {
                    (this.isDown = !0), (this.scroll.position = this.scroll.current), (this.start = t.touches ? t.touches[0].clientY : t.clientY);
                }
                onTouchMove(t) {
                    if (!this.isDown) return;
                    const e = t.touches ? t.touches[0].clientY : t.clientY,
                        i = 2 * (this.start - e);
                    this.scroll.target = this.scroll.position + i;
                }
                onTouchUp(t) {
                    this.isDown = !1;
                }
                onWheel(t) {
                    const e = X()(t).pixelY;
                    this.scroll.target += 0.5 * e;
                }
                onResize() {
                    (this.screen = { height: window.innerHeight, width: window.innerWidth }), this.renderer.setSize(this.screen.width, this.screen.height), this.camera.perspective({ aspect: this.gl.canvas.width / this.gl.canvas.height });
                    const t = this.camera.fov * (Math.PI / 180),
                        e = 2 * Math.tan(t / 2) * this.camera.position.z,
                        i = e * this.camera.aspect;
                    (this.viewport = { height: e, width: i }),
                        (this.galleryBounds = this.gallery.getBoundingClientRect()),
                        (this.galleryHeight = (this.viewport.height * this.galleryBounds.height) / this.screen.height),
                        this.medias && this.medias.forEach((t) => t.onResize({ height: this.galleryHeight, screen: this.screen, viewport: this.viewport }));
                }
                update() {
                    (this.scroll.target += this.speed),
                        (this.scroll.current = q(this.scroll.current, this.scroll.target, this.scroll.ease)),
                        this.scroll.current > this.scroll.last ? ((this.direction = "down"), (this.speed = 2)) : this.scroll.current < this.scroll.last && ((this.direction = "up"), (this.speed = -2)),
                        this.medias && this.medias.forEach((t) => t.update(this.scroll, this.direction)),
                        this.renderer.render({ scene: this.scene, camera: this.camera }),
                        (this.scroll.last = this.scroll.current),
                        window.requestAnimationFrame(this.update.bind(this));
                }
                addEventListeners() {
                    window.addEventListener("resize", this.onResize.bind(this)),
                        window.addEventListener("mousewheel", this.onWheel.bind(this)),
                        window.addEventListener("wheel", this.onWheel.bind(this)),
                        window.addEventListener("mousedown", this.onTouchDown.bind(this)),
                        window.addEventListener("mousemove", this.onTouchMove.bind(this)),
                        window.addEventListener("mouseup", this.onTouchUp.bind(this)),
                        window.addEventListener("touchstart", this.onTouchDown.bind(this)),
                        window.addEventListener("touchmove", this.onTouchMove.bind(this)),
                        window.addEventListener("touchend", this.onTouchUp.bind(this));
                }
            },
            class {
                constructor() {
                    (this.scroll = { ease: 0.05, current: 0, target: 0, last: 0 }),
                        (this.speed = 2),
                        this.createRenderer(),
                        this.createCamera(),
                        this.createScene(),
                        this.createGallery(),
                        this.createPost(),
                        this.onResize(),
                        this.createGeometry(),
                        this.createMedias(),
                        this.update(),
                        this.addEventListeners();
                }
                createGallery() {
                    this.gallery = document.querySelector(".demo-2__gallery");
                }
                createRenderer() {
                    (this.renderer = new f({ alpha: !0 })), (this.gl = this.renderer.gl), document.body.appendChild(this.gl.canvas);
                }
                createCamera() {
                    (this.camera = new I(this.gl)), (this.camera.fov = 45), (this.camera.position.z = 5);
                }
                createScene() {
                    this.scene = new R();
                }
                createPost() {
                    (this.post = new ht(this.gl)),
                        (this.pass = this.post.addPass({
                            fragment:
                                "precision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D tMap;\n\nuniform vec2 uResolution;\nuniform float uStrength;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec3 color;\n\n  color.r = texture2D(tMap, vec2(vUv.x + uStrength, vUv.y)).r;\n  color.g = texture2D(tMap, vUv).g;\n  color.b = texture2D(tMap, vec2(vUv.x - uStrength, vUv.y)).b;\n\n  gl_FragColor = vec4(color, 1.0);\n}\n",
                            uniforms: { uResolution: this.resolution, uStrength: { value: 0 } },
                        })),
                        (this.resolution = { value: new pt() });
                }
                createGeometry() {
                    this.planeGeometry = new z(this.gl, { widthSegments: 20 });
                }
                createMedias() {
                    (this.mediasElements = document.querySelectorAll(".demo-2__gallery__figure")),
                        (this.medias = Array.from(this.mediasElements).map(
                            (t) =>
                                new (class {
                                    constructor({ element: t, geometry: e, gl: i, scene: s, screen: r, viewport: n, width: h }) {
                                        (this.element = t),
                                            (this.image = this.element.querySelector("img")),
                                            (this.extra = 0),
                                            (this.geometry = e),
                                            (this.gl = i),
                                            (this.scene = s),
                                            (this.screen = r),
                                            (this.viewport = n),
                                            (this.width = h),
                                            this.createMesh(),
                                            this.createBounds(),
                                            this.onResize();
                                    }
                                    createMesh() {
                                        const t = new Image(),
                                            e = new j(this.gl);
                                        (t.src = this.image.src),
                                            (t.onload = (s) => {
                                                (i.uniforms.uImageSizes.value = [t.naturalWidth, t.naturalHeight]), (e.image = t);
                                            });
                                        const i = new Z(this.gl, {
                                            fragment:
                                                "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 uImageSizes;\nuniform vec2 uPlaneSizes;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 ratio = vec2(\n    min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),\n    min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)\n  );\n\n  vec2 uv = vec2(\n    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );\n\n  gl_FragColor.rgb = texture2D(tMap, uv).rgb;\n  gl_FragColor.a = 1.0;\n}\n",
                                            vertex:
                                                "#define PI 3.1415926535897932384626433832795\n\nprecision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nuniform float uStrength;\nuniform vec2 uViewportSizes;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n  newPosition.z += -abs(sin(newPosition.x / uViewportSizes.x * PI + PI / 2.0) * uStrength);\n\n  vUv = uv;\n\n  gl_Position = projectionMatrix * newPosition;\n}\n",
                                            uniforms: { tMap: { value: e }, uPlaneSizes: { value: [0, 0] }, uImageSizes: { value: [0, 0] }, uViewportSizes: { value: [this.viewport.width, this.viewport.height] }, uStrength: { value: 0 } },
                                            transparent: !0,
                                        });
                                        (this.plane = new st(this.gl, { geometry: this.geometry, program: i })), this.plane.setParent(this.scene);
                                    }
                                    createBounds() {
                                        (this.bounds = this.element.getBoundingClientRect()), this.updateScale(), this.updateX(), this.updateY(), (this.plane.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y]);
                                    }
                                    updateScale() {
                                        (this.plane.scale.x = (this.viewport.width * this.bounds.width) / this.screen.width), (this.plane.scale.y = (this.viewport.height * this.bounds.height) / this.screen.height);
                                    }
                                    updateX(t = 0) {
                                        this.plane.position.x = -this.viewport.width / 2 + this.plane.scale.x / 2 + ((this.bounds.left - t) / this.screen.width) * this.viewport.width - this.extra;
                                    }
                                    updateY(t = 0) {
                                        this.plane.position.y = this.viewport.height / 2 - this.plane.scale.y / 2 - ((this.bounds.top - t) / this.screen.height) * this.viewport.height;
                                    }
                                    update(t, e) {
                                        this.updateScale(), this.updateX(t.current), this.updateY();
                                        const i = this.plane.scale.x / 2,
                                            s = this.viewport.width / 2;
                                        (this.isBefore = this.plane.position.x + i < -s),
                                            (this.isAfter = this.plane.position.x - i > s),
                                            "down" === e && this.isBefore && ((this.extra -= this.width), (this.isBefore = !1), (this.isAfter = !1)),
                                            "up" === e && this.isAfter && ((this.extra += this.width), (this.isBefore = !1), (this.isAfter = !1)),
                                            (this.plane.program.uniforms.uStrength.value = ((t.current - t.last) / this.screen.width) * 5);
                                    }
                                    onResize(t) {
                                        if (((this.extra = 0), t)) {
                                            const { width: e, screen: i, viewport: s } = t;
                                            e && (this.width = e), i && (this.screen = i), s && ((this.viewport = s), (this.plane.program.uniforms.uViewportSizes.value = [this.viewport.width, this.viewport.height]));
                                        }
                                        this.createBounds();
                                    }
                                })({ element: t, geometry: this.planeGeometry, gl: this.gl, scene: this.scene, screen: this.screen, viewport: this.viewport, width: this.galleryWidth })
                        ));
                }
                onTouchDown(t) {
                    (this.isDown = !0), (this.scroll.position = this.scroll.current), (this.start = t.touches ? t.touches[0].clientX : t.clientX);
                }
                onTouchMove(t) {
                    if (!this.isDown) return;
                    const e = t.touches ? t.touches[0].clientX : t.clientX,
                        i = 2 * (this.start - e);
                    this.scroll.target = this.scroll.position + i;
                }
                onTouchUp(t) {
                    this.isDown = !1;
                }
                onWheel(t) {
                    const e = X()(t).pixelY;
                    this.scroll.target += 0.5 * e;
                }
                onResize() {
                    (this.screen = { height: window.innerHeight, width: window.innerWidth }), this.renderer.setSize(this.screen.width, this.screen.height), this.camera.perspective({ aspect: this.gl.canvas.width / this.gl.canvas.height });
                    const t = this.camera.fov * (Math.PI / 180),
                        e = 2 * Math.tan(t / 2) * this.camera.position.z,
                        i = e * this.camera.aspect;
                    (this.viewport = { height: e, width: i }),
                        this.post.resize(),
                        this.resolution.value.set(this.gl.canvas.width, this.gl.canvas.height),
                        (this.galleryBounds = this.gallery.getBoundingClientRect()),
                        (this.galleryWidth = (this.viewport.width * this.galleryBounds.width) / this.screen.width),
                        this.medias && this.medias.forEach((t) => t.onResize({ screen: this.screen, viewport: this.viewport, width: this.galleryWidth }));
                }
                update() {
                    (this.scroll.target += this.speed),
                        (this.scroll.current = q(this.scroll.current, this.scroll.target, this.scroll.ease)),
                        this.scroll.current > this.scroll.last ? ((this.direction = "down"), (this.speed = 2)) : this.scroll.current < this.scroll.last && ((this.direction = "up"), (this.speed = -2)),
                        this.medias && this.medias.forEach((t) => t.update(this.scroll, this.direction)),
                        (this.pass.uniforms.uStrength.value = ((this.scroll.current - this.scroll.last) / this.screen.width) * 0.5),
                        this.post.render({ scene: this.scene, camera: this.camera }),
                        (this.scroll.last = this.scroll.current),
                        window.requestAnimationFrame(this.update.bind(this));
                }
                addEventListeners() {
                    window.addEventListener("resize", this.onResize.bind(this)),
                        window.addEventListener("mousewheel", this.onWheel.bind(this)),
                        window.addEventListener("wheel", this.onWheel.bind(this)),
                        window.addEventListener("mousedown", this.onTouchDown.bind(this)),
                        window.addEventListener("mousemove", this.onTouchMove.bind(this)),
                        window.addEventListener("mouseup", this.onTouchUp.bind(this)),
                        window.addEventListener("touchstart", this.onTouchDown.bind(this)),
                        window.addEventListener("touchmove", this.onTouchMove.bind(this)),
                        window.addEventListener("touchend", this.onTouchUp.bind(this));
                }
            },
        ][document.body.getAttribute("data-id")](),
            document.documentElement.classList.remove("no-js"),
            document.documentElement.classList.add("js");
        const mt = document.querySelectorAll('img:not([src*="https://tympanus.net/codrops/wp-content/banners/"])');
        let ft = 0;
        Array.from(mt).forEach((t) => {
            const e = new Image();
            (e.src = t.src),
                (e.onload = (t) => {
                    (ft += 1), ft === mt.length && (document.documentElement.classList.remove("loading"), document.documentElement.classList.add("loaded"));
                });
        });
    },
]);
