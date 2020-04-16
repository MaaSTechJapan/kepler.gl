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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbi5qcyJdLCJuYW1lcyI6WyJIZWFkZXJBY3Rpb25XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJmbHVzaCIsImFjdGl2ZSIsInRoZW1lIiwicGFuZWxIZWFkZXJJY29uQWN0aXZlIiwicGFuZWxIZWFkZXJJY29uIiwiaG92ZXJDb2xvciIsInRleHRDb2xvckhsIiwiUGFuZWxIZWFkZXJBY3Rpb24iLCJvbkNsaWNrIiwidG9vbHRpcCIsImlkIiwidG9vbHRpcFR5cGUiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUNSLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxDQUFkLEdBQWtCLENBQXZCO0FBQUEsQ0FERyxFQUlkLFVBQUFELEtBQUs7QUFBQSxTQUNaQSxLQUFLLENBQUNFLE1BQU4sR0FBZUYsS0FBSyxDQUFDRyxLQUFOLENBQVlDLHFCQUEzQixHQUFtREosS0FBSyxDQUFDRyxLQUFOLENBQVlFLGVBRG5EO0FBQUEsQ0FKUyxFQVNaLFVBQUFMLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNNLFVBQU4sR0FBbUJOLEtBQUssQ0FBQ0csS0FBTixDQUFZSCxLQUFLLENBQUNNLFVBQWxCLENBQW5CLEdBQW1ETixLQUFLLENBQUNHLEtBQU4sQ0FBWUksV0FBcEU7QUFBQSxDQVRPLENBQXpCLEMsQ0FrQkE7OztJQUNxQkMsaUI7Ozs7Ozs7Ozs7Ozs2QkFtQlY7QUFBQSx3QkFXSCxLQUFLUixLQVhGO0FBQUEsVUFFTFMsT0FGSyxlQUVMQSxPQUZLO0FBQUEsVUFHTEMsT0FISyxlQUdMQSxPQUhLO0FBQUEsVUFJTEMsRUFKSyxlQUlMQSxFQUpLO0FBQUEsVUFLTFQsTUFMSyxlQUtMQSxNQUxLO0FBQUEsVUFNTEQsS0FOSyxlQU1MQSxLQU5LO0FBQUEsVUFPTEssVUFQSyxlQU9MQSxVQVBLO0FBQUEsVUFRTE0sV0FSSyxlQVFMQSxXQVJLO0FBQUEsVUFTTEMsUUFUSyxlQVNMQSxRQVRLO0FBQUEsVUFVTEMsU0FWSyxlQVVMQSxTQVZLO0FBWVAsMEJBQ0UsZ0NBQUMsbUJBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSw2QkFBVyx1QkFBWDtBQUFxQ0QsVUFBQUEsUUFBUSxFQUFSQTtBQUFyQyxXQUFnREMsU0FBaEQsRUFBNERBLFNBQTVELEVBRGI7QUFFRSxRQUFBLE1BQU0sRUFBRVosTUFGVjtBQUdFLFFBQUEsVUFBVSxFQUFFSSxVQUhkO0FBSUUsUUFBQSxLQUFLLEVBQUVMO0FBSlQsc0JBTUUscUNBQU0sS0FBTixDQUFZLGFBQVo7QUFDRSx3QkFERjtBQUVFLDhCQUFhUyxPQUFiLGNBQXdCQyxFQUF4QixDQUZGO0FBR0UsUUFBQSxNQUFNLEVBQUMsTUFIVDtBQUlFLFFBQUEsT0FBTyxFQUFFRjtBQUpYLFFBTkYsRUFZR0MsT0FBTyxnQkFDTixnQ0FBQywwQkFBRDtBQUFTLFFBQUEsRUFBRSxZQUFLQSxPQUFMLGNBQWdCQyxFQUFoQixDQUFYO0FBQWlDLFFBQUEsTUFBTSxFQUFDLE9BQXhDO0FBQWdELFFBQUEsU0FBUyxFQUFFLEdBQTNEO0FBQWdFLFFBQUEsSUFBSSxFQUFFQztBQUF0RSxzQkFDRSw4Q0FBT0YsT0FBUCxDQURGLENBRE0sR0FJSixJQWhCTixDQURGO0FBb0JEOzs7RUFuRDRDSyxnQjs7O2lDQUExQlAsaUIsZUFDQTtBQUNqQkcsRUFBQUEsRUFBRSxFQUFFSyxzQkFBVUMsTUFERztBQUVqQmhCLEVBQUFBLEtBQUssRUFBRWUsc0JBQVVFLElBRkE7QUFHakJSLEVBQUFBLE9BQU8sRUFBRU0sc0JBQVVDLE1BSEY7QUFJakJSLEVBQUFBLE9BQU8sRUFBRU8sc0JBQVVHLElBSkY7QUFLakJqQixFQUFBQSxNQUFNLEVBQUVjLHNCQUFVRSxJQUxEO0FBTWpCTCxFQUFBQSxRQUFRLEVBQUVHLHNCQUFVRSxJQU5IO0FBT2pCWixFQUFBQSxVQUFVLEVBQUVVLHNCQUFVQyxNQVBMO0FBUWpCSCxFQUFBQSxTQUFTLEVBQUVFLHNCQUFVQyxNQVJKO0FBU2pCTCxFQUFBQSxXQUFXLEVBQUVJLHNCQUFVQztBQVROLEM7aUNBREFULGlCLGtCQWFHO0FBQ3BCQyxFQUFBQSxPQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQURHO0FBRXBCSCxFQUFBQSxVQUFVLEVBQUUsSUFGUTtBQUdwQkosRUFBQUEsTUFBTSxFQUFFO0FBSFksQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgSGVhZGVyQWN0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IChwcm9wcy5mbHVzaCA/IDAgOiA4KX1weDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5wYW5lbEhlYWRlckljb25BY3RpdmUgOiBwcm9wcy50aGVtZS5wYW5lbEhlYWRlckljb259O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5ob3ZlckNvbG9yID8gcHJvcHMudGhlbWVbcHJvcHMuaG92ZXJDb2xvcl0gOiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbCl9O1xuICB9XG5cbiAgJi5kaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG5gO1xuXG4vLyBOZWVkIHRvIHVzZSByZWFjdCBjbGFzcyB0byBhY2Nlc3MgcHJvcHMuY29tcG9uZW50XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYW5lbEhlYWRlckFjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmx1c2g6IFByb3BUeXBlcy5ib29sLFxuICAgIHRvb2x0aXA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaG92ZXJDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG9vbHRpcFR5cGU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxuICAgIGhvdmVyQ29sb3I6IG51bGwsXG4gICAgYWN0aXZlOiBmYWxzZVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvbkNsaWNrLFxuICAgICAgdG9vbHRpcCxcbiAgICAgIGlkLFxuICAgICAgYWN0aXZlLFxuICAgICAgZmx1c2gsXG4gICAgICBob3ZlckNvbG9yLFxuICAgICAgdG9vbHRpcFR5cGUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyQWN0aW9uV3JhcHBlclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3BhbmVsLS1oZWFkZXJfX2FjdGlvbicsIHtkaXNhYmxlZCwgW2NsYXNzTmFtZV06IGNsYXNzTmFtZX0pfVxuICAgICAgICBhY3RpdmU9e2FjdGl2ZX1cbiAgICAgICAgaG92ZXJDb2xvcj17aG92ZXJDb2xvcn1cbiAgICAgICAgZmx1c2g9e2ZsdXNofVxuICAgICAgPlxuICAgICAgICA8dGhpcy5wcm9wcy5JY29uQ29tcG9uZW50XG4gICAgICAgICAgZGF0YS10aXBcbiAgICAgICAgICBkYXRhLWZvcj17YCR7dG9vbHRpcH1fJHtpZH1gfVxuICAgICAgICAgIGhlaWdodD1cIjE4cHhcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICAgIHt0b29sdGlwID8gKFxuICAgICAgICAgIDxUb29sdGlwIGlkPXtgJHt0b29sdGlwfV8ke2lkfWB9IGVmZmVjdD1cInNvbGlkXCIgZGVsYXlTaG93PXs1MDB9IHR5cGU9e3Rvb2x0aXBUeXBlfT5cbiAgICAgICAgICAgIDxzcGFuPnt0b29sdGlwfTwvc3Bhbj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9IZWFkZXJBY3Rpb25XcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==