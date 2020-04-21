"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _window = require("global/window");

var _visStateSchema = _interopRequireDefault(require("./vis-state-schema"));

var _datasetSchema = _interopRequireDefault(require("./dataset-schema"));

var _mapStyleSchema = _interopRequireDefault(require("./map-style-schema"));

var _mapStateSchema = _interopRequireDefault(require("./map-state-schema"));

var _versions = require("./versions");

var _utils = require("../utils/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var REDUCER_SCHEMAS = {
  visState: _visStateSchema["default"],
  mapState: _mapStateSchema["default"],
  mapStyle: _mapStyleSchema["default"]
};

var KeplerGLSchema = /*#__PURE__*/function () {
  function KeplerGLSchema() {
    (0, _classCallCheck2["default"])(this, KeplerGLSchema);
    this._validVersions = _versions.VERSIONS;
    this._version = _versions.CURRENT_VERSION;
    this._reducerSchemas = REDUCER_SCHEMAS;
    this._datasetSchema = _datasetSchema["default"];
    this._datasetLastSaved = null;
    this._savedDataset = null;
  }
  /**
   * stateToSave = {
   *   datasets: [
   *     {
   *       version: 'v0',
   *       data: {id, label, color, allData, fields}
   *     },
   *     {
   *       version: 'v0',
   *       data: {id, label, color, allData, fields}
   *     }
   *   ],
   *   config: {
   *     version: 'v0',
   *     config: {}
   *   },
   *   info: {
   *     app: 'kepler.gl',
   *     create_at: 'Mon May 28 2018 21:04:46 GMT-0700 (PDT)'
   *   }
   * }
   *
   * Get config and data of current map to save
   * @param {Object} state
   * @returns {{datasets: Object[], config: Object, info: Object}} app state to save
   */


  (0, _createClass2["default"])(KeplerGLSchema, [{
    key: "save",
    value: function save(state) {
      return {
        datasets: this.getDatasetToSave(state),
        config: this.getConfigToSave(state),
        info: _objectSpread({
          app: 'kepler.gl',
          created_at: new Date().toString()
        }, this.getMapInfo(state))
      };
    }
  }, {
    key: "getMapInfo",
    value: function getMapInfo(state) {
      return state.visState.mapInfo;
    }
    /**
     *  Load saved map, argument can be (datasets, config) or ({datasets, config})
     * @param {Object|Array<Object>} savedDatasets
     * @param {Object} savedConfig
     */

  }, {
    key: "load",
    value: function load(savedDatasets, savedConfig) {
      // if pass dataset and config in as a single object
      if (arguments.length === 1 && (0, _utils.isPlainObject)(arguments[0]) && (Array.isArray(arguments[0].datasets) || (0, _utils.isPlainObject)(arguments[0].config))) {
        return this.load(arguments[0].datasets, arguments[0].config);
      }

      return _objectSpread({}, Array.isArray(savedDatasets) ? {
        datasets: this.parseSavedData(savedDatasets)
      } : {}, {}, savedConfig ? {
        config: this.parseSavedConfig(savedConfig)
      } : {});
    }
    /**
     * Get data to save
     * @param {Object} state - app state
     * @returns {{version: String, data: Object}} - dataset to save
     */

  }, {
    key: "getDatasetToSave",
    value: function getDatasetToSave(state) {
      var _this = this;

      var dataChangedSinceLastSave = this.hasDataChanged(state);

      if (!dataChangedSinceLastSave) {
        return this._savedDataset;
      }

      var visState = state.visState;
      var datasets = Object.values(visState.datasets).map(function (ds) {
        return {
          version: _this._version,
          data: _this._datasetSchema[_this._version].save(ds)
        };
      }); // keep a copy of formatted datasets to save

      this._datasetLastSaved = visState.datasets;
      this._savedDataset = datasets;
      return datasets;
    }
    /**
     * Get App config to save
     * @param {Object} state - app state
     * @returns {{version: String, config: Object}} - config to save
     */

  }, {
    key: "getConfigToSave",
    value: function getConfigToSave(state) {
      var _this2 = this;

      var config = Object.keys(this._reducerSchemas).reduce(function (accu, key) {
        return _objectSpread({}, accu, {}, state[key] ? _this2._reducerSchemas[key][_this2._version].save(state[key]) : {});
      }, {});
      return {
        version: this._version,
        config: config
      };
    }
    /**
     * Parse saved data
     * @param {Array} datasets
     * @returns {Object | null} - data to save
     */

  }, {
    key: "parseSavedData",
    value: function parseSavedData(datasets) {
      var _this3 = this;

      return datasets.reduce(function (accu, ds) {
        var validVersion = _this3.validateVersion(ds.version);

        if (!validVersion) {
          return accu;
        }

        accu.push(_this3._datasetSchema[validVersion].load(ds.data));
        return accu;
      }, []);
    }
    /**
     * Parse saved App config
     * @param {String} opt.version - config version
     * @param {Object} opt.config - saved config
     * @param {Object} state - current App State
     * @returns {Object | null} - parsed config
     */

  }, {
    key: "parseSavedConfig",
    value: function parseSavedConfig(_ref) {
      var _this4 = this;

      var version = _ref.version,
          config = _ref.config;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var validVersion = this.validateVersion(version);

      if (!validVersion) {
        return null;
      }

      return Object.keys(config).reduce(function (accu, key) {
        return _objectSpread({}, accu, {}, key in _this4._reducerSchemas ? _this4._reducerSchemas[key][validVersion].load(config[key]) : {});
      }, {});
    }
    /**
     * Validate version
     * @param {String} version
     * @returns {String | null} validVersion
     */

  }, {
    key: "validateVersion",
    value: function validateVersion(version) {
      if (!version) {
        _window.console.error('There is no version number associated with this saved map');

        return null;
      }

      if (!this._validVersions[version]) {
        _window.console.error("".concat(version, " is not a valid version"));

        return null;
      }

      return version;
    }
    /**
     * Check if data has changed since last save
     * @param {Object} state
     * @returns {boolean} - whether data has changed or not
     */

  }, {
    key: "hasDataChanged",
    value: function hasDataChanged(state) {
      return this._datasetLastSaved !== state.visState.datasets;
    }
  }]);
  return KeplerGLSchema;
}();

