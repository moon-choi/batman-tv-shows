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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MyLayout */ \"./components/MyLayout.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\n\n\nvar Post = function(show) {\n    return(// Post component received the object. //props is the return {show} from below.\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: show.name\n            }, void 0, false, {\n                fileName: \"/Users/moonchoi/projects/hello-next/pages/p/[id].js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: show.summary.replace(/<[/]?p>/g, \"\")\n            }, void 0, false, {\n                fileName: \"/Users/moonchoi/projects/hello-next/pages/p/[id].js\",\n                lineNumber: 7,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: show.image.medium\n            }, void 0, false, {\n                fileName: \"/Users/moonchoi/projects/hello-next/pages/p/[id].js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/moonchoi/projects/hello-next/pages/p/[id].js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, _this));\n};\n_c = Post;\n//function definition //hoisting\nPost.getInitialProps = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context) {\n        var id, res, show;\n        return _Users_moonchoi_projects_hello_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    id = context.query // after destructuing, id is just a string.\n                    .id;\n                    console.log(\"CONTEXT.QUERY\", context.query);\n                    _ctx.next = 4;\n                    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://api.tvmaze.com/shows/\".concat(id)) // is this res a json?\n                    ;\n                case 4:\n                    res = _ctx.sent;\n                    console.log(\"THIS IS RES\", res);\n                    _ctx.next = 8;\n                    return res.json() // is this the same as JSON.parse()? // converting to an object?\n                    ;\n                case 8:\n                    show = _ctx.sent;\n                    console.log(\"Fetched show: \".concat(show.name));\n                    return _ctx.abrupt(\"return\", {\n                        show: show\n                    } //returning show as an object\n                    );\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(context) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFBOEM7QUFDUjtBQUN0QyxJQUFNRSxJQUFJLEdBQUlDLFNBQUFBLElBQUk7V0FDaEIsK0VBQStFO2tCQUMvRSw4REFBQ0gsNERBQU07OzBCQUNMLDhEQUFDSSxJQUFFOzBCQUFFRCxJQUFJLENBQUNFLElBQUk7Ozs7O3FCQUFNOzBCQUNwQiw4REFBQ0MsR0FBQzswQkFBRUgsSUFBSSxDQUFDSSxPQUFPLENBQUNDLE9BQU8sYUFBYSxFQUFFLENBQUM7Ozs7O3FCQUFLOzBCQUM3Qyw4REFBQ0MsS0FBRztnQkFBQ0MsR0FBRyxFQUFFUCxJQUFJLENBQUNRLEtBQUssQ0FBQ0MsTUFBTTs7Ozs7cUJBQUk7Ozs7OzthQUN4QjtDQUNWO0FBUEtWLEtBQUFBLElBQUk7QUFTVixnQ0FBZ0M7QUFDaENBLElBQUksQ0FBQ1csZUFBZTtlQUFHLG9QQUFnQkMsT0FBTyxFQUFFO1lBQ3RDQyxFQUFFLEVBRUpDLEdBQUcsRUFFSGIsSUFBSTs7OztvQkFKSixFQUFJLEdBQUtXLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLDJDQUEyQztxQkFBaEVGLEVBQUU7b0JBQ1JHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRUwsT0FBTyxDQUFDRyxLQUFLLENBQUM7OzJCQUMzQmhCLHlEQUFLLENBQUMsK0JBQThCLENBQUssT0FBSGMsRUFBRSxDQUFFLENBQUMsQ0FBQyxzQkFBc0I7OztvQkFBOUVDLEdBQUcsWUFBb0Q7b0JBQzNERSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVILEdBQUcsQ0FBQzs7MkJBQ2RBLEdBQUcsQ0FBQ0ksSUFBSSxFQUFFLENBQUMsZ0VBQWdFOzs7b0JBQXhGakIsSUFBSSxZQUFtQjtvQkFFN0JlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFlLENBQVksT0FBVmhCLElBQUksQ0FBQ0UsSUFBSSxDQUFFLENBQUM7aURBRWxDO3dCQUFFRixJQUFJLEVBQUpBLElBQUk7cUJBQUUsQ0FBQyw2QkFBNkI7Ozs7Ozs7S0FDOUM7b0JBVnNDVyxPQUFPOzs7R0FVN0M7QUFFRCwrREFBZVosSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wL1tpZF0uanM/NWFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuY29uc3QgUG9zdCA9ICBzaG93ICA9PiAoXG4gIC8vIFBvc3QgY29tcG9uZW50IHJlY2VpdmVkIHRoZSBvYmplY3QuIC8vcHJvcHMgaXMgdGhlIHJldHVybiB7c2hvd30gZnJvbSBiZWxvdy5cbiAgPExheW91dD5cbiAgICA8aDE+e3Nob3cubmFtZX08L2gxPlxuICAgIDxwPntzaG93LnN1bW1hcnkucmVwbGFjZSgvPFsvXT9wPi9nLCAnJyl9PC9wPlxuICAgIDxpbWcgc3JjPXtzaG93LmltYWdlLm1lZGl1bX0gLz5cbiAgPC9MYXlvdXQ+XG4pXG5cbi8vZnVuY3Rpb24gZGVmaW5pdGlvbiAvL2hvaXN0aW5nXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnkgLy8gYWZ0ZXIgZGVzdHJ1Y3R1aW5nLCBpZCBpcyBqdXN0IGEgc3RyaW5nLlxuICAgIGNvbnNvbGUubG9nKCdDT05URVhULlFVRVJZJywgY29udGV4dC5xdWVyeSkgXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YCkgLy8gaXMgdGhpcyByZXMgYSBqc29uP1xuICAgIGNvbnNvbGUubG9nKCdUSElTIElTIFJFUycsIHJlcylcbiAgY29uc3Qgc2hvdyA9IGF3YWl0IHJlcy5qc29uKCkgLy8gaXMgdGhpcyB0aGUgc2FtZSBhcyBKU09OLnBhcnNlKCk/IC8vIGNvbnZlcnRpbmcgdG8gYW4gb2JqZWN0P1xuXG4gIGNvbnNvbGUubG9nKGBGZXRjaGVkIHNob3c6ICR7c2hvdy5uYW1lfWApXG5cbiAgcmV0dXJuIHsgc2hvdyB9IC8vcmV0dXJuaW5nIHNob3cgYXMgYW4gb2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwibmFtZXMiOlsiTGF5b3V0IiwiZmV0Y2giLCJQb3N0Iiwic2hvdyIsImgxIiwibmFtZSIsInAiLCJzdW1tYXJ5IiwicmVwbGFjZSIsImltZyIsInNyYyIsImltYWdlIiwibWVkaXVtIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImlkIiwicmVzIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/p/[id].js\n"));

/***/ })

});