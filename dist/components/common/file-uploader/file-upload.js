"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUpload = exports["default"] = exports.WarningMsg = void 0;

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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _uploadButton = _interopRequireDefault(require("./upload-button"));

var _icons = require("../icons");

var _loadingSpinner = _interopRequireDefault(require("../loading-spinner"));

var _fileDrop = _interopRequireDefault(require("./file-drop"));

var _utils = require("../../../utils/utils");

var _userGuides = require("../../../constants/user-guides");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _mediaBreakpoints = require("../../../styles/media-breakpoints");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0 auto;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 24px;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 32px;\n  ", ";\n  ", "\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n\n  .loading-action {\n    margin-right: 10px;\n  }\n  .loading-spinner {\n    margin-left: 10px;\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .filter-upload__input {\n    visibility: hidden;\n    height: 0;\n    position: absolute;\n  }\n\n  .file-drop {\n    position: relative;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 24px;\n  ", ";\n  ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  margin-bottom: 48px;\n\n  ", ";\n  ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 20px;\n  height: 36px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 16px 4px 0;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: white;\n  border-radius: 4px;\n  border-style: dashed;\n  border-width: 1px;\n  border-color: ", ";\n  text-align: center;\n  width: 100%;\n  padding: 48px 8px 0;\n\n  .file-upload-or {\n    color: ", ";\n    padding-right: 4px;\n  }\n\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  color: ", ";\n  font-weight: 500;\n  margin-right: 8px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 10px;\n  color: ", ";\n  font-weight: 500;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 12px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: 12px;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// File.type is not reliable if the OS does not have a
// registered mapping for the extension.
// NOTE: Shapefiles must be in a compressed format since
// it requires multiple files to be present.
var defaultValidFileExt = ['csv', 'json', 'geojson'];
var MESSAGE = ' Drag & Drop Your File(s) Here';
var CHROME_MSG = '*Chrome user: Limit file size to 250mb, if need to upload larger file, try Safari';
var DISCLAIMER = '*kepler.gl is a client-side application with no server backend. Data lives only on your machine/browser. ' + 'No information or map data is sent to any server.';
var CONFIG_UPLOAD_MESSAGE = "Upload **CSV**, **GeoJson** or saved map **Json**. Read more about [**supported file formats**](".concat(_userGuides.GUIDES_FILE_FORMAT, ").");
var fileIconColor = '#D3D8E0';

var LinkRenderer = function LinkRenderer(props) {
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.children);
};

var StyledUploadMessage = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.textColorLT;
}, _mediaBreakpoints.media.portable(_templateObject2()));

var WarningMsg = _styledComponents["default"].span(_templateObject3(), function (props) {
  return props.theme.errorColor;
});

exports.WarningMsg = WarningMsg;

var PositiveMsg = _styledComponents["default"].span(_templateObject4(), function (props) {
  return props.theme.primaryBtnActBgd;
});

var StyledFileDrop = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.subtextColorLT;
}, function (props) {
  return props.theme.linkBtnColor;
}, _mediaBreakpoints.media.portable(_templateObject6()));

var MsgWrapper = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.theme.modalTitleColor;
});

var StyledDragNDropIcon = _styledComponents["default"].div(_templateObject8(), fileIconColor, _mediaBreakpoints.media.portable(_templateObject9()), _mediaBreakpoints.media.palm(_templateObject10()));

var StyledFileTypeFow = _styledComponents["default"].div(_templateObject11(), _mediaBreakpoints.media.portable(_templateObject12()), _mediaBreakpoints.media.palm(_templateObject13()));

var StyledFileUpload = _styledComponents["default"].div(_templateObject14());

var StyledMessage = _styledComponents["default"].div(_templateObject15());

var StyledDragFileWrapper = _styledComponents["default"].div(_templateObject16(), _mediaBreakpoints.media.portable(_templateObject17()), _mediaBreakpoints.media.portable(_templateObject18()));

var StyledDisclaimer = (0, _styledComponents["default"])(StyledMessage)(_templateObject19());

