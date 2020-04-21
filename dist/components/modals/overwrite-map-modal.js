"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.OverwriteMapModal = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _statusPanel = require("./status-panel");

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 24px 12px;\n  min-height: 220px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 24px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 600;\n  color: black;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 24px;\n  font-size: 14px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMsg = _styledComponents["default"].div(_templateObject());

var StyledTitle = _styledComponents["default"].span(_templateObject2());

var StyledIcon = _styledComponents["default"].div(_templateObject3());

var StyledOverwriteMapModal = (0, _styledComponents["default"])(_styledComponents2.CenterVerticalFlexbox)(_templateObject4());

var OverwriteMapModalFactory = function OverwriteMapModalFactory() {
  var OverwriteMapModal = function OverwriteMapModal(_ref) {
    var mapSaved = _ref.mapSaved,
        title = _ref.title,
        currentProvider = _ref.currentProvider,
        cloudProviders = _ref.cloudProviders,
        isProviderLoading = _ref.isProviderLoading,
        onUpdateImageSetting = _ref.onUpdateImageSetting,
        onSetCloudProvider = _ref.onSetCloudProvider;
    var provider = cloudProviders.find(function (cp) {
      return cp.name === currentProvider;
    });
    return /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
      currentProvider: currentProvider,
      cloudProviders: cloudProviders,
      onUpdateImageSetting: onUpdateImageSetting,
      onSetCloudProvider: onSetCloudProvider
    }, /*#__PURE__*/_react["default"].createElement(StyledOverwriteMapModal, {
      className: "overwrite-map-modal"
    }, isProviderLoading ? /*#__PURE__*/_react["default"].createElement(StyledMsg, null, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, "Saving map..."), /*#__PURE__*/_react["default"].createElement(_statusPanel.UploadAnimation, {
      icon: provider && provider.icon
    })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledIcon, null, provider && provider.icon ? /*#__PURE__*/_react["default"].createElement(provider.icon, {
      height: "64px"
    }) : null), /*#__PURE__*/_react["default"].createElement(StyledMsg, {
      className: "overwrite-map-msg"
    }, /*#__PURE__*/_react["default"].createElement(StyledTitle, null, title), " already exists in your ".concat(mapSaved, ". Would you like to overwrite it?")))));
  };

  return OverwriteMapModal;
};

