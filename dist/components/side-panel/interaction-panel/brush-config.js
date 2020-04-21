"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _rangeSlider = _interopRequireDefault(require("../../common/range-slider"));

var _styledComponents = require("../../common/styled-components");

var _interactionUtils = require("../../../utils/interaction-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BrushConfigFactory() {
  var BrushConfig = function BrushConfig(_ref) {
    var config = _ref.config,
        _onChange = _ref.onChange;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, "Brush Radius (km)"), /*#__PURE__*/_react["default"].createElement(_rangeSlider["default"], {
      range: _interactionUtils.BRUSH_CONFIG.range,
      value0: 0,
      value1: config.size || 10 / 2,
      step: 0.1,
      isRanged: false,
      onChange: function onChange(value) {
        return _onChange(_objectSpread({}, config, {
          size: value[1]
        }));
      },
      inputTheme: "secondary"
    }));
  };

  return BrushConfig;
}

var _default = BrushConfigFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwvYnJ1c2gtY29uZmlnLmpzIl0sIm5hbWVzIjpbIkJydXNoQ29uZmlnRmFjdG9yeSIsIkJydXNoQ29uZmlnIiwiY29uZmlnIiwib25DaGFuZ2UiLCJCUlVTSF9DT05GSUciLCJyYW5nZSIsInNpemUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7OztBQUVBLFNBQVNBLGtCQUFULEdBQThCO0FBQzVCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsUUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsUUFBVUMsU0FBVixRQUFVQSxRQUFWO0FBQUEsd0JBQ2xCLGdDQUFDLGtDQUFELHFCQUNFLGdDQUFDLDRCQUFELDRCQURGLGVBRUUsZ0NBQUMsdUJBQUQ7QUFDRSxNQUFBLEtBQUssRUFBRUMsK0JBQWFDLEtBRHRCO0FBRUUsTUFBQSxNQUFNLEVBQUUsQ0FGVjtBQUdFLE1BQUEsTUFBTSxFQUFFSCxNQUFNLENBQUNJLElBQVAsSUFBZSxLQUFLLENBSDlCO0FBSUUsTUFBQSxJQUFJLEVBQUUsR0FKUjtBQUtFLE1BQUEsUUFBUSxFQUFFLEtBTFo7QUFNRSxNQUFBLFFBQVEsRUFBRSxrQkFBQUMsS0FBSztBQUFBLGVBQUlKLFNBQVEsbUJBQUtELE1BQUw7QUFBYUksVUFBQUEsSUFBSSxFQUFFQyxLQUFLLENBQUMsQ0FBRDtBQUF4QixXQUFaO0FBQUEsT0FOakI7QUFPRSxNQUFBLFVBQVUsRUFBQztBQVBiLE1BRkYsQ0FEa0I7QUFBQSxHQUFwQjs7QUFlQSxTQUFPTixXQUFQO0FBQ0Q7O2VBRWNELGtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJhbmdlU2xpZGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3JhbmdlLXNsaWRlcic7XHJcblxyXG5pbXBvcnQge1BhbmVsTGFiZWwsIFNpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHtCUlVTSF9DT05GSUd9IGZyb20gJ3V0aWxzL2ludGVyYWN0aW9uLXV0aWxzJztcclxuXHJcbmZ1bmN0aW9uIEJydXNoQ29uZmlnRmFjdG9yeSgpIHtcclxuICBjb25zdCBCcnVzaENvbmZpZyA9ICh7Y29uZmlnLCBvbkNoYW5nZX0pID0+IChcclxuICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxyXG4gICAgICA8UGFuZWxMYWJlbD5CcnVzaCBSYWRpdXMgKGttKTwvUGFuZWxMYWJlbD5cclxuICAgICAgPFJhbmdlU2xpZGVyXHJcbiAgICAgICAgcmFuZ2U9e0JSVVNIX0NPTkZJRy5yYW5nZX1cclxuICAgICAgICB2YWx1ZTA9ezB9XHJcbiAgICAgICAgdmFsdWUxPXtjb25maWcuc2l6ZSB8fCAxMCAvIDJ9XHJcbiAgICAgICAgc3RlcD17MC4xfVxyXG4gICAgICAgIGlzUmFuZ2VkPXtmYWxzZX1cclxuICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gb25DaGFuZ2Uoey4uLmNvbmZpZywgc2l6ZTogdmFsdWVbMV19KX1cclxuICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcclxuICAgICAgLz5cclxuICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cclxuICApO1xyXG5cclxuICByZXR1cm4gQnJ1c2hDb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJydXNoQ29uZmlnRmFjdG9yeTtcclxuIl19