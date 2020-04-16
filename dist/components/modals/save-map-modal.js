"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MapInfoPanel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _cloudTile = _interopRequireDefault(require("./cloud-tile"));

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

var _providerModalContainer = _interopRequireDefault(require("./provider-modal-container"));

var _statusPanel = _interopRequireWildcard(require("./status-panel"));

var _defaultSettings = require("../../constants/default-settings");

var _styledComponents2 = require("../common/styled-components");

var _imagePreview = _interopRequireDefault(require("../common/image-preview"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .save-map-modal-content {\n    min-height: 400px;\n    flex-direction: column;\n  }\n\n  .description {\n    width: 300px;\n  }\n\n  .image-preview-panel {\n    width: 300px;\n\n    .image-preview {\n      padding: 0;\n    }\n  }\n\n  .map-info-panel {\n    flex-direction: column;\n  }\n\n  .save-map-modal-description {\n    .modal-section-subtitle {\n      margin-left: 6px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSaveMapModal = _styledComponents["default"].div.attrs({
  className: 'save-map-modal'
})(_templateObject());

var nop = function nop() {};

var MapInfoPanel = function MapInfoPanel(_ref) {
  var _ref$mapInfo = _ref.mapInfo,
      mapInfo = _ref$mapInfo === void 0 ? {
    description: '',
    title: ''
  } : _ref$mapInfo,
      characterLimits = _ref.characterLimits,
      onChangeInput = _ref.onChangeInput;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection map-info-panel"
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, {
    className: "save-map-modal-name"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-title"
  }, "Name*"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
    id: "map-title",
    type: "text",
    value: mapInfo.title,
    onChange: function onChange(e) {
      return onChangeInput('title', e);
    },
    placeholder: "Type map title"
  }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "save-map-modal-description",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-title"
  }, "Description"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-section-subtitle"
  }, "(optional)")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.TextAreaLight, {
    rows: "3",
    id: "map-description",
    style: {
      resize: 'none'
    },
    value: mapInfo.description,
    onChange: function onChange(e) {
      return onChangeInput('description', e);
    },
    placeholder: "Type map description"
  })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalInputFootnote, {
    className: "save-map-modal-description__footnote",
    error: characterLimits.description && mapInfo.description.length > characterLimits.description
  }, mapInfo.description.length, "/", characterLimits.description || _defaultSettings.MAP_INFO_CHARACTER.description, ' ', "characters")));
};

exports.MapInfoPanel = MapInfoPanel;

