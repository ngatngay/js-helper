function object(obj) {
  return {
    has: function (key) {
      var keys = key.split(".");
      var current = obj;
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (!Object.prototype.hasOwnProperty.call(current, k)) {
          return false;
        }
        current = current[k];
      }
      return true;
    },
    get: function (key, default_value) {
      if (default_value === undefined) {
        default_value = null;
      }
      var keys = key.split(".");
      var current = obj;
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (!Object.prototype.hasOwnProperty.call(current, k)) {
          return default_value;
        }
        current = current[k];
      }
      return current;
    },
    get_json_string: function() {
      return JSON.stringify(obj);
    }
  };
}

export { object };
