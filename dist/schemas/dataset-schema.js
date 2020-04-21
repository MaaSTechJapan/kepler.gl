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

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _window = require("global/window");

var _versions = require("./versions");

var _schema = _interopRequireDefault(require("./schema"));

var _dataProcessor = require("../processors/data-processor");

var _datasetSchema;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// version v0
var fieldPropertiesV0 = {
  name: null,
  type: null
};
var fieldPropertiesV1 = {
  name: null,
  type: null,
  format: null,
  analyzerType: null
};

var FieldSchema = /*#__PURE__*/function (_Schema) {
  (0, _inherits2["default"])(FieldSchema, _Schema);

  var _super = _createSuper(FieldSchema);

  function FieldSchema() {
    var _this;

    (0, _classCallCheck2["default"])(this, FieldSchema);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "key", 'fields');
    return _this;
  }

  (0, _createClass2["default"])(FieldSchema, [{
    key: "save",
    value: function save(fields) {
      var _this2 = this;

      return (0, _defineProperty2["default"])({}, this.key, fields.map(function (f) {
        return _this2.savePropertiesOrApplySchema(f)[_this2.key];
      }));
    }
  }, {
    key: "load",
    value: function load(fields) {
      return (0, _defineProperty2["default"])({}, this.key, fields);
    }
  }]);
  return FieldSchema;
}(_schema["default"]);

var propertiesV0 = {
  id: null,
  label: null,
  color: null,
  allData: null,
  fields: new FieldSchema({
    version: _versions.VERSIONS.v0,
    properties: fieldPropertiesV0
  })
};

var propertiesV1 = _objectSpread({}, propertiesV0, {
  fields: new FieldSchema({
    version: _versions.VERSIONS.v1,
    properties: fieldPropertiesV1
  })
});

var DatasetSchema = /*#__PURE__*/function (_Schema2) {
  (0, _inherits2["default"])(DatasetSchema, _Schema2);

  var _super2 = _createSuper(DatasetSchema);

  function DatasetSchema() {
    var _this3;

    (0, _classCallCheck2["default"])(this, DatasetSchema);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super2.call.apply(_super2, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "key", 'dataset');
    return _this3;
  }

  (0, _createClass2["default"])(DatasetSchema, [{
    key: "save",
    value: function save(dataset) {
      return this.savePropertiesOrApplySchema(dataset)[this.key];
    }
  }, {
    key: "load",
    value: function load(dataset) {
      var fields = dataset.fields,
          allData = dataset.allData;
      var updatedFields = fields; // recalculate field type
      // because we have updated type-analyzer
      // we need to add format to each field

      var needCalculateMeta = fields[0] && (!fields[0].hasOwnProperty('format') || !fields[0].hasOwnProperty('analyzerType'));

      if (needCalculateMeta) {
        var fieldOrder = fields.map(function (f) {
          return f.name;
        });
        var sampleData = (0, _dataProcessor.getSampleForTypeAnalyze)({
          fields: fieldOrder,
          allData: allData
        });
        var meta = (0, _dataProcessor.getFieldsFromData)(sampleData, fieldOrder);
        updatedFields = meta.map(function (f, i) {
          return _objectSpread({}, (0, _lodash["default"])(meta[i], ['name', 'type', 'format']), {
            analyzerType: meta[i].analyzerType
          });
        });
        updatedFields.forEach(function (f, i) {
          if (fields[i].type !== f.type) {
            // if newly detected field type is different from saved type
            // we log it but won't update it, cause we don't want to break people's map
            _window.console.warn("detect ".concat(f.name, " type is now ").concat(f.type, " instead of ").concat(fields[i].type));
          }
        });
      } // get format of all fields


      return {
        data: {
          fields: updatedFields,
          rows: dataset.allData
        },
        info: (0, _lodash["default"])(dataset, ['id', 'label', 'color'])
      };
    }
  }]);
  return DatasetSchema;
}(_schema["default"]);

