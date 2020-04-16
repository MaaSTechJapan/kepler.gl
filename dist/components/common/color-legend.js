"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegendRow = exports["default"] = void 0;

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

var _reselect = require("reselect");

var _d3Format = require("d3-format");

var _moment = _interopRequireDefault(require("moment"));

var _defaultSettings = require("../../constants/default-settings");

var _filterUtils = require("../../utils/filter-utils");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n\n  max-height: 150px;\n  overflow-y: auto;\n\n  svg {\n    text {\n      font-size: 9px;\n      fill: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ROW_H = 10;
var GAP = 4;
var RECT_W = 20;

var StyledLegend = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sidePanelScrollBar;
}, function (props) {
  return props.theme.textColor;
});

var defaultFormat = function defaultFormat(d) {
  return d;
};

var getTimeLabelFormat = function getTimeLabelFormat(domain) {
  var formatter = (0, _filterUtils.getTimeWidgetHintFormatter)(domain);
  return function (val) {
    return _moment["default"].utc(val).format(formatter);
  };
};

var getNumericLabelFormat = function getNumericLabelFormat(domain) {
  var diff = domain[1] - domain[0];

  if (diff < 10) {
    return (0, _d3Format.format)('.2f');
  }

  return (0, _d3Format.format)('.1f');
};

var getQuantLabelFormat = function getQuantLabelFormat(domain, fieldType) {
  // quant scale can only be assigned to linear Fields: real, timestamp, integer
  return fieldType === _defaultSettings.ALL_FIELD_TYPES.timestamp ? getTimeLabelFormat(domain) : !fieldType ? defaultFormat : getNumericLabelFormat(domain);
};

var getOrdinalLegends = function getOrdinalLegends(scale) {
  var domain = scale.domain();
  return {
    data: domain.map(scale),
    labels: domain
  };
};

var getQuantLegends = function getQuantLegends(scale, labelFormat) {
  if (typeof scale.invertExtent !== 'function') {
    // only quantile, quantize, threshold scale has invertExtent method
    return {
      data: [],
      labels: []
    };
  }

  var labels = scale.range().map(function (d) {
    var invert = scale.invertExtent(d);
    return "".concat(labelFormat(invert[0]), " to ").concat(labelFormat(invert[1]));
  });
  return {
    data: scale.range(),
    labels: labels
  };
};

var ColorLegend = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ColorLegend, _Component);

  var _super = _createSuper(ColorLegend);

  function ColorLegend() {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorLegend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "domainSelector", function (props) {
      return props.domain;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rangeSelector", function (props) {
      return props.range;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "labelFormatSelector", function (props) {
      return props.labelFormat;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleTypeSelector", function (props) {
      return props.scaleType;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldTypeSelector", function (props) {
      return props.fieldType;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "legendsSelector", (0, _reselect.createSelector)(_this.domainSelector, _this.rangeSelector, _this.scaleTypeSelector, _this.labelFormatSelector, _this.fieldTypeSelector, function (domain, range, scaleType, labelFormat, fieldType) {
      var scaleFunction = _defaultSettings.SCALE_FUNC[scaleType]; // color scale can only be quantize, quantile or ordinal

      var scale = scaleFunction().domain(domain).range(range);

      if (scaleType === _defaultSettings.SCALE_TYPES.ordinal) {
        return getOrdinalLegends(scale);
      }

      var formatLabel = labelFormat || getQuantLabelFormat(scale.domain(), fieldType);
      return getQuantLegends(scale, formatLabel);
    }));
    return _this;
  }

  (0, _createClass2["default"])(ColorLegend, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          scaleType = _this$props.scaleType,
          domain = _this$props.domain,
          range = _this$props.range,
          _this$props$displayLa = _this$props.displayLabel,
          displayLabel = _this$props$displayLa === void 0 ? true : _this$props$displayLa;

      if (!domain || !range || !scaleType) {
        return null;
      }

      var legends = this.legendsSelector(this.props);
      var height = legends.data.length * (ROW_H + GAP);
      return /*#__PURE__*/_react["default"].createElement(StyledLegend, null, /*#__PURE__*/_react["default"].createElement("svg", {
        width: width - 24,
        height: height
      }, legends.data.map(function (color, idx) {
        return /*#__PURE__*/_react["default"].createElement(LegendRow, {
          key: idx,
          label: legends.labels[idx],
          displayLabel: displayLabel,
          color: color,
          idx: idx
        });
      })));
    }
  }]);
  return ColorLegend;
}(_react.Component);

