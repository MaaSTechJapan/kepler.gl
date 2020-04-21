"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper component in modals contain cloud providers.
 * It set default provider by checking which provider has logged in
 * @component
 */
var ProviderModalContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ProviderModalContainer, _Component);

  var _super = _createSuper(ProviderModalContainer);

  function ProviderModalContainer() {
    (0, _classCallCheck2["default"])(this, ProviderModalContainer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ProviderModalContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setDefaultProvider();
    }
  }, {
    key: "_setDefaultProvider",
    value: function _setDefaultProvider() {
      if (!this.props.currentProvider && this.props.cloudProviders.length) {
        var connected = this.props.cloudProviders.find(function (p) {
          return typeof p.getAccessToken === 'function' && p.getAccessToken();
        });

        if (connected && typeof this.props.onSetCloudProvider === 'function') {
          this.props.onSetCloudProvider(connected.name);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.props.children);
    }
  }]);
  return ProviderModalContainer;
}(_react.Component);

exports["default"] = ProviderModalContainer;
(0, _defineProperty2["default"])(ProviderModalContainer, "propTypes", {
  onSetCloudProvider: _propTypes["default"].func.isRequired,
  cloudProviders: _propTypes["default"].arrayOf(_propTypes["default"].object),
  currentProvider: _propTypes["default"].string
});
(0, _defineProperty2["default"])(ProviderModalContainer, "defaultProps", {
  cloudProviders: [],
  currentProvider: null
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9wcm92aWRlci1tb2RhbC1jb250YWluZXIuanMiXSwibmFtZXMiOlsiUHJvdmlkZXJNb2RhbENvbnRhaW5lciIsIl9zZXREZWZhdWx0UHJvdmlkZXIiLCJwcm9wcyIsImN1cnJlbnRQcm92aWRlciIsImNsb3VkUHJvdmlkZXJzIiwibGVuZ3RoIiwiY29ubmVjdGVkIiwiZmluZCIsInAiLCJnZXRBY2Nlc3NUb2tlbiIsIm9uU2V0Q2xvdWRQcm92aWRlciIsIm5hbWUiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7OztBQUVBOzs7OztJQUtxQkEsc0I7Ozs7Ozs7Ozs7Ozt3Q0FZQztBQUNsQixXQUFLQyxtQkFBTDtBQUNEOzs7MENBRXFCO0FBQ3BCLFVBQUksQ0FBQyxLQUFLQyxLQUFMLENBQVdDLGVBQVosSUFBK0IsS0FBS0QsS0FBTCxDQUFXRSxjQUFYLENBQTBCQyxNQUE3RCxFQUFxRTtBQUNuRSxZQUFNQyxTQUFTLEdBQUcsS0FBS0osS0FBTCxDQUFXRSxjQUFYLENBQTBCRyxJQUExQixDQUNoQixVQUFBQyxDQUFDO0FBQUEsaUJBQUksT0FBT0EsQ0FBQyxDQUFDQyxjQUFULEtBQTRCLFVBQTVCLElBQTBDRCxDQUFDLENBQUNDLGNBQUYsRUFBOUM7QUFBQSxTQURlLENBQWxCOztBQUlBLFlBQUlILFNBQVMsSUFBSSxPQUFPLEtBQUtKLEtBQUwsQ0FBV1Esa0JBQWxCLEtBQXlDLFVBQTFELEVBQXNFO0FBQ3BFLGVBQUtSLEtBQUwsQ0FBV1Esa0JBQVgsQ0FBOEJKLFNBQVMsQ0FBQ0ssSUFBeEM7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFFUTtBQUNQLDBCQUFPLGtFQUFHLEtBQUtULEtBQUwsQ0FBV1UsUUFBZCxDQUFQO0FBQ0Q7OztFQTlCaURDLGdCOzs7aUNBQS9CYixzQixlQUNBO0FBQ2pCVSxFQUFBQSxrQkFBa0IsRUFBRUksc0JBQVVDLElBQVYsQ0FBZUMsVUFEbEI7QUFFakJaLEVBQUFBLGNBQWMsRUFBRVUsc0JBQVVHLE9BQVYsQ0FBa0JILHNCQUFVSSxNQUE1QixDQUZDO0FBR2pCZixFQUFBQSxlQUFlLEVBQUVXLHNCQUFVSztBQUhWLEM7aUNBREFuQixzQixrQkFPRztBQUNwQkksRUFBQUEsY0FBYyxFQUFFLEVBREk7QUFFcEJELEVBQUFBLGVBQWUsRUFBRTtBQUZHLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBBIHdyYXBwZXIgY29tcG9uZW50IGluIG1vZGFscyBjb250YWluIGNsb3VkIHByb3ZpZGVycy5cclxuICogSXQgc2V0IGRlZmF1bHQgcHJvdmlkZXIgYnkgY2hlY2tpbmcgd2hpY2ggcHJvdmlkZXIgaGFzIGxvZ2dlZCBpblxyXG4gKiBAY29tcG9uZW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm92aWRlck1vZGFsQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgb25TZXRDbG91ZFByb3ZpZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgY2xvdWRQcm92aWRlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgY3VycmVudFByb3ZpZGVyOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGNsb3VkUHJvdmlkZXJzOiBbXSxcclxuICAgIGN1cnJlbnRQcm92aWRlcjogbnVsbFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5fc2V0RGVmYXVsdFByb3ZpZGVyKCk7XHJcbiAgfVxyXG5cclxuICBfc2V0RGVmYXVsdFByb3ZpZGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLmN1cnJlbnRQcm92aWRlciAmJiB0aGlzLnByb3BzLmNsb3VkUHJvdmlkZXJzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBjb25uZWN0ZWQgPSB0aGlzLnByb3BzLmNsb3VkUHJvdmlkZXJzLmZpbmQoXHJcbiAgICAgICAgcCA9PiB0eXBlb2YgcC5nZXRBY2Nlc3NUb2tlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBwLmdldEFjY2Vzc1Rva2VuKClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChjb25uZWN0ZWQgJiYgdHlwZW9mIHRoaXMucHJvcHMub25TZXRDbG91ZFByb3ZpZGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNldENsb3VkUHJvdmlkZXIoY29ubmVjdGVkLm5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPD57dGhpcy5wcm9wcy5jaGlsZHJlbn08Lz47XHJcbiAgfVxyXG59XHJcbiJdfQ==