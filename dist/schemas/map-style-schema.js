"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propertiesV1 = exports.propertiesV0 = exports.customMapStylePropsV1 = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _versions = require("./versions");

var _schema = _interopRequireDefault(require("./schema"));

var _mapStyleSchema;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var customMapStylePropsV1 = {
  accessToken: null,
  custom: null,
  icon: null,
  id: null,
  label: null,
  url: null
};
exports.customMapStylePropsV1 = customMapStylePropsV1;
var CustomMapStyleSchema = new _schema["default"]({
  version: _versions.VERSIONS.v1,
  key: 'customStyle',
  properties: customMapStylePropsV1
});

var MapStyleSchemaV1 = /*#__PURE__*/function (_Schema) {
  (0, _inherits2["default"])(MapStyleSchemaV1, _Schema);

  var _super = _createSuper(MapStyleSchemaV1);

  function MapStyleSchemaV1() {
    var _this;

    (0, _classCallCheck2["default"])(this, MapStyleSchemaV1);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "version", _versions.VERSIONS.v1);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "key", 'mapStyles');
    return _this;
  }

  (0, _createClass2["default"])(MapStyleSchemaV1, [{
    key: "save",
    value: function save(mapStyles) {
      // save all custom styles
      var saveCustomStyle = Object.keys(mapStyles).reduce(function (accu, key) {
        return _objectSpread({}, accu, {}, mapStyles[key].custom ? (0, _defineProperty2["default"])({}, key, CustomMapStyleSchema.save(mapStyles[key]).customStyle) : {});
      }, {});
      return (0, _defineProperty2["default"])({}, this.key, saveCustomStyle);
    }
  }, {
    key: "load",
    value: function load(mapStyles) {
      // If mapStyle is an empty object, do not load it
      return (0, _typeof2["default"])(mapStyles) === 'object' && Object.keys(mapStyles).length ? (0, _defineProperty2["default"])({}, this.key, mapStyles) : {};
    }
  }]);
  return MapStyleSchemaV1;
}(_schema["default"]); // version v0


