"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CollapseButtonFactory = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  justify-content: center;\n  background-color: ", ";\n  border-radius: 1px;\n  color: ", ";\n  display: flex;\n  height: 20px;\n  position: absolute;\n  right: -8px;\n  top: ", "px;\n  width: 20px;\n\n  :hover {\n    cursor: pointer;\n    box-shadow: none;\n    background-color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-radius: 1px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: left 250ms, right 250ms;\n  left: ", "px;\n  align-items: stretch;\n  flex-grow: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: 99;\n  height: 100%;\n  width: ", "px;\n  display: flex;\n  transition: width 250ms;\n  position: absolute;\n  padding-top: ", "px;\n  padding-right: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSidePanelContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.width + 2 * props.theme.sidePanel.margin.left;
}, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sidePanel.margin.right;
}, function (props) {
  return props.theme.sidePanel.margin.bottom;
}, function (props) {
  return props.theme.sidePanel.margin.left;
});

var SideBarContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.left;
});

var SideBarInner = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.sidePanelBg;
});

var StyledCollapseButton = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.sideBarCloseBtnBgd;
}, function (props) {
  return props.theme.sideBarCloseBtnColor;
}, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sideBarCloseBtnBgdHover;
});

var CollapseButtonFactory = function CollapseButtonFactory() {
  var CollapseButton = function CollapseButton(_ref) {
    var onClick = _ref.onClick,
        isOpen = _ref.isOpen;
    return /*#__PURE__*/_react["default"].createElement(StyledCollapseButton, {
      className: "side-bar__close",
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
      height: "12px",
      style: {
        transform: "rotate(".concat(isOpen ? 180 : 0, "deg)")
      }
    }));
  };

  return CollapseButton;
};

exports.CollapseButtonFactory = CollapseButtonFactory;
SidebarFactory.deps = [CollapseButtonFactory];

function SidebarFactory(CollapseButton) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(SideBar, _Component);

    var _super = _createSuper(SideBar);

    function SideBar() {
      var _this;

      (0, _classCallCheck2["default"])(this, SideBar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOpenOrClose", function () {
        _this.props.onOpenOrClose({
          isOpen: !_this.props.isOpen
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(SideBar, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            isOpen = _this$props.isOpen,
            minifiedWidth = _this$props.minifiedWidth,
            width = _this$props.width;
        var horizontalOffset = isOpen ? 0 : minifiedWidth - width;
        return /*#__PURE__*/_react["default"].createElement(StyledSidePanelContainer, {
          width: isOpen ? width : 0,
          className: "side-panel--container"
        }, /*#__PURE__*/_react["default"].createElement(SideBarContainer, {
          className: "side-bar",
          style: {
            width: "".concat(width, "px")
          },
          left: horizontalOffset
        }, isOpen ? /*#__PURE__*/_react["default"].createElement(SideBarInner, {
          className: "side-bar__inner"
        }, this.props.children) : null, /*#__PURE__*/_react["default"].createElement(CollapseButton, {
          isOpen: isOpen,
          onClick: this._onOpenOrClose
        })));
      }
    }]);
    return SideBar;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    width: _propTypes["default"].number,
    isOpen: _propTypes["default"].bool,
    minifiedWidth: _propTypes["default"].number,
    onOpenOrClose: _propTypes["default"].func
  }), (0, _defineProperty2["default"])(_class, "defaultProps", {
    width: 300,
    minifiedWidth: 0,
    isOpen: true,
    onOpenOrClose: function noop() {}
  }), _temp;
}

