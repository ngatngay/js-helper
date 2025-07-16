function isset(obj, path) {
    if (!obj || typeof obj !== "object") return false;

    var keys = path.split(".");
    for (var i = 0; i < keys.length; i++) {
        if (!obj.hasOwnProperty(keys[i])) return false;
        obj = obj[keys[i]];
        if (obj === undefined || obj === null) return false;
    }
    return true;
}

export { isset };