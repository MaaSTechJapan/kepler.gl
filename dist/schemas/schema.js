"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _window = require("global/window");

var _versions = require("./versions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Schema = /*#__PURE__*/function () {
  function Schema() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        version = _ref.version,
        key = _ref.key,
        properties = _ref.properties;

    (0, _classCallCheck2["default"])(this, Schema);
    this.version = version;
    this.properties = properties;
    this.key = key;
  }

  (0, _createClass2["default"])(Schema, [{
    key: "loadPropertiesOrApplySchema",
    value: function loadPropertiesOrApplySchema(node) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var accumulator = arguments.length > 2 ? arguments[2] : undefined;
      return this._getPropertyValueFromSchema('load', node, parents, accumulator);
    }
  }, {
    key: "savePropertiesOrApplySchema",
    value: function savePropertiesOrApplySchema(node) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var accumulator = arguments.length > 2 ? arguments[2] : undefined;
      return this._getPropertyValueFromSchema('save', node, parents, accumulator);
    }
  }, {
    key: "_getPropertyValueFromSchema",
    value: function _getPropertyValueFromSchema(operation, node) {
      var _this = this;

      var parents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var accumulator = arguments.length > 3 ? arguments[3] : undefined;
      var internal = "_".concat(operation);
      return (0, _defineProperty2["default"])({}, this.key, this.properties ? Object.keys(this.properties).reduce(function (accu, key) {
        return _objectSpread({}, accu, {}, key in node ? _this.properties[key] ? // if it's another schema
        _this.properties[key][operation] ? // call save or load
        _this.properties[key][internal](node[key], [].concat((0, _toConsumableArray2["default"])(parents), [node]), accu) : {} : (0, _defineProperty2["default"])({}, key, node[key]) : {});
      }, {}) : node);
    }
  }, {
    key: "_isCurrentVersion",
    value: function _isCurrentVersion() {
      return this.version === _versions.CURRENT_VERSION;
    }
  }, {
    key: "outdatedVersionError",
    value: function outdatedVersionError() {
      if (!this._isCurrentVersion()) {
        _window.console.error("".concat(this.key, " ").concat(this.version, " is outdated. save should not be called anymore"));
      }
    }
  }, {
    key: "_save",
    value: function _save() {
      // make sure nothing is saved to an outdated version
      this.outdatedVersionError();
      return this.save.apply(this, arguments);
    }
  }, {
    key: "save",
    value: function save(node) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var accumulator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.savePropertiesOrApplySchema(node, parents, accumulator);
    }
  }, {
    key: "_load",
    value: function _load() {
      return this.load.apply(this, arguments);
    }
  }, {
    key: "load",
    value: function load(node) {
      var parents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var accumulator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.loadPropertiesOrApplySchema(node, parents, accumulator);
    }
  }]);
  return Schema;
}();

