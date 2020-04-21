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

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  color: ", ";\n  font-size: 12px;\n  text-decoration: underline;\n\n  :hover {\n    cursor: pointer;\n    font-weight: 500;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColorLT;
});
/*
Inspired by https://github.com/okonet/react-dropzone/blob/master/src/index.js
*/


var UploadButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(UploadButton, _Component);

  var _super = _createSuper(UploadButton);

  function UploadButton() {
    var _this;

    (0, _classCallCheck2["default"])(this, UploadButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_fileInput", (0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClick", function () {
      _this._fileInput.current.value = null;

      _this._fileInput.current.click();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (_ref) {
      var files = _ref.target.files;

      if (!files) {
        return;
      }

      _this.props.onUpload(files);
    });
    return _this;
  }

  (0, _createClass2["default"])(UploadButton, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "file",
        ref: this._fileInput,
        style: {
          display: 'none'
        },
        onChange: this._onChange
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "file-upload__upload-button-span",
        onClick: this._onClick
      }, this.props.children));
    }
  }]);
  return UploadButton;
}(_react.Component);

exports["default"] = UploadButton;
(0, _defineProperty2["default"])(UploadButton, "propTypes", {
  onUpload: _propTypes["default"].func.isRequired
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL3VwbG9hZC1idXR0b24uanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3JMVCIsIlVwbG9hZEJ1dHRvbiIsIl9maWxlSW5wdXQiLCJjdXJyZW50IiwidmFsdWUiLCJjbGljayIsImZpbGVzIiwidGFyZ2V0Iiwib25VcGxvYWQiLCJkaXNwbGF5IiwiX29uQ2hhbmdlIiwiX29uQ2xpY2siLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLDZCQUFPQyxHQUFWLG9CQUVGLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBaEI7QUFBQSxDQUZILENBQWI7QUFXQTs7Ozs7SUFHcUJDLFk7Ozs7Ozs7Ozs7Ozs7OzttR0FLTix1QjtpR0FFRixZQUFNO0FBQ2YsWUFBS0MsVUFBTCxDQUFnQkMsT0FBaEIsQ0FBd0JDLEtBQXhCLEdBQWdDLElBQWhDOztBQUNBLFlBQUtGLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCRSxLQUF4QjtBQUNELEs7a0dBRVcsZ0JBQXVCO0FBQUEsVUFBWkMsS0FBWSxRQUFyQkMsTUFBcUIsQ0FBWkQsS0FBWTs7QUFDakMsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVjtBQUNEOztBQUVELFlBQUtSLEtBQUwsQ0FBV1UsUUFBWCxDQUFvQkYsS0FBcEI7QUFDRCxLOzs7Ozs7NkJBRVE7QUFDUCwwQkFDRSxnQ0FBQyxPQUFELHFCQUNFO0FBQ0UsUUFBQSxJQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUEsR0FBRyxFQUFFLEtBQUtKLFVBRlo7QUFHRSxRQUFBLEtBQUssRUFBRTtBQUFDTyxVQUFBQSxPQUFPLEVBQUU7QUFBVixTQUhUO0FBSUUsUUFBQSxRQUFRLEVBQUUsS0FBS0M7QUFKakIsUUFERixlQU9FO0FBQU0sUUFBQSxTQUFTLEVBQUMsaUNBQWhCO0FBQWtELFFBQUEsT0FBTyxFQUFFLEtBQUtDO0FBQWhFLFNBQ0csS0FBS2IsS0FBTCxDQUFXYyxRQURkLENBUEYsQ0FERjtBQWFEOzs7RUFsQ3VDQyxnQjs7O2lDQUFyQlosWSxlQUNBO0FBQ2pCTyxFQUFBQSxRQUFRLEVBQUVNLHNCQUFVQyxJQUFWLENBQWVDO0FBRFIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuYDtcclxuLypcclxuSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL29rb25ldC9yZWFjdC1kcm9wem9uZS9ibG9iL21hc3Rlci9zcmMvaW5kZXguanNcclxuKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgb25VcGxvYWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICB9O1xyXG5cclxuICBfZmlsZUlucHV0ID0gY3JlYXRlUmVmKCk7XHJcblxyXG4gIF9vbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fZmlsZUlucHV0LmN1cnJlbnQudmFsdWUgPSBudWxsO1xyXG4gICAgdGhpcy5fZmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBfb25DaGFuZ2UgPSAoe3RhcmdldDoge2ZpbGVzfX0pID0+IHtcclxuICAgIGlmICghZmlsZXMpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvcHMub25VcGxvYWQoZmlsZXMpO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgcmVmPXt0aGlzLl9maWxlSW5wdXR9XHJcbiAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZF9fdXBsb2FkLWJ1dHRvbi1zcGFuXCIgb25DbGljaz17dGhpcy5fb25DbGlja30+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvV3JhcHBlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==