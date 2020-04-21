"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledConfigGroupHeader = exports.StyledLayerConfigGroup = exports.ConfigGroupCollapsibleHeader = exports.ConfigGroupCollapsibleContent = exports.StyledLayerConfigGroupAction = exports.StyledLayerConfigGroupLabel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _switch = _interopRequireDefault(require("../../common/switch"));

var _infoHelper = _interopRequireDefault(require("../../common/info-helper"));

var _icons = require("../../common/icons");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n    * {\n      pointer-events: none;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  :hover {\n    cursor: pointer;\n    .layer-config-group__label {\n      color: ", ";\n      border-left: 2px solid ", ";\n    }\n\n    .layer-config-group__action {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 18px;\n  margin-bottom: 12px;\n\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n  }\n  &.collapsed {\n    .layer-config-group__header__collapsible {\n      overflow: visible;\n      max-height: 600px;\n    }\n    .layer-config-group__content {\n      .layer-config-group__content__collapsible {\n        overflow: hidden;\n        max-height: 0;\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  overflow: hidden;\n  max-height: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  transition: max-height 0.3s ease-out;\n  height: max-content;\n  max-height: 600px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-left: 2px solid ", ";\n  line-height: 12px;\n  margin-left: -12px;\n  padding-left: 10px;\n  display: flex;\n  align-items: center;\n\n  span {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n    letter-spacing: 0.2px;\n    text-transform: capitalize;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLayerConfigGroupLabel = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.textColor;
});

exports.StyledLayerConfigGroupLabel = StyledLayerConfigGroupLabel;

var StyledLayerConfigGroupAction = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColor;
});

exports.StyledLayerConfigGroupAction = StyledLayerConfigGroupAction;

var ConfigGroupCollapsibleContent = _styledComponents["default"].div.attrs({
  className: 'layer-config-group__content__collapsible'
})(_templateObject3());

exports.ConfigGroupCollapsibleContent = ConfigGroupCollapsibleContent;

var ConfigGroupCollapsibleHeader = _styledComponents["default"].div.attrs({
  className: 'layer-config-group__header__collapsible'
})(_templateObject4());

exports.ConfigGroupCollapsibleHeader = ConfigGroupCollapsibleHeader;

var StyledLayerConfigGroup = _styledComponents["default"].div(_templateObject5());

exports.StyledLayerConfigGroup = StyledLayerConfigGroup;

var StyledConfigGroupHeader = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

exports.StyledConfigGroupHeader = StyledConfigGroupHeader;

var ConfigGroupContent = _styledComponents["default"].div(_templateObject7());

var LayerConfigGroup = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(LayerConfigGroup, _Component);

  var _super = _createSuper(LayerConfigGroup);

  function LayerConfigGroup() {
    var _this;

    (0, _classCallCheck2["default"])(this, LayerConfigGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      collapsed: true
    });
    return _this;
  }

  (0, _createClass2["default"])(LayerConfigGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children,
          property = _this$props.property,
          layer = _this$props.layer,
          _onChange2 = _this$props.onChange,
          collapsible = _this$props.collapsible,
          description = _this$props.description,
          disabled = _this$props.disabled;
      var collapsed = this.state.collapsed;
      return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroup, {
        className: (0, _classnames["default"])('layer-config-group', {
          collapsed: collapsed,
          disabled: disabled
        })
      }, /*#__PURE__*/_react["default"].createElement(StyledConfigGroupHeader, {
        className: "layer-config-group__header",
        onClick: function onClick() {
          return _this2.setState({
            collapsed: !_this2.state.collapsed
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroupLabel, {
        className: "layer-config-group__label"
      }, /*#__PURE__*/_react["default"].createElement("span", null, label), description && /*#__PURE__*/_react["default"].createElement(_infoHelper["default"], {
        description: description,
        id: label
      })), /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroupAction, {
        className: "layer-config-group__action"
      }, property ? /*#__PURE__*/_react["default"].createElement(_switch["default"], {
        checked: layer.config.visConfig[property],
        id: "".concat(layer.id, "-").concat(property),
        onChange: function onChange() {
          return _onChange2((0, _defineProperty2["default"])({}, property, !layer.config.visConfig[property]));
        }
      }) : null, collapsible ? /*#__PURE__*/_react["default"].createElement(_icons.VertThreeDots, {
        height: "18px"
      }) : null)), /*#__PURE__*/_react["default"].createElement(ConfigGroupContent, {
        className: (0, _classnames["default"])('layer-config-group__content', {
          disabled: property && !layer.config.visConfig[property]
        })
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      //  invoked after a component is instantiated as well as before it is re-rendered
      if (props.expanded && state.collapsed) {
        return {
          collapsed: false
        };
      }

      return null;
    }
  }]);
  return LayerConfigGroup;
}(_react.Component);

(0, _defineProperty2["default"])(LayerConfigGroup, "defaultProps", {
  collapsible: false,
  expanded: false,
  onChange: function onChange() {},
  description: null,
  disabled: false
});
(0, _reactLifecyclesCompat.polyfill)(LayerConfigGroup);
var _default = LayerConfigGroup;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlnLWdyb3VwLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwidGV4dENvbG9yIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiIsIkNvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJDb25maWdHcm91cENvbGxhcHNpYmxlSGVhZGVyIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cCIsIlN0eWxlZENvbmZpZ0dyb3VwSGVhZGVyIiwidGV4dENvbG9ySGwiLCJDb25maWdHcm91cENvbnRlbnQiLCJMYXllckNvbmZpZ0dyb3VwIiwiY29sbGFwc2VkIiwibGFiZWwiLCJjaGlsZHJlbiIsInByb3BlcnR5IiwibGF5ZXIiLCJvbkNoYW5nZSIsImNvbGxhcHNpYmxlIiwiZGVzY3JpcHRpb24iLCJkaXNhYmxlZCIsInN0YXRlIiwic2V0U3RhdGUiLCJjb25maWciLCJ2aXNDb25maWciLCJpZCIsImV4cGFuZGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSwyQkFBMkIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ2IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBRFEsRUFTM0IsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFoQjtBQUFB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QUFBO0FBSFosUUFETyxHQU1MLElBUE4sRUFRR0csV0FBVyxnQkFBRyxnQ0FBQyxvQkFBRDtBQUFlLFFBQUEsTUFBTSxFQUFDO0FBQXRCLFFBQUgsR0FBcUMsSUFSbkQsQ0FSRixDQURGLGVBb0JFLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsNEJBQVcsNkJBQVgsRUFBMEM7QUFDbkRFLFVBQUFBLFFBQVEsRUFBRUwsUUFBUSxJQUFJLENBQUNDLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxTQUFiLENBQXVCVCxRQUF2QjtBQUQ0QixTQUExQztBQURiLFNBS0dELFFBTEgsQ0FwQkYsQ0FERjtBQThCRDs7OzZDQXpEK0JoQixLLEVBQU91QixLLEVBQU87QUFDNUM7QUFDQSxVQUFJdkIsS0FBSyxDQUFDNEIsUUFBTixJQUFrQkwsS0FBSyxDQUFDVCxTQUE1QixFQUF1QztBQUNyQyxlQUFPO0FBQUNBLFVBQUFBLFNBQVMsRUFBRTtBQUFaLFNBQVA7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7O0VBaEI0QmUsZ0I7O2lDQUF6QmhCLGdCLGtCQUNrQjtBQUNwQk8sRUFBQUEsV0FBVyxFQUFFLEtBRE87QUFFcEJRLEVBQUFBLFFBQVEsRUFBRSxLQUZVO0FBR3BCVCxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUhFO0FBSXBCRSxFQUFBQSxXQUFXLEVBQUUsSUFKTztBQUtwQkMsRUFBQUEsUUFBUSxFQUFFO0FBTFUsQztBQW9FeEIscUNBQVNULGdCQUFUO2VBRWVBLGdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cG9seWZpbGx9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N3aXRjaCc7XHJcbmltcG9ydCBJbmZvSGVscGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2luZm8taGVscGVyJztcclxuaW1wb3J0IHtWZXJ0VGhyZWVEb3RzfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5ZXJDb25maWdHcm91cExhYmVsID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XHJcbiAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdsYXllci1jb25maWctZ3JvdXBfX2NvbnRlbnRfX2NvbGxhcHNpYmxlJ1xyXG59KWBcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZS1vdXQ7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb25maWdHcm91cENvbGxhcHNpYmxlSGVhZGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnbGF5ZXItY29uZmlnLWdyb3VwX19oZWFkZXJfX2NvbGxhcHNpYmxlJ1xyXG59KWBcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1heC1oZWlnaHQ6IDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5ZXJDb25maWdHcm91cCA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gICYuZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gICYuY29sbGFwc2VkIHtcclxuICAgIC5sYXllci1jb25maWctZ3JvdXBfX2hlYWRlcl9fY29sbGFwc2libGUge1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICB9XHJcbiAgICAubGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50IHtcclxuICAgICAgLmxheWVyLWNvbmZpZy1ncm91cF9fY29udGVudF9fY29sbGFwc2libGUge1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRDb25maWdHcm91cEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fbGFiZWwge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgICB9XHJcblxyXG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fYWN0aW9uIHtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbmZpZ0dyb3VwQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICoge1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jbGFzcyBMYXllckNvbmZpZ0dyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgY29sbGFwc2libGU6IGZhbHNlLFxyXG4gICAgZXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxyXG4gICAgZGVzY3JpcHRpb246IG51bGwsXHJcbiAgICBkaXNhYmxlZDogZmFsc2VcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xyXG4gICAgLy8gIGludm9rZWQgYWZ0ZXIgYSBjb21wb25lbnQgaXMgaW5zdGFudGlhdGVkIGFzIHdlbGwgYXMgYmVmb3JlIGl0IGlzIHJlLXJlbmRlcmVkXHJcbiAgICBpZiAocHJvcHMuZXhwYW5kZWQgJiYgc3RhdGUuY29sbGFwc2VkKSB7XHJcbiAgICAgIHJldHVybiB7Y29sbGFwc2VkOiBmYWxzZX07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIGNvbGxhcHNlZDogdHJ1ZVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbGFiZWwsXHJcbiAgICAgIGNoaWxkcmVuLFxyXG4gICAgICBwcm9wZXJ0eSxcclxuICAgICAgbGF5ZXIsXHJcbiAgICAgIG9uQ2hhbmdlLFxyXG4gICAgICBjb2xsYXBzaWJsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGRpc2FibGVkXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCB7Y29sbGFwc2VkfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZExheWVyQ29uZmlnR3JvdXAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsYXllci1jb25maWctZ3JvdXAnLCB7Y29sbGFwc2VkLCBkaXNhYmxlZH0pfT5cclxuICAgICAgICA8U3R5bGVkQ29uZmlnR3JvdXBIZWFkZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZy1ncm91cF9faGVhZGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe2NvbGxhcHNlZDogIXRoaXMuc3RhdGUuY29sbGFwc2VkfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCBjbGFzc05hbWU9XCJsYXllci1jb25maWctZ3JvdXBfX2xhYmVsXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPntsYWJlbH08L3NwYW4+XHJcbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8SW5mb0hlbHBlciBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IGlkPXtsYWJlbH0gLz59XHJcbiAgICAgICAgICA8L1N0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbD5cclxuICAgICAgICAgIDxTdHlsZWRMYXllckNvbmZpZ0dyb3VwQWN0aW9uIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZy1ncm91cF9fYWN0aW9uXCI+XHJcbiAgICAgICAgICAgIHtwcm9wZXJ0eSA/IChcclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtsYXllci5jb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XX1cclxuICAgICAgICAgICAgICAgIGlkPXtgJHtsYXllci5pZH0tJHtwcm9wZXJ0eX1gfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKHtbcHJvcGVydHldOiAhbGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV19KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAge2NvbGxhcHNpYmxlID8gPFZlcnRUaHJlZURvdHMgaGVpZ2h0PVwiMThweFwiIC8+IDogbnVsbH1cclxuICAgICAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbj5cclxuICAgICAgICA8L1N0eWxlZENvbmZpZ0dyb3VwSGVhZGVyPlxyXG4gICAgICAgIDxDb25maWdHcm91cENvbnRlbnRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50Jywge1xyXG4gICAgICAgICAgICBkaXNhYmxlZDogcHJvcGVydHkgJiYgIWxheWVyLmNvbmZpZy52aXNDb25maWdbcHJvcGVydHldXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Db25maWdHcm91cENvbnRlbnQ+XHJcbiAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5wb2x5ZmlsbChMYXllckNvbmZpZ0dyb3VwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheWVyQ29uZmlnR3JvdXA7XHJcbiJdfQ==