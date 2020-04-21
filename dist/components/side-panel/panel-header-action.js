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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: ", "px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n\n  &.disabled {\n    pointer-events: none;\n    opacity: 0.3;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var HeaderActionWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.flush ? 0 : 8;
}, function (props) {
  return props.active ? props.theme.panelHeaderIconActive : props.theme.panelHeaderIcon;
}, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.textColorHl;
}); // Need to use react class to access props.component


var PanelHeaderAction = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(PanelHeaderAction, _Component);

  var _super = _createSuper(PanelHeaderAction);

  function PanelHeaderAction() {
    (0, _classCallCheck2["default"])(this, PanelHeaderAction);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(PanelHeaderAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          tooltip = _this$props.tooltip,
          id = _this$props.id,
          active = _this$props.active,
          flush = _this$props.flush,
          hoverColor = _this$props.hoverColor,
          tooltipType = _this$props.tooltipType,
          disabled = _this$props.disabled,
          className = _this$props.className;
      return /*#__PURE__*/_react["default"].createElement(HeaderActionWrapper, {
        className: (0, _classnames2["default"])('panel--header__action', (0, _defineProperty2["default"])({
          disabled: disabled
        }, className, className)),
        active: active,
        hoverColor: hoverColor,
        flush: flush
      }, /*#__PURE__*/_react["default"].createElement(this.props.IconComponent, {
        "data-tip": true,
        "data-for": "".concat(tooltip, "_").concat(id),
        height: "18px",
        onClick: onClick
      }), tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
        id: "".concat(tooltip, "_").concat(id),
        effect: "solid",
        delayShow: 500,
        type: tooltipType
      }, /*#__PURE__*/_react["default"].createElement("span", null, tooltip)) : null);
    }
  }]);
  return PanelHeaderAction;
}(_react.Component);