function SaveMapModalFactory() {
  var SaveMapModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(SaveMapModal, _Component);

    var _super = _createSuper(SaveMapModal);

    function SaveMapModal() {
      var _this;

      (0, _classCallCheck2["default"])(this, SaveMapModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChangeInput", function (key, e) {
        var value = e.target.value;

        _this.props.onSetMapInfo((0, _defineProperty2["default"])({}, key, value));
      });
      return _this;
    }

    (0, _createClass2["default"])(SaveMapModal, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            mapInfo = _this$props.mapInfo,
            exportImage = _this$props.exportImage,
            _this$props$character = _this$props.characterLimits,
            characterLimits = _this$props$character === void 0 ? {} : _this$props$character,
            cloudProviders = _this$props.cloudProviders,
            isProviderLoading = _this$props.isProviderLoading,
            currentProvider = _this$props.currentProvider,
            providerError = _this$props.providerError,
            onSetCloudProvider = _this$props.onSetCloudProvider,
            onUpdateImageSetting = _this$props.onUpdateImageSetting;
        var provider = currentProvider ? cloudProviders.find(function (p) {
          return p.name === currentProvider;
        }) : null;
        return /*#__PURE__*/_react["default"].createElement(_providerModalContainer["default"], {
          onSetCloudProvider: onSetCloudProvider,
          cloudProviders: cloudProviders,
          currentProvider: currentProvider
        }, /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
          currentProvider: currentProvider,
          cloudProviders: cloudProviders,
          onUpdateImageSetting: onUpdateImageSetting
        }, /*#__PURE__*/_react["default"].createElement(StyledSaveMapModal, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, {
          className: "save-map-modal-content"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
          disabled: isProviderLoading
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, "Cloud storage"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, "Login save map to your personal cloud storage")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, cloudProviders.map(function (cloudProvider) {
          return /*#__PURE__*/_react["default"].createElement(_cloudTile["default"], {
            key: cloudProvider.name,
            onSelect: function onSelect() {
              return onSetCloudProvider(cloudProvider.name);
            },
            onSetCloudProvider: onSetCloudProvider,
            cloudProvider: cloudProvider,
            isSelected: cloudProvider.name === currentProvider,
            isConnected: Boolean(cloudProvider.getAccessToken && cloudProvider.getAccessToken())
          });
        }))), provider && provider.getManagementUrl && /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
          style: {
            margin: '2px 0'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement("a", {
          key: 1,
          href: provider.getManagementUrl(),
          target: "_blank",
          rel: "noopener noreferrer",
          style: {
            textDecoration: 'underline'
          }
        }, "Go to your Kepler.gl ", provider.displayName, " page"))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description image-preview-panel"
        }, /*#__PURE__*/_react["default"].createElement(_imagePreview["default"], {
          exportImage: exportImage,
          width: _defaultSettings.MAP_THUMBNAIL_DIMENSION.width,
          showDimension: false
        })), isProviderLoading ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection map-saving-animation"
        }, /*#__PURE__*/_react["default"].createElement(_statusPanel.UploadAnimation, {
          icon: provider && provider.icon
        })) : /*#__PURE__*/_react["default"].createElement(MapInfoPanel, {
          mapInfo: mapInfo,
          characterLimits: characterLimits,
          onChangeInput: this._onChangeInput
        })), providerError ? /*#__PURE__*/_react["default"].createElement(_statusPanel["default"], {
          isLoading: false,
          error: providerError,
          providerIcon: provider && provider.icon
        }) : null))));
      }
    }]);
    return SaveMapModal;
  }(_react.Component);

  (0, _defineProperty2["default"])(SaveMapModal, "propTypes", {
    exportImage: _propTypes["default"].object.isRequired,
    mapInfo: _propTypes["default"].object.isRequired,
    isProviderLoading: _propTypes["default"].bool.isRequired,
    thumbWidth: _propTypes["default"].number,
    thumbHeight: _propTypes["default"].number,
    characterLimits: _propTypes["default"].object,
    cloudProviders: _propTypes["default"].arrayOf(_propTypes["default"].object),
    currentProvider: _propTypes["default"].string,
    onSetMapInfo: _propTypes["default"].func.isRequired,
    onSetCloudProvider: _propTypes["default"].func.isRequired,
    onUpdateImageSetting: _propTypes["default"].func.isRequired
  });
  (0, _defineProperty2["default"])(SaveMapModal, "defaultProps", {
    characterLimits: _defaultSettings.MAP_INFO_CHARACTER,
    cloudProviders: [],
    currentProvider: null,
    providerError: null,
    isProviderLoading: false,
    onSetCloudProvider: nop,
    onUpdateImageSetting: nop
  });
  return SaveMapModal;
}