function FileUploadFactory() {
  var FileUpload = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(FileUpload, _Component);

    var _super = _createSuper(FileUpload);

    function FileUpload() {
      var _this;

      (0, _classCallCheck2["default"])(this, FileUpload);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        dragOver: false,
        fileLoading: false,
        files: [],
        errorFiles: []
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "frame", (0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isValidFileType", function (filename) {
        var validFileExt = _this.props.validFileExt;
        var fileExt = validFileExt.find(function (ext) {
          return filename.endsWith(ext);
        });
        return Boolean(fileExt);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFileInput", function (files, e) {
        if (e) {
          e.stopPropagation();
        }

        var nextState = {
          files: [],
          errorFiles: [],
          dragOver: false
        };

        for (var i = 0; i < files.length; i++) {
          var file = files[i];

          if (file && _this._isValidFileType(file.name)) {
            nextState.files.push(file);
          } else {
            nextState.errorFiles.push(file.name);
          }
        }

        _this.setState(nextState, function () {
          return nextState.files.length ? _this.props.onFileUpload(nextState.files) : null;
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleDragState", function (newState) {
        _this.setState({
          dragOver: newState
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(FileUpload, [{
      key: "_renderMessage",
      value: function _renderMessage() {
        var _this$state = this.state,
            errorFiles = _this$state.errorFiles,
            files = _this$state.files;

        if (errorFiles.length) {
          return /*#__PURE__*/_react["default"].createElement(WarningMsg, null, "File ".concat(errorFiles.join(', '), " is not supported."));
        } else if (this.props.fileLoading && files.length) {
          return /*#__PURE__*/_react["default"].createElement(StyledMessage, {
            className: "file-uploader__message"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "loading-action"
          }, "Uploading"), /*#__PURE__*/_react["default"].createElement("div", null, files.map(function (f, i) {
            return /*#__PURE__*/_react["default"].createElement(PositiveMsg, {
              key: i
            }, f.name);
          }), "..."), /*#__PURE__*/_react["default"].createElement("div", {
            className: "loading-spinner"
          }, /*#__PURE__*/_react["default"].createElement(_loadingSpinner["default"], {
            size: 20
          })));
        }

        return null;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state2 = this.state,
            dragOver = _this$state2.dragOver,
            files = _this$state2.files;
        var validFileExt = this.props.validFileExt;
        return /*#__PURE__*/_react["default"].createElement(StyledFileUpload, {
          className: "file-uploader",
          ref: this.frame
        }, /*#__PURE__*/_react["default"].createElement("input", {
          className: "filter-upload__input",
          type: "file",
          onChange: this._onChange
        }), _fileDrop["default"] ? /*#__PURE__*/_react["default"].createElement(_fileDrop["default"], {
          frame: this.frame.current || document,
          onDragOver: function onDragOver() {
            return _this2._toggleDragState(true);
          },
          onDragLeave: function onDragLeave() {
            return _this2._toggleDragState(false);
          },
          onDrop: this._handleFileInput,
          className: "file-uploader__file-drop"
        }, /*#__PURE__*/_react["default"].createElement(StyledUploadMessage, {
          className: "file-upload__message"
        }, /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
          source: CONFIG_UPLOAD_MESSAGE,
          renderers: {
            link: LinkRenderer
          }
        })), /*#__PURE__*/_react["default"].createElement(StyledFileDrop, {
          dragOver: dragOver
        }, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            opacity: dragOver ? 0.5 : 1
          }
        }, /*#__PURE__*/_react["default"].createElement(StyledDragNDropIcon, null, /*#__PURE__*/_react["default"].createElement(StyledFileTypeFow, {
          className: "file-type-row"
        }, validFileExt.map(function (ext) {
          return /*#__PURE__*/_react["default"].createElement(_icons.FileType, {
            key: ext,
            ext: ext,
            height: "50px",
            fontSize: "9px"
          });
        })), /*#__PURE__*/_react["default"].createElement(_icons.DragNDrop, {
          height: "44px"
        })), /*#__PURE__*/_react["default"].createElement("div", null, this._renderMessage())), !files.length ? /*#__PURE__*/_react["default"].createElement(StyledDragFileWrapper, null, /*#__PURE__*/_react["default"].createElement(MsgWrapper, null, MESSAGE), /*#__PURE__*/_react["default"].createElement("span", {
          className: "file-upload-or"
        }, "or"), /*#__PURE__*/_react["default"].createElement(_uploadButton["default"], {
          onUpload: this._handleFileInput
        }, "browse your files")) : null, /*#__PURE__*/_react["default"].createElement(StyledDisclaimer, null, DISCLAIMER))) : null, /*#__PURE__*/_react["default"].createElement(WarningMsg, null, (0, _utils.isChrome)() ? CHROME_MSG : ''));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if (state.fileLoading && props.fileLoading === false && state.files.length) {
          return {
            files: [],
            fileLoading: props.fileLoading
          };
        }

        return {
          fileLoading: props.fileLoading
        };
      }
    }]);
    return FileUpload;
  }(_react.Component);

  (0, _defineProperty2["default"])(FileUpload, "propTypes", {
    onFileUpload: _propTypes["default"].func.isRequired,
    validFileExt: _propTypes["default"].arrayOf(_propTypes["default"].string),
    fileLoading: _propTypes["default"].bool
  });
  (0, _defineProperty2["default"])(FileUpload, "defaultProps", {
    validFileExt: defaultValidFileExt
  });
  return (0, _reactLifecyclesCompat.polyfill)(FileUpload);
}

