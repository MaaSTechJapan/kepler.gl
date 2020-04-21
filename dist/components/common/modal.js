"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalFooter = exports.ModalTitle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _icons = require("./icons");

var _styledComponents2 = require("./styled-components");

var _mediaBreakpoints = require("../../styles/media-breakpoints");

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 0;\n    padding-right: 0;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 24px;\n    padding-right: 24px;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 0;\n  left: 0;\n  transition: ", ";\n  padding-left: 40px;\n  padding-right: 40px;\n\n  ", ";\n\n  ", ";\n\n  :focus {\n    outline: 0;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  justify-content: flex-end;\n  z-index: ", ";\n  position: absolute;\n  top: 24px;\n  right: 24px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-top: 16px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-top: 24px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-top: 24px;\n  ", ";\n\n  ", ";\n  z-index: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  color: ", ";\n  margin-bottom: 10px;\n  position: relative;\n  z-index: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  z-index: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 100vw;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 12px 36px 24px;\n    max-width: 80vw;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow-y: scroll;\n  max-width: 70vw;\n  max-height: 85vh;\n  padding: 24px 72px 40px;\n  position: relative;\n  top: 92px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: #ffffff;\n  border-radius: 4px;\n  transition: ", ";\n  box-sizing: border-box;\n  font-size: 12px;\n  color: ", ";\n\n  ", "\n\n  ", "\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ModalContentWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.labelColorLT;
}, _mediaBreakpoints.media.portable(_templateObject2()), _mediaBreakpoints.media.palm(_templateObject3()), function (props) {
  return props.cssStyle || '';
});

var ModalContent = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.modalContentZ;
});

var ModalTitle = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.modalTitleFontSize;
}, function (props) {
  return props.theme.modalTitleColor;
}, function (props) {
  return props.theme.modalTitleZ;
});

exports.ModalTitle = ModalTitle;

var StyledModalFooter = _styledComponents["default"].div(_templateObject6(), _mediaBreakpoints.media.portable(_templateObject7()), _mediaBreakpoints.media.palm(_templateObject8()), function (props) {
  return props.theme.modalFooterZ;
});

var CloseButton = _styledComponents["default"].div(_templateObject9(), function (props) {
  return props.theme.titleColorLT;
}, function (props) {
  return props.theme.modalButtonZ;
});

var FooterActionWrapper = _styledComponents["default"].div(_templateObject10());

var defaultCancelButton = {
  link: true,
  large: true,
  children: 'Cancel'
};
var defaultConfirmButton = {
  large: true,
  width: '160px',
  children: 'Confirm'
};

var ModalFooter = function ModalFooter(_ref) {
  var cancel = _ref.cancel,
      confirm = _ref.confirm,
      cancelButton = _ref.cancelButton,
      confirmButton = _ref.confirmButton;

  var cancelButtonProps = _objectSpread({}, defaultCancelButton, {}, cancelButton);

  var confirmButtonProps = _objectSpread({}, defaultConfirmButton, {}, confirmButton);

  return /*#__PURE__*/_react["default"].createElement(StyledModalFooter, {
    className: "modal--footer"
  }, /*#__PURE__*/_react["default"].createElement(FooterActionWrapper, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, (0, _extends2["default"])({}, cancelButtonProps, {
    onClick: cancel
  }), cancelButtonProps.children), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, (0, _extends2["default"])({}, confirmButtonProps, {
    onClick: confirm
  }), confirmButtonProps.children)));
};

exports.ModalFooter = ModalFooter;

