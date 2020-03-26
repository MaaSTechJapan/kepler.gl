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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvdGV4dC1sYWJlbC1wYW5lbC5qcyJdLCJuYW1lcyI6WyJUZXh0TGFiZWxQYW5lbCIsInByb3BzIiwidXBkYXRlTGF5ZXJUZXh0TGFiZWwiLCJ0ZXh0TGFiZWwiLCJmaWVsZHMiLCJjdXJyZW50RmllbGRzIiwibWFwIiwidGwiLCJmaWVsZCIsIm5hbWUiLCJmaWx0ZXIiLCJkIiwic2VsZWN0ZWQiLCJpZHgiLCJ2IiwiTEFZRVJfVEVYVF9DT05GSUdTIiwiZm9udFNpemUiLCJzaXplIiwic2VsZWN0ZWRDb2xvciIsImNvbG9yIiwic2V0Q29sb3IiLCJ0ZXh0QW5jaG9yIiwiYW5jaG9yIiwidmFsIiwidGV4dEFsaWdubWVudCIsImFsaWdubWVudCIsImxlbmd0aCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFFQTs7Ozs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7NkJBT1Y7QUFBQSx3QkFDMkMsS0FBS0MsS0FEaEQ7QUFBQSxVQUNBQyxvQkFEQSxlQUNBQSxvQkFEQTtBQUFBLFVBQ3NCQyxTQUR0QixlQUNzQkEsU0FEdEI7QUFBQSxVQUNpQ0MsTUFEakMsZUFDaUNBLE1BRGpDO0FBRVAsVUFBTUMsYUFBYSxHQUFHRixTQUFTLENBQUNHLEdBQVYsQ0FBYyxVQUFBQyxFQUFFO0FBQUEsZUFBSUEsRUFBRSxDQUFDQyxLQUFILElBQVlELEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxJQUF6QjtBQUFBLE9BQWhCLEVBQStDQyxNQUEvQyxDQUFzRCxVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBSjtBQUFBLE9BQXZELENBQXRCO0FBQ0EsMEJBQ0UsZ0NB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REYsQ0EvQkYsQ0FEYTtBQUFBLE9BQWQsQ0FESCxlQXVERSxnQ0FBQyxrQ0FBRCxxQkFDRSxnQ0FBQyx3QkFBRDtBQUFRLFFBQUEsSUFBSSxNQUFaO0FBQWEsUUFBQSxPQUFPLEVBQUUsaUJBQUFBLEdBQUc7QUFBQSxpQkFBSXJCLG9CQUFvQixDQUFDQyxTQUFTLENBQUN1QixNQUFYLENBQXhCO0FBQUE7QUFBekIsc0JBQ0UsZ0NBQUMsVUFBRDtBQUFLLFFBQUEsTUFBTSxFQUFDO0FBQVosUUFERixtQkFERixDQXZERixDQVRGLENBREY7QUEwRUQ7OztFQXBGeUNDLGdCOzs7aUNBQXZCM0IsYyxlQUNBO0FBQ2pCSSxFQUFBQSxNQUFNLEVBQUV3QixzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLE1BQTVCLENBRFM7QUFFakIzQixFQUFBQSxTQUFTLEVBQUV5QixzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLE1BQTVCLENBRk07QUFHakI1QixFQUFBQSxvQkFBb0IsRUFBRTBCLHNCQUFVRyxJQUFWLENBQWVDO0FBSHBCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7XG4gIFBhbmVsTGFiZWwsXG4gIFNpZGVQYW5lbFNlY3Rpb24sXG4gIFNwYWNlQmV0d2VlbkZsZXhib3gsXG4gIFNCRmxleGJveEl0ZW0sXG4gIEJ1dHRvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0FkZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IENvbG9yU2VsZWN0b3IgZnJvbSAnLi9jb2xvci1zZWxlY3Rvcic7XG5pbXBvcnQgRmllbGRTZWxlY3RvciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvcic7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQgTGF5ZXJDb25maWdHcm91cCwge1xuICBDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudCxcbiAgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlclxufSBmcm9tICcuL2xheWVyLWNvbmZpZy1ncm91cCc7XG5pbXBvcnQgUmFuZ2VTbGlkZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vcmFuZ2Utc2xpZGVyJztcblxuaW1wb3J0IHtMQVlFUl9URVhUX0NPTkZJR1N9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dExhYmVsUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gICAgdGV4dExhYmVsOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICB1cGRhdGVMYXllclRleHRMYWJlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dXBkYXRlTGF5ZXJUZXh0TGFiZWwsIHRleHRMYWJlbCwgZmllbGRzfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY3VycmVudEZpZWxkcyA9IHRleHRMYWJlbC5tYXAodGwgPT4gdGwuZmllbGQgJiYgdGwuZmllbGQubmFtZSkuZmlsdGVyKGQgPT4gZCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGFiZWwnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVIZWFkZXI+XG4gICAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxuICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRGaWVsZHN9XG4gICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0ZWQgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoJ2FsbCcsICdmaWVsZHMnLCBzZWxlY3RlZCl9XG4gICAgICAgICAgICBtdWx0aVNlbGVjdFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlcj5cbiAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIHt0ZXh0TGFiZWwubWFwKCh0bCwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dGwuZmllbGQgPyB0bC5maWVsZC5uYW1lIDogYG51bGwtJHtpZHh9YH0+XG4gICAgICAgICAgICAgIDxQYW5lbExhYmVsPntgTGFiZWwgJHtpZHggKyAxfWB9PC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17KHRsLmZpZWxkICYmIHRsLmZpZWxkLm5hbWUpIHx8ICdTZWxlY3QgYSBmaWVsZCd9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J2VtcHR5J31cbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt2ID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKGlkeCwgJ2ZpZWxkJywgdil9XG4gICAgICAgICAgICAgICAgICBlcmFzYWJsZVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+e2BGb250IHNpemVgfTwvUGFuZWxMYWJlbD5cbiAgICAgICAgICAgICAgICA8UmFuZ2VTbGlkZXJcbiAgICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9URVhUX0NPTkZJR1MuZm9udFNpemV9XG4gICAgICAgICAgICAgICAgICB2YWx1ZTE9e3RsLnNpemV9XG4gICAgICAgICAgICAgICAgICBpc1JhbmdlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2ID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKGlkeCwgJ3NpemUnLCB2WzFdKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxQYW5lbExhYmVsPntgRm9udCBjb2xvcmB9PC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgICAgIDxDb2xvclNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICBjb2xvclNldHM9e1tcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IHRsLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgIHNldENvbG9yOiB2ID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKGlkeCwgJ2NvbG9yJywgdilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxTcGFjZUJldHdlZW5GbGV4Ym94PlxuICAgICAgICAgICAgICAgICAgPFNCRmxleGJveEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbExhYmVsPntgVGV4dCBhbmNob3JgfTwvUGFuZWxMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9URVhUX0NPTkZJR1MudGV4dEFuY2hvcn1cbiAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXt0bC5hbmNob3J9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbCA9PiB1cGRhdGVMYXllclRleHRMYWJlbChpZHgsICdhbmNob3InLCB2YWwpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9TQkZsZXhib3hJdGVtPlxuICAgICAgICAgICAgICAgICAgPFNCRmxleGJveEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbExhYmVsPntgQWxpZ25tZW50YH08L1BhbmVsTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uTEFZRVJfVEVYVF9DT05GSUdTLnRleHRBbGlnbm1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17dGwuYWxpZ25tZW50fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoaWR4LCAnYWxpZ25tZW50JywgdmFsKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvU0JGbGV4Ym94SXRlbT5cbiAgICAgICAgICAgICAgICA8L1NwYWNlQmV0d2VlbkZsZXhib3g+XG4gICAgICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgPEJ1dHRvbiBsaW5rIG9uQ2xpY2s9e3ZhbCA9PiB1cGRhdGVMYXllclRleHRMYWJlbCh0ZXh0TGFiZWwubGVuZ3RoKX0+XG4gICAgICAgICAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+XG4gICAgICAgICAgICAgIEFkZCBNb3JlIExhYmVsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgKTtcbiAgfVxufVxuIl19