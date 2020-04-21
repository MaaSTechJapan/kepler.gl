"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotificationPanelFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _notificationItem = _interopRequireDefault(require("./notification-panel/notification-item"));

var _defaultSettings = require("../constants/default-settings");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 4px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  z-index: 10000;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NotificationPanelContent = _styledComponents["default"].div(_templateObject());

NotificationPanelFactory.deps = [_notificationItem["default"]];

function NotificationPanelFactory(NotificationItem) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(NotificationPanel, _Component);

    var _super = _createSuper(NotificationPanel);

    function NotificationPanel() {
      (0, _classCallCheck2["default"])(this, NotificationPanel);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(NotificationPanel, [{
      key: "render",
      value: function render() {
        var _this = this;

        var globalNotifications = this.props.notifications.filter(function (n) {
          return n.topic === _defaultSettings.DEFAULT_NOTIFICATION_TOPICS.global;
        });
        return /*#__PURE__*/_react["default"].createElement(NotificationPanelContent, {
          className: "notification-panel",
          style: {
            display: globalNotifications.length ? 'block' : 'none'
          }
        }, globalNotifications.map(function (n) {
          return /*#__PURE__*/_react["default"].createElement(NotificationItem, {
            key: n.id,
            notification: n,
            removeNotification: _this.props.removeNotification
          });
        }));
      }
    }]);
    return NotificationPanel;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    removeNotification: _propTypes["default"].func.isRequired,
    notifications: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired
  }), _temp;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1wYW5lbC5qcyJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb25QYW5lbENvbnRlbnQiLCJzdHlsZWQiLCJkaXYiLCJOb3RpZmljYXRpb25QYW5lbEZhY3RvcnkiLCJkZXBzIiwiTm90aWZpY2F0aW9uSXRlbUZhY3RvcnkiLCJOb3RpZmljYXRpb25JdGVtIiwiZ2xvYmFsTm90aWZpY2F0aW9ucyIsInByb3BzIiwibm90aWZpY2F0aW9ucyIsImZpbHRlciIsIm4iLCJ0b3BpYyIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyIsImdsb2JhbCIsImRpc3BsYXkiLCJsZW5ndGgiLCJtYXAiLCJpZCIsInJlbW92ZU5vdGlmaWNhdGlvbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHdCQUF3QixHQUFHQyw2QkFBT0MsR0FBVixtQkFBOUI7O0FBZUFDLHdCQUF3QixDQUFDQyxJQUF6QixHQUFnQyxDQUFDQyw0QkFBRCxDQUFoQzs7QUFFZSxTQUFTRix3QkFBVCxDQUFrQ0csZ0JBQWxDLEVBQW9EO0FBQUE7O0FBQ2pFO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQU1XO0FBQUE7O0FBQ1AsWUFBTUMsbUJBQW1CLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxhQUFYLENBQXlCQyxNQUF6QixDQUMxQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ0MsS0FBRixLQUFZQyw2Q0FBNEJDLE1BQTVDO0FBQUEsU0FEeUIsQ0FBNUI7QUFHQSw0QkFDRSxnQ0FBQyx3QkFBRDtBQUNFLFVBQUEsU0FBUyxFQUFDLG9CQURaO0FBRUUsVUFBQSxLQUFLLEVBQUU7QUFBQ0MsWUFBQUEsT0FBTyxFQUFFUixtQkFBbUIsQ0FBQ1MsTUFBcEIsR0FBNkIsT0FBN0IsR0FBdUM7QUFBakQ7QUFGVCxXQUlHVCxtQkFBbUIsQ0FBQ1UsR0FBcEIsQ0FBd0IsVUFBQU4sQ0FBQztBQUFBLDhCQUN4QixnQ0FBQyxnQkFBRDtBQUNFLFlBQUEsR0FBRyxFQUFFQSxDQUFDLENBQUNPLEVBRFQ7QUFFRSxZQUFBLFlBQVksRUFBRVAsQ0FGaEI7QUFHRSxZQUFBLGtCQUFrQixFQUFFLEtBQUksQ0FBQ0gsS0FBTCxDQUFXVztBQUhqQyxZQUR3QjtBQUFBLFNBQXpCLENBSkgsQ0FERjtBQWNEO0FBeEJIO0FBQUE7QUFBQSxJQUF1Q0MsZ0JBQXZDLHlEQUNxQjtBQUNqQkQsSUFBQUEsa0JBQWtCLEVBQUVFLHNCQUFVQyxJQUFWLENBQWVDLFVBRGxCO0FBRWpCZCxJQUFBQSxhQUFhLEVBQUVZLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUksTUFBNUIsRUFBb0NGO0FBRmxDLEdBRHJCO0FBMEJEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IE5vdGlmaWNhdGlvbkl0ZW1GYWN0b3J5IGZyb20gJy4vbm90aWZpY2F0aW9uLXBhbmVsL25vdGlmaWNhdGlvbi1pdGVtJztcclxuaW1wb3J0IHtERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1N9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuXHJcbmNvbnN0IE5vdGlmaWNhdGlvblBhbmVsQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMWVtO1xyXG4gIHJpZ2h0OiAxZW07XHJcbiAgei1pbmRleDogMTAwMDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuYDtcclxuXHJcbk5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeS5kZXBzID0gW05vdGlmaWNhdGlvbkl0ZW1GYWN0b3J5XTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeShOb3RpZmljYXRpb25JdGVtKSB7XHJcbiAgcmV0dXJuIGNsYXNzIE5vdGlmaWNhdGlvblBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIHJlbW92ZU5vdGlmaWNhdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgbm90aWZpY2F0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IGdsb2JhbE5vdGlmaWNhdGlvbnMgPSB0aGlzLnByb3BzLm5vdGlmaWNhdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgIG4gPT4gbi50b3BpYyA9PT0gREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTLmdsb2JhbFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOb3RpZmljYXRpb25QYW5lbENvbnRlbnRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1wYW5lbFwiXHJcbiAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IGdsb2JhbE5vdGlmaWNhdGlvbnMubGVuZ3RoID8gJ2Jsb2NrJyA6ICdub25lJ319XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2dsb2JhbE5vdGlmaWNhdGlvbnMubWFwKG4gPT4gKFxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbVxyXG4gICAgICAgICAgICAgIGtleT17bi5pZH1cclxuICAgICAgICAgICAgICBub3RpZmljYXRpb249e259XHJcbiAgICAgICAgICAgICAgcmVtb3ZlTm90aWZpY2F0aW9uPXt0aGlzLnByb3BzLnJlbW92ZU5vdGlmaWNhdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvTm90aWZpY2F0aW9uUGFuZWxDb250ZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19