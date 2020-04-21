"use strict";

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _window = _interopRequireDefault(require("global/window"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FileDrop = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(FileDrop, _React$PureComponent);

  var _super = _createSuper(FileDrop);

  function FileDrop(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, FileDrop);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "resetDragging", function () {
      _this.frameDragCounter = 0;

      _this.setState({
        draggingOverFrame: false,
        draggingOverTarget: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleWindowDragOverOrDrop", function (event) {
      // This prevents the browser from trying to load whatever file the user dropped on the window
      event.preventDefault();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFrameDrag", function (event) {
      // Only allow dragging of files
      if (!FileDrop.eventHasFiles(event)) return; // We are listening for events on the 'frame', so every time the user drags over any element in the frame's tree,
      // the event bubbles up to the frame. By keeping count of how many "dragenters" we get, we can tell if they are still
      // "draggingOverFrame" (b/c you get one "dragenter" initially, and one "dragenter"/one "dragleave" for every bubble)
      // This is far better than a "dragover" handler, which would be calling `setState` continuously.

      _this.frameDragCounter += event.type === 'dragenter' ? 1 : -1;

      if (_this.frameDragCounter === 1) {
        _this.setState({
          draggingOverFrame: true
        });

        if (_this.props.onFrameDragEnter) _this.props.onFrameDragEnter(event);
        return;
      }

      if (_this.frameDragCounter === 0) {
        _this.setState({
          draggingOverFrame: false
        });

        if (_this.props.onFrameDragLeave) _this.props.onFrameDragLeave(event);
        return;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFrameDrop", function (event) {
      event.preventDefault();

      if (!_this.state.draggingOverTarget) {
        _this.resetDragging();

        if (_this.props.onFrameDrop) _this.props.onFrameDrop(event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDragOver", function (event) {
      if (FileDrop.eventHasFiles(event)) {
        _this.setState({
          draggingOverTarget: true
        });

        if (!FileDrop.isIE() && _this.props.dropEffect) event.dataTransfer.dropEffect = _this.props.dropEffect;
        if (_this.props.onDragOver) _this.props.onDragOver(event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDragLeave", function (event) {
      _this.setState({
        draggingOverTarget: false
      });

      if (_this.props.onDragLeave) _this.props.onDragLeave(event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDrop", function (event) {
      if (_this.props.onDrop && FileDrop.eventHasFiles(event)) {
        var files = event.dataTransfer ? event.dataTransfer.files : null;

        _this.props.onDrop(files, event);
      }

      _this.resetDragging();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "stopFrameListeners", function (frame) {
      if (frame) {
        frame.removeEventListener('dragenter', _this.handleFrameDrag);
        frame.removeEventListener('dragleave', _this.handleFrameDrag);
        frame.removeEventListener('drop', _this.handleFrameDrop);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "startFrameListeners", function (frame) {
      if (frame) {
        frame.addEventListener('dragenter', _this.handleFrameDrag);
        frame.addEventListener('dragleave', _this.handleFrameDrag);
        frame.addEventListener('drop', _this.handleFrameDrop);
      }
    });
    _this.frameDragCounter = 0;
    _this.state = {
      draggingOverFrame: false,
      draggingOverTarget: false
    };
    return _this;
  }

  (0, _createClass2["default"])(FileDrop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startFrameListeners(this.props.frame);
      this.resetDragging();

      _window["default"].addEventListener('dragover', this.handleWindowDragOverOrDrop);

      _window["default"].addEventListener('drop', this.handleWindowDragOverOrDrop);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.frame !== this.props.frame) {
        this.resetDragging();
        this.stopFrameListeners(prevProps.frame);
        this.startFrameListeners(this.props.frame);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopFrameListeners(this.props.frame);

      _window["default"].removeEventListener('dragover', this.handleWindowDragOverOrDrop);

      _window["default"].removeEventListener('drop', this.handleWindowDragOverOrDrop);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          targetClassName = _this$props.targetClassName,
          draggingOverFrameClassName = _this$props.draggingOverFrameClassName,
          draggingOverTargetClassName = _this$props.draggingOverTargetClassName;
      var _this$state = this.state,
          draggingOverTarget = _this$state.draggingOverTarget,
          draggingOverFrame = _this$state.draggingOverFrame;
      var fileDropTargetClassName = targetClassName;
      if (draggingOverFrame) fileDropTargetClassName += " ".concat(draggingOverFrameClassName);
      if (draggingOverTarget) fileDropTargetClassName += " ".concat(draggingOverTargetClassName);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        onDragOver: this.handleDragOver,
        onDragLeave: this.handleDragLeave,
        onDrop: this.handleDrop
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: fileDropTargetClassName
      }, children));
    }
  }]);
  return FileDrop;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(FileDrop, "isIE", function () {
  return _window["default"] && _window["default"].navigator && ((_window["default"].navigator.userAgent || []).includes('MSIE') || (_window["default"].navigator.appVersion || []).includes('Trident/'));
});
(0, _defineProperty2["default"])(FileDrop, "eventHasFiles", function (event) {
  // In most browsers this is an array, but in IE11 it's an Object :(
  var hasFiles = false;

  if (event.dataTransfer) {
    var types = event.dataTransfer.types;

    for (var keyOrIndex in types) {
      if (types[keyOrIndex] === 'Files') {
        hasFiles = true;
        break;
      }
    }
  }

  return hasFiles;
});
(0, _defineProperty2["default"])(FileDrop, "propTypes", {
  className: _propTypes["default"].string,
  targetClassName: _propTypes["default"].string,
  draggingOverFrameClassName: _propTypes["default"].string,
  draggingOverTargetClassName: _propTypes["default"].string,
  onDragOver: _propTypes["default"].func,
  onDragLeave: _propTypes["default"].func,
  onDrop: _propTypes["default"].func,
  dropEffect: _propTypes["default"].oneOf(['copy', 'move', 'link', 'none']),
  frame: function frame(props, propName, componentName) {
    var prop = props[propName];

    if (prop === null) {
      return new Error("Warning: Required prop `".concat(propName, "` was not specified in `").concat(componentName, "`"));
    }

    if (prop !== document && prop !== _window["default"] && !(prop instanceof HTMLElement)) {
      return new Error("Warning: Prop `".concat(propName, "` must be one of the following: document, HTMLElement!"));
    }
  },
  onFrameDragEnter: _propTypes["default"].func,
  onFrameDragLeave: _propTypes["default"].func,
  onFrameDrop: _propTypes["default"].func
});
(0, _defineProperty2["default"])(FileDrop, "defaultProps", {
  dropEffect: 'copy',
  frame: _window["default"] ? _window["default"].document : undefined,
  className: 'file-drop',
  targetClassName: 'file-drop-target',
  draggingOverFrameClassName: 'file-drop-dragging-over-frame',
  draggingOverTargetClassName: 'file-drop-dragging-over-target'
});
var _default = FileDrop;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtZHJvcC5qcyJdLCJuYW1lcyI6WyJGaWxlRHJvcCIsInByb3BzIiwiZnJhbWVEcmFnQ291bnRlciIsInNldFN0YXRlIiwiZHJhZ2dpbmdPdmVyRnJhbWUiLCJkcmFnZ2luZ092ZXJUYXJnZXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXZlbnRIYXNGaWxlcyIsInR5cGUiLCJvbkZyYW1lRHJhZ0VudGVyIiwib25GcmFtZURyYWdMZWF2ZSIsInN0YXRlIiwicmVzZXREcmFnZ2luZyIsIm9uRnJhbWVEcm9wIiwiaXNJRSIsImRyb3BFZmZlY3QiLCJkYXRhVHJhbnNmZXIiLCJvbkRyYWdPdmVyIiwib25EcmFnTGVhdmUiLCJvbkRyb3AiLCJmaWxlcyIsImZyYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUZyYW1lRHJhZyIsImhhbmRsZUZyYW1lRHJvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGFydEZyYW1lTGlzdGVuZXJzIiwid2luZG93IiwiaGFuZGxlV2luZG93RHJhZ092ZXJPckRyb3AiLCJwcmV2UHJvcHMiLCJzdG9wRnJhbWVMaXN0ZW5lcnMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInRhcmdldENsYXNzTmFtZSIsImRyYWdnaW5nT3ZlckZyYW1lQ2xhc3NOYW1lIiwiZHJhZ2dpbmdPdmVyVGFyZ2V0Q2xhc3NOYW1lIiwiZmlsZURyb3BUYXJnZXRDbGFzc05hbWUiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyYWdMZWF2ZSIsImhhbmRsZURyb3AiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmNsdWRlcyIsImFwcFZlcnNpb24iLCJoYXNGaWxlcyIsInR5cGVzIiwia2V5T3JJbmRleCIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJvbmVPZiIsInByb3BOYW1lIiwiY29tcG9u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QUEsMkJBQTJCLEVBQUU7QUFOVCxDO2VBOElUcEMsUSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qKlxyXG4gKiBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2FyaW5rL3JlYWN0LWZpbGUtZHJvcFxyXG4gKiBGb3IgUmVhY3QgMTYuOCBjb21wYXRpYmlsaXR5XHJcbiAqL1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xyXG5cclxuY2xhc3MgRmlsZURyb3AgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcclxuICBzdGF0aWMgaXNJRSA9ICgpID0+XHJcbiAgICB3aW5kb3cgJiZcclxuICAgIHdpbmRvdy5uYXZpZ2F0b3IgJiZcclxuICAgICgod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgW10pLmluY2x1ZGVzKCdNU0lFJykgfHxcclxuICAgICAgKHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbiB8fCBbXSkuaW5jbHVkZXMoJ1RyaWRlbnQvJykpO1xyXG5cclxuICBzdGF0aWMgZXZlbnRIYXNGaWxlcyA9IGV2ZW50ID0+IHtcclxuICAgIC8vIEluIG1vc3QgYnJvd3NlcnMgdGhpcyBpcyBhbiBhcnJheSwgYnV0IGluIElFMTEgaXQncyBhbiBPYmplY3QgOihcclxuXHJcbiAgICBsZXQgaGFzRmlsZXMgPSBmYWxzZTtcclxuICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgY29uc3QgdHlwZXMgPSBldmVudC5kYXRhVHJhbnNmZXIudHlwZXM7XHJcbiAgICAgIGZvciAoY29uc3Qga2V5T3JJbmRleCBpbiB0eXBlcykge1xyXG4gICAgICAgIGlmICh0eXBlc1trZXlPckluZGV4XSA9PT0gJ0ZpbGVzJykge1xyXG4gICAgICAgICAgaGFzRmlsZXMgPSB0cnVlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGFzRmlsZXM7XHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIHRhcmdldENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGRyYWdnaW5nT3ZlckZyYW1lQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZHJhZ2dpbmdPdmVyVGFyZ2V0Q2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgb25EcmFnT3ZlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkRyYWdMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBvbkRyb3A6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgZHJvcEVmZmVjdDogUHJvcFR5cGVzLm9uZU9mKFsnY29weScsICdtb3ZlJywgJ2xpbmsnLCAnbm9uZSddKSxcclxuICAgIGZyYW1lOiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb3AgPSBwcm9wc1twcm9wTmFtZV07XHJcbiAgICAgIGlmIChwcm9wID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcclxuICAgICAgICAgIGBXYXJuaW5nOiBSZXF1aXJlZCBwcm9wIFxcYCR7cHJvcE5hbWV9XFxgIHdhcyBub3Qgc3BlY2lmaWVkIGluIFxcYCR7Y29tcG9uZW50TmFtZX1cXGBgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocHJvcCAhPT0gZG9jdW1lbnQgJiYgcHJvcCAhPT0gd2luZG93ICYmICEocHJvcCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgV2FybmluZzogUHJvcCBcXGAke3Byb3BOYW1lfVxcYCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOiBkb2N1bWVudCwgSFRNTEVsZW1lbnQhYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkZyYW1lRHJhZ0VudGVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uRnJhbWVEcmFnTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25GcmFtZURyb3A6IFByb3BUeXBlcy5mdW5jXHJcbiAgfTtcclxuXHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGRyb3BFZmZlY3Q6ICdjb3B5JyxcclxuICAgIGZyYW1lOiB3aW5kb3cgPyB3aW5kb3cuZG9jdW1lbnQgOiB1bmRlZmluZWQsXHJcbiAgICBjbGFzc05hbWU6ICdmaWxlLWRyb3AnLFxyXG4gICAgdGFyZ2V0Q2xhc3NOYW1lOiAnZmlsZS1kcm9wLXRhcmdldCcsXHJcbiAgICBkcmFnZ2luZ092ZXJGcmFtZUNsYXNzTmFtZTogJ2ZpbGUtZHJvcC1kcmFnZ2luZy1vdmVyLWZyYW1lJyxcclxuICAgIGRyYWdnaW5nT3ZlclRhcmdldENsYXNzTmFtZTogJ2ZpbGUtZHJvcC1kcmFnZ2luZy1vdmVyLXRhcmdldCdcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5mcmFtZURyYWdDb3VudGVyID0gMDtcclxuICAgIHRoaXMuc3RhdGUgPSB7ZHJhZ2dpbmdPdmVyRnJhbWU6IGZhbHNlLCBkcmFnZ2luZ092ZXJUYXJnZXQ6IGZhbHNlfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zdGFydEZyYW1lTGlzdGVuZXJzKHRoaXMucHJvcHMuZnJhbWUpO1xyXG4gICAgdGhpcy5yZXNldERyYWdnaW5nKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmhhbmRsZVdpbmRvd0RyYWdPdmVyT3JEcm9wKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVXaW5kb3dEcmFnT3Zlck9yRHJvcCk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICBpZiAocHJldlByb3BzLmZyYW1lICE9PSB0aGlzLnByb3BzLmZyYW1lKSB7XHJcbiAgICAgIHRoaXMucmVzZXREcmFnZ2luZygpO1xyXG4gICAgICB0aGlzLnN0b3BGcmFtZUxpc3RlbmVycyhwcmV2UHJvcHMuZnJhbWUpO1xyXG4gICAgICB0aGlzLnN0YXJ0RnJhbWVMaXN0ZW5lcnModGhpcy5wcm9wcy5mcmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHRoaXMuc3RvcEZyYW1lTGlzdGVuZXJzKHRoaXMucHJvcHMuZnJhbWUpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5oYW5kbGVXaW5kb3dEcmFnT3Zlck9yRHJvcCk7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuaGFuZGxlV2luZG93RHJhZ092ZXJPckRyb3ApO1xyXG4gIH1cclxuXHJcbiAgcmVzZXREcmFnZ2luZyA9ICgpID0+IHtcclxuICAgIHRoaXMuZnJhbWVEcmFnQ291bnRlciA9IDA7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZ092ZXJGcmFtZTogZmFsc2UsIGRyYWdnaW5nT3ZlclRhcmdldDogZmFsc2V9KTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVXaW5kb3dEcmFnT3Zlck9yRHJvcCA9IGV2ZW50ID0+IHtcclxuICAgIC8vIFRoaXMgcHJldmVudHMgdGhlIGJyb3dzZXIgZnJvbSB0cnlpbmcgdG8gbG9hZCB3aGF0ZXZlciBmaWxlIHRoZSB1c2VyIGRyb3BwZWQgb24gdGhlIHdpbmRvd1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBoYW5kbGVGcmFtZURyYWcgPSBldmVudCA9PiB7XHJcbiAgICAvLyBPbmx5IGFsbG93IGRyYWdnaW5nIG9mIGZpbGVzXHJcbiAgICBpZiAoIUZpbGVEcm9wLmV2ZW50SGFzRmlsZXMoZXZlbnQpKSByZXR1cm47XHJcblxyXG4gICAgLy8gV2UgYXJlIGxpc3RlbmluZyBmb3IgZXZlbnRzIG9uIHRoZSAnZnJhbWUnLCBzbyBldmVyeSB0aW1lIHRoZSB1c2VyIGRyYWdzIG92ZXIgYW55IGVsZW1lbnQgaW4gdGhlIGZyYW1lJ3MgdHJlZSxcclxuICAgIC8vIHRoZSBldmVudCBidWJibGVzIHVwIHRvIHRoZSBmcmFtZS4gQnkga2VlcGluZyBjb3VudCBvZiBob3cgbWFueSBcImRyYWdlbnRlcnNcIiB3ZSBnZXQsIHdlIGNhbiB0ZWxsIGlmIHRoZXkgYXJlIHN0aWxsXHJcbiAgICAvLyBcImRyYWdnaW5nT3ZlckZyYW1lXCIgKGIvYyB5b3UgZ2V0IG9uZSBcImRyYWdlbnRlclwiIGluaXRpYWxseSwgYW5kIG9uZSBcImRyYWdlbnRlclwiL29uZSBcImRyYWdsZWF2ZVwiIGZvciBldmVyeSBidWJibGUpXHJcbiAgICAvLyBUaGlzIGlzIGZhciBiZXR0ZXIgdGhhbiBhIFwiZHJhZ292ZXJcIiBoYW5kbGVyLCB3aGljaCB3b3VsZCBiZSBjYWxsaW5nIGBzZXRTdGF0ZWAgY29udGludW91c2x5LlxyXG4gICAgdGhpcy5mcmFtZURyYWdDb3VudGVyICs9IGV2ZW50LnR5cGUgPT09ICdkcmFnZW50ZXInID8gMSA6IC0xO1xyXG5cclxuICAgIGlmICh0aGlzLmZyYW1lRHJhZ0NvdW50ZXIgPT09IDEpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmdPdmVyRnJhbWU6IHRydWV9KTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMub25GcmFtZURyYWdFbnRlcikgdGhpcy5wcm9wcy5vbkZyYW1lRHJhZ0VudGVyKGV2ZW50KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmZyYW1lRHJhZ0NvdW50ZXIgPT09IDApIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmdPdmVyRnJhbWU6IGZhbHNlfSk7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRnJhbWVEcmFnTGVhdmUpIHRoaXMucHJvcHMub25GcmFtZURyYWdMZWF2ZShldmVudCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBoYW5kbGVGcmFtZURyb3AgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nT3ZlclRhcmdldCkge1xyXG4gICAgICB0aGlzLnJlc2V0RHJhZ2dpbmcoKTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMub25GcmFtZURyb3ApIHRoaXMucHJvcHMub25GcmFtZURyb3AoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGhhbmRsZURyYWdPdmVyID0gZXZlbnQgPT4ge1xyXG4gICAgaWYgKEZpbGVEcm9wLmV2ZW50SGFzRmlsZXMoZXZlbnQpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nT3ZlclRhcmdldDogdHJ1ZX0pO1xyXG4gICAgICBpZiAoIUZpbGVEcm9wLmlzSUUoKSAmJiB0aGlzLnByb3BzLmRyb3BFZmZlY3QpXHJcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSB0aGlzLnByb3BzLmRyb3BFZmZlY3Q7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uRHJhZ092ZXIpIHRoaXMucHJvcHMub25EcmFnT3ZlcihldmVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaGFuZGxlRHJhZ0xlYXZlID0gZXZlbnQgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmdPdmVyVGFyZ2V0OiBmYWxzZX0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25EcmFnTGVhdmUpIHRoaXMucHJvcHMub25EcmFnTGVhdmUoZXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZURyb3AgPSBldmVudCA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkRyb3AgJiYgRmlsZURyb3AuZXZlbnRIYXNGaWxlcyhldmVudCkpIHtcclxuICAgICAgY29uc3QgZmlsZXMgPSBldmVudC5kYXRhVHJhbnNmZXIgPyBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMgOiBudWxsO1xyXG4gICAgICB0aGlzLnByb3BzLm9uRHJvcChmaWxlcywgZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXNldERyYWdnaW5nKCk7XHJcbiAgfTtcclxuXHJcbiAgc3RvcEZyYW1lTGlzdGVuZXJzID0gZnJhbWUgPT4ge1xyXG4gICAgaWYgKGZyYW1lKSB7XHJcbiAgICAgIGZyYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuaGFuZGxlRnJhbWVEcmFnKTtcclxuICAgICAgZnJhbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5oYW5kbGVGcmFtZURyYWcpO1xyXG4gICAgICBmcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVGcmFtZURyb3ApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHN0YXJ0RnJhbWVMaXN0ZW5lcnMgPSBmcmFtZSA9PiB7XHJcbiAgICBpZiAoZnJhbWUpIHtcclxuICAgICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5oYW5kbGVGcmFtZURyYWcpO1xyXG4gICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmhhbmRsZUZyYW1lRHJhZyk7XHJcbiAgICAgIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmhhbmRsZUZyYW1lRHJvcCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjaGlsZHJlbixcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICB0YXJnZXRDbGFzc05hbWUsXHJcbiAgICAgIGRyYWdnaW5nT3ZlckZyYW1lQ2xhc3NOYW1lLFxyXG4gICAgICBkcmFnZ2luZ092ZXJUYXJnZXRDbGFzc05hbWVcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3Qge2RyYWdnaW5nT3ZlclRhcmdldCwgZHJhZ2dpbmdPdmVyRnJhbWV9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICBsZXQgZmlsZURyb3BUYXJnZXRDbGFzc05hbWUgPSB0YXJnZXRDbGFzc05hbWU7XHJcbiAgICBpZiAoZHJhZ2dpbmdPdmVyRnJhbWUpIGZpbGVEcm9wVGFyZ2V0Q2xhc3NOYW1lICs9IGAgJHtkcmFnZ2luZ092ZXJGcmFtZUNsYXNzTmFtZX1gO1xyXG4gICAgaWYgKGRyYWdnaW5nT3ZlclRhcmdldCkgZmlsZURyb3BUYXJnZXRDbGFzc05hbWUgKz0gYCAke2RyYWdnaW5nT3ZlclRhcmdldENsYXNzTmFtZX1gO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLmhhbmRsZURyYWdPdmVyfVxyXG4gICAgICAgIG9uRHJhZ0xlYXZlPXt0aGlzLmhhbmRsZURyYWdMZWF2ZX1cclxuICAgICAgICBvbkRyb3A9e3RoaXMuaGFuZGxlRHJvcH1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmaWxlRHJvcFRhcmdldENsYXNzTmFtZX0+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlRHJvcDtcclxuIl19