"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FloatingTimeDisplayFactory;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _reselect = require("reselect");

var _icons = require("../icons");

var _defaultSettings = require("../../../constants/default-settings");

var _styledComponents2 = require("../styled-components");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0 12px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 500;\n  justify-content: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  font-size: 12px;\n  font-weight: 500;\n  justify-content: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-radius: ", "px;\n  bottom: ", ";\n  color: ", ";\n  display: flex;\n  height: ", "px;\n  justify-content: center;\n  left: calc(50% - 88px);\n  min-width: ", "px;\n  opacity: ", ";\n  padding: ", ";\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledTimeDisplay = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.timeDisplayBorderRadius;
}, function (props) {
  return "calc(100% + ".concat(props.theme.bottomPanelGap, "px)");
}, function (props) {
  return props.theme.titleTextColor;
}, function (props) {
  return props.theme.timeDisplayHeight;
}, function (props) {
  return props.theme.timeDisplayMinWidth;
}, function (props) {
  return props.theme.timeDisplayOpacity;
}, function (props) {
  return props.theme.timeDisplayPadding;
});

var StyledTimeDisplayGroups = _styledComponents["default"].div(_templateObject2());

var StyledTimeDisplayRows = _styledComponents["default"].div(_templateObject3());

var StyledTimeDisplayTop = _styledComponents["default"].div.attrs({
  className: 'animation-control__time-display__top'
})(_templateObject4(), function (props) {
  return props.theme.textColor;
});

var StyledTimeDisplayBottom = _styledComponents["default"].div.attrs({
  className: 'animation-control__time-display__bottom'
})(_templateObject5(), function (props) {
  return props.theme.titleTextColor;
});

var StyledTimeValueGroup = _styledComponents["default"].div.attrs({
  className: 'animation-control__time-value-group'
})(_templateObject6());

var StyledHorizontalBar = _styledComponents["default"].div.attrs({
  className: 'animation-control__horizontal-bar'
})(_templateObject7());

var TimeDivider = function TimeDivider() {
  return /*#__PURE__*/_react["default"].createElement(StyledHorizontalBar, null, /*#__PURE__*/_react["default"].createElement(_icons.Minus, {
    height: "12px"
  }));
};

var TimeDisplayRow = function TimeDisplayRow(_ref) {
  var _ref$timeValues = _ref.timeValues,
      timeValues = _ref$timeValues === void 0 ? [] : _ref$timeValues;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, null, /*#__PURE__*/_react["default"].createElement("div", null, timeValues[0]), timeValues[1] ? /*#__PURE__*/_react["default"].createElement(TimeDivider, null) : null, timeValues[1] ? /*#__PURE__*/_react["default"].createElement("div", null, timeValues[1]) : null);
};

