"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  margin-right: 12px;\n  padding-bottom: 6px;\n  width: 30px;\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 0 16px;\n  display: flex;\n  min-height: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  panels: _propTypes["default"].arrayOf(_propTypes["default"].object),
  activePanel: _propTypes["default"].string,
  togglePanel: _propTypes["default"].func
};

var PanelHeaderBottom = _styledComponents["default"].div.attrs({
  className: 'side-side-panel__header__bottom'
})(_templateObject(), function (props) {
  return props.theme.sidePanelHeaderBg;
});

var PanelTab = _styledComponents["default"].div.attrs({
  className: 'side-panel__tab'
})(_templateObject2(), function (props) {
  return props.active ? props.theme.subtextColorActive : 'transparent';
}, function (props) {
  return props.active ? props.theme.subtextColorActive : props.theme.subtextColor;
}, function (props) {
  return props.theme.textColorHl;
});

var PanelToggleFactory = function PanelToggleFactory() {
  var PanelToggle = function PanelToggle(_ref) {
    var panels = _ref.panels,
        activePanel = _ref.activePanel,
        togglePanel = _ref.togglePanel;
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderBottom, null, panels.map(function (panel) {
      return /*#__PURE__*/_react["default"].createElement(PanelTab, {
        key: panel.id,
        "data-tip": true,
        "data-for": "".concat(panel.id, "-nav"),
        active: activePanel === panel.id,
        onClick: function onClick() {
          return togglePanel(panel.id);
        }
      }, /*#__PURE__*/_react["default"].createElement(panel.iconComponent, {
        height: "20px"
      }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
        id: "".concat(panel.id, "-nav"),
        effect: "solid",
        delayShow: 500,
        place: "bottom"
      }, /*#__PURE__*/_react["default"].createElement("span", null, panel.label || panel.id)));
    }));
  };

  PanelToggle.propTypes = propTypes;
  return PanelToggle;
};

