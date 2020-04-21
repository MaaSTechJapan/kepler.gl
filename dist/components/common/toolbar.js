"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  background-color: ", ";\n  box-shadow: ", ";\n  font-size: 11px;\n  padding: 16px 0;\n  transition: ", ";\n  margin-top: ", ";\n  opacity: ", ";\n  transform: translateX(calc(-50% + 20px));\n  pointer-events: ", ";\n  z-index: 1000;\n\n  .panel-header-dropdown__inner {\n    box-shadow: none;\n    background-color: transparent;\n    display: flex;\n  }\n\n  .toolbar-item {\n    align-items: center;\n    border-right: 1px solid ", ";\n    padding: 0 22px;\n    display: flex;\n    flex-direction: column;\n\n    .toolbar-item__title {\n      white-space: nowrap;\n      margin-top: 4px;\n    }\n\n    :hover {\n      cursor: pointer;\n      color: ", ";\n    }\n\n    &:last-child {\n      border-right: 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Toolbar = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListShadow;
}, function (props) {
  return props.theme.transitionSlow;
}, function (props) {
  return props.show ? '6px' : '20px';
}, function (props) {
  return props.show ? 1 : 0;
}, function (props) {
  return props.show ? 'all' : 'none';
}, function (props) {
  return props.theme.panelHeaderIcon;
}, function (props) {
  return props.theme.textColorHl;
});

Toolbar.displayName = 'Toolbar';
var _default = Toolbar;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90b29sYmFyLmpzIl0sIm5hbWVzIjpbIlRvb2xiYXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0U2hhZG93IiwidHJhbnNpdGlvblNsb3ciLCJzaG93IiwicGFuZWxIZWFkZXJJY29uIiwidGV4dENvbG9ySGwiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsNkJBQU9DLEdBQVYsb0JBR1MsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxlQUFoQjtBQUFBLENBSGQsRUFJRyxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLGtCQUFoQjtBQUFBLENBSlIsRUFPRyxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLGNBQWhCO0FBQUEsQ0FQUixFQVFHLFVBQUFKLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNLLElBQU4sR0FBYSxLQUFiLEdBQXFCLE1BQTFCO0FBQUEsQ0FSUixFQVNBLFVBQUFMLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNLLElBQU4sR0FBYSxDQUFiLEdBQWlCLENBQXRCO0FBQUEsQ0FUTCxFQVdPLFVBQUFMLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNLLElBQU4sR0FBYSxLQUFiLEdBQXFCLE1BQTFCO0FBQUEsQ0FYWixFQXNCaUIsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxlQUFoQjtBQUFBLENBdEJ0QixFQWtDRSxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLFdBQWhCO0FBQUEsQ0FsQ1AsQ0FBYjs7QUEyQ0FWLE9BQU8sQ0FBQ1csV0FBUixHQUFzQixTQUF0QjtlQUVlWCxPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBUb29sYmFyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xyXG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0U2hhZG93fTtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvblNsb3d9O1xyXG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT4gKHByb3BzLnNob3cgPyAnNnB4JyA6ICcyMHB4Jyl9O1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLnNob3cgPyAxIDogMCl9O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC01MCUgKyAyMHB4KSk7XHJcbiAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gKHByb3BzLnNob3cgPyAnYWxsJyA6ICdub25lJyl9O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gIC5wYW5lbC1oZWFkZXItZHJvcGRvd25fX2lubmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhci1pdGVtIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsSGVhZGVySWNvbn07XHJcbiAgICBwYWRkaW5nOiAwIDIycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAudG9vbGJhci1pdGVtX190aXRsZSB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICA6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuVG9vbGJhci5kaXNwbGF5TmFtZSA9ICdUb29sYmFyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7XHJcbiJdfQ==