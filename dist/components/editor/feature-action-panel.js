"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FeatureActionPanel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _actionPanel = _interopRequireWildcard(require("../common/action-panel"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("../common/icons");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var LAYOVER_OFFSET = 4;

var StyledActionsLayer = _styledComponents["default"].div(_templateObject());

var FeatureActionPanel = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(FeatureActionPanel, _PureComponent);

  var _super = _createSuper(FeatureActionPanel);

  function FeatureActionPanel() {
    var _this;

    (0, _classCallCheck2["default"])(this, FeatureActionPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this.props.onClose();
    });
    return _this;
  }

  (0, _createClass2["default"])(FeatureActionPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          datasets = _this$props.datasets,
          position = _this$props.position,
          layers = _this$props.layers,
          currentFilter = _this$props.currentFilter,
          onToggleLayer = _this$props.onToggleLayer,
          onDeleteFeature = _this$props.onDeleteFeature;

      var _ref = currentFilter || {},
          _ref$layerId = _ref.layerId,
          layerId = _ref$layerId === void 0 ? [] : _ref$layerId;

      return /*#__PURE__*/_react["default"].createElement(StyledActionsLayer, {
        className: (0, _classnames["default"])('feature-action-panel', className),
        style: {
          top: "".concat(position.y + LAYOVER_OFFSET, "px"),
          left: "".concat(position.x + LAYOVER_OFFSET, "px")
        }
      }, /*#__PURE__*/_react["default"].createElement(_actionPanel["default"], null, /*#__PURE__*/_react["default"].createElement(_actionPanel.ActionPanelItem, {
        label: "layers",
        Icon: _icons.Layers
      }, layers.map(function (layer, index) {
        return /*#__PURE__*/_react["default"].createElement(_actionPanel.ActionPanelItem, {
          key: index,
          label: layer.config.label,
          color: datasets[layer.config.dataId].color,
          isSelection: true,
          isActive: layerId.includes(layer.id),
          onClick: function onClick() {
            return onToggleLayer(layer);
          },
          className: "layer-panel-item"
        });
      })), /*#__PURE__*/_react["default"].createElement(_actionPanel.ActionPanelItem, {
        label: "delete",
        className: "delete-panel-item",
        Icon: _icons.Trash,
        onClick: onDeleteFeature
      })));
    }
  }]);
  return FeatureActionPanel;
}(_react.PureComponent);

exports.FeatureActionPanel = FeatureActionPanel;
(0, _defineProperty2["default"])(FeatureActionPanel, "propTypes", {
  className: _propTypes["default"].string,
  datasets: _propTypes["default"].object.isRequired,
  position: _propTypes["default"].object.isRequired,
  layers: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  currentFilter: _propTypes["default"].object,
  onClose: _propTypes["default"].func.isRequired,
  onDeleteFeature: _propTypes["default"].func.isRequired
});
(0, _defineProperty2["default"])(FeatureActionPanel, "defaultProps", {
  position: {}
});