function FloatingTimeDisplayFactory() {
  var FloatingTimeDisplay = /*#__PURE__*/function (_PureComponent) {
    (0, _inherits2["default"])(FloatingTimeDisplay, _PureComponent);

    var _super = _createSuper(FloatingTimeDisplay);

    function FloatingTimeDisplay() {
      var _this;

      (0, _classCallCheck2["default"])(this, FloatingTimeDisplay);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "timeSelector", function (props) {
        return props.currentTime;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "formatSelector", function (props) {
        return props.format;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "displayTimeSelector", (0, _reselect.createSelector)(_this.timeSelector, _this.formatSelector, function (currentTime, format) {
        var groupTime = Array.isArray(currentTime) ? currentTime : [currentTime];
        return groupTime.reduce(function (accu, curr) {
          var displayDateTime = _moment["default"].utc(curr).format(format);

          var _displayDateTime$spli = displayDateTime.split(' '),
              _displayDateTime$spli2 = (0, _slicedToArray2["default"])(_displayDateTime$spli, 2),
              displayDate = _displayDateTime$spli2[0],
              displayTime = _displayDateTime$spli2[1];

          if (!accu.displayDate.includes(displayDate)) {
            accu.displayDate.push(displayDate);
          }

          accu.displayTime.push(displayTime);
          return accu;
        }, {
          displayDate: [],
          displayTime: []
        });
      }));
      return _this;
    }

    (0, _createClass2["default"])(FloatingTimeDisplay, [{
      key: "render",
      value: function render() {
        var _this$displayTimeSele = this.displayTimeSelector(this.props),
            displayDate = _this$displayTimeSele.displayDate,
            displayTime = _this$displayTimeSele.displayTime;

        var twoGroups = displayDate.length === 2 && displayTime.length === 2;
        var bottomRow = displayTime.length ? displayTime : displayDate.length ? displayDate : null;
        var topRow = displayDate.length && displayTime.length ? displayDate : null;
        return /*#__PURE__*/_react["default"].createElement(StyledTimeDisplay, {
          className: "animation-control__time-display"
        }, twoGroups ? /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayGroups, null, /*#__PURE__*/_react["default"].createElement(StyledTimeValueGroup, null, /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayTop, null, displayDate[0]), /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayBottom, null, displayTime[0])), /*#__PURE__*/_react["default"].createElement(TimeDivider, null), /*#__PURE__*/_react["default"].createElement(StyledTimeValueGroup, null, /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayTop, null, displayDate[1]), /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayBottom, null, displayTime[1]))) : /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayRows, null, topRow ? /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayTop, null, /*#__PURE__*/_react["default"].createElement(TimeDisplayRow, {
          timeValues: topRow
        })) : null, bottomRow ? /*#__PURE__*/_react["default"].createElement(StyledTimeDisplayBottom, null, /*#__PURE__*/_react["default"].createElement(TimeDisplayRow, {
          timeValues: bottomRow
        })) : null));
      }
    }]);
    return FloatingTimeDisplay;
  }(_react.PureComponent);

  FloatingTimeDisplay.defaultProps = {
    format: _defaultSettings.DEFAULT_TIME_FORMAT,
    currentTime: null
  };
  return FloatingTimeDisplay;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9mbG9hdGluZy10aW1lLWRpc3BsYXkuanMiXSwibmFtZXMiOlsiU3R5bGVkVGltZURpc3BsYXkiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwicGFuZWxCYWNrZ3JvdW5kIiwidGltZURpc3BsYXlCb3JkZXJSYWRpdXMiLCJib3R0b21QYW5lbEdhcCIsInRpdGxlVGV4dENvbG9yIiwidGltZURpc3BsYXlIZWlnaHQiLCJ0aW1lRGlzcGxheU1pbldpZHRoIiwidGltZURpc3BsYXlPcGFjaXR5IiwidGltZURpc3BsYXlQYWRkaW5nIiwiU3R5bGVkVGltZURpc3BsYXlHcm91cHMiLCJTdHlsZWRUaW1lRGlzcGxheVJvd3MiLCJTdHlsZWRUaW1lRGlzcGxheVRvcCIsImF0dHJzIiwiY2xhc3NOYW1lIiwidGV4dENvbG9yIiwiU3R5bGVkVGltZURpc3BsYXlCb3R0b20iLCJTdHlsZWRUaW1lVmFsdWVHcm91cCIsIlN0eWxlZEhvcml6b250YWxCYXIiLCJUaW1lRGl2aWRlciIsIlRpbWVEaXNwbGF5Um93IiwidGltZVZhbHVlcyIsIkZsb2F0aW5nVGltZURpc3BsYXlGYWN0b3J5IiwiRmxvYXRpbmdUaW1lRGlzcGxheSIsImN1cnJlbnRUaW1lIiwiZm9ybWF0IiwidGltZVNlbGVjdG9yIiwiZm9ybWF0U2VsZWN0b3IiLCJncm91cFRpbWUiLCJBcnJheSIsImlzQXJyYXkiLCJyZWR1Y2UiLCJhY2N1IiwiY3VyciIsImRpc3BsYXlEYXRlVGltZSIsIm1vbWVudCIsInV0YyIsInNwbGl0IiwiZGlzcGxheURhdGUiLCJkaXNwbGF5VGltZSIsImluY2x1ZGVzIiwicHVzaCIsImRpc3BsYXlUaW1lU2VsZWN0b3IiLCJ0d29Hcm91cHMiLCJsZW5ndGgiLCJib3R0b21Sb3ciLCJ0b3BSb3ciLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiREVGQVVMVF9USU1F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cUJBQ0UsZ0NBQUMsY0FBRDtBQUFnQixVQUFBLFVBQVUsRUFBRUE7QUFBNUIsVUFERixDQURRLEdBSU4sSUFWTixDQWhCSixDQURGO0FBZ0NEO0FBaEVnRDtBQUFBO0FBQUEsSUFDakJFLG9CQURpQjs7QUFtRW5EeEIsRUFBQUEsbUJBQW1CLENBQUN5QixZQUFwQixHQUFtQztBQUNqQ3ZCLElBQUFBLE1BQU0sRUFBRXdCLG9DQUR5QjtBQUVqQ3pCLElBQUFBLFdBQVcsRUFBRTtBQUZvQixHQUFuQztBQUtBLFNBQU9ELG1CQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtQdXJlQ29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuaW1wb3J0IHtNaW51c30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQge0RFRkFVTFRfVElNRV9GT1JNQVR9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcclxuaW1wb3J0IHtDZW50ZXJGbGV4Ym94fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBTdHlsZWRUaW1lRGlzcGxheSA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xyXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGltZURpc3BsYXlCb3JkZXJSYWRpdXN9cHg7XHJcbiAgYm90dG9tOiAke3Byb3BzID0+IGBjYWxjKDEwMCUgKyAke3Byb3BzLnRoZW1lLmJvdHRvbVBhbmVsR2FwfXB4KWB9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aW1lRGlzcGxheUhlaWdodH1weDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDg4cHgpO1xyXG4gIG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aW1lRGlzcGxheU1pbldpZHRofXB4O1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGltZURpc3BsYXlPcGFjaXR5fTtcclxuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpbWVEaXNwbGF5UGFkZGluZ307XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVGltZURpc3BsYXlHcm91cHMgPSBzdHlsZWQuZGl2YFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVGltZURpc3BsYXlSb3dzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRUaW1lRGlzcGxheVRvcCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ2FuaW1hdGlvbi1jb250cm9sX190aW1lLWRpc3BsYXlfX3RvcCdcclxufSlgXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVGltZURpc3BsYXlCb3R0b20gPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdhbmltYXRpb24tY29udHJvbF9fdGltZS1kaXNwbGF5X19ib3R0b20nXHJcbn0pYFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkVGltZVZhbHVlR3JvdXAgPSBzdHlsZWQuZGl2LmF0dHJzKHtcclxuICBjbGFzc05hbWU6ICdhbmltYXRpb24tY29udHJvbF9fdGltZS12YWx1ZS1ncm91cCdcclxufSlgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkSG9yaXpvbnRhbEJhciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xyXG4gIGNsYXNzTmFtZTogJ2FuaW1hdGlvbi1jb250cm9sX19ob3Jpem9udGFsLWJhcidcclxufSlgXHJcbiAgbWFyZ2luOiAwIDEycHg7XHJcbmA7XHJcblxyXG5jb25zdCBUaW1lRGl2aWRlciA9ICgpID0+IChcclxuICA8U3R5bGVkSG9yaXpvbnRhbEJhcj5cclxuICAgIDxNaW51cyBoZWlnaHQ9XCIxMnB4XCIgLz5cclxuICA8L1N0eWxlZEhvcml6b250YWxCYXI+XHJcbik7XHJcblxyXG5jb25zdCBUaW1lRGlzcGxheVJvdyA9ICh7dGltZVZhbHVlcyA9IFtdfSkgPT4gKFxyXG4gIDxDZW50ZXJGbGV4Ym94PlxyXG4gICAgPGRpdj57dGltZVZhbHVlc1swXX08L2Rpdj5cclxuICAgIHt0aW1lVmFsdWVzWzFdID8gPFRpbWVEaXZpZGVyIC8+IDogbnVsbH1cclxuICAgIHt0aW1lVmFsdWVzWzFdID8gPGRpdj57dGltZVZhbHVlc1sxXX08L2Rpdj4gOiBudWxsfVxyXG4gIDwvQ2VudGVyRmxleGJveD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsb2F0aW5nVGltZURpc3BsYXlGYWN0b3J5KCkge1xyXG4gIGNsYXNzIEZsb2F0aW5nVGltZURpc3BsYXkgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcclxuICAgIHRpbWVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmN1cnJlbnRUaW1lO1xyXG4gICAgZm9ybWF0U2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5mb3JtYXQ7XHJcbiAgICBkaXNwbGF5VGltZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXHJcbiAgICAgIHRoaXMudGltZVNlbGVjdG9yLFxyXG4gICAgICB0aGlzLmZvcm1hdFNlbGVjdG9yLFxyXG4gICAgICAoY3VycmVudFRpbWUsIGZvcm1hdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdyb3VwVGltZSA9IEFycmF5LmlzQXJyYXkoY3VycmVudFRpbWUpID8gY3VycmVudFRpbWUgOiBbY3VycmVudFRpbWVdO1xyXG4gICAgICAgIHJldHVybiBncm91cFRpbWUucmVkdWNlKFxyXG4gICAgICAgICAgKGFjY3UsIGN1cnIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGlzcGxheURhdGVUaW1lID0gbW9tZW50LnV0YyhjdXJyKS5mb3JtYXQoZm9ybWF0KTtcclxuICAgICAgICAgICAgY29uc3QgW2Rpc3BsYXlEYXRlLCBkaXNwbGF5VGltZV0gPSBkaXNwbGF5RGF0ZVRpbWUuc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYWNjdS5kaXNwbGF5RGF0ZS5pbmNsdWRlcyhkaXNwbGF5RGF0ZSkpIHtcclxuICAgICAgICAgICAgICBhY2N1LmRpc3BsYXlEYXRlLnB1c2goZGlzcGxheURhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFjY3UuZGlzcGxheVRpbWUucHVzaChkaXNwbGF5VGltZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWNjdTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7ZGlzcGxheURhdGU6IFtdLCBkaXNwbGF5VGltZTogW119XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtkaXNwbGF5RGF0ZSwgZGlzcGxheVRpbWV9ID0gdGhpcy5kaXNwbGF5VGltZVNlbGVjdG9yKHRoaXMucHJvcHMpO1xyXG4gICAgICBjb25zdCB0d29Hcm91cHMgPSBkaXNwbGF5RGF0ZS5sZW5ndGggPT09IDIgJiYgZGlzcGxheVRpbWUubGVuZ3RoID09PSAyO1xyXG4gICAgICBjb25zdCBib3R0b21Sb3cgPSBkaXNwbGF5VGltZS5sZW5ndGggPyBkaXNwbGF5VGltZSA6IGRpc3BsYXlEYXRlLmxlbmd0aCA/IGRpc3BsYXlEYXRlIDogbnVsbDtcclxuICAgICAgY29uc3QgdG9wUm93ID0gZGlzcGxheURhdGUubGVuZ3RoICYmIGRpc3BsYXlUaW1lLmxlbmd0aCA/IGRpc3BsYXlEYXRlIDogbnVsbDtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZFRpbWVEaXNwbGF5IGNsYXNzTmFtZT1cImFuaW1hdGlvbi1jb250cm9sX190aW1lLWRpc3BsYXlcIj5cclxuICAgICAgICAgIHt0d29Hcm91cHMgPyAoXHJcbiAgICAgICAgICAgIDxTdHlsZWRUaW1lRGlzcGxheUdyb3Vwcz5cclxuICAgICAgICAgICAgICA8U3R5bGVkVGltZVZhbHVlR3JvdXA+XHJcbiAgICAgICAgICAgICAgICB7LyogVGltZSBTdGFydCAqL31cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRUaW1lRGlzcGxheVRvcD57ZGlzcGxheURhdGVbMF19PC9TdHlsZWRUaW1lRGlzcGxheVRvcD5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRUaW1lRGlzcGxheUJvdHRvbT57ZGlzcGxheVRpbWVbMF19PC9TdHlsZWRUaW1lRGlzcGxheUJvdHRvbT5cclxuICAgICAgICAgICAgICA8L1N0eWxlZFRpbWVWYWx1ZUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxUaW1lRGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRUaW1lVmFsdWVHcm91cD5cclxuICAgICAgICAgICAgICAgIHsvKiBUaW1lIEVuZCAqL31cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRUaW1lRGlzcGxheVRvcD57ZGlzcGxheURhdGVbMV19PC9TdHlsZWRUaW1lRGlzcGxheVRvcD5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRUaW1lRGlzcGxheUJvdHRvbT57ZGlzcGxheVRpbWVbMV19PC9TdHlsZWRUaW1lRGlzcGxheUJvdHRvbT5cclxuICAgICAgICAgICAgICA8L1N0eWxlZFRpbWVWYWx1ZUdyb3VwPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRpbWVEaXNwbGF5R3JvdXBzPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFN0eWxlZFRpbWVEaXNwbGF5Um93cz5cclxuICAgICAgICAgICAgICB7dG9wUm93ID8gKFxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRpbWVEaXNwbGF5VG9wPlxyXG4gICAgICAgICAgICAgICAgICA8VGltZURpc3BsYXlSb3cgdGltZVZhbHVlcz17dG9wUm93fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUaW1lRGlzcGxheVRvcD5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICB7Ym90dG9tUm93ID8gKFxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFRpbWVEaXNwbGF5Qm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICA8VGltZURpc3BsYXlSb3cgdGltZVZhbHVlcz17Ym90dG9tUm93fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUaW1lRGlzcGxheUJvdHRvbT5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9TdHlsZWRUaW1lRGlzcGxheVJvd3M+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU3R5bGVkVGltZURpc3BsYXk+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBGbG9hdGluZ1RpbWVEaXNwbGF5LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGZvcm1hdDogREVGQVVMVF9USU1FX0ZPUk1BVCxcclxuICAgIGN1cnJlbnRUaW1lOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIEZsb2F0aW5nVGltZURpc3BsYXk7XHJcbn1cclxuIl19