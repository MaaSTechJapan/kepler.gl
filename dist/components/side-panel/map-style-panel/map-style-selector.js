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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1zdHlsZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBEcm9wZG93biIsIlN0eWxlZFBhbmVsSGVhZGVyIiwicHJvcHMiLCJ0aGVtZSIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkiLCJNYXBTdHlsZVNlbGVjdG9yIiwibWFwU3R5bGUiLCJvbkNoYW5nZSIsInRvZ2dsZUFjdGl2ZSIsImlzU2VsZWN0aW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcFN0eWxlcyIsIm1hcCIsIm9wIiwiY29sbGFwc2VkIiwic3R5bGVUeXBlIiwiaWNvbiIsImxhYmVsIiwiQXJyb3dEb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBT0EsSUFBTUEsaUJBQWlCLEdBQUcsa0NBQU9DLG9DQUFQLENBQUgsb0JBZUMsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxvQkFBaEI7QUFBQSxDQWZOLENBQXZCOztBQTZCQSxTQUFTQyx1QkFBVCxHQUFtQztBQUNqQyxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsUUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsUUFBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsUUFBc0JDLFlBQXRCLFFBQXNCQSxZQUF0QjtBQUFBLFFBQW9DQyxXQUFwQyxRQUFvQ0EsV0FBcEM7QUFBQSx3QkFDdkIsMERBQ0UsZ0NBQUMsNkJBQUQsb0JBREYsRUFFR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlMLFFBQVEsQ0FBQ00sU0FBckIsRUFBZ0NDLEdBQWhDLENBQW9DLFVBQUFDLEVBQUU7QUFBQSwwQkFDckMsZ0NBQUMsaUJBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSw0QkFBVyxxQkFBWCxFQUFrQztBQUMzQ0MsVUFBQUEsU0FBUyxFQUFFLENBQUNOLFdBQUQsSUFBZ0JILFFBQVEsQ0FBQ1UsU0FBVCxLQUF1QkY7QUFEUCxTQUFsQyxDQURiO0FBSUUsUUFBQSxHQUFHLEVBQUVBLEVBSlA7QUFLRSxRQUFBLE9BQU8sRUFBRUwsV0FBVyxHQUFHO0FBQUEsaUJBQU1GLFFBQVEsQ0FBQ08sRUFBRCxDQUFkO0FBQUEsU0FBSCxHQUF3Qk47QUFMOUMsc0JBT0UsZ0NBQUMscUNBQUQ7QUFBb0IsUUFBQSxTQUFTLEVBQUM7QUFBOUIsc0JBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQyxhQUFmO0FBQTZCLFFBQUEsR0FBRyxFQUFFRixRQUFRLENBQUNNLFNBQVQsQ0FBbUJFLEVBQW5CLEVBQXVCRztBQUF6RCxRQURGLGVBRUUsZ0NBQUMsbUNBQUQ7QUFBa0IsUUFBQSxTQUFTLEVBQUM7QUFBNUIsU0FDR1gsUUFBUSxDQUFDTSxTQUFULENBQW1CRSxFQUFuQixFQUF1QkksS0FEMUIsQ0FGRixDQVBGLEVBYUcsQ0FBQ1QsV0FBRCxnQkFDQyxnQ0FBQyw2QkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFDLG9DQURaO0FBRUUsUUFBQSxFQUFFLEVBQUMsbUJBRkw7QUFHRSxRQUFBLGFBQWEsRUFBRVUsZ0JBSGpCO0FBSUUsUUFBQSxPQUFPLEVBQUUsdUJBSlg7QUFLRSxRQUFBLE9BQU8sRUFBRVg7QUFMWCxRQURELEdBUUcsSUFyQk4sQ0FEcUM7QUFBQSxLQUF0QyxDQUZILENBRHVCO0FBQUEsR0FBekI7O0FBK0JBLFNBQU9ILGdCQUFQO0FBQ0Q7O2VBRWNELHVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQge0Fycm93RG93bn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgUGFuZWxIZWFkZXJBY3Rpb24gZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlci1hY3Rpb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBQYW5lbExhYmVsLFxyXG4gIFBhbmVsSGVhZGVyVGl0bGUsXHJcbiAgUGFuZWxIZWFkZXJDb250ZW50LFxyXG4gIFN0eWxlZFBhbmVsSGVhZGVyXHJcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3R5bGVkTWFwRHJvcGRvd24gPSBzdHlsZWQoU3R5bGVkUGFuZWxIZWFkZXIpYFxyXG4gIGhlaWdodDogNDhweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjA1cyBlYXNlLWluLCBoZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XHJcblxyXG4gICYuY29sbGFwc2VkIHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xyXG4gIH1cclxuXHJcbiAgLm1hcC10aXRsZS1ibG9jayBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLm1hcC1wcmV2aWV3IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIE1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5KCkge1xyXG4gIGNvbnN0IE1hcFN0eWxlU2VsZWN0b3IgPSAoe21hcFN0eWxlLCBvbkNoYW5nZSwgdG9nZ2xlQWN0aXZlLCBpc1NlbGVjdGluZ30pID0+IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQYW5lbExhYmVsPk1hcCBzdHlsZTwvUGFuZWxMYWJlbD5cclxuICAgICAge09iamVjdC5rZXlzKG1hcFN0eWxlLm1hcFN0eWxlcykubWFwKG9wID0+IChcclxuICAgICAgICA8U3R5bGVkTWFwRHJvcGRvd25cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbWFwLWRyb3Bkb3duLW9wdGlvbicsIHtcclxuICAgICAgICAgICAgY29sbGFwc2VkOiAhaXNTZWxlY3RpbmcgJiYgbWFwU3R5bGUuc3R5bGVUeXBlICE9PSBvcFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBrZXk9e29wfVxyXG4gICAgICAgICAgb25DbGljaz17aXNTZWxlY3RpbmcgPyAoKSA9PiBvbkNoYW5nZShvcCkgOiB0b2dnbGVBY3RpdmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFBhbmVsSGVhZGVyQ29udGVudCBjbGFzc05hbWU9XCJtYXAtdGl0bGUtYmxvY2tcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXAtcHJldmlld1wiIHNyYz17bWFwU3R5bGUubWFwU3R5bGVzW29wXS5pY29ufSAvPlxyXG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJUaXRsZSBjbGFzc05hbWU9XCJtYXAtcHJldmlldy1uYW1lXCI+XHJcbiAgICAgICAgICAgICAge21hcFN0eWxlLm1hcFN0eWxlc1tvcF0ubGFiZWx9XHJcbiAgICAgICAgICAgIDwvUGFuZWxIZWFkZXJUaXRsZT5cclxuICAgICAgICAgIDwvUGFuZWxIZWFkZXJDb250ZW50PlxyXG4gICAgICAgICAgeyFpc1NlbGVjdGluZyA/IChcclxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFwLWRyb3Bkb3duLW9wdGlvbl9fZW5hYmxlLWNvbmZpZ1wiXHJcbiAgICAgICAgICAgICAgaWQ9XCJtYXAtZW5hYmxlLWNvbmZpZ1wiXHJcbiAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17QXJyb3dEb3dufVxyXG4gICAgICAgICAgICAgIHRvb2x0aXA9eydTZWxlY3QgQmFzZSBNYXAgU3R5bGUnfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFjdGl2ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvU3R5bGVkTWFwRHJvcGRvd24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIE1hcFN0eWxlU2VsZWN0b3I7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5O1xyXG4iXX0=