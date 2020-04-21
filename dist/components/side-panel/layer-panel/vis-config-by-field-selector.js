"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../../common/styled-components");

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _infoHelper = _interopRequireDefault(require("../../common/info-helper"));

var _dimensionScaleSelector = _interopRequireDefault(require("./dimension-scale-selector"));

var _utils = require("../../../utils/utils");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var VisConfigByFieldSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(VisConfigByFieldSelector, _Component);

  var _super = _createSuper(VisConfigByFieldSelector);

  function VisConfigByFieldSelector() {
    var _this;

    (0, _classCallCheck2["default"])(this, VisConfigByFieldSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateVisByField", function (val) {
      _this.props.updateField(val);
    });
    return _this;
  }

  (0, _createClass2["default"])(VisConfigByFieldSelector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          property = _this$props.property,
          showScale = _this$props.showScale,
          selectedField = _this$props.selectedField,
          description = _this$props.description,
          _this$props$scaleOpti = _this$props.scaleOptions,
          scaleOptions = _this$props$scaleOpti === void 0 ? [] : _this$props$scaleOpti;
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabelWrapper, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, this.props.label || "".concat((0, _utils.capitalizeFirstLetter)(property), " based on")), description && /*#__PURE__*/_react["default"].createElement(_infoHelper["default"], {
        description: description,
        id: "".concat(this.props.id, "-").concat(property)
      })), /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
        fields: this.props.fields,
        value: selectedField && selectedField.name,
        placeholder: this.props.placeholder,
        onSelect: this._updateVisByField,
        erasable: true
      })), /*#__PURE__*/_react["default"].createElement("div", null, showScale ? /*#__PURE__*/_react["default"].createElement(_dimensionScaleSelector["default"], {
        scaleType: this.props.scaleType,
        options: scaleOptions,
        label: "".concat(property, " scale"),
        onSelect: this.props.updateScale,
        disabled: scaleOptions.length < 2
      }) : null));
    }
  }]);
  return VisConfigByFieldSelector;
}(_react.Component);

