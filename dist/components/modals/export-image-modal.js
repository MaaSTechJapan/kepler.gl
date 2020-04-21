"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _imagePreview = _interopRequireDefault(require("../common/image-preview"));

var _defaultSettings = require("../../constants/default-settings");

var _styledComponents2 = require("../common/styled-components");

var _switch = _interopRequireDefault(require("../common/switch"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 250px;\n\n  .image-option-section {\n    .image-option-section-title {\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n\n  .button-list {\n    display: flex;\n    flex-direction: row;\n    padding: 8px 0px;\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ImageOptionList = _styledComponents["default"].div(_templateObject());

var ExportImageModalFactory = function ExportImageModalFactory() {
  var ExportImageModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ExportImageModal, _Component);

    var _super = _createSuper(ExportImageModal);

    function ExportImageModal() {
      (0, _classCallCheck2["default"])(this, ExportImageModal);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(ExportImageModal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._updateMapDim();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this._updateMapDim();
      }
    }, {
      key: "_updateMapDim",
      value: function _updateMapDim() {
        var _this$props = this.props,
            exportImage = _this$props.exportImage,
            mapH = _this$props.mapH,
            mapW = _this$props.mapW;

        if (mapH !== exportImage.mapH || mapW !== exportImage.mapW) {
          this.props.onUpdateSetting({
            mapH: mapH,
            mapW: mapW,
            ratio: _defaultSettings.EXPORT_IMG_RATIOS.CUSTOM,
            legend: false
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            exportImage = _this$props2.exportImage,
            onUpdateSetting = _this$props2.onUpdateSetting;
        var legend = exportImage.legend,
            ratio = exportImage.ratio,
            resolution = exportImage.resolution;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, {
          className: "export-image-modal"
        }, /*#__PURE__*/_react["default"].createElement(ImageOptionList, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section-title"
        }, "Ratio"), "Choose the ratio for various usages.", /*#__PURE__*/_react["default"].createElement("div", {
          className: "button-list"
        }, _defaultSettings.EXPORT_IMG_RATIO_OPTIONS.filter(function (op) {
          return !op.hidden;
        }).map(function (op) {
          return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectionButton, {
            key: op.id,
            selected: ratio === op.id,
            onClick: function onClick() {
              return onUpdateSetting({
                ratio: op.id
              });
            }
          }, op.label);
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section-title"
        }, "Resolution"), "High resolution is better for prints.", /*#__PURE__*/_react["default"].createElement("div", {
          className: "button-list"
        }, _defaultSettings.EXPORT_IMG_RESOLUTION_OPTIONS.map(function (op) {
          return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectionButton, {
            key: op.id,
            selected: resolution === op.id,
            onClick: function onClick() {
              return op.available && onUpdateSetting({
                resolution: op.id
              });
            }
          }, op.label);
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "image-option-section-title"
        }, "Map Legend"), /*#__PURE__*/_react["default"].createElement(_switch["default"], {
          type: "checkbox",
          id: "add-map-legend",
          checked: legend,
          label: "Add legend on map",
          onChange: function onChange() {
            return onUpdateSetting({
              legend: !legend
            });
          }
        }))), /*#__PURE__*/_react["default"].createElement(_imagePreview["default"], {
          exportImage: exportImage
        }));
      }
    }]);
    return ExportImageModal;
  }(_react.Component);

  (0, _defineProperty2["default"])(ExportImageModal, "propTypes", {
    mapW: _propTypes["default"].number.isRequired,
    mapH: _propTypes["default"].number.isRequired,
    exportImage: _propTypes["default"].object.isRequired,
    // callbacks
    onUpdateSetting: _propTypes["default"].func.isRequired
  });
  return ExportImageModal;
};

