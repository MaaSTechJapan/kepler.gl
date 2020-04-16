"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSortableHoc = require("react-sortable-hoc");

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _icons = require("../../common/icons");

var _styledComponents2 = require("../../common/styled-components");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  z-index: 1000;\n\n  :hover {\n    cursor: move;\n    opacity: 1;\n    color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 12px;\n\n  .layer__title__type {\n    color: ", ";\n    font-size: 10px;\n    line-height: 12px;\n    letter-spacing: 0.37px;\n    text-transform: capitalize;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .layer__remove-layer {\n    opacity: 0;\n  }\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n\n    .layer__drag-handle {\n      opacity: 1;\n    }\n\n    .layer__remove-layer {\n      opacity: 1;\n    }\n\n    .layer__enable-config {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  // required
  id: _propTypes["default"].string.isRequired,
  isDragNDropEnabled: _propTypes["default"].bool,
  isVisible: _propTypes["default"].bool.isRequired,
  label: _propTypes["default"].string.isRequired,
  onToggleVisibility: _propTypes["default"].func.isRequired,
  // optional
  className: _propTypes["default"].string,
  idx: _propTypes["default"].number,
  isConfigActive: _propTypes["default"].bool,
  labelRCGColorValues: _propTypes["default"].arrayOf(_propTypes["default"].number),
  onUpdateLayerLabel: _propTypes["default"].func,
  onRemoveLayer: _propTypes["default"].func
};
var defaultProps = {
  isDragNDropEnabled: true,
  showRemoveLayer: true
};
var StyledLayerPanelHeader = (0, _styledComponents["default"])(_styledComponents2.StyledPanelHeader)(_templateObject(), function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.textColorHl;
});

var HeaderLabelSection = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColor;
});

var HeaderActionSection = _styledComponents["default"].div(_templateObject3());

var LayerTitleSection = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.subtextColor;
});

var StyledDragHandle = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.textColorHl;
});

var DragHandle = (0, _reactSortableHoc.sortableHandle)(function (_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDragHandle, {
    className: className
  }, children);
});

var LayerPanelHeader = function LayerPanelHeader(_ref2) {
  var className = _ref2.className,
      idx = _ref2.idx,
      isConfigActive = _ref2.isConfigActive,
      isDragNDropEnabled = _ref2.isDragNDropEnabled,
      isVisible = _ref2.isVisible,
      label = _ref2.label,
      layerId = _ref2.layerId,
      layerType = _ref2.layerType,
      labelRCGColorValues = _ref2.labelRCGColorValues,
      onToggleVisibility = _ref2.onToggleVisibility,
      onUpdateLayerLabel = _ref2.onUpdateLayerLabel,
      onToggleEnableConfig = _ref2.onToggleEnableConfig,
      onRemoveLayer = _ref2.onRemoveLayer,
      showRemoveLayer = _ref2.showRemoveLayer;
  return /*#__PURE__*/_react["default"].createElement(StyledLayerPanelHeader, {
    className: (0, _classnames["default"])('layer-panel__header', {
      'sort--handle': !isConfigActive
    }),
    active: isConfigActive,
    labelRCGColorValues: labelRCGColorValues,
    onClick: onToggleEnableConfig
  }, /*#__PURE__*/_react["default"].createElement(HeaderLabelSection, {
    className: "layer-panel__header__content"
  }, isDragNDropEnabled && /*#__PURE__*/_react["default"].createElement(DragHandle, {
    className: "layer__drag-handle"
  }, /*#__PURE__*/_react["default"].createElement(_icons.VertDots, {
    height: "20px"
  })), /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
    className: "layer__visibility-toggle",
    id: layerId,
    tooltip: isVisible ? 'hide layer' : 'show layer',
    onClick: onToggleVisibility,
    IconComponent: isVisible ? _icons.EyeSeen : _icons.EyeUnseen,
    active: isVisible,
    flush: true
  }), /*#__PURE__*/_react["default"].createElement(LayerTitleSection, {
    className: "layer__title"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(LayerLabelEditor, {
    label: label,
    onEdit: onUpdateLayerLabel
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "layer__title__type"
  }, layerType)))), /*#__PURE__*/_react["default"].createElement(HeaderActionSection, {
    className: "layer-panel__header__actions"
  }, showRemoveLayer ? /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
    className: "layer__remove-layer",
    id: layerId,
    tooltip: 'Remove layer',
    onClick: onRemoveLayer,
    tooltipType: "error",
    IconComponent: _icons.Trash
  }) : null, /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
    className: "layer__enable-config",
    id: layerId,
    tooltip: 'Layer settings',
    onClick: onToggleEnableConfig,
    IconComponent: _icons.ArrowDown
  })));
};

