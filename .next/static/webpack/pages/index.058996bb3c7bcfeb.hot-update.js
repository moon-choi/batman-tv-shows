"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\n\n\n\nvar Index = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Batman TV Shows\"\n            }, void 0, false, {\n                fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: props.shows.map(function(show) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: \"/p/[id]\",\n                            as: \"/p/\".concat(show.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: show.name\n                            }, void 0, false, {\n                                fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n                                lineNumber: 12,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n                            lineNumber: 11,\n                            columnNumber: 11\n                        }, _this)\n                    }, show.id, false, {\n                        fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, _this);\n};\n_c = Index;\nIndex.getInitialProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var res, data;\n    return _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(\"https://api.tvmaze.com/search/shows?q=batman\");\n            case 2:\n                res = _ctx.sent;\n                _ctx.next = 5;\n                return res.json();\n            case 5:\n                data = _ctx.sent;\n                console.log(\"Show data fetched. Count: \".concat(data.length));\n                return _ctx.abrupt(\"return\", {\n                    shows: data.map(function(entry) {\n                        return entry.show;\n                    })\n                });\n            case 8:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQXNDO0FBQ0s7QUFDZjtBQUU1QixJQUFNRyxLQUFLLEdBQUdDLFNBQUFBLEtBQUs7eUJBQ2pCLDhEQUFDSCw0REFBTTs7MEJBQ0wsOERBQUNJLElBQUU7MEJBQUMsaUJBQWU7Ozs7O3FCQUFLOzBCQUN4Qiw4REFBQ0MsSUFBRTswQkFDQUYsS0FBSyxDQUFDRyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTt5Q0FDbkIsOERBQUNDLElBQUU7a0NBQ0QsNEVBQUNSLGtEQUFJOzRCQUFDUyxJQUFJLEVBQUMsU0FBUzs0QkFBQ0MsRUFBRSxFQUFFLEtBQUksQ0FBVSxPQUFSSCxJQUFJLENBQUNJLEVBQUUsQ0FBRTtzQ0FDdEMsNEVBQUNDLEdBQUM7MENBQUVMLElBQUksQ0FBQ00sSUFBSTs7Ozs7cUNBQUs7Ozs7O2lDQUNiO3VCQUhBTixJQUFJLENBQUNJLEVBQUU7Ozs7NkJBSVg7aUJBQ04sQ0FBQzs7Ozs7cUJBQ0M7Ozs7OzthQUNFO0NBQ1Y7QUFiS1YsS0FBQUEsS0FBSztBQWVYQSxLQUFLLENBQUNhLGVBQWUsR0FBRyxzUEFBa0I7UUFDbENDLEdBQUcsRUFDSEMsSUFBSTs7Ozs7dUJBRFFsQix5REFBSyxDQUFDLDhDQUE4QyxDQUFDOztnQkFBakVpQixHQUFHLFlBQThEOzt1QkFDcERBLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFOztnQkFBdkJELElBQUksWUFBbUI7Z0JBRTdCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBMkIsQ0FBYyxPQUFaSCxJQUFJLENBQUNJLE1BQU0sQ0FBRSxDQUFDOzZDQUVoRDtvQkFDTGYsS0FBSyxFQUFFVyxJQUFJLENBQUNWLEdBQUcsQ0FBQ2UsU0FBQUEsS0FBSzsrQkFBSUEsS0FBSyxDQUFDZCxJQUFJO3FCQUFBLENBQUM7aUJBQ3JDOzs7Ozs7Q0FDRjtBQUVELCtEQUFlTixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4gICAgPHVsPlxuICAgICAge3Byb3BzLnNob3dzLm1hcChzaG93ID0+IChcbiAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cbiAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIDwvTGF5b3V0PlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJuYW1lcyI6WyJmZXRjaCIsIkxheW91dCIsIkxpbmsiLCJJbmRleCIsInByb3BzIiwiaDEiLCJ1bCIsInNob3dzIiwibWFwIiwic2hvdyIsImxpIiwiaHJlZiIsImFzIiwiaWQiLCJhIiwibmFtZSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImVudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});