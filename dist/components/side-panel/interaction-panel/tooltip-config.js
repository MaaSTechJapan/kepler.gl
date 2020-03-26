"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("../../common/styled-components");

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _datasetTag = _interopRequireDefault(require("../common/dataset-tag"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

TooltipConfigFactory.deps = [_datasetTag["default"]];

function TooltipConfigFactory(DatasetTag) {
  var TooltipConfig = function TooltipConfig(_ref) {
    var config = _ref.config,
        datasets = _ref.datasets,
        onChange = _ref.onChange;
    return /*#__PURE__*/_react["default"].createElement("div", null, Object.keys(config.fieldsToShow).map(function (dataId) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, {
        key: dataId
      }, /*#__PURE__*/_react["default"].createElement(DatasetTag, {
        dataset: datasets[dataId]
      }), /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
        fields: datasets[dataId].fields,
        value: config.fieldsToShow[dataId],
        onSelect: function onSelect(fieldsToShow) {
          var newConfig = _objectSpread({}, config, {
            fieldsToShow: _objectSpread({}, config.fieldsToShow, (0, _defineProperty2["default"])({}, dataId, fieldsToShow.map(function (d) {
              return d.name;
            })))
          });

          onChange(newConfig);
        },
        closeOnSelect: false,
        multiSelect: true,
        inputTheme: "secondary"
      }));
    }));
  };

  return TooltipConfig;
}

var _default = TooltipConfigFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvaW50ZXJhY3Rpb24tcGFuZWwvdG9vbHRpcC1jb25maWcuanMiXSwibmFtZXMiOlsiVG9vbHRpcENvbmZpZ0ZhY3RvcnkiLCJkZXBzIiwiRGF0YXNldFRhZ0ZhY3RvcnkiLCJEYXRhc2V0VGFnIiwiVG9vbHRpcENvbmZpZyIsImNvbmZpZyIsImRhdGFzZXRzIiwib25DaGFuZ2UiLCJPYmplY3QiLCJrZXlzIiwiZmllbGRzVG9TaG93IiwibWFwIiwiZGF0YUlkIiwiZmllbGRzIiwibmV3Q29uZmlnIiwiZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQUEsb0JBQW9CLENBQUNDLElBQXJCLEdBQTRCLENBQUNDLHNCQUFELENBQTVCOztBQUVBLFNBQVNGLG9CQUFULENBQThCRyxVQUE5QixFQUEwQztBQUN4QyxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsUUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsUUFBVUMsUUFBVixRQUFVQSxRQUFWO0FBQUEsUUFBb0JDLFFBQXBCLFFBQW9CQSxRQUFwQjtBQUFBLHdCQUNwQiw2Q0FDR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLE1BQU0sQ0FBQ0ssWUFBbkIsRUFBaUNDLEdBQWpDLENBQXFDLFVBQUFDLE1BQU07QUFBQSwwQkFDMUMsZ0NBQUMsa0NBQUQ7QUFBa0IsUUFBQSxHQUFHLEVBQUVBO0FBQXZCLHNCQUNFLGdDQUFDLFVBQUQ7QUFBWSxRQUFBLE9BQU8sRUFBRU4sUUFBUSxDQUFDTSxNQUFEO0FBQTdCLFFBREYsZUFFRSxnQ0FBQyx5QkFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFTixRQUFRLENBQUNNLE1BQUQsQ0FBUixDQUFpQkMsTUFEM0I7QUFFRSxRQUFBLEtBQUssRUFBRVIsTUFBTSxDQUFDSyxZQUFQLENBQW9CRSxNQUFwQixDQUZUO0FBR0UsUUFBQSxRQUFRLEVBQUUsa0JBQUFGLFlBQVksRUFBSTtBQUN4QixjQUFNSSxTQUFTLHFCQUNWVCxNQURVO0FBRWJLLFlBQUFBLFlBQVksb0JBQ1BMLE1BQU0sQ0FBQ0ssWUFEQSx1Q0FFVEUsTUFGUyxFQUVBRixZQUFZLENBQUNDLEdBQWIsQ0FBaUIsVUFBQUksQ0FBQztBQUFBLHFCQUFJQSxDQUFDLENBQUNDLElBQU47QUFBQSxhQUFsQixDQUZBO0FBRkMsWUFBZjs7QUFPQVQsVUFBQUEsUUFBUSxDQUFDTyxTQUFELENBQVI7QUFDRCxTQVpIO0FBYUUsUUFBQSxhQUFhLEVBQUUsS0FiakI7QUFjRSxRQUFBLFdBQVcsTUFkYjtBQWVFLFFBQUEsVUFBVSxFQUFDO0FBZmIsUUFGRixDQUQwQztBQUFBLEtBQTNDLENBREgsQ0FEb0I7QUFBQSxHQUF0Qjs7QUEyQkEsU0FBT1YsYUFBUDtBQUNEOztlQUVjSixvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NpZGVQYW5lbFNlY3Rpb259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCBEYXRhc2V0VGFnRmFjdG9yeSBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvY29tbW9uL2RhdGFzZXQtdGFnJztcblxuVG9vbHRpcENvbmZpZ0ZhY3RvcnkuZGVwcyA9IFtEYXRhc2V0VGFnRmFjdG9yeV07XG5cbmZ1bmN0aW9uIFRvb2x0aXBDb25maWdGYWN0b3J5KERhdGFzZXRUYWcpIHtcbiAgY29uc3QgVG9vbHRpcENvbmZpZyA9ICh7Y29uZmlnLCBkYXRhc2V0cywgb25DaGFuZ2V9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIHtPYmplY3Qua2V5cyhjb25maWcuZmllbGRzVG9TaG93KS5tYXAoZGF0YUlkID0+IChcbiAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24ga2V5PXtkYXRhSWR9PlxuICAgICAgICAgIDxEYXRhc2V0VGFnIGRhdGFzZXQ9e2RhdGFzZXRzW2RhdGFJZF19IC8+XG4gICAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICAgIGZpZWxkcz17ZGF0YXNldHNbZGF0YUlkXS5maWVsZHN9XG4gICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdfVxuICAgICAgICAgICAgb25TZWxlY3Q9e2ZpZWxkc1RvU2hvdyA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAuLi5jb25maWcsXG4gICAgICAgICAgICAgICAgZmllbGRzVG9TaG93OiB7XG4gICAgICAgICAgICAgICAgICAuLi5jb25maWcuZmllbGRzVG9TaG93LFxuICAgICAgICAgICAgICAgICAgW2RhdGFJZF06IGZpZWxkc1RvU2hvdy5tYXAoZCA9PiBkLm5hbWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBvbkNoYW5nZShuZXdDb25maWcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgICAgbXVsdGlTZWxlY3RcbiAgICAgICAgICAgIGlucHV0VGhlbWU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiBUb29sdGlwQ29uZmlnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwQ29uZmlnRmFjdG9yeTtcbiJdfQ==