"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _colorSelector = _interopRequireDefault(require("./color-selector"));

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _layerConfigGroup = _interopRequireWildcard(require("./layer-config-group"));

var _rangeSlider = _interopRequireDefault(require("../../common/range-slider"));

var _layerFactory = require("../../../layers/layer-factory");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TextLabelPanel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TextLabelPanel, _Component);

  var _super = _createSuper(TextLabelPanel);

  function TextLabelPanel() {
    (0, _classCallCheck2["default"])(this, TextLabelPanel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextLabelPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          updateLayerTextLabel = _this$props.updateLayerTextLabel,
          textLabel = _this$props.textLabel,
          fields = _this$props.fields;
      var currentFields = textLabel.map(function (tl) {
        return tl.field && tl.field.name;
      }).filter(function (d) {
        return d;
      });
      return /*#__PURE__*/_react["default"].createElement(_layerConfigGroup["default"], {
        label: 'label',
        collapsible: true
      }, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleHeader, null, /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
        fields: fields,
        value: currentFields,
        onSelect: function onSelect(selected) {
          return updateLayerTextLabel('all', 'fields', selected);
        },
        multiSelect: true
      })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, textLabel.map(function (tl, idx) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: tl.field ? tl.field.name : "null-".concat(idx)
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, "Label ".concat(idx + 1)), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
          fields: fields,
          value: tl.field && tl.field.name || 'Select a field',
          placeholder: 'empty',
          onSelect: function onSelect(v) {
            return updateLayerTextLabel(idx, 'field', v);
          },
          erasable: true
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, "Font size"), /*#__PURE__*/_react["default"].createElement(_rangeSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_TEXT_CONFIGS.fontSize, {
          value1: tl.size,
          isRange: false,
          onChange: function onChange(v) {
            return updateLayerTextLabel(idx, 'size', v[1]);
          }
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, "Font color"), /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
          colorSets: [{
            selectedColor: tl.color,
            setColor: function setColor(v) {
              return updateLayerTextLabel(idx, 'color', v);
            }
          }]
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SpaceBetweenFlexbox, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SBFlexboxItem, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, "Text anchor"), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_TEXT_CONFIGS.textAnchor, {
          selectedItems: tl.anchor,
          onChange: function onChange(val) {
            return updateLayerTextLabel(idx, 'anchor', val);
          }
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents.SBFlexboxItem, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, "Alignment"), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_TEXT_CONFIGS.textAlignment, {
          selectedItems: tl.alignment,
          onChange: function onChange(val) {
            return updateLayerTextLabel(idx, 'alignment', val);
          }
        }))))));
      }), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.Button, {
        link: true,
        onClick: function onClick(val) {
          return updateLayerTextLabel(textLabel.length);
        }
      }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
        height: "12px"
      }), "Add More Label"))));
    }
  }]);
  return TextLabelPanel;
}(_react.Component);

