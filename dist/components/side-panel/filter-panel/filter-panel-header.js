"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledFilterHeader = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _icons = require("../../common/icons");

var _colorUtils = require("../../../utils/color-utils");

var _styledComponents2 = require("../../common/styled-components");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex: 2;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: pointer;\n  padding: 10px 12px;\n\n  .field-selector {\n    flex: 2;\n  }\n\n  border-left: 3px solid;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledFilterHeader = (0, _styledComponents["default"])(_styledComponents2.StyledPanelHeader)(_templateObject(), function (props) {
  return props.labelRCGColorValues && props.labelRCGColorValues.length > 0 ? "border-image: ".concat((0, _colorUtils.createLinearGradient)('bottom', props.labelRCGColorValues), " 3;") : 'border-color: transparent;';
});
exports.StyledFilterHeader = StyledFilterHeader;

var StyledChildrenContainer = _styledComponents["default"].div(_templateObject2());

FilterPanelHeaderFactory.deps = [];

function FilterPanelHeaderFactory() {
  var FilterPanelHeader = function FilterPanelHeader(_ref) {
    var children = _ref.children,
        datasets = _ref.datasets,
        allAvailableFields = _ref.allAvailableFields,
        setFilter = _ref.setFilter,
        idx = _ref.idx,
        filter = _ref.filter,
        removeFilter = _ref.removeFilter;
    return /*#__PURE__*/_react["default"].createElement(StyledFilterHeader, {
      className: "filter-panel__header",
      labelRCGColorValues: datasets.map(function (d) {
        return d.color;
      })
    }, /*#__PURE__*/_react["default"].createElement(StyledChildrenContainer, null, children), /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
      id: filter.id,
      tooltip: "delete",
      tooltipType: "error",
      onClick: removeFilter,
      hoverColor: 'errorColor',
      IconComponent: _icons.Trash
    }));
  };

  return FilterPanelHeader;
}

