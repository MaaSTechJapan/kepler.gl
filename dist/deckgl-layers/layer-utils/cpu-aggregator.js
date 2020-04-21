"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValueFunc = getValueFunc;
exports.getScaleFunctor = getScaleFunctor;
exports.getGetValue = getGetValue;
exports.getDimensionSortedBins = getDimensionSortedBins;
exports.getDimensionValueDomain = getDimensionValueDomain;
exports.getDimensionScale = getDimensionScale;
exports.getAggregatedData = getAggregatedData;
exports["default"] = exports.defaultDimensions = exports.defaultElevationDimension = exports.defaultColorDimension = exports.defaultAggregation = exports.DECK_AGGREGATION_MAP = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _aggregationLayers = require("@deck.gl/aggregation-layers");

var _window = require("global/window");

var _aggregateUtils = require("../../utils/aggregate-utils");

var _defaultSettings = require("../../constants/default-settings");

var _DECK_AGGREGATION_MAP;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DECK_AGGREGATION_MAP = (_DECK_AGGREGATION_MAP = {}, (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.SUM, _defaultSettings.AGGREGATION_TYPES.sum), (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.MEAN, _defaultSettings.AGGREGATION_TYPES.average), (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.MIN, _defaultSettings.AGGREGATION_TYPES.minimum), (0, _defineProperty2["default"])(_DECK_AGGREGATION_MAP, _aggregationLayers.AGGREGATION_OPERATION.MAX, _defaultSettings.AGGREGATION_TYPES.maximum), _DECK_AGGREGATION_MAP);
exports.DECK_AGGREGATION_MAP = DECK_AGGREGATION_MAP;

function getValueFunc(aggregation, accessor) {
  if (!aggregation || !_aggregationLayers.AGGREGATION_OPERATION[aggregation.toUpperCase()]) {
    _window.console.warn("Aggregation ".concat(aggregation, " is not supported"));
  }

  var op = _aggregationLayers.AGGREGATION_OPERATION[aggregation.toUpperCase()] || _aggregationLayers.AGGREGATION_OPERATION.SUM;

  var keplerOp = DECK_AGGREGATION_MAP[op];
  return function (pts) {
    return (0, _aggregateUtils.aggregate)(pts.map(accessor), keplerOp);
  };
}

function getScaleFunctor(scaleType) {
  if (!scaleType || !_defaultSettings.SCALE_FUNC[scaleType]) {
    _window.console.warn("Scale ".concat(scaleType, " is not supported"));
  }

  return _defaultSettings.SCALE_FUNC[scaleType] || _defaultSettings.SCALE_FUNC.quantize;
}

function nop() {}

function getGetValue(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var _step$triggers = step.triggers,
      value = _step$triggers.value,
      weight = _step$triggers.weight,
      aggregation = _step$triggers.aggregation;
  var getValue = props[value.prop];

  if (getValue === null) {
    // If `getValue` is not provided from props, build it with aggregation and weight.
    getValue = getValueFunc(props[aggregation.prop], props[weight.prop]);
  }

  if (getValue) {
    this._setDimensionState(key, {
      getValue: getValue
    });
  }
}

function getDimensionSortedBins(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var getValue = this.state.dimensions[key].getValue;
  var sortedBins = new _aggregationLayers._BinSorter(this.state.layerData.data || [], {
    getValue: getValue,
    filterData: props._filterData
  });

  this._setDimensionState(key, {
    sortedBins: sortedBins
  });
}

function getDimensionValueDomain(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var _step$triggers2 = step.triggers,
      lowerPercentile = _step$triggers2.lowerPercentile,
      upperPercentile = _step$triggers2.upperPercentile,
      scaleType = _step$triggers2.scaleType;

  if (!this.state.dimensions[key].sortedBins) {
    // the previous step should set sortedBins, if not, something went wrong
    return;
  } // for log and sqrt scale, returns linear domain by default
  // TODO: support other scale function domain in bin sorter


  var valueDomain = this.state.dimensions[key].sortedBins.getValueDomainByScale(props[scaleType.prop], [props[lowerPercentile.prop], props[upperPercentile.prop]]);

  this._setDimensionState(key, {
    valueDomain: valueDomain
  });
}

function getDimensionScale(step, props, dimensionUpdater) {
  var key = dimensionUpdater.key;
  var _step$triggers3 = step.triggers,
      domain = _step$triggers3.domain,
      range = _step$triggers3.range,
      scaleType = _step$triggers3.scaleType;
  var onSet = step.onSet;

  if (!this.state.dimensions[key].valueDomain) {
    // the previous step should set valueDomain, if not, something went wrong
    return;
  }

  var dimensionRange = props[range.prop];
  var dimensionDomain = props[domain.prop] || this.state.dimensions[key].valueDomain;
  var scaleFunctor = getScaleFunctor(scaleType && props[scaleType.prop])();
  var scaleFunc = scaleFunctor.domain(dimensionDomain).range(dimensionRange);

  if ((0, _typeof2["default"])(onSet) === 'object' && typeof props[onSet.props] === 'function') {
    props[onSet.props](scaleFunc.domain());
  }

  this._setDimensionState(key, {
    scaleFunc: scaleFunc
  });
}

function normalizeResult() {
  var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // support previous hexagonAggregator API
  if (result.hexagons) {
    return Object.assign({
      data: result.hexagons
    }, result);
  } else if (result.layerData) {
    return Object.assign({
      data: result.layerData
    }, result);
  }

  return result;
}

function getAggregatedData(step, props, aggregation, aggregationParams) {
  var aggr = step.triggers.aggregator;
  var aggregator = props[aggr.prop]; // result should contain a data array and other props
  // result = {data: [], ...other props}

  var result = aggregator(props, aggregationParams);
  this.setState({
    layerData: normalizeResult(result)
  });
}

var defaultAggregation = {
  key: 'position',
  updateSteps: [{
    key: 'aggregate',
    triggers: {
      cellSize: {
        prop: 'cellSize'
      },
      position: {
        prop: 'getPosition',
        updateTrigger: 'getPosition'
      },
      aggregator: {
        prop: 'gridAggregator'
      }
    },
    updater: getAggregatedData
  }]
};
exports.defaultAggregation = defaultAggregation;

function getSubLayerAccessor(dimensionState, dimension, layerProps) {
  return function (cell) {
    var sortedBins = dimensionState.sortedBins,
        scaleFunc = dimensionState.scaleFunc;
    var bin = sortedBins.binMap[cell.index];

    if (bin && bin.counts === 0) {
      // no points left in bin after filtering
      return dimension.nullValue;
    }

    var cv = bin && bin.value;
    var domain = scaleFunc.domain();
    var isValueInDomain = cv >= domain[0] && cv <= domain[domain.length - 1]; // if cell value is outside domain, set alpha to 0

    return isValueInDomain ? scaleFunc(cv) : dimension.nullValue;
  };
}

var defaultColorDimension = {
  key: 'fillColor',
  accessor: 'getFillColor',
  getPickingInfo: function getPickingInfo(dimensionState, cell) {
    var sortedBins = dimensionState.sortedBins;
    var colorValue = sortedBins.binMap[cell.index] && sortedBins.binMap[cell.index].value;
    return {
      colorValue: colorValue
    };
  },
  nullValue: [0, 0, 0, 0],
  updateSteps: [{
    key: 'getValue',
    triggers: {
      value: {
        prop: 'getColorValue',
        updateTrigger: 'getColorValue'
      },
      weight: {
        prop: 'getColorWeight',
        updateTrigger: 'getColorWeight'
      },
      aggregation: {
        prop: 'colorAggregation'
      }
    },
    updater: getGetValue
  }, {
    key: 'getBins',
    triggers: {
      _filterData: {
        prop: '_filterData',
        updateTrigger: '_filterData'
      }
    },
    updater: getDimensionSortedBins
  }, {
    key: 'getDomain',
    triggers: {
      lowerPercentile: {
        prop: 'lowerPercentile'
      },
      upperPercentile: {
        prop: 'upperPercentile'
      },
      scaleType: {
        prop: 'colorScaleType'
      }
    },
    updater: getDimensionValueDomain
  }, {
    key: 'getScaleFunc',
    triggers: {
      domain: {
        prop: 'colorDomain'
      },
      range: {
        prop: 'colorRange'
      },
      scaleType: {
        prop: 'colorScaleType'
      }
    },
    onSet: {
      props: 'onSetColorDomain'
    },
    updater: getDimensionScale
  }],
  getSubLayerAccessor: getSubLayerAccessor
};
exports.defaultColorDimension = defaultColorDimension;
var defaultElevationDimension = {
  key: 'elevation',
  accessor: 'getElevation',
  getPickingInfo: function getPickingInfo(dimensionState, cell) {
    var sortedBins = dimensionState.sortedBins;
    var elevationValue = sortedBins.binMap[cell.index] && sortedBins.binMap[cell.index].value;
    return {
      elevationValue: elevationValue
    };
  },
  nullValue: -1,
  updateSteps: [{
    key: 'getValue',
    triggers: {
      value: {
        prop: 'getElevationValue',
        updateTrigger: 'getElevationValue'
      },
      weight: {
        prop: 'getElevationWeight',
        updateTrigger: 'getElevationWeight'
      },
      aggregation: {
        prop: 'elevationAggregation'
      }
    },
    updater: getGetValue
  }, {
    key: 'getBins',
    triggers: {
      _filterData: {
        prop: '_filterData',
        updateTrigger: '_filterData'
      }
    },
    updater: getDimensionSortedBins
  }, {
    key: 'getDomain',
    triggers: {
      lowerPercentile: {
        prop: 'elevationLowerPercentile'
      },
      upperPercentile: {
        prop: 'elevationUpperPercentile'
      },
      scaleType: {
        prop: 'elevationScaleType'
      }
    },
    updater: getDimensionValueDomain
  }, {
    key: 'getScaleFunc',
    triggers: {
      domain: {
        prop: 'elevationDomain'
      },
      range: {
        prop: 'elevationRange'
      },
      scaleType: {
        prop: 'elevationScaleType'
      }
    },
    onSet: {
      props: 'onSetElevationDomain'
    },
    updater: getDimensionScale
  }],
  getSubLayerAccessor: getSubLayerAccessor
};
exports.defaultElevationDimension = defaultElevationDimension;
var _defaultDimensions = [defaultColorDimension, defaultElevationDimension];
exports.defaultDimensions = _defaultDimensions;