exports["default"] = Schema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3NjaGVtYS5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJ2ZXJzaW9uIiwia2V5IiwicHJvcGVydGllcyIsIm5vZGUiLCJwYXJlbnRzIiwiYWNjdW11bGF0b3IiLCJfZ2V0UHJvcGVydHlWYWx1ZUZyb21TY2hlbWEiLCJvcGVyYXRpb24iLCJpbnRlcm5hbCIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1IiwiQ1VSUkVOVF9WRVJTSU9OIiwiX2lzQ3VycmVudFZlcnNpb24iLCJDb25zb2xlIiwiZXJyb3IiLCJvdXRkYXRlZFZlcnNpb25FcnJvciIsInNhdmUiLCJzYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEiLCJsb2FkIiwibG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFFQTs7Ozs7O0lBRXFCQSxNO0FBQ25CLG9CQUE2QztBQUFBLG1GQUFKLEVBQUk7QUFBQSxRQUFoQ0MsT0FBZ0MsUUFBaENBLE9BQWdDO0FBQUEsUUFBdkJDLEdBQXVCLFFBQXZCQSxHQUF1QjtBQUFBLFFBQWxCQyxVQUFrQixRQUFsQkEsVUFBa0I7O0FBQUE7QUFDM0MsU0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0UsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLRCxHQUFMLEdBQVdBLEdBQVg7QUFDRDs7OztnREFFMkJFLEksRUFBaUM7QUFBQSxVQUEzQkMsT0FBMkIsdUVBQWpCLEVBQWlCO0FBQUEsVUFBYkMsV0FBYTtBQUMzRCxhQUFPLEtBQUtDLDJCQUFMLENBQWlDLE1BQWpDLEVBQXlDSCxJQUF6QyxFQUErQ0MsT0FBL0MsRUFBd0RDLFdBQXhELENBQVA7QUFDRDs7O2dEQUUyQkYsSSxFQUFpQztBQUFBLFVBQTNCQyxPQUEyQix1RUFBakIsRUFBaUI7QUFBQSxVQUFiQyxXQUFhO0FBQzNELGFBQU8sS0FBS0MsMkJBQUwsQ0FBaUMsTUFBakMsRUFBeUNILElBQXpDLEVBQStDQyxPQUEvQyxFQUF3REMsV0FBeEQsQ0FBUDtBQUNEOzs7Z0RBRTJCRSxTLEVBQVdKLEksRUFBaUM7QUFBQTs7QUFBQSxVQUEzQkMsT0FBMkIsdUVBQWpCLEVBQWlCO0FBQUEsVUFBYkMsV0FBYTtBQUN0RSxVQUFNRyxRQUFRLGNBQU9ELFNBQVAsQ0FBZDtBQUNBLGtEQUNHLEtBQUtOLEdBRFIsRUFDYyxLQUFLQyxVQUFMLEdBQ1JPLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtSLFVBQWpCLEVBQTZCUyxNQUE3QixDQUFvQyxVQUFDQyxJQUFELEVBQU9YLEdBQVAsRUFBZTtBQUNqRCxpQ0FDS1csSUFETCxNQUVNWCxHQUFHLElBQUlFLElBQVAsR0FDQSxLQUFJLENBQUNELFVBQUwsQ0FBZ0JELEdBQWhCLElBQ0U7QUFDQSxRQUFBLEtBQUksQ0FBQ0MsVUFBTCxDQUFnQkQsR0FBaEIsRUFBcUJNLFNBQXJCLElBQ0U7QUFDQSxRQUFBLEtBQUksQ0FBQ0wsVUFBTCxDQUFnQkQsR0FBaEIsRUFBcUJPLFFBQXJCLEVBQStCTCxJQUFJLENBQUNGLEdBQUQsQ0FBbkMsZ0RBQThDRyxPQUE5QyxJQUF1REQsSUFBdkQsSUFBOERTLElBQTlELENBRkYsR0FHRSxFQUxKLHdDQU1JWCxHQU5KLEVBTVVFLElBQUksQ0FBQ0YsR0FBRCxDQU5kLENBREEsR0FRQSxFQVZOO0FBWUQsT0FiRCxFQWFHLEVBYkgsQ0FEUSxHQWVSRSxJQWhCTjtBQWtCRDs7O3dDQUVtQjtBQUNsQixhQUFPLEtBQUtILE9BQUwsS0FBaUJhLHlCQUF4QjtBQUNEOzs7MkNBRXNCO0FBQ3JCLFVBQUksQ0FBQyxLQUFLQyxpQkFBTCxFQUFMLEVBQStCO0FBQzdCQyx3QkFBUUMsS0FBUixXQUFpQixLQUFLZixHQUF0QixjQUE2QixLQUFLRCxPQUFsQztBQUNEO0FBQ0Y7Ozs0QkFFYztBQUNiO0FBQ0EsV0FBS2lCLG9CQUFMO0FBQ0EsYUFBTyxLQUFLQyxJQUFMLHVCQUFQO0FBQ0Q7Ozt5QkFFSWYsSSxFQUFzQztBQUFBLFVBQWhDQyxPQUFnQyx1RUFBdEIsRUFBc0I7QUFBQSxVQUFsQkMsV0FBa0IsdUVBQUosRUFBSTtBQUN6QyxhQUFPLEtBQUtjLDJCQUFMLENBQWlDaEIsSUFBakMsRUFBdUNDLE9BQXZDLEVBQWdEQyxXQUFoRCxDQUFQO0FBQ0Q7Ozs0QkFFYztBQUNiLGFBQU8sS0FBS2UsSUFBTCx1QkFBUDtBQUNEOzs7eUJBRUlqQixJLEVBQXNDO0FBQUEsVUFBaENDLE9BQWdDLHVFQUF0QixFQUFzQjtBQUFBLFVBQWxCQyxXQUFrQix1RUFBSixFQUFJO0FBQ3pDLGFBQU8sS0FBS2dCLDJCQUFMLENBQWlDbEIsSUFBakMsRUFBdUNDLE9BQXZDLEVBQWdEQyxXQUFoRCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5cbmltcG9ydCB7Q1VSUkVOVF9WRVJTSU9OfSBmcm9tICcuL3ZlcnNpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NoZW1hIHtcbiAgY29uc3RydWN0b3Ioe3ZlcnNpb24sIGtleSwgcHJvcGVydGllc30gPSB7fSkge1xuICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgfVxuXG4gIGxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShub2RlLCBwYXJlbnRzID0gW10sIGFjY3VtdWxhdG9yKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFByb3BlcnR5VmFsdWVGcm9tU2NoZW1hKCdsb2FkJywgbm9kZSwgcGFyZW50cywgYWNjdW11bGF0b3IpO1xuICB9XG5cbiAgc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKG5vZGUsIHBhcmVudHMgPSBbXSwgYWNjdW11bGF0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0UHJvcGVydHlWYWx1ZUZyb21TY2hlbWEoJ3NhdmUnLCBub2RlLCBwYXJlbnRzLCBhY2N1bXVsYXRvcik7XG4gIH1cblxuICBfZ2V0UHJvcGVydHlWYWx1ZUZyb21TY2hlbWEob3BlcmF0aW9uLCBub2RlLCBwYXJlbnRzID0gW10sIGFjY3VtdWxhdG9yKSB7XG4gICAgY29uc3QgaW50ZXJuYWwgPSBgXyR7b3BlcmF0aW9ufWA7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IHRoaXMucHJvcGVydGllc1xuICAgICAgICA/IE9iamVjdC5rZXlzKHRoaXMucHJvcGVydGllcykucmVkdWNlKChhY2N1LCBrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgICAgIC4uLihrZXkgaW4gbm9kZVxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgICAgICAgICAgID8gLy8gaWYgaXQncyBhbm90aGVyIHNjaGVtYVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnRpZXNba2V5XVtvcGVyYXRpb25dXG4gICAgICAgICAgICAgICAgICAgID8gLy8gY2FsbCBzYXZlIG9yIGxvYWRcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnRpZXNba2V5XVtpbnRlcm5hbF0obm9kZVtrZXldLCBbLi4ucGFyZW50cywgbm9kZV0sIGFjY3UpXG4gICAgICAgICAgICAgICAgICAgIDoge31cbiAgICAgICAgICAgICAgICAgIDoge1trZXldOiBub2RlW2tleV19XG4gICAgICAgICAgICAgICAgOiB7fSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSwge30pXG4gICAgICAgIDogbm9kZVxuICAgIH07XG4gIH1cblxuICBfaXNDdXJyZW50VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uID09PSBDVVJSRU5UX1ZFUlNJT047XG4gIH1cblxuICBvdXRkYXRlZFZlcnNpb25FcnJvcigpIHtcbiAgICBpZiAoIXRoaXMuX2lzQ3VycmVudFZlcnNpb24oKSkge1xuICAgICAgQ29uc29sZS5lcnJvcihgJHt0aGlzLmtleX0gJHt0aGlzLnZlcnNpb259IGlzIG91dGRhdGVkLiBzYXZlIHNob3VsZCBub3QgYmUgY2FsbGVkIGFueW1vcmVgKTtcbiAgICB9XG4gIH1cblxuICBfc2F2ZSguLi5hcmdzKSB7XG4gICAgLy8gbWFrZSBzdXJlIG5vdGhpbmcgaXMgc2F2ZWQgdG8gYW4gb3V0ZGF0ZWQgdmVyc2lvblxuICAgIHRoaXMub3V0ZGF0ZWRWZXJzaW9uRXJyb3IoKTtcbiAgICByZXR1cm4gdGhpcy5zYXZlKC4uLmFyZ3MpO1xuICB9XG5cbiAgc2F2ZShub2RlLCBwYXJlbnRzID0gW10sIGFjY3VtdWxhdG9yID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5zYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEobm9kZSwgcGFyZW50cywgYWNjdW11bGF0b3IpO1xuICB9XG5cbiAgX2xvYWQoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLmxvYWQoLi4uYXJncyk7XG4gIH1cblxuICBsb2FkKG5vZGUsIHBhcmVudHMgPSBbXSwgYWNjdW11bGF0b3IgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShub2RlLCBwYXJlbnRzLCBhY2N1bXVsYXRvcik7XG4gIH1cbn1cbiJdfQ==