var _default = FilterPanelHeaderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC1oZWFkZXIuanMiXSwibmFtZXMiOlsiU3R5bGVkRmlsdGVySGVhZGVyIiwiU3R5bGVkUGFuZWxIZWFkZXIiLCJwcm9wcyIsImxhYmVsUkNHQ29sb3JWYWx1ZXMiLCJsZW5ndGgiLCJTdHlsZWRDaGlsZHJlbkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSIsImRlcHMiLCJGaWx0ZXJQYW5lbEhlYWRlciIsImNoaWxkcmVuIiwiZGF0YXNldHMiLCJhbGxBdmFpbGFibGVGaWVsZHMiLCJzZXRGaWx0ZXIiLCJpZHgiLCJmaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJtYXAiLCJkIiwiY29sb3IiLCJpZCIsIlRyYXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLGtCQUFrQixHQUFHLGtDQUFPQyxvQ0FBUCxDQUFILG9CQVMzQixVQUFBQyxLQUFLO0FBQUEsU0FDTEEsS0FBSyxDQUFDQyxtQkFBTixJQUE2QkQsS0FBSyxDQUFDQyxtQkFBTixDQUEwQkMsTUFBMUIsR0FBbUMsQ0FBaEUsMkJBQ3FCLHNDQUFxQixRQUFyQixFQUErQkYsS0FBSyxDQUFDQyxtQkFBckMsQ0FEckIsV0FFSSw0QkFIQztBQUFBLENBVHNCLENBQXhCOzs7QUFlUCxJQUFNRSx1QkFBdUIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQTdCOztBQUtBQyx3QkFBd0IsQ0FBQ0MsSUFBekIsR0FBZ0MsRUFBaEM7O0FBRUEsU0FBU0Qsd0JBQVQsR0FBb0M7QUFDbEMsTUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFFBQ3hCQyxRQUR3QixRQUN4QkEsUUFEd0I7QUFBQSxRQUV4QkMsUUFGd0IsUUFFeEJBLFFBRndCO0FBQUEsUUFHeEJDLGtCQUh3QixRQUd4QkEsa0JBSHdCO0FBQUEsUUFJeEJDLFNBSndCLFFBSXhCQSxTQUp3QjtBQUFBLFFBS3hCQyxHQUx3QixRQUt4QkEsR0FMd0I7QUFBQSxRQU14QkMsTUFOd0IsUUFNeEJBLE1BTndCO0FBQUEsUUFPeEJDLFlBUHdCLFFBT3hCQSxZQVB3QjtBQUFBLHdCQVN4QixnQ0FBQyxrQkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFDLHNCQURaO0FBRUUsTUFBQSxtQkFBbUIsRUFBRUwsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsS0FBTjtBQUFBLE9BQWQ7QUFGdkIsb0JBSUUsZ0NBQUMsdUJBQUQsUUFBMEJULFFBQTFCLENBSkYsZUFLRSxnQ0FBQyw2QkFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFSyxNQUFNLENBQUNLLEVBRGI7QUFFRSxNQUFBLE9BQU8sRUFBQyxRQUZWO0FBR0UsTUFBQSxXQUFXLEVBQUMsT0FIZDtBQUlFLE1BQUEsT0FBTyxFQUFFSixZQUpYO0FBS0UsTUFBQSxVQUFVLEVBQUUsWUFMZDtBQU1FLE1BQUEsYUFBYSxFQUFFSztBQU5qQixNQUxGLENBVHdCO0FBQUEsR0FBMUI7O0FBeUJBLFNBQU9aLGlCQUFQO0FBQ0Q7O2VBRWNGLHdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcbmltcG9ydCB7VHJhc2h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCB7Y3JlYXRlTGluZWFyR3JhZGllbnR9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcbmltcG9ydCB7U3R5bGVkUGFuZWxIZWFkZXJ9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbHRlckhlYWRlciA9IHN0eWxlZChTdHlsZWRQYW5lbEhlYWRlcilgXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuXG4gIC5maWVsZC1zZWxlY3RvciB7XG4gICAgZmxleDogMjtcbiAgfVxuXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQ7XG4gICR7cHJvcHMgPT5cbiAgICBwcm9wcy5sYWJlbFJDR0NvbG9yVmFsdWVzICYmIHByb3BzLmxhYmVsUkNHQ29sb3JWYWx1ZXMubGVuZ3RoID4gMFxuICAgICAgPyBgYm9yZGVyLWltYWdlOiAke2NyZWF0ZUxpbmVhckdyYWRpZW50KCdib3R0b20nLCBwcm9wcy5sYWJlbFJDR0NvbG9yVmFsdWVzKX0gMztgXG4gICAgICA6ICdib3JkZXItY29sb3I6IHRyYW5zcGFyZW50Oyd9XG5gO1xuXG5jb25zdCBTdHlsZWRDaGlsZHJlbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDI7XG5gO1xuXG5GaWx0ZXJQYW5lbEhlYWRlckZhY3RvcnkuZGVwcyA9IFtdO1xuXG5mdW5jdGlvbiBGaWx0ZXJQYW5lbEhlYWRlckZhY3RvcnkoKSB7XG4gIGNvbnN0IEZpbHRlclBhbmVsSGVhZGVyID0gKHtcbiAgICBjaGlsZHJlbixcbiAgICBkYXRhc2V0cyxcbiAgICBhbGxBdmFpbGFibGVGaWVsZHMsXG4gICAgc2V0RmlsdGVyLFxuICAgIGlkeCxcbiAgICBmaWx0ZXIsXG4gICAgcmVtb3ZlRmlsdGVyXG4gIH0pID0+IChcbiAgICA8U3R5bGVkRmlsdGVySGVhZGVyXG4gICAgICBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxfX2hlYWRlclwiXG4gICAgICBsYWJlbFJDR0NvbG9yVmFsdWVzPXtkYXRhc2V0cy5tYXAoZCA9PiBkLmNvbG9yKX1cbiAgICA+XG4gICAgICA8U3R5bGVkQ2hpbGRyZW5Db250YWluZXI+e2NoaWxkcmVufTwvU3R5bGVkQ2hpbGRyZW5Db250YWluZXI+XG4gICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgaWQ9e2ZpbHRlci5pZH1cbiAgICAgICAgdG9vbHRpcD1cImRlbGV0ZVwiXG4gICAgICAgIHRvb2x0aXBUeXBlPVwiZXJyb3JcIlxuICAgICAgICBvbkNsaWNrPXtyZW1vdmVGaWx0ZXJ9XG4gICAgICAgIGhvdmVyQ29sb3I9eydlcnJvckNvbG9yJ31cbiAgICAgICAgSWNvbkNvbXBvbmVudD17VHJhc2h9XG4gICAgICAvPlxuICAgIDwvU3R5bGVkRmlsdGVySGVhZGVyPlxuICApO1xuXG4gIHJldHVybiBGaWx0ZXJQYW5lbEhlYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyUGFuZWxIZWFkZXJGYWN0b3J5O1xuIl19