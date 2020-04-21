"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _loadingSpinner = _interopRequireDefault(require("./loading-spinner"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  padding: 30px;\n\n  .dimension,\n  .instruction {\n    padding: 8px 0px;\n  }\n\n  .preview-image {\n    background: #e2e2e2;\n    border-radius: 4px;\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.18);\n    width: 100%;\n    position: relative;\n  }\n\n  .preview-image-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  .preview-image-spinner {\n    position: absolute;\n    left: calc(50% - 25px);\n    top: calc(50% - 25px);\n  }\n\n  .preview-image--error {\n    font-size: 12px;\n    padding: 12px;\n    color: ", ";\n    text-align: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledImagePreview = _styledComponents["default"].div.attrs({
  className: 'image-preview'
})(_templateObject(), function (props) {
  return props.theme.errorColor;
});

var ImagePreview = function ImagePreview(_ref) {
  var _ref$exportImage = _ref.exportImage,
      exportImage = _ref$exportImage === void 0 ? {} : _ref$exportImage,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 400 : _ref$width,
      showDimension = _ref.showDimension;
  var error = exportImage.error,
      imageDataUri = exportImage.imageDataUri,
      exporting = exportImage.exporting,
      _exportImage$imageSiz = exportImage.imageSize;
  _exportImage$imageSiz = _exportImage$imageSiz === void 0 ? {} : _exportImage$imageSiz;
  var imageW = _exportImage$imageSiz.imageW,
      imageH = _exportImage$imageSiz.imageH;
  var imageStyle = {
    width: "".concat(width, "px"),
    height: "".concat(imageH / (imageW || 1) * width, "px")
  };
  return /*#__PURE__*/_react["default"].createElement(StyledImagePreview, null, showDimension ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "dimension"
  }, imageW, " pixel x ", imageH, " pixel") : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview-image",
    style: imageStyle
  }, exporting ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview-image-spinner"
  }, /*#__PURE__*/_react["default"].createElement(_loadingSpinner["default"], null)) : error ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview-image--error"
  }, /*#__PURE__*/_react["default"].createElement("span", null, " ", error.message || 'Generate map image failed!')) : /*#__PURE__*/_react["default"].createElement("img", {
    className: "preview-image-placeholder",
    src: imageDataUri
  })));
};

