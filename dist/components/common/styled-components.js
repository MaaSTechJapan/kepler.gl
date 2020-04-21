"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFilterContent = exports.MapControlButton = exports.BottomWidgetInner = exports.WidgetContainer = exports.StyledType = exports.StyledFilteredOption = exports.StyledExportSection = exports.StyledMapContainer = exports.StyledModalInputFootnote = exports.StyledModalSection = exports.StyledModalVerticalPanel = exports.StyledModalContent = exports.Table = exports.SelectionButton = exports.DatasetSquare = exports.ButtonGroup = exports.StyledPanelDropdown = exports.StyledPanelHeader = exports.InlineInput = exports.TextAreaLight = exports.TextArea = exports.InputLight = exports.Input = exports.Button = exports.Tooltip = exports.SidePanelDivider = exports.SidePanelSection = exports.PanelContent = exports.PanelHeaderContent = exports.PanelHeaderTitle = exports.PanelLabelBold = exports.PanelLabelWrapper = exports.PanelLabel = exports.SBFlexboxItem = exports.SpaceBetweenFlexbox = exports.CenterVerticalFlexbox = exports.CenterFlexbox = exports.IconRoundSmall = exports.SelectTextBold = exports.SelectText = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _mediaBreakpoints = require("../../styles/media-breakpoints");

function _templateObject44() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px;\n"]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);\n  height: 32px;\n  width: 32px;\n  padding: 0;\n  border-radius: 0;\n  background-color: ", ";\n  color: ", ";\n\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n  svg {\n    margin-right: 0;\n  }\n"]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: ", ";\n  position: relative;\n  margin-top: ", "px;\n"]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: 1;\n"]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 2px;\n  border: 1px solid\n    ", ";\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  height: 100px;\n  margin: 4px;\n  padding: 6px 10px;\n  width: 100px;\n\n  :hover {\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-radius: 2px;\n  border: 1px solid\n    ", ";\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  height: 60px;\n  justify-content: center;\n  margin: 4px;\n  padding: 8px 12px;\n  width: 140px;\n\n  :hover {\n    border: 1px solid ", ";\n  }\n\n  .filtered-title {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n  }\n  .filtered-subtitle {\n    color: ", ";\n    font-size: 11px;\n  }\n"]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  margin: 35px 0;\n  width: 100%;\n  color: ", ";\n  font-size: 12px;\n  opacity: ", ";\n  pointer-events: ", ";\n\n  .description {\n    width: 185px;\n    .title {\n      font-weight: 500;\n    }\n    .subtitle {\n      color: ", ";\n      font-size: 11px;\n    }\n  }\n  .warning {\n    color: ", ";\n    font-weight: 500;\n  }\n  .description.full {\n    width: 100%;\n  }\n  .selection {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n    padding-left: 50px;\n\n    select {\n      background-color: white;\n      border-radius: 1px;\n      display: inline-block;\n      font: inherit;\n      line-height: 1.5em;\n      padding: 0.5em 3.5em 0.5em 1em;\n      margin: 0;\n      box-sizing: border-box;\n      appearance: none;\n      width: 250px;\n      height: 36px;\n\n      background-image: linear-gradient(45deg, transparent 50%, gray 50%),\n        linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);\n      background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),\n        calc(100% - 2.5em) 4.5em;\n      background-size: 5px 5px, 5px 5px, 1px 1.5em;\n      background-repeat: no-repeat;\n    }\n\n    select:focus {\n      background-image: linear-gradient(45deg, green 50%, transparent 50%),\n        linear-gradient(135deg, transparent 50%, green 50%), linear-gradient(to right, #ccc, #ccc);\n      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 4.5em;\n      background-size: 5px 5px, 5px 5px, 1px 1.5em;\n      background-repeat: no-repeat;\n      border-color: green;\n      outline: 0;\n    }\n  }\n"]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .mapboxgl-map .mapboxgl-missing-css {\n    display: none;\n  }\n"]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  color: ", ";\n  font-size: 10px;\n"]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 24px;\n  "]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 32px;\n\n  .modal-section-title {\n    font-weight: 500;\n  }\n  .modal-section-subtitle {\n    color: ", ";\n  }\n\n  input {\n    margin-top: 8px;\n  }\n\n  ", ";\n  ", ";\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      margin-top: 0;\n    "]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  font-size: 12px;\n\n  .modal-section:first-child {\n    margin-top: 24px;\n    ", ";\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n    padding: 16px ", ";\n    margin: 0 -", ";\n  "]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  font-size: 10px;\n  padding: 24px ", ";\n  margin: 0 -", ";\n  justify-content: space-between;\n  ", ";\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  border-spacing: 0;\n\n  thead {\n    tr th {\n      background: ", ";\n      color: ", ";\n      padding: 18px 12px;\n      text-align: start;\n    }\n  }\n\n  tbody {\n    tr td {\n      border-bottom: ", ";\n      padding: 12px;\n    }\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 2px;\n  border: 1px solid\n    ", ";\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  margin-right: 6px;\n  padding: 6px 10px;\n\n  :hover {\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background-color: rgb(", ");\n  margin-right: 12px;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  .button {\n    border-radius: 0;\n    margin-left: 2px;\n  }\n  .button:first-child {\n    border-bottom-left-radius: ", ";\n    border-top-left-radius: ", ";\n    margin-left: 0;\n  }\n  .button:last-child {\n    border-bottom-right-radius: ", ";\n    border-top-right-radius: ", ";\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  background-color: ", ";\n  overflow-y: auto;\n  box-shadow: ", ";\n  border-radius: ", ";\n  margin-top: 2px;\n  max-height: 500px;\n  position: relative;\n  z-index: 999;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-left: 3px solid\n    rgb(\n      ", "\n    );\n  padding: 0 10px 0 0;\n  height: ", "px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: ", ";\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  height: auto;\n  white-space: pre-wrap;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: ", ";\n  font-weight: 500;\n  justify-content: center;\n  letter-spacing: 0.3px;\n  line-height: 14px;\n  outline: 0;\n  padding: ", ";\n  text-align: center;\n  transition: ", ";\n  vertical-align: middle;\n  width: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  svg {\n    margin-right: ", ";\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.__react_component_tooltip {\n    font-size: 9.5px;\n    font-weight: 500;\n    padding: 7px 18px;\n\n    &.type-dark {\n      background-color: ", ";\n      color: ", ";\n      &.place-bottom {\n        :after {\n          border-bottom-color: ", ";\n        }\n      }\n\n      &.place-top {\n        :after {\n          border-top-color: ", ";\n        }\n      }\n\n      &.place-right {\n        :after {\n          border-right-color: ", ";\n        }\n      }\n\n      &.place-left {\n        :after {\n          border-left-color: ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: 1px solid ", ";\n  height: 12px;\n  margin-bottom: 12px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 12px;\n  opacity: ", ";\n  pointer-events: ", ";\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  padding-left: 12px;\n\n  .icon {\n    color: ", ";\n    display: flex;\n    align-items: center;\n    margin-right: 12px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 13px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 500;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: self-start;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 400;\n  margin-bottom: 4px;\n  text-transform: capitalize;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  margin-left: 16px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-left: -16px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: ", "; // updated after checking sketch file\n  color: ", ";\n  align-items: center;\n  justify-content: center;\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: 500;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: 400;\n\n  i {\n    font-size: 13px;\n    margin-right: 6px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SelectText = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.selectFontSize;
});

exports.SelectText = SelectText;
var SelectTextBold = (0, _styledComponents["default"])(SelectText)(_templateObject2(), function (props) {
  return props.theme.textColor;
});
exports.SelectTextBold = SelectTextBold;

var IconRoundSmall = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.secondaryBtnBgdHover;
}, function (props) {
  return props.theme.secondaryBtnColor;
}, function (props) {
  return props.theme.secondaryBtnBgdHover;
});

exports.IconRoundSmall = IconRoundSmall;

var CenterFlexbox = _styledComponents["default"].div(_templateObject4());

exports.CenterFlexbox = CenterFlexbox;

var CenterVerticalFlexbox = _styledComponents["default"].div(_templateObject5());

exports.CenterVerticalFlexbox = CenterVerticalFlexbox;

var SpaceBetweenFlexbox = _styledComponents["default"].div(_templateObject6());

exports.SpaceBetweenFlexbox = SpaceBetweenFlexbox;

var SBFlexboxItem = _styledComponents["default"].div(_templateObject7());

exports.SBFlexboxItem = SBFlexboxItem;

var PanelLabel = _styledComponents["default"].label.attrs({
  className: 'side-panel-panel__label'
})(_templateObject8(), function (props) {
  return props.theme.labelColor;
});

exports.PanelLabel = PanelLabel;

var PanelLabelWrapper = _styledComponents["default"].div.attrs({
  className: 'side-panel-panel__label-wrapper'
})(_templateObject9());

exports.PanelLabelWrapper = PanelLabelWrapper;
var PanelLabelBold = (0, _styledComponents["default"])(PanelLabel)(_templateObject10());
exports.PanelLabelBold = PanelLabelBold;

var PanelHeaderTitle = _styledComponents["default"].span.attrs({
  className: 'side-panel-panel__header__title'
})(_templateObject11(), function (props) {
  return props.theme.textColor;
});

exports.PanelHeaderTitle = PanelHeaderTitle;

var PanelHeaderContent = _styledComponents["default"].div(_templateObject12(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.labelColor;
});

exports.PanelHeaderContent = PanelHeaderContent;

var PanelContent = _styledComponents["default"].div.attrs({
  className: 'side-panel-panel__content'
})(_templateObject13(), function (props) {
  return props.theme.panelBackground;
});