var propertiesV0 = {
  styleType: null,
  topLayerGroups: null,
  visibleLayerGroups: null,
  buildingLayer: null,
  mapStyles: new MapStyleSchemaV1()
};
exports.propertiesV0 = propertiesV0;
var propertiesV1 = {
  styleType: null,
  topLayerGroups: null,
  visibleLayerGroups: null,
  threeDBuildingColor: null,
  mapStyles: new MapStyleSchemaV1()
};
exports.propertiesV1 = propertiesV1;
var mapStyleSchema = (_mapStyleSchema = {}, (0, _defineProperty2["default"])(_mapStyleSchema, _versions.VERSIONS.v0, new _schema["default"]({
  version: _versions.VERSIONS.v0,
  properties: propertiesV0,
  key: 'mapStyle'
})), (0, _defineProperty2["default"])(_mapStyleSchema, _versions.VERSIONS.v1, new _schema["default"]({
  version: _versions.VERSIONS.v1,
  properties: propertiesV1,
  key: 'mapStyle'
})), _mapStyleSchema);
var _default = mapStyleSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL21hcC1zdHlsZS1zY2hlbWEuanMiXSwibmFtZXMiOlsiY3VzdG9tTWFwU3R5bGVQcm9wc1YxIiwiYWNjZXNzVG9rZW4iLCJjdXN0b20iLCJpY29uIiwiaWQiLCJsYWJlbCIsInVybCIsIkN1c3RvbU1hcFN0eWxlU2NoZW1hIiwiU2NoZW1hIiwidmVyc2lvbiIsIlZFUlNJT05TIiwidjEiLCJrZXkiLCJwcm9wZXJ0aWVzIiwiTWFwU3R5bGVTY2hlbWFWMSIsIm1hcFN0eWxlcyIsInNhdmVDdXN0b21TdHlsZSIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1Iiwic2F2ZSIsImN1c3RvbVN0eWxlIiwibGVuZ3RoIiwicHJvcGVydGllc1YwIiwic3R5bGVUeXBlIiwidG9wTGF5ZXJHcm91cHMiLCJ2aXNpYmxlTGF5ZXJHcm91cHMiLCJidWlsZGluZ0xheWVyIiwicHJvcGVydGllc1YxIiwidGhyZWVEQnVpbGRpbmdDb2xvciIsIm1hcFN0eWxlU2NoZW1hIiwidjAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLHFCQUFxQixHQUFHO0FBQ25DQyxFQUFBQSxXQUFXLEVBQUUsSUFEc0I7QUFFbkNDLEVBQUFBLE1BQU0sRUFBRSxJQUYyQjtBQUduQ0MsRUFBQUEsSUFBSSxFQUFFLElBSDZCO0FBSW5DQyxFQUFBQSxFQUFFLEVBQUUsSUFKK0I7QUFLbkNDLEVBQUFBLEtBQUssRUFBRSxJQUw0QjtBQU1uQ0MsRUFBQUEsR0FBRyxFQUFFO0FBTjhCLENBQTlCOztBQVNQLElBQU1DLG9CQUFvQixHQUFHLElBQUlDLGtCQUFKLENBQVc7QUFDdENDLEVBQUFBLE9BQU8sRUFBRUMsbUJBQVNDLEVBRG9CO0FBRXRDQyxFQUFBQSxHQUFHLEVBQUUsYUFGaUM7QUFHdENDLEVBQUFBLFVBQVUsRUFBRWI7QUFIMEIsQ0FBWCxDQUE3Qjs7SUFNTWMsZ0I7Ozs7Ozs7Ozs7Ozs7OztnR0FDTUosbUJBQVNDLEU7NEZBQ2IsVzs7Ozs7O3lCQUNESSxTLEVBQVc7QUFDZDtBQUNBLFVBQU1DLGVBQWUsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILFNBQVosRUFBdUJJLE1BQXZCLENBQ3RCLFVBQUNDLElBQUQsRUFBT1IsR0FBUDtBQUFBLGlDQUNLUSxJQURMLE1BRU1MLFNBQVMsQ0FBQ0gsR0FBRCxDQUFULENBQWVWLE1BQWYsd0NBQ0VVLEdBREYsRUFDUUwsb0JBQW9CLENBQUNjLElBQXJCLENBQTBCTixTQUFTLENBQUNILEdBQUQsQ0FBbkMsRUFBMENVLFdBRGxELElBRUEsRUFKTjtBQUFBLE9BRHNCLEVBT3RCLEVBUHNCLENBQXhCO0FBVUEsa0RBQVMsS0FBS1YsR0FBZCxFQUFvQkksZUFBcEI7QUFDRDs7O3lCQUVJRCxTLEVBQVc7QUFDZDtBQUNBLGFBQU8seUJBQU9BLFNBQVAsTUFBcUIsUUFBckIsSUFBaUNFLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxTQUFaLEVBQXVCUSxNQUF4RCx3Q0FDRCxLQUFLWCxHQURKLEVBQ1VHLFNBRFYsSUFFSCxFQUZKO0FBR0Q7OztFQXZCNEJQLGtCLEdBMEIvQjs7O0FBQ08sSUFBTWdCLFlBQVksR0FBRztBQUMxQkMsRUFBQUEsU0FBUyxFQUFFLElBRGU7QUFFMUJDLEVBQUFBLGNBQWMsRUFBRSxJQUZVO0FBRzFCQyxFQUFBQSxrQkFBa0IsRUFBRSxJQUhNO0FBSTFCQyxFQUFBQSxhQUFhLEVBQUUsSUFKVztBQUsxQmIsRUFBQUEsU0FBUyxFQUFFLElBQUlELGdCQUFKO0FBTGUsQ0FBckI7O0FBUUEsSUFBTWUsWUFBWSxHQUFHO0FBQzFCSixFQUFBQSxTQUFTLEVBQUUsSUFEZTtBQUUxQkMsRUFBQUEsY0FBYyxFQUFFLElBRlU7QUFHMUJDLEVBQUFBLGtCQUFrQixFQUFFLElBSE07QUFJMUJHLEVBQUFBLG1CQUFtQixFQUFFLElBSks7QUFLMUJmLEVBQUFBLFNBQVMsRUFBRSxJQUFJRCxnQkFBSjtBQUxlLENBQXJCOztBQVFQLElBQU1pQixjQUFjLDRFQUNqQnJCLG1CQUFTc0IsRUFEUSxFQUNILElBQUl4QixrQkFBSixDQUFXO0FBQ3hCQyxFQUFBQSxPQUFPLEVBQUVDLG1CQUFTc0IsRUFETTtBQUV4Qm5CLEVBQUFBLFVBQVUsRUFBRVcsWUFGWTtBQUd4QlosRUFBQUEsR0FBRyxFQUFFO0FBSG1CLENBQVgsQ0FERyxxREFNakJGLG1CQUFTQyxFQU5RLEVBTUgsSUFBSUgsa0JBQUosQ0FBVztBQUN4QkMsRUFBQUEsT0FBTyxFQUFFQyxtQkFBU0MsRUFETTtBQUV4QkUsRUFBQUEsVUFBVSxFQUFFZ0IsWUFGWTtBQUd4QmpCLEVBQUFBLEdBQUcsRUFBRTtBQUhtQixDQUFYLENBTkcsbUJBQXBCO2VBYWVtQixjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtWRVJTSU9OU30gZnJvbSAnLi92ZXJzaW9ucyc7XHJcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGN1c3RvbU1hcFN0eWxlUHJvcHNWMSA9IHtcclxuICBhY2Nlc3NUb2tlbjogbnVsbCxcclxuICBjdXN0b206IG51bGwsXHJcbiAgaWNvbjogbnVsbCxcclxuICBpZDogbnVsbCxcclxuICBsYWJlbDogbnVsbCxcclxuICB1cmw6IG51bGxcclxufTtcclxuXHJcbmNvbnN0IEN1c3RvbU1hcFN0eWxlU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgdmVyc2lvbjogVkVSU0lPTlMudjEsXHJcbiAga2V5OiAnY3VzdG9tU3R5bGUnLFxyXG4gIHByb3BlcnRpZXM6IGN1c3RvbU1hcFN0eWxlUHJvcHNWMVxyXG59KTtcclxuXHJcbmNsYXNzIE1hcFN0eWxlU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xyXG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MTtcclxuICBrZXkgPSAnbWFwU3R5bGVzJztcclxuICBzYXZlKG1hcFN0eWxlcykge1xyXG4gICAgLy8gc2F2ZSBhbGwgY3VzdG9tIHN0eWxlc1xyXG4gICAgY29uc3Qgc2F2ZUN1c3RvbVN0eWxlID0gT2JqZWN0LmtleXMobWFwU3R5bGVzKS5yZWR1Y2UoXHJcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAuLi4obWFwU3R5bGVzW2tleV0uY3VzdG9tXHJcbiAgICAgICAgICA/IHtba2V5XTogQ3VzdG9tTWFwU3R5bGVTY2hlbWEuc2F2ZShtYXBTdHlsZXNba2V5XSkuY3VzdG9tU3R5bGV9XHJcbiAgICAgICAgICA6IHt9KVxyXG4gICAgICB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtbdGhpcy5rZXldOiBzYXZlQ3VzdG9tU3R5bGV9O1xyXG4gIH1cclxuXHJcbiAgbG9hZChtYXBTdHlsZXMpIHtcclxuICAgIC8vIElmIG1hcFN0eWxlIGlzIGFuIGVtcHR5IG9iamVjdCwgZG8gbm90IGxvYWQgaXRcclxuICAgIHJldHVybiB0eXBlb2YgbWFwU3R5bGVzID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhtYXBTdHlsZXMpLmxlbmd0aFxyXG4gICAgICA/IHtbdGhpcy5rZXldOiBtYXBTdHlsZXN9XHJcbiAgICAgIDoge307XHJcbiAgfVxyXG59XHJcblxyXG4vLyB2ZXJzaW9uIHYwXHJcbmV4cG9ydCBjb25zdCBwcm9wZXJ0aWVzVjAgPSB7XHJcbiAgc3R5bGVUeXBlOiBudWxsLFxyXG4gIHRvcExheWVyR3JvdXBzOiBudWxsLFxyXG4gIHZpc2libGVMYXllckdyb3VwczogbnVsbCxcclxuICBidWlsZGluZ0xheWVyOiBudWxsLFxyXG4gIG1hcFN0eWxlczogbmV3IE1hcFN0eWxlU2NoZW1hVjEoKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb3BlcnRpZXNWMSA9IHtcclxuICBzdHlsZVR5cGU6IG51bGwsXHJcbiAgdG9wTGF5ZXJHcm91cHM6IG51bGwsXHJcbiAgdmlzaWJsZUxheWVyR3JvdXBzOiBudWxsLFxyXG4gIHRocmVlREJ1aWxkaW5nQ29sb3I6IG51bGwsXHJcbiAgbWFwU3R5bGVzOiBuZXcgTWFwU3R5bGVTY2hlbWFWMSgpXHJcbn07XHJcblxyXG5jb25zdCBtYXBTdHlsZVNjaGVtYSA9IHtcclxuICBbVkVSU0lPTlMudjBdOiBuZXcgU2NoZW1hKHtcclxuICAgIHZlcnNpb246IFZFUlNJT05TLnYwLFxyXG4gICAgcHJvcGVydGllczogcHJvcGVydGllc1YwLFxyXG4gICAga2V5OiAnbWFwU3R5bGUnXHJcbiAgfSksXHJcbiAgW1ZFUlNJT05TLnYxXTogbmV3IFNjaGVtYSh7XHJcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcclxuICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNWMSxcclxuICAgIGtleTogJ21hcFN0eWxlJ1xyXG4gIH0pXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXBTdHlsZVNjaGVtYTtcclxuIl19