var _default = SidebarFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvc2lkZS1iYXIuanMiXSwibmFtZXMiOlsiU3R5bGVkU2lkZVBhbmVsQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ3aWR0aCIsInRoZW1lIiwic2lkZVBhbmVsIiwibWFyZ2luIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiU2lkZUJhckNvbnRhaW5lciIsIlNpZGVCYXJJbm5lciIsInNpZGVQYW5lbEJnIiwiU3R5bGVkQ29sbGFwc2VCdXR0b24iLCJzaWRlQmFyQ2xvc2VCdG5CZ2QiLCJzaWRlQmFyQ2xvc2VCdG5Db2xvciIsInNpZGVCYXJDbG9zZUJ0bkJnZEhvdmVyIiwiQ29sbGFwc2VCdXR0b25GYWN0b3J5IiwiQ29sbGFwc2VCdXR0b24iLCJvbkNsaWNrIiwiaXNPcGVuIiwidHJhbnNmb3JtIiwiU2lkZWJhckZhY3RvcnkiLCJkZXBzIiwib25PcGVuT3JDbG9zZSIsIm1pbmlmaWVkV2lkdGgiLCJob3Jpem9udGFsT2Zmc2V0IiwiY2hpbGRyZW4iLCJfb25PcGVuT3JDbG9zZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsImJvb2wiLCJmdW5jIiwibm9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUduQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsSUFBSUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCQyxJQUFuRDtBQUFBLENBSGMsRUFPYixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCRSxHQUFqQztBQUFBLENBUFEsRUFRWCxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCRyxLQUFqQztBQUFBLENBUk0sRUFTVixVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCSSxNQUFqQztBQUFBLENBVEssRUFVWixVQUFBUixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCQyxJQUFqQztBQUFBLENBVk8sQ0FBOUI7O0FBYUEsSUFBTUksZ0JBQWdCLEdBQUdYLDZCQUFPQyxHQUFWLHFCQUdaLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNLLElBQVY7QUFBQSxDQUhPLENBQXRCOztBQVFBLElBQU1LLFlBQVksR0FBR1osNkJBQU9DLEdBQVYscUJBQ0ksVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZUyxXQUFoQjtBQUFBLENBRFQsQ0FBbEI7O0FBUUEsSUFBTUMsb0JBQW9CLEdBQUdkLDZCQUFPQyxHQUFWLHFCQUlKLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWVcsa0JBQWhCO0FBQUEsQ0FKRCxFQU1mLFVBQUFiLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWVksb0JBQWhCO0FBQUEsQ0FOVSxFQVdqQixVQUFBZCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCRSxHQUFqQztBQUFBLENBWFksRUFpQkYsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZYSx1QkFBaEI7QUFBQSxDQWpCSCxDQUExQjs7QUFxQk8sSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ3pDLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxRQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSxRQUFXQyxNQUFYLFFBQVdBLE1BQVg7QUFBQSx3QkFDckIsZ0NBQUMsb0JBQUQ7QUFBc0IsTUFBQSxTQUFTLEVBQUMsaUJBQWhDO0FBQWtELE1BQUEsT0FBTyxFQUFFRDtBQUEzRCxvQkFDRSxnQ0FBQyxpQkFBRDtBQUFZLE1BQUEsTUFBTSxFQUFDLE1BQW5CO0FBQTBCLE1BQUEsS0FBSyxFQUFFO0FBQUNFLFFBQUFBLFNBQVMsbUJBQVlELE1BQU0sR0FBRyxHQUFILEdBQVMsQ0FBM0I7QUFBVjtBQUFqQyxNQURGLENBRHFCO0FBQUEsR0FBdkI7O0FBS0EsU0FBT0YsY0FBUDtBQUNELENBUE07OztBQVNQSSxjQUFjLENBQUNDLElBQWYsR0FBc0IsQ0FBQ04scUJBQUQsQ0FBdEI7O0FBRUEsU0FBU0ssY0FBVCxDQUF3QkosY0FBeEIsRUFBd0M7QUFBQTs7QUFDdEM7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHlHQWVtQixZQUFNO0FBQ3JCLGNBQUtqQixLQUFMLENBQVd1QixhQUFYLENBQXlCO0FBQUNKLFVBQUFBLE1BQU0sRUFBRSxDQUFDLE1BQUtuQixLQUFMLENBQVdtQjtBQUFyQixTQUF6QjtBQUNELE9BakJIO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsK0JBbUJXO0FBQUEsMEJBQ2dDLEtBQUtuQixLQURyQztBQUFBLFlBQ0FtQixNQURBLGVBQ0FBLE1BREE7QUFBQSxZQUNRSyxhQURSLGVBQ1FBLGFBRFI7QUFBQSxZQUN1QnZCLEtBRHZCLGVBQ3VCQSxLQUR2QjtBQUVQLFlBQU13QixnQkFBZ0IsR0FBR04sTUFBTSxHQUFHLENBQUgsR0FBT0ssYUFBYSxHQUFHdkIsS0FBdEQ7QUFFQSw0QkFDRSxnQ0FBQyx3QkFBRDtBQUEwQixVQUFBLEtBQUssRUFBRWtCLE1BQU0sR0FBR2xCLEtBQUgsR0FBVyxDQUFsRDtBQUFxRCxVQUFBLFNBQVMsRUFBQztBQUEvRCx3QkFDRSxnQ0FBQyxnQkFBRDtBQUNFLFVBQUEsU0FBUyxFQUFDLFVBRFo7QUFFRSxVQUFBLEtBQUssRUFBRTtBQUFDQSxZQUFBQSxLQUFLLFlBQUtBLEtBQUw7QUFBTixXQUZUO0FBR0UsVUFBQSxJQUFJLEVBQUV3QjtBQUhSLFdBS0dOLE1BQU0sZ0JBQ0wsZ0NBQUMsWUFBRDtBQUFjLFVBQUEsU0FBUyxFQUFDO0FBQXhCLFdBQTJDLEtBQUtuQixLQUFMLENBQVcwQixRQUF0RCxDQURLLEdBRUgsSUFQTixlQVFFLGdDQUFDLGNBQUQ7QUFBZ0IsVUFBQSxNQUFNLEVBQUVQLE1BQXhCO0FBQWdDLFVBQUEsT0FBTyxFQUFFLEtBQUtRO0FBQTlDLFVBUkYsQ0FERixDQURGO0FBY0Q7QUFyQ0g7QUFBQTtBQUFBLElBQTZCQyxnQkFBN0IseURBQ3FCO0FBQ2pCM0IsSUFBQUEsS0FBSyxFQUFFNEIsc0JBQVVDLE1BREE7QUFFakJYLElBQUFBLE1BQU0sRUFBRVUsc0JBQVVFLElBRkQ7QUFHakJQLElBQUFBLGFBQWEsRUFBRUssc0JBQVVDLE1BSFI7QUFJakJQLElBQUFBLGFBQWEsRUFBRU0sc0JBQVVHO0FBSlIsR0FEckIsNERBUXdCO0FBQ3BCL0IsSUFBQUEsS0FBSyxFQUFFLEdBRGE7QUFFcEJ1QixJQUFBQSxhQUFhLEVBQUUsQ0FGSztBQUdwQkwsSUFBQUEsTUFBTSxFQUFFLElBSFk7QUFJcEJJLElBQUFBLGFBQWEsRUFBRSxTQUFTVSxJQUFULEdBQWdCLENBQUU7QUFKYixHQVJ4QjtBQXVDRDs7ZUFFY1osYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtBcnJvd1JpZ2h0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbmNvbnN0IFN0eWxlZFNpZGVQYW5lbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRoICsgMiAqIHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4ubGVmdH1weDtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMjUwbXM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi50b3B9cHg7XG4gIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5yaWdodH1weDtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5ib3R0b219cHg7XG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnR9cHg7XG5gO1xuXG5jb25zdCBTaWRlQmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogbGVmdCAyNTBtcywgcmlnaHQgMjUwbXM7XG4gIGxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH1weDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtZ3JvdzogMTtcbmA7XG5cbmNvbnN0IFNpZGVCYXJJbm5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsQmd9O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbmA7XG5cbmNvbnN0IFN0eWxlZENvbGxhcHNlQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZUJhckNsb3NlQnRuQmdkfTtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlQmFyQ2xvc2VCdG5Db2xvcn07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLThweDtcbiAgdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4udG9wfXB4O1xuICB3aWR0aDogMjBweDtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZUJhckNsb3NlQnRuQmdkSG92ZXJ9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29sbGFwc2VCdXR0b25GYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBDb2xsYXBzZUJ1dHRvbiA9ICh7b25DbGljaywgaXNPcGVufSkgPT4gKFxuICAgIDxTdHlsZWRDb2xsYXBzZUJ1dHRvbiBjbGFzc05hbWU9XCJzaWRlLWJhcl9fY2xvc2VcIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIDxBcnJvd1JpZ2h0IGhlaWdodD1cIjEycHhcIiBzdHlsZT17e3RyYW5zZm9ybTogYHJvdGF0ZSgke2lzT3BlbiA/IDE4MCA6IDB9ZGVnKWB9fSAvPlxuICAgIDwvU3R5bGVkQ29sbGFwc2VCdXR0b24+XG4gICk7XG4gIHJldHVybiBDb2xsYXBzZUJ1dHRvbjtcbn07XG5cblNpZGViYXJGYWN0b3J5LmRlcHMgPSBbQ29sbGFwc2VCdXR0b25GYWN0b3J5XTtcblxuZnVuY3Rpb24gU2lkZWJhckZhY3RvcnkoQ29sbGFwc2VCdXR0b24pIHtcbiAgcmV0dXJuIGNsYXNzIFNpZGVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBtaW5pZmllZFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgb25PcGVuT3JDbG9zZTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIHdpZHRoOiAzMDAsXG4gICAgICBtaW5pZmllZFdpZHRoOiAwLFxuICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgb25PcGVuT3JDbG9zZTogZnVuY3Rpb24gbm9vcCgpIHt9XG4gICAgfTtcblxuICAgIF9vbk9wZW5PckNsb3NlID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbk9wZW5PckNsb3NlKHtpc09wZW46ICF0aGlzLnByb3BzLmlzT3Blbn0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7aXNPcGVuLCBtaW5pZmllZFdpZHRoLCB3aWR0aH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgaG9yaXpvbnRhbE9mZnNldCA9IGlzT3BlbiA/IDAgOiBtaW5pZmllZFdpZHRoIC0gd2lkdGg7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRTaWRlUGFuZWxDb250YWluZXIgd2lkdGg9e2lzT3BlbiA/IHdpZHRoIDogMH0gY2xhc3NOYW1lPVwic2lkZS1wYW5lbC0tY29udGFpbmVyXCI+XG4gICAgICAgICAgPFNpZGVCYXJDb250YWluZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGUtYmFyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IGAke3dpZHRofXB4YH19XG4gICAgICAgICAgICBsZWZ0PXtob3Jpem9udGFsT2Zmc2V0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgICAgICAgIDxTaWRlQmFySW5uZXIgY2xhc3NOYW1lPVwic2lkZS1iYXJfX2lubmVyXCI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9TaWRlQmFySW5uZXI+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDxDb2xsYXBzZUJ1dHRvbiBpc09wZW49e2lzT3Blbn0gb25DbGljaz17dGhpcy5fb25PcGVuT3JDbG9zZX0gLz5cbiAgICAgICAgICA8L1NpZGVCYXJDb250YWluZXI+XG4gICAgICAgIDwvU3R5bGVkU2lkZVBhbmVsQ29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJGYWN0b3J5O1xuIl19