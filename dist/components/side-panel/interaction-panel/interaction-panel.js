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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _switch = _interopRequireDefault(require("../../common/switch"));

var _brushConfig = _interopRequireDefault(require("./brush-config"));

var _tooltipConfig = _interopRequireDefault(require("./tooltip-config"));

var _styledComponents2 = require("../../common/styled-components");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 6px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-top: 1px solid ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledPanelContent = (0, _styledComponents["default"])(_styledComponents2.PanelContent)(_templateObject(), function (props) {
  return props.theme.panelBorderColor;
});

var StyledInteractionPanel = _styledComponents["default"].div(_templateObject2());

InteractionPanelFactory.deps = [_tooltipConfig["default"], _brushConfig["default"]];

function InteractionPanelFactory(TooltipConfig, BrushConfig) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(InteractionPanel, _Component);

    var _super = _createSuper(InteractionPanel);

    function InteractionPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, InteractionPanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isConfigActive: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateConfig", function (newProp) {
        _this.props.onConfigChange(_objectSpread({}, _this.props.config, {}, newProp));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_enableConfig", function () {
        _this.setState({
          isConfigActive: !_this.state.isConfigActive
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(InteractionPanel, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            config = _this$props.config,
            datasets = _this$props.datasets;

        var onChange = function onChange(newConfig) {
          return _this2._updateConfig({
            config: newConfig
          });
        };

        var template = null;

        switch (config.id) {
          case 'tooltip':
            template = /*#__PURE__*/_react["default"].createElement(TooltipConfig, {
              datasets: datasets,
              config: config.config,
              onChange: onChange
            });
            break;

          case 'brush':
            template = /*#__PURE__*/_react["default"].createElement(BrushConfig, {
              config: config.config,
              onChange: onChange
            });
            break;

          default:
            break;
        }

        return /*#__PURE__*/_react["default"].createElement(StyledInteractionPanel, {
          className: "interaction-panel"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledPanelHeader, {
          className: "interaction-panel__header",
          onClick: this._enableConfig
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderContent, {
          className: "interaction-panel__header__content"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "interaction-panel__header__icon icon"
        }, /*#__PURE__*/_react["default"].createElement(config.iconComponent, {
          height: "12px"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "interaction-panel__header__title"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderTitle, null, config.id))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "interaction-panel__header__actions"
        }, /*#__PURE__*/_react["default"].createElement(_switch["default"], {
          checked: config.enabled,
          id: "".concat(config.id, "-toggle"),
          onChange: function onChange() {
            return _this2._updateConfig({
              enabled: !config.enabled
            });
          },
          secondary: true
        }))), config.enabled && template && /*#__PURE__*/_react["default"].createElement(StyledPanelContent, {
          className: "interaction-panel__content"
        }, template));
      }
    }]);
    return InteractionPanel;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    datasets: _propTypes["default"].object.isRequired,
    config: _propTypes["default"].object.isRequired,
    onConfigChange: _propTypes["default"].func.isRequired
  }), _temp;
}