var _default = ImagePreview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pbWFnZS1wcmV2aWV3LmpzIl0sIm5hbWVzIjpbIlN0eWxlZEltYWdlUHJldmlldyIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ0aGVtZSIsImVycm9yQ29sb3IiLCJJbWFnZVByZXZpZXciLCJleHBvcnRJbWFnZSIsIndpZHRoIiwic2hvd0RpbWVuc2lvbiIsImVycm9yIiwiaW1hZ2VEYXRhVXJpIiwiZXhwb3J0aW5nIiwiaW1hZ2VTaXplIiwiaW1hZ2VXIiwiaW1hZ2VIIiwiaW1hZ2VTdHlsZSIsImhlaWdodCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUMxQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRCtCLENBQWpCLENBQUgsb0JBd0NYLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBaEI7QUFBQSxDQXhDTSxDQUF4Qjs7QUE2Q0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBb0Q7QUFBQSw4QkFBbERDLFdBQWtEO0FBQUEsTUFBbERBLFdBQWtELGlDQUFwQyxFQUFvQztBQUFBLHdCQUFoQ0MsS0FBZ0M7QUFBQSxNQUFoQ0EsS0FBZ0MsMkJBQXhCLEdBQXdCO0FBQUEsTUFBbkJDLGFBQW1CLFFBQW5CQSxhQUFtQjtBQUFBLE1BQ2hFQyxLQURnRSxHQUNJSCxXQURKLENBQ2hFRyxLQURnRTtBQUFBLE1BQ3pEQyxZQUR5RCxHQUNJSixXQURKLENBQ3pESSxZQUR5RDtBQUFBLE1BQzNDQyxTQUQyQyxHQUNJTCxXQURKLENBQzNDSyxTQUQyQztBQUFBLDhCQUNJTCxXQURKLENBQ2hDTSxTQURnQztBQUFBLDZEQUNGLEVBREU7QUFBQSxNQUNwQkMsTUFEb0IseUJBQ3BCQSxNQURvQjtBQUFBLE1BQ1pDLE1BRFkseUJBQ1pBLE1BRFk7QUFHdkUsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCUixJQUFBQSxLQUFLLFlBQUtBLEtBQUwsT0FEWTtBQUVqQlMsSUFBQUEsTUFBTSxZQUFNRixNQUFNLElBQUlELE1BQU0sSUFBSSxDQUFkLENBQVAsR0FBMkJOLEtBQWhDO0FBRlcsR0FBbkI7QUFLQSxzQkFDRSxnQ0FBQyxrQkFBRCxRQUNHQyxhQUFhLGdCQUNaO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHSyxNQURILGVBQ29CQyxNQURwQixXQURZLEdBSVYsSUFMTixlQU1FO0FBQUssSUFBQSxTQUFTLEVBQUMsZUFBZjtBQUErQixJQUFBLEtBQUssRUFBRUM7QUFBdEMsS0FDR0osU0FBUyxnQkFDUjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsZ0NBQUMsMEJBQUQsT0FERixDQURRLEdBSU5GLEtBQUssZ0JBQ1A7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLG1EQUFRQSxLQUFLLENBQUNRLE9BQU4sSUFBaUIsNEJBQXpCLENBREYsQ0FETyxnQkFLUDtBQUFLLElBQUEsU0FBUyxFQUFDLDJCQUFmO0FBQTJDLElBQUEsR0FBRyxFQUFFUDtBQUFoRCxJQVZKLENBTkYsQ0FERjtBQXNCRCxDQTlCRDs7ZUFnQ2VMLFkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2xvYWRpbmctc3Bpbm5lcic7XHJcblxyXG5jb25zdCBTdHlsZWRJbWFnZVByZXZpZXcgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdpbWFnZS1wcmV2aWV3J1xyXG59KWBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcblxyXG4gIC5kaW1lbnNpb24sXHJcbiAgLmluc3RydWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDhweCAwcHg7XHJcbiAgfVxyXG5cclxuICAucHJldmlldy1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5wcmV2aWV3LWltYWdlLXBsYWNlaG9sZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5wcmV2aWV3LWltYWdlLXNwaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAyNXB4KTtcclxuICB9XHJcblxyXG4gIC5wcmV2aWV3LWltYWdlLS1lcnJvciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3JDb2xvcn07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VQcmV2aWV3ID0gKHtleHBvcnRJbWFnZSA9IHt9LCB3aWR0aCA9IDQwMCwgc2hvd0RpbWVuc2lvbn0pID0+IHtcclxuICBjb25zdCB7ZXJyb3IsIGltYWdlRGF0YVVyaSwgZXhwb3J0aW5nLCBpbWFnZVNpemU6IHtpbWFnZVcsIGltYWdlSH0gPSB7fX0gPSBleHBvcnRJbWFnZTtcclxuXHJcbiAgY29uc3QgaW1hZ2VTdHlsZSA9IHtcclxuICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXHJcbiAgICBoZWlnaHQ6IGAkeyhpbWFnZUggLyAoaW1hZ2VXIHx8IDEpKSAqIHdpZHRofXB4YFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkSW1hZ2VQcmV2aWV3PlxyXG4gICAgICB7c2hvd0RpbWVuc2lvbiA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvblwiPlxyXG4gICAgICAgICAge2ltYWdlV30gcGl4ZWwgeCB7aW1hZ2VIfSBwaXhlbFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCIgc3R5bGU9e2ltYWdlU3R5bGV9PlxyXG4gICAgICAgIHtleHBvcnRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2Utc3Bpbm5lclwiPlxyXG4gICAgICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBlcnJvciA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1pbWFnZS0tZXJyb3JcIj5cclxuICAgICAgICAgICAgPHNwYW4+IHtlcnJvci5tZXNzYWdlIHx8ICdHZW5lcmF0ZSBtYXAgaW1hZ2UgZmFpbGVkISd9PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJldmlldy1pbWFnZS1wbGFjZWhvbGRlclwiIHNyYz17aW1hZ2VEYXRhVXJpfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRJbWFnZVByZXZpZXc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlUHJldmlldztcclxuIl19