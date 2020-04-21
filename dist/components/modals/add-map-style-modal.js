"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactMapGl = _interopRequireDefault(require("react-map-gl"));

var _styledComponents2 = require("../common/styled-components");

var _mediaBreakpoints = require("../../styles/media-breakpoints");

var _mapboxUtils = require("../../utils/map-style-utils/mapbox-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 500;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 4px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.18);\n  width: ", "px;\n  height: ", "px;\n  position: relative;\n\n  .preview-image-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  .preview-image-spinner {\n    position: absolute;\n    left: calc(50% - 25px);\n    top: calc(50% - 25px);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: unset;\n    .preview-title {\n      margin-top: 0px;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 32px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 116px;\n  flex-shrink: 0;\n\n  .preview-title {\n    font-weight: 500;\n    font-size: 10px;\n    padding: 8px 0px;\n  }\n\n  .preview-title.error {\n    color: ", ";\n  }\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var MapH = 190;
var MapW = 264;
var ErrorMsg = {
  styleError: 'Failed to load map style, make sure it is published. For private style, paste in your access token.'
};

var PreviewMap = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.errorColor;
}, _mediaBreakpoints.media.portable(_templateObject2()), _mediaBreakpoints.media.palm(_templateObject3()));

var StyledPreviewImage = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.modalImagePlaceHolder;
}, MapW, MapH);

var InlineLink = _styledComponents["default"].a(_templateObject5());

function AddMapStyleModalFactory() {
  var AddMapStyleModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(AddMapStyleModal, _Component);

    var _super = _createSuper(AddMapStyleModal);

    function AddMapStyleModal() {
      var _this;

      (0, _classCallCheck2["default"])(this, AddMapStyleModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        reRenderKey: 0,
        previousToken: null
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadMapStyleJson", function (style) {
        _this.props.loadCustomMapStyle({
          style: style,
          error: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadMapStyleError", function () {
        _this.props.loadCustomMapStyle({
          error: true
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(AddMapStyleModal, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var _this2 = this;

        var map = this.mapRef && this.mapRef.getMap();

        if (map && this._map !== map) {
          this._map = map;
          map.on('style.load', function () {
            var style = map.getStyle();

            _this2.loadMapStyleJson(style);
          });
          map.on('error', function () {
            _this2.loadMaoStyleError();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props = this.props,
            inputStyle = _this$props.inputStyle,
            mapState = _this$props.mapState,
            mapboxApiUrl = _this$props.mapboxApiUrl;
        var mapboxApiAccessToken = inputStyle.accessToken || this.props.mapboxApiAccessToken;

        var mapProps = _objectSpread({}, mapState, {
          mapboxApiUrl: mapboxApiUrl,
          mapboxApiAccessToken: mapboxApiAccessToken,
          preserveDrawingBuffer: true,
          transformRequest: _mapboxUtils.transformRequest
        });

        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "add-map-style-modal"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalVerticalPanel, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-title"
        }, "1. Publish your style at mapbox or provide access token"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-subtitle"
        }, "You can create your own map style at", /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/studio/styles/"
        }, ' ', "mapbox"), ' ', "and", /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/help/studio-manual-publish/"
        }, ' ', "publish"), ' ', "it."), /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-subtitle"
        }, "To use private style, paste your", /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/help/how-access-tokens-work/"
        }, ' ', "access token"), ' ', "here. *kepler.gl is a client-side application, data stays in your browser.."), /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
          type: "text",
          value: inputStyle.accessToken || '',
          onChange: function onChange(_ref) {
            var value = _ref.target.value;
            return _this3.props.inputMapStyle({
              accessToken: value
            });
          },
          placeholder: "e.g. pk.abcdefg.xxxxxx"
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-title"
        }, "2. Paste style url"), /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-subtitle"
        }, "What is a", /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/help/studio-manual-publish/#style-url"
        }, ' ', "style URL")), /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
          type: "text",
          value: inputStyle.url || '',
          onChange: function onChange(_ref2) {
            var value = _ref2.target.value;
            return _this3.props.inputMapStyle({
              url: value
            });
          },
          placeholder: "e.g. mapbox://styles/uberdataviz/abcdefghijklmnopq"
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-title"
        }, "3. Name your style"), /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
          type: "text",
          value: inputStyle.label || '',
          onChange: function onChange(_ref3) {
            var value = _ref3.target.value;
            return _this3.props.inputMapStyle({
              label: value
            });
          }
        }))), /*#__PURE__*/_react["default"].createElement(PreviewMap, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])('preview-title', {
            error: inputStyle.error
          })
        }, inputStyle.error ? ErrorMsg.styleError : inputStyle.style && inputStyle.style.name || ''), /*#__PURE__*/_react["default"].createElement(StyledPreviewImage, {
          className: "preview-image"
        }, !inputStyle.isValid ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "preview-image-spinner"
        }) : /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledMapContainer, null, /*#__PURE__*/_react["default"].createElement(_reactMapGl["default"], (0, _extends2["default"])({}, mapProps, {
          ref: function ref(el) {
            _this3.mapRef = el;
          },
          key: this.state.reRenderKey,
          width: MapW,
          height: MapH,
          mapStyle: inputStyle.url
        })))))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if (props.inputStyle && props.inputStyle.accessToken && props.inputStyle.accessToken !== state.previousToken) {
          // toke has changed
          // ReactMapGl doesn't re-create map when token has changed
          // here we force the map to update
          return {
            reRenderKey: state.reRenderKey + 1,
            previousToken: props.inputStyle.accessToken
          };
        }

        return null;
      }
    }]);
    return AddMapStyleModal;
  }(_react.Component);

  (0, _defineProperty2["default"])(AddMapStyleModal, "propTypes", {
    inputMapStyle: _propTypes["default"].func.isRequired,
    inputStyle: _propTypes["default"].object.isRequired,
    loadCustomMapStyle: _propTypes["default"].func.isRequired,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapboxApiUrl: _propTypes["default"].string.isRequired,
    mapState: _propTypes["default"].object.isRequired
  });
  return (0, _reactLifecyclesCompat.polyfill)(AddMapStyleModal);
}