var _default = SaveMapModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9zYXZlLW1hcC1tb2RhbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTYXZlTWFwTW9kYWwiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIm5vcCIsIk1hcEluZm9QYW5lbCIsIm1hcEluZm8iLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwiY2hhcmFjdGVyTGltaXRzIiwib25DaGFuZ2VJbnB1dCIsImUiLCJkaXNwbGF5IiwicmVzaXplIiwibGVuZ3RoIiwiTUFQX0lORk9fQ0hBUkFDVEVSIiwiU2F2ZU1hcE1vZGFsRmFjdG9yeSIsIlNhdmVNYXBNb2RhbCIsImtleSIsInZhbHVlIiwidGFyZ2V0IiwicHJvcHMiLCJvblNldE1hcEluZm8iLCJleHBvcnRJbWFnZSIsImNsb3VkUHJvdmlkZXJzIiwiaXNQcm92aWRlckxvYWRpbmciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlckVycm9yIiwib25TZXRDbG91ZFByb3ZpZGVyIiwib25VcGRhdGVJbWFnZVNldHRpbmciLCJwcm92aWRlciIsImZpbmQiLCJwIiwibmFtZSIsIm1hcCIsImNsb3VkUHJvdmlkZXIiLCJCb29sZWFuIiwiZ2V0QWNjZXNzVG9rZW4iLCJnZXRNYW5hZ2VtZW50VXJsIiwibWFyZ2luIiwidGV4dERlY29yYXRpb24iLCJkaXNwbGF5TmFtZSIsIk1BUF9USFVNQk5BSUxfRElNRU5TSU9OIiwid2lkdGgiLCJpY29uIiwiX29uQ2hhbmdlSW5wdXQiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsInRodW1iV2lkdGgiLCJudW1iZXIiLCJ0aHVtYkhlaWdodCIsImFycmF5T2YiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FB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LENBQWVQLFVBVmxCO0FBV2pCcEIsSUFBQUEsb0JBQW9CLEVBQUVrQixzQkFBVVMsSUFBVixDQUFlUDtBQVhwQixHQUZRO0FBQUEsbUNBQ3ZCaEMsWUFEdUIsa0JBZ0JMO0FBQ3BCUixJQUFBQSxlQUFlLEVBQUVNLG1DQURHO0FBRXBCUyxJQUFBQSxjQUFjLEVBQUUsRUFGSTtBQUdwQkUsSUFBQUEsZUFBZSxFQUFFLElBSEc7QUFJcEJDLElBQUFBLGFBQWEsRUFBRSxJQUpLO0FBS3BCRixJQUFBQSxpQkFBaUIsRUFBRSxLQUxDO0FBTXBCRyxJQUFBQSxrQkFBa0IsRUFBRXhCLEdBTkE7QUFPcEJ5QixJQUFBQSxvQkFBb0IsRUFBRXpCO0FBUEYsR0FoQks7QUFvSTdCLFNBQU9hLFlBQVA7QUFDRDs7ZUFFY0QsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDbG91ZFRpbGUgZnJvbSAnLi9jbG91ZC10aWxlJztcbmltcG9ydCBJbWFnZU1vZGFsQ29udGFpbmVyIGZyb20gJy4vaW1hZ2UtbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCBQcm92aWRlck1vZGFsQ29udGFpbmVyIGZyb20gJy4vcHJvdmlkZXItbW9kYWwtY29udGFpbmVyJztcblxuaW1wb3J0IFN0YXR1c1BhbmVsLCB7VXBsb2FkQW5pbWF0aW9ufSBmcm9tICcuL3N0YXR1cy1wYW5lbCc7XG5cbmltcG9ydCB7TUFQX1RIVU1CTkFJTF9ESU1FTlNJT04sIE1BUF9JTkZPX0NIQVJBQ1RFUn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQge1xuICBTdHlsZWRNb2RhbENvbnRlbnQsXG4gIElucHV0TGlnaHQsXG4gIFRleHRBcmVhTGlnaHQsXG4gIFN0eWxlZEV4cG9ydFNlY3Rpb24sXG4gIFN0eWxlZE1vZGFsU2VjdGlvbixcbiAgU3R5bGVkTW9kYWxJbnB1dEZvb3Rub3RlXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJbWFnZVByZXZpZXcgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaW1hZ2UtcHJldmlldyc7XG5cbmNvbnN0IFN0eWxlZFNhdmVNYXBNb2RhbCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzYXZlLW1hcC1tb2RhbCdcbn0pYFxuICAuc2F2ZS1tYXAtbW9kYWwtY29udGVudCB7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgLmltYWdlLXByZXZpZXctcGFuZWwge1xuICAgIHdpZHRoOiAzMDBweDtcblxuICAgIC5pbWFnZS1wcmV2aWV3IHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hcC1pbmZvLXBhbmVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnNhdmUtbWFwLW1vZGFsLWRlc2NyaXB0aW9uIHtcbiAgICAubW9kYWwtc2VjdGlvbi1zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3Qgbm9wID0gKCkgPT4ge307XG5cbmV4cG9ydCBjb25zdCBNYXBJbmZvUGFuZWwgPSAoe1xuICBtYXBJbmZvID0ge2Rlc2NyaXB0aW9uOiAnJywgdGl0bGU6ICcnfSxcbiAgY2hhcmFjdGVyTGltaXRzLFxuICBvbkNoYW5nZUlucHV0XG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uIG1hcC1pbmZvLXBhbmVsXCI+XG4gICAgPFN0eWxlZE1vZGFsU2VjdGlvbiBjbGFzc05hbWU9XCJzYXZlLW1hcC1tb2RhbC1uYW1lXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj5OYW1lKjwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPElucHV0TGlnaHRcbiAgICAgICAgICBpZD1cIm1hcC10aXRsZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXttYXBJbmZvLnRpdGxlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlSW5wdXQoJ3RpdGxlJywgZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIG1hcCB0aXRsZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0eWxlZE1vZGFsU2VjdGlvbj5cbiAgICA8U3R5bGVkTW9kYWxTZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYXZlLW1hcC1tb2RhbC1kZXNjcmlwdGlvblwiIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi10aXRsZVwiPkRlc2NyaXB0aW9uPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi1zdWJ0aXRsZVwiPihvcHRpb25hbCk8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPFRleHRBcmVhTGlnaHRcbiAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgaWQ9XCJtYXAtZGVzY3JpcHRpb25cIlxuICAgICAgICAgIHN0eWxlPXt7cmVzaXplOiAnbm9uZSd9fVxuICAgICAgICAgIHZhbHVlPXttYXBJbmZvLmRlc2NyaXB0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlSW5wdXQoJ2Rlc2NyaXB0aW9uJywgZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIG1hcCBkZXNjcmlwdGlvblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxTdHlsZWRNb2RhbElucHV0Rm9vdG5vdGVcbiAgICAgICAgY2xhc3NOYW1lPVwic2F2ZS1tYXAtbW9kYWwtZGVzY3JpcHRpb25fX2Zvb3Rub3RlXCJcbiAgICAgICAgZXJyb3I9e1xuICAgICAgICAgIGNoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvbiAmJiBtYXBJbmZvLmRlc2NyaXB0aW9uLmxlbmd0aCA+IGNoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvblxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHttYXBJbmZvLmRlc2NyaXB0aW9uLmxlbmd0aH0ve2NoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvbiB8fCBNQVBfSU5GT19DSEFSQUNURVIuZGVzY3JpcHRpb259eycgJ31cbiAgICAgICAgY2hhcmFjdGVyc1xuICAgICAgPC9TdHlsZWRNb2RhbElucHV0Rm9vdG5vdGU+XG4gICAgPC9TdHlsZWRNb2RhbFNlY3Rpb24+XG4gIDwvZGl2PlxuKTtcblxuZnVuY3Rpb24gU2F2ZU1hcE1vZGFsRmFjdG9yeSgpIHtcbiAgY2xhc3MgU2F2ZU1hcE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZXhwb3J0SW1hZ2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcEluZm86IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgdGh1bWJXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHRodW1iSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgY2hhcmFjdGVyTGltaXRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgY2xvdWRQcm92aWRlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAgICAgY3VycmVudFByb3ZpZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgb25TZXRNYXBJbmZvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25TZXRDbG91ZFByb3ZpZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGNoYXJhY3RlckxpbWl0czogTUFQX0lORk9fQ0hBUkFDVEVSLFxuICAgICAgY2xvdWRQcm92aWRlcnM6IFtdLFxuICAgICAgY3VycmVudFByb3ZpZGVyOiBudWxsLFxuICAgICAgcHJvdmlkZXJFcnJvcjogbnVsbCxcbiAgICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcjogbm9wLFxuICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc6IG5vcFxuICAgIH07XG5cbiAgICBfb25DaGFuZ2VJbnB1dCA9IChrZXksIGUpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdGFyZ2V0OiB7dmFsdWV9XG4gICAgICB9ID0gZTtcbiAgICAgIHRoaXMucHJvcHMub25TZXRNYXBJbmZvKHtba2V5XTogdmFsdWV9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtYXBJbmZvLFxuICAgICAgICBleHBvcnRJbWFnZSxcbiAgICAgICAgY2hhcmFjdGVyTGltaXRzID0ge30sXG4gICAgICAgIGNsb3VkUHJvdmlkZXJzLFxuICAgICAgICBpc1Byb3ZpZGVyTG9hZGluZyxcbiAgICAgICAgY3VycmVudFByb3ZpZGVyLFxuICAgICAgICBwcm92aWRlckVycm9yLFxuICAgICAgICBvblNldENsb3VkUHJvdmlkZXIsXG4gICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gY3VycmVudFByb3ZpZGVyXG4gICAgICAgID8gY2xvdWRQcm92aWRlcnMuZmluZChwID0+IHAubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyKVxuICAgICAgICA6IG51bGw7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlck1vZGFsQ29udGFpbmVyXG4gICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXtvblNldENsb3VkUHJvdmlkZXJ9XG4gICAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxuICAgICAgICAgIGN1cnJlbnRQcm92aWRlcj17Y3VycmVudFByb3ZpZGVyfVxuICAgICAgICA+XG4gICAgICAgICAgPEltYWdlTW9kYWxDb250YWluZXJcbiAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlcj17Y3VycmVudFByb3ZpZGVyfVxuICAgICAgICAgICAgY2xvdWRQcm92aWRlcnM9e2Nsb3VkUHJvdmlkZXJzfVxuICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e29uVXBkYXRlSW1hZ2VTZXR0aW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdHlsZWRTYXZlTWFwTW9kYWw+XG4gICAgICAgICAgICAgIDxTdHlsZWRNb2RhbENvbnRlbnQgY2xhc3NOYW1lPVwic2F2ZS1tYXAtbW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uIGRpc2FibGVkPXtpc1Byb3ZpZGVyTG9hZGluZ30+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5DbG91ZCBzdG9yYWdlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Mb2dpbiBzYXZlIG1hcCB0byB5b3VyIHBlcnNvbmFsIGNsb3VkIHN0b3JhZ2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge2Nsb3VkUHJvdmlkZXJzLm1hcChjbG91ZFByb3ZpZGVyID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xvdWRUaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Nsb3VkUHJvdmlkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBvblNldENsb3VkUHJvdmlkZXIoY2xvdWRQcm92aWRlci5uYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17b25TZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvdWRQcm92aWRlcj17Y2xvdWRQcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2Nsb3VkUHJvdmlkZXIubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb25uZWN0ZWQ9e0Jvb2xlYW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXIuZ2V0QWNjZXNzVG9rZW4gJiYgY2xvdWRQcm92aWRlci5nZXRBY2Nlc3NUb2tlbigpXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgICAgICAgICAgICAgIHtwcm92aWRlciAmJiBwcm92aWRlci5nZXRNYW5hZ2VtZW50VXJsICYmIChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uIHN0eWxlPXt7bWFyZ2luOiAnMnB4IDAnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm92aWRlci5nZXRNYW5hZ2VtZW50VXJsKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJ319XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8geW91ciBLZXBsZXIuZ2wge3Byb3ZpZGVyLmRpc3BsYXlOYW1lfSBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBpbWFnZS1wcmV2aWV3LXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICBleHBvcnRJbWFnZT17ZXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e01BUF9USFVNQk5BSUxfRElNRU5TSU9OLndpZHRofVxuICAgICAgICAgICAgICAgICAgICAgIHNob3dEaW1lbnNpb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7aXNQcm92aWRlckxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uIG1hcC1zYXZpbmctYW5pbWF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZEFuaW1hdGlvbiBpY29uPXtwcm92aWRlciAmJiBwcm92aWRlci5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxNYXBJbmZvUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICBtYXBJbmZvPXttYXBJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckxpbWl0cz17Y2hhcmFjdGVyTGltaXRzfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlSW5wdXQ9e3RoaXMuX29uQ2hhbmdlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7cHJvdmlkZXJFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgIDxTdGF0dXNQYW5lbFxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17cHJvdmlkZXJFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJY29uPXtwcm92aWRlciAmJiBwcm92aWRlci5pY29ufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9TdHlsZWRNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICA8L1N0eWxlZFNhdmVNYXBNb2RhbD5cbiAgICAgICAgICA8L0ltYWdlTW9kYWxDb250YWluZXI+XG4gICAgICAgIDwvUHJvdmlkZXJNb2RhbENvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBTYXZlTWFwTW9kYWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmVNYXBNb2RhbEZhY3Rvcnk7XG4iXX0=