exports.PanelContent = PanelContent;

var SidePanelSection = _styledComponents["default"].div.attrs({
  className: 'side-panel-section'
})(_templateObject14(), function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
});

exports.SidePanelSection = SidePanelSection;

var SidePanelDivider = _styledComponents["default"].div.attrs({
  className: 'side-panel-divider'
})(_templateObject15(), function (props) {
  return props.theme.panelBorderColor;
});

exports.SidePanelDivider = SidePanelDivider;
var Tooltip = (0, _styledComponents["default"])(_reactTooltip["default"])(_templateObject16(), function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
});
exports.Tooltip = Tooltip;

var Button = _styledComponents["default"].div.attrs({
  className: 'button'
})(_templateObject17(), function (props) {
  return props.negative ? props.theme.negativeBtnBgd : props.secondary ? props.theme.secondaryBtnBgd : props.link ? props.theme.linkBtnBgd : props.floating ? props.theme.floatingBtnBgd : props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.negative ? props.theme.negativeBtnColor : props.secondary ? props.theme.secondaryBtnColor : props.link ? props.theme.linkBtnColor : props.floating ? props.theme.floatingBtnColor : props.theme.primaryBtnColor;
}, function (props) {
  return props.large ? '14px' : props.small ? '10px' : '11px';
}, function (props) {
  return props.large ? '14px 32px' : props.small ? '6px 9px' : '9px 12px';
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return props.negative ? props.theme.negativeBtnBgdHover : props.secondary ? props.theme.secondaryBtnBgdHover : props.link ? props.theme.linkBtnActBgdHover : props.floating ? props.theme.floatingBtnBgdHover : props.theme.primaryBtnBgdHover;
}, function (props) {
  return props.negative ? props.theme.negativeBtnActColor : props.secondary ? props.theme.secondaryBtnActColor : props.link ? props.theme.linkBtnActColor : props.floating ? props.theme.floatingBtnActColor : props.theme.primaryBtnActColor;
}, function (props) {
  return props.large ? '10px' : props.small ? '6px' : '8px';
});

exports.Button = Button;

var Input = _styledComponents["default"].input(_templateObject18(), function (props) {
  return props.secondary ? props.theme.secondaryInput : props.theme.input;
});

exports.Input = Input;

var InputLight = _styledComponents["default"].input(_templateObject19(), function (props) {
  return props.theme.inputLT;
});

exports.InputLight = InputLight;

var TextArea = _styledComponents["default"].textarea(_templateObject20(), function (props) {
  return props.secondary ? props.theme.secondaryInput : props.theme.input;
});

exports.TextArea = TextArea;

var TextAreaLight = _styledComponents["default"].textarea(_templateObject21(), function (props) {
  return props.theme.inputLT;
});

exports.TextAreaLight = TextAreaLight;
var InlineInput = (0, _styledComponents["default"])(Input)(_templateObject22(), function (props) {
  return props.theme.inlineInput;
});
exports.InlineInput = InlineInput;

var StyledPanelHeader = _styledComponents["default"].div(_templateObject23(), function (props) {
  return props.active ? props.theme.panelBackgroundHover : props.theme.panelBackground;
}, function (props) {
  return props.labelRCGColorValues ? props.labelRCGColorValues.join(',') : 'transparent';
}, function (props) {
  return props.theme.panelHeaderHeight;
}, function (props) {
  return props.theme.transition;
});

exports.StyledPanelHeader = StyledPanelHeader;

var StyledPanelDropdown = _styledComponents["default"].div(_templateObject24(), function (props) {
  return props.theme.panelDropdownScrollBar;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBoxShadow;
}, function (props) {
  return props.theme.panelBorderRadius;
});

exports.StyledPanelDropdown = StyledPanelDropdown;

var ButtonGroup = _styledComponents["default"].div(_templateObject25(), function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
});

exports.ButtonGroup = ButtonGroup;

var DatasetSquare = _styledComponents["default"].div(_templateObject26(), function (props) {
  return props.color.join(',');
});

exports.DatasetSquare = DatasetSquare;

var SelectionButton = _styledComponents["default"].div(_templateObject27(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
});

exports.SelectionButton = SelectionButton;

var Table = _styledComponents["default"].table(_templateObject28(), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.titleColorLT;
}, function (props) {
  return props.theme.panelBorderLT;
});

exports.Table = Table;

var StyledModalContent = _styledComponents["default"].div(_templateObject29(), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.modalLateralPadding;
}, function (props) {
  return props.theme.modalLateralPadding;
}, _mediaBreakpoints.media.portable(_templateObject30(), function (props) {
  return props.theme.modalPortableLateralPadding;
}, function (props) {
  return props.theme.modalPortableLateralPadding;
}));

exports.StyledModalContent = StyledModalContent;

