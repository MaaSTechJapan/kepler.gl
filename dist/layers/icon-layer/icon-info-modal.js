"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _d3Shape = require("d3-shape");

var _styledComponents2 = require("../../components/common/styled-components");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 20px;\n  letter-spacing: 1.25px;\n  margin: 18px 0 14px 0;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 6px;\n  width: 180px;\n  height: 48px;\n  margin-right: 12px;\n\n  .icon-table_item__name {\n    margin-left: 12px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var lineFunction = (0, _d3Shape.line)().x(function (d) {
  return d[0] * 10;
}).y(function (d) {
  return d[1] * 10;
});

var IconShape = function IconShape(_ref) {
  var mesh = _ref.mesh;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: "20px",
    height: "20px"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(10, 10)"
  }, mesh.cells.map(function (cell, i) {
    return /*#__PURE__*/_react["default"].createElement("path", {
      key: i,
      fill: "#000000",
      d: lineFunction(cell.map(function (idx) {
        return mesh.positions[idx];
      }))
    });
  })));
};

var StyledIconItem = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject());

var StyledCode = _styledComponents["default"].code(_templateObject2(), function (props) {
  return props.theme.titleColorLT;
});

var StyledTitle = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.titleColorLT;
});

var IconItem = function IconItem(_ref2) {
  var _ref2$icon = _ref2.icon,
      id = _ref2$icon.id,
      mesh = _ref2$icon.mesh;
  return /*#__PURE__*/_react["default"].createElement(StyledIconItem, {
    className: "icon-table__item"
  }, /*#__PURE__*/_react["default"].createElement(IconShape, {
    className: "icon-table__item__shape",
    mesh: mesh
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon-table_item__name"
  }, /*#__PURE__*/_react["default"].createElement(StyledCode, null, id)));
};

var ExampleTable = function ExampleTable() {
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.Table, {
    className: "icon-example-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "point_lat"), /*#__PURE__*/_react["default"].createElement("th", null, "point_lng"), /*#__PURE__*/_react["default"].createElement("th", null, "icon"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "37.769897"), /*#__PURE__*/_react["default"].createElement("td", null, "-122.41168"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(StyledCode, null, "android"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "37.806928"), /*#__PURE__*/_react["default"].createElement("td", null, "-122.40218"), /*#__PURE__*/_react["default"].createElement("td", null)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "37.778564"), /*#__PURE__*/_react["default"].createElement("td", null, "-122.39096"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(StyledCode, null, "calendar"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "37.745995"), /*#__PURE__*/_react["default"].createElement("td", null, "-122.30220"), /*#__PURE__*/_react["default"].createElement("td", null)), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "37.329841"), /*#__PURE__*/_react["default"].createElement("td", null, "-122.103847"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(StyledCode, null, "control-off")))));
};

var IconTable = _styledComponents["default"].div(_templateObject4());

var IconInfoModalFactory = function IconInfoModalFactory() {
  var svgIcons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var IconInfoModal = function IconInfoModal() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "icon-info-modal"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "icon-info-modal__description"
    }, /*#__PURE__*/_react["default"].createElement("span", null, "In your csv, create a column, put the name of the icon you want to draw in it. You can leave the cell empty if you do not want the icon to show for some points. When the column is named", ' '), /*#__PURE__*/_react["default"].createElement("code", null, "icon"), /*#__PURE__*/_react["default"].createElement("span", null, " kepler.gl will automatically create a icon layer for you.")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "icon-info-modal__example"
    }, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, "Example:"), /*#__PURE__*/_react["default"].createElement(ExampleTable, null)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "icon-info-modal__icons"
    }, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, "Icons"), /*#__PURE__*/_react["default"].createElement(IconTable, {
      className: "icon-info-modal__icons__table"
    }, svgIcons.map(function (icon) {
      return /*#__PURE__*/_react["default"].createElement(IconItem, {
        key: icon.id,
        icon: icon
      });
    }))));
  };

  return IconInfoModal;
};

