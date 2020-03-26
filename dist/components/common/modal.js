"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalFooter = exports.ModalTitle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRlbnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRyYW5zaXRpb24iLCJsYWJlbENvbG9yTFQiLCJtZWRpYSIsInBvcnRhYmxlIiwicGFsbSIsImNzc1N0eWxlIiwiTW9kYWxDb250ZW50IiwibW9kYWxDb250ZW50WiIsIk1vZGFsVGl0bGUiLCJtb2RhbFRpdGxlRm9udFNpemUiLCJtb2RhbFRpdGxlQ29sb3IiLCJtb2RhbFRpdGxlWiIsIlN0eWxlZE1vZGFsRm9vdGVyIiwibW9kYWxGb290ZXJaIiwiQ2xvc2VCdXR0b24iLCJ0aXRsZUNvbG9yTFQiLCJtb2RhbEJ1dHRvbloiLCJGb290ZXJBY3Rpb25XcmFwcGVyIiwiZGVmYXVsdENhbmNlbEJ1dHRvbiIsImxpbmsiLCJsYXJnZSIsImNoaWxkcmVuIiwiZGVmYXVsdENvbmZpcm1CdXR0b24iLCJ3aWR0aCIsIk1vZGFsRm9vdGVyIiwiY2FuY2VsIiwiY29uZmlybSIsImNhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b25Qcm9wcyIsImNvbmZpcm1CdXR0b25Qcm9wcyIsIk1vZGFsRGlhbG9nIiwiY2xhc3NOYW1lIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsIm1vZGFsT3ZlcmxheUJnZCIsInpJbmRleCIsIm1vZGFsT3ZlckxheVoiLCJzdHlsZSIsImZvb3RlciIsImNsb3NlIiwib25DYW5jZWwiLCJ0aXRsZSIsIm9uQ29uZmlybSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwib2JqZWN0IiwiY29uZmlybUJ1dHRvbkxhYmVsIiwic3RyaW5nIiwiY2FuY2VsQnV0dG9uTGFiZWwiLCJhcnJheU9mIiwiYW55IiwiU3R5bGVkTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9C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cEJkLEVBQUFBLFlBQVksRUFBRVQsbUJBTE07QUFNcEJVLEVBQUFBLGFBQWEsRUFBRU4sb0JBTks7QUFPcEJqQixFQUFBQSxRQUFRLEVBQUU7QUFQVSxDO0FBc0R4QixJQUFNaUQsV0FBVyxHQUFHLGtDQUFPdkIsV0FBUCxDQUFILHNCQUdELFVBQUFqQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FISixFQU9iRSx3QkFBTUMsUUFQTyx1QkFZYkQsd0JBQU1FLElBWk8sc0JBQWpCO2VBc0Jla0QsVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IHtEZWxldGV9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge21lZGlhfSBmcm9tICdzdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMnO1xuXG5jb25zdCBNb2RhbENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXgtd2lkdGg6IDcwdnc7XG4gIG1heC1oZWlnaHQ6IDg1dmg7XG4gIHBhZGRpbmc6IDI0cHggNzJweCA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOTJweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvckxUfTtcblxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIHBhZGRpbmc6IDEycHggMzZweCAyNHB4O1xuICAgIG1heC13aWR0aDogODB2dztcbiAgYH1cblxuICAke21lZGlhLnBhbG1gXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgYH1cblxuICAke3Byb3BzID0+IHByb3BzLmNzc1N0eWxlIHx8ICcnfTtcbmA7XG5cbmNvbnN0IE1vZGFsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbENvbnRlbnRafTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNb2RhbFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsVGl0bGVGb250U2l6ZX07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsVGl0bGVDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFRpdGxlWn07XG5gO1xuXG5jb25zdCBTdHlsZWRNb2RhbEZvb3RlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICBgfTtcblxuICAke21lZGlhLnBhbG1gXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gIGB9O1xuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsRm9vdGVyWn07XG5gO1xuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlQ29sb3JMVH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxCdXR0b25afTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0cHg7XG4gIHJpZ2h0OiAyNHB4O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBGb290ZXJBY3Rpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IGRlZmF1bHRDYW5jZWxCdXR0b24gPSB7XG4gIGxpbms6IHRydWUsXG4gIGxhcmdlOiB0cnVlLFxuICBjaGlsZHJlbjogJ0NhbmNlbCdcbn07XG5cbmNvbnN0IGRlZmF1bHRDb25maXJtQnV0dG9uID0ge1xuICBsYXJnZTogdHJ1ZSxcbiAgd2lkdGg6ICcxNjBweCcsXG4gIGNoaWxkcmVuOiAnQ29uZmlybSdcbn07XG5cbmV4cG9ydCBjb25zdCBNb2RhbEZvb3RlciA9ICh7Y2FuY2VsLCBjb25maXJtLCBjYW5jZWxCdXR0b24sIGNvbmZpcm1CdXR0b259KSA9PiB7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvblByb3BzID0gey4uLmRlZmF1bHRDYW5jZWxCdXR0b24sIC4uLmNhbmNlbEJ1dHRvbn07XG4gIGNvbnN0IGNvbmZpcm1CdXR0b25Qcm9wcyA9IHsuLi5kZWZhdWx0Q29uZmlybUJ1dHRvbiwgLi4uY29uZmlybUJ1dHRvbn07XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZE1vZGFsRm9vdGVyIGNsYXNzTmFtZT1cIm1vZGFsLS1mb290ZXJcIj5cbiAgICAgIDxGb290ZXJBY3Rpb25XcmFwcGVyPlxuICAgICAgICA8QnV0dG9uIHsuLi5jYW5jZWxCdXR0b25Qcm9wc30gb25DbGljaz17Y2FuY2VsfT5cbiAgICAgICAgICB7Y2FuY2VsQnV0dG9uUHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHsuLi5jb25maXJtQnV0dG9uUHJvcHN9IG9uQ2xpY2s9e2NvbmZpcm19PlxuICAgICAgICAgIHtjb25maXJtQnV0dG9uUHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb290ZXJBY3Rpb25XcmFwcGVyPlxuICAgIDwvU3R5bGVkTW9kYWxGb290ZXI+XG4gICk7XG59O1xuXG5jbGFzcyBNb2RhbERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29uZmlybUJ1dHRvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb25maXJtQnV0dG9uTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2FuY2VsQnV0dG9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNhbmNlbEJ1dHRvbkxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNzc1N0eWxlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZm9vdGVyOiBmYWxzZSxcbiAgICBjbG9zZTogdHJ1ZSxcbiAgICBvbkNvbmZpcm06ICgpID0+IHt9LFxuICAgIG9uQ2FuY2VsOiAoKSA9PiB7fSxcbiAgICBjYW5jZWxCdXR0b246IGRlZmF1bHRDYW5jZWxCdXR0b24sXG4gICAgY29uZmlybUJ1dHRvbjogZGVmYXVsdENvbmZpcm1CdXR0b24sXG4gICAgY3NzU3R5bGU6IFtdXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBhcmlhSGlkZUFwcD17ZmFsc2V9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAocHJvcHMudGhlbWUgJiYgcHJvcHMudGhlbWUubW9kYWxPdmVybGF5QmdkKSB8fCAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgICAgICAgIHpJbmRleDogKHByb3BzLnRoZW1lICYmIHByb3BzLnRoZW1lLm1vZGFsT3ZlckxheVopIHx8IDEwMDAsXG4gICAgICAgICAgICAvLyBpbiBjYXNlIHdlIHdhbnQgdG8gb3ZlcnJpZGUgdGhlIG1vZGFsIGRpYWxvZyBzdHlsZVxuICAgICAgICAgICAgLi4ucHJvcHMuc3R5bGVcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxNb2RhbENvbnRlbnRXcmFwcGVyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtLXdyYXBwZXJcIlxuICAgICAgICAgIGNzc1N0eWxlPXtwcm9wcy5jc3NTdHlsZX1cbiAgICAgICAgICBmb290ZXI9e3Byb3BzLmZvb3Rlcn1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5jbG9zZSAmJiAoXG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gY2xhc3NOYW1lPVwibW9kYWwtLWNsb3NlXCIgb25DbGljaz17cHJvcHMub25DYW5jZWx9PlxuICAgICAgICAgICAgICA8RGVsZXRlIGhlaWdodD1cIjE0cHhcIiAvPlxuICAgICAgICAgICAgPC9DbG9zZUJ1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cHJvcHMudGl0bGUgJiYgPE1vZGFsVGl0bGUgY2xhc3NOYW1lPVwibW9kYWwtLXRpdGxlXCI+e3Byb3BzLnRpdGxlfTwvTW9kYWxUaXRsZT59XG4gICAgICAgICAgICA8TW9kYWxDb250ZW50IGNsYXNzTmFtZT1cIm1vZGFsLS1ib2R5XCI+e3Byb3BzLmNoaWxkcmVufTwvTW9kYWxDb250ZW50PlxuICAgICAgICAgICAge3Byb3BzLmZvb3RlciAmJiAoXG4gICAgICAgICAgICAgIDxNb2RhbEZvb3RlclxuICAgICAgICAgICAgICAgIGNhbmNlbD17cHJvcHMub25DYW5jZWx9XG4gICAgICAgICAgICAgICAgY29uZmlybT17cHJvcHMub25Db25maXJtfVxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbj17cHJvcHMuY2FuY2VsQnV0dG9ufVxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b249e3Byb3BzLmNvbmZpcm1CdXR0b259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsQ29udGVudFdyYXBwZXI+XG4gICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgU3R5bGVkTW9kYWwgPSBzdHlsZWQoTW9kYWxEaWFsb2cpYFxuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcblxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuICBgfTtcblxuICAke21lZGlhLnBhbG1gXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGB9O1xuXG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkTW9kYWw7XG4iXX0=