exports["default"] = ColorLegend;
(0, _defineProperty2["default"])(ColorLegend, "propTypes", {
  width: _propTypes["default"].number.isRequired,
  scaleType: _propTypes["default"].string,
  domain: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]),
  fieldType: _propTypes["default"].string,
  range: _propTypes["default"].arrayOf(_propTypes["default"].string),
  labelFormat: _propTypes["default"].func
});

var LegendRow = function LegendRow(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      displayLabel = _ref.displayLabel,
      color = _ref.color,
      idx = _ref.idx;
  return /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(0, ".concat(idx * (ROW_H + GAP), ")")
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: RECT_W,
    height: ROW_H,
    style: {
      fill: color
    }
  }), /*#__PURE__*/_react["default"].createElement("text", {
    x: RECT_W + 8,
    y: ROW_H - 1
  }, displayLabel ? label.toString() : ''));
};

exports.LegendRow = LegendRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb2xvci1sZWdlbmQuanMiXSwibmFtZXMiOlsiUk9XX0giLCJHQVAiLCJSRUNUX1ciLCJTdHlsZWRMZWdlbmQiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsU2Nyb2xsQmFyIiwidGV4dENvbG9yIiwiZGVmYXVsdEZvcm1hdCIsImQiLCJnZXRUaW1lTGFiZWxGb3JtYXQiLCJkb21haW4iLCJmb3JtYXR0ZXIiLCJ2YWwiLCJtb21lbnQiLCJ1dGMiLCJmb3JtYXQiLCJnZXROdW1lcmljTGFiZWxGb3JtYXQiLCJkaWZmIiwiZ2V0UXVhbnRMYWJlbEZvcm1hdCIsImZpZWxkVHlwZSIsIkFMTF9GSUVMRF9UWVBFUyIsInRpbWVzdGFtcCIsImdldE9yZGluYWxMZWdlbmRzIiwic2NhbGUiLCJkYXRhIiwibWFwIiwibGFiZWxzIiwiZ2V0UXVhbnRMZWdlbmRzIiwibGFiZWxGb3JtYXQiLCJpbnZlcnRFeHRlbnQiLCJyYW5nZSIsImludmVydCIsIkNvbG9yTGVnZW5kIiwic2NhbGVUeXBlIiwiZG9tYWluU2VsZWN0b3IiLCJyYW5nZVNlbGVjdG9yIiwic2NhbGVUeXBlU2VsZWN0b3IiLCJsYWJlbEZvcm1hdFNlbGVjdG9yIiwiZmllbGRUeXBlU2VsZWN0b3IiLCJzY2FsZUZ1bmN0aW9uIiwiU0NBTEVfRlVOQyIsIlNDQUxFX1RZUEVTIiwib3JkaW5hbCIsImZvcm1hdExhYmVsIiwid2lkdGgiLCJkaXNwbGF5TGFiZWwiLCJsZWdlbmRzIiwibGVnZW5kc1NlbGVjdG9yIiwiaGVpZ2h0IiwibGVuZ3RoIiwiY29sb3IiLCJpZHgiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJvYmplY3QiLCJhcnJheU9mIiwiZnVuYyIsIkxlZ2VuZFJvdyIsImxhYmVsIiwiZmlsbCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsRUFBZDtBQUNBLElBQU1DLEdBQUcsR0FBRyxDQUFaO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLEVBQWY7O0FBRUEsSUFBTUMsWUFBWSxHQUFHQyw2QkFBT0MsR0FBVixvQkFDZCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGtCQUFoQjtBQUFBLENBRFMsRUFTSixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFNBQWhCO0FBQUEsQ0FURCxDQUFsQjs7QUFjQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLENBQUM7QUFBQSxTQUFJQSxDQUFKO0FBQUEsQ0FBdkI7O0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxNQUFNLEVBQUk7QUFDbkMsTUFBTUMsU0FBUyxHQUFHLDZDQUEyQkQsTUFBM0IsQ0FBbEI7QUFDQSxTQUFPLFVBQUFFLEdBQUc7QUFBQSxXQUFJQyxtQkFBT0MsR0FBUCxDQUFXRixHQUFYLEVBQWdCRyxNQUFoQixDQUF1QkosU0FBdkIsQ0FBSjtBQUFBLEdBQVY7QUFDRCxDQUhEOztBQUtBLElBQU1LLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQU4sTUFBTSxFQUFJO0FBQ3RDLE1BQU1PLElBQUksR0FBR1AsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZQSxNQUFNLENBQUMsQ0FBRCxDQUEvQjs7QUFFQSxNQUFJTyxJQUFJLEdBQUcsRUFBWCxFQUFlO0FBQ2IsV0FBTyxzQkFBTyxLQUFQLENBQVA7QUFDRDs7QUFFRCxTQUFPLHNCQUFPLEtBQVAsQ0FBUDtBQUNELENBUkQ7O0FBVUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDUixNQUFELEVBQVNTLFNBQVQsRUFBdUI7QUFDakQ7QUFDQSxTQUFPQSxTQUFTLEtBQUtDLGlDQUFnQkMsU0FBOUIsR0FDSFosa0JBQWtCLENBQUNDLE1BQUQsQ0FEZixHQUVILENBQUNTLFNBQUQsR0FDQVosYUFEQSxHQUVBUyxxQkFBcUIsQ0FBQ04sTUFBRCxDQUp6QjtBQUtELENBUEQ7O0FBU0EsSUFBTVksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFBQyxLQUFLLEVBQUk7QUFDakMsTUFBTWIsTUFBTSxHQUFHYSxLQUFLLENBQUNiLE1BQU4sRUFBZjtBQUNBLFNBQU87QUFDTGMsSUFBQUEsSUFBSSxFQUFFZCxNQUFNLENBQUNlLEdBQVAsQ0FBV0YsS0FBWCxDQUREO0FBRUxHLElBQUFBLE1BQU0sRUFBRWhCO0FBRkgsR0FBUDtBQUlELENBTkQ7O0FBUUEsSUFBTWlCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0osS0FBRCxFQUFRSyxXQUFSLEVBQXdCO0FBQzlDLE1BQUksT0FBT0wsS0FBSyxDQUFDTSxZQUFiLEtBQThCLFVBQWxDLEVBQThDO0FBQzVDO0FBQ0EsV0FBTztBQUNMTCxNQUFBQSxJQUFJLEVBQUUsRUFERDtBQUVMRSxNQUFBQSxNQUFNLEVBQUU7QUFGSCxLQUFQO0FBSUQ7O0FBRUQsTUFBTUEsTUFBTSxHQUFHSCxLQUFLLENBQUNPLEtBQU4sR0FBY0wsR0FBZCxDQUFrQixVQUFBakIsQ0FBQyxFQUFJO0FBQ3BDLFFBQU11QixNQUFNLEdBQUdSLEtBQUssQ0FBQ00sWUFBTixDQUFtQnJCLENBQW5CLENBQWY7QUFDQSxxQkFBVW9CLFdBQVcsQ0FBQ0csTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUFyQixpQkFBdUNILFdBQVcsQ0FBQ0csTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUFsRDtBQUNELEdBSGMsQ0FBZjtBQUtBLFNBQU87QUFDTFAsSUFBQUEsSUFBSSxFQUFFRCxLQUFLLENBQUNPLEtBQU4sRUFERDtBQUVMSixJQUFBQSxNQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlELENBbEJEOztJQW9CcUJNLFc7Ozs7Ozs7Ozs7Ozs7Ozt1R0FVRixVQUFBN0IsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ08sTUFBVjtBQUFBLEs7c0dBQ04sVUFBQVAsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQzJCLEtBQVY7QUFBQSxLOzRHQUNDLFVBQUEzQixLQUFLO0FBQUEsYUFBSUEsS0FBSyxDQUFDeUIsV0FBVjtBQUFBLEs7MEdBQ1AsVUFBQXpCLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUM4QixTQUFWO0FBQUEsSzswR0FDTCxVQUFBOUIsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ2dCLFNBQVY7QUFBQSxLO3dHQUVQLDhCQUNoQixNQUFLZSxjQURXLEVBRWhCLE1BQUtDLGFBRlcsRUFHaEIsTUFBS0MsaUJBSFcsRUFJaEIsTUFBS0MsbUJBSlcsRUFLaEIsTUFBS0MsaUJBTFcsRUFNaEIsVUFBQzVCLE1BQUQsRUFBU29CLEtBQVQsRUFBZ0JHLFNBQWhCLEVBQTJCTCxXQUEzQixFQUF3Q1QsU0FBeEMsRUFBc0Q7QUFDcEQsVUFBTW9CLGFBQWEsR0FBR0MsNEJBQVdQLFNBQVgsQ0FBdEIsQ0FEb0QsQ0FFcEQ7O0FBQ0EsVUFBTVYsS0FBSyxHQUFHZ0IsYUFBYSxHQUN4QjdCLE1BRFcsQ0FDSkEsTUFESSxFQUVYb0IsS0FGVyxDQUVMQSxLQUZLLENBQWQ7O0FBSUEsVUFBSUcsU0FBUyxLQUFLUSw2QkFBWUMsT0FBOUIsRUFBdUM7QUFDckMsZUFBT3BCLGlCQUFpQixDQUFDQyxLQUFELENBQXhCO0FBQ0Q7O0FBRUQsVUFBTW9CLFdBQVcsR0FBR2YsV0FBVyxJQUFJVixtQkFBbUIsQ0FBQ0ssS0FBSyxDQUFDYixNQUFOLEVBQUQsRUFBaUJTLFNBQWpCLENBQXREO0FBRUEsYUFBT1EsZUFBZSxDQUFDSixLQUFELEVBQVFvQixXQUFSLENBQXRCO0FBQ0QsS0FwQmUsQzs7Ozs7OzZCQXVCVDtBQUFBLHdCQUN3RCxLQUFLeEMsS0FEN0Q7QUFBQSxVQUNBeUMsS0FEQSxlQUNBQSxLQURBO0FBQUEsVUFDT1gsU0FEUCxlQUNPQSxTQURQO0FBQUEsVUFDa0J2QixNQURsQixlQUNrQkEsTUFEbEI7QUFBQSxVQUMwQm9CLEtBRDFCLGVBQzBCQSxLQUQxQjtBQUFBLDhDQUNpQ2UsWUFEakM7QUFBQSxVQUNpQ0EsWUFEakMsc0NBQ2dELElBRGhEOztBQUdQLFVBQUksQ0FBQ25DLE1BQUQsSUFBVyxDQUFDb0IsS0FBWixJQUFxQixDQUFDRyxTQUExQixFQUFxQztBQUNuQyxlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFNYSxPQUFPLEdBQUcsS0FBS0MsZUFBTCxDQUFxQixLQUFLNUMsS0FBMUIsQ0FBaEI7QUFDQSxVQUFNNkMsTUFBTSxHQUFHRixPQUFPLENBQUN0QixJQUFSLENBQWF5QixNQUFiLElBQXVCcEQsS0FBSyxHQUFHQyxHQUEvQixDQUFmO0FBRUEsMEJBQ0UsZ0NBQUMsWUFBRCxxQkFDRTtBQUFLLFFBQUEsS0FBSyxFQUFFOEMsS0FBSyxHQUFHLEVBQXBCO0FBQXdCLFFBQUEsTUFBTSxFQUFFSTtBQUFoQyxTQUNHRixPQUFPLENBQUN0QixJQUFSLENBQWFDLEdBQWIsQ0FBaUIsVUFBQ3lCLEtBQUQsRUFBUUMsR0FBUjtBQUFBLDRCQUNoQixnQ0FBQyxTQUFEO0FBQ0UsVUFBQSxHQUFHLEVBQUVBLEdBRFA7QUFFRSxVQUFBLEtBQUssRUFBRUwsT0FBTyxDQUFDcEIsTUFBUixDQUFleUIsR0FBZixDQUZUO0FBR0UsVUFBQSxZQUFZLEVBQUVOLFlBSGhCO0FBSUUsVUFBQSxLQUFLLEVBQUVLLEtBSlQ7QUFLRSxVQUFBLEdBQUcsRUFBRUM7QUFMUCxVQURnQjtBQUFBLE9BQWpCLENBREgsQ0FERixDQURGO0FBZUQ7OztFQWhFc0NDLGdCOzs7aUNBQXBCcEIsVyxlQUNBO0FBQ2pCWSxFQUFBQSxLQUFLLEVBQUVTLHNCQUFVQyxNQUFWLENBQWlCQyxVQURQO0FBRWpCdEIsRUFBQUEsU0FBUyxFQUFFb0Isc0JBQVVHLE1BRko7QUFHakI5QyxFQUFBQSxNQUFNLEVBQUUyQyxzQkFBVUksU0FBVixDQUFvQixDQUFDSixzQkFBVUssS0FBWCxFQUFrQkwsc0JBQVVNLE1BQTVCLENBQXBCLENBSFM7QUFJakJ4QyxFQUFBQSxTQUFTLEVBQUVrQyxzQkFBVUcsTUFKSjtBQUtqQjFCLEVBQUFBLEtBQUssRUFBRXVCLHNCQUFVTyxPQUFWLENBQWtCUCxzQkFBVUcsTUFBNUIsQ0FMVTtBQU1qQjVCLEVBQUFBLFdBQVcsRUFBRXlCLHNCQUFVUTtBQU5OLEM7O0FBa0VkLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsd0JBQUVDLEtBQUY7QUFBQSxNQUFFQSxLQUFGLDJCQUFVLEVBQVY7QUFBQSxNQUFjbEIsWUFBZCxRQUFjQSxZQUFkO0FBQUEsTUFBNEJLLEtBQTVCLFFBQTRCQSxLQUE1QjtBQUFBLE1BQW1DQyxHQUFuQyxRQUFtQ0EsR0FBbkM7QUFBQSxzQkFDdkI7QUFBRyxJQUFBLFNBQVMseUJBQWtCQSxHQUFHLElBQUl0RCxLQUFLLEdBQUdDLEdBQVosQ0FBckI7QUFBWixrQkFDRTtBQUFNLElBQUEsS0FBSyxFQUFFQyxNQUFiO0FBQXFCLElBQUEsTUFBTSxFQUFFRixLQUE3QjtBQUFvQyxJQUFBLEtBQUssRUFBRTtBQUFDbUUsTUFBQUEsSUFBSSxFQUFFZDtBQUFQO0FBQTNDLElBREYsZUFFRTtBQUFNLElBQUEsQ0FBQyxFQUFFbkQsTUFBTSxHQUFHLENBQWxCO0FBQXFCLElBQUEsQ0FBQyxFQUFFRixLQUFLLEdBQUc7QUFBaEMsS0FDR2dELFlBQVksR0FBR2tCLEtBQUssQ0FBQ0UsUUFBTixFQUFILEdBQXNCLEVBRHJDLENBRkYsQ0FEdUI7QUFBQSxDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2QzLWZvcm1hdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1NDQUxFX1RZUEVTLCBTQ0FMRV9GVU5DLCBBTExfRklFTERfVFlQRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7Z2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXJ9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5cbmNvbnN0IFJPV19IID0gMTA7XG5jb25zdCBHQVAgPSA0O1xuY29uc3QgUkVDVF9XID0gMjA7XG5cbmNvbnN0IFN0eWxlZExlZ2VuZCA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsU2Nyb2xsQmFyfTtcblxuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBzdmcge1xuICAgIHRleHQge1xuICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBkZWZhdWx0Rm9ybWF0ID0gZCA9PiBkO1xuXG5jb25zdCBnZXRUaW1lTGFiZWxGb3JtYXQgPSBkb21haW4gPT4ge1xuICBjb25zdCBmb3JtYXR0ZXIgPSBnZXRUaW1lV2lkZ2V0SGludEZvcm1hdHRlcihkb21haW4pO1xuICByZXR1cm4gdmFsID0+IG1vbWVudC51dGModmFsKS5mb3JtYXQoZm9ybWF0dGVyKTtcbn07XG5cbmNvbnN0IGdldE51bWVyaWNMYWJlbEZvcm1hdCA9IGRvbWFpbiA9PiB7XG4gIGNvbnN0IGRpZmYgPSBkb21haW5bMV0gLSBkb21haW5bMF07XG5cbiAgaWYgKGRpZmYgPCAxMCkge1xuICAgIHJldHVybiBmb3JtYXQoJy4yZicpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCgnLjFmJyk7XG59O1xuXG5jb25zdCBnZXRRdWFudExhYmVsRm9ybWF0ID0gKGRvbWFpbiwgZmllbGRUeXBlKSA9PiB7XG4gIC8vIHF1YW50IHNjYWxlIGNhbiBvbmx5IGJlIGFzc2lnbmVkIHRvIGxpbmVhciBGaWVsZHM6IHJlYWwsIHRpbWVzdGFtcCwgaW50ZWdlclxuICByZXR1cm4gZmllbGRUeXBlID09PSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wXG4gICAgPyBnZXRUaW1lTGFiZWxGb3JtYXQoZG9tYWluKVxuICAgIDogIWZpZWxkVHlwZVxuICAgID8gZGVmYXVsdEZvcm1hdFxuICAgIDogZ2V0TnVtZXJpY0xhYmVsRm9ybWF0KGRvbWFpbik7XG59O1xuXG5jb25zdCBnZXRPcmRpbmFsTGVnZW5kcyA9IHNjYWxlID0+IHtcbiAgY29uc3QgZG9tYWluID0gc2NhbGUuZG9tYWluKCk7XG4gIHJldHVybiB7XG4gICAgZGF0YTogZG9tYWluLm1hcChzY2FsZSksXG4gICAgbGFiZWxzOiBkb21haW5cbiAgfTtcbn07XG5cbmNvbnN0IGdldFF1YW50TGVnZW5kcyA9IChzY2FsZSwgbGFiZWxGb3JtYXQpID0+IHtcbiAgaWYgKHR5cGVvZiBzY2FsZS5pbnZlcnRFeHRlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBvbmx5IHF1YW50aWxlLCBxdWFudGl6ZSwgdGhyZXNob2xkIHNjYWxlIGhhcyBpbnZlcnRFeHRlbnQgbWV0aG9kXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgbGFiZWxzOiBbXVxuICAgIH07XG4gIH1cblxuICBjb25zdCBsYWJlbHMgPSBzY2FsZS5yYW5nZSgpLm1hcChkID0+IHtcbiAgICBjb25zdCBpbnZlcnQgPSBzY2FsZS5pbnZlcnRFeHRlbnQoZCk7XG4gICAgcmV0dXJuIGAke2xhYmVsRm9ybWF0KGludmVydFswXSl9IHRvICR7bGFiZWxGb3JtYXQoaW52ZXJ0WzFdKX1gO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IHNjYWxlLnJhbmdlKCksXG4gICAgbGFiZWxzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvckxlZ2VuZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBzY2FsZVR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZG9tYWluOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXksIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBmaWVsZFR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmFuZ2U6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIGxhYmVsRm9ybWF0OiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIGRvbWFpblNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZG9tYWluO1xuICByYW5nZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMucmFuZ2U7XG4gIGxhYmVsRm9ybWF0U2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYWJlbEZvcm1hdDtcbiAgc2NhbGVUeXBlU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5zY2FsZVR5cGU7XG4gIGZpZWxkVHlwZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmllbGRUeXBlO1xuXG4gIGxlZ2VuZHNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHRoaXMuZG9tYWluU2VsZWN0b3IsXG4gICAgdGhpcy5yYW5nZVNlbGVjdG9yLFxuICAgIHRoaXMuc2NhbGVUeXBlU2VsZWN0b3IsXG4gICAgdGhpcy5sYWJlbEZvcm1hdFNlbGVjdG9yLFxuICAgIHRoaXMuZmllbGRUeXBlU2VsZWN0b3IsXG4gICAgKGRvbWFpbiwgcmFuZ2UsIHNjYWxlVHlwZSwgbGFiZWxGb3JtYXQsIGZpZWxkVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc2NhbGVGdW5jdGlvbiA9IFNDQUxFX0ZVTkNbc2NhbGVUeXBlXTtcbiAgICAgIC8vIGNvbG9yIHNjYWxlIGNhbiBvbmx5IGJlIHF1YW50aXplLCBxdWFudGlsZSBvciBvcmRpbmFsXG4gICAgICBjb25zdCBzY2FsZSA9IHNjYWxlRnVuY3Rpb24oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKHJhbmdlKTtcblxuICAgICAgaWYgKHNjYWxlVHlwZSA9PT0gU0NBTEVfVFlQRVMub3JkaW5hbCkge1xuICAgICAgICByZXR1cm4gZ2V0T3JkaW5hbExlZ2VuZHMoc2NhbGUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXRMYWJlbCA9IGxhYmVsRm9ybWF0IHx8IGdldFF1YW50TGFiZWxGb3JtYXQoc2NhbGUuZG9tYWluKCksIGZpZWxkVHlwZSk7XG5cbiAgICAgIHJldHVybiBnZXRRdWFudExlZ2VuZHMoc2NhbGUsIGZvcm1hdExhYmVsKTtcbiAgICB9XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt3aWR0aCwgc2NhbGVUeXBlLCBkb21haW4sIHJhbmdlLCBkaXNwbGF5TGFiZWwgPSB0cnVlfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRvbWFpbiB8fCAhcmFuZ2UgfHwgIXNjYWxlVHlwZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbGVnZW5kcyA9IHRoaXMubGVnZW5kc1NlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGhlaWdodCA9IGxlZ2VuZHMuZGF0YS5sZW5ndGggKiAoUk9XX0ggKyBHQVApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMZWdlbmQ+XG4gICAgICAgIDxzdmcgd2lkdGg9e3dpZHRoIC0gMjR9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgICB7bGVnZW5kcy5kYXRhLm1hcCgoY29sb3IsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPExlZ2VuZFJvd1xuICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgbGFiZWw9e2xlZ2VuZHMubGFiZWxzW2lkeF19XG4gICAgICAgICAgICAgIGRpc3BsYXlMYWJlbD17ZGlzcGxheUxhYmVsfVxuICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L1N0eWxlZExlZ2VuZD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBMZWdlbmRSb3cgPSAoe2xhYmVsID0gJycsIGRpc3BsYXlMYWJlbCwgY29sb3IsIGlkeH0pID0+IChcbiAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAsICR7aWR4ICogKFJPV19IICsgR0FQKX0pYH0+XG4gICAgPHJlY3Qgd2lkdGg9e1JFQ1RfV30gaGVpZ2h0PXtST1dfSH0gc3R5bGU9e3tmaWxsOiBjb2xvcn19IC8+XG4gICAgPHRleHQgeD17UkVDVF9XICsgOH0geT17Uk9XX0ggLSAxfT5cbiAgICAgIHtkaXNwbGF5TGFiZWwgPyBsYWJlbC50b1N0cmluZygpIDogJyd9XG4gICAgPC90ZXh0PlxuICA8L2c+XG4pO1xuIl19