exports["default"] = TextLabelPanel;
(0, _defineProperty2["default"])(TextLabelPanel, "propTypes", {
  fields: _propTypes["default"].arrayOf(_propTypes["default"].object),
  textLabel: _propTypes["default"].arrayOf(_propTypes["default"].object),
  updateLayerTextLabel: _propTypes["default"].func.isRequired
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvdGV4dC1sYWJlbC1wYW5lbC5qcyJdLCJuYW1lcyI6WyJUZXh0TGFiZWxQYW5lbCIsInByb3BzIiwidXBkYXRlTGF5ZXJUZXh0TGFiZWwiLCJ0ZXh0TGFiZWwiLCJmaWVsZHMiLCJjdXJyZW50RmllbGRzIiwibWFwIiwidGwiLCJmaWVsZCIsIm5hbWUiLCJmaWx0ZXIiLCJkIiwic2VsZWN0ZWQiLCJpZHgiLCJ2IiwiTEFZRVJfVEVYVF9DT05GSUdTIiwiZm9udFNpemUiLCJzaXplIiwic2VsZWN0ZWRDb2xvciIsImNvbG9yIiwic2V0Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYW5jaG9yIiwidmFsIiwidGV4dEFsaWdubWVudCIsImFsaWdubWVudCIsImxlbmd0aCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFFQTs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7NkJBT1Y7QUFBQSx3QkFDMkMsS0FBS0MsS0FEaEQ7QUFBQSxVQUNBQyxvQkFEQSxlQUNBQSxvQkFEQTtBQUFBLFVBQ3NCQyxTQUR0QixlQUNzQkEsU0FEdEI7QUFBQSxVQUNpQ0MsTUFEakMsZUFDaUNBLE1BRGpDO0FBRVAsVUFBTUMsYUFBYSxHQUFHRixTQUFTLENBQUNHLEdBQVYsQ0FBYyxVQUFBQyxFQUFFO0FBQUEsZUFBSUEsRUFBRSxDQUFDQyxLQUFILElBQVlELEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxJQUF6QjtBQUFBLE9BQWhCLEVBQStDQyxNQUEvQyxDQUFzRCxVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBSjtBQUFBLE9BQXZELENBQXRCO0FBQ0EsMEJBQ0UsZ0NBQUMsNEJBQUQ7QUFBa0IsUUFBQSxLQUFLLEVBQUUsT0FBekI7QUFBa0MsUUFBQSxXQUFXO0FBQTdDLHNCQUNFLGdDQUFDLDhDQUFELHFCQUNFLGdDQUFDLHlCQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUVQLE1BRFY7QUFFRSxRQUFBLEtBQUssRUFBRUMsYUFGVDtBQUdFLFFBQUEsUUFBUSxFQUFFLGtCQUFBTyxRQUFRO0FBQUEsaUJBQUlWLG9CQUFvQixDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCVSxRQUFsQixDQUF4QjtBQUFBLFNBSHBCO0FBSUUsUUFBQSxXQUFXO0FBSmIsUUFERixDQURGLGVBU0UsZ0NBQUMsK0NBQUQsUUFDR1QsU0FBUyxDQUFDRyxHQUFWLENBQWMsVUFBQ0MsRUFBRCxFQUFLTSxHQUFMO0FBQUEsNEJBQ2I7QUFBSyxVQUFBLEdBQUcsRUFBRU4sRUFBRSxDQUFDQyxLQUFILEdBQVdELEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxJQUFwQixrQkFBbUNJLEdBQW5DO0FBQVYsd0JBQ0UsZ0NBQUMsNEJBQUQsd0JBQXNCQSxHQUFHLEdBQUcsQ0FBNUIsRUFERixlQUVFLGdDQUFDLGtDQUFELHFCQUNFLGdDQUFDLHlCQUFEO0FBQ0UsVUFBQSxNQUFNLEVBQUVULE1BRFY7QUFFRSxVQUFBLEtBQUssRUFBR0csRUFBRSxDQUFDQyxLQUFILElBQVlELEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxJQUF0QixJQUErQixnQkFGeEM7QUFHRSxVQUFBLFdBQVcsRUFBRSxPQUhmO0FBSUUsVUFBQSxRQUFRLEVBQUUsa0JBQUFLLENBQUM7QUFBQSxtQkFBSVosb0JBQW9CLENBQUNXLEdBQUQsRUFBTSxPQUFOLEVBQWVDLENBQWYsQ0FBeEI7QUFBQSxXQUpiO0FBS0UsVUFBQSxRQUFRO0FBTFYsVUFERixDQUZGLGVBV0UsZ0NBQUMsa0NBQUQscUJBQ0UsZ0NBQUMsNEJBQUQsb0JBREYsZUFFRSxnQ0FBQyx1QkFBRCxnQ0FDTUMsaUNBQW1CQyxRQUR6QjtBQUVFLFVBQUEsTUFBTSxFQUFFVCxFQUFFLENBQUNVLElBRmI7QUFHRSxVQUFBLE9BQU8sRUFBRSxLQUhYO0FBSUUsVUFBQSxRQUFRLEVBQUUsa0JBQUFILENBQUM7QUFBQSxtQkFBSVosb0JBQW9CLENBQUNXLEdBQUQsRUFBTSxNQUFOLEVBQWNDLENBQUMsQ0FBQyxDQUFELENBQWYsQ0FBeEI7QUFBQTtBQUpiLFdBRkYsQ0FYRixlQW9CRSxnQ0FBQyxrQ0FBRCxxQkFDRSxnQ0FBQyw0QkFBRCxxQkFERixlQUVFLGdDQUFDLHlCQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUUsQ0FDVDtBQUNFSSxZQUFBQSxhQUFhLEVBQUVYLEVBQUUsQ0FBQ1ksS0FEcEI7QUFFRUMsWUFBQUEsUUFBUSxFQUFFLGtCQUFBTixDQUFDO0FBQUEscUJBQUlaLG9CQUFvQixDQUFDVyxHQUFELEVBQU0sT0FBTixFQUFlQyxDQUFmLENBQXhCO0FBQUE7QUFGYixXQURTO0FBRGIsVUFGRixDQXBCRixlQStCRSxnQ0FBQyxrQ0FBRCxxQkFDRSxnQ0FBQyxxQ0FBRCxxQkFDRSxnQ0FBQywrQkFBRCxxQkFDRSxnQ0FBQyw0QkFBRCxzQkFERixlQUVFLGdDQUFDLHdCQUFELGdDQUNNQyxpQ0FBbUJNLFVBRHpCO0FBRUUsVUFBQSxhQUFhLEVBQUVkLEVBQUUsQ0FBQ2UsTUFGcEI7QUFHRSxVQUFBLFFBQVEsRUFBRSxrQkFBQUMsR0FBRztBQUFBLG1CQUFJckIsb0JBQW9CLENBQUNXLEdBQUQsRUFBTSxRQUFOLEVBQWdCVSxHQUFoQixDQUF4QjtBQUFBO0FBSGYsV0FGRixDQURGLGVBU0UsZ0NBQUMsK0JBQUQscUJBQ0UsZ0NBQUMsNEJBQUQsb0JBREYsZUFFRSxnQ0FBQyx3QkFBRCxnQ0FDTVIsaUNBQW1CUyxhQUR6QjtBQUVFLFVBQUEsYUFBYSxFQUFFakIsRUFBRSxDQUFDa0IsU0FGcEI7QUFHRSxVQUFBLFFBQVEsRUFBRSxrQkFBQUYsR0FBRztBQUFBLG1CQUFJckIsb0JBQW9CLENBQUNXLEdBQUQsRUFBTSxXQUFOLEVBQW1CVSxHQUFuQixDQUF4QjtBQUFBO0FBSGYsV0FGRixDQVRGLENBREYsQ0EvQkYsQ0FEYTtBQUFBLE9BQWQsQ0FESCxlQXVERSxnQ0FBQyxrQ0FBRCxxQkFDRSxnQ0FBQyx3QkFBRDtBQUFRLFFBQUEsSUFBSSxNQUFaO0FBQWEsUUFBQSxPQUFPLEVBQUUsaUJBQUFBLEdBQUc7QUFBQSxpQkFBSXJCLG9CQUFvQixDQUFDQyxTQUFTLENBQUN1QixNQUFYLENBQXhCO0FBQUE7QUFBekIsc0JBQ0UsZ0NBQUMsVUFBRDtBQUFLLFFBQUEsTUFBTSxFQUFDO0FBQVosUUFERixtQkFERixDQXZERixDQVRGLENBREY7QUEwRUQ7OztFQXBGeUNDLGdCOzs7aUNBQXZCM0IsYyxlQUNBO0FBQ2pCSSxFQUFBQSxNQUFNLEVBQUV3QixzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLE1BQTVCLENBRFM7QUFFakIzQixFQUFBQSxTQUFTLEVBQUV5QixzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLE1BQTVCLENBRk07QUFHakI1QixFQUFBQSxvQkFBb0IsRUFBRTBCLHNCQUFVRyxJQUFWLENBQWVDO0FBSHBCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgUGFuZWxMYWJlbCxcclxuICBTaWRlUGFuZWxTZWN0aW9uLFxyXG4gIFNwYWNlQmV0d2VlbkZsZXhib3gsXHJcbiAgU0JGbGV4Ym94SXRlbSxcclxuICBCdXR0b25cclxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7QWRkfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCBDb2xvclNlbGVjdG9yIGZyb20gJy4vY29sb3Itc2VsZWN0b3InO1xyXG5pbXBvcnQgRmllbGRTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XHJcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcclxuaW1wb3J0IExheWVyQ29uZmlnR3JvdXAsIHtcclxuICBDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudCxcclxuICBDb25maWdHcm91cENvbGxhcHNpYmxlSGVhZGVyXHJcbn0gZnJvbSAnLi9sYXllci1jb25maWctZ3JvdXAnO1xyXG5pbXBvcnQgUmFuZ2VTbGlkZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcmFuZ2Utc2xpZGVyJztcclxuXHJcbmltcG9ydCB7TEFZRVJfVEVYVF9DT05GSUdTfSBmcm9tICdsYXllcnMvbGF5ZXItZmFjdG9yeSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0TGFiZWxQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICB0ZXh0TGFiZWw6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgdXBkYXRlTGF5ZXJUZXh0TGFiZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7dXBkYXRlTGF5ZXJUZXh0TGFiZWwsIHRleHRMYWJlbCwgZmllbGRzfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBjdXJyZW50RmllbGRzID0gdGV4dExhYmVsLm1hcCh0bCA9PiB0bC5maWVsZCAmJiB0bC5maWVsZC5uYW1lKS5maWx0ZXIoZCA9PiBkKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGFiZWwnfSBjb2xsYXBzaWJsZT5cclxuICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlcj5cclxuICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXHJcbiAgICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxyXG4gICAgICAgICAgICB2YWx1ZT17Y3VycmVudEZpZWxkc31cclxuICAgICAgICAgICAgb25TZWxlY3Q9e3NlbGVjdGVkID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKCdhbGwnLCAnZmllbGRzJywgc2VsZWN0ZWQpfVxyXG4gICAgICAgICAgICBtdWx0aVNlbGVjdFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVIZWFkZXI+XHJcbiAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxyXG4gICAgICAgICAge3RleHRMYWJlbC5tYXAoKHRsLCBpZHgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3RsLmZpZWxkID8gdGwuZmllbGQubmFtZSA6IGBudWxsLSR7aWR4fWB9PlxyXG4gICAgICAgICAgICAgIDxQYW5lbExhYmVsPntgTGFiZWwgJHtpZHggKyAxfWB9PC9QYW5lbExhYmVsPlxyXG4gICAgICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsodGwuZmllbGQgJiYgdGwuZmllbGQubmFtZSkgfHwgJ1NlbGVjdCBhIGZpZWxkJ31cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydlbXB0eSd9XHJcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt2ID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKGlkeCwgJ2ZpZWxkJywgdil9XHJcbiAgICAgICAgICAgICAgICAgIGVyYXNhYmxlXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxQYW5lbExhYmVsPntgRm9udCBzaXplYH08L1BhbmVsTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8UmFuZ2VTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgey4uLkxBWUVSX1RFWFRfQ09ORklHUy5mb250U2l6ZX1cclxuICAgICAgICAgICAgICAgICAgdmFsdWUxPXt0bC5zaXplfVxyXG4gICAgICAgICAgICAgICAgICBpc1JhbmdlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3YgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoaWR4LCAnc2l6ZScsIHZbMV0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8UGFuZWxMYWJlbD57YEZvbnQgY29sb3JgfTwvUGFuZWxMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxDb2xvclNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yU2V0cz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IHRsLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29sb3I6IHYgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoaWR4LCAnY29sb3InLCB2KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFNwYWNlQmV0d2VlbkZsZXhib3g+XHJcbiAgICAgICAgICAgICAgICAgIDxTQkZsZXhib3hJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbExhYmVsPntgVGV4dCBhbmNob3JgfTwvUGFuZWxMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SXRlbVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uTEFZRVJfVEVYVF9DT05GSUdTLnRleHRBbmNob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0bC5hbmNob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKGlkeCwgJ2FuY2hvcicsIHZhbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9TQkZsZXhib3hJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8U0JGbGV4Ym94SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxMYWJlbD57YEFsaWdubWVudGB9PC9QYW5lbExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJdGVtU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9URVhUX0NPTkZJR1MudGV4dEFsaWdubWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RsLmFsaWdubWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoaWR4LCAnYWxpZ25tZW50JywgdmFsKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1NCRmxleGJveEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1NwYWNlQmV0d2VlbkZsZXhib3g+XHJcbiAgICAgICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gbGluayBvbkNsaWNrPXt2YWwgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwodGV4dExhYmVsLmxlbmd0aCl9PlxyXG4gICAgICAgICAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+XHJcbiAgICAgICAgICAgICAgQWRkIE1vcmUgTGFiZWxcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XHJcbiAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cclxuICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19