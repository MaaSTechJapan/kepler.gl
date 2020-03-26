"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Scale = require("d3-scale");

var _moment = _interopRequireDefault(require("moment"));

var _d3Array = require("d3-array");

var _reselect = require("reselect");

var _reactVis = require("react-vis");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _rangeBrush = _interopRequireDefault(require("./range-brush"));

var _filterUtils = require("../../utils/filter-utils");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #d3d8e0;\n  border-radius: 2px;\n  color: ", ";\n  font-size: 9px;\n  margin: 4px;\n  padding: 3px 6px;\n  pointer-events: none;\n  user-select: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .histogram-bars {\n    rect {\n      fill: ", ";\n    }\n    rect.in-range {\n      fill: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .rv-xy-plot__inner path {\n    fill: none;\n    stroke-width: 1.5;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var chartMargin = {
  top: 8,
  bottom: 0,
  left: 0,
  right: 0
};
var chartH = 52;
var containerH = 68;
var histogramStyle = {
  highlightW: 0.7,
  unHighlightedW: 0.4
};

var RangePlot = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RangePlot, _Component);

  var _super = _createSuper(RangePlot);

  function RangePlot() {
    var _this;

    (0, _classCallCheck2["default"])(this, RangePlot);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      hoveredDP: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "domainSelector", function (props) {
      return props.lineChart && props.lineChart.xDomain;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hintFormatter", (0, _reselect.createSelector)(_this.domainSelector, function (domain) {
      return (0, _filterUtils.getTimeWidgetHintFormatter)(domain);
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMouseMove", function (hoveredDP) {
      _this.setState({
        hoveredDP: hoveredDP
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(RangePlot, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onBrush = _this$props.onBrush,
          range = _this$props.range,
          value = _this$props.value,
          width = _this$props.width,
          plotType = _this$props.plotType,
          lineChart = _this$props.lineChart,
          histogram = _this$props.histogram;
      var domain = [histogram[0].x0, histogram[histogram.length - 1].x1];

      var brushComponent = /*#__PURE__*/_react["default"].createElement(_rangeBrush["default"], {
        domain: domain,
        onBrush: onBrush,
        range: range,
        value: value,
        width: width
      });

      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          height: "".concat(containerH, "px"),
          position: 'relative'
        }
      }, plotType === 'lineChart' ? /*#__PURE__*/_react["default"].createElement(LineChart, {
        hoveredDP: this.state.hoveredDP,
        width: width,
        height: containerH,
        margin: chartMargin,
        children: brushComponent,
        onMouseMove: this.onMouseMove,
        yDomain: lineChart.yDomain,
        hintFormat: this.hintFormatter(this.props),
        data: lineChart.series
      }) : /*#__PURE__*/_react["default"].createElement(Histogram, {
        width: width,
        height: chartH,
        value: value,
        margin: chartMargin,
        histogram: histogram,
        brushComponent: brushComponent
      }));
    }
  }]);
  return RangePlot;
}(_react.Component);

exports["default"] = RangePlot;
(0, _defineProperty2["default"])(RangePlot, "propTypes", {
  value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  histogram: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    x0: _propTypes["default"].number,
    x1: _propTypes["default"].number
  })),
  lineChart: _propTypes["default"].object,
  plotType: _propTypes["default"].string,
  isEnlarged: _propTypes["default"].bool,
  onBlur: _propTypes["default"].func,
  width: _propTypes["default"].number.isRequired
});

