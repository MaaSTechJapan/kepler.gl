"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ActionPanelItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("./icons");

var _switch = _interopRequireDefault(require("./switch"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: ", ";\n  box-shadow: ", ";\n  transition: ", ";\n  color: ", ";\n\n  .action-panel-item {\n    ", "\n\n    &:last-of-type {\n      border-bottom: 0;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  label {\n    margin-bottom: 0;\n    color: ", ";\n    padding-left: 20px;\n    line-height: 12px;\n\n    &:before {\n      width: 12px;\n      height: 12px;\n      background-color: ", ";\n    }\n    &:hover {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 12px;\n  line-height: 14px;\n  padding: 8px;\n  min-height: ", "px;\n  text-transform: capitalize;\n  background-color: ", ";\n  width: ", "px;\n  position: relative;\n  ", "\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n    .nested-group {\n      display: block;\n    }\n  }\n\n  .label {\n    margin-left: 8px;\n  }\n\n  .label-icon {\n    margin-left: auto;\n  }\n\n  .nested-group {\n    width: 110px;\n    display: none;\n    color: ", ";\n    position: absolute;\n    left: 110px;\n    top: 0px;\n    padding-left: 4px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledItem = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.actionPanelHeight;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.actionPanelWidth;
}, function (props) {
  return props.color ? "border-left: 3px solid rgb(".concat(props.color, ");") : '';
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColor;
});

var StyledCheckedbox = (0, _styledComponents["default"])(_switch["default"])(_templateObject2(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.textColorHl;
});

var renderChildren = function renderChildren(child, index) {
  return _react["default"].cloneElement(child, {
    onClick: function onClick() {
      if (_react["default"].isValidElement(child)) {
        if (child.props.onClick) {
          child.props.onClick(index);
        }
      }
    },
    className: 'action-panel-item'
  });
};

var ActionPanelItem = _react["default"].memo(function (_ref) {
  var children = _ref.children,
      color = _ref.color,
      className = _ref.className,
      Icon = _ref.Icon,
      label = _ref.label,
      onClick = _ref.onClick,
      isSelection = _ref.isSelection,
      isActive = _ref.isActive,
      style = _ref.style;
  var onClickCallback = (0, _react.useCallback)(function (event) {
    event.preventDefault();
    event.stopPropagation();
    onClick();
  }, [onClick]);
  return /*#__PURE__*/_react["default"].createElement(StyledItem, {
    className: className,
    onClick: onClickCallback,
    color: color,
    style: style
  }, Icon ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    height: "16px"
  })) : null, isSelection ? /*#__PURE__*/_react["default"].createElement(StyledCheckedbox, {
    type: "checkbox",
    checked: Boolean(isActive),
    id: "switch-".concat(label),
    secondary: true,
    label: label
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    className: "label"
  }, label), children && children.length ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "label-icon"
  }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
    height: "16px"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "nested-group"
  }, _react["default"].Children.map(children, renderChildren))) : null);
});

exports.ActionPanelItem = ActionPanelItem;
ActionPanelItem.displayName = 'ActionPanelItem';

var StyledActionPanel = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.direction;
}, function (props) {
  return props.theme.dropdownListShadow;
}, function (props) {
  return props.theme.transitionSlow;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.direction === 'column' ? "border-bottom: 1px solid ".concat(props.theme.panelHeaderIcon) : "border-right: 1px solid ".concat(props.theme.panelHeaderIcon);
}); // React compound element https://medium.com/@Dane_s/react-js-compound-components-a6e54b5c9992


var ActionPanel = function ActionPanel(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      _ref2$direction = _ref2.direction,
      direction = _ref2$direction === void 0 ? 'column' : _ref2$direction;
  return /*#__PURE__*/_react["default"].createElement(StyledActionPanel, {
    className: className,
    direction: direction
  }, _react["default"].Children.map(children, renderChildren));
};

ActionPanel.displayName = 'ActionPanel';
var _default = ActionPanel;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hY3Rpb24tcGFuZWwuanMiXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJhY3Rpb25QYW5lbEhlaWdodCIsImRyb3Bkb3duTGlzdEJnZCIsImFjdGlvblBhbmVsV2lkdGgiLCJjb2xvciIsInRleHRDb2xvckhsIiwidGV4dENvbG9yIiwiU3R5bGVkQ2hlY2tlZGJveCIsIkNoZWNrYm94IiwicmVuZGVyQ2hpbGRyZW4iLCJjaGlsZCIsImluZGV4IiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJvbkNsaWNrIiwiaXNWYWxpZEVsZW1lbnQiLCJjbGFzc05hbWUiLCJBY3Rpb25QYW5lbEl0ZW0iLCJtZW1vIiwiY2hpbGRyZW4iLCJJY29uIiwibGFiZWwiLCJpc1NlbGVjdGlvbiIsImlzQWN0aXZlIiwic3R5bGUiLCJvbkNsaWNrQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiQm9vbGVhbiIsImxlbmd0aCIsIkNoaWxkcmVuIiwibWFwIiwiZGlzcGxheU5hbWUiLCJTdHlsZWRBY3Rpb25QYW5lbCIsImRpcmVjdGlvbiIsImRyb3Bkb3duTGlzdFNoYWRvdyIsInRyYW5zaXRpb25TbG93IiwicGFuZWxIZWFkZXJJY29uIiwiQWN0aW9uUGFuZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHQyw2QkFBT0MsR0FBVixvQkFPQSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGlCQUFoQjtBQUFBLENBUEwsRUFTTSxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLGVBQWhCO0FBQUEsQ0FUWCxFQVVMLFVBQUFILEtB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LE1BQXVCQSxTQUF2QixnQ0FBbUMsUUFBbkM7QUFBQSxzQkFDbEIsZ0NBQUMsaUJBQUQ7QUFBbUIsSUFBQSxTQUFTLEVBQUVuQixTQUE5QjtBQUF5QyxJQUFBLFNBQVMsRUFBRW1CO0FBQXBELEtBQ0d2QixrQkFBTW1CLFFBQU4sQ0FBZUMsR0FBZixDQUFtQmIsUUFBbkIsRUFBNkJWLGNBQTdCLENBREgsQ0FEa0I7QUFBQSxDQUFwQjs7QUFNQThCLFdBQVcsQ0FBQ04sV0FBWixHQUEwQixhQUExQjtlQUVlTSxXIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtBcnJvd1JpZ2h0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3dpdGNoJztcblxuY29uc3QgU3R5bGVkSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY3Rpb25QYW5lbEhlaWdodH1weDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aW9uUGFuZWxXaWR0aH1weDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAke3Byb3BzID0+IChwcm9wcy5jb2xvciA/IGBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYigke3Byb3BzLmNvbG9yfSk7YCA6ICcnKX1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgLm5lc3RlZC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuICAubGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cblxuICAubGFiZWwtaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICAubmVzdGVkLWdyb3VwIHtcbiAgICB3aWR0aDogMTEwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMTBweDtcbiAgICB0b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkQ2hlY2tlZGJveCA9IHN0eWxlZChDaGVja2JveClgXG4gIGxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgd2lkdGg6IDEycHg7XG4gICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJnZH07XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSAoY2hpbGQsIGluZGV4KSA9PlxuICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5vbkNsaWNrKSB7XG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNsYXNzTmFtZTogJ2FjdGlvbi1wYW5lbC1pdGVtJ1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IEFjdGlvblBhbmVsSXRlbSA9IFJlYWN0Lm1lbW8oXG4gICh7Y2hpbGRyZW4sIGNvbG9yLCBjbGFzc05hbWUsIEljb24sIGxhYmVsLCBvbkNsaWNrLCBpc1NlbGVjdGlvbiwgaXNBY3RpdmUsIHN0eWxlfSkgPT4ge1xuICAgIGNvbnN0IG9uQ2xpY2tDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25DbGljaygpO1xuICAgICAgfSxcbiAgICAgIFtvbkNsaWNrXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZEl0ZW0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IG9uQ2xpY2s9e29uQ2xpY2tDYWxsYmFja30gY29sb3I9e2NvbG9yfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICB7SWNvbiA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgIDxJY29uIGhlaWdodD1cIjE2cHhcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge2lzU2VsZWN0aW9uID8gKFxuICAgICAgICAgIDxTdHlsZWRDaGVja2VkYm94XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2hlY2tlZD17Qm9vbGVhbihpc0FjdGl2ZSl9XG4gICAgICAgICAgICBpZD17YHN3aXRjaC0ke2xhYmVsfWB9XG4gICAgICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYWJlbC1pY29uXCI+XG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGhlaWdodD1cIjE2cHhcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5lc3RlZC1ncm91cFwiPntSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHJlbmRlckNoaWxkcmVuKX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1N0eWxlZEl0ZW0+XG4gICAgKTtcbiAgfVxuKTtcblxuQWN0aW9uUGFuZWxJdGVtLmRpc3BsYXlOYW1lID0gJ0FjdGlvblBhbmVsSXRlbSc7XG5cbmNvbnN0IFN0eWxlZEFjdGlvblBhbmVsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gcHJvcHMuZGlyZWN0aW9ufTtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RTaGFkb3d9O1xuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb25TbG93fTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcblxuICAuYWN0aW9uLXBhbmVsLWl0ZW0ge1xuICAgICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmRpcmVjdGlvbiA9PT0gJ2NvbHVtbidcbiAgICAgICAgPyBgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMudGhlbWUucGFuZWxIZWFkZXJJY29ufWBcbiAgICAgICAgOiBgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtwcm9wcy50aGVtZS5wYW5lbEhlYWRlckljb259YH1cblxuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICB9XG5gO1xuXG4vLyBSZWFjdCBjb21wb3VuZCBlbGVtZW50IGh0dHBzOi8vbWVkaXVtLmNvbS9ARGFuZV9zL3JlYWN0LWpzLWNvbXBvdW5kLWNvbXBvbmVudHMtYTZlNTRiNWM5OTkyXG5jb25zdCBBY3Rpb25QYW5lbCA9ICh7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlyZWN0aW9uID0gJ2NvbHVtbid9KSA9PiAoXG4gIDxTdHlsZWRBY3Rpb25QYW5lbCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZGlyZWN0aW9uPXtkaXJlY3Rpb259PlxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHJlbmRlckNoaWxkcmVuKX1cbiAgPC9TdHlsZWRBY3Rpb25QYW5lbD5cbik7XG5cbkFjdGlvblBhbmVsLmRpc3BsYXlOYW1lID0gJ0FjdGlvblBhbmVsJztcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uUGFuZWw7XG4iXX0=