"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotificationItemFactory;

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

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  svg {\n    vertical-align: text-top;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 2;\n  width: ", "px;\n  margin: 0 1em;\n  overflow: ", ";\n  padding-right: ", ";\n\n  p {\n    margin-top: 0;\n    a {\n      color: #fff;\n      text-decoration: underline;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  color: #fff;\n  display: flex;\n  flex-direction: row;\n  width: ", "px;\n  height: ", "px;\n  font-size: 11px;\n  margin-bottom: 1rem;\n  padding: 1em;\n  border-radius: 4px;\n  box-shadow: ", ";\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NotificationItemContent = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.notificationColors[props.type] || '#000';
}, function (props) {
  return props.theme.notificationPanelItemWidth * (1 + Number(props.isExpanded));
}, function (props) {
  return props.theme.notificationPanelItemHeight * (1 + Number(props.isExpanded));
}, function (props) {
  return props.theme.boxShadow;
});

var DeleteIcon = (0, _styledComponents["default"])(_icons.Delete)(_templateObject2());

var NotificationMessage = _styledComponents["default"].div.attrs({
  className: 'notification-item--message'
})(_templateObject3(), function (props) {
  return props.theme.notificationPanelItemWidth;
}, function (props) {
  return props.isExpanded ? 'auto' : 'hidden';
}, function (props) {
  return props.isExpanded ? '1em' : 0;
});

var NotificationIcon = _styledComponents["default"].div(_templateObject4());

var icons = {
  info: /*#__PURE__*/_react["default"].createElement(_icons.Info, null),
  warning: /*#__PURE__*/_react["default"].createElement(_icons.Warning, null),
  error: /*#__PURE__*/_react["default"].createElement(_icons.Warning, null),
  success: /*#__PURE__*/_react["default"].createElement(_icons.Checkmark, null)
};

var LinkRenderer = function LinkRenderer(props) {
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.children);
};