var _default = (0, _reactOnclickoutside["default"])(FeatureActionPanel);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2VkaXRvci9mZWF0dXJlLWFjdGlvbi1wYW5lbC5qcyJdLCJuYW1lcyI6WyJMQVlPVkVSX09GRlNFVCIsIlN0eWxlZEFjdGlvbnNMYXllciIsInN0eWxlZCIsImRpdiIsIkZlYXR1cmVBY3Rpb25QYW5lbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInByb3BzIiwib25DbG9zZSIsImNsYXNzTmFtZSIsImRhdGFzZXRzIiwicG9zaXRpb24iLCJsYXllcnMiLCJjdXJyZW50RmlsdGVyIiwib25Ub2dnbGVMYXllciIsIm9uRGVsZXRlRmVhdHVyZSIsImxheWVySWQiLCJ0b3AiLCJ5IiwibGVmdCIsIngiLCJMYXllcnMiLCJtYXAiLCJsYXllciIsImluZGV4IiwiY29uZmlnIiwibGFiZWwiLCJkYXRhSWQiLCJjb2xvciIsImluY2x1ZGVzIiwiaWQiLCJUcmFzaCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBRyxDQUF2Qjs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBR0MsNkJBQU9DLEdBQVYsbUJBQXhCOztJQUlhQyxrQjs7Ozs7Ozs7Ozs7Ozs7OzJHQWdCVSxVQUFBQyxDQUFDLEVBQUk7QUFDeEJBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxNQUFBQSxDQUFDLENBQUNFLGVBQUY7O0FBQ0EsWUFBS0MsS0FBTCxDQUFXQyxPQUFYO0FBQ0QsSzs7Ozs7OzZCQUVRO0FBQUEsd0JBU0gsS0FBS0QsS0FURjtBQUFBLFVBRUxFLFNBRkssZUFFTEEsU0FGSztBQUFBLFVBR0xDLFFBSEssZUFHTEEsUUFISztBQUFBLFVBSUxDLFFBSkssZUFJTEEsUUFKSztBQUFBLFVBS0xDLE1BTEssZUFLTEEsTUFMSztBQUFBLFVBTUxDLGFBTkssZUFNTEEsYUFOSztBQUFBLFVBT0xDLGFBUEssZUFPTEEsYUFQSztBQUFBLFVBUUxDLGVBUkssZUFRTEEsZUFSSzs7QUFBQSxpQkFXZ0JGLGFBQWEsSUFBSSxFQVhqQztBQUFBLDhCQVdBRyxPQVhBO0FBQUEsVUFXQUEsT0FYQSw2QkFXVSxFQVhWOztBQWFQLDBCQUNFLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsNEJBQVcsc0JBQVgsRUFBbUNQLFNBQW5DLENBRGI7QUFFRSxRQUFBLEtBQUssRUFBRTtBQUNMUSxVQUFBQSxHQUFHLFlBQUtOLFFBQVEsQ0FBQ08sQ0FBVCxHQUFhbkIsY0FBbEIsT0FERTtBQUVMb0IsVUFBQUEsSUFBSSxZQUFLUixRQUFRLENBQUNTLENBQVQsR0FBYXJCLGNBQWxCO0FBRkM7QUFGVCxzQkFPRSxnQ0FBQyx1QkFBRCxxQkFDRSxnQ0FBQyw0QkFBRDtBQUFpQixRQUFBLEtBQUssRUFBQyxRQUF2QjtBQUFnQyxRQUFBLElBQUksRUFBRXNCO0FBQXRDLFNBQ0dULE1BQU0sQ0FBQ1UsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDRCQUNWLGdDQUFDLDRCQUFEO0FBQ0UsVUFBQSxHQUFHLEVBQUVBLEtBRFA7QUFFRSxVQUFBLEtBQUssRUFBRUQsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBRnRCO0FBR0UsVUFBQSxLQUFLLEVBQUVoQixRQUFRLENBQUNhLEtBQUssQ0FBQ0UsTUFBTixDQUFhRSxNQUFkLENBQVIsQ0FBOEJDLEtBSHZDO0FBSUUsVUFBQSxXQUFXLEVBQUUsSUFKZjtBQUtFLFVBQUEsUUFBUSxFQUFFWixPQUFPLENBQUNhLFFBQVIsQ0FBaUJOLEtBQUssQ0FBQ08sRUFBdkIsQ0FMWjtBQU1FLFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU1oQixhQUFhLENBQUNTLEtBQUQsQ0FBbkI7QUFBQSxXQU5YO0FBT0UsVUFBQSxTQUFTLEVBQUM7QUFQWixVQURVO0FBQUEsT0FBWCxDQURILENBREYsZUFjRSxnQ0FBQyw0QkFBRDtBQUNFLFFBQUEsS0FBSyxFQUFDLFFBRFI7QUFFRSxRQUFBLFNBQVMsRUFBQyxtQkFGWjtBQUdFLFFBQUEsSUFBSSxFQUFFUSxZQUhSO0FBSUUsUUFBQSxPQUFPLEVBQUVoQjtBQUpYLFFBZEYsQ0FQRixDQURGO0FBK0JEOzs7RUFsRXFDaUIsb0I7OztpQ0FBM0I3QixrQixlQUNRO0FBQ2pCTSxFQUFBQSxTQUFTLEVBQUV3QixzQkFBVUMsTUFESjtBQUVqQnhCLEVBQUFBLFFBQVEsRUFBRXVCLHNCQUFVRSxNQUFWLENBQWlCQyxVQUZWO0FBR2pCekIsRUFBQUEsUUFBUSxFQUFFc0Isc0JBQVVFLE1BQVYsQ0FBaUJDLFVBSFY7QUFJakJ4QixFQUFBQSxNQUFNLEVBQUVxQixzQkFBVUksT0FBVixDQUFrQkosc0JBQVVFLE1BQTVCLEVBQW9DQyxVQUozQjtBQUtqQnZCLEVBQUFBLGFBQWEsRUFBRW9CLHNCQUFVRSxNQUxSO0FBTWpCM0IsRUFBQUEsT0FBTyxFQUFFeUIsc0JBQVVLLElBQVYsQ0FBZUYsVUFOUDtBQU9qQnJCLEVBQUFBLGVBQWUsRUFBRWtCLHNCQUFVSyxJQUFWLENBQWVGO0FBUGYsQztpQ0FEUmpDLGtCLGtCQVdXO0FBQ3BCUSxFQUFBQSxRQUFRLEVBQUU7QUFEVSxDOztlQTBEVCxxQ0FBZVIsa0JBQWYsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFjdGlvblBhbmVsLCB7QWN0aW9uUGFuZWxJdGVtfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9hY3Rpb24tcGFuZWwnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IG9uQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB7VHJhc2gsIExheWVyc30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5cclxuY29uc3QgTEFZT1ZFUl9PRkZTRVQgPSA0O1xyXG5cclxuY29uc3QgU3R5bGVkQWN0aW9uc0xheWVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmA7XHJcblxyXG5leHBvcnQgY2xhc3MgRmVhdHVyZUFjdGlvblBhbmVsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxyXG4gICAgY3VycmVudEZpbHRlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBvbkRlbGV0ZUZlYXR1cmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICB9O1xyXG5cclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgcG9zaXRpb246IHt9XHJcbiAgfTtcclxuXHJcbiAgLy8gVXNlZCBieSBvbkNsaWNrT3V0c2lkZVxyXG4gIGhhbmRsZUNsaWNrT3V0c2lkZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICBkYXRhc2V0cyxcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICAgIGxheWVycyxcclxuICAgICAgY3VycmVudEZpbHRlcixcclxuICAgICAgb25Ub2dnbGVMYXllcixcclxuICAgICAgb25EZWxldGVGZWF0dXJlXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCB7bGF5ZXJJZCA9IFtdfSA9IGN1cnJlbnRGaWx0ZXIgfHwge307XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZEFjdGlvbnNMYXllclxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnZmVhdHVyZS1hY3Rpb24tcGFuZWwnLCBjbGFzc05hbWUpfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0b3A6IGAke3Bvc2l0aW9uLnkgKyBMQVlPVkVSX09GRlNFVH1weGAsXHJcbiAgICAgICAgICBsZWZ0OiBgJHtwb3NpdGlvbi54ICsgTEFZT1ZFUl9PRkZTRVR9cHhgXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxBY3Rpb25QYW5lbD5cclxuICAgICAgICAgIDxBY3Rpb25QYW5lbEl0ZW0gbGFiZWw9XCJsYXllcnNcIiBJY29uPXtMYXllcnN9PlxyXG4gICAgICAgICAgICB7bGF5ZXJzLm1hcCgobGF5ZXIsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEFjdGlvblBhbmVsSXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtsYXllci5jb25maWcubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17ZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0uY29sb3J9XHJcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGlvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtsYXllcklkLmluY2x1ZGVzKGxheWVyLmlkKX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVG9nZ2xlTGF5ZXIobGF5ZXIpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXItcGFuZWwtaXRlbVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0FjdGlvblBhbmVsSXRlbT5cclxuICAgICAgICAgIDxBY3Rpb25QYW5lbEl0ZW1cclxuICAgICAgICAgICAgbGFiZWw9XCJkZWxldGVcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZWxldGUtcGFuZWwtaXRlbVwiXHJcbiAgICAgICAgICAgIEljb249e1RyYXNofVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZUZlYXR1cmV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQWN0aW9uUGFuZWw+XHJcbiAgICAgIDwvU3R5bGVkQWN0aW9uc0xheWVyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9uQ2xpY2tPdXRzaWRlKEZlYXR1cmVBY3Rpb25QYW5lbCk7XHJcbiJdfQ==