var _default = PanelToggleFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInBhbmVscyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJhY3RpdmVQYW5lbCIsInN0cmluZyIsInRvZ2dsZVBhbmVsIiwiZnVuYyIsIlBhbmVsSGVhZGVyQm90dG9tIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJQYW5lbFRhYiIsImFjdGl2ZSIsInN1YnRleHRDb2xvckFjdGl2ZSIsInN1YnRleHRDb2xvciIsInRleHRDb2xvckhsIiwiUGFuZWxUb2dnbGVGYWN0b3J5IiwiUGFuZWxUb2dnbGUiLCJtYXAiLCJwYW5lbCIsImlkIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsQ0FEUTtBQUVoQkMsRUFBQUEsV0FBVyxFQUFFSCxzQkFBVUksTUFGUDtBQUdoQkMsRUFBQUEsV0FBVyxFQUFFTCxzQkFBVU07QUFIUCxDQUFsQjs7QUFNQSxJQUFNQyxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgsb0JBR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxpQkFBaEI7QUFBQSxDQUhKLENBQXZCOztBQVNBLElBQU1DLFFBQVEsR0FBR1AsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUNoQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRHFCLENBQWpCLENBQUgscUJBTVcsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0ksTUFBTixHQUFlSixLQUFLLENBQUNDLEtBQU4sQ0FBWUksa0JBQTNCLEdBQWdELGFBQXJEO0FBQUEsQ0FOaEIsRUFPSCxVQUFBTCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDSSxNQUFOLEdBQWVKLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxrQkFBM0IsR0FBZ0RMLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxZQUFqRTtBQUFBLENBUEYsRUFnQkQsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxXQUFoQjtBQUFBLENBaEJKLENBQWQ7O0FBb0JBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFFBQUV0QixNQUFGLFFBQUVBLE1BQUY7QUFBQSxRQUFVSSxXQUFWLFFBQVVBLFdBQVY7QUFBQSxRQUF1QkUsV0FBdkIsUUFBdUJBLFdBQXZCO0FBQUEsd0JBQ2xCLGdDQUFDLGlCQUFELFFBQ0dOLE1BQU0sQ0FBQ3VCLEdBQVAsQ0FBVyxVQUFBQyxLQUFLO0FBQUEsMEJBQ2YsZ0NBQUMsUUFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFQSxLQUFLLENBQUNDLEVBRGI7QUFFRSx3QkFGRjtBQUdFLDhCQUFhRCxLQUFLLENBQUNDLEVBQW5CLFNBSEY7QUFJRSxRQUFBLE1BQU0sRUFBRXJCLFdBQVcsS0FBS29CLEtBQUssQ0FBQ0MsRUFKaEM7QUFLRSxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNbkIsV0FBVyxDQUFDa0IsS0FBSyxDQUFDQyxFQUFQLENBQWpCO0FBQUE7QUFMWCxzQkFPRSxnQ0FBQyxLQUFELENBQU8sYUFBUDtBQUFxQixRQUFBLE1BQU0sRUFBQztBQUE1QixRQVBGLGVBUUUsZ0NBQUMsMEJBQUQ7QUFBUyxRQUFBLEVBQUUsWUFBS0QsS0FBSyxDQUFDQyxFQUFYLFNBQVg7QUFBZ0MsUUFBQSxNQUFNLEVBQUMsT0FBdkM7QUFBK0MsUUFBQSxTQUFTLEVBQUUsR0FBMUQ7QUFBK0QsUUFBQSxLQUFLLEVBQUM7QUFBckUsc0JBQ0UsOENBQU9ELEtBQUssQ0FBQ0UsS0FBTixJQUFlRixLQUFLLENBQUNDLEVBQTVCLENBREYsQ0FSRixDQURlO0FBQUEsS0FBaEIsQ0FESCxDQURrQjtBQUFBLEdBQXBCOztBQW1CQUgsRUFBQUEsV0FBVyxDQUFDdkIsU0FBWixHQUF3QkEsU0FBeEI7QUFDQSxTQUFPdUIsV0FBUDtBQUNELENBdEJEOztlQXdCZUQsa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtUb29sdGlwfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBwcm9wVHlwZXMgPSB7XHJcbiAgcGFuZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICBhY3RpdmVQYW5lbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0b2dnbGVQYW5lbDogUHJvcFR5cGVzLmZ1bmNcclxufTtcclxuXHJcbmNvbnN0IFBhbmVsSGVhZGVyQm90dG9tID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnc2lkZS1zaWRlLXBhbmVsX19oZWFkZXJfX2JvdHRvbSdcclxufSlgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxIZWFkZXJCZ307XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBhbmVsVGFiID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9fdGFiJ1xyXG59KWBcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckFjdGl2ZSA6ICd0cmFuc3BhcmVudCcpfTtcclxuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yQWN0aXZlIDogcHJvcHMudGhlbWUuc3VidGV4dENvbG9yKX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICB3aWR0aDogMzBweDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQYW5lbFRvZ2dsZUZhY3RvcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgUGFuZWxUb2dnbGUgPSAoe3BhbmVscywgYWN0aXZlUGFuZWwsIHRvZ2dsZVBhbmVsfSkgPT4gKFxyXG4gICAgPFBhbmVsSGVhZGVyQm90dG9tPlxyXG4gICAgICB7cGFuZWxzLm1hcChwYW5lbCA9PiAoXHJcbiAgICAgICAgPFBhbmVsVGFiXHJcbiAgICAgICAgICBrZXk9e3BhbmVsLmlkfVxyXG4gICAgICAgICAgZGF0YS10aXBcclxuICAgICAgICAgIGRhdGEtZm9yPXtgJHtwYW5lbC5pZH0tbmF2YH1cclxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlUGFuZWwgPT09IHBhbmVsLmlkfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlUGFuZWwocGFuZWwuaWQpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYW5lbC5pY29uQ29tcG9uZW50IGhlaWdodD1cIjIwcHhcIiAvPlxyXG4gICAgICAgICAgPFRvb2x0aXAgaWQ9e2Ake3BhbmVsLmlkfS1uYXZgfSBlZmZlY3Q9XCJzb2xpZFwiIGRlbGF5U2hvdz17NTAwfSBwbGFjZT1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57cGFuZWwubGFiZWwgfHwgcGFuZWwuaWR9PC9zcGFuPlxyXG4gICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgIDwvUGFuZWxUYWI+XHJcbiAgICAgICkpfVxyXG4gICAgPC9QYW5lbEhlYWRlckJvdHRvbT5cclxuICApO1xyXG5cclxuICBQYW5lbFRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XHJcbiAgcmV0dXJuIFBhbmVsVG9nZ2xlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFuZWxUb2dnbGVGYWN0b3J5O1xyXG4iXX0=