function NotificationItemFactory() {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(NotificationItem, _Component);

    var _super = _createSuper(NotificationItem);

    function NotificationItem() {
      var _this;

      (0, _classCallCheck2["default"])(this, NotificationItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isExpanded: false
      });
      return _this;
    }

    (0, _createClass2["default"])(NotificationItem, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.isExpanded) {
          this.setState({
            isExpanded: true
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            notification = _this$props.notification,
            removeNotification = _this$props.removeNotification;
        var isExpanded = this.state.isExpanded;
        return /*#__PURE__*/_react["default"].createElement(NotificationItemContent, {
          className: "notification-item",
          type: notification.type,
          isExpanded: isExpanded,
          onClick: function onClick() {
            return _this2.setState({
              isExpanded: !isExpanded
            });
          }
        }, /*#__PURE__*/_react["default"].createElement(NotificationIcon, {
          className: "notification-item--icon"
        }, icons[notification.type]), /*#__PURE__*/_react["default"].createElement(NotificationMessage, {
          isExpanded: isExpanded,
          theme: this.props.theme
        }, /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
          source: notification.message,
          renderers: {
            link: LinkRenderer
          }
        })), typeof removeNotification === 'function' ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "notification-item--action"
        }, /*#__PURE__*/_react["default"].createElement(DeleteIcon, {
          height: "10px",
          onClick: function onClick() {
            return removeNotification(notification.id);
          }
        })) : null);
      }
    }]);
    return NotificationItem;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    notification: _propTypes["default"].shape({
      id: _propTypes["default"].string.isRequired,
      type: _propTypes["default"].string.isRequired,
      message: _propTypes["default"].string.isRequired
    }).isRequired,
    isExpanded: _propTypes["default"].bool
  }), _temp;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1wYW5lbC9ub3RpZmljYXRpb24taXRlbS5qcyJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb25JdGVtQ29udGVudCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJub3RpZmljYXRpb25Db2xvcnMiLCJ0eXBlIiwibm90aWZpY2F0aW9uUGFuZWxJdGVtV2lkdGgiLCJOdW1iZXIiLCJpc0V4cGFuZGVkIiwibm90aWZpY2F0aW9uUGFuZWxJdGVtSGVpZ2h0IiwiYm94U2hhZG93IiwiRGVsZXRlSWNvbiIsIkRlbGV0ZSIsIk5vdGlmaWNhdGlvbk1lc3NhZ2UiLCJhdHRycyIsImNsYXNzTmFtZSIsIk5vdGlmaWNhdGlvbkljb24iLCJpY29ucyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwiTGlua1JlbmRlcmVyIiwiaHJlZiIsImNoaWxkcmVuIiwiTm90aWZpY2F0aW9uSXRlbUZhY3RvcnkiLCJzZXRTdGF0ZSIsIm5vdGlmaWNhdGlvbiIsInJlbW92ZU5vdGlmaWNhdGlvbiIsInN0YXRlIiwibWVzc2FnZSIsImxpbmsiLCJpZCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHVCQUF1QixHQUFHQyw2QkFBT0MsR0FBVixvQkFDUCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGtCQUFaLENBQStCRixLQUFLLENBQUNHLElBQXJDLEtBQThDLE1BQWxEO0FBQUEsQ0FERSxFQUtsQixVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENB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cUIsVUFBQSxVQUFVLEVBQUVHLFVBQWpDO0FBQTZDLFVBQUEsS0FBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0M7QUFBL0Qsd0JBQ0UsZ0NBQUMseUJBQUQ7QUFBZSxVQUFBLE1BQU0sRUFBRXdCLFlBQVksQ0FBQ0csT0FBcEM7QUFBNkMsVUFBQSxTQUFTLEVBQUU7QUFBQ0MsWUFBQUEsSUFBSSxFQUFFVDtBQUFQO0FBQXhELFVBREYsQ0FURixFQVlHLE9BQU9NLGtCQUFQLEtBQThCLFVBQTlCLGdCQUNDO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZix3QkFDRSxnQ0FBQyxVQUFEO0FBQVksVUFBQSxNQUFNLEVBQUMsTUFBbkI7QUFBMEIsVUFBQSxPQUFPLEVBQUU7QUFBQSxtQkFBTUEsa0JBQWtCLENBQUNELFlBQVksQ0FBQ0ssRUFBZCxDQUF4QjtBQUFBO0FBQW5DLFVBREYsQ0FERCxHQUlHLElBaEJOLENBREY7QUFvQkQ7QUE1Q0g7QUFBQTtBQUFBLElBQXNDQyxnQkFBdEMseURBQ3FCO0FBQ2pCTixJQUFBQSxZQUFZLEVBQUVPLHNCQUFVQyxLQUFWLENBQWdCO0FBQzVCSCxNQUFBQSxFQUFFLEVBQUVFLHNCQUFVRSxNQUFWLENBQWlCQyxVQURPO0FBRTVCaEMsTUFBQUEsSUFBSSxFQUFFNkIsc0JBQVVFLE1BQVYsQ0FBaUJDLFVBRks7QUFHNUJQLE1BQUFBLE9BQU8sRUFBRUksc0JBQVVFLE1BQVYsQ0FBaUJDO0FBSEUsS0FBaEIsRUFJWEEsVUFMYztBQU1qQjdCLElBQUFBLFVBQVUsRUFBRTBCLHNCQUFVSTtBQU5MLEdBRHJCO0FBOENEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge0RlbGV0ZSwgSW5mbywgV2FybmluZywgQ2hlY2ttYXJrfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcclxuXHJcbmNvbnN0IE5vdGlmaWNhdGlvbkl0ZW1Db250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5vdGlmaWNhdGlvbkNvbG9yc1twcm9wcy50eXBlXSB8fCAnIzAwMCd9O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ub3RpZmljYXRpb25QYW5lbEl0ZW1XaWR0aCAqICgxICsgTnVtYmVyKHByb3BzLmlzRXhwYW5kZWQpKX1weDtcclxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubm90aWZpY2F0aW9uUGFuZWxJdGVtSGVpZ2h0ICogKDEgKyBOdW1iZXIocHJvcHMuaXNFeHBhbmRlZCkpfXB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3hTaGFkb3d9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUljb24gPSBzdHlsZWQoRGVsZXRlKWBcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBOb3RpZmljYXRpb25NZXNzYWdlID0gc3R5bGVkLmRpdi5hdHRycyh7XHJcbiAgY2xhc3NOYW1lOiAnbm90aWZpY2F0aW9uLWl0ZW0tLW1lc3NhZ2UnXHJcbn0pYFxyXG4gIGZsZXgtZ3JvdzogMjtcclxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ub3RpZmljYXRpb25QYW5lbEl0ZW1XaWR0aH1weDtcclxuICBtYXJnaW46IDAgMWVtO1xyXG4gIG92ZXJmbG93OiAke3Byb3BzID0+IChwcm9wcy5pc0V4cGFuZGVkID8gJ2F1dG8nIDogJ2hpZGRlbicpfTtcclxuICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5pc0V4cGFuZGVkID8gJzFlbScgOiAwKX07XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTm90aWZpY2F0aW9uSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgc3ZnIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBpY29ucyA9IHtcclxuICBpbmZvOiA8SW5mbyAvPixcclxuICB3YXJuaW5nOiA8V2FybmluZyAvPixcclxuICBlcnJvcjogPFdhcm5pbmcgLz4sXHJcbiAgc3VjY2VzczogPENoZWNrbWFyayAvPlxyXG59O1xyXG5cclxuY29uc3QgTGlua1JlbmRlcmVyID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YSBocmVmPXtwcm9wcy5ocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90aWZpY2F0aW9uSXRlbUZhY3RvcnkoKSB7XHJcbiAgcmV0dXJuIGNsYXNzIE5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgbm90aWZpY2F0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG4gICAgICB9KS5pc1JlcXVpcmVkLFxyXG4gICAgICBpc0V4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgaXNFeHBhbmRlZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLmlzRXhwYW5kZWQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0V4cGFuZGVkOiB0cnVlfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtub3RpZmljYXRpb24sIHJlbW92ZU5vdGlmaWNhdGlvbn0gPSB0aGlzLnByb3BzO1xyXG4gICAgICBjb25zdCB7aXNFeHBhbmRlZH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbUNvbnRlbnRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pdGVtXCJcclxuICAgICAgICAgIHR5cGU9e25vdGlmaWNhdGlvbi50eXBlfVxyXG4gICAgICAgICAgaXNFeHBhbmRlZD17aXNFeHBhbmRlZH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe2lzRXhwYW5kZWQ6ICFpc0V4cGFuZGVkfSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE5vdGlmaWNhdGlvbkljb24gY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWl0ZW0tLWljb25cIj5cclxuICAgICAgICAgICAge2ljb25zW25vdGlmaWNhdGlvbi50eXBlXX1cclxuICAgICAgICAgIDwvTm90aWZpY2F0aW9uSWNvbj5cclxuICAgICAgICAgIDxOb3RpZmljYXRpb25NZXNzYWdlIGlzRXhwYW5kZWQ9e2lzRXhwYW5kZWR9IHRoZW1lPXt0aGlzLnByb3BzLnRoZW1lfT5cclxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtub3RpZmljYXRpb24ubWVzc2FnZX0gcmVuZGVyZXJzPXt7bGluazogTGlua1JlbmRlcmVyfX0gLz5cclxuICAgICAgICAgIDwvTm90aWZpY2F0aW9uTWVzc2FnZT5cclxuICAgICAgICAgIHt0eXBlb2YgcmVtb3ZlTm90aWZpY2F0aW9uID09PSAnZnVuY3Rpb24nID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pdGVtLS1hY3Rpb25cIj5cclxuICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBoZWlnaHQ9XCIxMHB4XCIgb25DbGljaz17KCkgPT4gcmVtb3ZlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbi5pZCl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9Ob3RpZmljYXRpb25JdGVtQ29udGVudD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==