var _default = IconInfoModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaWNvbi1sYXllci9pY29uLWluZm8tbW9kYWwuanMiXSwibmFtZXMiOlsibGluZUZ1bmN0aW9uIiwieCIsImQiLCJ5IiwiSWNvblNoYXBlIiwibWVzaCIsImNlbGxzIiwibWFwIiwiY2VsbCIsImkiLCJpZHgiLCJwb3NpdGlvbnMiLCJTdHlsZWRJY29uSXRlbSIsIkNlbnRlckZsZXhib3giLCJTdHlsZWRDb2RlIiwic3R5bGVkIiwiY29kZSIsInByb3BzIiwidGhlbWUiLCJ0aXRsZUNvbG9yTFQiLCJTdHlsZWRUaXRsZSIsImRpdiIsIkljb25JdGVtIiwiaWNvbiIsImlkIiwiRXhhbXBsZVRhYmxlIiwiSWNvblRhYmxlIiwiSWNvbkluZm9Nb2RhbEZhY3RvcnkiLCJzdmdJY29ucyIsIkljb25JbmZvTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcscUJBQ2xCQyxDQURrQixDQUNoQixVQUFBQyxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQVg7QUFBQSxDQURlLEVBRWxCQyxDQUZrQixDQUVoQixVQUFBRCxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPLEVBQVg7QUFBQSxDQUZlLENBQXJCOztBQUlBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsTUFBRUMsSUFBRixRQUFFQSxJQUFGO0FBQUEsc0JBQ2hCO0FBQUssSUFBQSxLQUFLLEVBQUMsTUFBWDtBQUFrQixJQUFBLE1BQU0sRUFBQztBQUF6QixrQkFDRTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsS0FDR0EsSUFBSSxDQUFDQyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSx3QkFDZDtBQUFNLE1B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QUFBLElBQUksRUFBRUQ7QUFBOUIsUUFEZ0I7QUFBQSxLQUFqQixDQURILENBRkYsQ0FkRixDQURvQjtBQUFBLEdBQXRCOztBQTBCQSxTQUFPTSxhQUFQO0FBQ0QsQ0E1QkQ7O2VBOEJlRixvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge2xpbmV9IGZyb20gJ2QzLXNoYXBlJztcclxuaW1wb3J0IHtUYWJsZSwgQ2VudGVyRmxleGJveH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgbGluZUZ1bmN0aW9uID0gbGluZSgpXHJcbiAgLngoZCA9PiBkWzBdICogMTApXHJcbiAgLnkoZCA9PiBkWzFdICogMTApO1xyXG5cclxuY29uc3QgSWNvblNoYXBlID0gKHttZXNofSkgPT4gKFxyXG4gIDxzdmcgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiPlxyXG4gICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwLCAxMClcIj5cclxuICAgICAge21lc2guY2VsbHMubWFwKChjZWxsLCBpKSA9PiAoXHJcbiAgICAgICAgPHBhdGgga2V5PXtpfSBmaWxsPVwiIzAwMDAwMFwiIGQ9e2xpbmVGdW5jdGlvbihjZWxsLm1hcChpZHggPT4gbWVzaC5wb3NpdGlvbnNbaWR4XSkpfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZz5cclxuICA8L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IFN0eWxlZEljb25JdGVtID0gc3R5bGVkKENlbnRlckZsZXhib3gpYFxyXG4gIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cclxuICAuaWNvbi10YWJsZV9pdGVtX19uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZENvZGUgPSBzdHlsZWQuY29kZWBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xyXG4gIG1hcmdpbjogMThweCAwIDE0cHggMDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xyXG5gO1xyXG5cclxuY29uc3QgSWNvbkl0ZW0gPSAoe2ljb246IHtpZCwgbWVzaH19KSA9PiAoXHJcbiAgPFN0eWxlZEljb25JdGVtIGNsYXNzTmFtZT1cImljb24tdGFibGVfX2l0ZW1cIj5cclxuICAgIDxJY29uU2hhcGUgY2xhc3NOYW1lPVwiaWNvbi10YWJsZV9faXRlbV9fc2hhcGVcIiBtZXNoPXttZXNofSAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLXRhYmxlX2l0ZW1fX25hbWVcIj5cclxuICAgICAgPFN0eWxlZENvZGU+e2lkfTwvU3R5bGVkQ29kZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvU3R5bGVkSWNvbkl0ZW0+XHJcbik7XHJcblxyXG5jb25zdCBFeGFtcGxlVGFibGUgPSAoKSA9PiAoXHJcbiAgPFRhYmxlIGNsYXNzTmFtZT1cImljb24tZXhhbXBsZS10YWJsZVwiPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgICA8dHI+XHJcbiAgICAgICAgPHRoPnBvaW50X2xhdDwvdGg+XHJcbiAgICAgICAgPHRoPnBvaW50X2xuZzwvdGg+XHJcbiAgICAgICAgPHRoPmljb248L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuICAgIDx0Ym9keT5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZD4zNy43Njk4OTc8L3RkPlxyXG4gICAgICAgIDx0ZD4tMTIyLjQxMTY4PC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8U3R5bGVkQ29kZT5hbmRyb2lkPC9TdHlsZWRDb2RlPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+MzcuODA2OTI4PC90ZD5cclxuICAgICAgICA8dGQ+LTEyMi40MDIxODwvdGQ+XHJcbiAgICAgICAgPHRkIC8+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+MzcuNzc4NTY0PC90ZD5cclxuICAgICAgICA8dGQ+LTEyMi4zOTA5NjwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPFN0eWxlZENvZGU+Y2FsZW5kYXI8L1N0eWxlZENvZGU+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZD4zNy43NDU5OTU8L3RkPlxyXG4gICAgICAgIDx0ZD4tMTIyLjMwMjIwPC90ZD5cclxuICAgICAgICA8dGQgLz5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZD4zNy4zMjk4NDE8L3RkPlxyXG4gICAgICAgIDx0ZD4tMTIyLjEwMzg0NzwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPFN0eWxlZENvZGU+Y29udHJvbC1vZmY8L1N0eWxlZENvZGU+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIDwvdGJvZHk+XHJcbiAgPC9UYWJsZT5cclxuKTtcclxuXHJcbmNvbnN0IEljb25UYWJsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbmA7XHJcblxyXG5jb25zdCBJY29uSW5mb01vZGFsRmFjdG9yeSA9IChzdmdJY29ucyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgSWNvbkluZm9Nb2RhbCA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1pbmZvLW1vZGFsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1pbmZvLW1vZGFsX19kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgSW4geW91ciBjc3YsIGNyZWF0ZSBhIGNvbHVtbiwgcHV0IHRoZSBuYW1lIG9mIHRoZSBpY29uIHlvdSB3YW50IHRvIGRyYXcgaW4gaXQuIFlvdSBjYW5cclxuICAgICAgICAgIGxlYXZlIHRoZSBjZWxsIGVtcHR5IGlmIHlvdSBkbyBub3Qgd2FudCB0aGUgaWNvbiB0byBzaG93IGZvciBzb21lIHBvaW50cy4gV2hlbiB0aGUgY29sdW1uXHJcbiAgICAgICAgICBpcyBuYW1lZHsnICd9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxjb2RlPmljb248L2NvZGU+XHJcbiAgICAgICAgPHNwYW4+IGtlcGxlci5nbCB3aWxsIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGEgaWNvbiBsYXllciBmb3IgeW91Ljwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1pbmZvLW1vZGFsX19leGFtcGxlXCI+XHJcbiAgICAgICAgPFN0eWxlZFRpdGxlPkV4YW1wbGU6PC9TdHlsZWRUaXRsZT5cclxuICAgICAgICA8RXhhbXBsZVRhYmxlIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24taW5mby1tb2RhbF9faWNvbnNcIj5cclxuICAgICAgICA8U3R5bGVkVGl0bGU+SWNvbnM8L1N0eWxlZFRpdGxlPlxyXG4gICAgICAgIDxJY29uVGFibGUgY2xhc3NOYW1lPVwiaWNvbi1pbmZvLW1vZGFsX19pY29uc19fdGFibGVcIj5cclxuICAgICAgICAgIHtzdmdJY29ucy5tYXAoaWNvbiA9PiAoXHJcbiAgICAgICAgICAgIDxJY29uSXRlbSBrZXk9e2ljb24uaWR9IGljb249e2ljb259IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0ljb25UYWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG5cclxuICByZXR1cm4gSWNvbkluZm9Nb2RhbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEljb25JbmZvTW9kYWxGYWN0b3J5O1xyXG4iXX0=