var ModalDialog = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ModalDialog, _Component);

  var _super = _createSuper(ModalDialog);

  function ModalDialog() {
    (0, _classCallCheck2["default"])(this, ModalDialog);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ModalDialog, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_reactModal["default"], (0, _extends2["default"])({
        className: this.props.className
      }, props, {
        ariaHideApp: false,
        style: {
          overlay: _objectSpread({
            backgroundColor: props.theme && props.theme.modalOverlayBgd || 'rgba(0, 0, 0, 0.5)',
            zIndex: props.theme && props.theme.modalOverLayZ || 1000
          }, props.style)
        }
      }), /*#__PURE__*/_react["default"].createElement(ModalContentWrapper, {
        className: "modal--wrapper",
        cssStyle: props.cssStyle,
        footer: props.footer
      }, props.close && /*#__PURE__*/_react["default"].createElement(CloseButton, {
        className: "modal--close",
        onClick: props.onCancel
      }, /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
        height: "14px"
      })), /*#__PURE__*/_react["default"].createElement("div", null, props.title && /*#__PURE__*/_react["default"].createElement(ModalTitle, {
        className: "modal--title"
      }, props.title), /*#__PURE__*/_react["default"].createElement(ModalContent, {
        className: "modal--body"
      }, props.children), props.footer && /*#__PURE__*/_react["default"].createElement(ModalFooter, {
        cancel: props.onCancel,
        confirm: props.onConfirm,
        cancelButton: props.cancelButton,
        confirmButton: props.confirmButton
      }))));
    }
  }]);
  return ModalDialog;
}(_react.Component);

