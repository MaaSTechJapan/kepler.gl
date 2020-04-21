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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvc2lkZS1iYXIuanMiXSwibmFtZXMiOlsiU3R5bGVkU2lkZVBhbmVsQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ3aWR0aCIsInRoZW1lIiwic2lkZVBhbmVsIiwibWFyZ2luIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiU2lkZUJhckNvbnRhaW5lciIsIlNpZGVCYXJJbm5lciIsInNpZGVQYW5lbEJnIiwiU3R5bGVkQ29sbGFwc2VCdXR0b24iLCJzaWRlQmFyQ2xvc2VCdG5CZ2QiLCJzaWRlQmFyQ2xvc2VCdG5Db2xvciIsInNpZGVCYXJDbG9zZUJ0bkJnZEhvdmVyIiwiQ29sbGFwc2VCdXR0b25GYWN0b3J5IiwiQ29sbGFwc2VCdXR0b24iLCJvbkNsaWNrIiwiaXNPcGVuIiwidHJhbnNmb3JtIiwiU2lkZWJhckZhY3RvcnkiLCJkZXBzIiwib25PcGVuT3JDbG9zZSIsIm1pbmlmaWVkV2lkdGgiLCJob3Jpem9udGFsT2Zmc2V0IiwiY2hpbGRyZW4iLCJfb25PcGVuT3JDbG9zZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsImJvb2wiLCJmdW5jIiwibm9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUduQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsSUFBSUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCQyxJQUFuRDtBQUFBLENBSGMsRUFPYixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRC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QUEvRCx3QkFDRSxnQ0FBQyxnQkFBRDtBQUNFLFVBQUEsU0FBUyxFQUFDLFVBRFo7QUFFRSxVQUFBLEtBQUssRUFBRTtBQUFDQSxZQUFBQSxLQUFLLFlBQUtBLEtBQUw7QUFBTixXQUZUO0FBR0UsVUFBQSxJQUFJLEVBQUV3QjtBQUhSLFdBS0dOLE1BQU0sZ0JBQ0wsZ0NBQUMsWUFBRDtBQUFjLFVBQUEsU0FBUyxFQUFDO0FBQXhCLFdBQTJDLEtBQUtuQixLQUFMLENBQVcwQixRQUF0RCxDQURLLEdBRUgsSUFQTixlQVFFLGdDQUFDLGNBQUQ7QUFBZ0IsVUFBQSxNQUFNLEVBQUVQLE1BQXhCO0FBQWdDLFVBQUEsT0FBTyxFQUFFLEtBQUtRO0FBQTlDLFVBUkYsQ0FERixDQURGO0FBY0Q7QUFyQ0g7QUFBQTtBQUFBLElBQTZCQyxnQkFBN0IseURBQ3FCO0FBQ2pCM0IsSUFBQUEsS0FBSyxFQUFFNEIsc0JBQVVDLE1BREE7QUFFakJYLElBQUFBLE1BQU0sRUFBRVUsc0JBQVVFLElBRkQ7QUFHakJQLElBQUFBLGFBQWEsRUFBRUssc0JBQVVDLE1BSFI7QUFJakJQLElBQUFBLGFBQWEsRUFBRU0sc0JBQVVHO0FBSlIsR0FEckIsNERBUXdCO0FBQ3BCL0IsSUFBQUEsS0FBSyxFQUFFLEdBRGE7QUFFcEJ1QixJQUFBQSxhQUFhLEVBQUUsQ0FGSztBQUdwQkwsSUFBQUEsTUFBTSxFQUFFLElBSFk7QUFJcEJJLElBQUFBLGFBQWEsRUFBRSxTQUFTVSxJQUFULEdBQWdCLENBQUU7QUFKYixHQVJ4QjtBQXVDRDs7ZUFFY1osYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtBcnJvd1JpZ2h0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcblxyXG5jb25zdCBTdHlsZWRTaWRlUGFuZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHotaW5kZXg6IDk5O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aCArIDIgKiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnR9cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAyNTBtcztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZy10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi50b3B9cHg7XHJcbiAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLnJpZ2h0fXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4uYm90dG9tfXB4O1xyXG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnR9cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTaWRlQmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zaXRpb246IGxlZnQgMjUwbXMsIHJpZ2h0IDI1MG1zO1xyXG4gIGxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH1weDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbmA7XHJcblxyXG5jb25zdCBTaWRlQmFySW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsQmd9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkQ29sbGFwc2VCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVCYXJDbG9zZUJ0bkJnZH07XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVCYXJDbG9zZUJ0bkNvbG9yfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC04cHg7XHJcbiAgdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4udG9wfXB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZUJhckNsb3NlQnRuQmdkSG92ZXJ9O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb2xsYXBzZUJ1dHRvbkZhY3RvcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgQ29sbGFwc2VCdXR0b24gPSAoe29uQ2xpY2ssIGlzT3Blbn0pID0+IChcclxuICAgIDxTdHlsZWRDb2xsYXBzZUJ1dHRvbiBjbGFzc05hbWU9XCJzaWRlLWJhcl9fY2xvc2VcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgPEFycm93UmlnaHQgaGVpZ2h0PVwiMTJweFwiIHN0eWxlPXt7dHJhbnNmb3JtOiBgcm90YXRlKCR7aXNPcGVuID8gMTgwIDogMH1kZWcpYH19IC8+XHJcbiAgICA8L1N0eWxlZENvbGxhcHNlQnV0dG9uPlxyXG4gICk7XHJcbiAgcmV0dXJuIENvbGxhcHNlQnV0dG9uO1xyXG59O1xyXG5cclxuU2lkZWJhckZhY3RvcnkuZGVwcyA9IFtDb2xsYXBzZUJ1dHRvbkZhY3RvcnldO1xyXG5cclxuZnVuY3Rpb24gU2lkZWJhckZhY3RvcnkoQ29sbGFwc2VCdXR0b24pIHtcclxuICByZXR1cm4gY2xhc3MgU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgbWluaWZpZWRXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgb25PcGVuT3JDbG9zZTogUHJvcFR5cGVzLmZ1bmNcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgbWluaWZpZWRXaWR0aDogMCxcclxuICAgICAgaXNPcGVuOiB0cnVlLFxyXG4gICAgICBvbk9wZW5PckNsb3NlOiBmdW5jdGlvbiBub29wKCkge31cclxuICAgIH07XHJcblxyXG4gICAgX29uT3Blbk9yQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMucHJvcHMub25PcGVuT3JDbG9zZSh7aXNPcGVuOiAhdGhpcy5wcm9wcy5pc09wZW59KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7aXNPcGVuLCBtaW5pZmllZFdpZHRoLCB3aWR0aH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCBob3Jpem9udGFsT2Zmc2V0ID0gaXNPcGVuID8gMCA6IG1pbmlmaWVkV2lkdGggLSB3aWR0aDtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFNpZGVQYW5lbENvbnRhaW5lciB3aWR0aD17aXNPcGVuID8gd2lkdGggOiAwfSBjbGFzc05hbWU9XCJzaWRlLXBhbmVsLS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxTaWRlQmFyQ29udGFpbmVyXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGUtYmFyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogYCR7d2lkdGh9cHhgfX1cclxuICAgICAgICAgICAgbGVmdD17aG9yaXpvbnRhbE9mZnNldH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzT3BlbiA/IChcclxuICAgICAgICAgICAgICA8U2lkZUJhcklubmVyIGNsYXNzTmFtZT1cInNpZGUtYmFyX19pbm5lclwiPnt0aGlzLnByb3BzLmNoaWxkcmVufTwvU2lkZUJhcklubmVyPlxyXG4gICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPENvbGxhcHNlQnV0dG9uIGlzT3Blbj17aXNPcGVufSBvbkNsaWNrPXt0aGlzLl9vbk9wZW5PckNsb3NlfSAvPlxyXG4gICAgICAgICAgPC9TaWRlQmFyQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU3R5bGVkU2lkZVBhbmVsQ29udGFpbmVyPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJGYWN0b3J5O1xyXG4iXX0=