var StyledModalVerticalPanel = _styledComponents["default"].div.attrs({
  className: 'modal-vertical-panel'
})(_templateObject31(), _mediaBreakpoints.media.palm(_templateObject32()));

exports.StyledModalVerticalPanel = StyledModalVerticalPanel;

var StyledModalSection = _styledComponents["default"].div.attrs({
  className: 'modal-section'
})(_templateObject33(), function (props) {
  return props.theme.subtextColorLT;
}, _mediaBreakpoints.media.portable(_templateObject34()), _mediaBreakpoints.media.palm(_templateObject35()));

exports.StyledModalSection = StyledModalSection;

var StyledModalInputFootnote = _styledComponents["default"].div.attrs({
  className: 'modal-input__footnote'
})(_templateObject36(), function (props) {
  return props.error ? props.theme.errorColor : props.theme.subtextColorLT;
});
/**
 * Newer versions of mapbox.gl display an error message banner on top of the map by default
 * which will cause the map to display points in the wrong locations
 * This workaround will hide the error banner.
 */


exports.StyledModalInputFootnote = StyledModalInputFootnote;

var StyledMapContainer = _styledComponents["default"].div(_templateObject37());

exports.StyledMapContainer = StyledMapContainer;

var StyledExportSection = _styledComponents["default"].div(_templateObject38(), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.disabled ? 0.3 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return props.theme.subtextColorLT;
}, function (props) {
  return props.theme.errorColor;
});

exports.StyledExportSection = StyledExportSection;

var StyledFilteredOption = _styledComponents["default"].div(_templateObject39(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.textColor;
});

exports.StyledFilteredOption = StyledFilteredOption;

var StyledType = _styledComponents["default"].div(_templateObject40(), function (props) {
  return props.selected ? props.theme.primaryBtnBgdHover : props.theme.selectBorderColorLT;
}, function (props) {
  return props.selected ? props.theme.primaryBtnBgdHover : props.theme.selectBorderColorLT;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
});

exports.StyledType = StyledType;

var WidgetContainer = _styledComponents["default"].div(_templateObject41());

exports.WidgetContainer = WidgetContainer;

var BottomWidgetInner = _styledComponents["default"].div(_templateObject42(), function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return "".concat(props.theme.bottomInnerPdVert, "px ").concat(props.theme.bottomInnerPdSide, "px");
}, function (props) {
  return props.theme.bottomPanelGap;
});

exports.BottomWidgetInner = BottomWidgetInner;
var MapControlButton = (0, _styledComponents["default"])(Button).attrs({
  className: 'map-control-button'
})(_templateObject43(), function (props) {
  return props.active ? props.theme.floatingBtnBgdHover : props.theme.floatingBtnBgd;
}, function (props) {
  return props.active ? props.theme.floatingBtnActColor : props.theme.floatingBtnColor;
}, function (props) {
  return props.theme.floatingBtnBgdHover;
}, function (props) {
  return props.theme.floatingBtnActColor;
});
exports.MapControlButton = MapControlButton;

var StyledFilterContent = _styledComponents["default"].div(_templateObject44(), function (props) {
  return props.theme.panelBackground;
});

