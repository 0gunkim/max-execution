"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var figlet = require("figlet");
require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-transform-property-mutators"]
});
var fs = require("fs");
var path = require("path");
var _require = require("child_process"),
  exec = _require.exec;
var spinners = require("cli-spinners");
var readline = require("readline");
figlet("MAX-INIT", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
var styleCode = "\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}";
var _require2 = require("util"),
  promisify = _require2.promisify;
var writeFileAsync = promisify(fs.writeFile);
function createGlobalCSS() {
  return _createGlobalCSS.apply(this, arguments);
}
function _createGlobalCSS() {
  _createGlobalCSS = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var filePath;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          filePath = path.join(__dirname, "src", "global.css");
          _context.prev = 1;
          _context.next = 4;
          return writeFileAsync(filePath, styleCode, "utf8");
        case 4:
          console.log("Style file created successfully!");
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          console.error("Error creating style file:", _context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 7]]);
  }));
  return _createGlobalCSS.apply(this, arguments);
}
var prettier = "\n{\n   \"trailingComma\": \"es5\",\n   \"tabWidth\": 2,\n   \"semi\": true,\n   \"singleQuote\": false,\n   \"printWidth\": 120\n}\n";
function createPrettier() {
  return _createPrettier.apply(this, arguments);
}
function _createPrettier() {
  _createPrettier = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          fs.writeFile(".prettierrc.json", prettier, function (err) {
            if (err) {
              console.error("Error creating prettierrc.json:", err);
            } else {
              console.log("prettier file created successfully!");
            }
          });
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _createPrettier.apply(this, arguments);
}
var packages = "\n{\n  \"version\": \"0.1.0\",\n  \"private\": true,\n  \"scripts\": {\n    \"dev\": \"next dev\",\n    \"build\": \"next build\",\n    \"start\": \"next start\",\n    \"lint\": \"next lint\",\n    \"sv\": \"json-server ./public/data/data.json --port 4001\"\n  },\n  \"dependencies\": {\n    \"@emotion/react\": \"latest\",\n    \"@emotion/styled\": \"latest\",\n    \"@reduxjs/toolkit\": \"latest\",\n    \"@types/node\": \"latest\",\n    \"@types/react\": \"latest\",\n    \"@types/react-dom\": \"latest\",\n    \"@types/react-modal\": \"latest\",\n    \"@types/react-redux\": \"latest\",\n    \"react-redux\": \"latest\",\n    \"@vercel/og\": \"latest\",\n    \"axios\": \"latest\",\n    \"eslint-config-next\": \"latest\",\n    \"eslint\": \"latest\",\n    \"next\": \"latest\",\n    \"next-ga\": \"latest\",\n    \"next-navigation\": \"latest\",\n    \"next-redux-wrapper\": \"latest\",\n    \"react\": \"latest\",\n    \"react-dom\": \"latest\",\n    \"react-hook-form\": \"latest\",\n    \"style-loader\": \"latest\"\n},\n\"devDependencies\": {\n        \"ts-loader\": \"latest\",\n        \"typescript\": \"latest\",\n    \"@types/json-server\": \"latest\",\n    \"json-server\": \"latest\",\n    \"@tanstack/react-query\": \"latest\",\n    \"@tanstack/react-query-devtools\": \"latest\",\n    \"@types/gtag.js\": \"latest\",\n    \"file-loader\": \"latest\"\n  }\n  }\n";
function createPackages() {
  fs.writeFile("package.json", packages, function (err) {
    if (err) {
      console.error("Error creating package.json:", err);
    } else {
      console.log("package file created successfully!");
    }
  });
}
var globalTs = "\ndeclare module \"*.css\" {\n   const content: { [className: string]: string };\n   export = content;\n}\n\ndeclare module \"*.png\" {\n   const value: any;\n   export default value;\n}\ndeclare module \"*.mp4\" {\n   const value: any;\n   export default value;\n}\ndeclare module \"*.ttf\" {\n   const value: string;\n   export default value;\n}\ndeclare module \"*.woff2\" {\n   const value: string;\n   export default value;\n}\ndeclare module \"*.ico\" {\n   const value: string;\n   export default value;\n}\n\n";
function createGlobalTS() {
  fs.writeFile("global.d.ts", globalTs, function (err) {
    if (err) {
      console.error("Error creating global.d.ts:", err);
    } else {
      console.log("global.d.ts file created successfully!");
    }
  });
}
setTimeout(function () {
  createGlobalCSS();
  createGlobalTS();
  // createPackages();
  createPrettier();
}, 200);
//--------------

var spinner = spinners.dots8Bit; // 로딩 바 스타일 선택
var frame = 0; // 프레임 인덱스
var loadingInterval; // 로딩 바 업데이트 간격

function startLoading() {
  loadingInterval = setInterval(function () {
    var frames = spinner.frames;
    var frameText = frames[frame]; // 현재 프레임 텍스트
    process.stdout.write("\r".concat(frameText, " package\uC5D0 \uC791\uC131\uB41C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C yarn\uC73C\uB85C install \uD558\uACE0 \uC788\uC5B4 \uAE30\uB2EC\uB824!"));
    frame = (frame + 1) % frames.length; // 다음 프레임 인덱스
  }, spinner.interval); // 프레임 간격
}

function stopLoading() {
  clearInterval(loadingInterval); // 로딩 바 종료
  console.log("\nyarn install 완료!");
}
function myAsyncFunction() {
  return new Promise(function (resolve, reject) {
    exec("yarn install", function (error, stdout, stderr) {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
function askForConfirmation() {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(function (resolve) {
    rl.question("Yarn 설치할까? 말까? (Y/N): ", function (answer) {
      rl.close();
      resolve(answer);
    });
  });
}
function startApp() {
  return _startApp.apply(this, arguments);
}
function _startApp() {
  _startApp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var confirmation;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return askForConfirmation();
        case 2:
          confirmation = _context3.sent;
          if (confirmation.toLowerCase() === "y") {
            startLoading(); // 로딩 바 시작

            // 비동기 함수 실행
            myAsyncFunction().then(function () {
              stopLoading(); // 로딩 바 종료
              deleteFile("max.js").then(function () {
                console.log("청소완료!");
              })["catch"](function (error) {});
            })["catch"](function (error) {
              console.error("yarn install 실행 중 오류 발생:", error);
              stopLoading(); // 오류 발생 시 로딩 바 종료
            });
          } else {
            console.log("yarn install 선택안함 확인! 코딩하러~~!");
          }
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _startApp.apply(this, arguments);
}
setTimeout(function () {
  startApp();
}, 1000);
// startApp();

// 파일 삭제 함수
function deleteFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.unlink(filePath, function (error) {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

// 사용 예시