var KeplerGLSchemaManager = new KeplerGLSchema();
var _default = KeplerGLSchemaManager;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3NjaGVtYS1tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlJFRFVDRVJfU0NIRU1BUyIsInZpc1N0YXRlIiwidmlzU3RhdGVTY2hlbWEiLCJtYXBTdGF0ZSIsIm1hcFN0YXRlU2NoZW1hIiwibWFwU3R5bGUiLCJtYXBTdHlsZVNjaGVtYSIsIktlcGxlckdMU2NoZW1hIiwiX3ZhbGlkVmVyc2lvbnMiLCJWRVJTSU9OUyIsIl92ZXJzaW9uIiwiQ1VSUkVOVF9WRVJTSU9OIiwiX3JlZHVjZXJTY2hlbWFzIiwiX2RhdGFzZXRTY2hlbWEiLCJkYXRhc2V0U2NoZW1hIiwiX2RhdGFzZXRMYXN0U2F2ZWQiLCJfc2F2ZWREYXRhc2V0Iiwic3RhdGUiLCJkYXRhc2V0cyIsImdldERhdGFzZXRUb1NhdmUiLCJjb25maWciLCJnZXRDb25maWdUb1NhdmUiLCJpbmZvIiwiYXBwIiwiY3JlYXRlZF9hdCIsIkRhdGUiLCJ0b1N0cmluZyIsImdldE1hcEluZm8iLCJtYXBJbmZvIiwic2F2ZWREYXRhc2V0cyIsInNhdmVkQ29uZmlnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwibG9hZCIsInBhcnNlU2F2ZWREYXRhIiwicGFyc2VTYXZlZENvbmZpZyIsImRhdGFDaGFuZ2VkU2luY2VMYXN0U2F2ZSIsImhhc0RhdGFDaGFuZ2VkIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiZHMiLCJ2ZXJzaW9uIiwiZGF0YSIsInNhdmUiLCJrZXlzIiwicmVkdWNlIiwiYWNjdSIsImtleSIsInZhbGlkVmVyc2lvbiIsInZhbGlkYXRlVmVyc2lvbiIsInB1c2giLCJDb25zb2xlIiwiZXJyb3IiLCJLZXBsZXJHTFNjaGVtYU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxRQUFR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QXJCLENBQXJCOztBQUNBLFVBQUksQ0FBQ08sWUFBTCxFQUFtQjtBQUNqQixlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPWCxNQUFNLENBQUNPLElBQVAsQ0FBWTNCLE1BQVosRUFBb0I0QixNQUFwQixDQUNMLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLGlDQUNLRCxJQURMLE1BRU1DLEdBQUcsSUFBSSxNQUFJLENBQUN0QyxlQUFaLEdBQ0EsTUFBSSxDQUFDQSxlQUFMLENBQXFCc0MsR0FBckIsRUFBMEJDLFlBQTFCLEVBQXdDaEIsSUFBeEMsQ0FBNkNmLE1BQU0sQ0FBQzhCLEdBQUQsQ0FBbkQsQ0FEQSxHQUVBLEVBSk47QUFBQSxPQURLLEVBT0wsRUFQSyxDQUFQO0FBU0Q7QUFFRDs7Ozs7Ozs7b0NBS2dCTixPLEVBQVM7QUFDdkIsVUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWlUsd0JBQVFDLEtBQVIsQ0FBYywyREFBZDs7QUFDQSxlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJLENBQUMsS0FBSy9DLGNBQUwsQ0FBb0JvQyxPQUFwQixDQUFMLEVBQW1DO0FBQ2pDVSx3QkFBUUMsS0FBUixXQUFpQlgsT0FBakI7O0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsYUFBT0EsT0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O21DQUtlM0IsSyxFQUFPO0FBQ3BCLGFBQU8sS0FBS0YsaUJBQUwsS0FBMkJFLEtBQUssQ0FBQ2hCLFFBQU4sQ0FBZWlCLFFBQWpEO0FBQ0Q7Ozs7O0FBR0gsSUFBTXNDLHFCQUFxQixHQUFHLElBQUlqRCxjQUFKLEVBQTlCO2VBRWVpRCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcclxuXHJcbmltcG9ydCB2aXNTdGF0ZVNjaGVtYSBmcm9tICcuL3Zpcy1zdGF0ZS1zY2hlbWEnO1xyXG5pbXBvcnQgZGF0YXNldFNjaGVtYSBmcm9tICcuL2RhdGFzZXQtc2NoZW1hJztcclxuaW1wb3J0IG1hcFN0eWxlU2NoZW1hIGZyb20gJy4vbWFwLXN0eWxlLXNjaGVtYSc7XHJcbmltcG9ydCBtYXBTdGF0ZVNjaGVtYSBmcm9tICcuL21hcC1zdGF0ZS1zY2hlbWEnO1xyXG5cclxuaW1wb3J0IHtDVVJSRU5UX1ZFUlNJT04sIFZFUlNJT05TfSBmcm9tICcuL3ZlcnNpb25zJztcclxuaW1wb3J0IHtpc1BsYWluT2JqZWN0fSBmcm9tICd1dGlscy91dGlscyc7XHJcblxyXG5jb25zdCBSRURVQ0VSX1NDSEVNQVMgPSB7XHJcbiAgdmlzU3RhdGU6IHZpc1N0YXRlU2NoZW1hLFxyXG4gIG1hcFN0YXRlOiBtYXBTdGF0ZVNjaGVtYSxcclxuICBtYXBTdHlsZTogbWFwU3R5bGVTY2hlbWFcclxufTtcclxuXHJcbmNsYXNzIEtlcGxlckdMU2NoZW1hIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3ZhbGlkVmVyc2lvbnMgPSBWRVJTSU9OUztcclxuICAgIHRoaXMuX3ZlcnNpb24gPSBDVVJSRU5UX1ZFUlNJT047XHJcbiAgICB0aGlzLl9yZWR1Y2VyU2NoZW1hcyA9IFJFRFVDRVJfU0NIRU1BUztcclxuICAgIHRoaXMuX2RhdGFzZXRTY2hlbWEgPSBkYXRhc2V0U2NoZW1hO1xyXG5cclxuICAgIHRoaXMuX2RhdGFzZXRMYXN0U2F2ZWQgPSBudWxsO1xyXG4gICAgdGhpcy5fc2F2ZWREYXRhc2V0ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHN0YXRlVG9TYXZlID0ge1xyXG4gICAqICAgZGF0YXNldHM6IFtcclxuICAgKiAgICAge1xyXG4gICAqICAgICAgIHZlcnNpb246ICd2MCcsXHJcbiAgICogICAgICAgZGF0YToge2lkLCBsYWJlbCwgY29sb3IsIGFsbERhdGEsIGZpZWxkc31cclxuICAgKiAgICAgfSxcclxuICAgKiAgICAge1xyXG4gICAqICAgICAgIHZlcnNpb246ICd2MCcsXHJcbiAgICogICAgICAgZGF0YToge2lkLCBsYWJlbCwgY29sb3IsIGFsbERhdGEsIGZpZWxkc31cclxuICAgKiAgICAgfVxyXG4gICAqICAgXSxcclxuICAgKiAgIGNvbmZpZzoge1xyXG4gICAqICAgICB2ZXJzaW9uOiAndjAnLFxyXG4gICAqICAgICBjb25maWc6IHt9XHJcbiAgICogICB9LFxyXG4gICAqICAgaW5mbzoge1xyXG4gICAqICAgICBhcHA6ICdrZXBsZXIuZ2wnLFxyXG4gICAqICAgICBjcmVhdGVfYXQ6ICdNb24gTWF5IDI4IDIwMTggMjE6MDQ6NDYgR01ULTA3MDAgKFBEVCknXHJcbiAgICogICB9XHJcbiAgICogfVxyXG4gICAqXHJcbiAgICogR2V0IGNvbmZpZyBhbmQgZGF0YSBvZiBjdXJyZW50IG1hcCB0byBzYXZlXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXHJcbiAgICogQHJldHVybnMge3tkYXRhc2V0czogT2JqZWN0W10sIGNvbmZpZzogT2JqZWN0LCBpbmZvOiBPYmplY3R9fSBhcHAgc3RhdGUgdG8gc2F2ZVxyXG4gICAqL1xyXG4gIHNhdmUoc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGFzZXRzOiB0aGlzLmdldERhdGFzZXRUb1NhdmUoc3RhdGUpLFxyXG4gICAgICBjb25maWc6IHRoaXMuZ2V0Q29uZmlnVG9TYXZlKHN0YXRlKSxcclxuICAgICAgaW5mbzoge1xyXG4gICAgICAgIGFwcDogJ2tlcGxlci5nbCcsXHJcbiAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoKS50b1N0cmluZygpLFxyXG4gICAgICAgIC4uLnRoaXMuZ2V0TWFwSW5mbyhzdGF0ZSlcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldE1hcEluZm8oc3RhdGUpIHtcclxuICAgIHJldHVybiBzdGF0ZS52aXNTdGF0ZS5tYXBJbmZvO1xyXG4gIH1cclxuICAvKipcclxuICAgKiAgTG9hZCBzYXZlZCBtYXAsIGFyZ3VtZW50IGNhbiBiZSAoZGF0YXNldHMsIGNvbmZpZykgb3IgKHtkYXRhc2V0cywgY29uZmlnfSlcclxuICAgKiBAcGFyYW0ge09iamVjdHxBcnJheTxPYmplY3Q+fSBzYXZlZERhdGFzZXRzXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHNhdmVkQ29uZmlnXHJcbiAgICovXHJcbiAgbG9hZChzYXZlZERhdGFzZXRzLCBzYXZlZENvbmZpZykge1xyXG4gICAgLy8gaWYgcGFzcyBkYXRhc2V0IGFuZCBjb25maWcgaW4gYXMgYSBzaW5nbGUgb2JqZWN0XHJcbiAgICBpZiAoXHJcbiAgICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiZcclxuICAgICAgaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0pICYmXHJcbiAgICAgIChBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXS5kYXRhc2V0cykgfHwgaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0uY29uZmlnKSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gdGhpcy5sb2FkKGFyZ3VtZW50c1swXS5kYXRhc2V0cywgYXJndW1lbnRzWzBdLmNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uKEFycmF5LmlzQXJyYXkoc2F2ZWREYXRhc2V0cykgPyB7ZGF0YXNldHM6IHRoaXMucGFyc2VTYXZlZERhdGEoc2F2ZWREYXRhc2V0cyl9IDoge30pLFxyXG4gICAgICAuLi4oc2F2ZWRDb25maWcgPyB7Y29uZmlnOiB0aGlzLnBhcnNlU2F2ZWRDb25maWcoc2F2ZWRDb25maWcpfSA6IHt9KVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBkYXRhIHRvIHNhdmVcclxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgLSBhcHAgc3RhdGVcclxuICAgKiBAcmV0dXJucyB7e3ZlcnNpb246IFN0cmluZywgZGF0YTogT2JqZWN0fX0gLSBkYXRhc2V0IHRvIHNhdmVcclxuICAgKi9cclxuICBnZXREYXRhc2V0VG9TYXZlKHN0YXRlKSB7XHJcbiAgICBjb25zdCBkYXRhQ2hhbmdlZFNpbmNlTGFzdFNhdmUgPSB0aGlzLmhhc0RhdGFDaGFuZ2VkKHN0YXRlKTtcclxuICAgIGlmICghZGF0YUNoYW5nZWRTaW5jZUxhc3RTYXZlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zYXZlZERhdGFzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge3Zpc1N0YXRlfSA9IHN0YXRlO1xyXG5cclxuICAgIGNvbnN0IGRhdGFzZXRzID0gT2JqZWN0LnZhbHVlcyh2aXNTdGF0ZS5kYXRhc2V0cykubWFwKGRzID0+ICh7XHJcbiAgICAgIHZlcnNpb246IHRoaXMuX3ZlcnNpb24sXHJcbiAgICAgIGRhdGE6IHRoaXMuX2RhdGFzZXRTY2hlbWFbdGhpcy5fdmVyc2lvbl0uc2F2ZShkcylcclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyBrZWVwIGEgY29weSBvZiBmb3JtYXR0ZWQgZGF0YXNldHMgdG8gc2F2ZVxyXG4gICAgdGhpcy5fZGF0YXNldExhc3RTYXZlZCA9IHZpc1N0YXRlLmRhdGFzZXRzO1xyXG4gICAgdGhpcy5fc2F2ZWREYXRhc2V0ID0gZGF0YXNldHM7XHJcblxyXG4gICAgcmV0dXJuIGRhdGFzZXRzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IEFwcCBjb25maWcgdG8gc2F2ZVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSAtIGFwcCBzdGF0ZVxyXG4gICAqIEByZXR1cm5zIHt7dmVyc2lvbjogU3RyaW5nLCBjb25maWc6IE9iamVjdH19IC0gY29uZmlnIHRvIHNhdmVcclxuICAgKi9cclxuICBnZXRDb25maWdUb1NhdmUoc3RhdGUpIHtcclxuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5rZXlzKHRoaXMuX3JlZHVjZXJTY2hlbWFzKS5yZWR1Y2UoXHJcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XHJcbiAgICAgICAgLi4uYWNjdSxcclxuICAgICAgICAuLi4oc3RhdGVba2V5XSA/IHRoaXMuX3JlZHVjZXJTY2hlbWFzW2tleV1bdGhpcy5fdmVyc2lvbl0uc2F2ZShzdGF0ZVtrZXldKSA6IHt9KVxyXG4gICAgICB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcclxuICAgICAgY29uZmlnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2Ugc2F2ZWQgZGF0YVxyXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRhdGFzZXRzXHJcbiAgICogQHJldHVybnMge09iamVjdCB8IG51bGx9IC0gZGF0YSB0byBzYXZlXHJcbiAgICovXHJcbiAgcGFyc2VTYXZlZERhdGEoZGF0YXNldHMpIHtcclxuICAgIHJldHVybiBkYXRhc2V0cy5yZWR1Y2UoKGFjY3UsIGRzKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbGlkVmVyc2lvbiA9IHRoaXMudmFsaWRhdGVWZXJzaW9uKGRzLnZlcnNpb24pO1xyXG4gICAgICBpZiAoIXZhbGlkVmVyc2lvbikge1xyXG4gICAgICAgIHJldHVybiBhY2N1O1xyXG4gICAgICB9XHJcbiAgICAgIGFjY3UucHVzaCh0aGlzLl9kYXRhc2V0U2NoZW1hW3ZhbGlkVmVyc2lvbl0ubG9hZChkcy5kYXRhKSk7XHJcbiAgICAgIHJldHVybiBhY2N1O1xyXG4gICAgfSwgW10pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFyc2Ugc2F2ZWQgQXBwIGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBvcHQudmVyc2lvbiAtIGNvbmZpZyB2ZXJzaW9uXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdC5jb25maWcgLSBzYXZlZCBjb25maWdcclxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgLSBjdXJyZW50IEFwcCBTdGF0ZVxyXG4gICAqIEByZXR1cm5zIHtPYmplY3QgfCBudWxsfSAtIHBhcnNlZCBjb25maWdcclxuICAgKi9cclxuICBwYXJzZVNhdmVkQ29uZmlnKHt2ZXJzaW9uLCBjb25maWd9LCBzdGF0ZSA9IHt9KSB7XHJcbiAgICBjb25zdCB2YWxpZFZlcnNpb24gPSB0aGlzLnZhbGlkYXRlVmVyc2lvbih2ZXJzaW9uKTtcclxuICAgIGlmICghdmFsaWRWZXJzaW9uKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhjb25maWcpLnJlZHVjZShcclxuICAgICAgKGFjY3UsIGtleSkgPT4gKHtcclxuICAgICAgICAuLi5hY2N1LFxyXG4gICAgICAgIC4uLihrZXkgaW4gdGhpcy5fcmVkdWNlclNjaGVtYXNcclxuICAgICAgICAgID8gdGhpcy5fcmVkdWNlclNjaGVtYXNba2V5XVt2YWxpZFZlcnNpb25dLmxvYWQoY29uZmlnW2tleV0pXHJcbiAgICAgICAgICA6IHt9KVxyXG4gICAgICB9KSxcclxuICAgICAge31cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWYWxpZGF0ZSB2ZXJzaW9uXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZlcnNpb25cclxuICAgKiBAcmV0dXJucyB7U3RyaW5nIHwgbnVsbH0gdmFsaWRWZXJzaW9uXHJcbiAgICovXHJcbiAgdmFsaWRhdGVWZXJzaW9uKHZlcnNpb24pIHtcclxuICAgIGlmICghdmVyc2lvbikge1xyXG4gICAgICBDb25zb2xlLmVycm9yKCdUaGVyZSBpcyBubyB2ZXJzaW9uIG51bWJlciBhc3NvY2lhdGVkIHdpdGggdGhpcyBzYXZlZCBtYXAnKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl92YWxpZFZlcnNpb25zW3ZlcnNpb25dKSB7XHJcbiAgICAgIENvbnNvbGUuZXJyb3IoYCR7dmVyc2lvbn0gaXMgbm90IGEgdmFsaWQgdmVyc2lvbmApO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmVyc2lvbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGRhdGEgaGFzIGNoYW5nZWQgc2luY2UgbGFzdCBzYXZlXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IC0gd2hldGhlciBkYXRhIGhhcyBjaGFuZ2VkIG9yIG5vdFxyXG4gICAqL1xyXG4gIGhhc0RhdGFDaGFuZ2VkKHN0YXRlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0YXNldExhc3RTYXZlZCAhPT0gc3RhdGUudmlzU3RhdGUuZGF0YXNldHM7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBLZXBsZXJHTFNjaGVtYU1hbmFnZXIgPSBuZXcgS2VwbGVyR0xTY2hlbWEoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtlcGxlckdMU2NoZW1hTWFuYWdlcjtcclxuIl19