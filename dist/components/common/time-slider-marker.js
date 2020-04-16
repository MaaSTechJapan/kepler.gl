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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Scale = require("d3-scale");

var _d3Selection = require("d3-selection");

var _d3Axis = require("d3-axis");

var _reselect = require("reselect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  .axis text {\n    font-size: 9px;\n    fill: ", ";\n  }\n\n  .axis line,\n  .axis path {\n    fill: none;\n    stroke: ", ";\n    shape-rendering: crispEdges;\n    stroke-width: 2;\n  }\n\n  .axis .domain {\n    display: none;\n  }\n\n  .value {\n    fill: ", ";\n    font-size: 10px;\n\n    &.start {\n      text-anchor: start;\n    }\n\n    &.end {\n      text-anchor: end;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TimeSliderContainer = _styledComponents["default"].svg(_templateObject(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return props.theme.textColor;
});

var height = 30;

var TimeSliderMarker = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TimeSliderMarker, _Component);

  var _super = _createSuper(TimeSliderMarker);

  function TimeSliderMarker() {
    var _this;

    (0, _classCallCheck2["default"])(this, TimeSliderMarker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "xAxis", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "domainSelector", function (props) {
      return props.domain;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "widthSelector", function (props) {
      return props.width;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleSelector", (0, _reselect.createSelector)(_this.domainSelector, _this.widthSelector, function (domain, width) {
      return Array.isArray(domain) ? (0, _d3Scale.scaleUtc)().domain(domain).range([0, width]) : null;
    }));
    return _this;
  }

  (0, _createClass2["default"])(TimeSliderMarker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._updateAxis(this.scaleSelector(this.props));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.scaleSelector(this.props) !== this.scaleSelector(prevProps)) {
        this._updateAxis(this.scaleSelector(this.props));
      }
    }
  }, {
    key: "_updateAxis",
    value: function _updateAxis(scale) {
      if (!scale) {
        return;
      }

      var xAxis = (0, _d3Axis.axisBottom)(scale).ticks(4).tickSize(8).tickPadding(6);
      (0, _d3Selection.select)(this.xAxis.current).call(xAxis);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(TimeSliderContainer, {
        className: "time-slider-marker",
        width: this.props.width,
        height: height
      }, /*#__PURE__*/_react["default"].createElement("g", {
        className: "x axis",
        ref: this.xAxis,
        transform: "translate(0, 0)"
      }));
    }
  }]);
  return TimeSliderMarker;
}(_react.Component);

