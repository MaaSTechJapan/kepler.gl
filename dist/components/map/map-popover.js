"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapPopoverFactory;

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layerHoverInfo = _interopRequireDefault(require("./layer-hover-info"));

var _coordinateInfo = _interopRequireDefault(require("./coordinate-info"));

var _icons = require("../common/icons");

var _errorBoundary = _interopRequireDefault(require("../common/error-boundary"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  left: 50%;\n  transform: rotate(30deg);\n  top: 10px;\n  color: ", ";\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  font-size: 11px;\n  font-weight: 500;\n  background-color: ", ";\n  color: ", ";\n  z-index: 1001;\n  position: absolute;\n  overflow-x: auto;\n\n  .gutter {\n    height: 6px;\n  }\n\n  table {\n    margin: 2px 12px 12px 12px;\n    width: auto;\n\n    tbody {\n      border-top: transparent;\n      border-bottom: transparent;\n    }\n\n    td {\n      border-color: transparent;\n      padding: 4px;\n      color: ", ";\n    }\n\n    td.row__value {\n      text-align: right;\n      font-weight: 500;\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var MAX_WIDTH = 500;
var MAX_HEIGHT = 600;

var StyledMapPopover = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.scrollBar;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var StyledPin = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.linkBtnColor;
});

MapPopoverFactory.deps = [_layerHoverInfo["default"], _coordinateInfo["default"]];

function MapPopoverFactory(LayerHoverInfo, CoordinateInfo) {
  var MapPopover = /*#__PURE__*/function (_PureComponent) {
    (0, _inherits2["default"])(MapPopover, _PureComponent);

    var _super = _createSuper(MapPopover);

    function MapPopover(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, MapPopover);
      _this = _super.call(this, props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "popover", (0, _react.createRef)());
      _this.state = {
        width: 380,
        height: 160
      };
      return _this;
    }

    (0, _createClass2["default"])(MapPopover, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._setContainerSize();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this._setContainerSize();
      }
    }, {
      key: "_setContainerSize",
      value: function _setContainerSize() {
        var node = this.popover.current;

        if (!node) {
          return;
        }

        var width = Math.min(Math.round(node.scrollWidth), MAX_WIDTH);
        var height = Math.min(Math.round(node.scrollHeight), MAX_HEIGHT);

        if (width !== this.state.width || height !== this.state.height) {
          this.setState({
            width: width,
            height: height
          });
        }
      }
    }, {
      key: "_getPosition",
      value: function _getPosition(x, y) {
        var topOffset = 20;
        var leftOffset = 20;
        var _this$props = this.props,
            mapW = _this$props.mapW,
            mapH = _this$props.mapH;
        var _this$state = this.state,
            width = _this$state.width,
            height = _this$state.height;
        var pos = {};

        if (x + leftOffset + width > mapW) {
          pos.right = mapW - x + leftOffset;
        } else {
          pos.left = x + leftOffset;
        }

        if (y + topOffset + height > mapH) {
          pos.bottom = 10;
        } else {
          pos.top = y + topOffset;
        }

        return pos;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            x = _this$props2.x,
            y = _this$props2.y,
            freezed = _this$props2.freezed,
            coordinate = _this$props2.coordinate,
            layerHoverProp = _this$props2.layerHoverProp;
        var style = Number.isFinite(x) && Number.isFinite(y) ? this._getPosition(x, y) : {};
        return /*#__PURE__*/_react["default"].createElement(_errorBoundary["default"], null, /*#__PURE__*/_react["default"].createElement(StyledMapPopover, {
          ref: this.popover,
          className: "map-popover",
          style: _objectSpread({}, style, {
            maxWidth: MAX_WIDTH
          })
        }, freezed ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "map-popover__top"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "gutter"
        }), /*#__PURE__*/_react["default"].createElement(StyledPin, {
          className: "popover-pin",
          onClick: this.props.onClose
        }, /*#__PURE__*/_react["default"].createElement(_icons.Pin, {
          height: "16px"
        }))) : null, Array.isArray(coordinate) && /*#__PURE__*/_react["default"].createElement(CoordinateInfo, {
          coordinate: coordinate
        }), layerHoverProp && /*#__PURE__*/_react["default"].createElement(LayerHoverInfo, layerHoverProp)));
      }
    }]);
    return MapPopover;
  }(_react.PureComponent);

  (0, _defineProperty2["default"])(MapPopover, "propTypes", {
    layerHoverProp: _propTypes["default"].object,
    coordinate: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].bool]),
    freezed: _propTypes["default"].bool,
    x: _propTypes["default"].number,
    y: _propTypes["default"].number,
    mapW: _propTypes["default"].number.isRequired,
    mapH: _propTypes["default"].number.isRequired,
    onClose: _propTypes["default"].func.isRequired
  });
  return MapPopover;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtcG9wb3Zlci5qcyJdLCJuYW1lcyI6WyJNQVhfV0lEVEgiLCJNQVhfSEVJR0hUIiwiU3R5bGVkTWFwUG9wb3ZlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzY3JvbGxCYXIiLCJwYW5lbEJhY2tncm91bmQiLCJ0ZXh0Q29sb3IiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZFBpbiIsInByaW1hcnlCdG5CZ2QiLCJsaW5rQnRuQ29sb3IiLCJNYXBQb3BvdmVyRmFjdG9yeSIsImRlcHMiLCJMYXllckhvdmVySW5mb0ZhY3RvcnkiLCJDb29yZGluYXRlSW5mb0ZhY3RvcnkiLCJMYXllckhvdmVySW5mbyIsIkNvb3JkaW5hdGVJbmZvIiwiTWFwUG9wb3ZlciIsInN0YXRlIiwid2lkdGgiLCJoZWlnaHQiLCJfc2V0Q29udGFpbmVyU2l6ZSIsIm5vZGUiLCJwb3BvdmVyIiwiY3VycmVudCIsIk1hdGgiLCJtaW4iLCJyb3VuZCIsInNjcm9sbFdpZHRoIiwic2Nyb2xsSGVpZ2h0Iiwic2V0U3RhdGUiLCJ4IiwieSIsInRvcE9mZnNldCIsImxlZnRPZmZzZXQiLCJtYXBXIiwibWFwSCIsInBvcyIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInRvcCIsImZyZWV6ZWQiLCJjb29yZGluYXRlIiwibGF5ZXJIb3ZlclByb3AiLCJzdHlsZSIsIk51bWJlciIsImlzRmluaXRlIiwiX2dldFBvc2l0aW9uIiwibWF4V2lkdGgiLCJvbkNsb3NlIiwiQXJyYXkiLCJpc0FycmF5IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsIm9uZU9mVHlwZSIsImFycmF5IiwiYm9vbCIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7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bnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGF5ZXJIb3ZlckluZm9GYWN0b3J5IGZyb20gJy4vbGF5ZXItaG92ZXItaW5mbyc7XHJcbmltcG9ydCBDb29yZGluYXRlSW5mb0ZhY3RvcnkgZnJvbSAnLi9jb29yZGluYXRlLWluZm8nO1xyXG5pbXBvcnQge1Bpbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xyXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9lcnJvci1ib3VuZGFyeSc7XHJcblxyXG5jb25zdCBNQVhfV0lEVEggPSA1MDA7XHJcbmNvbnN0IE1BWF9IRUlHSFQgPSA2MDA7XHJcblxyXG5jb25zdCBTdHlsZWRNYXBQb3BvdmVyID0gc3R5bGVkLmRpdmBcclxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcm9sbEJhcn07XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgei1pbmRleDogMTAwMTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbiAgLmd1dHRlciB7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIG1hcmdpbjogMnB4IDEycHggMTJweCAxMnB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcblxyXG4gICAgdGJvZHkge1xyXG4gICAgICBib3JkZXItdG9wOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XHJcbiAgICB9XHJcblxyXG4gICAgdGQucm93X192YWx1ZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkUGluID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICB0b3A6IDEwcHg7XHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZH07XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5rQnRuQ29sb3J9O1xyXG4gIH1cclxuYDtcclxuXHJcbk1hcFBvcG92ZXJGYWN0b3J5LmRlcHMgPSBbTGF5ZXJIb3ZlckluZm9GYWN0b3J5LCBDb29yZGluYXRlSW5mb0ZhY3RvcnldO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwUG9wb3ZlckZhY3RvcnkoTGF5ZXJIb3ZlckluZm8sIENvb3JkaW5hdGVJbmZvKSB7XHJcbiAgY2xhc3MgTWFwUG9wb3ZlciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgbGF5ZXJIb3ZlclByb3A6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgIGNvb3JkaW5hdGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheSwgUHJvcFR5cGVzLmJvb2xdKSxcclxuICAgICAgZnJlZXplZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAgIHg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIHk6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgIG1hcFc6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgbWFwSDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxyXG4gICAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICB3aWR0aDogMzgwLFxyXG4gICAgICAgIGhlaWdodDogMTYwXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuX3NldENvbnRhaW5lclNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAgIHRoaXMuX3NldENvbnRhaW5lclNpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3BvdmVyID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gICAgX3NldENvbnRhaW5lclNpemUoKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnBvcG92ZXIuY3VycmVudDtcclxuICAgICAgaWYgKCFub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB3aWR0aCA9IE1hdGgubWluKE1hdGgucm91bmQobm9kZS5zY3JvbGxXaWR0aCksIE1BWF9XSURUSCk7XHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IE1hdGgubWluKE1hdGgucm91bmQobm9kZS5zY3JvbGxIZWlnaHQpLCBNQVhfSEVJR0hUKTtcclxuXHJcbiAgICAgIGlmICh3aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCB8fCBoZWlnaHQgIT09IHRoaXMuc3RhdGUuaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkdGgsIGhlaWdodH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2dldFBvc2l0aW9uKHgsIHkpIHtcclxuICAgICAgY29uc3QgdG9wT2Zmc2V0ID0gMjA7XHJcbiAgICAgIGNvbnN0IGxlZnRPZmZzZXQgPSAyMDtcclxuICAgICAgY29uc3Qge21hcFcsIG1hcEh9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgY29uc3QgcG9zID0ge307XHJcbiAgICAgIGlmICh4ICsgbGVmdE9mZnNldCArIHdpZHRoID4gbWFwVykge1xyXG4gICAgICAgIHBvcy5yaWdodCA9IG1hcFcgLSB4ICsgbGVmdE9mZnNldDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwb3MubGVmdCA9IHggKyBsZWZ0T2Zmc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoeSArIHRvcE9mZnNldCArIGhlaWdodCA+IG1hcEgpIHtcclxuICAgICAgICBwb3MuYm90dG9tID0gMTA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcG9zLnRvcCA9IHkgKyB0b3BPZmZzZXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7eCwgeSwgZnJlZXplZCwgY29vcmRpbmF0ZSwgbGF5ZXJIb3ZlclByb3B9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIGNvbnN0IHN0eWxlID0gTnVtYmVyLmlzRmluaXRlKHgpICYmIE51bWJlci5pc0Zpbml0ZSh5KSA/IHRoaXMuX2dldFBvc2l0aW9uKHgsIHkpIDoge307XHJcblxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFcnJvckJvdW5kYXJ5PlxyXG4gICAgICAgICAgPFN0eWxlZE1hcFBvcG92ZXJcclxuICAgICAgICAgICAgcmVmPXt0aGlzLnBvcG92ZXJ9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1wb3BvdmVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAuLi5zdHlsZSxcclxuICAgICAgICAgICAgICBtYXhXaWR0aDogTUFYX1dJRFRIXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtmcmVlemVkID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLXBvcG92ZXJfX3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndXR0ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFBpbiBjbGFzc05hbWU9XCJwb3BvdmVyLXBpblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxQaW4gaGVpZ2h0PVwiMTZweFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZFBpbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KGNvb3JkaW5hdGUpICYmIDxDb29yZGluYXRlSW5mbyBjb29yZGluYXRlPXtjb29yZGluYXRlfSAvPn1cclxuICAgICAgICAgICAge2xheWVySG92ZXJQcm9wICYmIDxMYXllckhvdmVySW5mbyB7Li4ubGF5ZXJIb3ZlclByb3B9IC8+fVxyXG4gICAgICAgICAgPC9TdHlsZWRNYXBQb3BvdmVyPlxyXG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBNYXBQb3BvdmVyO1xyXG59XHJcbiJdfQ==