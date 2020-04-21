"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _delete = _interopRequireDefault(require("../icons/delete"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  color: ", ";\n  overflow: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 10px;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n\n  :hover {\n    overflow: visible;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 1px;\n  color: ", ";\n  font-size: 11px;\n  line-height: 20px;\n  margin: 4px 10px 4px 3px;\n  padding: 2px 6px;\n  display: flex;\n  align-items: center;\n  max-width: calc(100% - 8px);\n\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  // required properties
  onClick: _propTypes["default"].func.isRequired,
  removeItem: _propTypes["default"].func.isRequired,
  // optional properties
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].any),
  disabled: _propTypes["default"].bool,
  displayOption: _propTypes["default"].func,
  focus: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  inputTheme: _propTypes["default"].string
};

var ChickletButton = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.panelActiveBg;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var ChickletTag = _styledComponents["default"].span(_templateObject2());

var Chicklet = function Chicklet(_ref) {
  var disabled = _ref.disabled,
      name = _ref.name,
      remove = _ref.remove;
  return /*#__PURE__*/_react["default"].createElement(ChickletButton, null, /*#__PURE__*/_react["default"].createElement(ChickletTag, null, name), /*#__PURE__*/_react["default"].createElement(_delete["default"], {
    height: "10px",
    onClick: disabled ? null : remove
  }));
};

var ChickletedInputContainer = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryChickletedInput : props.theme.chickletedInput;
}, function (props) {
  return props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.theme.selectColor;
});

var ChickletedInput = function ChickletedInput(_ref2) {
  var focus = _ref2.focus,
      disabled = _ref2.disabled,
      error = _ref2.error,
      onClick = _ref2.onClick,
      className = _ref2.className,
      _ref2$selectedItems = _ref2.selectedItems,
      selectedItems = _ref2$selectedItems === void 0 ? [] : _ref2$selectedItems,
      _ref2$placeholder = _ref2.placeholder,
      placeholder = _ref2$placeholder === void 0 ? '' : _ref2$placeholder,
      removeItem = _ref2.removeItem,
      _ref2$displayOption = _ref2.displayOption,
      displayOption = _ref2$displayOption === void 0 ? function (d) {
    return d;
  } : _ref2$displayOption,
      inputTheme = _ref2.inputTheme;
  return /*#__PURE__*/_react["default"].createElement(ChickletedInputContainer, {
    className: "".concat(className, " chickleted-input"),
    focus: focus,
    disabled: disabled,
    error: error,
    onClick: onClick,
    inputTheme: inputTheme,
    hasPlaceholder: !selectedItems || !selectedItems.length
  }, selectedItems.length > 0 ? selectedItems.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(Chicklet, {
      disabled: disabled,
      key: "".concat(displayOption(item), "_").concat(i),
      name: displayOption(item),
      remove: function remove(e) {
        return removeItem(item, e);
      }
    });
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(className, " chickleted-input__placeholder")
  }, placeholder));
};

