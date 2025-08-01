import {
  computed,
  defineAsyncComponent,
  onMounted,
  onUnmounted,
  useTemplateRef
} from "./chunk-XQNPNIQJ.js";
import {
  __publicField
} from "./chunk-JVWSFFO4.js";

// node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/types/index.ts
import "E:/代码/vitepress/node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/style/components-var.css";

// node_modules/.pnpm/iconify-icon@3.0.0/node_modules/iconify-icon/dist/iconify-icon.mjs
var defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
var defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
var defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
var defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
var defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
var defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
var separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
var defaultCustomisations = {
  ...defaultIconCustomisations,
  preserveAspectRatio: ""
};
function getCustomisations(node) {
  const customisations = {
    ...defaultCustomisations
  };
  const attr = (key, def) => node.getAttribute(key) || def;
  customisations.width = attr("width", null);
  customisations.height = attr("height", null);
  customisations.rotate = rotateFromString(attr("rotate", ""));
  flipFromString(customisations, attr("flip", ""));
  customisations.preserveAspectRatio = attr("preserveAspectRatio", attr("preserveaspectratio", ""));
  return customisations;
}
function haveCustomisationsChanged(value1, value2) {
  for (const key in defaultCustomisations) {
    if (value1[key] !== value2[key]) {
      return true;
    }
  }
  return false;
}
var matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
var stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
var validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
  // Check name: cannot be empty
  ((allowSimpleName && icon.prefix === "" || !!icon.prefix) && !!icon.name);
};
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
var optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (
      // Name cannot be empty
      !name || // Must have body
      typeof icon.body !== "string" || // Check other props
      !checkOptionalProps(
        icon,
        defaultExtendedIconProps
      )
    ) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (
      // Name cannot be empty
      !name || // Parent must be set and point to existing icon
      typeof parent !== "string" || !icons[parent] && !aliases[parent] || // Check other props
      !checkOptionalProps(
        icon,
        defaultExtendedIconProps
      )
    ) {
      return null;
    }
  }
  return data;
}
var dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage2, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing.add(name);
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
function listIcons$1(provider, prefix) {
  let allIcons = [];
  const providers = typeof provider === "string" ? [provider] : Object.keys(dataStorage);
  providers.forEach((provider2) => {
    const prefixes = typeof provider2 === "string" && typeof prefix === "string" ? [prefix] : Object.keys(dataStorage[provider2] || {});
    prefixes.forEach((prefix2) => {
      const storage2 = getStorage(provider2, prefix2);
      allIcons = allIcons.concat(
        Object.keys(storage2.icons).map(
          (name) => (provider2 !== "" ? "@" + provider2 + ":" : "") + prefix2 + ":" + name
        )
      );
    });
  });
  return allIcons;
}
var simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage2 = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
  }
}
function addIcon$1(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  if (data) {
    return addIconToStorage(storage2, icon.name, data);
  } else {
    storage2.missing.add(icon.name);
    return true;
  }
}
function addCollection$1(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (addIcon$1(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, prefix);
  return !!addIconSet(storage2, data);
}
function iconLoaded$1(name) {
  return !!getIconData(name);
}
function getIcon$1(name) {
  const result = getIconData(name);
  return result ? {
    ...defaultIconProps,
    ...result
  } : result;
}
function sortIcons(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage2 = /* @__PURE__ */ Object.create(null);
  icons.sort((a, b) => {
    if (a.provider !== b.provider) {
      return a.provider.localeCompare(b.provider);
    }
    if (a.prefix !== b.prefix) {
      return a.prefix.localeCompare(b.prefix);
    }
    return a.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const providerStorage = storage2[provider] || (storage2[provider] = /* @__PURE__ */ Object.create(null));
    const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
    let list;
    if (name in localStorage.icons) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing.has(name)) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}
function removeCallback(storages, id) {
  storages.forEach((storage2) => {
    const items = storage2.loaderCallbacks;
    if (items) {
      storage2.loaderCallbacks = items.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks(storage2) {
  if (!storage2.pendingCallbacksFlag) {
    storage2.pendingCallbacksFlag = true;
    setTimeout(() => {
      storage2.pendingCallbacksFlag = false;
      const items = storage2.loaderCallbacks ? storage2.loaderCallbacks.slice(0) : [];
      if (!items.length) {
        return;
      }
      let hasPending = false;
      const provider = storage2.provider;
      const prefix = storage2.prefix;
      items.forEach((item) => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage2.icons[name]) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage2.missing.has(name)) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([storage2], item.id);
          }
          item.callback(
            icons.loaded.slice(0),
            icons.missing.slice(0),
            icons.pending.slice(0),
            item.abort
          );
        }
      });
    });
  }
}
var idCounter = 0;
function storeCallback(callback, icons, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback,
    abort
  };
  pendingSources.forEach((storage2) => {
    (storage2.loaderCallbacks || (storage2.loaderCallbacks = [])).push(item);
  });
  return abort;
}
var storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function getAPIModule(provider) {
  return storage[provider] || storage[""];
}
function listToIcons(list, validate = true, simpleNames2 = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames2) : item;
    if (icon) {
      result.push(icon);
    }
  });
  return result;
}
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};
function sendQuery(config, payload, query, done) {
  const resourcesCount = config.resources.length;
  const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
  let resources;
  if (config.random) {
    let list = config.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function subscribe(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue.length,
      subscribe,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback) => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function moduleResponse(item, response, data) {
    const isError = response !== "success";
    queue = queue.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data;
      if (!queue.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config.random) {
      const index = config.resources.indexOf(item.resource);
      if (index !== -1 && index !== config.index) {
        config.index = index;
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback) => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data) => {
        moduleResponse(item, status2, data);
      }
    };
    queue.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}
function initRedundancy(cfg) {
  const config = {
    ...defaultConfig,
    ...cfg
  };
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(
      config,
      payload,
      queryCallback,
      (data, error) => {
        cleanup();
        if (doneCallback) {
          doneCallback(data, error);
        }
      }
    );
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    return queries.find((value) => {
      return callback(value);
    }) || null;
  }
  const instance = {
    query,
    find,
    setIndex: (index) => {
      config.index = index;
    },
    getIndex: () => config.index,
    cleanup
  };
  return instance;
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
var configStorage = /* @__PURE__ */ Object.create(null);
var fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
var fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider$1(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
function listAPIProviders() {
  return Object.keys(configStorage);
}
function emptyCallback$1() {
}
var redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(provider) {
  if (!redundancyCache[provider]) {
    const config = getAPIConfig(provider);
    if (!config) {
      return;
    }
    const redundancy = initRedundancy(config);
    const cachedReundancy = {
      config,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
  let redundancy;
  let send2;
  if (typeof target === "string") {
    const api = getAPIModule(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    send2 = api.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config = createAPIConfig(target);
    if (config) {
      redundancy = initRedundancy(config);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule(moduleKey);
      if (api) {
        send2 = api.send;
      }
    }
  }
  if (!redundancy || !send2) {
    callback(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send2, callback)().abort;
}
function emptyCallback() {
}
function loadedNewIcons(storage2) {
  if (!storage2.iconsLoaderFlag) {
    storage2.iconsLoaderFlag = true;
    setTimeout(() => {
      storage2.iconsLoaderFlag = false;
      updateCallbacks(storage2);
    });
  }
}
function checkIconNamesForAPI(icons) {
  const valid = [];
  const invalid = [];
  icons.forEach((name) => {
    (name.match(matchIconName) ? valid : invalid).push(name);
  });
  return {
    valid,
    invalid
  };
}
function parseLoaderResponse(storage2, icons, data) {
  function checkMissing() {
    const pending = storage2.pendingIcons;
    icons.forEach((name) => {
      if (pending) {
        pending.delete(name);
      }
      if (!storage2.icons[name]) {
        storage2.missing.add(name);
      }
    });
  }
  if (data && typeof data === "object") {
    try {
      const parsed = addIconSet(storage2, data);
      if (!parsed.length) {
        checkMissing();
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }
  checkMissing();
  loadedNewIcons(storage2);
}
function parsePossiblyAsyncResponse(response, callback) {
  if (response instanceof Promise) {
    response.then((data) => {
      callback(data);
    }).catch(() => {
      callback(null);
    });
  } else {
    callback(response);
  }
}
function loadNewIcons(storage2, icons) {
  if (!storage2.iconsToLoad) {
    storage2.iconsToLoad = icons;
  } else {
    storage2.iconsToLoad = storage2.iconsToLoad.concat(icons).sort();
  }
  if (!storage2.iconsQueueFlag) {
    storage2.iconsQueueFlag = true;
    setTimeout(() => {
      storage2.iconsQueueFlag = false;
      const { provider, prefix } = storage2;
      const icons2 = storage2.iconsToLoad;
      delete storage2.iconsToLoad;
      if (!icons2 || !icons2.length) {
        return;
      }
      const customIconLoader = storage2.loadIcon;
      if (storage2.loadIcons && (icons2.length > 1 || !customIconLoader)) {
        parsePossiblyAsyncResponse(
          storage2.loadIcons(icons2, prefix, provider),
          (data) => {
            parseLoaderResponse(storage2, icons2, data);
          }
        );
        return;
      }
      if (customIconLoader) {
        icons2.forEach((name) => {
          const response = customIconLoader(name, prefix, provider);
          parsePossiblyAsyncResponse(response, (data) => {
            const iconSet = data ? {
              prefix,
              icons: {
                [name]: data
              }
            } : null;
            parseLoaderResponse(storage2, [name], iconSet);
          });
        });
        return;
      }
      const { valid, invalid } = checkIconNamesForAPI(icons2);
      if (invalid.length) {
        parseLoaderResponse(storage2, invalid, null);
      }
      if (!valid.length) {
        return;
      }
      const api = prefix.match(matchIconName) ? getAPIModule(provider) : null;
      if (!api) {
        parseLoaderResponse(storage2, valid, null);
        return;
      }
      const params = api.prepare(provider, prefix, valid);
      params.forEach((item) => {
        sendAPIQuery(provider, item, (data) => {
          parseLoaderResponse(storage2, item.icons, data);
        });
      });
    });
  }
}
var loadIcons$1 = (icons, callback) => {
  const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(
            sortedIcons.loaded,
            sortedIcons.missing,
            sortedIcons.pending,
            emptyCallback
          );
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */ Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix } = icon;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push(getStorage(provider, prefix));
    const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
    if (!providerNewIcons[prefix]) {
      providerNewIcons[prefix] = [];
    }
  });
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix, name } = icon;
    const storage2 = getStorage(provider, prefix);
    const pendingQueue = storage2.pendingIcons || (storage2.pendingIcons = /* @__PURE__ */ new Set());
    if (!pendingQueue.has(name)) {
      pendingQueue.add(name);
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((storage2) => {
    const list = newIcons[storage2.provider][storage2.prefix];
    if (list.length) {
      loadNewIcons(storage2, list);
    }
  });
  return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
var loadIcon$1 = (icon) => {
  return new Promise((fulfill, reject) => {
    const iconObj = typeof icon === "string" ? stringToIcon(icon, true) : icon;
    if (!iconObj) {
      reject(icon);
      return;
    }
    loadIcons$1([iconObj || icon], (loaded) => {
      if (loaded.length && iconObj) {
        const data = getIconData(iconObj);
        if (data) {
          fulfill({
            ...defaultIconProps,
            ...data
          });
          return;
        }
      }
      reject(icon);
    });
  });
};
function testIconObject(value) {
  try {
    const obj = typeof value === "string" ? JSON.parse(value) : value;
    if (typeof obj.body === "string") {
      return {
        ...obj
      };
    }
  } catch (err) {
  }
}
function parseIconValue(value, onload) {
  if (typeof value === "object") {
    const data2 = testIconObject(value);
    return {
      data: data2,
      value
    };
  }
  if (typeof value !== "string") {
    return {
      value
    };
  }
  if (value.includes("{")) {
    const data2 = testIconObject(value);
    if (data2) {
      return {
        data: data2,
        value
      };
    }
  }
  const name = stringToIcon(value, true, true);
  if (!name) {
    return {
      value
    };
  }
  const data = getIconData(name);
  if (data !== void 0 || !name.prefix) {
    return {
      value,
      name,
      data
      // could be 'null' -> icon is missing
    };
  }
  const loading = loadIcons$1([name], () => onload(value, name, getIconData(name)));
  return {
    value,
    name,
    loading
  };
}
var isBuggedSafari = false;
try {
  isBuggedSafari = navigator.vendor.indexOf("Apple") === 0;
} catch (err) {
}
function getRenderMode(body, mode) {
  switch (mode) {
    case "svg":
    case "bg":
    case "mask":
      return mode;
  }
  if (mode !== "style" && (isBuggedSafari || body.indexOf("<a") === -1)) {
    return "svg";
  }
  return body.indexOf("currentColor") === -1 ? "bg" : "mask";
}
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize$1(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}
var isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize$1(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize$1(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}
function iconToHTML$1(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL$1(svg) {
  return 'url("' + svgToData(svg) + '")';
}
var detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
var fetchModule = detectFetch();
function setFetch(fetch2) {
  fetchModule = fetch2;
}
function getFetch() {
  return fetchModule;
}
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
var prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index) => {
    length += name.length + 1;
    if (length >= maxLength && index > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
var send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
var fetchAPIModule = {
  prepare,
  send
};
function setCustomIconsLoader$1(loader, prefix, provider) {
  getStorage(provider || "", prefix).loadIcons = loader;
}
function setCustomIconLoader$1(loader, prefix, provider) {
  getStorage(provider || "", prefix).loadIcon = loader;
}
var nodeAttr = "data-style";
var customStyle = "";
function appendCustomStyle(style) {
  customStyle = style;
}
function updateStyle(parent, inline) {
  let styleNode = Array.from(parent.childNodes).find((node) => node.hasAttribute && node.hasAttribute(nodeAttr));
  if (!styleNode) {
    styleNode = document.createElement("style");
    styleNode.setAttribute(nodeAttr, nodeAttr);
    parent.appendChild(styleNode);
  }
  styleNode.textContent = ":host{display:inline-block;vertical-align:" + (inline ? "-0.125em" : "0") + "}span,svg{display:block;margin:auto}" + customStyle;
}
function exportFunctions() {
  setAPIModule("", fetchAPIModule);
  allowSimpleNames(true);
  let _window;
  try {
    _window = window;
  } catch (err) {
  }
  if (_window) {
    if (_window.IconifyPreload !== void 0) {
      const preload = _window.IconifyPreload;
      const err = "Invalid IconifyPreload syntax.";
      if (typeof preload === "object" && preload !== null) {
        (preload instanceof Array ? preload : [preload]).forEach((item) => {
          try {
            if (
              // Check if item is an object and not null/array
              typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
              typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
              !addCollection$1(item)
            ) {
              console.error(err);
            }
          } catch (e) {
            console.error(err);
          }
        });
      }
    }
    if (_window.IconifyProviders !== void 0) {
      const providers = _window.IconifyProviders;
      if (typeof providers === "object" && providers !== null) {
        for (const key in providers) {
          const err = "IconifyProviders[" + key + "] is invalid.";
          try {
            const value = providers[key];
            if (typeof value !== "object" || !value || value.resources === void 0) {
              continue;
            }
            if (!addAPIProvider$1(key, value)) {
              console.error(err);
            }
          } catch (e) {
            console.error(err);
          }
        }
      }
    }
  }
  const _api2 = {
    getAPIConfig,
    setAPIModule,
    sendAPIQuery,
    setFetch,
    getFetch,
    listAPIProviders
  };
  return {
    iconLoaded: iconLoaded$1,
    getIcon: getIcon$1,
    listIcons: listIcons$1,
    addIcon: addIcon$1,
    addCollection: addCollection$1,
    calculateSize: calculateSize$1,
    buildIcon: iconToSVG,
    iconToHTML: iconToHTML$1,
    svgToURL: svgToURL$1,
    loadIcons: loadIcons$1,
    loadIcon: loadIcon$1,
    addAPIProvider: addAPIProvider$1,
    setCustomIconLoader: setCustomIconLoader$1,
    setCustomIconsLoader: setCustomIconsLoader$1,
    appendCustomStyle,
    _api: _api2
  };
}
var monotoneProps = {
  "background-color": "currentColor"
};
var coloredProps = {
  "background-color": "transparent"
};
var propsToAdd = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
};
var propsToAddTo = {
  "-webkit-mask": monotoneProps,
  "mask": monotoneProps,
  "background": coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + "-" + prop] = propsToAdd[prop];
  }
}
function fixSize(value) {
  return value ? value + (value.match(/^[-0-9.]+$/) ? "px" : "") : "inherit";
}
function renderSPAN(data, icon, useMask) {
  const node = document.createElement("span");
  let body = data.body;
  if (body.indexOf("<a") !== -1) {
    body += "<!-- " + Date.now() + " -->";
  }
  const renderAttribs = data.attributes;
  const html = iconToHTML$1(body, {
    ...renderAttribs,
    width: icon.width + "",
    height: icon.height + ""
  });
  const url = svgToURL$1(html);
  const svgStyle = node.style;
  const styles = {
    "--svg": url,
    "width": fixSize(renderAttribs.width),
    "height": fixSize(renderAttribs.height),
    ...useMask ? monotoneProps : coloredProps
  };
  for (const prop in styles) {
    svgStyle.setProperty(prop, styles[prop]);
  }
  return node;
}
var policy;
function createPolicy() {
  try {
    policy = window.trustedTypes.createPolicy("iconify", {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      createHTML: (s) => s
    });
  } catch (err) {
    policy = null;
  }
}
function cleanUpInnerHTML(html) {
  if (policy === void 0) {
    createPolicy();
  }
  return policy ? policy.createHTML(html) : html;
}
function renderSVG(data) {
  const node = document.createElement("span");
  const attr = data.attributes;
  let style = "";
  if (!attr.width) {
    style = "width: inherit;";
  }
  if (!attr.height) {
    style += "height: inherit;";
  }
  if (style) {
    attr.style = style;
  }
  const html = iconToHTML$1(data.body, attr);
  node.innerHTML = cleanUpInnerHTML(html);
  return node.firstChild;
}
function findIconElement(parent) {
  return Array.from(parent.childNodes).find((node) => {
    const tag = node.tagName && node.tagName.toUpperCase();
    return tag === "SPAN" || tag === "SVG";
  });
}
function renderIcon(parent, state) {
  const iconData = state.icon.data;
  const customisations = state.customisations;
  const renderData = iconToSVG(iconData, customisations);
  if (customisations.preserveAspectRatio) {
    renderData.attributes["preserveAspectRatio"] = customisations.preserveAspectRatio;
  }
  const mode = state.renderedMode;
  let node;
  switch (mode) {
    case "svg":
      node = renderSVG(renderData);
      break;
    default:
      node = renderSPAN(renderData, {
        ...defaultIconProps,
        ...iconData
      }, mode === "mask");
  }
  const oldNode = findIconElement(parent);
  if (oldNode) {
    if (node.tagName === "SPAN" && oldNode.tagName === node.tagName) {
      oldNode.setAttribute("style", node.getAttribute("style"));
    } else {
      parent.replaceChild(node, oldNode);
    }
  } else {
    parent.appendChild(node);
  }
}
function setPendingState(icon, inline, lastState) {
  const lastRender = lastState && (lastState.rendered ? lastState : lastState.lastRender);
  return {
    rendered: false,
    inline,
    icon,
    lastRender
  };
}
function defineIconifyIcon(name = "iconify-icon") {
  let customElements;
  let ParentClass;
  try {
    customElements = window.customElements;
    ParentClass = window.HTMLElement;
  } catch (err) {
    return;
  }
  if (!customElements || !ParentClass) {
    return;
  }
  const ConflictingClass = customElements.get(name);
  if (ConflictingClass) {
    return ConflictingClass;
  }
  const attributes = [
    // Icon
    "icon",
    // Mode
    "mode",
    "inline",
    "noobserver",
    // Customisations
    "width",
    "height",
    "rotate",
    "flip"
  ];
  const IconifyIcon = class extends ParentClass {
    /**
     * Constructor
     */
    constructor() {
      super();
      // Root
      __publicField(this, "_shadowRoot");
      // Initialised
      __publicField(this, "_initialised", false);
      // Icon state
      __publicField(this, "_state");
      // Attributes check queued
      __publicField(this, "_checkQueued", false);
      // Connected
      __publicField(this, "_connected", false);
      // Observer
      __publicField(this, "_observer", null);
      __publicField(this, "_visible", true);
      const root = this._shadowRoot = this.attachShadow({
        mode: "open"
      });
      const inline = this.hasAttribute("inline");
      updateStyle(root, inline);
      this._state = setPendingState({
        value: ""
      }, inline);
      this._queueCheck();
    }
    /**
     * Connected to DOM
     */
    connectedCallback() {
      this._connected = true;
      this.startObserver();
    }
    /**
     * Disconnected from DOM
     */
    disconnectedCallback() {
      this._connected = false;
      this.stopObserver();
    }
    /**
     * Observed attributes
     */
    static get observedAttributes() {
      return attributes.slice(0);
    }
    /**
     * Observed properties that are different from attributes
     *
     * Experimental! Need to test with various frameworks that support it
     */
    /*
    static get properties() {
        return {
            inline: {
                type: Boolean,
                reflect: true,
            },
            // Not listing other attributes because they are strings or combination
            // of string and another type. Cannot have multiple types
        };
    }
    */
    /**
     * Attribute has changed
     */
    attributeChangedCallback(name2) {
      switch (name2) {
        case "inline": {
          const newInline = this.hasAttribute("inline");
          const state = this._state;
          if (newInline !== state.inline) {
            state.inline = newInline;
            updateStyle(this._shadowRoot, newInline);
          }
          break;
        }
        case "noobserver": {
          const value = this.hasAttribute("noobserver");
          if (value) {
            this.startObserver();
          } else {
            this.stopObserver();
          }
          break;
        }
        default:
          this._queueCheck();
      }
    }
    /**
     * Get/set icon
     */
    get icon() {
      const value = this.getAttribute("icon");
      if (value && value.slice(0, 1) === "{") {
        try {
          return JSON.parse(value);
        } catch (err) {
        }
      }
      return value;
    }
    set icon(value) {
      if (typeof value === "object") {
        value = JSON.stringify(value);
      }
      this.setAttribute("icon", value);
    }
    /**
     * Get/set inline
     */
    get inline() {
      return this.hasAttribute("inline");
    }
    set inline(value) {
      if (value) {
        this.setAttribute("inline", "true");
      } else {
        this.removeAttribute("inline");
      }
    }
    /**
     * Get/set observer
     */
    get observer() {
      return this.hasAttribute("observer");
    }
    set observer(value) {
      if (value) {
        this.setAttribute("observer", "true");
      } else {
        this.removeAttribute("observer");
      }
    }
    /**
     * Restart animation
     */
    restartAnimation() {
      const state = this._state;
      if (state.rendered) {
        const root = this._shadowRoot;
        if (state.renderedMode === "svg") {
          try {
            root.lastChild.setCurrentTime(0);
            return;
          } catch (err) {
          }
        }
        renderIcon(root, state);
      }
    }
    /**
     * Get status
     */
    get status() {
      const state = this._state;
      return state.rendered ? "rendered" : state.icon.data === null ? "failed" : "loading";
    }
    /**
     * Queue attributes re-check
     */
    _queueCheck() {
      if (!this._checkQueued) {
        this._checkQueued = true;
        setTimeout(() => {
          this._check();
        });
      }
    }
    /**
     * Check for changes
     */
    _check() {
      if (!this._checkQueued) {
        return;
      }
      this._checkQueued = false;
      const state = this._state;
      const newIcon = this.getAttribute("icon");
      if (newIcon !== state.icon.value) {
        this._iconChanged(newIcon);
        return;
      }
      if (!state.rendered || !this._visible) {
        return;
      }
      const mode = this.getAttribute("mode");
      const customisations = getCustomisations(this);
      if (state.attrMode !== mode || haveCustomisationsChanged(state.customisations, customisations) || !findIconElement(this._shadowRoot)) {
        this._renderIcon(state.icon, customisations, mode);
      }
    }
    /**
     * Icon value has changed
     */
    _iconChanged(newValue) {
      const icon = parseIconValue(newValue, (value, name2, data) => {
        const state = this._state;
        if (state.rendered || this.getAttribute("icon") !== value) {
          return;
        }
        const icon2 = {
          value,
          name: name2,
          data
        };
        if (icon2.data) {
          this._gotIconData(icon2);
        } else {
          state.icon = icon2;
        }
      });
      if (icon.data) {
        this._gotIconData(icon);
      } else {
        this._state = setPendingState(icon, this._state.inline, this._state);
      }
    }
    /**
     * Force render icon on state change
     */
    _forceRender() {
      if (!this._visible) {
        const node = findIconElement(this._shadowRoot);
        if (node) {
          this._shadowRoot.removeChild(node);
        }
        return;
      }
      this._queueCheck();
    }
    /**
     * Got new icon data, icon is ready to (re)render
     */
    _gotIconData(icon) {
      this._checkQueued = false;
      this._renderIcon(icon, getCustomisations(this), this.getAttribute("mode"));
    }
    /**
     * Re-render based on icon data
     */
    _renderIcon(icon, customisations, attrMode) {
      const renderedMode = getRenderMode(icon.data.body, attrMode);
      const inline = this._state.inline;
      renderIcon(this._shadowRoot, this._state = {
        rendered: true,
        icon,
        inline,
        customisations,
        attrMode,
        renderedMode
      });
    }
    /**
     * Start observer
     */
    startObserver() {
      if (!this._observer && !this.hasAttribute("noobserver")) {
        try {
          this._observer = new IntersectionObserver((entries) => {
            const intersecting = entries.some((entry) => entry.isIntersecting);
            if (intersecting !== this._visible) {
              this._visible = intersecting;
              this._forceRender();
            }
          });
          this._observer.observe(this);
        } catch (err) {
          if (this._observer) {
            try {
              this._observer.disconnect();
            } catch (err2) {
            }
            this._observer = null;
          }
        }
      }
    }
    /**
     * Stop observer
     */
    stopObserver() {
      if (this._observer) {
        this._observer.disconnect();
        this._observer = null;
        this._visible = true;
        if (this._connected) {
          this._forceRender();
        }
      }
    }
  };
  attributes.forEach((attr) => {
    if (!(attr in IconifyIcon.prototype)) {
      Object.defineProperty(IconifyIcon.prototype, attr, {
        get: function() {
          return this.getAttribute(attr);
        },
        set: function(value) {
          if (value !== null) {
            this.setAttribute(attr, value);
          } else {
            this.removeAttribute(attr);
          }
        }
      });
    }
  });
  const functions = exportFunctions();
  for (const key in functions) {
    IconifyIcon[key] = IconifyIcon.prototype[key] = functions[key];
  }
  customElements.define(name, IconifyIcon);
  return IconifyIcon;
}
var IconifyIconComponent = defineIconifyIcon() || exportFunctions();
var { iconLoaded, getIcon, listIcons, addIcon, addCollection, calculateSize, buildIcon, iconToHTML, svgToURL, loadIcons, loadIcon, setCustomIconLoader, setCustomIconsLoader, addAPIProvider, _api } = IconifyIconComponent;

// node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/components/index.ts
import { default as default2 } from "E:/代码/vitepress/node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/components/LmNotice.vue";
import { default as default3 } from "E:/代码/vitepress/node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/components/LmAside.vue";
import { default as default4 } from "E:/代码/vitepress/node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/components/LmPill.vue";
import { default as default5 } from "E:/代码/vitepress/node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/components/LmBoxCube.vue";
import { default as default6 } from "E:/代码/vitepress/node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/components/LmCard.vue";
import { default as default7 } from "E:/代码/vitepress/node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/components/LmLinks.vue";
import { default as default8 } from "E:/代码/vitepress/node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/components/LmVid.vue";
import { default as default9 } from "E:/代码/vitepress/node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/components/LmFooter.vue";
import { default as default10 } from "E:/代码/vitepress/node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/components/LmUnderline.vue";
var Waline = defineAsyncComponent(() => import("E:/代码/vitepress/node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/components/LmWaline.vue"));

// node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/composables/baiduAnalytics.ts
import { inBrowser } from "vitepress";
function baiduAnalytics(options) {
  var _a;
  const { baiduId } = options;
  if (!inBrowser) return;
  if (!baiduId) {
    console.warn("警告：百度统计 ID 缺失，统计数据将无法生效");
    return;
  }
  if (!document.querySelector(`#analytics-plugin-${baiduId}`)) {
    window._hmt = window._hmt || [];
    const script = document.createElement("script");
    script.id = `analytics-plugin-${baiduId}`;
    script.async = true;
    script.src = `https://hm.baidu.com/hm.js?${baiduId}`;
    (_a = document.querySelector("head")) == null ? void 0 : _a.appendChild(script);
  }
}
function trackPageview(baiduId, pageUrl) {
  if (!inBrowser) return;
  if (!pageUrl || typeof pageUrl !== "string") pageUrl = "/";
  if (pageUrl.startsWith("http")) {
    const urlFragment = pageUrl.split("/");
    const origin = `${urlFragment[0]}//${urlFragment[2]}`;
    pageUrl = pageUrl.replace(origin, "");
  }
  if (window._hmt) {
    window._hmt.push(["_setAccount", baiduId]);
    window._hmt.push(["_trackPageview", pageUrl]);
  }
}

// node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/composables/googleAnalytics.ts
var googleAnalytics_default = ({ id }) => {
  if (false) mountGoogleAnalytics(id);
};

// node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/composables/umamiAnalytics.ts
function mountUmami(options) {
  if (true) {
    return;
  }
  let properties = [];
  if (Array.isArray(options)) {
    properties.push(...options);
  } else {
    properties.push(options);
  }
  properties = properties.filter((property) => Boolean(property.id));
  if (!properties.length) return;
  for (const property of properties) {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.setAttribute("data-website-id", property.id);
    if (property.domains) {
      script.setAttribute("data-domains", property.domains);
    }
    script.src = property.src;
    document.head.appendChild(script);
  }
}
var umamiAnalytics_default = (options) => {
  if (typeof window !== "undefined") {
    mountUmami(options);
  }
};

// node_modules/.pnpm/@theojs+lumen@6.3.1_vue@3.5.17_typescript@5.8.3_/node_modules/@theojs/lumen/composables/utils.ts
import { useData } from "vitepress";
var useNotice = () => {
  const { frontmatter } = useData();
  return computed(() => {
    var _a;
    return (_a = frontmatter.value.hero) == null ? void 0 : _a.Notice;
  });
};
var EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;
function isExternal(path) {
  return EXTERNAL_URL_RE.test(path);
}
function moveDomElements(refName, targetSelector = ".VPHero .text") {
  const elementRef = useTemplateRef(refName);
  let placeholder = null;
  onMounted(() => {
    const target = document.querySelector(targetSelector);
    if (target && elementRef.value) {
      placeholder = document.createComment("moveDomElements-placeholder");
      elementRef.value.before(placeholder);
      target.innerHTML = "";
      target.appendChild(elementRef.value);
    }
  });
  onUnmounted(() => {
    var _a;
    elementRef.value && ((_a = placeholder == null ? void 0 : placeholder.parentNode) == null ? void 0 : _a.replaceChild(elementRef.value, placeholder));
  });
}
var video = {
  bilibili: {
    src: (id) => `https://player.bilibili.com/player.html?bvid=${id}&autoplay=0`,
    title: "Bilibili video player"
  },
  tencent: {
    src: (id) => `https://v.qq.com/txp/iframe/player.html?vid=${id}`,
    title: "Tencent Video player"
  },
  youku: {
    src: (id) => `https://player.youku.com/embed/${id}`,
    title: "Youku video player"
  },
  youtube: {
    src: (id) => `https://www.youtube-nocookie.com/embed/${id}`,
    title: "YouTube video player"
  },
  vimeo: {
    src: (id) => `https://player.vimeo.com/video/${id}`,
    title: "Vimeo video player"
  }
};
function getVideo(props) {
  if (props.is && props.id) return video[props.is];
  if (props.id) return video.youtube;
  return { src: props.src || "", title: "Custom video player" };
}
function getLocaleKey() {
  const { localeIndex } = useData();
  return computed(() => localeIndex.value);
}
export {
  default3 as Aside,
  default5 as BoxCube,
  default6 as Card,
  EXTERNAL_URL_RE,
  default9 as Footer,
  default7 as Links,
  default2 as Notice,
  default4 as Pill,
  default10 as Underline,
  default8 as Vid,
  Waline,
  baiduAnalytics,
  getLocaleKey,
  getVideo,
  googleAnalytics_default as googleAnalytics,
  isExternal,
  moveDomElements,
  trackPageview,
  umamiAnalytics_default as umamiAnalytics,
  useNotice,
  video
};
/*! Bundled license information:

iconify-icon/dist/iconify-icon.mjs:
  (**
  * (c) Iconify
  *
  * For the full copyright and license information, please view the license.txt
  * files at https://github.com/iconify/iconify
  *
  * Licensed under MIT.
  *
  * @license MIT
  * @version 3.0.0
  *)
*/
//# sourceMappingURL=@theojs_lumen.js.map