exports.StyledFilterContent = StyledFilterContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cy5qcyJdLCJuYW1lcyI6WyJTZWxlY3RUZXh0Iiwic3R5bGVkIiwic3BhbiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwic2VsZWN0Rm9udFNpemUiLCJTZWxlY3RUZXh0Qm9sZCIsInRleHRDb2xvciIsIkljb25Sb3VuZFNtYWxsIiwiZGl2Iiwic2Vjb25kYXJ5QnRuQmdkSG92ZXIiLCJzZWNvbmRhcnlCdG5Db2xvciIsIkNlbnRlckZsZXhib3giLCJDZW50ZXJWZXJ0aWNhbEZsZXhib3giLCJTcGFjZUJldHdlZW5GbGV4Ym94IiwiU0JGbGV4Ym94SXRlbSIsIlBhbmVsTGFiZWwiLCJsYWJlbCIsImF0dHJzIiwiY2xhc3NOYW1lIiwiUGFuZWxMYWJlbFdyYXBwZXIiLCJQYW5lbExhYmVsQm9sZCIsIlBhbmVsSGVhZGVyVGl0bGUiLCJQYW5lbEhlYWRlckNvbnRlbnQiLCJQYW5lbENvbnRlbnQiLCJwYW5lbEJhY2tncm91bmQiLCJTaWRlUGFuZWxTZWN0aW9uIiwiZGlzYWJsZWQiLCJTaWRlUGFuZWxEaXZpZGVyIiwicGFuZWxCb3JkZXJDb2xvciIsIlRvb2x0aXAiLCJSZWFjdFRvb2x0aXAiLCJ0b29sdGlwQmciLCJ0b29sdGlwQ29sb3IiLCJCdXR0b24iLCJuZWdhdGl2ZSIsIm5lZ2F0aXZlQnRuQmdkIiwic2Vjb25kYXJ5Iiwic2Vjb25kYXJ5QnRuQmdkIiwibGluayIsImxpbmtCdG5CZ2QiLCJmbG9hdGluZyIsImZsb2F0aW5nQnRuQmdkIiwicHJpbWFyeUJ0bkJnZCIsInByaW1hcnlCdG5SYWRpdXMiLCJuZWdhdGl2ZUJ0bkNvbG9yIiwibGlua0J0bkNvbG9yIiwiZmxvYXRpbmdCdG5Db2xvciIsInByaW1hcnlCdG5Db2xvciIsImxhcmdlIiwic21hbGwiLCJ0cmFuc2l0aW9uIiwid2lkdGgiLCJuZWdhdGl2ZUJ0bkJnZEhvdmVyIiwibGlua0J0bkFjdEJnZEhvdmVyIiwiZmxvYXRpbmdCdG5CZ2RIb3ZlciIsInByaW1hcnlCdG5CZ2RIb3ZlciIsIm5lZ2F0aXZlQnRuQWN0Q29sb3IiLCJzZWNvbmRhcnlCdG5BY3RDb2xvciIsImxpbmtCdG5BY3RDb2xvciIsImZsb2F0aW5nQnRuQWN0Q29sb3IiLCJwcmltYXJ5QnRuQWN0Q29sb3IiLCJJbnB1dCIsImlucHV0Iiwic2Vjb25kYXJ5SW5wdXQiLCJJbnB1dExpZ2h0IiwiaW5wdXRMVCIsIlRleHRBcmVhIiwidGV4dGFyZWEiLCJUZXh0QXJlYUxpZ2h0IiwiSW5saW5lSW5wdXQiLCJpbmxpbmVJbnB1dCIsIlN0eWxlZFBhbmVsSGVhZGVyIiwiYWN0aXZlIiwicGFuZWxCYWNrZ3JvdW5kSG92ZXIiLCJsYWJlbFJDR0NvbG9yVmFsdWVzIiwiam9pbiIsInBhbmVsSGVhZGVySGVpZ2h0IiwiU3R5bGVkUGFuZWxEcm9wZG93biIsInBhbmVsRHJvcGRvd25TY3JvbGxCYXIiLCJwYW5lbEJveFNoYWRvdyIsInBhbmVsQm9yZGVyUmFkaXVzIiwiQnV0dG9uR3JvdXAiLCJEYXRhc2V0U3F1YXJlIiwiY29sb3IiLCJTZWxlY3Rpb25CdXR0b24iLCJzZWxlY3RlZCIsInNlbGVjdEJvcmRlckNvbG9yTFQiLCJhdmFpbGFibGUiLCJUYWJsZSIsInRhYmxlIiwicGFuZWxCYWNrZ3JvdW5kTFQiLCJ0aXRsZUNvbG9yTFQiLCJwYW5lbEJvcmRlckxUIiwiU3R5bGVkTW9kYWxDb250ZW50IiwidGV4dENvbG9yTFQiLCJtb2RhbExhdGVyYWxQYWRkaW5nIiwibWVkaWEiLCJwb3J0YWJsZSIsIm1vZGFsUG9ydGFibGVMYXRlcmFsUGFkZGluZyIsIlN0eWxlZE1vZGFsVmVydGljYWxQYW5lbCIsInBhbG0iLCJTdHlsZWRNb2RhbFNlY3Rpb24iLCJzdWJ0ZXh0Q29sb3JMVCIsIlN0eWxlZE1vZGFsSW5wdXRGb290bm90ZSIsImVycm9yIiwiZXJyb3JDb2xvciIsIlN0eWxlZE1hcENvbnRhaW5lciIsIlN0eWxlZEV4cG9ydFNlY3Rpb24iLCJTdHlsZWRGaWx0ZXJlZE9wdGlvbiIsIlN0eWxlZFR5cGUiLCJXaWRnZXRDb250YWluZXIiLCJCb3R0b21XaWRnZXRJbm5lciIsImJvdHRvbUlubmVyUGRWZXJ0IiwiYm90dG9tSW5uZXJQZFNpZGUiLCJib3R0b21QYW5lbEdhcCIsIk1hcENvbnRyb2xCdXR0b24iLCJTdHlsZWRGaWx0ZXJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLFVBQVUsR0FBR0MsNkJBQU9DLElBQVYsb0JBQ1osVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBRE8sRUFFUixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLGNBQWhCO0FBQUEsQ0FGRyxDQUFoQjs7O0FBV0EsSUFBTUMsY0FBYyxHQUFHLGtDQUFPUCxVQUFQLENBQUgscUJBQ2hCLFVBQUFHLEtBQUs7QUFBQSxTQUFJQSxLQUFL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LENBQUNDLEtBQU4sQ0FBWXlELG1CQUEzQixHQUFpRDFELEtBQUssQ0FBQ0MsS0FBTixDQUFZNEMsZ0JBRGpEO0FBQUEsQ0FWYSxFQWlCTCxVQUFBN0MsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZb0QsbUJBQWhCO0FBQUEsQ0FqQkEsRUFrQmhCLFVBQUFyRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVl5RCxtQkFBaEI7QUFBQSxDQWxCVyxDQUF0Qjs7O0FBeUJBLElBQU15RCxtQkFBbUIsR0FBR3JILDZCQUFPUyxHQUFWLHNCQUNWLFVBQUFQLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWXNCLGVBQWhCO0FBQUEsQ0FESyxDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnO1xyXG5pbXBvcnQge21lZGlhfSBmcm9tICdzdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdFRleHQgPSBzdHlsZWQuc3BhbmBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcclxuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VsZWN0Rm9udFNpemV9O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdFRleHRCb2xkID0gc3R5bGVkKFNlbGVjdFRleHQpYFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uUm91bmRTbWFsbCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkJnZEhvdmVyfTsgLy8gdXBkYXRlZCBhZnRlciBjaGVja2luZyBza2V0Y2ggZmlsZVxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkNvbG9yfTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2RIb3Zlcn07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENlbnRlckZsZXhib3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDZW50ZXJWZXJ0aWNhbEZsZXhib3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNwYWNlQmV0d2VlbkZsZXhib3ggPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTQkZsZXhib3hJdGVtID0gc3R5bGVkLmRpdmBcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxMYWJlbCA9IHN0eWxlZC5sYWJlbC5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1wYW5lbF9fbGFiZWwnXHJcbn0pYFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxMYWJlbFdyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19sYWJlbC13cmFwcGVyJ1xyXG59KWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhbmVsTGFiZWxCb2xkID0gc3R5bGVkKFBhbmVsTGFiZWwpYFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJUaXRsZSA9IHN0eWxlZC5zcGFuLmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19oZWFkZXJfX3RpdGxlJ1xyXG59KWBcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC40M3B4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhbmVsSGVhZGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG5cclxuICAuaWNvbiB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19jb250ZW50J1xyXG59KWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XHJcbiAgcGFkZGluZzogMTJweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlUGFuZWxTZWN0aW9uID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1zZWN0aW9uJ1xyXG59KWBcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC40IDogMSl9O1xyXG4gIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/ICdub25lJyA6ICdhbGwnKX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZVBhbmVsRGl2aWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWwtZGl2aWRlcidcclxufSlgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJDb2xvcn07XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9IHN0eWxlZChSZWFjdFRvb2x0aXApYFxyXG4gICYuX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcCB7XHJcbiAgICBmb250LXNpemU6IDkuNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmc6IDdweCAxOHB4O1xyXG5cclxuICAgICYudHlwZS1kYXJrIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQ29sb3J9O1xyXG4gICAgICAmLnBsYWNlLWJvdHRvbSB7XHJcbiAgICAgICAgOmFmdGVyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYucGxhY2UtdG9wIHtcclxuICAgICAgICA6YWZ0ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5wbGFjZS1yaWdodCB7XHJcbiAgICAgICAgOmFmdGVyIHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5wbGFjZS1sZWZ0IHtcclxuICAgICAgICA6YWZ0ZXIge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnYnV0dG9uJ1xyXG59KWBcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLm5lZ2F0aXZlXHJcbiAgICAgID8gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5CZ2RcclxuICAgICAgOiBwcm9wcy5zZWNvbmRhcnlcclxuICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2RcclxuICAgICAgOiBwcm9wcy5saW5rXHJcbiAgICAgID8gcHJvcHMudGhlbWUubGlua0J0bkJnZFxyXG4gICAgICA6IHByb3BzLmZsb2F0aW5nXHJcbiAgICAgID8gcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5CZ2RcclxuICAgICAgOiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcclxuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5uZWdhdGl2ZVxyXG4gICAgICA/IHByb3BzLnRoZW1lLm5lZ2F0aXZlQnRuQ29sb3JcclxuICAgICAgOiBwcm9wcy5zZWNvbmRhcnlcclxuICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5Db2xvclxyXG4gICAgICA6IHByb3BzLmxpbmtcclxuICAgICAgPyBwcm9wcy50aGVtZS5saW5rQnRuQ29sb3JcclxuICAgICAgOiBwcm9wcy5mbG9hdGluZ1xyXG4gICAgICA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQ29sb3JcclxuICAgICAgOiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQ29sb3J9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmb250LXNpemU6ICR7cHJvcHMgPT4gKHByb3BzLmxhcmdlID8gJzE0cHgnIDogcHJvcHMuc21hbGwgPyAnMTBweCcgOiAnMTFweCcpfTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gKHByb3BzLmxhcmdlID8gJzE0cHggMzJweCcgOiBwcm9wcy5zbWFsbCA/ICc2cHggOXB4JyA6ICc5cHggMTJweCcpfTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRoIHx8ICdhdXRvJ307XHJcbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAwLjQgOiAxKX07XHJcbiAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gJ25vbmUnIDogJ2FsbCcpfTtcclxuXHJcbiAgOmhvdmVyLFxyXG4gIDpmb2N1cyxcclxuICA6YWN0aXZlLFxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cclxuICAgICAgcHJvcHMubmVnYXRpdmVcclxuICAgICAgICA/IHByb3BzLnRoZW1lLm5lZ2F0aXZlQnRuQmdkSG92ZXJcclxuICAgICAgICA6IHByb3BzLnNlY29uZGFyeVxyXG4gICAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkSG92ZXJcclxuICAgICAgICA6IHByb3BzLmxpbmtcclxuICAgICAgICA/IHByb3BzLnRoZW1lLmxpbmtCdG5BY3RCZ2RIb3ZlclxyXG4gICAgICAgIDogcHJvcHMuZmxvYXRpbmdcclxuICAgICAgICA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQmdkSG92ZXJcclxuICAgICAgICA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2RIb3Zlcn07XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PlxyXG4gICAgICBwcm9wcy5uZWdhdGl2ZVxyXG4gICAgICAgID8gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5BY3RDb2xvclxyXG4gICAgICAgIDogcHJvcHMuc2Vjb25kYXJ5XHJcbiAgICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5BY3RDb2xvclxyXG4gICAgICAgIDogcHJvcHMubGlua1xyXG4gICAgICAgID8gcHJvcHMudGhlbWUubGlua0J0bkFjdENvbG9yXHJcbiAgICAgICAgOiBwcm9wcy5mbG9hdGluZ1xyXG4gICAgICAgID8gcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5BY3RDb2xvclxyXG4gICAgICAgIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkFjdENvbG9yfTtcclxuICB9XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmxhcmdlID8gJzEwcHgnIDogcHJvcHMuc21hbGwgPyAnNnB4JyA6ICc4cHgnKX07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gICR7cHJvcHMgPT4gKHByb3BzLnNlY29uZGFyeSA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0IDogcHJvcHMudGhlbWUuaW5wdXQpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dExpZ2h0ID0gc3R5bGVkLmlucHV0YFxyXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRMVH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0QXJlYSA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICAke3Byb3BzID0+IChwcm9wcy5zZWNvbmRhcnkgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dCA6IHByb3BzLnRoZW1lLmlucHV0KX07XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUZXh0QXJlYUxpZ2h0ID0gc3R5bGVkLnRleHRhcmVhYFxyXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRMVH1cclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElubGluZUlucHV0ID0gc3R5bGVkKElucHV0KWBcclxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlubGluZUlucHV0fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxyXG4gICAgcHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXIgOiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWRcclxuICAgIHJnYihcclxuICAgICAgJHtwcm9wcyA9PiAocHJvcHMubGFiZWxSQ0dDb2xvclZhbHVlcyA/IHByb3BzLmxhYmVsUkNHQ29sb3JWYWx1ZXMuam9pbignLCcpIDogJ3RyYW5zcGFyZW50Jyl9XHJcbiAgICApO1xyXG4gIHBhZGRpbmc6IDAgMTBweCAwIDA7XHJcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsSGVhZGVySGVpZ2h0fXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRQYW5lbERyb3Bkb3duID0gc3R5bGVkLmRpdmBcclxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsRHJvcGRvd25TY3JvbGxCYXJ9XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJveFNoYWRvd307XHJcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJvcmRlclJhZGl1c307XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICB9XHJcbiAgLmJ1dHRvbjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICAuYnV0dG9uOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0blJhZGl1c307XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YXNldFNxdWFyZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKCR7cHJvcHMgPT4gcHJvcHMuY29sb3Iuam9pbignLCcpfSk7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdGlvbkJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkXHJcbiAgICAke3Byb3BzID0+IChwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2QgOiBwcm9wcy50aGVtZS5zZWxlY3RCb3JkZXJDb2xvckxUKX07XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZCA6IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFQpfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBwYWRkaW5nOiA2cHggMTBweDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmF2YWlsYWJsZSAmJiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMuYXZhaWxhYmxlICYmIHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUYWJsZSA9IHN0eWxlZC50YWJsZWBcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxuXHJcbiAgdGhlYWQge1xyXG4gICAgdHIgdGgge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZExUfTtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVDb2xvckxUfTtcclxuICAgICAgcGFkZGluZzogMThweCAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRib2R5IHtcclxuICAgIHRyIHRkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJvcmRlckxUfTtcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTW9kYWxDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZExUfTtcclxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiAyNHB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxMYXRlcmFsUGFkZGluZ307XHJcbiAgbWFyZ2luOiAwIC0ke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsTGF0ZXJhbFBhZGRpbmd9O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDE2cHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFBvcnRhYmxlTGF0ZXJhbFBhZGRpbmd9O1xyXG4gICAgbWFyZ2luOiAwIC0ke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsUG9ydGFibGVMYXRlcmFsUGFkZGluZ307XHJcbiAgYH07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkTW9kYWxWZXJ0aWNhbFBhbmVsID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnbW9kYWwtdmVydGljYWwtcGFuZWwnXHJcbn0pYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gIC5tb2RhbC1zZWN0aW9uOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAke21lZGlhLnBhbG1gXHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBgfTtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRNb2RhbFNlY3Rpb24gPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdtb2RhbC1zZWN0aW9uJ1xyXG59KWBcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG5cclxuICAubW9kYWwtc2VjdGlvbi10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAubW9kYWwtc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVH07XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG5cclxuICAke21lZGlhLnBvcnRhYmxlYFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBgfTtcclxuICAke21lZGlhLnBhbG1gXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGB9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE1vZGFsSW5wdXRGb290bm90ZSA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ21vZGFsLWlucHV0X19mb290bm90ZSdcclxufSlgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5lcnJvciA/IHByb3BzLnRoZW1lLmVycm9yQ29sb3IgOiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVCl9O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuYDtcclxuLyoqXHJcbiAqIE5ld2VyIHZlcnNpb25zIG9mIG1hcGJveC5nbCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgYmFubmVyIG9uIHRvcCBvZiB0aGUgbWFwIGJ5IGRlZmF1bHRcclxuICogd2hpY2ggd2lsbCBjYXVzZSB0aGUgbWFwIHRvIGRpc3BsYXkgcG9pbnRzIGluIHRoZSB3cm9uZyBsb2NhdGlvbnNcclxuICogVGhpcyB3b3JrYXJvdW5kIHdpbGwgaGlkZSB0aGUgZXJyb3IgYmFubmVyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN0eWxlZE1hcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgLm1hcGJveGdsLW1hcCAubWFwYm94Z2wtbWlzc2luZy1jc3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRXhwb3J0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbjogMzVweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAwLjMgOiAxKX07XHJcbiAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gJ25vbmUnIDogJ2FsbCcpfTtcclxuXHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIHdpZHRoOiAxODVweDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVH07XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIH1cclxuICB9XHJcbiAgLndhcm5pbmcge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3JDb2xvcn07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAuZGVzY3JpcHRpb24uZnVsbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnNlbGVjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgaGVpZ2h0OiAzNnB4O1xyXG5cclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyYXkgNTAlKSxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjY2NjKTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksXHJcbiAgICAgICAgY2FsYygxMDAlIC0gMi41ZW0pIDQuNWVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDVweCA1cHgsIDVweCA1cHgsIDFweCAxLjVlbTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGdyZWVuIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyZWVuIDUwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgI2NjYyk7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIDE1cHgpIDFlbSwgY2FsYygxMDAlIC0gMjBweCkgMWVtLCBjYWxjKDEwMCUgLSAyLjVlbSkgNC41ZW07XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNXB4IDVweCwgNXB4IDVweCwgMXB4IDEuNWVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG4gICAgICBvdXRsaW5lOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRGaWx0ZXJlZE9wdGlvbiA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWRcclxuICAgICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZCA6IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFQpfTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDRweDtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICB3aWR0aDogMTQwcHg7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlcmVkLXRpdGxlIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIC5maWx0ZXJlZC1zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRUeXBlID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWRcclxuICAgICR7cHJvcHMgPT4gKHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZEhvdmVyIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVCl9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+XHJcbiAgICBwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2RIb3ZlciA6IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXZhaWxhYmxlICYmIHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5hdmFpbGFibGUgJiYgcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdpZGdldENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgei1pbmRleDogMTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCb3R0b21XaWRnZXRJbm5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xyXG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gYCR7cHJvcHMudGhlbWUuYm90dG9tSW5uZXJQZFZlcnR9cHggJHtwcm9wcy50aGVtZS5ib3R0b21Jbm5lclBkU2lkZX1weGB9O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvdHRvbVBhbmVsR2FwfXB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hcENvbnRyb2xCdXR0b24gPSBzdHlsZWQoQnV0dG9uKS5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnbWFwLWNvbnRyb2wtYnV0dG9uJ1xyXG59KWBcclxuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQmdkSG92ZXIgOiBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkJnZH07XHJcbiAgY29sb3I6ICR7cHJvcHMgPT5cclxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQWN0Q29sb3IgOiBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkNvbG9yfTtcclxuXHJcbiAgOmhvdmVyLFxyXG4gIDpmb2N1cyxcclxuICA6YWN0aXZlLFxyXG4gICYuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5CZ2RIb3Zlcn07XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkFjdENvbG9yfTtcclxuICB9XHJcbiAgc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsdGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbmA7XHJcbiJdfQ==