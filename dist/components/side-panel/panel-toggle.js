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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInBhbmVscyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJhY3RpdmVQYW5lbCIsInN0cmluZyIsInRvZ2dsZVBhbmVsIiwiZnVuYyIsIlBhbmVsSGVhZGVyQm90dG9tIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJQYW5lbFRhYiIsImFjdGl2ZSIsInN1YnRleHRDb2xvckFjdGl2ZSIsInN1YnRleHRDb2xvciIsInRleHRDb2xvckhsIiwiUGFuZWxUb2dnbGVGYWN0b3J5IiwiUGFuZWxUb2dnbGUiLCJtYXAiLCJwYW5lbCIsImlkIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsQ0FEUTtBQUVoQkMsRUFBQUEsV0FBVyxFQUFFSCxzQkFBVUksTUFGUDtBQUdoQkMsRUFBQUEsV0FBVyxFQUFFTCxzQkFBVU07QUFIUCxDQUFsQjs7QUFNQSxJQUFNQyxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgsb0JBR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxpQkFBaEI7QUFBQSxDQUhKLENBQXZCOztBQVNBLElBQU1DLFFBQVEsR0FBR1AsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUNoQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRHFCLENBQWpCLENBQUgscUJBTVcsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0ksTUFBTixHQUFlSixLQUFLLENBQUNDLEtBQU4sQ0FBWUksa0JBQTNCLEdBQWdELGFBQXJEO0FBQUEsQ0FOaEIsRUFPSCxVQUFBTCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDSSxNQUFOLEdBQWVKLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxrQkFBM0IsR0FBZ0RMLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxZQUFqRTtBQUFBLENBUEYsRUFnQkQsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxXQUFoQjtBQUFBLENBaEJKLENBQWQ7O0FBb0JBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFFBQUV0QixNQUFGLFFBQUVBLE1BQUY7QUFBQSxRQUFVSSxXQUFWLFFBQVVBLFdBQVY7QUFBQSxRQUF1QkUsV0FBdkIsUUFBdUJBLFdBQXZCO0FBQUEsd0JBQ2xCLGdDQUFDLGlCQUFELFFBQ0dOLE1BQU0sQ0FBQ3VCLEdBQVAsQ0FBVyxVQUFBQyxLQUFLO0FBQUEsMEJBQ2YsZ0NBQUMsUUFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFQSxLQUFLLENBQUNDLEVBRGI7QUFFRSx3QkFGRjtBQUdFLDhCQUFhRCxLQUFLLENBQUNDLEVBQW5CLFNBSEY7QUFJRSxRQUFBLE1BQU0sRUFBRXJCLFdBQVcsS0FBS29CLEtBQUssQ0FBQ0MsRUFKaEM7QUFLRSxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNbkIsV0FBVyxDQUFDa0IsS0FBSyxDQUFDQyxFQUFQLENBQWpCO0FBQUE7QUFMWCxzQkFPRSxnQ0FBQyxLQUFELENBQU8sYUFBUDtBQUFxQixRQUFBLE1BQU0sRUFBQztBQUE1QixRQVBGLGVBUUUsZ0NBQUMsMEJBQUQ7QUFBUyxRQUFBLEVBQUUsWUFBS0QsS0FBSyxDQUFDQyxFQUFYLFNBQVg7QUFBZ0MsUUFBQSxNQUFNLEVBQUMsT0FBdkM7QUFBK0MsUUFBQSxTQUFTLEVBQUUsR0FBMUQ7QUFBK0QsUUFBQSxLQUFLLEVBQUM7QUFBckUsc0JBQ0UsOENBQU9ELEtBQUssQ0FBQ0UsS0FBTixJQUFlRixLQUFLLENBQUNDLEVBQTVCLENBREYsQ0FSRixDQURlO0FBQUEsS0FBaEIsQ0FESCxDQURrQjtBQUFBLEdBQXBCOztBQW1CQUgsRUFBQUEsV0FBVyxDQUFDdkIsU0FBWixHQUF3QkEsU0FBeEI7QUFDQSxTQUFPdUIsV0FBUDtBQUNELENBdEJEOztlQXdCZUQsa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgcGFuZWxzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgYWN0aXZlUGFuZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvZ2dsZVBhbmVsOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY29uc3QgUGFuZWxIZWFkZXJCb3R0b20gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1zaWRlLXBhbmVsX19oZWFkZXJfX2JvdHRvbSdcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEhlYWRlckJnfTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuYDtcblxuY29uc3QgUGFuZWxUYWIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9fdGFiJ1xufSlgXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yQWN0aXZlIDogJ3RyYW5zcGFyZW50Jyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yQWN0aXZlIDogcHJvcHMudGhlbWUuc3VidGV4dENvbG9yKX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIHdpZHRoOiAzMHB4O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgfVxuYDtcblxuY29uc3QgUGFuZWxUb2dnbGVGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBQYW5lbFRvZ2dsZSA9ICh7cGFuZWxzLCBhY3RpdmVQYW5lbCwgdG9nZ2xlUGFuZWx9KSA9PiAoXG4gICAgPFBhbmVsSGVhZGVyQm90dG9tPlxuICAgICAge3BhbmVscy5tYXAocGFuZWwgPT4gKFxuICAgICAgICA8UGFuZWxUYWJcbiAgICAgICAgICBrZXk9e3BhbmVsLmlkfVxuICAgICAgICAgIGRhdGEtdGlwXG4gICAgICAgICAgZGF0YS1mb3I9e2Ake3BhbmVsLmlkfS1uYXZgfVxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlUGFuZWwgPT09IHBhbmVsLmlkfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBhbmVsKHBhbmVsLmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYW5lbC5pY29uQ29tcG9uZW50IGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICAgIDxUb29sdGlwIGlkPXtgJHtwYW5lbC5pZH0tbmF2YH0gZWZmZWN0PVwic29saWRcIiBkZWxheVNob3c9ezUwMH0gcGxhY2U9XCJib3R0b21cIj5cbiAgICAgICAgICAgIDxzcGFuPntwYW5lbC5sYWJlbCB8fCBwYW5lbC5pZH08L3NwYW4+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICA8L1BhbmVsVGFiPlxuICAgICAgKSl9XG4gICAgPC9QYW5lbEhlYWRlckJvdHRvbT5cbiAgKTtcblxuICBQYW5lbFRvZ2dsZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG4gIHJldHVybiBQYW5lbFRvZ2dsZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsVG9nZ2xlRmFjdG9yeTtcbiJdfQ==