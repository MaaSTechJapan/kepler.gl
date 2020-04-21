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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9zYXZlLW1hcC1tb2RhbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTYXZlTWFwTW9kYWwiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIm5vcCIsIk1hcEluZm9QYW5lbCIsIm1hcEluZm8iLCJkZXNjcmlwdGlvbiIsInRpdGxlIiwiY2hhcmFjdGVyTGltaXRzIiwib25DaGFuZ2VJbnB1dCIsImUiLCJkaXNwbGF5IiwicmVzaXplIiwibGVuZ3RoIiwiTUFQX0lORk9fQ0hBUkFDVEVSIiwiU2F2ZU1hcE1vZGFsRmFjdG9yeSIsIlNhdmVNYXBNb2RhbCIsImtleSIsInZhbHVlIiwidGFyZ2V0IiwicHJvcHMiLCJvblNldE1hcEluZm8iLCJleHBvcnRJbWFnZSIsImNsb3VkUHJvdmlkZXJzIiwiaXNQcm92aWRlckxvYWRpbmciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlckVycm9yIiwib25TZXRDbG91ZFByb3ZpZGVyIiwib25VcGRhdGVJbWFnZVNldHRpbmciLCJwcm92aWRlciIsImZpbmQiLCJwIiwibmFtZSIsIm1hcCIsImNsb3VkUHJvdmlkZXIiLCJCb29sZWFuIiwiZ2V0QWNjZXNzVG9rZW4iLCJnZXRNYW5hZ2VtZW50VXJsIiwibWFyZ2luIiwidGV4dERlY29yYXRpb24iLCJkaXNwbGF5TmFtZSIsIk1BUF9USFVNQk5BSUxfRElNRU5TSU9OIiwid2lkdGgiLCJpY29uIiwiX29uQ2hhbmdlSW5wdXQiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsInRodW1iV2lkdGgiLCJudW1iZXIiLCJ0aHVtYkhlaWdodCIsImFycmF5T2YiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FB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LENBQWVQLFVBVmxCO0FBV2pCcEIsSUFBQUEsb0JBQW9CLEVBQUVrQixzQkFBVVMsSUFBVixDQUFlUDtBQVhwQixHQUZRO0FBQUEsbUNBQ3ZCaEMsWUFEdUIsa0JBZ0JMO0FBQ3BCUixJQUFBQSxlQUFlLEVBQUVNLG1DQURHO0FBRXBCUyxJQUFBQSxjQUFjLEVBQUUsRUFGSTtBQUdwQkUsSUFBQUEsZUFBZSxFQUFFLElBSEc7QUFJcEJDLElBQUFBLGFBQWEsRUFBRSxJQUpLO0FBS3BCRixJQUFBQSxpQkFBaUIsRUFBRSxLQUxDO0FBTXBCRyxJQUFBQSxrQkFBa0IsRUFBRXhCLEdBTkE7QUFPcEJ5QixJQUFBQSxvQkFBb0IsRUFBRXpCO0FBUEYsR0FoQks7QUFvSTdCLFNBQU9hLFlBQVA7QUFDRDs7ZUFFY0QsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBDbG91ZFRpbGUgZnJvbSAnLi9jbG91ZC10aWxlJztcclxuaW1wb3J0IEltYWdlTW9kYWxDb250YWluZXIgZnJvbSAnLi9pbWFnZS1tb2RhbC1jb250YWluZXInO1xyXG5pbXBvcnQgUHJvdmlkZXJNb2RhbENvbnRhaW5lciBmcm9tICcuL3Byb3ZpZGVyLW1vZGFsLWNvbnRhaW5lcic7XHJcblxyXG5pbXBvcnQgU3RhdHVzUGFuZWwsIHtVcGxvYWRBbmltYXRpb259IGZyb20gJy4vc3RhdHVzLXBhbmVsJztcclxuXHJcbmltcG9ydCB7TUFQX1RIVU1CTkFJTF9ESU1FTlNJT04sIE1BUF9JTkZPX0NIQVJBQ1RFUn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICBTdHlsZWRNb2RhbENvbnRlbnQsXHJcbiAgSW5wdXRMaWdodCxcclxuICBUZXh0QXJlYUxpZ2h0LFxyXG4gIFN0eWxlZEV4cG9ydFNlY3Rpb24sXHJcbiAgU3R5bGVkTW9kYWxTZWN0aW9uLFxyXG4gIFN0eWxlZE1vZGFsSW5wdXRGb290bm90ZVxyXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEltYWdlUHJldmlldyBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pbWFnZS1wcmV2aWV3JztcclxuXHJcbmNvbnN0IFN0eWxlZFNhdmVNYXBNb2RhbCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ3NhdmUtbWFwLW1vZGFsJ1xyXG59KWBcclxuICAuc2F2ZS1tYXAtbW9kYWwtY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmltYWdlLXByZXZpZXctcGFuZWwge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG5cclxuICAgIC5pbWFnZS1wcmV2aWV3IHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXAtaW5mby1wYW5lbCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLnNhdmUtbWFwLW1vZGFsLWRlc2NyaXB0aW9uIHtcclxuICAgIC5tb2RhbC1zZWN0aW9uLXN1YnRpdGxlIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBub3AgPSAoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBjb25zdCBNYXBJbmZvUGFuZWwgPSAoe1xyXG4gIG1hcEluZm8gPSB7ZGVzY3JpcHRpb246ICcnLCB0aXRsZTogJyd9LFxyXG4gIGNoYXJhY3RlckxpbWl0cyxcclxuICBvbkNoYW5nZUlucHV0XHJcbn0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvbiBtYXAtaW5mby1wYW5lbFwiPlxyXG4gICAgPFN0eWxlZE1vZGFsU2VjdGlvbiBjbGFzc05hbWU9XCJzYXZlLW1hcC1tb2RhbC1uYW1lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi10aXRsZVwiPk5hbWUqPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPElucHV0TGlnaHRcclxuICAgICAgICAgIGlkPVwibWFwLXRpdGxlXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXttYXBJbmZvLnRpdGxlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2VJbnB1dCgndGl0bGUnLCBlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBtYXAgdGl0bGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9TdHlsZWRNb2RhbFNlY3Rpb24+XHJcbiAgICA8U3R5bGVkTW9kYWxTZWN0aW9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhdmUtbWFwLW1vZGFsLWRlc2NyaXB0aW9uXCIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj5EZXNjcmlwdGlvbjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi1zdWJ0aXRsZVwiPihvcHRpb25hbCk8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFRleHRBcmVhTGlnaHRcclxuICAgICAgICAgIHJvd3M9XCIzXCJcclxuICAgICAgICAgIGlkPVwibWFwLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIHN0eWxlPXt7cmVzaXplOiAnbm9uZSd9fVxyXG4gICAgICAgICAgdmFsdWU9e21hcEluZm8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZUlucHV0KCdkZXNjcmlwdGlvbicsIGUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIG1hcCBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxTdHlsZWRNb2RhbElucHV0Rm9vdG5vdGVcclxuICAgICAgICBjbGFzc05hbWU9XCJzYXZlLW1hcC1tb2RhbC1kZXNjcmlwdGlvbl9fZm9vdG5vdGVcIlxyXG4gICAgICAgIGVycm9yPXtcclxuICAgICAgICAgIGNoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvbiAmJiBtYXBJbmZvLmRlc2NyaXB0aW9uLmxlbmd0aCA+IGNoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHttYXBJbmZvLmRlc2NyaXB0aW9uLmxlbmd0aH0ve2NoYXJhY3RlckxpbWl0cy5kZXNjcmlwdGlvbiB8fCBNQVBfSU5GT19DSEFSQUNURVIuZGVzY3JpcHRpb259eycgJ31cclxuICAgICAgICBjaGFyYWN0ZXJzXHJcbiAgICAgIDwvU3R5bGVkTW9kYWxJbnB1dEZvb3Rub3RlPlxyXG4gICAgPC9TdHlsZWRNb2RhbFNlY3Rpb24+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5mdW5jdGlvbiBTYXZlTWFwTW9kYWxGYWN0b3J5KCkge1xyXG4gIGNsYXNzIFNhdmVNYXBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICBleHBvcnRJbWFnZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBtYXBJbmZvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgICB0aHVtYldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICB0aHVtYkhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgY2hhcmFjdGVyTGltaXRzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBjbG91ZFByb3ZpZGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAgIGN1cnJlbnRQcm92aWRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgb25TZXRNYXBJbmZvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBvblNldENsb3VkUHJvdmlkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgIGNoYXJhY3RlckxpbWl0czogTUFQX0lORk9fQ0hBUkFDVEVSLFxyXG4gICAgICBjbG91ZFByb3ZpZGVyczogW10sXHJcbiAgICAgIGN1cnJlbnRQcm92aWRlcjogbnVsbCxcclxuICAgICAgcHJvdmlkZXJFcnJvcjogbnVsbCxcclxuICAgICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBvblNldENsb3VkUHJvdmlkZXI6IG5vcCxcclxuICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc6IG5vcFxyXG4gICAgfTtcclxuXHJcbiAgICBfb25DaGFuZ2VJbnB1dCA9IChrZXksIGUpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIHRhcmdldDoge3ZhbHVlfVxyXG4gICAgICB9ID0gZTtcclxuICAgICAgdGhpcy5wcm9wcy5vblNldE1hcEluZm8oe1trZXldOiB2YWx1ZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBtYXBJbmZvLFxyXG4gICAgICAgIGV4cG9ydEltYWdlLFxyXG4gICAgICAgIGNoYXJhY3RlckxpbWl0cyA9IHt9LFxyXG4gICAgICAgIGNsb3VkUHJvdmlkZXJzLFxyXG4gICAgICAgIGlzUHJvdmlkZXJMb2FkaW5nLFxyXG4gICAgICAgIGN1cnJlbnRQcm92aWRlcixcclxuICAgICAgICBwcm92aWRlckVycm9yLFxyXG4gICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcixcclxuICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZ1xyXG4gICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBjdXJyZW50UHJvdmlkZXJcclxuICAgICAgICA/IGNsb3VkUHJvdmlkZXJzLmZpbmQocCA9PiBwLm5hbWUgPT09IGN1cnJlbnRQcm92aWRlcilcclxuICAgICAgICA6IG51bGw7XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlck1vZGFsQ29udGFpbmVyXHJcbiAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e29uU2V0Q2xvdWRQcm92aWRlcn1cclxuICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXtjbG91ZFByb3ZpZGVyc31cclxuICAgICAgICAgIGN1cnJlbnRQcm92aWRlcj17Y3VycmVudFByb3ZpZGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbWFnZU1vZGFsQ29udGFpbmVyXHJcbiAgICAgICAgICAgIGN1cnJlbnRQcm92aWRlcj17Y3VycmVudFByb3ZpZGVyfVxyXG4gICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17Y2xvdWRQcm92aWRlcnN9XHJcbiAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXtvblVwZGF0ZUltYWdlU2V0dGluZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFN0eWxlZFNhdmVNYXBNb2RhbD5cclxuICAgICAgICAgICAgICA8U3R5bGVkTW9kYWxDb250ZW50IGNsYXNzTmFtZT1cInNhdmUtbWFwLW1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uIGRpc2FibGVkPXtpc1Byb3ZpZGVyTG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q2xvdWQgc3RvcmFnZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Mb2dpbiBzYXZlIG1hcCB0byB5b3VyIHBlcnNvbmFsIGNsb3VkIHN0b3JhZ2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2Nsb3VkUHJvdmlkZXJzLm1hcChjbG91ZFByb3ZpZGVyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxDbG91ZFRpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjbG91ZFByb3ZpZGVyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBvblNldENsb3VkUHJvdmlkZXIoY2xvdWRQcm92aWRlci5uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXtvblNldENsb3VkUHJvdmlkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXI9e2Nsb3VkUHJvdmlkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e2Nsb3VkUHJvdmlkZXIubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Nvbm5lY3RlZD17Qm9vbGVhbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVyLmdldEFjY2Vzc1Rva2VuICYmIGNsb3VkUHJvdmlkZXIuZ2V0QWNjZXNzVG9rZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZEV4cG9ydFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB7cHJvdmlkZXIgJiYgcHJvdmlkZXIuZ2V0TWFuYWdlbWVudFVybCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uIHN0eWxlPXt7bWFyZ2luOiAnMnB4IDAnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvdmlkZXIuZ2V0TWFuYWdlbWVudFVybCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyB0byB5b3VyIEtlcGxlci5nbCB7cHJvdmlkZXIuZGlzcGxheU5hbWV9IHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIGltYWdlLXByZXZpZXctcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VQcmV2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgICBleHBvcnRJbWFnZT17ZXhwb3J0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17TUFQX1RIVU1CTkFJTF9ESU1FTlNJT04ud2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG93RGltZW5zaW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAge2lzUHJvdmlkZXJMb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uIG1hcC1zYXZpbmctYW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkQW5pbWF0aW9uIGljb249e3Byb3ZpZGVyICYmIHByb3ZpZGVyLmljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcEluZm9QYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFwSW5mbz17bWFwSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckxpbWl0cz17Y2hhcmFjdGVyTGltaXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VJbnB1dD17dGhpcy5fb25DaGFuZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRFeHBvcnRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAge3Byb3ZpZGVyRXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxTdGF0dXNQYW5lbFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3Byb3ZpZGVyRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJY29uPXtwcm92aWRlciAmJiBwcm92aWRlci5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgPC9TdHlsZWRNb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkU2F2ZU1hcE1vZGFsPlxyXG4gICAgICAgICAgPC9JbWFnZU1vZGFsQ29udGFpbmVyPlxyXG4gICAgICAgIDwvUHJvdmlkZXJNb2RhbENvbnRhaW5lcj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIFNhdmVNYXBNb2RhbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2F2ZU1hcE1vZGFsRmFjdG9yeTtcclxuIl19