var Histogram = function Histogram(_ref) {
  var width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      histogram = _ref.histogram,
      value = _ref.value,
      brushComponent = _ref.brushComponent;
  var domain = [histogram[0].x0, histogram[histogram.length - 1].x1];
  var barWidth = width / histogram.length;
  var x = (0, _d3Scale.scaleLinear)().domain(domain).range([0, width]);
  var y = (0, _d3Scale.scaleLinear)().domain([0, (0, _d3Array.max)(histogram, function (d) {
    return d.count;
  })]).range([0, height]);
  return /*#__PURE__*/_react["default"].createElement(HistogramWrapper, {
    width: width,
    height: height,
    style: {
      marginTop: "".concat(margin.top, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement("g", {
    className: "histogram-bars"
  }, histogram.map(function (bar) {
    var inRange = bar.x0 >= value[0] && bar.x1 <= value[1];
    var wRatio = inRange ? histogramStyle.highlightW : histogramStyle.unHighlightedW;
    return /*#__PURE__*/_react["default"].createElement("rect", {
      className: (0, _classnames["default"])({
        'in-range': inRange
      }),
      key: bar.x0,
      height: y(bar.count),
      width: barWidth * wRatio,
      x: x(bar.x0) + barWidth * (1 - wRatio) / 2,
      rx: 1,
      ry: 1,
      y: height - y(bar.count)
    });
  })), brushComponent);
};

var LineChartWrapper = _styledComponents["default"].div(_templateObject());

var HistogramWrapper = _styledComponents["default"].svg(_templateObject2(), function (props) {
  return props.theme.histogramFillOutRange;
}, function (props) {
  return props.theme.histogramFillInRange;
});

var LineChart = function LineChart(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      yDomain = _ref2.yDomain,
      hintFormat = _ref2.hintFormat,
      hoveredDP = _ref2.hoveredDP,
      margin = _ref2.margin,
      color = _ref2.color,
      data = _ref2.data,
      onMouseMove = _ref2.onMouseMove,
      children = _ref2.children;
  var brushData = [{
    x: data[0].x,
    y: yDomain[1],
    customComponent: function customComponent() {
      return children;
    }
  }];
  return /*#__PURE__*/_react["default"].createElement(LineChartWrapper, null, /*#__PURE__*/_react["default"].createElement(_reactVis.XYPlot, {
    width: width,
    height: height,
    margin: _objectSpread({}, margin, {
      bottom: 12
    })
  }, /*#__PURE__*/_react["default"].createElement(_reactVis.LineSeries, {
    strokeWidth: 2,
    color: color,
    data: data,
    onNearestX: onMouseMove
  }), /*#__PURE__*/_react["default"].createElement(_reactVis.MarkSeries, {
    data: hoveredDP ? [hoveredDP] : [],
    color: color,
    size: 3
  }), /*#__PURE__*/_react["default"].createElement(_reactVis.CustomSVGSeries, {
    data: brushData
  }), hoveredDP ? /*#__PURE__*/_react["default"].createElement(_reactVis.Hint, {
    value: hoveredDP
  }, /*#__PURE__*/_react["default"].createElement(HintContent, (0, _extends2["default"])({}, hoveredDP, {
    format: function format(val) {
      return _moment["default"].utc(val).format(hintFormat);
    }
  }))) : null));
};

var StyledHint = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.textColorLT;
});

var HintContent = function HintContent(_ref3) {
  var x = _ref3.x,
      y = _ref3.y,
      format = _ref3.format;
  return /*#__PURE__*/_react["default"].createElement(StyledHint, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hint--x"
  }, format(x)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, y));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1wbG90LmpzIl0sIm5hbWVzIjpbImNoYXJ0TWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiY2hhcnRIIiwiY29udGFpbmVySCIsImhpc3RvZ3JhbVN0eWxlIiwiaGlnaGxpZ2h0VyIsInVuSGlnaGxpZ2h0ZWRXIiwiUmFuZ2VQbG90IiwiaG92ZXJlZERQIiwicHJvcHMiLCJsaW5lQ2hhcnQiLCJ4RG9tYWluIiwiZG9tYWluU2VsZWN0b3IiLCJkb21haW4iLCJzZXRTdGF0ZSIsIm9uQnJ1c2giLCJyYW5nZSIsInZhbHVlIiwid2lkdGgiLCJwbG90VHlwZSIsImhpc3RvZ3JhbSIsIngwIiwibGVuZ3RoIiwieDEiLCJicnVzaENvbXBvbmVudCIsImhlaWdodCIsInBvc2l0aW9uIiwic3RhdGUiLCJvbk1vdXNlTW92ZSIsInlEb21haW4iLCJoaW50Rm9ybWF0dGVyIiwic2VyaWVzIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzaGFwZSIsIm9iamVjdCIsInN0cmluZyIsImlzRW5sYXJnZWQiLCJib29sIiwib25CbHVyIiwiZnVuYyIsIkhpc3RvZ3JhbSIsIm1hcmdpbiIsImJhcldpZHRoIiwieCIsInkiLCJkIiwiY291bnQiLCJtYXJnaW5Ub3AiLCJtYXAiLCJiYXIiLCJpblJhbmdlIiwid1JhdGlvIiwiTGluZUNoYXJ0V3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkhpc3RvZ3JhbVdyYXBwZXIiLCJzdmciLCJ0aGVtZSIsImhpc3RvZ3JhbUZpbGxPdXRSYW5nZSIsImhpc3RvZ3JhbUZpbGxJblJhbmdlIiwiTGluZUNoYXJ0IiwiaGludEZvcm1hdCIsImNvbG9yIiwiZGF0YSIsImNoaWxkcmVuIiwiYnJ1c2hEYXRhIiwiY3VzdG9tQ29tcG9uZW50IiwidmFsIiwibW9tZW50IiwidXRjIiwiZm9ybWF0IiwiU3R5bGVk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QyxLQURGLENBRFEsR0FJTixJQVJOLENBREYsQ0FERjtBQWNELENBNUJEOztBQThCQSxJQUFNVSxVQUFVLEdBQUdsQiw2QkFBT0MsR0FBVixxQkFHTCxVQUFBakQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ29ELEtBQU4sQ0FBWWUsV0FBaEI7QUFBQSxDQUhBLENBQWhCOztBQVVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBRTlCLENBQUYsU0FBRUEsQ0FBRjtBQUFBLE1BQUtDLENBQUwsU0FBS0EsQ0FBTDtBQUFBLE1BQVEwQixNQUFSLFNBQVFBLE1BQVI7QUFBQSxzQkFDbEIsZ0NBQUMsVUFBRCxxQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBMEJBLE1BQU0sQ0FBQzNCLENBQUQsQ0FBaEMsQ0FERixlQUVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUFzQkMsQ0FBdEIsQ0FGRixDQURrQjtBQUFBLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtzY2FsZUxpbmVhcn0gZnJvbSAnZDMtc2NhbGUnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHttYXh9IGZyb20gJ2QzLWFycmF5JztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7TGluZVNlcmllcywgWFlQbG90LCBDdXN0b21TVkdTZXJpZXMsIEhpbnQsIE1hcmtTZXJpZXN9IGZyb20gJ3JlYWN0LXZpcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgUmFuZ2VCcnVzaCBmcm9tICcuL3JhbmdlLWJydXNoJztcbmltcG9ydCB7Z2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXJ9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5cbmNvbnN0IGNoYXJ0TWFyZ2luID0ge3RvcDogOCwgYm90dG9tOiAwLCBsZWZ0OiAwLCByaWdodDogMH07XG5jb25zdCBjaGFydEggPSA1MjtcbmNvbnN0IGNvbnRhaW5lckggPSA2ODtcbmNvbnN0IGhpc3RvZ3JhbVN0eWxlID0ge1xuICBoaWdobGlnaHRXOiAwLjcsXG4gIHVuSGlnaGxpZ2h0ZWRXOiAwLjRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlUGxvdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdmFsdWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gICAgaGlzdG9ncmFtOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHgwOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICB4MTogUHJvcFR5cGVzLm51bWJlclxuICAgICAgfSlcbiAgICApLFxuICAgIGxpbmVDaGFydDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwbG90VHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpc0VubGFyZ2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBob3ZlcmVkRFA6IG51bGxcbiAgfTtcblxuICBkb21haW5TZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmxpbmVDaGFydCAmJiBwcm9wcy5saW5lQ2hhcnQueERvbWFpbjtcbiAgaGludEZvcm1hdHRlciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZG9tYWluU2VsZWN0b3IsIGRvbWFpbiA9PiBnZXRUaW1lV2lkZ2V0SGludEZvcm1hdHRlcihkb21haW4pKTtcblxuICBvbk1vdXNlTW92ZSA9IGhvdmVyZWREUCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXJlZERQfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtvbkJydXNoLCByYW5nZSwgdmFsdWUsIHdpZHRoLCBwbG90VHlwZSwgbGluZUNoYXJ0LCBoaXN0b2dyYW19ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkb21haW4gPSBbaGlzdG9ncmFtWzBdLngwLCBoaXN0b2dyYW1baGlzdG9ncmFtLmxlbmd0aCAtIDFdLngxXTtcblxuICAgIGNvbnN0IGJydXNoQ29tcG9uZW50ID0gKFxuICAgICAgPFJhbmdlQnJ1c2ggZG9tYWluPXtkb21haW59IG9uQnJ1c2g9e29uQnJ1c2h9IHJhbmdlPXtyYW5nZX0gdmFsdWU9e3ZhbHVlfSB3aWR0aD17d2lkdGh9IC8+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgaGVpZ2h0OiBgJHtjb250YWluZXJIfXB4YCxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cGxvdFR5cGUgPT09ICdsaW5lQ2hhcnQnID8gKFxuICAgICAgICAgIDxMaW5lQ2hhcnRcbiAgICAgICAgICAgIGhvdmVyZWREUD17dGhpcy5zdGF0ZS5ob3ZlcmVkRFB9XG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e2NvbnRhaW5lckh9XG4gICAgICAgICAgICBtYXJnaW49e2NoYXJ0TWFyZ2lufVxuICAgICAgICAgICAgY2hpbGRyZW49e2JydXNoQ29tcG9uZW50fVxuICAgICAgICAgICAgb25Nb3VzZU1vdmU9e3RoaXMub25Nb3VzZU1vdmV9XG4gICAgICAgICAgICB5RG9tYWluPXtsaW5lQ2hhcnQueURvbWFpbn1cbiAgICAgICAgICAgIGhpbnRGb3JtYXQ9e3RoaXMuaGludEZvcm1hdHRlcih0aGlzLnByb3BzKX1cbiAgICAgICAgICAgIGRhdGE9e2xpbmVDaGFydC5zZXJpZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8SGlzdG9ncmFtXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e2NoYXJ0SH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG1hcmdpbj17Y2hhcnRNYXJnaW59XG4gICAgICAgICAgICBoaXN0b2dyYW09e2hpc3RvZ3JhbX1cbiAgICAgICAgICAgIGJydXNoQ29tcG9uZW50PXticnVzaENvbXBvbmVudH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBIaXN0b2dyYW0gPSAoe3dpZHRoLCBoZWlnaHQsIG1hcmdpbiwgaGlzdG9ncmFtLCB2YWx1ZSwgYnJ1c2hDb21wb25lbnR9KSA9PiB7XG4gIGNvbnN0IGRvbWFpbiA9IFtoaXN0b2dyYW1bMF0ueDAsIGhpc3RvZ3JhbVtoaXN0b2dyYW0ubGVuZ3RoIC0gMV0ueDFdO1xuICBjb25zdCBiYXJXaWR0aCA9IHdpZHRoIC8gaGlzdG9ncmFtLmxlbmd0aDtcblxuICBjb25zdCB4ID0gc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oZG9tYWluKVxuICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICBjb25zdCB5ID0gc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oWzAsIG1heChoaXN0b2dyYW0sIGQgPT4gZC5jb3VudCldKVxuICAgIC5yYW5nZShbMCwgaGVpZ2h0XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SGlzdG9ncmFtV3JhcHBlciB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBzdHlsZT17e21hcmdpblRvcDogYCR7bWFyZ2luLnRvcH1weGB9fT5cbiAgICAgIDxnIGNsYXNzTmFtZT1cImhpc3RvZ3JhbS1iYXJzXCI+XG4gICAgICAgIHtoaXN0b2dyYW0ubWFwKGJhciA9PiB7XG4gICAgICAgICAgY29uc3QgaW5SYW5nZSA9IGJhci54MCA+PSB2YWx1ZVswXSAmJiBiYXIueDEgPD0gdmFsdWVbMV07XG4gICAgICAgICAgY29uc3Qgd1JhdGlvID0gaW5SYW5nZSA/IGhpc3RvZ3JhbVN0eWxlLmhpZ2hsaWdodFcgOiBoaXN0b2dyYW1TdHlsZS51bkhpZ2hsaWdodGVkVztcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeydpbi1yYW5nZSc6IGluUmFuZ2V9KX1cbiAgICAgICAgICAgICAga2V5PXtiYXIueDB9XG4gICAgICAgICAgICAgIGhlaWdodD17eShiYXIuY291bnQpfVxuICAgICAgICAgICAgICB3aWR0aD17YmFyV2lkdGggKiB3UmF0aW99XG4gICAgICAgICAgICAgIHg9e3goYmFyLngwKSArIChiYXJXaWR0aCAqICgxIC0gd1JhdGlvKSkgLyAyfVxuICAgICAgICAgICAgICByeD17MX1cbiAgICAgICAgICAgICAgcnk9ezF9XG4gICAgICAgICAgICAgIHk9e2hlaWdodCAtIHkoYmFyLmNvdW50KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2c+XG4gICAgICB7YnJ1c2hDb21wb25lbnR9XG4gICAgPC9IaXN0b2dyYW1XcmFwcGVyPlxuICApO1xufTtcblxuY29uc3QgTGluZUNoYXJ0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIC5ydi14eS1wbG90X19pbm5lciBwYXRoIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZS13aWR0aDogMS41O1xuICB9XG5gO1xuXG5jb25zdCBIaXN0b2dyYW1XcmFwcGVyID0gc3R5bGVkLnN2Z2BcbiAgLmhpc3RvZ3JhbS1iYXJzIHtcbiAgICByZWN0IHtcbiAgICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGlzdG9ncmFtRmlsbE91dFJhbmdlfTtcbiAgICB9XG4gICAgcmVjdC5pbi1yYW5nZSB7XG4gICAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhpc3RvZ3JhbUZpbGxJblJhbmdlfTtcbiAgICB9XG4gIH1cbmA7XG5jb25zdCBMaW5lQ2hhcnQgPSAoe1xuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICB5RG9tYWluLFxuICBoaW50Rm9ybWF0LFxuICBob3ZlcmVkRFAsXG4gIG1hcmdpbixcbiAgY29sb3IsXG4gIGRhdGEsXG4gIG9uTW91c2VNb3ZlLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBicnVzaERhdGEgPSBbe3g6IGRhdGFbMF0ueCwgeTogeURvbWFpblsxXSwgY3VzdG9tQ29tcG9uZW50OiAoKSA9PiBjaGlsZHJlbn1dO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmVDaGFydFdyYXBwZXI+XG4gICAgICA8WFlQbG90IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IG1hcmdpbj17ey4uLm1hcmdpbiwgYm90dG9tOiAxMn19PlxuICAgICAgICA8TGluZVNlcmllcyBzdHJva2VXaWR0aD17Mn0gY29sb3I9e2NvbG9yfSBkYXRhPXtkYXRhfSBvbk5lYXJlc3RYPXtvbk1vdXNlTW92ZX0gLz5cbiAgICAgICAgPE1hcmtTZXJpZXMgZGF0YT17aG92ZXJlZERQID8gW2hvdmVyZWREUF0gOiBbXX0gY29sb3I9e2NvbG9yfSBzaXplPXszfSAvPlxuICAgICAgICA8Q3VzdG9tU1ZHU2VyaWVzIGRhdGE9e2JydXNoRGF0YX0gLz5cbiAgICAgICAge2hvdmVyZWREUCA/IChcbiAgICAgICAgICA8SGludCB2YWx1ZT17aG92ZXJlZERQfT5cbiAgICAgICAgICAgIDxIaW50Q29udGVudCB7Li4uaG92ZXJlZERQfSBmb3JtYXQ9e3ZhbCA9PiBtb21lbnQudXRjKHZhbCkuZm9ybWF0KGhpbnRGb3JtYXQpfSAvPlxuICAgICAgICAgIDwvSGludD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1hZUGxvdD5cbiAgICA8L0xpbmVDaGFydFdyYXBwZXI+XG4gICk7XG59O1xuXG5jb25zdCBTdHlsZWRIaW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDhlMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBtYXJnaW46IDRweDtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuYDtcbmNvbnN0IEhpbnRDb250ZW50ID0gKHt4LCB5LCBmb3JtYXR9KSA9PiAoXG4gIDxTdHlsZWRIaW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGludC0teFwiPntmb3JtYXQoeCl9PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj57eX08L2Rpdj5cbiAgPC9TdHlsZWRIaW50PlxuKTtcbiJdfQ==