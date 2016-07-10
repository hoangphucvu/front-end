window.Selector = (function () {
    'use strict';
    function Selector(elements) {
        this.elements = elements;
    }

    Selector.prototype.find = function (selector) {
        return $(selector, this.elements[0]);
    };

    Selector.prototype.empty = function () {
        this.elements.forEach(function (element) {
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        })
    };

    Selector.prototype.append = function (node) {
        this.elements.forEach(function (element) {
            element.appendChild(node);
        })
    };

    var $ = function (selector, parent) {
        Selector.prototype = _.extend(Selector.prototype, window.Selector.plugins);
        return new Selector((parent || document).querySelectorAll(selector));
    };
    $.plugins = {};
    return $;
})();