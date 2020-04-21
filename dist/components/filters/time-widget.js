"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _reselect = require("reselect");

var _fieldSelector = _interopRequireDefault(require("../common/field-selector"));

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _speedControl = _interopRequireDefault(require("../common/animation-control/speed-control"));

var _timeRangeFilter = _interopRequireDefault(require("./time-range-filter"));

var _floatingTimeDisplay = _interopRequireDefault(require("../common/animation-control/floating-time-display"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 0;\n  color: ", ";\n  margin-right: 10px;\n\n  .bottom-widget__icon {\n    margin-right: 6px;\n  }\n  .bottom-widget__icon.speed {\n    margin-right: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  color: ", ";\n  height: ", ";\n\n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n\n  .bottom-widget__field-select {\n    width: 160px;\n    display: inline-block;\n\n    .item-selector__dropdown {\n      background: transparent;\n      padding: 4px 10px 4px 4px;\n      border-color: transparent;\n\n      :active,\n      :focus,\n      &.focus,\n      &.active {\n        background: transparent;\n        border-color: transparent;\n      }\n    }\n\n    .item-selector__dropdown:hover {\n      background: transparent;\n      border-color: transparent;\n\n      .item-selector__dropdown__value {\n        color: ", ";\n      }\n    }\n  }\n\n  .animation-control__speed-control {\n    margin-right: -12px;\n\n    .animation-control__speed-slider {\n      right: calc(0% - 48px);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TOP_SECTION_HEIGHT = '36px';

var TopSectionWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.labelColor;
}, TOP_SECTION_HEIGHT, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.textColorHl;
});

var StyledTitle = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject2(), function (props) {
  return props.theme.textColor;
});
TimeWidgetFactory.deps = [_speedControl["default"], _timeRangeFilter["default"], _floatingTimeDisplay["default"]];

function TimeWidgetFactory(SpeedControl, TimeRangeFilter, FloatingTimeDisplay) {
  var TimeWidget = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TimeWidget, _Component);

    var _super = _createSuper(TimeWidget);

    function TimeWidget() {
      var _this;

      (0, _classCallCheck2["default"])(this, TimeWidget);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        showSpeedControl: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldSelector", function (props) {
        return props.fields;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "yAxisFieldsSelector", (0, _reselect.createSelector)(_this.fieldSelector, function (fields) {
        return fields.filter(function (f) {
          return f.type === 'integer' || f.type === 'real';
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateAnimationSpeed", function (speed) {
        return _this.props.updateAnimationSpeed(_this.props.index, speed);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleSpeedControl", function () {
        return _this.setState({
          showSpeedControl: !_this.state.showSpeedControl
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setFilterPlotYAxis", function (value) {
        return _this.props.setFilterPlot(_this.props.index, {
          yAxis: value
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateAnimationSpeed", function (speed) {
        return _this.props.updateAnimationSpeed(_this.props.index, speed);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleAnimation", function () {
        return _this.props.toggleAnimation(_this.props.index);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClose", function () {
        return _this.props.enlargeFilter(_this.props.index);
      });
      return _this;
    }

    (0, _createClass2["default"])(TimeWidget, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            datasets = _this$props.datasets,
            filter = _this$props.filter,
            index = _this$props.index,
            readOnly = _this$props.readOnly,
            _setFilter = _this$props.setFilter,
            showTimeDisplay = _this$props.showTimeDisplay;
        var showSpeedControl = this.state.showSpeedControl;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents2.BottomWidgetInner, {
          className: "bottom-widget--inner"
        }, /*#__PURE__*/_react["default"].createElement(TopSectionWrapper, null, /*#__PURE__*/_react["default"].createElement(StyledTitle, {
          className: "bottom-widget__field"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
          className: "bottom-widget__icon"
        }, /*#__PURE__*/_react["default"].createElement(_icons.Clock, {
          height: "15px"
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectTextBold, null, filter.name)), /*#__PURE__*/_react["default"].createElement(StyledTitle, {
          className: "bottom-widget__y-axis"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
          className: "bottom-widget__icon"
        }, /*#__PURE__*/_react["default"].createElement(_icons.LineChart, {
          height: "15px"
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "bottom-widget__field-select"
        }, /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
          fields: this.yAxisFieldsSelector(datasets[filter.dataId[0]]),
          placement: "top",
          id: "selected-time-widget-field",
          value: filter.yAxis ? filter.yAxis.name : null,
          onSelect: this._setFilterPlotYAxis,
          placeholder: "Y Axis",
          erasable: true,
          showToken: false
        }))), /*#__PURE__*/_react["default"].createElement(StyledTitle, {
          className: "bottom-widget__speed"
        }, /*#__PURE__*/_react["default"].createElement(SpeedControl, {
          onClick: this._toggleSpeedControl,
          showSpeedControl: showSpeedControl,
          updateAnimationSpeed: this._updateAnimationSpeed,
          speed: filter.speed
        })), !readOnly ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.IconRoundSmall, null, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
          height: "12px",
          onClick: this._onClose
        }))) : null), /*#__PURE__*/_react["default"].createElement(TimeRangeFilter, {
          filter: filter,
          setFilter: function setFilter(value) {
            return _setFilter(index, 'value', value);
          },
          toggleAnimation: this._toggleAnimation,
          hideTimeTitle: showTimeDisplay,
          isAnimatable: true
        }), showTimeDisplay ? /*#__PURE__*/_react["default"].createElement(FloatingTimeDisplay, {
          currentTime: filter.value
        }) : null);
      }
    }]);
    return TimeWidget;
  }(_react.Component);

  return TimeWidget;
}

