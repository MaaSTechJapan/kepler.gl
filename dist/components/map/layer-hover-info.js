"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledLayerName = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dataUtils = require("../../utils/data-utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 12px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n  padding: 0 14px;\n  margin-top: 12px;\n\n  svg {\n    margin-right: 4px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLayerName = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject(), function (props) {
  return props.theme.textColorHl;
});
exports.StyledLayerName = StyledLayerName;

var Row = function Row(_ref) {
  var name = _ref.name,
      value = _ref.value,
      url = _ref.url;

  // Set 'url' to 'value' if it looks like a url
  if (!url && value && typeof value === 'string' && value.match(/^http/)) {
    url = value;
  }

  var asImg = /<img>/.test(name);
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "row",
    key: name
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "row__name"
  }, name), /*#__PURE__*/_react["default"].createElement("td", {
    className: "row__value"
  }, asImg ? /*#__PURE__*/_react["default"].createElement("img", {
    src: value
  }) : url ? /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: url
  }, value) : value));
};

var EntryInfo = function EntryInfo(_ref2) {
  var fieldsToShow = _ref2.fieldsToShow,
      fields = _ref2.fields,
      data = _ref2.data;
  return /*#__PURE__*/_react["default"].createElement("tbody", null, fieldsToShow.map(function (name) {
    return /*#__PURE__*/_react["default"].createElement(EntryInfoRow, {
      key: name,
      name: name,
      fields: fields,
      data: data
    });
  }));
};

var EntryInfoRow = function EntryInfoRow(_ref3) {
  var name = _ref3.name,
      fields = _ref3.fields,
      data = _ref3.data;
  var field = fields.find(function (f) {
    return f.name === name;
  });

  if (!field) {
    return null;
  }

  var valueIdx = field.tableFieldIndex - 1;
  var displayValue = (0, _dataUtils.parseFieldValue)(data[valueIdx], field.type);
  return /*#__PURE__*/_react["default"].createElement(Row, {
    name: name,
    value: displayValue
  });
};

var CellInfo = function CellInfo(_ref4) {
  var data = _ref4.data,
      layer = _ref4.layer;
  var _layer$config = layer.config,
      colorField = _layer$config.colorField,
      sizeField = _layer$config.sizeField;
  return /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement(Row, {
    name: 'total points',
    key: "count",
    value: data.points && data.points.length
  }), colorField && layer.visualChannels.color ? /*#__PURE__*/_react["default"].createElement(Row, {
    name: layer.getVisualChannelDescription('color').measure,
    key: "color",
    value: data.colorValue || 'N/A'
  }) : null, sizeField && layer.visualChannels.size ? /*#__PURE__*/_react["default"].createElement(Row, {
    name: layer.getVisualChannelDescription('size').measure,
    key: "size",
    value: data.elevationValue || 'N/A'
  }) : null);
};

var LayerHoverInfoFactory = function LayerHoverInfoFactory() {
  var LayerHoverInfo = function LayerHoverInfo(props) {
    var data = props.data,
        layer = props.layer;

    if (!data || !layer) {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "map-popover__layer-info"
    }, /*#__PURE__*/_react["default"].createElement(StyledLayerName, {
      className: "map-popover__layer-name"
    }, /*#__PURE__*/_react["default"].createElement(_icons.Layers, {
      height: "12px"
    }), props.layer.config.label), /*#__PURE__*/_react["default"].createElement("table", {
      className: "map-popover__table"
    }, props.layer.isAggregated ? /*#__PURE__*/_react["default"].createElement(CellInfo, props) : /*#__PURE__*/_react["default"].createElement(EntryInfo, props)));
  };

  LayerHoverInfo.propTypes = {
    fields: _propTypes["default"].arrayOf(_propTypes["default"].any),
    fieldsToShow: _propTypes["default"].arrayOf(_propTypes["default"].any),
    layer: _propTypes["default"].object,
    data: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].any), _propTypes["default"].object])
  };
  return LayerHoverInfo;
};

