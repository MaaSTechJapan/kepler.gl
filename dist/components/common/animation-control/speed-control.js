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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9zcGVlZC1jb250cm9sLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFNwZWVkVG9nZ2xlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvciIsIlN0eWxlZFNwZWVkVGV4dCIsIlNwZWVkQ29udHJvbEZhY3RvcnkiLCJTcGVlZENvbnRyb2wiLCJvbkNsaWNrIiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJzcGVlZCIsInNob3dTcGVlZENvbnRyb2wiLCJidXR0b25IZWlnaHQiLCJ2aXNpYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyw2QkFBT0MsR0FBVixvQkFHWixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQWhCO0FBQUEsQ0FITyxDQUF2Qjs7QUFPQSxJQUFNQyxlQUFlLEdBQUdMLDZCQUFPQyxHQUFWLG9CQUFyQjs7QUFNQSxTQUFTSyxtQkFBVCxHQUErQjtBQUM3QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFFBQ25CQyxPQURtQixRQUNuQkEsT0FEbUI7QUFBQSxRQUVuQkMsb0JBRm1CLFFBRW5CQSxvQkFGbUI7QUFBQSxRQUduQkMsS0FIbUIsUUFHbkJBLEtBSG1CO0FBQUEsUUFJbkJDLGdCQUptQixRQUluQkEsZ0JBSm1CO0FBQUEsaUNBS25CQyxZQUxtQjtBQUFBLFFBS25CQSxZQUxtQixrQ0FLSixNQUxJO0FBQUEsd0JBT25CLGdDQUFDLGlCQUFEO0FBQW1CLE1BQUEsU0FBUyxFQUFDO0FBQTdCLG9CQUNFLGdDQUFDLHlCQUFEO0FBQVEsTUFBQSxJQUFJLE1BQVo7QUFBYSxNQUFBLEtBQUssRUFBQyxNQUFuQjtBQUEwQixNQUFBLE9BQU8sRUFBRUo7QUFBbkMsb0JBQ0UsZ0NBQUMsZ0NBQUQ7QUFBZSxNQUFBLFNBQVMsRUFBQztBQUF6QixvQkFDRSxnQ0FBQyxhQUFEO0FBQVEsTUFBQSxNQUFNLEVBQUVJO0FBQWhCLE1BREYsQ0FERixlQUlFLGdDQUFDLGVBQUQ7QUFBaUIsTUFBQSxLQUFLLEVBQUU7QUFBQ0MsUUFBQUEsVUFBVSxFQUFFLENBQUNGLGdCQUFELEdBQW9CLFNBQXBCLEdBQWdDO0FBQTdDO0FBQXhCLE9BQ0dELEtBREgsTUFKRixDQURGLEVBU0dDLGdCQUFnQixnQkFDZixnQ0FBQyxnQ0FBRDtBQUNFLE1BQUEsTUFBTSxFQUFFSCxPQURWO0FBRUUsTUFBQSxvQkFBb0IsRUFBRUMsb0JBRnhCO0FBR0UsTUFBQSxLQUFLLEVBQUVDO0FBSFQsTUFEZSxHQU1iLElBZk4sQ0FQbUI7QUFBQSxHQUFyQjs7QUF5QkEsU0FBT0gsWUFBUDtBQUNEOztlQUNjRCxtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBBbmltYXRpb25TcGVlZFNsaWRlciBmcm9tICcuL2FuaW1hdGlvbi1zcGVlZC1zbGlkZXInO1xuaW1wb3J0IHtCdXR0b24sIENlbnRlckZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Um9ja2V0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbmNvbnN0IFN0eWxlZFNwZWVkVG9nZ2xlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAwO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBTdHlsZWRTcGVlZFRleHQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuYDtcblxuZnVuY3Rpb24gU3BlZWRDb250cm9sRmFjdG9yeSgpIHtcbiAgY29uc3QgU3BlZWRDb250cm9sID0gKHtcbiAgICBvbkNsaWNrLFxuICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkLFxuICAgIHNwZWVkLFxuICAgIHNob3dTcGVlZENvbnRyb2wsXG4gICAgYnV0dG9uSGVpZ2h0ID0gJzE4cHgnXG4gIH0pID0+IChcbiAgICA8U3R5bGVkU3BlZWRUb2dnbGUgY2xhc3NOYW1lPVwiYW5pbWF0aW9uLWNvbnRyb2xfX3NwZWVkLWNvbnRyb2xcIj5cbiAgICAgIDxCdXR0b24gbGluayB3aWR0aD1cIjgwcHhcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgPENlbnRlckZsZXhib3ggY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9faWNvbiBzcGVlZFwiPlxuICAgICAgICAgIDxSb2NrZXQgaGVpZ2h0PXtidXR0b25IZWlnaHR9IC8+XG4gICAgICAgIDwvQ2VudGVyRmxleGJveD5cbiAgICAgICAgPFN0eWxlZFNwZWVkVGV4dCBzdHlsZT17e3Zpc2liaWxpdHk6ICFzaG93U3BlZWRDb250cm9sID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9fT5cbiAgICAgICAgICB7c3BlZWR9eFxuICAgICAgICA8L1N0eWxlZFNwZWVkVGV4dD5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAge3Nob3dTcGVlZENvbnRyb2wgPyAoXG4gICAgICAgIDxBbmltYXRpb25TcGVlZFNsaWRlclxuICAgICAgICAgIG9uSGlkZT17b25DbGlja31cbiAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17dXBkYXRlQW5pbWF0aW9uU3BlZWR9XG4gICAgICAgICAgc3BlZWQ9e3NwZWVkfVxuICAgICAgICAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9TdHlsZWRTcGVlZFRvZ2dsZT5cbiAgKTtcbiAgcmV0dXJuIFNwZWVkQ29udHJvbDtcbn1cbmV4cG9ydCBkZWZhdWx0IFNwZWVkQ29udHJvbEZhY3Rvcnk7XG4iXX0=