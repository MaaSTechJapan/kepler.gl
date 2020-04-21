"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ShareMapUrlModalFactory;
exports.SharingUrl = exports.StyleSharingUrl = exports.StyledInputLabel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _base = require("../../styles/base");

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

var _providerModalContainer = _interopRequireDefault(require("./provider-modal-container"));

var _styledComponents2 = require("../common/styled-components");

var _cloudTile = _interopRequireDefault(require("./cloud-tile"));

var _statusPanel = _interopRequireDefault(require("./status-panel"));

var _defaultSettings = require("../../constants/default-settings");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  min-height: 500px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 24px 72px 40px 72px;\n  margin: 0 -72px -40px -72px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  display: flex;\n  margin-bottom: 14px;\n  flex-direction: column;\n\n  input {\n    border-right: 0;\n  }\n\n  .button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  color: ", ";\n  letter-spacing: 0.2px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledInputLabel = _styledComponents["default"].label(_templateObject(), function (props) {
  return props.theme.textColorLT;
});

exports.StyledInputLabel = StyledInputLabel;

var StyleSharingUrl = _styledComponents["default"].div.attrs({
  className: 'sharing-url'
})(_templateObject2());

exports.StyleSharingUrl = StyleSharingUrl;

var SharingUrl = function SharingUrl(_ref) {
  var url = _ref.url,
      message = _ref.message;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      copied = _useState2[0],
      setCopy = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(StyleSharingUrl, null, /*#__PURE__*/_react["default"].createElement(StyledInputLabel, null, message), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
    type: "text",
    value: url,
    readOnly: true,
    selected: true
  }), /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: url,
    onCopy: function onCopy() {
      return setCopy(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    width: "80px"
  }, copied ? 'Copied!' : 'Copy'))));
};

exports.SharingUrl = SharingUrl;

var nop = function nop() {};

var StyledShareMapModal = (0, _styledComponents["default"])(_styledComponents2.StyledModalContent)(_templateObject3());

var StyledInnerDiv = _styledComponents["default"].div(_templateObject4());