var datasetSchema = (_datasetSchema = {}, (0, _defineProperty2["default"])(_datasetSchema, _versions.VERSIONS.v0, new DatasetSchema({
  version: _versions.VERSIONS.v0,
  properties: propertiesV0
})), (0, _defineProperty2["default"])(_datasetSchema, _versions.VERSIONS.v1, new DatasetSchema({
  version: _versions.VERSIONS.v1,
  properties: propertiesV1
})), _datasetSchema);
var _default = datasetSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL2RhdGFzZXQtc2NoZW1hLmpzIl0sIm5hbWVzIjpbImZpZWxkUHJvcGVydGllc1YwIiwibmFtZSIsInR5cGUiLCJmaWVsZFByb3BlcnRpZXNWMSIsImZvcm1hdCIsImFuYWx5emVyVHlwZSIsIkZpZWxkU2NoZW1hIiwiZmllbGRzIiwia2V5IiwibWFwIiwiZiIsInNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYSIsIlNjaGVtYSIsInByb3BlcnRpZXNWMCIsImlkIiwibGFiZWwiLCJjb2xvciIsImFsbERhdGEiLCJ2ZXJzaW9uIiwiVkVSU0lPTlMiLCJ2MCIsInByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzVjEiLCJ2MSIsIkRhdGFzZXRTY2hlbWEiLCJkYXRhc2V0IiwidXBkYXRlZEZpZWxkcyIsIm5lZWRDYWxjdWxhdGVNZXRhIiwiaGFzT3duUHJvcGVydHkiLCJmaWVsZE9yZGVyIiwic2FtcGxlRGF0YSIsIm1ldGEiLCJpIiwiZm9yRWFjaCIsImdsb2JhbENvbnNvbGUiLCJ3YXJuIiwiZGF0YSIsInJvd3MiLCJpbmZvIiwiZGF0YXNldFNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRSxJQURrQjtBQUV4QkMsRUFBQUEsSUFBSSxFQUFFO0FBRmtCLENBQTFCO0FBS0EsSUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJGLEVBQUFBLElBQUksRUFBRSxJQURrQjtBQUV4QkMsRUFBQUEsSUFBSSxFQUFFLElBRmtCO0FBR3hCRSxFQUFBQSxNQUFNLEVBQUUsSUFIZ0I7QUFJeEJDLEVBQUFBLFlBQVksRUFBRTtBQUpVLENBQTFCOztJQU9NQyxXOzs7Ozs7Ozs7Ozs7Ozs7NEZBQ0UsUTs7Ozs7O3lCQUNEQyxNLEVBQVE7QUFBQTs7QUFDWCxrREFDRyxLQUFLQyxHQURSLEVBQ2NELE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUFDLENBQUM7QUFBQSxlQUFJLE1BQUksQ0FBQ0MsMkJBQUwsQ0FBaUNELENBQWpDLEVBQW9DLE1BQUksQ0FBQ0YsR0FBekMsQ0FBSjtBQUFBLE9BQVosQ0FEZDtBQUdEOzs7eUJBQ0lELE0sRUFBUTtBQUNYLGtEQUFTLEtBQUtDLEdBQWQsRUFBb0JELE1BQXBCO0FBQ0Q7OztFQVR1Qkssa0I7O0FBWTFCLElBQU1DLFlBQVksR0FBRztBQUNuQkMsRUFBQUEsRUFBRSxFQUFFLElBRGU7QUFFbkJDLEVBQUFBLEtBQUssRUFBRSxJQUZZO0FBR25CQyxFQUFBQSxLQUFLLEVBQUUsSUFIWTtBQUluQkMsRUFBQUEsT0FBTyxFQUFFLElBSlU7QUFLbkJWLEVBQUFBLE1BQU0sRUFBRSxJQUFJRCxXQUFKLENBQWdCO0FBQ3RCWSxJQUFBQSxPQUFPLEVBQUVDLG1CQUFTQyxFQURJO0FBRXRCQyxJQUFBQSxVQUFVLEVBQUVyQjtBQUZVLEdBQWhCO0FBTFcsQ0FBckI7O0FBV0EsSUFBTXNCLFlBQVkscUJBQ2JULFlBRGE7QUFFaEJOLEVBQUFBLE1BQU0sRUFBRSxJQUFJRCxXQUFKLENBQWdCO0FBQ3RCWSxJQUFBQSxPQUFPLEVBQUVDLG1CQUFTSSxFQURJO0FBRXRCRixJQUFBQSxVQUFVLEVBQUVsQjtBQUZVLEdBQWhCO0FBRlEsRUFBbEI7O0lBUU1xQixhOzs7Ozs7Ozs7Ozs7Ozs7NkZBQ0UsUzs7Ozs7O3lCQUVEQyxPLEVBQVM7QUFDWixhQUFPLEtBQUtkLDJCQUFMLENBQWlDYyxPQUFqQyxFQUEwQyxLQUFLakIsR0FBL0MsQ0FBUDtBQUNEOzs7eUJBQ0lpQixPLEVBQVM7QUFBQSxVQUNMbEIsTUFESyxHQUNja0IsT0FEZCxDQUNMbEIsTUFESztBQUFBLFVBQ0dVLE9BREgsR0FDY1EsT0FEZCxDQUNHUixPQURIO0FBRVosVUFBSVMsYUFBYSxHQUFHbkIsTUFBcEIsQ0FGWSxDQUlaO0FBQ0E7QUFDQTs7QUFDQSxVQUFNb0IsaUJBQWlCLEdBQ3JCcEIsTUFBTSxDQUFDLENBQUQsQ0FBTixLQUNDLENBQUNBLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVXFCLGNBQVYsQ0FBeUIsUUFBekIsQ0FBRCxJQUF1QyxDQUFDckIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVcUIsY0FBVixDQUF5QixjQUF6QixDQUR6QyxDQURGOztBQUlBLFVBQUlELGlCQUFKLEVBQXVCO0FBQ3JCLFlBQU1FLFVBQVUsR0FBR3RCLE1BQU0sQ0FBQ0UsR0FBUCxDQUFXLFVBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDVCxJQUFOO0FBQUEsU0FBWixDQUFuQjtBQUVBLFlBQU02QixVQUFVLEdBQUcsNENBQXdCO0FBQUN2QixVQUFBQSxNQUFNLEVBQUVzQixVQUFUO0FBQXFCWixVQUFBQSxPQUFPLEVBQVBBO0FBQXJCLFNBQXhCLENBQW5CO0FBQ0EsWUFBTWMsSUFBSSxHQUFHLHNDQUFrQkQsVUFBbEIsRUFBOEJELFVBQTlCLENBQWI7QUFFQUgsUUFBQUEsYUFBYSxHQUFHSyxJQUFJLENBQUN0QixHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFJc0IsQ0FBSjtBQUFBLG1DQUNwQix3QkFBS0QsSUFBSSxDQUFDQyxDQUFELENBQVQsRUFBYyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLFFBQWpCLENBQWQsQ0FEb0I7QUFFdkIzQixZQUFBQSxZQUFZLEVBQUUwQixJQUFJLENBQUNDLENBQUQsQ0FBSixDQUFRM0I7QUFGQztBQUFBLFNBQVQsQ0FBaEI7QUFLQXFCLFFBQUFBLGFBQWEsQ0FBQ08sT0FBZCxDQUFzQixVQUFDdkIsQ0FBRCxFQUFJc0IsQ0FBSixFQUFVO0FBQzlCLGNBQUl6QixNQUFNLENBQUN5QixDQUFELENBQU4sQ0FBVTlCLElBQVYsS0FBbUJRLENBQUMsQ0FBQ1IsSUFBekIsRUFBK0I7QUFDN0I7QUFDQTtBQUNBZ0MsNEJBQWNDLElBQWQsa0JBQTZCekIsQ0FBQyxDQUFDVCxJQUEvQiwwQkFBbURTLENBQUMsQ0FBQ1IsSUFBckQseUJBQXdFSyxNQUFNLENBQUN5QixDQUFELENBQU4sQ0FBVTlCLElBQWxGO0FBQ0Q7QUFDRixTQU5EO0FBT0QsT0E3QlcsQ0ErQlo7OztBQUNBLGFBQU87QUFDTGtDLFFBQUFBLElBQUksRUFBRTtBQUFDN0IsVUFBQUEsTUFBTSxFQUFFbUIsYUFBVDtBQUF3QlcsVUFBQUEsSUFBSSxFQUFFWixPQUFPLENBQUNSO0FBQXRDLFNBREQ7QUFFTHFCLFFBQUFBLElBQUksRUFBRSx3QkFBS2IsT0FBTCxFQUFjLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsT0FBaEIsQ0FBZDtBQUZELE9BQVA7QUFJRDs7O0VBMUN5QmIsa0I7O0FBNkM1QixJQUFNMkIsYUFBYSwwRUFDaEJwQixtQkFBU0MsRUFETyxFQUNGLElBQUlJLGFBQUosQ0FBa0I7QUFDL0JOLEVBQUFBLE9BQU8sRUFBRUMsbUJBQVNDLEVBRGE7QUFFL0JDLEVBQUFBLFVBQVUsRUFBRVI7QUFGbUIsQ0FBbEIsQ0FERSxvREFLaEJNLG1CQUFTSSxFQUxPLEVBS0YsSUFBSUMsYUFBSixDQUFrQjtBQUMvQk4sRUFBQUEsT0FBTyxFQUFFQyxtQkFBU0ksRUFEYTtBQUUvQkYsRUFBQUEsVUFBVSxFQUFFQztBQUZtQixDQUFsQixDQUxFLGtCQUFuQjtlQVdlaUIsYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC5waWNrJztcclxuaW1wb3J0IHtjb25zb2xlIGFzIGdsb2JhbENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xyXG5cclxuaW1wb3J0IHtWRVJTSU9OU30gZnJvbSAnLi92ZXJzaW9ucyc7XHJcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xyXG5pbXBvcnQge2dldEZpZWxkc0Zyb21EYXRhLCBnZXRTYW1wbGVGb3JUeXBlQW5hbHl6ZX0gZnJvbSAncHJvY2Vzc29ycy9kYXRhLXByb2Nlc3Nvcic7XHJcblxyXG4vLyB2ZXJzaW9uIHYwXHJcbmNvbnN0IGZpZWxkUHJvcGVydGllc1YwID0ge1xyXG4gIG5hbWU6IG51bGwsXHJcbiAgdHlwZTogbnVsbFxyXG59O1xyXG5cclxuY29uc3QgZmllbGRQcm9wZXJ0aWVzVjEgPSB7XHJcbiAgbmFtZTogbnVsbCxcclxuICB0eXBlOiBudWxsLFxyXG4gIGZvcm1hdDogbnVsbCxcclxuICBhbmFseXplclR5cGU6IG51bGxcclxufTtcclxuXHJcbmNsYXNzIEZpZWxkU2NoZW1hIGV4dGVuZHMgU2NoZW1hIHtcclxuICBrZXkgPSAnZmllbGRzJztcclxuICBzYXZlKGZpZWxkcykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgW3RoaXMua2V5XTogZmllbGRzLm1hcChmID0+IHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGYpW3RoaXMua2V5XSlcclxuICAgIH07XHJcbiAgfVxyXG4gIGxvYWQoZmllbGRzKSB7XHJcbiAgICByZXR1cm4ge1t0aGlzLmtleV06IGZpZWxkc307XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwcm9wZXJ0aWVzVjAgPSB7XHJcbiAgaWQ6IG51bGwsXHJcbiAgbGFiZWw6IG51bGwsXHJcbiAgY29sb3I6IG51bGwsXHJcbiAgYWxsRGF0YTogbnVsbCxcclxuICBmaWVsZHM6IG5ldyBGaWVsZFNjaGVtYSh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcclxuICAgIHByb3BlcnRpZXM6IGZpZWxkUHJvcGVydGllc1YwXHJcbiAgfSlcclxufTtcclxuXHJcbmNvbnN0IHByb3BlcnRpZXNWMSA9IHtcclxuICAuLi5wcm9wZXJ0aWVzVjAsXHJcbiAgZmllbGRzOiBuZXcgRmllbGRTY2hlbWEoe1xyXG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXHJcbiAgICBwcm9wZXJ0aWVzOiBmaWVsZFByb3BlcnRpZXNWMVxyXG4gIH0pXHJcbn07XHJcblxyXG5jbGFzcyBEYXRhc2V0U2NoZW1hIGV4dGVuZHMgU2NoZW1hIHtcclxuICBrZXkgPSAnZGF0YXNldCc7XHJcblxyXG4gIHNhdmUoZGF0YXNldCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGRhdGFzZXQpW3RoaXMua2V5XTtcclxuICB9XHJcbiAgbG9hZChkYXRhc2V0KSB7XHJcbiAgICBjb25zdCB7ZmllbGRzLCBhbGxEYXRhfSA9IGRhdGFzZXQ7XHJcbiAgICBsZXQgdXBkYXRlZEZpZWxkcyA9IGZpZWxkcztcclxuXHJcbiAgICAvLyByZWNhbGN1bGF0ZSBmaWVsZCB0eXBlXHJcbiAgICAvLyBiZWNhdXNlIHdlIGhhdmUgdXBkYXRlZCB0eXBlLWFuYWx5emVyXHJcbiAgICAvLyB3ZSBuZWVkIHRvIGFkZCBmb3JtYXQgdG8gZWFjaCBmaWVsZFxyXG4gICAgY29uc3QgbmVlZENhbGN1bGF0ZU1ldGEgPVxyXG4gICAgICBmaWVsZHNbMF0gJiZcclxuICAgICAgKCFmaWVsZHNbMF0uaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpIHx8ICFmaWVsZHNbMF0uaGFzT3duUHJvcGVydHkoJ2FuYWx5emVyVHlwZScpKTtcclxuXHJcbiAgICBpZiAobmVlZENhbGN1bGF0ZU1ldGEpIHtcclxuICAgICAgY29uc3QgZmllbGRPcmRlciA9IGZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpO1xyXG5cclxuICAgICAgY29uc3Qgc2FtcGxlRGF0YSA9IGdldFNhbXBsZUZvclR5cGVBbmFseXplKHtmaWVsZHM6IGZpZWxkT3JkZXIsIGFsbERhdGF9KTtcclxuICAgICAgY29uc3QgbWV0YSA9IGdldEZpZWxkc0Zyb21EYXRhKHNhbXBsZURhdGEsIGZpZWxkT3JkZXIpO1xyXG5cclxuICAgICAgdXBkYXRlZEZpZWxkcyA9IG1ldGEubWFwKChmLCBpKSA9PiAoe1xyXG4gICAgICAgIC4uLnBpY2sobWV0YVtpXSwgWyduYW1lJywgJ3R5cGUnLCAnZm9ybWF0J10pLFxyXG4gICAgICAgIGFuYWx5emVyVHlwZTogbWV0YVtpXS5hbmFseXplclR5cGVcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgdXBkYXRlZEZpZWxkcy5mb3JFYWNoKChmLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGZpZWxkc1tpXS50eXBlICE9PSBmLnR5cGUpIHtcclxuICAgICAgICAgIC8vIGlmIG5ld2x5IGRldGVjdGVkIGZpZWxkIHR5cGUgaXMgZGlmZmVyZW50IGZyb20gc2F2ZWQgdHlwZVxyXG4gICAgICAgICAgLy8gd2UgbG9nIGl0IGJ1dCB3b24ndCB1cGRhdGUgaXQsIGNhdXNlIHdlIGRvbid0IHdhbnQgdG8gYnJlYWsgcGVvcGxlJ3MgbWFwXHJcbiAgICAgICAgICBnbG9iYWxDb25zb2xlLndhcm4oYGRldGVjdCAke2YubmFtZX0gdHlwZSBpcyBub3cgJHtmLnR5cGV9IGluc3RlYWQgb2YgJHtmaWVsZHNbaV0udHlwZX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCBmb3JtYXQgb2YgYWxsIGZpZWxkc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YToge2ZpZWxkczogdXBkYXRlZEZpZWxkcywgcm93czogZGF0YXNldC5hbGxEYXRhfSxcclxuICAgICAgaW5mbzogcGljayhkYXRhc2V0LCBbJ2lkJywgJ2xhYmVsJywgJ2NvbG9yJ10pXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGF0YXNldFNjaGVtYSA9IHtcclxuICBbVkVSU0lPTlMudjBdOiBuZXcgRGF0YXNldFNjaGVtYSh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcclxuICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNWMFxyXG4gIH0pLFxyXG4gIFtWRVJTSU9OUy52MV06IG5ldyBEYXRhc2V0U2NoZW1hKHtcclxuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxyXG4gICAgcHJvcGVydGllczogcHJvcGVydGllc1YxXHJcbiAgfSlcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRhdGFzZXRTY2hlbWE7XHJcbiJdfQ==