var _default = ExportImageModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtaW1hZ2UtbW9kYWwuanMiXSwibmFtZXMiOlsiSW1hZ2VPcHRpb25MaXN0Iiwic3R5bGVkIiwiZGl2IiwiRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkiLCJFeHBvcnRJbWFnZU1vZGFsIiwiX3VwZGF0ZU1hcERpbSIsInByb3BzIiwiZXhwb3J0SW1hZ2UiLCJtYXBIIiwibWFwVyIsIm9uVXBkYXRlU2V0dGluZyIsInJhdGlvIiwiRVhQT1JUX0lNR19SQVRJT1MiLCJDVVNUT00iLCJsZWdlbmQiLCJyZXNvbHV0aW9uIiwiRVhQT1JUX0lNR19SQVRJT19PUFRJT05TIiwiZmlsdGVyIiwib3AiLCJoaWRkZW4iLCJtYXAiLCJpZCIsImxhYmVsIiwiRVhQT1JUX0lNR19SRVNPTFVUSU9OX09QVElPTlMiLCJhdmFpbGFibGUiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFNQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBR0MsNkJBQU9DLEdBQVYsbUJBQXJCOztBQXdCQSxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFBQSxNQUM5QkMsZ0JBRDhCO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDBDQVVkO0FBQ2xCLGFBQUtDLGFBQUw7QUFDRDtBQVppQztBQUFBO0FBQUEsMkNBY2I7QUFDbkIsYUFBS0EsYUFBTDtBQUNEO0FBaEJpQztBQUFBO0FBQUEsc0NBa0JsQjtBQUFBLDBCQUNvQixLQUFLQyxLQUR6QjtBQUFBLFlBQ1BDLFdBRE8sZUFDUEEsV0FETztBQUFBLFlBQ01DLElBRE4sZUFDTUEsSUFETjtBQUFBLFlB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QSxXQUFXLEVBQUVQO0FBQTNCLFVBM0NGLENBREY7QUErQ0Q7QUFqRmlDO0FBQUE7QUFBQSxJQUNMa0IsZ0JBREs7O0FBQUEsbUNBQzlCckIsZ0JBRDhCLGVBRWY7QUFDakJLLElBQUFBLElBQUksRUFBRWlCLHNCQUFVQyxNQUFWLENBQWlCQyxVQUROO0FBRWpCcEIsSUFBQUEsSUFBSSxFQUFFa0Isc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRk47QUFHakJyQixJQUFBQSxXQUFXLEVBQUVtQixzQkFBVUcsTUFBVixDQUFpQkQsVUFIYjtBQUlqQjtBQUNBbEIsSUFBQUEsZUFBZSxFQUFFZ0Isc0JBQVVJLElBQVYsQ0FBZUY7QUFMZixHQUZlO0FBb0ZwQyxTQUFPeEIsZ0JBQVA7QUFDRCxDQXJGRDs7ZUF1RmVELHVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSW1hZ2VQcmV2aWV3IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ltYWdlLXByZXZpZXcnO1xyXG5cclxuaW1wb3J0IHtcclxuICBFWFBPUlRfSU1HX1JBVElPX09QVElPTlMsXHJcbiAgRVhQT1JUX0lNR19SRVNPTFVUSU9OX09QVElPTlMsXHJcbiAgRVhQT1JUX0lNR19SQVRJT1NcclxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5pbXBvcnQge1N0eWxlZE1vZGFsQ29udGVudCwgU2VsZWN0aW9uQnV0dG9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBTd2l0Y2ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3dpdGNoJztcclxuXHJcbmNvbnN0IEltYWdlT3B0aW9uTGlzdCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuXHJcbiAgLmltYWdlLW9wdGlvbi1zZWN0aW9uIHtcclxuICAgIC5pbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idXR0b24tbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDhweCAwcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSA9ICgpID0+IHtcclxuICBjbGFzcyBFeHBvcnRJbWFnZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIG1hcFc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgbWFwSDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBleHBvcnRJbWFnZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gICAgICAvLyBjYWxsYmFja3NcclxuICAgICAgb25VcGRhdGVTZXR0aW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLl91cGRhdGVNYXBEaW0oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZU1hcERpbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVNYXBEaW0oKSB7XHJcbiAgICAgIGNvbnN0IHtleHBvcnRJbWFnZSwgbWFwSCwgbWFwV30gPSB0aGlzLnByb3BzO1xyXG4gICAgICBpZiAobWFwSCAhPT0gZXhwb3J0SW1hZ2UubWFwSCB8fCBtYXBXICE9PSBleHBvcnRJbWFnZS5tYXBXKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZVNldHRpbmcoe1xyXG4gICAgICAgICAgbWFwSCxcclxuICAgICAgICAgIG1hcFcsXHJcbiAgICAgICAgICByYXRpbzogRVhQT1JUX0lNR19SQVRJT1MuQ1VTVE9NLFxyXG4gICAgICAgICAgbGVnZW5kOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7ZXhwb3J0SW1hZ2UsIG9uVXBkYXRlU2V0dGluZ30gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7bGVnZW5kLCByYXRpbywgcmVzb2x1dGlvbn0gPSBleHBvcnRJbWFnZTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZE1vZGFsQ29udGVudCBjbGFzc05hbWU9XCJleHBvcnQtaW1hZ2UtbW9kYWxcIj5cclxuICAgICAgICAgIDxJbWFnZU9wdGlvbkxpc3Q+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uLXRpdGxlXCI+UmF0aW88L2Rpdj5cclxuICAgICAgICAgICAgICBDaG9vc2UgdGhlIHJhdGlvIGZvciB2YXJpb3VzIHVzYWdlcy5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7RVhQT1JUX0lNR19SQVRJT19PUFRJT05TLmZpbHRlcihvcCA9PiAhb3AuaGlkZGVuKS5tYXAob3AgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmF0aW8gPT09IG9wLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVXBkYXRlU2V0dGluZyh7cmF0aW86IG9wLmlkfSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7b3AubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZVwiPlJlc29sdXRpb248L2Rpdj5cclxuICAgICAgICAgICAgICBIaWdoIHJlc29sdXRpb24gaXMgYmV0dGVyIGZvciBwcmludHMuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge0VYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TLm1hcChvcCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e29wLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtyZXNvbHV0aW9uID09PSBvcC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcC5hdmFpbGFibGUgJiYgb25VcGRhdGVTZXR0aW5nKHtyZXNvbHV0aW9uOiBvcC5pZH0pfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge29wLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb24tdGl0bGVcIj5NYXAgTGVnZW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiYWRkLW1hcC1sZWdlbmRcIlxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17bGVnZW5kfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJBZGQgbGVnZW5kIG9uIG1hcFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25VcGRhdGVTZXR0aW5nKHtsZWdlbmQ6ICFsZWdlbmR9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvSW1hZ2VPcHRpb25MaXN0PlxyXG4gICAgICAgICAgPEltYWdlUHJldmlldyBleHBvcnRJbWFnZT17ZXhwb3J0SW1hZ2V9IC8+XHJcbiAgICAgICAgPC9TdHlsZWRNb2RhbENvbnRlbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gRXhwb3J0SW1hZ2VNb2RhbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cG9ydEltYWdlTW9kYWxGYWN0b3J5O1xyXG4iXX0=