var _default = LayerHoverInfoFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9sYXllci1ob3Zlci1pbmZvLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyTmFtZSIsIkNlbnRlckZsZXhib3giLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9ySGwiLCJSb3ciLCJuYW1lIiwidmFsdWUiLCJ1cmwiLCJtYXRjaCIsImFzSW1nIiwidGVzdCIsIkVudHJ5SW5mbyIsImZpZWxkc1RvU2hvdyIsImZpZWxkcyIsImRhdGEiLCJtYXAiLCJFbnRyeUluZm9Sb3ciLCJmaWVsZCIsImZpbmQiLCJmIiwidmFsdWVJZHgiLCJ0YWJsZUZpZWxkSW5kZXgiLCJkaXNwbGF5VmFsdWUiLCJ0eXBlIiwiQ2VsbEluZm8iLCJsYXllciIsImNvbmZpZyIsImNvbG9yRmllbGQiLCJzaXplRmllbGQiLCJwb2ludHMiLCJsZW5ndGgiLCJ2aXN1YWxDaGFubmVscyIsImNvbG9yIiwiZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uIiwibWVhc3VyZSIsImNvbG9yVmFsdWUiLCJzaXplIiwiZWxldmF0aW9uVmFsdWUiLCJMYXllckhvdmVySW5mb0ZhY3RvcnkiLCJMYXllckhvdmVySW5mbyIsImxhYmVsIiwiaXNBZ2dyZWdhdGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImFueSIsIm9iamVjdCIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLGVBQWUsR0FBRyxrQ0FBT0MsZ0NBQVAsQ0FBSCxvQkFDakIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBRFksQ0FBckI7OztBQWFQLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQXdCO0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLE1BQWhCQyxLQUFn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QUN3QixLQUFOLENBQVlnQixZQUFaLGdCQUEyQixnQ0FBQyxRQUFELEVBQWN4QyxLQUFkLENBQTNCLGdCQUFxRCxnQ0FBQyxTQUFELEVBQWVBLEtBQWYsQ0FEeEQsQ0FMRixDQURGO0FBV0QsR0FsQkQ7O0FBb0JBc0MsRUFBQUEsY0FBYyxDQUFDRyxTQUFmLEdBQTJCO0FBQ3pCN0IsSUFBQUEsTUFBTSxFQUFFOEIsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxHQUE1QixDQURpQjtBQUV6QmpDLElBQUFBLFlBQVksRUFBRStCLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsR0FBNUIsQ0FGVztBQUd6QnBCLElBQUFBLEtBQUssRUFBRWtCLHNCQUFVRyxNQUhRO0FBSXpCaEMsSUFBQUEsSUFBSSxFQUFFNkIsc0JBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxHQUE1QixDQUFELEVBQW1DRixzQkFBVUcsTUFBN0MsQ0FBcEI7QUFKbUIsR0FBM0I7QUFNQSxTQUFPUCxjQUFQO0FBQ0QsQ0E1QkQ7O2VBOEJlRCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0NlbnRlckZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtMYXllcnN9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtwYXJzZUZpZWxkVmFsdWV9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyTmFtZSA9IHN0eWxlZChDZW50ZXJGbGV4Ym94KWBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjQzcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgcGFkZGluZzogMCAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSb3cgPSAoe25hbWUsIHZhbHVlLCB1cmx9KSA9PiB7XHJcbiAgLy8gU2V0ICd1cmwnIHRvICd2YWx1ZScgaWYgaXQgbG9va3MgbGlrZSBhIHVybFxyXG4gIGlmICghdXJsICYmIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubWF0Y2goL15odHRwLykpIHtcclxuICAgIHVybCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYXNJbWcgPSAvPGltZz4vLnRlc3QobmFtZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDx0ciBjbGFzc05hbWU9XCJyb3dcIiBrZXk9e25hbWV9PlxyXG4gICAgICA8dGQgY2xhc3NOYW1lPVwicm93X19uYW1lXCI+e25hbWV9PC90ZD5cclxuICAgICAgPHRkIGNsYXNzTmFtZT1cInJvd19fdmFsdWVcIj5cclxuICAgICAgICB7YXNJbWcgPyAoXHJcbiAgICAgICAgICA8aW1nIHNyYz17dmFsdWV9IC8+XHJcbiAgICAgICAgKSA6IHVybCA/IChcclxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXt1cmx9PlxyXG4gICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgKX1cclxuICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEVudHJ5SW5mbyA9ICh7ZmllbGRzVG9TaG93LCBmaWVsZHMsIGRhdGF9KSA9PiAoXHJcbiAgPHRib2R5PlxyXG4gICAge2ZpZWxkc1RvU2hvdy5tYXAobmFtZSA9PiAoXHJcbiAgICAgIDxFbnRyeUluZm9Sb3cga2V5PXtuYW1lfSBuYW1lPXtuYW1lfSBmaWVsZHM9e2ZpZWxkc30gZGF0YT17ZGF0YX0gLz5cclxuICAgICkpfVxyXG4gIDwvdGJvZHk+XHJcbik7XHJcblxyXG5jb25zdCBFbnRyeUluZm9Sb3cgPSAoe25hbWUsIGZpZWxkcywgZGF0YX0pID0+IHtcclxuICBjb25zdCBmaWVsZCA9IGZpZWxkcy5maW5kKGYgPT4gZi5uYW1lID09PSBuYW1lKTtcclxuICBpZiAoIWZpZWxkKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHZhbHVlSWR4ID0gZmllbGQudGFibGVGaWVsZEluZGV4IC0gMTtcclxuICBjb25zdCBkaXNwbGF5VmFsdWUgPSBwYXJzZUZpZWxkVmFsdWUoZGF0YVt2YWx1ZUlkeF0sIGZpZWxkLnR5cGUpO1xyXG5cclxuICByZXR1cm4gPFJvdyBuYW1lPXtuYW1lfSB2YWx1ZT17ZGlzcGxheVZhbHVlfSAvPjtcclxufTtcclxuXHJcbmNvbnN0IENlbGxJbmZvID0gKHtkYXRhLCBsYXllcn0pID0+IHtcclxuICBjb25zdCB7Y29sb3JGaWVsZCwgc2l6ZUZpZWxkfSA9IGxheWVyLmNvbmZpZztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx0Ym9keT5cclxuICAgICAgPFJvdyBuYW1lPXsndG90YWwgcG9pbnRzJ30ga2V5PVwiY291bnRcIiB2YWx1ZT17ZGF0YS5wb2ludHMgJiYgZGF0YS5wb2ludHMubGVuZ3RofSAvPlxyXG4gICAgICB7Y29sb3JGaWVsZCAmJiBsYXllci52aXN1YWxDaGFubmVscy5jb2xvciA/IChcclxuICAgICAgICA8Um93XHJcbiAgICAgICAgICBuYW1lPXtsYXllci5nZXRWaXN1YWxDaGFubmVsRGVzY3JpcHRpb24oJ2NvbG9yJykubWVhc3VyZX1cclxuICAgICAgICAgIGtleT1cImNvbG9yXCJcclxuICAgICAgICAgIHZhbHVlPXtkYXRhLmNvbG9yVmFsdWUgfHwgJ04vQSd9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIHtzaXplRmllbGQgJiYgbGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZSA/IChcclxuICAgICAgICA8Um93XHJcbiAgICAgICAgICBuYW1lPXtsYXllci5nZXRWaXN1YWxDaGFubmVsRGVzY3JpcHRpb24oJ3NpemUnKS5tZWFzdXJlfVxyXG4gICAgICAgICAga2V5PVwic2l6ZVwiXHJcbiAgICAgICAgICB2YWx1ZT17ZGF0YS5lbGV2YXRpb25WYWx1ZSB8fCAnTi9BJ31cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvdGJvZHk+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExheWVySG92ZXJJbmZvRmFjdG9yeSA9ICgpID0+IHtcclxuICBjb25zdCBMYXllckhvdmVySW5mbyA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IHtkYXRhLCBsYXllcn0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoIWRhdGEgfHwgIWxheWVyKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLXBvcG92ZXJfX2xheWVyLWluZm9cIj5cclxuICAgICAgICA8U3R5bGVkTGF5ZXJOYW1lIGNsYXNzTmFtZT1cIm1hcC1wb3BvdmVyX19sYXllci1uYW1lXCI+XHJcbiAgICAgICAgICA8TGF5ZXJzIGhlaWdodD1cIjEycHhcIiAvPlxyXG4gICAgICAgICAge3Byb3BzLmxheWVyLmNvbmZpZy5sYWJlbH1cclxuICAgICAgICA8L1N0eWxlZExheWVyTmFtZT5cclxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWFwLXBvcG92ZXJfX3RhYmxlXCI+XHJcbiAgICAgICAgICB7cHJvcHMubGF5ZXIuaXNBZ2dyZWdhdGVkID8gPENlbGxJbmZvIHsuLi5wcm9wc30gLz4gOiA8RW50cnlJbmZvIHsuLi5wcm9wc30gLz59XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIExheWVySG92ZXJJbmZvLnByb3BUeXBlcyA9IHtcclxuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgICBmaWVsZHNUb1Nob3c6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxyXG4gICAgbGF5ZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBkYXRhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSwgUHJvcFR5cGVzLm9iamVjdF0pXHJcbiAgfTtcclxuICByZXR1cm4gTGF5ZXJIb3ZlckluZm87XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXllckhvdmVySW5mb0ZhY3Rvcnk7XHJcbiJdfQ==