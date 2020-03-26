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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3NjaGVtYS1tYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlJFRFVDRVJfU0NIRU1BUyIsInZpc1N0YXRlIiwidmlzU3RhdGVTY2hlbWEiLCJtYXBTdGF0ZSIsIm1hcFN0YXRlU2NoZW1hIiwibWFwU3R5bGUiLCJtYXBTdHlsZVNjaGVtYSIsIktlcGxlckdMU2NoZW1hIiwiX3ZhbGlkVmVyc2lvbnMiLCJWRVJTSU9OUyIsIl92ZXJzaW9uIiwiQ1VSUkVOVF9WRVJTSU9OIiwiX3JlZHVjZXJTY2hlbWFzIiwiX2RhdGFzZXRTY2hlbWEiLCJkYXRhc2V0U2NoZW1hIiwiX2RhdGFzZXRMYXN0U2F2ZWQiLCJfc2F2ZWREYXRhc2V0Iiwic3RhdGUiLCJkYXRhc2V0cyIsImdldERhdGFzZXRUb1NhdmUiLCJjb25maWciLCJnZXRDb25maWdUb1NhdmUiLCJpbmZvIiwiYXBwIiwiY3JlYXRlZF9hdCIsIkRhdGUiLCJ0b1N0cmluZyIsImdldE1hcEluZm8iLCJtYXBJbmZvIiwic2F2ZWREYXRhc2V0cyIsInNhdmVkQ29uZmlnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiQXJyYXkiLCJpc0FycmF5IiwibG9hZCIsInBhcnNlU2F2ZWREYXRhIiwicGFyc2VTYXZlZENvbmZpZyIsImRhdGFDaGFuZ2VkU2luY2VMYXN0U2F2ZSIsImhhc0RhdGFDaGFuZ2VkIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiZHMiLCJ2ZXJzaW9uIiwiZGF0YSIsInNhdmUiLCJrZXlzIiwicmVkdWNlIiwiYWNjdSIsImtleSIsInZhbGlkVmVyc2lvbiIsInZhbGlkYXRlVmVyc2lvbiIsInB1c2giLCJDb25zb2xlIiwiZXJyb3IiLCJLZXBsZXJHTFNjaGVtYU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHO0FBQ3RCQyxFQUFBQSxRQUFR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QXJCLENBQXJCOztBQUNBLFVBQUksQ0FBQ08sWUFBTCxFQUFtQjtBQUNqQixlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPWCxNQUFNLENBQUNPLElBQVAsQ0FBWTNCLE1BQVosRUFBb0I0QixNQUFwQixDQUNMLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLGlDQUNLRCxJQURMLE1BRU1DLEdBQUcsSUFBSSxNQUFJLENBQUN0QyxlQUFaLEdBQ0EsTUFBSSxDQUFDQSxlQUFMLENBQXFCc0MsR0FBckIsRUFBMEJDLFlBQTFCLEVBQXdDaEIsSUFBeEMsQ0FBNkNmLE1BQU0sQ0FBQzhCLEdBQUQsQ0FBbkQsQ0FEQSxHQUVBLEVBSk47QUFBQSxPQURLLEVBT0wsRUFQSyxDQUFQO0FBU0Q7QUFFRDs7Ozs7Ozs7b0NBS2dCTixPLEVBQVM7QUFDdkIsVUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDWlUsd0JBQVFDLEtBQVIsQ0FBYywyREFBZDs7QUFDQSxlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJLENBQUMsS0FBSy9DLGNBQUwsQ0FBb0JvQyxPQUFwQixDQUFMLEVBQW1DO0FBQ2pDVSx3QkFBUUMsS0FBUixXQUFpQlgsT0FBakI7O0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsYUFBT0EsT0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7O21DQUtlM0IsSyxFQUFPO0FBQ3BCLGFBQU8sS0FBS0YsaUJBQUwsS0FBMkJFLEtBQUssQ0FBQ2hCLFFBQU4sQ0FBZWlCLFFBQWpEO0FBQ0Q7Ozs7O0FBR0gsSUFBTXNDLHFCQUFxQixHQUFHLElBQUlqRCxjQUFKLEVBQTlCO2VBRWVpRCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcblxuaW1wb3J0IHZpc1N0YXRlU2NoZW1hIGZyb20gJy4vdmlzLXN0YXRlLXNjaGVtYSc7XG5pbXBvcnQgZGF0YXNldFNjaGVtYSBmcm9tICcuL2RhdGFzZXQtc2NoZW1hJztcbmltcG9ydCBtYXBTdHlsZVNjaGVtYSBmcm9tICcuL21hcC1zdHlsZS1zY2hlbWEnO1xuaW1wb3J0IG1hcFN0YXRlU2NoZW1hIGZyb20gJy4vbWFwLXN0YXRlLXNjaGVtYSc7XG5cbmltcG9ydCB7Q1VSUkVOVF9WRVJTSU9OLCBWRVJTSU9OU30gZnJvbSAnLi92ZXJzaW9ucyc7XG5pbXBvcnQge2lzUGxhaW5PYmplY3R9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuY29uc3QgUkVEVUNFUl9TQ0hFTUFTID0ge1xuICB2aXNTdGF0ZTogdmlzU3RhdGVTY2hlbWEsXG4gIG1hcFN0YXRlOiBtYXBTdGF0ZVNjaGVtYSxcbiAgbWFwU3R5bGU6IG1hcFN0eWxlU2NoZW1hXG59O1xuXG5jbGFzcyBLZXBsZXJHTFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3ZhbGlkVmVyc2lvbnMgPSBWRVJTSU9OUztcbiAgICB0aGlzLl92ZXJzaW9uID0gQ1VSUkVOVF9WRVJTSU9OO1xuICAgIHRoaXMuX3JlZHVjZXJTY2hlbWFzID0gUkVEVUNFUl9TQ0hFTUFTO1xuICAgIHRoaXMuX2RhdGFzZXRTY2hlbWEgPSBkYXRhc2V0U2NoZW1hO1xuXG4gICAgdGhpcy5fZGF0YXNldExhc3RTYXZlZCA9IG51bGw7XG4gICAgdGhpcy5fc2F2ZWREYXRhc2V0ID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBzdGF0ZVRvU2F2ZSA9IHtcbiAgICogICBkYXRhc2V0czogW1xuICAgKiAgICAge1xuICAgKiAgICAgICB2ZXJzaW9uOiAndjAnLFxuICAgKiAgICAgICBkYXRhOiB7aWQsIGxhYmVsLCBjb2xvciwgYWxsRGF0YSwgZmllbGRzfVxuICAgKiAgICAgfSxcbiAgICogICAgIHtcbiAgICogICAgICAgdmVyc2lvbjogJ3YwJyxcbiAgICogICAgICAgZGF0YToge2lkLCBsYWJlbCwgY29sb3IsIGFsbERhdGEsIGZpZWxkc31cbiAgICogICAgIH1cbiAgICogICBdLFxuICAgKiAgIGNvbmZpZzoge1xuICAgKiAgICAgdmVyc2lvbjogJ3YwJyxcbiAgICogICAgIGNvbmZpZzoge31cbiAgICogICB9LFxuICAgKiAgIGluZm86IHtcbiAgICogICAgIGFwcDogJ2tlcGxlci5nbCcsXG4gICAqICAgICBjcmVhdGVfYXQ6ICdNb24gTWF5IDI4IDIwMTggMjE6MDQ6NDYgR01ULTA3MDAgKFBEVCknXG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIEdldCBjb25maWcgYW5kIGRhdGEgb2YgY3VycmVudCBtYXAgdG8gc2F2ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAgICogQHJldHVybnMge3tkYXRhc2V0czogT2JqZWN0W10sIGNvbmZpZzogT2JqZWN0LCBpbmZvOiBPYmplY3R9fSBhcHAgc3RhdGUgdG8gc2F2ZVxuICAgKi9cbiAgc2F2ZShzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhc2V0czogdGhpcy5nZXREYXRhc2V0VG9TYXZlKHN0YXRlKSxcbiAgICAgIGNvbmZpZzogdGhpcy5nZXRDb25maWdUb1NhdmUoc3RhdGUpLFxuICAgICAgaW5mbzoge1xuICAgICAgICBhcHA6ICdrZXBsZXIuZ2wnLFxuICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvU3RyaW5nKCksXG4gICAgICAgIC4uLnRoaXMuZ2V0TWFwSW5mbyhzdGF0ZSlcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0TWFwSW5mbyhzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS52aXNTdGF0ZS5tYXBJbmZvO1xuICB9XG4gIC8qKlxuICAgKiAgTG9hZCBzYXZlZCBtYXAsIGFyZ3VtZW50IGNhbiBiZSAoZGF0YXNldHMsIGNvbmZpZykgb3IgKHtkYXRhc2V0cywgY29uZmlnfSlcbiAgICogQHBhcmFtIHtPYmplY3R8QXJyYXk8T2JqZWN0Pn0gc2F2ZWREYXRhc2V0c1xuICAgKiBAcGFyYW0ge09iamVjdH0gc2F2ZWRDb25maWdcbiAgICovXG4gIGxvYWQoc2F2ZWREYXRhc2V0cywgc2F2ZWRDb25maWcpIHtcbiAgICAvLyBpZiBwYXNzIGRhdGFzZXQgYW5kIGNvbmZpZyBpbiBhcyBhIHNpbmdsZSBvYmplY3RcbiAgICBpZiAoXG4gICAgICBhcmd1bWVudHMubGVuZ3RoID09PSAxICYmXG4gICAgICBpc1BsYWluT2JqZWN0KGFyZ3VtZW50c1swXSkgJiZcbiAgICAgIChBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXS5kYXRhc2V0cykgfHwgaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0uY29uZmlnKSlcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWQoYXJndW1lbnRzWzBdLmRhdGFzZXRzLCBhcmd1bWVudHNbMF0uY29uZmlnKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uKEFycmF5LmlzQXJyYXkoc2F2ZWREYXRhc2V0cykgPyB7ZGF0YXNldHM6IHRoaXMucGFyc2VTYXZlZERhdGEoc2F2ZWREYXRhc2V0cyl9IDoge30pLFxuICAgICAgLi4uKHNhdmVkQ29uZmlnID8ge2NvbmZpZzogdGhpcy5wYXJzZVNhdmVkQ29uZmlnKHNhdmVkQ29uZmlnKX0gOiB7fSlcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkYXRhIHRvIHNhdmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gYXBwIHN0YXRlXG4gICAqIEByZXR1cm5zIHt7dmVyc2lvbjogU3RyaW5nLCBkYXRhOiBPYmplY3R9fSAtIGRhdGFzZXQgdG8gc2F2ZVxuICAgKi9cbiAgZ2V0RGF0YXNldFRvU2F2ZShzdGF0ZSkge1xuICAgIGNvbnN0IGRhdGFDaGFuZ2VkU2luY2VMYXN0U2F2ZSA9IHRoaXMuaGFzRGF0YUNoYW5nZWQoc3RhdGUpO1xuICAgIGlmICghZGF0YUNoYW5nZWRTaW5jZUxhc3RTYXZlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2F2ZWREYXRhc2V0O1xuICAgIH1cblxuICAgIGNvbnN0IHt2aXNTdGF0ZX0gPSBzdGF0ZTtcblxuICAgIGNvbnN0IGRhdGFzZXRzID0gT2JqZWN0LnZhbHVlcyh2aXNTdGF0ZS5kYXRhc2V0cykubWFwKGRzID0+ICh7XG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgZGF0YTogdGhpcy5fZGF0YXNldFNjaGVtYVt0aGlzLl92ZXJzaW9uXS5zYXZlKGRzKVxuICAgIH0pKTtcblxuICAgIC8vIGtlZXAgYSBjb3B5IG9mIGZvcm1hdHRlZCBkYXRhc2V0cyB0byBzYXZlXG4gICAgdGhpcy5fZGF0YXNldExhc3RTYXZlZCA9IHZpc1N0YXRlLmRhdGFzZXRzO1xuICAgIHRoaXMuX3NhdmVkRGF0YXNldCA9IGRhdGFzZXRzO1xuXG4gICAgcmV0dXJuIGRhdGFzZXRzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBBcHAgY29uZmlnIHRvIHNhdmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gYXBwIHN0YXRlXG4gICAqIEByZXR1cm5zIHt7dmVyc2lvbjogU3RyaW5nLCBjb25maWc6IE9iamVjdH19IC0gY29uZmlnIHRvIHNhdmVcbiAgICovXG4gIGdldENvbmZpZ1RvU2F2ZShzdGF0ZSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5rZXlzKHRoaXMuX3JlZHVjZXJTY2hlbWFzKS5yZWR1Y2UoXG4gICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICAuLi4oc3RhdGVba2V5XSA/IHRoaXMuX3JlZHVjZXJTY2hlbWFzW2tleV1bdGhpcy5fdmVyc2lvbl0uc2F2ZShzdGF0ZVtrZXldKSA6IHt9KVxuICAgICAgfSksXG4gICAgICB7fVxuICAgICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmVyc2lvbjogdGhpcy5fdmVyc2lvbixcbiAgICAgIGNvbmZpZ1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUGFyc2Ugc2F2ZWQgZGF0YVxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhc2V0c1xuICAgKiBAcmV0dXJucyB7T2JqZWN0IHwgbnVsbH0gLSBkYXRhIHRvIHNhdmVcbiAgICovXG4gIHBhcnNlU2F2ZWREYXRhKGRhdGFzZXRzKSB7XG4gICAgcmV0dXJuIGRhdGFzZXRzLnJlZHVjZSgoYWNjdSwgZHMpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkVmVyc2lvbiA9IHRoaXMudmFsaWRhdGVWZXJzaW9uKGRzLnZlcnNpb24pO1xuICAgICAgaWYgKCF2YWxpZFZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIGFjY3U7XG4gICAgICB9XG4gICAgICBhY2N1LnB1c2godGhpcy5fZGF0YXNldFNjaGVtYVt2YWxpZFZlcnNpb25dLmxvYWQoZHMuZGF0YSkpO1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHNhdmVkIEFwcCBjb25maWdcbiAgICogQHBhcmFtIHtTdHJpbmd9IG9wdC52ZXJzaW9uIC0gY29uZmlnIHZlcnNpb25cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdC5jb25maWcgLSBzYXZlZCBjb25maWdcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIC0gY3VycmVudCBBcHAgU3RhdGVcbiAgICogQHJldHVybnMge09iamVjdCB8IG51bGx9IC0gcGFyc2VkIGNvbmZpZ1xuICAgKi9cbiAgcGFyc2VTYXZlZENvbmZpZyh7dmVyc2lvbiwgY29uZmlnfSwgc3RhdGUgPSB7fSkge1xuICAgIGNvbnN0IHZhbGlkVmVyc2lvbiA9IHRoaXMudmFsaWRhdGVWZXJzaW9uKHZlcnNpb24pO1xuICAgIGlmICghdmFsaWRWZXJzaW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY29uZmlnKS5yZWR1Y2UoXG4gICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICAuLi4oa2V5IGluIHRoaXMuX3JlZHVjZXJTY2hlbWFzXG4gICAgICAgICAgPyB0aGlzLl9yZWR1Y2VyU2NoZW1hc1trZXldW3ZhbGlkVmVyc2lvbl0ubG9hZChjb25maWdba2V5XSlcbiAgICAgICAgICA6IHt9KVxuICAgICAgfSksXG4gICAgICB7fVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdmVyc2lvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmVyc2lvblxuICAgKiBAcmV0dXJucyB7U3RyaW5nIHwgbnVsbH0gdmFsaWRWZXJzaW9uXG4gICAqL1xuICB2YWxpZGF0ZVZlcnNpb24odmVyc2lvbikge1xuICAgIGlmICghdmVyc2lvbikge1xuICAgICAgQ29uc29sZS5lcnJvcignVGhlcmUgaXMgbm8gdmVyc2lvbiBudW1iZXIgYXNzb2NpYXRlZCB3aXRoIHRoaXMgc2F2ZWQgbWFwJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3ZhbGlkVmVyc2lvbnNbdmVyc2lvbl0pIHtcbiAgICAgIENvbnNvbGUuZXJyb3IoYCR7dmVyc2lvbn0gaXMgbm90IGEgdmFsaWQgdmVyc2lvbmApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcnNpb247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgZGF0YSBoYXMgY2hhbmdlZCBzaW5jZSBsYXN0IHNhdmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtIHdoZXRoZXIgZGF0YSBoYXMgY2hhbmdlZCBvciBub3RcbiAgICovXG4gIGhhc0RhdGFDaGFuZ2VkKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFzZXRMYXN0U2F2ZWQgIT09IHN0YXRlLnZpc1N0YXRlLmRhdGFzZXRzO1xuICB9XG59XG5cbmNvbnN0IEtlcGxlckdMU2NoZW1hTWFuYWdlciA9IG5ldyBLZXBsZXJHTFNjaGVtYSgpO1xuXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHTFNjaGVtYU1hbmFnZXI7XG4iXX0=