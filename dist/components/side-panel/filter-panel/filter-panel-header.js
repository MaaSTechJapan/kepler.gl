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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC1oZWFkZXIuanMiXSwibmFtZXMiOlsiU3R5bGVkRmlsdGVySGVhZGVyIiwiU3R5bGVkUGFuZWxIZWFkZXIiLCJwcm9wcyIsImxhYmVsUkNHQ29sb3JWYWx1ZXMiLCJsZW5ndGgiLCJTdHlsZWRDaGlsZHJlbkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkZpbHRlclBhbmVsSGVhZGVyRmFjdG9yeSIsImRlcHMiLCJGaWx0ZXJQYW5lbEhlYWRlciIsImNoaWxkcmVuIiwiZGF0YXNldHMiLCJhbGxBdmFpbGFibGVGaWVsZHMiLCJzZXRGaWx0ZXIiLCJpZHgiLCJmaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJtYXAiLCJkIiwiY29sb3IiLCJpZCIsIlRyYXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLGtCQUFrQixHQUFHLGtDQUFPQyxvQ0FBUCxDQUFILG9CQVMzQixVQUFBQyxLQUFLO0FBQUEsU0FDTEEsS0FBSyxDQUFDQyxtQkFBTixJQUE2QkQsS0FBSyxDQUFDQyxtQkFBTixDQUEwQkMsTUFBMUIsR0FBbUMsQ0FBaEUsMkJBQ3FCLHNDQUFxQixRQUFyQixFQUErQkYsS0FBSyxDQUFDQyxtQkFBckMsQ0FEckIsV0FFSSw0QkFIQztBQUFBLENBVHNCLENBQXhCOzs7QUFlUCxJQUFNRSx1QkFBdUIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBQTdCOztBQUtBQyx3QkFBd0IsQ0FBQ0MsSUFBekIsR0FBZ0MsRUFBaEM7O0FBRUEsU0FBU0Qsd0JBQVQsR0FBb0M7QUFDbEMsTUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFFBQ3hCQyxRQUR3QixRQUN4QkEsUUFEd0I7QUFBQSxRQUV4QkMsUUFGd0IsUUFFeEJBLFFBRndCO0FBQUEsUUFHeEJDLGtCQUh3QixRQUd4QkEsa0JBSHdCO0FBQUEsUUFJeEJDLFNBSndCLFFBSXhCQSxTQUp3QjtBQUFBLFFBS3hCQyxHQUx3QixRQUt4QkEsR0FMd0I7QUFBQSxRQU14QkMsTUFOd0IsUUFNeEJBLE1BTndCO0FBQUEsUUFPeEJDLFlBUHdCLFFBT3hCQSxZQVB3QjtBQUFBLHdCQVN4QixnQ0FBQyxrQkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFDLHNCQURaO0FBRUUsTUFBQSxtQkFBbUIsRUFBRUwsUUFBUSxDQUFDTSxHQUFULENBQWEsVUFBQUMsQ0FBQztBQUFBLGVBQUlBLENBQUMsQ0FBQ0MsS0FBTjtBQUFBLE9BQWQ7QUFGdkIsb0JBSUUsZ0NBQUMsdUJBQUQsUUFBMEJULFFBQTFCLENBSkYsZUFLRSxnQ0FBQyw2QkFBRDtBQUNFLE1BQUEsRUFBRSxFQUFFSyxNQUFNLENBQUNLLEVBRGI7QUFFRSxNQUFBLE9BQU8sRUFBQyxRQUZWO0FBR0UsTUFBQSxXQUFXLEVBQUMsT0FIZDtBQUlFLE1BQUEsT0FBTyxFQUFFSixZQUpYO0FBS0UsTUFBQSxVQUFVLEVBQUUsWUFMZDtBQU1FLE1BQUEsYUFBYSxFQUFFSztBQU5qQixNQUxGLENBVHdCO0FBQUEsR0FBMUI7O0FBeUJBLFNBQU9aLGlCQUFQO0FBQ0Q7O2VBRWNGLHdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQYW5lbEhlYWRlckFjdGlvbiBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbic7XHJcbmltcG9ydCB7VHJhc2h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuaW1wb3J0IHtjcmVhdGVMaW5lYXJHcmFkaWVudH0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xyXG5pbXBvcnQge1N0eWxlZFBhbmVsSGVhZGVyfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsdGVySGVhZGVyID0gc3R5bGVkKFN0eWxlZFBhbmVsSGVhZGVyKWBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAxMnB4O1xyXG5cclxuICAuZmllbGQtc2VsZWN0b3Ige1xyXG4gICAgZmxleDogMjtcclxuICB9XHJcblxyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQ7XHJcbiAgJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMubGFiZWxSQ0dDb2xvclZhbHVlcyAmJiBwcm9wcy5sYWJlbFJDR0NvbG9yVmFsdWVzLmxlbmd0aCA+IDBcclxuICAgICAgPyBgYm9yZGVyLWltYWdlOiAke2NyZWF0ZUxpbmVhckdyYWRpZW50KCdib3R0b20nLCBwcm9wcy5sYWJlbFJDR0NvbG9yVmFsdWVzKX0gMztgXHJcbiAgICAgIDogJ2JvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7J31cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZENoaWxkcmVuQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDI7XHJcbmA7XHJcblxyXG5GaWx0ZXJQYW5lbEhlYWRlckZhY3RvcnkuZGVwcyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gRmlsdGVyUGFuZWxIZWFkZXJGYWN0b3J5KCkge1xyXG4gIGNvbnN0IEZpbHRlclBhbmVsSGVhZGVyID0gKHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZGF0YXNldHMsXHJcbiAgICBhbGxBdmFpbGFibGVGaWVsZHMsXHJcbiAgICBzZXRGaWx0ZXIsXHJcbiAgICBpZHgsXHJcbiAgICBmaWx0ZXIsXHJcbiAgICByZW1vdmVGaWx0ZXJcclxuICB9KSA9PiAoXHJcbiAgICA8U3R5bGVkRmlsdGVySGVhZGVyXHJcbiAgICAgIGNsYXNzTmFtZT1cImZpbHRlci1wYW5lbF9faGVhZGVyXCJcclxuICAgICAgbGFiZWxSQ0dDb2xvclZhbHVlcz17ZGF0YXNldHMubWFwKGQgPT4gZC5jb2xvcil9XHJcbiAgICA+XHJcbiAgICAgIDxTdHlsZWRDaGlsZHJlbkNvbnRhaW5lcj57Y2hpbGRyZW59PC9TdHlsZWRDaGlsZHJlbkNvbnRhaW5lcj5cclxuICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXHJcbiAgICAgICAgaWQ9e2ZpbHRlci5pZH1cclxuICAgICAgICB0b29sdGlwPVwiZGVsZXRlXCJcclxuICAgICAgICB0b29sdGlwVHlwZT1cImVycm9yXCJcclxuICAgICAgICBvbkNsaWNrPXtyZW1vdmVGaWx0ZXJ9XHJcbiAgICAgICAgaG92ZXJDb2xvcj17J2Vycm9yQ29sb3InfVxyXG4gICAgICAgIEljb25Db21wb25lbnQ9e1RyYXNofVxyXG4gICAgICAvPlxyXG4gICAgPC9TdHlsZWRGaWx0ZXJIZWFkZXI+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIEZpbHRlclBhbmVsSGVhZGVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJQYW5lbEhlYWRlckZhY3Rvcnk7XHJcbiJdfQ==