ChickletedInput.propTypes = propTypes;
var _default = ChickletedInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2NoaWNrbGV0ZWQtaW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib25DbGljayIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwicmVtb3ZlSXRlbSIsInNlbGVjdGVkSXRlbXMiLCJhcnJheU9mIiwiYW55IiwiZGlzYWJsZWQiLCJib29sIiwiZGlzcGxheU9wdGlvbiIsImZvY3VzIiwiZXJyb3IiLCJwbGFjZWhvbGRlciIsInN0cmluZyIsImlucHV0VGhlbWUiLCJDaGlja2xldEJ1dHRvbiIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJwYW5lbEFjdGl2ZUJnIiwidGV4dENvbG9yIiwidGV4dENvbG9ySGwiLCJDaGlja2xldFRhZyIsInNwYW4iLCJDaGlja2xldCIsIm5hbWUiLCJyZW1vdmUiLCJDaGlja2xldGVkSW5wdXRDb250YWluZXIiLCJzZWNvbmRhcnlDaGlja2xldGVkSW5wdXQiLCJjaGlja2xldGVkSW5wdXQiLCJoYXNQbGFjZWhvbGRlciIsInNlbGVjdENvbG9yUGxhY2VIb2xkZXIiLCJzZWxlY3RDb2xvciIsIkNoaWNrbGV0ZWRJbnB1dCIsImNsYXNzTmFtZSIsImQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQjtBQUNBQyxFQUFBQSxPQUFPLEVBQUVDLHNCQUFVQyxJQUFWLENBQWVDLFVBRlI7QUFHaEJDLEVBQUFBLFVBQVUsRUFBRUgsc0JBQVVDLElBQVYsQ0FBZUMsVUFIWDtBQUtoQjtBQUNBRSxFQUFBQSxhQUFhLEVBQUVKLHNCQUFVSyxPQUFWLENBQWtCTCxzQkFBVU0sR0FBNUIsQ0FOQztBQU9oQkMsRUFBQUEsUUFB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Q2pDLGFBQWEsQ0FBQ2tDLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsd0JBQ2hCLGdDQUFDLFFBQUQ7QUFDRSxNQUFBLFFBQVEsRUFBRWpDLFFBRFo7QUFFRSxNQUFBLEdBQUcsWUFBS0UsYUFBYSxDQUFDOEIsSUFBRCxDQUFsQixjQUE0QkMsQ0FBNUIsQ0FGTDtBQUdFLE1BQUEsSUFBSSxFQUFFL0IsYUFBYSxDQUFDOEIsSUFBRCxDQUhyQjtBQUlFLE1BQUEsTUFBTSxFQUFFLGdCQUFBRSxDQUFDO0FBQUEsZUFBSXRDLFVBQVUsQ0FBQ29DLElBQUQsRUFBT0UsQ0FBUCxDQUFkO0FBQUE7QUFKWCxNQURnQjtBQUFBLEdBQWxCLENBREQsZ0JBVUM7QUFBTSxJQUFBLFNBQVMsWUFBS04sU0FBTDtBQUFmLEtBQWdFdkIsV0FBaEUsQ0FuQkosQ0Fac0I7QUFBQSxDQUF4Qjs7QUFvQ0FzQixlQUFlLENBQUNwQyxTQUFoQixHQUE0QkEsU0FBNUI7ZUFFZW9DLGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBEZWxldGUgZnJvbSAnLi4vaWNvbnMvZGVsZXRlJztcclxuXHJcbmNvbnN0IHByb3BUeXBlcyA9IHtcclxuICAvLyByZXF1aXJlZCBwcm9wZXJ0aWVzXHJcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICByZW1vdmVJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG5cclxuICAvLyBvcHRpb25hbCBwcm9wZXJ0aWVzXHJcbiAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGRpc3BsYXlPcHRpb246IFByb3BUeXBlcy5mdW5jLFxyXG4gIGZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuY29uc3QgQ2hpY2tsZXRCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxBY3RpdmVCZ307XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogNHB4IDEwcHggNHB4IDNweDtcclxuICBwYWRkaW5nOiAycHggNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hpY2tsZXRUYWcgPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENoaWNrbGV0ID0gKHtkaXNhYmxlZCwgbmFtZSwgcmVtb3ZlfSkgPT4gKFxyXG4gIDxDaGlja2xldEJ1dHRvbj5cclxuICAgIDxDaGlja2xldFRhZz57bmFtZX08L0NoaWNrbGV0VGFnPlxyXG4gICAgPERlbGV0ZSBoZWlnaHQ9XCIxMHB4XCIgb25DbGljaz17ZGlzYWJsZWQgPyBudWxsIDogcmVtb3ZlfSAvPlxyXG4gIDwvQ2hpY2tsZXRCdXR0b24+XHJcbik7XHJcblxyXG5jb25zdCBDaGlja2xldGVkSW5wdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmlucHV0VGhlbWUgPT09ICdzZWNvbmRhcnknXHJcbiAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5Q2hpY2tsZXRlZElucHV0XHJcbiAgICAgIDogcHJvcHMudGhlbWUuY2hpY2tsZXRlZElucHV0fVxyXG5cclxuICBjb2xvcjogJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuaGFzUGxhY2Vob2xkZXIgPyBwcm9wcy50aGVtZS5zZWxlY3RDb2xvclBsYWNlSG9sZGVyIDogcHJvcHMudGhlbWUuc2VsZWN0Q29sb3J9O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBDaGlja2xldGVkSW5wdXQgPSAoe1xyXG4gIGZvY3VzLFxyXG4gIGRpc2FibGVkLFxyXG4gIGVycm9yLFxyXG4gIG9uQ2xpY2ssXHJcbiAgY2xhc3NOYW1lLFxyXG4gIHNlbGVjdGVkSXRlbXMgPSBbXSxcclxuICBwbGFjZWhvbGRlciA9ICcnLFxyXG4gIHJlbW92ZUl0ZW0sXHJcbiAgZGlzcGxheU9wdGlvbiA9IGQgPT4gZCxcclxuICBpbnB1dFRoZW1lXHJcbn0pID0+IChcclxuICA8Q2hpY2tsZXRlZElucHV0Q29udGFpbmVyXHJcbiAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY2hpY2tsZXRlZC1pbnB1dGB9XHJcbiAgICBmb2N1cz17Zm9jdXN9XHJcbiAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICBlcnJvcj17ZXJyb3J9XHJcbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgaW5wdXRUaGVtZT17aW5wdXRUaGVtZX1cclxuICAgIGhhc1BsYWNlaG9sZGVyPXshc2VsZWN0ZWRJdGVtcyB8fCAhc2VsZWN0ZWRJdGVtcy5sZW5ndGh9XHJcbiAgPlxyXG4gICAge3NlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgc2VsZWN0ZWRJdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICA8Q2hpY2tsZXRcclxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgIGtleT17YCR7ZGlzcGxheU9wdGlvbihpdGVtKX1fJHtpfWB9XHJcbiAgICAgICAgICBuYW1lPXtkaXNwbGF5T3B0aW9uKGl0ZW0pfVxyXG4gICAgICAgICAgcmVtb3ZlPXtlID0+IHJlbW92ZUl0ZW0oaXRlbSwgZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSlcclxuICAgICkgOiAoXHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBjaGlja2xldGVkLWlucHV0X19wbGFjZWhvbGRlcmB9PntwbGFjZWhvbGRlcn08L3NwYW4+XHJcbiAgICApfVxyXG4gIDwvQ2hpY2tsZXRlZElucHV0Q29udGFpbmVyPlxyXG4pO1xyXG5cclxuQ2hpY2tsZXRlZElucHV0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoaWNrbGV0ZWRJbnB1dDtcclxuIl19