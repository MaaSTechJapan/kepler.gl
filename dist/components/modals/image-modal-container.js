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

var _lodash = _interopRequireDefault(require("lodash.get"));

var _defaultSettings = require("../../constants/default-settings");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper component in modals contain a image preview of the map with cloud providers
 * It sets export image size based on provider thumbnail size
 * @component
 */
var ImageModalContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ImageModalContainer, _Component);

  var _super = _createSuper(ImageModalContainer);

  function ImageModalContainer() {
    (0, _classCallCheck2["default"])(this, ImageModalContainer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ImageModalContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._updateThumbSize(true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // set thumbnail size if provider changes
      if (this.props.currentProvider !== prevProps.currentProvider && this.props.currentProvider) {
        this._updateThumbSize();
      }
    }
  }, {
    key: "_updateThumbSize",
    value: function _updateThumbSize(initialMount) {
      var _this = this;

      if (this.props.currentProvider && this.props.cloudProviders.length) {
        var provider = this.props.cloudProviders.find(function (p) {
          return p.name === _this.props.currentProvider;
        });

        if (provider && provider.thumbnail) {
          this.props.onUpdateImageSetting({
            mapW: (0, _lodash["default"])(provider, ['thumbnail', 'width']) || _defaultSettings.MAP_THUMBNAIL_DIMENSION.width,
            mapH: (0, _lodash["default"])(provider, ['thumbnail', 'height']) || _defaultSettings.MAP_THUMBNAIL_DIMENSION.height,
            ratio: _defaultSettings.EXPORT_IMG_RATIOS.CUSTOM,
            legend: false
          });
        }
      } else if (initialMount) {
        this.props.onUpdateImageSetting({
          mapW: _defaultSettings.MAP_THUMBNAIL_DIMENSION.width,
          mapH: _defaultSettings.MAP_THUMBNAIL_DIMENSION.height,
          ratio: _defaultSettings.EXPORT_IMG_RATIOS.CUSTOM
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.props.children);
    }
  }]);
  return ImageModalContainer;
}(_react.Component);

exports["default"] = ImageModalContainer;
(0, _defineProperty2["default"])(ImageModalContainer, "propTypes", {
  onUpdateImageSetting: _propTypes["default"].func.isRequired,
  cloudProviders: _propTypes["default"].arrayOf(_propTypes["default"].object),
  currentProvider: _propTypes["default"].string
});
(0, _defineProperty2["default"])(ImageModalContainer, "defaultProps", {
  cloudProviders: [],
  currentProvider: null
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9pbWFnZS1tb2RhbC1jb250YWluZXIuanMiXSwibmFtZXMiOlsiSW1hZ2VNb2RhbENvbnRhaW5lciIsIl91cGRhdGVUaHVtYlNpemUiLCJwcmV2UHJvcHMiLCJwcm9wcyIsImN1cnJlbnRQcm92aWRlciIsImluaXRpYWxNb3VudCIsImNsb3VkUHJvdmlkZXJzIiwibGVuZ3RoIiwicHJvdmlkZXIiLCJmaW5kIiwicCIsIm5hbWUiLCJ0aHVtYm5haWwiLCJvblVwZGF0ZUltYWdlU2V0dGluZyIsIm1hcFciLCJNQVBfVEhVTUJOQUlMX0RJTUVOU0lPTiIsIndpZHRoIiwibWFwSCIsImhlaWdodCIsInJhdGlvIiwiRVhQT1JUX0lNR19SQVRJT1MiLCJDVVNUT00iLCJsZWdlbmQiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBOzs7OztJQUtxQkEsbUI7Ozs7Ozs7Ozs7Ozt3Q0FZQztBQUNsQixXQUFLQyxnQkFBTCxDQUFzQixJQUF0QjtBQUNEOzs7dUNBRWtCQyxTLEVBQVc7QUFDNUI7QUFDQSxVQUFJLEtBQUtDLEtBQUwsQ0FBV0MsZUFBWCxLQUErQkYsU0FBUyxDQUFDRSxlQUF6QyxJQUE0RCxLQUFLRCxLQUFMLENBQVdDLGVBQTNFLEVBQTRGO0FBQzFGLGFBQUtILGdCQUFMO0FBQ0Q7QUFDRjs7O3FDQUVnQkksWSxFQUFjO0FBQUE7O0FBQzdCLFVBQUksS0FBS0YsS0FBTCxDQUFXQyxlQUFYLElBQThCLEtBQUtELEtBQUwsQ0FBV0csY0FBWCxDQUEwQkMsTUFBNUQsRUFBb0U7QUFDbEUsWUFBTUMsUUFBUSxHQUFHLEtBQUtMLEtBQUwsQ0FBV0csY0FBWCxDQUEwQkcsSUFBMUIsQ0FBK0IsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNDLElBQUYsS0FBVyxLQUFJLENBQUNSLEtBQUwsQ0FBV0MsZUFBMUI7QUFBQSxTQUFoQyxDQUFqQjs7QUFFQSxZQUFJSSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0ksU0FBekIsRUFBb0M7QUFDbEMsZUFBS1QsS0FBTCxDQUFXVSxvQkFBWCxDQUFnQztBQUM5QkMsWUFBQUEsSUFBSSxFQUFFLHdCQUFJTixRQUFKLEVBQWMsQ0FBQyxXQUFELEVBQWMsT0FBZCxDQUFkLEtBQXlDTyx5Q0FBd0JDLEtBRHpDO0FBRTlCQyxZQUFBQSxJQUFJLEVBQUUsd0JBQUlULFFBQUosRUFBYyxDQUFDLFdBQUQsRUFBYyxRQUFkLENBQWQsS0FBMENPLHlDQUF3QkcsTUFGMUM7QUFHOUJDLFlBQUFBLEtBQUssRUFBRUMsbUNBQWtCQyxNQUhLO0FBSTlCQyxZQUFBQSxNQUFNLEVBQUU7QUFKc0IsV0FBaEM7QUFNRDtBQUNGLE9BWEQsTUFXTyxJQUFJakIsWUFBSixFQUFrQjtBQUN2QixhQUFLRixLQUFMLENBQVdVLG9CQUFYLENBQWdDO0FBQzlCQyxVQUFBQSxJQUFJLEVBQUVDLHlDQUF3QkMsS0FEQTtBQUU5QkMsVUFBQUEsSUFBSSxFQUFFRix5Q0FBd0JHLE1BRkE7QUFHOUJDLFVBQUFBLEtBQUssRUFBRUMsbUNBQWtCQztBQUhLLFNBQWhDO0FBS0Q7QUFDRjs7OzZCQUVRO0FBQ1AsMEJBQU8sa0VBQUcsS0FBS2xCLEtBQUwsQ0FBV29CLFFBQWQsQ0FBUDtBQUNEOzs7RUE5QzhDQyxnQjs7O2lDQUE1QnhCLG1CLGVBQ0E7QUFDakJhLEVBQUFBLG9CQUFvQixFQUFFWSxzQkFBVUMsSUFBVixDQUFlQyxVQURwQjtBQUVqQnJCLEVBQUFBLGNBQWMsRUFBRW1CLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUksTUFBNUIsQ0FGQztBQUdqQnpCLEVBQUFBLGVBQWUsRUFBRXFCLHNCQUFVSztBQUhWLEM7aUNBREE5QixtQixrQkFPRztBQUNwQk0sRUFBQUEsY0FBYyxFQUFFLEVBREk7QUFFcEJGLEVBQUFBLGVBQWUsRUFBRTtBQUZHLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcclxuXHJcbmltcG9ydCB7TUFQX1RIVU1CTkFJTF9ESU1FTlNJT04sIEVYUE9SVF9JTUdfUkFUSU9TfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG4vKipcclxuICogQSB3cmFwcGVyIGNvbXBvbmVudCBpbiBtb2RhbHMgY29udGFpbiBhIGltYWdlIHByZXZpZXcgb2YgdGhlIG1hcCB3aXRoIGNsb3VkIHByb3ZpZGVyc1xyXG4gKiBJdCBzZXRzIGV4cG9ydCBpbWFnZSBzaXplIGJhc2VkIG9uIHByb3ZpZGVyIHRodW1ibmFpbCBzaXplXHJcbiAqIEBjb21wb25lbnRcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlTW9kYWxDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICBvblVwZGF0ZUltYWdlU2V0dGluZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGNsb3VkUHJvdmlkZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIGN1cnJlbnRQcm92aWRlcjogUHJvcFR5cGVzLnN0cmluZ1xyXG4gIH07XHJcblxyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBjbG91ZFByb3ZpZGVyczogW10sXHJcbiAgICBjdXJyZW50UHJvdmlkZXI6IG51bGxcclxuICB9O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuX3VwZGF0ZVRodW1iU2l6ZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIC8vIHNldCB0aHVtYm5haWwgc2l6ZSBpZiBwcm92aWRlciBjaGFuZ2VzXHJcbiAgICBpZiAodGhpcy5wcm9wcy5jdXJyZW50UHJvdmlkZXIgIT09IHByZXZQcm9wcy5jdXJyZW50UHJvdmlkZXIgJiYgdGhpcy5wcm9wcy5jdXJyZW50UHJvdmlkZXIpIHtcclxuICAgICAgdGhpcy5fdXBkYXRlVGh1bWJTaXplKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlVGh1bWJTaXplKGluaXRpYWxNb3VudCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY3VycmVudFByb3ZpZGVyICYmIHRoaXMucHJvcHMuY2xvdWRQcm92aWRlcnMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5wcm9wcy5jbG91ZFByb3ZpZGVycy5maW5kKHAgPT4gcC5uYW1lID09PSB0aGlzLnByb3BzLmN1cnJlbnRQcm92aWRlcik7XHJcblxyXG4gICAgICBpZiAocHJvdmlkZXIgJiYgcHJvdmlkZXIudGh1bWJuYWlsKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZUltYWdlU2V0dGluZyh7XHJcbiAgICAgICAgICBtYXBXOiBnZXQocHJvdmlkZXIsIFsndGh1bWJuYWlsJywgJ3dpZHRoJ10pIHx8IE1BUF9USFVNQk5BSUxfRElNRU5TSU9OLndpZHRoLFxyXG4gICAgICAgICAgbWFwSDogZ2V0KHByb3ZpZGVyLCBbJ3RodW1ibmFpbCcsICdoZWlnaHQnXSkgfHwgTUFQX1RIVU1CTkFJTF9ESU1FTlNJT04uaGVpZ2h0LFxyXG4gICAgICAgICAgcmF0aW86IEVYUE9SVF9JTUdfUkFUSU9TLkNVU1RPTSxcclxuICAgICAgICAgIGxlZ2VuZDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChpbml0aWFsTW91bnQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZUltYWdlU2V0dGluZyh7XHJcbiAgICAgICAgbWFwVzogTUFQX1RIVU1CTkFJTF9ESU1FTlNJT04ud2lkdGgsXHJcbiAgICAgICAgbWFwSDogTUFQX1RIVU1CTkFJTF9ESU1FTlNJT04uaGVpZ2h0LFxyXG4gICAgICAgIHJhdGlvOiBFWFBPUlRfSU1HX1JBVElPUy5DVVNUT01cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPD57dGhpcy5wcm9wcy5jaGlsZHJlbn08Lz47XHJcbiAgfVxyXG59XHJcbiJdfQ==