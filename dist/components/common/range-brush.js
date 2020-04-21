"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _d3Selection = require("d3-selection");

var _d3Brush = require("d3-brush");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .selection {\n    stroke: none;\n    fill: ", ";\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledG = _styledComponents["default"].g(_templateObject(), function (props) {
  return props.theme.rangeBrushBgd;
});

var RangeBrush = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RangeBrush, _Component);

  var _super = _createSuper(RangeBrush);

  function RangeBrush() {
    var _this;

    (0, _classCallCheck2["default"])(this, RangeBrush);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rootContainer", (0, _react.createRef)());
    return _this;
  }

  (0, _createClass2["default"])(RangeBrush, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // We want the React app to respond to brush state and vice-versa
      // but d3-brush fires the same events for both user-initiated brushing
      // and programmatic brushing (brush.move). We need these flags to
      // distinguish between the uses.
      //
      // We don't use state because that would trigger another `componentDidUpdate`
      this.brushing = false;
      this.moving = false;
      this.root = (0, _d3Selection.select)(this.rootContainer.current);
      this.brush = (0, _d3Brush.brushX)().on('start', function () {
        _this2.brushing = true;
      }).on('brush', function () {
        if (_this2.moving) {
          return;
        }

        _d3Selection.event.selection === null ? _this2._reset() : _this2._brush(_d3Selection.event.selection);
      }).on('end', function () {
        if (!_this2.moving && _d3Selection.event.selection === null) {
          _this2._reset();
        }

        _this2.brushing = false;
        _this2.moving = false;
      });
      this.root.call(this.brush);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          _this$props$value = (0, _slicedToArray2["default"])(_this$props.value, 2),
          val0 = _this$props$value[0],
          val1 = _this$props$value[1],
          width = _this$props.width;

      var _prevProps$value = (0, _slicedToArray2["default"])(prevProps.value, 2),
          prevVal0 = _prevProps$value[0],
          prevVal1 = _prevProps$value[1];

      if (prevProps.width !== width) {
        // width change should not trigger this._brush
        this.moving = true;
        this.root.call(this.brush);

        this._move(val0, val1);
      }

      if (!this.brushing && !this.moving) {
        if (prevVal0 !== val0 || prevVal1 !== val1) {
          this.moving = true;

          this._move(val0, val1);
        }
      }
    }
  }, {
    key: "_reset",
    value: function _reset() {
      var _this$props$range = (0, _slicedToArray2["default"])(this.props.range, 2),
          minValue = _this$props$range[0],
          maxValue = _this$props$range[1];

      this._onBrush(minValue, maxValue);
    }
  }, {
    key: "_move",
    value: function _move(val0, val1) {
      var _this$props2 = this.props,
          _this$props2$domain = (0, _slicedToArray2["default"])(_this$props2.domain, 2),
          min = _this$props2$domain[0],
          max = _this$props2$domain[1],
          width = _this$props2.width;

      var scale = function scale(x) {
        return (x - min) * width / (max - min);
      };

      this.brush.move(this.root, [scale(val0), scale(val1)]);
    }
  }, {
    key: "_brush",
    value: function _brush(_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          sel0 = _ref2[0],
          sel1 = _ref2[1];

      var _this$props3 = this.props,
          _this$props3$domain = (0, _slicedToArray2["default"])(_this$props3.domain, 2),
          min = _this$props3$domain[0],
          max = _this$props3$domain[1],
          width = _this$props3.width;

      var invert = function invert(x) {
        return x * (max - min) / width + min;
      };

      this._onBrush(invert(sel0), invert(sel1));
    }
  }, {
    key: "_onBrush",
    value: function _onBrush(val0, val1) {
      var _this$props$value2 = (0, _slicedToArray2["default"])(this.props.value, 2),
          currentVal0 = _this$props$value2[0],
          currentVal1 = _this$props$value2[1];

      if (currentVal0 === val0 && currentVal1 === val1) {
        return;
      }

      this.props.onBrush(val0, val1);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(StyledG, {
        className: "kg-range-slider__brush",
        ref: this.rootContainer
      });
    }
  }]);
  return RangeBrush;
}(_react.Component);

