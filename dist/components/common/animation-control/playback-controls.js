"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents2 = require("../styled-components");

var _icons = require("../icons");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 6px 4px;\n  svg {\n    margin: 0 6px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  margin-right: 12px;\n\n  &.disabled {\n    opacity: 0.4;\n    pointer-events: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledAnimationControls = _styledComponents["default"].div(_templateObject());

var IconButton = (0, _styledComponents["default"])(_styledComponents2.Button)(_templateObject2());

function nop() {}

var DEFAULT_BUTTON_HEIGHT = '18px';

function AnimationPlaybacksFactory() {
  var AnimationPlaybacks = function AnimationPlaybacks(_ref) {
    var isAnimatable = _ref.isAnimatable,
        isAnimating = _ref.isAnimating,
        buttonStyle = _ref.buttonStyle,
        _ref$pauseAnimation = _ref.pauseAnimation,
        pauseAnimation = _ref$pauseAnimation === void 0 ? nop : _ref$pauseAnimation,
        _ref$updateAnimationT = _ref.updateAnimationTime,
        updateAnimationTime = _ref$updateAnimationT === void 0 ? nop : _ref$updateAnimationT,
        _ref$startAnimation = _ref.startAnimation,
        startAnimation = _ref$startAnimation === void 0 ? nop : _ref$startAnimation,
        _ref$buttonHeight = _ref.buttonHeight,
        buttonHeight = _ref$buttonHeight === void 0 ? DEFAULT_BUTTON_HEIGHT : _ref$buttonHeight;
    var btnStyle = buttonStyle ? (0, _defineProperty2["default"])({}, buttonStyle, true) : {};
    return /*#__PURE__*/_react["default"].createElement(StyledAnimationControls, {
      className: (0, _classnames["default"])('time-range-slider__control', {
        disabled: !isAnimatable
      })
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.ButtonGroup, null, /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({
      className: "playback-control-button"
    }, btnStyle, {
      onClick: updateAnimationTime
    }), /*#__PURE__*/_react["default"].createElement(_icons.Reset, {
      height: buttonHeight
    })), /*#__PURE__*/_react["default"].createElement(IconButton, (0, _extends2["default"])({}, btnStyle, {
      className: (0, _classnames["default"])('playback-control-button', {
        active: isAnimating
      }),
      onClick: isAnimating ? pauseAnimation : startAnimation
    }), isAnimating ? /*#__PURE__*/_react["default"].createElement(_icons.Pause, {
      height: buttonHeight
    }) : /*#__PURE__*/_react["default"].createElement(_icons.Play, {
      height: buttonHeight
    }))));
  };

  return AnimationPlaybacks;
}

var _default = AnimationPlaybacksFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9wbGF5YmFjay1jb250cm9scy5qcyJdLCJuYW1lcyI6WyJTdHlsZWRBbmltYXRpb25Db250cm9scyIsInN0eWxlZCIsImRpdiIsIkljb25CdXR0b24iLCJCdXR0b24iLCJub3AiLCJERUZBVUxUX0JVVFRPTl9IRUlHSFQiLCJBbmltYXRpb25QbGF5YmFja3NGYWN0b3J5IiwiQW5pbWF0aW9uUGxheWJhY2tzIiwiaXNBbmltYXRhYmxlIiwiaXNBbmltYXRpbmciLCJidXR0b25TdHlsZSIsInBhdXNlQW5pbWF0aW9uIiwidXBkYXRlQW5pbWF0aW9uVGltZSIsInN0YXJ0QW5pbWF0aW9uIiwiYnV0dG9uSGVpZ2h0IiwiYnRuU3R5bGUiLCJkaXNhYmxlZCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsdUJBQXVCLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUE3Qjs7QUFVQSxJQUFNQyxVQUFVLEdBQUcsa0NBQU9DLHlCQUFQLENBQUgsb0JBQWhCOztBQU9BLFNBQVNDLEdBQVQsR0FBZSxDQUFFOztBQUNqQixJQUFNQyxxQkFBcUIsR0FBRyxNQUE5Qjs7QUFFQSxTQUFTQyx5QkFBVCxHQUFxQztBQUNuQyxNQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLE9BUXJCO0FBQUEsUUFQSkMsWUFPSSxRQVBKQSxZQU9JO0FBQUEsUUFOSkMsV0FNSSxRQU5KQSxXQU1JO0FBQUEsUUFMSkMsV0FLSSxRQUxKQSxXQUtJO0FBQUEsbUNBSkpDLGNBSUk7QUFBQSxRQUpKQSxjQUlJLG9DQUphUCxHQUliO0FBQUEscUNBSEpRLG1CQUdJO0FBQUEsUUFISkEsbUJBR0ksc0NBSGtCUixHQUdsQjtBQUFBLG1DQUZKUyxjQUVJO0FBQUEsUUFGSkEsY0FFSSxvQ0FGYVQsR0FFYjtBQUFBLGlDQURKVSxZQUNJO0FBQUEsUUFESkEsWUFDSSxrQ0FEV1QscUJBQ1g7QUFDSixRQUFNVSxRQUFRLEdBQUdMLFdBQVcsd0NBQUtBLFdBQUwsRUFBbUIsSUFBbkIsSUFBMkIsRUFBdkQ7QUFDQSx3QkFDRSxnQ0FBQyx1QkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFFLDRCQUFXLDRCQUFYLEVBQXlDO0FBQ2xETSxRQUFBQSxRQUFRLEVBQUUsQ0FBQ1I7QUFEdUMsT0FBekM7QUFEYixvQkFLRSxnQ0FBQyw4QkFBRCxxQkFDRSxnQ0FBQyxVQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUM7QUFEWixPQUVNTyxRQUZOO0FBR0UsTUFBQSxPQUFPLEVBQUVIO0FBSFgscUJBS0UsZ0NBQUMsWUFBRDtBQUFPLE1BQUEsTUFBTSxFQUFFRTtBQUFmLE1BTEYsQ0FERixlQVFFLGdDQUFDLFVBQUQsZ0NBQ01DLFFBRE47QUFFRSxNQUFBLFNBQVMsRUFBRSw0QkFBVyx5QkFBWCxFQUFzQztBQUFDRSxRQUFBQSxNQUFNLEVBQUVSO0FBQVQsT0FBdEMsQ0FGYjtBQUdFLE1BQUEsT0FBTyxFQUFFQSxXQUFXLEdBQUdFLGNBQUgsR0FBb0JFO0FBSDFDLFFBS0dKLFdBQVcsZ0JBQUcsZ0NBQUMsWUFBRDtBQUFPLE1BQUEsTUFBTSxFQUFFSztBQUFmLE1BQUgsZ0JBQXFDLGdDQUFDLFdBQUQ7QUFBTSxNQUFBLE1BQU0sRUFBRUE7QUFBZCxNQUxuRCxDQVJGLENBTEYsQ0FERjtBQXdCRCxHQWxDRDs7QUFtQ0EsU0FBT1Asa0JBQVA7QUFDRDs7ZUFFY0QseUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5pbXBvcnQge0J1dHRvbkdyb3VwLCBCdXR0b259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtQbGF5LCBSZXNldCwgUGF1c2V9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcclxuXHJcbmNvbnN0IFN0eWxlZEFuaW1hdGlvbkNvbnRyb2xzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJY29uQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgcGFkZGluZzogNnB4IDRweDtcclxuICBzdmcge1xyXG4gICAgbWFyZ2luOiAwIDZweDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBub3AoKSB7fVxyXG5jb25zdCBERUZBVUxUX0JVVFRPTl9IRUlHSFQgPSAnMThweCc7XHJcblxyXG5mdW5jdGlvbiBBbmltYXRpb25QbGF5YmFja3NGYWN0b3J5KCkge1xyXG4gIGNvbnN0IEFuaW1hdGlvblBsYXliYWNrcyA9ICh7XHJcbiAgICBpc0FuaW1hdGFibGUsXHJcbiAgICBpc0FuaW1hdGluZyxcclxuICAgIGJ1dHRvblN0eWxlLFxyXG4gICAgcGF1c2VBbmltYXRpb24gPSBub3AsXHJcbiAgICB1cGRhdGVBbmltYXRpb25UaW1lID0gbm9wLFxyXG4gICAgc3RhcnRBbmltYXRpb24gPSBub3AsXHJcbiAgICBidXR0b25IZWlnaHQgPSBERUZBVUxUX0JVVFRPTl9IRUlHSFRcclxuICB9KSA9PiB7XHJcbiAgICBjb25zdCBidG5TdHlsZSA9IGJ1dHRvblN0eWxlID8ge1tidXR0b25TdHlsZV06IHRydWV9IDoge307XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkQW5pbWF0aW9uQ29udHJvbHNcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3RpbWUtcmFuZ2Utc2xpZGVyX19jb250cm9sJywge1xyXG4gICAgICAgICAgZGlzYWJsZWQ6ICFpc0FuaW1hdGFibGVcclxuICAgICAgICB9KX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCdXR0b25Hcm91cD5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYXliYWNrLWNvbnRyb2wtYnV0dG9uXCJcclxuICAgICAgICAgICAgey4uLmJ0blN0eWxlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt1cGRhdGVBbmltYXRpb25UaW1lfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UmVzZXQgaGVpZ2h0PXtidXR0b25IZWlnaHR9IC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICB7Li4uYnRuU3R5bGV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncGxheWJhY2stY29udHJvbC1idXR0b24nLCB7YWN0aXZlOiBpc0FuaW1hdGluZ30pfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtpc0FuaW1hdGluZyA/IHBhdXNlQW5pbWF0aW9uIDogc3RhcnRBbmltYXRpb259XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc0FuaW1hdGluZyA/IDxQYXVzZSBoZWlnaHQ9e2J1dHRvbkhlaWdodH0gLz4gOiA8UGxheSBoZWlnaHQ9e2J1dHRvbkhlaWdodH0gLz59XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgPC9TdHlsZWRBbmltYXRpb25Db250cm9scz5cclxuICAgICk7XHJcbiAgfTtcclxuICByZXR1cm4gQW5pbWF0aW9uUGxheWJhY2tzO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25QbGF5YmFja3NGYWN0b3J5O1xyXG4iXX0=