var CPUAggregator = /*#__PURE__*/function () {
  function CPUAggregator() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CPUAggregator);
    this.state = _objectSpread({
      layerData: {},
      dimensions: {// color: {
        //   getValue: null,
        //   domain: null,
        //   sortedBins: null,
        //   scaleFunc: nop
        // },
        // elevation: {
        //   getValue: null,
        //   domain: null,
        //   sortedBins: null,
        //   scaleFunc: nop
        // }
      }
    }, opts.initialState);
    this.dimensionUpdaters = {};
    this.aggregationUpdater = {};

    this._addDimension(opts.dimensions || _defaultDimensions);

    this._addAggregation(opts.aggregation || defaultAggregation);
  }

  (0, _createClass2["default"])(CPUAggregator, [{
    key: "updateAllDimensions",
    value: function updateAllDimensions(props) {
      var dimensionChanges = []; // update all dimensions

      for (var dim in this.dimensionUpdaters) {
        var updaters = this._accumulateUpdaters(0, props, this.dimensionUpdaters[dim]);

        dimensionChanges = dimensionChanges.concat(updaters);
      }

      dimensionChanges.forEach(function (f) {
        return typeof f === 'function' && f();
      });
    }
  }, {
    key: "updateAggregation",
    value: function updateAggregation(props, aggregationParams) {
      var updaters = this._accumulateUpdaters(0, props, this.aggregationUpdater);

      updaters.forEach(function (f) {
        return typeof f === 'function' && f(aggregationParams);
      });
    }
  }, {
    key: "updateState",
    value: function updateState(opts, aggregationParams) {
      var oldProps = opts.oldProps,
          props = opts.props,
          changeFlags = opts.changeFlags;
      var dimensionChanges = [];

      if (changeFlags.dataChanged) {
        // if data changed update everything
        this.updateAggregation(props, aggregationParams);
        this.updateAllDimensions(props);
        return this.state;
      }

      var aggregationChanges = this._getAggregationChanges(oldProps, props, changeFlags);

      if (aggregationChanges && aggregationChanges.length) {
        // get aggregatedData
        aggregationChanges.forEach(function (f) {
          return typeof f === 'function' && f(aggregationParams);
        });
        this.updateAllDimensions(props);
      } else {
        // only update dimensions
        dimensionChanges = this._getDimensionChanges(oldProps, props, changeFlags) || [];
        dimensionChanges.forEach(function (f) {
          return typeof f === 'function' && f();
        });
      }

      return this.state;
    } // Update private state

  }, {
    key: "setState",
    value: function setState(updateObject) {
      this.state = Object.assign({}, this.state, updateObject);
    } // Update private state.dimensions

  }, {
    key: "_setDimensionState",
    value: function _setDimensionState(key, updateObject) {
      this.setState({
        dimensions: Object.assign({}, this.state.dimensions, (0, _defineProperty2["default"])({}, key, Object.assign({}, this.state.dimensions[key], updateObject)))
      });
    }
  }, {
    key: "_addAggregation",
    value: function _addAggregation(aggregation) {
      this.aggregationUpdater = aggregation;
    }
  }, {
    key: "_addDimension",
    value: function _addDimension() {
      var _this = this;

      var dimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      dimensions.forEach(function (dimension) {
        var key = dimension.key;
        _this.dimensionUpdaters[key] = dimension;
      });
    }
  }, {
    key: "_needUpdateStep",
    value: function _needUpdateStep(dimensionStep, oldProps, props, changeFlags) {
      // whether need to update current dimension step
      // dimension step is the value, domain, scaleFunction of each dimension
      // each step is an object with properties links to layer prop and whether the prop is
      // controlled by updateTriggers
      return Object.values(dimensionStep.triggers).some(function (item) {
        if (item.updateTrigger) {
          // check based on updateTriggers change first
          return changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged[item.updateTrigger]);
        } // fallback to direct comparison


        return oldProps[item.prop] !== props[item.prop];
      });
    }
  }, {
    key: "_accumulateUpdaters",
    value: function _accumulateUpdaters(step, props, dimension) {
      var updaters = [];

      for (var i = step; i < dimension.updateSteps.length; i++) {
        if (typeof dimension.updateSteps[i].updater === 'function') {
          updaters.push(dimension.updateSteps[i].updater.bind(this, dimension.updateSteps[i], props, dimension));
        }
      }

      return updaters;
    }
  }, {
    key: "_getAllUpdaters",
    value: function _getAllUpdaters(dimension, oldProps, props, changeFlags) {
      var _this2 = this;

      var updaters = [];
      var needUpdateStep = dimension.updateSteps.findIndex(function (step) {
        return _this2._needUpdateStep(step, oldProps, props, changeFlags);
      });

      if (needUpdateStep > -1) {
        updaters = updaters.concat(this._accumulateUpdaters(needUpdateStep, props, dimension));
      }

      return updaters;
    }
  }, {
    key: "_getAggregationChanges",
    value: function _getAggregationChanges(oldProps, props, changeFlags) {
      var updaters = this._getAllUpdaters(this.aggregationUpdater, oldProps, props, changeFlags);

      return updaters.length ? updaters : null;
    }
  }, {
    key: "_getDimensionChanges",
    value: function _getDimensionChanges(oldProps, props, changeFlags) {
      var updaters = []; // get dimension to be updated

      for (var key in this.dimensionUpdaters) {
        // return the first triggered updater for each dimension
        var dimension = this.dimensionUpdaters[key];

        var dimensionUpdaters = this._getAllUpdaters(dimension, oldProps, props, changeFlags);

        updaters = updaters.concat(dimensionUpdaters);
      }

      return updaters.length ? updaters : null;
    }
  }, {
    key: "getUpdateTriggers",
    value: function getUpdateTriggers(props) {
      var _this3 = this;

      var _updateTriggers = props.updateTriggers || {};

      var updateTriggers = {};

      var _loop = function _loop(key) {
        var _this3$dimensionUpdat = _this3.dimensionUpdaters[key],
            accessor = _this3$dimensionUpdat.accessor,
            updateSteps = _this3$dimensionUpdat.updateSteps; // fold dimension triggers into each accessor

        updateTriggers[accessor] = {};
        updateSteps.forEach(function (step) {
          Object.values(step.triggers || []).forEach(function (_ref) {
            var prop = _ref.prop,
                updateTrigger = _ref.updateTrigger;

            if (updateTrigger) {
              // if prop is based on updateTrigger e.g. getColorValue, getColorWeight
              // and updateTriggers is passed in from layer prop
              // fold the updateTriggers into accessor
              var fromProp = _updateTriggers[updateTrigger];

              if ((0, _typeof2["default"])(fromProp) === 'object' && !Array.isArray(fromProp)) {
                // if updateTrigger is an object spread it
                Object.assign(updateTriggers[accessor], fromProp);
              } else if (fromProp !== undefined) {
                updateTriggers[accessor][prop] = fromProp;
              }
            } else {
              // if prop is not based on updateTrigger
              updateTriggers[accessor][prop] = props[prop];
            }
          });
        });
      };

      for (var key in this.dimensionUpdaters) {
        _loop(key);
      }

      return updateTriggers;
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref2, layerProps) {
      var info = _ref2.info;
      var isPicked = info.picked && info.index > -1;
      var object = null;

      if (isPicked) {
        var cell = this.state.layerData.data[info.index];
        var binInfo = {};

        for (var key in this.dimensionUpdaters) {
          var getPickingInfo = this.dimensionUpdaters[key].getPickingInfo;

          if (typeof getPickingInfo === 'function') {
            binInfo = Object.assign({}, binInfo, getPickingInfo(this.state.dimensions[key], cell, layerProps));
          }
        }

        object = Object.assign(binInfo, cell, {
          points: cell.filteredPoints || cell.points
        });
      } // add bin  and  to info


      return Object.assign(info, {
        picked: Boolean(object),
        // override object with picked cell
        object: object
      });
    }
  }, {
    key: "getAccessor",
    value: function getAccessor(dimensionKey, layerProps) {
      if (!this.dimensionUpdaters.hasOwnProperty(dimensionKey)) {
        return nop;
      }

      return this.dimensionUpdaters[dimensionKey].getSubLayerAccessor(this.state.dimensions[dimensionKey], this.dimensionUpdaters[dimensionKey], layerProps);
    }
  }], [{
    key: "defaultDimensions",
    value: function defaultDimensions() {
      return _defaultDimensions;
    }
  }]);
  return CPUAggregator;
}();

