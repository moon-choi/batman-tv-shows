"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/p/[id]",{

/***/ "./pages/p/[id].js":
/*!*************************!*\
  !*** ./pages/p/[id].js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\n\n\nvar Post = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: props.show.name\n            }, void 0, false, {\n                fileName: \"/Users/moonchoi/projects/hello-next/pages/p/[id].js\",\n                lineNumber: 5,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: props.show.summary.replace(/<[/]?p>/g, \"\")\n            }, void 0, false, {\n                fileName: \"/Users/moonchoi/projects/hello-next/pages/p/[id].js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: props.show.image.medium\n            }, void 0, false, {\n                fileName: \"/Users/moonchoi/projects/hello-next/pages/p/[id].js\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/moonchoi/projects/hello-next/pages/p/[id].js\",\n        lineNumber: 4,\n        columnNumber: 3\n    }, _this);\n};\n_c = Post;\n//function definition //hoisting\nPost.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n        var id, res, show;\n        return _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    id = context.query // after destructuing, id is just a string.\n                    .id;\n                    console.log(\"CONTEXT.QUERY\", context.query);\n                    _ctx.next = 4;\n                    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://api.tvmaze.com/shows/\".concat(id)) // is this res a json?\n                    ;\n                case 4:\n                    res = _ctx.sent;\n                    console.log(\"THIS IS RES\", res);\n                    _ctx.next = 8;\n                    return res.json() // is this the same as JSON.parse()? // converting to an object?\n                    ;\n                case 8:\n                    show = _ctx.sent;\n                    console.log(\"Fetched show: \".concat(show.name));\n                    return _ctx.abrupt(\"return\", {\n                        show: show\n                    } //returning show as an object\n                    );\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(context) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFBOEM7QUFDUjtBQUN0QyxJQUFNRSxJQUFJLEdBQUdDLFNBQUFBLEtBQUs7eUJBQ2hCLDhEQUFDSCw0REFBTTs7MEJBQ0wsOERBQUNJLElBQUU7MEJBQUVELEtBQUssQ0FBQ0UsSUFBSSxDQUFDQyxJQUFJOzs7OztxQkFBTTswQkFDMUIsOERBQUNDLEdBQUM7MEJBQUVKLEtBQUssQ0FBQ0UsSUFBSSxDQUFDRyxPQUFPLENBQUNDLE9BQU8sYUFBYSxFQUFFLENBQUM7Ozs7O3FCQUFLOzBCQUNuRCw4REFBQ0MsS0FBRztnQkFBQ0MsR0FBRyxFQUFFUixLQUFLLENBQUNFLElBQUksQ0FBQ08sS0FBSyxDQUFDQyxNQUFNOzs7OztxQkFBSTs7Ozs7O2FBQzlCO0NBQ1Y7QUFOS1gsS0FBQUEsSUFBSTtBQVFWLGdDQUFnQztBQUNoQ0EsSUFBSSxDQUFDWSxlQUFlO2VBQUcsb1BBQWdCQyxPQUFPLEVBQUU7WUFDdENDLEVBQUUsRUFFSkMsR0FBRyxFQUVIWixJQUFJOzs7O29CQUpKLEVBQUksR0FBS1UsT0FBTyxDQUFDRyxLQUFLLENBQUMsMkNBQTJDO3FCQUFoRUYsRUFBRTtvQkFDUkcsT0FBTyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFTCxPQUFPLENBQUNHLEtBQUssQ0FBQzs7MkJBQzNCakIseURBQUssQ0FBQywrQkFBOEIsQ0FBSyxPQUFIZSxFQUFFLENBQUUsQ0FBQyxDQUFDLHNCQUFzQjs7O29CQUE5RUMsR0FBRyxZQUFvRDtvQkFDM0RFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRUgsR0FBRyxDQUFDOzsyQkFDZEEsR0FBRyxDQUFDSSxJQUFJLEVBQUUsQ0FBQyxnRUFBZ0U7OztvQkFBeEZoQixJQUFJLFlBQW1CO29CQUU3QmMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWUsQ0FBWSxPQUFWZixJQUFJLENBQUNDLElBQUksQ0FBRSxDQUFDO2lEQUVsQzt3QkFBRUQsSUFBSSxFQUFKQSxJQUFJO3FCQUFFLENBQUMsNkJBQTZCOzs7Ozs7O0tBQzlDO29CQVZzQ1UsT0FBTzs7O0dBVTdDO0FBRUQsK0RBQWViLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcC9baWRdLmpzPzVhZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL015TGF5b3V0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmNvbnN0IFBvc3QgPSBwcm9wcyA9PiAoIC8vIFBvc3QgY29tcG9uZW50IHJlY2VpdmVkIHRoZSBvYmplY3QuXG4gIDxMYXlvdXQ+XG4gICAgPGgxPntwcm9wcy5zaG93Lm5hbWV9PC9oMT5cbiAgICA8cD57cHJvcHMuc2hvdy5zdW1tYXJ5LnJlcGxhY2UoLzxbL10/cD4vZywgJycpfTwvcD5cbiAgICA8aW1nIHNyYz17cHJvcHMuc2hvdy5pbWFnZS5tZWRpdW19IC8+XG4gIDwvTGF5b3V0PlxuKVxuXG4vL2Z1bmN0aW9uIGRlZmluaXRpb24gLy9ob2lzdGluZ1xuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xuICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5IC8vIGFmdGVyIGRlc3RydWN0dWluZywgaWQgaXMganVzdCBhIHN0cmluZy5cbiAgICBjb25zb2xlLmxvZygnQ09OVEVYVC5RVUVSWScsIGNvbnRleHQucXVlcnkpIFxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke2lkfWApIC8vIGlzIHRoaXMgcmVzIGEganNvbj9cbiAgICBjb25zb2xlLmxvZygnVEhJUyBJUyBSRVMnLCByZXMpXG4gIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpIC8vIGlzIHRoaXMgdGhlIHNhbWUgYXMgSlNPTi5wYXJzZSgpPyAvLyBjb252ZXJ0aW5nIHRvIGFuIG9iamVjdD9cblxuICBjb25zb2xlLmxvZyhgRmV0Y2hlZCBzaG93OiAke3Nob3cubmFtZX1gKVxuXG4gIHJldHVybiB7IHNob3cgfSAvL3JldHVybmluZyBzaG93IGFzIGFuIG9iamVjdFxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sIm5hbWVzIjpbIkxheW91dCIsImZldGNoIiwiUG9zdCIsInByb3BzIiwiaDEiLCJzaG93IiwibmFtZSIsInAiLCJzdW1tYXJ5IiwicmVwbGFjZSIsImltZyIsInNyYyIsImltYWdlIiwibWVkaXVtIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImlkIiwicmVzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/p/[id].js\n"));

/***/ })

});