var _default = AddMapStyleModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9hZGQtbWFwLXN0eWxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbIk1hcEgiLCJNYXBXIiwiRXJyb3JNc2ciLCJzdHlsZUVycm9yIiwiUHJldmlld01hcCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJlcnJvckNvbG9yIiwibWVkaWEiLCJwb3J0YWJsZSIsInBhbG0iLCJTdHlsZWRQcmV2aWV3SW1hZ2UiLCJtb2RhbEltYWdlUGxhY2VIb2xkZXIiLCJJbmxpbmVMaW5rIiwiYSIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IiwiQWRkTWFwU3R5bGVNb2RhbCIsInJlUmVuZGVyS2V5IiwicHJldmlvdXNUb2tlbiIsInN0eWxlIiwibG9hZEN1c3RvbU1hcFN0eWxlIiwiZXJyb3IiLCJtYXAiLCJtYXBSZWYiLCJnZXRNYXAiLCJfbWFwIiwib24iLCJnZXRTdHlsZSIsImxvYWRNYXBTdHlsZUpzb24iLCJsb2FkTWFvU3R5bGVFcnJvciIsImlucHV0U3R5bGUiLCJtYXBTdGF0ZSIsIm1hcGJveEFwaVVybCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJtYXBQcm9wcyIsInByZXNlcnZlRHJhd2luZ0J1ZmZlciIsInRyYW5zZm9ybVJlcXVlc3QiLCJ2YWx1ZSIsInRhcmdldCIsImlucHV0TWFwU3R5bGUiLCJ1cmwiLCJsYWJlbCIsIm5hbWUiLCJpc1ZhbGlkIiwiZWwiLCJzdGF0ZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFPQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLEdBQWI7QUFDQSxJQUFNQyxJQUFJLEdBQUcsR0FBYjtBQUNBLElBQU1DLFFBQVEsR0FBRztBQUNmQyxFQUFBQSxVQUFVLEVBQ1I7QUFGYSxDQUFqQjs7QUFLQSxJQUFNQyxVQUFVLEdBQUdDLDZCQUFPQyxHQUFWLG9CQWVILFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBaEI7QUFBQSxDQWZGLEVBa0JaQyx3QkFBTUMsUUFsQk0sc0JBc0JaRCx3QkFBTUUsSUF0Qk0scUJBQWhCOztBQThCQSxJQUFNQyxrQkFBa0IsR0FBR1IsNkJBQU9DLEdBQVYscUJBQ1IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxxQkFBaEI7QUFBQSxDQURHLEVBSWJiLElBSmEsRUFLWkQsSUFMWSxDQUF4Qjs7QUFxQkEsSUFBTWUsVUFBVSxHQUFHViw2QkFBT1csQ0FBVixvQkFBaEI7O0FBUUEsU0FBU0MsdUJBQVQsR0FBbUM7QUFBQSxNQUMzQkMsZ0JBRDJCO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxnR0FXdkI7QUFDTkMsUUFBQUEsV0FBVyxFQUFFLENBRFA7QUFFTkMsUUFBQUEsYUFBYSxFQUFFO0FBRlQsT0FYdUI7QUFBQSwyR0FtRFosVUFBQUMsS0FBSyxFQUFJO0FBQzFCLGNBQUtkLEtBQUwsQ0FBV2Usa0JBQVgsQ0FBOEI7QUFBQ0QsVUFBQUEsS0FBSyxFQUFMQSxLQUFEO0FBQVFFLFVBQUFBLEtBQUssRUFBRTtBQUFmLFNBQTlCO0FBQ0QsT0FyRDhCO0FBQUEsNEdBdURYLFlBQU07QUFDeEIsY0FBS2hCLEtBQUwsQ0FBV2Usa0JBQVgsQ0FBOEI7QUFBQ0MsVUFBQUEsS0FBSyxFQUFFO0FBQVIsU0FBOUI7QUFDRCxPQXpEOEI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwyQ0FtQ1Y7QUFBQTs7QUFDbkIsWUFBTUMsR0FBRyxHQUFHLEtBQUtDLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVlDLE1BQVosRUFBM0I7O0FBQ0EsWUFBSUYsR0FBRyxJQUFJLEtBQUtHLElBQUwsS0FBY0gsR0FBekIsRUFBOEI7QUFDNUIsZUFBS0csSUFBTCxHQUFZSCxHQUFaO0FBRUFBLFVBQUFBLEdBQUcsQ0FBQ0ksRUFBSixDQUFPLFlBQVAsRUFBcUIsWUFBTTtBQUN6QixnQkFBTVAsS0FBSyxHQUFHRyxHQUFHLENBQUNLLFFBQUosRUFBZDs7QUFDQSxZQUFBLE1BQUksQ0FBQ0MsZ0JBQUwsQ0FBc0JULEtBQXRCO0FBQ0QsV0FIRDtBQUtBRyxVQUFBQSxHQUFHLENBQUNJLEVBQUosQ0FBTyxPQUFQLEVBQWdCLFlBQU07QUFDcEIsWUFBQSxNQUFJLENBQUNHLGlCQUFMO0FBQ0QsV0FGRDtBQUdEO0FBQ0Y7QUFqRDhCO0FBQUE7QUFBQSwrQkEyRHRCO0FBQUE7O0FBQUEsMEJBQ3NDLEtBQUt4QixLQUQzQztBQUFBLFlBQ0F5QixVQURBLGVBQ0FBLFVBREE7QUFBQSxZQUNZQyxRQURaLGVBQ1lBLFFBRFo7QUFBQSxZQUNzQkMsWUFEdEIsZUFDc0JBLFlBRHRCO0FBR1AsWUFBTUMsb0JBQW9CLEdBQUdILFVBQVUsQ0FBQ0ksV0FBWCxJQUEwQixLQUFLN0IsS0FBTCxDQUFXNEIsb0JBQWxFOztBQUNBLFlBQU1FLFFBQVEscUJBQ1RKLFFBRFM7QUFFWkMsVUFBQUEsWUFBWSxFQUFaQSxZQUZZO0FBR1pDLFVBQUFBLG9CQUFvQixFQUFwQkEsb0JBSFk7QUFJWkcsVUFBQUEscUJBQXFCLEVBQUUsSUFKWDtBQUtaQyxVQUFBQSxnQkFBZ0IsRUFBaEJBO0FBTFksVUFBZDs7QUFRQSw0QkFDRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsd0JBQ0UsZ0NBQUMscUNBQUQscUJBQ0UsZ0NBQUMsMkNBQUQscUJBQ0UsZ0NBQUMscUNBQUQscUJBQ0U7QUFBSyxVQUFBLFNBQVMsRUFBQztBQUFmLHFFQURGLGVBSUU7QUFBSyxVQUFBLFNBQVMsRUFBQztBQUFmLGdFQUVFLGdDQUFDLFVBQUQ7QUFBWSxVQUFBLE1BQU0sRUFBQyxRQUFuQjtBQUE0QixVQUFBLElBQUksRUFBQztBQUFqQyxXQUNHLEdBREgsV0FGRixFQUtnQixHQUxoQixzQkFPRSxnQ0FBQyxVQUFEO0FBQ0UsVUFBQSxNQUFNLEVBQUMsUUFEVDtBQUVFLFVBQUEsSUFBSSxFQUFDO0FBRlAsV0FJRyxHQUpILFlBUEYsRUFhZ0IsR0FiaEIsUUFKRixlQW9CRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsNERBRUUsZ0NBQUMsVUFBRDtBQUNFLFVBQUEsTUFBTSxFQUFDLFFBRFQ7QUFFRSxVQUFBLElBQUksRUFBQztBQUZQLFdBSUcsR0FKSCxpQkFGRixFQVFnQixHQVJoQixnRkFwQkYsZUErQkUsZ0NBQUMsNkJBQUQ7QUFDRSxVQUFBLElBQUksRUFBQyxNQURQO0FBRUUsVUFBQSxLQUFLLEVBQUVQLFVBQVUsQ0FBQ0ksV0FBWCxJQUEwQixFQUZuQztBQUdFLFVBQUEsUUFBUSxFQUFFO0FBQUEsZ0JBQVdJLEtBQVgsUUFBRUMsTUFBRixDQUFXRCxLQUFYO0FBQUEsbUJBQXVCLE1BQUksQ0FBQ2pDLEtBQUwsQ0FBV21DLGFBQVgsQ0FBeUI7QUFBQ04sY0FBQUEsV0FBVyxFQUFFSTtBQUFkLGFBQXpCLENBQXZCO0FBQUEsV0FIWjtBQUlFLFVBQUEsV0FBVyxFQUFDO0FBSmQsVUEvQkYsQ0FERixlQXVDRSxnQ0FBQyxxQ0FBRCxxQkFDRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsZ0NBREYsZUFFRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYscUNBRUUsZ0NBQUMsVUFBRDtBQUNFLFVBQUEsTUFBTSxFQUFDLFFBRFQ7QUFFRSxVQUFBLElBQUksRUFBQztBQUZQLFdBSUcsR0FKSCxjQUZGLENBRkYsZUFZRSxnQ0FBQyw2QkFBRDtBQUNFLFVBQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFBLEtBQUssRUFBRVIsVUFBVSxDQUFDVyxHQUFYLElBQWtCLEVBRjNCO0FBR0UsVUFBQSxRQUFRLEVBQUU7QUFBQSxnQkFBV0gsS0FBWCxTQUFFQyxNQUFGLENBQVdELEtBQVg7QUFBQSxtQkFBdUIsTUFBSSxDQUFDakMsS0FBTCxDQUFXbUMsYUFBWCxDQUF5QjtBQUFDQyxjQUFBQSxHQUFHLEVBQUVIO0FBQU4sYUFBekIsQ0FBdkI7QUFBQSxXQUhaO0FBSUUsVUFBQSxXQUFXLEVBQUM7QUFKZCxVQVpGLENBdkNGLGVBMERFLGdDQUFDLHFDQUFELHFCQUNFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixnQ0FERixlQUVFLGdDQUFDLDZCQUFEO0FBQ0UsVUFBQSxJQUFJLEVBQUMsTUFEUDtBQUVFLFVBQUEsS0FBSyxFQUFFUixVQUFVLENBQUNZLEtBQVgsSUFBb0IsRUFGN0I7QUFHRSxVQUFBLFFBQVEsRUFBRTtBQUFBLGdCQUFXSixLQUFYLFNBQUVDLE1BQUYsQ0FBV0QsS0FBWDtBQUFBLG1CQUF1QixNQUFJLENBQUNqQyxLQUFMLENBQVdtQyxhQUFYLENBQXlCO0FBQUNFLGNBQUFBLEtBQUssRUFBRUo7QUFBUixhQUF6QixDQUF2QjtBQUFBO0FBSFosVUFGRixDQTFERixDQURGLGVBb0VFLGdDQUFDLFVBQUQscUJBQ0U7QUFDRSxVQUFBLFNBQVMsRUFBRSw0QkFBVyxlQUFYLEVBQTRCO0FBQ3JDakIsWUFBQUEsS0FBSyxFQUFFUyxVQUFVLENBQUNUO0FBRG1CLFdBQTVCO0FBRGIsV0FLR1MsVUFBVSxDQUFDVCxLQUFYLEdBQ0dyQixRQUFRLENBQUNDLFVBRFosR0FFSTZCLFVBQVUsQ0FBQ1gsS0FBWCxJQUFvQlcsVUFBVSxDQUFDWCxLQUFYLENBQWlCd0IsSUFBdEMsSUFBK0MsRUFQckQsQ0FERixlQVVFLGdDQUFDLGtCQUFEO0FBQW9CLFVBQUEsU0FBUyxFQUFDO0FBQTlCLFdBQ0csQ0FBQ2IsVUFBVSxDQUFDYyxPQUFaLGdCQUNDO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZixVQURELGdCQUdDLGdDQUFDLHFDQUFELHFCQUNFLGdDQUFDLHNCQUFELGdDQUNNVCxRQUROO0FBRUUsVUFBQSxHQUFHLEVBQUUsYUFBQVUsRUFBRSxFQUFJO0FBQ1QsWUFBQSxNQUFJLENBQUN0QixNQUFMLEdBQWNzQixFQUFkO0FBQ0QsV0FKSDtBQUtFLFVBQUEsR0FBRyxFQUFFLEtBQUtDLEtBQUwsQ0FBVzdCLFdBTGxCO0FBTUUsVUFBQSxLQUFLLEVBQUVsQixJQU5UO0FBT0UsVUFBQSxNQUFNLEVBQUVELElBUFY7QUFRRSxVQUFBLFFBQVEsRUFBRWdDLFVBQVUsQ0FBQ1c7QUFSdkIsV0FERixDQUpKLENBVkYsQ0FwRUYsQ0FERixDQURGO0FBc0dEO0FBN0s4QjtBQUFBO0FBQUEsK0NBZ0JDcEMsS0FoQkQsRUFnQlF5QyxLQWhCUixFQWdCZTtBQUM1QyxZQUNFekMsS0FBSyxDQUFDeUIsVUFBTixJQUNBekIsS0FBSyxDQUFDeUIsVUFBTixDQUFpQkksV0FEakIsSUFFQTdCLEtBQUssQ0FBQ3lCLFVBQU4sQ0FBaUJJLFdBQWpCLEtBQWlDWSxLQUFLLENBQUM1QixhQUh6QyxFQUlFO0FBQ0E7QUFDQTtBQUNBO0FBRUEsaUJBQU87QUFDTEQsWUFBQUEsV0FBVyxFQUFFNkIsS0FBSyxDQUFDN0IsV0FBTixHQUFvQixDQUQ1QjtBQUVMQyxZQUFBQSxhQUFhLEVBQUViLEtBQUssQ0FBQ3lCLFVBQU4sQ0FBaUJJO0FBRjNCLFdBQVA7QUFJRDs7QUFFRCxlQUFPLElBQVA7QUFDRDtBQWpDOEI7QUFBQTtBQUFBLElBQ0ZhLGdCQURFOztBQUFBLG1DQUMzQi9CLGdCQUQyQixlQUVaO0FBQ2pCd0IsSUFBQUEsYUFBYSxFQUFFUSxzQkFBVUMsSUFBVixDQUFlQyxVQURiO0FBRWpCcEIsSUFBQUEsVUFBVSxFQUFFa0Isc0JBQVVHLE1BQVYsQ0FBaUJELFVBRlo7QUFHakI5QixJQUFBQSxrQkFBa0IsRUFBRTRCLHNCQUFVQyxJQUFWLENBQWVDLFVBSGxCO0FBSWpCakIsSUFBQUEsb0JBQW9CLEVBQUVlLHNCQUFVSSxNQUFWLENBQWlCRixVQUp0QjtBQUtqQmxCLElBQUFBLFlBQVksRUFBRWdCLHNCQUFVSSxNQUFWLENBQWlCRixVQUxkO0FBTWpCbkIsSUFBQUEsUUFBUSxFQUFFaUIsc0JBQVVHLE1BQVYsQ0FBaUJEO0FBTlYsR0FGWTtBQWdMakMsU0FBTyxxQ0FBU2xDLGdCQUFULENBQVA7QUFDRDs7ZUFFY0QsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtwb2x5ZmlsbH0gZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBNYXBib3hHTE1hcCBmcm9tICdyZWFjdC1tYXAtZ2wnO1xyXG5pbXBvcnQge1xyXG4gIFN0eWxlZE1vZGFsQ29udGVudCxcclxuICBJbnB1dExpZ2h0LFxyXG4gIFN0eWxlZE1hcENvbnRhaW5lcixcclxuICBTdHlsZWRNb2RhbFZlcnRpY2FsUGFuZWwsXHJcbiAgU3R5bGVkTW9kYWxTZWN0aW9uXHJcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQge21lZGlhfSBmcm9tICdzdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMnO1xyXG5cclxuLy8gVXRpbHNcclxuaW1wb3J0IHt0cmFuc2Zvcm1SZXF1ZXN0fSBmcm9tICd1dGlscy9tYXAtc3R5bGUtdXRpbHMvbWFwYm94LXV0aWxzJztcclxuXHJcbmNvbnN0IE1hcEggPSAxOTA7XHJcbmNvbnN0IE1hcFcgPSAyNjQ7XHJcbmNvbnN0IEVycm9yTXNnID0ge1xyXG4gIHN0eWxlRXJyb3I6XHJcbiAgICAnRmFpbGVkIHRvIGxvYWQgbWFwIHN0eWxlLCBtYWtlIHN1cmUgaXQgaXMgcHVibGlzaGVkLiBGb3IgcHJpdmF0ZSBzdHlsZSwgcGFzdGUgaW4geW91ciBhY2Nlc3MgdG9rZW4uJ1xyXG59O1xyXG5cclxuY29uc3QgUHJldmlld01hcCA9IHN0eWxlZC5kaXZgXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDExNnB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAucHJldmlldy10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDBweDtcclxuICB9XHJcblxyXG4gIC5wcmV2aWV3LXRpdGxlLmVycm9yIHtcclxuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmVycm9yQ29sb3J9O1xyXG4gIH1cclxuXHJcbiAgJHttZWRpYS5wb3J0YWJsZWBcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gIGB9O1xyXG5cclxuICAke21lZGlhLnBhbG1gXHJcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XHJcbiAgICAucHJldmlldy10aXRsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICBgfTtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFByZXZpZXdJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbEltYWdlUGxhY2VIb2xkZXJ9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KTtcclxuICB3aWR0aDogJHtNYXBXfXB4O1xyXG4gIGhlaWdodDogJHtNYXBIfXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnByZXZpZXctaW1hZ2UtcGxhY2Vob2xkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC5wcmV2aWV3LWltYWdlLXNwaW5uZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAyNXB4KTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbmxpbmVMaW5rID0gc3R5bGVkLmFgXHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeSgpIHtcclxuICBjbGFzcyBBZGRNYXBTdHlsZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgIGlucHV0TWFwU3R5bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgIGlucHV0U3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICAgICAgbG9hZEN1c3RvbU1hcFN0eWxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBtYXBib3hBcGlVcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgbWFwU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgcmVSZW5kZXJLZXk6IDAsXHJcbiAgICAgIHByZXZpb3VzVG9rZW46IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHByb3BzLmlucHV0U3R5bGUgJiZcclxuICAgICAgICBwcm9wcy5pbnB1dFN0eWxlLmFjY2Vzc1Rva2VuICYmXHJcbiAgICAgICAgcHJvcHMuaW5wdXRTdHlsZS5hY2Nlc3NUb2tlbiAhPT0gc3RhdGUucHJldmlvdXNUb2tlblxyXG4gICAgICApIHtcclxuICAgICAgICAvLyB0b2tlIGhhcyBjaGFuZ2VkXHJcbiAgICAgICAgLy8gUmVhY3RNYXBHbCBkb2Vzbid0IHJlLWNyZWF0ZSBtYXAgd2hlbiB0b2tlbiBoYXMgY2hhbmdlZFxyXG4gICAgICAgIC8vIGhlcmUgd2UgZm9yY2UgdGhlIG1hcCB0byB1cGRhdGVcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHJlUmVuZGVyS2V5OiBzdGF0ZS5yZVJlbmRlcktleSArIDEsXHJcbiAgICAgICAgICBwcmV2aW91c1Rva2VuOiBwcm9wcy5pbnB1dFN0eWxlLmFjY2Vzc1Rva2VuXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xyXG4gICAgICBjb25zdCBtYXAgPSB0aGlzLm1hcFJlZiAmJiB0aGlzLm1hcFJlZi5nZXRNYXAoKTtcclxuICAgICAgaWYgKG1hcCAmJiB0aGlzLl9tYXAgIT09IG1hcCkge1xyXG4gICAgICAgIHRoaXMuX21hcCA9IG1hcDtcclxuXHJcbiAgICAgICAgbWFwLm9uKCdzdHlsZS5sb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSBtYXAuZ2V0U3R5bGUoKTtcclxuICAgICAgICAgIHRoaXMubG9hZE1hcFN0eWxlSnNvbihzdHlsZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1hcC5vbignZXJyb3InLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRNYW9TdHlsZUVycm9yKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkTWFwU3R5bGVKc29uID0gc3R5bGUgPT4ge1xyXG4gICAgICB0aGlzLnByb3BzLmxvYWRDdXN0b21NYXBTdHlsZSh7c3R5bGUsIGVycm9yOiBmYWxzZX0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBsb2FkTWFwU3R5bGVFcnJvciA9ICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wcy5sb2FkQ3VzdG9tTWFwU3R5bGUoe2Vycm9yOiB0cnVlfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3Qge2lucHV0U3R5bGUsIG1hcFN0YXRlLCBtYXBib3hBcGlVcmx9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgIGNvbnN0IG1hcGJveEFwaUFjY2Vzc1Rva2VuID0gaW5wdXRTdHlsZS5hY2Nlc3NUb2tlbiB8fCB0aGlzLnByb3BzLm1hcGJveEFwaUFjY2Vzc1Rva2VuO1xyXG4gICAgICBjb25zdCBtYXBQcm9wcyA9IHtcclxuICAgICAgICAuLi5tYXBTdGF0ZSxcclxuICAgICAgICBtYXBib3hBcGlVcmwsXHJcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXHJcbiAgICAgICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zZm9ybVJlcXVlc3RcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtbWFwLXN0eWxlLW1vZGFsXCI+XHJcbiAgICAgICAgICA8U3R5bGVkTW9kYWxDb250ZW50PlxyXG4gICAgICAgICAgICA8U3R5bGVkTW9kYWxWZXJ0aWNhbFBhbmVsPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRNb2RhbFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgMS4gUHVibGlzaCB5b3VyIHN0eWxlIGF0IG1hcGJveCBvciBwcm92aWRlIGFjY2VzcyB0b2tlblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tc3VidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgWW91IGNhbiBjcmVhdGUgeW91ciBvd24gbWFwIHN0eWxlIGF0XHJcbiAgICAgICAgICAgICAgICAgIDxJbmxpbmVMaW5rIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL3N0dWRpby9zdHlsZXMvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICBtYXBib3hcclxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVMaW5rPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgIGFuZFxyXG4gICAgICAgICAgICAgICAgICA8SW5saW5lTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vaGVscC9zdHVkaW8tbWFudWFsLXB1Ymxpc2gvXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgcHVibGlzaFxyXG4gICAgICAgICAgICAgICAgICA8L0lubGluZUxpbms+eycgJ31cclxuICAgICAgICAgICAgICAgICAgaXQuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi1zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICBUbyB1c2UgcHJpdmF0ZSBzdHlsZSwgcGFzdGUgeW91clxyXG4gICAgICAgICAgICAgICAgICA8SW5saW5lTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vaGVscC9ob3ctYWNjZXNzLXRva2Vucy13b3JrL1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIGFjY2VzcyB0b2tlblxyXG4gICAgICAgICAgICAgICAgICA8L0lubGluZUxpbms+eycgJ31cclxuICAgICAgICAgICAgICAgICAgaGVyZS4gKmtlcGxlci5nbCBpcyBhIGNsaWVudC1zaWRlIGFwcGxpY2F0aW9uLCBkYXRhIHN0YXlzIGluIHlvdXIgYnJvd3Nlci4uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExpZ2h0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0U3R5bGUuYWNjZXNzVG9rZW4gfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldDoge3ZhbHVlfX0pID0+IHRoaXMucHJvcHMuaW5wdXRNYXBTdHlsZSh7YWNjZXNzVG9rZW46IHZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBway5hYmNkZWZnLnh4eHh4eFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvU3R5bGVkTW9kYWxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDxTdHlsZWRNb2RhbFNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj4yLiBQYXN0ZSBzdHlsZSB1cmw8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi1zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICBXaGF0IGlzIGFcclxuICAgICAgICAgICAgICAgICAgPElubGluZUxpbmtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL2hlbHAvc3R1ZGlvLW1hbnVhbC1wdWJsaXNoLyNzdHlsZS11cmxcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSBVUkxcclxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVMaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMaWdodFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFN0eWxlLnVybCB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0OiB7dmFsdWV9fSkgPT4gdGhpcy5wcm9wcy5pbnB1dE1hcFN0eWxlKHt1cmw6IHZhbHVlfSl9XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBtYXBib3g6Ly9zdHlsZXMvdWJlcmRhdGF2aXovYWJjZGVmZ2hpamtsbW5vcHFcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1N0eWxlZE1vZGFsU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8U3R5bGVkTW9kYWxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXRpdGxlXCI+My4gTmFtZSB5b3VyIHN0eWxlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMaWdodFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFN0eWxlLmxhYmVsIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXQ6IHt2YWx1ZX19KSA9PiB0aGlzLnByb3BzLmlucHV0TWFwU3R5bGUoe2xhYmVsOiB2YWx1ZX0pfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1N0eWxlZE1vZGFsU2VjdGlvbj5cclxuICAgICAgICAgICAgPC9TdHlsZWRNb2RhbFZlcnRpY2FsUGFuZWw+XHJcbiAgICAgICAgICAgIDxQcmV2aWV3TWFwPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncHJldmlldy10aXRsZScsIHtcclxuICAgICAgICAgICAgICAgICAgZXJyb3I6IGlucHV0U3R5bGUuZXJyb3JcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpbnB1dFN0eWxlLmVycm9yXHJcbiAgICAgICAgICAgICAgICAgID8gRXJyb3JNc2cuc3R5bGVFcnJvclxyXG4gICAgICAgICAgICAgICAgICA6IChpbnB1dFN0eWxlLnN0eWxlICYmIGlucHV0U3R5bGUuc3R5bGUubmFtZSkgfHwgJyd9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZFByZXZpZXdJbWFnZSBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICB7IWlucHV0U3R5bGUuaXNWYWxpZCA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlLXNwaW5uZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFN0eWxlZE1hcENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFwYm94R0xNYXBcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5tYXBQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcFJlZiA9IGVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5zdGF0ZS5yZVJlbmRlcktleX1cclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtNYXBXfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtNYXBIfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFwU3R5bGU9e2lucHV0U3R5bGUudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkTWFwQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1N0eWxlZFByZXZpZXdJbWFnZT5cclxuICAgICAgICAgICAgPC9QcmV2aWV3TWFwPlxyXG4gICAgICAgICAgPC9TdHlsZWRNb2RhbENvbnRlbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcG9seWZpbGwoQWRkTWFwU3R5bGVNb2RhbCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5O1xyXG4iXX0=