exports["default"] = TimeSliderMarker;
(0, _defineProperty2["default"])(TimeSliderMarker, "propTypes", {
  domain: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  width: _propTypes["default"].number.isRequired
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90aW1lLXNsaWRlci1tYXJrZXIuanMiXSwibmFtZXMiOlsiVGltZVNsaWRlckNvbnRhaW5lciIsInN0eWxlZCIsInN2ZyIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3IiLCJzbGlkZXJCYXJCZ2QiLCJoZWlnaHQiLCJUaW1lU2xpZGVyTWFya2VyIiwiZG9tYWluIiwid2lkdGgiLCJkb21haW5TZWxlY3RvciIsIndpZHRoU2VsZWN0b3IiLCJBcnJheSIsImlzQXJyYXkiLCJyYW5nZSIsIl91cGRhdGVBeGlzIiwic2NhbGVTZWxlY3RvciIsInByZXZQcm9wcyIsInNjYWxlIiwieEF4aXMiLCJ0aWNrcyIsInRpY2tTaXplIiwidGlja1BhZGRpbmciLCJjdXJyZW50IiwiY2FsbCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJpc1JlcXVpcmVkIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBR0MsNkJBQU9DLEdBQVYsb0JBTWIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxTQUFoQjtBQUFBLENBTlEsRUFZWCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFlBQWhCO0FBQUEsQ0FaTSxFQXNCYixVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQWhCO0FBQUEsQ0F0QlEsQ0FBekI7O0FBbUNBLElBQU1FLE1BQU0sR0FBRyxFQUFmOztJQUVxQkMsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs4RkFnQlgsdUI7dUdBRVMsVUFBQUwsS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ00sTUFBVjtBQUFBLEs7c0dBQ04sVUFBQU4sS0FBSztBQUFBLGFBQUlBLEtBQUssQ0FBQ08sS0FBVjtBQUFBLEs7c0dBQ0wsOEJBQWUsTUFBS0MsY0FBcEIsRUFBb0MsTUFBS0MsYUFBekMsRUFBd0QsVUFBQ0gsTUFBRCxFQUFTQyxLQUFUO0FBQUEsYUFDdEVHLEtBQUssQ0FBQ0MsT0FBTixDQUFjTCxNQUFkLElBQ0kseUJBQ0dBLE1BREgsQ0FDVUEsTUFEVixFQUVHTSxLQUZILENBRVMsQ0FBQyxDQUFELEVBQUlMLEtBQUosQ0FGVCxDQURKLEdBSUksSUFMa0U7QUFBQSxLQUF4RCxDOzs7Ozs7d0NBZEk7QUFDbEIsV0FBS00sV0FBTCxDQUFpQixLQUFLQyxhQUFMLENBQW1CLEtBQUtkLEtBQXhCLENBQWpCO0FBQ0Q7Ozt1Q0FFa0JlLFMsRUFBVztBQUM1QixVQUFJLEtBQUtELGFBQUwsQ0FBbUIsS0FBS2QsS0FBeEIsTUFBbUMsS0FBS2MsYUFBTCxDQUFtQkMsU0FBbkIsQ0FBdkMsRUFBc0U7QUFDcEUsYUFBS0YsV0FBTCxDQUFpQixLQUFLQyxhQUFMLENBQW1CLEtBQUtkLEtBQXhCLENBQWpCO0FBQ0Q7QUFDRjs7O2dDQWNXZ0IsSyxFQUFPO0FBQ2pCLFVBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1Y7QUFDRDs7QUFDRCxVQUFNQyxLQUFLLEdBQUcsd0JBQVdELEtBQVgsRUFDWEUsS0FEVyxDQUNMLENBREssRUFFWEMsUUFGVyxDQUVGLENBRkUsRUFHWEMsV0FIVyxDQUdDLENBSEQsQ0FBZDtBQUtBLCtCQUFPLEtBQUtILEtBQUwsQ0FBV0ksT0FBbEIsRUFBMkJDLElBQTNCLENBQWdDTCxLQUFoQztBQUNEOzs7NkJBRVE7QUFDUCwwQkFDRSxnQ0FBQyxtQkFBRDtBQUFxQixRQUFBLFNBQVMsRUFBQyxvQkFBL0I7QUFBb0QsUUFBQSxLQUFLLEVBQUUsS0FBS2pCLEtBQUwsQ0FBV08sS0FBdEU7QUFBNkUsUUFBQSxNQUFNLEVBQUVIO0FBQXJGLHNCQUNFO0FBQUcsUUFBQSxTQUFTLEVBQUMsUUFBYjtBQUFzQixRQUFBLEdBQUcsRUFBRSxLQUFLYSxLQUFoQztBQUF1QyxRQUFBLFNBQVMsRUFBQztBQUFqRCxRQURGLENBREY7QUFLRDs7O0VBOUMyQ00sZ0I7OztpQ0FBekJsQixnQixlQUNBO0FBQ2pCQyxFQUFBQSxNQUFNLEVBQUVrQixzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLEdBQTVCLEVBQWlDQyxVQUR4QjtBQUVqQnBCLEVBQUFBLEtBQUssRUFBRWlCLHNCQUFVSSxNQUFWLENBQWlCRDtBQUZQLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7c2NhbGVVdGN9IGZyb20gJ2QzLXNjYWxlJztcbmltcG9ydCB7c2VsZWN0fSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHtheGlzQm90dG9tfSBmcm9tICdkMy1heGlzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBUaW1lU2xpZGVyQ29udGFpbmVyID0gc3R5bGVkLnN2Z2BcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICAuYXhpcyB0ZXh0IHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIH1cblxuICAuYXhpcyBsaW5lLFxuICAuYXhpcyBwYXRoIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJCYXJCZ2R9O1xuICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcbiAgICBzdHJva2Utd2lkdGg6IDI7XG4gIH1cblxuICAuYXhpcyAuZG9tYWluIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnZhbHVlIHtcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgZm9udC1zaXplOiAxMHB4O1xuXG4gICAgJi5zdGFydCB7XG4gICAgICB0ZXh0LWFuY2hvcjogc3RhcnQ7XG4gICAgfVxuXG4gICAgJi5lbmQge1xuICAgICAgdGV4dC1hbmNob3I6IGVuZDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGhlaWdodCA9IDMwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lU2xpZGVyTWFya2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBkb21haW46IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX3VwZGF0ZUF4aXModGhpcy5zY2FsZVNlbGVjdG9yKHRoaXMucHJvcHMpKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5zY2FsZVNlbGVjdG9yKHRoaXMucHJvcHMpICE9PSB0aGlzLnNjYWxlU2VsZWN0b3IocHJldlByb3BzKSkge1xuICAgICAgdGhpcy5fdXBkYXRlQXhpcyh0aGlzLnNjYWxlU2VsZWN0b3IodGhpcy5wcm9wcykpO1xuICAgIH1cbiAgfVxuXG4gIHhBeGlzID0gY3JlYXRlUmVmKCk7XG5cbiAgZG9tYWluU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5kb21haW47XG4gIHdpZHRoU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy53aWR0aDtcbiAgc2NhbGVTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZG9tYWluU2VsZWN0b3IsIHRoaXMud2lkdGhTZWxlY3RvciwgKGRvbWFpbiwgd2lkdGgpID0+XG4gICAgQXJyYXkuaXNBcnJheShkb21haW4pXG4gICAgICA/IHNjYWxlVXRjKClcbiAgICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSlcbiAgICAgIDogbnVsbFxuICApO1xuXG4gIF91cGRhdGVBeGlzKHNjYWxlKSB7XG4gICAgaWYgKCFzY2FsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB4QXhpcyA9IGF4aXNCb3R0b20oc2NhbGUpXG4gICAgICAudGlja3MoNClcbiAgICAgIC50aWNrU2l6ZSg4KVxuICAgICAgLnRpY2tQYWRkaW5nKDYpO1xuXG4gICAgc2VsZWN0KHRoaXMueEF4aXMuY3VycmVudCkuY2FsbCh4QXhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaW1lU2xpZGVyQ29udGFpbmVyIGNsYXNzTmFtZT1cInRpbWUtc2xpZGVyLW1hcmtlclwiIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIDxnIGNsYXNzTmFtZT1cInggYXhpc1wiIHJlZj17dGhpcy54QXhpc30gdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAsIDApXCIgLz5cbiAgICAgIDwvVGltZVNsaWRlckNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG4iXX0=