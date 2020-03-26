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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9hZGQtbWFwLXN0eWxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbIk1hcEgiLCJNYXBXIiwiRXJyb3JNc2ciLCJzdHlsZUVycm9yIiwiUHJldmlld01hcCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJlcnJvckNvbG9yIiwibWVkaWEiLCJwb3J0YWJsZSIsInBhbG0iLCJTdHlsZWRQcmV2aWV3SW1hZ2UiLCJtb2RhbEltYWdlUGxhY2VIb2xkZXIiLCJJbmxpbmVMaW5rIiwiYSIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IiwiQWRkTWFwU3R5bGVNb2RhbCIsInJlUmVuZGVyS2V5IiwicHJldmlvdXNUb2tlbiIsInN0eWxlIiwibG9hZEN1c3RvbU1hcFN0eWxlIiwiZXJyb3IiLCJtYXAiLCJtYXBSZWYiLCJnZXRNYXAiLCJfbWFwIiwib24iLCJnZXRTdHlsZSIsImxvYWRNYXBTdHlsZUpzb24iLCJsb2FkTWFvU3R5bGVFcnJvciIsImlucHV0U3R5bGUiLCJtYXBTdGF0ZSIsIm1hcGJveEFwaVVybCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJtYXBQcm9wcyIsInByZXNlcnZlRHJhd2luZ0J1ZmZlciIsInRyYW5zZm9ybVJlcXVlc3QiLCJ2YWx1ZSIsInRhcmdldCIsImlucHV0TWFwU3R5bGUiLCJ1cmwiLCJsYWJlbCIsIm5hbWUiLCJpc1ZhbGlkIiwiZWwiLCJzdGF0ZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFPQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEs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LE1BQVYsQ0FBaUJEO0FBTlYsR0FGWTtBQWdMakMsU0FBTyxxQ0FBU2xDLGdCQUFULENBQVA7QUFDRDs7ZUFFY0QsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cG9seWZpbGx9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1hcGJveEdMTWFwIGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5pbXBvcnQge1xuICBTdHlsZWRNb2RhbENvbnRlbnQsXG4gIElucHV0TGlnaHQsXG4gIFN0eWxlZE1hcENvbnRhaW5lcixcbiAgU3R5bGVkTW9kYWxWZXJ0aWNhbFBhbmVsLFxuICBTdHlsZWRNb2RhbFNlY3Rpb25cbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHttZWRpYX0gZnJvbSAnc3R5bGVzL21lZGlhLWJyZWFrcG9pbnRzJztcblxuLy8gVXRpbHNcbmltcG9ydCB7dHJhbnNmb3JtUmVxdWVzdH0gZnJvbSAndXRpbHMvbWFwLXN0eWxlLXV0aWxzL21hcGJveC11dGlscyc7XG5cbmNvbnN0IE1hcEggPSAxOTA7XG5jb25zdCBNYXBXID0gMjY0O1xuY29uc3QgRXJyb3JNc2cgPSB7XG4gIHN0eWxlRXJyb3I6XG4gICAgJ0ZhaWxlZCB0byBsb2FkIG1hcCBzdHlsZSwgbWFrZSBzdXJlIGl0IGlzIHB1Ymxpc2hlZC4gRm9yIHByaXZhdGUgc3R5bGUsIHBhc3RlIGluIHlvdXIgYWNjZXNzIHRva2VuLidcbn07XG5cbmNvbnN0IFByZXZpZXdNYXAgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDExNnB4O1xuICBmbGV4LXNocmluazogMDtcblxuICAucHJldmlldy10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgfVxuXG4gIC5wcmV2aWV3LXRpdGxlLmVycm9yIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5lcnJvckNvbG9yfTtcbiAgfVxuXG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIGB9O1xuXG4gICR7bWVkaWEucGFsbWBcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgLnByZXZpZXctdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgYH07XG5gO1xuXG5jb25zdCBTdHlsZWRQcmV2aWV3SW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsSW1hZ2VQbGFjZUhvbGRlcn07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIHdpZHRoOiAke01hcFd9cHg7XG4gIGhlaWdodDogJHtNYXBIfXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnByZXZpZXctaW1hZ2UtcGxhY2Vob2xkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLXNwaW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1cHgpO1xuICAgIHRvcDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgfVxuYDtcblxuY29uc3QgSW5saW5lTGluayA9IHN0eWxlZC5hYFxuICBmb250LXdlaWdodDogNTAwO1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeSgpIHtcbiAgY2xhc3MgQWRkTWFwU3R5bGVNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGlucHV0TWFwU3R5bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBpbnB1dFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsb2FkQ3VzdG9tTWFwU3R5bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbWFwYm94QXBpVXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIHN0YXRlID0ge1xuICAgICAgcmVSZW5kZXJLZXk6IDAsXG4gICAgICBwcmV2aW91c1Rva2VuOiBudWxsXG4gICAgfTtcblxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmlucHV0U3R5bGUgJiZcbiAgICAgICAgcHJvcHMuaW5wdXRTdHlsZS5hY2Nlc3NUb2tlbiAmJlxuICAgICAgICBwcm9wcy5pbnB1dFN0eWxlLmFjY2Vzc1Rva2VuICE9PSBzdGF0ZS5wcmV2aW91c1Rva2VuXG4gICAgICApIHtcbiAgICAgICAgLy8gdG9rZSBoYXMgY2hhbmdlZFxuICAgICAgICAvLyBSZWFjdE1hcEdsIGRvZXNuJ3QgcmUtY3JlYXRlIG1hcCB3aGVuIHRva2VuIGhhcyBjaGFuZ2VkXG4gICAgICAgIC8vIGhlcmUgd2UgZm9yY2UgdGhlIG1hcCB0byB1cGRhdGVcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlUmVuZGVyS2V5OiBzdGF0ZS5yZVJlbmRlcktleSArIDEsXG4gICAgICAgICAgcHJldmlvdXNUb2tlbjogcHJvcHMuaW5wdXRTdHlsZS5hY2Nlc3NUb2tlblxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBjb25zdCBtYXAgPSB0aGlzLm1hcFJlZiAmJiB0aGlzLm1hcFJlZi5nZXRNYXAoKTtcbiAgICAgIGlmIChtYXAgJiYgdGhpcy5fbWFwICE9PSBtYXApIHtcbiAgICAgICAgdGhpcy5fbWFwID0gbWFwO1xuXG4gICAgICAgIG1hcC5vbignc3R5bGUubG9hZCcsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IG1hcC5nZXRTdHlsZSgpO1xuICAgICAgICAgIHRoaXMubG9hZE1hcFN0eWxlSnNvbihzdHlsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1hcC5vbignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkTWFvU3R5bGVFcnJvcigpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkTWFwU3R5bGVKc29uID0gc3R5bGUgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sb2FkQ3VzdG9tTWFwU3R5bGUoe3N0eWxlLCBlcnJvcjogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgbG9hZE1hcFN0eWxlRXJyb3IgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmxvYWRDdXN0b21NYXBTdHlsZSh7ZXJyb3I6IHRydWV9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2lucHV0U3R5bGUsIG1hcFN0YXRlLCBtYXBib3hBcGlVcmx9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgbWFwYm94QXBpQWNjZXNzVG9rZW4gPSBpbnB1dFN0eWxlLmFjY2Vzc1Rva2VuIHx8IHRoaXMucHJvcHMubWFwYm94QXBpQWNjZXNzVG9rZW47XG4gICAgICBjb25zdCBtYXBQcm9wcyA9IHtcbiAgICAgICAgLi4ubWFwU3RhdGUsXG4gICAgICAgIG1hcGJveEFwaVVybCxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgdHJhbnNmb3JtUmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtbWFwLXN0eWxlLW1vZGFsXCI+XG4gICAgICAgICAgPFN0eWxlZE1vZGFsQ29udGVudD5cbiAgICAgICAgICAgIDxTdHlsZWRNb2RhbFZlcnRpY2FsUGFuZWw+XG4gICAgICAgICAgICAgIDxTdHlsZWRNb2RhbFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAxLiBQdWJsaXNoIHlvdXIgc3R5bGUgYXQgbWFwYm94IG9yIHByb3ZpZGUgYWNjZXNzIHRva2VuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICBZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBtYXAgc3R5bGUgYXRcbiAgICAgICAgICAgICAgICAgIDxJbmxpbmVMaW5rIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL3N0dWRpby9zdHlsZXMvXCI+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIG1hcGJveFxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVMaW5rPnsnICd9XG4gICAgICAgICAgICAgICAgICBhbmRcbiAgICAgICAgICAgICAgICAgIDxJbmxpbmVMaW5rXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL2hlbHAvc3R1ZGlvLW1hbnVhbC1wdWJsaXNoL1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIHB1Ymxpc2hcbiAgICAgICAgICAgICAgICAgIDwvSW5saW5lTGluaz57JyAnfVxuICAgICAgICAgICAgICAgICAgaXQuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICBUbyB1c2UgcHJpdmF0ZSBzdHlsZSwgcGFzdGUgeW91clxuICAgICAgICAgICAgICAgICAgPElubGluZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vaGVscC9ob3ctYWNjZXNzLXRva2Vucy13b3JrL1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIGFjY2VzcyB0b2tlblxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVMaW5rPnsnICd9XG4gICAgICAgICAgICAgICAgICBoZXJlLiAqa2VwbGVyLmdsIGlzIGEgY2xpZW50LXNpZGUgYXBwbGljYXRpb24sIGRhdGEgc3RheXMgaW4geW91ciBicm93c2VyLi5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8SW5wdXRMaWdodFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0U3R5bGUuYWNjZXNzVG9rZW4gfHwgJyd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXQ6IHt2YWx1ZX19KSA9PiB0aGlzLnByb3BzLmlucHV0TWFwU3R5bGUoe2FjY2Vzc1Rva2VuOiB2YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIHBrLmFiY2RlZmcueHh4eHh4XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L1N0eWxlZE1vZGFsU2VjdGlvbj5cbiAgICAgICAgICAgICAgPFN0eWxlZE1vZGFsU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj4yLiBQYXN0ZSBzdHlsZSB1cmw8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIFdoYXQgaXMgYVxuICAgICAgICAgICAgICAgICAgPElubGluZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vaGVscC9zdHVkaW8tbWFudWFsLXB1Ymxpc2gvI3N0eWxlLXVybFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlIFVSTFxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxJbnB1dExpZ2h0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRTdHlsZS51cmwgfHwgJyd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXQ6IHt2YWx1ZX19KSA9PiB0aGlzLnByb3BzLmlucHV0TWFwU3R5bGUoe3VybDogdmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBtYXBib3g6Ly9zdHlsZXMvdWJlcmRhdGF2aXovYWJjZGVmZ2hpamtsbW5vcHFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkTW9kYWxTZWN0aW9uPlxuICAgICAgICAgICAgICA8U3R5bGVkTW9kYWxTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi10aXRsZVwiPjMuIE5hbWUgeW91ciBzdHlsZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxJbnB1dExpZ2h0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRTdHlsZS5sYWJlbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldDoge3ZhbHVlfX0pID0+IHRoaXMucHJvcHMuaW5wdXRNYXBTdHlsZSh7bGFiZWw6IHZhbHVlfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRNb2RhbFNlY3Rpb24+XG4gICAgICAgICAgICA8L1N0eWxlZE1vZGFsVmVydGljYWxQYW5lbD5cbiAgICAgICAgICAgIDxQcmV2aWV3TWFwPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdwcmV2aWV3LXRpdGxlJywge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IGlucHV0U3R5bGUuZXJyb3JcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpbnB1dFN0eWxlLmVycm9yXG4gICAgICAgICAgICAgICAgICA/IEVycm9yTXNnLnN0eWxlRXJyb3JcbiAgICAgICAgICAgICAgICAgIDogKGlucHV0U3R5bGUuc3R5bGUgJiYgaW5wdXRTdHlsZS5zdHlsZS5uYW1lKSB8fCAnJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxTdHlsZWRQcmV2aWV3SW1hZ2UgY2xhc3NOYW1lPVwicHJldmlldy1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIHshaW5wdXRTdHlsZS5pc1ZhbGlkID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlLXNwaW5uZXJcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkTWFwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TWFwYm94R0xNYXBcbiAgICAgICAgICAgICAgICAgICAgICB7Li4ubWFwUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcFJlZiA9IGVsO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnN0YXRlLnJlUmVuZGVyS2V5fVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtNYXBXfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17TWFwSH1cbiAgICAgICAgICAgICAgICAgICAgICBtYXBTdHlsZT17aW5wdXRTdHlsZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZE1hcENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1N0eWxlZFByZXZpZXdJbWFnZT5cbiAgICAgICAgICAgIDwvUHJldmlld01hcD5cbiAgICAgICAgICA8L1N0eWxlZE1vZGFsQ29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2x5ZmlsbChBZGRNYXBTdHlsZU1vZGFsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkTWFwU3R5bGVNb2RhbEZhY3Rvcnk7XG4iXX0=