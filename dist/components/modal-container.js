"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _styledComponents = require("styled-components");

var _reactDom = require("react-dom");

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _modalDialog = _interopRequireDefault(require("./modals/modal-dialog"));

var _schemas = _interopRequireDefault(require("../schemas"));

var _exportUtils = require("../utils/export-utils");

var _mapInfoUtils = require("../utils/map-info-utils");

var _deleteDataModal = _interopRequireDefault(require("./modals/delete-data-modal"));

var _overwriteMapModal = _interopRequireDefault(require("./modals/overwrite-map-modal"));

var _dataTableModal = _interopRequireDefault(require("./modals/data-table-modal"));

var _loadDataModal = _interopRequireDefault(require("./modals/load-data-modal"));

var _exportImageModal = _interopRequireDefault(require("./modals/export-image-modal"));

var _exportDataModal = _interopRequireDefault(require("./modals/export-data-modal"));

var _exportMapModal = _interopRequireDefault(require("./modals/export-map-modal/export-map-modal"));

var _addMapStyleModal = _interopRequireDefault(require("./modals/add-map-style-modal"));

var _saveMapModal = _interopRequireDefault(require("./modals/save-map-modal"));

var _shareMapModal = _interopRequireDefault(require("./modals/share-map-modal"));

var _mediaBreakpoints = require("../styles/media-breakpoints");

var _defaultSettings = require("../constants/default-settings");

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n                width: ", "px;\n              "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n              ", ";\n              ", "\n            "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: 960px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 60px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 40%;\n  padding: 40px 40px 32px 40px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n    margin: 0 auto;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 80px;\n  padding: 32px 0 0 0;\n\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DataTableModalStyle = (0, _styledComponents.css)(_templateObject(), _mediaBreakpoints.media.portable(_templateObject2()), _mediaBreakpoints.media.palm(_templateObject3()));
var smallModalCss = (0, _styledComponents.css)(_templateObject4());
var LoadDataModalStyle = (0, _styledComponents.css)(_templateObject5());
var DefaultStyle = (0, _styledComponents.css)(_templateObject6());
ModalContainerFactory.deps = [_deleteDataModal["default"], _overwriteMapModal["default"], _dataTableModal["default"], _loadDataModal["default"], _exportImageModal["default"], _exportDataModal["default"], _exportMapModal["default"], _addMapStyleModal["default"], _modalDialog["default"], _saveMapModal["default"], _shareMapModal["default"]];

