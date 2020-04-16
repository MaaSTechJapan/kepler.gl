"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("../../common/icons");

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _styledComponents2 = require("../../common/styled-components");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 48px;\n  margin-bottom: 5px;\n  opacity: 1;\n  position: relative;\n  transition: opacity 0.05s ease-in, height 0.25s ease-out;\n\n  &.collapsed {\n    height: 0;\n    margin-bottom: 0;\n    opacity: 0;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n\n  .map-title-block img {\n    margin-right: 12px;\n  }\n\n  .map-preview {\n    border-radius: 3px;\n    height: 30px;\n    width: 40px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMapDropdown = (0, _styledComponents["default"])(_styledComponents2.StyledPanelHeader)(_templateObject(), function (props) {
  return props.theme.panelBackgroundHover;
});

function MapStyleSelectorFactory() {
  var MapStyleSelector = function MapStyleSelector(_ref) {
    var mapStyle = _ref.mapStyle,
        onChange = _ref.onChange,
        toggleActive = _ref.toggleActive,
        isSelecting = _ref.isSelecting;
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, "Map style"), Object.keys(mapStyle.mapStyles).map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(StyledMapDropdown, {
        className: (0, _classnames["default"])('map-dropdown-option', {
          collapsed: !isSelecting && mapStyle.styleType !== op
        }),
        key: op,
        onClick: isSelecting ? function () {
          return onChange(op);
        } : toggleActive
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderContent, {
        className: "map-title-block"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        className: "map-preview",
        src: mapStyle.mapStyles[op].icon
      }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderTitle, {
        className: "map-preview-name"
      }, mapStyle.mapStyles[op].label)), !isSelecting ? /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
        className: "map-dropdown-option__enable-config",
        id: "map-enable-config",
        IconComponent: _icons.ArrowDown,
        tooltip: 'Select Base Map Style',
        onClick: toggleActive
      }) : null);
    }));
  };

  return MapStyleSelector;
}