var OverwriteMapModal = OverwriteMapModalFactory();
exports.OverwriteMapModal = OverwriteMapModal;
var _default = OverwriteMapModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9vdmVyd3JpdGUtbWFwLW1vZGFsLmpzIl0sIm5hbWVzIjpbIlN0eWxlZE1zZyIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFRpdGxlIiwic3BhbiIsIlN0eWxlZEljb24iLCJTdHlsZWRPdmVyd3JpdGVNYXBNb2RhbCIsIkNlbnRlclZlcnRpY2FsRmxleGJveCIsIk92ZXJ3cml0ZU1hcE1vZGFsRmFjdG9yeSIsIk92ZXJ3cml0ZU1hcE1vZGFsIiwibWFwU2F2ZWQiLCJ0aXRsZSIsImN1cnJlbnRQcm92aWRlciIsImNsb3VkUHJvdmlkZXJzIiwiaXNQcm92aWRlckxvYWRpbmciLCJvblVwZGF0ZUltYWdlU2V0dGluZyIsIm9uU2V0Q2xvdWRQcm92aWRlciIsInByb3ZpZGVyIiwiZmluZCIsImNwIiwibmFtZSIsImljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDZCQUFPQyxHQUFWLG1CQUFmOztBQUtBLElBQU1DLFdBQVcsR0FBR0YsNkJBQU9HLElBQVYsb0JBQWpCOztBQUtBLElBQU1DLFVBQVUsR0FBR0osNkJBQU9DLEdBQVYsb0JBQWhCOztBQUlBLElBQU1JLHVCQUF1QixHQUFHLGtDQUFPQyx3Q0FBUCxDQUFILG9CQUE3Qjs7QUFLQSxJQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLEdBQU07QUFDckMsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQVFwQjtBQUFBLFFBUEpDLFFBT0ksUUFQSkEsUUFPSTtBQUFBLFFBTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLFFBTEpDLGVBS0ksUUFMSkEsZUFLSTtBQUFBLFFBSkpDLGNBSUksUUFKSkEsY0FJSTtBQUFBLFFBSEpDLGlCQUdJLFFBSEpBLGlCQUdJO0FBQUEsUUFGSkMsb0JBRUksUUFGSkEsb0JBRUk7QUFBQSxRQURKQyxrQkFDSSxRQURKQSxrQkFDSTtBQUNKLFFBQU1DLFFBQVEsR0FBR0osY0FBYyxDQUFDSyxJQUFmLENBQW9CLFVBQUFDLEVBQUU7QUFBQSxhQUFJQSxFQUFFLENBQUNDLElBQUgsS0FBWVIsZUFBaEI7QUFBQSxLQUF0QixDQUFqQjtBQUNBLHdCQUNFLGdDQUFDLCtCQUFEO0FBQ0UsTUFBQSxlQUFlLEVBQUVBLGVBRG5CO0FBRUUsTUFBQSxjQUFjLEVBQUVDLGNBRmxCO0FBR0UsTUFBQSxvQkFBb0IsRUFBRUUsb0JBSHhCO0FBSUUsTUFBQSxrQkFBa0IsRUFBRUM7QUFKdEIsb0JBTUUsZ0NBQUMsdUJBQUQ7QUFBeUIsTUFBQSxTQUFTLEVBQUM7QUFBbkMsT0FDR0YsaUJBQWlCLGdCQUNoQixnQ0FBQyxTQUFELHFCQUNFLGdDQUFDLFdBQUQsd0JBREYsZUFFRSxnQ0FBQyw0QkFBRDtBQUFpQixNQUFBLElBQUksRUFBRUcsUUFBUSxJQUFJQSxRQUFRLENBQUNJO0FBQTVDLE1BRkYsQ0FEZ0IsZ0JBTWhCLCtFQUNFLGdDQUFDLFVBQUQsUUFDR0osUUFBUSxJQUFJQSxRQUFRLENBQUNJLElBQXJCLGdCQUE0QixnQ0FBQyxRQUFELENBQVUsSUFBVjtBQUFlLE1BQUEsTUFBTSxFQUFDO0FBQXRCLE1BQTVCLEdBQThELElBRGpFLENBREYsZUFJRSxnQ0FBQyxTQUFEO0FBQVcsTUFBQSxTQUFTLEVBQUM7QUFBckIsb0JBQ0UsZ0NBQUMsV0FBRCxRQUFjVixLQUFkLENBREYsb0NBRThCRCxRQUY5Qix1Q0FKRixDQVBKLENBTkYsQ0FERjtBQTJCRCxHQXJDRDs7QUFzQ0EsU0FBT0QsaUJBQVA7QUFDRCxDQXhDRDs7QUEwQ08sSUFBTUEsaUJBQWlCLEdBQUdELHdCQUF3QixFQUFsRDs7ZUFFUUEsd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtDZW50ZXJWZXJ0aWNhbEZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtVcGxvYWRBbmltYXRpb259IGZyb20gJy4vc3RhdHVzLXBhbmVsJztcclxuaW1wb3J0IEltYWdlTW9kYWxDb250YWluZXIgZnJvbSAnLi9pbWFnZS1tb2RhbC1jb250YWluZXInO1xyXG5cclxuY29uc3QgU3R5bGVkTXNnID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkT3ZlcndyaXRlTWFwTW9kYWwgPSBzdHlsZWQoQ2VudGVyVmVydGljYWxGbGV4Ym94KWBcclxuICBwYWRkaW5nOiAyNHB4IDEycHg7XHJcbiAgbWluLWhlaWdodDogMjIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBPdmVyd3JpdGVNYXBNb2RhbEZhY3RvcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgT3ZlcndyaXRlTWFwTW9kYWwgPSAoe1xyXG4gICAgbWFwU2F2ZWQsXHJcbiAgICB0aXRsZSxcclxuICAgIGN1cnJlbnRQcm92aWRlcixcclxuICAgIGNsb3VkUHJvdmlkZXJzLFxyXG4gICAgaXNQcm92aWRlckxvYWRpbmcsXHJcbiAgICBvblVwZGF0ZUltYWdlU2V0dGluZyxcclxuICAgIG9uU2V0Q2xvdWRQcm92aWRlclxyXG4gIH0pID0+IHtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gY2xvdWRQcm92aWRlcnMuZmluZChjcCA9PiBjcC5uYW1lID09PSBjdXJyZW50UHJvdmlkZXIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEltYWdlTW9kYWxDb250YWluZXJcclxuICAgICAgICBjdXJyZW50UHJvdmlkZXI9e2N1cnJlbnRQcm92aWRlcn1cclxuICAgICAgICBjbG91ZFByb3ZpZGVycz17Y2xvdWRQcm92aWRlcnN9XHJcbiAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e29uVXBkYXRlSW1hZ2VTZXR0aW5nfVxyXG4gICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17b25TZXRDbG91ZFByb3ZpZGVyfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFN0eWxlZE92ZXJ3cml0ZU1hcE1vZGFsIGNsYXNzTmFtZT1cIm92ZXJ3cml0ZS1tYXAtbW9kYWxcIj5cclxuICAgICAgICAgIHtpc1Byb3ZpZGVyTG9hZGluZyA/IChcclxuICAgICAgICAgICAgPFN0eWxlZE1zZz5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGl0bGU+U2F2aW5nIG1hcC4uLjwvU3R5bGVkVGl0bGU+XHJcbiAgICAgICAgICAgICAgPFVwbG9hZEFuaW1hdGlvbiBpY29uPXtwcm92aWRlciAmJiBwcm92aWRlci5pY29ufSAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZE1zZz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZEljb24+XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZXIgJiYgcHJvdmlkZXIuaWNvbiA/IDxwcm92aWRlci5pY29uIGhlaWdodD1cIjY0cHhcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRJY29uPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRNc2cgY2xhc3NOYW1lPVwib3ZlcndyaXRlLW1hcC1tc2dcIj5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRUaXRsZT57dGl0bGV9PC9TdHlsZWRUaXRsZT5cclxuICAgICAgICAgICAgICAgIHtgIGFscmVhZHkgZXhpc3RzIGluIHlvdXIgJHttYXBTYXZlZH0uIFdvdWxkIHlvdSBsaWtlIHRvIG92ZXJ3cml0ZSBpdD9gfVxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkTXNnPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9TdHlsZWRPdmVyd3JpdGVNYXBNb2RhbD5cclxuICAgICAgPC9JbWFnZU1vZGFsQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiBPdmVyd3JpdGVNYXBNb2RhbDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBPdmVyd3JpdGVNYXBNb2RhbCA9IE92ZXJ3cml0ZU1hcE1vZGFsRmFjdG9yeSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3ZlcndyaXRlTWFwTW9kYWxGYWN0b3J5O1xyXG4iXX0=