function ModalContainerFactory(DeleteDatasetModal, OverWriteMapModal, DataTableModal, LoadDataModal, ExportImageModal, ExportDataModal, ExportMapModal, AddMapStyleModal, ModalDialog, SaveMapModal, ShareMapModal) {
  var ModalWrapper = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ModalWrapper, _Component);

    var _super = _createSuper(ModalWrapper);

    function ModalWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, ModalWrapper);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cloudProviders", function (props) {
        return props.cloudProviders;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "providerWithStorage", (0, _reselect.createSelector)(_this.cloudProviders, function (cloudProviders) {
        return cloudProviders.filter(function (p) {
          return p.hasPrivateStorage();
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "providerWithShare", (0, _reselect.createSelector)(_this.cloudProviders, function (cloudProviders) {
        return cloudProviders.filter(function (p) {
          return p.hasSharingUrl();
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closeModal", function () {
        _this.props.uiStateActions.toggleModal(null);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deleteDataset", function (key) {
        _this.props.visStateActions.removeDataset(key);

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onAddCustomMapStyle", function () {
        _this.props.mapStyleActions.addCustomMapStyle();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onFileUpload", function (blob) {
        _this.props.visStateActions.loadFiles(blob);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportImage", function () {
        if (!_this.props.uiState.exportImage.exporting) {
          (0, _exportUtils.exportImage)(_this.props, _this.props.uiState.exportImage);

          _this.props.uiStateActions.cleanupExportImage();

          _this._closeModal();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportData", function () {
        (0, _exportUtils.exportData)(_this.props, _this.props.uiState.exportData);

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportMap", function () {
        var uiState = _this.props.uiState;
        var format = uiState.exportMap.format;
        (format === _defaultSettings.EXPORT_MAP_FORMATS.HTML ? _exportUtils.exportHtml : _exportUtils.exportJson)(_this.props, _this.props.uiState.exportMap[format] || {});

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_exportFileToCloud", function (_ref) {
        var provider = _ref.provider,
            isPublic = _ref.isPublic,
            overwrite = _ref.overwrite,
            closeModal = _ref.closeModal;
        var toSave = (0, _exportUtils.exportMap)(_this.props);

        _this.props.providerActions.exportFileToCloud({
          mapData: toSave,
          provider: provider,
          options: {
            isPublic: isPublic,
            overwrite: overwrite
          },
          closeModal: closeModal,
          onSuccess: _this.props.onExportToCloudSuccess,
          onError: _this.props.onExportToCloudError
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSaveMap", function () {
        var overwrite = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var currentProvider = _this.props.providerState.currentProvider;

        var provider = _this.props.cloudProviders.find(function (p) {
          return p.name === currentProvider;
        });

        _this._exportFileToCloud({
          provider: provider,
          isPublic: false,
          overwrite: overwrite,
          closeModal: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOverwriteMap", function () {
        _this._onSaveMap(true);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onShareMapUrl", function (provider) {
        _this._exportFileToCloud({
          provider: provider,
          isPublic: true,
          overwrite: false,
          closeModal: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCloseSaveMap", function () {
        _this.props.providerActions.resetProviderStatus();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onLoadCloudMap", function (payload) {
        _this.props.providerActions.loadCloudMap(_objectSpread({}, payload, {
          onSuccess: _this.props.onLoadCloudMapSuccess,
          onError: _this.props.onLoadCloudMapError
        }));
      });
      return _this;
    }

    (0, _createClass2["default"])(ModalWrapper, [{
      key: "render",

      /* eslint-disable complexity */
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            containerW = _this$props.containerW,
            containerH = _this$props.containerH,
            mapStyle = _this$props.mapStyle,
            mapState = _this$props.mapState,
            uiState = _this$props.uiState,
            visState = _this$props.visState,
            rootNode = _this$props.rootNode,
            visStateActions = _this$props.visStateActions,
            uiStateActions = _this$props.uiStateActions,
            providerState = _this$props.providerState;
        var currentModal = uiState.currentModal,
            datasetKeyToRemove = uiState.datasetKeyToRemove;
        var datasets = visState.datasets,
            layers = visState.layers,
            editingDataset = visState.editingDataset;
        var template = null;
        var modalProps = {};

        if (currentModal && currentModal.id && currentModal.template) {
          // if currentMdoal template is already provided
          // TODO: need to check whether template is valid
          template = /*#__PURE__*/_react["default"].createElement(currentModal.template, null);
          modalProps = currentModal.modalProps;
        } else {
          switch (currentModal) {
            case _defaultSettings.DATA_TABLE_ID:
              var width = containerW * 0.9;
              template = /*#__PURE__*/_react["default"].createElement(DataTableModal, {
                width: containerW * 0.9,
                height: containerH * 0.85,
                datasets: datasets,
                dataId: editingDataset,
                showDatasetTable: visStateActions.showDatasetTable
              }); // TODO: we need to make this width consistent with the css rule defined modal.js:32 max-width: 70vw

              modalProps.cssStyle = (0, _styledComponents.css)(_templateObject7(), DataTableModalStyle, _mediaBreakpoints.media.palm(_templateObject8(), width));
              break;

            case _defaultSettings.DELETE_DATA_ID:
              // validate options
              if (datasetKeyToRemove && datasets && datasets[datasetKeyToRemove]) {
                template = /*#__PURE__*/_react["default"].createElement(DeleteDatasetModal, {
                  dataset: datasets[datasetKeyToRemove],
                  layers: layers
                });
                modalProps = {
                  title: 'Delete Dataset',
                  cssStyle: smallModalCss,
                  footer: true,
                  onConfirm: function onConfirm() {
                    return _this2._deleteDataset(datasetKeyToRemove);
                  },
                  onCancel: this._closeModal,
                  confirmButton: {
                    negative: true,
                    large: true,
                    children: 'Delete'
                  }
                };
              }

              break;
            // in case we add a new case after this one

            case _defaultSettings.ADD_DATA_ID:
              template = /*#__PURE__*/_react["default"].createElement(LoadDataModal, (0, _extends2["default"])({}, providerState, {
                onClose: this._closeModal,
                onFileUpload: this._onFileUpload,
                onLoadCloudMap: this._onLoadCloudMap,
                cloudProviders: this.providerWithStorage(this.props),
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                getSavedMaps: this.props.providerActions.getSavedMaps,
                loadFiles: uiState.loadFiles
              }, uiState.loadFiles));
              modalProps = {
                title: 'Add Data To Map',
                cssStyle: LoadDataModalStyle,
                footer: false,
                onConfirm: this._closeModal
              };
              break;

            case _defaultSettings.EXPORT_IMAGE_ID:
              template = /*#__PURE__*/_react["default"].createElement(ExportImageModal, {
                exportImage: uiState.exportImage,
                mapW: containerW,
                mapH: containerH,
                onUpdateSetting: uiStateActions.setExportImageSetting
              });
              modalProps = {
                title: 'Export Image',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportImage,
                confirmButton: {
                  large: true,
                  disabled: uiState.exportImage.exporting,
                  children: 'Download'
                }
              };
              break;

            case _defaultSettings.EXPORT_DATA_ID:
              template = /*#__PURE__*/_react["default"].createElement(ExportDataModal, (0, _extends2["default"])({}, uiState.exportData, {
                datasets: datasets,
                applyCPUFilter: this.props.visStateActions.applyCPUFilter,
                onClose: this._closeModal,
                onChangeExportDataType: uiStateActions.setExportDataType,
                onChangeExportSelectedDataset: uiStateActions.setExportSelectedDataset,
                onChangeExportFiltered: uiStateActions.setExportFiltered
              }));
              modalProps = {
                title: 'Export Data',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportData,
                confirmButton: {
                  large: true,
                  children: 'Export'
                }
              };
              break;

            case _defaultSettings.EXPORT_MAP_ID:
              var keplerGlConfig = _schemas["default"].getConfigToSave({
                mapStyle: mapStyle,
                visState: visState,
                mapState: mapState,
                uiState: uiState
              });

              template = /*#__PURE__*/_react["default"].createElement(ExportMapModal, {
                config: keplerGlConfig,
                options: uiState.exportMap,
                onChangeExportMapFormat: uiStateActions.setExportMapFormat,
                onEditUserMapboxAccessToken: uiStateActions.setUserMapboxAccessToken,
                onChangeExportMapHTMLMode: uiStateActions.setExportHTMLMapMode
              });
              modalProps = {
                title: 'Export Map',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportMap,
                confirmButton: {
                  large: true,
                  children: 'Export'
                }
              };
              break;

            case _defaultSettings.ADD_MAP_STYLE_ID:
              template = /*#__PURE__*/_react["default"].createElement(AddMapStyleModal, {
                mapboxApiAccessToken: this.props.mapboxApiAccessToken,
                mapboxApiUrl: this.props.mapboxApiUrl,
                mapState: this.props.mapState,
                inputStyle: mapStyle.inputStyle,
                inputMapStyle: this.props.mapStyleActions.inputMapStyle,
                loadCustomMapStyle: this.props.mapStyleActions.loadCustomMapStyle
              });
              modalProps = {
                title: 'Add Custom Mapbox Style',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onAddCustomMapStyle,
                confirmButton: {
                  large: true,
                  disabled: !mapStyle.inputStyle.style,
                  children: 'Add Style'
                }
              };
              break;

            case _defaultSettings.SAVE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(SaveMapModal, (0, _extends2["default"])({}, providerState, {
                exportImage: uiState.exportImage,
                mapInfo: visState.mapInfo,
                onSetMapInfo: visStateActions.setMapInfo,
                onUpdateImageSetting: uiStateActions.setExportImageSetting,
                cloudProviders: this.providerWithStorage(this.props),
                onSetCloudProvider: this.props.providerActions.setCloudProvider
              }));
              modalProps = {
                title: 'Save Map',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: function onConfirm() {
                  return _this2._onSaveMap(false);
                },
                confirmButton: {
                  large: true,
                  disabled: uiState.exportImage.exporting || !(0, _mapInfoUtils.isValidMapInfo)(visState.mapInfo) || !providerState.currentProvider,
                  children: 'Save'
                }
              };
              break;

            case _defaultSettings.OVERWRITE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(OverWriteMapModal, (0, _extends2["default"])({}, providerState, {
                cloudProviders: this.props.cloudProviders,
                title: (0, _lodash["default"])(visState, ['mapInfo', 'title']),
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              }));
              modalProps = {
                title: 'Overwrite Existing File?',
                cssStyle: smallModalCss,
                footer: true,
                onConfirm: this._onOverwriteMap,
                onCancel: this._closeModal,
                confirmButton: {
                  large: true,
                  children: 'Yes',
                  disabled: uiState.exportImage.exporting || !(0, _mapInfoUtils.isValidMapInfo)(visState.mapInfo) || !providerState.currentProvider
                }
              };
              break;

            case _defaultSettings.SHARE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(ShareMapModal, (0, _extends2["default"])({}, providerState, {
                isReady: !uiState.exportImage.exporting,
                cloudProviders: this.providerWithShare(this.props),
                onExport: this._onShareMapUrl,
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              }));
              modalProps = {
                title: 'Share URL',
                onCancel: this._onCloseSaveMap
              };
              break;

            default:
              break;
          }
        }

        return this.props.rootNode ? /*#__PURE__*/_react["default"].createElement(ModalDialog, (0, _extends2["default"])({
          parentSelector: function parentSelector() {
            return (0, _reactDom.findDOMNode)(rootNode);
          },
          isOpen: Boolean(currentModal),
          onCancel: this._closeModal
        }, modalProps, {
          cssStyle: DefaultStyle.concat(modalProps.cssStyle || '')
        }), template) : null;
      }
      /* eslint-enable complexity */

    }]);
    return ModalWrapper;
  }(_react.Component);

  (0, _defineProperty2["default"])(ModalWrapper, "propTypes", {
    rootNode: _propTypes["default"].object,
    containerW: _propTypes["default"].number,
    containerH: _propTypes["default"].number,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapboxApiUrl: _propTypes["default"].string,
    mapState: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    uiState: _propTypes["default"].object.isRequired,
    visState: _propTypes["default"].object.isRequired,
    visStateActions: _propTypes["default"].object.isRequired,
    uiStateActions: _propTypes["default"].object.isRequired,
    mapStyleActions: _propTypes["default"].object.isRequired,
    onSaveToStorage: _propTypes["default"].func,
    cloudProviders: _propTypes["default"].arrayOf(_propTypes["default"].object)
  });
  return ModalWrapper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJEYXRhVGFibGVNb2RhbFN0eWxlIiwiY3NzIiwibWVkaWEiLCJwb3J0YWJsZSIsInBhbG0iLCJzbWFsbE1vZGFsQ3NzIiwiTG9hZERhdGFNb2RhbFN0eWxlIiwiRGVmYXVsdFN0eWxlIiwiTW9kYWxDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIkRlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnkiLCJPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnkiLCJEYXRhVGFibGVNb2RhbEZhY3RvcnkiLCJMb2FkRGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydEltYWdlTW9kYWxGYWN0b3J5IiwiRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydE1hcE1vZGFsRmFjdG9yeSIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IiwiTW9kYWxEaWFsb2dGYWN0b3J5IiwiU2F2ZU1hcE1vZGFsRmFjdG9yeSIsIlNoYXJlTWFwTW9kYWxGYWN0b3J5IiwiRGVsZXRlRGF0YXNldE1vZGFsIiwiT3ZlcldyaXRlTWFwTW9kYWwiLCJEYXRhVGFibGVNb2RhbCIsIkxvYWREYXRhTW9kYWwiLCJFeHBvcnRJbWFnZU1vZGFsIiwiRXhwb3J0RGF0YU1vZGFsIiwiRXhwb3J0TWFwTW9kYWwiLCJBZGRNYXBTdHlsZU1vZGFsIiwiTW9kYWxEaWFsb2ciLCJTYXZlTWFwTW9kYWwiLCJTaGFyZU1hcE1vZGFsIiwiTW9kYWxXcmFwcGVyIiwicHJvcHMiLCJjbG91ZFByb3ZpZGVycyIsImZpbHRlciIsInAiLCJoYXNQcml2YXRlU3RvcmFnZSIsImhhc1NoYXJpbmdVcmwiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZU1vZGFsIiwia2V5IiwidmlzU3RhdGVBY3Rpb25zIiwicmVtb3ZlRGF0YXNldCIsIl9jbG9zZU1vZGFsIiwibWFwU3R5bGVBY3Rpb25zIiwiYWRkQ3VzdG9tTWFwU3R5bGUiLCJibG9iIiwibG9hZEZpbGVzIiwidWlTdGF0ZSIsImV4cG9ydEltYWdlIiwiZXhwb3J0aW5nIiwiY2xlYW51cEV4cG9ydEltYWdlIiwiZXhwb3J0RGF0YSIsImZvcm1hdCIsImV4cG9ydE1hcCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJleHBvcnRIdG1sIiwiZXhwb3J0SnNvbiIsInByb3ZpZGVyIiwiaXNQdWJsaWMiLCJvdmVyd3JpdGUiLCJjbG9zZU1vZGFsIiwidG9TYXZlIiwicHJvdmlkZXJBY3Rpb25zIiwiZXhwb3J0RmlsZVRvQ2xvdWQiLCJtYXBEYXRhIiwib3B0aW9ucyIsIm9uU3VjY2VzcyIsIm9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3MiLCJvbkVycm9yIiwib25FeHBvcnRUb0Nsb3VkRXJyb3IiLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlclN0YXRlIiwiZmluZCIsIm5hbWUiLCJfZXhwb3J0RmlsZVRvQ2xvdWQiLCJfb25TYXZlTWFwIiwicmVzZXRQcm92aWRlclN0YXR1cyIsInBheWxvYWQiLCJsb2FkQ2xvdWRNYXAiLCJvbkxvYWRDbG91ZE1hcFN1Y2Nlc3MiLCJvbkxvYWRDbG91ZE1hcEVycm9yIiwiY29udGFpbmVyVyIsImNvbnRhaW5lckgiLCJtYXBTdHlsZSIsIm1hcFN0YXRlIiwidmlzU3RhdGUiLCJyb290Tm9kZSIsImN1cnJlbnRNb2RhbCIsImRhdGFzZXRLZXlUb1JlbW92ZSIsImRhdGFzZXRzIiwibGF5ZXJzIiwiZWRpdGluZ0RhdGFzZXQiLCJ0ZW1wbGF0ZSIsIm1vZGFsUHJvcHMiLCJpZCIsIkRBVEFfVEFCTEVfSUQiLCJ3aWR0aCIsInNob3dEYXRhc2V0VGFibGUiLCJjc3NTdHlsZSIsIkRFTEVURV9EQVRBX0lEIiwidGl0bGUiLCJmb290ZXIiLCJvbkNvbmZpcm0iLCJfZGVsZXRlRGF0YXNldCIsIm9uQ2FuY2VsIiwiY29uZmlybUJ1dHRvbiIsIm5lZ2F0aXZlIiwibGFyZ2UiLCJjaGlsZHJlbiIsIkFERF9EQVRBX0lEIiwiX29uRmlsZVVwbG9hZCIsIl9vbkxvYWRDbG91ZE1hcCIsInByb3ZpZGVyV2l0aFN0b3JhZ2UiLCJzZXRDbG91ZFByb3ZpZGVyIiwiZ2V0U2F2ZWRNYXBzIiwiRVhQT1JUX0lNQUdFX0lEIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nIiwiX29uRXhwb3J0SW1hZ2UiLCJkaXNhYmxlZCIsIkVYUE9SVF9EQVRBX0lEIiwiYXBwbHlDUFVGaWx0ZXIiLCJzZXRFeHBvcnREYXRhVHlwZSIsInNldEV4cG9ydFNlbGVjdGVkRGF0YXNldCIsInNldEV4cG9ydEZpbHRlcmVkIiwiX29uRXhwb3J0RGF0YSIsIkVYUE9SVF9NQVBfSUQiLCJrZXBsZXJHbENvbmZpZyIsIktlcGxlckdsU2NoZW1hIiwiZ2V0Q29uZmlnVG9TYXZlIiwic2V0RXhwb3J0TWFwRm9ybWF0Iiwic2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuIiwic2V0RXhwb3J0SFRNTE1hcE1vZGUiLCJfb25FeHBvcnRNYXAiLCJBRERfTUFQX1NUWUxFX0lEIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJtYXBib3hBcGlVcmwiLCJpbnB1dFN0eWxlIiwiaW5wdXRNYXBTdHlsZSIsImxvYWRDdXN0b21NYXBTdHlsZSIsIl9vbkFkZEN1c3RvbU1hcFN0eWxlIiwic3R5bGUiLCJTQVZFX01BUF9JRCIsIm1hcEluZm8iLCJzZXRNYXBJbmZvIiwiT1ZFUldSSVRFX01BUF9JRCIsIl9vbk92ZXJ3cml0ZU1hcCIsIlNIQVJFX01BUF9JRCIsInByb3ZpZGVyV2l0aFNoYXJlIiwiX29uU2hhcmVNYXBVcmwiLCJfb25DbG9zZVNhdmVNYXAiLCJCb29sZWFuIiwiY29uY2F0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwibnVtYmVyIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uU2F2ZVRvU3RvcmFnZSIsImZ1bmMiLCJhcnJheU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFD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Q0FBaUJDLFVBSnRCO0FBS2pCdEIsSUFBQUEsWUFBWSxFQUFFa0Isc0JBQVVHLE1BTFA7QUFNakJ4RSxJQUFBQSxRQUFRLEVBQUVxRSxzQkFBVUMsTUFBVixDQUFpQkcsVUFOVjtBQU9qQjFFLElBQUFBLFFBQVEsRUFBRXNFLHNCQUFVQyxNQUFWLENBQWlCRyxVQVBWO0FBUWpCL0csSUFBQUEsT0FBTyxFQUFFMkcsc0JBQVVDLE1BQVYsQ0FBaUJHLFVBUlQ7QUFTakJ4RSxJQUFBQSxRQUFRLEVBQUVvRSxzQkFBVUMsTUFBVixDQUFpQkcsVUFUVjtBQVVqQnRILElBQUFBLGVBQWUsRUFBRWtILHNCQUFVQyxNQUFWLENBQWlCRyxVQVZqQjtBQVdqQnpILElBQUFBLGNBQWMsRUFBRXFILHNCQUFVQyxNQUFWLENBQWlCRyxVQVhoQjtBQVlqQm5ILElBQUFBLGVBQWUsRUFBRStHLHNCQUFVQyxNQUFWLENBQWlCRyxVQVpqQjtBQWFqQkMsSUFBQUEsZUFBZSxFQUFFTCxzQkFBVU0sSUFiVjtBQWNqQmhJLElBQUFBLGNBQWMsRUFBRTBILHNCQUFVTyxPQUFWLENBQWtCUCxzQkFBVUMsTUFBNUI7QUFkQyxHQUZyQjtBQWtZQSxTQUFPN0gsWUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7ZmluZERPTU5vZGV9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcclxuXHJcbmltcG9ydCBNb2RhbERpYWxvZ0ZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvbW9kYWwtZGlhbG9nJztcclxuaW1wb3J0IEtlcGxlckdsU2NoZW1hIGZyb20gJ3NjaGVtYXMnO1xyXG5pbXBvcnQge2V4cG9ydEpzb24sIGV4cG9ydEh0bWwsIGV4cG9ydERhdGEsIGV4cG9ydEltYWdlLCBleHBvcnRNYXB9IGZyb20gJ3V0aWxzL2V4cG9ydC11dGlscyc7XHJcbmltcG9ydCB7aXNWYWxpZE1hcEluZm99IGZyb20gJ3V0aWxzL21hcC1pbmZvLXV0aWxzJztcclxuXHJcbi8vIG1vZGFsc1xyXG5pbXBvcnQgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9kZWxldGUtZGF0YS1tb2RhbCc7XHJcbmltcG9ydCBPdmVyV3JpdGVNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvb3ZlcndyaXRlLW1hcC1tb2RhbCc7XHJcbmltcG9ydCBEYXRhVGFibGVNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZGF0YS10YWJsZS1tb2RhbCc7XHJcbmltcG9ydCBMb2FkRGF0YU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9sb2FkLWRhdGEtbW9kYWwnO1xyXG5pbXBvcnQgRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LWltYWdlLW1vZGFsJztcclxuaW1wb3J0IEV4cG9ydERhdGFNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LWRhdGEtbW9kYWwnO1xyXG5pbXBvcnQgRXhwb3J0TWFwTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2V4cG9ydC1tYXAtbW9kYWwvZXhwb3J0LW1hcC1tb2RhbCc7XHJcbmltcG9ydCBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9hZGQtbWFwLXN0eWxlLW1vZGFsJztcclxuaW1wb3J0IFNhdmVNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvc2F2ZS1tYXAtbW9kYWwnO1xyXG5pbXBvcnQgU2hhcmVNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvc2hhcmUtbWFwLW1vZGFsJztcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbmltcG9ydCB7bWVkaWF9IGZyb20gJ3N0eWxlcy9tZWRpYS1icmVha3BvaW50cyc7XHJcblxyXG4vLyBUZW1wbGF0ZVxyXG5pbXBvcnQge1xyXG4gIEFERF9EQVRBX0lELFxyXG4gIERBVEFfVEFCTEVfSUQsXHJcbiAgREVMRVRFX0RBVEFfSUQsXHJcbiAgRVhQT1JUX0RBVEFfSUQsXHJcbiAgRVhQT1JUX0lNQUdFX0lELFxyXG4gIEVYUE9SVF9NQVBfSUQsXHJcbiAgQUREX01BUF9TVFlMRV9JRCxcclxuICBTQVZFX01BUF9JRCxcclxuICBTSEFSRV9NQVBfSUQsXHJcbiAgT1ZFUldSSVRFX01BUF9JRFxyXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHtFWFBPUlRfTUFQX0ZPUk1BVFN9IGZyb20gJy4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmNvbnN0IERhdGFUYWJsZU1vZGFsU3R5bGUgPSBjc3NgXHJcbiAgdG9wOiA4MHB4O1xyXG4gIHBhZGRpbmc6IDMycHggMCAwIDA7XHJcblxyXG4gICR7bWVkaWEucG9ydGFibGVgXHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIGB9XHJcblxyXG4gICR7bWVkaWEucGFsbWBcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICBgfVxyXG5gO1xyXG5jb25zdCBzbWFsbE1vZGFsQ3NzID0gY3NzYFxyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZzogNDBweCA0MHB4IDMycHggNDBweDtcclxuYDtcclxuXHJcbmNvbnN0IExvYWREYXRhTW9kYWxTdHlsZSA9IGNzc2BcclxuICB0b3A6IDYwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBEZWZhdWx0U3R5bGUgPSBjc3NgXHJcbiAgbWF4LXdpZHRoOiA5NjBweDtcclxuYDtcclxuXHJcbk1vZGFsQ29udGFpbmVyRmFjdG9yeS5kZXBzID0gW1xyXG4gIERlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnksXHJcbiAgT3ZlcldyaXRlTWFwTW9kYWxGYWN0b3J5LFxyXG4gIERhdGFUYWJsZU1vZGFsRmFjdG9yeSxcclxuICBMb2FkRGF0YU1vZGFsRmFjdG9yeSxcclxuICBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSxcclxuICBFeHBvcnREYXRhTW9kYWxGYWN0b3J5LFxyXG4gIEV4cG9ydE1hcE1vZGFsRmFjdG9yeSxcclxuICBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeSxcclxuICBNb2RhbERpYWxvZ0ZhY3RvcnksXHJcbiAgU2F2ZU1hcE1vZGFsRmFjdG9yeSxcclxuICBTaGFyZU1hcE1vZGFsRmFjdG9yeVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWxDb250YWluZXJGYWN0b3J5KFxyXG4gIERlbGV0ZURhdGFzZXRNb2RhbCxcclxuICBPdmVyV3JpdGVNYXBNb2RhbCxcclxuICBEYXRhVGFibGVNb2RhbCxcclxuICBMb2FkRGF0YU1vZGFsLFxyXG4gIEV4cG9ydEltYWdlTW9kYWwsXHJcbiAgRXhwb3J0RGF0YU1vZGFsLFxyXG4gIEV4cG9ydE1hcE1vZGFsLFxyXG4gIEFkZE1hcFN0eWxlTW9kYWwsXHJcbiAgTW9kYWxEaWFsb2csXHJcbiAgU2F2ZU1hcE1vZGFsLFxyXG4gIFNoYXJlTWFwTW9kYWxcclxuKSB7XHJcbiAgY2xhc3MgTW9kYWxXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIHJvb3ROb2RlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgICBjb250YWluZXJXOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBjb250YWluZXJIOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBtYXBib3hBcGlVcmw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIG1hcFN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIG1hcFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIHVpU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgdmlzU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgdmlzU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIHVpU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgICAgIG1hcFN0eWxlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICBvblNhdmVUb1N0b3JhZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgICBjbG91ZFByb3ZpZGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdClcclxuICAgIH07XHJcbiAgICBjbG91ZFByb3ZpZGVycyA9IHByb3BzID0+IHByb3BzLmNsb3VkUHJvdmlkZXJzO1xyXG4gICAgcHJvdmlkZXJXaXRoU3RvcmFnZSA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuY2xvdWRQcm92aWRlcnMsIGNsb3VkUHJvdmlkZXJzID0+XHJcbiAgICAgIGNsb3VkUHJvdmlkZXJzLmZpbHRlcihwID0+IHAuaGFzUHJpdmF0ZVN0b3JhZ2UoKSlcclxuICAgICk7XHJcbiAgICBwcm92aWRlcldpdGhTaGFyZSA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuY2xvdWRQcm92aWRlcnMsIGNsb3VkUHJvdmlkZXJzID0+XHJcbiAgICAgIGNsb3VkUHJvdmlkZXJzLmZpbHRlcihwID0+IHAuaGFzU2hhcmluZ1VybCgpKVxyXG4gICAgKTtcclxuICAgIF9jbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKG51bGwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfZGVsZXRlRGF0YXNldCA9IGtleSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnJlbW92ZURhdGFzZXQoa2V5KTtcclxuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25BZGRDdXN0b21NYXBTdHlsZSA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMuYWRkQ3VzdG9tTWFwU3R5bGUoKTtcclxuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25GaWxlVXBsb2FkID0gYmxvYiA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLmxvYWRGaWxlcyhibG9iKTtcclxuICAgIH07XHJcblxyXG4gICAgX29uRXhwb3J0SW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5wcm9wcy51aVN0YXRlLmV4cG9ydEltYWdlLmV4cG9ydGluZykge1xyXG4gICAgICAgIGV4cG9ydEltYWdlKHRoaXMucHJvcHMsIHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRJbWFnZSk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy5jbGVhbnVwRXhwb3J0SW1hZ2UoKTtcclxuICAgICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgX29uRXhwb3J0RGF0YSA9ICgpID0+IHtcclxuICAgICAgZXhwb3J0RGF0YSh0aGlzLnByb3BzLCB0aGlzLnByb3BzLnVpU3RhdGUuZXhwb3J0RGF0YSk7XHJcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcclxuICAgIH07XHJcblxyXG4gICAgX29uRXhwb3J0TWFwID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB7dWlTdGF0ZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7Zm9ybWF0fSA9IHVpU3RhdGUuZXhwb3J0TWFwO1xyXG4gICAgICAoZm9ybWF0ID09PSBFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTCA/IGV4cG9ydEh0bWwgOiBleHBvcnRKc29uKShcclxuICAgICAgICB0aGlzLnByb3BzLFxyXG4gICAgICAgIHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRNYXBbZm9ybWF0XSB8fCB7fVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9leHBvcnRGaWxlVG9DbG91ZCA9ICh7cHJvdmlkZXIsIGlzUHVibGljLCBvdmVyd3JpdGUsIGNsb3NlTW9kYWx9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRvU2F2ZSA9IGV4cG9ydE1hcCh0aGlzLnByb3BzKTtcclxuXHJcbiAgICAgIHRoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLmV4cG9ydEZpbGVUb0Nsb3VkKHtcclxuICAgICAgICBtYXBEYXRhOiB0b1NhdmUsXHJcbiAgICAgICAgcHJvdmlkZXIsXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgaXNQdWJsaWMsXHJcbiAgICAgICAgICBvdmVyd3JpdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlTW9kYWwsXHJcbiAgICAgICAgb25TdWNjZXNzOiB0aGlzLnByb3BzLm9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3MsXHJcbiAgICAgICAgb25FcnJvcjogdGhpcy5wcm9wcy5vbkV4cG9ydFRvQ2xvdWRFcnJvclxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgX29uU2F2ZU1hcCA9IChvdmVyd3JpdGUgPSBmYWxzZSkgPT4ge1xyXG4gICAgICBjb25zdCB7Y3VycmVudFByb3ZpZGVyfSA9IHRoaXMucHJvcHMucHJvdmlkZXJTdGF0ZTtcclxuICAgICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLnByb3BzLmNsb3VkUHJvdmlkZXJzLmZpbmQocCA9PiBwLm5hbWUgPT09IGN1cnJlbnRQcm92aWRlcik7XHJcbiAgICAgIHRoaXMuX2V4cG9ydEZpbGVUb0Nsb3VkKHtcclxuICAgICAgICBwcm92aWRlcixcclxuICAgICAgICBpc1B1YmxpYzogZmFsc2UsXHJcbiAgICAgICAgb3ZlcndyaXRlLFxyXG4gICAgICAgIGNsb3NlTW9kYWw6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIF9vbk92ZXJ3cml0ZU1hcCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5fb25TYXZlTWFwKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBfb25TaGFyZU1hcFVybCA9IHByb3ZpZGVyID0+IHtcclxuICAgICAgdGhpcy5fZXhwb3J0RmlsZVRvQ2xvdWQoe3Byb3ZpZGVyLCBpc1B1YmxpYzogdHJ1ZSwgb3ZlcndyaXRlOiBmYWxzZSwgY2xvc2VNb2RhbDogZmFsc2V9KTtcclxuICAgIH07XHJcblxyXG4gICAgX29uQ2xvc2VTYXZlTWFwID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5yZXNldFByb3ZpZGVyU3RhdHVzKCk7XHJcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcclxuICAgIH07XHJcblxyXG4gICAgX29uTG9hZENsb3VkTWFwID0gcGF5bG9hZCA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLmxvYWRDbG91ZE1hcCh7XHJcbiAgICAgICAgLi4ucGF5bG9hZCxcclxuICAgICAgICBvblN1Y2Nlc3M6IHRoaXMucHJvcHMub25Mb2FkQ2xvdWRNYXBTdWNjZXNzLFxyXG4gICAgICAgIG9uRXJyb3I6IHRoaXMucHJvcHMub25Mb2FkQ2xvdWRNYXBFcnJvclxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgY29udGFpbmVyVyxcclxuICAgICAgICBjb250YWluZXJILFxyXG4gICAgICAgIG1hcFN0eWxlLFxyXG4gICAgICAgIG1hcFN0YXRlLFxyXG4gICAgICAgIHVpU3RhdGUsXHJcbiAgICAgICAgdmlzU3RhdGUsXHJcbiAgICAgICAgcm9vdE5vZGUsXHJcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxyXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxyXG4gICAgICAgIHByb3ZpZGVyU3RhdGVcclxuICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBjb25zdCB7Y3VycmVudE1vZGFsLCBkYXRhc2V0S2V5VG9SZW1vdmV9ID0gdWlTdGF0ZTtcclxuICAgICAgY29uc3Qge2RhdGFzZXRzLCBsYXllcnMsIGVkaXRpbmdEYXRhc2V0fSA9IHZpc1N0YXRlO1xyXG5cclxuICAgICAgbGV0IHRlbXBsYXRlID0gbnVsbDtcclxuICAgICAgbGV0IG1vZGFsUHJvcHMgPSB7fTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50TW9kYWwgJiYgY3VycmVudE1vZGFsLmlkICYmIGN1cnJlbnRNb2RhbC50ZW1wbGF0ZSkge1xyXG4gICAgICAgIC8vIGlmIGN1cnJlbnRNZG9hbCB0ZW1wbGF0ZSBpcyBhbHJlYWR5IHByb3ZpZGVkXHJcbiAgICAgICAgLy8gVE9ETzogbmVlZCB0byBjaGVjayB3aGV0aGVyIHRlbXBsYXRlIGlzIHZhbGlkXHJcbiAgICAgICAgdGVtcGxhdGUgPSA8Y3VycmVudE1vZGFsLnRlbXBsYXRlIC8+O1xyXG4gICAgICAgIG1vZGFsUHJvcHMgPSBjdXJyZW50TW9kYWwubW9kYWxQcm9wcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRNb2RhbCkge1xyXG4gICAgICAgICAgY2FzZSBEQVRBX1RBQkxFX0lEOlxyXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lclcgKiAwLjk7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxyXG4gICAgICAgICAgICAgIDxEYXRhVGFibGVNb2RhbFxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e2NvbnRhaW5lclcgKiAwLjl9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2NvbnRhaW5lckggKiAwLjg1fVxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICAgICAgZGF0YUlkPXtlZGl0aW5nRGF0YXNldH1cclxuICAgICAgICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3Zpc1N0YXRlQWN0aW9ucy5zaG93RGF0YXNldFRhYmxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiB3ZSBuZWVkIHRvIG1ha2UgdGhpcyB3aWR0aCBjb25zaXN0ZW50IHdpdGggdGhlIGNzcyBydWxlIGRlZmluZWQgbW9kYWwuanM6MzIgbWF4LXdpZHRoOiA3MHZ3XHJcbiAgICAgICAgICAgIG1vZGFsUHJvcHMuY3NzU3R5bGUgPSBjc3NgXHJcbiAgICAgICAgICAgICAgJHtEYXRhVGFibGVNb2RhbFN0eWxlfTtcclxuICAgICAgICAgICAgICAke21lZGlhLnBhbG1gXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcclxuICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgREVMRVRFX0RBVEFfSUQ6XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIG9wdGlvbnNcclxuICAgICAgICAgICAgaWYgKGRhdGFzZXRLZXlUb1JlbW92ZSAmJiBkYXRhc2V0cyAmJiBkYXRhc2V0c1tkYXRhc2V0S2V5VG9SZW1vdmVdKSB7XHJcbiAgICAgICAgICAgICAgdGVtcGxhdGUgPSAoXHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlRGF0YXNldE1vZGFsIGRhdGFzZXQ9e2RhdGFzZXRzW2RhdGFzZXRLZXlUb1JlbW92ZV19IGxheWVycz17bGF5ZXJzfSAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlIERhdGFzZXQnLFxyXG4gICAgICAgICAgICAgICAgY3NzU3R5bGU6IHNtYWxsTW9kYWxDc3MsXHJcbiAgICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMuX2RlbGV0ZURhdGFzZXQoZGF0YXNldEtleVRvUmVtb3ZlKSxcclxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgICBuZWdhdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnRGVsZXRlJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7IC8vIGluIGNhc2Ugd2UgYWRkIGEgbmV3IGNhc2UgYWZ0ZXIgdGhpcyBvbmVcclxuICAgICAgICAgIGNhc2UgQUREX0RBVEFfSUQ6XHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxyXG4gICAgICAgICAgICAgIDxMb2FkRGF0YU1vZGFsXHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZXJTdGF0ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuX2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICBvbkZpbGVVcGxvYWQ9e3RoaXMuX29uRmlsZVVwbG9hZH1cclxuICAgICAgICAgICAgICAgIG9uTG9hZENsb3VkTWFwPXt0aGlzLl9vbkxvYWRDbG91ZE1hcH1cclxuICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXt0aGlzLnByb3ZpZGVyV2l0aFN0b3JhZ2UodGhpcy5wcm9wcyl9XHJcbiAgICAgICAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e3RoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLnNldENsb3VkUHJvdmlkZXJ9XHJcbiAgICAgICAgICAgICAgICBnZXRTYXZlZE1hcHM9e3RoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLmdldFNhdmVkTWFwc31cclxuICAgICAgICAgICAgICAgIGxvYWRGaWxlcz17dWlTdGF0ZS5sb2FkRmlsZXN9XHJcbiAgICAgICAgICAgICAgICB7Li4udWlTdGF0ZS5sb2FkRmlsZXN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ0FkZCBEYXRhIFRvIE1hcCcsXHJcbiAgICAgICAgICAgICAgY3NzU3R5bGU6IExvYWREYXRhTW9kYWxTdHlsZSxcclxuICAgICAgICAgICAgICBmb290ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fY2xvc2VNb2RhbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRVhQT1JUX0lNQUdFX0lEOlxyXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcclxuICAgICAgICAgICAgICA8RXhwb3J0SW1hZ2VNb2RhbFxyXG4gICAgICAgICAgICAgICAgZXhwb3J0SW1hZ2U9e3VpU3RhdGUuZXhwb3J0SW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBtYXBXPXtjb250YWluZXJXfVxyXG4gICAgICAgICAgICAgICAgbWFwSD17Y29udGFpbmVySH1cclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlU2V0dGluZz17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdFeHBvcnQgSW1hZ2UnLFxyXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcclxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0SW1hZ2UsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdWlTdGF0ZS5leHBvcnRJbWFnZS5leHBvcnRpbmcsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ0Rvd25sb2FkJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIEVYUE9SVF9EQVRBX0lEOlxyXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcclxuICAgICAgICAgICAgICA8RXhwb3J0RGF0YU1vZGFsXHJcbiAgICAgICAgICAgICAgICB7Li4udWlTdGF0ZS5leHBvcnREYXRhfVxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxyXG4gICAgICAgICAgICAgICAgYXBwbHlDUFVGaWx0ZXI9e3RoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLmFwcGx5Q1BVRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5fY2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0RGF0YVR5cGU9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydERhdGFUeXBlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnRTZWxlY3RlZERhdGFzZXQ9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydFNlbGVjdGVkRGF0YXNldH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0RmlsdGVyZWQ9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEZpbHRlcmVkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICdFeHBvcnQgRGF0YScsXHJcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxyXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnREYXRhLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdFeHBvcnQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgRVhQT1JUX01BUF9JRDpcclxuICAgICAgICAgICAgY29uc3Qga2VwbGVyR2xDb25maWcgPSBLZXBsZXJHbFNjaGVtYS5nZXRDb25maWdUb1NhdmUoe1xyXG4gICAgICAgICAgICAgIG1hcFN0eWxlLFxyXG4gICAgICAgICAgICAgIHZpc1N0YXRlLFxyXG4gICAgICAgICAgICAgIG1hcFN0YXRlLFxyXG4gICAgICAgICAgICAgIHVpU3RhdGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxyXG4gICAgICAgICAgICAgIDxFeHBvcnRNYXBNb2RhbFxyXG4gICAgICAgICAgICAgICAgY29uZmlnPXtrZXBsZXJHbENvbmZpZ31cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3VpU3RhdGUuZXhwb3J0TWFwfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnRNYXBGb3JtYXQ9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydE1hcEZvcm1hdH1cclxuICAgICAgICAgICAgICAgIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbj17dWlTdGF0ZUFjdGlvbnMuc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZT17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SFRNTE1hcE1vZGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ0V4cG9ydCBNYXAnLFxyXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcclxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0TWFwLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdFeHBvcnQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgQUREX01BUF9TVFlMRV9JRDpcclxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXHJcbiAgICAgICAgICAgICAgPEFkZE1hcFN0eWxlTW9kYWxcclxuICAgICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXt0aGlzLnByb3BzLm1hcGJveEFwaUFjY2Vzc1Rva2VufVxyXG4gICAgICAgICAgICAgICAgbWFwYm94QXBpVXJsPXt0aGlzLnByb3BzLm1hcGJveEFwaVVybH1cclxuICAgICAgICAgICAgICAgIG1hcFN0YXRlPXt0aGlzLnByb3BzLm1hcFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgaW5wdXRTdHlsZT17bWFwU3R5bGUuaW5wdXRTdHlsZX1cclxuICAgICAgICAgICAgICAgIGlucHV0TWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmlucHV0TWFwU3R5bGV9XHJcbiAgICAgICAgICAgICAgICBsb2FkQ3VzdG9tTWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmxvYWRDdXN0b21NYXBTdHlsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnQWRkIEN1c3RvbSBNYXBib3ggU3R5bGUnLFxyXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcclxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uQWRkQ3VzdG9tTWFwU3R5bGUsXHJcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIW1hcFN0eWxlLmlucHV0U3R5bGUuc3R5bGUsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ0FkZCBTdHlsZSdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBTQVZFX01BUF9JRDpcclxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXHJcbiAgICAgICAgICAgICAgPFNhdmVNYXBNb2RhbFxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XHJcbiAgICAgICAgICAgICAgICBleHBvcnRJbWFnZT17dWlTdGF0ZS5leHBvcnRJbWFnZX1cclxuICAgICAgICAgICAgICAgIG1hcEluZm89e3Zpc1N0YXRlLm1hcEluZm99XHJcbiAgICAgICAgICAgICAgICBvblNldE1hcEluZm89e3Zpc1N0YXRlQWN0aW9ucy5zZXRNYXBJbmZvfVxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEltYWdlU2V0dGluZ31cclxuICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXt0aGlzLnByb3ZpZGVyV2l0aFN0b3JhZ2UodGhpcy5wcm9wcyl9XHJcbiAgICAgICAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e3RoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLnNldENsb3VkUHJvdmlkZXJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ1NhdmUgTWFwJyxcclxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXHJcbiAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB0aGlzLl9vblNhdmVNYXAoZmFsc2UpLFxyXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcclxuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6XHJcbiAgICAgICAgICAgICAgICAgIHVpU3RhdGUuZXhwb3J0SW1hZ2UuZXhwb3J0aW5nIHx8XHJcbiAgICAgICAgICAgICAgICAgICFpc1ZhbGlkTWFwSW5mbyh2aXNTdGF0ZS5tYXBJbmZvKSB8fFxyXG4gICAgICAgICAgICAgICAgICAhcHJvdmlkZXJTdGF0ZS5jdXJyZW50UHJvdmlkZXIsXHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ1NhdmUnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgT1ZFUldSSVRFX01BUF9JRDpcclxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXHJcbiAgICAgICAgICAgICAgPE92ZXJXcml0ZU1hcE1vZGFsXHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZXJTdGF0ZX1cclxuICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXt0aGlzLnByb3BzLmNsb3VkUHJvdmlkZXJzfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2dldCh2aXNTdGF0ZSwgWydtYXBJbmZvJywgJ3RpdGxlJ10pfVxyXG4gICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5zZXRDbG91ZFByb3ZpZGVyfVxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEltYWdlU2V0dGluZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnT3ZlcndyaXRlIEV4aXN0aW5nIEZpbGU/JyxcclxuICAgICAgICAgICAgICBjc3NTdHlsZTogc21hbGxNb2RhbENzcyxcclxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgb25Db25maXJtOiB0aGlzLl9vbk92ZXJ3cml0ZU1hcCxcclxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcclxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XHJcbiAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnWWVzJyxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOlxyXG4gICAgICAgICAgICAgICAgICB1aVN0YXRlLmV4cG9ydEltYWdlLmV4cG9ydGluZyB8fFxyXG4gICAgICAgICAgICAgICAgICAhaXNWYWxpZE1hcEluZm8odmlzU3RhdGUubWFwSW5mbykgfHxcclxuICAgICAgICAgICAgICAgICAgIXByb3ZpZGVyU3RhdGUuY3VycmVudFByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgU0hBUkVfTUFQX0lEOlxyXG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcclxuICAgICAgICAgICAgICA8U2hhcmVNYXBNb2RhbFxyXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XHJcbiAgICAgICAgICAgICAgICBpc1JlYWR5PXshdWlTdGF0ZS5leHBvcnRJbWFnZS5leHBvcnRpbmd9XHJcbiAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17dGhpcy5wcm92aWRlcldpdGhTaGFyZSh0aGlzLnByb3BzKX1cclxuICAgICAgICAgICAgICAgIG9uRXhwb3J0PXt0aGlzLl9vblNoYXJlTWFwVXJsfVxyXG4gICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5zZXRDbG91ZFByb3ZpZGVyfVxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEltYWdlU2V0dGluZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAnU2hhcmUgVVJMJyxcclxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fb25DbG9zZVNhdmVNYXBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnJvb3ROb2RlID8gKFxyXG4gICAgICAgIDxNb2RhbERpYWxvZ1xyXG4gICAgICAgICAgcGFyZW50U2VsZWN0b3I9eygpID0+IGZpbmRET01Ob2RlKHJvb3ROb2RlKX1cclxuICAgICAgICAgIGlzT3Blbj17Qm9vbGVhbihjdXJyZW50TW9kYWwpfVxyXG4gICAgICAgICAgb25DYW5jZWw9e3RoaXMuX2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgICB7Li4ubW9kYWxQcm9wc31cclxuICAgICAgICAgIGNzc1N0eWxlPXtEZWZhdWx0U3R5bGUuY29uY2F0KG1vZGFsUHJvcHMuY3NzU3R5bGUgfHwgJycpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0ZW1wbGF0ZX1cclxuICAgICAgICA8L01vZGFsRGlhbG9nPlxyXG4gICAgICApIDogbnVsbDtcclxuICAgIH1cclxuICAgIC8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE1vZGFsV3JhcHBlcjtcclxufVxyXG4iXX0=