"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _checkbox = _interopRequireDefault(require("./checkbox"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var propTypes = {
  checked: _propTypes["default"].bool,
  id: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].node,
  error: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  value: _propTypes["default"].string
};

var Switch = function Switch(props) {
  var switchProps = _objectSpread({}, props, {
    "switch": props.type !== 'checkbox'
  });

  return /*#__PURE__*/_react["default"].createElement(_checkbox["default"], switchProps);
};

Switch.propTypes = propTypes;
var _default = Switch;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zd2l0Y2guanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiY2hlY2tlZCIsIlByb3BUeXBlcyIsImJvb2wiLCJpZCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJsYWJlbCIsIm5vZGUiLCJlcnJvciIsIm9uQmx1ciIsImZ1bmMiLCJvbkNoYW5nZSIsIm9uRm9jdXMiLCJ2YWx1ZSIsIlN3aXRjaCIsInByb3BzIiwic3dpdGNoUHJvcHMiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxPQUFPLEVBQUVDLHNCQUFVQyxJQURIO0FBRWhCQyxFQUFBQSxFQUFFLEVBQUVGLHNCQUFVRyxNQUFWLENBQWlCQyxVQUZMO0FBR2hCQyxFQUFBQSxLQUFLLEVBQUVMLHNCQUFVTSxJQUhEO0FBSWhCQyxFQUFBQSxLQUFLLEVBQUVQLHNCQUFVRyxNQUpEO0FBS2hCSyxFQUFBQSxNQUFNLEVBQUVSLHNCQUFVUyxJQUxGO0FBTWhCQyxFQUFBQSxRQUFRLEVBQUVWLHNCQUFVUyxJQU5KO0FBT2hCRSxFQUFBQSxPQUFPLEVBQUVYLHNCQUFVUyxJQVBIO0FBUWhCRyxFQUFBQSxLQUFLLEVBQUVaLHNCQUFVRztBQVJELENBQWxCOztBQVdBLElBQU1VLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUFDLEtBQUssRUFBSTtBQUN0QixNQUFNQyxXQUFXLHFCQUNaRCxLQURZO0FBRWYsY0FBUUEsS0FBSyxDQUFDRSxJQUFOLEtBQWU7QUFGUixJQUFqQjs7QUFLQSxzQkFBTyxnQ0FBQyxvQkFBRCxFQUFjRCxXQUFkLENBQVA7QUFDRCxDQVBEOztBQVNBRixNQUFNLENBQUNmLFNBQVAsR0FBbUJBLFNBQW5CO2VBRWVlLE0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL2NoZWNrYm94JztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmNvbnN0IFN3aXRjaCA9IHByb3BzID0+IHtcbiAgY29uc3Qgc3dpdGNoUHJvcHMgPSB7XG4gICAgLi4ucHJvcHMsXG4gICAgc3dpdGNoOiBwcm9wcy50eXBlICE9PSAnY2hlY2tib3gnXG4gIH07XG5cbiAgcmV0dXJuIDxDaGVja2JveCB7Li4uc3dpdGNoUHJvcHN9IC8+O1xufTtcblxuU3dpdGNoLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoO1xuIl19