exports["default"] = VisConfigByFieldSelector;
(0, _defineProperty2["default"])(VisConfigByFieldSelector, "propTypes", {
  channel: _propTypes["default"].string.isRequired,
  fields: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  id: _propTypes["default"].string.isRequired,
  property: _propTypes["default"].string.isRequired,
  showScale: _propTypes["default"].bool.isRequired,
  updateField: _propTypes["default"].func.isRequired,
  updateScale: _propTypes["default"].func.isRequired,
  // optional
  scaleType: _propTypes["default"].string,
  selectedField: _propTypes["default"].object,
  description: _propTypes["default"].string,
  label: _propTypes["default"].string,
  placeholder: _propTypes["default"].string
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvdmlzLWNvbmZpZy1ieS1maWVsZC1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IiLCJ2YWwiLCJwcm9wcyIsInVwZGF0ZUZpZWxkIiwicHJvcGVydHkiLCJzaG93U2NhbGUiLCJzZWxlY3RlZEZpZWxkIiwiZGVzY3JpcHRpb24iLCJzY2FsZU9wdGlvbnMiLCJsYWJlbCIsImlkIiwiZmllbGRzIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiX3VwZGF0ZVZpc0J5RmllbGQiLCJzY2FsZVR5cGUiLCJ1cGRhdGVTY2FsZSIsImxlbmd0aCIsIkNvbXBvbmVudCIsImNoYW5uZWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsImFueSIsImJvb2wiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFcUJBLHdCOzs7Ozs7Ozs7Ozs7Ozs7MEdBa0JDLFVBQUFDLEdBQUcsRUFBSTtBQUN6QixZQUFLQyxLQUFMLENBQVdDLFdBQVgsQ0FBdUJGLEdBQXZCO0FBQ0QsSzs7Ozs7OzZCQUVRO0FBQUEsd0JBQ3NFLEtBQUtDLEtBRDNFO0FBQUEsVUFDQUUsUUFEQSxlQUNBQSxRQURBO0FBQUEsVUFDVUMsU0FEVixlQUNVQSxTQURWO0FBQUEsVUFDcUJDLGFBRHJCLGVBQ3FCQSxhQURyQjtBQUFBLFVBQ29DQyxXQURwQyxlQUNvQ0EsV0FEcEM7QUFBQSw4Q0FDaURDLFlBRGpEO0FBQUEsVUFDaURBLFlBRGpELHNDQUNnRSxFQURoRTtBQUdQLDBCQUNFLGdDQUFDLGtDQUFELHFCQUNFLGdDQUFDLGtDQUFELHFCQUNFLGdDQUFDLG1DQUFELHFCQUNFLGdDQUFDLDRCQUFELFFBQ0csS0FBS04sS0FBTCxDQUFXTyxLQUFYLGNBQXVCLGtDQUFzQkwsUUFBdEIsQ0FBdkIsY0FESCxDQURGLEVBSUdHLFdBQVcsaUJBQ1YsZ0NBQUMsc0JBQUQ7QUFBWSxRQUFBLFdBQVcsRUFBRUEsV0FBekI7QUFBc0MsUUFBQSxFQUFFLFlBQUssS0FBS0wsS0FBTCxDQUFXUSxFQUFoQixjQUFzQk4sUUFBdEI7QUFBeEMsUUFMSixDQURGLGVBU0UsZ0NBQUMseUJBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRSxLQUFLRixLQUFMLENBQVdTLE1BRHJCO0FBRUUsUUFBQSxLQUFLLEVBQUVMLGFBQWEsSUFBSUEsYUFBYSxDQUFDTSxJQUZ4QztBQUdFLFFBQUEsV0FBVyxFQUFFLEtBQUtWLEtBQUwsQ0FBV1csV0FIMUI7QUFJRSxRQUFBLFFBQVEsRUFBRSxLQUFLQyxpQkFKakI7QUFLRSxRQUFBLFFBQVE7QUFMVixRQVRGLENBREYsZUFrQkUsNkNBQ0dULFNBQVMsZ0JBQ1IsZ0NBQUMsa0NBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSxLQUFLSCxLQUFMLENBQVdhLFNBRHhCO0FBRUUsUUFBQSxPQUFPLEVBQUVQLFlBRlg7QUFHRSxRQUFBLEtBQUssWUFBS0osUUFBTCxXQUhQO0FBSUUsUUFBQSxRQUFRLEVBQUUsS0FBS0YsS0FBTCxDQUFXYyxXQUp2QjtBQUtFLFFBQUEsUUFBUSxFQUFFUixZQUFZLENBQUNTLE1BQWIsR0FBc0I7QUFMbEMsUUFEUSxHQVFOLElBVE4sQ0FsQkYsQ0FERjtBQWdDRDs7O0VBekRtREMsZ0I7OztpQ0FBakNsQix3QixlQUNBO0FBQ2pCbUIsRUFBQUEsT0FBTyxFQUFFQyxzQkFBVUMsTUFBVixDQUFpQkMsVUFEVDtBQUVqQlgsRUFBQUEsTUFBTSxFQUFFUyxzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVJLEdBQTVCLEVBQWlDRixVQUZ4QjtBQUdqQlosRUFBQUEsRUFBRSxFQUFFVSxzQkFBVUMsTUFBVixDQUFpQkMsVUFISjtBQUlqQmxCLEVBQUFBLFFBQVEsRUFBRWdCLHNCQUFVQyxNQUFWLENBQWlCQyxVQUpWO0FBS2pCakIsRUFBQUEsU0FBUyxFQUFFZSxzQkFBVUssSUFBVixDQUFlSCxVQUxUO0FBTWpCbkIsRUFBQUEsV0FBVyxFQUFFaUIsc0JBQVVNLElBQVYsQ0FBZUosVUFOWDtBQU9qQk4sRUFBQUEsV0FBVyxFQUFFSSxzQkFBVU0sSUFBVixDQUFlSixVQVBYO0FBU2pCO0FBQ0FQLEVBQUFBLFNBQVMsRUFBRUssc0JBQVVDLE1BVko7QUFXakJmLEVBQUFBLGFBQWEsRUFBRWMsc0JBQVVPLE1BWFI7QUFZakJwQixFQUFBQSxXQUFXLEVBQUVhLHNCQUFVQyxNQVpOO0FBYWpCWixFQUFBQSxLQUFLLEVBQUVXLHNCQUFVQyxNQWJBO0FBY2pCUixFQUFBQSxXQUFXLEVBQUVPLHNCQUFVQztBQWROLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7UGFuZWxMYWJlbCwgUGFuZWxMYWJlbFdyYXBwZXIsIFNpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEZpZWxkU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vZmllbGQtc2VsZWN0b3InO1xyXG5pbXBvcnQgSW5mb0hlbHBlciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pbmZvLWhlbHBlcic7XHJcbmltcG9ydCBEaW1lbnNpb25TY2FsZVNlbGVjdG9yIGZyb20gJy4vZGltZW5zaW9uLXNjYWxlLXNlbGVjdG9yJztcclxuaW1wb3J0IHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJ9IGZyb20gJ3V0aWxzL3V0aWxzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGNoYW5uZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcclxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBwcm9wZXJ0eTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgc2hvd1NjYWxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgdXBkYXRlRmllbGQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICB1cGRhdGVTY2FsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuXHJcbiAgICAvLyBvcHRpb25hbFxyXG4gICAgc2NhbGVUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc2VsZWN0ZWRGaWVsZDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZ1xyXG4gIH07XHJcblxyXG4gIF91cGRhdGVWaXNCeUZpZWxkID0gdmFsID0+IHtcclxuICAgIHRoaXMucHJvcHMudXBkYXRlRmllbGQodmFsKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7cHJvcGVydHksIHNob3dTY2FsZSwgc2VsZWN0ZWRGaWVsZCwgZGVzY3JpcHRpb24sIHNjYWxlT3B0aW9ucyA9IFtdfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICA8UGFuZWxMYWJlbFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxQYW5lbExhYmVsPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsIHx8IGAke2NhcGl0YWxpemVGaXJzdExldHRlcihwcm9wZXJ0eSl9IGJhc2VkIG9uYH1cclxuICAgICAgICAgICAgPC9QYW5lbExhYmVsPlxyXG4gICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgICAgICAgIDxJbmZvSGVscGVyIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gaWQ9e2Ake3RoaXMucHJvcHMuaWR9LSR7cHJvcGVydHl9YH0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvUGFuZWxMYWJlbFdyYXBwZXI+XHJcbiAgICAgICAgICA8RmllbGRTZWxlY3RvclxyXG4gICAgICAgICAgICBmaWVsZHM9e3RoaXMucHJvcHMuZmllbGRzfVxyXG4gICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRGaWVsZCAmJiBzZWxlY3RlZEZpZWxkLm5hbWV9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5fdXBkYXRlVmlzQnlGaWVsZH1cclxuICAgICAgICAgICAgZXJhc2FibGVcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7c2hvd1NjYWxlID8gKFxyXG4gICAgICAgICAgICA8RGltZW5zaW9uU2NhbGVTZWxlY3RvclxyXG4gICAgICAgICAgICAgIHNjYWxlVHlwZT17dGhpcy5wcm9wcy5zY2FsZVR5cGV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17c2NhbGVPcHRpb25zfVxyXG4gICAgICAgICAgICAgIGxhYmVsPXtgJHtwcm9wZXJ0eX0gc2NhbGVgfVxyXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnByb3BzLnVwZGF0ZVNjYWxlfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzY2FsZU9wdGlvbnMubGVuZ3RoIDwgMn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=