var _default = InteractionPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwuanMiXSwibmFtZXMiOlsiU3R5bGVkUGFuZWxDb250ZW50IiwiUGFuZWxDb250ZW50IiwicHJvcHMiLCJ0aGVtZSIsInBhbmVsQm9yZGVyQ29sb3IiLCJTdHlsZWRJbnRlcmFjdGlvblBhbmVsIiwic3R5bGVkIiwiZGl2IiwiSW50ZXJhY3Rpb25QYW5lbEZhY3RvcnkiLCJkZXBzIiwiVG9vbHRpcENvbmZpZ0ZhY3RvcnkiLCJCcnVzaENvbmZpZ0ZhY3RvcnkiLCJUb29sdGlwQ29uZmlnIiwiQnJ1c2hDb25maWciLCJpc0NvbmZpZ0FjdGl2ZSIsIm5ld1Byb3AiLCJvbkNvbmZpZ0NoYW5nZSIsImNvbmZpZyIsInNldFN0YXRlIiwic3RhdGUiLCJkYXRhc2V0cyIsIm9uQ2hhbmdlIiwibmV3Q29uZmlnIiwiX3VwZGF0ZUNvbmZpZyIsInRlbXBsYXRlIiwiaWQiLCJfZW5hYmxlQ29uZmlnIiwiZW5hYmxlZCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLElBQU1BLGtCQUFrQixHQUFHLGtDQUFPQywrQkFBUCxDQUFILG9CQUNFLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsZ0JBQWhCO0FBQUEsQ0FEUCxDQUF4Qjs7QUFJQSxJQUFNQyxzQkFBc0IsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQTVCOztBQUlBQyx1QkFBdUIsQ0FBQ0MsSUFBeEIsR0FBK0IsQ0FBQ0MseUJBQUQsRUFBdUJDLHVCQUF2QixDQUEvQjs7QUFFQSxTQUFTSCx1QkFBVCxD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LHNCQUFVQyxNQUFWLENBQWlCQyxVQUZSO0FBR2pCZixJQUFBQSxjQUFjLEVBQUVhLHNCQUFVRyxJQUFWLENBQWVEO0FBSGQsR0FEckI7QUFxRUQ7O2VBRWN2Qix1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zd2l0Y2gnO1xyXG5cclxuaW1wb3J0IEJydXNoQ29uZmlnRmFjdG9yeSBmcm9tICcuL2JydXNoLWNvbmZpZyc7XHJcbmltcG9ydCBUb29sdGlwQ29uZmlnRmFjdG9yeSBmcm9tICcuL3Rvb2x0aXAtY29uZmlnJztcclxuXHJcbmltcG9ydCB7XHJcbiAgU3R5bGVkUGFuZWxIZWFkZXIsXHJcbiAgUGFuZWxIZWFkZXJUaXRsZSxcclxuICBQYW5lbEhlYWRlckNvbnRlbnQsXHJcbiAgUGFuZWxDb250ZW50XHJcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3R5bGVkUGFuZWxDb250ZW50ID0gc3R5bGVkKFBhbmVsQ29udGVudClgXHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJDb2xvcn07XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRJbnRlcmFjdGlvblBhbmVsID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG5gO1xyXG5cclxuSW50ZXJhY3Rpb25QYW5lbEZhY3RvcnkuZGVwcyA9IFtUb29sdGlwQ29uZmlnRmFjdG9yeSwgQnJ1c2hDb25maWdGYWN0b3J5XTtcclxuXHJcbmZ1bmN0aW9uIEludGVyYWN0aW9uUGFuZWxGYWN0b3J5KFRvb2x0aXBDb25maWcsIEJydXNoQ29uZmlnKSB7XHJcbiAgcmV0dXJuIGNsYXNzIEludGVyYWN0aW9uUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgY29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIG9uQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlID0ge2lzQ29uZmlnQWN0aXZlOiBmYWxzZX07XHJcblxyXG4gICAgX3VwZGF0ZUNvbmZpZyA9IG5ld1Byb3AgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ29uZmlnQ2hhbmdlKHtcclxuICAgICAgICAuLi50aGlzLnByb3BzLmNvbmZpZyxcclxuICAgICAgICAuLi5uZXdQcm9wXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBfZW5hYmxlQ29uZmlnID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtpc0NvbmZpZ0FjdGl2ZTogIXRoaXMuc3RhdGUuaXNDb25maWdBY3RpdmV9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7Y29uZmlnLCBkYXRhc2V0c30gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBvbkNoYW5nZSA9IG5ld0NvbmZpZyA9PiB0aGlzLl91cGRhdGVDb25maWcoe2NvbmZpZzogbmV3Q29uZmlnfSk7XHJcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IG51bGw7XHJcblxyXG4gICAgICBzd2l0Y2ggKGNvbmZpZy5pZCkge1xyXG4gICAgICAgIGNhc2UgJ3Rvb2x0aXAnOlxyXG4gICAgICAgICAgdGVtcGxhdGUgPSAoXHJcbiAgICAgICAgICAgIDxUb29sdGlwQ29uZmlnIGRhdGFzZXRzPXtkYXRhc2V0c30gY29uZmlnPXtjb25maWcuY29uZmlnfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2JydXNoJzpcclxuICAgICAgICAgIHRlbXBsYXRlID0gPEJydXNoQ29uZmlnIGNvbmZpZz17Y29uZmlnLmNvbmZpZ30gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPjtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZEludGVyYWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwiaW50ZXJhY3Rpb24tcGFuZWxcIj5cclxuICAgICAgICAgIDxTdHlsZWRQYW5lbEhlYWRlciBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1wYW5lbF9faGVhZGVyXCIgb25DbGljaz17dGhpcy5fZW5hYmxlQ29uZmlnfT5cclxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyQ29udGVudCBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1wYW5lbF9faGVhZGVyX19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1wYW5lbF9faGVhZGVyX19pY29uIGljb25cIj5cclxuICAgICAgICAgICAgICAgIDxjb25maWcuaWNvbkNvbXBvbmVudCBoZWlnaHQ9XCIxMnB4XCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19oZWFkZXJfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8UGFuZWxIZWFkZXJUaXRsZT57Y29uZmlnLmlkfTwvUGFuZWxIZWFkZXJUaXRsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9QYW5lbEhlYWRlckNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJhY3Rpb24tcGFuZWxfX2hlYWRlcl9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5lbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgaWQ9e2Ake2NvbmZpZy5pZH0tdG9nZ2xlYH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0aGlzLl91cGRhdGVDb25maWcoe2VuYWJsZWQ6ICFjb25maWcuZW5hYmxlZH0pfVxyXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1N0eWxlZFBhbmVsSGVhZGVyPlxyXG4gICAgICAgICAge2NvbmZpZy5lbmFibGVkICYmIHRlbXBsYXRlICYmIChcclxuICAgICAgICAgICAgPFN0eWxlZFBhbmVsQ29udGVudCBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1wYW5lbF9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIHt0ZW1wbGF0ZX1cclxuICAgICAgICAgICAgPC9TdHlsZWRQYW5lbENvbnRlbnQ+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU3R5bGVkSW50ZXJhY3Rpb25QYW5lbD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnRlcmFjdGlvblBhbmVsRmFjdG9yeTtcclxuIl19