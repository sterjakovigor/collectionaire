"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function () {
  var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  return new Rower(elements);
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rower = function () {
  function Rower(elements) {
    _classCallCheck(this, Rower);

    this._where = [];
    this._elements = [];

    this._elements = elements;
  }

  _createClass(Rower, [{
    key: "matched",
    value: function matched(element) {
      var score = {
        total: this._where.length,
        false: 0,
        true: 0
      };

      this._where.forEach(function (condition, index) {
        if (condition(element)) {
          score.true++;
        } else {
          score.false--;
        }
      });

      if (score.total == score.true) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "find",
    value: function find() {
      var _this = this;

      return this._elements.filter(function (element, index) {
        if (_this.matched(element)) {
          return true;
        } else {
          return false;
        }
      });
    }
  }, {
    key: "where",
    value: function where(callback) {
      this._where.push(callback);
      return this;
    }
  }, {
    key: "pluck",
    value: function pluck(key) {
      return this._elements.map(function (element, index) {
        return element[key];
      });
    }
  }, {
    key: "delete",
    value: function _delete() {
      var _this2 = this;

      return this._elements.filter(function (element, index) {
        if (_this2.matched(element)) {
          return false;
        } else {
          return true;
        }
      });
    }
  }, {
    key: "update",
    value: function update(newElement) {
      var _this3 = this;

      return this._elements.map(function (element, index) {
        if (_this3.matched(element)) {
          return _extends({ element: element }, newElement);
        } else {
          return element;
        }
      });
    }
  }, {
    key: "toggle",
    value: function toggle(options) {
      var _this4 = this;

      return this._elements.map(function (element, index) {
        var toggledElement = _extends({}, element);
        for (var key in options) {
          var first = options[key][0];
          var second = options[key][1];
          if (_this4.matched(element)) {
            toggledElement = _this4.toggleElement(toggledElement, key, first, second);
          }
        }
        return toggledElement;
      });
    }
  }, {
    key: "toggleElement",
    value: function toggleElement(element, key, first, second) {
      switch (element[key]) {
        case first:
          element[key] = second;
          break;
        case second:
          element[key] = first;
          break;
      }
      return element;
    }
  }]);

  return Rower;
}();

module.exports = exports["default"];