var _default = FileUploadFactory;
exports["default"] = _default;
var FileUpload = FileUploadFactory();
exports.FileUpload = FileUpload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkLmpzIl0sIm5hbWVzIjpbImRlZmF1bHRWYWxpZEZpbGVFeHQiLCJNRVNTQUdFIiwiQ0hST01FX01TRyIsIkRJU0NMQUlNRVIiLCJDT05GSUdfVVBMT0FEX01FU1NBR0UiLCJHVUlERVNfRklMRV9GT1JNQVQiLCJmaWxlSWNvbkNvbG9yIiwiTGlua1JlbmRlcmVyIiwicHJvcHMiLCJocmVmIiwiY2hpbGRyZW4iLCJTdHlsZWRVcGxvYWRNZXNzYWdlIiwic3R5bGVkIiwiZGl2IiwidGhlbWUiLCJ0ZXh0Q29sb3JMVCIsIm1lZGlhIiwicG9ydGFibGUiLCJXYXJuaW5nTXNnIiwic3BhbiIsImVycm9yQ29sb3IiLCJQb3NpdGl2ZU1zZyIsInByaW1hcnlCdG5BY3RCZ2QiLCJTdHlsZWRGaWxlRHJvcCIsInN1YnRleHRDb2xvckxUIiwibGlua0J0bkNvbG9yIiwiTXNnV3JhcHBlciIsIm1vZGFsVGl0bGVDb2xvciIsIlN0eWxlZERyYWdORHJvcEljb24iLCJwYWxtIiwiU3R5bGVkRmlsZVR5cGVGb3ciLCJTdHlsZWRGaWxlVXBsb2FkIiwiU3R5bGVkTWVzc2FnZSIsIlN0eWxlZERyYWdGaWxlV3JhcHBlciIsIlN0eWxlZERpc2NsYWltZXIiLCJGaWxlVXBsb2FkRmFjdG9yeSIsIkZpbGVVcGxvYWQiLCJkcmFnT3ZlciIsImZpbGVMb2FkaW5nIiwiZmlsZXMiLCJlcnJvckZpbGVzIiwiZmlsZW5hbWUiLCJ2YWxpZEZpbGVFeHQiLCJmaWxlRXh0IiwiZmluZCIsImV4dCIsImVuZHNXaXRoIiwiQm9vbGVhbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJuZXh0U3RhdGUiLCJpIiwibGVuZ3RoIiwiZmlsZSIsIl9pc1ZhbGlkRmlsZVR5cGUiLCJuYW1lIiwicHVzaCIsInNldFN0YXRlIiwib25GaWxlVXBsb2FkIiwibmV3U3RhdGUiLCJzdGF0ZSIsImpvaW4iLCJtYXAiLCJmIiwiZnJhbWUiLCJfb25DaGFuZ2UiLCJGaWxlRHJvcCIsImN1cnJlbnQiLCJkb2N1bWVudCIsIl90b2dnbGVEcmFnU3RhdGUiLCJfaGFuZGxlRmlsZUlucHV0IiwibGluayIsIm9wYWNpdHkiLCJfcmVuZGVyTWVzc2FnZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsInN0cmluZyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsbUJBQW1CLEdBQUcsQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFnQixTQUFoQixDQUE1QjtBQUVBLElBQU1DLE9BQU8sR0FBRyxnQ0FBaEI7QUFDQSxJQUFNQyxVQUFVLEdBQ2QsbUZBREY7QUFFQSxJQUFNQyxVQUFVLEdBQ2QsOEdBQ0EsbURBRkY7QUFHQSxJQUFNQyxxQkFBcUIsNkdBQXNHQyw4QkFBdEcsT0FBM0I7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBdEI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsS0FBSyxFQUFJO0FBQzVCLHNCQUNFO0FBQUcsSUFBQSxJQUFJLEVBQUVBLEtBQUssQ0FBQ0MsSUFBZjtBQUFxQixJQUFBLE1BQU0sRUFBQyxRQUE1QjtBQUFxQyxJQUFBLEdBQUcsRUFBQztBQUF6QyxLQUNH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LGdDQUFDLGdCQUFELFFBQW1CbkUsVUFBbkIsQ0FuQkYsQ0FWRixDQURELEdBaUNHLElBbkNOLGVBcUNFLGdDQUFDLFVBQUQsUUFBYSx5QkFBYUQsVUFBYixHQUEwQixFQUF2QyxDQXJDRixDQURGO0FBeUNEO0FBdEl3QjtBQUFBO0FBQUEsK0NBbUJPTSxLQW5CUCxFQW1CY29ELEtBbkJkLEVBbUJxQjtBQUM1QyxZQUFJQSxLQUFLLENBQUN0QixXQUFOLElBQXFCOUIsS0FBSyxDQUFDOEIsV0FBTixLQUFzQixLQUEzQyxJQUFvRHNCLEtBQUssQ0FBQ3JCLEtBQU4sQ0FBWWEsTUFBcEUsRUFBNEU7QUFDMUUsaUJBQU87QUFDTGIsWUFBQUEsS0FBSyxFQUFFLEVBREY7QUFFTEQsWUFBQUEsV0FBVyxFQUFFOUIsS0FBSyxDQUFDOEI7QUFGZCxXQUFQO0FBSUQ7O0FBQ0QsZUFBTztBQUNMQSxVQUFBQSxXQUFXLEVBQUU5QixLQUFLLENBQUM4QjtBQURkLFNBQVA7QUFHRDtBQTdCd0I7QUFBQTtBQUFBLElBQ0ZvQyxnQkFERTs7QUFBQSxtQ0FDckJ0QyxVQURxQixlQUVOO0FBQ2pCc0IsSUFBQUEsWUFBWSxFQUFFaUIsc0JBQVVDLElBQVYsQ0FBZUMsVUFEWjtBQUVqQm5DLElBQUFBLFlBQVksRUFBRWlDLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUksTUFBNUIsQ0FGRztBQUdqQnpDLElBQUFBLFdBQVcsRUFBRXFDLHNCQUFVSztBQUhOLEdBRk07QUFBQSxtQ0FDckI1QyxVQURxQixrQkFRSDtBQUNwQk0sSUFBQUEsWUFBWSxFQUFFMUM7QUFETSxHQVJHO0FBeUkzQixTQUFPLHFDQUFTb0MsVUFBVCxDQUFQO0FBQ0Q7O2VBRWNELGlCOztBQUNSLElBQU1DLFVBQVUsR0FBR0QsaUJBQWlCLEVBQXBDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWZ9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cG9seWZpbGx9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IFVwbG9hZEJ1dHRvbiBmcm9tICcuL3VwbG9hZC1idXR0b24nO1xuaW1wb3J0IHtGaWxlVHlwZSwgRHJhZ05Ecm9wfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9hZGluZy1zcGlubmVyJztcbmltcG9ydCBGaWxlRHJvcCBmcm9tICcuL2ZpbGUtZHJvcCc7XG5cbmltcG9ydCB7aXNDaHJvbWV9IGZyb20gJ3V0aWxzL3V0aWxzJztcbmltcG9ydCB7R1VJREVTX0ZJTEVfRk9STUFUfSBmcm9tICdjb25zdGFudHMvdXNlci1ndWlkZXMnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuXG4vLyBCcmVha3BvaW50c1xuaW1wb3J0IHttZWRpYX0gZnJvbSAnc3R5bGVzL21lZGlhLWJyZWFrcG9pbnRzJztcblxuLy8gRmlsZS50eXBlIGlzIG5vdCByZWxpYWJsZSBpZiB0aGUgT1MgZG9lcyBub3QgaGF2ZSBhXG4vLyByZWdpc3RlcmVkIG1hcHBpbmcgZm9yIHRoZSBleHRlbnNpb24uXG4vLyBOT1RFOiBTaGFwZWZpbGVzIG11c3QgYmUgaW4gYSBjb21wcmVzc2VkIGZvcm1hdCBzaW5jZVxuLy8gaXQgcmVxdWlyZXMgbXVsdGlwbGUgZmlsZXMgdG8gYmUgcHJlc2VudC5cbmNvbnN0IGRlZmF1bHRWYWxpZEZpbGVFeHQgPSBbJ2NzdicsICdqc29uJywgJ2dlb2pzb24nXTtcblxuY29uc3QgTUVTU0FHRSA9ICcgRHJhZyAmIERyb3AgWW91ciBGaWxlKHMpIEhlcmUnO1xuY29uc3QgQ0hST01FX01TRyA9XG4gICcqQ2hyb21lIHVzZXI6IExpbWl0IGZpbGUgc2l6ZSB0byAyNTBtYiwgaWYgbmVlZCB0byB1cGxvYWQgbGFyZ2VyIGZpbGUsIHRyeSBTYWZhcmknO1xuY29uc3QgRElTQ0xBSU1FUiA9XG4gICcqa2VwbGVyLmdsIGlzIGEgY2xpZW50LXNpZGUgYXBwbGljYXRpb24gd2l0aCBubyBzZXJ2ZXIgYmFja2VuZC4gRGF0YSBsaXZlcyBvbmx5IG9uIHlvdXIgbWFjaGluZS9icm93c2VyLiAnICtcbiAgJ05vIGluZm9ybWF0aW9uIG9yIG1hcCBkYXRhIGlzIHNlbnQgdG8gYW55IHNlcnZlci4nO1xuY29uc3QgQ09ORklHX1VQTE9BRF9NRVNTQUdFID0gYFVwbG9hZCAqKkNTVioqLCAqKkdlb0pzb24qKiBvciBzYXZlZCBtYXAgKipKc29uKiouIFJlYWQgbW9yZSBhYm91dCBbKipzdXBwb3J0ZWQgZmlsZSBmb3JtYXRzKipdKCR7R1VJREVTX0ZJTEVfRk9STUFUfSkuYDtcblxuY29uc3QgZmlsZUljb25Db2xvciA9ICcjRDNEOEUwJztcblxuY29uc3QgTGlua1JlbmRlcmVyID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e3Byb3BzLmhyZWZ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuY29uc3QgU3R5bGVkVXBsb2FkTWVzc2FnZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFdhcm5pbmdNc2cgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3JDb2xvcn07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gO1xuXG5jb25zdCBQb3NpdGl2ZU1zZyA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5BY3RCZ2R9O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEZpbGVEcm9wID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yTFR9O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0OHB4IDhweCAwO1xuXG4gIC5maWxlLXVwbG9hZC1vciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGlua0J0bkNvbG9yfTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIH1cblxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIHBhZGRpbmc6IDE2cHggNHB4IDA7XG4gIGB9O1xuYDtcblxuY29uc3QgTXNnV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsVGl0bGVDb2xvcn07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuYDtcblxuY29uc3QgU3R5bGVkRHJhZ05Ecm9wSWNvbiA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke2ZpbGVJY29uQ29sb3J9O1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuXG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYH07XG4gICR7bWVkaWEucGFsbWBcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGB9O1xuYDtcblxuY29uc3QgU3R5bGVkRmlsZVR5cGVGb3cgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGB9O1xuICAke21lZGlhLnBhbG1gXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBgfTtcbmA7XG5cbmNvbnN0IFN0eWxlZEZpbGVVcGxvYWQgPSBzdHlsZWQuZGl2YFxuICAuZmlsdGVyLXVwbG9hZF9faW5wdXQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmZpbGUtZHJvcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRNZXNzYWdlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgLmxvYWRpbmctYWN0aW9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmxvYWRpbmctc3Bpbm5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZERyYWdGaWxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYH07XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYH1cbmA7XG5cbmNvbnN0IFN0eWxlZERpc2NsYWltZXIgPSBzdHlsZWQoU3R5bGVkTWVzc2FnZSlgXG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcblxuZnVuY3Rpb24gRmlsZVVwbG9hZEZhY3RvcnkoKSB7XG4gIGNsYXNzIEZpbGVVcGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBvbkZpbGVVcGxvYWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICB2YWxpZEZpbGVFeHQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgICAgZmlsZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICB2YWxpZEZpbGVFeHQ6IGRlZmF1bHRWYWxpZEZpbGVFeHRcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICBkcmFnT3ZlcjogZmFsc2UsXG4gICAgICBmaWxlTG9hZGluZzogZmFsc2UsXG4gICAgICBmaWxlczogW10sXG4gICAgICBlcnJvckZpbGVzOiBbXVxuICAgIH07XG5cbiAgICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgICAgaWYgKHN0YXRlLmZpbGVMb2FkaW5nICYmIHByb3BzLmZpbGVMb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0ZS5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBmaWxlczogW10sXG4gICAgICAgICAgZmlsZUxvYWRpbmc6IHByb3BzLmZpbGVMb2FkaW5nXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaWxlTG9hZGluZzogcHJvcHMuZmlsZUxvYWRpbmdcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnJhbWUgPSBjcmVhdGVSZWYoKTtcblxuICAgIF9pc1ZhbGlkRmlsZVR5cGUgPSBmaWxlbmFtZSA9PiB7XG4gICAgICBjb25zdCB7dmFsaWRGaWxlRXh0fSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBmaWxlRXh0ID0gdmFsaWRGaWxlRXh0LmZpbmQoZXh0ID0+IGZpbGVuYW1lLmVuZHNXaXRoKGV4dCkpO1xuXG4gICAgICByZXR1cm4gQm9vbGVhbihmaWxlRXh0KTtcbiAgICB9O1xuXG4gICAgX2hhbmRsZUZpbGVJbnB1dCA9IChmaWxlcywgZSkgPT4ge1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV4dFN0YXRlID0ge2ZpbGVzOiBbXSwgZXJyb3JGaWxlczogW10sIGRyYWdPdmVyOiBmYWxzZX07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcblxuICAgICAgICBpZiAoZmlsZSAmJiB0aGlzLl9pc1ZhbGlkRmlsZVR5cGUoZmlsZS5uYW1lKSkge1xuICAgICAgICAgIG5leHRTdGF0ZS5maWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHRTdGF0ZS5lcnJvckZpbGVzLnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgKCkgPT5cbiAgICAgICAgbmV4dFN0YXRlLmZpbGVzLmxlbmd0aCA/IHRoaXMucHJvcHMub25GaWxlVXBsb2FkKG5leHRTdGF0ZS5maWxlcykgOiBudWxsXG4gICAgICApO1xuICAgIH07XG5cbiAgICBfdG9nZ2xlRHJhZ1N0YXRlID0gbmV3U3RhdGUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ092ZXI6IG5ld1N0YXRlfSk7XG4gICAgfTtcblxuICAgIF9yZW5kZXJNZXNzYWdlKCkge1xuICAgICAgY29uc3Qge2Vycm9yRmlsZXMsIGZpbGVzfSA9IHRoaXMuc3RhdGU7XG4gICAgICBpZiAoZXJyb3JGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDxXYXJuaW5nTXNnPntgRmlsZSAke2Vycm9yRmlsZXMuam9pbignLCAnKX0gaXMgbm90IHN1cHBvcnRlZC5gfTwvV2FybmluZ01zZz47XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZmlsZUxvYWRpbmcgJiYgZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFN0eWxlZE1lc3NhZ2UgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWRlcl9fbWVzc2FnZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWFjdGlvblwiPlVwbG9hZGluZzwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge2ZpbGVzLm1hcCgoZiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxQb3NpdGl2ZU1zZyBrZXk9e2l9PntmLm5hbWV9PC9Qb3NpdGl2ZU1zZz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIC4uLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctc3Bpbm5lclwiPlxuICAgICAgICAgICAgICA8TG9hZGluZ1NwaW5uZXIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1N0eWxlZE1lc3NhZ2U+XG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtkcmFnT3ZlciwgZmlsZXN9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHt2YWxpZEZpbGVFeHR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZEZpbGVVcGxvYWQgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWRlclwiIHJlZj17dGhpcy5mcmFtZX0+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZpbHRlci11cGxvYWRfX2lucHV0XCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2V9IC8+XG4gICAgICAgICAge0ZpbGVEcm9wID8gKFxuICAgICAgICAgICAgPEZpbGVEcm9wXG4gICAgICAgICAgICAgIGZyYW1lPXt0aGlzLmZyYW1lLmN1cnJlbnQgfHwgZG9jdW1lbnR9XG4gICAgICAgICAgICAgIG9uRHJhZ092ZXI9eygpID0+IHRoaXMuX3RvZ2dsZURyYWdTdGF0ZSh0cnVlKX1cbiAgICAgICAgICAgICAgb25EcmFnTGVhdmU9eygpID0+IHRoaXMuX3RvZ2dsZURyYWdTdGF0ZShmYWxzZSl9XG4gICAgICAgICAgICAgIG9uRHJvcD17dGhpcy5faGFuZGxlRmlsZUlucHV0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZGVyX19maWxlLWRyb3BcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3R5bGVkVXBsb2FkTWVzc2FnZSBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZF9fbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17Q09ORklHX1VQTE9BRF9NRVNTQUdFfSByZW5kZXJlcnM9e3tsaW5rOiBMaW5rUmVuZGVyZXJ9fSAvPlxuICAgICAgICAgICAgICA8L1N0eWxlZFVwbG9hZE1lc3NhZ2U+XG4gICAgICAgICAgICAgIDxTdHlsZWRGaWxlRHJvcCBkcmFnT3Zlcj17ZHJhZ092ZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tvcGFjaXR5OiBkcmFnT3ZlciA/IDAuNSA6IDF9fT5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWREcmFnTkRyb3BJY29uPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRmlsZVR5cGVGb3cgY2xhc3NOYW1lPVwiZmlsZS10eXBlLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZEZpbGVFeHQubWFwKGV4dCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmlsZVR5cGUga2V5PXtleHR9IGV4dD17ZXh0fSBoZWlnaHQ9XCI1MHB4XCIgZm9udFNpemU9XCI5cHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZEZpbGVUeXBlRm93PlxuICAgICAgICAgICAgICAgICAgICA8RHJhZ05Ecm9wIGhlaWdodD1cIjQ0cHhcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWREcmFnTkRyb3BJY29uPlxuICAgICAgICAgICAgICAgICAgPGRpdj57dGhpcy5fcmVuZGVyTWVzc2FnZSgpfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHshZmlsZXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgPFN0eWxlZERyYWdGaWxlV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPE1zZ1dyYXBwZXI+e01FU1NBR0V9PC9Nc2dXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZC1vclwiPm9yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8VXBsb2FkQnV0dG9uIG9uVXBsb2FkPXt0aGlzLl9oYW5kbGVGaWxlSW5wdXR9PmJyb3dzZSB5b3VyIGZpbGVzPC9VcGxvYWRCdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZERyYWdGaWxlV3JhcHBlcj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8U3R5bGVkRGlzY2xhaW1lcj57RElTQ0xBSU1FUn08L1N0eWxlZERpc2NsYWltZXI+XG4gICAgICAgICAgICAgIDwvU3R5bGVkRmlsZURyb3A+XG4gICAgICAgICAgICA8L0ZpbGVEcm9wPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgPFdhcm5pbmdNc2c+e2lzQ2hyb21lKCkgPyBDSFJPTUVfTVNHIDogJyd9PC9XYXJuaW5nTXNnPlxuICAgICAgICA8L1N0eWxlZEZpbGVVcGxvYWQ+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2x5ZmlsbChGaWxlVXBsb2FkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZVVwbG9hZEZhY3Rvcnk7XG5leHBvcnQgY29uc3QgRmlsZVVwbG9hZCA9IEZpbGVVcGxvYWRGYWN0b3J5KCk7XG4iXX0=