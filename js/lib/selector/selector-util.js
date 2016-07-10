window._ = (function () {
    'use strict';
    function extend2(obj1, obj2) {
        var result = {};

        for (var key in obj1) result[key] = obj1[key];
        for (var key in obj2) result[key] = obj2[key];

        return result;
    }

    function extend() {
        if (arguments.length === 0) return {};
        if (arguments.length === 1) return arguments[0];

        var result = extend2(arguments[0], arguments[1]);
        for (var i = 2; i < arguments.length; i++) result = extend2(result, arguments[i]);
        return result;
    }

    var NOOP = function () {
        return undefined;
    };

    return {
        extend: extend,
        noop: NOOP
    };
})();