(0, _defineProperty2["default"])(ModalDialog, "propTypes", {
  footer: _propTypes["default"].bool,
  close: _propTypes["default"].bool,
  onConfirm: _propTypes["default"].func,
  onCancel: _propTypes["default"].func,
  confirmButton: _propTypes["default"].object,
  confirmButtonLabel: _propTypes["default"].string,
  cancelButton: _propTypes["default"].object,
  cancelButtonLabel: _propTypes["default"].string,
  cssStyle: _propTypes["default"].arrayOf(_propTypes["default"].any)
});
(0, _defineProperty2["default"])(ModalDialog, "defaultProps", {
  footer: false,
  close: true,
  onConfirm: function onConfirm() {},
  onCancel: function onCancel() {},
  cancelButton: defaultCancelButton,
  confirmButton: defaultConfirmButton,
  cssStyle: []
});
var StyledModal = (0, _styledComponents["default"])(ModalDialog)(_templateObject11(), function (props) {
  return props.theme.transition;
}, _mediaBreakpoints.media.portable(_templateObject12()), _mediaBreakpoints.media.palm(_templateObject13()));
var _default = StyledModal;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRlbnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRyYW5zaXRpb24iLCJsYWJlbENvbG9yTFQiLCJtZWRpYSIsInBvcnRhYmxlIiwicGFsbSIsImNzc1N0eWxlIiwiTW9kYWxDb250ZW50IiwibW9kYWxDb250ZW50WiIsIk1vZGFsVGl0bGUiLCJtb2RhbFRpdGxlRm9udFNpemUiLCJtb2RhbFRpdGxlQ29sb3IiLCJtb2RhbFRpdGxlWiIsIlN0eWxlZE1vZGFsRm9vdGVyIiwibW9kYWxGb290ZXJaIiwiQ2xvc2VCdXR0b24iLCJ0aXRsZUNvbG9yTFQiLCJtb2RhbEJ1dHRvbloiLCJGb290ZXJBY3Rpb25XcmFwcGVyIiwiZGVmYXVsdENhbmNlbEJ1dHRvbiIsImxpbmsiLCJsYXJnZSIsImNoaWxkcmVuIiwiZGVmYXVsdENvbmZpcm1CdXR0b24iLCJ3aWR0aCIsIk1vZGFsRm9vdGVyIiwiY2FuY2VsIiwiY29uZmlybSIsImNhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b25Qcm9wcyIsImNvbmZpcm1CdXR0b25Qcm9wcyIsIk1vZGFsRGlhbG9nIiwiY2xhc3NOYW1lIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsIm1vZGFsT3ZlcmxheUJnZCIsInpJbmRleCIsIm1vZGFsT3ZlckxheVoiLCJzdHlsZSIsImZvb3RlciIsImNsb3NlIiwib25DYW5jZWwiLCJ0aXRsZSIsIm9uQ29uZmlybSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwib2JqZWN0IiwiY29uZmlybUJ1dHRvbkxhYmVsIiwic3RyaW5nIiwiY2FuY2VsQnV0dG9uTGFiZWwiLCJhcnJheU9mIiwiYW55IiwiU3R5bGVkTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9C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cEJkLEVBQUFBLFlBQVksRUFBRVQsbUJBTE07QUFNcEJVLEVBQUFBLGFBQWEsRUFBRU4sb0JBTks7QUFPcEJqQixFQUFBQSxRQUFRLEVBQUU7QUFQVSxDO0FBc0R4QixJQUFNaUQsV0FBVyxHQUFHLGtDQUFPdkIsV0FBUCxDQUFILHNCQUdELFVBQUFqQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FISixFQU9iRSx3QkFBTUMsUUFQTyx1QkFZYkQsd0JBQU1FLElBWk8sc0JBQWpCO2VBc0Jla0QsVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XHJcbmltcG9ydCB7RGVsZXRlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7bWVkaWF9IGZyb20gJ3N0eWxlcy9tZWRpYS1icmVha3BvaW50cyc7XHJcblxyXG5jb25zdCBNb2RhbENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgbWF4LXdpZHRoOiA3MHZ3O1xyXG4gIG1heC1oZWlnaHQ6IDg1dmg7XHJcbiAgcGFkZGluZzogMjRweCA3MnB4IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogOTJweDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvckxUfTtcclxuXHJcbiAgJHttZWRpYS5wb3J0YWJsZWBcclxuICAgIHBhZGRpbmc6IDEycHggMzZweCAyNHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MHZ3O1xyXG4gIGB9XHJcblxyXG4gICR7bWVkaWEucGFsbWBcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgYH1cclxuXHJcbiAgJHtwcm9wcyA9PiBwcm9wcy5jc3NTdHlsZSB8fCAnJ307XHJcbmA7XHJcblxyXG5jb25zdCBNb2RhbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsQ29udGVudFp9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZGFsVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFRpdGxlRm9udFNpemV9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsVGl0bGVDb2xvcn07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFRpdGxlWn07XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRNb2RhbEZvb3RlciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgJHttZWRpYS5wb3J0YWJsZWBcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIGB9O1xyXG5cclxuICAke21lZGlhLnBhbG1gXHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBgfTtcclxuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsRm9vdGVyWn07XHJcbmA7XHJcblxyXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVDb2xvckxUfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbEJ1dHRvblp9O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI0cHg7XHJcbiAgcmlnaHQ6IDI0cHg7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRm9vdGVyQWN0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5gO1xyXG5cclxuY29uc3QgZGVmYXVsdENhbmNlbEJ1dHRvbiA9IHtcclxuICBsaW5rOiB0cnVlLFxyXG4gIGxhcmdlOiB0cnVlLFxyXG4gIGNoaWxkcmVuOiAnQ2FuY2VsJ1xyXG59O1xyXG5cclxuY29uc3QgZGVmYXVsdENvbmZpcm1CdXR0b24gPSB7XHJcbiAgbGFyZ2U6IHRydWUsXHJcbiAgd2lkdGg6ICcxNjBweCcsXHJcbiAgY2hpbGRyZW46ICdDb25maXJtJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vZGFsRm9vdGVyID0gKHtjYW5jZWwsIGNvbmZpcm0sIGNhbmNlbEJ1dHRvbiwgY29uZmlybUJ1dHRvbn0pID0+IHtcclxuICBjb25zdCBjYW5jZWxCdXR0b25Qcm9wcyA9IHsuLi5kZWZhdWx0Q2FuY2VsQnV0dG9uLCAuLi5jYW5jZWxCdXR0b259O1xyXG4gIGNvbnN0IGNvbmZpcm1CdXR0b25Qcm9wcyA9IHsuLi5kZWZhdWx0Q29uZmlybUJ1dHRvbiwgLi4uY29uZmlybUJ1dHRvbn07XHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRNb2RhbEZvb3RlciBjbGFzc05hbWU9XCJtb2RhbC0tZm9vdGVyXCI+XHJcbiAgICAgIDxGb290ZXJBY3Rpb25XcmFwcGVyPlxyXG4gICAgICAgIDxCdXR0b24gey4uLmNhbmNlbEJ1dHRvblByb3BzfSBvbkNsaWNrPXtjYW5jZWx9PlxyXG4gICAgICAgICAge2NhbmNlbEJ1dHRvblByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gey4uLmNvbmZpcm1CdXR0b25Qcm9wc30gb25DbGljaz17Y29uZmlybX0+XHJcbiAgICAgICAgICB7Y29uZmlybUJ1dHRvblByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvb3RlckFjdGlvbldyYXBwZXI+XHJcbiAgICA8L1N0eWxlZE1vZGFsRm9vdGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5jbGFzcyBNb2RhbERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGZvb3RlcjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBjbG9zZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgY29uZmlybUJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNvbmZpcm1CdXR0b25MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNhbmNlbEJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNhbmNlbEJ1dHRvbkxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3NzU3R5bGU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGZvb3RlcjogZmFsc2UsXHJcbiAgICBjbG9zZTogdHJ1ZSxcclxuICAgIG9uQ29uZmlybTogKCkgPT4ge30sXHJcbiAgICBvbkNhbmNlbDogKCkgPT4ge30sXHJcbiAgICBjYW5jZWxCdXR0b246IGRlZmF1bHRDYW5jZWxCdXR0b24sXHJcbiAgICBjb25maXJtQnV0dG9uOiBkZWZhdWx0Q29uZmlybUJ1dHRvbixcclxuICAgIGNzc1N0eWxlOiBbXVxyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtwcm9wc30gPSB0aGlzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzLnRoZW1lICYmIHByb3BzLnRoZW1lLm1vZGFsT3ZlcmxheUJnZCkgfHwgJ3JnYmEoMCwgMCwgMCwgMC41KScsXHJcbiAgICAgICAgICAgIHpJbmRleDogKHByb3BzLnRoZW1lICYmIHByb3BzLnRoZW1lLm1vZGFsT3ZlckxheVopIHx8IDEwMDAsXHJcbiAgICAgICAgICAgIC8vIGluIGNhc2Ugd2Ugd2FudCB0byBvdmVycmlkZSB0aGUgbW9kYWwgZGlhbG9nIHN0eWxlXHJcbiAgICAgICAgICAgIC4uLnByb3BzLnN0eWxlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNb2RhbENvbnRlbnRXcmFwcGVyXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC0td3JhcHBlclwiXHJcbiAgICAgICAgICBjc3NTdHlsZT17cHJvcHMuY3NzU3R5bGV9XHJcbiAgICAgICAgICBmb290ZXI9e3Byb3BzLmZvb3Rlcn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvcHMuY2xvc2UgJiYgKFxyXG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gY2xhc3NOYW1lPVwibW9kYWwtLWNsb3NlXCIgb25DbGljaz17cHJvcHMub25DYW5jZWx9PlxyXG4gICAgICAgICAgICAgIDxEZWxldGUgaGVpZ2h0PVwiMTRweFwiIC8+XHJcbiAgICAgICAgICAgIDwvQ2xvc2VCdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3Byb3BzLnRpdGxlICYmIDxNb2RhbFRpdGxlIGNsYXNzTmFtZT1cIm1vZGFsLS10aXRsZVwiPntwcm9wcy50aXRsZX08L01vZGFsVGl0bGU+fVxyXG4gICAgICAgICAgICA8TW9kYWxDb250ZW50IGNsYXNzTmFtZT1cIm1vZGFsLS1ib2R5XCI+e3Byb3BzLmNoaWxkcmVufTwvTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICB7cHJvcHMuZm9vdGVyICYmIChcclxuICAgICAgICAgICAgICA8TW9kYWxGb290ZXJcclxuICAgICAgICAgICAgICAgIGNhbmNlbD17cHJvcHMub25DYW5jZWx9XHJcbiAgICAgICAgICAgICAgICBjb25maXJtPXtwcm9wcy5vbkNvbmZpcm19XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b249e3Byb3BzLmNhbmNlbEJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b249e3Byb3BzLmNvbmZpcm1CdXR0b259XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWxDb250ZW50V3JhcHBlcj5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBTdHlsZWRNb2RhbCA9IHN0eWxlZChNb2RhbERpYWxvZylgXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcclxuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxuXHJcbiAgJHttZWRpYS5wb3J0YWJsZWBcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgYH07XHJcblxyXG4gICR7bWVkaWEucGFsbWBcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgYH07XHJcblxyXG4gIDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0eWxlZE1vZGFsO1xyXG4iXX0=