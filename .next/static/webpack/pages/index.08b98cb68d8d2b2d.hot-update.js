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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\n\n\n\n/* method 1\nimport withLayout from '../components/Layout'\nconst Page = () => <p>Hello Next.js</p>\nexport default withLayout(Page)\n*/ /* method 0\nexport default function Index() {\n  return (\n    <Layout>\n      <p>this is index.js page</p>\n    </Layout>\n  )\n}\n*/ var PostLink = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/p/[id]\",\n            as: \"/p/\".concat(props.id),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                children: props.id\n            }, void 0, false, {\n                fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n            lineNumber: 24,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n        lineNumber: 23,\n        columnNumber: 3\n    }, _this);\n};\n_c = PostLink;\n/*\nconst PostLink = props => (\n  <li>\n    <Link href={`/post?title=${props.title}`}>\n      <a>{props.title}</a>\n    </Link>\n  </li>\n)\n*/ // export default function Blog() {\n//   return (\n//     <Layout>\n//       <h1>My Blog</h1>\n//       <ul>\n//         <PostLink id=\"hello-nextjs\" />\n//         <PostLink id=\"learn-nextjs\" />\n//         <PostLink id=\"deploy-nextjs\" />\n//       </ul>\n//     </Layout>\n//   )\n// }\nvar Index = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Batman TV Shows\"\n            }, void 0, false, {\n                fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: props.shows.map(function(show) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/p/[id]\",\n                            as: \"/p/\".concat(show.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: show\n                            }, void 0, false, {\n                                fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, _this)\n                    }, show.id, false, {\n                        fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/moonchoi/projects/hello-next/pages/index.js\",\n        lineNumber: 55,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = Index;\nIndex.getInitialProps = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var res, data;\n    return _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(\"https://api.tvmaze.com/search/shows?q=batman\");\n            case 2:\n                res = _ctx.sent;\n                _ctx.next = 5;\n                return res.json();\n            case 5:\n                data = _ctx.sent;\n                console.log(\"Show data fetched. Count: \".concat(data.length));\n                return _ctx.abrupt(\"return\", {\n                    shows: data.map(function(entry) {\n                        return entry.show;\n                    })\n                });\n            case 8:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c, _c1;\n$RefreshReg$(_c, \"PostLink\");\n$RefreshReg$(_c1, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQXlDO0FBQ2I7QUFDVTtBQUd0Qzs7OztBQUlBLEdBRUE7Ozs7Ozs7O0FBUUEsR0FFQSxJQUFNRyxRQUFRLEdBQUdDLFNBQUFBLEtBQUs7eUJBQ3BCLDhEQUFDQyxJQUFFO2tCQUNELDRFQUFDSixrREFBSTtZQUFDSyxJQUFJLEVBQUMsU0FBUztZQUFDQyxFQUFFLEVBQUUsS0FBSSxDQUFXLE9BQVRILEtBQUssQ0FBQ0ksRUFBRSxDQUFFO3NCQUV2Qyw0RUFBQ0MsR0FBQzswQkFBRUwsS0FBSyxDQUFDSSxFQUFFOzs7OztxQkFBSzs7Ozs7aUJBQ1o7Ozs7O2FBQ0o7Q0FDTjtBQVBLTCxLQUFBQSxRQUFRO0FBUWQ7Ozs7Ozs7O0FBUUEsR0FFQSxtQ0FBbUM7QUFDbkMsYUFBYTtBQUNiLGVBQWU7QUFDZix5QkFBeUI7QUFDekIsYUFBYTtBQUNiLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMsMENBQTBDO0FBQzFDLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsTUFBTTtBQUNOLElBQUk7QUFHSixJQUFNTyxLQUFLLEdBQUdOLFNBQUFBLEtBQUs7eUJBQ2pCLDhEQUFDSiwwREFBTTs7MEJBQ0wsOERBQUNXLElBQUU7MEJBQUMsaUJBQWU7Ozs7O3FCQUFLOzBCQUN4Qiw4REFBQ0MsSUFBRTswQkFDQVIsS0FBSyxDQUFDUyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTt5Q0FDbkIsOERBQUNWLElBQUU7a0NBRUQsNEVBQUNKLGtEQUFJOzRCQUFDSyxJQUFJLEVBQUMsU0FBUzs0QkFBQ0MsRUFBRSxFQUFFLEtBQUksQ0FBVSxPQUFSUSxJQUFJLENBQUNQLEVBQUUsQ0FBRTtzQ0FDdEMsNEVBQUNDLEdBQUM7MENBQUVNLElBQUk7Ozs7O3FDQUFLOzs7OztpQ0FDUjt1QkFKQUEsSUFBSSxDQUFDUCxFQUFFOzs7OzZCQUtYO2lCQUNOLENBQUM7Ozs7O3FCQUdDOzs7Ozs7YUFDRztDQUNYO0FBaEJLRSxNQUFBQSxLQUFLO0FBa0JYQSxLQUFLLENBQUNNLGVBQWUsR0FBRyxzUEFBa0I7UUFDbENDLEdBQUcsRUFDSEMsSUFBSTs7Ozs7dUJBRFFoQix5REFBSyxDQUFDLDhDQUE4QyxDQUFDOztnQkFBakVlLEdBQUcsWUFBOEQ7O3VCQUNwREEsR0FBRyxDQUFDRSxJQUFJLEVBQUU7O2dCQUF2QkQsSUFBSSxZQUFtQjtnQkFFN0JFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUEyQixDQUFjLE9BQVpILElBQUksQ0FBQ0ksTUFBTSxDQUFFLENBQUM7NkNBR2hEO29CQUNMVCxLQUFLLEVBQUVLLElBQUksQ0FBQ0osR0FBRyxDQUFDUyxTQUFBQSxLQUFLOytCQUFJQSxLQUFLLENBQUNSLElBQUk7cUJBQUEsQ0FBQztpQkFDckM7Ozs7OztDQUNGO0FBQ0QsK0RBQWVMLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuXG4vKiBtZXRob2QgMVxuaW1wb3J0IHdpdGhMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5jb25zdCBQYWdlID0gKCkgPT4gPHA+SGVsbG8gTmV4dC5qczwvcD5cbmV4cG9ydCBkZWZhdWx0IHdpdGhMYXlvdXQoUGFnZSlcbiovXG5cbi8qIG1ldGhvZCAwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHA+dGhpcyBpcyBpbmRleC5qcyBwYWdlPC9wPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4qL1xuXG5jb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbiAgPGxpPlxuICAgIDxMaW5rIGhyZWY9XCIvcC9baWRdXCIgYXM9e2AvcC8ke3Byb3BzLmlkfWB9PlxuICAgICAgey8qIExpbmsg7Lu07Y+s64SM7Yq47J2YIGhyZWbripQg7Y6Y7J207KeA7J2YIOqyveuhnOyeheuLiOuLpC4gYXPripQg67iM65287Jqw7KCAIFVSTOyXkCDrs7Tsl6zsp4ggVVJM7J6F64uI64ukLiDrj5nsoIHsnbggdXJs7J2EIOyCrOyaqe2VmOqzoCDsi7bri6TrqbQgJ2FzJyBwcm9wc+ulvCDstpTqsIAg7ZWY66m0IOuQqeuLiOuLpC4gJ2FzJyBwcm9wc+qwgCDsl4bsnLzrqbQg64+Z7KCBIOqyveuhnOqwgCDsnpHrj5ntlZjsp4Ag7JWK7Jy864uIIOyjvOydmO2VmOyEuOyalCAqL31cbiAgICAgIDxhPntwcm9wcy5pZH08L2E+XG4gICAgPC9MaW5rPlxuICA8L2xpPlxuKVxuLypcbmNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG4gICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxuICAgIDwvTGluaz5cbiAgPC9saT5cbilcbiovXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPExheW91dD5cbi8vICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbi8vICAgICAgIDx1bD5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dGpzXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIC8+XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gICApXG4vLyB9XG5cblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4gICAgPHVsPlxuICAgICAge3Byb3BzLnNob3dzLm1hcChzaG93ID0+IChcbiAgICAgICAgPGxpIGtleT17c2hvdy5pZH0gPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wL1tpZF1cIiBhcz17YC9wLyR7c2hvdy5pZH1gfT5cbiAgICAgICAgICAgIDxhPntzaG93fTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKVxuICAgICAgfVxuXG4gICAgPC91bD5cbiAgPC9MYXlvdXQgPlxuKVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuICAvLyDsl6zquLDshJwg7ZmV7J247ZW07JW8IO2VoCDqsoPsnYAg642w7J207YSw66W8IOyEnOuyhOyXkOyEnCDqsIDsp4Dqs6Ag7Jik64qU7KeAIO2BtOudvOydtOyWuO2KuOyXkOyEnCDqsIDsp4Dqs6Ag7Jik64qU7KeAIOyeheuLiOuLpC7sg4jroZwg6rOg7Lmo7J2EIO2WiOydhCDrlYwgZ2V0SW5pdGlhbFByb3BzIOyViOyXkCDsnojripQgY29uc29sZS5sb2fsnZgg64K07Jqp7J20IOyWtOuUlOyXkCDssI3tnojripTsp4Ag67O066m0IO2ZleyduOydhCDtlaAg7IiYIOyeiOyKteuLiOuLpC7sg4jroZwg6rOg7Lmo7J2EIO2VoCDqsr3smrAg7ISc67KE7J2YIOy9mOyGlOyXkOyEnOunjCDrqZTshLjsp4DqsIAg7Lac66Cl65CY64qUIOqyg+ydhCDrs7wg7IiYIOyeiOyKteuLiOuLpC4gXG5cbiAgcmV0dXJuIHtcbiAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwiZmV0Y2giLCJQb3N0TGluayIsInByb3BzIiwibGkiLCJocmVmIiwiYXMiLCJpZCIsImEiLCJJbmRleCIsImgxIiwidWwiLCJzaG93cyIsIm1hcCIsInNob3ciLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJlbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});