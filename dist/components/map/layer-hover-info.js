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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9sYXllci1ob3Zlci1pbmZvLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyTmFtZSIsIkNlbnRlckZsZXhib3giLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9ySGwiLCJSb3ciLCJuYW1lIiwidmFsdWUiLCJ1cmwiLCJtYXRjaCIsImFzSW1nIiwidGVzdCIsIkVudHJ5SW5mbyIsImZpZWxkc1RvU2hvdyIsImZpZWxkcyIsImRhdGEiLCJtYXAiLCJFbnRyeUluZm9Sb3ciLCJmaWVsZCIsImZpbmQiLCJmIiwidmFsdWVJZHgiLCJ0YWJsZUZpZWxkSW5kZXgiLCJkaXNwbGF5VmFsdWUiLCJ0eXBlIiwiQ2VsbEluZm8iLCJsYXllciIsImNvbmZpZyIsImNvbG9yRmllbGQiLCJzaXplRmllbGQiLCJwb2ludHMiLCJsZW5ndGgiLCJ2aXN1YWxDaGFubmVscyIsImNvbG9yIiwiZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uIiwibWVhc3VyZSIsImNvbG9yVmFsdWUiLCJzaXplIiwiZWxldmF0aW9uVmFsdWUiLCJMYXllckhvdmVySW5mb0ZhY3RvcnkiLCJMYXllckhvdmVySW5mbyIsImxhYmVsIiwiaXNBZ2dyZWdhdGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImFueSIsIm9iamVjdCIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLGVBQWUsR0FBRyxrQ0FBT0MsZ0NBQVAsQ0FBSCxvQkFDakIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBRFksQ0FBckI7OztBQWFQLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQXdCO0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLE1BQWhCQyxLQUFn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QUN3QixLQUFOLENBQVlnQixZQUFaLGdCQUEyQixnQ0FBQyxRQUFELEVBQWN4QyxLQUFkLENBQTNCLGdCQUFxRCxnQ0FBQyxTQUFELEVBQWVBLEtBQWYsQ0FEeEQsQ0FMRixDQURGO0FBV0QsR0FsQkQ7O0FBb0JBc0MsRUFBQUEsY0FBYyxDQUFDRyxTQUFmLEdBQTJCO0FBQ3pCN0IsSUFBQUEsTUFBTSxFQUFFOEIsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxHQUE1QixDQURpQjtBQUV6QmpDLElBQUFBLFlBQVksRUFBRStCLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsR0FBNUIsQ0FGVztBQUd6QnBCLElBQUFBLEtBQUssRUFBRWtCLHNCQUFVRyxNQUhRO0FBSXpCaEMsSUFBQUEsSUFBSSxFQUFFNkIsc0JBQVVJLFNBQVYsQ0FBb0IsQ0FBQ0osc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxHQUE1QixDQUFELEVBQW1DRixzQkFBVUcsTUFBN0MsQ0FBcEI7QUFKbUIsR0FBM0I7QUFNQSxTQUFPUCxjQUFQO0FBQ0QsQ0E1QkQ7O2VBOEJlRCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Q2VudGVyRmxleGJveH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtMYXllcnN9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge3BhcnNlRmllbGRWYWx1ZX0gZnJvbSAndXRpbHMvZGF0YS11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMYXllck5hbWUgPSBzdHlsZWQoQ2VudGVyRmxleGJveClgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40M3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFJvdyA9ICh7bmFtZSwgdmFsdWUsIHVybH0pID0+IHtcbiAgLy8gU2V0ICd1cmwnIHRvICd2YWx1ZScgaWYgaXQgbG9va3MgbGlrZSBhIHVybFxuICBpZiAoIXVybCAmJiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLm1hdGNoKC9eaHR0cC8pKSB7XG4gICAgdXJsID0gdmFsdWU7XG4gIH1cblxuICBjb25zdCBhc0ltZyA9IC88aW1nPi8udGVzdChuYW1lKTtcbiAgcmV0dXJuIChcbiAgICA8dHIgY2xhc3NOYW1lPVwicm93XCIga2V5PXtuYW1lfT5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJyb3dfX25hbWVcIj57bmFtZX08L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInJvd19fdmFsdWVcIj5cbiAgICAgICAge2FzSW1nID8gKFxuICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZX0gLz5cbiAgICAgICAgKSA6IHVybCA/IChcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj17dXJsfT5cbiAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgKX1cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgKTtcbn07XG5cbmNvbnN0IEVudHJ5SW5mbyA9ICh7ZmllbGRzVG9TaG93LCBmaWVsZHMsIGRhdGF9KSA9PiAoXG4gIDx0Ym9keT5cbiAgICB7ZmllbGRzVG9TaG93Lm1hcChuYW1lID0+IChcbiAgICAgIDxFbnRyeUluZm9Sb3cga2V5PXtuYW1lfSBuYW1lPXtuYW1lfSBmaWVsZHM9e2ZpZWxkc30gZGF0YT17ZGF0YX0gLz5cbiAgICApKX1cbiAgPC90Ym9keT5cbik7XG5cbmNvbnN0IEVudHJ5SW5mb1JvdyA9ICh7bmFtZSwgZmllbGRzLCBkYXRhfSkgPT4ge1xuICBjb25zdCBmaWVsZCA9IGZpZWxkcy5maW5kKGYgPT4gZi5uYW1lID09PSBuYW1lKTtcbiAgaWYgKCFmaWVsZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgdmFsdWVJZHggPSBmaWVsZC50YWJsZUZpZWxkSW5kZXggLSAxO1xuICBjb25zdCBkaXNwbGF5VmFsdWUgPSBwYXJzZUZpZWxkVmFsdWUoZGF0YVt2YWx1ZUlkeF0sIGZpZWxkLnR5cGUpO1xuXG4gIHJldHVybiA8Um93IG5hbWU9e25hbWV9IHZhbHVlPXtkaXNwbGF5VmFsdWV9IC8+O1xufTtcblxuY29uc3QgQ2VsbEluZm8gPSAoe2RhdGEsIGxheWVyfSkgPT4ge1xuICBjb25zdCB7Y29sb3JGaWVsZCwgc2l6ZUZpZWxkfSA9IGxheWVyLmNvbmZpZztcblxuICByZXR1cm4gKFxuICAgIDx0Ym9keT5cbiAgICAgIDxSb3cgbmFtZT17J3RvdGFsIHBvaW50cyd9IGtleT1cImNvdW50XCIgdmFsdWU9e2RhdGEucG9pbnRzICYmIGRhdGEucG9pbnRzLmxlbmd0aH0gLz5cbiAgICAgIHtjb2xvckZpZWxkICYmIGxheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yID8gKFxuICAgICAgICA8Um93XG4gICAgICAgICAgbmFtZT17bGF5ZXIuZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uKCdjb2xvcicpLm1lYXN1cmV9XG4gICAgICAgICAga2V5PVwiY29sb3JcIlxuICAgICAgICAgIHZhbHVlPXtkYXRhLmNvbG9yVmFsdWUgfHwgJ04vQSd9XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtzaXplRmllbGQgJiYgbGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZSA/IChcbiAgICAgICAgPFJvd1xuICAgICAgICAgIG5hbWU9e2xheWVyLmdldFZpc3VhbENoYW5uZWxEZXNjcmlwdGlvbignc2l6ZScpLm1lYXN1cmV9XG4gICAgICAgICAga2V5PVwic2l6ZVwiXG4gICAgICAgICAgdmFsdWU9e2RhdGEuZWxldmF0aW9uVmFsdWUgfHwgJ04vQSd9XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbH1cbiAgICA8L3Rib2R5PlxuICApO1xufTtcblxuY29uc3QgTGF5ZXJIb3ZlckluZm9GYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBMYXllckhvdmVySW5mbyA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7ZGF0YSwgbGF5ZXJ9ID0gcHJvcHM7XG5cbiAgICBpZiAoIWRhdGEgfHwgIWxheWVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtcG9wb3Zlcl9fbGF5ZXItaW5mb1wiPlxuICAgICAgICA8U3R5bGVkTGF5ZXJOYW1lIGNsYXNzTmFtZT1cIm1hcC1wb3BvdmVyX19sYXllci1uYW1lXCI+XG4gICAgICAgICAgPExheWVycyBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgICAgICB7cHJvcHMubGF5ZXIuY29uZmlnLmxhYmVsfVxuICAgICAgICA8L1N0eWxlZExheWVyTmFtZT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1hcC1wb3BvdmVyX190YWJsZVwiPlxuICAgICAgICAgIHtwcm9wcy5sYXllci5pc0FnZ3JlZ2F0ZWQgPyA8Q2VsbEluZm8gey4uLnByb3BzfSAvPiA6IDxFbnRyeUluZm8gey4uLnByb3BzfSAvPn1cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgTGF5ZXJIb3ZlckluZm8ucHJvcFR5cGVzID0ge1xuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgZmllbGRzVG9TaG93OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkYXRhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSwgUHJvcFR5cGVzLm9iamVjdF0pXG4gIH07XG4gIHJldHVybiBMYXllckhvdmVySW5mbztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheWVySG92ZXJJbmZvRmFjdG9yeTtcbiJdfQ==