var _default = MapStyleSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1zdHlsZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBEcm9wZG93biIsIlN0eWxlZFBhbmVsSGVhZGVyIiwicHJvcHMiLCJ0aGVtZSIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkiLCJNYXBTdHlsZVNlbGVjdG9yIiwibWFwU3R5bGUiLCJvbkNoYW5nZSIsInRvZ2dsZUFjdGl2ZSIsImlzU2VsZWN0aW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcFN0eWxlcyIsIm1hcCIsIm9wIiwiY29sbGFwc2VkIiwic3R5bGVUeXBlIiwiaWNvbiIsImxhYmVsIiwiQXJyb3dEb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBT0EsSUFBTUEsaUJBQWlCLEdBQUcsa0NBQU9DLG9DQUFQLENBQUgsb0JBZUMsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxvQkFBaEI7QUFBQSxDQWZOLENBQXZCOztBQTZCQSxTQUFTQyx1QkFBVCxHQUFtQztBQUNqQyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsUUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsUUFBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsUUFBc0JDLFlBQXRCLFFBQXNCQSxZQUF0QjtBQUFBLFFBQW9DQyxXQUFwQyxRQUFvQ0EsV0FBcEM7QUFBQSx3QkFDdkIsMERBQ0UsZ0NBQUMsNkJBQUQsb0JBREYsRUFFR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlMLFFBQVEsQ0FBQ00sU0FBckIsRUFBZ0NDLEdBQWhDLENBQW9DLFVBQUFDLEVBQUU7QUFBQSwwQkFDckMsZ0NBQUMsaUJBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSw0QkFBVyxxQkFBWCxFQUFrQztBQUMzQ0MsVUFBQUEsU0FBUyxFQUFFLENBQUNOLFdBQUQsSUFBZ0JILFFBQVEsQ0FBQ1UsU0FBVCxLQUF1QkY7QUFEUCxTQUFsQyxDQURiO0FBSUUsUUFBQSxHQUFHLEVBQUVBLEVBSlA7QUFLRSxRQUFBLE9BQU8sRUFBRUwsV0FBVyxHQUFHO0FBQUEsaUJBQU1GLFFBQVEsQ0FBQ08sRUFBRCxDQUFkO0FBQUEsU0FBSCxHQUF3Qk47QUFMOUMsc0JBT0UsZ0NBQUMscUNBQUQ7QUFBb0IsUUFBQSxTQUFTLEVBQUM7QUFBOUIsc0JBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQyxhQUFmO0FBQTZCLFFBQUEsR0FBRyxFQUFFRixRQUFRLENBQUNNLFNBQVQsQ0FBbUJFLEVBQW5CLEVBQXVCRztBQUF6RCxRQURGLGVBRUUsZ0NBQUMsbUNBQUQ7QUFBa0IsUUFBQSxTQUFTLEVBQUM7QUFBNUIsU0FDR1gsUUFBUSxDQUFDTSxTQUFULENBQW1CRSxFQUFuQixFQUF1QkksS0FEMUIsQ0FGRixDQVBGLEVBYUcsQ0FBQ1QsV0FBRCxnQkFDQyxnQ0FBQyw2QkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFDLG9DQURaO0FBRUUsUUFBQSxFQUFFLEVBQUMsbUJBRkw7QUFHRSxRQUFBLGFBQWEsRUFBRVUsZ0JBSGpCO0FBSUUsUUFBQSxPQUFPLEVBQUUsdUJBSlg7QUFLRSxRQUFBLE9BQU8sRUFBRVg7QUFMWCxRQURELEdBUUcsSUFyQk4sQ0FEcUM7QUFBQSxLQUF0QyxDQUZILENBRHVCO0FBQUEsR0FBekI7O0FBK0JBLFNBQU9ILGdCQUFQO0FBQ0Q7O2VBRWNELHVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge0Fycm93RG93bn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcblxuaW1wb3J0IHtcbiAgUGFuZWxMYWJlbCxcbiAgUGFuZWxIZWFkZXJUaXRsZSxcbiAgUGFuZWxIZWFkZXJDb250ZW50LFxuICBTdHlsZWRQYW5lbEhlYWRlclxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN0eWxlZE1hcERyb3Bkb3duID0gc3R5bGVkKFN0eWxlZFBhbmVsSGVhZGVyKWBcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjA1cyBlYXNlLWluLCBoZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG5cbiAgJi5jb2xsYXBzZWQge1xuICAgIGhlaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgfVxuXG4gIC5tYXAtdGl0bGUtYmxvY2sgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICAubWFwLXByZXZpZXcge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIE1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5KCkge1xuICBjb25zdCBNYXBTdHlsZVNlbGVjdG9yID0gKHttYXBTdHlsZSwgb25DaGFuZ2UsIHRvZ2dsZUFjdGl2ZSwgaXNTZWxlY3Rpbmd9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxQYW5lbExhYmVsPk1hcCBzdHlsZTwvUGFuZWxMYWJlbD5cbiAgICAgIHtPYmplY3Qua2V5cyhtYXBTdHlsZS5tYXBTdHlsZXMpLm1hcChvcCA9PiAoXG4gICAgICAgIDxTdHlsZWRNYXBEcm9wZG93blxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbWFwLWRyb3Bkb3duLW9wdGlvbicsIHtcbiAgICAgICAgICAgIGNvbGxhcHNlZDogIWlzU2VsZWN0aW5nICYmIG1hcFN0eWxlLnN0eWxlVHlwZSAhPT0gb3BcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBrZXk9e29wfVxuICAgICAgICAgIG9uQ2xpY2s9e2lzU2VsZWN0aW5nID8gKCkgPT4gb25DaGFuZ2Uob3ApIDogdG9nZ2xlQWN0aXZlfVxuICAgICAgICA+XG4gICAgICAgICAgPFBhbmVsSGVhZGVyQ29udGVudCBjbGFzc05hbWU9XCJtYXAtdGl0bGUtYmxvY2tcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLXByZXZpZXdcIiBzcmM9e21hcFN0eWxlLm1hcFN0eWxlc1tvcF0uaWNvbn0gLz5cbiAgICAgICAgICAgIDxQYW5lbEhlYWRlclRpdGxlIGNsYXNzTmFtZT1cIm1hcC1wcmV2aWV3LW5hbWVcIj5cbiAgICAgICAgICAgICAge21hcFN0eWxlLm1hcFN0eWxlc1tvcF0ubGFiZWx9XG4gICAgICAgICAgICA8L1BhbmVsSGVhZGVyVGl0bGU+XG4gICAgICAgICAgPC9QYW5lbEhlYWRlckNvbnRlbnQ+XG4gICAgICAgICAgeyFpc1NlbGVjdGluZyA/IChcbiAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXAtZHJvcGRvd24tb3B0aW9uX19lbmFibGUtY29uZmlnXCJcbiAgICAgICAgICAgICAgaWQ9XCJtYXAtZW5hYmxlLWNvbmZpZ1wiXG4gICAgICAgICAgICAgIEljb25Db21wb25lbnQ9e0Fycm93RG93bn1cbiAgICAgICAgICAgICAgdG9vbHRpcD17J1NlbGVjdCBCYXNlIE1hcCBTdHlsZSd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFjdGl2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU3R5bGVkTWFwRHJvcGRvd24+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gTWFwU3R5bGVTZWxlY3Rvcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwU3R5bGVTZWxlY3RvckZhY3Rvcnk7XG4iXX0=