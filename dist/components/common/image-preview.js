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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pbWFnZS1wcmV2aWV3LmpzIl0sIm5hbWVzIjpbIlN0eWxlZEltYWdlUHJldmlldyIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJ0aGVtZSIsImVycm9yQ29sb3IiLCJJbWFnZVByZXZpZXciLCJleHBvcnRJbWFnZSIsIndpZHRoIiwic2hvd0RpbWVuc2lvbiIsImVycm9yIiwiaW1hZ2VEYXRhVXJpIiwiZXhwb3J0aW5nIiwiaW1hZ2VTaXplIiwiaW1hZ2VXIiwiaW1hZ2VIIiwiaW1hZ2VTdHlsZSIsImhlaWdodCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUMxQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRCtCLENBQWpCLENBQUgsb0JBd0NYLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBaEI7QUFBQSxDQXhDTSxDQUF4Qjs7QUE2Q0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBb0Q7QUFBQSw4QkFBbERDLFdBQWtEO0FBQUEsTUFBbERBLFdBQWtELGlDQUFwQyxFQUFvQztBQUFBLHdCQUFoQ0MsS0FBZ0M7QUFBQSxNQUFoQ0EsS0FBZ0MsMkJBQXhCLEdBQXdCO0FBQUEsTUFBbkJDLGFBQW1CLFFBQW5CQSxhQUFtQjtBQUFBLE1BQ2hFQyxLQURnRSxHQUNJSCxXQURKLENBQ2hFRyxLQURnRTtBQUFBLE1BQ3pEQyxZQUR5RCxHQUNJSixXQURKLENBQ3pESSxZQUR5RDtBQUFBLE1BQzNDQyxTQUQyQyxHQUNJTCxXQURKLENBQzNDSyxTQUQyQztBQUFBLDhCQUNJTCxXQURKLENBQ2hDTSxTQURnQztBQUFBLDZEQUNGLEVBREU7QUFBQSxNQUNwQkMsTUFEb0IseUJBQ3BCQSxNQURvQjtBQUFBLE1BQ1pDLE1BRFkseUJBQ1pBLE1BRFk7QUFHdkUsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCUixJQUFBQSxLQUFLLFlBQUtBLEtBQUwsT0FEWTtBQUVqQlMsSUFBQUEsTUFBTSxZQUFNRixNQUFNLElBQUlELE1BQU0sSUFBSSxDQUFkLENBQVAsR0FBMkJOLEtBQWhDO0FBRlcsR0FBbkI7QUFLQSxzQkFDRSxnQ0FBQyxrQkFBRCxRQUNHQyxhQUFhLGdCQUNaO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHSyxNQURILGVBQ29CQyxNQURwQixXQURZLEdBSVYsSUFMTixlQU1FO0FBQUssSUFBQSxTQUFTLEVBQUMsZUFBZjtBQUErQixJQUFBLEtBQUssRUFBRUM7QUFBdEMsS0FDR0osU0FBUyxnQkFDUjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsZ0NBQUMsMEJBQUQsT0FERixDQURRLEdBSU5GLEtBQUssZ0JBQ1A7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLG1EQUFRQSxLQUFLLENBQUNRLE9BQU4sSUFBaUIsNEJBQXpCLENBREYsQ0FETyxnQkFLUDtBQUFLLElBQUEsU0FBUyxFQUFDLDJCQUFmO0FBQTJDLElBQUEsR0FBRyxFQUFFUDtBQUFoRCxJQVZKLENBTkYsQ0FERjtBQXNCRCxDQTlCRDs7ZUFnQ2VMLFkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9hZGluZy1zcGlubmVyJztcblxuY29uc3QgU3R5bGVkSW1hZ2VQcmV2aWV3ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2ltYWdlLXByZXZpZXcnXG59KWBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG5cbiAgLmRpbWVuc2lvbixcbiAgLmluc3RydWN0aW9uIHtcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLXBsYWNlaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2Utc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDI1cHgpO1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2UtLWVycm9yIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5lcnJvckNvbG9yfTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IEltYWdlUHJldmlldyA9ICh7ZXhwb3J0SW1hZ2UgPSB7fSwgd2lkdGggPSA0MDAsIHNob3dEaW1lbnNpb259KSA9PiB7XG4gIGNvbnN0IHtlcnJvciwgaW1hZ2VEYXRhVXJpLCBleHBvcnRpbmcsIGltYWdlU2l6ZToge2ltYWdlVywgaW1hZ2VIfSA9IHt9fSA9IGV4cG9ydEltYWdlO1xuXG4gIGNvbnN0IGltYWdlU3R5bGUgPSB7XG4gICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICBoZWlnaHQ6IGAkeyhpbWFnZUggLyAoaW1hZ2VXIHx8IDEpKSAqIHdpZHRofXB4YFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEltYWdlUHJldmlldz5cbiAgICAgIHtzaG93RGltZW5zaW9uID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpbWVuc2lvblwiPlxuICAgICAgICAgIHtpbWFnZVd9IHBpeGVsIHgge2ltYWdlSH0gcGl4ZWxcbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1pbWFnZVwiIHN0eWxlPXtpbWFnZVN0eWxlfT5cbiAgICAgICAge2V4cG9ydGluZyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2Utc3Bpbm5lclwiPlxuICAgICAgICAgICAgPExvYWRpbmdTcGlubmVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2UtLWVycm9yXCI+XG4gICAgICAgICAgICA8c3Bhbj4ge2Vycm9yLm1lc3NhZ2UgfHwgJ0dlbmVyYXRlIG1hcCBpbWFnZSBmYWlsZWQhJ308L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlLXBsYWNlaG9sZGVyXCIgc3JjPXtpbWFnZURhdGFVcml9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0eWxlZEltYWdlUHJldmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlUHJldmlldztcbiJdfQ==