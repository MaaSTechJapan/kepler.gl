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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hY3Rpb24tcGFuZWwuanMiXSwibmFtZXMiOlsiU3R5bGVkSXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJhY3Rpb25QYW5lbEhlaWdodCIsImRyb3Bkb3duTGlzdEJnZCIsImFjdGlvblBhbmVsV2lkdGgiLCJjb2xvciIsInRleHRDb2xvckhsIiwidGV4dENvbG9yIiwiU3R5bGVkQ2hlY2tlZGJveCIsIkNoZWNrYm94IiwicmVuZGVyQ2hpbGRyZW4iLCJjaGlsZCIsImluZGV4IiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJvbkNsaWNrIiwiaXNWYWxpZEVsZW1lbnQiLCJjbGFzc05hbWUiLCJBY3Rpb25QYW5lbEl0ZW0iLCJtZW1vIiwiY2hpbGRyZW4iLCJJY29uIiwibGFiZWwiLCJpc1NlbGVjdGlvbiIsImlzQWN0aXZlIiwic3R5bGUiLCJvbkNsaWNrQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiQm9vbGVhbiIsImxlbmd0aCIsIkNoaWxkcmVuIiwibWFwIiwiZGlzcGxheU5hbWUiLCJTdHlsZWRBY3Rpb25QYW5lbCIsImRpcmVjdGlvbiIsImRyb3Bkb3duTGlzdFNoYWRvdyIsInRyYW5zaXRpb25TbG93IiwicGFuZWxIZWFkZXJJY29uIiwiQWN0aW9uUGFuZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHQyw2QkFBT0MsR0FBVixvQkFPQSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGlCQUFoQjtBQUFBLENBUEwsRUFTTSxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLGVBQWhCO0FBQUEsQ0FUWCxFQVVMLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsZ0JBQWhCO0FBQUEsQ0FWQSxFQVlaLFVBQUFKLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNLLEtBQU4sd0NBQTRDTCxLQUFLLENBQUNLLEtBQWxELFVBQThELEVBQW5FO0FBQUEsQ0FaTyxFQWdCSCxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLFdBQWhCO0FBQUEsQ0FoQkYsRUFpQ0gsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxTQUFoQjtBQUFBLENBakNGLENBQWhCOztBQXlDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQ0FBT0Msa0JBQVAsQ0FBSCxxQkFHVCxVQUFBVCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLFNBQWhCO0FBQUEsQ0FISSxFQVVJLFVBQUFQLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsZUFBaEI7QUFBQSxDQVZULEVBYVAsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxXQUFoQjtBQUFBLENBYkUsQ0FBdEI7O0FBa0JBLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsU0FDckJDLGtCQUFNQyxZQUFOLENBQW1CSCxLQUFuQixFQUEwQjtBQUN4QkksSUFBQUEsT0FBTyxFQUFFLG1CQUFNO0FBQ2IsVUFBSUYsa0JBQU1HLGNBQU4sQ0FBcUJMLEtBQXJCLENBQUosRUFBaUM7QUFDL0IsWUFBSUEsS0FBSyxDQUFDWCxLQUFOLENBQVllLE9BQWhCLEVBQXlCO0FBQ3ZCSixVQUFBQSxLQUFLLENBQUNYLEtBQU4sQ0FBWWUsT0FBWixDQUFvQkgsS0FBcEI7QUFDRDtBQUNGO0FBQ0YsS0FQdUI7QUFReEJLLElBQUFBLFNBQVMsRUFBRTtBQVJhLEdBQTFCLENBRHFCO0FBQUEsQ0FBdkI7O0FBWU8sSUFBTUMsZUFBZSxHQUFHTCxrQkFBTU0sSUFBTixDQUM3QixnQkFBc0Y7QUFBQSxNQUFwRkMsUUFBb0YsUUFBcEZBLFFBQW9GO0FBQUEsTUFBMUVmLEtBQTBFLFFBQTFFQSxLQUEwRTtBQUFBLE1BQW5FWSxTQUFtRSxRQUFuRUEsU0FBbUU7QUFBQSxNQUF4REksSUFBd0QsUUFBeERBLElBQXdEO0FBQUEsTUFBbERDLEtBQWtELFFBQWxEQSxLQUFrRDtBQUFBLE1BQTNDUCxPQUEyQyxRQUEzQ0EsT0FBMkM7QUFBQSxNQUFsQ1EsV0FBa0MsUUFBbENBLFdBQWtDO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQUNwRixNQUFNQyxlQUFlLEdBQUcsd0JBQ3RCLFVBQUFDLEtBQUssRUFBSTtBQUNQQSxJQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQUQsSUFBQUEsS0FBSyxDQUFDRSxlQUFOO0FBQ0FkLElBQUFBLE9BQU87QUFDUixHQUxxQixFQU10QixDQUFDQSxPQUFELENBTnNCLENBQXhCO0FBU0Esc0JBQ0UsZ0NBQUMsVUFBRDtBQUFZLElBQUEsU0FBUyxFQUFFRSxTQUF2QjtBQUFrQyxJQUFBLE9BQU8sRUFBRVMsZUFBM0M7QUFBNEQsSUFBQSxLQUFLLEVBQUVyQixLQUFuRTtBQUEwRSxJQUFBLEtBQUssRUFBRW9CO0FBQWpGLEtBQ0dKLElBQUksZ0JBQ0g7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLElBQUQ7QUFBTSxJQUFBLE1BQU0sRUFBQztBQUFiLElBREYsQ0FERyxHQUlELElBTE4sRUFNR0UsV0FBVyxnQkFDVixnQ0FBQyxnQkFBRDtBQUNFLElBQUEsSUFBSSxFQUFDLFVBRFA7QUFFRSxJQUFBLE9BQU8sRUFBRU8sT0FBTyxDQUFDTixRQUFELENBRmxCO0FBR0UsSUFBQSxFQUFFLG1CQUFZRixLQUFaLENBSEo7QUFJRSxJQUFBLFNBQVMsTUFKWDtBQUtFLElBQUEsS0FBSyxFQUFFQTtBQUxULElBRFUsZ0JBU1Y7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixLQUF5QkEsS0FBekIsQ0FmSixFQWlCR0YsUUFBUSxJQUFJQSxRQUFRLENBQUNXLE1BQXJCLGdCQUNDLDBEQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnQ0FBQyxpQkFBRDtBQUFZLElBQUEsTUFBTSxFQUFDO0FBQW5CLElBREYsQ0FERixlQUlFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUErQmxCLGtCQUFNbUIsUUFBTixDQUFlQyxHQUFmLENBQW1CYixRQUFuQixFQUE2QlYsY0FBN0IsQ0FBL0IsQ0FKRixDQURELEdBT0csSUF4Qk4sQ0FERjtBQTRCRCxDQXZDNEIsQ0FBeEI7OztBQTBDUFEsZUFBZSxDQUFDZ0IsV0FBaEIsR0FBOEIsaUJBQTlCOztBQUVBLElBQU1DLGlCQUFpQixHQUFHckMsNkJBQU9DLEdBQVYscUJBRUgsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ29DLFNBQVY7QUFBQSxDQUZGLEVBR1AsVUFBQXBDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWW9DLGtCQUFoQjtBQUFBLENBSEUsRUFJUCxVQUFBckMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZcUMsY0FBaEI7QUFBQSxDQUpFLEVBS1osVUFBQXRDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sU0FBaEI7QUFBQSxDQUxPLEVBUWpCLFVBQUFQLEtBQUs7QUFBQSxTQUNMQSxLQUFLLENBQUNvQyxTQUFOLEtBQW9CLFFBQXBCLHNDQUNnQ3BDLEtBQUssQ0FBQ0MsS0FBTixDQUFZc0MsZUFENUMsc0NBRStCdkMsS0FBSyxDQUFDQyxLQUFOLENBQVlzQyxlQUYzQyxDQURLO0FBQUEsQ0FSWSxDQUF2QixDLENBbUJBOzs7QUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUVwQixRQUFGLFNBQUVBLFFBQUY7QUFBQSxNQUFZSCxTQUFaLFNBQVlBLFNBQVo7QUFBQSw4QkFBdUJtQixTQUF2QjtBQUFBLE1BQXVCQSxTQUF2QixnQ0FBbUMsUUFBbkM7QUFBQSxzQkFDbEIsZ0NBQUMsaUJBQUQ7QUFBbUIsSUFBQSxTQUFTLEVBQUVuQixTQUE5QjtBQUF5QyxJQUFBLFNBQVMsRUFBRW1CO0FBQXBELEtBQ0d2QixrQkFBTW1CLFFBQU4sQ0FBZUMsR0FBZixDQUFtQmIsUUFBbkIsRUFBNkJWLGNBQTdCLENBREgsQ0FEa0I7QUFBQSxDQUFwQjs7QUFNQThCLFdBQVcsQ0FBQ04sV0FBWixHQUEwQixhQUExQjtlQUVlTSxXIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7QXJyb3dSaWdodH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3dpdGNoJztcclxuXHJcbmNvbnN0IFN0eWxlZEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY3Rpb25QYW5lbEhlaWdodH1weDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJnZH07XHJcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aW9uUGFuZWxXaWR0aH1weDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJHtwcm9wcyA9PiAocHJvcHMuY29sb3IgPyBgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2IoJHtwcm9wcy5jb2xvcn0pO2AgOiAnJyl9XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgICAubmVzdGVkLWdyb3VwIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcblxyXG4gIC5sYWJlbC1pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm5lc3RlZC1ncm91cCB7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDExMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRDaGVja2VkYm94ID0gc3R5bGVkKENoZWNrYm94KWBcclxuICBsYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCByZW5kZXJDaGlsZHJlbiA9IChjaGlsZCwgaW5kZXgpID0+XHJcbiAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcclxuICAgICAgICBpZiAoY2hpbGQucHJvcHMub25DbGljaykge1xyXG4gICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xhc3NOYW1lOiAnYWN0aW9uLXBhbmVsLWl0ZW0nXHJcbiAgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aW9uUGFuZWxJdGVtID0gUmVhY3QubWVtbyhcclxuICAoe2NoaWxkcmVuLCBjb2xvciwgY2xhc3NOYW1lLCBJY29uLCBsYWJlbCwgb25DbGljaywgaXNTZWxlY3Rpb24sIGlzQWN0aXZlLCBzdHlsZX0pID0+IHtcclxuICAgIGNvbnN0IG9uQ2xpY2tDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxyXG4gICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICBvbkNsaWNrKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIFtvbkNsaWNrXVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8U3R5bGVkSXRlbSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja0NhbGxiYWNrfSBjb2xvcj17Y29sb3J9IHN0eWxlPXtzdHlsZX0+XHJcbiAgICAgICAge0ljb24gPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cclxuICAgICAgICAgICAgPEljb24gaGVpZ2h0PVwiMTZweFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICB7aXNTZWxlY3Rpb24gPyAoXHJcbiAgICAgICAgICA8U3R5bGVkQ2hlY2tlZGJveFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXtCb29sZWFuKGlzQWN0aXZlKX1cclxuICAgICAgICAgICAgaWQ9e2Bzd2l0Y2gtJHtsYWJlbH1gfVxyXG4gICAgICAgICAgICBzZWNvbmRhcnlcclxuICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2NoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCA/IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGhlaWdodD1cIjE2cHhcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXN0ZWQtZ3JvdXBcIj57UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCByZW5kZXJDaGlsZHJlbil9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9TdHlsZWRJdGVtPlxyXG4gICAgKTtcclxuICB9XHJcbik7XHJcblxyXG5BY3Rpb25QYW5lbEl0ZW0uZGlzcGxheU5hbWUgPSAnQWN0aW9uUGFuZWxJdGVtJztcclxuXHJcbmNvbnN0IFN0eWxlZEFjdGlvblBhbmVsID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IHByb3BzLmRpcmVjdGlvbn07XHJcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RTaGFkb3d9O1xyXG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvblNsb3d9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcblxyXG4gIC5hY3Rpb24tcGFuZWwtaXRlbSB7XHJcbiAgICAke3Byb3BzID0+XHJcbiAgICAgIHByb3BzLmRpcmVjdGlvbiA9PT0gJ2NvbHVtbidcclxuICAgICAgICA/IGBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcy50aGVtZS5wYW5lbEhlYWRlckljb259YFxyXG4gICAgICAgIDogYGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMudGhlbWUucGFuZWxIZWFkZXJJY29ufWB9XHJcblxyXG4gICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbi8vIFJlYWN0IGNvbXBvdW5kIGVsZW1lbnQgaHR0cHM6Ly9tZWRpdW0uY29tL0BEYW5lX3MvcmVhY3QtanMtY29tcG91bmQtY29tcG9uZW50cy1hNmU1NGI1Yzk5OTJcclxuY29uc3QgQWN0aW9uUGFuZWwgPSAoe2NoaWxkcmVuLCBjbGFzc05hbWUsIGRpcmVjdGlvbiA9ICdjb2x1bW4nfSkgPT4gKFxyXG4gIDxTdHlsZWRBY3Rpb25QYW5lbCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZGlyZWN0aW9uPXtkaXJlY3Rpb259PlxyXG4gICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgcmVuZGVyQ2hpbGRyZW4pfVxyXG4gIDwvU3R5bGVkQWN0aW9uUGFuZWw+XHJcbik7XHJcblxyXG5BY3Rpb25QYW5lbC5kaXNwbGF5TmFtZSA9ICdBY3Rpb25QYW5lbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25QYW5lbDtcclxuIl19