var LayerLabelEditor = function LayerLabelEditor(_ref3) {
  var label = _ref3.label,
      onEdit = _ref3.onEdit;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.InlineInput, {
    type: "text",
    className: "layer__title__editor",
    value: label,
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    onChange: onEdit,
    id: "input-layer-label"
  });
};

LayerPanelHeader.propTypes = propTypes;
LayerPanelHeader.defaultProps = defaultProps;
var _default = LayerPanelHeader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImlzRHJhZ05Ecm9wRW5hYmxlZCIsImJvb2wiLCJpc1Zpc2libGUiLCJsYWJlbCIsIm9uVG9nZ2xlVmlzaWJpbGl0eSIsImZ1bmMiLCJjbGFzc05hbWUiLCJpZHgiLCJudW1iZXIiLCJpc0NvbmZpZ0FjdGl2ZSIsImxhYmVsUkNHQ29sb3JWYWx1ZXMiLCJhcnJheU9mIiwib25VcGRhdGVMYXllckxhYmVsIiwib25SZW1vdmVMYXllciIsImRlZmF1bHRQcm9wcyIsInNob3dSZW1vdmVMYXllciIsIlN0eWxlZExheWVyUGFuZWxIZWFkZXIiLCJTdHlsZWRQYW5lbEhlYWRlciIsInByb3BzIiwidGhlbWUiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsInRleHRDb2xvckhsIiwiSGVhZGVyTGFiZWxTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGV4dENvbG9yIiwiSGVhZGVyQWN0aW9uU2VjdGlvbiIsIkxheWVyVGl0bGVTZWN0aW9uIiwic3VidGV4dENvbG9yIiwiU3R5bGVkRHJhZ0hhbmRsZSIsIkRyYWdIYW5kbGUiLCJjaGlsZHJlbiIsIkxheWVyUGFuZWxIZWFkZXIiLCJsYXllcklkIiwibGF5ZXJUeXBlIiwib25Ub2dnbGVFbmFibGVDb25maWciLCJFeWVTZWVuIiwiRXllVW5zZWVuIiwiVHJhc2giLCJBcnJvd0Rvd24iLCJMYXllckxhYmVsRWRpdG9yIiwib25FZGl0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFFRSxJQUFBLEVBQUUsRUFBRWtCLE9BRk47QUFHRSxJQUFBLE9BQU8sRUFBRSxjQUhYO0FBSUUsSUFBQSxPQUFPLEVBQUVwQixhQUpYO0FBS0UsSUFBQSxXQUFXLEVBQUMsT0FMZDtBQU1FLElBQUEsYUFBYSxFQUFFeUI7QUFOakIsSUFEYyxHQVNaLElBVk4sZUFXRSxnQ0FBQyw2QkFBRDtBQUNFLElBQUEsU0FBUyxFQUFDLHNCQURaO0FBRUUsSUFBQSxFQUFFLEVBQUVMLE9BRk47QUFHRSxJQUFBLE9BQU8sRUFBRSxnQkFIWDtBQUlFLElBQUEsT0FBTyxFQUFFRSxvQkFKWDtBQUtFLElBQUEsYUFBYSxFQUFFSTtBQUxqQixJQVhGLENBOUJGLENBaEJ1QjtBQUFBLENBQXpCOztBQW9FQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBRXJDLEtBQUYsU0FBRUEsS0FBRjtBQUFBLE1BQVNzQyxNQUFULFNBQVNBLE1BQVQ7QUFBQSxzQkFDdkIsZ0NBQUMsOEJBQUQ7QUFDRSxJQUFBLElBQUksRUFBQyxNQURQO0FBRUUsSUFBQSxTQUFTLEVBQUMsc0JBRlo7QUFHRSxJQUFBLEtBQUssRUFBRXRDLEtBSFQ7QUFJRSxJQUFBLE9BQU8sRUFBRSxpQkFBQXVDLENBQUMsRUFBSTtBQUNaQSxNQUFBQSxDQUFDLENBQUNDLGVBQUY7QUFDRCxLQU5IO0FBT0UsSUFBQSxRQUFRLEVBQUVGLE1BUFo7QUFRRSxJQUFBLEVBQUUsRUFBQztBQVJMLElBRHVCO0FBQUEsQ0FBekI7O0FBYUFULGdCQUFnQixDQUFDckMsU0FBakIsR0FBNkJBLFNBQTdCO0FBQ0FxQyxnQkFBZ0IsQ0FBQ2xCLFlBQWpCLEdBQWdDQSxZQUFoQztlQUVla0IsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge3NvcnRhYmxlSGFuZGxlfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcbmltcG9ydCB7RXllU2VlbiwgRXllVW5zZWVuLCBWZXJ0RG90cywgQXJyb3dEb3duLCBUcmFzaH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuXG5pbXBvcnQge0lubGluZUlucHV0LCBTdHlsZWRQYW5lbEhlYWRlcn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8vIHJlcXVpcmVkXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlzRHJhZ05Ecm9wRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25Ub2dnbGVWaXNpYmlsaXR5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8vIG9wdGlvbmFsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWR4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpc0NvbmZpZ0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsUkNHQ29sb3JWYWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuICBvblVwZGF0ZUxheWVyTGFiZWw6IFByb3BUeXBlcy5mdW5jLFxuICBvblJlbW92ZUxheWVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBpc0RyYWdORHJvcEVuYWJsZWQ6IHRydWUsXG4gIHNob3dSZW1vdmVMYXllcjogdHJ1ZVxufTtcblxuY29uc3QgU3R5bGVkTGF5ZXJQYW5lbEhlYWRlciA9IHN0eWxlZChTdHlsZWRQYW5lbEhlYWRlcilgXG4gIC5sYXllcl9fcmVtb3ZlLWxheWVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xuXG4gICAgLmxheWVyX19kcmFnLWhhbmRsZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5sYXllcl9fcmVtb3ZlLWxheWVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLmxheWVyX19lbmFibGUtY29uZmlnIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRlckxhYmVsU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5gO1xuXG5jb25zdCBIZWFkZXJBY3Rpb25TZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IExheWVyVGl0bGVTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG5cbiAgLmxheWVyX190aXRsZV9fdHlwZSB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMzdweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRHJhZ0hhbmRsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gIH1cbmA7XG5cbmNvbnN0IERyYWdIYW5kbGUgPSBzb3J0YWJsZUhhbmRsZSgoe2NsYXNzTmFtZSwgY2hpbGRyZW59KSA9PiAoXG4gIDxTdHlsZWREcmFnSGFuZGxlIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57Y2hpbGRyZW59PC9TdHlsZWREcmFnSGFuZGxlPlxuKSk7XG5cbmNvbnN0IExheWVyUGFuZWxIZWFkZXIgPSAoe1xuICBjbGFzc05hbWUsXG4gIGlkeCxcbiAgaXNDb25maWdBY3RpdmUsXG4gIGlzRHJhZ05Ecm9wRW5hYmxlZCxcbiAgaXNWaXNpYmxlLFxuICBsYWJlbCxcbiAgbGF5ZXJJZCxcbiAgbGF5ZXJUeXBlLFxuICBsYWJlbFJDR0NvbG9yVmFsdWVzLFxuICBvblRvZ2dsZVZpc2liaWxpdHksXG4gIG9uVXBkYXRlTGF5ZXJMYWJlbCxcbiAgb25Ub2dnbGVFbmFibGVDb25maWcsXG4gIG9uUmVtb3ZlTGF5ZXIsXG4gIHNob3dSZW1vdmVMYXllclxufSkgPT4gKFxuICA8U3R5bGVkTGF5ZXJQYW5lbEhlYWRlclxuICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItcGFuZWxfX2hlYWRlcicsIHtcbiAgICAgICdzb3J0LS1oYW5kbGUnOiAhaXNDb25maWdBY3RpdmVcbiAgICB9KX1cbiAgICBhY3RpdmU9e2lzQ29uZmlnQWN0aXZlfVxuICAgIGxhYmVsUkNHQ29sb3JWYWx1ZXM9e2xhYmVsUkNHQ29sb3JWYWx1ZXN9XG4gICAgb25DbGljaz17b25Ub2dnbGVFbmFibGVDb25maWd9XG4gID5cbiAgICA8SGVhZGVyTGFiZWxTZWN0aW9uIGNsYXNzTmFtZT1cImxheWVyLXBhbmVsX19oZWFkZXJfX2NvbnRlbnRcIj5cbiAgICAgIHtpc0RyYWdORHJvcEVuYWJsZWQgJiYgKFxuICAgICAgICA8RHJhZ0hhbmRsZSBjbGFzc05hbWU9XCJsYXllcl9fZHJhZy1oYW5kbGVcIj5cbiAgICAgICAgICA8VmVydERvdHMgaGVpZ2h0PVwiMjBweFwiIC8+XG4gICAgICAgIDwvRHJhZ0hhbmRsZT5cbiAgICAgICl9XG4gICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJfX3Zpc2liaWxpdHktdG9nZ2xlXCJcbiAgICAgICAgaWQ9e2xheWVySWR9XG4gICAgICAgIHRvb2x0aXA9e2lzVmlzaWJsZSA/ICdoaWRlIGxheWVyJyA6ICdzaG93IGxheWVyJ31cbiAgICAgICAgb25DbGljaz17b25Ub2dnbGVWaXNpYmlsaXR5fVxuICAgICAgICBJY29uQ29tcG9uZW50PXtpc1Zpc2libGUgPyBFeWVTZWVuIDogRXllVW5zZWVufVxuICAgICAgICBhY3RpdmU9e2lzVmlzaWJsZX1cbiAgICAgICAgZmx1c2hcbiAgICAgIC8+XG4gICAgICA8TGF5ZXJUaXRsZVNlY3Rpb24gY2xhc3NOYW1lPVwibGF5ZXJfX3RpdGxlXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExheWVyTGFiZWxFZGl0b3IgbGFiZWw9e2xhYmVsfSBvbkVkaXQ9e29uVXBkYXRlTGF5ZXJMYWJlbH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyX190aXRsZV9fdHlwZVwiPntsYXllclR5cGV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXllclRpdGxlU2VjdGlvbj5cbiAgICA8L0hlYWRlckxhYmVsU2VjdGlvbj5cbiAgICA8SGVhZGVyQWN0aW9uU2VjdGlvbiBjbGFzc05hbWU9XCJsYXllci1wYW5lbF9faGVhZGVyX19hY3Rpb25zXCI+XG4gICAgICB7c2hvd1JlbW92ZUxheWVyID8gKFxuICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJsYXllcl9fcmVtb3ZlLWxheWVyXCJcbiAgICAgICAgICBpZD17bGF5ZXJJZH1cbiAgICAgICAgICB0b29sdGlwPXsnUmVtb3ZlIGxheWVyJ31cbiAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZUxheWVyfVxuICAgICAgICAgIHRvb2x0aXBUeXBlPVwiZXJyb3JcIlxuICAgICAgICAgIEljb25Db21wb25lbnQ9e1RyYXNofVxuICAgICAgICAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJfX2VuYWJsZS1jb25maWdcIlxuICAgICAgICBpZD17bGF5ZXJJZH1cbiAgICAgICAgdG9vbHRpcD17J0xheWVyIHNldHRpbmdzJ31cbiAgICAgICAgb25DbGljaz17b25Ub2dnbGVFbmFibGVDb25maWd9XG4gICAgICAgIEljb25Db21wb25lbnQ9e0Fycm93RG93bn1cbiAgICAgIC8+XG4gICAgPC9IZWFkZXJBY3Rpb25TZWN0aW9uPlxuICA8L1N0eWxlZExheWVyUGFuZWxIZWFkZXI+XG4pO1xuXG5jb25zdCBMYXllckxhYmVsRWRpdG9yID0gKHtsYWJlbCwgb25FZGl0fSkgPT4gKFxuICA8SW5saW5lSW5wdXRcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgY2xhc3NOYW1lPVwibGF5ZXJfX3RpdGxlX19lZGl0b3JcIlxuICAgIHZhbHVlPXtsYWJlbH1cbiAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfX1cbiAgICBvbkNoYW5nZT17b25FZGl0fVxuICAgIGlkPVwiaW5wdXQtbGF5ZXItbGFiZWxcIlxuICAvPlxuKTtcblxuTGF5ZXJQYW5lbEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5MYXllclBhbmVsSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJQYW5lbEhlYWRlcjtcbiJdfQ==