exports["default"] = RangeBrush;
(0, _defineProperty2["default"])(RangeBrush, "propTypes", {
  domain: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  onBrush: _propTypes["default"].func.isRequired,
  range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  width: _propTypes["default"].number.isRequired
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1icnVzaC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRHIiwic3R5bGVkIiwiZyIsInByb3BzIiwidGhlbWUiLCJyYW5nZUJydXNoQmdkIiwiUmFuZ2VCcnVzaCIsImJydXNoaW5nIiwibW92aW5nIiwicm9vdCIsInJvb3RDb250YWluZXIiLCJjdXJyZW50IiwiYnJ1c2giLCJvbiIsImV2ZW50Iiwic2VsZWN0aW9uIiwiX3Jlc2V0IiwiX2JydXNoIiwiY2FsbCIsInByZXZQcm9wcyIsInZhbHVlIiwidmFsMCIsInZhbDEiLCJ3aWR0aCIsInByZXZWYWwwIiwicHJldlZhbDEiLCJfbW92ZSIsInJhbmdlIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsIl9vbkJydXNoIiwiZG9tYWluIiwibWluIiwibWF4Iiwic2NhbGUiLCJ4IiwibW92ZSIsInNlbDAiLCJzZWwxIiwiaW52ZXJ0IiwiY3VycmVudFZhbDAiLCJjdXJyZW50VmFsMSIsIm9uQnJ1c2giLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyw2QkFBT0MsQ0FBVixvQkFHRCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGFBQWhCO0FBQUEsQ0FISixDQUFiOztJQVFxQkMsVTs7Ozs7Ozs7Ozs7Ozs7O3NHQWlFSCx1Qjs7Ozs7O3dDQXhESTtBQUFBOztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxXQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLEtBQWQ7QUFFQSxXQUFLQyxJQUFMLEdBQVkseUJBQU8sS0FBS0Ms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b3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtldmVudCwgc2VsZWN0fSBmcm9tICdkMy1zZWxlY3Rpb24nO1xyXG5pbXBvcnQge2JydXNoWH0gZnJvbSAnZDMtYnJ1c2gnO1xyXG5cclxuY29uc3QgU3R5bGVkRyA9IHN0eWxlZC5nYFxyXG4gIC5zZWxlY3Rpb24ge1xyXG4gICAgc3Ryb2tlOiBub25lO1xyXG4gICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5yYW5nZUJydXNoQmdkfTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VCcnVzaCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGRvbWFpbjogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcclxuICAgIG9uQnJ1c2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICByYW5nZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcclxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxyXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgLy8gV2Ugd2FudCB0aGUgUmVhY3QgYXBwIHRvIHJlc3BvbmQgdG8gYnJ1c2ggc3RhdGUgYW5kIHZpY2UtdmVyc2FcclxuICAgIC8vIGJ1dCBkMy1icnVzaCBmaXJlcyB0aGUgc2FtZSBldmVudHMgZm9yIGJvdGggdXNlci1pbml0aWF0ZWQgYnJ1c2hpbmdcclxuICAgIC8vIGFuZCBwcm9ncmFtbWF0aWMgYnJ1c2hpbmcgKGJydXNoLm1vdmUpLiBXZSBuZWVkIHRoZXNlIGZsYWdzIHRvXHJcbiAgICAvLyBkaXN0aW5ndWlzaCBiZXR3ZWVuIHRoZSB1c2VzLlxyXG4gICAgLy9cclxuICAgIC8vIFdlIGRvbid0IHVzZSBzdGF0ZSBiZWNhdXNlIHRoYXQgd291bGQgdHJpZ2dlciBhbm90aGVyIGBjb21wb25lbnREaWRVcGRhdGVgXHJcblxyXG4gICAgdGhpcy5icnVzaGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnJvb3QgPSBzZWxlY3QodGhpcy5yb290Q29udGFpbmVyLmN1cnJlbnQpO1xyXG4gICAgdGhpcy5icnVzaCA9IGJydXNoWCgpXHJcbiAgICAgIC5vbignc3RhcnQnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5icnVzaGluZyA9IHRydWU7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbignYnJ1c2gnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMubW92aW5nKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnNlbGVjdGlvbiA9PT0gbnVsbCA/IHRoaXMuX3Jlc2V0KCkgOiB0aGlzLl9icnVzaChldmVudC5zZWxlY3Rpb24pO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oJ2VuZCcsICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMubW92aW5nICYmIGV2ZW50LnNlbGVjdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5fcmVzZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYnJ1c2hpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLnJvb3QuY2FsbCh0aGlzLmJydXNoKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdmFsdWU6IFt2YWwwLCB2YWwxXSxcclxuICAgICAgd2lkdGhcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgW3ByZXZWYWwwLCBwcmV2VmFsMV0gPSBwcmV2UHJvcHMudmFsdWU7XHJcblxyXG4gICAgaWYgKHByZXZQcm9wcy53aWR0aCAhPT0gd2lkdGgpIHtcclxuICAgICAgLy8gd2lkdGggY2hhbmdlIHNob3VsZCBub3QgdHJpZ2dlciB0aGlzLl9icnVzaFxyXG4gICAgICB0aGlzLm1vdmluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMucm9vdC5jYWxsKHRoaXMuYnJ1c2gpO1xyXG4gICAgICB0aGlzLl9tb3ZlKHZhbDAsIHZhbDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5icnVzaGluZyAmJiAhdGhpcy5tb3ZpbmcpIHtcclxuICAgICAgaWYgKHByZXZWYWwwICE9PSB2YWwwIHx8IHByZXZWYWwxICE9PSB2YWwxKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX21vdmUodmFsMCwgdmFsMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJvb3RDb250YWluZXIgPSBjcmVhdGVSZWYoKTtcclxuXHJcbiAgX3Jlc2V0KCkge1xyXG4gICAgY29uc3QgW21pblZhbHVlLCBtYXhWYWx1ZV0gPSB0aGlzLnByb3BzLnJhbmdlO1xyXG4gICAgdGhpcy5fb25CcnVzaChtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgX21vdmUodmFsMCwgdmFsMSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBkb21haW46IFttaW4sIG1heF0sXHJcbiAgICAgIHdpZHRoXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHNjYWxlID0geCA9PiAoKHggLSBtaW4pICogd2lkdGgpIC8gKG1heCAtIG1pbik7XHJcbiAgICB0aGlzLmJydXNoLm1vdmUodGhpcy5yb290LCBbc2NhbGUodmFsMCksIHNjYWxlKHZhbDEpXSk7XHJcbiAgfVxyXG5cclxuICBfYnJ1c2goW3NlbDAsIHNlbDFdKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGRvbWFpbjogW21pbiwgbWF4XSxcclxuICAgICAgd2lkdGhcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgaW52ZXJ0ID0geCA9PiAoeCAqIChtYXggLSBtaW4pKSAvIHdpZHRoICsgbWluO1xyXG4gICAgdGhpcy5fb25CcnVzaChpbnZlcnQoc2VsMCksIGludmVydChzZWwxKSk7XHJcbiAgfVxyXG5cclxuICBfb25CcnVzaCh2YWwwLCB2YWwxKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHZhbHVlOiBbY3VycmVudFZhbDAsIGN1cnJlbnRWYWwxXVxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRWYWwwID09PSB2YWwwICYmIGN1cnJlbnRWYWwxID09PSB2YWwxKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb3BzLm9uQnJ1c2godmFsMCwgdmFsMSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8U3R5bGVkRyBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX2JydXNoXCIgcmVmPXt0aGlzLnJvb3RDb250YWluZXJ9IC8+O1xyXG4gIH1cclxufVxyXG4iXX0=