function ShareMapUrlModalFactory() {
  var ShareMapUrlModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ShareMapUrlModal, _Component);

    var _super = _createSuper(ShareMapUrlModal);

    function ShareMapUrlModal() {
      (0, _classCallCheck2["default"])(this, ShareMapUrlModal);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(ShareMapUrlModal, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            isProviderLoading = _this$props.isProviderLoading,
            isReady = _this$props.isReady,
            onExport = _this$props.onExport,
            cloudProviders = _this$props.cloudProviders,
            currentProvider = _this$props.currentProvider,
            providerError = _this$props.providerError,
            successInfo = _this$props.successInfo,
            onSetCloudProvider = _this$props.onSetCloudProvider,
            onUpdateImageSetting = _this$props.onUpdateImageSetting;
        var shareUrl = successInfo.shareUrl,
            folderLink = successInfo.folderLink;
        var provider = currentProvider ? cloudProviders.find(function (p) {
          return p.name === currentProvider;
        }) : null;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
          theme: _base.themeLT
        }, /*#__PURE__*/_react["default"].createElement(_providerModalContainer["default"], {
          onSetCloudProvider: onSetCloudProvider,
          cloudProviders: cloudProviders,
          currentProvider: currentProvider
        }, /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
          currentProvider: currentProvider,
          cloudProviders: cloudProviders,
          onUpdateImageSetting: onUpdateImageSetting
        }, /*#__PURE__*/_react["default"].createElement(StyledShareMapModal, {
          className: "export-cloud-modal"
        }, /*#__PURE__*/_react["default"].createElement(StyledInnerDiv, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, "Share Map Url"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, "Generate a map url to share with others")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title warning"
        }, _defaultSettings.SHARE_DISCLAIMER))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
          disabled: isProviderLoading
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, "Cloud storage"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, "Login and upload map data to your personal cloud storage")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, cloudProviders.map(function (cloudProvider) {
          return /*#__PURE__*/_react["default"].createElement(_cloudTile["default"], {
            key: cloudProvider.name,
            onSelect: function onSelect() {
              return onExport(cloudProvider);
            },
            onSetCloudProvider: onSetCloudProvider,
            cloudProvider: cloudProvider,
            actionName: "Upload",
            isSelected: cloudProvider.name === currentProvider,
            isConnected: Boolean(cloudProvider.getAccessToken()),
            isReady: isReady
          });
        }))), isProviderLoading || providerError ? /*#__PURE__*/_react["default"].createElement(_statusPanel["default"], {
          isLoading: isProviderLoading,
          error: providerError,
          providerIcon: provider && provider.icon
        }) : null, shareUrl && /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, "Share Url")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement(SharingUrl, {
          key: 0,
          url: shareUrl
        }), provider && folderLink && /*#__PURE__*/_react["default"].createElement("a", {
          key: 1,
          href: folderLink,
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            textDecoration: 'underline'
          }
        }, "Go to your Kepler.gl ", provider.displayName, " page"))))))));
      }
    }]);
    return ShareMapUrlModal;
  }(_react.Component);

  (0, _defineProperty2["default"])(ShareMapUrlModal, "defaultProps", {
    isProviderLoading: false,
    onExport: nop,
    cloudProviders: [],
    currentProvider: null,
    providerError: null,
    successInfo: {},
    onSetCloudProvider: nop,
    onUpdateImageSetting: nop
  });
  return ShareMapUrlModal;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9zaGFyZS1tYXAtbW9kYWwuanMiXSwibmFtZXMiOlsiU3R5bGVkSW5wdXRMYWJlbCIsInN0eWxlZCIsImxhYmVsIiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwiU3R5bGVTaGFyaW5nVXJsIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTaGFyaW5nVXJsIiwidXJsIiwibWVzc2FnZSIsImNvcGllZCIsInNldENvcHkiLCJkaXNwbGF5Iiwibm9wIiwiU3R5bGVkU2hhcmVNYXBNb2RhbCIsIlN0eWxlZE1vZGFsQ29udGVudCIsIlN0eWxlZElubmVyRGl2IiwiU2hhcmVNYXBVcmxNb2RhbEZhY3RvcnkiLCJTaGFyZU1hcFVybE1vZGFsIiwiaXNQcm92aWRlckxvYWRpbmciLCJpc1JlYWR5Iiwib25FeHBvcnQiLCJjbG91ZFByb3ZpZGVycyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyRXJyb3IiLCJzdWNjZXNzSW5mbyIsIm9uU2V0Q2xvdWRQcm92aWRlciIsIm9uVXBkYXRlSW1hZ2VTZXR0aW5nIiwic2hhcmVVcmwiLCJmb2xkZXJMaW5rIiwicHJvdmlkZXIiLCJmaW5kIiwicCIsIm5hbWUiLCJ0aGVtZUxUIiwiU0hBUkVfRElTQ0xBSU1FUiIsIm1hcCIsImNsb3VkUHJvdmlkZXIiLCJCb29sZWFuIiwiZ2V0QWNjZXNzVG9rZW4iLCJpY29uIiwidGV4dERlY29yYXRpb24iLCJkaXNwbGF5TmFtZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFNQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLGdCQUFnQixHQUFHQyw2QkFBT0MsS0FBVixvQkFFbEIsVUFBQUMsS0FBSztBQUFB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IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCBDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwge1RoZW1lUHJvdmlkZXJ9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtDb3B5VG9DbGlwYm9hcmR9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcclxuaW1wb3J0IHt0aGVtZUxUfSBmcm9tICdzdHlsZXMvYmFzZSc7XHJcbmltcG9ydCBJbWFnZU1vZGFsQ29udGFpbmVyIGZyb20gJy4vaW1hZ2UtbW9kYWwtY29udGFpbmVyJztcclxuaW1wb3J0IFByb3ZpZGVyTW9kYWxDb250YWluZXIgZnJvbSAnLi9wcm92aWRlci1tb2RhbC1jb250YWluZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICBTdHlsZWRNb2RhbENvbnRlbnQsXHJcbiAgU3R5bGVkRXhwb3J0U2VjdGlvbixcclxuICBJbnB1dExpZ2h0LFxyXG4gIEJ1dHRvblxyXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IENsb3VkVGlsZSBmcm9tICcuL2Nsb3VkLXRpbGUnO1xyXG5pbXBvcnQgU3RhdHVzUGFuZWwgZnJvbSAnLi9zdGF0dXMtcGFuZWwnO1xyXG5pbXBvcnQge1NIQVJFX0RJU0NMQUlNRVJ9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dExhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlU2hhcmluZ1VybCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ3NoYXJpbmctdXJsJ1xyXG59KWBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2hhcmluZ1VybCA9ICh7dXJsLCBtZXNzYWdlfSkgPT4ge1xyXG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVTaGFyaW5nVXJsPlxyXG4gICAgICA8U3R5bGVkSW5wdXRMYWJlbD57bWVzc2FnZX08L1N0eWxlZElucHV0TGFiZWw+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cclxuICAgICAgICA8SW5wdXRMaWdodCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1cmx9IHJlYWRPbmx5IHNlbGVjdGVkIC8+XHJcbiAgICAgICAgPENvcHlUb0NsaXBib2FyZCB0ZXh0PXt1cmx9IG9uQ29weT17KCkgPT4gc2V0Q29weSh0cnVlKX0+XHJcbiAgICAgICAgICA8QnV0dG9uIHdpZHRoPVwiODBweFwiPntjb3BpZWQgPyAnQ29waWVkIScgOiAnQ29weSd9PC9CdXR0b24+XHJcbiAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZVNoYXJpbmdVcmw+XHJcbiAgKTtcclxufTtcclxuY29uc3Qgbm9wID0gKCkgPT4ge307XHJcblxyXG5jb25zdCBTdHlsZWRTaGFyZU1hcE1vZGFsID0gc3R5bGVkKFN0eWxlZE1vZGFsQ29udGVudClgXHJcbiAgcGFkZGluZzogMjRweCA3MnB4IDQwcHggNzJweDtcclxuICBtYXJnaW46IDAgLTcycHggLTQwcHggLTcycHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRJbm5lckRpdiA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGFyZU1hcFVybE1vZGFsRmFjdG9yeSgpIHtcclxuICBjbGFzcyBTaGFyZU1hcFVybE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgb25FeHBvcnQ6IG5vcCxcclxuICAgICAgY2xvdWRQcm92aWRlcnM6IFtdLFxyXG4gICAgICBjdXJyZW50UHJvdmlkZXI6IG51bGwsXHJcbiAgICAgIHByb3ZpZGVyRXJyb3I6IG51bGwsXHJcbiAgICAgIHN1Y2Nlc3NJbmZvOiB7fSxcclxuICAgICAgb25TZXRDbG91ZFByb3ZpZGVyOiBub3AsXHJcbiAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nOiBub3BcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgaXNQcm92aWRlckxvYWRpbmcsXHJcbiAgICAgICAgaXNSZWFkeSxcclxuICAgICAgICBvbkV4cG9ydCxcclxuICAgICAgICBjbG91ZFByb3ZpZGVycyxcclxuICAgICAgICBjdXJyZW50UHJvdmlkZXIsXHJcbiAgICAgICAgcHJvdmlkZXJFcnJvcixcclxuICAgICAgICBzdWNjZXNzSW5mbyxcclxuICAgICAgICBvblNldENsb3VkUHJvdmlkZXIsXHJcbiAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmdcclxuICAgICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGNvbnN0IHtzaGFyZVVybCwgZm9sZGVyTGlua30gPSBzdWNjZXNzSW5mbztcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBjdXJyZW50UHJvdmlkZXJcclxuICAgICAgICA/IGNsb3VkUHJvdmlkZXJzLmZpbmQocCA9PiBwLm5hbWUgPT09IGN1cnJlbnRQcm92aWRlcilcclxuICAgICAgICA6IG51bGw7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZUxUfT5cclxuICAgICAgICAgIDxQcm92aWRlck1vZGFsQ29udGFpbmVyXHJcbiAgICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17b25TZXRDbG91ZFByb3ZpZGVyfVxyXG4gICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17Y2xvdWRQcm92aWRlcnN9XHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlcj17Y3VycmVudFByb3ZpZGVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VNb2RhbENvbnRhaW5lclxyXG4gICAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlcj17Y3VycmVudFByb3ZpZGVyfVxyXG4gICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXtjbG91ZFByb3ZpZGVyc31cclxuICAgICAgICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZz17b25VcGRhdGVJbWFnZVNldHRpbmd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U3R5bGVkU2hhcmVNYXBNb2RhbCBjbGFzc05hbWU9XCJleHBvcnQtY2xvdWQtbW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRJbm5lckRpdj5cclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNoYXJlIE1hcCBVcmw8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5HZW5lcmF0ZSBhIG1hcCB1cmwgdG8gc2hhcmUgd2l0aCBvdGhlcnM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB3YXJuaW5nXCI+e1NIQVJFX0RJU0NMQUlNRVJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24gZGlzYWJsZWQ9e2lzUHJvdmlkZXJMb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q2xvdWQgc3RvcmFnZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpbiBhbmQgdXBsb2FkIG1hcCBkYXRhIHRvIHlvdXIgcGVyc29uYWwgY2xvdWQgc3RvcmFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjbG91ZFByb3ZpZGVycy5tYXAoY2xvdWRQcm92aWRlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG91ZFRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Nsb3VkUHJvdmlkZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gb25FeHBvcnQoY2xvdWRQcm92aWRlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXtvblNldENsb3VkUHJvdmlkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvdWRQcm92aWRlcj17Y2xvdWRQcm92aWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lPVwiVXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXtjbG91ZFByb3ZpZGVyLm5hbWUgPT09IGN1cnJlbnRQcm92aWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Nvbm5lY3RlZD17Qm9vbGVhbihjbG91ZFByb3ZpZGVyLmdldEFjY2Vzc1Rva2VuKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVhZHk9e2lzUmVhZHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7aXNQcm92aWRlckxvYWRpbmcgfHwgcHJvdmlkZXJFcnJvciA/IChcclxuICAgICAgICAgICAgICAgICAgICA8U3RhdHVzUGFuZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNQcm92aWRlckxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17cHJvdmlkZXJFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHByb3ZpZGVySWNvbj17cHJvdmlkZXIgJiYgcHJvdmlkZXIuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAge3NoYXJlVXJsICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNoYXJlIFVybDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hhcmluZ1VybCBrZXk9ezB9IHVybD17c2hhcmVVcmx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlciAmJiBmb2xkZXJMaW5rICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Zm9sZGVyTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyB0byB5b3VyIEtlcGxlci5nbCB7cHJvdmlkZXIuZGlzcGxheU5hbWV9IHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZEV4cG9ydFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZElubmVyRGl2PlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkU2hhcmVNYXBNb2RhbD5cclxuICAgICAgICAgICAgPC9JbWFnZU1vZGFsQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9Qcm92aWRlck1vZGFsQ29udGFpbmVyPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBTaGFyZU1hcFVybE1vZGFsO1xyXG59XHJcbiJdfQ==