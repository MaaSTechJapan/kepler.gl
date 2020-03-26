"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dropdownWrapperZ = exports.dropdownListBorderTop = exports.dropdownListBgd = exports.dropdownListShadow = exports.dropdownListHighlightBg = exports.selectBorder = exports.selectBorderRadius = exports.selectBorderColorLT = exports.selectBorderColor = exports.selectBackgroundHoverLT = exports.selectBackgroundLT = exports.selectBackgroundHover = exports.selectBackground = exports.selectColorPlaceHolder = exports.selectFontWeightBold = exports.selectFontWeight = exports.selectFontSize = exports.selectActiveBorderColor = exports.selectColorLT = exports.selectColor = exports.secondaryInputBorderActiveColor = exports.secondaryInputBorderColor = exports.secondaryInputColor = exports.secondaryInputBgdActive = exports.secondaryInputBgdHover = exports.secondaryInputBgd = exports.inputPlaceholderFontWeight = exports.inputPlaceholderColor = exports.inputBorderRadius = exports.inputColor = exports.inputBorderActiveColor = exports.inputBorderHoverColor = exports.inputBorderColor = exports.inputBgdActive = exports.inputBgdHover = exports.inputBgd = exports.inputFontWeight = exports.inputFontSizeSmall = exports.inputFontSize = exports.inputPaddingTiny = exports.inputPaddingSmall = exports.inputPadding = exports.inputBoxHeightTiny = exports.inputBoxHeightSmall = exports.inputBoxHeight = exports.floatingBtnActColor = exports.floatingBtnColor = exports.floatingBtnBgdHover = exports.floatingBtnActBgd = exports.floatingBtnBgd = exports.negativeBtnActColor = exports.negativeBtnColor = exports.negativeBtnBgdHover = exports.negativeBtnActBgd = exports.negativeBtnBgd = exports.linkBtnActBgdHover = exports.linkBtnActColor = exports.linkBtnColor = exports.linkBtnActBgd = exports.linkBtnBgd = exports.secondaryBtnBgdHover = exports.secondaryBtnActColor = exports.secondaryBtnColor = exports.secondaryBtnActBgd = exports.secondaryBtnBgd = exports.primaryBtnRadius = exports.primaryBtnBgdHover = exports.primaryBtnActColor = exports.primaryBtnColor = exports.primaryBtnActBgd = exports.primaryBtnBgd = exports.logoColor = exports.errorColor = exports.activeColorHover = exports.activeColorLT = exports.activeColor = exports.textColorHlLT = exports.textColorHl = exports.titleTextColor = exports.subtextColorActive = exports.subtextColorLT = exports.subtextColor = exports.titleColorLT = exports.textColorLT = exports.textColor = exports.labelColorLT = exports.labelHoverColor = exports.labelColor = exports.lineHeight = exports.fontSize = exports.fontWeight = exports.fontFamily = exports.borderColorLT = exports.borderColor = exports.borderRadius = exports.boxSizing = exports.boxShadow = exports.transitionSlow = exports.transitionFast = exports.transition = void 0;
exports.themeBS = exports.themeLT = exports.theme = exports.modalScrollBar = exports.breakPoints = exports.textTruncate = exports.actionPanelHeight = exports.actionPanelWidth = exports.notificationPanelItemHeight = exports.notificationPanelItemWidth = exports.notificationPanelWidth = exports.notificationColors = exports.histogramFillOutRange = exports.histogramFillInRange = exports.rangeBrushBgd = exports.sliderMarginTop = exports.sliderMarginTopIsRange = exports.sliderInputWidth = exports.sliderInputHeight = exports.sliderHandleShadow = exports.sliderHandleHoverColor = exports.sliderHandleColor = exports.sliderHandleWidth = exports.sliderHandleHeight = exports.sliderBarHeight = exports.sliderBarRadius = exports.sliderBarHoverColor = exports.sliderBarBgd = exports.sliderBarColor = exports.modalDialogColor = exports.modalDialogBgd = exports.modalButtonZ = exports.modalTitleZ = exports.modalFooterZ = exports.modalContentZ = exports.modalOverlayBgd = exports.modalOverLayZ = exports.modalPortableLateralPadding = exports.modalLateralPadding = exports.modalPadding = exports.modalImagePlaceHolder = exports.modalFooterBgd = exports.modalTitleFontSizeSmaller = exports.modalTitleFontSize = exports.modalTitleColor = exports.bottomPanelGap = exports.bottomInnerPdVert = exports.bottomInnerPdSide = exports.tooltipColor = exports.tooltipBg = exports.mapPanelHeaderBackgroundColor = exports.mapPanelBackgroundColor = exports.panelBorderLT = exports.panelBorder = exports.panelBorderColor = exports.panelBackgroundLT = exports.panelBorderRadius = exports.panelBoxShadow = exports.panelHeaderHeight = exports.panelHeaderIconActive = exports.panelHeaderIcon = exports.panelActiveBgLT = exports.panelActiveBg = exports.panelBackgroundHover = exports.panelBackground = exports.sideBarCloseBtnBgdHover = exports.sideBarCloseBtnColor = exports.sideBarCloseBtnBgd = exports.sidePanelScrollBarHeight = exports.sidePanelScrollBarWidth = exports.sidePanelBg = exports.sidePanelInnerPadding = exports.sidePanelHeaderBg = exports.checkboxBoxBgdChecked = exports.checkboxBoxBgd = exports.checkboxBorderColorLT = exports.checkboxBorderRadius = exports.checkboxBorderColor = exports.checkboxMargin = exports.checkboxHeight = exports.checkboxWidth = exports.secondarySwitchBtnBgd = exports.secondarySwitchTrackBgd = exports.switchBtnHeight = exports.switchBtnWidth = exports.switchBtnBorderRadius = exports.switchBtnBoxShadow = exports.switchBtnBgdActive = exports.switchBtnBgd = exports.switchTrackBorderRadius = exports.switchTrackBgdActive = exports.switchTrackBgd = exports.switchLabelMargin = exports.switchHeight = exports.switchWidth = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _defaultSettings = require("../constants/default-settings");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject24() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ::-webkit-scrollbar {\n    width: 14px;\n    height: 16px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: white;\n  }\n  ::-webkit-scrollbar-track:horizontal {\n    background: ", ";\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border: 4px solid white;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: #969da9;\n  }\n\n  ::-webkit-scrollbar-thumb:vertical {\n    border-radius: 7px;\n  }\n\n  ::-webkit-scrollbar-thumb:horizontal {\n    border-radius: 9px;\n    border: 4px solid ", ";\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ::-webkit-scrollbar {\n    height: 10px;\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: ", ";\n    border: 3px solid ", "\n\n    :vertical:hover {\n      background: ", ";\n      cursor: pointer;\n    }\n\n    :horizontal:hover {\n      background: ", ";\n      cursor: pointer;\n    }\n  }\n}"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ::-webkit-scrollbar {\n    height: 10px;\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: ", ";\n    border: 3px solid ", ";\n    :hover {\n      background: ", ";\n      cursor: pointer;\n    }\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ::-webkit-scrollbar {\n    height: ", "px;\n    width: ", "px;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: ", ";\n    border: 3px solid ", ";\n\n    :hover {\n      background: ", ";\n      cursor: pointer;\n    }\n  };\n}"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow-y: auto;\n  max-height: 280px;\n  box-shadow: ", ";\n  border-radius: 2px;\n\n  .list__section {\n    ", ";\n  }\n  .list__header {\n    ", ";\n  }\n\n  .list__item {\n    ", ";\n  }\n\n  .list__item__anchor {\n    ", ";\n  }\n\n  ", ";\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 0 4px 0;\n  margin-bottom: 4px;\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 11px;\n  padding: 5px 9px;\n  color: ", ";\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 11px;\n  padding: 3px 9px;\n  font-weight: 500;\n\n  &.hover,\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n\n    .list__item__anchor {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  padding-left: 3px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ::-webkit-scrollbar {\n    height: 10px;\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: ", ";\n    border: 3px solid ", ";\n  };\n\n  :vertical:hover {\n    background: ", ";\n    cursor: pointer;\n  }\n}"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  :before {\n    ", " background: ", ";\n  }\n\n  :after {\n    ", "\n    background: ", ";\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  position: relative;\n  padding-left: 32px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  vertical-align: middle;\n  cursor: pointer;\n  font-size: 12px;\n  color: ", ";\n  margin-left: -", "px;\n\n  :before {\n    ", ";\n  }\n\n  :after {\n    ", ";\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 10px;\n  height: 5px;\n  border-bottom: 2px solid white;\n  border-left: 2px solid white;\n  top: 4px;\n  left: 3px;\n  transform: rotate(-45deg);\n  display: block;\n  position: absolute;\n  opacity: ", ";\n  content: '';\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: ", "px;\n  height: ", "px;\n  background: ", ";\n  border: 1px solid\n    ", ";\n  border-radius: 2px;\n  content: '';\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  user-select: none;\n  cursor: pointer;\n  line-height: 16px;\n  font-weight: 500;\n  font-size: 12px;\n  color: ", ";\n  position: relative;\n  display: inline-block;\n  padding-top: 0;\n  padding-right: 0;\n  padding-bottom: 0;\n  padding-left: ", "px;\n\n  :before {\n    ", ";\n  }\n\n  :after {\n    ", ";\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  transition: ", ";\n  position: absolute;\n  top: 0;\n  left: ", "px;\n  content: '';\n  display: block;\n  height: ", ";\n  width: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  border-radius: ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  position: absolute;\n  top: 0;\n  left: ", "px;\n  content: '';\n  display: block;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", " color: ", ";\n  font-size: 13px;\n  letter-spacing: 0.43px;\n  line-height: 18px;\n  height: 24px;\n  font-weight: 400;\n  padding-left: 4px;\n  margin-left: -4px;\n  background-color: transparent;\n  border: 1px solid transparent;\n\n  :hover {\n    height: 24px;\n    cursor: text;\n    background-color: transparent;\n    border: 1px solid ", ";\n  }\n\n  :active,\n  .active,\n  :focus {\n    background-color: transparent;\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: pointer;\n  flex-wrap: wrap;\n  height: auto;\n  justify-content: start;\n  margin-bottom: 2px;\n  padding: 0px 7px 0px 4px;\n  white-space: normal;\n\n  .chickleted-input__placeholder {\n    line-height: 24px;\n    margin: 4px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid\n    ", ";\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  :active,\n  &.active {\n    background-color: ", ";\n    border-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  background-color: ", ";\n  border: 1px solid\n  ", ";\n  color: ", ";\n  caret-color: ", ";\n\n  ::-webkit-input-placeholder {\n    color: ", ";\n    font-weight: 400;\n  }\n\n  :active,\n  :focus,\n  &.focus,\n  &.active {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  :hover {\n    background-color: ", ";\n    cursor: ", ";\n    border-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border: 1px solid\n    ", ";\n  border-radius: 2px;\n  caret-color: ", ";\n  color: ", ";\n  display: flex;\n  font-size: ", ";\n  font-weight: ", ";\n  height: ", ";\n  justify-content: space-between;\n  outline: none;\n  overflow: hidden;\n  padding: ", ";\n  text-overflow: ellipsis;\n  transition: ", ";\n  white-space: nowrap;\n  width: 100%;\n  word-wrap: normal;\n  pointer-events: ", ";\n  opacity: ", ";\n\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  :active,\n  :focus,\n  &.focus,\n  &.active {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  ::placeholder {\n    color: ", ";\n    font-weight: ", ";\n  }\n\n  /* Disable Arrows on Number Inputs */\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var transition = 'all .4s ease';
exports.transition = transition;
var transitionFast = 'all .2s ease';
exports.transitionFast = transitionFast;
var transitionSlow = 'all .8s ease';
exports.transitionSlow = transitionSlow;
var boxShadow = '0 1px 2px 0 rgba(0,0,0,0.10)';
exports.boxShadow = boxShadow;
var boxSizing = 'border-box';
exports.boxSizing = boxSizing;
var borderRadius = '1px';
exports.borderRadius = borderRadius;
var borderColor = '#3A414C';
exports.borderColor = borderColor;
var borderColorLT = '#F1F1F1'; // TEXT

exports.borderColorLT = borderColorLT;
var fontFamily = "ff-clan-web-pro, 'Helvetica Neue', Helvetica, sans-serif";
exports.fontFamily = fontFamily;
var fontWeight = 400;
exports.fontWeight = fontWeight;
var fontSize = '0.875em';
exports.fontSize = fontSize;
var lineHeight = 1.71429;
exports.lineHeight = lineHeight;
var labelColor = '#6A7485';
exports.labelColor = labelColor;
var labelHoverColor = '#C6C6C6';
exports.labelHoverColor = labelHoverColor;
var labelColorLT = '#6A7485';
exports.labelColorLT = labelColorLT;
var textColor = '#A0A7B4';
exports.textColor = textColor;
var textColorLT = '#3A414C';
exports.textColorLT = textColorLT;
var titleColorLT = '#29323C';
exports.titleColorLT = titleColorLT;
var subtextColor = '#6A7485';
exports.subtextColor = subtextColor;
var subtextColorLT = '#A0A7B4';
exports.subtextColorLT = subtextColorLT;
var subtextColorActive = '#FFFFFF';
exports.subtextColorActive = subtextColorActive;
var titleTextColor = '#FFFFFF';
exports.titleTextColor = titleTextColor;
var textColorHl = '#F0F0F0';
exports.textColorHl = textColorHl;
var textColorHlLT = '#F1F1F1';
exports.textColorHlLT = textColorHlLT;
var activeColor = '#1FBAD6';
exports.activeColor = activeColor;
var activeColorLT = '#2473BD';
exports.activeColorLT = activeColorLT;
var activeColorHover = '#108188';
exports.activeColorHover = activeColorHover;
var errorColor = '#F9042C';
exports.errorColor = errorColor;
var logoColor = activeColor; // Button

exports.logoColor = logoColor;
var primaryBtnBgd = '#0F9668';
exports.primaryBtnBgd = primaryBtnBgd;
var primaryBtnActBgd = '#13B17B';
exports.primaryBtnActBgd = primaryBtnActBgd;
var primaryBtnColor = '#FFFFFF';
exports.primaryBtnColor = primaryBtnColor;
var primaryBtnActColor = '#FFFFFF';
exports.primaryBtnActColor = primaryBtnActColor;
var primaryBtnBgdHover = '#13B17B';
exports.primaryBtnBgdHover = primaryBtnBgdHover;
var primaryBtnRadius = '2px';
exports.primaryBtnRadius = primaryBtnRadius;
var secondaryBtnBgd = '#6A7485';
exports.secondaryBtnBgd = secondaryBtnBgd;
var secondaryBtnActBgd = '#A0A7B4';
exports.secondaryBtnActBgd = secondaryBtnActBgd;
var secondaryBtnColor = '#FFFFFF';
exports.secondaryBtnColor = secondaryBtnColor;
var secondaryBtnActColor = '#FFFFFF';
exports.secondaryBtnActColor = secondaryBtnActColor;
var secondaryBtnBgdHover = '#A0A7B4';
exports.secondaryBtnBgdHover = secondaryBtnBgdHover;
var linkBtnBgd = 'transparent';
exports.linkBtnBgd = linkBtnBgd;
var linkBtnActBgd = linkBtnBgd;
exports.linkBtnActBgd = linkBtnActBgd;
var linkBtnColor = '#A0A7B4';
exports.linkBtnColor = linkBtnColor;
var linkBtnActColor = textColorHlLT;
exports.linkBtnActColor = linkBtnActColor;
var linkBtnActBgdHover = linkBtnBgd;
exports.linkBtnActBgdHover = linkBtnActBgdHover;
var negativeBtnBgd = errorColor;
exports.negativeBtnBgd = negativeBtnBgd;
var negativeBtnActBgd = '#FF193E';
exports.negativeBtnActBgd = negativeBtnActBgd;
var negativeBtnBgdHover = '#FF193E';
exports.negativeBtnBgdHover = negativeBtnBgdHover;
var negativeBtnColor = '#FFFFFF';
exports.negativeBtnColor = negativeBtnColor;
var negativeBtnActColor = '#FFFFFF';
exports.negativeBtnActColor = negativeBtnActColor;
var floatingBtnBgd = '#29323C';
exports.floatingBtnBgd = floatingBtnBgd;
var floatingBtnActBgd = '#3A4552';
exports.floatingBtnActBgd = floatingBtnActBgd;
var floatingBtnBgdHover = '#3A4552';
exports.floatingBtnBgdHover = floatingBtnBgdHover;
var floatingBtnColor = subtextColor;
exports.floatingBtnColor = floatingBtnColor;
var floatingBtnActColor = subtextColorActive; // Input

exports.floatingBtnActColor = floatingBtnActColor;
var inputBoxHeight = '34px';
exports.inputBoxHeight = inputBoxHeight;
var inputBoxHeightSmall = '24px';
exports.inputBoxHeightSmall = inputBoxHeightSmall;
var inputBoxHeightTiny = '18px';
exports.inputBoxHeightTiny = inputBoxHeightTiny;
var inputPadding = '4px 10px';
exports.inputPadding = inputPadding;
var inputPaddingSmall = '4px 6px';
exports.inputPaddingSmall = inputPaddingSmall;
var inputPaddingTiny = '2px 4px';
exports.inputPaddingTiny = inputPaddingTiny;
var inputFontSize = '11px';
exports.inputFontSize = inputFontSize;
var inputFontSizeSmall = '10px';
exports.inputFontSizeSmall = inputFontSizeSmall;
var inputFontWeight = 500;
exports.inputFontWeight = inputFontWeight;
var inputBgd = '#29323C';
exports.inputBgd = inputBgd;
var inputBgdHover = '#3A414C';
exports.inputBgdHover = inputBgdHover;
var inputBgdActive = '#3A414C';
exports.inputBgdActive = inputBgdActive;
var inputBorderColor = '#29323C';
exports.inputBorderColor = inputBorderColor;
var inputBorderHoverColor = '#3A414C';
exports.inputBorderHoverColor = inputBorderHoverColor;
var inputBorderActiveColor = '#D3D8E0';
exports.inputBorderActiveColor = inputBorderActiveColor;
var inputColor = '#A0A7B4';
exports.inputColor = inputColor;
var inputBorderRadius = '1px';
exports.inputBorderRadius = inputBorderRadius;
var inputPlaceholderColor = '#6A7485';
exports.inputPlaceholderColor = inputPlaceholderColor;
var inputPlaceholderFontWeight = 400;
exports.inputPlaceholderFontWeight = inputPlaceholderFontWeight;
var secondaryInputBgd = '#242730';
exports.secondaryInputBgd = secondaryInputBgd;
var secondaryInputBgdHover = '#3A414C';
exports.secondaryInputBgdHover = secondaryInputBgdHover;
var secondaryInputBgdActive = '#3A414C';
exports.secondaryInputBgdActive = secondaryInputBgdActive;
var secondaryInputColor = '#A0A7B4';
exports.secondaryInputColor = secondaryInputColor;
var secondaryInputBorderColor = '#242730';
exports.secondaryInputBorderColor = secondaryInputBorderColor;
var secondaryInputBorderActiveColor = '#D3D8E0'; // Select

exports.secondaryInputBorderActiveColor = secondaryInputBorderActiveColor;
var selectColor = inputColor;
exports.selectColor = selectColor;
var selectColorLT = titleColorLT;
exports.selectColorLT = selectColorLT;
var selectActiveBorderColor = '#D3D8E0';
exports.selectActiveBorderColor = selectActiveBorderColor;
var selectFontSize = '11px';
exports.selectFontSize = selectFontSize;
var selectFontWeight = '400';
exports.selectFontWeight = selectFontWeight;
var selectFontWeightBold = '500';
exports.selectFontWeightBold = selectFontWeightBold;
var selectColorPlaceHolder = '#6A7485';
exports.selectColorPlaceHolder = selectColorPlaceHolder;
var selectBackground = inputBgd;
exports.selectBackground = selectBackground;
var selectBackgroundHover = inputBgdHover;
exports.selectBackgroundHover = selectBackgroundHover;
var selectBackgroundLT = '#FFFFFF';
exports.selectBackgroundLT = selectBackgroundLT;
var selectBackgroundHoverLT = '#F8F8F9';
exports.selectBackgroundHoverLT = selectBackgroundHoverLT;
var selectBorderColor = '#D3D8E0';
exports.selectBorderColor = selectBorderColor;
var selectBorderColorLT = '#D3D8E0';
exports.selectBorderColorLT = selectBorderColorLT;
var selectBorderRadius = '1px';
exports.selectBorderRadius = selectBorderRadius;
var selectBorder = 0;
exports.selectBorder = selectBorder;
var dropdownListHighlightBg = '#6A7485';
exports.dropdownListHighlightBg = dropdownListHighlightBg;
var dropdownListShadow = '0 6px 12px 0 rgba(0,0,0,0.16)';
exports.dropdownListShadow = dropdownListShadow;
var dropdownListBgd = '#3A414C';
exports.dropdownListBgd = dropdownListBgd;
var dropdownListBorderTop = '#242730';
exports.dropdownListBorderTop = dropdownListBorderTop;
var dropdownWrapperZ = 100; // Switch

exports.dropdownWrapperZ = dropdownWrapperZ;
var switchWidth = 24;
exports.switchWidth = switchWidth;
var switchHeight = 12;
exports.switchHeight = switchHeight;
var switchLabelMargin = 12;
exports.switchLabelMargin = switchLabelMargin;
var switchTrackBgd = '#29323C';
exports.switchTrackBgd = switchTrackBgd;
var switchTrackBgdActive = activeColor;
exports.switchTrackBgdActive = switchTrackBgdActive;
var switchTrackBorderRadius = '1px';
exports.switchTrackBorderRadius = switchTrackBorderRadius;
var switchBtnBgd = '#6A7485';
exports.switchBtnBgd = switchBtnBgd;
var switchBtnBgdActive = '#D3D8E0';
exports.switchBtnBgdActive = switchBtnBgdActive;
var switchBtnBoxShadow = '0 2px 4px 0 rgba(0,0,0,0.40)';
exports.switchBtnBoxShadow = switchBtnBoxShadow;
var switchBtnBorderRadius = '0';
exports.switchBtnBorderRadius = switchBtnBorderRadius;
var switchBtnWidth = '12px';
exports.switchBtnWidth = switchBtnWidth;
var switchBtnHeight = '12px';
exports.switchBtnHeight = switchBtnHeight;
var secondarySwitchTrackBgd = '#242730';
exports.secondarySwitchTrackBgd = secondarySwitchTrackBgd;
var secondarySwitchBtnBgd = '#3A414C'; // Checkbox

exports.secondarySwitchBtnBgd = secondarySwitchBtnBgd;
var checkboxWidth = 16;
exports.checkboxWidth = checkboxWidth;
var checkboxHeight = 16;
exports.checkboxHeight = checkboxHeight;
var checkboxMargin = 12;
exports.checkboxMargin = checkboxMargin;
var checkboxBorderColor = selectBorderColor;
exports.checkboxBorderColor = checkboxBorderColor;
var checkboxBorderRadius = '2px';
exports.checkboxBorderRadius = checkboxBorderRadius;
var checkboxBorderColorLT = selectBorderColorLT;
exports.checkboxBorderColorLT = checkboxBorderColorLT;
var checkboxBoxBgd = 'white';
exports.checkboxBoxBgd = checkboxBoxBgd;
var checkboxBoxBgdChecked = primaryBtnBgd; // Side Panel

exports.checkboxBoxBgdChecked = checkboxBoxBgdChecked;
var sidePanelHeaderBg = '#29323C';
exports.sidePanelHeaderBg = sidePanelHeaderBg;
var sidePanelInnerPadding = 16;
exports.sidePanelInnerPadding = sidePanelInnerPadding;
var sidePanelBg = '#242730';
exports.sidePanelBg = sidePanelBg;
var sidePanelScrollBarWidth = 10;
exports.sidePanelScrollBarWidth = sidePanelScrollBarWidth;
var sidePanelScrollBarHeight = 10;
exports.sidePanelScrollBarHeight = sidePanelScrollBarHeight;
var sideBarCloseBtnBgd = secondaryBtnBgd;
exports.sideBarCloseBtnBgd = sideBarCloseBtnBgd;
var sideBarCloseBtnColor = '#29323C';
exports.sideBarCloseBtnColor = sideBarCloseBtnColor;
var sideBarCloseBtnBgdHover = secondaryBtnActBgd;
exports.sideBarCloseBtnBgdHover = sideBarCloseBtnBgdHover;
var panelBackground = '#29323C';
exports.panelBackground = panelBackground;
var panelBackgroundHover = '#3A4552';
exports.panelBackgroundHover = panelBackgroundHover;
var panelActiveBg = '#3A4552';
exports.panelActiveBg = panelActiveBg;
var panelActiveBgLT = '#6A7485';
exports.panelActiveBgLT = panelActiveBgLT;
var panelHeaderIcon = '#6A7485';
exports.panelHeaderIcon = panelHeaderIcon;
var panelHeaderIconActive = '#A0A7B4';
exports.panelHeaderIconActive = panelHeaderIconActive;
var panelHeaderHeight = 48;
exports.panelHeaderHeight = panelHeaderHeight;
var panelBoxShadow = '0 6px 12px 0 rgba(0,0,0,0.16)';
exports.panelBoxShadow = panelBoxShadow;
var panelBorderRadius = '2px';
exports.panelBorderRadius = panelBorderRadius;
var panelBackgroundLT = '#f8f8f9';
exports.panelBackgroundLT = panelBackgroundLT;
var panelBorderColor = '#3A414C';
exports.panelBorderColor = panelBorderColor;
var panelBorder = "1px solid ".concat(borderColor);
exports.panelBorder = panelBorder;
var panelBorderLT = "1px solid ".concat(borderColorLT);
exports.panelBorderLT = panelBorderLT;
var mapPanelBackgroundColor = '#242730';
exports.mapPanelBackgroundColor = mapPanelBackgroundColor;
var mapPanelHeaderBackgroundColor = '#29323C';
exports.mapPanelHeaderBackgroundColor = mapPanelHeaderBackgroundColor;
var tooltipBg = '#F8F8F9';
exports.tooltipBg = tooltipBg;
var tooltipColor = '#333334'; // Bottom Panel

exports.tooltipColor = tooltipColor;
var bottomInnerPdSide = 32;
exports.bottomInnerPdSide = bottomInnerPdSide;
var bottomInnerPdVert = 6;
exports.bottomInnerPdVert = bottomInnerPdVert;
var bottomPanelGap = 20; // Modal

exports.bottomPanelGap = bottomPanelGap;
var modalTitleColor = '#3A414C';
exports.modalTitleColor = modalTitleColor;
var modalTitleFontSize = '24px';
exports.modalTitleFontSize = modalTitleFontSize;
var modalTitleFontSizeSmaller = '18px';
exports.modalTitleFontSizeSmaller = modalTitleFontSizeSmaller;
var modalFooterBgd = '#F8F8F9';
exports.modalFooterBgd = modalFooterBgd;
var modalImagePlaceHolder = '#DDDFE3';
exports.modalImagePlaceHolder = modalImagePlaceHolder;
var modalPadding = '10px 0';
exports.modalPadding = modalPadding;
var modalLateralPadding = '72px';
exports.modalLateralPadding = modalLateralPadding;
var modalPortableLateralPadding = '36px';
exports.modalPortableLateralPadding = modalPortableLateralPadding;
var modalOverLayZ = 1001;
exports.modalOverLayZ = modalOverLayZ;
var modalOverlayBgd = 'rgba(0, 0, 0, 0.5)';
exports.modalOverlayBgd = modalOverlayBgd;
var modalContentZ = 10002;
exports.modalContentZ = modalContentZ;
var modalFooterZ = 10001;
exports.modalFooterZ = modalFooterZ;
var modalTitleZ = 10003;
exports.modalTitleZ = modalTitleZ;
var modalButtonZ = 10005; // Modal Dialog (Dark)

exports.modalButtonZ = modalButtonZ;
var modalDialogBgd = '#3A414C';
exports.modalDialogBgd = modalDialogBgd;
var modalDialogColor = textColorHl; // Slider

exports.modalDialogColor = modalDialogColor;
var sliderBarColor = '#6A7485';
exports.sliderBarColor = sliderBarColor;
var sliderBarBgd = '#3A414C';
exports.sliderBarBgd = sliderBarBgd;
var sliderBarHoverColor = '#D3D8E0';
exports.sliderBarHoverColor = sliderBarHoverColor;
var sliderBarRadius = '1px';
exports.sliderBarRadius = sliderBarRadius;
var sliderBarHeight = 4;
exports.sliderBarHeight = sliderBarHeight;
var sliderHandleHeight = 12;
exports.sliderHandleHeight = sliderHandleHeight;
var sliderHandleWidth = 12;
exports.sliderHandleWidth = sliderHandleWidth;
var sliderHandleColor = '#D3D8E0';
exports.sliderHandleColor = sliderHandleColor;
var sliderHandleHoverColor = '#FFFFFF';
exports.sliderHandleHoverColor = sliderHandleHoverColor;
var sliderHandleShadow = '0 2px 4px 0 rgba(0,0,0,0.40)';
exports.sliderHandleShadow = sliderHandleShadow;
var sliderInputHeight = 24;
exports.sliderInputHeight = sliderInputHeight;
var sliderInputWidth = 56;
exports.sliderInputWidth = sliderInputWidth;
var sliderMarginTopIsRange = 0;
exports.sliderMarginTopIsRange = sliderMarginTopIsRange;
var sliderMarginTop = 12; // Plot

exports.sliderMarginTop = sliderMarginTop;
var rangeBrushBgd = '#3A414C';
exports.rangeBrushBgd = rangeBrushBgd;
var histogramFillInRange = activeColor;
exports.histogramFillInRange = histogramFillInRange;
var histogramFillOutRange = sliderBarColor; // Notification

exports.histogramFillOutRange = histogramFillOutRange;
var notificationColors = {
  info: '#276ef1',
  error: '#f25138',
  success: '#47b275',
  warning: '#ffc043'
};
exports.notificationColors = notificationColors;
var notificationPanelWidth = 240;
exports.notificationPanelWidth = notificationPanelWidth;
var notificationPanelItemWidth = notificationPanelWidth - 60;
exports.notificationPanelItemWidth = notificationPanelItemWidth;
var notificationPanelItemHeight = 60; // Datagrid

exports.notificationPanelItemHeight = notificationPanelItemHeight;
var columnWidth = 200;
var cellHeaderHeight = 72;
var cellHeight = 24;
var cellPaddingSide = 18;
var extendCellHeight = 2 * cellHeight;
var extendColumnWidth = 2 * columnWidth;
var gridDefaultWidth = 800;
var gridDefaultHeight = 600;
var gridPaddingSide = 24; // Floating Time display

var timeDisplayBorderRadius = 32;
var timeDisplayHeight = 64;
var timeDisplayMinWidth = 176;
var timeDisplayOpacity = 0.8;
var timeDisplayPadding = '0 24px'; // Export map modal

var exportIntraSectionMargin = '8'; // Action Panel

var actionPanelWidth = 110;
exports.actionPanelWidth = actionPanelWidth;
var actionPanelHeight = 32;
exports.actionPanelHeight = actionPanelHeight;
var textTruncate = {
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal'
}; // This breakpoints are used for responsive design

exports.textTruncate = textTruncate;
var breakPoints = {
  palm: 588,
  desk: 768
}; // theme is passed to kepler.gl when it's mounted,
// it is used by styled-components to pass along to
// all child components

exports.breakPoints = breakPoints;
var input = (0, _styledComponents.css)(_templateObject(), function (props) {
  return props.theme.inputBgd;
}, function (props) {
  return props.active ? props.theme.inputBorderActiveColor : props.error ? props.theme.errorColor : props.theme.inputBgd;
}, function (props) {
  return props.theme.inputBorderActiveColor;
}, function (props) {
  return props.theme.inputColor;
}, function (props) {
  return ['small', 'tiny'].includes(props.size) ? props.theme.inputFontSizeSmall : props.theme.inputFontSize;
}, function (props) {
  return props.theme.inputFontWeight;
}, function (props) {
  return props.size === 'small' ? props.theme.inputBoxHeightSmall : props.size === 'tiny' ? props.theme.inputBoxHeightTiny : props.theme.inputBoxHeight;
}, function (props) {
  return props.size === 'small' ? props.theme.inputPaddingSmall : props.size === 'tiny' ? props.theme.inputPaddingTiny : props.theme.inputPadding;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  return props.type === 'number' ? 'text' : 'pointer';
}, function (props) {
  return props.active ? props.theme.inputBgdActive : props.theme.inputBgdHover;
}, function (props) {
  return props.active ? props.theme.inputBorderActiveColor : props.theme.inputBorderHoverColor;
}, function (props) {
  return props.theme.inputBgdActive;
}, function (props) {
  return props.theme.inputBorderActiveColor;
}, function (props) {
  return props.theme.inputPlaceholderColor;
}, function (props) {
  return props.theme.inputPlaceholderFontWeight;
});
var inputLT = (0, _styledComponents.css)(_templateObject2(), input, function (props) {
  return props.theme.selectBackgroundLT;
}, function (props) {
  return props.active ? props.theme.selectActiveBorderColor : props.error ? props.theme.errorColor : props.theme.selectBorderColorLT;
}, function (props) {
  return props.theme.selectColorLT;
}, function (props) {
  return props.theme.selectColorLT;
}, function (props) {
  return props.theme.subtextColorLT;
}, function (props) {
  return props.theme.selectBackgroundLT;
}, function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.selectBackgroundLT;
}, function (props) {
  return ['number', 'text'].includes(props.type) ? 'text' : 'pointer';
}, function (props) {
  return props.active ? props.theme.textColorLT : props.theme.subtextColor;
});
var secondaryInput = (0, _styledComponents.css)(_templateObject3(), function (props) {
  return props.theme.input;
}, function (props) {
  return props.theme.secondaryInputColor;
}, function (props) {
  return props.theme.secondaryInputBgd;
}, function (props) {
  return props.error ? props.theme.errorColor : props.theme.secondaryInputBorderColor;
}, function (props) {
  return props.theme.secondaryInputBgdHover;
}, function (props) {
  return props.theme.secondaryInputBgdHover;
}, function (props) {
  return props.theme.secondaryInputBgdActive;
}, function (props) {
  return props.theme.secondaryInputBorderActiveColor;
});
var chickletedInputContainer = (0, _styledComponents.css)(_templateObject4());
var chickletedInput = (0, _styledComponents.css)(_templateObject5(), function (props) {
  return props.theme.input;
}, function (props) {
  return props.theme.chickletedInputContainer;
});
var secondaryChickletedInput = (0, _styledComponents.css)(_templateObject6(), function (props) {
  return props.theme.secondaryInput;
}, function (props) {
  return props.theme.chickletedInputContainer;
});
var inlineInput = (0, _styledComponents.css)(_templateObject7(), function (props) {
  return props.theme.input;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.inputBorderActiveColor;
});
var switchTrack = (0, _styledComponents.css)(_templateObject8(), function (props) {
  return props.checked ? props.theme.switchTrackBgdActive : props.theme.switchTrackBgd;
}, function (props) {
  return -props.theme.switchLabelMargin;
}, function (props) {
  return props.theme.switchWidth;
}, function (props) {
  return props.theme.switchHeight;
}, function (props) {
  return props.theme.switchTrackBorderRadius;
});
var switchButton = (0, _styledComponents.css)(_templateObject9(), function (props) {
  return props.theme.transition;
}, function (props) {
  return (props.checked ? props.theme.switchWidth / 2 : -1) - props.theme.switchLabelMargin;
}, function (props) {
  return props.theme.switchBtnHeight;
}, function (props) {
  return props.theme.switchBtnWidth;
}, function (props) {
  return props.checked ? props.theme.switchBtnBgdActive : props.theme.switchBtnBgd;
}, function (props) {
  return props.theme.switchBtnBoxShadow;
}, function (props) {
  return props.theme.switchBtnBorderRadius;
});
var inputSwitch = (0, _styledComponents.css)(_templateObject10(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.switchWidth;
}, function (props) {
  return props.theme.switchTrack;
}, function (props) {
  return props.theme.switchButton;
}); // This is a light version checkbox

var checkboxBox = (0, _styledComponents.css)(_templateObject11(), function (props) {
  return props.theme.checkboxWidth;
}, function (props) {
  return props.theme.checkboxHeight;
}, function (props) {
  return props.checked ? props.theme.checkboxBoxBgdChecked : props.theme.checkboxBoxBgd;
}, function (props) {
  return props.checked ? props.theme.checkboxBoxBgdChecked : props.theme.checkboxBorderColor;
});
var checkboxCheck = (0, _styledComponents.css)(_templateObject12(), function (props) {
  return props.checked ? 1 : 0;
});
var inputCheckbox = (0, _styledComponents.css)(_templateObject13(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.switchLabelMargin;
}, function (props) {
  return props.theme.checkboxBox;
}, function (props) {
  return props.theme.checkboxCheck;
});
var secondarySwitch = (0, _styledComponents.css)(_templateObject14(), function (props) {
  return props.theme.inputSwitch;
}, function (props) {
  return props.theme.switchTrack;
}, function (props) {
  return props.checked ? props.theme.switchTrackBgdActive : props.theme.secondarySwitchTrackBgd;
}, function (props) {
  return props.theme.switchButton;
}, function (props) {
  return props.checked ? props.theme.switchBtnBgdActive : props.theme.secondarySwitchBtnBgd;
});
var dropdownScrollBar = (0, _styledComponents.css)(_templateObject15(), function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.textColorHl;
});
var dropdownListAnchor = (0, _styledComponents.css)(_templateObject16(), function (props) {
  return props.theme.selectColor;
});
var dropdownListItem = (0, _styledComponents.css)(_templateObject17(), function (props) {
  return props.theme.dropdownListHighlightBg;
}, function (props) {
  return props.theme.textColorHl;
});
var dropdownListHeader = (0, _styledComponents.css)(_templateObject18(), function (props) {
  return props.theme.labelColor;
});
var dropdownListSection = (0, _styledComponents.css)(_templateObject19(), function (props) {
  return props.theme.labelColor;
});
var dropdownList = (0, _styledComponents.css)(_templateObject20(), function (props) {
  return props.theme.dropdownListShadow;
}, function (props) {
  return props.theme.dropdownListSection;
}, function (props) {
  return props.theme.dropdownListHeader;
}, function (props) {
  return props.theme.dropdownListItem;
}, function (props) {
  return props.theme.dropdownListAnchor;
}, function (props) {
  return props.theme.dropdownScrollBar;
});
var sidePanelScrollBar = (0, _styledComponents.css)(_templateObject21(), function (props) {
  return props.theme.sidePanelScrollBarHeight;
}, function (props) {
  return props.theme.sidePanelScrollBarWidth;
}, function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.labelColor;
});
var panelDropdownScrollBar = (0, _styledComponents.css)(_templateObject22(), function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.labelColor;
});
var scrollBar = (0, _styledComponents.css)(_templateObject23(), function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});
var modalScrollBar = (0, _styledComponents.css)(_templateObject24(), function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.labelColorLT;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});
exports.modalScrollBar = modalScrollBar;

var theme = _objectSpread({}, _defaultSettings.DIMENSIONS, {
  // templates
  input: input,
  inputLT: inputLT,
  inlineInput: inlineInput,
  chickletedInput: chickletedInput,
  chickletedInputContainer: chickletedInputContainer,
  secondaryChickletedInput: secondaryChickletedInput,
  borderColor: borderColor,
  borderColorLT: borderColorLT,
  secondaryInput: secondaryInput,
  dropdownScrollBar: dropdownScrollBar,
  dropdownList: dropdownList,
  dropdownListItem: dropdownListItem,
  dropdownListAnchor: dropdownListAnchor,
  dropdownListHeader: dropdownListHeader,
  dropdownListSection: dropdownListSection,
  dropdownListShadow: dropdownListShadow,
  dropdownWrapperZ: dropdownWrapperZ,
  modalScrollBar: modalScrollBar,
  scrollBar: scrollBar,
  sidePanelScrollBar: sidePanelScrollBar,
  inputSwitch: inputSwitch,
  secondarySwitch: secondarySwitch,
  switchTrack: switchTrack,
  switchButton: switchButton,
  inputCheckbox: inputCheckbox,
  checkboxBox: checkboxBox,
  checkboxCheck: checkboxCheck,
  // Transitions
  transition: transition,
  transitionFast: transitionFast,
  transitionSlow: transitionSlow,
  // styles
  activeColor: activeColor,
  activeColorHover: activeColorHover,
  borderRadius: borderRadius,
  boxShadow: boxShadow,
  errorColor: errorColor,
  dropdownListHighlightBg: dropdownListHighlightBg,
  dropdownListBgd: dropdownListBgd,
  dropdownListBorderTop: dropdownListBorderTop,
  labelColor: labelColor,
  labelColorLT: labelColorLT,
  labelHoverColor: labelHoverColor,
  mapPanelBackgroundColor: mapPanelBackgroundColor,
  mapPanelHeaderBackgroundColor: mapPanelHeaderBackgroundColor,
  // Select
  selectActiveBorderColor: selectActiveBorderColor,
  selectBackground: selectBackground,
  selectBackgroundLT: selectBackgroundLT,
  selectBackgroundHover: selectBackgroundHover,
  selectBackgroundHoverLT: selectBackgroundHoverLT,
  selectBorder: selectBorder,
  selectBorderColor: selectBorderColor,
  selectBorderRadius: selectBorderRadius,
  selectBorderColorLT: selectBorderColorLT,
  selectColor: selectColor,
  selectColorPlaceHolder: selectColorPlaceHolder,
  selectFontSize: selectFontSize,
  selectFontWeight: selectFontWeight,
  selectColorLT: selectColorLT,
  selectFontWeightBold: selectFontWeightBold,
  // Input
  inputBgd: inputBgd,
  inputBgdHover: inputBgdHover,
  inputBgdActive: inputBgdActive,
  inputBoxHeight: inputBoxHeight,
  inputBoxHeightSmall: inputBoxHeightSmall,
  inputBoxHeightTiny: inputBoxHeightTiny,
  inputBorderColor: inputBorderColor,
  inputBorderActiveColor: inputBorderActiveColor,
  inputBorderHoverColor: inputBorderHoverColor,
  inputBorderRadius: inputBorderRadius,
  inputColor: inputColor,
  inputPadding: inputPadding,
  inputPaddingSmall: inputPaddingSmall,
  inputPaddingTiny: inputPaddingTiny,
  inputFontSize: inputFontSize,
  inputFontSizeSmall: inputFontSizeSmall,
  inputFontWeight: inputFontWeight,
  inputPlaceholderColor: inputPlaceholderColor,
  inputPlaceholderFontWeight: inputPlaceholderFontWeight,
  secondaryInputBgd: secondaryInputBgd,
  secondaryInputBgdHover: secondaryInputBgdHover,
  secondaryInputBgdActive: secondaryInputBgdActive,
  secondaryInputColor: secondaryInputColor,
  secondaryInputBorderColor: secondaryInputBorderColor,
  secondaryInputBorderActiveColor: secondaryInputBorderActiveColor,
  // Switch
  switchWidth: switchWidth,
  switchHeight: switchHeight,
  switchTrackBgd: switchTrackBgd,
  switchTrackBgdActive: switchTrackBgdActive,
  switchTrackBorderRadius: switchTrackBorderRadius,
  switchBtnBgd: switchBtnBgd,
  switchBtnBgdActive: switchBtnBgdActive,
  switchBtnBoxShadow: switchBtnBoxShadow,
  switchBtnBorderRadius: switchBtnBorderRadius,
  switchBtnWidth: switchBtnWidth,
  switchBtnHeight: switchBtnHeight,
  switchLabelMargin: switchLabelMargin,
  secondarySwitchTrackBgd: secondarySwitchTrackBgd,
  secondarySwitchBtnBgd: secondarySwitchBtnBgd,
  // Checkbox
  checkboxWidth: checkboxWidth,
  checkboxHeight: checkboxHeight,
  checkboxMargin: checkboxMargin,
  checkboxBorderColor: checkboxBorderColor,
  checkboxBorderRadius: checkboxBorderRadius,
  checkboxBorderColorLT: checkboxBorderColorLT,
  checkboxBoxBgd: checkboxBoxBgd,
  checkboxBoxBgdChecked: checkboxBoxBgdChecked,
  // Button
  primaryBtnBgd: primaryBtnBgd,
  primaryBtnActBgd: primaryBtnActBgd,
  primaryBtnColor: primaryBtnColor,
  primaryBtnActColor: primaryBtnActColor,
  primaryBtnBgdHover: primaryBtnBgdHover,
  primaryBtnRadius: primaryBtnRadius,
  secondaryBtnBgd: secondaryBtnBgd,
  secondaryBtnActBgd: secondaryBtnActBgd,
  secondaryBtnBgdHover: secondaryBtnBgdHover,
  secondaryBtnColor: secondaryBtnColor,
  secondaryBtnActColor: secondaryBtnActColor,
  negativeBtnBgd: negativeBtnBgd,
  negativeBtnActBgd: negativeBtnActBgd,
  negativeBtnBgdHover: negativeBtnBgdHover,
  negativeBtnColor: negativeBtnColor,
  negativeBtnActColor: negativeBtnActColor,
  linkBtnBgd: linkBtnBgd,
  linkBtnActBgd: linkBtnActBgd,
  linkBtnColor: linkBtnColor,
  linkBtnActColor: linkBtnActColor,
  linkBtnActBgdHover: linkBtnActBgdHover,
  floatingBtnBgd: floatingBtnBgd,
  floatingBtnActBgd: floatingBtnActBgd,
  floatingBtnBgdHover: floatingBtnBgdHover,
  floatingBtnColor: floatingBtnColor,
  floatingBtnActColor: floatingBtnActColor,
  // Modal
  modalTitleColor: modalTitleColor,
  modalTitleFontSize: modalTitleFontSize,
  modalTitleFontSizeSmaller: modalTitleFontSizeSmaller,
  modalFooterBgd: modalFooterBgd,
  modalImagePlaceHolder: modalImagePlaceHolder,
  modalPadding: modalPadding,
  modalDialogBgd: modalDialogBgd,
  modalDialogColor: modalDialogColor,
  modalLateralPadding: modalLateralPadding,
  modalPortableLateralPadding: modalPortableLateralPadding,
  modalOverLayZ: modalOverLayZ,
  modalOverlayBgd: modalOverlayBgd,
  modalContentZ: modalContentZ,
  modalFooterZ: modalFooterZ,
  modalTitleZ: modalTitleZ,
  modalButtonZ: modalButtonZ,
  // Side Panel
  sidePanelBg: sidePanelBg,
  sidePanelInnerPadding: sidePanelInnerPadding,
  sideBarCloseBtnBgd: sideBarCloseBtnBgd,
  sideBarCloseBtnColor: sideBarCloseBtnColor,
  sideBarCloseBtnBgdHover: sideBarCloseBtnBgdHover,
  sidePanelHeaderBg: sidePanelHeaderBg,
  sidePanelScrollBarWidth: sidePanelScrollBarWidth,
  sidePanelScrollBarHeight: sidePanelScrollBarHeight,
  // Side Panel Panel
  panelActiveBg: panelActiveBg,
  panelBackground: panelBackground,
  panelBackgroundHover: panelBackgroundHover,
  panelBackgroundLT: panelBackgroundLT,
  panelBoxShadow: panelBoxShadow,
  panelBorderRadius: panelBorderRadius,
  panelBorder: panelBorder,
  panelBorderColor: panelBorderColor,
  panelBorderLT: panelBorderLT,
  panelHeaderIcon: panelHeaderIcon,
  panelHeaderIconActive: panelHeaderIconActive,
  panelHeaderHeight: panelHeaderHeight,
  panelDropdownScrollBar: panelDropdownScrollBar,
  // Text
  fontFamily: fontFamily,
  fontWeight: fontWeight,
  fontSize: fontSize,
  lineHeight: lineHeight,
  textColor: textColor,
  textColorLT: textColorLT,
  textColorHl: textColorHl,
  titleTextColor: titleTextColor,
  subtextColor: subtextColor,
  subtextColorLT: subtextColorLT,
  subtextColorActive: subtextColorActive,
  textTruncate: textTruncate,
  titleColorLT: titleColorLT,
  tooltipBg: tooltipBg,
  tooltipColor: tooltipColor,
  logoColor: logoColor,
  // Bottom Panel
  bottomInnerPdSide: bottomInnerPdSide,
  bottomInnerPdVert: bottomInnerPdVert,
  bottomPanelGap: bottomPanelGap,
  // Slider
  sliderBarColor: sliderBarColor,
  sliderBarBgd: sliderBarBgd,
  sliderBarHoverColor: sliderBarHoverColor,
  sliderBarRadius: sliderBarRadius,
  sliderBarHeight: sliderBarHeight,
  sliderHandleHeight: sliderHandleHeight,
  sliderHandleWidth: sliderHandleWidth,
  sliderHandleColor: sliderHandleColor,
  sliderHandleHoverColor: sliderHandleHoverColor,
  sliderHandleShadow: sliderHandleShadow,
  sliderInputHeight: sliderInputHeight,
  sliderInputWidth: sliderInputWidth,
  sliderMarginTopIsRange: sliderMarginTopIsRange,
  sliderMarginTop: sliderMarginTop,
  // Plot
  rangeBrushBgd: rangeBrushBgd,
  histogramFillInRange: histogramFillInRange,
  histogramFillOutRange: histogramFillOutRange,
  // Notifications
  notificationColors: notificationColors,
  notificationPanelWidth: notificationPanelWidth,
  notificationPanelItemWidth: notificationPanelItemWidth,
  notificationPanelItemHeight: notificationPanelItemHeight,
  // datagrid
  columnWidth: columnWidth,
  extendColumnWidth: extendColumnWidth,
  cellHeaderHeight: cellHeaderHeight,
  cellHeight: cellHeight,
  cellPaddingSide: cellPaddingSide,
  extendCellHeight: extendCellHeight,
  gridDefaultWidth: gridDefaultWidth,
  gridDefaultHeight: gridDefaultHeight,
  gridPaddingSide: gridPaddingSide,
  // time display
  timeDisplayBorderRadius: timeDisplayBorderRadius,
  timeDisplayHeight: timeDisplayHeight,
  timeDisplayMinWidth: timeDisplayMinWidth,
  timeDisplayOpacity: timeDisplayOpacity,
  timeDisplayPadding: timeDisplayPadding,
  // export map
  exportIntraSectionMargin: exportIntraSectionMargin,
  // Action Panel
  actionPanelWidth: actionPanelWidth,
  actionPanelHeight: actionPanelHeight,
  // Breakpoints
  breakPoints: breakPoints
});

exports.theme = theme;

var themeLT = _objectSpread({}, theme, {
  // template
  activeColor: activeColorLT,
  input: inputLT,
  textColor: textColorLT,
  sidePanelBg: '#FFFFFF',
  selectColor: selectColorLT,
  titleTextColor: '#000000',
  sidePanelHeaderBg: '#F7F7F7',
  subtextColorActive: activeColorLT,
  tooltipBg: '#1869B5',
  tooltipColor: '#FFFFFF',
  dropdownListBgd: '#FFFFFF',
  textColorHl: activeColorLT,
  inputBgd: '#F7F7F7',
  inputBgdHover: '#FFFFFF',
  inputBgdActive: '#FFFFFF',
  dropdownListHighlightBg: '#F0F0F0',
  panelBackground: '#F7F7F7',
  panelBackgroundHover: '#F7F7F7',
  panelBorderColor: '#D3D8E0',
  sideBarCloseBtnBgd: '#F7F7F7',
  sideBarCloseBtnColor: textColorLT,
  sideBarCloseBtnBgdHover: '#F7F7F7',
  secondaryInputBgd: '#F7F7F7',
  secondaryInputBgdActive: '#F7F7F7',
  secondaryInputBgdHover: '#FFFFFF',
  secondaryInputBorderActiveColor: '#000000',
  secondaryInputBorderColor: 'none',
  secondaryInputColor: '#545454',
  panelActiveBg: '#F7F7F7',
  mapPanelBackgroundColor: '#FFFFFF',
  mapPanelHeaderBackgroundColor: '#F7F7F7',
  sliderBarColor: '#A0A7B4',
  sliderBarBgd: '#D3D8E0',
  sliderHandleColor: '#F7F7F7',
  sliderHandleHoverColor: '#F7F7F7',
  subtextColor: subtextColorLT,
  switchBtnBgd: '#F7F7F7',
  secondarySwitchBtnBgd: '#F7F7F7',
  secondarySwitchTrackBgd: '#D3D8E0',
  switchBtnBgdActive: '#F7F7F7',
  switchTrackBgd: '#D3D8E0',
  switchTrackBgdActive: activeColorLT,
  // button switch background and hover color
  primaryBtnBgd: primaryBtnActBgd,
  primaryBtnActBgd: primaryBtnBgd,
  primaryBtnBgdHover: primaryBtnBgd,
  secondaryBtnBgd: secondaryBtnActBgd,
  secondaryBtnActBgd: secondaryBtnBgd,
  secondaryBtnBgdHover: secondaryBtnBgd,
  floatingBtnBgd: '#F7F7F7',
  floatingBtnActBgd: '#F7F7F7',
  floatingBtnBgdHover: '#F7F7F7',
  floatingBtnColor: subtextColor,
  floatingBtnActColor: activeColorLT,
  linkBtnActColor: textColorLT,
  rangeBrushBgd: '#D3D8E0',
  histogramFillInRange: activeColorLT,
  histogramFillOutRange: '#A0A7B4'
});

exports.themeLT = themeLT;

var themeBS = _objectSpread({}, theme, {
  activeColor: '#E2E2E2',
  dropdownListBgd: '#FFFFFF',
  dropdownListBorderTop: 'none',
  dropdownListHighlightBg: '#F6F6F6',
  inputBgd: '#E2E2E2',
  inputBgdActive: '#E2E2E2',
  inputBgdHover: 'inherit',
  inputBorderActiveColor: '#000000',
  inputColor: '#000000',
  panelActiveBg: '#E2E2E2',
  panelBackground: '#FFFFFF',
  panelBackgroundHover: '#EEEEEE',
  panelBorderColor: '#E2E2E2',
  primaryBtnBgd: '#E2E2E2',
  primaryBtnBgdHover: '#333333',
  primaryBtnColor: '#000000',
  secondaryBtnActBgd: '#EEEEEE',
  secondaryBtnActColor: '#000000',
  secondaryBtnBgd: '#E2E2E2',
  secondaryBtnBgdHover: '#CBCBCB',
  sideBarCloseBtnBgd: '#E2E2E2',
  sideBarCloseBtnColor: '#000000',
  sideBarCloseBtnBgdHover: '#FFFFFF',
  floatingBtnBgd: '#FFFFFF',
  floatingBtnActBgd: '#EEEEEE',
  floatingBtnBgdHover: '#EEEEEE',
  floatingBtnColor: '#AFAFAF',
  floatingBtnActColor: '#000000',
  secondaryBtnColor: '#000000',
  secondaryInputBgd: '#F6F6F6',
  secondaryInputBgdActive: '#F6F6F6',
  secondaryInputBgdHover: '#F6F6F6',
  secondaryInputBorderActiveColor: '#000000',
  secondaryInputBorderColor: 'none',
  secondaryInputColor: '#545454',
  sidePanelBg: '#F6F6F6',
  sidePanelHeaderBg: '#FFFFFF',
  subtextColor: '#AFAFAF',
  subtextColorActive: '#000000',
  textColor: '#000000',
  textColorHl: '#545454',
  mapPanelBackgroundColor: '#F6F6F6',
  mapPanelHeaderBackgroundColor: '#FFFFFF',
  titleTextColor: '#000000',
  switchBtnBgdActive: '#000000',
  switchBtnBgd: '#FFFFFF',
  switchTrackBgdActive: '#E2E2E2',
  secondarySwitchTrackBgd: '#E2E2E2',
  switchTrackBgd: '#E2E2E2',
  secondarySwitchBtnBgd: '#FFFFFF',
  histogramFillInRange: '#000000',
  histogramFillOutRange: '#E2E2E2',
  rangeBrushBgd: '#E2E2E2',
  sliderBarBgd: '#E2E2E2',
  sliderHandleColor: '#FFFFFF',
  sliderBarColor: '#000000'
});

exports.themeBS = themeBS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZXMvYmFzZS5qcyJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkZhc3QiLCJ0cmFuc2l0aW9uU2xvdyIsImJveFNoYWRvdyIsImJveFNpemluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ29sb3JMVCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGFiZWxDb2xvciIsImxhYmVsSG92ZXJDb2xvciIsImxhYmVsQ29sb3JMVCIsInRleHRDb2xvciIsInRleHRDb2xvckxUIiwidGl0bGVDb2xvckxUIiwic3VidGV4dENvbG9yIiwic3VidGV4dENvbG9yTFQiLCJzdWJ0ZXh0Q29sb3JBY3RpdmUiLCJ0aXRsZVRleHRDb2xvciIsInRleHRDb2xvckhsIiwidGV4dENvbG9ySGxMVCIsImFjdGl2ZUNvbG9yIiwiYWN0aXZlQ29sb3JMVCIsImFjdGl2ZUNvbG9ySG92ZXIiLCJlcnJvckNvbG9yIiwibG9nb0NvbG9yIiwicHJpbWFyeUJ0bkJnZCIsInByaW1hcnlCdG5BY3RCZ2QiLCJwcmltYXJ5QnRuQ29sb3IiLCJwcmltYXJ5QnRuQWN0Q29sb3IiLCJwcmltYXJ5QnRuQmdkSG92ZXIiLCJwcmltYXJ5QnRuUmFkaXVzIiwic2Vjb25kYXJ5QnRuQmdkIiwic2Vjb25kYXJ5QnRuQWN0QmdkIiwic2Vjb25kYXJ5QnRuQ29sb3IiLCJzZWNvbmRhcnlCdG5BY3RDb2xvciIsInNlY29uZGFyeUJ0bkJnZEhvdmVyIiwibGlua0J0bkJnZCIsImxpbmtCdG5BY3RCZ2QiLCJsaW5rQnRuQ29sb3IiLCJsaW5rQnRuQWN0Q29sb3IiLCJsaW5rQnRuQWN0QmdkSG92ZXIiLCJuZWdhdGl2ZUJ0bkJnZCIsIm5lZ2F0aXZlQnRuQWN0QmdkIiwibmVnYXRpdmVCdG5CZ2RIb3ZlciIsIm5lZ2F0aXZlQnRuQ29sb3IiLCJuZWdhdGl2ZUJ0bkFjdENvbG9yIiwiZmxvYXRpbmdCdG5CZ2QiLCJmbG9hdGluZ0J0bkFjdEJnZCIsImZsb2F0aW5nQnRuQmdkSG92ZXIiLCJmbG9hdGluZ0J0bkNvbG9yIiwiZmxvYXRpbmdCdG5BY3RDb2xvciIsImlucHV0Qm94SGVpZ2h0IiwiaW5wdXRCb3hIZWlnaHRTbWFsbCIsImlucHV0Qm94SGVpZ2h0VGlueSIsImlucHV0UGFkZGluZyIsImlucHV0UGFkZGluZ1NtYWxsIiwiaW5wdXRQYWRkaW5nVGlueSIsImlucHV0Rm9udFNpemUiLCJpbnB1dEZvbnRTaXplU21hbGwiLCJpbnB1dEZvbnRXZWlnaHQiLCJpbnB1dEJnZCIsImlucHV0QmdkSG92ZXIiLCJpbnB1dEJnZEFjdGl2ZSIsImlucHV0Qm9yZGVyQ29sb3IiLCJpbnB1dEJvcmRlckhvdmVyQ29sb3IiLCJpbnB1dEJvcmRlckFjdGl2ZUNvbG9yIiwiaW5wdXRDb2xvciIsImlucHV0Qm9yZGVyUmFkaXVzIiwiaW5wdXRQbGFjZWhvbGRlckNvbG9yIiwiaW5wdXRQbGFjZWhvbGRlckZvbnRXZWlnaHQiLCJzZWNvbmRhcnlJbnB1dEJnZCIsInNlY29uZGFyeUlucHV0QmdkSG92ZXIiLCJzZWNvbmRhcnlJbnB1dEJnZEFjdGl2ZSIsInNlY29uZGFyeUlucHV0Q29sb3IiLCJzZWNvbmRhcnlJbnB1dEJvcmRlckNvbG9yIiwic2Vjb25kYXJ5SW5wdXRCb3JkZXJBY3RpdmVDb2xvciIsInNlbGVjdENvbG9yIiwic2VsZWN0Q29sb3JMVCIsInNlbGVjdEFjdGl2ZUJvcmRlckNvbG9yIiwic2VsZWN0Rm9udFNpemUiLCJzZWxlY3RGb250V2VpZ2h0Iiwic2VsZWN0Rm9udFdlaWdodEJvbGQiLCJzZWxlY3RDb2xvclBsYWNlSG9sZGVyIiwic2VsZWN0QmFja2dyb3VuZCIsInNlbGVjdEJhY2tncm91bmRIb3ZlciIsInNlbGVjdEJhY2tncm91bmRMVCIsInNlbGVjdEJhY2tncm91bmRIb3ZlckxUIiwic2VsZWN0Qm9yZGVyQ29sb3IiLCJzZWxlY3RCb3JkZXJDb2xvckxUIiwic2VsZWN0Qm9yZGVyUmFkaXVzIiwic2VsZWN0Qm9yZGVyIiwiZHJvcGRvd25MaXN0SGlnaGxpZ2h0QmciLCJkcm9wZG93bkxpc3RTaGFkb3ciLCJkcm9wZG93bkxpc3RCZ2QiLCJkcm9wZG93bkxpc3RCb3JkZXJUb3AiLCJkcm9wZG93bldyYXBwZXJaIiwic3dpdGNoV2lkdGgiLCJzd2l0Y2hIZWlnaHQiLCJzd2l0Y2hMYWJlbE1hcmdpbiIsInN3aXRjaFRyYWNrQmdkIiwic3dpdGNoVHJhY2tCZ2RBY3RpdmUiLCJzd2l0Y2hUcmFja0JvcmRlclJhZGl1cyIsInN3aXRjaEJ0bkJnZCIsInN3aXRjaEJ0bkJnZEFjdGl2ZSIsInN3aXRjaEJ0bkJveFNoYWRvdyIsInN3aXRjaEJ0bkJvcmRlclJhZGl1cyIsInN3aXRjaEJ0bldpZHRoIiwic3dpdGNoQnRuSGVpZ2h0Iiwic2Vjb25kYXJ5U3dpdGNoVHJhY2tCZ2QiLCJzZWNvbmRhcnlTd2l0Y2hCdG5CZ2QiLCJjaGVja2JveFdpZHRoIiwiY2hlY2tib3hIZWlnaHQiLCJjaGVja2JveE1hcmdpbiIsImNoZWNrYm94Qm9yZGVyQ29sb3IiLCJjaGVja2JveEJvcmRlclJhZGl1cyIsImNoZWNrYm94Qm9yZGVyQ29sb3JMVCIsImNoZWNrYm94Qm94QmdkIiwiY2hlY2tib3hCb3hCZ2RDaGVja2VkIiwic2lkZVBhbmVsSGVhZGVyQmciLCJzaWRlUGFuZWxJbm5lclBhZGRpbmciLCJzaWRlUGFuZWxCZyIsInNpZGVQYW5lbFNjcm9sbEJhcldpZHRoIiwic2lkZVBhbmVsU2Nyb2xsQmFySGVpZ2h0Iiwic2lkZUJhckNsb3NlQnRuQmdkIiwic2lkZUJhckNsb3NlQnRuQ29sb3IiLCJzaWRlQmFyQ2xvc2VCdG5CZ2RIb3ZlciIsInBhbmVsQmFja2dyb3VuZCIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwicGFuZWxBY3RpdmVCZyIsInBhbmVsQWN0aXZlQmdMVCIsInBhbmVsSGVhZGVySWNvbiIsInBhbmVsSGVhZGVySWNvbkFjdGl2ZSIsInBhbmVsSGVhZGVySGVpZ2h0IiwicGFuZWxCb3hTaGFkb3ciLCJwYW5lbEJvcmRlclJhZGl1cyIsInBhbmVsQmFja2dyb3VuZExUIiwicGFuZWxCb3JkZXJDb2xvciIsInBhbmVsQm9yZGVyIiwicGFuZWxCb3JkZXJMVCIsIm1hcFBhbmVsQmFja2dyb3VuZENvbG9yIiwibWFwUGFuZWxIZWFkZXJCYWNrZ3JvdW5kQ29sb3IiLCJ0b29sdGlwQmciLCJ0b29sdGlwQ29sb3IiLCJib3R0b21Jbm5lclBkU2lkZSIsImJvdHRvbUlubmVyUGRWZXJ0IiwiYm90dG9tUGFuZWxHYXAiLCJtb2RhbFRpdGxlQ29sb3IiLCJtb2RhbFRpdGxlRm9udFNpemUiLCJtb2RhbFRpdGxlRm9udFNpemVTbWFsbGVyIiwibW9kYWxGb290ZXJCZ2QiLCJtb2RhbEltYWdlUGxhY2VIb2xkZXIiLCJtb2RhbFBhZGRpbmciLCJtb2RhbExhdGVyYWxQYWRkaW5nIiwibW9kYWxQb3J0YWJsZUxhdGVyYWxQYWRkaW5nIiwibW9kYWxPdmVyTGF5WiIsIm1vZGFsT3ZlcmxheUJnZCIsIm1vZGFsQ29udGVudFoiLCJtb2RhbEZvb3RlcloiLCJtb2RhbFRpdGxlWiIsIm1vZGFsQnV0dG9uWiIsIm1vZGFsRGlhbG9nQmdkIiwibW9kYWxEaWFsb2dDb2xvciIsInNsaWRlckJhckNvbG9yIiwic2xpZGVyQmFyQmdkIiwic2xpZGVyQmFySG92ZXJDb2xvciIsInNsaWRlckJhclJhZGl1cyIsInNsaWRlckJhckhlaWdodCIsInNsaWRlckhhbmRsZUhlaWdodCIsInNsaWRlckhhbmRsZVdpZHRoIiwic2xpZGVySGFuZGxlQ29sb3IiLCJzbGlkZXJIYW5kbGVIb3ZlckNvbG9yIiwic2xpZGVySGFuZGxlU2hhZG93Iiwic2xpZGVySW5wdXRIZWlnaHQiLCJzbGlkZXJJbnB1dFdpZHRoIiwic2xpZGVyTWFyZ2luVG9wSXNSYW5nZSIsInNsaWRlck1hcmdpblRvcCIsInJhbmdlQnJ1c2hCZ2QiLCJoaXN0b2dyYW1GaWxsSW5SYW5nZSIsImhpc3RvZ3JhbUZpbGxPdXRSYW5nZSIsIm5vdGlmaWNhdGlvbkNvbG9ycyIsImluZm8iLCJlcnJvciIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwibm90aWZpY2F0aW9uUGFuZWxXaWR0aCIsIm5vdGlmaWNhdGlvblBhbmVsSXRlbVdpZHRoIiwibm90aWZpY2F0aW9uUGFuZWxJdGVtSGVpZ2h0IiwiY29sdW1uV2lkdGgiLCJjZWxsSGVhZGVySGVpZ2h0IiwiY2VsbEhlaWdodCIsImNlbGxQYWRkaW5nU2lkZSIsImV4dGVuZENlbGxIZWlnaHQiLCJleHRlbmRDb2x1bW5XaWR0aCIsImdyaWREZWZhdWx0V2lkdGgiLCJncmlkRGVmYXVsdEhlaWdodCIsImdyaWRQYWRkaW5nU2lkZSIsInRpbWVEaXNwbGF5Qm9yZGVyUmFkaXVzIiwidGltZURpc3BsYXlIZWlnaHQiLCJ0aW1lRGlzcGxheU1pbldpZHRoIiwidGltZURpc3BsYXlPcGFjaXR5IiwidGltZURpc3BsYXlQYWRkaW5nIiwiZXhwb3J0SW50cmFTZWN0aW9uTWFyZ2luIiwiYWN0aW9uUGFuZWxXaWR0aCIsImFjdGlvblBhbmVsSGVpZ2h0IiwidGV4dFRydW5jYXRlIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJ3b3JkV3JhcCIsImJyZWFrUG9pbnRzIiwicGFsbSIsImRlc2siLCJpbnB1dCIsImNzcyIsInByb3BzIiwidGhlbWUiLCJhY3RpdmUiLCJpbmNsdWRlcyIsInNpemUiLCJkaXNhYmxlZCIsInR5cGUiLCJpbnB1dExUIiwic2Vjb25kYXJ5SW5wdXQiLCJjaGlja2xldGVkSW5wdXRDb250YWluZXIiLCJjaGlja2xldGVkSW5wdXQiLCJzZWNvbmRhcnlDaGlja2xldGVkSW5wdXQiLCJpbmxpbmVJbnB1dCIsInN3aXRjaFRyYWNrIiwiY2hlY2tlZCIsInN3aXRjaEJ1dHRvbiIsImlucHV0U3dpdGNoIiwiY2hlY2tib3hCb3giLCJjaGVja2JveENoZWNrIiwiaW5wdXRDaGVja2JveCIsInNlY29uZGFyeVN3aXRjaCIsImRyb3Bkb3duU2Nyb2xsQmFyIiwiZHJvcGRvd25MaXN0QW5jaG9yIiwiZHJvcGRvd25MaXN0SXRlbSIsImRyb3Bkb3duTGlzdEhlYWRlciIsImRyb3Bkb3duTGlzdFNlY3Rpb24iLCJkcm9wZG93bkxpc3QiLCJzaWRlUGFuZWxTY3JvbGxCYXIiLCJwYW5lbERyb3Bkb3duU2Nyb2xsQmFyIiwic2Nyb2xsQmFyIiwibW9kYWxTY3JvbGxCYXIiLCJESU1FTlNJT05TIiwidGhlbWVMVCIsInRoZW1lQlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxVQUFVLEdBQUcsY0FBbkI7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGNBQXZCOztBQUNBLElBQU1DLGNBQWMsR0FBRyxjQUF2Qjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsOEJBQWxCOztBQUNBLElBQU1DLFNBQVMsR0FBRyxZQUFsQjs7QUFDQSxJQUFNQyxZQUFZLEdBQUcsS0FBckI7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLFNBQXBCOztBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUF0QixDLENBRVA7OztBQUNPLElBQU1DLFVBQVUsNkRBQWhCOztBQUNBLElBQU1DLFVBQVUsR0FBRyxHQUFuQjs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsU0FBakI7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLE9BQW5COztBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFuQjs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsU0FBeEI7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHLFNBQXJC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Q0k7QUEyQ2xCRSxFQUFBQSxrQkFBa0IsRUFBRSxTQTNDRjtBQTRDbEJMLEVBQUFBLFNBQVMsRUFBRSxTQTVDTztBQTZDbEJPLEVBQUFBLFdBQVcsRUFBRSxTQTdDSztBQThDbEJ5SCxFQUFBQSx1QkFBdUIsRUFBRSxTQTlDUDtBQStDbEJDLEVBQUFBLDZCQUE2QixFQUFFLFNBL0NiO0FBZ0RsQjNILEVBQUFBLGNBQWMsRUFBRSxTQWhERTtBQWlEbEJzRixFQUFBQSxrQkFBa0IsRUFBRSxTQWpERjtBQWtEbEJELEVBQUFBLFlBQVksRUFBRSxTQWxESTtBQW1EbEJGLEVBQUFBLG9CQUFvQixFQUFFLFNBbkRKO0FBb0RsQlEsRUFBQUEsdUJBQXVCLEVBQUUsU0FwRFA7QUFxRGxCVCxFQUFBQSxjQUFjLEVBQUUsU0FyREU7QUFzRGxCVSxFQUFBQSxxQkFBcUIsRUFBRSxTQXRETDtBQXVEbEJvRSxFQUFBQSxvQkFBb0IsRUFBRSxTQXZESjtBQXdEbEJDLEVBQUFBLHFCQUFxQixFQUFFLFNBeERMO0FBeURsQkYsRUFBQUEsYUFBYSxFQUFFLFNBekRHO0FBMERsQmIsRUFBQUEsWUFBWSxFQUFFLFNBMURJO0FBMkRsQk0sRUFBQUEsaUJBQWlCLEVBQUUsU0EzREQ7QUE0RGxCUCxFQUFBQSxjQUFjLEVBQUU7QUE1REUsRUFBYiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0RJTUVOU0lPTlN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuZXhwb3J0IGNvbnN0IHRyYW5zaXRpb24gPSAnYWxsIC40cyBlYXNlJztcbmV4cG9ydCBjb25zdCB0cmFuc2l0aW9uRmFzdCA9ICdhbGwgLjJzIGVhc2UnO1xuZXhwb3J0IGNvbnN0IHRyYW5zaXRpb25TbG93ID0gJ2FsbCAuOHMgZWFzZSc7XG5cbmV4cG9ydCBjb25zdCBib3hTaGFkb3cgPSAnMCAxcHggMnB4IDAgcmdiYSgwLDAsMCwwLjEwKSc7XG5leHBvcnQgY29uc3QgYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuZXhwb3J0IGNvbnN0IGJvcmRlclJhZGl1cyA9ICcxcHgnO1xuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG9yID0gJyMzQTQxNEMnO1xuZXhwb3J0IGNvbnN0IGJvcmRlckNvbG9yTFQgPSAnI0YxRjFGMSc7XG5cbi8vIFRFWFRcbmV4cG9ydCBjb25zdCBmb250RmFtaWx5ID0gYGZmLWNsYW4td2ViLXBybywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmYDtcbmV4cG9ydCBjb25zdCBmb250V2VpZ2h0ID0gNDAwO1xuZXhwb3J0IGNvbnN0IGZvbnRTaXplID0gJzAuODc1ZW0nO1xuZXhwb3J0IGNvbnN0IGxpbmVIZWlnaHQgPSAxLjcxNDI5O1xuZXhwb3J0IGNvbnN0IGxhYmVsQ29sb3IgPSAnIzZBNzQ4NSc7XG5leHBvcnQgY29uc3QgbGFiZWxIb3ZlckNvbG9yID0gJyNDNkM2QzYnO1xuZXhwb3J0IGNvbnN0IGxhYmVsQ29sb3JMVCA9ICcjNkE3NDg1JztcblxuZXhwb3J0IGNvbnN0IHRleHRDb2xvciA9ICcjQTBBN0I0JztcbmV4cG9ydCBjb25zdCB0ZXh0Q29sb3JMVCA9ICcjM0E0MTRDJztcbmV4cG9ydCBjb25zdCB0aXRsZUNvbG9yTFQgPSAnIzI5MzIzQyc7XG5cbmV4cG9ydCBjb25zdCBzdWJ0ZXh0Q29sb3IgPSAnIzZBNzQ4NSc7XG5leHBvcnQgY29uc3Qgc3VidGV4dENvbG9yTFQgPSAnI0EwQTdCNCc7XG5leHBvcnQgY29uc3Qgc3VidGV4dENvbG9yQWN0aXZlID0gJyNGRkZGRkYnO1xuXG5leHBvcnQgY29uc3QgdGl0bGVUZXh0Q29sb3IgPSAnI0ZGRkZGRic7XG5leHBvcnQgY29uc3QgdGV4dENvbG9ySGwgPSAnI0YwRjBGMCc7XG5leHBvcnQgY29uc3QgdGV4dENvbG9ySGxMVCA9ICcjRjFGMUYxJztcbmV4cG9ydCBjb25zdCBhY3RpdmVDb2xvciA9ICcjMUZCQUQ2JztcbmV4cG9ydCBjb25zdCBhY3RpdmVDb2xvckxUID0gJyMyNDczQkQnO1xuZXhwb3J0IGNvbnN0IGFjdGl2ZUNvbG9ySG92ZXIgPSAnIzEwODE4OCc7XG5leHBvcnQgY29uc3QgZXJyb3JDb2xvciA9ICcjRjkwNDJDJztcbmV4cG9ydCBjb25zdCBsb2dvQ29sb3IgPSBhY3RpdmVDb2xvcjtcblxuLy8gQnV0dG9uXG5leHBvcnQgY29uc3QgcHJpbWFyeUJ0bkJnZCA9ICcjMEY5NjY4JztcbmV4cG9ydCBjb25zdCBwcmltYXJ5QnRuQWN0QmdkID0gJyMxM0IxN0InO1xuZXhwb3J0IGNvbnN0IHByaW1hcnlCdG5Db2xvciA9ICcjRkZGRkZGJztcbmV4cG9ydCBjb25zdCBwcmltYXJ5QnRuQWN0Q29sb3IgPSAnI0ZGRkZGRic7XG5leHBvcnQgY29uc3QgcHJpbWFyeUJ0bkJnZEhvdmVyID0gJyMxM0IxN0InO1xuZXhwb3J0IGNvbnN0IHByaW1hcnlCdG5SYWRpdXMgPSAnMnB4JztcblxuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUJ0bkJnZCA9ICcjNkE3NDg1JztcbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlCdG5BY3RCZ2QgPSAnI0EwQTdCNCc7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5QnRuQ29sb3IgPSAnI0ZGRkZGRic7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5QnRuQWN0Q29sb3IgPSAnI0ZGRkZGRic7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5QnRuQmdkSG92ZXIgPSAnI0EwQTdCNCc7XG5cbmV4cG9ydCBjb25zdCBsaW5rQnRuQmdkID0gJ3RyYW5zcGFyZW50JztcbmV4cG9ydCBjb25zdCBsaW5rQnRuQWN0QmdkID0gbGlua0J0bkJnZDtcbmV4cG9ydCBjb25zdCBsaW5rQnRuQ29sb3IgPSAnI0EwQTdCNCc7XG5leHBvcnQgY29uc3QgbGlua0J0bkFjdENvbG9yID0gdGV4dENvbG9ySGxMVDtcbmV4cG9ydCBjb25zdCBsaW5rQnRuQWN0QmdkSG92ZXIgPSBsaW5rQnRuQmdkO1xuXG5leHBvcnQgY29uc3QgbmVnYXRpdmVCdG5CZ2QgPSBlcnJvckNvbG9yO1xuZXhwb3J0IGNvbnN0IG5lZ2F0aXZlQnRuQWN0QmdkID0gJyNGRjE5M0UnO1xuZXhwb3J0IGNvbnN0IG5lZ2F0aXZlQnRuQmdkSG92ZXIgPSAnI0ZGMTkzRSc7XG5leHBvcnQgY29uc3QgbmVnYXRpdmVCdG5Db2xvciA9ICcjRkZGRkZGJztcbmV4cG9ydCBjb25zdCBuZWdhdGl2ZUJ0bkFjdENvbG9yID0gJyNGRkZGRkYnO1xuXG5leHBvcnQgY29uc3QgZmxvYXRpbmdCdG5CZ2QgPSAnIzI5MzIzQyc7XG5leHBvcnQgY29uc3QgZmxvYXRpbmdCdG5BY3RCZ2QgPSAnIzNBNDU1Mic7XG5leHBvcnQgY29uc3QgZmxvYXRpbmdCdG5CZ2RIb3ZlciA9ICcjM0E0NTUyJztcbmV4cG9ydCBjb25zdCBmbG9hdGluZ0J0bkNvbG9yID0gc3VidGV4dENvbG9yO1xuZXhwb3J0IGNvbnN0IGZsb2F0aW5nQnRuQWN0Q29sb3IgPSBzdWJ0ZXh0Q29sb3JBY3RpdmU7XG5cbi8vIElucHV0XG5leHBvcnQgY29uc3QgaW5wdXRCb3hIZWlnaHQgPSAnMzRweCc7XG5leHBvcnQgY29uc3QgaW5wdXRCb3hIZWlnaHRTbWFsbCA9ICcyNHB4JztcbmV4cG9ydCBjb25zdCBpbnB1dEJveEhlaWdodFRpbnkgPSAnMThweCc7XG5leHBvcnQgY29uc3QgaW5wdXRQYWRkaW5nID0gJzRweCAxMHB4JztcbmV4cG9ydCBjb25zdCBpbnB1dFBhZGRpbmdTbWFsbCA9ICc0cHggNnB4JztcbmV4cG9ydCBjb25zdCBpbnB1dFBhZGRpbmdUaW55ID0gJzJweCA0cHgnO1xuZXhwb3J0IGNvbnN0IGlucHV0Rm9udFNpemUgPSAnMTFweCc7XG5leHBvcnQgY29uc3QgaW5wdXRGb250U2l6ZVNtYWxsID0gJzEwcHgnO1xuZXhwb3J0IGNvbnN0IGlucHV0Rm9udFdlaWdodCA9IDUwMDtcbmV4cG9ydCBjb25zdCBpbnB1dEJnZCA9ICcjMjkzMjNDJztcbmV4cG9ydCBjb25zdCBpbnB1dEJnZEhvdmVyID0gJyMzQTQxNEMnO1xuZXhwb3J0IGNvbnN0IGlucHV0QmdkQWN0aXZlID0gJyMzQTQxNEMnO1xuZXhwb3J0IGNvbnN0IGlucHV0Qm9yZGVyQ29sb3IgPSAnIzI5MzIzQyc7XG5leHBvcnQgY29uc3QgaW5wdXRCb3JkZXJIb3ZlckNvbG9yID0gJyMzQTQxNEMnO1xuZXhwb3J0IGNvbnN0IGlucHV0Qm9yZGVyQWN0aXZlQ29sb3IgPSAnI0QzRDhFMCc7XG5leHBvcnQgY29uc3QgaW5wdXRDb2xvciA9ICcjQTBBN0I0JztcbmV4cG9ydCBjb25zdCBpbnB1dEJvcmRlclJhZGl1cyA9ICcxcHgnO1xuZXhwb3J0IGNvbnN0IGlucHV0UGxhY2Vob2xkZXJDb2xvciA9ICcjNkE3NDg1JztcbmV4cG9ydCBjb25zdCBpbnB1dFBsYWNlaG9sZGVyRm9udFdlaWdodCA9IDQwMDtcblxuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUlucHV0QmdkID0gJyMyNDI3MzAnO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUlucHV0QmdkSG92ZXIgPSAnIzNBNDE0Qyc7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5SW5wdXRCZ2RBY3RpdmUgPSAnIzNBNDE0Qyc7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5SW5wdXRDb2xvciA9ICcjQTBBN0I0JztcbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlJbnB1dEJvcmRlckNvbG9yID0gJyMyNDI3MzAnO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUlucHV0Qm9yZGVyQWN0aXZlQ29sb3IgPSAnI0QzRDhFMCc7XG5cbi8vIFNlbGVjdFxuZXhwb3J0IGNvbnN0IHNlbGVjdENvbG9yID0gaW5wdXRDb2xvcjtcbmV4cG9ydCBjb25zdCBzZWxlY3RDb2xvckxUID0gdGl0bGVDb2xvckxUO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0QWN0aXZlQm9yZGVyQ29sb3IgPSAnI0QzRDhFMCc7XG5leHBvcnQgY29uc3Qgc2VsZWN0Rm9udFNpemUgPSAnMTFweCc7XG5leHBvcnQgY29uc3Qgc2VsZWN0Rm9udFdlaWdodCA9ICc0MDAnO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEZvbnRXZWlnaHRCb2xkID0gJzUwMCc7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RDb2xvclBsYWNlSG9sZGVyID0gJyM2QTc0ODUnO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEJhY2tncm91bmQgPSBpbnB1dEJnZDtcbmV4cG9ydCBjb25zdCBzZWxlY3RCYWNrZ3JvdW5kSG92ZXIgPSBpbnB1dEJnZEhvdmVyO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEJhY2tncm91bmRMVCA9ICcjRkZGRkZGJztcbmV4cG9ydCBjb25zdCBzZWxlY3RCYWNrZ3JvdW5kSG92ZXJMVCA9ICcjRjhGOEY5JztcbmV4cG9ydCBjb25zdCBzZWxlY3RCb3JkZXJDb2xvciA9ICcjRDNEOEUwJztcbmV4cG9ydCBjb25zdCBzZWxlY3RCb3JkZXJDb2xvckxUID0gJyNEM0Q4RTAnO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEJvcmRlclJhZGl1cyA9ICcxcHgnO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEJvcmRlciA9IDA7XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93bkxpc3RIaWdobGlnaHRCZyA9ICcjNkE3NDg1JztcbmV4cG9ydCBjb25zdCBkcm9wZG93bkxpc3RTaGFkb3cgPSAnMCA2cHggMTJweCAwIHJnYmEoMCwwLDAsMC4xNiknO1xuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTGlzdEJnZCA9ICcjM0E0MTRDJztcbmV4cG9ydCBjb25zdCBkcm9wZG93bkxpc3RCb3JkZXJUb3AgPSAnIzI0MjczMCc7XG5leHBvcnQgY29uc3QgZHJvcGRvd25XcmFwcGVyWiA9IDEwMDtcbi8vIFN3aXRjaFxuZXhwb3J0IGNvbnN0IHN3aXRjaFdpZHRoID0gMjQ7XG5leHBvcnQgY29uc3Qgc3dpdGNoSGVpZ2h0ID0gMTI7XG5leHBvcnQgY29uc3Qgc3dpdGNoTGFiZWxNYXJnaW4gPSAxMjtcblxuZXhwb3J0IGNvbnN0IHN3aXRjaFRyYWNrQmdkID0gJyMyOTMyM0MnO1xuZXhwb3J0IGNvbnN0IHN3aXRjaFRyYWNrQmdkQWN0aXZlID0gYWN0aXZlQ29sb3I7XG5leHBvcnQgY29uc3Qgc3dpdGNoVHJhY2tCb3JkZXJSYWRpdXMgPSAnMXB4JztcbmV4cG9ydCBjb25zdCBzd2l0Y2hCdG5CZ2QgPSAnIzZBNzQ4NSc7XG5leHBvcnQgY29uc3Qgc3dpdGNoQnRuQmdkQWN0aXZlID0gJyNEM0Q4RTAnO1xuZXhwb3J0IGNvbnN0IHN3aXRjaEJ0bkJveFNoYWRvdyA9ICcwIDJweCA0cHggMCByZ2JhKDAsMCwwLDAuNDApJztcbmV4cG9ydCBjb25zdCBzd2l0Y2hCdG5Cb3JkZXJSYWRpdXMgPSAnMCc7XG5leHBvcnQgY29uc3Qgc3dpdGNoQnRuV2lkdGggPSAnMTJweCc7XG5leHBvcnQgY29uc3Qgc3dpdGNoQnRuSGVpZ2h0ID0gJzEycHgnO1xuXG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5U3dpdGNoVHJhY2tCZ2QgPSAnIzI0MjczMCc7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5U3dpdGNoQnRuQmdkID0gJyMzQTQxNEMnO1xuXG4vLyBDaGVja2JveFxuZXhwb3J0IGNvbnN0IGNoZWNrYm94V2lkdGggPSAxNjtcbmV4cG9ydCBjb25zdCBjaGVja2JveEhlaWdodCA9IDE2O1xuZXhwb3J0IGNvbnN0IGNoZWNrYm94TWFyZ2luID0gMTI7XG5leHBvcnQgY29uc3QgY2hlY2tib3hCb3JkZXJDb2xvciA9IHNlbGVjdEJvcmRlckNvbG9yO1xuZXhwb3J0IGNvbnN0IGNoZWNrYm94Qm9yZGVyUmFkaXVzID0gJzJweCc7XG5leHBvcnQgY29uc3QgY2hlY2tib3hCb3JkZXJDb2xvckxUID0gc2VsZWN0Qm9yZGVyQ29sb3JMVDtcbmV4cG9ydCBjb25zdCBjaGVja2JveEJveEJnZCA9ICd3aGl0ZSc7XG5leHBvcnQgY29uc3QgY2hlY2tib3hCb3hCZ2RDaGVja2VkID0gcHJpbWFyeUJ0bkJnZDtcblxuLy8gU2lkZSBQYW5lbFxuZXhwb3J0IGNvbnN0IHNpZGVQYW5lbEhlYWRlckJnID0gJyMyOTMyM0MnO1xuZXhwb3J0IGNvbnN0IHNpZGVQYW5lbElubmVyUGFkZGluZyA9IDE2O1xuZXhwb3J0IGNvbnN0IHNpZGVQYW5lbEJnID0gJyMyNDI3MzAnO1xuZXhwb3J0IGNvbnN0IHNpZGVQYW5lbFNjcm9sbEJhcldpZHRoID0gMTA7XG5leHBvcnQgY29uc3Qgc2lkZVBhbmVsU2Nyb2xsQmFySGVpZ2h0ID0gMTA7XG5leHBvcnQgY29uc3Qgc2lkZUJhckNsb3NlQnRuQmdkID0gc2Vjb25kYXJ5QnRuQmdkO1xuZXhwb3J0IGNvbnN0IHNpZGVCYXJDbG9zZUJ0bkNvbG9yID0gJyMyOTMyM0MnO1xuZXhwb3J0IGNvbnN0IHNpZGVCYXJDbG9zZUJ0bkJnZEhvdmVyID0gc2Vjb25kYXJ5QnRuQWN0QmdkO1xuXG5leHBvcnQgY29uc3QgcGFuZWxCYWNrZ3JvdW5kID0gJyMyOTMyM0MnO1xuZXhwb3J0IGNvbnN0IHBhbmVsQmFja2dyb3VuZEhvdmVyID0gJyMzQTQ1NTInO1xuZXhwb3J0IGNvbnN0IHBhbmVsQWN0aXZlQmcgPSAnIzNBNDU1Mic7XG5leHBvcnQgY29uc3QgcGFuZWxBY3RpdmVCZ0xUID0gJyM2QTc0ODUnO1xuZXhwb3J0IGNvbnN0IHBhbmVsSGVhZGVySWNvbiA9ICcjNkE3NDg1JztcbmV4cG9ydCBjb25zdCBwYW5lbEhlYWRlckljb25BY3RpdmUgPSAnI0EwQTdCNCc7XG5leHBvcnQgY29uc3QgcGFuZWxIZWFkZXJIZWlnaHQgPSA0ODtcbmV4cG9ydCBjb25zdCBwYW5lbEJveFNoYWRvdyA9ICcwIDZweCAxMnB4IDAgcmdiYSgwLDAsMCwwLjE2KSc7XG5leHBvcnQgY29uc3QgcGFuZWxCb3JkZXJSYWRpdXMgPSAnMnB4JztcbmV4cG9ydCBjb25zdCBwYW5lbEJhY2tncm91bmRMVCA9ICcjZjhmOGY5JztcblxuZXhwb3J0IGNvbnN0IHBhbmVsQm9yZGVyQ29sb3IgPSAnIzNBNDE0Qyc7XG5leHBvcnQgY29uc3QgcGFuZWxCb3JkZXIgPSBgMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3J9YDtcbmV4cG9ydCBjb25zdCBwYW5lbEJvcmRlckxUID0gYDFweCBzb2xpZCAke2JvcmRlckNvbG9yTFR9YDtcblxuZXhwb3J0IGNvbnN0IG1hcFBhbmVsQmFja2dyb3VuZENvbG9yID0gJyMyNDI3MzAnO1xuZXhwb3J0IGNvbnN0IG1hcFBhbmVsSGVhZGVyQmFja2dyb3VuZENvbG9yID0gJyMyOTMyM0MnO1xuZXhwb3J0IGNvbnN0IHRvb2x0aXBCZyA9ICcjRjhGOEY5JztcbmV4cG9ydCBjb25zdCB0b29sdGlwQ29sb3IgPSAnIzMzMzMzNCc7XG5cbi8vIEJvdHRvbSBQYW5lbFxuZXhwb3J0IGNvbnN0IGJvdHRvbUlubmVyUGRTaWRlID0gMzI7XG5leHBvcnQgY29uc3QgYm90dG9tSW5uZXJQZFZlcnQgPSA2O1xuZXhwb3J0IGNvbnN0IGJvdHRvbVBhbmVsR2FwID0gMjA7XG5cbi8vIE1vZGFsXG5leHBvcnQgY29uc3QgbW9kYWxUaXRsZUNvbG9yID0gJyMzQTQxNEMnO1xuZXhwb3J0IGNvbnN0IG1vZGFsVGl0bGVGb250U2l6ZSA9ICcyNHB4JztcbmV4cG9ydCBjb25zdCBtb2RhbFRpdGxlRm9udFNpemVTbWFsbGVyID0gJzE4cHgnO1xuZXhwb3J0IGNvbnN0IG1vZGFsRm9vdGVyQmdkID0gJyNGOEY4RjknO1xuZXhwb3J0IGNvbnN0IG1vZGFsSW1hZ2VQbGFjZUhvbGRlciA9ICcjRERERkUzJztcbmV4cG9ydCBjb25zdCBtb2RhbFBhZGRpbmcgPSAnMTBweCAwJztcbmV4cG9ydCBjb25zdCBtb2RhbExhdGVyYWxQYWRkaW5nID0gJzcycHgnO1xuZXhwb3J0IGNvbnN0IG1vZGFsUG9ydGFibGVMYXRlcmFsUGFkZGluZyA9ICczNnB4JztcblxuZXhwb3J0IGNvbnN0IG1vZGFsT3ZlckxheVogPSAxMDAxO1xuZXhwb3J0IGNvbnN0IG1vZGFsT3ZlcmxheUJnZCA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknO1xuZXhwb3J0IGNvbnN0IG1vZGFsQ29udGVudFogPSAxMDAwMjtcbmV4cG9ydCBjb25zdCBtb2RhbEZvb3RlclogPSAxMDAwMTtcbmV4cG9ydCBjb25zdCBtb2RhbFRpdGxlWiA9IDEwMDAzO1xuZXhwb3J0IGNvbnN0IG1vZGFsQnV0dG9uWiA9IDEwMDA1O1xuXG4vLyBNb2RhbCBEaWFsb2cgKERhcmspXG5leHBvcnQgY29uc3QgbW9kYWxEaWFsb2dCZ2QgPSAnIzNBNDE0Qyc7XG5leHBvcnQgY29uc3QgbW9kYWxEaWFsb2dDb2xvciA9IHRleHRDb2xvckhsO1xuXG4vLyBTbGlkZXJcbmV4cG9ydCBjb25zdCBzbGlkZXJCYXJDb2xvciA9ICcjNkE3NDg1JztcbmV4cG9ydCBjb25zdCBzbGlkZXJCYXJCZ2QgPSAnIzNBNDE0Qyc7XG5leHBvcnQgY29uc3Qgc2xpZGVyQmFySG92ZXJDb2xvciA9ICcjRDNEOEUwJztcbmV4cG9ydCBjb25zdCBzbGlkZXJCYXJSYWRpdXMgPSAnMXB4JztcbmV4cG9ydCBjb25zdCBzbGlkZXJCYXJIZWlnaHQgPSA0O1xuZXhwb3J0IGNvbnN0IHNsaWRlckhhbmRsZUhlaWdodCA9IDEyO1xuZXhwb3J0IGNvbnN0IHNsaWRlckhhbmRsZVdpZHRoID0gMTI7XG5leHBvcnQgY29uc3Qgc2xpZGVySGFuZGxlQ29sb3IgPSAnI0QzRDhFMCc7XG5leHBvcnQgY29uc3Qgc2xpZGVySGFuZGxlSG92ZXJDb2xvciA9ICcjRkZGRkZGJztcbmV4cG9ydCBjb25zdCBzbGlkZXJIYW5kbGVTaGFkb3cgPSAnMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjQwKSc7XG5leHBvcnQgY29uc3Qgc2xpZGVySW5wdXRIZWlnaHQgPSAyNDtcbmV4cG9ydCBjb25zdCBzbGlkZXJJbnB1dFdpZHRoID0gNTY7XG5leHBvcnQgY29uc3Qgc2xpZGVyTWFyZ2luVG9wSXNSYW5nZSA9IDA7XG5leHBvcnQgY29uc3Qgc2xpZGVyTWFyZ2luVG9wID0gMTI7XG5cbi8vIFBsb3RcbmV4cG9ydCBjb25zdCByYW5nZUJydXNoQmdkID0gJyMzQTQxNEMnO1xuZXhwb3J0IGNvbnN0IGhpc3RvZ3JhbUZpbGxJblJhbmdlID0gYWN0aXZlQ29sb3I7XG5leHBvcnQgY29uc3QgaGlzdG9ncmFtRmlsbE91dFJhbmdlID0gc2xpZGVyQmFyQ29sb3I7XG5cbi8vIE5vdGlmaWNhdGlvblxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvbkNvbG9ycyA9IHtcbiAgaW5mbzogJyMyNzZlZjEnLFxuICBlcnJvcjogJyNmMjUxMzgnLFxuICBzdWNjZXNzOiAnIzQ3YjI3NScsXG4gIHdhcm5pbmc6ICcjZmZjMDQzJ1xufTtcblxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvblBhbmVsV2lkdGggPSAyNDA7XG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uUGFuZWxJdGVtV2lkdGggPSBub3RpZmljYXRpb25QYW5lbFdpZHRoIC0gNjA7XG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uUGFuZWxJdGVtSGVpZ2h0ID0gNjA7XG5cbi8vIERhdGFncmlkXG5jb25zdCBjb2x1bW5XaWR0aCA9IDIwMDtcbmNvbnN0IGNlbGxIZWFkZXJIZWlnaHQgPSA3MjtcbmNvbnN0IGNlbGxIZWlnaHQgPSAyNDtcbmNvbnN0IGNlbGxQYWRkaW5nU2lkZSA9IDE4O1xuY29uc3QgZXh0ZW5kQ2VsbEhlaWdodCA9IDIgKiBjZWxsSGVpZ2h0O1xuY29uc3QgZXh0ZW5kQ29sdW1uV2lkdGggPSAyICogY29sdW1uV2lkdGg7XG5jb25zdCBncmlkRGVmYXVsdFdpZHRoID0gODAwO1xuY29uc3QgZ3JpZERlZmF1bHRIZWlnaHQgPSA2MDA7XG5jb25zdCBncmlkUGFkZGluZ1NpZGUgPSAyNDtcblxuLy8gRmxvYXRpbmcgVGltZSBkaXNwbGF5XG5jb25zdCB0aW1lRGlzcGxheUJvcmRlclJhZGl1cyA9IDMyO1xuY29uc3QgdGltZURpc3BsYXlIZWlnaHQgPSA2NDtcbmNvbnN0IHRpbWVEaXNwbGF5TWluV2lkdGggPSAxNzY7XG5jb25zdCB0aW1lRGlzcGxheU9wYWNpdHkgPSAwLjg7XG5jb25zdCB0aW1lRGlzcGxheVBhZGRpbmcgPSAnMCAyNHB4JztcblxuLy8gRXhwb3J0IG1hcCBtb2RhbFxuY29uc3QgZXhwb3J0SW50cmFTZWN0aW9uTWFyZ2luID0gJzgnO1xuXG4vLyBBY3Rpb24gUGFuZWxcbmV4cG9ydCBjb25zdCBhY3Rpb25QYW5lbFdpZHRoID0gMTEwO1xuZXhwb3J0IGNvbnN0IGFjdGlvblBhbmVsSGVpZ2h0ID0gMzI7XG5cbmV4cG9ydCBjb25zdCB0ZXh0VHJ1bmNhdGUgPSB7XG4gIG1heFdpZHRoOiAnMTAwJScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgd29yZFdyYXA6ICdub3JtYWwnXG59O1xuXG4vLyBUaGlzIGJyZWFrcG9pbnRzIGFyZSB1c2VkIGZvciByZXNwb25zaXZlIGRlc2lnblxuZXhwb3J0IGNvbnN0IGJyZWFrUG9pbnRzID0ge1xuICBwYWxtOiA1ODgsXG4gIGRlc2s6IDc2OFxufTtcblxuLy8gdGhlbWUgaXMgcGFzc2VkIHRvIGtlcGxlci5nbCB3aGVuIGl0J3MgbW91bnRlZCxcbi8vIGl0IGlzIHVzZWQgYnkgc3R5bGVkLWNvbXBvbmVudHMgdG8gcGFzcyBhbG9uZyB0b1xuLy8gYWxsIGNoaWxkIGNvbXBvbmVudHNcblxuY29uc3QgaW5wdXQgPSBjc3NgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRCZ2R9O1xuICBib3JkZXI6IDFweCBzb2xpZFxuICAgICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmFjdGl2ZVxuICAgICAgICA/IHByb3BzLnRoZW1lLmlucHV0Qm9yZGVyQWN0aXZlQ29sb3JcbiAgICAgICAgOiBwcm9wcy5lcnJvclxuICAgICAgICA/IHByb3BzLnRoZW1lLmVycm9yQ29sb3JcbiAgICAgICAgOiBwcm9wcy50aGVtZS5pbnB1dEJnZH07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY2FyZXQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRCb3JkZXJBY3RpdmVDb2xvcn07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Q29sb3J9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT5cbiAgICBbJ3NtYWxsJywgJ3RpbnknXS5pbmNsdWRlcyhwcm9wcy5zaXplKVxuICAgICAgPyBwcm9wcy50aGVtZS5pbnB1dEZvbnRTaXplU21hbGxcbiAgICAgIDogcHJvcHMudGhlbWUuaW5wdXRGb250U2l6ZX07XG4gIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Rm9udFdlaWdodH07XG4gIGhlaWdodDogJHtwcm9wcyA9PlxuICAgIHByb3BzLnNpemUgPT09ICdzbWFsbCdcbiAgICAgID8gcHJvcHMudGhlbWUuaW5wdXRCb3hIZWlnaHRTbWFsbFxuICAgICAgOiBwcm9wcy5zaXplID09PSAndGlueSdcbiAgICAgID8gcHJvcHMudGhlbWUuaW5wdXRCb3hIZWlnaHRUaW55XG4gICAgICA6IHByb3BzLnRoZW1lLmlucHV0Qm94SGVpZ2h0fTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBvdXRsaW5lOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAke3Byb3BzID0+XG4gICAgcHJvcHMuc2l6ZSA9PT0gJ3NtYWxsJ1xuICAgICAgPyBwcm9wcy50aGVtZS5pbnB1dFBhZGRpbmdTbWFsbFxuICAgICAgOiBwcm9wcy5zaXplID09PSAndGlueSdcbiAgICAgID8gcHJvcHMudGhlbWUuaW5wdXRQYWRkaW5nVGlueVxuICAgICAgOiBwcm9wcy50aGVtZS5pbnB1dFBhZGRpbmd9O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAnbm9uZScgOiAnYWxsJyl9O1xuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IDAuNSA6IDEpfTtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogJHtwcm9wcyA9PiAocHJvcHMudHlwZSA9PT0gJ251bWJlcicgPyAndGV4dCcgOiAncG9pbnRlcicpfTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5pbnB1dEJnZEFjdGl2ZSA6IHByb3BzLnRoZW1lLmlucHV0QmdkSG92ZXJ9O1xuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgcHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUuaW5wdXRCb3JkZXJBY3RpdmVDb2xvciA6IHByb3BzLnRoZW1lLmlucHV0Qm9yZGVySG92ZXJDb2xvcn07XG4gIH1cblxuICA6YWN0aXZlLFxuICA6Zm9jdXMsXG4gICYuZm9jdXMsXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0QmdkQWN0aXZlfTtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRCb3JkZXJBY3RpdmVDb2xvcn07XG4gIH1cblxuICA6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dFBsYWNlaG9sZGVyQ29sb3J9O1xuICAgIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0UGxhY2Vob2xkZXJGb250V2VpZ2h0fTtcbiAgfVxuXG4gIC8qIERpc2FibGUgQXJyb3dzIG9uIE51bWJlciBJbnB1dHMgKi9cbiAgOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuICA6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IGlucHV0TFQgPSBjc3NgXG4gICR7aW5wdXR9XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RCYWNrZ3JvdW5kTFR9O1xuICBib3JkZXI6IDFweCBzb2xpZFxuICAke3Byb3BzID0+XG4gICAgcHJvcHMuYWN0aXZlXG4gICAgICA/IHByb3BzLnRoZW1lLnNlbGVjdEFjdGl2ZUJvcmRlckNvbG9yXG4gICAgICA6IHByb3BzLmVycm9yXG4gICAgICA/IHByb3BzLnRoZW1lLmVycm9yQ29sb3JcbiAgICAgIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVH07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yTFR9O1xuICBjYXJldC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RDb2xvckxUfTtcblxuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUfTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgOmFjdGl2ZSxcbiAgOmZvY3VzLFxuICAmLmZvY3VzLFxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RCYWNrZ3JvdW5kTFR9O1xuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VsZWN0QmFja2dyb3VuZExUfTtcbiAgICBjdXJzb3I6ICR7cHJvcHMgPT4gKFsnbnVtYmVyJywgJ3RleHQnXS5pbmNsdWRlcyhwcm9wcy50eXBlKSA/ICd0ZXh0JyA6ICdwb2ludGVyJyl9O1xuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUudGV4dENvbG9yTFQgOiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3IpfTtcbiAgfVxuYDtcblxuY29uc3Qgc2Vjb25kYXJ5SW5wdXQgPSBjc3NgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXR9XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0Q29sb3J9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0QmdkfTtcbiAgYm9yZGVyOiAxcHggc29saWRcbiAgICAke3Byb3BzID0+IChwcm9wcy5lcnJvciA/IHByb3BzLnRoZW1lLmVycm9yQ29sb3IgOiBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dEJvcmRlckNvbG9yKX07XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dEJnZEhvdmVyfTtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXRCZ2RIb3Zlcn07XG4gIH1cblxuICA6YWN0aXZlLFxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dEJnZEFjdGl2ZX07XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0Qm9yZGVyQWN0aXZlQ29sb3J9O1xuICB9XG5gO1xuXG5jb25zdCBjaGlja2xldGVkSW5wdXRDb250YWluZXIgPSBjc3NgXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgcGFkZGluZzogMHB4IDdweCAwcHggNHB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuXG4gIC5jaGlja2xldGVkLWlucHV0X19wbGFjZWhvbGRlciB7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luOiA0cHg7XG4gIH1cbmA7XG5cbmNvbnN0IGNoaWNrbGV0ZWRJbnB1dCA9IGNzc2BcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dH1cbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jaGlja2xldGVkSW5wdXRDb250YWluZXJ9XG5gO1xuXG5jb25zdCBzZWNvbmRhcnlDaGlja2xldGVkSW5wdXQgPSBjc3NgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXR9XG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2hpY2tsZXRlZElucHV0Q29udGFpbmVyfVxuYDtcblxuY29uc3QgaW5saW5lSW5wdXQgPSBjc3NgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXR9IGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNDNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgOmhvdmVyIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgY3Vyc29yOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIH1cblxuICA6YWN0aXZlLFxuICAuYWN0aXZlLFxuICA6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRCb3JkZXJBY3RpdmVDb2xvcn07XG4gIH1cbmA7XG5cbmNvbnN0IHN3aXRjaFRyYWNrID0gY3NzYFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+XG4gICAgcHJvcHMuY2hlY2tlZCA/IHByb3BzLnRoZW1lLnN3aXRjaFRyYWNrQmdkQWN0aXZlIDogcHJvcHMudGhlbWUuc3dpdGNoVHJhY2tCZ2R9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogJHtwcm9wcyA9PiAtcHJvcHMudGhlbWUuc3dpdGNoTGFiZWxNYXJnaW59cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoV2lkdGh9cHg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zd2l0Y2hIZWlnaHR9cHg7XG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoVHJhY2tCb3JkZXJSYWRpdXN9O1xuYDtcblxuY29uc3Qgc3dpdGNoQnV0dG9uID0gY3NzYFxuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb259O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogJHtwcm9wcyA9PlxuICAgIChwcm9wcy5jaGVja2VkID8gcHJvcHMudGhlbWUuc3dpdGNoV2lkdGggLyAyIDogLTEpIC0gcHJvcHMudGhlbWUuc3dpdGNoTGFiZWxNYXJnaW59cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN3aXRjaEJ0bkhlaWdodH07XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN3aXRjaEJ0bldpZHRofTtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PlxuICAgIHByb3BzLmNoZWNrZWQgPyBwcm9wcy50aGVtZS5zd2l0Y2hCdG5CZ2RBY3RpdmUgOiBwcm9wcy50aGVtZS5zd2l0Y2hCdG5CZ2R9O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN3aXRjaEJ0bkJveFNoYWRvd307XG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoQnRuQm9yZGVyUmFkaXVzfTtcbmA7XG5cbmNvbnN0IGlucHV0U3dpdGNoID0gY3NzYFxuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN3aXRjaFdpZHRofXB4O1xuXG4gIDpiZWZvcmUge1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoVHJhY2t9O1xuICB9XG5cbiAgOmFmdGVyIHtcbiAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN3aXRjaEJ1dHRvbn07XG4gIH1cbmA7XG5cbi8vIFRoaXMgaXMgYSBsaWdodCB2ZXJzaW9uIGNoZWNrYm94XG5jb25zdCBjaGVja2JveEJveCA9IGNzc2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jaGVja2JveFdpZHRofXB4O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2hlY2tib3hIZWlnaHR9cHg7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5jaGVja2VkID8gcHJvcHMudGhlbWUuY2hlY2tib3hCb3hCZ2RDaGVja2VkIDogcHJvcHMudGhlbWUuY2hlY2tib3hCb3hCZ2R9O1xuICBib3JkZXI6IDFweCBzb2xpZFxuICAgICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmNoZWNrZWQgPyBwcm9wcy50aGVtZS5jaGVja2JveEJveEJnZENoZWNrZWQgOiBwcm9wcy50aGVtZS5jaGVja2JveEJvcmRlckNvbG9yfTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb250ZW50OiAnJztcbmA7XG5cbmNvbnN0IGNoZWNrYm94Q2hlY2sgPSBjc3NgXG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogM3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5jaGVja2VkID8gMSA6IDApfTtcbiAgY29udGVudDogJyc7XG5gO1xuXG5jb25zdCBpbnB1dENoZWNrYm94ID0gY3NzYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICBtYXJnaW4tbGVmdDogLSR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoTGFiZWxNYXJnaW59cHg7XG5cbiAgOmJlZm9yZSB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jaGVja2JveEJveH07XG4gIH1cblxuICA6YWZ0ZXIge1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2hlY2tib3hDaGVja307XG4gIH1cbmA7XG5cbmNvbnN0IHNlY29uZGFyeVN3aXRjaCA9IGNzc2BcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dFN3aXRjaH1cbiAgOmJlZm9yZSB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zd2l0Y2hUcmFja30gYmFja2dyb3VuZDogJHtwcm9wcyA9PlxuICBwcm9wcy5jaGVja2VkID8gcHJvcHMudGhlbWUuc3dpdGNoVHJhY2tCZ2RBY3RpdmUgOiBwcm9wcy50aGVtZS5zZWNvbmRhcnlTd2l0Y2hUcmFja0JnZH07XG4gIH1cblxuICA6YWZ0ZXIge1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoQnV0dG9ufVxuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmNoZWNrZWQgPyBwcm9wcy50aGVtZS5zd2l0Y2hCdG5CZ2RBY3RpdmUgOiBwcm9wcy50aGVtZS5zZWNvbmRhcnlTd2l0Y2hCdG5CZ2R9O1xuICB9XG5gO1xuXG5jb25zdCBkcm9wZG93blNjcm9sbEJhciA9IGNzc2BcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJnZH07XG4gIH07XG5cbiAgOnZlcnRpY2FsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1gO1xuXG5jb25zdCBkcm9wZG93bkxpc3RBbmNob3IgPSBjc3NgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yfTtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG5gO1xuXG5jb25zdCBkcm9wZG93bkxpc3RJdGVtID0gY3NzYFxuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDNweCA5cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgJi5ob3ZlcixcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0SGlnaGxpZ2h0Qmd9O1xuXG4gICAgLmxpc3RfX2l0ZW1fX2FuY2hvciB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBkcm9wZG93bkxpc3RIZWFkZXIgPSBjc3NgXG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogNXB4IDlweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG5gO1xuXG5jb25zdCBkcm9wZG93bkxpc3RTZWN0aW9uID0gY3NzYFxuICBwYWRkaW5nOiAwIDAgNHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG5gO1xuXG5jb25zdCBkcm9wZG93bkxpc3QgPSBjc3NgXG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDI4MHB4O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdFNoYWRvd307XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAubGlzdF9fc2VjdGlvbiB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RTZWN0aW9ufTtcbiAgfVxuICAubGlzdF9faGVhZGVyIHtcbiAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEhlYWRlcn07XG4gIH1cblxuICAubGlzdF9faXRlbSB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RJdGVtfTtcbiAgfVxuXG4gIC5saXN0X19pdGVtX19hbmNob3Ige1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QW5jaG9yfTtcbiAgfVxuXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25TY3JvbGxCYXJ9O1xuYDtcblxuY29uc3Qgc2lkZVBhbmVsU2Nyb2xsQmFyID0gY3NzYFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsU2Nyb2xsQmFySGVpZ2h0fXB4O1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbFNjcm9sbEJhcldpZHRofXB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsQmd9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxCZ307XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsQmd9O1xuXG4gICAgOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9O1xufWA7XG5cbmNvbnN0IHBhbmVsRHJvcGRvd25TY3JvbGxCYXIgPSBjc3NgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kfTtcbiAgICA6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IHNjcm9sbEJhciA9IGNzc2BcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kfTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kfTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH1cblxuICAgIDp2ZXJ0aWNhbDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICA6aG9yaXpvbnRhbDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1gO1xuXG5leHBvcnQgY29uc3QgbW9kYWxTY3JvbGxCYXIgPSBjc3NgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG9yaXpvbnRhbCB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gIH1cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yTFR9O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzk2OWRhOTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG9yaXpvbnRhbCB7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gIC4uLkRJTUVOU0lPTlMsXG4gIC8vIHRlbXBsYXRlc1xuICBpbnB1dCxcbiAgaW5wdXRMVCxcbiAgaW5saW5lSW5wdXQsXG4gIGNoaWNrbGV0ZWRJbnB1dCxcbiAgY2hpY2tsZXRlZElucHV0Q29udGFpbmVyLFxuICBzZWNvbmRhcnlDaGlja2xldGVkSW5wdXQsXG5cbiAgYm9yZGVyQ29sb3IsXG4gIGJvcmRlckNvbG9yTFQsXG5cbiAgc2Vjb25kYXJ5SW5wdXQsXG4gIGRyb3Bkb3duU2Nyb2xsQmFyLFxuICBkcm9wZG93bkxpc3QsXG4gIGRyb3Bkb3duTGlzdEl0ZW0sXG4gIGRyb3Bkb3duTGlzdEFuY2hvcixcbiAgZHJvcGRvd25MaXN0SGVhZGVyLFxuICBkcm9wZG93bkxpc3RTZWN0aW9uLFxuICBkcm9wZG93bkxpc3RTaGFkb3csXG4gIGRyb3Bkb3duV3JhcHBlclosXG4gIG1vZGFsU2Nyb2xsQmFyLFxuICBzY3JvbGxCYXIsXG4gIHNpZGVQYW5lbFNjcm9sbEJhcixcbiAgaW5wdXRTd2l0Y2gsXG4gIHNlY29uZGFyeVN3aXRjaCxcbiAgc3dpdGNoVHJhY2ssXG4gIHN3aXRjaEJ1dHRvbixcbiAgaW5wdXRDaGVja2JveCxcbiAgY2hlY2tib3hCb3gsXG4gIGNoZWNrYm94Q2hlY2ssXG5cbiAgLy8gVHJhbnNpdGlvbnNcbiAgdHJhbnNpdGlvbixcbiAgdHJhbnNpdGlvbkZhc3QsXG4gIHRyYW5zaXRpb25TbG93LFxuXG4gIC8vIHN0eWxlc1xuICBhY3RpdmVDb2xvcixcbiAgYWN0aXZlQ29sb3JIb3ZlcixcbiAgYm9yZGVyUmFkaXVzLFxuICBib3hTaGFkb3csXG4gIGVycm9yQ29sb3IsXG4gIGRyb3Bkb3duTGlzdEhpZ2hsaWdodEJnLFxuICBkcm9wZG93bkxpc3RCZ2QsXG4gIGRyb3Bkb3duTGlzdEJvcmRlclRvcCxcblxuICBsYWJlbENvbG9yLFxuICBsYWJlbENvbG9yTFQsXG4gIGxhYmVsSG92ZXJDb2xvcixcbiAgbWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3IsXG4gIG1hcFBhbmVsSGVhZGVyQmFja2dyb3VuZENvbG9yLFxuXG4gIC8vIFNlbGVjdFxuICBzZWxlY3RBY3RpdmVCb3JkZXJDb2xvcixcbiAgc2VsZWN0QmFja2dyb3VuZCxcbiAgc2VsZWN0QmFja2dyb3VuZExULFxuICBzZWxlY3RCYWNrZ3JvdW5kSG92ZXIsXG4gIHNlbGVjdEJhY2tncm91bmRIb3ZlckxULFxuICBzZWxlY3RCb3JkZXIsXG4gIHNlbGVjdEJvcmRlckNvbG9yLFxuICBzZWxlY3RCb3JkZXJSYWRpdXMsXG4gIHNlbGVjdEJvcmRlckNvbG9yTFQsXG4gIHNlbGVjdENvbG9yLFxuICBzZWxlY3RDb2xvclBsYWNlSG9sZGVyLFxuICBzZWxlY3RGb250U2l6ZSxcbiAgc2VsZWN0Rm9udFdlaWdodCxcbiAgc2VsZWN0Q29sb3JMVCxcbiAgc2VsZWN0Rm9udFdlaWdodEJvbGQsXG5cbiAgLy8gSW5wdXRcbiAgaW5wdXRCZ2QsXG4gIGlucHV0QmdkSG92ZXIsXG4gIGlucHV0QmdkQWN0aXZlLFxuICBpbnB1dEJveEhlaWdodCxcbiAgaW5wdXRCb3hIZWlnaHRTbWFsbCxcbiAgaW5wdXRCb3hIZWlnaHRUaW55LFxuICBpbnB1dEJvcmRlckNvbG9yLFxuICBpbnB1dEJvcmRlckFjdGl2ZUNvbG9yLFxuICBpbnB1dEJvcmRlckhvdmVyQ29sb3IsXG4gIGlucHV0Qm9yZGVyUmFkaXVzLFxuICBpbnB1dENvbG9yLFxuICBpbnB1dFBhZGRpbmcsXG4gIGlucHV0UGFkZGluZ1NtYWxsLFxuICBpbnB1dFBhZGRpbmdUaW55LFxuICBpbnB1dEZvbnRTaXplLFxuICBpbnB1dEZvbnRTaXplU21hbGwsXG4gIGlucHV0Rm9udFdlaWdodCxcbiAgaW5wdXRQbGFjZWhvbGRlckNvbG9yLFxuICBpbnB1dFBsYWNlaG9sZGVyRm9udFdlaWdodCxcblxuICBzZWNvbmRhcnlJbnB1dEJnZCxcbiAgc2Vjb25kYXJ5SW5wdXRCZ2RIb3ZlcixcbiAgc2Vjb25kYXJ5SW5wdXRCZ2RBY3RpdmUsXG4gIHNlY29uZGFyeUlucHV0Q29sb3IsXG4gIHNlY29uZGFyeUlucHV0Qm9yZGVyQ29sb3IsXG4gIHNlY29uZGFyeUlucHV0Qm9yZGVyQWN0aXZlQ29sb3IsXG5cbiAgLy8gU3dpdGNoXG4gIHN3aXRjaFdpZHRoLFxuICBzd2l0Y2hIZWlnaHQsXG4gIHN3aXRjaFRyYWNrQmdkLFxuICBzd2l0Y2hUcmFja0JnZEFjdGl2ZSxcbiAgc3dpdGNoVHJhY2tCb3JkZXJSYWRpdXMsXG4gIHN3aXRjaEJ0bkJnZCxcbiAgc3dpdGNoQnRuQmdkQWN0aXZlLFxuICBzd2l0Y2hCdG5Cb3hTaGFkb3csXG4gIHN3aXRjaEJ0bkJvcmRlclJhZGl1cyxcbiAgc3dpdGNoQnRuV2lkdGgsXG4gIHN3aXRjaEJ0bkhlaWdodCxcbiAgc3dpdGNoTGFiZWxNYXJnaW4sXG5cbiAgc2Vjb25kYXJ5U3dpdGNoVHJhY2tCZ2QsXG4gIHNlY29uZGFyeVN3aXRjaEJ0bkJnZCxcblxuICAvLyBDaGVja2JveFxuICBjaGVja2JveFdpZHRoLFxuICBjaGVja2JveEhlaWdodCxcbiAgY2hlY2tib3hNYXJnaW4sXG4gIGNoZWNrYm94Qm9yZGVyQ29sb3IsXG4gIGNoZWNrYm94Qm9yZGVyUmFkaXVzLFxuICBjaGVja2JveEJvcmRlckNvbG9yTFQsXG4gIGNoZWNrYm94Qm94QmdkLFxuICBjaGVja2JveEJveEJnZENoZWNrZWQsXG5cbiAgLy8gQnV0dG9uXG4gIHByaW1hcnlCdG5CZ2QsXG4gIHByaW1hcnlCdG5BY3RCZ2QsXG4gIHByaW1hcnlCdG5Db2xvcixcbiAgcHJpbWFyeUJ0bkFjdENvbG9yLFxuICBwcmltYXJ5QnRuQmdkSG92ZXIsXG4gIHByaW1hcnlCdG5SYWRpdXMsXG4gIHNlY29uZGFyeUJ0bkJnZCxcbiAgc2Vjb25kYXJ5QnRuQWN0QmdkLFxuICBzZWNvbmRhcnlCdG5CZ2RIb3ZlcixcbiAgc2Vjb25kYXJ5QnRuQ29sb3IsXG4gIHNlY29uZGFyeUJ0bkFjdENvbG9yLFxuXG4gIG5lZ2F0aXZlQnRuQmdkLFxuICBuZWdhdGl2ZUJ0bkFjdEJnZCxcbiAgbmVnYXRpdmVCdG5CZ2RIb3ZlcixcbiAgbmVnYXRpdmVCdG5Db2xvcixcbiAgbmVnYXRpdmVCdG5BY3RDb2xvcixcblxuICBsaW5rQnRuQmdkLFxuICBsaW5rQnRuQWN0QmdkLFxuICBsaW5rQnRuQ29sb3IsXG4gIGxpbmtCdG5BY3RDb2xvcixcbiAgbGlua0J0bkFjdEJnZEhvdmVyLFxuXG4gIGZsb2F0aW5nQnRuQmdkLFxuICBmbG9hdGluZ0J0bkFjdEJnZCxcbiAgZmxvYXRpbmdCdG5CZ2RIb3ZlcixcbiAgZmxvYXRpbmdCdG5Db2xvcixcbiAgZmxvYXRpbmdCdG5BY3RDb2xvcixcblxuICAvLyBNb2RhbFxuICBtb2RhbFRpdGxlQ29sb3IsXG4gIG1vZGFsVGl0bGVGb250U2l6ZSxcbiAgbW9kYWxUaXRsZUZvbnRTaXplU21hbGxlcixcbiAgbW9kYWxGb290ZXJCZ2QsXG4gIG1vZGFsSW1hZ2VQbGFjZUhvbGRlcixcbiAgbW9kYWxQYWRkaW5nLFxuXG4gIG1vZGFsRGlhbG9nQmdkLFxuICBtb2RhbERpYWxvZ0NvbG9yLFxuXG4gIG1vZGFsTGF0ZXJhbFBhZGRpbmcsXG4gIG1vZGFsUG9ydGFibGVMYXRlcmFsUGFkZGluZyxcbiAgbW9kYWxPdmVyTGF5WixcbiAgbW9kYWxPdmVybGF5QmdkLFxuICBtb2RhbENvbnRlbnRaLFxuICBtb2RhbEZvb3RlclosXG4gIG1vZGFsVGl0bGVaLFxuICBtb2RhbEJ1dHRvblosXG5cbiAgLy8gU2lkZSBQYW5lbFxuICBzaWRlUGFuZWxCZyxcbiAgc2lkZVBhbmVsSW5uZXJQYWRkaW5nLFxuICBzaWRlQmFyQ2xvc2VCdG5CZ2QsXG4gIHNpZGVCYXJDbG9zZUJ0bkNvbG9yLFxuICBzaWRlQmFyQ2xvc2VCdG5CZ2RIb3ZlcixcbiAgc2lkZVBhbmVsSGVhZGVyQmcsXG4gIHNpZGVQYW5lbFNjcm9sbEJhcldpZHRoLFxuICBzaWRlUGFuZWxTY3JvbGxCYXJIZWlnaHQsXG5cbiAgLy8gU2lkZSBQYW5lbCBQYW5lbFxuICBwYW5lbEFjdGl2ZUJnLFxuICBwYW5lbEJhY2tncm91bmQsXG4gIHBhbmVsQmFja2dyb3VuZEhvdmVyLFxuICBwYW5lbEJhY2tncm91bmRMVCxcbiAgcGFuZWxCb3hTaGFkb3csXG4gIHBhbmVsQm9yZGVyUmFkaXVzLFxuICBwYW5lbEJvcmRlcixcbiAgcGFuZWxCb3JkZXJDb2xvcixcbiAgcGFuZWxCb3JkZXJMVCxcbiAgcGFuZWxIZWFkZXJJY29uLFxuICBwYW5lbEhlYWRlckljb25BY3RpdmUsXG4gIHBhbmVsSGVhZGVySGVpZ2h0LFxuICBwYW5lbERyb3Bkb3duU2Nyb2xsQmFyLFxuXG4gIC8vIFRleHRcbiAgZm9udEZhbWlseSxcbiAgZm9udFdlaWdodCxcbiAgZm9udFNpemUsXG4gIGxpbmVIZWlnaHQsXG4gIHRleHRDb2xvcixcbiAgdGV4dENvbG9yTFQsXG4gIHRleHRDb2xvckhsLFxuICB0aXRsZVRleHRDb2xvcixcbiAgc3VidGV4dENvbG9yLFxuICBzdWJ0ZXh0Q29sb3JMVCxcbiAgc3VidGV4dENvbG9yQWN0aXZlLFxuICB0ZXh0VHJ1bmNhdGUsXG4gIHRpdGxlQ29sb3JMVCxcbiAgdG9vbHRpcEJnLFxuICB0b29sdGlwQ29sb3IsXG4gIGxvZ29Db2xvcixcblxuICAvLyBCb3R0b20gUGFuZWxcbiAgYm90dG9tSW5uZXJQZFNpZGUsXG4gIGJvdHRvbUlubmVyUGRWZXJ0LFxuICBib3R0b21QYW5lbEdhcCxcblxuICAvLyBTbGlkZXJcbiAgc2xpZGVyQmFyQ29sb3IsXG4gIHNsaWRlckJhckJnZCxcbiAgc2xpZGVyQmFySG92ZXJDb2xvcixcbiAgc2xpZGVyQmFyUmFkaXVzLFxuICBzbGlkZXJCYXJIZWlnaHQsXG4gIHNsaWRlckhhbmRsZUhlaWdodCxcbiAgc2xpZGVySGFuZGxlV2lkdGgsXG4gIHNsaWRlckhhbmRsZUNvbG9yLFxuICBzbGlkZXJIYW5kbGVIb3ZlckNvbG9yLFxuICBzbGlkZXJIYW5kbGVTaGFkb3csXG4gIHNsaWRlcklucHV0SGVpZ2h0LFxuICBzbGlkZXJJbnB1dFdpZHRoLFxuICBzbGlkZXJNYXJnaW5Ub3BJc1JhbmdlLFxuICBzbGlkZXJNYXJnaW5Ub3AsXG5cbiAgLy8gUGxvdFxuICByYW5nZUJydXNoQmdkLFxuICBoaXN0b2dyYW1GaWxsSW5SYW5nZSxcbiAgaGlzdG9ncmFtRmlsbE91dFJhbmdlLFxuXG4gIC8vIE5vdGlmaWNhdGlvbnNcbiAgbm90aWZpY2F0aW9uQ29sb3JzLFxuICBub3RpZmljYXRpb25QYW5lbFdpZHRoLFxuICBub3RpZmljYXRpb25QYW5lbEl0ZW1XaWR0aCxcbiAgbm90aWZpY2F0aW9uUGFuZWxJdGVtSGVpZ2h0LFxuXG4gIC8vIGRhdGFncmlkXG4gIGNvbHVtbldpZHRoLFxuICBleHRlbmRDb2x1bW5XaWR0aCxcbiAgY2VsbEhlYWRlckhlaWdodCxcbiAgY2VsbEhlaWdodCxcbiAgY2VsbFBhZGRpbmdTaWRlLFxuICBleHRlbmRDZWxsSGVpZ2h0LFxuICBncmlkRGVmYXVsdFdpZHRoLFxuICBncmlkRGVmYXVsdEhlaWdodCxcbiAgZ3JpZFBhZGRpbmdTaWRlLFxuXG4gIC8vIHRpbWUgZGlzcGxheVxuICB0aW1lRGlzcGxheUJvcmRlclJhZGl1cyxcbiAgdGltZURpc3BsYXlIZWlnaHQsXG4gIHRpbWVEaXNwbGF5TWluV2lkdGgsXG4gIHRpbWVEaXNwbGF5T3BhY2l0eSxcbiAgdGltZURpc3BsYXlQYWRkaW5nLFxuXG4gIC8vIGV4cG9ydCBtYXBcbiAgZXhwb3J0SW50cmFTZWN0aW9uTWFyZ2luLFxuXG4gIC8vIEFjdGlvbiBQYW5lbFxuICBhY3Rpb25QYW5lbFdpZHRoLFxuICBhY3Rpb25QYW5lbEhlaWdodCxcblxuICAvLyBCcmVha3BvaW50c1xuICBicmVha1BvaW50c1xufTtcblxuZXhwb3J0IGNvbnN0IHRoZW1lTFQgPSB7XG4gIC4uLnRoZW1lLFxuICAvLyB0ZW1wbGF0ZVxuICBhY3RpdmVDb2xvcjogYWN0aXZlQ29sb3JMVCxcbiAgaW5wdXQ6IGlucHV0TFQsXG4gIHRleHRDb2xvcjogdGV4dENvbG9yTFQsXG4gIHNpZGVQYW5lbEJnOiAnI0ZGRkZGRicsXG4gIHNlbGVjdENvbG9yOiBzZWxlY3RDb2xvckxULFxuICB0aXRsZVRleHRDb2xvcjogJyMwMDAwMDAnLFxuICBzaWRlUGFuZWxIZWFkZXJCZzogJyNGN0Y3RjcnLFxuICBzdWJ0ZXh0Q29sb3JBY3RpdmU6IGFjdGl2ZUNvbG9yTFQsXG4gIHRvb2x0aXBCZzogJyMxODY5QjUnLFxuICB0b29sdGlwQ29sb3I6ICcjRkZGRkZGJyxcbiAgZHJvcGRvd25MaXN0QmdkOiAnI0ZGRkZGRicsXG4gIHRleHRDb2xvckhsOiBhY3RpdmVDb2xvckxULFxuXG4gIGlucHV0QmdkOiAnI0Y3RjdGNycsXG4gIGlucHV0QmdkSG92ZXI6ICcjRkZGRkZGJyxcbiAgaW5wdXRCZ2RBY3RpdmU6ICcjRkZGRkZGJyxcblxuICBkcm9wZG93bkxpc3RIaWdobGlnaHRCZzogJyNGMEYwRjAnLFxuXG4gIHBhbmVsQmFja2dyb3VuZDogJyNGN0Y3RjcnLFxuICBwYW5lbEJhY2tncm91bmRIb3ZlcjogJyNGN0Y3RjcnLFxuICBwYW5lbEJvcmRlckNvbG9yOiAnI0QzRDhFMCcsXG5cbiAgc2lkZUJhckNsb3NlQnRuQmdkOiAnI0Y3RjdGNycsXG4gIHNpZGVCYXJDbG9zZUJ0bkNvbG9yOiB0ZXh0Q29sb3JMVCxcbiAgc2lkZUJhckNsb3NlQnRuQmdkSG92ZXI6ICcjRjdGN0Y3JyxcblxuICBzZWNvbmRhcnlJbnB1dEJnZDogJyNGN0Y3RjcnLFxuICBzZWNvbmRhcnlJbnB1dEJnZEFjdGl2ZTogJyNGN0Y3RjcnLFxuICBzZWNvbmRhcnlJbnB1dEJnZEhvdmVyOiAnI0ZGRkZGRicsXG4gIHNlY29uZGFyeUlucHV0Qm9yZGVyQWN0aXZlQ29sb3I6ICcjMDAwMDAwJyxcbiAgc2Vjb25kYXJ5SW5wdXRCb3JkZXJDb2xvcjogJ25vbmUnLFxuICBzZWNvbmRhcnlJbnB1dENvbG9yOiAnIzU0NTQ1NCcsXG5cbiAgcGFuZWxBY3RpdmVCZzogJyNGN0Y3RjcnLFxuICBtYXBQYW5lbEJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICBtYXBQYW5lbEhlYWRlckJhY2tncm91bmRDb2xvcjogJyNGN0Y3RjcnLFxuXG4gIHNsaWRlckJhckNvbG9yOiAnI0EwQTdCNCcsXG4gIHNsaWRlckJhckJnZDogJyNEM0Q4RTAnLFxuICBzbGlkZXJIYW5kbGVDb2xvcjogJyNGN0Y3RjcnLFxuICBzbGlkZXJIYW5kbGVIb3ZlckNvbG9yOiAnI0Y3RjdGNycsXG5cbiAgc3VidGV4dENvbG9yOiBzdWJ0ZXh0Q29sb3JMVCxcbiAgc3dpdGNoQnRuQmdkOiAnI0Y3RjdGNycsXG4gIHNlY29uZGFyeVN3aXRjaEJ0bkJnZDogJyNGN0Y3RjcnLFxuICBzZWNvbmRhcnlTd2l0Y2hUcmFja0JnZDogJyNEM0Q4RTAnLFxuICBzd2l0Y2hCdG5CZ2RBY3RpdmU6ICcjRjdGN0Y3JyxcbiAgc3dpdGNoVHJhY2tCZ2Q6ICcjRDNEOEUwJyxcbiAgc3dpdGNoVHJhY2tCZ2RBY3RpdmU6IGFjdGl2ZUNvbG9yTFQsXG5cbiAgLy8gYnV0dG9uIHN3aXRjaCBiYWNrZ3JvdW5kIGFuZCBob3ZlciBjb2xvclxuICBwcmltYXJ5QnRuQmdkOiBwcmltYXJ5QnRuQWN0QmdkLFxuICBwcmltYXJ5QnRuQWN0QmdkOiBwcmltYXJ5QnRuQmdkLFxuICBwcmltYXJ5QnRuQmdkSG92ZXI6IHByaW1hcnlCdG5CZ2QsXG5cbiAgc2Vjb25kYXJ5QnRuQmdkOiBzZWNvbmRhcnlCdG5BY3RCZ2QsXG4gIHNlY29uZGFyeUJ0bkFjdEJnZDogc2Vjb25kYXJ5QnRuQmdkLFxuICBzZWNvbmRhcnlCdG5CZ2RIb3Zlcjogc2Vjb25kYXJ5QnRuQmdkLFxuXG4gIGZsb2F0aW5nQnRuQmdkOiAnI0Y3RjdGNycsXG4gIGZsb2F0aW5nQnRuQWN0QmdkOiAnI0Y3RjdGNycsXG4gIGZsb2F0aW5nQnRuQmdkSG92ZXI6ICcjRjdGN0Y3JyxcbiAgZmxvYXRpbmdCdG5Db2xvcjogc3VidGV4dENvbG9yLFxuICBmbG9hdGluZ0J0bkFjdENvbG9yOiBhY3RpdmVDb2xvckxULFxuXG4gIGxpbmtCdG5BY3RDb2xvcjogdGV4dENvbG9yTFQsXG5cbiAgcmFuZ2VCcnVzaEJnZDogJyNEM0Q4RTAnLFxuICBoaXN0b2dyYW1GaWxsSW5SYW5nZTogYWN0aXZlQ29sb3JMVCxcbiAgaGlzdG9ncmFtRmlsbE91dFJhbmdlOiAnI0EwQTdCNCdcbn07XG5cbmV4cG9ydCBjb25zdCB0aGVtZUJTID0ge1xuICAuLi50aGVtZSxcbiAgYWN0aXZlQ29sb3I6ICcjRTJFMkUyJyxcbiAgZHJvcGRvd25MaXN0QmdkOiAnI0ZGRkZGRicsXG4gIGRyb3Bkb3duTGlzdEJvcmRlclRvcDogJ25vbmUnLFxuICBkcm9wZG93bkxpc3RIaWdobGlnaHRCZzogJyNGNkY2RjYnLFxuICBpbnB1dEJnZDogJyNFMkUyRTInLFxuICBpbnB1dEJnZEFjdGl2ZTogJyNFMkUyRTInLFxuICBpbnB1dEJnZEhvdmVyOiAnaW5oZXJpdCcsXG4gIGlucHV0Qm9yZGVyQWN0aXZlQ29sb3I6ICcjMDAwMDAwJyxcbiAgaW5wdXRDb2xvcjogJyMwMDAwMDAnLFxuICBwYW5lbEFjdGl2ZUJnOiAnI0UyRTJFMicsXG4gIHBhbmVsQmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICBwYW5lbEJhY2tncm91bmRIb3ZlcjogJyNFRUVFRUUnLFxuICBwYW5lbEJvcmRlckNvbG9yOiAnI0UyRTJFMicsXG4gIHByaW1hcnlCdG5CZ2Q6ICcjRTJFMkUyJyxcbiAgcHJpbWFyeUJ0bkJnZEhvdmVyOiAnIzMzMzMzMycsXG4gIHByaW1hcnlCdG5Db2xvcjogJyMwMDAwMDAnLFxuICBzZWNvbmRhcnlCdG5BY3RCZ2Q6ICcjRUVFRUVFJyxcbiAgc2Vjb25kYXJ5QnRuQWN0Q29sb3I6ICcjMDAwMDAwJyxcbiAgc2Vjb25kYXJ5QnRuQmdkOiAnI0UyRTJFMicsXG4gIHNlY29uZGFyeUJ0bkJnZEhvdmVyOiAnI0NCQ0JDQicsXG5cbiAgc2lkZUJhckNsb3NlQnRuQmdkOiAnI0UyRTJFMicsXG4gIHNpZGVCYXJDbG9zZUJ0bkNvbG9yOiAnIzAwMDAwMCcsXG4gIHNpZGVCYXJDbG9zZUJ0bkJnZEhvdmVyOiAnI0ZGRkZGRicsXG5cbiAgZmxvYXRpbmdCdG5CZ2Q6ICcjRkZGRkZGJyxcbiAgZmxvYXRpbmdCdG5BY3RCZ2Q6ICcjRUVFRUVFJyxcbiAgZmxvYXRpbmdCdG5CZ2RIb3ZlcjogJyNFRUVFRUUnLFxuICBmbG9hdGluZ0J0bkNvbG9yOiAnI0FGQUZBRicsXG4gIGZsb2F0aW5nQnRuQWN0Q29sb3I6ICcjMDAwMDAwJyxcblxuICBzZWNvbmRhcnlCdG5Db2xvcjogJyMwMDAwMDAnLFxuICBzZWNvbmRhcnlJbnB1dEJnZDogJyNGNkY2RjYnLFxuICBzZWNvbmRhcnlJbnB1dEJnZEFjdGl2ZTogJyNGNkY2RjYnLFxuICBzZWNvbmRhcnlJbnB1dEJnZEhvdmVyOiAnI0Y2RjZGNicsXG4gIHNlY29uZGFyeUlucHV0Qm9yZGVyQWN0aXZlQ29sb3I6ICcjMDAwMDAwJyxcbiAgc2Vjb25kYXJ5SW5wdXRCb3JkZXJDb2xvcjogJ25vbmUnLFxuICBzZWNvbmRhcnlJbnB1dENvbG9yOiAnIzU0NTQ1NCcsXG4gIHNpZGVQYW5lbEJnOiAnI0Y2RjZGNicsXG4gIHNpZGVQYW5lbEhlYWRlckJnOiAnI0ZGRkZGRicsXG4gIHN1YnRleHRDb2xvcjogJyNBRkFGQUYnLFxuICBzdWJ0ZXh0Q29sb3JBY3RpdmU6ICcjMDAwMDAwJyxcbiAgdGV4dENvbG9yOiAnIzAwMDAwMCcsXG4gIHRleHRDb2xvckhsOiAnIzU0NTQ1NCcsXG4gIG1hcFBhbmVsQmFja2dyb3VuZENvbG9yOiAnI0Y2RjZGNicsXG4gIG1hcFBhbmVsSGVhZGVyQmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXG4gIHRpdGxlVGV4dENvbG9yOiAnIzAwMDAwMCcsXG4gIHN3aXRjaEJ0bkJnZEFjdGl2ZTogJyMwMDAwMDAnLFxuICBzd2l0Y2hCdG5CZ2Q6ICcjRkZGRkZGJyxcbiAgc3dpdGNoVHJhY2tCZ2RBY3RpdmU6ICcjRTJFMkUyJyxcbiAgc2Vjb25kYXJ5U3dpdGNoVHJhY2tCZ2Q6ICcjRTJFMkUyJyxcbiAgc3dpdGNoVHJhY2tCZ2Q6ICcjRTJFMkUyJyxcbiAgc2Vjb25kYXJ5U3dpdGNoQnRuQmdkOiAnI0ZGRkZGRicsXG4gIGhpc3RvZ3JhbUZpbGxJblJhbmdlOiAnIzAwMDAwMCcsXG4gIGhpc3RvZ3JhbUZpbGxPdXRSYW5nZTogJyNFMkUyRTInLFxuICByYW5nZUJydXNoQmdkOiAnI0UyRTJFMicsXG4gIHNsaWRlckJhckJnZDogJyNFMkUyRTInLFxuICBzbGlkZXJIYW5kbGVDb2xvcjogJyNGRkZGRkYnLFxuICBzbGlkZXJCYXJDb2xvcjogJyMwMDAwMDAnXG59O1xuIl19