// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"jeTtx":[function(require,module,exports,__globalThis) {
var _core = require("@xatom/core");
var _routes = require("./routes");
var _pageloader = require("./modules/animations/pageloader");
var _pulsating = require("./modules/animations/pulsating");
var _homeAnimation = require("./modules/animations/home-animation");
var _contactPopup = require("./modules/contact-popup");
(0, _core.onReady)(()=>{
    (0, _routes.initRoutes)();
    (0, _pulsating.pulsating)();
    (0, _homeAnimation.initNavLogoScrollAnimation)();
    (0, _contactPopup.contactPopup)();
    const loader = (0, _pageloader.initPageLoader)();
});

},{"@xatom/core":"8w4K8","./routes":"fnEL6","./modules/animations/pageloader":"gCsUJ","./modules/animations/pulsating":"lPqDt","./modules/animations/home-animation":"fGU4U","./modules/contact-popup":"f5ilB"}],"8w4K8":[function(require,module,exports,__globalThis) {
var $iEn1Z$uuid = require("116fc168c31b637d");
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
var $90b1e0f272b5544a$exports = {};
$parcel$export($90b1e0f272b5544a$exports, "WFAuth", ()=>$90b1e0f272b5544a$export$cb2138cd710ea58a);
class $90b1e0f272b5544a$export$cb2138cd710ea58a {
    constructor(config = {}){
        this.config = config;
    }
    isLoggedIn() {
        return !!this.user;
    }
    getRole() {
        return this.role;
    }
    getUser() {
        return this.user;
    }
    getConfig() {
        return this.config;
    }
    logout() {
        this.user = null;
        this.role = null;
        this.config = null;
    }
    setUser(user) {
        this.user = user;
    }
    setRole(role) {
        this.role = role;
    }
    setConfig(config) {
        this.config = config;
    }
}
var $336c7a32b438dc35$exports = {};
$parcel$export($336c7a32b438dc35$exports, "WFAuthMiddleware", ()=>$336c7a32b438dc35$export$42f600804a30f397);
class $336c7a32b438dc35$export$42f600804a30f397 {
    constructor(auth){
        this.auth = auth;
    }
    allowTo(role) {
        return this.auth.getRole() === role;
    }
    disallowedTo(role) {
        return this.auth.getRole() !== role;
    }
    getAuth() {
        return this.auth;
    }
}
var $5ce0995b4e579efe$exports = {};
$parcel$export($5ce0995b4e579efe$exports, "WFComponent", ()=>$5ce0995b4e579efe$export$b8941e06d24ae728);
var $30d957643bf2e67a$exports = {};
var $62881ab850a57a38$exports = {};
$parcel$export($62881ab850a57a38$exports, "debug", ()=>$62881ab850a57a38$export$1c9f709888824e05);
const $62881ab850a57a38$export$1c9f709888824e05 = (...args)=>{
    if (window.WFDebug) console.log(...args);
};
var $9e73fdbf37a9aa00$exports = {};
$parcel$export($9e73fdbf37a9aa00$exports, "getElementByXPath", ()=>$9e73fdbf37a9aa00$export$7ffef3582c93037b);
function $9e73fdbf37a9aa00$export$7ffef3582c93037b(xpath, parent) {
    const result = document.evaluate(xpath, parent, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result.singleNodeValue;
}
var $100caf27c28c32c0$exports = {};
$parcel$export($100caf27c28c32c0$exports, "getRouteQueryParams", ()=>$100caf27c28c32c0$export$1346b4a9ff9b6881);
const $100caf27c28c32c0$export$1346b4a9ff9b6881 = ()=>{
    const _data = {};
    new URLSearchParams(location.search).forEach((val, key)=>{
        _data[key] = val;
    });
    return _data;
};
var $e533c87ae7d96e3e$exports = {};
$parcel$export($e533c87ae7d96e3e$exports, "getXPathForChangedChild", ()=>$e533c87ae7d96e3e$export$5fe4b019801f5ef1);
function $e533c87ae7d96e3e$export$5fe4b019801f5ef1(node, parent) {
    const xpathParts = [];
    // Traverse up the DOM tree from the node and generate an XPath expression for each parent element
    while(node && node !== parent && node.nodeType === Node.ELEMENT_NODE){
        let xpath = node.nodeName.toLowerCase();
        // If the element has an ID attribute, add it to the XPath expression
        if (node.hasAttribute("id")) xpath += '[@id="' + node.getAttribute("id") + '"]';
        else if (node.hasAttribute("class")) xpath += '[@class="' + node.getAttribute("class") + '"]';
        // Add the XPath expression for this element to the list
        xpathParts.unshift(xpath);
        // Move up to the parent element
        node = node.parentNode;
    }
    // Combine the XPath parts into a single XPath expression
    return xpathParts.join("/");
}
var $4117225480b0cc44$exports = {};
$parcel$export($4117225480b0cc44$exports, "navigate", ()=>$4117225480b0cc44$export$ff7962acd6052c28);
const $4117225480b0cc44$export$ff7962acd6052c28 = (arg)=>{
    if (typeof arg === "string") window.location.assign(arg);
    else if (typeof arg === "object" && arg.type === "replace") window.location.replace(arg.to);
    else if (typeof arg === "object" && arg.type === "reload") window.location.reload();
};
var $0b3f70b8f06eedca$exports = {};
$parcel$export($0b3f70b8f06eedca$exports, "parse", ()=>$0b3f70b8f06eedca$export$98e6a39c04603d36);
$parcel$export($0b3f70b8f06eedca$exports, "compile", ()=>$0b3f70b8f06eedca$export$ef7acd7185315e22);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToFunction", ()=>$0b3f70b8f06eedca$export$5b9bad9e403cf3d9);
$parcel$export($0b3f70b8f06eedca$exports, "match", ()=>$0b3f70b8f06eedca$export$4659b591c19bdf3d);
$parcel$export($0b3f70b8f06eedca$exports, "pathToRegexp", ()=>$0b3f70b8f06eedca$export$71304158c7e35877);
$parcel$export($0b3f70b8f06eedca$exports, "regexpToFunction", ()=>$0b3f70b8f06eedca$export$968e97c88708237a);
$parcel$export($0b3f70b8f06eedca$exports, "tokensToRegexp", ()=>$0b3f70b8f06eedca$export$9a9303716def6456);
$parcel$export($0b3f70b8f06eedca$exports, "routeMatch", ()=>$0b3f70b8f06eedca$export$6c50148cf1d992bd);
/**
 * Tokenizer results.
 */ /**
 * Tokenize input string.
 */ function $0b3f70b8f06eedca$var$lexer(str) {
    const tokens = [];
    let i = 0;
    while(i < str.length){
        const char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            let name = "";
            let j = i + 1;
            while(j < str.length){
                const code = str.charCodeAt(j);
                if (code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError(`Missing parameter name at ${i}`);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            let count = 1;
            let pattern = "";
            let j = i + 1;
            if (str[j] === "?") throw new TypeError(`Pattern cannot start with "?" at ${j}`);
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") throw new TypeError(`Capturing groups are not allowed at ${j}`);
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError(`Unbalanced pattern at ${i}`);
            if (!pattern) throw new TypeError(`Missing pattern at ${i}`);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
function $0b3f70b8f06eedca$export$98e6a39c04603d36(str, options = {}) {
    const tokens = $0b3f70b8f06eedca$var$lexer(str);
    const { prefixes: prefixes = "./" } = options;
    const defaultPattern = `[^${$0b3f70b8f06eedca$var$escapeString(options.delimiter || "/#?")}]+?`;
    const result = [];
    let key = 0;
    let i = 0;
    let path = "";
    const tryConsume = (type)=>{
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    const mustConsume = (type)=>{
        const value = tryConsume(type);
        if (value !== undefined) return value;
        const { type: nextType, index: index } = tokens[i];
        throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
    };
    const consumeText = ()=>{
        let result = "";
        let value;
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))result += value;
        return result;
    };
    while(i < tokens.length){
        const char = tryConsume("CHAR");
        const name = tryConsume("NAME");
        const pattern = tryConsume("PATTERN");
        if (name || pattern) {
            let prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        const value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        const open = tryConsume("OPEN");
        if (open) {
            const prefix = consumeText();
            const name = tryConsume("NAME") || "";
            const pattern = tryConsume("PATTERN") || "";
            const suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name || (pattern ? key++ : ""),
                pattern: name && !pattern ? defaultPattern : pattern,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
function $0b3f70b8f06eedca$export$ef7acd7185315e22(str, options) {
    return $0b3f70b8f06eedca$export$5b9bad9e403cf3d9($0b3f70b8f06eedca$export$98e6a39c04603d36(str, options), options);
}
function $0b3f70b8f06eedca$export$5b9bad9e403cf3d9(tokens, options = {}) {
    const reFlags = $0b3f70b8f06eedca$var$flags(options);
    const { encode: encode = (x)=>x, validate: validate = true } = options;
    // Compile all the tokens into regexps.
    const matches = tokens.map((token)=>{
        if (typeof token === "object") return new RegExp(`^(?:${token.pattern})$`, reFlags);
    });
    return (data)=>{
        let path = "";
        for(let i = 0; i < tokens.length; i++){
            const token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            const value = data ? data[token.name] : undefined;
            const optional = token.modifier === "?" || token.modifier === "*";
            const repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) throw new TypeError(`Expected "${token.name}" to not repeat, but got an array`);
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError(`Expected "${token.name}" to not be empty`);
                }
                for(let j = 0; j < value.length; j++){
                    const segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) throw new TypeError(`Expected all "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                const segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) throw new TypeError(`Expected "${token.name}" to match "${token.pattern}", but got "${segment}"`);
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            const typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError(`Expected "${token.name}" to be ${typeOfMessage}`);
        }
        return path;
    };
}
function $0b3f70b8f06eedca$export$4659b591c19bdf3d(str, options) {
    const keys = [];
    const re = $0b3f70b8f06eedca$export$71304158c7e35877(str, keys, options);
    return $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options);
}
function $0b3f70b8f06eedca$export$968e97c88708237a(re, keys, options = {}) {
    const { decode: decode = (x)=>x } = options;
    return function(pathname) {
        const m = re.exec(pathname);
        if (!m) return false;
        const { 0: path, index: index } = m;
        const params = Object.create(null);
        for(let i = 1; i < m.length; i++){
            if (m[i] === undefined) continue;
            const key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map((value)=>{
                return decode(value, key);
            });
            else params[key.name] = decode(m[i], key);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
/**
 * Escape a regular expression string.
 */ function $0b3f70b8f06eedca$var$escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function $0b3f70b8f06eedca$var$flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function $0b3f70b8f06eedca$var$regexpToRegexp(path, keys) {
    if (!keys) return path;
    const groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    let index = 0;
    let execResult = groupsRegex.exec(path.source);
    while(execResult){
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function $0b3f70b8f06eedca$var$arrayToRegexp(paths, keys, options) {
    const parts = paths.map((path)=>$0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options).source);
    return new RegExp(`(?:${parts.join("|")})`, $0b3f70b8f06eedca$var$flags(options));
}
/**
 * Create a path regexp from string input.
 */ function $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options) {
    return $0b3f70b8f06eedca$export$9a9303716def6456($0b3f70b8f06eedca$export$98e6a39c04603d36(path, options), keys, options);
}
function $0b3f70b8f06eedca$export$9a9303716def6456(tokens, keys, options = {}) {
    const { strict: strict = false, start: start = true, end: end = true, encode: encode = (x)=>x, delimiter: delimiter = "/#?", endsWith: endsWith = "" } = options;
    const endsWithRe = `[${$0b3f70b8f06eedca$var$escapeString(endsWith)}]|$`;
    const delimiterRe = `[${$0b3f70b8f06eedca$var$escapeString(delimiter)}]`;
    let route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (const token of tokens)if (typeof token === "string") route += $0b3f70b8f06eedca$var$escapeString(encode(token));
    else {
        const prefix = $0b3f70b8f06eedca$var$escapeString(encode(token.prefix));
        const suffix = $0b3f70b8f06eedca$var$escapeString(encode(token.suffix));
        if (token.pattern) {
            if (keys) keys.push(token);
            if (prefix || suffix) {
                if (token.modifier === "+" || token.modifier === "*") {
                    const mod = token.modifier === "*" ? "?" : "";
                    route += `(?:${prefix}((?:${token.pattern})(?:${suffix}${prefix}(?:${token.pattern}))*)${suffix})${mod}`;
                } else route += `(?:${prefix}(${token.pattern})${suffix})${token.modifier}`;
            } else if (token.modifier === "+" || token.modifier === "*") route += `((?:${token.pattern})${token.modifier})`;
            else route += `(${token.pattern})${token.modifier}`;
        } else route += `(?:${prefix}${suffix})${token.modifier}`;
    }
    if (end) {
        if (!strict) route += `${delimiterRe}?`;
        route += !options.endsWith ? "$" : `(?=${endsWithRe})`;
    } else {
        const endToken = tokens[tokens.length - 1];
        const isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) route += `(?:${delimiterRe}(?=${endsWithRe}))?`;
        if (!isEndDelimited) route += `(?=${delimiterRe}|${endsWithRe})`;
    }
    return new RegExp(route, $0b3f70b8f06eedca$var$flags(options));
}
function $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options) {
    if (path instanceof RegExp) return $0b3f70b8f06eedca$var$regexpToRegexp(path, keys);
    if (Array.isArray(path)) return $0b3f70b8f06eedca$var$arrayToRegexp(path, keys, options);
    return $0b3f70b8f06eedca$var$stringToRegexp(path, keys, options);
}
function $0b3f70b8f06eedca$var$pathMatch(options = {}) {
    return function(path) {
        var keys = [];
        var re = $0b3f70b8f06eedca$export$71304158c7e35877(path, keys, options);
        return function(pathname, params) {
            var m = re.exec(pathname);
            if (!m) return false;
            params = params || {};
            var key, param;
            for(var i = 0; i < keys.length; i++){
                key = keys[i];
                param = m[i + 1];
                if (!param) continue;
                params[key.name] = $0b3f70b8f06eedca$var$decodeParam(param);
                if (key.repeat) params[key.name] = params[key.name].split(key.delimiter);
            }
            return params;
        };
    };
}
const $0b3f70b8f06eedca$export$6c50148cf1d992bd = (routeToMatch, route, defaultParams = {}, options = {})=>{
    return $0b3f70b8f06eedca$var$pathMatch(options)(routeToMatch)(route, defaultParams);
};
function $0b3f70b8f06eedca$var$decodeParam(param) {
    try {
        return decodeURIComponent(param);
    } catch (_) {
        throw new Error('failed to decode param "' + param + '"');
    }
}
var $36bdd128d4111a37$exports = {};
$parcel$export($36bdd128d4111a37$exports, "createComponent", ()=>$36bdd128d4111a37$export$60e54eaca7e7fb38);
const $36bdd128d4111a37$export$60e54eaca7e7fb38 = (type)=>{
    return new $5ce0995b4e579efe$export$b8941e06d24ae728(document.createElement(type));
};
$parcel$exportWildcard($30d957643bf2e67a$exports, $62881ab850a57a38$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $9e73fdbf37a9aa00$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $100caf27c28c32c0$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $e533c87ae7d96e3e$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $4117225480b0cc44$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $0b3f70b8f06eedca$exports);
$parcel$exportWildcard($30d957643bf2e67a$exports, $36bdd128d4111a37$exports);
class $5ce0995b4e579efe$export$b8941e06d24ae728 {
    constructor(query){
        if (typeof query === "string") {
            const el = document.querySelector(query);
            if (el) {
                this.element = el;
                this.updateClone();
            } else throw new Error(`Could not find ${query}`);
        } else if (typeof query === "object" && query instanceof HTMLElement) {
            this.element = query;
            this.updateClone();
        } else if (typeof query === "object" && query instanceof SVGSVGElement) {
            this.element = query;
            this.updateClone();
        } else if (query instanceof $5ce0995b4e579efe$export$b8941e06d24ae728) {
            this.element = query.getElement();
            this.updateClone();
        } else throw new Error(`Could not find ${query}`);
    }
    updateClone() {
        this.cloneEl = this.element.cloneNode(true);
    }
    getElement() {
        return this.element;
    }
    updateTextViaAttrVar(keyPair) {
        const fields = {};
        const addEl = (key, val)=>{
            if (!(key in fields)) fields[key] = [];
            fields[key].push(val);
        };
        if (this.hasAttribute("xa-var")) addEl(this.getAttribute("xa-var"), this.getElement());
        const _els = this.getChildAsComponents(`[xa-var]`);
        _els.forEach((el)=>{
            addEl(el.getAttribute("xa-var"), el.getElement());
        });
        Object.keys(keyPair).forEach((key)=>{
            if (key in fields) fields[key].forEach((d)=>{
                d.textContent = keyPair[key].toString();
            });
        });
    }
    updateTextVariable(keyPair) {
        if (this.cloneEl.childNodes.length === 1 && this.cloneEl.firstChild instanceof Text) Object.keys(keyPair).forEach((key)=>{
            if (this.cloneEl.textContent.includes(`{{${key}}}`)) this.element.textContent = this.cloneEl.textContent.replace(`{{${key}}}`, keyPair[key].toString());
        });
        else {
            const els = Array.from(this.cloneEl.querySelectorAll("*")).map((el)=>Array.from(el.childNodes).filter((node)=>node instanceof Text && node.textContent.trim().length > 0)).flat();
            // console.log(els, this.cloneEl);
            Object.keys(keyPair).forEach((key)=>{
                els.filter((el)=>el.textContent.includes(`{{${key}}}`)).forEach((el)=>{
                    const path = $e533c87ae7d96e3e$export$5fe4b019801f5ef1(el.parentElement, this.cloneEl);
                    const _el = $9e73fdbf37a9aa00$export$7ffef3582c93037b(path, this.element);
                    // console.log(
                    //   el,
                    //   _el,
                    //   " found",
                    //   path,
                    //   el.parentElement,
                    //   this
                    // );
                    if (_el) _el.textContent = el.textContent.replace(`{{${key}}}`, keyPair[key].toString());
                    else console.log(el, _el, "not found", path, el.parentElement, this);
                });
            });
        }
    }
    setAttribute(key, value) {
        this.element.setAttribute(key, value);
    }
    removeAttribute(key) {
        this.element.removeAttribute(key);
    }
    getAttribute(key) {
        return this.element.getAttribute(key);
    }
    hasAttribute(key) {
        return this.element.hasAttribute(key);
    }
    getChildAsComponents(selector) {
        return Array.from(this.element.querySelectorAll(selector)).map((el)=>new $5ce0995b4e579efe$export$b8941e06d24ae728(el));
    }
    getChildAsComponent(selector) {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selector));
    }
    getManyChildAsComponents(selectors) {
        let _els = {};
        Object.keys(selectors).forEach((key)=>{
            _els[key] = new $5ce0995b4e579efe$export$b8941e06d24ae728(this.element.querySelector(selectors[key]));
        });
        return _els;
    }
    getCssClass() {
        return Array.from(this.element.classList);
    }
    addCssClass(className) {
        this.element.classList.add(className);
        this.cloneEl.classList.add(className);
    }
    removeCssClass(className) {
        this.element.classList.remove(className);
        this.cloneEl.classList.remove(className);
    }
    replaceCssClass(className, newClassName) {
        this.element.classList.replace(className, newClassName);
        this.cloneEl.classList.replace(className, newClassName);
    }
    toggleCssClass(className) {
        this.element.classList.toggle(className);
        this.cloneEl.classList.toggle(className);
    }
    on(type, listener, options) {
        this.element.addEventListener(type, listener, options);
    }
    off(type, listener, options) {
        this.element.removeEventListener(type, listener, options);
    }
    setText(text) {
        this.getElement().innerText = text.toString();
    }
    getText() {
        return this.getElement().innerText;
    }
    setTextContent(text) {
        this.getElement().textContent = text;
    }
    getTextContent() {
        return this.getElement().textContent;
    }
    setHTML(htmlText) {
        this.getElement().innerHTML = htmlText;
    }
    getHTML() {
        return this.getElement().innerHTML;
    }
    getCloneAsComponent() {
        return new $5ce0995b4e579efe$export$b8941e06d24ae728(this.cloneEl.cloneNode(true));
    }
    setStyle(style = {}) {
        Object.keys(style).forEach((key)=>{
            this.element.style[key] = style[key];
        });
    }
    getStyle() {
        return window.getComputedStyle(this.element);
    }
    appendChild(child) {
        this.element.appendChild(new $5ce0995b4e579efe$export$b8941e06d24ae728(child).getElement());
    }
    remove() {
        this.element.remove();
    }
    removeAllChildren() {
        this.element.replaceChildren();
    }
}
var $0105599dd5ebe189$exports = {};
$parcel$export($0105599dd5ebe189$exports, "WFDynamicList", ()=>$0105599dd5ebe189$export$688e73055717bd51);
class $0105599dd5ebe189$export$688e73055717bd51 extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    showLoadingState = false;
    constructor(query, config){
        super(query);
        if (typeof config.rowSelector === "string") this.rowComponent = this.getChildAsComponent(config.rowSelector);
        else this.rowComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.rowSelector);
        this.rowComponent.remove();
        if (config.loaderSelector) {
            if (typeof config.loaderSelector === "string") this.loaderComponent = this.getChildAsComponent(config.loaderSelector);
            else this.loaderComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.loaderSelector);
            this.loaderComponent.remove();
        }
        if (config.emptySelector) {
            if (typeof config.emptySelector === "string") this.emptyComponent = this.getChildAsComponent(config.emptySelector);
            else this.emptyComponent = new $5ce0995b4e579efe$export$b8941e06d24ae728(config.emptySelector);
            this.emptyComponent.remove();
        }
    }
    rowRenderer(cb) {
        this.rowRendererCB = cb;
    }
    emptyRenderer(cb) {
        this.emptyRendererCB = cb;
    }
    loaderRenderer(cb) {
        this.loaderRendererCB = cb;
    }
    setData(data) {
        this.data = data;
        this.render();
    }
    render() {
        if (!this.rowRendererCB) throw new Error("Unable to find renderer");
        this.hideLoading();
        this.removeAllChildren();
        if (this.data.length === 0 && this.emptyComponent) this.showEmpty();
        this.data.map((rowData, index, data)=>this.rowRendererCB({
                index: index,
                rowData: rowData,
                rowElement: this.rowComponent.getCloneAsComponent(),
                data: data
            })).filter((d)=>d).forEach((d)=>{
            this.appendChild(d);
        });
        if (this.showLoadingState) this.showLoading();
    }
    changeLoadingStatus(state) {
        this.showLoadingState = state;
        if (state) this.showLoading();
        else this.hideLoading();
    }
    showLoading() {
        this.hideLoading();
        if (!this.loaderComponent) return;
        if (this.loaderRendererCB) {
            this.lastLoadingComponent = this.loaderRendererCB(this.loaderComponent.getCloneAsComponent());
            this.appendChild(this.lastLoadingComponent);
        } else {
            this.lastLoadingComponent = this.loaderComponent.getCloneAsComponent();
            this.appendChild(this.lastLoadingComponent);
        }
    }
    showEmpty() {
        this.hideEmpty();
        if (this.emptyRendererCB) {
            this.lastEmptyComponent = this.emptyRendererCB(this.emptyComponent.getCloneAsComponent());
            this.appendChild(this.lastEmptyComponent);
        } else {
            this.lastEmptyComponent = this.emptyComponent.getCloneAsComponent();
            this.appendChild(this.lastEmptyComponent);
        }
    }
    hideLoading() {
        if (this.lastLoadingComponent) this.lastLoadingComponent.remove();
    }
    hideEmpty() {
        if (this.lastEmptyComponent) this.lastEmptyComponent.remove();
    }
    forceRender() {
        this.render();
    }
}
var $ce18c18667e54846$exports = {};
$parcel$export($ce18c18667e54846$exports, "WFFormComponent", ()=>$ce18c18667e54846$export$e7173e584c7cbeff);
class $ce18c18667e54846$export$e7173e584c7cbeff extends $5ce0995b4e579efe$export$b8941e06d24ae728 {
    defaultFormDisplayStyle = "";
    constructor(query){
        super(query);
        this.formComponent = this.getChildAsComponents("form")[0];
        this.defaultFormDisplayStyle = window.getComputedStyle(this.formComponent.getElement()).display;
    }
    getFormData() {
        const _data = {};
        new FormData(this.formComponent.getElement()).forEach((val, key)=>{
            if (_data[key]) _data[key] = [
                _data[key],
                val
            ].flat();
            else _data[key] = val;
        });
        return _data;
    }
    setFromData(data) {
        Object.keys(data).forEach((key)=>{
            this.getFormComponent().getElement().querySelector(`[name="${key}"]`).value = data[key];
        });
    }
    onFormSubmit(cb) {
        this.formComponent.getElement().onsubmit = (ev)=>{
            ev.preventDefault();
            ev.stopPropagation();
            ev.stopImmediatePropagation();
            cb(this.getFormData(), ev);
        };
    }
    submitWebflowForm() {
        const wfForm = Object.keys(this.formComponent.getElement()).filter((d)=>d.includes("jQuery")).map((d)=>this.formComponent.getElement()[d]).filter((d)=>typeof d === "object" && ".wForm" in d).map((d)=>d[".wForm"]).reduce((d)=>d);
        if (wfForm && wfForm.handler) wfForm.handler(wfForm);
        else if (wfForm && wfForm.action) this.formComponent.getElement().submit();
    }
    getFormComponent() {
        return this.formComponent;
    }
    getSuccessComponent() {
        return this.getChildAsComponents(".w-form-done")[0];
    }
    getErrorComponent() {
        return this.getChildAsComponents(".w-form-fail")[0];
    }
    showSuccessState() {
        this.formComponent.getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "block";
    }
    showErrorState() {
        this.getSuccessComponent().getElement().style.display = "none";
        this.getErrorComponent().getElement().style.display = "block";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    showForm() {
        this.getErrorComponent().getElement().style.display = "none";
        this.getSuccessComponent().getElement().style.display = "none";
        this.formComponent.getElement().style.display = this.defaultFormDisplayStyle;
    }
    disableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.setAttribute("disabled", "disabled");
        });
    }
    enableForm() {
        const _els = this.formComponent.getElement().querySelectorAll("input, select, option, textarea, button");
        Array.from(_els).forEach((el)=>{
            el.removeAttribute("disabled");
        });
    }
    getSubmitButton() {
        return this.formComponent.getChildAsComponents(`[type="submit"]`)[0];
    }
    resetForm() {
        this.formComponent.getElement().reset();
    }
    updateSubmitButtonText(text) {
        this.getSubmitButton().setAttribute("value", text);
    }
}
var $b73002af79232c1a$exports = {};
$parcel$export($b73002af79232c1a$exports, "WFRoute", ()=>$b73002af79232c1a$export$4e1b92c1162557be);
class $b73002af79232c1a$export$4e1b92c1162557be {
    middlewareAllowExecutionOnFail = false;
    constructor(route){
        this.route = route;
    }
    withMiddleware(middleware, role, type = "allow", options = {}) {
        this.middleware = middleware;
        this.middlewareRole = role;
        this.middlewareType = type;
        if ("allowExecutionOnFail" in options) this.middlewareAllowExecutionOnFail = options.allowExecutionOnFail === true;
        if ("onError" in options) this.middlewareErrorFn = options.onError;
        return this;
    }
    validateRole() {
        return this.middlewareType === "allow" ? this.middleware.allowTo(this.middlewareRole) : this.middleware.disallowedTo(this.middlewareRole);
    }
    execute(fn) {
        const _match = $0b3f70b8f06eedca$export$6c50148cf1d992bd(this.route, location.pathname);
        if (_match) {
            $62881ab850a57a38$export$1c9f709888824e05("matched fn start", this.route, location.pathname);
            if (this.middleware) {
                const canAccess = this.validateRole();
                $62881ab850a57a38$export$1c9f709888824e05("checking access role", this.route, this.middlewareRole, this.middlewareType, "canAccess", canAccess, this.middlewareAllowExecutionOnFail);
                if (canAccess || this.middlewareAllowExecutionOnFail) fn({
                    ..._match,
                    ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
                }, canAccess, this.middleware.getAuth());
                else this.middlewareErrorFn && this.middlewareErrorFn();
            } else fn({
                ..._match,
                ...$100caf27c28c32c0$export$1346b4a9ff9b6881()
            }, true);
            $62881ab850a57a38$export$1c9f709888824e05("matched fn end", this.route, location.pathname);
        } else $62881ab850a57a38$export$1c9f709888824e05("did not match", this.route, location.pathname);
        return this;
    }
}
var $16d2504bbe4bb459$exports = {};
$parcel$export($16d2504bbe4bb459$exports, "onReady", ()=>$16d2504bbe4bb459$export$ef1639a4b889352d);
/**
 * @description execute code when the page is loaded
 * @param cb callback function
 */ const $16d2504bbe4bb459$export$ef1639a4b889352d = (cb)=>{
    window.Webflow ||= [];
    window.Webflow.push(()=>{
        cb();
    });
};
var $78395a99ad91c494$exports = {};
$parcel$export($78395a99ad91c494$exports, "WFInvisibleForm", ()=>$78395a99ad91c494$export$bc36999d76b95c72);
class $78395a99ad91c494$export$bc36999d76b95c72 {
    loading = false;
    loadingListener = new Map();
    successListener = new Map();
    errorListener = new Map();
    constructor(formName = ""){
        this.fromName = formName;
        this.siteId = document.querySelector("html").getAttribute("data-wf-site") || "";
    }
    setFormName(formName) {
        this.fromName = formName;
    }
    getFormName() {
        return this.fromName;
    }
    setFormData(data) {
        this.data = data;
    }
    getFormData() {
        return this.data;
    }
    isLoading() {
        return this.loading;
    }
    onLoadingChange(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.loadingListener.set(_id, fn);
        return ()=>{
            this.loadingListener.delete(_id);
        };
    }
    onSuccess(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.successListener.set(_id, fn);
        return ()=>{
            this.successListener.delete(_id);
        };
    }
    onError(fn) {
        const _id = (0, $iEn1Z$uuid.v4)();
        this.errorListener.set(_id, fn);
        return ()=>{
            this.errorListener.delete(_id);
        };
    }
    updateLoadingState(state) {
        this.loading = state;
        this.loadingListener.forEach((fn)=>{
            fn(this.loading);
        });
    }
    formSubmitted() {
        this.successListener.forEach((fn)=>{
            fn();
        });
    }
    formFailed() {
        this.errorListener.forEach((fn)=>{
            fn();
        });
    }
    submitForm() {
        const _updateStatus = (state)=>{
            this.updateLoadingState(state);
        };
        const onFailed = ()=>{
            this.formFailed();
        };
        const onDone = ()=>{
            this.formSubmitted();
        };
        _updateStatus(true);
        window["jQuery"].ajax({
            url: `https://webflow.com/api/v1/form/${this.siteId}`,
            type: "POST",
            data: {
                name: this.fromName || "Untitled Form",
                source: location.href,
                test: false,
                fields: this.data,
                dolphin: false
            },
            dataType: "json",
            crossDomain: true
        }).done(function(response) {
            _updateStatus(false);
            if (response && response.code === 200) onDone();
            else onFailed();
        }).fail(function() {
            _updateStatus(false);
            onFailed();
        });
    }
}
$parcel$exportWildcard(module.exports, $90b1e0f272b5544a$exports);
$parcel$exportWildcard(module.exports, $336c7a32b438dc35$exports);
$parcel$exportWildcard(module.exports, $5ce0995b4e579efe$exports);
$parcel$exportWildcard(module.exports, $0105599dd5ebe189$exports);
$parcel$exportWildcard(module.exports, $ce18c18667e54846$exports);
$parcel$exportWildcard(module.exports, $b73002af79232c1a$exports);
$parcel$exportWildcard(module.exports, $30d957643bf2e67a$exports);
$parcel$exportWildcard(module.exports, $16d2504bbe4bb459$exports);
$parcel$exportWildcard(module.exports, $78395a99ad91c494$exports);

},{"116fc168c31b637d":"ggZPL"}],"ggZPL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":"jG1dk","./v3.js":"ap9Ro","./v4.js":"6RfIs","./v5.js":"eBz2t","./nil.js":"8sEtz","./version.js":"4vEj5","./validate.js":"dfZI5","./stringify.js":"bFRkJ","./parse.js":"1KoND","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jG1dk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js"); // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || (0, _rngJsDefault.default))();
        if (node == null) // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
        node = _nodeId = [
            seedBytes[0] | 0x01,
            seedBytes[1],
            seedBytes[2],
            seedBytes[3],
            seedBytes[4],
            seedBytes[5]
        ];
        if (clockseq == null) // Per 4.2.2, randomize (14 bit) clockseq
        clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) clockseq = clockseq + 1 & 0x3fff;
     // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) nsecs = 0;
     // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n)b[i + n] = node[n];
    return buf || (0, _stringifyJs.unsafeStringify)(b);
}
exports.default = v1;

},{"./rng.js":"cHt7R","./stringify.js":"bFRkJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cHt7R":[function(require,module,exports,__globalThis) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>rng);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return getRandomValues(rnds8);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5oERU":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bFRkJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Stringified UUID is invalid');
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"dfZI5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === 'string' && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"5bk3T","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"5bk3T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ap9Ro":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _md5Js = require("./md5.js");
var _md5JsDefault = parcelHelpers.interopDefault(_md5Js);
const v3 = (0, _v35JsDefault.default)('v3', 0x30, (0, _md5JsDefault.default));
exports.default = v3;

},{"./v35.js":"asOV2","./md5.js":"ieSzG","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"asOV2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DNS", ()=>DNS);
parcelHelpers.export(exports, "URL", ()=>URL);
parcelHelpers.export(exports, "default", ()=>v35);
var _stringifyJs = require("./stringify.js");
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i)bytes.push(str.charCodeAt(i));
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function v35(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        var _namespace;
        if (typeof value === 'string') value = stringToBytes(value);
        if (typeof namespace === 'string') namespace = (0, _parseJsDefault.default)(namespace);
        if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
         // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i)buf[offset + i] = bytes[i];
            return buf;
        }
        return (0, _stringifyJs.unsafeStringify)(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}

},{"./stringify.js":"bFRkJ","./parse.js":"1KoND","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"1KoND":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function parse(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Invalid UUID');
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
exports.default = parse;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"ieSzG":[function(require,module,exports,__globalThis) {
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function md5(bytes) {
    if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = new Uint8Array(msg.length);
        for(let i = 0; i < msg.length; ++i)bytes[i] = msg.charCodeAt(i);
    }
    return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */ function md5ToHexEncodedArray(input) {
    const output = [];
    const length32 = input.length * 32;
    const hexTab = '0123456789abcdef';
    for(let i = 0; i < length32; i += 8){
        const x = input[i >> 5] >>> i % 32 & 0xff;
        const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
    }
    return output;
}
/**
 * Calculate output length with padding and bit length
 */ function getOutputLength(inputLength8) {
    return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */ function wordsToMd5(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << len % 32;
    x[getOutputLength(len) - 1] = len;
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    for(let i = 0; i < x.length; i += 16){
        const olda = a;
        const oldb = b;
        const oldc = c;
        const oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
    }
    return [
        a,
        b,
        c,
        d
    ];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function bytesToWords(input) {
    if (input.length === 0) return [];
    const length8 = input.length * 8;
    const output = new Uint32Array(getOutputLength(length8));
    for(let i = 0; i < length8; i += 8)output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
    return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safeAdd(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */ function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}
function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
}
function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
}
function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}
exports.default = md5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6RfIs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"8mdcZ","./rng.js":"cHt7R","./stringify.js":"bFRkJ","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8mdcZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eBz2t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _v35Js = require("./v35.js");
var _v35JsDefault = parcelHelpers.interopDefault(_v35Js);
var _sha1Js = require("./sha1.js");
var _sha1JsDefault = parcelHelpers.interopDefault(_sha1Js);
const v5 = (0, _v35JsDefault.default)('v5', 0x50, (0, _sha1JsDefault.default));
exports.default = v5;

},{"./v35.js":"asOV2","./sha1.js":"lger1","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lger1":[function(require,module,exports,__globalThis) {
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function f(s, x, y, z) {
    switch(s){
        case 0:
            return x & y ^ ~x & z;
        case 1:
            return x ^ y ^ z;
        case 2:
            return x & y ^ x & z ^ y & z;
        case 3:
            return x ^ y ^ z;
    }
}
function ROTL(x, n) {
    return x << n | x >>> 32 - n;
}
function sha1(bytes) {
    const K = [
        0x5a827999,
        0x6ed9eba1,
        0x8f1bbcdc,
        0xca62c1d6
    ];
    const H = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
        0xc3d2e1f0
    ];
    if (typeof bytes === 'string') {
        const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape
        bytes = [];
        for(let i = 0; i < msg.length; ++i)bytes.push(msg.charCodeAt(i));
    } else if (!Array.isArray(bytes)) // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
    bytes.push(0x80);
    const l = bytes.length / 4 + 2;
    const N = Math.ceil(l / 16);
    const M = new Array(N);
    for(let i = 0; i < N; ++i){
        const arr = new Uint32Array(16);
        for(let j = 0; j < 16; ++j)arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
        M[i] = arr;
    }
    M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
    M[N - 1][14] = Math.floor(M[N - 1][14]);
    M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;
    for(let i = 0; i < N; ++i){
        const W = new Uint32Array(80);
        for(let t = 0; t < 16; ++t)W[t] = M[i][t];
        for(let t = 16; t < 80; ++t)W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
        let a = H[0];
        let b = H[1];
        let c = H[2];
        let d = H[3];
        let e = H[4];
        for(let t = 0; t < 80; ++t){
            const s = Math.floor(t / 20);
            const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
        }
        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
    }
    return [
        H[0] >> 24 & 0xff,
        H[0] >> 16 & 0xff,
        H[0] >> 8 & 0xff,
        H[0] & 0xff,
        H[1] >> 24 & 0xff,
        H[1] >> 16 & 0xff,
        H[1] >> 8 & 0xff,
        H[1] & 0xff,
        H[2] >> 24 & 0xff,
        H[2] >> 16 & 0xff,
        H[2] >> 8 & 0xff,
        H[2] & 0xff,
        H[3] >> 24 & 0xff,
        H[3] >> 16 & 0xff,
        H[3] >> 8 & 0xff,
        H[3] & 0xff,
        H[4] >> 24 & 0xff,
        H[4] >> 16 & 0xff,
        H[4] >> 8 & 0xff,
        H[4] & 0xff
    ];
}
exports.default = sha1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8sEtz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = '00000000-0000-0000-0000-000000000000';

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"4vEj5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
function version(uuid) {
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError('Invalid UUID');
    return parseInt(uuid.slice(14, 15), 16);
}
exports.default = version;

},{"./validate.js":"dfZI5","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fnEL6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRoutes", ()=>initRoutes);
var _core = require("@xatom/core");
var _home = require("../modules/pages/home");
const initRoutes = ()=>{
    new (0, _core.WFRoute)("/").execute(()=>{
        (0, _home.initHome)();
    });
};

},{"@xatom/core":"8w4K8","../modules/pages/home":"6qTQY","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"6qTQY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHome", ()=>initHome);
var _energyPriceChart = require("../energyPriceChart");
var _swiperHome = require("../swiper-home");
var _faq = require("../faq");
var _girdPulse = require("../animations/gird-pulse");
const initHome = ()=>{
    console.log("\uD83C\uDFE0 Home Page - Initializing components");
    (0, _energyPriceChart.initEnergyPriceChart)();
    (0, _swiperHome.initSwiperHome)();
    (0, _faq.initFAQ)();
    (0, _girdPulse.gridPulse)();
};

},{"../energyPriceChart":"eOPfW","../swiper-home":"9pJxG","../faq":"3W7Bz","../animations/gird-pulse":"kAGjj","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"eOPfW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initEnergyPriceChart", ()=>initEnergyPriceChart);
var _core = require("@xatom/core");
var _auto = require("chart.js/auto"); // Import ChartConfiguration and FontSpec
var _autoDefault = parcelHelpers.interopDefault(_auto);
// Store chart instance globally
let priceChart = null;
// Store the currently selected date, always in German time (CET/CEST)
let currentSelectedDate = convertToGermanTime(new Date());
// Prevent redundant Wized updates
let lastWizedUpdateSignature = null;
// Helper function to convert any date to German time (CET/CEST)
function convertToGermanTime(date) {
    // Get the current time difference between local time and UTC
    const localOffset = date.getTimezoneOffset();
    // Create a date object for the same timestamp, but interpreted as if in Berlin timezone
    const tempDate = new Date(date.getTime());
    // Calculate UTC date (as epoch)
    const utcTime = tempDate.getTime() + localOffset * 60000;
    // European times: UTC+1 (winter/CET) or UTC+2 (summer/CEST)
    // We can determine this with Intl.DateTimeFormat to get precise DST transitions
    const berlinTimeStr = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Berlin",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false
    }).format(date);
    // Parse this properly formatted string into a Date
    const [datePart, timePart] = berlinTimeStr.split(", ");
    const [day, month, year] = datePart.split("/").map(Number);
    const [hour, minute, second] = timePart.split(":").map(Number);
    const germanDate = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
    return germanDate;
}
// Helper function to get "today" in German time
function getGermanToday() {
    // Get the current date in German timezone
    const berlinTimeStr = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Berlin",
        year: "numeric",
        month: "numeric",
        day: "numeric"
    }).format(new Date());
    // Parse this properly formatted string
    const [day, month, year] = berlinTimeStr.split("/").map(Number);
    // Create midnight in German time - explicitly as midnight
    const germanToday = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
    console.log("German today raw:", berlinTimeStr);
    console.log("Parsed as midnight German time:", germanToday.toISOString());
    return germanToday;
}
function initEnergyPriceChart() {
    (0, _core.onReady)(()=>{
        injectStyles();
        setupDateNavigation(); // Setup UI first
        if (window.Wized) setupWizedIntegration();
        else {
            initChart();
            updateDateDisplay(currentSelectedDate);
            handleNoDataForDate(); // Show no data message
        }
    });
}
// Setup Wized Integration
function setupWizedIntegration() {
    window.Wized = window.Wized || [];
    window.Wized.push((Wized)=>{
        // Initialize chart structure and basic UI first - do this immediately for perceived performance
        console.time("chartInitialization");
        initChart();
        console.timeEnd("chartInitialization");
        // Log timezone information for debugging
        console.log("Browser timezone:", Intl.DateTimeFormat().resolvedOptions().timeZone);
        console.log("Browser local time:", new Date().toISOString());
        // Get current German time and use it for initial display
        currentSelectedDate = getGermanToday(); // Use getGermanToday for consistency
        console.log("Current selected date (German midnight):", currentSelectedDate.toISOString());
        updateDateDisplay(currentSelectedDate); // Displays today in German time
        updateNextButtonState();
        console.log("Forcing initial load for the current day (German time).");
        // 1. Calculate today's date range in German time
        const today = getGermanToday();
        console.log("German today (midnight):", today.toISOString());
        // Start date is today at 00:00 German time (should already be this way)
        const initialStartDate = new Date(today);
        // End date is today at 23:59 German time
        const initialEndDate = new Date(today);
        initialEndDate.setUTCHours(23, 59, 59);
        console.log("Start date (German midnight):", initialStartDate.toISOString());
        console.log("End date (German 23:59:59):", initialEndDate.toISOString());
        const initialPeriodStart = formatDateToENTSOE(initialStartDate);
        const initialPeriodEnd = formatDateToENTSOE(initialEndDate);
        console.log("API request period:", initialPeriodStart, "to", initialPeriodEnd);
        // 2. Show loading state before starting any requests
        showLoadingState();
        // Track request attempts for retry logic
        let requestAttempts = 0;
        const maxRetries = 3;
        let loadingTimeout;
        // CRITICAL FIX: Setup the watcher FIRST, before making any requests
        if (Wized.reactivity && Wized.reactivity.watch) {
            Wized.reactivity.watch(()=>Wized.data?.r?.XLMtoJSON?.data, (newData, oldData)=>{
                console.log("Wized data watcher triggered.");
                clearTimeout(loadingTimeout); // Clear timeout when watcher triggers
                if (!newData) {
                    console.log("Watcher received null/undefined data.");
                    handleNoDataForDate();
                    return;
                }
                console.time("chartDataProcessing");
                if (isValidChartData(newData) && !isDataUnchanged(newData, oldData)) {
                    console.log("Watcher received valid & changed data, updating chart.");
                    updateChartWithWizedData(newData);
                } else if (!isValidChartData(newData)) {
                    console.log("Watcher received invalid data structure.");
                    handleNoDataForDate();
                } else {
                    console.log("Wized data watcher: Data is valid but unchanged, hiding loading.");
                    // Ensure loading is hidden if data comes back but is the same
                    hideLoadingState();
                }
                console.timeEnd("chartDataProcessing");
            }, {
                deep: true
            });
            console.log("Wized data watcher setup complete");
        } else console.warn("Wized reactivity watcher not available.");
        // Function to set timeout with retry capability
        function setLoadingTimeout() {
            loadingTimeout = setTimeout(()=>{
                if (document.body.classList.contains("chart-loading")) {
                    console.warn(`API request timeout after 15 seconds (attempt ${requestAttempts})`);
                    if (requestAttempts < maxRetries) {
                        console.log(`Retrying API request (attempt ${requestAttempts + 1}/${maxRetries})`);
                        executeDataRequest();
                    } else {
                        console.error("Max retries reached, showing fallback");
                        hideLoadingState();
                        handleNoDataForDate();
                    }
                }
            }, 15000);
        }
        // Function to execute the data request with retry logic
        function executeDataRequest() {
            requestAttempts++;
            console.log(`Executing data request (attempt ${requestAttempts})`);
            // Clear any existing timeout
            clearTimeout(loadingTimeout);
            setLoadingTimeout();
            // Update Wized variables for this attempt
            const variablesUpdated = updateWizedVariables(initialPeriodStart, initialPeriodEnd, Wized);
            if (!variablesUpdated) {
                console.error("Failed to update Wized variables");
                if (requestAttempts < maxRetries) setTimeout(()=>executeDataRequest(), 1000); // Retry after 1 second
                else {
                    clearTimeout(loadingTimeout);
                    hideLoadingState();
                    handleNoDataForDate();
                }
                return;
            }
            // Execute the API request
            if (Wized.requests?.execute) {
                console.log("Executing XLMtoJSON request for today's data.");
                console.time("apiRequestTime");
                Wized.requests.execute("XLMtoJSON").then(()=>{
                    console.timeEnd("apiRequestTime");
                    console.log("XLMtoJSON request completed successfully");
                    clearTimeout(loadingTimeout);
                // Note: Chart update will be handled by the watcher
                }).catch((error)=>{
                    console.timeEnd("apiRequestTime");
                    console.error("Error executing XLMtoJSON request:", error);
                    clearTimeout(loadingTimeout);
                    if (requestAttempts < maxRetries) {
                        console.log(`Retrying after error (attempt ${requestAttempts + 1}/${maxRetries})`);
                        setTimeout(()=>executeDataRequest(), 2000); // Retry after 2 seconds
                    } else {
                        console.error("Max retries reached after API error");
                        handleNoDataForDate();
                    }
                });
            } else {
                console.error("Wized.requests.execute not available!");
                if (requestAttempts < maxRetries) setTimeout(()=>executeDataRequest(), 1000); // Retry after 1 second
                else {
                    clearTimeout(loadingTimeout);
                    hideLoadingState();
                    handleNoDataForDate();
                }
            }
        }
        // 3. Check if data already exists before making a request
        const existingData = Wized.data?.r?.XLMtoJSON?.data;
        if (existingData && isValidChartData(existingData)) {
            console.log("Found existing valid data, using it instead of new request");
            updateChartWithWizedData(existingData);
            return;
        }
        // 4. Start the initial data request with retry capability
        executeDataRequest();
    });
}
// Setup Date Navigation UI
function setupDateNavigation() {
    const chartWrapper = document.querySelector(".chart-wrapper");
    const chartTitle = chartWrapper?.querySelector(".chart-title-container"); // Assuming a title container exists or can be added
    if (!chartWrapper) return;
    // Create date navigation container
    const dateNavContainer = document.createElement("div");
    dateNavContainer.className = "date-nav-container";
    const prevButton = document.createElement("button");
    prevButton.innerHTML = "\u2039";
    prevButton.className = "date-nav-button date-nav-prev";
    prevButton.setAttribute("aria-label", "Vorheriger Tag");
    prevButton.setAttribute("id", "prevDayButton");
    prevButton.type = "button"; // Explicitly set button type
    // Create date display container that will contain the date display and the date picker
    const dateDisplayContainer = document.createElement("div");
    dateDisplayContainer.className = "date-display-container";
    // Create date display that will act as a button to open the date picker
    const dateDisplay = document.createElement("div");
    dateDisplay.id = "dateDisplay";
    dateDisplay.className = "date-display date-picker-trigger";
    dateDisplay.setAttribute("role", "button");
    dateDisplay.setAttribute("tabindex", "0");
    dateDisplay.setAttribute("aria-label", "Datum ausw\xe4hlen");
    // Add calendar icon to indicate it's clickable
    dateDisplay.innerHTML = '<span id="dateDisplayText"></span><span class="calendar-icon"></span>';
    // Create hidden date input that will serve as our calendar
    const datePickerInput = document.createElement("input");
    datePickerInput.type = "date";
    datePickerInput.id = "datePickerInput";
    datePickerInput.className = "date-picker-input";
    // Set max date to today (in German time) to prevent selecting future dates
    const today = getGermanToday();
    const year = today.getUTCFullYear();
    const month = String(today.getUTCMonth() + 1).padStart(2, "0");
    const day = String(today.getUTCDate()).padStart(2, "0");
    datePickerInput.max = `${year}-${month}-${day}`;
    // Position it absolutely but make it accessible for click/focus events
    datePickerInput.style.position = "absolute";
    datePickerInput.style.opacity = "0";
    datePickerInput.style.height = "1px";
    datePickerInput.style.width = "1px";
    datePickerInput.style.zIndex = "-1";
    // Prevent iOS zoom on focus
    datePickerInput.style.fontSize = "16px";
    // Add date display and picker to container
    dateDisplayContainer.appendChild(dateDisplay);
    dateDisplayContainer.appendChild(datePickerInput);
    const nextButton = document.createElement("button");
    nextButton.innerHTML = "\u203A";
    nextButton.className = "date-nav-button date-nav-next";
    nextButton.setAttribute("aria-label", "N\xe4chster Tag");
    nextButton.setAttribute("id", "nextDayButton");
    nextButton.type = "button"; // Explicitly set button type
    dateNavContainer.appendChild(prevButton);
    dateNavContainer.appendChild(dateDisplayContainer);
    dateNavContainer.appendChild(nextButton);
    // Insert date navigation - ideally next to the title if structure allows
    // Or insert it before the chart container as fallback
    if (chartTitle) chartTitle.appendChild(dateNavContainer);
    else {
        const chartContainer = chartWrapper.querySelector(".chart-container");
        if (chartContainer) chartWrapper.insertBefore(dateNavContainer, chartContainer);
        else chartWrapper.prepend(dateNavContainer);
    }
    // Event listeners with improved handling and stopping propagation
    prevButton.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation(); // Stop event from bubbling
        console.log("Previous day button clicked");
        if (!prevButton.disabled) navigateDays(-1);
        else console.log("Previous button is disabled, ignoring click");
    });
    nextButton.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation(); // Stop event from bubbling
        console.log("Next day button clicked");
        if (!nextButton.disabled && nextButton.style.display !== "none") navigateDays(1);
        else console.log("Next button is disabled or hidden, ignoring click");
    });
    // Make the date display clickable to open the date picker
    dateDisplay.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation(); // Stop event from bubbling
        console.log("Date display clicked");
        openDatePicker();
    });
    dateDisplay.addEventListener("touchend", (e)=>{
        e.preventDefault();
        e.stopPropagation(); // Stop event from bubbling
        console.log("Date display touched");
        openDatePicker();
    });
    dateDisplay.addEventListener("keydown", (e)=>{
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.stopPropagation(); // Stop event from bubbling
            console.log("Date display keydown");
            openDatePicker();
        }
    });
    // Handle date selection from the picker
    datePickerInput.addEventListener("change", handleDatePickerChange);
    updateDateDisplay(currentSelectedDate);
    updateNextButtonState();
}
// Open the date picker when clicking on date display
function openDatePicker() {
    console.log("Opening date picker...");
    const datePickerInput = document.getElementById("datePickerInput");
    if (!datePickerInput) {
        console.error("Date picker input element not found!");
        return;
    }
    // Format date as YYYY-MM-DD from UTC components to avoid timezone issues
    const year = currentSelectedDate.getUTCFullYear();
    const month = String(currentSelectedDate.getUTCMonth() + 1).padStart(2, "0");
    const day = String(currentSelectedDate.getUTCDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    console.log("Setting date picker to:", formattedDate, "from", currentSelectedDate.toISOString());
    datePickerInput.value = formattedDate;
    // Add overlay to capture clicks outside the picker
    let overlay = document.querySelector(".date-picker-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.className = "date-picker-overlay";
        document.body.appendChild(overlay);
        // Close the picker when clicking outside
        overlay.addEventListener("click", (e)=>{
            e.preventDefault();
            e.stopPropagation();
            closeDatePicker();
        });
    }
    // Show the date picker with proper positioning
    datePickerInput.classList.add("visible");
    overlay.classList.add("visible");
    // Slight delay to ensure DOM updates before focus/click
    setTimeout(()=>{
        console.log("Focusing and clicking date input...");
        datePickerInput.focus();
        // Use direct .showPicker() method if available
        if (typeof datePickerInput.showPicker === "function") try {
            datePickerInput.showPicker();
            console.log("Used showPicker() method");
        } catch (e) {
            console.log("showPicker() failed, falling back to click:", e);
            datePickerInput.click();
        }
        else {
            datePickerInput.click();
            console.log("Used click() method (showPicker not available)");
        }
    }, 50);
}
// Close the date picker
function closeDatePicker() {
    const datePickerInput = document.getElementById("datePickerInput");
    const overlay = document.querySelector(".date-picker-overlay");
    if (datePickerInput) datePickerInput.classList.remove("visible");
    if (overlay) overlay.classList.remove("visible");
    console.log("Date picker closed");
}
// Handle date selection from the date picker
function handleDatePickerChange(event) {
    const datePickerInput = event.target;
    if (!datePickerInput.value) return;
    console.log("Date picker value:", datePickerInput.value);
    // Parse the date parts from the YYYY-MM-DD value
    const [year, month, day] = datePickerInput.value.split("-").map(Number);
    // Create midnight on that date in German timezone
    const selectedDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0));
    console.log("Date picker selected date (German midnight):", selectedDate.toISOString());
    // Ensure date is valid and not in the future (in German time)
    const today = getGermanToday();
    if (selectedDate.getTime() > today.getTime()) {
        console.log("Cannot select future date");
        closeDatePicker();
        return;
    }
    // Close the date picker
    closeDatePicker();
    // Update selected date and refresh the chart
    currentSelectedDate = selectedDate;
    showLoadingState();
    if (window.Wized) window.Wized.push((Wized)=>{
        handleDateChange(currentSelectedDate, Wized);
    });
    else {
        updateDateDisplay(currentSelectedDate);
        console.log("Wized not found, cannot trigger data refresh.");
        handleNoDataForDate();
    }
    updateNextButtonState();
}
// Navigate between days
function navigateDays(days) {
    console.log(`Navigating ${days > 0 ? "forward" : "backward"} by ${Math.abs(days)} day(s)`);
    // Create a new date based on the current selected date
    const newDate = new Date(currentSelectedDate);
    // Add days using UTC to maintain time consistency
    newDate.setUTCDate(currentSelectedDate.getUTCDate() + days);
    const today = getGermanToday();
    const tomorrow = new Date(today);
    tomorrow.setUTCDate(today.getUTCDate() + 1);
    // Use German time for all logging to help with debugging
    console.log("Navigation - Current date:", formatDate(currentSelectedDate), currentSelectedDate.toISOString());
    console.log("Navigation - New date:", formatDate(newDate), newDate.toISOString());
    console.log("Navigation - Today (German):", formatDate(today), today.toISOString());
    console.log("Navigation - Tomorrow (German):", formatDate(tomorrow), tomorrow.toISOString());
    if (newDate >= tomorrow) {
        // Use >= to prevent navigating *to* tomorrow
        console.log("Cannot navigate to tomorrow or later.");
        return;
    }
    currentSelectedDate = new Date(newDate);
    showLoadingState(); // Show loading indicator immediately
    updateNextButtonState(); // Update button state immediately (will be disabled due to loading)
    if (window.Wized) window.Wized.push((Wized)=>{
        // Pass Wized object - this now primarily sets variables
        // and triggers the request if variables were changed.
        handleDateChange(currentSelectedDate, Wized);
    });
    else {
        updateDateDisplay(currentSelectedDate);
        console.log("Wized not found, cannot trigger data refresh.");
        handleNoDataForDate(); // Clear chart if no Wized (will hide loading)
    }
}
// Update next button state (hidden if date is today, disabled if loading)
function updateNextButtonState() {
    const nextButton = document.querySelector("#nextDayButton");
    const prevButton = document.querySelector("#prevDayButton");
    if (!nextButton || !prevButton) {
        console.warn("Navigation buttons not found for state update");
        return;
    }
    const today = getGermanToday();
    const selectedDay = new Date(currentSelectedDate);
    // Compare dates using time strings to avoid timezone issues
    const isToday = selectedDay.toISOString().substring(0, 10) === today.toISOString().substring(0, 10);
    const isLoading = document.body.classList.contains("chart-loading");
    console.log("Updating button states:", {
        isToday,
        isLoading,
        selectedDate: formatDate(selectedDay),
        today: formatDate(today)
    });
    // Next button: hide on today, disable when loading
    if (isToday) nextButton.style.display = "none";
    else {
        nextButton.style.display = "inline-flex";
        nextButton.disabled = isLoading;
        nextButton.classList.toggle("disabled", isLoading);
    }
    // Previous button: always visible, but disabled when loading
    prevButton.disabled = isLoading;
    prevButton.classList.toggle("disabled", isLoading);
    // For reference - log the button states
    console.log("Button states:", {
        nextButtonVisible: nextButton.style.display !== "none",
        nextButtonEnabled: !nextButton.disabled,
        prevButtonEnabled: !prevButton.disabled
    });
}
// Handle date change: update display, Wized vars, and trigger API request
function handleDateChange(newDate, Wized) {
    console.log("handleDateChange called with date:", formatDate(newDate));
    // Accept Wized object
    currentSelectedDate = newDate;
    updateDateDisplay(currentSelectedDate);
    // For API requests, we need:
    // 1. Start: the selected date at 00:00 German time
    // 2. End: the same day at 23:59:59 German time
    // Start date should already be at midnight
    const startDate = new Date(newDate);
    // End date is the same day at 23:59:59
    const endDate = new Date(newDate);
    endDate.setUTCHours(23, 59, 59);
    console.log("Date change - start date:", startDate.toISOString());
    console.log("Date change - end date:", endDate.toISOString());
    const periodStart = formatDateToENTSOE(startDate);
    const periodEnd = formatDateToENTSOE(endDate);
    console.log(`Request period: ${periodStart} to ${periodEnd}`);
    // Log the Wized requests API availability
    console.log("Wized requests API available:", !!Wized?.requests?.execute);
    // Set a timeout for the API request to prevent hanging
    const requestTimeout = setTimeout(()=>{
        if (document.body.classList.contains("chart-loading")) {
            console.warn("Request timeout after 15 seconds - showing fallback");
            hideLoadingState();
            handleNoDataForDate();
        }
    }, 15000);
    // Pass Wized object to updateWizedVariables
    const variablesChanged = updateWizedVariables(periodStart, periodEnd, Wized);
    // Only execute the request if the variables actually changed.
    if (variablesChanged) {
        if (Wized.requests?.execute) {
            console.log(`Variables changed, executing XLMtoJSON request for date: ${formatDate(newDate)}`);
            console.time("dateChangeApiRequest");
            Wized.requests.execute("XLMtoJSON").then(()=>{
                console.timeEnd("dateChangeApiRequest");
                console.log("XLMtoJSON request completed successfully");
                clearTimeout(requestTimeout);
            }).catch((error)=>{
                console.timeEnd("dateChangeApiRequest");
                console.error("Error executing XLMtoJSON request:", error);
                // Handle error: Clear chart, show message, hide loading
                clearTimeout(requestTimeout);
                handleNoDataForDate();
            });
            // Loading state will be hidden by the watcher when data arrives or if request fails
            return; // We've triggered a request, so we can return
        } else {
            // Variables changed but we can't execute the request
            console.error("Variables changed, but Wized.requests.execute not available! Relying on reactivity.");
            // Set a safety timeout to hide loading if the watcher doesn't trigger
            clearTimeout(requestTimeout);
            setTimeout(()=>{
                if (document.body.classList.contains("chart-loading")) {
                    console.warn("Safety timeout - hiding loading state after 10s inactivity");
                    hideLoadingState();
                    handleNoDataForDate();
                }
            }, 10000);
        }
    } else {
        // If variable update was skipped (variables were already correct)
        console.log("Variable update skipped (already correct), hiding loading state.");
        clearTimeout(requestTimeout);
        hideLoadingState(); // Hide loading immediately
    }
}
// Update the date display UI element
function updateDateDisplay(date) {
    const dateDisplayElement = document.getElementById("dateDisplay");
    const dateDisplayText = document.getElementById("dateDisplayText");
    if (dateDisplayElement && !dateDisplayText) {
        // Handle legacy case - make it compatible with older structure
        console.log("Updating date display (legacy mode)");
        dateDisplayElement.textContent = formatDate(date);
        return;
    }
    if (dateDisplayText) {
        console.log("Updating date display:", formatDate(date));
        dateDisplayText.textContent = formatDate(date);
    } else console.warn("Date display element not found for update");
}
// Format date for ENTSO-E API (YYYYMMDDHHMM)
function formatDateToENTSOE(date) {
    // The date we receive should already be in the correct timezone
    // Format with proper hours and minutes
    const formatted = date.getUTCFullYear() + String(date.getUTCMonth() + 1).padStart(2, "0") + String(date.getUTCDate()).padStart(2, "0") + String(date.getUTCHours()).padStart(2, "0") + String(date.getUTCMinutes()).padStart(2, "0");
    console.log(`Formatting ${date.toISOString()} to ENTSO-E format: ${formatted}`);
    return formatted;
}
// Update Wized variables - Accepts Wized object
function updateWizedVariables(startValue, endValue, Wized) {
    // Accept Wized object
    // Log Wized object structure for debugging
    console.log("Wized object in updateWizedVariables:", {
        hasData: !!Wized?.data,
        hasVariables: !!Wized?.data?.variables,
        hasSet: !!Wized?.data?.variables?.set,
        hasDataV: !!Wized?.data?.v,
        currentStart: Wized?.data?.v?.periodeStart,
        currentEnd: Wized?.data?.v?.periodeEnd
    });
    // Direct fallback approach - try to set variables directly if API isn't available
    const useDirectSet = !Wized?.data?.variables?.set;
    // Get current values for comparison
    const currentStart = Wized?.data?.v?.periodeStart;
    const currentEnd = Wized?.data?.v?.periodeEnd;
    const signature = `${startValue}|${endValue}`;
    // Only prevent update if signature AND current Wized values match
    if (currentStart === startValue && currentEnd === endValue && lastWizedUpdateSignature === signature) {
        console.log("Wized vars unchanged, skipping update.");
        return false; // Indicate update was skipped
    }
    console.log(`Updating Wized variables: start=${startValue}, end=${endValue} (using ${useDirectSet ? "direct assignment" : "API"})`);
    lastWizedUpdateSignature = signature; // Store signature before update
    try {
        if (useDirectSet) {
            // FALLBACK: Direct assignment if variables API not available
            console.log("Using direct variable assignment as fallback");
            if (Wized?.data?.v) {
                Wized.data.v.periodeStart = startValue;
                Wized.data.v.periodeEnd = endValue;
                console.log("Direct variable assignment complete");
                return true;
            } else {
                console.error("Cannot use direct assignment, Wized.data.v not available");
                return false;
            }
        } else {
            // Use the passed Wized object's variable API
            const wizedVariables = Wized.data.variables;
            if (wizedVariables.batch) wizedVariables.batch(()=>{
                wizedVariables.set("periodeStart", startValue);
                wizedVariables.set("periodeEnd", endValue);
            });
            else {
                wizedVariables.set("periodeStart", startValue);
                wizedVariables.set("periodeEnd", endValue);
            }
            console.log("Wized variables updated via API");
            return true; // Indicate update was triggered
        }
    } catch (error) {
        console.error("Error updating Wized variables:", error);
        // Last-resort fallback: try direct assignment even if API was preferred
        if (!useDirectSet && Wized?.data?.v) try {
            console.log("API failed, trying direct assignment as last resort");
            Wized.data.v.periodeStart = startValue;
            Wized.data.v.periodeEnd = endValue;
            console.log("Last-resort direct assignment succeeded");
            return true;
        } catch (fallbackError) {
            console.error("Last-resort direct assignment also failed:", fallbackError);
        }
        lastWizedUpdateSignature = null; // Reset signature on error
        return false; // Indicate update failed
    }
}
// Check if data is valid
function isValidChartData(data) {
    return data && data.timeSeries && Array.isArray(data.timeSeries) && data.timeSeries.length > 0 && data.timeSeries[0].periods && Array.isArray(data.timeSeries[0].periods) && data.timeSeries[0].periods.length > 0 && data.timeSeries[0].periods[0].points && Array.isArray(data.timeSeries[0].periods[0].points) && data.timeSeries[0].periods[0].points.length > 0;
}
// Check if new data is different from the last processed data
let lastProcessedDataSignature = null;
function isDataUnchanged(newData, oldData) {
    if (!isValidChartData(newData)) {
        // If new data is invalid, consider it changed only if the last signature was valid
        const changed = lastProcessedDataSignature !== null;
        lastProcessedDataSignature = null; // Reset signature as current data is invalid
        return !changed; // Return true (unchanged) only if last was also invalid/null
    }
    try {
        const startTime = newData.timeSeries[0].periods[0].timeInterval.start;
        const pointsSignature = JSON.stringify(newData.timeSeries[0].periods[0].points.map((p)=>({
                p: p.position,
                pr: p.price
            })));
        const newSignature = `${startTime}|${pointsSignature}`;
        if (newSignature === lastProcessedDataSignature) {
            console.log("Data signature match, data unchanged.");
            return true;
        }
        console.log("Data signature mismatch, data changed.");
        lastProcessedDataSignature = newSignature;
        return false;
    } catch (error) {
        console.warn("Error creating data signature:", error);
        lastProcessedDataSignature = null;
        return false; // Assume changed on error
    }
}
// Format time from point position
function formatTimeFromPosition(position) {
    const hour = position - 1;
    // Ensure hour is within 0-23 range
    if (hour < 0 || hour > 23) {
        console.warn("Invalid position received:", position);
        return "--:--";
    }
    return hour.toString().padStart(2, "0") + ":00";
}
// Format date for display (DD.MM.YYYY)
function formatDate(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) return "--.--.----";
    // Always create a new Intl.DateTimeFormat instance that's guaranteed to use German formatting
    // This ensures consistent display regardless of user's locale settings
    return new Intl.DateTimeFormat("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "Europe/Berlin"
    }).format(date);
}
// Convert MWh price (EUR) to Cents/kWh
function convertMWhToCentsPerKWh(mwhPrice) {
    const price = Number(mwhPrice);
    return isNaN(price) ? 0 : price / 10;
}
// Update chart with new data
function updateChartWithWizedData(data) {
    // Check if data is valid *before* hiding loading, in case we need to show "no data"
    if (!isValidChartData(data)) {
        console.warn("Invalid data for chart update called with:", data);
        handleNoDataForDate(); // This will call hideLoadingState
        return;
    }
    // Only hide loading *after* processing valid data
    hideLoadingState(); // Hide loading indicator now that we have valid data to process
    if (!priceChart) {
        // Should not happen if initChart worked, but good practice
        console.error("Price chart instance not available for update.");
        return;
    }
    console.log("Updating chart with Wized data...");
    try {
        console.time("chartDataPrep");
        const period = data.timeSeries[0].periods[0];
        const points = period.points;
        // Ensure points is an array and has length
        if (!Array.isArray(points) || points.length === 0) {
            console.warn("No points data found in the period.");
            handleNoDataForDate(); // This will call hideLoadingState (redundant, but safe)
            return;
        }
        // Pre-allocate arrays for performance
        const labels = new Array(points.length);
        const pricesInCentsPerKWh = new Array(points.length);
        // Process all points in one loop for better performance
        let minPrice = Infinity;
        let maxPrice = -Infinity;
        let minPriceIndex = -1;
        let maxPriceIndex = -1;
        let totalPrice = 0;
        let validPriceCount = 0;
        // Single pass through data for better performance
        for(let i = 0; i < points.length; i++){
            labels[i] = (points[i].position - 1).toString(); // 0-23
            const price = convertMWhToCentsPerKWh(points[i].price);
            pricesInCentsPerKWh[i] = price;
            if (!isNaN(price)) {
                if (price < minPrice) {
                    minPrice = price;
                    minPriceIndex = i;
                }
                if (price > maxPrice) {
                    maxPrice = price;
                    maxPriceIndex = i;
                }
                totalPrice += price;
                validPriceCount++;
            }
        }
        // Check if prices array is valid after processing
        if (validPriceCount === 0) {
            console.warn("Processed prices resulted in empty or invalid array.");
            handleNoDataForDate();
            return;
        }
        // --- Highlight 4 lowest prices as green bars ---
        // Find indices of the 4 lowest prices
        const priceWithIndices = pricesInCentsPerKWh.map((price, idx)=>({
                price,
                idx
            }));
        // Sort by price ascending
        priceWithIndices.sort((a, b)=>a.price - b.price);
        // Get indices of the 4 lowest prices
        const lowestIndices = priceWithIndices.slice(0, 4).map((obj)=>obj.idx);
        // Create backgroundColor array
        const backgroundColor = pricesInCentsPerKWh.map((_, idx)=>lowestIndices.includes(idx) ? "#d5ff6a" : "#33b276");
        // --- End highlight logic ---
        const avgPrice = totalPrice / validPriceCount;
        const minPriceHour = minPriceIndex !== -1 ? formatTimeFromPosition(points[minPriceIndex].position) : "N/A";
        const maxPriceHour = maxPriceIndex !== -1 ? formatTimeFromPosition(points[maxPriceIndex].position) : "N/A";
        console.timeEnd("chartDataPrep");
        // Update chart and stats - this is the expensive operation
        console.time("chartRender");
        priceChart.data.labels = labels;
        priceChart.data.datasets[0].data = pricesInCentsPerKWh;
        priceChart.data.datasets[0].backgroundColor = backgroundColor; // <-- Set bar colors
        // Limit animations for faster rendering
        priceChart.options.animation = {
            duration: 200
        };
        priceChart.update();
        console.timeEnd("chartRender");
        // Update stats display after chart is updated (non-blocking)
        requestAnimationFrame(()=>{
            updatePriceStats(minPrice, maxPrice, avgPrice, minPriceHour, maxPriceHour);
        });
        console.log("Chart updated successfully.");
    } catch (error) {
        console.error("Error updating chart:", error, data);
        handleNoDataForDate(); // This will call hideLoadingState
    }
}
// Handle cases where no data is available for the selected date OR request fails
function handleNoDataForDate() {
    console.log(`Handling no data/error for date: ${formatDate(currentSelectedDate)}`);
    if (priceChart) {
        priceChart.data.labels = [];
        priceChart.data.datasets[0].data = [];
        priceChart.update();
    }
    clearPriceStats(); // Show appropriate message in stats area
    hideLoadingState(); // Ensure loading indicator is hidden
}
// Show loading state UI
function showLoadingState() {
    console.log("Showing loading state...");
    const chartWrapper = document.querySelector(".chart-wrapper");
    const statsContainer = document.getElementById("priceStats");
    if (chartWrapper) {
        chartWrapper.classList.add("loading");
        // Optional: Add a visual overlay or spinner if desired
        let overlay = chartWrapper.querySelector(".loading-overlay"); // Cast to HTMLElement
        if (!overlay) {
            overlay = document.createElement("div");
            overlay.className = "loading-overlay";
            overlay.style.position = "absolute";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.right = "0";
            overlay.style.bottom = "0";
            overlay.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "10";
            overlay.innerHTML = '<div class="loader"></div>'; // Simple spinner div
            chartWrapper.appendChild(overlay);
        }
        overlay.style.display = "flex"; // Now TS knows 'style' exists
    }
    if (statsContainer) statsContainer.innerHTML = '<div style="text-align: center; width: 100%; padding: 20px; color: #777;">Daten werden geladen...</div>';
    document.body.classList.add("chart-loading"); // Add class to body for easier button disabling checks
    updateNextButtonState(); // Disable navigation buttons
}
// Hide loading state UI
function hideLoadingState() {
    console.log("Hiding loading state...");
    const chartWrapper = document.querySelector(".chart-wrapper");
    if (chartWrapper) {
        chartWrapper.classList.remove("loading");
        const overlay = chartWrapper.querySelector(".loading-overlay"); // Cast to HTMLElement
        if (overlay) overlay.style.display = "none"; // Now TS knows 'style' exists
    }
    document.body.classList.remove("chart-loading"); // Remove body class
    updateNextButtonState(); // Re-enable navigation buttons if appropriate
}
// Inject CSS styles
function injectStyles() {
    const styles = `
    .chart-wrapper {
      font-family: 'Fira Sans', sans-serif;
      color: #333;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 20px;
      background-color: #FFFFFF;
      border: 1px solid #EAEAEA;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      position: relative; /* Needed for overlay */
    }
    .chart-title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
     .chart-main-title {
         margin: 0;
         padding: 0;
         font-size: 18px;
         font-weight: 600;
         color: #000;
     }
    .date-nav-container {
        display: flex;
        align-items: center;
        position: relative; /* Required for absolute positioning */
    }
    .date-display-container {
        position: relative; /* Required for absolute positioning */
        margin: 0 8px;
    }
    .date-nav-button {
        background-color: #f0f0f0;
        border: 1px solid #dcdcdc;
        color: #555;
        padding: 4px 8px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        line-height: 1;
        transition: background-color 0.2s, opacity 0.2s;
        height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        z-index: 5; /* Ensure buttons are above other elements */
        position: relative; /* Required for z-index */
    }
    .date-nav-button:hover:not(:disabled) {
        background-color: #e0e0e0;
    }
    .date-nav-button:disabled,
    .date-nav-button.disabled {
        opacity: 0.5;
        cursor: not-allowed !important;
    }
    .date-display {
        background-color: #fff;
        border: 1px solid #dcdcdc;
        color: #333;
        padding: 5px 12px;
        border-radius: 4px;
        font-size: 14px;
        min-width: 90px;
        text-align: center;
        font-weight: 500;
        height: 28px;
        line-height: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        position: relative; /* Required for z-index */
        z-index: 5; /* Ensure visible above other elements */
    }
    .date-picker-trigger {
        cursor: pointer;
        transition: background-color 0.2s, border-color 0.2s;
    }
    .date-picker-trigger:hover {
        background-color: #f8f8f8;
        border-color: #bbb;
    }
    .date-picker-trigger:focus {
        outline: none;
        border-color: #4A90E2;
        box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
    }
    .calendar-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-left: 6px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .date-picker-input {
        position: absolute;
        /* Position below date display */
        top: 100%;
        left: 0;
        margin-top: 4px;
        z-index: 100;
        /* Match chart styling */
        font-family: 'Fira Sans', sans-serif;
        font-size: 16px;
        color: #333;
        border-radius: 4px;
        border: 1px solid #dcdcdc;
        background-color: #fff;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        /* For different states of visibility */
        opacity: 0;
        height: 1px;
        width: 1px;
        transition: opacity 0.2s;
    }
    /* Make date picker match the chart theme when visible */
    .date-picker-input.visible {
        opacity: 1;
        height: auto;
        width: auto;
    }
    /* Ensure date picker is really hidden when not in use */
    .date-picker-input:not(.visible) {
        pointer-events: none;
    }
    
    /* Create a clickable overlay when date picker is open */
    .date-picker-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.1);
        z-index: 90;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
    }
    .date-picker-overlay.visible {
        opacity: 1;
        pointer-events: auto;
    }
    
    /* For browsers that support styling native date inputs */
    .date-picker-input::-webkit-calendar-picker-indicator {
        background-color: #4A90E2;
        padding: 5px;
        border-radius: 3px;
    }
    input[type="date"] {
        color: #333;
        background-color: #fff;
    }
    
    .chart-scroll-wrapper { /* New wrapper for scrolling */
      overflow-x: auto;
      overflow-y: hidden; /* Prevent vertical scroll */
      margin-bottom: 20px; /* Keep margin consistent */
      -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
      scrollbar-width: thin; /* Firefox */
      scrollbar-color: #ccc #eee; /* Firefox */
    }
    .chart-scroll-wrapper::-webkit-scrollbar { /* Chrome/Safari */
        height: 8px;
    }
    .chart-scroll-wrapper::-webkit-scrollbar-track { /* Chrome/Safari */
        background: #eee;
        border-radius: 4px;
    }
    .chart-scroll-wrapper::-webkit-scrollbar-thumb { /* Chrome/Safari */
        background: #ccc;
        border-radius: 4px;
    }

    .chart-container {
        position: relative;
        height: 350px; /* Increase base height slightly */
        width: 100%;
        min-width: 700px; /* Set min-width for chart content */
        /* margin-bottom removed, handled by wrapper */
    }
    #priceStats { 
      display: flex; 
      justify-content: space-around; 
      margin-top: 20px; 
      gap: 15px; 
      flex-wrap: wrap; 
      height: 100%; 
    }
    
    .stat-box { 
      flex: 1; 
      min-width: 160px; 
      max-width: 200px; 
      padding: 20px; 
      padding-right: 65px; /* Extra padding for icon space */
      border-radius: 12px; 
      text-align: left; 
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      border: 1px solid #e9ecef;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      transition: transform 0.2s ease, box-shadow 0.2s ease; 
      position: relative; 
      overflow: hidden;
    }
    
    .stat-box:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0,0,0,0.12);
    }
    
    /* Icon containers - positioned to not interfere with text */
    .stat-box::before { 
      content: ''; 
      position: absolute; 
      top: 15px; 
      right: 15px; 
      width: 40px; 
      height: 40px; 
      border-radius: 8px; 
      background-repeat: no-repeat; 
      background-position: center; 
      background-size: 20px 20px; 
      opacity: 0.9;
      flex-shrink: 0; /* Prevent icon from shrinking */
    }
    
    /* Highest Price - Red/Orange theme */
    .highest-price::before { 
      background-color: #ff6b6b; 
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>'); 
    }
    
    /* Lowest Price - Green theme */
    .lowest-price::before { 
      background-color: #33b276; 
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 18 10.5 8.5 15.5 13.5 23 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>'); 
    }
    
    /* Average Price - Blue theme */
    .average-price::before { 
      background-color: #1e22aa; 
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18m-9-9v18"></path></svg>'); 
    }
    
    /* Enhanced text styling with proper spacing */
    .stat-box-title { 
      font-size: 12px; 
      color: #6c757d; 
      margin-bottom: 8px; 
      font-weight: 600; 
      text-transform: uppercase;
      letter-spacing: 0.5px;
      line-height: 1.3;
      padding-right: 0; /* No additional padding needed due to container padding */
      max-width: 100%; /* Ensure it doesn't exceed container width */
      word-wrap: break-word; /* Allow long words to break */
      hyphens: auto; /* Enable hyphenation for better text flow */
    }
    
    .stat-value { 
      font-size: 28px; 
      font-weight: 700; 
      color: #212529; 
      margin-bottom: 4px; 
      line-height: 1.1;
      word-wrap: break-word;
    }
    
    .stat-label { 
      font-size: 13px; 
      color: #495057; 
      margin-bottom: 8px; 
      font-weight: 500; 
      line-height: 1.2;
    }
    
    .stat-indicator { 
      font-size: 11px; 
      color: #6c757d; 
      margin-top: 0; 
      font-weight: 500;
      line-height: 1.3;
      word-wrap: break-word;
    }
    
    .stat-indicator.positive { 
      color: #51cf66; 
    }
    
    .stat-indicator.negative { 
      color: #ff6b6b; 
    }
    
    /* Add subtle accent borders */
    .highest-price {
      border-left: 4px solid #ff6b6b;
    }
    
    .lowest-price {
      border-left: 4px solid #51cf66;
    }
    
    .average-price {
      border-left: 4px solid #4dabf7;
    }
    
    /* Responsive adjustments for smaller screens */
    @media (max-width: 768px) { 
      .stat-box { 
        padding: 15px; 
        padding-right: 55px; /* Adjust for smaller screens */
        max-width: 100%; 
        width: 100%; 
        margin-bottom: 15px; 
      }
      
      .stat-box::before {
        width: 35px;
        height: 35px;
        background-size: 18px 18px;
      }
      
      .stat-value { 
        font-size: 24px; 
      }
      
      .stat-label { 
        font-size: 12px; 
      }
    }
    
    @media (max-width: 480px) { 
      .stat-box { 
        padding: 12px; 
        padding-right: 50px; /* Further adjust for mobile */
      }
      
      .stat-box::before {
        width: 32px;
        height: 32px;
        background-size: 16px 16px;
        top: 12px;
        right: 12px;
      }
      
      .stat-value { 
        font-size: 20px; 
      }
    }

    /* Loading State Styles */
    .chart-wrapper.loading .chart-container,
    .chart-wrapper.loading #priceStats {
        /* Optional: reduce opacity or blur while loading */
        /* opacity: 0.5; */
    }
    /* Uses the overlay defined in showLoadingState */
    .loading-overlay .loader {
        border: 4px solid #f3f3f3; /* Light grey */
        border-top: 4px solid #4A90E2; /* Blue */
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
  `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    console.log("Chart styles injected");
}
// Initialize chart structure
function initChart() {
    if (priceChart) return;
    console.log("Initializing chart structure...");
    // Find the original container and the canvas
    const chartContainerElement = document.querySelector(".chart-container");
    const chartCanvas = document.getElementById("priceChart");
    if (!chartContainerElement || !chartCanvas) {
        console.error("Chart container or canvas element not found");
        return;
    }
    // Create the scroll wrapper if it doesn't exist
    let scrollWrapper = chartContainerElement.parentElement;
    if (!scrollWrapper || !scrollWrapper.classList.contains("chart-scroll-wrapper")) {
        scrollWrapper = document.createElement("div");
        scrollWrapper.className = "chart-scroll-wrapper";
        // Insert the wrapper before the container and move the container inside it
        chartContainerElement.parentNode?.insertBefore(scrollWrapper, chartContainerElement);
        scrollWrapper.appendChild(chartContainerElement);
    }
    const colors = {
        grid: "rgba(0, 0, 0, 0.08)",
        bar: "#E0E0E0",
        text: "#333",
        title: "#000",
        subtitle: "#555"
    };
    const titleFont = {
        size: 18,
        weight: 600,
        family: "'Fira Sans', sans-serif"
    };
    const tickFont = {
        size: 12,
        family: "'Fira Sans', sans-serif"
    };
    // Register custom plugin to display price labels above bars
    const priceLabelsPlugin = {
        id: "priceLabels",
        afterDatasetsDraw (chart) {
            const { ctx, data, chartArea, scales } = chart;
            const dataset = data.datasets[0];
            // Need at least 2 points to calculate spacing
            if (!dataset.data || dataset.data.length < 2) return;
            // Calculate approximate space per bar based on the first two points
            const barSpacing = scales.x.getPixelForValue(1) - scales.x.getPixelForValue(0);
            // Minimum spacing required to draw labels comfortably (adjust px value as needed)
            const minSpacingForLabels = 25;
            // If bars are too close together, skip drawing labels to improve performance
            if (barSpacing < minSpacingForLabels) // Optional: Log when skipping
            // console.log(`Skipping price labels, bar spacing (${barSpacing.toFixed(1)}px) too small.`);
            return;
            // Configure label style - Adjust font size slightly for better fit
            const isMobile = window.innerWidth < 768; // Keep for font size check
            ctx.font = isMobile ? '10px "Fira Sans", sans-serif' : '11px "Fira Sans", sans-serif';
            ctx.textAlign = "center";
            ctx.fillStyle = "#555";
            // Draw each price label - only process visible bars for performance
            const visibleIndices = [];
            for(let i = 0; i < dataset.data.length; i++){
                const xPos = scales.x.getPixelForValue(i);
                // Only process bars that are in the visible area
                if (xPos >= chartArea.left - barSpacing && xPos <= chartArea.right + barSpacing) visibleIndices.push(i);
            }
            // Only draw labels for visible bars
            visibleIndices.forEach((index)=>{
                const value = dataset.data[index];
                const xPos = scales.x.getPixelForValue(index);
                const yPos = scales.y.getPixelForValue(value) - 5; // Position above bar
                // Avoid drawing labels too close to the top edge if price is high
                if (yPos < chartArea.top + 10) return;
                const formattedValue = value.toLocaleString("de-DE", {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1
                });
                ctx.fillText(formattedValue, xPos, yPos);
            });
        }
    };
    // Check if plugin is already registered
    if (!(0, _autoDefault.default).registry.plugins.get("priceLabels")) (0, _autoDefault.default).register(priceLabelsPlugin);
    // Use faster animation options for the initial render
    priceChart = new (0, _autoDefault.default)(chartCanvas, {
        type: "bar",
        data: {
            labels: [],
            datasets: [
                {
                    label: "Cent/kWh",
                    data: [],
                    backgroundColor: colors.bar,
                    borderWidth: 0,
                    borderRadius: 0,
                    barPercentage: 0.6,
                    categoryPercentage: 0.7
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: "rgba(0,0,0,0.7)",
                    titleColor: "#fff",
                    bodyColor: "#fff",
                    callbacks: {
                        title: function(context) {
                            const hour = Number(context[0].label);
                            if (!isNaN(hour)) return `${String(hour).padStart(2, "0")}:00 - ${String(hour + 1).padStart(2, "0")}:00`;
                            return context[0].label;
                        },
                        label: function(context) {
                            let label = context.dataset.label || "";
                            if (label) label += ": ";
                            if (context.parsed.y !== null) label += context.parsed.y.toLocaleString("de-DE", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            });
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: colors.grid,
                        drawBorder: false
                    },
                    border: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Cent/kWh",
                        color: colors.text,
                        font: {
                            size: 14,
                            weight: 500,
                            family: "'Fira Sans', sans-serif"
                        },
                        padding: {
                            top: 0,
                            bottom: 10
                        }
                    },
                    ticks: {
                        color: colors.text,
                        font: tickFont,
                        padding: 10,
                        stepSize: 5,
                        callback: function(value) {
                            const numericValue = Number(value);
                            if (!isNaN(numericValue) && Number.isFinite(numericValue) && numericValue % 5 === 0) return numericValue.toLocaleString("de-DE");
                            return null;
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    border: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: "Stunden",
                        color: colors.text,
                        font: {
                            size: 14,
                            weight: 500,
                            family: "'Fira Sans', sans-serif"
                        },
                        padding: {
                            top: 10,
                            bottom: 0
                        }
                    },
                    ticks: {
                        color: colors.text,
                        font: tickFont,
                        padding: 5,
                        callback: function(value, index) {
                            // Always return the label now
                            return this.getLabelForValue(index);
                        },
                        maxRotation: 0
                    }
                }
            }
        }
    });
    console.log("Chart structure created.");
    // Add resize listener with debounce for better performance
    let resizeTimeout;
    window.addEventListener("resize", ()=>{
        // Cancel previous timeout
        clearTimeout(resizeTimeout);
        // Set new timeout - only perform resize if user has stopped resizing
        resizeTimeout = window.setTimeout(()=>{
            if (priceChart) {
                console.log("Resizing chart...");
                priceChart.resize(); // Let chart.js handle resizing within its container
            }
        }, 250);
    });
}
// Update price statistics display
function updatePriceStats(minPrice, maxPrice, avgPrice, minPriceHour, maxPriceHour) {
    const statsContainer = document.getElementById("priceStats");
    if (!statsContainer) return;
    // Clear any previous loading/error messages
    statsContainer.innerHTML = "";
    const formatNumber = (num)=>num.toLocaleString("de-DE", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    // Placeholders for indicators - replace with actual logic if available
    const highestPriceIndicator = `um ${maxPriceHour}`; // Use hour directly
    const lowestPriceIndicator = `um ${minPriceHour}`;
    // const averagePriceIndicator = "-1.3% ggü. Vortag"; // Placeholder - remove if no comparison data
    const averagePriceIndicator = `\xfcber ${priceChart?.data?.labels?.length || 0} Stunden`; // Show duration
    statsContainer.innerHTML = `
    <div class="stat-box highest-price">
      <div class="stat-box-title">H\xf6chster Preis</div>
      <div class="stat-value">${formatNumber(maxPrice)}</div>
      <div class="stat-label">Cent/kWh</div>
      <div class="stat-indicator positive">${highestPriceIndicator}</div>
    </div>
    <div class="stat-box lowest-price">
      <div class="stat-box-title">Niedrigster Preis</div>
      <div class="stat-value">${formatNumber(minPrice)}</div>
      <div class="stat-label">Cent/kWh</div>
      <div class="stat-indicator">${lowestPriceIndicator}</div>
    </div>
    <div class="stat-box average-price">
       <div class="stat-box-title">Durchschnittspreis</div>
      <div class="stat-value">${formatNumber(avgPrice)}</div>
      <div class="stat-label">Cent/kWh</div>
      <div class="stat-indicator">${averagePriceIndicator}</div>
    </div>
  `;
}
// Clear price stats and show a message
function clearPriceStats() {
    const statsContainer = document.getElementById("priceStats");
    if (statsContainer) {
        // Check if we are in loading state to show appropriate message
        const isLoading = document.body.classList.contains("chart-loading");
        if (isLoading) statsContainer.innerHTML = '<div style="text-align: center; width: 100%; padding: 20px; color: #777;">Statistikdaten werden geladen...</div>';
        else statsContainer.innerHTML = '<div style="text-align: center; width: 100%; padding: 20px; color: #777;">Keine Daten f\xfcr Statistik verf\xfcgbar.</div>';
    }
}

},{"@xatom/core":"8w4K8","chart.js/auto":"fPqP2","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fPqP2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _chartJs = require("../dist/chart.js");
parcelHelpers.exportAll(_chartJs, exports);
(0, _chartJs.Chart).register(...(0, _chartJs.registerables));
exports.default = (0, _chartJs.Chart);

},{"../dist/chart.js":"k5F58","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"k5F58":[function(require,module,exports,__globalThis) {
/*!
 * Chart.js v4.4.9
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animation", ()=>Animation);
parcelHelpers.export(exports, "Animations", ()=>Animations);
parcelHelpers.export(exports, "ArcElement", ()=>ArcElement);
parcelHelpers.export(exports, "BarController", ()=>BarController);
parcelHelpers.export(exports, "BarElement", ()=>BarElement);
parcelHelpers.export(exports, "BasePlatform", ()=>BasePlatform);
parcelHelpers.export(exports, "BasicPlatform", ()=>BasicPlatform);
parcelHelpers.export(exports, "BubbleController", ()=>BubbleController);
parcelHelpers.export(exports, "CategoryScale", ()=>CategoryScale);
parcelHelpers.export(exports, "Chart", ()=>Chart);
parcelHelpers.export(exports, "Colors", ()=>plugin_colors);
parcelHelpers.export(exports, "DatasetController", ()=>DatasetController);
parcelHelpers.export(exports, "Decimation", ()=>plugin_decimation);
parcelHelpers.export(exports, "DomPlatform", ()=>DomPlatform);
parcelHelpers.export(exports, "DoughnutController", ()=>DoughnutController);
parcelHelpers.export(exports, "Element", ()=>Element);
parcelHelpers.export(exports, "Filler", ()=>index);
parcelHelpers.export(exports, "Interaction", ()=>Interaction);
parcelHelpers.export(exports, "Legend", ()=>plugin_legend);
parcelHelpers.export(exports, "LineController", ()=>LineController);
parcelHelpers.export(exports, "LineElement", ()=>LineElement);
parcelHelpers.export(exports, "LinearScale", ()=>LinearScale);
parcelHelpers.export(exports, "LogarithmicScale", ()=>LogarithmicScale);
parcelHelpers.export(exports, "PieController", ()=>PieController);
parcelHelpers.export(exports, "PointElement", ()=>PointElement);
parcelHelpers.export(exports, "PolarAreaController", ()=>PolarAreaController);
parcelHelpers.export(exports, "RadarController", ()=>RadarController);
parcelHelpers.export(exports, "RadialLinearScale", ()=>RadialLinearScale);
parcelHelpers.export(exports, "Scale", ()=>Scale);
parcelHelpers.export(exports, "ScatterController", ()=>ScatterController);
parcelHelpers.export(exports, "SubTitle", ()=>plugin_subtitle);
parcelHelpers.export(exports, "Ticks", ()=>(0, _helpersDatasetJs.aM));
parcelHelpers.export(exports, "TimeScale", ()=>TimeScale);
parcelHelpers.export(exports, "TimeSeriesScale", ()=>TimeSeriesScale);
parcelHelpers.export(exports, "Title", ()=>plugin_title);
parcelHelpers.export(exports, "Tooltip", ()=>plugin_tooltip);
parcelHelpers.export(exports, "_adapters", ()=>adapters);
parcelHelpers.export(exports, "_detectPlatform", ()=>_detectPlatform);
parcelHelpers.export(exports, "animator", ()=>animator);
parcelHelpers.export(exports, "controllers", ()=>controllers);
parcelHelpers.export(exports, "defaults", ()=>(0, _helpersDatasetJs.d));
parcelHelpers.export(exports, "elements", ()=>elements);
parcelHelpers.export(exports, "layouts", ()=>layouts);
parcelHelpers.export(exports, "plugins", ()=>plugins);
parcelHelpers.export(exports, "registerables", ()=>registerables);
parcelHelpers.export(exports, "registry", ()=>registry);
parcelHelpers.export(exports, "scales", ()=>scales);
var _helpersDatasetJs = require("./chunks/helpers.dataset.js");
var _color = require("@kurkle/color");
class Animator {
    constructor(){
        this._request = null;
        this._charts = new Map();
        this._running = false;
        this._lastDate = undefined;
    }
    _notify(chart, anims, date, type) {
        const callbacks = anims.listeners[type];
        const numSteps = anims.duration;
        callbacks.forEach((fn)=>fn({
                chart,
                initial: anims.initial,
                numSteps,
                currentStep: Math.min(date - anims.start, numSteps)
            }));
    }
    _refresh() {
        if (this._request) return;
        this._running = true;
        this._request = (0, _helpersDatasetJs.r).call(window, ()=>{
            this._update();
            this._request = null;
            if (this._running) this._refresh();
        });
    }
    _update(date = Date.now()) {
        let remaining = 0;
        this._charts.forEach((anims, chart)=>{
            if (!anims.running || !anims.items.length) return;
            const items = anims.items;
            let i = items.length - 1;
            let draw = false;
            let item;
            for(; i >= 0; --i){
                item = items[i];
                if (item._active) {
                    if (item._total > anims.duration) anims.duration = item._total;
                    item.tick(date);
                    draw = true;
                } else {
                    items[i] = items[items.length - 1];
                    items.pop();
                }
            }
            if (draw) {
                chart.draw();
                this._notify(chart, anims, date, 'progress');
            }
            if (!items.length) {
                anims.running = false;
                this._notify(chart, anims, date, 'complete');
                anims.initial = false;
            }
            remaining += items.length;
        });
        this._lastDate = date;
        if (remaining === 0) this._running = false;
    }
    _getAnims(chart) {
        const charts = this._charts;
        let anims = charts.get(chart);
        if (!anims) {
            anims = {
                running: false,
                initial: true,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            };
            charts.set(chart, anims);
        }
        return anims;
    }
    listen(chart, event, cb) {
        this._getAnims(chart).listeners[event].push(cb);
    }
    add(chart, items) {
        if (!items || !items.length) return;
        this._getAnims(chart).items.push(...items);
    }
    has(chart) {
        return this._getAnims(chart).items.length > 0;
    }
    start(chart) {
        const anims = this._charts.get(chart);
        if (!anims) return;
        anims.running = true;
        anims.start = Date.now();
        anims.duration = anims.items.reduce((acc, cur)=>Math.max(acc, cur._duration), 0);
        this._refresh();
    }
    running(chart) {
        if (!this._running) return false;
        const anims = this._charts.get(chart);
        if (!anims || !anims.running || !anims.items.length) return false;
        return true;
    }
    stop(chart) {
        const anims = this._charts.get(chart);
        if (!anims || !anims.items.length) return;
        const items = anims.items;
        let i = items.length - 1;
        for(; i >= 0; --i)items[i].cancel();
        anims.items = [];
        this._notify(chart, anims, Date.now(), 'complete');
    }
    remove(chart) {
        return this._charts.delete(chart);
    }
}
var animator = /* #__PURE__ */ new Animator();
const transparent = 'transparent';
const interpolators = {
    boolean (from, to, factor) {
        return factor > 0.5 ? to : from;
    },
    color (from, to, factor) {
        const c0 = (0, _helpersDatasetJs.c)(from || transparent);
        const c1 = c0.valid && (0, _helpersDatasetJs.c)(to || transparent);
        return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
    },
    number (from, to, factor) {
        return from + (to - from) * factor;
    }
};
class Animation {
    constructor(cfg, target, prop, to){
        const currentValue = target[prop];
        to = (0, _helpersDatasetJs.a)([
            cfg.to,
            to,
            currentValue,
            cfg.from
        ]);
        const from = (0, _helpersDatasetJs.a)([
            cfg.from,
            currentValue,
            to
        ]);
        this._active = true;
        this._fn = cfg.fn || interpolators[cfg.type || typeof from];
        this._easing = (0, _helpersDatasetJs.e)[cfg.easing] || (0, _helpersDatasetJs.e).linear;
        this._start = Math.floor(Date.now() + (cfg.delay || 0));
        this._duration = this._total = Math.floor(cfg.duration);
        this._loop = !!cfg.loop;
        this._target = target;
        this._prop = prop;
        this._from = from;
        this._to = to;
        this._promises = undefined;
    }
    active() {
        return this._active;
    }
    update(cfg, to, date) {
        if (this._active) {
            this._notify(false);
            const currentValue = this._target[this._prop];
            const elapsed = date - this._start;
            const remain = this._duration - elapsed;
            this._start = date;
            this._duration = Math.floor(Math.max(remain, cfg.duration));
            this._total += elapsed;
            this._loop = !!cfg.loop;
            this._to = (0, _helpersDatasetJs.a)([
                cfg.to,
                to,
                currentValue,
                cfg.from
            ]);
            this._from = (0, _helpersDatasetJs.a)([
                cfg.from,
                currentValue,
                to
            ]);
        }
    }
    cancel() {
        if (this._active) {
            this.tick(Date.now());
            this._active = false;
            this._notify(false);
        }
    }
    tick(date) {
        const elapsed = date - this._start;
        const duration = this._duration;
        const prop = this._prop;
        const from = this._from;
        const loop = this._loop;
        const to = this._to;
        let factor;
        this._active = from !== to && (loop || elapsed < duration);
        if (!this._active) {
            this._target[prop] = to;
            this._notify(true);
            return;
        }
        if (elapsed < 0) {
            this._target[prop] = from;
            return;
        }
        factor = elapsed / duration % 2;
        factor = loop && factor > 1 ? 2 - factor : factor;
        factor = this._easing(Math.min(1, Math.max(0, factor)));
        this._target[prop] = this._fn(from, to, factor);
    }
    wait() {
        const promises = this._promises || (this._promises = []);
        return new Promise((res, rej)=>{
            promises.push({
                res,
                rej
            });
        });
    }
    _notify(resolved) {
        const method = resolved ? 'res' : 'rej';
        const promises = this._promises || [];
        for(let i = 0; i < promises.length; i++)promises[i][method]();
    }
}
class Animations {
    constructor(chart, config){
        this._chart = chart;
        this._properties = new Map();
        this.configure(config);
    }
    configure(config) {
        if (!(0, _helpersDatasetJs.i)(config)) return;
        const animationOptions = Object.keys((0, _helpersDatasetJs.d).animation);
        const animatedProps = this._properties;
        Object.getOwnPropertyNames(config).forEach((key)=>{
            const cfg = config[key];
            if (!(0, _helpersDatasetJs.i)(cfg)) return;
            const resolved = {};
            for (const option of animationOptions)resolved[option] = cfg[option];
            ((0, _helpersDatasetJs.b)(cfg.properties) && cfg.properties || [
                key
            ]).forEach((prop)=>{
                if (prop === key || !animatedProps.has(prop)) animatedProps.set(prop, resolved);
            });
        });
    }
    _animateOptions(target, values) {
        const newOptions = values.options;
        const options = resolveTargetOptions(target, newOptions);
        if (!options) return [];
        const animations = this._createAnimations(options, newOptions);
        if (newOptions.$shared) awaitAll(target.options.$animations, newOptions).then(()=>{
            target.options = newOptions;
        }, ()=>{});
        return animations;
    }
    _createAnimations(target, values) {
        const animatedProps = this._properties;
        const animations = [];
        const running = target.$animations || (target.$animations = {});
        const props = Object.keys(values);
        const date = Date.now();
        let i;
        for(i = props.length - 1; i >= 0; --i){
            const prop = props[i];
            if (prop.charAt(0) === '$') continue;
            if (prop === 'options') {
                animations.push(...this._animateOptions(target, values));
                continue;
            }
            const value = values[prop];
            let animation = running[prop];
            const cfg = animatedProps.get(prop);
            if (animation) {
                if (cfg && animation.active()) {
                    animation.update(cfg, value, date);
                    continue;
                } else animation.cancel();
            }
            if (!cfg || !cfg.duration) {
                target[prop] = value;
                continue;
            }
            running[prop] = animation = new Animation(cfg, target, prop, value);
            animations.push(animation);
        }
        return animations;
    }
    update(target, values) {
        if (this._properties.size === 0) {
            Object.assign(target, values);
            return;
        }
        const animations = this._createAnimations(target, values);
        if (animations.length) {
            animator.add(this._chart, animations);
            return true;
        }
    }
}
function awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for(let i = 0; i < keys.length; i++){
        const anim = animations[keys[i]];
        if (anim && anim.active()) running.push(anim.wait());
    }
    return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
    if (!newOptions) return;
    let options = target.options;
    if (!options) {
        target.options = newOptions;
        return;
    }
    if (options.$shared) target.options = options = Object.assign({}, options, {
        $shared: false,
        $animations: {}
    });
    return options;
}
function scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === undefined ? allowedOverflow : 0;
    const max = opts.max === undefined ? allowedOverflow : 0;
    return {
        start: reverse ? max : min,
        end: reverse ? min : max
    };
}
function defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) return false;
    const x = scaleClip(xScale, allowedOverflow);
    const y = scaleClip(yScale, allowedOverflow);
    return {
        top: y.end,
        right: x.end,
        bottom: y.start,
        left: x.start
    };
}
function toClip(value) {
    let t, r, b, l;
    if ((0, _helpersDatasetJs.i)(value)) {
        t = value.top;
        r = value.right;
        b = value.bottom;
        l = value.left;
    } else t = r = b = l = value;
    return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        disabled: value === false
    };
}
function getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i, ilen;
    for(i = 0, ilen = metasets.length; i < ilen; ++i)keys.push(metasets[i].index);
    return keys;
}
function applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === 'single';
    let i, ilen, datasetIndex, otherValue;
    if (value === null) return;
    let found = false;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        datasetIndex = +keys[i];
        if (datasetIndex === dsIndex) {
            found = true;
            if (options.all) continue;
            break;
        }
        otherValue = stack.values[datasetIndex];
        if ((0, _helpersDatasetJs.g)(otherValue) && (singleMode || value === 0 || (0, _helpersDatasetJs.s)(value) === (0, _helpersDatasetJs.s)(otherValue))) value += otherValue;
    }
    if (!found && !options.all) return 0;
    return value;
}
function convertObjectDataToArray(data, meta) {
    const { iScale, vScale } = meta;
    const iAxisKey = iScale.axis === 'x' ? 'x' : 'y';
    const vAxisKey = vScale.axis === 'x' ? 'x' : 'y';
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i, ilen, key;
    for(i = 0, ilen = keys.length; i < ilen; ++i){
        key = keys[i];
        adata[i] = {
            [iAxisKey]: key,
            [vAxisKey]: data[key]
        };
    }
    return adata;
}
function isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === undefined && meta.stack !== undefined;
}
function getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
    const { min, max, minDefined, maxDefined } = scale.getUserBounds();
    return {
        min: minDefined ? min : Number.NEGATIVE_INFINITY,
        max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()){
        const value = stack[meta.index];
        if (positive && value > 0 || !positive && value < 0) return meta.index;
    }
    return null;
}
function updateStacks(controller, parsed) {
    const { chart, _cachedMeta: meta } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale, vScale, index: datasetIndex } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for(let i = 0; i < ilen; ++i){
        const item = parsed[i];
        const { [iAxis]: index, [vAxis]: value } = item;
        const itemStacks = item._stacks || (item._stacks = {});
        stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
        stack[datasetIndex] = value;
        stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
        stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
        const visualValues = stack._visualValues || (stack._visualValues = {});
        visualValues[datasetIndex] = value;
    }
}
function getFirstScaleId(chart, axis) {
    const scales = chart.scales;
    return Object.keys(scales).filter((key)=>scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
    return (0, _helpersDatasetJs.j)(parent, {
        active: false,
        dataset: undefined,
        datasetIndex: index,
        index,
        mode: 'default',
        type: 'dataset'
    });
}
function createDataContext(parent, index, element) {
    return (0, _helpersDatasetJs.j)(parent, {
        active: false,
        dataIndex: index,
        parsed: undefined,
        raw: undefined,
        element,
        index,
        mode: 'default',
        type: 'data'
    });
}
function clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) return;
    items = items || meta._parsed;
    for (const parsed of items){
        const stacks = parsed._stacks;
        if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) return;
        delete stacks[axis][datasetIndex];
        if (stacks[axis]._visualValues !== undefined && stacks[axis]._visualValues[datasetIndex] !== undefined) delete stacks[axis]._visualValues[datasetIndex];
    }
}
const isDirectUpdateMode = (mode)=>mode === 'reset' || mode === 'none';
const cloneIfNotShared = (cached, shared)=>shared ? cached : Object.assign({}, cached);
const createStack = (canStack, meta, chart)=>canStack && !meta.hidden && meta._stacked && {
        keys: getSortedDatasetIndices(chart, true),
        values: null
    };
class DatasetController {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;
    constructor(chart, datasetIndex){
        this.chart = chart;
        this._ctx = chart.ctx;
        this.index = datasetIndex;
        this._cachedDataOpts = {};
        this._cachedMeta = this.getMeta();
        this._type = this._cachedMeta.type;
        this.options = undefined;
        this._parsing = false;
        this._data = undefined;
        this._objectData = undefined;
        this._sharedOptions = undefined;
        this._drawStart = undefined;
        this._drawCount = undefined;
        this.enableOptionSharing = false;
        this.supportsDecimation = false;
        this.$context = undefined;
        this._syncList = [];
        this.datasetElementType = new.target.datasetElementType;
        this.dataElementType = new.target.dataElementType;
        this.initialize();
    }
    initialize() {
        const meta = this._cachedMeta;
        this.configure();
        this.linkScales();
        meta._stacked = isStacked(meta.vScale, meta);
        this.addElements();
        if (this.options.fill && !this.chart.isPluginEnabled('filler')) console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
    updateIndex(datasetIndex) {
        if (this.index !== datasetIndex) clearStacks(this._cachedMeta);
        this.index = datasetIndex;
    }
    linkScales() {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        const chooseId = (axis, x, y, r)=>axis === 'x' ? x : axis === 'r' ? r : y;
        const xid = meta.xAxisID = (0, _helpersDatasetJs.v)(dataset.xAxisID, getFirstScaleId(chart, 'x'));
        const yid = meta.yAxisID = (0, _helpersDatasetJs.v)(dataset.yAxisID, getFirstScaleId(chart, 'y'));
        const rid = meta.rAxisID = (0, _helpersDatasetJs.v)(dataset.rAxisID, getFirstScaleId(chart, 'r'));
        const indexAxis = meta.indexAxis;
        const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
        const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
        meta.xScale = this.getScaleForId(xid);
        meta.yScale = this.getScaleForId(yid);
        meta.rScale = this.getScaleForId(rid);
        meta.iScale = this.getScaleForId(iid);
        meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
        return this.chart.data.datasets[this.index];
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(scaleID) {
        return this.chart.scales[scaleID];
    }
    _getOtherScale(scale) {
        const meta = this._cachedMeta;
        return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
        this._update('reset');
    }
    _destroy() {
        const meta = this._cachedMeta;
        if (this._data) (0, _helpersDatasetJs.u)(this._data, this);
        if (meta._stacked) clearStacks(meta);
    }
    _dataCheck() {
        const dataset = this.getDataset();
        const data = dataset.data || (dataset.data = []);
        const _data = this._data;
        if ((0, _helpersDatasetJs.i)(data)) {
            const meta = this._cachedMeta;
            this._data = convertObjectDataToArray(data, meta);
        } else if (_data !== data) {
            if (_data) {
                (0, _helpersDatasetJs.u)(_data, this);
                const meta = this._cachedMeta;
                clearStacks(meta);
                meta._parsed = [];
            }
            if (data && Object.isExtensible(data)) (0, _helpersDatasetJs.l)(data, this);
            this._syncList = [];
            this._data = data;
        }
    }
    addElements() {
        const meta = this._cachedMeta;
        this._dataCheck();
        if (this.datasetElementType) meta.dataset = new this.datasetElementType();
    }
    buildOrUpdateElements(resetNewElements) {
        const meta = this._cachedMeta;
        const dataset = this.getDataset();
        let stackChanged = false;
        this._dataCheck();
        const oldStacked = meta._stacked;
        meta._stacked = isStacked(meta.vScale, meta);
        if (meta.stack !== dataset.stack) {
            stackChanged = true;
            clearStacks(meta);
            meta.stack = dataset.stack;
        }
        this._resyncElements(resetNewElements);
        if (stackChanged || oldStacked !== meta._stacked) {
            updateStacks(this, meta._parsed);
            meta._stacked = isStacked(meta.vScale, meta);
        }
    }
    configure() {
        const config = this.chart.config;
        const scopeKeys = config.datasetScopeKeys(this._type);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
        this.options = config.createResolver(scopes, this.getContext());
        this._parsing = this.options.parsing;
        this._cachedDataOpts = {};
    }
    parse(start, count) {
        const { _cachedMeta: meta, _data: data } = this;
        const { iScale, _stacked } = meta;
        const iAxis = iScale.axis;
        let sorted = start === 0 && count === data.length ? true : meta._sorted;
        let prev = start > 0 && meta._parsed[start - 1];
        let i, cur, parsed;
        if (this._parsing === false) {
            meta._parsed = data;
            meta._sorted = true;
            parsed = data;
        } else {
            if ((0, _helpersDatasetJs.b)(data[start])) parsed = this.parseArrayData(meta, data, start, count);
            else if ((0, _helpersDatasetJs.i)(data[start])) parsed = this.parseObjectData(meta, data, start, count);
            else parsed = this.parsePrimitiveData(meta, data, start, count);
            const isNotInOrderComparedToPrev = ()=>cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
            for(i = 0; i < count; ++i){
                meta._parsed[i + start] = cur = parsed[i];
                if (sorted) {
                    if (isNotInOrderComparedToPrev()) sorted = false;
                    prev = cur;
                }
            }
            meta._sorted = sorted;
        }
        if (_stacked) updateStacks(this, parsed);
    }
    parsePrimitiveData(meta, data, start, count) {
        const { iScale, vScale } = meta;
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const labels = iScale.getLabels();
        const singleScale = iScale === vScale;
        const parsed = new Array(count);
        let i, ilen, index;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            parsed[i] = {
                [iAxis]: singleScale || iScale.parse(labels[index], index),
                [vAxis]: vScale.parse(data[index], index)
            };
        }
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const { xScale, yScale } = meta;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse(item[0], index),
                y: yScale.parse(item[1], index)
            };
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const { xScale, yScale } = meta;
        const { xAxisKey = 'x', yAxisKey = 'y' } = this._parsing;
        const parsed = new Array(count);
        let i, ilen, index, item;
        for(i = 0, ilen = count; i < ilen; ++i){
            index = i + start;
            item = data[index];
            parsed[i] = {
                x: xScale.parse((0, _helpersDatasetJs.f)(item, xAxisKey), index),
                y: yScale.parse((0, _helpersDatasetJs.f)(item, yAxisKey), index)
            };
        }
        return parsed;
    }
    getParsed(index) {
        return this._cachedMeta._parsed[index];
    }
    getDataElement(index) {
        return this._cachedMeta.data[index];
    }
    applyStack(scale, parsed, mode) {
        const chart = this.chart;
        const meta = this._cachedMeta;
        const value = parsed[scale.axis];
        const stack = {
            keys: getSortedDatasetIndices(chart, true),
            values: parsed._stacks[scale.axis]._visualValues
        };
        return applyStack(stack, value, meta.index, {
            mode
        });
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        const parsedValue = parsed[scale.axis];
        let value = parsedValue === null ? NaN : parsedValue;
        const values = stack && parsed._stacks[scale.axis];
        if (stack && values) {
            stack.values = values;
            value = applyStack(stack, parsedValue, this._cachedMeta.index);
        }
        range.min = Math.min(range.min, value);
        range.max = Math.max(range.max, value);
    }
    getMinMax(scale, canStack) {
        const meta = this._cachedMeta;
        const _parsed = meta._parsed;
        const sorted = meta._sorted && scale === meta.iScale;
        const ilen = _parsed.length;
        const otherScale = this._getOtherScale(scale);
        const stack = createStack(canStack, meta, this.chart);
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        const { min: otherMin, max: otherMax } = getUserBounds(otherScale);
        let i, parsed;
        function _skip() {
            parsed = _parsed[i];
            const otherValue = parsed[otherScale.axis];
            return !(0, _helpersDatasetJs.g)(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
        }
        for(i = 0; i < ilen; ++i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            if (sorted) break;
        }
        if (sorted) for(i = ilen - 1; i >= 0; --i){
            if (_skip()) continue;
            this.updateRangeFromParsed(range, scale, parsed, stack);
            break;
        }
        return range;
    }
    getAllParsedValues(scale) {
        const parsed = this._cachedMeta._parsed;
        const values = [];
        let i, ilen, value;
        for(i = 0, ilen = parsed.length; i < ilen; ++i){
            value = parsed[i][scale.axis];
            if ((0, _helpersDatasetJs.g)(value)) values.push(value);
        }
        return values;
    }
    getMaxOverflow() {
        return false;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const vScale = meta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
            value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
        };
    }
    _update(mode) {
        const meta = this._cachedMeta;
        this.update(mode || 'default');
        meta._clip = toClip((0, _helpersDatasetJs.v)(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
    update(mode) {}
    draw() {
        const ctx = this._ctx;
        const chart = this.chart;
        const meta = this._cachedMeta;
        const elements = meta.data || [];
        const area = chart.chartArea;
        const active = [];
        const start = this._drawStart || 0;
        const count = this._drawCount || elements.length - start;
        const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
        let i;
        if (meta.dataset) meta.dataset.draw(ctx, area, start, count);
        for(i = start; i < start + count; ++i){
            const element = elements[i];
            if (element.hidden) continue;
            if (element.active && drawActiveElementsOnTop) active.push(element);
            else element.draw(ctx, area);
        }
        for(i = 0; i < active.length; ++i)active[i].draw(ctx, area);
    }
    getStyle(index, active) {
        const mode = active ? 'active' : 'default';
        return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
    }
    getContext(index, active, mode) {
        const dataset = this.getDataset();
        let context;
        if (index >= 0 && index < this._cachedMeta.data.length) {
            const element = this._cachedMeta.data[index];
            context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
            context.parsed = this.getParsed(index);
            context.raw = dataset.data[index];
            context.index = context.dataIndex = index;
        } else {
            context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
            context.dataset = dataset;
            context.index = context.datasetIndex = this.index;
        }
        context.active = !!active;
        context.mode = mode;
        return context;
    }
    resolveDatasetElementOptions(mode) {
        return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
    resolveDataElementOptions(index, mode) {
        return this._resolveElementOptions(this.dataElementType.id, mode, index);
    }
    _resolveElementOptions(elementType, mode = 'default', index) {
        const active = mode === 'active';
        const cache = this._cachedDataOpts;
        const cacheKey = elementType + '-' + mode;
        const cached = cache[cacheKey];
        const sharing = this.enableOptionSharing && (0, _helpersDatasetJs.h)(index);
        if (cached) return cloneIfNotShared(cached, sharing);
        const config = this.chart.config;
        const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
        const prefixes = active ? [
            `${elementType}Hover`,
            'hover',
            elementType,
            ''
        ] : [
            elementType,
            ''
        ];
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        const names = Object.keys((0, _helpersDatasetJs.d).elements[elementType]);
        const context = ()=>this.getContext(index, active, mode);
        const values = config.resolveNamedOptions(scopes, names, context, prefixes);
        if (values.$shared) {
            values.$shared = sharing;
            cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
        }
        return values;
    }
    _resolveAnimations(index, transition, active) {
        const chart = this.chart;
        const cache = this._cachedDataOpts;
        const cacheKey = `animation-${transition}`;
        const cached = cache[cacheKey];
        if (cached) return cached;
        let options;
        if (chart.options.animation !== false) {
            const config = this.chart.config;
            const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
            const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
            options = config.createResolver(scopes, this.getContext(index, active, transition));
        }
        const animations = new Animations(chart, options && options.animations);
        if (options && options._cacheable) cache[cacheKey] = Object.freeze(animations);
        return animations;
    }
    getSharedOptions(options) {
        if (!options.$shared) return;
        return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
    includeOptions(mode, sharedOptions) {
        return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
    _getSharedOptions(start, mode) {
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const previouslySharedOptions = this._sharedOptions;
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
        return {
            sharedOptions,
            includeOptions
        };
    }
    updateElement(element, index, properties, mode) {
        if (isDirectUpdateMode(mode)) Object.assign(element, properties);
        else this._resolveAnimations(index, mode).update(element, properties);
    }
    updateSharedOptions(sharedOptions, mode, newOptions) {
        if (sharedOptions && !isDirectUpdateMode(mode)) this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
    _setStyle(element, index, mode, active) {
        element.active = active;
        const options = this.getStyle(index, active);
        this._resolveAnimations(index, mode, active).update(element, {
            options: !active && this.getSharedOptions(options) || options
        });
    }
    removeHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', false);
    }
    setHoverStyle(element, datasetIndex, index) {
        this._setStyle(element, index, 'active', true);
    }
    _removeDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, 'active', false);
    }
    _setDatasetHoverStyle() {
        const element = this._cachedMeta.dataset;
        if (element) this._setStyle(element, undefined, 'active', true);
    }
    _resyncElements(resetNewElements) {
        const data = this._data;
        const elements = this._cachedMeta.data;
        for (const [method, arg1, arg2] of this._syncList)this[method](arg1, arg2);
        this._syncList = [];
        const numMeta = elements.length;
        const numData = data.length;
        const count = Math.min(numData, numMeta);
        if (count) this.parse(0, count);
        if (numData > numMeta) this._insertElements(numMeta, numData - numMeta, resetNewElements);
        else if (numData < numMeta) this._removeElements(numData, numMeta - numData);
    }
    _insertElements(start, count, resetNewElements = true) {
        const meta = this._cachedMeta;
        const data = meta.data;
        const end = start + count;
        let i;
        const move = (arr)=>{
            arr.length += count;
            for(i = arr.length - 1; i >= end; i--)arr[i] = arr[i - count];
        };
        move(data);
        for(i = start; i < end; ++i)data[i] = new this.dataElementType();
        if (this._parsing) move(meta._parsed);
        this.parse(start, count);
        if (resetNewElements) this.updateElements(data, start, count, 'reset');
    }
    updateElements(element, start, count, mode) {}
    _removeElements(start, count) {
        const meta = this._cachedMeta;
        if (this._parsing) {
            const removed = meta._parsed.splice(start, count);
            if (meta._stacked) clearStacks(meta, removed);
        }
        meta.data.splice(start, count);
    }
    _sync(args) {
        if (this._parsing) this._syncList.push(args);
        else {
            const [method, arg1, arg2] = args;
            this[method](arg1, arg2);
        }
        this.chart._dataChanges.push([
            this.index,
            ...args
        ]);
    }
    _onDataPush() {
        const count = arguments.length;
        this._sync([
            '_insertElements',
            this.getDataset().data.length - count,
            count
        ]);
    }
    _onDataPop() {
        this._sync([
            '_removeElements',
            this._cachedMeta.data.length - 1,
            1
        ]);
    }
    _onDataShift() {
        this._sync([
            '_removeElements',
            0,
            1
        ]);
    }
    _onDataSplice(start, count) {
        if (count) this._sync([
            '_removeElements',
            start,
            count
        ]);
        const newCount = arguments.length - 2;
        if (newCount) this._sync([
            '_insertElements',
            start,
            newCount
        ]);
    }
    _onDataUnshift() {
        this._sync([
            '_insertElements',
            0,
            arguments.length
        ]);
    }
}
function getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
        const visibleMetas = scale.getMatchingVisibleMetas(type);
        let values = [];
        for(let i = 0, ilen = visibleMetas.length; i < ilen; i++)values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
        scale._cache.$bar = (0, _helpersDatasetJs._)(values.sort((a, b)=>a - b));
    }
    return scale._cache.$bar;
}
function computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i, ilen, curr, prev;
    const updateMinAndPrev = ()=>{
        if (curr === 32767 || curr === -32768) return;
        if ((0, _helpersDatasetJs.h)(prev)) min = Math.min(min, Math.abs(curr - prev) || min);
        prev = curr;
    };
    for(i = 0, ilen = values.length; i < ilen; ++i){
        curr = scale.getPixelForValue(values[i]);
        updateMinAndPrev();
    }
    prev = undefined;
    for(i = 0, ilen = scale.ticks.length; i < ilen; ++i){
        curr = scale.getPixelForTick(i);
        updateMinAndPrev();
    }
    return min;
}
function computeFitCategoryTraits(index, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if ((0, _helpersDatasetJs.k)(thickness)) {
        size = ruler.min * options.categoryPercentage;
        ratio = options.barPercentage;
    } else {
        size = thickness * stackCount;
        ratio = 1;
    }
    return {
        chunk: size / stackCount,
        ratio,
        start: ruler.pixels[index] - size / 2
    };
}
function computeFlexCategoryTraits(index, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index];
    let prev = index > 0 ? pixels[index - 1] : null;
    let next = index < pixels.length - 1 ? pixels[index + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    if (next === null) next = curr + curr - prev;
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
        chunk: size / stackCount,
        ratio: options.barPercentage,
        start
    };
}
function parseFloatBar(entry, item, vScale, i) {
    const startValue = vScale.parse(entry[0], i);
    const endValue = vScale.parse(entry[1], i);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
        barStart = max;
        barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
        barStart,
        barEnd,
        start: startValue,
        end: endValue,
        min,
        max
    };
}
function parseValue(entry, item, vScale, i) {
    if ((0, _helpersDatasetJs.b)(entry)) parseFloatBar(entry, item, vScale, i);
    else item[vScale.axis] = vScale.parse(entry, i);
    return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i, ilen, item, entry;
    for(i = start, ilen = start + count; i < ilen; ++i){
        entry = data[i];
        item = {};
        item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
        parsed.push(parseValue(entry, item, vScale, i));
    }
    return parsed;
}
function isFloatBar(custom) {
    return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
    if (size !== 0) return (0, _helpersDatasetJs.s)(size);
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
        reverse = properties.base > properties.x;
        start = 'left';
        end = 'right';
    } else {
        reverse = properties.base < properties.y;
        start = 'bottom';
        end = 'top';
    }
    if (reverse) {
        top = 'end';
        bottom = 'start';
    } else {
        top = 'start';
        bottom = 'end';
    }
    return {
        start,
        end,
        reverse,
        top,
        bottom
    };
}
function setBorderSkipped(properties, options, stack, index) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
        properties.borderSkipped = res;
        return;
    }
    if (edge === true) {
        properties.borderSkipped = {
            top: true,
            right: true,
            bottom: true,
            left: true
        };
        return;
    }
    const { start, end, reverse, top, bottom } = borderProps(properties);
    if (edge === 'middle' && stack) {
        properties.enableBorderRadius = true;
        if ((stack._top || 0) === index) edge = top;
        else if ((stack._bottom || 0) === index) edge = bottom;
        else {
            res[parseEdge(bottom, start, end, reverse)] = true;
            edge = top;
        }
    }
    res[parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
    if (reverse) {
        edge = swap(edge, a, b);
        edge = startEnd(edge, b, a);
    } else edge = startEnd(edge, a, b);
    return edge;
}
function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
    return v === 'start' ? start : v === 'end' ? end : v;
}
function setInflateAmount(properties, { inflateAmount }, ratio) {
    properties.inflateAmount = inflateAmount === 'auto' ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
class BarController extends DatasetController {
    static id = 'bar';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'bar',
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: true,
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'base',
                    'width',
                    'height'
                ]
            }
        }
    };
    static overrides = {
        scales: {
            _index_: {
                type: 'category',
                offset: true,
                grid: {
                    offset: true
                }
            },
            _value_: {
                type: 'linear',
                beginAtZero: true
            }
        }
    };
    parsePrimitiveData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseArrayData(meta, data, start, count) {
        return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseObjectData(meta, data, start, count) {
        const { iScale, vScale } = meta;
        const { xAxisKey = 'x', yAxisKey = 'y' } = this._parsing;
        const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
        const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
        const parsed = [];
        let i, ilen, item, obj;
        for(i = start, ilen = start + count; i < ilen; ++i){
            obj = data[i];
            item = {};
            item[iScale.axis] = iScale.parse((0, _helpersDatasetJs.f)(obj, iAxisKey), i);
            parsed.push(parseValue((0, _helpersDatasetJs.f)(obj, vAxisKey), item, vScale, i));
        }
        return parsed;
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
        super.updateRangeFromParsed(range, scale, parsed, stack);
        const custom = parsed._custom;
        if (custom && scale === this._cachedMeta.vScale) {
            range.min = Math.min(range.min, custom.min);
            range.max = Math.max(range.max, custom.max);
        }
    }
    getMaxOverflow() {
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const { iScale, vScale } = meta;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const value = isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
        return {
            label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
            value
        };
    }
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
        const meta = this._cachedMeta;
        meta.stack = this.getDataset().stack;
    }
    update(mode) {
        const meta = this._cachedMeta;
        this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
        const reset = mode === 'reset';
        const { index, _cachedMeta: { vScale } } = this;
        const base = vScale.getBasePixel();
        const horizontal = vScale.isHorizontal();
        const ruler = this._getRuler();
        const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
        for(let i = start; i < start + count; i++){
            const parsed = this.getParsed(i);
            const vpixels = reset || (0, _helpersDatasetJs.k)(parsed[vScale.axis]) ? {
                base,
                head: base
            } : this._calculateBarValuePixels(i);
            const ipixels = this._calculateBarIndexPixels(i, ruler);
            const stack = (parsed._stacks || {})[vScale.axis];
            const properties = {
                horizontal,
                base: vpixels.base,
                enableBorderRadius: !stack || isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
                x: horizontal ? vpixels.head : ipixels.center,
                y: horizontal ? ipixels.center : vpixels.head,
                height: horizontal ? ipixels.size : Math.abs(vpixels.size),
                width: horizontal ? Math.abs(vpixels.size) : ipixels.size
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
            const options = properties.options || bars[i].options;
            setBorderSkipped(properties, options, stack, index);
            setInflateAmount(properties, options, ruler.ratio);
            this.updateElement(bars[i], i, properties, mode);
        }
    }
    _getStacks(last, dataIndex) {
        const { iScale } = this._cachedMeta;
        const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta)=>meta.controller.options.grouped);
        const stacked = iScale.options.stacked;
        const stacks = [];
        const currentParsed = this._cachedMeta.controller.getParsed(dataIndex);
        const iScaleValue = currentParsed && currentParsed[iScale.axis];
        const skipNull = (meta)=>{
            const parsed = meta._parsed.find((item)=>item[iScale.axis] === iScaleValue);
            const val = parsed && parsed[meta.vScale.axis];
            if ((0, _helpersDatasetJs.k)(val) || isNaN(val)) return true;
        };
        for (const meta of metasets){
            if (dataIndex !== undefined && skipNull(meta)) continue;
            if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) stacks.push(meta.stack);
            if (meta.index === last) break;
        }
        if (!stacks.length) stacks.push(undefined);
        return stacks;
    }
    _getStackCount(index) {
        return this._getStacks(undefined, index).length;
    }
    _getStackIndex(datasetIndex, name, dataIndex) {
        const stacks = this._getStacks(datasetIndex, dataIndex);
        const index = name !== undefined ? stacks.indexOf(name) : -1;
        return index === -1 ? stacks.length - 1 : index;
    }
    _getRuler() {
        const opts = this.options;
        const meta = this._cachedMeta;
        const iScale = meta.iScale;
        const pixels = [];
        let i, ilen;
        for(i = 0, ilen = meta.data.length; i < ilen; ++i)pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
        const barThickness = opts.barThickness;
        const min = barThickness || computeMinSampleSize(meta);
        return {
            min,
            pixels,
            start: iScale._startPixel,
            end: iScale._endPixel,
            stackCount: this._getStackCount(),
            scale: iScale,
            grouped: opts.grouped,
            ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
        };
    }
    _calculateBarValuePixels(index) {
        const { _cachedMeta: { vScale, _stacked, index: datasetIndex }, options: { base: baseValue, minBarLength } } = this;
        const actualBase = baseValue || 0;
        const parsed = this.getParsed(index);
        const custom = parsed._custom;
        const floating = isFloatBar(custom);
        let value = parsed[vScale.axis];
        let start = 0;
        let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
        let head, size;
        if (length !== value) {
            start = length - value;
            length = value;
        }
        if (floating) {
            value = custom.barStart;
            length = custom.barEnd - custom.barStart;
            if (value !== 0 && (0, _helpersDatasetJs.s)(value) !== (0, _helpersDatasetJs.s)(custom.barEnd)) start = 0;
            start += value;
        }
        const startValue = !(0, _helpersDatasetJs.k)(baseValue) && !floating ? baseValue : start;
        let base = vScale.getPixelForValue(startValue);
        if (this.chart.getDataVisibility(index)) head = vScale.getPixelForValue(start + length);
        else head = base;
        size = head - base;
        if (Math.abs(size) < minBarLength) {
            size = barSign(size, vScale, actualBase) * minBarLength;
            if (value === actualBase) base -= size / 2;
            const startPixel = vScale.getPixelForDecimal(0);
            const endPixel = vScale.getPixelForDecimal(1);
            const min = Math.min(startPixel, endPixel);
            const max = Math.max(startPixel, endPixel);
            base = Math.max(Math.min(base, max), min);
            head = base + size;
            if (_stacked && !floating) parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
        }
        if (base === vScale.getPixelForValue(actualBase)) {
            const halfGrid = (0, _helpersDatasetJs.s)(size) * vScale.getLineWidthForValue(actualBase) / 2;
            base += halfGrid;
            size -= halfGrid;
        }
        return {
            size,
            base,
            head,
            center: head + size / 2
        };
    }
    _calculateBarIndexPixels(index, ruler) {
        const scale = ruler.scale;
        const options = this.options;
        const skipNull = options.skipNull;
        const maxBarThickness = (0, _helpersDatasetJs.v)(options.maxBarThickness, Infinity);
        let center, size;
        if (ruler.grouped) {
            const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
            const range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);
            const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
            center = range.start + range.chunk * stackIndex + range.chunk / 2;
            size = Math.min(maxBarThickness, range.chunk * range.ratio);
        } else {
            center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
            size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
        }
        return {
            base: center - size / 2,
            head: center + size / 2,
            center,
            size
        };
    }
    draw() {
        const meta = this._cachedMeta;
        const vScale = meta.vScale;
        const rects = meta.data;
        const ilen = rects.length;
        let i = 0;
        for(; i < ilen; ++i)if (this.getParsed(i)[vScale.axis] !== null && !rects[i].hidden) rects[i].draw(this._ctx);
    }
}
class BubbleController extends DatasetController {
    static id = 'bubble';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'point',
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'borderWidth',
                    'radius'
                ]
            }
        }
    };
    static overrides = {
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        super.initialize();
    }
    parsePrimitiveData(meta, data, start, count) {
        const parsed = super.parsePrimitiveData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++)parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
        return parsed;
    }
    parseArrayData(meta, data, start, count) {
        const parsed = super.parseArrayData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, _helpersDatasetJs.v)(item[2], this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    parseObjectData(meta, data, start, count) {
        const parsed = super.parseObjectData(meta, data, start, count);
        for(let i = 0; i < parsed.length; i++){
            const item = data[start + i];
            parsed[i]._custom = (0, _helpersDatasetJs.v)(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
        }
        return parsed;
    }
    getMaxOverflow() {
        const data = this._cachedMeta.data;
        let max = 0;
        for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
        return max > 0 && max;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale, yScale } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        const r = parsed._custom;
        return {
            label: labels[index] || '',
            value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
        };
    }
    update(mode) {
        const points = this._cachedMeta.data;
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale, vScale } = this._cachedMeta;
        const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const parsed = !reset && this.getParsed(i);
            const properties = {};
            const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
            const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
            properties.skip = isNaN(iPixel) || isNaN(vPixel);
            if (includeOptions) {
                properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
                if (reset) properties.options.radius = 0;
            }
            this.updateElement(point, i, properties, mode);
        }
    }
    resolveDataElementOptions(index, mode) {
        const parsed = this.getParsed(index);
        let values = super.resolveDataElementOptions(index, mode);
        if (values.$shared) values = Object.assign({}, values, {
            $shared: false
        });
        const radius = values.radius;
        if (mode !== 'active') values.radius = 0;
        values.radius += (0, _helpersDatasetJs.v)(parsed && parsed._custom, radius);
        return values;
    }
}
function getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < (0, _helpersDatasetJs.T)) {
        const startAngle = rotation;
        const endAngle = startAngle + circumference;
        const startX = Math.cos(startAngle);
        const startY = Math.sin(startAngle);
        const endX = Math.cos(endAngle);
        const endY = Math.sin(endAngle);
        const calcMax = (angle, a, b)=>(0, _helpersDatasetJs.p)(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
        const calcMin = (angle, a, b)=>(0, _helpersDatasetJs.p)(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
        const maxX = calcMax(0, startX, endX);
        const maxY = calcMax((0, _helpersDatasetJs.H), startY, endY);
        const minX = calcMin((0, _helpersDatasetJs.P), startX, endX);
        const minY = calcMin((0, _helpersDatasetJs.P) + (0, _helpersDatasetJs.H), startY, endY);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
    }
    return {
        ratioX,
        ratioY,
        offsetX,
        offsetY
    };
}
class DoughnutController extends DatasetController {
    static id = 'doughnut';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'arc',
        animation: {
            animateRotate: true,
            animateScale: false
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'circumference',
                    'endAngle',
                    'innerRadius',
                    'outerRadius',
                    'startAngle',
                    'x',
                    'y',
                    'offset',
                    'borderWidth',
                    'spacing'
                ]
            }
        },
        cutout: '50%',
        rotation: 0,
        circumference: 360,
        radius: '100%',
        spacing: 0,
        indexAxis: 'r'
    };
    static descriptors = {
        _scriptable: (name)=>name !== 'spacing',
        _indexable: (name)=>name !== 'spacing' && !name.startsWith('borderDash') && !name.startsWith('hoverBorderDash')
    };
    static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle, color } } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.enableOptionSharing = true;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.offsetX = undefined;
        this.offsetY = undefined;
    }
    linkScales() {}
    parse(start, count) {
        const data = this.getDataset().data;
        const meta = this._cachedMeta;
        if (this._parsing === false) meta._parsed = data;
        else {
            let getter = (i)=>+data[i];
            if ((0, _helpersDatasetJs.i)(data[start])) {
                const { key = 'value' } = this._parsing;
                getter = (i)=>+(0, _helpersDatasetJs.f)(data[i], key);
            }
            let i, ilen;
            for(i = start, ilen = start + count; i < ilen; ++i)meta._parsed[i] = getter(i);
        }
    }
    _getRotation() {
        return (0, _helpersDatasetJs.t)(this.options.rotation - 90);
    }
    _getCircumference() {
        return (0, _helpersDatasetJs.t)(this.options.circumference);
    }
    _getRotationExtents() {
        let min = (0, _helpersDatasetJs.T);
        let max = -(0, _helpersDatasetJs.T);
        for(let i = 0; i < this.chart.data.datasets.length; ++i)if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
            const controller = this.chart.getDatasetMeta(i).controller;
            const rotation = controller._getRotation();
            const circumference = controller._getCircumference();
            min = Math.min(min, rotation);
            max = Math.max(max, rotation + circumference);
        }
        return {
            rotation: min,
            circumference: max - min
        };
    }
    update(mode) {
        const chart = this.chart;
        const { chartArea } = chart;
        const meta = this._cachedMeta;
        const arcs = meta.data;
        const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
        const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
        const cutout = Math.min((0, _helpersDatasetJs.m)(this.options.cutout, maxSize), 1);
        const chartWeight = this._getRingWeight(this.index);
        const { circumference, rotation } = this._getRotationExtents();
        const { ratioX, ratioY, offsetX, offsetY } = getRatioAndOffset(rotation, circumference, cutout);
        const maxWidth = (chartArea.width - spacing) / ratioX;
        const maxHeight = (chartArea.height - spacing) / ratioY;
        const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
        const outerRadius = (0, _helpersDatasetJs.n)(this.options.radius, maxRadius);
        const innerRadius = Math.max(outerRadius * cutout, 0);
        const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
        this.offsetX = offsetX * outerRadius;
        this.offsetY = offsetY * outerRadius;
        meta.total = this.calculateTotal();
        this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
        this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    _circumference(i, reset) {
        const opts = this.options;
        const meta = this._cachedMeta;
        const circumference = this._getCircumference();
        if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) return 0;
        return this.calculateCircumference(meta._parsed[i] * circumference / (0, _helpersDatasetJs.T));
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === 'reset';
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const animateScale = reset && animationOpts.animateScale;
        const innerRadius = animateScale ? 0 : this.innerRadius;
        const outerRadius = animateScale ? 0 : this.outerRadius;
        const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
        let startAngle = this._getRotation();
        let i;
        for(i = 0; i < start; ++i)startAngle += this._circumference(i, reset);
        for(i = start; i < start + count; ++i){
            const circumference = this._circumference(i, reset);
            const arc = arcs[i];
            const properties = {
                x: centerX + this.offsetX,
                y: centerY + this.offsetY,
                startAngle,
                endAngle: startAngle + circumference,
                circumference,
                outerRadius,
                innerRadius
            };
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
            startAngle += circumference;
            this.updateElement(arc, i, properties, mode);
        }
    }
    calculateTotal() {
        const meta = this._cachedMeta;
        const metaData = meta.data;
        let total = 0;
        let i;
        for(i = 0; i < metaData.length; i++){
            const value = meta._parsed[i];
            if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) total += Math.abs(value);
        }
        return total;
    }
    calculateCircumference(value) {
        const total = this._cachedMeta.total;
        if (total > 0 && !isNaN(value)) return (0, _helpersDatasetJs.T) * (Math.abs(value) / total);
        return 0;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, _helpersDatasetJs.o)(meta._parsed[index], chart.options.locale);
        return {
            label: labels[index] || '',
            value
        };
    }
    getMaxBorderWidth(arcs) {
        let max = 0;
        const chart = this.chart;
        let i, ilen, meta, controller, options;
        if (!arcs) {
            for(i = 0, ilen = chart.data.datasets.length; i < ilen; ++i)if (chart.isDatasetVisible(i)) {
                meta = chart.getDatasetMeta(i);
                arcs = meta.data;
                controller = meta.controller;
                break;
            }
        }
        if (!arcs) return 0;
        for(i = 0, ilen = arcs.length; i < ilen; ++i){
            options = controller.resolveDataElementOptions(i);
            if (options.borderAlign !== 'inner') max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
        return max;
    }
    getMaxOffset(arcs) {
        let max = 0;
        for(let i = 0, ilen = arcs.length; i < ilen; ++i){
            const options = this.resolveDataElementOptions(i);
            max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
        }
        return max;
    }
    _getRingWeightOffset(datasetIndex) {
        let ringWeightOffset = 0;
        for(let i = 0; i < datasetIndex; ++i)if (this.chart.isDatasetVisible(i)) ringWeightOffset += this._getRingWeight(i);
        return ringWeightOffset;
    }
    _getRingWeight(datasetIndex) {
        return Math.max((0, _helpersDatasetJs.v)(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
}
class LineController extends DatasetController {
    static id = 'line';
    static defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        showLine: true,
        spanGaps: false
    };
    static overrides = {
        scales: {
            _index_: {
                type: 'category'
            },
            _value_: {
                type: 'linear'
            }
        }
    };
    initialize() {
        this.enableOptionSharing = true;
        this.supportsDecimation = true;
        super.initialize();
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { dataset: line, data: points = [], _dataset } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start, count } = (0, _helpersDatasetJs.q)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, _helpersDatasetJs.w)(meta)) {
            start = 0;
            count = points.length;
        }
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) options.borderWidth = 0;
        options.segment = this.options.segment;
        this.updateElement(line, undefined, {
            animated: !animationsDisabled,
            options
        }, mode);
        this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
        const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps, segment } = this.options;
        const maxGapLength = (0, _helpersDatasetJs.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
        const end = start + count;
        const pointsCount = points.length;
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = 0; i < pointsCount; ++i){
            const point = points[i];
            const properties = directUpdate ? point : {};
            if (i < start || i >= end) {
                properties.skip = true;
                continue;
            }
            const parsed = this.getParsed(i);
            const nullData = (0, _helpersDatasetJs.k)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        const data = meta.data || [];
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
        const meta = this._cachedMeta;
        meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
        super.draw();
    }
}
class PolarAreaController extends DatasetController {
    static id = 'polarArea';
    static defaults = {
        dataElementType: 'arc',
        animation: {
            animateRotate: true,
            animateScale: true
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'startAngle',
                    'endAngle',
                    'innerRadius',
                    'outerRadius'
                ]
            }
        },
        indexAxis: 'r',
        startAngle: 0
    };
    static overrides = {
        aspectRatio: 1,
        plugins: {
            legend: {
                labels: {
                    generateLabels (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            const { labels: { pointStyle, color } } = chart.legend.options;
                            return data.labels.map((label, i)=>{
                                const meta = chart.getDatasetMeta(0);
                                const style = meta.controller.getStyle(i);
                                return {
                                    text: label,
                                    fillStyle: style.backgroundColor,
                                    strokeStyle: style.borderColor,
                                    fontColor: color,
                                    lineWidth: style.borderWidth,
                                    pointStyle: pointStyle,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                },
                onClick (e, legendItem, legend) {
                    legend.chart.toggleDataVisibility(legendItem.index);
                    legend.chart.update();
                }
            }
        },
        scales: {
            r: {
                type: 'radialLinear',
                angleLines: {
                    display: false
                },
                beginAtZero: true,
                grid: {
                    circular: true
                },
                pointLabels: {
                    display: false
                },
                startAngle: 0
            }
        }
    };
    constructor(chart, datasetIndex){
        super(chart, datasetIndex);
        this.innerRadius = undefined;
        this.outerRadius = undefined;
    }
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const chart = this.chart;
        const labels = chart.data.labels || [];
        const value = (0, _helpersDatasetJs.o)(meta._parsed[index].r, chart.options.locale);
        return {
            label: labels[index] || '',
            value
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, _helpersDatasetJs.y).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const arcs = this._cachedMeta.data;
        this._updateRadius();
        this.updateElements(arcs, 0, arcs.length, mode);
    }
    getMinMax() {
        const meta = this._cachedMeta;
        const range = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        };
        meta.data.forEach((element, index)=>{
            const parsed = this.getParsed(index).r;
            if (!isNaN(parsed) && this.chart.getDataVisibility(index)) {
                if (parsed < range.min) range.min = parsed;
                if (parsed > range.max) range.max = parsed;
            }
        });
        return range;
    }
    _updateRadius() {
        const chart = this.chart;
        const chartArea = chart.chartArea;
        const opts = chart.options;
        const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
        const outerRadius = Math.max(minSize / 2, 0);
        const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
        const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
        this.outerRadius = outerRadius - radiusLength * this.index;
        this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
        const reset = mode === 'reset';
        const chart = this.chart;
        const opts = chart.options;
        const animationOpts = opts.animation;
        const scale = this._cachedMeta.rScale;
        const centerX = scale.xCenter;
        const centerY = scale.yCenter;
        const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * (0, _helpersDatasetJs.P);
        let angle = datasetStartAngle;
        let i;
        const defaultAngle = 360 / this.countVisibleElements();
        for(i = 0; i < start; ++i)angle += this._computeAngle(i, mode, defaultAngle);
        for(i = start; i < start + count; i++){
            const arc = arcs[i];
            let startAngle = angle;
            let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
            let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
            angle = endAngle;
            if (reset) {
                if (animationOpts.animateScale) outerRadius = 0;
                if (animationOpts.animateRotate) startAngle = endAngle = datasetStartAngle;
            }
            const properties = {
                x: centerX,
                y: centerY,
                innerRadius: 0,
                outerRadius,
                startAngle,
                endAngle,
                options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
            };
            this.updateElement(arc, i, properties, mode);
        }
    }
    countVisibleElements() {
        const meta = this._cachedMeta;
        let count = 0;
        meta.data.forEach((element, index)=>{
            if (!isNaN(this.getParsed(index).r) && this.chart.getDataVisibility(index)) count++;
        });
        return count;
    }
    _computeAngle(index, mode, defaultAngle) {
        return this.chart.getDataVisibility(index) ? (0, _helpersDatasetJs.t)(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
    }
}
class PieController extends DoughnutController {
    static id = 'pie';
    static defaults = {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: '100%'
    };
}
class RadarController extends DatasetController {
    static id = 'radar';
    static defaults = {
        datasetElementType: 'line',
        dataElementType: 'point',
        indexAxis: 'r',
        showLine: true,
        elements: {
            line: {
                fill: 'start'
            }
        }
    };
    static overrides = {
        aspectRatio: 1,
        scales: {
            r: {
                type: 'radialLinear'
            }
        }
    };
    getLabelAndValue(index) {
        const vScale = this._cachedMeta.vScale;
        const parsed = this.getParsed(index);
        return {
            label: vScale.getLabels()[index],
            value: '' + vScale.getLabelForValue(parsed[vScale.axis])
        };
    }
    parseObjectData(meta, data, start, count) {
        return (0, _helpersDatasetJs.y).bind(this)(meta, data, start, count);
    }
    update(mode) {
        const meta = this._cachedMeta;
        const line = meta.dataset;
        const points = meta.data || [];
        const labels = meta.iScale.getLabels();
        line.points = points;
        if (mode !== 'resize') {
            const options = this.resolveDatasetElementOptions(mode);
            if (!this.options.showLine) options.borderWidth = 0;
            const properties = {
                _loop: true,
                _fullLoop: labels.length === points.length,
                options
            };
            this.updateElement(line, undefined, properties, mode);
        }
        this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
        const scale = this._cachedMeta.rScale;
        const reset = mode === 'reset';
        for(let i = start; i < start + count; i++){
            const point = points[i];
            const options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
            const x = reset ? scale.xCenter : pointPosition.x;
            const y = reset ? scale.yCenter : pointPosition.y;
            const properties = {
                x,
                y,
                angle: pointPosition.angle,
                skip: isNaN(x) || isNaN(y),
                options
            };
            this.updateElement(point, i, properties, mode);
        }
    }
}
class ScatterController extends DatasetController {
    static id = 'scatter';
    static defaults = {
        datasetElementType: false,
        dataElementType: 'point',
        showLine: false,
        fill: false
    };
    static overrides = {
        interaction: {
            mode: 'point'
        },
        scales: {
            x: {
                type: 'linear'
            },
            y: {
                type: 'linear'
            }
        }
    };
    getLabelAndValue(index) {
        const meta = this._cachedMeta;
        const labels = this.chart.data.labels || [];
        const { xScale, yScale } = meta;
        const parsed = this.getParsed(index);
        const x = xScale.getLabelForValue(parsed.x);
        const y = yScale.getLabelForValue(parsed.y);
        return {
            label: labels[index] || '',
            value: '(' + x + ', ' + y + ')'
        };
    }
    update(mode) {
        const meta = this._cachedMeta;
        const { data: points = [] } = meta;
        const animationsDisabled = this.chart._animationsDisabled;
        let { start, count } = (0, _helpersDatasetJs.q)(meta, points, animationsDisabled);
        this._drawStart = start;
        this._drawCount = count;
        if ((0, _helpersDatasetJs.w)(meta)) {
            start = 0;
            count = points.length;
        }
        if (this.options.showLine) {
            if (!this.datasetElementType) this.addElements();
            const { dataset: line, _dataset } = meta;
            line._chart = this.chart;
            line._datasetIndex = this.index;
            line._decimated = !!_dataset._decimated;
            line.points = points;
            const options = this.resolveDatasetElementOptions(mode);
            options.segment = this.options.segment;
            this.updateElement(line, undefined, {
                animated: !animationsDisabled,
                options
            }, mode);
        } else if (this.datasetElementType) {
            delete meta.dataset;
            this.datasetElementType = false;
        }
        this.updateElements(points, start, count, mode);
    }
    addElements() {
        const { showLine } = this.options;
        if (!this.datasetElementType && showLine) this.datasetElementType = this.chart.registry.getElement('line');
        super.addElements();
    }
    updateElements(points, start, count, mode) {
        const reset = mode === 'reset';
        const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
        const firstOpts = this.resolveDataElementOptions(start, mode);
        const sharedOptions = this.getSharedOptions(firstOpts);
        const includeOptions = this.includeOptions(mode, sharedOptions);
        const iAxis = iScale.axis;
        const vAxis = vScale.axis;
        const { spanGaps, segment } = this.options;
        const maxGapLength = (0, _helpersDatasetJs.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
        const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
        let prevParsed = start > 0 && this.getParsed(start - 1);
        for(let i = start; i < start + count; ++i){
            const point = points[i];
            const parsed = this.getParsed(i);
            const properties = directUpdate ? point : {};
            const nullData = (0, _helpersDatasetJs.k)(parsed[vAxis]);
            const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
            const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
            properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
            properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
            if (segment) {
                properties.parsed = parsed;
                properties.raw = _dataset.data[i];
            }
            if (includeOptions) properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
            if (!directUpdate) this.updateElement(point, i, properties, mode);
            prevParsed = parsed;
        }
        this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    getMaxOverflow() {
        const meta = this._cachedMeta;
        const data = meta.data || [];
        if (!this.options.showLine) {
            let max = 0;
            for(let i = data.length - 1; i >= 0; --i)max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
            return max > 0 && max;
        }
        const dataset = meta.dataset;
        const border = dataset.options && dataset.options.borderWidth || 0;
        if (!data.length) return border;
        const firstPoint = data[0].size(this.resolveDataElementOptions(0));
        const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
        return Math.max(border, firstPoint, lastPoint) / 2;
    }
}
var controllers = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    BarController: BarController,
    BubbleController: BubbleController,
    DoughnutController: DoughnutController,
    LineController: LineController,
    PieController: PieController,
    PolarAreaController: PolarAreaController,
    RadarController: RadarController,
    ScatterController: ScatterController
});
/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */ function abstract() {
    throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */ class DateAdapterBase {
    /**
   * Override default date adapter methods.
   * Accepts type parameter to define options type.
   * @example
   * Chart._adapters._date.override<{myAdapterOption: string}>({
   *   init() {
   *     console.log(this.options.myAdapterOption);
   *   }
   * })
   */ static override(members) {
        Object.assign(DateAdapterBase.prototype, members);
    }
    options;
    constructor(options){
        this.options = options || {};
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init() {}
    formats() {
        return abstract();
    }
    parse() {
        return abstract();
    }
    format() {
        return abstract();
    }
    add() {
        return abstract();
    }
    diff() {
        return abstract();
    }
    startOf() {
        return abstract();
    }
    endOf() {
        return abstract();
    }
}
var adapters = {
    _date: DateAdapterBase
};
function binarySearch(metaset, axis, value, intersect) {
    const { controller, data, _sorted } = metaset;
    const iScale = controller._cachedMeta.iScale;
    const spanGaps = metaset.dataset ? metaset.dataset.options ? metaset.dataset.options.spanGaps : null : null;
    if (iScale && axis === iScale.axis && axis !== 'r' && _sorted && data.length) {
        const lookupMethod = iScale._reversePixels ? (0, _helpersDatasetJs.A) : (0, _helpersDatasetJs.B);
        if (!intersect) {
            const result = lookupMethod(data, axis, value);
            if (spanGaps) {
                const { vScale } = controller._cachedMeta;
                const { _parsed } = metaset;
                const distanceToDefinedLo = _parsed.slice(0, result.lo + 1).reverse().findIndex((point)=>!(0, _helpersDatasetJs.k)(point[vScale.axis]));
                result.lo -= Math.max(0, distanceToDefinedLo);
                const distanceToDefinedHi = _parsed.slice(result.hi).findIndex((point)=>!(0, _helpersDatasetJs.k)(point[vScale.axis]));
                result.hi += Math.max(0, distanceToDefinedHi);
            }
            return result;
        } else if (controller._sharedOptions) {
            const el = data[0];
            const range = typeof el.getRange === 'function' && el.getRange(axis);
            if (range) {
                const start = lookupMethod(data, axis, value - range);
                const end = lookupMethod(data, axis, value + range);
                return {
                    lo: start.lo,
                    hi: end.hi
                };
            }
        }
    }
    return {
        lo: 0,
        hi: data.length - 1
    };
}
function evaluateInteractionItems(chart, axis, position, handler, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for(let i = 0, ilen = metasets.length; i < ilen; ++i){
        const { index, data } = metasets[i];
        const { lo, hi } = binarySearch(metasets[i], axis, value, intersect);
        for(let j = lo; j <= hi; ++j){
            const element = data[j];
            if (!element.skip) handler(element, index, j);
        }
    }
}
function getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf('x') !== -1;
    const useY = axis.indexOf('y') !== -1;
    return function(pt1, pt2) {
        const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
        const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
}
function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) return items;
    const evaluationFunc = function(element, datasetIndex, index) {
        if (!includeInvisible && !(0, _helpersDatasetJs.C)(element, chart.chartArea, 0)) return;
        if (element.inRange(position.x, position.y, useFinalPosition)) items.push({
            element,
            datasetIndex,
            index
        });
    };
    evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
}
function getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index) {
        const { startAngle, endAngle } = element.getProps([
            'startAngle',
            'endAngle'
        ], useFinalPosition);
        const { angle } = (0, _helpersDatasetJs.D)(element, {
            x: position.x,
            y: position.y
        });
        if ((0, _helpersDatasetJs.p)(angle, startAngle, endAngle)) items.push({
            element,
            datasetIndex,
            index
        });
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index) {
        const inRange = element.inRange(position.x, position.y, useFinalPosition);
        if (intersect && !inRange) return;
        const center = element.getCenterPoint(useFinalPosition);
        const pointInArea = !!includeInvisible || chart.isPointInArea(center);
        if (!pointInArea && !inRange) return;
        const distance = distanceMetric(position, center);
        if (distance < minDistance) {
            items = [
                {
                    element,
                    datasetIndex,
                    index
                }
            ];
            minDistance = distance;
        } else if (distance === minDistance) items.push({
            element,
            datasetIndex,
            index
        });
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) return [];
    return axis === 'r' && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
    let intersectsItem = false;
    evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index)=>{
        if (element[rangeMethod] && element[rangeMethod](position[axis], useFinalPosition)) {
            items.push({
                element,
                datasetIndex,
                index
            });
            intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
        }
    });
    if (intersect && !intersectsItem) return [];
    return items;
}
var Interaction = {
    evaluateInteractionItems,
    modes: {
        index (chart, e, options, useFinalPosition) {
            const position = (0, _helpersDatasetJs.z)(e, chart);
            const axis = options.axis || 'x';
            const includeInvisible = options.includeInvisible || false;
            const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            const elements = [];
            if (!items.length) return [];
            chart.getSortedVisibleDatasetMetas().forEach((meta)=>{
                const index = items[0].index;
                const element = meta.data[index];
                if (element && !element.skip) elements.push({
                    element,
                    datasetIndex: meta.index,
                    index
                });
            });
            return elements;
        },
        dataset (chart, e, options, useFinalPosition) {
            const position = (0, _helpersDatasetJs.z)(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
            if (items.length > 0) {
                const datasetIndex = items[0].datasetIndex;
                const data = chart.getDatasetMeta(datasetIndex).data;
                items = [];
                for(let i = 0; i < data.length; ++i)items.push({
                    element: data[i],
                    datasetIndex,
                    index: i
                });
            }
            return items;
        },
        point (chart, e, options, useFinalPosition) {
            const position = (0, _helpersDatasetJs.z)(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
        },
        nearest (chart, e, options, useFinalPosition) {
            const position = (0, _helpersDatasetJs.z)(e, chart);
            const axis = options.axis || 'xy';
            const includeInvisible = options.includeInvisible || false;
            return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
        },
        x (chart, e, options, useFinalPosition) {
            const position = (0, _helpersDatasetJs.z)(e, chart);
            return getAxisItems(chart, position, 'x', options.intersect, useFinalPosition);
        },
        y (chart, e, options, useFinalPosition) {
            const position = (0, _helpersDatasetJs.z)(e, chart);
            return getAxisItems(chart, position, 'y', options.intersect, useFinalPosition);
        }
    }
};
const STATIC_POSITIONS = [
    'left',
    'top',
    'right',
    'bottom'
];
function filterByPosition(array, position) {
    return array.filter((v)=>v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
    return array.filter((v)=>STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
    return array.sort((a, b)=>{
        const v0 = reverse ? b : a;
        const v1 = reverse ? a : b;
        return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
}
function wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i, ilen, box, pos, stack, stackWeight;
    for(i = 0, ilen = (boxes || []).length; i < ilen; ++i){
        box = boxes[i];
        ({ position: pos, options: { stack, stackWeight = 1 } } = box);
        layoutBoxes.push({
            index: i,
            box,
            pos,
            horizontal: box.isHorizontal(),
            weight: box.weight,
            stack: stack && pos + stack,
            stackWeight
        });
    }
    return layoutBoxes;
}
function buildStacks(layouts) {
    const stacks = {};
    for (const wrap of layouts){
        const { stack, pos, stackWeight } = wrap;
        if (!stack || !STATIC_POSITIONS.includes(pos)) continue;
        const _stack = stacks[stack] || (stacks[stack] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        _stack.count++;
        _stack.weight += stackWeight;
    }
    return stacks;
}
function setLayoutDims(layouts, params) {
    const stacks = buildStacks(layouts);
    const { vBoxMaxWidth, hBoxMaxHeight } = params;
    let i, ilen, layout;
    for(i = 0, ilen = layouts.length; i < ilen; ++i){
        layout = layouts[i];
        const { fullSize } = layout.box;
        const stack = stacks[layout.stack];
        const factor = stack && layout.stackWeight / stack.weight;
        if (layout.horizontal) {
            layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
            layout.height = hBoxMaxHeight;
        } else {
            layout.width = vBoxMaxWidth;
            layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
        }
    }
    return stacks;
}
function buildLayoutBoxes(boxes) {
    const layoutBoxes = wrapBoxes(boxes);
    const fullSize = sortByWeight(layoutBoxes.filter((wrap)=>wrap.box.fullSize), true);
    const left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
    const right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
    const top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
    const bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
    const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
    const centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
    return {
        fullSize,
        leftAndTop: left.concat(top),
        rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
        chartArea: filterByPosition(layoutBoxes, 'chartArea'),
        vertical: left.concat(right).concat(centerVertical),
        horizontal: top.concat(bottom).concat(centerHorizontal)
    };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
    return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
    const { pos, box } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!(0, _helpersDatasetJs.i)(pos)) {
        if (layout.size) chartArea[pos] -= layout.size;
        const stack = stacks[layout.stack] || {
            size: 0,
            count: 1
        };
        stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
        layout.size = stack.size / stack.count;
        chartArea[pos] += layout.size;
    }
    if (box.getPadding) updateMaxPadding(maxPadding, box.getPadding());
    const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
    const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
        same: widthChanged,
        other: heightChanged
    } : {
        same: heightChanged,
        other: widthChanged
    };
}
function handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
        const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
        chartArea[pos] += change;
        return change;
    }
    chartArea.y += updatePos('top');
    chartArea.x += updatePos('left');
    updatePos('right');
    updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions) {
        const margin = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        positions.forEach((pos)=>{
            margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
        });
        return margin;
    }
    return horizontal ? marginForPositions([
        'left',
        'right'
    ]) : marginForPositions([
        'top',
        'bottom'
    ]);
}
function fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i, ilen, layout, box, refit, changed;
    for(i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i){
        layout = boxes[i];
        box = layout.box;
        box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
        const { same, other } = updateDims(chartArea, params, layout, stacks);
        refit |= same && refitBoxes.length;
        changed = changed || other;
        if (!box.fullSize) refitBoxes.push(layout);
    }
    return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x, y } = chartArea;
    for (const layout of boxes){
        const box = layout.box;
        const stack = stacks[layout.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        };
        const weight = layout.stackWeight / stack.weight || 1;
        if (layout.horizontal) {
            const width = chartArea.w * weight;
            const height = stack.size || box.height;
            if ((0, _helpersDatasetJs.h)(stack.start)) y = stack.start;
            if (box.fullSize) setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
            else setBoxDims(box, chartArea.left + stack.placed, y, width, height);
            stack.start = y;
            stack.placed += width;
            y = box.bottom;
        } else {
            const height = chartArea.h * weight;
            const width = stack.size || box.width;
            if ((0, _helpersDatasetJs.h)(stack.start)) x = stack.start;
            if (box.fullSize) setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
            else setBoxDims(box, x, chartArea.top + stack.placed, width, height);
            stack.start = x;
            stack.placed += height;
            x = box.right;
        }
    }
    chartArea.x = x;
    chartArea.y = y;
}
var layouts = {
    addBox (chart, item) {
        if (!chart.boxes) chart.boxes = [];
        item.fullSize = item.fullSize || false;
        item.position = item.position || 'top';
        item.weight = item.weight || 0;
        item._layers = item._layers || function() {
            return [
                {
                    z: 0,
                    draw (chartArea) {
                        item.draw(chartArea);
                    }
                }
            ];
        };
        chart.boxes.push(item);
    },
    removeBox (chart, layoutItem) {
        const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
        if (index !== -1) chart.boxes.splice(index, 1);
    },
    configure (chart, item, options) {
        item.fullSize = options.fullSize;
        item.position = options.position;
        item.weight = options.weight;
    },
    update (chart, width, height, minPadding) {
        if (!chart) return;
        const padding = (0, _helpersDatasetJs.E)(chart.options.layout.padding);
        const availableWidth = Math.max(width - padding.width, 0);
        const availableHeight = Math.max(height - padding.height, 0);
        const boxes = buildLayoutBoxes(chart.boxes);
        const verticalBoxes = boxes.vertical;
        const horizontalBoxes = boxes.horizontal;
        (0, _helpersDatasetJs.F)(chart.boxes, (box)=>{
            if (typeof box.beforeLayout === 'function') box.beforeLayout();
        });
        const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap)=>wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
        const params = Object.freeze({
            outerWidth: width,
            outerHeight: height,
            padding,
            availableWidth,
            availableHeight,
            vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
            hBoxMaxHeight: availableHeight / 2
        });
        const maxPadding = Object.assign({}, padding);
        updateMaxPadding(maxPadding, (0, _helpersDatasetJs.E)(minPadding));
        const chartArea = Object.assign({
            maxPadding,
            w: availableWidth,
            h: availableHeight,
            x: padding.left,
            y: padding.top
        }, padding);
        const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
        fitBoxes(boxes.fullSize, chartArea, params, stacks);
        fitBoxes(verticalBoxes, chartArea, params, stacks);
        if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) fitBoxes(verticalBoxes, chartArea, params, stacks);
        handleMaxPadding(chartArea);
        placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
        chartArea.x += chartArea.w;
        chartArea.y += chartArea.h;
        placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
        chart.chartArea = {
            left: chartArea.left,
            top: chartArea.top,
            right: chartArea.left + chartArea.w,
            bottom: chartArea.top + chartArea.h,
            height: chartArea.h,
            width: chartArea.w
        };
        (0, _helpersDatasetJs.F)(boxes.chartArea, (layout)=>{
            const box = layout.box;
            Object.assign(box, chart.chartArea);
            box.update(chartArea.w, chartArea.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            });
        });
    }
};
class BasePlatform {
    acquireContext(canvas, aspectRatio) {}
    releaseContext(context) {
        return false;
    }
    addEventListener(chart, type, listener) {}
    removeEventListener(chart, type, listener) {}
    getDevicePixelRatio() {
        return 1;
    }
    getMaximumSize(element, width, height, aspectRatio) {
        width = Math.max(0, width || element.width);
        height = height || element.height;
        return {
            width,
            height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
        };
    }
    isAttached(canvas) {
        return true;
    }
    updateConfig(config) {}
}
class BasicPlatform extends BasePlatform {
    acquireContext(item) {
        return item && item.getContext && item.getContext('2d') || null;
    }
    updateConfig(config) {
        config.options.animation = false;
    }
}
const EXPANDO_KEY = '$chartjs';
const EVENT_TYPES = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
};
const isNullOrEmpty = (value)=>value === null || value === '';
function initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute('height');
    const renderWidth = canvas.getAttribute('width');
    canvas[EXPANDO_KEY] = {
        initial: {
            height: renderHeight,
            width: renderWidth,
            style: {
                display: style.display,
                height: style.height,
                width: style.width
            }
        }
    };
    style.display = style.display || 'block';
    style.boxSizing = style.boxSizing || 'border-box';
    if (isNullOrEmpty(renderWidth)) {
        const displayWidth = (0, _helpersDatasetJs.J)(canvas, 'width');
        if (displayWidth !== undefined) canvas.width = displayWidth;
    }
    if (isNullOrEmpty(renderHeight)) {
        if (canvas.style.height === '') canvas.height = canvas.width / (aspectRatio || 2);
        else {
            const displayHeight = (0, _helpersDatasetJs.J)(canvas, 'height');
            if (displayHeight !== undefined) canvas.height = displayHeight;
        }
    }
    return canvas;
}
const eventListenerOptions = (0, _helpersDatasetJs.K) ? {
    passive: true
} : false;
function addListener(node, type, listener) {
    if (node) node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
    if (chart && chart.canvas) chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
    const type = EVENT_TYPES[event.type] || event.type;
    const { x, y } = (0, _helpersDatasetJs.z)(event, chart);
    return {
        type,
        chart,
        native: event,
        x: x !== undefined ? x : null,
        y: y !== undefined ? y : null
    };
}
function nodeListContains(nodeList, canvas) {
    for (const node of nodeList){
        if (node === canvas || node.contains(canvas)) return true;
    }
}
function createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.addedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
function createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries)=>{
        let trigger = false;
        for (const entry of entries){
            trigger = trigger || nodeListContains(entry.removedNodes, canvas);
            trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
        }
        if (trigger) listener();
    });
    observer.observe(document, {
        childList: true,
        subtree: true
    });
    return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === oldDevicePixelRatio) return;
    oldDevicePixelRatio = dpr;
    drpListeningCharts.forEach((resize, chart)=>{
        if (chart.currentDevicePixelRatio !== dpr) resize();
    });
}
function listenDevicePixelRatioChanges(chart, resize) {
    if (!drpListeningCharts.size) window.addEventListener('resize', onWindowResize);
    drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
    drpListeningCharts.delete(chart);
    if (!drpListeningCharts.size) window.removeEventListener('resize', onWindowResize);
}
function createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && (0, _helpersDatasetJs.I)(canvas);
    if (!container) return;
    const resize = (0, _helpersDatasetJs.L)((width, height)=>{
        const w = container.clientWidth;
        listener(width, height);
        if (w < container.clientWidth) listener();
    }, window);
    const observer = new ResizeObserver((entries)=>{
        const entry = entries[0];
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        if (width === 0 && height === 0) return;
        resize(width, height);
    });
    observer.observe(container);
    listenDevicePixelRatioChanges(chart, resize);
    return observer;
}
function releaseObserver(chart, type, observer) {
    if (observer) observer.disconnect();
    if (type === 'resize') unlistenDevicePixelRatioChanges(chart);
}
function createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = (0, _helpersDatasetJs.L)((event)=>{
        if (chart.ctx !== null) listener(fromNativeEvent(event, chart));
    }, chart);
    addListener(canvas, type, proxy);
    return proxy;
}
class DomPlatform extends BasePlatform {
    acquireContext(canvas, aspectRatio) {
        const context = canvas && canvas.getContext && canvas.getContext('2d');
        if (context && context.canvas === canvas) {
            initCanvas(canvas, aspectRatio);
            return context;
        }
        return null;
    }
    releaseContext(context) {
        const canvas = context.canvas;
        if (!canvas[EXPANDO_KEY]) return false;
        const initial = canvas[EXPANDO_KEY].initial;
        [
            'height',
            'width'
        ].forEach((prop)=>{
            const value = initial[prop];
            if ((0, _helpersDatasetJs.k)(value)) canvas.removeAttribute(prop);
            else canvas.setAttribute(prop, value);
        });
        const style = initial.style || {};
        Object.keys(style).forEach((key)=>{
            canvas.style[key] = style[key];
        });
        canvas.width = canvas.width;
        delete canvas[EXPANDO_KEY];
        return true;
    }
    addEventListener(chart, type, listener) {
        this.removeEventListener(chart, type);
        const proxies = chart.$proxies || (chart.$proxies = {});
        const handlers = {
            attach: createAttachObserver,
            detach: createDetachObserver,
            resize: createResizeObserver
        };
        const handler = handlers[type] || createProxyAndListen;
        proxies[type] = handler(chart, type, listener);
    }
    removeEventListener(chart, type) {
        const proxies = chart.$proxies || (chart.$proxies = {});
        const proxy = proxies[type];
        if (!proxy) return;
        const handlers = {
            attach: releaseObserver,
            detach: releaseObserver,
            resize: releaseObserver
        };
        const handler = handlers[type] || removeListener;
        handler(chart, type, proxy);
        proxies[type] = undefined;
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio;
    }
    getMaximumSize(canvas, width, height, aspectRatio) {
        return (0, _helpersDatasetJs.G)(canvas, width, height, aspectRatio);
    }
    isAttached(canvas) {
        const container = canvas && (0, _helpersDatasetJs.I)(canvas);
        return !!(container && container.isConnected);
    }
}
function _detectPlatform(canvas) {
    if (!(0, _helpersDatasetJs.M)() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) return BasicPlatform;
    return DomPlatform;
}
class Element {
    static defaults = {};
    static defaultRoutes = undefined;
    x;
    y;
    active = false;
    options;
    $animations;
    tooltipPosition(useFinalPosition) {
        const { x, y } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    hasValue() {
        return (0, _helpersDatasetJs.x)(this.x) && (0, _helpersDatasetJs.x)(this.y);
    }
    getProps(props, final) {
        const anims = this.$animations;
        if (!final || !anims) // let's not create an object, if not needed
        return this;
        const ret = {};
        props.forEach((prop)=>{
            ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
        });
        return ret;
    }
}
function autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const determinedMaxTicks = determineMaxTicks(scale);
    const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
    const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
        skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
        return newTicks;
    }
    const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
        let i, ilen;
        const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
        skip(ticks, newTicks, spacing, (0, _helpersDatasetJs.k)(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
        for(i = 0, ilen = numMajorIndices - 1; i < ilen; i++)skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
        skip(ticks, newTicks, spacing, last, (0, _helpersDatasetJs.k)(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
        return newTicks;
    }
    skip(ticks, newTicks, spacing);
    return newTicks;
}
function determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) return Math.max(spacing, 1);
    const factors = (0, _helpersDatasetJs.N)(evenMajorSpacing);
    for(let i = 0, ilen = factors.length - 1; i < ilen; i++){
        const factor = factors[i];
        if (factor > spacing) return factor;
    }
    return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
    const result = [];
    let i, ilen;
    for(i = 0, ilen = ticks.length; i < ilen; i++)if (ticks[i].major) result.push(i);
    return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i;
    spacing = Math.ceil(spacing);
    for(i = 0; i < ticks.length; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = majorIndices[count * spacing];
    }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = (0, _helpersDatasetJs.v)(majorStart, 0);
    const end = Math.min((0, _helpersDatasetJs.v)(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
        length = majorEnd - majorStart;
        spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while(next < 0){
        count++;
        next = Math.round(start + count * spacing);
    }
    for(i = Math.max(start, 0); i < end; i++)if (i === next) {
        newTicks.push(ticks[i]);
        count++;
        next = Math.round(start + count * spacing);
    }
}
function getEvenSpacing(arr) {
    const len = arr.length;
    let i, diff;
    if (len < 2) return false;
    for(diff = arr[0], i = 1; i < len; ++i){
        if (arr[i] - arr[i - 1] !== diff) return false;
    }
    return diff;
}
const reverseAlign = (align)=>align === 'left' ? 'right' : align === 'right' ? 'left' : align;
const offsetFromEdge = (scale, edge, offset)=>edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
const getTicksLimit = (ticksLength, maxTicksLimit)=>Math.min(maxTicksLimit || ticksLength, ticksLength);
function sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i = 0;
    for(; i < len; i += increment)result.push(arr[Math.floor(i)]);
    return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex = Math.min(index, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex);
    let offset;
    if (offsetGridLines) {
        if (length === 1) offset = Math.max(lineValue - start, end - lineValue);
        else if (index === 0) offset = (scale.getPixelForTick(1) - lineValue) / 2;
        else offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
        lineValue += validIndex < index ? offset : -offset;
        if (lineValue < start - epsilon || lineValue > end + epsilon) return;
    }
    return lineValue;
}
function garbageCollect(caches, length) {
    (0, _helpersDatasetJs.F)(caches, (cache)=>{
        const gc = cache.gc;
        const gcLen = gc.length / 2;
        let i;
        if (gcLen > length) {
            for(i = 0; i < gcLen; ++i)delete cache.data[gc[i]];
            gc.splice(0, gcLen);
        }
    });
}
function getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
    if (!options.display) return 0;
    const font = (0, _helpersDatasetJs.a0)(options.font, fallback);
    const padding = (0, _helpersDatasetJs.E)(options.padding);
    const lines = (0, _helpersDatasetJs.b)(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
}
function createScaleContext(parent, scale) {
    return (0, _helpersDatasetJs.j)(parent, {
        scale,
        type: 'scale'
    });
}
function createTickContext(parent, index, tick) {
    return (0, _helpersDatasetJs.j)(parent, {
        tick,
        index,
        type: 'tick'
    });
}
function titleAlign(align, position, reverse) {
    let ret = (0, _helpersDatasetJs.a1)(align);
    if (reverse && position !== 'right' || !reverse && position === 'right') ret = reverseAlign(ret);
    return ret;
}
function titleArgs(scale, offset, position, align) {
    const { top, left, bottom, right, chart } = scale;
    const { chartArea, scales } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
        titleX = (0, _helpersDatasetJs.a2)(align, left, right);
        if ((0, _helpersDatasetJs.i)(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
        } else if (position === 'center') titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
        else titleY = offsetFromEdge(scale, position, offset);
        maxWidth = right - left;
    } else {
        if ((0, _helpersDatasetJs.i)(position)) {
            const positionAxisID = Object.keys(position)[0];
            const value = position[positionAxisID];
            titleX = scales[positionAxisID].getPixelForValue(value) - width + offset;
        } else if (position === 'center') titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
        else titleX = offsetFromEdge(scale, position, offset);
        titleY = (0, _helpersDatasetJs.a2)(align, bottom, top);
        rotation = position === 'left' ? -(0, _helpersDatasetJs.H) : (0, _helpersDatasetJs.H);
    }
    return {
        titleX,
        titleY,
        maxWidth,
        rotation
    };
}
class Scale extends Element {
    constructor(cfg){
        super();
        this.id = cfg.id;
        this.type = cfg.type;
        this.options = undefined;
        this.ctx = cfg.ctx;
        this.chart = cfg.chart;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };
        this.maxWidth = undefined;
        this.maxHeight = undefined;
        this.paddingTop = undefined;
        this.paddingBottom = undefined;
        this.paddingLeft = undefined;
        this.paddingRight = undefined;
        this.axis = undefined;
        this.labelRotation = undefined;
        this.min = undefined;
        this.max = undefined;
        this._range = undefined;
        this.ticks = [];
        this._gridLineItems = null;
        this._labelItems = null;
        this._labelSizes = null;
        this._length = 0;
        this._maxLength = 0;
        this._longestTextCache = {};
        this._startPixel = undefined;
        this._endPixel = undefined;
        this._reversePixels = false;
        this._userMax = undefined;
        this._userMin = undefined;
        this._suggestedMax = undefined;
        this._suggestedMin = undefined;
        this._ticksLength = 0;
        this._borderValue = 0;
        this._cache = {};
        this._dataLimitsCached = false;
        this.$context = undefined;
    }
    init(options) {
        this.options = options.setContext(this.getContext());
        this.axis = options.axis;
        this._userMin = this.parse(options.min);
        this._userMax = this.parse(options.max);
        this._suggestedMin = this.parse(options.suggestedMin);
        this._suggestedMax = this.parse(options.suggestedMax);
    }
    parse(raw, index) {
        return raw;
    }
    getUserBounds() {
        let { _userMin, _userMax, _suggestedMin, _suggestedMax } = this;
        _userMin = (0, _helpersDatasetJs.O)(_userMin, Number.POSITIVE_INFINITY);
        _userMax = (0, _helpersDatasetJs.O)(_userMax, Number.NEGATIVE_INFINITY);
        _suggestedMin = (0, _helpersDatasetJs.O)(_suggestedMin, Number.POSITIVE_INFINITY);
        _suggestedMax = (0, _helpersDatasetJs.O)(_suggestedMax, Number.NEGATIVE_INFINITY);
        return {
            min: (0, _helpersDatasetJs.O)(_userMin, _suggestedMin),
            max: (0, _helpersDatasetJs.O)(_userMax, _suggestedMax),
            minDefined: (0, _helpersDatasetJs.g)(_userMin),
            maxDefined: (0, _helpersDatasetJs.g)(_userMax)
        };
    }
    getMinMax(canStack) {
        let { min, max, minDefined, maxDefined } = this.getUserBounds();
        let range;
        if (minDefined && maxDefined) return {
            min,
            max
        };
        const metas = this.getMatchingVisibleMetas();
        for(let i = 0, ilen = metas.length; i < ilen; ++i){
            range = metas[i].controller.getMinMax(this, canStack);
            if (!minDefined) min = Math.min(min, range.min);
            if (!maxDefined) max = Math.max(max, range.max);
        }
        min = maxDefined && min > max ? max : min;
        max = minDefined && min > max ? min : max;
        return {
            min: (0, _helpersDatasetJs.O)(min, (0, _helpersDatasetJs.O)(max, min)),
            max: (0, _helpersDatasetJs.O)(max, (0, _helpersDatasetJs.O)(min, max))
        };
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        };
    }
    getTicks() {
        return this.ticks;
    }
    getLabels() {
        const data = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
    getLabelItems(chartArea = this.chart.chartArea) {
        const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
        return items;
    }
    beforeLayout() {
        this._cache = {};
        this._dataLimitsCached = false;
    }
    beforeUpdate() {
        (0, _helpersDatasetJs.Q)(this.options.beforeUpdate, [
            this
        ]);
    }
    update(maxWidth, maxHeight, margins) {
        const { beginAtZero, grace, ticks: tickOpts } = this.options;
        const sampleSize = tickOpts.sampleSize;
        this.beforeUpdate();
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, margins);
        this.ticks = null;
        this._labelSizes = null;
        this._gridLineItems = null;
        this._labelItems = null;
        this.beforeSetDimensions();
        this.setDimensions();
        this.afterSetDimensions();
        this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
        if (!this._dataLimitsCached) {
            this.beforeDataLimits();
            this.determineDataLimits();
            this.afterDataLimits();
            this._range = (0, _helpersDatasetJs.R)(this, grace, beginAtZero);
            this._dataLimitsCached = true;
        }
        this.beforeBuildTicks();
        this.ticks = this.buildTicks() || [];
        this.afterBuildTicks();
        const samplingEnabled = sampleSize < this.ticks.length;
        this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
        this.configure();
        this.beforeCalculateLabelRotation();
        this.calculateLabelRotation();
        this.afterCalculateLabelRotation();
        if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
            this.ticks = autoSkip(this, this.ticks);
            this._labelSizes = null;
            this.afterAutoSkip();
        }
        if (samplingEnabled) this._convertTicksToLabels(this.ticks);
        this.beforeFit();
        this.fit();
        this.afterFit();
        this.afterUpdate();
    }
    configure() {
        let reversePixels = this.options.reverse;
        let startPixel, endPixel;
        if (this.isHorizontal()) {
            startPixel = this.left;
            endPixel = this.right;
        } else {
            startPixel = this.top;
            endPixel = this.bottom;
            reversePixels = !reversePixels;
        }
        this._startPixel = startPixel;
        this._endPixel = endPixel;
        this._reversePixels = reversePixels;
        this._length = endPixel - startPixel;
        this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
        (0, _helpersDatasetJs.Q)(this.options.afterUpdate, [
            this
        ]);
    }
    beforeSetDimensions() {
        (0, _helpersDatasetJs.Q)(this.options.beforeSetDimensions, [
            this
        ]);
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = 0;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = 0;
            this.bottom = this.height;
        }
        this.paddingLeft = 0;
        this.paddingTop = 0;
        this.paddingRight = 0;
        this.paddingBottom = 0;
    }
    afterSetDimensions() {
        (0, _helpersDatasetJs.Q)(this.options.afterSetDimensions, [
            this
        ]);
    }
    _callHooks(name) {
        this.chart.notifyPlugins(name, this.getContext());
        (0, _helpersDatasetJs.Q)(this.options[name], [
            this
        ]);
    }
    beforeDataLimits() {
        this._callHooks('beforeDataLimits');
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks('afterDataLimits');
    }
    beforeBuildTicks() {
        this._callHooks('beforeBuildTicks');
    }
    buildTicks() {
        return [];
    }
    afterBuildTicks() {
        this._callHooks('afterBuildTicks');
    }
    beforeTickToLabelConversion() {
        (0, _helpersDatasetJs.Q)(this.options.beforeTickToLabelConversion, [
            this
        ]);
    }
    generateTickLabels(ticks) {
        const tickOpts = this.options.ticks;
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; i++){
            tick = ticks[i];
            tick.label = (0, _helpersDatasetJs.Q)(tickOpts.callback, [
                tick.value,
                i,
                ticks
            ], this);
        }
    }
    afterTickToLabelConversion() {
        (0, _helpersDatasetJs.Q)(this.options.afterTickToLabelConversion, [
            this
        ]);
    }
    beforeCalculateLabelRotation() {
        (0, _helpersDatasetJs.Q)(this.options.beforeCalculateLabelRotation, [
            this
        ]);
    }
    calculateLabelRotation() {
        const options = this.options;
        const tickOpts = options.ticks;
        const numTicks = getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
        const minRotation = tickOpts.minRotation || 0;
        const maxRotation = tickOpts.maxRotation;
        let labelRotation = minRotation;
        let tickWidth, maxHeight, maxLabelDiagonal;
        if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
            this.labelRotation = minRotation;
            return;
        }
        const labelSizes = this._getLabelSizes();
        const maxLabelWidth = labelSizes.widest.width;
        const maxLabelHeight = labelSizes.highest.height;
        const maxWidth = (0, _helpersDatasetJs.S)(this.chart.width - maxLabelWidth, 0, this.maxWidth);
        tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
        if (maxLabelWidth + 6 > tickWidth) {
            tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
            maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
            maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
            labelRotation = (0, _helpersDatasetJs.U)(Math.min(Math.asin((0, _helpersDatasetJs.S)((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin((0, _helpersDatasetJs.S)(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin((0, _helpersDatasetJs.S)(maxLabelHeight / maxLabelDiagonal, -1, 1))));
            labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
        }
        this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
        (0, _helpersDatasetJs.Q)(this.options.afterCalculateLabelRotation, [
            this
        ]);
    }
    afterAutoSkip() {}
    beforeFit() {
        (0, _helpersDatasetJs.Q)(this.options.beforeFit, [
            this
        ]);
    }
    fit() {
        const minSize = {
            width: 0,
            height: 0
        };
        const { chart, options: { ticks: tickOpts, title: titleOpts, grid: gridOpts } } = this;
        const display = this._isVisible();
        const isHorizontal = this.isHorizontal();
        if (display) {
            const titleHeight = getTitleHeight(titleOpts, chart.options.font);
            if (isHorizontal) {
                minSize.width = this.maxWidth;
                minSize.height = getTickMarkLength(gridOpts) + titleHeight;
            } else {
                minSize.height = this.maxHeight;
                minSize.width = getTickMarkLength(gridOpts) + titleHeight;
            }
            if (tickOpts.display && this.ticks.length) {
                const { first, last, widest, highest } = this._getLabelSizes();
                const tickPadding = tickOpts.padding * 2;
                const angleRadians = (0, _helpersDatasetJs.t)(this.labelRotation);
                const cos = Math.cos(angleRadians);
                const sin = Math.sin(angleRadians);
                if (isHorizontal) {
                    const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
                    minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
                } else {
                    const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
                    minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
                }
                this._calculatePadding(first, last, sin, cos);
            }
        }
        this._handleMargins();
        if (isHorizontal) {
            this.width = this._length = chart.width - this._margins.left - this._margins.right;
            this.height = minSize.height;
        } else {
            this.width = minSize.width;
            this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
        }
    }
    _calculatePadding(first, last, sin, cos) {
        const { ticks: { align, padding }, position } = this.options;
        const isRotated = this.labelRotation !== 0;
        const labelsBelowTicks = position !== 'top' && this.axis === 'x';
        if (this.isHorizontal()) {
            const offsetLeft = this.getPixelForTick(0) - this.left;
            const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
            let paddingLeft = 0;
            let paddingRight = 0;
            if (isRotated) {
                if (labelsBelowTicks) {
                    paddingLeft = cos * first.width;
                    paddingRight = sin * last.height;
                } else {
                    paddingLeft = sin * first.height;
                    paddingRight = cos * last.width;
                }
            } else if (align === 'start') paddingRight = last.width;
            else if (align === 'end') paddingLeft = first.width;
            else if (align !== 'inner') {
                paddingLeft = first.width / 2;
                paddingRight = last.width / 2;
            }
            this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
            this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
        } else {
            let paddingTop = last.height / 2;
            let paddingBottom = first.height / 2;
            if (align === 'start') {
                paddingTop = 0;
                paddingBottom = first.height;
            } else if (align === 'end') {
                paddingTop = last.height;
                paddingBottom = 0;
            }
            this.paddingTop = paddingTop + padding;
            this.paddingBottom = paddingBottom + padding;
        }
    }
    _handleMargins() {
        if (this._margins) {
            this._margins.left = Math.max(this.paddingLeft, this._margins.left);
            this._margins.top = Math.max(this.paddingTop, this._margins.top);
            this._margins.right = Math.max(this.paddingRight, this._margins.right);
            this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
        }
    }
    afterFit() {
        (0, _helpersDatasetJs.Q)(this.options.afterFit, [
            this
        ]);
    }
    isHorizontal() {
        const { axis, position } = this.options;
        return position === 'top' || position === 'bottom' || axis === 'x';
    }
    isFullSize() {
        return this.options.fullSize;
    }
    _convertTicksToLabels(ticks) {
        this.beforeTickToLabelConversion();
        this.generateTickLabels(ticks);
        let i, ilen;
        for(i = 0, ilen = ticks.length; i < ilen; i++)if ((0, _helpersDatasetJs.k)(ticks[i].label)) {
            ticks.splice(i, 1);
            ilen--;
            i--;
        }
        this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
        let labelSizes = this._labelSizes;
        if (!labelSizes) {
            const sampleSize = this.options.ticks.sampleSize;
            let ticks = this.ticks;
            if (sampleSize < ticks.length) ticks = sample(ticks, sampleSize);
            this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
        }
        return labelSizes;
    }
    _computeLabelSizes(ticks, length, maxTicksLimit) {
        const { ctx, _longestTextCache: caches } = this;
        const widths = [];
        const heights = [];
        const increment = Math.floor(length / getTicksLimit(length, maxTicksLimit));
        let widestLabelSize = 0;
        let highestLabelSize = 0;
        let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
        for(i = 0; i < length; i += increment){
            label = ticks[i].label;
            tickFont = this._resolveTickFontOptions(i);
            ctx.font = fontString = tickFont.string;
            cache = caches[fontString] = caches[fontString] || {
                data: {},
                gc: []
            };
            lineHeight = tickFont.lineHeight;
            width = height = 0;
            if (!(0, _helpersDatasetJs.k)(label) && !(0, _helpersDatasetJs.b)(label)) {
                width = (0, _helpersDatasetJs.V)(ctx, cache.data, cache.gc, width, label);
                height = lineHeight;
            } else if ((0, _helpersDatasetJs.b)(label)) for(j = 0, jlen = label.length; j < jlen; ++j){
                nestedLabel = label[j];
                if (!(0, _helpersDatasetJs.k)(nestedLabel) && !(0, _helpersDatasetJs.b)(nestedLabel)) {
                    width = (0, _helpersDatasetJs.V)(ctx, cache.data, cache.gc, width, nestedLabel);
                    height += lineHeight;
                }
            }
            widths.push(width);
            heights.push(height);
            widestLabelSize = Math.max(width, widestLabelSize);
            highestLabelSize = Math.max(height, highestLabelSize);
        }
        garbageCollect(caches, length);
        const widest = widths.indexOf(widestLabelSize);
        const highest = heights.indexOf(highestLabelSize);
        const valueAt = (idx)=>({
                width: widths[idx] || 0,
                height: heights[idx] || 0
            });
        return {
            first: valueAt(0),
            last: valueAt(length - 1),
            widest: valueAt(widest),
            highest: valueAt(highest),
            widths,
            heights
        };
    }
    getLabelForValue(value) {
        return value;
    }
    getPixelForValue(value, index) {
        return NaN;
    }
    getValueForPixel(pixel) {}
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getPixelForDecimal(decimal) {
        if (this._reversePixels) decimal = 1 - decimal;
        const pixel = this._startPixel + decimal * this._length;
        return (0, _helpersDatasetJs.W)(this._alignToPixels ? (0, _helpersDatasetJs.X)(this.chart, pixel, 0) : pixel);
    }
    getDecimalForPixel(pixel) {
        const decimal = (pixel - this._startPixel) / this._length;
        return this._reversePixels ? 1 - decimal : decimal;
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
        const { min, max } = this;
        return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    getContext(index) {
        const ticks = this.ticks || [];
        if (index >= 0 && index < ticks.length) {
            const tick = ticks[index];
            return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
        }
        return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
    }
    _tickSize() {
        const optionTicks = this.options.ticks;
        const rot = (0, _helpersDatasetJs.t)(this.labelRotation);
        const cos = Math.abs(Math.cos(rot));
        const sin = Math.abs(Math.sin(rot));
        const labelSizes = this._getLabelSizes();
        const padding = optionTicks.autoSkipPadding || 0;
        const w = labelSizes ? labelSizes.widest.width + padding : 0;
        const h = labelSizes ? labelSizes.highest.height + padding : 0;
        return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
    }
    _isVisible() {
        const display = this.options.display;
        if (display !== 'auto') return !!display;
        return this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(chartArea) {
        const axis = this.axis;
        const chart = this.chart;
        const options = this.options;
        const { grid, position, border } = options;
        const offset = grid.offset;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const ticksLength = ticks.length + (offset ? 1 : 0);
        const tl = getTickMarkLength(grid);
        const items = [];
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = borderOpts.display ? borderOpts.width : 0;
        const axisHalfWidth = axisWidth / 2;
        const alignBorderValue = function(pixel) {
            return (0, _helpersDatasetJs.X)(chart, pixel, axisWidth);
        };
        let borderValue, i, lineValue, alignedLineValue;
        let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
        if (position === 'top') {
            borderValue = alignBorderValue(this.bottom);
            ty1 = this.bottom - tl;
            ty2 = borderValue - axisHalfWidth;
            y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
            y2 = chartArea.bottom;
        } else if (position === 'bottom') {
            borderValue = alignBorderValue(this.top);
            y1 = chartArea.top;
            y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
            ty1 = borderValue + axisHalfWidth;
            ty2 = this.top + tl;
        } else if (position === 'left') {
            borderValue = alignBorderValue(this.right);
            tx1 = this.right - tl;
            tx2 = borderValue - axisHalfWidth;
            x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
            x2 = chartArea.right;
        } else if (position === 'right') {
            borderValue = alignBorderValue(this.left);
            x1 = chartArea.left;
            x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
            tx1 = borderValue + axisHalfWidth;
            tx2 = this.left + tl;
        } else if (axis === 'x') {
            if (position === 'center') borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
            else if ((0, _helpersDatasetJs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            y1 = chartArea.top;
            y2 = chartArea.bottom;
            ty1 = borderValue + axisHalfWidth;
            ty2 = ty1 + tl;
        } else if (axis === 'y') {
            if (position === 'center') borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
            else if ((0, _helpersDatasetJs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
            }
            tx1 = borderValue - axisHalfWidth;
            tx2 = tx1 - tl;
            x1 = chartArea.left;
            x2 = chartArea.right;
        }
        const limit = (0, _helpersDatasetJs.v)(options.ticks.maxTicksLimit, ticksLength);
        const step = Math.max(1, Math.ceil(ticksLength / limit));
        for(i = 0; i < ticksLength; i += step){
            const context = this.getContext(i);
            const optsAtIndex = grid.setContext(context);
            const optsAtIndexBorder = border.setContext(context);
            const lineWidth = optsAtIndex.lineWidth;
            const lineColor = optsAtIndex.color;
            const borderDash = optsAtIndexBorder.dash || [];
            const borderDashOffset = optsAtIndexBorder.dashOffset;
            const tickWidth = optsAtIndex.tickWidth;
            const tickColor = optsAtIndex.tickColor;
            const tickBorderDash = optsAtIndex.tickBorderDash || [];
            const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
            lineValue = getPixelForGridLine(this, i, offset);
            if (lineValue === undefined) continue;
            alignedLineValue = (0, _helpersDatasetJs.X)(chart, lineValue, lineWidth);
            if (isHorizontal) tx1 = tx2 = x1 = x2 = alignedLineValue;
            else ty1 = ty2 = y1 = y2 = alignedLineValue;
            items.push({
                tx1,
                ty1,
                tx2,
                ty2,
                x1,
                y1,
                x2,
                y2,
                width: lineWidth,
                color: lineColor,
                borderDash,
                borderDashOffset,
                tickWidth,
                tickColor,
                tickBorderDash,
                tickBorderDashOffset
            });
        }
        this._ticksLength = ticksLength;
        this._borderValue = borderValue;
        return items;
    }
    _computeLabelItems(chartArea) {
        const axis = this.axis;
        const options = this.options;
        const { position, ticks: optionTicks } = options;
        const isHorizontal = this.isHorizontal();
        const ticks = this.ticks;
        const { align, crossAlign, padding, mirror } = optionTicks;
        const tl = getTickMarkLength(options.grid);
        const tickAndPadding = tl + padding;
        const hTickAndPadding = mirror ? -padding : tickAndPadding;
        const rotation = -(0, _helpersDatasetJs.t)(this.labelRotation);
        const items = [];
        let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
        let textBaseline = 'middle';
        if (position === 'top') {
            y = this.bottom - hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === 'bottom') {
            y = this.top + hTickAndPadding;
            textAlign = this._getXAxisLabelAlignment();
        } else if (position === 'left') {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (position === 'right') {
            const ret = this._getYAxisLabelAlignment(tl);
            textAlign = ret.textAlign;
            x = ret.x;
        } else if (axis === 'x') {
            if (position === 'center') y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
            else if ((0, _helpersDatasetJs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
            }
            textAlign = this._getXAxisLabelAlignment();
        } else if (axis === 'y') {
            if (position === 'center') x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
            else if ((0, _helpersDatasetJs.i)(position)) {
                const positionAxisID = Object.keys(position)[0];
                const value = position[positionAxisID];
                x = this.chart.scales[positionAxisID].getPixelForValue(value);
            }
            textAlign = this._getYAxisLabelAlignment(tl).textAlign;
        }
        if (axis === 'y') {
            if (align === 'start') textBaseline = 'top';
            else if (align === 'end') textBaseline = 'bottom';
        }
        const labelSizes = this._getLabelSizes();
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            label = tick.label;
            const optsAtIndex = optionTicks.setContext(this.getContext(i));
            pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
            font = this._resolveTickFontOptions(i);
            lineHeight = font.lineHeight;
            lineCount = (0, _helpersDatasetJs.b)(label) ? label.length : 1;
            const halfCount = lineCount / 2;
            const color = optsAtIndex.color;
            const strokeColor = optsAtIndex.textStrokeColor;
            const strokeWidth = optsAtIndex.textStrokeWidth;
            let tickTextAlign = textAlign;
            if (isHorizontal) {
                x = pixel;
                if (textAlign === 'inner') {
                    if (i === ilen - 1) tickTextAlign = !this.options.reverse ? 'right' : 'left';
                    else if (i === 0) tickTextAlign = !this.options.reverse ? 'left' : 'right';
                    else tickTextAlign = 'center';
                }
                if (position === 'top') {
                    if (crossAlign === 'near' || rotation !== 0) textOffset = -lineCount * lineHeight + lineHeight / 2;
                    else if (crossAlign === 'center') textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
                    else textOffset = -labelSizes.highest.height + lineHeight / 2;
                } else {
                    if (crossAlign === 'near' || rotation !== 0) textOffset = lineHeight / 2;
                    else if (crossAlign === 'center') textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
                    else textOffset = labelSizes.highest.height - lineCount * lineHeight;
                }
                if (mirror) textOffset *= -1;
                if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) x += lineHeight / 2 * Math.sin(rotation);
            } else {
                y = pixel;
                textOffset = (1 - lineCount) * lineHeight / 2;
            }
            let backdrop;
            if (optsAtIndex.showLabelBackdrop) {
                const labelPadding = (0, _helpersDatasetJs.E)(optsAtIndex.backdropPadding);
                const height = labelSizes.heights[i];
                const width = labelSizes.widths[i];
                let top = textOffset - labelPadding.top;
                let left = 0 - labelPadding.left;
                switch(textBaseline){
                    case 'middle':
                        top -= height / 2;
                        break;
                    case 'bottom':
                        top -= height;
                        break;
                }
                switch(textAlign){
                    case 'center':
                        left -= width / 2;
                        break;
                    case 'right':
                        left -= width;
                        break;
                    case 'inner':
                        if (i === ilen - 1) left -= width;
                        else if (i > 0) left -= width / 2;
                        break;
                }
                backdrop = {
                    left,
                    top,
                    width: width + labelPadding.width,
                    height: height + labelPadding.height,
                    color: optsAtIndex.backdropColor
                };
            }
            items.push({
                label,
                font,
                textOffset,
                options: {
                    rotation,
                    color,
                    strokeColor,
                    strokeWidth,
                    textAlign: tickTextAlign,
                    textBaseline,
                    translation: [
                        x,
                        y
                    ],
                    backdrop
                }
            });
        }
        return items;
    }
    _getXAxisLabelAlignment() {
        const { position, ticks } = this.options;
        const rotation = -(0, _helpersDatasetJs.t)(this.labelRotation);
        if (rotation) return position === 'top' ? 'left' : 'right';
        let align = 'center';
        if (ticks.align === 'start') align = 'left';
        else if (ticks.align === 'end') align = 'right';
        else if (ticks.align === 'inner') align = 'inner';
        return align;
    }
    _getYAxisLabelAlignment(tl) {
        const { position, ticks: { crossAlign, mirror, padding } } = this.options;
        const labelSizes = this._getLabelSizes();
        const tickAndPadding = tl + padding;
        const widest = labelSizes.widest.width;
        let textAlign;
        let x;
        if (position === 'left') {
            if (mirror) {
                x = this.right + padding;
                if (crossAlign === 'near') textAlign = 'left';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x += widest / 2;
                } else {
                    textAlign = 'right';
                    x += widest;
                }
            } else {
                x = this.right - tickAndPadding;
                if (crossAlign === 'near') textAlign = 'right';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x -= widest / 2;
                } else {
                    textAlign = 'left';
                    x = this.left;
                }
            }
        } else if (position === 'right') {
            if (mirror) {
                x = this.left + padding;
                if (crossAlign === 'near') textAlign = 'right';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x -= widest / 2;
                } else {
                    textAlign = 'left';
                    x -= widest;
                }
            } else {
                x = this.left + tickAndPadding;
                if (crossAlign === 'near') textAlign = 'left';
                else if (crossAlign === 'center') {
                    textAlign = 'center';
                    x += widest / 2;
                } else {
                    textAlign = 'right';
                    x = this.right;
                }
            }
        } else textAlign = 'right';
        return {
            textAlign,
            x
        };
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror) return;
        const chart = this.chart;
        const position = this.options.position;
        if (position === 'left' || position === 'right') return {
            top: 0,
            left: this.left,
            bottom: chart.height,
            right: this.right
        };
        if (position === 'top' || position === 'bottom') return {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: chart.width
        };
    }
    drawBackground() {
        const { ctx, options: { backgroundColor }, left, top, width, height } = this;
        if (backgroundColor) {
            ctx.save();
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(left, top, width, height);
            ctx.restore();
        }
    }
    getLineWidthForValue(value) {
        const grid = this.options.grid;
        if (!this._isVisible() || !grid.display) return 0;
        const ticks = this.ticks;
        const index = ticks.findIndex((t)=>t.value === value);
        if (index >= 0) {
            const opts = grid.setContext(this.getContext(index));
            return opts.lineWidth;
        }
        return 0;
    }
    drawGrid(chartArea) {
        const grid = this.options.grid;
        const ctx = this.ctx;
        const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
        let i, ilen;
        const drawLine = (p1, p2, style)=>{
            if (!style.width || !style.color) return;
            ctx.save();
            ctx.lineWidth = style.width;
            ctx.strokeStyle = style.color;
            ctx.setLineDash(style.borderDash || []);
            ctx.lineDashOffset = style.borderDashOffset;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
        };
        if (grid.display) for(i = 0, ilen = items.length; i < ilen; ++i){
            const item = items[i];
            if (grid.drawOnChartArea) drawLine({
                x: item.x1,
                y: item.y1
            }, {
                x: item.x2,
                y: item.y2
            }, item);
            if (grid.drawTicks) drawLine({
                x: item.tx1,
                y: item.ty1
            }, {
                x: item.tx2,
                y: item.ty2
            }, {
                color: item.tickColor,
                width: item.tickWidth,
                borderDash: item.tickBorderDash,
                borderDashOffset: item.tickBorderDashOffset
            });
        }
    }
    drawBorder() {
        const { chart, ctx, options: { border, grid } } = this;
        const borderOpts = border.setContext(this.getContext());
        const axisWidth = border.display ? borderOpts.width : 0;
        if (!axisWidth) return;
        const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
        const borderValue = this._borderValue;
        let x1, x2, y1, y2;
        if (this.isHorizontal()) {
            x1 = (0, _helpersDatasetJs.X)(chart, this.left, axisWidth) - axisWidth / 2;
            x2 = (0, _helpersDatasetJs.X)(chart, this.right, lastLineWidth) + lastLineWidth / 2;
            y1 = y2 = borderValue;
        } else {
            y1 = (0, _helpersDatasetJs.X)(chart, this.top, axisWidth) - axisWidth / 2;
            y2 = (0, _helpersDatasetJs.X)(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
            x1 = x2 = borderValue;
        }
        ctx.save();
        ctx.lineWidth = borderOpts.width;
        ctx.strokeStyle = borderOpts.color;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    }
    drawLabels(chartArea) {
        const optionTicks = this.options.ticks;
        if (!optionTicks.display) return;
        const ctx = this.ctx;
        const area = this._computeLabelArea();
        if (area) (0, _helpersDatasetJs.Y)(ctx, area);
        const items = this.getLabelItems(chartArea);
        for (const item of items){
            const renderTextOptions = item.options;
            const tickFont = item.font;
            const label = item.label;
            const y = item.textOffset;
            (0, _helpersDatasetJs.Z)(ctx, label, 0, y, tickFont, renderTextOptions);
        }
        if (area) (0, _helpersDatasetJs.$)(ctx);
    }
    drawTitle() {
        const { ctx, options: { position, title, reverse } } = this;
        if (!title.display) return;
        const font = (0, _helpersDatasetJs.a0)(title.font);
        const padding = (0, _helpersDatasetJs.E)(title.padding);
        const align = title.align;
        let offset = font.lineHeight / 2;
        if (position === 'bottom' || position === 'center' || (0, _helpersDatasetJs.i)(position)) {
            offset += padding.bottom;
            if ((0, _helpersDatasetJs.b)(title.text)) offset += font.lineHeight * (title.text.length - 1);
        } else offset += padding.top;
        const { titleX, titleY, maxWidth, rotation } = titleArgs(this, offset, position, align);
        (0, _helpersDatasetJs.Z)(ctx, title.text, 0, 0, font, {
            color: title.color,
            maxWidth,
            rotation,
            textAlign: titleAlign(align, position, reverse),
            textBaseline: 'middle',
            translation: [
                titleX,
                titleY
            ]
        });
    }
    draw(chartArea) {
        if (!this._isVisible()) return;
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawBorder();
        this.drawTitle();
        this.drawLabels(chartArea);
    }
    _layers() {
        const opts = this.options;
        const tz = opts.ticks && opts.ticks.z || 0;
        const gz = (0, _helpersDatasetJs.v)(opts.grid && opts.grid.z, -1);
        const bz = (0, _helpersDatasetJs.v)(opts.border && opts.border.z, 0);
        if (!this._isVisible() || this.draw !== Scale.prototype.draw) return [
            {
                z: tz,
                draw: (chartArea)=>{
                    this.draw(chartArea);
                }
            }
        ];
        return [
            {
                z: gz,
                draw: (chartArea)=>{
                    this.drawBackground();
                    this.drawGrid(chartArea);
                    this.drawTitle();
                }
            },
            {
                z: bz,
                draw: ()=>{
                    this.drawBorder();
                }
            },
            {
                z: tz,
                draw: (chartArea)=>{
                    this.drawLabels(chartArea);
                }
            }
        ];
    }
    getMatchingVisibleMetas(type) {
        const metas = this.chart.getSortedVisibleDatasetMetas();
        const axisID = this.axis + 'AxisID';
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metas.length; i < ilen; ++i){
            const meta = metas[i];
            if (meta[axisID] === this.id && (!type || meta.type === type)) result.push(meta);
        }
        return result;
    }
    _resolveTickFontOptions(index) {
        const opts = this.options.ticks.setContext(this.getContext(index));
        return (0, _helpersDatasetJs.a0)(opts.font);
    }
    _maxDigits() {
        const fontSize = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
}
class TypedRegistry {
    constructor(type, scope, override){
        this.type = type;
        this.scope = scope;
        this.override = override;
        this.items = Object.create(null);
    }
    isForType(type) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
    register(item) {
        const proto = Object.getPrototypeOf(item);
        let parentScope;
        if (isIChartComponent(proto)) parentScope = this.register(proto);
        const items = this.items;
        const id = item.id;
        const scope = this.scope + '.' + id;
        if (!id) throw new Error('class does not have id: ' + item);
        if (id in items) return scope;
        items[id] = item;
        registerDefaults(item, scope, parentScope);
        if (this.override) (0, _helpersDatasetJs.d).override(item.id, item.overrides);
        return scope;
    }
    get(id) {
        return this.items[id];
    }
    unregister(item) {
        const items = this.items;
        const id = item.id;
        const scope = this.scope;
        if (id in items) delete items[id];
        if (scope && id in (0, _helpersDatasetJs.d)[scope]) {
            delete (0, _helpersDatasetJs.d)[scope][id];
            if (this.override) delete (0, _helpersDatasetJs.a3)[id];
        }
    }
}
function registerDefaults(item, scope, parentScope) {
    const itemDefaults = (0, _helpersDatasetJs.a4)(Object.create(null), [
        parentScope ? (0, _helpersDatasetJs.d).get(parentScope) : {},
        (0, _helpersDatasetJs.d).get(scope),
        item.defaults
    ]);
    (0, _helpersDatasetJs.d).set(scope, itemDefaults);
    if (item.defaultRoutes) routeDefaults(scope, item.defaultRoutes);
    if (item.descriptors) (0, _helpersDatasetJs.d).describe(scope, item.descriptors);
}
function routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property)=>{
        const propertyParts = property.split('.');
        const sourceName = propertyParts.pop();
        const sourceScope = [
            scope
        ].concat(propertyParts).join('.');
        const parts = routes[property].split('.');
        const targetName = parts.pop();
        const targetScope = parts.join('.');
        (0, _helpersDatasetJs.d).route(sourceScope, sourceName, targetScope, targetName);
    });
}
function isIChartComponent(proto) {
    return 'id' in proto && 'defaults' in proto;
}
class Registry {
    constructor(){
        this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
        this.elements = new TypedRegistry(Element, 'elements');
        this.plugins = new TypedRegistry(Object, 'plugins');
        this.scales = new TypedRegistry(Scale, 'scales');
        this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements
        ];
    }
    add(...args) {
        this._each('register', args);
    }
    remove(...args) {
        this._each('unregister', args);
    }
    addControllers(...args) {
        this._each('register', args, this.controllers);
    }
    addElements(...args) {
        this._each('register', args, this.elements);
    }
    addPlugins(...args) {
        this._each('register', args, this.plugins);
    }
    addScales(...args) {
        this._each('register', args, this.scales);
    }
    getController(id) {
        return this._get(id, this.controllers, 'controller');
    }
    getElement(id) {
        return this._get(id, this.elements, 'element');
    }
    getPlugin(id) {
        return this._get(id, this.plugins, 'plugin');
    }
    getScale(id) {
        return this._get(id, this.scales, 'scale');
    }
    removeControllers(...args) {
        this._each('unregister', args, this.controllers);
    }
    removeElements(...args) {
        this._each('unregister', args, this.elements);
    }
    removePlugins(...args) {
        this._each('unregister', args, this.plugins);
    }
    removeScales(...args) {
        this._each('unregister', args, this.scales);
    }
    _each(method, args, typedRegistry) {
        [
            ...args
        ].forEach((arg)=>{
            const reg = typedRegistry || this._getRegistryForType(arg);
            if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) this._exec(method, reg, arg);
            else (0, _helpersDatasetJs.F)(arg, (item)=>{
                const itemReg = typedRegistry || this._getRegistryForType(item);
                this._exec(method, itemReg, item);
            });
        });
    }
    _exec(method, registry, component) {
        const camelMethod = (0, _helpersDatasetJs.a5)(method);
        (0, _helpersDatasetJs.Q)(component['before' + camelMethod], [], component);
        registry[method](component);
        (0, _helpersDatasetJs.Q)(component['after' + camelMethod], [], component);
    }
    _getRegistryForType(type) {
        for(let i = 0; i < this._typedRegistries.length; i++){
            const reg = this._typedRegistries[i];
            if (reg.isForType(type)) return reg;
        }
        return this.plugins;
    }
    _get(id, typedRegistry, type) {
        const item = typedRegistry.get(id);
        if (item === undefined) throw new Error('"' + id + '" is not a registered ' + type + '.');
        return item;
    }
}
var registry = /* #__PURE__ */ new Registry();
class PluginService {
    constructor(){
        this._init = [];
    }
    notify(chart, hook, args, filter) {
        if (hook === 'beforeInit') {
            this._init = this._createDescriptors(chart, true);
            this._notify(this._init, chart, 'install');
        }
        const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
        const result = this._notify(descriptors, chart, hook, args);
        if (hook === 'afterDestroy') {
            this._notify(descriptors, chart, 'stop');
            this._notify(this._init, chart, 'uninstall');
        }
        return result;
    }
    _notify(descriptors, chart, hook, args) {
        args = args || {};
        for (const descriptor of descriptors){
            const plugin = descriptor.plugin;
            const method = plugin[hook];
            const params = [
                chart,
                args,
                descriptor.options
            ];
            if ((0, _helpersDatasetJs.Q)(method, params, plugin) === false && args.cancelable) return false;
        }
        return true;
    }
    invalidate() {
        if (!(0, _helpersDatasetJs.k)(this._cache)) {
            this._oldCache = this._cache;
            this._cache = undefined;
        }
    }
    _descriptors(chart) {
        if (this._cache) return this._cache;
        const descriptors = this._cache = this._createDescriptors(chart);
        this._notifyStateChanges(chart);
        return descriptors;
    }
    _createDescriptors(chart, all) {
        const config = chart && chart.config;
        const options = (0, _helpersDatasetJs.v)(config.options && config.options.plugins, {});
        const plugins = allPlugins(config);
        return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
    }
    _notifyStateChanges(chart) {
        const previousDescriptors = this._oldCache || [];
        const descriptors = this._cache;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.plugin.id === y.plugin.id));
        this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
        this._notify(diff(descriptors, previousDescriptors), chart, 'start');
    }
}
function allPlugins(config) {
    const localIds = {};
    const plugins = [];
    const keys = Object.keys(registry.plugins.items);
    for(let i = 0; i < keys.length; i++)plugins.push(registry.getPlugin(keys[i]));
    const local = config.plugins || [];
    for(let i = 0; i < local.length; i++){
        const plugin = local[i];
        if (plugins.indexOf(plugin) === -1) {
            plugins.push(plugin);
            localIds[plugin.id] = true;
        }
    }
    return {
        plugins,
        localIds
    };
}
function getOpts(options, all) {
    if (!all && options === false) return null;
    if (options === true) return {};
    return options;
}
function createDescriptors(chart, { plugins, localIds }, options, all) {
    const result = [];
    const context = chart.getContext();
    for (const plugin of plugins){
        const id = plugin.id;
        const opts = getOpts(options[id], all);
        if (opts === null) continue;
        result.push({
            plugin,
            options: pluginOpts(chart.config, {
                plugin,
                local: localIds[id]
            }, opts, context)
        });
    }
    return result;
}
function pluginOpts(config, { plugin, local }, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    if (local && plugin.defaults) scopes.push(plugin.defaults);
    return config.createResolver(scopes, context, [
        ''
    ], {
        scriptable: false,
        indexable: false,
        allKeys: true
    });
}
function getIndexAxis(type, options) {
    const datasetDefaults = (0, _helpersDatasetJs.d).datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === '_index_') axis = indexAxis;
    else if (id === '_value_') axis = indexAxis === 'x' ? 'y' : 'x';
    return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? '_index_' : '_value_';
}
function idMatchesAxis(id) {
    if (id === 'x' || id === 'y' || id === 'r') return id;
}
function axisFromPosition(position) {
    if (position === 'top' || position === 'bottom') return 'x';
    if (position === 'left' || position === 'right') return 'y';
}
function determineAxis(id, ...scaleOptions) {
    if (idMatchesAxis(id)) return id;
    for (const opts of scaleOptions){
        const axis = opts.axis || axisFromPosition(opts.position) || id.length > 1 && idMatchesAxis(id[0].toLowerCase());
        if (axis) return axis;
    }
    throw new Error(`Cannot determine type of '${id}' axis. Please provide 'axis' or 'position' option.`);
}
function getAxisFromDataset(id, axis, dataset) {
    if (dataset[axis + 'AxisID'] === id) return {
        axis
    };
}
function retrieveAxisFromDatasets(id, config) {
    if (config.data && config.data.datasets) {
        const boundDs = config.data.datasets.filter((d)=>d.xAxisID === id || d.yAxisID === id);
        if (boundDs.length) return getAxisFromDataset(id, 'x', boundDs[0]) || getAxisFromDataset(id, 'y', boundDs[0]);
    }
    return {};
}
function mergeScaleConfig(config, options) {
    const chartDefaults = (0, _helpersDatasetJs.a3)[config.type] || {
        scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = getIndexAxis(config.type, options);
    const scales = Object.create(null);
    Object.keys(configScales).forEach((id)=>{
        const scaleConf = configScales[id];
        if (!(0, _helpersDatasetJs.i)(scaleConf)) return console.error(`Invalid scale configuration for scale: ${id}`);
        if (scaleConf._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
        const axis = determineAxis(id, scaleConf, retrieveAxisFromDatasets(id, config), (0, _helpersDatasetJs.d).scales[scaleConf.type]);
        const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
        const defaultScaleOptions = chartDefaults.scales || {};
        scales[id] = (0, _helpersDatasetJs.ab)(Object.create(null), [
            {
                axis
            },
            scaleConf,
            defaultScaleOptions[axis],
            defaultScaleOptions[defaultId]
        ]);
    });
    config.data.datasets.forEach((dataset)=>{
        const type = dataset.type || config.type;
        const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
        const datasetDefaults = (0, _helpersDatasetJs.a3)[type] || {};
        const defaultScaleOptions = datasetDefaults.scales || {};
        Object.keys(defaultScaleOptions).forEach((defaultID)=>{
            const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
            const id = dataset[axis + 'AxisID'] || axis;
            scales[id] = scales[id] || Object.create(null);
            (0, _helpersDatasetJs.ab)(scales[id], [
                {
                    axis
                },
                configScales[id],
                defaultScaleOptions[defaultID]
            ]);
        });
    });
    Object.keys(scales).forEach((key)=>{
        const scale = scales[key];
        (0, _helpersDatasetJs.ab)(scale, [
            (0, _helpersDatasetJs.d).scales[scale.type],
            (0, _helpersDatasetJs.d).scale
        ]);
    });
    return scales;
}
function initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = (0, _helpersDatasetJs.v)(options.plugins, {});
    options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
}
function initConfig(config) {
    config = config || {};
    config.data = initData(config.data);
    initOptions(config);
    return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
    let keys = keyCache.get(cacheKey);
    if (!keys) {
        keys = generate();
        keyCache.set(cacheKey, keys);
        keysCached.add(keys);
    }
    return keys;
}
const addIfFound = (set, obj, key)=>{
    const opts = (0, _helpersDatasetJs.f)(obj, key);
    if (opts !== undefined) set.add(opts);
};
class Config {
    constructor(config){
        this._config = initConfig(config);
        this._scopeCache = new Map();
        this._resolverCache = new Map();
    }
    get platform() {
        return this._config.platform;
    }
    get type() {
        return this._config.type;
    }
    set type(type) {
        this._config.type = type;
    }
    get data() {
        return this._config.data;
    }
    set data(data) {
        this._config.data = initData(data);
    }
    get options() {
        return this._config.options;
    }
    set options(options) {
        this._config.options = options;
    }
    get plugins() {
        return this._config.plugins;
    }
    update() {
        const config = this._config;
        this.clearCache();
        initOptions(config);
    }
    clearCache() {
        this._scopeCache.clear();
        this._resolverCache.clear();
    }
    datasetScopeKeys(datasetType) {
        return cachedKeys(datasetType, ()=>[
                [
                    `datasets.${datasetType}`,
                    ''
                ]
            ]);
    }
    datasetAnimationScopeKeys(datasetType, transition) {
        return cachedKeys(`${datasetType}.transition.${transition}`, ()=>[
                [
                    `datasets.${datasetType}.transitions.${transition}`,
                    `transitions.${transition}`
                ],
                [
                    `datasets.${datasetType}`,
                    ''
                ]
            ]);
    }
    datasetElementScopeKeys(datasetType, elementType) {
        return cachedKeys(`${datasetType}-${elementType}`, ()=>[
                [
                    `datasets.${datasetType}.elements.${elementType}`,
                    `datasets.${datasetType}`,
                    `elements.${elementType}`,
                    ''
                ]
            ]);
    }
    pluginScopeKeys(plugin) {
        const id = plugin.id;
        const type = this.type;
        return cachedKeys(`${type}-plugin-${id}`, ()=>[
                [
                    `plugins.${id}`,
                    ...plugin.additionalOptionScopes || []
                ]
            ]);
    }
    _cachedScopes(mainScope, resetCache) {
        const _scopeCache = this._scopeCache;
        let cache = _scopeCache.get(mainScope);
        if (!cache || resetCache) {
            cache = new Map();
            _scopeCache.set(mainScope, cache);
        }
        return cache;
    }
    getOptionScopes(mainScope, keyLists, resetCache) {
        const { options, type } = this;
        const cache = this._cachedScopes(mainScope, resetCache);
        const cached = cache.get(keyLists);
        if (cached) return cached;
        const scopes = new Set();
        keyLists.forEach((keys)=>{
            if (mainScope) {
                scopes.add(mainScope);
                keys.forEach((key)=>addIfFound(scopes, mainScope, key));
            }
            keys.forEach((key)=>addIfFound(scopes, options, key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersDatasetJs.a3)[type] || {}, key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersDatasetJs.d), key));
            keys.forEach((key)=>addIfFound(scopes, (0, _helpersDatasetJs.a6), key));
        });
        const array = Array.from(scopes);
        if (array.length === 0) array.push(Object.create(null));
        if (keysCached.has(keyLists)) cache.set(keyLists, array);
        return array;
    }
    chartOptionScopes() {
        const { options, type } = this;
        return [
            options,
            (0, _helpersDatasetJs.a3)[type] || {},
            (0, _helpersDatasetJs.d).datasets[type] || {},
            {
                type
            },
            (0, _helpersDatasetJs.d),
            (0, _helpersDatasetJs.a6)
        ];
    }
    resolveNamedOptions(scopes, names, context, prefixes = [
        ''
    ]) {
        const result = {
            $shared: true
        };
        const { resolver, subPrefixes } = getResolver(this._resolverCache, scopes, prefixes);
        let options = resolver;
        if (needContext(resolver, names)) {
            result.$shared = false;
            context = (0, _helpersDatasetJs.a7)(context) ? context() : context;
            const subResolver = this.createResolver(scopes, context, subPrefixes);
            options = (0, _helpersDatasetJs.a8)(resolver, context, subResolver);
        }
        for (const prop of names)result[prop] = options[prop];
        return result;
    }
    createResolver(scopes, context, prefixes = [
        ''
    ], descriptorDefaults) {
        const { resolver } = getResolver(this._resolverCache, scopes, prefixes);
        return (0, _helpersDatasetJs.i)(context) ? (0, _helpersDatasetJs.a8)(resolver, context, undefined, descriptorDefaults) : resolver;
    }
}
function getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
        cache = new Map();
        resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
        const resolver = (0, _helpersDatasetJs.a9)(scopes, prefixes);
        cached = {
            resolver,
            subPrefixes: prefixes.filter((p)=>!p.toLowerCase().includes('hover'))
        };
        cache.set(cacheKey, cached);
    }
    return cached;
}
const hasFunction = (value)=>(0, _helpersDatasetJs.i)(value) && Object.getOwnPropertyNames(value).some((key)=>(0, _helpersDatasetJs.a7)(value[key]));
function needContext(proxy, names) {
    const { isScriptable, isIndexable } = (0, _helpersDatasetJs.aa)(proxy);
    for (const prop of names){
        const scriptable = isScriptable(prop);
        const indexable = isIndexable(prop);
        const value = (indexable || scriptable) && proxy[prop];
        if (scriptable && ((0, _helpersDatasetJs.a7)(value) || hasFunction(value)) || indexable && (0, _helpersDatasetJs.b)(value)) return true;
    }
    return false;
}
var version = "4.4.9";
const KNOWN_POSITIONS = [
    'top',
    'bottom',
    'left',
    'right',
    'chartArea'
];
function positionIsHorizontal(position, axis) {
    return position === 'top' || position === 'bottom' || KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x';
}
function compare2Level(l1, l2) {
    return function(a, b) {
        return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
}
function onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    chart.notifyPlugins('afterRender');
    (0, _helpersDatasetJs.Q)(animationOptions && animationOptions.onComplete, [
        context
    ], chart);
}
function onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    (0, _helpersDatasetJs.Q)(animationOptions && animationOptions.onProgress, [
        context
    ], chart);
}
function getCanvas(item) {
    if ((0, _helpersDatasetJs.M)() && typeof item === 'string') item = document.getElementById(item);
    else if (item && item.length) item = item[0];
    if (item && item.canvas) item = item.canvas;
    return item;
}
const instances = {};
const getChart = (key)=>{
    const canvas = getCanvas(key);
    return Object.values(instances).filter((c)=>c.canvas === canvas).pop();
};
function moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys){
        const intKey = +key;
        if (intKey >= start) {
            const value = obj[key];
            delete obj[key];
            if (move > 0 || intKey > start) obj[intKey + move] = value;
        }
    }
}
function determineLastEvent(e, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e.type === 'mouseout') return null;
    if (isClick) return lastEvent;
    return e;
}
class Chart {
    static defaults = (0, _helpersDatasetJs.d);
    static instances = instances;
    static overrides = (0, _helpersDatasetJs.a3);
    static registry = registry;
    static version = version;
    static getChart = getChart;
    static register(...items) {
        registry.add(...items);
        invalidatePlugins();
    }
    static unregister(...items) {
        registry.remove(...items);
        invalidatePlugins();
    }
    constructor(item, userConfig){
        const config = this.config = new Config(userConfig);
        const initialCanvas = getCanvas(item);
        const existingChart = getChart(initialCanvas);
        if (existingChart) throw new Error('Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' + ' must be destroyed before the canvas with ID \'' + existingChart.canvas.id + '\' can be reused.');
        const options = config.createResolver(config.chartOptionScopes(), this.getContext());
        this.platform = new (config.platform || _detectPlatform(initialCanvas))();
        this.platform.updateConfig(config);
        const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
        const canvas = context && context.canvas;
        const height = canvas && canvas.height;
        const width = canvas && canvas.width;
        this.id = (0, _helpersDatasetJs.ac)();
        this.ctx = context;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
        this._options = options;
        this._aspectRatio = this.aspectRatio;
        this._layers = [];
        this._metasets = [];
        this._stacks = undefined;
        this.boxes = [];
        this.currentDevicePixelRatio = undefined;
        this.chartArea = undefined;
        this._active = [];
        this._lastEvent = undefined;
        this._listeners = {};
        this._responsiveListeners = undefined;
        this._sortedMetasets = [];
        this.scales = {};
        this._plugins = new PluginService();
        this.$proxies = {};
        this._hiddenIndices = {};
        this.attached = false;
        this._animationsDisabled = undefined;
        this.$context = undefined;
        this._doResize = (0, _helpersDatasetJs.ad)((mode)=>this.update(mode), options.resizeDelay || 0);
        this._dataChanges = [];
        instances[this.id] = this;
        if (!context || !canvas) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return;
        }
        animator.listen(this, 'complete', onAnimationsComplete);
        animator.listen(this, 'progress', onAnimationProgress);
        this._initialize();
        if (this.attached) this.update();
    }
    get aspectRatio() {
        const { options: { aspectRatio, maintainAspectRatio }, width, height, _aspectRatio } = this;
        if (!(0, _helpersDatasetJs.k)(aspectRatio)) return aspectRatio;
        if (maintainAspectRatio && _aspectRatio) return _aspectRatio;
        return height ? width / height : null;
    }
    get data() {
        return this.config.data;
    }
    set data(data) {
        this.config.data = data;
    }
    get options() {
        return this._options;
    }
    set options(options) {
        this.config.options = options;
    }
    get registry() {
        return registry;
    }
    _initialize() {
        this.notifyPlugins('beforeInit');
        if (this.options.responsive) this.resize();
        else (0, _helpersDatasetJs.ae)(this, this.options.devicePixelRatio);
        this.bindEvents();
        this.notifyPlugins('afterInit');
        return this;
    }
    clear() {
        (0, _helpersDatasetJs.af)(this.canvas, this.ctx);
        return this;
    }
    stop() {
        animator.stop(this);
        return this;
    }
    resize(width, height) {
        if (!animator.running(this)) this._resize(width, height);
        else this._resizeBeforeDraw = {
            width,
            height
        };
    }
    _resize(width, height) {
        const options = this.options;
        const canvas = this.canvas;
        const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
        const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
        const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
        const mode = this.width ? 'resize' : 'attach';
        this.width = newSize.width;
        this.height = newSize.height;
        this._aspectRatio = this.aspectRatio;
        if (!(0, _helpersDatasetJs.ae)(this, newRatio, true)) return;
        this.notifyPlugins('resize', {
            size: newSize
        });
        (0, _helpersDatasetJs.Q)(options.onResize, [
            this,
            newSize
        ], this);
        if (this.attached) {
            if (this._doResize(mode)) this.render();
        }
    }
    ensureScalesHaveIDs() {
        const options = this.options;
        const scalesOptions = options.scales || {};
        (0, _helpersDatasetJs.F)(scalesOptions, (axisOptions, axisID)=>{
            axisOptions.id = axisID;
        });
    }
    buildOrUpdateScales() {
        const options = this.options;
        const scaleOpts = options.scales;
        const scales = this.scales;
        const updated = Object.keys(scales).reduce((obj, id)=>{
            obj[id] = false;
            return obj;
        }, {});
        let items = [];
        if (scaleOpts) items = items.concat(Object.keys(scaleOpts).map((id)=>{
            const scaleOptions = scaleOpts[id];
            const axis = determineAxis(id, scaleOptions);
            const isRadial = axis === 'r';
            const isHorizontal = axis === 'x';
            return {
                options: scaleOptions,
                dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
                dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
            };
        }));
        (0, _helpersDatasetJs.F)(items, (item)=>{
            const scaleOptions = item.options;
            const id = scaleOptions.id;
            const axis = determineAxis(id, scaleOptions);
            const scaleType = (0, _helpersDatasetJs.v)(scaleOptions.type, item.dtype);
            if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) scaleOptions.position = item.dposition;
            updated[id] = true;
            let scale = null;
            if (id in scales && scales[id].type === scaleType) scale = scales[id];
            else {
                const scaleClass = registry.getScale(scaleType);
                scale = new scaleClass({
                    id,
                    type: scaleType,
                    ctx: this.ctx,
                    chart: this
                });
                scales[scale.id] = scale;
            }
            scale.init(scaleOptions, options);
        });
        (0, _helpersDatasetJs.F)(updated, (hasUpdated, id)=>{
            if (!hasUpdated) delete scales[id];
        });
        (0, _helpersDatasetJs.F)(scales, (scale)=>{
            layouts.configure(this, scale, scale.options);
            layouts.addBox(this, scale);
        });
    }
    _updateMetasets() {
        const metasets = this._metasets;
        const numData = this.data.datasets.length;
        const numMeta = metasets.length;
        metasets.sort((a, b)=>a.index - b.index);
        if (numMeta > numData) {
            for(let i = numData; i < numMeta; ++i)this._destroyDatasetMeta(i);
            metasets.splice(numData, numMeta - numData);
        }
        this._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
    }
    _removeUnreferencedMetasets() {
        const { _metasets: metasets, data: { datasets } } = this;
        if (metasets.length > datasets.length) delete this._stacks;
        metasets.forEach((meta, index)=>{
            if (datasets.filter((x)=>x === meta._dataset).length === 0) this._destroyDatasetMeta(index);
        });
    }
    buildOrUpdateControllers() {
        const newControllers = [];
        const datasets = this.data.datasets;
        let i, ilen;
        this._removeUnreferencedMetasets();
        for(i = 0, ilen = datasets.length; i < ilen; i++){
            const dataset = datasets[i];
            let meta = this.getDatasetMeta(i);
            const type = dataset.type || this.config.type;
            if (meta.type && meta.type !== type) {
                this._destroyDatasetMeta(i);
                meta = this.getDatasetMeta(i);
            }
            meta.type = type;
            meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
            meta.order = dataset.order || 0;
            meta.index = i;
            meta.label = '' + dataset.label;
            meta.visible = this.isDatasetVisible(i);
            if (meta.controller) {
                meta.controller.updateIndex(i);
                meta.controller.linkScales();
            } else {
                const ControllerClass = registry.getController(type);
                const { datasetElementType, dataElementType } = (0, _helpersDatasetJs.d).datasets[type];
                Object.assign(ControllerClass, {
                    dataElementType: registry.getElement(dataElementType),
                    datasetElementType: datasetElementType && registry.getElement(datasetElementType)
                });
                meta.controller = new ControllerClass(this, i);
                newControllers.push(meta.controller);
            }
        }
        this._updateMetasets();
        return newControllers;
    }
    _resetElements() {
        (0, _helpersDatasetJs.F)(this.data.datasets, (dataset, datasetIndex)=>{
            this.getDatasetMeta(datasetIndex).controller.reset();
        }, this);
    }
    reset() {
        this._resetElements();
        this.notifyPlugins('reset');
    }
    update(mode) {
        const config = this.config;
        config.update();
        const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
        const animsDisabled = this._animationsDisabled = !options.animation;
        this._updateScales();
        this._checkEventBindings();
        this._updateHiddenIndices();
        this._plugins.invalidate();
        if (this.notifyPlugins('beforeUpdate', {
            mode,
            cancelable: true
        }) === false) return;
        const newControllers = this.buildOrUpdateControllers();
        this.notifyPlugins('beforeElementsUpdate');
        let minPadding = 0;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; i++){
            const { controller } = this.getDatasetMeta(i);
            const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
            controller.buildOrUpdateElements(reset);
            minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
        }
        minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
        this._updateLayout(minPadding);
        if (!animsDisabled) (0, _helpersDatasetJs.F)(newControllers, (controller)=>{
            controller.reset();
        });
        this._updateDatasets(mode);
        this.notifyPlugins('afterUpdate', {
            mode
        });
        this._layers.sort(compare2Level('z', '_idx'));
        const { _active, _lastEvent } = this;
        if (_lastEvent) this._eventHandler(_lastEvent, true);
        else if (_active.length) this._updateHoverStyles(_active, _active, true);
        this.render();
    }
    _updateScales() {
        (0, _helpersDatasetJs.F)(this.scales, (scale)=>{
            layouts.removeBox(this, scale);
        });
        this.ensureScalesHaveIDs();
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
        const options = this.options;
        const existingEvents = new Set(Object.keys(this._listeners));
        const newEvents = new Set(options.events);
        if (!(0, _helpersDatasetJs.ag)(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
            this.unbindEvents();
            this.bindEvents();
        }
    }
    _updateHiddenIndices() {
        const { _hiddenIndices } = this;
        const changes = this._getUniformDataChanges() || [];
        for (const { method, start, count } of changes){
            const move = method === '_removeElements' ? -count : count;
            moveNumericKeys(_hiddenIndices, start, move);
        }
    }
    _getUniformDataChanges() {
        const _dataChanges = this._dataChanges;
        if (!_dataChanges || !_dataChanges.length) return;
        this._dataChanges = [];
        const datasetCount = this.data.datasets.length;
        const makeSet = (idx)=>new Set(_dataChanges.filter((c)=>c[0] === idx).map((c, i)=>i + ',' + c.splice(1).join(',')));
        const changeSet = makeSet(0);
        for(let i = 1; i < datasetCount; i++){
            if (!(0, _helpersDatasetJs.ag)(changeSet, makeSet(i))) return;
        }
        return Array.from(changeSet).map((c)=>c.split(',')).map((a)=>({
                method: a[1],
                start: +a[2],
                count: +a[3]
            }));
    }
    _updateLayout(minPadding) {
        if (this.notifyPlugins('beforeLayout', {
            cancelable: true
        }) === false) return;
        layouts.update(this, this.width, this.height, minPadding);
        const area = this.chartArea;
        const noArea = area.width <= 0 || area.height <= 0;
        this._layers = [];
        (0, _helpersDatasetJs.F)(this.boxes, (box)=>{
            if (noArea && box.position === 'chartArea') return;
            if (box.configure) box.configure();
            this._layers.push(...box._layers());
        }, this);
        this._layers.forEach((item, index)=>{
            item._idx = index;
        });
        this.notifyPlugins('afterLayout');
    }
    _updateDatasets(mode) {
        if (this.notifyPlugins('beforeDatasetsUpdate', {
            mode,
            cancelable: true
        }) === false) return;
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this.getDatasetMeta(i).controller.configure();
        for(let i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this._updateDataset(i, (0, _helpersDatasetJs.a7)(mode) ? mode({
            datasetIndex: i
        }) : mode);
        this.notifyPlugins('afterDatasetsUpdate', {
            mode
        });
    }
    _updateDataset(index, mode) {
        const meta = this.getDatasetMeta(index);
        const args = {
            meta,
            index,
            mode,
            cancelable: true
        };
        if (this.notifyPlugins('beforeDatasetUpdate', args) === false) return;
        meta.controller._update(mode);
        args.cancelable = false;
        this.notifyPlugins('afterDatasetUpdate', args);
    }
    render() {
        if (this.notifyPlugins('beforeRender', {
            cancelable: true
        }) === false) return;
        if (animator.has(this)) {
            if (this.attached && !animator.running(this)) animator.start(this);
        } else {
            this.draw();
            onAnimationsComplete({
                chart: this
            });
        }
    }
    draw() {
        let i;
        if (this._resizeBeforeDraw) {
            const { width, height } = this._resizeBeforeDraw;
            this._resizeBeforeDraw = null;
            this._resize(width, height);
        }
        this.clear();
        if (this.width <= 0 || this.height <= 0) return;
        if (this.notifyPlugins('beforeDraw', {
            cancelable: true
        }) === false) return;
        const layers = this._layers;
        for(i = 0; i < layers.length && layers[i].z <= 0; ++i)layers[i].draw(this.chartArea);
        this._drawDatasets();
        for(; i < layers.length; ++i)layers[i].draw(this.chartArea);
        this.notifyPlugins('afterDraw');
    }
    _getSortedDatasetMetas(filterVisible) {
        const metasets = this._sortedMetasets;
        const result = [];
        let i, ilen;
        for(i = 0, ilen = metasets.length; i < ilen; ++i){
            const meta = metasets[i];
            if (!filterVisible || meta.visible) result.push(meta);
        }
        return result;
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
        if (this.notifyPlugins('beforeDatasetsDraw', {
            cancelable: true
        }) === false) return;
        const metasets = this.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i)this._drawDataset(metasets[i]);
        this.notifyPlugins('afterDatasetsDraw');
    }
    _drawDataset(meta) {
        const ctx = this.ctx;
        const args = {
            meta,
            index: meta.index,
            cancelable: true
        };
        const clip = (0, _helpersDatasetJs.ah)(this, meta);
        if (this.notifyPlugins('beforeDatasetDraw', args) === false) return;
        if (clip) (0, _helpersDatasetJs.Y)(ctx, clip);
        meta.controller.draw();
        if (clip) (0, _helpersDatasetJs.$)(ctx);
        args.cancelable = false;
        this.notifyPlugins('afterDatasetDraw', args);
    }
    isPointInArea(point) {
        return (0, _helpersDatasetJs.C)(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e, mode, options, useFinalPosition) {
        const method = Interaction.modes[mode];
        if (typeof method === 'function') return method(this, e, options, useFinalPosition);
        return [];
    }
    getDatasetMeta(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        const metasets = this._metasets;
        let meta = metasets.filter((x)=>x && x._dataset === dataset).pop();
        if (!meta) {
            meta = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: dataset && dataset.order || 0,
                index: datasetIndex,
                _dataset: dataset,
                _parsed: [],
                _sorted: false
            };
            metasets.push(meta);
        }
        return meta;
    }
    getContext() {
        return this.$context || (this.$context = (0, _helpersDatasetJs.j)(null, {
            chart: this,
            type: 'chart'
        }));
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
        const dataset = this.data.datasets[datasetIndex];
        if (!dataset) return false;
        const meta = this.getDatasetMeta(datasetIndex);
        return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
        const meta = this.getDatasetMeta(datasetIndex);
        meta.hidden = !visible;
    }
    toggleDataVisibility(index) {
        this._hiddenIndices[index] = !this._hiddenIndices[index];
    }
    getDataVisibility(index) {
        return !this._hiddenIndices[index];
    }
    _updateVisibility(datasetIndex, dataIndex, visible) {
        const mode = visible ? 'show' : 'hide';
        const meta = this.getDatasetMeta(datasetIndex);
        const anims = meta.controller._resolveAnimations(undefined, mode);
        if ((0, _helpersDatasetJs.h)(dataIndex)) {
            meta.data[dataIndex].hidden = !visible;
            this.update();
        } else {
            this.setDatasetVisibility(datasetIndex, visible);
            anims.update(meta, {
                visible
            });
            this.update((ctx)=>ctx.datasetIndex === datasetIndex ? mode : undefined);
        }
    }
    hide(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
        this._updateVisibility(datasetIndex, dataIndex, true);
    }
    _destroyDatasetMeta(datasetIndex) {
        const meta = this._metasets[datasetIndex];
        if (meta && meta.controller) meta.controller._destroy();
        delete this._metasets[datasetIndex];
    }
    _stop() {
        let i, ilen;
        this.stop();
        animator.remove(this);
        for(i = 0, ilen = this.data.datasets.length; i < ilen; ++i)this._destroyDatasetMeta(i);
    }
    destroy() {
        this.notifyPlugins('beforeDestroy');
        const { canvas, ctx } = this;
        this._stop();
        this.config.clearCache();
        if (canvas) {
            this.unbindEvents();
            (0, _helpersDatasetJs.af)(canvas, ctx);
            this.platform.releaseContext(ctx);
            this.canvas = null;
            this.ctx = null;
        }
        delete instances[this.id];
        this.notifyPlugins('afterDestroy');
    }
    toBase64Image(...args) {
        return this.canvas.toDataURL(...args);
    }
    bindEvents() {
        this.bindUserEvents();
        if (this.options.responsive) this.bindResponsiveEvents();
        else this.attached = true;
    }
    bindUserEvents() {
        const listeners = this._listeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const listener = (e, x, y)=>{
            e.offsetX = x;
            e.offsetY = y;
            this._eventHandler(e);
        };
        (0, _helpersDatasetJs.F)(this.options.events, (type)=>_add(type, listener));
    }
    bindResponsiveEvents() {
        if (!this._responsiveListeners) this._responsiveListeners = {};
        const listeners = this._responsiveListeners;
        const platform = this.platform;
        const _add = (type, listener)=>{
            platform.addEventListener(this, type, listener);
            listeners[type] = listener;
        };
        const _remove = (type, listener)=>{
            if (listeners[type]) {
                platform.removeEventListener(this, type, listener);
                delete listeners[type];
            }
        };
        const listener = (width, height)=>{
            if (this.canvas) this.resize(width, height);
        };
        let detached;
        const attached = ()=>{
            _remove('attach', attached);
            this.attached = true;
            this.resize();
            _add('resize', listener);
            _add('detach', detached);
        };
        detached = ()=>{
            this.attached = false;
            _remove('resize', listener);
            this._stop();
            this._resize(0, 0);
            _add('attach', attached);
        };
        if (platform.isAttached(this.canvas)) attached();
        else detached();
    }
    unbindEvents() {
        (0, _helpersDatasetJs.F)(this._listeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._listeners = {};
        (0, _helpersDatasetJs.F)(this._responsiveListeners, (listener, type)=>{
            this.platform.removeEventListener(this, type, listener);
        });
        this._responsiveListeners = undefined;
    }
    updateHoverStyle(items, mode, enabled) {
        const prefix = enabled ? 'set' : 'remove';
        let meta, item, i, ilen;
        if (mode === 'dataset') {
            meta = this.getDatasetMeta(items[0].datasetIndex);
            meta.controller['_' + prefix + 'DatasetHoverStyle']();
        }
        for(i = 0, ilen = items.length; i < ilen; ++i){
            item = items[i];
            const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
            if (controller) controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements) {
        const lastActive = this._active || [];
        const active = activeElements.map(({ datasetIndex, index })=>{
            const meta = this.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error('No dataset found at index ' + datasetIndex);
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !(0, _helpersDatasetJs.ai)(active, lastActive);
        if (changed) {
            this._active = active;
            this._lastEvent = null;
            this._updateHoverStyles(active, lastActive);
        }
    }
    notifyPlugins(hook, args, filter) {
        return this._plugins.notify(this, hook, args, filter);
    }
    isPluginEnabled(pluginId) {
        return this._plugins._cache.filter((p)=>p.plugin.id === pluginId).length === 1;
    }
    _updateHoverStyles(active, lastActive, replay) {
        const hoverOptions = this.options.hover;
        const diff = (a, b)=>a.filter((x)=>!b.some((y)=>x.datasetIndex === y.datasetIndex && x.index === y.index));
        const deactivated = diff(lastActive, active);
        const activated = replay ? active : diff(active, lastActive);
        if (deactivated.length) this.updateHoverStyle(deactivated, hoverOptions.mode, false);
        if (activated.length && hoverOptions.mode) this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
    _eventHandler(e, replay) {
        const args = {
            event: e,
            replay,
            cancelable: true,
            inChartArea: this.isPointInArea(e)
        };
        const eventFilter = (plugin)=>(plugin.options.events || this.options.events).includes(e.native.type);
        if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) return;
        const changed = this._handleEvent(e, replay, args.inChartArea);
        args.cancelable = false;
        this.notifyPlugins('afterEvent', args, eventFilter);
        if (changed || args.changed) this.render();
        return this;
    }
    _handleEvent(e, replay, inChartArea) {
        const { _active: lastActive = [], options } = this;
        const useFinalPosition = replay;
        const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
        const isClick = (0, _helpersDatasetJs.aj)(e);
        const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
        if (inChartArea) {
            this._lastEvent = null;
            (0, _helpersDatasetJs.Q)(options.onHover, [
                e,
                active,
                this
            ], this);
            if (isClick) (0, _helpersDatasetJs.Q)(options.onClick, [
                e,
                active,
                this
            ], this);
        }
        const changed = !(0, _helpersDatasetJs.ai)(active, lastActive);
        if (changed || replay) {
            this._active = active;
            this._updateHoverStyles(active, lastActive, replay);
        }
        this._lastEvent = lastEvent;
        return changed;
    }
    _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
        if (e.type === 'mouseout') return [];
        if (!inChartArea) return lastActive;
        const hoverOptions = this.options.hover;
        return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
}
function invalidatePlugins() {
    return (0, _helpersDatasetJs.F)(Chart.instances, (chart)=>chart._plugins.invalidate());
}
function clipArc(ctx, element, endAngle) {
    const { startAngle, pixelMargin, x, y, outerRadius, innerRadius } = element;
    let angleMargin = pixelMargin / outerRadius;
    // Draw an inner border by clipping the arc and drawing a double-width border
    // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
    ctx.beginPath();
    ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
        angleMargin = pixelMargin / innerRadius;
        ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else ctx.arc(x, y, pixelMargin, endAngle + (0, _helpersDatasetJs.H), startAngle - (0, _helpersDatasetJs.H));
    ctx.closePath();
    ctx.clip();
}
function toRadiusCorners(value) {
    return (0, _helpersDatasetJs.al)(value, [
        'outerStart',
        'outerEnd',
        'innerStart',
        'innerEnd'
    ]);
}
/**
 * Parse border radius from the provided options
 */ function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o = toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    // Outer limits are complicated. We want to compute the available angular distance at
    // a radius of outerRadius - borderRadius because for small angular distances, this term limits.
    // We compute at r = outerRadius - borderRadius because this circle defines the center of the border corners.
    //
    // If the borderRadius is large, that value can become negative.
    // This causes the outer borders to lose their radius entirely, which is rather unexpected. To solve that, if borderRadius > outerRadius
    // we know that the thickness term will dominate and compute the limits at that point
    const computeOuterLimit = (val)=>{
        const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
        return (0, _helpersDatasetJs.S)(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
        outerStart: computeOuterLimit(o.outerStart),
        outerEnd: computeOuterLimit(o.outerEnd),
        innerStart: (0, _helpersDatasetJs.S)(o.innerStart, 0, innerLimit),
        innerEnd: (0, _helpersDatasetJs.S)(o.innerEnd, 0, innerLimit)
    };
}
/**
 * Convert (r, 𝜃) to (x, y)
 */ function rThetaToXY(r, theta, x, y) {
    return {
        x: x + r * Math.cos(theta),
        y: y + r * Math.sin(theta)
    };
}
/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */ function pathArc(ctx, element, offset, spacing, end, circular) {
    const { x, y, startAngle: start, pixelMargin, innerRadius: innerR } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha = end - start;
    if (spacing) {
        // When spacing is present, it is the same for all items
        // So we adjust the start and end angle of the arc such that
        // the distance is the same as it would be without the spacing
        const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
        const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
        const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
        const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
        spacingOffset = (alpha - adjustedAngle) / 2;
    }
    const beta = Math.max(0.001, alpha * outerRadius - offset / (0, _helpersDatasetJs.P)) / outerRadius;
    const angleOffset = (alpha - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart, outerEnd, innerStart, innerEnd } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    if (circular) {
        // The first arc segments from point 1 to point a to point 2
        const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
        ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
        ctx.arc(x, y, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
        // The corner segment from point 2 to point 3
        if (outerEnd > 0) {
            const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + (0, _helpersDatasetJs.H));
        }
        // The line from point 3 to point 4
        const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
        ctx.lineTo(p4.x, p4.y);
        // The corner segment from point 4 to point 5
        if (innerEnd > 0) {
            const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + (0, _helpersDatasetJs.H), innerEndAdjustedAngle + Math.PI);
        }
        // The inner arc from point 5 to point b to point 6
        const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
        ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
        ctx.arc(x, y, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
        // The corner segment from point 6 to point 7
        if (innerStart > 0) {
            const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - (0, _helpersDatasetJs.H));
        }
        // The line from point 7 to point 8
        const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
        ctx.lineTo(p8.x, p8.y);
        // The corner segment from point 8 to point 1
        if (outerStart > 0) {
            const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
            ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - (0, _helpersDatasetJs.H), outerStartAdjustedAngle);
        }
    } else {
        ctx.moveTo(x, y);
        const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
        const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerStartX, outerStartY);
        const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
        const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
        ctx.lineTo(outerEndX, outerEndY);
    }
    ctx.closePath();
}
function drawArc(ctx, element, offset, spacing, circular) {
    const { fullCircles, startAngle, circumference } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i)ctx.fill();
        if (!isNaN(circumference)) endAngle = startAngle + (circumference % (0, _helpersDatasetJs.T) || (0, _helpersDatasetJs.T));
    }
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.fill();
    return endAngle;
}
function drawBorder(ctx, element, offset, spacing, circular) {
    const { fullCircles, startAngle, circumference, options } = element;
    const { borderWidth, borderJoinStyle, borderDash, borderDashOffset } = options;
    const inner = options.borderAlign === 'inner';
    if (!borderWidth) return;
    ctx.setLineDash(borderDash || []);
    ctx.lineDashOffset = borderDashOffset;
    if (inner) {
        ctx.lineWidth = borderWidth * 2;
        ctx.lineJoin = borderJoinStyle || 'round';
    } else {
        ctx.lineWidth = borderWidth;
        ctx.lineJoin = borderJoinStyle || 'bevel';
    }
    let endAngle = element.endAngle;
    if (fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        for(let i = 0; i < fullCircles; ++i)ctx.stroke();
        if (!isNaN(circumference)) endAngle = startAngle + (circumference % (0, _helpersDatasetJs.T) || (0, _helpersDatasetJs.T));
    }
    if (inner) clipArc(ctx, element, endAngle);
    if (!fullCircles) {
        pathArc(ctx, element, offset, spacing, endAngle, circular);
        ctx.stroke();
    }
}
class ArcElement extends Element {
    static id = 'arc';
    static defaults = {
        borderAlign: 'center',
        borderColor: '#fff',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: undefined,
        borderRadius: 0,
        borderWidth: 2,
        offset: 0,
        spacing: 0,
        angle: undefined,
        circular: true
    };
    static defaultRoutes = {
        backgroundColor: 'backgroundColor'
    };
    static descriptors = {
        _scriptable: true,
        _indexable: (name)=>name !== 'borderDash'
    };
    circumference;
    endAngle;
    fullCircles;
    innerRadius;
    outerRadius;
    pixelMargin;
    startAngle;
    constructor(cfg){
        super();
        this.options = undefined;
        this.circumference = undefined;
        this.startAngle = undefined;
        this.endAngle = undefined;
        this.innerRadius = undefined;
        this.outerRadius = undefined;
        this.pixelMargin = 0;
        this.fullCircles = 0;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(chartX, chartY, useFinalPosition) {
        const point = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        const { angle, distance } = (0, _helpersDatasetJs.D)(point, {
            x: chartX,
            y: chartY
        });
        const { startAngle, endAngle, innerRadius, outerRadius, circumference } = this.getProps([
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius',
            'circumference'
        ], useFinalPosition);
        const rAdjust = (this.options.spacing + this.options.borderWidth) / 2;
        const _circumference = (0, _helpersDatasetJs.v)(circumference, endAngle - startAngle);
        const nonZeroBetween = (0, _helpersDatasetJs.p)(angle, startAngle, endAngle) && startAngle !== endAngle;
        const betweenAngles = _circumference >= (0, _helpersDatasetJs.T) || nonZeroBetween;
        const withinRadius = (0, _helpersDatasetJs.ak)(distance, innerRadius + rAdjust, outerRadius + rAdjust);
        return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
        const { x, y, startAngle, endAngle, innerRadius, outerRadius } = this.getProps([
            'x',
            'y',
            'startAngle',
            'endAngle',
            'innerRadius',
            'outerRadius'
        ], useFinalPosition);
        const { offset, spacing } = this.options;
        const halfAngle = (startAngle + endAngle) / 2;
        const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
        return {
            x: x + Math.cos(halfAngle) * halfRadius,
            y: y + Math.sin(halfAngle) * halfRadius
        };
    }
    tooltipPosition(useFinalPosition) {
        return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
        const { options, circumference } = this;
        const offset = (options.offset || 0) / 4;
        const spacing = (options.spacing || 0) / 2;
        const circular = options.circular;
        this.pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
        this.fullCircles = circumference > (0, _helpersDatasetJs.T) ? Math.floor(circumference / (0, _helpersDatasetJs.T)) : 0;
        if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) return;
        ctx.save();
        const halfAngle = (this.startAngle + this.endAngle) / 2;
        ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
        const fix = 1 - Math.sin(Math.min((0, _helpersDatasetJs.P), circumference || 0));
        const radiusOffset = offset * fix;
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        drawArc(ctx, this, radiusOffset, spacing, circular);
        drawBorder(ctx, this, radiusOffset, spacing, circular);
        ctx.restore();
    }
}
function setStyle(ctx, options, style = options) {
    ctx.lineCap = (0, _helpersDatasetJs.v)(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash((0, _helpersDatasetJs.v)(style.borderDash, options.borderDash));
    ctx.lineDashOffset = (0, _helpersDatasetJs.v)(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = (0, _helpersDatasetJs.v)(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = (0, _helpersDatasetJs.v)(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = (0, _helpersDatasetJs.v)(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
    if (options.stepped) return 0, _helpersDatasetJs.as;
    if (options.tension || options.cubicInterpolationMode === 'monotone') return 0, _helpersDatasetJs.at;
    return lineTo;
}
function pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0, end: paramsEnd = count - 1 } = params;
    const { start: segmentStart, end: segmentEnd } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
        count,
        start,
        loop: segment.loop,
        ilen: end < start && !outside ? count + end - start : end - start
    };
}
function pathSegment(ctx, line, segment, params) {
    const { points, options } = line;
    const { count, start, loop, ilen } = pathVars(points, segment, params);
    const lineMethod = getLineMethod(options);
    let { move = true, reverse } = params || {};
    let i, point, prev;
    for(i = 0; i <= ilen; ++i){
        point = points[(start + (reverse ? ilen - i : i)) % count];
        if (point.skip) continue;
        else if (move) {
            ctx.moveTo(point.x, point.y);
            move = false;
        } else lineMethod(ctx, prev, point, reverse, options.stepped);
        prev = point;
    }
    if (loop) {
        point = points[(start + (reverse ? ilen : 0)) % count];
        lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count, start, ilen } = pathVars(points, segment, params);
    const { move = true, reverse } = params || {};
    let avgX = 0;
    let countX = 0;
    let i, point, prevX, minY, maxY, lastY;
    const pointIndex = (index)=>(start + (reverse ? ilen - index : index)) % count;
    const drawX = ()=>{
        if (minY !== maxY) {
            ctx.lineTo(avgX, maxY);
            ctx.lineTo(avgX, minY);
            ctx.lineTo(avgX, lastY);
        }
    };
    if (move) {
        point = points[pointIndex(0)];
        ctx.moveTo(point.x, point.y);
    }
    for(i = 0; i <= ilen; ++i){
        point = points[pointIndex(i)];
        if (point.skip) continue;
        const x = point.x;
        const y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) minY = y;
            else if (y > maxY) maxY = y;
            avgX = (countX * avgX + x) / ++countX;
        } else {
            drawX();
            ctx.lineTo(x, y);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
        }
        lastY = y;
    }
    drawX();
}
function _getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
    return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
    if (options.stepped) return 0, _helpersDatasetJs.ap;
    if (options.tension || options.cubicInterpolationMode === 'monotone') return 0, _helpersDatasetJs.aq;
    return 0, _helpersDatasetJs.ar;
}
function strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
        path = line._path = new Path2D();
        if (line.path(path, start, count)) path.closePath();
    }
    setStyle(ctx, line.options);
    ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
    const { segments, options } = line;
    const segmentMethod = _getSegmentMethod(line);
    for (const segment of segments){
        setStyle(ctx, options, segment.style);
        ctx.beginPath();
        if (segmentMethod(ctx, line, segment, {
            start,
            end: start + count - 1
        })) ctx.closePath();
        ctx.stroke();
    }
}
const usePath2D = typeof Path2D === 'function';
function draw(ctx, line, start, count) {
    if (usePath2D && !line.options.segment) strokePathWithCache(ctx, line, start, count);
    else strokePathDirect(ctx, line, start, count);
}
class LineElement extends Element {
    static id = 'line';
    static defaults = {
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        borderWidth: 3,
        capBezierPoints: true,
        cubicInterpolationMode: 'default',
        fill: false,
        spanGaps: false,
        stepped: false,
        tension: 0
    };
    static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    static descriptors = {
        _scriptable: true,
        _indexable: (name)=>name !== 'borderDash' && name !== 'fill'
    };
    constructor(cfg){
        super();
        this.animated = true;
        this.options = undefined;
        this._chart = undefined;
        this._loop = undefined;
        this._fullLoop = undefined;
        this._path = undefined;
        this._points = undefined;
        this._segments = undefined;
        this._decimated = false;
        this._pointsUpdated = false;
        this._datasetIndex = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    updateControlPoints(chartArea, indexAxis) {
        const options = this.options;
        if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
            const loop = options.spanGaps ? this._loop : this._fullLoop;
            (0, _helpersDatasetJs.am)(this._points, options, chartArea, loop, indexAxis);
            this._pointsUpdated = true;
        }
    }
    set points(points) {
        this._points = points;
        delete this._segments;
        delete this._path;
        this._pointsUpdated = false;
    }
    get points() {
        return this._points;
    }
    get segments() {
        return this._segments || (this._segments = (0, _helpersDatasetJs.an)(this, this.options.segment));
    }
    first() {
        const segments = this.segments;
        const points = this.points;
        return segments.length && points[segments[0].start];
    }
    last() {
        const segments = this.segments;
        const points = this.points;
        const count = segments.length;
        return count && points[segments[count - 1].end];
    }
    interpolate(point, property) {
        const options = this.options;
        const value = point[property];
        const points = this.points;
        const segments = (0, _helpersDatasetJs.ao)(this, {
            property,
            start: value,
            end: value
        });
        if (!segments.length) return;
        const result = [];
        const _interpolate = _getInterpolationMethod(options);
        let i, ilen;
        for(i = 0, ilen = segments.length; i < ilen; ++i){
            const { start, end } = segments[i];
            const p1 = points[start];
            const p2 = points[end];
            if (p1 === p2) {
                result.push(p1);
                continue;
            }
            const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
            const interpolated = _interpolate(p1, p2, t, options.stepped);
            interpolated[property] = point[property];
            result.push(interpolated);
        }
        return result.length === 1 ? result[0] : result;
    }
    pathSegment(ctx, segment, params) {
        const segmentMethod = _getSegmentMethod(this);
        return segmentMethod(ctx, this, segment, params);
    }
    path(ctx, start, count) {
        const segments = this.segments;
        const segmentMethod = _getSegmentMethod(this);
        let loop = this._loop;
        start = start || 0;
        count = count || this.points.length - start;
        for (const segment of segments)loop &= segmentMethod(ctx, this, segment, {
            start,
            end: start + count - 1
        });
        return !!loop;
    }
    draw(ctx, chartArea, start, count) {
        const options = this.options || {};
        const points = this.points || [];
        if (points.length && options.borderWidth) {
            ctx.save();
            draw(ctx, this, start, count);
            ctx.restore();
        }
        if (this.animated) {
            this._pointsUpdated = false;
            this._path = undefined;
        }
    }
}
function inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value } = el.getProps([
        axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
}
class PointElement extends Element {
    static id = 'point';
    parsed;
    skip;
    stop;
    /**
   * @type {any}
   */ static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: 'circle',
        radius: 3,
        rotation: 0
    };
    /**
   * @type {any}
   */ static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.parsed = undefined;
        this.skip = undefined;
        this.stop = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        const options = this.options;
        const { x, y } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange$1(this, mouseX, 'x', useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange$1(this, mouseY, 'y', useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x, y } = this.getProps([
            'x',
            'y'
        ], useFinalPosition);
        return {
            x,
            y
        };
    }
    size(options) {
        options = options || this.options || {};
        let radius = options.radius || 0;
        radius = Math.max(radius, radius && options.hoverRadius || 0);
        const borderWidth = radius && options.borderWidth || 0;
        return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
        const options = this.options;
        if (this.skip || options.radius < 0.1 || !(0, _helpersDatasetJs.C)(this, area, this.size(options) / 2)) return;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.fillStyle = options.backgroundColor;
        (0, _helpersDatasetJs.au)(ctx, options, this.x, this.y);
    }
    getRange() {
        const options = this.options || {};
        // @ts-expect-error Fallbacks should never be hit in practice
        return options.radius + options.hitRadius;
    }
}
function getBarBounds(bar, useFinalPosition) {
    const { x, y, base, width, height } = bar.getProps([
        'x',
        'y',
        'base',
        'width',
        'height'
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
        half = height / 2;
        left = Math.min(x, base);
        right = Math.max(x, base);
        top = y - half;
        bottom = y + half;
    } else {
        half = width / 2;
        left = x - half;
        right = x + half;
        top = Math.min(y, base);
        bottom = Math.max(y, base);
    }
    return {
        left,
        top,
        right,
        bottom
    };
}
function skipOrLimit(skip, value, min, max) {
    return skip ? 0 : (0, _helpersDatasetJs.S)(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip = bar.borderSkipped;
    const o = (0, _helpersDatasetJs.aw)(value);
    return {
        t: skipOrLimit(skip.top, o.top, 0, maxH),
        r: skipOrLimit(skip.right, o.right, 0, maxW),
        b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
        l: skipOrLimit(skip.left, o.left, 0, maxW)
    };
}
function parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius } = bar.getProps([
        'enableBorderRadius'
    ]);
    const value = bar.options.borderRadius;
    const o = (0, _helpersDatasetJs.ax)(value);
    const maxR = Math.min(maxW, maxH);
    const skip = bar.borderSkipped;
    const enableBorder = enableBorderRadius || (0, _helpersDatasetJs.i)(value);
    return {
        topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
        topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
        bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
        bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
    };
}
function boundingRects(bar) {
    const bounds = getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = parseBorderWidth(bar, width / 2, height / 2);
    const radius = parseBorderRadius(bar, width / 2, height / 2);
    return {
        outer: {
            x: bounds.left,
            y: bounds.top,
            w: width,
            h: height,
            radius
        },
        inner: {
            x: bounds.left + border.l,
            y: bounds.top + border.t,
            w: width - border.l - border.r,
            h: height - border.t - border.b,
            radius: {
                topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
                topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
                bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
                bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
            }
        }
    };
}
function inRange(bar, x, y, useFinalPosition) {
    const skipX = x === null;
    const skipY = y === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || (0, _helpersDatasetJs.ak)(x, bounds.left, bounds.right)) && (skipY || (0, _helpersDatasetJs.ak)(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect = {}) {
    const x = rect.x !== refRect.x ? -amount : 0;
    const y = rect.y !== refRect.y ? -amount : 0;
    const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
    const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
    return {
        x: rect.x + x,
        y: rect.y + y,
        w: rect.w + w,
        h: rect.h + h,
        radius: rect.radius
    };
}
class BarElement extends Element {
    static id = 'bar';
    static defaults = {
        borderSkipped: 'start',
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: 'auto',
        pointStyle: undefined
    };
    static defaultRoutes = {
        backgroundColor: 'backgroundColor',
        borderColor: 'borderColor'
    };
    constructor(cfg){
        super();
        this.options = undefined;
        this.horizontal = undefined;
        this.base = undefined;
        this.width = undefined;
        this.height = undefined;
        this.inflateAmount = undefined;
        if (cfg) Object.assign(this, cfg);
    }
    draw(ctx) {
        const { inflateAmount, options: { borderColor, backgroundColor } } = this;
        const { inner, outer } = boundingRects(this);
        const addRectPath = hasRadius(outer.radius) ? (0, _helpersDatasetJs.av) : addNormalRectPath;
        ctx.save();
        if (outer.w !== inner.w || outer.h !== inner.h) {
            ctx.beginPath();
            addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
            ctx.clip();
            addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
            ctx.fillStyle = borderColor;
            ctx.fill('evenodd');
        }
        ctx.beginPath();
        addRectPath(ctx, inflateRect(inner, inflateAmount));
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
        return inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
        return inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
        return inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
        const { x, y, base, horizontal } = this.getProps([
            'x',
            'y',
            'base',
            'horizontal'
        ], useFinalPosition);
        return {
            x: horizontal ? (x + base) / 2 : x,
            y: horizontal ? y : (y + base) / 2
        };
    }
    getRange(axis) {
        return axis === 'x' ? this.width / 2 : this.height / 2;
    }
}
var elements = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ArcElement: ArcElement,
    BarElement: BarElement,
    LineElement: LineElement,
    PointElement: PointElement
});
const BORDER_COLORS = [
    'rgb(54, 162, 235)',
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)' // grey
];
// Border colors with 50% transparency
const BACKGROUND_COLORS = /* #__PURE__ */ BORDER_COLORS.map((color)=>color.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function getBorderColor(i) {
    return BORDER_COLORS[i % BORDER_COLORS.length];
}
function getBackgroundColor(i) {
    return BACKGROUND_COLORS[i % BACKGROUND_COLORS.length];
}
function colorizeDefaultDataset(dataset, i) {
    dataset.borderColor = getBorderColor(i);
    dataset.backgroundColor = getBackgroundColor(i);
    return ++i;
}
function colorizeDoughnutDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>getBorderColor(i++));
    return i;
}
function colorizePolarAreaDataset(dataset, i) {
    dataset.backgroundColor = dataset.data.map(()=>getBackgroundColor(i++));
    return i;
}
function getColorizer(chart) {
    let i = 0;
    return (dataset, datasetIndex)=>{
        const controller = chart.getDatasetMeta(datasetIndex).controller;
        if (controller instanceof DoughnutController) i = colorizeDoughnutDataset(dataset, i);
        else if (controller instanceof PolarAreaController) i = colorizePolarAreaDataset(dataset, i);
        else if (controller) i = colorizeDefaultDataset(dataset, i);
    };
}
function containsColorsDefinitions(descriptors) {
    let k;
    for(k in descriptors){
        if (descriptors[k].borderColor || descriptors[k].backgroundColor) return true;
    }
    return false;
}
function containsColorsDefinition(descriptor) {
    return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
}
function containsDefaultColorsDefenitions() {
    return (0, _helpersDatasetJs.d).borderColor !== 'rgba(0,0,0,0.1)' || (0, _helpersDatasetJs.d).backgroundColor !== 'rgba(0,0,0,0.1)';
}
var plugin_colors = {
    id: 'colors',
    defaults: {
        enabled: true,
        forceOverride: false
    },
    beforeLayout (chart, _args, options) {
        if (!options.enabled) return;
        const { data: { datasets }, options: chartOptions } = chart.config;
        const { elements } = chartOptions;
        const containsColorDefenition = containsColorsDefinitions(datasets) || containsColorsDefinition(chartOptions) || elements && containsColorsDefinitions(elements) || containsDefaultColorsDefenitions();
        if (!options.forceOverride && containsColorDefenition) return;
        const colorizer = getColorizer(chart);
        datasets.forEach(colorizer);
    }
};
function lttbDecimation(data, start, count, availableWidth, options) {
    const samples = options.samples || availableWidth;
    if (samples >= count) return data.slice(start, start + count);
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a = start;
    let i, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a];
    for(i = 0; i < samples - 2; i++){
        let avgX = 0;
        let avgY = 0;
        let j;
        const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
        const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
        const avgRangeLength = avgRangeEnd - avgRangeStart;
        for(j = avgRangeStart; j < avgRangeEnd; j++){
            avgX += data[j].x;
            avgY += data[j].y;
        }
        avgX /= avgRangeLength;
        avgY /= avgRangeLength;
        const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
        const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
        const { x: pointAx, y: pointAy } = data[a];
        maxArea = area = -1;
        for(j = rangeOffs; j < rangeTo; j++){
            area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
            if (area > maxArea) {
                maxArea = area;
                maxAreaPoint = data[j];
                nextA = j;
            }
        }
        decimated[sampledIndex++] = maxAreaPoint;
        a = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for(i = start; i < start + count; ++i){
        point = data[i];
        x = (point.x - xMin) / dx * availableWidth;
        y = point.y;
        const truncX = x | 0;
        if (truncX === prevX) {
            if (y < minY) {
                minY = y;
                minIndex = i;
            } else if (y > maxY) {
                maxY = y;
                maxIndex = i;
            }
            avgX = (countX * avgX + point.x) / ++countX;
        } else {
            const lastIndex = i - 1;
            if (!(0, _helpersDatasetJs.k)(minIndex) && !(0, _helpersDatasetJs.k)(maxIndex)) {
                const intermediateIndex1 = Math.min(minIndex, maxIndex);
                const intermediateIndex2 = Math.max(minIndex, maxIndex);
                if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) decimated.push({
                    ...data[intermediateIndex1],
                    x: avgX
                });
                if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) decimated.push({
                    ...data[intermediateIndex2],
                    x: avgX
                });
            }
            if (i > 0 && lastIndex !== startIndex) decimated.push(data[lastIndex]);
            decimated.push(point);
            prevX = truncX;
            countX = 0;
            minY = maxY = y;
            minIndex = maxIndex = startIndex = i;
        }
    }
    return decimated;
}
function cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
        const data = dataset._data;
        delete dataset._decimated;
        delete dataset._data;
        Object.defineProperty(dataset, 'data', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: data
        });
    }
}
function cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset)=>{
        cleanDecimatedDataset(dataset);
    });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale } = meta;
    const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
    if (minDefined) start = (0, _helpersDatasetJs.S)((0, _helpersDatasetJs.B)(points, iScale.axis, min).lo, 0, pointCount - 1);
    if (maxDefined) count = (0, _helpersDatasetJs.S)((0, _helpersDatasetJs.B)(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    else count = pointCount - start;
    return {
        start,
        count
    };
}
var plugin_decimation = {
    id: 'decimation',
    defaults: {
        algorithm: 'min-max',
        enabled: false
    },
    beforeElementsUpdate: (chart, args, options)=>{
        if (!options.enabled) {
            cleanDecimatedData(chart);
            return;
        }
        const availableWidth = chart.width;
        chart.data.datasets.forEach((dataset, datasetIndex)=>{
            const { _data, indexAxis } = dataset;
            const meta = chart.getDatasetMeta(datasetIndex);
            const data = _data || dataset.data;
            if ((0, _helpersDatasetJs.a)([
                indexAxis,
                chart.options.indexAxis
            ]) === 'y') return;
            if (!meta.controller.supportsDecimation) return;
            const xAxis = chart.scales[meta.xAxisID];
            if (xAxis.type !== 'linear' && xAxis.type !== 'time') return;
            if (chart.options.parsing) return;
            let { start, count } = getStartAndCountOfVisiblePointsSimplified(meta, data);
            const threshold = options.threshold || 4 * availableWidth;
            if (count <= threshold) {
                cleanDecimatedDataset(dataset);
                return;
            }
            if ((0, _helpersDatasetJs.k)(_data)) {
                dataset._data = data;
                delete dataset.data;
                Object.defineProperty(dataset, 'data', {
                    configurable: true,
                    enumerable: true,
                    get: function() {
                        return this._decimated;
                    },
                    set: function(d) {
                        this._data = d;
                    }
                });
            }
            let decimated;
            switch(options.algorithm){
                case 'lttb':
                    decimated = lttbDecimation(data, start, count, availableWidth, options);
                    break;
                case 'min-max':
                    decimated = minMaxDecimation(data, start, count, availableWidth);
                    break;
                default:
                    throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
            }
            dataset._decimated = decimated;
        });
    },
    destroy (chart) {
        cleanDecimatedData(chart);
    }
};
function _segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments){
        let { start, end } = segment;
        end = _findSegmentEnd(start, end, points);
        const bounds = _getBounds(property, points[start], points[end], segment.loop);
        if (!target.segments) {
            parts.push({
                source: segment,
                target: bounds,
                start: points[start],
                end: points[end]
            });
            continue;
        }
        const targetSegments = (0, _helpersDatasetJs.ao)(target, bounds);
        for (const tgt of targetSegments){
            const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
            const fillSources = (0, _helpersDatasetJs.ay)(segment, points, subBounds);
            for (const fillSource of fillSources)parts.push({
                source: fillSource,
                target: tgt,
                start: {
                    [property]: _getEdge(bounds, subBounds, 'start', Math.max)
                },
                end: {
                    [property]: _getEdge(bounds, subBounds, 'end', Math.min)
                }
            });
        }
    }
    return parts;
}
function _getBounds(property, first, last, loop) {
    if (loop) return;
    let start = first[property];
    let end = last[property];
    if (property === 'angle') {
        start = (0, _helpersDatasetJs.az)(start);
        end = (0, _helpersDatasetJs.az)(end);
    }
    return {
        property,
        start,
        end
    };
}
function _pointsFromSegments(boundary, line) {
    const { x = null, y = null } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start, end })=>{
        end = _findSegmentEnd(start, end, linePoints);
        const first = linePoints[start];
        const last = linePoints[end];
        if (y !== null) {
            points.push({
                x: first.x,
                y
            });
            points.push({
                x: last.x,
                y
            });
        } else if (x !== null) {
            points.push({
                x,
                y: first.y
            });
            points.push({
                x,
                y: last.y
            });
        }
    });
    return points;
}
function _findSegmentEnd(start, end, points) {
    for(; end > start; end--){
        const point = points[end];
        if (!isNaN(point.x) && !isNaN(point.y)) break;
    }
    return end;
}
function _getEdge(a, b, prop, fn) {
    if (a && b) return fn(a[prop], b[prop]);
    return a ? a[prop] : b ? b[prop] : 0;
}
function _createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if ((0, _helpersDatasetJs.b)(boundary)) {
        _loop = true;
        points = boundary;
    } else points = _pointsFromSegments(boundary, line);
    return points.length ? new LineElement({
        points,
        options: {
            tension: 0
        },
        _loop,
        _fullLoop: _loop
    }) : null;
}
function _shouldApplyFill(source) {
    return source && source.fill !== false;
}
function _resolveTarget(sources, index, propagate) {
    const source = sources[index];
    let fill = source.fill;
    const visited = [
        index
    ];
    let target;
    if (!propagate) return fill;
    while(fill !== false && visited.indexOf(fill) === -1){
        if (!(0, _helpersDatasetJs.g)(fill)) return fill;
        target = sources[fill];
        if (!target) return false;
        if (target.visible) return fill;
        visited.push(fill);
        fill = target.fill;
    }
    return false;
}
function _decodeFill(line, index, count) {
    const fill = parseFillOption(line);
    if ((0, _helpersDatasetJs.i)(fill)) return isNaN(fill.value) ? false : fill;
    let target = parseFloat(fill);
    if ((0, _helpersDatasetJs.g)(target) && Math.floor(target) === target) return decodeTargetIndex(fill[0], index, target, count);
    return [
        'origin',
        'start',
        'end',
        'stack',
        'shape'
    ].indexOf(fill) >= 0 && fill;
}
function decodeTargetIndex(firstCh, index, target, count) {
    if (firstCh === '-' || firstCh === '+') target = index + target;
    if (target === index || target < 0 || target >= count) return false;
    return target;
}
function _getTargetPixel(fill, scale) {
    let pixel = null;
    if (fill === 'start') pixel = scale.bottom;
    else if (fill === 'end') pixel = scale.top;
    else if ((0, _helpersDatasetJs.i)(fill)) pixel = scale.getPixelForValue(fill.value);
    else if (scale.getBasePixel) pixel = scale.getBasePixel();
    return pixel;
}
function _getTargetValue(fill, scale, startValue) {
    let value;
    if (fill === 'start') value = startValue;
    else if (fill === 'end') value = scale.options.reverse ? scale.min : scale.max;
    else if ((0, _helpersDatasetJs.i)(fill)) value = fill.value;
    else value = scale.getBaseValue();
    return value;
}
function parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill = (0, _helpersDatasetJs.v)(fillOption && fillOption.target, fillOption);
    if (fill === undefined) fill = !!options.backgroundColor;
    if (fill === false || fill === null) return false;
    if (fill === true) return 'origin';
    return fill;
}
function _buildStackLine(source) {
    const { scale, index, line } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = getLinesBelow(scale, index);
    linesBelow.push(_createBoundaryLine({
        x: null,
        y: scale.bottom
    }, line));
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        for(let j = segment.start; j <= segment.end; j++)addPointsBelow(points, sourcePoints[j], linesBelow);
    }
    return new LineElement({
        points,
        options: {}
    });
}
function getLinesBelow(scale, index) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas('line');
    for(let i = 0; i < metas.length; i++){
        const meta = metas[i];
        if (meta.index === index) break;
        if (!meta.hidden) below.unshift(meta.dataset);
    }
    return below;
}
function addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for(let j = 0; j < linesBelow.length; j++){
        const line = linesBelow[j];
        const { first, last, point } = findPoint(line, sourcePoint, 'x');
        if (!point || first && last) continue;
        if (first) postponed.unshift(point);
        else {
            points.push(point);
            if (!last) break;
        }
    }
    points.push(...postponed);
}
function findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) return {};
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for(let i = 0; i < segments.length; i++){
        const segment = segments[i];
        const firstValue = linePoints[segment.start][property];
        const lastValue = linePoints[segment.end][property];
        if ((0, _helpersDatasetJs.ak)(pointValue, firstValue, lastValue)) {
            first = pointValue === firstValue;
            last = pointValue === lastValue;
            break;
        }
    }
    return {
        first,
        last,
        point
    };
}
class simpleArc {
    constructor(opts){
        this.x = opts.x;
        this.y = opts.y;
        this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
        const { x, y, radius } = this;
        bounds = bounds || {
            start: 0,
            end: (0, _helpersDatasetJs.T)
        };
        ctx.arc(x, y, radius, bounds.end, bounds.start, true);
        return !opts.bounds;
    }
    interpolate(point) {
        const { x, y, radius } = this;
        const angle = point.angle;
        return {
            x: x + Math.cos(angle) * radius,
            y: y + Math.sin(angle) * radius,
            angle
        };
    }
}
function _getTarget(source) {
    const { chart, fill, line } = source;
    if ((0, _helpersDatasetJs.g)(fill)) return getLineByIndex(chart, fill);
    if (fill === 'stack') return _buildStackLine(source);
    if (fill === 'shape') return true;
    const boundary = computeBoundary(source);
    if (boundary instanceof simpleArc) return boundary;
    return _createBoundaryLine(boundary, line);
}
function getLineByIndex(chart, index) {
    const meta = chart.getDatasetMeta(index);
    const visible = meta && chart.isDatasetVisible(index);
    return visible ? meta.dataset : null;
}
function computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) return computeCircularBoundary(source);
    return computeLinearBoundary(source);
}
function computeLinearBoundary(source) {
    const { scale = {}, fill } = source;
    const pixel = _getTargetPixel(fill, scale);
    if ((0, _helpersDatasetJs.g)(pixel)) {
        const horizontal = scale.isHorizontal();
        return {
            x: horizontal ? pixel : null,
            y: horizontal ? null : pixel
        };
    }
    return null;
}
function computeCircularBoundary(source) {
    const { scale, fill } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start = options.reverse ? scale.max : scale.min;
    const value = _getTargetValue(fill, scale, start);
    const target = [];
    if (options.grid.circular) {
        const center = scale.getPointPositionForValue(0, start);
        return new simpleArc({
            x: center.x,
            y: center.y,
            radius: scale.getDistanceFromCenterForValue(value)
        });
    }
    for(let i = 0; i < length; ++i)target.push(scale.getPointPositionForValue(i, value));
    return target;
}
function _drawfill(ctx, source, area) {
    const target = _getTarget(source);
    const { chart, index, line, scale, axis } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color = lineOpts.backgroundColor;
    const { above = color, below = color } = fillOption || {};
    const meta = chart.getDatasetMeta(index);
    const clip = (0, _helpersDatasetJs.ah)(chart, meta);
    if (target && line.points.length) {
        (0, _helpersDatasetJs.Y)(ctx, area);
        doFill(ctx, {
            line,
            target,
            above,
            below,
            area,
            scale,
            axis,
            clip
        });
        (0, _helpersDatasetJs.$)(ctx);
    }
}
function doFill(ctx, cfg) {
    const { line, target, above, below, area, scale, clip } = cfg;
    const property = line._loop ? 'angle' : cfg.axis;
    ctx.save();
    if (property === 'x' && below !== above) {
        clipVertical(ctx, target, area.top);
        fill(ctx, {
            line,
            target,
            color: above,
            scale,
            property,
            clip
        });
        ctx.restore();
        ctx.save();
        clipVertical(ctx, target, area.bottom);
    }
    fill(ctx, {
        line,
        target,
        color: below,
        scale,
        property,
        clip
    });
    ctx.restore();
}
function clipVertical(ctx, target, clipY) {
    const { segments, points } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments){
        const { start, end } = segment;
        const firstPoint = points[start];
        const lastPoint = points[_findSegmentEnd(start, end, points)];
        if (first) {
            ctx.moveTo(firstPoint.x, firstPoint.y);
            first = false;
        } else {
            ctx.lineTo(firstPoint.x, clipY);
            ctx.lineTo(firstPoint.x, firstPoint.y);
        }
        lineLoop = !!target.pathSegment(ctx, segment, {
            move: lineLoop
        });
        if (lineLoop) ctx.closePath();
        else ctx.lineTo(lastPoint.x, clipY);
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
}
function fill(ctx, cfg) {
    const { line, target, property, color, scale, clip } = cfg;
    const segments = _segments(line, target, property);
    for (const { source: src, target: tgt, start, end } of segments){
        const { style: { backgroundColor = color } = {} } = src;
        const notShape = target !== true;
        ctx.save();
        ctx.fillStyle = backgroundColor;
        clipBounds(ctx, scale, clip, notShape && _getBounds(property, start, end));
        ctx.beginPath();
        const lineLoop = !!line.pathSegment(ctx, src);
        let loop;
        if (notShape) {
            if (lineLoop) ctx.closePath();
            else interpolatedLineTo(ctx, target, end, property);
            const targetLoop = !!target.pathSegment(ctx, tgt, {
                move: lineLoop,
                reverse: true
            });
            loop = lineLoop && targetLoop;
            if (!loop) interpolatedLineTo(ctx, target, start, property);
        }
        ctx.closePath();
        ctx.fill(loop ? 'evenodd' : 'nonzero');
        ctx.restore();
    }
}
function clipBounds(ctx, scale, clip, bounds) {
    const chartArea = scale.chart.chartArea;
    const { property, start, end } = bounds || {};
    if (property === 'x' || property === 'y') {
        let left, top, right, bottom;
        if (property === 'x') {
            left = start;
            top = chartArea.top;
            right = end;
            bottom = chartArea.bottom;
        } else {
            left = chartArea.left;
            top = start;
            right = chartArea.right;
            bottom = end;
        }
        ctx.beginPath();
        if (clip) {
            left = Math.max(left, clip.left);
            right = Math.min(right, clip.right);
            top = Math.max(top, clip.top);
            bottom = Math.min(bottom, clip.bottom);
        }
        ctx.rect(left, top, right - left, bottom - top);
        ctx.clip();
    }
}
function interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
}
var index = {
    id: 'filler',
    afterDatasetsUpdate (chart, _args, options) {
        const count = (chart.data.datasets || []).length;
        const sources = [];
        let meta, i, line, source;
        for(i = 0; i < count; ++i){
            meta = chart.getDatasetMeta(i);
            line = meta.dataset;
            source = null;
            if (line && line.options && line instanceof LineElement) source = {
                visible: chart.isDatasetVisible(i),
                index: i,
                fill: _decodeFill(line, i, count),
                chart,
                axis: meta.controller.options.indexAxis,
                scale: meta.vScale,
                line
            };
            meta.$filler = source;
            sources.push(source);
        }
        for(i = 0; i < count; ++i){
            source = sources[i];
            if (!source || source.fill === false) continue;
            source.fill = _resolveTarget(sources, i, options.propagate);
        }
    },
    beforeDraw (chart, _args, options) {
        const draw = options.drawTime === 'beforeDraw';
        const metasets = chart.getSortedVisibleDatasetMetas();
        const area = chart.chartArea;
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (!source) continue;
            source.line.updateControlPoints(area, source.axis);
            if (draw && source.fill) _drawfill(chart.ctx, source, area);
        }
    },
    beforeDatasetsDraw (chart, _args, options) {
        if (options.drawTime !== 'beforeDatasetsDraw') return;
        const metasets = chart.getSortedVisibleDatasetMetas();
        for(let i = metasets.length - 1; i >= 0; --i){
            const source = metasets[i].$filler;
            if (_shouldApplyFill(source)) _drawfill(chart.ctx, source, chart.chartArea);
        }
    },
    beforeDatasetDraw (chart, args, options) {
        const source = args.meta.$filler;
        if (!_shouldApplyFill(source) || options.drawTime !== 'beforeDatasetDraw') return;
        _drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
        propagate: true,
        drawTime: 'beforeDatasetDraw'
    }
};
const getBoxSize = (labelOpts, fontSize)=>{
    let { boxHeight = fontSize, boxWidth = fontSize } = labelOpts;
    if (labelOpts.usePointStyle) {
        boxHeight = Math.min(boxHeight, fontSize);
        boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
    }
    return {
        boxWidth,
        boxHeight,
        itemHeight: Math.max(fontSize, boxHeight)
    };
};
const itemsEqual = (a, b)=>a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class Legend extends Element {
    constructor(config){
        super();
        this._added = false;
        this.legendHitBoxes = [];
        this._hoveredItem = null;
        this.doughnutMode = false;
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this.legendItems = undefined;
        this.columnSizes = undefined;
        this.lineWidths = undefined;
        this.maxHeight = undefined;
        this.maxWidth = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.height = undefined;
        this.width = undefined;
        this._margins = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight, margins) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this._margins = margins;
        this.setDimensions();
        this.buildLabels();
        this.fit();
    }
    setDimensions() {
        if (this.isHorizontal()) {
            this.width = this.maxWidth;
            this.left = this._margins.left;
            this.right = this.width;
        } else {
            this.height = this.maxHeight;
            this.top = this._margins.top;
            this.bottom = this.height;
        }
    }
    buildLabels() {
        const labelOpts = this.options.labels || {};
        let legendItems = (0, _helpersDatasetJs.Q)(labelOpts.generateLabels, [
            this.chart
        ], this) || [];
        if (labelOpts.filter) legendItems = legendItems.filter((item)=>labelOpts.filter(item, this.chart.data));
        if (labelOpts.sort) legendItems = legendItems.sort((a, b)=>labelOpts.sort(a, b, this.chart.data));
        if (this.options.reverse) legendItems.reverse();
        this.legendItems = legendItems;
    }
    fit() {
        const { options, ctx } = this;
        if (!options.display) {
            this.width = this.height = 0;
            return;
        }
        const labelOpts = options.labels;
        const labelFont = (0, _helpersDatasetJs.a0)(labelOpts.font);
        const fontSize = labelFont.size;
        const titleHeight = this._computeTitleHeight();
        const { boxWidth, itemHeight } = getBoxSize(labelOpts, fontSize);
        let width, height;
        ctx.font = labelFont.string;
        if (this.isHorizontal()) {
            width = this.maxWidth;
            height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
        } else {
            height = this.maxHeight;
            width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
        }
        this.width = Math.min(width, options.maxWidth || this.maxWidth);
        this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
    _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
        const { ctx, maxWidth, options: { labels: { padding } } } = this;
        const hitboxes = this.legendHitBoxes = [];
        const lineWidths = this.lineWidths = [
            0
        ];
        const lineHeight = itemHeight + padding;
        let totalHeight = titleHeight;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        let row = -1;
        let top = -lineHeight;
        this.legendItems.forEach((legendItem, i)=>{
            const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
            if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
                totalHeight += lineHeight;
                lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
                top += lineHeight;
                row++;
            }
            hitboxes[i] = {
                left: 0,
                top,
                row,
                width: itemWidth,
                height: itemHeight
            };
            lineWidths[lineWidths.length - 1] += itemWidth + padding;
        });
        return totalHeight;
    }
    _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
        const { ctx, maxHeight, options: { labels: { padding } } } = this;
        const hitboxes = this.legendHitBoxes = [];
        const columnSizes = this.columnSizes = [];
        const heightLimit = maxHeight - titleHeight;
        let totalWidth = padding;
        let currentColWidth = 0;
        let currentColHeight = 0;
        let left = 0;
        let col = 0;
        this.legendItems.forEach((legendItem, i)=>{
            const { itemWidth, itemHeight } = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
            if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
                totalWidth += currentColWidth + padding;
                columnSizes.push({
                    width: currentColWidth,
                    height: currentColHeight
                });
                left += currentColWidth + padding;
                col++;
                currentColWidth = currentColHeight = 0;
            }
            hitboxes[i] = {
                left,
                top: currentColHeight,
                col,
                width: itemWidth,
                height: itemHeight
            };
            currentColWidth = Math.max(currentColWidth, itemWidth);
            currentColHeight += itemHeight + padding;
        });
        totalWidth += currentColWidth;
        columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
        });
        return totalWidth;
    }
    adjustHitBoxes() {
        if (!this.options.display) return;
        const titleHeight = this._computeTitleHeight();
        const { legendHitBoxes: hitboxes, options: { align, labels: { padding }, rtl } } = this;
        const rtlHelper = (0, _helpersDatasetJs.aA)(rtl, this.left, this.width);
        if (this.isHorizontal()) {
            let row = 0;
            let left = (0, _helpersDatasetJs.a2)(align, this.left + padding, this.right - this.lineWidths[row]);
            for (const hitbox of hitboxes){
                if (row !== hitbox.row) {
                    row = hitbox.row;
                    left = (0, _helpersDatasetJs.a2)(align, this.left + padding, this.right - this.lineWidths[row]);
                }
                hitbox.top += this.top + titleHeight + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
                left += hitbox.width + padding;
            }
        } else {
            let col = 0;
            let top = (0, _helpersDatasetJs.a2)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
            for (const hitbox of hitboxes){
                if (hitbox.col !== col) {
                    col = hitbox.col;
                    top = (0, _helpersDatasetJs.a2)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
                }
                hitbox.top = top;
                hitbox.left += this.left + padding;
                hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
                top += hitbox.height + padding;
            }
        }
    }
    isHorizontal() {
        return this.options.position === 'top' || this.options.position === 'bottom';
    }
    draw() {
        if (this.options.display) {
            const ctx = this.ctx;
            (0, _helpersDatasetJs.Y)(ctx, this);
            this._draw();
            (0, _helpersDatasetJs.$)(ctx);
        }
    }
    _draw() {
        const { options: opts, columnSizes, lineWidths, ctx } = this;
        const { align, labels: labelOpts } = opts;
        const defaultColor = (0, _helpersDatasetJs.d).color;
        const rtlHelper = (0, _helpersDatasetJs.aA)(opts.rtl, this.left, this.width);
        const labelFont = (0, _helpersDatasetJs.a0)(labelOpts.font);
        const { padding } = labelOpts;
        const fontSize = labelFont.size;
        const halfFontSize = fontSize / 2;
        let cursor;
        this.drawTitle();
        ctx.textAlign = rtlHelper.textAlign('left');
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 0.5;
        ctx.font = labelFont.string;
        const { boxWidth, boxHeight, itemHeight } = getBoxSize(labelOpts, fontSize);
        const drawLegendBox = function(x, y, legendItem) {
            if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) return;
            ctx.save();
            const lineWidth = (0, _helpersDatasetJs.v)(legendItem.lineWidth, 1);
            ctx.fillStyle = (0, _helpersDatasetJs.v)(legendItem.fillStyle, defaultColor);
            ctx.lineCap = (0, _helpersDatasetJs.v)(legendItem.lineCap, 'butt');
            ctx.lineDashOffset = (0, _helpersDatasetJs.v)(legendItem.lineDashOffset, 0);
            ctx.lineJoin = (0, _helpersDatasetJs.v)(legendItem.lineJoin, 'miter');
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = (0, _helpersDatasetJs.v)(legendItem.strokeStyle, defaultColor);
            ctx.setLineDash((0, _helpersDatasetJs.v)(legendItem.lineDash, []));
            if (labelOpts.usePointStyle) {
                const drawOptions = {
                    radius: boxHeight * Math.SQRT2 / 2,
                    pointStyle: legendItem.pointStyle,
                    rotation: legendItem.rotation,
                    borderWidth: lineWidth
                };
                const centerX = rtlHelper.xPlus(x, boxWidth / 2);
                const centerY = y + halfFontSize;
                (0, _helpersDatasetJs.aE)(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
            } else {
                const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
                const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
                const borderRadius = (0, _helpersDatasetJs.ax)(legendItem.borderRadius);
                ctx.beginPath();
                if (Object.values(borderRadius).some((v)=>v !== 0)) (0, _helpersDatasetJs.av)(ctx, {
                    x: xBoxLeft,
                    y: yBoxTop,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                else ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
                ctx.fill();
                if (lineWidth !== 0) ctx.stroke();
            }
            ctx.restore();
        };
        const fillText = function(x, y, legendItem) {
            (0, _helpersDatasetJs.Z)(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
                strikethrough: legendItem.hidden,
                textAlign: rtlHelper.textAlign(legendItem.textAlign)
            });
        };
        const isHorizontal = this.isHorizontal();
        const titleHeight = this._computeTitleHeight();
        if (isHorizontal) cursor = {
            x: (0, _helpersDatasetJs.a2)(align, this.left + padding, this.right - lineWidths[0]),
            y: this.top + padding + titleHeight,
            line: 0
        };
        else cursor = {
            x: this.left + padding,
            y: (0, _helpersDatasetJs.a2)(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
            line: 0
        };
        (0, _helpersDatasetJs.aB)(this.ctx, opts.textDirection);
        const lineHeight = itemHeight + padding;
        this.legendItems.forEach((legendItem, i)=>{
            ctx.strokeStyle = legendItem.fontColor;
            ctx.fillStyle = legendItem.fontColor;
            const textWidth = ctx.measureText(legendItem.text).width;
            const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
            const width = boxWidth + halfFontSize + textWidth;
            let x = cursor.x;
            let y = cursor.y;
            rtlHelper.setWidth(this.width);
            if (isHorizontal) {
                if (i > 0 && x + width + padding > this.right) {
                    y = cursor.y += lineHeight;
                    cursor.line++;
                    x = cursor.x = (0, _helpersDatasetJs.a2)(align, this.left + padding, this.right - lineWidths[cursor.line]);
                }
            } else if (i > 0 && y + lineHeight > this.bottom) {
                x = cursor.x = x + columnSizes[cursor.line].width + padding;
                cursor.line++;
                y = cursor.y = (0, _helpersDatasetJs.a2)(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
            }
            const realX = rtlHelper.x(x);
            drawLegendBox(realX, y, legendItem);
            x = (0, _helpersDatasetJs.aC)(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
            fillText(rtlHelper.x(x), y, legendItem);
            if (isHorizontal) cursor.x += width + padding;
            else if (typeof legendItem.text !== 'string') {
                const fontLineHeight = labelFont.lineHeight;
                cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight) + padding;
            } else cursor.y += lineHeight;
        });
        (0, _helpersDatasetJs.aD)(this.ctx, opts.textDirection);
    }
    drawTitle() {
        const opts = this.options;
        const titleOpts = opts.title;
        const titleFont = (0, _helpersDatasetJs.a0)(titleOpts.font);
        const titlePadding = (0, _helpersDatasetJs.E)(titleOpts.padding);
        if (!titleOpts.display) return;
        const rtlHelper = (0, _helpersDatasetJs.aA)(opts.rtl, this.left, this.width);
        const ctx = this.ctx;
        const position = titleOpts.position;
        const halfFontSize = titleFont.size / 2;
        const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
        let y;
        let left = this.left;
        let maxWidth = this.width;
        if (this.isHorizontal()) {
            maxWidth = Math.max(...this.lineWidths);
            y = this.top + topPaddingPlusHalfFontSize;
            left = (0, _helpersDatasetJs.a2)(opts.align, left, this.right - maxWidth);
        } else {
            const maxHeight = this.columnSizes.reduce((acc, size)=>Math.max(acc, size.height), 0);
            y = topPaddingPlusHalfFontSize + (0, _helpersDatasetJs.a2)(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
        }
        const x = (0, _helpersDatasetJs.a2)(position, left, left + maxWidth);
        ctx.textAlign = rtlHelper.textAlign((0, _helpersDatasetJs.a1)(position));
        ctx.textBaseline = 'middle';
        ctx.strokeStyle = titleOpts.color;
        ctx.fillStyle = titleOpts.color;
        ctx.font = titleFont.string;
        (0, _helpersDatasetJs.Z)(ctx, titleOpts.text, x, y, titleFont);
    }
    _computeTitleHeight() {
        const titleOpts = this.options.title;
        const titleFont = (0, _helpersDatasetJs.a0)(titleOpts.font);
        const titlePadding = (0, _helpersDatasetJs.E)(titleOpts.padding);
        return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
    _getLegendItemAt(x, y) {
        let i, hitBox, lh;
        if ((0, _helpersDatasetJs.ak)(x, this.left, this.right) && (0, _helpersDatasetJs.ak)(y, this.top, this.bottom)) {
            lh = this.legendHitBoxes;
            for(i = 0; i < lh.length; ++i){
                hitBox = lh[i];
                if ((0, _helpersDatasetJs.ak)(x, hitBox.left, hitBox.left + hitBox.width) && (0, _helpersDatasetJs.ak)(y, hitBox.top, hitBox.top + hitBox.height)) return this.legendItems[i];
            }
        }
        return null;
    }
    handleEvent(e) {
        const opts = this.options;
        if (!isListened(e.type, opts)) return;
        const hoveredItem = this._getLegendItemAt(e.x, e.y);
        if (e.type === 'mousemove' || e.type === 'mouseout') {
            const previous = this._hoveredItem;
            const sameItem = itemsEqual(previous, hoveredItem);
            if (previous && !sameItem) (0, _helpersDatasetJs.Q)(opts.onLeave, [
                e,
                previous,
                this
            ], this);
            this._hoveredItem = hoveredItem;
            if (hoveredItem && !sameItem) (0, _helpersDatasetJs.Q)(opts.onHover, [
                e,
                hoveredItem,
                this
            ], this);
        } else if (hoveredItem) (0, _helpersDatasetJs.Q)(opts.onClick, [
            e,
            hoveredItem,
            this
        ], this);
    }
}
function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
    const itemWidth = calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
    const itemHeight = calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
    return {
        itemWidth,
        itemHeight
    };
}
function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
    let legendItemText = legendItem.text;
    if (legendItemText && typeof legendItemText !== 'string') legendItemText = legendItemText.reduce((a, b)=>a.length > b.length ? a : b);
    return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
}
function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
    let itemHeight = _itemHeight;
    if (typeof legendItem.text !== 'string') itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
    return itemHeight;
}
function calculateLegendItemHeight(legendItem, fontLineHeight) {
    const labelHeight = legendItem.text ? legendItem.text.length : 0;
    return fontLineHeight * labelHeight;
}
function isListened(type, opts) {
    if ((type === 'mousemove' || type === 'mouseout') && (opts.onHover || opts.onLeave)) return true;
    if (opts.onClick && (type === 'click' || type === 'mouseup')) return true;
    return false;
}
var plugin_legend = {
    id: 'legend',
    _element: Legend,
    start (chart, _args, options) {
        const legend = chart.legend = new Legend({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, legend, options);
        layouts.addBox(chart, legend);
    },
    stop (chart) {
        layouts.removeBox(chart, chart.legend);
        delete chart.legend;
    },
    beforeUpdate (chart, _args, options) {
        const legend = chart.legend;
        layouts.configure(chart, legend, options);
        legend.options = options;
    },
    afterUpdate (chart) {
        const legend = chart.legend;
        legend.buildLabels();
        legend.adjustHitBoxes();
    },
    afterEvent (chart, args) {
        if (!args.replay) chart.legend.handleEvent(args.event);
    },
    defaults: {
        display: true,
        position: 'top',
        align: 'center',
        fullSize: true,
        reverse: false,
        weight: 1000,
        onClick (e, legendItem, legend) {
            const index = legendItem.datasetIndex;
            const ci = legend.chart;
            if (ci.isDatasetVisible(index)) {
                ci.hide(index);
                legendItem.hidden = true;
            } else {
                ci.show(index);
                legendItem.hidden = false;
            }
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: (ctx)=>ctx.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels (chart) {
                const datasets = chart.data.datasets;
                const { labels: { usePointStyle, pointStyle, textAlign, color, useBorderRadius, borderRadius } } = chart.legend.options;
                return chart._getSortedDatasetMetas().map((meta)=>{
                    const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
                    const borderWidth = (0, _helpersDatasetJs.E)(style.borderWidth);
                    return {
                        text: datasets[meta.index].label,
                        fillStyle: style.backgroundColor,
                        fontColor: color,
                        hidden: !meta.visible,
                        lineCap: style.borderCapStyle,
                        lineDash: style.borderDash,
                        lineDashOffset: style.borderDashOffset,
                        lineJoin: style.borderJoinStyle,
                        lineWidth: (borderWidth.width + borderWidth.height) / 4,
                        strokeStyle: style.borderColor,
                        pointStyle: pointStyle || style.pointStyle,
                        rotation: style.rotation,
                        textAlign: textAlign || style.textAlign,
                        borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
                        datasetIndex: meta.index
                    };
                }, this);
            }
        },
        title: {
            color: (ctx)=>ctx.chart.options.color,
            display: false,
            position: 'center',
            text: ''
        }
    },
    descriptors: {
        _scriptable: (name)=>!name.startsWith('on'),
        labels: {
            _scriptable: (name)=>![
                    'generateLabels',
                    'filter',
                    'sort'
                ].includes(name)
        }
    }
};
class Title extends Element {
    constructor(config){
        super();
        this.chart = config.chart;
        this.options = config.options;
        this.ctx = config.ctx;
        this._padding = undefined;
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.height = undefined;
        this.position = undefined;
        this.weight = undefined;
        this.fullSize = undefined;
    }
    update(maxWidth, maxHeight) {
        const opts = this.options;
        this.left = 0;
        this.top = 0;
        if (!opts.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return;
        }
        this.width = this.right = maxWidth;
        this.height = this.bottom = maxHeight;
        const lineCount = (0, _helpersDatasetJs.b)(opts.text) ? opts.text.length : 1;
        this._padding = (0, _helpersDatasetJs.E)(opts.padding);
        const textSize = lineCount * (0, _helpersDatasetJs.a0)(opts.font).lineHeight + this._padding.height;
        if (this.isHorizontal()) this.height = textSize;
        else this.width = textSize;
    }
    isHorizontal() {
        const pos = this.options.position;
        return pos === 'top' || pos === 'bottom';
    }
    _drawArgs(offset) {
        const { top, left, bottom, right, options } = this;
        const align = options.align;
        let rotation = 0;
        let maxWidth, titleX, titleY;
        if (this.isHorizontal()) {
            titleX = (0, _helpersDatasetJs.a2)(align, left, right);
            titleY = top + offset;
            maxWidth = right - left;
        } else {
            if (options.position === 'left') {
                titleX = left + offset;
                titleY = (0, _helpersDatasetJs.a2)(align, bottom, top);
                rotation = (0, _helpersDatasetJs.P) * -0.5;
            } else {
                titleX = right - offset;
                titleY = (0, _helpersDatasetJs.a2)(align, top, bottom);
                rotation = (0, _helpersDatasetJs.P) * 0.5;
            }
            maxWidth = bottom - top;
        }
        return {
            titleX,
            titleY,
            maxWidth,
            rotation
        };
    }
    draw() {
        const ctx = this.ctx;
        const opts = this.options;
        if (!opts.display) return;
        const fontOpts = (0, _helpersDatasetJs.a0)(opts.font);
        const lineHeight = fontOpts.lineHeight;
        const offset = lineHeight / 2 + this._padding.top;
        const { titleX, titleY, maxWidth, rotation } = this._drawArgs(offset);
        (0, _helpersDatasetJs.Z)(ctx, opts.text, 0, 0, fontOpts, {
            color: opts.color,
            maxWidth,
            rotation,
            textAlign: (0, _helpersDatasetJs.a1)(opts.align),
            textBaseline: 'middle',
            translation: [
                titleX,
                titleY
            ]
        });
    }
}
function createTitle(chart, titleOpts) {
    const title = new Title({
        ctx: chart.ctx,
        options: titleOpts,
        chart
    });
    layouts.configure(chart, title, titleOpts);
    layouts.addBox(chart, title);
    chart.titleBlock = title;
}
var plugin_title = {
    id: 'title',
    _element: Title,
    start (chart, _args, options) {
        createTitle(chart, options);
    },
    stop (chart) {
        const titleBlock = chart.titleBlock;
        layouts.removeBox(chart, titleBlock);
        delete chart.titleBlock;
    },
    beforeUpdate (chart, _args, options) {
        const title = chart.titleBlock;
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: 'center',
        display: false,
        font: {
            weight: 'bold'
        },
        fullSize: true,
        padding: 10,
        position: 'top',
        text: '',
        weight: 2000
    },
    defaultRoutes: {
        color: 'color'
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const map = new WeakMap();
var plugin_subtitle = {
    id: 'subtitle',
    start (chart, _args, options) {
        const title = new Title({
            ctx: chart.ctx,
            options,
            chart
        });
        layouts.configure(chart, title, options);
        layouts.addBox(chart, title);
        map.set(chart, title);
    },
    stop (chart) {
        layouts.removeBox(chart, map.get(chart));
        map.delete(chart);
    },
    beforeUpdate (chart, _args, options) {
        const title = map.get(chart);
        layouts.configure(chart, title, options);
        title.options = options;
    },
    defaults: {
        align: 'center',
        display: false,
        font: {
            weight: 'normal'
        },
        fullSize: true,
        padding: 0,
        position: 'top',
        text: '',
        weight: 1500
    },
    defaultRoutes: {
        color: 'color'
    },
    descriptors: {
        _scriptable: true,
        _indexable: false
    }
};
const positioners = {
    average (items) {
        if (!items.length) return false;
        let i, len;
        let xSet = new Set();
        let y = 0;
        let count = 0;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const pos = el.tooltipPosition();
                xSet.add(pos.x);
                y += pos.y;
                ++count;
            }
        }
        if (count === 0 || xSet.size === 0) return false;
        const xAverage = [
            ...xSet
        ].reduce((a, b)=>a + b) / xSet.size;
        return {
            x: xAverage,
            y: y / count
        };
    },
    nearest (items, eventPosition) {
        if (!items.length) return false;
        let x = eventPosition.x;
        let y = eventPosition.y;
        let minDistance = Number.POSITIVE_INFINITY;
        let i, len, nearestElement;
        for(i = 0, len = items.length; i < len; ++i){
            const el = items[i].element;
            if (el && el.hasValue()) {
                const center = el.getCenterPoint();
                const d = (0, _helpersDatasetJs.aF)(eventPosition, center);
                if (d < minDistance) {
                    minDistance = d;
                    nearestElement = el;
                }
            }
        }
        if (nearestElement) {
            const tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
        }
        return {
            x,
            y
        };
    }
};
function pushOrConcat(base, toPush) {
    if (toPush) {
        if ((0, _helpersDatasetJs.b)(toPush)) Array.prototype.push.apply(base, toPush);
        else base.push(toPush);
    }
    return base;
}
function splitNewlines(str) {
    if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) return str.split('\n');
    return str;
}
function createTooltipItem(chart, item) {
    const { element, datasetIndex, index } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label, value } = controller.getLabelAndValue(index);
    return {
        chart,
        label,
        parsed: controller.getParsed(index),
        raw: chart.data.datasets[datasetIndex].data[index],
        formattedValue: value,
        dataset: controller.getDataset(),
        dataIndex: index,
        datasetIndex,
        element
    };
}
function getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body, footer, title } = tooltip;
    const { boxWidth, boxHeight } = options;
    const bodyFont = (0, _helpersDatasetJs.a0)(options.bodyFont);
    const titleFont = (0, _helpersDatasetJs.a0)(options.titleFont);
    const footerFont = (0, _helpersDatasetJs.a0)(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = (0, _helpersDatasetJs.E)(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem)=>count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    if (combinedBodyLength) {
        const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
        height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    let widthPadding = 0;
    const maxLineWidth = function(line) {
        width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    (0, _helpersDatasetJs.F)(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    (0, _helpersDatasetJs.F)(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    (0, _helpersDatasetJs.F)(body, (bodyItem)=>{
        (0, _helpersDatasetJs.F)(bodyItem.before, maxLineWidth);
        (0, _helpersDatasetJs.F)(bodyItem.lines, maxLineWidth);
        (0, _helpersDatasetJs.F)(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    (0, _helpersDatasetJs.F)(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
        width,
        height
    };
}
function determineYAlign(chart, size) {
    const { y, height } = size;
    if (y < height / 2) return 'top';
    else if (y > chart.height - height / 2) return 'bottom';
    return 'center';
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
    const { x, width } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === 'left' && x + width + caret > chart.width) return true;
    if (xAlign === 'right' && x - width - caret < 0) return true;
}
function determineXAlign(chart, options, size, yAlign) {
    const { x, width } = size;
    const { width: chartWidth, chartArea: { left, right } } = chart;
    let xAlign = 'center';
    if (yAlign === 'center') xAlign = x <= (left + right) / 2 ? 'left' : 'right';
    else if (x <= width / 2) xAlign = 'left';
    else if (x >= chartWidth - width / 2) xAlign = 'right';
    if (doesNotFitWithAlign(xAlign, chart, options, size)) xAlign = 'center';
    return xAlign;
}
function determineAlignment(chart, options, size) {
    const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
    return {
        xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
        yAlign
    };
}
function alignX(size, xAlign) {
    let { x, width } = size;
    if (xAlign === 'right') x -= width;
    else if (xAlign === 'center') x -= width / 2;
    return x;
}
function alignY(size, yAlign, paddingAndSize) {
    let { y, height } = size;
    if (yAlign === 'top') y += paddingAndSize;
    else if (yAlign === 'bottom') y -= height + paddingAndSize;
    else y -= height / 2;
    return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
    const { caretSize, caretPadding, cornerRadius } = options;
    const { xAlign, yAlign } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft, topRight, bottomLeft, bottomRight } = (0, _helpersDatasetJs.ax)(cornerRadius);
    let x = alignX(size, xAlign);
    const y = alignY(size, yAlign, paddingAndSize);
    if (yAlign === 'center') {
        if (xAlign === 'left') x += paddingAndSize;
        else if (xAlign === 'right') x -= paddingAndSize;
    } else if (xAlign === 'left') x -= Math.max(topLeft, bottomLeft) + caretSize;
    else if (xAlign === 'right') x += Math.max(topRight, bottomRight) + caretSize;
    return {
        x: (0, _helpersDatasetJs.S)(x, 0, chart.width - size.width),
        y: (0, _helpersDatasetJs.S)(y, 0, chart.height - size.height)
    };
}
function getAlignedX(tooltip, align, options) {
    const padding = (0, _helpersDatasetJs.E)(options.padding);
    return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
    return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
    return (0, _helpersDatasetJs.j)(parent, {
        tooltip,
        tooltipItems,
        type: 'tooltip'
    });
}
function overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
}
const defaultCallbacks = {
    beforeTitle: (0, _helpersDatasetJs.aG),
    title (tooltipItems) {
        if (tooltipItems.length > 0) {
            const item = tooltipItems[0];
            const labels = item.chart.data.labels;
            const labelCount = labels ? labels.length : 0;
            if (this && this.options && this.options.mode === 'dataset') return item.dataset.label || '';
            else if (item.label) return item.label;
            else if (labelCount > 0 && item.dataIndex < labelCount) return labels[item.dataIndex];
        }
        return '';
    },
    afterTitle: (0, _helpersDatasetJs.aG),
    beforeBody: (0, _helpersDatasetJs.aG),
    beforeLabel: (0, _helpersDatasetJs.aG),
    label (tooltipItem) {
        if (this && this.options && this.options.mode === 'dataset') return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
        let label = tooltipItem.dataset.label || '';
        if (label) label += ': ';
        const value = tooltipItem.formattedValue;
        if (!(0, _helpersDatasetJs.k)(value)) label += value;
        return label;
    },
    labelColor (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            borderColor: options.borderColor,
            backgroundColor: options.backgroundColor,
            borderWidth: options.borderWidth,
            borderDash: options.borderDash,
            borderDashOffset: options.borderDashOffset,
            borderRadius: 0
        };
    },
    labelTextColor () {
        return this.options.bodyColor;
    },
    labelPointStyle (tooltipItem) {
        const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
        const options = meta.controller.getStyle(tooltipItem.dataIndex);
        return {
            pointStyle: options.pointStyle,
            rotation: options.rotation
        };
    },
    afterLabel: (0, _helpersDatasetJs.aG),
    afterBody: (0, _helpersDatasetJs.aG),
    beforeFooter: (0, _helpersDatasetJs.aG),
    footer: (0, _helpersDatasetJs.aG),
    afterFooter: (0, _helpersDatasetJs.aG)
};
function invokeCallbackWithFallback(callbacks, name, ctx, arg) {
    const result = callbacks[name].call(ctx, arg);
    if (typeof result === 'undefined') return defaultCallbacks[name].call(ctx, arg);
    return result;
}
class Tooltip extends Element {
    static positioners = positioners;
    constructor(config){
        super();
        this.opacity = 0;
        this._active = [];
        this._eventPosition = undefined;
        this._size = undefined;
        this._cachedAnimations = undefined;
        this._tooltipItems = [];
        this.$animations = undefined;
        this.$context = undefined;
        this.chart = config.chart;
        this.options = config.options;
        this.dataPoints = undefined;
        this.title = undefined;
        this.beforeBody = undefined;
        this.body = undefined;
        this.afterBody = undefined;
        this.footer = undefined;
        this.xAlign = undefined;
        this.yAlign = undefined;
        this.x = undefined;
        this.y = undefined;
        this.height = undefined;
        this.width = undefined;
        this.caretX = undefined;
        this.caretY = undefined;
        this.labelColors = undefined;
        this.labelPointStyles = undefined;
        this.labelTextColors = undefined;
    }
    initialize(options) {
        this.options = options;
        this._cachedAnimations = undefined;
        this.$context = undefined;
    }
    _resolveAnimations() {
        const cached = this._cachedAnimations;
        if (cached) return cached;
        const chart = this.chart;
        const options = this.options.setContext(this.getContext());
        const opts = options.enabled && chart.options.animation && options.animations;
        const animations = new Animations(this.chart, opts);
        if (opts._cacheable) this._cachedAnimations = Object.freeze(animations);
        return animations;
    }
    getContext() {
        return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
        const { callbacks } = options;
        const beforeTitle = invokeCallbackWithFallback(callbacks, 'beforeTitle', this, context);
        const title = invokeCallbackWithFallback(callbacks, 'title', this, context);
        const afterTitle = invokeCallbackWithFallback(callbacks, 'afterTitle', this, context);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeTitle));
        lines = pushOrConcat(lines, splitNewlines(title));
        lines = pushOrConcat(lines, splitNewlines(afterTitle));
        return lines;
    }
    getBeforeBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'beforeBody', this, tooltipItems));
    }
    getBody(tooltipItems, options) {
        const { callbacks } = options;
        const bodyItems = [];
        (0, _helpersDatasetJs.F)(tooltipItems, (context)=>{
            const bodyItem = {
                before: [],
                lines: [],
                after: []
            };
            const scoped = overrideCallbacks(callbacks, context);
            pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, 'beforeLabel', this, context)));
            pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, 'label', this, context));
            pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, 'afterLabel', this, context)));
            bodyItems.push(bodyItem);
        });
        return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
        return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'afterBody', this, tooltipItems));
    }
    getFooter(tooltipItems, options) {
        const { callbacks } = options;
        const beforeFooter = invokeCallbackWithFallback(callbacks, 'beforeFooter', this, tooltipItems);
        const footer = invokeCallbackWithFallback(callbacks, 'footer', this, tooltipItems);
        const afterFooter = invokeCallbackWithFallback(callbacks, 'afterFooter', this, tooltipItems);
        let lines = [];
        lines = pushOrConcat(lines, splitNewlines(beforeFooter));
        lines = pushOrConcat(lines, splitNewlines(footer));
        lines = pushOrConcat(lines, splitNewlines(afterFooter));
        return lines;
    }
    _createItems(options) {
        const active = this._active;
        const data = this.chart.data;
        const labelColors = [];
        const labelPointStyles = [];
        const labelTextColors = [];
        let tooltipItems = [];
        let i, len;
        for(i = 0, len = active.length; i < len; ++i)tooltipItems.push(createTooltipItem(this.chart, active[i]));
        if (options.filter) tooltipItems = tooltipItems.filter((element, index, array)=>options.filter(element, index, array, data));
        if (options.itemSort) tooltipItems = tooltipItems.sort((a, b)=>options.itemSort(a, b, data));
        (0, _helpersDatasetJs.F)(tooltipItems, (context)=>{
            const scoped = overrideCallbacks(options.callbacks, context);
            labelColors.push(invokeCallbackWithFallback(scoped, 'labelColor', this, context));
            labelPointStyles.push(invokeCallbackWithFallback(scoped, 'labelPointStyle', this, context));
            labelTextColors.push(invokeCallbackWithFallback(scoped, 'labelTextColor', this, context));
        });
        this.labelColors = labelColors;
        this.labelPointStyles = labelPointStyles;
        this.labelTextColors = labelTextColors;
        this.dataPoints = tooltipItems;
        return tooltipItems;
    }
    update(changed, replay) {
        const options = this.options.setContext(this.getContext());
        const active = this._active;
        let properties;
        let tooltipItems = [];
        if (!active.length) {
            if (this.opacity !== 0) properties = {
                opacity: 0
            };
        } else {
            const position = positioners[options.position].call(this, active, this._eventPosition);
            tooltipItems = this._createItems(options);
            this.title = this.getTitle(tooltipItems, options);
            this.beforeBody = this.getBeforeBody(tooltipItems, options);
            this.body = this.getBody(tooltipItems, options);
            this.afterBody = this.getAfterBody(tooltipItems, options);
            this.footer = this.getFooter(tooltipItems, options);
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, size);
            const alignment = determineAlignment(this.chart, options, positionAndSize);
            const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
            this.xAlign = alignment.xAlign;
            this.yAlign = alignment.yAlign;
            properties = {
                opacity: 1,
                x: backgroundPoint.x,
                y: backgroundPoint.y,
                width: size.width,
                height: size.height,
                caretX: position.x,
                caretY: position.y
            };
        }
        this._tooltipItems = tooltipItems;
        this.$context = undefined;
        if (properties) this._resolveAnimations().update(this, properties);
        if (changed && options.external) options.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay
        });
    }
    drawCaret(tooltipPoint, ctx, size, options) {
        const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
        ctx.lineTo(caretPosition.x1, caretPosition.y1);
        ctx.lineTo(caretPosition.x2, caretPosition.y2);
        ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
        const { xAlign, yAlign } = this;
        const { caretSize, cornerRadius } = options;
        const { topLeft, topRight, bottomLeft, bottomRight } = (0, _helpersDatasetJs.ax)(cornerRadius);
        const { x: ptX, y: ptY } = tooltipPoint;
        const { width, height } = size;
        let x1, x2, x3, y1, y2, y3;
        if (yAlign === 'center') {
            y2 = ptY + height / 2;
            if (xAlign === 'left') {
                x1 = ptX;
                x2 = x1 - caretSize;
                y1 = y2 + caretSize;
                y3 = y2 - caretSize;
            } else {
                x1 = ptX + width;
                x2 = x1 + caretSize;
                y1 = y2 - caretSize;
                y3 = y2 + caretSize;
            }
            x3 = x1;
        } else {
            if (xAlign === 'left') x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
            else if (xAlign === 'right') x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
            else x2 = this.caretX;
            if (yAlign === 'top') {
                y1 = ptY;
                y2 = y1 - caretSize;
                x1 = x2 - caretSize;
                x3 = x2 + caretSize;
            } else {
                y1 = ptY + height;
                y2 = y1 + caretSize;
                x1 = x2 + caretSize;
                x3 = x2 - caretSize;
            }
            y3 = y1;
        }
        return {
            x1,
            x2,
            x3,
            y1,
            y2,
            y3
        };
    }
    drawTitle(pt, ctx, options) {
        const title = this.title;
        const length = title.length;
        let titleFont, titleSpacing, i;
        if (length) {
            const rtlHelper = (0, _helpersDatasetJs.aA)(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.titleAlign, options);
            ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
            ctx.textBaseline = 'middle';
            titleFont = (0, _helpersDatasetJs.a0)(options.titleFont);
            titleSpacing = options.titleSpacing;
            ctx.fillStyle = options.titleColor;
            ctx.font = titleFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
                pt.y += titleFont.lineHeight + titleSpacing;
                if (i + 1 === length) pt.y += options.titleMarginBottom - titleSpacing;
            }
        }
    }
    _drawColorBox(ctx, pt, i, rtlHelper, options) {
        const labelColor = this.labelColors[i];
        const labelPointStyle = this.labelPointStyles[i];
        const { boxHeight, boxWidth } = options;
        const bodyFont = (0, _helpersDatasetJs.a0)(options.bodyFont);
        const colorX = getAlignedX(this, 'left', options);
        const rtlColorX = rtlHelper.x(colorX);
        const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
        const colorY = pt.y + yOffSet;
        if (options.usePointStyle) {
            const drawOptions = {
                radius: Math.min(boxWidth, boxHeight) / 2,
                pointStyle: labelPointStyle.pointStyle,
                rotation: labelPointStyle.rotation,
                borderWidth: 1
            };
            const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
            const centerY = colorY + boxHeight / 2;
            ctx.strokeStyle = options.multiKeyBackground;
            ctx.fillStyle = options.multiKeyBackground;
            (0, _helpersDatasetJs.au)(ctx, drawOptions, centerX, centerY);
            ctx.strokeStyle = labelColor.borderColor;
            ctx.fillStyle = labelColor.backgroundColor;
            (0, _helpersDatasetJs.au)(ctx, drawOptions, centerX, centerY);
        } else {
            ctx.lineWidth = (0, _helpersDatasetJs.i)(labelColor.borderWidth) ? Math.max(...Object.values(labelColor.borderWidth)) : labelColor.borderWidth || 1;
            ctx.strokeStyle = labelColor.borderColor;
            ctx.setLineDash(labelColor.borderDash || []);
            ctx.lineDashOffset = labelColor.borderDashOffset || 0;
            const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
            const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
            const borderRadius = (0, _helpersDatasetJs.ax)(labelColor.borderRadius);
            if (Object.values(borderRadius).some((v)=>v !== 0)) {
                ctx.beginPath();
                ctx.fillStyle = options.multiKeyBackground;
                (0, _helpersDatasetJs.av)(ctx, {
                    x: outerX,
                    y: colorY,
                    w: boxWidth,
                    h: boxHeight,
                    radius: borderRadius
                });
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = labelColor.backgroundColor;
                ctx.beginPath();
                (0, _helpersDatasetJs.av)(ctx, {
                    x: innerX,
                    y: colorY + 1,
                    w: boxWidth - 2,
                    h: boxHeight - 2,
                    radius: borderRadius
                });
                ctx.fill();
            } else {
                ctx.fillStyle = options.multiKeyBackground;
                ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
                ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
                ctx.fillStyle = labelColor.backgroundColor;
                ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
            }
        }
        ctx.fillStyle = this.labelTextColors[i];
    }
    drawBody(pt, ctx, options) {
        const { body } = this;
        const { bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth, boxPadding } = options;
        const bodyFont = (0, _helpersDatasetJs.a0)(options.bodyFont);
        let bodyLineHeight = bodyFont.lineHeight;
        let xLinePadding = 0;
        const rtlHelper = (0, _helpersDatasetJs.aA)(options.rtl, this.x, this.width);
        const fillLineOfText = function(line) {
            ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
            pt.y += bodyLineHeight + bodySpacing;
        };
        const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
        let bodyItem, textColor, lines, i, j, ilen, jlen;
        ctx.textAlign = bodyAlign;
        ctx.textBaseline = 'middle';
        ctx.font = bodyFont.string;
        pt.x = getAlignedX(this, bodyAlignForCalculation, options);
        ctx.fillStyle = options.bodyColor;
        (0, _helpersDatasetJs.F)(this.beforeBody, fillLineOfText);
        xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
        for(i = 0, ilen = body.length; i < ilen; ++i){
            bodyItem = body[i];
            textColor = this.labelTextColors[i];
            ctx.fillStyle = textColor;
            (0, _helpersDatasetJs.F)(bodyItem.before, fillLineOfText);
            lines = bodyItem.lines;
            if (displayColors && lines.length) {
                this._drawColorBox(ctx, pt, i, rtlHelper, options);
                bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
            }
            for(j = 0, jlen = lines.length; j < jlen; ++j){
                fillLineOfText(lines[j]);
                bodyLineHeight = bodyFont.lineHeight;
            }
            (0, _helpersDatasetJs.F)(bodyItem.after, fillLineOfText);
        }
        xLinePadding = 0;
        bodyLineHeight = bodyFont.lineHeight;
        (0, _helpersDatasetJs.F)(this.afterBody, fillLineOfText);
        pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
        const footer = this.footer;
        const length = footer.length;
        let footerFont, i;
        if (length) {
            const rtlHelper = (0, _helpersDatasetJs.aA)(options.rtl, this.x, this.width);
            pt.x = getAlignedX(this, options.footerAlign, options);
            pt.y += options.footerMarginTop;
            ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
            ctx.textBaseline = 'middle';
            footerFont = (0, _helpersDatasetJs.a0)(options.footerFont);
            ctx.fillStyle = options.footerColor;
            ctx.font = footerFont.string;
            for(i = 0; i < length; ++i){
                ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
                pt.y += footerFont.lineHeight + options.footerSpacing;
            }
        }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
        const { xAlign, yAlign } = this;
        const { x, y } = pt;
        const { width, height } = tooltipSize;
        const { topLeft, topRight, bottomLeft, bottomRight } = (0, _helpersDatasetJs.ax)(options.cornerRadius);
        ctx.fillStyle = options.backgroundColor;
        ctx.strokeStyle = options.borderColor;
        ctx.lineWidth = options.borderWidth;
        ctx.beginPath();
        ctx.moveTo(x + topLeft, y);
        if (yAlign === 'top') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width - topRight, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
        if (yAlign === 'center' && xAlign === 'right') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + width, y + height - bottomRight);
        ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
        if (yAlign === 'bottom') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x + bottomLeft, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
        if (yAlign === 'center' && xAlign === 'left') this.drawCaret(pt, ctx, tooltipSize, options);
        ctx.lineTo(x, y + topLeft);
        ctx.quadraticCurveTo(x, y, x + topLeft, y);
        ctx.closePath();
        ctx.fill();
        if (options.borderWidth > 0) ctx.stroke();
    }
    _updateAnimationTarget(options) {
        const chart = this.chart;
        const anims = this.$animations;
        const animX = anims && anims.x;
        const animY = anims && anims.y;
        if (animX || animY) {
            const position = positioners[options.position].call(this, this._active, this._eventPosition);
            if (!position) return;
            const size = this._size = getTooltipSize(this, options);
            const positionAndSize = Object.assign({}, position, this._size);
            const alignment = determineAlignment(chart, options, positionAndSize);
            const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
            if (animX._to !== point.x || animY._to !== point.y) {
                this.xAlign = alignment.xAlign;
                this.yAlign = alignment.yAlign;
                this.width = size.width;
                this.height = size.height;
                this.caretX = position.x;
                this.caretY = position.y;
                this._resolveAnimations().update(this, point);
            }
        }
    }
    _willRender() {
        return !!this.opacity;
    }
    draw(ctx) {
        const options = this.options.setContext(this.getContext());
        let opacity = this.opacity;
        if (!opacity) return;
        this._updateAnimationTarget(options);
        const tooltipSize = {
            width: this.width,
            height: this.height
        };
        const pt = {
            x: this.x,
            y: this.y
        };
        opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
        const padding = (0, _helpersDatasetJs.E)(options.padding);
        const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        if (options.enabled && hasTooltipContent) {
            ctx.save();
            ctx.globalAlpha = opacity;
            this.drawBackground(pt, ctx, tooltipSize, options);
            (0, _helpersDatasetJs.aB)(ctx, options.textDirection);
            pt.y += padding.top;
            this.drawTitle(pt, ctx, options);
            this.drawBody(pt, ctx, options);
            this.drawFooter(pt, ctx, options);
            (0, _helpersDatasetJs.aD)(ctx, options.textDirection);
            ctx.restore();
        }
    }
    getActiveElements() {
        return this._active || [];
    }
    setActiveElements(activeElements, eventPosition) {
        const lastActive = this._active;
        const active = activeElements.map(({ datasetIndex, index })=>{
            const meta = this.chart.getDatasetMeta(datasetIndex);
            if (!meta) throw new Error('Cannot find a dataset at index ' + datasetIndex);
            return {
                datasetIndex,
                element: meta.data[index],
                index
            };
        });
        const changed = !(0, _helpersDatasetJs.ai)(lastActive, active);
        const positionChanged = this._positionChanged(active, eventPosition);
        if (changed || positionChanged) {
            this._active = active;
            this._eventPosition = eventPosition;
            this._ignoreReplayEvents = true;
            this.update(true);
        }
    }
    handleEvent(e, replay, inChartArea = true) {
        if (replay && this._ignoreReplayEvents) return false;
        this._ignoreReplayEvents = false;
        const options = this.options;
        const lastActive = this._active || [];
        const active = this._getActiveElements(e, lastActive, replay, inChartArea);
        const positionChanged = this._positionChanged(active, e);
        const changed = replay || !(0, _helpersDatasetJs.ai)(active, lastActive) || positionChanged;
        if (changed) {
            this._active = active;
            if (options.enabled || options.external) {
                this._eventPosition = {
                    x: e.x,
                    y: e.y
                };
                this.update(true, replay);
            }
        }
        return changed;
    }
    _getActiveElements(e, lastActive, replay, inChartArea) {
        const options = this.options;
        if (e.type === 'mouseout') return [];
        if (!inChartArea) return lastActive.filter((i)=>this.chart.data.datasets[i.datasetIndex] && this.chart.getDatasetMeta(i.datasetIndex).controller.getParsed(i.index) !== undefined);
        const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
        if (options.reverse) active.reverse();
        return active;
    }
    _positionChanged(active, e) {
        const { caretX, caretY, options } = this;
        const position = positioners[options.position].call(this, active, e);
        return position !== false && (caretX !== position.x || caretY !== position.y);
    }
}
var plugin_tooltip = {
    id: 'tooltip',
    _element: Tooltip,
    positioners,
    afterInit (chart, _args, options) {
        if (options) chart.tooltip = new Tooltip({
            chart,
            options
        });
    },
    beforeUpdate (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    reset (chart, _args, options) {
        if (chart.tooltip) chart.tooltip.initialize(options);
    },
    afterDraw (chart) {
        const tooltip = chart.tooltip;
        if (tooltip && tooltip._willRender()) {
            const args = {
                tooltip
            };
            if (chart.notifyPlugins('beforeTooltipDraw', {
                ...args,
                cancelable: true
            }) === false) return;
            tooltip.draw(chart.ctx);
            chart.notifyPlugins('afterTooltipDraw', args);
        }
    },
    afterEvent (chart, args) {
        if (chart.tooltip) {
            const useFinalPosition = args.replay;
            if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) args.changed = true;
        }
    },
    defaults: {
        enabled: true,
        external: null,
        position: 'average',
        backgroundColor: 'rgba(0,0,0,0.8)',
        titleColor: '#fff',
        titleFont: {
            weight: 'bold'
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: 'left',
        bodyColor: '#fff',
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: 'left',
        footerColor: '#fff',
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: 'bold'
        },
        footerAlign: 'left',
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (ctx, opts)=>opts.bodyFont.size,
        boxWidth: (ctx, opts)=>opts.bodyFont.size,
        multiKeyBackground: '#fff',
        displayColors: true,
        boxPadding: 0,
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: 'easeOutQuart'
        },
        animations: {
            numbers: {
                type: 'number',
                properties: [
                    'x',
                    'y',
                    'width',
                    'height',
                    'caretX',
                    'caretY'
                ]
            },
            opacity: {
                easing: 'linear',
                duration: 200
            }
        },
        callbacks: defaultCallbacks
    },
    defaultRoutes: {
        bodyFont: 'font',
        footerFont: 'font',
        titleFont: 'font'
    },
    descriptors: {
        _scriptable: (name)=>name !== 'filter' && name !== 'itemSort' && name !== 'external',
        _indexable: false,
        callbacks: {
            _scriptable: false,
            _indexable: false
        },
        animation: {
            _fallback: false
        },
        animations: {
            _fallback: 'animation'
        }
    },
    additionalOptionScopes: [
        'interaction'
    ]
};
var plugins = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Colors: plugin_colors,
    Decimation: plugin_decimation,
    Filler: index,
    Legend: plugin_legend,
    SubTitle: plugin_subtitle,
    Title: plugin_title,
    Tooltip: plugin_tooltip
});
const addIfString = (labels, raw, index, addedLabels)=>{
    if (typeof raw === 'string') {
        index = labels.push(raw) - 1;
        addedLabels.unshift({
            index,
            label: raw
        });
    } else if (isNaN(raw)) index = null;
    return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) return addIfString(labels, raw, index, addedLabels);
    const last = labels.lastIndexOf(raw);
    return first !== last ? index : first;
}
const validIndex = (index, max)=>index === null ? null : (0, _helpersDatasetJs.S)(Math.round(index), 0, max);
function _getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) return labels[value];
    return value;
}
class CategoryScale extends Scale {
    static id = 'category';
    static defaults = {
        ticks: {
            callback: _getLabelForValue
        }
    };
    constructor(cfg){
        super(cfg);
        this._startValue = undefined;
        this._valueRange = 0;
        this._addedLabels = [];
    }
    init(scaleOptions) {
        const added = this._addedLabels;
        if (added.length) {
            const labels = this.getLabels();
            for (const { index, label } of added)if (labels[index] === label) labels.splice(index, 1);
            this._addedLabels = [];
        }
        super.init(scaleOptions);
    }
    parse(raw, index) {
        if ((0, _helpersDatasetJs.k)(raw)) return null;
        const labels = this.getLabels();
        index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, (0, _helpersDatasetJs.v)(index, raw), this._addedLabels);
        return validIndex(index, labels.length - 1);
    }
    determineDataLimits() {
        const { minDefined, maxDefined } = this.getUserBounds();
        let { min, max } = this.getMinMax(true);
        if (this.options.bounds === 'ticks') {
            if (!minDefined) min = 0;
            if (!maxDefined) max = this.getLabels().length - 1;
        }
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const min = this.min;
        const max = this.max;
        const offset = this.options.offset;
        const ticks = [];
        let labels = this.getLabels();
        labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
        this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
        this._startValue = this.min - (offset ? 0.5 : 0);
        for(let value = min; value <= max; value++)ticks.push({
            value
        });
        return ticks;
    }
    getLabelForValue(value) {
        return _getLabelForValue.call(this, value);
    }
    configure() {
        super.configure();
        if (!this.isHorizontal()) this._reversePixels = !this._reversePixels;
    }
    getPixelForValue(value) {
        if (typeof value !== 'number') value = this.parse(value);
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index) {
        const ticks = this.ticks;
        if (index < 0 || index > ticks.length - 1) return null;
        return this.getPixelForValue(ticks[index].value);
    }
    getValueForPixel(pixel) {
        return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
        return this.bottom;
    }
}
function generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin, max: rmax } = dataRange;
    const minDefined = !(0, _helpersDatasetJs.k)(min);
    const maxDefined = !(0, _helpersDatasetJs.k)(max);
    const countDefined = !(0, _helpersDatasetJs.k)(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = (0, _helpersDatasetJs.aI)((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) return [
        {
            value: rmin
        },
        {
            value: rmax
        }
    ];
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) spacing = (0, _helpersDatasetJs.aI)(numSpaces * spacing / maxSpaces / unit) * unit;
    if (!(0, _helpersDatasetJs.k)(precision)) {
        factor = Math.pow(10, precision);
        spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === 'ticks') {
        niceMin = Math.floor(rmin / spacing) * spacing;
        niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
        niceMin = rmin;
        niceMax = rmax;
    }
    if (minDefined && maxDefined && step && (0, _helpersDatasetJs.aJ)((max - min) / step, spacing / 1000)) {
        numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
        spacing = (max - min) / numSpaces;
        niceMin = min;
        niceMax = max;
    } else if (countDefined) {
        niceMin = minDefined ? min : niceMin;
        niceMax = maxDefined ? max : niceMax;
        numSpaces = count - 1;
        spacing = (niceMax - niceMin) / numSpaces;
    } else {
        numSpaces = (niceMax - niceMin) / spacing;
        if ((0, _helpersDatasetJs.aK)(numSpaces, Math.round(numSpaces), spacing / 1000)) numSpaces = Math.round(numSpaces);
        else numSpaces = Math.ceil(numSpaces);
    }
    const decimalPlaces = Math.max((0, _helpersDatasetJs.aL)(spacing), (0, _helpersDatasetJs.aL)(niceMin));
    factor = Math.pow(10, (0, _helpersDatasetJs.k)(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j = 0;
    if (minDefined) {
        if (includeBounds && niceMin !== min) {
            ticks.push({
                value: min
            });
            if (niceMin < min) j++;
            if ((0, _helpersDatasetJs.aK)(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) j++;
        } else if (niceMin < min) j++;
    }
    for(; j < numSpaces; ++j){
        const tickValue = Math.round((niceMin + j * spacing) * factor) / factor;
        if (maxDefined && tickValue > max) break;
        ticks.push({
            value: tickValue
        });
    }
    if (maxDefined && includeBounds && niceMax !== max) {
        if (ticks.length && (0, _helpersDatasetJs.aK)(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) ticks[ticks.length - 1].value = max;
        else ticks.push({
            value: max
        });
    } else if (!maxDefined || niceMax === max) ticks.push({
        value: niceMax
    });
    return ticks;
}
function relativeLabelSize(value, minSpacing, { horizontal, minRotation }) {
    const rad = (0, _helpersDatasetJs.t)(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
    const length = 0.75 * minSpacing * ('' + value).length;
    return Math.min(minSpacing / ratio, length);
}
class LinearScaleBase extends Scale {
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._endValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        if ((0, _helpersDatasetJs.k)(raw)) return null;
        if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) return null;
        return +raw;
    }
    handleTickRangeOptions() {
        const { beginAtZero } = this.options;
        const { minDefined, maxDefined } = this.getUserBounds();
        let { min, max } = this;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (beginAtZero) {
            const minSign = (0, _helpersDatasetJs.s)(min);
            const maxSign = (0, _helpersDatasetJs.s)(max);
            if (minSign < 0 && maxSign < 0) setMax(0);
            else if (minSign > 0 && maxSign > 0) setMin(0);
        }
        if (min === max) {
            let offset = max === 0 ? 1 : Math.abs(max * 0.05);
            setMax(max + offset);
            if (!beginAtZero) setMin(min - offset);
        }
        this.min = min;
        this.max = max;
    }
    getTickLimit() {
        const tickOpts = this.options.ticks;
        let { maxTicksLimit, stepSize } = tickOpts;
        let maxTicks;
        if (stepSize) {
            maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
            if (maxTicks > 1000) {
                console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
                maxTicks = 1000;
            }
        } else {
            maxTicks = this.computeTickLimit();
            maxTicksLimit = maxTicksLimit || 11;
        }
        if (maxTicksLimit) maxTicks = Math.min(maxTicksLimit, maxTicks);
        return maxTicks;
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
        const opts = this.options;
        const tickOpts = opts.ticks;
        let maxTicks = this.getTickLimit();
        maxTicks = Math.max(2, maxTicks);
        const numericGeneratorOptions = {
            maxTicks,
            bounds: opts.bounds,
            min: opts.min,
            max: opts.max,
            precision: tickOpts.precision,
            step: tickOpts.stepSize,
            count: tickOpts.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: tickOpts.minRotation || 0,
            includeBounds: tickOpts.includeBounds !== false
        };
        const dataRange = this._range || this;
        const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
        if (opts.bounds === 'ticks') (0, _helpersDatasetJs.aH)(ticks, this, 'value');
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    configure() {
        const ticks = this.ticks;
        let start = this.min;
        let end = this.max;
        super.configure();
        if (this.options.offset && ticks.length) {
            const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
            start -= offset;
            end += offset;
        }
        this._startValue = start;
        this._endValue = end;
        this._valueRange = end - start;
    }
    getLabelForValue(value) {
        return (0, _helpersDatasetJs.o)(value, this.chart.options.locale, this.options.ticks.format);
    }
}
class LinearScale extends LinearScaleBase {
    static id = 'linear';
    static defaults = {
        ticks: {
            callback: (0, _helpersDatasetJs.aM).formatters.numeric
        }
    };
    determineDataLimits() {
        const { min, max } = this.getMinMax(true);
        this.min = (0, _helpersDatasetJs.g)(min) ? min : 0;
        this.max = (0, _helpersDatasetJs.g)(max) ? max : 1;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        const horizontal = this.isHorizontal();
        const length = horizontal ? this.width : this.height;
        const minRotation = (0, _helpersDatasetJs.t)(this.options.ticks.minRotation);
        const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
        const tickFont = this._resolveTickFontOptions(0);
        return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
        return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
}
const log10Floor = (v)=>Math.floor((0, _helpersDatasetJs.aN)(v));
const changeExponent = (v, m)=>Math.pow(10, log10Floor(v) + m);
function isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, log10Floor(tickVal));
    return remain === 1;
}
function steps(min, max, rangeExp) {
    const rangeStep = Math.pow(10, rangeExp);
    const start = Math.floor(min / rangeStep);
    const end = Math.ceil(max / rangeStep);
    return end - start;
}
function startExp(min, max) {
    const range = max - min;
    let rangeExp = log10Floor(range);
    while(steps(min, max, rangeExp) > 10)rangeExp++;
    while(steps(min, max, rangeExp) < 10)rangeExp--;
    return Math.min(rangeExp, log10Floor(min));
}
function generateTicks(generationOptions, { min, max }) {
    min = (0, _helpersDatasetJs.O)(generationOptions.min, min);
    const ticks = [];
    const minExp = log10Floor(min);
    let exp = startExp(min, max);
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    const stepSize = Math.pow(10, exp);
    const base = minExp > exp ? Math.pow(10, minExp) : 0;
    const start = Math.round((min - base) * precision) / precision;
    const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
    let significand = Math.floor((start - offset) / Math.pow(10, exp));
    let value = (0, _helpersDatasetJs.O)(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
    while(value < max){
        ticks.push({
            value,
            major: isMajor(value),
            significand
        });
        if (significand >= 10) significand = significand < 15 ? 15 : 20;
        else significand++;
        if (significand >= 20) {
            exp++;
            significand = 2;
            precision = exp >= 0 ? 1 : precision;
        }
        value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
    }
    const lastTick = (0, _helpersDatasetJs.O)(generationOptions.max, value);
    ticks.push({
        value: lastTick,
        major: isMajor(lastTick),
        significand
    });
    return ticks;
}
class LogarithmicScale extends Scale {
    static id = 'logarithmic';
    static defaults = {
        ticks: {
            callback: (0, _helpersDatasetJs.aM).formatters.logarithmic,
            major: {
                enabled: true
            }
        }
    };
    constructor(cfg){
        super(cfg);
        this.start = undefined;
        this.end = undefined;
        this._startValue = undefined;
        this._valueRange = 0;
    }
    parse(raw, index) {
        const value = LinearScaleBase.prototype.parse.apply(this, [
            raw,
            index
        ]);
        if (value === 0) {
            this._zero = true;
            return undefined;
        }
        return (0, _helpersDatasetJs.g)(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
        const { min, max } = this.getMinMax(true);
        this.min = (0, _helpersDatasetJs.g)(min) ? Math.max(0, min) : null;
        this.max = (0, _helpersDatasetJs.g)(max) ? Math.max(0, max) : null;
        if (this.options.beginAtZero) this._zero = true;
        if (this._zero && this.min !== this._suggestedMin && !(0, _helpersDatasetJs.g)(this._userMin)) this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
        this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
        const { minDefined, maxDefined } = this.getUserBounds();
        let min = this.min;
        let max = this.max;
        const setMin = (v)=>min = minDefined ? min : v;
        const setMax = (v)=>max = maxDefined ? max : v;
        if (min === max) {
            if (min <= 0) {
                setMin(1);
                setMax(10);
            } else {
                setMin(changeExponent(min, -1));
                setMax(changeExponent(max, 1));
            }
        }
        if (min <= 0) setMin(changeExponent(max, -1));
        if (max <= 0) setMax(changeExponent(min, 1));
        this.min = min;
        this.max = max;
    }
    buildTicks() {
        const opts = this.options;
        const generationOptions = {
            min: this._userMin,
            max: this._userMax
        };
        const ticks = generateTicks(generationOptions, this);
        if (opts.bounds === 'ticks') (0, _helpersDatasetJs.aH)(ticks, this, 'value');
        if (opts.reverse) {
            ticks.reverse();
            this.start = this.max;
            this.end = this.min;
        } else {
            this.start = this.min;
            this.end = this.max;
        }
        return ticks;
    }
    getLabelForValue(value) {
        return value === undefined ? '0' : (0, _helpersDatasetJs.o)(value, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
        const start = this.min;
        super.configure();
        this._startValue = (0, _helpersDatasetJs.aN)(start);
        this._valueRange = (0, _helpersDatasetJs.aN)(this.max) - (0, _helpersDatasetJs.aN)(start);
    }
    getPixelForValue(value) {
        if (value === undefined || value === 0) value = this.min;
        if (value === null || isNaN(value)) return NaN;
        return this.getPixelForDecimal(value === this.min ? 0 : ((0, _helpersDatasetJs.aN)(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
        const decimal = this.getDecimalForPixel(pixel);
        return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
}
function getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
        const padding = (0, _helpersDatasetJs.E)(tickOpts.backdropPadding);
        return (0, _helpersDatasetJs.v)(tickOpts.font && tickOpts.font.size, (0, _helpersDatasetJs.d).font.size) + padding.height;
    }
    return 0;
}
function measureLabelSize(ctx, font, label) {
    label = (0, _helpersDatasetJs.b)(label) ? label : [
        label
    ];
    return {
        w: (0, _helpersDatasetJs.aO)(ctx, font.string, label),
        h: label.length * font.lineHeight
    };
}
function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) return {
        start: pos - size / 2,
        end: pos + size / 2
    };
    else if (angle < min || angle > max) return {
        start: pos - size,
        end: pos
    };
    return {
        start: pos,
        end: pos + size
    };
}
function fitWithPointLabels(scale) {
    const orig = {
        l: scale.left + scale._padding.left,
        r: scale.right - scale._padding.right,
        t: scale.top + scale._padding.top,
        b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? (0, _helpersDatasetJs.P) / valueCount : 0;
    for(let i = 0; i < valueCount; i++){
        const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
        padding[i] = opts.padding;
        const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
        const plFont = (0, _helpersDatasetJs.a0)(opts.font);
        const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
        labelSizes[i] = textSize;
        const angleRadians = (0, _helpersDatasetJs.az)(scale.getIndexAngle(i) + additionalAngle);
        const angle = Math.round((0, _helpersDatasetJs.U)(angleRadians));
        const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
        const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
        updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x = 0;
    let y = 0;
    if (hLimits.start < orig.l) {
        x = (orig.l - hLimits.start) / sin;
        limits.l = Math.min(limits.l, orig.l - x);
    } else if (hLimits.end > orig.r) {
        x = (hLimits.end - orig.r) / sin;
        limits.r = Math.max(limits.r, orig.r + x);
    }
    if (vLimits.start < orig.t) {
        y = (orig.t - vLimits.start) / cos;
        limits.t = Math.min(limits.t, orig.t - y);
    } else if (vLimits.end > orig.b) {
        y = (vLimits.end - orig.b) / cos;
        limits.b = Math.max(limits.b, orig.b + y);
    }
}
function createPointLabelItem(scale, index, itemOpts) {
    const outerDistance = scale.drawingArea;
    const { extra, additionalAngle, padding, size } = itemOpts;
    const pointLabelPosition = scale.getPointPosition(index, outerDistance + extra + padding, additionalAngle);
    const angle = Math.round((0, _helpersDatasetJs.U)((0, _helpersDatasetJs.az)(pointLabelPosition.angle + (0, _helpersDatasetJs.H))));
    const y = yForAngle(pointLabelPosition.y, size.h, angle);
    const textAlign = getTextAlignForAngle(angle);
    const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
    return {
        visible: true,
        x: pointLabelPosition.x,
        y,
        textAlign,
        left,
        top: y,
        right: left + size.w,
        bottom: y + size.h
    };
}
function isNotOverlapped(item, area) {
    if (!area) return true;
    const { left, top, right, bottom } = item;
    const apexesInArea = (0, _helpersDatasetJs.C)({
        x: left,
        y: top
    }, area) || (0, _helpersDatasetJs.C)({
        x: left,
        y: bottom
    }, area) || (0, _helpersDatasetJs.C)({
        x: right,
        y: top
    }, area) || (0, _helpersDatasetJs.C)({
        x: right,
        y: bottom
    }, area);
    return !apexesInArea;
}
function buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const { centerPointLabels, display } = opts.pointLabels;
    const itemOpts = {
        extra: getTickBackdropHeight(opts) / 2,
        additionalAngle: centerPointLabels ? (0, _helpersDatasetJs.P) / valueCount : 0
    };
    let area;
    for(let i = 0; i < valueCount; i++){
        itemOpts.padding = padding[i];
        itemOpts.size = labelSizes[i];
        const item = createPointLabelItem(scale, i, itemOpts);
        items.push(item);
        if (display === 'auto') {
            item.visible = isNotOverlapped(item, area);
            if (item.visible) area = item;
        }
    }
    return items;
}
function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) return 'center';
    else if (angle < 180) return 'left';
    return 'right';
}
function leftForTextAlign(x, w, align) {
    if (align === 'right') x -= w;
    else if (align === 'center') x -= w / 2;
    return x;
}
function yForAngle(y, h, angle) {
    if (angle === 90 || angle === 270) y -= h / 2;
    else if (angle > 270 || angle < 90) y -= h;
    return y;
}
function drawPointLabelBox(ctx, opts, item) {
    const { left, top, right, bottom } = item;
    const { backdropColor } = opts;
    if (!(0, _helpersDatasetJs.k)(backdropColor)) {
        const borderRadius = (0, _helpersDatasetJs.ax)(opts.borderRadius);
        const padding = (0, _helpersDatasetJs.E)(opts.backdropPadding);
        ctx.fillStyle = backdropColor;
        const backdropLeft = left - padding.left;
        const backdropTop = top - padding.top;
        const backdropWidth = right - left + padding.width;
        const backdropHeight = bottom - top + padding.height;
        if (Object.values(borderRadius).some((v)=>v !== 0)) {
            ctx.beginPath();
            (0, _helpersDatasetJs.av)(ctx, {
                x: backdropLeft,
                y: backdropTop,
                w: backdropWidth,
                h: backdropHeight,
                radius: borderRadius
            });
            ctx.fill();
        } else ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
    }
}
function drawPointLabels(scale, labelCount) {
    const { ctx, options: { pointLabels } } = scale;
    for(let i = labelCount - 1; i >= 0; i--){
        const item = scale._pointLabelItems[i];
        if (!item.visible) continue;
        const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
        drawPointLabelBox(ctx, optsAtIndex, item);
        const plFont = (0, _helpersDatasetJs.a0)(optsAtIndex.font);
        const { x, y, textAlign } = item;
        (0, _helpersDatasetJs.Z)(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
            color: optsAtIndex.color,
            textAlign: textAlign,
            textBaseline: 'middle'
        });
    }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx } = scale;
    if (circular) ctx.arc(scale.xCenter, scale.yCenter, radius, 0, (0, _helpersDatasetJs.T));
    else {
        let pointPosition = scale.getPointPosition(0, radius);
        ctx.moveTo(pointPosition.x, pointPosition.y);
        for(let i = 1; i < labelCount; i++){
            pointPosition = scale.getPointPosition(i, radius);
            ctx.lineTo(pointPosition.x, pointPosition.y);
        }
    }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color, lineWidth } = gridLineOpts;
    if (!circular && !labelCount || !color || !lineWidth || radius < 0) return;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(borderOpts.dash || []);
    ctx.lineDashOffset = borderOpts.dashOffset;
    ctx.beginPath();
    pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function createPointLabelContext(parent, index, label) {
    return (0, _helpersDatasetJs.j)(parent, {
        label,
        index,
        type: 'pointLabel'
    });
}
class RadialLinearScale extends LinearScaleBase {
    static id = 'radialLinear';
    static defaults = {
        display: true,
        animate: true,
        position: 'chartArea',
        angleLines: {
            display: true,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0.0
        },
        grid: {
            circular: false
        },
        startAngle: 0,
        ticks: {
            showLabelBackdrop: true,
            callback: (0, _helpersDatasetJs.aM).formatters.numeric
        },
        pointLabels: {
            backdropColor: undefined,
            backdropPadding: 2,
            display: true,
            font: {
                size: 10
            },
            callback (label) {
                return label;
            },
            padding: 5,
            centerPointLabels: false
        }
    };
    static defaultRoutes = {
        'angleLines.color': 'borderColor',
        'pointLabels.color': 'color',
        'ticks.color': 'color'
    };
    static descriptors = {
        angleLines: {
            _fallback: 'grid'
        }
    };
    constructor(cfg){
        super(cfg);
        this.xCenter = undefined;
        this.yCenter = undefined;
        this.drawingArea = undefined;
        this._pointLabels = [];
        this._pointLabelItems = [];
    }
    setDimensions() {
        const padding = this._padding = (0, _helpersDatasetJs.E)(getTickBackdropHeight(this.options) / 2);
        const w = this.width = this.maxWidth - padding.width;
        const h = this.height = this.maxHeight - padding.height;
        this.xCenter = Math.floor(this.left + w / 2 + padding.left);
        this.yCenter = Math.floor(this.top + h / 2 + padding.top);
        this.drawingArea = Math.floor(Math.min(w, h) / 2);
    }
    determineDataLimits() {
        const { min, max } = this.getMinMax(false);
        this.min = (0, _helpersDatasetJs.g)(min) && !isNaN(min) ? min : 0;
        this.max = (0, _helpersDatasetJs.g)(max) && !isNaN(max) ? max : 0;
        this.handleTickRangeOptions();
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
        LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
        this._pointLabels = this.getLabels().map((value, index)=>{
            const label = (0, _helpersDatasetJs.Q)(this.options.pointLabels.callback, [
                value,
                index
            ], this);
            return label || label === 0 ? label : '';
        }).filter((v, i)=>this.chart.getDataVisibility(i));
    }
    fit() {
        const opts = this.options;
        if (opts.display && opts.pointLabels.display) fitWithPointLabels(this);
        else this.setCenterPoint(0, 0, 0, 0);
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
        this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
        this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
        this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index) {
        const angleMultiplier = (0, _helpersDatasetJs.T) / (this._pointLabels.length || 1);
        const startAngle = this.options.startAngle || 0;
        return (0, _helpersDatasetJs.az)(index * angleMultiplier + (0, _helpersDatasetJs.t)(startAngle));
    }
    getDistanceFromCenterForValue(value) {
        if ((0, _helpersDatasetJs.k)(value)) return NaN;
        const scalingFactor = this.drawingArea / (this.max - this.min);
        if (this.options.reverse) return (this.max - value) * scalingFactor;
        return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
        if ((0, _helpersDatasetJs.k)(distance)) return NaN;
        const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index) {
        const pointLabels = this._pointLabels || [];
        if (index >= 0 && index < pointLabels.length) {
            const pointLabel = pointLabels[index];
            return createPointLabelContext(this.getContext(), index, pointLabel);
        }
    }
    getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
        const angle = this.getIndexAngle(index) - (0, _helpersDatasetJs.H) + additionalAngle;
        return {
            x: Math.cos(angle) * distanceFromCenter + this.xCenter,
            y: Math.sin(angle) * distanceFromCenter + this.yCenter,
            angle
        };
    }
    getPointPositionForValue(index, value) {
        return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index) {
        return this.getPointPositionForValue(index || 0, this.getBaseValue());
    }
    getPointLabelPosition(index) {
        const { left, top, right, bottom } = this._pointLabelItems[index];
        return {
            left,
            top,
            right,
            bottom
        };
    }
    drawBackground() {
        const { backgroundColor, grid: { circular } } = this.options;
        if (backgroundColor) {
            const ctx = this.ctx;
            ctx.save();
            ctx.beginPath();
            pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
            ctx.closePath();
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
        }
    }
    drawGrid() {
        const ctx = this.ctx;
        const opts = this.options;
        const { angleLines, grid, border } = opts;
        const labelCount = this._pointLabels.length;
        let i, offset, position;
        if (opts.pointLabels.display) drawPointLabels(this, labelCount);
        if (grid.display) this.ticks.forEach((tick, index)=>{
            if (index !== 0 || index === 0 && this.min < 0) {
                offset = this.getDistanceFromCenterForValue(tick.value);
                const context = this.getContext(index);
                const optsAtIndex = grid.setContext(context);
                const optsAtIndexBorder = border.setContext(context);
                drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
            }
        });
        if (angleLines.display) {
            ctx.save();
            for(i = labelCount - 1; i >= 0; i--){
                const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
                const { color, lineWidth } = optsAtIndex;
                if (!lineWidth || !color) continue;
                ctx.lineWidth = lineWidth;
                ctx.strokeStyle = color;
                ctx.setLineDash(optsAtIndex.borderDash);
                ctx.lineDashOffset = optsAtIndex.borderDashOffset;
                offset = this.getDistanceFromCenterForValue(opts.reverse ? this.min : this.max);
                position = this.getPointPosition(i, offset);
                ctx.beginPath();
                ctx.moveTo(this.xCenter, this.yCenter);
                ctx.lineTo(position.x, position.y);
                ctx.stroke();
            }
            ctx.restore();
        }
    }
    drawBorder() {}
    drawLabels() {
        const ctx = this.ctx;
        const opts = this.options;
        const tickOpts = opts.ticks;
        if (!tickOpts.display) return;
        const startAngle = this.getIndexAngle(0);
        let offset, width;
        ctx.save();
        ctx.translate(this.xCenter, this.yCenter);
        ctx.rotate(startAngle);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        this.ticks.forEach((tick, index)=>{
            if (index === 0 && this.min >= 0 && !opts.reverse) return;
            const optsAtIndex = tickOpts.setContext(this.getContext(index));
            const tickFont = (0, _helpersDatasetJs.a0)(optsAtIndex.font);
            offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
            if (optsAtIndex.showLabelBackdrop) {
                ctx.font = tickFont.string;
                width = ctx.measureText(tick.label).width;
                ctx.fillStyle = optsAtIndex.backdropColor;
                const padding = (0, _helpersDatasetJs.E)(optsAtIndex.backdropPadding);
                ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
            }
            (0, _helpersDatasetJs.Z)(ctx, tick.label, 0, -offset, tickFont, {
                color: optsAtIndex.color,
                strokeColor: optsAtIndex.textStrokeColor,
                strokeWidth: optsAtIndex.textStrokeWidth
            });
        });
        ctx.restore();
    }
    drawTitle() {}
}
const INTERVALS = {
    millisecond: {
        common: true,
        size: 1,
        steps: 1000
    },
    second: {
        common: true,
        size: 1000,
        steps: 60
    },
    minute: {
        common: true,
        size: 60000,
        steps: 60
    },
    hour: {
        common: true,
        size: 3600000,
        steps: 24
    },
    day: {
        common: true,
        size: 86400000,
        steps: 30
    },
    week: {
        common: false,
        size: 604800000,
        steps: 4
    },
    month: {
        common: true,
        size: 2.628e9,
        steps: 12
    },
    quarter: {
        common: false,
        size: 7.884e9,
        steps: 4
    },
    year: {
        common: true,
        size: 3.154e10
    }
};
const UNITS = /* #__PURE__ */ Object.keys(INTERVALS);
function sorter(a, b) {
    return a - b;
}
function parse(scale, input) {
    if ((0, _helpersDatasetJs.k)(input)) return null;
    const adapter = scale._adapter;
    const { parser, round, isoWeekday } = scale._parseOpts;
    let value = input;
    if (typeof parser === 'function') value = parser(value);
    if (!(0, _helpersDatasetJs.g)(value)) value = typeof parser === 'string' ? adapter.parse(value, parser) : adapter.parse(value);
    if (value === null) return null;
    if (round) value = round === 'week' && ((0, _helpersDatasetJs.x)(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, 'isoWeek', isoWeekday) : adapter.startOf(value, round);
    return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = UNITS.length;
    for(let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i){
        const interval = INTERVALS[UNITS[i]];
        const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
        if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) return UNITS[i];
    }
    return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for(let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--){
        const unit = UNITS[i];
        if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) return unit;
    }
    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
    for(let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i){
        if (INTERVALS[UNITS[i]].common) return UNITS[i];
    }
}
function addTick(ticks, time, timestamps) {
    if (!timestamps) ticks[time] = true;
    else if (timestamps.length) {
        const { lo, hi } = (0, _helpersDatasetJs.aQ)(timestamps, time);
        const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
        ticks[timestamp] = true;
    }
}
function setMajorTicks(scale, ticks, map, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index;
    for(major = first; major <= last; major = +adapter.add(major, 1, majorUnit)){
        index = map[major];
        if (index >= 0) ticks[index].major = true;
    }
    return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
    const map = {};
    const ilen = values.length;
    let i, value;
    for(i = 0; i < ilen; ++i){
        value = values[i];
        map[value] = i;
        ticks.push({
            value,
            major: false
        });
    }
    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
class TimeScale extends Scale {
    static id = 'time';
    static defaults = {
        bounds: 'data',
        adapters: {},
        time: {
            parser: false,
            unit: false,
            round: false,
            isoWeekday: false,
            minUnit: 'millisecond',
            displayFormats: {}
        },
        ticks: {
            source: 'auto',
            callback: false,
            major: {
                enabled: false
            }
        }
    };
    constructor(props){
        super(props);
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
        this._unit = 'day';
        this._majorUnit = undefined;
        this._offsets = {};
        this._normalized = false;
        this._parseOpts = undefined;
    }
    init(scaleOpts, opts = {}) {
        const time = scaleOpts.time || (scaleOpts.time = {});
        const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
        adapter.init(opts);
        (0, _helpersDatasetJs.ab)(time.displayFormats, adapter.formats());
        this._parseOpts = {
            parser: time.parser,
            round: time.round,
            isoWeekday: time.isoWeekday
        };
        super.init(scaleOpts);
        this._normalized = opts.normalized;
    }
    parse(raw, index) {
        if (raw === undefined) return null;
        return parse(this, raw);
    }
    beforeLayout() {
        super.beforeLayout();
        this._cache = {
            data: [],
            labels: [],
            all: []
        };
    }
    determineDataLimits() {
        const options = this.options;
        const adapter = this._adapter;
        const unit = options.time.unit || 'day';
        let { min, max, minDefined, maxDefined } = this.getUserBounds();
        function _applyBounds(bounds) {
            if (!minDefined && !isNaN(bounds.min)) min = Math.min(min, bounds.min);
            if (!maxDefined && !isNaN(bounds.max)) max = Math.max(max, bounds.max);
        }
        if (!minDefined || !maxDefined) {
            _applyBounds(this._getLabelBounds());
            if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') _applyBounds(this.getMinMax(false));
        }
        min = (0, _helpersDatasetJs.g)(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
        max = (0, _helpersDatasetJs.g)(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
        this.min = Math.min(min, max - 1);
        this.max = Math.max(min + 1, max);
    }
    _getLabelBounds() {
        const arr = this.getLabelTimestamps();
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;
        if (arr.length) {
            min = arr[0];
            max = arr[arr.length - 1];
        }
        return {
            min,
            max
        };
    }
    buildTicks() {
        const options = this.options;
        const timeOpts = options.time;
        const tickOpts = options.ticks;
        const timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();
        if (options.bounds === 'ticks' && timestamps.length) {
            this.min = this._userMin || timestamps[0];
            this.max = this._userMax || timestamps[timestamps.length - 1];
        }
        const min = this.min;
        const max = this.max;
        const ticks = (0, _helpersDatasetJs.aP)(timestamps, min, max);
        this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
        this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined : determineMajorUnit(this._unit);
        this.initOffsets(timestamps);
        if (options.reverse) ticks.reverse();
        return ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
        if (this.options.offsetAfterAutoskip) this.initOffsets(this.ticks.map((tick)=>+tick.value));
    }
    initOffsets(timestamps = []) {
        let start = 0;
        let end = 0;
        let first, last;
        if (this.options.offset && timestamps.length) {
            first = this.getDecimalForValue(timestamps[0]);
            if (timestamps.length === 1) start = 1 - first;
            else start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
            last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
            if (timestamps.length === 1) end = last;
            else end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
        const limit = timestamps.length < 3 ? 0.5 : 0.25;
        start = (0, _helpersDatasetJs.S)(start, 0, limit);
        end = (0, _helpersDatasetJs.S)(end, 0, limit);
        this._offsets = {
            start,
            end,
            factor: 1 / (start + 1 + end)
        };
    }
    _generate() {
        const adapter = this._adapter;
        const min = this.min;
        const max = this.max;
        const options = this.options;
        const timeOpts = options.time;
        const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
        const stepSize = (0, _helpersDatasetJs.v)(options.ticks.stepSize, 1);
        const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
        const hasWeekday = (0, _helpersDatasetJs.x)(weekday) || weekday === true;
        const ticks = {};
        let first = min;
        let time, count;
        if (hasWeekday) first = +adapter.startOf(first, 'isoWeek', weekday);
        first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
        if (adapter.diff(max, min, minor) > 100000 * stepSize) throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
        const timestamps = options.ticks.source === 'data' && this.getDataTimestamps();
        for(time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++)addTick(ticks, time, timestamps);
        if (time === max || options.bounds === 'ticks' || count === 1) addTick(ticks, time, timestamps);
        return Object.keys(ticks).sort(sorter).map((x)=>+x);
    }
    getLabelForValue(value) {
        const adapter = this._adapter;
        const timeOpts = this.options.time;
        if (timeOpts.tooltipFormat) return adapter.format(value, timeOpts.tooltipFormat);
        return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    format(value, format) {
        const options = this.options;
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const fmt = format || formats[unit];
        return this._adapter.format(value, fmt);
    }
    _tickFormatFunction(time, index, ticks, format) {
        const options = this.options;
        const formatter = options.ticks.callback;
        if (formatter) return (0, _helpersDatasetJs.Q)(formatter, [
            time,
            index,
            ticks
        ], this);
        const formats = options.time.displayFormats;
        const unit = this._unit;
        const majorUnit = this._majorUnit;
        const minorFormat = unit && formats[unit];
        const majorFormat = majorUnit && formats[majorUnit];
        const tick = ticks[index];
        const major = majorUnit && majorFormat && tick && tick.major;
        return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    }
    generateTickLabels(ticks) {
        let i, ilen, tick;
        for(i = 0, ilen = ticks.length; i < ilen; ++i){
            tick = ticks[i];
            tick.label = this._tickFormatFunction(tick.value, i, ticks);
        }
    }
    getDecimalForValue(value) {
        return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
    getPixelForValue(value) {
        const offsets = this._offsets;
        const pos = this.getDecimalForValue(value);
        return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return this.min + pos * (this.max - this.min);
    }
    _getLabelSize(label) {
        const ticksOpts = this.options.ticks;
        const tickLabelWidth = this.ctx.measureText(label).width;
        const angle = (0, _helpersDatasetJs.t)(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
        const cosRotation = Math.cos(angle);
        const sinRotation = Math.sin(angle);
        const tickFontSize = this._resolveTickFontOptions(0).size;
        return {
            w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
            h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
        };
    }
    _getLabelCapacity(exampleTime) {
        const timeOpts = this.options.time;
        const displayFormats = timeOpts.displayFormats;
        const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
        const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [
            exampleTime
        ], this._majorUnit), format);
        const size = this._getLabelSize(exampleLabel);
        const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
        return capacity > 0 ? capacity : 1;
    }
    getDataTimestamps() {
        let timestamps = this._cache.data || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const metas = this.getMatchingVisibleMetas();
        if (this._normalized && metas.length) return this._cache.data = metas[0].controller.getAllParsedValues(this);
        for(i = 0, ilen = metas.length; i < ilen; ++i)timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(timestamps);
    }
    getLabelTimestamps() {
        const timestamps = this._cache.labels || [];
        let i, ilen;
        if (timestamps.length) return timestamps;
        const labels = this.getLabels();
        for(i = 0, ilen = labels.length; i < ilen; ++i)timestamps.push(parse(this, labels[i]));
        return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
    normalize(values) {
        return (0, _helpersDatasetJs._)(values.sort(sorter));
    }
}
function interpolate(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
        if (val >= table[lo].pos && val <= table[hi].pos) ({ lo, hi } = (0, _helpersDatasetJs.B)(table, 'pos', val));
        ({ pos: prevSource, time: prevTarget } = table[lo]);
        ({ pos: nextSource, time: nextTarget } = table[hi]);
    } else {
        if (val >= table[lo].time && val <= table[hi].time) ({ lo, hi } = (0, _helpersDatasetJs.B)(table, 'time', val));
        ({ time: prevSource, pos: prevTarget } = table[lo]);
        ({ time: nextSource, pos: nextTarget } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class TimeSeriesScale extends TimeScale {
    static id = 'timeseries';
    static defaults = TimeScale.defaults;
    constructor(props){
        super(props);
        this._table = [];
        this._minPos = undefined;
        this._tableRange = undefined;
    }
    initOffsets() {
        const timestamps = this._getTimestampsForTable();
        const table = this._table = this.buildLookupTable(timestamps);
        this._minPos = interpolate(table, this.min);
        this._tableRange = interpolate(table, this.max) - this._minPos;
        super.initOffsets(timestamps);
    }
    buildLookupTable(timestamps) {
        const { min, max } = this;
        const items = [];
        const table = [];
        let i, ilen, prev, curr, next;
        for(i = 0, ilen = timestamps.length; i < ilen; ++i){
            curr = timestamps[i];
            if (curr >= min && curr <= max) items.push(curr);
        }
        if (items.length < 2) return [
            {
                time: min,
                pos: 0
            },
            {
                time: max,
                pos: 1
            }
        ];
        for(i = 0, ilen = items.length; i < ilen; ++i){
            next = items[i + 1];
            prev = items[i - 1];
            curr = items[i];
            if (Math.round((next + prev) / 2) !== curr) table.push({
                time: curr,
                pos: i / (ilen - 1)
            });
        }
        return table;
    }
    _generate() {
        const min = this.min;
        const max = this.max;
        let timestamps = super.getDataTimestamps();
        if (!timestamps.includes(min) || !timestamps.length) timestamps.splice(0, 0, min);
        if (!timestamps.includes(max) || timestamps.length === 1) timestamps.push(max);
        return timestamps.sort((a, b)=>a - b);
    }
    _getTimestampsForTable() {
        let timestamps = this._cache.all || [];
        if (timestamps.length) return timestamps;
        const data = this.getDataTimestamps();
        const label = this.getLabelTimestamps();
        if (data.length && label.length) timestamps = this.normalize(data.concat(label));
        else timestamps = data.length ? data : label;
        timestamps = this._cache.all = timestamps;
        return timestamps;
    }
    getDecimalForValue(value) {
        return (interpolate(this._table, value) - this._minPos) / this._tableRange;
    }
    getValueForPixel(pixel) {
        const offsets = this._offsets;
        const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
        return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
    }
}
var scales = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    CategoryScale: CategoryScale,
    LinearScale: LinearScale,
    LogarithmicScale: LogarithmicScale,
    RadialLinearScale: RadialLinearScale,
    TimeScale: TimeScale,
    TimeSeriesScale: TimeSeriesScale
});
const registerables = [
    controllers,
    elements,
    plugins,
    scales
];

},{"./chunks/helpers.dataset.js":"8wXhN","@kurkle/color":"jJiT4","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"8wXhN":[function(require,module,exports,__globalThis) {
/*!
 * Chart.js v4.4.9
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>unclipArea);
parcelHelpers.export(exports, "A", ()=>_rlookupByKey);
parcelHelpers.export(exports, "B", ()=>_lookupByKey);
parcelHelpers.export(exports, "C", ()=>_isPointInArea);
parcelHelpers.export(exports, "D", ()=>getAngleFromPoint);
parcelHelpers.export(exports, "E", ()=>toPadding);
parcelHelpers.export(exports, "F", ()=>each);
parcelHelpers.export(exports, "G", ()=>getMaximumSize);
parcelHelpers.export(exports, "H", ()=>HALF_PI);
parcelHelpers.export(exports, "I", ()=>_getParentNode);
parcelHelpers.export(exports, "J", ()=>readUsedSize);
parcelHelpers.export(exports, "K", ()=>supportsEventListenerOptions);
parcelHelpers.export(exports, "L", ()=>throttled);
parcelHelpers.export(exports, "M", ()=>_isDomSupported);
parcelHelpers.export(exports, "N", ()=>_factorize);
parcelHelpers.export(exports, "O", ()=>finiteOrDefault);
parcelHelpers.export(exports, "P", ()=>PI);
parcelHelpers.export(exports, "Q", ()=>callback);
parcelHelpers.export(exports, "R", ()=>_addGrace);
parcelHelpers.export(exports, "S", ()=>_limitValue);
parcelHelpers.export(exports, "T", ()=>TAU);
parcelHelpers.export(exports, "U", ()=>toDegrees);
parcelHelpers.export(exports, "V", ()=>_measureText);
parcelHelpers.export(exports, "W", ()=>_int16Range);
parcelHelpers.export(exports, "X", ()=>_alignPixel);
parcelHelpers.export(exports, "Y", ()=>clipArea);
parcelHelpers.export(exports, "Z", ()=>renderText);
parcelHelpers.export(exports, "_", ()=>_arrayUnique);
parcelHelpers.export(exports, "a", ()=>resolve);
parcelHelpers.export(exports, "a$", ()=>getStyle);
parcelHelpers.export(exports, "a0", ()=>toFont);
parcelHelpers.export(exports, "a1", ()=>_toLeftRightCenter);
parcelHelpers.export(exports, "a2", ()=>_alignStartEnd);
parcelHelpers.export(exports, "a3", ()=>overrides);
parcelHelpers.export(exports, "a4", ()=>merge);
parcelHelpers.export(exports, "a5", ()=>_capitalize);
parcelHelpers.export(exports, "a6", ()=>descriptors);
parcelHelpers.export(exports, "a7", ()=>isFunction);
parcelHelpers.export(exports, "a8", ()=>_attachContext);
parcelHelpers.export(exports, "a9", ()=>_createResolver);
parcelHelpers.export(exports, "aA", ()=>getRtlAdapter);
parcelHelpers.export(exports, "aB", ()=>overrideTextDirection);
parcelHelpers.export(exports, "aC", ()=>_textX);
parcelHelpers.export(exports, "aD", ()=>restoreTextDirection);
parcelHelpers.export(exports, "aE", ()=>drawPointLegend);
parcelHelpers.export(exports, "aF", ()=>distanceBetweenPoints);
parcelHelpers.export(exports, "aG", ()=>noop);
parcelHelpers.export(exports, "aH", ()=>_setMinAndMaxByKey);
parcelHelpers.export(exports, "aI", ()=>niceNum);
parcelHelpers.export(exports, "aJ", ()=>almostWhole);
parcelHelpers.export(exports, "aK", ()=>almostEquals);
parcelHelpers.export(exports, "aL", ()=>_decimalPlaces);
parcelHelpers.export(exports, "aM", ()=>Ticks);
parcelHelpers.export(exports, "aN", ()=>log10);
parcelHelpers.export(exports, "aO", ()=>_longestText);
parcelHelpers.export(exports, "aP", ()=>_filterBetween);
parcelHelpers.export(exports, "aQ", ()=>_lookup);
parcelHelpers.export(exports, "aR", ()=>isPatternOrGradient);
parcelHelpers.export(exports, "aS", ()=>getHoverColor);
parcelHelpers.export(exports, "aT", ()=>clone);
parcelHelpers.export(exports, "aU", ()=>_merger);
parcelHelpers.export(exports, "aV", ()=>_mergerIf);
parcelHelpers.export(exports, "aW", ()=>_deprecated);
parcelHelpers.export(exports, "aX", ()=>_splitKey);
parcelHelpers.export(exports, "aY", ()=>toFontString);
parcelHelpers.export(exports, "aZ", ()=>splineCurve);
parcelHelpers.export(exports, "a_", ()=>splineCurveMonotone);
parcelHelpers.export(exports, "aa", ()=>_descriptors);
parcelHelpers.export(exports, "ab", ()=>mergeIf);
parcelHelpers.export(exports, "ac", ()=>uid);
parcelHelpers.export(exports, "ad", ()=>debounce);
parcelHelpers.export(exports, "ae", ()=>retinaScale);
parcelHelpers.export(exports, "af", ()=>clearCanvas);
parcelHelpers.export(exports, "ag", ()=>setsEqual);
parcelHelpers.export(exports, "ah", ()=>getDatasetClipArea);
parcelHelpers.export(exports, "ai", ()=>_elementsEqual);
parcelHelpers.export(exports, "aj", ()=>_isClickEvent);
parcelHelpers.export(exports, "ak", ()=>_isBetween);
parcelHelpers.export(exports, "al", ()=>_readValueToProps);
parcelHelpers.export(exports, "am", ()=>_updateBezierControlPoints);
parcelHelpers.export(exports, "an", ()=>_computeSegments);
parcelHelpers.export(exports, "ao", ()=>_boundSegments);
parcelHelpers.export(exports, "ap", ()=>_steppedInterpolation);
parcelHelpers.export(exports, "aq", ()=>_bezierInterpolation);
parcelHelpers.export(exports, "ar", ()=>_pointInLine);
parcelHelpers.export(exports, "as", ()=>_steppedLineTo);
parcelHelpers.export(exports, "at", ()=>_bezierCurveTo);
parcelHelpers.export(exports, "au", ()=>drawPoint);
parcelHelpers.export(exports, "av", ()=>addRoundedRectPath);
parcelHelpers.export(exports, "aw", ()=>toTRBL);
parcelHelpers.export(exports, "ax", ()=>toTRBLCorners);
parcelHelpers.export(exports, "ay", ()=>_boundSegment);
parcelHelpers.export(exports, "az", ()=>_normalizeAngle);
parcelHelpers.export(exports, "b", ()=>isArray);
parcelHelpers.export(exports, "b0", ()=>fontString);
parcelHelpers.export(exports, "b1", ()=>toLineHeight);
parcelHelpers.export(exports, "b2", ()=>PITAU);
parcelHelpers.export(exports, "b3", ()=>INFINITY);
parcelHelpers.export(exports, "b4", ()=>RAD_PER_DEG);
parcelHelpers.export(exports, "b5", ()=>QUARTER_PI);
parcelHelpers.export(exports, "b6", ()=>TWO_THIRDS_PI);
parcelHelpers.export(exports, "b7", ()=>_angleDiff);
parcelHelpers.export(exports, "c", ()=>color);
parcelHelpers.export(exports, "d", ()=>defaults);
parcelHelpers.export(exports, "e", ()=>effects);
parcelHelpers.export(exports, "f", ()=>resolveObjectKey);
parcelHelpers.export(exports, "g", ()=>isNumberFinite);
parcelHelpers.export(exports, "h", ()=>defined);
parcelHelpers.export(exports, "i", ()=>isObject);
parcelHelpers.export(exports, "j", ()=>createContext);
parcelHelpers.export(exports, "k", ()=>isNullOrUndef);
parcelHelpers.export(exports, "l", ()=>listenArrayEvents);
parcelHelpers.export(exports, "m", ()=>toPercentage);
parcelHelpers.export(exports, "n", ()=>toDimension);
parcelHelpers.export(exports, "o", ()=>formatNumber);
parcelHelpers.export(exports, "p", ()=>_angleBetween);
parcelHelpers.export(exports, "q", ()=>_getStartAndCountOfVisiblePoints);
parcelHelpers.export(exports, "r", ()=>requestAnimFrame);
parcelHelpers.export(exports, "s", ()=>sign);
parcelHelpers.export(exports, "t", ()=>toRadians);
parcelHelpers.export(exports, "u", ()=>unlistenArrayEvents);
parcelHelpers.export(exports, "v", ()=>valueOrDefault);
parcelHelpers.export(exports, "w", ()=>_scaleRangesChanged);
parcelHelpers.export(exports, "x", ()=>isNumber);
parcelHelpers.export(exports, "y", ()=>_parseObjectDataRadialScale);
parcelHelpers.export(exports, "z", ()=>getRelativePosition);
var _color = require("@kurkle/color");
/**
 * @namespace Chart.helpers
 */ /**
 * An empty function that can be used, for example, for optional callback.
 */ function noop() {
/* noop */ }
/**
 * Returns a unique id, sequentially generated from a global variable.
 */ const uid = (()=>{
    let id = 0;
    return ()=>id++;
})();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function isNullOrUndef(value) {
    return value === null || value === undefined;
}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */ function isArray(value) {
    if (Array.isArray && Array.isArray(value)) return true;
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === '[object' && type.slice(-6) === 'Array]') return true;
    return false;
}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */ function isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */ function isNumberFinite(value) {
    return (typeof value === 'number' || value instanceof Number) && isFinite(+value);
}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */ function finiteOrDefault(value, defaultValue) {
    return isNumberFinite(value) ? value : defaultValue;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */ function valueOrDefault(value, defaultValue) {
    return typeof value === 'undefined' ? defaultValue : value;
}
const toPercentage = (value, dimension)=>typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 : +value / dimension;
const toDimension = (value, dimension)=>typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 * dimension : +value;
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */ function callback(fn, args, thisArg) {
    if (fn && typeof fn.call === 'function') return fn.apply(thisArg, args);
}
function each(loopable, fn, thisArg, reverse) {
    let i, len, keys;
    if (isArray(loopable)) {
        len = loopable.length;
        if (reverse) for(i = len - 1; i >= 0; i--)fn.call(thisArg, loopable[i], i);
        else for(i = 0; i < len; i++)fn.call(thisArg, loopable[i], i);
    } else if (isObject(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;
        for(i = 0; i < len; i++)fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
}
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */ function _elementsEqual(a0, a1) {
    let i, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) return false;
    for(i = 0, ilen = a0.length; i < ilen; ++i){
        v0 = a0[i];
        v1 = a1[i];
        if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) return false;
    }
    return true;
}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */ function clone(source) {
    if (isArray(source)) return source.map(clone);
    if (isObject(source)) {
        const target = Object.create(null);
        const keys = Object.keys(source);
        const klen = keys.length;
        let k = 0;
        for(; k < klen; ++k)target[keys[k]] = clone(source[keys[k]]);
        return target;
    }
    return source;
}
function isValidKey(key) {
    return [
        '__proto__',
        'prototype',
        'constructor'
    ].indexOf(key) === -1;
}
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */ function _merger(key, target, source, options) {
    if (!isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) // eslint-disable-next-line @typescript-eslint/no-use-before-define
    merge(tval, sval, options);
    else target[key] = clone(sval);
}
function merge(target, source, options) {
    const sources = isArray(source) ? source : [
        source
    ];
    const ilen = sources.length;
    if (!isObject(target)) return target;
    options = options || {};
    const merger = options.merger || _merger;
    let current;
    for(let i = 0; i < ilen; ++i){
        current = sources[i];
        if (!isObject(current)) continue;
        const keys = Object.keys(current);
        for(let k = 0, klen = keys.length; k < klen; ++k)merger(keys[k], target, current, options);
    }
    return target;
}
function mergeIf(target, source) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return merge(target, source, {
        merger: _mergerIf
    });
}
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */ function _mergerIf(key, target, source) {
    if (!isValidKey(key)) return;
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) mergeIf(tval, sval);
    else if (!Object.prototype.hasOwnProperty.call(target, key)) target[key] = clone(sval);
}
/**
 * @private
 */ function _deprecated(scope, value, previous, current) {
    if (value !== undefined) console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
}
// resolveObjectKey resolver cache
const keyResolvers = {
    // Chart.helpers.core resolveObjectKey should resolve empty key to root object
    '': (v)=>v,
    // default resolvers
    x: (o)=>o.x,
    y: (o)=>o.y
};
/**
 * @private
 */ function _splitKey(key) {
    const parts = key.split('.');
    const keys = [];
    let tmp = '';
    for (const part of parts){
        tmp += part;
        if (tmp.endsWith('\\')) tmp = tmp.slice(0, -1) + '.';
        else {
            keys.push(tmp);
            tmp = '';
        }
    }
    return keys;
}
function _getKeyResolver(key) {
    const keys = _splitKey(key);
    return (obj)=>{
        for (const k of keys){
            if (k === '') break;
            obj = obj && obj[k];
        }
        return obj;
    };
}
function resolveObjectKey(obj, key) {
    const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
    return resolver(obj);
}
/**
 * @private
 */ function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const defined = (value)=>typeof value !== 'undefined';
const isFunction = (value)=>typeof value === 'function';
// Adapted from https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality#31129384
const setsEqual = (a, b)=>{
    if (a.size !== b.size) return false;
    for (const item of a){
        if (!b.has(item)) return false;
    }
    return true;
};
/**
 * @param e - The event
 * @private
 */ function _isClickEvent(e) {
    return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
}
/**
 * @alias Chart.helpers.math
 * @namespace
 */ const PI = Math.PI;
const TAU = 2 * PI;
const PITAU = TAU + PI;
const INFINITY = Number.POSITIVE_INFINITY;
const RAD_PER_DEG = PI / 180;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;
const TWO_THIRDS_PI = PI * 2 / 3;
const log10 = Math.log10;
const sign = Math.sign;
function almostEquals(x, y, epsilon) {
    return Math.abs(x - y) < epsilon;
}
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */ function niceNum(range) {
    const roundedRange = Math.round(range);
    range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor(log10(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
}
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */ function _factorize(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i;
    for(i = 1; i < sqrt; i++)if (value % i === 0) {
        result.push(i);
        result.push(value / i);
    }
    if (sqrt === (sqrt | 0)) result.push(sqrt);
    result.sort((a, b)=>a - b).pop();
    return result;
}
/**
 * Verifies that attempting to coerce n to string or number won't throw a TypeError.
 */ function isNonPrimitive(n) {
    return typeof n === 'symbol' || typeof n === 'object' && n !== null && !(Symbol.toPrimitive in n || 'toString' in n || 'valueOf' in n);
}
function isNumber(n) {
    return !isNonPrimitive(n) && !isNaN(parseFloat(n)) && isFinite(n);
}
function almostWhole(x, epsilon) {
    const rounded = Math.round(x);
    return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
 * @private
 */ function _setMinAndMaxByKey(array, target, property) {
    let i, ilen, value;
    for(i = 0, ilen = array.length; i < ilen; i++){
        value = array[i][property];
        if (!isNaN(value)) {
            target.min = Math.min(target.min, value);
            target.max = Math.max(target.max, value);
        }
    }
}
function toRadians(degrees) {
    return degrees * (PI / 180);
}
function toDegrees(radians) {
    return radians * (180 / PI);
}
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */ function _decimalPlaces(x) {
    if (!isNumberFinite(x)) return;
    let e = 1;
    let p = 0;
    while(Math.round(x * e) / e !== x){
        e *= 10;
        p++;
    }
    return p;
}
// Gets the angle from vertical upright to the point about a centre.
function getAngleFromPoint(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * PI) angle += TAU; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
    return {
        angle,
        distance: radialDistanceFromCenter
    };
}
function distanceBetweenPoints(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
 * Shortest distance between angles, in either direction.
 * @private
 */ function _angleDiff(a, b) {
    return (a - b + PITAU) % TAU - PI;
}
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */ function _normalizeAngle(a) {
    return (a % TAU + TAU) % TAU;
}
/**
 * @private
 */ function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
    const a = _normalizeAngle(angle);
    const s = _normalizeAngle(start);
    const e = _normalizeAngle(end);
    const angleToStart = _normalizeAngle(s - a);
    const angleToEnd = _normalizeAngle(e - a);
    const startToAngle = _normalizeAngle(a - s);
    const endToAngle = _normalizeAngle(a - e);
    return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */ function _limitValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * @param {number} value
 * @private
 */ function _int16Range(value) {
    return _limitValue(value, -32768, 32767);
}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */ function _isBetween(value, start, end, epsilon = 1e-6) {
    return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
function _lookup(table, value, cmp) {
    cmp = cmp || ((index)=>table[index] < value);
    let hi = table.length - 1;
    let lo = 0;
    let mid;
    while(hi - lo > 1){
        mid = lo + hi >> 1;
        if (cmp(mid)) lo = mid;
        else hi = mid;
    }
    return {
        lo,
        hi
    };
}
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */ const _lookupByKey = (table, key, value, last)=>_lookup(table, value, last ? (index)=>{
        const ti = table[index][key];
        return ti < value || ti === value && table[index + 1][key] === value;
    } : (index)=>table[index][key] < value);
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */ const _rlookupByKey = (table, key, value)=>_lookup(table, value, (index)=>table[index][key] >= value);
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */ function _filterBetween(values, min, max) {
    let start = 0;
    let end = values.length;
    while(start < end && values[start] < min)start++;
    while(end > start && values[end - 1] > max)end--;
    return start > 0 || end < values.length ? values.slice(start, end) : values;
}
const arrayEvents = [
    'push',
    'pop',
    'shift',
    'splice',
    'unshift'
];
function listenArrayEvents(array, listener) {
    if (array._chartjs) {
        array._chartjs.listeners.push(listener);
        return;
    }
    Object.defineProperty(array, '_chartjs', {
        configurable: true,
        enumerable: false,
        value: {
            listeners: [
                listener
            ]
        }
    });
    arrayEvents.forEach((key)=>{
        const method = '_onData' + _capitalize(key);
        const base = array[key];
        Object.defineProperty(array, key, {
            configurable: true,
            enumerable: false,
            value (...args) {
                const res = base.apply(this, args);
                array._chartjs.listeners.forEach((object)=>{
                    if (typeof object[method] === 'function') object[method](...args);
                });
                return res;
            }
        });
    });
}
function unlistenArrayEvents(array, listener) {
    const stub = array._chartjs;
    if (!stub) return;
    const listeners = stub.listeners;
    const index = listeners.indexOf(listener);
    if (index !== -1) listeners.splice(index, 1);
    if (listeners.length > 0) return;
    arrayEvents.forEach((key)=>{
        delete array[key];
    });
    delete array._chartjs;
}
/**
 * @param items
 */ function _arrayUnique(items) {
    const set = new Set(items);
    if (set.size === items.length) return items;
    return Array.from(set);
}
function fontString(pixelSize, fontStyle, fontFamily) {
    return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
/**
* Request animation polyfill
*/ const requestAnimFrame = function() {
    if (typeof window === 'undefined') return function(callback) {
        return callback();
    };
    return window.requestAnimationFrame;
}();
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */ function throttled(fn, thisArg) {
    let argsToUse = [];
    let ticking = false;
    return function(...args) {
        // Save the args for use later
        argsToUse = args;
        if (!ticking) {
            ticking = true;
            requestAnimFrame.call(window, ()=>{
                ticking = false;
                fn.apply(thisArg, argsToUse);
            });
        }
    };
}
/**
 * Debounces calling `fn` for `delay` ms
 */ function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        if (delay) {
            clearTimeout(timeout);
            timeout = setTimeout(fn, delay, args);
        } else fn.apply(this, args);
        return delay;
    };
}
/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */ const _toLeftRightCenter = (align)=>align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
/**
 * Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
 * @private
 */ const _alignStartEnd = (align, start, end)=>align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
/**
 * Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
 * @private
 */ const _textX = (align, left, right, rtl)=>{
    const check = rtl ? 'left' : 'right';
    return align === check ? right : align === 'center' ? (left + right) / 2 : left;
};
/**
 * Return start and count of visible points.
 * @private
 */ function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start = 0;
    let count = pointCount;
    if (meta._sorted) {
        const { iScale, vScale, _parsed } = meta;
        const spanGaps = meta.dataset ? meta.dataset.options ? meta.dataset.options.spanGaps : null : null;
        const axis = iScale.axis;
        const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
        if (minDefined) {
            start = Math.min(_lookupByKey(_parsed, axis, min).lo, animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo);
            if (spanGaps) {
                const distanceToDefinedLo = _parsed.slice(0, start + 1).reverse().findIndex((point)=>!isNullOrUndef(point[vScale.axis]));
                start -= Math.max(0, distanceToDefinedLo);
            }
            start = _limitValue(start, 0, pointCount - 1);
        }
        if (maxDefined) {
            let end = Math.max(_lookupByKey(_parsed, iScale.axis, max, true).hi + 1, animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1);
            if (spanGaps) {
                const distanceToDefinedHi = _parsed.slice(end - 1).findIndex((point)=>!isNullOrUndef(point[vScale.axis]));
                end += Math.max(0, distanceToDefinedHi);
            }
            count = _limitValue(end, start, pointCount) - start;
        } else count = pointCount - start;
    }
    return {
        start,
        count
    };
}
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */ function _scaleRangesChanged(meta) {
    const { xScale, yScale, _scaleRanges } = meta;
    const newRanges = {
        xmin: xScale.min,
        xmax: xScale.max,
        ymin: yScale.min,
        ymax: yScale.max
    };
    if (!_scaleRanges) {
        meta._scaleRanges = newRanges;
        return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
}
const atEdge = (t)=>t === 0 || t === 1;
const elasticIn = (t, s, p)=>-(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
const elasticOut = (t, s, p)=>Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */ const effects = {
    linear: (t)=>t,
    easeInQuad: (t)=>t * t,
    easeOutQuad: (t)=>-t * (t - 2),
    easeInOutQuad: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
    easeInCubic: (t)=>t * t * t,
    easeOutCubic: (t)=>(t -= 1) * t * t + 1,
    easeInOutCubic: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
    easeInQuart: (t)=>t * t * t * t,
    easeOutQuart: (t)=>-((t -= 1) * t * t * t - 1),
    easeInOutQuart: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
    easeInQuint: (t)=>t * t * t * t * t,
    easeOutQuint: (t)=>(t -= 1) * t * t * t * t + 1,
    easeInOutQuint: (t)=>(t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
    easeInSine: (t)=>-Math.cos(t * HALF_PI) + 1,
    easeOutSine: (t)=>Math.sin(t * HALF_PI),
    easeInOutSine: (t)=>-0.5 * (Math.cos(PI * t) - 1),
    easeInExpo: (t)=>t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
    easeOutExpo: (t)=>t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
    easeInOutExpo: (t)=>atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
    easeInCirc: (t)=>t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
    easeOutCirc: (t)=>Math.sqrt(1 - (t -= 1) * t),
    easeInOutCirc: (t)=>(t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
    easeInElastic: (t)=>atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
    easeOutElastic: (t)=>atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
    easeInOutElastic (t) {
        const s = 0.1125;
        const p = 0.45;
        return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
    },
    easeInBack (t) {
        const s = 1.70158;
        return t * t * ((s + 1) * t - s);
    },
    easeOutBack (t) {
        const s = 1.70158;
        return (t -= 1) * t * ((s + 1) * t + s) + 1;
    },
    easeInOutBack (t) {
        let s = 1.70158;
        if ((t /= 0.5) < 1) return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
        return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: (t)=>1 - effects.easeOutBounce(1 - t),
    easeOutBounce (t) {
        const m = 7.5625;
        const d = 2.75;
        if (t < 1 / d) return m * t * t;
        if (t < 2 / d) return m * (t -= 1.5 / d) * t + 0.75;
        if (t < 2.5 / d) return m * (t -= 2.25 / d) * t + 0.9375;
        return m * (t -= 2.625 / d) * t + 0.984375;
    },
    easeInOutBounce: (t)=>t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
function isPatternOrGradient(value) {
    if (value && typeof value === 'object') {
        const type = value.toString();
        return type === '[object CanvasPattern]' || type === '[object CanvasGradient]';
    }
    return false;
}
function color(value) {
    return isPatternOrGradient(value) ? value : new (0, _color.Color)(value);
}
function getHoverColor(value) {
    return isPatternOrGradient(value) ? value : new (0, _color.Color)(value).saturate(0.5).darken(0.1).hexString();
}
const numbers = [
    'x',
    'y',
    'borderWidth',
    'radius',
    'tension'
];
const colors = [
    'color',
    'borderColor',
    'backgroundColor'
];
function applyAnimationsDefaults(defaults) {
    defaults.set('animation', {
        delay: undefined,
        duration: 1000,
        easing: 'easeOutQuart',
        fn: undefined,
        from: undefined,
        loop: undefined,
        to: undefined,
        type: undefined
    });
    defaults.describe('animation', {
        _fallback: false,
        _indexable: false,
        _scriptable: (name)=>name !== 'onProgress' && name !== 'onComplete' && name !== 'fn'
    });
    defaults.set('animations', {
        colors: {
            type: 'color',
            properties: colors
        },
        numbers: {
            type: 'number',
            properties: numbers
        }
    });
    defaults.describe('animations', {
        _fallback: 'animation'
    });
    defaults.set('transitions', {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: 'transparent'
                },
                visible: {
                    type: 'boolean',
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: 'transparent'
                },
                visible: {
                    type: 'boolean',
                    easing: 'linear',
                    fn: (v)=>v | 0
                }
            }
        }
    });
}
function applyLayoutsDefaults(defaults) {
    defaults.set('layout', {
        autoPadding: true,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    });
}
const intlCache = new Map();
function getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = intlCache.get(cacheKey);
    if (!formatter) {
        formatter = new Intl.NumberFormat(locale, options);
        intlCache.set(cacheKey, formatter);
    }
    return formatter;
}
function formatNumber(num, locale, options) {
    return getNumberFormat(locale, options).format(num);
}
const formatters = {
    values (value) {
        return isArray(value) ? value : '' + value;
    },
    numeric (tickValue, index, ticks) {
        if (tickValue === 0) return '0';
        const locale = this.chart.options.locale;
        let notation;
        let delta = tickValue;
        if (ticks.length > 1) {
            const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
            if (maxTick < 1e-4 || maxTick > 1e+15) notation = 'scientific';
            delta = calculateDelta(tickValue, ticks);
        }
        const logDelta = log10(Math.abs(delta));
        const numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
        const options = {
            notation,
            minimumFractionDigits: numDecimal,
            maximumFractionDigits: numDecimal
        };
        Object.assign(options, this.options.ticks.format);
        return formatNumber(tickValue, locale, options);
    },
    logarithmic (tickValue, index, ticks) {
        if (tickValue === 0) return '0';
        const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
        if ([
            1,
            2,
            3,
            5,
            10,
            15
        ].includes(remain) || index > 0.8 * ticks.length) return formatters.numeric.call(this, tickValue, index, ticks);
        return '';
    }
};
function calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) delta = tickValue - Math.floor(tickValue);
    return delta;
}
var Ticks = {
    formatters
};
function applyScaleDefaults(defaults) {
    defaults.set('scale', {
        display: true,
        offset: false,
        reverse: false,
        beginAtZero: false,
        bounds: 'ticks',
        clip: true,
        grace: 0,
        grid: {
            display: true,
            lineWidth: 1,
            drawOnChartArea: true,
            drawTicks: true,
            tickLength: 8,
            tickWidth: (_ctx, options)=>options.lineWidth,
            tickColor: (_ctx, options)=>options.color,
            offset: false
        },
        border: {
            display: true,
            dash: [],
            dashOffset: 0.0,
            width: 1
        },
        title: {
            display: false,
            text: '',
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: false,
            textStrokeWidth: 0,
            textStrokeColor: '',
            padding: 3,
            display: true,
            autoSkip: true,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Ticks.formatters.values,
            minor: {},
            major: {},
            align: 'center',
            crossAlign: 'near',
            showLabelBackdrop: false,
            backdropColor: 'rgba(255, 255, 255, 0.75)',
            backdropPadding: 2
        }
    });
    defaults.route('scale.ticks', 'color', '', 'color');
    defaults.route('scale.grid', 'color', '', 'borderColor');
    defaults.route('scale.border', 'color', '', 'borderColor');
    defaults.route('scale.title', 'color', '', 'color');
    defaults.describe('scale', {
        _fallback: false,
        _scriptable: (name)=>!name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser',
        _indexable: (name)=>name !== 'borderDash' && name !== 'tickBorderDash' && name !== 'dash'
    });
    defaults.describe('scales', {
        _fallback: 'scale'
    });
    defaults.describe('scale.ticks', {
        _scriptable: (name)=>name !== 'backdropPadding' && name !== 'callback',
        _indexable: (name)=>name !== 'backdropPadding'
    });
}
const overrides = Object.create(null);
const descriptors = Object.create(null);
function getScope$1(node, key) {
    if (!key) return node;
    const keys = key.split('.');
    for(let i = 0, n = keys.length; i < n; ++i){
        const k = keys[i];
        node = node[k] || (node[k] = Object.create(null));
    }
    return node;
}
function set(root, scope, values) {
    if (typeof scope === 'string') return merge(getScope$1(root, scope), values);
    return merge(getScope$1(root, ''), scope);
}
class Defaults {
    constructor(_descriptors, _appliers){
        this.animation = undefined;
        this.backgroundColor = 'rgba(0,0,0,0.1)';
        this.borderColor = 'rgba(0,0,0,0.1)';
        this.color = '#666';
        this.datasets = {};
        this.devicePixelRatio = (context)=>context.chart.platform.getDevicePixelRatio();
        this.elements = {};
        this.events = [
            'mousemove',
            'mouseout',
            'click',
            'touchstart',
            'touchmove'
        ];
        this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: 'normal',
            lineHeight: 1.2,
            weight: null
        };
        this.hover = {};
        this.hoverBackgroundColor = (ctx, options)=>getHoverColor(options.backgroundColor);
        this.hoverBorderColor = (ctx, options)=>getHoverColor(options.borderColor);
        this.hoverColor = (ctx, options)=>getHoverColor(options.color);
        this.indexAxis = 'x';
        this.interaction = {
            mode: 'nearest',
            intersect: true,
            includeInvisible: false
        };
        this.maintainAspectRatio = true;
        this.onHover = null;
        this.onClick = null;
        this.parsing = true;
        this.plugins = {};
        this.responsive = true;
        this.scale = undefined;
        this.scales = {};
        this.showLine = true;
        this.drawActiveElementsOnTop = true;
        this.describe(_descriptors);
        this.apply(_appliers);
    }
    set(scope, values) {
        return set(this, scope, values);
    }
    get(scope) {
        return getScope$1(this, scope);
    }
    describe(scope, values) {
        return set(descriptors, scope, values);
    }
    override(scope, values) {
        return set(overrides, scope, values);
    }
    route(scope, name, targetScope, targetName) {
        const scopeObject = getScope$1(this, scope);
        const targetScopeObject = getScope$1(this, targetScope);
        const privateName = '_' + name;
        Object.defineProperties(scopeObject, {
            [privateName]: {
                value: scopeObject[name],
                writable: true
            },
            [name]: {
                enumerable: true,
                get () {
                    const local = this[privateName];
                    const target = targetScopeObject[targetName];
                    if (isObject(local)) return Object.assign({}, target, local);
                    return valueOrDefault(local, target);
                },
                set (value) {
                    this[privateName] = value;
                }
            }
        });
    }
    apply(appliers) {
        appliers.forEach((apply)=>apply(this));
    }
}
var defaults = /* #__PURE__ */ new Defaults({
    _scriptable: (name)=>!name.startsWith('on'),
    _indexable: (name)=>name !== 'events',
    hover: {
        _fallback: 'interaction'
    },
    interaction: {
        _scriptable: false,
        _indexable: false
    }
}, [
    applyAnimationsDefaults,
    applyLayoutsDefaults,
    applyScaleDefaults
]);
/**
 * Converts the given font object into a CSS font string.
 * @param font - A font object.
 * @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */ function toFontString(font) {
    if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) return null;
    return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
}
/**
 * @private
 */ function _measureText(ctx, data, gc, longest, string) {
    let textWidth = data[string];
    if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
    }
    if (textWidth > longest) longest = textWidth;
    return longest;
}
/**
 * @private
 */ // eslint-disable-next-line complexity
function _longestText(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i, j, jlen, thing, nestedThing;
    for(i = 0; i < ilen; i++){
        thing = arrayOfThings[i];
        // Undefined strings and arrays should not be measured
        if (thing !== undefined && thing !== null && !isArray(thing)) longest = _measureText(ctx, data, gc, longest, thing);
        else if (isArray(thing)) // if it is an array lets measure each element
        // to do maybe simplify this function a bit so we can do this more recursively?
        for(j = 0, jlen = thing.length; j < jlen; j++){
            nestedThing = thing[j];
            // Undefined strings and arrays should not be measured
            if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
        for(i = 0; i < gcLen; i++)delete data[gc[i]];
        gc.splice(0, gcLen);
    }
    return longest;
}
/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */ function _alignPixel(chart, pixel, width) {
    const devicePixelRatio = chart.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
/**
 * Clears the entire canvas.
 */ function clearCanvas(canvas, ctx) {
    if (!ctx && !canvas) return;
    ctx = ctx || canvas.getContext('2d');
    ctx.save();
    // canvas.width and canvas.height do not consider the canvas transform,
    // while clearRect does
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
}
function drawPoint(ctx, options, x, y) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    drawPointLegend(ctx, options, x, y, null);
}
// eslint-disable-next-line complexity
function drawPointLegend(ctx, options, x, y, w) {
    let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * RAD_PER_DEG;
    if (style && typeof style === 'object') {
        type = style.toString();
        if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rad);
            ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
            ctx.restore();
            return;
        }
    }
    if (isNaN(radius) || radius <= 0) return;
    ctx.beginPath();
    switch(style){
        // Default includes circle
        default:
            if (w) ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
            else ctx.arc(x, y, radius, 0, TAU);
            ctx.closePath();
            break;
        case 'triangle':
            width = w ? w / 2 : radius;
            ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            rad += TWO_THIRDS_PI;
            ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
            ctx.closePath();
            break;
        case 'rectRounded':
            // NOTE: the rounded rect implementation changed to use `arc` instead of
            // `quadraticCurveTo` since it generates better results when rect is
            // almost a circle. 0.516 (instead of 0.5) produces results with visually
            // closer proportion to the previous impl and it is inscribed in the
            // circle with `radius`. For more details, see the following PRs:
            // https://github.com/chartjs/Chart.js/issues/5597
            // https://github.com/chartjs/Chart.js/issues/5858
            cornerRadius = radius * 0.516;
            size = radius - cornerRadius;
            xOffset = Math.cos(rad + QUARTER_PI) * size;
            xOffsetW = Math.cos(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
            yOffset = Math.sin(rad + QUARTER_PI) * size;
            yOffsetW = Math.sin(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
            ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
            ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - HALF_PI, rad);
            ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + HALF_PI);
            ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
            ctx.closePath();
            break;
        case 'rect':
            if (!rotation) {
                size = Math.SQRT1_2 * radius;
                width = w ? w / 2 : size;
                ctx.rect(x - width, y - size, 2 * width, 2 * size);
                break;
            }
            rad += QUARTER_PI;
        /* falls through */ case 'rectRot':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            ctx.closePath();
            break;
        case 'crossRot':
            rad += QUARTER_PI;
        /* falls through */ case 'cross':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case 'star':
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            rad += QUARTER_PI;
            xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
            xOffset = Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
            ctx.moveTo(x - xOffsetW, y - yOffset);
            ctx.lineTo(x + xOffsetW, y + yOffset);
            ctx.moveTo(x + yOffsetW, y - xOffset);
            ctx.lineTo(x - yOffsetW, y + xOffset);
            break;
        case 'line':
            xOffset = w ? w / 2 : Math.cos(rad) * radius;
            yOffset = Math.sin(rad) * radius;
            ctx.moveTo(x - xOffset, y - yOffset);
            ctx.lineTo(x + xOffset, y + yOffset);
            break;
        case 'dash':
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
            break;
        case false:
            ctx.closePath();
            break;
    }
    ctx.fill();
    if (options.borderWidth > 0) ctx.stroke();
}
/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */ function _isPointInArea(point, area, margin) {
    margin = margin || 0.5; // margin - default is to match rounded decimals
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function clipArea(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
}
function unclipArea(ctx) {
    ctx.restore();
}
/**
 * @private
 */ function _steppedLineTo(ctx, previous, target, flip, mode) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    if (mode === 'middle') {
        const midpoint = (previous.x + target.x) / 2.0;
        ctx.lineTo(midpoint, previous.y);
        ctx.lineTo(midpoint, target.y);
    } else if (mode === 'after' !== !!flip) ctx.lineTo(previous.x, target.y);
    else ctx.lineTo(target.x, previous.y);
    ctx.lineTo(target.x, target.y);
}
/**
 * @private
 */ function _bezierCurveTo(ctx, previous, target, flip) {
    if (!previous) return ctx.lineTo(target.x, target.y);
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function setRenderOpts(ctx, opts) {
    if (opts.translation) ctx.translate(opts.translation[0], opts.translation[1]);
    if (!isNullOrUndef(opts.rotation)) ctx.rotate(opts.rotation);
    if (opts.color) ctx.fillStyle = opts.color;
    if (opts.textAlign) ctx.textAlign = opts.textAlign;
    if (opts.textBaseline) ctx.textBaseline = opts.textBaseline;
}
function decorateText(ctx, x, y, line, opts) {
    if (opts.strikethrough || opts.underline) {
        /**
     * Now that IE11 support has been dropped, we can use more
     * of the TextMetrics object. The actual bounding boxes
     * are unflagged in Chrome, Firefox, Edge, and Safari so they
     * can be safely used.
     * See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
     */ const metrics = ctx.measureText(line);
        const left = x - metrics.actualBoundingBoxLeft;
        const right = x + metrics.actualBoundingBoxRight;
        const top = y - metrics.actualBoundingBoxAscent;
        const bottom = y + metrics.actualBoundingBoxDescent;
        const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.beginPath();
        ctx.lineWidth = opts.decorationWidth || 2;
        ctx.moveTo(left, yDecoration);
        ctx.lineTo(right, yDecoration);
        ctx.stroke();
    }
}
function drawBackdrop(ctx, opts) {
    const oldColor = ctx.fillStyle;
    ctx.fillStyle = opts.color;
    ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
    ctx.fillStyle = oldColor;
}
/**
 * Render text onto the canvas
 */ function renderText(ctx, text, x, y, font, opts = {}) {
    const lines = isArray(text) ? text : [
        text
    ];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
    let i, line;
    ctx.save();
    ctx.font = font.string;
    setRenderOpts(ctx, opts);
    for(i = 0; i < lines.length; ++i){
        line = lines[i];
        if (opts.backdrop) drawBackdrop(ctx, opts.backdrop);
        if (stroke) {
            if (opts.strokeColor) ctx.strokeStyle = opts.strokeColor;
            if (!isNullOrUndef(opts.strokeWidth)) ctx.lineWidth = opts.strokeWidth;
            ctx.strokeText(line, x, y, opts.maxWidth);
        }
        ctx.fillText(line, x, y, opts.maxWidth);
        decorateText(ctx, x, y, line, opts);
        y += Number(font.lineHeight);
    }
    ctx.restore();
}
/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */ function addRoundedRectPath(ctx, rect) {
    const { x, y, w, h, radius } = rect;
    // top left arc
    ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, 1.5 * PI, PI, true);
    // line from top left to bottom left
    ctx.lineTo(x, y + h - radius.bottomLeft);
    // bottom left arc
    ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
    // line from bottom left to bottom right
    ctx.lineTo(x + w - radius.bottomRight, y + h);
    // bottom right arc
    ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
    // line from bottom right to top right
    ctx.lineTo(x + w, y + radius.topRight);
    // top right arc
    ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
    // line from top right to top left
    ctx.lineTo(x + radius.topLeft, y);
}
const LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * @alias Chart.helpers.options
 * @namespace
 */ /**
 * Converts the given line height `value` in pixels for a specific font `size`.
 * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
 * @param size - The font size (in pixels) used to resolve relative `value`.
 * @returns The effective line height in pixels (size * 1.2 if value is invalid).
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
 * @since 2.7.0
 */ function toLineHeight(value, size) {
    const matches = ('' + value).match(LINE_HEIGHT);
    if (!matches || matches[1] === 'normal') return size * 1.2;
    value = +matches[2];
    switch(matches[3]){
        case 'px':
            return value;
        case '%':
            value /= 100;
            break;
    }
    return size * value;
}
const numberOrZero = (v)=>+v || 0;
function _readValueToProps(value, props) {
    const ret = {};
    const objProps = isObject(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = isObject(value) ? objProps ? (prop)=>valueOrDefault(value[prop], value[props[prop]]) : (prop)=>value[prop] : ()=>value;
    for (const prop of keys)ret[prop] = numberOrZero(read(prop));
    return ret;
}
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */ function toTRBL(value) {
    return _readValueToProps(value, {
        top: 'y',
        right: 'x',
        bottom: 'y',
        left: 'x'
    });
}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */ function toTRBLCorners(value) {
    return _readValueToProps(value, [
        'topLeft',
        'topRight',
        'bottomLeft',
        'bottomRight'
    ]);
}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */ function toPadding(value) {
    const obj = toTRBL(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */ function toFont(options, fallback) {
    options = options || {};
    fallback = fallback || defaults.font;
    let size = valueOrDefault(options.size, fallback.size);
    if (typeof size === 'string') size = parseInt(size, 10);
    let style = valueOrDefault(options.style, fallback.style);
    if (style && !('' + style).match(FONT_STYLE)) {
        console.warn('Invalid font style specified: "' + style + '"');
        style = undefined;
    }
    const font = {
        family: valueOrDefault(options.family, fallback.family),
        lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
        size,
        style,
        weight: valueOrDefault(options.weight, fallback.weight),
        string: ''
    };
    font.string = toFontString(font);
    return font;
}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */ function resolve(inputs, context, index, info) {
    let cacheable = true;
    let i, ilen, value;
    for(i = 0, ilen = inputs.length; i < ilen; ++i){
        value = inputs[i];
        if (value === undefined) continue;
        if (context !== undefined && typeof value === 'function') {
            value = value(context);
            cacheable = false;
        }
        if (index !== undefined && isArray(value)) {
            value = value[index % value.length];
            cacheable = false;
        }
        if (value !== undefined) {
            if (info && !cacheable) info.cacheable = false;
            return value;
        }
    }
}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */ function _addGrace(minmax, grace, beginAtZero) {
    const { min, max } = minmax;
    const change = toDimension(grace, (max - min) / 2);
    const keepZero = (value, add)=>beginAtZero && value === 0 ? 0 : value + add;
    return {
        min: keepZero(min, -Math.abs(change)),
        max: keepZero(max, change)
    };
}
function createContext(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
}
/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */ function _createResolver(scopes, prefixes = [
    ''
], rootScopes, fallback, getTarget = ()=>scopes[0]) {
    const finalRootScopes = rootScopes || scopes;
    if (typeof fallback === 'undefined') fallback = _resolve('_fallback', scopes);
    const cache = {
        [Symbol.toStringTag]: 'Object',
        _cacheable: true,
        _scopes: scopes,
        _rootScopes: finalRootScopes,
        _fallback: fallback,
        _getTarget: getTarget,
        override: (scope)=>_createResolver([
                scope,
                ...scopes
            ], prefixes, finalRootScopes, fallback)
    };
    return new Proxy(cache, {
        /**
     * A trap for the delete operator.
     */ deleteProperty (target, prop) {
            delete target[prop]; // remove from cache
            delete target._keys; // remove cached keys
            delete scopes[0][prop]; // remove from top level scope
            return true;
        },
        /**
     * A trap for getting property values.
     */ get (target, prop) {
            return _cached(target, prop, ()=>_resolveWithPrefixes(prop, prefixes, scopes, target));
        },
        /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */ getOwnPropertyDescriptor (target, prop) {
            return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
        },
        /**
     * A trap for Object.getPrototypeOf.
     */ getPrototypeOf () {
            return Reflect.getPrototypeOf(scopes[0]);
        },
        /**
     * A trap for the in operator.
     */ has (target, prop) {
            return getKeysFromAllScopes(target).includes(prop);
        },
        /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ ownKeys (target) {
            return getKeysFromAllScopes(target);
        },
        /**
     * A trap for setting property values.
     */ set (target, prop, value) {
            const storage = target._storage || (target._storage = getTarget());
            target[prop] = storage[prop] = value; // set to top level scope + cache
            delete target._keys; // remove cached keys
            return true;
        }
    });
}
/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */ function _attachContext(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
        _cacheable: false,
        _proxy: proxy,
        _context: context,
        _subProxy: subProxy,
        _stack: new Set(),
        _descriptors: _descriptors(proxy, descriptorDefaults),
        setContext: (ctx)=>_attachContext(proxy, ctx, subProxy, descriptorDefaults),
        override: (scope)=>_attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
        /**
     * A trap for the delete operator.
     */ deleteProperty (target, prop) {
            delete target[prop]; // remove from cache
            delete proxy[prop]; // remove from proxy
            return true;
        },
        /**
     * A trap for getting property values.
     */ get (target, prop, receiver) {
            return _cached(target, prop, ()=>_resolveWithContext(target, prop, receiver));
        },
        /**
     * A trap for Object.getOwnPropertyDescriptor.
     * Also used by Object.hasOwnProperty.
     */ getOwnPropertyDescriptor (target, prop) {
            return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
                enumerable: true,
                configurable: true
            } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
        },
        /**
     * A trap for Object.getPrototypeOf.
     */ getPrototypeOf () {
            return Reflect.getPrototypeOf(proxy);
        },
        /**
     * A trap for the in operator.
     */ has (target, prop) {
            return Reflect.has(proxy, prop);
        },
        /**
     * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
     */ ownKeys () {
            return Reflect.ownKeys(proxy);
        },
        /**
     * A trap for setting property values.
     */ set (target, prop, value) {
            proxy[prop] = value; // set to proxy
            delete target[prop]; // remove from cache
            return true;
        }
    });
}
/**
 * @private
 */ function _descriptors(proxy, defaults = {
    scriptable: true,
    indexable: true
}) {
    const { _scriptable = defaults.scriptable, _indexable = defaults.indexable, _allKeys = defaults.allKeys } = proxy;
    return {
        allKeys: _allKeys,
        scriptable: _scriptable,
        indexable: _indexable,
        isScriptable: isFunction(_scriptable) ? _scriptable : ()=>_scriptable,
        isIndexable: isFunction(_indexable) ? _indexable : ()=>_indexable
    };
}
const readKey = (prefix, name)=>prefix ? prefix + _capitalize(name) : name;
const needsSubResolver = (prop, value)=>isObject(value) && prop !== 'adapters' && (Object.getPrototypeOf(value) === null || value.constructor === Object);
function _cached(target, prop, resolve) {
    if (Object.prototype.hasOwnProperty.call(target, prop) || prop === 'constructor') return target[prop];
    const value = resolve();
    // cache the resolved value
    target[prop] = value;
    return value;
}
function _resolveWithContext(target, prop, receiver) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors } = target;
    let value = _proxy[prop]; // resolve from proxy
    // resolve with context
    if (isFunction(value) && descriptors.isScriptable(prop)) value = _resolveScriptable(prop, value, target, receiver);
    if (isArray(value) && value.length) value = _resolveArray(prop, value, target, descriptors.isIndexable);
    if (needsSubResolver(prop, value)) // if the resolved value is an object, create a sub resolver for it
    value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
    return value;
}
function _resolveScriptable(prop, getValue, target, receiver) {
    const { _proxy, _context, _subProxy, _stack } = target;
    if (_stack.has(prop)) throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
    _stack.add(prop);
    let value = getValue(_context, _subProxy || receiver);
    _stack.delete(prop);
    if (needsSubResolver(prop, value)) // When scriptable option returns an object, create a resolver on that.
    value = createSubResolver(_proxy._scopes, _proxy, prop, value);
    return value;
}
function _resolveArray(prop, value, target, isIndexable) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors } = target;
    if (typeof _context.index !== 'undefined' && isIndexable(prop)) return value[_context.index % value.length];
    else if (isObject(value[0])) {
        // Array of objects, return array or resolvers
        const arr = value;
        const scopes = _proxy._scopes.filter((s)=>s !== arr);
        value = [];
        for (const item of arr){
            const resolver = createSubResolver(scopes, _proxy, prop, item);
            value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
        }
    }
    return value;
}
function resolveFallback(fallback, prop, value) {
    return isFunction(fallback) ? fallback(prop, value) : fallback;
}
const getScope = (key, parent)=>key === true ? parent : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
function addScopes(set, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes){
        const scope = getScope(key, parent);
        if (scope) {
            set.add(scope);
            const fallback = resolveFallback(scope._fallback, key, value);
            if (typeof fallback !== 'undefined' && fallback !== key && fallback !== parentFallback) // When we reach the descriptor that defines a new _fallback, return that.
            // The fallback will resume to that new scope.
            return fallback;
        } else if (scope === false && typeof parentFallback !== 'undefined' && key !== parentFallback) // Fallback to `false` results to `false`, when falling back to different key.
        // For example `interaction` from `hover` or `plugins.tooltip` and `animation` from `animations`
        return null;
    }
    return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = resolveFallback(resolver._fallback, prop, value);
    const allScopes = [
        ...parentScopes,
        ...rootScopes
    ];
    const set = new Set();
    set.add(value);
    let key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
    if (key === null) return false;
    if (typeof fallback !== 'undefined' && fallback !== prop) {
        key = addScopesFromKey(set, allScopes, fallback, key, value);
        if (key === null) return false;
    }
    return _createResolver(Array.from(set), [
        ''
    ], rootScopes, fallback, ()=>subGetTarget(resolver, prop, value));
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
    while(key)key = addScopes(set, allScopes, key, fallback, item);
    return key;
}
function subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) parent[prop] = {};
    const target = parent[prop];
    if (isArray(target) && isObject(value)) // For array of objects, the object is used to store updated values
    return value;
    return target || {};
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix of prefixes){
        value = _resolve(readKey(prefix, prop), scopes);
        if (typeof value !== 'undefined') return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
    }
}
function _resolve(key, scopes) {
    for (const scope of scopes){
        if (!scope) continue;
        const value = scope[key];
        if (typeof value !== 'undefined') return value;
    }
}
function getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) keys = target._keys = resolveKeysFromAllScopes(target._scopes);
    return keys;
}
function resolveKeysFromAllScopes(scopes) {
    const set = new Set();
    for (const scope of scopes)for (const key of Object.keys(scope).filter((k)=>!k.startsWith('_')))set.add(key);
    return Array.from(set);
}
function _parseObjectDataRadialScale(meta, data, start, count) {
    const { iScale } = meta;
    const { key = 'r' } = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for(i = 0, ilen = count; i < ilen; ++i){
        index = i + start;
        item = data[index];
        parsed[i] = {
            r: iScale.parse(resolveObjectKey(item, key), index)
        };
    }
    return parsed;
}
const EPSILON = Number.EPSILON || 1e-14;
const getPoint = (points, i)=>i < points.length && !points[i].skip && points[i];
const getValueAxis = (indexAxis)=>indexAxis === 'x' ? 'y' : 'x';
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
    // Props to Rob Spencer at scaled innovation for his post on splining between points
    // http://scaledinnovation.com/analytics/splines/aboutSplines.html
    // This function must also respect "skipped" points
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = distanceBetweenPoints(current, previous);
    const d12 = distanceBetweenPoints(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    // If all points are the same, s01 & s02 will be inf
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t * s01; // scaling factor for triangle Ta
    const fb = t * s12;
    return {
        previous: {
            x: current.x - fa * (next.x - previous.x),
            y: current.y - fa * (next.y - previous.y)
        },
        next: {
            x: current.x + fb * (next.x - previous.x),
            y: current.y + fb * (next.y - previous.y)
        }
    };
}
/**
 * Adjust tangents to ensure monotonic properties
 */ function monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(let i = 0; i < pointsLen - 1; ++i){
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent || !pointAfter) continue;
        if (almostEquals(deltaK[i], 0, EPSILON)) {
            mK[i] = mK[i + 1] = 0;
            continue;
        }
        alphaK = mK[i] / deltaK[i];
        betaK = mK[i + 1] / deltaK[i];
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
        if (squaredMagnitude <= 9) continue;
        tauK = 3 / Math.sqrt(squaredMagnitude);
        mK[i] = alphaK * tauK * deltaK[i];
        mK[i + 1] = betaK * tauK * deltaK[i];
    }
}
function monotoneCompute(points, mK, indexAxis = 'x') {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(let i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent) continue;
        const iPixel = pointCurrent[indexAxis];
        const vPixel = pointCurrent[valueAxis];
        if (pointBefore) {
            delta = (iPixel - pointBefore[indexAxis]) / 3;
            pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
            pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
        }
        if (pointAfter) {
            delta = (pointAfter[indexAxis] - iPixel) / 3;
            pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
            pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
        }
    }
}
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */ function splineCurveMonotone(points, indexAxis = 'x') {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    // Calculate slopes (deltaK) and initialize tangents (mK)
    let i, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for(i = 0; i < pointsLen; ++i){
        pointBefore = pointCurrent;
        pointCurrent = pointAfter;
        pointAfter = getPoint(points, i + 1);
        if (!pointCurrent) continue;
        if (pointAfter) {
            const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
            // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
            deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
        }
        mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
    }
    monotoneAdjust(points, deltaK, mK);
    monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
    let i, ilen, point, inArea, inAreaPrev;
    let inAreaNext = _isPointInArea(points[0], area);
    for(i = 0, ilen = points.length; i < ilen; ++i){
        inAreaPrev = inArea;
        inArea = inAreaNext;
        inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
        if (!inArea) continue;
        point = points[i];
        if (inAreaPrev) {
            point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
            point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
        }
        if (inAreaNext) {
            point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
            point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
        }
    }
}
/**
 * @private
 */ function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
    let i, ilen, point, controlPoints;
    // Only consider points that are drawn in case the spanGaps option is used
    if (options.spanGaps) points = points.filter((pt)=>!pt.skip);
    if (options.cubicInterpolationMode === 'monotone') splineCurveMonotone(points, indexAxis);
    else {
        let prev = loop ? points[points.length - 1] : points[0];
        for(i = 0, ilen = points.length; i < ilen; ++i){
            point = points[i];
            controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
            point.cp1x = controlPoints.previous.x;
            point.cp1y = controlPoints.previous.y;
            point.cp2x = controlPoints.next.x;
            point.cp2y = controlPoints.next.y;
            prev = point;
        }
    }
    if (options.capBezierPoints) capBezierPoints(points, area);
}
/**
 * @private
 */ function _isDomSupported() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * @private
 */ function _getParentNode(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === '[object ShadowRoot]') parent = parent.host;
    return parent;
}
/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */ function parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === 'string') {
        valueInPixels = parseInt(styleValue, 10);
        if (styleValue.indexOf('%') !== -1) // percentage * size in dimension
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    } else valueInPixels = styleValue;
    return valueInPixels;
}
const getComputedStyle = (element)=>element.ownerDocument.defaultView.getComputedStyle(element, null);
function getStyle(el, property) {
    return getComputedStyle(el).getPropertyValue(property);
}
const positions = [
    'top',
    'right',
    'bottom',
    'left'
];
function getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? '-' + suffix : '';
    for(let i = 0; i < 4; i++){
        const pos = positions[i];
        result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
}
const useOffsetPos = (x, y, target)=>(x > 0 || y > 0) && (!target || !target.shadowRoot);
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */ function getCanvasPosition(e, canvas) {
    const touches = e.touches;
    const source = touches && touches.length ? touches[0] : e;
    const { offsetX, offsetY } = source;
    let box = false;
    let x, y;
    if (useOffsetPos(offsetX, offsetY, e.target)) {
        x = offsetX;
        y = offsetY;
    } else {
        const rect = canvas.getBoundingClientRect();
        x = source.clientX - rect.left;
        y = source.clientY - rect.top;
        box = true;
    }
    return {
        x,
        y,
        box
    };
}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */ function getRelativePosition(event, chart) {
    if ('native' in event) return event;
    const { canvas, currentDevicePixelRatio } = chart;
    const style = getComputedStyle(canvas);
    const borderBox = style.boxSizing === 'border-box';
    const paddings = getPositionedStyle(style, 'padding');
    const borders = getPositionedStyle(style, 'border', 'width');
    const { x, y, box } = getCanvasPosition(event, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width, height } = chart;
    if (borderBox) {
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    return {
        x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
        y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
}
function getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === undefined || height === undefined) {
        const container = canvas && _getParentNode(canvas);
        if (!container) {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
        } else {
            const rect = container.getBoundingClientRect(); // this is the border box of the container
            const containerStyle = getComputedStyle(container);
            const containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
            const containerPadding = getPositionedStyle(containerStyle, 'padding');
            width = rect.width - containerPadding.width - containerBorder.width;
            height = rect.height - containerPadding.height - containerBorder.height;
            maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
            maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
        }
    }
    return {
        width,
        height,
        maxWidth: maxWidth || INFINITY,
        maxHeight: maxHeight || INFINITY
    };
}
const round1 = (v)=>Math.round(v * 10) / 10;
// eslint-disable-next-line complexity
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = getComputedStyle(canvas);
    const margins = getPositionedStyle(style, 'margin');
    const maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
    const maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
    const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
    let { width, height } = containerSize;
    if (style.boxSizing === 'content-box') {
        const borders = getPositionedStyle(style, 'border', 'width');
        const paddings = getPositionedStyle(style, 'padding');
        width -= paddings.width + borders.width;
        height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
    width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) // https://github.com/chartjs/Chart.js/issues/4659
    // If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
    height = round1(width / 2);
    const maintainHeight = bbWidth !== undefined || bbHeight !== undefined;
    if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
        height = containerSize.height;
        width = round1(Math.floor(height * aspectRatio));
    }
    return {
        width,
        height
    };
}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */ function retinaScale(chart, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = Math.floor(chart.height * pixelRatio);
    const deviceWidth = Math.floor(chart.width * pixelRatio);
    chart.height = Math.floor(chart.height);
    chart.width = Math.floor(chart.width);
    const canvas = chart.canvas;
    // If no style has been set on the canvas, the render size is used as display size,
    // making the chart visually bigger, so let's enforce it to the "correct" values.
    // See https://github.com/chartjs/Chart.js/issues/3575
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
        canvas.style.height = `${chart.height}px`;
        canvas.style.width = `${chart.width}px`;
    }
    if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
        chart.currentDevicePixelRatio = pixelRatio;
        canvas.height = deviceHeight;
        canvas.width = deviceWidth;
        chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        return true;
    }
    return false;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */ const supportsEventListenerOptions = function() {
    let passiveSupported = false;
    try {
        const options = {
            get passive () {
                passiveSupported = true;
                return false;
            }
        };
        if (_isDomSupported()) {
            window.addEventListener('test', null, options);
            window.removeEventListener('test', null, options);
        }
    } catch (e) {
    // continue regardless of error
    }
    return passiveSupported;
}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */ function readUsedSize(element, property) {
    const value = getStyle(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : undefined;
}
/**
 * @private
 */ function _pointInLine(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: p1.y + t * (p2.y - p1.y)
    };
}
/**
 * @private
 */ function _steppedInterpolation(p1, p2, t, mode) {
    return {
        x: p1.x + t * (p2.x - p1.x),
        y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
    };
}
/**
 * @private
 */ function _bezierInterpolation(p1, p2, t, mode) {
    const cp1 = {
        x: p1.cp2x,
        y: p1.cp2y
    };
    const cp2 = {
        x: p2.cp1x,
        y: p2.cp1y
    };
    const a = _pointInLine(p1, cp1, t);
    const b = _pointInLine(cp1, cp2, t);
    const c = _pointInLine(cp2, p2, t);
    const d = _pointInLine(a, b, t);
    const e = _pointInLine(b, c, t);
    return _pointInLine(d, e, t);
}
const getRightToLeftAdapter = function(rectX, width) {
    return {
        x (x) {
            return rectX + rectX + width - x;
        },
        setWidth (w) {
            width = w;
        },
        textAlign (align) {
            if (align === 'center') return align;
            return align === 'right' ? 'left' : 'right';
        },
        xPlus (x, value) {
            return x - value;
        },
        leftForLtr (x, itemWidth) {
            return x - itemWidth;
        }
    };
};
const getLeftToRightAdapter = function() {
    return {
        x (x) {
            return x;
        },
        setWidth (w) {},
        textAlign (align) {
            return align;
        },
        xPlus (x, value) {
            return x + value;
        },
        leftForLtr (x, _itemWidth) {
            return x;
        }
    };
};
function getRtlAdapter(rtl, rectX, width) {
    return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
    let style, original;
    if (direction === 'ltr' || direction === 'rtl') {
        style = ctx.canvas.style;
        original = [
            style.getPropertyValue('direction'),
            style.getPropertyPriority('direction')
        ];
        style.setProperty('direction', direction, 'important');
        ctx.prevTextDirection = original;
    }
}
function restoreTextDirection(ctx, original) {
    if (original !== undefined) {
        delete ctx.prevTextDirection;
        ctx.canvas.style.setProperty('direction', original[0], original[1]);
    }
}
function propertyFn(property) {
    if (property === 'angle') return {
        between: _angleBetween,
        compare: _angleDiff,
        normalize: _normalizeAngle
    };
    return {
        between: _isBetween,
        compare: (a, b)=>a - b,
        normalize: (x)=>x
    };
}
function normalizeSegment({ start, end, count, loop, style }) {
    return {
        start: start % count,
        end: end % count,
        loop: loop && (end - start + 1) % count === 0,
        style
    };
}
function getSegment(segment, points, bounds) {
    const { property, start: startBound, end: endBound } = bounds;
    const { between, normalize } = propertyFn(property);
    const count = points.length;
    let { start, end, loop } = segment;
    let i, ilen;
    if (loop) {
        start += count;
        end += count;
        for(i = 0, ilen = count; i < ilen; ++i){
            if (!between(normalize(points[start % count][property]), startBound, endBound)) break;
            start--;
            end--;
        }
        start %= count;
        end %= count;
    }
    if (end < start) end += count;
    return {
        start,
        end,
        loop,
        style: segment.style
    };
}
function _boundSegment(segment, points, bounds) {
    if (!bounds) return [
        segment
    ];
    const { property, start: startBound, end: endBound } = bounds;
    const count = points.length;
    const { compare, between, normalize } = propertyFn(property);
    const { start, end, loop, style } = getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = ()=>between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = ()=>compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = ()=>inside || startIsBefore();
    const shouldStop = ()=>!inside || endIsBefore();
    for(let i = start, prev = start; i <= end; ++i){
        point = points[i % count];
        if (point.skip) continue;
        value = normalize(point[property]);
        if (value === prevValue) continue;
        inside = between(value, startBound, endBound);
        if (subStart === null && shouldStart()) subStart = compare(value, startBound) === 0 ? i : prev;
        if (subStart !== null && shouldStop()) {
            result.push(normalizeSegment({
                start: subStart,
                end: i,
                loop,
                count,
                style
            }));
            subStart = null;
        }
        prev = i;
        prevValue = value;
    }
    if (subStart !== null) result.push(normalizeSegment({
        start: subStart,
        end,
        loop,
        count,
        style
    }));
    return result;
}
function _boundSegments(line, bounds) {
    const result = [];
    const segments = line.segments;
    for(let i = 0; i < segments.length; i++){
        const sub = _boundSegment(segments[i], line.points, bounds);
        if (sub.length) result.push(...sub);
    }
    return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
    let start = 0;
    let end = count - 1;
    if (loop && !spanGaps) while(start < count && !points[start].skip)start++;
    while(start < count && points[start].skip)start++;
    start %= count;
    if (loop) end += start;
    while(end > start && points[end % count].skip)end--;
    end %= count;
    return {
        start,
        end
    };
}
function solidSegments(points, start, max, loop) {
    const count = points.length;
    const result = [];
    let last = start;
    let prev = points[start];
    let end;
    for(end = start + 1; end <= max; ++end){
        const cur = points[end % count];
        if (cur.skip || cur.stop) {
            if (!prev.skip) {
                loop = false;
                result.push({
                    start: start % count,
                    end: (end - 1) % count,
                    loop
                });
                start = last = cur.stop ? end : null;
            }
        } else {
            last = end;
            if (prev.skip) start = end;
        }
        prev = cur;
    }
    if (last !== null) result.push({
        start: start % count,
        end: last % count,
        loop
    });
    return result;
}
function _computeSegments(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) return [];
    const loop = !!line._loop;
    const { start, end } = findStartAndEnd(points, count, loop, spanGaps);
    if (spanGaps === true) return splitByStyles(line, [
        {
            start,
            end,
            loop
        }
    ], points, segmentOptions);
    const max = end < start ? end + count : end;
    const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) return segments;
    return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = readStyle(line.options);
    const { _datasetIndex: datasetIndex, options: { spanGaps } } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start = segments[0].start;
    let i = start;
    function addStyle(s, e, l, st) {
        const dir = spanGaps ? -1 : 1;
        if (s === e) return;
        s += count;
        while(points[s % count].skip)s -= dir;
        while(points[e % count].skip)e += dir;
        if (s % count !== e % count) {
            result.push({
                start: s % count,
                end: e % count,
                loop: l,
                style: st
            });
            prevStyle = st;
            start = e % count;
        }
    }
    for (const segment of segments){
        start = spanGaps ? start : segment.start;
        let prev = points[start % count];
        let style;
        for(i = start + 1; i <= segment.end; i++){
            const pt = points[i % count];
            style = readStyle(segmentOptions.setContext(createContext(chartContext, {
                type: 'segment',
                p0: prev,
                p1: pt,
                p0DataIndex: (i - 1) % count,
                p1DataIndex: i % count,
                datasetIndex
            })));
            if (styleChanged(style, prevStyle)) addStyle(start, i - 1, segment.loop, prevStyle);
            prev = pt;
            prevStyle = style;
        }
        if (start < i - 1) addStyle(start, i - 1, segment.loop, prevStyle);
    }
    return result;
}
function readStyle(options) {
    return {
        backgroundColor: options.backgroundColor,
        borderCapStyle: options.borderCapStyle,
        borderDash: options.borderDash,
        borderDashOffset: options.borderDashOffset,
        borderJoinStyle: options.borderJoinStyle,
        borderWidth: options.borderWidth,
        borderColor: options.borderColor
    };
}
function styleChanged(style, prevStyle) {
    if (!prevStyle) return false;
    const cache = [];
    const replacer = function(key, value) {
        if (!isPatternOrGradient(value)) return value;
        if (!cache.includes(value)) cache.push(value);
        return cache.indexOf(value);
    };
    return JSON.stringify(style, replacer) !== JSON.stringify(prevStyle, replacer);
}
function getSizeForArea(scale, chartArea, field) {
    return scale.options.clip ? scale[field] : chartArea[field];
}
function getDatasetArea(meta, chartArea) {
    const { xScale, yScale } = meta;
    if (xScale && yScale) return {
        left: getSizeForArea(xScale, chartArea, 'left'),
        right: getSizeForArea(xScale, chartArea, 'right'),
        top: getSizeForArea(yScale, chartArea, 'top'),
        bottom: getSizeForArea(yScale, chartArea, 'bottom')
    };
    return chartArea;
}
function getDatasetClipArea(chart, meta) {
    const clip = meta._clip;
    if (clip.disabled) return false;
    const area = getDatasetArea(meta, chart.chartArea);
    return {
        left: clip.left === false ? 0 : area.left - (clip.left === true ? 0 : clip.left),
        right: clip.right === false ? chart.width : area.right + (clip.right === true ? 0 : clip.right),
        top: clip.top === false ? 0 : area.top - (clip.top === true ? 0 : clip.top),
        bottom: clip.bottom === false ? chart.height : area.bottom + (clip.bottom === true ? 0 : clip.bottom)
    };
}

},{"@kurkle/color":"jJiT4","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"jJiT4":[function(require,module,exports,__globalThis) {
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Color", ()=>Color);
parcelHelpers.export(exports, "b2n", ()=>b2n);
parcelHelpers.export(exports, "b2p", ()=>b2p);
parcelHelpers.export(exports, "default", ()=>index_esm);
parcelHelpers.export(exports, "hexParse", ()=>hexParse);
parcelHelpers.export(exports, "hexString", ()=>hexString);
parcelHelpers.export(exports, "hsl2rgb", ()=>hsl2rgb);
parcelHelpers.export(exports, "hslString", ()=>hslString);
parcelHelpers.export(exports, "hsv2rgb", ()=>hsv2rgb);
parcelHelpers.export(exports, "hueParse", ()=>hueParse);
parcelHelpers.export(exports, "hwb2rgb", ()=>hwb2rgb);
parcelHelpers.export(exports, "lim", ()=>lim);
parcelHelpers.export(exports, "n2b", ()=>n2b);
parcelHelpers.export(exports, "n2p", ()=>n2p);
parcelHelpers.export(exports, "nameParse", ()=>nameParse);
parcelHelpers.export(exports, "p2b", ()=>p2b);
parcelHelpers.export(exports, "rgb2hsl", ()=>rgb2hsl);
parcelHelpers.export(exports, "rgbParse", ()=>rgbParse);
parcelHelpers.export(exports, "rgbString", ()=>rgbString);
parcelHelpers.export(exports, "rotate", ()=>rotate);
parcelHelpers.export(exports, "round", ()=>round);
function round(v) {
    return v + 0.5 | 0;
}
const lim = (v, l, h)=>Math.max(Math.min(v, h), l);
function p2b(v) {
    return lim(round(v * 2.55), 0, 255);
}
function b2p(v) {
    return lim(round(v / 2.55), 0, 100);
}
function n2b(v) {
    return lim(round(v * 255), 0, 255);
}
function b2n(v) {
    return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
    return lim(round(v * 100), 0, 100);
}
const map$1 = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
};
const hex = [
    ...'0123456789ABCDEF'
];
const h1 = (b)=>hex[b & 0xF];
const h2 = (b)=>hex[(b & 0xF0) >> 4] + hex[b & 0xF];
const eq = (b)=>(b & 0xF0) >> 4 === (b & 0xF);
const isShort = (v)=>eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
function hexParse(str) {
    var len = str.length;
    var ret;
    if (str[0] === '#') {
        if (len === 4 || len === 5) ret = {
            r: 255 & map$1[str[1]] * 17,
            g: 255 & map$1[str[2]] * 17,
            b: 255 & map$1[str[3]] * 17,
            a: len === 5 ? map$1[str[4]] * 17 : 255
        };
        else if (len === 7 || len === 9) ret = {
            r: map$1[str[1]] << 4 | map$1[str[2]],
            g: map$1[str[3]] << 4 | map$1[str[4]],
            b: map$1[str[5]] << 4 | map$1[str[6]],
            a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
        };
    }
    return ret;
}
const alpha = (a, f)=>a < 255 ? f(a) : '';
function hexString(v) {
    var f = isShort(v) ? h1 : h2;
    return v ? '#' + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : undefined;
}
const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12)=>l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return [
        f(0),
        f(8),
        f(4)
    ];
}
function hsv2rgbn(h, s, v) {
    const f = (n, k = (n + h / 60) % 6)=>v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [
        f(5),
        f(3),
        f(1)
    ];
}
function hwb2rgbn(h, w, b) {
    const rgb = hsl2rgbn(h, 1, 0.5);
    let i;
    if (w + b > 1) {
        i = 1 / (w + b);
        w *= i;
        b *= i;
    }
    for(i = 0; i < 3; i++){
        rgb[i] *= 1 - w - b;
        rgb[i] += w;
    }
    return rgb;
}
function hueValue(r, g, b, d, max) {
    if (r === max) return (g - b) / d + (g < b ? 6 : 0);
    if (g === max) return (b - r) / d + 2;
    return (r - g) / d + 4;
}
function rgb2hsl(v) {
    const range = 255;
    const r = v.r / range;
    const g = v.g / range;
    const b = v.b / range;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    let h, s, d;
    if (max !== min) {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = hueValue(r, g, b, d, max);
        h = h * 60 + 0.5;
    }
    return [
        h | 0,
        s || 0,
        l
    ];
}
function calln(f, a, b, c) {
    return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}
function hsl2rgb(h, s, l) {
    return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
    return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
    return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
    return (h % 360 + 360) % 360;
}
function hueParse(str) {
    const m = HUE_RE.exec(str);
    let a = 255;
    let v;
    if (!m) return;
    if (m[5] !== v) a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
    const h = hue(+m[2]);
    const p1 = +m[3] / 100;
    const p2 = +m[4] / 100;
    if (m[1] === 'hwb') v = hwb2rgb(h, p1, p2);
    else if (m[1] === 'hsv') v = hsv2rgb(h, p1, p2);
    else v = hsl2rgb(h, p1, p2);
    return {
        r: v[0],
        g: v[1],
        b: v[2],
        a: a
    };
}
function rotate(v, deg) {
    var h = rgb2hsl(v);
    h[0] = hue(h[0] + deg);
    h = hsl2rgb(h);
    v.r = h[0];
    v.g = h[1];
    v.b = h[2];
}
function hslString(v) {
    if (!v) return;
    const a = rgb2hsl(v);
    const h = a[0];
    const s = n2p(a[1]);
    const l = n2p(a[2]);
    return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
const map = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh'
};
const names$1 = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32'
};
function unpack() {
    const unpacked = {};
    const keys = Object.keys(names$1);
    const tkeys = Object.keys(map);
    let i, j, k, ok, nk;
    for(i = 0; i < keys.length; i++){
        ok = nk = keys[i];
        for(j = 0; j < tkeys.length; j++){
            k = tkeys[j];
            nk = nk.replace(k, map[k]);
        }
        k = parseInt(names$1[ok], 16);
        unpacked[nk] = [
            k >> 16 & 0xFF,
            k >> 8 & 0xFF,
            k & 0xFF
        ];
    }
    return unpacked;
}
let names;
function nameParse(str) {
    if (!names) {
        names = unpack();
        names.transparent = [
            0,
            0,
            0,
            0
        ];
    }
    const a = names[str.toLowerCase()];
    return a && {
        r: a[0],
        g: a[1],
        b: a[2],
        a: a.length === 4 ? a[3] : 255
    };
}
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
    const m = RGB_RE.exec(str);
    let a = 255;
    let r, g, b;
    if (!m) return;
    if (m[7] !== r) {
        const v = +m[7];
        a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
    }
    r = +m[1];
    g = +m[3];
    b = +m[5];
    r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
    g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
    b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
    return {
        r: r,
        g: g,
        b: b,
        a: a
    };
}
function rgbString(v) {
    return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
const to = (v)=>v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
const from = (v)=>v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
function interpolate(rgb1, rgb2, t) {
    const r = from(b2n(rgb1.r));
    const g = from(b2n(rgb1.g));
    const b = from(b2n(rgb1.b));
    return {
        r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
        g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
        b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
        a: rgb1.a + t * (rgb2.a - rgb1.a)
    };
}
function modHSL(v, i, ratio) {
    if (v) {
        let tmp = rgb2hsl(v);
        tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
        tmp = hsl2rgb(tmp);
        v.r = tmp[0];
        v.g = tmp[1];
        v.b = tmp[2];
    }
}
function clone(v, proto) {
    return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
    var v = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    if (Array.isArray(input)) {
        if (input.length >= 3) {
            v = {
                r: input[0],
                g: input[1],
                b: input[2],
                a: 255
            };
            if (input.length > 3) v.a = n2b(input[3]);
        }
    } else {
        v = clone(input, {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        });
        v.a = n2b(v.a);
    }
    return v;
}
function functionParse(str) {
    if (str.charAt(0) === 'r') return rgbParse(str);
    return hueParse(str);
}
class Color {
    constructor(input){
        if (input instanceof Color) return input;
        const type = typeof input;
        let v;
        if (type === 'object') v = fromObject(input);
        else if (type === 'string') v = hexParse(input) || nameParse(input) || functionParse(input);
        this._rgb = v;
        this._valid = !!v;
    }
    get valid() {
        return this._valid;
    }
    get rgb() {
        var v = clone(this._rgb);
        if (v) v.a = b2n(v.a);
        return v;
    }
    set rgb(obj) {
        this._rgb = fromObject(obj);
    }
    rgbString() {
        return this._valid ? rgbString(this._rgb) : undefined;
    }
    hexString() {
        return this._valid ? hexString(this._rgb) : undefined;
    }
    hslString() {
        return this._valid ? hslString(this._rgb) : undefined;
    }
    mix(color, weight) {
        if (color) {
            const c1 = this.rgb;
            const c2 = color.rgb;
            let w2;
            const p = weight === w2 ? 0.5 : weight;
            const w = 2 * p - 1;
            const a = c1.a - c2.a;
            const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
            w2 = 1 - w1;
            c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
            c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
            c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
            c1.a = p * c1.a + (1 - p) * c2.a;
            this.rgb = c1;
        }
        return this;
    }
    interpolate(color, t) {
        if (color) this._rgb = interpolate(this._rgb, color._rgb, t);
        return this;
    }
    clone() {
        return new Color(this.rgb);
    }
    alpha(a) {
        this._rgb.a = n2b(a);
        return this;
    }
    clearer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 - ratio;
        return this;
    }
    greyscale() {
        const rgb = this._rgb;
        const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
        rgb.r = rgb.g = rgb.b = val;
        return this;
    }
    opaquer(ratio) {
        const rgb = this._rgb;
        rgb.a *= 1 + ratio;
        return this;
    }
    negate() {
        const v = this._rgb;
        v.r = 255 - v.r;
        v.g = 255 - v.g;
        v.b = 255 - v.b;
        return this;
    }
    lighten(ratio) {
        modHSL(this._rgb, 2, ratio);
        return this;
    }
    darken(ratio) {
        modHSL(this._rgb, 2, -ratio);
        return this;
    }
    saturate(ratio) {
        modHSL(this._rgb, 1, ratio);
        return this;
    }
    desaturate(ratio) {
        modHSL(this._rgb, 1, -ratio);
        return this;
    }
    rotate(deg) {
        rotate(this._rgb, deg);
        return this;
    }
}
function index_esm(input) {
    return new Color(input);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"9pJxG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSwiperHome", ()=>initSwiperHome);
const initSwiperHome = ()=>{
    console.log("\uD83C\uDFE0 Swiper Home Page - Initializing components");
    var swiperrev = new Swiper(".swiper.is-rev", {
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-btn.is-next",
            prevEl: ".swiper-btn.is-prev"
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"3W7Bz":[function(require,module,exports,__globalThis) {
/**
 * FAQ Module
 * Controls the accordion behavior of FAQ items
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initFAQ", ()=>initFAQ);
function initFAQ() {
    // Wait for DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", ()=>{
        const faqItems = document.querySelectorAll(".qa-wrap");
        // Set initial state - all closed
        faqItems.forEach((item)=>{
            const answer = item.querySelector(".qa-answer");
            // Set initial grid-row-gap
            item.style.gridRowGap = "0rem";
            item.style.transition = "grid-row-gap 0.2s cubic-bezier(0.1, 0.1, 0.1, 1)";
            if (answer) {
                // Apply these styles directly
                answer.style.maxHeight = "0";
                answer.style.overflow = "hidden";
                answer.style.transition = "max-height 0.2s cubic-bezier(0.1, 0.1, 0.1, 0.1)";
            }
        });
        // Add click event listener to each FAQ item
        faqItems.forEach((item)=>{
            const answer = item.querySelector(".qa-answer");
            const svgContainer = item.querySelector(".plus-svg");
            if (answer && svgContainer) {
                // Get the vertical line of the plus sign (first path in the SVG)
                const verticalLine = svgContainer.querySelector("path:first-child");
                // Make sure transitions are smooth
                if (verticalLine) verticalLine.style.transition = "opacity 0.3s cubic-bezier(0.1, 0.1, 0.1, 0.1)";
                // Add click event to the entire qa-wrap element
                item.addEventListener("click", (e)=>{
                    e.preventDefault();
                    // Toggle active class
                    const isActive = item.classList.contains("active");
                    // Toggle SVG animation - transform plus to minus
                    if (isActive) {
                        // Return to plus by showing vertical line
                        if (verticalLine) verticalLine.setAttribute("opacity", "1");
                        // Set grid-row-gap to 0rem when closed
                        item.style.gridRowGap = "0rem";
                    } else {
                        // Transform to minus by hiding vertical line
                        if (verticalLine) verticalLine.setAttribute("opacity", "0");
                        // Set grid-row-gap to 1rem when open
                        item.style.gridRowGap = "1rem";
                    }
                    // Toggle answer visibility with slide animation
                    if (isActive) {
                        // Close the answer
                        answer.style.maxHeight = "0";
                        item.classList.remove("active");
                    } else {
                        // Open the answer
                        item.classList.add("active");
                        // Set a specific large value for max-height to ensure the content is fully visible
                        answer.style.maxHeight = "1000px";
                    }
                });
            }
        });
    });
}
// Initialize the module
initFAQ();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"kAGjj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gridPulse", ()=>gridPulse);
const gridPulse = ()=>{
    const grid = document.querySelector("#grid-pulse");
    if (!grid) return;
    // Create keyframe styles for multiple staggered pulsating rings
    const style = document.createElement("style");
    style.textContent = `
    @keyframes pulse-ring {
      0% {
        transform: scale(0.8);
        opacity: 0.7;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }

    @keyframes gridScale {
      0% {
        transform: translate3d(0,0,0) scale(1);
      }
      100% {
        transform: translate3d(0,0,0) scale(1.15);
      }
    }

    #grid-pulse {
      position: relative;
      transform-origin: center;
      animation: gridScale 2s infinite alternate cubic-bezier(0.445, 0.05, 0.55, 0.95);
      backface-visibility: hidden;
      will-change: transform;
    }

    #grid-pulse::before,
    #grid-pulse::after,
    #grid-pulse .ring {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid rgba(51, 178, 118, 0.4);
      border-radius: inherit;
      pointer-events: none;
    }

    #grid-pulse::before {
      animation: pulse-ring 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
      animation-delay: 0s;
    }

    #grid-pulse::after {
      animation: pulse-ring 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
      animation-delay: 0.6s;
    }

    #grid-pulse .ring {
      animation: pulse-ring 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
      animation-delay: 1.2s;
    }
  `;
    document.head.appendChild(style);
    // Add the third ring element
    const thirdRing = document.createElement("div");
    thirdRing.className = "ring";
    grid.appendChild(thirdRing);
    // Set base styles for the grid element
    grid.style.position = "relative";
    grid.style.transformOrigin = "center";
    grid.style.transform = "translate3d(0,0,0)"; // Force GPU acceleration
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"gCsUJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Initializes the page loader and integrates it with Xatom page transitions.
 * This is the main function to call in your app.
 */ parcelHelpers.export(exports, "initPageLoader", ()=>initPageLoader);
// Also export the individual functions for more granular control if needed
parcelHelpers.export(exports, "showLoader", ()=>showLoader);
parcelHelpers.export(exports, "hideLoader", ()=>hideLoader);
var _animejs = require("animejs");
// IDs for easier targeting
const LOADER_ID = "fw-page-loader";
const LOGO_ID = "fw-loader-logo";
const RINGS_CONTAINER_ID = "fw-loader-rings";
const MIN_DISPLAY_TIME = 1750; // Minimum time to display the loader on initial page load (ms)
const MIN_TRANSITION_TIME = 1200; // Minimum time to display the loader during page transitions (ms)
const NUM_RINGS = 3; // Number of ripple rings
// Remove the explicit type annotation to let TypeScript infer it
let logoAnimation = null;
let ringsAnimation = null;
let initialLoadCompleted = false;
let transitionInProgress = false;
let scrollPosition = 0; // Store scroll position when disabling scroll
/**
 * Creates the loader HTML structure and appends it to the body.
 */ function createLoaderHTML() {
    // Prevent creating multiple loaders
    if (document.getElementById(LOADER_ID)) return;
    const loader = document.createElement("div");
    loader.id = LOADER_ID;
    // Basic styles for the loader container
    Object.assign(loader.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: "9999",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
        opacity: "1",
        visibility: "visible",
        pointerEvents: "auto",
        transition: "opacity 0.5s ease"
    });
    // Create rings container for the ripple effect
    const ringsContainer = document.createElement("div");
    ringsContainer.id = RINGS_CONTAINER_ID;
    Object.assign(ringsContainer.style, {
        position: "absolute",
        display: "flex",
        opacity: "0.5",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "2"
    });
    // Create the ripple rings
    for(let i = 0; i < NUM_RINGS; i++){
        const ring = document.createElement("div");
        ring.className = "fw-loader-ring";
        // Style the rings
        Object.assign(ring.style, {
            position: "absolute",
            border: "2px solid rgba(2, 184, 8, 0.87)",
            borderRadius: "50%",
            width: "120px",
            height: "120px",
            opacity: "0",
            transform: "scale(0.8)",
            transformOrigin: "center center",
            willChange: "transform, opacity",
            transition: "transform 0.5s ease, opacity 0.5s ease"
        });
        ringsContainer.appendChild(ring);
    }
    // Logo element
    const logo = document.createElement("img");
    logo.id = LOGO_ID;
    logo.src = "https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/67c803c318bca5d2cf63557a_logo-forward-energie.png";
    logo.alt = "Loading...";
    Object.assign(logo.style, {
        maxWidth: "180px",
        maxHeight: "120px",
        position: "relative",
        zIndex: "3",
        transform: "translate3d(0,0,0) scale(1)",
        willChange: "transform",
        backfaceVisibility: "hidden",
        transition: "transform 0.8s cubic-bezier(0.445, 0.05, 0.55, 0.95)",
        animation: "logoScale .8s infinite alternate cubic-bezier(0.445, 0.05, 0.55, 0.95)"
    });
    // Add elements to the loader
    loader.appendChild(ringsContainer);
    loader.appendChild(logo);
    document.body.appendChild(loader);
    // Add CSS animation for the logo
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
    @keyframes logoScale {
      0% {
        transform: translate3d(0,0,0) scale(1);
      }
      100% {
        transform: translate3d(0,0,0) scale(1.15);
      }
    }
    
    /* Add no-scroll class styles to prevent scrolling */
    body.no-scroll {
      overflow: hidden;
      position: fixed;
      width: 100%;
      height: 100%;
    }
  `;
    document.head.appendChild(styleSheet);
    // Initially disable scrolling since the loader starts visible
    disableScroll();
}
/**
 * Disables page scrolling while loader is active
 */ function disableScroll() {
    if (typeof window === "undefined") return;
    // Store current scroll position
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    // Add no-scroll class to body
    document.body.classList.add("no-scroll");
    // Set the body's top position to the negative of the current scroll position
    // This prevents the visual "jump" when disabling scroll
    document.body.style.top = `-${scrollPosition}px`;
}
/**
 * Enables page scrolling after loader is hidden
 */ function enableScroll() {
    if (typeof window === "undefined") return;
    // Remove no-scroll class
    document.body.classList.remove("no-scroll");
    // Reset the body position
    document.body.style.top = "";
    // Restore scroll position
    window.scrollTo({
        top: scrollPosition
    });
}
/**
 * Starts the pulsating animation for the logo.
 */ function startLogoAnimation() {
    const logoElement = document.getElementById(LOGO_ID);
    if (!logoElement) return;
    // The logo animation is now handled by CSS animation
    // Start only the ripple animation with anime.js
    startRippleAnimation();
}
/**
 * Starts the ripple animation for the rings around the logo.
 */ function startRippleAnimation() {
    const rings = document.querySelectorAll(".fw-loader-ring");
    if (!rings.length) return;
    // If animation exists, stop it to prevent stacking animations
    if (ringsAnimation) ringsAnimation.pause();
    // Animate the rings with a staggered delay to create the ripple effect
    ringsAnimation = (0, _animejs.animate)(".fw-loader-ring", {
        scale: [
            0.8,
            2
        ],
        opacity: [
            0.7,
            0
        ],
        duration: 2000,
        delay: function(el, i) {
            return i * 600; // Increased stagger for smoother sequence
        },
        easing: "easeOutQuad",
        loop: true,
        endDelay: function(el, i) {
            return (NUM_RINGS - 1 - i) * 400; // Staggered end delay
        }
    });
}
/**
 * Pauses the pulsating animation for the logo.
 */ function stopLogoAnimation() {
    // The logo animation is now handled by CSS
    if (ringsAnimation) ringsAnimation.pause();
}
/**
 * Fades in the loader element and starts the logo animation.
 * Returns a Promise that resolves when the animation is complete.
 */ function showLoader() {
    return new Promise((resolve)=>{
        const loaderElement = document.getElementById(LOADER_ID);
        if (!loaderElement) {
            console.error("Page loader element not found for showLoader.");
            resolve();
            return;
        }
        // Disable scrolling
        disableScroll();
        // Set flag that transition is in progress
        transitionInProgress = true;
        // Use CSS transitions instead of anime.js for smoother fade
        loaderElement.style.visibility = "visible";
        loaderElement.style.pointerEvents = "auto";
        // Use a timeout to ensure the visibility change has been applied
        setTimeout(()=>{
            loaderElement.style.opacity = "1";
            startLogoAnimation(); // Start pulsing
            // Wait for transition to complete (match the CSS transition duration)
            setTimeout(()=>{
                resolve();
            }, 500); // Match the transition time from CSS
        }, 10);
    });
}
/**
 * Fades out the loader element and stops the logo animation.
 * Returns a Promise that resolves when the animation is complete.
 */ function hideLoader() {
    return new Promise((resolve)=>{
        const loaderElement = document.getElementById(LOADER_ID);
        if (!loaderElement) {
            console.error("Page loader element not found for hideLoader.");
            resolve();
            return;
        }
        // Use CSS transitions for smoother fade
        loaderElement.style.opacity = "0";
        loaderElement.style.pointerEvents = "none";
        // Wait for transition to complete (match the CSS transition duration)
        setTimeout(()=>{
            loaderElement.style.visibility = "hidden";
            stopLogoAnimation();
            transitionInProgress = false;
            // Enable scrolling
            enableScroll();
            resolve();
        }, 500); // Match the transition time from CSS
    });
}
/**
 * Handles the initial page load - shows loader and hides after minimum time
 * and page load are both complete.
 */ function handleInitialPageLoad() {
    let pageLoaded = false;
    let timerElapsed = false;
    let hardTimeoutElapsed = false;
    // Start the logo animation immediately
    startLogoAnimation();
    // Check if any condition is met to hide the loader
    function checkHideConditions() {
        if (pageLoaded && timerElapsed && !initialLoadCompleted || hardTimeoutElapsed) {
            hideLoader();
            initialLoadCompleted = true;
        }
    }
    // Set up minimum display time timer
    setTimeout(()=>{
        timerElapsed = true;
        checkHideConditions();
    }, MIN_DISPLAY_TIME);
    // Listen for window load event
    window.addEventListener("load", ()=>{
        pageLoaded = true;
        checkHideConditions();
    });
    // Listen for pageshow (bfcache restore)
    window.addEventListener("pageshow", (event)=>{
        if (event.persisted) {
            pageLoaded = true;
            checkHideConditions();
        }
    });
    // Hard timeout: forcibly hide loader after 5 seconds (safety net)
    setTimeout(()=>{
        hardTimeoutElapsed = true;
        checkHideConditions();
    }, 5000);
}
/**
 * Handles page transition sequence with minimum display time
 */ async function handlePageTransition(callback) {
    // Show loader on current page
    await showLoader();
    // Set minimum display time for transition
    const startTime = Date.now();
    // Execute the actual page change
    callback();
    // Ensure loader stays visible for minimum time
    const elapsedTime = Date.now() - startTime;
    if (elapsedTime < MIN_TRANSITION_TIME) await new Promise((resolve)=>setTimeout(resolve, MIN_TRANSITION_TIME - elapsedTime));
// Loader will be hidden by the afterEnter hook
}
function initPageLoader() {
    // Create the loader HTML
    createLoaderHTML();
    // Handle initial page load
    handleInitialPageLoad();
    // Get the Xatom page object
    try {
        const xatom = require("d5c7865348c4ac64");
        if (xatom && xatom.page) {
            // Show loader before leaving the current page
            xatom.page.beforeLeave(async (data, done)=>{
                // Use our enhanced transition handler
                await handlePageTransition(done);
            });
            // Hide loader after the new page has entered and is ready
            xatom.page.afterEnter(async ()=>{
                // Ensure minimum transition time has passed before hiding
                await hideLoader();
            });
            console.log("Page loader successfully initialized with Xatom");
        } else console.warn("Xatom page object not found. Please manually integrate the page loader.");
    } catch (error) {
        console.warn("Failed to integrate with Xatom automatically:", error);
        console.info("You can manually control the loader using the exported functions.");
    }
    // Return the control functions so they can be used manually if needed
    return {
        show: showLoader,
        hide: hideLoader
    };
}
// Auto-initialize the loader for immediate display on script load
if (typeof window !== "undefined") {
    // Only run in browser environment, not during SSR
    createLoaderHTML();
    startLogoAnimation();
}

},{"animejs":"cB1Dv","d5c7865348c4ac64":"8w4K8","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"cB1Dv":[function(require,module,exports,__globalThis) {
/**
 * anime.js - ESM
 * @version v4.0.1
 * @author Julian Garnier
 * @license MIT
 * @copyright (c) 2025 Julian Garnier
 * @see https://animejs.com
 */ /**
 * @typedef {Object} DefaultsParams
 * @property {number|string} [id]
 * @property {PercentageKeyframes|DurationKeyframes} [keyframes]
 * @property {EasingParam} [playbackEase]
 * @property {number} [playbackRate]
 * @property {number} [frameRate]
 * @property {number|boolean} [loop]
 * @property {boolean} [reversed]
 * @property {boolean} [alternate]
 * @property {boolean|ScrollObserver} [autoplay]
 * @property {number|FunctionValue} [duration]
 * @property {number|FunctionValue} [delay]
 * @property {number} [loopDelay]
 * @property {EasingParam} [ease]
 * @property {'none'|'replace'|'blend'|compositionTypes} [composition]
 * @property {(v: any) => any} [modifier]
 * @property {(tickable: Tickable) => void} [onBegin]
 * @property {(tickable: Tickable) => void} [onBeforeUpdate]
 * @property {(tickable: Tickable) => void} [onUpdate]
 * @property {(tickable: Tickable) => void} [onLoop]
 * @property {(tickable: Tickable) => void} [onPause]
 * @property {(tickable: Tickable) => void} [onComplete]
 * @property {(renderable: Renderable) => void} [onRender]
 */ /** @typedef {JSAnimation|Timeline} Renderable */ /** @typedef {Timer|Renderable} Tickable */ /** @typedef {Timer&JSAnimation&Timeline} CallbackArgument */ /** @typedef {Animatable|Tickable|Draggable|ScrollObserver|Scope} Revertible */ /**
 * @callback EasingFunction
 * @param {Number} time
 * @return {Number}
 */ /**
 * @typedef {('linear'|'linear(x1, x2 25%, x3)'|'in'|'out'|'inOut'|'inQuad'|'outQuad'|'inOutQuad'|'inCubic'|'outCubic'|'inOutCubic'|'inQuart'|'outQuart'|'inOutQuart'|'inQuint'|'outQuint'|'inOutQuint'|'inSine'|'outSine'|'inOutSine'|'inCirc'|'outCirc'|'inOutCirc'|'inExpo'|'outExpo'|'inOutExpo'|'inBounce'|'outBounce'|'inOutBounce'|'inBack'|'outBack'|'inOutBack'|'inElastic'|'outElastic'|'inOutElastic'|'irregular'|'cubicBezier'|'steps'|'in(p = 1.675)'|'out(p = 1.675)'|'inOut(p = 1.675)'|'inBack(overshoot = 1.70158)'|'outBack(overshoot = 1.70158)'|'inOutBack(overshoot = 1.70158)'|'inElastic(amplitude = 1, period = .3)'|'outElastic(amplitude = 1, period = .3)'|'inOutElastic(amplitude = 1, period = .3)'|'irregular(length = 10, randomness = 1)'|'cubicBezier(x1, y1, x2, y2)'|'steps(steps = 10)')} EaseStringParamNames
 */ // A hack to get both ease names suggestions AND allow any strings
// https://github.com/microsoft/TypeScript/issues/29729#issuecomment-460346421
/** @typedef {(String & {})|EaseStringParamNames|EasingFunction|Spring} EasingParam */ /** @typedef {HTMLElement|SVGElement} DOMTarget */ /** @typedef {Record<String, any>} JSTarget */ /** @typedef {DOMTarget|JSTarget} Target */ /** @typedef {Target|NodeList|String} TargetSelector */ /** @typedef {DOMTarget|NodeList|String} DOMTargetSelector */ /** @typedef {Array.<DOMTargetSelector>|DOMTargetSelector} DOMTargetsParam */ /** @typedef {Array.<DOMTarget>} DOMTargetsArray */ /** @typedef {Array.<JSTarget>|JSTarget} JSTargetsParam */ /** @typedef {Array.<JSTarget>} JSTargetsArray */ /** @typedef {Array.<TargetSelector>|TargetSelector} TargetsParam */ /** @typedef {Array.<Target>} TargetsArray */ /**
 * @callback FunctionValue
 * @param {Target} target - The animated target
 * @param {Number} index - The target index
 * @param {Number} length - The total number of animated targets
 * @return {Number|String|TweenObjectValue|Array.<Number|String|TweenObjectValue>}
 */ /**
 * @callback TweenModifier
 * @param {Number} value - The animated value
 * @return {Number|String}
 */ /** @typedef {[Number, Number, Number, Number]} ColorArray */ /**
 * @template T
 * @callback Callback
 * @param {T} self - Returns itself
 * @param {PointerEvent} [e]
 * @return {*}
 */ /**
 * @template {object} T
 * @typedef {Object} TickableCallbacks
 * @property {Callback<T>} [onBegin]
 * @property {Callback<T>} [onBeforeUpdate]
 * @property {Callback<T>} [onUpdate]
 * @property {Callback<T>} [onLoop]
 * @property {Callback<T>} [onPause]
 * @property {Callback<T>} [onComplete]
 */ /**
 * @template {object} T
 * @typedef {Object} RenderableCallbacks
 * @property {Callback<T>} [onRender]
 */ /**
 * @typedef {Object} Tween
 * @property {Number} id
 * @property {JSAnimation} parent
 * @property {String} property
 * @property {Target} target
 * @property {String|Number} _value
 * @property {Function|null} _func
 * @property {EasingFunction} _ease
 * @property {Array.<Number>} _fromNumbers
 * @property {Array.<Number>} _toNumbers
 * @property {Array.<String>} _strings
 * @property {Number} _fromNumber
 * @property {Number} _toNumber
 * @property {Array.<Number>} _numbers
 * @property {Number} _number
 * @property {String} _unit
 * @property {TweenModifier} _modifier
 * @property {Number} _currentTime
 * @property {Number} _delay
 * @property {Number} _updateDuration
 * @property {Number} _startTime
 * @property {Number} _changeDuration
 * @property {Number} _absoluteStartTime
 * @property {tweenTypes} _tweenType
 * @property {valueTypes} _valueType
 * @property {Number} _composition
 * @property {Number} _isOverlapped
 * @property {Number} _isOverridden
 * @property {Number} _renderTransforms
 * @property {Tween} _prevRep
 * @property {Tween} _nextRep
 * @property {Tween} _prevAdd
 * @property {Tween} _nextAdd
 * @property {Tween} _prev
 * @property {Tween} _next
 */ /**
 * @typedef TweenDecomposedValue
 * @property {Number} t - Type
 * @property {Number} n - Single number value
 * @property {String} u - Value unit
 * @property {String} o - Value operator
 * @property {Array.<Number>} d - Array of Numbers (in case of complex value type)
 * @property {Array.<String>} s - Strings (in case of complex value type)
 */ /** @typedef {{_head: null|Tween, _tail: null|Tween}} TweenPropertySiblings */ /** @typedef {Record<String, TweenPropertySiblings>} TweenLookups */ /** @typedef {WeakMap.<Target, TweenLookups>} TweenReplaceLookups */ /** @typedef {Map.<Target, TweenLookups>} TweenAdditiveLookups */ /**
 * @typedef {Object} TimerOptions
 * @property {Number|String} [id]
 * @property {TweenParamValue} [duration]
 * @property {TweenParamValue} [delay]
 * @property {Number} [loopDelay]
 * @property {Boolean} [reversed]
 * @property {Boolean} [alternate]
 * @property {Boolean|Number} [loop]
 * @property {Boolean|ScrollObserver} [autoplay]
 * @property {Number} [frameRate]
 * @property {Number} [playbackRate]
 */ /**

/**
 * @typedef {TimerOptions & TickableCallbacks<Timer>} TimerParams
 */ /**
 * @typedef {Number|String|FunctionValue} TweenParamValue
 */ /**
 * @typedef {TweenParamValue|[TweenParamValue, TweenParamValue]} TweenPropValue
 */ /**
 * @typedef {(String & {})|'none'|'replace'|'blend'|compositionTypes} TweenComposition
 */ /**
 * @typedef {Object} TweenParamsOptions
 * @property {TweenParamValue} [duration]
 * @property {TweenParamValue} [delay]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 */ /**
 * @typedef {Object} TweenValues
 * @property {TweenParamValue} [from]
 * @property {TweenPropValue} [to]
 * @property {TweenPropValue} [fromTo]
 */ /**
 * @typedef {TweenParamsOptions & TweenValues} TweenKeyValue
 */ /**
 * @typedef {Array.<TweenKeyValue|TweenPropValue>} ArraySyntaxValue
 */ /**
 * @typedef {TweenParamValue|ArraySyntaxValue|TweenKeyValue} TweenOptions
 */ /**
 * @typedef {Partial<{to: TweenParamValue|Array.<TweenParamValue>; from: TweenParamValue|Array.<TweenParamValue>; fromTo: TweenParamValue|Array.<TweenParamValue>;}>} TweenObjectValue
 */ /**
 * @typedef {Object} PercentageKeyframeOptions
 * @property {EasingParam} [ease]
 */ /**
 * @typedef {Record<String, TweenParamValue>} PercentageKeyframeParams
 */ /**
 * @typedef {Record<String, PercentageKeyframeParams & PercentageKeyframeOptions>} PercentageKeyframes
 */ /**
 * @typedef {Array<Record<String, TweenOptions | TweenModifier | boolean> & TweenParamsOptions>} DurationKeyframes
 */ /**
 * @typedef {Object} AnimationOptions
 * @property {PercentageKeyframes|DurationKeyframes} [keyframes]
 * @property {EasingParam} [playbackEase]
 */ // TODO: Currently setting TweenModifier to the intersected Record<> makes the FunctionValue type target param any if only one parameter is set
/**
 * @typedef {Record<String, TweenOptions | Callback<JSAnimation> | TweenModifier | boolean | PercentageKeyframes | DurationKeyframes | ScrollObserver> & TimerOptions & AnimationOptions & TweenParamsOptions & TickableCallbacks<JSAnimation> & RenderableCallbacks<JSAnimation>} AnimationParams
 */ /**
 * @typedef {Object} TimelineOptions
 * @property {DefaultsParams} [defaults]
 * @property {EasingParam} [playbackEase]
 */ /**
 * @typedef {TimerOptions & TimelineOptions & TickableCallbacks<Timeline> & RenderableCallbacks<Timeline>} TimelineParams
 */ /**
 * @callback AnimatablePropertySetter
 * @param  {Number|Array.<Number>} to
 * @param  {Number} [duration]
 * @param  {EasingParam} [ease]
 * @return {AnimatableObject}
 */ /**
 * @callback AnimatablePropertyGetter
 * @return {Number|Array.<Number>}
 */ /**
 * @typedef {AnimatablePropertySetter & AnimatablePropertyGetter} AnimatableProperty
 */ /**
 * @typedef {Animatable & Record<String, AnimatableProperty>} AnimatableObject
 */ /**
 * @typedef {Object} AnimatablePropertyParamsOptions
 * @property {String} [unit]
 * @property {TweenParamValue} [duration]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 */ /**
 * @typedef {Record<String, TweenParamValue | EasingParam | TweenModifier | TweenComposition | AnimatablePropertyParamsOptions> & AnimatablePropertyParamsOptions} AnimatableParams
 */ // Environments
// TODO: Do we need to check if we're running inside a worker ?
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Animatable", ()=>Animatable);
parcelHelpers.export(exports, "Draggable", ()=>Draggable);
parcelHelpers.export(exports, "JSAnimation", ()=>JSAnimation);
parcelHelpers.export(exports, "Scope", ()=>Scope);
parcelHelpers.export(exports, "ScrollObserver", ()=>ScrollObserver);
parcelHelpers.export(exports, "Spring", ()=>Spring);
parcelHelpers.export(exports, "Timeline", ()=>Timeline);
parcelHelpers.export(exports, "Timer", ()=>Timer);
parcelHelpers.export(exports, "WAAPIAnimation", ()=>WAAPIAnimation);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "createAnimatable", ()=>createAnimatable);
parcelHelpers.export(exports, "createDraggable", ()=>createDraggable);
parcelHelpers.export(exports, "createScope", ()=>createScope);
parcelHelpers.export(exports, "createSpring", ()=>createSpring);
parcelHelpers.export(exports, "createTimeline", ()=>createTimeline);
parcelHelpers.export(exports, "createTimer", ()=>createTimer);
parcelHelpers.export(exports, "eases", ()=>eases);
parcelHelpers.export(exports, "engine", ()=>engine);
parcelHelpers.export(exports, "onScroll", ()=>onScroll);
parcelHelpers.export(exports, "scrollContainers", ()=>scrollContainers);
parcelHelpers.export(exports, "stagger", ()=>stagger);
parcelHelpers.export(exports, "svg", ()=>svg);
parcelHelpers.export(exports, "utils", ()=>utils);
parcelHelpers.export(exports, "waapi", ()=>waapi);
const isBrowser = typeof window !== 'undefined';
/** @type {Object|Null} */ const win = isBrowser ? window : null;
/** @type {Document} */ const doc = isBrowser ? document : null;
// Enums
/** @enum {Number} */ const tweenTypes = {
    OBJECT: 0,
    ATTRIBUTE: 1,
    CSS: 2,
    TRANSFORM: 3,
    CSS_VAR: 4
};
/** @enum {Number} */ const valueTypes = {
    NUMBER: 0,
    UNIT: 1,
    COLOR: 2,
    COMPLEX: 3
};
/** @enum {Number} */ const tickModes = {
    NONE: 0,
    AUTO: 1,
    FORCE: 2
};
/** @enum {Number} */ const compositionTypes = {
    replace: 0,
    none: 1,
    blend: 2
};
// Cache symbols
const isRegisteredTargetSymbol = Symbol();
const isDomSymbol = Symbol();
const isSvgSymbol = Symbol();
const transformsSymbol = Symbol();
const morphPointsSymbol = Symbol();
const proxyTargetSymbol = Symbol();
// Numbers
const minValue = 1e-11;
const maxValue = 1e12;
const K = 1e3;
const maxFps = 120;
// Strings
const emptyString = '';
const shortTransforms = new Map();
shortTransforms.set('x', 'translateX');
shortTransforms.set('y', 'translateY');
shortTransforms.set('z', 'translateZ');
const validTransforms = [
    'translateX',
    'translateY',
    'translateZ',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'scale',
    'scaleX',
    'scaleY',
    'scaleZ',
    'skew',
    'skewX',
    'skewY',
    'perspective',
    'matrix',
    'matrix3d'
];
const transformsFragmentStrings = validTransforms.reduce((a, v)=>({
        ...a,
        [v]: v + '('
    }), {});
// Functions
/** @return {void} */ const noop = ()=>{};
// Regex
const hexTestRgx = /(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i;
const rgbExecRgx = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i;
const rgbaExecRgx = /rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
const hslExecRgx = /hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i;
const hslaExecRgx = /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i;
// export const digitWithExponentRgx = /[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?/g;
const digitWithExponentRgx = /[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi;
// export const unitsExecRgx = /^([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)+([a-z]+|%)$/i;
const unitsExecRgx = /^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i;
const lowerCaseRgx = /([a-z])([A-Z])/g;
const transformsExecRgx = /(\w+)(\([^)]+\)+)/g; // Match inline transforms with cacl() values, returns the value wrapped in ()
const relativeValuesExecRgx = /(\*=|\+=|-=)/;
/** @type {DefaultsParams} */ const defaults = {
    id: null,
    keyframes: null,
    playbackEase: null,
    playbackRate: 1,
    frameRate: maxFps,
    loop: 0,
    reversed: false,
    alternate: false,
    autoplay: true,
    duration: K,
    delay: 0,
    loopDelay: 0,
    ease: 'out(2)',
    composition: compositionTypes.replace,
    modifier: (v)=>v,
    onBegin: noop,
    onBeforeUpdate: noop,
    onUpdate: noop,
    onLoop: noop,
    onPause: noop,
    onComplete: noop,
    onRender: noop
};
const globals = {
    /** @type {DefaultsParams} */ defaults,
    /** @type {Document|DOMTarget} */ root: doc,
    /** @type {Scope} */ scope: null,
    /** @type {Number} */ precision: 4,
    /** @type {Number} */ timeScale: 1,
    /** @type {Number} */ tickThreshold: 200
};
const globalVersions = {
    version: '4.0.1',
    engine: null
};
if (isBrowser) {
    if (!win.AnimeJS) win.AnimeJS = [];
    win.AnimeJS.push(globalVersions);
}
// Strings
/**
 * @param  {String} str
 * @return {String}
 */ const toLowerCase = (str)=>str.replace(lowerCaseRgx, '$1-$2').toLowerCase();
/**
 * Prioritize this method instead of regex when possible
 * @param  {String} str
 * @param  {String} sub
 * @return {Boolean}
 */ const stringStartsWith = (str, sub)=>str.indexOf(sub) === 0;
// Time
// Note: Date.now is used instead of performance.now since it is precise enough for timings calculations, performs slightly faster and works in Node.js environement.
const now = Date.now;
// Types checkers
const isArr = Array.isArray;
/**@param {any} a @return {a is Record<String, any>} */ const isObj = (a)=>a && a.constructor === Object;
/**@param {any} a @return {a is Number} */ const isNum = (a)=>typeof a === 'number' && !isNaN(a);
/**@param {any} a @return {a is String} */ const isStr = (a)=>typeof a === 'string';
/**@param {any} a @return {a is Function} */ const isFnc = (a)=>typeof a === 'function';
/**@param {any} a @return {a is undefined} */ const isUnd = (a)=>typeof a === 'undefined';
/**@param {any} a @return {a is null | undefined} */ const isNil = (a)=>isUnd(a) || a === null;
/**@param {any} a @return {a is SVGElement} */ const isSvg = (a)=>isBrowser && a instanceof SVGElement;
/**@param {any} a @return {Boolean} */ const isHex = (a)=>hexTestRgx.test(a);
/**@param {any} a @return {Boolean} */ const isRgb = (a)=>stringStartsWith(a, 'rgb');
/**@param {any} a @return {Boolean} */ const isHsl = (a)=>stringStartsWith(a, 'hsl');
/**@param {any} a @return {Boolean} */ const isCol = (a)=>isHex(a) || isRgb(a) || isHsl(a);
/**@param {any} a @return {Boolean} */ const isKey = (a)=>!globals.defaults.hasOwnProperty(a);
// Number
/**
 * @param  {Number|String} str
 * @return {Number}
 */ const parseNumber = (str)=>isStr(str) ? parseFloat(/** @type {String} */ str) : /** @type {Number} */ str;
// Math
const pow = Math.pow;
const sqrt = Math.sqrt;
const sin = Math.sin;
const cos = Math.cos;
const abs = Math.abs;
const exp = Math.exp;
const ceil = Math.ceil;
const floor = Math.floor;
const asin = Math.asin;
const max = Math.max;
const atan2 = Math.atan2;
const PI = Math.PI;
const _round = Math.round;
/**
 * @param  {Number} v
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */ const clamp = (v, min, max)=>v < min ? min : v > max ? max : v;
const powCache = {};
/**
 * @param  {Number} v
 * @param  {Number} decimalLength
 * @return {Number}
 */ const round = (v, decimalLength)=>{
    if (decimalLength < 0) return v;
    if (!decimalLength) return _round(v);
    let p = powCache[decimalLength];
    if (!p) p = powCache[decimalLength] = 10 ** decimalLength;
    return _round(v * p) / p;
};
/**
 * @param  {Number} v
 * @param  {Number|Array<Number>} increment
 * @return {Number}
 */ const snap = (v, increment)=>isArr(increment) ? increment.reduce((closest, cv)=>abs(cv - v) < abs(closest - v) ? cv : closest) : increment ? _round(v / increment) * increment : v;
/**
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} progress
 * @return {Number}
 */ const interpolate = (start, end, progress)=>start + (end - start) * progress;
/**
 * @param  {Number} v
 * @return {Number}
 */ const clampInfinity = (v)=>v === Infinity ? maxValue : v === -Infinity ? -1000000000000 : v;
/**
 * @param  {Number} v
 * @return {Number}
 */ const clampZero = (v)=>v < minValue ? minValue : v;
// Arrays
/**
 * @template T
 * @param {T[]} a
 * @return {T[]}
 */ const cloneArray = (a)=>isArr(a) ? [
        ...a
    ] : a;
// Objects
/**
 * @template T
 * @template U
 * @param {T} o1
 * @param {U} o2
 * @return {T & U}
 */ const mergeObjects = (o1, o2)=>{
    const merged = /** @type {T & U} */ {
        ...o1
    };
    for(let p in o2){
        const o1p = /** @type {T & U} */ o1[p];
        merged[p] = isUnd(o1p) ? /** @type {T & U} */ o2[p] : o1p;
    }
    return merged;
};
// Linked lists
/**
 * @param {Object} parent
 * @param {Function} callback
 * @param {Boolean} [reverse]
 * @param {String} [prevProp]
 * @param {String} [nextProp]
 * @return {void}
 */ const forEachChildren = (parent, callback, reverse, prevProp = '_prev', nextProp = '_next')=>{
    let next = parent._head;
    let adjustedNextProp = nextProp;
    if (reverse) {
        next = parent._tail;
        adjustedNextProp = prevProp;
    }
    while(next){
        const currentNext = next[adjustedNextProp];
        callback(next);
        next = currentNext;
    }
};
/**
 * @param  {Object} parent
 * @param  {Object} child
 * @param  {String} [prevProp]
 * @param  {String} [nextProp]
 * @return {void}
 */ const removeChild = (parent, child, prevProp = '_prev', nextProp = '_next')=>{
    const prev = child[prevProp];
    const next = child[nextProp];
    prev ? prev[nextProp] = next : parent._head = next;
    next ? next[prevProp] = prev : parent._tail = prev;
    child[prevProp] = null;
    child[nextProp] = null;
};
/**
 * @param  {Object} parent
 * @param  {Object} child
 * @param  {Function} [sortMethod]
 * @param  {String} prevProp
 * @param  {String} nextProp
 * @return {void}
 */ const addChild = (parent, child, sortMethod, prevProp = '_prev', nextProp = '_next')=>{
    let prev = parent._tail;
    while(prev && sortMethod && sortMethod(prev, child))prev = prev[prevProp];
    const next = prev ? prev[nextProp] : parent._head;
    prev ? prev[nextProp] = child : parent._head = child;
    next ? next[prevProp] = child : parent._tail = child;
    child[prevProp] = prev;
    child[nextProp] = next;
};
/*
 * Base class to control framerate and playback rate.
 * Inherited by Engine, Timer, Animation and Timeline.
 */ class Clock {
    /** @param {Number} [initTime] */ constructor(initTime = 0){
        /** @type {Number} */ this.deltaTime = 0;
        /** @type {Number} */ this._currentTime = initTime;
        /** @type {Number} */ this._elapsedTime = initTime;
        /** @type {Number} */ this._startTime = initTime;
        /** @type {Number} */ this._lastTime = initTime;
        /** @type {Number} */ this._scheduledTime = 0;
        /** @type {Number} */ this._frameDuration = round(K / maxFps, 0);
        /** @type {Number} */ this._fps = maxFps;
        /** @type {Number} */ this._speed = 1;
        /** @type {Boolean} */ this._hasChildren = false;
        /** @type {Tickable|Tween} */ this._head = null;
        /** @type {Tickable|Tween} */ this._tail = null;
    }
    get fps() {
        return this._fps;
    }
    set fps(frameRate) {
        const previousFrameDuration = this._frameDuration;
        const fr = +frameRate;
        const fps = fr < minValue ? minValue : fr;
        const frameDuration = round(K / fps, 0);
        this._fps = fps;
        this._frameDuration = frameDuration;
        this._scheduledTime += frameDuration - previousFrameDuration;
    }
    get speed() {
        return this._speed;
    }
    set speed(playbackRate) {
        const pbr = +playbackRate;
        this._speed = pbr < minValue ? minValue : pbr;
    }
    /**
   * @param  {Number} time
   * @return {tickModes}
   */ requestTick(time) {
        const scheduledTime = this._scheduledTime;
        const elapsedTime = this._elapsedTime;
        this._elapsedTime += time - elapsedTime;
        // If the elapsed time is lower than the scheduled time
        // this means not enough time has passed to hit one frameDuration
        // so skip that frame
        if (elapsedTime < scheduledTime) return tickModes.NONE;
        const frameDuration = this._frameDuration;
        const frameDelta = elapsedTime - scheduledTime;
        // Ensures that _scheduledTime progresses in steps of at least 1 frameDuration.
        // Skips ahead if the actual elapsed time is higher.
        this._scheduledTime += frameDelta < frameDuration ? frameDuration : frameDelta;
        return tickModes.AUTO;
    }
    /**
   * @param  {Number} time
   * @return {Number}
   */ computeDeltaTime(time) {
        const delta = time - this._lastTime;
        this.deltaTime = delta;
        this._lastTime = time;
        return delta;
    }
}
/**
 * @param  {Tickable} tickable
 * @param  {Number} time
 * @param  {Number} muteCallbacks
 * @param  {Number} internalRender
 * @param  {tickModes} tickMode
 * @return {Number}
 */ const render = (tickable, time, muteCallbacks, internalRender, tickMode)=>{
    const parent = tickable.parent;
    const duration = tickable.duration;
    const completed = tickable.completed;
    const iterationDuration = tickable.iterationDuration;
    const iterationCount = tickable.iterationCount;
    const _currentIteration = tickable._currentIteration;
    const _loopDelay = tickable._loopDelay;
    const _reversed = tickable._reversed;
    const _alternate = tickable._alternate;
    const _hasChildren = tickable._hasChildren;
    const tickableDelay = tickable._delay;
    const tickablePrevAbsoluteTime = tickable._currentTime; // TODO: rename ._currentTime to ._absoluteCurrentTime
    const tickableEndTime = tickableDelay + iterationDuration;
    const tickableAbsoluteTime = time - tickableDelay;
    const tickablePrevTime = clamp(tickablePrevAbsoluteTime, -tickableDelay, duration);
    const tickableCurrentTime = clamp(tickableAbsoluteTime, -tickableDelay, duration);
    const deltaTime = tickableAbsoluteTime - tickablePrevAbsoluteTime;
    const isCurrentTimeAboveZero = tickableCurrentTime > 0;
    const isCurrentTimeEqualOrAboveDuration = tickableCurrentTime >= duration;
    const isSetter = duration <= minValue;
    const forcedTick = tickMode === tickModes.FORCE;
    let isOdd = 0;
    let iterationElapsedTime = tickableAbsoluteTime;
    // Render checks
    // Used to also check if the children have rendered in order to trigger the onRender callback on the parent timer
    let hasRendered = 0;
    // Execute the "expensive" iterations calculations only when necessary
    if (iterationCount > 1) {
        // bitwise NOT operator seems to be generally faster than Math.floor() across browsers
        const currentIteration = ~~(tickableCurrentTime / (iterationDuration + (isCurrentTimeEqualOrAboveDuration ? 0 : _loopDelay)));
        tickable._currentIteration = clamp(currentIteration, 0, iterationCount);
        // Prevent the iteration count to go above the max iterations when reaching the end of the animation
        if (isCurrentTimeEqualOrAboveDuration) tickable._currentIteration--;
        isOdd = tickable._currentIteration % 2;
        iterationElapsedTime = tickableCurrentTime % (iterationDuration + _loopDelay) || 0;
    }
    // Checks if exactly one of _reversed and (_alternate && isOdd) is true
    const isReversed = _reversed ^ (_alternate && isOdd);
    const _ease = /** @type {Renderable} */ tickable._ease;
    let iterationTime = isCurrentTimeEqualOrAboveDuration ? isReversed ? 0 : duration : isReversed ? iterationDuration - iterationElapsedTime : iterationElapsedTime;
    if (_ease) iterationTime = iterationDuration * _ease(iterationTime / iterationDuration) || 0;
    const isRunningBackwards = (parent ? parent.backwards : tickableAbsoluteTime < tickablePrevAbsoluteTime) ? !isReversed : !!isReversed;
    tickable._currentTime = tickableAbsoluteTime;
    tickable._iterationTime = iterationTime;
    tickable.backwards = isRunningBackwards;
    if (isCurrentTimeAboveZero && !tickable.began) {
        tickable.began = true;
        if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) tickable.onBegin(/** @type {CallbackArgument} */ tickable);
    } else if (tickableAbsoluteTime <= 0) tickable.began = false;
    // Only triggers onLoop for tickable without children, otherwise call the the onLoop callback in the tick function
    // Make sure to trigger the onLoop before rendering to allow .refresh() to pickup the current values
    if (!muteCallbacks && !_hasChildren && isCurrentTimeAboveZero && tickable._currentIteration !== _currentIteration) tickable.onLoop(/** @type {CallbackArgument} */ tickable);
    if (forcedTick || tickMode === tickModes.AUTO && (time >= tickableDelay && time <= tickableEndTime || // Normal render
    time <= tickableDelay && tickablePrevTime > tickableDelay || // Playhead is before the animation start time so make sure the animation is at its initial state
    time >= tickableEndTime && tickablePrevTime !== duration // Playhead is after the animation end time so make sure the animation is at its end state
    ) || iterationTime >= tickableEndTime && tickablePrevTime !== duration || iterationTime <= tickableDelay && tickablePrevTime > 0 || time <= tickablePrevTime && tickablePrevTime === duration && completed || // Force a render if a seek occurs on an completed animation
    isCurrentTimeEqualOrAboveDuration && !completed && isSetter // This prevents 0 duration tickables to be skipped
    ) {
        if (isCurrentTimeAboveZero) {
            // Trigger onUpdate callback before rendering
            tickable.computeDeltaTime(tickablePrevTime);
            if (!muteCallbacks) tickable.onBeforeUpdate(/** @type {CallbackArgument} */ tickable);
        }
        // Start tweens rendering
        if (!_hasChildren) {
            // Time has jumped more than globals.tickThreshold so consider this tick manual
            const forcedRender = forcedTick || (isRunningBackwards ? deltaTime * -1 : deltaTime) >= globals.tickThreshold;
            const absoluteTime = tickable._offset + (parent ? parent._offset : 0) + tickableDelay + iterationTime;
            // Only Animation can have tweens, Timer returns undefined
            let tween = /** @type {Tween} */ /** @type {JSAnimation} */ tickable._head;
            let tweenTarget;
            let tweenStyle;
            let tweenTargetTransforms;
            let tweenTargetTransformsProperties;
            let tweenTransformsNeedUpdate = 0;
            while(tween){
                const tweenComposition = tween._composition;
                const tweenCurrentTime = tween._currentTime;
                const tweenChangeDuration = tween._changeDuration;
                const tweenAbsEndTime = tween._absoluteStartTime + tween._changeDuration;
                const tweenNextRep = tween._nextRep;
                const tweenPrevRep = tween._prevRep;
                const tweenHasComposition = tweenComposition !== compositionTypes.none;
                if ((forcedRender || (tweenCurrentTime !== tweenChangeDuration || absoluteTime <= tweenAbsEndTime + (tweenNextRep ? tweenNextRep._delay : 0)) && (tweenCurrentTime !== 0 || absoluteTime >= tween._absoluteStartTime)) && (!tweenHasComposition || !tween._isOverridden && (!tween._isOverlapped || absoluteTime <= tweenAbsEndTime) && (!tweenNextRep || tweenNextRep._isOverridden || absoluteTime <= tweenNextRep._absoluteStartTime) && (!tweenPrevRep || tweenPrevRep._isOverridden || absoluteTime >= tweenPrevRep._absoluteStartTime + tweenPrevRep._changeDuration + tween._delay))) {
                    const tweenNewTime = tween._currentTime = clamp(iterationTime - tween._startTime, 0, tweenChangeDuration);
                    const tweenProgress = tween._ease(tweenNewTime / tween._updateDuration);
                    const tweenModifier = tween._modifier;
                    const tweenValueType = tween._valueType;
                    const tweenType = tween._tweenType;
                    const tweenIsObject = tweenType === tweenTypes.OBJECT;
                    const tweenIsNumber = tweenValueType === valueTypes.NUMBER;
                    // Only round the in-between frames values if the final value is a string
                    const tweenPrecision = tweenIsNumber && tweenIsObject || tweenProgress === 0 || tweenProgress === 1 ? -1 : globals.precision;
                    // Recompose tween value
                    /** @type {String|Number} */ let value;
                    /** @type {Number} */ let number;
                    if (tweenIsNumber) value = number = /** @type {Number} */ tweenModifier(round(interpolate(tween._fromNumber, tween._toNumber, tweenProgress), tweenPrecision));
                    else if (tweenValueType === valueTypes.UNIT) {
                        // Rounding the values speed up string composition
                        number = /** @type {Number} */ tweenModifier(round(interpolate(tween._fromNumber, tween._toNumber, tweenProgress), tweenPrecision));
                        value = `${number}${tween._unit}`;
                    } else if (tweenValueType === valueTypes.COLOR) {
                        const fn = tween._fromNumbers;
                        const tn = tween._toNumbers;
                        const r = round(clamp(/** @type {Number} */ tweenModifier(interpolate(fn[0], tn[0], tweenProgress)), 0, 255), 0);
                        const g = round(clamp(/** @type {Number} */ tweenModifier(interpolate(fn[1], tn[1], tweenProgress)), 0, 255), 0);
                        const b = round(clamp(/** @type {Number} */ tweenModifier(interpolate(fn[2], tn[2], tweenProgress)), 0, 255), 0);
                        const a = clamp(/** @type {Number} */ tweenModifier(round(interpolate(fn[3], tn[3], tweenProgress), tweenPrecision)), 0, 1);
                        value = `rgba(${r},${g},${b},${a})`;
                        if (tweenHasComposition) {
                            const ns = tween._numbers;
                            ns[0] = r;
                            ns[1] = g;
                            ns[2] = b;
                            ns[3] = a;
                        }
                    } else if (tweenValueType === valueTypes.COMPLEX) {
                        value = tween._strings[0];
                        for(let j = 0, l = tween._toNumbers.length; j < l; j++){
                            const n = /** @type {Number} */ tweenModifier(round(interpolate(tween._fromNumbers[j], tween._toNumbers[j], tweenProgress), tweenPrecision));
                            const s = tween._strings[j + 1];
                            value += `${s ? n + s : n}`;
                            if (tweenHasComposition) tween._numbers[j] = n;
                        }
                    }
                    // For additive tweens and Animatables
                    if (tweenHasComposition) tween._number = number;
                    if (!internalRender && tweenComposition !== compositionTypes.blend) {
                        const tweenProperty = tween.property;
                        tweenTarget = tween.target;
                        if (tweenIsObject) tweenTarget[tweenProperty] = value;
                        else if (tweenType === tweenTypes.ATTRIBUTE) /** @type {DOMTarget} */ tweenTarget.setAttribute(tweenProperty, /** @type {String} */ value);
                        else {
                            tweenStyle = /** @type {DOMTarget} */ tweenTarget.style;
                            if (tweenType === tweenTypes.TRANSFORM) {
                                if (tweenTarget !== tweenTargetTransforms) {
                                    tweenTargetTransforms = tweenTarget;
                                    // NOTE: Referencing the cachedTransforms in the tween property directly can be a little bit faster but appears to increase memory usage.
                                    tweenTargetTransformsProperties = tweenTarget[transformsSymbol];
                                }
                                tweenTargetTransformsProperties[tweenProperty] = value;
                                tweenTransformsNeedUpdate = 1;
                            } else if (tweenType === tweenTypes.CSS) tweenStyle[tweenProperty] = value;
                            else if (tweenType === tweenTypes.CSS_VAR) tweenStyle.setProperty(tweenProperty, /** @type {String} */ value);
                        }
                        if (isCurrentTimeAboveZero) hasRendered = 1;
                    } else // Used for composing timeline tweens without having to do a real render
                    tween._value = value;
                }
                // NOTE: Possible improvement: Use translate(x,y) / translate3d(x,y,z) syntax
                // to reduce memory usage on string composition
                if (tweenTransformsNeedUpdate && tween._renderTransforms) {
                    let str = emptyString;
                    for(let key in tweenTargetTransformsProperties)str += `${transformsFragmentStrings[key]}${tweenTargetTransformsProperties[key]}) `;
                    tweenStyle.transform = str;
                    tweenTransformsNeedUpdate = 0;
                }
                tween = tween._next;
            }
            if (!muteCallbacks && hasRendered) /** @type {JSAnimation} */ tickable.onRender(/** @type {JSAnimation} */ tickable);
        }
        if (!muteCallbacks && isCurrentTimeAboveZero) tickable.onUpdate(/** @type {CallbackArgument} */ tickable);
    }
    // End tweens rendering
    // Handle setters on timeline differently and allow re-trigering the onComplete callback when seeking backwards
    if (parent && isSetter) {
        if (!muteCallbacks && (parent.began && !isRunningBackwards && tickableAbsoluteTime >= duration && !completed || isRunningBackwards && tickableAbsoluteTime <= minValue && completed)) {
            tickable.onComplete(/** @type {CallbackArgument} */ tickable);
            tickable.completed = !isRunningBackwards;
        }
    } else if (isCurrentTimeAboveZero && isCurrentTimeEqualOrAboveDuration) {
        if (iterationCount === Infinity) // Offset the tickable _startTime with its duration to reset _currentTime to 0 and continue the infinite timer
        tickable._startTime += tickable.duration;
        else if (tickable._currentIteration >= iterationCount - 1) {
            // By setting paused to true, we tell the engine loop to not render this tickable and removes it from the list on the next tick
            tickable.paused = true;
            if (!completed && !_hasChildren) {
                // If the tickable has children, triggers onComplete() only when all children have completed in the tick function
                tickable.completed = true;
                if (!muteCallbacks && !(parent && (isRunningBackwards || !parent.began))) {
                    tickable.onComplete(/** @type {CallbackArgument} */ tickable);
                    tickable._resolve(/** @type {CallbackArgument} */ tickable);
                }
            }
        }
    // Otherwise set the completed flag to false
    } else tickable.completed = false;
    // NOTE: hasRendered * direction (negative for backwards) this way we can remove the tickable.backwards property completly ?
    return hasRendered;
};
/**
 * @param  {Tickable} tickable
 * @param  {Number} time
 * @param  {Number} muteCallbacks
 * @param  {Number} internalRender
 * @param  {Number} tickMode
 * @return {void}
 */ const tick = (tickable, time, muteCallbacks, internalRender, tickMode)=>{
    const _currentIteration = tickable._currentIteration;
    render(tickable, time, muteCallbacks, internalRender, tickMode);
    if (tickable._hasChildren) {
        const tl = /** @type {Timeline} */ tickable;
        const tlIsRunningBackwards = tl.backwards;
        const tlChildrenTime = internalRender ? time : tl._iterationTime;
        const tlCildrenTickTime = now();
        let tlChildrenHasRendered = 0;
        let tlChildrenHaveCompleted = true;
        // If the timeline has looped forward, we need to manually triggers children skipped callbacks
        if (!internalRender && tl._currentIteration !== _currentIteration) {
            const tlIterationDuration = tl.iterationDuration;
            forEachChildren(tl, (/** @type {JSAnimation} */ child)=>{
                if (!tlIsRunningBackwards) {
                    // Force an internal render to trigger the callbacks if the child has not completed on loop
                    if (!child.completed && !child.backwards && child._currentTime < child.iterationDuration) render(child, tlIterationDuration, muteCallbacks, 1, tickModes.FORCE);
                    // Reset their began and completed flags to allow retrigering callbacks on the next iteration
                    child.began = false;
                    child.completed = false;
                } else {
                    const childDuration = child.duration;
                    const childStartTime = child._offset + child._delay;
                    const childEndTime = childStartTime + childDuration;
                    // Triggers the onComplete callback on reverse for children on the edges of the timeline
                    if (!muteCallbacks && childDuration <= minValue && (!childStartTime || childEndTime === tlIterationDuration)) child.onComplete(child);
                }
            });
            if (!muteCallbacks) tl.onLoop(/** @type {CallbackArgument} */ tl);
        }
        forEachChildren(tl, (/** @type {JSAnimation} */ child)=>{
            const childTime = round((tlChildrenTime - child._offset) * child._speed, 12); // Rounding is needed when using seconds
            const childTickMode = child._fps < tl._fps ? child.requestTick(tlCildrenTickTime) : tickMode;
            tlChildrenHasRendered += render(child, childTime, muteCallbacks, internalRender, childTickMode);
            if (!child.completed && tlChildrenHaveCompleted) tlChildrenHaveCompleted = false;
        }, tlIsRunningBackwards);
        // Renders on timeline are triggered by its children so it needs to be set after rendering the children
        if (!muteCallbacks && tlChildrenHasRendered) tl.onRender(/** @type {CallbackArgument} */ tl);
        // Triggers the timeline onComplete() once all chindren all completed and the current time has reached the end
        if (tlChildrenHaveCompleted && tl._currentTime >= tl.duration) {
            // Make sure the paused flag is false in case it has been skipped in the render function
            tl.paused = true;
            if (!tl.completed) {
                tl.completed = true;
                if (!muteCallbacks) {
                    tl.onComplete(/** @type {CallbackArgument} */ tl);
                    tl._resolve(/** @type {CallbackArgument} */ tl);
                }
            }
        }
    }
};
const additive = {
    animation: null,
    update: noop
};
/**
 * @typedef AdditiveAnimation
 * @property {Number} duration
 * @property {Number} _offset
 * @property {Number} _delay
 * @property {Tween} _head
 * @property {Tween} _tail
 */ /**
 * @param  {TweenAdditiveLookups} lookups
 * @return {AdditiveAnimation}
 */ const addAdditiveAnimation = (lookups)=>{
    let animation = additive.animation;
    if (!animation) {
        animation = {
            duration: minValue,
            computeDeltaTime: noop,
            _offset: 0,
            _delay: 0,
            _head: null,
            _tail: null
        };
        additive.animation = animation;
        additive.update = ()=>{
            lookups.forEach((propertyAnimation)=>{
                for(let propertyName in propertyAnimation){
                    const tweens = propertyAnimation[propertyName];
                    const lookupTween = tweens._head;
                    if (lookupTween) {
                        const valueType = lookupTween._valueType;
                        const additiveValues = valueType === valueTypes.COMPLEX || valueType === valueTypes.COLOR ? cloneArray(lookupTween._fromNumbers) : null;
                        let additiveValue = lookupTween._fromNumber;
                        let tween = tweens._tail;
                        while(tween && tween !== lookupTween){
                            if (additiveValues) for(let i = 0, l = tween._numbers.length; i < l; i++)additiveValues[i] += tween._numbers[i];
                            else additiveValue += tween._number;
                            tween = tween._prevAdd;
                        }
                        lookupTween._toNumber = additiveValue;
                        lookupTween._toNumbers = additiveValues;
                    }
                }
            });
            // TODO: Avoid polymorphism here, idealy the additive animation should be a regular animation with a higher priority in the render loop
            render(animation, 1, 1, 0, tickModes.FORCE);
        };
    }
    return animation;
};
const engineTickMethod = isBrowser ? requestAnimationFrame : setImmediate;
const engineCancelMethod = isBrowser ? cancelAnimationFrame : clearImmediate;
class Engine extends Clock {
    /** @param {Number} [initTime] */ constructor(initTime){
        super(initTime);
        this.useDefaultMainLoop = true;
        this.pauseOnDocumentHidden = true;
        /** @type {DefaultsParams} */ this.defaults = defaults;
        this.paused = isBrowser && doc.hidden ? true : false;
        /** @type {Number|NodeJS.Immediate} */ this.reqId = null;
    }
    update() {
        const time = this._currentTime = now();
        if (this.requestTick(time)) {
            this.computeDeltaTime(time);
            const engineSpeed = this._speed;
            const engineFps = this._fps;
            let activeTickable = /** @type {Tickable} */ this._head;
            while(activeTickable){
                const nextTickable = activeTickable._next;
                if (!activeTickable.paused) tick(activeTickable, (time - activeTickable._startTime) * activeTickable._speed * engineSpeed, 0, 0, activeTickable._fps < engineFps ? activeTickable.requestTick(time) : tickModes.AUTO);
                else {
                    removeChild(this, activeTickable);
                    this._hasChildren = !!this._tail;
                    activeTickable._running = false;
                    if (activeTickable.completed && !activeTickable._cancelled) activeTickable.cancel();
                }
                activeTickable = nextTickable;
            }
            additive.update();
        }
    }
    wake() {
        if (this.useDefaultMainLoop && !this.reqId && !this.paused) this.reqId = engineTickMethod(tickEngine);
        return this;
    }
    pause() {
        this.paused = true;
        return killEngine();
    }
    resume() {
        if (!this.paused) return;
        this.paused = false;
        forEachChildren(this, (/** @type {Tickable} */ child)=>child.resetTime());
        return this.wake();
    }
    // Getter and setter for speed
    get speed() {
        return this._speed * (globals.timeScale === 1 ? 1 : K);
    }
    set speed(playbackRate) {
        this._speed = playbackRate * globals.timeScale;
        forEachChildren(this, (/** @type {Tickable} */ child)=>child.speed = child._speed);
    }
    // Getter and setter for timeUnit
    get timeUnit() {
        return globals.timeScale === 1 ? 'ms' : 's';
    }
    set timeUnit(unit) {
        const secondsScale = 0.001;
        const isSecond = unit === 's';
        const newScale = isSecond ? secondsScale : 1;
        if (globals.timeScale !== newScale) {
            globals.timeScale = newScale;
            globals.tickThreshold = 200 * newScale;
            const scaleFactor = isSecond ? secondsScale : K;
            /** @type {Number} */ this.defaults.duration *= scaleFactor;
            this._speed *= scaleFactor;
        }
    }
    // Getter and setter for precision
    get precision() {
        return globals.precision;
    }
    set precision(precision) {
        globals.precision = precision;
    }
}
const engine = /*#__PURE__*/ (()=>{
    const engine = new Engine(now());
    if (isBrowser) {
        globalVersions.engine = engine;
        doc.addEventListener('visibilitychange', ()=>{
            if (!engine.pauseOnDocumentHidden) return;
            doc.hidden ? engine.pause() : engine.resume();
        });
    }
    return engine;
})();
const tickEngine = ()=>{
    if (engine._head) {
        engine.reqId = engineTickMethod(tickEngine);
        engine.update();
    } else engine.reqId = 0;
};
const killEngine = ()=>{
    engineCancelMethod(/** @type {NodeJS.Immediate & Number} */ engine.reqId);
    engine.reqId = 0;
    return engine;
};
/**
 * @param  {DOMTarget} target
 * @param  {String} propName
 * @param  {Object} animationInlineStyles
 * @return {String}
 */ const parseInlineTransforms = (target, propName, animationInlineStyles)=>{
    const inlineTransforms = target.style.transform;
    let inlinedStylesPropertyValue;
    if (inlineTransforms) {
        const cachedTransforms = target[transformsSymbol];
        let t;
        while(t = transformsExecRgx.exec(inlineTransforms)){
            const inlinePropertyName = t[1];
            // const inlinePropertyValue = t[2];
            const inlinePropertyValue = t[2].slice(1, -1);
            cachedTransforms[inlinePropertyName] = inlinePropertyValue;
            if (inlinePropertyName === propName) {
                inlinedStylesPropertyValue = inlinePropertyValue;
                // Store the new parsed inline styles if animationInlineStyles is provided
                if (animationInlineStyles) animationInlineStyles[propName] = inlinePropertyValue;
            }
        }
    }
    return inlineTransforms && !isUnd(inlinedStylesPropertyValue) ? inlinedStylesPropertyValue : stringStartsWith(propName, 'scale') ? '1' : stringStartsWith(propName, 'rotate') || stringStartsWith(propName, 'skew') ? '0deg' : '0px';
};
/**
 * @param  {DOMTargetsParam|TargetsParam} v
 * @return {NodeList|HTMLCollection}
 */ function getNodeList(v) {
    const n = isStr(v) ? globals.root.querySelectorAll(v) : v;
    if (n instanceof NodeList || n instanceof HTMLCollection) return n;
}
/**
 * @overload
 * @param  {DOMTargetsParam} targets
 * @return {DOMTargetsArray}
 *
 * @overload
 * @param  {JSTargetsParam} targets
 * @return {JSTargetsArray}
 *
 * @overload
 * @param  {TargetsParam} targets
 * @return {TargetsArray}
 *
 * @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
 */ function parseTargets(targets) {
    if (isNil(targets)) return /** @type {TargetsArray} */ [];
    if (isArr(targets)) {
        const flattened = targets.flat(Infinity);
        /** @type {TargetsArray} */ const parsed = [];
        for(let i = 0, l = flattened.length; i < l; i++){
            const item = flattened[i];
            if (!isNil(item)) {
                const nodeList = getNodeList(item);
                if (nodeList) for(let j = 0, jl = nodeList.length; j < jl; j++){
                    const subItem = nodeList[j];
                    if (!isNil(subItem)) {
                        let isDuplicate = false;
                        for(let k = 0, kl = parsed.length; k < kl; k++)if (parsed[k] === subItem) {
                            isDuplicate = true;
                            break;
                        }
                        if (!isDuplicate) parsed.push(subItem);
                    }
                }
                else {
                    let isDuplicate = false;
                    for(let j = 0, jl = parsed.length; j < jl; j++)if (parsed[j] === item) {
                        isDuplicate = true;
                        break;
                    }
                    if (!isDuplicate) parsed.push(item);
                }
            }
        }
        return parsed;
    }
    if (!isBrowser) return /** @type {JSTargetsArray} */ [
        targets
    ];
    const nodeList = getNodeList(targets);
    if (nodeList) return /** @type {DOMTargetsArray} */ Array.from(nodeList);
    return /** @type {TargetsArray} */ [
        targets
    ];
}
/**
 * @overload
 * @param  {DOMTargetsParam} targets
 * @return {DOMTargetsArray}
 *
 * @overload
 * @param  {JSTargetsParam} targets
 * @return {JSTargetsArray}
 *
 * @overload
 * @param  {TargetsParam} targets
 * @return {TargetsArray}
 *
 * @param  {DOMTargetsParam|JSTargetsParam|TargetsParam} targets
 */ function registerTargets(targets) {
    const parsedTargetsArray = parseTargets(targets);
    const parsedTargetsLength = parsedTargetsArray.length;
    if (parsedTargetsLength) for(let i = 0; i < parsedTargetsLength; i++){
        const target = parsedTargetsArray[i];
        if (!target[isRegisteredTargetSymbol]) {
            target[isRegisteredTargetSymbol] = true;
            const isSvgType = isSvg(target);
            const isDom = /** @type {DOMTarget} */ target.nodeType || isSvgType;
            if (isDom) {
                target[isDomSymbol] = true;
                target[isSvgSymbol] = isSvgType;
                target[transformsSymbol] = {};
            }
        }
    }
    return parsedTargetsArray;
}
/**
 * @param  {TargetsParam} path
 * @return {SVGGeometryElement|undefined}
 */ const getPath = (path)=>{
    const parsedTargets = parseTargets(path);
    const $parsedSvg = /** @type {SVGGeometryElement} */ parsedTargets[0];
    if (!$parsedSvg || !isSvg($parsedSvg)) return;
    return $parsedSvg;
};
/**
 * @param  {TargetsParam} path2
 * @param  {Number} [precision]
 * @return {FunctionValue}
 */ const morphTo = (path2, precision = .33)=>($path1)=>{
        const $path2 = /** @type {SVGGeometryElement} */ getPath(path2);
        if (!$path2) return;
        const isPath = $path1.tagName === 'path';
        const separator = isPath ? ' ' : ',';
        const previousPoints = $path1[morphPointsSymbol];
        if (previousPoints) $path1.setAttribute(isPath ? 'd' : 'points', previousPoints);
        let v1 = '', v2 = '';
        if (!precision) {
            v1 = $path1.getAttribute(isPath ? 'd' : 'points');
            v2 = $path2.getAttribute(isPath ? 'd' : 'points');
        } else {
            const length1 = /** @type {SVGGeometryElement} */ $path1.getTotalLength();
            const length2 = $path2.getTotalLength();
            const maxPoints = Math.max(Math.ceil(length1 * precision), Math.ceil(length2 * precision));
            for(let i = 0; i < maxPoints; i++){
                const t = i / (maxPoints - 1);
                const pointOnPath1 = /** @type {SVGGeometryElement} */ $path1.getPointAtLength(length1 * t);
                const pointOnPath2 = $path2.getPointAtLength(length2 * t);
                const prefix = isPath ? i === 0 ? 'M' : 'L' : '';
                v1 += prefix + round(pointOnPath1.x, 3) + separator + pointOnPath1.y + ' ';
                v2 += prefix + round(pointOnPath2.x, 3) + separator + pointOnPath2.y + ' ';
            }
        }
        $path1[morphPointsSymbol] = v2;
        return [
            v1,
            v2
        ];
    };
/**
 * @param {SVGGeometryElement} $el
 * @param {Number} start
 * @param {Number} end
 * @return {Proxy}
 */ function createDrawableProxy($el, start, end) {
    const strokeLineCap = getComputedStyle($el).strokeLinecap;
    const pathLength = K;
    let currentCap = strokeLineCap;
    const proxy = new Proxy($el, {
        get (target, property) {
            const value = target[property];
            if (property === proxyTargetSymbol) return target;
            if (property === 'setAttribute') /** @param {any[]} args */ return (...args)=>{
                if (args[0] === 'draw') {
                    const value = args[1];
                    const values = value.split(' ');
                    const v1 = +values[0];
                    const v2 = +values[1];
                    // TOTO: Benchmark if performing two slices is more performant than one split
                    // const spaceIndex = value.indexOf(' ');
                    // const v1 = round(+value.slice(0, spaceIndex), precision);
                    // const v2 = round(+value.slice(spaceIndex + 1), precision);
                    const os = v1 * -1000;
                    const d1 = v2 * pathLength + os;
                    // Prevents linecap to smear by offsetting the dasharray length by 0.01% when v2 is not at max
                    const d2 = pathLength + (v1 === 0 && v2 === 1 || v1 === 1 && v2 === 0 ? 0 : 10) - d1;
                    // Handle cases where the cap is still visible when the line is completly hidden
                    if (strokeLineCap !== 'butt') {
                        const newCap = v1 === v2 ? 'butt' : strokeLineCap;
                        if (currentCap !== newCap) {
                            target.setAttribute('stroke-linecap', `${newCap}`);
                            currentCap = newCap;
                        }
                    }
                    target.setAttribute('stroke-dashoffset', `${os}`);
                    target.setAttribute('stroke-dasharray', `${d1} ${d2}`);
                }
                return Reflect.apply(value, target, args);
            };
            if (isFnc(value)) /** @param {any[]} args */ return (...args)=>Reflect.apply(value, target, args);
            else return value;
        }
    });
    if ($el.getAttribute('pathLength') !== `${pathLength}`) {
        $el.setAttribute('pathLength', `${pathLength}`);
        proxy.setAttribute('draw', `${start} ${end}`);
    }
    return /** @type {unknown} */ proxy;
}
/**
 * @param {TargetsParam} selector
 * @param {Number} [start=0]
 * @param {Number} [end=0]
 * @return {Array.<Proxy>}
 */ const createDrawable = (selector, start = 0, end = 0)=>{
    const els = /** @type {unknown} */ parseTargets(selector);
    els.forEach(($el, i)=>els[i] = createDrawableProxy(/** @type {unknown} */ $el, start, end));
    return els;
};
// Motion path animation
/**
 * @param {SVGGeometryElement} $path
 * @param {Number} progress
 * @param {Number}lookup
 * @return {DOMPoint}
 */ const getPathPoint = ($path, progress, lookup = 0)=>{
    return $path.getPointAtLength(progress + lookup >= 1 ? progress + lookup : 0);
};
/**
 * @param {SVGGeometryElement} $path
 * @param {String} pathProperty
 * @return {FunctionValue}
 */ const getPathProgess = ($path, pathProperty)=>{
    return ($el)=>{
        const totalLength = +$path.getTotalLength();
        const inSvg = $el[isSvgSymbol];
        const ctm = $path.getCTM();
        /** @type {TweenObjectValue} */ return {
            from: 0,
            to: totalLength,
            /** @type {TweenModifier} */ modifier: (progress)=>{
                if (pathProperty === 'a') {
                    const p0 = getPathPoint($path, progress, -1);
                    const p1 = getPathPoint($path, progress, 1);
                    return atan2(p1.y - p0.y, p1.x - p0.x) * 180 / PI;
                } else {
                    const p = getPathPoint($path, progress, 0);
                    return pathProperty === 'x' ? inSvg || !ctm ? p.x : p.x * ctm.a + p.y * ctm.c + ctm.e : inSvg || !ctm ? p.y : p.x * ctm.b + p.y * ctm.d + ctm.f;
                }
            }
        };
    };
};
/**
 * @param {TargetsParam} path
 */ const createMotionPath = (path)=>{
    const $path = getPath(path);
    if (!$path) return;
    return {
        translateX: getPathProgess($path, 'x'),
        translateY: getPathProgess($path, 'y'),
        rotate: getPathProgess($path, 'a')
    };
};
// Check for valid SVG attribute
const cssReservedProperties = [
    'opacity',
    'rotate',
    'overflow',
    'color'
];
/**
 * @param  {Target} el
 * @param  {String} propertyName
 * @return {Boolean}
 */ const isValidSVGAttribute = (el, propertyName)=>{
    // Return early and use CSS opacity animation instead (already better default values (opacity: 1 instead of 0)) and rotate should be considered a transform
    if (cssReservedProperties.includes(propertyName)) return false;
    if (el.getAttribute(propertyName) || propertyName in el) {
        if (propertyName === 'scale') {
            const elParentNode = /** @type {SVGGeometryElement} */ /** @type {DOMTarget} */ el.parentNode;
            // Only consider scale as a valid SVG attribute on filter element
            return elParentNode && elParentNode.tagName === 'filter';
        }
        return true;
    }
};
const svg = {
    morphTo,
    createMotionPath,
    createDrawable
};
/**
 * RGB / RGBA Color value string -> RGBA values array
 * @param  {String} rgbValue
 * @return {ColorArray}
 */ const rgbToRgba = (rgbValue)=>{
    const rgba = rgbExecRgx.exec(rgbValue) || rgbaExecRgx.exec(rgbValue);
    const a = !isUnd(rgba[4]) ? +rgba[4] : 1;
    return [
        +rgba[1],
        +rgba[2],
        +rgba[3],
        a
    ];
};
/**
 * HEX3 / HEX3A / HEX6 / HEX6A Color value string -> RGBA values array
 * @param  {String} hexValue
 * @return {ColorArray}
 */ const hexToRgba = (hexValue)=>{
    const hexLength = hexValue.length;
    const isShort = hexLength === 4 || hexLength === 5;
    return [
        +('0x' + hexValue[1] + hexValue[isShort ? 1 : 2]),
        +('0x' + hexValue[isShort ? 2 : 3] + hexValue[isShort ? 2 : 4]),
        +('0x' + hexValue[isShort ? 3 : 5] + hexValue[isShort ? 3 : 6]),
        hexLength === 5 || hexLength === 9 ? +(+('0x' + hexValue[isShort ? 4 : 7] + hexValue[isShort ? 4 : 8]) / 255).toFixed(3) : 1
    ];
};
/**
 * @param  {Number} p
 * @param  {Number} q
 * @param  {Number} t
 * @return {Number}
 */ const hue2rgb = (p, q, t)=>{
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    return t < 1 / 6 ? p + (q - p) * 6 * t : t < 0.5 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p;
};
/**
 * HSL / HSLA Color value string -> RGBA values array
 * @param  {String} hslValue
 * @return {ColorArray}
 */ const hslToRgba = (hslValue)=>{
    const hsla = hslExecRgx.exec(hslValue) || hslaExecRgx.exec(hslValue);
    const h = +hsla[1] / 360;
    const s = +hsla[2] / 100;
    const l = +hsla[3] / 100;
    const a = !isUnd(hsla[4]) ? +hsla[4] : 1;
    let r, g, b;
    if (s === 0) r = g = b = l;
    else {
        const q = l < .5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = round(hue2rgb(p, q, h + 1 / 3) * 255, 0);
        g = round(hue2rgb(p, q, h) * 255, 0);
        b = round(hue2rgb(p, q, h - 1 / 3) * 255, 0);
    }
    return [
        r,
        g,
        b,
        a
    ];
};
/**
 * All in one color converter that converts a color string value into an array of RGBA values
 * @param  {String} colorString
 * @return {ColorArray}
 */ const convertColorStringValuesToRgbaArray = (colorString)=>{
    return isRgb(colorString) ? rgbToRgba(colorString) : isHex(colorString) ? hexToRgba(colorString) : isHsl(colorString) ? hslToRgba(colorString) : [
        0,
        0,
        0,
        1
    ];
};
/**
 * @template T, D
 * @param {T|undefined} targetValue
 * @param {D} defaultValue
 * @return {T|D}
 */ const setValue = (targetValue, defaultValue)=>{
    return isUnd(targetValue) ? defaultValue : targetValue;
};
/**
 * @param  {TweenPropValue} value
 * @param  {Target} target
 * @param  {Number} index
 * @param  {Number} total
 * @param  {Object} [store]
 * @return {any}
 */ const getFunctionValue = (value, target, index, total, store)=>{
    if (isFnc(value)) {
        const func = ()=>{
            const computed = /** @type {Function} */ value(target, index, total);
            // Fallback to 0 if the function returns undefined / NaN / null / false / 0
            return !isNaN(+computed) ? +computed : computed || 0;
        };
        if (store) store.func = func;
        return func();
    } else return value;
};
/**
 * @param  {Target} target
 * @param  {String} prop
 * @return {tweenTypes}
 */ const getTweenType = (target, prop)=>{
    return !target[isDomSymbol] ? tweenTypes.OBJECT : // Handle SVG attributes
    target[isSvgSymbol] && isValidSVGAttribute(target, prop) ? tweenTypes.ATTRIBUTE : // Handle CSS Transform properties differently than CSS to allow individual animations
    validTransforms.includes(prop) || shortTransforms.get(prop) ? tweenTypes.TRANSFORM : // CSS variables
    stringStartsWith(prop, '--') ? tweenTypes.CSS_VAR : // All other CSS properties
    prop in /** @type {DOMTarget} */ target.style ? tweenTypes.CSS : // Handle other DOM Attributes
    prop in target ? tweenTypes.OBJECT : tweenTypes.ATTRIBUTE;
};
/**
 * @param  {DOMTarget} target
 * @param  {String} propName
 * @param  {Object} animationInlineStyles
 * @return {String}
 */ const getCSSValue = (target, propName, animationInlineStyles)=>{
    const inlineStyles = target.style[propName];
    if (inlineStyles && animationInlineStyles) animationInlineStyles[propName] = inlineStyles;
    const value = inlineStyles || getComputedStyle(target[proxyTargetSymbol] || target).getPropertyValue(propName);
    return value === 'auto' ? '0' : value;
};
/**
 * @param {Target} target
 * @param {String} propName
 * @param {tweenTypes} [tweenType]
 * @param {Object|void} [animationInlineStyles]
 * @return {String|Number}
 */ const getOriginalAnimatableValue = (target, propName, tweenType, animationInlineStyles)=>{
    const type = !isUnd(tweenType) ? tweenType : getTweenType(target, propName);
    return type === tweenTypes.OBJECT ? target[propName] || 0 : type === tweenTypes.ATTRIBUTE ? /** @type {DOMTarget} */ target.getAttribute(propName) : type === tweenTypes.TRANSFORM ? parseInlineTransforms(/** @type {DOMTarget} */ target, propName, animationInlineStyles) : type === tweenTypes.CSS_VAR ? getCSSValue(/** @type {DOMTarget} */ target, propName, animationInlineStyles).trimStart() : getCSSValue(/** @type {DOMTarget} */ target, propName, animationInlineStyles);
};
/**
 * @param  {Number} x
 * @param  {Number} y
 * @param  {String} operator
 * @return {Number}
 */ const getRelativeValue = (x, y, operator)=>{
    return operator === '-' ? x - y : operator === '+' ? x + y : x * y;
};
/** @return {TweenDecomposedValue} */ const createDecomposedValueTargetObject = ()=>{
    return {
        /** @type {valueTypes} */ t: valueTypes.NUMBER,
        n: 0,
        u: null,
        o: null,
        d: null,
        s: null
    };
};
/**
 * @param  {String|Number} rawValue
 * @param  {TweenDecomposedValue} targetObject
 * @return {TweenDecomposedValue}
 */ const decomposeRawValue = (rawValue, targetObject)=>{
    /** @type {valueTypes} */ targetObject.t = valueTypes.NUMBER;
    targetObject.n = 0;
    targetObject.u = null;
    targetObject.o = null;
    targetObject.d = null;
    targetObject.s = null;
    if (!rawValue) return targetObject;
    const num = +rawValue;
    if (!isNaN(num)) {
        // It's a number
        targetObject.n = num;
        return targetObject;
    } else {
        // let str = /** @type {String} */(rawValue).trim();
        let str = /** @type {String} */ rawValue;
        // Parsing operators (+=, -=, *=) manually is much faster than using regex here
        if (str[1] === '=') {
            targetObject.o = str[0];
            str = str.slice(2);
        }
        // Skip exec regex if the value type is complex or color to avoid long regex backtracking
        const unitMatch = str.includes(' ') ? false : unitsExecRgx.exec(str);
        if (unitMatch) {
            // Has a number and a unit
            targetObject.t = valueTypes.UNIT;
            targetObject.n = +unitMatch[1];
            targetObject.u = unitMatch[2];
            return targetObject;
        } else if (targetObject.o) {
            // Has an operator (+=, -=, *=)
            targetObject.n = +str;
            return targetObject;
        } else if (isCol(str)) {
            // Is a color
            targetObject.t = valueTypes.COLOR;
            targetObject.d = convertColorStringValuesToRgbaArray(str);
            return targetObject;
        } else {
            // Is a more complex string (generally svg coords, calc() or filters CSS values)
            const matchedNumbers = str.match(digitWithExponentRgx);
            targetObject.t = valueTypes.COMPLEX;
            targetObject.d = matchedNumbers ? matchedNumbers.map(Number) : [];
            targetObject.s = str.split(digitWithExponentRgx) || [];
            return targetObject;
        }
    }
};
/**
 * @param  {Tween} tween
 * @param  {TweenDecomposedValue} targetObject
 * @return {TweenDecomposedValue}
 */ const decomposeTweenValue = (tween, targetObject)=>{
    targetObject.t = tween._valueType;
    targetObject.n = tween._toNumber;
    targetObject.u = tween._unit;
    targetObject.o = null;
    targetObject.d = cloneArray(tween._toNumbers);
    targetObject.s = cloneArray(tween._strings);
    return targetObject;
};
const decomposedOriginalValue = createDecomposedValueTargetObject();
const lookups = {
    /** @type {TweenReplaceLookups} */ _rep: new WeakMap(),
    /** @type {TweenAdditiveLookups} */ _add: new Map()
};
/**
 * @param  {Target} target
 * @param  {String} property
 * @param  {String} lookup
 * @return {TweenPropertySiblings}
 */ const getTweenSiblings = (target, property, lookup = '_rep')=>{
    const lookupMap = lookups[lookup];
    let targetLookup = lookupMap.get(target);
    if (!targetLookup) {
        targetLookup = {};
        lookupMap.set(target, targetLookup);
    }
    return targetLookup[property] ? targetLookup[property] : targetLookup[property] = {
        _head: null,
        _tail: null
    };
};
/**
 * @param  {Tween} p
 * @param  {Tween} c
 * @return {Number|Boolean}
 */ const addTweenSortMethod = (p, c)=>{
    return p._isOverridden || p._absoluteStartTime > c._absoluteStartTime;
};
/**
 * @param {Tween} tween
 */ const overrideTween = (tween)=>{
    tween._isOverlapped = 1;
    tween._isOverridden = 1;
    tween._changeDuration = minValue;
    tween._currentTime = minValue;
};
/**
 * @param  {Tween} tween
 * @param  {TweenPropertySiblings} siblings
 * @return {Tween}
 */ const composeTween = (tween, siblings)=>{
    const tweenCompositionType = tween._composition;
    // Handle replaced tweens
    if (tweenCompositionType === compositionTypes.replace) {
        const tweenAbsStartTime = tween._absoluteStartTime;
        addChild(siblings, tween, addTweenSortMethod, '_prevRep', '_nextRep');
        const prevSibling = tween._prevRep;
        // Update the previous siblings for composition replace tweens
        if (prevSibling) {
            const prevParent = prevSibling.parent;
            const prevAbsEndTime = prevSibling._absoluteStartTime + prevSibling._changeDuration;
            // Handle looped animations tween
            if (// Check if the previous tween is from a different animation
            tween.parent.id !== prevParent.id && // Check if the animation has loops
            prevParent.iterationCount > 1 && // Check if _absoluteChangeEndTime of last loop overlaps the current tween
            prevAbsEndTime + (prevParent.duration - prevParent.iterationDuration) > tweenAbsStartTime) {
                // TODO: Find a way to only override the iterations overlapping with the tween
                overrideTween(prevSibling);
                let prevPrevSibling = prevSibling._prevRep;
                // If the tween was part of a set of keyframes, override its siblings
                while(prevPrevSibling && prevPrevSibling.parent.id === prevParent.id){
                    overrideTween(prevPrevSibling);
                    prevPrevSibling = prevPrevSibling._prevRep;
                }
            }
            const absoluteUpdateStartTime = tweenAbsStartTime - tween._delay;
            if (prevAbsEndTime > absoluteUpdateStartTime) {
                const prevChangeStartTime = prevSibling._startTime;
                const prevTLOffset = prevAbsEndTime - (prevChangeStartTime + prevSibling._updateDuration);
                prevSibling._changeDuration = absoluteUpdateStartTime - prevTLOffset - prevChangeStartTime;
                prevSibling._currentTime = prevSibling._changeDuration;
                prevSibling._isOverlapped = 1;
                if (prevSibling._changeDuration < minValue) overrideTween(prevSibling);
            }
            // Pause (and cancel) the parent if it only contains overlapped tweens
            let pausePrevParentAnimation = true;
            forEachChildren(prevParent, (/** @type Tween */ t)=>{
                if (!t._isOverlapped) pausePrevParentAnimation = false;
            });
            if (pausePrevParentAnimation) {
                const prevParentTL = prevParent.parent;
                if (prevParentTL) {
                    let pausePrevParentTL = true;
                    forEachChildren(prevParentTL, (/** @type JSAnimation */ a)=>{
                        if (a !== prevParent) forEachChildren(a, (/** @type Tween */ t)=>{
                            if (!t._isOverlapped) pausePrevParentTL = false;
                        });
                    });
                    if (pausePrevParentTL) prevParentTL.cancel();
                } else prevParent.cancel();
            }
        }
    // let nextSibling = tween._nextRep;
    // // All the next siblings are automatically overridden
    // if (nextSibling && nextSibling._absoluteStartTime >= tweenAbsStartTime) {
    //   while (nextSibling) {
    //     overrideTween(nextSibling);
    //     nextSibling = nextSibling._nextRep;
    //   }
    // }
    // if (nextSibling && nextSibling._absoluteStartTime < tweenAbsStartTime) {
    //   while (nextSibling) {
    //     overrideTween(nextSibling);
    //     console.log(tween.id, nextSibling.id);
    //     nextSibling = nextSibling._nextRep;
    //   }
    // }
    // Handle additive tweens composition
    } else if (tweenCompositionType === compositionTypes.blend) {
        const additiveTweenSiblings = getTweenSiblings(tween.target, tween.property, '_add');
        const additiveAnimation = addAdditiveAnimation(lookups._add);
        let lookupTween = additiveTweenSiblings._head;
        if (!lookupTween) {
            lookupTween = {
                ...tween
            };
            lookupTween._composition = compositionTypes.replace;
            lookupTween._updateDuration = minValue;
            lookupTween._startTime = 0;
            lookupTween._numbers = cloneArray(tween._fromNumbers);
            lookupTween._number = 0;
            lookupTween._next = null;
            lookupTween._prev = null;
            addChild(additiveTweenSiblings, lookupTween);
            addChild(additiveAnimation, lookupTween);
        }
        // Convert the values of TO to FROM and set TO to 0
        const toNumber = tween._toNumber;
        tween._fromNumber = lookupTween._fromNumber - toNumber;
        tween._toNumber = 0;
        tween._numbers = cloneArray(tween._fromNumbers);
        tween._number = 0;
        lookupTween._fromNumber = toNumber;
        if (tween._toNumbers) {
            const toNumbers = cloneArray(tween._toNumbers);
            if (toNumbers) toNumbers.forEach((value, i)=>{
                tween._fromNumbers[i] = lookupTween._fromNumbers[i] - value;
                tween._toNumbers[i] = 0;
            });
            lookupTween._fromNumbers = toNumbers;
        }
        addChild(additiveTweenSiblings, tween, null, '_prevAdd', '_nextAdd');
    }
    return tween;
};
/**
 * @param  {Tween} tween
 * @return {Tween}
 */ const removeTweenSliblings = (tween)=>{
    const tweenComposition = tween._composition;
    if (tweenComposition !== compositionTypes.none) {
        const tweenTarget = tween.target;
        const tweenProperty = tween.property;
        const replaceTweensLookup = lookups._rep;
        const replaceTargetProps = replaceTweensLookup.get(tweenTarget);
        const tweenReplaceSiblings = replaceTargetProps[tweenProperty];
        removeChild(tweenReplaceSiblings, tween, '_prevRep', '_nextRep');
        if (tweenComposition === compositionTypes.blend) {
            const addTweensLookup = lookups._add;
            const addTargetProps = addTweensLookup.get(tweenTarget);
            if (!addTargetProps) return;
            const additiveTweenSiblings = addTargetProps[tweenProperty];
            const additiveAnimation = additive.animation;
            removeChild(additiveTweenSiblings, tween, '_prevAdd', '_nextAdd');
            // If only one tween is left in the additive lookup, it's the tween lookup
            const lookupTween = additiveTweenSiblings._head;
            if (lookupTween && lookupTween === additiveTweenSiblings._tail) {
                removeChild(additiveTweenSiblings, lookupTween, '_prevAdd', '_nextAdd');
                removeChild(additiveAnimation, lookupTween);
                let shouldClean = true;
                for(let prop in addTargetProps)if (addTargetProps[prop]._head) {
                    shouldClean = false;
                    break;
                }
                if (shouldClean) addTweensLookup.delete(tweenTarget);
            }
        }
    }
    return tween;
};
/**
 * @param  {Timer} timer
 * @return {Timer}
 */ const resetTimerProperties = (timer)=>{
    timer.paused = true;
    timer.began = false;
    timer.completed = false;
    return timer;
};
/**
 * @param  {Timer} timer
 * @return {Timer}
 */ const reviveTimer = (timer)=>{
    if (!timer._cancelled) return timer;
    if (timer._hasChildren) forEachChildren(timer, reviveTimer);
    else forEachChildren(timer, (/** @type {Tween} tween*/ tween)=>{
        if (tween._composition !== compositionTypes.none) composeTween(tween, getTweenSiblings(tween.target, tween.property));
    });
    timer._cancelled = 0;
    return timer;
};
let timerId = 0;
/**
 * Base class used to create Timers, Animations and Timelines
 */ class Timer extends Clock {
    /**
   * @param {TimerParams} [parameters]
   * @param {Timeline} [parent]
   * @param {Number} [parentPosition]
   */ constructor(parameters = {}, parent = null, parentPosition = 0){
        super(0);
        const { id, delay, duration, reversed, alternate, loop, loopDelay, autoplay, frameRate, playbackRate, onComplete, onLoop, onPause, onBegin, onBeforeUpdate, onUpdate } = parameters;
        if (globals.scope) globals.scope.revertibles.push(this);
        const timerInitTime = parent ? 0 : engine._elapsedTime;
        const timerDefaults = parent ? parent.defaults : globals.defaults;
        const timerDelay = /** @type {Number} */ isFnc(delay) || isUnd(delay) ? timerDefaults.delay : +delay;
        const timerDuration = isFnc(duration) || isUnd(duration) ? Infinity : +duration;
        const timerLoop = setValue(loop, timerDefaults.loop);
        const timerLoopDelay = setValue(loopDelay, timerDefaults.loopDelay);
        const timerIterationCount = timerLoop === true || timerLoop === Infinity || /** @type {Number} */ timerLoop < 0 ? Infinity : /** @type {Number} */ timerLoop + 1;
        let offsetPosition = 0;
        if (parent) offsetPosition = parentPosition;
        else {
            let startTime = now();
            // Make sure to tick the engine once if suspended to avoid big gaps with the following offsetPosition calculation
            if (engine.paused) {
                engine.requestTick(startTime);
                startTime = engine._elapsedTime;
            }
            offsetPosition = startTime - engine._startTime;
        }
        // Timer's parameters
        this.id = !isUnd(id) ? id : ++timerId;
        /** @type {Timeline} */ this.parent = parent;
        // Total duration of the timer
        this.duration = clampInfinity((timerDuration + timerLoopDelay) * timerIterationCount - timerLoopDelay) || minValue;
        /** @type {Boolean} */ this.backwards = false;
        /** @type {Boolean} */ this.paused = true;
        /** @type {Boolean} */ this.began = false;
        /** @type {Boolean} */ this.completed = false;
        /** @type {Callback<this>} */ this.onBegin = onBegin || timerDefaults.onBegin;
        /** @type {Callback<this>} */ this.onBeforeUpdate = onBeforeUpdate || timerDefaults.onBeforeUpdate;
        /** @type {Callback<this>} */ this.onUpdate = onUpdate || timerDefaults.onUpdate;
        /** @type {Callback<this>} */ this.onLoop = onLoop || timerDefaults.onLoop;
        /** @type {Callback<this>} */ this.onPause = onPause || timerDefaults.onPause;
        /** @type {Callback<this>} */ this.onComplete = onComplete || timerDefaults.onComplete;
        /** @type {Number} */ this.iterationDuration = timerDuration; // Duration of one loop
        /** @type {Number} */ this.iterationCount = timerIterationCount; // Number of loops
        /** @type {Boolean|ScrollObserver} */ this._autoplay = parent ? false : setValue(autoplay, timerDefaults.autoplay);
        /** @type {Number} */ this._offset = offsetPosition;
        /** @type {Number} */ this._delay = timerDelay;
        /** @type {Number} */ this._loopDelay = timerLoopDelay;
        /** @type {Number} */ this._iterationTime = 0;
        /** @type {Number} */ this._currentIteration = 0; // Current loop index
        /** @type {Function} */ this._resolve = noop; // Used by .then()
        /** @type {Boolean} */ this._running = false;
        /** @type {Number} */ this._reversed = +setValue(reversed, timerDefaults.reversed);
        /** @type {Number} */ this._reverse = this._reversed;
        /** @type {Number} */ this._cancelled = 0;
        /** @type {Boolean} */ this._alternate = setValue(alternate, timerDefaults.alternate);
        /** @type {Renderable} */ this._prev = null;
        /** @type {Renderable} */ this._next = null;
        // Clock's parameters
        /** @type {Number} */ this._elapsedTime = timerInitTime;
        /** @type {Number} */ this._startTime = timerInitTime;
        /** @type {Number} */ this._lastTime = timerInitTime;
        /** @type {Number} */ this._fps = setValue(frameRate, timerDefaults.frameRate);
        /** @type {Number} */ this._speed = setValue(playbackRate, timerDefaults.playbackRate);
    }
    get cancelled() {
        return !!this._cancelled;
    }
    /** @param {Boolean} cancelled  */ set cancelled(cancelled) {
        cancelled ? this.cancel() : this.reset(1).play();
    }
    get currentTime() {
        return clamp(round(this._currentTime, globals.precision), -this._delay, this.duration);
    }
    /** @param {Number} time  */ set currentTime(time) {
        const paused = this.paused;
        // Pausing the timer is necessary to avoid time jumps on a running instance
        this.pause().seek(+time);
        if (!paused) this.resume();
    }
    get iterationCurrentTime() {
        return round(this._iterationTime, globals.precision);
    }
    /** @param {Number} time  */ set iterationCurrentTime(time) {
        this.currentTime = this.iterationDuration * this._currentIteration + time;
    }
    get progress() {
        return clamp(round(this._currentTime / this.duration, 5), 0, 1);
    }
    /** @param {Number} progress  */ set progress(progress) {
        this.currentTime = this.duration * progress;
    }
    get iterationProgress() {
        return clamp(round(this._iterationTime / this.iterationDuration, 5), 0, 1);
    }
    /** @param {Number} progress  */ set iterationProgress(progress) {
        const iterationDuration = this.iterationDuration;
        this.currentTime = iterationDuration * this._currentIteration + iterationDuration * progress;
    }
    get currentIteration() {
        return this._currentIteration;
    }
    /** @param {Number} iterationCount  */ set currentIteration(iterationCount) {
        this.currentTime = this.iterationDuration * clamp(+iterationCount, 0, this.iterationCount - 1);
    }
    get reversed() {
        return !!this._reversed;
    }
    /** @param {Boolean} reverse  */ set reversed(reverse) {
        reverse ? this.reverse() : this.play();
    }
    get speed() {
        return super.speed;
    }
    /** @param {Number} playbackRate  */ set speed(playbackRate) {
        super.speed = playbackRate;
        this.resetTime();
    }
    /**
   * @param  {Number} internalRender
   * @return {this}
   */ reset(internalRender = 0) {
        // If cancelled, revive the timer before rendering in order to have propertly composed tweens siblings
        reviveTimer(this);
        if (this._reversed && !this._reverse) this.reversed = false;
        // Rendering before updating the completed flag to prevent skips and to make sure the properties are not overridden
        // Setting the iterationTime at the end to force the rendering to happend backwards, otherwise calling .reset() on Timelines might not render children in the right order
        // NOTE: This is only required for Timelines and might be better to move to the Timeline class?
        this._iterationTime = this.iterationDuration;
        // Set tickMode to tickModes.FORCE to force rendering
        tick(this, 0, 1, internalRender, tickModes.FORCE);
        // Reset timer properties after revive / render to make sure the props are not updated again
        resetTimerProperties(this);
        // Also reset children properties
        if (this._hasChildren) forEachChildren(this, resetTimerProperties);
        return this;
    }
    /**
   * @param  {Number} internalRender
   * @return {this}
   */ init(internalRender = 0) {
        this.fps = this._fps;
        this.speed = this._speed;
        // Manually calling .init() on timelines should render all children intial state
        // Forces all children to render once then render to 0 when reseted
        if (!internalRender && this._hasChildren) tick(this, this.duration, 1, internalRender, tickModes.FORCE);
        this.reset(internalRender);
        // Make sure to set autoplay to false to child timers so it doesn't attempt to autoplay / link
        const autoplay = this._autoplay;
        if (autoplay === true) this.resume();
        else if (autoplay && !isUnd(/** @type {ScrollObserver} */ autoplay.linked)) /** @type {ScrollObserver} */ autoplay.link(this);
        return this;
    }
    /** @return {this} */ resetTime() {
        const timeScale = 1 / (this._speed * engine._speed);
        this._startTime = now() - (this._currentTime + this._delay) * timeScale;
        return this;
    }
    /** @return {this} */ pause() {
        if (this.paused) return this;
        this.paused = true;
        this.onPause(this);
        return this;
    }
    /** @return {this} */ resume() {
        if (!this.paused) return this;
        this.paused = false;
        // We can safely imediatly render a timer that has no duration and no children
        if (this.duration <= minValue && !this._hasChildren) tick(this, minValue, 0, 0, tickModes.FORCE);
        else {
            if (!this._running) {
                addChild(engine, this);
                engine._hasChildren = true;
                this._running = true;
            }
            this.resetTime();
            // Forces the timer to advance by at least one frame when the next tick occurs
            this._startTime -= 12;
            engine.wake();
        }
        return this;
    }
    /** @return {this} */ restart() {
        return this.reset(0).resume();
    }
    /**
   * @param  {Number} time
   * @param  {Boolean|Number} [muteCallbacks]
   * @param  {Boolean|Number} [internalRender]
   * @return {this}
   */ seek(time, muteCallbacks = 0, internalRender = 0) {
        // Recompose the tween siblings in case the timer has been cancelled
        reviveTimer(this);
        // If you seek a completed animation, otherwise the next play will starts at 0
        this.completed = false;
        const isPaused = this.paused;
        this.paused = true;
        // timer, time, muteCallbacks, internalRender, tickMode
        tick(this, time + this._delay, ~~muteCallbacks, ~~internalRender, tickModes.AUTO);
        return isPaused ? this : this.resume();
    }
    /** @return {this} */ alternate() {
        const reversed = this._reversed;
        const count = this.iterationCount;
        const duration = this.iterationDuration;
        // Calculate the maximum iterations possible given the iteration duration
        const iterations = count === Infinity ? floor(maxValue / duration) : count;
        this._reversed = +(this._alternate && !(iterations % 2) ? reversed : !reversed);
        if (count === Infinity) // Handle infinite loops to loop on themself
        this.iterationProgress = this._reversed ? 1 - this.iterationProgress : this.iterationProgress;
        else this.seek(duration * iterations - this._currentTime);
        this.resetTime();
        return this;
    }
    /** @return {this} */ play() {
        if (this._reversed) this.alternate();
        return this.resume();
    }
    /** @return {this} */ reverse() {
        if (!this._reversed) this.alternate();
        return this.resume();
    }
    // TODO: Move all the animation / tweens / children related code to Animation / Timeline
    /** @return {this} */ cancel() {
        if (this._hasChildren) forEachChildren(this, (/** @type {Renderable} */ child)=>child.cancel(), true);
        else forEachChildren(this, removeTweenSliblings);
        this._cancelled = 1;
        // Pausing the timer removes it from the engine
        return this.pause();
    }
    /**
   * @param  {Number} newDuration
   * @return {this}
   */ stretch(newDuration) {
        const currentDuration = this.duration;
        if (currentDuration === clampZero(newDuration)) return this;
        const timeScale = newDuration / currentDuration;
        const isSetter = newDuration <= minValue;
        this.duration = isSetter ? minValue : clampZero(clampInfinity(round(currentDuration * timeScale, 12)));
        this.iterationDuration = isSetter ? minValue : clampZero(clampInfinity(round(this.iterationDuration * timeScale, 12)));
        this._offset *= timeScale;
        this._delay *= timeScale;
        this._loopDelay *= timeScale;
        return this;
    }
    /**
   * Cancels the timer by seeking it back to 0 and reverting the attached scroller if necessary
   * @return {this}
   */ revert() {
        tick(this, 0, 1, 0, tickModes.AUTO);
        const ap = /** @type {ScrollObserver} */ this._autoplay;
        if (ap && ap.linked && ap.linked === this) ap.revert();
        return this.cancel();
    }
    /**
   * Imediatly completes the timer, cancels it and triggers the onComplete callback
   * @return {this}
   */ complete() {
        return this.seek(this.duration).cancel();
    }
    /**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */ then(callback = noop) {
        const then = this.then;
        const onResolve = ()=>{
            // this.then = null prevents infinite recursion if returned by an async function
            // https://github.com/juliangarnierorg/anime-beta/issues/26
            this.then = null;
            callback(this);
            this.then = then;
            this._resolve = noop;
        };
        return new Promise((r)=>{
            this._resolve = ()=>r(onResolve());
            // Make sure to resolve imediatly if the timer has already completed
            if (this.completed) this._resolve();
            return this;
        });
    }
}
/**
 * @param {TimerParams} [parameters]
 * @return {Timer}
 */ const createTimer = (parameters)=>new Timer(parameters, null, 0).init();
/** @type {EasingFunction} */ const none = (t)=>t;
// Cubic Bezier solver adapted from https://github.com/gre/bezier-ease © Gaëtan Renaudeau
/**
 * @param  {Number} aT
 * @param  {Number} aA1
 * @param  {Number} aA2
 * @return {Number}
 */ const calcBezier = (aT, aA1, aA2)=>(((1 - 3 * aA2 + 3 * aA1) * aT + (3 * aA2 - 6 * aA1)) * aT + 3 * aA1) * aT;
/**
 * @param  {Number} aX
 * @param  {Number} mX1
 * @param  {Number} mX2
 * @return {Number}
 */ const binarySubdivide = (aX, mX1, mX2)=>{
    let aA = 0, aB = 1, currentX, currentT, i = 0;
    do {
        currentT = aA + (aB - aA) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0) aB = currentT;
        else aA = currentT;
    }while (abs(currentX) > .0000001 && ++i < 100);
    return currentT;
};
/**
 * @param  {Number} [mX1]
 * @param  {Number} [mY1]
 * @param  {Number} [mX2]
 * @param  {Number} [mY2]
 * @return {EasingFunction}
 */ const cubicBezier = (mX1 = 0.5, mY1 = 0.0, mX2 = 0.5, mY2 = 1.0)=>mX1 === mY1 && mX2 === mY2 ? none : (t)=>t === 0 || t === 1 ? t : calcBezier(binarySubdivide(t, mX1, mX2), mY1, mY2);
/**
 * Steps ease implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
 * Only covers 'end' and 'start' jumpterms
 * @param  {Number} steps
 * @param  {Boolean} [fromStart]
 * @return {EasingFunction}
 */ const steps = (steps = 10, fromStart)=>{
    const roundMethod = fromStart ? ceil : floor;
    return (t)=>roundMethod(clamp(t, 0, 1) * steps) * (1 / steps);
};
/**
 * Without parameters, the linear function creates a non-eased transition.
 * Parameters, if used, creates a piecewise linear easing by interpolating linearly between the specified points.
 * @param  {...String|Number} [args] - Points
 * @return {EasingFunction}
 */ const linear = (...args)=>{
    const argsLength = args.length;
    if (!argsLength) return none;
    const totalPoints = argsLength - 1;
    const firstArg = args[0];
    const lastArg = args[totalPoints];
    const xPoints = [
        0
    ];
    const yPoints = [
        parseNumber(firstArg)
    ];
    for(let i = 1; i < totalPoints; i++){
        const arg = args[i];
        const splitValue = isStr(arg) ? /** @type {String} */ arg.trim().split(' ') : [
            arg
        ];
        const value = splitValue[0];
        const percent = splitValue[1];
        xPoints.push(!isUnd(percent) ? parseNumber(percent) / 100 : i / totalPoints);
        yPoints.push(parseNumber(value));
    }
    yPoints.push(parseNumber(lastArg));
    xPoints.push(1);
    return function easeLinear(t) {
        for(let i = 1, l = xPoints.length; i < l; i++){
            const currentX = xPoints[i];
            if (t <= currentX) {
                const prevX = xPoints[i - 1];
                const prevY = yPoints[i - 1];
                return prevY + (yPoints[i] - prevY) * (t - prevX) / (currentX - prevX);
            }
        }
        return yPoints[yPoints.length - 1];
    };
};
/**
 * Generate random steps
 * @param  {Number} [length] - The number of steps
 * @param  {Number} [randomness] - How strong the randomness is
 * @return {EasingFunction}
 */ const irregular = (length = 10, randomness = 1)=>{
    const values = [
        0
    ];
    const total = length - 1;
    for(let i = 1; i < total; i++){
        const previousValue = values[i - 1];
        const spacing = i / total;
        const segmentEnd = (i + 1) / total;
        const randomVariation = spacing + (segmentEnd - spacing) * Math.random();
        // Mix the even spacing and random variation based on the randomness parameter
        const randomValue = spacing * (1 - randomness) + randomVariation * randomness;
        values.push(clamp(randomValue, previousValue, 1));
    }
    values.push(1);
    return linear(...values);
};
// Easing functions adapted from http://www.robertpenner.com/ease © Robert Penner
/**
 * @callback PowerEasing
 * @param {Number|String} [power=1.675]
 * @return {EasingFunction}
 */ /**
 * @callback BackEasing
 * @param {Number|String} [overshoot=1.70158]
 * @return {EasingFunction}
 */ /**
 * @callback ElasticEasing
 * @param {Number|String} [amplitude=1]
 * @param {Number|String} [period=.3]
 * @return {EasingFunction}
 */ /**
 * @callback EaseFactory
 * @param {Number|String} [paramA]
 * @param {Number|String} [paramB]
 * @return {EasingFunction|Number}
 */ /** @typedef {PowerEasing|BackEasing|ElasticEasing} EasesFactory */ const halfPI = PI / 2;
const doublePI = PI * 2;
/** @type {PowerEasing} */ const easeInPower = (p = 1.68)=>(t)=>pow(t, +p);
/** @type {Record<String, EasesFactory|EasingFunction>} */ const easeInFunctions = {
    [emptyString]: easeInPower,
    Quad: easeInPower(2),
    Cubic: easeInPower(3),
    Quart: easeInPower(4),
    Quint: easeInPower(5),
    /** @type {EasingFunction} */ Sine: (t)=>1 - cos(t * halfPI),
    /** @type {EasingFunction} */ Circ: (t)=>1 - sqrt(1 - t * t),
    /** @type {EasingFunction} */ Expo: (t)=>t ? pow(2, 10 * t - 10) : 0,
    /** @type {EasingFunction} */ Bounce: (t)=>{
        let pow2, b = 4;
        while(t < ((pow2 = pow(2, --b)) - 1) / 11);
        return 1 / pow(4, 3 - b) - 7.5625 * pow((pow2 * 3 - 2) / 22 - t, 2);
    },
    /** @type {BackEasing} */ Back: (overshoot = 1.70158)=>(t)=>(+overshoot + 1) * t * t * t - +overshoot * t * t,
    /** @type {ElasticEasing} */ Elastic: (amplitude = 1, period = .3)=>{
        const a = clamp(+amplitude, 1, 10);
        const p = clamp(+period, minValue, 2);
        const s = p / doublePI * asin(1 / a);
        const e = doublePI / p;
        return (t)=>t === 0 || t === 1 ? t : -a * pow(2, -10 * (1 - t)) * sin((1 - t - s) * e);
    }
};
/**
 * @callback EaseType
 * @param {EasingFunction} Ease
 * @return {EasingFunction}
 */ /** @type {Record<String, EaseType>} */ const easeTypes = {
    in: (easeIn)=>(t)=>easeIn(t),
    out: (easeIn)=>(t)=>1 - easeIn(1 - t),
    inOut: (easeIn)=>(t)=>t < .5 ? easeIn(t * 2) / 2 : 1 - easeIn(t * -2 + 2) / 2,
    outIn: (easeIn)=>(t)=>t < .5 ? (1 - easeIn(1 - t * 2)) / 2 : (easeIn(t * 2 - 1) + 1) / 2
};
/**
 * @param  {String} string
 * @param  {Record<String, EasesFactory|EasingFunction>} easesFunctions
 * @param  {Object} easesLookups
 * @return {EasingFunction}
 */ const parseEaseString = (string, easesFunctions, easesLookups)=>{
    if (easesLookups[string]) return easesLookups[string];
    if (string.indexOf('(') <= -1) {
        const hasParams = easeTypes[string] || string.includes('Back') || string.includes('Elastic');
        const parsedFn = /** @type {EasingFunction} */ hasParams ? /** @type {EasesFactory} */ easesFunctions[string]() : easesFunctions[string];
        return parsedFn ? easesLookups[string] = parsedFn : none;
    } else {
        const split = string.slice(0, -1).split('(');
        const parsedFn = /** @type {EasesFactory} */ easesFunctions[split[0]];
        return parsedFn ? easesLookups[string] = parsedFn(...split[1].split(',')) : none;
    }
};
/**
 * @typedef  {Object} EasesFunctions
 * @property {typeof linear} linear
 * @property {typeof irregular} irregular
 * @property {typeof steps} steps
 * @property {typeof cubicBezier} cubicBezier
 * @property {PowerEasing} in
 * @property {PowerEasing} out
 * @property {PowerEasing} inOut
 * @property {PowerEasing} outIn
 * @property {EasingFunction} inQuad
 * @property {EasingFunction} outQuad
 * @property {EasingFunction} inOutQuad
 * @property {EasingFunction} outInQuad
 * @property {EasingFunction} inCubic
 * @property {EasingFunction} outCubic
 * @property {EasingFunction} inOutCubic
 * @property {EasingFunction} outInCubic
 * @property {EasingFunction} inQuart
 * @property {EasingFunction} outQuart
 * @property {EasingFunction} inOutQuart
 * @property {EasingFunction} outInQuart
 * @property {EasingFunction} inQuint
 * @property {EasingFunction} outQuint
 * @property {EasingFunction} inOutQuint
 * @property {EasingFunction} outInQuint
 * @property {EasingFunction} inSine
 * @property {EasingFunction} outSine
 * @property {EasingFunction} inOutSine
 * @property {EasingFunction} outInSine
 * @property {EasingFunction} inCirc
 * @property {EasingFunction} outCirc
 * @property {EasingFunction} inOutCirc
 * @property {EasingFunction} outInCirc
 * @property {EasingFunction} inExpo
 * @property {EasingFunction} outExpo
 * @property {EasingFunction} inOutExpo
 * @property {EasingFunction} outInExpo
 * @property {EasingFunction} inBounce
 * @property {EasingFunction} outBounce
 * @property {EasingFunction} inOutBounce
 * @property {EasingFunction} outInBounce
 * @property {BackEasing} inBack
 * @property {BackEasing} outBack
 * @property {BackEasing} inOutBack
 * @property {BackEasing} outInBack
 * @property {ElasticEasing} inElastic
 * @property {ElasticEasing} outElastic
 * @property {ElasticEasing} inOutElastic
 * @property {ElasticEasing} outInElastic
 */ const eases = /*#__PURE__*/ (()=>{
    const list = {
        linear,
        irregular,
        steps,
        cubicBezier
    };
    for(let type in easeTypes)for(let name in easeInFunctions){
        const easeIn = easeInFunctions[name];
        const easeType = easeTypes[type];
        list[type + name] = /** @type {EasesFactory|EasingFunction} */ name === emptyString || name === 'Back' || name === 'Elastic' ? (a, b)=>easeType(/** @type {EasesFactory} */ easeIn(a, b)) : easeType(/** @type {EasingFunction} */ easeIn);
    }
    return /** @type {EasesFunctions} */ list;
})();
/** @type {Record<String, EasingFunction>} */ const JSEasesLookups = {
    linear: none
};
/**
 * @param  {EasingParam} ease
 * @return {EasingFunction}
 */ const parseEasings = (ease)=>isFnc(ease) ? ease : isStr(ease) ? parseEaseString(/** @type {String} */ ease, eases, JSEasesLookups) : none;
const propertyNamesCache = {};
/**
 * @param  {String} propertyName
 * @param  {Target} target
 * @param  {tweenTypes} tweenType
 * @return {String}
 */ const sanitizePropertyName = (propertyName, target, tweenType)=>{
    if (tweenType === tweenTypes.TRANSFORM) {
        const t = shortTransforms.get(propertyName);
        return t ? t : propertyName;
    } else if (tweenType === tweenTypes.CSS || // Handle special cases where properties like "strokeDashoffset" needs to be set as "stroke-dashoffset"
    // but properties like "baseFrequency" should stay in lowerCamelCase
    tweenType === tweenTypes.ATTRIBUTE && isSvg(target) && propertyName in /** @type {DOMTarget} */ target.style) {
        const cachedPropertyName = propertyNamesCache[propertyName];
        if (cachedPropertyName) return cachedPropertyName;
        else {
            const lowerCaseName = propertyName ? toLowerCase(propertyName) : propertyName;
            propertyNamesCache[propertyName] = lowerCaseName;
            return lowerCaseName;
        }
    } else return propertyName;
};
const angleUnitsMap = {
    'deg': 1,
    'rad': 180 / PI,
    'turn': 360
};
const convertedValuesCache = {};
/**
 * @param  {DOMTarget} el
 * @param  {TweenDecomposedValue} decomposedValue
 * @param  {String} unit
 * @param  {Boolean} [force]
 * @return {TweenDecomposedValue}
 */ const convertValueUnit = (el, decomposedValue, unit, force = false)=>{
    const currentUnit = decomposedValue.u;
    const currentNumber = decomposedValue.n;
    if (decomposedValue.t === valueTypes.UNIT && currentUnit === unit) return decomposedValue;
    const cachedKey = currentNumber + currentUnit + unit;
    const cached = convertedValuesCache[cachedKey];
    if (!isUnd(cached) && !force) decomposedValue.n = cached;
    else {
        let convertedValue;
        if (currentUnit in angleUnitsMap) convertedValue = currentNumber * angleUnitsMap[currentUnit] / angleUnitsMap[unit];
        else {
            const baseline = 100;
            const tempEl = /** @type {DOMTarget} */ el.cloneNode();
            const parentNode = el.parentNode;
            const parentEl = parentNode && parentNode !== doc ? parentNode : doc.body;
            parentEl.appendChild(tempEl);
            const elStyle = tempEl.style;
            elStyle.width = baseline + currentUnit;
            const currentUnitWidth = /** @type {HTMLElement} */ tempEl.offsetWidth || baseline;
            elStyle.width = baseline + unit;
            const newUnitWidth = /** @type {HTMLElement} */ tempEl.offsetWidth || baseline;
            const factor = currentUnitWidth / newUnitWidth;
            parentEl.removeChild(tempEl);
            convertedValue = factor * currentNumber;
        }
        decomposedValue.n = convertedValue;
        convertedValuesCache[cachedKey] = convertedValue;
    }
    decomposedValue.t, valueTypes.UNIT;
    decomposedValue.u = unit;
    return decomposedValue;
};
/**
 * @template {Renderable} T
 * @param {T} renderable
 * @return {T}
 */ const cleanInlineStyles = (renderable)=>{
    // Allow cleanInlineStyles() to be called on timelines
    if (renderable._hasChildren) forEachChildren(renderable, cleanInlineStyles, true);
    else {
        const animation = /** @type {JSAnimation} */ renderable;
        animation.pause();
        forEachChildren(animation, (/** @type {Tween} */ tween)=>{
            const tweenProperty = tween.property;
            const tweenTarget = tween.target;
            if (tweenTarget[isDomSymbol]) {
                const targetStyle = /** @type {DOMTarget} */ tweenTarget.style;
                const originalInlinedValue = animation._inlineStyles[tweenProperty];
                if (tween._tweenType === tweenTypes.TRANSFORM) {
                    const cachedTransforms = tweenTarget[transformsSymbol];
                    if (isUnd(originalInlinedValue) || originalInlinedValue === emptyString) delete cachedTransforms[tweenProperty];
                    else cachedTransforms[tweenProperty] = originalInlinedValue;
                    if (tween._renderTransforms) {
                        if (!Object.keys(cachedTransforms).length) targetStyle.removeProperty('transform');
                        else {
                            let str = emptyString;
                            for(let key in cachedTransforms)str += transformsFragmentStrings[key] + cachedTransforms[key] + ') ';
                            targetStyle.transform = str;
                        }
                    }
                } else if (isUnd(originalInlinedValue) || originalInlinedValue === emptyString) targetStyle.removeProperty(tweenProperty);
                else targetStyle[tweenProperty] = originalInlinedValue;
                if (animation._tail === tween) animation.targets.forEach((t)=>{
                    if (t.getAttribute && t.getAttribute('style') === emptyString) t.removeAttribute('style');
                });
            }
        });
    }
    return renderable;
};
// Defines decomposed values target objects only once and mutate their properties later to avoid GC
// TODO: Maybe move the objects creation to values.js and use the decompose function to create the base object
const fromTargetObject = createDecomposedValueTargetObject();
const toTargetObject = createDecomposedValueTargetObject();
const toFunctionStore = {
    func: null
};
const keyframesTargetArray = [
    null
];
const fastSetValuesArray = [
    null,
    null
];
/** @type {TweenKeyValue} */ const keyObjectTarget = {
    to: null
};
let tweenId = 0;
let keyframes;
/** @type {TweenParamsOptions & TweenValues} */ let key;
/**
 * @param {DurationKeyframes | PercentageKeyframes} keyframes
 * @param {AnimationParams} parameters
 * @return {AnimationParams}
 */ const generateKeyframes = (keyframes, parameters)=>{
    /** @type {AnimationParams} */ const properties = {};
    if (isArr(keyframes)) {
        const propertyNames = [].concat(.../** @type {DurationKeyframes} */ keyframes.map((key)=>Object.keys(key))).filter(isKey);
        for(let i = 0, l = propertyNames.length; i < l; i++){
            const propName = propertyNames[i];
            const propArray = /** @type {DurationKeyframes} */ keyframes.map((key)=>{
                /** @type {TweenKeyValue} */ const newKey = {};
                for(let p in key){
                    const keyValue = /** @type {TweenPropValue} */ key[p];
                    if (isKey(p)) {
                        if (p === propName) newKey.to = keyValue;
                    } else newKey[p] = keyValue;
                }
                return newKey;
            });
            properties[propName] = /** @type {ArraySyntaxValue} */ propArray;
        }
    } else {
        const totalDuration = /** @type {Number} */ setValue(parameters.duration, globals.defaults.duration);
        const keys = Object.keys(keyframes).map((key)=>{
            return {
                o: parseFloat(key) / 100,
                p: keyframes[key]
            };
        }).sort((a, b)=>a.o - b.o);
        keys.forEach((key)=>{
            const offset = key.o;
            const prop = key.p;
            for(let name in prop)if (isKey(name)) {
                let propArray = /** @type {Array} */ properties[name];
                if (!propArray) propArray = properties[name] = [];
                const duration = offset * totalDuration;
                let length = propArray.length;
                let prevKey = propArray[length - 1];
                const keyObj = {
                    to: prop[name]
                };
                let durProgress = 0;
                for(let i = 0; i < length; i++)durProgress += propArray[i].duration;
                if (length === 1) keyObj.from = prevKey.to;
                if (prop.ease) keyObj.ease = prop.ease;
                keyObj.duration = duration - (length ? durProgress : 0);
                propArray.push(keyObj);
            }
            return key;
        });
        for(let name in properties){
            const propArray = /** @type {Array} */ properties[name];
            let prevEase;
            // let durProgress = 0
            for(let i = 0, l = propArray.length; i < l; i++){
                const prop = propArray[i];
                // Emulate WAPPI easing parameter position
                const currentEase = prop.ease;
                prop.ease = prevEase ? prevEase : undefined;
                prevEase = currentEase;
            // durProgress += prop.duration;
            // if (i === l - 1 && durProgress !== totalDuration) {
            //   propArray.push({ from: prop.to, ease: prop.ease, duration: totalDuration - durProgress })
            // }
            }
            if (!propArray[0].duration) propArray.shift();
        }
    }
    return properties;
};
class JSAnimation extends Timer {
    /**
   * @param {TargetsParam} targets
   * @param {AnimationParams} parameters
   * @param {Timeline} [parent]
   * @param {Number} [parentPosition]
   * @param {Boolean} [fastSet=false]
   * @param {Number} [index=0]
   * @param {Number} [length=0]
   */ constructor(targets, parameters, parent, parentPosition, fastSet = false, index = 0, length = 0){
        super(/** @type {TimerParams&AnimationParams} */ parameters, parent, parentPosition);
        const parsedTargets = registerTargets(targets);
        const targetsLength = parsedTargets.length;
        // If the parameters object contains a "keyframes" property, convert all the keyframes values to regular properties
        const kfParams = /** @type {AnimationParams} */ parameters.keyframes;
        const params = /** @type {AnimationParams} */ kfParams ? mergeObjects(generateKeyframes(/** @type {DurationKeyframes} */ kfParams, parameters), parameters) : parameters;
        const { delay, duration, ease, playbackEase, modifier, composition, onRender } = params;
        const animDefaults = parent ? parent.defaults : globals.defaults;
        const animaPlaybackEase = setValue(playbackEase, animDefaults.playbackEase);
        const animEase = animaPlaybackEase ? parseEasings(animaPlaybackEase) : null;
        const hasSpring = !isUnd(ease) && !isUnd(/** @type {Spring} */ ease.ease);
        const tEasing = hasSpring ? /** @type {Spring} */ ease.ease : setValue(ease, animEase ? 'linear' : animDefaults.ease);
        const tDuration = hasSpring ? /** @type {Spring} */ ease.duration : setValue(duration, animDefaults.duration);
        const tDelay = setValue(delay, animDefaults.delay);
        const tModifier = modifier || animDefaults.modifier;
        // If no composition is defined and the targets length is high (>= 1000) set the composition to 'none' (0) for faster tween creation
        const tComposition = isUnd(composition) && targetsLength >= K ? compositionTypes.none : !isUnd(composition) ? composition : animDefaults.composition;
        // TODO: Do not create an empty object until we know the animation will generate inline styles
        const animInlineStyles = {};
        // const absoluteOffsetTime = this._offset;
        const absoluteOffsetTime = this._offset + (parent ? parent._offset : 0);
        let iterationDuration = NaN;
        let iterationDelay = NaN;
        let animationAnimationLength = 0;
        let shouldTriggerRender = 0;
        for(let targetIndex = 0; targetIndex < targetsLength; targetIndex++){
            const target = parsedTargets[targetIndex];
            const ti = index || targetIndex;
            const tl = length || targetsLength;
            let lastTransformGroupIndex = NaN;
            let lastTransformGroupLength = NaN;
            for(let p in params)if (isKey(p)) {
                const tweenType = getTweenType(target, p);
                const propName = sanitizePropertyName(p, target, tweenType);
                let propValue = params[p];
                const isPropValueArray = isArr(propValue);
                if (fastSet && !isPropValueArray) {
                    fastSetValuesArray[0] = propValue;
                    fastSetValuesArray[1] = propValue;
                    propValue = fastSetValuesArray;
                }
                // TODO: Allow nested keyframes inside ObjectValue value (prop: { to: [.5, 1, .75, 2, 3] })
                // Normalize property values to valid keyframe syntax:
                // [x, y] to [{to: [x, y]}] or {to: x} to [{to: x}] or keep keys syntax [{}, {}, {}...]
                // const keyframes = isArr(propValue) ? propValue.length === 2 && !isObj(propValue[0]) ? [{ to: propValue }] : propValue : [propValue];
                if (isPropValueArray) {
                    const arrayLength = /** @type {Array} */ propValue.length;
                    const isNotObjectValue = !isObj(propValue[0]);
                    // Convert [x, y] to [{to: [x, y]}]
                    if (arrayLength === 2 && isNotObjectValue) {
                        keyObjectTarget.to = /** @type {unknown} */ propValue;
                        keyframesTargetArray[0] = keyObjectTarget;
                        keyframes = keyframesTargetArray;
                    // Convert [x, y, z] to [[x, y], z]
                    } else if (arrayLength > 2 && isNotObjectValue) {
                        keyframes = [];
                        /** @type {Array.<Number>} */ propValue.forEach((v, i)=>{
                            if (!i) fastSetValuesArray[0] = v;
                            else if (i === 1) {
                                fastSetValuesArray[1] = v;
                                keyframes.push(fastSetValuesArray);
                            } else keyframes.push(v);
                        });
                    } else keyframes = /** @type {Array.<TweenKeyValue>} */ propValue;
                } else {
                    keyframesTargetArray[0] = propValue;
                    keyframes = keyframesTargetArray;
                }
                let siblings = null;
                let prevTween = null;
                let firstTweenChangeStartTime = NaN;
                let lastTweenChangeEndTime = 0;
                let tweenIndex = 0;
                for(let l = keyframes.length; tweenIndex < l; tweenIndex++){
                    const keyframe = keyframes[tweenIndex];
                    if (isObj(keyframe)) key = keyframe;
                    else {
                        keyObjectTarget.to = /** @type {TweenParamValue} */ keyframe;
                        key = keyObjectTarget;
                    }
                    toFunctionStore.func = null;
                    const computedToValue = getFunctionValue(key.to, target, ti, tl, toFunctionStore);
                    let tweenToValue;
                    // Allows function based values to return an object syntax value ({to: v})
                    if (isObj(computedToValue) && !isUnd(computedToValue.to)) {
                        key = computedToValue;
                        tweenToValue = computedToValue.to;
                    } else tweenToValue = computedToValue;
                    const tweenFromValue = getFunctionValue(key.from, target, ti, tl);
                    const keyEasing = key.ease;
                    const hasSpring = !isUnd(keyEasing) && !isUnd(/** @type {Spring} */ keyEasing.ease);
                    // Easing are treated differently and don't accept function based value to prevent having to pass a function wrapper that returns an other function all the time
                    const tweenEasing = hasSpring ? /** @type {Spring} */ keyEasing.ease : keyEasing || tEasing;
                    // Calculate default individual keyframe duration by dividing the tl of keyframes
                    const tweenDuration = hasSpring ? /** @type {Spring} */ keyEasing.duration : getFunctionValue(setValue(key.duration, l > 1 ? getFunctionValue(tDuration, target, ti, tl) / l : tDuration), target, ti, tl);
                    // Default delay value should only be applied to the first tween
                    const tweenDelay = getFunctionValue(setValue(key.delay, !tweenIndex ? tDelay : 0), target, ti, tl);
                    const computedComposition = getFunctionValue(setValue(key.composition, tComposition), target, ti, tl);
                    const tweenComposition = isNum(computedComposition) ? computedComposition : compositionTypes[computedComposition];
                    // Modifiers are treated differently and don't accept function based value to prevent having to pass a function wrapper
                    const tweenModifier = key.modifier || tModifier;
                    const hasFromvalue = !isUnd(tweenFromValue);
                    const hasToValue = !isUnd(tweenToValue);
                    const isFromToArray = isArr(tweenToValue);
                    const isFromToValue = isFromToArray || hasFromvalue && hasToValue;
                    const tweenStartTime = prevTween ? lastTweenChangeEndTime + tweenDelay : tweenDelay;
                    const absoluteStartTime = absoluteOffsetTime + tweenStartTime;
                    // Force a onRender callback if the animation contains at least one from value and autoplay is set to false
                    if (!shouldTriggerRender && (hasFromvalue || isFromToArray)) shouldTriggerRender = 1;
                    let prevSibling = prevTween;
                    if (tweenComposition !== compositionTypes.none) {
                        if (!siblings) siblings = getTweenSiblings(target, propName);
                        let nextSibling = siblings._head;
                        // Iterate trough all the next siblings until we find a sibling with an equal or inferior start time
                        while(nextSibling && !nextSibling._isOverridden && nextSibling._absoluteStartTime <= absoluteStartTime){
                            prevSibling = nextSibling;
                            nextSibling = nextSibling._nextRep;
                            // Overrides all the next siblings if the next sibling starts at the same time of after as the new tween start time
                            if (nextSibling && nextSibling._absoluteStartTime >= absoluteStartTime) while(nextSibling){
                                overrideTween(nextSibling);
                                // This will ends both the current while loop and the upper one once all the next sibllings have been overriden
                                nextSibling = nextSibling._nextRep;
                            }
                        }
                    }
                    // Decompose values
                    if (isFromToValue) {
                        decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[0], target, ti, tl) : tweenFromValue, fromTargetObject);
                        decomposeRawValue(isFromToArray ? getFunctionValue(tweenToValue[1], target, ti, tl, toFunctionStore) : tweenToValue, toTargetObject);
                        if (fromTargetObject.t === valueTypes.NUMBER) {
                            if (prevSibling) {
                                if (prevSibling._valueType === valueTypes.UNIT) {
                                    fromTargetObject.t = valueTypes.UNIT;
                                    fromTargetObject.u = prevSibling._unit;
                                }
                            } else {
                                decomposeRawValue(getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), decomposedOriginalValue);
                                if (decomposedOriginalValue.t === valueTypes.UNIT) {
                                    fromTargetObject.t = valueTypes.UNIT;
                                    fromTargetObject.u = decomposedOriginalValue.u;
                                }
                            }
                        }
                    } else {
                        if (hasToValue) decomposeRawValue(tweenToValue, toTargetObject);
                        else if (prevTween) decomposeTweenValue(prevTween, toTargetObject);
                        else // No need to get and parse the original value if the tween is part of a timeline and has a previous sibling part of the same timeline
                        decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value : getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), toTargetObject);
                        if (hasFromvalue) decomposeRawValue(tweenFromValue, fromTargetObject);
                        else if (prevTween) decomposeTweenValue(prevTween, fromTargetObject);
                        else decomposeRawValue(parent && prevSibling && prevSibling.parent.parent === parent ? prevSibling._value : // No need to get and parse the original value if the tween is part of a timeline and has a previous sibling part of the same timeline
                        getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), fromTargetObject);
                    }
                    // Apply operators
                    if (fromTargetObject.o) fromTargetObject.n = getRelativeValue(!prevSibling ? decomposeRawValue(getOriginalAnimatableValue(target, propName, tweenType, animInlineStyles), decomposedOriginalValue).n : prevSibling._toNumber, fromTargetObject.n, fromTargetObject.o);
                    if (toTargetObject.o) toTargetObject.n = getRelativeValue(fromTargetObject.n, toTargetObject.n, toTargetObject.o);
                    // Values omogenisation in cases of type difference between "from" and "to"
                    if (fromTargetObject.t !== toTargetObject.t) {
                        if (fromTargetObject.t === valueTypes.COMPLEX || toTargetObject.t === valueTypes.COMPLEX) {
                            const complexValue = fromTargetObject.t === valueTypes.COMPLEX ? fromTargetObject : toTargetObject;
                            const notComplexValue = fromTargetObject.t === valueTypes.COMPLEX ? toTargetObject : fromTargetObject;
                            notComplexValue.t = valueTypes.COMPLEX;
                            notComplexValue.s = cloneArray(complexValue.s);
                            notComplexValue.d = complexValue.d.map(()=>notComplexValue.n);
                        } else if (fromTargetObject.t === valueTypes.UNIT || toTargetObject.t === valueTypes.UNIT) {
                            const unitValue = fromTargetObject.t === valueTypes.UNIT ? fromTargetObject : toTargetObject;
                            const notUnitValue = fromTargetObject.t === valueTypes.UNIT ? toTargetObject : fromTargetObject;
                            notUnitValue.t = valueTypes.UNIT;
                            notUnitValue.u = unitValue.u;
                        } else if (fromTargetObject.t === valueTypes.COLOR || toTargetObject.t === valueTypes.COLOR) {
                            const colorValue = fromTargetObject.t === valueTypes.COLOR ? fromTargetObject : toTargetObject;
                            const notColorValue = fromTargetObject.t === valueTypes.COLOR ? toTargetObject : fromTargetObject;
                            notColorValue.t = valueTypes.COLOR;
                            notColorValue.s = colorValue.s;
                            notColorValue.d = [
                                0,
                                0,
                                0,
                                1
                            ];
                        }
                    }
                    // Unit conversion
                    if (fromTargetObject.u !== toTargetObject.u) {
                        let valueToConvert = toTargetObject.u ? fromTargetObject : toTargetObject;
                        valueToConvert = convertValueUnit(/** @type {DOMTarget} */ target, valueToConvert, toTargetObject.u ? toTargetObject.u : fromTargetObject.u, false);
                    // TODO:
                    // convertValueUnit(target, to.u ? from : to, to.u ? to.u : from.u);
                    }
                    // Fill in non existing complex values
                    if (toTargetObject.d && fromTargetObject.d && toTargetObject.d.length !== fromTargetObject.d.length) {
                        const longestValue = fromTargetObject.d.length > toTargetObject.d.length ? fromTargetObject : toTargetObject;
                        const shortestValue = longestValue === fromTargetObject ? toTargetObject : fromTargetObject;
                        // TODO: Check if n should be used instead of 0 for default complex values
                        shortestValue.d = longestValue.d.map((_, i)=>isUnd(shortestValue.d[i]) ? 0 : shortestValue.d[i]);
                        shortestValue.s = cloneArray(longestValue.s);
                    }
                    // Tween factory
                    // Rounding is necessary here to minimize floating point errors
                    const tweenUpdateDuration = round(+tweenDuration || minValue, 12);
                    /** @type {Tween} */ const tween = {
                        parent: this,
                        id: tweenId++,
                        property: propName,
                        target: target,
                        _value: null,
                        _func: toFunctionStore.func,
                        _ease: parseEasings(tweenEasing),
                        _fromNumbers: cloneArray(fromTargetObject.d),
                        _toNumbers: cloneArray(toTargetObject.d),
                        _strings: cloneArray(toTargetObject.s),
                        _fromNumber: fromTargetObject.n,
                        _toNumber: toTargetObject.n,
                        _numbers: cloneArray(fromTargetObject.d),
                        _number: fromTargetObject.n,
                        _unit: toTargetObject.u,
                        _modifier: tweenModifier,
                        _currentTime: 0,
                        _startTime: tweenStartTime,
                        _delay: +tweenDelay,
                        _updateDuration: tweenUpdateDuration,
                        _changeDuration: tweenUpdateDuration,
                        _absoluteStartTime: absoluteStartTime,
                        // NOTE: Investigate bit packing to stores ENUM / BOOL
                        _tweenType: tweenType,
                        _valueType: toTargetObject.t,
                        _composition: tweenComposition,
                        _isOverlapped: 0,
                        _isOverridden: 0,
                        _renderTransforms: 0,
                        _prevRep: null,
                        _nextRep: null,
                        _prevAdd: null,
                        _nextAdd: null,
                        _prev: null,
                        _next: null
                    };
                    if (tweenComposition !== compositionTypes.none) composeTween(tween, siblings);
                    if (isNaN(firstTweenChangeStartTime)) firstTweenChangeStartTime = tween._startTime;
                    // Rounding is necessary here to minimize floating point errors
                    lastTweenChangeEndTime = round(tweenStartTime + tweenUpdateDuration, 12);
                    prevTween = tween;
                    animationAnimationLength++;
                    addChild(this, tween);
                }
                // Update animation timings with the added tweens properties
                if (isNaN(iterationDelay) || firstTweenChangeStartTime < iterationDelay) iterationDelay = firstTweenChangeStartTime;
                if (isNaN(iterationDuration) || lastTweenChangeEndTime > iterationDuration) iterationDuration = lastTweenChangeEndTime;
                // TODO: Find a way to inline tween._renderTransforms = 1 here
                if (tweenType === tweenTypes.TRANSFORM) {
                    lastTransformGroupIndex = animationAnimationLength - tweenIndex;
                    lastTransformGroupLength = animationAnimationLength;
                }
            }
            // Set _renderTransforms to last transform property to correctly render the transforms list
            if (!isNaN(lastTransformGroupIndex)) {
                let i = 0;
                forEachChildren(this, (/** @type {Tween} */ tween)=>{
                    if (i >= lastTransformGroupIndex && i < lastTransformGroupLength) {
                        tween._renderTransforms = 1;
                        if (tween._composition === compositionTypes.blend) forEachChildren(additive.animation, (/** @type {Tween} */ additiveTween)=>{
                            if (additiveTween.id === tween.id) additiveTween._renderTransforms = 1;
                        });
                    }
                    i++;
                });
            }
        }
        if (!targetsLength) console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
        if (iterationDelay) {
            forEachChildren(this, (/** @type {Tween} */ tween)=>{
                // If (startTime - delay) equals 0, this means the tween is at the begining of the animation so we need to trim the delay too
                if (!(tween._startTime - tween._delay)) tween._delay -= iterationDelay;
                tween._startTime -= iterationDelay;
            });
            iterationDuration -= iterationDelay;
        } else iterationDelay = 0;
        // Prevents iterationDuration to be NaN if no valid animatable props have been provided
        // Prevents _iterationCount to be NaN if no valid animatable props have been provided
        if (!iterationDuration) {
            iterationDuration = minValue;
            this.iterationCount = 0;
        }
        /** @type {TargetsArray} */ this.targets = parsedTargets;
        /** @type {Number} */ this.duration = iterationDuration === minValue ? minValue : clampInfinity((iterationDuration + this._loopDelay) * this.iterationCount - this._loopDelay) || minValue;
        /** @type {Callback<this>} */ this.onRender = onRender || animDefaults.onRender;
        /** @type {EasingFunction} */ this._ease = animEase;
        /** @type {Number} */ this._delay = iterationDelay;
        // NOTE: I'm keeping delay values separated from offsets in timelines because delays can override previous tweens and it could be confusing to debug a timeline with overridden tweens and no associated visible delays.
        // this._delay = parent ? 0 : iterationDelay;
        // this._offset += parent ? iterationDelay : 0;
        /** @type {Number} */ this.iterationDuration = iterationDuration;
        /** @type {{}} */ this._inlineStyles = animInlineStyles;
        if (!this._autoplay && shouldTriggerRender) this.onRender(this);
    }
    /**
   * @param  {Number} newDuration
   * @return {this}
   */ stretch(newDuration) {
        const currentDuration = this.duration;
        if (currentDuration === clampZero(newDuration)) return this;
        const timeScale = newDuration / currentDuration;
        // NOTE: Find a better way to handle the stretch of an animation after stretch = 0
        forEachChildren(this, (/** @type {Tween} */ tween)=>{
            // Rounding is necessary here to minimize floating point errors
            tween._updateDuration = clampZero(round(tween._updateDuration * timeScale, 12));
            tween._changeDuration = clampZero(round(tween._changeDuration * timeScale, 12));
            tween._currentTime *= timeScale;
            tween._startTime *= timeScale;
            tween._absoluteStartTime *= timeScale;
        });
        return super.stretch(newDuration);
    }
    /**
   * @return {this}
   */ refresh() {
        forEachChildren(this, (/** @type {Tween} */ tween)=>{
            const ogValue = getOriginalAnimatableValue(tween.target, tween.property, tween._tweenType);
            decomposeRawValue(ogValue, decomposedOriginalValue);
            tween._fromNumbers = cloneArray(decomposedOriginalValue.d);
            tween._fromNumber = decomposedOriginalValue.n;
            if (tween._func) {
                decomposeRawValue(tween._func(), toTargetObject);
                tween._toNumbers = cloneArray(toTargetObject.d);
                tween._strings = cloneArray(toTargetObject.s);
                tween._toNumber = toTargetObject.n;
            }
        });
        return this;
    }
    /**
   * Cancel the animation and revert all the values affected by this animation to their original state
   * @return {this}
   */ revert() {
        super.revert();
        return cleanInlineStyles(this);
    }
    /**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */ then(callback) {
        return super.then(callback);
    }
}
/**
 * @param {TargetsParam} targets
 * @param {AnimationParams} parameters
 * @return {JSAnimation}
 */ const animate = (targets, parameters)=>new JSAnimation(targets, parameters, null, 0, false).init();
/**
 * Converts an easing function into a valid CSS linear() timing function string
 * @param {EasingFunction} fn
 * @param {number} [samples=100]
 * @returns {string} CSS linear() timing function
 */ const easingToLinear = (fn, samples = 100)=>{
    const points = [];
    for(let i = 0; i <= samples; i++)points.push(fn(i / samples));
    return `linear(${points.join(', ')})`;
};
const WAAPIEasesLookups = {
    in: 'ease-in',
    out: 'ease-out',
    inOut: 'ease-in-out'
};
const WAAPIeases = /*#__PURE__*/ (()=>{
    const list = {};
    for(let type in easeTypes)list[type] = (a)=>easeTypes[type](easeInPower(a));
    return /** @type {Record<String, EasingFunction>} */ list;
})();
/**
 * @param  {EasingParam} ease
 * @return {String}
 */ const parseWAAPIEasing = (ease)=>{
    let parsedEase = WAAPIEasesLookups[ease];
    if (parsedEase) return parsedEase;
    parsedEase = 'linear';
    if (isStr(ease)) {
        if (stringStartsWith(ease, 'linear') || stringStartsWith(ease, 'cubic-') || stringStartsWith(ease, 'steps') || stringStartsWith(ease, 'ease')) parsedEase = ease;
        else if (stringStartsWith(ease, 'cubicB')) parsedEase = toLowerCase(ease);
        else {
            const parsed = parseEaseString(ease, WAAPIeases, WAAPIEasesLookups);
            if (isFnc(parsed)) parsedEase = parsed === none ? 'linear' : easingToLinear(parsed);
        }
    } else if (isFnc(ease)) {
        const easing = easingToLinear(ease);
        if (easing) parsedEase = easing;
    } else if (/** @type {Spring} */ ease.ease) parsedEase = easingToLinear(/** @type {Spring} */ ease.ease);
    return WAAPIEasesLookups[ease] = parsedEase;
};
/**
 * @typedef {String|Number|Array<String>|Array<Number>} WAAPITweenValue
 */ /**
 * @callback WAAPIFunctionvalue
 * @param {DOMTarget} target - The animated target
 * @param {Number} index - The target index
 * @param {Number} length - The total number of animated targets
 * @return {WAAPITweenValue}
 */ /**
 * @typedef {WAAPITweenValue|WAAPIFunctionvalue|Array<String|Number|WAAPIFunctionvalue>} WAAPIKeyframeValue
 */ /**
 * @typedef {(animation: WAAPIAnimation) => void} WAAPICallback
 */ /**
 * @typedef {Object} WAAPITweenOptions
 * @property {WAAPIKeyframeValue} [to]
 * @property {WAAPIKeyframeValue} [from]
 * @property {Number|WAAPIFunctionvalue} [duration]
 * @property {Number|WAAPIFunctionvalue} [delay]
 * @property {EasingParam} [ease]
 * @property {CompositeOperation} [composition]
 */ /**
 * @typedef {Object} WAAPIAnimationOptions
 * @property {Number|Boolean} [loop]
 * @property {Boolean} [Reversed]
 * @property {Boolean} [Alternate]
 * @property {Boolean|ScrollObserver} [autoplay]
 * @property {Number} [playbackRate]
 * @property {Number|WAAPIFunctionvalue} [duration]
 * @property {Number|WAAPIFunctionvalue} [delay]
 * @property {EasingParam} [ease]
 * @property {CompositeOperation} [composition]
 * @property {WAAPICallback} [onComplete]
 */ /**
 * @typedef {Record<String, WAAPIKeyframeValue | WAAPIAnimationOptions | Boolean | ScrollObserver | WAAPICallback | EasingParam | WAAPITweenOptions> & WAAPIAnimationOptions} WAAPIAnimationParams
 */ const transformsShorthands = [
    'x',
    'y',
    'z'
];
const commonDefaultPXProperties = [
    'perspective',
    'width',
    'height',
    'margin',
    'padding',
    'top',
    'right',
    'bottom',
    'left',
    'borderWidth',
    'fontSize',
    'borderRadius',
    ...transformsShorthands
];
const validIndividualTransforms = [
    ...transformsShorthands,
    ...validTransforms.filter((t)=>[
            'X',
            'Y',
            'Z'
        ].some((axis)=>t.endsWith(axis)))
];
// Setting it to true in case CSS.registerProperty is not supported will automatically skip the registration and fallback to no animation
let transformsPropertiesRegistered = isBrowser && (isUnd(CSS) || !Object.hasOwnProperty.call(CSS, 'registerProperty'));
const registerTransformsProperties = ()=>{
    validTransforms.forEach((t)=>{
        const isSkew = stringStartsWith(t, 'skew');
        const isScale = stringStartsWith(t, 'scale');
        const isRotate = stringStartsWith(t, 'rotate');
        const isTranslate = stringStartsWith(t, 'translate');
        const isAngle = isRotate || isSkew;
        const syntax = isAngle ? '<angle>' : isScale ? "<number>" : isTranslate ? "<length-percentage>" : "*";
        CSS.registerProperty({
            name: '--' + t,
            syntax,
            inherits: false,
            initialValue: isTranslate ? '0px' : isAngle ? '0deg' : isScale ? '1' : '0'
        });
    });
    transformsPropertiesRegistered = true;
};
const WAAPIAnimationsLookups = {
    _head: null,
    _tail: null
};
/**
 * @param {DOMTarget} $el
 * @param {String} [property]
 * @param {WAAPIAnimation} [parent]
 */ const removeWAAPIAnimation = ($el, property, parent)=>{
    let nextLookup = WAAPIAnimationsLookups._head;
    while(nextLookup){
        const next = nextLookup._next;
        const matchTarget = nextLookup.$el === $el;
        const matchProperty = !property || nextLookup.property === property;
        const matchParent = !parent || nextLookup.parent === parent;
        if (matchTarget && matchProperty && matchParent) {
            const anim = nextLookup.animation;
            try {
                anim.commitStyles();
            } catch  {}
            anim.cancel();
            removeChild(WAAPIAnimationsLookups, nextLookup);
            const lookupParent = nextLookup.parent;
            if (lookupParent) {
                lookupParent._completed++;
                if (lookupParent.animations.length === lookupParent._completed) {
                    lookupParent.completed = true;
                    if (!lookupParent.muteCallbacks) {
                        lookupParent.paused = true;
                        lookupParent.onComplete(lookupParent);
                        lookupParent._resolve(lookupParent);
                    }
                }
            }
        }
        nextLookup = next;
    }
};
/**
 * @param {WAAPIAnimation} parent
 * @param {DOMTarget} $el
 * @param {String} property
 * @param {PropertyIndexedKeyframes} keyframes
 * @param {KeyframeAnimationOptions} params
 * @retun {Animation}
 */ const addWAAPIAnimation = (parent, $el, property, keyframes, params)=>{
    const animation = $el.animate(keyframes, params);
    const animTotalDuration = params.delay + +params.duration * params.iterations;
    animation.playbackRate = parent._speed;
    if (parent.paused) animation.pause();
    if (parent.duration < animTotalDuration) {
        parent.duration = animTotalDuration;
        parent.controlAnimation = animation;
    }
    parent.animations.push(animation);
    removeWAAPIAnimation($el, property);
    addChild(WAAPIAnimationsLookups, {
        parent,
        animation,
        $el,
        property,
        _next: null,
        _prev: null
    });
    const handleRemove = ()=>{
        removeWAAPIAnimation($el, property, parent);
    };
    animation.onremove = handleRemove;
    animation.onfinish = handleRemove;
    return animation;
};
/**
 * @param  {String} propName
 * @param  {WAAPIKeyframeValue} value
 * @param  {DOMTarget} $el
 * @param  {Number} i
 * @param  {Number} targetsLength
 * @return {String}
 */ const normalizeTweenValue = (propName, value, $el, i, targetsLength)=>{
    let v = getFunctionValue(/** @type {any} */ value, $el, i, targetsLength);
    if (!isNum(v)) return v;
    if (commonDefaultPXProperties.includes(propName) || stringStartsWith(propName, 'translate')) return `${v}px`;
    if (stringStartsWith(propName, 'rotate') || stringStartsWith(propName, 'skew')) return `${v}deg`;
    return `${v}`;
};
/**
 * @param  {DOMTarget} $el
 * @param  {String} propName
 * @param  {WAAPIKeyframeValue} from
 * @param  {WAAPIKeyframeValue} to
 * @param  {Number} i
 * @param  {Number} targetsLength
 * @return {WAAPITweenValue}
 */ const parseIndividualTweenValue = ($el, propName, from, to, i, targetsLength)=>{
    /** @type {WAAPITweenValue} */ let tweenValue = '0';
    const computedTo = !isUnd(to) ? normalizeTweenValue(propName, to, $el, i, targetsLength) : getComputedStyle($el)[propName];
    if (!isUnd(from)) {
        const computedFrom = normalizeTweenValue(propName, from, $el, i, targetsLength);
        tweenValue = [
            computedFrom,
            computedTo
        ];
    } else tweenValue = isArr(to) ? to.map((/** @type {any} */ v)=>normalizeTweenValue(propName, v, $el, i, targetsLength)) : computedTo;
    return tweenValue;
};
class WAAPIAnimation {
    /**
 * @param {DOMTargetsParam} targets
 * @param {WAAPIAnimationParams} params
 */ constructor(targets, params){
        if (globals.scope) globals.scope.revertibles.push(this);
        if (!transformsPropertiesRegistered) registerTransformsProperties();
        const parsedTargets = registerTargets(targets);
        const targetsLength = parsedTargets.length;
        if (!targetsLength) console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`);
        const ease = setValue(params.ease, parseWAAPIEasing(globals.defaults.ease));
        const spring = /** @type {Spring} */ ease.ease && ease;
        const autoplay = setValue(params.autoplay, globals.defaults.autoplay);
        const scroll = autoplay && /** @type {ScrollObserver} */ autoplay.link ? autoplay : false;
        const alternate = params.alternate && /** @type {Boolean} */ params.alternate === true;
        const reversed = params.reversed && /** @type {Boolean} */ params.reversed === true;
        const loop = setValue(params.loop, globals.defaults.loop);
        const iterations = /** @type {Number} */ loop === true || loop === Infinity ? Infinity : isNum(loop) ? loop + 1 : 1;
        /** @type {PlaybackDirection} */ const direction = alternate ? reversed ? 'alternate-reverse' : 'alternate' : reversed ? 'reverse' : 'normal';
        /** @type {FillMode} */ const fill = 'forwards';
        /** @type {String} */ const easing = parseWAAPIEasing(ease);
        const timeScale = globals.timeScale === 1 ? 1 : K;
        /** @type {DOMTargetsArray}] */ this.targets = parsedTargets;
        /** @type {Array<globalThis.Animation>}] */ this.animations = [];
        /** @type {globalThis.Animation}] */ this.controlAnimation = null;
        /** @type {Callback<this>} */ this.onComplete = params.onComplete || noop;
        /** @type {Number} */ this.duration = 0;
        /** @type {Boolean} */ this.muteCallbacks = false;
        /** @type {Boolean} */ this.completed = false;
        /** @type {Boolean} */ this.paused = !autoplay || scroll !== false;
        /** @type {Boolean} */ this.reversed = reversed;
        /** @type {Boolean|ScrollObserver} */ this.autoplay = autoplay;
        /** @type {Number} */ this._speed = setValue(params.playbackRate, globals.defaults.playbackRate);
        /** @type {Function} */ this._resolve = noop; // Used by .then()
        /** @type {Number} */ this._completed = 0;
        /** @type {Array<Object>}] */ this._inlineStyles = parsedTargets.map(($el)=>$el.getAttribute('style'));
        parsedTargets.forEach(($el, i)=>{
            const cachedTransforms = $el[transformsSymbol];
            const hasIndividualTransforms = validIndividualTransforms.some((t)=>params.hasOwnProperty(t));
            /** @type {Number} */ const duration = (spring ? /** @type {Spring} */ spring.duration : getFunctionValue(setValue(params.duration, globals.defaults.duration), $el, i, targetsLength)) * timeScale;
            /** @type {Number} */ const delay = getFunctionValue(setValue(params.delay, globals.defaults.delay), $el, i, targetsLength) * timeScale;
            /** @type {CompositeOperation} */ const composite = /** @type {CompositeOperation} */ setValue(params.composition, 'replace');
            for(let name in params){
                if (!isKey(name)) continue;
                /** @type {PropertyIndexedKeyframes} */ const keyframes = {};
                /** @type {KeyframeAnimationOptions} */ const tweenParams = {
                    iterations,
                    direction,
                    fill,
                    easing,
                    duration,
                    delay,
                    composite
                };
                const propertyValue = params[name];
                const individualTransformProperty = hasIndividualTransforms ? validTransforms.includes(name) ? name : shortTransforms.get(name) : false;
                let parsedPropertyValue;
                if (isObj(propertyValue)) {
                    const tweenOptions = /** @type {WAAPITweenOptions} */ propertyValue;
                    const tweenOptionsEase = setValue(tweenOptions.ease, ease);
                    const tweenOptionsSpring = /** @type {Spring} */ tweenOptionsEase.ease && tweenOptionsEase;
                    const to = /** @type {WAAPITweenOptions} */ tweenOptions.to;
                    const from = /** @type {WAAPITweenOptions} */ tweenOptions.from;
                    /** @type {Number} */ tweenParams.duration = (tweenOptionsSpring ? /** @type {Spring} */ tweenOptionsSpring.duration : getFunctionValue(setValue(tweenOptions.duration, duration), $el, i, targetsLength)) * timeScale;
                    /** @type {Number} */ tweenParams.delay = getFunctionValue(setValue(tweenOptions.delay, delay), $el, i, targetsLength) * timeScale;
                    /** @type {CompositeOperation} */ tweenParams.composite = /** @type {CompositeOperation} */ setValue(tweenOptions.composition, composite);
                    /** @type {String} */ tweenParams.easing = parseWAAPIEasing(tweenOptionsEase);
                    parsedPropertyValue = parseIndividualTweenValue($el, name, from, to, i, targetsLength);
                    if (individualTransformProperty) {
                        keyframes[`--${individualTransformProperty}`] = parsedPropertyValue;
                        cachedTransforms[individualTransformProperty] = parsedPropertyValue;
                    } else keyframes[name] = parseIndividualTweenValue($el, name, from, to, i, targetsLength);
                    addWAAPIAnimation(this, $el, name, keyframes, tweenParams);
                    if (!isUnd(from)) {
                        if (!individualTransformProperty) $el.style[name] = keyframes[name][0];
                        else {
                            const key = `--${individualTransformProperty}`;
                            $el.style.setProperty(key, keyframes[key][0]);
                        }
                    }
                } else {
                    parsedPropertyValue = isArr(propertyValue) ? propertyValue.map((/** @type {any} */ v)=>normalizeTweenValue(name, v, $el, i, targetsLength)) : normalizeTweenValue(name, /** @type {any} */ propertyValue, $el, i, targetsLength);
                    if (individualTransformProperty) {
                        keyframes[`--${individualTransformProperty}`] = parsedPropertyValue;
                        cachedTransforms[individualTransformProperty] = parsedPropertyValue;
                    } else keyframes[name] = parsedPropertyValue;
                    addWAAPIAnimation(this, $el, name, keyframes, tweenParams);
                }
            }
            if (hasIndividualTransforms) {
                let transforms = emptyString;
                for(let t in cachedTransforms)transforms += `${transformsFragmentStrings[t]}var(--${t})) `;
                $el.style.transform = transforms;
            }
        });
        if (scroll) /** @type {ScrollObserver} */ this.autoplay.link(this);
    }
    /**
   * @callback forEachCallback
   * @param {globalThis.Animation} animation
   */ /**
   * @param  {forEachCallback|String} callback
   * @return {this}
   */ forEach(callback) {
        const cb = isStr(callback) ? (a)=>a[callback]() : callback;
        this.animations.forEach(cb);
        return this;
    }
    get speed() {
        return this._speed;
    }
    /** @param {Number} speed */ set speed(speed) {
        this._speed = +speed;
        this.forEach((anim)=>anim.playbackRate = speed);
    }
    get currentTime() {
        const controlAnimation = this.controlAnimation;
        const timeScale = globals.timeScale;
        return this.completed ? this.duration : controlAnimation ? +controlAnimation.currentTime * (timeScale === 1 ? 1 : timeScale) : 0;
    }
    /** @param {Number} time */ set currentTime(time) {
        const t = time * (globals.timeScale === 1 ? 1 : K);
        this.forEach((anim)=>anim.currentTime = t);
    }
    get progress() {
        return this.currentTime / this.duration;
    }
    /** @param {Number} progress */ set progress(progress) {
        this.forEach((anim)=>anim.currentTime = progress * this.duration || 0);
    }
    resume() {
        if (!this.paused) return this;
        this.paused = false;
        // TODO: Store the current time, and seek back to the last position
        return this.forEach('play');
    }
    pause() {
        if (this.paused) return this;
        this.paused = true;
        return this.forEach('pause');
    }
    alternate() {
        this.reversed = !this.reversed;
        this.forEach('reverse');
        if (this.paused) this.forEach('pause');
        return this;
    }
    play() {
        if (this.reversed) this.alternate();
        return this.resume();
    }
    reverse() {
        if (!this.reversed) this.alternate();
        return this.resume();
    }
    /**
  * @param {Number} time
  * @param {Boolean} muteCallbacks
  */ seek(time, muteCallbacks = false) {
        if (muteCallbacks) this.muteCallbacks = true;
        if (time < this.duration) this.completed = false;
        this.currentTime = time;
        this.muteCallbacks = false;
        if (this.paused) this.pause();
        return this;
    }
    restart() {
        this.completed = false;
        return this.seek(0, true).resume();
    }
    commitStyles() {
        return this.forEach('commitStyles');
    }
    complete() {
        return this.seek(this.duration);
    }
    cancel() {
        this.forEach('cancel');
        return this.pause();
    }
    revert() {
        this.cancel();
        this.targets.forEach(($el, i)=>$el.setAttribute('style', this._inlineStyles[i]));
        return this;
    }
    /**
   * @param  {WAAPICallback} [callback]
   * @return {Promise}
   */ then(callback = noop) {
        const then = this.then;
        const onResolve = ()=>{
            this.then = null;
            callback(this);
            this.then = then;
            this._resolve = noop;
        };
        return new Promise((r)=>{
            this._resolve = ()=>r(onResolve());
            if (this.completed) this._resolve();
            return this;
        });
    }
}
const waapi = {
    /**
 * @param {DOMTargetsParam} targets
 * @param {WAAPIAnimationParams} params
 * @return {WAAPIAnimation}
 */ animate: (targets, params)=>new WAAPIAnimation(targets, params),
    convertEase: easingToLinear
};
/**
 * @param  {Callback<Timer>} [callback]
 * @return {Timer}
 */ const sync = (callback = noop)=>{
    return new Timer({
        duration: 1 * globals.timeScale,
        onComplete: callback
    }, null, 0).resume();
};
/**
 * @overload
 * @param  {DOMTargetSelector} targetSelector
 * @param  {String}            propName
 * @return {String}
 *
 * @overload
 * @param  {JSTargetsParam} targetSelector
 * @param  {String}         propName
 * @return {Number|String}
 *
 * @overload
 * @param  {DOMTargetsParam} targetSelector
 * @param  {String}          propName
 * @param  {String}          unit
 * @return {String}
 *
 * @overload
 * @param  {TargetsParam} targetSelector
 * @param  {String}       propName
 * @param  {Boolean}      unit
 * @return {Number}
 *
 * @param  {TargetsParam}   targetSelector
 * @param  {String}         propName
 * @param  {String|Boolean} [unit]
 */ function getTargetValue(targetSelector, propName, unit) {
    const targets = registerTargets(targetSelector);
    if (!targets.length) return;
    const [target] = targets;
    const tweenType = getTweenType(target, propName);
    const normalizePropName = sanitizePropertyName(propName, target, tweenType);
    let originalValue = getOriginalAnimatableValue(target, normalizePropName);
    if (isUnd(unit)) return originalValue;
    else {
        decomposeRawValue(originalValue, decomposedOriginalValue);
        if (decomposedOriginalValue.t === valueTypes.NUMBER || decomposedOriginalValue.t === valueTypes.UNIT) {
            if (unit === false) return decomposedOriginalValue.n;
            else {
                const convertedValue = convertValueUnit(/** @type {DOMTarget} */ target, decomposedOriginalValue, /** @type {String} */ unit, false);
                return `${round(convertedValue.n, globals.precision)}${convertedValue.u}`;
            }
        }
    }
}
/**
 * @param  {TargetsParam}    targets
 * @param  {AnimationParams} parameters
 * @return {JSAnimation}
 */ const setTargetValues = (targets, parameters)=>{
    if (isUnd(parameters)) return;
    parameters.duration = minValue;
    // Do not overrides currently active tweens by default
    parameters.composition = setValue(parameters.composition, compositionTypes.none);
    // Skip init() and force rendering by playing the animation
    return new JSAnimation(targets, parameters, null, 0, true).resume();
};
/**
 * @param  {TargetsArray} targetsArray
 * @param  {JSAnimation}    animation
 * @param  {String}       [propertyName]
 * @return {Boolean}
 */ const removeTargetsFromAnimation = (targetsArray, animation, propertyName)=>{
    let tweensMatchesTargets = false;
    forEachChildren(animation, (/**@type {Tween} */ tween)=>{
        const tweenTarget = tween.target;
        if (targetsArray.includes(tweenTarget)) {
            const tweenName = tween.property;
            const tweenType = tween._tweenType;
            const normalizePropName = sanitizePropertyName(propertyName, tweenTarget, tweenType);
            if (!normalizePropName || normalizePropName && normalizePropName === tweenName) {
                // Make sure to flag the previous CSS transform tween to renderTransform
                if (tween.parent._tail === tween && tween._tweenType === tweenTypes.TRANSFORM && tween._prev && tween._prev._tweenType === tweenTypes.TRANSFORM) tween._prev._renderTransforms = 1;
                // Removes the tween from the selected animation
                removeChild(animation, tween);
                // Detach the tween from its siblings to make sure blended tweens are correctlly removed
                removeTweenSliblings(tween);
                tweensMatchesTargets = true;
            }
        }
    }, true);
    return tweensMatchesTargets;
};
/**
 * @param  {TargetsParam} targets
 * @param  {Renderable|WAAPIAnimation} [renderable]
 * @param  {String}                    [propertyName]
 * @return {TargetsArray}
 */ const remove = (targets, renderable, propertyName)=>{
    const targetsArray = parseTargets(targets);
    const parent = /** @type {Renderable|typeof engine} **/ renderable ? renderable : engine;
    const waapiAnimation = renderable && /** @type {WAAPIAnimation} */ renderable.controlAnimation && /** @type {WAAPIAnimation} */ renderable;
    for(let i = 0, l = targetsArray.length; i < l; i++){
        const $el = /** @type {DOMTarget}  */ targetsArray[i];
        removeWAAPIAnimation($el, propertyName, waapiAnimation);
    }
    let removeMatches;
    if (parent._hasChildren) {
        let iterationDuration = 0;
        forEachChildren(parent, (/** @type {Renderable} */ child)=>{
            if (!child._hasChildren) {
                removeMatches = removeTargetsFromAnimation(targetsArray, /** @type {JSAnimation} */ child, propertyName);
                // Remove the child from its parent if no tweens and no children left after the removal
                if (removeMatches && !child._head) {
                    child.cancel();
                    removeChild(parent, child);
                } else {
                    // Calculate the new iterationDuration value to handle onComplete with last child in render()
                    const childTLOffset = child._offset + child._delay;
                    const childDur = childTLOffset + child.duration;
                    if (childDur > iterationDuration) iterationDuration = childDur;
                }
            }
            // Make sure to also remove engine's children targets
            // NOTE: Avoid recursion?
            if (child._head) remove(targets, child, propertyName);
            else child._hasChildren = false;
        }, true);
        // Update iterationDuration value to handle onComplete with last child in render()
        if (!isUnd(/** @type {Renderable} */ parent.iterationDuration)) /** @type {Renderable} */ parent.iterationDuration = iterationDuration;
    } else removeMatches = removeTargetsFromAnimation(targetsArray, /** @type {JSAnimation} */ parent, propertyName);
    if (removeMatches && !parent._head) {
        parent._hasChildren = false;
        // Cancel the parent if there are no tweens and no children left after the removal
        // We have to check if the .cancel() method exist to handle cases where the parent is the engine itself
        if (/** @type {Renderable} */ parent.cancel) /** @type {Renderable} */ parent.cancel();
    }
    return targetsArray;
};
/**
 * @param  {Number} min
 * @param  {Number} max
 * @param  {Number} [decimalLength]
 * @return {Number}
 */ const random = (min, max, decimalLength)=>{
    const m = 10 ** (decimalLength || 0);
    return floor((Math.random() * (max - min + 1 / m) + min) * m) / m;
};
/**
 * @param  {String|Array} items
 * @return {any}
 */ const randomPick = (items)=>items[random(0, items.length - 1)];
/**
 * Adapted from https://bost.ocks.org/mike/shuffle/
 * @param  {Array} items
 * @return {Array}
 */ const shuffle = (items)=>{
    let m = items.length, t, i;
    while(m){
        i = random(0, --m);
        t = items[m];
        items[m] = items[i];
        items[i] = t;
    }
    return items;
};
/**
 * @param  {Number|String} v
 * @param  {Number} decimalLength
 * @return {String}
 */ const roundPad = (v, decimalLength)=>(+v).toFixed(decimalLength);
/**
 * @param  {Number} v
 * @param  {Number} totalLength
 * @param  {String} padString
 * @return {String}
 */ const padStart = (v, totalLength, padString)=>`${v}`.padStart(totalLength, padString);
/**
 * @param  {Number} v
 * @param  {Number} totalLength
 * @param  {String} padString
 * @return {String}
 */ const padEnd = (v, totalLength, padString)=>`${v}`.padEnd(totalLength, padString);
/**
 * @param  {Number} v
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */ const wrap = (v, min, max)=>((v - min) % (max - min) + (max - min)) % (max - min) + min;
/**
 * @param  {Number} value
 * @param  {Number} inLow
 * @param  {Number} inHigh
 * @param  {Number} outLow
 * @param  {Number} outHigh
 * @return {Number}
 */ const mapRange = (value, inLow, inHigh, outLow, outHigh)=>outLow + (value - inLow) / (inHigh - inLow) * (outHigh - outLow);
/**
 * @param  {Number} degrees
 * @return {Number}
 */ const degToRad = (degrees)=>degrees * PI / 180;
/**
 * @param  {Number} radians
 * @return {Number}
 */ const radToDeg = (radians)=>radians * 180 / PI;
/**
 * https://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} amount
 * @param  {Renderable|Boolean} [renderable]
 * @return {Number}
 */ const lerp = (start, end, amount, renderable)=>{
    let dt = K / globals.defaults.frameRate;
    if (renderable !== false) {
        const ticker = /** @type Renderable */ renderable || engine._hasChildren && engine;
        if (ticker && ticker.deltaTime) dt = ticker.deltaTime;
    }
    const t = 1 - Math.exp(-amount * dt * .1);
    return !amount ? start : amount === 1 ? end : (1 - t) * start + t * end;
};
// Chain-able utilities
/**
 * @callback UtilityFunction
 * @param {...*} args
 * @return {Number|String}
 *
 * @param {UtilityFunction} fn
 * @param {Number} [last=0]
 * @return {function(...(Number|String)): function(Number|String): (Number|String)}
 */ const curry = (fn, last = 0)=>(...args)=>last ? (v)=>fn(...args, v) : (v)=>fn(v, ...args);
/**
 * @param {Function} fn
 * @return {function(...(Number|String))}
 */ const chain = (fn)=>{
    return (...args)=>{
        const result = fn(...args);
        return new Proxy(noop, {
            apply: (_, __, [v])=>result(v),
            get: (_, prop)=>chain(/**@param {...Number|String} nextArgs */ (...nextArgs)=>{
                    const nextResult = utils[prop](...nextArgs);
                    return (/**@type {Number|String} */ v)=>nextResult(result(v));
                })
        });
    };
};
/**
 * @param {UtilityFunction} fn
 * @param {Number} [right]
 * @return {function(...(Number|String)): UtilityFunction}
 */ const makeChainable = (fn, right = 0)=>(...args)=>(args.length < fn.length ? chain(curry(fn, right)) : fn)(...args);
/**
 * @callback ChainedUtilsResult
 * @param {Number} value
 * @return {Number}
 *
 * @typedef {Object} ChainableUtils
 * @property {ChainedClamp} clamp
 * @property {ChainedRound} round
 * @property {ChainedSnap} snap
 * @property {ChainedWrap} wrap
 * @property {ChainedInterpolate} interpolate
 * @property {ChainedMapRange} mapRange
 * @property {ChainedRoundPad} roundPad
 * @property {ChainedPadStart} padStart
 * @property {ChainedPadEnd} padEnd
 * @property {ChainedDegToRad} degToRad
 * @property {ChainedRadToDeg} radToDeg
 *
 * @typedef {ChainableUtils & ChainedUtilsResult} ChainableUtil
 *
 * @callback ChainedClamp
 * @param {Number} min
 * @param {Number} max
 * @return {ChainableUtil}
 *
 * @callback ChainedRound
 * @param {Number} decimalLength
 * @return {ChainableUtil}
 *
 * @callback ChainedSnap
 * @param {Number} increment
 * @return {ChainableUtil}
 *
 * @callback ChainedWrap
 * @param {Number} min
 * @param {Number} max
 * @return {ChainableUtil}
 *
 * @callback ChainedInterpolate
 * @param {Number} start
 * @param {Number} end
 * @return {ChainableUtil}
 *
 * @callback ChainedMapRange
 * @param {Number} inLow
 * @param {Number} inHigh
 * @param {Number} outLow
 * @param {Number} outHigh
 * @return {ChainableUtil}
 *
 * @callback ChainedRoundPad
 * @param {Number} decimalLength
 * @return {ChainableUtil}
 *
 * @callback ChainedPadStart
 * @param {Number} totalLength
 * @param {String} padString
 * @return {ChainableUtil}
 *
 * @callback ChainedPadEnd
 * @param {Number} totalLength
 * @param {String} padString
 * @return {ChainableUtil}
 *
 * @callback ChainedDegToRad
 * @return {ChainableUtil}
 *
 * @callback ChainedRadToDeg
 * @return {ChainableUtil}
 */ const utils = {
    $: registerTargets,
    get: getTargetValue,
    set: setTargetValues,
    remove,
    cleanInlineStyles,
    random,
    randomPick,
    shuffle,
    lerp,
    sync,
    clamp: /** @type {typeof clamp & ChainedClamp} */ makeChainable(clamp),
    round: /** @type {typeof round & ChainedRound} */ makeChainable(round),
    snap: /** @type {typeof snap & ChainedSnap} */ makeChainable(snap),
    wrap: /** @type {typeof wrap & ChainedWrap} */ makeChainable(wrap),
    interpolate: /** @type {typeof interpolate & ChainedInterpolate} */ makeChainable(interpolate, 1),
    mapRange: /** @type {typeof mapRange & ChainedMapRange} */ makeChainable(mapRange),
    roundPad: /** @type {typeof roundPad & ChainedRoundPad} */ makeChainable(roundPad),
    padStart: /** @type {typeof padStart & ChainedPadStart} */ makeChainable(padStart),
    padEnd: /** @type {typeof padEnd & ChainedPadEnd} */ makeChainable(padEnd),
    degToRad: /** @type {typeof degToRad & ChainedDegToRad} */ makeChainable(degToRad),
    radToDeg: /** @type {typeof radToDeg & ChainedRadToDeg} */ makeChainable(radToDeg)
};
/**
 * @typedef {Number|String|Function} TimePosition
 */ /**
 * Timeline's children offsets positions parser
 * @param  {Timeline} timeline
 * @param  {String} timePosition
 * @return {Number}
 */ const getPrevChildOffset = (timeline, timePosition)=>{
    if (stringStartsWith(timePosition, '<')) {
        const goToPrevAnimationOffset = timePosition[1] === '<';
        const prevAnimation = /** @type {Tickable} */ timeline._tail;
        const prevOffset = prevAnimation ? prevAnimation._offset + prevAnimation._delay : 0;
        return goToPrevAnimationOffset ? prevOffset : prevOffset + prevAnimation.duration;
    }
};
/**
 * @param  {Timeline} timeline
 * @param  {TimePosition} [timePosition]
 * @return {Number}
 */ const parseTimelinePosition = (timeline, timePosition)=>{
    let tlDuration = timeline.iterationDuration;
    if (tlDuration === minValue) tlDuration = 0;
    if (isUnd(timePosition)) return tlDuration;
    if (isNum(+timePosition)) return +timePosition;
    const timePosStr = /** @type {String} */ timePosition;
    const tlLabels = timeline ? timeline.labels : null;
    const hasLabels = !isNil(tlLabels);
    const prevOffset = getPrevChildOffset(timeline, timePosStr);
    const hasSibling = !isUnd(prevOffset);
    const matchedRelativeOperator = relativeValuesExecRgx.exec(timePosStr);
    if (matchedRelativeOperator) {
        const fullOperator = matchedRelativeOperator[0];
        const split = timePosStr.split(fullOperator);
        const labelOffset = hasLabels && split[0] ? tlLabels[split[0]] : tlDuration;
        const parsedOffset = hasSibling ? prevOffset : hasLabels ? labelOffset : tlDuration;
        const parsedNumericalOffset = +split[1];
        return getRelativeValue(parsedOffset, parsedNumericalOffset, fullOperator[0]);
    } else return hasSibling ? prevOffset : hasLabels ? !isUnd(tlLabels[timePosStr]) ? tlLabels[timePosStr] : tlDuration : tlDuration;
};
/**
 * @param {Timeline} tl
 * @return {Number}
 */ function getTimelineTotalDuration(tl) {
    return clampInfinity((tl.iterationDuration + tl._loopDelay) * tl.iterationCount - tl._loopDelay) || minValue;
}
/**
 * @overload
 * @param  {TimerParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @return {Timeline}
 *
 * @overload
 * @param  {AnimationParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @param  {TargetsParam} targets
 * @param  {Number} [index]
 * @param  {Number} [length]
 * @return {Timeline}
 *
 * @param  {TimerParams|AnimationParams} childParams
 * @param  {Timeline} tl
 * @param  {Number} timePosition
 * @param  {TargetsParam} [targets]
 * @param  {Number} [index]
 * @param  {Number} [length]
 */ function addTlChild(childParams, tl, timePosition, targets, index, length) {
    const isSetter = isNum(childParams.duration) && /** @type {Number} */ childParams.duration <= minValue;
    // Offset the tl position with -minValue for 0 duration animations or .set() calls in order to align their end value with the defined position
    const adjustedPosition = isSetter ? timePosition - minValue : timePosition;
    tick(tl, adjustedPosition, 1, 1, tickModes.AUTO);
    const tlChild = targets ? new JSAnimation(targets, /** @type {AnimationParams} */ childParams, tl, adjustedPosition, false, index, length) : new Timer(/** @type {TimerParams} */ childParams, tl, adjustedPosition);
    tlChild.init(1);
    // TODO: Might be better to insert at a position relative to startTime?
    addChild(tl, tlChild);
    forEachChildren(tl, (/** @type {Renderable} */ child)=>{
        const childTLOffset = child._offset + child._delay;
        const childDur = childTLOffset + child.duration;
        if (childDur > tl.iterationDuration) tl.iterationDuration = childDur;
    });
    tl.duration = getTimelineTotalDuration(tl);
    return tl;
}
class Timeline extends Timer {
    /**
   * @param {TimelineParams} [parameters]
   */ constructor(parameters = {}){
        super(/** @type {TimerParams&TimelineParams} */ parameters, null, 0);
        /** @type {Number} */ this.duration = 0; // TL duration starts at 0 and grows when adding children
        /** @type {Record<String, Number>} */ this.labels = {};
        const defaultsParams = parameters.defaults;
        const globalDefaults = globals.defaults;
        /** @type {DefaultsParams} */ this.defaults = defaultsParams ? mergeObjects(defaultsParams, globalDefaults) : globalDefaults;
        /** @type {Callback<this>} */ this.onRender = parameters.onRender || globalDefaults.onRender;
        const tlPlaybackEase = setValue(parameters.playbackEase, globalDefaults.playbackEase);
        this._ease = tlPlaybackEase ? parseEasings(tlPlaybackEase) : null;
        /** @type {Number} */ this.iterationDuration = 0;
    }
    /**
   * @overload
   * @param {TargetsParam} a1
   * @param {AnimationParams} a2
   * @param {TimePosition} [a3]
   * @return {this}
   *
   * @overload
   * @param {TimerParams} a1
   * @param {TimePosition} [a2]
   * @return {this}
   *
   * @param {TargetsParam|TimerParams} a1
   * @param {AnimationParams|TimePosition} a2
   * @param {TimePosition} [a3]
   */ add(a1, a2, a3) {
        const isAnim = isObj(a2);
        const isTimer = isObj(a1);
        if (isAnim || isTimer) {
            this._hasChildren = true;
            if (isAnim) {
                const childParams = /** @type {AnimationParams} */ a2;
                // Check for function for children stagger positions
                if (isFnc(a3)) {
                    const staggeredPosition = /** @type {Function} */ a3;
                    const parsedTargetsArray = parseTargets(/** @type {TargetsParam} */ a1);
                    // Store initial duration before adding new children that will change the duration
                    const tlDuration = this.duration;
                    // Store initial _iterationDuration before adding new children that will change the duration
                    const tlIterationDuration = this.iterationDuration;
                    // Store the original id in order to add specific indexes to the new animations ids
                    const id = childParams.id;
                    let i = 0;
                    const parsedLength = parsedTargetsArray.length;
                    parsedTargetsArray.forEach((/** @type {Target} */ target)=>{
                        // Create a new parameter object for each staggered children
                        const staggeredChildParams = {
                            ...childParams
                        };
                        // Reset the duration of the timeline iteration before each stagger to prevent wrong start value calculation
                        this.duration = tlDuration;
                        this.iterationDuration = tlIterationDuration;
                        if (!isUnd(id)) staggeredChildParams.id = id + '-' + i;
                        addTlChild(staggeredChildParams, this, staggeredPosition(target, i, parsedLength, this), target, i, parsedLength);
                        i++;
                    });
                } else addTlChild(childParams, this, parseTimelinePosition(this, a3), /** @type {TargetsParam} */ a1);
            } else // It's a Timer
            addTlChild(/** @type TimerParams */ a1, this, parseTimelinePosition(this, /** @type TimePosition */ a2));
            return this.init(1); // 1 = internalRender
        }
    }
    /**
   * @overload
   * @param {Tickable} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @overload
   * @param {globalThis.Animation} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @overload
   * @param {WAAPIAnimation} [synced]
   * @param {TimePosition} [position]
   * @return {this}
   *
   * @param {Tickable|WAAPIAnimation|globalThis.Animation} [synced]
   * @param {TimePosition} [position]
   */ sync(synced, position) {
        if (isUnd(synced) || synced && isUnd(synced.pause)) return this;
        synced.pause();
        const duration = +(/** @type {globalThis.Animation} */ synced.effect ? /** @type {globalThis.Animation} */ synced.effect.getTiming().duration : /** @type {Tickable} */ synced.duration);
        return this.add(synced, {
            currentTime: [
                0,
                duration
            ],
            duration,
            ease: 'linear'
        }, position);
    }
    /**
   * @param  {TargetsParam} targets
   * @param  {AnimationParams} parameters
   * @param  {TimePosition} [position]
   * @return {this}
   */ set(targets, parameters, position) {
        if (isUnd(parameters)) return this;
        parameters.duration = minValue;
        parameters.composition = compositionTypes.replace;
        return this.add(targets, parameters, position);
    }
    /**
   * @param {Callback<Timer>} callback
   * @param {TimePosition} [position]
   * @return {this}
   */ call(callback, position) {
        if (isUnd(callback) || callback && !isFnc(callback)) return this;
        return this.add({
            duration: 0,
            onComplete: ()=>callback(this)
        }, position);
    }
    /**
   * @param {String} labelName
   * @param {TimePosition} [position]
   * @return {this}
   *
   */ label(labelName, position) {
        if (isUnd(labelName) || labelName && !isStr(labelName)) return this;
        this.labels[labelName] = parseTimelinePosition(this, /** @type TimePosition */ position);
        return this;
    }
    /**
   * @param  {TargetsParam} targets
   * @param  {String} [propertyName]
   * @return {this}
   */ remove(targets, propertyName) {
        remove(targets, this, propertyName);
        return this;
    }
    /**
   * @param  {Number} newDuration
   * @return {this}
   */ stretch(newDuration) {
        const currentDuration = this.duration;
        if (currentDuration === clampZero(newDuration)) return this;
        const timeScale = newDuration / currentDuration;
        const labels = this.labels;
        forEachChildren(this, (/** @type {JSAnimation} */ child)=>{
            child.stretch(child.duration * timeScale);
        });
        for(let labelName in labels)labels[labelName] *= timeScale;
        return super.stretch(newDuration);
    }
    /**
   * @return {this}
   */ refresh() {
        forEachChildren(this, (/** @type {JSAnimation} */ child)=>{
            if (child.refresh) child.refresh();
        });
        return this;
    }
    /**
   * @return {this}
   */ revert() {
        super.revert();
        forEachChildren(this, (/** @type {JSAnimation} */ child)=>child.revert, true);
        return cleanInlineStyles(this);
    }
    /**
   * @param  {Callback<this>} [callback]
   * @return {Promise}
   */ then(callback) {
        return super.then(callback);
    }
}
/**
 * @param {TimelineParams} [parameters]
 * @return {Timeline}
 */ const createTimeline = (parameters)=>new Timeline(parameters).init();
class Animatable {
    /**
   * @param {TargetsParam} targets
   * @param {AnimatableParams} parameters
   */ constructor(targets, parameters){
        if (globals.scope) globals.scope.revertibles.push(this);
        /** @type {AnimationParams} */ const globalParams = {};
        const properties = {};
        this.targets = [];
        this.animations = {};
        if (isUnd(targets) || isUnd(parameters)) return;
        for(let propName in parameters){
            const paramValue = parameters[propName];
            if (isKey(propName)) properties[propName] = paramValue;
            else globalParams[propName] = paramValue;
        }
        for(let propName in properties){
            const propValue = properties[propName];
            const isObjValue = isObj(propValue);
            /** @type {TweenParamsOptions} */ let propParams = {};
            let to = '+=0';
            if (isObjValue) {
                const unit = propValue.unit;
                if (isStr(unit)) to += unit;
            } else propParams.duration = propValue;
            propParams[propName] = isObjValue ? mergeObjects({
                to
            }, propValue) : to;
            const animParams = mergeObjects(globalParams, propParams);
            animParams.composition = compositionTypes.replace;
            animParams.autoplay = false;
            const animation = this.animations[propName] = new JSAnimation(targets, animParams, null, 0, false).init();
            if (!this.targets.length) this.targets.push(...animation.targets);
            /** @type {AnimatableProperty} */ this[propName] = (to, duration, ease)=>{
                const tween = /** @type {Tween} */ animation._head;
                if (isUnd(to) && tween) {
                    const numbers = tween._numbers;
                    if (numbers && numbers.length) return numbers;
                    else return tween._modifier(tween._number);
                } else {
                    forEachChildren(animation, (/** @type {Tween} */ tween)=>{
                        if (isArr(to)) {
                            for(let i = 0, l = /** @type {Array} */ to.length; i < l; i++)if (!isUnd(tween._numbers[i])) {
                                tween._fromNumbers[i] = /** @type {Number} */ tween._modifier(tween._numbers[i]);
                                tween._toNumbers[i] = to[i];
                            }
                        } else {
                            tween._fromNumber = /** @type {Number} */ tween._modifier(tween._number);
                            tween._toNumber = /** @type {Number} */ to;
                        }
                        if (!isUnd(ease)) tween._ease = parseEasings(ease);
                        tween._currentTime = 0;
                    });
                    if (!isUnd(duration)) animation.stretch(duration);
                    animation.reset(1).resume();
                    return this;
                }
            };
        }
    }
    revert() {
        for(let propName in this.animations){
            this[propName] = noop;
            this.animations[propName].revert();
        }
        this.animations = {};
        this.targets.length = 0;
        return this;
    }
}
/**
 * @param {TargetsParam} targets
 * @param {AnimatableParams} parameters
 * @return {AnimatableObject}
 */ const createAnimatable = (targets, parameters)=>/** @type {AnimatableObject} */ new Animatable(targets, parameters);
/*
 * Spring ease solver adapted from https://webkit.org/demos/spring/spring.js
 * Webkit Copyright © 2016 Apple Inc
 */ /**
 * @typedef {Object} SpringParams
 * @property {Number} [mass=1] - Mass, default 1
 * @property {Number} [stiffness=100] - Stiffness, default 100
 * @property {Number} [damping=10] - Damping, default 10
 * @property {Number} [velocity=0] - Initial velocity, default 0
 */ class Spring {
    /**
   * @param {SpringParams} [parameters]
   */ constructor(parameters = {}){
        this.timeStep = .02; // Interval fed to the solver to calculate duration
        this.restThreshold = .0005; // Values below this threshold are considered resting position
        this.restDuration = 200; // Duration in ms used to check if the spring is resting after reaching restThreshold
        this.maxDuration = 60000; // The maximum allowed spring duration in ms (default 1 min)
        this.maxRestSteps = this.restDuration / this.timeStep / K; // How many steps allowed after reaching restThreshold before stopping the duration calculation
        this.maxIterations = this.maxDuration / this.timeStep / K; // Calculate the maximum iterations allowed based on maxDuration
        this.m = clamp(setValue(parameters.mass, 1), 0, K);
        this.s = clamp(setValue(parameters.stiffness, 100), 1, K);
        this.d = clamp(setValue(parameters.damping, 10), .1, K);
        this.v = clamp(setValue(parameters.velocity, 0), -1000, K);
        this.w0 = 0;
        this.zeta = 0;
        this.wd = 0;
        this.b = 0;
        this.solverDuration = 0;
        this.duration = 0;
        this.compute();
        /** @type {EasingFunction} */ this.ease = (t)=>t === 0 || t === 1 ? t : this.solve(t * this.solverDuration);
    }
    /** @type {EasingFunction} */ solve(time) {
        const { zeta, w0, wd, b } = this;
        let t = time;
        if (zeta < 1) t = exp(-t * zeta * w0) * (1 * cos(wd * t) + b * sin(wd * t));
        else t = (1 + b * t) * exp(-t * w0);
        return 1 - t;
    }
    compute() {
        const { maxRestSteps, maxIterations, restThreshold, timeStep, m, d, s, v } = this;
        const w0 = this.w0 = clamp(sqrt(s / m), minValue, K);
        const zeta = this.zeta = d / (2 * sqrt(s * m));
        const wd = this.wd = zeta < 1 ? w0 * sqrt(1 - zeta * zeta) : 0;
        this.b = zeta < 1 ? (zeta * w0 + -v) / wd : -v + w0;
        let solverTime = 0;
        let restSteps = 0;
        let iterations = 0;
        while(restSteps < maxRestSteps && iterations < maxIterations){
            if (abs(1 - this.solve(solverTime)) < restThreshold) restSteps++;
            else restSteps = 0;
            this.solverDuration = solverTime;
            solverTime += timeStep;
            iterations++;
        }
        this.duration = round(this.solverDuration * K, 0) * globals.timeScale;
    }
    get mass() {
        return this.m;
    }
    set mass(v) {
        this.m = clamp(setValue(v, 1), 0, K);
        this.compute();
    }
    get stiffness() {
        return this.s;
    }
    set stiffness(v) {
        this.s = clamp(setValue(v, 100), 1, K);
        this.compute();
    }
    get damping() {
        return this.d;
    }
    set damping(v) {
        this.d = clamp(setValue(v, 10), .1, K);
        this.compute();
    }
    get velocity() {
        return this.v;
    }
    set velocity(v) {
        this.v = clamp(setValue(v, 0), -1000, K);
        this.compute();
    }
}
/**
 * @param {SpringParams} [parameters]
 * @returns {Spring}
 */ const createSpring = (parameters)=>new Spring(parameters);
/**
 * @param {Event} e
 */ const preventDefault = (e)=>{
    if (e.cancelable) e.preventDefault();
};
class DOMProxy {
    /** @param {Object} el */ constructor(el){
        this.el = el;
        this.zIndex = 0;
        this.parentElement = null;
        this.classList = {
            add: noop,
            remove: noop
        };
    }
    get x() {
        return this.el.x || 0;
    }
    set x(v) {
        this.el.x = v;
    }
    get y() {
        return this.el.y || 0;
    }
    set y(v) {
        this.el.y = v;
    }
    get width() {
        return this.el.width || 0;
    }
    set width(v) {
        this.el.width = v;
    }
    get height() {
        return this.el.height || 0;
    }
    set height(v) {
        this.el.height = v;
    }
    getBoundingClientRect() {
        return {
            top: this.y,
            right: this.x,
            bottom: this.y + this.height,
            left: this.x + this.width
        };
    }
}
class Transforms {
    /**
   * @param {DOMTarget|DOMProxy} $el
   */ constructor($el){
        this.$el = $el;
        this.inlineTransforms = [];
        this.point = new DOMPoint();
        this.inversedMatrix = this.getMatrix().inverse();
    }
    /**
   * @param {Number} x
   * @param {Number} y
   * @return {DOMPoint}
   */ normalizePoint(x, y) {
        this.point.x = x;
        this.point.y = y;
        return this.point.matrixTransform(this.inversedMatrix);
    }
    /**
   * @callback TraverseParentsCallback
   * @param {DOMTarget} $el
   * @param {Number} i
   */ /**
   * @param {TraverseParentsCallback} cb
   */ traverseUp(cb) {
        let $el = /** @type {DOMTarget|Document} */ this.$el.parentElement, i = 0;
        while($el && $el !== doc){
            cb(/** @type {DOMTarget} */ $el, i);
            $el = /** @type {DOMTarget} */ $el.parentElement;
            i++;
        }
    }
    getMatrix() {
        const matrix = new DOMMatrix();
        this.traverseUp(($el)=>{
            const transformValue = getComputedStyle($el).transform;
            if (transformValue) {
                const elMatrix = new DOMMatrix(transformValue);
                matrix.preMultiplySelf(elMatrix);
            }
        });
        return matrix;
    }
    remove() {
        this.traverseUp(($el, i)=>{
            this.inlineTransforms[i] = $el.style.transform;
            $el.style.transform = 'none';
        });
    }
    revert() {
        this.traverseUp(($el, i)=>{
            const ct = this.inlineTransforms[i];
            if (ct === '') $el.style.removeProperty('transform');
            else $el.style.transform = ct;
        });
    }
}
/**
 * @typedef {Object} DraggableCursorParams
 * @property {String} [onHover]
 * @property {String} [onGrab]
 */ /**
 * @template {Array<Number>|DOMTargetSelector|String|Number|Boolean|Function|DraggableCursorParams} T
 * @param {T | ((draggable: Draggable) => T)} value
 * @param {Draggable} draggable
 * @return {T}
 */ const parseDraggableFunctionParameter = (value, draggable)=>value && isFnc(value) ? /** @type {Function} */ value(draggable) : value;
let zIndex = 0;
/**
 * @typedef {Object} DraggableAxisParam
 * @property {String} [mapTo]
 * @property {TweenModifier} [modifier]
 * @property {TweenComposition} [composition]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [snap]
 */ /**
 * @typedef {Object} DraggableParams
 * @property {DOMTargetSelector} [trigger]
 * @property {DOMTargetSelector|Array<Number>|((draggable: Draggable) => DOMTargetSelector|Array<Number>)} [container]
 * @property {Boolean|DraggableAxisParam} [x]
 * @property {Boolean|DraggableAxisParam} [y]
 * @property {TweenModifier} [modifier]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [snap]
 * @property {Number|Array<Number>|((draggable: Draggable) => Number|Array<Number>)} [containerPadding]
 * @property {Number|((draggable: Draggable) => Number)} [containerFriction]
 * @property {Number|((draggable: Draggable) => Number)} [releaseContainerFriction]
 * @property {Number|((draggable: Draggable) => Number)} [dragSpeed]
 * @property {Number|((draggable: Draggable) => Number)} [scrollSpeed]
 * @property {Number|((draggable: Draggable) => Number)} [scrollThreshold]
 * @property {Number|((draggable: Draggable) => Number)} [minVelocity]
 * @property {Number|((draggable: Draggable) => Number)} [maxVelocity]
 * @property {Number|((draggable: Draggable) => Number)} [velocityMultiplier]
 * @property {Number} [releaseMass]
 * @property {Number} [releaseStiffness]
 * @property {Number} [releaseDamping]
 * @property {Boolean} [releaseDamping]
 * @property {EasingParam} [releaseEase]
 * @property {Boolean|DraggableCursorParams|((draggable: Draggable) => Boolean|DraggableCursorParams)} [cursor]
 * @property {Callback<Draggable>} [onGrab]
 * @property {Callback<Draggable>} [onDrag]
 * @property {Callback<Draggable>} [onRelease]
 * @property {Callback<Draggable>} [onUpdate]
 * @property {Callback<Draggable>} [onSettle]
 * @property {Callback<Draggable>} [onSnap]
 * @property {Callback<Draggable>} [onResize]
 * @property {Callback<Draggable>} [onAfterResize]
 */ class Draggable {
    /**
   * @param {TargetsParam} target
   * @param {DraggableParams} [parameters]
   */ constructor(target, parameters = {}){
        if (!target) return;
        if (globals.scope) globals.scope.revertibles.push(this);
        const paramX = parameters.x;
        const paramY = parameters.y;
        const trigger = parameters.trigger;
        const modifier = parameters.modifier;
        const ease = parameters.releaseEase;
        const customEase = ease && parseEasings(ease);
        const hasSpring = !isUnd(ease) && !isUnd(/** @type {Spring} */ ease.ease);
        const xProp = /** @type {String} */ isObj(paramX) && !isUnd(/** @type {Object} */ paramX.mapTo) ? /** @type {Object} */ paramX.mapTo : 'translateX';
        const yProp = /** @type {String} */ isObj(paramY) && !isUnd(/** @type {Object} */ paramY.mapTo) ? /** @type {Object} */ paramY.mapTo : 'translateY';
        const container = parseDraggableFunctionParameter(parameters.container, this);
        this.containerArray = isArr(container) ? container : null;
        this.$container = /** @type {HTMLElement} */ container && !this.containerArray ? parseTargets(/** @type {DOMTarget} */ container)[0] : doc.body;
        this.useWin = this.$container === doc.body;
        /** @type {Window | HTMLElement} */ this.$scrollContainer = this.useWin ? win : this.$container;
        this.$target = /** @type {HTMLElement} */ isObj(target) ? new DOMProxy(target) : parseTargets(target)[0];
        this.$trigger = /** @type {HTMLElement} */ parseTargets(trigger ? trigger : target)[0];
        this.fixed = getTargetValue(this.$target, 'position') === 'fixed';
        // Refreshable parameters
        this.isFinePointer = true;
        /** @type {[Number, Number, Number, Number]} */ this.containerPadding = [
            0,
            0,
            0,
            0
        ];
        /** @type {Number} */ this.containerFriction = 0;
        /** @type {Number} */ this.releaseContainerFriction = 0;
        /** @type {Number|Array<Number>} */ this.snapX = 0;
        /** @type {Number|Array<Number>} */ this.snapY = 0;
        /** @type {Number} */ this.scrollSpeed = 0;
        /** @type {Number} */ this.scrollThreshold = 0;
        /** @type {Number} */ this.dragSpeed = 0;
        /** @type {Number} */ this.maxVelocity = 0;
        /** @type {Number} */ this.minVelocity = 0;
        /** @type {Number} */ this.velocityMultiplier = 0;
        /** @type {Boolean|DraggableCursorParams} */ this.cursor = false;
        /** @type {Spring} */ this.releaseXSpring = hasSpring ? /** @type {Spring} */ ease : createSpring({
            mass: setValue(parameters.releaseMass, 1),
            stiffness: setValue(parameters.releaseStiffness, 80),
            damping: setValue(parameters.releaseDamping, 20)
        });
        /** @type {Spring} */ this.releaseYSpring = hasSpring ? /** @type {Spring} */ ease : createSpring({
            mass: setValue(parameters.releaseMass, 1),
            stiffness: setValue(parameters.releaseStiffness, 80),
            damping: setValue(parameters.releaseDamping, 20)
        });
        /** @type {EasingFunction} */ this.releaseEase = customEase || eases.outQuint;
        /** @type {Boolean} */ this.hasReleaseSpring = hasSpring;
        /** @type {Callback<this>} */ this.onGrab = parameters.onGrab || noop;
        /** @type {Callback<this>} */ this.onDrag = parameters.onDrag || noop;
        /** @type {Callback<this>} */ this.onRelease = parameters.onRelease || noop;
        /** @type {Callback<this>} */ this.onUpdate = parameters.onUpdate || noop;
        /** @type {Callback<this>} */ this.onSettle = parameters.onSettle || noop;
        /** @type {Callback<this>} */ this.onSnap = parameters.onSnap || noop;
        /** @type {Callback<this>} */ this.onResize = parameters.onResize || noop;
        /** @type {Callback<this>} */ this.onAfterResize = parameters.onAfterResize || noop;
        /** @type {[Number, Number]} */ this.disabled = [
            0,
            0
        ];
        /** @type {AnimatableParams} */ const animatableParams = {};
        if (modifier) animatableParams.modifier = modifier;
        if (isUnd(paramX) || paramX === true) animatableParams[xProp] = 0;
        else if (isObj(paramX)) {
            const paramXObject = /** @type {DraggableAxisParam} */ paramX;
            const animatableXParams = {};
            if (paramXObject.modifier) animatableXParams.modifier = paramXObject.modifier;
            if (paramXObject.composition) animatableXParams.composition = paramXObject.composition;
            animatableParams[xProp] = animatableXParams;
        } else if (paramX === false) {
            animatableParams[xProp] = 0;
            this.disabled[0] = 1;
        }
        if (isUnd(paramY) || paramY === true) animatableParams[yProp] = 0;
        else if (isObj(paramY)) {
            const paramYObject = /** @type {DraggableAxisParam} */ paramY;
            const animatableYParams = {};
            if (paramYObject.modifier) animatableYParams.modifier = paramYObject.modifier;
            if (paramYObject.composition) animatableYParams.composition = paramYObject.composition;
            animatableParams[yProp] = animatableYParams;
        } else if (paramY === false) {
            animatableParams[yProp] = 0;
            this.disabled[1] = 1;
        }
        /** @type {AnimatableObject} */ this.animate = /** @type {AnimatableObject} */ new Animatable(this.$target, animatableParams);
        // Internal props
        this.xProp = xProp;
        this.yProp = yProp;
        this.destX = 0;
        this.destY = 0;
        this.deltaX = 0;
        this.deltaY = 0;
        this.scroll = {
            x: 0,
            y: 0
        };
        /** @type {[Number, Number, Number, Number]} */ this.coords = [
            this.x,
            this.y,
            0,
            0
        ]; // x, y, temp x, temp y
        /** @type {[Number, Number]} */ this.snapped = [
            0,
            0
        ]; // x, y
        /** @type {[Number, Number, Number, Number, Number, Number, Number, Number]} */ this.pointer = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]; // x1, y1, x2, y2, temp x1, temp y1, temp x2, temp y2
        /** @type {[Number, Number]} */ this.scrollView = [
            0,
            0
        ]; // w, h
        /** @type {[Number, Number, Number, Number]} */ this.dragArea = [
            0,
            0,
            0,
            0
        ]; // x, y, w, h
        /** @type {[Number, Number, Number, Number]} */ this.containerBounds = [
            -1000000000000,
            maxValue,
            maxValue,
            -1000000000000
        ]; // t, r, b, l
        /** @type {[Number, Number, Number, Number]} */ this.scrollBounds = [
            0,
            0,
            0,
            0
        ]; // t, r, b, l
        /** @type {[Number, Number, Number, Number]} */ this.targetBounds = [
            0,
            0,
            0,
            0
        ]; // t, r, b, l
        /** @type {[Number, Number]} */ this.window = [
            0,
            0
        ]; // w, h
        /** @type {[Number, Number, Number]} */ this.velocityStack = [
            0,
            0,
            0
        ];
        /** @type {Number} */ this.velocityStackIndex = 0;
        /** @type {Number} */ this.velocityTime = now();
        /** @type {Number} */ this.velocity = 0;
        /** @type {Number} */ this.angle = 0;
        /** @type {JSAnimation} */ this.cursorStyles = null;
        /** @type {JSAnimation} */ this.triggerStyles = null;
        /** @type {JSAnimation} */ this.bodyStyles = null;
        /** @type {JSAnimation} */ this.targetStyles = null;
        /** @type {JSAnimation} */ this.touchActionStyles = null;
        this.transforms = new Transforms(this.$target);
        this.overshootCoords = {
            x: 0,
            y: 0
        };
        this.overshootXTicker = new Timer({
            autoplay: false
        }, null, 0).init();
        this.overshootYTicker = new Timer({
            autoplay: false
        }, null, 0).init();
        this.updateTicker = new Timer({
            autoplay: false
        }, null, 0).init();
        this.overshootXTicker.onUpdate = ()=>{
            if (this.disabled[0]) return;
            this.updated = true;
            this.manual = true;
            this.animate[this.xProp](this.overshootCoords.x, 0);
        };
        this.overshootXTicker.onComplete = ()=>{
            if (this.disabled[0]) return;
            this.manual = false;
            this.animate[this.xProp](this.overshootCoords.x, 0);
        };
        this.overshootYTicker.onUpdate = ()=>{
            if (this.disabled[1]) return;
            this.updated = true;
            this.manual = true;
            this.animate[this.yProp](this.overshootCoords.y, 0);
        };
        this.overshootYTicker.onComplete = ()=>{
            if (this.disabled[1]) return;
            this.manual = false;
            this.animate[this.yProp](this.overshootCoords.y, 0);
        };
        this.updateTicker.onUpdate = ()=>this.update();
        this.contained = !isUnd(container);
        this.manual = false;
        this.grabbed = false;
        this.dragged = false;
        this.updated = false;
        this.released = false;
        this.canScroll = false;
        this.enabled = false;
        this.initialized = false;
        this.activeProp = this.disabled[0] ? yProp : xProp;
        this.animate.animations[this.activeProp].onRender = ()=>{
            const hasUpdated = this.updated;
            const hasMoved = this.grabbed && hasUpdated;
            const hasReleased = !hasMoved && this.released;
            const x = this.x;
            const y = this.y;
            const dx = x - this.coords[2];
            const dy = y - this.coords[3];
            this.deltaX = dx;
            this.deltaY = dy;
            this.coords[2] = x;
            this.coords[3] = y;
            if (hasUpdated) this.onUpdate(this);
            if (!hasReleased) this.updated = false;
            else {
                this.computeVelocity(dx, dy);
                this.angle = atan2(dy, dx);
            }
        };
        this.animate.animations[this.activeProp].onComplete = ()=>{
            if (!this.grabbed && this.released) // Set eleased to false before calling onSettle to avoid recursion
            this.released = false;
            if (!this.manual) {
                this.deltaX = 0;
                this.deltaY = 0;
                this.velocity = 0;
                this.velocityStack[0] = 0;
                this.velocityStack[1] = 0;
                this.velocityStack[2] = 0;
                this.velocityStackIndex = 0;
                this.onSettle(this);
            }
        };
        this.resizeTicker = new Timer({
            autoplay: false,
            duration: 150 * globals.timeScale,
            onComplete: ()=>{
                this.onResize(this);
                this.refresh();
                this.onAfterResize(this);
            }
        }).init();
        this.parameters = parameters;
        this.resizeObserver = new ResizeObserver(()=>{
            if (this.initialized) this.resizeTicker.restart();
            else this.initialized = true;
        });
        this.enable();
        this.refresh();
        this.resizeObserver.observe(this.$container);
        if (!isObj(target)) this.resizeObserver.observe(this.$target);
    }
    /**
   * @param  {Number} dx
   * @param  {Number} dy
   * @return {Number}
   */ computeVelocity(dx, dy) {
        const prevTime = this.velocityTime;
        const curTime = now();
        const elapsed = curTime - prevTime;
        if (elapsed < 17) return this.velocity;
        this.velocityTime = curTime;
        const velocityStack = this.velocityStack;
        const vMul = this.velocityMultiplier;
        const minV = this.minVelocity;
        const maxV = this.maxVelocity;
        const vi = this.velocityStackIndex;
        velocityStack[vi] = round(clamp(sqrt(dx * dx + dy * dy) / elapsed * vMul, minV, maxV), 5);
        const velocity = max(velocityStack[0], velocityStack[1], velocityStack[2]);
        this.velocity = velocity;
        this.velocityStackIndex = (vi + 1) % 3;
        return velocity;
    }
    /**
   * @param {Number}  x
   * @param {Boolean} [muteUpdateCallback]
   * @return {this}
   */ setX(x, muteUpdateCallback = false) {
        if (this.disabled[0]) return;
        const v = round(x, 5);
        this.overshootXTicker.pause();
        this.manual = true;
        this.updated = !muteUpdateCallback;
        this.destX = v;
        this.snapped[0] = snap(v, this.snapX);
        this.animate[this.xProp](v, 0);
        this.manual = false;
        return this;
    }
    /**
   * @param {Number}  y
   * @param {Boolean} [muteUpdateCallback]
   * @return {this}
   */ setY(y, muteUpdateCallback = false) {
        if (this.disabled[1]) return;
        const v = round(y, 5);
        this.overshootYTicker.pause();
        this.manual = true;
        this.updated = !muteUpdateCallback;
        this.destY = v;
        this.snapped[1] = snap(v, this.snapY);
        this.animate[this.yProp](v, 0);
        this.manual = false;
        return this;
    }
    get x() {
        return round(/** @type {Number} */ this.animate[this.xProp](), globals.precision);
    }
    set x(x) {
        this.setX(x, false);
    }
    get y() {
        return round(/** @type {Number} */ this.animate[this.yProp](), globals.precision);
    }
    set y(y) {
        this.setY(y, false);
    }
    get progressX() {
        return mapRange(this.x, this.containerBounds[3], this.containerBounds[1], 0, 1);
    }
    set progressX(x) {
        this.setX(mapRange(x, 0, 1, this.containerBounds[3], this.containerBounds[1]), false);
    }
    get progressY() {
        return mapRange(this.y, this.containerBounds[0], this.containerBounds[2], 0, 1);
    }
    set progressY(y) {
        this.setY(mapRange(y, 0, 1, this.containerBounds[0], this.containerBounds[2]), false);
    }
    updateScrollCoords() {
        const sx = round(this.useWin ? win.scrollX : this.$container.scrollLeft, 0);
        const sy = round(this.useWin ? win.scrollY : this.$container.scrollTop, 0);
        const [cpt, cpr, cpb, cpl] = this.containerPadding;
        const threshold = this.scrollThreshold;
        this.scroll.x = sx;
        this.scroll.y = sy;
        this.scrollBounds[0] = sy - this.targetBounds[0] + cpt - threshold;
        this.scrollBounds[1] = sx - this.targetBounds[1] - cpr + threshold;
        this.scrollBounds[2] = sy - this.targetBounds[2] - cpb + threshold;
        this.scrollBounds[3] = sx - this.targetBounds[3] + cpl - threshold;
    }
    updateBoundingValues() {
        const $container = this.$container;
        const cx = this.x;
        const cy = this.y;
        const cx2 = this.coords[2];
        const cy2 = this.coords[3];
        // Prevents interfering with the scroll area in cases the target is outside of the container
        // Make sure the temp coords are also adjuset to prevents wrong delta calculation on updates
        this.coords[2] = 0;
        this.coords[3] = 0;
        this.setX(0, true);
        this.setY(0, true);
        this.transforms.remove();
        const iw = this.window[0] = win.innerWidth;
        const ih = this.window[1] = win.innerHeight;
        const uw = this.useWin;
        const sw = $container.scrollWidth;
        const sh = $container.scrollHeight;
        const fx = this.fixed;
        const transformContainerRect = $container.getBoundingClientRect();
        const [cpt, cpr, cpb, cpl] = this.containerPadding;
        this.dragArea[0] = uw ? 0 : transformContainerRect.left;
        this.dragArea[1] = uw ? 0 : transformContainerRect.top;
        this.scrollView[0] = uw ? clamp(sw, iw, sw) : sw;
        this.scrollView[1] = uw ? clamp(sh, ih, sh) : sh;
        this.updateScrollCoords();
        const { width, height, left, top, right, bottom } = $container.getBoundingClientRect();
        this.dragArea[2] = round(uw ? clamp(width, iw, iw) : width, 0);
        this.dragArea[3] = round(uw ? clamp(height, ih, ih) : height, 0);
        const containerOverflow = getTargetValue($container, 'overflow');
        const visibleOverflow = containerOverflow === 'visible';
        const hiddenOverflow = containerOverflow === 'hidden';
        this.canScroll = fx ? false : this.contained && ($container === doc.body && visibleOverflow || !hiddenOverflow && !visibleOverflow) && (sw > this.dragArea[2] + cpl - cpr || sh > this.dragArea[3] + cpt - cpb) && (!this.containerArray || this.containerArray && !isArr(this.containerArray));
        if (this.contained) {
            const sx = this.scroll.x;
            const sy = this.scroll.y;
            const canScroll = this.canScroll;
            const targetRect = this.$target.getBoundingClientRect();
            const hiddenLeft = canScroll ? uw ? 0 : $container.scrollLeft : 0;
            const hiddenTop = canScroll ? uw ? 0 : $container.scrollTop : 0;
            const hiddenRight = canScroll ? this.scrollView[0] - hiddenLeft - width : 0;
            const hiddenBottom = canScroll ? this.scrollView[1] - hiddenTop - height : 0;
            this.targetBounds[0] = round(targetRect.top + sy - (uw ? 0 : top), 0);
            this.targetBounds[1] = round(targetRect.right + sx - (uw ? iw : right), 0);
            this.targetBounds[2] = round(targetRect.bottom + sy - (uw ? ih : bottom), 0);
            this.targetBounds[3] = round(targetRect.left + sx - (uw ? 0 : left), 0);
            if (this.containerArray) {
                this.containerBounds[0] = this.containerArray[0] + cpt;
                this.containerBounds[1] = this.containerArray[1] - cpr;
                this.containerBounds[2] = this.containerArray[2] - cpb;
                this.containerBounds[3] = this.containerArray[3] + cpl;
            } else {
                this.containerBounds[0] = -round(targetRect.top - (fx ? clamp(top, 0, ih) : top) + hiddenTop - cpt, 0);
                this.containerBounds[1] = -round(targetRect.right - (fx ? clamp(right, 0, iw) : right) - hiddenRight + cpr, 0);
                this.containerBounds[2] = -round(targetRect.bottom - (fx ? clamp(bottom, 0, ih) : bottom) - hiddenBottom + cpb, 0);
                this.containerBounds[3] = -round(targetRect.left - (fx ? clamp(left, 0, iw) : left) + hiddenLeft - cpl, 0);
            }
        }
        this.transforms.revert();
        // Restore coordinates
        this.coords[2] = cx2;
        this.coords[3] = cy2;
        this.setX(cx, true);
        this.setY(cy, true);
    }
    /**
   * Returns 0 if not OB, 1 if x is OB, 2 if y is OB, 3 if both x and y are OB
   *
   * @param  {Array} bounds
   * @param  {Number} x
   * @param  {Number} y
   * @return {Number}
   */ isOutOfBounds(bounds, x, y) {
        if (!this.contained) return 0;
        const [bt, br, bb, bl] = bounds;
        const [dx, dy] = this.disabled;
        const obx = !dx && x < bl || !dx && x > br;
        const oby = !dy && y < bt || !dy && y > bb;
        return obx && !oby ? 1 : !obx && oby ? 2 : obx && oby ? 3 : 0;
    }
    refresh() {
        const params = this.parameters;
        const paramX = params.x;
        const paramY = params.y;
        const container = parseDraggableFunctionParameter(params.container, this);
        const cp = parseDraggableFunctionParameter(params.containerPadding, this) || 0;
        const containerPadding = /** @type {[Number, Number, Number, Number]} */ isArr(cp) ? cp : [
            cp,
            cp,
            cp,
            cp
        ];
        const cx = this.x;
        const cy = this.y;
        const parsedCursorStyles = parseDraggableFunctionParameter(params.cursor, this);
        const cursorStyles = {
            onHover: 'grab',
            onGrab: 'grabbing'
        };
        if (parsedCursorStyles) {
            const { onHover, onGrab } = /** @type {DraggableCursorParams} */ parsedCursorStyles;
            if (onHover) cursorStyles.onHover = onHover;
            if (onGrab) cursorStyles.onGrab = onGrab;
        }
        this.containerArray = isArr(container) ? container : null;
        this.$container = /** @type {HTMLElement} */ container && !this.containerArray ? parseTargets(/** @type {DOMTarget} */ container)[0] : doc.body;
        this.useWin = this.$container === doc.body;
        /** @type {Window | HTMLElement} */ this.$scrollContainer = this.useWin ? win : this.$container;
        this.isFinePointer = matchMedia('(pointer:fine)').matches;
        this.containerPadding = setValue(containerPadding, [
            0,
            0,
            0,
            0
        ]);
        this.containerFriction = clamp(setValue(parseDraggableFunctionParameter(params.containerFriction, this), .8), 0, 1);
        this.releaseContainerFriction = clamp(setValue(parseDraggableFunctionParameter(params.releaseContainerFriction, this), this.containerFriction), 0, 1);
        this.snapX = parseDraggableFunctionParameter(isObj(paramX) && !isUnd(paramX.snap) ? paramX.snap : params.snap, this);
        this.snapY = parseDraggableFunctionParameter(isObj(paramY) && !isUnd(paramY.snap) ? paramY.snap : params.snap, this);
        this.scrollSpeed = setValue(parseDraggableFunctionParameter(params.scrollSpeed, this), 1.5);
        this.scrollThreshold = setValue(parseDraggableFunctionParameter(params.scrollThreshold, this), 20);
        this.dragSpeed = setValue(parseDraggableFunctionParameter(params.dragSpeed, this), 1);
        this.minVelocity = setValue(parseDraggableFunctionParameter(params.minVelocity, this), 0);
        this.maxVelocity = setValue(parseDraggableFunctionParameter(params.maxVelocity, this), 50);
        this.velocityMultiplier = setValue(parseDraggableFunctionParameter(params.velocityMultiplier, this), 1);
        this.cursor = parsedCursorStyles === false ? false : cursorStyles;
        this.updateBoundingValues();
        // const ob = this.isOutOfBounds(this.containerBounds, this.x, this.y);
        // if (ob === 1 || ob === 3) this.progressX = px;
        // if (ob === 2 || ob === 3) this.progressY = py;
        // if (this.initialized && this.contained) {
        //   if (this.progressX !== px) this.progressX = px;
        //   if (this.progressY !== py) this.progressY = py;
        // }
        const [bt, br, bb, bl] = this.containerBounds;
        this.setX(clamp(cx, bl, br), true);
        this.setY(clamp(cy, bt, bb), true);
    }
    update() {
        this.updateScrollCoords();
        if (this.canScroll) {
            const [cpt, cpr, cpb, cpl] = this.containerPadding;
            const [sw, sh] = this.scrollView;
            const daw = this.dragArea[2];
            const dah = this.dragArea[3];
            const csx = this.scroll.x;
            const csy = this.scroll.y;
            const nsw = this.$container.scrollWidth;
            const nsh = this.$container.scrollHeight;
            const csw = this.useWin ? clamp(nsw, this.window[0], nsw) : nsw;
            const csh = this.useWin ? clamp(nsh, this.window[1], nsh) : nsh;
            const swd = sw - csw;
            const shd = sh - csh;
            // Handle cases where the scrollarea dimensions changes during drag
            if (this.dragged && swd > 0) {
                this.coords[0] -= swd;
                this.scrollView[0] = csw;
            }
            if (this.dragged && shd > 0) {
                this.coords[1] -= shd;
                this.scrollView[1] = csh;
            }
            // Handle autoscroll when target is at the edges of the scroll bounds
            const s = this.scrollSpeed * 10;
            const threshold = this.scrollThreshold;
            const [x, y] = this.coords;
            const [st, sr, sb, sl] = this.scrollBounds;
            const t = round(clamp((y - st + cpt) / threshold, -1, 0) * s, 0);
            const r = round(clamp((x - sr - cpr) / threshold, 0, 1) * s, 0);
            const b = round(clamp((y - sb - cpb) / threshold, 0, 1) * s, 0);
            const l = round(clamp((x - sl + cpl) / threshold, -1, 0) * s, 0);
            if (t || b || l || r) {
                const [nx, ny] = this.disabled;
                let scrollX = csx;
                let scrollY = csy;
                if (!nx) {
                    scrollX = round(clamp(csx + (l || r), 0, sw - daw), 0);
                    this.coords[0] -= csx - scrollX;
                }
                if (!ny) {
                    scrollY = round(clamp(csy + (t || b), 0, sh - dah), 0);
                    this.coords[1] -= csy - scrollY;
                }
                // Note: Safari mobile requires to use different scroll methods depending if using the window or not
                if (this.useWin) this.$scrollContainer.scrollBy(-(csx - scrollX), -(csy - scrollY));
                else this.$scrollContainer.scrollTo(scrollX, scrollY);
            }
        }
        const [ct, cr, cb, cl] = this.containerBounds;
        const [px1, py1, px2, py2, px3, py3] = this.pointer;
        this.coords[0] += (px1 - px3) * this.dragSpeed;
        this.coords[1] += (py1 - py3) * this.dragSpeed;
        this.pointer[4] = px1;
        this.pointer[5] = py1;
        const [cx, cy] = this.coords;
        const [sx, sy] = this.snapped;
        const cf = (1 - this.containerFriction) * this.dragSpeed;
        this.setX(cx > cr ? cr + (cx - cr) * cf : cx < cl ? cl + (cx - cl) * cf : cx, false);
        this.setY(cy > cb ? cb + (cy - cb) * cf : cy < ct ? ct + (cy - ct) * cf : cy, false);
        this.computeVelocity(px1 - px3, py1 - py3);
        this.angle = atan2(py1 - py2, px1 - px2);
        const [nsx, nsy] = this.snapped;
        if (nsx !== sx && this.snapX || nsy !== sy && this.snapY) this.onSnap(this);
    }
    stop() {
        this.updateTicker.pause();
        this.overshootXTicker.pause();
        this.overshootYTicker.pause();
        // Pauses the in bounds onRelease animations
        for(let prop in this.animate.animations)this.animate.animations[prop].pause();
        remove(this, null, 'x');
        remove(this, null, 'y');
        remove(this, null, 'progressX');
        remove(this, null, 'progressY');
        remove(this.scroll); // Removes any active animations on the container scroll
        remove(this.overshootCoords); // Removes active overshoot animations
        return this;
    }
    /**
   * @param {Number} [duration]
   * @param {Number} [gap]
   * @param {EasingParam} [ease]
   * @return {this}
   */ scrollInView(duration, gap = 0, ease = eases.inOutQuad) {
        this.updateScrollCoords();
        const x = this.destX;
        const y = this.destY;
        const scroll = this.scroll;
        const scrollBounds = this.scrollBounds;
        const canScroll = this.canScroll;
        if (!this.containerArray && this.isOutOfBounds(scrollBounds, x, y)) {
            const [st, sr, sb, sl] = scrollBounds;
            const t = round(clamp(y - st, -1000000000000, 0), 0);
            const r = round(clamp(x - sr, 0, maxValue), 0);
            const b = round(clamp(y - sb, 0, maxValue), 0);
            const l = round(clamp(x - sl, -1000000000000, 0), 0);
            new JSAnimation(scroll, {
                x: round(scroll.x + (l ? l - gap : r ? r + gap : 0), 0),
                y: round(scroll.y + (t ? t - gap : b ? b + gap : 0), 0),
                duration: isUnd(duration) ? 350 * globals.timeScale : duration,
                ease,
                onUpdate: ()=>{
                    this.canScroll = false;
                    this.$scrollContainer.scrollTo(scroll.x, scroll.y);
                }
            }).init().then(()=>{
                this.canScroll = canScroll;
            });
        }
        return this;
    }
    handleHover() {
        if (this.isFinePointer && this.cursor && !this.cursorStyles) this.cursorStyles = setTargetValues(this.$trigger, {
            cursor: /** @type {DraggableCursorParams} */ this.cursor.onHover
        });
    }
    /**
   * @param  {Number} [duration]
   * @param  {Number} [gap]
   * @param  {EasingParam} [ease]
   * @return {this}
   */ animateInView(duration, gap = 0, ease = eases.inOutQuad) {
        this.stop();
        this.updateBoundingValues();
        const x = this.x;
        const y = this.y;
        const [cpt, cpr, cpb, cpl] = this.containerPadding;
        const bt = this.scroll.y - this.targetBounds[0] + cpt + gap;
        const br = this.scroll.x - this.targetBounds[1] - cpr - gap;
        const bb = this.scroll.y - this.targetBounds[2] - cpb - gap;
        const bl = this.scroll.x - this.targetBounds[3] + cpl + gap;
        const ob = this.isOutOfBounds([
            bt,
            br,
            bb,
            bl
        ], x, y);
        if (ob) {
            const [disabledX, disabledY] = this.disabled;
            const destX = clamp(snap(x, this.snapX), bl, br);
            const destY = clamp(snap(y, this.snapY), bt, bb);
            const dur = isUnd(duration) ? 350 * globals.timeScale : duration;
            if (!disabledX && (ob === 1 || ob === 3)) this.animate[this.xProp](destX, dur, ease);
            if (!disabledY && (ob === 2 || ob === 3)) this.animate[this.yProp](destY, dur, ease);
        }
        return this;
    }
    /**
   * @param {MouseEvent|TouchEvent} e
   */ handleDown(e) {
        const $eTarget = /** @type {HTMLElement} */ e.target;
        if (this.grabbed || /** @type {HTMLInputElement}  */ $eTarget.type === 'range') return;
        e.stopPropagation();
        this.grabbed = true;
        this.released = false;
        this.stop();
        this.updateBoundingValues();
        const touches = /** @type {TouchEvent} */ e.changedTouches;
        const eventX = touches ? touches[0].clientX : /** @type {MouseEvent} */ e.clientX;
        const eventY = touches ? touches[0].clientY : /** @type {MouseEvent} */ e.clientY;
        const { x, y } = this.transforms.normalizePoint(eventX, eventY);
        const [ct, cr, cb, cl] = this.containerBounds;
        const cf = (1 - this.containerFriction) * this.dragSpeed;
        const cx = this.x;
        const cy = this.y;
        this.coords[0] = this.coords[2] = !cf ? cx : cx > cr ? cr + (cx - cr) / cf : cx < cl ? cl + (cx - cl) / cf : cx;
        this.coords[1] = this.coords[3] = !cf ? cy : cy > cb ? cb + (cy - cb) / cf : cy < ct ? ct + (cy - ct) / cf : cy;
        this.pointer[0] = x;
        this.pointer[1] = y;
        this.pointer[2] = x;
        this.pointer[3] = y;
        this.pointer[4] = x;
        this.pointer[5] = y;
        this.pointer[6] = x;
        this.pointer[7] = y;
        this.deltaX = 0;
        this.deltaY = 0;
        this.velocity = 0;
        this.velocityStack[0] = 0;
        this.velocityStack[1] = 0;
        this.velocityStack[2] = 0;
        this.velocityStackIndex = 0;
        this.angle = 0;
        if (this.targetStyles) {
            this.targetStyles.revert();
            this.targetStyles = null;
        }
        const z = /** @type {Number} */ getTargetValue(this.$target, 'zIndex', false);
        zIndex = (z > zIndex ? z : zIndex) + 1;
        this.targetStyles = setTargetValues(this.$target, {
            zIndex
        });
        if (this.triggerStyles) {
            this.triggerStyles.revert();
            this.triggerStyles = null;
        }
        if (this.cursorStyles) {
            this.cursorStyles.revert();
            this.cursorStyles = null;
        }
        if (this.isFinePointer && this.cursor) this.bodyStyles = setTargetValues(doc.body, {
            cursor: /** @type {DraggableCursorParams} */ this.cursor.onGrab
        });
        this.scrollInView(100, 0, eases.out(3));
        this.onGrab(this);
        doc.addEventListener('touchmove', this);
        doc.addEventListener('touchend', this);
        doc.addEventListener('touchcancel', this);
        doc.addEventListener('mousemove', this);
        doc.addEventListener('mouseup', this);
        doc.addEventListener('selectstart', this);
    }
    /**
   * @param {MouseEvent|TouchEvent} e
   */ handleMove(e) {
        if (!this.grabbed) return;
        const touches = /** @type {TouchEvent} */ e.changedTouches;
        const eventX = touches ? touches[0].clientX : /** @type {MouseEvent} */ e.clientX;
        const eventY = touches ? touches[0].clientY : /** @type {MouseEvent} */ e.clientY;
        const { x, y } = this.transforms.normalizePoint(eventX, eventY);
        const movedX = x - this.pointer[6];
        const movedY = y - this.pointer[7];
        let $parent = /** @type {HTMLElement} */ e.target;
        let isAtTop = false;
        let isAtBottom = false;
        let canTouchScroll = false;
        while(touches && $parent && $parent !== this.$trigger){
            const overflowY = getTargetValue($parent, 'overflow-y');
            if (overflowY !== 'hidden' && overflowY !== 'visible') {
                const { scrollTop, scrollHeight, clientHeight } = $parent;
                if (scrollHeight > clientHeight) {
                    canTouchScroll = true;
                    isAtTop = scrollTop <= 3;
                    isAtBottom = scrollTop >= scrollHeight - clientHeight - 3;
                    break;
                }
            }
            $parent = /** @type {HTMLElement} */ $parent.parentNode;
        }
        if (canTouchScroll && (!isAtTop && !isAtBottom || isAtTop && movedY < 0 || isAtBottom && movedY > 0)) {
            this.pointer[0] = x;
            this.pointer[1] = y;
            this.pointer[2] = x;
            this.pointer[3] = y;
            this.pointer[4] = x;
            this.pointer[5] = y;
            this.pointer[6] = x;
            this.pointer[7] = y;
        } else {
            preventDefault(e);
            // Needed to prevents click on handleUp
            if (!this.triggerStyles) this.triggerStyles = setTargetValues(this.$trigger, {
                pointerEvents: 'none'
            });
            // Needed to prevent page scroll while dragging on touch devvice
            this.$trigger.addEventListener('touchstart', preventDefault, {
                passive: false
            });
            this.$trigger.addEventListener('touchmove', preventDefault, {
                passive: false
            });
            this.$trigger.addEventListener('touchend', preventDefault);
            if (!this.disabled[0] && abs(movedX) > 3 || !this.disabled[1] && abs(movedY) > 3) {
                this.updateTicker.resume();
                this.pointer[2] = this.pointer[0];
                this.pointer[3] = this.pointer[1];
                this.pointer[0] = x;
                this.pointer[1] = y;
                this.dragged = true;
                this.released = false;
                this.onDrag(this);
            }
        }
    }
    handleUp() {
        if (!this.grabbed) return;
        this.updateTicker.pause();
        if (this.triggerStyles) {
            this.triggerStyles.revert();
            this.triggerStyles = null;
        }
        if (this.bodyStyles) {
            this.bodyStyles.revert();
            this.bodyStyles = null;
        }
        const [disabledX, disabledY] = this.disabled;
        const [px1, py1, px2, py2, px3, py3] = this.pointer;
        const [ct, cr, cb, cl] = this.containerBounds;
        const [sx, sy] = this.snapped;
        const springX = this.releaseXSpring;
        const springY = this.releaseYSpring;
        const releaseEase = this.releaseEase;
        const hasReleaseSpring = this.hasReleaseSpring;
        const overshootCoords = this.overshootCoords;
        const cx = this.x;
        const cy = this.y;
        const pv = this.computeVelocity(px1 - px3, py1 - py3);
        const pa = this.angle = atan2(py1 - py2, px1 - px2);
        const ds = pv * 150;
        const cf = (1 - this.releaseContainerFriction) * this.dragSpeed;
        const nx = cx + cos(pa) * ds;
        const ny = cy + sin(pa) * ds;
        const bx = nx > cr ? cr + (nx - cr) * cf : nx < cl ? cl + (nx - cl) * cf : nx;
        const by = ny > cb ? cb + (ny - cb) * cf : ny < ct ? ct + (ny - ct) * cf : ny;
        const dx = this.destX = clamp(round(snap(bx, this.snapX), 5), cl, cr);
        const dy = this.destY = clamp(round(snap(by, this.snapY), 5), ct, cb);
        const ob = this.isOutOfBounds(this.containerBounds, nx, ny);
        let durationX = 0;
        let durationY = 0;
        let easeX = releaseEase;
        let easeY = releaseEase;
        let longestReleaseDuration = 0;
        overshootCoords.x = cx;
        overshootCoords.y = cy;
        if (!disabledX) {
            const directionX = dx === cr ? cx > cr ? -1 : 1 : cx < cl ? -1 : 1;
            const distanceX = round(cx - dx, 0);
            springX.velocity = disabledY && hasReleaseSpring ? distanceX ? ds * directionX / abs(distanceX) : 0 : pv;
            const { ease, duration, restDuration } = springX;
            durationX = cx === dx ? 0 : hasReleaseSpring ? duration : duration - restDuration * globals.timeScale;
            if (hasReleaseSpring) easeX = ease;
            if (durationX > longestReleaseDuration) longestReleaseDuration = durationX;
        }
        if (!disabledY) {
            const directionY = dy === cb ? cy > cb ? -1 : 1 : cy < ct ? -1 : 1;
            const distanceY = round(cy - dy, 0);
            springY.velocity = disabledX && hasReleaseSpring ? distanceY ? ds * directionY / abs(distanceY) : 0 : pv;
            const { ease, duration, restDuration } = springY;
            durationY = cy === dy ? 0 : hasReleaseSpring ? duration : duration - restDuration * globals.timeScale;
            if (hasReleaseSpring) easeY = ease;
            if (durationY > longestReleaseDuration) longestReleaseDuration = durationY;
        }
        if (!hasReleaseSpring && ob && cf && (durationX || durationY)) {
            const composition = compositionTypes.blend;
            new JSAnimation(overshootCoords, {
                x: {
                    to: bx,
                    duration: durationX * .65
                },
                y: {
                    to: by,
                    duration: durationY * .65
                },
                ease: releaseEase,
                composition
            }).init();
            new JSAnimation(overshootCoords, {
                x: {
                    to: dx,
                    duration: durationX
                },
                y: {
                    to: dy,
                    duration: durationY
                },
                ease: releaseEase,
                composition
            }).init();
            this.overshootXTicker.stretch(durationX).restart();
            this.overshootYTicker.stretch(durationY).restart();
        } else {
            if (!disabledX) this.animate[this.xProp](dx, durationX, easeX);
            if (!disabledY) this.animate[this.yProp](dy, durationY, easeY);
        }
        this.scrollInView(longestReleaseDuration, this.scrollThreshold, releaseEase);
        let hasSnapped = false;
        if (dx !== sx) {
            this.snapped[0] = dx;
            if (this.snapX) hasSnapped = true;
        }
        if (dy !== sy && this.snapY) {
            this.snapped[1] = dy;
            if (this.snapY) hasSnapped = true;
        }
        if (hasSnapped) this.onSnap(this);
        this.grabbed = false;
        this.dragged = false;
        this.updated = true;
        this.released = true;
        // It's important to trigger the callback after the release animations to be able to cancel them
        this.onRelease(this);
        this.$trigger.removeEventListener('touchstart', preventDefault);
        this.$trigger.removeEventListener('touchmove', preventDefault);
        this.$trigger.removeEventListener('touchend', preventDefault);
        doc.removeEventListener('touchmove', this);
        doc.removeEventListener('touchend', this);
        doc.removeEventListener('touchcancel', this);
        doc.removeEventListener('mousemove', this);
        doc.removeEventListener('mouseup', this);
        doc.removeEventListener('selectstart', this);
    }
    reset() {
        this.stop();
        this.resizeTicker.pause();
        this.grabbed = false;
        this.dragged = false;
        this.updated = false;
        this.released = false;
        this.canScroll = false;
        this.setX(0, true);
        this.setY(0, true);
        this.coords[0] = 0;
        this.coords[1] = 0;
        this.pointer[0] = 0;
        this.pointer[1] = 0;
        this.pointer[2] = 0;
        this.pointer[3] = 0;
        this.pointer[4] = 0;
        this.pointer[5] = 0;
        this.pointer[6] = 0;
        this.pointer[7] = 0;
        this.velocity = 0;
        this.velocityStack[0] = 0;
        this.velocityStack[1] = 0;
        this.velocityStack[2] = 0;
        this.velocityStackIndex = 0;
        this.angle = 0;
        return this;
    }
    enable() {
        if (!this.enabled) {
            this.enabled = true;
            this.$target.classList.remove('is-disabled');
            this.touchActionStyles = setTargetValues(this.$trigger, {
                touchAction: this.disabled[0] ? 'pan-x' : this.disabled[1] ? 'pan-y' : 'none'
            });
            this.$trigger.addEventListener('touchstart', this, {
                passive: true
            });
            this.$trigger.addEventListener('mousedown', this, {
                passive: true
            });
            this.$trigger.addEventListener('mouseenter', this);
        }
        return this;
    }
    disable() {
        this.enabled = false;
        this.grabbed = false;
        this.dragged = false;
        this.updated = false;
        this.released = false;
        this.canScroll = false;
        this.touchActionStyles.revert();
        if (this.cursorStyles) {
            this.cursorStyles.revert();
            this.cursorStyles = null;
        }
        if (this.triggerStyles) {
            this.triggerStyles.revert();
            this.triggerStyles = null;
        }
        if (this.bodyStyles) {
            this.bodyStyles.revert();
            this.bodyStyles = null;
        }
        if (this.targetStyles) {
            this.targetStyles.revert();
            this.targetStyles = null;
        }
        this.stop();
        this.$target.classList.add('is-disabled');
        this.$trigger.removeEventListener('touchstart', this);
        this.$trigger.removeEventListener('mousedown', this);
        this.$trigger.removeEventListener('mouseenter', this);
        doc.removeEventListener('touchmove', this);
        doc.removeEventListener('touchend', this);
        doc.removeEventListener('touchcancel', this);
        doc.removeEventListener('mousemove', this);
        doc.removeEventListener('mouseup', this);
        doc.removeEventListener('selectstart', this);
        return this;
    }
    revert() {
        this.reset();
        this.disable();
        this.$target.classList.remove('is-disabled');
        this.updateTicker.revert();
        this.overshootXTicker.revert();
        this.overshootYTicker.revert();
        this.resizeTicker.revert();
        return this;
    }
    /**
   * @param {Event} e
   */ handleEvent(e) {
        switch(e.type){
            case 'mousedown':
                this.handleDown(/** @type {MouseEvent} */ e);
                break;
            case 'touchstart':
                this.handleDown(/** @type {TouchEvent} */ e);
                break;
            case 'mousemove':
                this.handleMove(/** @type {MouseEvent} */ e);
                break;
            case 'touchmove':
                this.handleMove(/** @type {TouchEvent} */ e);
                break;
            case 'mouseup':
                this.handleUp();
                break;
            case 'touchend':
                this.handleUp();
                break;
            case 'touchcancel':
                this.handleUp();
                break;
            case 'mouseenter':
                this.handleHover();
                break;
            case 'selectstart':
                preventDefault(e);
                break;
        }
    }
}
/**
 * @param {TargetsParam} target
 * @param {DraggableParams} [parameters]
 * @return {Draggable}
 */ const createDraggable = (target, parameters)=>new Draggable(target, parameters);
/**
 * @typedef {Object} ReactRef
 * @property {HTMLElement|SVGElement|null} [current]
 */ /**
 * @typedef {Object} AngularRef
 * @property {HTMLElement|SVGElement} [nativeElement]
 */ /**
 * @typedef {Object} ScopeParams
 * @property {DOMTargetSelector|ReactRef|AngularRef} [root]
 * @property {DefaultsParams} [defaults]
 * @property {Record<String, String>} [mediaQueries]
 */ /**
 * @callback ScopeCleanup
 * @param {Scope} [scope]
 */ /**
 * @callback ScopeConstructor
 * @param {Scope} [scope]
 * @return {ScopeCleanup|void}
 */ /**
 * @callback ScopeMethod
 * @param {...*} args
 * @return {ScopeCleanup|void}
 */ class Scope {
    /** @param {ScopeParams} [parameters] */ constructor(parameters = {}){
        if (globals.scope) globals.scope.revertibles.push(this);
        const rootParam = parameters.root;
        /** @type {Document|DOMTarget} */ let root = doc;
        if (rootParam) root = /** @type {ReactRef} */ rootParam.current || /** @type {AngularRef} */ rootParam.nativeElement || parseTargets(/** @type {DOMTargetSelector} */ rootParam)[0] || doc;
        const scopeDefaults = parameters.defaults;
        const globalDefault = globals.defaults;
        const mediaQueries = parameters.mediaQueries;
        /** @type {DefaultsParams} */ this.defaults = scopeDefaults ? mergeObjects(scopeDefaults, globalDefault) : globalDefault;
        /** @type {Document|DOMTarget} */ this.root = root;
        /** @type {Array<ScopeConstructor>} */ this.constructors = [];
        /** @type {Array<Function>} */ this.revertConstructors = [];
        /** @type {Array<Revertible>} */ this.revertibles = [];
        /** @type {Record<String, Function>} */ this.methods = {};
        /** @type {Record<String, Boolean>} */ this.matches = {};
        /** @type {Record<String, MediaQueryList>} */ this.mediaQueryLists = {};
        /** @type {Record<String, any>} */ this.data = {};
        if (mediaQueries) for(let mq in mediaQueries){
            const _mq = win.matchMedia(mediaQueries[mq]);
            this.mediaQueryLists[mq] = _mq;
            _mq.addEventListener('change', this);
        }
    }
    /**
   * @callback ScoppedCallback
   * @param {this} scope
   * @return {any}
   *
   * @param {ScoppedCallback} cb
   * @return {this}
   */ execute(cb) {
        let activeScope = globals.scope;
        let activeRoot = globals.root;
        let activeDefaults = globals.defaults;
        globals.scope = this;
        globals.root = this.root;
        globals.defaults = this.defaults;
        const mqs = this.mediaQueryLists;
        for(let mq in mqs)this.matches[mq] = mqs[mq].matches;
        const returned = cb(this);
        globals.scope = activeScope;
        globals.root = activeRoot;
        globals.defaults = activeDefaults;
        return returned;
    }
    /**
   * @return {this}
   */ refresh() {
        this.execute(()=>{
            let i = this.revertibles.length;
            let y = this.revertConstructors.length;
            while(i--)this.revertibles[i].revert();
            while(y--)this.revertConstructors[y](this);
            this.revertibles.length = 0;
            this.revertConstructors.length = 0;
            this.constructors.forEach((constructor)=>{
                const revertConstructor = constructor(this);
                if (revertConstructor) this.revertConstructors.push(revertConstructor);
            });
        });
        return this;
    }
    /**
   * @callback contructorCallback
   * @param {this} self
   *
   * @overload
   * @param {String} a1
   * @param {ScopeMethod} a2
   * @return {this}
   *
   * @overload
   * @param {contructorCallback} a1
   * @return {this}
   *
   * @param {String|contructorCallback} a1
   * @param {ScopeMethod} [a2]
   */ add(a1, a2) {
        if (isFnc(a1)) {
            const constructor = /** @type {contructorCallback} */ a1;
            this.constructors.push(constructor);
            this.execute(()=>{
                const revertConstructor = constructor(this);
                if (revertConstructor) this.revertConstructors.push(revertConstructor);
            });
        } else this.methods[/** @type {String} */ a1] = (...args)=>this.execute(()=>a2(...args));
        return this;
    }
    /**
   * @param {Event} e
   */ handleEvent(e) {
        switch(e.type){
            case 'change':
                this.refresh();
                break;
        }
    }
    revert() {
        const revertibles = this.revertibles;
        const revertConstructors = this.revertConstructors;
        const mqs = this.mediaQueryLists;
        let i = revertibles.length;
        let y = revertConstructors.length;
        while(i--)revertibles[i].revert();
        while(y--)revertConstructors[y](this);
        for(let mq in mqs)mqs[mq].removeEventListener('change', this);
        revertibles.length = 0;
        revertConstructors.length = 0;
        this.constructors.length = 0;
        this.matches = {};
        this.methods = {};
        this.mediaQueryLists = {};
        this.data = {};
    }
}
/**
 * @param {ScopeParams} [params]
 * @return {Scope}
 */ const createScope = (params)=>new Scope(params);
/**
 * @typedef {String|Number} ScrollThresholdValue
 */ /**
 * @return {Number}
 */ const getMaxViewHeight = ()=>{
    const $el = document.createElement('div');
    doc.body.appendChild($el);
    $el.style.height = '100lvh';
    const height = $el.offsetHeight;
    doc.body.removeChild($el);
    return height;
};
/**
 * @template {ScrollThresholdValue|String|Number|Boolean|Function|Object} T
 * @param {T | ((observer: ScrollObserver) => T)} value
 * @param {ScrollObserver} scroller
 * @return {T}
 */ const parseScrollObserverFunctionParameter = (value, scroller)=>value && isFnc(value) ? /** @type {Function} */ value(scroller) : value;
const scrollContainers = new Map();
class ScrollContainer {
    /**
   * @param {HTMLElement} $el
   */ constructor($el){
        /** @type {HTMLElement} */ this.element = $el;
        /** @type {Boolean} */ this.useWin = this.element === doc.body;
        /** @type {Number} */ this.winWidth = 0;
        /** @type {Number} */ this.winHeight = 0;
        /** @type {Number} */ this.width = 0;
        /** @type {Number} */ this.height = 0;
        /** @type {Number} */ this.left = 0;
        /** @type {Number} */ this.top = 0;
        /** @type {Number} */ this.zIndex = 0;
        /** @type {Number} */ this.scrollX = 0;
        /** @type {Number} */ this.scrollY = 0;
        /** @type {Number} */ this.prevScrollX = 0;
        /** @type {Number} */ this.prevScrollY = 0;
        /** @type {Number} */ this.scrollWidth = 0;
        /** @type {Number} */ this.scrollHeight = 0;
        /** @type {Number} */ this.velocity = 0;
        /** @type {Boolean} */ this.backwardX = false;
        /** @type {Boolean} */ this.backwardY = false;
        /** @type {Timer} */ this.scrollTicker = new Timer({
            autoplay: false,
            onBegin: ()=>this.dataTimer.resume(),
            onUpdate: ()=>{
                const backwards = this.backwardX || this.backwardY;
                forEachChildren(this, (/** @type {ScrollObserver} */ child)=>child.handleScroll(), backwards);
            },
            onComplete: ()=>this.dataTimer.pause()
        }).init();
        /** @type {Timer} */ this.dataTimer = new Timer({
            autoplay: false,
            frameRate: 30,
            onUpdate: (self)=>{
                const dt = self.deltaTime;
                const px = this.prevScrollX;
                const py = this.prevScrollY;
                const nx = this.scrollX;
                const ny = this.scrollY;
                const dx = px - nx;
                const dy = py - ny;
                this.prevScrollX = nx;
                this.prevScrollY = ny;
                if (dx) this.backwardX = px > nx;
                if (dy) this.backwardY = py > ny;
                this.velocity = round(dt > 0 ? Math.sqrt(dx * dx + dy * dy) / dt : 0, 5);
            }
        }).init();
        /** @type {Timer} */ this.resizeTicker = new Timer({
            autoplay: false,
            duration: 250 * globals.timeScale,
            onComplete: ()=>{
                this.updateWindowBounds();
                this.refreshScrollObservers();
                this.handleScroll();
            }
        }).init();
        /** @type {Timer} */ this.wakeTicker = new Timer({
            autoplay: false,
            duration: 500 * globals.timeScale,
            onBegin: ()=>{
                this.scrollTicker.resume();
            },
            onComplete: ()=>{
                this.scrollTicker.pause();
            }
        }).init();
        /** @type {ScrollObserver} */ this._head = null;
        /** @type {ScrollObserver} */ this._tail = null;
        this.updateScrollCoords();
        this.updateWindowBounds();
        this.updateBounds();
        this.refreshScrollObservers();
        this.handleScroll();
        this.resizeObserver = new ResizeObserver(()=>this.resizeTicker.restart());
        this.resizeObserver.observe(this.element);
        (this.useWin ? win : this.element).addEventListener('scroll', this, false);
    }
    updateScrollCoords() {
        const useWin = this.useWin;
        const $el = this.element;
        this.scrollX = round(useWin ? win.scrollX : $el.scrollLeft, 0);
        this.scrollY = round(useWin ? win.scrollY : $el.scrollTop, 0);
    }
    updateWindowBounds() {
        this.winWidth = win.innerWidth;
        this.winHeight = getMaxViewHeight();
    }
    updateBounds() {
        const style = getComputedStyle(this.element);
        const $el = this.element;
        this.scrollWidth = $el.scrollWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        this.scrollHeight = $el.scrollHeight + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        this.updateWindowBounds();
        let width, height;
        if (this.useWin) {
            width = this.winWidth;
            height = this.winHeight;
        } else {
            const elRect = $el.getBoundingClientRect();
            width = elRect.width;
            height = elRect.height;
            this.top = elRect.top;
            this.left = elRect.left;
        }
        this.width = width;
        this.height = height;
    }
    refreshScrollObservers() {
        forEachChildren(this, (/** @type {ScrollObserver} */ child)=>{
            if (child._debug) child.removeDebug();
        });
        this.updateBounds();
        forEachChildren(this, (/** @type {ScrollObserver} */ child)=>{
            child.refresh();
            if (child._debug) child.debug();
        });
    }
    refresh() {
        this.updateWindowBounds();
        this.updateBounds();
        this.refreshScrollObservers();
        this.handleScroll();
    }
    handleScroll() {
        this.updateScrollCoords();
        this.wakeTicker.restart();
    }
    /**
   * @param {Event} e
   */ handleEvent(e) {
        switch(e.type){
            case 'scroll':
                this.handleScroll();
                break;
        }
    }
    revert() {
        this.scrollTicker.cancel();
        this.dataTimer.cancel();
        this.resizeTicker.cancel();
        this.wakeTicker.cancel();
        this.resizeObserver.unobserve(this.element);
        (this.useWin ? win : this.element).removeEventListener('scroll', this);
        scrollContainers.delete(this.element);
    }
}
/**
 * @param {TargetsParam} target
 * @return {ScrollContainer}
 */ const registerAndGetScrollContainer = (target)=>{
    const $el = /** @type {HTMLElement} */ target ? parseTargets(target)[0] || doc.body : doc.body;
    let scrollContainer = scrollContainers.get($el);
    if (!scrollContainer) {
        scrollContainer = new ScrollContainer($el);
        scrollContainers.set($el, scrollContainer);
    }
    return scrollContainer;
};
/**
 * @param {HTMLElement} $el
 * @param {Number|string} v
 * @param {Number} size
 * @param {Number} [under]
 * @param {Number} [over]
 * @return {Number}
 */ const convertValueToPx = ($el, v, size, under, over)=>{
    const clampMin = v === 'min';
    const clampMax = v === 'max';
    const value = v === 'top' || v === 'left' || v === 'start' || clampMin ? 0 : v === 'bottom' || v === 'right' || v === 'end' || clampMax ? '100%' : v === 'center' ? '50%' : v;
    const { n, u } = decomposeRawValue(value, decomposedOriginalValue);
    let px = n;
    if (u === '%') px = n / 100 * size;
    else if (u) px = convertValueUnit($el, decomposedOriginalValue, 'px', true).n;
    if (clampMax && under < 0) px += under;
    if (clampMin && over > 0) px += over;
    return px;
};
/**
 * @param {HTMLElement} $el
 * @param {ScrollThresholdValue} v
 * @param {Number} size
 * @param {Number} [under]
 * @param {Number} [over]
 * @return {Number}
 */ const parseBoundValue = ($el, v, size, under, over)=>{
    /** @type {Number} */ let value;
    if (isStr(v)) {
        const matchedOperator = relativeValuesExecRgx.exec(/** @type {String} */ v);
        if (matchedOperator) {
            const splitter = matchedOperator[0];
            const operator = splitter[0];
            const splitted = /** @type {String} */ v.split(splitter);
            const clampMin = splitted[0] === 'min';
            const clampMax = splitted[0] === 'max';
            const valueAPx = convertValueToPx($el, splitted[0], size, under, over);
            const valueBPx = convertValueToPx($el, splitted[1], size, under, over);
            if (clampMin) {
                const min = getRelativeValue(convertValueToPx($el, 'min', size), valueBPx, operator);
                value = min < valueAPx ? valueAPx : min;
            } else if (clampMax) {
                const max = getRelativeValue(convertValueToPx($el, 'max', size), valueBPx, operator);
                value = max > valueAPx ? valueAPx : max;
            } else value = getRelativeValue(valueAPx, valueBPx, operator);
        } else value = convertValueToPx($el, v, size, under, over);
    } else value = /** @type {Number} */ v;
    return round(value, 0);
};
/**
 * @param {JSAnimation} linked
 * @return {HTMLElement}
 */ const getAnimationDomTarget = (linked)=>{
    let $linkedTarget;
    const linkedTargets = linked.targets;
    for(let i = 0, l = linkedTargets.length; i < l; i++){
        const target = linkedTargets[i];
        if (target[isDomSymbol]) {
            $linkedTarget = /** @type {HTMLElement} */ target;
            break;
        }
    }
    return $linkedTarget;
};
let scrollerIndex = 0;
const debugColors = [
    '#FF4B4B',
    '#FF971B',
    '#FFC730',
    '#F9F640',
    '#7AFF5A',
    '#18FF74',
    '#17E09B',
    '#3CFFEC',
    '#05DBE9',
    '#33B3F1',
    '#638CF9',
    '#C563FE',
    '#FF4FCF',
    '#F93F8A'
];
/**
 * @typedef {Object} ScrollThresholdParam
 * @property {ScrollThresholdValue} [target]
 * @property {ScrollThresholdValue} [container]
 */ /**
 * @callback ScrollObserverAxisCallback
 * @param {ScrollObserver} self
 * @return {'x'|'y'}
 */ /**
 * @callback ScrollThresholdCallback
 * @param {ScrollObserver} self
 * @return {ScrollThresholdValue|ScrollThresholdParam}
 */ /**
 * @typedef {Object} ScrollObserverParams
 * @property {Number|String} [id]
 * @property {Boolean|Number|String|EasingParam} [sync]
 * @property {TargetsParam} [container]
 * @property {TargetsParam} [target]
 * @property {'x'|'y'|ScrollObserverAxisCallback|((observer: ScrollObserver) => 'x'|'y'|ScrollObserverAxisCallback)} [axis]
 * @property {ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback|((observer: ScrollObserver) => ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback)} [enter]
 * @property {ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback|((observer: ScrollObserver) => ScrollThresholdValue|ScrollThresholdParam|ScrollThresholdCallback)} [leave]
 * @property {Boolean|((observer: ScrollObserver) => Boolean)} [repeat]
 * @property {Boolean} [debug]
 * @property {Callback<ScrollObserver>} [onEnter]
 * @property {Callback<ScrollObserver>} [onLeave]
 * @property {Callback<ScrollObserver>} [onEnterForward]
 * @property {Callback<ScrollObserver>} [onLeaveForward]
 * @property {Callback<ScrollObserver>} [onEnterBackward]
 * @property {Callback<ScrollObserver>} [onLeaveBackward]
 * @property {Callback<ScrollObserver>} [onUpdate]
 * @property {Callback<ScrollObserver>} [onSyncComplete]
 */ class ScrollObserver {
    /**
   * @param {ScrollObserverParams} parameters
   */ constructor(parameters = {}){
        if (globals.scope) globals.scope.revertibles.push(this);
        const syncMode = setValue(parameters.sync, 'play pause');
        const ease = syncMode ? parseEasings(/** @type {EasingParam} */ syncMode) : null;
        const isLinear = syncMode && (syncMode === 'linear' || syncMode === none);
        const isEase = syncMode && !(ease === none && !isLinear);
        const isSmooth = syncMode && (isNum(syncMode) || syncMode === true || isLinear);
        const isMethods = syncMode && isStr(syncMode) && !isEase && !isSmooth;
        const syncMethods = isMethods ? /** @type {String} */ syncMode.split(' ').map((/** @type {String} */ m)=>()=>{
                const linked = this.linked;
                return linked && linked[m] ? linked[m]() : null;
            }) : null;
        const biDirSync = isMethods && syncMethods.length > 2;
        /** @type {Number} */ this.index = scrollerIndex++;
        /** @type {String|Number} */ this.id = !isUnd(parameters.id) ? parameters.id : this.index;
        /** @type {ScrollContainer} */ this.container = registerAndGetScrollContainer(parameters.container);
        /** @type {HTMLElement} */ this.target = null;
        /** @type {Tickable|WAAPIAnimation} */ this.linked = null;
        /** @type {Boolean} */ this.repeat = null;
        /** @type {Boolean} */ this.horizontal = null;
        /** @type {ScrollThresholdParam|ScrollThresholdValue|ScrollThresholdCallback} */ this.enter = null;
        /** @type {ScrollThresholdParam|ScrollThresholdValue|ScrollThresholdCallback} */ this.leave = null;
        /** @type {Boolean} */ this.sync = isEase || isSmooth || !!syncMethods;
        /** @type {EasingFunction} */ this.syncEase = isEase ? ease : null;
        /** @type {Number} */ this.syncSmooth = isSmooth ? syncMode === true || isLinear ? 1 : /** @type {Number} */ syncMode : null;
        /** @type {Callback<ScrollObserver>} */ this.onSyncEnter = syncMethods && !biDirSync && syncMethods[0] ? syncMethods[0] : noop;
        /** @type {Callback<ScrollObserver>} */ this.onSyncLeave = syncMethods && !biDirSync && syncMethods[1] ? syncMethods[1] : noop;
        /** @type {Callback<ScrollObserver>} */ this.onSyncEnterForward = syncMethods && biDirSync && syncMethods[0] ? syncMethods[0] : noop;
        /** @type {Callback<ScrollObserver>} */ this.onSyncLeaveForward = syncMethods && biDirSync && syncMethods[1] ? syncMethods[1] : noop;
        /** @type {Callback<ScrollObserver>} */ this.onSyncEnterBackward = syncMethods && biDirSync && syncMethods[2] ? syncMethods[2] : noop;
        /** @type {Callback<ScrollObserver>} */ this.onSyncLeaveBackward = syncMethods && biDirSync && syncMethods[3] ? syncMethods[3] : noop;
        /** @type {Callback<ScrollObserver>} */ this.onEnter = parameters.onEnter || noop;
        /** @type {Callback<ScrollObserver>} */ this.onLeave = parameters.onLeave || noop;
        /** @type {Callback<ScrollObserver>} */ this.onEnterForward = parameters.onEnterForward || noop;
        /** @type {Callback<ScrollObserver>} */ this.onLeaveForward = parameters.onLeaveForward || noop;
        /** @type {Callback<ScrollObserver>} */ this.onEnterBackward = parameters.onEnterBackward || noop;
        /** @type {Callback<ScrollObserver>} */ this.onLeaveBackward = parameters.onLeaveBackward || noop;
        /** @type {Callback<ScrollObserver>} */ this.onUpdate = parameters.onUpdate || noop;
        /** @type {Callback<ScrollObserver>} */ this.onSyncComplete = parameters.onSyncComplete || noop;
        /** @type {Boolean} */ this.reverted = false;
        /** @type {Boolean} */ this.completed = false;
        /** @type {Boolean} */ this.began = false;
        /** @type {Boolean} */ this.isInView = false;
        /** @type {Boolean} */ this.forceEnter = false;
        /** @type {Boolean} */ this.hasEntered = false;
        /** @type {Array.<Number>} */ this.offsets = [];
        /** @type {Number} */ this.offset = 0;
        /** @type {Number} */ this.offsetStart = 0;
        /** @type {Number} */ this.offsetEnd = 0;
        /** @type {Number} */ this.distance = 0;
        /** @type {Number} */ this.prevProgress = 0;
        /** @type {Array} */ this.thresholds = [
            'start',
            'end',
            'end',
            'start'
        ];
        /** @type {[Number, Number, Number, Number]} */ this.coords = [
            0,
            0,
            0,
            0
        ];
        /** @type {JSAnimation} */ this.debugStyles = null;
        /** @type {HTMLElement} */ this.$debug = null;
        /** @type {ScrollObserverParams} */ this._params = parameters;
        /** @type {Boolean} */ this._debug = setValue(parameters.debug, false);
        /** @type {ScrollObserver} */ this._next = null;
        /** @type {ScrollObserver} */ this._prev = null;
        addChild(this.container, this);
        // Wait for the next frame to add to the container in order to handle calls to link()
        sync(()=>{
            if (this.reverted) return;
            if (!this.target) {
                const target = /** @type {HTMLElement} */ parseTargets(parameters.target)[0];
                this.target = target || doc.body;
                this.refresh();
            }
            if (this._debug) this.debug();
        });
    }
    /**
   * @param {Tickable|WAAPIAnimation} linked
   */ link(linked) {
        if (linked) {
            // Make sure to pause the linked object in case it's added later
            linked.pause();
            this.linked = linked;
            // Try to use a target of the linked object if no target parameters specified
            if (!this._params.target) {
                /** @type {HTMLElement} */ let $linkedTarget;
                if (!isUnd(/** @type {JSAnimation} */ linked.targets)) $linkedTarget = getAnimationDomTarget(/** @type {JSAnimation} */ linked);
                else forEachChildren(/** @type {Timeline} */ linked, (/** @type {JSAnimation} */ child)=>{
                    if (child.targets && !$linkedTarget) $linkedTarget = getAnimationDomTarget(/** @type {JSAnimation} */ child);
                });
                // Fallback to body if no target found
                this.target = $linkedTarget || doc.body;
                this.refresh();
            }
        }
        return this;
    }
    get velocity() {
        return this.container.velocity;
    }
    get backward() {
        return this.horizontal ? this.container.backwardX : this.container.backwardY;
    }
    get scroll() {
        return this.horizontal ? this.container.scrollX : this.container.scrollY;
    }
    get progress() {
        const p = (this.scroll - this.offsetStart) / this.distance;
        return p === Infinity || isNaN(p) ? 0 : round(clamp(p, 0, 1), 6);
    }
    refresh() {
        this.reverted = false;
        const params = this._params;
        this.repeat = setValue(parseScrollObserverFunctionParameter(params.repeat, this), true);
        this.horizontal = setValue(parseScrollObserverFunctionParameter(params.axis, this), 'y') === 'x';
        this.enter = setValue(parseScrollObserverFunctionParameter(params.enter, this), 'end start');
        this.leave = setValue(parseScrollObserverFunctionParameter(params.leave, this), 'start end');
        this.updateBounds();
        this.handleScroll();
        return this;
    }
    removeDebug() {
        if (this.$debug) {
            this.$debug.parentNode.removeChild(this.$debug);
            this.$debug = null;
        }
        if (this.debugStyles) {
            this.debugStyles.revert();
            this.$debug = null;
        }
        return this;
    }
    debug() {
        this.removeDebug();
        const container = this.container;
        const isHori = this.horizontal;
        const $existingDebug = container.element.querySelector(':scope > .animejs-onscroll-debug');
        const $debug = doc.createElement('div');
        const $thresholds = doc.createElement('div');
        const $triggers = doc.createElement('div');
        const color = debugColors[this.index % debugColors.length];
        const useWin = container.useWin;
        const containerWidth = useWin ? container.winWidth : container.width;
        const containerHeight = useWin ? container.winHeight : container.height;
        const scrollWidth = container.scrollWidth;
        const scrollHeight = container.scrollHeight;
        const size = this.container.width > 360 ? 320 : 260;
        const offLeft = isHori ? 0 : 10;
        const offTop = isHori ? 10 : 0;
        const half = isHori ? 24 : size / 2;
        const labelHeight = isHori ? half : 15;
        const labelWidth = isHori ? 60 : half;
        const labelSize = isHori ? labelWidth : labelHeight;
        const repeat = isHori ? 'repeat-x' : 'repeat-y';
        /**
     * @param {Number} v
     * @return {String}
     */ const gradientOffset = (v)=>isHori ? '0px ' + v + 'px' : v + 'px' + ' 2px';
        /**
     * @param {String} c
     * @return {String}
     */ const lineCSS = (c)=>`linear-gradient(${isHori ? 90 : 0}deg, ${c} 2px, transparent 1px)`;
        /**
     * @param {String} p
     * @param {Number} l
     * @param {Number} t
     * @param {Number} w
     * @param {Number} h
     * @return {String}
     */ const baseCSS = (p, l, t, w, h)=>`position:${p};left:${l}px;top:${t}px;width:${w}px;height:${h}px;`;
        $debug.style.cssText = `${baseCSS('absolute', offLeft, offTop, isHori ? scrollWidth : size, isHori ? size : scrollHeight)}
      pointer-events: none;
      z-index: ${this.container.zIndex++};
      display: flex;
      flex-direction: ${isHori ? 'column' : 'row'};
      filter: drop-shadow(0px 1px 0px rgba(0,0,0,.75));
    `;
        $thresholds.style.cssText = `${baseCSS('sticky', 0, 0, isHori ? containerWidth : half, isHori ? half : containerHeight)}`;
        if (!$existingDebug) $thresholds.style.cssText += `background:
        ${lineCSS('#FFFF')}${gradientOffset(half - 10)} / ${isHori ? '100px 100px' : '100px 100px'} ${repeat},
        ${lineCSS('#FFF8')}${gradientOffset(half - 10)} / ${isHori ? '10px 10px' : '10px 10px'} ${repeat};
      `;
        $triggers.style.cssText = `${baseCSS('relative', 0, 0, isHori ? scrollWidth : half, isHori ? half : scrollHeight)}`;
        if (!$existingDebug) $triggers.style.cssText += `background:
        ${lineCSS('#FFFF')}${gradientOffset(0)} / ${isHori ? '100px 10px' : '10px 100px'} ${repeat},
        ${lineCSS('#FFF8')}${gradientOffset(0)} / ${isHori ? '10px 0px' : '0px 10px'} ${repeat};
      `;
        const labels = [
            ' enter: ',
            ' leave: '
        ];
        this.coords.forEach((v, i)=>{
            const isView = i > 1;
            const value = (isView ? 0 : this.offset) + v;
            const isTail = i % 2;
            const isFirst = value < labelSize;
            const isOver = value > (isView ? isHori ? containerWidth : containerHeight : isHori ? scrollWidth : scrollHeight) - labelSize;
            const isFlip = (isView ? isTail && !isFirst : !isTail && !isFirst) || isOver;
            const $label = doc.createElement('div');
            const $text = doc.createElement('div');
            const dirProp = isHori ? isFlip ? 'right' : 'left' : isFlip ? 'bottom' : 'top';
            const flipOffset = isFlip ? (isHori ? labelWidth : labelHeight) + (!isView ? isHori ? -1 : -2 : isHori ? -1 : isOver ? 0 : -2) : !isView ? isHori ? 1 : 0 : isHori ? 1 : 0;
            // $text.innerHTML = `${!isView ? '' : labels[isTail] + ' '}${this.id}: ${this.thresholds[i]} ${isView ? '' : labels[isTail]}`;
            $text.innerHTML = `${this.id}${labels[isTail]}${this.thresholds[i]}`;
            $label.style.cssText = `${baseCSS('absolute', 0, 0, labelWidth, labelHeight)}
        display: flex;
        flex-direction: ${isHori ? 'column' : 'row'};
        justify-content: flex-${isView ? 'start' : 'end'};
        align-items: flex-${isFlip ? 'end' : 'start'};
        border-${dirProp}: 2px ${isTail ? 'solid' : 'solid'} ${color};
      `;
            $text.style.cssText = `
        overflow: hidden;
        max-width: ${size / 2 - 10}px;
        height: ${labelHeight};
        margin-${isHori ? isFlip ? 'right' : 'left' : isFlip ? 'bottom' : 'top'}: -2px;
        padding: 1px;
        font-family: ui-monospace, monospace;
        font-size: 10px;
        letter-spacing: -.025em;
        line-height: 9px;
        font-weight: 600;
        text-align: ${isHori && isFlip || !isHori && !isView ? 'right' : 'left'};
        white-space: pre;
        text-overflow: ellipsis;
        color: ${isTail ? color : 'rgba(0,0,0,.75)'};
        background-color: ${isTail ? 'rgba(0,0,0,.65)' : color};
        border: 2px solid ${isTail ? color : 'transparent'};
        border-${isHori ? isFlip ? 'top-left' : 'top-right' : isFlip ? 'top-left' : 'bottom-left'}-radius: 5px;
        border-${isHori ? isFlip ? 'bottom-left' : 'bottom-right' : isFlip ? 'top-right' : 'bottom-right'}-radius: 5px;
      `;
            $label.appendChild($text);
            let position = value - flipOffset + (isHori ? 1 : 0);
            $label.style[isHori ? 'left' : 'top'] = `${position}px`;
            // $label.style[isHori ? 'left' : 'top'] = value - flipOffset + (!isFlip && isFirst && !isView ? 1 : isFlip ? 0 : -2) + 'px';
            (isView ? $thresholds : $triggers).appendChild($label);
        });
        $debug.appendChild($thresholds);
        $debug.appendChild($triggers);
        container.element.appendChild($debug);
        if (!$existingDebug) $debug.classList.add('animejs-onscroll-debug');
        this.$debug = $debug;
        const containerPosition = getTargetValue(container.element, 'position');
        if (containerPosition === 'static') this.debugStyles = setTargetValues(container.element, {
            position: 'relative '
        });
    }
    updateBounds() {
        if (this._debug) this.removeDebug();
        let stickys;
        const $target = this.target;
        const container = this.container;
        const isHori = this.horizontal;
        const linked = this.linked;
        let linkedTime;
        let $el = $target;
        let offsetX = 0;
        let offsetY = 0;
        /** @type {Element} */ let $offsetParent = $el;
        if (linked) {
            linkedTime = linked.currentTime;
            linked.seek(0, true);
        }
        const isContainerStatic = getTargetValue(container.element, 'position') === 'static' ? setTargetValues(container.element, {
            position: 'relative '
        }) : false;
        while($el && $el !== container.element && $el !== doc.body){
            const isSticky = getTargetValue($el, 'position') === 'sticky' ? setTargetValues($el, {
                position: 'static'
            }) : false;
            if ($el === $offsetParent) {
                offsetX += $el.offsetLeft || 0;
                offsetY += $el.offsetTop || 0;
                $offsetParent = $el.offsetParent;
            }
            $el = /** @type {HTMLElement} */ $el.parentElement;
            if (isSticky) {
                if (!stickys) stickys = [];
                stickys.push(isSticky);
            }
        }
        if (isContainerStatic) isContainerStatic.revert();
        const offset = isHori ? offsetX : offsetY;
        const targetSize = isHori ? $target.offsetWidth : $target.offsetHeight;
        const containerSize = isHori ? container.width : container.height;
        const scrollSize = isHori ? container.scrollWidth : container.scrollHeight;
        const maxScroll = scrollSize - containerSize;
        const enter = this.enter;
        const leave = this.leave;
        /** @type {ScrollThresholdValue} */ let enterTarget = 'start';
        /** @type {ScrollThresholdValue} */ let leaveTarget = 'end';
        /** @type {ScrollThresholdValue} */ let enterContainer = 'end';
        /** @type {ScrollThresholdValue} */ let leaveContainer = 'start';
        if (isStr(enter)) {
            const splitted = /** @type {String} */ enter.split(' ');
            enterContainer = splitted[0];
            enterTarget = splitted.length > 1 ? splitted[1] : enterTarget;
        } else if (isObj(enter)) {
            const e = /** @type {ScrollThresholdParam} */ enter;
            if (!isUnd(e.container)) enterContainer = e.container;
            if (!isUnd(e.target)) enterTarget = e.target;
        } else if (isNum(enter)) enterContainer = /** @type {Number} */ enter;
        if (isStr(leave)) {
            const splitted = /** @type {String} */ leave.split(' ');
            leaveContainer = splitted[0];
            leaveTarget = splitted.length > 1 ? splitted[1] : leaveTarget;
        } else if (isObj(leave)) {
            const t = /** @type {ScrollThresholdParam} */ leave;
            if (!isUnd(t.container)) leaveContainer = t.container;
            if (!isUnd(t.target)) leaveTarget = t.target;
        } else if (isNum(leave)) leaveContainer = /** @type {Number} */ leave;
        const parsedEnterTarget = parseBoundValue($target, enterTarget, targetSize);
        const parsedLeaveTarget = parseBoundValue($target, leaveTarget, targetSize);
        const under = parsedEnterTarget + offset - containerSize;
        const over = parsedLeaveTarget + offset - maxScroll;
        const parsedEnterContainer = parseBoundValue($target, enterContainer, containerSize, under, over);
        const parsedLeaveContainer = parseBoundValue($target, leaveContainer, containerSize, under, over);
        const offsetStart = parsedEnterTarget + offset - parsedEnterContainer;
        const offsetEnd = parsedLeaveTarget + offset - parsedLeaveContainer;
        const scrollDelta = offsetEnd - offsetStart;
        this.offsets[0] = offsetX;
        this.offsets[1] = offsetY;
        this.offset = offset;
        this.offsetStart = offsetStart;
        this.offsetEnd = offsetEnd;
        this.distance = scrollDelta <= 0 ? 0 : scrollDelta;
        this.thresholds = [
            enterTarget,
            leaveTarget,
            enterContainer,
            leaveContainer
        ];
        this.coords = [
            parsedEnterTarget,
            parsedLeaveTarget,
            parsedEnterContainer,
            parsedLeaveContainer
        ];
        if (stickys) stickys.forEach((sticky)=>sticky.revert());
        if (linked) linked.seek(linkedTime, true);
        if (this._debug) this.debug();
    }
    handleScroll() {
        const linked = this.linked;
        const sync = this.sync;
        const syncEase = this.syncEase;
        const syncSmooth = this.syncSmooth;
        const shouldSeek = linked && (syncEase || syncSmooth);
        const isHori = this.horizontal;
        const container = this.container;
        const scroll = this.scroll;
        const isBefore = scroll <= this.offsetStart;
        const isAfter = scroll >= this.offsetEnd;
        const isInView = !isBefore && !isAfter;
        const isOnTheEdge = scroll === this.offsetStart || scroll === this.offsetEnd;
        const forceEnter = !this.hasEntered && isOnTheEdge;
        const $debug = this._debug && this.$debug;
        let hasUpdated = false;
        let syncCompleted = false;
        let p = this.progress;
        if (isBefore && this.began) this.began = false;
        if (p > 0 && !this.began) this.began = true;
        if (shouldSeek) {
            const lp = linked.progress;
            if (syncSmooth && isNum(syncSmooth)) {
                if (/** @type {Number} */ syncSmooth < 1) {
                    const step = 0.0001;
                    const snap = lp < p && p === 1 ? step : lp > p && !p ? -0.0001 : 0;
                    p = round(lerp(lp, p, interpolate(.01, .2, /** @type {Number} */ syncSmooth), false) + snap, 6);
                }
            } else if (syncEase) p = syncEase(p);
            hasUpdated = p !== this.prevProgress;
            syncCompleted = lp === 1;
            if (hasUpdated && !syncCompleted && syncSmooth && lp) container.wakeTicker.restart();
        }
        if ($debug) {
            const sticky = isHori ? container.scrollY : container.scrollX;
            $debug.style[isHori ? 'top' : 'left'] = sticky + 10 + 'px';
        }
        // Trigger enter callbacks if already in view or when entering the view
        if (isInView && !this.isInView || forceEnter && !this.forceEnter && !this.hasEntered) {
            if (isInView) this.isInView = true;
            if (!this.forceEnter || !this.hasEntered) {
                if ($debug && isInView) $debug.style.zIndex = `${this.container.zIndex++}`;
                this.onSyncEnter(this);
                this.onEnter(this);
                if (this.backward) {
                    this.onSyncEnterBackward(this);
                    this.onEnterBackward(this);
                } else {
                    this.onSyncEnterForward(this);
                    this.onEnterForward(this);
                }
                this.hasEntered = true;
                if (forceEnter) this.forceEnter = true;
            } else if (isInView) this.forceEnter = false;
        }
        if (isInView || !isInView && this.isInView) hasUpdated = true;
        if (hasUpdated) {
            if (shouldSeek) linked.seek(linked.duration * p);
            this.onUpdate(this);
        }
        if (!isInView && this.isInView) {
            this.isInView = false;
            this.onSyncLeave(this);
            this.onLeave(this);
            if (this.backward) {
                this.onSyncLeaveBackward(this);
                this.onLeaveBackward(this);
            } else {
                this.onSyncLeaveForward(this);
                this.onLeaveForward(this);
            }
            if (sync && !syncSmooth) syncCompleted = true;
        }
        if (p >= 1 && this.began && !this.completed && (sync && syncCompleted || !sync)) {
            if (sync) this.onSyncComplete(this);
            this.completed = true;
            if (!this.repeat && !linked || !this.repeat && linked && linked.completed) this.revert();
        }
        if (p < 1 && this.completed) this.completed = false;
        this.prevProgress = p;
    }
    revert() {
        if (this.reverted) return;
        const container = this.container;
        removeChild(container, this);
        if (!container._head) container.revert();
        if (this._debug) this.removeDebug();
        this.reverted = true;
        return this;
    }
}
/**
 * @param {ScrollObserverParams} [parameters={}]
 * @return {ScrollObserver}
 */ const onScroll = (parameters = {})=>new ScrollObserver(parameters);
/**
 * @typedef  {Object} StaggerParameters
 * @property {Number|String} [start]
 * @property {Number|'first'|'center'|'last'} [from]
 * @property {Boolean} [reversed]
 * @property {Array.<Number>} [grid]
 * @property {('x'|'y')} [axis]
 * @property {EasingParam} [ease]
 * @property {TweenModifier} [modifier]
 */ /**
 * @callback StaggerFunction
 * @param {Target} [target]
 * @param {Number} [index]
 * @param {Number} [length]
 * @param {Timeline} [tl]
 * @return {Number|String}
 */ /**
 * @param  {Number|String|[Number|String,Number|String]} val
 * @param  {StaggerParameters} params
 * @return {StaggerFunction}
 */ const stagger = (val, params = {})=>{
    let values = [];
    let maxValue = 0;
    const from = params.from;
    const reversed = params.reversed;
    const ease = params.ease;
    const hasEasing = !isUnd(ease);
    const hasSpring = hasEasing && !isUnd(/** @type {Spring} */ ease.ease);
    const staggerEase = hasSpring ? /** @type {Spring} */ ease.ease : hasEasing ? parseEasings(ease) : null;
    const grid = params.grid;
    const axis = params.axis;
    const fromFirst = isUnd(from) || from === 0 || from === 'first';
    const fromCenter = from === 'center';
    const fromLast = from === 'last';
    const isRange = isArr(val);
    const val1 = isRange ? parseNumber(val[0]) : parseNumber(val);
    const val2 = isRange ? parseNumber(val[1]) : 0;
    const unitMatch = unitsExecRgx.exec((isRange ? val[1] : val) + emptyString);
    const start = params.start || 0 + (isRange ? val1 : 0);
    let fromIndex = fromFirst ? 0 : isNum(from) ? from : 0;
    return (_, i, t, tl)=>{
        if (fromCenter) fromIndex = (t - 1) / 2;
        if (fromLast) fromIndex = t - 1;
        if (!values.length) {
            for(let index = 0; index < t; index++){
                if (!grid) values.push(abs(fromIndex - index));
                else {
                    const fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
                    const fromY = !fromCenter ? floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
                    const toX = index % grid[0];
                    const toY = floor(index / grid[0]);
                    const distanceX = fromX - toX;
                    const distanceY = fromY - toY;
                    let value = sqrt(distanceX * distanceX + distanceY * distanceY);
                    if (axis === 'x') value = -distanceX;
                    if (axis === 'y') value = -distanceY;
                    values.push(value);
                }
                maxValue = max(...values);
            }
            if (staggerEase) values = values.map((val)=>staggerEase(val / maxValue) * maxValue);
            if (reversed) values = values.map((val)=>axis ? val < 0 ? val * -1 : -val : abs(maxValue - val));
        }
        const spacing = isRange ? (val2 - val1) / maxValue : val1;
        const offset = tl ? parseTimelinePosition(tl, isUnd(params.start) ? tl.iterationDuration : start) : /** @type {Number} */ start;
        /** @type {String|Number} */ let output = offset + (spacing * round(values[i], 2) || 0);
        if (params.modifier) output = params.modifier(output);
        if (unitMatch) output = `${output}${unitMatch[2]}`;
        return output;
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"lPqDt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pulsating", ()=>pulsating);
const pulsating = ()=>{
    const pulsatingButtons = document.querySelectorAll(".contact-button-fixed");
    if (!pulsatingButtons.length) return;
    // Create keyframe styles for pulsating and gradient effects
    const style = document.createElement("style");
    style.textContent = `
    @keyframes pulsate {
      0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(213, 255, 106, 0.7);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(51, 178, 118, 0);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(213, 255, 106, 0);
      }
    }

    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;
    document.head.appendChild(style);
    // Apply animations to all contact buttons
    pulsatingButtons.forEach((button)=>{
        const buttonElement = button;
        buttonElement.style.animation = "pulsate 3s ease-in-out infinite";
        buttonElement.style.background = "linear-gradient( #33b276)";
        buttonElement.style.backgroundSize = "200% 200%";
        buttonElement.style.animation = "pulsate 3s ease-in-out infinite, gradientShift 6s ease infinite";
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"fGU4U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Exported function to initialize the scroll animation
parcelHelpers.export(exports, "initNavLogoScrollAnimation", ()=>initNavLogoScrollAnimation);
var _animejs = require("animejs");
// Helper: debounce function
function debounce(fn, delay) {
    let timeout;
    return (...args)=>{
        if (timeout) clearTimeout(timeout);
        timeout = window.setTimeout(()=>fn(...args), delay);
    };
}
const LOGO_SELECTOR = ".nav_logo";
const HEIGHT_TOP = "6.5rem";
const HEIGHT_SCROLLED = "4rem";
const SCROLL_THRESHOLD = 5;
function setLogoHeight(height) {
    const logo = document.querySelector(LOGO_SELECTOR);
    if (!logo) return;
    logo.style.height = height;
}
function animateLogoHeight(toHeight) {
    const logo = document.querySelector(LOGO_SELECTOR);
    if (!logo) return;
    (0, _animejs.animate)(logo, {
        height: toHeight,
        duration: 400,
        easing: "out(2)"
    });
}
function handleScroll() {
    const logo = document.querySelector(LOGO_SELECTOR);
    if (!logo) return;
    const scrollY = window.scrollY || window.pageYOffset;
    const atTop = scrollY <= SCROLL_THRESHOLD;
    const currentHeight = getComputedStyle(logo).height;
    const targetHeight = atTop ? HEIGHT_TOP : HEIGHT_SCROLLED;
    // Only animate if the height is different from the target
    if (atTop && currentHeight !== HEIGHT_TOP || !atTop && currentHeight !== HEIGHT_SCROLLED) animateLogoHeight(targetHeight);
}
function initNavLogoScrollAnimation() {
    setLogoHeight(HEIGHT_TOP);
    window.addEventListener("scroll", debounce(handleScroll, 10));
}

},{"animejs":"cB1Dv","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}],"f5ilB":[function(require,module,exports,__globalThis) {
// Type declaration for Calendly
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "contactPopup", ()=>contactPopup);
const contactPopup = ()=>{
    // Create the main contact popup container
    const createContactPopup = ()=>{
        const popup = document.createElement("div");
        popup.className = "floating-contact-popup";
        popup.innerHTML = `
      <div class="contact-popup-container">
        <!-- Main contact button (always visible) -->
        <div class="main-contact-button">
          <img src="https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/67bf7aa1075d0a8aedc77448_email-icon-fill.svg" 
               alt="Contact" class="contact-icon main-icon">
          <span class="contact-text">Kontakt</span>
        </div>
        
        <!-- Expandable contact options -->
        <div class="contact-options">
          <a href="https://wa.me/+491719045678" target="_blank" class="contact-option" data-tooltip="WhatsApp">
            <img src="https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/6809c8daab3e78356fc6f628_115679_whatsapp_icon.png" 
                 alt="WhatsApp" class="contact-icon">
          </a>
          
          <a href="tel:+494030376305" class="contact-option" data-tooltip="Anrufen">
            <img src="https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/67bf7aa1075d0a8aedc77444_phone-icon.svg" 
                 alt="Telefon" class="contact-icon">
          </a>
          
          <a href="mailto:service@forwardenergie.de?subject=Webseiten%20Anfrage" class="contact-option" data-tooltip="E-Mail">
            <img src="https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/67bf7aa1075d0a8aedc77448_email-icon-fill.svg" 
                 alt="E-Mail" class="contact-icon">
          </a>
          
          <a href="#" class="contact-option calendly-trigger" data-tooltip="Termin buchen">
            <img src="https://cdn.prod.website-files.com/67bf7aa1075d0a8aedc77401/6839e175b75cd3da5e6c2ae3_calendar%20(1).png" 
                 alt="Kalender" class="contact-icon">
          </a>
        </div>
      </div>
    `;
        // Add CSS styles
        const styles = `
      <style>
        .floating-contact-popup {
          position: fixed;
          bottom: 30px;
          left: 30px;
          z-index: 1000;
          font-family: inherit;
        }

        .contact-popup-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main-contact-button {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #41cc8a, #33b276);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .main-contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 123, 255, 0.4);
        }

        .main-contact-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .main-contact-button:hover::before {
          opacity: 1;
        }

        .main-icon {
          width: 24px;
          height: 24px;
          filter: brightness(0) invert(1);
          transition: transform 0.3s ease;
        }

        .contact-popup-container.expanded .main-icon {
          transform: rotate(45deg);
        }

        .contact-text {
          position: absolute;
          left: 70px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .contact-text::after {
          content: '';
          position: absolute;
          left: -5px;
          top: 50%;
          transform: translateY(-50%);
          border: 5px solid transparent;
          border-right-color: rgba(0, 0, 0, 0.8);
        }

        .main-contact-button:hover .contact-text {
          opacity: 1;
          transform: translateX(0);
        }

        .contact-options {
          position: absolute;
          bottom: 70px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .contact-option {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          position: relative;
        }

        .contact-option:hover {
          transform: translateY(-2px) scale(1.1);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .contact-option .contact-icon {
          width: 24px;
          height: 24px;
          transition: transform 0.3s ease;
        }

        .contact-option:hover .contact-icon {
          transform: scale(1.1);
        }

        /* Show options on hover/expanded state */
        .contact-popup-container:hover .contact-option,
        .contact-popup-container.expanded .contact-option {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Staggered animation delay for each option */
        .contact-option:nth-child(1) { transition-delay: 0.1s; }
        .contact-option:nth-child(2) { transition-delay: 0.15s; }
        .contact-option:nth-child(3) { transition-delay: 0.2s; }
        .contact-option:nth-child(4) { transition-delay: 0.25s; }

        /* Tooltip styles */
        .contact-option::before {
          content: attr(data-tooltip);
          position: absolute;
          left: 60px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 6px 10px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .contact-option::after {
          content: '';
          position: absolute;
          left: 50px;
          top: 50%;
          transform: translateY(-50%);
          border: 4px solid transparent;
          border-right-color: rgba(0, 0, 0, 0.8);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-option:hover::before,
        .contact-option:hover::after {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        .contact-option:hover::before {
          transform: translateX(0);
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .floating-contact-popup {
            bottom: 20px;
            left: 20px;
          }

          .main-contact-button {
            width: 55px;
            height: 55px;
          }

          .main-icon {
            width: 22px;
            height: 22px;
          }

          .contact-options {
            bottom: 65px;
          }

          .contact-option {
            width: 45px;
            height: 45px;
            z-index: 1001;
          }

          .contact-option .contact-icon {
            width: 20px;
            height: 20px;
          }

          /* Hide tooltips on mobile */
          .contact-text,
          .contact-option::before,
          .contact-option::after {
            display: none;
          }

          /* On mobile, disable hover and require click to expand */
          .contact-popup-container:hover .contact-option {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }

          .contact-popup-container.expanded .contact-option {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: auto;
          }

          .contact-popup-container:not(.expanded) .contact-option {
            pointer-events: none;
          }

          /* Ensure main button is always clickable */
          .main-contact-button {
            z-index: 1002;
            position: relative;
          }

          /* Add background overlay when expanded */
          .contact-popup-container.expanded::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.1);
            z-index: 999;
            pointer-events: auto;
          }
        }

        /* Pulse animation for main button */
        @keyframes pulse {
          0% { box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3); }
          50% { box-shadow: 0 4px 30px rgba(0, 123, 255, 0.5); }
          100% { box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3); }
        }

        .main-contact-button {
          animation: pulse 3s infinite;
        }
      </style>
    `;
        // Add styles to head
        document.head.insertAdjacentHTML("beforeend", styles);
        return popup;
    };
    // Initialize the contact popup
    const initContactPopup = ()=>{
        // Create and append new popup
        const popup = createContactPopup();
        document.body.appendChild(popup);
        // Add event listeners
        const container = popup.querySelector(".contact-popup-container");
        const mainButton = popup.querySelector(".main-contact-button");
        const calendlyTrigger = popup.querySelector(".calendly-trigger");
        // Handle mobile/tablet click behavior
        let isExpanded = false;
        const toggleExpanded = (e)=>{
            if (window.innerWidth <= 820) {
                e.preventDefault();
                e.stopPropagation();
                isExpanded = !isExpanded;
                container?.classList.toggle("expanded", isExpanded);
                // Add haptic feedback on mobile if available
                if ("vibrate" in navigator) navigator.vibrate(50);
            }
        };
        // Use both click and touchend for better mobile support
        mainButton?.addEventListener("click", toggleExpanded);
        mainButton?.addEventListener("touchend", (e)=>{
            e.preventDefault();
            toggleExpanded(e);
        });
        // Handle Calendly integration
        if (calendlyTrigger && window.Calendly) calendlyTrigger.addEventListener("click", (e)=>{
            e.preventDefault();
            window.Calendly?.initPopupWidget({
                url: "https://calendly.com/lulzim-1/30min"
            });
            // Close the popup after opening Calendly
            if (window.innerWidth <= 768) {
                isExpanded = false;
                container?.classList.remove("expanded");
            }
        });
        // Close expanded state when clicking outside or on overlay
        document.addEventListener("click", (e)=>{
            const target = e.target;
            if (window.innerWidth <= 768 && isExpanded) // Check if click is outside the popup or on the overlay
            {
                if (!popup.contains(target) || target === container?.querySelector("::before")) {
                    isExpanded = false;
                    container?.classList.remove("expanded");
                }
            }
        });
        // Also handle touch events for better mobile support
        document.addEventListener("touchend", (e)=>{
            const target = e.target;
            if (window.innerWidth <= 768 && isExpanded && !popup.contains(target)) {
                isExpanded = false;
                container?.classList.remove("expanded");
            }
        });
        // Handle window resize
        window.addEventListener("resize", ()=>{
            if (window.innerWidth > 768 && isExpanded) {
                isExpanded = false;
                container?.classList.remove("expanded");
            }
        });
    };
    // Initialize when DOM is ready
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initContactPopup);
    else initContactPopup();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},["jeTtx"], "jeTtx", "parcelRequirebdc0", {})

//# sourceMappingURL=app.js.map
