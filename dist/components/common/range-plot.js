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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1wbG90LmpzIl0sIm5hbWVzIjpbImNoYXJ0TWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiY2hhcnRIIiwiY29udGFpbmVySCIsImhpc3RvZ3JhbVN0eWxlIiwiaGlnaGxpZ2h0VyIsInVuSGlnaGxpZ2h0ZWRXIiwiUmFuZ2VQbG90IiwiaG92ZXJlZERQIiwicHJvcHMiLCJsaW5lQ2hhcnQiLCJ4RG9tYWluIiwiZG9tYWluU2VsZWN0b3IiLCJkb21haW4iLCJzZXRTdGF0ZSIsIm9uQnJ1c2giLCJyYW5nZSIsInZhbHVlIiwid2lkdGgiLCJwbG90VHlwZSIsImhpc3RvZ3JhbSIsIngwIiwibGVuZ3RoIiwieDEiLCJicnVzaENvbXBvbmVudCIsImhlaWdodCIsInBvc2l0aW9uIiwic3RhdGUiLCJvbk1vdXNlTW92ZSIsInlEb21haW4iLCJoaW50Rm9ybWF0dGVyIiwic2VyaWVzIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzaGFwZSIsIm9iamVjdCIsInN0cmluZyIsImlzRW5sYXJnZWQiLCJib29sIiwib25CbHVyIiwiZnVuYyIsIkhpc3RvZ3JhbSIsIm1hcmdpbiIsImJhcldpZHRoIiwieCIsInkiLCJkIiwiY291bnQiLCJtYXJnaW5Ub3AiLCJtYXAiLCJiYXIiLCJpblJhbmdlIiwid1JhdGlvIiwiTGluZUNoYXJ0V3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkhpc3RvZ3JhbVdyYXBwZXIiLCJzdmciLCJ0aGVtZSIsImhpc3RvZ3JhbUZpbGxPdXRSYW5nZSIsImhpc3RvZ3JhbUZpbGxJblJhbmdlIiwiTGluZUNoYXJ0IiwiaGludEZvcm1hdCIsImNvbG9yIiwiZGF0YSIsImNoaWxkcmVuIiwiYnJ1c2hEYXRhIiwiY3VzdG9tQ29tcG9uZW50IiwidmFsIiwibW9tZW50IiwidXRjIiwiZm9ybWF0IiwiU3R5bGVk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QyxLQURGLENBRFEsR0FJTixJQVJOLENBREYsQ0FERjtBQWNELENBNUJEOztBQThCQSxJQUFNVSxVQUFVLEdBQUdsQiw2QkFBT0MsR0FBVixxQkFHTCxVQUFBakQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ29ELEtBQU4sQ0FBWWUsV0FBaEI7QUFBQSxDQUhBLENBQWhCOztBQVVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBRTlCLENBQUYsU0FBRUEsQ0FBRjtBQUFBLE1BQUtDLENBQUwsU0FBS0EsQ0FBTDtBQUFBLE1BQVEwQixNQUFSLFNBQVFBLE1BQVI7QUFBQSxzQkFDbEIsZ0NBQUMsVUFBRCxxQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBMEJBLE1BQU0sQ0FBQzNCLENBQUQsQ0FBaEMsQ0FERixlQUVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUFzQkMsQ0FBdEIsQ0FGRixDQURrQjtBQUFBLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7c2NhbGVMaW5lYXJ9IGZyb20gJ2QzLXNjYWxlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQge21heH0gZnJvbSAnZDMtYXJyYXknO1xyXG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XHJcbmltcG9ydCB7TGluZVNlcmllcywgWFlQbG90LCBDdXN0b21TVkdTZXJpZXMsIEhpbnQsIE1hcmtTZXJpZXN9IGZyb20gJ3JlYWN0LXZpcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmltcG9ydCBSYW5nZUJydXNoIGZyb20gJy4vcmFuZ2UtYnJ1c2gnO1xyXG5pbXBvcnQge2dldFRpbWVXaWRnZXRIaW50Rm9ybWF0dGVyfSBmcm9tICd1dGlscy9maWx0ZXItdXRpbHMnO1xyXG5cclxuY29uc3QgY2hhcnRNYXJnaW4gPSB7dG9wOiA4LCBib3R0b206IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwfTtcclxuY29uc3QgY2hhcnRIID0gNTI7XHJcbmNvbnN0IGNvbnRhaW5lckggPSA2ODtcclxuY29uc3QgaGlzdG9ncmFtU3R5bGUgPSB7XHJcbiAgaGlnaGxpZ2h0VzogMC43LFxyXG4gIHVuSGlnaGxpZ2h0ZWRXOiAwLjRcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlUGxvdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxyXG4gICAgaGlzdG9ncmFtOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICB4MDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgICAgICB4MTogUHJvcFR5cGVzLm51bWJlclxyXG4gICAgICB9KVxyXG4gICAgKSxcclxuICAgIGxpbmVDaGFydDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIHBsb3RUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgaXNFbmxhcmdlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG4gIH07XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgaG92ZXJlZERQOiBudWxsXHJcbiAgfTtcclxuXHJcbiAgZG9tYWluU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5saW5lQ2hhcnQgJiYgcHJvcHMubGluZUNoYXJ0LnhEb21haW47XHJcbiAgaGludEZvcm1hdHRlciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZG9tYWluU2VsZWN0b3IsIGRvbWFpbiA9PiBnZXRUaW1lV2lkZ2V0SGludEZvcm1hdHRlcihkb21haW4pKTtcclxuXHJcbiAgb25Nb3VzZU1vdmUgPSBob3ZlcmVkRFAgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXJlZERQfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge29uQnJ1c2gsIHJhbmdlLCB2YWx1ZSwgd2lkdGgsIHBsb3RUeXBlLCBsaW5lQ2hhcnQsIGhpc3RvZ3JhbX0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgZG9tYWluID0gW2hpc3RvZ3JhbVswXS54MCwgaGlzdG9ncmFtW2hpc3RvZ3JhbS5sZW5ndGggLSAxXS54MV07XHJcblxyXG4gICAgY29uc3QgYnJ1c2hDb21wb25lbnQgPSAoXHJcbiAgICAgIDxSYW5nZUJydXNoIGRvbWFpbj17ZG9tYWlufSBvbkJydXNoPXtvbkJydXNofSByYW5nZT17cmFuZ2V9IHZhbHVlPXt2YWx1ZX0gd2lkdGg9e3dpZHRofSAvPlxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGhlaWdodDogYCR7Y29udGFpbmVySH1weGAsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7cGxvdFR5cGUgPT09ICdsaW5lQ2hhcnQnID8gKFxyXG4gICAgICAgICAgPExpbmVDaGFydFxyXG4gICAgICAgICAgICBob3ZlcmVkRFA9e3RoaXMuc3RhdGUuaG92ZXJlZERQfVxyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgIGhlaWdodD17Y29udGFpbmVySH1cclxuICAgICAgICAgICAgbWFyZ2luPXtjaGFydE1hcmdpbn1cclxuICAgICAgICAgICAgY2hpbGRyZW49e2JydXNoQ29tcG9uZW50fVxyXG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5vbk1vdXNlTW92ZX1cclxuICAgICAgICAgICAgeURvbWFpbj17bGluZUNoYXJ0LnlEb21haW59XHJcbiAgICAgICAgICAgIGhpbnRGb3JtYXQ9e3RoaXMuaGludEZvcm1hdHRlcih0aGlzLnByb3BzKX1cclxuICAgICAgICAgICAgZGF0YT17bGluZUNoYXJ0LnNlcmllc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxIaXN0b2dyYW1cclxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICBoZWlnaHQ9e2NoYXJ0SH1cclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICBtYXJnaW49e2NoYXJ0TWFyZ2lufVxyXG4gICAgICAgICAgICBoaXN0b2dyYW09e2hpc3RvZ3JhbX1cclxuICAgICAgICAgICAgYnJ1c2hDb21wb25lbnQ9e2JydXNoQ29tcG9uZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBIaXN0b2dyYW0gPSAoe3dpZHRoLCBoZWlnaHQsIG1hcmdpbiwgaGlzdG9ncmFtLCB2YWx1ZSwgYnJ1c2hDb21wb25lbnR9KSA9PiB7XHJcbiAgY29uc3QgZG9tYWluID0gW2hpc3RvZ3JhbVswXS54MCwgaGlzdG9ncmFtW2hpc3RvZ3JhbS5sZW5ndGggLSAxXS54MV07XHJcbiAgY29uc3QgYmFyV2lkdGggPSB3aWR0aCAvIGhpc3RvZ3JhbS5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IHggPSBzY2FsZUxpbmVhcigpXHJcbiAgICAuZG9tYWluKGRvbWFpbilcclxuICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcclxuXHJcbiAgY29uc3QgeSA9IHNjYWxlTGluZWFyKClcclxuICAgIC5kb21haW4oWzAsIG1heChoaXN0b2dyYW0sIGQgPT4gZC5jb3VudCldKVxyXG4gICAgLnJhbmdlKFswLCBoZWlnaHRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIaXN0b2dyYW1XcmFwcGVyIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IHN0eWxlPXt7bWFyZ2luVG9wOiBgJHttYXJnaW4udG9wfXB4YH19PlxyXG4gICAgICA8ZyBjbGFzc05hbWU9XCJoaXN0b2dyYW0tYmFyc1wiPlxyXG4gICAgICAgIHtoaXN0b2dyYW0ubWFwKGJhciA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpblJhbmdlID0gYmFyLngwID49IHZhbHVlWzBdICYmIGJhci54MSA8PSB2YWx1ZVsxXTtcclxuICAgICAgICAgIGNvbnN0IHdSYXRpbyA9IGluUmFuZ2UgPyBoaXN0b2dyYW1TdHlsZS5oaWdobGlnaHRXIDogaGlzdG9ncmFtU3R5bGUudW5IaWdobGlnaHRlZFc7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHJlY3RcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeydpbi1yYW5nZSc6IGluUmFuZ2V9KX1cclxuICAgICAgICAgICAgICBrZXk9e2Jhci54MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9e3koYmFyLmNvdW50KX1cclxuICAgICAgICAgICAgICB3aWR0aD17YmFyV2lkdGggKiB3UmF0aW99XHJcbiAgICAgICAgICAgICAgeD17eChiYXIueDApICsgKGJhcldpZHRoICogKDEgLSB3UmF0aW8pKSAvIDJ9XHJcbiAgICAgICAgICAgICAgcng9ezF9XHJcbiAgICAgICAgICAgICAgcnk9ezF9XHJcbiAgICAgICAgICAgICAgeT17aGVpZ2h0IC0geShiYXIuY291bnQpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9nPlxyXG4gICAgICB7YnJ1c2hDb21wb25lbnR9XHJcbiAgICA8L0hpc3RvZ3JhbVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IExpbmVDaGFydFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIC5ydi14eS1wbG90X19pbm5lciBwYXRoIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDEuNTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBIaXN0b2dyYW1XcmFwcGVyID0gc3R5bGVkLnN2Z2BcclxuICAuaGlzdG9ncmFtLWJhcnMge1xyXG4gICAgcmVjdCB7XHJcbiAgICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGlzdG9ncmFtRmlsbE91dFJhbmdlfTtcclxuICAgIH1cclxuICAgIHJlY3QuaW4tcmFuZ2Uge1xyXG4gICAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhpc3RvZ3JhbUZpbGxJblJhbmdlfTtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmNvbnN0IExpbmVDaGFydCA9ICh7XHJcbiAgd2lkdGgsXHJcbiAgaGVpZ2h0LFxyXG4gIHlEb21haW4sXHJcbiAgaGludEZvcm1hdCxcclxuICBob3ZlcmVkRFAsXHJcbiAgbWFyZ2luLFxyXG4gIGNvbG9yLFxyXG4gIGRhdGEsXHJcbiAgb25Nb3VzZU1vdmUsXHJcbiAgY2hpbGRyZW5cclxufSkgPT4ge1xyXG4gIGNvbnN0IGJydXNoRGF0YSA9IFt7eDogZGF0YVswXS54LCB5OiB5RG9tYWluWzFdLCBjdXN0b21Db21wb25lbnQ6ICgpID0+IGNoaWxkcmVufV07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZUNoYXJ0V3JhcHBlcj5cclxuICAgICAgPFhZUGxvdCB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBtYXJnaW49e3suLi5tYXJnaW4sIGJvdHRvbTogMTJ9fT5cclxuICAgICAgICA8TGluZVNlcmllcyBzdHJva2VXaWR0aD17Mn0gY29sb3I9e2NvbG9yfSBkYXRhPXtkYXRhfSBvbk5lYXJlc3RYPXtvbk1vdXNlTW92ZX0gLz5cclxuICAgICAgICA8TWFya1NlcmllcyBkYXRhPXtob3ZlcmVkRFAgPyBbaG92ZXJlZERQXSA6IFtdfSBjb2xvcj17Y29sb3J9IHNpemU9ezN9IC8+XHJcbiAgICAgICAgPEN1c3RvbVNWR1NlcmllcyBkYXRhPXticnVzaERhdGF9IC8+XHJcbiAgICAgICAge2hvdmVyZWREUCA/IChcclxuICAgICAgICAgIDxIaW50IHZhbHVlPXtob3ZlcmVkRFB9PlxyXG4gICAgICAgICAgICA8SGludENvbnRlbnQgey4uLmhvdmVyZWREUH0gZm9ybWF0PXt2YWwgPT4gbW9tZW50LnV0Yyh2YWwpLmZvcm1hdChoaW50Rm9ybWF0KX0gLz5cclxuICAgICAgICAgIDwvSGludD5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9YWVBsb3Q+XHJcbiAgICA8L0xpbmVDaGFydFdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlZEhpbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2Q4ZTA7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICBmb250LXNpemU6IDlweDtcclxuICBtYXJnaW46IDRweDtcclxuICBwYWRkaW5nOiAzcHggNnB4O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5gO1xyXG5jb25zdCBIaW50Q29udGVudCA9ICh7eCwgeSwgZm9ybWF0fSkgPT4gKFxyXG4gIDxTdHlsZWRIaW50PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoaW50LS14XCI+e2Zvcm1hdCh4KX08L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+e3l9PC9kaXY+XHJcbiAgPC9TdHlsZWRIaW50PlxyXG4pO1xyXG4iXX0=