exports["default"] = CPUAggregator;
CPUAggregator.getDimensionScale = getDimensionScale;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2xheWVyLXV0aWxzL2NwdS1hZ2dyZWdhdG9yLmpzIl0sIm5hbWVzIjpbIkRFQ0tfQUdHUkVHQVRJT05fTUFQIiwiQUdHUkVHQVRJT05fT1BFUkFUSU9OIiwiU1VNIiwiQUdHUkVHQVRJT05fVFlQRVMiLCJzdW0iLCJNRUFOIiwiYXZlcmFnZSIsIk1JTiIsIm1pbmltdW0iLCJNQVgiLCJtYXhpbXVtIiwiZ2V0VmFsdWVGdW5jIiwiYWdncmVnYXRpb24iLCJhY2Nlc3NvciIsInRvVXBwZXJDYXNlIiwiQ29uc29sZSIsIndhcm4iLCJvcCIsImtlcGxlck9wIiwicHRzIiwibWFwIiwiZ2V0U2NhbGVGdW5jdG9yIiwic2NhbGVUeXBlIiwiU0NBTEVfRlVOQyIsInF1YW50aXplIiwibm9wIiwiZ2V0R2V0VmFsdWUiLCJzdGVwIiwicHJvcHMiLCJkaW1lbnNpb25VcGRhdGVyIiwia2V5IiwidHJpZ2dlcnMiLCJ2YWx1ZSIsIndlaWdodCIsImdldFZhbHVlIiwicHJvcCIsIl9zZXREaW1lbnNpb25TdGF0ZSIsImdldERpbWVuc2lvblNvcnRlZEJpbnMiLCJzdGF0ZSIsImRpbWVuc2lvbnMiLCJzb3J0ZWRCaW5zIiwiQmluU29ydGVyIiwibGF5ZXJEYXRhIiwiZGF0YSIsImZpbHRlckRhdGEiLCJfZmlsdGVyRGF0YSIsImdldERpbWVuc2lvblZhbHVlRG9tYWluIiwibG93ZXJQZXJjZW50aWxlIiwidXBwZXJQZXJjZW50aWxlIiwidmFsdWVEb21haW4iLCJnZXRWYWx1ZURvbWFpbkJ5U2NhbGUiLCJnZXREaW1lbnNpb25TY2FsZSIsImRvbWFpbiIsInJhbmdlIiwib25TZXQiLCJkaW1lbnNpb25SYW5nZSIsImRpbWVuc2lvbkRvbWFpbiIsInNjYWxlRnVuY3RvciIsInNjYWxlRnVuYyIsIm5vcm1hbGl6ZVJlc3VsdCIsInJlc3VsdCIsImhleGFnb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0QWdncmVnYXRlZERhdGEiLCJhZ2dyZWdhdGlvblBhcmFtcyIsImFnZ3IiLCJhZ2dyZWdhdG9yIiwic2V0U3RhdGUiLCJkZWZhdWx0QWdncmVnYXRpb24iLCJ1cGRhdGVTdGVwcyIsImNlbGxTaXplIiwicG9zaXRpb24iLCJ1cGRhdGVUcmlnZ2VyIiwidXBkYXRlciIsImdldFN1YkxheWVyQWNjZXNzb3IiLCJkaW1lbnNpb25TdGF0ZSIsImRpbWVuc2lvbiIsImxheWVyUHJvcHMiLCJjZWxsIiwiYmluIiwiYmluTWFwIiwiaW5kZXgiLCJjb3VudHMiLCJudWxsVmFsdWUiLCJjdiIsImlzVmFsdWVJbkRvbWFpbiIsImxlbmd0aCIsImRlZmF1bHRDb2xvckRpbWVuc2lvbiIsImdldFBpY2tpbmdJbmZvIiwiY29sb3JWYWx1ZSIsImRlZmF1bHRFbGV2YXRpb25EaW1lbnNpb24iLCJlbGV2YXRpb25WYWx1ZSIsImRlZmF1bHREaW1lbnNpb25zIiwiQ1BVQWdncmVnYXRvciIsIm9wdHMiLCJpbml0aWFsU3RhdGUiLCJkaW1lbnNpb25VcGRhdGVycyIsImFnZ3JlZ2F0aW9uVXBkYXRlciIsIl9hZGREaW1lbnNpb24iLCJfYWRkQWdncmVnYXRpb24iLCJkaW1lbnNpb25DaGFuZ2VzIiwiZGltIiwidXBkYXRlcnMiLCJfYWNjdW11bGF0ZVVwZGF0ZXJzIiwiY29uY2F0IiwiZm9yRWFjaCIsImYiLCJvbGRQcm9wcyIsImNoYW5nZUZsYWdzIiwiZGF0YUNoYW5nZWQiLCJ1cGRhdGVBZ2dyZWdhdGlvbiIsInVwZGF0ZUFsbERpbWVuc2lvbnMiLCJhZ2dyZWdhdGlvbkNoYW5nZXMiLCJfZ2V0QWdncmVnYXRpb25DaGFuZ2VzIiwiX2dldERpbWVuc2lvbkNoYW5nZXMiLCJ1cGRhdGVPYmplY3QiLCJkaW1lbnNpb25TdGVwIiwidmFsdWVzIiwic29tZSIsIml0ZW0iLCJ1cGRhdGVUcmlnZ2Vyc0NoYW5nZWQiLCJhbGwiLCJpIiwicHVzaCIsImJpbmQiLCJuZWVkVXBkYXRlU3RlcCIsImZpbmRJbmRleCIsIl9uZWVkVXBkYXRlU3RlcCIsIl9nZXRBbGxVcGRhdGVycyIsIl91cGRhdGVUcmlnZ2VycyIsInVwZGF0ZVRyaWdnZXJzIiwiZnJvbVByb3AiLCJBcnJheSIsImlzQXJyYXkiLCJ1bmRlZmluZWQiLCJpbmZvIiwiaXNQaWNrZWQiLCJwaWNrZWQiLCJvYmplY3QiLCJiaW5JbmZvIiwicG9pbnRzIiwiZmlsdGVyZWRQb2ludHMiLCJCb29sZWFuIiwiZGltZW5zaW9uS2V5IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNQSxvQkFBb0Isd0ZBQzlCQyx5Q0FBc0JDLEdBRFEsRUFDRkMsbUNBQWtCQyxHQURoQiwyREFFOUJILHlDQUFzQkksSUFGUSxFQUVERixtQ0FBa0JHLE9BRmpCLDJEQUc5QkwseUNBQXNCTSxHQUhRLEVBR0ZKLG1DQUFrQkssT0FIaEIsMkRBSTlCUCx5Q0FBc0JRLEdBSlEsRUFJRk4sbUNBQWtCTyxPQUpoQix5QkFBMUI7OztBQU9BLFNBQVNDLFlBQVQsQ0FBc0JDLFdBQXRCLEVBQW1DQyxRQUFuQyxFQUE2QztBQUNsRCxNQUFJLENBQUNELFdBQUQsSUFBZ0IsQ0FBQ1gseUNBQXNCVyxXQUFXLENBQUNFLFdBQVosRUFBdEIsQ0FBckIsRUFBdUU7QUFDckVDLG9CQUFRQyxJQUFSLHVCQUE0QkosV0FBNUI7QUFDRDs7QUFFRCxNQUFNSyxFQUFFLEdBQUdoQix5Q0FBc0JXLFdBQVcsQ0FBQ0UsV0FBWixFQUF0QixLQUFvRGIseUNBQXNCQyxHQUFyRjs7QUFDQSxNQUFNZ0IsUUFBUSxHQUFHbEIsb0JBQW9CLENBQUNpQixFQUFELENBQXJDO0FBRUEsU0FBTyxVQUFBRSxHQUFHO0FBQUEsV0FBSSwrQkFBVUEsR0FBRyxDQUFDQyxHQUFKLENBQVFQLFFBQVIsQ0FBVixFQUE2QkssUUFBN0IsQ0FBSjtBQUFBLEdBQVY7QUFDRDs7QUFFTSxTQUFTRyxlQUFULENBQXlCQyxTQUF6QixFQUFvQztBQUN6QyxNQUFJLENB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QUwsQ0FBdUIrQyxZQUF2QixFQUFxQ3JFLG1CQUFyQyxDQUNMLEtBQUtyQyxLQUFMLENBQVdDLFVBQVgsQ0FBc0J5RyxZQUF0QixDQURLLEVBRUwsS0FBSy9DLGlCQUFMLENBQXVCK0MsWUFBdkIsQ0FGSyxFQUdMbEUsVUFISyxDQUFQO0FBS0Q7Ozt3Q0FsTjBCO0FBQ3pCLGFBQU9lLGtCQUFQO0FBQ0Q7Ozs7OztBQW1OSEMsYUFBYSxDQUFDM0MsaUJBQWQsR0FBa0NBLGlCQUFsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qIGVzbGludC1kaXNhYmxlIGd1YXJkLWZvci1pbiAqL1xyXG5pbXBvcnQge19CaW5Tb3J0ZXIgYXMgQmluU29ydGVyLCBBR0dSRUdBVElPTl9PUEVSQVRJT059IGZyb20gJ0BkZWNrLmdsL2FnZ3JlZ2F0aW9uLWxheWVycyc7XHJcbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcclxuXHJcbmltcG9ydCB7YWdncmVnYXRlfSBmcm9tICd1dGlscy9hZ2dyZWdhdGUtdXRpbHMnO1xyXG5pbXBvcnQge0FHR1JFR0FUSU9OX1RZUEVTLCBTQ0FMRV9GVU5DfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XHJcblxyXG5leHBvcnQgY29uc3QgREVDS19BR0dSRUdBVElPTl9NQVAgPSB7XHJcbiAgW0FHR1JFR0FUSU9OX09QRVJBVElPTi5TVU1dOiBBR0dSRUdBVElPTl9UWVBFUy5zdW0sXHJcbiAgW0FHR1JFR0FUSU9OX09QRVJBVElPTi5NRUFOXTogQUdHUkVHQVRJT05fVFlQRVMuYXZlcmFnZSxcclxuICBbQUdHUkVHQVRJT05fT1BFUkFUSU9OLk1JTl06IEFHR1JFR0FUSU9OX1RZUEVTLm1pbmltdW0sXHJcbiAgW0FHR1JFR0FUSU9OX09QRVJBVElPTi5NQVhdOiBBR0dSRUdBVElPTl9UWVBFUy5tYXhpbXVtXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVGdW5jKGFnZ3JlZ2F0aW9uLCBhY2Nlc3Nvcikge1xyXG4gIGlmICghYWdncmVnYXRpb24gfHwgIUFHR1JFR0FUSU9OX09QRVJBVElPTlthZ2dyZWdhdGlvbi50b1VwcGVyQ2FzZSgpXSkge1xyXG4gICAgQ29uc29sZS53YXJuKGBBZ2dyZWdhdGlvbiAke2FnZ3JlZ2F0aW9ufSBpcyBub3Qgc3VwcG9ydGVkYCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcCA9IEFHR1JFR0FUSU9OX09QRVJBVElPTlthZ2dyZWdhdGlvbi50b1VwcGVyQ2FzZSgpXSB8fCBBR0dSRUdBVElPTl9PUEVSQVRJT04uU1VNO1xyXG4gIGNvbnN0IGtlcGxlck9wID0gREVDS19BR0dSRUdBVElPTl9NQVBbb3BdO1xyXG5cclxuICByZXR1cm4gcHRzID0+IGFnZ3JlZ2F0ZShwdHMubWFwKGFjY2Vzc29yKSwga2VwbGVyT3ApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2NhbGVGdW5jdG9yKHNjYWxlVHlwZSkge1xyXG4gIGlmICghc2NhbGVUeXBlIHx8ICFTQ0FMRV9GVU5DW3NjYWxlVHlwZV0pIHtcclxuICAgIENvbnNvbGUud2FybihgU2NhbGUgJHtzY2FsZVR5cGV9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcclxuICB9XHJcbiAgcmV0dXJuIFNDQUxFX0ZVTkNbc2NhbGVUeXBlXSB8fCBTQ0FMRV9GVU5DLnF1YW50aXplO1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3AoKSB7fVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdldFZhbHVlKHN0ZXAsIHByb3BzLCBkaW1lbnNpb25VcGRhdGVyKSB7XHJcbiAgY29uc3Qge2tleX0gPSBkaW1lbnNpb25VcGRhdGVyO1xyXG4gIGNvbnN0IHt2YWx1ZSwgd2VpZ2h0LCBhZ2dyZWdhdGlvbn0gPSBzdGVwLnRyaWdnZXJzO1xyXG5cclxuICBsZXQgZ2V0VmFsdWUgPSBwcm9wc1t2YWx1ZS5wcm9wXTtcclxuXHJcbiAgaWYgKGdldFZhbHVlID09PSBudWxsKSB7XHJcbiAgICAvLyBJZiBgZ2V0VmFsdWVgIGlzIG5vdCBwcm92aWRlZCBmcm9tIHByb3BzLCBidWlsZCBpdCB3aXRoIGFnZ3JlZ2F0aW9uIGFuZCB3ZWlnaHQuXHJcbiAgICBnZXRWYWx1ZSA9IGdldFZhbHVlRnVuYyhwcm9wc1thZ2dyZWdhdGlvbi5wcm9wXSwgcHJvcHNbd2VpZ2h0LnByb3BdKTtcclxuICB9XHJcblxyXG4gIGlmIChnZXRWYWx1ZSkge1xyXG4gICAgdGhpcy5fc2V0RGltZW5zaW9uU3RhdGUoa2V5LCB7Z2V0VmFsdWV9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaW1lbnNpb25Tb3J0ZWRCaW5zKHN0ZXAsIHByb3BzLCBkaW1lbnNpb25VcGRhdGVyKSB7XHJcbiAgY29uc3Qge2tleX0gPSBkaW1lbnNpb25VcGRhdGVyO1xyXG4gIGNvbnN0IHtnZXRWYWx1ZX0gPSB0aGlzLnN0YXRlLmRpbWVuc2lvbnNba2V5XTtcclxuXHJcbiAgY29uc3Qgc29ydGVkQmlucyA9IG5ldyBCaW5Tb3J0ZXIodGhpcy5zdGF0ZS5sYXllckRhdGEuZGF0YSB8fCBbXSwge1xyXG4gICAgZ2V0VmFsdWUsXHJcbiAgICBmaWx0ZXJEYXRhOiBwcm9wcy5fZmlsdGVyRGF0YVxyXG4gIH0pO1xyXG4gIHRoaXMuX3NldERpbWVuc2lvblN0YXRlKGtleSwge3NvcnRlZEJpbnN9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERpbWVuc2lvblZhbHVlRG9tYWluKHN0ZXAsIHByb3BzLCBkaW1lbnNpb25VcGRhdGVyKSB7XHJcbiAgY29uc3Qge2tleX0gPSBkaW1lbnNpb25VcGRhdGVyO1xyXG4gIGNvbnN0IHtcclxuICAgIHRyaWdnZXJzOiB7bG93ZXJQZXJjZW50aWxlLCB1cHBlclBlcmNlbnRpbGUsIHNjYWxlVHlwZX1cclxuICB9ID0gc3RlcDtcclxuXHJcbiAgaWYgKCF0aGlzLnN0YXRlLmRpbWVuc2lvbnNba2V5XS5zb3J0ZWRCaW5zKSB7XHJcbiAgICAvLyB0aGUgcHJldmlvdXMgc3RlcCBzaG91bGQgc2V0IHNvcnRlZEJpbnMsIGlmIG5vdCwgc29tZXRoaW5nIHdlbnQgd3JvbmdcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIGZvciBsb2cgYW5kIHNxcnQgc2NhbGUsIHJldHVybnMgbGluZWFyIGRvbWFpbiBieSBkZWZhdWx0XHJcbiAgLy8gVE9ETzogc3VwcG9ydCBvdGhlciBzY2FsZSBmdW5jdGlvbiBkb21haW4gaW4gYmluIHNvcnRlclxyXG4gIGNvbnN0IHZhbHVlRG9tYWluID0gdGhpcy5zdGF0ZS5kaW1lbnNpb25zW2tleV0uc29ydGVkQmlucy5nZXRWYWx1ZURvbWFpbkJ5U2NhbGUoXHJcbiAgICBwcm9wc1tzY2FsZVR5cGUucHJvcF0sXHJcbiAgICBbcHJvcHNbbG93ZXJQZXJjZW50aWxlLnByb3BdLCBwcm9wc1t1cHBlclBlcmNlbnRpbGUucHJvcF1dXHJcbiAgKTtcclxuXHJcbiAgdGhpcy5fc2V0RGltZW5zaW9uU3RhdGUoa2V5LCB7dmFsdWVEb21haW59KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERpbWVuc2lvblNjYWxlKHN0ZXAsIHByb3BzLCBkaW1lbnNpb25VcGRhdGVyKSB7XHJcbiAgY29uc3Qge2tleX0gPSBkaW1lbnNpb25VcGRhdGVyO1xyXG4gIGNvbnN0IHtkb21haW4sIHJhbmdlLCBzY2FsZVR5cGV9ID0gc3RlcC50cmlnZ2VycztcclxuICBjb25zdCB7b25TZXR9ID0gc3RlcDtcclxuICBpZiAoIXRoaXMuc3RhdGUuZGltZW5zaW9uc1trZXldLnZhbHVlRG9tYWluKSB7XHJcbiAgICAvLyB0aGUgcHJldmlvdXMgc3RlcCBzaG91bGQgc2V0IHZhbHVlRG9tYWluLCBpZiBub3QsIHNvbWV0aGluZyB3ZW50IHdyb25nXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBkaW1lbnNpb25SYW5nZSA9IHByb3BzW3JhbmdlLnByb3BdO1xyXG4gIGNvbnN0IGRpbWVuc2lvbkRvbWFpbiA9IHByb3BzW2RvbWFpbi5wcm9wXSB8fCB0aGlzLnN0YXRlLmRpbWVuc2lvbnNba2V5XS52YWx1ZURvbWFpbjtcclxuXHJcbiAgY29uc3Qgc2NhbGVGdW5jdG9yID0gZ2V0U2NhbGVGdW5jdG9yKHNjYWxlVHlwZSAmJiBwcm9wc1tzY2FsZVR5cGUucHJvcF0pKCk7XHJcblxyXG4gIGNvbnN0IHNjYWxlRnVuYyA9IHNjYWxlRnVuY3Rvci5kb21haW4oZGltZW5zaW9uRG9tYWluKS5yYW5nZShkaW1lbnNpb25SYW5nZSk7XHJcblxyXG4gIGlmICh0eXBlb2Ygb25TZXQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwcm9wc1tvblNldC5wcm9wc10gPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHByb3BzW29uU2V0LnByb3BzXShzY2FsZUZ1bmMuZG9tYWluKCkpO1xyXG4gIH1cclxuICB0aGlzLl9zZXREaW1lbnNpb25TdGF0ZShrZXksIHtzY2FsZUZ1bmN9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplUmVzdWx0KHJlc3VsdCA9IHt9KSB7XHJcbiAgLy8gc3VwcG9ydCBwcmV2aW91cyBoZXhhZ29uQWdncmVnYXRvciBBUElcclxuICBpZiAocmVzdWx0LmhleGFnb25zKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7ZGF0YTogcmVzdWx0LmhleGFnb25zfSwgcmVzdWx0KTtcclxuICB9IGVsc2UgaWYgKHJlc3VsdC5sYXllckRhdGEpIHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHtkYXRhOiByZXN1bHQubGF5ZXJEYXRhfSwgcmVzdWx0KTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBZ2dyZWdhdGVkRGF0YShzdGVwLCBwcm9wcywgYWdncmVnYXRpb24sIGFnZ3JlZ2F0aW9uUGFyYW1zKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdHJpZ2dlcnM6IHthZ2dyZWdhdG9yOiBhZ2dyfVxyXG4gIH0gPSBzdGVwO1xyXG4gIGNvbnN0IGFnZ3JlZ2F0b3IgPSBwcm9wc1thZ2dyLnByb3BdO1xyXG5cclxuICAvLyByZXN1bHQgc2hvdWxkIGNvbnRhaW4gYSBkYXRhIGFycmF5IGFuZCBvdGhlciBwcm9wc1xyXG4gIC8vIHJlc3VsdCA9IHtkYXRhOiBbXSwgLi4ub3RoZXIgcHJvcHN9XHJcbiAgY29uc3QgcmVzdWx0ID0gYWdncmVnYXRvcihwcm9wcywgYWdncmVnYXRpb25QYXJhbXMpO1xyXG4gIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgbGF5ZXJEYXRhOiBub3JtYWxpemVSZXN1bHQocmVzdWx0KVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdEFnZ3JlZ2F0aW9uID0ge1xyXG4gIGtleTogJ3Bvc2l0aW9uJyxcclxuICB1cGRhdGVTdGVwczogW1xyXG4gICAge1xyXG4gICAgICBrZXk6ICdhZ2dyZWdhdGUnLFxyXG4gICAgICB0cmlnZ2Vyczoge1xyXG4gICAgICAgIGNlbGxTaXplOiB7XHJcbiAgICAgICAgICBwcm9wOiAnY2VsbFNpemUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgcHJvcDogJ2dldFBvc2l0aW9uJyxcclxuICAgICAgICAgIHVwZGF0ZVRyaWdnZXI6ICdnZXRQb3NpdGlvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFnZ3JlZ2F0b3I6IHtcclxuICAgICAgICAgIHByb3A6ICdncmlkQWdncmVnYXRvcidcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZXI6IGdldEFnZ3JlZ2F0ZWREYXRhXHJcbiAgICB9XHJcbiAgXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0U3ViTGF5ZXJBY2Nlc3NvcihkaW1lbnNpb25TdGF0ZSwgZGltZW5zaW9uLCBsYXllclByb3BzKSB7XHJcbiAgcmV0dXJuIGNlbGwgPT4ge1xyXG4gICAgY29uc3Qge3NvcnRlZEJpbnMsIHNjYWxlRnVuY30gPSBkaW1lbnNpb25TdGF0ZTtcclxuICAgIGNvbnN0IGJpbiA9IHNvcnRlZEJpbnMuYmluTWFwW2NlbGwuaW5kZXhdO1xyXG5cclxuICAgIGlmIChiaW4gJiYgYmluLmNvdW50cyA9PT0gMCkge1xyXG4gICAgICAvLyBubyBwb2ludHMgbGVmdCBpbiBiaW4gYWZ0ZXIgZmlsdGVyaW5nXHJcbiAgICAgIHJldHVybiBkaW1lbnNpb24ubnVsbFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN2ID0gYmluICYmIGJpbi52YWx1ZTtcclxuICAgIGNvbnN0IGRvbWFpbiA9IHNjYWxlRnVuYy5kb21haW4oKTtcclxuXHJcbiAgICBjb25zdCBpc1ZhbHVlSW5Eb21haW4gPSBjdiA+PSBkb21haW5bMF0gJiYgY3YgPD0gZG9tYWluW2RvbWFpbi5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAvLyBpZiBjZWxsIHZhbHVlIGlzIG91dHNpZGUgZG9tYWluLCBzZXQgYWxwaGEgdG8gMFxyXG4gICAgcmV0dXJuIGlzVmFsdWVJbkRvbWFpbiA/IHNjYWxlRnVuYyhjdikgOiBkaW1lbnNpb24ubnVsbFZhbHVlO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29sb3JEaW1lbnNpb24gPSB7XHJcbiAga2V5OiAnZmlsbENvbG9yJyxcclxuICBhY2Nlc3NvcjogJ2dldEZpbGxDb2xvcicsXHJcbiAgZ2V0UGlja2luZ0luZm86IChkaW1lbnNpb25TdGF0ZSwgY2VsbCkgPT4ge1xyXG4gICAgY29uc3Qge3NvcnRlZEJpbnN9ID0gZGltZW5zaW9uU3RhdGU7XHJcbiAgICBjb25zdCBjb2xvclZhbHVlID0gc29ydGVkQmlucy5iaW5NYXBbY2VsbC5pbmRleF0gJiYgc29ydGVkQmlucy5iaW5NYXBbY2VsbC5pbmRleF0udmFsdWU7XHJcbiAgICByZXR1cm4ge2NvbG9yVmFsdWV9O1xyXG4gIH0sXHJcbiAgbnVsbFZhbHVlOiBbMCwgMCwgMCwgMF0sXHJcbiAgdXBkYXRlU3RlcHM6IFtcclxuICAgIHtcclxuICAgICAga2V5OiAnZ2V0VmFsdWUnLFxyXG4gICAgICB0cmlnZ2Vyczoge1xyXG4gICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICBwcm9wOiAnZ2V0Q29sb3JWYWx1ZScsXHJcbiAgICAgICAgICB1cGRhdGVUcmlnZ2VyOiAnZ2V0Q29sb3JWYWx1ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdlaWdodDoge1xyXG4gICAgICAgICAgcHJvcDogJ2dldENvbG9yV2VpZ2h0JyxcclxuICAgICAgICAgIHVwZGF0ZVRyaWdnZXI6ICdnZXRDb2xvcldlaWdodCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFnZ3JlZ2F0aW9uOiB7XHJcbiAgICAgICAgICBwcm9wOiAnY29sb3JBZ2dyZWdhdGlvbidcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZXI6IGdldEdldFZhbHVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdnZXRCaW5zJyxcclxuICAgICAgdHJpZ2dlcnM6IHtcclxuICAgICAgICBfZmlsdGVyRGF0YToge1xyXG4gICAgICAgICAgcHJvcDogJ19maWx0ZXJEYXRhJyxcclxuICAgICAgICAgIHVwZGF0ZVRyaWdnZXI6ICdfZmlsdGVyRGF0YSdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZXI6IGdldERpbWVuc2lvblNvcnRlZEJpbnNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2dldERvbWFpbicsXHJcbiAgICAgIHRyaWdnZXJzOiB7XHJcbiAgICAgICAgbG93ZXJQZXJjZW50aWxlOiB7XHJcbiAgICAgICAgICBwcm9wOiAnbG93ZXJQZXJjZW50aWxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBwZXJQZXJjZW50aWxlOiB7XHJcbiAgICAgICAgICBwcm9wOiAndXBwZXJQZXJjZW50aWxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGVUeXBlOiB7cHJvcDogJ2NvbG9yU2NhbGVUeXBlJ31cclxuICAgICAgfSxcclxuICAgICAgdXBkYXRlcjogZ2V0RGltZW5zaW9uVmFsdWVEb21haW5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2dldFNjYWxlRnVuYycsXHJcbiAgICAgIHRyaWdnZXJzOiB7XHJcbiAgICAgICAgZG9tYWluOiB7cHJvcDogJ2NvbG9yRG9tYWluJ30sXHJcbiAgICAgICAgcmFuZ2U6IHtwcm9wOiAnY29sb3JSYW5nZSd9LFxyXG4gICAgICAgIHNjYWxlVHlwZToge3Byb3A6ICdjb2xvclNjYWxlVHlwZSd9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uU2V0OiB7XHJcbiAgICAgICAgcHJvcHM6ICdvblNldENvbG9yRG9tYWluJ1xyXG4gICAgICB9LFxyXG4gICAgICB1cGRhdGVyOiBnZXREaW1lbnNpb25TY2FsZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgZ2V0U3ViTGF5ZXJBY2Nlc3NvclxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRFbGV2YXRpb25EaW1lbnNpb24gPSB7XHJcbiAga2V5OiAnZWxldmF0aW9uJyxcclxuICBhY2Nlc3NvcjogJ2dldEVsZXZhdGlvbicsXHJcbiAgZ2V0UGlja2luZ0luZm86IChkaW1lbnNpb25TdGF0ZSwgY2VsbCkgPT4ge1xyXG4gICAgY29uc3Qge3NvcnRlZEJpbnN9ID0gZGltZW5zaW9uU3RhdGU7XHJcbiAgICBjb25zdCBlbGV2YXRpb25WYWx1ZSA9IHNvcnRlZEJpbnMuYmluTWFwW2NlbGwuaW5kZXhdICYmIHNvcnRlZEJpbnMuYmluTWFwW2NlbGwuaW5kZXhdLnZhbHVlO1xyXG4gICAgcmV0dXJuIHtlbGV2YXRpb25WYWx1ZX07XHJcbiAgfSxcclxuICBudWxsVmFsdWU6IC0xLFxyXG4gIHVwZGF0ZVN0ZXBzOiBbXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2dldFZhbHVlJyxcclxuICAgICAgdHJpZ2dlcnM6IHtcclxuICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgcHJvcDogJ2dldEVsZXZhdGlvblZhbHVlJyxcclxuICAgICAgICAgIHVwZGF0ZVRyaWdnZXI6ICdnZXRFbGV2YXRpb25WYWx1ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdlaWdodDoge1xyXG4gICAgICAgICAgcHJvcDogJ2dldEVsZXZhdGlvbldlaWdodCcsXHJcbiAgICAgICAgICB1cGRhdGVUcmlnZ2VyOiAnZ2V0RWxldmF0aW9uV2VpZ2h0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWdncmVnYXRpb246IHtcclxuICAgICAgICAgIHByb3A6ICdlbGV2YXRpb25BZ2dyZWdhdGlvbidcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZXI6IGdldEdldFZhbHVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdnZXRCaW5zJyxcclxuICAgICAgdHJpZ2dlcnM6IHtcclxuICAgICAgICBfZmlsdGVyRGF0YToge1xyXG4gICAgICAgICAgcHJvcDogJ19maWx0ZXJEYXRhJyxcclxuICAgICAgICAgIHVwZGF0ZVRyaWdnZXI6ICdfZmlsdGVyRGF0YSdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZXI6IGdldERpbWVuc2lvblNvcnRlZEJpbnNcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJ2dldERvbWFpbicsXHJcbiAgICAgIHRyaWdnZXJzOiB7XHJcbiAgICAgICAgbG93ZXJQZXJjZW50aWxlOiB7XHJcbiAgICAgICAgICBwcm9wOiAnZWxldmF0aW9uTG93ZXJQZXJjZW50aWxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBwZXJQZXJjZW50aWxlOiB7XHJcbiAgICAgICAgICBwcm9wOiAnZWxldmF0aW9uVXBwZXJQZXJjZW50aWxlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NhbGVUeXBlOiB7cHJvcDogJ2VsZXZhdGlvblNjYWxlVHlwZSd9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZXI6IGdldERpbWVuc2lvblZhbHVlRG9tYWluXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICdnZXRTY2FsZUZ1bmMnLFxyXG4gICAgICB0cmlnZ2Vyczoge1xyXG4gICAgICAgIGRvbWFpbjoge3Byb3A6ICdlbGV2YXRpb25Eb21haW4nfSxcclxuICAgICAgICByYW5nZToge3Byb3A6ICdlbGV2YXRpb25SYW5nZSd9LFxyXG4gICAgICAgIHNjYWxlVHlwZToge3Byb3A6ICdlbGV2YXRpb25TY2FsZVR5cGUnfVxyXG4gICAgICB9LFxyXG4gICAgICBvblNldDoge1xyXG4gICAgICAgIHByb3BzOiAnb25TZXRFbGV2YXRpb25Eb21haW4nXHJcbiAgICAgIH0sXHJcbiAgICAgIHVwZGF0ZXI6IGdldERpbWVuc2lvblNjYWxlXHJcbiAgICB9XHJcbiAgXSxcclxuICBnZXRTdWJMYXllckFjY2Vzc29yXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdERpbWVuc2lvbnMgPSBbZGVmYXVsdENvbG9yRGltZW5zaW9uLCBkZWZhdWx0RWxldmF0aW9uRGltZW5zaW9uXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENQVUFnZ3JlZ2F0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbGF5ZXJEYXRhOiB7fSxcclxuICAgICAgZGltZW5zaW9uczoge1xyXG4gICAgICAgIC8vIGNvbG9yOiB7XHJcbiAgICAgICAgLy8gICBnZXRWYWx1ZTogbnVsbCxcclxuICAgICAgICAvLyAgIGRvbWFpbjogbnVsbCxcclxuICAgICAgICAvLyAgIHNvcnRlZEJpbnM6IG51bGwsXHJcbiAgICAgICAgLy8gICBzY2FsZUZ1bmM6IG5vcFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gZWxldmF0aW9uOiB7XHJcbiAgICAgICAgLy8gICBnZXRWYWx1ZTogbnVsbCxcclxuICAgICAgICAvLyAgIGRvbWFpbjogbnVsbCxcclxuICAgICAgICAvLyAgIHNvcnRlZEJpbnM6IG51bGwsXHJcbiAgICAgICAgLy8gICBzY2FsZUZ1bmM6IG5vcFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgLi4ub3B0cy5pbml0aWFsU3RhdGVcclxuICAgIH07XHJcbiAgICB0aGlzLmRpbWVuc2lvblVwZGF0ZXJzID0ge307XHJcbiAgICB0aGlzLmFnZ3JlZ2F0aW9uVXBkYXRlciA9IHt9O1xyXG5cclxuICAgIHRoaXMuX2FkZERpbWVuc2lvbihvcHRzLmRpbWVuc2lvbnMgfHwgZGVmYXVsdERpbWVuc2lvbnMpO1xyXG4gICAgdGhpcy5fYWRkQWdncmVnYXRpb24ob3B0cy5hZ2dyZWdhdGlvbiB8fCBkZWZhdWx0QWdncmVnYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlZmF1bHREaW1lbnNpb25zKCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHREaW1lbnNpb25zO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWxsRGltZW5zaW9ucyhwcm9wcykge1xyXG4gICAgbGV0IGRpbWVuc2lvbkNoYW5nZXMgPSBbXTtcclxuICAgIC8vIHVwZGF0ZSBhbGwgZGltZW5zaW9uc1xyXG4gICAgZm9yIChjb25zdCBkaW0gaW4gdGhpcy5kaW1lbnNpb25VcGRhdGVycykge1xyXG4gICAgICBjb25zdCB1cGRhdGVycyA9IHRoaXMuX2FjY3VtdWxhdGVVcGRhdGVycygwLCBwcm9wcywgdGhpcy5kaW1lbnNpb25VcGRhdGVyc1tkaW1dKTtcclxuICAgICAgZGltZW5zaW9uQ2hhbmdlcyA9IGRpbWVuc2lvbkNoYW5nZXMuY29uY2F0KHVwZGF0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBkaW1lbnNpb25DaGFuZ2VzLmZvckVhY2goZiA9PiB0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyAmJiBmKCkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWdncmVnYXRpb24ocHJvcHMsIGFnZ3JlZ2F0aW9uUGFyYW1zKSB7XHJcbiAgICBjb25zdCB1cGRhdGVycyA9IHRoaXMuX2FjY3VtdWxhdGVVcGRhdGVycygwLCBwcm9wcywgdGhpcy5hZ2dyZWdhdGlvblVwZGF0ZXIpO1xyXG4gICAgdXBkYXRlcnMuZm9yRWFjaChmID0+IHR5cGVvZiBmID09PSAnZnVuY3Rpb24nICYmIGYoYWdncmVnYXRpb25QYXJhbXMpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0YXRlKG9wdHMsIGFnZ3JlZ2F0aW9uUGFyYW1zKSB7XHJcbiAgICBjb25zdCB7b2xkUHJvcHMsIHByb3BzLCBjaGFuZ2VGbGFnc30gPSBvcHRzO1xyXG4gICAgbGV0IGRpbWVuc2lvbkNoYW5nZXMgPSBbXTtcclxuXHJcbiAgICBpZiAoY2hhbmdlRmxhZ3MuZGF0YUNoYW5nZWQpIHtcclxuICAgICAgLy8gaWYgZGF0YSBjaGFuZ2VkIHVwZGF0ZSBldmVyeXRoaW5nXHJcbiAgICAgIHRoaXMudXBkYXRlQWdncmVnYXRpb24ocHJvcHMsIGFnZ3JlZ2F0aW9uUGFyYW1zKTtcclxuICAgICAgdGhpcy51cGRhdGVBbGxEaW1lbnNpb25zKHByb3BzKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFnZ3JlZ2F0aW9uQ2hhbmdlcyA9IHRoaXMuX2dldEFnZ3JlZ2F0aW9uQ2hhbmdlcyhvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKTtcclxuXHJcbiAgICBpZiAoYWdncmVnYXRpb25DaGFuZ2VzICYmIGFnZ3JlZ2F0aW9uQ2hhbmdlcy5sZW5ndGgpIHtcclxuICAgICAgLy8gZ2V0IGFnZ3JlZ2F0ZWREYXRhXHJcbiAgICAgIGFnZ3JlZ2F0aW9uQ2hhbmdlcy5mb3JFYWNoKGYgPT4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbicgJiYgZihhZ2dyZWdhdGlvblBhcmFtcykpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUFsbERpbWVuc2lvbnMocHJvcHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gb25seSB1cGRhdGUgZGltZW5zaW9uc1xyXG4gICAgICBkaW1lbnNpb25DaGFuZ2VzID0gdGhpcy5fZ2V0RGltZW5zaW9uQ2hhbmdlcyhvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKSB8fCBbXTtcclxuICAgICAgZGltZW5zaW9uQ2hhbmdlcy5mb3JFYWNoKGYgPT4gdHlwZW9mIGYgPT09ICdmdW5jdGlvbicgJiYgZigpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICB9XHJcblxyXG4gIC8vIFVwZGF0ZSBwcml2YXRlIHN0YXRlXHJcbiAgc2V0U3RhdGUodXBkYXRlT2JqZWN0KSB7XHJcbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgdXBkYXRlT2JqZWN0KTtcclxuICB9XHJcblxyXG4gIC8vIFVwZGF0ZSBwcml2YXRlIHN0YXRlLmRpbWVuc2lvbnNcclxuICBfc2V0RGltZW5zaW9uU3RhdGUoa2V5LCB1cGRhdGVPYmplY3QpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBkaW1lbnNpb25zOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRpbWVuc2lvbnMsIHtcclxuICAgICAgICBba2V5XTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kaW1lbnNpb25zW2tleV0sIHVwZGF0ZU9iamVjdClcclxuICAgICAgfSlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2FkZEFnZ3JlZ2F0aW9uKGFnZ3JlZ2F0aW9uKSB7XHJcbiAgICB0aGlzLmFnZ3JlZ2F0aW9uVXBkYXRlciA9IGFnZ3JlZ2F0aW9uO1xyXG4gIH1cclxuXHJcbiAgX2FkZERpbWVuc2lvbihkaW1lbnNpb25zID0gW10pIHtcclxuICAgIGRpbWVuc2lvbnMuZm9yRWFjaChkaW1lbnNpb24gPT4ge1xyXG4gICAgICBjb25zdCB7a2V5fSA9IGRpbWVuc2lvbjtcclxuICAgICAgdGhpcy5kaW1lbnNpb25VcGRhdGVyc1trZXldID0gZGltZW5zaW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfbmVlZFVwZGF0ZVN0ZXAoZGltZW5zaW9uU3RlcCwgb2xkUHJvcHMsIHByb3BzLCBjaGFuZ2VGbGFncykge1xyXG4gICAgLy8gd2hldGhlciBuZWVkIHRvIHVwZGF0ZSBjdXJyZW50IGRpbWVuc2lvbiBzdGVwXHJcbiAgICAvLyBkaW1lbnNpb24gc3RlcCBpcyB0aGUgdmFsdWUsIGRvbWFpbiwgc2NhbGVGdW5jdGlvbiBvZiBlYWNoIGRpbWVuc2lvblxyXG4gICAgLy8gZWFjaCBzdGVwIGlzIGFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgbGlua3MgdG8gbGF5ZXIgcHJvcCBhbmQgd2hldGhlciB0aGUgcHJvcCBpc1xyXG4gICAgLy8gY29udHJvbGxlZCBieSB1cGRhdGVUcmlnZ2Vyc1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZGltZW5zaW9uU3RlcC50cmlnZ2Vycykuc29tZShpdGVtID0+IHtcclxuICAgICAgaWYgKGl0ZW0udXBkYXRlVHJpZ2dlcikge1xyXG4gICAgICAgIC8vIGNoZWNrIGJhc2VkIG9uIHVwZGF0ZVRyaWdnZXJzIGNoYW5nZSBmaXJzdFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBjaGFuZ2VGbGFncy51cGRhdGVUcmlnZ2Vyc0NoYW5nZWQgJiZcclxuICAgICAgICAgIChjaGFuZ2VGbGFncy51cGRhdGVUcmlnZ2Vyc0NoYW5nZWQuYWxsIHx8XHJcbiAgICAgICAgICAgIGNoYW5nZUZsYWdzLnVwZGF0ZVRyaWdnZXJzQ2hhbmdlZFtpdGVtLnVwZGF0ZVRyaWdnZXJdKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZmFsbGJhY2sgdG8gZGlyZWN0IGNvbXBhcmlzb25cclxuICAgICAgcmV0dXJuIG9sZFByb3BzW2l0ZW0ucHJvcF0gIT09IHByb3BzW2l0ZW0ucHJvcF07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9hY2N1bXVsYXRlVXBkYXRlcnMoc3RlcCwgcHJvcHMsIGRpbWVuc2lvbikge1xyXG4gICAgY29uc3QgdXBkYXRlcnMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSBzdGVwOyBpIDwgZGltZW5zaW9uLnVwZGF0ZVN0ZXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZGltZW5zaW9uLnVwZGF0ZVN0ZXBzW2ldLnVwZGF0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB1cGRhdGVycy5wdXNoKFxyXG4gICAgICAgICAgZGltZW5zaW9uLnVwZGF0ZVN0ZXBzW2ldLnVwZGF0ZXIuYmluZCh0aGlzLCBkaW1lbnNpb24udXBkYXRlU3RlcHNbaV0sIHByb3BzLCBkaW1lbnNpb24pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cGRhdGVycztcclxuICB9XHJcblxyXG4gIF9nZXRBbGxVcGRhdGVycyhkaW1lbnNpb24sIG9sZFByb3BzLCBwcm9wcywgY2hhbmdlRmxhZ3MpIHtcclxuICAgIGxldCB1cGRhdGVycyA9IFtdO1xyXG4gICAgY29uc3QgbmVlZFVwZGF0ZVN0ZXAgPSBkaW1lbnNpb24udXBkYXRlU3RlcHMuZmluZEluZGV4KHN0ZXAgPT5cclxuICAgICAgdGhpcy5fbmVlZFVwZGF0ZVN0ZXAoc3RlcCwgb2xkUHJvcHMsIHByb3BzLCBjaGFuZ2VGbGFncylcclxuICAgICk7XHJcblxyXG4gICAgaWYgKG5lZWRVcGRhdGVTdGVwID4gLTEpIHtcclxuICAgICAgdXBkYXRlcnMgPSB1cGRhdGVycy5jb25jYXQodGhpcy5fYWNjdW11bGF0ZVVwZGF0ZXJzKG5lZWRVcGRhdGVTdGVwLCBwcm9wcywgZGltZW5zaW9uKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZXJzO1xyXG4gIH1cclxuXHJcbiAgX2dldEFnZ3JlZ2F0aW9uQ2hhbmdlcyhvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKSB7XHJcbiAgICBjb25zdCB1cGRhdGVycyA9IHRoaXMuX2dldEFsbFVwZGF0ZXJzKHRoaXMuYWdncmVnYXRpb25VcGRhdGVyLCBvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKTtcclxuICAgIHJldHVybiB1cGRhdGVycy5sZW5ndGggPyB1cGRhdGVycyA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBfZ2V0RGltZW5zaW9uQ2hhbmdlcyhvbGRQcm9wcywgcHJvcHMsIGNoYW5nZUZsYWdzKSB7XHJcbiAgICBsZXQgdXBkYXRlcnMgPSBbXTtcclxuXHJcbiAgICAvLyBnZXQgZGltZW5zaW9uIHRvIGJlIHVwZGF0ZWRcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGltZW5zaW9uVXBkYXRlcnMpIHtcclxuICAgICAgLy8gcmV0dXJuIHRoZSBmaXJzdCB0cmlnZ2VyZWQgdXBkYXRlciBmb3IgZWFjaCBkaW1lbnNpb25cclxuICAgICAgY29uc3QgZGltZW5zaW9uID0gdGhpcy5kaW1lbnNpb25VcGRhdGVyc1trZXldO1xyXG4gICAgICBjb25zdCBkaW1lbnNpb25VcGRhdGVycyA9IHRoaXMuX2dldEFsbFVwZGF0ZXJzKGRpbWVuc2lvbiwgb2xkUHJvcHMsIHByb3BzLCBjaGFuZ2VGbGFncyk7XHJcbiAgICAgIHVwZGF0ZXJzID0gdXBkYXRlcnMuY29uY2F0KGRpbWVuc2lvblVwZGF0ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXBkYXRlcnMubGVuZ3RoID8gdXBkYXRlcnMgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXBkYXRlVHJpZ2dlcnMocHJvcHMpIHtcclxuICAgIGNvbnN0IF91cGRhdGVUcmlnZ2VycyA9IHByb3BzLnVwZGF0ZVRyaWdnZXJzIHx8IHt9O1xyXG4gICAgY29uc3QgdXBkYXRlVHJpZ2dlcnMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRpbWVuc2lvblVwZGF0ZXJzKSB7XHJcbiAgICAgIGNvbnN0IHthY2Nlc3NvciwgdXBkYXRlU3RlcHN9ID0gdGhpcy5kaW1lbnNpb25VcGRhdGVyc1trZXldO1xyXG4gICAgICAvLyBmb2xkIGRpbWVuc2lvbiB0cmlnZ2VycyBpbnRvIGVhY2ggYWNjZXNzb3JcclxuICAgICAgdXBkYXRlVHJpZ2dlcnNbYWNjZXNzb3JdID0ge307XHJcblxyXG4gICAgICB1cGRhdGVTdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoc3RlcC50cmlnZ2VycyB8fCBbXSkuZm9yRWFjaCgoe3Byb3AsIHVwZGF0ZVRyaWdnZXJ9KSA9PiB7XHJcbiAgICAgICAgICBpZiAodXBkYXRlVHJpZ2dlcikge1xyXG4gICAgICAgICAgICAvLyBpZiBwcm9wIGlzIGJhc2VkIG9uIHVwZGF0ZVRyaWdnZXIgZS5nLiBnZXRDb2xvclZhbHVlLCBnZXRDb2xvcldlaWdodFxyXG4gICAgICAgICAgICAvLyBhbmQgdXBkYXRlVHJpZ2dlcnMgaXMgcGFzc2VkIGluIGZyb20gbGF5ZXIgcHJvcFxyXG4gICAgICAgICAgICAvLyBmb2xkIHRoZSB1cGRhdGVUcmlnZ2VycyBpbnRvIGFjY2Vzc29yXHJcbiAgICAgICAgICAgIGNvbnN0IGZyb21Qcm9wID0gX3VwZGF0ZVRyaWdnZXJzW3VwZGF0ZVRyaWdnZXJdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZyb21Qcm9wID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShmcm9tUHJvcCkpIHtcclxuICAgICAgICAgICAgICAvLyBpZiB1cGRhdGVUcmlnZ2VyIGlzIGFuIG9iamVjdCBzcHJlYWQgaXRcclxuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHVwZGF0ZVRyaWdnZXJzW2FjY2Vzc29yXSwgZnJvbVByb3ApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZyb21Qcm9wICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICB1cGRhdGVUcmlnZ2Vyc1thY2Nlc3Nvcl1bcHJvcF0gPSBmcm9tUHJvcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaWYgcHJvcCBpcyBub3QgYmFzZWQgb24gdXBkYXRlVHJpZ2dlclxyXG4gICAgICAgICAgICB1cGRhdGVUcmlnZ2Vyc1thY2Nlc3Nvcl1bcHJvcF0gPSBwcm9wc1twcm9wXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVwZGF0ZVRyaWdnZXJzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGlja2luZ0luZm8oe2luZm99LCBsYXllclByb3BzKSB7XHJcbiAgICBjb25zdCBpc1BpY2tlZCA9IGluZm8ucGlja2VkICYmIGluZm8uaW5kZXggPiAtMTtcclxuICAgIGxldCBvYmplY3QgPSBudWxsO1xyXG5cclxuICAgIGlmIChpc1BpY2tlZCkge1xyXG4gICAgICBjb25zdCBjZWxsID0gdGhpcy5zdGF0ZS5sYXllckRhdGEuZGF0YVtpbmZvLmluZGV4XTtcclxuXHJcbiAgICAgIGxldCBiaW5JbmZvID0ge307XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGltZW5zaW9uVXBkYXRlcnMpIHtcclxuICAgICAgICBjb25zdCB7Z2V0UGlja2luZ0luZm99ID0gdGhpcy5kaW1lbnNpb25VcGRhdGVyc1trZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0UGlja2luZ0luZm8gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgIGJpbkluZm8gPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgICAgICB7fSxcclxuICAgICAgICAgICAgYmluSW5mbyxcclxuICAgICAgICAgICAgZ2V0UGlja2luZ0luZm8odGhpcy5zdGF0ZS5kaW1lbnNpb25zW2tleV0sIGNlbGwsIGxheWVyUHJvcHMpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgb2JqZWN0ID0gT2JqZWN0LmFzc2lnbihiaW5JbmZvLCBjZWxsLCB7XHJcbiAgICAgICAgcG9pbnRzOiBjZWxsLmZpbHRlcmVkUG9pbnRzIHx8IGNlbGwucG9pbnRzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCBiaW4gIGFuZCAgdG8gaW5mb1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oaW5mbywge1xyXG4gICAgICBwaWNrZWQ6IEJvb2xlYW4ob2JqZWN0KSxcclxuICAgICAgLy8gb3ZlcnJpZGUgb2JqZWN0IHdpdGggcGlja2VkIGNlbGxcclxuICAgICAgb2JqZWN0XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEFjY2Vzc29yKGRpbWVuc2lvbktleSwgbGF5ZXJQcm9wcykge1xyXG4gICAgaWYgKCF0aGlzLmRpbWVuc2lvblVwZGF0ZXJzLmhhc093blByb3BlcnR5KGRpbWVuc2lvbktleSkpIHtcclxuICAgICAgcmV0dXJuIG5vcDtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmRpbWVuc2lvblVwZGF0ZXJzW2RpbWVuc2lvbktleV0uZ2V0U3ViTGF5ZXJBY2Nlc3NvcihcclxuICAgICAgdGhpcy5zdGF0ZS5kaW1lbnNpb25zW2RpbWVuc2lvbktleV0sXHJcbiAgICAgIHRoaXMuZGltZW5zaW9uVXBkYXRlcnNbZGltZW5zaW9uS2V5XSxcclxuICAgICAgbGF5ZXJQcm9wc1xyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkNQVUFnZ3JlZ2F0b3IuZ2V0RGltZW5zaW9uU2NhbGUgPSBnZXREaW1lbnNpb25TY2FsZTtcclxuIl19