var _default = TimeWidgetFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvdGltZS13aWRnZXQuanMiXSwibmFtZXMiOlsiVE9QX1NFQ1RJT05fSEVJR0hUIiwiVG9wU2VjdGlvbldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwibGFiZWxDb2xvciIsImhvdmVyQ29sb3IiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZFRpdGxlIiwiQ2VudGVyRmxleGJveCIsInRleHRDb2xvciIsIlRpbWVXaWRnZXRGYWN0b3J5IiwiZGVwcyIsIlNwZWVkQ29udHJvbEZhY3RvcnkiLCJUaW1lUmFuZ2VGaWx0ZXJGYWN0b3J5IiwiRmxvYXRpbmdUaW1lRGlzcGxheUZhY3RvcnkiLCJTcGVlZENvbnRyb2wiLCJUaW1lUmFuZ2VGaWx0ZXIiLCJGbG9hdGluZ1RpbWVEaXNwbGF5IiwiVGltZVdpZGdldCIsInNob3dTcGVlZENvbnRyb2wiLCJmaWVsZHMiLCJmaWVsZFNlbGVjdG9yIiwiZmlsdGVyIiwiZiIsInR5cGUiLCJzcGVlZCIsInVwZGF0ZUFuaW1hdGlvblNwZWVkIiwiaW5kZXgiLCJzZXRTdGF0ZSIsInN0YXRlIiwidmFsdWUiLCJzZXRGaWx0ZXJQbG90IiwieUF4aXMiLCJ0b2dnbGVBbmltYXRpb24iLCJlbmxhcmdlRmlsdGVyIiwiZGF0YXNldHMiLCJyZWFkT25seSIsInNldEZpbHRlciIsInNob3dUaW1lRGlzcGxheSIsIm5hbWUiLCJ5QXhpc0ZpZWxkc1NlbGVjdG9yIiwiZGF0YUlkIiwiX3NldEZpbHRlclBsb3RZQXhpcyIsIl90b2dnbGVTcGVlZENvbnRyb2wiLCJfdXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJfb25DbG9zZSIsIl90b2dnbGVBbmltYXRpb24iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7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QkUsZ0NBQUMsV0FBRDtBQUFhLFVBQUEsU0FBUyxFQUFDO0FBQXZCLHdCQUNFLGdDQUFDLFlBQUQ7QUFDRSxVQUFBLE9BQU8sRUFBRSxLQUFLQyxtQkFEaEI7QUFFRSxVQUFBLGdCQUFnQixFQUFFeEIsZ0JBRnBCO0FBR0UsVUFBQSxvQkFBb0IsRUFBRSxLQUFLeUIscUJBSDdCO0FBSUUsVUFBQSxLQUFLLEVBQUV0QixNQUFNLENBQUNHO0FBSmhCLFVBREYsQ0F4QkYsRUFnQ0csQ0FBQ1csUUFBRCxnQkFDQyxnQ0FBQyxnQ0FBRCxxQkFDRSxnQ0FBQyxpQ0FBRCxxQkFDRSxnQ0FBQyxZQUFEO0FBQU8sVUFBQSxNQUFNLEVBQUMsTUFBZDtBQUFxQixVQUFBLE9BQU8sRUFBRSxLQUFLUztBQUFuQyxVQURGLENBREYsQ0FERCxHQU1HLElBdENOLENBREYsZUF5Q0UsZ0NBQUMsZUFBRDtBQUNFLFVBQUEsTUFBTSxFQUFFdkIsTUFEVjtBQUVFLFVBQUEsU0FBUyxFQUFFLG1CQUFBUSxLQUFLO0FBQUEsbUJBQUlPLFVBQVMsQ0FBQ1YsS0FBRCxFQUFRLE9BQVIsRUFBaUJHLEtBQWpCLENBQWI7QUFBQSxXQUZsQjtBQUdFLFVBQUEsZUFBZSxFQUFFLEtBQUtnQixnQkFIeEI7QUFJRSxVQUFBLGFBQWEsRUFBRVIsZUFKakI7QUFLRSxVQUFBLFlBQVk7QUFMZCxVQXpDRixFQWdER0EsZUFBZSxnQkFBRyxnQ0FBQyxtQkFBRDtBQUFxQixVQUFBLFdBQVcsRUFBRWhCLE1BQU0sQ0FBQ1E7QUFBekMsVUFBSCxHQUF3RCxJQWhEMUUsQ0FERjtBQW9ERDtBQS9FMEU7QUFBQTtBQUFBLElBQ3BEaUIsZ0JBRG9EOztBQWlGN0UsU0FBTzdCLFVBQVA7QUFDRDs7ZUFFY1IsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcclxuXHJcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcclxuXHJcbmltcG9ydCB7XHJcbiAgU2VsZWN0VGV4dEJvbGQsXHJcbiAgSWNvblJvdW5kU21hbGwsXHJcbiAgQ2VudGVyRmxleGJveCxcclxuICBCb3R0b21XaWRnZXRJbm5lclxyXG59IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtDbG9zZSwgQ2xvY2ssIExpbmVDaGFydH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgU3BlZWRDb250cm9sRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9hbmltYXRpb24tY29udHJvbC9zcGVlZC1jb250cm9sJztcclxuaW1wb3J0IFRpbWVSYW5nZUZpbHRlckZhY3RvcnkgZnJvbSAnY29tcG9uZW50cy9maWx0ZXJzL3RpbWUtcmFuZ2UtZmlsdGVyJztcclxuaW1wb3J0IEZsb2F0aW5nVGltZURpc3BsYXlGYWN0b3J5IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2FuaW1hdGlvbi1jb250cm9sL2Zsb2F0aW5nLXRpbWUtZGlzcGxheSc7XHJcblxyXG5jb25zdCBUT1BfU0VDVElPTl9IRUlHSFQgPSAnMzZweCc7XHJcblxyXG5jb25zdCBUb3BTZWN0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XHJcbiAgaGVpZ2h0OiAke1RPUF9TRUNUSU9OX0hFSUdIVH07XHJcblxyXG4gIC5ib3R0b20td2lkZ2V0X195LWF4aXMge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tLXdpZGdldF9fZmllbGQtc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgcGFkZGluZzogNHB4IDEwcHggNHB4IDRweDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgIDphY3RpdmUsXHJcbiAgICAgIDpmb2N1cyxcclxuICAgICAgJi5mb2N1cyxcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd246aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgIC5pdGVtLXNlbGVjdG9yX19kcm9wZG93bl9fdmFsdWUge1xyXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+XHJcbiAgICAgICAgICBwcm9wcy5ob3ZlckNvbG9yID8gcHJvcHMudGhlbWVbcHJvcHMuaG92ZXJDb2xvcl0gOiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbmltYXRpb24tY29udHJvbF9fc3BlZWQtY29udHJvbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMnB4O1xyXG5cclxuICAgIC5hbmltYXRpb24tY29udHJvbF9fc3BlZWQtc2xpZGVyIHtcclxuICAgICAgcmlnaHQ6IGNhbGMoMCUgLSA0OHB4KTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZChDZW50ZXJGbGV4Ym94KWBcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gIC5ib3R0b20td2lkZ2V0X19pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH1cclxuICAuYm90dG9tLXdpZGdldF9faWNvbi5zcGVlZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuVGltZVdpZGdldEZhY3RvcnkuZGVwcyA9IFtTcGVlZENvbnRyb2xGYWN0b3J5LCBUaW1lUmFuZ2VGaWx0ZXJGYWN0b3J5LCBGbG9hdGluZ1RpbWVEaXNwbGF5RmFjdG9yeV07XHJcblxyXG5mdW5jdGlvbiBUaW1lV2lkZ2V0RmFjdG9yeShTcGVlZENvbnRyb2wsIFRpbWVSYW5nZUZpbHRlciwgRmxvYXRpbmdUaW1lRGlzcGxheSkge1xyXG4gIGNsYXNzIFRpbWVXaWRnZXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIHNob3dTcGVlZENvbnRyb2w6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGZpZWxkU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWVsZHM7XHJcbiAgICB5QXhpc0ZpZWxkc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy5maWVsZFNlbGVjdG9yLCBmaWVsZHMgPT5cclxuICAgICAgZmllbGRzLmZpbHRlcihmID0+IGYudHlwZSA9PT0gJ2ludGVnZXInIHx8IGYudHlwZSA9PT0gJ3JlYWwnKVxyXG4gICAgKTtcclxuXHJcbiAgICBfdXBkYXRlQW5pbWF0aW9uU3BlZWQgPSBzcGVlZCA9PiB0aGlzLnByb3BzLnVwZGF0ZUFuaW1hdGlvblNwZWVkKHRoaXMucHJvcHMuaW5kZXgsIHNwZWVkKTtcclxuXHJcbiAgICBfdG9nZ2xlU3BlZWRDb250cm9sID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1NwZWVkQ29udHJvbDogIXRoaXMuc3RhdGUuc2hvd1NwZWVkQ29udHJvbH0pO1xyXG5cclxuICAgIF9zZXRGaWx0ZXJQbG90WUF4aXMgPSB2YWx1ZSA9PiB0aGlzLnByb3BzLnNldEZpbHRlclBsb3QodGhpcy5wcm9wcy5pbmRleCwge3lBeGlzOiB2YWx1ZX0pO1xyXG5cclxuICAgIF91cGRhdGVBbmltYXRpb25TcGVlZCA9IHNwZWVkID0+IHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uU3BlZWQodGhpcy5wcm9wcy5pbmRleCwgc3BlZWQpO1xyXG5cclxuICAgIF90b2dnbGVBbmltYXRpb24gPSAoKSA9PiB0aGlzLnByb3BzLnRvZ2dsZUFuaW1hdGlvbih0aGlzLnByb3BzLmluZGV4KTtcclxuXHJcbiAgICBfb25DbG9zZSA9ICgpID0+IHRoaXMucHJvcHMuZW5sYXJnZUZpbHRlcih0aGlzLnByb3BzLmluZGV4KTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHtkYXRhc2V0cywgZmlsdGVyLCBpbmRleCwgcmVhZE9ubHksIHNldEZpbHRlciwgc2hvd1RpbWVEaXNwbGF5fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICBjb25zdCB7c2hvd1NwZWVkQ29udHJvbH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3R0b21XaWRnZXRJbm5lciBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0LS1pbm5lclwiPlxyXG4gICAgICAgICAgPFRvcFNlY3Rpb25XcmFwcGVyPlxyXG4gICAgICAgICAgICA8U3R5bGVkVGl0bGUgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fZmllbGRcIj5cclxuICAgICAgICAgICAgICA8Q2VudGVyRmxleGJveCBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2xvY2sgaGVpZ2h0PVwiMTVweFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9DZW50ZXJGbGV4Ym94PlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RUZXh0Qm9sZD57ZmlsdGVyLm5hbWV9PC9TZWxlY3RUZXh0Qm9sZD5cclxuICAgICAgICAgICAgPC9TdHlsZWRUaXRsZT5cclxuICAgICAgICAgICAgPFN0eWxlZFRpdGxlIGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX3ktYXhpc1wiPlxyXG4gICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgaGVpZ2h0PVwiMTVweFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9DZW50ZXJGbGV4Ym94PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fZmllbGQtc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICBmaWVsZHM9e3RoaXMueUF4aXNGaWVsZHNTZWxlY3RvcihkYXRhc2V0c1tmaWx0ZXIuZGF0YUlkWzBdXSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic2VsZWN0ZWQtdGltZS13aWRnZXQtZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyLnlBeGlzID8gZmlsdGVyLnlBeGlzLm5hbWUgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5fc2V0RmlsdGVyUGxvdFlBeGlzfVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlkgQXhpc1wiXHJcbiAgICAgICAgICAgICAgICAgIGVyYXNhYmxlXHJcbiAgICAgICAgICAgICAgICAgIHNob3dUb2tlbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRpdGxlPlxyXG4gICAgICAgICAgICA8U3R5bGVkVGl0bGUgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fc3BlZWRcIj5cclxuICAgICAgICAgICAgICA8U3BlZWRDb250cm9sXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl90b2dnbGVTcGVlZENvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICBzaG93U3BlZWRDb250cm9sPXtzaG93U3BlZWRDb250cm9sfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlQW5pbWF0aW9uU3BlZWQ9e3RoaXMuX3VwZGF0ZUFuaW1hdGlvblNwZWVkfVxyXG4gICAgICAgICAgICAgICAgc3BlZWQ9e2ZpbHRlci5zcGVlZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1N0eWxlZFRpdGxlPlxyXG4gICAgICAgICAgICB7IXJlYWRPbmx5ID8gKFxyXG4gICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94PlxyXG4gICAgICAgICAgICAgICAgPEljb25Sb3VuZFNtYWxsPlxyXG4gICAgICAgICAgICAgICAgICA8Q2xvc2UgaGVpZ2h0PVwiMTJweFwiIG9uQ2xpY2s9e3RoaXMuX29uQ2xvc2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25Sb3VuZFNtYWxsPlxyXG4gICAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L1RvcFNlY3Rpb25XcmFwcGVyPlxyXG4gICAgICAgICAgPFRpbWVSYW5nZUZpbHRlclxyXG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cclxuICAgICAgICAgICAgc2V0RmlsdGVyPXt2YWx1ZSA9PiBzZXRGaWx0ZXIoaW5kZXgsICd2YWx1ZScsIHZhbHVlKX1cclxuICAgICAgICAgICAgdG9nZ2xlQW5pbWF0aW9uPXt0aGlzLl90b2dnbGVBbmltYXRpb259XHJcbiAgICAgICAgICAgIGhpZGVUaW1lVGl0bGU9e3Nob3dUaW1lRGlzcGxheX1cclxuICAgICAgICAgICAgaXNBbmltYXRhYmxlXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3Nob3dUaW1lRGlzcGxheSA/IDxGbG9hdGluZ1RpbWVEaXNwbGF5IGN1cnJlbnRUaW1lPXtmaWx0ZXIudmFsdWV9IC8+IDogbnVsbH1cclxuICAgICAgICA8L0JvdHRvbVdpZGdldElubmVyPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gVGltZVdpZGdldDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZVdpZGdldEZhY3Rvcnk7XHJcbiJdfQ==