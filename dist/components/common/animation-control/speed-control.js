"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _animationSpeedSlider = _interopRequireDefault(require("./animation-speed-slider"));

var _styledComponents2 = require("../styled-components");

var _icons = require("../icons");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  width: 24px;\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-grow: 0;\n  color: ", ";\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSpeedToggle = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColor;
});

var StyledSpeedText = _styledComponents["default"].div(_templateObject2());

function SpeedControlFactory() {
  var SpeedControl = function SpeedControl(_ref) {
    var onClick = _ref.onClick,
        updateAnimationSpeed = _ref.updateAnimationSpeed,
        speed = _ref.speed,
        showSpeedControl = _ref.showSpeedControl,
        _ref$buttonHeight = _ref.buttonHeight,
        buttonHeight = _ref$buttonHeight === void 0 ? '18px' : _ref$buttonHeight;
    return /*#__PURE__*/_react["default"].createElement(StyledSpeedToggle, {
      className: "animation-control__speed-control"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
      link: true,
      width: "80px",
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
      className: "bottom-widget__icon speed"
    }, /*#__PURE__*/_react["default"].createElement(_icons.Rocket, {
      height: buttonHeight
    })), /*#__PURE__*/_react["default"].createElement(StyledSpeedText, {
      style: {
        visibility: !showSpeedControl ? 'visible' : 'hidden'
      }
    }, speed, "x")), showSpeedControl ? /*#__PURE__*/_react["default"].createElement(_animationSpeedSlider["default"], {
      onHide: onClick,
      updateAnimationSpeed: updateAnimationSpeed,
      speed: speed
    }) : null);
  };

  return SpeedControl;
}

var _default = SpeedControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9zcGVlZC1jb250cm9sLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFNwZWVkVG9nZ2xlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvciIsIlN0eWxlZFNwZWVkVGV4dCIsIlNwZWVkQ29udHJvbEZhY3RvcnkiLCJTcGVlZENvbnRyb2wiLCJvbkNsaWNrIiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJzcGVlZCIsInNob3dTcGVlZENvbnRyb2wiLCJidXR0b25IZWlnaHQiLCJ2aXNpYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyw2QkFBT0MsR0FBVixvQkFHWixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQWhCO0FBQUEsQ0FITyxDQUF2Qjs7QUFPQSxJQUFNQyxlQUFlLEdBQUdMLDZCQUFPQyxHQUFWLG9CQUFyQjs7QUFNQSxTQUFTSyxtQkFBVCxHQUErQjtBQUM3QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFFBQ25CQyxPQURtQixRQUNuQkEsT0FEbUI7QUFBQSxRQUVuQkMsb0JBRm1CLFFBRW5CQSxvQkFGbUI7QUFBQSxRQUduQkMsS0FIbUIsUUFHbkJBLEtBSG1CO0FBQUEsUUFJbkJDLGdCQUptQixRQUluQkEsZ0JBSm1CO0FBQUEsaUNBS25CQyxZQUxtQjtBQUFBLFFBS25CQSxZQUxtQixrQ0FLSixNQUxJO0FBQUEsd0JBT25CLGdDQUFDLGlCQUFEO0FBQW1CLE1BQUEsU0FBUyxFQUFDO0FBQTdCLG9CQUNFLGdDQUFDLHlCQUFEO0FBQVEsTUFBQSxJQUFJLE1BQVo7QUFBYSxNQUFBLEtBQUssRUFBQyxNQUFuQjtBQUEwQixNQUFBLE9BQU8sRUFBRUo7QUFBbkMsb0JBQ0UsZ0NBQUMsZ0NBQUQ7QUFBZSxNQUFBLFNBQVMsRUFBQztBQUF6QixvQkFDRSxnQ0FBQyxhQUFEO0FBQVEsTUFBQSxNQUFNLEVBQUVJO0FBQWhCLE1BREYsQ0FERixlQUlFLGdDQUFDLGVBQUQ7QUFBaUIsTUFBQSxLQUFLLEVBQUU7QUFBQ0MsUUFBQUEsVUFBVSxFQUFFLENBQUNGLGdCQUFELEdBQW9CLFNBQXBCLEdBQWdDO0FBQTdDO0FBQXhCLE9BQ0dELEtBREgsTUFKRixDQURGLEVBU0dDLGdCQUFnQixnQkFDZixnQ0FBQyxnQ0FBRDtBQUNFLE1BQUEsTUFBTSxFQUFFSCxPQURWO0FBRUUsTUFBQSxvQkFBb0IsRUFBRUMsb0JBRnhCO0FBR0UsTUFBQSxLQUFLLEVBQUVDO0FBSFQsTUFEZSxHQU1iLElBZk4sQ0FQbUI7QUFBQSxHQUFyQjs7QUF5QkEsU0FBT0gsWUFBUDtBQUNEOztlQUNjRCxtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQW5pbWF0aW9uU3BlZWRTbGlkZXIgZnJvbSAnLi9hbmltYXRpb24tc3BlZWQtc2xpZGVyJztcclxuaW1wb3J0IHtCdXR0b24sIENlbnRlckZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtSb2NrZXR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuXHJcbmNvbnN0IFN0eWxlZFNwZWVkVG9nZ2xlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNwZWVkVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBTcGVlZENvbnRyb2xGYWN0b3J5KCkge1xyXG4gIGNvbnN0IFNwZWVkQ29udHJvbCA9ICh7XHJcbiAgICBvbkNsaWNrLFxyXG4gICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQsXHJcbiAgICBzcGVlZCxcclxuICAgIHNob3dTcGVlZENvbnRyb2wsXHJcbiAgICBidXR0b25IZWlnaHQgPSAnMThweCdcclxuICB9KSA9PiAoXHJcbiAgICA8U3R5bGVkU3BlZWRUb2dnbGUgY2xhc3NOYW1lPVwiYW5pbWF0aW9uLWNvbnRyb2xfX3NwZWVkLWNvbnRyb2xcIj5cclxuICAgICAgPEJ1dHRvbiBsaW5rIHdpZHRoPVwiODBweFwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ljb24gc3BlZWRcIj5cclxuICAgICAgICAgIDxSb2NrZXQgaGVpZ2h0PXtidXR0b25IZWlnaHR9IC8+XHJcbiAgICAgICAgPC9DZW50ZXJGbGV4Ym94PlxyXG4gICAgICAgIDxTdHlsZWRTcGVlZFRleHQgc3R5bGU9e3t2aXNpYmlsaXR5OiAhc2hvd1NwZWVkQ29udHJvbCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nfX0+XHJcbiAgICAgICAgICB7c3BlZWR9eFxyXG4gICAgICAgIDwvU3R5bGVkU3BlZWRUZXh0PlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAge3Nob3dTcGVlZENvbnRyb2wgPyAoXHJcbiAgICAgICAgPEFuaW1hdGlvblNwZWVkU2xpZGVyXHJcbiAgICAgICAgICBvbkhpZGU9e29uQ2xpY2t9XHJcbiAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17dXBkYXRlQW5pbWF0aW9uU3BlZWR9XHJcbiAgICAgICAgICBzcGVlZD17c3BlZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L1N0eWxlZFNwZWVkVG9nZ2xlPlxyXG4gICk7XHJcbiAgcmV0dXJuIFNwZWVkQ29udHJvbDtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTcGVlZENvbnRyb2xGYWN0b3J5O1xyXG4iXX0=