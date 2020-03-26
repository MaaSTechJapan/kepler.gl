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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlnLWdyb3VwLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwidGV4dENvbG9yIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiIsIkNvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJDb25maWdHcm91cENvbGxhcHNpYmxlSGVhZGVyIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cCIsIlN0eWxlZENvbmZpZ0dyb3VwSGVhZGVyIiwidGV4dENvbG9ySGwiLCJDb25maWdHcm91cENvbnRlbnQiLCJMYXllckNvbmZpZ0dyb3VwIiwiY29sbGFwc2VkIiwibGFiZWwiLCJjaGlsZHJlbiIsInByb3BlcnR5IiwibGF5ZXIiLCJvbkNoYW5nZSIsImNvbGxhcHNpYmxlIiwiZGVzY3JpcHRpb24iLCJkaXNhYmxlZCIsInN0YXRlIiwic2V0U3RhdGUiLCJjb25maWciLCJ2aXNDb25maWciLCJpZCIsImV4cGFuZGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSwyQkFBMkIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQ2IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBRFEsRUFTM0IsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFoQjtBQUFB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QUFBO0FBSFosUUFETyxHQU1MLElBUE4sRUFRR0csV0FBVyxnQkFBRyxnQ0FBQyxvQkFBRDtBQUFlLFFBQUEsTUFBTSxFQUFDO0FBQXRCLFFBQUgsR0FBcUMsSUFSbkQsQ0FSRixDQURGLGVBb0JFLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsNEJBQVcsNkJBQVgsRUFBMEM7QUFDbkRFLFVBQUFBLFFBQVEsRUFBRUwsUUFBUSxJQUFJLENBQUNDLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxTQUFiLENBQXVCVCxRQUF2QjtBQUQ0QixTQUExQztBQURiLFNBS0dELFFBTEgsQ0FwQkYsQ0FERjtBQThCRDs7OzZDQXpEK0JoQixLLEVBQU91QixLLEVBQU87QUFDNUM7QUFDQSxVQUFJdkIsS0FBSyxDQUFDNEIsUUFBTixJQUFrQkwsS0FBSyxDQUFDVCxTQUE1QixFQUF1QztBQUNyQyxlQUFPO0FBQUNBLFVBQUFBLFNBQVMsRUFBRTtBQUFaLFNBQVA7QUFDRDs7QUFFRCxhQUFPLElBQVA7QUFDRDs7O0VBaEI0QmUsZ0I7O2lDQUF6QmhCLGdCLGtCQUNrQjtBQUNwQk8sRUFBQUEsV0FBVyxFQUFFLEtBRE87QUFFcEJRLEVBQUFBLFFBQVEsRUFBRSxLQUZVO0FBR3BCVCxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUhFO0FBSXBCRSxFQUFBQSxXQUFXLEVBQUUsSUFKTztBQUtwQkMsRUFBQUEsUUFBUSxFQUFFO0FBTFUsQztBQW9FeEIscUNBQVNULGdCQUFUO2VBRWVBLGdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3BvbHlmaWxsfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zd2l0Y2gnO1xuaW1wb3J0IEluZm9IZWxwZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaW5mby1oZWxwZXInO1xuaW1wb3J0IHtWZXJ0VGhyZWVEb3RzfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMYXllckNvbmZpZ0dyb3VwTGFiZWwgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTEycHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBzcGFuIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyQ29uZmlnR3JvdXBBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xheWVyLWNvbmZpZy1ncm91cF9fY29udGVudF9fY29sbGFwc2libGUnXG59KWBcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlLW91dDtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdsYXllci1jb25maWctZ3JvdXBfX2hlYWRlcl9fY29sbGFwc2libGUnXG59KWBcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5ZXJDb25maWdHcm91cCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAmLmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgJi5jb2xsYXBzZWQge1xuICAgIC5sYXllci1jb25maWctZ3JvdXBfX2hlYWRlcl9fY29sbGFwc2libGUge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICB9XG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fY29udGVudCB7XG4gICAgICAubGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50X19jb2xsYXBzaWJsZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkQ29uZmlnR3JvdXBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fbGFiZWwge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG5cbiAgICAubGF5ZXItY29uZmlnLWdyb3VwX19hY3Rpb24ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQ29uZmlnR3JvdXBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgJi5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5jbGFzcyBMYXllckNvbmZpZ0dyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xsYXBzaWJsZTogZmFsc2UsXG4gICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2VcbiAgfTtcblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIC8vICBpbnZva2VkIGFmdGVyIGEgY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZCBhcyB3ZWxsIGFzIGJlZm9yZSBpdCBpcyByZS1yZW5kZXJlZFxuICAgIGlmIChwcm9wcy5leHBhbmRlZCAmJiBzdGF0ZS5jb2xsYXBzZWQpIHtcbiAgICAgIHJldHVybiB7Y29sbGFwc2VkOiBmYWxzZX07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBjb2xsYXBzZWQ6IHRydWVcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWwsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIHByb3BlcnR5LFxuICAgICAgbGF5ZXIsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGNvbGxhcHNpYmxlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkaXNhYmxlZFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge2NvbGxhcHNlZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllckNvbmZpZ0dyb3VwIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItY29uZmlnLWdyb3VwJywge2NvbGxhcHNlZCwgZGlzYWJsZWR9KX0+XG4gICAgICAgIDxTdHlsZWRDb25maWdHcm91cEhlYWRlclxuICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZy1ncm91cF9faGVhZGVyXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPFN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCBjbGFzc05hbWU9XCJsYXllci1jb25maWctZ3JvdXBfX2xhYmVsXCI+XG4gICAgICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxJbmZvSGVscGVyIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gaWQ9e2xhYmVsfSAvPn1cbiAgICAgICAgICA8L1N0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbD5cbiAgICAgICAgICA8U3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiBjbGFzc05hbWU9XCJsYXllci1jb25maWctZ3JvdXBfX2FjdGlvblwiPlxuICAgICAgICAgICAge3Byb3BlcnR5ID8gKFxuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17bGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV19XG4gICAgICAgICAgICAgICAgaWQ9e2Ake2xheWVyLmlkfS0ke3Byb3BlcnR5fWB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKHtbcHJvcGVydHldOiAhbGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV19KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge2NvbGxhcHNpYmxlID8gPFZlcnRUaHJlZURvdHMgaGVpZ2h0PVwiMThweFwiIC8+IDogbnVsbH1cbiAgICAgICAgICA8L1N0eWxlZExheWVyQ29uZmlnR3JvdXBBY3Rpb24+XG4gICAgICAgIDwvU3R5bGVkQ29uZmlnR3JvdXBIZWFkZXI+XG4gICAgICAgIDxDb25maWdHcm91cENvbnRlbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xheWVyLWNvbmZpZy1ncm91cF9fY29udGVudCcsIHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBwcm9wZXJ0eSAmJiAhbGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db25maWdHcm91cENvbnRlbnQ+XG4gICAgICA8L1N0eWxlZExheWVyQ29uZmlnR3JvdXA+XG4gICAgKTtcbiAgfVxufVxuXG5wb2x5ZmlsbChMYXllckNvbmZpZ0dyb3VwKTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJDb25maWdHcm91cDtcbiJdfQ==