exports["default"] = PanelHeaderAction;
(0, _defineProperty2["default"])(PanelHeaderAction, "propTypes", {
  id: _propTypes["default"].string,
  flush: _propTypes["default"].bool,
  tooltip: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  active: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  hoverColor: _propTypes["default"].string,
  className: _propTypes["default"].string,
  tooltipType: _propTypes["default"].string
});
(0, _defineProperty2["default"])(PanelHeaderAction, "defaultProps", {
  onClick: function onClick() {},
  hoverColor: null,
  active: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbi5qcyJdLCJuYW1lcyI6WyJIZWFkZXJBY3Rpb25XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJmbHVzaCIsImFjdGl2ZSIsInRoZW1lIiwicGFuZWxIZWFkZXJJY29uQWN0aXZlIiwicGFuZWxIZWFkZXJJY29uIiwiaG92ZXJDb2xvciIsInRleHRDb2xvckhsIiwiUGFuZWxIZWFkZXJBY3Rpb24iLCJvbkNsaWNrIiwidG9vbHRpcCIsImlkIiwidG9vbHRpcFR5cGUiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNSLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxDQUFkLEdBQWtCLENBQXZCO0FBQUEsQ0FERyxFQUlkLFVBQUFELEtBQUs7QUFBQSxTQUNaQSxLQUFLLENBQUNFLE1BQU4sR0FBZUYsS0FBSyxDQUFDRyxLQUFOLENBQVlDLHFCQUEzQixHQUFtREosS0FBSyxDQUFDRyxLQUFOLENBQVlFLGVBRG5EO0FBQUEsQ0FKUyxFQVNaLFVBQUFMLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNNLFVBQU4sR0FBbUJOLEtBQUssQ0FBQ0csS0FBTixDQUFZSCxLQUFLLENBQUNNLFVBQWxCLENBQW5CLEdBQW1ETixLQUFLLENBQUNHLEtBQU4sQ0FBWUksV0FBcEU7QUFBQSxDQVRPLENBQXpCLEMsQ0FrQkE7OztJQUNxQkMsaUI7Ozs7Ozs7Ozs7Ozs2QkFtQlY7QUFBQSx3QkFXSCxLQUFLUixLQVhGO0FBQUEsVUFFTFMsT0FGSyxlQUVMQSxPQUZLO0FBQUEsVUFHTEMsT0FISyxlQUdMQSxPQUhLO0FBQUEsVUFJTEMsRUFKSyxlQUlMQSxFQUpLO0FBQUEsVUFLTFQsTUFMSyxlQUtMQSxNQUxLO0FBQUEsVUFNTEQsS0FOSyxlQU1MQSxLQU5LO0FBQUEsVUFPTEssVUFQSyxlQU9MQSxVQVBLO0FBQUEsVUFRTE0sV0FSSyxlQVFMQSxXQVJLO0FBQUEsVUFTTEMsUUFUSyxlQVNMQSxRQVRLO0FBQUEsVUFVTEMsU0FWSyxlQVVMQSxTQVZLO0FBWVAsMEJBQ0UsZ0NBQUMsbUJBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSw2QkFBVyx1QkFBWDtBQUFxQ0QsVUFBQUEsUUFBUSxFQUFSQTtBQUFyQyxXQUFnREMsU0FBaEQsRUFBNERBLFNBQTVELEVBRGI7QUFFRSxRQUFBLE1BQU0sRUFBRVosTUFGVjtBQUdFLFFBQUEsVUFBVSxFQUFFSSxVQUhkO0FBSUUsUUFBQSxLQUFLLEVBQUVMO0FBSlQsc0JBTUUscUNBQU0sS0FBTixDQUFZLGFBQVo7QUFDRSx3QkFERjtBQUVFLDhCQUFhUyxPQUFiLGNBQXdCQyxFQUF4QixDQUZGO0FBR0UsUUFBQSxNQUFNLEVBQUMsTUFIVDtBQUlFLFFBQUEsT0FBTyxFQUFFRjtBQUpYLFFBTkYsRUFZR0MsT0FBTyxnQkFDTixnQ0FBQywwQkFBRDtBQUFTLFFBQUEsRUFBRSxZQUFLQSxPQUFMLGNBQWdCQyxFQUFoQixDQUFYO0FBQWlDLFFBQUEsTUFBTSxFQUFDLE9BQXhDO0FBQWdELFFBQUEsU0FBUyxFQUFFLEdBQTNEO0FBQWdFLFFBQUEsSUFBSSxFQUFFQztBQUF0RSxzQkFDRSw4Q0FBT0YsT0FBUCxDQURGLENBRE0sR0FJSixJQWhCTixDQURGO0FBb0JEOzs7RUFuRDRDSyxnQjs7O2lDQUExQlAsaUIsZUFDQTtBQUNqQkcsRUFBQUEsRUFBRSxFQUFFSyxzQkFBVUMsTUFERztBQUVqQmhCLEVBQUFBLEtBQUssRUFBRWUsc0JBQVVFLElBRkE7QUFHakJSLEVBQUFBLE9BQU8sRUFBRU0sc0JBQVVDLE1BSEY7QUFJakJSLEVBQUFBLE9BQU8sRUFBRU8sc0JBQVVHLElBSkY7QUFLakJqQixFQUFBQSxNQUFNLEVBQUVjLHNCQUFVRSxJQUxEO0FBTWpCTCxFQUFBQSxRQUFRLEVBQUVHLHNCQUFVRSxJQU5IO0FBT2pCWixFQUFBQSxVQUFVLEVBQUVVLHNCQUFVQyxNQVBMO0FBUWpCSCxFQUFBQSxTQUFTLEVBQUVFLHNCQUFVQyxNQVJKO0FBU2pCTCxFQUFBQSxXQUFXLEVBQUVJLHNCQUFVQztBQVROLEM7aUNBREFULGlCLGtCQWFHO0FBQ3BCQyxFQUFBQSxPQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQURHO0FBRXBCSCxFQUFBQSxVQUFVLEVBQUUsSUFGUTtBQUdwQkosRUFBQUEsTUFBTSxFQUFFO0FBSFksQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgSGVhZGVyQWN0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gKHByb3BzLmZsdXNoID8gMCA6IDgpfXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUucGFuZWxIZWFkZXJJY29uQWN0aXZlIDogcHJvcHMudGhlbWUucGFuZWxIZWFkZXJJY29ufTtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5ob3ZlckNvbG9yID8gcHJvcHMudGhlbWVbcHJvcHMuaG92ZXJDb2xvcl0gOiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbCl9O1xyXG4gIH1cclxuXHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbmA7XHJcblxyXG4vLyBOZWVkIHRvIHVzZSByZWFjdCBjbGFzcyB0byBhY2Nlc3MgcHJvcHMuY29tcG9uZW50XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsSGVhZGVyQWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBmbHVzaDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICB0b29sdGlwOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgaG92ZXJDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRvb2x0aXBUeXBlOiBQcm9wVHlwZXMuc3RyaW5nXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxyXG4gICAgaG92ZXJDb2xvcjogbnVsbCxcclxuICAgIGFjdGl2ZTogZmFsc2VcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG9uQ2xpY2ssXHJcbiAgICAgIHRvb2x0aXAsXHJcbiAgICAgIGlkLFxyXG4gICAgICBhY3RpdmUsXHJcbiAgICAgIGZsdXNoLFxyXG4gICAgICBob3ZlckNvbG9yLFxyXG4gICAgICB0b29sdGlwVHlwZSxcclxuICAgICAgZGlzYWJsZWQsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SGVhZGVyQWN0aW9uV3JhcHBlclxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncGFuZWwtLWhlYWRlcl9fYWN0aW9uJywge2Rpc2FibGVkLCBbY2xhc3NOYW1lXTogY2xhc3NOYW1lfSl9XHJcbiAgICAgICAgYWN0aXZlPXthY3RpdmV9XHJcbiAgICAgICAgaG92ZXJDb2xvcj17aG92ZXJDb2xvcn1cclxuICAgICAgICBmbHVzaD17Zmx1c2h9XHJcbiAgICAgID5cclxuICAgICAgICA8dGhpcy5wcm9wcy5JY29uQ29tcG9uZW50XHJcbiAgICAgICAgICBkYXRhLXRpcFxyXG4gICAgICAgICAgZGF0YS1mb3I9e2Ake3Rvb2x0aXB9XyR7aWR9YH1cclxuICAgICAgICAgIGhlaWdodD1cIjE4cHhcIlxyXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAvPlxyXG4gICAgICAgIHt0b29sdGlwID8gKFxyXG4gICAgICAgICAgPFRvb2x0aXAgaWQ9e2Ake3Rvb2x0aXB9XyR7aWR9YH0gZWZmZWN0PVwic29saWRcIiBkZWxheVNob3c9ezUwMH0gdHlwZT17dG9vbHRpcFR5cGV9PlxyXG4gICAgICAgICAgICA8c3Bhbj57dG9vbHRpcH08L3NwYW4+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvSGVhZGVyQWN0aW9uV3JhcHBlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==