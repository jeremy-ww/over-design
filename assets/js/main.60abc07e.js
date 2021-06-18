(self["webpackChunkexample"] = self["webpackChunkexample"] || []).push([[179],{

/***/ 1603:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(7714);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(2222);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 6 modules
var redux_toolkit_esm = __webpack_require__(1145);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(1539);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(8674);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
;// CONCATENATED MODULE: ./src/pages/hello-world/slice.tsx




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var getNewText = (0,redux_toolkit_esm/* createAsyncThunk */.hg)('getNewText', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(template, _ref) {
    var dispatch;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch = _ref.dispatch;
            _context.next = 3;
            return {
              then: function then(r) {
                return setTimeout(r, 1000);
              }
            };

          case 3:
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            dispatch(setText("Random: ".concat(Math.random())));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}());
var slice = (0,redux_toolkit_esm/* createSlice */.oM)({
  name: 'helloWorld',
  initialState: {
    text: '',
    loading: false
  },
  reducers: {
    setText: function setText(state, action) {
      state.text = action.payload;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(getNewText.pending, function (state) {
      state.loading = true;
    }).addCase(getNewText.fulfilled, function (state) {
      state.loading = false;
    }).addCase(getNewText.rejected, function (state) {
      state.loading = false;
    });
  }
});
var setText = slice.actions.setText;

/* harmony default export */ var hello_world_slice = (slice.reducer);
;// CONCATENATED MODULE: ./src/common/store.tsx


/* eslint-disable @typescript-eslint/no-var-requires */

/* eslint-disable global-require */


var middlewares = [];
/* istanbul ignore if */

if (false) { var logger, _require, createLogger; }

var store = (0,redux_toolkit_esm/* configureStore */.xC)({
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(middlewares);
  },
  devTools: "production" !== 'production',
  reducer: {
    helloWorld: hello_world_slice
  }
});
/* harmony default export */ var common_store = (store);
// EXTERNAL MODULE: ./node_modules/@emotion/css/dist/emotion-css.esm.js + 1 modules
var emotion_css_esm = __webpack_require__(8592);
// EXTERNAL MODULE: ./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js + 1 modules
var emotion_react_jsx_runtime_browser_esm = __webpack_require__(7858);
;// CONCATENATED MODULE: ./src/pages/hello-world/index.tsx
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






function HelloWorld() {
  var dispatch = (0,es/* useDispatch */.I0)();
  var helloWorld = (0,es/* useSelector */.v9)(function (state) {
    return state.helloWorld;
  });
  (0,react.useEffect)(function () {
    dispatch(getNewText());
  }, []);
  return (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)("p", {
    className: /*#__PURE__*/(0,emotion_css_esm/* css */.iv)( true ? {
      name: "1o0rm0z",
      styles: "margin-top:25%;text-align:center;font-size:18px"
    } : 0),
    children: helloWorld.loading ? 'Loading...' : helloWorld.text
  });
}
;// CONCATENATED MODULE: ./src/index.tsx






react_dom.render((0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(es/* Provider */.zt, {
  store: common_store,
  children: (0,emotion_react_jsx_runtime_browser_esm/* jsx */.tZ)(HelloWorld, {})
}), document.querySelector('#root'));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [216], function() { return __webpack_exec__(1603); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);